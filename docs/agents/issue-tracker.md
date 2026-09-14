# Issue tracker: GitHub

Issues and specs for this repo live as GitHub issues. Use the `gh` CLI for all operations.

Until `gh` is installed on the machine, the **in-repo map** at [`WAYFINDER.md`](../../WAYFINDER.md) and child files under `docs/wayfinder/` are the working copies. Publish them to GitHub with the commands below once `gh` is on PATH. Do not invent a second tracker.

Repo: `developer393/DLC`. Infer from `git remote -v` — `gh` does this automatically when run inside a clone.

## Conventions

- **Create an issue**: `gh issue create --title "..." --body "..."`. Use a heredoc for multi-line bodies.
- **Read an issue**: `gh issue view <number> --comments`
- **List issues**: `gh issue list --state open --json number,title,body,labels,comments`
- **Comment on an issue**: `gh issue comment <number> --body "..."`
- **Apply / remove labels**: `gh issue edit <number> --add-label "..."` / `--remove-label "..."`
- **Close**: `gh issue close <number> --comment "..."`

Create these labels once (harmless if they already exist):

```bash
gh label create needs-triage --color "FBCA04" --force
gh label create needs-info --color "D93F0B" --force
gh label create ready-for-agent --color "0E8A16" --force
gh label create ready-for-human --color "1D76DB" --force
gh label create wontfix --color "FFFFFF" --force
gh label create wayfinder:map --color "5319E7" --force
gh label create wayfinder:grilling --color "BFD4F2" --force
gh label create wayfinder:prototype --color "C2E0C6" --force
gh label create wayfinder:research --color "FEF2C0" --force
gh label create wayfinder:task --color "D4C5F9" --force
```

## Pull requests as a triage surface

**PRs as a request surface: no.**

## When a skill says "publish to the issue tracker"

Create a GitHub issue. If `gh` is missing, write the equivalent markdown under `docs/wayfinder/` (decision tickets) or `docs/specs/` (specs) and say so — then publish when `gh` is available.

## When a skill says "fetch the relevant ticket"

Run `gh issue view <number> --comments`. If the issue is not on GitHub yet, read the matching file under `docs/wayfinder/` or `docs/specs/`.

## Wayfinding operations

Used by `/wayfinder`. The **map** is [`WAYFINDER.md`](../../WAYFINDER.md) in this repo, mirrored as a GitHub issue labelled `wayfinder:map` when `gh` is available.

- **Map**: `WAYFINDER.md` — Destination / Notes / Decisions-so-far / Fog / Out of scope. On GitHub: one issue labelled `wayfinder:map`.
- **Child ticket**: `docs/wayfinder/<slug>.md`. On GitHub: a child issue with `Part of #<map>` at the top. Labels: `wayfinder:<type>` (`research` / `prototype` / `grilling` / `task`).
- **Blocking**: a `Blocked by:` line near the top of the child file, naming tickets by **slug**, not `#42`. On GitHub, native issue dependencies when available.
- **Frontier**: open + unblocked + unclaimed tickets in `WAYFINDER.md`. First listed wins.
- **Claim**: set `Status: claimed` in the child file (and `gh issue edit <n> --add-assignee @me` when on GitHub).
- **Resolve**: append `## Answer` in the child file, set `Status: resolved`, then add one gist + link line to the map's Decisions-so-far. On GitHub: comment, then close.

**Never resolve more than one grilling ticket per session** (research tickets excepted). Refer to tickets by name, not number.
