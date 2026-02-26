import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "DevOps Consulting Services | mTouch Labs",
  description: "mTouch Labs provides DevOps consulting services including maturity assessment, roadmap planning, and enterprise DevOps transformation strategy.",
  keywords: ["DevOps consulting services","DevOps advisory","DevOps maturity assessment","DevOps transformation","CI/CD consulting","enterprise DevOps strategy"],
  alternates: { canonical: "https://www.mtouchlabs.com/devops-consulting-services" },
  openGraph: { title: "DevOps Consulting Services | mTouch Labs", description: "Enterprise DevOps advisory and transformation strategy for scalable software delivery.", url: "https://www.mtouchlabs.com/devops-consulting-services", siteName: "mTouch Labs", type: "website" },
  twitter: { card: "summary_large_image", title: "DevOps Consulting Services | mTouch Labs", description: "Strategic DevOps consulting for automation and scalability." },
};

export default function DevOpsConsultingServices() {
  return (
    <>
      <section className="dc-hero"><div className="dc-hero__inner">
        <Breadcrumb pagePath="/devops-consulting-services" />
        <h1 className="dc-hero__title">DevOps <span className="dc-hero__title-accent">Consulting</span> Services</h1>
        <p className="dc-hero__subtitle">Strategic DevOps Advisory for Scalable, High-Performance Software Delivery</p>
        <p className="dc-hero__desc">mTouch Labs provides expert DevOps Consulting Services designed to help organizations design, optimize, and scale modern DevOps frameworks. Transformation begins with strategy, not scripts.</p>
      </div></section>

      <section className="dc-about"><div className="dc-container"><div className="dc-about__grid">
        <div className="dc-about__content dc-animate--left">
          <h2 className="dc-about__heading">What Are <span className="dc-text-accent">DevOps Consulting</span> Services?</h2>
          <p className="dc-about__text">DevOps consulting services involve evaluating existing development and operations workflows and creating structured strategies to improve deployment efficiency, collaboration, and system reliability — including workflow assessment, pipeline architecture, automation strategy, and organizational readiness.</p>
          <p className="dc-about__text">Unlike <a href="/devops-services" style={{color: "#2563eb", textDecoration: "none", fontWeight: 600}}>DevOps implementation services</a> which focus on technical execution, consulting focuses on strategy, assessment, and roadmap planning to establish sustainable DevOps maturity.</p>
          <p className="dc-about__text">Our advisory aligns with <a href="/cloud-services" style={{color: "#2563eb", textDecoration: "none", fontWeight: 600}}>cloud infrastructure</a> strategy to ensure DevOps frameworks are optimized for your specific cloud environment.</p>
        </div>
        <div className="dc-stats dc-animate--right">
          <div className="dc-stat"><span className="dc-stat__icon">📋</span><span className="dc-stat__label">Maturity Assessment</span></div>
          <div className="dc-stat"><span className="dc-stat__icon">🗺️</span><span className="dc-stat__label">Transformation Roadmap</span></div>
          <div className="dc-stat"><span className="dc-stat__icon">⚙️</span><span className="dc-stat__label">Automation Strategy</span></div>
          <div className="dc-stat"><span className="dc-stat__icon">👥</span><span className="dc-stat__label">Team Alignment</span></div>
        </div>
      </div></div></section>

      <section className="dc-whoweare"><div className="dc-container"><div className="dc-whoweare__grid">
        <div className="dc-whoweare__stats dc-animate--left">
          <div className="dc-stat dc-stat--dark"><span className="dc-stat__number">550+</span><span className="dc-stat__label">Consulting Projects</span></div>
          <div className="dc-stat dc-stat--dark"><span className="dc-stat__number">10x</span><span className="dc-stat__label">Deploy Speed Gain</span></div>
          <div className="dc-stat dc-stat--dark"><span className="dc-stat__number">85%</span><span className="dc-stat__label">Error Reduction</span></div>
          <div className="dc-stat dc-stat--dark"><span className="dc-stat__number">14+</span><span className="dc-stat__label">Years Experience</span></div>
        </div>
        <div className="dc-whoweare__content dc-animate--right">
          <h2 className="dc-whoweare__heading">Our Consulting <span className="dc-text-accent">Capabilities</span></h2>
          <p className="dc-whoweare__text">Strategic DevOps advisory across the transformation lifecycle:</p>
          <ul className="dc-checklist">
            <li className="dc-checklist__item"><span className="dc-checklist__icon">✓</span><span>DevOps maturity assessment — workflows, releases &amp; monitoring</span></li>
            <li className="dc-checklist__item"><span className="dc-checklist__icon">✓</span><span>Transformation roadmap — CI/CD, IaC &amp; containerization strategy</span></li>
            <li className="dc-checklist__item"><span className="dc-checklist__icon">✓</span><span>Pipeline &amp; workflow architecture advisory</span></li>
            <li className="dc-checklist__item"><span className="dc-checklist__icon">✓</span><span>DevOps culture &amp; team alignment consulting</span></li>
            <li className="dc-checklist__item"><span className="dc-checklist__icon">✓</span><span>DevSecOps strategy — secure development lifecycle planning</span></li>
          </ul>
        </div>
      </div></div></section>

      <section className="dc-services"><div className="dc-container">
        <div className="dc-services__header dc-animate"><h2 className="dc-services__title">Our Consulting <span className="dc-text-accent">Services</span></h2><p className="dc-services__subtitle">From assessment to continuous advisory</p></div>
        <div className="dc-services__grid dc-stagger">
          <div className="dc-service-card dc-animate--scale"><span className="dc-service-card__badge">01</span><h4 className="dc-service-card__title">DevOps Maturity Assessment</h4><p className="dc-service-card__text">Analysis of development workflows, release frequency, infrastructure provisioning, monitoring practices, and security integration to identify bottlenecks and inefficiencies.</p></div>
          <div className="dc-service-card dc-animate--scale"><span className="dc-service-card__badge">02</span><h4 className="dc-service-card__title">Roadmap &amp; Transformation Planning</h4><p className="dc-service-card__text">CI/CD architecture design, infrastructure automation planning, containerization strategy, security integration models, and governance policy definition for phased implementation.</p></div>
          <div className="dc-service-card dc-animate--scale"><span className="dc-service-card__badge">03</span><h4 className="dc-service-card__title">Pipeline Architecture Advisory</h4><p className="dc-service-card__text">Optimized frameworks for continuous integration, automated deployment, version control governance, and release management alignment reducing operational friction.</p></div>
          <div className="dc-service-card dc-animate--scale"><span className="dc-service-card__badge">04</span><h4 className="dc-service-card__title">Culture &amp; Team Alignment</h4><p className="dc-service-card__text">Cross-functional collaboration models, role definition frameworks, communication optimization, and responsibility matrix alignment for long-term performance.</p></div>
          <div className="dc-service-card dc-service-card--wide dc-animate--scale"><span className="dc-service-card__badge">05</span><h4 className="dc-service-card__title">DevSecOps Strategy</h4><p className="dc-service-card__text">Secure development lifecycle planning, automated compliance checkpoints, security monitoring integration, and risk-based pipeline governance strengthening resilience.</p></div>
        </div>
      </div></section>

      <section className="dc-delivery"><div className="dc-container">
        <h2 className="dc-delivery__heading dc-animate">Our Consulting <span className="dc-text-accent">Framework</span></h2>
        <p className="dc-delivery__text">Structured guidance ensures successful transformation.</p>
        <div className="dc-delivery__steps">
          <div className="dc-step"><span className="dc-step__circle">Assessment</span></div><span className="dc-step__arrow">→</span>
          <div className="dc-step"><span className="dc-step__circle">Gap Analysis</span></div><span className="dc-step__arrow">→</span>
          <div className="dc-step"><span className="dc-step__circle">Strategy</span></div><span className="dc-step__arrow">→</span>
          <div className="dc-step"><span className="dc-step__circle">Roadmap</span></div><span className="dc-step__arrow">→</span>
          <div className="dc-step"><span className="dc-step__circle">Governance</span></div><span className="dc-step__arrow">→</span>
          <div className="dc-step"><span className="dc-step__circle">Implementation</span></div><span className="dc-step__arrow">→</span>
          <div className="dc-step"><span className="dc-step__circle">Advisory</span></div>
        </div>
      </div></section>

      <section className="dc-reliable"><div className="dc-container"><div className="dc-reliable__inner dc-animate">
        <h2 className="dc-reliable__heading">Why Choose mTouch Labs for <span className="dc-text-accent">DevOps Consulting</span>?</h2>
        <p className="dc-reliable__text">We guide organizations toward measurable DevOps excellence.</p>
        <div className="dc-reliable__pillars">
          <div className="dc-pillar"><span className="dc-pillar__dot"></span><span className="dc-pillar__label">Strategy-first DevOps advisory</span></div>
          <div className="dc-pillar"><span className="dc-pillar__dot"></span><span className="dc-pillar__label">Enterprise transformation expertise</span></div>
          <div className="dc-pillar"><span className="dc-pillar__dot"></span><span className="dc-pillar__label">Automation roadmap design</span></div>
          <div className="dc-pillar"><span className="dc-pillar__dot"></span><span className="dc-pillar__label">Cloud-aligned frameworks</span></div>
          <div className="dc-pillar"><span className="dc-pillar__dot"></span><span className="dc-pillar__label">Security-integrated planning</span></div>
          <div className="dc-pillar"><span className="dc-pillar__dot"></span><span className="dc-pillar__label">Long-term scalability focus</span></div>
        </div>
      </div></div></section>

      <section className="dc-industries"><div className="dc-container">
        <h2 className="dc-industries__title dc-animate">Industries We <span className="dc-text-accent">Serve</span></h2>
        <div className="dc-industries__grid dc-stagger">
          <div className="dc-industry dc-animate--scale"><span className="dc-industry__icon">💻</span><h4 className="dc-industry__title">SaaS &amp; Technology</h4></div>
          <div className="dc-industry dc-animate--scale"><span className="dc-industry__icon">💳</span><h4 className="dc-industry__title">Financial Services</h4></div>
          <div className="dc-industry dc-animate--scale"><span className="dc-industry__icon">🏥</span><h4 className="dc-industry__title">Healthcare Systems</h4></div>
          <div className="dc-industry dc-animate--scale"><span className="dc-industry__icon">🏢</span><h4 className="dc-industry__title">Enterprise B2B</h4></div>
          <div className="dc-industry dc-animate--scale"><span className="dc-industry__icon">🛒</span><h4 className="dc-industry__title">eCommerce Businesses</h4></div>
          <div className="dc-industry dc-animate--scale"><span className="dc-industry__icon">🤖</span><h4 className="dc-industry__title">AI &amp; Data Organizations</h4></div>
        </div>
      </div></section>

      <section className="dc-tech"><div className="dc-container"><div className="dc-tech__grid">
        <div className="dc-animate--left">
          <h2 className="dc-tech__heading">Devops Consulting <span className="dc-text-accent">Technologies Services</span></h2>
          <p className="dc-tech__text">Industry-standard DevOps tools and cloud-native platforms we consult on.</p>
          <div className="dc-tech__tags">
            {["Docker","Kubernetes","Terraform","Ansible","Jenkins","GitHub Actions","GitLab CI","AWS CodePipeline","Azure DevOps","ArgoCD","Helm","Prometheus","Grafana","Datadog","ELK Stack","SonarQube","Vault","CI/CD"].map((t)=>(<span key={t} className="dc-tag">{t}</span>))}
          </div>
        </div>
        <div className="dc-tech__stats dc-animate--right">
          <div className="dc-stat dc-stat--dark"><span className="dc-stat__number">18+</span><span className="dc-stat__label">DevOps Tools</span></div>
          <div className="dc-stat dc-stat--dark"><span className="dc-stat__number">K8s</span><span className="dc-stat__label">Orchestration</span></div>
          <div className="dc-stat dc-stat--dark"><span className="dc-stat__number">IaC</span><span className="dc-stat__label">Infrastructure as Code</span></div>
          <div className="dc-stat dc-stat--dark"><span className="dc-stat__number">CI/CD</span><span className="dc-stat__label">Pipeline Design</span></div>
        </div>
      </div></div></section>

      <section className="dc-faq"><div className="dc-container"><div className="dc-faq__wrapper">
        <h3 className="dc-faq__heading dc-animate">Frequently Asked <span className="dc-text-accent">Questions</span></h3>
        <p className="dc-faq__subtext">Everything about DevOps consulting</p>
        <div className="dc-faq__list">
          <details className="dc-faq__item"><summary className="dc-faq__question"><span>What are DevOps consulting services?</span><span className="dc-faq__chevron"></span></summary><div className="dc-faq__answer"><p>DevOps consulting services involve assessing and designing strategies to improve software delivery, automation, and infrastructure reliability through structured advisory.</p></div></details>
          <details className="dc-faq__item"><summary className="dc-faq__question"><span>How is consulting different from implementation?</span><span className="dc-faq__chevron"></span></summary><div className="dc-faq__answer"><p>Consulting focuses on strategy, assessment, and roadmap planning, while <a href="/devops-services" style={{color: "#2563eb", textDecoration: "none", fontWeight: 600}}>implementation</a> involves the technical execution of those strategies.</p></div></details>
          <details className="dc-faq__item"><summary className="dc-faq__question"><span>Can DevOps consulting improve deployment speed?</span><span className="dc-faq__chevron"></span></summary><div className="dc-faq__answer"><p>Yes. Structured automation strategies reduce manual bottlenecks and accelerate release cycles — our clients typically see 10x faster deployments.</p></div></details>
          <details className="dc-faq__item"><summary className="dc-faq__question"><span>Is DevOps consulting suitable for enterprises?</span><span className="dc-faq__chevron"></span></summary><div className="dc-faq__answer"><p>Yes. Enterprises benefit from structured governance, scalable transformation frameworks, and our <a href="/app-maintenance-support-services" style={{color: "#2563eb", textDecoration: "none", fontWeight: 600}}>ongoing support models</a>.</p></div></details>
        </div>
      </div></div></section>

      <section className="dc-cta"><div className="dc-container"><div className="dc-cta__inner dc-animate--scale">
        <h2 className="dc-cta__heading">Ready to Transform Your <span className="dc-text-accent">DevOps Strategy</span>?</h2>
        <p className="dc-cta__text">Let&apos;s discuss how strategic DevOps consulting can accelerate your software delivery and operational excellence.</p>
        <button type="button" className="dc-cta__button js-open-modal">Book a Consultation</button>
      </div></div></section>
    </>
  );
}