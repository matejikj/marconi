# Task 02 – Homepage Sections, IA, Content Integration

## Cíl

Naimplementovat kompletní "scroll-as-story" homepage obsahově a strukturálně podle draftů, zatím primárně bez pokročilé motion logiky.

## Vstupy

- `agent/context/00-project-brief.md`
- `agent/context/01-ux-ui-system.md`
- `agent/context/02-homepage-ia-content.md`

## Scope

- Vytvořit homepage route a sekce v definovaném pořadí
- Implementovat texty a CTA z draftu (s možností pozdější úpravy copy)
- Přidat placeholder datové struktury pro sektory, mini fakta, certifikace a kontaktní údaje
- Infrastruktura sekce: SSR/SSG markup pro diagram + kroky (bez finální GSAP logiky) a mobilní fallback markup (statický diagram / accordion layout)
- Responsivní layout všech sekcí (desktop/tablet/mobile)
- SEO základ: `title`/`description`, semantické headingy a smysluplné landmarks (`header`, `main`, `section`, `footer`)

## Výstupy

- Obsahově kompletní homepage připravená pro motion vrstvu
- Data-driven render sekcí (ne hardcoded chaos v šabloně)
- Sémantická struktura vhodná pro SEO a a11y

## Akceptační kritéria

- Všechny 9 sekcí jsou přítomné a odpovídají IA
- H1 je pouze jedno
- CTA jsou konzistentní a přístupná
- Mobilní verze je čitelná bez hover interakcí
- Infrastruktura sekce dává smysl i bez JS

## DoD checklist

- Stránka renderuje bez runtime chyb
- Obsah není závislý na animacích
- Text šířky a spacing drží design systém
- Placeholder assets respektují image pravidla (technická témata, ne generic stock people)
