import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Social Media Marketing Services | mTouch Labs",
  description: "mTouch Labs provides social media marketing services including strategy, paid social advertising, and engagement-driven brand growth.",
  keywords: ["social media marketing services","social media management","paid social advertising","social media strategy","brand growth","social media company"],
  alternates: { canonical: "https://www.mtouchlabs.com/social-media-marketing-services" },
  openGraph: { title: "Social Media Marketing Services | mTouch Labs", description: "Strategic social media marketing and paid advertising for measurable brand growth.", url: "https://www.mtouchlabs.com/social-media-marketing-services", siteName: "mTouch Labs", type: "website" },
  twitter: { card: "summary_large_image", title: "Social Media Marketing Services | mTouch Labs", description: "Performance-focused global social media marketing strategies." },
};

export default function SocialMediaMarketing() {
  return (
    <>
      <section className="sm-hero"><div className="sm-hero__inner">
        <Breadcrumb pagePath="/social-media-marketing-services" />
        <h1 className="sm-hero__title">Social Media <span className="sm-hero__title-accent">Marketing</span> Services</h1>
        <p className="sm-hero__subtitle">Strategic Brand Growth Across Global Social Platforms</p>
        <p className="sm-hero__desc">mTouch Labs delivers structured social media marketing services designed to strengthen brand visibility, audience engagement, and measurable growth across digital platforms. Strategy creates impact.</p>
      </div></section>

      <section className="sm-about"><div className="sm-container"><div className="sm-about__grid">
        <div className="sm-about__content sm-animate--left">
          <h2 className="sm-about__heading">What Are <span className="sm-text-accent">Social Media Marketing</span> Services?</h2>
          <p className="sm-about__text">Social media marketing services involve planning, managing, and optimizing brand presence across platforms to increase awareness, engagement, and conversions — including audience research, content planning, paid advertising, and performance analytics.</p>
          <p className="sm-about__text">Our social strategies integrate with <a href="/content-marketing-services" style={{color:"#2563eb",textDecoration:"none",fontWeight:600}}>content marketing</a> and <a href="/seo-services" style={{color:"#2563eb",textDecoration:"none",fontWeight:600}}>SEO</a> for comprehensive digital growth.</p>
          <p className="sm-about__text">Combined with <a href="/ppc-advertising-services" style={{color:"#2563eb",textDecoration:"none",fontWeight:600}}>paid media</a> and <a href="/performance-marketing-services" style={{color:"#2563eb",textDecoration:"none",fontWeight:600}}>performance marketing</a>, social campaigns amplify high-value audiences and drive measurable business outcomes.</p>
        </div>
        <div className="sm-stats sm-animate--right">
          <div className="sm-stat"><span className="sm-stat__icon">📱</span><span className="sm-stat__label">Platform Strategy</span></div>
          <div className="sm-stat"><span className="sm-stat__icon">🎯</span><span className="sm-stat__label">Paid Social</span></div>
          <div className="sm-stat"><span className="sm-stat__icon">💬</span><span className="sm-stat__label">Community Growth</span></div>
          <div className="sm-stat"><span className="sm-stat__icon">📊</span><span className="sm-stat__label">Analytics</span></div>
        </div>
      </div></div></section>

      <section className="sm-whoweare"><div className="sm-container"><div className="sm-whoweare__grid">
        <div className="sm-whoweare__stats sm-animate--left">
          <div className="sm-stat sm-stat--dark"><span className="sm-stat__number">300+</span><span className="sm-stat__label">Campaigns Managed</span></div>
          <div className="sm-stat sm-stat--dark"><span className="sm-stat__number">5x</span><span className="sm-stat__label">Avg Engagement Lift</span></div>
          <div className="sm-stat sm-stat--dark"><span className="sm-stat__number">Global</span><span className="sm-stat__label">Platform Reach</span></div>
          <div className="sm-stat sm-stat--dark"><span className="sm-stat__number">14+</span><span className="sm-stat__label">Years Experience</span></div>
        </div>
        <div className="sm-whoweare__content sm-animate--right">
          <h2 className="sm-whoweare__heading">Business Benefits of <span className="sm-text-accent">Social Media</span></h2>
          <p className="sm-whoweare__text">Social platforms influence modern buying decisions:</p>
          <ul className="sm-checklist">
            <li className="sm-checklist__item"><span className="sm-checklist__icon">✓</span><span>Increased brand visibility &amp; higher engagement</span></li>
            <li className="sm-checklist__item"><span className="sm-checklist__icon">✓</span><span>Improved customer trust &amp; better campaign reach</span></li>
            <li className="sm-checklist__item"><span className="sm-checklist__icon">✓</span><span>Data-backed growth insights &amp; multi-channel expansion</span></li>
            <li className="sm-checklist__item"><span className="sm-checklist__icon">✓</span><span>B2B thought leadership &amp; executive branding</span></li>
            <li className="sm-checklist__item"><span className="sm-checklist__icon">✓</span><span>Integration with SEO &amp; content marketing</span></li>
          </ul>
        </div>
      </div></div></section>

      <section className="sm-services"><div className="sm-container">
        <div className="sm-services__header sm-animate"><h2 className="sm-services__title">Our Social Media <span className="sm-text-accent">Capabilities</span></h2><p className="sm-services__subtitle">From strategy to scalable brand growth</p></div>
        <div className="sm-services__grid sm-stagger">
          <div className="sm-service-card sm-animate--scale"><span className="sm-service-card__badge">01</span><h4 className="sm-service-card__title">Strategy Development</h4><p className="sm-service-card__text">Platform selection, target audience alignment, content positioning, competitive benchmarking, and engagement objectives planning.</p></div>
          <div className="sm-service-card sm-animate--scale"><span className="sm-service-card__badge">02</span><h4 className="sm-service-card__title">Content &amp; Brand Positioning</h4><p className="sm-service-card__text">Brand storytelling, educational engagement, authority positioning, campaign-based messaging, and product awareness strategies.</p></div>
          <div className="sm-service-card sm-animate--scale"><span className="sm-service-card__badge">03</span><h4 className="sm-service-card__title">Paid Social Advertising</h4><p className="sm-service-card__text">Performance campaigns across Meta, LinkedIn, emerging platforms, and retargeting to amplify high-value audiences.</p></div>
          <div className="sm-service-card sm-animate--scale"><span className="sm-service-card__badge">04</span><h4 className="sm-service-card__title">Community &amp; Engagement</h4><p className="sm-service-card__text">Engagement optimization, audience interaction, reputation management, brand trust reinforcement, and loyalty building.</p></div>
          <div className="sm-service-card sm-service-card--wide sm-animate--scale"><span className="sm-service-card__badge">05</span><h4 className="sm-service-card__title">B2B &amp; Enterprise Social</h4><p className="sm-service-card__text">Thought leadership, executive brand amplification, industry-focused campaigns, LinkedIn authority building, and employer branding support.</p></div>
        </div>
      </div></section>

      <section className="sm-delivery"><div className="sm-container">
        <h2 className="sm-delivery__heading sm-animate">Our Social Media <span className="sm-text-accent">Framework</span></h2>
        <p className="sm-delivery__text">Consistency and measurement drive results.</p>
        <div className="sm-delivery__steps">
          <div className="sm-step"><span className="sm-step__circle">Strategy</span></div><span className="sm-step__arrow">→</span>
          <div className="sm-step"><span className="sm-step__circle">Content</span></div><span className="sm-step__arrow">→</span>
          <div className="sm-step"><span className="sm-step__circle">Deploy</span></div><span className="sm-step__arrow">→</span>
          <div className="sm-step"><span className="sm-step__circle">Amplify</span></div><span className="sm-step__arrow">→</span>
          <div className="sm-step"><span className="sm-step__circle">Monitor</span></div><span className="sm-step__arrow">→</span>
          <div className="sm-step"><span className="sm-step__circle">Refine</span></div>
        </div>
      </div></section>

      <section className="sm-reliable"><div className="sm-container"><div className="sm-reliable__inner sm-animate">
        <h2 className="sm-reliable__heading">Why Choose <span className="sm-text-accent">mTouch Labs</span>?</h2>
        <p className="sm-reliable__text">We align brand presence with measurable business growth.</p>
        <div className="sm-reliable__pillars">
          <div className="sm-pillar"><span className="sm-pillar__dot"></span><span className="sm-pillar__label">Strategy-first planning</span></div>
          <div className="sm-pillar"><span className="sm-pillar__dot"></span><span className="sm-pillar__label">Data-driven paid amplification</span></div>
          <div className="sm-pillar"><span className="sm-pillar__dot"></span><span className="sm-pillar__label">B2B &amp; SaaS expertise</span></div>
          <div className="sm-pillar"><span className="sm-pillar__dot"></span><span className="sm-pillar__label">SEO &amp; content integration</span></div>
          <div className="sm-pillar"><span className="sm-pillar__dot"></span><span className="sm-pillar__label">Transparent analytics</span></div>
          <div className="sm-pillar"><span className="sm-pillar__dot"></span><span className="sm-pillar__label">Scalable global execution</span></div>
        </div>
      </div></div></section>

      <section className="sm-industries"><div className="sm-container">
        <h2 className="sm-industries__title sm-animate">Industries We <span className="sm-text-accent">Support</span></h2>
        <div className="sm-industries__grid sm-stagger">
          <div className="sm-industry sm-animate--scale"><span className="sm-industry__icon">💻</span><h4 className="sm-industry__title">Technology &amp; SaaS</h4></div>
          <div className="sm-industry sm-animate--scale"><span className="sm-industry__icon">💳</span><h4 className="sm-industry__title">Financial Services</h4></div>
          <div className="sm-industry sm-animate--scale"><span className="sm-industry__icon">🏥</span><h4 className="sm-industry__title">Healthcare</h4></div>
          <div className="sm-industry sm-animate--scale"><span className="sm-industry__icon">🛒</span><h4 className="sm-industry__title">eCommerce</h4></div>
          <div className="sm-industry sm-animate--scale"><span className="sm-industry__icon">🏢</span><h4 className="sm-industry__title">Enterprise B2B</h4></div>
          <div className="sm-industry sm-animate--scale"><span className="sm-industry__icon">🚀</span><h4 className="sm-industry__title">Startup Growth</h4></div>
        </div>
      </div></section>

      <section className="sm-tech"><div className="sm-container"><div className="sm-tech__grid">
        <div className="sm-animate--left">
          <h2 className="sm-tech__heading">Social Media <span className="sm-text-accent">Technology Stack</span></h2>
          <p className="sm-tech__text">Enterprise social management and analytics platforms.</p>
          <div className="sm-tech__tags">
            {["Meta Business Suite","LinkedIn Campaign Manager","Hootsuite","Buffer","Sprout Social","Later","Canva","Adobe Creative Suite","Google Analytics 4","Facebook Pixel","Meta Ads Manager","LinkedIn Analytics","Brandwatch","Mention","BuzzSumo","Sprinklr","HubSpot Social","Zapier"].map((t)=>(<span key={t} className="sm-tag">{t}</span>))}
          </div>
        </div>
        <div className="sm-tech__stats sm-animate--right">
          <div className="sm-stat sm-stat--dark"><span className="sm-stat__number">300+</span><span className="sm-stat__label">Campaigns</span></div>
          <div className="sm-stat sm-stat--dark"><span className="sm-stat__number">5x</span><span className="sm-stat__label">Engagement</span></div>
          <div className="sm-stat sm-stat--dark"><span className="sm-stat__number">18+</span><span className="sm-stat__label">Tools</span></div>
          <div className="sm-stat sm-stat--dark"><span className="sm-stat__number">14+</span><span className="sm-stat__label">Years</span></div>
        </div>
      </div></div></section>

      <section className="sm-faq"><div className="sm-container"><div className="sm-faq__wrapper">
        <h3 className="sm-faq__heading sm-animate">Frequently Asked <span className="sm-text-accent">Questions</span></h3>
        <p className="sm-faq__subtext">Everything about social media marketing</p>
        <div className="sm-faq__list">
          <details className="sm-faq__item"><summary className="sm-faq__question"><span>What are social media marketing services?</span><span className="sm-faq__chevron"></span></summary><div className="sm-faq__answer"><p>Social media marketing services involve managing and optimizing brand presence across digital platforms to increase engagement and visibility.</p></div></details>
          <details className="sm-faq__item"><summary className="sm-faq__question"><span>Is paid advertising necessary?</span><span className="sm-faq__chevron"></span></summary><div className="sm-faq__answer"><p>Paid campaigns significantly enhance reach and accelerate growth when combined with strong <a href="/content-marketing-services" style={{color:"#2563eb",textDecoration:"none",fontWeight:600}}>content strategy</a>.</p></div></details>
          <details className="sm-faq__item"><summary className="sm-faq__question"><span>Which platforms do you manage?</span><span className="sm-faq__chevron"></span></summary><div className="sm-faq__answer"><p>We manage global platforms including Meta, LinkedIn, and other relevant social networks based on business objectives.</p></div></details>
          <details className="sm-faq__item"><summary className="sm-faq__question"><span>Can social media generate leads?</span><span className="sm-faq__chevron"></span></summary><div className="sm-faq__answer"><p>Yes. Structured social campaigns drive website traffic, engagement, and qualified leads through <a href="/digital-marketing-solutions" style={{color:"#2563eb",textDecoration:"none",fontWeight:600}}>integrated strategies</a>.</p></div></details>
        </div>
      </div></div></section>

      <section className="sm-cta"><div className="sm-container"><div className="sm-cta__inner sm-animate--scale">
        <h2 className="sm-cta__heading">Grow Your <span className="sm-text-accent">Social Presence</span></h2>
        <p className="sm-cta__text">Let&apos;s discuss how social media marketing can strengthen your brand and drive measurable growth.</p>
        <button type="button" className="sm-cta__button js-open-modal">Start Social Strategy</button>
      </div></div></section>
    </>
  );
}