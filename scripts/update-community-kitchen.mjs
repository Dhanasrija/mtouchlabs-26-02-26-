// scripts/update-community-kitchen.mjs
// Publishes / updates the Community Kitchen portfolio at /portfolio/community-kitchen.
//
// Run:  node scripts/update-community-kitchen.mjs

import { neon } from "@neondatabase/serverless";
import { config } from "dotenv";

config({ path: ".env.local" });

const DATABASE_URL = process.env.DATABASE_URL;
if (!DATABASE_URL) {
  console.error("DATABASE_URL is not set in .env.local");
  process.exit(1);
}

const sql = neon(DATABASE_URL);

const SLUG = "community-kitchen";

// ─── IMAGES ────────────────────────────────────────────────────────────────
const IMAGE = "/images/portfolio/communitykitchen/CommunityKitchen.webp";
const OG_IMAGE = "/images/portfolio/communitykitchen/CommunityKitchen.webp";

const APP_SCREENS = [
  "/images/portfolio/communitykitchen/app-1.png",
  "/images/portfolio/communitykitchen/app-2.png",
  "/images/portfolio/communitykitchen/app-3.png",
  "/images/portfolio/communitykitchen/app-4.png",
  "/images/portfolio/communitykitchen/app-5.png",
];
const WEB_SCREENS = [];

// ─── CORE FIELDS ───────────────────────────────────────────────────────────
const title = "Community Kitchen – Hyperlocal Home Chef Marketplace";
const subtitle =
  "A hyperlocal homemade meal marketplace that connects neighborhood home chefs with nearby users — built by mTouch Labs.";
const description =
  "Community Kitchen is a hyperlocal homemade meal marketplace developed by mTouch Labs that connects neighborhood home chefs with nearby users looking for fresh, authentic, and personalized food experiences.";
const category = "Online Services";
const tags =
  "Community Kitchen, home chef marketplace, hyperlocal food, community food platform, homemade meals, food marketplace, mTouch Labs";

// 1. PROJECT OVERVIEW (internal link)
const about = `Community Kitchen was developed by mTouch Labs, a leading <a href="/mobile-app-development-company">mobile app development company</a>, to help independent home chefs and neighborhood food creators build a digital presence within their local communities. The platform enables users to discover homemade meals, explore nearby food groups, and order freshly prepared dishes from trusted kitchens.
The application combines social interaction with food commerce, creating a more personalized and community-oriented dining experience compared to conventional food delivery apps.`;

// 2. INDUSTRY BACKGROUND
const industry_background = `Consumer interest in homemade meals and localized food experiences continues to grow rapidly. Users increasingly prefer healthier food choices, trusted local kitchens, and personalized dining experiences over generic restaurant ordering platforms.
At the same time, many home chefs struggle with customer acquisition, visibility, and operational management.
Community Kitchen addresses these challenges by creating a scalable hyperlocal food ecosystem focused on trust and engagement.`;

// 3. BUSINESS CHALLENGES
const requirements = `Difficulty finding trusted home chefs nearby
Limited visibility into homemade meal options
Lack of social engagement in food apps
Generic restaurant-focused ordering experiences
Limited transparency around local kitchens
Limited digital discoverability for home chefs
Difficulty reaching nearby customers
Manual order coordination workflows
Challenges managing menus dynamically
Lack of scalable operational tools for small kitchens`;

// 4. OBJECTIVES
const objectives = `Promote neighborhood home chefs digitally
Enable localized food discovery
Improve trust between users and kitchens
Create seamless ordering workflows
Build stronger community engagement
Location-based community discovery and joining system
Home chef listings with dynamic menu management
Real-time order tracking with delivery and pickup support
User interaction features and notifications/updates
Vendor controls for menu, orders, and availability`;

// 5. STRATEGY & APPROACH
const strategy_approach = `At mTouch Labs, we approached Community Kitchen as a community-powered homemade meal ecosystem rather than a conventional delivery application.
Research: Hyperlocal food behavior analysis, community engagement research, homemade meal demand studies, and user trust/interaction analysis.
Design: Community-first user experience and trust-focused kitchen profiles.
Development: Cross-platform mobile development, scalable backend architecture, and real-time order management.
Performance: Optimized for fast feeds, repeat ordering, and reliable hyperlocal coverage.`;

// 7. SOLUTION ARCHITECTURE (internal links)
const solution_architecture = `Community Kitchen was built using <a href="/flutter-app-development-company">Flutter app development</a> and <a href="/react-native-app-development-company">React Native app development</a>, structured into modular systems for scale.
User Application: Community discovery, home chef browsing, meal ordering workflows, order tracking system, and notifications & updates.
Home Chef Dashboard: Menu management, order handling, availability controls, and kitchen profile customization.
Community Layer: Community joining, food group participation, localized engagement workflows, and social interaction features.
Admin Dashboard: User moderation, kitchen approvals, reports & analytics, and community management.`;

