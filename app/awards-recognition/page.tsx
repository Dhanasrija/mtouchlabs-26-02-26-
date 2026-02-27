import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Awards & Recognition | Award-Winning Software Development Company | mTouch Labs",
  description:
    "Discover the awards and recognition earned by mTouch Labs for excellence in custom software development, mobile apps, enterprise solutions, and cloud services.",
  keywords: [
    "award winning software development company",
    "mTouch Labs awards",
    "recognized IT services company",
    "enterprise application development experts",
    "global software development company",
  ],
  openGraph: {
    title: "Awards & Recognition - mTouch Labs",
    description:
      "Recognized globally for innovation in enterprise software, mobile app development, and cloud solutions.",
    url: "https://www.mtouchlabs.com/awards-recognition",
    type: "website",
  },
};

const awards = [
  {
    icon: "fas fa-trophy",
    title: "Excellence in Custom Software Development",
    desc: "Recognized for delivering high-performance enterprise applications and scalable SaaS platforms for global businesses.",
    link: "/custom-software-development-company",
    linkText: "Custom Software Services",
  },
  {
    icon: "fas fa-mobile-alt",
    title: "Innovation in Mobile App Development",
    desc: "Acknowledged for building secure and user-centric mobile applications using modern frameworks like iOS, Android, and React Native.",
    link: "/mobile-app-development-company",
    linkText: "Mobile App Services",
  },
  {
    icon: "fas fa-cloud",
    title: "Cloud & Digital Transformation Leadership",
    desc: "Honored for implementing cloud-native architectures and successful cloud migration strategies for enterprises.",
    link: "/cloud-services",
    linkText: "Cloud Services",
  },
  {
    icon: "fas fa-handshake",
    title: "Client Satisfaction & Delivery Excellence",
    desc: "Appreciated for maintaining transparent communication, agile project management, and consistent on-time delivery.",
    link: "/enterprise-application-development-company",
    linkText: "Enterprise Solutions",
  },
];

const certifications = [
  "Cloud certifications (AWS, Azure)",
  "Agile & DevOps best practices",
  "Enterprise security compliance",
  "Modern UI/UX and accessibility standards",
];

const benefits = [
  "Proven technical expertise",
  "Globally aligned engineering standards",
  "Scalable and secure architecture",
  "Dedicated innovation-driven teams",
  "Long-term digital growth strategies",
];

const regions = ["USA", "UK", "UAE", "Australia", "India"];

const faqs = [
  {
    q: "Has mTouch Labs received recognition for software development services?",
    a: "Yes, mTouch Labs has been recognized for excellence in custom software development, enterprise applications, mobile app innovation, and cloud transformation services.",
  },
  {
    q: "What makes mTouch Labs an award-worthy technology company?",
    a: "Our commitment to scalable architecture, agile delivery, cloud expertise, and client satisfaction sets us apart as a trusted global software partner.",
  },
  {
    q: "Do awards reflect project quality?",
    a: "Yes. Industry recognition and client appreciation demonstrate our ability to consistently deliver high-performance, secure, and business-driven technology solutions.",
  },
  {
    q: "Does recognition impact client projects?",
    a: "Absolutely. Our achievements ensure clients work with an experienced, trusted, and innovation-driven technology team.",
  },
];

