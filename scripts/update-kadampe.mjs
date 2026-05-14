// scripts/update-kadampe.mjs
// Publishes / updates the KadamPe portfolio at /portfolio/kadampe.
//
// Run:  node scripts/update-kadampe.mjs

import { neon } from "@neondatabase/serverless";
import { config } from "dotenv";

config({ path: ".env.local" });

const DATABASE_URL = process.env.DATABASE_URL;
if (!DATABASE_URL) {
  console.error("DATABASE_URL is not set in .env.local");
  process.exit(1);
}

const sql = neon(DATABASE_URL);

const SLUG = "kadampe";

// ─── IMAGES ────────────────────────────────────────────────────────────────
const IMAGE = "/images/portfolio/kadampe/Kadhampay.webp";
const OG_IMAGE = "/images/portfolio/kadampe/Kadhampay.webp";

const APP_SCREENS = [
  "/images/portfolio/kadampe/app-1.png",
  "/images/portfolio/kadampe/app-2.png",
  "/images/portfolio/kadampe/app-3.png",
  "/images/portfolio/kadampe/app-4.png",
  "/images/portfolio/kadampe/app-5.png",
  "/images/portfolio/kadampe/app-6.png",
];
const WEB_SCREENS = [];

// ─── CORE FIELDS ───────────────────────────────────────────────────────────
const title = "KadamPe – Walk & Earn Fitness Rewards App";
const subtitle =
  "A fitness rewards mobile app that converts daily walking steps into earnings — built by mTouch Labs.";
const description =
  "KadamPe is an innovative fitness rewards mobile application developed by mTouch Labs. The platform blends wellness tracking with reward-based engagement, helping users build healthier habits while turning movement into measurable incentives.";
const category = "Health Care";
const tags =
  "KadamPe, fitness app, walk and earn, step tracker, wellness rewards, gamified fitness, mTouch Labs";

// 1. PROJECT OVERVIEW (internal link)
const about = `KadamPe is an innovative <a href="/mobile-app-development-company">fitness app developed by mTouch Labs</a> that motivates users to stay active by converting their walking steps into earnings. The platform blends wellness tracking with reward-based engagement, helping users build healthier habits while enjoying measurable incentives.
The app was designed to make fitness more engaging and rewarding. Instead of traditional step counters that only track progress, KadamPe adds real value by turning movement into motivation.
KadamPe is ideal for health-conscious users, beginners starting a fitness journey, and audiences interested in gamified wellness experiences.`;

// 2. INDUSTRY BACKGROUND
const industry_background = `The fitness app market has grown significantly as users increasingly rely on mobile technology to manage health goals. However, many people lose motivation after the initial excitement of fitness tracking apps fades.
Modern users now look for motivation beyond basic tracking, real rewards for consistency, daily goal-based engagement, easy progress monitoring, and personalized wellness experiences.
Reward-driven wellness apps have emerged as a strong solution, combining habit formation with incentives. KadamPe was built to serve this fast-growing market segment.`;

// 3. BUSINESS CHALLENGES
const requirements = `Losing motivation after a few weeks of using fitness apps
No tangible reward for daily effort
Difficulty maintaining consistent walking routines
Lack of excitement in standard health apps
Limited visibility into progress and earnings
High competition in fitness app stores
Need for strong retention strategies
Preventing fake activity data
Building trust around reward systems
Managing long-term user engagement`;

// 4. OBJECTIVES
const objectives = `Encourage daily walking habits with reward triggers
Increase long-term user retention through gamification
Reward users for consistent activity with a transparent earning system
Deliver a simple and enjoyable mobile experience
Accurate sensor-based step tracking
Real-time dashboard with progress visualization
Wallet & earnings system with secure withdrawals
Daily goals management and subscription plans
User profiles, notifications, and anti-fraud activity checks`;

// 5. STRATEGY & APPROACH
const strategy_approach = `At mTouch Labs, we approached KadamPe as a behavioral engagement product rather than only a fitness tracker.
Discovery: Wellness app trend analysis, gamification strategy planning, reward psychology research, and audience behavior mapping.
Design: Motivation-focused UI layouts, daily streak experiences, progress visualization, and simplified wallet interactions.
Development: Sensor-based tracking integration, secure wallet systems, API-driven reward engine, and multi-device testing.
Growth Planning: Retention loops, subscription upgrade paths, notification strategy, and a referral-ready ecosystem.`;

// 7. SOLUTION ARCHITECTURE
const solution_architecture = `KadamPe was built with a modular architecture for growth.
User App Module: Registration & onboarding, permissions setup, step tracking, dashboard access, and wallet & withdrawals.
Reward Engine: Daily step validation, goal completion logic, earnings calculation, and fraud prevention checks.
Subscription Module: Free trial plans, premium plan upgrades, and earnings multipliers.
Admin Panel: User monitoring, reward settings, withdrawal approvals, and reports & analytics.`;

// 8. KEY FEATURES
const features = [
  { title: "Real-Time Step Tracking", description: "Tracks daily walking activity using mobile sensors with live updates." },
  { title: "Progress Dashboard", description: "Displays steps completed, goal remaining, percentage progress, and motivation indicators." },
  { title: "Earn While Walking", description: "Users receive rewards after reaching defined step milestones." },
  { title: "Wallet Management", description: "Shows total earnings, available balance, and credit history." },
  { title: "Activity History", description: "Daily records of steps completed, earnings generated, and consistency trends." },
  { title: "Withdrawal System", description: "Eligible users can request payouts based on plan rules." },
  { title: "Subscription Plans", description: "Includes trial options, premium memberships, and reward boosters." },
  { title: "Profile Management", description: "Users can manage details, plans, and preferences." },
];

