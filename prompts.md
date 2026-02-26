## Bonus: Průlet prompty (od startu po polish)

Tuhle sekci můžeš použít jako:
- samostatný blok 3-5 minut
- backup slidy po Q&A
- inspiraci pro interní workshop

### Jak framingovat promptování kolegům

Neukazuj „dokonalé prompty“. Ukazuj:
- jak se zpřesňuje zadání v čase
- jak agent dostává kontext a omezení
- jak vypadá iterace po screenshot feedbacku
- jak se prompty mění podle fáze projektu

### Prompt 1: Kontext + analýza draftů (před kódem)

```text
Chovej se jako seniorní UX/UI designér a expert na frontendový vývoj.
Chci, abys detailně prozkoumal a pochopil celý kontext návrhu mé aplikace ve složce agent/drafts.
Pak vytvoř:
1) motions-animations.md s návrhy motion a interactive efektů
2) 3 tasks pro implementaci
3) základní strukturu pro agentní vývoj, aby měl agent vždy kompletní kontext
```

**Proč funguje:**
- definuje roli (UX/UI + frontend)
- říká kde je kontext (`agent/drafts`)
- dává konkrétní deliverables (3 výstupy)
- nepřeskakuje rovnou do implementace

### Prompt 2: Implementace po fázích (Task-based flow)

```text
Implementuj task 01-foundation-design-system-shell.md
```

Pak:

```text
Udělej task 02-homepage-content-sections.md
```

Pak:

```text
Implementuj task 03
```

**Proč funguje:**
- malé, validovatelné kroky
- agent se drží připraveného plánu
- snadno se reviewuje a rollbackuje po fázích

### Prompt 3: Upgrade bez rozbití struktury

```text
Chci udělat upgrade infrastruktury na GSAP/ScrollTrigger variantu (bez změny SSR struktury).
```

**Proč funguje:**
- jasný cíl (upgrade)
- explicitní constraint (nezměnit SSR strukturu)
- přesně tohle brání regressím a "creative rewrites"

### Prompt 4: Vizuální tuning podle pocitu

```text
Chci doladit ScrollTrigger threshold/start-end hodnoty podle reálného scroll feelingu v browseru.
```

**Proč funguje:**
- dobrý příklad promptu, který není jen „technický“, ale UX-oriented
- agent ví, že cílem je pocit z interakce, ne jen compile-pass

### Prompt 5: Obsahový polish (diakritika)

```text
Chci doplnit diakritiku do veškerého obsahu, který je zobrazen na stránce.
```

**Proč funguje:**
- jasný scope (visible content)
- dobrý příklad, že agent může řešit i obsahový QA polish, ne jen kód

### Prompt 6: Screenshot-driven bugfix (kontrast / čitelnost)

```text
Chci doladit detail toho, že interaktivní prvky jsou černé.
Viz obrázek – nelze v nich přečíst text, který je také černý.
```

**Proč funguje:**
- navazuje na vizuální feedback
- kombinuje popis problému + screenshot
- vede k cílené opravě (SVG fallback barvy), ne k přestavbě sekce

### Prompt 7: Geometrický detail v SVG (pixel polish)

```text
Ještě chci doladit, že lines úplně nenavazují na jednotlivé prvky v grafu. Viz obrázky.
```

**Proč funguje:**
- ukazuje sílu agentního loopu i na "otravných" detailech
- dobré pro kolegy: AI není jen na boilerplate, ale i na jemný polish

### Prompt 8: Produkční debugging (deploy)

```text
Po deploy na GitHub Pages dostávám stránku bez CSS a tyto chyby v console:
GET .../_astro/... 404
```

**Proč funguje:**
- prompt obsahuje symptomy + runtime chyby
- agent může rychle dojít k root cause (`base` path / subpath deploy)
- skvělý příklad „AI jako debugging partner“

### Prompt 9: UX feature request (mobile menu + desktop polish)

```text
Chci implementovat funkční menu i pro mobilní zařízení.
A chci elegantní background pro hlavní menu na desktopech.
```

**Proč funguje:**
- spojuje funkčnost + vizuální polish
- stále dost konkrétní, ale nechává prostor pro návrh řešení

### Prompt 10: Art direction / asset integration

```text
Do public/images jsem vložil 3 pozadí.
Použij:
- A pro hero
- B pro kontakt
- C ve zbývajících sekcích, kde byl bílý background
```

A následné iterace:

```text
Chci ty backgrounds více zvýraznit. Hlavně ten minimal.
A ten v hero chci přiblížit.
```

```text
Minimal background má být v sekcích X a Y, ale nejde tam vidět.
Chci jej přiblížit a zvýraznit.
```

**Proč funguje:**
- velmi realistická spolupráce designer/FE/agent
- první prompt nastaví mapování assetů
- další prompty dělají vizuální tuning po feedbacku

### Prompt 11: Branding detail (logo reuse)

```text
Přidal jsem logo.png, chci, abys jej na stránce alespoň 4x použil.
```

**Proč funguje:**
- konkrétní požadavek s měřitelným výsledkem
- agent může navrhnout vhodná umístění a sjednotit styl

### Meta-lekce: Jak se prompty mění podle fáze projektu

- **Fáze 1 (strategie):** více kontextu, deliverables, struktura
- **Fáze 2 (implementace):** task + constraints + done criteria
- **Fáze 3 (QA/polish):** screenshot + symptom + očekávaný pocit
- **Fáze 4 (prod/debug):** logy/chyby + URL + prostředí

### Slide navíc (volitelně): „Prompt anatomy“ šablona

```text
Kontext:
- repo / soubory / screenshot / runtime chyba

Cíl:
- co přesně chci změnit

Omezení:
- co nesmíš rozbít (SSR, a11y, styl, stack)

Hotovo když:
- build/test projde + vizuální/UX očekávání
```


