// import { sql } from "@/lib/db";
// import { notFound } from "next/navigation";
// import Link from "next/link";
// import type { Metadata } from "next";
// export const dynamic = "force-dynamic";
// interface CS {
//   id: number; slug: string; title: string; industry: string; platform: string;
//   icon: string; color: string; image: string; image_alt: string;
//   overview: string; challenge: string; challenge_points: string[];
//   approach: string; solution: string; features: string[];
//   technologies: { name: string; purpose: string }[];
//   dev_process: { step: string; desc: string }[];
//   results: string; result_points: string[]; conclusion: string;
//   testimonial_quote: string; testimonial_role: string; testimonial_initials: string;
//   internal_links: { url: string; text: string }[];
//   meta_title: string; meta_description: string; keywords: string;
//   canonical_url: string; breadcrumb_title: string;
//   og_title: string; og_description: string; og_image: string;
//   faq_schema: { question: string; answer: string }[];
//   gallery_images: string[]; schema_json_ld: string; status: string; published: boolean;
//   publish_date: string; created_at: string; updated_at: string;
// }

// export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
//   const { slug } = await params;
//   const r = await sql`SELECT title,meta_title,meta_description,og_title,og_description,og_image,canonical_url,keywords FROM case_studies WHERE slug=${slug} AND (published=true OR status='published')`;
//   if (r.length === 0) return { title: "Not Found" };
//   const c = r[0]; const u = `https://www.mtouchlabs.com/case-studies/${slug}`;
//   return {
//     title: c.meta_title || c.title, description: c.meta_description,
//     keywords: c.keywords || undefined,
//     alternates: { canonical: c.canonical_url || u },
//     openGraph: { title: c.og_title || c.title, description: c.og_description || c.meta_description, url: u, siteName: "mTouch Labs", type: "article", images: [{ url: c.og_image || "/images/Light.png", width: 1200, height: 630 }] },
//     twitter: { card: "summary_large_image" as const, title: c.og_title || c.title, description: c.og_description || c.meta_description, images: [c.og_image || "/images/Light.png"] },
//   };
// }

// export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
//   const { slug } = await params;
//   const rows = await sql`SELECT * FROM case_studies WHERE slug=${slug} AND (published=true OR status='published')` as CS[];
//   if (rows.length === 0) notFound();
//   const cs = rows[0];
//   const url = `https://www.mtouchlabs.com/case-studies/${slug}`;

//   const cp: string[] = Array.isArray(cs.challenge_points) ? cs.challenge_points : [];
//   const ft: string[] = Array.isArray(cs.features) ? cs.features : [];
//   const tc: {name:string;purpose:string}[] = Array.isArray(cs.technologies) ? cs.technologies : [];
//   const dp: {step:string;desc:string}[] = Array.isArray(cs.dev_process) ? cs.dev_process : [];
//   const rp: string[] = Array.isArray(cs.result_points) ? cs.result_points : [];
//   const fq: {question:string;answer:string}[] = Array.isArray(cs.faq_schema) ? cs.faq_schema : [];
//   const il: {url:string;text:string}[] = Array.isArray(cs.internal_links) ? cs.internal_links : [];
//   let gi: string[] = []; try { const raw = cs.gallery_images; if (Array.isArray(raw)) gi = raw; else if (typeof raw === "string") gi = JSON.parse(raw); else if (raw && typeof raw === "object") gi = Object.values(raw) as string[]; } catch { gi = []; }
//   const jld = { "@context": "https://schema.org", "@type": "CreativeWork", name: cs.title, description: cs.meta_description || cs.overview, author: { "@type": "Organization", name: "mTouch Labs", url: "https://www.mtouchlabs.com" }, publisher: { "@type": "Organization", name: "mTouch Labs", logo: { "@type": "ImageObject", url: "https://www.mtouchlabs.com/images/logo.png" } }, mainEntityOfPage: url };
//   const fjld = fq.length > 0 ? { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: fq.map(f => ({ "@type": "Question", name: f.question, acceptedAnswer: { "@type": "Answer", text: f.answer } })) } : null;
//   const shortTitle = cs.title.length > 55 ? cs.title.slice(0, 52) + '...' : cs.title;

