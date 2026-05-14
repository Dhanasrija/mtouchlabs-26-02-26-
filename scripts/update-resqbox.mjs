// scripts/update-resqbox.mjs
// Publishes / updates the ResqBox portfolio at /portfolio/resqbox.
//
// Run:  node scripts/update-resqbox.mjs

import { neon } from "@neondatabase/serverless";
import { config } from "dotenv";

config({ path: ".env.local" });

const DATABASE_URL = process.env.DATABASE_URL;
if (!DATABASE_URL) {
  console.error("DATABASE_URL is not set in .env.local");
  process.exit(1);
}

const sql = neon(DATABASE_URL);

const SLUG = "resqbox";

// ─── IMAGES ────────────────────────────────────────────────────────────────
const IMAGE = "/images/portfolio/resqbox/ResQBox.webp";
const OG_IMAGE = "/images/portfolio/resqbox/ResQBox.webp";

const APP_SCREENS = [
  "/images/portfolio/resqbox/app-1.png",
  "/images/portfolio/resqbox/app-2.png",
  "/images/portfolio/resqbox/app-3.png",
  "/images/portfolio/resqbox/app-4.png",
];
const WEB_SCREENS = [];

// ─── CORE FIELDS ───────────────────────────────────────────────────────────
const title = "ResqBox – Sustainable Food Rescue App";
const subtitle =
  "A food rescue and surplus meal ordering platform that connects users with discounted surplus food from nearby restaurants — built by mTouch Labs.";
const description =
  "ResqBox is a location-based food rescue and surplus meal ordering platform developed by mTouch Labs that helps reduce food wastage by connecting users with discounted surplus food from nearby restaurants.";
const category = "Online Services";
const tags =
  "ResqBox, food rescue app, surplus food, sustainable food, food waste reduction, hyperlocal food ordering, mTouch Labs";

// 1. PROJECT OVERVIEW (internal link)
const about = `ResqBox was developed by mTouch Labs, a leading <a href="/mobile-app-development-company">mobile app development company</a>, to tackle one of the biggest challenges in the food industry: restaurant food wastage. The platform provides users with access to discounted surplus food while helping restaurants recover value from unsold inventory.
The application promotes sustainable food consumption by transforming excess meals into affordable food opportunities for nearby customers.`;

// 2. INDUSTRY BACKGROUND (internal link)
const industry_background = `Food wastage has become a growing concern globally, especially in the restaurant and hospitality industry. Restaurants frequently discard unsold meals and surplus food, leading to operational losses and environmental impact.
At the same time, consumers increasingly look for affordable dining options and eco-conscious purchasing choices.
Modern <a href="/food-delivery-app-development-company">food delivery app development</a> has evolved to include sustainability-driven models, and ResqBox bridges this gap by creating a digital food rescue marketplace focused on sustainability and convenience.`;

// 3. BUSINESS CHALLENGES
const requirements = `Difficulty finding affordable quality meals nearby
Limited visibility into surplus food offers
Lack of sustainable food ordering platforms
Limited transparency in food pricing
Limited access to discounted restaurant meals
Daily food wastage from unsold restaurant inventory
Revenue loss for restaurants due to surplus meals
Limited channels for promoting excess food
Difficulty reaching eco-conscious customers
Managing last-minute food availability`;

// 4. OBJECTIVES
const objectives = `Reduce restaurant food waste through digital rescue boxes
Provide affordable meal options for nearby customers
Promote sustainable consumption habits
Help restaurants recover surplus inventory value
Create a seamless ordering experience with transparent pricing
Location-based food discovery
Discounted meal listings and restaurant profile pages
ResQBox ordering functionality with cart and checkout
Pickup time scheduling with wishlist and favorites
Order tracking system across the customer journey`;

// 5. STRATEGY & APPROACH
const strategy_approach = `At mTouch Labs, we approached ResqBox as both a sustainability initiative and a modern digital commerce platform.
Research: Food waste market analysis, restaurant inventory workflow research, user affordability behavior analysis, and sustainable commerce trend study.
Design: Eco-conscious UI/UX design with high-visibility savings indicators and minimal checkout friction.
Development: Scalable backend architecture, real-time food availability updates, geo-location integration, and cross-platform mobile development.
Performance: Continuous optimization for fast listings and reliable pickup workflows.`;

