# How does a Worker get onto the platform?

Type: grilling
Status: open
Blocked by: p0-loop

## Question

Who creates the first 100 Worker records, and what data is mandatory?

- Product: Field Agent at the chowk collects name, photo, Aadhaar, skill, area, phone. Worker does not self-serve.
- Backend HLD: `POST /workers/register` is **admin-only**; Worker/User login is phone OTP and may `isNewUser` on first verify — which could create a Worker without a Field Agent.

For P0: is self-serve Worker signup in or out? What is the Admin/Field Agent surface (mobile form, spreadsheet import, admin web)? What identity document do we actually store, given Aadhaar handling is legally sensitive?

## Notes from source (not answers)

- GTM: Sector 12 / 58 / Atta Market chowks; demo Missed Call on the spot; zero commission for 3 months.
- Backend stores Aadhaar **last 4 hashed**, not the full number — contradicts "collect Aadhaar" in the product doc.
- OTP login with `role` in the body could mint Worker accounts by accident.

## Answer

_(empty until grilled)_