//   // Stats data from result points
//   const statIcons = ['✓', '✓', '✓', '✓'];
//   const statDescs = [
//     'Delivering measurable business outcomes',
//     'Improving operational efficiency',
//     'Enhancing user experience across platforms',
//     'Building scalable digital solutions',
//   ];

//   return (
//     <div className="csx-detail">
//       <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jld) }} />
//       {fjld && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(fjld) }} />}

//       {/* HERO with breadcrumbs */}
//       <section className="csx-hero">
//         <div className="csx-hero__bg" style={{ backgroundImage: `url('${cs.image || "/images/healthcarebanner.svg"}')` }}></div>
//         <div className="csx-hero__overlay"></div>
//         <div className="csx-hero__inner">
//           <div className="csx-hero__bread">
//             <Link href="/">Home</Link>
//             <span className="csx-hero__bread-sep">/</span>
//             <Link href="/case-studies">Case Studies</Link>
//             <span className="csx-hero__bread-sep">/</span>
//             <span className="csx-hero__bread-current">{cs.breadcrumb_title || cs.industry || 'Details'}</span>
//           </div>
//           <h1 className="csx-hero__title"><span className="csx-hero__title-grad">{shortTitle}</span></h1>
//           <p className="csx-hero__sub">by mTouch Labs &bull; {cs.industry} &bull; {cs.platform}</p>
//         </div>
//       </section>

//       {/* OVERVIEW */}
//       <div className="csx-detail__head">
//         {cs.overview && <p className="csx-detail__overview">{cs.overview}</p>}
//       </div>

//       {/* BANNER IMAGE */}
//       {cs.image && (<div className="csx-detail__banner-wrap"><img src={cs.image} alt={cs.image_alt || cs.title} /></div>)}

//       {/* TWO COLUMN SPLIT */}
//       <div className="csx-split">
//         <aside className="csx-sidebar">
//           <h2 className="csx-sidebar__title">What makes this project unique?</h2>
//           <p className="csx-sidebar__label">Project Details</p>
//           <div className="csx-pills">
//             {cs.industry && <span className="csx-pill">{cs.industry}</span>}
//             {cs.platform && <span className="csx-pill">{cs.platform}</span>}
//             {tc.map((t, i) => <span key={i} className="csx-pill">{t.name}</span>)}
//           </div>
//           {cs.testimonial_quote && (
//             <div className="csx-sidebar__quote">
//               <p>&ldquo;{cs.testimonial_quote}&rdquo;</p>
//               <span className="csx-sidebar__quote-author">{cs.testimonial_role}</span>
//             </div>
//           )}
//         </aside>

//         <div className="csx-content">
//           {cs.challenge && (<><h2>Challenges that needed solving</h2><p>{cs.challenge}</p>{cp.length > 0 && <ul>{cp.map((p, i) => <li key={i}>{p}</li>)}</ul>}</>)}
//           {cs.approach && (<><h2>Our strategic approach</h2><p>{cs.approach}</p></>)}
//           {cs.solution && (<><h2>The solution we delivered</h2><p>{cs.solution}</p>{ft.length > 0 && <ul>{ft.map((f, i) => <li key={i}><strong>{f}</strong></li>)}</ul>}</>)}
//           {tc.length > 0 && (<><h2>Technologies used</h2><ul>{tc.map((t, i) => <li key={i}><strong>{t.name}</strong> — {t.purpose}</li>)}</ul></>)}
//           {dp.length > 0 && (<><h2>Development process</h2><ul>{dp.map((s, i) => <li key={i}><strong>{s.step}</strong> — {s.desc}</li>)}</ul></>)}
//           {cs.conclusion && (<><h2>Key takeaway</h2><p>{cs.conclusion}</p></>)}
//         </div>
//       </div>

//       {/* STATS */}
//       {rp.length > 0 && (
//         <div className="csx-stats">
//           {rp.slice(0, 4).map((r, i) => (
//             <div key={i} className="csx-stat">
//               <div className="csx-stat__num">{statIcons[i]}</div>
//               <div className="csx-stat__label">{r}</div>
//               <div className="csx-stat__line"></div>
//               <div className="csx-stat__desc">{statDescs[i]}</div>
//             </div>
//           ))}
//         </div>
//       )}

