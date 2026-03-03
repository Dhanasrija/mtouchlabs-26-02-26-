import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Our Journey | Global Software Development & AI Solutions Company | mTouch Labs",
  description:
    "Founded in 2012, mTouch Labs evolved from a mobile app development startup into a global software development and AI solutions company delivering enterprise applications, cloud services, and digital transformation worldwide.",
  keywords: [
    "mTouch Labs journey",
    "global software development company",
    "AI solutions company",
    "enterprise application development company",
    "cloud services provider",
    "digital transformation partner",
  ],
  openGraph: {
    title: "Our Journey - mTouch Labs",
    description:
      "Discover how mTouch Labs grew from a mobile-first startup into a global enterprise software and AI solutions provider.",
    url: "https://www.mtouchlabs.com/our-journey",
    siteName: "mTouch Labs",
    type: "website",
  },
  alternates: {
    canonical: "https://www.mtouchlabs.com/our-journey",
  },
};

const timeline = [
  {
    year: "2012",
    title: "Mobile-First Innovation",
    desc: "Founded with a mobile-first vision, specializing in iOS and Android app development, cross-platform solutions, and UI/UX-driven mobile experiences.",
    icon: "fas fa-mobile-alt",
  },
  {
    year: "2015",
    title: "Enterprise & Cloud Expansion",
    desc: "Expanded into custom software development, enterprise applications, web development, cloud services, and DevOps engineering.",
    icon: "fas fa-cloud",
  },
  {
    year: "2019",
    title: "AI & Intelligent Solutions",
    desc: "Strategically expanded into AI-powered business automation, predictive analytics, intelligent data solutions, and AI-integrated SaaS platforms.",
    icon: "fas fa-brain",
  },
  {
    year: "2022",
    title: "Global Digital Partner",
    desc: "Established presence serving clients across USA, UK, UAE, Australia, and India with enterprise-grade digital transformation solutions.",
    icon: "fas fa-globe",
  },
];

const milestones = [
  "Founded in 2012 with a mobile-first vision",
  "Expanded into enterprise software development",
  "Successfully delivered scalable cloud-native solutions",
  "Integrated AI-driven digital transformation services",
  "Built long-term partnerships with global clients",
];

const todayServices = [
  { icon: "fas fa-building", name: "Enterprise Software Modernization" },
  { icon: "fas fa-cloud-upload-alt", name: "Cloud Transformation & Migration" },
  { icon: "fas fa-robot", name: "AI-Powered Digital Solutions" },
  { icon: "fas fa-laptop-code", name: "SaaS Product Development" },
  { icon: "fas fa-cogs", name: "End-to-End Digital Product Engineering" },
];

const faqs = [
  {
    q: "When was mTouch Labs founded?",
    a: "mTouch Labs was founded in 2012 as a mobile-focused development company and has since evolved into a global software development and AI solutions provider.",
  },
  {
    q: "How has mTouch Labs evolved over the years?",
    a: "The company expanded from mobile app development into enterprise software, cloud services, and AI-powered digital transformation solutions for global clients.",
  },
  {
    q: "Does mTouch Labs provide AI solutions?",
    a: "Yes, mTouch Labs offers AI-powered business automation, predictive analytics, and intelligent SaaS integrations for enterprises.",
  },
  {
    q: "Does mTouch Labs serve international clients?",
    a: "Yes, mTouch Labs delivers software development, cloud, and AI solutions to clients across the USA, UK, UAE, Australia, and India.",
  },
];

