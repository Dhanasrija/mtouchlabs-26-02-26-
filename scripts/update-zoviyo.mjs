// scripts/update-zoviyo.mjs
// Publishes / updates the Zoviyo portfolio at /portfolio/zoviyo.
//
// Run:  node scripts/update-zoviyo.mjs

import { neon } from "@neondatabase/serverless";
import { config } from "dotenv";

config({ path: ".env.local" });

const DATABASE_URL = process.env.DATABASE_URL;
if (!DATABASE_URL) {
  console.error("DATABASE_URL is not set in .env.local");
  process.exit(1);
}

const sql = neon(DATABASE_URL);

const SLUG = "zoviyo";

// ─── IMAGES ────────────────────────────────────────────────────────────────
const IMAGE = "/images/portfolio/zoviyo/Zoviyo.webp";
const OG_IMAGE = "/images/portfolio/zoviyo/Zoviyo.webp";

const APP_SCREENS = [
  "/images/portfolio/zoviyo/app-1.png",
  "/images/portfolio/zoviyo/app-2.png",
  "/images/portfolio/zoviyo/app-3.png",
  "/images/portfolio/zoviyo/app-4.png",
];
const WEB_SCREENS = [];

// ─── CORE FIELDS ───────────────────────────────────────────────────────────
const title = "Zoviyo – Home Kitchen & Food Delivery App";
const subtitle =
  "A food discovery and ordering platform that connects users with nearby home kitchens and local restaurants — built by mTouch Labs.";
const description =
  "Zoviyo is a modern food discovery and ordering platform developed by mTouch Labs that connects users with nearby home kitchens and local restaurants. The platform enables customers to explore menus, discover regional cuisines, place food orders, and enjoy fresh meals delivered to their doorstep or prepared for pickup.";
const category = "Online Services";
const tags =
  "Zoviyo, food delivery, home kitchen, food ordering app, hyperlocal food, restaurant delivery, mTouch Labs";

// 1. PROJECT OVERVIEW (internal link)
const about = `Zoviyo was developed by mTouch Labs, a <a href="/mobile-app-development-company">mobile app development company</a>, to simplify local food ordering while supporting small kitchen owners and independent food entrepreneurs. The application enables users to discover nearby kitchens, browse menus, and order fresh homemade meals through a modern mobile-first experience.
The platform focuses on convenience, transparency, and helping local food vendors build a stronger digital presence in competitive markets.`;

// 2. INDUSTRY BACKGROUND (internal link)
const industry_background = `The online <a href="/food-delivery-app-development-company">food delivery app development</a> industry has expanded rapidly as customers increasingly rely on mobile applications for meal ordering. Along with restaurant delivery, demand for homemade food, local cuisines, and healthier meal options has grown significantly.
Many home-based kitchens struggle with customer acquisition, online visibility, and order management. Zoviyo addresses these challenges by creating a scalable platform that connects nearby customers with trusted local food vendors.`;

// 3. BUSINESS CHALLENGES
const requirements = `Difficulty discovering nearby homemade food options
Limited trust in home-based kitchens
Complicated ordering experiences on outdated apps
Lack of regional cuisine discovery platforms
Limited transparency in food ordering and preparation
Limited online visibility for home kitchens
Dependence on social media for customer reach
Manual order management issues for vendors
Difficulty scaling local operations digitally
Competition from larger delivery marketplaces`;

// 4. OBJECTIVES
const objectives = `Promote local home kitchens digitally
Provide seamless food ordering experiences
Improve customer convenience and trust
Increase kitchen visibility and engagement
Enable efficient order management for vendors
Location-based food discovery
Kitchen and restaurant listings
Search and filtering system
Menu browsing experience
Cart, checkout, and order tracking with favorites/wishlist`;

// 5. STRATEGY & APPROACH
const strategy_approach = `At mTouch Labs, we approached Zoviyo as a community-driven food commerce solution focused on local discovery, customer trust, and ordering simplicity.
Research: Food ordering behavior analysis, regional cuisine demand research, vendor workflow planning, and customer journey optimization.
Design: Mobile-first user interface design with food-focused layouts and clean kitchen cards.
Development: Scalable backend architecture, real-time order management system, and cross-platform app development.
Performance: Continuous optimization for fast menu loading and reliable order processing.`;

// 7. SOLUTION ARCHITECTURE (internal links via Flutter / React Native)
const solution_architecture = `The Zoviyo platform was built with a modular architecture using <a href="/flutter-app-development-company">Flutter app development</a> and <a href="/react-native-app-development-company">React Native app development</a> for true cross-platform reach.
Customer Application: Food discovery module, menu browsing system, cart and checkout flow, order tracking functionality, and favorites management.
Vendor Panel: Kitchen profile management, menu updates, order acceptance, and availability controls.
Admin Dashboard: User management, vendor approvals, reports and analytics, and platform moderation.`;

// 8. KEY FEATURES
const features = [
  { title: "Location-Based Food Discovery", description: "Automatically detects user location and displays nearby kitchens and restaurants." },
  { title: "Home Kitchen Listings", description: "Dedicated profiles for homemade food vendors and local restaurants with ratings, images, cuisine details, and location info." },
  { title: "Category-Based Browsing", description: "Veg / Non-Veg categories, regional cuisine browsing, meal categories, and special dish discovery." },
  { title: "Smart Search & Filters", description: "Users can search dishes, cuisines, and kitchens using advanced filters." },
  { title: "Interactive Menu Experience", description: "Dish names and pricing, food images and descriptions, availability info, and transparent menu structure." },
  { title: "Cart & Checkout", description: "Simple order placement with support for delivery and pickup options." },
  { title: "Order Tracking", description: "Track ongoing and completed orders in real time through the My Orders section." },
  { title: "Favorites & Wishlist", description: "Save preferred kitchens and meals for quick repeat ordering." },
];