//       <div className="csx-images">{(gi.length > 0 ? gi : ["/images/healthcare-dashboard.svg", "/images/healthcare-chat.svg", "/images/healthcare-booking.svg", "/images/healthcare-results.svg"]).map((img: string, i: number) => (<img key={i} src={img} alt={`${cs.title} - image ${i + 1}`} />))}</div>

//       {/* SERVICES */}
//       {il.length > 0 && (
//         <div className="csx-services">
//           <h3 className="csx-services__title">Related Services</h3>
//           <div className="csx-services__links">
//             {il.map((l, i) => <Link key={i} href={l.url || "#"} className="csx-services__link">{l.text} →</Link>)}
//           </div>
//         </div>
//       )}

//       {/* FAQ */}
//       {fq.length > 0 && (
//         <div className="csx-faq">
//           <h2 className="csx-faq__title">Frequently Asked Questions</h2>
//           {fq.map((f, i) => (
//             <details key={i}>
//               <summary>
//                 {f.question}
//                 <svg className="csx-chevron" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6"/></svg>
//               </summary>
//               <div className="csx-faq-answer">{f.answer}</div>
//             </details>
//           ))}
//         </div>
//       )}

//       {/* CTA */}
//       <div className="csx-cta">
//         <div className="csx-cta__inner">
//           <h2 className="csx-cta__title">Ready to build something similar?</h2>
//           <p className="csx-cta__text">Let&apos;s discuss how mTouch Labs can build a solution for your business.</p>
//           <Link href="/contact-us" className="csx-cta__btn">Get a Free Consultation →</Link>
//         </div>
//       </div>
//     </div>
//   );
// }

import { sql } from "@/lib/db";
import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import TocScrollHighlight from '@/components/TocScrollHighlight';
export const dynamic = "force-dynamic";

const SITE_URL = "https://www.mtouchlabs.com";

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
  publish_date: string; created_at: string; // updated_at: string;
}

// ── Helpers ──
function highlightTitle(title: string): { before: string; highlight: string; after: string } {
  const words = title.split(" ");
  if (words.length > 4) {
    const start = Math.floor(words.length * 0.3);
    const end = Math.min(start + 3, words.length);
    return {
      before: words.slice(0, start).join(" ") + " ",
      highlight: words.slice(start, end).join(" "),
      after: " " + words.slice(end).join(" "),
    };
  }
  return { before: "", highlight: title, after: "" };
}

