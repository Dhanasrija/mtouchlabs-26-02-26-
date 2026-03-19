import { sql } from "@/lib/db";
import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
export const dynamic = "force-dynamic";
interface CS {
  id: number; slug: string; title: string; industry: string; platform: string;
  icon: string; color: string; image: string; image_alt: string;
  overview: string; challenge: string; challenge_points: string[];
  approach: string; solution: string; features: string[];
  technologies: { name: string; purpose: string }[];
  dev_process: { step: string; desc: string }[];
  results: string; result_points: string[]; conclusion: string;
  testimonial_quote: string; testimonial_role: string; testimonial_initials: string;
  internal_links: { url: string; text: string }[];
  meta_title: string; meta_description: string; keywords: string;
  canonical_url: string; breadcrumb_title: string;
  og_title: string; og_description: string; og_image: string;
  faq_schema: { question: string; answer: string }[];
  gallery_images: string[]; schema_json_ld: string; status: string; published: boolean;
  publish_date: string; created_at: string; updated_at: string;
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const r = await sql`SELECT title,meta_title,meta_description,og_title,og_description,og_image,canonical_url,keywords FROM case_studies WHERE slug=${slug} AND (published=true OR status='published')`;
  if (r.length === 0) return { title: "Not Found" };
  const c = r[0]; const u = `https://www.mtouchlabs.com/case-studies/${slug}`;
  return {
    title: c.meta_title || c.title, description: c.meta_description,
    keywords: c.keywords || undefined,
    alternates: { canonical: c.canonical_url || u },
    openGraph: { title: c.og_title || c.title, description: c.og_description || c.meta_description, url: u, siteName: "mTouch Labs", type: "article", images: [{ url: c.og_image || "/images/Light.png", width: 1200, height: 630 }] },
    twitter: { card: "summary_large_image" as const, title: c.og_title || c.title, description: c.og_description || c.meta_description, images: [c.og_image || "/images/Light.png"] },
  };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const rows = await sql`SELECT * FROM case_studies WHERE slug=${slug} AND (published=true OR status='published')` as CS[];
  if (rows.length === 0) notFound();
  const cs = rows[0];
  const url = `https://www.mtouchlabs.com/case-studies/${slug}`;

  const cp: string[] = Array.isArray(cs.challenge_points) ? cs.challenge_points : [];
  const ft: string[] = Array.isArray(cs.features) ? cs.features : [];
  const tc: {name:string;purpose:string}[] = Array.isArray(cs.technologies) ? cs.technologies : [];
  const dp: {step:string;desc:string}[] = Array.isArray(cs.dev_process) ? cs.dev_process : [];
  const rp: string[] = Array.isArray(cs.result_points) ? cs.result_points : [];
  const fq: {question:string;answer:string}[] = Array.isArray(cs.faq_schema) ? cs.faq_schema : [];
  const il: {url:string;text:string}[] = Array.isArray(cs.internal_links) ? cs.internal_links : [];
  let gi: string[] = []; try { const raw = cs.gallery_images; if (Array.isArray(raw)) gi = raw; else if (typeof raw === "string") gi = JSON.parse(raw); else if (raw && typeof raw === "object") gi = Object.values(raw) as string[]; } catch { gi = []; }
  const jld = { "@context": "https://schema.org", "@type": "CreativeWork", name: cs.title, description: cs.meta_description || cs.overview, author: { "@type": "Organization", name: "mTouch Labs", url: "https://www.mtouchlabs.com" }, publisher: { "@type": "Organization", name: "mTouch Labs", logo: { "@type": "ImageObject", url: "https://www.mtouchlabs.com/images/logo.png" } }, mainEntityOfPage: url };
  const fjld = fq.length > 0 ? { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: fq.map(f => ({ "@type": "Question", name: f.question, acceptedAnswer: { "@type": "Answer", text: f.answer } })) } : null;
  const shortTitle = cs.title.length > 55 ? cs.title.slice(0, 52) + '...' : cs.title;

  // Stats data from result points
  const statIcons = ['✓', '✓', '✓', '✓'];
  const statDescs = [
    'Delivering measurable business outcomes',
    'Improving operational efficiency',
    'Enhancing user experience across platforms',
    'Building scalable digital solutions',
  ];

