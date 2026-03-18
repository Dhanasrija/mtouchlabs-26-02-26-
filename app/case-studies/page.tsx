import type { Metadata } from "next";
import { sql } from "@/lib/db";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import BlogFilter from "../blog/BlogFilter";

export const metadata: Metadata = {
  title: "Case Studies & Portfolio | mTouch Labs",
  description: "Explore our case studies across healthcare, e-commerce, and logistics. See how mTouch Labs delivers real results for businesses.",
  alternates: { canonical: "https://www.mtouchlabs.com/case-studies" },
  openGraph: {
    title: "Case Studies & Portfolio | mTouch Labs",
    description: "Real-world case studies from mTouch Labs across industries.",
    url: "https://www.mtouchlabs.com/case-studies",
    siteName: "mTouch Labs",
    type: "website",
    images: [{ url: "/images/Light.png", width: 1200, height: 630, alt: "mTouch Labs Case Studies" }],
  },
};

interface CaseStudyRow {
  id: number; slug: string; title: string; industry: string; platform: string;
  icon: string; color: string; challenge: string; solution: string;
  result_points: string[]; technologies: { name: string; purpose: string }[];
  testimonial_quote: string; testimonial_role: string; testimonial_initials: string;
}

export const revalidate = 60;

const costFactors = [
  "Number of features and functionality",
  "UI/UX design requirements",
  "Platform and technology selection",
  "Backend infrastructure and APIs",
  "Security and compliance requirements",
];

const advantages = [
  "Experienced development team",
  "Strong technical expertise",
  "Scalable and secure architecture",
  "Transparent development process",
  "Reliable post-launch support",
];

const faqs = [
  { q: "How long does a typical project take?", a: "Development timelines depend on project complexity. Most applications take between 8 and 16 weeks to design, develop, test, and launch." },
  { q: "Do you develop for both web and mobile?", a: "Yes. We develop web applications, mobile applications for both platforms, and also build cross-platform solutions using frameworks like Flutter and React Native." },
  { q: "Do you provide maintenance after launch?", a: "Yes. We provide ongoing support and maintenance services to ensure applications remain secure, updated, and optimized for performance." },
];

