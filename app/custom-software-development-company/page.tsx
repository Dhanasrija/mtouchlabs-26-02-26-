import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Custom Software Development Company | mTouch Labs",
  description: "mTouch Labs is a custom software development company delivering secure, scalable, and cloud-native software solutions tailored to business needs.",
  keywords: ["custom software development company","bespoke software development services","enterprise software solutions","custom application development","SaaS product development company"],
  alternates: { canonical: "https://www.mtouchlabs.com/custom-software-development-company" },
  openGraph: { title: "Custom Software Development Company | mTouch Labs", description: "Secure and scalable custom software solutions designed for enterprises and growth-focused businesses.", url: "https://www.mtouchlabs.com/custom-software-development-company", siteName: "mTouch Labs", type: "website" },
  twitter: { card: "summary_large_image", title: "Custom Software Development Company | mTouch Labs", description: "Tailored custom software solutions built for scalability, automation, and long-term business growth." },
};

export default function CustomSoftwareDevelopment() {
  return (
    <>
      <section className="sd-hero"><div className="sd-hero__inner">
        <Breadcrumb pagePath="/custom-software-development-company" />
        <h1 className="sd-hero__title">Custom <span className="sd-hero__title-accent">Software</span> Development</h1>
        <p className="sd-hero__subtitle">Tailored Software Solutions Engineered for Growth</p>
        <p className="sd-hero__desc">mTouch Labs is a professional custom software development company specializing in designing and building scalable, secure, and business-aligned software systems that automate operations and support long-term digital transformation.</p>
      </div></section>

      <section className="sd-about"><div className="sd-container"><div className="sd-about__grid">
        <div className="sd-about__content sd-animate--left">
          <h2 className="sd-about__heading">What Is <span className="sd-text-accent">Custom Software</span> Development?</h2>
          <p className="sd-about__text">Custom software development involves designing and building applications tailored to an organization&apos;s unique processes, operational challenges, and growth plans.</p>
          <p className="sd-about__text">Unlike off-the-shelf tools, custom software adapts to your workflows, integrates with existing systems, scales with business growth, enhances data control, and supports automation. Our{" "}
            <a href="/enterprise-application-development-company" style={{color: "#2563eb", textDecoration: "none", fontWeight: 600}}>enterprise application development</a>{" "}
            expertise ensures every solution is built for mission-critical reliability.
          </p>
          <p className="sd-about__text">It becomes a strategic asset rather than a temporary solution — engineered specifically around your requirements and performance objectives. Combined with our{" "}
            <a href="/ui-ux-design-company" style={{color: "#2563eb", textDecoration: "none", fontWeight: 600}}>UI/UX design capabilities</a>, we deliver software that is both powerful and intuitive.
          </p>
        </div>
        <div className="sd-stats sd-animate--right">
          <div className="sd-stat"><span className="sd-stat__icon">⚙️</span><span className="sd-stat__label">Process Automation</span></div>
          <div className="sd-stat"><span className="sd-stat__icon">☁️</span><span className="sd-stat__label">Cloud-Native Apps</span></div>
          <div className="sd-stat"><span className="sd-stat__icon">🔗</span><span className="sd-stat__label">System Integration</span></div>
          <div className="sd-stat"><span className="sd-stat__icon">🔒</span><span className="sd-stat__label">Security-First</span></div>
        </div>
      </div></div></section>

      <section className="sd-whoweare"><div className="sd-container"><div className="sd-whoweare__grid">
        <div className="sd-whoweare__stats sd-animate--left">
          <div className="sd-stat sd-stat--dark"><span className="sd-stat__number">1500+</span><span className="sd-stat__label">Projects Delivered</span></div>
          <div className="sd-stat sd-stat--dark"><span className="sd-stat__number">14+</span><span className="sd-stat__label">Years Experience</span></div>
          <div className="sd-stat sd-stat--dark"><span className="sd-stat__number">3</span><span className="sd-stat__label">Cloud Platforms</span></div>
          <div className="sd-stat sd-stat--dark"><span className="sd-stat__number">GDPR</span><span className="sd-stat__label">Compliance Ready</span></div>
        </div>
        <div className="sd-whoweare__content sd-animate--right">
          <h2 className="sd-whoweare__heading">Security-First <span className="sd-text-accent">Engineering</span></h2>
          <p className="sd-whoweare__text">Security is embedded throughout the lifecycle:</p>
          <ul className="sd-checklist">
            <li className="sd-checklist__item"><span className="sd-checklist__icon">✓</span><span>Role-based access control &amp; secure authentication</span></li>
            <li className="sd-checklist__item"><span className="sd-checklist__icon">✓</span><span>Data encryption at rest &amp; in transit</span></li>
            <li className="sd-checklist__item"><span className="sd-checklist__icon">✓</span><span>API security standards &amp; compliance-aware infrastructure</span></li>
            <li className="sd-checklist__item"><span className="sd-checklist__icon">✓</span><span>Microservices &amp; auto-scaling{" "}
              <a href="/amazon-web-services" style={{color: "#2563eb", textDecoration: "none", fontWeight: 600}}>cloud architecture</a>
            </span></li>
            <li className="sd-checklist__item"><span className="sd-checklist__icon">✓</span><span>Disaster recovery readiness on AWS, Azure &amp; GCP</span></li>
          </ul>
        </div>
      </div></div></section>

      <section className="sd-services"><div className="sd-container">
        <div className="sd-services__header sd-animate"><h2 className="sd-services__title">Our Custom <span className="sd-text-accent">Software Services</span></h2><p className="sd-services__subtitle">From automation to enterprise platforms</p></div>
        <div className="sd-services__grid sd-stagger">
          <div className="sd-service-card sd-animate--scale"><span className="sd-service-card__badge">01</span><h4 className="sd-service-card__title">Business Process Automation</h4><p className="sd-service-card__text">Automate manual workflows, reduce inefficiencies, improve cross-department collaboration, and enhance data accuracy.</p></div>
          <div className="sd-service-card sd-animate--scale"><span className="sd-service-card__badge">02</span><h4 className="sd-service-card__title">SaaS Application Development</h4><p className="sd-service-card__text">Multi-tenant architectures, subscription systems, admin dashboards, and API-first products for reliability and monetization.</p></div>
          <div className="sd-service-card sd-animate--scale"><span className="sd-service-card__badge">03</span><h4 className="sd-service-card__title">Enterprise Software Solutions</h4><p className="sd-service-card__text">ERP platforms, internal management systems, compliance-ready applications, and multi-user secure platforms.</p></div>
          <div className="sd-service-card sd-animate--scale"><span className="sd-service-card__badge">04</span><h4 className="sd-service-card__title">System Integration</h4><p className="sd-service-card__text">Integrate with CRM, ERP, payment gateways, third-party APIs, and cloud services for seamless data flow.</p></div>
          <div className="sd-service-card sd-service-card--wide sd-animate--scale"><span className="sd-service-card__badge">05</span><h4 className="sd-service-card__title">Cloud-Native Architecture</h4><p className="sd-service-card__text">AWS, Azure &amp; GCP deployment with microservices, auto-scaling, secure API management, and disaster recovery.</p></div>
        </div>
      </div></section>

      <section className="sd-delivery"><div className="sd-container">
        <h2 className="sd-delivery__heading sd-animate">Our Development <span className="sd-text-accent">Process</span></h2>
        <p className="sd-delivery__text">We follow a structured methodology to ensure predictable outcomes and long-term maintainability.</p>
        <div className="sd-delivery__steps">
          <div className="sd-step"><span className="sd-step__circle">Business Analysis</span></div><span className="sd-step__arrow">→</span>
          <div className="sd-step"><span className="sd-step__circle">Architecture</span></div><span className="sd-step__arrow">→</span>
          <div className="sd-step"><span className="sd-step__circle">UI/UX Planning</span></div><span className="sd-step__arrow">→</span>
          <div className="sd-step"><span className="sd-step__circle">Agile Dev</span></div><span className="sd-step__arrow">→</span>
          <div className="sd-step"><span className="sd-step__circle">QA Testing</span></div><span className="sd-step__arrow">→</span>
          <div className="sd-step"><span className="sd-step__circle">Deployment</span></div><span className="sd-step__arrow">→</span>
          <div className="sd-step"><span className="sd-step__circle">Optimization</span></div>
        </div>
      </div></section>

      <section className="sd-reliable"><div className="sd-container"><div className="sd-reliable__inner sd-animate">
        <h2 className="sd-reliable__heading">Why Choose <span className="sd-text-accent">mTouch Labs</span>?</h2>
        <p className="sd-reliable__text">We don&apos;t just develop applications — we build sustainable digital systems.</p>
        <div className="sd-reliable__pillars">
          <div className="sd-pillar"><span className="sd-pillar__dot"></span><span className="sd-pillar__label">Business-focused engineering</span></div>
          <div className="sd-pillar"><span className="sd-pillar__dot"></span><span className="sd-pillar__label">Scalable software architecture</span></div>
          <div className="sd-pillar"><span className="sd-pillar__dot"></span><span className="sd-pillar__label">Secure development practices</span></div>
          <div className="sd-pillar"><span className="sd-pillar__dot"></span><span className="sd-pillar__label">Transparent project management</span></div>
          <div className="sd-pillar"><span className="sd-pillar__dot"></span><span className="sd-pillar__label">Long-term support partnership</span></div>
          <div className="sd-pillar"><span className="sd-pillar__dot"></span><span className="sd-pillar__label">Cloud-native deployment expertise</span></div>
        </div>
      </div></div></section>

      <section className="sd-faq"><div className="sd-container"><div className="sd-faq__wrapper">
        <h3 className="sd-faq__heading sd-animate">Frequently Asked <span className="sd-text-accent">Questions</span></h3>
        <p className="sd-faq__subtext">Everything about custom software development</p>
        <div className="sd-faq__list">
          <details className="sd-faq__item"><summary className="sd-faq__question"><span>What does a custom software development company do?</span><span className="sd-faq__chevron"></span></summary><div className="sd-faq__answer"><p>A custom software development company builds tailored software applications designed around specific business processes and operational requirements.</p></div></details>
          <details className="sd-faq__item"><summary className="sd-faq__question"><span>How long does custom software development take?</span><span className="sd-faq__chevron"></span></summary><div className="sd-faq__answer"><p>Project timelines vary based on complexity, typically ranging from several weeks to a few months.</p></div></details>
          <details className="sd-faq__item"><summary className="sd-faq__question"><span>Is custom software scalable?</span><span className="sd-faq__chevron"></span></summary><div className="sd-faq__answer"><p>Yes. Custom software is designed with scalability in mind, allowing systems to grow with your business.</p></div></details>
          <details className="sd-faq__item"><summary className="sd-faq__question"><span>Do you provide post-launch support?</span><span className="sd-faq__chevron"></span></summary><div className="sd-faq__answer"><p>Yes. We offer ongoing{" "}
            <a href="/app-maintenance-support-services" style={{color: "#2563eb", textDecoration: "none", fontWeight: 600}}>maintenance, performance optimization, and scalability upgrades</a>.
          </p></div></details>
        </div>
      </div></div></section>

      <section className="sd-cta"><div className="sd-container"><div className="sd-cta__inner sd-animate--scale">
        <h2 className="sd-cta__heading">Build Your Custom <span className="sd-text-accent">Software Solution</span></h2>
        <p className="sd-cta__text">Let&apos;s discuss how tailored software can automate your operations and accelerate growth.</p>
        <button type="button" className="sd-cta__button js-open-modal">Start Your Project</button>
      </div></div></section>
    </>
  );
}