// 9. UI/UX HIGHLIGHTS (internal link)
const ui_ux_highlights = `Food-focused visual layouts crafted by our <a href="/ui-ux-design-company">UI/UX design experts</a>
Clean and organized kitchen cards with readable menu presentation
Modern mobile-first design with high-visibility CTA buttons
Easy kitchen discovery and fast menu browsing
Reduced checkout friction with a smooth repeat ordering flow
Simple navigation experience optimized for repeat usage`;

// 11. COLOR PALETTE
const color_palette = [
  { hex: "#EB7712", name: "Amber" },
  { hex: "#171717", name: "Jet Black" },
  { hex: "#7A7A7A", name: "Gray" },
  { hex: "#FFFFFF", name: "White" },
  { hex: "#F3F4F8", name: "Cloud" },
];

// 12. TYPOGRAPHY
const typography = { font: "Poppins", weight: "Modern & Friendly" };

// 13. DEVELOPMENT PROCESS
const development_process = `Requirement Analysis: Aligning business goals with user expectations
Market Research: Food category trends and competitor benchmarking
Wireframing: Low-fidelity sketches for every key ordering flow
UI/UX Design: High-fidelity, food-focused mobile-first design
Backend Development: API-led architecture for scale
Mobile App Development: Cross-platform builds for iOS and Android
Vendor Panel Development: Menu, order, and availability management
Testing & QA: Automated and manual testing across devices
Performance Optimization: Image, network, and search query tuning
Deployment: Production rollout to app stores and cloud infrastructure
Maintenance & Scaling: Ongoing monitoring, updates, and feature evolution`;

// 14. SECURITY & PERFORMANCE
const security_performance = `Secure authentication for verified user access
Encrypted API communication for orders and personal info
Vendor verification workflows before listing
Safe user data handling with audit trails
Secure cloud architecture with role-based access
Fast menu loading with optimized image rendering
Efficient search functionality for instant results
Scalable backend infrastructure with smooth order processing`;

// 15. RESULTS & IMPACT
const business_impact = `Easy Access to Homemade Meals: Customers get authentic, locally-prepared food at their fingertips
Improved Local Food Discovery: Smart search and categories surface the right kitchens quickly
Convenient Mobile Ordering: Streamlined flow reduces clicks to purchase
Regional Cuisine Accessibility: Customers explore food they couldn't easily find before
Improved Digital Visibility: Home kitchens gain a professional online presence
Better Customer Reach: Vendors connect with nearby customers without ad spend
Increased Order Opportunities: Reorder flows and notifications drive repeat business
Simplified Order Handling: Vendor panel removes manual order chaos`;

// 16. FUTURE SCOPE (internal link)
const future_scope = `AI-powered food recommendations based on order history
Meal subscription plans for daily/weekly orders
Loyalty rewards system for repeat customers
Voice-based food search for hands-free ordering
Kitchen analytics dashboard for vendor insights
Referral programs to drive organic user growth
Multi-language support for regional markets, powered by <a href="/custom-software-development-company">custom software development services</a>`;

// 17. CONCLUSION (internal link)
const conclusion = `Zoviyo is a scalable home kitchen and food ordering mobile application successfully developed by mTouch Labs. The platform helps local kitchens grow digitally while providing customers with a smooth and trusted food ordering experience.
If you are planning to <a href="/contact-us">build a similar food delivery app</a>, home kitchen marketplace, or restaurant ordering platform, mTouch Labs can develop a tailored solution for your business requirements.`;

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
  { question: "What is Zoviyo?", answer: "Zoviyo is a location-based food discovery and ordering platform that connects users with nearby home kitchens and restaurants." },
  { question: "Who developed Zoviyo?", answer: "Zoviyo was designed and developed by mTouch Labs, a mobile app development company specializing in scalable digital solutions." },
  { question: "Can users order from home kitchens through Zoviyo?", answer: "Yes, users can browse local home kitchens, explore menus, and place food orders directly through the Zoviyo app." },
  { question: "Does Zoviyo support delivery and pickup options?", answer: "Yes, Zoviyo supports both doorstep delivery and pickup ordering options for customer convenience." },
  { question: "Can mTouch Labs build a similar food delivery platform?", answer: "Yes, mTouch Labs develops custom food delivery apps, restaurant ordering systems, home kitchen marketplaces, and hyperlocal commerce platforms." },
];

// SEO META
const meta_title = "Zoviyo | Home Kitchen Food Delivery App Case Study | mTouch Labs";
const meta_description =
  "Discover how mTouch Labs developed Zoviyo, a home kitchen and food delivery app with location-based discovery, ordering, and delivery features.";
const canonical_url = `https://www.mtouchlabs.com/portfolio/${SLUG}`;
const og_title = "Zoviyo | Home Kitchen Food Delivery App Case Study | mTouch Labs";
const og_description =
  "Explore Zoviyo, a food ordering and home kitchen delivery platform developed by mTouch Labs.";

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
