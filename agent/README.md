# Agent Development Workspace

Tato složka drží kompletní kontext pro agentní vývoj webu TTC MARCONI tak, aby agent nemusel pokaždé znovu číst celé drafty.

## Struktura

- `agent/drafts/` = původní vstupy od zadavatele (raw drafty)
- `agent/context/` = konsolidovaný a normalizovaný kontext (source-of-truth pro implementaci)
- `agent/tasks/` = implementační tasky pokrývající celý scope
- `agent/workflows/` = postup práce pro agenta
- `agent/checklists/` = QA checklisty
- `agent/decisions/` = architektonická a UX rozhodnutí (ADR-like log)

## Doporučený start každého agentního tasku

1. Přečíst `agent/context/README.md`
2. Přečíst `agent/context/00-project-brief.md`
3. Přečíst relevantní task v `agent/tasks/`
4. Přečíst `agent/decisions/README.md` a existující rozhodnutí (pokud budou)
5. Před implementací zkontrolovat `agent/checklists/frontend-qa.md`

## Pravidlo práce s kontextem

- Drafty v `agent/drafts/` jsou vstupní materiál.
- Implementace se řídí konsolidovaným kontextem v `agent/context/`.
- Při změně zadání se nejdřív aktualizuje `agent/context/`, potom tasky a až pak kód.

