// scripts/update-classyy.mjs
// Publishes / updates the Classyy portfolio at /portfolio/classyy.
//
// After this runs, the URL /portfolio/classyy is served from the DB by the
// dynamic app/portfolio/[slug]/page.tsx route — exactly like every other
// portfolio. Safe to run repeatedly (inserts once, then updates in place).
//
// Run:  node scripts/update-classyy.mjs

import { neon } from "@neondatabase/serverless";
import { config } from "dotenv";

config({ path: ".env.local" });

const DATABASE_URL = process.env.DATABASE_URL;
if (!DATABASE_URL) {
  console.error("DATABASE_URL is not set in .env.local");
  process.exit(1);
}

const sql = neon(DATABASE_URL);

const SLUG = "classyy";

// ─── IMAGES ────────────────────────────────────────────────────────────────
const IMAGE = "/images/portfolio/classy/Classyy.webp";
const OG_IMAGE = "/images/portfolio/classy/iMockup - iPhone 15 Pro Max.png";

const APP_SCREENS = [
  "/images/portfolio/classy/iMockup - iPhone 15 Pro Max.png",
  "/images/portfolio/classy/iMockup - iPhone 15 Pro Max-1.png",
  "/images/portfolio/classy/iMockup - iPhone 15 Pro Max-2.png",
  "/images/portfolio/classy/iMockup - iPhone 15 Pro Max-3.png",
];

// The static page had NO web screens — keep this empty.
const WEB_SCREENS = [];

// ─── CORE FIELDS ───────────────────────────────────────────────────────────
const title = "Classyy Campaign-Based Ecommerce Solution";
const subtitle =
  "A campaign-based ecommerce solution that combines online shopping with interactive rewards, coupon systems, and lucky draw participation — built by mTouch Labs.";
const description = subtitle;
const category = "Ecommerce";
const tags =
  "Classyy, campaign-based ecommerce, reward ecommerce, lucky draw app, coupon platform";

const role = "Design & Development";
const duration = "4–6 Months";
const team_size = "";

// 1. PROJECT OVERVIEW → about
const about =
  `Classyy was developed to redefine traditional ecommerce experiences by integrating campaign participation, shopping rewards, and promotional engagement directly into the customer journey. The platform was built by our <a href="/ecommerce-app-development-company">ecommerce app development company</a> team for a brand that needed more than a conventional online storefront.\n` +
  `The platform allows users to browse products, complete purchases, unlock campaign entries, participate in lucky draws, and receive promotional incentives through a single interactive commerce ecosystem.`;

// 2. INDUSTRY BACKGROUND
const industry_background =
  `The ecommerce industry has become increasingly competitive, making customer retention and engagement more challenging for online businesses. Modern consumers expect shopping experiences that go beyond simple transactions and static product browsing.\n` +
  `Businesses now focus heavily on customer participation, personalized promotions, and engagement-driven shopping models to improve loyalty and repeat purchases. Classyy was built to support this growing demand for interactive digital commerce experiences.`;

// 3. BUSINESS CHALLENGES → requirements
const requirements = [
  "Repetitive ecommerce shopping experiences with low post-purchase engagement",
  "Limited reward participation opportunities and weak shopping incentives",
  "Minimal emotional engagement with traditional ecommerce platforms",
  "Low repeat purchase activity and difficulty improving customer retention",
  "Limited campaign engagement visibility and weak participation-driven commerce",
  "Challenges increasing user interaction rates across the shopping journey",
].join("\n");

// 4. OBJECTIVES
const objectives = [
  "Create interactive, campaign-driven shopping experiences",
  "Increase customer retention and active participation",
  "Integrate campaigns directly into ecommerce workflows",
  "Improve reward-based engagement and incentive transparency",
  "Build a scalable backend powering lucky draws and coupons",
  "Enable secure authentication and rich profile management",
  "Deliver cross-platform mobile experiences with real-time notifications",
].join("\n");

// 5. STRATEGY & APPROACH
const strategy_approach =
  `At <a href="/mobile-app-development-company">mTouch Labs, a mobile app development company</a>, we approached Classyy as an engagement-driven ecommerce platform focused on customer interaction and campaign participation. Discovery work included ecommerce engagement analysis, customer reward behavior research, campaign participation workflow studies, and interactive shopping experience planning.\n` +
  `Our design team shaped campaign-focused shopping journeys and reward-driven flows, while the engineering team built a scalable backend architecture and real-time campaign systems to power lucky draws, coupons, and reward eligibility.\n` +
  `Cross-platform mobile builds were delivered using modern Flutter tooling — prioritising fast iterations across Android and iOS from a single codebase.\n` +
  `We also evaluated <a href="/react-native-app-development-company">React Native app development</a> during the feasibility review to keep the mobile stack open-ended for future expansion of the platform.`;

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
];

