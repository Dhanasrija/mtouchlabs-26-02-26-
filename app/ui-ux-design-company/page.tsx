import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "UI/UX Design Company | User Experience Experts | mTouch Labs",
  description: "mTouch Labs is a UI/UX design company delivering user-centered design, research-driven interfaces, and conversion-focused digital experiences.",
  keywords: ["UI/UX design company","UX design services","user experience design","UI design agency","conversion-focused design","user interface design company"],
  alternates: { canonical: "https://www.mtouchlabs.com/ui-ux-design-company" },
  openGraph: { title: "UI/UX Design Company | mTouch Labs", description: "Professional UI and UX design services focused on usability, engagement, and digital growth.", url: "https://www.mtouchlabs.com/ui-ux-design-company", siteName: "mTouch Labs", type: "website" },
  twitter: { card: "summary_large_image", title: "UI/UX Design Company | mTouch Labs", description: "Research-driven UI/UX design services built for engagement and performance." },
};

export default function UIUXDesignCompany() {
  return (
    <>
      <section className="ux-hero"><div className="ux-hero__inner">
        <Breadcrumb pagePath="/ui-ux-design-company" />
        <h1 className="ux-hero__title"><span className="ux-hero__title-accent">UI/UX</span> Design Company</h1>
        <p className="ux-hero__subtitle">Designing Intuitive Digital Experiences That Convert</p>
        <p className="ux-hero__desc">mTouch Labs is a performance-focused UI/UX design company delivering user-centered digital experiences that improve engagement, usability, and conversion rates. Great design is not just visual — it&apos;s functional, measurable, and aligned with business outcomes.</p>
      </div></section>

      <section className="ux-about"><div className="ux-container"><div className="ux-about__grid">
        <div className="ux-about__content ux-animate--left">
          <h2 className="ux-about__heading">What Does a <span className="ux-text-accent">UI/UX Design</span> Company Do?</h2>
          <p className="ux-about__text">A professional UI/UX design company focuses on understanding user behavior, mapping user journeys, and creating intuitive interfaces that enhance digital experiences — including user research, wireframing, prototyping, interaction design, visual interface design, and usability testing.</p>
          <p className="ux-about__text">Our <a href="/ux-research-services" style={{color: "#2563eb", textDecoration: "none", fontWeight: 600}}>UX research services</a> ensure design decisions are backed by evidence, while our <a href="/design-system-development" style={{color: "#2563eb", textDecoration: "none", fontWeight: 600}}>design systems</a> maintain consistency across platforms.</p>
          <p className="ux-about__text">We combine strategic research with <a href="/product-design-services" style={{color: "#2563eb", textDecoration: "none", fontWeight: 600}}>product design</a> expertise to create seamless digital interactions across web, mobile, and enterprise platforms.</p>
        </div>
        <div className="ux-stats ux-animate--right">
          <div className="ux-stat"><span className="ux-stat__icon">🔬</span><span className="ux-stat__label">User Research</span></div>
          <div className="ux-stat"><span className="ux-stat__icon">📐</span><span className="ux-stat__label">Wireframing</span></div>
          <div className="ux-stat"><span className="ux-stat__icon">🎨</span><span className="ux-stat__label">Visual Design</span></div>
          <div className="ux-stat"><span className="ux-stat__icon">🧪</span><span className="ux-stat__label">Usability Testing</span></div>
        </div>
      </div></div></section>

      <section className="ux-whoweare"><div className="ux-container"><div className="ux-whoweare__grid">
        <div className="ux-whoweare__stats ux-animate--left">
          <div className="ux-stat ux-stat--dark"><span className="ux-stat__number">1500+</span><span className="ux-stat__label">Designs Delivered</span></div>
          <div className="ux-stat ux-stat--dark"><span className="ux-stat__number">40%</span><span className="ux-stat__label">Avg Conversion Lift</span></div>
          <div className="ux-stat ux-stat--dark"><span className="ux-stat__number">14+</span><span className="ux-stat__label">Years Experience</span></div>
          <div className="ux-stat ux-stat--dark"><span className="ux-stat__number">A11y</span><span className="ux-stat__label">Accessibility First</span></div>
        </div>
        <div className="ux-whoweare__content ux-animate--right">
          <h2 className="ux-whoweare__heading">Business Impact of <span className="ux-text-accent">Strong UI/UX</span></h2>
          <p className="ux-whoweare__text">User experience directly influences business performance:</p>
          <ul className="ux-checklist">
            <li className="ux-checklist__item"><span className="ux-checklist__icon">✓</span><span>Higher user engagement &amp; improved conversion rates</span></li>
            <li className="ux-checklist__item"><span className="ux-checklist__icon">✓</span><span>Reduced bounce rate &amp; increased product adoption</span></li>
            <li className="ux-checklist__item"><span className="ux-checklist__icon">✓</span><span>Better customer satisfaction &amp; stronger brand perception</span></li>
            <li className="ux-checklist__item"><span className="ux-checklist__icon">✓</span><span>Research-driven design strategy with conversion focus</span></li>
            <li className="ux-checklist__item"><span className="ux-checklist__icon">✓</span><span>Cross-platform expertise with accessibility-first approach</span></li>
          </ul>
        </div>
      </div></div></section>

      <section className="ux-services"><div className="ux-container">
        <div className="ux-services__header ux-animate"><h2 className="ux-services__title">Our UI/UX <span className="ux-text-accent">Design Services</span></h2><p className="ux-services__subtitle">From research to refinement, every design is intentional</p></div>
        <div className="ux-services__grid ux-stagger">
          <div className="ux-service-card ux-animate--scale"><span className="ux-service-card__badge">01</span><h4 className="ux-service-card__title">UX Strategy &amp; Research</h4><p className="ux-service-card__text">Target audience behavior analysis, business objectives alignment, user pain point mapping, conversion pathway design, and competitive benchmarking.</p></div>
          <div className="ux-service-card ux-animate--scale"><span className="ux-service-card__badge">02</span><h4 className="ux-service-card__title">Wireframing &amp; Prototyping</h4><p className="ux-service-card__text">Low-fidelity wireframes, interactive prototypes, user journey maps, and information architecture structures to validate usability before development.</p></div>
          <div className="ux-service-card ux-animate--scale"><span className="ux-service-card__badge">03</span><h4 className="ux-service-card__title">UI Design</h4><p className="ux-service-card__text">Clean visual hierarchy, brand-consistent design systems, responsive layouts, micro-interactions, and accessibility standards for intuitive interfaces.</p></div>
          <div className="ux-service-card ux-animate--scale"><span className="ux-service-card__badge">04</span><h4 className="ux-service-card__title">Product Design</h4><p className="ux-service-card__text">SaaS dashboard interfaces, enterprise application design, mobile app UI/UX, eCommerce experience, and admin panel interfaces optimized for clarity.</p></div>
          <div className="ux-service-card ux-service-card--wide ux-animate--scale"><span className="ux-service-card__badge">05</span><h4 className="ux-service-card__title">Usability Testing &amp; Optimization</h4><p className="ux-service-card__text">A/B testing, interaction flow analysis, heatmap evaluation, and performance-based UX improvements driven by real user behavior data.</p></div>
        </div>
      </div></section>

      <section className="ux-delivery"><div className="ux-container">
        <h2 className="ux-delivery__heading ux-animate">Our UI/UX <span className="ux-text-accent">Design Process</span></h2>
        <p className="ux-delivery__text">Structured process ensuring clarity and measurable impact.</p>
        <div className="ux-delivery__steps">
          <div className="ux-step"><span className="ux-step__circle">Research</span></div><span className="ux-step__arrow">→</span>
          <div className="ux-step"><span className="ux-step__circle">Architecture</span></div><span className="ux-step__arrow">→</span>
          <div className="ux-step"><span className="ux-step__circle">Wireframing</span></div><span className="ux-step__arrow">→</span>
          <div className="ux-step"><span className="ux-step__circle">Prototyping</span></div><span className="ux-step__arrow">→</span>
          <div className="ux-step"><span className="ux-step__circle">Visual Design</span></div><span className="ux-step__arrow">→</span>
          <div className="ux-step"><span className="ux-step__circle">Testing</span></div><span className="ux-step__arrow">→</span>
          <div className="ux-step"><span className="ux-step__circle">Handoff</span></div>
        </div>
      </div></section>

      <section className="ux-reliable"><div className="ux-container"><div className="ux-reliable__inner ux-animate">
        <h2 className="ux-reliable__heading">Why Choose <span className="ux-text-accent">mTouch Labs</span>?</h2>
        <p className="ux-reliable__text">We design experiences that connect users with your brand seamlessly.</p>
        <div className="ux-reliable__pillars">
          <div className="ux-pillar"><span className="ux-pillar__dot"></span><span className="ux-pillar__label">Research-driven design strategy</span></div>
          <div className="ux-pillar"><span className="ux-pillar__dot"></span><span className="ux-pillar__label">Conversion-focused design systems</span></div>
          <div className="ux-pillar"><span className="ux-pillar__dot"></span><span className="ux-pillar__label">Cross-platform expertise</span></div>
          <div className="ux-pillar"><span className="ux-pillar__dot"></span><span className="ux-pillar__label">Accessibility-first approach</span></div>
          <div className="ux-pillar"><span className="ux-pillar__dot"></span><span className="ux-pillar__label">Dev team collaboration</span></div>
          <div className="ux-pillar"><span className="ux-pillar__dot"></span><span className="ux-pillar__label">Continuous optimization support</span></div>
        </div>
      </div></div></section>

      <section className="ux-industries"><div className="ux-container">
        <h2 className="ux-industries__title ux-animate">Industries We <span className="ux-text-accent">Serve</span></h2>
        <div className="ux-industries__grid ux-stagger">
          <div className="ux-industry ux-animate--scale"><span className="ux-industry__icon">💻</span><h4 className="ux-industry__title">SaaS &amp; Technology</h4></div>
          <div className="ux-industry ux-animate--scale"><span className="ux-industry__icon">💳</span><h4 className="ux-industry__title">FinTech &amp; Financial Services</h4></div>
          <div className="ux-industry ux-animate--scale"><span className="ux-industry__icon">🏥</span><h4 className="ux-industry__title">Healthcare &amp; HealthTech</h4></div>
          <div className="ux-industry ux-animate--scale"><span className="ux-industry__icon">🛒</span><h4 className="ux-industry__title">eCommerce &amp; Retail</h4></div>
          <div className="ux-industry ux-animate--scale"><span className="ux-industry__icon">🏠</span><h4 className="ux-industry__title">Real Estate</h4></div>
          <div className="ux-industry ux-animate--scale"><span className="ux-industry__icon">🏢</span><h4 className="ux-industry__title">Enterprise Applications</h4></div>
        </div>
      </div></section>

      <section className="ux-tech"><div className="ux-container"><div className="ux-tech__grid">
        <div className="ux-animate--left">
          <h2 className="ux-tech__heading">Design Tools <span className="ux-text-accent">We Use</span></h2>
          <p className="ux-tech__text">Industry-standard design and prototyping platforms.</p>
          <div className="ux-tech__tags">
            {["Figma","Sketch","Adobe XD","InVision","Framer","Zeplin","Miro","Hotjar","Google Analytics","Maze","Lottie","Storybook","Tailwind CSS","Material Design","Apple HIG","WCAG 2.1","Responsive Design","Design Tokens"].map((t)=>(<span key={t} className="ux-tag">{t}</span>))}
          </div>
        </div>
        <div className="ux-tech__stats ux-animate--right">
          <div className="ux-stat ux-stat--dark"><span className="ux-stat__number">18+</span><span className="ux-stat__label">Design Tools</span></div>
          <div className="ux-stat ux-stat--dark"><span className="ux-stat__number">A11y</span><span className="ux-stat__label">WCAG Compliant</span></div>
          <div className="ux-stat ux-stat--dark"><span className="ux-stat__number">1000+</span><span className="ux-stat__label">Projects Delivered</span></div>
          <div className="ux-stat ux-stat--dark"><span className="ux-stat__number">Cross</span><span className="ux-stat__label">Platform Design</span></div>
        </div>
      </div></div></section>

      <section className="ux-faq"><div className="ux-container"><div className="ux-faq__wrapper">
        <h3 className="ux-faq__heading ux-animate">Frequently Asked <span className="ux-text-accent">Questions</span></h3>
        <p className="ux-faq__subtext">Everything about UI/UX design</p>
        <div className="ux-faq__list">
          <details className="ux-faq__item"><summary className="ux-faq__question"><span>What is UI/UX design?</span><span className="ux-faq__chevron"></span></summary><div className="ux-faq__answer"><p>UI/UX design involves creating intuitive, user-friendly digital interfaces that improve usability, engagement, and conversion rates.</p></div></details>
          <details className="ux-faq__item"><summary className="ux-faq__question"><span>Why is UX important for business growth?</span><span className="ux-faq__chevron"></span></summary><div className="ux-faq__answer"><p>Better user experience increases retention, reduces friction, and improves conversion rates across digital platforms.</p></div></details>
          <details className="ux-faq__item"><summary className="ux-faq__question"><span>Do you provide UI/UX for mobile apps?</span><span className="ux-faq__chevron"></span></summary><div className="ux-faq__answer"><p>Yes. We design optimized interfaces for both <a href="/mobile-app-design-company" style={{color: "#2563eb", textDecoration: "none", fontWeight: 600}}>mobile</a> and web platforms.</p></div></details>
          <details className="ux-faq__item"><summary className="ux-faq__question"><span>Do you conduct usability testing?</span><span className="ux-faq__chevron"></span></summary><div className="ux-faq__answer"><p>Yes. We perform usability testing and continuous optimization to enhance performance based on real user behavior.</p></div></details>
        </div>
      </div></div></section>

      <section className="ux-cta"><div className="ux-container"><div className="ux-cta__inner ux-animate--scale">
        <h2 className="ux-cta__heading">Design Better <span className="ux-text-accent">Digital Experiences</span></h2>
        <p className="ux-cta__text">Let&apos;s discuss how our UI/UX design services can improve engagement and conversions.</p>
        <button type="button" className="ux-cta__button js-open-modal">Start Your Design Project</button>
      </div></div></section>
    </>
  );
}