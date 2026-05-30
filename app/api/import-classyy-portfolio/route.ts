/**
 * One-shot importer for the Classyy portfolio.
 *
 * Inserts (or replaces) a single row in the `portfolios` table with the exact
 * data that used to live in the now-deleted static page at
 * `app/portfolio/classyy/page.tsx`. After this runs successfully, the URL
 * `/portfolio/classyy` is served by the dynamic `app/portfolio/[slug]/page.tsx`
 * route from the DB — same as every other portfolio.
 *
 * Notes:
 *   - The static page had NO web screens (only an auto-scrolling app screens
 *     strip), so `web_screens` is intentionally an empty array.
 *   - Safe to call repeatedly: existing row is updated, not duplicated.
 *   - Hit it with: GET /api/import-classyy-portfolio
 */
import { sql } from '@/lib/db';
import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

// ─── DATA (mirrors app/portfolio/classyy/page.tsx 1:1) ─────────────────────
const SLUG = 'classyy';
const TITLE = 'Classyy Campaign-Based Ecommerce Solution';
const SUBTITLE =
  'A campaign-based ecommerce solution that combines online shopping with interactive rewards, coupon systems, and lucky draw participation — built by mTouch Labs.';
const CATEGORY = 'Ecommerce';
const IMAGE = '/images/portfolio/classy/Classyy.webp';

const ROLE = 'Design & Development';
const DURATION = '4–6 Months';
const TEAM_SIZE = '';

const TECH_STACK = [
  'Flutter',
  'React Native',
  'Node.js',
  'Laravel',
  'MySQL',
  'PostgreSQL',
  'AWS',
  'Google Cloud',
];

const APP_SCREENS = [
  '/images/portfolio/classy/iMockup - iPhone 15 Pro Max.png',
  '/images/portfolio/classy/iMockup - iPhone 15 Pro Max-1.png',
  '/images/portfolio/classy/iMockup - iPhone 15 Pro Max-2.png',
  '/images/portfolio/classy/iMockup - iPhone 15 Pro Max-3.png',
];

// NOTE: The static page had NO web screens. Keep this empty.
const WEB_SCREENS: string[] = [];

const COLOR_PALETTE = [
  { hex: '#ED883F', name: 'Sunset Orange (Primary)' },
  { hex: '#F5EFE7', name: 'Warm Ivory (Background)' },
  { hex: '#96A0B5', name: 'Mist Blue Gray' },
  { hex: '#4D5C71', name: 'Steel Navy' },
  { hex: '#FFFFFF', name: 'Pure White' },
];

// The dynamic page only renders typography when `font` is set, and shows
// Montserrat as the headline font. We pack both in the description for parity.
const TYPOGRAPHY = {
  font: 'Montserrat / Urbanist',
  style_description:
    'Montserrat — Headings (Bold 700). Urbanist — Body (Regular 400).',
};

const FEATURES = [
  {
    title: 'Interactive Ecommerce Shopping',
    description:
      'Browse products across fashion, electronics, home decor, and lifestyle categories.',
  },
  {
    title: 'Campaign-Based Purchase Flow',
    description:
      'Every eligible purchase automatically enters users into promotional campaigns and rewards.',
  },
  {
    title: 'Rewards & Incentive System',
    description:
      'Lucky draw entries, discount coupons, promotional rewards, and campaign incentives in one place.',
  },
  {
    title: 'Coupon Management',
    description:
      'View, manage, and apply coupons directly during checkout workflows.',
  },
  {
    title: 'Winner Announcement System',
    description:
      'Participate in draws, view campaign winners, and track full reward history.',
  },
  {
    title: 'Secure Authentication',
    description:
      'Mobile number login, secure onboarding, and protected account access.',
  },
  {
    title: 'User Profile Management',
    description:
      'Manage personal details, addresses, preferences, and account settings.',
  },
  {
    title: 'Participation Guidance',
    description:
      "Dedicated 'How It Works' sections for campaigns, coupons, and reward eligibility.",
  },
  {
    title: 'Real-Time Notifications',
    description:
      'Live updates for campaign launches, lucky draw results, rewards, and promotions.',
  },
];

