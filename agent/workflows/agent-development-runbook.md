# Agent Development Runbook

## Cíl

Zajistit, aby agent při každé iteraci pracoval s kompletním kontextem a nevytvářel nekonzistentní UI nebo technický dluh.

## Standardní workflow (každá iterace)

1. Načíst `agent/context/README.md` a relevantní task.
2. Ověřit, zda existují nová rozhodnutí v `agent/decisions/`.
3. Implementovat nejprve funkční a sémantickou verzi (bez motion).
4. Teprve potom přidat interaktivitu/motion.
5. Spustit QA checklist (`agent/checklists/frontend-qa.md`).
6. Zapsat odchylky/rozhodnutí do `agent/decisions/`.

## Pravidla kontextové hygieny

- Nepoužívat drafty jako jediný zdroj pravdy, pokud už existuje konsolidace v `agent/context/`.
- Při změně zadání aktualizovat nejdřív kontext, potom tasky, potom implementaci.
- Pokud chybí informace, explicitně zaznamenat předpoklad do `agent/decisions/`.

## Pravidla UX/UI konzistence

- Nepřidávat nové vizuální patterny mimo styleguide bez rozhodnutí.
- Každý hover efekt musí mít focus/tap alternativu.
- Motion musí být volitelná vrstva, ne nosič obsahu.

## Pravidla frontend implementace

- Preferovat SSR/SSG obsah, JS pouze pro islands.
- Izolovat motion utilitky do `src/lib/motion/`.
- Komponenty držet malé a jednoúčelové.
- Vyhnout se inline stylům a ad-hoc tokenům.

