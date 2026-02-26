# Frontend Source Structure

## Intended layout

- `src/layouts/` - page shells (global HTML structure, shared head/meta, header/footer wiring)
- `src/pages/` - routes (`.astro` pages)
- `src/components/ui/` - reusable presentational UI primitives (Button, Card, Section, Header, Footer)
- `src/components/sections/` - homepage/content sections (to be added in Task 02)
- `src/components/islands/` - client-side interactive components (to be added in Task 03)
- `src/data/` - content/config data for navigation and homepage sections
- `src/lib/motion/` - motion tokens and reduced-motion helpers
- `src/styles/` - global CSS, tokens, Tailwind-driven base/components/utilities

## Current status (Task 01)

- Core shell and UI primitives are implemented.
- Homepage route exists as foundation demo page.
- Motion behavior is intentionally not implemented yet (only placeholders/hooks).

