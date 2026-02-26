# Prezentace: Vibe Coding + Agentní vývoj na reálném projektu (25 min)

## Slide 1: Titulek / Hook
**Vibe coding, který neskončí chaosem**  
Jak jsme s agentem postavili web a proč je klíčové nejdřív navrhnout strukturu

- Reálný projekt: homepage pro TTC MARCONI
- Astro + Tailwind + motion + GitHub Pages deploy
- Cíl: ukázat workflow, které škáluje i pro tým

**Speaker notes (45-60 s):**
- Otevři tím, že vibe coding není jen „AI něco napíše“.
- Pointa je mít systém, aby výsledek byl použitelný, udržovatelný a rychlý.

---

## Slide 2: Proč to řešit právě teď
**Agentní vývoj už není experiment, ale násobič výkonu**

- AI umí zrychlit implementaci o hodiny až dny
- Bez struktury ale stejně rychle generuje technický dluh
- Týmy dnes nepotřebují jen „promptovat“, ale navrhovat proces

**Speaker notes (60 s):**
- Vytvoř kontrast: rychlost vs. chaos.
- Hype: kdo to zvládne procesně, získá výraznou výhodu.

---

## Slide 3: Co myslím „vibe codingem“
**Rychlá iterace nápad -> prompt -> výsledek -> zpětná vazba**

- Funguje skvěle na exploraci a prototypy
- Selhává při absenci pravidel a kontextu
- Nejlepší výsledek: vibe coding + seniorní rozhodování

**Speaker notes (60 s):**
- Zdůrazni, že vibe coding není náhrada inženýrství.
- Je to akcelerátor, když víme, co chceme stavět.

---

## Slide 4: Co myslím „agentním vývojem“
**Agent = spolupracovník, ne autocomplete**

- Čte kontext v repu
- Implementuje tasky end-to-end
- Ověřuje build/testy
- Umí iterovat přes feedback a screenshoty

**Speaker notes (60 s):**
- Vysvětli rozdíl proti běžnému copilot flow.
- Agent je silný hlavně tehdy, když má dobrý kontext a hranice.

---

## Slide 5: Projekt jako case study
**TTC MARCONI homepage (enterprise / B2B)**

- Jasná informační architektura homepage
- Konzistentní vizuální styl (white-first, tyrkys jako akcent)
- Interaktivní sekce infrastruktury + motion
- Nasazení na GitHub Pages

**Speaker notes (60 s):**
- Řekni, že to není toy demo.
- Je tam design, obsah, frontend architektura, motion i deployment.

---

## Slide 6: Hlavní teze prezentace
**Nejdřív definuj rámec. Pak teprve zrychluj implementaci.**

- `1)` Struktura projektu a kontext pro agenta
- `2)` Tech stack a technická omezení
- `3)` Styl designu a UX pravidla
- `4)` Obsah a IA (co stránka opravdu říká)
- `5)` Teprve potom implementace + doladění detailů

**Speaker notes (60-75 s):**
- Tohle je hlavní message celé prezentace.
- Když tenhle krok přeskočíš, agent bude rychlý, ale nekonzistentní.

---

## Slide 7: Co jsme připravili před psaním kódu
**„Source of truth“ dokumenty**

- `styleguide.md` (vizuální pravidla)
- `techstack.md` (Astro, Tailwind, motion přístup)
- `mainpage-content.md` (copy a struktura)
- Tasky rozdělené po fázích
- Agentní kontext složky (`agent/context`, `agent/tasks`, `agent/decisions`)

**Speaker notes (75 s):**
- To je přesně to, co dá agentovi stabilní směr.
- Bez toho vzniká drift: každá iterace řeší něco jiného.

---

## Slide 8: Proč je content-first přístup tak důležitý
**Agent umí skvěle renderovat strukturu. Ale musí vědět co říct.**

- Nejčastější chyba: začít layoutem bez finálního sdělení
- Pak se UI neustále rozpadá při přepisování textů
- Když máme obsah dřív:
  - lepší IA
  - lepší SEO
  - méně redesignu

**Speaker notes (60-75 s):**
- Připomeň, že v B2B webu je copy a důvěryhodnost klíčová.
- Agent pak staví komponenty na reálná data, ne placeholdery.

---

## Slide 9: Task decomposition = tajná zbraň
**Rozdělení práce na 3 fáze zrychlilo vše**

- **Task 01:** Foundation / design system / shell
- **Task 02:** Homepage sekce / obsah / SSR struktura
- **Task 03:** Motion / interakce / performance / QA

**Speaker notes (60 s):**
- To je velmi silný pattern pro tým.
- Agent dostává menší, validovatelné cíle a méně „halucinuje“ architekturu.

---

## Slide 10: Co přinesl Task 01 (Foundation)
**Největší ROI: nudné věci udělat první**

- Layout shell, globální styly, tokeny
- Základ UI komponent (`Button`, `Card`, `Section`, `Header`, `Footer`)
- A11y baseline (skip link, focus states, reduced motion)
- Připravenost na další iterace bez chaosu

**Speaker notes (60-75 s):**
- „Nudné“ základy jsou přesně to, co dělá další práci rychlou.
- Agent umí foundation udělat velmi dobře, když jsou pravidla jasná.

---

## Slide 11: Co přinesl Task 02 (IA + obsah)
**Data-driven homepage místo hardcoded chaosu**

- 9 sekcí homepage podle IA
- Data centralizovaná v `src/data/homepage.ts`
- SSR fallback pro klíčové sekce (funguje i bez JS)
- Lepší udržovatelnost a snadnější obsahové změny

