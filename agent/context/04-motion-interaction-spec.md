# Motion & Interaction Spec (Canonical Link)

Motion návrh je definován v:

- `agent/drafts/motions-animations.md`

## Jak s tím pracovat při implementaci

- Nejprve implementovat "no-motion" funkční verzi sekcí.
- Poté přidat motion vrstvu pouze tam, kde podporuje narativ (hero, infrastruktura, sektory, progress bar).
- Každý motion efekt musí mít mobile a reduced-motion variantu.
- Při rozporu se styleguide má prioritu konzervativnější chování.

## Minimum pro MVP motion

- Header scroll state
- Scroll progress bar
- Section reveal
- Infrastructure diagram step highlights
- Sector card hover/focus states

