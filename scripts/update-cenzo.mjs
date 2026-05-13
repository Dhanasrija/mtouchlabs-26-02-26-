// scripts/update-cenzo.mjs
// Updates the Cenzo portfolio content in the Neon DB.
// Preserves all image fields (image, app_screens, web_screens, gallery_images, og_image).
//
// Run from project root:
//   node scripts/update-cenzo.mjs

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

// ─── CONTENT ───────────────────────────────────────────────────────────────
const title = "Cenzo – Grocery & Essentials Delivery App";
const subtitle =
  "A fast grocery and essentials delivery mobile app with smart ordering, cart management, live tracking, and doorstep delivery — built by mTouch Labs.";
const description =
  "Cenzo is a modern grocery and essentials delivery mobile app developed by mTouch Labs. It allows users to browse products, add items to cart, place orders, and receive fast doorstep delivery from nearby stores.";
const category = "Mobile App Development";
const tags =
  "Cenzo, grocery delivery app, essentials delivery, hyperlocal delivery, ecommerce mobile app, doorstep delivery, mTouch Labs";

// 1. PROJECT OVERVIEW → about
const about = `Cenzo is a modern grocery and essentials delivery mobile application developed by mTouch Labs to simplify everyday shopping. The platform allows users to browse products, add items to cart, place orders, and receive fast doorstep delivery from nearby stores.
The app was built to meet growing demand for instant convenience, helping users save time while giving local vendors a digital channel to expand sales and improve customer reach.
Cenzo is ideal for supermarkets, local grocery stores, fresh produce sellers, dairy shops, and household essentials retailers.`;

// 2. INDUSTRY BACKGROUND → industry_background
const industry_background = `Consumer shopping behavior has shifted rapidly toward digital convenience. Users increasingly prefer ordering groceries and household items online rather than spending time in physical stores.
Today's customers expect a quick ordering experience, fresh product availability, same-day or fast delivery, transparent pricing, easy reorder options, and reliable tracking.
At the same time, local businesses need affordable technology solutions to compete with large marketplaces.
Cenzo was created as a smart hyperlocal grocery delivery app solution for this evolving market.`;

// 3. BUSINESS CHALLENGES → requirements (newline-separated cards)
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

// 4. OBJECTIVES → objectives (newline-separated)
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

// 5. STRATEGY & APPROACH → strategy_approach
const strategy_approach = `At mTouch Labs, we used a user-first product strategy focused on retention and operational efficiency.
Research: Hyperlocal commerce market study, user buying behavior analysis, competitor benchmarking, and delivery pain point discovery.
Design: Clean navigation flows, fast repeat-purchase journeys, mobile-first cart optimization, and checkout simplification.
Development: Agile sprint execution, API-led architecture, real-time order system, and QA testing on multiple devices.
Launch Readiness: Scalable hosting setup, SEO portfolio presentation, analytics integration, and a growth roadmap.`;

// 7. SOLUTION ARCHITECTURE → solution_architecture
const solution_architecture = `The Cenzo platform was structured into modular systems for scale and reliability.
Customer App: Registration and onboarding, product discovery, cart and checkout, order history, and live order status.
Merchant Module: Product management, inventory visibility, order acceptance, and fulfillment management.
Delivery Logic: Address mapping, delivery assignment workflows, and ETA management for accurate timelines.
Admin Panel: User management, vendor controls, order reports, and promotional campaign settings.`;

// 8. KEY FEATURES → features (JSON array)
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

// 9. UI/UX HIGHLIGHTS → ui_ux_highlights
const ui_ux_highlights = `Product-first layouts with high-quality item cards
Clear pricing display and simple category navigation
Prominent checkout CTA to drive conversions
Reduced clicks to purchase for faster checkout
Fast reorder behavior for repeat customers
Smooth mobile browsing with easy cart editing
Frictionless order flow optimized for retention`;

// 11. COLOR PALETTE → color_palette
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
const typography = { font: "Nunito / Georgia / Roboto" };

// 13. DEVELOPMENT PROCESS → development_process (one per line, "Title: Description")
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

// 14. SECURITY & PERFORMANCE → security_performance
const security_performance = `Secure login systems for verified user access
Encrypted data transfer for orders and personal info
Safe checkout architecture with payment-ready modules
Admin role controls and granular permissions
Privacy-focused data handling practices
Fast product loading with optimized image delivery
Efficient search queries for instant results
Stable order processing under peak loads
Scalable cloud deployment for hyperlocal growth`;

// 15. RESULTS & IMPACT → business_impact
const business_impact = `Faster Grocery Shopping: Users save time with a streamlined ordering experience
Convenience from Home: Doorstep delivery for everyday essentials and groceries
Reliable Deliveries: Live tracking builds trust and predictable timelines
Better Product Discovery: Smart search and categories surface the right items quickly
Increased Online Orders: Merchants see measurable growth in digital sales
Better Customer Retention: Saved items, notifications, and reorder flows boost repeat usage
Wider Local Reach: Local stores reach more customers in their neighborhood
Improved Operational Efficiency: Vendors handle digital orders smoothly and at scale
Platform Impact: Cenzo helps transform traditional neighborhood stores into digital-first businesses`;

// 16. FUTURE SCOPE → future_scope
const future_scope = `Subscription grocery plans for regular household essentials
AI product recommendations based on purchase history
Voice search shopping for hands-free ordering
Scheduled deliveries for planned weekly groceries
Loyalty rewards and tiered customer benefits
Multi-vendor marketplace expansion with new categories
Smart inventory sync between merchants and the app
Referral programs to drive organic user growth`;

// 17. CONCLUSION → conclusion
const conclusion = `Cenzo is a next-generation grocery delivery mobile app successfully designed and developed by mTouch Labs. It combines convenience, speed, modern UI, and scalable commerce features into one powerful platform.
If you are planning to launch a grocery delivery app, hyperlocal marketplace, ecommerce delivery app, or essentials ordering platform, mTouch Labs can build a custom solution tailored to your business.`;

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
    question: "What is Cenzo?",
    answer: "Cenzo is a grocery and essentials delivery mobile app that allows users to browse products, place orders, and receive fast doorstep delivery from nearby stores.",
  },
  {
    question: "Who developed Cenzo?",
    answer: "Cenzo was designed and developed by mTouch Labs, a mobile app development company specializing in scalable digital solutions.",
  },
  {
    question: "What products can users order on Cenzo?",
    answer: "Users can order groceries, fruits, vegetables, dairy products, personal care items, and household essentials through the Cenzo app.",
  },
  {
    question: "Does Cenzo support live order tracking?",
    answer: "Yes, Cenzo allows users to track order status from placement to delivery with real-time updates.",
  },
  {
    question: "Can mTouch Labs build a similar grocery delivery app?",
    answer: "Yes, mTouch Labs develops custom grocery delivery apps, hyperlocal ecommerce platforms, and on-demand mobile applications for startups and enterprises.",
  },
];

// SEO META
const meta_title = "Cenzo Case Study | Grocery Delivery App by mTouch Labs";
const meta_description =
  "Discover how mTouch Labs built Cenzo, a grocery and essentials delivery app with fast ordering, cart management, live tracking, and doorstep delivery.";
const canonical_url = "https://www.mtouchlabs.com/portfolio/cenzo";
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
  console.log("→ Checking Cenzo row…");
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

  console.log("Cenzo updated successfully.");
  console.log("Images preserved (image, og_image, app_screens, web_screens, gallery_images were NOT modified).");
  console.log("Visit: https://www.mtouchlabs.com/portfolio/cenzo");
}

main().catch((err) => {
  console.error("Update failed:", err);
  process.exit(1);
});