  return (
    <div className="csx-detail">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jld) }} />
      {fjld && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(fjld) }} />}

      {/* HERO with breadcrumbs */}
      <section className="csx-hero">
        <div className="csx-hero__bg" style={{ backgroundImage: `url('${cs.image || "/images/healthcarebanner.svg"}')` }}></div>
        <div className="csx-hero__overlay"></div>
        <div className="csx-hero__inner">
          <div className="csx-hero__bread">
            <Link href="/">Home</Link>
            <span className="csx-hero__bread-sep">/</span>
            <Link href="/case-studies">Case Studies</Link>
            <span className="csx-hero__bread-sep">/</span>
            <span className="csx-hero__bread-current">{cs.breadcrumb_title || cs.industry || 'Details'}</span>
          </div>
          <h1 className="csx-hero__title"><span className="csx-hero__title-grad">{shortTitle}</span></h1>
          <p className="csx-hero__sub">by mTouch Labs &bull; {cs.industry} &bull; {cs.platform}</p>
        </div>
      </section>

      {/* OVERVIEW */}
      <div className="csx-detail__head">
        {cs.overview && <p className="csx-detail__overview">{cs.overview}</p>}
      </div>

      {/* BANNER IMAGE */}
      {cs.image && (<div className="csx-detail__banner-wrap"><img src={cs.image} alt={cs.image_alt || cs.title} /></div>)}

      {/* TWO COLUMN SPLIT */}
      <div className="csx-split">
        <aside className="csx-sidebar">
          <h2 className="csx-sidebar__title">What makes this project unique?</h2>
          <p className="csx-sidebar__label">Project Details</p>
          <div className="csx-pills">
            {cs.industry && <span className="csx-pill">{cs.industry}</span>}
            {cs.platform && <span className="csx-pill">{cs.platform}</span>}
            {tc.map((t, i) => <span key={i} className="csx-pill">{t.name}</span>)}
          </div>
          {cs.testimonial_quote && (
            <div className="csx-sidebar__quote">
              <p>&ldquo;{cs.testimonial_quote}&rdquo;</p>
              <span className="csx-sidebar__quote-author">{cs.testimonial_role}</span>
            </div>
          )}
        </aside>

        <div className="csx-content">
          {cs.challenge && (<><h2>Challenges that needed solving</h2><p>{cs.challenge}</p>{cp.length > 0 && <ul>{cp.map((p, i) => <li key={i}>{p}</li>)}</ul>}</>)}
          {cs.approach && (<><h2>Our strategic approach</h2><p>{cs.approach}</p></>)}
          {cs.solution && (<><h2>The solution we delivered</h2><p>{cs.solution}</p>{ft.length > 0 && <ul>{ft.map((f, i) => <li key={i}><strong>{f}</strong></li>)}</ul>}</>)}
          {tc.length > 0 && (<><h2>Technologies used</h2><ul>{tc.map((t, i) => <li key={i}><strong>{t.name}</strong> — {t.purpose}</li>)}</ul></>)}
          {dp.length > 0 && (<><h2>Development process</h2><ul>{dp.map((s, i) => <li key={i}><strong>{s.step}</strong> — {s.desc}</li>)}</ul></>)}
          {cs.conclusion && (<><h2>Key takeaway</h2><p>{cs.conclusion}</p></>)}
        </div>
      </div>

      {/* STATS */}
      {rp.length > 0 && (
        <div className="csx-stats">
          {rp.slice(0, 4).map((r, i) => (
            <div key={i} className="csx-stat">
              <div className="csx-stat__num">{statIcons[i]}</div>
              <div className="csx-stat__label">{r}</div>
              <div className="csx-stat__line"></div>
              <div className="csx-stat__desc">{statDescs[i]}</div>
            </div>
          ))}
        </div>
      )}

      <div className="csx-images">{(gi.length > 0 ? gi : ["/images/healthcare-dashboard.svg", "/images/healthcare-chat.svg", "/images/healthcare-booking.svg", "/images/healthcare-results.svg"]).map((img: string, i: number) => (<img key={i} src={img} alt={`${cs.title} - image ${i + 1}`} />))}</div>

      {/* SERVICES */}
      {il.length > 0 && (
        <div className="csx-services">
          <h3 className="csx-services__title">Related Services</h3>
          <div className="csx-services__links">
            {il.map((l, i) => <Link key={i} href={l.url} className="csx-services__link">{l.text} →</Link>)}
          </div>
        </div>
      )}

      {/* FAQ */}
      {fq.length > 0 && (
        <div className="csx-faq">
          <h2 className="csx-faq__title">Frequently Asked Questions</h2>
          {fq.map((f, i) => (
            <details key={i}>
              <summary>
                {f.question}
                <svg className="csx-chevron" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6"/></svg>
              </summary>
              <div className="csx-faq-answer">{f.answer}</div>
            </details>
          ))}
        </div>
      )}

      {/* CTA */}
      <div className="csx-cta">
        <div className="csx-cta__inner">
          <h2 className="csx-cta__title">Ready to build something similar?</h2>
          <p className="csx-cta__text">Let&apos;s discuss how mTouch Labs can build a solution for your business.</p>
          <Link href="/contact-us" className="csx-cta__btn">Get a Free Consultation →</Link>
        </div>
      </div>
    </div>
  );
}