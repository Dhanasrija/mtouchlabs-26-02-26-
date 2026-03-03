import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Leadership Team | Global Software Development Experts | mTouch Labs",
  description:
    "Meet the leadership team at mTouch Labs, a global software development company delivering enterprise applications, cloud solutions, and digital transformation services worldwide.",
  keywords: [
    "mTouch Labs leadership team",
    "global software development company",
    "enterprise software experts",
    "technology consulting leadership",
    "digital transformation specialists",
  ],
  openGraph: {
    title: "Leadership Team at mTouch Labs",
    description:
      "Experienced technology leaders driving enterprise software and cloud innovation globally.",
    url: "https://www.mtouchlabs.com/leadership-team",
    type: "website",
  },
};

const leaders = [
  {
    role: "Founder & CEO",
    tagline: "Strategic Technology Visionary",
    desc: "Leads global expansion, enterprise partnerships, and innovation initiatives. Drives long-term digital transformation strategies for clients across industries.",
    expertise: "Global software consulting, enterprise modernization, SaaS platforms, AI adoption strategy.",
    icon: "fas fa-chess-king",
  },
  {
    role: "Chief Technology Officer",
    tagline: "Enterprise Architecture Leader",
    desc: "Oversees engineering excellence, DevOps governance, scalable system design, and cloud-native transformation initiatives.",
    expertise: "Microservices architecture, Cloud infrastructure (AWS, Azure), API ecosystems, performance engineering.",
    icon: "fas fa-microchip",
  },
  {
    role: "Director of Operations",
    tagline: "Delivery & Quality Excellence",
    desc: "Ensures on-time global project delivery, process optimization, compliance standards, and customer success management.",
    expertise: "Agile delivery, process optimization, compliance, customer success.",
    icon: "fas fa-tasks",
  },
  {
    role: "Head of Digital Strategy",
    tagline: "Product & Experience Innovation",
    desc: "Focuses on UI/UX innovation, digital product strategy, and data-driven growth solutions.",
    expertise: "UI/UX design systems, product strategy, data-driven growth.",
    icon: "fas fa-lightbulb",
  },
];

const visionPoints = [
  "Strategic product thinking",
  "Enterprise-grade architecture planning",
  "Agile delivery governance",
  "Security-first cloud strategy",
  "Long-term digital scalability",
];

const strengths = [
  "Proven experience in enterprise-grade applications",
  "Strong expertise in cloud-first architecture",
  "Agile & DevOps-driven execution",
  "Transparent communication with global clients",
  "Scalable digital transformation consulting",
];

const industries = [
  { icon: "fas fa-heartbeat", name: "Healthcare" },
  { icon: "fas fa-coins", name: "Fintech" },
  { icon: "fas fa-store", name: "Retail & E-Commerce" },
  { icon: "fas fa-truck", name: "Logistics & Supply Chain" },
  { icon: "fas fa-graduation-cap", name: "Education Technology" },
  { icon: "fas fa-laptop-code", name: "Enterprise SaaS" },
];

const faqs = [
  {
    q: "Who leads mTouch Labs?",
    a: "mTouch Labs is led by experienced technology professionals with expertise in enterprise software development, cloud transformation, and digital innovation for global clients.",
  },
  {
    q: "What industries does the leadership team specialize in?",
    a: "Our leadership team has experience across healthcare, fintech, retail, logistics, and enterprise SaaS platforms.",
  },
  {
    q: "How does the leadership team ensure project success?",
    a: "Through agile governance, enterprise architecture planning, DevOps best practices, and proactive client collaboration.",
  },
  {
    q: "Does mTouch Labs serve international clients?",
    a: "Yes, mTouch Labs provides software development and digital transformation services to clients across the USA, UK, UAE, Australia, and India.",
  },
];

