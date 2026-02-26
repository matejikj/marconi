# Technical Architecture Summary

Konsolidace z `agent/drafts/techstack.md` + vazba na UI požadavky.

## Preferovaný stack

- Astro
- Tailwind CSS
- GSAP + ScrollTrigger (jen ve vybraných island komponentách)
- Lenis (jen tam, kde je prokazatelný přínos a bez negativního dopadu na a11y)

## Proč tento stack (z pohledu zadání)

- Astro generuje čisté statické HTML -> silný SEO základ
- Minimum JS defaultně -> lepší LCP/INP
- Interaktivita lze izolovat jen do potřebných sekcí
- Vhodné pro content-heavy / editorial homepage

## Implementační zásady

- Homepage musí být plně sémantická a čitelná bez JS
- Motion kód načítat pouze na homepage a pouze v relevantních island komponentech
- Obrázky přes Astro image pipeline (`AVIF/WebP`, `srcset`)
- Nepřidávat další knihovny bez schválení

## Navržené technické vrstvy (pro budoucí implementaci)

- `src/layouts/` = page shell
- `src/components/ui/` = statické UI komponenty (button, card, nav, footer)
- `src/components/sections/` = homepage sekce (SSR/SSG)
- `src/components/islands/` = JS interaktivita (GSAP, diagram)
- `src/lib/motion/` = tokeny a shared motion helpery
- `src/styles/` = global tokens + Tailwind layer overrides

## Výkonové guardrails

- animovat `transform` + `opacity`
- omezit počet současně aktivních ScrollTrigger instancí
- mobilní fallback bez heavy scroll scrubbingu
- respektovat `prefers-reduced-motion`