export default async function CaseStudies() {
  const caseStudies = await sql`
    SELECT id, slug, title, industry, platform, icon, color, challenge, solution,
           result_points, technologies, testimonial_quote, testimonial_role, testimonial_initials
    FROM case_studies
    WHERE published = true OR status = 'published'
    ORDER BY COALESCE(publish_date, created_at) DESC
  ` as CaseStudyRow[];

  const testimonials = caseStudies
    .filter(cs => cs.testimonial_quote)
    .map(cs => ({ quote: cs.testimonial_quote, role: cs.testimonial_role || "Client", initials: cs.testimonial_initials || "CL" }));

  return (
    <>
      <link href="/css/ma-case-studies.css" rel="stylesheet" />

      <section className="macs-hero">
        <div className="macs-hero__grain"></div>
        <div className="macs-hero__inner">
          <Breadcrumb pagePath="/case-studies" />
          <span className="macs-hero__tag">Case Studies</span>
          <h1 className="macs-hero__title">Case Studies<br /><span className="macs-hero__title-glow">That Deliver Results</span></h1>
          <p className="macs-hero__desc">Real projects. Real challenges. Real outcomes. Explore how mTouch Labs builds digital solutions that drive business growth across industries.</p>
        </div>
        <div className="macs-hero__shapes"><div className="macs-shape macs-shape--1"></div><div className="macs-shape macs-shape--2"></div><div className="macs-shape macs-shape--3"></div></div>
      </section>

      <section className="macs-studies">
        <div className="macs-container">
          {caseStudies.map((cs, i) => {
            const resultPoints: string[] = Array.isArray(cs.result_points) ? cs.result_points : [];
            const technologies: { name: string; purpose: string }[] = Array.isArray(cs.technologies) ? cs.technologies : [];
            const accentColor = cs.color || "#6366f1";
            return (
              <Link href={`/case-studies/${cs.slug}`} key={cs.id} style={{ textDecoration: "none", color: "inherit" }}>
                <article className={`macs-card macs-card--${i % 2 === 0 ? "left" : "right"}`} data-aos="fade-up" data-aos-delay={i * 120}>
                  <div className="macs-card__left">
                    <span className="macs-card__number">{String(i + 1).padStart(2, "0")}</span>
                    <div className="macs-card__icon-wrap" style={{ background: `${accentColor}15` }}>{cs.icon || "\uD83D\uDCCB"}</div>
                    <h2 className="macs-card__title">{cs.title}</h2>
                    <div className="macs-card__meta">
                      {cs.industry && <span className="macs-card__pill">{cs.industry}</span>}
                      {cs.platform && <span className="macs-card__pill">{cs.platform}</span>}
                      {technologies.map((t, j) => (<span key={j} className="macs-card__pill macs-card__pill--tech">{t.name}</span>))}
                    </div>
                  </div>
                  <div className="macs-card__right">
                    <div className="macs-card__section"><h3 className="macs-card__label"><span className="macs-card__label-line" style={{ background: accentColor }}></span><span style={{ color: accentColor }}>Challenge</span></h3><p>{cs.challenge}</p></div>
                    <div className="macs-card__section"><h3 className="macs-card__label"><span className="macs-card__label-line" style={{ background: accentColor }}></span><span style={{ color: accentColor }}>Solution</span></h3><p>{cs.solution}</p></div>
                    <div className="macs-card__section"><h3 className="macs-card__label"><span className="macs-card__label-line" style={{ background: accentColor }}></span><span style={{ color: accentColor }}>Results</span></h3><div className="macs-card__results">{resultPoints.map((r, k) => (<div key={k} className="macs-result"><span className="macs-result__check" style={{ background: accentColor }}>&#10003;</span><span>{r}</span></div>))}</div></div>
                  </div>
                  <div className="macs-card__accent" style={{ background: `linear-gradient(to right, ${accentColor}, transparent)` }}></div>
                </article>
              </Link>
            );
          })}
        </div>
      </section>

      {testimonials.length > 0 && (
        <section className="macs-testimonials">
          <div className="macs-container">
            <span className="macs-section-tag" data-aos="fade-up">Client Testimonials</span>
            <h2 className="macs-section-title" data-aos="fade-up">What Our Clients <span className="macs-text-accent">Say</span></h2>
            <p className="macs-section-desc" data-aos="fade-up">Businesses partner with mTouch Labs because of our commitment to delivering reliable solutions and maintaining transparent communication throughout the project lifecycle.</p>
            <div className="macs-testimonials__grid">
              {testimonials.map((t, i) => (
                <div key={i} className="macs-testimonial" data-aos="fade-up" data-aos-delay={i * 150}>
                  <div className="macs-testimonial__quote">&ldquo;</div>
                  <p className="macs-testimonial__text">{t.quote}</p>
                  <div className="macs-testimonial__author"><div className="macs-testimonial__avatar">{t.initials}</div><span className="macs-testimonial__role">{t.role}</span></div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="macs-cost">
        <div className="macs-container">
          <div className="macs-cost__grid">
            <div className="macs-cost__content" data-aos="fade-right">
              <span className="macs-section-tag">Pricing</span>
              <h2 className="macs-cost__title">Development <span className="macs-text-accent">Cost</span></h2>
              <p className="macs-cost__text">The cost of development varies depending on several factors including application complexity, required features, supported platforms, and integrations with external systems.</p>
              <p className="macs-cost__text">Simple applications may require shorter development timelines, while advanced applications with complex functionality may require additional development resources. At mTouch Labs, we work closely with clients to provide transparent estimates.</p>
            </div>
            <div className="macs-cost__factors" data-aos="fade-left">
              <h3 className="macs-cost__factors-title">Key Cost Factors</h3>
              {costFactors.map((f, i) => (<div key={i} className="macs-cost__factor"><span className="macs-cost__factor-num">{String(i + 1).padStart(2, "0")}</span><span>{f}</span></div>))}
            </div>
          </div>
        </div>
      </section>

      <section className="macs-why">
        <div className="macs-container">
          <span className="macs-section-tag" data-aos="fade-up">Why mTouch Labs</span>
          <h2 className="macs-section-title" data-aos="fade-up">Why Choose <span className="macs-text-accent">mTouch Labs</span></h2>
          <p className="macs-section-desc" data-aos="fade-up">Companies choose mTouch Labs because we focus on delivering applications that provide real business value.</p>
          <div className="macs-why__grid">
            {advantages.map((a, i) => (<div key={i} className="macs-why__card" data-aos="zoom-in" data-aos-delay={i * 80}><span className="macs-why__num">{String(i + 1).padStart(2, "0")}</span><p>{a}</p></div>))}
          </div>
        </div>
      </section>

      <section className="macs-faq">
        <div className="macs-container">
          <span className="macs-section-tag" data-aos="fade-up">FAQ</span>
          <h2 className="macs-section-title" data-aos="fade-up">Frequently Asked <span className="macs-text-accent">Questions</span></h2>
          <div className="macs-faq__list">
            {faqs.map((f, i) => (
              <details key={i} className="macs-faq__item" data-aos="fade-up" data-aos-delay={i * 100}>
                <summary className="macs-faq__question"><span>{f.q}</span><span className="macs-faq__chevron"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6" /></svg></span></summary>
                <div className="macs-faq__answer"><p>{f.a}</p></div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="macs-cta">
        <div className="macs-container">
          <div className="macs-cta__inner" data-aos="zoom-in">
            <h2 className="macs-cta__title">Ready to Build Your <span className="macs-text-accent">Project</span>?</h2>
            <p className="macs-cta__text">Let&apos;s discuss how we can build a solution that drives real business growth.</p>
            <Link href="/contact-us" className="macs-cta__button">Start Your Project &rarr;</Link>
          </div>
        </div>
      </section>
    </>
  );
}
