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
      title: cs.og_title || cs.meta_title || cs.title, description: cs.og_description || cs.meta_description,
      url: pageUrl, siteName: "mTouch Labs", type: "article",
      images: [{ url: cs.og_image || "/images/Light.png", width: 1200, height: 630 }],
    },
    twitter: { card: "summary_large_image" as const, title: cs.og_title || cs.title, description: cs.og_description || cs.meta_description, images: [cs.og_image || "/images/Light.png"] },
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

  const articleJsonLd = { "@context": "https://schema.org", "@type": "CreativeWork", name: cs.title, description: cs.meta_description || cs.overview, author: { "@type": "Organization", name: "mTouch Labs", url: "https://www.mtouchlabs.com" }, publisher: { "@type": "Organization", name: "mTouch Labs", logo: { "@type": "ImageObject", url: "https://www.mtouchlabs.com/images/logo.png" } }, mainEntityOfPage: pageUrl };
  const faqJsonLd = faqItems.length > 0 ? { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqItems.map(faq => ({ "@type": "Question", name: faq.question, acceptedAnswer: { "@type": "Answer", text: faq.answer } })) } : null;

  const shortTitle = cs.title.length > 55 ? cs.title.slice(0, 52) + '...' : cs.title;
  const pillColors = ['csd-pill--blue', 'csd-pill--purple', 'csd-pill--pink', 'csd-pill--amber'];

  return (
    <div className="csd-page">
      <link href="/css/csd-detail.css" rel="stylesheet" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      {faqJsonLd && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />}

      {/* ═══ HERO ═══ */}
      <section className="csd-hero">
        <div className="csd-hero__grid"></div>
        <div className="csd-hero__orb csd-hero__orb--1"></div>
        <div className="csd-hero__orb csd-hero__orb--2"></div>
        <div className="csd-hero__orb csd-hero__orb--3"></div>
        <div className="csd-hero__inner">
          <div className="csd-hero__badge">
            <span className="csd-hero__badge-dot"></span>
            {cs.industry || 'Case Study'}
          </div>
          <h1 className="csd-hero__title">
            <span className="csd-hero__title-gradient">{shortTitle}</span>
          </h1>
          <p className="csd-hero__subtitle">by mTouch Labs &bull; {cs.platform || 'Cross-Platform'}</p>
          <div className="csd-hero__pills">
            {cs.industry && <span className="csd-pill csd-pill--blue">{cs.industry}</span>}
            {cs.platform && <span className="csd-pill csd-pill--purple">{cs.platform}</span>}
            {technologies.map((t, i) => <span key={i} className={`csd-pill ${pillColors[(i + 2) % pillColors.length]}`}>{t.name}</span>)}
          </div>
        </div>
      </section>

      {/* ═══ BREADCRUMB ═══ */}
      <div className="csd-breadcrumb">
        <div className="csd-breadcrumb__inner">
          <Link href="/">Home</Link>
          <span className="csd-breadcrumb__sep">/</span>
          <Link href="/case-studies">Case Studies</Link>
          <span className="csd-breadcrumb__sep">/</span>
          <span className="csd-breadcrumb__current">{cs.breadcrumb_title || cs.title}</span>
        </div>
      </div>

      {/* ═══ OVERVIEW ═══ */}
      {cs.overview && (
        <div className="csd-overview">
          <p className="csd-overview__text csd-animate csd-animate-1">{cs.overview}</p>
        </div>
      )}

      {/* ═══ CONTENT ═══ */}
      <section className="csd-content">
        <div className="csd-content__inner">

          {/* Image */}
          {cs.image && (
            <div className="csd-image csd-animate csd-animate-2">
              <img src={cs.image} alt={cs.image_alt || cs.title} />
            </div>
          )}

          {/* Challenge */}
          {cs.challenge && (
            <div className="csd-card csd-animate csd-animate-3">
              <div className="csd-heading">
                <span className="csd-heading__bar" style={{ background: `linear-gradient(180deg, ${accentColor}, #ef4444)` }}></span>
                <h2 className="csd-heading__text">Client Challenge</h2>
              </div>
              <p className="csd-text">{cs.challenge}</p>
              {challengePoints.length > 0 && (
                <div className="csd-challenge-list">
                  {challengePoints.map((p, i) => (
                    <div key={i} className="csd-challenge-item">
                      <span className="csd-challenge-icon">✕</span>
                      <span className="csd-challenge-text">{p}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Approach */}
          {cs.approach && (
            <div className="csd-card csd-animate csd-animate-4">
              <div className="csd-heading">
                <span className="csd-heading__bar" style={{ background: 'linear-gradient(180deg, #8b5cf6, #6366f1)' }}></span>
                <h2 className="csd-heading__text">Our Approach</h2>
              </div>
              <p className="csd-text">{cs.approach}</p>
            </div>
          )}

          {/* Solution + Features */}
          {cs.solution && (
            <div className="csd-card csd-animate csd-animate-5">
              <div className="csd-heading">
                <span className="csd-heading__bar" style={{ background: 'linear-gradient(180deg, #10b981, #059669)' }}></span>
                <h2 className="csd-heading__text">Solution Delivered</h2>
              </div>
              <p className="csd-text">{cs.solution}</p>
              {features.length > 0 && (
                <div className="csd-feature-grid">
                  {features.map((f, i) => (
                    <div key={i} className="csd-feature-item">
                      <span className="csd-feature-icon">✓</span>
                      <span className="csd-feature-text">{f}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Technologies */}
          {technologies.length > 0 && (
            <div className="csd-card csd-animate csd-animate-6">
              <div className="csd-heading">
                <span className="csd-heading__bar" style={{ background: 'linear-gradient(180deg, #f59e0b, #f97316)' }}></span>
                <h2 className="csd-heading__text">Technologies Used</h2>
              </div>
              <div className="csd-tech-grid">
                {technologies.map((t, i) => (
                  <div key={i} className="csd-tech-card">
                    <div className="csd-tech-name">{t.name}</div>
                    <div className="csd-tech-purpose">{t.purpose}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Dev Process */}
          {devProcess.length > 0 && (
            <div className="csd-card csd-animate csd-animate-7">
              <div className="csd-heading">
                <span className="csd-heading__bar" style={{ background: 'linear-gradient(180deg, #6366f1, #3b82f6)' }}></span>
                <h2 className="csd-heading__text">Development Process</h2>
              </div>
              <div className="csd-timeline">
                {devProcess.map((s, i) => (
                  <div key={i} className="csd-timeline-item">
                    <div className="csd-timeline-num">{i + 1}</div>
                    <div className="csd-timeline-content">
                      <div className="csd-timeline-step">{s.step}</div>
                      <div className="csd-timeline-desc">{s.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Results */}
          {resultPoints.length > 0 && (
            <div className="csd-card csd-results-card csd-animate csd-animate-8">
              <div className="csd-heading">
                <span className="csd-heading__bar" style={{ background: 'linear-gradient(180deg, #10b981, #34d399)' }}></span>
                <h2 className="csd-heading__text">Results &amp; Impact</h2>
              </div>
              {cs.results && <p className="csd-text">{cs.results}</p>}
              <div className="csd-result-grid">
                {resultPoints.map((r, i) => (
                  <div key={i} className="csd-result-item">
                    <span className="csd-result-check">✓</span>
                    <span className="csd-result-text">{r}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Testimonial */}
          {cs.testimonial_quote && (
            <div className="csd-testimonial csd-animate csd-animate-9">
              <div className="csd-testimonial__quote-mark">&ldquo;</div>
              <p className="csd-testimonial__text">{cs.testimonial_quote}</p>
              <div className="csd-testimonial__author">
                {cs.testimonial_initials && <div className="csd-testimonial__avatar">{cs.testimonial_initials}</div>}
                {cs.testimonial_role && <span className="csd-testimonial__role">{cs.testimonial_role}</span>}
              </div>
            </div>
          )}

          {/* Conclusion */}
          {cs.conclusion && (
            <div className="csd-card csd-animate csd-animate-10">
              <div className="csd-heading">
                <span className="csd-heading__bar" style={{ background: 'linear-gradient(180deg, #3b82f6, #60a5fa)' }}></span>
                <h2 className="csd-heading__text">Conclusion</h2>
              </div>
              <p className="csd-text">{cs.conclusion}</p>
            </div>
          )}

          {/* Internal Links */}
          {internalLinks.length > 0 && (
            <div className="csd-card">
              <div className="csd-heading">
                <span className="csd-heading__bar" style={{ background: 'linear-gradient(180deg, #6366f1, #a78bfa)' }}></span>
                <h2 className="csd-heading__text">Related Services</h2>
              </div>
              <div className="csd-links">
                {internalLinks.map((link, i) => (
                  <Link key={i} href={link.url} className="csd-link">{link.text} &rarr;</Link>
                ))}
              </div>
            </div>
          )}

          {/* FAQ */}
          {faqItems.length > 0 && (
            <div className="csd-card">
              <div className="csd-heading">
                <span className="csd-heading__bar" style={{ background: 'linear-gradient(180deg, #3b82f6, #8b5cf6)' }}></span>
                <h2 className="csd-heading__text">Frequently Asked Questions</h2>
              </div>
              <div className="csd-faq">
                {faqItems.map((faq, i) => (
                  <details key={i} className="csd-faq-item">
                    <summary className="csd-faq-q">
                      <span>{faq.question}</span>
                      <span className="csd-faq-chevron"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6" /></svg></span>
                    </summary>
                    <div className="csd-faq-a">{faq.answer}</div>
                  </details>
                ))}
              </div>
            </div>
          )}

          {/* CTA */}
          <div className="csd-cta">
            <h3 className="csd-cta__title">Ready to Build Something <span className="csd-hero__title-gradient">Similar</span>?</h3>
            <p className="csd-cta__text">Let&apos;s discuss how mTouch Labs can build a solution for your business.</p>
            <Link href="/contact-us" className="csd-cta__btn">Get a Free Consultation &rarr;</Link>
          </div>

          {/* Footer */}
          <div className="csd-footer">
            <p>Published by <strong style={{ color: '#fff' }}>mTouch Labs</strong> &mdash; Building the future of custom software. <Link href="/contact-us">Contact us</Link></p>
          </div>
        </div>
      </section>
    </div>
  );
}