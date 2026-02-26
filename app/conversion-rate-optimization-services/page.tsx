import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Conversion Rate Optimization Services | mTouch Labs",
  description: "mTouch Labs provides conversion rate optimization services to improve website performance, increase revenue, and maximize marketing ROI.",
  keywords: ["conversion rate optimization services","CRO services","website optimization","A/B testing services","conversion optimization company","landing page optimization"],
  alternates: { canonical: "https://www.mtouchlabs.com/conversion-rate-optimization-services" },
  openGraph: { title: "Conversion Rate Optimization Services | mTouch Labs", description: "Data-driven CRO strategies focused on measurable revenue growth.", url: "https://www.mtouchlabs.com/conversion-rate-optimization-services", siteName: "mTouch Labs", type: "website" },
  twitter: { card: "summary_large_image", title: "Conversion Rate Optimization Services | mTouch Labs", description: "Performance-focused website conversion optimization services." },
};

export default function ConversionRateOptimization() {
  return (
    <>
      <section className="co-hero"><div className="co-hero__inner">
        <Breadcrumb pagePath="/conversion-rate-optimization-services" />
        <h1 className="co-hero__title">Conversion Rate <span className="co-hero__title-accent">Optimization</span> Services</h1>
        <p className="co-hero__subtitle">Turning Website Traffic Into Measurable Revenue Growth</p>
        <p className="co-hero__desc">mTouch Labs delivers strategic CRO services designed to maximize the value of existing website traffic. Traffic without conversion is wasted potential.</p>
      </div></section>

      <section className="co-about"><div className="co-container"><div className="co-about__grid">
        <div className="co-about__content co-animate--left">
          <h2 className="co-about__heading">What Are <span className="co-text-accent">CRO Services</span>?</h2>
          <p className="co-about__text">CRO services analyze user behavior and improve digital touchpoints to increase the percentage of visitors who complete desired actions — including funnel analysis, A/B testing, landing page refinement, and performance monitoring.</p>
          <p className="co-about__text">Our CRO integrates with <a href="/seo-services" style={{color:"#2563eb",textDecoration:"none",fontWeight:600}}>SEO</a> and <a href="/ppc-advertising-services" style={{color:"#2563eb",textDecoration:"none",fontWeight:600}}>PPC strategies</a> to maximize campaign ROI and overall digital performance.</p>
          <p className="co-about__text">Combined with <a href="/ui-ux-design-company" style={{color:"#2563eb",textDecoration:"none",fontWeight:600}}>UX design</a> expertise, we create data-driven optimization frameworks that increase conversions without increasing traffic costs.</p>
        </div>
        <div className="co-stats co-animate--right">
          <div className="co-stat"><span className="co-stat__icon">📊</span><span className="co-stat__label">Funnel Analysis</span></div>
          <div className="co-stat"><span className="co-stat__icon">🧪</span><span className="co-stat__label">A/B Testing</span></div>
          <div className="co-stat"><span className="co-stat__icon">🔥</span><span className="co-stat__label">Heatmap Analysis</span></div>
          <div className="co-stat"><span className="co-stat__icon">💰</span><span className="co-stat__label">Revenue Growth</span></div>
        </div>
      </div></div></section>

      <section className="co-whoweare"><div className="co-container"><div className="co-whoweare__grid">
        <div className="co-whoweare__stats co-animate--left">
          <div className="co-stat co-stat--dark"><span className="co-stat__number">250+</span><span className="co-stat__label">CRO Projects</span></div>
          <div className="co-stat co-stat--dark"><span className="co-stat__number">45%</span><span className="co-stat__label">Avg Conversion Lift</span></div>
          <div className="co-stat co-stat--dark"><span className="co-stat__number">30%</span><span className="co-stat__label">Lower CPA</span></div>
          <div className="co-stat co-stat--dark"><span className="co-stat__number">14+</span><span className="co-stat__label">Years Experience</span></div>
        </div>
        <div className="co-whoweare__content co-animate--right">
          <h2 className="co-whoweare__heading">Business Benefits of <span className="co-text-accent">CRO</span></h2>
          <p className="co-whoweare__text">CRO maximizes efficiency across digital channels:</p>
          <ul className="co-checklist">
            <li className="co-checklist__item"><span className="co-checklist__icon">✓</span><span>Increased revenue from existing traffic</span></li>
            <li className="co-checklist__item"><span className="co-checklist__icon">✓</span><span>Reduced cost per acquisition &amp; higher ROI</span></li>
            <li className="co-checklist__item"><span className="co-checklist__icon">✓</span><span>Improved user engagement &amp; data-backed decisions</span></li>
            <li className="co-checklist__item"><span className="co-checklist__icon">✓</span><span>UX-informed decision framework</span></li>
            <li className="co-checklist__item"><span className="co-checklist__icon">✓</span><span>Structured experimentation models</span></li>
          </ul>
        </div>
      </div></div></section>

      <section className="co-services"><div className="co-container">
        <div className="co-services__header co-animate"><h2 className="co-services__title">Our CRO <span className="co-text-accent">Capabilities</span></h2><p className="co-services__subtitle">From funnel analysis to revenue optimization</p></div>
        <div className="co-services__grid co-stagger">
          <div className="co-service-card co-animate--scale"><span className="co-service-card__badge">01</span><h4 className="co-service-card__title">Funnel Analysis</h4><p className="co-service-card__text">Entry sources, landing page interactions, drop-off points, checkout friction, and retention bottleneck evaluation.</p></div>
          <div className="co-service-card co-animate--scale"><span className="co-service-card__badge">02</span><h4 className="co-service-card__title">Landing Page Optimization</h4><p className="co-service-card__text">Headline clarity, messaging alignment, CTA placement, page structure, speed performance, and mobile responsiveness.</p></div>
          <div className="co-service-card co-animate--scale"><span className="co-service-card__badge">03</span><h4 className="co-service-card__title">A/B Testing</h4><p className="co-service-card__text">Variant testing, CTA experiments, layout restructuring, offer positioning comparison, and micro-conversion analysis.</p></div>
          <div className="co-service-card co-animate--scale"><span className="co-service-card__badge">04</span><h4 className="co-service-card__title">Behavior &amp; Heatmaps</h4><p className="co-service-card__text">Click tracking, scroll depth analysis, engagement patterns, session recordings, and behavioral insight-driven optimization.</p></div>
          <div className="co-service-card co-service-card--wide co-animate--scale"><span className="co-service-card__badge">05</span><h4 className="co-service-card__title">Checkout &amp; Form Optimization</h4><p className="co-service-card__text">Multi-step forms, checkout flows, error handling, trust signals, and payment experience clarity for higher completion rates.</p></div>
        </div>
      </div></section>

      <section className="co-delivery"><div className="co-container">
        <h2 className="co-delivery__heading co-animate">Our CRO <span className="co-text-accent">Framework</span></h2>
        <p className="co-delivery__text">Optimization is continuous, not one-time.</p>
        <div className="co-delivery__steps">
          <div className="co-step"><span className="co-step__circle">Audit</span></div><span className="co-step__arrow">→</span>
          <div className="co-step"><span className="co-step__circle">Behavior</span></div><span className="co-step__arrow">→</span>
          <div className="co-step"><span className="co-step__circle">Hypothesis</span></div><span className="co-step__arrow">→</span>
          <div className="co-step"><span className="co-step__circle">A/B Test</span></div><span className="co-step__arrow">→</span>
          <div className="co-step"><span className="co-step__circle">Validate</span></div><span className="co-step__arrow">→</span>
          <div className="co-step"><span className="co-step__circle">Iterate</span></div>
        </div>
      </div></section>

      <section className="co-reliable"><div className="co-container"><div className="co-reliable__inner co-animate">
        <h2 className="co-reliable__heading">Why Choose <span className="co-text-accent">mTouch Labs</span>?</h2>
        <p className="co-reliable__text">We transform website performance into measurable business growth.</p>
        <div className="co-reliable__pillars">
          <div className="co-pillar"><span className="co-pillar__dot"></span><span className="co-pillar__label">Data-first methodology</span></div>
          <div className="co-pillar"><span className="co-pillar__dot"></span><span className="co-pillar__label">SEO &amp; PPC integration</span></div>
          <div className="co-pillar"><span className="co-pillar__dot"></span><span className="co-pillar__label">UX-informed decisions</span></div>
          <div className="co-pillar"><span className="co-pillar__dot"></span><span className="co-pillar__label">Structured experimentation</span></div>
          <div className="co-pillar"><span className="co-pillar__dot"></span><span className="co-pillar__label">Transparent analytics</span></div>
          <div className="co-pillar"><span className="co-pillar__dot"></span><span className="co-pillar__label">Continuous improvement</span></div>
        </div>
      </div></div></section>

      <section className="co-industries"><div className="co-container">
        <h2 className="co-industries__title co-animate">Industries We <span className="co-text-accent">Support</span></h2>
        <div className="co-industries__grid co-stagger">
          <div className="co-industry co-animate--scale"><span className="co-industry__icon">💻</span><h4 className="co-industry__title">SaaS &amp; Subscriptions</h4></div>
          <div className="co-industry co-animate--scale"><span className="co-industry__icon">🛒</span><h4 className="co-industry__title">eCommerce &amp; Retail</h4></div>
          <div className="co-industry co-animate--scale"><span className="co-industry__icon">💳</span><h4 className="co-industry__title">Financial Services</h4></div>
          <div className="co-industry co-animate--scale"><span className="co-industry__icon">🏥</span><h4 className="co-industry__title">Healthcare</h4></div>
          <div className="co-industry co-animate--scale"><span className="co-industry__icon">🏢</span><h4 className="co-industry__title">Enterprise B2B</h4></div>
          <div className="co-industry co-animate--scale"><span className="co-industry__icon">🚀</span><h4 className="co-industry__title">Startup Growth</h4></div>
        </div>
      </div></section>

      <section className="co-tech"><div className="co-container"><div className="co-tech__grid">
        <div className="co-animate--left">
          <h2 className="co-tech__heading">CRO <span className="co-text-accent">Technology Stack</span></h2>
          <p className="co-tech__text">Enterprise optimization and analytics platforms.</p>
          <div className="co-tech__tags">
            {["Optimizely","VWO","Google Optimize","Hotjar","Crazy Egg","FullStory","Google Analytics 4","Mixpanel","Amplitude","Unbounce","Instapage","Mouseflow","Lucky Orange","Heap Analytics","Looker Studio","Tag Manager","Figma","UserTesting"].map((t)=>(<span key={t} className="co-tag">{t}</span>))}
          </div>
        </div>
        <div className="co-tech__stats co-animate--right">
          <div className="co-stat co-stat--dark"><span className="co-stat__number">250+</span><span className="co-stat__label">CRO Projects</span></div>
          <div className="co-stat co-stat--dark"><span className="co-stat__number">45%</span><span className="co-stat__label">Avg Lift</span></div>
          <div className="co-stat co-stat--dark"><span className="co-stat__number">18+</span><span className="co-stat__label">Tools</span></div>
          <div className="co-stat co-stat--dark"><span className="co-stat__number">14+</span><span className="co-stat__label">Years</span></div>
        </div>
      </div></div></section>

      <section className="co-faq"><div className="co-container"><div className="co-faq__wrapper">
        <h3 className="co-faq__heading co-animate">Frequently Asked <span className="co-text-accent">Questions</span></h3>
        <p className="co-faq__subtext">Everything about CRO services</p>
        <div className="co-faq__list">
          <details className="co-faq__item"><summary className="co-faq__question"><span>What are CRO services?</span><span className="co-faq__chevron"></span></summary><div className="co-faq__answer"><p>CRO services improve the percentage of website visitors who complete desired actions such as purchases or sign-ups.</p></div></details>
          <details className="co-faq__item"><summary className="co-faq__question"><span>How does CRO increase revenue?</span><span className="co-faq__chevron"></span></summary><div className="co-faq__answer"><p>By improving conversion efficiency, businesses generate more results from existing traffic without increasing ad spend.</p></div></details>
          <details className="co-faq__item"><summary className="co-faq__question"><span>How long does CRO take?</span><span className="co-faq__chevron"></span></summary><div className="co-faq__answer"><p>Initial testing insights appear within weeks, with measurable improvements building over time through <a href="/digital-marketing-solutions" style={{color:"#2563eb",textDecoration:"none",fontWeight:600}}>integrated marketing</a>.</p></div></details>
          <details className="co-faq__item"><summary className="co-faq__question"><span>Is CRO necessary with PPC?</span><span className="co-faq__chevron"></span></summary><div className="co-faq__answer"><p>Yes. CRO improves the performance of <a href="/ppc-advertising-services" style={{color:"#2563eb",textDecoration:"none",fontWeight:600}}>paid campaigns</a> by increasing conversion efficiency.</p></div></details>
        </div>
      </div></div></section>

      <section className="co-cta"><div className="co-container"><div className="co-cta__inner co-animate--scale">
        <h2 className="co-cta__heading">Maximize Your <span className="co-text-accent">Conversion Rate</span></h2>
        <p className="co-cta__text">Let&apos;s discuss how CRO can turn your existing traffic into measurable revenue.</p>
        <button type="button" className="co-cta__button js-open-modal">Start CRO Strategy</button>
      </div></div></section>
    </>
  );
}