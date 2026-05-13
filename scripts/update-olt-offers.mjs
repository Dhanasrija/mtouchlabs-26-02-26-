// scripts/update-olt-offers.mjs
// Updates the OLT Offers portfolio content in the Neon DB.
// Preserves all image fields (image, app_screens, web_screens, gallery_images, og_image).
//
// Run from project root:
//   node scripts/update-olt-offers.mjs

import { neon } from "@neondatabase/serverless";
import { config } from "dotenv";

config({ path: ".env.local" });

const DATABASE_URL = process.env.DATABASE_URL;
if (!DATABASE_URL) {
  console.error("DATABASE_URL is not set in .env.local");
  process.exit(1);
}

const sql = neon(DATABASE_URL);

const SLUG = "olt-offers";

// ─── CONTENT ───────────────────────────────────────────────────────────────
const title = "OLT Offers – Location-Based Deals & Coupon App";
const subtitle =
  "A smart mobile platform that helps users discover nearby discounts, instantly book deals, and redeem coupons in-store — built by mTouch Labs.";
const description =
  "OLT Offers is a location-based deals and coupon mobile app developed by mTouch Labs. It connects local businesses with nearby customers through smart discovery, instant booking, and seamless coupon redemption.";
const category = "Mobile App Development";
const tags =
  "OLT Offers, coupon app, deals app, location based offers, instant booking, mobile commerce, merchant promotions, mTouch Labs";

// 1. PROJECT OVERVIEW → about
const about = `OLT Offers is a smart location-based deals and coupon mobile application developed by mTouch Labs. The platform helps users discover nearby discounts, browse offers from local businesses, instantly book deals, and redeem coupons directly in-store without any upfront payment.
The idea behind OLT Offers was to create a seamless digital bridge between consumers searching for savings and businesses looking to increase customer footfall. With a modern mobile-first experience, the app transforms local promotions into measurable customer engagement.
OLT Offers is suitable for restaurants, salons, supermarkets, retail stores, entertainment centers, and service providers wanting to attract more nearby customers.`;

// 2. INDUSTRY BACKGROUND → industry_background
const industry_background = `The local deals and discount industry has rapidly evolved with mobile adoption. Customers now prefer instant access to offers rather than waiting for flyers, newspaper ads, or outdated coupon systems.
Modern users expect real-time nearby discounts, easy mobile booking, transparent offer terms, fast redemption process, and personalized recommendations.
At the same time, merchants need digital tools that help them compete in local markets, promote seasonal offers, and bring more walk-in traffic.
OLT Offers was developed to meet both demands through a scalable local commerce app solution.`;

// 3. BUSINESS CHALLENGES → requirements (newline-separated cards)
const requirements = `Difficulty finding authentic nearby offers
Expired or misleading deals on older platforms
Complicated coupon redemption methods
Lack of trust in unknown businesses
No centralized place for local savings
Low local visibility for merchants
Difficulty promoting offers quickly to nearby customers
Poor customer retention for small businesses
Limited digital presence for local stores
No measurable redemption tracking or campaign ROI`;

// 4. OBJECTIVES → objectives (newline-separated)
const objectives = `Help users save money daily through nearby offers
Increase merchant foot traffic and walk-in customers
Simplify booking and redemption with a frictionless mobile flow
Promote nearby businesses with location-based deal discovery
Create a smooth mobile experience with one-hand navigation
GPS-based offer discovery and store listing pages
Categories, filters, and instant booking without payment
Coupon redemption system with wishlist and notifications
Booking history dashboard and admin management panel`;

// 5. STRATEGY & APPROACH → strategy_approach
const strategy_approach = `At mTouch Labs, we followed a research-driven and growth-focused product strategy.
Discovery: Competitor research, market opportunity analysis, user persona creation, and merchant business model planning.
Design: Wireframes, clickable prototypes, conversion-focused UI flows, and accessibility improvements.
Development: Agile sprint cycles, API-first architecture, performance optimization, and continuous QA testing.
Launch: SEO-ready portfolio positioning, scalable deployment, analytics integration, and growth roadmap planning.`;

// 7. SOLUTION ARCHITECTURE → solution_architecture
const solution_architecture = `OLT Offers was designed using a modular architecture for scalability and clear separation of concerns.
User App Module: User onboarding, geo-location engine, deals discovery, booking management, and redemption module.
Merchant Module: Business profile management, offer creation, performance insights, and customer engagement tools.
Admin Panel: Merchant approvals, user management, reports & analytics, and campaign moderation.
Notification Engine: Nearby deals alerts, expiring offers, and booking confirmations delivered in real-time.`;