// 7. SOLUTION ARCHITECTURE
const solution_architecture =
  `<strong>User Application:</strong> product browsing, campaign participation, coupon management, real-time notifications, and reward tracking — all surfaced through a single mobile-first experience.\n` +
  `<strong>Campaign Participation System:</strong> reward allocation workflows, lucky draw management, coupon generation, and winner announcement processes powered by a dedicated service layer.\n` +
  `<strong>Ecommerce Module:</strong> product listings, cart and checkout workflows, discount management, and campaign-linked purchase flows built using our <a href="/custom-software-development-company">custom software development services</a>.\n` +
  `<strong>Admin Dashboard:</strong> campaign management, user moderation, reports & analytics, and winner tracking systems for the operations team.`;

// 8. KEY FEATURES → features JSON
const features = [
  { title: "Interactive Ecommerce Shopping", description: "Browse products across fashion, electronics, home decor, and lifestyle categories." },
  { title: "Campaign-Based Purchase Flow", description: "Every eligible purchase automatically enters users into promotional campaigns and rewards." },
  { title: "Rewards & Incentive System", description: "Lucky draw entries, discount coupons, promotional rewards, and campaign incentives in one place." },
  { title: "Coupon Management", description: "View, manage, and apply coupons directly during checkout workflows." },
  { title: "Winner Announcement System", description: "Participate in draws, view campaign winners, and track full reward history." },
  { title: "Secure Authentication", description: "Mobile number login, secure onboarding, and protected account access." },
  { title: "User Profile Management", description: "Manage personal details, addresses, preferences, and account settings." },
  { title: "Participation Guidance", description: "Dedicated 'How It Works' sections for campaigns, coupons, and reward eligibility." },
  { title: "Real-Time Notifications", description: "Live updates for campaign launches, lucky draw results, rewards, and promotions." },
];

// 9. UI/UX HIGHLIGHTS
const ui_ux_highlights = [
  "Interactive campaign layouts with energetic, reward-focused visuals",
  "High-visibility promotional cards and shopping banners",
  "Mobile-first ecommerce interface with simplified participation workflows",
  "Better customer engagement and improved campaign participation",
  "Increased shopping interaction, reduced checkout friction, and higher repeat activity",
].join("\n");

// 11. COLOR PALETTE
const color_palette = [
  { hex: "#ED883F", name: "Sunset Orange (Primary)" },
  { hex: "#F5EFE7", name: "Warm Ivory (Background)" },
  { hex: "#96A0B5", name: "Mist Blue Gray" },
  { hex: "#4D5C71", name: "Steel Navy" },
  { hex: "#FFFFFF", name: "Pure White" },
];

// 12. TYPOGRAPHY
const typography = {
  font: "Montserrat / Urbanist",
  style_description:
    "Montserrat — Headings (Bold 700). Urbanist — Body (Regular 400).",
};

// 13. DEVELOPMENT PROCESS
const development_process = [
  "Requirement Analysis: Mapping business goals and customer engagement needs.",
  "Ecommerce Market Research: Studying competitive shopping and reward platforms.",
  "Campaign Workflow Planning: Designing draws, coupons, and reward eligibility flows.",
  "UX Wireframing: Sketching the participation-driven shopping journey.",
  "UI Design: Crafting energetic, reward-focused interfaces.",
  "Backend Architecture: Building scalable APIs and a real-time campaign engine.",
  "Campaign System Development: Lucky draw logic, coupon generation, winner tracking.",
  "Mobile App Development: Flutter and React Native builds for Android & iOS.",
  "QA Testing: Functional, regression, and load testing across devices.",
  "Performance Optimization: Tuning load times, API calls, and rendering.",
  "Deployment & Scaling: Cloud rollout with monitoring and CI/CD.",
].join("\n");

// 14. SECURITY & PERFORMANCE
const security_performance = [
  "Secure authentication systems with safe onboarding",
  "Encrypted API communication across mobile and backend",
  "Safe coupon validation workflows and tamper protection",
  "Protected user account management with session controls",
  "Secure cloud infrastructure on AWS / Google Cloud",
  "Fast product loading with optimized mobile performance",
  "Real-time campaign updates with sub-second feedback",
  "Scalable backend systems and smooth checkout workflows",
].join("\n");

// 15. RESULTS & IMPACT → business_impact
const business_impact = [
  "Interactive Experiences: Shoppers consistently engage with campaigns built into every purchase.",
  "Reward Participation: Lucky draws and coupon-driven flows lift active reward redemptions.",
  "Shopping Engagement: Browsing time and session depth grow with campaign-linked listings.",
  "Personalized Involvement: Targeted promotions match buyers to the campaigns they care about.",
  "Customer Retention: Repeat purchase activity improves as users chase rewards and wins.",
  "Campaign Interaction: Visibility and entry rates climb across launched promotions.",
].join("\n");

// 16. FUTURE SCOPE
const future_scope = [
  "AI-powered reward personalization tuned to buying behavior",
  "Smart campaign targeting based on customer segments",
  "Referral-based reward ecosystems for organic growth",
  "Tier-based customer memberships with escalating perks",
  "Interactive shopping journeys and gamified experiences",
  "Advanced personalized promotional experiences",
  "Deeper customer engagement systems and analytics",
].join("\n");

