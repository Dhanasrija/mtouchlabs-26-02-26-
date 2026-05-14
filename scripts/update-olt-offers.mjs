// scripts/update-olt-offers.mjs
// Publishes / updates the OLT Offers portfolio at
//   /portfolio/olt-offers-mobile-app-development
//
// - Canonical slug: olt-offers-mobile-app-development (old variants are
//   redirected in next.config.js)
// - Cleans up any duplicate rows on the older slugs so only the canonical
//   row remains in the DB
// - Wires in the renamed SVG images in /public/images/portfolio/oltoffers/
//
// Run:  node scripts/update-olt-offers.mjs

import { neon } from "@neondatabase/serverless";
import { config } from "dotenv";

config({ path: ".env.local" });

const DATABASE_URL = process.env.DATABASE_URL;
if (!DATABASE_URL) {
  console.error("DATABASE_URL is not set in .env.local");
  process.exit(1);
}

const sql = neon(DATABASE_URL);

const SLUG = "olt-offers-mobile-app-development";
const OLD_SLUGS = [
  "otloffers-mobile-app-development",
  "oltoffers-mobile-app-development",
  "olt-offers",
];

// ─── IMAGES (renamed; no spaces) ───────────────────────────────────────────
const IMAGE = "/images/portfolio/otloffers.png";
const OG_IMAGE = "/images/portfolio/otloffers.png";

const APP_SCREENS = [
  "/images/portfolio/oltoffers/app-1.svg",
  "/images/portfolio/oltoffers/app-2.svg",
  "/images/portfolio/oltoffers/app-3.svg",
  "/images/portfolio/oltoffers/app-4.svg",
  "/images/portfolio/oltoffers/app-5.svg",
  "/images/portfolio/oltoffers/app-6.svg",
  "/images/portfolio/oltoffers/app-7.svg",
];

const WEB_SCREENS = [
  "/images/portfolio/oltoffers/web-1.svg",
  "/images/portfolio/oltoffers/web-2.svg",
  "/images/portfolio/oltoffers/web-3.svg",
  "/images/portfolio/oltoffers/web-4.svg",
  "/images/portfolio/oltoffers/web-5.svg",
];

// ─── CORE FIELDS ───────────────────────────────────────────────────────────
const title = "OLT Offers – Location-Based Deals & Coupon App";
const subtitle =
  "A smart mobile platform that helps users discover nearby discounts, instantly book deals, and redeem coupons in-store — built by mTouch Labs.";
const description =
  "OLT Offers is an Android app that helps users find exclusive coupons and discounts from nearby shops across categories like food, fashion, salons, entertainment, groceries, and services. Users can browse location-based deals, book coupons instantly within the app, and redeem them at partner stores to save on everyday purchases.";
const category = "Mobile App";
const tags =
  "OLT Offers, coupon app, deals app, location based offers, instant booking, mobile commerce, merchant promotions, mTouch Labs";

// 1. PROJECT OVERVIEW → about (with internal links)
const about = `OLT Offers is a smart location-based deals and coupon <a href="/mobile-app-development-company">mobile app developed by mTouch Labs</a>. The platform helps users discover nearby discounts, browse offers from local businesses, instantly book deals, and redeem coupons directly in-store without any upfront payment.
The idea behind OLT Offers was to create a seamless digital bridge between consumers searching for savings and businesses looking to increase customer footfall. With a modern mobile-first experience, the app transforms local promotions into measurable customer engagement, delivered as a <a href="/custom-software-development-company">scalable custom solution</a>.
OLT Offers is suitable for restaurants, salons, supermarkets, retail stores, entertainment centers, and service providers wanting to attract more nearby customers.`;

// 2. INDUSTRY BACKGROUND
const industry_background = `The local deals and discount industry has rapidly evolved with mobile adoption. Customers now prefer instant access to offers rather than waiting for flyers, newspaper ads, or outdated coupon systems.
Modern users expect real-time nearby discounts, easy mobile booking, transparent offer terms, fast redemption, and personalized recommendations.
At the same time, merchants need digital tools that help them compete in local markets, promote seasonal offers, and bring more walk-in traffic.
OLT Offers was developed to meet both demands through a scalable local commerce app solution.`;

