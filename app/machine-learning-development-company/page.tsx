import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Machine Learning Development Company | AI & ML Services | mTouch Labs",
  description: "mTouch Labs is a leading machine learning development company offering AI, predictive analytics, NLP, and enterprise ML solutions for scalable business growth.",
  keywords: ["machine learning services","machine learning development company","AI and ML solutions","machine learning consulting","enterprise AI solutions","predictive analytics company","ML services India"],
  alternates: { canonical: "https://www.mtouchlabs.com/machine-learning-development-company" },
  openGraph: { title: "Machine Learning Development Company | mTouch Labs", description: "Enterprise AI and machine learning services including predictive analytics, NLP, and computer vision solutions.", url: "https://www.mtouchlabs.com/machine-learning-development-company", siteName: "mTouch Labs", type: "website" },
  twitter: { card: "summary_large_image", title: "Machine Learning Development Company | mTouch Labs", description: "Enterprise AI and machine learning services including predictive analytics, NLP, and computer vision solutions." },
};

export default function AIMLServices() {
  return (
    <>
      {/* ===== HERO SECTION ===== */}
      <section className="ml-hero">
        <div className="ml-hero__inner">
          <Breadcrumb pagePath="/machine-learning-development-company" />
          <h1 className="ml-hero__title">
            Enterprise AI &amp;{" "}
            <span className="ml-hero__title-accent">Machine Learning</span>{" "}
            Development Company
          </h1>
          <p className="ml-hero__subtitle">
            Scalable, Data-Driven AI &amp; ML Solutions for Business Growth
          </p>
          <p className="ml-hero__desc">
            mTouch Labs is a results-driven Machine Learning Development Company delivering scalable AI &amp; ML solutions that help businesses automate processes, improve decision-making, and unlock predictive insights.
          </p>
        </div>
      </section>

      {/* ===== WHAT ARE ML SERVICES — About Section ===== */}
      <section className="ml-about">
        <div className="ml-container">
          <div className="ml-about__grid">
            <div className="ml-about__content ml-animate--left">
              <h2 className="ml-about__heading">
                What Are <span className="ml-text-accent">Machine Learning</span> Services?
              </h2>
              <p className="ml-about__text">
                Machine Learning services involve designing algorithms and AI models that enable systems to learn from data, identify patterns, and make intelligent decisions without explicit programming.
              </p>
              <p className="ml-about__text">
                Businesses leverage ML to automate repetitive processes, improve operational efficiency, enhance customer personalization, predict future trends, detect fraud and anomalies, and optimize supply chain performance. Our{" "}
                <a href="/data-science-solutions" style={{color: "#2563eb", textDecoration: "none", fontWeight: 600}}>data science solutions</a>{" "}
                provide the analytical foundation for building accurate ML models.
              </p>
              <p className="ml-about__text">
                As a trusted IT Services and Digital Transformation Company, we design, develop, and deploy machine learning systems tailored to enterprise use cases — from{" "}
                <a href="/generative-ai-development-company" style={{color: "#2563eb", textDecoration: "none", fontWeight: 600}}>generative AI</a>{" "}
                and intelligent automation to recommendation engines and computer vision.
              </p>
            </div>
            <div className="ml-stats ml-animate--right">
              <div className="ml-stat"><span className="ml-stat__icon">🧠</span><span className="ml-stat__label">Custom ML Models</span></div>
              <div className="ml-stat"><span className="ml-stat__icon">📊</span><span className="ml-stat__label">Predictive Analytics</span></div>
              <div className="ml-stat"><span className="ml-stat__icon">💬</span><span className="ml-stat__label">NLP &amp; Chatbots</span></div>
              <div className="ml-stat"><span className="ml-stat__icon">👁️</span><span className="ml-stat__label">Computer Vision</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== OUR ML EXPERTISE — Who We Are Section ===== */}
      <section className="ml-whoweare">
        <div className="ml-container">
          <div className="ml-whoweare__grid">
            <div className="ml-whoweare__stats ml-animate--left">
              <div className="ml-stat ml-stat--dark"><span className="ml-stat__number">14+</span><span className="ml-stat__label">Years of Experience</span></div>
              <div className="ml-stat ml-stat--dark"><span className="ml-stat__number">250+</span><span className="ml-stat__label">ML Models Deployed</span></div>
              <div className="ml-stat ml-stat--dark"><span className="ml-stat__number">1200+</span><span className="ml-stat__label">Global Clients</span></div>
              <div className="ml-stat ml-stat--dark"><span className="ml-stat__number">98%</span><span className="ml-stat__label">Model Accuracy</span></div>
            </div>
            <div className="ml-whoweare__content ml-animate--right">
              <h2 className="ml-whoweare__heading">
                Our <span className="ml-text-accent">ML Expertise</span>
              </h2>
              <p className="ml-whoweare__text">
                At mTouch Labs, we provide end-to-end Machine Learning development services, including:
              </p>
              <ul className="ml-checklist">
                <li className="ml-checklist__item"><span className="ml-checklist__icon">✓</span><span>ML Consulting &amp; Strategy — AI readiness assessment &amp; roadmap</span></li>
                <li className="ml-checklist__item"><span className="ml-checklist__icon">✓</span><span>Custom ML Model Development — Supervised, unsupervised &amp; forecasting</span></li>
                <li className="ml-checklist__item"><span className="ml-checklist__icon">✓</span><span>Natural Language Processing — Chatbots, sentiment analysis &amp; automation</span></li>
                <li className="ml-checklist__item"><span className="ml-checklist__icon">✓</span><span>Computer Vision — Image recognition, object detection &amp; video analytics</span></li>
                <li className="ml-checklist__item"><span className="ml-checklist__icon">✓</span><span>MLOps &amp; Deployment — <a href="/cloud-services" style={{color: "#2563eb", textDecoration: "none", fontWeight: 600}}>Cloud</a> (AWS, Azure, GCP), CI/CD pipelines &amp; monitoring</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SERVICES GRID ===== */}
      <section className="ml-services">
        <div className="ml-container">
          <div className="ml-services__header ml-animate">
            <h2 className="ml-services__title">End-to-End <span className="ml-text-accent">ML Development Services</span></h2>
            <p className="ml-services__subtitle">From consulting to deployment, we cover every stage of the ML lifecycle</p>
          </div>
          <div className="ml-services__grid ml-stagger">
            <div className="ml-service-card ml-animate--scale"><span className="ml-service-card__badge">01</span><h4 className="ml-service-card__title">ML Consulting &amp; Strategy</h4><p className="ml-service-card__text">AI readiness assessment, data infrastructure evaluation, ML roadmap development, and use-case identification.</p></div>
            <div className="ml-service-card ml-animate--scale"><span className="ml-service-card__badge">02</span><h4 className="ml-service-card__title">Custom Model Development</h4><p className="ml-service-card__text">Supervised &amp; unsupervised learning, predictive analytics, classification, regression, and time-series forecasting.</p></div>
            <div className="ml-service-card ml-animate--scale"><span className="ml-service-card__badge">03</span><h4 className="ml-service-card__title">Natural Language Processing</h4><p className="ml-service-card__text">Chatbots, virtual assistants, sentiment analysis, text classification, and document automation.</p></div>
            <div className="ml-service-card ml-animate--scale"><span className="ml-service-card__badge">04</span><h4 className="ml-service-card__title">Computer Vision Solutions</h4><p className="ml-service-card__text">Image recognition, facial recognition, object detection, and video analytics for visual intelligence.</p></div>
            <div className="ml-service-card ml-service-card--wide ml-animate--scale"><span className="ml-service-card__badge">05</span><h4 className="ml-service-card__title">MLOps &amp; Model Deployment</h4><p className="ml-service-card__text">Model training &amp; optimization, cloud deployment (AWS, Azure, GCP), CI/CD for ML pipelines, and performance monitoring.</p></div>
          </div>
        </div>
      </section>

      {/* ===== DEVELOPMENT PROCESS ===== */}
      <section className="ml-delivery">
        <div className="ml-container">
          <h2 className="ml-delivery__heading ml-animate">Our ML <span className="ml-text-accent">Development Process</span></h2>
          <p className="ml-delivery__text">This structured approach ensures measurable ROI and long-term model efficiency.</p>
          <div className="ml-delivery__steps">
            <div className="ml-step"><span className="ml-step__circle">Business Analysis</span></div><span className="ml-step__arrow">→</span>
            <div className="ml-step"><span className="ml-step__circle">Data Collection</span></div><span className="ml-step__arrow">→</span>
            <div className="ml-step"><span className="ml-step__circle">Feature Engineering</span></div><span className="ml-step__arrow">→</span>
            <div className="ml-step"><span className="ml-step__circle">Model Training</span></div><span className="ml-step__arrow">→</span>
            <div className="ml-step"><span className="ml-step__circle">Testing &amp; Optimization</span></div><span className="ml-step__arrow">→</span>
            <div className="ml-step"><span className="ml-step__circle">Deployment</span></div><span className="ml-step__arrow">→</span>
            <div className="ml-step"><span className="ml-step__circle">Monitoring</span></div>
          </div>
        </div>
      </section>

      {/* ===== WHY CHOOSE US ===== */}
      <section className="ml-reliable">
        <div className="ml-container">
          <div className="ml-reliable__inner ml-animate">
            <h2 className="ml-reliable__heading">Why Choose <span className="ml-text-accent">mTouch Labs</span> for ML?</h2>
            <p className="ml-reliable__text">We don&apos;t just build models — we build intelligent systems aligned with business goals.</p>
            <div className="ml-reliable__pillars">
              <div className="ml-pillar"><span className="ml-pillar__dot"></span><span className="ml-pillar__label">Strong data engineering capabilities</span></div>
              <div className="ml-pillar"><span className="ml-pillar__dot"></span><span className="ml-pillar__label">Cloud-native ML architecture</span></div>
              <div className="ml-pillar"><span className="ml-pillar__dot"></span><span className="ml-pillar__label">Secure &amp; scalable AI deployment</span></div>
              <div className="ml-pillar"><span className="ml-pillar__dot"></span><span className="ml-pillar__label">Enterprise integration expertise</span></div>
              <div className="ml-pillar"><span className="ml-pillar__dot"></span><span className="ml-pillar__label">Continuous model optimization</span></div>
              <div className="ml-pillar"><span className="ml-pillar__dot"></span><span className="ml-pillar__label">Transparent reporting &amp; analytics</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== INDUSTRIES ===== */}
      <section className="ml-industries">
        <div className="ml-container">
          <h2 className="ml-industries__title ml-animate">Industries We <span className="ml-text-accent">Serve</span></h2>
          <div className="ml-industries__grid ml-stagger">
            <div className="ml-industry ml-animate--scale"><span className="ml-industry__icon">💰</span><h4 className="ml-industry__title">FinTech &amp; Banking</h4></div>
            <div className="ml-industry ml-animate--scale"><span className="ml-industry__icon">🏥</span><h4 className="ml-industry__title">Healthcare &amp; HealthTech</h4></div>
            <div className="ml-industry ml-animate--scale"><span className="ml-industry__icon">🛒</span><h4 className="ml-industry__title">eCommerce &amp; Retail</h4></div>
            <div className="ml-industry ml-animate--scale"><span className="ml-industry__icon">🏭</span><h4 className="ml-industry__title">Manufacturing &amp; Supply Chain</h4></div>
            <div className="ml-industry ml-animate--scale"><span className="ml-industry__icon">🏠</span><h4 className="ml-industry__title">Real Estate &amp; PropTech</h4></div>
            <div className="ml-industry ml-animate--scale"><span className="ml-industry__icon">🚀</span><h4 className="ml-industry__title">SaaS &amp; Technology Platforms</h4></div>
          </div>
        </div>
      </section>

      {/* ===== TECHNOLOGIES ===== */}
      <section className="ml-tech">
        <div className="ml-container">
          <div className="ml-tech__grid">
            <div className="ml-tech__content ml-animate--left">
              <h2 className="ml-tech__heading">Technologies <span className="ml-text-accent">We Work With</span></h2>
              <p className="ml-tech__text">Our ML solutions are built on scalable cloud infrastructure to ensure high availability and performance.</p>
              <div className="ml-tech__tags">
                {["Python","TensorFlow","PyTorch","Scikit-learn","OpenAI & LLMs","AWS SageMaker","Azure ML","Google AI Platform","Keras","MLflow","Hugging Face","LangChain","NumPy","Pandas","Spark MLlib","Kubeflow","Docker","Kubernetes","CI/CD","Git"].map((t)=>(<span key={t} className="ml-tag">{t}</span>))}
              </div>
            </div>
            <div className="ml-tech__stats ml-animate--right">
              <div className="ml-stat ml-stat--dark"><span className="ml-stat__number">3</span><span className="ml-stat__label">Cloud Platforms</span></div>
              <div className="ml-stat ml-stat--dark"><span className="ml-stat__number">20+</span><span className="ml-stat__label">ML Frameworks</span></div>
              <div className="ml-stat ml-stat--dark"><span className="ml-stat__number">150+</span><span className="ml-stat__label">Expert Engineers</span></div>
              <div className="ml-stat ml-stat--dark"><span className="ml-stat__number">24/7</span><span className="ml-stat__label">Model Monitoring</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="ml-faq">
        <div className="ml-container">
          <div className="ml-faq__wrapper">
            <h3 className="ml-faq__heading ml-animate">Frequently Asked <span className="ml-text-accent">Questions</span></h3>
            <p className="ml-faq__subtext">Everything you need to know about our ML services</p>
            <div className="ml-faq__list">
              <details className="ml-faq__item"><summary className="ml-faq__question"><span>What are machine learning services?</span><span className="ml-faq__chevron"></span></summary><div className="ml-faq__answer"><p>Machine learning services involve developing AI models that analyze data, recognize patterns, and automate decision-making processes.</p></div></details>
              <details className="ml-faq__item"><summary className="ml-faq__question"><span>How can machine learning benefit my business?</span><span className="ml-faq__chevron"></span></summary><div className="ml-faq__answer"><p>ML helps improve efficiency, automate tasks, personalize customer experiences, and generate predictive insights for better decision-making.</p></div></details>
              <details className="ml-faq__item"><summary className="ml-faq__question"><span>How long does it take to implement ML solutions?</span><span className="ml-faq__chevron"></span></summary><div className="ml-faq__answer"><p>Depending on complexity, ML implementation typically takes 8–20 weeks, including data preparation, model training, and deployment.</p></div></details>
              <details className="ml-faq__item"><summary className="ml-faq__question"><span>Does mTouch Labs provide enterprise ML solutions?</span><span className="ml-faq__chevron"></span></summary><div className="ml-faq__answer"><p>Yes. We design scalable, secure, and cloud-integrated machine learning systems tailored for enterprise environments with <a href="/app-maintenance-support-services" style={{color: "#2563eb", textDecoration: "none", fontWeight: 600}}>ongoing support</a>.</p></div></details>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="ml-cta">
        <div className="ml-container">
          <div className="ml-cta__inner ml-animate--scale">
            <h2 className="ml-cta__heading">Ready to Build <span className="ml-text-accent">Intelligent Systems</span>?</h2>
            <p className="ml-cta__text">Let&apos;s discuss how machine learning can transform your business operations and drive measurable growth.</p>
            <button type="button" className="ml-cta__button js-open-modal">Get a Free Consultation</button>
          </div>
        </div>
      </section>
    </>
  );
}