const FAQS = [
  {
    question: 'What is Classyy?',
    answer:
      'Classyy is a campaign-based ecommerce solution that combines online shopping with rewards, lucky draws, coupons, and promotional engagement systems.',
  },
  {
    question: 'Who developed Classyy?',
    answer:
      'Classyy was designed and developed by mTouch Labs, a mobile app development company specializing in scalable ecommerce solutions.',
  },
  {
    question: 'How does the campaign participation system work in Classyy?',
    answer:
      'Users automatically participate in promotional campaigns and lucky draw opportunities after purchasing eligible products through the platform.',
  },
  {
    question: 'Does Classyy support rewards and coupon systems?',
    answer:
      'Yes, Classyy includes coupon management, shopping rewards, promotional incentives, and lucky draw participation features.',
  },
  {
    question: 'Can mTouch Labs build a similar campaign-based ecommerce platform?',
    answer:
      'Yes, mTouch Labs develops custom ecommerce applications, reward-driven shopping platforms, and campaign-based digital commerce solutions.',
  },
];

const ABOUT =
  `Classyy was developed to redefine traditional ecommerce experiences by integrating campaign participation, shopping rewards, and promotional engagement directly into the customer journey. The platform was built by our <a href="/ecommerce-app-development-company">ecommerce app development company</a> team for a brand that needed more than a conventional online storefront.\n` +
  `The platform allows users to browse products, complete purchases, unlock campaign entries, participate in lucky draws, and receive promotional incentives through a single interactive commerce ecosystem.`;

const INDUSTRY_BACKGROUND =
  `The ecommerce industry has become increasingly competitive, making customer retention and engagement more challenging for online businesses. Modern consumers expect shopping experiences that go beyond simple transactions and static product browsing.\n` +
  `Businesses now focus heavily on customer participation, personalized promotions, and engagement-driven shopping models to improve loyalty and repeat purchases. Classyy was built to support this growing demand for interactive digital commerce experiences.`;

const REQUIREMENTS = [
  'Repetitive ecommerce shopping experiences with low post-purchase engagement',
  'Limited reward participation opportunities and weak shopping incentives',
  'Minimal emotional engagement with traditional ecommerce platforms',
  'Low repeat purchase activity and difficulty improving customer retention',
  'Limited campaign engagement visibility and weak participation-driven commerce',
  'Challenges increasing user interaction rates across the shopping journey',
].join('\n');

const OBJECTIVES = [
  'Create interactive, campaign-driven shopping experiences',
  'Increase customer retention and active participation',
  'Integrate campaigns directly into ecommerce workflows',
  'Improve reward-based engagement and incentive transparency',
  'Build a scalable backend powering lucky draws and coupons',
  'Enable secure authentication and rich profile management',
  'Deliver cross-platform mobile experiences with real-time notifications',
].join('\n');

const STRATEGY_APPROACH =
  `At <a href="/mobile-app-development-company">mTouch Labs, a mobile app development company</a>, we approached Classyy as an engagement-driven ecommerce platform focused on customer interaction and campaign participation. Discovery work included ecommerce engagement analysis, customer reward behavior research, campaign participation workflow studies, and interactive shopping experience planning.\n` +
  `Our design team shaped campaign-focused shopping journeys and reward-driven flows, while the engineering team built a scalable backend architecture and real-time campaign systems to power lucky draws, coupons, and reward eligibility.\n` +
  `Cross-platform mobile builds were delivered using modern Flutter tooling — prioritising fast iterations across Android and iOS from a single codebase.\n` +
  `We also evaluated <a href="/react-native-app-development-company">React Native app development</a> during the feasibility review to keep the mobile stack open-ended for future expansion of the platform.`;

const SOLUTION_ARCHITECTURE =
  `<strong>User Application:</strong> product browsing, campaign participation, coupon management, real-time notifications, and reward tracking — all surfaced through a single mobile-first experience.\n` +
  `<strong>Campaign Participation System:</strong> reward allocation workflows, lucky draw management, coupon generation, and winner announcement processes powered by a dedicated service layer.\n` +
  `<strong>Ecommerce Module:</strong> product listings, cart and checkout workflows, discount management, and campaign-linked purchase flows built using our <a href="/custom-software-development-company">custom software development services</a>.\n` +
  `<strong>Admin Dashboard:</strong> campaign management, user moderation, reports & analytics, and winner tracking systems for the operations team.`;

