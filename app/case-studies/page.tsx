import type { Metadata } from "next";
import { sql } from "@/lib/db";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Case Studies | mTouch Labs",
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

  return (
    <div style={{ fontFamily: "'Outfit', system-ui, sans-serif" }}>

      <section className="csx-hero">
        <div className="csx-hero__bg" style={{ backgroundImage: "url('/images/case-study-banner.jpg')" }}></div>
        <div className="csx-hero__overlay"></div>
        <div className="csx-hero__inner">
          <div className="csx-hero__bread">
            <Link href="/">Home</Link>
            <span className="csx-hero__bread-sep">/</span>
            <span className="csx-hero__bread-current">Case Studies</span>
          </div>
          <h1 className="csx-hero__title"><span className="csx-hero__title-grad">Case Studies</span></h1>
          <p className="csx-hero__sub">Real projects. Real challenges. Real outcomes.</p>
        </div>
      </section>

      <div className="csx-listing">
        <div className="csx-grid">
          {rows.map((cs) => (
            <Link href={`/case-studies/${cs.slug}`} key={cs.id} className="csx-card">
              <div className="csx-card__img-wrap">
                <img src={cs.image || "/images/Light.png"} alt={cs.title} className="csx-card__img" />
              </div>
              <div className="csx-card__body">
                <h2 className="csx-card__title">{cs.title}</h2>
                <p className="csx-card__desc">{cs.overview ? (cs.overview.length > 130 ? cs.overview.slice(0, 130) + "..." : cs.overview) : ""}</p>
                <div className="csx-card__foot">
                  <span className="csx-card__more">
                    Learn more
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6"/></svg>
                  </span>
                  <img src="/images/Light.png" alt="mTouch Labs" className="csx-card__logo" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
