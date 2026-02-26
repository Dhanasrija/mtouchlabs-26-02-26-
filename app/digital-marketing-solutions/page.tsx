import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Digital Marketing Solutions | mTouch Labs",
  description: "mTouch Labs delivers digital marketing solutions including SEO, performance advertising, conversion optimization, and data-driven growth strategies.",
  keywords: ["digital marketing solutions","digital marketing services","SEO services","performance marketing","digital growth strategy","marketing analytics"],
  alternates: { canonical: "https://www.mtouchlabs.com/digital-marketing-solutions" },
  openGraph: { title: "Digital Marketing Solutions | mTouch Labs", description: "Integrated performance marketing and growth strategies powered by analytics and technology.", url: "https://www.mtouchlabs.com/digital-marketing-solutions", siteName: "mTouch Labs", type: "website" },
  twitter: { card: "summary_large_image", title: "Digital Marketing Solutions | mTouch Labs", description: "Performance-focused digital growth and marketing services." },
};

export default function DigitalMarketingSolutions() {
  return (
    <>
      <section className="dm-hero"><div className="dm-hero__inner">
        <Breadcrumb pagePath="/digital-marketing-solutions" />
        <h1 className="dm-hero__title">Digital <span className="dm-hero__title-accent">Marketing</span> Solutions</h1>
        <p className="dm-hero__subtitle">Integrated Growth Strategies Powered by Data, Performance &amp; Technology</p>
        <p className="dm-hero__desc">mTouch Labs delivers structured digital marketing solutions designed to help businesses attract, convert, and retain customers through measurable performance strategies. Marketing should generate predictable growth, not unpredictable spending.</p>
      </div></section>

      <section className="dm-about"><div className="dm-container"><div className="dm-about__grid">
        <div className="dm-about__content dm-animate--left">
          <h2 className="dm-about__heading">What Are <span className="dm-text-accent">Digital Marketing</span> Solutions?</h2>
          <p className="dm-about__text">Digital marketing solutions encompass a coordinated set of strategies designed to increase online visibility, generate qualified leads, and improve conversion outcomes — including search optimization, paid acquisition, audience targeting, conversion funnels, and analytics.</p>
          <p className="dm-about__text">Our <a href="/seo-services" style={{color:"#2563eb",textDecoration:"none",fontWeight:600}}>SEO services</a> build sustainable organic authority, while <a href="/ppc-advertising-services" style={{color:"#2563eb",textDecoration:"none",fontWeight:600}}>PPC campaigns</a> drive immediate qualified traffic.</p>
          <p className="dm-about__text">Combined with <a href="/conversion-rate-optimization-services" style={{color:"#2563eb",textDecoration:"none",fontWeight:600}}>conversion optimization</a> and <a href="/content-marketing-services" style={{color:"#2563eb",textDecoration:"none",fontWeight:600}}>content marketing</a>, we create scalable digital growth systems that deliver long-term, measurable performance.</p>
        </div>
        <div className="dm-stats dm-animate--right">
          <div className="dm-stat"><span className="dm-stat__icon">🔍</span><span className="dm-stat__label">Search Optimization</span></div>
          <div className="dm-stat"><span className="dm-stat__icon">📈</span><span className="dm-stat__label">Paid Acquisition</span></div>
          <div className="dm-stat"><span className="dm-stat__icon">🎯</span><span className="dm-stat__label">Conversion Funnels</span></div>
          <div className="dm-stat"><span className="dm-stat__icon">📊</span><span className="dm-stat__label">Analytics &amp; Reporting</span></div>
        </div>
      </div></div></section>

      <section className="dm-whoweare"><div className="dm-container"><div className="dm-whoweare__grid">
        <div className="dm-whoweare__stats dm-animate--left">
          <div className="dm-stat dm-stat--dark"><span className="dm-stat__number">500+</span><span className="dm-stat__label">Campaigns Managed</span></div>
          <div className="dm-stat dm-stat--dark"><span className="dm-stat__number">3x</span><span className="dm-stat__label">Avg ROI Improvement</span></div>
          <div className="dm-stat dm-stat--dark"><span className="dm-stat__number">14+</span><span className="dm-stat__label">Years Experience</span></div>
          <div className="dm-stat dm-stat--dark"><span className="dm-stat__number">5</span><span className="dm-stat__label">Marketing Channels</span></div>
        </div>
        <div className="dm-whoweare__content dm-animate--right">
          <h2 className="dm-whoweare__heading">Technology-Integrated <span className="dm-text-accent">Marketing Approach</span></h2>
          <p className="dm-whoweare__text">Our solutions integrate with technology infrastructure:</p>
          <ul className="dm-checklist">
            <li className="dm-checklist__item"><span className="dm-checklist__icon">✓</span><span>CRM platforms &amp; marketing automation tools</span></li>
            <li className="dm-checklist__item"><span className="dm-checklist__icon">✓</span><span>Analytics systems &amp; AI-powered optimization</span></li>
            <li className="dm-checklist__item"><span className="dm-checklist__icon">✓</span><span>Cloud-based data tracking environments</span></li>
            <li className="dm-checklist__item"><span className="dm-checklist__icon">✓</span><span>Cross-channel performance measurement</span></li>
            <li className="dm-checklist__item"><span className="dm-checklist__icon">✓</span><span>Measurable ROI tracking &amp; attribution</span></li>
          </ul>
        </div>
      </div></div></section>

      <section className="dm-services"><div className="dm-container">
        <div className="dm-services__header dm-animate"><h2 className="dm-services__title">Our Marketing <span className="dm-text-accent">Capabilities</span></h2><p className="dm-services__subtitle">From strategy to scalable execution</p></div>
        <div className="dm-services__grid dm-stagger">
          <div className="dm-service-card dm-animate--scale"><span className="dm-service-card__badge">01</span><h4 className="dm-service-card__title">SEO &amp; Organic Growth</h4><p className="dm-service-card__text">Technical website optimization, content relevance enhancement, keyword strategy, and search performance metrics for sustainable authority building.</p></div>
          <div className="dm-service-card dm-animate--scale"><span className="dm-service-card__badge">02</span><h4 className="dm-service-card__title">Performance Advertising</h4><p className="dm-service-card__text">High-intent search campaigns, precision audience targeting, cost-efficient acquisition models, data-driven bidding, and continuous ROI optimization.</p></div>
          <div className="dm-service-card dm-animate--scale"><span className="dm-service-card__badge">03</span><h4 className="dm-service-card__title">App Growth &amp; ASO</h4><p className="dm-service-card__text">App store optimization, install growth campaigns, engagement-based remarketing, and conversion optimization bridging development and marketing.</p></div>
          <div className="dm-service-card dm-animate--scale"><span className="dm-service-card__badge">04</span><h4 className="dm-service-card__title">Conversion Optimization</h4><p className="dm-service-card__text">Funnel analysis, user behavior tracking, landing page refinement, A/B testing, and engagement improvement turning traffic into revenue.</p></div>
          <div className="dm-service-card dm-service-card--wide dm-animate--scale"><span className="dm-service-card__badge">05</span><h4 className="dm-service-card__title">Content &amp; Analytics</h4><p className="dm-service-card__text">Search-aligned content strategy, thought leadership positioning, performance dashboards, attribution tracking, and data-driven decision reporting.</p></div>
        </div>
      </div></section>

      <section className="dm-delivery"><div className="dm-container">
        <h2 className="dm-delivery__heading dm-animate">Our Growth <span className="dm-text-accent">Framework</span></h2>
        <p className="dm-delivery__text">Structured approach ensuring predictable performance improvements.</p>
        <div className="dm-delivery__steps">
          <div className="dm-step"><span className="dm-step__circle">Assessment</span></div><span className="dm-step__arrow">→</span>
          <div className="dm-step"><span className="dm-step__circle">Channel Plan</span></div><span className="dm-step__arrow">→</span>
          <div className="dm-step"><span className="dm-step__circle">Deployment</span></div><span className="dm-step__arrow">→</span>
          <div className="dm-step"><span className="dm-step__circle">Monitoring</span></div><span className="dm-step__arrow">→</span>
          <div className="dm-step"><span className="dm-step__circle">Optimization</span></div><span className="dm-step__arrow">→</span>
          <div className="dm-step"><span className="dm-step__circle">Scale</span></div>
        </div>
      </div></section>

      <section className="dm-reliable"><div className="dm-container"><div className="dm-reliable__inner dm-animate">
        <h2 className="dm-reliable__heading">Why Choose <span className="dm-text-accent">mTouch Labs</span>?</h2>
        <p className="dm-reliable__text">We focus on sustainable digital growth — not vanity metrics.</p>
        <div className="dm-reliable__pillars">
          <div className="dm-pillar"><span className="dm-pillar__dot"></span><span className="dm-pillar__label">Performance-focused strategy</span></div>
          <div className="dm-pillar"><span className="dm-pillar__dot"></span><span className="dm-pillar__label">Data-backed decision models</span></div>
          <div className="dm-pillar"><span className="dm-pillar__dot"></span><span className="dm-pillar__label">Dev &amp; analytics integration</span></div>
          <div className="dm-pillar"><span className="dm-pillar__dot"></span><span className="dm-pillar__label">Cross-channel expertise</span></div>
          <div className="dm-pillar"><span className="dm-pillar__dot"></span><span className="dm-pillar__label">Measurable ROI tracking</span></div>
          <div className="dm-pillar"><span className="dm-pillar__dot"></span><span className="dm-pillar__label">Continuous optimization</span></div>
        </div>
      </div></div></section>

      <section className="dm-industries"><div className="dm-container">
        <h2 className="dm-industries__title dm-animate">Industries We <span className="dm-text-accent">Support</span></h2>
        <div className="dm-industries__grid dm-stagger">
          <div className="dm-industry dm-animate--scale"><span className="dm-industry__icon">💻</span><h4 className="dm-industry__title">Technology &amp; SaaS</h4></div>
          <div className="dm-industry dm-animate--scale"><span className="dm-industry__icon">🛒</span><h4 className="dm-industry__title">eCommerce &amp; Retail</h4></div>
          <div className="dm-industry dm-animate--scale"><span className="dm-industry__icon">🏥</span><h4 className="dm-industry__title">Healthcare Platforms</h4></div>
          <div className="dm-industry dm-animate--scale"><span className="dm-industry__icon">💳</span><h4 className="dm-industry__title">Financial Services</h4></div>
          <div className="dm-industry dm-animate--scale"><span className="dm-industry__icon">🏢</span><h4 className="dm-industry__title">Enterprise Businesses</h4></div>
          <div className="dm-industry dm-animate--scale"><span className="dm-industry__icon">🚀</span><h4 className="dm-industry__title">Startup Growth</h4></div>
        </div>
      </div></section>

      <section className="dm-tech"><div className="dm-container"><div className="dm-tech__grid">
        <div className="dm-animate--left">
          <h2 className="dm-tech__heading">Marketing <span className="dm-text-accent">Technology Stack</span></h2>
          <p className="dm-tech__text">Enterprise marketing platforms and analytics tools.</p>
          <div className="dm-tech__tags">
            {["Google Ads","Meta Ads","LinkedIn Ads","Google Analytics 4","Google Search Console","SEMrush","Ahrefs","Moz","HubSpot","Mailchimp","Klaviyo","Hotjar","Optimizely","Salesforce CRM","Looker Studio","Tag Manager","Facebook Pixel","Zapier"].map((t)=>(<span key={t} className="dm-tag">{t}</span>))}
          </div>
        </div>
        <div className="dm-tech__stats dm-animate--right">
          <div className="dm-stat dm-stat--dark"><span className="dm-stat__number">18+</span><span className="dm-stat__label">Marketing Tools</span></div>
          <div className="dm-stat dm-stat--dark"><span className="dm-stat__number">5</span><span className="dm-stat__label">Channels</span></div>
          <div className="dm-stat dm-stat--dark"><span className="dm-stat__number">500+</span><span className="dm-stat__label">Campaigns</span></div>
          <div className="dm-stat dm-stat--dark"><span className="dm-stat__number">ROI</span><span className="dm-stat__label">Focused</span></div>
        </div>
      </div></div></section>

      <section className="dm-faq"><div className="dm-container"><div className="dm-faq__wrapper">
        <h3 className="dm-faq__heading dm-animate">Frequently Asked <span className="dm-text-accent">Questions</span></h3>
        <p className="dm-faq__subtext">Everything about digital marketing solutions</p>
        <div className="dm-faq__list">
          <details className="dm-faq__item"><summary className="dm-faq__question"><span>What are digital marketing solutions?</span><span className="dm-faq__chevron"></span></summary><div className="dm-faq__answer"><p>Digital marketing solutions are structured strategies designed to increase online visibility, generate leads, and improve conversion performance across digital channels.</p></div></details>
          <details className="dm-faq__item"><summary className="dm-faq__question"><span>How are they different from basic marketing?</span><span className="dm-faq__chevron"></span></summary><div className="dm-faq__answer"><p>They integrate <a href="/performance-marketing-services" style={{color:"#2563eb",textDecoration:"none",fontWeight:600}}>performance analytics</a>, automation, and multi-channel strategy for measurable and scalable growth.</p></div></details>
          <details className="dm-faq__item"><summary className="dm-faq__question"><span>Can digital marketing improve ROI?</span><span className="dm-faq__chevron"></span></summary><div className="dm-faq__answer"><p>Yes. With structured tracking and <a href="/conversion-rate-optimization-services" style={{color:"#2563eb",textDecoration:"none",fontWeight:600}}>conversion optimization</a>, campaigns are continuously refined for better results.</p></div></details>
          <details className="dm-faq__item"><summary className="dm-faq__question"><span>Do you provide performance tracking?</span><span className="dm-faq__chevron"></span></summary><div className="dm-faq__answer"><p>Yes. All campaigns include measurable analytics and reporting frameworks.</p></div></details>
        </div>
      </div></div></section>

      <section className="dm-cta"><div className="dm-container"><div className="dm-cta__inner dm-animate--scale">
        <h2 className="dm-cta__heading">Accelerate Your <span className="dm-text-accent">Digital Growth</span></h2>
        <p className="dm-cta__text">Let&apos;s discuss how our marketing solutions can drive measurable business growth.</p>
        <button type="button" className="dm-cta__button js-open-modal">Start Your Growth Strategy</button>
      </div></div></section>
    </>
  );
}