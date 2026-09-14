# Which backend runtime ships in P0?

Type: grilling
Status: open
Blocked by: p0-loop

## Question

The source docs do not agree on where server logic and data live.

Options already on the table:

1. **Firebase** — Cloud Functions + Firestore + Hosting (product doc). Fits a PWA; realtime; free-tier story for the pilot.
2. **Express modular monolith + MongoDB + Redis on Railway** (backend HLD). Fits the `/api/v1` surface the frontend HLD already assumes.
3. **A thinner P0** — e.g. one Node process, one database, no Redis until LIVE lookup is actually hot.

What do we run for the Noida pilot, and what do we **refuse** to operate (second database, cache, extra hosts)?

Do **not** scaffold either stack in this ticket. If a fact is missing (Firebase vs Mongo geo queries, Exotel webhook on Cloud Functions vs Express), spawn `/research` — don't guess.

## Notes from source (not answers)

- Product HLD table: Firebase Functions, Firestore, Firebase Hosting.
- Backend HLD: Node 20, Express, MongoDB Atlas M0, Upstash Redis, JWT+OTP, Railway.
- Frontend HLD Axios `EXPO_PUBLIC_API_URL` + Bearer refresh — assumes a REST API, not direct Firestore from the client.

## Answer

_(empty until grilled)_
