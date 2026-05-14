// scripts/update-cenzo.mjs
// Publishes / updates the Cenzo portfolio at /portfolio/cenzo.
//
// Run:  node scripts/update-cenzo.mjs

import { neon } from "@neondatabase/serverless";
import { config } from "dotenv";

config({ path: ".env.local" });

const DATABASE_URL = process.env.DATABASE_URL;
if (!DATABASE_URL) {
  console.error("DATABASE_URL is not set in .env.local");
  process.exit(1);
}

const sql = neon(DATABASE_URL);

const SLUG = "cenzo";

// ─── IMAGES ────────────────────────────────────────────────────────────────
const IMAGE = "/images/portfolio/cenzo/Cenzo.webp";
const OG_IMAGE = "/images/portfolio/cenzo/Cenzo.webp";

const APP_SCREENS = [
  "/images/portfolio/cenzo/app-1.svg",
  "/images/portfolio/cenzo/app-2.svg",
  "/images/portfolio/cenzo/app-3.svg",
  "/images/portfolio/cenzo/app-4.svg",
  "/images/portfolio/cenzo/app-5.svg",
  "/images/portfolio/cenzo/app-6.svg",
  "/images/portfolio/cenzo/app-7.svg",
];

const WEB_SCREENS = [
  "/images/portfolio/cenzo/web-1.svg",
  "/images/portfolio/cenzo/web-2.svg",
  "/images/portfolio/cenzo/web-3.svg",
  "/images/portfolio/cenzo/web-4.svg",
  "/images/portfolio/cenzo/web-5.svg",
];

// ─── CORE FIELDS ───────────────────────────────────────────────────────────
const title = "Cenzo – Grocery & Essentials Delivery App";
const subtitle =
  "A fast grocery and essentials delivery mobile app with smart ordering, cart management, live tracking, and doorstep delivery — built by mTouch Labs.";
const description =
  "Cenzo is a modern grocery and essentials delivery mobile app developed by mTouch Labs. It allows users to browse products, add items to cart, place orders, and receive fast doorstep delivery from nearby stores.";
const category = "Ecommerce";
const tags =
  "Cenzo, grocery delivery app, essentials delivery, hyperlocal delivery, ecommerce mobile app, doorstep delivery, mTouch Labs";

// 1. PROJECT OVERVIEW → about (with internal links)
const about = `Cenzo is a modern <a href="/mobile-app-development-company">grocery delivery app developed by mTouch Labs</a> to simplify everyday shopping. The platform allows users to browse products, add items to cart, place orders, and receive fast doorstep delivery from nearby stores.
The app was built to meet growing demand for instant convenience, helping users save time while giving local vendors a digital channel to expand sales and improve customer reach — delivered as a <a href="/custom-software-development-company">scalable ecommerce solution</a>.
Cenzo is ideal for supermarkets, local grocery stores, fresh produce sellers, dairy shops, and household essentials retailers.`;

// 2. INDUSTRY BACKGROUND
const industry_background = `Consumer shopping behavior has shifted rapidly toward digital convenience. Users increasingly prefer ordering groceries and household items online rather than spending time in physical stores.
Today's customers expect a quick ordering experience, fresh product availability, same-day or fast delivery, transparent pricing, easy reorder options, and reliable tracking.
At the same time, local businesses need affordable technology solutions to compete with large marketplaces.
Cenzo was created as a smart hyperlocal grocery delivery app solution for this evolving market.`;

// 3. BUSINESS CHALLENGES
const requirements = `Busy lifestyles reducing time for store visits
Difficulty carrying multiple grocery items home
Need for urgent household product delivery
Poor user experience on outdated grocery apps
Lack of trust in delivery timelines
Limited online presence for local merchants
Dependency on walk-in customers for revenue
Low operational efficiency for small stores
Difficulty handling digital orders manually
High competition from national delivery apps`;

// 4. OBJECTIVES
const objectives = `Make grocery shopping faster and easier for end users
Offer organized digital product browsing across categories
Enable quick checkout and seamless order placement
Improve delivery efficiency for nearby stores
Help local stores grow online sales and brand reach
GPS-based store and product availability detection
Smart search, filters, and intuitive product categories
Cart management with secure checkout flow
Order tracking, notifications, and wishlist/saved items
Admin dashboard for operations, vendors, and reporting`;