const UI_UX_HIGHLIGHTS = [
  'Interactive campaign layouts with energetic, reward-focused visuals',
  'High-visibility promotional cards and shopping banners',
  'Mobile-first ecommerce interface with simplified participation workflows',
  'Better customer engagement and improved campaign participation',
  'Increased shopping interaction, reduced checkout friction, and higher repeat activity',
].join('\n');

const DEVELOPMENT_PROCESS = [
  'Requirement Analysis: Mapping business goals and customer engagement needs.',
  'Ecommerce Market Research: Studying competitive shopping and reward platforms.',
  'Campaign Workflow Planning: Designing draws, coupons, and reward eligibility flows.',
  'UX Wireframing: Sketching the participation-driven shopping journey.',
  'UI Design: Crafting energetic, reward-focused interfaces.',
  'Backend Architecture: Building scalable APIs and a real-time campaign engine.',
  'Campaign System Development: Lucky draw logic, coupon generation, winner tracking.',
  'Mobile App Development: Flutter and React Native builds for Android & iOS.',
  'QA Testing: Functional, regression, and load testing across devices.',
  'Performance Optimization: Tuning load times, API calls, and rendering.',
  'Deployment & Scaling: Cloud rollout with monitoring and CI/CD.',
].join('\n');

const SECURITY_PERFORMANCE = [
  'Secure authentication systems with safe onboarding',
  'Encrypted API communication across mobile and backend',
  'Safe coupon validation workflows and tamper protection',
  'Protected user account management with session controls',
  'Secure cloud infrastructure on AWS / Google Cloud',
  'Fast product loading with optimized mobile performance',
  'Real-time campaign updates with sub-second feedback',
  'Scalable backend systems and smooth checkout workflows',
].join('\n');

const BUSINESS_IMPACT = [
  'Interactive Experiences: Shoppers consistently engage with campaigns built into every purchase.',
  'Reward Participation: Lucky draws and coupon-driven flows lift active reward redemptions.',
  'Shopping Engagement: Browsing time and session depth grow with campaign-linked listings.',
  'Personalized Involvement: Targeted promotions match buyers to the campaigns they care about.',
  'Customer Retention: Repeat purchase activity improves as users chase rewards and wins.',
  'Campaign Interaction: Visibility and entry rates climb across launched promotions.',
].join('\n');

const FUTURE_SCOPE = [
  'AI-powered reward personalization tuned to buying behavior',
  'Smart campaign targeting based on customer segments',
  'Referral-based reward ecosystems for organic growth',
  'Tier-based customer memberships with escalating perks',
  'Interactive shopping journeys and gamified experiences',
  'Advanced personalized promotional experiences',
  'Deeper customer engagement systems and analytics',
].join('\n');

const CONCLUSION =
  `Classyy is a scalable <strong>campaign-based ecommerce solution</strong> successfully developed by <strong>mTouch Labs</strong>. By combining digital commerce with rewards, campaign participation, and customer engagement systems, the platform delivers a more interactive and retention-focused shopping experience.\n` +
  `If you are planning to <a href="/contact-us">build a similar ecommerce solution</a>, an interactive shopping application, or a campaign-focused commerce ecosystem, mTouch Labs can develop a tailored solution aligned with your business goals.`;

const META_TITLE = 'Classyy | Campaign-Based Ecommerce Solution | mTouch Labs';
const META_DESCRIPTION =
  'Explore how mTouch Labs developed Classyy, a campaign-based ecommerce solution with rewards, coupons, lucky draws, and engagement features.';
const CANONICAL_URL = 'https://www.mtouchlabs.com/portfolio/classyy';
const OG_TITLE = 'Classyy | Campaign-Based Ecommerce Solution | mTouch Labs';
const OG_DESCRIPTION =
  'Interactive ecommerce platform with campaigns, rewards, coupons, and lucky draw engagement systems.';
const OG_IMAGE = '/images/portfolio/classy/iMockup - iPhone 15 Pro Max.png';

const TAGS =
  'Classyy, campaign-based ecommerce, reward ecommerce, lucky draw app, coupon platform';

