import type { Metadata } from "next";
import Link from "next/link";
import FAQSchema from "@/components/seo/FAQSchema";
import "./portfolio-grid.css";

export const metadata: Metadata = {
  title: "Portfolio | Web And Mobile App Development",
  description: "Explore mTouch Labs' portfolio of innovative web and mobile apps built across eCommerce, healthcare, education, mobility, enterprise and social platforms by our expert Android, iOS and full-stack teams.",
  keywords: ["mTouch Labs portfolio", "web app portfolio", "mobile app portfolio", "android app case studies", "ios app case studies", "enterprise software portfolio"],
  alternates: {
    canonical: "https://www.mtouchlabs.com/portfolio",
  },
  robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  openGraph: {
    title: "Portfolio | Web And Mobile App Development",
    description: "Explore mTouch Labs' portfolio of web and mobile apps across eCommerce, healthcare, education, mobility, enterprise and social platforms.",
    url: "https://www.mtouchlabs.com/portfolio",
    siteName: "mTouch Labs",
    type: "website",
    images: [{ url: "https://www.mtouchlabs.com/images/web-and-mobile-app-development.webp", width: 1200, height: 630, alt: "mTouch Labs Portfolio — Web and Mobile App Development" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@mtouchlabs",
    creator: "@mtouchlabs",
    title: "Portfolio | Web And Mobile App Development",
    description: "Explore mTouch Labs' portfolio of innovative web and mobile apps.",
    images: ["https://www.mtouchlabs.com/images/web-and-mobile-app-development.webp"],
  },
};

/**
 * Six fixed portfolio categories. The `filter` value must match the
 * `category` field of every project in /public/js/portfolio.js exactly
 * (the comparison there is case-insensitive).
 */
const CATEGORIES: { label: string; filter: string }[] = [
  { label: "All Projects", filter: "all" },
  { label: "eCommerce & Retail", filter: "eCommerce & Retail" },
  { label: "Food, Grocery & Delivery", filter: "Food, Grocery & Delivery" },
  { label: "Healthcare & Education", filter: "Healthcare & Education" },
  { label: "Real Estate & Mobility", filter: "Real Estate & Mobility" },
  { label: "Enterprise, CRM & Service Platforms", filter: "Enterprise, CRM & Service Platforms" },
  { label: "Social, Media & Lifestyle", filter: "Social, Media & Lifestyle" },
];

const faqs = [
  {
    q: "What does the mTouch Labs portfolio include?",
    a: "The portfolio showcases a wide range of digital products created by mTouch Labs, including mobile apps, business websites, e-commerce platforms, SaaS products, and custom software solutions across multiple industries.",
  },
  {
    q: "Can I request a project similar to something in the mTouch Labs portfolio?",
    a: "Yes, you can. If you see a project that matches your vision or business model, the team can build a customized version tailored to your features, branding, and workflow requirements.",
  },
  {
    q: "Do you work on both mobile and web development projects?",
    a: "Absolutely. The portfolio includes end-to-end mobile app development (Android, iOS, Flutter) as well as modern web development projects using scalable, secure, and high-performance technologies.",
  },
  {
    q: "How can I get a quote for a project like the ones in your portfolio?",
    a: "Share your project details through our contact form. Once received, the team will review your requirements and send you an estimated cost and timeline.",
  },
  {
    q: "Are all projects in the portfolio custom-built for clients?",
    a: "Yes. Each project featured in the portfolio was designed, developed, and deployed based on individual client needs, ensuring unique outcomes aligned with their business goals.",
  },
];

export default function Page() {
  return (
    <main className="pf-listing">
      {/* ═══════════ CATEGORY FILTER BAR — first thing on the page ═══════════ */}
      <section className="pf-filterbar" aria-label="Portfolio categories">
        <div className="pf-container">
          <div className="pf-filterbar-head">
            <h1 className="pf-title">
              Our <span>Portfolio</span>
            </h1>
          </div>

          <div className="blog-filter-buttons" role="group" aria-label="Filter projects by category">
            {CATEGORIES.map((c, i) => (
              <button
                key={c.filter}
                type="button"
                className={`blog-filter-btn${i === 0 ? " active" : ""}`}
                data-filter={c.filter}
                aria-pressed={i === 0 ? "true" : "false"}
              >
                {c.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ PROJECT GRID ═══════════ */}
      <section className="pf-grid-section" id="portfolio-grid">
        <div className="pf-container">
          <div className="blog-post">
            {/* Cards are rendered by /public/js/portfolio.js */}
            <div id="blog-cards-container" />
          </div>
          <div id="pagination-container" />
        </div>
      </section>

      {/* ═══════════ CTA ═══════════ */}
      <section className="pf-cta">
        <div className="pf-container">
          <div className="pf-cta-box">
            <h2>Hire a world-class web and mobile app development team</h2>
            <p>
              Have an app idea? Our Android, iOS and full-stack engineers build and ship
              client projects to a fixed timeline — with the same care you see in every
              project above.
            </p>
            <div className="pf-cta-actions">
              <Link href="/contact-us" className="pf-btn pf-btn-solid">
                Start Your Project <i className="fas fa-arrow-right" aria-hidden="true" />
              </Link>
              <Link href="/services" className="pf-btn pf-btn-outline">
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ FAQ ═══════════ */}
      <section className="pf-faq">
        <div className="pf-container">
          <div className="pf-faq-head">
            <h2>
              Your Questions <span>Answered</span> Clearly
            </h2>
            <p>Everything you need to know about the mTouch Labs portfolio.</p>
          </div>
          <div className="pf-faq-list">
            {faqs.map((f, i) => (
              <details className="pf-faq-item" key={f.q} {...(i === 0 ? { open: true } : {})}>
                <summary className="pf-faq-q">
                  <span>{f.q}</span>
                  <span className="pf-faq-icon" aria-hidden="true">
                    <i className="fas fa-plus" />
                  </span>
                </summary>
                <p className="pf-faq-a">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <FAQSchema faqs={faqs} />
    </main>
  );
}
