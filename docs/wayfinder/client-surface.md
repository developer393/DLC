# Which client surface ships in P0?

Type: grilling
Status: open
Blocked by: p0-loop

## Question

The source docs do not agree on what the User and the Worker **open**.

Options already on the table (there may be others):

1. **One React PWA** in the browser (product doc) — User hires; Worker may not have an app at all.
2. **Two Expo apps** — Worker App (Hindi-first, Android) + User App (frontend HLD).
3. **Hybrid** — e.g. User PWA + Worker Missed Call only, or User PWA + thin Worker APK.
4. Something smaller: WhatsApp + a Field Agent tablet, no consumer app yet.

Which surface is P0, and which platforms (Android / iOS / browser) are in vs out?

This is a **decision**, not "set up the monorepo". A throwaway `/prototype` is allowed if the question is "will a chowk Worker understand this" — talking may not be enough.

## Notes from source (not answers)

- Product: "Open App — no installation needed" for Users; Workers use any basic phone via Missed Call.
- Frontend HLD: Expo SDK 51, `apps/worker` + `apps/user` + `packages/shared`, EAS builds, Worker APK sideload.
- Worker App philosophy: max 4 screens, Hindi, 56dp targets, offline-tolerant LIVE state.

## Answer

_(empty until grilled)_
