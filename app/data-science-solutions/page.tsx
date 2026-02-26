import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Data Science Solutions | mTouch Labs",
  description: "mTouch Labs delivers data science solutions including predictive analytics, business intelligence, and scalable data engineering services.",
  keywords: ["data science solutions","predictive analytics","business intelligence","data engineering services","statistical modeling","data-driven decision making"],
  alternates: { canonical: "https://www.mtouchlabs.com/data-science-solutions" },
  openGraph: { title: "Data Science Solutions | mTouch Labs", description: "Advanced data analytics and predictive modeling solutions for enterprise decision intelligence.", url: "https://www.mtouchlabs.com/data-science-solutions", siteName: "mTouch Labs", type: "website" },
  twitter: { card: "summary_large_image", title: "Data Science Solutions | mTouch Labs", description: "Enterprise data analytics, forecasting, and intelligence solutions." },
};

export default function DataScienceSolutions() {
  return (
    <>
      <section className="ds-hero"><div className="ds-hero__inner">
        <Breadcrumb pagePath="/data-science-solutions" />
        <h1 className="ds-hero__title">Data <span className="ds-hero__title-accent">Science</span> Solutions</h1>
        <p className="ds-hero__subtitle">Turning Complex Data into Strategic Business Intelligence</p>
        <p className="ds-hero__desc">mTouch Labs delivers advanced data science solutions that help organizations transform raw data into actionable intelligence. Data is valuable — only when it becomes insight.</p>
      </div></section>

      <section className="ds-about"><div className="ds-container"><div className="ds-about__grid">
        <div className="ds-about__content ds-animate--left">
          <h2 className="ds-about__heading">What Are <span className="ds-text-accent">Data Science</span> Solutions?</h2>
          <p className="ds-about__text">Data science solutions involve collecting, analyzing, modeling, and interpreting data to solve business problems and improve strategic outcomes — including data exploration, predictive analytics, statistical modeling, pattern recognition, business intelligence dashboards, and data-driven forecasting.</p>
          <p className="ds-about__text">The goal is not just reporting — it is measurable decision advantage. Our <a href="/machine-learning-development-company" style={{color: "#2563eb", textDecoration: "none", fontWeight: 600}}>machine learning services</a> complement data science with automated model training and deployment.</p>
          <p className="ds-about__text">Combined with <a href="/generative-ai-development-company" style={{color: "#2563eb", textDecoration: "none", fontWeight: 600}}>generative AI</a>, we transform analytical insights into intelligent automation that drives real business outcomes on <a href="/cloud-services" style={{color: "#2563eb", textDecoration: "none", fontWeight: 600}}>scalable cloud infrastructure</a>.</p>
        </div>
        <div className="ds-stats ds-animate--right">
          <div className="ds-stat"><span className="ds-stat__icon">📊</span><span className="ds-stat__label">Predictive Analytics</span></div>
          <div className="ds-stat"><span className="ds-stat__icon">🏗️</span><span className="ds-stat__label">Data Engineering</span></div>
          <div className="ds-stat"><span className="ds-stat__icon">📈</span><span className="ds-stat__label">Business Intelligence</span></div>
          <div className="ds-stat"><span className="ds-stat__icon">🔬</span><span className="ds-stat__label">Statistical Modeling</span></div>
        </div>
      </div></div></section>

      <section className="ds-whoweare"><div className="ds-container"><div className="ds-whoweare__grid">
        <div className="ds-whoweare__stats ds-animate--left">
          <div className="ds-stat ds-stat--dark"><span className="ds-stat__number">200+</span><span className="ds-stat__label">Analytics Projects</span></div>
          <div className="ds-stat ds-stat--dark"><span className="ds-stat__number">95%</span><span className="ds-stat__label">Forecast Accuracy</span></div>
          <div className="ds-stat ds-stat--dark"><span className="ds-stat__number">PB+</span><span className="ds-stat__label">Data Processed</span></div>
          <div className="ds-stat ds-stat--dark"><span className="ds-stat__number">14+</span><span className="ds-stat__label">Years Experience</span></div>
        </div>
        <div className="ds-whoweare__content ds-animate--right">
          <h2 className="ds-whoweare__heading">Business Impact of <span className="ds-text-accent">Data Science</span></h2>
          <p className="ds-whoweare__text">Data science shifts organizations from reactive analysis to predictive intelligence:</p>
          <ul className="ds-checklist">
            <li className="ds-checklist__item"><span className="ds-checklist__icon">✓</span><span>Better strategic decisions &amp; reduced operational risk</span></li>
            <li className="ds-checklist__item"><span className="ds-checklist__icon">✓</span><span>Improved forecasting accuracy &amp; enhanced customer insights</span></li>
            <li className="ds-checklist__item"><span className="ds-checklist__icon">✓</span><span>Increased revenue optimization &amp; measurable performance visibility</span></li>
            <li className="ds-checklist__item"><span className="ds-checklist__icon">✓</span><span>Real-time KPI tracking with interactive dashboards</span></li>
            <li className="ds-checklist__item"><span className="ds-checklist__icon">✓</span><span>Data governance aligned with <a href="/enterprise-application-development-company" style={{color: "#2563eb", textDecoration: "none", fontWeight: 600}}>enterprise systems</a></span></li>
          </ul>
        </div>
      </div></div></section>

      <section className="ds-services"><div className="ds-container">
        <div className="ds-services__header ds-animate"><h2 className="ds-services__title">Our Data Science <span className="ds-text-accent">Capabilities</span></h2><p className="ds-services__subtitle">From predictive analytics to data strategy consulting</p></div>
        <div className="ds-services__grid ds-stagger">
          <div className="ds-service-card ds-animate--scale"><span className="ds-service-card__badge">01</span><h4 className="ds-service-card__title">Predictive Analytics &amp; Forecasting</h4><p className="ds-service-card__text">Predictive models for demand forecasting, risk pattern identification, pricing optimization, customer retention improvement, and operational challenge anticipation.</p></div>
          <div className="ds-service-card ds-animate--scale"><span className="ds-service-card__badge">02</span><h4 className="ds-service-card__title">Data Engineering &amp; Infrastructure</h4><p className="ds-service-card__text">Data pipelines, ETL processes, scalable data storage, cloud-based analytics infrastructure, and real-time processing frameworks for reliable insights.</p></div>
          <div className="ds-service-card ds-animate--scale"><span className="ds-service-card__badge">03</span><h4 className="ds-service-card__title">Business Intelligence &amp; Visualization</h4><p className="ds-service-card__text">Interactive dashboards with real-time performance metrics, KPI tracking, trend analysis, data storytelling, and executive reporting systems.</p></div>
          <div className="ds-service-card ds-animate--scale"><span className="ds-service-card__badge">04</span><h4 className="ds-service-card__title">Statistical &amp; Analytical Modeling</h4><p className="ds-service-card__text">Regression analysis, clustering techniques, trend identification, anomaly detection, and scenario simulation aligned with real business objectives.</p></div>
          <div className="ds-service-card ds-service-card--wide ds-animate--scale"><span className="ds-service-card__badge">05</span><h4 className="ds-service-card__title">Data Strategy Consulting</h4><p className="ds-service-card__text">Data governance frameworks, quality standards improvement, analytics-growth alignment, measurable KPI identification, and reporting workflow optimization.</p></div>
        </div>
      </div></section>

      <section className="ds-delivery"><div className="ds-container">
        <h2 className="ds-delivery__heading ds-animate">Our Implementation <span className="ds-text-accent">Framework</span></h2>
        <p className="ds-delivery__text">Ensuring accuracy, reliability, and long-term scalability.</p>
        <div className="ds-delivery__steps">
          <div className="ds-step"><span className="ds-step__circle">Problem ID</span></div><span className="ds-step__arrow">→</span>
          <div className="ds-step"><span className="ds-step__circle">Data Assessment</span></div><span className="ds-step__arrow">→</span>
          <div className="ds-step"><span className="ds-step__circle">Model Design</span></div><span className="ds-step__arrow">→</span>
          <div className="ds-step"><span className="ds-step__circle">Validation</span></div><span className="ds-step__arrow">→</span>
          <div className="ds-step"><span className="ds-step__circle">Deployment</span></div><span className="ds-step__arrow">→</span>
          <div className="ds-step"><span className="ds-step__circle">Monitoring</span></div><span className="ds-step__arrow">→</span>
          <div className="ds-step"><span className="ds-step__circle">Optimization</span></div>
        </div>
      </div></section>

      <section className="ds-reliable"><div className="ds-container"><div className="ds-reliable__inner ds-animate">
        <h2 className="ds-reliable__heading">Why Choose mTouch Labs for <span className="ds-text-accent">Data Science</span>?</h2>
        <p className="ds-reliable__text">We transform data complexity into measurable business clarity.</p>
        <div className="ds-reliable__pillars">
          <div className="ds-pillar"><span className="ds-pillar__dot"></span><span className="ds-pillar__label">Structured analytical methodology</span></div>
          <div className="ds-pillar"><span className="ds-pillar__dot"></span><span className="ds-pillar__label">Scalable data infrastructure design</span></div>
          <div className="ds-pillar"><span className="ds-pillar__dot"></span><span className="ds-pillar__label">Predictive modeling expertise</span></div>
          <div className="ds-pillar"><span className="ds-pillar__dot"></span><span className="ds-pillar__label">Cloud-based analytics integration</span></div>
          <div className="ds-pillar"><span className="ds-pillar__dot"></span><span className="ds-pillar__label">Enterprise-focused implementation</span></div>
          <div className="ds-pillar"><span className="ds-pillar__dot"></span><span className="ds-pillar__label">Continuous performance refinement</span></div>
        </div>
      </div></div></section>

      <section className="ds-industries"><div className="ds-container">
        <h2 className="ds-industries__title ds-animate">Industries Leveraging <span className="ds-text-accent">Data Science</span></h2>
        <div className="ds-industries__grid ds-stagger">
          <div className="ds-industry ds-animate--scale"><span className="ds-industry__icon">💳</span><h4 className="ds-industry__title">Financial Services</h4></div>
          <div className="ds-industry ds-animate--scale"><span className="ds-industry__icon">🏥</span><h4 className="ds-industry__title">Healthcare &amp; Clinical</h4></div>
          <div className="ds-industry ds-animate--scale"><span className="ds-industry__icon">🛒</span><h4 className="ds-industry__title">eCommerce &amp; Retail</h4></div>
          <div className="ds-industry ds-animate--scale"><span className="ds-industry__icon">🚛</span><h4 className="ds-industry__title">Logistics &amp; Supply Chain</h4></div>
          <div className="ds-industry ds-animate--scale"><span className="ds-industry__icon">💻</span><h4 className="ds-industry__title">SaaS &amp; Technology</h4></div>
          <div className="ds-industry ds-animate--scale"><span className="ds-industry__icon">🏢</span><h4 className="ds-industry__title">Enterprise Corporate</h4></div>
        </div>
      </div></section>

      <section className="ds-tech"><div className="ds-container"><div className="ds-tech__grid">
        <div className="ds-animate--left">
          <h2 className="ds-tech__heading">Data Science<span className="ds-text-accent">Development Technologies</span></h2>
          <p className="ds-tech__text">Enterprise data platforms and analytical frameworks for scalable intelligence.</p>
          <div className="ds-tech__tags">
            {["Python","R","SQL","Pandas","NumPy","Scikit-learn","TensorFlow","PyTorch","Apache Spark","Hadoop","Airflow","dbt","Snowflake","BigQuery","Redshift","Tableau","Power BI","Looker","AWS","Azure"].map((t)=>(<span key={t} className="ds-tag">{t}</span>))}
          </div>
        </div>
        <div className="ds-tech__stats ds-animate--right">
          <div className="ds-stat ds-stat--dark"><span className="ds-stat__number">20+</span><span className="ds-stat__label">Analytics Tools</span></div>
          <div className="ds-stat ds-stat--dark"><span className="ds-stat__number">BI</span><span className="ds-stat__label">Dashboard Platforms</span></div>
          <div className="ds-stat ds-stat--dark"><span className="ds-stat__number">ETL</span><span className="ds-stat__label">Data Pipelines</span></div>
          <div className="ds-stat ds-stat--dark"><span className="ds-stat__number">3</span><span className="ds-stat__label">Cloud Platforms</span></div>
        </div>
      </div></div></section>

      <section className="ds-faq"><div className="ds-container"><div className="ds-faq__wrapper">
        <h3 className="ds-faq__heading ds-animate">Frequently Asked <span className="ds-text-accent">Questions</span></h3>
        <p className="ds-faq__subtext">Everything about data science solutions</p>
        <div className="ds-faq__list">
          <details className="ds-faq__item"><summary className="ds-faq__question"><span>What are data science solutions?</span><span className="ds-faq__chevron"></span></summary><div className="ds-faq__answer"><p>Data science solutions use analytics, statistical modeling, and data engineering to extract actionable insights from structured and unstructured datasets.</p></div></details>
          <details className="ds-faq__item"><summary className="ds-faq__question"><span>How do data science solutions benefit businesses?</span><span className="ds-faq__chevron"></span></summary><div className="ds-faq__answer"><p>They improve forecasting accuracy, optimize decision-making, reduce risk, and enhance operational efficiency with data-driven intelligence.</p></div></details>
          <details className="ds-faq__item"><summary className="ds-faq__question"><span>Is data science different from generative AI?</span><span className="ds-faq__chevron"></span></summary><div className="ds-faq__answer"><p>Yes. Data science focuses on analytics and predictive modeling, while <a href="/generative-ai-development-company" style={{color: "#2563eb", textDecoration: "none", fontWeight: 600}}>generative AI</a> focuses on content and automated generation systems. They complement each other.</p></div></details>
          <details className="ds-faq__item"><summary className="ds-faq__question"><span>Can data science integrate with existing systems?</span><span className="ds-faq__chevron"></span></summary><div className="ds-faq__answer"><p>Yes. Data science frameworks integrate with ERP, CRM, and enterprise data platforms with <a href="/app-maintenance-support-services" style={{color: "#2563eb", textDecoration: "none", fontWeight: 600}}>ongoing support</a>.</p></div></details>
        </div>
      </div></div></section>

      <section className="ds-cta"><div className="ds-container"><div className="ds-cta__inner ds-animate--scale">
        <h2 className="ds-cta__heading">Ready to Unlock <span className="ds-text-accent">Data Intelligence</span>?</h2>
        <p className="ds-cta__text">Let&apos;s discuss how data science can transform your raw data into strategic business intelligence.</p>
        <button type="button" className="ds-cta__button js-open-modal">Start Your Data Project</button>
      </div></div></section>
    </>
  );
}