// 7. SOLUTION ARCHITECTURE (internal links)
const solution_architecture = `ResqBox was built with a modular architecture using <a href="/flutter-app-development-company">Flutter app development</a> and <a href="/react-native-app-development-company">React Native app development</a> for true cross-platform reach.
Customer Application: Nearby food discovery, discounted food browsing, ResQBox ordering flow, cart and checkout system, and pickup scheduling.
Restaurant Panel: Surplus inventory uploads, pricing management, availability controls, and pickup coordination.
Admin Dashboard: User management, restaurant approvals, reports and analytics, and platform moderation.`;

// 8. KEY FEATURES
const features = [
  { title: "Location-Based Food Discovery", description: "Detects user location and displays nearby restaurants offering discounted surplus meals and food rescue boxes." },
  { title: "Discounted Food Listings", description: "Meal combos, surplus dishes, sweet boxes, and discounted pricing comparison." },
  { title: "Restaurant Profiles", description: "Detailed pages with ratings, distance, pickup information, and map integration." },
  { title: "ResQBox Concept", description: "Restaurants can create food rescue boxes of unsold meals or surplus dishes available in limited quantities." },
  { title: "Cart & Checkout", description: "Add items to cart, review transparent pricing, and complete orders quickly." },
  { title: "Pickup Time Management", description: "Pickup scheduling to ensure food freshness and smoother logistics." },
  { title: "Product Details", description: "Veg / Non-veg indicators, food descriptions, ratings and reviews, and availability details." },
  { title: "Wishlist & Favorites", description: "Save favorite restaurants and rescue boxes for faster repeat orders." },
  { title: "Sustainability Messaging", description: "Encourages responsible consumption and highlights environmental impact reduction." },
];

// 9. UI/UX HIGHLIGHTS (internal link)
const ui_ux_highlights = `Sustainability-inspired visual design crafted by our <a href="/ui-ux-design-company">UI/UX design experts</a>
Clean discounted pricing cards and minimal checkout distractions
Mobile-first layouts with high-visibility savings indicators
Fast food discovery experience and easy pickup scheduling
Smooth ordering flow with reduced purchase friction
Improved repeat engagement through clear value cues`;

// 11. COLOR PALETTE
const color_palette = [
  { hex: "#F47923", name: "Orange (Primary)" },
  { hex: "#00D341", name: "Green (Secondary)" },
  { hex: "#111827", name: "Charcoal (Text)" },
  { hex: "#4B5563", name: "Slate (Gray)" },
  { hex: "#FFFFFF", name: "White" },
  { hex: "#F1F4FC", name: "Snow (BG)" },
  { hex: "#E1E1E1", name: "Silver (Stroke)" },
];

// 12. TYPOGRAPHY
const typography = { font: "SF Pro / Inter", weight: "Modern & Clean" };

// 13. DEVELOPMENT PROCESS
const development_process = `Requirement Analysis: Aligning sustainability goals with user expectations
Food Waste Market Research: Surplus food trends and restaurant pain points
Wireframing: Low-fidelity sketches for every key ordering flow
UI/UX Design: High-fidelity, eco-conscious mobile-first design
Backend Architecture: API-led services for scale
Mobile App Development: Cross-platform builds for iOS and Android
Restaurant Module Development: Inventory uploads and availability controls
QA Testing: Automated and manual testing across devices
Performance Optimization: Image, network, and search query tuning
Deployment: Production rollout to app stores and cloud infrastructure
Maintenance & Scaling: Ongoing monitoring, updates, and feature evolution`;

// 14. SECURITY & PERFORMANCE
const security_performance = `Secure authentication for verified user access
Encrypted API communication for orders and personal info
Restaurant verification workflows before listing
Safe user data handling with audit trails
Secure cloud infrastructure with role-based access
Fast food listing loading with optimized image delivery
Real-time availability updates and scalable backend systems
Smooth order processing under peak loads`;

