> Product Vision (imported from KaamWala_Product_Document.docx). Draft. Not source of truth.

KAAMWALA
Connecting Daily Workers to Daily Opportunities
Product Vision & Strategy Document
Version 1.0  |  Noida Pilot Launch
"Like Ola/Uber — but for Mistris, Plumbers,
Electricians & Daily Workers"
1. Executive Summary
KaamWala is a hyperlocal on-demand platform that connects daily workers — mistris, plumbers, electricians, carpenters, painters, and other blue-collar workers — with households and contractors who need them. Think of it as Ola/Uber but for the daily labour market.
India has over 500 million daily wage workers. Yet there is no reliable digital platform for them to find work or for users to hire them. Labour chowks remain the only option — inefficient, unreliable, and untrackable. KaamWala solves this gap.
Target Market
Launch City
Phase 1 Goal
Revenue Model
Blue-collar daily workers & households
Noida, Uttar Pradesh
100 workers + 10 real bookings
Booking fee + Commission + B2B SaaS
2. Problem Statement
2.1 The Gap in the Market
India's digital job market is well served at the top — LinkedIn and Naukri.com serve corporate professionals effectively. But the bottom of the pyramid, which represents the majority of India's workforce, has been completely ignored.
Segment
Existing Solution
Gap
Corporate Professionals
LinkedIn, Naukri.com
Well served
Skilled Service Workers (salons, etc)
UrbanClap / Urban Company
Partially served
Daily Workers — Mistri, Labour, etc.
Labour Chowk (physical)
ZERO digital solution
2.2 Pain Points
For Workers:
Must physically stand at labour chowks every morning, wasting time and money on commute
No way to showcase skills, ratings, or work history
Income is unpredictable — no advance notice of available work
No identity or credibility in the market
For Users (Homeowners & Contractors):
No reliable way to find a verified, skilled worker quickly
No ratings or reviews — must trust unknown strangers
Labour chowk workers are unverified and unaccountable
Contractors have no digital tool to manage their daily labour teams
3. The KaamWala Solution
KaamWala operates on a simple, powerful model inspired by ride-hailing apps. Workers mark themselves available each morning via a missed call. Users open the app, see available verified workers nearby, and hire with one tap.
3.1 Core User Flows
Worker Side:
Step
Action
Detail
1
Register Once
Field agent visits labour chowk, collects name, photo, Aadhaar, skill, area, phone number
2
Daily Missed Call
Every morning, worker gives a missed call to KaamWala number — zero cost for worker
3
Marked Active
System auto-detects caller number, marks worker as Active Today in database
4
WhatsApp Confirmation
Worker receives WhatsApp: "Ramesh, aap aaj LIVE hain! Customers aapko dekh sakte hain."
5
Get Hired
User contacts worker directly. Job done. Worker receives payment (cash or UPI)
User (Customer) Side:
Step
Action
Detail
1
Open App
User opens KaamWala web app — no installation needed
2
Select Skill
Choose category: Mistri, Plumber, Electrician, Painter, Carpenter, Labour, etc.
3
See Nearby Workers
App shows active workers within 10km radius with rating, price, skill badge, and ID verification status
4
Pay Booking Fee
User pays Rs. 30-50 booking fee via Razorpay (UPI/card) to confirm the hire
5
Get Worker Details
Worker name, photo, and phone number shared. User coordinates directly.
6
Rate & Review
After job — user rates worker. Builds trust over time.
4. High Level Design (HLD)
4.1 System Architecture Overview
KaamWala follows a three-tier architecture with a mobile-first web frontend, Firebase backend, and third-party integrations for telephony and messaging.
Layer
Technology
Purpose
Frontend
React.js (Progressive Web App)
User & Admin UI — works on any phone browser, no app store needed
Backend / API
Firebase Cloud Functions (Node.js)
Business logic, webhook processing, scheduling
Database
Firebase Firestore (NoSQL)
Workers, users, bookings, ratings — real-time sync
Telephony
Exotel (Virtual Number)
Missed call detection, webhook to backend
WhatsApp Messaging
Interakt API
Worker availability confirmations, booking alerts
Maps & Location
Google Maps API
10km radius worker search, area mapping
Payments
Razorpay
Booking fee collection (UPI, card, wallet)
Hosting
Firebase Hosting
Static web app hosting — free tier sufficient for pilot
4.2 Core Data Models
Worker Document (Firestore):
{ id, name, phone, aadhaarId, skill, subSkills, areaPin, coordinates, photoUrl, isActive, lastActiveDate, rating, totalJobs, dailyRate, isVerified, isCertified, createdAt }
Booking Document (Firestore):
{ id, userId, workerId, skill, bookingFee, status, paymentId, createdAt, completedAt, rating }
User Document (Firestore):
{ id, name, phone, address, coordinates, totalBookings, createdAt }
4.3 Missed Call System — Detailed Flow
#
System Component
Action
1
Worker Phone
Worker dials KaamWala Exotel number (0120-XXXXXXX) and disconnects
2
Exotel Server
Detects missed call (status: no-answer), sends HTTP POST webhook with caller number
3
Firebase Function
Receives webhook at /missed-call endpoint, extracts phone number from payload
4
Firestore DB
Queries workers collection by phone number to verify worker is registered
5
Firestore DB
Updates worker: isActive = true, lastActiveDate = today
6
Interakt API
Sends WhatsApp message to worker confirming they are now live and visible
7
Scheduled Function
Every night at 12:00 AM, resets all workers isActive = false for the next day
5. Trust & Verification Framework
Trust is the most critical element for adoption. Users need confidence before letting a stranger into their home. KaamWala uses a 3-layer trust model:
Layer
What It Is
How It Works
Badge Shown
Layer 1
Aadhaar ID Collection
Aadhaar number collected at registration by field agent — creates accountability
ID Verified
Layer 2
Skill Certification
ITI certificate or NGO skill training completion — optional but premium tier
Skill Certified
Layer 3
Community Rating
Simple thumbs up/down after every job. 10+ positive jobs earns Top Worker badge
Top Worker
Additionally, when a booking is confirmed, the user receives the worker's name, photo, and Aadhaar-linked ID reference — making every worker fully traceable and accountable.
6. Business Model & Monetization
KaamWala uses a layered monetization strategy that starts simple and scales as the platform grows.
Phase
Revenue Stream
Model
Amount
Target
Phase 1
Booking Fee
Fixed fee per booking from user
Rs. 30-50/booking
All users
Phase 2
Commission
10-15% cut from digital payments
10-15%
Digital pay users
Phase 2
Worker Subscription
Premium listing / priority placement
Rs. 299-499/mo
High-demand workers
Phase 3
B2B SaaS — Contractor Dashboard
Monthly subscription for contractors
Rs. 999-2999/mo
Construction firms
Phase 4
Financial Products
Daily income insurance, micro loans
Commission based
Registered workers
6.1 Unit Economics (Phase 1 Estimate — Noida)
Metric
Estimate
Active workers (Month 1)
100 workers
Daily active workers (30%)
~30 per day
Bookings per day
5-10 bookings
Revenue per booking (fee)
Rs. 40 average
Monthly revenue (conservative)
Rs. 6,000 - 12,000
Monthly Exotel cost (200 calls/day)
~Rs. 1,500
Monthly WhatsApp / SMS cost
~Rs. 500
7. Construction Labour Management Module
Beyond individual hiring, KaamWala's biggest long-term opportunity is becoming the operating system for construction labour management. Contractors managing 20-100 workers daily have zero digital tools.
7.1 Contractor Dashboard Features
Daily digital attendance tracking for entire labour team
Site-wise worker assignment — assign workers to specific project sites
Daily wage release via UPI — replace cash payment with digital trail
Work history and performance per worker over time
Skill-based search to fill open positions on a project
Bulk hiring — request 10 mistris for Monday, system auto-matches available workers
7.2 Why This is a Massive Opportunity
Every construction project in India — from a single house renovation to a large housing society — needs to manage daily labour. The market size is enormous and entirely undigitized. By owning this workflow, KaamWala becomes indispensable to the construction industry, not just a consumer app.
This B2B module is the path from a hyperlocal app to a scalable, fundable business.
8. Go-To-Market Strategy
8.1 Phase-Wise Rollout
Phase
Timeline
Goal
Key Activities
Phase 1
Month 1-3
Noida pilot — 100 workers, 10 real bookings
Build app, onboard workers at labour chowks, get first bookings
Phase 2
Month 3-6
Expand skill categories, 500 workers, 100 bookings/month
Add plumber, electrician, painter, carpenter, house help categories
Phase 3
Month 6-12
B2B launch — 10 contractor clients
Approach construction firms, real estate developers in Noida/Delhi NCR
Phase 4
Year 2
Expand to Greater NCR, raise seed funding
Use Noida metrics as proof, pitch investors, expand to Ghaziabad, Gurugram
8.2 Worker Acquisition Strategy
Ground team visits labour chowks in Noida (Sector 12, Sector 58, Atta Market)
Physically register workers — fill form, take photo, collect Aadhaar number
Explain missed call system in Hindi — demo on the spot
Incentivize early workers: first 3 months, platform takes zero commission
Partner with ITI centres and NGOs working with daily workers
8.3 User (Customer) Acquisition Strategy
WhatsApp groups in Noida housing societies — share app link
Resident Welfare Associations (RWAs) — present KaamWala as a trusted solution
Word of mouth — first 20 users get free booking fee
Facebook and Instagram hyperlocal ads targeting Noida homeowners
9. Technology Roadmap
9.1 Phase 1 — MVP (2 Months, Under Rs. 50,000)
Week
Feature
Tech
Cost
1-2
Worker registration + Firebase setup
React + Firestore
Rs. 0
3-4
User side — browse workers by area and skill
React + Google Maps API
Rs. 0 (free tier)
5
Missed call system integration
Exotel + Firebase Functions
Rs. 2,000 setup
6
Booking fee payment
Razorpay
Rs. 0 + 2% txn fee
7
Admin panel (bookings, workers, ratings)
React + Firestore
Rs. 0
8
Testing, bug fixes, Noida launch
All systems
Rs. 0
TOTAL
Full MVP ready to test in Noida
Rs. 2,000-5,000
10. Key Risks & Mitigation
Risk
Description
Mitigation
Cold Start Problem
App is useless without workers, workers won't join without bookings
Start with one locality only. Manually onboard 100 workers before launch. Create artificial supply first.
Worker Loyalty
Workers take clients number and bypass platform in future
Build loyalty through ratings, badges, insurance products, and consistent work supply — make platform more valuable than direct contact
Low Literacy Barrier
Workers cannot use smartphones or apps
Missed call system works on any basic phone. WhatsApp already used by most workers. Registration done by field agent.
Payment Friction
Workers prefer cash, creating tracking difficulties
Booking fee model removes need to track final payment. Cash allowed for worker-user settlement. Gradually introduce digital.
Competition
Urban Company or large player could enter this segment
Hyperlocal depth, Hindi-first experience, and ground relationships create strong moat. Move fast, build loyalty network.
11. Long-Term Vision
KaamWala's vision is to become the infrastructure layer for India's 500 million daily wage workers — not just a marketplace but a complete digital identity and work management system for the informal economy.
Milestone
What It Means
Year 1 — Noida Proven
1,000 workers, 500 bookings/month, 10 contractor clients — clear product-market fit
Year 2 — NCR Scale
Delhi, Gurgaon, Ghaziabad expansion. Seed funding raised. 10,000 workers on platform.
Year 3 — National Play
Top 10 Indian cities. B2B SaaS revenue dominant. Financial products launched for workers.
Year 5 — Category Leader
The definitive platform for India's blue-collar workforce. Every daily worker has a KaamWala digital identity.
KaamWala
Every worker deserves a digital identity. Every user deserves a reliable worker.
Confidential — For Discussion Purposes Only
