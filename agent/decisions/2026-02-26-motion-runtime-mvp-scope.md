# Decision: Motion Runtime MVP Scope (Task 03)

## Date
2026-02-26

## Context
Task 03 vyzaduje motion/interakce pro homepage (header scroll state, progress bar, reveal pattern, infrastruktura, sektorove karty) pri zachovani SEO, vykonu a dostupnosti.

## Decision
- Pro aktualni iteraci byl zvolen lehky motion runtime v izolovanem Astro "island" komponentu (`HomepageMotionRuntime`) s native `IntersectionObserver` + `scroll`/`resize` listenery.
- `Lenis` nebyl zapojen (MVP scope), aby se nekomplikoval reduced-motion fallback a aby zustal JS payload minimalni.
- `GSAP/ScrollTrigger` nebyl v teto iteraci pouzit; infrastructure interakce je implementovana step-based synchronizaci pres observer + data atributy.
- Motion runtime je nacten pouze na homepage (lazy import z island komponenty).
- `prefers-reduced-motion` vypina reveal animace (obsah se zobrazi bez animace) a zachovava funkcni interakce bez smooth-scroll chovani.

## Impact
- Splneny pozadavky Task 03 pro MVP motion vrstvu bez navyseni zavislosti a s malym client bundle.
- Infrastruktura, sektory, header a progress bar jsou pripraveny na pozdejsi rozsireni (napr. GSAP timeline) bez zmeny SSR markup struktury.
- Zachovan dobry vykon a citelnost bez JS.

## Alternatives considered
- GSAP + ScrollTrigger + Lenis hned v Task 03: odlozeno kvuli vyssi slozitosti, dalsim zavislostem a potrebe nejprve overit baseline UX/perf.

