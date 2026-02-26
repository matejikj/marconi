# TTC MARCONI – Motion & Interactive Effects Spec v1.0

Tento dokument doplňuje `agent/drafts/styleguide.md` a převádí motion systém do konkrétní implementace pro homepage typu "scroll-as-story".

## 1. Principy motion designu

- Motion má vysvětlovat strukturu a stav systému, ne bavit.
- Animace jsou střídmé, precizní, konzistentní s enterprise charakterem značky.
- Tyrkys (`#01B5E5`) se používá jako signál aktivity, nikoliv dekorace.
- Primární pocit: stabilita, čitelnost, kontrola, technologická přesnost.
- Vše musí fungovat i bez JS (obsah a navigace zůstávají použitelné).

## 2. Povolený motion stack (implementačně)

- Astro + Tailwind jako základ.
- GSAP + ScrollTrigger pouze pro vybrané sekce (Astro islands).
- Lenis pouze pro desktop smooth scroll a jen pokud nepokazí a11y/perf.
- IntersectionObserver fallback pro reveal animace bez heavy runtime.
- `prefers-reduced-motion` = vypnout smooth scroll a zjednodušit animace.

## 3. Motion tokeny (navazuje na styleguide)

- `fast`: `0.3s`, `power2.out`
- `normal`: `0.6s`, `power2.out`
- `slow`: `0.9s`, `power3.out`

### Doporučené delay patterny

- Stagger listů: `0.06s` až `0.1s`
- Sekční micro-sekvence: max `0.2s` mezi elementy
- Scroll scrub efekty: jemné, bez agresivního pohybu

## 4. Globální chování stránky

## 4.1 Header / navigace

- Initial state: transparent header nad hero.
- Po scrollu: přechod na bílý background + jemný shadow + border-bottom.
- Aktivní link: underline expand zleva doprava.
- Hover link: barva textu na primary + underline opacity 100 %.
- Transition: `fast`.

## 4.2 Scroll progress bar

- Fixed top 2px.
- Base track světle šedý, progress tyrkys.
- Progress se aktualizuje plynule dle scroll pozice.
- Bez "spring" efektu; lineární nebo lehce ease-out.

## 4.3 Section reveal pattern (globální)

- Vstup sekce: fade-in + translateY `24-40px`.
- Nadpis, text, CTA se odhalují ve krátké sekvenci.
- Sekce se nereanimují opakovaně při každém návratu do viewportu (jen jednou).
- Mobil: kratší vzdálenost (`12-20px`) a kratší duration.

## 5. Motion dramaturgie po sekcích

## 5.1 Hero

### Cíl

- Rychle ukázat důvěryhodnost a technickou autoritu.

### Efekty

- H1: jemný reveal po řádcích (fade + translateY 20px).
- Subheadline: delayed fade-in.
- CTA buttons: stagger reveal + hover translateY(-2px) dle styleguide.
- Malý claim ("Na trhu od roku 1993"): fade-in se zpožděním.
- Optional background detail: velmi jemný opacity shift / grid line parallax (max 8px), pouze desktop.

### Poznámka

- Žádné dramatické hero animace, žádné video autoplay jako default.

## 5.2 Co děláme

- Textový blok reveal ve 2 krocích: H2, poté odstavec.
- Pokud budou použity ikony nebo mikro-badge, hover pouze mění border/opacity (bez rotací).

## 5.3 Infrastruktura (klíčová scroll sekce)

### Cíl

- Vysvětlit "jak pracujeme" pomocí technického diagramu.

### Desktop interakce

- Sticky diagram panel + vedle scroll text steps.
- SVG line draw při vstupu sekce (1x).
- Aktivní krok zvýrazní odpovídající node/edge v diagramu tyrkysem.
- Node hover: scale do max `1.06`, stroke/halo v primary opacity.
- Krátký tooltip nebo side label (pokud bude) s fade-in.
- Přechody mezi stavy diagramu: `normal`, bez blikání.

### Scroll trigger logika

- Step-based progres (5 kroků podle bodů z obsahu).
- Každý krok aktivuje zvýraznění uzlu/uzlů, zvýraznění popisku a jemný progress posun ve vizuálu.

