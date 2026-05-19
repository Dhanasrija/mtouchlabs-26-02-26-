import type { Metadata } from "next";
import Link from "next/link";

// ═══════════════════════════════════════════════════════════════════
// SEO METADATA
// ═══════════════════════════════════════════════════════════════════
export const metadata: Metadata = {
  title: "Classyy | Campaign-Based Ecommerce Solution | mTouch Labs",
  description:
    "Explore how mTouch Labs developed Classyy, a campaign-based ecommerce solution with rewards, coupons, lucky draws, and engagement features.",
  keywords: [
    "Classyy",
    "campaign-based ecommerce solution",
    "reward-driven ecommerce",
    "interactive shopping platform",
    "coupon-based ecommerce",
    "lucky draw ecommerce app",
    "shopping rewards platform",
    "ecommerce app development",
    "mTouch Labs portfolio",
  ],
  metadataBase: new URL("https://www.mtouchlabs.com"),
  alternates: {
    canonical: "/portfolio/classyy",
  },
  openGraph: {
    title: "Classyy | Campaign-Based Ecommerce Solution | mTouch Labs",
    description:
      "Interactive ecommerce platform with campaigns, rewards, coupons, and lucky draw engagement systems.",
    url: "https://www.mtouchlabs.com/portfolio/classyy",
    siteName: "mTouch Labs",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Classyy | Campaign-Based Ecommerce Solution",
    description: "Reward-driven ecommerce platform developed by mTouch Labs.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
};

// ═══════════════════════════════════════════════════════════════════
// CONSTANTS
// ═══════════════════════════════════════════════════════════════════
const TITLE = "Classyy";
const SUBTITLE = "Campaign-Based Ecommerce Solution";
const CATEGORY = "Ecommerce";
const TECH_STACK = [
  "Flutter",
  "React Native",
  "Node.js",
  "Laravel",
  "MySQL",
  "PostgreSQL",
  "AWS",
  "Google Cloud",
];

const APP_SCREENS = [
  "/images/portfolio/classy/iMockup%20-%20iPhone%2015%20Pro%20Max.png",
  "/images/portfolio/classy/iMockup%20-%20iPhone%2015%20Pro%20Max-1.png",
  "/images/portfolio/classy/iMockup%20-%20iPhone%2015%20Pro%20Max-2.png",
  "/images/portfolio/classy/iMockup%20-%20iPhone%2015%20Pro%20Max-3.png",
];

// Duplicate the screen list so the CSS keyframe loop
// (translateX 0 → -50%) cycles seamlessly.
const APP_SCREENS_LOOP = [...APP_SCREENS, ...APP_SCREENS];

const COLOR_PALETTE = [
  { hex: "#ED883F", name: "Sunset Orange (Primary)" },
  { hex: "#F5EFE7", name: "Warm Ivory (Background)" },
  { hex: "#96A0B5", name: "Mist Blue Gray" },
  { hex: "#4D5C71", name: "Steel Navy" },
  { hex: "#FFFFFF", name: "Pure White" },
];

const FAQS = [
  {
    question: "What is Classyy?",
    answer:
      "Classyy is a campaign-based ecommerce solution that combines online shopping with rewards, lucky draws, coupons, and promotional engagement systems.",
  },
  {
    question: "Who developed Classyy?",
    answer:
      "Classyy was designed and developed by mTouch Labs, a mobile app development company specializing in scalable ecommerce solutions.",
  },
  {
    question: "How does the campaign participation system work in Classyy?",
    answer:
      "Users automatically participate in promotional campaigns and lucky draw opportunities after purchasing eligible products through the platform.",
  },
  {
    question: "Does Classyy support rewards and coupon systems?",
    answer:
      "Yes, Classyy includes coupon management, shopping rewards, promotional incentives, and lucky draw participation features.",
  },
  {
    question: "Can mTouch Labs build a similar campaign-based ecommerce platform?",
    answer:
      "Yes, mTouch Labs develops custom ecommerce applications, reward-driven shopping platforms, and campaign-based digital commerce solutions.",
  },
];

// ═══════════════════════════════════════════════════════════════════
// STRUCTURED DATA SCHEMAS
// ═══════════════════════════════════════════════════════════════════
const mainSchema = {
  "@context": "https://schema.org",
  "@type": "CreativeWork",
  name: "Classyy — Campaign-Based Ecommerce Solution",
  description:
    "Classyy is a campaign-based ecommerce solution developed by mTouch Labs that combines online shopping with interactive rewards, coupon systems, and lucky draw participation.",
  url: "https://www.mtouchlabs.com/portfolio/classyy",
  image:
    "https://www.mtouchlabs.com/images/portfolio/classy/iMockup%20-%20iPhone%2015%20Pro%20Max.png",
  genre: CATEGORY,
  keywords:
    "Classyy, campaign-based ecommerce, reward ecommerce, lucky draw app, coupon platform, mTouch Labs",
  creator: {
    "@type": "Organization",
    name: "mTouch Labs",
    url: "https://www.mtouchlabs.com",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.mtouchlabs.com" },
    { "@type": "ListItem", position: 2, name: "Portfolio", item: "https://www.mtouchlabs.com/portfolio" },
    {
      "@type": "ListItem",
      position: 3,
      name: "Classyy",
      item: "https://www.mtouchlabs.com/portfolio/classyy",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((f) => ({
    "@type": "Question",
    name: f.question,
    acceptedAnswer: { "@type": "Answer", text: f.answer },
  })),
};

// ═══════════════════════════════════════════════════════════════════
// SVG ICONS FOR TOC
// ═══════════════════════════════════════════════════════════════════
const tocIconsSvg: Record<string, string> = {
  "project-overview":
    '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>',
  "industry-background":
    '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>',
  "business-challenges":
    '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>',
  "objectives-requirements":
    '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>',
  "strategy-approach":
    '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="1"/><path d="M20.2 20.2c2.04-2.03.02-7.36-4.5-11.9-4.54-4.52-9.87-6.54-11.9-4.5-2.04 2.03-.02 7.36 4.5 11.9 4.54 4.52 9.87 6.54 11.9 4.5z"/><path d="M15.7 15.7c4.52-4.54 6.54-9.87 4.5-11.9-2.03-2.04-7.36-.02-11.9 4.5-4.52 4.54-6.54 9.87-4.5 11.9 2.03 2.04 7.36.02 11.9-4.5z"/></svg>',
  "technology-stack":
    '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>',
  "solution-architecture":
    '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>',
  "key-features":
    '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>',
  "ui-ux-highlights":
    '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>',
  screens:
    '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="3"/></svg>',
  "color-palette":
    '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="13.5" cy="6.5" r="0.5"/><circle cx="17.5" cy="10.5" r="0.5"/><circle cx="8.5" cy="7.5" r="0.5"/><circle cx="6.5" cy="12.5" r="0.5"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.555C21.965 6.012 17.461 2 12 2z"/></svg>',
  typography:
    '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="4 7 4 4 20 4 20 7"/><line x1="9" y1="20" x2="15" y2="20"/><line x1="12" y1="4" x2="12" y2="20"/></svg>',
  "development-process":
    '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>',
  "security-performance":
    '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>',
  "results-impact":
    '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>',
  "future-scope":
    '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>',
  conclusion:
    '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>',
  faq:
    '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>',
};

const tocItems = [
  { id: "project-overview", label: "Project Overview" },
  { id: "industry-background", label: "Industry Background" },
  { id: "business-challenges", label: "Business Challenges" },
  { id: "objectives-requirements", label: "Objectives & Requirements" },
  { id: "strategy-approach", label: "Strategy & Approach" },
  { id: "technology-stack", label: "Technology Stack" },
  { id: "solution-architecture", label: "Solution Architecture" },
  { id: "key-features", label: "Key Features" },
  { id: "ui-ux-highlights", label: "UI/UX Highlights" },
  { id: "screens", label: "Screens" },
  { id: "color-palette", label: "Color Palette" },
  { id: "typography", label: "Typography" },
  { id: "development-process", label: "Development Process" },
  { id: "security-performance", label: "Security & Performance" },
  { id: "results-impact", label: "Results & Impact" },
  { id: "future-scope", label: "Future Scope" },
  { id: "conclusion", label: "Conclusion" },
  { id: "faq", label: "FAQ" },
];

// ═══════════════════════════════════════════════════════════════════
// PAGE COMPONENT
// ═══════════════════════════════════════════════════════════════════
export default function ClassyyPortfolioPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(mainSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* TOC sticky + internal link styling */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
        html, body {
          overflow-x: visible !important;
          overflow: visible !important;
        }
        .cs-toc {
          position: -webkit-sticky !important;
          position: sticky !important;
          top: 100px !important;
          align-self: flex-start !important;
          max-height: calc(100vh - 120px) !important;
          overflow-y: auto !important;
          overflow-x: hidden !important;
        }
        .cs-layout { align-items: flex-start !important; }
        .cs-sec { scroll-margin-top: 110px !important; }

        .cs-sec__text a,
        .cs-card-blue a,
        .cs-card-light a,
        .cs-uiux-item a,
        .cs-future-item a,
        .cs-conclusion-card a,
        .cs-impact-card__desc a,
        .cs-challenge-card a {
          color: #3B82F6 !important;
          text-decoration: none !important;
          font-weight: 600 !important;
          transition: color 0.18s ease !important;
        }
        .cs-sec__text a:hover,
        .cs-card-blue a:hover,
        .cs-card-light a:hover,
        .cs-uiux-item a:hover,
        .cs-future-item a:hover,
        .cs-conclusion-card a:hover,
        .cs-impact-card__desc a:hover,
        .cs-challenge-card a:hover {
          color: #1D4ED8 !important;
        }
      `,
        }}
      />

      <div className="cs" style={{ backgroundColor: "var(--ma-dark)" }}>
        {/* ═══ HERO ═══ */}
        <section className="cs-hero">
          <div className="cs-hero__inner">
            <nav className="cs-hero__breadcrumb" aria-label="Breadcrumb">
              <Link href="/">Home</Link>
              <span>/</span>
              <Link href="/portfolio">Portfolio</Link>
              <span>/</span>
              <span className="cs-hero__breadcrumb-current">{TITLE}</span>
            </nav>

            <div className="cs-hero__pills">
              {TECH_STACK.slice(0, 5).map((t, i) => (
                <span key={i} className="cs-hero__pill">
                  {t}
                </span>
              ))}
            </div>

            <h1 className="cs-hero__title">
              <span className="cs-hero__highlight">{TITLE}</span>{" "}
              {SUBTITLE}
            </h1>
            <p className="cs-hero__sub">
              A campaign-based ecommerce solution that combines online shopping
              with interactive rewards, coupon systems, and lucky draw
              participation — built by mTouch Labs.
            </p>

            <div className="cs-hero__cards">
              <div className="cs-hero__card">
                <span className="cs-hero__card-icon">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                </span>
                <span className="cs-hero__card-label">Role</span>
                <span className="cs-hero__card-value">Design & Development</span>
              </div>
              <div className="cs-hero__card">
                <span className="cs-hero__card-icon">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                </span>
                <span className="cs-hero__card-label">Duration</span>
                <span className="cs-hero__card-value">4–6 Months</span>
              </div>
              <div className="cs-hero__card">
                <span className="cs-hero__card-icon">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                    <line x1="16" y1="2" x2="16" y2="6" />
                    <line x1="8" y1="2" x2="8" y2="6" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                  </svg>
                </span>
                <span className="cs-hero__card-label">Category</span>
                <span className="cs-hero__card-value">{CATEGORY}</span>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ MOBILE TOC ═══ */}
        <nav className="cs-toc-mobile" aria-label="Table of Contents Mobile">
          <div className="cs-toc-mobile__scroll">
            {tocItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="cs-toc-mobile__link"
                data-section={item.id}
              >
                {item.label}
              </a>
            ))}
          </div>
        </nav>

        {/* ═══ LAYOUT ═══ */}
        <div className="cs-layout">
          {/* Sticky sidebar TOC */}
          <aside className="cs-toc" aria-label="Table of Contents">
            <nav>
              <p className="cs-toc__heading">TABLE OF CONTENTS</p>
              <ul className="cs-toc__list">
                {tocItems.map((item) => (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      className="cs-toc__link"
                      data-section={item.id}
                    >
                      <span
                        className="cs-toc__icon"
                        dangerouslySetInnerHTML={{
                          __html: tocIconsSvg[item.id] || "",
                        }}
                      />
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>

          {/* Content */}
          <div className="cs-content">
            {/* 1. PROJECT OVERVIEW */}
            <section id="project-overview" className="cs-sec">
              <h2 className="cs-sec__h">
                <span
                  className="cs-sec__icon"
                  dangerouslySetInnerHTML={{
                    __html: tocIconsSvg["project-overview"],
                  }}
                />{" "}
                Project Overview
              </h2>
              <div className="cs-sec__text">
                <p>
                  Classyy was developed to redefine traditional ecommerce
                  experiences by integrating campaign participation, shopping
                  rewards, and promotional engagement directly into the
                  customer journey. The platform was built by our{" "}
                  <Link href="/ecommerce-app-development-company">
                    ecommerce app development company
                  </Link>{" "}
                  team for a brand that needed more than a conventional online
                  storefront.
                </p>
                <p>
                  The platform allows users to browse products, complete
                  purchases, unlock campaign entries, participate in lucky
                  draws, and receive promotional incentives through a single
                  interactive commerce ecosystem.
                </p>
              </div>
            </section>

            {/* 2. INDUSTRY BACKGROUND */}
            <section id="industry-background" className="cs-sec">
              <h2 className="cs-sec__h">
                <span
                  className="cs-sec__icon"
                  dangerouslySetInnerHTML={{
                    __html: tocIconsSvg["industry-background"],
                  }}
                />{" "}
                Industry Background
              </h2>
              <div className="cs-sec__text">
                <p>
                  The ecommerce industry has become increasingly competitive,
                  making customer retention and engagement more challenging for
                  online businesses. Modern consumers expect shopping experiences
                  that go beyond simple transactions and static product browsing.
                </p>
                <p>
                  Businesses now focus heavily on customer participation,
                  personalized promotions, and engagement-driven shopping models
                  to improve loyalty and repeat purchases. Classyy was built to
                  support this growing demand for interactive digital commerce
                  experiences.
                </p>
              </div>
            </section>

            {/* 3. BUSINESS CHALLENGES */}
            <section id="business-challenges" className="cs-sec">
              <h2 className="cs-sec__h">
                <span
                  className="cs-sec__icon"
                  dangerouslySetInnerHTML={{
                    __html: tocIconsSvg["business-challenges"],
                  }}
                />{" "}
                Business Challenges
              </h2>
              <div className="cs-challenge-list">
                {[
                  "Repetitive ecommerce shopping experiences with low post-purchase engagement",
                  "Limited reward participation opportunities and weak shopping incentives",
                  "Minimal emotional engagement with traditional ecommerce platforms",
                  "Low repeat purchase activity and difficulty improving customer retention",
                  "Limited campaign engagement visibility and weak participation-driven commerce",
                  "Challenges increasing user interaction rates across the shopping journey",
                ].map((line, i) => (
                  <div key={i} className="cs-challenge-card">
                    <span className="cs-challenge-num">{i + 1}</span>
                    <p>{line}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* 4. OBJECTIVES */}
            <section id="objectives-requirements" className="cs-sec">
              <h2 className="cs-sec__h">
                <span
                  className="cs-sec__icon"
                  dangerouslySetInnerHTML={{
                    __html: tocIconsSvg["objectives-requirements"],
                  }}
                />{" "}
                Objectives &amp; Requirements
              </h2>
              <div className="cs-obj-list">
                {[
                  "Create interactive, campaign-driven shopping experiences",
                  "Increase customer retention and active participation",
                  "Integrate campaigns directly into ecommerce workflows",
                  "Improve reward-based engagement and incentive transparency",
                  "Build a scalable backend powering lucky draws and coupons",
                  "Enable secure authentication and rich profile management",
                  "Deliver cross-platform mobile experiences with real-time notifications",
                ].map((obj, i) => (
                  <div key={i} className="cs-obj-card">
                    <span className="cs-obj-icon">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="10" />
                        <circle cx="12" cy="12" r="6" />
                        <circle cx="12" cy="12" r="2" />
                      </svg>
                    </span>
                    <p>{obj}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* 5. STRATEGY */}
            <section id="strategy-approach" className="cs-sec">
              <h2 className="cs-sec__h">
                <span
                  className="cs-sec__icon"
                  dangerouslySetInnerHTML={{
                    __html: tocIconsSvg["strategy-approach"],
                  }}
                />{" "}
                Strategy &amp; Approach
              </h2>
              <div className="cs-card-blue">
                <p>
                  At{" "}
                  <Link href="/mobile-app-development-company">
                    mTouch Labs, a mobile app development company
                  </Link>
                  , we approached Classyy as an engagement-driven ecommerce
                  platform focused on customer interaction and campaign
                  participation. Discovery work included ecommerce engagement
                  analysis, customer reward behavior research, campaign
                  participation workflow studies, and interactive shopping
                  experience planning.
                </p>
                <p>
                  Our design team shaped campaign-focused shopping journeys
                  and reward-driven flows, while the engineering team built a
                  scalable backend architecture and real-time campaign systems
                  to power lucky draws, coupons, and reward eligibility.
                </p>
                <p>
                  Cross-platform mobile builds were delivered using modern
                  Flutter tooling — prioritising fast iterations across
                  Android and iOS from a single codebase.
                </p>
                <p>
                  We also evaluated{" "}
                  <Link href="/react-native-app-development-company">
                    React Native app development
                  </Link>{" "}
                  during the feasibility review to keep the mobile stack
                  open-ended for future expansion of the platform.
                </p>
              </div>
            </section>

            {/* 6. TECH STACK */}
            <section id="technology-stack" className="cs-sec">
              <h2 className="cs-sec__h">
                <span
                  className="cs-sec__icon"
                  dangerouslySetInnerHTML={{
                    __html: tocIconsSvg["technology-stack"],
                  }}
                />{" "}
                Technology Stack
              </h2>
              <div className="cs-tech-grid">
                <div className="cs-tech-card">
                  <span className="cs-tech-card__label">MOBILE</span>
                  <div className="cs-tech-pills">
                    <span className="cs-tech-pill">Flutter</span>
                    <span className="cs-tech-pill">React Native</span>
                  </div>
                </div>
                <div className="cs-tech-card">
                  <span className="cs-tech-card__label">BACKEND</span>
                  <div className="cs-tech-pills">
                    <span className="cs-tech-pill">Node.js</span>
                    <span className="cs-tech-pill">Laravel</span>
                  </div>
                </div>
                <div className="cs-tech-card">
                  <span className="cs-tech-card__label">DATABASE</span>
                  <div className="cs-tech-pills">
                    <span className="cs-tech-pill">MySQL</span>
                    <span className="cs-tech-pill">PostgreSQL</span>
                  </div>
                </div>
                <div className="cs-tech-card">
                  <span className="cs-tech-card__label">CLOUD</span>
                  <div className="cs-tech-pills">
                    <span className="cs-tech-pill">AWS</span>
                    <span className="cs-tech-pill">Google Cloud</span>
                  </div>
                </div>
                <div className="cs-tech-card">
                  <span className="cs-tech-card__label">INTEGRATIONS</span>
                  <div className="cs-tech-pills">
                    <span className="cs-tech-pill">Push Notifications</span>
                    <span className="cs-tech-pill">Coupon APIs</span>
                    <span className="cs-tech-pill">Analytics</span>
                    <span className="cs-tech-pill">Payment-ready Architecture</span>
                  </div>
                </div>
              </div>
            </section>

            {/* 7. ARCHITECTURE */}
            <section id="solution-architecture" className="cs-sec">
              <h2 className="cs-sec__h">
                <span
                  className="cs-sec__icon"
                  dangerouslySetInnerHTML={{
                    __html: tocIconsSvg["solution-architecture"],
                  }}
                />{" "}
                Solution Architecture
              </h2>
              <div className="cs-card-light">
                <p>
                  <strong>User Application:</strong> product browsing, campaign
                  participation, coupon management, real-time notifications, and
                  reward tracking — all surfaced through a single mobile-first
                  experience.
                </p>
                <p>
                  <strong>Campaign Participation System:</strong> reward
                  allocation workflows, lucky draw management, coupon generation,
                  and winner announcement processes powered by a dedicated
                  service layer.
                </p>
                <p>
                  <strong>Ecommerce Module:</strong> product listings, cart and
                  checkout workflows, discount management, and campaign-linked
                  purchase flows built using our{" "}
                  <Link href="/custom-software-development-company">
                    custom software development services
                  </Link>
                  .
                </p>
                <p>
                  <strong>Admin Dashboard:</strong> campaign management, user
                  moderation, reports &amp; analytics, and winner tracking
                  systems for the operations team.
                </p>
              </div>
            </section>

            {/* 8. KEY FEATURES */}
            <section id="key-features" className="cs-sec">
              <h2 className="cs-sec__h">
                <span
                  className="cs-sec__icon"
                  dangerouslySetInnerHTML={{
                    __html: tocIconsSvg["key-features"],
                  }}
                />{" "}
                Key Features &amp; Functionalities
              </h2>
              <div className="cs-feat-grid">
                {[
                  {
                    emoji: "🛒",
                    title: "Interactive Ecommerce Shopping",
                    desc: "Browse products across fashion, electronics, home decor, and lifestyle categories.",
                  },
                  {
                    emoji: "🎯",
                    title: "Campaign-Based Purchase Flow",
                    desc: "Every eligible purchase automatically enters users into promotional campaigns and rewards.",
                  },
                  {
                    emoji: "🎁",
                    title: "Rewards & Incentive System",
                    desc: "Lucky draw entries, discount coupons, promotional rewards, and campaign incentives in one place.",
                  },
                  {
                    emoji: "🧾",
                    title: "Coupon Management",
                    desc: "View, manage, and apply coupons directly during checkout workflows.",
                  },
                  {
                    emoji: "🏆",
                    title: "Winner Announcement System",
                    desc: "Participate in draws, view campaign winners, and track full reward history.",
                  },
                  {
                    emoji: "🔐",
                    title: "Secure Authentication",
                    desc: "Mobile number login, secure onboarding, and protected account access.",
                  },
                  {
                    emoji: "👤",
                    title: "User Profile Management",
                    desc: "Manage personal details, addresses, preferences, and account settings.",
                  },
                  {
                    emoji: "📖",
                    title: "Participation Guidance",
                    desc: "Dedicated 'How It Works' sections for campaigns, coupons, and reward eligibility.",
                  },
                  {
                    emoji: "🔔",
                    title: "Real-Time Notifications",
                    desc: "Live updates for campaign launches, lucky draw results, rewards, and promotions.",
                  },
                ].map((f, i) => (
                  <div key={i} className="cs-feat-card">
                    <span className="cs-feat-emoji">{f.emoji}</span>
                    <h3>{f.title}</h3>
                    <p>{f.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* 9. UI/UX HIGHLIGHTS */}
            <section id="ui-ux-highlights" className="cs-sec">
              <h2 className="cs-sec__h">
                <span
                  className="cs-sec__icon"
                  dangerouslySetInnerHTML={{
                    __html: tocIconsSvg["ui-ux-highlights"],
                  }}
                />{" "}
                UI/UX Design Highlights
              </h2>
              <div className="cs-uiux-list">
                {[
                  "Interactive campaign layouts with energetic, reward-focused visuals",
                  "High-visibility promotional cards and shopping banners",
                  "Mobile-first ecommerce interface with simplified participation workflows",
                  "Better customer engagement and improved campaign participation",
                  "Increased shopping interaction, reduced checkout friction, and higher repeat activity",
                ].map((item, i) => (
                  <div key={i} className="cs-uiux-item">
                    <span className="cs-uiux-dot"></span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* 10. SCREENS — AUTO-SCROLLING */}
            <section id="screens" className="cs-sec">
              <h2 className="cs-sec__h">
                <span
                  className="cs-sec__icon"
                  dangerouslySetInnerHTML={{
                    __html: tocIconsSvg["screens"],
                  }}
                />{" "}
                Screens
              </h2>

              {/* App Screens — auto-scroll left */}
              <div className="cs-screens-block">
                <h3 className="cs-screens-block__title">App Screens</h3>
                <div className="cs-app-screens-scroll">
                  {APP_SCREENS_LOOP.map((screen, i) => (
                    <div key={`app-${i}`} className="cs-app-screen-card">
                      <img
                        src={screen}
                        alt={`Classyy App Screen ${(i % APP_SCREENS.length) + 1}`}
                        loading="lazy"
                        className="cs-app-screen-img"
                        aria-hidden={i >= APP_SCREENS.length ? true : undefined}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* 11. COLOR PALETTE */}
            <section id="color-palette" className="cs-sec">
              <h2 className="cs-sec__h">
                <span
                  className="cs-sec__icon"
                  dangerouslySetInnerHTML={{
                    __html: tocIconsSvg["color-palette"],
                  }}
                />{" "}
                Color Palette
              </h2>
              <div className="cs-color-row">
                {COLOR_PALETTE.map((c, i) => (
                  <div key={i} className="cs-color-card">
                    <div
                      className="cs-color-swatch"
                      style={{ backgroundColor: c.hex }}
                    ></div>
                    <span className="cs-color-name">{c.name}</span>
                    <span className="cs-color-hex">{c.hex}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* 12. TYPOGRAPHY */}
            <section id="typography" className="cs-sec">
              <h2 className="cs-sec__h">
                <span
                  className="cs-sec__icon"
                  dangerouslySetInnerHTML={{
                    __html: tocIconsSvg["typography"],
                  }}
                />{" "}
                Typography
              </h2>
              <div className="cs-typo-stack">
                {[
                  { font: "Montserrat", weight: "Headings — Bold 700", sample: "Classyy — Campaigns, Rewards, Wins", cls: "cs-typo-sample--heading" },
                  { font: "Urbanist", weight: "Body — Regular 400", sample: "Shop products, unlock campaigns, and win rewards.", cls: "cs-typo-sample--body" },
                ].map((row, i) => (
                  <div key={i} className="cs-typo-row">
                    <div className="cs-typo-meta">
                      <h3 className="cs-typo-font-name">{row.font}</h3>
                      <span className="cs-typo-weight">{row.weight}</span>
                    </div>
                    <p className={`cs-typo-sample ${row.cls}`}>{row.sample}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* 13. DEVELOPMENT PROCESS */}
            <section id="development-process" className="cs-sec">
              <h2 className="cs-sec__h">
                <span
                  className="cs-sec__icon"
                  dangerouslySetInnerHTML={{
                    __html: tocIconsSvg["development-process"],
                  }}
                />{" "}
                Development Process
              </h2>
              <div className="cs-timeline">
                {[
                  { title: "Requirement Analysis", desc: "Mapping business goals and customer engagement needs." },
                  { title: "Ecommerce Market Research", desc: "Studying competitive shopping and reward platforms." },
                  { title: "Campaign Workflow Planning", desc: "Designing draws, coupons, and reward eligibility flows." },
                  { title: "UX Wireframing", desc: "Sketching the participation-driven shopping journey." },
                  { title: "UI Design", desc: "Crafting energetic, reward-focused interfaces." },
                  { title: "Backend Architecture", desc: "Building scalable APIs and a real-time campaign engine." },
                  { title: "Campaign System Development", desc: "Lucky draw logic, coupon generation, winner tracking." },
                  { title: "Mobile App Development", desc: "Flutter and React Native builds for Android & iOS." },
                  { title: "QA Testing", desc: "Functional, regression, and load testing across devices." },
                  { title: "Performance Optimization", desc: "Tuning load times, API calls, and rendering." },
                  { title: "Deployment & Scaling", desc: "Cloud rollout with monitoring and CI/CD." },
                ].map((step, i) => (
                  <div key={i} className="cs-timeline__item">
                    <span className="cs-timeline__num">{i + 1}</span>
                    <div className="cs-timeline__content">
                      <h3>{step.title}</h3>
                      <p>{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* 14. SECURITY & PERFORMANCE */}
            <section id="security-performance" className="cs-sec">
              <h2 className="cs-sec__h">
                <span
                  className="cs-sec__icon"
                  dangerouslySetInnerHTML={{
                    __html: tocIconsSvg["security-performance"],
                  }}
                />{" "}
                Security &amp; Performance
              </h2>
              <div className="cs-sp-grid">
                {[
                  "Secure authentication systems with safe onboarding",
                  "Encrypted API communication across mobile and backend",
                  "Safe coupon validation workflows and tamper protection",
                  "Protected user account management with session controls",
                  "Secure cloud infrastructure on AWS / Google Cloud",
                  "Fast product loading with optimized mobile performance",
                  "Real-time campaign updates with sub-second feedback",
                  "Scalable backend systems and smooth checkout workflows",
                ].map((item, i) => (
                  <div key={i} className="cs-sp-card">
                    <span className="cs-sp-icon">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                      </svg>
                    </span>
                    <p>{item}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* 15. RESULTS & IMPACT */}
            <section id="results-impact" className="cs-sec">
              <h2 className="cs-sec__h">
                <span
                  className="cs-sec__icon"
                  dangerouslySetInnerHTML={{
                    __html: tocIconsSvg["results-impact"],
                  }}
                />{" "}
                Results &amp; Business Impact
              </h2>
              <div className="cs-impact-grid">
                {[
                  { title: "Interactive Experiences", desc: "Shoppers consistently engage with campaigns built into every purchase." },
                  { title: "Reward Participation", desc: "Lucky draws and coupon-driven flows lift active reward redemptions." },
                  { title: "Shopping Engagement", desc: "Browsing time and session depth grow with campaign-linked listings." },
                  { title: "Personalized Involvement", desc: "Targeted promotions match buyers to the campaigns they care about." },
                  { title: "Customer Retention", desc: "Repeat purchase activity improves as users chase rewards and wins." },
                  { title: "Campaign Interaction", desc: "Visibility and entry rates climb across launched promotions." },
                ].map((item, i) => {
                  const icons = ["🚀", "📈", "💡", "🎯", "⚡", "🔍"];
                  return (
                    <div key={i} className="cs-impact-card">
                      <div className="cs-impact-card__icon-wrap">
                        <span className="cs-impact-card__icon">
                          {icons[i % icons.length]}
                        </span>
                        <span className="cs-impact-card__num">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                      </div>
                      <h3 className="cs-impact-card__title">{item.title}</h3>
                      <p className="cs-impact-card__desc">{item.desc}</p>
                    </div>
                  );
                })}
              </div>
            </section>

            {/* 16. FUTURE SCOPE */}
            <section id="future-scope" className="cs-sec">
              <h2 className="cs-sec__h">
                <span
                  className="cs-sec__icon"
                  dangerouslySetInnerHTML={{
                    __html: tocIconsSvg["future-scope"],
                  }}
                />{" "}
                Future Scope &amp; Scalability
              </h2>
              <div className="cs-future-list">
                {[
                  "AI-powered reward personalization tuned to buying behavior",
                  "Smart campaign targeting based on customer segments",
                  "Referral-based reward ecosystems for organic growth",
                  "Tier-based customer memberships with escalating perks",
                  "Interactive shopping journeys and gamified experiences",
                  "Advanced personalized promotional experiences",
                  "Deeper customer engagement systems and analytics",
                ].map((item, i) => (
                  <div key={i} className="cs-future-item">
                    <span className="cs-future-arrow">→</span>
                    <p>{item}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* 17. CONCLUSION */}
            <section id="conclusion" className="cs-sec">
              <h2 className="cs-sec__h">
                <span
                  className="cs-sec__icon"
                  dangerouslySetInnerHTML={{
                    __html: tocIconsSvg["conclusion"],
                  }}
                />{" "}
                Conclusion
              </h2>
              <div className="cs-conclusion-card">
                <p>
                  Classyy is a scalable <strong>campaign-based ecommerce
                  solution</strong> successfully developed by{" "}
                  <strong>mTouch Labs</strong>. By combining digital commerce
                  with rewards, campaign participation, and customer engagement
                  systems, the platform delivers a more interactive and
                  retention-focused shopping experience.
                </p>
                <p>
                  If you are planning to{" "}
                  <Link href="/contact-us">build a similar ecommerce solution</Link>
                  , an interactive shopping application, or a campaign-focused
                  commerce ecosystem, mTouch Labs can develop a tailored
                  solution aligned with your business goals.
                </p>
              </div>
            </section>

            {/* 18. FAQ */}
            <section id="faq" className="cs-sec">
              <h2 className="cs-sec__h">
                <span
                  className="cs-sec__icon"
                  dangerouslySetInnerHTML={{
                    __html: tocIconsSvg["faq"],
                  }}
                />{" "}
                Frequently Asked Questions
              </h2>
              <div className="cs-faq-list">
                {FAQS.map((f, i) => (
                  <div key={i} className="cs-faq-item">
                    <button className="cs-faq-q" aria-expanded="false">
                      <span>{f.question}</span>
                      <svg
                        className="cs-faq-chevron"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <path
                          d="M5 7.5L10 12.5L15 7.5"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                    <div className="cs-faq-a">
                      <p>{f.answer}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
          {/* end cs-content */}
        </div>
        {/* end cs-layout */}

        {/* CTA */}
        <section className="cs-cta">
          <div className="cs-cta__glow"></div>
          <div className="cs-container">
            <div className="cs-cta__inner">
              <span className="cs-tag cs-tag--light">Let&apos;s Work Together</span>
              <h2 className="cs-cta__title">
                Have an idea? Let&apos;s build
                <br />
                something amazing.
              </h2>
              <p className="cs-cta__desc">
                We brought Classyy&apos;s vision to life. Now it&apos;s your turn
                — talk to our{" "}
                <Link href="/ecommerce-app-development-company">
                  ecommerce app development company
                </Link>
                .
              </p>
              <div className="cs-cta__btns">
                <Link href="/contact-us" className="cs-cta__primary">
                  Start Your Project →
                </Link>
                <Link href="/portfolio" className="cs-cta__ghost">
                  Explore Portfolio
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* TOC scroll-spy + FAQ accordion */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
(function initClassyy() {
  function bindFaq() {
    var items = document.querySelectorAll('.cs-faq-item');
    if (!items.length) { setTimeout(bindFaq, 200); return; }
    items.forEach(function(item) {
      var q = item.querySelector('.cs-faq-q');
      if (!q || q.__bound) return;
      q.__bound = true;
      q.addEventListener('click', function() {
        var expanded = q.getAttribute('aria-expanded') === 'true';
        items.forEach(function(i) {
          var iq = i.querySelector('.cs-faq-q');
          if (iq) iq.setAttribute('aria-expanded', 'false');
          i.classList.remove('open');
        });
        if (!expanded) {
          q.setAttribute('aria-expanded', 'true');
          item.classList.add('open');
        }
      });
    });
  }
  bindFaq();
})();
        `,
        }}
      />
    </>
  );
}
