# Domain Docs

How the engineering skills should consume this repo's domain documentation when exploring the codebase.

## Before exploring, read these

- **`CONTEXT.md`** at the repo root
- **`WAYFINDER.md`** — the map. Decisions live in `docs/wayfinder/`. Specs live in `docs/specs/` once `/to-spec` has run.
- **`docs/adr/`** — read ADRs that touch the area you're about to work in.

If `CONTEXT.md` exists, use its glossary. Don't invent synonyms. If a term isn't there yet, that's a signal for `/domain-modeling` — note it, don't silently coin a new name.

`/domain-modeling` (reached via `/grill-with-docs` and `/wayfinder`) updates `CONTEXT.md` and ADRs **when a decision actually lands**. Don't create empty ADRs up front.

## File structure

Single-context repo:

```
/
├── CONTEXT.md
├── WAYFINDER.md
├── AGENTS.md
├── docs/adr/
├── docs/wayfinder/
├── docs/specs/
└── docs/source/          ← imported product/HLD docs; not the live truth
```

## Use the glossary's vocabulary

When your output names a domain concept (in an issue title, a refactor proposal, a hypothesis, a test name), use the term as defined in `CONTEXT.md`. Don't drift to synonyms the glossary explicitly avoids.

## Flag ADR conflicts

If your output contradicts an existing ADR, surface it explicitly rather than silently overriding:

> _Contradicts ADR-0007 — but worth reopening because…_
