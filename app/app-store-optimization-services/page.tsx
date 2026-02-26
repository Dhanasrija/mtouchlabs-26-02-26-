import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "App Store Optimization Services | mTouch Labs",
  description: "mTouch Labs offers app store optimization services to improve app visibility, increase organic downloads, and strengthen global marketplace rankings.",
  keywords: ["app store optimization services","ASO services","app store optimization company","mobile app ASO","Google Play optimization","Apple App Store optimization"],
  alternates: { canonical: "https://www.mtouchlabs.com/app-store-optimization-services" },
  openGraph: { title: "App Store Optimization Services | mTouch Labs", description: "Global app store optimization strategies for increased visibility and organic growth.", url: "https://www.mtouchlabs.com/app-store-optimization-services", siteName: "mTouch Labs", type: "website" },
  twitter: { card: "summary_large_image", title: "App Store Optimization Services | mTouch Labs", description: "Data-driven ASO strategies for scalable mobile app growth." },
};

export default function AppStoreOptimization() {
  return (
    <>
      <section className="ao-hero"><div className="ao-hero__inner">
        <Breadcrumb pagePath="/app-store-optimization-services" />
        <h1 className="ao-hero__title">App Store <span className="ao-hero__title-accent">Optimization</span> Services</h1>
        <p className="ao-hero__subtitle">Increasing App Visibility, Downloads &amp; Long-Term Store Performance</p>
        <p className="ao-hero__desc">mTouch Labs provides professional ASO services designed to improve app discoverability, increase organic downloads, and enhance user acquisition performance across global marketplaces. App growth begins with discoverability.</p>
      </div></section>

      <section className="ao-about"><div className="ao-container"><div className="ao-about__grid">
        <div className="ao-about__content ao-animate--left">
          <h2 className="ao-about__heading">What Are <span className="ao-text-accent">ASO Services</span>?</h2>
          <p className="ao-about__text">App Store Optimization services improve a mobile app&apos;s ranking and visibility within Apple App Store and Google Play Store through keyword research, metadata refinement, visual asset optimization, and conversion rate improvement.</p>
          <p className="ao-about__text">Our ASO integrates with <a href="/mobile-app-development-company" style={{color:"#2563eb",textDecoration:"none",fontWeight:600}}>mobile app development</a> and <a href="/mobile-app-design-company" style={{color:"#2563eb",textDecoration:"none",fontWeight:600}}>mobile design</a> for end-to-end app growth.</p>
          <p className="ao-about__text">Combined with <a href="/performance-marketing-services" style={{color:"#2563eb",textDecoration:"none",fontWeight:600}}>performance marketing</a> and <a href="/digital-marketing-solutions" style={{color:"#2563eb",textDecoration:"none",fontWeight:600}}>digital marketing</a>, ASO reduces reliance on paid installs for sustainable organic growth.</p>
        </div>
        <div className="ao-stats ao-animate--right">
          <div className="ao-stat"><span className="ao-stat__icon">🔍</span><span className="ao-stat__label">Keyword Strategy</span></div>
          <div className="ao-stat"><span className="ao-stat__icon">📱</span><span className="ao-stat__label">Listing Optimization</span></div>
          <div className="ao-stat"><span className="ao-stat__icon">🎨</span><span className="ao-stat__label">Visual Assets</span></div>
          <div className="ao-stat"><span className="ao-stat__icon">📊</span><span className="ao-stat__label">A/B Testing</span></div>
        </div>
      </div></div></section>

      <section className="ao-whoweare"><div className="ao-container"><div className="ao-whoweare__grid">
        <div className="ao-whoweare__stats ao-animate--left">
          <div className="ao-stat ao-stat--dark"><span className="ao-stat__number">200+</span><span className="ao-stat__label">Apps Optimized</span></div>
          <div className="ao-stat ao-stat--dark"><span className="ao-stat__number">3x</span><span className="ao-stat__label">Avg Download Lift</span></div>
          <div className="ao-stat ao-stat--dark"><span className="ao-stat__number">iOS</span><span className="ao-stat__label">&amp; Android</span></div>
          <div className="ao-stat ao-stat--dark"><span className="ao-stat__number">Global</span><span className="ao-stat__label">Marketplace</span></div>
        </div>
        <div className="ao-whoweare__content ao-animate--right">
          <h2 className="ao-whoweare__heading">Business Benefits of <span className="ao-text-accent">ASO</span></h2>
          <p className="ao-whoweare__text">ASO strengthens digital product visibility globally:</p>
          <ul className="ao-checklist">
            <li className="ao-checklist__item"><span className="ao-checklist__icon">✓</span><span>Increased organic downloads &amp; reduced paid costs</span></li>
            <li className="ao-checklist__item"><span className="ao-checklist__icon">✓</span><span>Improved app discoverability &amp; higher conversion rates</span></li>
            <li className="ao-checklist__item"><span className="ao-checklist__icon">✓</span><span>Stronger marketplace positioning &amp; long-term sustainability</span></li>
            <li className="ao-checklist__item"><span className="ao-checklist__icon">✓</span><span>Data-driven keyword research &amp; structured A/B testing</span></li>
            <li className="ao-checklist__item"><span className="ao-checklist__icon">✓</span><span>Integration with performance marketing teams</span></li>
          </ul>
        </div>
      </div></div></section>

      <section className="ao-services"><div className="ao-container">
        <div className="ao-services__header ao-animate"><h2 className="ao-services__title">Our ASO <span className="ao-text-accent">Capabilities</span></h2><p className="ao-services__subtitle">From keyword strategy to ranking monitoring</p></div>
        <div className="ao-services__grid ao-stagger">
          <div className="ao-service-card ao-animate--scale"><span className="ao-service-card__badge">01</span><h4 className="ao-service-card__title">Keyword &amp; Metadata</h4><p className="ao-service-card__text">High-intent search terms, competitive keyword gaps, ranking opportunities, store algorithm alignment, and structured metadata updates.</p></div>
          <div className="ao-service-card ao-animate--scale"><span className="ao-service-card__badge">02</span><h4 className="ao-service-card__title">Listing Conversion</h4><p className="ao-service-card__text">App titles, descriptions, feature highlights, value proposition clarity, and CTA messaging optimization for higher download rates.</p></div>
          <div className="ao-service-card ao-animate--scale"><span className="ao-service-card__badge">03</span><h4 className="ao-service-card__title">Visual Assets</h4><p className="ao-service-card__text">App icon strategy, screenshot storytelling, preview video positioning, and visual hierarchy for stronger first impressions.</p></div>
          <div className="ao-service-card ao-animate--scale"><span className="ao-service-card__badge">04</span><h4 className="ao-service-card__title">A/B Testing</h4><p className="ao-service-card__text">Title variations, screenshot sequencing, feature emphasis testing, and conversion rate benchmarking for data-backed improvements.</p></div>
          <div className="ao-service-card ao-service-card--wide ao-animate--scale"><span className="ao-service-card__badge">05</span><h4 className="ao-service-card__title">Analytics &amp; Reporting</h4><p className="ao-service-card__text">Keyword ranking tracking, install growth analysis, conversion rate performance, competitive benchmarking, and retention signal monitoring.</p></div>
        </div>
      </div></section>

      <section className="ao-delivery"><div className="ao-container">
        <h2 className="ao-delivery__heading ao-animate">Our ASO <span className="ao-text-accent">Framework</span></h2>
        <p className="ao-delivery__text">Structured process supporting long-term marketplace performance.</p>
        <div className="ao-delivery__steps">
          <div className="ao-step"><span className="ao-step__circle">Market Analysis</span></div><span className="ao-step__arrow">→</span>
          <div className="ao-step"><span className="ao-step__circle">Keywords</span></div><span className="ao-step__arrow">→</span>
          <div className="ao-step"><span className="ao-step__circle">Listing</span></div><span className="ao-step__arrow">→</span>
          <div className="ao-step"><span className="ao-step__circle">Visuals</span></div><span className="ao-step__arrow">→</span>
          <div className="ao-step"><span className="ao-step__circle">A/B Test</span></div><span className="ao-step__arrow">→</span>
          <div className="ao-step"><span className="ao-step__circle">Monitor</span></div><span className="ao-step__arrow">→</span>
          <div className="ao-step"><span className="ao-step__circle">Optimize</span></div>
        </div>
      </div></section>

      <section className="ao-reliable"><div className="ao-container"><div className="ao-reliable__inner ao-animate">
        <h2 className="ao-reliable__heading">Why Choose <span className="ao-text-accent">mTouch Labs</span>?</h2>
        <p className="ao-reliable__text">We position apps for measurable, scalable growth.</p>
        <div className="ao-reliable__pillars">
          <div className="ao-pillar"><span className="ao-pillar__dot"></span><span className="ao-pillar__label">Global marketplace expertise</span></div>
          <div className="ao-pillar"><span className="ao-pillar__dot"></span><span className="ao-pillar__label">Data-driven keyword research</span></div>
          <div className="ao-pillar"><span className="ao-pillar__dot"></span><span className="ao-pillar__label">Conversion-focused listings</span></div>
          <div className="ao-pillar"><span className="ao-pillar__dot"></span><span className="ao-pillar__label">Structured A/B testing</span></div>
          <div className="ao-pillar"><span className="ao-pillar__dot"></span><span className="ao-pillar__label">Performance marketing integration</span></div>
          <div className="ao-pillar"><span className="ao-pillar__dot"></span><span className="ao-pillar__label">Continuous ranking tracking</span></div>
        </div>
      </div></div></section>

      <section className="ao-industries"><div className="ao-container">
        <h2 className="ao-industries__title ao-animate">Industries We <span className="ao-text-accent">Support</span></h2>
        <div className="ao-industries__grid ao-stagger">
          <div className="ao-industry ao-animate--scale"><span className="ao-industry__icon">💻</span><h4 className="ao-industry__title">SaaS &amp; Mobile Products</h4></div>
          <div className="ao-industry ao-animate--scale"><span className="ao-industry__icon">💳</span><h4 className="ao-industry__title">FinTech Applications</h4></div>
          <div className="ao-industry ao-animate--scale"><span className="ao-industry__icon">🛒</span><h4 className="ao-industry__title">eCommerce Apps</h4></div>
          <div className="ao-industry ao-animate--scale"><span className="ao-industry__icon">💊</span><h4 className="ao-industry__title">Healthcare &amp; Wellness</h4></div>
          <div className="ao-industry ao-animate--scale"><span className="ao-industry__icon">🚗</span><h4 className="ao-industry__title">On-Demand Platforms</h4></div>
          <div className="ao-industry ao-animate--scale"><span className="ao-industry__icon">🏢</span><h4 className="ao-industry__title">Enterprise Mobile</h4></div>
        </div>
      </div></section>

      <section className="ao-tech"><div className="ao-container"><div className="ao-tech__grid">
        <div className="ao-animate--left">
          <h2 className="ao-tech__heading">ASO <span className="ao-text-accent">Tools &amp; Platforms</span></h2>
          <p className="ao-tech__text">Industry-leading ASO analytics and optimization platforms.</p>
          <div className="ao-tech__tags">
            {["App Annie","Sensor Tower","Mobile Action","AppTweak","SplitMetrics","StoreMaven","App Radar","Keyword Tool","App Store Connect","Google Play Console","Firebase","Adjust","AppsFlyer","Mixpanel","Amplitude","TestFlight","Google Experiments","Localization"].map((t)=>(<span key={t} className="ao-tag">{t}</span>))}
          </div>
        </div>
        <div className="ao-tech__stats ao-animate--right">
          <div className="ao-stat ao-stat--dark"><span className="ao-stat__number">200+</span><span className="ao-stat__label">Apps Optimized</span></div>
          <div className="ao-stat ao-stat--dark"><span className="ao-stat__number">iOS</span><span className="ao-stat__label">&amp; Android</span></div>
          <div className="ao-stat ao-stat--dark"><span className="ao-stat__number">Global</span><span className="ao-stat__label">Markets</span></div>
          <div className="ao-stat ao-stat--dark"><span className="ao-stat__number">14+</span><span className="ao-stat__label">Years</span></div>
        </div>
      </div></div></section>

      <section className="ao-faq"><div className="ao-container"><div className="ao-faq__wrapper">
        <h3 className="ao-faq__heading ao-animate">Frequently Asked <span className="ao-text-accent">Questions</span></h3>
        <p className="ao-faq__subtext">Everything about ASO services</p>
        <div className="ao-faq__list">
          <details className="ao-faq__item"><summary className="ao-faq__question"><span>What are app store optimization services?</span><span className="ao-faq__chevron"></span></summary><div className="ao-faq__answer"><p>ASO services improve an app&apos;s ranking, visibility, and download conversion within app marketplaces.</p></div></details>
          <details className="ao-faq__item"><summary className="ao-faq__question"><span>How long does ASO take to show results?</span><span className="ao-faq__chevron"></span></summary><div className="ao-faq__answer"><p>Keyword improvements and ranking changes typically begin within several weeks, with consistent optimization improving long-term growth.</p></div></details>
          <details className="ao-faq__item"><summary className="ao-faq__question"><span>Is ASO necessary if I run paid ads?</span><span className="ao-faq__chevron"></span></summary><div className="ao-faq__answer"><p>Yes. ASO reduces reliance on <a href="/ppc-advertising-services" style={{color:"#2563eb",textDecoration:"none",fontWeight:600}}>paid installs</a> and improves organic visibility for sustainable growth.</p></div></details>
          <details className="ao-faq__item"><summary className="ao-faq__question"><span>Do you optimize both Apple and Google Play?</span><span className="ao-faq__chevron"></span></summary><div className="ao-faq__answer"><p>Yes. We implement platform-specific strategies for both global marketplaces.</p></div></details>
        </div>
      </div></div></section>

      <section className="ao-cta"><div className="ao-container"><div className="ao-cta__inner ao-animate--scale">
        <h2 className="ao-cta__heading">Boost Your <span className="ao-text-accent">App Visibility</span></h2>
        <p className="ao-cta__text">Let&apos;s discuss how ASO can increase your organic downloads and marketplace rankings.</p>
        <button type="button" className="ao-cta__button js-open-modal">Start App Optimization</button>
      </div></div></section>
    </>
  );
}