// 17. CONCLUSION
const conclusion =
  `Classyy is a scalable <strong>campaign-based ecommerce solution</strong> successfully developed by <strong>mTouch Labs</strong>. By combining digital commerce with rewards, campaign participation, and customer engagement systems, the platform delivers a more interactive and retention-focused shopping experience.\n` +
  `If you are planning to <a href="/contact-us">build a similar ecommerce solution</a>, an interactive shopping application, or a campaign-focused commerce ecosystem, mTouch Labs can develop a tailored solution aligned with your business goals.`;

// 18. FAQ
const faq_schema = [
  { question: "What is Classyy?", answer: "Classyy is a campaign-based ecommerce solution that combines online shopping with rewards, lucky draws, coupons, and promotional engagement systems." },
  { question: "Who developed Classyy?", answer: "Classyy was designed and developed by mTouch Labs, a mobile app development company specializing in scalable ecommerce solutions." },
  { question: "How does the campaign participation system work in Classyy?", answer: "Users automatically participate in promotional campaigns and lucky draw opportunities after purchasing eligible products through the platform." },
  { question: "Does Classyy support rewards and coupon systems?", answer: "Yes, Classyy includes coupon management, shopping rewards, promotional incentives, and lucky draw participation features." },
  { question: "Can mTouch Labs build a similar campaign-based ecommerce platform?", answer: "Yes, mTouch Labs develops custom ecommerce applications, reward-driven shopping platforms, and campaign-based digital commerce solutions." },
];

// SEO META
const meta_title = "Classyy | Campaign-Based Ecommerce Solution | mTouch Labs";
const meta_description =
  "Explore how mTouch Labs developed Classyy, a campaign-based ecommerce solution with rewards, coupons, lucky draws, and engagement features.";
const canonical_url = `https://www.mtouchlabs.com/portfolio/${SLUG}`;
const og_title = "Classyy | Campaign-Based Ecommerce Solution | mTouch Labs";
const og_description =
  "Interactive ecommerce platform with campaigns, rewards, coupons, and lucky draw engagement systems.";

// ─── RUN ───────────────────────────────────────────────────────────────────
async function ensureColumns() {
  console.log("→ Ensuring optional content columns exist…");
  await sql`ALTER TABLE portfolios ADD COLUMN IF NOT EXISTS subtitle TEXT`;
  await sql`ALTER TABLE portfolios ADD COLUMN IF NOT EXISTS industry_background TEXT`;
  await sql`ALTER TABLE portfolios ADD COLUMN IF NOT EXISTS objectives TEXT`;
  await sql`ALTER TABLE portfolios ADD COLUMN IF NOT EXISTS strategy_approach TEXT`;
  await sql`ALTER TABLE portfolios ADD COLUMN IF NOT EXISTS solution_architecture TEXT`;
  await sql`ALTER TABLE portfolios ADD COLUMN IF NOT EXISTS ui_ux_highlights TEXT`;
  await sql`ALTER TABLE portfolios ADD COLUMN IF NOT EXISTS development_process TEXT`;
  await sql`ALTER TABLE portfolios ADD COLUMN IF NOT EXISTS security_performance TEXT`;
  await sql`ALTER TABLE portfolios ADD COLUMN IF NOT EXISTS future_scope TEXT`;
  await sql`ALTER TABLE portfolios ADD COLUMN IF NOT EXISTS conclusion TEXT`;
  await sql`ALTER TABLE portfolios ADD COLUMN IF NOT EXISTS role TEXT`;
  await sql`ALTER TABLE portfolios ADD COLUMN IF NOT EXISTS duration TEXT`;
  await sql`ALTER TABLE portfolios ADD COLUMN IF NOT EXISTS team_size TEXT`;
  await sql`ALTER TABLE portfolios ADD COLUMN IF NOT EXISTS app_screens JSONB`;
  await sql`ALTER TABLE portfolios ADD COLUMN IF NOT EXISTS web_screens JSONB`;
  await sql`ALTER TABLE portfolios ADD COLUMN IF NOT EXISTS color_palette JSONB`;
  await sql`ALTER TABLE portfolios ADD COLUMN IF NOT EXISTS typography JSONB`;
  await sql`ALTER TABLE portfolios ADD COLUMN IF NOT EXISTS faq_schema JSONB`;
}

async function main() {
  console.log(`→ Publishing portfolio: ${SLUG}…`);
  await ensureColumns();

  const existing = await sql`SELECT id FROM portfolios WHERE slug = ${SLUG} LIMIT 1`;

  if (existing.length === 0) {
    console.log("→ No existing row — inserting new portfolio…");
    await sql`INSERT INTO portfolios (
      slug, title, subtitle, description, category, tags, image, og_image,
      role, duration, team_size,
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
      ${role}, ${duration}, ${team_size},
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
      role = ${role},
      duration = ${duration},
      team_size = ${team_size},
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
    console.log("   ✅ Updated existing portfolio row.");
  }

  const check = await sql`SELECT id, slug, published FROM portfolios WHERE slug = ${SLUG}`;
  console.log("→ Done:", JSON.stringify(check[0]));
  console.log(`→ Visit /portfolio/${SLUG}`);
}

main().catch((err) => {
  console.error("✗ Failed:", err.message);
  process.exit(1);
});
