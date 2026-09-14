# How does a Worker go LIVE?

Type: grilling
Status: open
Blocked by: p0-loop, client-surface, backend-runtime

## Question

Going LIVE is the product's distinctive mechanic. The docs describe two different mechanisms:

- **Missed Call** to an Exotel virtual number → webhook → Worker is LIVE; WhatsApp confirm; midnight reset.
- **In-app toggle** `PATCH /workers/me/availability` with GPS, plus the Missed Call as a backup.

For P0: is Missed Call sufficient? Is the app toggle sufficient? Must both work? What happens if the Worker has no smartphone? What happens if Exotel isn't contracted yet — is a fake "Field Agent marks them LIVE" allowed for the first 10 Bookings?

## Notes from source (not answers)

- Product: Missed Call is the whole Worker daily ritual; no Worker App required.
- Frontend: giant LIVE toggle on HomeScreen; Missed Call number shown as secondary; deep link `kaamwala://worker/active`.
- Backend: Exotel webhook + Redis/Mongo `isActive` + 00:00 cron reset.

## Answer

_(empty until grilled)_
