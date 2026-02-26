import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "SEO Services | mTouch Labs",
  description: "mTouch Labs provides SEO services including technical optimization, content strategy, and authority building for sustainable organic growth.",
  keywords: ["SEO services","search engine optimization","technical SEO","enterprise SEO","content SEO strategy","SEO company"],
  alternates: { canonical: "https://www.mtouchlabs.com/seo-services" },
  openGraph: { title: "SEO Services | mTouch Labs", description: "Enterprise-grade search engine optimization for measurable organic growth.", url: "https://www.mtouchlabs.com/seo-services", siteName: "mTouch Labs", type: "website" },
  twitter: { card: "summary_large_image", title: "SEO Services | mTouch Labs", description: "Data-driven SEO strategies for long-term visibility and ranking success." },
};

export default function SEOServices() {
  return (
    <>
      <section className="se-hero"><div className="se-hero__inner">
        <Breadcrumb pagePath="/seo-services" />
        <h1 className="se-hero__title"><span className="se-hero__title-accent">SEO</span> Services</h1>
        <p className="se-hero__subtitle">Strategic Search Engine Optimization for Sustainable Organic Growth</p>
        <p className="se-hero__desc">mTouch Labs provides performance-driven SEO services designed to increase search visibility, strengthen domain authority, and generate high-intent organic traffic. Organic visibility is not accidental — it is engineered.</p>
      </div></section>

      <section className="se-about"><div className="se-container"><div className="se-about__grid">
        <div className="se-about__content se-animate--left">
          <h2 className="se-about__heading">What Are <span className="se-text-accent">SEO Services</span>?</h2>
          <p className="se-about__text">SEO services involve optimizing a website&apos;s technical structure, content relevance, and authority signals to improve search engine rankings — including technical auditing, on-page optimization, content strategy, authority development, and performance monitoring.</p>
          <p className="se-about__text">Our SEO work integrates with <a href="/content-marketing-services" style={{color:"#2563eb",textDecoration:"none",fontWeight:600}}>content marketing</a> and <a href="/conversion-rate-optimization-services" style={{color:"#2563eb",textDecoration:"none",fontWeight:600}}>conversion optimization</a> for comprehensive digital growth.</p>
          <p className="se-about__text">Combined with <a href="/web-development-company" style={{color:"#2563eb",textDecoration:"none",fontWeight:600}}>web development</a> expertise, we ensure technical foundations support long-term ranking stability.</p>
        </div>
        <div className="se-stats se-animate--right">
          <div className="se-stat"><span className="se-stat__icon">🔧</span><span className="se-stat__label">Technical SEO</span></div>
          <div className="se-stat"><span className="se-stat__icon">📝</span><span className="se-stat__label">Content Strategy</span></div>
          <div className="se-stat"><span className="se-stat__icon">🔗</span><span className="se-stat__label">Authority Building</span></div>
          <div className="se-stat"><span className="se-stat__icon">📍</span><span className="se-stat__label">Local SEO</span></div>
        </div>
      </div></div></section>

      <section className="se-whoweare"><div className="se-container"><div className="se-whoweare__grid">
        <div className="se-whoweare__stats se-animate--left">
          <div className="se-stat se-stat--dark"><span className="se-stat__number">300+</span><span className="se-stat__label">SEO Projects</span></div>
          <div className="se-stat se-stat--dark"><span className="se-stat__number">85%</span><span className="se-stat__label">Page 1 Rankings</span></div>
          <div className="se-stat se-stat--dark"><span className="se-stat__number">3-6</span><span className="se-stat__label">Months to Results</span></div>
          <div className="se-stat se-stat--dark"><span className="se-stat__number">14+</span><span className="se-stat__label">Years Experience</span></div>
        </div>
        <div className="se-whoweare__content se-animate--right">
          <h2 className="se-whoweare__heading">Measurable Outcomes of <span className="se-text-accent">Structured SEO</span></h2>
          <p className="se-whoweare__text">SEO builds long-term digital equity:</p>
          <ul className="se-checklist">
            <li className="se-checklist__item"><span className="se-checklist__icon">✓</span><span>Increased organic traffic &amp; higher search rankings</span></li>
            <li className="se-checklist__item"><span className="se-checklist__icon">✓</span><span>Improved keyword positioning &amp; domain authority</span></li>
            <li className="se-checklist__item"><span className="se-checklist__icon">✓</span><span>Better user engagement &amp; reduced paid dependency</span></li>
            <li className="se-checklist__item"><span className="se-checklist__icon">✓</span><span>Technical development expertise integration</span></li>
            <li className="se-checklist__item"><span className="se-checklist__icon">✓</span><span>Continuous algorithm alignment &amp; transparent reporting</span></li>
          </ul>
        </div>
      </div></div></section>

      <section className="se-services"><div className="se-container">
        <div className="se-services__header se-animate"><h2 className="se-services__title">Our SEO <span className="se-text-accent">Capabilities</span></h2><p className="se-services__subtitle">From technical foundations to authority building</p></div>
        <div className="se-services__grid se-stagger">
          <div className="se-service-card se-animate--scale"><span className="se-service-card__badge">01</span><h4 className="se-service-card__title">Technical SEO</h4><p className="se-service-card__text">Site architecture, crawl structure, Core Web Vitals, mobile usability, structured data, canonical management, and indexing configuration.</p></div>
          <div className="se-service-card se-animate--scale"><span className="se-service-card__badge">02</span><h4 className="se-service-card__title">On-Page SEO</h4><p className="se-service-card__text">Keyword research &amp; mapping, search intent analysis, metadata optimization, internal linking strategy, and content hierarchy refinement.</p></div>
          <div className="se-service-card se-animate--scale"><span className="se-service-card__badge">03</span><h4 className="se-service-card__title">Enterprise SEO</h4><p className="se-service-card__text">Multi-page frameworks, content cluster architecture, scalable URL structuring, performance dashboards, and competitive keyword benchmarking.</p></div>
          <div className="se-service-card se-animate--scale"><span className="se-service-card__badge">04</span><h4 className="se-service-card__title">Content-Led Growth</h4><p className="se-service-card__text">Topic authority development, semantic keyword coverage, E-E-A-T enhancement, conversion-aligned content, and search snippet optimization.</p></div>
          <div className="se-service-card se-service-card--wide se-animate--scale"><span className="se-service-card__badge">05</span><h4 className="se-service-card__title">Authority &amp; Local SEO</h4><p className="se-service-card__text">Quality backlink acquisition, digital PR, brand mentions, link profile analysis, local search visibility, and geo-focused keyword targeting.</p></div>
        </div>
      </div></section>

      <section className="se-delivery"><div className="se-container">
        <h2 className="se-delivery__heading se-animate">Our SEO <span className="se-text-accent">Implementation Framework</span></h2>
        <p className="se-delivery__text">SEO is an ongoing optimization cycle, not a one-time setup.</p>
        <div className="se-delivery__steps">
          <div className="se-step"><span className="se-step__circle">Audit</span></div><span className="se-step__arrow">→</span>
          <div className="se-step"><span className="se-step__circle">Strategy</span></div><span className="se-step__arrow">→</span>
          <div className="se-step"><span className="se-step__circle">Technical Fix</span></div><span className="se-step__arrow">→</span>
          <div className="se-step"><span className="se-step__circle">Content</span></div><span className="se-step__arrow">→</span>
          <div className="se-step"><span className="se-step__circle">Authority</span></div><span className="se-step__arrow">→</span>
          <div className="se-step"><span className="se-step__circle">Monitor</span></div><span className="se-step__arrow">→</span>
          <div className="se-step"><span className="se-step__circle">Refine</span></div>
        </div>
      </div></section>

      <section className="se-reliable"><div className="se-container"><div className="se-reliable__inner se-animate">
        <h2 className="se-reliable__heading">Why Choose <span className="se-text-accent">mTouch Labs</span>?</h2>
        <p className="se-reliable__text">We combine technology, analytics, and strategy for sustainable organic growth.</p>
        <div className="se-reliable__pillars">
          <div className="se-pillar"><span className="se-pillar__dot"></span><span className="se-pillar__label">Data-driven optimization</span></div>
          <div className="se-pillar"><span className="se-pillar__dot"></span><span className="se-pillar__label">Technical dev expertise</span></div>
          <div className="se-pillar"><span className="se-pillar__dot"></span><span className="se-pillar__label">Content architecture planning</span></div>
          <div className="se-pillar"><span className="se-pillar__dot"></span><span className="se-pillar__label">Transparent reporting</span></div>
          <div className="se-pillar"><span className="se-pillar__dot"></span><span className="se-pillar__label">Scalable enterprise SEO</span></div>
          <div className="se-pillar"><span className="se-pillar__dot"></span><span className="se-pillar__label">Algorithm alignment</span></div>
        </div>
      </div></div></section>

      <section className="se-industries"><div className="se-container">
        <h2 className="se-industries__title se-animate">Industries We <span className="se-text-accent">Serve</span></h2>
        <div className="se-industries__grid se-stagger">
          <div className="se-industry se-animate--scale"><span className="se-industry__icon">💻</span><h4 className="se-industry__title">Technology &amp; SaaS</h4></div>
          <div className="se-industry se-animate--scale"><span className="se-industry__icon">🛒</span><h4 className="se-industry__title">eCommerce</h4></div>
          <div className="se-industry se-animate--scale"><span className="se-industry__icon">🏥</span><h4 className="se-industry__title">Healthcare</h4></div>
          <div className="se-industry se-animate--scale"><span className="se-industry__icon">💳</span><h4 className="se-industry__title">Financial Services</h4></div>
          <div className="se-industry se-animate--scale"><span className="se-industry__icon">🏢</span><h4 className="se-industry__title">Enterprise B2B</h4></div>
          <div className="se-industry se-animate--scale"><span className="se-industry__icon">🚀</span><h4 className="se-industry__title">Startups</h4></div>
        </div>
      </div></section>

      <section className="se-tech"><div className="se-container"><div className="se-tech__grid">
        <div className="se-animate--left">
          <h2 className="se-tech__heading">SEO <span className="se-text-accent">Technology Stack</span></h2>
          <p className="se-tech__text">Enterprise SEO platforms and analytics tools.</p>
          <div className="se-tech__tags">
            {["Google Search Console","Google Analytics 4","SEMrush","Ahrefs","Moz Pro","Screaming Frog","Surfer SEO","Clearscope","Schema Markup","Core Web Vitals","PageSpeed Insights","GTmetrix","Majestic","BrightLocal","Yoast SEO","Sitebulb","Looker Studio","Tag Manager"].map((t)=>(<span key={t} className="se-tag">{t}</span>))}
          </div>
        </div>
        <div className="se-tech__stats se-animate--right">
          <div className="se-stat se-stat--dark"><span className="se-stat__number">18+</span><span className="se-stat__label">SEO Tools</span></div>
          <div className="se-stat se-stat--dark"><span className="se-stat__number">300+</span><span className="se-stat__label">Projects</span></div>
          <div className="se-stat se-stat--dark"><span className="se-stat__number">85%</span><span className="se-stat__label">Page 1</span></div>
          <div className="se-stat se-stat--dark"><span className="se-stat__number">14+</span><span className="se-stat__label">Years</span></div>
        </div>
      </div></div></section>

      <section className="se-faq"><div className="se-container"><div className="se-faq__wrapper">
        <h3 className="se-faq__heading se-animate">Frequently Asked <span className="se-text-accent">Questions</span></h3>
        <p className="se-faq__subtext">Everything about SEO services</p>
        <div className="se-faq__list">
          <details className="se-faq__item"><summary className="se-faq__question"><span>What do SEO services include?</span><span className="se-faq__chevron"></span></summary><div className="se-faq__answer"><p>SEO services include technical optimization, content strategy, authority building, and continuous performance monitoring to improve search rankings.</p></div></details>
          <details className="se-faq__item"><summary className="se-faq__question"><span>How long does SEO take to show results?</span><span className="se-faq__chevron"></span></summary><div className="se-faq__answer"><p>SEO results typically become measurable within 3–6 months, depending on competition and industry.</p></div></details>
          <details className="se-faq__item"><summary className="se-faq__question"><span>Is SEO better than paid advertising?</span><span className="se-faq__chevron"></span></summary><div className="se-faq__answer"><p>SEO provides sustainable long-term growth, while <a href="/ppc-advertising-services" style={{color:"#2563eb",textDecoration:"none",fontWeight:600}}>paid advertising</a> generates immediate but temporary traffic. Both complement each other.</p></div></details>
          <details className="se-faq__item"><summary className="se-faq__question"><span>Do you provide performance reports?</span><span className="se-faq__chevron"></span></summary><div className="se-faq__answer"><p>Yes. We provide structured analytics and performance dashboards for full transparency.</p></div></details>
        </div>
      </div></div></section>

      <section className="se-cta"><div className="se-container"><div className="se-cta__inner se-animate--scale">
        <h2 className="se-cta__heading">Grow Your <span className="se-text-accent">Organic Visibility</span></h2>
        <p className="se-cta__text">Let&apos;s discuss how SEO can drive sustainable traffic and revenue growth.</p>
        <button type="button" className="se-cta__button js-open-modal">Start Your SEO Strategy</button>
      </div></div></section>
    </>
  );
}