// 8. KEY FEATURES → features (JSON array)
const features = [
  { title: "Location-Based Deal Discovery", description: "Users automatically see nearby offers based on real-time GPS location." },
  { title: "Merchant Profiles", description: "Business listings with images, contact details, timings, reviews, and categories." },
  { title: "Instant Booking", description: "Users can reserve offers instantly without any upfront payment or prepayment." },
  { title: "Swipe to Redeem", description: "Simple, secure in-store redemption with usage control and tamper-proof coupon flow." },
  { title: "Wishlist", description: "Save favorite offers and stores to revisit and redeem later." },
  { title: "My Deals Dashboard", description: "Track active bookings, redeemed deals, and expired offers in one place." },
  { title: "Smart Notifications", description: "Alerts for new nearby offers, limited-time discounts, and booking confirmations." },
  { title: "Navigation Support", description: "Integrated maps help users reach partner stores quickly and easily." },
];

// 9. UI/UX HIGHLIGHTS → ui_ux_highlights
const ui_ux_highlights = `Clean modern interface with card-based layouts
High-visibility CTA buttons and organized categories
Easy readability and minimal steps to book an offer
Fast onboarding flow with smart filtering
One-hand navigation and frictionless redemption experience
Conversion-optimized UI for higher user retention`;

// 11. COLOR PALETTE → color_palette
const color_palette = [
  { hex: "#FE5E00", name: "Vibrant Orange (Primary)" },
  { hex: "#1C2130", name: "Midnight Navy" },
  { hex: "#707070", name: "Medium Gray" },
  { hex: "#F6F6F6", name: "Soft White" },
  { hex: "#F3F3F9", name: "Lavender White" },
];

// 12. TYPOGRAPHY
const typography = { font: "Nunito / Roboto" };

// 13. DEVELOPMENT PROCESS → development_process (one per line, "Title: Description")
const development_process = `Requirement Gathering: Understanding business goals, user needs, and success metrics
Business Analysis: Mapping merchant flows, user journeys, and revenue opportunities
Wireframing: Low-fidelity sketches of every key flow and screen
UI/UX Design: High-fidelity, conversion-focused mobile-first design
Backend Development: API-first architecture with scalable services
Mobile App Development: Cross-platform builds for iOS and Android
API Integration: Maps, notifications, analytics, and third-party services
QA Testing: Automated and manual testing across devices and OS versions
Performance Optimization: Image, network, and caching tuning for speed
Deployment: Production rollout to app stores and cloud infrastructure
Support & Maintenance: Ongoing monitoring, updates, and feature evolution`;

// 14. SECURITY & PERFORMANCE → security_performance
const security_performance = `OTP and secure login for verified users
Encrypted API communication over HTTPS
Role-based admin access with granular permissions
Data privacy best practices for users and merchants
Secure merchant verification flow before listing
Fast loading screens with optimized image assets
Cached offer lists for low-latency browsing
Low-latency APIs and scalable infrastructure for peak traffic`;

// 15. RESULTS & IMPACT → business_impact
const business_impact = `Daily Savings: Users get daily savings opportunities through location-based deal discovery
Quick Nearby Discovery: Real-time GPS-based offers help users find the best deals around them
Smooth Booking Experience: Customers can book and redeem offers in just a few taps without prepayment
Convenient Redemption Flow: Swipe-to-redeem and in-store coupons remove friction from the experience
Increased Foot Traffic: Merchants see measurable growth in walk-in customers from local campaigns
Better Local Visibility: Businesses gain stronger presence in their neighborhood and target market
Higher Repeat Customers: Wishlists, notifications, and loyalty-style offers improve retention
Measurable Campaign ROI: Merchants can track redemptions, performance, and customer engagement
Win-Win Local Commerce: The platform creates a healthy ecosystem benefiting both users and merchants`;

// 16. FUTURE SCOPE → future_scope
const future_scope = `AI-powered personalized offers based on user behavior and preferences
Loyalty rewards system with point redemption and tiered benefits
QR code redemption for faster, contactless coupon validation
Subscription memberships for premium deals and early access
Multi-city expansion with localized offers and merchant onboarding
Merchant analytics dashboard for campaign performance insights
Referral program to drive organic user growth
Voice search offers and dynamic pricing promotions`;

// 17. CONCLUSION → conclusion
const conclusion = `OLT Offers is a future-ready deals and coupon app solution successfully designed and developed by mTouch Labs. It combines geo-location intelligence, instant booking, merchant promotions, and seamless redemption into one user-friendly mobile platform.
If you are planning to launch a coupon app, local deals marketplace, offers booking platform, or merchant promotion app, mTouch Labs can help you build a scalable and high-performing solution.`;

// 6. TECHNOLOGY STACK
const tech_stack = [
  "Flutter",
  "React Native",
  "Node.js",
  "Laravel",
  "MySQL",
  "PostgreSQL",
  "AWS",
  "Google Cloud",
  "Google Maps API",
  "Firebase",
];

