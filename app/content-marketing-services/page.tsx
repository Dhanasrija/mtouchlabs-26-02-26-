import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Content Marketing Services | mTouch Labs",
  description: "mTouch Labs provides content marketing services including SEO-driven content strategy, B2B content development, and conversion-focused messaging.",
  keywords: ["content marketing services","content strategy","B2B content marketing","SEO content","content marketing company","content development services"],
  alternates: { canonical: "https://www.mtouchlabs.com/content-marketing-services" },
  openGraph: { title: "Content Marketing Services | mTouch Labs", description: "Strategic content marketing designed to build authority and drive measurable growth.", url: "https://www.mtouchlabs.com/content-marketing-services", siteName: "mTouch Labs", type: "website" },
  twitter: { card: "summary_large_image", title: "Content Marketing Services | mTouch Labs", description: "SEO-focused content strategies for global business growth." },
};

export default function ContentMarketingServices() {
  return (
    <>
      <section className="cm-hero"><div className="cm-hero__inner">
        <Breadcrumb pagePath="/content-marketing-services" />
        <h1 className="cm-hero__title">Content <span className="cm-hero__title-accent">Marketing</span> Services</h1>
        <p className="cm-hero__subtitle">Strategic Content That Drives Authority, Engagement &amp; Revenue</p>
        <p className="cm-hero__desc">mTouch Labs delivers structured content marketing services designed to build brand authority, improve search visibility, and generate measurable business growth. Authority is earned through value-driven communication.</p>
      </div></section>

      <section className="cm-about"><div className="cm-container"><div className="cm-about__grid">
        <div className="cm-about__content cm-animate--left">
          <h2 className="cm-about__heading">What Are <span className="cm-text-accent">Content Marketing</span> Services?</h2>
          <p className="cm-about__text">Content marketing services involve creating and distributing strategically planned content that attracts qualified audiences and guides them toward conversion — including search-aligned strategy, topic authority, multi-format creation, and funnel mapping.</p>
          <p className="cm-about__text">Our content work directly supports <a href="/seo-services" style={{color:"#2563eb",textDecoration:"none",fontWeight:600}}>SEO</a> rankings and <a href="/conversion-rate-optimization-services" style={{color:"#2563eb",textDecoration:"none",fontWeight:600}}>CRO</a> performance for comprehensive digital growth.</p>
          <p className="cm-about__text">Combined with <a href="/social-media-marketing-services" style={{color:"#2563eb",textDecoration:"none",fontWeight:600}}>social media marketing</a> and <a href="/email-marketing-services" style={{color:"#2563eb",textDecoration:"none",fontWeight:600}}>email marketing</a>, we create content ecosystems that build long-term digital equity.</p>
        </div>
        <div className="cm-stats cm-animate--right">
          <div className="cm-stat"><span className="cm-stat__icon">📝</span><span className="cm-stat__label">Content Strategy</span></div>
          <div className="cm-stat"><span className="cm-stat__icon">🔍</span><span className="cm-stat__label">SEO Alignment</span></div>
          <div className="cm-stat"><span className="cm-stat__icon">🏆</span><span className="cm-stat__label">Authority Building</span></div>
          <div className="cm-stat"><span className="cm-stat__icon">📈</span><span className="cm-stat__label">Lead Generation</span></div>
        </div>
      </div></div></section>

      <section className="cm-whoweare"><div className="cm-container"><div className="cm-whoweare__grid">
        <div className="cm-whoweare__stats cm-animate--left">
          <div className="cm-stat cm-stat--dark"><span className="cm-stat__number">1000+</span><span className="cm-stat__label">Content Pieces</span></div>
          <div className="cm-stat cm-stat--dark"><span className="cm-stat__number">3x</span><span className="cm-stat__label">Organic Growth</span></div>
          <div className="cm-stat cm-stat--dark"><span className="cm-stat__number">B2B</span><span className="cm-stat__label">&amp; SaaS Focus</span></div>
          <div className="cm-stat cm-stat--dark"><span className="cm-stat__number">14+</span><span className="cm-stat__label">Years Experience</span></div>
        </div>
        <div className="cm-whoweare__content cm-animate--right">
          <h2 className="cm-whoweare__heading">Business Benefits of <span className="cm-text-accent">Content Marketing</span></h2>
          <p className="cm-whoweare__text">Content is a long-term growth asset:</p>
          <ul className="cm-checklist">
            <li className="cm-checklist__item"><span className="cm-checklist__icon">✓</span><span>Increased search visibility &amp; stronger authority</span></li>
            <li className="cm-checklist__item"><span className="cm-checklist__icon">✓</span><span>Higher audience engagement &amp; improved lead quality</span></li>
            <li className="cm-checklist__item"><span className="cm-checklist__icon">✓</span><span>Sustainable organic traffic &amp; enhanced brand trust</span></li>
            <li className="cm-checklist__item"><span className="cm-checklist__icon">✓</span><span>B2B &amp; SaaS expertise with thought leadership</span></li>
            <li className="cm-checklist__item"><span className="cm-checklist__icon">✓</span><span>Integration with SEO &amp; CRO strategies</span></li>
          </ul>
        </div>
      </div></div></section>

      <section className="cm-services"><div className="cm-container">
        <div className="cm-services__header cm-animate"><h2 className="cm-services__title">Our Content <span className="cm-text-accent">Capabilities</span></h2><p className="cm-services__subtitle">From strategy to performance optimization</p></div>
        <div className="cm-services__grid cm-stagger">
          <div className="cm-service-card cm-animate--scale"><span className="cm-service-card__badge">01</span><h4 className="cm-service-card__title">Strategy &amp; Planning</h4><p className="cm-service-card__text">Audience segmentation, keyword clusters, topic authority mapping, competitive gap analysis, and content calendar development.</p></div>
          <div className="cm-service-card cm-animate--scale"><span className="cm-service-card__badge">02</span><h4 className="cm-service-card__title">SEO Content</h4><p className="cm-service-card__text">Long-form articles, service page content, landing page copy, knowledge base resources, and educational guides structured for rankings.</p></div>
          <div className="cm-service-card cm-animate--scale"><span className="cm-service-card__badge">03</span><h4 className="cm-service-card__title">B2B &amp; SaaS Content</h4><p className="cm-service-card__text">Thought leadership, product education, case studies, whitepaper frameworks, and industry-focused insights for credibility.</p></div>
          <div className="cm-service-card cm-animate--scale"><span className="cm-service-card__badge">04</span><h4 className="cm-service-card__title">Conversion Copywriting</h4><p className="cm-service-card__text">Value propositions, CTA clarity, benefit-driven communication, and trust-building messaging to influence decision-making.</p></div>
          <div className="cm-service-card cm-service-card--wide cm-animate--scale"><span className="cm-service-card__badge">05</span><h4 className="cm-service-card__title">Distribution &amp; Analytics</h4><p className="cm-service-card__text">Organic distribution, email integration, social repurposing, campaign-aligned publishing, organic traffic growth, and conversion performance tracking.</p></div>
        </div>
      </div></section>

      <section className="cm-delivery"><div className="cm-container">
        <h2 className="cm-delivery__heading cm-animate">Our Content <span className="cm-text-accent">Framework</span></h2>
        <p className="cm-delivery__text">Structured cycle ensuring continuous improvement.</p>
        <div className="cm-delivery__steps">
          <div className="cm-step"><span className="cm-step__circle">Research</span></div><span className="cm-step__arrow">→</span>
          <div className="cm-step"><span className="cm-step__circle">Planning</span></div><span className="cm-step__arrow">→</span>
          <div className="cm-step"><span className="cm-step__circle">Creation</span></div><span className="cm-step__arrow">→</span>
          <div className="cm-step"><span className="cm-step__circle">Optimization</span></div><span className="cm-step__arrow">→</span>
          <div className="cm-step"><span className="cm-step__circle">Distribution</span></div><span className="cm-step__arrow">→</span>
          <div className="cm-step"><span className="cm-step__circle">Monitor</span></div><span className="cm-step__arrow">→</span>
          <div className="cm-step"><span className="cm-step__circle">Refine</span></div>
        </div>
      </div></section>

      <section className="cm-reliable"><div className="cm-container"><div className="cm-reliable__inner cm-animate">
        <h2 className="cm-reliable__heading">Why Choose <span className="cm-text-accent">mTouch Labs</span>?</h2>
        <p className="cm-reliable__text">We create content ecosystems — not isolated articles.</p>
        <div className="cm-reliable__pillars">
          <div className="cm-pillar"><span className="cm-pillar__dot"></span><span className="cm-pillar__label">Search-aligned architecture</span></div>
          <div className="cm-pillar"><span className="cm-pillar__dot"></span><span className="cm-pillar__label">B2B &amp; SaaS expertise</span></div>
          <div className="cm-pillar"><span className="cm-pillar__dot"></span><span className="cm-pillar__label">Data-driven optimization</span></div>
          <div className="cm-pillar"><span className="cm-pillar__dot"></span><span className="cm-pillar__label">SEO &amp; CRO integration</span></div>
          <div className="cm-pillar"><span className="cm-pillar__dot"></span><span className="cm-pillar__label">Scalable planning models</span></div>
          <div className="cm-pillar"><span className="cm-pillar__dot"></span><span className="cm-pillar__label">Long-term authority focus</span></div>
        </div>
      </div></div></section>

      <section className="cm-industries"><div className="cm-container">
        <h2 className="cm-industries__title cm-animate">Industries We <span className="cm-text-accent">Support</span></h2>
        <div className="cm-industries__grid cm-stagger">
          <div className="cm-industry cm-animate--scale"><span className="cm-industry__icon">💻</span><h4 className="cm-industry__title">Technology &amp; SaaS</h4></div>
          <div className="cm-industry cm-animate--scale"><span className="cm-industry__icon">💳</span><h4 className="cm-industry__title">Financial Services</h4></div>
          <div className="cm-industry cm-animate--scale"><span className="cm-industry__icon">🏥</span><h4 className="cm-industry__title">Healthcare</h4></div>
          <div className="cm-industry cm-animate--scale"><span className="cm-industry__icon">🛒</span><h4 className="cm-industry__title">eCommerce</h4></div>
          <div className="cm-industry cm-animate--scale"><span className="cm-industry__icon">🏢</span><h4 className="cm-industry__title">Enterprise B2B</h4></div>
          <div className="cm-industry cm-animate--scale"><span className="cm-industry__icon">🚀</span><h4 className="cm-industry__title">Startup Growth</h4></div>
        </div>
      </div></section>

      <section className="cm-tech"><div className="cm-container"><div className="cm-tech__grid">
        <div className="cm-animate--left">
          <h2 className="cm-tech__heading">Content <span className="cm-text-accent">Technology Stack</span></h2>
          <p className="cm-tech__text">Enterprise content and analytics platforms.</p>
          <div className="cm-tech__tags">
            {["SEMrush","Ahrefs","Surfer SEO","Clearscope","MarketMuse","Google Analytics 4","Google Search Console","WordPress","Next.js","HubSpot","Mailchimp","Grammarly","Hemingway","Canva","Notion","Trello","BuzzSumo","Hootsuite"].map((t)=>(<span key={t} className="cm-tag">{t}</span>))}
          </div>
        </div>
        <div className="cm-tech__stats cm-animate--right">
          <div className="cm-stat cm-stat--dark"><span className="cm-stat__number">1000+</span><span className="cm-stat__label">Content Pieces</span></div>
          <div className="cm-stat cm-stat--dark"><span className="cm-stat__number">3x</span><span className="cm-stat__label">Organic Growth</span></div>
          <div className="cm-stat cm-stat--dark"><span className="cm-stat__number">B2B</span><span className="cm-stat__label">Expertise</span></div>
          <div className="cm-stat cm-stat--dark"><span className="cm-stat__number">14+</span><span className="cm-stat__label">Years</span></div>
        </div>
      </div></div></section>

      <section className="cm-faq"><div className="cm-container"><div className="cm-faq__wrapper">
        <h3 className="cm-faq__heading cm-animate">Frequently Asked <span className="cm-text-accent">Questions</span></h3>
        <p className="cm-faq__subtext">Everything about content marketing</p>
        <div className="cm-faq__list">
          <details className="cm-faq__item"><summary className="cm-faq__question"><span>What are content marketing services?</span><span className="cm-faq__chevron"></span></summary><div className="cm-faq__answer"><p>Content marketing services involve creating strategic, optimized content that attracts audiences, builds authority, and drives conversions.</p></div></details>
          <details className="cm-faq__item"><summary className="cm-faq__question"><span>How does content support SEO?</span><span className="cm-faq__chevron"></span></summary><div className="cm-faq__answer"><p>Optimized content improves keyword rankings, topical authority, and <a href="/seo-services" style={{color:"#2563eb",textDecoration:"none",fontWeight:600}}>organic traffic growth</a>.</p></div></details>
          <details className="cm-faq__item"><summary className="cm-faq__question"><span>How long does content marketing take?</span><span className="cm-faq__chevron"></span></summary><div className="cm-faq__answer"><p>Content marketing typically shows measurable organic growth within several months, depending on competition and consistency.</p></div></details>
          <details className="cm-faq__item"><summary className="cm-faq__question"><span>Can content marketing increase leads?</span><span className="cm-faq__chevron"></span></summary><div className="cm-faq__answer"><p>Yes. Strategic content aligned with user intent improves engagement and <a href="/conversion-rate-optimization-services" style={{color:"#2563eb",textDecoration:"none",fontWeight:600}}>conversion rates</a>.</p></div></details>
        </div>
      </div></div></section>

      <section className="cm-cta"><div className="cm-container"><div className="cm-cta__inner cm-animate--scale">
        <h2 className="cm-cta__heading">Build Your <span className="cm-text-accent">Content Strategy</span></h2>
        <p className="cm-cta__text">Let&apos;s discuss how content marketing can build your authority and drive measurable growth.</p>
        <button type="button" className="cm-cta__button js-open-modal">Start Content Marketing</button>
      </div></div></section>
    </>
  );
}