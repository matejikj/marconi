import { prefersReducedMotion } from "./prefersReducedMotion";

type Cleanup = () => void;

function initViewportChromeMotion(): Cleanup {
  const header = document.querySelector<HTMLElement>("[data-header]");
  const root = document.documentElement;

  let rafId = 0;

  const update = () => {
    rafId = 0;

    const y = window.scrollY || window.pageYOffset || 0;
    if (header) {
      header.dataset.scrolled = y > 12 ? "true" : "false";
    }

    const scrollEl = document.scrollingElement || document.documentElement;
    const max = Math.max(scrollEl.scrollHeight - window.innerHeight, 1);
    const progress = Math.max(0, Math.min(1, y / max));
    root.style.setProperty("--scroll-progress", progress.toFixed(4));
  };

  const requestUpdate = () => {
    if (rafId) return;
    rafId = window.requestAnimationFrame(update);
  };

  update();
  window.addEventListener("scroll", requestUpdate, { passive: true });
  window.addEventListener("resize", requestUpdate, { passive: true });

  return () => {
    window.removeEventListener("scroll", requestUpdate);
    window.removeEventListener("resize", requestUpdate);
    if (rafId) window.cancelAnimationFrame(rafId);
  };
}

function initRevealMotion(reducedMotion: boolean): Cleanup {
  const revealEls = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
  if (revealEls.length === 0) return () => {};

  if (reducedMotion || typeof IntersectionObserver === "undefined") {
    revealEls.forEach((el) => el.classList.add("is-visible"));
    return () => {};
  }

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        const el = entry.target as HTMLElement;
        el.classList.add("is-visible");
        observer.unobserve(el);
      }
    },
    {
      threshold: 0.14,
      rootMargin: "0px 0px -8% 0px",
    },
  );

  revealEls.forEach((el) => observer.observe(el));
  return () => observer.disconnect();
}