// ── Metadata ──
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const r = await sql`
    SELECT title, meta_title, meta_description, og_title, og_description, og_image, canonical_url, keywords
    FROM case_studies WHERE slug=${slug} AND (published=true OR status='published')
  `;
  if (r.length === 0) return { title: "Not Found" };
  const c = r[0];
  const u = `${SITE_URL}/case-studies/${slug}`;
  return {
    title: c.meta_title || c.title,
    description: c.meta_description,
    keywords: c.keywords || undefined,
    alternates: { canonical: c.canonical_url || u },
    openGraph: {
      title: c.og_title || c.title,
      description: c.og_description || c.meta_description,
      url: u, siteName: "mTouch Labs", type: "article",
      images: [{ url: c.og_image || "/images/Light.png", width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title: c.og_title || c.title,
      description: c.og_description || c.meta_description,
      images: [c.og_image || "/images/Light.png"],
    },
  };
}

// ── Page ──
export default async function CaseStudyDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const rows = await sql`
    SELECT * FROM case_studies
    WHERE slug=${slug} AND (published=true OR status='published')
  ` as CS[];
  if (rows.length === 0) notFound();
  const cs = rows[0];
  const pageUrl = `${SITE_URL}/case-studies/${slug}`;

  // ── Array normalisers ──
  const cp: string[] = Array.isArray(cs.challenge_points) ? cs.challenge_points : [];
  const ft: string[] = Array.isArray(cs.features) ? cs.features : [];
  const tc: { name: string; purpose: string }[] = Array.isArray(cs.technologies) ? cs.technologies : [];
  const dp: { step: string; desc: string }[] = Array.isArray(cs.dev_process) ? cs.dev_process : [];
  const rp: string[] = Array.isArray(cs.result_points) ? cs.result_points : [];
  const fq: { question: string; answer: string }[] = Array.isArray(cs.faq_schema) ? cs.faq_schema : [];
  const il: { url: string; text: string }[] = Array.isArray(cs.internal_links) ? cs.internal_links : [];

  let gi: string[] = [];
  try {
    const raw = cs.gallery_images;
    if (Array.isArray(raw)) gi = raw;
    else if (typeof raw === "string") gi = JSON.parse(raw);
    else if (raw && typeof raw === "object") gi = Object.values(raw) as string[];
  } catch { gi = []; }

  // ── Dates ──
  const displayDate = cs.publish_date || cs.created_at;
  const publishedDate = displayDate
    ? new Intl.DateTimeFormat("en-US", { month: "long", day: "numeric", year: "numeric", timeZone: "UTC" }).format(new Date(displayDate))
    : "";
  const isoDate = displayDate ? new Date(displayDate).toISOString().split("T")[0] : "";

  // ── Tags (industry + platform) ──
  const tagList = [cs.industry, cs.platform].filter(Boolean);

  // ── TOC sections ──
  const tocSections: { id: string; label: string }[] = [];
  if (cs.overview) tocSections.push({ id: "cs-overview", label: "Overview" });
  if (cs.challenge) tocSections.push({ id: "cs-challenge", label: "The Challenge" });
  if (cs.approach) tocSections.push({ id: "cs-approach", label: "Our Approach" });
  if (cs.solution) tocSections.push({ id: "cs-solution", label: "The Solution" });
  if (tc.length > 0) tocSections.push({ id: "cs-tech", label: "Technologies" });
  if (dp.length > 0) tocSections.push({ id: "cs-process", label: "Dev Process" });
  if (rp.length > 0) tocSections.push({ id: "cs-results", label: "Results" });
  if (cs.conclusion) tocSections.push({ id: "cs-conclusion", label: "Key Takeaway" });
  if (gi.length > 0) tocSections.push({ id: "cs-gallery", label: "Gallery" });
  if (fq.length > 0) tocSections.push({ id: "cs-faq", label: "FAQ" });

  // ── JSON-LD ──
  const jld = {
    "@context": "https://schema.org", "@type": "CreativeWork",
    name: cs.title,
    description: cs.meta_description || cs.overview,
    author: { "@type": "Organization", name: "mTouch Labs", url: SITE_URL },
    publisher: { "@type": "Organization", name: "mTouch Labs", logo: { "@type": "ImageObject", url: `${SITE_URL}/images/logo.png` } },
    mainEntityOfPage: pageUrl,
  };
  const fjld = fq.length > 0 ? {
    "@context": "https://schema.org", "@type": "FAQPage",
    mainEntity: fq.map(f => ({ "@type": "Question", name: f.question, acceptedAnswer: { "@type": "Answer", text: f.answer } })),
  } : null;

  const titleParts = highlightTitle(cs.title);

  return (
    <div className="blv3-page">
      {/* Structured Data */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jld) }} />
      {fjld && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(fjld) }} />}

      {/* TOC scroll highlight — client component */}
      <TocScrollHighlight />

      {/* Breadcrumb */}
      <nav className="blv3-breadcrumb" aria-label="Breadcrumb">
        <div className="blv3-container">
          <Link href="/">Home</Link>
          <span className="blv3-breadcrumb-sep">/</span>
          <Link href="/case-studies">Case Studies</Link>
          <span className="blv3-breadcrumb-sep">/</span>
          <span className="blv3-breadcrumb-current">{cs.breadcrumb_title || cs.industry || "Details"}</span>
        </div>
      </nav>

      {/* Hero */}
      <header className="blv3-hero">
        <div className="blv3-container">
          {tagList.length > 0 && (
            <div className="blv3-tags">
              {tagList.map((tag) => (
                <span key={tag} className="blv3-tag">{tag}</span>
              ))}
            </div>
          )}

          <h1 className="blv3-title">
            {titleParts.highlight ? (
              <>
                {titleParts.before}
                <span className="blv3-title-gradient">{titleParts.highlight}</span>
                {titleParts.after}
              </>
            ) : (
              cs.title
            )}
          </h1>

          <div className="blv3-meta">
            {publishedDate && (
              <span className="blv3-meta-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
                </svg>
                <time dateTime={isoDate}>{publishedDate}</time>
              </span>
            )}
            {cs.platform && (
              <span className="blv3-meta-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="3" width="20" height="14" rx="2" /><path d="M8 21h8M12 17v4" />
                </svg>
                {cs.platform}
              </span>
            )}
            {cs.industry && (
              <span className="blv3-meta-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" />
                </svg>
                {cs.industry}
              </span>
            )}
          </div>

          <div className="blv3-accent-bar" />

          {cs.image && (
            <div className="blv3-hero-img">
              <img src={cs.image} alt={cs.image_alt || cs.title} />
            </div>
          )}
        </div>
      </header>

      {/* Content Grid */}
      <section className="blv3-body">
        <div className="blv3-container">
          <div className="blv3-grid">

            {/* Sticky TOC */}
            <aside className="blv3-toc">
              <nav>
                <p className="blv3-toc-heading">Contents</p>
                <ul className="blv3-toc-list">
                  {tocSections.map((s) => (
                    <li key={s.id}>
                      <a href={`#${s.id}`} className="blv3-toc-link">{s.label}</a>
                    </li>
                  ))}
                </ul>
              </nav>

              {/* Tech pills in sidebar */}
              {tc.length > 0 && (
                <div className="blv3-toc-pills" style={{ marginTop: "2rem" }}>
                  <p className="blv3-toc-heading" style={{ marginBottom: "0.75rem" }}>Tech Stack</p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                    {tc.map((t, i) => (
                      <span key={i} className="blv3-tag" style={{ fontSize: "0.7rem" }}>{t.name}</span>
                    ))}
                  </div>
                </div>
              )}

              {/* Testimonial in sidebar */}
              {cs.testimonial_quote && (
                <blockquote className="blv3-toc-quote" style={{ marginTop: "2rem", borderLeft: "3px solid var(--accent, #0070f3)", paddingLeft: "1rem", fontStyle: "italic", fontSize: "0.85rem", color: "var(--text-muted, #888)" }}>
                  &ldquo;{cs.testimonial_quote}&rdquo;
                  {cs.testimonial_role && (
                    <cite style={{ display: "block", marginTop: "0.5rem", fontStyle: "normal", fontWeight: 600, fontSize: "0.75rem" }}>
                      — {cs.testimonial_role}
                    </cite>
                  )}
                </blockquote>
              )}
            </aside>

            {/* Article */}
            <article className="blv3-article">

              {/* TL;DR — Overview */}
              {cs.overview && (
                <div className="blv3-tldr" id="cs-overview" style={{ scrollMarginTop: 100 }}>
                  <div className="blv3-tldr-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10" /><path d="M12 16v-4M12 8h.01" />
                    </svg>
                  </div>
                  <div>
                    <h2 className="blv3-tldr-title">Project Overview</h2>
                    <p className="blv3-tldr-text">{cs.overview}</p>
                  </div>
                </div>
              )}

              {/* Challenge */}
              {cs.challenge && (
                <div id="cs-challenge" style={{ scrollMarginTop: 100 }}>
                  <div className="blv3-content">
                    <h2>The Challenge</h2>
                    <p>{cs.challenge}</p>
                    {cp.length > 0 && (
                      <ul>
                        {cp.map((p, i) => <li key={i}>{p}</li>)}
                      </ul>
                    )}
                  </div>
                </div>
              )}

              {/* Approach */}
              {cs.approach && (
                <div id="cs-approach" style={{ scrollMarginTop: 100 }}>
                  <div className="blv3-content">
                    <h2>Our Strategic Approach</h2>
                    <p>{cs.approach}</p>
                  </div>
                </div>
              )}

              {/* Solution */}
              {cs.solution && (
                <div id="cs-solution" style={{ scrollMarginTop: 100 }}>
                  <div className="blv3-content">
                    <h2>The Solution We Delivered</h2>
                    <p>{cs.solution}</p>
                    {ft.length > 0 && (
                      <ul>
                        {ft.map((f, i) => <li key={i}><strong>{f}</strong></li>)}
                      </ul>
                    )}
                  </div>
                </div>
              )}

              {/* Technologies */}
              {tc.length > 0 && (
                <div id="cs-tech" style={{ scrollMarginTop: 100 }}>
                  <div className="blv3-content">
                    <h2>Technologies Used</h2>
                    <ul>
                      {tc.map((t, i) => (
                        <li key={i}><strong>{t.name}</strong> — {t.purpose}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              {/* Dev Process */}
              {dp.length > 0 && (
                <div id="cs-process" style={{ scrollMarginTop: 100 }}>
                  <div className="blv3-content">
                    <h2>Development Process</h2>
                    <ol>
                      {dp.map((s, i) => (
                        <li key={i}><strong>{s.step}</strong> — {s.desc}</li>
                      ))}
                    </ol>
                  </div>
                </div>
              )}

              {/* Results */}
              {rp.length > 0 && (
                <div id="cs-results" style={{ scrollMarginTop: 100 }}>
                  <div className="blv3-content">
                    <h2>Results & Impact</h2>
                    {cs.results && <p>{cs.results}</p>}
                    <ul>
                      {rp.map((r, i) => <li key={i}>{r}</li>)}
                    </ul>
                  </div>
                </div>
              )}

              {/* Conclusion / Key Takeaway */}
              {cs.conclusion && (
                <div id="cs-conclusion" style={{ scrollMarginTop: 100 }}>
                  <div className="blv3-takeaways">
                    <h2 className="blv3-takeaways-title">🎯 Key Takeaway</h2>
                    <p className="blv3-takeaways-text">{cs.conclusion}</p>
                  </div>
                </div>
              )}

              {/* Gallery */}
              {gi.length > 0 && (
                <div id="cs-gallery" style={{ scrollMarginTop: 100, marginTop: "2.5rem" }}>
                  <div className="blv3-content">
                    <h2>Project Gallery</h2>
                  </div>
                  <div className="csx-gallery-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1rem", marginTop: "1rem" }}>
                    {gi.map((img, i) => (
                      <img
                        key={i}
                        src={img}
                        alt={`${cs.title} — screenshot ${i + 1}`}
                        style={{ width: "100%", borderRadius: "8px", objectFit: "cover" }}
                      />
                    ))}
                  </div>
                </div>
              )}

              {/* CTA Banner */}
              <div className="blv3-cta-banner">
                <h3 className="blv3-cta-banner-title">Ready to Build Something Similar?</h3>
                <p className="blv3-cta-banner-text">mTouch Labs combines AI-powered development with deep industry expertise to deliver solutions 3× faster.</p>
                <Link href="/contact-us" className="blv3-cta-banner-btn">
                  Get a Free Consultation
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                  </svg>
                </Link>
              </div>

              {/* Related Services */}
              {il.length > 0 && (
                <div className="blv3-content" style={{ marginTop: "2rem" }}>
                  <h2>Related Services</h2>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem", marginTop: "1rem" }}>
                    {il.map((l, i) => (
                      <Link key={i} href={l.url || "#"} className="blv3-cta-banner-btn" style={{ fontSize: "0.85rem", padding: "0.5rem 1rem" }}>
                        {l.text} →
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* FAQ */}
              {fq.length > 0 && (
                <div className="blv3-faq" id="cs-faq" style={{ scrollMarginTop: 100 }}>
                  <h2 className="blv3-faq-heading">Frequently Asked Questions</h2>
                  <div className="blv3-faq-list">
                    {fq.map((f, i) => (
                      <details key={i} className="blv3-faq-item">
                        <summary className="blv3-faq-q">{f.question}</summary>
                        <div className="blv3-faq-a">{f.answer}</div>
                      </details>
                    ))}
                  </div>
                </div>
              )}

              {/* Author Footer */}
              <footer className="blv3-author-footer">
                <p className="blv3-published-line">
                  A case study by <strong>mTouch Labs</strong> — Building the future of custom software development.{" "}
                  <Link href="/contact-us">Contact us</Link> to discuss your project.
                </p>
                <div className="blv3-author-card">
                  <img src="/images/logo_on.png" alt="mTouch Labs" className="blv3-author-logo" />
                  <div className="blv3-author-info">
                    <p className="blv3-author-title">Have a project in mind?</p>
                    <p className="blv3-author-sub">Let&apos;s discuss how we can help bring your ideas to life.</p>
                  </div>
                  <Link href="/contact-us" className="blv3-author-btn">Contact Us</Link>
                </div>
              </footer>

            </article>
          </div>
        </div>
      </section>
    </div>
  );
}