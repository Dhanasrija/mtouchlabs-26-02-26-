import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Email Marketing Services | mTouch Labs",
  description: "mTouch Labs offers email marketing services including automation setup, lifecycle campaigns, and performance-driven subscriber engagement strategies.",
  keywords: ["email marketing services","email automation","lifecycle email marketing","email campaign management","marketing automation","email marketing company"],
  alternates: { canonical: "https://www.mtouchlabs.com/email-marketing-services" },
  openGraph: { title: "Email Marketing Services | mTouch Labs", description: "Intelligent email automation and lifecycle marketing for measurable growth.", url: "https://www.mtouchlabs.com/email-marketing-services", siteName: "mTouch Labs", type: "website" },
  twitter: { card: "summary_large_image", title: "Email Marketing Services | mTouch Labs", description: "Scalable email marketing strategies powered by automation and analytics." },
};

export default function EmailMarketingServices() {
  return (
    <>
      <section className="em-hero"><div className="em-hero__inner">
        <Breadcrumb pagePath="/email-marketing-services" />
        <h1 className="em-hero__title">Email <span className="em-hero__title-accent">Marketing</span> Services</h1>
        <p className="em-hero__subtitle">Intelligent Email Campaigns Designed to Nurture, Convert &amp; Retain</p>
        <p className="em-hero__desc">mTouch Labs delivers structured email marketing services that transform email communication into a measurable revenue channel. Effective email marketing is systematic, not sporadic.</p>
      </div></section>

      <section className="em-about"><div className="em-container"><div className="em-about__grid">
        <div className="em-about__content em-animate--left">
          <h2 className="em-about__heading">What Are <span className="em-text-accent">Email Marketing</span> Services?</h2>
          <p className="em-about__text">Email marketing services involve planning, designing, automating, and optimizing email campaigns to engage subscribers and guide them toward conversion — including segmentation, automation workflows, behavioral triggers, and continuous optimization.</p>
          <p className="em-about__text">Our email campaigns integrate with <a href="/content-marketing-services" style={{color:"#2563eb",textDecoration:"none",fontWeight:600}}>content marketing</a> and <a href="/conversion-rate-optimization-services" style={{color:"#2563eb",textDecoration:"none",fontWeight:600}}>CRO strategies</a> for maximum engagement.</p>
          <p className="em-about__text">Combined with <a href="/digital-marketing-solutions" style={{color:"#2563eb",textDecoration:"none",fontWeight:600}}>digital marketing</a> and <a href="/performance-marketing-services" style={{color:"#2563eb",textDecoration:"none",fontWeight:600}}>performance marketing</a>, email becomes a strategic growth asset driving long-term customer value.</p>
        </div>
        <div className="em-stats em-animate--right">
          <div className="em-stat"><span className="em-stat__icon">📧</span><span className="em-stat__label">Lifecycle Campaigns</span></div>
          <div className="em-stat"><span className="em-stat__icon">⚡</span><span className="em-stat__label">Automation</span></div>
          <div className="em-stat"><span className="em-stat__icon">🎯</span><span className="em-stat__label">Segmentation</span></div>
          <div className="em-stat"><span className="em-stat__icon">📊</span><span className="em-stat__label">Performance</span></div>
        </div>
      </div></div></section>

      <section className="em-whoweare"><div className="em-container"><div className="em-whoweare__grid">
        <div className="em-whoweare__stats em-animate--left">
          <div className="em-stat em-stat--dark"><span className="em-stat__number">500+</span><span className="em-stat__label">Campaigns Sent</span></div>
          <div className="em-stat em-stat--dark"><span className="em-stat__number">42x</span><span className="em-stat__label">Avg Email ROI</span></div>
          <div className="em-stat em-stat--dark"><span className="em-stat__number">35%</span><span className="em-stat__label">Open Rate Avg</span></div>
          <div className="em-stat em-stat--dark"><span className="em-stat__number">14+</span><span className="em-stat__label">Years Experience</span></div>
        </div>
        <div className="em-whoweare__content em-animate--right">
          <h2 className="em-whoweare__heading">Business Benefits of <span className="em-text-accent">Email Marketing</span></h2>
          <p className="em-whoweare__text">Email builds predictable engagement systems:</p>
          <ul className="em-checklist">
            <li className="em-checklist__item"><span className="em-checklist__icon">✓</span><span>Direct communication &amp; high ROI potential</span></li>
            <li className="em-checklist__item"><span className="em-checklist__icon">✓</span><span>Scalable automation &amp; improved retention</span></li>
            <li className="em-checklist__item"><span className="em-checklist__icon">✓</span><span>Better conversion tracking &amp; brand consistency</span></li>
            <li className="em-checklist__item"><span className="em-checklist__icon">✓</span><span>Behavioral segmentation &amp; personalization</span></li>
            <li className="em-checklist__item"><span className="em-checklist__icon">✓</span><span>CRM &amp; analytics platform integration</span></li>
          </ul>
        </div>
      </div></div></section>

      <section className="em-services"><div className="em-container">
        <div className="em-services__header em-animate"><h2 className="em-services__title">Our Email <span className="em-text-accent">Capabilities</span></h2><p className="em-services__subtitle">From lifecycle strategy to performance optimization</p></div>
        <div className="em-services__grid em-stagger">
          <div className="em-service-card em-animate--scale"><span className="em-service-card__badge">01</span><h4 className="em-service-card__title">Lifecycle Strategy</h4><p className="em-service-card__text">Lead nurturing, product onboarding, customer retention, re-engagement campaigns, and renewal reminders for every lifecycle stage.</p></div>
          <div className="em-service-card em-animate--scale"><span className="em-service-card__badge">02</span><h4 className="em-service-card__title">Marketing Automation</h4><p className="em-service-card__text">Trigger-based workflows, welcome sequences, behavioral follow-ups, abandoned cart sequences, and subscription renewal flows.</p></div>
          <div className="em-service-card em-animate--scale"><span className="em-service-card__badge">03</span><h4 className="em-service-card__title">Segmentation &amp; Personalization</h4><p className="em-service-card__text">Behavioral segmentation, demographic targeting, purchase history analysis, engagement scoring, and dynamic content blocks.</p></div>
          <div className="em-service-card em-animate--scale"><span className="em-service-card__badge">04</span><h4 className="em-service-card__title">Campaign Design</h4><p className="em-service-card__text">Subject line strategy, preview text optimization, layout structure, CTA placement, mobile responsiveness, and open rate optimization.</p></div>
          <div className="em-service-card em-service-card--wide em-animate--scale"><span className="em-service-card__badge">05</span><h4 className="em-service-card__title">B2B &amp; SaaS Email</h4><p className="em-service-card__text">Trial-to-paid conversion flows, feature education, product updates, customer education, and account expansion strategies for recurring revenue.</p></div>
        </div>
      </div></section>

      <section className="em-delivery"><div className="em-container">
        <h2 className="em-delivery__heading em-animate">Our Email <span className="em-text-accent">Process</span></h2>
        <p className="em-delivery__text">Structured approach ensuring sustained improvement.</p>
        <div className="em-delivery__steps">
          <div className="em-step"><span className="em-step__circle">Audience</span></div><span className="em-step__arrow">→</span>
          <div className="em-step"><span className="em-step__circle">Planning</span></div><span className="em-step__arrow">→</span>
          <div className="em-step"><span className="em-step__circle">Automation</span></div><span className="em-step__arrow">→</span>
          <div className="em-step"><span className="em-step__circle">Design</span></div><span className="em-step__arrow">→</span>
          <div className="em-step"><span className="em-step__circle">Monitor</span></div><span className="em-step__arrow">→</span>
          <div className="em-step"><span className="em-step__circle">Optimize</span></div>
        </div>
      </div></section>

      <section className="em-reliable"><div className="em-container"><div className="em-reliable__inner em-animate">
        <h2 className="em-reliable__heading">Why Choose <span className="em-text-accent">mTouch Labs</span>?</h2>
        <p className="em-reliable__text">We transform email into a strategic growth asset.</p>
        <div className="em-reliable__pillars">
          <div className="em-pillar"><span className="em-pillar__dot"></span><span className="em-pillar__label">Automation-focused strategy</span></div>
          <div className="em-pillar"><span className="em-pillar__dot"></span><span className="em-pillar__label">Behavioral segmentation</span></div>
          <div className="em-pillar"><span className="em-pillar__dot"></span><span className="em-pillar__label">SaaS &amp; enterprise experience</span></div>
          <div className="em-pillar"><span className="em-pillar__dot"></span><span className="em-pillar__label">Data-driven optimization</span></div>
          <div className="em-pillar"><span className="em-pillar__dot"></span><span className="em-pillar__label">CRM &amp; analytics integration</span></div>
          <div className="em-pillar"><span className="em-pillar__dot"></span><span className="em-pillar__label">Lifecycle management</span></div>
        </div>
      </div></div></section>

      <section className="em-industries"><div className="em-container">
        <h2 className="em-industries__title em-animate">Industries We <span className="em-text-accent">Support</span></h2>
        <div className="em-industries__grid em-stagger">
          <div className="em-industry em-animate--scale"><span className="em-industry__icon">💻</span><h4 className="em-industry__title">SaaS &amp; Subscriptions</h4></div>
          <div className="em-industry em-animate--scale"><span className="em-industry__icon">🛒</span><h4 className="em-industry__title">eCommerce</h4></div>
          <div className="em-industry em-animate--scale"><span className="em-industry__icon">💳</span><h4 className="em-industry__title">Financial Services</h4></div>
          <div className="em-industry em-animate--scale"><span className="em-industry__icon">🏥</span><h4 className="em-industry__title">Healthcare</h4></div>
          <div className="em-industry em-animate--scale"><span className="em-industry__icon">🏢</span><h4 className="em-industry__title">B2B Enterprises</h4></div>
          <div className="em-industry em-animate--scale"><span className="em-industry__icon">🚀</span><h4 className="em-industry__title">Startup Growth</h4></div>
        </div>
      </div></section>

      <section className="em-tech"><div className="em-container"><div className="em-tech__grid">
        <div className="em-animate--left">
          <h2 className="em-tech__heading">Email <span className="em-text-accent">Technology Stack</span></h2>
          <p className="em-tech__text">Enterprise email automation and analytics platforms.</p>
          <div className="em-tech__tags">
            {["Mailchimp","Klaviyo","HubSpot","ActiveCampaign","SendGrid","ConvertKit","Drip","Customer.io","Brevo","Iterable","Salesforce Marketing Cloud","Marketo","Campaign Monitor","Litmus","Email on Acid","Google Analytics","Zapier","Segment"].map((t)=>(<span key={t} className="em-tag">{t}</span>))}
          </div>
        </div>
        <div className="em-tech__stats em-animate--right">
          <div className="em-stat em-stat--dark"><span className="em-stat__number">500+</span><span className="em-stat__label">Campaigns</span></div>
          <div className="em-stat em-stat--dark"><span className="em-stat__number">42x</span><span className="em-stat__label">Avg ROI</span></div>
          <div className="em-stat em-stat--dark"><span className="em-stat__number">18+</span><span className="em-stat__label">Platforms</span></div>
          <div className="em-stat em-stat--dark"><span className="em-stat__number">14+</span><span className="em-stat__label">Years</span></div>
        </div>
      </div></div></section>

      <section className="em-faq"><div className="em-container"><div className="em-faq__wrapper">
        <h3 className="em-faq__heading em-animate">Frequently Asked <span className="em-text-accent">Questions</span></h3>
        <p className="em-faq__subtext">Everything about email marketing</p>
        <div className="em-faq__list">
          <details className="em-faq__item"><summary className="em-faq__question"><span>What are email marketing services?</span><span className="em-faq__chevron"></span></summary><div className="em-faq__answer"><p>Email marketing services involve creating and automating targeted campaigns to engage subscribers and increase conversions.</p></div></details>
          <details className="em-faq__item"><summary className="em-faq__question"><span>Is email marketing still effective?</span><span className="em-faq__chevron"></span></summary><div className="em-faq__answer"><p>Yes. Email remains one of the highest ROI <a href="/digital-marketing-solutions" style={{color:"#2563eb",textDecoration:"none",fontWeight:600}}>digital marketing</a> channels when properly segmented and optimized.</p></div></details>
          <details className="em-faq__item"><summary className="em-faq__question"><span>Can email improve customer retention?</span><span className="em-faq__chevron"></span></summary><div className="em-faq__answer"><p>Yes. Automated lifecycle campaigns help maintain engagement and reduce churn effectively.</p></div></details>
          <details className="em-faq__item"><summary className="em-faq__question"><span>Do you provide automation setup?</span><span className="em-faq__chevron"></span></summary><div className="em-faq__answer"><p>Yes. We implement automated workflows tailored to business objectives and customer journeys.</p></div></details>
        </div>
      </div></div></section>

      <section className="em-cta"><div className="em-container"><div className="em-cta__inner em-animate--scale">
        <h2 className="em-cta__heading">Transform Your <span className="em-text-accent">Email Strategy</span></h2>
        <p className="em-cta__text">Let&apos;s discuss how email automation can drive engagement and measurable revenue growth.</p>
        <button type="button" className="em-cta__button js-open-modal">Start Email Marketing</button>
      </div></div></section>
    </>
  );
}