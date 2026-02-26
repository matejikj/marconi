# Frontend QA Checklist (TTC MARCONI Homepage)

## Design system

- Použity pouze definované barvy a tokeny
- Bez výrazných gradientů
- Spacing odpovídá 8pt scale
- Typografie odpovídá hierarchii (H1/H2/H3/body/meta)

## Content & IA

- Všech 9 sekcí je přítomných
- H1 je unikátní
- Copy je stručné a věcné (bez marketingového hype)
- CTA jsou konzistentní napříč stránkou

## Responsive

- Desktop/tablet/mobile layout drží strukturu
- Texty nepřetékají a drží max-width
- Mobilní infrastruktura je statická / zjednodušená
- Hover-only chování má tap/focus alternativu

## Accessibility

- Kontrast min. WCAG AA
- Focus-visible stavy jsou viditelné
- Klávesnicí lze projít hlavní interaktivní prvky
- `prefers-reduced-motion` je respektováno
- Min font size 16px (kromě odůvodněných meta prvků)

## Motion (pokud implementováno)

- Bez bounce/elastic/3D efektů
- Animace podporují čitelnost a pořadí obsahu
- Smooth scroll lze vypnout / není aktivní při reduced motion
- Bez JS zůstává obsah plně dostupný

## Performance & SEO

- Homepage je čitelná a sémantická bez JS
- Motion JS je načítán jen pro potřebné sekce
- Obrázky používají optimalizované formáty a srcset
- Title/description a základní metadata jsou vyplněná