**Speaker notes (60-75 s):**
- Vysvětli výhodu pro business iterace: copy můžeš měnit bez rozbíjení layoutu.
- To je ideální kombinace pro práci s agentem.

---

## Slide 12: Co přinesl Task 03 (Motion + interakce)
**Detaily až po stabilní struktuře**

- Scroll progress, reveal animace, interaktivní graf
- GSAP + ScrollTrigger tam, kde to dává smysl
- Reduced-motion fallback
- QA a performance mindset od začátku

**Speaker notes (60-75 s):**
- Důležité: motion až po dokončení struktury a obsahu.
- Jinak se animace neustále přepisují a brzdí progres.

---

## Slide 13: Reálné problémy, které jsme řešili (a proč je to cenné)
**Agentní vývoj není magie. Je to rychlejší debugging.**

- GitHub Pages subpath (`/marconi/`) a rozbité asset URL
- SVG fallback barvy (černá na černé)
- Linky v diagramech nenavazovaly přesně na prvky
- Mobilní menu a desktop header polish

**Speaker notes (75 s):**
- Tohle je skvělá část pro důvěryhodnost prezentace.
- Ukaž, že agent šetří čas i při opravách detailů, ne jen při generování.

---

## Slide 14: Jak vypadá dobrý prompt pro agenta
**Kontext + cíl + omezení + kritéria hotovo**

- Co chci změnit (konkrétní komponenta / soubor)
- Co nesmím rozbít (SSR struktura, styling, a11y)
- Jak ověřit výsledek (`npm run build`, vizuální očekávání)
- Kde se držet pravidel (styleguide, stack, content)

**Speaker notes (60-75 s):**
- Praktická rada pro kolegy: prompt není kouzelná věta, ale mini-zadání.
- Čím méně nejasností, tím lepší výsledek.

---

## Slide 15: Role seniora v agentním vývoji
**Nepsat všechno ručně != být méně důležitý**

- Senior definuje architekturu a standardy
- Senior rozpozná, co je „rychlé řešení“ a co je dluh
- Senior dává směr iteracím a drží kvalitu
- Agent zvyšuje leverage, nenahrazuje rozhodování

**Speaker notes (60 s):**
- Tohle je důležité pro přijetí v týmu.
- Agent posouvá práci směrem k rozhodování a systému.

---

## Slide 16: Anti-patterny (jak si agentní vývoj pokazit)
**Co nedělat**

- Začít bez IA a contentu
- Měnit stack během implementace
- Promptovat velké neurčité úkoly („udělej hezký web“)
- Neověřovat build / a11y / responsive
- Nemít source-of-truth dokumenty

**Speaker notes (60-75 s):**
- Tohle bude pro méně zkušené kolegy extrémně užitečné.
- Anti-patterny bývají nejrychlejší cesta k frustraci.

---

## Slide 17: Týmový workflow, který funguje
**Agent-ready proces pro frontend tým**

- Krátký brief + constraints
- Rozpad na tasky
- Implementace agentem
- Review člověkem (UX, FE, business)
- Fixy + decisions log

**Speaker notes (60 s):**
- Zmiň, že i malý tým může mít „mini pipeline“ bez velké režie.
- Důraz na review a rozhodnutí, ne jen generování kódu.

---

## Slide 18: Jak kolem toho udělat hype (a ne odpor)
**Ukazujte výsledky, ne jen prompty**

- Before/after screenshoty
- Časová úspora na konkrétních úkolech
- Příklady oprav detailů na základě feedbacku
- Transparentní limity (co agent ještě nezvládá sám)

**Speaker notes (60 s):**
- Hype vzniká z demonstrace hodnoty.
- Když ukážeš i limity, působí to důvěryhodněji.

---

## Slide 19: Co si mají kolegové odnést hned zítra
**Startovací checklist pro první agentní projekt**

- `1)` Sepiš cíl a publikum projektu
- `2)` Zafixuj stack a pravidla
- `3)` Připrav content / IA
- `4)` Rozděl práci do 2-4 tasků
- `5)` Definuj „hotovo“ a ověření
- `6)` Iteruj detaily až nakonec

**Speaker notes (60 s):**
- Praktický takeaway.
- Měli by odcházet s pocitem „tohle umím vyzkoušet ještě dnes“.

---

## Slide 20: Závěr / Call to Action
**Vibe coding je super. Agentní vývoj je super. Proces rozhoduje.**

- Největší akcelerátor není jen model, ale kvalita zadání
- Struktura + stack + design + content = stabilní základ
- Detaily a polish pak jdou rychle a bezpečně
- Pojďme si týmově vytvořit vlastní agent-ready workflow

**Speaker notes (45-60 s):**
- Zavři prezentaci energicky.
- Nabídni follow-up: interní pilot na malém feature/tasku.

---

## Bonus: Doporučené rozložení času (25 min)

- Slidy 1-5: 6 min (motivace + kontext)
- Slidy 6-12: 10 min (hlavní teze + case study workflow)
- Slidy 13-18: 7 min (lessons learned + team adoption)
- Slidy 19-20: 2 min (takeaway + CTA)

## Bonus: Co si připravit do prezentace navíc (vizuály)

- Screenshoty před/po (menu, backgrounds, infrastruktura)
- Ukázku tasků `01/02/03`
- Ukázku decision logu
- Krátký výpis reálných bugfixů (GH Pages base path, SVG kontrast)
- 1 live demo prompt + výsledek (max 2 min)

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

### Jak to odprezentovat, aby to udělalo hype

- ukaž 2-3 prompty za sebou na stejné feature (např. backgrounds)
- přidej screenshot „před / po“
- zdůrazni, že kvalita výsledku roste s kvalitou zadání
- ukaž, že největší skill není psát prompty, ale navrhovat workflow
