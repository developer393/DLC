# What does a Booking buy?

Type: grilling
Status: open
Blocked by: p0-loop

## Question

After the User says hire, what has actually happened?

Product doc: pay Booking Fee → **Worker name, photo, and phone are revealed**; User coordinates directly; wage is cash/UPI off-platform.

Backend HLD: `pending` (Razorpay order) → `confirmed` (phone revealed) → `active` → `completed` / `cancelled` / `disputed`; cancel-within-1-hour refund; both parties can mark complete.

Grill until P0 answers:

1. Is the Booking Fee required for the first 10 "real" Bookings, or waived (GTM: first 20 Users free fee)?
2. Does P0 include job-started / completed / cancelled / disputed, or only "fee paid, number unlocked"?
3. Does the platform ever touch the Daily Rate, or only the Booking Fee?
4. When is the Worker's phone visible — never before payment, or also on the public profile (backend says public profile **never** returns phone)?

## Answer

_(empty until grilled)_