export default function OurJourneyPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <link rel="stylesheet" href="/css/journey-page.css" />

      {/* Hero */}
      <section className="jrn-hero">
        <div className="jrn-hero__bg"><div className="jrn-hero__gradient"></div></div>
        <div className="jrn-hero__content container" style={{ paddingTop: "140px" }}>
          <Breadcrumb pagePath="/our-journey" currentLabel="Our Journey" />
          <span className="jrn-hero__badge">Since 2012</span>
          <h1 className="jrn-hero__title">Our <span className="jrn-accent">Journey</span></h1>
          <p className="jrn-hero__sub">
            From a passionate startup to a global software &amp; AI solutions partner. Founded in 2012, mTouch Labs began as a small team of developers driven by curiosity, creativity, and a desire to make technology more accessible and impactful.
          </p>
          <div className="jrn-hero__btns">
            <Link href="/contact-us" className="jrn-btn jrn-btn--primary">Get In Touch <i className="fas fa-arrow-right"></i></Link>
            <Link href="/leadership-team" className="jrn-btn jrn-btn--ghost">Our Team</Link>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="jrn-section">
        <div className="container">
          <h2 className="jrn-section__title">How We <span className="jrn-accent">Evolved</span></h2>
          <div className="jrn-timeline">
            {timeline.map((t, i) => (
              <div key={i} className="jrn-timeline__item" data-aos="fade-up" data-aos-delay={i * 120}>
                <div className="jrn-timeline__dot"><i className={t.icon}></i></div>
                <div className="jrn-timeline__card">
                  <span className="jrn-timeline__year">{t.year}</span>
                  <h3 className="jrn-timeline__heading">{t.title}</h3>
                  <p className="jrn-timeline__desc">{t.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="jrn-section jrn-section--alt">
        <div className="container">
          <h2 className="jrn-section__title">Milestones That Define Our <span className="jrn-accent">Growth</span></h2>
          <div className="jrn-milestones">
            {milestones.map((m, i) => (
              <div key={i} className="jrn-milestone" data-aos="fade-up" data-aos-delay={i * 80}>
                <i className="fas fa-check-circle"></i>
                <span>{m}</span>
              </div>
            ))}
          </div>
          <p className="jrn-closing">Each milestone represents our continuous evolution as a trusted global technology partner.</p>
        </div>
      </section>

      {/* Where We Are Today */}
      <section className="jrn-section">
        <div className="container">
          <h2 className="jrn-section__title">Where We Are <span className="jrn-accent">Today</span></h2>
          <p className="jrn-section__desc">
            Today, mTouch Labs stands at the intersection of innovation, scalability, and intelligence — delivering{" "}
            <Link href="/custom-software-development-company">custom software solutions</Link>,{" "}
            <Link href="/cloud-services">cloud services</Link>, and{" "}
            <Link href="/generative-ai-development-company">AI-powered platforms</Link> to clients worldwide.
          </p>
          <div className="jrn-today-grid">
            {todayServices.map((s, i) => (
              <div key={i} className="jrn-today-card" data-aos="fade-up" data-aos-delay={i * 80}>
                <i className={s.icon}></i>
                <span>{s.name}</span>
              </div>
            ))}
          </div>
          <p className="jrn-closing">Our journey continues — driven by innovation, guided by expertise, and focused on delivering measurable business outcomes worldwide.</p>
        </div>
      </section>

      {/* Global Presence */}
      <section className="jrn-section jrn-section--dark">
        <div className="container" style={{ textAlign: "center" }}>
          <h2 className="jrn-section__title jrn-section__title--light">Global Presence &amp; <span className="jrn-accent">Industry Impact</span></h2>
          <div className="jrn-regions">
            {["USA", "UK", "UAE", "Australia", "India"].map((r, i) => (
              <div key={i} className="jrn-region"><i className="fas fa-globe"></i><span>{r}</span></div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="jrn-section">
        <div className="container">
          <h2 className="jrn-section__title">Frequently Asked <span className="jrn-accent">Questions</span></h2>
          <div className="jrn-faq-list">
            {faqs.map((f, i) => (
              <details key={i} className="jrn-faq-item">
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="jrn-cta">
        <div className="container jrn-cta__inner">
          <span className="jrn-tag">Partner With Us</span>
          <h2>Let&apos;s Build the Future Together</h2>
          <p>Join 100+ global clients who trust mTouch Labs for enterprise-grade digital solutions.</p>
          <div className="jrn-cta__btns">
            <Link href="/contact-us" className="jrn-btn jrn-btn--white">Contact Us <i className="fas fa-arrow-right"></i></Link>
            <Link href="/cloud-migration-services" className="jrn-btn jrn-btn--ghost-light">Cloud Migration</Link>
          </div>
        </div>
      </section>
    </>
  );
}