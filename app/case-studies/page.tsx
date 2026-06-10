import type { Metadata } from "next";
import { sql } from "@/lib/db";
import { getCaseStudyImages } from "@/lib/caseStudyImages";
import { getCaseStudyCategory } from "@/lib/caseStudyCategories";
import CaseStudiesGrid from "@/components/CaseStudiesGrid";
import "../it-solutions-company/style.css";

export const metadata: Metadata = {
  title: "Case Studies",
  description: "Explore real-world case studies. See how mTouch Labs delivers results across healthcare, e-commerce, and logistics.",
  alternates: { canonical: "https://www.mtouchlabs.com/case-studies" },
  openGraph: {
    title: "Case Studies | mTouch Labs",
    description: "Real-world case studies from mTouch Labs across industries.",
    url: "https://www.mtouchlabs.com/case-studies",
    siteName: "mTouch Labs",
    type: "website",
    images: [{ url: "/images/Light.png", width: 1200, height: 630, alt: "mTouch Labs Case Studies" }],
  },
};

interface CS { id: number; slug: string; title: string; overview: string; image: string; industry: string; }

export const revalidate = 60;

export default async function CaseStudiesPage() {
  const rows = await sql`
    SELECT id, slug, title, overview, image, industry
    FROM case_studies WHERE published = true OR status = 'published'
    ORDER BY COALESCE(publish_date, created_at) DESC
  ` as CS[];

  // Resolve the banner image + curated filter group for each study so the
  // client filter component can render the portfolio-style cards/filter bar.
  const cards = rows.map((cs) => ({
    id: cs.id,
    slug: cs.slug,
    title: cs.title,
    industry: cs.industry,
    image: getCaseStudyImages(cs.slug)?.banner || cs.image || "/images/Light.png",
    category: getCaseStudyCategory(cs.slug, cs.industry),
  }));

  return (
    <div style={{ fontFamily: "'Outfit', system-ui, sans-serif" }}>

      {/* Hero — identical layout to the /portfolio page (itsc-hero), with
          case-studies-relevant content. */}
      <div className="itsc-page">
        <section className="itsc-hero">
          <div className="itsc-hero-grid" aria-hidden="true" />
          <div className="itsc-blob itsc-blob-a" aria-hidden="true" />
          <div className="itsc-blob itsc-blob-b" aria-hidden="true" />
          <div className="itsc-blob itsc-blob-c" aria-hidden="true" />

          <div className="itsc-container">
            <div className="itsc-hero-content">
              <div className="itsc-badge">
                <span className="itsc-badge-dot" />
                Our Case Studies
              </div>

              <h1 className="itsc-h1">
                Real Results from
                <br />
                <span className="itsc-h1-gradient">Real-World Projects</span>
              </h1>

              <p className="itsc-hero-sub">
                See how we turn complex challenges into measurable outcomes — across AI &amp; automation,
                ecommerce, healthcare, fintech, logistics and SaaS — engineered by our expert{" "}
                <a className="itsc-inline-link" href="/services">
                  product, design and engineering teams
                </a>
                .
              </p>

              <div className="itsc-ctas">
                <a href="/contact-us" className="itsc-btn itsc-btn-primary">
                  <i className="fa-solid fa-paper-plane" />
                  Start Your Project
                </a>
                <a href="/on-demand-products-development-company-hyderabad" className="itsc-btn itsc-btn-ghost">
                  Explore Products
                  <i className="fa-solid fa-arrow-right" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Listing + filter bar — same card layout/spacing/hover and filter
          behaviour as the /portfolio page (global blog.css + bootstrap grid:
          3 cards per row on desktop, 2 on tablet, blue title on hover). */}
      <CaseStudiesGrid items={cards} />
    </div>
  );
}
