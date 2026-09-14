# What is the P0 loop?

Type: grilling
Status: open
Blocked by: none

## Question

The product doc's destination is "100 workers + 10 real bookings" in Noida. That is a metric, not a product loop.

What is the **smallest closed loop** we will call P0 done — the analogue of browse → hire → pay Booking Fee → coordinate → rate — and what do we **refuse** even if the HLD documents describe it?

Grill until these are named:

1. Who must be able to complete the loop without us standing next to them? (Worker only via Field Agent + Missed Call? User on their own phone?)
2. What events must exist for a Booking to count as "real"? (Fee paid? Phone revealed? Job marked done? Rating submitted?)
3. What from the HLD is **explicitly not** in this loop (Wallet, subscriptions, SOS, courses, contractor dashboard, iOS, …)?
4. Does "10 real bookings" allow waived Booking Fees for the first N Users (product GTM says first 20 Users get free fee)?

## Why this ticket is first

Client surface and backend runtime only make sense after we know which humans and which events are in the loop. The three source docs assume different loops (PWA + missed-call-only vs two native apps + toggle + wallet).

## Notes from source (not answers)

- Product: User web app, no install; Worker never opens an app; Missed Call only.
- Frontend HLD: Worker App (4 tabs including Wallet) + User App; in-app LIVE toggle.
- Backend HLD: full job lifecycle `pending → confirmed → active → completed`, wallets, subscriptions.

## Answer

_(empty until this ticket is claimed and grilled)_