// 18. FAQ
const faq_schema = [
  {
    question: "What is OLT Offers?",
    answer: "OLT Offers is a location-based deals and coupon mobile app that helps users discover, book, and redeem nearby offers from local businesses.",
  },
  {
    question: "Who developed OLT Offers?",
    answer: "OLT Offers was designed and developed by mTouch Labs, a mobile app development company specializing in scalable digital solutions.",
  },
  {
    question: "Can users book offers without payment?",
    answer: "Yes, users can instantly book available offers without any upfront payment and redeem them directly at participating stores.",
  },
  {
    question: "What businesses can use a platform like OLT Offers?",
    answer: "Restaurants, salons, retail stores, supermarkets, entertainment venues, and local service businesses can use a platform like OLT Offers to attract nearby customers.",
  },
  {
    question: "Can mTouch Labs build a similar deals and coupon app?",
    answer: "Yes, mTouch Labs develops custom deals apps, coupon platforms, marketplace apps, and location-based mobile applications for startups and enterprises.",
  },
];

// SEO META
const meta_title = "OLT Offers Case Study | mTouch Labs";
const meta_description =
  "Explore how mTouch Labs developed OLT Offers, a location-based deals and coupon app with nearby offers, instant booking, and smooth redemption.";
const canonical_url = "https://www.mtouchlabs.com/portfolio/olt-offers";
const og_title = "OLT Offers Case Study | mTouch Labs";
const og_description =
  "See how mTouch Labs built OLT Offers, a smart coupon and local deals mobile app for users and merchants.";

// ─── RUN ───────────────────────────────────────────────────────────────────
async function ensureColumns() {
  console.log("→ Ensuring optional content columns exist…");
  // These are all TEXT columns the portfolio detail page reads optionally
  // (with fallback to generic hardcoded content if NULL/empty).
  await sql`ALTER TABLE portfolios ADD COLUMN IF NOT EXISTS industry_background TEXT`;
  await sql`ALTER TABLE portfolios ADD COLUMN IF NOT EXISTS objectives TEXT`;
  await sql`ALTER TABLE portfolios ADD COLUMN IF NOT EXISTS strategy_approach TEXT`;
  await sql`ALTER TABLE portfolios ADD COLUMN IF NOT EXISTS solution_architecture TEXT`;
  await sql`ALTER TABLE portfolios ADD COLUMN IF NOT EXISTS ui_ux_highlights TEXT`;
  await sql`ALTER TABLE portfolios ADD COLUMN IF NOT EXISTS development_process TEXT`;
  await sql`ALTER TABLE portfolios ADD COLUMN IF NOT EXISTS security_performance TEXT`;
  await sql`ALTER TABLE portfolios ADD COLUMN IF NOT EXISTS future_scope TEXT`;
  await sql`ALTER TABLE portfolios ADD COLUMN IF NOT EXISTS conclusion TEXT`;
}

async function main() {
  console.log("→ Checking OLT Offers row…");
  const existing = await sql`
    SELECT id, slug, image, og_image, app_screens, web_screens, gallery_images
    FROM portfolios
    WHERE slug = ${SLUG}
    LIMIT 1
  `;

  if (existing.length === 0) {
    console.error(`No portfolio found with slug = ${SLUG}`);
    console.error("Aborting. Create the entry first (e.g., via /admin/portfolios/create) and re-run.");
    process.exit(1);
  }

  const row = existing[0];
  console.log(`Found portfolio id=${row.id}`);
  console.log("  Preserving image:", row.image);
  console.log("  Preserving og_image:", row.og_image);

  await ensureColumns();

  console.log("→ Updating core fields (images untouched)…");
  await sql`
    UPDATE portfolios SET
      title = ${title},
      subtitle = ${subtitle},
      description = ${description},
      category = ${category},
      tags = ${tags},
      about = ${about},
      requirements = ${requirements},
      business_impact = ${business_impact},
      features = ${JSON.stringify(features)},
      tech_stack = ${JSON.stringify(tech_stack)},
      color_palette = ${JSON.stringify(color_palette)},
      typography = ${JSON.stringify(typography)},
      faq_schema = ${JSON.stringify(faq_schema)},
      meta_title = ${meta_title},
      meta_description = ${meta_description},
      canonical_url = ${canonical_url},
      og_title = ${og_title},
      og_description = ${og_description},
      published = true
    WHERE slug = ${SLUG}
  `;

  console.log("→ Updating extended sections…");
  await sql`
    UPDATE portfolios SET
      industry_background = ${industry_background},
      objectives = ${objectives},
      strategy_approach = ${strategy_approach},
      solution_architecture = ${solution_architecture},
      ui_ux_highlights = ${ui_ux_highlights},
      development_process = ${development_process},
      security_performance = ${security_performance},
      future_scope = ${future_scope},
      conclusion = ${conclusion}
    WHERE slug = ${SLUG}
  `;

  console.log("OLT Offers updated successfully.");
  console.log("Images preserved (image, og_image, app_screens, web_screens, gallery_images were NOT modified).");
  console.log("Visit: https://www.mtouchlabs.com/portfolio/olt-offers");
}

main().catch((err) => {
  console.error("Update failed:", err);
  process.exit(1);
});