export default function AwardsRecognitionPage() {
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <link rel="stylesheet" href="/css/service-page.css" />

      {/* Hero */}
      <section className="srv-hero">
        <div className="srv-hero__bg">
          <div className="srv-hero__gradient"></div>
        </div>
        <div className="srv-hero__content container">
          <nav className="srv-breadcrumb" aria-label="Breadcrumb">
            <ol>
              <li><Link href="/">Home</Link></li>
              <li><span className="srv-breadcrumb__sep">/</span></li>
              <li className="srv-breadcrumb__current">Awards &amp; Recognition</li>
            </ol>
          </nav>
          <span className="srv-hero__badge">Recognition</span>
          <h1 className="srv-hero__title">
            Awards & <span className="srv-accent">Recognition</span>
          </h1>
          <p className="srv-hero__sub">
            Recognized for excellence in software development and digital innovation. Our commitment to delivering scalable, secure, and innovative solutions has earned us recognition across industries.
          </p>
          <div className="srv-hero__btns">
            <Link href="/contact-us" className="srv-btn srv-btn--primary">
              Work With Us <i className="fas fa-arrow-right"></i>
            </Link>
            <Link href="/leadership-team" className="srv-btn srv-btn--ghost">
              Our Team
            </Link>
          </div>
        </div>
      </section>

      {/* Awards */}
      <section className="srv-section">
        <div className="container">
          <h2 className="srv-section__title">Industry Recognition & <span className="srv-accent">Achievements</span></h2>
          <div className="srv-grid srv-grid--2">
            {awards.map((a, i) => (
              <div key={i} className="srv-card srv-card--award" data-aos="fade-up" data-aos-delay={i * 100}>
                <div className="srv-card__icon srv-card__icon--gold"><i className={a.icon}></i></div>
                <h3 className="srv-card__title">{a.title}</h3>
                <p className="srv-card__desc">{a.desc}</p>
                <Link href={a.link} className="srv-card__link">{a.linkText} →</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="srv-section srv-section--alt">
        <div className="container">
          <h2 className="srv-section__title">Certifications & <span className="srv-accent">Partnerships</span></h2>
          <p className="srv-section__desc">Our team continuously upgrades skills and aligns with global standards through:</p>
          <div className="srv-why-grid">
            {certifications.map((c, i) => (
              <div key={i} className="srv-why-item">
                <i className="fas fa-certificate"></i>
                <span>{c}</span>
              </div>
            ))}
          </div>
          <p className="srv-closing">These recognitions reinforce our position as a trusted <Link href="/enterprise-application-development-company">enterprise software development partner</Link>.</p>
        </div>
      </section>

      {/* Benefits */}
      <section className="srv-section">
        <div className="container">
          <h2 className="srv-section__title">What Our Recognition <span className="srv-accent">Means for Clients</span></h2>
          <div className="srv-why-grid">
            {benefits.map((b, i) => (
              <div key={i} className="srv-why-item" data-aos="fade-up" data-aos-delay={i * 80}>
                <i className="fas fa-check-circle"></i>
                <span>{b}</span>
              </div>
            ))}
          </div>
          <p className="srv-closing">Our recognition is not just an achievement — it is a responsibility to continue delivering excellence.</p>
        </div>
      </section>

      {/* Global */}
      <section className="srv-section srv-section--dark">
        <div className="container" style={{ textAlign: "center" }}>
          <h2 className="srv-section__title srv-section__title--light">Global Trust & <span className="srv-accent">Industry Impact</span></h2>
          <p style={{ color: "rgba(255,255,255,0.7)", marginBottom: "32px", fontSize: "16px" }}>We proudly serve clients across:</p>
          <div className="srv-industries">
            {regions.map((r, i) => (
              <div key={i} className="srv-industry">
                <i className="fas fa-globe"></i>
                <span>{r}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="srv-section">
        <div className="container">
          <h2 className="srv-section__title">Frequently Asked <span className="srv-accent">Questions</span></h2>
          <div className="srv-faq-list">
            {faqs.map((f, i) => (
              <details key={i} className="srv-faq-item">
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="srv-cta">
        <div className="container srv-cta__inner">
          <span className="srv-tag srv-tag--light">Award-Winning Team</span>
          <h2>Build Your Next Project With Us</h2>
          <p>Partner with a globally recognized software development company.</p>
          <div className="srv-cta__btns">
            <Link href="/contact-us" className="srv-btn srv-btn--white">
              Contact Us <i className="fas fa-arrow-right"></i>
            </Link>
            <Link href="/cloud-migration-services" className="srv-btn srv-btn--ghost-light">
              Cloud Migration
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}