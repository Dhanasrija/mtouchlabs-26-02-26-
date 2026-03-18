import { sql } from "@/lib/db";
import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";

interface CaseStudy {
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
  schema_json_ld: string;
  status: string; published: boolean; publish_date: string;
  created_at: string; updated_at: string;
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const rows = await sql`SELECT title,meta_title,meta_description,og_title,og_description,og_image,canonical_url,keywords FROM case_studies WHERE slug=${slug} AND (published=true OR status='published')`;
  if (rows.length === 0) return { title: "Case Study Not Found" };
  const cs = rows[0];
  const pageUrl = `https://www.mtouchlabs.com/case-studies/${slug}`;
  return {
    title: cs.meta_title || cs.title,
    description: cs.meta_description,
    keywords: cs.keywords || undefined,
    alternates: { canonical: cs.canonical_url || pageUrl },
    openGraph: {
      title: cs.og_title || cs.meta_title || cs.title,
      description: cs.og_description || cs.meta_description,
      url: pageUrl, siteName: "mTouch Labs", type: "article",
      images: [{ url: cs.og_image || "/images/Light.png", width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image" as const,
      title: cs.og_title || cs.title,
      description: cs.og_description || cs.meta_description,
      images: [cs.og_image || "/images/Light.png"],
    },
  };
}

export default async function CaseStudyDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const rows = await sql`SELECT * FROM case_studies WHERE slug=${slug} AND (published=true OR status='published')` as CaseStudy[];
  if (rows.length === 0) notFound();
  const cs = rows[0];
  const pageUrl = `https://www.mtouchlabs.com/case-studies/${slug}`;

  const challengePoints: string[] = Array.isArray(cs.challenge_points) ? cs.challenge_points : [];
  const features: string[] = Array.isArray(cs.features) ? cs.features : [];
  const technologies: { name: string; purpose: string }[] = Array.isArray(cs.technologies) ? cs.technologies : [];
  const devProcess: { step: string; desc: string }[] = Array.isArray(cs.dev_process) ? cs.dev_process : [];
  const resultPoints: string[] = Array.isArray(cs.result_points) ? cs.result_points : [];
  const faqItems: { question: string; answer: string }[] = Array.isArray(cs.faq_schema) ? cs.faq_schema : [];
  const internalLinks: { url: string; text: string }[] = Array.isArray(cs.internal_links) ? cs.internal_links : [];
  const accentColor = cs.color || "#3b82f6";

  const articleJsonLd = {
    "@context": "https://schema.org", "@type": "CreativeWork",
    name: cs.title, description: cs.meta_description || cs.overview,
    author: { "@type": "Organization", name: "mTouch Labs", url: "https://www.mtouchlabs.com" },
    publisher: { "@type": "Organization", name: "mTouch Labs", logo: { "@type": "ImageObject", url: "https://www.mtouchlabs.com/images/logo.png" } },
    mainEntityOfPage: pageUrl,
  };

  const faqJsonLd = faqItems.length > 0 ? {
    "@context": "https://schema.org", "@type": "FAQPage",
    mainEntity: faqItems.map(faq => ({ "@type": "Question", name: faq.question, acceptedAnswer: { "@type": "Answer", text: faq.answer } })),
  } : null;

  // Short title for H1 (under 60 chars)
  const shortTitle = cs.breadcrumb_title || cs.title.length > 58 ? cs.title.slice(0, 55) + '...' : cs.title;

  return (
    <>
      <link href="/css/ma-case-studies.css" rel="stylesheet" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      {faqJsonLd && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />}

      {/* ═══ HERO ═══ */}
      <section className="macs-hero">
        <div className="macs-hero__grain"></div>
        <div className="macs-hero__inner">
          <span className="macs-hero__tag">{cs.industry || "Case Study"}</span>
          <h1 className="macs-hero__title">
            <span className="macs-hero__title-glow">{shortTitle}</span>
          </h1>

          {/* Tech pills */}
          <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", justifyContent: "center", marginTop: "24px", animation: "macsSlideDown 0.9s ease 0.3s both" }}>
            {cs.industry && <span className="macs-card__pill" style={{ background: "rgba(59,130,246,0.1)", color: "#60a5fa", borderColor: "rgba(59,130,246,0.25)" }}>{cs.industry}</span>}
            {cs.platform && <span className="macs-card__pill" style={{ background: "rgba(139,92,246,0.1)", color: "#a78bfa", borderColor: "rgba(139,92,246,0.25)" }}>{cs.platform}</span>}
            {technologies.map((t, i) => <span key={i} className="macs-card__pill" style={{ background: "rgba(244,114,182,0.1)", color: "#f472b6", borderColor: "rgba(244,114,182,0.25)" }}>{t.name}</span>)}
          </div>
        </div>
        <div className="macs-hero__shapes"><div className="macs-shape macs-shape--1"></div><div className="macs-shape macs-shape--2"></div><div className="macs-shape macs-shape--3"></div></div>
      </section>

      {/* ═══ BREADCRUMB (below hero) ═══ */}
      <div style={{ background: "#f8fafc", borderBottom: "1px solid #e2e8f0", padding: "14px 0" }}>
        <div style={{ maxWidth: "1140px", margin: "0 auto", padding: "0 24px" }}>
          <nav style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "13px", color: "#94a3b8" }}>
            <Link href="/" style={{ color: "#64748b", textDecoration: "none" }}>Home</Link>
            <span style={{ color: "#cbd5e1" }}>/</span>
            <Link href="/case-studies" style={{ color: "#64748b", textDecoration: "none" }}>Case Studies</Link>
            <span style={{ color: "#cbd5e1" }}>/</span>
            <span style={{ color: "#3b82f6", fontWeight: 600 }}>{cs.breadcrumb_title || cs.title}</span>
          </nav>
        </div>
      </div>

