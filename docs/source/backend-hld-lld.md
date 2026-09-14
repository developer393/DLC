> Backend HLD/LLD (imported from KaamWala_Backend_HLD_LLD.docx). Draft. Contradicts product.md on Firebase vs Express/Mongo.

KAAMWALA
Backend Architecture Document
High Level Design (HLD)  +  Low Level Design (LLD)
v1.0
Document version
Node.js
Backend runtime
MongoDB
Primary database
Redis
Cache layer
1. Document Purpose & Scope
This document is the definitive technical reference for building the KaamWala backend. It covers High Level Design (HLD) — system architecture, component responsibilities, and service interactions — and Low Level Design (LLD) — MongoDB collection schemas, all field definitions, API endpoint specifications, security implementation, and extension points.
Audience
This document is written for the backend developer. It is intended to be self-sufficient — a developer should be able to read this document and begin writing production code without further clarification on architecture decisions.
1.1 Technology Stack
Layer
Technology
Reason
Runtime
Node.js 20 LTS
Async I/O perfect for real-time availability updates; Firebase Functions compatibility
Framework
Express.js 4.x
Minimal, well-understood, easy to add middleware layers for auth and rate limiting
Primary DB
MongoDB Atlas (M0 free)
Native geospatial queries for 10km radius search; document model fits worker profiles naturally
Cache
Redis — Upstash free tier
Sub-millisecond reads for isActive status; 10K commands/day free covers pilot phase
ORM/ODM
Mongoose 8.x
Schema validation, middleware hooks, virtuals, and population for MongoDB
Auth
JWT + bcrypt
Stateless auth with access + refresh token pattern; bcrypt for admin passwords
OTP
Twilio SMS / MSG91
Phone-based OTP for worker and user login — no email required
Payments
Razorpay SDK
Best UPI support in India; webhook-based payment confirmation; subscription billing built in
WhatsApp
Interakt REST API
Hindi template messages; cheapest WhatsApp Business API provider in India
Telephony
Exotel REST API
Virtual number for missed calls; webhook on incoming call; ~₹0.10/call
Maps
Google Maps Geocoding API
Convert area name to coordinates at registration; free up to 40K requests/month
Validation
Joi / Zod
Request body validation before any database operation — prevents invalid data at API boundary
Logging
Winston + Morgan
Structured JSON logs; HTTP access logs; log levels (error, warn, info, debug)
Hosting
Railway (free tier)
Zero-config Node.js hosting; auto-deploys from GitHub; free for pilot phase
2. High Level Design (HLD)
2.1 Architecture Pattern — Modular Monolith
KaamWala uses a Modular Monolith architecture. The codebase is one Node.js application deployed as a single unit, but internally divided into independent modules (auth, workers, bookings, payments, notifications, location, wallet, ratings). Each module owns its routes, controller, service, and repository layer.
Why Not Microservices?
Microservices add deployment complexity, network latency between services, and distributed transaction challenges — problems that only appear at significant scale. KaamWala Phase 1 needs speed of development, not distributed systems overhead. The modular structure makes future extraction into microservices straightforward when genuinely needed.
2.2 Project Folder Structure
kaamwala-backend/
├── src/
│   ├── modules/
│   │   ├── auth/           # OTP login, JWT issue/refresh
│   │   ├── workers/        # Profile, availability, location
│   │   ├── users/          # User profile, booking history
│   │   ├── bookings/       # Hire flow, status management
│   │   ├── payments/       # Razorpay integration
│   │   ├── notifications/  # WhatsApp, push, SMS
│   │   ├── location/       # Geo search, radius queries
│   │   ├── wallet/         # Balance, points, vouchers
│   │   ├── ratings/        # Reviews, score calculation
│   │   ├── subscriptions/  # Plans, billing cycles
│   │   └── admin/          # Admin-only operations
│   ├── middleware/
│   │   ├── auth.js         # JWT verification middleware
│   │   ├── rateLimiter.js  # Per-IP and per-user rate limits
│   │   ├── validate.js     # Joi schema validation wrapper
│   │   ├── errorHandler.js # Global error handler
│   │   └── logger.js       # Request logging (Morgan)
│   ├── config/
│   │   ├── db.js           # MongoDB connection
│   │   ├── redis.js        # Upstash Redis client
│   │   └── env.js          # Environment variable validation
│   ├── utils/
│   │   ├── otp.js          # OTP generation and verification
│   │   ├── jwt.js          # Token creation and verification
│   │   ├── geo.js          # Haversine / geo utilities
│   │   └── response.js     # Standardised API response format
│   └── app.js              # Express app setup
├── tests/                  # Jest unit + integration tests
├── .env.example            # All required env vars documented
└── server.js               # Entry point
2.3 Module Structure (Each Module Follows This Pattern)
modules/workers/
├── worker.routes.js        # Express router — defines all endpoints
├── worker.controller.js    # Request/response handling — no business logic
├── worker.service.js       # Business logic — calls repository
├── worker.repository.js    # Database queries — only layer that touches MongoDB
├── worker.model.js         # Mongoose schema definition
└── worker.validator.js     # Joi schemas for request validation
Layered Architecture Rule
Controllers never touch the database directly. Services never build HTTP responses. Repositories never contain business logic. This separation makes each layer independently testable and replaceable.
3. Security Architecture
Security is implemented in layers. No single mechanism is trusted alone. Every API request passes through multiple security checks before reaching business logic.
3.1 Authentication Flow
Worker / User Login (Phone OTP):
Step
Action
Detail
1
POST /auth/send-otp
Client sends phone number. Server validates format. Generates 6-digit OTP. Stores OTP in Redis with 5-minute TTL. Sends via MSG91/Twilio SMS.
2
POST /auth/verify-otp
Client sends phone + OTP. Server fetches OTP from Redis. Checks match and TTL. On success: deletes OTP from Redis (one-time use). Issues access token (15min) + refresh token (30 days).
3
Bearer token on all requests
Every protected route checks Authorization: Bearer <accessToken> header. JWT verified with secret. Payload contains: userId, role (worker/user/admin), phone.
4
POST /auth/refresh
Client sends refresh token (stored in httpOnly cookie). Server validates. Issues new access token. Refresh token rotation — old one invalidated in Redis blacklist.
5
POST /auth/logout
Refresh token added to Redis blacklist. Client deletes access token. Access token has short TTL so blacklisting refresh token is sufficient.
3.2 Security Middleware Stack
Middleware
Library
Configuration
CORS
cors npm
Whitelist: kaamwala.in, admin.kaamwala.in, localhost:3000 (dev only). Block all other origins.
Helmet
helmet npm
Sets 11 security headers: X-Frame-Options, X-Content-Type-Options, CSP, HSTS, etc.
Rate Limiting
express-rate-limit
Global: 100 req/15min per IP. Auth endpoints: 5 OTP requests/hour per phone number. Booking: 20 req/min per user.
Input Sanitisation
express-mongo-sanitize
Strips $ and . from user input to prevent MongoDB operator injection attacks.
XSS Protection
xss-clean npm
Sanitises all request body strings against XSS payloads before they reach controllers.
Body Size Limit
Express built-in
express.json({ limit: "10kb" }) — prevents payload flooding attacks.
HPP
hpp npm
Prevents HTTP Parameter Pollution — removes duplicate query string parameters.
Webhook Signature
Custom
Razorpay and Exotel webhooks verified using HMAC-SHA256 signature before processing.
3.3 Role-Based Access Control (RBAC)
Three roles exist in the system: worker, user, and admin. Each role has a distinct permission set enforced at the middleware layer before any controller executes.
Endpoint Group
Worker
User
Admin
Notes
Auth endpoints
Public
Public
Public
No token required for OTP send/verify
Worker profile (own)
Read/Write
Read only
Full
User sees public fields only; worker edits own profile
Availability toggle
Only own
Denied
Override
Only the worker can toggle their own status
Browse workers
Denied
Allowed
Full
Workers cannot browse other workers
Create booking
Denied
Allowed
Override
Only users initiate bookings
Wallet operations
Own only
Denied
Full
Wallet is worker-side feature only
Admin dashboard
Denied
Denied
Full
Separate JWT secret for admin tokens
Webhooks (Exotel/Razorpay)
N/A
N/A
Signature only
HMAC signature check replaces JWT for webhooks
4. Database Schema — MongoDB Collections
All collections reside in MongoDB Atlas. Every document includes _id (ObjectId, auto-generated), createdAt, and updatedAt (managed by Mongoose timestamps: true). Fields marked [INDEX] have a MongoDB index. Fields marked [UNIQUE] have a unique index. Fields marked [GEO] use a 2dsphere index for geospatial queries.
4.1 Collection: workers
Field
Type
Required
Description
_id
ObjectId
Auto
Primary key — auto-generated by MongoDB
phone
String
Yes
[UNIQUE][INDEX] Mobile number with country code (+91XXXXXXXXXX). Used for OTP login and missed call matching.
name
String
Yes
Full name of the worker. Max 100 chars.
aadhaarId
String
Yes
[UNIQUE] Last 4 digits stored only — never store full Aadhaar number. Hashed with bcrypt before storage.
photoUrl
String
No
Cloudinary/S3 URL for worker profile photo. Uploaded by field agent at registration.
primarySkill
String
Yes
[INDEX] Enum: mistri | plumber | electrician | painter | carpenter | labour | house_help | security | other
subSkills
String[]
No
Array of secondary skills. E.g. ["tile_fixing","plastering","waterproofing"]. Max 10 items.
location
GeoJSON
Yes
[GEO][INDEX] { type: "Point", coordinates: [longitude, latitude] }. Updated on every missed call / app toggle.
homeArea
String
Yes
Human-readable area name. E.g. "Sector 62, Noida". For display only.
isActive
Boolean
Yes
[INDEX] True = available for hire today. Set by missed call webhook or in-app toggle. Reset to false at midnight by cron job.
lastActiveAt
Date
No
Timestamp of last missed call or toggle-on. Used for cron reset and activity analytics.
dailyRate
Number
Yes
Worker's standard daily rate in INR. Editable by worker. Displayed on profile.
rating
Number
No
Calculated field. Average of all ratingScore values in ratings collection. Updated after each booking. Default 0.
ratingCount
Number
No
Total number of ratings received. Incremented on each completed booking with rating.
totalJobs
Number
No
Lifetime count of completed bookings. Incremented when booking status = completed.
isIdVerified
Boolean
No
True when admin marks Aadhaar as verified. Shows "ID Verified" badge on profile.
isCertified
Boolean
No
True when ITI/NGO certificate uploaded and approved by admin. Shows "Skill Certified" badge.
certificationUrl
String
No
URL of uploaded certification document. Set when isCertified = true.
subscriptionPlan
String
No
Enum: free | pro | elite. Default: free. Updated by subscription webhook from Razorpay.
subscriptionExpiry
Date
No
Expiry date of active subscription. Job to check this nightly and downgrade if expired.
walletBalance
Number
No
Current wallet balance in INR. Always updated atomically with $inc to prevent race conditions.
loyaltyPoints
Number
No
Accumulated loyalty points. 1 point per completed booking by default. Pro = 1.5x, Elite = 2x.
referralCode
String
No
[UNIQUE] Auto-generated 6-char alphanumeric code. Worker shares this to earn referral bonuses.
referredBy
ObjectId
No
Reference to workers._id of the worker who referred this worker. Null if organic registration.
fcmToken
String
No
Firebase Cloud Messaging token for push notifications. Updated on each app login.
isBlocked
Boolean
No
Admin-set flag. Blocked workers cannot log in or appear in search results. Default false.
blockReason
String
No
Free text reason recorded when isBlocked = true. Visible to admin only.
strikeCount
Number
No
Number of confirmed complaints against worker. Auto-block at 3 strikes.
createdAt
Date
Auto
Mongoose timestamps. Set on document creation.
updatedAt
Date
Auto
Mongoose timestamps. Updated on every save.
Indexes to Create on workers
db.workers.createIndex({ phone: 1 }, { unique: true }) | db.workers.createIndex({ location: "2dsphere" }) | db.workers.createIndex({ isActive: 1, primarySkill: 1 }) | db.workers.createIndex({ referralCode: 1 }, { unique: true })
4.2 Collection: users
Field
Type
Required
Description
_id
ObjectId
Auto
Primary key
phone
String
Yes
[UNIQUE][INDEX] Mobile number with country code.
name
String
Yes
Full name. Max 100 chars.
location
GeoJSON
No
[GEO] User's current or saved location for nearby worker search. Updated when user opens app.
savedAddress
String
No
Human-readable saved address string. e.g. "A-204, Mahagun Moderne, Sector 78, Noida".
savedWorkers
ObjectId[]
No
Array of workers._id. Workers bookmarked by this user for quick re-hire.
subscriptionPlan
String
No
Enum: free | business | enterprise. Default: free.
subscriptionExpiry
Date
No
Expiry of active subscription.
totalBookings
Number
No
Lifetime count of bookings made. Incremented on booking creation.
fcmToken
String
No
Firebase push token. Updated on login.
isBlocked
Boolean
No
Admin block flag. Blocked users cannot create bookings. Default false.
4.3 Collection: bookings
Field
Type
Required
Description
_id
ObjectId
Auto
Primary key
userId
ObjectId
Yes
[INDEX] Reference to users._id. The user who initiated the booking.
workerId
ObjectId
Yes
[INDEX] Reference to workers._id. The hired worker.
skill
String
Yes
Skill category at time of booking. Snapshot — does not change if worker updates profile.
status
String
Yes
[INDEX] Enum: pending | confirmed | active | completed | cancelled | disputed. Default: pending.
bookingFee
Number
Yes
Amount in INR collected from user at booking. Typically 30–50.
bookingFeeWaived
Boolean
No
True for Business/Enterprise subscribers — booking fee not charged.
paymentId
String
No
Razorpay payment_id. Stored for refund capability and reconciliation.
paymentOrderId
String
No
Razorpay order_id. Created before payment, verified in webhook.
workerRating
Number
No
1–5 integer. Set by user after job completion.
workerReview
String
No
Free text review from user. Max 500 chars. Stored in ratings collection also.
jobStartedAt
Date
No
Timestamp when worker marks themselves as arrived/started. Optional feature.
completedAt
Date
No
Timestamp when status transitions to completed.
cancellationReason
String
No
Free text reason when status = cancelled.
cancelledBy
String
No
Enum: user | worker | admin. Who initiated cancellation.
workerLocationAtBooking
GeoJSON
No
Snapshot of worker location when booking was made. For audit.
4.4 Collection: ratings
Field
Type
Required
Description
_id
ObjectId
Auto
Primary key
bookingId
ObjectId
Yes
[UNIQUE] One rating per booking. Prevents duplicate ratings.
workerId
ObjectId
Yes
[INDEX] Denormalised for fast worker profile lookups.
userId
ObjectId
Yes
Who gave the rating.
ratingScore
Number
Yes
Integer 1–5. Used to recalculate workers.rating after each new submission.
skillScore
Number
No
Sub-score for skill quality. 1–5.
punctualityScore
Number
No
Sub-score for on-time arrival. 1–5.
behaviourScore
Number
No
Sub-score for professionalism and behaviour. 1–5.
review
String
No
Free text review. Max 500 chars. Displayed on worker profile.
isVisible
Boolean
No
Admin can hide abusive reviews. Default true.
4.5 Collection: subscriptions
Field
Type
Required
Description
_id
ObjectId
Auto
Primary key
subscriberId
ObjectId
Yes
[INDEX] Reference to workers._id or users._id depending on subscriberType.
subscriberType
String
Yes
Enum: worker | user. Determines which collection subscriberId references.
plan
String
Yes
Enum: pro | elite | business | enterprise.
status
String
Yes
Enum: active | paused | cancelled | expired. Razorpay webhook updates this.
amount
Number
Yes
Amount charged in INR per billing cycle.
billingCycle
String
Yes
Enum: monthly | annual.
razorpaySubId
String
No
Razorpay subscription_id. Used to pause/cancel via Razorpay API.
currentPeriodStart
Date
No
Start of current billing period. Set by Razorpay webhook.
currentPeriodEnd
Date
No
End of current billing period = subscriptionExpiry on worker/user document.
autoRenew
Boolean
No
Whether Razorpay should auto-charge next cycle. Default true. User can disable.
4.6 Collection: wallet_transactions
Field
Type
Required
Description
_id
ObjectId
Auto
Primary key
workerId
ObjectId
Yes
[INDEX] Reference to workers._id.
type
String
Yes
Enum: credit | debit. Direction of transaction.
amount
Number
Yes
Amount in INR. Always positive regardless of type.
reason
String
Yes
Enum: referral_bonus | booking_cashback | loyalty_redemption | subscription_payment | upi_withdrawal | admin_credit
referenceId
String
No
bookingId or subscriptionId that triggered this transaction. For traceability.
balanceAfter
Number
Yes
Worker wallet balance after this transaction. Audit trail.
4.7 Collection: notifications
Field
Type
Required
Description
_id
ObjectId
Auto
Primary key
recipientId
ObjectId
Yes
[INDEX] workers._id or users._id.
recipientType
String
Yes
Enum: worker | user
channel
String
Yes
Enum: whatsapp | push | sms
templateId
String
Yes
Interakt template name or FCM notification type. For audit and replay.
status
String
Yes
Enum: sent | delivered | failed
payload
Object
No
Template variables used. Stored for debugging failed notifications.
error
String
No
Error message if status = failed. For retry logic.
5. API Endpoint Specifications (LLD)
All endpoints are prefixed with /api/v1. All responses follow the standard format: { success: Boolean, data: Object|Array, message: String, error: String|null }. All dates are ISO 8601. All amounts are in INR paise (multiply by 100 for Razorpay).
API Versioning
The /v1 prefix allows non-breaking additions in future. When breaking changes are needed, /v2 is created. Both versions run simultaneously during a migration window.
5.1 Auth Module — /api/v1/auth
Method
Endpoint
Auth Required
Description
POST
/send-otp
None
Body: { phone, role }. Generates OTP, stores in Redis (TTL 5min), sends SMS. Rate limited: 5/hour per phone.
POST
/verify-otp
None
Body: { phone, otp, role }. Returns: { accessToken, refreshToken, isNewUser }. Creates user/worker if first login.
POST
/refresh
Refresh cookie
Rotates refresh token. Returns new accessToken. Old refresh token blacklisted in Redis.
POST
/logout
Bearer
Blacklists refresh token. Clears httpOnly cookie.
5.2 Workers Module — /api/v1/workers
Method
Endpoint
Role
Description
GET
/nearby
user
Query: { lat, lng, skill?, radius=10000, limit=20, page=1 }. Uses MongoDB $near. Returns active workers sorted by distance with subscription-based ordering (Elite > Pro > Free).
GET
/:workerId/profile
user | admin
Public profile. Returns name, photo, skill, rating, totalJobs, reviews (last 5), dailyRate, badges. Never returns phone, aadhaarId, walletBalance.
GET
/me
worker
Full own profile including phone, wallet, points, subscription, strikeCount. For worker app home screen.
PATCH
/me
worker
Update own profile. Allowed fields: name, dailyRate, subSkills, fcmToken. Does NOT allow changing phone, aadhaarId, isBlocked.
PATCH
/me/availability
worker
Body: { isActive: Boolean, location?: { lat, lng } }. Updates Mongo + Redis. Triggers WhatsApp confirmation if isActive = true.
POST
/register
admin
Field agent registers worker. Body: { name, phone, aadhaarLastFour, primarySkill, homeArea, dailyRate }. Sends welcome WhatsApp.
5.3 Bookings Module — /api/v1/bookings
Method
Endpoint
Role
Description
POST
/create
user
Body: { workerId, skill }. Creates Razorpay order for booking fee. Returns { bookingId, razorpayOrderId, amount }. Booking status = pending.
POST
/confirm-payment
user
Body: { bookingId, razorpayPaymentId, razorpaySignature }. Verifies Razorpay signature. Sets status = confirmed. Reveals worker phone. Sends notifications to both parties.
PATCH
/:id/complete
user | worker
Marks booking as completed. Sets completedAt. Triggers post-job rating prompt to user. Adds loyalty points to worker.
PATCH
/:id/cancel
user | worker | admin
Body: { reason }. Sets status = cancelled. Records cancelledBy. Initiates refund if payment was made and cancelled within 1 hour.
GET
/my
user | worker
Query: { status?, page, limit }. Returns own booking history. User sees bookings they created. Worker sees bookings they received.
GET
/:id
user | worker | admin
Full booking detail. Validates that requester is the user, worker, or admin for this booking.
5.4 Payments & Webhooks — /api/v1/payments
Method
Endpoint
Auth
Description
POST
/webhook/razorpay
Signature
Razorpay event handler. Processes: payment.captured, subscription.charged, subscription.cancelled, refund.processed. HMAC-SHA256 signature verified before any processing.
POST
/webhook/exotel
Signature
Exotel missed call handler. Extracts CallFrom number. Looks up worker. Sets isActive=true in Redis and MongoDB. Sends WhatsApp confirmation.
POST
/subscription/create
Bearer
Body: { plan, billingCycle }. Creates Razorpay subscription. Returns hosted checkout URL. Available to workers (pro/elite) and users (business/enterprise).
POST
/subscription/cancel
Bearer
Cancels active Razorpay subscription. Sets status = cancelled. Plan reverts to free at period end.
6. Missed Call System — Complete Implementation
The missed call system is the core technical innovation. This section documents the exact code flow required to implement it correctly.
6.1 Exotel Webhook Handler — worker.routes.js
// POST /api/v1/payments/webhook/exotel
router.post("/webhook/exotel", verifyExotelSignature, missedCallHandler);
6.2 Signature Verification Middleware
// middleware/verifyExotelSignature.js
const crypto = require("crypto");
function verifyExotelSignature(req, res, next) {
const signature = req.headers["x-exotel-signature"];
const body = JSON.stringify(req.body);
const expected = crypto
.createHmac("sha256", process.env.EXOTEL_API_SECRET)
.update(body)
.digest("hex");
if (signature !== expected) {
return res.status(401).json({ success: false, message: "Invalid signature" });
}
next();
}
6.3 Missed Call Handler — payment.controller.js
async function missedCallHandler(req, res) {
const { CallFrom, Status } = req.body;
if (Status !== "no-answer") return res.sendStatus(200);
const phone = normalisePhone(CallFrom); // ensure +91XXXXXXXXXX format
// 1. Find worker
const worker = await Worker.findOne({ phone, isBlocked: false });
if (!worker) return res.sendStatus(200); // unregistered number — ignore
// 2. Get current GPS from Redis (set by app on last open)
const cachedLocation = await redis.get(`location:${worker._id}`);
const location = cachedLocation ? JSON.parse(cachedLocation) : worker.location;
// 3. Update Redis first (fast read path for /nearby queries)
await redis.setex(`active:${worker._id}`, 86400, "1");
// 4. Update MongoDB async (do not block webhook response)
Worker.findByIdAndUpdate(worker._id, {
isActive: true,
lastActiveAt: new Date(),
location: location
}).catch(err => logger.error("Mongo update failed", err));
// 5. Send WhatsApp confirmation
notificationService.sendWhatsApp(phone, "worker_active_confirm", {
name: worker.name.split(" ")[0]
});
return res.sendStatus(200); // Always 200 to Exotel
}
6.4 Midnight Reset Cron Job
// cron/resetWorkers.js — runs at 00:01 every day
const cron = require("node-cron");
cron.schedule("1 0 * * *", async () => {
logger.info("Running midnight worker reset");
// Clear Redis active keys
const keys = await redis.keys("active:*");
if (keys.length > 0) await redis.del(...keys);
// Update MongoDB in bulk
await Worker.updateMany(
{ isActive: true },
{ $set: { isActive: false } }
);
logger.info(`Reset complete. ${keys.length} workers deactivated.`);
});
7. Geospatial Search — Nearby Workers
MongoDB's native 2dsphere index powers the 10km worker search. This section documents the exact query, subscription-based sort logic, and Redis cache layer.
7.1 The Core Geo Query
// location.service.js
async function getNearbyWorkers({ lat, lng, skill, radius = 10000, limit = 20, page = 1 }) {
const skip = (page - 1) * limit;
// Step 1: Get active worker IDs from Redis (fast)
const activeKeys = await redis.keys("active:*");
const activeIds = activeKeys.map(k => k.replace("active:", ""));
// Step 2: MongoDB geo query filtered to active workers
const filter = {
_id: { $in: activeIds },
isBlocked: false,
location: {
$near: {
$geometry: { type: "Point", coordinates: [lng, lat] },
$maxDistance: radius
}
}
};
if (skill) filter.primarySkill = skill;
// Step 3: Fetch with subscription-aware sort
// $near already sorts by distance; we use aggregation for plan priority
const workers = await Worker.aggregate([
{ $geoNear: { near: { type:"Point", coordinates:[lng,lat] },
distanceField: "distance", maxDistance: radius,
query: filter, spherical: true } },
{ $addFields: {
planRank: { $switch: { branches: [
{ case: { $eq:["$subscriptionPlan","elite"] }, then: 3 },
{ case: { $eq:["$subscriptionPlan","pro"] },   then: 2 },
], default: 1 } }
}},
{ $sort: { planRank: -1, distance: 1 } },
{ $skip: skip }, { $limit: limit },
{ $project: { name:1, primarySkill:1, subSkills:1, rating:1, ratingCount:1,
totalJobs:1, dailyRate:1, photoUrl:1, isIdVerified:1,
isCertified:1, subscriptionPlan:1, distance:1 } }
]);
return workers;
}
8. Standard API Response Format
All API responses use this exact format. Frontend developers can rely on this structure for every endpoint.
8.1 Success Response
{
"success": true,
"message": "Workers fetched successfully",
"data": { ... },           // object or array
"pagination": {            // only on list endpoints
"page": 1,
"limit": 20,
"total": 84,
"hasMore": true
}
}
8.2 Error Response
{
"success": false,
"message": "Worker not found",
"error": "NOT_FOUND",      // machine-readable error code
"details": [...]           // Joi validation errors array (on 400 only)
}
8.3 Standard HTTP Status Codes Used
Code
Meaning
When Used
200
OK
Successful GET, PATCH, DELETE
201
Created
Successful POST that creates a new resource
400
Bad Request
Validation error — Joi schema failed
401
Unauthorized
Missing or invalid JWT token
403
Forbidden
Valid token but insufficient role/permission
404
Not Found
Resource does not exist or is not accessible to this user
409
Conflict
Duplicate unique field (phone already registered, booking already rated)
429
Too Many Requests
Rate limit exceeded
500
Internal Server Error
Unhandled exception — logged via Winston; generic message returned to client
9. Environment Variables (.env.example)
Every environment variable must be documented. Never commit .env to git. Use Railway's environment variable panel for production values.
# ── App ──────────────────────────────────────────────────────
NODE_ENV=development          # development | production
PORT=5000
API_BASE_URL=https://api.kaamwala.in
# ── MongoDB Atlas ────────────────────────────────────────────
MONGODB_URI=mongodb+srv://<user>:<password>@cluster0.mongodb.net/kaamwala
# ── Redis (Upstash) ──────────────────────────────────────────
REDIS_URL=rediss://default:<token>@<region>.upstash.io:6379
# ── JWT ──────────────────────────────────────────────────────
JWT_ACCESS_SECRET=<64-char-random-hex>
JWT_REFRESH_SECRET=<64-char-random-hex>
JWT_ADMIN_SECRET=<64-char-random-hex>
JWT_ACCESS_TTL=15m
JWT_REFRESH_TTL=30d
# ── OTP (MSG91) ──────────────────────────────────────────────
MSG91_AUTH_KEY=<your-key>
MSG91_TEMPLATE_ID=<otp-template-id>
# ── Razorpay ─────────────────────────────────────────────────
RAZORPAY_KEY_ID=rzp_live_XXXXXXXXXXXXXXXX
RAZORPAY_KEY_SECRET=<secret>
RAZORPAY_WEBHOOK_SECRET=<webhook-secret>
# ── Exotel ───────────────────────────────────────────────────
EXOTEL_API_KEY=<key>
EXOTEL_API_SECRET=<secret>
EXOTEL_VIRTUAL_NUMBER=0120XXXXXXX
# ── Interakt (WhatsApp) ──────────────────────────────────────
INTERAKT_API_KEY=<base64-key>
# ── Google Maps ──────────────────────────────────────────────
GOOGLE_MAPS_API_KEY=<key>
# ── Cloudinary (photo uploads) ───────────────────────────────
CLOUDINARY_CLOUD_NAME=kaamwala
CLOUDINARY_API_KEY=<key>
CLOUDINARY_API_SECRET=<secret>
# ── Admin ────────────────────────────────────────────────────
ADMIN_DEFAULT_EMAIL=admin@kaamwala.in
ADMIN_DEFAULT_PASSWORD=<strong-password>  # change on first login
10. Future Extension Points
The architecture is designed so that future features can be added without modifying existing modules. This section documents where each major future feature plugs in.
Future Feature
Where It Plugs In
How to Add Without Breaking Existing Code
Live location tracking
workers module
Add PATCH /workers/me/location endpoint. Store in Redis with TTL. No schema change needed — location field already exists.
In-app chat
New: chat module
Add Socket.io to app.js. New messages collection. Chat only allowed between booking parties. No existing module affected.
Insurance integration
wallet module + new insurance module
New insurances collection. Add insuranceStatus field to workers schema. Webhook from insurance partner updates status.
Micro-loans
New: loans module
New loans collection. Eligibility computed from totalJobs + rating. Integration with NBFC partner API. Fully separate module.
Contractor dashboard
New: contractor module
New attendance, sites collections. New contractor role in JWT. Contractor sees workers assigned to their site. Gate behind business/enterprise subscription check.
Hindi voice navigation
Frontend only
Web Speech API in React Native. Calls existing API endpoints. Zero backend changes needed.
Advanced analytics
New: analytics module
Read-only aggregation queries on existing collections. Add to admin module. MongoDB aggregation pipeline reads workers, bookings, ratings. Consider separate read replica at scale.
Multi-city expansion
workers + bookings schema
Add city field to workers (indexed). Filter /nearby by city. Existing geo query unchanged — just add { city } to filter object.
Microservices migration
Each module folder
Each module is already isolated. Extract one module at a time into its own Express app. Replace direct function calls with HTTP or message queue (RabbitMQ/SQS) calls. No schema changes.
11. Developer Checklist — Build Order
Follow this sequence exactly. Each step depends on the previous. Do not skip steps or build in parallel until Step 5 is complete.
Week 1 — Foundation
Set up Node.js + Express project structure exactly as in Section 2.2
Configure MongoDB Atlas M0 cluster — get connection string
Configure Redis Upstash — get connection URL
Install all dependencies: express, mongoose, ioredis, joi, jsonwebtoken, bcrypt, helmet, cors, express-rate-limit, express-mongo-sanitize, xss-clean, hpp, winston, morgan, node-cron
Create workers, users, bookings, ratings, subscriptions collections with all indexes from Section 4
Implement all security middleware from Section 3.2
Build standardised response utility (Section 8)
Week 2 — Auth + Workers
Implement Auth module — OTP send/verify, JWT issue, refresh rotation, logout
Implement Worker model with all fields from Section 4.1
Implement GET /workers/nearby with geo query and Redis cache (Section 7)
Implement GET /workers/:id/profile and GET /workers/me
Implement PATCH /workers/me/availability (in-app toggle)
Week 3 — Missed Call + Bookings
Set up Exotel account, get virtual number, configure webhook URL
Implement POST /webhook/exotel with HMAC verification (Section 6)
Implement midnight reset cron job (Section 6.4)
Implement Bookings module — create, confirm-payment, complete, cancel
Implement Razorpay order creation and payment webhook
Week 4 — Notifications + Wallet + Admin
Set up Interakt account, approve Hindi WhatsApp templates
Implement Notifications module — WhatsApp, push notifications
Implement Wallet module — balance, transactions, loyalty points
Implement Ratings module — submit rating, update worker.rating
Implement basic Admin panel routes — worker management, booking oversight
Deploy to Railway, connect MongoDB Atlas and Redis Upstash
End-to-end test full flow: register worker → missed call → user finds → books → payment → complete → rate
Testing Standard
Every module must have at minimum: (1) unit tests for the service layer, (2) integration tests for the API endpoints using supertest + jest. Test coverage target: 70%+ on service and controller layers. Test database: separate MongoDB Atlas M0 cluster named kaamwala-test.
KAAMWALA BACKEND — TECHNICAL REFERENCE
Document v1.0  |  For Developer Use Only  |  Do Not Distribute
