import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "UX Research Services | mTouch Labs",
  description: "mTouch Labs provides UX research services including usability testing, user behavior analysis, and experience validation for data-driven decisions.",
  keywords: ["UX research services","usability testing","user behavior analysis","user experience research","UX audit services","UX research company"],
  alternates: { canonical: "https://www.mtouchlabs.com/ux-research-services" },
  openGraph: { title: "UX Research Services | mTouch Labs", description: "Professional user experience research for usability validation and data-driven product strategy.", url: "https://www.mtouchlabs.com/ux-research-services", siteName: "mTouch Labs", type: "website" },
  twitter: { card: "summary_large_image", title: "UX Research Services | mTouch Labs", description: "Evidence-driven UX research and usability testing services." },
};

export default function UXResearchServices() {
  return (
    <>
      <section className="ur-hero"><div className="ur-hero__inner">
        <Breadcrumb pagePath="/ux-research-services" />
        <h1 className="ur-hero__title">UX <span className="ur-hero__title-accent">Research</span> Services</h1>
        <p className="ur-hero__subtitle">Evidence-Driven Insights That Shape Better Digital Experiences</p>
        <p className="ur-hero__desc">mTouch Labs delivers professional UX research services that uncover real user behavior, decision patterns, and usability barriers before development begins. Research reduces risk. Insight increases impact.</p>
      </div></section>

      <section className="ur-about"><div className="ur-container"><div className="ur-about__grid">
        <div className="ur-about__content ur-animate--left">
          <h2 className="ur-about__heading">What Are <span className="ur-text-accent">UX Research</span> Services?</h2>
          <p className="ur-about__text">UX research services involve studying user behavior, interaction habits, and usability challenges to inform product strategy and experience design — including behavioral analysis, contextual inquiry, user interviews, usability testing, and experience validation.</p>
          <p className="ur-about__text">Our research directly powers <a href="/product-design-services" style={{color: "#2563eb", textDecoration: "none", fontWeight: 600}}>product design</a> decisions and <a href="/ui-ux-design-company" style={{color: "#2563eb", textDecoration: "none", fontWeight: 600}}>UI/UX design</a> strategies that are grounded in real-world usage.</p>
          <p className="ur-about__text">Combined with <a href="/design-system-development" style={{color: "#2563eb", textDecoration: "none", fontWeight: 600}}>design system development</a>, our research ensures consistent, user-validated experiences across all digital touchpoints.</p>
        </div>
        <div className="ur-stats ur-animate--right">
          <div className="ur-stat"><span className="ur-stat__icon">🔬</span><span className="ur-stat__label">Behavioral Analysis</span></div>
          <div className="ur-stat"><span className="ur-stat__icon">🎙️</span><span className="ur-stat__label">User Interviews</span></div>
          <div className="ur-stat"><span className="ur-stat__icon">🧪</span><span className="ur-stat__label">Usability Testing</span></div>
          <div className="ur-stat"><span className="ur-stat__icon">🗺️</span><span className="ur-stat__label">Journey Mapping</span></div>
        </div>
      </div></div></section>

      <section className="ur-whoweare"><div className="ur-container"><div className="ur-whoweare__grid">
        <div className="ur-whoweare__stats ur-animate--left">
          <div className="ur-stat ur-stat--dark"><span className="ur-stat__number">1200+</span><span className="ur-stat__label">Research Projects</span></div>
          <div className="ur-stat ur-stat--dark"><span className="ur-stat__number">35%</span><span className="ur-stat__label">Avg Conversion Lift</span></div>
          <div className="ur-stat ur-stat--dark"><span className="ur-stat__number">14+</span><span className="ur-stat__label">Years Experience</span></div>
          <div className="ur-stat ur-stat--dark"><span className="ur-stat__number">Data</span><span className="ur-stat__label">Driven Insights</span></div>
        </div>
        <div className="ur-whoweare__content ur-animate--right">
          <h2 className="ur-whoweare__heading">Business Benefits of <span className="ur-text-accent">UX Research</span></h2>
          <p className="ur-whoweare__text">Research strengthens long-term product success:</p>
          <ul className="ur-checklist">
            <li className="ur-checklist__item"><span className="ur-checklist__icon">✓</span><span>Reduced usability risk &amp; improved conversion rates</span></li>
            <li className="ur-checklist__item"><span className="ur-checklist__icon">✓</span><span>Better feature prioritization &amp; enhanced satisfaction</span></li>
            <li className="ur-checklist__item"><span className="ur-checklist__icon">✓</span><span>Data-driven product strategy &amp; measurable engagement</span></li>
            <li className="ur-checklist__item"><span className="ur-checklist__icon">✓</span><span>Evidence-based evaluation across industries</span></li>
            <li className="ur-checklist__item"><span className="ur-checklist__icon">✓</span><span>Clear documentation aligned with product goals</span></li>
          </ul>
        </div>
      </div></div></section>

      <section className="ur-services"><div className="ur-container">
        <div className="ur-services__header ur-animate"><h2 className="ur-services__title">Our UX Research <span className="ur-text-accent">Capabilities</span></h2><p className="ur-services__subtitle">From behavioral analysis to actionable recommendations</p></div>
        <div className="ur-services__grid ur-stagger">
          <div className="ur-service-card ur-animate--scale"><span className="ur-service-card__badge">01</span><h4 className="ur-service-card__title">User Behavior Analysis</h4><p className="ur-service-card__text">Navigation patterns, task completion flows, drop-off points, friction areas, and decision triggers to optimize before costly development changes.</p></div>
          <div className="ur-service-card ur-animate--scale"><span className="ur-service-card__badge">02</span><h4 className="ur-service-card__title">Qualitative Research</h4><p className="ur-service-card__text">Structured user interviews, persona refinement sessions, contextual observations, and experience walkthrough discussions revealing emotional factors.</p></div>
          <div className="ur-service-card ur-animate--scale"><span className="ur-service-card__badge">03</span><h4 className="ur-service-card__title">Usability Testing</h4><p className="ur-service-card__text">Feature discoverability, interface clarity, onboarding effectiveness, task efficiency, and accessibility compliance testing before launch.</p></div>
          <div className="ur-service-card ur-animate--scale"><span className="ur-service-card__badge">04</span><h4 className="ur-service-card__title">Journey Analysis</h4><p className="ur-service-card__text">Entry touchpoints, interaction stages, decision moments, conversion pathways, and retention triggers revealing gaps between intention and execution.</p></div>
          <div className="ur-service-card ur-service-card--wide ur-animate--scale"><span className="ur-service-card__badge">05</span><h4 className="ur-service-card__title">Heuristic &amp; Expert Evaluation</h4><p className="ur-service-card__text">Usability principles assessment, cognitive load analysis, interface consistency review, and interaction efficiency benchmarking complementing user research.</p></div>
        </div>
      </div></section>

      <section className="ur-delivery"><div className="ur-container">
        <h2 className="ur-delivery__heading ur-animate">Our UX Research <span className="ur-text-accent">Methodology</span></h2>
        <p className="ur-delivery__text">Systematic approach ensuring accuracy and clarity.</p>
        <div className="ur-delivery__steps">
          <div className="ur-step"><span className="ur-step__circle">Discovery</span></div><span className="ur-step__arrow">→</span>
          <div className="ur-step"><span className="ur-step__circle">Planning</span></div><span className="ur-step__arrow">→</span>
          <div className="ur-step"><span className="ur-step__circle">Data Collection</span></div><span className="ur-step__arrow">→</span>
          <div className="ur-step"><span className="ur-step__circle">Analysis</span></div><span className="ur-step__arrow">→</span>
          <div className="ur-step"><span className="ur-step__circle">Validation</span></div><span className="ur-step__arrow">→</span>
          <div className="ur-step"><span className="ur-step__circle">Recommendations</span></div>
        </div>
      </div></section>

      <section className="ur-reliable"><div className="ur-container"><div className="ur-reliable__inner ur-animate">
        <h2 className="ur-reliable__heading">Why Choose <span className="ur-text-accent">mTouch Labs</span>?</h2>
        <p className="ur-reliable__text">We help organizations design with confidence.</p>
        <div className="ur-reliable__pillars">
          <div className="ur-pillar"><span className="ur-pillar__dot"></span><span className="ur-pillar__label">Structured behavioral analysis</span></div>
          <div className="ur-pillar"><span className="ur-pillar__dot"></span><span className="ur-pillar__label">Evidence-based evaluation methods</span></div>
          <div className="ur-pillar"><span className="ur-pillar__dot"></span><span className="ur-pillar__label">Cross-industry research experience</span></div>
          <div className="ur-pillar"><span className="ur-pillar__dot"></span><span className="ur-pillar__label">Clear documentation &amp; reporting</span></div>
          <div className="ur-pillar"><span className="ur-pillar__dot"></span><span className="ur-pillar__label">Product &amp; business goal alignment</span></div>
          <div className="ur-pillar"><span className="ur-pillar__dot"></span><span className="ur-pillar__label">Continuous optimization mindset</span></div>
        </div>
      </div></div></section>

      <section className="ur-industries"><div className="ur-container">
        <h2 className="ur-industries__title ur-animate">Industries We <span className="ur-text-accent">Support</span></h2>
        <div className="ur-industries__grid ur-stagger">
          <div className="ur-industry ur-animate--scale"><span className="ur-industry__icon">💻</span><h4 className="ur-industry__title">SaaS &amp; Digital Platforms</h4></div>
          <div className="ur-industry ur-animate--scale"><span className="ur-industry__icon">💳</span><h4 className="ur-industry__title">Financial Technology</h4></div>
          <div className="ur-industry ur-animate--scale"><span className="ur-industry__icon">🏥</span><h4 className="ur-industry__title">Healthcare Apps</h4></div>
          <div className="ur-industry ur-animate--scale"><span className="ur-industry__icon">🛒</span><h4 className="ur-industry__title">eCommerce &amp; Retail</h4></div>
          <div className="ur-industry ur-animate--scale"><span className="ur-industry__icon">🏢</span><h4 className="ur-industry__title">Enterprise Systems</h4></div>
          <div className="ur-industry ur-animate--scale"><span className="ur-industry__icon">📚</span><h4 className="ur-industry__title">Education Platforms</h4></div>
        </div>
      </div></section>

      <section className="ur-tech"><div className="ur-container"><div className="ur-tech__grid">
        <div className="ur-animate--left">
          <h2 className="ur-tech__heading">Research Tools <span className="ur-text-accent">We Use</span></h2>
          <p className="ur-tech__text">Industry-standard research and analytics platforms.</p>
          <div className="ur-tech__tags">
            {["Hotjar","Maze","UserTesting","Lookback","Optimal Workshop","Google Analytics","Mixpanel","Amplitude","Dovetail","Miro","FigJam","SurveyMonkey","Typeform","Crazy Egg","FullStory","Figma Prototypes","InVision","Loom"].map((t)=>(<span key={t} className="ur-tag">{t}</span>))}
          </div>
        </div>
        <div className="ur-tech__stats ur-animate--right">
          <div className="ur-stat ur-stat--dark"><span className="ur-stat__number">18+</span><span className="ur-stat__label">Research Tools</span></div>
          <div className="ur-stat ur-stat--dark"><span className="ur-stat__number">1200+</span><span className="ur-stat__label">Projects</span></div>
          <div className="ur-stat ur-stat--dark"><span className="ur-stat__number">Data</span><span className="ur-stat__label">Driven Insights</span></div>
          <div className="ur-stat ur-stat--dark"><span className="ur-stat__number">14+</span><span className="ur-stat__label">Years</span></div>
        </div>
      </div></div></section>

      <section className="ur-faq"><div className="ur-container"><div className="ur-faq__wrapper">
        <h3 className="ur-faq__heading ur-animate">Frequently Asked <span className="ur-text-accent">Questions</span></h3>
        <p className="ur-faq__subtext">Everything about UX research</p>
        <div className="ur-faq__list">
          <details className="ur-faq__item"><summary className="ur-faq__question"><span>What are UX research services?</span><span className="ur-faq__chevron"></span></summary><div className="ur-faq__answer"><p>UX research services analyze user behavior and usability patterns to inform product and interface decisions.</p></div></details>
          <details className="ur-faq__item"><summary className="ur-faq__question"><span>Why is UX research important?</span><span className="ur-faq__chevron"></span></summary><div className="ur-faq__answer"><p>UX research reduces product risk, improves user satisfaction, and ensures design decisions align with real-world behavior.</p></div></details>
          <details className="ur-faq__item"><summary className="ur-faq__question"><span>When should UX research be conducted?</span><span className="ur-faq__chevron"></span></summary><div className="ur-faq__answer"><p>Before <a href="/product-design-services" style={{color: "#2563eb", textDecoration: "none", fontWeight: 600}}>product development</a>, during redesign, or when performance issues are identified.</p></div></details>
          <details className="ur-faq__item"><summary className="ur-faq__question"><span>Can UX research improve conversion rates?</span><span className="ur-faq__chevron"></span></summary><div className="ur-faq__answer"><p>Yes. By identifying friction points and usability gaps, UX research supports improved engagement and conversions across all <a href="/web-development-company" style={{color: "#2563eb", textDecoration: "none", fontWeight: 600}}>web</a> and mobile platforms.</p></div></details>
        </div>
      </div></div></section>

      <section className="ur-cta"><div className="ur-container"><div className="ur-cta__inner ur-animate--scale">
        <h2 className="ur-cta__heading">Start Your <span className="ur-text-accent">UX Research</span> Today</h2>
        <p className="ur-cta__text">Let&apos;s discuss how evidence-driven research can improve your digital product performance.</p>
        <button type="button" className="ur-cta__button js-open-modal">Start UX Research</button>
      </div></div></section>
    </>
  );
}