// 3. BUSINESS CHALLENGES → requirements (one per line, newline-separated cards)
const requirements = `Building a seamless cross-platform mobile experience with native performance
Ensuring intuitive UI/UX design for diverse user demographics
Implementing secure user authentication and data protection
Optimizing app performance for varying network conditions
Integrating real-time notifications and push messaging
Difficulty finding authentic nearby offers
Expired or misleading deals on older platforms
Complicated coupon redemption methods
Low local visibility and digital presence for merchants
No measurable redemption tracking or campaign ROI`;

// 4. OBJECTIVES
const objectives = `Help users save money daily through nearby offers
Increase merchant foot traffic and walk-in customers
Simplify booking and redemption with a frictionless mobile flow
Promote nearby businesses with location-based deal discovery
Create a smooth mobile experience with one-hand navigation
GPS-based offer discovery and store listing pages
Categories, filters, and instant booking without payment
Coupon redemption system with wishlist and notifications
Booking history dashboard and admin management panel`;

// 5. STRATEGY & APPROACH
const strategy_approach = `At mTouch Labs, we followed a research-driven and growth-focused product strategy.
Discovery: Competitor research, market opportunity analysis, user persona creation, and merchant business model planning.
Design: Wireframes, clickable prototypes, conversion-focused UI flows, and accessibility improvements.
Development: Agile sprint cycles, API-first architecture, performance optimization, and continuous QA testing.
Launch Readiness: Scalable hosting setup, SEO portfolio positioning, analytics integration, and a growth roadmap.`;

// 7. SOLUTION ARCHITECTURE
const solution_architecture = `OLT Offers was designed using a modular architecture for scale and reliability.
User App Module: User onboarding, geo-location engine, deals discovery, booking management, and redemption.
Merchant Module: Business profile management, offer creation, performance insights, and customer engagement tools.
Admin Panel: Merchant approvals, user management, reports & analytics, and campaign moderation.
Notification Engine: Nearby deals alerts, expiring offers, and booking confirmations delivered in real-time.`;

// 8. KEY FEATURES → features JSON
const features = [
  { title: "Nearby Deal Discovery", description: "View exclusive offers from local stores based on real-time GPS location." },
  { title: "Instant Coupon Booking", description: "Book deals instantly without pre-payment or upfront cost." },
  { title: "Redeem at Store", description: "Visit the partner shop and redeem coupons directly with a secure flow." },
  { title: "Location-based Suggestions", description: "Deals tailored to nearby locations and user preferences." },
  { title: "User-Friendly UI", description: "Clean and easy interface for deal browsing and redemption." },
  { title: "Wishlist & Saved Deals", description: "Save favorite offers and stores to revisit and redeem later." },
  { title: "My Deals Dashboard", description: "Track active bookings, redeemed deals, and expired offers in one place." },
  { title: "Smart Notifications", description: "Alerts for new nearby offers, limited-time discounts, and booking confirmations." },
];

// 9. UI/UX HIGHLIGHTS (with internal link)
const ui_ux_highlights = `Clean modern interface with card-based layouts (built on <a href="/ui-ux-design-company">intuitive user experience design</a>)
Clear pricing display and simple category navigation
Prominent CTA buttons to drive conversions
Reduced clicks to purchase for faster checkout
Fast reorder behavior for repeat customers
Smooth mobile browsing with one-hand navigation
Frictionless redemption flow optimized for retention`;

// 11. COLOR PALETTE
const color_palette = [
  { hex: "#FE5E00", name: "Vibrant Orange (Primary)" },
  { hex: "#1C2130", name: "Midnight Navy" },
  { hex: "#707070", name: "Medium Gray" },
  { hex: "#FFFFFF", name: "Soft White" },
  { hex: "#F3F3F9", name: "Lavender White" },
];

