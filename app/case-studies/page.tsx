import type { Metadata } from "next";
import { sql } from "@/lib/db";
import Link from "next/link";
import { getCaseStudyImages } from "@/lib/caseStudyImages";

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

      {/* Listing — same card layout/spacing/hover as the /portfolio page
          (uses the global blog.css + bootstrap grid: 3 cards per row on
          desktop, 2 on tablet, blue title on hover). */}
      <div className="blog-block sec-pad pt80">
        <div className="container">
          <div className="blog-post">
            <div className="row" id="cs-cards-container">
              {rows.map((cs) => {
                const imgs = getCaseStudyImages(cs.slug);
                const cardImg = imgs?.banner || cs.image || "/images/Light.png";
                const href = `/case-studies/${cs.slug}`;
                return (
                  <div className="col-lg-4 col-sm-6 blog-card-item" key={cs.id} data-aos="fade-up">
                    <div className="ree-media-crd">
                      <div className="rpl-img">
                        <Link href={href}>
                          <img src={cardImg} alt={cs.title} className="fill-fixed" />
                        </Link>
                      </div>
                      <div className="rpl-contt">
                        {cs.industry && (
                          <p className="port-tags" style={{ fontSize: "14px", fontWeight: 600 }}>{cs.industry}</p>
                        )}
                        <h4><Link href={href}>{cs.title}</Link></h4>
                        <Link href={href} className="blog-read-more">
                          Read More <i className="fas fa-arrow-right"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
