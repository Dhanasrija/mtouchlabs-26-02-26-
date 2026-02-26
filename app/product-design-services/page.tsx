import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Product Design Services | mTouch Labs",
  description: "mTouch Labs delivers product design services including MVP design, SaaS product UX, and scalable digital product development strategies.",
  keywords: ["product design services","digital product design","SaaS product design","MVP design services","product UX design","product design company"],
  alternates: { canonical: "https://www.mtouchlabs.com/product-design-services" },
  openGraph: { title: "Product Design Services | mTouch Labs", description: "Strategic digital product design for scalable SaaS and enterprise platforms.", url: "https://www.mtouchlabs.com/product-design-services", siteName: "mTouch Labs", type: "website" },
  twitter: { card: "summary_large_image", title: "Product Design Services | mTouch Labs", description: "End-to-end product design solutions for startups and enterprises." },
};

export default function ProductDesignServices() {
  return (
    <>
      <section className="pd-hero"><div className="pd-hero__inner">
        <Breadcrumb pagePath="/product-design-services" />
        <h1 className="pd-hero__title">Product <span className="pd-hero__title-accent">Design</span> Services</h1>
        <p className="pd-hero__subtitle">Designing Digital Products That Solve Real Business Problems</p>
        <p className="pd-hero__desc">mTouch Labs provides strategic product design services that transform ideas into scalable, user-centered digital products. Design is not decoration — it&apos;s product strategy in action.</p>
      </div></section>

      <section className="pd-about"><div className="pd-container"><div className="pd-about__grid">
        <div className="pd-about__content pd-animate--left">
          <h2 className="pd-about__heading">What Are <span className="pd-text-accent">Product Design</span> Services?</h2>
          <p className="pd-about__text">Product design services involve the structured process of defining, designing, validating, and refining digital products to ensure usability, performance, and market fit — including problem validation, user behavior analysis, feature prioritization, experience architecture, and iterative refinement.</p>
          <p className="pd-about__text">Our <a href="/ui-ux-design-company" style={{color: "#2563eb", textDecoration: "none", fontWeight: 600}}>UI/UX design</a> expertise combined with <a href="/ux-research-services" style={{color: "#2563eb", textDecoration: "none", fontWeight: 600}}>UX research</a> ensures products are intuitive, scalable, and commercially viable.</p>
          <p className="pd-about__text">We create products with <a href="/design-system-development" style={{color: "#2563eb", textDecoration: "none", fontWeight: 600}}>scalable design systems</a> that support long-term growth and <a href="/custom-software-development-company" style={{color: "#2563eb", textDecoration: "none", fontWeight: 600}}>custom software development</a> alignment.</p>
        </div>
        <div className="pd-stats pd-animate--right">
          <div className="pd-stat"><span className="pd-stat__icon">🎯</span><span className="pd-stat__label">Product Strategy</span></div>
          <div className="pd-stat"><span className="pd-stat__icon">🚀</span><span className="pd-stat__label">MVP Design</span></div>
          <div className="pd-stat"><span className="pd-stat__icon">📊</span><span className="pd-stat__label">SaaS Product UX</span></div>
          <div className="pd-stat"><span className="pd-stat__icon">🧩</span><span className="pd-stat__label">Design Systems</span></div>
        </div>
      </div></div></section>

      <section className="pd-whoweare"><div className="pd-container"><div className="pd-whoweare__grid">
        <div className="pd-whoweare__stats pd-animate--left">
          <div className="pd-stat pd-stat--dark"><span className="pd-stat__number">1500+</span><span className="pd-stat__label">Products Designed</span></div>
          <div className="pd-stat pd-stat--dark"><span className="pd-stat__number">MVP</span><span className="pd-stat__label">Rapid Validation</span></div>
          <div className="pd-stat pd-stat--dark"><span className="pd-stat__number">SaaS</span><span className="pd-stat__label">Enterprise Focus</span></div>
          <div className="pd-stat pd-stat--dark"><span className="pd-stat__number">14+</span><span className="pd-stat__label">Years Experience</span></div>
        </div>
        <div className="pd-whoweare__content pd-animate--right">
          <h2 className="pd-whoweare__heading">Why Product Design <span className="pd-text-accent">Matters</span></h2>
          <p className="pd-whoweare__text">Strong product design directly influences revenue and growth:</p>
          <ul className="pd-checklist">
            <li className="pd-checklist__item"><span className="pd-checklist__icon">✓</span><span>Reduces product-market mismatch &amp; improves user adoption</span></li>
            <li className="pd-checklist__item"><span className="pd-checklist__icon">✓</span><span>Increases retention rates &amp; simplifies onboarding</span></li>
            <li className="pd-checklist__item"><span className="pd-checklist__icon">✓</span><span>Enhances usability &amp; supports long-term scalability</span></li>
            <li className="pd-checklist__item"><span className="pd-checklist__icon">✓</span><span>Strategy-driven methodology with data-informed decisions</span></li>
            <li className="pd-checklist__item"><span className="pd-checklist__icon">✓</span><span>Cross-functional collaboration with development teams</span></li>
          </ul>
        </div>
      </div></div></section>

      <section className="pd-services"><div className="pd-container">
        <div className="pd-services__header pd-animate"><h2 className="pd-services__title">Our Product <span className="pd-text-accent">Design Capabilities</span></h2><p className="pd-services__subtitle">From discovery to scalable design systems</p></div>
        <div className="pd-services__grid pd-stagger">
          <div className="pd-service-card pd-animate--scale"><span className="pd-service-card__badge">01</span><h4 className="pd-service-card__title">Product Discovery &amp; Strategy</h4><p className="pd-service-card__text">Business objectives clarification, target audience analysis, core value proposition, competitive positioning, and product roadmap alignment.</p></div>
          <div className="pd-service-card pd-animate--scale"><span className="pd-service-card__badge">02</span><h4 className="pd-service-card__title">MVP Design &amp; Validation</h4><p className="pd-service-card__text">Minimum viable product interfaces, lean feature sets, rapid validation prototypes, user feedback loops, and market-ready design systems.</p></div>
          <div className="pd-service-card pd-animate--scale"><span className="pd-service-card__badge">03</span><h4 className="pd-service-card__title">SaaS Product Design</h4><p className="pd-service-card__text">Dashboard systems, data-heavy interfaces, role-based environments, subscription workflow experiences, and modular component libraries.</p></div>
          <div className="pd-service-card pd-animate--scale"><span className="pd-service-card__badge">04</span><h4 className="pd-service-card__title">Experience Architecture</h4><p className="pd-service-card__text">Information hierarchy planning, user journey mapping, interaction flow optimization, and multi-device experience consistency.</p></div>
          <div className="pd-service-card pd-service-card--wide pd-animate--scale"><span className="pd-service-card__badge">05</span><h4 className="pd-service-card__title">Scalable Design Systems</h4><p className="pd-service-card__text">Reusable UI components, standardized design tokens, brand-aligned interface frameworks, and cross-platform design consistency for long-term growth.</p></div>
        </div>
      </div></section>

      <section className="pd-delivery"><div className="pd-container">
        <h2 className="pd-delivery__heading pd-animate">Our Product <span className="pd-text-accent">Design Process</span></h2>
        <p className="pd-delivery__text">Iterative approach ensuring alignment between users and business goals.</p>
        <div className="pd-delivery__steps">
          <div className="pd-step"><span className="pd-step__circle">Discovery</span></div><span className="pd-step__arrow">→</span>
          <div className="pd-step"><span className="pd-step__circle">User Research</span></div><span className="pd-step__arrow">→</span>
          <div className="pd-step"><span className="pd-step__circle">Mapping</span></div><span className="pd-step__arrow">→</span>
          <div className="pd-step"><span className="pd-step__circle">Wireframing</span></div><span className="pd-step__arrow">→</span>
          <div className="pd-step"><span className="pd-step__circle">Prototyping</span></div><span className="pd-step__arrow">→</span>
          <div className="pd-step"><span className="pd-step__circle">UI Design</span></div><span className="pd-step__arrow">→</span>
          <div className="pd-step"><span className="pd-step__circle">Refinement</span></div>
        </div>
      </div></section>

      <section className="pd-reliable"><div className="pd-container"><div className="pd-reliable__inner pd-animate">
        <h2 className="pd-reliable__heading">Why Choose <span className="pd-text-accent">mTouch Labs</span>?</h2>
        <p className="pd-reliable__text">We design products that perform — not just look good.</p>
        <div className="pd-reliable__pillars">
          <div className="pd-pillar"><span className="pd-pillar__dot"></span><span className="pd-pillar__label">Strategy-driven design methodology</span></div>
          <div className="pd-pillar"><span className="pd-pillar__dot"></span><span className="pd-pillar__label">Cross-functional dev collaboration</span></div>
          <div className="pd-pillar"><span className="pd-pillar__dot"></span><span className="pd-pillar__label">SaaS &amp; enterprise experience</span></div>
          <div className="pd-pillar"><span className="pd-pillar__dot"></span><span className="pd-pillar__label">Structured design systems</span></div>
          <div className="pd-pillar"><span className="pd-pillar__dot"></span><span className="pd-pillar__label">Data-informed decision-making</span></div>
          <div className="pd-pillar"><span className="pd-pillar__dot"></span><span className="pd-pillar__label">Long-term product optimization</span></div>
        </div>
      </div></div></section>

      <section className="pd-industries"><div className="pd-container">
        <h2 className="pd-industries__title pd-animate">Industries We <span className="pd-text-accent">Serve</span></h2>
        <div className="pd-industries__grid pd-stagger">
          <div className="pd-industry pd-animate--scale"><span className="pd-industry__icon">💻</span><h4 className="pd-industry__title">SaaS &amp; Technology</h4></div>
          <div className="pd-industry pd-animate--scale"><span className="pd-industry__icon">💳</span><h4 className="pd-industry__title">FinTech Applications</h4></div>
          <div className="pd-industry pd-animate--scale"><span className="pd-industry__icon">🏥</span><h4 className="pd-industry__title">Healthcare &amp; Digital Health</h4></div>
          <div className="pd-industry pd-animate--scale"><span className="pd-industry__icon">🛒</span><h4 className="pd-industry__title">eCommerce Platforms</h4></div>
          <div className="pd-industry pd-animate--scale"><span className="pd-industry__icon">🏢</span><h4 className="pd-industry__title">Enterprise Workflows</h4></div>
          <div className="pd-industry pd-animate--scale"><span className="pd-industry__icon">🚗</span><h4 className="pd-industry__title">On-Demand Products</h4></div>
        </div>
      </div></section>

      <section className="pd-tech"><div className="pd-container"><div className="pd-tech__grid">
        <div className="pd-animate--left">
          <h2 className="pd-tech__heading">Tools &amp; Frameworks <span className="pd-text-accent">We Use</span></h2>
          <p className="pd-tech__text">Enterprise product design and prototyping platforms.</p>
          <div className="pd-tech__tags">
            {["Figma","Sketch","Adobe XD","InVision","Framer","Miro","FigJam","Storybook","Zeplin","Design Tokens","Tailwind CSS","Material Design","Apple HIG","WCAG 2.1","Hotjar","Maze","Google Analytics","Lottie"].map((t)=>(<span key={t} className="pd-tag">{t}</span>))}
          </div>
        </div>
        <div className="pd-tech__stats pd-animate--right">
          <div className="pd-stat pd-stat--dark"><span className="pd-stat__number">1500+</span><span className="pd-stat__label">Products</span></div>
          <div className="pd-stat pd-stat--dark"><span className="pd-stat__number">MVP</span><span className="pd-stat__label">Rapid Design</span></div>
          <div className="pd-stat pd-stat--dark"><span className="pd-stat__number">SaaS</span><span className="pd-stat__label">Expertise</span></div>
          <div className="pd-stat pd-stat--dark"><span className="pd-stat__number">14+</span><span className="pd-stat__label">Years</span></div>
        </div>
      </div></div></section>

      <section className="pd-faq"><div className="pd-container"><div className="pd-faq__wrapper">
        <h3 className="pd-faq__heading pd-animate">Frequently Asked <span className="pd-text-accent">Questions</span></h3>
        <p className="pd-faq__subtext">Everything about product design services</p>
        <div className="pd-faq__list">
          <details className="pd-faq__item"><summary className="pd-faq__question"><span>What are product design services?</span><span className="pd-faq__chevron"></span></summary><div className="pd-faq__answer"><p>Product design services involve creating user-centered digital products through research, interface design, prototyping, and usability testing.</p></div></details>
          <details className="pd-faq__item"><summary className="pd-faq__question"><span>How is product design different from UI/UX design?</span><span className="pd-faq__chevron"></span></summary><div className="pd-faq__answer"><p>Product design focuses on overall product strategy, structure, and scalability, while <a href="/ui-ux-design-company" style={{color: "#2563eb", textDecoration: "none", fontWeight: 600}}>UI/UX design</a> focuses on interface and user experience.</p></div></details>
          <details className="pd-faq__item"><summary className="pd-faq__question"><span>Do you provide MVP design services?</span><span className="pd-faq__chevron"></span></summary><div className="pd-faq__answer"><p>Yes. We design and validate MVPs for startups and innovation teams with rapid prototyping.</p></div></details>
          <details className="pd-faq__item"><summary className="pd-faq__question"><span>Can product design support enterprise platforms?</span><span className="pd-faq__chevron"></span></summary><div className="pd-faq__answer"><p>Yes. We design scalable systems suitable for <a href="/enterprise-application-development-company" style={{color: "#2563eb", textDecoration: "none", fontWeight: 600}}>enterprise-grade</a> digital products.</p></div></details>
        </div>
      </div></div></section>

      <section className="pd-cta"><div className="pd-container"><div className="pd-cta__inner pd-animate--scale">
        <h2 className="pd-cta__heading">Design Your <span className="pd-text-accent">Digital Product</span> Today</h2>
        <p className="pd-cta__text">Let&apos;s discuss how product design can transform your idea into a scalable digital solution.</p>
        <button type="button" className="pd-cta__button js-open-modal">Start Product Design</button>
      </div></div></section>
    </>
  );
}