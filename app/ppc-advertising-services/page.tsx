import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "PPC Advertising Services | mTouch Labs",
  description: "mTouch Labs offers PPC advertising services including Google Ads, paid search marketing, and performance-driven paid media campaigns.",
  keywords: ["PPC advertising services","Google Ads management","paid search marketing","PPC campaign management","pay per click services","PPC company"],
  alternates: { canonical: "https://www.mtouchlabs.com/ppc-advertising-services" },
  openGraph: { title: "PPC Advertising Services | mTouch Labs", description: "Data-driven pay per click campaigns focused on measurable ROI and scalable growth.", url: "https://www.mtouchlabs.com/ppc-advertising-services", siteName: "mTouch Labs", type: "website" },
  twitter: { card: "summary_large_image", title: "PPC Advertising Services | mTouch Labs", description: "Strategic paid media campaigns engineered for performance and profitability." },
};

export default function PPCAdvertisingServices() {
  return (
    <>
      <section className="pp-hero"><div className="pp-hero__inner">
        <Breadcrumb pagePath="/ppc-advertising-services" />
        <h1 className="pp-hero__title">PPC <span className="pp-hero__title-accent">Advertising</span> Services</h1>
        <p className="pp-hero__subtitle">Performance-Driven Paid Campaigns Focused on Measurable ROI</p>
        <p className="pp-hero__desc">mTouch Labs delivers strategic PPC advertising services designed to generate qualified traffic, increase conversions, and optimize advertising spend. Paid traffic should produce measurable growth — not wasted spend.</p>
      </div></section>

      <section className="pp-about"><div className="pp-container"><div className="pp-about__grid">
        <div className="pp-about__content pp-animate--left">
          <h2 className="pp-about__heading">What Are <span className="pp-text-accent">PPC Advertising</span> Services?</h2>
          <p className="pp-about__text">PPC advertising services involve managing paid digital campaigns where advertisers pay only when users click — across search engines, social platforms, and display networks with keyword targeting, audience segmentation, bid optimization, and ROI analysis.</p>
          <p className="pp-about__text">Our PPC campaigns integrate with <a href="/seo-services" style={{color:"#2563eb",textDecoration:"none",fontWeight:600}}>SEO strategies</a> for comprehensive visibility and <a href="/conversion-rate-optimization-services" style={{color:"#2563eb",textDecoration:"none",fontWeight:600}}>CRO</a> for maximum conversion rates.</p>
          <p className="pp-about__text">Combined with <a href="/performance-marketing-services" style={{color:"#2563eb",textDecoration:"none",fontWeight:600}}>performance marketing</a>, we ensure every ad dollar drives measurable business outcomes.</p>
        </div>
        <div className="pp-stats pp-animate--right">
          <div className="pp-stat"><span className="pp-stat__icon">🎯</span><span className="pp-stat__label">Precision Targeting</span></div>
          <div className="pp-stat"><span className="pp-stat__icon">💰</span><span className="pp-stat__label">ROI Optimization</span></div>
          <div className="pp-stat"><span className="pp-stat__icon">📊</span><span className="pp-stat__label">Real-Time Analytics</span></div>
          <div className="pp-stat"><span className="pp-stat__icon">🔄</span><span className="pp-stat__label">Continuous Testing</span></div>
        </div>
      </div></div></section>

      <section className="pp-whoweare"><div className="pp-container"><div className="pp-whoweare__grid">
        <div className="pp-whoweare__stats pp-animate--left">
          <div className="pp-stat pp-stat--dark"><span className="pp-stat__number">400+</span><span className="pp-stat__label">Campaigns Managed</span></div>
          <div className="pp-stat pp-stat--dark"><span className="pp-stat__number">3.5x</span><span className="pp-stat__label">Avg ROAS</span></div>
          <div className="pp-stat pp-stat--dark"><span className="pp-stat__number">35%</span><span className="pp-stat__label">Lower CPA</span></div>
          <div className="pp-stat pp-stat--dark"><span className="pp-stat__number">14+</span><span className="pp-stat__label">Years Experience</span></div>
        </div>
        <div className="pp-whoweare__content pp-animate--right">
          <h2 className="pp-whoweare__heading">Business Benefits of <span className="pp-text-accent">PPC Advertising</span></h2>
          <p className="pp-whoweare__text">Paid advertising complements long-term organic growth:</p>
          <ul className="pp-checklist">
            <li className="pp-checklist__item"><span className="pp-checklist__icon">✓</span><span>Immediate traffic &amp; high-intent audience targeting</span></li>
            <li className="pp-checklist__item"><span className="pp-checklist__icon">✓</span><span>Measurable ROI &amp; scalable growth strategy</span></li>
            <li className="pp-checklist__item"><span className="pp-checklist__icon">✓</span><span>Faster lead acquisition &amp; controlled budgets</span></li>
            <li className="pp-checklist__item"><span className="pp-checklist__icon">✓</span><span>Cross-platform paid media expertise</span></li>
            <li className="pp-checklist__item"><span className="pp-checklist__icon">✓</span><span>Conversion-optimized landing alignment</span></li>
          </ul>
        </div>
      </div></div></section>

      <section className="pp-services"><div className="pp-container">
        <div className="pp-services__header pp-animate"><h2 className="pp-services__title">Our PPC <span className="pp-text-accent">Capabilities</span></h2><p className="pp-services__subtitle">From campaign planning to performance scaling</p></div>
        <div className="pp-services__grid pp-stagger">
          <div className="pp-service-card pp-animate--scale"><span className="pp-service-card__badge">01</span><h4 className="pp-service-card__title">Google Ads Management</h4><p className="pp-service-card__text">Search campaigns, display advertising, Performance Max, Shopping ads, and YouTube advertising aligned with business goals and user intent.</p></div>
          <div className="pp-service-card pp-animate--scale"><span className="pp-service-card__badge">02</span><h4 className="pp-service-card__title">Social Media Advertising</h4><p className="pp-service-card__text">Targeted campaigns across Meta (Facebook &amp; Instagram), LinkedIn Ads for B2B targeting, and platform-specific audience strategies.</p></div>
          <div className="pp-service-card pp-animate--scale"><span className="pp-service-card__badge">03</span><h4 className="pp-service-card__title">Funnel Optimization</h4><p className="pp-service-card__text">User acquisition funnels, retargeting sequences, customer journey stages, lead qualification flows, and conversion pathway engineering.</p></div>
          <div className="pp-service-card pp-animate--scale"><span className="pp-service-card__badge">04</span><h4 className="pp-service-card__title">Landing &amp; Conversion</h4><p className="pp-service-card__text">Landing page messaging, CTA placement, form structure, speed performance, and conversion tracking integration for full funnel alignment.</p></div>
          <div className="pp-service-card pp-service-card--wide pp-animate--scale"><span className="pp-service-card__badge">05</span><h4 className="pp-service-card__title">Budget &amp; Bid Management</h4><p className="pp-service-card__text">Smart bidding frameworks, CPA monitoring, ROI-based allocation, performance benchmarking, and continuous budget refinement for sustainable performance.</p></div>
        </div>
      </div></section>

      <section className="pp-delivery"><div className="pp-container">
        <h2 className="pp-delivery__heading pp-animate">Our PPC <span className="pp-text-accent">Execution Process</span></h2>
        <p className="pp-delivery__text">Structured cycle ensuring continuous performance improvement.</p>
        <div className="pp-delivery__steps">
          <div className="pp-step"><span className="pp-step__circle">Planning</span></div><span className="pp-step__arrow">→</span>
          <div className="pp-step"><span className="pp-step__circle">Research</span></div><span className="pp-step__arrow">→</span>
          <div className="pp-step"><span className="pp-step__circle">Creation</span></div><span className="pp-step__arrow">→</span>
          <div className="pp-step"><span className="pp-step__circle">Launch</span></div><span className="pp-step__arrow">→</span>
          <div className="pp-step"><span className="pp-step__circle">Monitor</span></div><span className="pp-step__arrow">→</span>
          <div className="pp-step"><span className="pp-step__circle">Optimize</span></div><span className="pp-step__arrow">→</span>
          <div className="pp-step"><span className="pp-step__circle">Scale</span></div>
        </div>
      </div></section>

      <section className="pp-reliable"><div className="pp-container"><div className="pp-reliable__inner pp-animate">
        <h2 className="pp-reliable__heading">Why Choose <span className="pp-text-accent">mTouch Labs</span>?</h2>
        <p className="pp-reliable__text">We focus on profitable growth, not vanity metrics.</p>
        <div className="pp-reliable__pillars">
          <div className="pp-pillar"><span className="pp-pillar__dot"></span><span className="pp-pillar__label">Performance-focused campaigns</span></div>
          <div className="pp-pillar"><span className="pp-pillar__dot"></span><span className="pp-pillar__label">Data-backed decisions</span></div>
          <div className="pp-pillar"><span className="pp-pillar__dot"></span><span className="pp-pillar__label">Conversion-optimized landing</span></div>
          <div className="pp-pillar"><span className="pp-pillar__dot"></span><span className="pp-pillar__label">Cross-platform expertise</span></div>
          <div className="pp-pillar"><span className="pp-pillar__dot"></span><span className="pp-pillar__label">Transparent analytics</span></div>
          <div className="pp-pillar"><span className="pp-pillar__dot"></span><span className="pp-pillar__label">Continuous refinement</span></div>
        </div>
      </div></div></section>

      <section className="pp-industries"><div className="pp-container">
        <h2 className="pp-industries__title pp-animate">Industries We <span className="pp-text-accent">Support</span></h2>
        <div className="pp-industries__grid pp-stagger">
          <div className="pp-industry pp-animate--scale"><span className="pp-industry__icon">💻</span><h4 className="pp-industry__title">SaaS &amp; Technology</h4></div>
          <div className="pp-industry pp-animate--scale"><span className="pp-industry__icon">🛒</span><h4 className="pp-industry__title">eCommerce</h4></div>
          <div className="pp-industry pp-animate--scale"><span className="pp-industry__icon">🏥</span><h4 className="pp-industry__title">Healthcare</h4></div>
          <div className="pp-industry pp-animate--scale"><span className="pp-industry__icon">💳</span><h4 className="pp-industry__title">Financial Services</h4></div>
          <div className="pp-industry pp-animate--scale"><span className="pp-industry__icon">🏢</span><h4 className="pp-industry__title">Enterprise B2B</h4></div>
          <div className="pp-industry pp-animate--scale"><span className="pp-industry__icon">🚀</span><h4 className="pp-industry__title">Startup Growth</h4></div>
        </div>
      </div></section>

      <section className="pp-tech"><div className="pp-container"><div className="pp-tech__grid">
        <div className="pp-animate--left">
          <h2 className="pp-tech__heading">PPC <span className="pp-text-accent">Technology Stack</span></h2>
          <p className="pp-tech__text">Enterprise paid media platforms and analytics tools.</p>
          <div className="pp-tech__tags">
            {["Google Ads","Meta Ads Manager","LinkedIn Campaign Manager","Microsoft Ads","Google Analytics 4","Tag Manager","Looker Studio","Optimizely","Unbounce","Hotjar","Facebook Pixel","Google Merchant Center","SA360","DV360","CallRail","HubSpot","Zapier","Supermetrics"].map((t)=>(<span key={t} className="pp-tag">{t}</span>))}
          </div>
        </div>
        <div className="pp-tech__stats pp-animate--right">
          <div className="pp-stat pp-stat--dark"><span className="pp-stat__number">400+</span><span className="pp-stat__label">Campaigns</span></div>
          <div className="pp-stat pp-stat--dark"><span className="pp-stat__number">3.5x</span><span className="pp-stat__label">Avg ROAS</span></div>
          <div className="pp-stat pp-stat--dark"><span className="pp-stat__number">5+</span><span className="pp-stat__label">Ad Platforms</span></div>
          <div className="pp-stat pp-stat--dark"><span className="pp-stat__number">14+</span><span className="pp-stat__label">Years</span></div>
        </div>
      </div></div></section>

      <section className="pp-faq"><div className="pp-container"><div className="pp-faq__wrapper">
        <h3 className="pp-faq__heading pp-animate">Frequently Asked <span className="pp-text-accent">Questions</span></h3>
        <p className="pp-faq__subtext">Everything about PPC advertising</p>
        <div className="pp-faq__list">
          <details className="pp-faq__item"><summary className="pp-faq__question"><span>What are PPC advertising services?</span><span className="pp-faq__chevron"></span></summary><div className="pp-faq__answer"><p>PPC advertising services involve managing paid campaigns where businesses pay for clicks on ads across search engines and social platforms.</p></div></details>
          <details className="pp-faq__item"><summary className="pp-faq__question"><span>How quickly can PPC generate results?</span><span className="pp-faq__chevron"></span></summary><div className="pp-faq__answer"><p>PPC campaigns can generate traffic immediately after launch, with performance improving through optimization.</p></div></details>
          <details className="pp-faq__item"><summary className="pp-faq__question"><span>Is PPC better than SEO?</span><span className="pp-faq__chevron"></span></summary><div className="pp-faq__answer"><p>PPC delivers immediate visibility, while <a href="/seo-services" style={{color:"#2563eb",textDecoration:"none",fontWeight:600}}>SEO</a> provides long-term organic growth. Both strategies complement each other.</p></div></details>
          <details className="pp-faq__item"><summary className="pp-faq__question"><span>How do you measure PPC success?</span><span className="pp-faq__chevron"></span></summary><div className="pp-faq__answer"><p>Through conversions, cost-per-acquisition, ROI, and overall <a href="/digital-marketing-solutions" style={{color:"#2563eb",textDecoration:"none",fontWeight:600}}>campaign performance</a> metrics.</p></div></details>
        </div>
      </div></div></section>

      <section className="pp-cta"><div className="pp-container"><div className="pp-cta__inner pp-animate--scale">
        <h2 className="pp-cta__heading">Maximize Your <span className="pp-text-accent">Ad Performance</span></h2>
        <p className="pp-cta__text">Let&apos;s discuss how PPC can drive qualified leads and measurable revenue growth.</p>
        <button type="button" className="pp-cta__button js-open-modal">Start Your PPC Campaign</button>
      </div></div></section>
    </>
  );
}