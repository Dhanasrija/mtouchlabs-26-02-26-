import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Enterprise Application Development Company | mTouch Labs",
  description: "mTouch Labs delivers scalable enterprise application development services including custom software, cloud-based enterprise solutions, and system integration.",
  keywords: ["enterprise application development company","enterprise software development services","custom enterprise application development","enterprise web application development","cloud enterprise software solutions","enterprise development company India"],
  alternates: { canonical: "https://www.mtouchlabs.com/enterprise-application-development-company" },
  openGraph: { title: "Enterprise Application Development Company | mTouch Labs", description: "Custom enterprise software development services designed for scalability, security, and performance.", url: "https://www.mtouchlabs.com/enterprise-application-development-company", siteName: "mTouch Labs", type: "website" },
  twitter: { card: "summary_large_image", title: "Enterprise Application Development Company | mTouch Labs", description: "Custom enterprise software development for scalability, security, and performance." },
};

export default function EnterpriseApplicationDevelopment() {
  return (
    <>
      <section className="ea-hero"><div className="ea-hero__inner">
        <Breadcrumb pagePath="/enterprise-application-development-company" />
        <h1 className="ea-hero__title">Enterprise <span className="ea-hero__title-accent">Application</span> Development</h1>
        <p className="ea-hero__subtitle">Scalable, Secure &amp; Cloud-Native Enterprise Software Solutions</p>
        <p className="ea-hero__desc">mTouch Labs is a leading Enterprise Application Development Company delivering secure, scalable, and high-performance enterprise software solutions. We architect systems that streamline operations, unify data, automate workflows, and support long-term digital transformation.</p>
      </div></section>

      <section className="ea-about"><div className="ea-container"><div className="ea-about__grid">
        <div className="ea-about__content ea-animate--left">
          <h2 className="ea-about__heading">What Is <span className="ea-text-accent">Enterprise Application</span> Development?</h2>
          <p className="ea-about__text">Enterprise application development involves designing and deploying large-scale software systems that manage mission-critical business processes across departments, regions, and global teams.</p>
          <p className="ea-about__text">Unlike standard applications, enterprise systems must support high user concurrency, complex integrations, advanced data governance, regulatory compliance, and long-term scalability. Our{" "}
            <a href="/custom-software-development-company" style={{color: "#2563eb", textDecoration: "none", fontWeight: 600}}>custom software development</a>{" "}
            expertise ensures every enterprise solution is tailored to your unique business requirements.
          </p>
          <p className="ea-about__text">Enterprise software must function as strategic infrastructure — not just a digital tool. From large-scale ERP platforms to{" "}
            <a href="/web-development-company" style={{color: "#2563eb", textDecoration: "none", fontWeight: 600}}>cloud-native web applications</a>, we design systems built for resilience and performance at scale.
          </p>
        </div>
        <div className="ea-stats ea-animate--right">
          <div className="ea-stat"><span className="ea-stat__icon">🏢</span><span className="ea-stat__label">ERP &amp; CRM Systems</span></div>
          <div className="ea-stat"><span className="ea-stat__icon">☁️</span><span className="ea-stat__label">Cloud-Native Apps</span></div>
          <div className="ea-stat"><span className="ea-stat__icon">🔒</span><span className="ea-stat__label">Security &amp; Compliance</span></div>
          <div className="ea-stat"><span className="ea-stat__icon">🔗</span><span className="ea-stat__label">System Integration</span></div>
        </div>
      </div></div></section>

      <section className="ea-whoweare"><div className="ea-container"><div className="ea-whoweare__grid">
        <div className="ea-whoweare__stats ea-animate--left">
          <div className="ea-stat ea-stat--dark"><span className="ea-stat__number">14+</span><span className="ea-stat__label">Years Experience</span></div>
          <div className="ea-stat ea-stat--dark"><span className="ea-stat__number">1000+</span><span className="ea-stat__label">Enterprise Projects</span></div>
          <div className="ea-stat ea-stat--dark"><span className="ea-stat__number">3</span><span className="ea-stat__label">Cloud Platforms</span></div>
          <div className="ea-stat ea-stat--dark"><span className="ea-stat__number">GDPR</span><span className="ea-stat__label">Compliance Ready</span></div>
        </div>
        <div className="ea-whoweare__content ea-animate--right">
          <h2 className="ea-whoweare__heading">Our Enterprise <span className="ea-text-accent">Capabilities</span></h2>
          <p className="ea-whoweare__text">We build enterprise-grade systems across the full stack:</p>
          <ul className="ea-checklist">
            <li className="ea-checklist__item"><span className="ea-checklist__icon">✓</span><span>Custom ERP, CRM, HR &amp; supply chain management systems</span></li>
            <li className="ea-checklist__item"><span className="ea-checklist__icon">✓</span><span>Enterprise web apps — React, Next.js, Node.js, microservices</span></li>
            <li className="ea-checklist__item"><span className="ea-checklist__icon">✓</span><span>Cloud deployment — AWS, Azure, Google Cloud with auto-scaling</span></li>
            <li className="ea-checklist__item"><span className="ea-checklist__icon">✓</span><span>System integration — ERP, CRM, payments, analytics &amp; legacy</span></li>
            <li className="ea-checklist__item"><span className="ea-checklist__icon">✓</span><span>Security — RBAC, MFA, encryption, secure APIs, GDPR compliance</span></li>
          </ul>
        </div>
      </div></div></section>

      <section className="ea-services"><div className="ea-container">
        <div className="ea-services__header ea-animate"><h2 className="ea-services__title">Our Enterprise <span className="ea-text-accent">Development Services</span></h2><p className="ea-services__subtitle">From custom software to cloud-native enterprise solutions</p></div>
        <div className="ea-services__grid ea-stagger">
          <div className="ea-service-card ea-animate--scale"><span className="ea-service-card__badge">01</span><h4 className="ea-service-card__title">Custom Enterprise Software</h4><p className="ea-service-card__text">Tailored ERP, CRM, HR, supply chain, and business intelligence systems designed around your operational architecture and scalability goals.</p></div>
          <div className="ea-service-card ea-animate--scale"><span className="ea-service-card__badge">02</span><h4 className="ea-service-card__title">Enterprise Web Applications</h4><p className="ea-service-card__text">Secure, responsive web apps using React, Next.js, Node.js, and microservices with modular architecture for flexibility.</p></div>
          <div className="ea-service-card ea-animate--scale"><span className="ea-service-card__badge">03</span><h4 className="ea-service-card__title">Cloud Enterprise Apps</h4><p className="ea-service-card__text">AWS, Azure &amp; GCP deployment with auto-scaling, high availability, disaster recovery, global accessibility, and secure governance.</p></div>
          <div className="ea-service-card ea-animate--scale"><span className="ea-service-card__badge">04</span><h4 className="ea-service-card__title">System Integration</h4><p className="ea-service-card__text">Seamless integration with ERP, CRM, payment systems, analytics, third-party APIs, and legacy systems for cross-departmental data flow.</p></div>
          <div className="ea-service-card ea-service-card--wide ea-animate--scale"><span className="ea-service-card__badge">05</span><h4 className="ea-service-card__title">Security &amp; Compliance</h4><p className="ea-service-card__text">RBAC, multi-factor authentication, data encryption, secure API gateways, and GDPR-aligned architecture built into every layer.</p></div>
        </div>
      </div></section>

      <section className="ea-delivery"><div className="ea-container">
        <h2 className="ea-delivery__heading ea-animate">Our Enterprise <span className="ea-text-accent">Development Methodology</span></h2>
        <p className="ea-delivery__text">This lifecycle-based framework reduces risk, improves predictability, and ensures long-term stability.</p>
        <div className="ea-delivery__steps">
          <div className="ea-step"><span className="ea-step__circle">Discovery</span></div><span className="ea-step__arrow">→</span>
          <div className="ea-step"><span className="ea-step__circle">Architecture</span></div><span className="ea-step__arrow">→</span>
          <div className="ea-step"><span className="ea-step__circle">Risk Assessment</span></div><span className="ea-step__arrow">→</span>
          <div className="ea-step"><span className="ea-step__circle">Agile Dev</span></div><span className="ea-step__arrow">→</span>
          <div className="ea-step"><span className="ea-step__circle">Integration</span></div><span className="ea-step__arrow">→</span>
          <div className="ea-step"><span className="ea-step__circle">Enterprise QA</span></div><span className="ea-step__arrow">→</span>
          <div className="ea-step"><span className="ea-step__circle">Deploy</span></div>
        </div>
      </div></section>

      <section className="ea-reliable"><div className="ea-container"><div className="ea-reliable__inner ea-animate">
        <h2 className="ea-reliable__heading">Why Choose <span className="ea-text-accent">mTouch Labs</span>?</h2>
        <p className="ea-reliable__text">We operate as a digital transformation partner — not just a software vendor.</p>
        <div className="ea-reliable__pillars">
          <div className="ea-pillar"><span className="ea-pillar__dot"></span><span className="ea-pillar__label">Business-aligned enterprise architecture</span></div>
          <div className="ea-pillar"><span className="ea-pillar__dot"></span><span className="ea-pillar__label">Cloud-native scalable solutions</span></div>
          <div className="ea-pillar"><span className="ea-pillar__dot"></span><span className="ea-pillar__label">Security-first engineering approach</span></div>
          <div className="ea-pillar"><span className="ea-pillar__dot"></span><span className="ea-pillar__label">Cross-system integration expertise</span></div>
          <div className="ea-pillar"><span className="ea-pillar__dot"></span><span className="ea-pillar__label">Transparent governance &amp; reporting</span></div>
          <div className="ea-pillar"><span className="ea-pillar__dot"></span><span className="ea-pillar__label">Long-term enterprise support model</span></div>
        </div>
      </div></div></section>

      <section className="ea-industries"><div className="ea-container">
        <h2 className="ea-industries__title ea-animate">Industries We <span className="ea-text-accent">Serve</span></h2>
        <div className="ea-industries__grid ea-stagger">
          <div className="ea-industry ea-animate--scale"><span className="ea-industry__icon">🛒</span><h4 className="ea-industry__title">eCommerce &amp; Retail</h4></div>
          <div className="ea-industry ea-animate--scale"><span className="ea-industry__icon">🏥</span><h4 className="ea-industry__title">Healthcare &amp; HealthTech</h4></div>
          <div className="ea-industry ea-animate--scale"><span className="ea-industry__icon">💳</span><h4 className="ea-industry__title">FinTech &amp; Banking</h4></div>
          <div className="ea-industry ea-animate--scale"><span className="ea-industry__icon">🏭</span><h4 className="ea-industry__title">Manufacturing &amp; Supply Chain</h4></div>
          <div className="ea-industry ea-animate--scale"><span className="ea-industry__icon">🎓</span><h4 className="ea-industry__title">Education &amp; EdTech</h4></div>
          <div className="ea-industry ea-animate--scale"><span className="ea-industry__icon">🏢</span><h4 className="ea-industry__title">Government &amp; Public Sector</h4></div>
        </div>
      </div></section>

      <section className="ea-tech"><div className="ea-container"><div className="ea-tech__grid">
        <div className="ea-tech__content ea-animate--left">
          <h2 className="ea-tech__heading">Technologies <span className="ea-text-accent">We Use</span></h2>
          <p className="ea-tech__text">Modern frameworks and cloud platforms for enterprise-grade solutions.</p>
          <div className="ea-tech__tags">
            {[
              "React", "Next.js", "Node.js", "TypeScript",
              "Java", "Python", "Microservices", "AWS",
              "Azure", "Google Cloud", "REST APIs", "GraphQL",
              "Docker", "Kubernetes", "PostgreSQL", "MongoDB",
              "Redis", "Terraform", "CI/CD", "Kafka"
            ].map((tech) => (
              <span key={tech} className="ea-tag">{tech}</span>
            ))}
          </div>
        </div>
        <div className="ea-tech__stats ea-animate--right">
          <div className="ea-stat ea-stat--dark"><span className="ea-stat__number">3</span><span className="ea-stat__label">Cloud Platforms</span></div>
          <div className="ea-stat ea-stat--dark"><span className="ea-stat__number">MSA</span><span className="ea-stat__label">Microservices</span></div>
          <div className="ea-stat ea-stat--dark"><span className="ea-stat__number">API</span><span className="ea-stat__label">REST &amp; GraphQL</span></div>
          <div className="ea-stat ea-stat--dark"><span className="ea-stat__number">CI/CD</span><span className="ea-stat__label">DevOps Pipeline</span></div>
        </div>
      </div></div></section>

      <section className="ea-faq"><div className="ea-container"><div className="ea-faq__wrapper">
        <h3 className="ea-faq__heading ea-animate">Frequently Asked <span className="ea-text-accent">Questions</span></h3>
        <p className="ea-faq__subtext">Everything about enterprise application development</p>
        <div className="ea-faq__list">
          <details className="ea-faq__item"><summary className="ea-faq__question"><span>What does an enterprise application development company do?</span><span className="ea-faq__chevron"></span></summary><div className="ea-faq__answer"><p>An enterprise application development company designs and builds large-scale software systems that manage core business operations, integrate multiple systems, and support high user volumes.</p></div></details>
          <details className="ea-faq__item"><summary className="ea-faq__question"><span>How is enterprise software different from traditional applications?</span><span className="ea-faq__chevron"></span></summary><div className="ea-faq__answer"><p>Enterprise software supports complex workflows, integrates multiple departments, ensures regulatory compliance, and scales across global operations.</p></div></details>
          <details className="ea-faq__item"><summary className="ea-faq__question"><span>Do you provide cloud-based enterprise development?</span><span className="ea-faq__chevron"></span></summary><div className="ea-faq__answer"><p>Yes. We specialize in cloud-native enterprise software development using AWS, Azure, and Google Cloud.</p></div></details>
          <details className="ea-faq__item"><summary className="ea-faq__question"><span>How long does enterprise application development take?</span><span className="ea-faq__chevron"></span></summary><div className="ea-faq__answer"><p>Project timelines vary based on complexity but typically range from 3–9 months for large-scale enterprise systems. Our <a href="/app-maintenance-support-services" style={{color: "#2563eb", textDecoration: "none", fontWeight: 600}}>maintenance team</a> provides ongoing support post-launch.</p></div></details>
        </div>
      </div></div></section>

      <section className="ea-cta"><div className="ea-container"><div className="ea-cta__inner ea-animate--scale">
        <h2 className="ea-cta__heading">Build Your <span className="ea-text-accent">Enterprise Solution</span></h2>
        <p className="ea-cta__text">Let&apos;s discuss how we can architect enterprise software that scales with your business.</p>
        <button type="button" className="ea-cta__button js-open-modal">Start Your Enterprise Project</button>
      </div></div></section>
    </>
  );
}