function initInfrastructureMotion(reducedMotion: boolean): Cleanup {
  const section = document.getElementById("infrastruktura");
  if (!section) return () => {};

  const diagram = section.querySelector<SVGElement>("[data-infra-diagram]");
  const nodeGroups = Array.from(section.querySelectorAll<SVGGElement>("[data-step-node]"));
  const desktopStepCards = Array.from(section.querySelectorAll<HTMLElement>("ol [data-infra-step]"));
  const mobileDetails = Array.from(section.querySelectorAll<HTMLDetailsElement>("details[data-infra-step]"));

  const nodeById = new Map(nodeGroups.map((node) => [node.dataset.stepNode ?? "", node]));
  const cardById = new Map(desktopStepCards.map((card) => [card.dataset.infraStep ?? "", card]));
  const detailsById = new Map(mobileDetails.map((detail) => [detail.dataset.infraStep ?? "", detail]));

  let activeId: string | null = null;

  const setActiveStep = (id: string) => {
    if (!id || activeId === id) return;
    activeId = id;

    for (const [stepId, card] of cardById.entries()) {
      card.dataset.active = stepId === id ? "true" : "false";
    }

    for (const [stepId, detail] of detailsById.entries()) {
      detail.dataset.active = stepId === id ? "true" : "false";
    }

    for (const [stepId, node] of nodeById.entries()) {
      const isActive = stepId === id;
      node.dataset.active = isActive ? "true" : "false";
      const shape = node.querySelector<SVGElement>(".infra-node");
      shape?.classList.toggle("infra-node--active", isActive);
    }
  };

  const initialId =
    desktopStepCards.find((card) => card.dataset.active === "true")?.dataset.infraStep ??
    mobileDetails.find((detail) => detail.dataset.active === "true")?.dataset.infraStep;

  if (initialId) setActiveStep(initialId);

  const cleanupFns: Cleanup[] = [];

  if (diagram) {
    const markLinesReady = () => {
      diagram.dataset.linesReady = "true";
    };

    if (reducedMotion || typeof IntersectionObserver === "undefined") {
      markLinesReady();
    } else {
      const lineObserver = new IntersectionObserver(
        (entries) => {
          if (entries.some((entry) => entry.isIntersecting)) {
            markLinesReady();
            lineObserver.disconnect();
          }
        },
        { threshold: 0.2 },
      );
      lineObserver.observe(section);
      cleanupFns.push(() => lineObserver.disconnect());
    }
  }

  for (const [stepId, node] of nodeById.entries()) {
    const enter = () => {
      node.dataset.hovered = "true";
    };
    const leave = () => {
      node.dataset.hovered = "false";
    };
    const activate = () => {
      setActiveStep(stepId);
      const card = cardById.get(stepId);
      if (card) {
        card.scrollIntoView({ block: "nearest", behavior: reducedMotion ? "auto" : "smooth" });
      }
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Enter" && event.key !== " ") return;
      event.preventDefault();
      activate();
    };

    node.addEventListener("mouseenter", enter);
    node.addEventListener("mouseleave", leave);
    node.addEventListener("focusin", enter);
    node.addEventListener("focusout", leave);
    node.addEventListener("click", activate);
    node.addEventListener("keydown", onKeyDown);

    cleanupFns.push(() => {
      node.removeEventListener("mouseenter", enter);
      node.removeEventListener("mouseleave", leave);
      node.removeEventListener("focusin", enter);
      node.removeEventListener("focusout", leave);
      node.removeEventListener("click", activate);
      node.removeEventListener("keydown", onKeyDown);
    });
  }

  let stepObserver: IntersectionObserver | null = null;
  const desktopMedia = window.matchMedia("(min-width: 1024px)");

  const bindDesktopObserver = () => {
    stepObserver?.disconnect();
    stepObserver = null;

    if (!desktopMedia.matches || desktopStepCards.length === 0 || typeof IntersectionObserver === "undefined") {
      return;
    }

    stepObserver = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        const top = visibleEntries[0];
        if (!top) return;

        const id = (top.target as HTMLElement).dataset.infraStep;
        if (id) setActiveStep(id);
      },
      {
        threshold: [0.2, 0.4, 0.6, 0.8],
        rootMargin: "-12% 0px -25% 0px",
      },
    );

    desktopStepCards.forEach((card) => stepObserver?.observe(card));
  };

  bindDesktopObserver();
  desktopMedia.addEventListener("change", bindDesktopObserver);
  cleanupFns.push(() => {
    desktopMedia.removeEventListener("change", bindDesktopObserver);
    stepObserver?.disconnect();
  });

  for (const detail of mobileDetails) {
    const onToggle = () => {
      if (!detail.open) return;

      const id = detail.dataset.infraStep;
      if (id) setActiveStep(id);

      for (const sibling of mobileDetails) {
        if (sibling !== detail) sibling.open = false;
      }
    };

    detail.addEventListener("toggle", onToggle);
    cleanupFns.push(() => detail.removeEventListener("toggle", onToggle));
  }

  return () => cleanupFns.forEach((fn) => fn());
}

function initSectorCardInteractions(): Cleanup {
  const cards = Array.from(document.querySelectorAll<HTMLElement>("[data-sector-card]"));
  if (cards.length === 0) return () => {};

  const coarsePointer = window.matchMedia("(pointer: coarse)");
  const cleanupFns: Cleanup[] = [];

  const setExclusiveActive = (activeCard: HTMLElement | null) => {
    for (const card of cards) {
      card.dataset.active = activeCard && card === activeCard ? "true" : "false";
    }
  };

  for (const card of cards) {
    const onClick = () => {
      if (!coarsePointer.matches) return;
      setExclusiveActive(card.dataset.active === "true" ? null : card);
    };

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Enter" && event.key !== " ") return;
      event.preventDefault();
      setExclusiveActive(card.dataset.active === "true" ? null : card);
    };

    card.addEventListener("click", onClick);
    card.addEventListener("keydown", onKeyDown);

    cleanupFns.push(() => {
      card.removeEventListener("click", onClick);
      card.removeEventListener("keydown", onKeyDown);
    });
  }

  return () => cleanupFns.forEach((fn) => fn());
}

export function initHomepageMotion(): Cleanup {
  if (typeof window === "undefined" || typeof document === "undefined") return () => {};

  const reducedMotion = prefersReducedMotion();
  const cleanupFns: Cleanup[] = [
    initViewportChromeMotion(),
    initRevealMotion(reducedMotion),
    initInfrastructureMotion(reducedMotion),
    initSectorCardInteractions(),
  ];

  return () => cleanupFns.forEach((fn) => fn());
}