// 9. UI/UX HIGHLIGHTS (internal link)
const ui_ux_highlights = `Clean dashboard design with progress rings and charts, delivering an <a href="/ui-ux-design-company">engaging mobile experience</a>
High-visibility reward counters and minimal distractions
Friendly wellness visuals and fast onboarding
Easy permission flow with habit-forming reminders
Clear wallet experience and daily return motivation
The interface encourages repeat engagement and goal completion`;

// 11. COLOR PALETTE
const color_palette = [
  { hex: "#1E55AF", name: "Primary Blue" },
  { hex: "#2580EB", name: "App Blue" },
  { hex: "#EFF8FF", name: "Light Sky Blue" },
  { hex: "#00BF53", name: "Primary Green" },
  { hex: "#EDFFF5", name: "Mint Light" },
  { hex: "#F60000", name: "Primary Red" },
];

// 12. TYPOGRAPHY
const typography = { font: "Montserrat / Bebas Neue", weight: "Modern & Bold" };

// 13. DEVELOPMENT PROCESS
const development_process = `Requirement Discovery: Understanding business goals, user needs, and success metrics
Market Research: Wellness category trends and competitor benchmarking
UX Wireframes: Low-fidelity sketches for every key motivational flow
UI Design: High-fidelity, motivation-focused mobile-first design
Tracking Logic Development: Sensor-based step counting with anti-cheat checks
Wallet System Integration: Secure ledger and balance handling
API Development: Scalable backend services for users, rewards, and admin
QA Testing: Automated and manual testing across devices and OS versions
Security Validation: Penetration checks and fraud-prevention reviews
Deployment: Production rollout to app stores and cloud infrastructure
Continuous Improvements: Ongoing monitoring, updates, and feature evolution`;

// 14. SECURITY & PERFORMANCE
const security_performance = `Secure authentication for verified user access
Encrypted data exchange between app and backend
Anti-cheat step validation to prevent fake activity
Fraud prevention checks for reward integrity
Safe wallet data handling with audit trails
Battery-efficient tracking with low background impact
Fast dashboard loading and real-time sync optimization
Scalable cloud backend for high concurrent users`;

// 15. RESULTS & IMPACT
const business_impact = `Motivation to Walk Daily: Users get clear incentives that turn movement into habit
Real Rewards for Effort: Tangible payouts replace abstract progress metrics
Better Health Consistency: Daily goals and streaks improve adherence
Clear Progress Visibility: Wallet, history, and dashboard reinforce engagement
Strong Repeat Engagement: Reward loops drive higher retention than typical fitness apps
Subscription Opportunities: Premium plans and reward boosters unlock recurring revenue
Referral Potential: Built-in shareability for organic user growth
Community Growth: Groundwork for leaderboards, teams, and corporate wellness plans
Business Impact: The app combines fitness, retention, and monetization in one ecosystem`;

// 16. FUTURE SCOPE (internal link)
const future_scope = `Team walking challenges with friends and colleagues
Social leaderboards and weekly competitions
AI fitness coaching with personalized goals
Smart wearable integrations (Apple Watch, Wear OS)
Referral rewards for inviting new users
Brand sponsorship campaigns inside the app
Nutrition tracking add-ons for a complete wellness picture
Corporate wellness plans powered by a <a href="/custom-software-development-company">scalable custom solution</a>`;

// 17. CONCLUSION (internal link)
const conclusion = `KadamPe is a modern walk and earn mobile app successfully designed and developed by mTouch Labs. It transforms everyday movement into motivation through rewards, clean UX, and scalable technology.
If you want to <a href="/contact-us">build a similar fitness app</a>, health engagement platform, step tracking app, or gamified wellness solution, mTouch Labs can create a custom product tailored to your goals.`;

// 6. TECHNOLOGY STACK
const tech_stack = [
  "Flutter",
  "React Native",
  "Node.js",
  "Laravel",
  "PostgreSQL",
  "MySQL",
  "AWS",
  "Google Fit",
  "Firebase",
];

// 18. FAQ
const faq_schema = [
  { question: "What is KadamPe?", answer: "KadamPe is a fitness rewards mobile app that converts daily walking steps into earnings and motivates users to stay active." },
  { question: "Who developed KadamPe?", answer: "KadamPe was designed and developed by mTouch Labs, a leading mobile app development company." },
  { question: "How does KadamPe work?", answer: "Users walk daily, the app tracks their steps using sensors, and eligible activity rewards are credited to the in-app wallet." },
  { question: "Can users withdraw earnings from KadamPe?", answer: "Yes, users can request withdrawals based on eligibility rules, thresholds, and plan terms." },
  { question: "Can mTouch Labs build a similar fitness rewards app?", answer: "Yes, mTouch Labs develops custom fitness apps, reward platforms, wellness apps, and gamified mobile solutions." },
];

// SEO META
const meta_title = "KadamPe | Fitness Rewards App Case Study | mTouch Labs";
const meta_description =
  "Discover how mTouch Labs built KadamPe, a walk and earn fitness rewards app with step tracking, wallet features, subscriptions, and user engagement tools.";
const canonical_url = `https://www.mtouchlabs.com/portfolio/${SLUG}`;
const og_title = "KadamPe | Fitness Rewards App Case Study | mTouch Labs";
const og_description =
  "See how mTouch Labs developed KadamPe, a gamified fitness rewards mobile app.";

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