      {/* ═══ OVERVIEW BANNER ═══ */}
      {cs.overview && (
        <div style={{ background: "#fff", borderBottom: "1px solid #e2e8f0", padding: "40px 0" }}>
          <div style={{ maxWidth: "900px", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontSize: "18px", color: "#475569", lineHeight: 1.8, margin: 0, textAlign: "center" }} data-aos="fade-up">{cs.overview}</p>
          </div>
        </div>
      )}

      {/* ═══ CONTENT ═══ */}
      <section style={{ background: "#f8fafc", padding: "60px 0" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto", padding: "0 24px" }}>

          {/* Image */}
          {cs.image && (
            <div style={{ marginBottom: "48px", borderRadius: "16px", overflow: "hidden", boxShadow: "0 8px 30px rgba(0,0,0,0.08)" }} data-aos="fade-up">
              <img src={cs.image} alt={cs.image_alt || cs.title} style={{ width: "100%", display: "block" }} />
            </div>
          )}

          {/* Challenge */}
          {cs.challenge && (
            <div className="macs-card" style={{ marginBottom: "32px" }} data-aos="fade-up">
              <h2 style={{ fontSize: "22px", fontWeight: 800, color: "#0f172a", marginBottom: "16px", display: "flex", alignItems: "center", gap: "12px" }}>
                <span style={{ width: "4px", height: "28px", background: accentColor, borderRadius: "2px", display: "inline-block" }}></span>
                Client Challenge
              </h2>
              <p style={{ fontSize: "15px", color: "#64748b", lineHeight: 1.8, marginBottom: challengePoints.length > 0 ? "16px" : "0" }}>{cs.challenge}</p>
              {challengePoints.length > 0 && (
                <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                  {challengePoints.map((p, i) => (
                    <div key={i} style={{ display: "flex", alignItems: "center", gap: "10px", padding: "10px 14px", background: "#fef2f2", borderRadius: "10px", border: "1px solid #fecaca" }}>
                      <span style={{ color: "#ef4444", fontWeight: 700, fontSize: "14px", flexShrink: 0 }}>&#10005;</span>
                      <span style={{ fontSize: "14px", color: "#374151" }}>{p}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Approach */}
          {cs.approach && (
            <div className="macs-card" style={{ marginBottom: "32px" }} data-aos="fade-up">
              <h2 style={{ fontSize: "22px", fontWeight: 800, color: "#0f172a", marginBottom: "16px", display: "flex", alignItems: "center", gap: "12px" }}>
                <span style={{ width: "4px", height: "28px", background: "#8b5cf6", borderRadius: "2px", display: "inline-block" }}></span>
                Our Approach
              </h2>
              <p style={{ fontSize: "15px", color: "#64748b", lineHeight: 1.8 }}>{cs.approach}</p>
            </div>
          )}

          {/* Solution + Features */}
          {cs.solution && (
            <div className="macs-card" style={{ marginBottom: "32px" }} data-aos="fade-up">
              <h2 style={{ fontSize: "22px", fontWeight: 800, color: "#0f172a", marginBottom: "16px", display: "flex", alignItems: "center", gap: "12px" }}>
                <span style={{ width: "4px", height: "28px", background: "#10b981", borderRadius: "2px", display: "inline-block" }}></span>
                Solution Delivered
              </h2>
              <p style={{ fontSize: "15px", color: "#64748b", lineHeight: 1.8, marginBottom: features.length > 0 ? "20px" : "0" }}>{cs.solution}</p>
              {features.length > 0 && (
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: "10px" }}>
                  {features.map((f, i) => (
                    <div key={i} style={{ display: "flex", alignItems: "center", gap: "10px", padding: "12px 16px", background: "#f0fdf4", borderRadius: "10px", border: "1px solid #bbf7d0" }}>
                      <span style={{ color: "#10b981", fontWeight: 700, fontSize: "15px", flexShrink: 0 }}>&#10003;</span>
                      <span style={{ fontSize: "14px", color: "#1a1a2e" }}>{f}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Technologies */}
          {technologies.length > 0 && (
            <div className="macs-card" style={{ marginBottom: "32px" }} data-aos="fade-up">
              <h2 style={{ fontSize: "22px", fontWeight: 800, color: "#0f172a", marginBottom: "20px", display: "flex", alignItems: "center", gap: "12px" }}>
                <span style={{ width: "4px", height: "28px", background: "#f59e0b", borderRadius: "2px", display: "inline-block" }}></span>
                Technologies Used
              </h2>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: "12px" }}>
                {technologies.map((t, i) => (
                  <div key={i} style={{ background: "linear-gradient(135deg, #f8fafc, #eef2ff)", borderRadius: "12px", padding: "20px", border: "1px solid #e2e8f0", transition: "transform 0.3s ease, box-shadow 0.3s ease" }}>
                    <div style={{ fontWeight: 700, color: "#0f172a", marginBottom: "6px", fontSize: "15px" }}>{t.name}</div>
                    <div style={{ fontSize: "13px", color: "#64748b" }}>{t.purpose}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Dev Process */}
          {devProcess.length > 0 && (
            <div className="macs-card" style={{ marginBottom: "32px" }} data-aos="fade-up">
              <h2 style={{ fontSize: "22px", fontWeight: 800, color: "#0f172a", marginBottom: "20px", display: "flex", alignItems: "center", gap: "12px" }}>
                <span style={{ width: "4px", height: "28px", background: "#6366f1", borderRadius: "2px", display: "inline-block" }}></span>
                Development Process
              </h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                {devProcess.map((s, i) => (
                  <div key={i} style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
                    <div style={{ minWidth: "40px", height: "40px", borderRadius: "50%", background: "linear-gradient(135deg, #3b82f6, #6366f1)", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800, fontSize: "14px", flexShrink: 0 }}>{i + 1}</div>
                    <div style={{ paddingTop: "6px" }}>
                      <div style={{ fontWeight: 700, color: "#0f172a", marginBottom: "4px", fontSize: "15px" }}>{s.step}</div>
                      <div style={{ fontSize: "14px", color: "#64748b", lineHeight: 1.7 }}>{s.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Results */}
          {resultPoints.length > 0 && (
            <div className="macs-card" style={{ marginBottom: "32px", background: "linear-gradient(135deg, #f0fdf4, #ecfdf5)", border: "1px solid #bbf7d0" }} data-aos="fade-up">
              <h2 style={{ fontSize: "22px", fontWeight: 800, color: "#0f172a", marginBottom: "16px", display: "flex", alignItems: "center", gap: "12px" }}>
                <span style={{ width: "4px", height: "28px", background: "#10b981", borderRadius: "2px", display: "inline-block" }}></span>
                Results &amp; Impact
              </h2>
              {cs.results && <p style={{ fontSize: "15px", color: "#475569", lineHeight: 1.8, marginBottom: "16px" }}>{cs.results}</p>}
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: "12px" }}>
                {resultPoints.map((r, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "center", gap: "10px", padding: "14px 16px", background: "#fff", borderRadius: "10px", border: "1px solid #bbf7d0", boxShadow: "0 2px 8px rgba(16,185,129,0.06)" }}>
                    <span style={{ background: "#10b981", color: "#fff", borderRadius: "50%", width: "26px", height: "26px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "13px", fontWeight: 700, flexShrink: 0 }}>&#10003;</span>
                    <span style={{ fontSize: "14px", color: "#1a1a2e", fontWeight: 500 }}>{r}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Testimonial */}
          {cs.testimonial_quote && (
            <div style={{ background: "linear-gradient(135deg, #0f172a, #1e1b4b)", borderRadius: "16px", padding: "40px", marginBottom: "32px", position: "relative", overflow: "hidden" }} data-aos="fade-up">
              <div style={{ position: "absolute", width: "200px", height: "200px", background: "radial-gradient(circle, rgba(59,130,246,0.15), transparent 70%)", top: "-50px", right: "-50px", borderRadius: "50%" }}></div>
              <div style={{ fontSize: "48px", lineHeight: 1, background: "linear-gradient(135deg, #60a5fa, #a78bfa)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text", marginBottom: "12px", position: "relative" }}>&ldquo;</div>
              <p style={{ fontSize: "17px", color: "#e2e8f0", fontStyle: "italic", lineHeight: 1.8, margin: "0 0 20px", position: "relative" }}>{cs.testimonial_quote}</p>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", position: "relative" }}>
                {cs.testimonial_initials && <div style={{ width: "42px", height: "42px", borderRadius: "50%", background: "linear-gradient(135deg, #3b82f6, #6366f1)", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: "14px" }}>{cs.testimonial_initials}</div>}
                {cs.testimonial_role && <span style={{ fontSize: "14px", color: "#94a3b8", fontWeight: 600 }}>{cs.testimonial_role}</span>}
              </div>
            </div>
          )}

          {/* Conclusion */}
          {cs.conclusion && (
            <div className="macs-card" style={{ marginBottom: "32px" }} data-aos="fade-up">
              <h2 style={{ fontSize: "22px", fontWeight: 800, color: "#0f172a", marginBottom: "16px", display: "flex", alignItems: "center", gap: "12px" }}>
                <span style={{ width: "4px", height: "28px", background: "#3b82f6", borderRadius: "2px", display: "inline-block" }}></span>
                Conclusion
              </h2>
              <p style={{ fontSize: "15px", color: "#64748b", lineHeight: 1.8 }}>{cs.conclusion}</p>
            </div>
          )}

          {/* Internal Links */}
          {internalLinks.length > 0 && (
            <div style={{ marginBottom: "32px" }} data-aos="fade-up">
              <h3 style={{ fontSize: "18px", fontWeight: 700, color: "#0f172a", marginBottom: "14px" }}>Related Services</h3>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
                {internalLinks.map((link, i) => (
                  <Link key={i} href={link.url} style={{ padding: "10px 20px", background: "linear-gradient(135deg, rgba(59,130,246,0.06), rgba(99,102,241,0.06))", color: "#3b82f6", borderRadius: "10px", fontSize: "14px", textDecoration: "none", fontWeight: 600, border: "1px solid rgba(59,130,246,0.15)", transition: "transform 0.3s ease, box-shadow 0.3s ease" }}>{link.text} &rarr;</Link>
                ))}
              </div>
            </div>
          )}

          {/* FAQ */}
          {faqItems.length > 0 && (
            <div style={{ marginBottom: "48px" }} data-aos="fade-up">
              <h2 className="macs-section-title" style={{ textAlign: "left", fontSize: "22px" }}>Frequently Asked <span className="macs-text-accent">Questions</span></h2>
              <div className="macs-faq__list" style={{ maxWidth: "100%" }}>
                {faqItems.map((faq, i) => (
                  <details key={i} className="macs-faq__item">
                    <summary className="macs-faq__question"><span>{faq.question}</span><span className="macs-faq__chevron"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6" /></svg></span></summary>
                    <div className="macs-faq__answer"><p>{faq.answer}</p></div>
                  </details>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section className="macs-cta">
        <div className="macs-container">
          <div className="macs-cta__inner" data-aos="zoom-in">
            <h2 className="macs-cta__title">Ready to Build Something <span className="macs-text-accent">Similar</span>?</h2>
            <p className="macs-cta__text">Let&apos;s discuss how mTouch Labs can build a solution for your business.</p>
            <Link href="/contact-us" className="macs-cta__button">Get a Free Consultation &rarr;</Link>
          </div>
        </div>
      </section>
    </>
  );
}
