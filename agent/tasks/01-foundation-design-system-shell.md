# Task 01 – Foundation, Design System, Page Shell

## Cíl

Připravit technický a vizuální základ projektu (Astro/Tailwind), aby následné sekce homepage šly implementovat konzistentně a bez redesignu za běhu.

## Vstupy

- `agent/context/00-project-brief.md`
- `agent/context/01-ux-ui-system.md`
- `agent/context/03-technical-architecture.md`

## Scope

- Inicializace Astro projektu (pokud ještě neexistuje)
- Tailwind setup a napojení design tokenů (CSS variables + Tailwind theme)
- Globální typografie (Sora/Manrope + Inter) a základní scale
- Layout shell (max-width, grid, spacing utilities)
- Základní komponenty: Button (primary, secondary), Card, Section wrapper (light / alt / dark), Header + nav (statický stav + scroll-ready struktura), Footer
- Scroll progress bar komponenta (vizuální základ bez finální JS logiky)
- Globální a11y baseline (focus styles, reduced motion CSS hooks)

## Výstupy

- Funkční Astro projekt se základním layoutem
- Tokeny a komponenty připravené pro homepage sekce
- Dokumentovaná struktura složek (`src/components/*`, `src/lib/*`, `src/styles/*`)

## Akceptační kritéria

- Žádné nové barvy mimo styleguide
- Žádné inline styly pro core UI
- Typografie a spacing odpovídají draftům
- Header/footer a základní komponenty vypadají konzistentně desktop/mobile
- Build projde bez chyb

## DoD checklist

- Tailwind config obsahuje token mapping
- Globální CSS obsahuje root variables
- `prefers-reduced-motion` baseline definován
- Základní homepage layout renderuje bez JS
