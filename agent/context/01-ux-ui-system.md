# UX/UI System Summary

Konsolidace pravidel ze `agent/drafts/styleguide.md`.

## Design systém (high priority)

- 12-column grid
- Max width `1280px`
- Content safe width `1140px`
- Text max width `680px`
- Spacing scale: `8 / 16 / 24 / 32 / 48 / 64 / 80 / 120 / 160`

## Barvy (striktní)

- Primary: `#01B5E5`
- Background: `#FFFFFF`
- Background alt: `#F7F9FB`
- Dark section: `#0F1720`
- Text / border tokeny dle styleguide draftu

## Zakázáno

- jiné akcentní barvy
- výrazné gradienty
- dekorativní efekty mimo systém

## Typografie

- Headings: `Sora` nebo `Manrope`
- Body: `Inter`
- Hero `h1`: 72px desktop / 38px mobile
- Důraz na čitelnost, široké řádkování a max šířku textu

## Komponentové chování (minimum)

- Button: primary + secondary, pill radius, hover lift
- Card: border + subtle hover shadow + lift
- Sector card: top border expand + `primary-05` background
- Navigation: transparent -> white on scroll, active underline
- Scroll progress bar: fixed top 2px

## Responsive pravidla

- Mobil: diagram statický
- Hover interakce musí mít tap/focus alternativu
- Cursor efekty vypnuté
- Scroll spy zjednodušit (progress bar only)

## Accessibility

- WCAG AA kontrast
- viditelné focus states
- respektovat `prefers-reduced-motion`
- min font size 16px

## Implementační pravidla pro agenta

- Používat definované tokeny
- Nepřidávat nové barvy
- Nepoužívat inline styly
- Nepřidávat knihovny bez schválení
- Dodržet typografickou hierarchii a spacing scale

