import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Design System Development | mTouch Labs",
  description: "mTouch Labs provides design system development services to create scalable UI frameworks, reusable components, and structured visual standards.",
  keywords: ["design system development","UI component library","design system services","scalable UI frameworks","design tokens","design system company"],
  alternates: { canonical: "https://www.mtouchlabs.com/design-system-development" },
  openGraph: { title: "Design System Development | mTouch Labs", description: "Enterprise-ready design system frameworks for consistent and scalable digital products.", url: "https://www.mtouchlabs.com/design-system-development", siteName: "mTouch Labs", type: "website" },
  twitter: { card: "summary_large_image", title: "Design System Development | mTouch Labs", description: "Reusable UI components and scalable design frameworks." },
};

export default function DesignSystemDevelopment() {
  return (
    <>
      <section className="dd-hero"><div className="dd-hero__inner">
        <Breadcrumb pagePath="/design-system-development" />
        <h1 className="dd-hero__title">Design System <span className="dd-hero__title-accent">Development</span></h1>
        <p className="dd-hero__subtitle">Building Structured UI Foundations for Scalable Digital Products</p>
        <p className="dd-hero__desc">mTouch Labs offers professional design system development services that establish unified visual and interaction standards across digital products. Consistency is not repetition — it is structured efficiency.</p>
      </div></section>

      <section className="dd-about"><div className="dd-container"><div className="dd-about__grid">
        <div className="dd-about__content dd-animate--left">
          <h2 className="dd-about__heading">What Is <span className="dd-text-accent">Design System</span> Development?</h2>
          <p className="dd-about__text">Design system development involves creating a comprehensive set of reusable UI components, style guidelines, and documentation standards that ensure consistency across web and mobile platforms — including component libraries, typography, color frameworks, layout principles, interaction patterns, and accessibility guidelines.</p>
          <p className="dd-about__text">Design systems support our <a href="/product-design-services" style={{color: "#2563eb", textDecoration: "none", fontWeight: 600}}>product design</a> and <a href="/ui-ux-design-company" style={{color: "#2563eb", textDecoration: "none", fontWeight: 600}}>UI/UX design</a> services by ensuring visual harmony at scale.</p>
          <p className="dd-about__text">The objective is to align design and development workflows under one structured system that integrates with <a href="/custom-software-development-company" style={{color: "#2563eb", textDecoration: "none", fontWeight: 600}}>custom software development</a> and <a href="/web-development-company" style={{color: "#2563eb", textDecoration: "none", fontWeight: 600}}>web development</a> projects.</p>
        </div>
        <div className="dd-stats dd-animate--right">
          <div className="dd-stat"><span className="dd-stat__icon">🧩</span><span className="dd-stat__label">Component Libraries</span></div>
          <div className="dd-stat"><span className="dd-stat__icon">🎨</span><span className="dd-stat__label">Visual Standards</span></div>
          <div className="dd-stat"><span className="dd-stat__icon">📱</span><span className="dd-stat__label">Cross-Platform</span></div>
          <div className="dd-stat"><span className="dd-stat__icon">♿</span><span className="dd-stat__label">Accessibility</span></div>
        </div>
      </div></div></section>

      <section className="dd-whoweare"><div className="dd-container"><div className="dd-whoweare__grid">
        <div className="dd-whoweare__stats dd-animate--left">
          <div className="dd-stat dd-stat--dark"><span className="dd-stat__number">100+</span><span className="dd-stat__label">Systems Built</span></div>
          <div className="dd-stat dd-stat--dark"><span className="dd-stat__number">50%</span><span className="dd-stat__label">Faster Dev Cycles</span></div>
          <div className="dd-stat dd-stat--dark"><span className="dd-stat__number">A11y</span><span className="dd-stat__label">WCAG Compliant</span></div>
          <div className="dd-stat dd-stat--dark"><span className="dd-stat__number">14+</span><span className="dd-stat__label">Years Experience</span></div>
        </div>
        <div className="dd-whoweare__content dd-animate--right">
          <h2 className="dd-whoweare__heading">Business Benefits of <span className="dd-text-accent">Design Systems</span></h2>
          <p className="dd-whoweare__text">Design systems improve both efficiency and user clarity:</p>
          <ul className="dd-checklist">
            <li className="dd-checklist__item"><span className="dd-checklist__icon">✓</span><span>Faster product development cycles &amp; reduced duplication</span></li>
            <li className="dd-checklist__item"><span className="dd-checklist__icon">✓</span><span>Stronger brand consistency &amp; improved collaboration</span></li>
            <li className="dd-checklist__item"><span className="dd-checklist__icon">✓</span><span>Predictable user experience &amp; scalable expansion</span></li>
            <li className="dd-checklist__item"><span className="dd-checklist__icon">✓</span><span>Developer-aligned documentation &amp; token-based specs</span></li>
            <li className="dd-checklist__item"><span className="dd-checklist__icon">✓</span><span>Accessibility &amp; compliance standards built in</span></li>
          </ul>
        </div>
      </div></div></section>

      <section className="dd-services"><div className="dd-container">
        <div className="dd-services__header dd-animate"><h2 className="dd-services__title">Our Design System <span className="dd-text-accent">Capabilities</span></h2><p className="dd-services__subtitle">From component architecture to cross-platform governance</p></div>
        <div className="dd-services__grid dd-stagger">
          <div className="dd-service-card dd-animate--scale"><span className="dd-service-card__badge">01</span><h4 className="dd-service-card__title">Component Library</h4><p className="dd-service-card__text">Modular UI components including buttons, input fields, navigation systems, cards, containers, modal structures, and form elements — all documented for predictable usage.</p></div>
          <div className="dd-service-card dd-animate--scale"><span className="dd-service-card__badge">02</span><h4 className="dd-service-card__title">Visual Identity Standards</h4><p className="dd-service-card__text">Color hierarchies, typography scales, iconography frameworks, grid systems, and spacing standards ensuring visual harmony at scale.</p></div>
          <div className="dd-service-card dd-animate--scale"><span className="dd-service-card__badge">03</span><h4 className="dd-service-card__title">Cross-Platform Integration</h4><p className="dd-service-card__text">Design systems adaptable to web applications, mobile apps, enterprise dashboards, and SaaS platforms while maintaining consistency.</p></div>
          <div className="dd-service-card dd-animate--scale"><span className="dd-service-card__badge">04</span><h4 className="dd-service-card__title">Dev Alignment</h4><p className="dd-service-card__text">Clear developer documentation, token-based design specifications, reusable code-ready components, and version control structures reducing team gaps.</p></div>
          <div className="dd-service-card dd-service-card--wide dd-animate--scale"><span className="dd-service-card__badge">05</span><h4 className="dd-service-card__title">Accessibility &amp; Compliance</h4><p className="dd-service-card__text">Contrast ratio validation, scalable typography, assistive technology compatibility, and interaction clarity guidelines strengthening usability for all users.</p></div>
        </div>
      </div></section>

      <section className="dd-delivery"><div className="dd-container">
        <h2 className="dd-delivery__heading dd-animate">Our Implementation <span className="dd-text-accent">Approach</span></h2>
        <p className="dd-delivery__text">Ensures adoption across teams, not just documentation.</p>
        <div className="dd-delivery__steps">
          <div className="dd-step"><span className="dd-step__circle">Interface Audit</span></div><span className="dd-step__arrow">→</span>
          <div className="dd-step"><span className="dd-step__circle">Component ID</span></div><span className="dd-step__arrow">→</span>
          <div className="dd-step"><span className="dd-step__circle">Architecture</span></div><span className="dd-step__arrow">→</span>
          <div className="dd-step"><span className="dd-step__circle">Documentation</span></div><span className="dd-step__arrow">→</span>
          <div className="dd-step"><span className="dd-step__circle">Dev Alignment</span></div><span className="dd-step__arrow">→</span>
          <div className="dd-step"><span className="dd-step__circle">Governance</span></div>
        </div>
      </div></section>

      <section className="dd-reliable"><div className="dd-container"><div className="dd-reliable__inner dd-animate">
        <h2 className="dd-reliable__heading">Why Choose <span className="dd-text-accent">mTouch Labs</span>?</h2>
        <p className="dd-reliable__text">We build UI frameworks that support product growth, not restrict it.</p>
        <div className="dd-reliable__pillars">
          <div className="dd-pillar"><span className="dd-pillar__dot"></span><span className="dd-pillar__label">System-first design methodology</span></div>
          <div className="dd-pillar"><span className="dd-pillar__dot"></span><span className="dd-pillar__label">Enterprise product experience</span></div>
          <div className="dd-pillar"><span className="dd-pillar__dot"></span><span className="dd-pillar__label">Cross-platform standardization</span></div>
          <div className="dd-pillar"><span className="dd-pillar__dot"></span><span className="dd-pillar__label">Developer-aligned documentation</span></div>
          <div className="dd-pillar"><span className="dd-pillar__dot"></span><span className="dd-pillar__label">Scalable UI governance models</span></div>
          <div className="dd-pillar"><span className="dd-pillar__dot"></span><span className="dd-pillar__label">Long-term system maintenance</span></div>
        </div>
      </div></div></section>

      <section className="dd-industries"><div className="dd-container">
        <h2 className="dd-industries__title dd-animate">Industries We <span className="dd-text-accent">Support</span></h2>
        <div className="dd-industries__grid dd-stagger">
          <div className="dd-industry dd-animate--scale"><span className="dd-industry__icon">💻</span><h4 className="dd-industry__title">SaaS &amp; Product Companies</h4></div>
          <div className="dd-industry dd-animate--scale"><span className="dd-industry__icon">🏢</span><h4 className="dd-industry__title">Enterprise Technology</h4></div>
          <div className="dd-industry dd-animate--scale"><span className="dd-industry__icon">💳</span><h4 className="dd-industry__title">FinTech Applications</h4></div>
          <div className="dd-industry dd-animate--scale"><span className="dd-industry__icon">🏥</span><h4 className="dd-industry__title">Healthcare Systems</h4></div>
          <div className="dd-industry dd-animate--scale"><span className="dd-industry__icon">🛒</span><h4 className="dd-industry__title">eCommerce Solutions</h4></div>
          <div className="dd-industry dd-animate--scale"><span className="dd-industry__icon">🔧</span><h4 className="dd-industry__title">Corporate Internal Tools</h4></div>
        </div>
      </div></section>

      <section className="dd-tech"><div className="dd-container"><div className="dd-tech__grid">
        <div className="dd-animate--left">
          <h2 className="dd-tech__heading">Tools &amp; Frameworks <span className="dd-text-accent">We Use</span></h2>
          <p className="dd-tech__text">Industry-standard design system and component platforms.</p>
          <div className="dd-tech__tags">
            {["Figma","Storybook","Design Tokens","Tailwind CSS","Material Design","Chakra UI","Radix UI","Headless UI","Styled Components","CSS Variables","Zeplin","Chromatic","Bit","Lerna","Rollup","TypeScript","WCAG 2.1","Accessibility Audit"].map((t)=>(<span key={t} className="dd-tag">{t}</span>))}
          </div>
        </div>
        <div className="dd-tech__stats dd-animate--right">
          <div className="dd-stat dd-stat--dark"><span className="dd-stat__number">100+</span><span className="dd-stat__label">Systems Built</span></div>
          <div className="dd-stat dd-stat--dark"><span className="dd-stat__number">50%</span><span className="dd-stat__label">Faster Dev</span></div>
          <div className="dd-stat dd-stat--dark"><span className="dd-stat__number">A11y</span><span className="dd-stat__label">Compliant</span></div>
          <div className="dd-stat dd-stat--dark"><span className="dd-stat__number">14+</span><span className="dd-stat__label">Years</span></div>
        </div>
      </div></div></section>

      <section className="dd-faq"><div className="dd-container"><div className="dd-faq__wrapper">
        <h3 className="dd-faq__heading dd-animate">Frequently Asked <span className="dd-text-accent">Questions</span></h3>
        <p className="dd-faq__subtext">Everything about design system development</p>
        <div className="dd-faq__list">
          <details className="dd-faq__item"><summary className="dd-faq__question"><span>What is design system development?</span><span className="dd-faq__chevron"></span></summary><div className="dd-faq__answer"><p>Design system development involves creating reusable UI components and structured design standards that ensure consistency across digital products.</p></div></details>
          <details className="dd-faq__item"><summary className="dd-faq__question"><span>How does a design system improve efficiency?</span><span className="dd-faq__chevron"></span></summary><div className="dd-faq__answer"><p>It reduces duplication, aligns design and development teams, and speeds up feature implementation by up to 50%.</p></div></details>
          <details className="dd-faq__item"><summary className="dd-faq__question"><span>Is a design system suitable for startups?</span><span className="dd-faq__chevron"></span></summary><div className="dd-faq__answer"><p>Yes. Startups benefit from structured systems that support rapid scaling without interface inconsistency — especially for <a href="/product-design-services" style={{color: "#2563eb", textDecoration: "none", fontWeight: 600}}>product design</a> projects.</p></div></details>
          <details className="dd-faq__item"><summary className="dd-faq__question"><span>Can a design system integrate with existing products?</span><span className="dd-faq__chevron"></span></summary><div className="dd-faq__answer"><p>Yes. A structured audit and phased rollout can align existing <a href="/enterprise-application-development-company" style={{color: "#2563eb", textDecoration: "none", fontWeight: 600}}>enterprise applications</a> with a unified system.</p></div></details>
        </div>
      </div></div></section>

      <section className="dd-cta"><div className="dd-container"><div className="dd-cta__inner dd-animate--scale">
        <h2 className="dd-cta__heading">Build Your <span className="dd-text-accent">Design System</span> Today</h2>
        <p className="dd-cta__text">Let&apos;s discuss how a structured design system can accelerate your product development.</p>
        <button type="button" className="dd-cta__button js-open-modal">Start Design System</button>
      </div></div></section>
    </>
  );
}