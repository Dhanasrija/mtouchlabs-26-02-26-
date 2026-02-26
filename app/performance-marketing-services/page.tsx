import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Performance Marketing Services | mTouch Labs",
  description: "mTouch Labs offers performance marketing services focused on measurable ROI, scalable acquisition, and revenue-driven growth strategies.",
  keywords: ["performance marketing services","ROI marketing","paid media strategy","customer acquisition","performance advertising","growth marketing company"],
  alternates: { canonical: "https://www.mtouchlabs.com/performance-marketing-services" },
  openGraph: { title: "Performance Marketing Services | mTouch Labs", description: "Data-driven performance marketing strategies for scalable global growth.", url: "https://www.mtouchlabs.com/performance-marketing-services", siteName: "mTouch Labs", type: "website" },
  twitter: { card: "summary_large_image", title: "Performance Marketing Services | mTouch Labs", description: "ROI-focused paid media and acquisition strategies." },
};

export default function PerformanceMarketing() {
  return (
    <>
      <section className="pm-hero"><div className="pm-hero__inner">
        <Breadcrumb pagePath="/performance-marketing-services" />
        <h1 className="pm-hero__title">Performance <span className="pm-hero__title-accent">Marketing</span> Services</h1>
        <p className="pm-hero__subtitle">Revenue-Focused Digital Growth Built on Data, Precision &amp; Scalability</p>
        <p className="pm-hero__desc">mTouch Labs delivers advanced performance marketing services designed to drive measurable business growth through strategic campaign execution, intelligent targeting, and continuous optimization. Growth must be measurable to be meaningful.</p>
      </div></section>

      <section className="pm-about"><div className="pm-container"><div className="pm-about__grid">
        <div className="pm-about__content pm-animate--left">
          <h2 className="pm-about__heading">What Are <span className="pm-text-accent">Performance Marketing</span> Services?</h2>
          <p className="pm-about__text">Performance marketing services focus on achieving measurable business results — leads, sales, subscriptions, or app installs — using data-driven advertising, audience targeting, conversion funnel alignment, and continuous ROI monitoring.</p>
          <p className="pm-about__text">Our performance strategies integrate with <a href="/ppc-advertising-services" style={{color:"#2563eb",textDecoration:"none",fontWeight:600}}>PPC campaigns</a> and <a href="/conversion-rate-optimization-services" style={{color:"#2563eb",textDecoration:"none",fontWeight:600}}>CRO</a> for maximum revenue efficiency.</p>
          <p className="pm-about__text">Combined with <a href="/seo-services" style={{color:"#2563eb",textDecoration:"none",fontWeight:600}}>SEO</a> and <a href="/digital-marketing-solutions" style={{color:"#2563eb",textDecoration:"none",fontWeight:600}}>digital marketing</a>, we build scalable, predictable revenue growth systems across all channels.</p>
        </div>
        <div className="pm-stats pm-animate--right">
          <div className="pm-stat"><span className="pm-stat__icon">💰</span><span className="pm-stat__label">Revenue Focus</span></div>
          <div className="pm-stat"><span className="pm-stat__icon">🎯</span><span className="pm-stat__label">Precision Targeting</span></div>
          <div className="pm-stat"><span className="pm-stat__icon">📈</span><span className="pm-stat__label">Scalable Growth</span></div>
          <div className="pm-stat"><span className="pm-stat__icon">📊</span><span className="pm-stat__label">Attribution</span></div>
        </div>
      </div></div></section>

      <section className="pm-whoweare"><div className="pm-container"><div className="pm-whoweare__grid">
        <div className="pm-whoweare__stats pm-animate--left">
          <div className="pm-stat pm-stat--dark"><span className="pm-stat__number">400+</span><span className="pm-stat__label">Campaigns Executed</span></div>
          <div className="pm-stat pm-stat--dark"><span className="pm-stat__number">4x</span><span className="pm-stat__label">Avg ROAS</span></div>
          <div className="pm-stat pm-stat--dark"><span className="pm-stat__number">Global</span><span className="pm-stat__label">Market Reach</span></div>
          <div className="pm-stat pm-stat--dark"><span className="pm-stat__number">14+</span><span className="pm-stat__label">Years Experience</span></div>
        </div>
        <div className="pm-whoweare__content pm-animate--right">
          <h2 className="pm-whoweare__heading">Business Benefits of <span className="pm-text-accent">Performance Marketing</span></h2>
          <p className="pm-whoweare__text">Performance marketing turns advertising into a revenue engine:</p>
          <ul className="pm-checklist">
            <li className="pm-checklist__item"><span className="pm-checklist__icon">✓</span><span>Predictable lead generation &amp; scalable acquisition</span></li>
            <li className="pm-checklist__item"><span className="pm-checklist__icon">✓</span><span>Optimized ad spend &amp; higher ROI</span></li>
            <li className="pm-checklist__item"><span className="pm-checklist__icon">✓</span><span>Measurable growth visibility &amp; data-backed decisions</span></li>
            <li className="pm-checklist__item"><span className="pm-checklist__icon">✓</span><span>Multi-channel campaign management</span></li>
            <li className="pm-checklist__item"><span className="pm-checklist__icon">✓</span><span>Advanced performance analytics &amp; attribution</span></li>
          </ul>
        </div>
      </div></div></section>

      <section className="pm-services"><div className="pm-container">
        <div className="pm-services__header pm-animate"><h2 className="pm-services__title">Our Performance <span className="pm-text-accent">Capabilities</span></h2><p className="pm-services__subtitle">From paid media to global revenue scaling</p></div>
        <div className="pm-services__grid pm-stagger">
          <div className="pm-service-card pm-animate--scale"><span className="pm-service-card__badge">01</span><h4 className="pm-service-card__title">Paid Media Execution</h4><p className="pm-service-card__text">Multi-channel paid campaigns across search, social, display, and app acquisition channels structured for measurable performance.</p></div>
          <div className="pm-service-card pm-animate--scale"><span className="pm-service-card__badge">02</span><h4 className="pm-service-card__title">Funnel Engineering</h4><p className="pm-service-card__text">Audience segmentation, landing alignment, funnel drop-off analysis, multi-stage conversion journeys, and retargeting sequences.</p></div>
          <div className="pm-service-card pm-animate--scale"><span className="pm-service-card__badge">03</span><h4 className="pm-service-card__title">Budget &amp; ROI Management</h4><p className="pm-service-card__text">Data-backed bid strategies, CPA &amp; ROAS monitoring, revenue forecasting, spend allocation, and profitable campaign scaling.</p></div>
          <div className="pm-service-card pm-animate--scale"><span className="pm-service-card__badge">04</span><h4 className="pm-service-card__title">App &amp; SaaS Growth</h4><p className="pm-service-card__text">Install acquisition, trial-to-paid conversion, subscription retention, and LTV-focused acquisition models for recurring revenue.</p></div>
          <div className="pm-service-card pm-service-card--wide pm-animate--scale"><span className="pm-service-card__badge">05</span><h4 className="pm-service-card__title">Global Performance Strategy</h4><p className="pm-service-card__text">Cross-region targeting, market competition analysis, localization adjustments, currency benchmarking, and platform-specific optimization.</p></div>
        </div>
      </div></section>

      <section className="pm-delivery"><div className="pm-container">
        <h2 className="pm-delivery__heading pm-animate">Our Performance <span className="pm-text-accent">Framework</span></h2>
        <p className="pm-delivery__text">Optimization is ongoing, not static.</p>
        <div className="pm-delivery__steps">
          <div className="pm-step"><span className="pm-step__circle">Assess</span></div><span className="pm-step__arrow">→</span>
          <div className="pm-step"><span className="pm-step__circle">Model</span></div><span className="pm-step__arrow">→</span>
          <div className="pm-step"><span className="pm-step__circle">Launch</span></div><span className="pm-step__arrow">→</span>
          <div className="pm-step"><span className="pm-step__circle">Optimize</span></div><span className="pm-step__arrow">→</span>
          <div className="pm-step"><span className="pm-step__circle">Analyze</span></div><span className="pm-step__arrow">→</span>
          <div className="pm-step"><span className="pm-step__circle">Scale</span></div><span className="pm-step__arrow">→</span>
          <div className="pm-step"><span className="pm-step__circle">Refine</span></div>
        </div>
      </div></section>

      <section className="pm-reliable"><div className="pm-container"><div className="pm-reliable__inner pm-animate">
        <h2 className="pm-reliable__heading">Why Choose <span className="pm-text-accent">mTouch Labs</span>?</h2>
        <p className="pm-reliable__text">We prioritize profitability over impressions.</p>
        <div className="pm-reliable__pillars">
          <div className="pm-pillar"><span className="pm-pillar__dot"></span><span className="pm-pillar__label">ROI-first planning</span></div>
          <div className="pm-pillar"><span className="pm-pillar__dot"></span><span className="pm-pillar__label">Multi-channel management</span></div>
          <div className="pm-pillar"><span className="pm-pillar__dot"></span><span className="pm-pillar__label">Funnel-aligned growth</span></div>
          <div className="pm-pillar"><span className="pm-pillar__dot"></span><span className="pm-pillar__label">SaaS &amp; enterprise experience</span></div>
          <div className="pm-pillar"><span className="pm-pillar__dot"></span><span className="pm-pillar__label">Advanced analytics</span></div>
          <div className="pm-pillar"><span className="pm-pillar__dot"></span><span className="pm-pillar__label">Long-term scalability</span></div>
        </div>
      </div></div></section>

      <section className="pm-industries"><div className="pm-container">
        <h2 className="pm-industries__title pm-animate">Industries We <span className="pm-text-accent">Serve</span></h2>
        <div className="pm-industries__grid pm-stagger">
          <div className="pm-industry pm-animate--scale"><span className="pm-industry__icon">💻</span><h4 className="pm-industry__title">SaaS &amp; Subscriptions</h4></div>
          <div className="pm-industry pm-animate--scale"><span className="pm-industry__icon">🛒</span><h4 className="pm-industry__title">eCommerce</h4></div>
          <div className="pm-industry pm-animate--scale"><span className="pm-industry__icon">💳</span><h4 className="pm-industry__title">Financial Services</h4></div>
          <div className="pm-industry pm-animate--scale"><span className="pm-industry__icon">🏥</span><h4 className="pm-industry__title">Healthcare Tech</h4></div>
          <div className="pm-industry pm-animate--scale"><span className="pm-industry__icon">🏢</span><h4 className="pm-industry__title">Enterprise B2B</h4></div>
          <div className="pm-industry pm-animate--scale"><span className="pm-industry__icon">🚀</span><h4 className="pm-industry__title">Global Startups</h4></div>
        </div>
      </div></section>

      <section className="pm-tech"><div className="pm-container"><div className="pm-tech__grid">
        <div className="pm-animate--left">
          <h2 className="pm-tech__heading">Performance <span className="pm-text-accent">Technology Stack</span></h2>
          <p className="pm-tech__text">Enterprise performance marketing and analytics platforms.</p>
          <div className="pm-tech__tags">
            {["Google Ads","Meta Ads","LinkedIn Ads","Microsoft Ads","Google Analytics 4","Mixpanel","Amplitude","Adjust","AppsFlyer","Segment","Looker Studio","SA360","DV360","HubSpot","Salesforce CRM","Supermetrics","Tag Manager","Attribution"].map((t)=>(<span key={t} className="pm-tag">{t}</span>))}
          </div>
        </div>
        <div className="pm-tech__stats pm-animate--right">
          <div className="pm-stat pm-stat--dark"><span className="pm-stat__number">400+</span><span className="pm-stat__label">Campaigns</span></div>
          <div className="pm-stat pm-stat--dark"><span className="pm-stat__number">4x</span><span className="pm-stat__label">Avg ROAS</span></div>
          <div className="pm-stat pm-stat--dark"><span className="pm-stat__number">18+</span><span className="pm-stat__label">Platforms</span></div>
          <div className="pm-stat pm-stat--dark"><span className="pm-stat__number">14+</span><span className="pm-stat__label">Years</span></div>
        </div>
      </div></div></section>

      <section className="pm-faq"><div className="pm-container"><div className="pm-faq__wrapper">
        <h3 className="pm-faq__heading pm-animate">Frequently Asked <span className="pm-text-accent">Questions</span></h3>
        <p className="pm-faq__subtext">Everything about performance marketing</p>
        <div className="pm-faq__list">
          <details className="pm-faq__item"><summary className="pm-faq__question"><span>What are performance marketing services?</span><span className="pm-faq__chevron"></span></summary><div className="pm-faq__answer"><p>Performance marketing services focus on driving measurable results such as leads, sales, or subscriptions using data-driven paid strategies.</p></div></details>
          <details className="pm-faq__item"><summary className="pm-faq__question"><span>How is it different from PPC?</span><span className="pm-faq__chevron"></span></summary><div className="pm-faq__answer"><p><a href="/ppc-advertising-services" style={{color:"#2563eb",textDecoration:"none",fontWeight:600}}>PPC</a> is a paid advertising model, while performance marketing includes PPC along with funnel optimization and ROI management.</p></div></details>
          <details className="pm-faq__item"><summary className="pm-faq__question"><span>Can it scale globally?</span><span className="pm-faq__chevron"></span></summary><div className="pm-faq__answer"><p>Yes. Structured targeting and localization strategies allow scalable global campaign execution across multiple markets.</p></div></details>
          <details className="pm-faq__item"><summary className="pm-faq__question"><span>How do you measure success?</span><span className="pm-faq__chevron"></span></summary><div className="pm-faq__answer"><p>Through cost-per-acquisition, return on ad spend, revenue growth, and customer lifetime value metrics.</p></div></details>
        </div>
      </div></div></section>

      <section className="pm-cta"><div className="pm-container"><div className="pm-cta__inner pm-animate--scale">
        <h2 className="pm-cta__heading">Scale Your <span className="pm-text-accent">Revenue Growth</span></h2>
        <p className="pm-cta__text">Let&apos;s discuss how performance marketing can drive predictable, scalable business growth.</p>
        <button type="button" className="pm-cta__button js-open-modal">Start Performance Strategy</button>
      </div></div></section>
    </>
  );
}