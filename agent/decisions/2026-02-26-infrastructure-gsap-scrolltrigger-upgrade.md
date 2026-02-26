# Decision: Infrastructure Section Upgraded to GSAP + ScrollTrigger (Client Motion Only)

## Date
2026-02-26

## Context
Pozadavek byl udelat upgrade sekce infrastruktury na GSAP/ScrollTrigger variantu bez zmeny SSR struktury (`InfrastructureSection.astro` markup zustava zachovan).

## Decision
- GSAP/ScrollTrigger je integrovany pouze v klientske motion vrstve (`src/lib/motion/homepage.ts`), konkretne uvnitr `initInfrastructureMotion()`.
- SSR markup sekce infrastruktury nebyl menen strukturou (pouze zustavaji existujici `data-*` hooky a SVG markup).
- Pro desktop (`min-width: 1024px`) se pouziva:
  - GSAP line draw animace SVG linek
  - ScrollTrigger step synchronizace aktivniho kroku podle pozice karet
- Pro reduced motion, chybejici GSAP nebo selhani importu zustava fallback na puvodni `IntersectionObserver` logiku.
- Mobilni fallback (`details` accordion + staticky diagram) zustava beze zmeny chovani.

## Impact
- Lepsi kontrola nad scroll-driven dramaturgii desktop infrastruktury.
- Zachovana kompatibilita se stavajici SSR strukturou a mobilnim fallbackem.
- Klicovy runtime zustava izolovany na homepage; GSAP je nacitan dynamicky pouze pri inicializaci homepage motion.

## Alternatives considered
- Prepsat infrastrukturu do samostatne React/JSX island komponenty: zamitnuto (zbytecna zmena SSR struktury a vetsi scope).