// 5. STRATEGY & APPROACH
const strategy_approach = `At mTouch Labs, we used a user-first product strategy focused on retention and operational efficiency.
Research: Hyperlocal commerce market study, user buying behavior analysis, competitor benchmarking, and delivery pain point discovery.
Design: Clean navigation flows, fast repeat-purchase journeys, mobile-first cart optimization, and checkout simplification.
Development: Agile sprint execution, API-led architecture, real-time order system, and QA testing on multiple devices.
Launch Readiness: Scalable hosting setup, SEO portfolio presentation, analytics integration, and a growth roadmap.`;

// 7. SOLUTION ARCHITECTURE (with internal links for ecommerce + on-demand)
const solution_architecture = `The Cenzo platform was structured into modular systems for scale and reliability, following best practices of <a href="/ecommerce-app-development-company">modern ecommerce app development</a> and <a href="/on-demand-app-development-company">on-demand ordering platform</a> design.
Customer App: Registration and onboarding, product discovery, cart and checkout, order history, and live order status.
Merchant Module: Product management, inventory visibility, order acceptance, and fulfillment management.
Delivery Logic: Address mapping, delivery assignment workflows, and ETA management for accurate timelines.
Admin Panel: User management, vendor controls, order reports, and promotional campaign settings.`;

// 8. KEY FEATURES → features JSON
const features = [
  { title: "Location-Based Shopping", description: "Detects user location and shows available products from nearby stores." },
  { title: "Large Product Catalog", description: "Categories include fruits & vegetables, grocery staples, dairy, beauty & personal care, and household essentials." },
  { title: "Smart Search", description: "Quick product search with category filters and intuitive browsing." },
  { title: "Cart Management", description: "Add or remove items, update quantities, see real-time totals, and check out smoothly." },
  { title: "Fast Order Placement", description: "Minimal steps for quick order completion and repeat purchases." },
  { title: "Live Order Tracking", description: "Track status from Placed → Processing → Out for Delivery → Delivered." },
  { title: "Saved Items", description: "Store favorite or frequently purchased products for one-tap reorder." },
  { title: "Smart Notifications", description: "Order confirmations, delivery updates, and personalized offers & discounts." },
];

// 9. UI/UX HIGHLIGHTS (with internal link)
const ui_ux_highlights = `Product-first layouts with high-quality item cards for a <a href="/ui-ux-design-company">seamless shopping experience</a>
Clear pricing display and simple category navigation
Prominent checkout CTA to drive conversions
Reduced clicks to purchase for faster checkout
Fast reorder behavior for repeat customers
Smooth mobile browsing with easy cart editing
Frictionless order flow optimized for retention`;

// 11. COLOR PALETTE
const color_palette = [
  { hex: "#FD711A", name: "Carrot Orange" },
  { hex: "#F1F4FC", name: "Very Pale Blue" },
  { hex: "#777777", name: "Medium Gray" },
  { hex: "#F3F4F8", name: "Super Light Gray" },
  { hex: "#ECECEC", name: "Light Gray" },
  { hex: "#FFFFFF", name: "White" },
  { hex: "#191919", name: "Charcoal Black" },
];

// 12. TYPOGRAPHY
const typography = { font: "Nunito / Georgia / Roboto", weight: "Modern & Friendly" };

// 13. DEVELOPMENT PROCESS
const development_process = `Requirement Discovery: Understanding business goals, user needs, and success metrics
Feature Planning: Prioritizing high-impact features for MVP and beyond
Wireframing: Low-fidelity sketches for every key shopping flow
UI Design: High-fidelity, conversion-focused mobile-first design
Backend APIs: Scalable API-led architecture for products, orders, and users
Mobile Development: Cross-platform builds for iOS and Android
Payment & Tracking Integrations: Maps, notifications, and payment-ready modules
QA Testing: Automated and manual testing across devices and OS versions
Performance Tuning: Image, network, and search query optimization
Deployment: Production rollout to app stores and cloud infrastructure
Ongoing Enhancements: Continuous monitoring, updates, and feature evolution`;

// 14. SECURITY & PERFORMANCE
const security_performance = `Secure login systems for verified user access
Encrypted data transfer for orders and personal info
Safe checkout architecture with payment-ready modules
Admin role controls and granular permissions
Privacy-focused data handling practices
Fast product loading with optimized image delivery
Efficient search queries for instant results
Stable order processing under peak loads
Scalable cloud deployment for hyperlocal growth`;

