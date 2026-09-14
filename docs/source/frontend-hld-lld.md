> Frontend HLD/LLD (imported from KaamWala_Frontend_HLD_LLD.docx). Draft. Contradicts product.md on client surface.

KAAMWALA
Frontend Architecture Document
React Native (Expo)  —  Worker App + User App
Expo SDK 51
Framework
React Native
Runtime
TypeScript
Language
1. Document Purpose & Technology Decisions
This document is the complete frontend technical reference for KaamWala's mobile applications. It covers the High Level Design (HLD) — architecture pattern, project structure, shared code strategy, and library choices — and the Low Level Design (LLD) — every screen, component, navigation flow, API integration, state management pattern, and platform-specific behaviour for both the Worker App and the User App.
Audience
This document is written for the frontend developer. It should be read alongside the Backend HLD & LLD document. Every API call referenced here corresponds to an endpoint defined in that document.
1.1 Why Expo (React Native) — Final Decision
Factor
Expo + React Native
Alternative (Flutter / Native)
Codebase
One JS/TS codebase → Android + iOS
Flutter: one Dart codebase. Native: two codebases (Kotlin + Swift).
Team fit
Same JS stack as backend — any team member can contribute
Flutter requires Dart. Native requires Kotlin AND Swift specialists.
Setup time
expo create → running on device in 10 minutes
Xcode + Android Studio + signing setup = 2–3 days minimum.
OTA updates
expo-updates: push JS fixes without app store review
Flutter: partial OTA. Native: full store re-submit required.
Missed call APK
Expo build generates APK for sideloading — no Play Store needed for worker app
Same capability but heavier build toolchain.
Libraries
expo-location, expo-notifications, expo-image-picker all pre-integrated
Each needs native configuration and linking separately.
1.2 Full Technology Stack
Category
Library / Tool
Purpose
Framework
Expo SDK 51 + React Native 0.74
Core runtime. Expo managed workflow for worker app; bare workflow for user app if Maps deep integration needed.
Language
TypeScript 5.x
Type safety prevents entire classes of runtime bugs. Both apps use strict TypeScript.
Navigation
React Navigation 6 (Stack + Tab + Drawer)
Industry standard. Stack for screen push/pop. Tab for bottom nav. Drawer for worker app side menu.
State Management
Zustand
Lightweight, no boilerplate. Replaces Redux for global state (auth, worker status, bookings). Context API for theme/locale.
API Client
Axios + React Query (TanStack)
Axios for HTTP with interceptors (auto token refresh). React Query for caching, background refetch, loading/error states.
Maps
react-native-maps
Google Maps on Android, Apple Maps on iOS. Worker dots, radius circle, user pin. Expo compatible.
Location
expo-location
Request GPS permission. Get current coordinates. Background location for active workers (foreground only in worker app).
Push Notifications
expo-notifications
Register device for FCM (Android) and APNs (iOS). Handle foreground and background notifications.
Storage
expo-secure-store + MMKV
SecureStore for tokens (encrypted). MMKV (react-native-mmkv) for fast app state persistence (user prefs, last location).
UI Components
Custom component library (no UI kit)
No third-party UI kit — we build our own small component library (Button, Card, Badge, Input, Avatar) to match exact KaamWala design.
Forms
React Hook Form + Zod
Type-safe form validation. Zod schemas shared with backend Joi schemas for consistency.
Payments
react-native-razorpay
Official Razorpay SDK for React Native. Opens native checkout sheet. Handles UPI, cards, wallets.
Image Upload
expo-image-picker + expo-camera
Profile photo selection/capture. Upload to Cloudinary via multipart form.
Phone Dial
expo-linking
tel: URL scheme to initiate missed call from worker app and direct call from user app.
i18n
react-native-localize + i18next
Hindi (hi) and English (en) support. Worker app defaults to Hindi. User app defaults to device language.
Build
EAS Build (Expo Application Services)
Cloud builds for APK (worker) and AAB/IPA (user). Free tier: 30 builds/month. No Mac needed for iOS.
OTA Updates
expo-updates
Push JS bundle updates over the air without app store review. Critical for rapid bug fixes post-launch.
2. High Level Design — Project Structure
2.1 Monorepo Structure (Both Apps in One Repo)
Both apps live in a single repository using a monorepo approach. Shared utilities, API client, types, and constants are in a shared/ package. Each app has its own folder with its own package.json and navigation structure.
kaamwala-mobile/
├── apps/
│   ├── worker/                    # Worker Android app
│   │   ├── app.json               # Expo config (bundle ID, permissions)
│   │   ├── App.tsx                # Root component
│   │   ├── src/
│   │   │   ├── screens/           # All screens
│   │   │   ├── navigation/        # Stack + Tab navigators
│   │   │   ├── store/             # Zustand stores
│   │   │   └── hooks/             # App-specific hooks
│   │   └── assets/                # Worker app icons, splash
│   │
│   └── user/                      # User Android + iOS app
│       ├── app.json
│       ├── App.tsx
│       ├── src/
│       │   ├── screens/
│       │   ├── navigation/
│       │   ├── store/
│       │   └── hooks/
│       └── assets/
│
└── packages/
└── shared/                    # Shared across both apps
├── api/                   # Axios client + all API calls
│   ├── client.ts          # Axios instance, interceptors
│   ├── auth.api.ts
│   ├── workers.api.ts
│   ├── bookings.api.ts
│   ├── payments.api.ts
│   └── notifications.api.ts
├── types/                 # TypeScript interfaces
│   ├── worker.types.ts
│   ├── user.types.ts
│   ├── booking.types.ts
│   └── api.types.ts
├── constants/             # Shared constants
│   ├── skills.ts          # Skill enum list
│   ├── colors.ts          # Brand color tokens
│   └── config.ts          # API base URL, timeouts
├── components/            # Shared UI components
│   ├── Button.tsx
│   ├── Card.tsx
│   ├── Badge.tsx
│   ├── Avatar.tsx
│   ├── StarRating.tsx
│   ├── LoadingSpinner.tsx
│   └── ErrorMessage.tsx
├── hooks/                 # Shared hooks
│   ├── useAuth.ts
│   ├── useLocation.ts
│   └── useNotifications.ts
└── utils/                 # Helpers
├── storage.ts         # SecureStore + MMKV wrappers
├── phone.ts           # Number formatting + validation
├── distance.ts        # km formatting from metres
└── date.ts            # Relative time formatting
2.2 Shared Axios Client — Token Auto-Refresh
// packages/shared/api/client.ts
import axios from "axios";
import { storage } from "../utils/storage";
const client = axios.create({
baseURL: process.env.EXPO_PUBLIC_API_URL,
timeout: 10000,
headers: { "Content-Type": "application/json" },
});
// Request interceptor — attach access token
client.interceptors.request.use(async (config) => {
const token = await storage.getSecure("accessToken");
if (token) config.headers.Authorization = `Bearer ${token}`;
return config;
});
// Response interceptor — auto-refresh on 401
client.interceptors.response.use(
(response) => response,
async (error) => {
if (error.response?.status === 401) {
const refreshToken = await storage.getSecure("refreshToken");
const { data } = await axios.post(`${process.env.EXPO_PUBLIC_API_URL}/auth/refresh`,
{}, { headers: { Cookie: `refreshToken=${refreshToken}` } });
await storage.setSecure("accessToken", data.data.accessToken);
error.config.headers.Authorization = `Bearer ${data.data.accessToken}`;
return client(error.config); // retry original request
}
return Promise.reject(error);
}
);
export default client;
3. Worker App — High Level Design
3.1 App Philosophy
The Worker App is the most important product to get right. The target user has low digital literacy, uses a ₹5,000 Android phone, has limited data, and is likely using the phone one-handed while standing at a labour chowk. Every design decision must serve this reality.
Principle
Implementation
Radically simple
Maximum 4 screens. Every action completable in 2 taps. No typing required after registration.
Hindi first
All UI text in Hindi by default. Transliterated English for technical terms (UPI, ID). Language toggle available but Hindi is default.
Large touch targets
All interactive elements minimum 56×56dp. Active toggle button: 80×80dp circle. No small icons alone — always paired with text label.
Low data friendly
All images lazy loaded with placeholder. API responses cached with React Query staleTime. Minimal animations. No auto-playing video.
Offline tolerant
isActive status cached locally. If API fails, show last known state with "No internet" banner. Queue missed call toggle for retry on reconnect.
Fast cold start
Target <2 second time-to-interactive on low-end Android. Lazy load heavy screens (wallet, profile) using React.lazy.
3.2 Worker App Navigation Architecture
WorkerApp
├── AuthStack          (unauthenticated)
│   ├── OnboardingScreen   — first time only
│   └── OTPLoginScreen     — phone + OTP
│
└── MainStack          (authenticated)
├── BottomTabNavigator
│   ├── HomeTab        → HomeScreen
│   ├── HistoryTab     → BookingHistoryScreen
│   ├── WalletTab      → WalletScreen
│   └── ProfileTab     → ProfileScreen
└── Modal Screens (pushed over tabs)
├── BookingDetailScreen
├── SubscriptionScreen
├── RatingDetailScreen
└── SOSScreen
4. Worker App — Screen Specifications (LLD)
4.1 OnboardingScreen
Route: WorkerAuthStack → OnboardingScreen
Shown: First launch only. Condition: no accessToken in SecureStore.
Purpose: Explain KaamWala value prop to worker before asking for phone number. 3 slides.
Slide
Headline (Hindi)
Sub-text + Visual
1
Roz kaam, roz kamaai
Illustration: worker waving from phone. Text: "Ab labour chowk nahi, bas ek missed call."
2
Aadhaar se verified, safe kaam
Illustration: verified badge. Text: "Aapki pehchaan secure hai. Customers aap par bharosa karte hain."
3
Wallet, rating, aur zyada kaam
Illustration: wallet with rupee. Text: "Har kaam ke baad points kamao. Pro bano, search mein upar aao."
Bottom CTA button: "Shuru Karen" (Get Started) → navigates to OTPLoginScreen
Skip link: text link at top right for subsequent launches — hidden on first launch check
4.2 OTPLoginScreen
Route: WorkerAuthStack → OTPLoginScreen
API Calls: POST /api/v1/auth/send-otp  →  POST /api/v1/auth/verify-otp
UI Elements:
Large text input for phone number. Numeric keyboard forced (keyboardType="phone-pad"). Placeholder: "Apna mobile number daalen"
Country code prefix "+91" — non-editable, shown as prefix inside input
Primary CTA: "OTP Bhejo" — disabled until 10-digit number entered
On OTP send success: slide to 6-digit OTP input. Each digit in individual box (OTPInput component).
Auto-read OTP from SMS using expo-sms-retriever on Android (auto-fills boxes)
Resend OTP timer: 60-second countdown. "Dobara OTP bhejo (60s)"
On verify success: store accessToken in SecureStore → navigate to MainStack
Error States:
Invalid phone: "Sahi mobile number daalen" — shown inline below input
Wrong OTP: "OTP galat hai. Dobara try karen."
Expired OTP: "OTP expire ho gaya. Dobara bhejo."
Network error: Toast notification at bottom: "Internet nahi hai. Check karen."
4.3 HomeScreen (Most Important Screen)
Route: WorkerMainStack → BottomTab → Home
API Calls: GET /api/v1/workers/me (on mount)  |  PATCH /api/v1/workers/me/availability (on toggle)
Layout — Top to Bottom:
Greeting bar: "Namaste, [firstName]" (14px) + subscription badge (Pro/Elite/Free pill) + avatar circle (initials)
AVAILABILITY TOGGLE — the entire top section. Large rounded card (green when ON, gray when OFF).
Inside toggle card: 80×80dp circle button with phone icon. Large text label below: "LIVE — Aap dikhai de rahe hain" or "INACTIVE". Sub-text: "Missed call se bhi toggle ho sakta hai: 0120-XXXXXXX"
Tapping toggle: calls PATCH /me/availability. Shows loading spinner in button. On success: updates Zustand store + animates card color.
Location permission check: if isActive=true and location not granted → show permission modal before toggle.
Stat row (3 boxes): Aaj ki Kamaai (₹ from today's completed bookings) | Is Hafte (₹) | Rating (4.8★)
Active Booking card (shown only if booking in "confirmed" status): Worker name, address, skill, distance. Two buttons: "Call karo" (expo-linking tel:) + "Kaam ho gaya" (mark complete)
Quick action grid (2×2): Wallet | Profile | Courses | SOS
Zustand Store — workerStore:
interface WorkerStore {
worker: WorkerProfile | null;
isActive: boolean;
activeBooking: Booking | null;
setWorker: (w: WorkerProfile) => void;
setIsActive: (v: boolean) => void;
setActiveBooking: (b: Booking | null) => void;
}
Missed Call Deep Link (Android only):
When Exotel sends WhatsApp confirmation, include a deep link: kaamwala://worker/active
App registers this scheme in app.json. On open: refreshes worker profile from API to sync isActive state.
4.4 BookingHistoryScreen
Route: WorkerMainStack → BottomTab → History
API Calls: GET /api/v1/bookings/my?page=1&limit=20
FlatList of booking cards. Paginated — load more on scroll to bottom (onEndReached).
Each card: User first name + masked phone | Skill | Date | Status badge (color-coded) | Amount earned
Tap card → BookingDetailScreen (modal push)
Filter chips at top: Sabhi (All) | Active | Completed | Cancelled
Empty state: Illustration + "Abhi tak koi booking nahi. Active ho jaiye!"
4.5 WalletScreen
Route: WorkerMainStack → BottomTab → Wallet
API Calls: GET /api/v1/workers/me (wallet data)  |  GET /api/v1/wallet/transactions
Navy blue balance card at top: "Available Balance" label + large ₹340.50 amount + 3 action buttons (UPI Transfer | Subscription | Vouchers)
Loyalty points card (orange): Points count + progress bar + "X points mein Free Pro subscription!"
Transaction list: FlatList. Each row: Description | Amount (green credit / red debit) | Date
Vouchers section: Horizontal scroll of voucher cards. Each shows: Title | Expiry | Value. Tap to view redeem instructions.
4.6 ProfileScreen
Route: WorkerMainStack → BottomTab → Profile
API Calls: GET /api/v1/workers/me  |  PATCH /api/v1/workers/me
Avatar (large circle, 80dp) — tap to open image picker (expo-image-picker). Upload to Cloudinary on select.
Name (editable inline on tap) | Skill badge | ID Verified badge | Subscription badge
Stats row: Total Jobs | Rating | Experience (calculated from createdAt)
Rating breakdown card: Skill ★ | Punctuality ★ | Behaviour ★ (from ratings collection avg)
Recent Reviews section: Last 3 reviews with user name and date
"Profile Share karo" button: expo-sharing opens share sheet with deep link to public profile URL
Subscription banner: Shows current plan + "Pro mein upgrade karo" CTA if on free tier → SubscriptionScreen
Edit fields: Daily Rate (numeric input) | Sub-skills (multi-select chip picker) | Home Area (text)
Logout button at bottom (destructive red) → clears SecureStore + navigates to AuthStack
4.7 SubscriptionScreen (Modal)
Route: WorkerMainStack → Modal → SubscriptionScreen
API Calls: POST /api/v1/payments/subscription/create  |  Razorpay SDK
Current plan banner at top (highlighted in plan color)
Three plan cards: Free | Pro (₹199/mo) | Elite (₹399/mo). Featured border on Pro card.
Each card lists 6 feature bullets in Hindi. CTA button triggers Razorpay checkout.
On Razorpay success: backend webhook updates plan. App re-fetches /workers/me. Toast: "Pro ho gaye aap!"
Cancel subscription: small link at bottom → confirmation bottom sheet → POST /subscription/cancel
5. User App — High Level Design
5.1 App Philosophy
The User App serves homeowners and small contractors who want to quickly find and hire a verified worker. The primary emotion to design for is trust and confidence. Users need to feel safe letting a stranger into their home. Speed of hire is the secondary metric — from opening the app to having a confirmed worker should take under 2 minutes.
5.2 User App Navigation Architecture
UserApp
├── AuthStack          (unauthenticated)
│   └── OTPLoginScreen
│
└── MainStack          (authenticated)
├── BottomTabNavigator
│   ├── FindTab        → SearchScreen (home)
│   ├── BookingsTab    → BookingsScreen
│   ├── SavedTab       → SavedWorkersScreen
│   └── ProfileTab     → UserProfileScreen
└── Modal / Stack Screens
├── WorkerDetailScreen   — full profile + hire CTA
├── PaymentScreen        — Razorpay checkout
├── BookingConfirmedScreen
├── RateWorkerScreen
└── SubscriptionScreen   — Business / Enterprise plans
6. User App — Screen Specifications (LLD)
6.1 SearchScreen (Home Tab)
Route: UserMainStack → BottomTab → Find
API Calls: GET /api/v1/workers/nearby?lat=&lng=&skill=&limit=20
On Mount:
Request location permission (expo-location). If denied: show text input for manual area entry.
Get current coordinates → call /workers/nearby. Store results in React Query cache (staleTime: 60 seconds).
Background refetch every 2 minutes when screen is focused (React Query refetchInterval).
UI Layout:
Top bar: "KaamWala" logo left | Location pin + area name right (tappable to change location)
Skill filter chip row: horizontal scrollable. Chips: Sabhi | Mistri | Plumber | Electrician | Painter | Carpenter | Labour | House Help
Map toggle button (top right of list): switches between list view and map view
Worker count: "28 workers aap ke paas active hain" (dynamic from API response total)
FlatList of WorkerCard components — see 6.2 below
Pull-to-refresh: refetches /workers/nearby
Map View (when toggled):
react-native-maps fullscreen. Center on user location.
Blue dot: user location. Colored pins: workers (orange = Elite, blue = Pro, gray = Free).
10km radius circle drawn around user location.
Tap a pin → bottom sheet slides up with mini WorkerCard + "Profile Dekho" button.
6.2 WorkerDetailScreen
Route: UserMainStack → WorkerDetailScreen (modal slide up)
Params: { workerId: string }
API Calls: GET /api/v1/workers/:workerId/profile
UI Sections:
Hero section: Large avatar (60dp) | Name | Active Now green dot | Distance | Area | Subscription badge
Badges row: "ID Verified ✓" | "Skill Certified 🏅" (if applicable) | "Top Worker 🔥" (if applicable)
Stats row: Rating ★ | Total Jobs | Daily Rate ₹ | Experience
Skills tags: primarySkill + subSkills as horizontal chip row
Ratings breakdown accordion: Skill | Punctuality | Behaviour (expandable)
Reviews section: Last 5 reviews. Each: User name (first name only) | Date | Stars | Review text
Safety note card (orange): "Booking confirm hone par aapko worker ka naam, photo, aur ID milegi"
Bottom sticky bar:
Left: "Bachao" (Save/Bookmark) heart icon → adds to savedWorkers
Right: "Hire karo — ₹40" primary orange button → navigates to PaymentScreen with workerId
6.3 PaymentScreen
Route: UserMainStack → PaymentScreen
Params: { workerId: string, workerName: string, bookingFee: number }
API Calls: POST /api/v1/bookings/create  →  POST /api/v1/bookings/confirm-payment
Flow:
User arrives at screen — shows booking summary: worker name, skill, booking fee breakdown.
User taps "Pay ₹40" — calls POST /bookings/create → receives { bookingId, razorpayOrderId, amount }.
App opens Razorpay native checkout sheet via react-native-razorpay.
User pays via UPI/card/wallet.
Razorpay SDK returns { razorpay_payment_id, razorpay_signature } on success.
App calls POST /bookings/confirm-payment with these values.
On success → navigate to BookingConfirmedScreen (replace — cannot go back to payment).
Error Handling:
Payment cancelled by user: stay on PaymentScreen. Toast: "Payment cancel kar di. Dobara try karen."
Payment failed (Razorpay): Toast with failure reason from Razorpay. Retry button.
Network error on confirm-payment: Show "Payment hua par confirm nahi hua" screen with support contact. Log error server-side for manual resolution.
6.4 BookingConfirmedScreen
Route: UserMainStack → BookingConfirmedScreen (replaces PaymentScreen)
Params: { bookingId: string }
API Calls: GET /api/v1/bookings/:id
Full-screen green success state. Large checkmark animation (Lottie or CSS animation).
Worker details revealed: Name | Photo | Phone number (tappable → calls via tel:) | Aadhaar ID reference (KW-XXXX)
Job status stepper: Confirmed ✓ → En Route (waiting) → Complete (rate worker)
Safety tip card: "Worker ka ID note kar lein. Koi problem? App se report karen."
SOS button: red emergency button → SOSScreen with live location sharing
"Booking Dekho" button → BookingsScreen (clears stack)
6.5 RateWorkerScreen
Trigger: Push notification after booking marked complete + button in BookingDetailScreen
API Calls: POST /api/v1/ratings
Worker avatar + name at top
Overall stars: 5 large tappable stars. Label updates: Bahut Kharab | Kharab | Theek Hai | Achha | Bahut Achha
Sub-ratings (optional, shown after overall star selected): Skill ★ | Punctuality ★ | Behaviour ★
Written review: optional TextInput, 500 char max. Placeholder: "Kuch likhna chahte hain? (Zaroori nahi)"
Submit button: "Rating Do" → POST /ratings → Toast "Shukriya! Aapki rating submit ho gayi." → navigate back
6.6 BookingsScreen
Route: UserMainStack → BottomTab → Bookings
API Calls: GET /api/v1/bookings/my?page=1
Segmented control tabs: Active | Past
Active tab: Shows confirmed + active bookings. Each card: Worker name + photo | Skill | Status badge | "Call" + "Mark Done" buttons
Past tab: Completed + cancelled bookings. Each shows: Date | Amount paid | Rating given (or "Rate karo" CTA if not rated)
Empty states: "Abhi koi active booking nahi" | "Aapne abhi tak koi booking nahi ki"
7. Shared Component Library — Specifications
These components live in packages/shared/components/ and are used by both apps. They are built from React Native primitives — no third-party UI kit dependency.
Component
Props
Behaviour
Button
variant, label, onPress, loading, disabled
Variants: primary (blue fill) | secondary (outline) | danger (red fill) | ghost (text only). Loading state shows ActivityIndicator. Min height 52dp. Rounded 12px.
WorkerCard
worker, onHire, onPress, distance
Avatar + name + skill badge + rating stars + distance + daily rate + subscription badge. Hire button on right. Used in SearchScreen list.
Badge
label, variant
Variants: verified (green) | certified (blue) | top (orange) | pro (purple) | elite (gold) | free (gray). Pill shape. 12px text.
Avatar
photoUrl, name, size
Shows photo if URL present. Falls back to initials (first letter of first + last name) on colored circle. Sizes: sm(32) md(48) lg(64) xl(80).
StarRating
value, editable, onChange, size
Displays filled/half/empty stars. If editable: tappable stars with haptic feedback. Sizes: small (display) and large (input).
SkillChip
skill, selected, onPress
Horizontal filter chip. Selected state: blue fill + white text. Unselected: gray outline. Maps skill key to Hindi display name.
BookingCard
booking, onPress, showActions
Status badge (color-coded). Worker/user avatar + name. Date + skill. Action buttons if showActions=true.
BottomSheet
visible, onClose, children, snapPoints
Modal sheet sliding from bottom. Backdrop press closes. Used for worker mini-profile on map, confirmation dialogs, skill pickers.
EmptyState
illustration, title, subtitle, ctaLabel, onCta
Centered illustration (SVG) + title + subtitle + optional CTA button. Used in empty lists.
Toast
message, type, duration
Types: success (green) | error (red) | info (blue). Appears at bottom, auto-dismisses after duration (default 3s). No tap required.
OTPInput
length, onComplete, autoFill
6 individual digit boxes. Focus auto-advances on digit entry. Backspace moves focus back. autoFill=true enables SMS retriever on Android.
8. State Management — Zustand Store Definitions
Global state is managed with Zustand. Each store is a single file. Stores are imported directly — no Provider wrapping needed. React Query handles all server state (API data caching). Zustand handles client state only.
8.1 Auth Store (shared — both apps)
// packages/shared/store/authStore.ts
interface AuthStore {
isAuthenticated: boolean;
userId: string | null;
role: "worker" | "user" | null;
phone: string | null;
setAuth: (userId: string, role: "worker" | "user", phone: string) => void;
clearAuth: () => void;
}
8.2 Worker Store (worker app only)
interface WorkerStore {
worker: WorkerProfile | null;
isActive: boolean;
activeBooking: Booking | null;
walletBalance: number;
loyaltyPoints: number;
subscriptionPlan: "free" | "pro" | "elite";
setWorker: (w: WorkerProfile) => void;
setIsActive: (active: boolean) => void;
setActiveBooking: (b: Booking | null) => void;
updateWallet: (balance: number, points: number) => void;
}
8.3 User Store (user app only)
interface UserStore {
user: UserProfile | null;
currentLocation: { lat: number; lng: number } | null;
selectedSkill: string | null;
savedWorkerIds: string[];
activeBooking: Booking | null;
setUser: (u: UserProfile) => void;
setLocation: (loc: { lat: number; lng: number }) => void;
setSkillFilter: (skill: string | null) => void;
toggleSavedWorker: (workerId: string) => void;
setActiveBooking: (b: Booking | null) => void;
}
9. Permissions, Platform Specifics & app.json Config
9.1 Android Permissions Required
Permission
App
When Requested
ACCESS_FINE_LOCATION
Both
On home screen load — needed for /workers/nearby. Show rationale before request: "Aap ke paas ke workers dikhane ke liye location chahiye"
CALL_PHONE
Both
On tap of "Call" button. Android 11+ shows chooser. Use expo-linking tel: scheme — does not require CALL_PHONE permission.
RECEIVE_SMS
Both
For OTP auto-read (SMS Retriever API). Request only on OTPLoginScreen. Rationale: "OTP auto-fill ke liye"
POST_NOTIFICATIONS
Both
Android 13+. Request after login. Rationale: "Booking alerts aur job notifications ke liye"
READ_MEDIA_IMAGES / CAMERA
Both
Only when user taps avatar to change photo. Request at point of use — never on app launch.
INTERNET
Both
Auto-granted. No user prompt needed.
9.2 iOS Permissions (User App Only)
NSLocationWhenInUseUsageDescription: "Aap ke paas ke workers dikhane ke liye"
NSCameraUsageDescription: "Profile photo ke liye camera use hoga"
NSPhotoLibraryUsageDescription: "Gallery se photo select karne ke liye"
NSUserNotificationsUsageDescription: "Booking updates ke liye notifications chahiye"
9.3 app.json Key Configuration
// apps/worker/app.json
{
"expo": {
"name": "KaamWala — Worker",
"slug": "kaamwala-worker",
"version": "1.0.0",
"orientation": "portrait",       // lock to portrait
"scheme": "kaamwala",            // deep link scheme
"android": {
"package": "in.kaamwala.worker",
"versionCode": 1,
"permissions": [               // only request what is needed
"ACCESS_FINE_LOCATION",
"RECEIVE_SMS",
"POST_NOTIFICATIONS"
]
},
"plugins": [
"expo-location",
"expo-notifications",
"expo-secure-store",
["expo-image-picker", { "photosPermission": "Gallery se photo lene ke liye" }]
]
}
}
10. Push Notification Handling
Notifications are sent from the backend via Firebase Cloud Messaging (FCM). The app must register the device token on login and handle notifications in three states: foreground, background, and app-closed (cold start).
Notification Type
Recipient
Action on Tap
booking_confirmed
Worker
Open BookingDetailScreen with booking data in notification payload
booking_confirmed
User
Open BookingConfirmedScreen
rate_worker
User
Open RateWorkerScreen with workerId and bookingId
booking_cancelled
Both
Open BookingDetailScreen showing cancellation reason
saved_worker_active
User
Open SearchScreen filtered to that skill category. Worker shown at top.
subscription_expiring
Worker
Open SubscriptionScreen
wallet_credit
Worker
Open WalletScreen
10.1 FCM Token Registration
// packages/shared/hooks/useNotifications.ts
export function useNotifications(userId: string, role: string) {
useEffect(() => {
async function register() {
const { status } = await Notifications.requestPermissionsAsync();
if (status !== "granted") return;
const token = (await Notifications.getExpoPushTokenAsync()).data;
// Send FCM token to backend to store on worker/user document
await apiClient.patch(`/api/v1/${role}s/me`, { fcmToken: token });
}
register();
}, [userId]);
}
11. Build & Deployment Strategy
11.1 Worker App — APK Sideload (No Play Store)
The Worker App is distributed as an APK file, not via the Play Store. This is intentional — it avoids Play Store review delays, allows direct distribution to workers at labour chowks, and avoids Google's 30% cut on in-app purchases.
Build command: eas build --platform android --profile preview --non-interactive
Output: .apk file hosted on KaamWala server or Firebase Hosting
Distribution: QR code printed on field agent registration form → worker scans → downloads APK
Install: Worker enables "Install from unknown sources" in Android settings. Field agent helps with first install.
Updates: expo-updates OTA for JS changes. New APK for native permission changes.
11.2 User App — Play Store + App Store
Android build: eas build --platform android --profile production → generates .aab (Android App Bundle)
iOS build: eas build --platform ios --profile production → generates .ipa (requires Apple Developer account $99/year)
Play Store: Submit .aab. Review takes 1–3 days for new apps, hours for updates.
App Store: Submit .ipa via Transporter. Review 1–7 days.
OTA updates: expo-updates for JS bundle changes that do not modify native code — push instantly without store review.
11.3 Environment Configuration
Profile
API URL
Build Type
development
http://localhost:5000
Expo Go / development client. Hot reload enabled.
preview
https://staging-api.kaamwala.in
APK build for internal testing. Same as production but staging backend.
production
https://api.kaamwala.in
Store-ready AAB/IPA. Minified + optimised.
12. Developer Checklist — Build Order
Follow this exact sequence. Do not start User App screens until Worker App core flow is complete and tested on a real device.
Week 1 — Setup & Shared Foundation
Create monorepo: apps/worker + apps/user + packages/shared using Yarn workspaces
Install all dependencies. Configure TypeScript strict mode in all three packages.
Build shared Axios client with token interceptors (Section 2.2)
Define all TypeScript interfaces in packages/shared/types/
Implement storage.ts utility (SecureStore for tokens, MMKV for app state)
Build all shared components: Button, Avatar, Badge, StarRating, OTPInput, Toast, BottomSheet
Week 2 — Worker App Core
Set up React Navigation for Worker App (AuthStack + MainStack + BottomTabs)
Build OTPLoginScreen — phone input + OTP input + SMS auto-read
Build HomeScreen — availability toggle (most critical — test on real Android device)
Implement Zustand workerStore
Wire PATCH /workers/me/availability to toggle button
Implement missed call deep link handler (kaamwala://worker/active)
Test full missed call → WhatsApp → deep link → isActive refresh cycle
Week 3 — Worker App Remaining Screens
Build BookingHistoryScreen with pagination
Build WalletScreen — balance card + transaction list + vouchers
Build ProfileScreen — photo upload + editable fields + share profile
Build SubscriptionScreen — 3 plan cards + Razorpay checkout
Configure expo-notifications + FCM token registration
Test all 4 tab screens on real low-end Android (₹5,000 class device recommended for testing)
Week 4 — User App
Set up React Navigation for User App (AuthStack + MainStack + BottomTabs)
Build SearchScreen — location permission + /workers/nearby + FlatList + skill chips
Build Map View with react-native-maps — worker pins + radius circle
Build WorkerDetailScreen — full profile modal
Build PaymentScreen + Razorpay integration + BookingConfirmedScreen
Build BookingsScreen + RateWorkerScreen
Build SavedWorkersScreen + UserProfileScreen
Week 5 — Polish & Testing
Hindi translation review — have a native Hindi speaker read every string in the Worker App
Test on minimum supported Android API level (API 26 / Android 8.0)
Test offline behaviour — airplane mode while booking in progress
Test OTA update — push a small change, verify it appears without reinstall
Generate Worker App APK → distribute to 3 test workers at labour chowk
Submit User App to Play Store (internal testing track first)
Testing Requirement
Every API call must have a loading state (spinner or skeleton), a success state, and an error state. Never show a blank screen when data is loading. Never show a raw error object to the user — always show a friendly Hindi message with a retry action.
KAAMWALA FRONTEND — TECHNICAL REFERENCE
Document v1.0  |  For Developer Use Only  |  Do Not Distribute
