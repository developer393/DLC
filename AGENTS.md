# AGENTS.md — AI assistant brief for DLC / KaamWala

> Read [`CONTEXT.md`](./CONTEXT.md), then [`WAYFINDER.md`](./WAYFINDER.md). Do not write product code until the map says the route is clear.

## 1. What this repo is

KaamWala — hyperlocal hire of daily Workers in Noida. GitHub repo name is **DLC**.

This checkout is in the **wayfinding** phase. The three imported docs under `docs/source/` are drafts. They contradict each other on stack. Treat them as input to `/wayfinder`, not as a build spec.

## 2. The workflow (type these; the agent will not start them alone)

```txt
/wayfinder          → decide (one ticket per session)
/to-spec            → collapse the cleared map into one spec
/to-tickets         → vertical tracer-bullet implementation tickets
/implement #<id>    → one ticket, fresh chat, TDD at seams
/code-review        → Standards + Spec axes, preferably a new chat
```

Small detours: `/grill-with-docs` if a question fits one sitting; `/prototype` when talking cannot settle look-and-feel; `/research` when a fact lives outside the repo; `/ask-matt` if you don't know which skill to type.

## 3. Hard rules

- **Never resolve more than one grilling ticket per session** (research excepted).
- Refer to tickets **by name**, not `#12`.
- Wayfinder tickets are **questions**. A ticket that reads "build the Worker App" is mis-typed.
- Do not write `apps/` / `src/` production code during `/wayfinder`. If you catch yourself scaffolding Expo or Express, stop.
- Don't duplicate decisions. If it's in `WAYFINDER.md → Decisions so far`, link it.
- Use glossary terms from `CONTEXT.md`.

## Agent skills

### Issue tracker

GitHub (`developer393/DLC`) via `gh`. Until `gh` is installed, the working map is `WAYFINDER.md` + `docs/wayfinder/`. See `docs/agents/issue-tracker.md`.

### Triage labels

Defaults: `needs-triage`, `needs-info`, `ready-for-agent`, `ready-for-human`, `wontfix`. See `docs/agents/triage-labels.md`.

### Domain docs

Single-context: `CONTEXT.md` at root, ADRs in `docs/adr/`. See `docs/agents/domain.md`.