// 15. RESULTS & IMPACT
const business_impact = `Faster Grocery Shopping: Users save time with a streamlined ordering experience
Convenience from Home: Doorstep delivery for everyday essentials and groceries
Reliable Deliveries: Live tracking builds trust and predictable timelines
Better Product Discovery: Smart search and categories surface the right items quickly
Increased Online Orders: Merchants see measurable growth in digital sales
Better Customer Retention: Saved items, notifications, and reorder flows boost repeat usage
Wider Local Reach: Local stores reach more customers in their neighborhood
Improved Operational Efficiency: Vendors handle digital orders smoothly and at scale
Platform Impact: Cenzo helps transform traditional neighborhood stores into digital-first businesses`;

// 16. FUTURE SCOPE
const future_scope = `Subscription grocery plans for regular household essentials
AI product recommendations based on purchase history
Voice search shopping for hands-free ordering
Scheduled deliveries for planned weekly groceries
Loyalty rewards and tiered customer benefits
Multi-vendor marketplace expansion with new categories
Smart inventory sync between merchants and the app
Referral programs to drive organic user growth`;

// 17. CONCLUSION (with internal link)
const conclusion = `Cenzo is a next-generation grocery delivery mobile app successfully designed and developed by mTouch Labs. It combines convenience, speed, modern UI, and scalable commerce features into one powerful platform.
If you are planning to <a href="/contact-us">build a similar grocery delivery app</a>, hyperlocal marketplace, ecommerce delivery app, or essentials ordering platform, mTouch Labs can build a custom solution tailored to your business.`;

// 6. TECHNOLOGY STACK (with internal links via the architecture text above)
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
  { question: "What is Cenzo?", answer: "Cenzo is a grocery and essentials delivery mobile app that allows users to browse products, place orders, and receive fast doorstep delivery from nearby stores." },
  { question: "Who developed Cenzo?", answer: "Cenzo was designed and developed by mTouch Labs, a mobile app development company specializing in scalable digital solutions." },
  { question: "What products can users order on Cenzo?", answer: "Users can order groceries, fruits, vegetables, dairy products, personal care items, and household essentials through the Cenzo app." },
  { question: "Does Cenzo support live order tracking?", answer: "Yes, Cenzo allows users to track order status from placement to delivery with real-time updates." },
  { question: "Can mTouch Labs build a similar grocery delivery app?", answer: "Yes, mTouch Labs develops custom grocery delivery apps, hyperlocal ecommerce platforms, and on-demand mobile applications for startups and enterprises." },
];

// SEO META
const meta_title = "Cenzo Case Study | Grocery Delivery App by mTouch Labs";
const meta_description =
  "Discover how mTouch Labs built Cenzo, a grocery and essentials delivery app with fast ordering, cart management, live tracking, and doorstep delivery.";
const canonical_url = `https://www.mtouchlabs.com/portfolio/${SLUG}`;
const og_title = "Cenzo Case Study | Grocery Delivery App by mTouch Labs";
const og_description =
  "See how mTouch Labs developed Cenzo, a fast grocery and essentials delivery mobile app.";

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

  const existing = await sql`SELECT id FROM portfolios WHERE slug = ${SLUG} LIMIT 1`;

  if (existing.length === 0) {
    console.log("→ No existing row — inserting new portfolio…");
    await sql`INSERT INTO portfolios (
      slug, title, subtitle, description, category, tags, image, og_image,
      about, requirements, business_impact,
      features, tech_stack, color_palette, typography, faq_schema,
      app_screens, web_screens,
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
      ${JSON.stringify(APP_SCREENS)}, ${JSON.stringify(WEB_SCREENS)},
      ${meta_title}, ${meta_description}, ${canonical_url}, ${og_title}, ${og_description},
      ${industry_background}, ${objectives}, ${strategy_approach}, ${solution_architecture},
      ${ui_ux_highlights}, ${development_process}, ${security_performance},
      ${future_scope}, ${conclusion},
      true, NOW()
    )`;
    console.log("   ✨ Inserted new portfolio row.");
  } else {
    console.log(`→ Updating existing row id=${existing[0].id}…`);
    await sql`UPDATE portfolios SET
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
    WHERE slug = ${SLUG}`;
    console.log("   ♻️  Updated existing row.");
  }

  console.log(`✅ Live at: https://www.mtouchlabs.com/portfolio/${SLUG}`);
  console.log(`   App screens: ${APP_SCREENS.length}  |  Web screens: ${WEB_SCREENS.length}`);
  console.log("   Internal links: /mobile-app-development-company, /custom-software-development-company, /ecommerce-app-development-company, /on-demand-app-development-company, /ui-ux-design-company, /contact-us");
}

main().catch((err) => {
  console.error("❌ Failed:", err);
  process.exit(1);
});
