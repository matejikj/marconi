Níže je kompletní **Styleguide v1.0**.

---

# TTC MARCONI – DIGITAL STYLEGUIDE v1.0

## Editorial Authority × Interactive Infrastructure

Brand strict: #01B5E5 + white + neutral greys

---

# 1️⃣ BRAND CORE PRINCIPLES

### 1.1 Design filozofie

* White-first interface
* Tyrkys pouze jako aktivní signál
* Tmavé sekce jen pro důraz
* Maximální čitelnost
* Interaktivita = reakce systému
* Žádná dekorativnost
* Žádné experimentální barvy
* Žádné gradienty (kromě opacity tyrkys)

---

# 2️⃣ DESIGN TOKENS (SOURCE OF TRUTH)

Používat jako Tailwind config + CSS variables.

---

## 🎨 COLOR TOKENS

```css
:root {
  --color-primary: #01B5E5;

  --color-bg: #FFFFFF;
  --color-bg-alt: #F7F9FB;

  --color-dark-section: #0F1720;

  --color-text-main: #111827;
  --color-text-secondary: #374151;
  --color-text-muted: #6B7280;

  --color-border: #E5E7EB;
  --color-border-strong: #D1D5DB;

  --color-primary-05: rgba(1,181,229,0.05);
  --color-primary-10: rgba(1,181,229,0.1);
}
```

### Zakázané:

* jiné odstíny modré
* jiné akcentní barvy
* výrazné gradienty

---

## 🔤 TYPOGRAPHY SYSTEM

### Font stack

Headings: `Sora` nebo `Manrope`
Body: `Inter`

Fallback:

```
font-family: "Inter", system-ui, -apple-system, sans-serif;
```

---

### Typographic Scale

| Token   | Size | Line-height | Usage            |
| ------- | ---- | ----------- | ---------------- |
| h1      | 72px | 110%        | Hero             |
| h2      | 44px | 115%        | Section headings |
| h3      | 28px | 130%        | Subheading       |
| body-lg | 20px | 160%        | Intro text       |
| body    | 18px | 165%        | Standard         |
| small   | 14px | 150%        | Meta             |

### Pravidla

* Nadpisy mohou mít -1% letter-spacing
* Meta text uppercase + tracking 0.12em
* Maximální šířka textu: 680px

---

# 3️⃣ SPACING & LAYOUT SYSTEM

### Grid

* 12 columns
* Max width: 1280px
* Content safe width: 1140px
* Text width: 680px

### Section Spacing (desktop)

* Vertical padding: 160px
* Medium sections: 120px
* Small sections: 80px

Mobil:

* 96px / 64px

---

### Spacing scale (8pt)

```
8 / 16 / 24 / 32 / 48 / 64 / 80 / 120 / 160
```

---

# 4️⃣ COMPONENT LIBRARY

Každá komponenta má definované chování.

---

## 4.1 Button

### Variants

Primary:

* bg: #01B5E5
* text: white
* radius: 999px
* padding: 16px 28px

Hover:

* background darken 5%
* subtle translateY(-2px)

Secondary:

* border 1px #01B5E5
* text #01B5E5
* bg transparent

---

## 4.2 Card

* bg: white
* border: 1px var(--color-border)
* radius: 12px
* padding: 32px

Hover:

* shadow-soft
* border-color: var(--color-primary)
* translateY(-4px)

---

## 4.3 Section (light)

* bg: white
* divider: subtle line

## 4.4 Section (alt)

* bg: var(--color-bg-alt)

## 4.5 Section (dark emphasis)

* bg: var(--color-dark-section)
* text: white
* primary button invert

---

## 4.6 Infrastructure Diagram

* SVG stroke: #111827
* Active nodes: #01B5E5
* Stroke width: 1.5px
* Hover node scale: 1.06

---

## 4.7 Sector Card (interactive)

* top border 2px transparent
* hover: top border #01B5E5 expand animation
* background: var(--color-primary-05)

---

## 4.8 Navigation

Desktop:

* transparent
* scroll: background white + shadow

Active link:

* underline animation
* color primary

---

## 4.9 Scroll Progress Bar

* fixed top
* height: 2px
* base: #E5E7EB
* progress: #01B5E5

---

## 4.10 Footer

* background: #0F1720
* text: #D1D5DB
* links: white
* hover: primary

---

# 5️⃣ MOTION SYSTEM

Používat pouze:

* GSAP + ScrollTrigger
* IntersectionObserver fallback
* Lenis pro smooth scroll

---

## Motion Tokens

| Token  | Duration | Ease       |
| ------ | -------- | ---------- |
| fast   | 0.3s     | power2.out |
| normal | 0.6s     | power2.out |
| slow   | 0.9s     | power3.out |

---

## Povolené animace

* Fade in + translateY 40px
* SVG line draw
* Underline expand
* Scale 1 → 1.02
* Background opacity shift

---

## Zakázané

* bounce
* elastic
* heavy parallax
* 3D rotate
* flashy glow

---

# 6️⃣ RESPONSIVE RULES

Mobil:

* Diagram static
* Hover → tap expand
* H1 72px → 38px
* Section padding 160 → 96
* Scroll spy → progress bar only
* Cursor effects disabled

---

# 7️⃣ IMAGE SYSTEM

Používat:

* Reálné projekty
* Technické infrastruktury
* Detail technologie
* Žádné stock fotky lidí s notebookem

Formát:

* AVIF / WebP
* aspect ratio 16:9 nebo 4:3
* radius 20px

---

# 8️⃣ UI TONE OF VOICE

Texty:

* Precizní
* Věcné
* Technologicky sebevědomé
* Žádný marketingový hype

---

# 9️⃣ ACCESSIBILITY

* Kontrast WCAG AA
* Focus states visible
* Reduced motion respektovat
* Font size min 16px

---

# 🔟 IMPLEMENTAČNÍ PRAVIDLA PRO AGENTNÍ VÝVOJ

AI nebo vývojový agent MUSÍ:

1. Používat pouze definované tokeny
2. Nevytvářet nové barvy
3. Nepřidávat gradienty
4. Dodržovat spacing scale
5. Respektovat typografickou hierarchii
6. Nepoužívat inline styly
7. Nepřidávat knihovny bez schválení

---

# NANO BANANA – STYLEGUIDE PREVIEW PROMPT

```
Ultra clean European enterprise technology design system styleguide, white background, turquoise accent (#01B5E5), neutral dark greys, large editorial typography, strict grid layout, component showcase including buttons, cards, diagrams, navigation, scroll progress bar, premium corporate UI, no gradients, no extra colors, minimalist system integration brand identity, realistic UI styleguide mockup, 16:9
```

---

# Pokud chceš další level:

Můžeme vytvořit:

* Tailwind config připravený pro copy-paste
* Strukturu komponent pro Astro
* UX dramaturgii homepage
* Figma strukturu (auto layout systém)
* Design QA checklist pro vývoj

Teď máš pevný základ, na kterém může běžet i agentní vývoj bez toho, aby vznikal vizuální chaos.
