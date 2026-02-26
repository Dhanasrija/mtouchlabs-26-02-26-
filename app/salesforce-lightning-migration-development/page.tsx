import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Salesforce Lightning Migration & Development Services | mTouch Labs",
  description: "Salesforce Lightning migration services including Classic to Lightning upgrades, Lightning Web Component development, and CRM optimization.",
  keywords: ["Salesforce Lightning migration services","Salesforce Lightning development","Salesforce Classic to Lightning migration","Lightning Web Component development","Salesforce Lightning upgrade services","Salesforce Lightning partner India"],
  alternates: { canonical: "https://www.mtouchlabs.com/salesforce-lightning-migration-development" },
  openGraph: { title: "Salesforce Lightning Migration & Development Services | mTouch Labs", description: "Upgrade to Salesforce Lightning with structured migration and Lightning Web Component development.", url: "https://www.mtouchlabs.com/salesforce-lightning-migration-development", siteName: "mTouch Labs", type: "website" },
  twitter: { card: "summary_large_image", title: "Salesforce Lightning Migration & Development Services | mTouch Labs", description: "Upgrade to Salesforce Lightning with structured migration and LWC development." },
};

export default function SalesforceLightning() {
  return (
    <>
      <section className="sl-hero"><div className="sl-hero__inner">
        <Breadcrumb pagePath="/salesforce-lightning-migration-development" />
        <h1 className="sl-hero__title">Salesforce <span className="sl-hero__title-accent">Lightning</span> Migration &amp; Development</h1>
        <p className="sl-hero__subtitle">Modernizing Salesforce for Performance, Productivity &amp; Scalability</p>
        <p className="sl-hero__desc">Salesforce Lightning is more than a visual upgrade — it is a productivity platform designed for speed, automation, and enhanced user experience. We help organizations seamlessly transition from Classic to Lightning while optimizing workflows and scalability.</p>
      </div></section>

      <section className="sl-about"><div className="sl-container"><div className="sl-about__grid">
        <div className="sl-about__content sl-animate--left">
          <h2 className="sl-about__heading">Why Migrate to <span className="sl-text-accent">Salesforce Lightning</span>?</h2>
          <p className="sl-about__text">Many organizations continue operating on Salesforce Classic, limiting their ability to leverage advanced automation tools, Lightning-ready integrations, dynamic dashboards, and enhanced UI productivity features.</p>
          <p className="sl-about__text">Migrating to Lightning unlocks faster workflows, improved reporting visibility, component-based customization, and stronger CRM adoption. Our <a href="/salesforce-consulting-services-company" style={{color: "#2563eb", textDecoration: "none", fontWeight: 600}}>Salesforce consulting</a> team guides the entire transformation.</p>
          <p className="sl-about__text">Our Lightning Migration &amp; Development Services ensure your CRM environment is future-ready, user-friendly, and aligned with modern business demands — including seamless <a href="/salesforce-integration-services" style={{color: "#2563eb", textDecoration: "none", fontWeight: 600}}>integration</a> with existing systems.</p>
        </div>
        <div className="sl-stats sl-animate--right">
          <div className="sl-stat"><span className="sl-stat__icon">⚡</span><span className="sl-stat__label">Faster Workflows</span></div>
          <div className="sl-stat"><span className="sl-stat__icon">📊</span><span className="sl-stat__label">Dynamic Dashboards</span></div>
          <div className="sl-stat"><span className="sl-stat__icon">🧩</span><span className="sl-stat__label">Component-Based UI</span></div>
          <div className="sl-stat"><span className="sl-stat__icon">📱</span><span className="sl-stat__label">Mobile Responsive</span></div>
        </div>
      </div></div></section>

      <section className="sl-whoweare"><div className="sl-container"><div className="sl-whoweare__grid">
        <div className="sl-whoweare__stats sl-animate--left">
          <div className="sl-stat sl-stat--dark"><span className="sl-stat__number">100+</span><span className="sl-stat__label">Migrations Completed</span></div>
          <div className="sl-stat sl-stat--dark"><span className="sl-stat__number">2–6</span><span className="sl-stat__label">Weeks Timeline</span></div>
          <div className="sl-stat sl-stat--dark"><span className="sl-stat__number">0%</span><span className="sl-stat__label">Downtime Target</span></div>
          <div className="sl-stat sl-stat--dark"><span className="sl-stat__number">LWC</span><span className="sl-stat__label">Expert Development</span></div>
        </div>
        <div className="sl-whoweare__content sl-animate--right">
          <h2 className="sl-whoweare__heading">Lightning Readiness <span className="sl-text-accent">Assessment</span></h2>
          <p className="sl-whoweare__text">Before migration, we evaluate your entire Salesforce environment:</p>
          <ul className="sl-checklist">
            <li className="sl-checklist__item"><span className="sl-checklist__icon">✓</span><span>Existing customizations &amp; Apex/Visualforce components</span></li>
            <li className="sl-checklist__item"><span className="sl-checklist__icon">✓</span><span>Third-party integrations &amp; workflow dependencies</span></li>
            <li className="sl-checklist__item"><span className="sl-checklist__icon">✓</span><span>User adoption patterns &amp; training needs</span></li>
            <li className="sl-checklist__item"><span className="sl-checklist__icon">✓</span><span>Feature compatibility &amp; gap analysis</span></li>
            <li className="sl-checklist__item"><span className="sl-checklist__icon">✓</span><span>Performance optimization opportunities</span></li>
          </ul>
        </div>
      </div></div></section>

      <section className="sl-services"><div className="sl-container">
        <div className="sl-services__header sl-animate"><h2 className="sl-services__title">Our Lightning <span className="sl-text-accent">Services</span></h2><p className="sl-services__subtitle">From migration to advanced Lightning development</p></div>
        <div className="sl-services__grid sl-stagger">
          <div className="sl-service-card sl-animate--scale"><span className="sl-service-card__badge">01</span><h4 className="sl-service-card__title">Lightning Migration</h4><p className="sl-service-card__text">Structured Classic to Lightning transition with gap analysis, component refactoring, data validation, user testing, and post-migration optimization.</p></div>
          <div className="sl-service-card sl-animate--scale"><span className="sl-service-card__badge">02</span><h4 className="sl-service-card__title">LWC Development</h4><p className="sl-service-card__text">Custom Lightning Web Components, dynamic pages, advanced reporting, and UI personalization tailored to your operational goals.</p></div>
          <div className="sl-service-card sl-animate--scale"><span className="sl-service-card__badge">03</span><h4 className="sl-service-card__title">Automation Enhancement</h4><p className="sl-service-card__text">Workflow automation upgrades, dynamic dashboards, approval processes, and Lightning Flow implementation for maximum efficiency.</p></div>
          <div className="sl-service-card sl-animate--scale"><span className="sl-service-card__badge">04</span><h4 className="sl-service-card__title">Performance Optimization</h4><p className="sl-service-card__text">Page load optimization, component rendering, role-based visibility, workflow efficiency, and security &amp; compliance tuning.</p></div>
        </div>
      </div></section>

      <section className="sl-delivery"><div className="sl-container">
        <h2 className="sl-delivery__heading sl-animate">Our Lightning <span className="sl-text-accent">Development Framework</span></h2>
        <p className="sl-delivery__text">This ensures both technical stability and business continuity.</p>
        <div className="sl-delivery__steps">
          <div className="sl-step"><span className="sl-step__circle">Discovery</span></div><span className="sl-step__arrow">→</span>
          <div className="sl-step"><span className="sl-step__circle">Compatibility Audit</span></div><span className="sl-step__arrow">→</span>
          <div className="sl-step"><span className="sl-step__circle">Architecture Redesign</span></div><span className="sl-step__arrow">→</span>
          <div className="sl-step"><span className="sl-step__circle">Component Dev</span></div><span className="sl-step__arrow">→</span>
          <div className="sl-step"><span className="sl-step__circle">Testing</span></div><span className="sl-step__arrow">→</span>
          <div className="sl-step"><span className="sl-step__circle">Deployment</span></div><span className="sl-step__arrow">→</span>
          <div className="sl-step"><span className="sl-step__circle">Optimization</span></div>
        </div>
      </div></section>

      <section className="sl-reliable"><div className="sl-container"><div className="sl-reliable__inner sl-animate">
        <h2 className="sl-reliable__heading">Benefits of <span className="sl-text-accent">Lightning Migration</span></h2>
        <p className="sl-reliable__text">We modernize Salesforce environments without disrupting business operations.</p>
        <div className="sl-reliable__pillars">
          <div className="sl-pillar"><span className="sl-pillar__dot"></span><span className="sl-pillar__label">Improved UI &amp; usability</span></div>
          <div className="sl-pillar"><span className="sl-pillar__dot"></span><span className="sl-pillar__label">Faster navigation &amp; automation</span></div>
          <div className="sl-pillar"><span className="sl-pillar__dot"></span><span className="sl-pillar__label">Enhanced reporting &amp; analytics</span></div>
          <div className="sl-pillar"><span className="sl-pillar__dot"></span><span className="sl-pillar__label">Better mobile responsiveness</span></div>
          <div className="sl-pillar"><span className="sl-pillar__dot"></span><span className="sl-pillar__label">Improved team productivity</span></div>
          <div className="sl-pillar"><span className="sl-pillar__dot"></span><span className="sl-pillar__label">Scalable future-ready architecture</span></div>
        </div>
      </div></div></section>

      <section className="sl-tech"><div className="sl-container"><div className="sl-tech__grid">
        <div className="sl-tech__content sl-animate--left">
          <h2 className="sl-tech__heading">Why Choose <span className="sl-text-accent">mTouch Labs</span>?</h2>
          <p className="sl-tech__text">We modernize Salesforce environments without disrupting business operations.</p>
          <div className="sl-tech__tags">
            {["Structured Migration","LWC Expertise","Secure Deployment","Minimal Downtime","User Training","Long-Term CRM Optimization","Lightning Flow","Apex Refactoring","Visualforce Conversion","Dynamic Pages","Lightning App Builder","Einstein Analytics"].map((t)=>(<span key={t} className="sl-tag">{t}</span>))}
          </div>
        </div>
        <div className="sl-tech__stats sl-animate--right">
          <div className="sl-stat sl-stat--dark"><span className="sl-stat__number">LWC</span><span className="sl-stat__label">Component Experts</span></div>
          <div className="sl-stat sl-stat--dark"><span className="sl-stat__number">0</span><span className="sl-stat__label">Downtime Target</span></div>
          <div className="sl-stat sl-stat--dark"><span className="sl-stat__number">100+</span><span className="sl-stat__label">Migrations Done</span></div>
          <div className="sl-stat sl-stat--dark"><span className="sl-stat__number">24/7</span><span className="sl-stat__label">Post-Migration Support</span></div>
        </div>
      </div></div></section>

      <section className="sl-faq"><div className="sl-container"><div className="sl-faq__wrapper">
        <h3 className="sl-faq__heading sl-animate">Frequently Asked <span className="sl-text-accent">Questions</span></h3>
        <p className="sl-faq__subtext">Everything about Lightning migration and development</p>
        <div className="sl-faq__list">
          <details className="sl-faq__item"><summary className="sl-faq__question"><span>What is Salesforce Lightning migration?</span><span className="sl-faq__chevron"></span></summary><div className="sl-faq__answer"><p>Salesforce Lightning migration involves transitioning from Salesforce Classic to Lightning Experience to access modern UI, automation, and performance features.</p></div></details>
          <details className="sl-faq__item"><summary className="sl-faq__question"><span>Is Lightning migration complex?</span><span className="sl-faq__chevron"></span></summary><div className="sl-faq__answer"><p>Migration complexity depends on existing customizations and integrations. A structured audit ensures smooth transition with our <a href="/salesforce-implementation-services" style={{color: "#2563eb", textDecoration: "none", fontWeight: 600}}>implementation expertise</a>.</p></div></details>
          <details className="sl-faq__item"><summary className="sl-faq__question"><span>Do you provide LWC development?</span><span className="sl-faq__chevron"></span></summary><div className="sl-faq__answer"><p>Yes. We design and develop custom Lightning Web Components aligned with business workflows.</p></div></details>
          <details className="sl-faq__item"><summary className="sl-faq__question"><span>How long does Lightning migration take?</span><span className="sl-faq__chevron"></span></summary><div className="sl-faq__answer"><p>Migration timelines vary based on system complexity, typically ranging from 2–6 weeks with <a href="/app-maintenance-support-services" style={{color: "#2563eb", textDecoration: "none", fontWeight: 600}}>post-migration support</a>.</p></div></details>
        </div>
      </div></div></section>

      <section className="sl-cta"><div className="sl-container"><div className="sl-cta__inner sl-animate--scale">
        <h2 className="sl-cta__heading">Ready to Upgrade to <span className="sl-text-accent">Lightning</span>?</h2>
        <p className="sl-cta__text">Let&apos;s discuss how we can modernize your Salesforce environment for maximum productivity.</p>
        <button type="button" className="sl-cta__button js-open-modal">Start Your Migration</button>
      </div></div></section>
    </>
  );
}