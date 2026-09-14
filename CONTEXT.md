# CONTEXT.md — Domain model for KaamWala (DLC)

Single-context domain doc. Conventions: [`docs/agents/domain.md`](docs/agents/domain.md). The map is [`WAYFINDER.md`](WAYFINDER.md).

Imported drafts live in [`docs/source/`](docs/source/). They **disagree with each other**. Nothing in those files is locked until a Wayfinder ticket says so.

## 1. What KaamWala is

A hyperlocal on-demand marketplace that connects **daily workers** (mistris, plumbers, electricians, carpenters, painters, labour, house help) with **users** (households, later contractors) who need them for a day's work.

The pitch: labour chowk, as a product. Worker marks themselves available in the morning. User finds a nearby verified worker and hires them.

- **Launch:** Noida, Uttar Pradesh.
- **Pilot goal (product doc):** 100 workers + 10 real bookings.
- **GitHub repo:** `DLC` (`developer393/DLC`). Product name in this repo is **KaamWala**.

## 2. What is locked vs what is fog

**Locked enough to talk about (from the product doc, not yet grilled):**

- Two human roles in the marketplace: **Worker** and **User**.
- Availability is daily: a worker is LIVE or not LIVE today; midnight reset is part of the idea.
- Nearby search (about 10 km) by skill.
- A **Booking Fee** (₹30–50) is the Phase 1 money, not a cut of the job wage.
- Job wage itself may stay cash/UPI between User and Worker in P0.
- Hindi-first for workers; low-literacy; missed-call is the "works on a ₹5,000 phone" idea.
- Field-agent registration at labour chowks is the worker-acquisition story.

**Not locked — the three source docs contradict each other:**

| Topic | Product doc | Frontend HLD | Backend HLD |
|-------|-------------|--------------|-------------|
| Client | React PWA, no install | Expo RN: **Worker App** + **User App** | (assumes mobile apps calling `/api/v1`) |
| Backend | Firebase Cloud Functions | (assumes REST) | Express modular monolith on Railway |
| Database | Firestore | — | MongoDB Atlas + Redis |
| Worker go-LIVE | Missed call to Exotel only | In-app toggle **and** missed call | Both: Exotel webhook + `PATCH /me/availability` |

Do **not** pick a stack in a random chat. Those are Wayfinder tickets.

## 3. Glossary

Use these words. Don't drift.

- **Worker** — a daily-wage person who can be hired. Not "labourer", "vendor", or "partner" in tickets or code.
- **User** — the person hiring. Not "customer" or "client" unless we're quoting a vendor API.
- **Field Agent** — ground person who registers Workers at a labour chowk. Not an in-app role until a ticket says so.
- **Admin** — platform operator (register Worker, block, verify). Surface undecided.
- **LIVE** — Worker is available for hire **today**. Synonym in docs: `isActive`. Prefer **LIVE** in speech; keep `isActive` if it lands in a schema later.
- **Missed Call** — Worker dials the KaamWala number and hangs up; system marks them LIVE. Zero cost to Worker.
- **Skill** — hire category: `mistri`, `plumber`, `electrician`, `painter`, `carpenter`, `labour`, `house_help`, `security`, `other`.
- **Booking** — the hire record. What it actually unlocks (phone number vs full job lifecycle) is **not** locked — see [What does a Booking buy?](docs/wayfinder/booking-contract.md).
- **Booking Fee** — ₹30–50 the User pays the platform to confirm a hire. Distinct from the Worker's daily wage.
- **Daily Rate** — Worker's stated wage for a day. Displayed; not necessarily collected by the platform in P0.
- **ID Verified** — badge after Aadhaar-linked registration is accepted. Product doc says full Aadhaar at chowk; backend HLD says store **last 4 only, hashed**. Treat storage rules as fog until grilled.
- **Skill Certified** — optional ITI/NGO certificate badge.
- **Top Worker** — community-rating badge (product: 10+ positive jobs).
- **Chowk** — physical labour stand. Acquisition place, not a product feature.

## 4. Core loop (as the product doc tells it — not a spec)

**Worker**

1. Registered once (Field Agent: name, photo, Aadhaar, skill, area, phone).
2. Each morning: Missed Call → marked LIVE → WhatsApp "aap aaj LIVE hain".
3. Gets hired. Paid by User (cash or UPI). Nightly: everyone not LIVE.

**User**

1. Open the product (install story is fog).
2. Pick Skill → see LIVE Workers nearby (rating, price, badges).
3. Pay Booking Fee → receive Worker name, photo, phone.
4. Coordinate off-platform. After the job: rate.

## 5. Roles the HLDs also assume

Backend HLD adds **Admin** JWT, Worker **Wallet**, **loyalty points**, **Pro/Elite subscriptions**, User **Business/Enterprise** plans, SOS, courses. Product doc parks most of that in Phase 2–4. Default posture: **out of P0 until a ticket promotes it**.

## 6. Third parties named (not contracted)

Exotel (telephony), Interakt (WhatsApp), Razorpay (Booking Fee), Google Maps, MSG91/Twilio (OTP), Cloudinary (photos), FCM (push). Vendor lock-in is a later ticket. Don't sign anyone up during wayfinding unless a `task` ticket says so.

## 7. Operating posture

- **Workflow:** `/wayfinder` → `/to-spec` → `/to-tickets` → `/implement` → `/code-review`. See `AGENTS.md`.
- **This session's job is not to write app code.** Destination first, then one decision at a time.
- Source docs are incomplete on purpose; fog is expected. Say "I don't know" rather than filling gaps with a stack you like.
