import type { Metadata } from "next";
import ServiceHero from "@/components/sections/ServiceHero";

const IMG = "/images/products/ai_recommendation_engine";

export const metadata: Metadata = {
  title: { absolute: "AI Recommendation Engine Development Company | mTouch Labs" },
  description:
    "Build AI recommendation engines with mTouch Labs to personalize products, content, services, and user experiences with intelligent recommendations.",
  keywords: [
    "AI Recommendation Engine Development Company",
    "AI recommendation engine",
    "recommendation engine development",
    "AI recommendation system",
    "recommendation system development",
    "personalized recommendation engine",
    "AI personalization",
    "product recommendation engine",
    "recommendation engine company",
  ],
  alternates: { canonical: "/ai-recommendation-engine-development" },
  openGraph: {
    title: "AI Recommendation Engine Development Company | mTouch Labs",
    description:
      "Custom AI recommendation engines for e-commerce, marketplaces, SaaS, media, education and travel platforms.",
    url: "https://www.mtouchlabs.com/ai-recommendation-engine-development",
    siteName: "mTouch Labs",
    images: [
      {
        url: `${IMG}/ai-recommendation-engine-mtouchlabs.webp`,
        width: 1200,
        height: 630,
        alt: "AI recommendation engine development by mTouch Labs",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Recommendation Engine Development Company | mTouch Labs",
    description:
      "Personalize products, content and services with a custom AI recommendation engine.",
    images: [`${IMG}/ai-recommendation-engine-mtouchlabs.webp`],
  },
  robots: { index: true, follow: true },
};

const FAQS: { q: string; a: string }[] = [
  {
    q: "What is an AI recommendation engine?",
    a: "An AI recommendation engine is a software system that analyzes available user, item, interaction, and contextual data to generate or rank personalized recommendations.",
  },
  {
    q: "How does a recommendation system work?",
    a: "A recommendation system processes relevant data, generates potential recommendations, ranks them according to the selected approach, and delivers the results through an application or API.",
  },
  {
    q: "What is the difference between an AI recommendation engine and a recommendation system?",
    a: "The terms are often used interchangeably. An AI recommendation engine generally refers to the software component responsible for generating or ranking recommendations, while a recommendation system can refer to the broader architecture surrounding it.",
  },
  {
    q: "Can you build a product recommendation engine?",
    a: "Yes. mTouch Labs can develop custom product recommendation systems for e-commerce platforms, marketplaces, and other digital products.",
  },
  {
    q: "Can recommendations work in real time?",
    a: "Yes, where the application's architecture and data infrastructure support real-time processing. The appropriate approach depends on latency, event volume, model complexity, and business requirements.",
  },
  {
    q: "Can an AI recommendation engine work with existing application data?",
    a: "Yes. Existing product, content, user, and interaction data can be evaluated and incorporated when it is suitable for the recommendation use case.",
  },
  {
    q: "How much does recommendation engine development cost?",
    a: "The cost depends on the recommendation approach, data volume, integrations, application complexity, infrastructure, real-time requirements, and expected scale.",
  },
];

const INDUSTRIES = [
  "Product interactions",
  "Search behaviour",
  "Purchases",
  "Ratings",
  "Clicks",
  "Views",
  "User preferences",
  "Content attributes",
  "Product attributes",
  "Session activity",
  "Location or context",
  "Historical interactions",
  "Business rules",
];

export default function AIRecommendationEngineDevelopment() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "AI Recommendation Engine Development Company",
            description:
              "mTouch Labs builds custom AI recommendation engines that personalize products, content and services using behavioural signals, catalogue data, ranking models and your own business rules.",
            url: "https://www.mtouchlabs.com/ai-recommendation-engine-development",
            provider: {
              "@type": "Organization",
              name: "mTouch Labs",
              url: "https://www.mtouchlabs.com",
              logo: "https://www.mtouchlabs.com/images/mtouchlabs-logo.svg",
            },
            areaServed: { "@type": "Country", name: "Worldwide" },
            serviceType: "AI Recommendation Engine Development",
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
                name: "AI Recommendation Engine Development Company",
                item: "https://www.mtouchlabs.com/ai-recommendation-engine-development",
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
            mainEntity: FAQS.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          }),
        }}
      />

      <style
        dangerouslySetInnerHTML={{
          __html: `
.aip-figure {
  max-width: 1140px;
  margin: 0 auto;
  padding: 0 24px;
}
.aip-figure--tight { max-width: 900px; }
.aip-figure--flush { margin-top: 8px; }
.aip-figure__frame {
  border-radius: 18px;
  overflow: hidden;
  border: 1px solid #E5E9F2;
  background: #F7FAFF;
  box-shadow: 0 18px 50px -28px rgba(1, 29, 128, .28);
  line-height: 0;
}
.aip-figure__frame img {
  display: block;
  width: 100%;
  height: auto;
}
.aip-figure__caption {
  margin: 14px 0 0;
  text-align: center;
  font-family: var(--font-primary, 'Poppins', sans-serif);
  font-size: 14px;
  line-height: 22px;
  color: var(--color-slate-grey, #777777);
}
.aip-figure-band {
  padding: 54px 0 10px;
  background: linear-gradient(180deg, #FFFFFF 0%, #F9FBFF 100%);
}
.aip-note {
  max-width: 900px;
  margin: 30px auto 0;
  padding: 18px 22px;
  border-left: 3px solid #3E8CFB;
  border-radius: 0 12px 12px 0;
  background: #F2F7FF;
  font-family: var(--font-primary, 'Poppins', sans-serif);
  font-size: 15px;
  line-height: 26px;
  color: #222222;
}
.aip-industries {
  max-width: 1140px;
  margin: 0 auto;
  padding: 0 24px;
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  justify-content: center;
}
.aip-industry-pill {
  display: inline-flex;
  align-items: center;
  padding: 10px 20px;
  border-radius: 999px;
  border: 1px solid #E5E9F2;
  background: #FFFFFF;
  font-family: var(--font-primary, 'Poppins', sans-serif);
  font-size: 15px;
  font-weight: 500;
  color: #0D1117;
  box-shadow: 0 8px 22px -18px rgba(1, 29, 128, .45);
  cursor: default;
}
.aip-flow {
  max-width: 1140px;
  margin: 0 auto 6px;
  padding: 0 24px;
}
.aip-flow__list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 22px;
}
.aip-step {
  position: relative;
  padding: 26px 24px 24px;
  border-radius: 16px;
  border: 1px solid #E5E9F2;
  background: #FFFFFF;
  box-shadow: 0 18px 44px -32px rgba(1, 29, 128, .32);
}
.aip-step__num {
  display: block;
  font-family: var(--font-primary, 'Poppins', sans-serif);
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 1.4px;
  color: #3E8CFB;
  margin-bottom: 10px;
}
.aip-step__title {
  margin: 0 0 8px;
  font-family: var(--font-primary, 'Poppins', sans-serif);
  font-size: 19px;
  font-weight: 600;
  line-height: 28px;
  color: #3E8CFB;
}
.aip-step__text {
  margin: 0;
  font-family: var(--font-primary, 'Poppins', sans-serif);
  font-size: 15px;
  line-height: 26px;
  color: var(--ga-text, #222222);
}
@media (max-width: 1024px) {
  .aip-flow__list { grid-template-columns: repeat(2, minmax(0, 1fr)); }
}
@media (max-width: 640px) {
  .aip-flow__list { grid-template-columns: 1fr; }
}
@media (max-width: 768px) {
  .aip-figure, .aip-industries, .aip-flow { padding: 0 18px; }
  .aip-figure-band { padding: 38px 0 6px; }
}
`,
        }}
      />

      <ServiceHero
        badge="AI RECOMMENDATION ENGINE"
        titleLead="AI Recommendation Engine"
        titleAccent="Development"
        titleTail="Company"
        description={
          <>
            Deliver personalized experiences with an AI recommendation engine that helps users discover the
            products, content, services, and experiences most relevant to them. mTouch Labs combines user
            behaviour, product or content data, business rules, and machine learning to create
            recommendation experiences tailored to your{" "}
            <a href="/custom-software-development-company">application</a>.
          </>
        }
        primaryLabel="Build Your AI Recommendation Engine"
        secondaryLabel="View Case Studies"
      />

      <section className="aip-figure-band">
        <figure className="aip-figure">
          <div className="aip-figure__frame">
            <img
              src={`${IMG}/ai-recommendation-engine-mtouchlabs.webp`}
              alt="AI recommendation engine by mTouch Labs"
              width={1200}
              height={630}
              fetchPriority="high"
            />
          </div>
          <figcaption className="aip-figure__caption">
            A catalogue narrowed to candidates, then ranked for one user &mdash; the core loop of every recommendation engine.
          </figcaption>
        </figure>
      </section>

      <section className="ga-about">
        <div className="ga-container">
          <div className="ga-about__grid">
            <div className="ga-about__content ga-animate--left">
              <h2 className="ga-about__heading">
                Turn User Data Into <span className="ga-text-accent">Personalized Experiences</span>
              </h2>
              <p className="ga-about__text">
                Customers increasingly expect digital platforms to understand their interests and show relevant options instead of making them search through endless choices.
              </p>
              <p className="ga-about__text">
                An AI recommendation system analyzes available signals — interactions, preferences, product information, content characteristics and contextual data — to generate personalized recommendations.
              </p>
              <p className="ga-about__text">
                The recommendation strategy is designed around your available data, business objectives and user experience — not a fixed algorithm applied to every project.
              </p>
              <ul className="ga-checklist">
                <li className="ga-checklist__item"><span className="ga-checklist__icon">✓</span><span>Products</span></li>
                <li className="ga-checklist__item"><span className="ga-checklist__icon">✓</span><span>Services</span></li>
                <li className="ga-checklist__item"><span className="ga-checklist__icon">✓</span><span>Videos</span></li>
                <li className="ga-checklist__item"><span className="ga-checklist__icon">✓</span><span>Articles</span></li>
                <li className="ga-checklist__item"><span className="ga-checklist__icon">✓</span><span>Courses</span></li>
                <li className="ga-checklist__item"><span className="ga-checklist__icon">✓</span><span>Properties</span></li>
                <li className="ga-checklist__item"><span className="ga-checklist__icon">✓</span><span>Music</span></li>
                <li className="ga-checklist__item"><span className="ga-checklist__icon">✓</span><span>Offers</span></li>
                <li className="ga-checklist__item"><span className="ga-checklist__icon">✓</span><span>Search results</span></li>
                <li className="ga-checklist__item"><span className="ga-checklist__icon">✓</span><span>Marketplace listings</span></li>
                <li className="ga-checklist__item"><span className="ga-checklist__icon">✓</span><span>Subscription plans</span></li>
              </ul>
            </div>
            <div className="ga-stats ga-animate--right">
              <div className="ga-stat"><span className="ga-stat__icon">👣</span><span className="ga-stat__label">Behaviour</span></div>
              <div className="ga-stat"><span className="ga-stat__icon">📚</span><span className="ga-stat__label">Catalogue</span></div>
              <div className="ga-stat"><span className="ga-stat__icon">📋</span><span className="ga-stat__label">Business Rules</span></div>
              <div className="ga-stat"><span className="ga-stat__icon">⚡</span><span className="ga-stat__label">Low Latency</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="aip-figure-band">
        <figure className="aip-figure">
          <div className="aip-figure__frame">
            <img
              src={`${IMG}/personalized-product-recommendation-ui.webp`}
              alt="Personalized product recommendation interface with relevance scores"
              width={1000}
              height={750}
              loading="lazy"
            />
          </div>
          <figcaption className="aip-figure__caption">
            Personalised, similar-item and cross-sell rails on one shelf, each with its own relevance score.
          </figcaption>
        </figure>
      </section>

      <section className="ga-services">
        <div className="ga-container">
          <div className="ga-services__header ga-animate">
            <h2 className="ga-services__title">
              AI Recommendation Engine Development <span className="ga-text-accent">Services</span>
            </h2>
            <p className="ga-services__subtitle">
              Seven capabilities that combine into one personalisation layer across your product
            </p>
          </div>
          <div className="ga-services__grid ga-stagger">
            <div className="ga-service-card ga-animate--scale">
              <span className="ga-service-card__badge ga-service-card__badge--icon">⚙️</span>
              <h4 className="ga-service-card__title">Custom Recommendation Systems</h4>
              <p className="ga-service-card__text">
                Engines built specifically for your application&rsquo;s users, data, catalog and business objectives.
              </p>
            </div>
            <div className="ga-service-card ga-animate--scale">
              <span className="ga-service-card__badge ga-service-card__badge--icon">🛒</span>
              <h4 className="ga-service-card__title">Product Recommendation Engine</h4>
              <p className="ga-service-card__text">
                Help shoppers discover relevant products using behavioural and product-level signals across your{" "}
                <a href="/ecommerce-app-development-company" style={{ color: "#3E8CFB", textDecoration: "none", fontWeight: 600 }}>ecommerce platform</a>.
              </p>
            </div>
            <div className="ga-service-card ga-animate--scale">
              <span className="ga-service-card__badge ga-service-card__badge--icon">▶️</span>
              <h4 className="ga-service-card__title">Personalized Content Recommendations</h4>
              <p className="ga-service-card__text">
                Recommend articles, videos, courses or other content based on available user and content signals.
              </p>
            </div>
            <div className="ga-service-card ga-animate--scale">
              <span className="ga-service-card__badge ga-service-card__badge--icon">✨</span>
              <h4 className="ga-service-card__title">AI-Powered Personalization</h4>
              <p className="ga-service-card__text">
                Personalized experiences across homepages, search results, product pages and content pages.
              </p>
            </div>
            <div className="ga-service-card ga-animate--scale">
              <span className="ga-service-card__badge ga-service-card__badge--icon">⚡</span>
              <h4 className="ga-service-card__title">Real-Time Recommendation Systems</h4>
              <p className="ga-service-card__text">
                Workflows that respond to recent interactions where your use case and infrastructure support it.
              </p>
            </div>
            <div className="ga-service-card ga-animate--scale">
              <span className="ga-service-card__badge ga-service-card__badge--icon">🔀</span>
              <h4 className="ga-service-card__title">Hybrid Recommendation Systems</h4>
              <p className="ga-service-card__text">
                Combine multiple approaches to improve relevance across users, products and content.
              </p>
            </div>
            <div className="ga-service-card ga-animate--scale">
              <span className="ga-service-card__badge ga-service-card__badge--icon">🔌</span>
              <h4 className="ga-service-card__title">Recommendation API Development</h4>
              <p className="ga-service-card__text">
                Recommendation services consumed by websites, mobile apps, SaaS platforms and other products.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="ga-delivery">
        <div className="ga-container">
          <h2 className="ga-delivery__heading ga-animate">
            How an AI Recommendation <span className="ga-text-accent">Engine Works</span>
          </h2>
          <p className="ga-delivery__text">
            A recommendation system combines user information, item information, interaction data and contextual signals to determine which options may be relevant. An e-commerce platform, for example, uses product information and customer interactions to generate a candidate list and rank it by the application's strategy.
          </p>
          <div className="ga-delivery__steps">
            <div className="ga-step"><span className="ga-step__circle">User Interaction</span></div>
            <span className="ga-step__arrow">→</span>
            <div className="ga-step"><span className="ga-step__circle">Data Processing</span></div>
            <span className="ga-step__arrow">→</span>
            <div className="ga-step"><span className="ga-step__circle">Recommendation Model</span></div>
            <span className="ga-step__arrow">→</span>
            <div className="ga-step"><span className="ga-step__circle">Candidate Generation</span></div>
            <span className="ga-step__arrow">→</span>
            <div className="ga-step"><span className="ga-step__circle">Ranking</span></div>
            <span className="ga-step__arrow">→</span>
            <div className="ga-step"><span className="ga-step__circle">Personalized Results</span></div>
          </div>
        </div>
      </section>

      <section className="aip-figure-band">
        <figure className="aip-figure">
          <div className="aip-figure__frame">
            <img
              src={`${IMG}/ai-recommendation-workflow.webp`}
              alt="AI recommendation workflow from signal capture to ranked results"
              width={1200}
              height={700}
              loading="lazy"
            />
          </div>
          <figcaption className="aip-figure__caption">
            Every stage narrows the field &mdash; and every stage is measurable.
          </figcaption>
        </figure>
      </section>

      <section className="ga-services">
        <div className="ga-container">
          <div className="ga-services__header ga-animate">
            <h2 className="ga-services__title">
              Types of Recommendation Systems <span className="ga-text-accent">We Build</span>
            </h2>
            <p className="ga-services__subtitle">
              Which approach fits depends on the data you have, not on what is fashionable
            </p>
          </div>
          <div className="ga-services__grid ga-stagger">
            <div className="ga-service-card ga-animate--scale">
              <span className="ga-service-card__badge ga-service-card__badge--icon">👥</span>
              <h4 className="ga-service-card__title">Collaborative Filtering</h4>
              <p className="ga-service-card__text">
                Patterns between users and items — useful once your platform has enough historical interaction data to learn from.
              </p>
            </div>
            <div className="ga-service-card ga-animate--scale">
              <span className="ga-service-card__badge ga-service-card__badge--icon">🏷️</span>
              <h4 className="ga-service-card__title">Content-Based</h4>
              <p className="ga-service-card__text">
                Characteristics of the items themselves — identifies items similar to what a user has already interacted with.
              </p>
            </div>
            <div className="ga-service-card ga-animate--scale">
              <span className="ga-service-card__badge ga-service-card__badge--icon">🔀</span>
              <h4 className="ga-service-card__title">Hybrid Systems</h4>
              <p className="ga-service-card__text">
                Multiple approaches combined — uses different available signals together to cover more users and items.
              </p>
            </div>
            <div className="ga-service-card ga-animate--scale">
              <span className="ga-service-card__badge ga-service-card__badge--icon">🎯</span>
              <h4 className="ga-service-card__title">Personalized Ranking</h4>
              <p className="ga-service-card__text">
                Order, not just selection — ranks available items by user preference, context and business requirements.
              </p>
            </div>
            <div className="ga-service-card ga-animate--scale">
              <span className="ga-service-card__badge ga-service-card__badge--icon">📋</span>
              <h4 className="ga-service-card__title">Rule + AI</h4>
              <p className="ga-service-card__text">
                Model output within your constraints — combines AI recommendations with eligibility, inventory and operational rules.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="ga-services">
        <div className="ga-container">
          <div className="ga-services__header ga-animate">
            <h2 className="ga-services__title">
              AI Recommendation Engine <span className="ga-text-accent">Features</span>
            </h2>
            <p className="ga-services__subtitle">
              Eight features that turn a model into a personalisation layer your product can rely on
            </p>
          </div>
          <div className="ga-services__grid ga-stagger">
            <div className="ga-service-card ga-animate--scale">
              <span className="ga-service-card__badge ga-service-card__badge--icon">👤</span>
              <h4 className="ga-service-card__title">User Profiling</h4>
              <p className="ga-service-card__text">
                Representations of preference from behavioural and contextual signals.
              </p>
            </div>
            <div className="ga-service-card ga-animate--scale">
              <span className="ga-service-card__badge ga-service-card__badge--icon">🏷️</span>
              <h4 className="ga-service-card__title">Item Understanding</h4>
              <p className="ga-service-card__text">
                Product, service or content characteristics inside the logic.
              </p>
            </div>
            <div className="ga-service-card ga-animate--scale">
              <span className="ga-service-card__badge ga-service-card__badge--icon">📚</span>
              <h4 className="ga-service-card__title">Candidate Generation</h4>
              <p className="ga-service-card__text">
                Narrow the catalog to a relevant set before ranking it.
              </p>
            </div>
            <div className="ga-service-card ga-animate--scale">
              <span className="ga-service-card__badge ga-service-card__badge--icon">🎯</span>
              <h4 className="ga-service-card__title">Intelligent Ranking</h4>
              <p className="ga-service-card__text">
                Order candidates by the model and applicable business rules.
              </p>
            </div>
            <div className="ga-service-card ga-animate--scale">
              <span className="ga-service-card__badge ga-service-card__badge--icon">✨</span>
              <h4 className="ga-service-card__title">Personalization</h4>
              <p className="ga-service-card__text">
                Adapt output to different users and different contexts.
              </p>
            </div>
            <div className="ga-service-card ga-animate--scale">
              <span className="ga-service-card__badge ga-service-card__badge--icon">🔌</span>
              <h4 className="ga-service-card__title">Recommendation APIs</h4>
              <p className="ga-service-card__text">
                Expose the engine to web, mobile and other applications.
              </p>
            </div>
            <div className="ga-service-card ga-animate--scale">
              <span className="ga-service-card__badge ga-service-card__badge--icon">📊</span>
              <h4 className="ga-service-card__title">Analytics</h4>
              <p className="ga-service-card__text">
                Measure defined recommendation metrics and user interactions.
              </p>
            </div>
            <div className="ga-service-card ga-animate--scale">
              <span className="ga-service-card__badge ga-service-card__badge--icon">🔄</span>
              <h4 className="ga-service-card__title">Continuous Optimization</h4>
              <p className="ga-service-card__text">
                Update strategy as behaviour, catalogues and requirements change.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="aip-figure-band">
        <figure className="aip-figure">
          <div className="aip-figure__frame">
            <img
              src={`${IMG}/ai-recommendation-engine-architecture.webp`}
              alt="AI recommendation engine architecture from event collection to delivery API"
              width={1200}
              height={700}
              loading="lazy"
            />
          </div>
          <figcaption className="aip-figure__caption">
            From raw signals to a ranked shelf, in one serving path.
          </figcaption>
        </figure>
        <p className="aip-note">
          For larger workloads the architecture may also include batch processing, real-time event processing, model training pipelines, feature stores, caching, monitoring and experimentation infrastructure.
        </p>
      </section>

      <section className="ga-services">
        <div className="ga-container">
          <div className="ga-services__header ga-animate">
            <h2 className="ga-services__title">
              Personalized Recommendation <span className="ga-text-accent">Experiences</span>
            </h2>
            <p className="ga-services__subtitle">
              One engine can power several different parts of your digital product
            </p>
          </div>
          <div className="ga-services__grid ga-stagger">
            <div className="ga-service-card ga-animate--scale">
              <span className="ga-service-card__badge ga-service-card__badge--icon">🔲</span>
              <h4 className="ga-service-card__title">Personalized Homepage</h4>
              <p className="ga-service-card__text">
                Content, products or services relevant to each user&rsquo;s interests.
              </p>
            </div>
            <div className="ga-service-card ga-animate--scale">
              <span className="ga-service-card__badge ga-service-card__badge--icon">🔍</span>
              <h4 className="ga-service-card__title">Product Discovery</h4>
              <p className="ga-service-card__text">
                Find relevant options without navigating a large catalog manually.
              </p>
            </div>
            <div className="ga-service-card ga-animate--scale">
              <span className="ga-service-card__badge ga-service-card__badge--icon">🔀</span>
              <h4 className="ga-service-card__title">Similar Items</h4>
              <p className="ga-service-card__text">
                Items related to whatever the user is currently viewing.
              </p>
            </div>
            <div className="ga-service-card ga-animate--scale">
              <span className="ga-service-card__badge ga-service-card__badge--icon">🏷️</span>
              <h4 className="ga-service-card__title">Cross-Selling</h4>
              <p className="ga-service-card__text">
                Complementary products or services relevant to the current selection.
              </p>
            </div>
            <div className="ga-service-card ga-animate--scale">
              <span className="ga-service-card__badge ga-service-card__badge--icon">▶️</span>
              <h4 className="ga-service-card__title">Content Discovery</h4>
              <p className="ga-service-card__text">
                Surface articles, videos or courses from interaction and content data.
              </p>
            </div>
            <div className="ga-service-card ga-animate--scale">
              <span className="ga-service-card__badge ga-service-card__badge--icon">⚗️</span>
              <h4 className="ga-service-card__title">Personalized Search</h4>
              <p className="ga-service-card__text">
                Recommendation signals alongside search to improve ranking.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="ga-services">
        <div className="ga-container">
          <div className="ga-services__header ga-animate">
            <h2 className="ga-services__title">
              AI Recommendation Engine <span className="ga-text-accent">Use Cases</span>
            </h2>
            <p className="ga-services__subtitle">
              Personalisation applied where it changes a business metric
            </p>
          </div>
          <div className="ga-services__grid ga-stagger">
            <div className="ga-service-card ga-animate--scale">
              <span className="ga-service-card__badge ga-service-card__badge--icon">🛒</span>
              <h4 className="ga-service-card__title">E-commerce</h4>
              <p className="ga-service-card__text">
                Recommend products from browsing behaviour, purchases and product relationships — recommended-for-you, similar products, frequently bought together and personalized offers across your{" "}
                <a href="/ecommerce-app-development-company" style={{ color: "#3E8CFB", textDecoration: "none", fontWeight: 600 }}>ecommerce platform</a>.
              </p>
            </div>
            <div className="ga-service-card ga-animate--scale">
              <span className="ga-service-card__badge ga-service-card__badge--icon">▶️</span>
              <h4 className="ga-service-card__title">Streaming &amp; Entertainment</h4>
              <p className="ga-service-card__text">
                Recommend movies, shows, music or video from viewing and listening behaviour — continue watching, because you watched, and trending for you.
              </p>
            </div>
            <div className="ga-service-card ga-animate--scale">
              <span className="ga-service-card__badge ga-service-card__badge--icon">🎓</span>
              <h4 className="ga-service-card__title">Education</h4>
              <p className="ga-service-card__text">
                Recommend courses and learning resources from learner interests and activity — next course, related resources and skill paths.
              </p>
            </div>
            <div className="ga-service-card ga-animate--scale">
              <span className="ga-service-card__badge ga-service-card__badge--icon">☁️</span>
              <h4 className="ga-service-card__title">SaaS Platforms</h4>
              <p className="ga-service-card__text">
                Personalize features, content, workflows and resources from user activity — feature discovery, template suggestions and onboarding paths inside your{" "}
                <a href="/saas-development-services" style={{ color: "#3E8CFB", textDecoration: "none", fontWeight: 600 }}>SaaS product</a>.
              </p>
            </div>
            <div className="ga-service-card ga-animate--scale">
              <span className="ga-service-card__badge ga-service-card__badge--icon">🔲</span>
              <h4 className="ga-service-card__title">Marketplaces</h4>
              <p className="ga-service-card__text">
                Help users discover relevant sellers, products, services and listings — listing relevance, seller matching and category discovery, often paired with{" "}
                <a href="/multi-vendor-marketplace-app-builder" style={{ color: "#3E8CFB", textDecoration: "none", fontWeight: 600 }}>multi-vendor marketplace development</a>.
              </p>
            </div>
            <div className="ga-service-card ga-animate--scale">
              <span className="ga-service-card__badge ga-service-card__badge--icon">🏠</span>
              <h4 className="ga-service-card__title">Real Estate</h4>
              <p className="ga-service-card__text">
                Recommend properties from preferences, characteristics, location and budget — matched properties, similar listings and saved-search alerts.
              </p>
            </div>
            <div className="ga-service-card ga-animate--scale">
              <span className="ga-service-card__badge ga-service-card__badge--icon">✈️</span>
              <h4 className="ga-service-card__title">Travel &amp; Hospitality</h4>
              <p className="ga-service-card__text">
                Personalize destinations, hotels, activities and travel services — destination picks, stay suggestions and activity bundles.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="aip-figure-band">
        <figure className="aip-figure">
          <div className="aip-figure__frame">
            <img
              src={`${IMG}/ai-recommendation-engine-use-cases.webp`}
              alt="AI recommendation engine use cases across industries"
              width={1200}
              height={800}
              loading="lazy"
            />
          </div>
          <figcaption className="aip-figure__caption">
            One engine, adapted to each catalogue and each definition of relevance.
          </figcaption>
        </figure>
      </section>

      <section className="ga-reliable">
        <div className="ga-container">
          <div className="ga-reliable__inner ga-animate">
            <h2 className="ga-reliable__heading">
              Recommendation Systems That Ship Inside <span className="ga-text-accent">Real Products</span>
            </h2>
            <p className="ga-reliable__text">
              We combine AI development, software engineering, data engineering and application development,
              so the engine operates as part of a working product rather than an isolated machine learning
              component. Browse our{" "}
              <a href="/portfolio" style={{ color: "#3E8CFB", textDecoration: "none", fontWeight: 600 }}>portfolio</a> and{" "}
              <a href="/case-studies" style={{ color: "#3E8CFB", textDecoration: "none", fontWeight: 600 }}>case studies</a> for shipped examples.
            </p>
            <div className="ga-reliable__pillars">
              <div className="ga-pillar"><span className="ga-pillar__dot"></span><span className="ga-pillar__label">Product-focused AI — designed around the actual user journey</span></div>
              <div className="ga-pillar"><span className="ga-pillar__dot"></span><span className="ga-pillar__label">Custom architecture shaped by your data volume and latency needs</span></div>
              <div className="ga-pillar"><span className="ga-pillar__dot"></span><span className="ga-pillar__label">Full-stack integration with websites, apps, APIs and databases</span></div>
              <div className="ga-pillar"><span className="ga-pillar__dot"></span><span className="ga-pillar__label">Scalable AI as your users, catalog and interaction data grow</span></div>
              <div className="ga-pillar"><span className="ga-pillar__dot"></span><span className="ga-pillar__label">End-to-end development from strategy through to optimization</span></div>
              <div className="ga-pillar"><span className="ga-pillar__dot"></span><span className="ga-pillar__label">Measured uplift — A/B tested against your current baseline</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="ga-services">
        <div className="ga-container">
          <div className="ga-services__header ga-animate">
            <h2 className="ga-services__title">
              Recommendations for Different <span className="ga-text-accent">Business Models</span>
            </h2>
            <p className="ga-services__subtitle">
              The same engine, pointed at a different definition of relevance
            </p>
          </div>
          <div className="ga-services__grid ga-stagger">
            <div className="ga-service-card ga-animate--scale">
              <span className="ga-service-card__badge ga-service-card__badge--icon">🛒</span>
              <h4 className="ga-service-card__title">E-commerce &amp; Retail</h4>
              <p className="ga-service-card__text">
                Personalize product discovery and shopping experiences.
              </p>
            </div>
            <div className="ga-service-card ga-animate--scale">
              <span className="ga-service-card__badge ga-service-card__badge--icon">🔲</span>
              <h4 className="ga-service-card__title">Marketplaces</h4>
              <p className="ga-service-card__text">
                Help users discover relevant listings, sellers, products or services.
              </p>
            </div>
            <div className="ga-service-card ga-animate--scale">
              <span className="ga-service-card__badge ga-service-card__badge--icon">☁️</span>
              <h4 className="ga-service-card__title">SaaS</h4>
              <p className="ga-service-card__text">
                Personalize application experiences and surface relevant features.
              </p>
            </div>
            <div className="ga-service-card ga-animate--scale">
              <span className="ga-service-card__badge ga-service-card__badge--icon">▶️</span>
              <h4 className="ga-service-card__title">Media &amp; Entertainment</h4>
              <p className="ga-service-card__text">
                Improve content discovery across large libraries.
              </p>
            </div>
            <div className="ga-service-card ga-animate--scale">
              <span className="ga-service-card__badge ga-service-card__badge--icon">🎓</span>
              <h4 className="ga-service-card__title">Education</h4>
              <p className="ga-service-card__text">
                Help learners discover relevant courses and resources.
              </p>
            </div>
            <div className="ga-service-card ga-animate--scale">
              <span className="ga-service-card__badge ga-service-card__badge--icon">✈️</span>
              <h4 className="ga-service-card__title">Travel</h4>
              <p className="ga-service-card__text">
                Personalize destinations, properties, activities and services.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="ga-whoweare">
        <div className="ga-container">
          <div className="ga-whoweare__grid">
            <div className="ga-whoweare__stats ga-animate--left">
              <div className="ga-stat ga-stat--dark"><span className="ga-stat__number">&lt;50ms</span><span className="ga-stat__label">Serving Latency</span></div>
              <div className="ga-stat ga-stat--dark"><span className="ga-stat__number">A/B</span><span className="ga-stat__label">Measured Uplift</span></div>
              <div className="ga-stat ga-stat--dark"><span className="ga-stat__number">7</span><span className="ga-stat__label">Reco Services</span></div>
              <div className="ga-stat ga-stat--dark"><span className="ga-stat__number">14+</span><span className="ga-stat__label">Years Experience</span></div>
            </div>
            <div className="ga-whoweare__content ga-animate--right">
              <h2 className="ga-whoweare__heading">
                The mTouch Labs <span className="ga-text-accent">Recommendation Engine</span>
              </h2>
              <p className="ga-whoweare__text">
                Embeddings, vector search, ranking models and your business rules in one serving path — items with similar characteristics sit close together in embedding space, ranking picks what this particular user is likely to engage with, and business rules are applied last.
              </p>
              <ul className="ga-checklist">
                <li className="ga-checklist__item"><span className="ga-checklist__icon">✓</span><span>True personalisation — ranked per user and session, not per broad segment</span></li>
                <li className="ga-checklist__item"><span className="ga-checklist__icon">✓</span><span>Low-latency serving at production traffic levels</span></li>
                <li className="ga-checklist__item"><span className="ga-checklist__icon">✓</span><span>Business rules respected — stock, margin and merchandising enforced after ranking</span></li>
                <li className="ga-checklist__item"><span className="ga-checklist__icon">✓</span><span>Measured uplift — A/B tested against your current baseline, not assumed</span></li>
                <li className="ga-checklist__item"><span className="ga-checklist__icon">✓</span><span>Cold-start handling — popularity and content similarity until behaviour exists</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="aip-figure-band">
        <figure className="aip-figure">
          <div className="aip-figure__frame">
            <img
              src={`${IMG}/ai-recommendation-engine-solution-mtouchlabs.webp`}
              alt="AI recommendation engine solution by mTouch Labs"
              width={1200}
              height={800}
              loading="lazy"
            />
          </div>
          <figcaption className="aip-figure__caption">
            True personalisation, low-latency serving, business rules respected, uplift measured.
          </figcaption>
        </figure>
      </section>

      <section className="ga-tech">
        <div className="ga-container">
          <div className="ga-tech__grid">
            <div className="ga-animate--left">
              <h2 className="ga-tech__heading">
                AI Recommendation Engine <span className="ga-text-accent">Technology</span>
              </h2>
              <p className="ga-tech__text">
                Selection depends on your data, scale, latency requirements, recommendation strategy and application architecture — not a fixed stack applied to every project.
              </p>
              <div className="ga-tech__tags">
                {[
                  "Machine learning models",
                  "Recommendation algorithms",
                  "Embeddings",
                  "Python",
                  "SQL",
                  "PySpark",
                  "Data processing pipelines",
                  "Vector databases",
                  "REST APIs",
                  "Node.js",
                  "React",
                  "Cloud infrastructure",
                  "Analytics",
                  "Monitoring systems",
                ].map((t) => (
                  <span key={t} className="ga-tag">
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <div className="ga-tech__stats ga-animate--right">
              <div className="ga-stat ga-stat--dark"><span className="ga-stat__number">ML</span><span className="ga-stat__label">Ranking Models</span></div>
              <div className="ga-stat ga-stat--dark"><span className="ga-stat__number">ANN</span><span className="ga-stat__label">Vector Search</span></div>
              <div className="ga-stat ga-stat--dark"><span className="ga-stat__number">7</span><span className="ga-stat__label">Process Stages</span></div>
              <div className="ga-stat ga-stat--dark"><span className="ga-stat__number">6</span><span className="ga-stat__label">Business Models</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="ga-services">
        <div className="ga-container">
          <div className="ga-services__header ga-animate">
            <h2 className="ga-services__title">
              AI Recommendation Engine <span className="ga-text-accent">Development Process</span>
            </h2>
            <p className="ga-services__subtitle">
              Seven stages from data discovery through to ongoing optimization
            </p>
          </div>
        </div>
        <div className="aip-flow">
          <ol className="aip-flow__list">
            <li className="aip-step">
              <span className="aip-step__num">01</span>
              <h4 className="aip-step__title">Business &amp; Data Discovery</h4>
              <p className="aip-step__text">Your recommendation goals, users, catalog, available interaction data, business rules and technical environment.</p>
            </li>
            <li className="aip-step">
              <span className="aip-step__num">02</span>
              <h4 className="aip-step__title">Recommendation Strategy</h4>
              <p className="aip-step__text">Which approaches suit your use case and the data you actually have.</p>
            </li>
            <li className="aip-step">
              <span className="aip-step__num">03</span>
              <h4 className="aip-step__title">Data Preparation</h4>
              <p className="aip-step__text">Interaction, user, product, content and contextual data prepared for recommendation workflows.</p>
            </li>
            <li className="aip-step">
              <span className="aip-step__num">04</span>
              <h4 className="aip-step__title">Model Development</h4>
              <p className="aip-step__text">Develop and evaluate the recommendation approach against the defined requirements.</p>
            </li>
            <li className="aip-step">
              <span className="aip-step__num">05</span>
              <h4 className="aip-step__title">API &amp; Product Integration</h4>
              <p className="aip-step__text">Integrate recommendations into your website, mobile app, SaaS product or marketplace.</p>
            </li>
            <li className="aip-step">
              <span className="aip-step__num">06</span>
              <h4 className="aip-step__title">Testing &amp; Evaluation</h4>
              <p className="aip-step__text">Recommendation quality, latency, relevance, coverage and defined business metrics.</p>
            </li>
            <li className="aip-step">
              <span className="aip-step__num">07</span>
              <h4 className="aip-step__title">Optimization</h4>
              <p className="aip-step__text">Refine from observed performance, changing data, user behaviour and business requirements.</p>
            </li>
          </ol>
        </div>
        <figure className="aip-figure aip-figure--flush">
          <div className="aip-figure__frame">
            <img
              src={`${IMG}/recommendation-data-model-flow.webp`}
              alt="Recommendation model and data flow from collection to retraining"
              width={1200}
              height={700}
              loading="lazy"
            />
          </div>
          <figcaption className="aip-figure__caption">
            Collect &middot; Prepare &middot; Train &middot; Evaluate &middot; Serve &amp; Retrain &mdash; offline gains confirmed online before rollout
          </figcaption>
        </figure>
      </section>

      <section className="ga-industries">
        <div className="ga-container">
          <h2 className="ga-industries__title ga-animate">
            What Data Can a Recommendation <span className="ga-text-accent">Engine Use?</span>
          </h2>
        </div>
        <div className="aip-industries">
          {INDUSTRIES.map((ind) => (
            <span key={ind} className="aip-industry-pill">
              {ind}
            </span>
          ))}
        </div>
        <p className="aip-note">
          Available data should be evaluated carefully before selecting an architecture. More data does not automatically mean better recommendations &mdash; quality, relevance, freshness and coverage matter just as much.
        </p>
      </section>

      <section className="ga-services">
        <div className="ga-container">
          <div className="ga-services__header ga-animate">
            <h2 className="ga-services__title">
              Explore <span className="ga-text-accent">Related Services</span>
            </h2>
            <p className="ga-services__subtitle">
              Capabilities most often built alongside an AI recommendation engine
            </p>
          </div>
          <div className="ga-services__grid ga-stagger">
            <a href="/machine-learning-development-company" className="ga-service-card ga-animate--scale" style={{ color: "inherit", textDecoration: "none", display: "block", position: "relative" }}>
              <h4 className="ga-service-card__title">Machine Learning Development <span style={{ float: "right", color: "#3E8CFB", fontWeight: 700 }} aria-hidden>→</span></h4>
              <p className="ga-service-card__text">
                The ranking and propensity models behind personalised relevance.
              </p>
            </a>
            <a href="/generative-ai-development-company" className="ga-service-card ga-animate--scale" style={{ color: "inherit", textDecoration: "none", display: "block", position: "relative" }}>
              <h4 className="ga-service-card__title">Generative AI Development <span style={{ float: "right", color: "#3E8CFB", fontWeight: 700 }} aria-hidden>→</span></h4>
              <p className="ga-service-card__text">
                LLM-powered applications, RAG pipelines and production AI automation.
              </p>
            </a>
            <a href="/ai-sales-assistant-development" className="ga-service-card ga-animate--scale" style={{ color: "inherit", textDecoration: "none", display: "block", position: "relative" }}>
              <h4 className="ga-service-card__title">AI Sales Assistant <span style={{ float: "right", color: "#3E8CFB", fontWeight: 700 }} aria-hidden>→</span></h4>
              <p className="ga-service-card__text">
                Guided selling that uses recommendations inside a sales conversation.
              </p>
            </a>
            <a href="/ai-chatbot-development-company" className="ga-service-card ga-animate--scale" style={{ color: "inherit", textDecoration: "none", display: "block", position: "relative" }}>
              <h4 className="ga-service-card__title">AI Chatbot Development <span style={{ float: "right", color: "#3E8CFB", fontWeight: 700 }} aria-hidden>→</span></h4>
              <p className="ga-service-card__text">
                Conversational discovery on top of the same catalogue signals.
              </p>
            </a>
            <a href="/ecommerce-app-development-company" className="ga-service-card ga-animate--scale" style={{ color: "inherit", textDecoration: "none", display: "block", position: "relative" }}>
              <h4 className="ga-service-card__title">E-commerce Development <span style={{ float: "right", color: "#3E8CFB", fontWeight: 700 }} aria-hidden>→</span></h4>
              <p className="ga-service-card__text">
                The storefront the recommendation rails live inside.
              </p>
            </a>
            <a href="/saas-development-services" className="ga-service-card ga-animate--scale" style={{ color: "inherit", textDecoration: "none", display: "block", position: "relative" }}>
              <h4 className="ga-service-card__title">SaaS Development <span style={{ float: "right", color: "#3E8CFB", fontWeight: 700 }} aria-hidden>→</span></h4>
              <p className="ga-service-card__text">
                In-product personalisation for your software platform.
              </p>
            </a>
          </div>
        </div>
      </section>

      <section className="ga-faq">
        <div className="ga-container">
          <div className="ga-faq__wrapper">
            <h3 className="ga-faq__heading ga-animate">
              Frequently Asked <span className="ga-text-accent">Questions</span>
            </h3>
            <p className="ga-faq__subtext">Everything about AI recommendation engine development</p>
            <div className="ga-faq__list">
              {FAQS.map((f) => (
                <details className="ga-faq__item" key={f.q}>
                  <summary className="ga-faq__question">
                    <span>{f.q}</span>
                    <span className="ga-faq__chevron"></span>
                  </summary>
                  <div className="ga-faq__answer">
                    <p>{f.a}</p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="ga-cta">
        <div className="ga-container">
          <div className="ga-cta__inner ga-animate--scale">
            <h2 className="ga-cta__heading">
              Build Your AI Recommendation Engine with <span className="ga-text-accent">mTouch Labs</span>
            </h2>
            <p className="ga-cta__text">
              Create more relevant digital experiences with an AI recommendation system designed around your
              users, products, content and business goals &mdash; for e-commerce, marketplaces, SaaS, media,
              education, travel and other digital platforms.{" "}
              <a href="/contact-us" style={{ color: "#ffffff", textDecoration: "underline", fontWeight: 600 }}>Talk to mTouch Labs</a> about your project.
            </p>
            <button type="button" className="ga-cta__button js-open-modal">
              Start Your Recommendation Project
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