// 8. KEY FEATURES
const features = [
  { title: "Hyperlocal Community Discovery", description: "Automatically detects nearby food communities and local kitchens based on user location." },
  { title: "Community-Based Engagement", description: "Join local food communities, explore neighborhood food groups, and connect with nearby home chefs." },
  { title: "Home Chef Profiles", description: "Detailed kitchen profiles include cuisine specialties, chef details, reviews, delivery options, and certifications." },
  { title: "Dynamic Menu Management", description: "Home chefs can add, edit, and update menu items with real-time pricing and availability." },
  { title: "Seamless Ordering Experience", description: "Place orders quickly with delivery and self-pickup support." },
  { title: "Order Tracking System", description: "Track ongoing and completed orders with real-time status updates." },
  { title: "Personalized Interaction", description: "Users can directly interact with kitchen owners for a more personalized ordering experience." },
  { title: "Smart Search & Discovery", description: "Search home chefs, cuisines, dishes, and nearby food communities easily." },
  { title: "Real-Time Notifications", description: "Updates for order progress, community activity, and new kitchen additions." },
];

// 9. UI/UX HIGHLIGHTS (internal link)
const ui_ux_highlights = `Food-centric visual layouts crafted by our <a href="/ui-ux-design-company">UI/UX design experts</a>
Community-focused navigation and trust-building kitchen cards
Mobile-first user interface with minimal ordering friction
Easy local food discovery and improved community participation
Faster repeat ordering with better engagement retention
Personalized user experiences across home chefs and communities`;

// 11. COLOR PALETTE
const color_palette = [
  { hex: "#D2561A", name: "Burnt Orange" },
  { hex: "#EB7712", name: "Amber" },
  { hex: "#212121", name: "Onyx" },
  { hex: "#777777", name: "Steel Gray" },
  { hex: "#DDDDDD", name: "Light Gray" },
];

// 12. TYPOGRAPHY
const typography = { font: "Manrope", weight: "Modern & Friendly" };

// 13. DEVELOPMENT PROCESS
const development_process = `Requirement Analysis: Aligning business goals with community-driven food experiences
Hyperlocal Market Research: Local food behavior and community engagement trends
UX Wireframing: Low-fidelity sketches for every key ordering and community flow
UI Design: High-fidelity, food-centric mobile-first design
Backend Architecture: API-led scalable services for users, chefs, and communities
Mobile App Development: Cross-platform builds for iOS and Android
Community Feature Integration: Groups, feeds, and chef interactions
QA Testing: Automated and manual testing across devices and OS versions
Performance Optimization: Image, network, and feed query tuning
Deployment: Production rollout to app stores and cloud infrastructure
Ongoing Enhancements: Continuous monitoring, updates, and new feature evolution`;

// 14. SECURITY & PERFORMANCE
const security_performance = `Secure authentication for verified user access
Encrypted API communication between app and backend
Kitchen verification workflows before listing
Safe user data handling with audit trails
Secure cloud infrastructure with role-based access
Fast community feed loading with optimized image rendering
Real-time order updates and scalable backend systems
Smooth interaction workflows under peak loads`;

// 15. RESULTS & IMPACT
const business_impact = `Access to Authentic Homemade Meals: Users discover food they couldn't easily find before
Stronger Local Food Discovery: Smart search and communities surface neighborhood kitchens
Community-Driven Experiences: Users build relationships, not just transactions
Personalized Meal Ordering: Chef interaction makes ordering feel human
Improved Digital Visibility: Home chefs get a professional online presence
Better Customer Relationships: Direct chat and reviews build trust
Simplified Order Management: Vendor dashboard removes manual order chaos
Community-Based Business Growth: Repeat orders within neighborhoods drive sustainable growth`;

// 16. FUTURE SCOPE (internal links)
const future_scope = `Community meal subscriptions for daily/weekly orders
AI-powered food recommendations
Local chef collaboration spaces and joint menus
Social recipe sharing and food stories
Voice-based food discovery
Community loyalty systems
Regional language support, powered by <a href="/custom-software-development-company">custom software development services</a> and <a href="/on-demand-app-development-company">hyperlocal app development solutions</a>`;

// 17. CONCLUSION (internal link)
const conclusion = `Community Kitchen is a scalable hyperlocal home chef marketplace successfully developed by mTouch Labs. By combining homemade meal discovery, social interaction, and localized food commerce, the platform creates a trusted ecosystem for neighborhood food communities.
If you are planning to <a href="/contact-us">build a similar community food platform</a>, home chef marketplace, or hyperlocal meal ordering application, mTouch Labs can develop a custom digital solution tailored to your business goals.`;

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
  { question: "What is Community Kitchen?", answer: "Community Kitchen is a hyperlocal homemade meal marketplace that connects users with nearby home chefs and local food communities." },
  { question: "Who developed Community Kitchen?", answer: "Community Kitchen was designed and developed by mTouch Labs, a mobile app development company specializing in scalable digital platforms." },
  { question: "Can users join local food communities in Community Kitchen?", answer: "Yes, users can join nearby food communities, discover local food groups, and interact with neighborhood home chefs." },
  { question: "Does Community Kitchen support delivery and self-pickup?", answer: "Yes, the platform supports both doorstep delivery and self-pickup ordering options." },
  { question: "Can mTouch Labs build a similar hyperlocal food marketplace?", answer: "Yes, mTouch Labs develops custom home chef marketplaces, community-driven food platforms, and hyperlocal commerce applications." },
];

// SEO META
const meta_title = "Community Kitchen | Home Chef Marketplace | mTouch Labs";
const meta_description =
  "Explore Community Kitchen, a hyperlocal homemade meal marketplace developed by mTouch Labs for local food communities.";
const canonical_url = `https://www.mtouchlabs.com/portfolio/${SLUG}`;
const og_title = "Community Kitchen | Home Chef Marketplace | mTouch Labs";
const og_description =
  "Hyperlocal homemade meal marketplace app developed by mTouch Labs.";

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
