import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "DevOps Services | mTouch Labs",
  description: "mTouch Labs provides DevOps services including CI/CD implementation, automation, monitoring, and scalable enterprise DevOps solutions.",
  keywords: ["DevOps services","CI/CD implementation","DevOps automation","infrastructure as code","container orchestration","DevOps consulting"],
  alternates: { canonical: "https://www.mtouchlabs.com/devops-services" },
  openGraph: { title: "DevOps Services | mTouch Labs", description: "Enterprise DevOps automation, CI/CD implementation, and scalable infrastructure solutions.", url: "https://www.mtouchlabs.com/devops-services", siteName: "mTouch Labs", type: "website" },
  twitter: { card: "summary_large_image", title: "DevOps Services | mTouch Labs", description: "Automation-driven DevOps solutions for modern cloud environments." },
};

export default function DevOpsServices() {
  return (
    <>
      <section className="do-hero"><div className="do-hero__inner">
        <Breadcrumb pagePath="/devops-services" />
        <h1 className="do-hero__title">DevOps <span className="do-hero__title-accent">Services</span></h1>
        <p className="do-hero__subtitle">Accelerating Software Delivery Through Automation, Reliability &amp; Continuous Innovation</p>
        <p className="do-hero__desc">mTouch Labs delivers structured DevOps services that streamline development workflows, automate infrastructure, and improve deployment reliability across cloud environments. Speed without control creates risk. DevOps creates balance.</p>
      </div></section>

      <section className="do-about"><div className="do-container"><div className="do-about__grid">
        <div className="do-about__content do-animate--left">
          <h2 className="do-about__heading">What Are <span className="do-text-accent">DevOps Services</span>?</h2>
          <p className="do-about__text">DevOps services involve implementing automation, integration pipelines, monitoring systems, and infrastructure management frameworks that improve collaboration between development and operations teams.</p>
          <p className="do-about__text">Professional DevOps solutions include CI/CD, Infrastructure as Code, container orchestration, monitoring &amp; observability, and release management automation. Our <a href="/cloud-services" style={{color: "#2563eb", textDecoration: "none", fontWeight: 600}}>cloud services</a> provide the foundation for scalable DevOps infrastructure.</p>
          <p className="do-about__text">Combined with <a href="/devops-consulting-services" style={{color: "#2563eb", textDecoration: "none", fontWeight: 600}}>DevOps consulting</a>, we design and implement frameworks that reduce deployment friction while improving reliability.</p>
        </div>
        <div className="do-stats do-animate--right">
          <div className="do-stat"><span className="do-stat__icon">🔄</span><span className="do-stat__label">CI/CD Pipelines</span></div>
          <div className="do-stat"><span className="do-stat__icon">📦</span><span className="do-stat__label">Container Orchestration</span></div>
          <div className="do-stat"><span className="do-stat__icon">📋</span><span className="do-stat__label">Infrastructure as Code</span></div>
          <div className="do-stat"><span className="do-stat__icon">📊</span><span className="do-stat__label">Monitoring &amp; Observability</span></div>
        </div>
      </div></div></section>

      <section className="do-whoweare"><div className="do-container"><div className="do-whoweare__grid">
        <div className="do-whoweare__stats do-animate--left">
          <div className="do-stat do-stat--dark"><span className="do-stat__number">500+</span><span className="do-stat__label">DevOps Projects</span></div>
          <div className="do-stat do-stat--dark"><span className="do-stat__number">10x</span><span className="do-stat__label">Faster Deploys</span></div>
          <div className="do-stat do-stat--dark"><span className="do-stat__number">99.9%</span><span className="do-stat__label">Pipeline Uptime</span></div>
          <div className="do-stat do-stat--dark"><span className="do-stat__number">24/7</span><span className="do-stat__label">Monitoring</span></div>
        </div>
        <div className="do-whoweare__content do-animate--right">
          <h2 className="do-whoweare__heading">Our DevOps <span className="do-text-accent">Capabilities</span></h2>
          <p className="do-whoweare__text">End-to-end DevOps engineering across the software lifecycle:</p>
          <ul className="do-checklist">
            <li className="do-checklist__item"><span className="do-checklist__icon">✓</span><span>CI/CD pipeline implementation &amp; deployment automation</span></li>
            <li className="do-checklist__item"><span className="do-checklist__icon">✓</span><span>Infrastructure as Code (IaC) — Terraform, CloudFormation, Ansible</span></li>
            <li className="do-checklist__item"><span className="do-checklist__icon">✓</span><span>Containerization &amp; orchestration — Docker, Kubernetes</span></li>
            <li className="do-checklist__item"><span className="do-checklist__icon">✓</span><span>Monitoring &amp; observability — Prometheus, Grafana, Datadog</span></li>
            <li className="do-checklist__item"><span className="do-checklist__icon">✓</span><span>DevSecOps — automated security scanning &amp; compliance</span></li>
          </ul>
        </div>
      </div></div></section>

      <section className="do-services"><div className="do-container">
        <div className="do-services__header do-animate"><h2 className="do-services__title">Our DevOps <span className="do-text-accent">Services</span></h2><p className="do-services__subtitle">From CI/CD to enterprise-grade automation</p></div>
        <div className="do-services__grid do-stagger">
          <div className="do-service-card do-animate--scale"><span className="do-service-card__badge">01</span><h4 className="do-service-card__title">CI/CD Pipeline Implementation</h4><p className="do-service-card__text">Automated build pipelines, code integration workflows, deployment automation, version control integration, and testing automation reducing manual errors.</p></div>
          <div className="do-service-card do-animate--scale"><span className="do-service-card__badge">02</span><h4 className="do-service-card__title">Infrastructure as Code</h4><p className="do-service-card__text">Code-driven infrastructure provisioning, environment replication, configuration management, and automated scaling frameworks for reproducibility.</p></div>
          <div className="do-service-card do-animate--scale"><span className="do-service-card__badge">03</span><h4 className="do-service-card__title">Containerization &amp; Orchestration</h4><p className="do-service-card__text">Container-based architecture, microservices deployment, orchestration frameworks, and scalable cluster environments improving portability.</p></div>
          <div className="do-service-card do-animate--scale"><span className="do-service-card__badge">04</span><h4 className="do-service-card__title">Monitoring &amp; Observability</h4><p className="do-service-card__text">Real-time performance monitoring, log aggregation systems, alert management frameworks, and incident response workflows for system resilience.</p></div>
          <div className="do-service-card do-service-card--wide do-animate--scale"><span className="do-service-card__badge">05</span><h4 className="do-service-card__title">DevSecOps Integration</h4><p className="do-service-card__text">Automated security scanning, compliance validation, secure configuration practices, and vulnerability monitoring — security integrated into every pipeline stage.</p></div>
        </div>
      </div></section>

      <section className="do-delivery"><div className="do-container">
        <h2 className="do-delivery__heading do-animate">Our DevOps <span className="do-text-accent">Implementation Framework</span></h2>
        <p className="do-delivery__text">Structured execution ensures sustainable improvement.</p>
        <div className="do-delivery__steps">
          <div className="do-step"><span className="do-step__circle">Assessment</span></div><span className="do-step__arrow">→</span>
          <div className="do-step"><span className="do-step__circle">Architecture</span></div><span className="do-step__arrow">→</span>
          <div className="do-step"><span className="do-step__circle">Automation</span></div><span className="do-step__arrow">→</span>
          <div className="do-step"><span className="do-step__circle">Monitoring</span></div><span className="do-step__arrow">→</span>
          <div className="do-step"><span className="do-step__circle">Security</span></div><span className="do-step__arrow">→</span>
          <div className="do-step"><span className="do-step__circle">Optimization</span></div>
        </div>
      </div></section>

      <section className="do-reliable"><div className="do-container"><div className="do-reliable__inner do-animate">
        <h2 className="do-reliable__heading">Why Choose mTouch Labs for <span className="do-text-accent">DevOps</span>?</h2>
        <p className="do-reliable__text">We build DevOps systems that support innovation at scale.</p>
        <div className="do-reliable__pillars">
          <div className="do-pillar"><span className="do-pillar__dot"></span><span className="do-pillar__label">Automation-first methodology</span></div>
          <div className="do-pillar"><span className="do-pillar__dot"></span><span className="do-pillar__label">Cloud-native expertise</span></div>
          <div className="do-pillar"><span className="do-pillar__dot"></span><span className="do-pillar__label">Enterprise DevOps frameworks</span></div>
          <div className="do-pillar"><span className="do-pillar__dot"></span><span className="do-pillar__label">Security-integrated processes</span></div>
          <div className="do-pillar"><span className="do-pillar__dot"></span><span className="do-pillar__label">Continuous monitoring systems</span></div>
          <div className="do-pillar"><span className="do-pillar__dot"></span><span className="do-pillar__label">Scalable infrastructure alignment</span></div>
        </div>
      </div></div></section>

      <section className="do-industries"><div className="do-container">
        <h2 className="do-industries__title do-animate">Industries We <span className="do-text-accent">Serve</span></h2>
        <div className="do-industries__grid do-stagger">
          <div className="do-industry do-animate--scale"><span className="do-industry__icon">💻</span><h4 className="do-industry__title">SaaS &amp; Technology</h4></div>
          <div className="do-industry do-animate--scale"><span className="do-industry__icon">💳</span><h4 className="do-industry__title">FinTech Applications</h4></div>
          <div className="do-industry do-animate--scale"><span className="do-industry__icon">🏥</span><h4 className="do-industry__title">Healthcare Systems</h4></div>
          <div className="do-industry do-animate--scale"><span className="do-industry__icon">🛒</span><h4 className="do-industry__title">eCommerce Platforms</h4></div>
          <div className="do-industry do-animate--scale"><span className="do-industry__icon">🏢</span><h4 className="do-industry__title">Enterprise B2B</h4></div>
          <div className="do-industry do-animate--scale"><span className="do-industry__icon">🤖</span><h4 className="do-industry__title">AI &amp; Data Companies</h4></div>
        </div>
      </div></section>

      <section className="do-tech"><div className="do-container"><div className="do-tech__grid">
        <div className="do-animate--left">
          <h2 className="do-tech__heading">Devops <span className="do-text-accent">Services Technologies</span></h2>
          <p className="do-tech__text">Industry-standard DevOps tools and cloud-native platforms.</p>
          <div className="do-tech__tags">
            {["Docker","Kubernetes","Terraform","Ansible","Jenkins","GitHub Actions","GitLab CI","AWS CodePipeline","Azure DevOps","ArgoCD","Helm","Prometheus","Grafana","Datadog","ELK Stack","SonarQube","Trivy","Vault","Nginx","CI/CD"].map((t)=>(<span key={t} className="do-tag">{t}</span>))}
          </div>
        </div>
        <div className="do-tech__stats do-animate--right">
          <div className="do-stat do-stat--dark"><span className="do-stat__number">20+</span><span className="do-stat__label">DevOps Tools</span></div>
          <div className="do-stat do-stat--dark"><span className="do-stat__number">K8s</span><span className="do-stat__label">Orchestration</span></div>
          <div className="do-stat do-stat--dark"><span className="do-stat__number">IaC</span><span className="do-stat__label">Terraform &amp; Ansible</span></div>
          <div className="do-stat do-stat--dark"><span className="do-stat__number">CI/CD</span><span className="do-stat__label">Automated Pipelines</span></div>
        </div>
      </div></div></section>

      <section className="do-faq"><div className="do-container"><div className="do-faq__wrapper">
        <h3 className="do-faq__heading do-animate">Frequently Asked <span className="do-text-accent">Questions</span></h3>
        <p className="do-faq__subtext">Everything about our DevOps services</p>
        <div className="do-faq__list">
          <details className="do-faq__item"><summary className="do-faq__question"><span>What are DevOps services?</span><span className="do-faq__chevron"></span></summary><div className="do-faq__answer"><p>DevOps services implement automation and integration systems that improve collaboration between development and operations teams, accelerating software delivery.</p></div></details>
          <details className="do-faq__item"><summary className="do-faq__question"><span>How does DevOps improve software delivery?</span><span className="do-faq__chevron"></span></summary><div className="do-faq__answer"><p>By automating builds, deployments, and monitoring, DevOps reduces errors and accelerates release cycles while maintaining system reliability.</p></div></details>
          <details className="do-faq__item"><summary className="do-faq__question"><span>Is DevOps only for cloud environments?</span><span className="do-faq__chevron"></span></summary><div className="do-faq__answer"><p>No. DevOps supports both cloud and hybrid infrastructure models, though it integrates especially well with <a href="/cloud-services" style={{color: "#2563eb", textDecoration: "none", fontWeight: 600}}>cloud services</a>.</p></div></details>
          <details className="do-faq__item"><summary className="do-faq__question"><span>Can DevOps improve system reliability?</span><span className="do-faq__chevron"></span></summary><div className="do-faq__answer"><p>Yes. Monitoring, automation, and structured deployment practices enhance operational stability and reduce downtime significantly.</p></div></details>
        </div>
      </div></div></section>

      <section className="do-cta"><div className="do-container"><div className="do-cta__inner do-animate--scale">
        <h2 className="do-cta__heading">Ready to Accelerate <span className="do-text-accent">Software Delivery</span>?</h2>
        <p className="do-cta__text">Let&apos;s discuss how DevOps automation can streamline your workflows and improve deployment reliability.</p>
        <button type="button" className="do-cta__button js-open-modal">Start Your DevOps Project</button>
      </div></div></section>
    </>
  );
}