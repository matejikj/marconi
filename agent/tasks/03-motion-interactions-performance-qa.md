# Task 03 – Motion, Interactive Effects, Performance & QA

## Cíl

Doplnit řízenou motion vrstvu a interaktivní chování podle stylových pravidel bez degradace SEO, výkonu a přístupnosti.

## Vstupy

- `agent/context/01-ux-ui-system.md`
- `agent/context/03-technical-architecture.md`
- `agent/context/04-motion-interaction-spec.md`
- `agent/checklists/frontend-qa.md`

## Scope

- Implementovat section reveal pattern (desktop + mobile varianty)
- Header scroll state (transparent -> white)
- Scroll progress bar (reálná logika)
- Infrastructure diagram interakce: step-based highlight, SVG line draw, hover/focus states uzlů
- Sector card interactive states (hover/focus/tap parity)
- Lenis integrace pouze pokud projde QA (jinak vynechat)
- `prefers-reduced-motion` fallbacky pro všechny animace
- Performance audit a cleanup: lazy import motion kódu, omezení triggerů, odstranění zbytečných reflow animací

## Výstupy

- Motion vrstva sladěná se styleguide
- Stabilní chování desktop/mobile/reduced-motion
- Krátký QA zápis do `agent/decisions/` (co bylo povoleno / zjednodušeno)

## Akceptační kritéria

- Žádné zakázané animace (bounce, elastic, heavy parallax, 3D rotate)
- Interaktivní prvky fungují přes klávesnici
- Bez JS zůstává homepage plně čitelná
- Motion nepůsobí "flashy" a podporuje narativ
- Výkonově nedochází k výraznému zhoršení UX na mobilu

## DoD checklist

- `prefers-reduced-motion` ověřeno
- Mobilní fallback infrastruktury ověřen
- Scroll progress bar a header scroll state ověřeny
- Kód motion logiky je izolovaný v island komponentech
