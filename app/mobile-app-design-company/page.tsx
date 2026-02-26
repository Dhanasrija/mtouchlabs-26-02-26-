import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Mobile App Design Company | mTouch Labs",
  description: "mTouch Labs is a mobile app design company delivering intuitive iOS and Android app interfaces focused on usability, engagement, and performance.",
  keywords: ["mobile app design company","mobile UX design","iOS app design","Android app design","mobile UI design","app design services"],
  alternates: { canonical: "https://www.mtouchlabs.com/mobile-app-design-company" },
  openGraph: { title: "Mobile App Design Company | mTouch Labs", description: "Professional mobile app UI/UX design services for iOS and Android platforms.", url: "https://www.mtouchlabs.com/mobile-app-design-company", siteName: "mTouch Labs", type: "website" },
  twitter: { card: "summary_large_image", title: "Mobile App Design Company | mTouch Labs", description: "User-focused mobile app design services engineered for performance and engagement." },
};

export default function MobileAppDesignCompany() {
  return (
    <>
      <section className="md-hero"><div className="md-hero__inner">
        <Breadcrumb pagePath="/mobile-app-design-company" />
        <h1 className="md-hero__title">Mobile App <span className="md-hero__title-accent">Design</span> Company</h1>
        <p className="md-hero__subtitle">Crafting High-Impact Mobile Experiences That Drive Engagement</p>
        <p className="md-hero__desc">mTouch Labs is a specialized mobile app design company delivering intuitive, high-performance app interfaces tailored for iOS and Android platforms. Mobile app success begins with intelligent design.</p>
      </div></section>

      <section className="md-about"><div className="md-container"><div className="md-about__grid">
        <div className="md-about__content md-animate--left">
          <h2 className="md-about__heading">What Is <span className="md-text-accent">Mobile App Design</span>?</h2>
          <p className="md-about__text">Mobile app design involves creating the visual interface, interaction flow, and user journey for applications built specifically for smartphones and tablets — ensuring platform-specific usability, gesture-based navigation, optimized screen hierarchy, and App Store compliance.</p>
          <p className="md-about__text">Our <a href="/ui-ux-design-company" style={{color: "#2563eb", textDecoration: "none", fontWeight: 600}}>UI/UX expertise</a> combined with <a href="/ux-research-services" style={{color: "#2563eb", textDecoration: "none", fontWeight: 600}}>UX research</a> ensures every mobile design decision is data-driven and user-validated.</p>
          <p className="md-about__text">We focus exclusively on designing mobile-first experiences that increase user retention, reduce friction, and enhance in-app conversions for <a href="/mobile-app-development-company" style={{color: "#2563eb", textDecoration: "none", fontWeight: 600}}>mobile app development</a> projects.</p>
        </div>
        <div className="md-stats md-animate--right">
          <div className="md-stat"><span className="md-stat__icon">📱</span><span className="md-stat__label">iOS &amp; Android</span></div>
          <div className="md-stat"><span className="md-stat__icon">👆</span><span className="md-stat__label">Gesture Navigation</span></div>
          <div className="md-stat"><span className="md-stat__icon">🎯</span><span className="md-stat__label">Conversion Focus</span></div>
          <div className="md-stat"><span className="md-stat__icon">🧪</span><span className="md-stat__label">Prototype Testing</span></div>
        </div>
      </div></div></section>

      <section className="md-whoweare"><div className="md-container"><div className="md-whoweare__grid">
        <div className="md-whoweare__stats md-animate--left">
          <div className="md-stat md-stat--dark"><span className="md-stat__number">1500+</span><span className="md-stat__label">Apps Designed</span></div>
          <div className="md-stat md-stat--dark"><span className="md-stat__number">iOS</span><span className="md-stat__label">HIG Compliant</span></div>
          <div className="md-stat md-stat--dark"><span className="md-stat__number">MD3</span><span className="md-stat__label">Material Design</span></div>
          <div className="md-stat md-stat--dark"><span className="md-stat__number">14+</span><span className="md-stat__label">Years Experience</span></div>
        </div>
        <div className="md-whoweare__content md-animate--right">
          <h2 className="md-whoweare__heading">Why Choose mTouch Labs for <span className="md-text-accent">Mobile Design</span>?</h2>
          <p className="md-whoweare__text">We design mobile apps that users want to engage with — not uninstall:</p>
          <ul className="md-checklist">
            <li className="md-checklist__item"><span className="md-checklist__icon">✓</span><span>Mobile-first UX expertise &amp; platform-specific design standards</span></li>
            <li className="md-checklist__item"><span className="md-checklist__icon">✓</span><span>Conversion-focused interface strategy &amp; scalable design systems</span></li>
            <li className="md-checklist__item"><span className="md-checklist__icon">✓</span><span>Research-backed interaction models &amp; gesture validation</span></li>
            <li className="md-checklist__item"><span className="md-checklist__icon">✓</span><span>Apple HIG &amp; Android Material Design compliance</span></li>
            <li className="md-checklist__item"><span className="md-checklist__icon">✓</span><span>Continuous optimization &amp; <a href="/design-system-development" style={{color: "#2563eb", textDecoration: "none", fontWeight: 600}}>design system</a> support</span></li>
          </ul>
        </div>
      </div></div></section>

      <section className="md-services"><div className="md-container">
        <div className="md-services__header md-animate"><h2 className="md-services__title">Our Mobile <span className="md-text-accent">Design Services</span></h2><p className="md-services__subtitle">From strategy to developer handoff</p></div>
        <div className="md-services__grid md-stagger">
          <div className="md-service-card md-animate--scale"><span className="md-service-card__badge">01</span><h4 className="md-service-card__title">Mobile UX Strategy</h4><p className="md-service-card__text">Core user journeys, interaction mapping, in-app navigation structure, drop-off risk points, and conversion pathway planning.</p></div>
          <div className="md-service-card md-animate--scale"><span className="md-service-card__badge">02</span><h4 className="md-service-card__title">iOS &amp; Android Design</h4><p className="md-service-card__text">Platform-native interfaces following Apple Human Interface Guidelines and Android Material Design principles for natural, intuitive experiences.</p></div>
          <div className="md-service-card md-animate--scale"><span className="md-service-card__badge">03</span><h4 className="md-service-card__title">Wireframing &amp; Prototypes</h4><p className="md-service-card__text">Mobile wireframes, clickable prototypes, interaction simulations, and gesture validation models to validate UX before development.</p></div>
          <div className="md-service-card md-animate--scale"><span className="md-service-card__badge">04</span><h4 className="md-service-card__title">Conversion-Focused UI</h4><p className="md-service-card__text">Interfaces designed to increase sign-ups, improve in-app purchases, boost feature adoption, enhance onboarding, and reduce churn rates.</p></div>
          <div className="md-service-card md-service-card--wide md-animate--scale"><span className="md-service-card__badge">05</span><h4 className="md-service-card__title">Design System for Apps</h4><p className="md-service-card__text">Scalable mobile design systems including typography frameworks, color strategy, component libraries, and UI consistency models for scaling apps.</p></div>
        </div>
      </div></section>

      <section className="md-delivery"><div className="md-container">
        <h2 className="md-delivery__heading md-animate">Our Mobile <span className="md-text-accent">Design Workflow</span></h2>
        <p className="md-delivery__text">Seamless collaboration between design and development teams.</p>
        <div className="md-delivery__steps">
          <div className="md-step"><span className="md-step__circle">User Research</span></div><span className="md-step__arrow">→</span>
          <div className="md-step"><span className="md-step__circle">App Flow</span></div><span className="md-step__arrow">→</span>
          <div className="md-step"><span className="md-step__circle">Wireframing</span></div><span className="md-step__arrow">→</span>
          <div className="md-step"><span className="md-step__circle">Prototype</span></div><span className="md-step__arrow">→</span>
          <div className="md-step"><span className="md-step__circle">Visual Design</span></div><span className="md-step__arrow">→</span>
          <div className="md-step"><span className="md-step__circle">Validation</span></div><span className="md-step__arrow">→</span>
          <div className="md-step"><span className="md-step__circle">Dev Handoff</span></div>
        </div>
      </div></section>

      <section className="md-reliable"><div className="md-container"><div className="md-reliable__inner md-animate">
        <h2 className="md-reliable__heading">Performance-Driven <span className="md-text-accent">Design Philosophy</span></h2>
        <p className="md-reliable__text">Mobile interfaces must be efficient, intuitive, and responsive.</p>
        <div className="md-reliable__pillars">
          <div className="md-pillar"><span className="md-pillar__dot"></span><span className="md-pillar__label">Minimal cognitive load</span></div>
          <div className="md-pillar"><span className="md-pillar__dot"></span><span className="md-pillar__label">Clear call-to-action placement</span></div>
          <div className="md-pillar"><span className="md-pillar__dot"></span><span className="md-pillar__label">Fast interaction response</span></div>
          <div className="md-pillar"><span className="md-pillar__dot"></span><span className="md-pillar__label">Clean visual hierarchy</span></div>
          <div className="md-pillar"><span className="md-pillar__dot"></span><span className="md-pillar__label">Accessibility compliance</span></div>
          <div className="md-pillar"><span className="md-pillar__dot"></span><span className="md-pillar__label">Platform-native patterns</span></div>
        </div>
      </div></div></section>

      <section className="md-industries"><div className="md-container">
        <h2 className="md-industries__title md-animate">Industries We <span className="md-text-accent">Design For</span></h2>
        <div className="md-industries__grid md-stagger">
          <div className="md-industry md-animate--scale"><span className="md-industry__icon">🚗</span><h4 className="md-industry__title">On-Demand Services</h4></div>
          <div className="md-industry md-animate--scale"><span className="md-industry__icon">🛒</span><h4 className="md-industry__title">eCommerce Mobile</h4></div>
          <div className="md-industry md-animate--scale"><span className="md-industry__icon">💳</span><h4 className="md-industry__title">FinTech Apps</h4></div>
          <div className="md-industry md-animate--scale"><span className="md-industry__icon">💊</span><h4 className="md-industry__title">Health &amp; Wellness</h4></div>
          <div className="md-industry md-animate--scale"><span className="md-industry__icon">🚛</span><h4 className="md-industry__title">Logistics &amp; Delivery</h4></div>
          <div className="md-industry md-animate--scale"><span className="md-industry__icon">💻</span><h4 className="md-industry__title">SaaS Mobile Products</h4></div>
        </div>
      </div></section>

      <section className="md-tech"><div className="md-container"><div className="md-tech__grid">
        <div className="md-animate--left">
          <h2 className="md-tech__heading">Design Tools <span className="md-text-accent">We Use</span></h2>
          <p className="md-tech__text">Industry-leading mobile design and prototyping tools.</p>
          <div className="md-tech__tags">
            {["Figma","Sketch","Adobe XD","InVision","Framer","Principle","Zeplin","Lottie","Apple HIG","Material Design 3","Storybook","Hotjar","Maze","Google Analytics","WCAG 2.1","Responsive Grids","Design Tokens","Tailwind CSS"].map((t)=>(<span key={t} className="md-tag">{t}</span>))}
          </div>
        </div>
        <div className="md-tech__stats md-animate--right">
          <div className="md-stat md-stat--dark"><span className="md-stat__number">1500+</span><span className="md-stat__label">Apps Designed</span></div>
          <div className="md-stat md-stat--dark"><span className="md-stat__number">iOS</span><span className="md-stat__label">&amp; Android</span></div>
          <div className="md-stat md-stat--dark"><span className="md-stat__number">A11y</span><span className="md-stat__label">Accessible</span></div>
          <div className="md-stat md-stat--dark"><span className="md-stat__number">14+</span><span className="md-stat__label">Years Experience</span></div>
        </div>
      </div></div></section>

      <section className="md-faq"><div className="md-container"><div className="md-faq__wrapper">
        <h3 className="md-faq__heading md-animate">Frequently Asked <span className="md-text-accent">Questions</span></h3>
        <p className="md-faq__subtext">Everything about mobile app design</p>
        <div className="md-faq__list">
          <details className="md-faq__item"><summary className="md-faq__question"><span>What does a mobile app design company do?</span><span className="md-faq__chevron"></span></summary><div className="md-faq__answer"><p>A mobile app design company creates intuitive user interfaces and user journeys optimized specifically for iOS and Android applications.</p></div></details>
          <details className="md-faq__item"><summary className="md-faq__question"><span>Why is mobile UX important?</span><span className="md-faq__chevron"></span></summary><div className="md-faq__answer"><p>Mobile UX directly impacts user retention, engagement, and in-app conversions across all mobile platforms.</p></div></details>
          <details className="md-faq__item"><summary className="md-faq__question"><span>Do you design for both iOS and Android?</span><span className="md-faq__chevron"></span></summary><div className="md-faq__answer"><p>Yes. We design mobile interfaces optimized for Apple and Android platform guidelines including <a href="/flutter-app-development-company" style={{color: "#2563eb", textDecoration: "none", fontWeight: 600}}>Flutter</a> and <a href="/react-native-app-development-company" style={{color: "#2563eb", textDecoration: "none", fontWeight: 600}}>React Native</a> apps.</p></div></details>
          <details className="md-faq__item"><summary className="md-faq__question"><span>Do you provide prototypes before development?</span><span className="md-faq__chevron"></span></summary><div className="md-faq__answer"><p>Yes. We create interactive prototypes to validate usability before <a href="/mobile-app-development-company" style={{color: "#2563eb", textDecoration: "none", fontWeight: 600}}>development</a> begins.</p></div></details>
        </div>
      </div></div></section>

      <section className="md-cta"><div className="md-container"><div className="md-cta__inner md-animate--scale">
        <h2 className="md-cta__heading">Design Your <span className="md-text-accent">Mobile App</span> Today</h2>
        <p className="md-cta__text">Let&apos;s discuss how our mobile design expertise can create engaging app experiences.</p>
        <button type="button" className="md-cta__button js-open-modal">Start Your App Design</button>
      </div></div></section>
    </>
  );
}