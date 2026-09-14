# KaamWala — Noida Pilot Map

`wayfinder:map` — canonical planning artifact. Child tickets: `docs/wayfinder/`.

## Destination

**Noida pilot is live:** a Field Agent can put a Worker on the platform; that Worker can go LIVE for the day; a User in Noida can find a nearby LIVE Worker by Skill, complete a Booking (including the Booking Fee if P0 still charges one), receive enough identity to coordinate the job, and leave a rating afterwards. Success looks like **~100 registered Workers and ~10 real Bookings**, not a finished national OS for daily labour.

## Notes

- **Repo:** `developer393/DLC`. Product name: KaamWala.
- **Source drafts (incomplete, contradictory):** `docs/source/product.md`, `docs/source/frontend-hld-lld.md`, `docs/source/backend-hld-lld.md`.
- **This map plans. It does not build.** No Expo/Firebase/Express scaffolding until `/to-spec` → `/to-tickets` → `/implement`.
- **Skills:** `/grilling` + `/domain-modeling` on grilling tickets; `/prototype` if a question is ungrillable; `/research` for vendor facts.
- **Tracker:** GitHub when `gh` exists; until then these markdown files are the map. See `docs/agents/issue-tracker.md`.
- **P0 is a bounded epic**, not "implement the whole HLD". Wallet, subscriptions, contractor SaaS, SOS, courses, financial products stay in fog or out of scope until a ticket promotes them.

## Decisions so far

_(none yet — first session should claim [What is the P0 loop?](docs/wayfinder/p0-loop.md))_

## Not yet specified (fog)

- Exact vendor contracts (Exotel vs Twilio vs MSG91, Interakt, Cloudinary, maps provider).
- How much Admin UI exists for the Field Agent vs a spreadsheet + one privileged API.
- iOS for Users; Worker Android APK sideload vs Play Store.
- Whether User is homeowner-only in P0 or also small contractors.
- Nightly LIVE reset: cron vs timezone vs "calendar day in Asia/Kolkata".
- Aadhaar: collect full number in the field vs last-4 hashed vs a different ID story (legal).
- Deep links, FCM, OTA (`expo-updates`) — only after client surface is decided.
- Payments other than Booking Fee (commission on wage, Worker payouts).

## Open tickets (frontier)

**Frontier (open + unblocked — start here):**

- [What is the P0 loop?](docs/wayfinder/p0-loop.md) — `grilling`

**Blocked (pick up when blockers resolve):**

- [Which client surface ships in P0?](docs/wayfinder/client-surface.md) — blocked by P0 loop
- [Which backend runtime ships in P0?](docs/wayfinder/backend-runtime.md) — blocked by P0 loop
- [How does a Worker go LIVE?](docs/wayfinder/worker-go-live.md) — blocked by P0 loop, client surface, backend runtime
- [How does a Worker get onto the platform?](docs/wayfinder/worker-onboarding.md) — blocked by P0 loop
- [What does a Booking buy?](docs/wayfinder/booking-contract.md) — blocked by P0 loop
- [What is the trust minimum for a first hire?](docs/wayfinder/trust-minimum.md) — blocked by worker onboarding, booking contract

## Out of scope

(Nothing moved here yet. Candidates the source docs already park past the destination: contractor dashboard / B2B SaaS, wage commission, Worker subscriptions, User business plans, wallet + loyalty, micro-loans, NCR expansion. Confirm during [P0 loop](docs/wayfinder/p0-loop.md).)

## Specs (ready-for-agent)

_(empty until `/to-spec` after this map clears)_