export default function LeadershipTeamPage() {
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
      <link rel="stylesheet" href="/css/leadership-page.css" />

      {/* Hero */}
      <section className="ldr-hero">
        <div className="ldr-hero__bg">
          <div className="ldr-hero__gradient"></div>
        </div>
        <div className="ldr-hero__content container" style={{ paddingTop: "140px" }}>
          <Breadcrumb pagePath="/leadership-team" currentLabel="Leadership Team" />
          <span className="ldr-hero__badge">Our People</span>
          <h1 className="ldr-hero__title">
            Leadership <span className="ldr-accent">Team</span>
          </h1>
          <p className="ldr-hero__sub">
            Global technology leaders driving digital innovation. Our leadership team consists of experienced technology strategists, enterprise architects, and{" "}
            <Link href="/it-services-digital-transformation-company">digital transformation</Link> experts committed to delivering scalable software solutions.
          </p>
          <div className="ldr-hero__btns">
            <Link href="/contact-us" className="ldr-btn ldr-btn--primary">
              Get In Touch <i className="fas fa-arrow-right"></i>
            </Link>
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="ldr-section">
        <div className="container">
          <div className="ldr-intro">
            <h2>Our Leadership <span className="ldr-accent">Vision</span></h2>
            <p>We believe technology leadership goes beyond management. Our executives actively guide teams across{" "}
              <Link href="/custom-software-development-company">Custom Software Development</Link>,{" "}
              <Link href="/enterprise-application-development-company">Enterprise Applications</Link>,{" "}
              <Link href="/mobile-app-development-company">Mobile App Development</Link>,{" "}
              <Link href="/cloud-services">Cloud Services</Link>, and AI-powered Digital Solutions.
            </p>
            <div className="ldr-why-grid" style={{ marginTop: "24px" }}>
              {visionPoints.map((p, i) => (
                <div key={i} className="ldr-why-item">
                  <i className="fas fa-check-circle"></i>
                  <span>{p}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leaders */}
      <section className="ldr-section ldr-section--alt">
        <div className="container">
          <h2 className="ldr-section__title">Executive Leadership <span className="ldr-accent">Team</span></h2>
          <div className="ldr-grid ldr-grid--2">
            {leaders.map((l, i) => (
              <div key={i} className="ldr-card ldr-card--leader" data-aos="fade-up" data-aos-delay={i * 100}>
                <div className="ldr-card__icon"><i className={l.icon}></i></div>
                <h3 className="ldr-card__title">{l.role}</h3>
                <span className="ldr-card__tagline">{l.tagline}</span>
                <p className="ldr-card__desc">{l.desc}</p>
                <p className="ldr-card__expertise"><strong>Expertise:</strong> {l.expertise}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="ldr-section">
        <div className="container">
          <h2 className="ldr-section__title">Why Our Leadership <span className="ldr-accent">Stands Out</span></h2>
          <div className="ldr-why-grid">
            {strengths.map((s, i) => (
              <div key={i} className="ldr-why-item" data-aos="fade-up" data-aos-delay={i * 80}>
                <i className="fas fa-check-circle"></i>
                <span>{s}</span>
              </div>
            ))}
          </div>
          <p className="ldr-closing">Our leadership ensures every engagement delivers measurable ROI and long-term value.</p>
        </div>
      </section>

      {/* Industries */}
      <section className="ldr-section ldr-section--alt">
        <div className="container">
          <h2 className="ldr-section__title">Industries We <span className="ldr-accent">Empower</span></h2>
          <div className="ldr-industries">
            {industries.map((ind, i) => (
              <div key={i} className="ldr-industry" data-aos="fade-up" data-aos-delay={i * 80}>
                <i className={ind.icon}></i>
                <span>{ind.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="ldr-section">
        <div className="container">
          <h2 className="ldr-section__title">Frequently Asked <span className="ldr-accent">Questions</span></h2>
          <div className="ldr-faq-list">
            {faqs.map((f, i) => (
              <details key={i} className="ldr-faq-item">
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="ldr-cta">
        <div className="container ldr-cta__inner">
          <span className="ldr-tag ldr-tag--light">Let&apos;s Connect</span>
          <h2>Work with Our Expert Team</h2>
          <p>Partner with proven technology leaders for your next digital initiative.</p>
          <div className="ldr-cta__btns">
            <Link href="/contact-us" className="ldr-btn ldr-btn--white">
              Contact Us <i className="fas fa-arrow-right"></i>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}