// 12. TYPOGRAPHY
const typography = { font: "Nunito / Roboto", weight: "Modern & Corporate" };

// 13. DEVELOPMENT PROCESS
const development_process = `Requirement Gathering: Business goals, user needs, and success metrics
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

// 14. SECURITY & PERFORMANCE
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

// 16. FUTURE SCOPE (with internal link)
const future_scope = `AI-powered personalized offers based on user behavior and preferences
Loyalty rewards system with point redemption and tiered benefits
QR code redemption for faster, contactless coupon validation
Subscription memberships for premium deals and early access
Multi-city expansion with localized offers and merchant onboarding
Merchant analytics dashboard for campaign performance insights
Referral program to drive organic user growth
Voice search offers and dynamic pricing, powered by <a href="/digital-transformation-company">digital growth solutions</a>`;

// 17. CONCLUSION
const conclusion = `OLT Offers is a future-ready deals and coupon app solution successfully designed and developed by mTouch Labs. It combines geo-location intelligence, instant booking, merchant promotions, and seamless redemption into one user-friendly mobile platform.
If you are planning to launch a coupon app, local deals marketplace, offers booking platform, or merchant promotion app, mTouch Labs can help you build a scalable and high-performing solution.`;

// 6. TECHNOLOGY STACK
const tech_stack = ["Android", "iOS", "Flutter", "Node.js"];

// 18. FAQ
const faq_schema = [
  { question: "What is OLT Offers?", answer: "OLT Offers is a location-based deals and coupon mobile app that helps users discover, book, and redeem nearby offers from local businesses." },
  { question: "Who developed OLT Offers?", answer: "OLT Offers was designed and developed by mTouch Labs, a mobile app development company specializing in scalable digital solutions." },
  { question: "What technologies were used to build OLT Offers?", answer: "OLT Offers was built using Android, iOS, Flutter, and Node.js — a stack chosen to ensure scalability, performance, and a seamless cross-platform user experience." },
  { question: "Can users book offers without payment?", answer: "Yes, users can instantly book available offers without any upfront payment and redeem them directly at participating stores." },
  { question: "Which platforms is OLT Offers available on?", answer: "OLT Offers is available on Android via the Google Play Store, with an iOS-ready architecture." },
  { question: "What businesses can use a platform like OLT Offers?", answer: "Restaurants, salons, retail stores, supermarkets, entertainment venues, and local service businesses can use a platform like OLT Offers to attract nearby customers." },
  { question: "Can mTouch Labs build a similar deals and coupon app?", answer: "Yes, mTouch Labs develops custom deals apps, coupon platforms, marketplace apps, and location-based mobile applications for startups and enterprises." },
];

// SEO META
const meta_title = "OLT Offers Case Study | mTouch Labs";
const meta_description =
  "Explore how mTouch Labs developed OLT Offers, a location-based deals and coupon app with nearby offers, instant booking, and smooth redemption.";
const canonical_url = `https://www.mtouchlabs.com/portfolio/${SLUG}`;
const og_title = "OLT Offers Case Study | mTouch Labs";
const og_description =
  "See how mTouch Labs built OLT Offers, a smart coupon and local deals mobile app for users and merchants.";
const play_store_url =
  "https://play.google.com/store/apps/details?id=com.user.olt&pcampaignid=web_share";