### Mobil fallback

- Diagram statický obrázek/SVG bez sticky chování.
- Body jako accordion / expand karty.
- Tap aktivuje zvýraznění řádku, nekomplikovat scroll scrubbing.

## 5.4 Sektory (interactive cards)

### Cíl

- Rychle skenovat domény působnosti.

### Efekty

- Grid reveal stagger (řádky nebo karty, podle layoutu).
- Hover karty: top border expand do primary, background `primary-05`, `translateY(-4px)`, shadow-soft.
- Focus state má stejnou hierarchii jako hover (pro klávesnici).

### Mobil

- Bez hover-only chování; tap/focus otevře stejný vizuální stav.

## 5.5 Zkušenost / reference / dlouhodobost

- Fakta (30+ let, regiony, holding): stagger reveal, bez count-up animací.
- Pokud se použije časová osa, pouze fade/line reveal (žádné horizontální drag carousely).

## 5.6 Certifikace a kvalita

- Logo/badge list: sequential reveal (rychlé).
- Hover badge: border-color primary + background subtle.
- Nepoužívat flip cards ani 3D efekty.

## 5.7 Synergie TTC

- Propojení firem lze vizualizovat mini diagramem s line-draw a active node highlight.
- Hover/focus: underline/outline, ne bouncing nodes.

## 5.8 Budoucnost

- Textový emphasis blok s jemným background opacity shift při vstupu.
- Optional accent line draw pod H2.

## 5.9 Kontakt

- Kontaktní blok reveal bez zpožděného "showmanship".
- CTA hover podle button spec.
- `mailto:` a `tel:` linky s jasným focus ringem.

## 6. Interakční patterny komponent (detail)

## 6.1 Button

- Hover: darken 5 % + `translateY(-2px)` + shadow-soft.
- Active: `translateY(0)` + shadow reduce.
- Focus-visible: 2px outline / ring s dostatečným kontrastem.
- Transition: `fast`.

## 6.2 Card

- Hover: border primary + shadow-soft + `translateY(-4px)`.
- Focus-within: stejné jako hover.
- Transition: `normal`.

## 6.3 Links / underline

- Underline scaleX z 0 na 1.
- Transform origin zleva.
- Duration `fast`.

## 6.4 Diagram nodes

- Hover/focus: scale max `1.06`, stroke primary, background opacity shift.
- Active (scroll step): persistent highlight, hover už jen sekundární změna.

## 7. Přístupnost a fallbacky

- Respektovat `prefers-reduced-motion: reduce`.
- V reduced motion vypnout Lenis a scrub animace; ponechat jen instant/fade-in (nebo úplně bez reveal).
- Zachovat obsah a čitelnost bez JS.
- Všechny interaktivní prvky musí mít keyboard focus stav.
- Hover-only informace musí být dostupné i přes focus/tap.

## 8. Performance guardrails

- GSAP importovat pouze v island komponentách, ne globálně.
- ScrollTrigger registrovat jen na stránce homepage.
- Zničit (`kill`) trigerry při unmountu komponent.
- Nepoužívat více paralelních scrub animací na mobilu.
- Animovat primárně `transform` a `opacity`.
- Vyhnout se animaci `width/height/top/left` u často překreslovaných elementů.

## 9. Doporučené technické rozdělení (Astro)

- `src/components/islands/HeroMotion.tsx` (pokud potřeba)
- `src/components/islands/InfrastructureScrollDiagram.tsx` (hlavní GSAP logika)
- `src/components/ui/ScrollProgressBar.astro`
- `src/components/ui/SectorCard.astro`
- `src/lib/motion/tokens.ts`
- `src/lib/motion/prefersReducedMotion.ts`

## 10. QA checklist pro motion (rychlá verze)

- Motion je konzistentní s enterprise stylem a nepůsobí "promo microsite".
- Na mobilu není interakce závislá na hover.
- `prefers-reduced-motion` vypíná smooth scroll a scrub efekty.
- Bez JS je homepage čitelná a obsahově kompletní.
- INP/LCP nejsou zhoršeny kvůli zbytečnému JS pro animace.
