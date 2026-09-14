# DEVELOPMENT_PREP.md

Summary of every Markdown (`.md`) file in this repository, plus a consolidated developer-prep checklist. **Facts below are taken only from `.md` files.** Items not stated in those files are marked `not found in .md files` or `not found in this file`.

_Generated from 57 Markdown file(s). Search was recursive and case-insensitive._

## Index of Markdown files

- [`.agents/skills/ask-matt/PHASE-BOUNDARIES.md`](#agents-skills-ask-matt-phase-boundaries-md)
- [`.agents/skills/ask-matt/SKILL.md`](#agents-skills-ask-matt-skill-md)
- [`.agents/skills/code-review/SKILL.md`](#agents-skills-code-review-skill-md)
- [`.agents/skills/codebase-design/DEEPENING.md`](#agents-skills-codebase-design-deepening-md)
- [`.agents/skills/codebase-design/DESIGN-IT-TWICE.md`](#agents-skills-codebase-design-design-it-twice-md)
- [`.agents/skills/codebase-design/SKILL.md`](#agents-skills-codebase-design-skill-md)
- [`.agents/skills/diagnosing-bugs/SKILL.md`](#agents-skills-diagnosing-bugs-skill-md)
- [`.agents/skills/domain-modeling/ADR-FORMAT.md`](#agents-skills-domain-modeling-adr-format-md)
- [`.agents/skills/domain-modeling/CONTEXT-FORMAT.md`](#agents-skills-domain-modeling-context-format-md)
- [`.agents/skills/domain-modeling/SKILL.md`](#agents-skills-domain-modeling-skill-md)
- [`.agents/skills/grill-me/SKILL.md`](#agents-skills-grill-me-skill-md)
- [`.agents/skills/grill-with-docs/SKILL.md`](#agents-skills-grill-with-docs-skill-md)
- [`.agents/skills/grilling/SKILL.md`](#agents-skills-grilling-skill-md)
- [`.agents/skills/handoff/SKILL.md`](#agents-skills-handoff-skill-md)
- [`.agents/skills/implement/SKILL.md`](#agents-skills-implement-skill-md)
- [`.agents/skills/improve-codebase-architecture/HTML-REPORT.md`](#agents-skills-improve-codebase-architecture-html-report-md)
- [`.agents/skills/improve-codebase-architecture/SKILL.md`](#agents-skills-improve-codebase-architecture-skill-md)
- [`.agents/skills/prototype/LOGIC.md`](#agents-skills-prototype-logic-md)
- [`.agents/skills/prototype/SKILL.md`](#agents-skills-prototype-skill-md)
- [`.agents/skills/prototype/UI.md`](#agents-skills-prototype-ui-md)
- [`.agents/skills/research/SKILL.md`](#agents-skills-research-skill-md)
- [`.agents/skills/setup-matt-pocock-skills/domain.md`](#agents-skills-setup-matt-pocock-skills-domain-md)
- [`.agents/skills/setup-matt-pocock-skills/issue-tracker-github.md`](#agents-skills-setup-matt-pocock-skills-issue-tracker-github-md)
- [`.agents/skills/setup-matt-pocock-skills/issue-tracker-gitlab.md`](#agents-skills-setup-matt-pocock-skills-issue-tracker-gitlab-md)
- [`.agents/skills/setup-matt-pocock-skills/issue-tracker-local.md`](#agents-skills-setup-matt-pocock-skills-issue-tracker-local-md)
- [`.agents/skills/setup-matt-pocock-skills/SKILL.md`](#agents-skills-setup-matt-pocock-skills-skill-md)
- [`.agents/skills/setup-matt-pocock-skills/triage-labels.md`](#agents-skills-setup-matt-pocock-skills-triage-labels-md)
- [`.agents/skills/tdd/mocking.md`](#agents-skills-tdd-mocking-md)
- [`.agents/skills/tdd/SKILL.md`](#agents-skills-tdd-skill-md)
- [`.agents/skills/tdd/tests.md`](#agents-skills-tdd-tests-md)
- [`.agents/skills/to-spec/SKILL.md`](#agents-skills-to-spec-skill-md)
- [`.agents/skills/to-tickets/SKILL.md`](#agents-skills-to-tickets-skill-md)
- [`.agents/skills/triage/AGENT-BRIEF.md`](#agents-skills-triage-agent-brief-md)
- [`.agents/skills/triage/OUT-OF-SCOPE.md`](#agents-skills-triage-out-of-scope-md)
- [`.agents/skills/triage/SKILL.md`](#agents-skills-triage-skill-md)
- [`.agents/skills/wait-what/SKILL.md`](#agents-skills-wait-what-skill-md)
- [`.agents/skills/wayfinder/SKILL.md`](#agents-skills-wayfinder-skill-md)
- [`.agents/skills/wizard/SKILL.md`](#agents-skills-wizard-skill-md)
- [`.agents/skills/writing-for-agents/SKILL-MECHANICS.md`](#agents-skills-writing-for-agents-skill-mechanics-md)
- [`.agents/skills/writing-for-agents/SKILL.md`](#agents-skills-writing-for-agents-skill-md)
- [`AGENTS.md`](#agents-md)
- [`CONTEXT.md`](#context-md)
- [`docs/agents/domain.md`](#docs-agents-domain-md)
- [`docs/agents/issue-tracker.md`](#docs-agents-issue-tracker-md)
- [`docs/agents/triage-labels.md`](#docs-agents-triage-labels-md)
- [`docs/source/backend-hld-lld.md`](#docs-source-backend-hld-lld-md)
- [`docs/source/frontend-hld-lld.md`](#docs-source-frontend-hld-lld-md)
- [`docs/source/product.md`](#docs-source-product-md)
- [`docs/wayfinder/backend-runtime.md`](#docs-wayfinder-backend-runtime-md)
- [`docs/wayfinder/booking-contract.md`](#docs-wayfinder-booking-contract-md)
- [`docs/wayfinder/client-surface.md`](#docs-wayfinder-client-surface-md)
- [`docs/wayfinder/p0-loop.md`](#docs-wayfinder-p0-loop-md)
- [`docs/wayfinder/trust-minimum.md`](#docs-wayfinder-trust-minimum-md)
- [`docs/wayfinder/worker-go-live.md`](#docs-wayfinder-worker-go-live-md)
- [`docs/wayfinder/worker-onboarding.md`](#docs-wayfinder-worker-onboarding-md)
- [`README.md`](#readme-md)
- [`WAYFINDER.md`](#wayfinder-md)

---

## Per-file details

### `.agents/skills/ask-matt/PHASE-BOUNDARIES.md`

**Summary:** Phase boundaries — A **phase** is a chunk of work inside a session — the grilling, the implementation, the QA.

**Headings (up to H3):**
- # Phase boundaries
- ## The five options
- ## The tree
- ## Primary and secondary sources
- ## These are judgement calls

**Fenced shell / install / build / test code blocks (exact lines):**
- not found in this file

**Explicit setup / installation / run / test commands:**
- `/handoff`

**Environment variables, ports, secrets, config files:**
- not found in this file

**TODO / FIXME / XXX / Open questions:**
- not found in this file

**File links, external links, CI/status badges:**
- external: [smart zone](https://www.aihero.dev/ai-coding-dictionary/smart-zone)

---

### `.agents/skills/ask-matt/SKILL.md`

**Summary:** Ask Matt — You don't remember every skill, so ask.

**Headings (up to H3):**
- # Ask Matt
- ## The main flow: idea → ship
- ### Context hygiene
- ## On-ramps
- ## Codebase health
- ## Vocabulary underneath
- ## Phase boundaries
- ## Standalone
- ## Precondition

**Fenced shell / install / build / test code blocks (exact lines):**
- not found in this file

**Explicit setup / installation / run / test commands:**
- `/grill-with-docs`
- `/grill-me`
- `/handoff`
- `/prototype`
- `/to-spec`
- `/to-tickets`
- `/implement`
- `/code-review`
- `/triage`
- `/wayfinder`
- `/research`
- `/wizard`

**Environment variables, ports, secrets, config files:**
- `.env`
- `CI secrets`
- `GitHub secrets`

**TODO / FIXME / XXX / Open questions:**
- not found in this file

**File links, external links, CI/status badges:**
- external: [smart zone](https://www.aihero.dev/ai-coding-dictionary/smart-zone)
- file: [PHASE-BOUNDARIES.md](PHASE-BOUNDARIES.md)

---

### `.agents/skills/code-review/SKILL.md`

**Summary:** Two-axis review of the diff between `HEAD` and a fixed point the user supplies:

**Headings (up to H3):**
- ## Process
- ### 1. Pin the fixed point
- ### 2. Identify the spec source
- ### 3. Identify the standards sources
- ### 4. Spawn both sub-agents in parallel
- ### 5. Aggregate
- ## Why two axes

**Fenced shell / install / build / test code blocks (exact lines):**
- not found in this file

**Explicit setup / installation / run / test commands:**
- `git diff <fixed-point>...HEAD`
- `git log <fixed-point>..HEAD --oneline`
- `git rev-parse <fixed-point>`

**Environment variables, ports, secrets, config files:**
- not found in this file

**TODO / FIXME / XXX / Open questions:**
- not found in this file

**File links, external links, CI/status badges:**
- not found in this file

---

### `.agents/skills/codebase-design/DEEPENING.md`

**Summary:** Deepening — How to deepen a cluster of shallow modules safely, given its dependencies.

**Headings (up to H3):**
- # Deepening
- ## Dependency categories
- ### 1. In-process
- ### 2. Local-substitutable
- ### 3. Remote but owned (Ports & Adapters)
- ### 4. True external (Mock)
- ## Seam discipline
- ## Testing strategy: replace, don't layer

**Fenced shell / install / build / test code blocks (exact lines):**
- not found in this file

**Explicit setup / installation / run / test commands:**
- not found in this file

**Environment variables, ports, secrets, config files:**
- not found in this file

**TODO / FIXME / XXX / Open questions:**
- not found in this file

**File links, external links, CI/status badges:**
- file: [SKILL.md](SKILL.md)

---

### `.agents/skills/codebase-design/DESIGN-IT-TWICE.md`

**Summary:** Design It Twice — When the user wants to explore alternative interfaces for a chosen deepening candidate, use this parallel sub-agent pattern.

**Headings (up to H3):**
- # Design It Twice
- ## Process
- ### 1. Frame the problem space
- ### 2. Spawn sub-agents
- ### 3. Present and compare

**Fenced shell / install / build / test code blocks (exact lines):**
- not found in this file

**Explicit setup / installation / run / test commands:**
- not found in this file

**Environment variables, ports, secrets, config files:**
- not found in this file

**TODO / FIXME / XXX / Open questions:**
- not found in this file

**File links, external links, CI/status badges:**
- file: [SKILL.md](SKILL.md)
- file: [DEEPENING.md](DEEPENING.md)

---

### `.agents/skills/codebase-design/SKILL.md`

**Summary:** Codebase Design — Design **deep modules**: a lot of behaviour behind a small interface, placed at a clean seam, testable through that interface.

**Headings (up to H3):**
- # Codebase Design
- ## Glossary
- ## Deep vs shallow
- ## Principles
- ## Designing for testability
- ## Relationships
- ## Rejected framings
- ## Going deeper

**Fenced shell / install / build / test code blocks (exact lines):**
- not found in this file

**Explicit setup / installation / run / test commands:**
- not found in this file

**Environment variables, ports, secrets, config files:**
- not found in this file

**TODO / FIXME / XXX / Open questions:**
- not found in this file

**File links, external links, CI/status badges:**
- file: [DEEPENING.md](DEEPENING.md)
- file: [DESIGN-IT-TWICE.md](DESIGN-IT-TWICE.md)

---

### `.agents/skills/diagnosing-bugs/SKILL.md`

**Summary:** Diagnosing Bugs — A discipline for hard bugs.

**Headings (up to H3):**
- # Diagnosing Bugs
- ## Redact
- ## Phase 1 — Build a feedback loop
- ### Ways to construct one — try them in roughly this order
- ### Tighten the loop
- ### Non-deterministic bugs
- ### When you genuinely cannot build a loop
- ### Completion criterion — a tight loop that goes red
- ## Phase 2 — Reproduce + minimise
- ### Minimise
- ## Phase 3 — Hypothesise
- ## Phase 4 — Instrument
- ## Phase 5 — Fix + regression test
- ## Phase 6 — Cleanup

**Fenced shell / install / build / test code blocks (exact lines):**
- not found in this file

**Explicit setup / installation / run / test commands:**
- `git bisect run`

**Environment variables, ports, secrets, config files:**
- not found in this file

**TODO / FIXME / XXX / Open questions:**
- not found in this file

**File links, external links, CI/status badges:**
- not found in this file

---

### `.agents/skills/domain-modeling/ADR-FORMAT.md`

**Summary:** ADR Format — ADRs live in `docs/adr/` and use sequential numbering: `0001-slug.md`, `0002-slug.md`, etc.

**Headings (up to H3):**
- # ADR Format
- ## Template
- ## Optional sections
- ## Numbering
- ## When to offer an ADR
- ### What qualifies

**Fenced shell / install / build / test code blocks (exact lines):**
- not found in this file

**Explicit setup / installation / run / test commands:**
- not found in this file

**Environment variables, ports, secrets, config files:**
- not found in this file

**TODO / FIXME / XXX / Open questions:**
- not found in this file

**File links, external links, CI/status badges:**
- not found in this file

---

### `.agents/skills/domain-modeling/CONTEXT-FORMAT.md`

**Summary:** CONTEXT.md Format — {One or two sentence description of what this context is and why it exists.}

**Headings (up to H3):**
- # CONTEXT.md Format
- ## Structure
- ## Rules
- ## Single vs multi-context repos

**Fenced shell / install / build / test code blocks (exact lines):**
- not found in this file

**Explicit setup / installation / run / test commands:**
- not found in this file

**Environment variables, ports, secrets, config files:**
- not found in this file

**TODO / FIXME / XXX / Open questions:**
- not found in this file

**File links, external links, CI/status badges:**
- file: [Ordering](./src/ordering/CONTEXT.md)
- file: [Billing](./src/billing/CONTEXT.md)
- file: [Fulfillment](./src/fulfillment/CONTEXT.md)

---

### `.agents/skills/domain-modeling/SKILL.md`

**Summary:** Domain Modeling — Actively build and sharpen the project's domain model as you design.

**Headings (up to H3):**
- # Domain Modeling
- ## File structure
- ## During the session
- ### Challenge against the glossary
- ### Sharpen fuzzy language
- ### Discuss concrete scenarios
- ### Cross-reference with code
- ### Update CONTEXT.md inline
- ### Offer ADRs sparingly

**Fenced shell / install / build / test code blocks (exact lines):**
- not found in this file

**Explicit setup / installation / run / test commands:**
- `/`

**Environment variables, ports, secrets, config files:**
- not found in this file

**TODO / FIXME / XXX / Open questions:**
- not found in this file

**File links, external links, CI/status badges:**
- file: [CONTEXT-FORMAT.md](./CONTEXT-FORMAT.md)
- file: [ADR-FORMAT.md](./ADR-FORMAT.md)

---

### `.agents/skills/grill-me/SKILL.md`

**Summary:** Call the Skill tool with "grilling".

**Headings (up to H3):**
- not found in this file

**Fenced shell / install / build / test code blocks (exact lines):**
- not found in this file

**Explicit setup / installation / run / test commands:**
- not found in this file

**Environment variables, ports, secrets, config files:**
- not found in this file

**TODO / FIXME / XXX / Open questions:**
- not found in this file

**File links, external links, CI/status badges:**
- not found in this file

---

### `.agents/skills/grill-with-docs/SKILL.md`

**Summary:** Call the Skill tool twice, for "grilling" and "domain-modeling".

**Headings (up to H3):**
- not found in this file

**Fenced shell / install / build / test code blocks (exact lines):**
- not found in this file

**Explicit setup / installation / run / test commands:**
- not found in this file

**Environment variables, ports, secrets, config files:**
- not found in this file

**TODO / FIXME / XXX / Open questions:**
- not found in this file

**File links, external links, CI/status badges:**
- not found in this file

---

### `.agents/skills/grilling/SKILL.md`

**Summary:** Interview the user relentlessly until you reach a shared understanding.

**Headings (up to H3):**
- not found in this file

**Fenced shell / install / build / test code blocks (exact lines):**
- not found in this file

**Explicit setup / installation / run / test commands:**
- not found in this file

**Environment variables, ports, secrets, config files:**
- not found in this file

**TODO / FIXME / XXX / Open questions:**
- not found in this file

**File links, external links, CI/status badges:**
- not found in this file

---

### `.agents/skills/handoff/SKILL.md`

**Summary:** Write a handoff document summarising the current conversation so a fresh agent can continue the work.

**Headings (up to H3):**
- not found in this file

**Fenced shell / install / build / test code blocks (exact lines):**
- not found in this file

**Explicit setup / installation / run / test commands:**
- not found in this file

**Environment variables, ports, secrets, config files:**
- not found in this file

**TODO / FIXME / XXX / Open questions:**
- not found in this file

**File links, external links, CI/status badges:**
- not found in this file

---

### `.agents/skills/implement/SKILL.md`

**Summary:** Implement the work described by the user in the spec or tickets.

**Headings (up to H3):**
- not found in this file

**Fenced shell / install / build / test code blocks (exact lines):**
- not found in this file

**Explicit setup / installation / run / test commands:**
- not found in this file

**Environment variables, ports, secrets, config files:**
- not found in this file

**TODO / FIXME / XXX / Open questions:**
- not found in this file

**File links, external links, CI/status badges:**
- not found in this file

---

### `.agents/skills/improve-codebase-architecture/HTML-REPORT.md`

**Summary:** HTML Report Format — The architectural review is rendered as a single self-contained HTML file in the OS temp directory.

**Headings (up to H3):**
- # HTML Report Format
- ## Scaffold
- ## Header
- ## Candidate card
- ## Diagram patterns
- ### Mermaid graph (the workhorse for dependencies / call flow)
- ### Hand-built boxes-and-arrows (when Mermaid's layout fights you)
- ### Cross-section (good for layered shallowness)
- ### Mass diagram (good for "interface as wide as implementation")
- ### Call-graph collapse
- ## Style guidance
- ## Top recommendation section
- ## Tone

**Fenced shell / install / build / test code blocks (exact lines):**
- not found in this file

**Explicit setup / installation / run / test commands:**
- not found in this file

**Environment variables, ports, secrets, config files:**
- not found in this file

**TODO / FIXME / XXX / Open questions:**
- not found in this file

**File links, external links, CI/status badges:**
- url: https://cdn.tailwindcss.com
- url: https://cdn.jsdelivr.net/npm/mermaid@11/dist/mermaid.esm.min.mjs

---

### `.agents/skills/improve-codebase-architecture/SKILL.md`

**Summary:** Improve Codebase Architecture — Surface architectural friction and propose **deepening opportunities** — refactors that turn shallow modules into deep ones.

**Headings (up to H3):**
- # Improve Codebase Architecture
- ## Process
- ### 1. Explore
- ### 2. Present candidates as an HTML report
- ### 3. Grilling loop

**Fenced shell / install / build / test code blocks (exact lines):**
- not found in this file

**Explicit setup / installation / run / test commands:**
- `git log --oneline`
- `xdg-open <path>`
- `open <path>`
- `start <path>`

**Environment variables, ports, secrets, config files:**
- not found in this file

**TODO / FIXME / XXX / Open questions:**
- not found in this file

**File links, external links, CI/status badges:**
- file: [HTML-REPORT.md](HTML-REPORT.md)

---

### `.agents/skills/prototype/LOGIC.md`

**Summary:** Logic Prototype — A single, self-contained HTML file — a **shareable demo** — that lets anyone drive a state model by clicking buttons.

**Headings (up to H3):**
- # Logic Prototype
- ## When this is the right shape
- ## Process
- ### 1. State the question
- ### 2. Isolate the logic in a portable module
- ### 3. Build the shareable HTML file
- ### 4. Hand it over
- ### 5. Capture the answer and the prototype
- ## Anti-patterns

**Fenced shell / install / build / test code blocks (exact lines):**
- not found in this file

**Explicit setup / installation / run / test commands:**
- not found in this file

**Environment variables, ports, secrets, config files:**
- not found in this file

**TODO / FIXME / XXX / Open questions:**
- not found in this file

**File links, external links, CI/status badges:**
- file: [UI.md](UI.md)
- file: [SKILL](SKILL.md)

---

### `.agents/skills/prototype/SKILL.md`

**Summary:** Prototype — A prototype is **throwaway code that answers a question**.

**Headings (up to H3):**
- # Prototype
- ## Pick a branch
- ## Rules that apply to both

**Fenced shell / install / build / test code blocks (exact lines):**
- not found in this file

**Explicit setup / installation / run / test commands:**
- `pnpm <name>`
- `python <path>`
- `bun <path>`

**Environment variables, ports, secrets, config files:**
- not found in this file

**TODO / FIXME / XXX / Open questions:**
- not found in this file

**File links, external links, CI/status badges:**
- file: [LOGIC.md](LOGIC.md)
- file: [UI.md](UI.md)

---

### `.agents/skills/prototype/UI.md`

**Summary:** UI Prototype — Generate **several radically different UI variations** on a single route, switchable from a floating bottom bar.

**Headings (up to H3):**
- # UI Prototype
- ## When this is the right shape
- ## Two sub-shapes — strongly prefer sub-shape A
- ### Sub-shape A — adjustment to an existing page (preferred)
- ### Sub-shape B — a new page (last resort)
- ## Process
- ### 1. State the question and pick N
- ### 2. Generate radically different variants
- ### 3. Wire them together
- ### 4. Build the floating switcher
- ### 5. Hand it over
- ### 6. Capture the answer and clean up
- ## Anti-patterns

**Fenced shell / install / build / test code blocks (exact lines):**
- not found in this file

**Explicit setup / installation / run / test commands:**
- `/prototype/<name>`

**Environment variables, ports, secrets, config files:**
- `process.env.NODE_ENV`

**TODO / FIXME / XXX / Open questions:**
- not found in this file

**File links, external links, CI/status badges:**
- file: [LOGIC.md](LOGIC.md)
- file: [SKILL](SKILL.md)

---

### `.agents/skills/research/SKILL.md`

**Summary:** Spin up a **background agent** to do the research, so you keep working while it reads.

**Headings (up to H3):**
- not found in this file

**Fenced shell / install / build / test code blocks (exact lines):**
- not found in this file

**Explicit setup / installation / run / test commands:**
- not found in this file

**Environment variables, ports, secrets, config files:**
- not found in this file

**TODO / FIXME / XXX / Open questions:**
- not found in this file

**File links, external links, CI/status badges:**
- not found in this file

---

### `.agents/skills/setup-matt-pocock-skills/domain.md`

**Summary:** Domain Docs — How the engineering skills should consume this repo's domain documentation when exploring the codebase.

**Headings (up to H3):**
- # Domain Docs
- ## Before exploring, read these
- ## File structure
- ## Use the glossary's vocabulary
- ## Flag ADR conflicts

**Fenced shell / install / build / test code blocks (exact lines):**
- not found in this file

**Explicit setup / installation / run / test commands:**
- `/`
- `/grill-with-docs`

**Environment variables, ports, secrets, config files:**
- not found in this file

**TODO / FIXME / XXX / Open questions:**
- not found in this file

**File links, external links, CI/status badges:**
- not found in this file

---

### `.agents/skills/setup-matt-pocock-skills/issue-tracker-github.md`

**Summary:** Issue tracker: GitHub — Issues and specs for this repo live as GitHub issues.

**Headings (up to H3):**
- # Issue tracker: GitHub
- ## Conventions
- ## Pull requests as a triage surface
- ## When a skill says "publish to the issue tracker"
- ## When a skill says "fetch the relevant ticket"
- ## Wayfinding operations

**Fenced shell / install / build / test code blocks (exact lines):**
- not found in this file

**Explicit setup / installation / run / test commands:**
- `gh issue create --title "..." --body "..."`
- `gh issue view <number> --comments`
- `gh issue list --state open --json number,title,body,labels,comments --jq '[.[] | {number, title, body, labels: [.labels[].name], comments: [.comments[].body]}]'`
- `gh issue comment <number> --body "..."`
- `gh issue edit <number> --add-label "..."`
- `gh issue close <number> --comment "..."`
- `git remote -v`
- `gh pr`
- `gh pr view <number> --comments`
- `gh pr diff <number>`
- `gh pr list --state open --json number,title,body,labels,author,authorAssociation,comments`
- `gh pr comment`
- `gh pr edit --add-label`
- `gh pr close`
- `gh pr view 42`
- `gh issue view 42`
- `gh issue create --label wayfinder:map`
- `gh api`
- `gh api --method POST repos/<owner>/<repo>/issues/<child>/dependencies/blocked_by -F issue_id=<blocker-db-id>`
- `gh api repos/<owner>/<repo>/issues/<n> --jq .id`
- _(truncated: showing 20 of 26)_

**Environment variables, ports, secrets, config files:**
- not found in this file

**TODO / FIXME / XXX / Open questions:**
- not found in this file

**File links, external links, CI/status badges:**
- not found in this file

---

### `.agents/skills/setup-matt-pocock-skills/issue-tracker-gitlab.md`

**Summary:** Issue tracker: GitLab — Issues and specs for this repo live as GitLab issues.

**Headings (up to H3):**
- # Issue tracker: GitLab
- ## Conventions
- ## Merge requests as a triage surface
- ## When a skill says "publish to the issue tracker"
- ## When a skill says "fetch the relevant ticket"
- ## Wayfinding operations

**Fenced shell / install / build / test code blocks (exact lines):**
- not found in this file

**Explicit setup / installation / run / test commands:**
- `glab issue create --title "..." --description "..."`
- `glab issue view <number> --comments`
- `glab issue list -F json`
- `glab issue note <number> --message "..."`
- `glab issue update <number> --label "..."`
- `glab issue close <number>`
- `glab issue close`
- `glab mr create`
- `glab mr view`
- `glab mr note`
- `gh pr `
- `git remote -v`
- `glab mr`
- `glab mr view <number> --comments`
- `glab mr diff <number>`
- `glab mr list -F json`
- `glab mr update --label`
- `glab mr close`
- `glab issue create --label wayfinder:map`
- `glab issue note <child> --message "/blocked_by #<blocker>"`
- _(truncated: showing 20 of 26)_

**Environment variables, ports, secrets, config files:**
- not found in this file

**TODO / FIXME / XXX / Open questions:**
- not found in this file

**File links, external links, CI/status badges:**
- external: [`glab`](https://gitlab.com/gitlab-org/cli)

---

### `.agents/skills/setup-matt-pocock-skills/issue-tracker-local.md`

**Summary:** Issue tracker: Local Markdown — Issues and specs for this repo live as markdown files in `.scratch/`.

**Headings (up to H3):**
- # Issue tracker: Local Markdown
- ## Conventions
- ## When a skill says "publish to the issue tracker"
- ## When a skill says "fetch the relevant ticket"
- ## Wayfinding operations

**Fenced shell / install / build / test code blocks (exact lines):**
- not found in this file

**Explicit setup / installation / run / test commands:**
- `/wayfinder`

**Environment variables, ports, secrets, config files:**
- not found in this file

**TODO / FIXME / XXX / Open questions:**
- not found in this file

**File links, external links, CI/status badges:**
- not found in this file

---

### `.agents/skills/setup-matt-pocock-skills/SKILL.md`

**Summary:** Setup Matt Pocock's Skills — Scaffold the per-repo configuration that the engineering skills assume:

**Headings (up to H3):**
- # Setup Matt Pocock's Skills
- ## Process
- ### 1. Explore
- ### 2. Present findings and ask
- ### 3. Confirm and edit
- ### 4. Write
- ### 5. Done

**Fenced shell / install / build / test code blocks (exact lines):**
- not found in this file

**Explicit setup / installation / run / test commands:**
- `git remote -v`
- `gh issue create`
- `git remote`

**Environment variables, ports, secrets, config files:**
- `.git/config`
- `package.json`

**TODO / FIXME / XXX / Open questions:**
- not found in this file

**File links, external links, CI/status badges:**
- external: [`glab`](https://gitlab.com/gitlab-org/cli)
- file: [issue-tracker-github.md](./issue-tracker-github.md)
- file: [issue-tracker-gitlab.md](./issue-tracker-gitlab.md)
- file: [issue-tracker-local.md](./issue-tracker-local.md)
- file: [triage-labels.md](./triage-labels.md)
- file: [domain.md](./domain.md)

---

### `.agents/skills/setup-matt-pocock-skills/triage-labels.md`

**Summary:** Triage Labels — The skills speak in terms of five canonical triage roles.

**Headings (up to H3):**
- # Triage Labels

**Fenced shell / install / build / test code blocks (exact lines):**
- not found in this file

**Explicit setup / installation / run / test commands:**
- not found in this file

**Environment variables, ports, secrets, config files:**
- not found in this file

**TODO / FIXME / XXX / Open questions:**
- not found in this file

**File links, external links, CI/status badges:**
- not found in this file

---

### `.agents/skills/tdd/mocking.md`

**Summary:** When to Mock — Mock at **system boundaries** only:

**Headings (up to H3):**
- # When to Mock
- ## Designing for Mockability

**Fenced shell / install / build / test code blocks (exact lines):**
- not found in this file

**Explicit setup / installation / run / test commands:**
- not found in this file

**Environment variables, ports, secrets, config files:**
- `process.env.STRIPE_KEY`

**TODO / FIXME / XXX / Open questions:**
- not found in this file

**File links, external links, CI/status badges:**
- not found in this file

---

### `.agents/skills/tdd/SKILL.md`

**Summary:** Test-Driven Development — TDD is the red → green loop.

**Headings (up to H3):**
- # Test-Driven Development
- ## What a good test is
- ## Seams — where tests go
- ## Anti-patterns
- ## Rules of the loop

**Fenced shell / install / build / test code blocks (exact lines):**
- not found in this file

**Explicit setup / installation / run / test commands:**
- not found in this file

**Environment variables, ports, secrets, config files:**
- not found in this file

**TODO / FIXME / XXX / Open questions:**
- not found in this file

**File links, external links, CI/status badges:**
- file: [tests.md](tests.md)
- file: [mocking.md](mocking.md)

---

### `.agents/skills/tdd/tests.md`

**Summary:** Good and Bad Tests — **Integration-style**: Test through real interfaces, not mocks of internal parts.

**Headings (up to H3):**
- # Good and Bad Tests
- ## Good Tests
- ## Bad Tests

**Fenced shell / install / build / test code blocks (exact lines):**
- not found in this file

**Explicit setup / installation / run / test commands:**
- not found in this file

**Environment variables, ports, secrets, config files:**
- not found in this file

**TODO / FIXME / XXX / Open questions:**
- not found in this file

**File links, external links, CI/status badges:**
- not found in this file

---

### `.agents/skills/to-spec/SKILL.md`

**Summary:** This skill takes the current conversation context and codebase understanding and produces a spec.

**Headings (up to H3):**
- ## Process
- ## Problem Statement
- ## Solution
- ## User Stories
- ## Implementation Decisions
- ## Testing Decisions
- ## Out of Scope
- ## Further Notes

**Fenced shell / install / build / test code blocks (exact lines):**
- not found in this file

**Explicit setup / installation / run / test commands:**
- not found in this file

**Environment variables, ports, secrets, config files:**
- not found in this file

**TODO / FIXME / XXX / Open questions:**
- not found in this file

**File links, external links, CI/status badges:**
- not found in this file

---

### `.agents/skills/to-tickets/SKILL.md`

**Summary:** To Tickets — Break a plan, spec, or conversation into a set of **tickets** — tracer-bullet vertical slices, each declaring the tickets that **block** it.

**Headings (up to H3):**
- # To Tickets
- ## Process
- ### 1. Gather context
- ### 2. Explore the codebase (optional)
- ### 3. Draft vertical slices
- ### 4. Quiz the user
- ### 5. Publish the tickets to the configured tracker
- # <NN> — <Ticket title>
- ## Parent
- ## What to build
- ## Acceptance criteria
- ## Blocked by

**Fenced shell / install / build / test code blocks (exact lines):**
- not found in this file

**Explicit setup / installation / run / test commands:**
- not found in this file

**Environment variables, ports, secrets, config files:**
- not found in this file

**TODO / FIXME / XXX / Open questions:**
- not found in this file

**File links, external links, CI/status badges:**
- not found in this file

---

### `.agents/skills/triage/AGENT-BRIEF.md`

**Summary:** Writing Agent Briefs — An agent brief is a structured comment posted on a GitHub issue or PR when it moves to `ready-for-agent`.

**Headings (up to H3):**
- # Writing Agent Briefs
- ## Principles
- ### Durability over precision
- ### Behavioral, not procedural
- ### Complete acceptance criteria
- ### Explicit scope boundaries
- ## Template
- ## Examples
- ### Good agent brief (bug)
- ### Good agent brief (enhancement)
- ### Good agent brief (PR)
- ### Bad agent brief

**Fenced shell / install / build / test code blocks (exact lines):**
- not found in this file

**Explicit setup / installation / run / test commands:**
- `gh issue list --label needs-triage`
- `/triage`

**Environment variables, ports, secrets, config files:**
- not found in this file

**TODO / FIXME / XXX / Open questions:**
- not found in this file

**File links, external links, CI/status badges:**
- not found in this file

---

### `.agents/skills/triage/OUT-OF-SCOPE.md`

**Summary:** Out-of-Scope Knowledge Base — The `.out-of-scope/` directory in a repo stores persistent records of rejected feature requests.

**Headings (up to H3):**
- # Out-of-Scope Knowledge Base
- ## Directory structure
- ## File format
- ## Prior requests

**Fenced shell / install / build / test code blocks (exact lines):**
- not found in this file

**Explicit setup / installation / run / test commands:**
- not found in this file

**Environment variables, ports, secrets, config files:**
- not found in this file

**TODO / FIXME / XXX / Open questions:**
- not found in this file

**File links, external links, CI/status badges:**
- not found in this file

---

### `.agents/skills/triage/SKILL.md`

**Summary:** Triage — Move issues on the project issue tracker through a small state machine of triage roles.

**Headings (up to H3):**
- # Triage
- ## Reference docs
- ## Roles
- ## Invocation
- ## Show what needs attention
- ## Triage a specific issue or PR
- ## Quick state override
- ## Needs-info template
- ## Resuming a previous session

**Fenced shell / install / build / test code blocks (exact lines):**
- not found in this file

**Explicit setup / installation / run / test commands:**
- `/triage`

**Environment variables, ports, secrets, config files:**
- not found in this file

**TODO / FIXME / XXX / Open questions:**
- not found in this file

**File links, external links, CI/status badges:**
- file: [AGENT-BRIEF.md](AGENT-BRIEF.md)
- file: [OUT-OF-SCOPE.md](OUT-OF-SCOPE.md)

---

### `.agents/skills/wait-what/SKILL.md`

**Summary:** Wait — I don't understand where you've got to here.

**Headings (up to H3):**
- not found in this file

**Fenced shell / install / build / test code blocks (exact lines):**
- not found in this file

**Explicit setup / installation / run / test commands:**
- not found in this file

**Environment variables, ports, secrets, config files:**
- not found in this file

**TODO / FIXME / XXX / Open questions:**
- not found in this file

**File links, external links, CI/status badges:**
- not found in this file

---

### `.agents/skills/wayfinder/SKILL.md`

**Summary:** A loose idea has arrived — too big for one agent session, and wrapped in fog: the way from here to the **destination** isn't visible yet.

**Headings (up to H3):**
- ## Plan, don't do
- ## Refer by name
- ## The Map
- ### The map body
- ### Tickets
- ## Ticket Types
- ## Fog of war
- ## Out of scope
- ## Invocation
- ### Chart the map
- ### Work through the map

**Fenced shell / install / build / test code blocks (exact lines):**
- not found in this file

**Explicit setup / installation / run / test commands:**
- not found in this file

**Environment variables, ports, secrets, config files:**
- not found in this file

**TODO / FIXME / XXX / Open questions:**
- L46: ## Not yet specified
- L60: ## Question

**File links, external links, CI/status badges:**
- file: [<closed ticket title>](link)
- file: [Ticket Types](#ticket-types)
- file: [Work through the map](#work-through-the-map)

---

### `.agents/skills/wizard/SKILL.md`

**Summary:** Wizard — A **wizard** is a bash script that walks a human, step by step, through a manual procedure that's tedious to do by hand and tedious to re-explain to an AI every time.

**Headings (up to H3):**
- # Wizard
- ## Process
- ### 1. Scope the procedure
- ### 2. Map each stage's journey
- ### 3. Author the wizard
- ### 4. Verify and hand off

**Fenced shell / install / build / test code blocks (exact lines):**
- not found in this file

**Explicit setup / installation / run / test commands:**
- `gh secret`
- `gh variable`

**Environment variables, ports, secrets, config files:**
- `.env`
- `template.sh`
- `.env.example`
- `.github/workflows/*``
- `CI secrets`
- `GitHub secrets`

**TODO / FIXME / XXX / Open questions:**
- not found in this file

**File links, external links, CI/status badges:**
- file: [template.sh](template.sh)

---

### `.agents/skills/writing-for-agents/SKILL-MECHANICS.md`

**Summary:** Skill mechanics — The skill-specific branch of [`writing-for-agents`](SKILL.md): what changes when the document is a skill — frontmatter, the invocation choice, and router skills.

**Headings (up to H3):**
- # Skill mechanics
- ## Invocation
- ## Splitting by invocation
- ## Router skills

**Fenced shell / install / build / test code blocks (exact lines):**
- not found in this file

**Explicit setup / installation / run / test commands:**
- not found in this file

**Environment variables, ports, secrets, config files:**
- not found in this file

**TODO / FIXME / XXX / Open questions:**
- not found in this file

**File links, external links, CI/status badges:**
- file: [`writing-for-agents`](SKILL.md)

---

### `.agents/skills/writing-for-agents/SKILL.md`

**Summary:** Reference for writing any document an agent consumes — a skill, an `AGENTS.md` / `CLAUDE.md`, a doc reached by a pointer.

**Headings (up to H3):**
- ## Context pointers
- ## The two loads
- ## Information hierarchy
- ## Steps and completion criteria
- ## When to split
- ## Leading words
- ## Pruning

**Fenced shell / install / build / test code blocks (exact lines):**
- not found in this file

**Explicit setup / installation / run / test commands:**
- not found in this file

**Environment variables, ports, secrets, config files:**
- `package.json`

**TODO / FIXME / XXX / Open questions:**
- not found in this file

**File links, external links, CI/status badges:**
- file: [`SKILL-MECHANICS.md`](SKILL-MECHANICS.md)

---

### `AGENTS.md`

**Summary:** AGENTS.md — AI assistant brief for DLC / KaamWala — Read [`CONTEXT.md`](./CONTEXT.md), then [`WAYFINDER.md`](./WAYFINDER.md).

**Headings (up to H3):**
- # AGENTS.md — AI assistant brief for DLC / KaamWala
- ## 1. What this repo is
- ## 2. The workflow (type these; the agent will not start them alone)
- ## 3. Hard rules
- ## Agent skills
- ### Issue tracker
- ### Triage labels
- ### Domain docs

**Fenced shell / install / build / test code blocks (exact lines):**
- not found in this file

**Explicit setup / installation / run / test commands:**
- `/wayfinder`
- `/to-spec`
- `/to-tickets`
- `/implement #<id>`
- `/code-review`
- `/grill-with-docs`
- `/prototype`
- `/research`
- `/ask-matt`

**Environment variables, ports, secrets, config files:**
- not found in this file

**TODO / FIXME / XXX / Open questions:**
- not found in this file

**File links, external links, CI/status badges:**
- file: [`CONTEXT.md`](./CONTEXT.md)
- file: [`WAYFINDER.md`](./WAYFINDER.md)

---

### `CONTEXT.md`

**Summary:** CONTEXT.md — Domain model for KaamWala (DLC) — Single-context domain doc.

**Headings (up to H3):**
- # CONTEXT.md — Domain model for KaamWala (DLC)
- ## 1. What KaamWala is
- ## 2. What is locked vs what is fog
- ## 3. Glossary
- ## 4. Core loop (as the product doc tells it — not a spec)
- ## 5. Roles the HLDs also assume
- ## 6. Third parties named (not contracted)
- ## 7. Operating posture

**Fenced shell / install / build / test code blocks (exact lines):**
- not found in this file

**Explicit setup / installation / run / test commands:**
- `/wayfinder`
- `/to-spec`
- `/to-tickets`
- `/implement`
- `/code-review`

**Environment variables, ports, secrets, config files:**
- not found in this file

**TODO / FIXME / XXX / Open questions:**
- not found in this file

**File links, external links, CI/status badges:**
- file: [`docs/agents/domain.md`](docs/agents/domain.md)
- file: [`WAYFINDER.md`](WAYFINDER.md)
- file: [`docs/source/`](docs/source/)
- file: [What does a Booking buy?](docs/wayfinder/booking-contract.md)

---

### `docs/agents/domain.md`

**Summary:** Domain Docs — How the engineering skills should consume this repo's domain documentation when exploring the codebase.

**Headings (up to H3):**
- # Domain Docs
- ## Before exploring, read these
- ## File structure
- ## Use the glossary's vocabulary
- ## Flag ADR conflicts

**Fenced shell / install / build / test code blocks (exact lines):**
- not found in this file

**Explicit setup / installation / run / test commands:**
- `/`
- `/to-spec`
- `/grill-with-docs`
- `/wayfinder`

**Environment variables, ports, secrets, config files:**
- not found in this file

**TODO / FIXME / XXX / Open questions:**
- not found in this file

**File links, external links, CI/status badges:**
- not found in this file

---

### `docs/agents/issue-tracker.md`

**Summary:** Issue tracker: GitHub — Issues and specs for this repo live as GitHub issues.

**Headings (up to H3):**
- # Issue tracker: GitHub
- ## Conventions
- ## Pull requests as a triage surface
- ## When a skill says "publish to the issue tracker"
- ## When a skill says "fetch the relevant ticket"
- ## Wayfinding operations

**Fenced shell / install / build / test code blocks (exact lines):**
- Block 1:
  `gh label create needs-triage --color "FBCA04" --force`
  `gh label create needs-info --color "D93F0B" --force`
  `gh label create ready-for-agent --color "0E8A16" --force`
  `gh label create ready-for-human --color "1D76DB" --force`
  `gh label create wontfix --color "FFFFFF" --force`
  `gh label create wayfinder:map --color "5319E7" --force`
  `gh label create wayfinder:grilling --color "BFD4F2" --force`
  `gh label create wayfinder:prototype --color "C2E0C6" --force`
  `gh label create wayfinder:research --color "FEF2C0" --force`
  `gh label create wayfinder:task --color "D4C5F9" --force`

**Explicit setup / installation / run / test commands:**
- `gh label create needs-triage --color "FBCA04" --force`
- `gh label create needs-info --color "D93F0B" --force`
- `gh label create ready-for-agent --color "0E8A16" --force`
- `gh label create ready-for-human --color "1D76DB" --force`
- `gh label create wontfix --color "FFFFFF" --force`
- `gh label create wayfinder:map --color "5319E7" --force`
- `gh label create wayfinder:grilling --color "BFD4F2" --force`
- `gh label create wayfinder:prototype --color "C2E0C6" --force`
- `gh label create wayfinder:research --color "FEF2C0" --force`
- `gh label create wayfinder:task --color "D4C5F9" --force`
- `git remote -v`
- `gh issue create --title "..." --body "..."`
- `gh issue view <number> --comments`
- `gh issue list --state open --json number,title,body,labels,comments`
- `gh issue comment <number> --body "..."`
- `gh issue edit <number> --add-label "..."`
- `gh issue close <number> --comment "..."`
- `gh issue edit <n> --add-assignee @me`
- `/wayfinder`

**Environment variables, ports, secrets, config files:**
- not found in this file

**TODO / FIXME / XXX / Open questions:**
- not found in this file

**File links, external links, CI/status badges:**
- file: [`WAYFINDER.md`](../../WAYFINDER.md)

---

### `docs/agents/triage-labels.md`

**Summary:** Triage Labels — The skills speak in terms of five canonical triage roles.

**Headings (up to H3):**
- # Triage Labels

**Fenced shell / install / build / test code blocks (exact lines):**
- not found in this file

**Explicit setup / installation / run / test commands:**
- not found in this file

**Environment variables, ports, secrets, config files:**
- not found in this file

**TODO / FIXME / XXX / Open questions:**
- not found in this file

**File links, external links, CI/status badges:**
- not found in this file

---

### `docs/source/backend-hld-lld.md`

**Summary:** 1. Document Purpose & Scope — Backend HLD/LLD (imported from KaamWala_Backend_HLD_LLD.docx). Draft. Contradicts product.md on Firebase vs Express/Mongo.

**Headings (up to H3):**
- # 1. Document Purpose & Scope
- ## 1.1 Technology Stack
- # 2. High Level Design (HLD)
- ## 2.1 Architecture Pattern — Modular Monolith
- ## 2.2 Project Folder Structure
- ## 2.3 Module Structure (Each Module Follows This Pattern)
- # 3. Security Architecture
- ## 3.1 Authentication Flow
- ## 3.2 Security Middleware Stack
- ## 3.3 Role-Based Access Control (RBAC)
- # 4. Database Schema — MongoDB Collections
- ## 4.1 Collection: workers
- ## 4.2 Collection: users
- ## 4.3 Collection: bookings
- ## 4.4 Collection: ratings
- ## 4.5 Collection: subscriptions
- ## 4.6 Collection: wallet_transactions
- ## 4.7 Collection: notifications
- # 5. API Endpoint Specifications (LLD)
- ## 5.1 Auth Module — /api/v1/auth
- _(truncated: showing 20 of 37)_

**Fenced shell / install / build / test code blocks (exact lines):**
- not found in this file

**Explicit setup / installation / run / test commands:**
- `Install all dependencies: express, mongoose, ioredis, joi, jsonwebtoken, bcrypt, helmet, cors, express-rate-limit, express-mongo-sanitize, xss-clean, hpp, winston, morgan, node-cron`

**Environment variables, ports, secrets, config files:**
- `process.env.EXOTEL_API_SECRET`
- `NODE_ENV=development`
- `PORT=5000`
- `API_BASE_URL=https://api.kaamwala.in`
- `MONGODB_URI=mongodb+srv://<user>:<password>@cluster0.mongodb.net/kaamwala`
- `REDIS_URL=rediss://default:<token>@<region>.upstash.io:6379`
- `JWT_ACCESS_SECRET=<64-char-random-hex>`
- `JWT_REFRESH_SECRET=<64-char-random-hex>`
- `JWT_ADMIN_SECRET=<64-char-random-hex>`
- `JWT_ACCESS_TTL=15m`
- `JWT_REFRESH_TTL=30d`
- `MSG91_AUTH_KEY=<your-key>`
- `MSG91_TEMPLATE_ID=<otp-template-id>`
- `RAZORPAY_KEY_ID=rzp_live_XXXXXXXXXXXXXXXX`
- `RAZORPAY_KEY_SECRET=<secret>`
- `RAZORPAY_WEBHOOK_SECRET=<webhook-secret>`
- `EXOTEL_API_KEY=<key>`
- `EXOTEL_API_SECRET=<secret>`
- `EXOTEL_VIRTUAL_NUMBER=0120XXXXXXX`
- `INTERAKT_API_KEY=<base64-key>`
- `GOOGLE_MAPS_API_KEY=<key>`
- `CLOUDINARY_CLOUD_NAME=kaamwala`
- `CLOUDINARY_API_KEY=<key>`
- `CLOUDINARY_API_SECRET=<secret>`
- `ADMIN_DEFAULT_EMAIL=admin@kaamwala.in`
- `ADMIN_DEFAULT_PASSWORD=<strong-password>`
- `port 3000`
- `port 5000`
- `db.js`
- `redis.js`
- `env.js`
- `.env.example`
- `server.js`
- `.env`
- `EXOTEL_API_SECRET`
- `JWT_ACCESS_SECRET`
- `JWT_REFRESH_SECRET`
- `JWT_ADMIN_SECRET`
- `MSG91_AUTH_KEY`
- `RAZORPAY_KEY_SECRET`
- _(truncated: showing 40 of 43)_

**TODO / FIXME / XXX / Open questions:**
- not found in this file

**File links, external links, CI/status badges:**
- url: https://api.kaamwala.in

---

### `docs/source/frontend-hld-lld.md`

**Summary:** 1. Document Purpose & Technology Decisions — Frontend HLD/LLD (imported from KaamWala_Frontend_HLD_LLD.docx). Draft. Contradicts product.md on client surface.

**Headings (up to H3):**
- # 1. Document Purpose & Technology Decisions
- ## 1.1 Why Expo (React Native) — Final Decision
- ## 1.2 Full Technology Stack
- # 2. High Level Design — Project Structure
- ## 2.1 Monorepo Structure (Both Apps in One Repo)
- ## 2.2 Shared Axios Client — Token Auto-Refresh
- # 3. Worker App — High Level Design
- ## 3.1 App Philosophy
- ## 3.2 Worker App Navigation Architecture
- # 4. Worker App — Screen Specifications (LLD)
- ## 4.1 OnboardingScreen
- ## 4.2 OTPLoginScreen
- ## 4.3 HomeScreen (Most Important Screen)
- ## 4.4 BookingHistoryScreen
- ## 4.5 WalletScreen
- ## 4.6 ProfileScreen
- ## 4.7 SubscriptionScreen (Modal)
- # 5. User App — High Level Design
- ## 5.1 App Philosophy
- ## 5.2 User App Navigation Architecture
- _(truncated: showing 20 of 43)_

**Fenced shell / install / build / test code blocks (exact lines):**
- not found in this file

**Explicit setup / installation / run / test commands:**
- `eas build --platform android --profile preview --non-interactive`
- `eas build --platform android --profile production`
- `eas build --platform ios --profile production`
- `expo create`

**Environment variables, ports, secrets, config files:**
- `process.env.EXPO_PUBLIC_API_URL`
- `port 5000`
- `package.json`
- `app.json`

**TODO / FIXME / XXX / Open questions:**
- not found in this file

**File links, external links, CI/status badges:**
- url: http://localhost:5000
- url: https://staging-api.kaamwala.in
- url: https://api.kaamwala.in

---

### `docs/source/product.md`

**Summary:** 1. Executive Summary — Product Vision (imported from KaamWala_Product_Document.docx). Draft. Not source of truth.

**Headings (up to H3):**
- # 1. Executive Summary
- # 2. Problem Statement
- ## 2.1 The Gap in the Market
- ## 2.2 Pain Points
- # 3. The KaamWala Solution
- ## 3.1 Core User Flows
- # 4. High Level Design (HLD)
- ## 4.1 System Architecture Overview
- ## 4.2 Core Data Models
- ## 4.3 Missed Call System — Detailed Flow
- # 5. Trust & Verification Framework
- # 6. Business Model & Monetization
- ## 6.1 Unit Economics (Phase 1 Estimate — Noida)
- # 7. Construction Labour Management Module
- ## 7.1 Contractor Dashboard Features
- ## 7.2 Why This is a Massive Opportunity
- # 8. Go-To-Market Strategy
- ## 8.1 Phase-Wise Rollout
- ## 8.2 Worker Acquisition Strategy
- ## 8.3 User (Customer) Acquisition Strategy
- _(truncated: showing 20 of 24)_

**Fenced shell / install / build / test code blocks (exact lines):**
- not found in this file

**Explicit setup / installation / run / test commands:**
- not found in this file

**Environment variables, ports, secrets, config files:**
- not found in this file

**TODO / FIXME / XXX / Open questions:**
- not found in this file

**File links, external links, CI/status badges:**
- not found in this file

---

### `docs/wayfinder/backend-runtime.md`

**Summary:** Which backend runtime ships in P0? — Type: grilling Status: open Blocked by: p0-loop

**Headings (up to H3):**
- # Which backend runtime ships in P0?
- ## Question
- ## Notes from source (not answers)
- ## Answer

**Fenced shell / install / build / test code blocks (exact lines):**
- not found in this file

**Explicit setup / installation / run / test commands:**
- `/research`

**Environment variables, ports, secrets, config files:**
- not found in this file

**TODO / FIXME / XXX / Open questions:**
- L4: Status: open
- L7: ## Question
- L13: 1. **Firebase** — Cloud Functions + Firestore + Hosting (product doc). Fits a PWA; realtime; free-tier story for the pilot.
- L14: 2. **Express modular monolith + MongoDB + Redis on Railway** (backend HLD). Fits the `/api/v1` surface the frontend HLD already assumes.
- L15: 3. **A thinner P0** — e.g. one Node process, one database, no Redis until LIVE lookup is actually hot.

**File links, external links, CI/status badges:**
- not found in this file

---

### `docs/wayfinder/booking-contract.md`

**Summary:** What does a Booking buy? — Type: grilling Status: open Blocked by: p0-loop

**Headings (up to H3):**
- # What does a Booking buy?
- ## Question
- ## Answer

**Fenced shell / install / build / test code blocks (exact lines):**
- not found in this file

**Explicit setup / installation / run / test commands:**
- not found in this file

**Environment variables, ports, secrets, config files:**
- not found in this file

**TODO / FIXME / XXX / Open questions:**
- L4: Status: open
- L7: ## Question
- L17: 1. Is the Booking Fee required for the first 10 "real" Bookings, or waived (GTM: first 20 Users free fee)?
- L18: 2. Does P0 include job-started / completed / cancelled / disputed, or only "fee paid, number unlocked"?
- L19: 3. Does the platform ever touch the Daily Rate, or only the Booking Fee?
- L20: 4. When is the Worker's phone visible — never before payment, or also on the public profile (backend says public profile **never** returns phone)?

**File links, external links, CI/status badges:**
- not found in this file

---

### `docs/wayfinder/client-surface.md`

**Summary:** Which client surface ships in P0? — Type: grilling Status: open Blocked by: p0-loop

**Headings (up to H3):**
- # Which client surface ships in P0?
- ## Question
- ## Notes from source (not answers)
- ## Answer

**Fenced shell / install / build / test code blocks (exact lines):**
- not found in this file

**Explicit setup / installation / run / test commands:**
- `/prototype`

**Environment variables, ports, secrets, config files:**
- not found in this file

**TODO / FIXME / XXX / Open questions:**
- L4: Status: open
- L7: ## Question
- L13: 1. **One React PWA** in the browser (product doc) — User hires; Worker may not have an app at all.
- L14: 2. **Two Expo apps** — Worker App (Hindi-first, Android) + User App (frontend HLD).
- L15: 3. **Hybrid** — e.g. User PWA + Worker Missed Call only, or User PWA + thin Worker APK.
- L16: 4. Something smaller: WhatsApp + a Field Agent tablet, no consumer app yet.

**File links, external links, CI/status badges:**
- not found in this file

---

### `docs/wayfinder/p0-loop.md`

**Summary:** What is the P0 loop? — Type: grilling Status: open Blocked by: none

**Headings (up to H3):**
- # What is the P0 loop?
- ## Question
- ## Why this ticket is first
- ## Notes from source (not answers)
- ## Answer

**Fenced shell / install / build / test code blocks (exact lines):**
- not found in this file

**Explicit setup / installation / run / test commands:**
- not found in this file

**Environment variables, ports, secrets, config files:**
- not found in this file

**TODO / FIXME / XXX / Open questions:**
- L4: Status: open
- L7: ## Question
- L15: 1. Who must be able to complete the loop without us standing next to them? (Worker only via Field Agent + Missed Call? User on their own phone?)
- L16: 2. What events must exist for a Booking to count as "real"? (Fee paid? Phone revealed? Job marked done? Rating submitted?)
- L17: 3. What from the HLD is **explicitly not** in this loop (Wallet, subscriptions, SOS, courses, contractor dashboard, iOS, …)?
- L18: 4. Does "10 real bookings" allow waived Booking Fees for the first N Users (product GTM says first 20 Users get free fee)?

**File links, external links, CI/status badges:**
- not found in this file

---

### `docs/wayfinder/trust-minimum.md`

**Summary:** What is the trust minimum for a first hire?

**Headings (up to H3):**
- # What is the trust minimum for a first hire?
- ## Question
- ## Answer

**Fenced shell / install / build / test code blocks (exact lines):**
- not found in this file

**Explicit setup / installation / run / test commands:**
- not found in this file

**Environment variables, ports, secrets, config files:**
- not found in this file

**TODO / FIXME / XXX / Open questions:**
- L4: Status: open
- L7: ## Question
- L15: - Photo + name + Skill + area
- L16: - ID Verified badge (and what that means operationally)
- L17: - LIVE today + within ~10 km
- L18: - Daily Rate shown
- L19: - Ratings (or an honest empty state)
- L20: - Aadhaar last-4 / "KW-XXXX" shown only **after** Booking Fee (product: revealed on confirm)

**File links, external links, CI/status badges:**
- not found in this file

---

### `docs/wayfinder/worker-go-live.md`

**Summary:** How does a Worker go LIVE? — Type: grilling Status: open Blocked by: p0-loop, client-surface, backend-runtime

**Headings (up to H3):**
- # How does a Worker go LIVE?
- ## Question
- ## Notes from source (not answers)
- ## Answer

**Fenced shell / install / build / test code blocks (exact lines):**
- not found in this file

**Explicit setup / installation / run / test commands:**
- not found in this file

**Environment variables, ports, secrets, config files:**
- not found in this file

**TODO / FIXME / XXX / Open questions:**
- L4: Status: open
- L7: ## Question
- L11: - **Missed Call** to an Exotel virtual number → webhook → Worker is LIVE; WhatsApp confirm; midnight reset.
- L12: - **In-app toggle** `PATCH /workers/me/availability` with GPS, plus the Missed Call as a backup.

**File links, external links, CI/status badges:**
- not found in this file

---

### `docs/wayfinder/worker-onboarding.md`

**Summary:** How does a Worker get onto the platform? — Type: grilling Status: open Blocked by: p0-loop

**Headings (up to H3):**
- # How does a Worker get onto the platform?
- ## Question
- ## Notes from source (not answers)
- ## Answer

**Fenced shell / install / build / test code blocks (exact lines):**
- not found in this file

**Explicit setup / installation / run / test commands:**
- not found in this file

**Environment variables, ports, secrets, config files:**
- not found in this file

**TODO / FIXME / XXX / Open questions:**
- L4: Status: open
- L7: ## Question
- L11: - Product: Field Agent at the chowk collects name, photo, Aadhaar, skill, area, phone. Worker does not self-serve.
- L12: - Backend HLD: `POST /workers/register` is **admin-only**; Worker/User login is phone OTP and may `isNewUser` on first verify — which could create a Worker without a Field Agent.

**File links, external links, CI/status badges:**
- not found in this file

---

### `README.md`

**Summary:** KaamWala (DLC) — Hyperlocal hire of daily **Workers** in Noida.

**Headings (up to H3):**
- # KaamWala (DLC)
- ## Read this order
- ## How we work
- ## Next human step

**Fenced shell / install / build / test code blocks (exact lines):**
- not found in this file

**Explicit setup / installation / run / test commands:**
- `/wayfinder`

**Environment variables, ports, secrets, config files:**
- not found in this file

**TODO / FIXME / XXX / Open questions:**
- not found in this file

**File links, external links, CI/status badges:**
- file: [`CONTEXT.md`](./CONTEXT.md)
- file: [`WAYFINDER.md`](./WAYFINDER.md)
- file: [`AGENTS.md`](./AGENTS.md)
- file: [`docs/source/`](./docs/source/)
- file: [What is the P0 loop?](docs/wayfinder/p0-loop.md)

---

### `WAYFINDER.md`

**Summary:** KaamWala — Noida Pilot Map — `wayfinder:map` — canonical planning artifact.

**Headings (up to H3):**
- # KaamWala — Noida Pilot Map
- ## Destination
- ## Notes
- ## Decisions so far
- ## Not yet specified (fog)
- ## Open tickets (frontier)
- ## Out of scope
- ## Specs (ready-for-agent)

**Fenced shell / install / build / test code blocks (exact lines):**
- not found in this file

**Explicit setup / installation / run / test commands:**
- `/to-spec`
- `/to-tickets`
- `/implement`
- `/prototype`
- `/research`

**Environment variables, ports, secrets, config files:**
- not found in this file

**TODO / FIXME / XXX / Open questions:**
- L22: ## Not yet specified (fog)
- L24: - Exact vendor contracts (Exotel vs Twilio vs MSG91, Interakt, Cloudinary, maps provider).
- L25: - How much Admin UI exists for the Field Agent vs a spreadsheet + one privileged API.
- L26: - iOS for Users; Worker Android APK sideload vs Play Store.
- L27: - Whether User is homeowner-only in P0 or also small contractors.
- L28: - Nightly LIVE reset: cron vs timezone vs "calendar day in Asia/Kolkata".
- L29: - Aadhaar: collect full number in the field vs last-4 hashed vs a different ID story (legal).
- L30: - Deep links, FCM, OTA (`expo-updates`) — only after client surface is decided.
- L31: - Payments other than Booking Fee (commission on wage, Worker payouts).
- L33: ## Open tickets (frontier)
- L37: - [What is the P0 loop?](docs/wayfinder/p0-loop.md) — `grilling`
- L41: - [Which client surface ships in P0?](docs/wayfinder/client-surface.md) — blocked by P0 loop
- L42: - [Which backend runtime ships in P0?](docs/wayfinder/backend-runtime.md) — blocked by P0 loop
- L43: - [How does a Worker go LIVE?](docs/wayfinder/worker-go-live.md) — blocked by P0 loop, client surface, backend runtime
- L44: - [How does a Worker get onto the platform?](docs/wayfinder/worker-onboarding.md) — blocked by P0 loop
- L45: - [What does a Booking buy?](docs/wayfinder/booking-contract.md) — blocked by P0 loop
- L46: - [What is the trust minimum for a first hire?](docs/wayfinder/trust-minimum.md) — blocked by worker onboarding, booking contract

**File links, external links, CI/status badges:**
- file: [What is the P0 loop?](docs/wayfinder/p0-loop.md)
- file: [Which client surface ships in P0?](docs/wayfinder/client-surface.md)
- file: [Which backend runtime ships in P0?](docs/wayfinder/backend-runtime.md)
- file: [How does a Worker go LIVE?](docs/wayfinder/worker-go-live.md)
- file: [How does a Worker get onto the platform?](docs/wayfinder/worker-onboarding.md)
- file: [What does a Booking buy?](docs/wayfinder/booking-contract.md)
- file: [What is the trust minimum for a first hire?](docs/wayfinder/trust-minimum.md)
- file: [P0 loop](docs/wayfinder/p0-loop.md)

---

## Developer preparation checklist

Aggregated **only** from the Markdown files above. Anything not written there is `not found in .md files`.

### Unique setup / installation commands (order from the docs)

Canonical repo docs (`README.md`, `AGENTS.md`, `WAYFINDER.md`) say this checkout is in **wayfinding** and not to scaffold app code yet. Commands below are what the docs actually write down.

1. Confirm the Git remote (issue-tracker docs): `git remote -v` (repo named `developer393/DLC`). `gh` is described as inferring the repo when run inside a clone. **No `git clone …` command is written in any `.md` file.**
2. Put the GitHub CLI on PATH if missing. `AGENTS.md` / `docs/agents/issue-tracker.md` say: until `gh` is installed, use `WAYFINDER.md` + `docs/wayfinder/`. **No package-manager install line for `gh` (brew/apt) is written.**
3. Create tracker labels once (`docs/agents/issue-tracker.md`):
   - `gh label create needs-triage --color "FBCA04" --force`
   - `gh label create needs-info --color "D93F0B" --force`
   - `gh label create ready-for-agent --color "0E8A16" --force`
   - `gh label create ready-for-human --color "1D76DB" --force`
   - `gh label create wontfix --color "FFFFFF" --force`
   - `gh label create wayfinder:map --color "5319E7" --force`
   - `gh label create wayfinder:grilling --color "BFD4F2" --force`
   - `gh label create wayfinder:prototype --color "C2E0C6" --force`
   - `gh label create wayfinder:research --color "FEF2C0" --force`
   - `gh label create wayfinder:task --color "D4C5F9" --force`
4. Optional GitHub issue-tracker operations (same file / GitHub skill template): `gh issue create`, `gh issue view`, `gh issue list`, `gh issue comment`, `gh issue edit`, `gh issue close`, `gh issue edit <n> --add-assignee @me`.
5. **Not to be run during wayfinding** (`AGENTS.md`: do not write `apps/` / `src/` production code; do not scaffold Expo or Express). The imported drafts still name later setup:
   - Frontend draft: `expo create`; “Create monorepo: apps/worker + apps/user + packages/shared using Yarn workspaces”; “Install all dependencies.”
   - Backend draft: “Set up Node.js + Express project structure”; “Install all dependencies: express, mongoose, ioredis, joi, jsonwebtoken, bcrypt, helmet, cors, express-rate-limit, express-mongo-sanitize, xss-clean, hpp, winston, morgan, node-cron”; configure MongoDB Atlas M0 and Redis Upstash.
6. App `npm install` / `yarn install` / `pnpm install` / `pip install` / `docker compose` commands: **not found in .md files** (no such exact command lines).

### Unique test / build / launch commands

From `docs/source/frontend-hld-lld.md` (draft; contradicts product doc):
- `eas build --platform android --profile preview --non-interactive`
- `eas build --platform android --profile production`
- `eas build --platform ios --profile production`
- Prose: “Test OTA update”; “Test on minimum supported Android API level (API 26 / Android 8.0)”; no executable test-runner command.

From `docs/source/backend-hld-lld.md` (draft; contradicts product doc):
- Testing described as “unit tests for the service layer” and “integration tests for the API endpoints using supertest + jest”.
- “Test coverage target: 70%+”; test DB name `kaamwala-test`.
- “End-to-end test full flow: register worker → missed call → user finds → books → payment → complete → rate”.
- Exact `npm test` / `npx jest` / `npm start` / `node server.js` lines: **not found in .md files**.

From agent skill docs (not app runtime):
- Prototype UI: `pnpm <name>`, `python <path>`, `bun <path>` (placeholders).
- Architecture HTML report: `xdg-open <path>` (Linux), `open <path>` (macOS), `start <path>` (Windows).
- Code review: `git diff <fixed-point>...HEAD`, `git log <fixed-point>..HEAD --oneline`, `git rev-parse <fixed-point>`.
- Diagnosing bugs: `git bisect run`.
- Wizard: `gh secret` / `gh variable` writes.

CI badge / coverage command / `package.json` scripts: **not found in .md files**.

### Required environment variables and example values

Quoted from `docs/source/backend-hld-lld.md` section “9. Environment Variables (.env.example)”. That file is specified as a future artifact (`kaamwala-backend/.env.example`); **it is not present as a real file in this repo.** Never commit `.env` (same section).

```
NODE_ENV=development          # development | production
PORT=5000
API_BASE_URL=https://api.kaamwala.in
MONGODB_URI=mongodb+srv://<user>:<password>@cluster0.mongodb.net/kaamwala
REDIS_URL=rediss://default:<token>@<region>.upstash.io:6379
JWT_ACCESS_SECRET=<64-char-random-hex>
JWT_REFRESH_SECRET=<64-char-random-hex>
JWT_ADMIN_SECRET=<64-char-random-hex>
JWT_ACCESS_TTL=15m
JWT_REFRESH_TTL=30d
MSG91_AUTH_KEY=<your-key>
MSG91_TEMPLATE_ID=<otp-template-id>
RAZORPAY_KEY_ID=rzp_live_XXXXXXXXXXXXXXXX
RAZORPAY_KEY_SECRET=<secret>
RAZORPAY_WEBHOOK_SECRET=<webhook-secret>
EXOTEL_API_KEY=<key>
EXOTEL_API_SECRET=<secret>
EXOTEL_VIRTUAL_NUMBER=0120XXXXXXX
INTERAKT_API_KEY=<base64-key>
GOOGLE_MAPS_API_KEY=<key>
CLOUDINARY_CLOUD_NAME=kaamwala
CLOUDINARY_API_KEY=<key>
CLOUDINARY_API_SECRET=<secret>
ADMIN_DEFAULT_EMAIL=admin@kaamwala.in
ADMIN_DEFAULT_PASSWORD=<strong-password>  # change on first login
```

From `docs/source/frontend-hld-lld.md`:
- `process.env.EXPO_PUBLIC_API_URL` (Axios `baseURL` and refresh URL).
- Environment profiles / API URLs:
  - development: `http://localhost:5000`
  - preview: `https://staging-api.kaamwala.in`
  - production: `https://api.kaamwala.in`
- CORS whitelist in backend draft includes `localhost:3000` (dev only) — **no matching frontend-dev-server port command is written.**
- Config files named: `.env`, `.env.example`, `app.json`, `package.json` (per app), `server.js`, `src/config/env.js`, `src/config/db.js`, `src/config/redis.js`.
- Prototype skill mentions gating on `process.env.NODE_ENV !== 'production'`.
- Wizard / diagnosing-bugs skills mention `.env`, GitHub secrets, `$TMPDIR` / `/tmp` / `%TEMP%`.
- TDD mocking example uses `process.env.STRIPE_KEY` (illustrative; **not** a KaamWala env var).

### Missing or ambiguous information (questions, not assumptions)

These gaps would block treating the docs as a build spec. Phrased as questions:

1. Which runtime is P0 — Firebase Cloud Functions + Firestore (product.md), Express modular monolith + MongoDB Atlas + Redis on Railway (backend HLD), or something else? `CONTEXT.md` says the three source docs contradict each other and not to pick a stack in a random chat.
2. Which client ships in P0 — React PWA with no install (product.md) vs Expo RN Worker App + User App (frontend HLD)? `WAYFINDER.md` still lists this as blocked fog.
3. What is the exact P0 product loop? Frontier ticket `docs/wayfinder/p0-loop.md` is **Status: open** with an empty `## Answer`.
4. How does a Worker go LIVE in P0 — missed call to Exotel only, in-app toggle, or both? Named as a blocked Wayfinder ticket.
5. Is there an install command for the application itself (`npm install`, Yarn workspaces bootstrap, Expo `create`, Docker)? Canonical docs say **do not scaffold** until `/to-spec` → `/to-tickets` → `/implement`.
6. What command starts the backend or apps locally (`npm start`, `node server.js`, `expo start`)? **No start script is written.**
7. What command runs tests (`npm test`, `npx jest`, coverage invocation)? Backend draft names jest + supertest but not a CLI invocation.
8. Do developers copy `.env.example` today? The backend HLD describes it, but **no `.env.example` file exists in the repo** (only mentioned in a draft).
9. Are the listed vendor keys (Exotel, Interakt, Razorpay, MSG91/Twilio, Cloudinary, Google Maps) required for a first local run, or mocked? `CONTEXT.md`: “Don't sign anyone up during wayfinding unless a `task` ticket says so.”
10. Why does CORS list `localhost:3000` while the frontend development API URL is `http://localhost:5000`? Which port does the API bind, and which does a web client use?
11. Nightly LIVE reset: cron vs timezone vs “calendar day in Asia/Kolkata”? (`WAYFINDER.md` fog.)
12. How is `gh` installed on a fresh machine, and is GitHub already the live tracker vs markdown-only `WAYFINDER.md`?
13. Is iOS in P0 for Users? Worker Android APK sideload vs Play Store? (`WAYFINDER.md` fog.)
14. Aadhaar storage: full number vs last-4 hashed vs other ID? Legal fog in `WAYFINDER.md` / `CONTEXT.md`.
15. Are skill-template GitLab (`glab`) commands relevant here, or only GitHub (`docs/agents/issue-tracker.md` says GitHub)?
16. No CI workflow, coverage badge, or package-status badge is documented in any `.md` file — is CI expected before first implementation tickets?

### Three recommended next actionable steps

Based only on extracted documentation (not on unstated preferences):

1. **Run the documented workflow, not app scaffolding.** `README.md` next human step: open the folder in Cursor, new chat, type `/wayfinder`, then claim and grill **What is the P0 loop?** (`docs/wayfinder/p0-loop.md`). `AGENTS.md` forbids Expo/Express scaffolding until the map is clear.
2. **Install `gh` if it is missing, then run the label-create block** verbatim from `docs/agents/issue-tracker.md` so GitHub matches the in-repo map. Until then, treat `WAYFINDER.md` + `docs/wayfinder/` as the working tracker (`git remote -v` should show `developer393/DLC`).
3. **Do not set production vendor secrets or create `.env` for an app that does not exist yet.** After P0 loop / client surface / backend runtime tickets are answered, open a follow-up to clarify: the exact local start and test commands, whether `.env.example` should be added, and which of `EXPO_PUBLIC_API_URL` / `PORT=5000` / `localhost:3000` apply. Those names are only in contradictory drafts today.
