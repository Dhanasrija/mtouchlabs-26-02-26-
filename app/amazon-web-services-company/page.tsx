import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Amazon Web Services Company | mTouch Labs",
  description:
    "mTouch Labs is an Amazon Web Services company delivering scalable, resilient, and performance-driven cloud infrastructure solutions.",
  alternates: {
    canonical: "https://www.mtouchlabs.com/amazon-web-services-company",
  },
  openGraph: {
    title: "Amazon Web Services Company | mTouch Labs",
    description:
      "Enterprise-grade AWS cloud modernization and infrastructure engineering solutions.",
    url: "https://www.mtouchlabs.com/amazon-web-services-company",
    siteName: "mTouch Labs",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Amazon Web Services Company | mTouch Labs",
    description:
      "Scalable AWS infrastructure and cloud transformation services.",
  },
};

const services = [
  {
    icon: "fas fa-cloud-upload-alt",
    title: "Cloud Modernization Strategy",
    points: ["Legacy system evaluation", "Application re-architecture planning", "Performance bottleneck identification", "Infrastructure redesign", "Cloud readiness assessment"],
  },
  {
    icon: "fas fa-server",
    title: "High-Availability Environments",
    points: ["Minimize downtime", "Distribute workloads efficiently", "Support traffic spikes", "Maintain business continuity"],
  },
  {
    icon: "fas fa-expand-arrows-alt",
    title: "Scalable Application Infrastructure",
    points: ["Rapid user growth", "Multi-region expansion", "API-driven ecosystems", "Real-time application environments"],
  },
  {
    icon: "fas fa-chart-bar",
    title: "Cloud Governance & Performance",
    points: ["Resource usage tracking", "Performance benchmarking", "Infrastructure monitoring", "Access control frameworks"],
  },
  {
    icon: "fas fa-shield-alt",
    title: "Disaster Recovery & Continuity",
    points: ["Backup automation", "Failover configuration", "Recovery time optimization", "Data redundancy strategies"],
  },
  {
    icon: "fas fa-cogs",
    title: "AWS Technology Stack",
    points: ["Compute environments", "Distributed storage systems", "Managed database services", "Network isolation models"],
  },
];

const industries = [
  { icon: "fas fa-laptop-code", name: "SaaS & Product Companies" },
  { icon: "fas fa-shopping-cart", name: "Digital Commerce Platforms" },
  { icon: "fas fa-university", name: "Financial Technology" },
  { icon: "fas fa-building", name: "Enterprise Business Systems" },
  { icon: "fas fa-heartbeat", name: "Healthcare Technology" },
];

const steps = [
  { num: "01", label: "Infrastructure Assessment" },
  { num: "02", label: "Cloud Blueprint Design" },
  { num: "03", label: "Controlled Deployment" },
  { num: "04", label: "Validation Testing" },
  { num: "05", label: "Governance Implementation" },
  { num: "06", label: "Continuous Optimization" },
];

const whyUs = [
  "Infrastructure-first engineering approach",
  "Scalable cloud architecture expertise",
  "Performance monitoring frameworks",
  "Governance-driven cloud management",
  "Enterprise reliability standards",
  "Long-term cloud partnership model",
];

const faqs = [
  {
    q: "What does an Amazon Web Services company provide?",
    a: "An Amazon Web Services company designs and manages scalable, secure, and resilient infrastructure using AWS cloud technologies.",
  },
  {
    q: "How is AWS different from traditional hosting?",
    a: "AWS offers on-demand scalability, global infrastructure, managed services, and high availability compared to traditional hosting models.",
  },
  {
    q: "Can AWS support enterprise applications?",
    a: "Yes. AWS supports enterprise-grade applications with distributed infrastructure, compliance controls, and global deployment capability.",
  },
  {
    q: "Do you provide cloud governance and optimization?",
    a: "Yes. We implement monitoring, governance frameworks, and performance optimization strategies.",
  },
];

export default function AWSCompanyPage() {
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
              <li><Link href="/services">Services</Link></li>
              <li><span className="srv-breadcrumb__sep">/</span></li>
              <li className="srv-breadcrumb__current">Amazon Web Services</li>
            </ol>
          </nav>
          <span className="srv-hero__badge">Cloud Infrastructure</span>
          <h1 className="srv-hero__title">
            Amazon Web Services <span className="srv-accent">Company</span>
          </h1>
          <p className="srv-hero__sub">
            mTouch Labs is an experienced Amazon Web Services company helping businesses modernize infrastructure, strengthen system reliability, and accelerate digital transformation through AWS-powered ecosystems.
          </p>
          <div className="srv-hero__btns">
            <Link href="/contact-us" className="srv-btn srv-btn--primary">
              Get Started <i className="fas fa-arrow-right"></i>
            </Link>
            <Link href="/cloud-services" className="srv-btn srv-btn--ghost">
              Cloud Services
            </Link>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="srv-section">
        <div className="container">
          <div className="srv-intro">
            <h2>Why Businesses Choose an <span className="srv-accent">Amazon Web Services</span> Company</h2>
            <p>
              Organizations move to AWS to achieve flexible infrastructure scaling, reduced capital expenditure, faster deployment cycles, improved uptime and resilience, and global accessibility. However, without strategic architecture and governance, cloud adoption can increase complexity. That&apos;s where a structured AWS partner becomes essential.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="srv-section srv-section--alt">
        <div className="container">
          <h2 className="srv-section__title">Our AWS <span className="srv-accent">Expertise</span></h2>
          <div className="srv-grid srv-grid--3">
            {services.map((s, i) => (
              <div key={i} className="srv-card" data-aos="fade-up" data-aos-delay={i * 100}>
                <div className="srv-card__icon"><i className={s.icon}></i></div>
                <h3 className="srv-card__title">{s.title}</h3>
                <ul className="srv-card__list">
                  {s.points.map((p, j) => (
                    <li key={j}><i className="fas fa-check"></i> {p}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="srv-section">
        <div className="container">
          <h2 className="srv-section__title">Industries Leveraging Our <span className="srv-accent">AWS Expertise</span></h2>
          <div className="srv-industries">
            {industries.map((ind, i) => (
              <div key={i} className="srv-industry" data-aos="fade-up" data-aos-delay={i * 80}>
                <i className={ind.icon}></i>
                <span>{ind.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="srv-section srv-section--dark">
        <div className="container">
          <h2 className="srv-section__title srv-section__title--light">Our Engagement <span className="srv-accent">Framework</span></h2>
          <div className="srv-steps">
            {steps.map((s, i) => (
              <div key={i} className="srv-step">
                <span className="srv-step__num">{s.num}</span>
                <span className="srv-step__label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="srv-section">
        <div className="container">
          <h2 className="srv-section__title">Why mTouch Labs as Your <span className="srv-accent">AWS Company?</span></h2>
          <div className="srv-why-grid">
            {whyUs.map((item, i) => (
              <div key={i} className="srv-why-item" data-aos="fade-up" data-aos-delay={i * 80}>
                <i className="fas fa-check-circle"></i>
                <span>{item}</span>
              </div>
            ))}
          </div>
          <p className="srv-closing">We build AWS environments that support sustainable digital growth.</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="srv-section srv-section--alt">
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
          <span className="srv-tag srv-tag--light">Ready to Scale?</span>
          <h2>Transform Your Infrastructure with AWS</h2>
          <p>Partner with mTouch Labs for enterprise-grade cloud solutions.</p>
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