// 15. RESULTS & IMPACT
const business_impact = `Affordable Meal Access: Customers get quality meals at meaningfully lower prices
Sustainable Purchasing Options: Eco-conscious consumers can act on values daily
Easy Local Food Discovery: Smart search surfaces nearby rescue boxes quickly
Better Dining Savings: Transparent pricing helps users compare and save
Reduced Food Wastage: Restaurants divert surplus from landfill to customers
Recovery of Surplus Inventory Value: Unsold meals become revenue instead of loss
Improved Customer Reach: Restaurants tap into a new sustainability-driven audience
Enhanced Sustainability Positioning: Restaurants signal eco-friendly values in their brand`;

// 16. FUTURE SCOPE (internal link)
const future_scope = `AI-powered food recommendations based on past rescue purchases
Subscription rescue boxes for daily / weekly orders
Carbon savings tracking and personal sustainability dashboard
Loyalty rewards system for repeat rescuers
Inventory forecasting for restaurants
Donation integrations with local food banks
Referral programs to drive organic growth, powered by <a href="/custom-software-development-company">custom software development services</a>`;

// 17. CONCLUSION (internal link)
const conclusion = `ResqBox is a scalable food rescue and surplus meal ordering platform successfully developed by mTouch Labs. The application combines sustainability, affordability, and convenience into a modern digital commerce solution.
If you are planning to <a href="/contact-us">build a similar food rescue app</a>, surplus inventory marketplace, or hyperlocal food ordering app, mTouch Labs can develop a tailored solution aligned with your business goals.`;

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
  { question: "What is ResqBox?", answer: "ResqBox is a sustainable food rescue platform that helps users discover discounted surplus food from nearby restaurants." },
  { question: "Who developed ResqBox?", answer: "ResqBox was designed and developed by mTouch Labs, a mobile app development company specializing in scalable digital solutions." },
  { question: "How does the ResQBox feature work?", answer: "Restaurants create rescue boxes containing surplus or unsold meals, which users can purchase at discounted prices before they go to waste." },
  { question: "Does ResqBox support pickup scheduling?", answer: "Yes, users can select pickup time windows to ensure smoother order collection and food freshness." },
  { question: "Can mTouch Labs build a similar food rescue platform?", answer: "Yes, mTouch Labs develops custom food delivery apps, surplus inventory platforms, hyperlocal ordering systems, and sustainable commerce solutions." },
];

// SEO META
const meta_title = "ResqBox | Sustainable Food Rescue App Case Study | mTouch Labs";
const meta_description =
  "Explore how mTouch Labs developed ResqBox, a food rescue and surplus meal ordering app focused on sustainability and affordable dining.";
const canonical_url = `https://www.mtouchlabs.com/portfolio/${SLUG}`;
const og_title = "ResqBox | Sustainable Food Rescue App Case Study | mTouch Labs";
const og_description =
  "Discover ResqBox, a food rescue and surplus meal ordering platform developed by mTouch Labs.";

// ─── RUN ───────────────────────────────────────────────────────────────────
async function ensureColumns() {
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
    await sql`UPDATE portfolios SET
      title = ${title}, subtitle = ${subtitle}, description = ${description},
      category = ${category}, tags = ${tags}, image = ${IMAGE}, og_image = ${OG_IMAGE},
      about = ${about}, requirements = ${requirements}, business_impact = ${business_impact},
      features = ${JSON.stringify(features)}, tech_stack = ${JSON.stringify(tech_stack)},
      color_palette = ${JSON.stringify(color_palette)}, typography = ${JSON.stringify(typography)},
      faq_schema = ${JSON.stringify(faq_schema)},
      app_screens = ${JSON.stringify(APP_SCREENS)}, web_screens = ${JSON.stringify(WEB_SCREENS)},
      meta_title = ${meta_title}, meta_description = ${meta_description},
      canonical_url = ${canonical_url}, og_title = ${og_title}, og_description = ${og_description},
      industry_background = ${industry_background}, objectives = ${objectives},
      strategy_approach = ${strategy_approach}, solution_architecture = ${solution_architecture},
      ui_ux_highlights = ${ui_ux_highlights}, development_process = ${development_process},
      security_performance = ${security_performance},
      future_scope = ${future_scope}, conclusion = ${conclusion},
      published = true
    WHERE slug = ${SLUG}`;
    console.log("   ♻️  Updated existing row.");
  }

  console.log(`✅ Live at: https://www.mtouchlabs.com/portfolio/${SLUG}`);
}

main().catch((err) => { console.error("❌ Failed:", err); process.exit(1); });