// ─── RUN ───────────────────────────────────────────────────────────────────
async function ensureColumns() {
  console.log("→ Ensuring optional content columns exist…");
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
  console.log(`→ Publishing portfolio: ${SLUG}…`);
  await ensureColumns();

  // 1) Look for an existing row by canonical slug OR any old variant
  const candidates = await sql`
    SELECT id, slug FROM portfolios
    WHERE slug = ${SLUG} OR slug = ANY(${OLD_SLUGS})
    ORDER BY (slug = ${SLUG}) DESC, created_at ASC
  `;

  let targetId = null;
  if (candidates.length > 0) {
    targetId = candidates[0].id;
    console.log(`   Found ${candidates.length} candidate row(s). Keeping id=${targetId} as canonical.`);
    // Delete duplicates on old slugs so only one canonical row remains.
    const dupIds = candidates.filter((c) => c.id !== targetId).map((c) => c.id);
    if (dupIds.length > 0) {
      await sql`DELETE FROM portfolios WHERE id = ANY(${dupIds})`;
      console.log(`   🗑  Removed ${dupIds.length} duplicate row(s) on old slugs.`);
    }
  }

  if (targetId === null) {
    console.log("→ No existing row — inserting new portfolio…");
    const inserted = await sql`INSERT INTO portfolios (
      slug, title, subtitle, description, category, tags, image, og_image,
      about, requirements, business_impact,
      features, tech_stack, color_palette, typography, faq_schema,
      app_screens, web_screens, play_store_url,
      meta_title, meta_description, canonical_url, og_title, og_description,
      industry_background, objectives, strategy_approach, solution_architecture,
      ui_ux_highlights, development_process, security_performance,
      future_scope, conclusion,
      published, created_at
    ) VALUES (
      ${SLUG}, ${title}, ${subtitle}, ${description}, ${category}, ${tags}, ${IMAGE}, ${OG_IMAGE},
      ${about}, ${requirements}, ${business_impact},
      ${JSON.stringify(features)}, ${JSON.stringify(tech_stack)},
      ${JSON.stringify(color_palette)}, ${JSON.stringify(typography)},
      ${JSON.stringify(faq_schema)},
      ${JSON.stringify(APP_SCREENS)}, ${JSON.stringify(WEB_SCREENS)}, ${play_store_url},
      ${meta_title}, ${meta_description}, ${canonical_url}, ${og_title}, ${og_description},
      ${industry_background}, ${objectives}, ${strategy_approach}, ${solution_architecture},
      ${ui_ux_highlights}, ${development_process}, ${security_performance},
      ${future_scope}, ${conclusion},
      true, NOW()
    ) RETURNING id`;
    targetId = inserted[0].id;
    console.log(`   ✨ Inserted new row id=${targetId}.`);
  } else {
    console.log(`→ Updating row id=${targetId}…`);
    await sql`UPDATE portfolios SET
      slug = ${SLUG},
      title = ${title},
      subtitle = ${subtitle},
      description = ${description},
      category = ${category},
      tags = ${tags},
      image = ${IMAGE},
      og_image = ${OG_IMAGE},
      about = ${about},
      requirements = ${requirements},
      business_impact = ${business_impact},
      features = ${JSON.stringify(features)},
      tech_stack = ${JSON.stringify(tech_stack)},
      color_palette = ${JSON.stringify(color_palette)},
      typography = ${JSON.stringify(typography)},
      faq_schema = ${JSON.stringify(faq_schema)},
      app_screens = ${JSON.stringify(APP_SCREENS)},
      web_screens = ${JSON.stringify(WEB_SCREENS)},
      play_store_url = ${play_store_url},
      meta_title = ${meta_title},
      meta_description = ${meta_description},
      canonical_url = ${canonical_url},
      og_title = ${og_title},
      og_description = ${og_description},
      industry_background = ${industry_background},
      objectives = ${objectives},
      strategy_approach = ${strategy_approach},
      solution_architecture = ${solution_architecture},
      ui_ux_highlights = ${ui_ux_highlights},
      development_process = ${development_process},
      security_performance = ${security_performance},
      future_scope = ${future_scope},
      conclusion = ${conclusion},
      published = true
    WHERE id = ${targetId}`;
    console.log("   ♻️  Updated existing row.");
  }

  console.log(`✅ Live at: https://www.mtouchlabs.com/portfolio/${SLUG}`);
  console.log(`   App screens: ${APP_SCREENS.length}  |  Web screens: ${WEB_SCREENS.length}`);
  console.log("   Old slugs redirected via next.config.js: otloffers-mobile-app-development, oltoffers-mobile-app-development, olt-offers");
}

main().catch((err) => {
  console.error("❌ Failed:", err);
  process.exit(1);
});