// ───────────────────────────────────────────────────────────────────────────
export async function GET() {
  try {
    const existing = await sql`SELECT id FROM portfolios WHERE slug = ${SLUG}`;

    if (existing.length > 0) {
      await sql`
        UPDATE portfolios SET
          title                  = ${TITLE},
          subtitle               = ${SUBTITLE},
          category               = ${CATEGORY},
          image                  = ${IMAGE},
          about                  = ${ABOUT},
          industry_background    = ${INDUSTRY_BACKGROUND},
          requirements           = ${REQUIREMENTS},
          objectives             = ${OBJECTIVES},
          strategy_approach      = ${STRATEGY_APPROACH},
          tech_stack             = ${JSON.stringify(TECH_STACK)},
          solution_architecture  = ${SOLUTION_ARCHITECTURE},
          features               = ${JSON.stringify(FEATURES)},
          ui_ux_highlights       = ${UI_UX_HIGHLIGHTS},
          app_screens            = ${JSON.stringify(APP_SCREENS)},
          web_screens            = ${JSON.stringify(WEB_SCREENS)},
          color_palette          = ${JSON.stringify(COLOR_PALETTE)},
          typography             = ${JSON.stringify(TYPOGRAPHY)},
          development_process    = ${DEVELOPMENT_PROCESS},
          security_performance   = ${SECURITY_PERFORMANCE},
          business_impact        = ${BUSINESS_IMPACT},
          future_scope           = ${FUTURE_SCOPE},
          conclusion             = ${CONCLUSION},
          faq_schema             = ${JSON.stringify(FAQS)},
          role                   = ${ROLE},
          duration               = ${DURATION},
          team_size              = ${TEAM_SIZE},
          tags                   = ${TAGS},
          meta_title             = ${META_TITLE},
          meta_description       = ${META_DESCRIPTION},
          canonical_url          = ${CANONICAL_URL},
          og_title               = ${OG_TITLE},
          og_description         = ${OG_DESCRIPTION},
          og_image               = ${OG_IMAGE},
          published              = ${true}
        WHERE slug = ${SLUG}
      `;
      return NextResponse.json({
        success: true,
        action: 'updated',
        slug: SLUG,
        url: `/portfolio/${SLUG}`,
      });
    }

    await sql`
      INSERT INTO portfolios (
        slug, title, subtitle, category, image,
        about, industry_background, requirements, objectives, strategy_approach,
        tech_stack, solution_architecture, features, ui_ux_highlights,
        app_screens, web_screens, color_palette, typography,
        development_process, security_performance, business_impact, future_scope, conclusion,
        faq_schema, role, duration, team_size, tags,
        meta_title, meta_description, canonical_url,
        og_title, og_description, og_image, published
      ) VALUES (
        ${SLUG}, ${TITLE}, ${SUBTITLE}, ${CATEGORY}, ${IMAGE},
        ${ABOUT}, ${INDUSTRY_BACKGROUND}, ${REQUIREMENTS}, ${OBJECTIVES}, ${STRATEGY_APPROACH},
        ${JSON.stringify(TECH_STACK)}, ${SOLUTION_ARCHITECTURE}, ${JSON.stringify(FEATURES)}, ${UI_UX_HIGHLIGHTS},
        ${JSON.stringify(APP_SCREENS)}, ${JSON.stringify(WEB_SCREENS)}, ${JSON.stringify(COLOR_PALETTE)}, ${JSON.stringify(TYPOGRAPHY)},
        ${DEVELOPMENT_PROCESS}, ${SECURITY_PERFORMANCE}, ${BUSINESS_IMPACT}, ${FUTURE_SCOPE}, ${CONCLUSION},
        ${JSON.stringify(FAQS)}, ${ROLE}, ${DURATION}, ${TEAM_SIZE}, ${TAGS},
        ${META_TITLE}, ${META_DESCRIPTION}, ${CANONICAL_URL},
        ${OG_TITLE}, ${OG_DESCRIPTION}, ${OG_IMAGE}, ${true}
      )
    `;

    return NextResponse.json({
      success: true,
      action: 'inserted',
      slug: SLUG,
      url: `/portfolio/${SLUG}`,
    });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : String(err);
    return NextResponse.json(
      { success: false, error: message },
      { status: 500 }
    );
  }
}
