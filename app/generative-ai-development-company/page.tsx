import type { Metadata } from "next";
import ServiceHero from "@/components/sections/ServiceHero";

export const metadata: Metadata = {
  title: "Generative AI Development Company | LLM & AI Solutions",
  description:
    "mTouch Labs builds scalable generative AI solutions, LLM-powered applications, and intelligent automation systems for startups & enterprises. Get a free consultation.",
  keywords: [
    "generative AI development company",
    "AI development company",
    "LLM development services",
    "AI application development",
    "generative AI solutions",
    "AI automation solutions",
    "custom AI development company",
  ],
  alternates: {
    canonical: "/generative-ai-development-company",
  },
  openGraph: {
    title: "Generative AI Development Company | LLM & AI Solutions",
    description:
      "Build intelligent AI solutions with LLMs, automation, and scalable generative AI systems.",
    url: "https://www.mtouchlabs.com/generative-ai-development-company",
    siteName: "mTouch Labs",
    images: [
      {
        url: "/images/generative-ai-development.jpg",
        width: 1200,
        height: 630,
        alt: "Generative AI Development Company",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Generative AI Development Company | LLM & AI Solutions",
    description:
      "Custom AI solutions, LLM applications, and automation systems built for scale.",
    images: ["/images/generative-ai-development.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function GenerativeAIDevelopment() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Generative AI Development Company",
            description:
              "mTouch Labs builds scalable generative AI solutions, LLM-powered applications, and intelligent automation systems for startups & enterprises.",
            url: "https://www.mtouchlabs.com/generative-ai-development-company",
            provider: {
              "@type": "Organization",
              name: "mTouch Labs",
              url: "https://www.mtouchlabs.com",
              logo: "https://www.mtouchlabs.com/images/mtouchlabs-logo.svg",
            },
            areaServed: { "@type": "Country", name: "Worldwide" },
            serviceType: "Generative AI Development Company",
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://www.mtouchlabs.com" },
              {
                "@type": "ListItem",
                position: 2,
                name: "Generative AI Development Company",
                item: "https://www.mtouchlabs.com/generative-ai-development-company",
              },
            ],
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "What is a generative AI development company?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "A generative AI development company builds intelligent systems that generate content, automate workflows, and produce data-driven outputs using advanced AI models.",
                },
              },
              {
                "@type": "Question",
                name: "How can generative AI be used in business?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Generative AI can be used for content creation, customer support automation, data analysis, personalized experiences, and improving operational efficiency.",
                },
              },
              {
                "@type": "Question",
                name: "Do you build custom AI applications?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, mTouch Labs develops custom generative AI solutions tailored to specific business needs, including LLM-based applications and automation systems.",
                },
              },
              {
                "@type": "Question",
                name: "What is RAG in generative AI?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Retrieval-Augmented Generation (RAG) is a technique that connects AI models with external data sources to provide more accurate and context-aware responses.",
                },
              },
              {
                "@type": "Question",
                name: "How long does it take to build a generative AI solution?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "The development timeline depends on project complexity and typically ranges from a few weeks to several months.",
                },
              },
            ],
          }),
        }}
      />

      {/* ===== HERO ===== */}
      <ServiceHero
        badge="AI"
        titleLead="Generative"
        titleAccent="AI"
        titleTail="Development Company"
        description={<>Production-Ready AI Solutions That Go Beyond Demos Generative AI is no longer experimental—it's becoming the foundation of how modern digital products think, respond, and evolve. At mTouch Labs, we build practical, production-ready generative AI solutions that help businesses transform ideas into intelligent systems that can generate content, automate workflows, and deliver context-aware experiences at scale—embedded directly into your <a href="/mobile-app-development-company" style={{ color: "#3E8CFB", textDecoration: "none", fontWeight: 600 }}>mobile apps</a> where relevant.</>}
      />

      {/* ===== ABOUT ===== */}
      <section className="ga-about">
        <div className="ga-container">
          <div className="ga-about__grid">
            <div className="ga-about__content ga-animate--left">
              <h2 className="ga-about__heading">
                What Makes <span className="ga-text-accent">Generative AI</span> Valuable for Businesses?
              </h2>
              <p className="ga-about__text">
                Most organizations don&apos;t need &ldquo;AI for the sake of AI.&rdquo; They need systems that reduce effort, improve accuracy, and unlock new capabilities. The key is not just adopting AI&mdash;but implementing it in a way that fits your workflows, users, and <a href="/ui-ux-design-company" style={{ color: "#3E8CFB", textDecoration: "none", fontWeight: 600 }}>UI/UX design</a>.
              </p>
              <p className="ga-about__text">
                Whether you&apos;re exploring AI for the first time or scaling an existing product, we focus on building solutions that are reliable, secure, and aligned with real business outcomes that integrate with your existing <a href="/custom-software-development-company" style={{ color: "#3E8CFB", textDecoration: "none", fontWeight: 600 }}>software ecosystem</a>.
              </p>
              <ul className="ga-checklist">
                <li className="ga-checklist__item"><span className="ga-checklist__icon">✓</span><span>Faster content generation without sacrificing quality</span></li>
                <li className="ga-checklist__item"><span className="ga-checklist__icon">✓</span><span>Automation of repetitive knowledge-based tasks</span></li>
                <li className="ga-checklist__item"><span className="ga-checklist__icon">✓</span><span>Personalized user experiences at scale</span></li>
                <li className="ga-checklist__item"><span className="ga-checklist__icon">✓</span><span>Intelligent decision support using real-time data</span></li>
                <li className="ga-checklist__item"><span className="ga-checklist__icon">✓</span><span>Continuous learning systems that improve over time</span></li>
              </ul>
            </div>
            <div className="ga-stats ga-animate--right">
              <div className="ga-stat"><span className="ga-stat__icon">🧠</span><span className="ga-stat__label">Adaptive Intelligence</span></div>
              <div className="ga-stat"><span className="ga-stat__icon">✍️</span><span className="ga-stat__label">Content Generation</span></div>
              <div className="ga-stat"><span className="ga-stat__icon">🤖</span><span className="ga-stat__label">Digital Assistants</span></div>
              <div className="ga-stat"><span className="ga-stat__icon">🔒</span><span className="ga-stat__label">Responsible AI</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== WHO WE ARE / BENEFITS ===== */}
      <section className="ga-whoweare">
        <div className="ga-container">
          <div className="ga-whoweare__grid">
            <div className="ga-whoweare__stats ga-animate--left">
              <div className="ga-stat ga-stat--dark"><span className="ga-stat__number">100+</span><span className="ga-stat__label">AI Projects</span></div>
              <div className="ga-stat ga-stat--dark"><span className="ga-stat__number">LLM</span><span className="ga-stat__label">Model Integration</span></div>
              <div className="ga-stat ga-stat--dark"><span className="ga-stat__number">RAG</span><span className="ga-stat__label">Architecture</span></div>
              <div className="ga-stat ga-stat--dark"><span className="ga-stat__number">14+</span><span className="ga-stat__label">Years Experience</span></div>
            </div>
            <div className="ga-whoweare__content ga-animate--right">
              <h2 className="ga-whoweare__heading">
                Benefits of <span className="ga-text-accent">Generative AI</span> for Your Business
              </h2>
              <p className="ga-whoweare__text">
                Implementing generative AI can unlock significant advantages across your organization. Explore our <a href="/blog" style={{ color: "#3E8CFB", textDecoration: "none", fontWeight: 600 }}>generative AI use cases</a> for inspiration.
              </p>
              <ul className="ga-checklist">
                <li className="ga-checklist__item"><span className="ga-checklist__icon">✓</span><span>Reduced operational costs &amp; faster time-to-market</span></li>
                <li className="ga-checklist__item"><span className="ga-checklist__icon">✓</span><span>Improved customer engagement &amp; personalization</span></li>
                <li className="ga-checklist__item"><span className="ga-checklist__icon">✓</span><span>Better decision-making through data-driven insights</span></li>
                <li className="ga-checklist__item"><span className="ga-checklist__icon">✓</span><span>Scalable automation for knowledge-intensive workflows</span></li>
                <li className="ga-checklist__item"><span className="ga-checklist__icon">✓</span><span>Secure, governance-aligned deployment</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SERVICES ===== */}
      <section className="ga-services">
        <div className="ga-container">
          <div className="ga-services__header ga-animate">
            <h2 className="ga-services__title">
              Our Generative AI <span className="ga-text-accent">Development Services</span>
            </h2>
            <p className="ga-services__subtitle">
              AI systems that integrate seamlessly into your existing platforms or operate as standalone products
            </p>
          </div>
          <div className="ga-services__grid ga-stagger">
            <div className="ga-service-card ga-animate--scale">
              <span className="ga-service-card__badge ga-service-card__badge--icon">🧠</span>
              <h4 className="ga-service-card__title">Custom Generative AI Solutions</h4>
              <p className="ga-service-card__text">
                We create tailored AI models and applications designed around your business requirements&mdash;from <a href="/ecommerce-app-development-company" style={{ color: "#3E8CFB", textDecoration: "none", fontWeight: 600 }}>ecommerce personalization</a> to enterprise workflows.
              </p>
            </div>
            <div className="ga-service-card ga-animate--scale">
              <span className="ga-service-card__badge ga-service-card__badge--icon">💬</span>
              <h4 className="ga-service-card__title">LLM-Based Application Development</h4>
              <p className="ga-service-card__text">
                From chat interfaces to internal tools, we build applications powered by large language models that understand context and generate meaningful outputs.
              </p>
            </div>
            <div className="ga-service-card ga-animate--scale">
              <span className="ga-service-card__badge ga-service-card__badge--icon">⚙️</span>
              <h4 className="ga-service-card__title">AI-Powered Automation</h4>
              <p className="ga-service-card__text">
                We automate processes such as document handling, support responses, and internal workflows using AI-driven systems. Read our <a href="/blog" style={{ color: "#3E8CFB", textDecoration: "none", fontWeight: 600 }}>LLM vs machine learning</a> primer.
              </p>
            </div>
            <div className="ga-service-card ga-animate--scale">
              <span className="ga-service-card__badge ga-service-card__badge--icon">🔍</span>
              <h4 className="ga-service-card__title">Retrieval-Augmented Generation (RAG)</h4>
              <p className="ga-service-card__text">
                We implement RAG pipelines to connect AI models with your business data, enabling accurate and context-aware responses.
              </p>
            </div>
            <div className="ga-service-card ga-service-card--wide ga-animate--scale">
              <span className="ga-service-card__badge ga-service-card__badge--icon">🔗</span>
              <h4 className="ga-service-card__title">AI Integration with Web &amp; Mobile Apps</h4>
              <p className="ga-service-card__text">
                We embed AI capabilities into digital products, enhancing functionality without disrupting user experience across your <a href="/web-development-company" style={{ color: "#3E8CFB", textDecoration: "none", fontWeight: 600 }}>web platforms</a> and mobile applications.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== AI USE CASES WE BUILD ===== */}
      <section className="ga-services">
        <div className="ga-container">
          <div className="ga-services__header ga-animate">
            <h2 className="ga-services__title">
              AI Use Cases <span className="ga-text-accent">We Build</span>
            </h2>
            <p className="ga-services__subtitle">
              Our approach is use-case driven. Instead of generic solutions, we focus on solving specific business challenges.
            </p>
          </div>
          <div className="ga-services__grid ga-stagger">
            <div className="ga-service-card ga-animate--scale">
              <span className="ga-service-card__badge ga-service-card__badge--icon">💬</span>
              <h4 className="ga-service-card__title">Intelligent Chat Assistants</h4>
              <p className="ga-service-card__text">
                AI-powered systems that handle customer queries, internal support, and knowledge retrieval with natural, context-aware conversations.
              </p>
            </div>
            <div className="ga-service-card ga-animate--scale">
              <span className="ga-service-card__badge ga-service-card__badge--icon">✍️</span>
              <h4 className="ga-service-card__title">Content Generation Systems</h4>
              <p className="ga-service-card__text">
                Tools that generate marketing content, product descriptions, and documentation efficiently &mdash; at the quality your brand demands.
              </p>
            </div>
            <div className="ga-service-card ga-animate--scale">
              <span className="ga-service-card__badge ga-service-card__badge--icon">⚡</span>
              <h4 className="ga-service-card__title">Business Process Automation</h4>
              <p className="ga-service-card__text">
                AI solutions that reduce manual effort in operations like reporting, data entry, and analysis &mdash; freeing teams to focus on higher-value work.
              </p>
            </div>
            <div className="ga-service-card ga-animate--scale">
              <span className="ga-service-card__badge ga-service-card__badge--icon">🎯</span>
              <h4 className="ga-service-card__title">Recommendation Engines</h4>
              <p className="ga-service-card__text">
                Personalized systems that improve user engagement and conversion rates by surfacing the right content, products, or actions at the right moment.
              </p>
            </div>
            <div className="ga-service-card ga-service-card--wide ga-animate--scale">
              <span className="ga-service-card__badge ga-service-card__badge--icon">📚</span>
              <h4 className="ga-service-card__title">Knowledge Management Platforms</h4>
              <p className="ga-service-card__text">
                Centralized AI systems that organize and retrieve business knowledge instantly &mdash; turning scattered documents, data, and tribal knowledge into a searchable, intelligent asset.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== DELIVERY / APPROACH ===== */}
      <section className="ga-delivery">
        <div className="ga-container">
          <h2 className="ga-delivery__heading ga-animate">
            Our Approach to <span className="ga-text-accent">Generative AI Development</span>
          </h2>
          <p className="ga-delivery__text">
            Building AI is not just about models&mdash;it&apos;s about reliability, usability, and scalability. Curious about the <a href="/blog" style={{ color: "#3E8CFB", textDecoration: "none", fontWeight: 600 }}>cost of AI development</a>? We publish practical breakdowns.
          </p>
          <div className="ga-delivery__steps">
            <div className="ga-step"><span className="ga-step__circle">Problem Definition</span></div>
            <span className="ga-step__arrow">→</span>
            <div className="ga-step"><span className="ga-step__circle">Data Strategy</span></div>
            <span className="ga-step__arrow">→</span>
            <div className="ga-step"><span className="ga-step__circle">Model Selection</span></div>
            <span className="ga-step__arrow">→</span>
            <div className="ga-step"><span className="ga-step__circle">System Design</span></div>
            <span className="ga-step__arrow">→</span>
            <div className="ga-step"><span className="ga-step__circle">Testing</span></div>
            <span className="ga-step__arrow">→</span>
            <div className="ga-step"><span className="ga-step__circle">Deployment</span></div>
            <span className="ga-step__arrow">→</span>
            <div className="ga-step"><span className="ga-step__circle">Monitoring</span></div>
          </div>
        </div>
      </section>

      {/* ===== WHY CHOOSE / RELIABLE ===== */}
      <section className="ga-reliable">
        <div className="ga-container">
          <div className="ga-reliable__inner ga-animate">
            <h2 className="ga-reliable__heading">
              Why <span className="ga-text-accent">Choose mTouch Labs</span>?
            </h2>
            <p className="ga-reliable__text">
              AI projects often fail not because of technology&mdash;but because of poor execution. We combine AI expertise with strong product development capabilities, ensuring that what we build is not just intelligent&mdash;but usable. Browse our <a href="/portfolio" style={{ color: "#3E8CFB", textDecoration: "none", fontWeight: 600 }}>portfolio</a> for shipped examples.
            </p>
            <div className="ga-reliable__pillars">
              <div className="ga-pillar"><span className="ga-pillar__dot"></span><span className="ga-pillar__label">Practical &amp; aligned with business goals</span></div>
              <div className="ga-pillar"><span className="ga-pillar__dot"></span><span className="ga-pillar__label">Scalable &amp; secure by design</span></div>
              <div className="ga-pillar"><span className="ga-pillar__dot"></span><span className="ga-pillar__label">Easy to integrate with existing systems</span></div>
              <div className="ga-pillar"><span className="ga-pillar__dot"></span><span className="ga-pillar__label">Designed for long-term usability</span></div>
              <div className="ga-pillar"><span className="ga-pillar__dot"></span><span className="ga-pillar__label">AI engineering &amp; product expertise</span></div>
              <div className="ga-pillar"><span className="ga-pillar__dot"></span><span className="ga-pillar__label">Transparent, outcome-focused delivery</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== INDUSTRIES ===== */}
      <section className="ga-industries">
        <div className="ga-container">
          <h2 className="ga-industries__title ga-animate">
            Industries We <span className="ga-text-accent">Support</span>
          </h2>
          <div className="ga-industries__grid ga-stagger">
            <div className="ga-industry ga-animate--scale"><span className="ga-industry__icon">🛒</span><h4 className="ga-industry__title">eCommerce</h4></div>
            <div className="ga-industry ga-animate--scale"><span className="ga-industry__icon">🏥</span><h4 className="ga-industry__title">Healthcare</h4></div>
            <div className="ga-industry ga-animate--scale"><span className="ga-industry__icon">💳</span><h4 className="ga-industry__title">Finance</h4></div>
            <div className="ga-industry ga-animate--scale"><span className="ga-industry__icon">🎓</span><h4 className="ga-industry__title">Education</h4></div>
            <div className="ga-industry ga-animate--scale"><span className="ga-industry__icon">💻</span><h4 className="ga-industry__title">SaaS Platforms</h4></div>
            <div className="ga-industry ga-animate--scale"><span className="ga-industry__icon">🏢</span><h4 className="ga-industry__title">Enterprise</h4></div>
          </div>
        </div>
      </section>

      {/* ===== TECH ===== */}
      <section className="ga-tech">
        <div className="ga-container">
          <div className="ga-tech__grid">
            <div className="ga-animate--left">
              <h2 className="ga-tech__heading">
                Technologies <span className="ga-text-accent">We Work With</span>
              </h2>
              <p className="ga-tech__text">
                We leverage modern tools and frameworks to build high-performance AI systems.
              </p>
              <div className="ga-tech__tags">
                {[
                  "Large Language Models",
                  "OpenAI APIs",
                  "LangChain",
                  "LlamaIndex",
                  "Hugging Face",
                  "Python",
                  "TensorFlow",
                  "PyTorch",
                  "AWS",
                  "Google Cloud",
                  "Vector Databases",
                  "Pinecone",
                  "ChromaDB",
                  "RAG Pipelines",
                  "Embeddings",
                  "REST APIs",
                  "Docker",
                  "Kubernetes",
                ].map((t) => (
                  <span key={t} className="ga-tag">
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <div className="ga-tech__stats ga-animate--right">
              <div className="ga-stat ga-stat--dark"><span className="ga-stat__number">20+</span><span className="ga-stat__label">AI Frameworks</span></div>
              <div className="ga-stat ga-stat--dark"><span className="ga-stat__number">LLM</span><span className="ga-stat__label">Integration</span></div>
              <div className="ga-stat ga-stat--dark"><span className="ga-stat__number">RAG</span><span className="ga-stat__label">Architecture</span></div>
              <div className="ga-stat ga-stat--dark"><span className="ga-stat__number">2</span><span className="ga-stat__label">Cloud Platforms</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== EXPLORE RELATED SERVICES ===== */}
      <section className="ga-services">
        <div className="ga-container">
          <div className="ga-services__header ga-animate">
            <h2 className="ga-services__title">
              Explore <span className="ga-text-accent">Related Services</span>
            </h2>
            <p className="ga-services__subtitle">
              To build a complete digital ecosystem, you may also need these services&mdash;we connect all these capabilities to deliver cohesive solutions.
            </p>
          </div>
          <div className="ga-services__grid ga-stagger">
            <a href="/custom-software-development-company" className="ga-service-card ga-animate--scale" style={{ color: "inherit", textDecoration: "none", display: "block", position: "relative" }}>
              <h4 className="ga-service-card__title">Custom Software Development <span style={{ float: "right", color: "#3E8CFB", fontWeight: 700 }} aria-hidden>→</span></h4>
              <p className="ga-service-card__text">
                Tailor-made software that aligns with your workflows, integrates with your systems, and scales with your business.
              </p>
            </a>
            <a href="/web-development-company" className="ga-service-card ga-animate--scale" style={{ color: "inherit", textDecoration: "none", display: "block", position: "relative" }}>
              <h4 className="ga-service-card__title">Web Development Services <span style={{ float: "right", color: "#3E8CFB", fontWeight: 700 }} aria-hidden>→</span></h4>
              <p className="ga-service-card__text">
                Scalable, secure web platforms and SaaS products that pair perfectly with AI-powered capabilities.
              </p>
            </a>
            <a href="/mobile-app-development-company" className="ga-service-card ga-animate--scale" style={{ color: "inherit", textDecoration: "none", display: "block", position: "relative" }}>
              <h4 className="ga-service-card__title">Mobile App Development <span style={{ float: "right", color: "#3E8CFB", fontWeight: 700 }} aria-hidden>→</span></h4>
              <p className="ga-service-card__text">
                End-to-end mobile delivery for Android and iOS, ready to embed AI assistants, automation, and intelligent workflows.
              </p>
            </a>
            <a href="/ui-ux-design-company" className="ga-service-card ga-animate--scale" style={{ color: "inherit", textDecoration: "none", display: "block", position: "relative" }}>
              <h4 className="ga-service-card__title">UI/UX Design Services <span style={{ float: "right", color: "#3E8CFB", fontWeight: 700 }} aria-hidden>→</span></h4>
              <p className="ga-service-card__text">
                Human-centered design that makes AI features feel natural, trustworthy, and easy to adopt.
              </p>
            </a>
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="ga-faq">
        <div className="ga-container">
          <div className="ga-faq__wrapper">
            <h3 className="ga-faq__heading ga-animate">
              Frequently Asked <span className="ga-text-accent">Questions</span>
            </h3>
            <p className="ga-faq__subtext">Everything about generative AI development</p>
            <div className="ga-faq__list">
              <details className="ga-faq__item">
                <summary className="ga-faq__question">
                  <span>What is a generative AI development company?</span>
                  <span className="ga-faq__chevron"></span>
                </summary>
                <div className="ga-faq__answer">
                  <p>A generative AI development company builds intelligent systems that generate content, automate workflows, and produce data-driven outputs using advanced AI models.</p>
                </div>
              </details>
              <details className="ga-faq__item">
                <summary className="ga-faq__question">
                  <span>How can generative AI be used in business?</span>
                  <span className="ga-faq__chevron"></span>
                </summary>
                <div className="ga-faq__answer">
                  <p>Generative AI can be used for content creation, customer support automation, data analysis, personalized experiences, and improving operational efficiency.</p>
                </div>
              </details>
              <details className="ga-faq__item">
                <summary className="ga-faq__question">
                  <span>Do you build custom AI applications?</span>
                  <span className="ga-faq__chevron"></span>
                </summary>
                <div className="ga-faq__answer">
                  <p>Yes, mTouch Labs develops custom generative AI solutions tailored to specific business needs, including LLM-based applications and automation systems.</p>
                </div>
              </details>
              <details className="ga-faq__item">
                <summary className="ga-faq__question">
                  <span>What is RAG in generative AI?</span>
                  <span className="ga-faq__chevron"></span>
                </summary>
                <div className="ga-faq__answer">
                  <p>Retrieval-Augmented Generation (RAG) is a technique that connects AI models with external data sources to provide more accurate and context-aware responses.</p>
                </div>
              </details>
              <details className="ga-faq__item">
                <summary className="ga-faq__question">
                  <span>How long does it take to build a generative AI solution?</span>
                  <span className="ga-faq__chevron"></span>
                </summary>
                <div className="ga-faq__answer">
                  <p>The development timeline depends on project complexity and typically ranges from a few weeks to several months.</p>
                </div>
              </details>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="ga-cta">
        <div className="ga-container">
          <div className="ga-cta__inner ga-animate--scale">
            <h2 className="ga-cta__heading">
              Let&apos;s Build Your <span className="ga-text-accent">AI Solution</span>
            </h2>
            <p className="ga-cta__text">
              If you&apos;re looking to integrate generative AI into your business, we can help you move from idea to execution with clarity and confidence. <a href="/contact-us" style={{ color: "#ffffff", textDecoration: "underline", fontWeight: 600 }}>Talk to our team</a> and let&apos;s create systems that don&apos;t just automate&mdash;but intelligently evolve with your business.
            </p>
            <button type="button" className="ga-cta__button js-open-modal">
              Start Your AI Project
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
