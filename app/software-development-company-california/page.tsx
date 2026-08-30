import type { Metadata } from "next";
import Link from "next/link";
import FAQSchema from "@/components/seo/FAQSchema";
import { Icon, type IconName, LOC_CSS, STATE_CSS, LocationStyles, LocBreadcrumb, StateSchema, stateSchema, US_CONTACT } from "@/components/locations/LocationKit";

/* ════════════════════════════════════════════════════════════
   CALIFORNIA
   On-brand for mTouch Labs: what we build, for the industries
   that actually concentrate in this state. Services, delivery
   process and engagement models live on the USA page and are
   linked to, not restated here.
   ════════════════════════════════════════════════════════════ */

const SLUG = "software-development-company-california";
const H1 = "Software Development Company in California";

export const metadata: Metadata = {
  metadataBase: new URL(US_CONTACT.origin),
  title: { absolute: "Software Development Company in California | mTouch Labs" },
  description: "Software development company in California. mTouch Labs builds SaaS platforms, AI-powered products, mobile apps and marketplaces for California startups and businesses.",
  alternates: { canonical: `${US_CONTACT.origin}/${SLUG}` },
  openGraph: {
    title: "Software Development Company in California | mTouch Labs",
    description: "SaaS platforms, AI-powered products, mobile apps and marketplaces for California startups, scale-ups and established businesses.",
    url: `${US_CONTACT.origin}/${SLUG}`,
    siteName: "mTouch Labs", type: "website", locale: "en_US",
    images: [{ url: "/images/og/software-development-company-usa.webp", width: 1200, height: 630, alt: "mTouch Labs — Software Development in California" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Software Development Company in California | mTouch Labs",
    description: "SaaS platforms, AI-powered products, mobile apps and marketplaces for California startups, scale-ups and established businesses.",
    images: ["/images/og/software-development-company-usa.webp"],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large", "max-video-preview": -1 } },
};

const SCHEMA = stateSchema({ state: "California", slug: SLUG, headline: H1, summary: "Software development company in California. mTouch Labs builds SaaS platforms, AI-powered products, mobile apps and marketplaces for California startups and businesses." });

const STATS: { i: IconName; n: string; l: string }[] = [
  { i: "award", n: "14+", l: "Years in product engineering" },
  { i: "package", n: "1,500+", l: "Digital products shipped" },
  { i: "globe", n: "12+", l: "Countries served" },
  { i: "users", n: "500+", l: "Clients across industries" },
];

const WHY: { i: IconName; t: string; d: string }[] = [
  { i: "sparkles", t: "AI that does a job", d: "We start from the task you want removed — support triage, document handling, search — and build the narrowest thing that does it, rather than adding a chatbot for its own sake." },
  { i: "rocket", t: "Fast first versions", d: "A working build in front of users early tells you more than another month of specification. We scope MVPs to learn, then plan the rebuild honestly." },
  { i: "trendingUp", t: "Architecture that survives growth", d: "Cloud-native, API-first and sized against where you expect to be, not where you are — so the second year does not begin with a rewrite." },
  { i: "users", t: "A team, not a freelancer bench", d: "Designers, engineers, QA and DevOps working together on your product, with the architect who scoped it still on it after kickoff." },
];

const SERVICES: { i: IconName; t: string; d: string; cta: string; href: string }[] = [
  { i: "rocket", t: "SaaS Product Development", d: "Multi-tenant architecture, subscription billing, authentication, admin tooling and the analytics you need to understand usage.", cta: "Explore SaaS Development", href: "/saas-development-services" },
  { i: "cpu", t: "AI & Machine Learning", d: "Generative AI features, recommendation engines, intelligent search and predictive models integrated into products people already use.", cta: "Explore AI Development", href: "/generative-ai-development-company" },
  { i: "phone", t: "Mobile App Development", d: "Cross-platform and native apps for consumer products, connected devices and business tools.", cta: "Explore Mobile App Development", href: "/mobile-app-development-company" },
  { i: "grid", t: "Marketplace Platforms", d: "Two-sided and multi-vendor marketplaces with onboarding, matching, payments, ratings and dispute handling.", cta: "Explore Marketplace Development", href: "/multi-vendor-marketplace-app-builder" },
  { i: "layout", t: "Product Design & UX", d: "Research, user flows, interface design and prototypes that test the experience before engineering time is spent on it.", cta: "Explore Product Design", href: "/product-design-services" },
  { i: "cloud", t: "Cloud & DevOps", d: "Cloud architecture, CI/CD pipelines, monitoring, cost optimisation and the deployment process behind a reliable release cadence.", cta: "Explore Cloud Services", href: "/cloud-services" },
];

const INDUSTRIES: { i: IconName; t: string; d: string }[] = [
  { i: "sparkles", t: "Technology & SaaS", d: "Subscription products, developer tools, B2B platforms and the AI features increasingly expected inside them." },
  { i: "activity", t: "Healthcare & Wellness", d: "Telehealth, patient apps, fitness and wellness platforms, and the integrations that connect them to clinical systems." },
  { i: "monitor", t: "Media & Streaming", d: "OTT platforms, content libraries, subscription management and audience analytics." },
  { i: "cart", t: "Retail & eCommerce", d: "Custom storefronts, mobile commerce, loyalty programmes and order management." },
  { i: "book", t: "Education & eLearning", d: "Course platforms, virtual classrooms, assessment tools and student management systems." },
  { i: "truck", t: "Logistics & Delivery", d: "Fleet and driver apps, route planning, real-time tracking and warehouse tooling." },
];

const METROS: { i: IconName; t: string; d: string }[] = [
  { i: "cpu", t: "San Francisco Bay Area", d: "Venture-backed SaaS and AI products, usually pre-Series B and shipping faster than they are hiring." },
  { i: "monitor", t: "Los Angeles", d: "Media, entertainment technology, D2C brands and creator platforms." },
  { i: "activity", t: "San Diego", d: "Health, wellness and connected-device products with heavier testing requirements." },
  { i: "landmark", t: "Sacramento & Central Valley", d: "Agriculture technology, public sector and healthcare networks modernising internal systems." },
];

const FAQS: { q: string; a: string }[] = [
  { q: "We're three hours behind you. How does that work in practice?", a: "Our US hours run on Eastern time, so the overlap with California is your morning. We handle it by putting decisions in writing rather than in meetings, and by queueing anything that needs your input so it is waiting when you start rather than blocking your afternoon." },
  { q: "Can you build an MVP quickly without painting us into a corner?", a: "Yes, but it takes deliberate choices. We keep the data model and API boundaries clean even when the interface is minimal, so the parts most expensive to change later are the parts we get right first. We will tell you which shortcuts are safe and which will cost you." },
  { q: "What does adding AI to our product actually involve?", a: "Usually less than people expect, and the hard part is rarely the model. Most of the work is getting your own content into a form the system can retrieve reliably, defining what a good answer looks like, and building the fallback for when it does not know. We scope against a measurable baseline so you can tell whether it helped." },
  { q: "Do you work with our in-house engineers?", a: "Frequently. Our team works in your repositories, your review process and your sprint cadence, with your leads making the technical calls. That is usually the right shape when the constraint is hiring speed rather than capability." },
  { q: "How do you handle app store submissions?", a: "We prepare the builds, assets, metadata and privacy declarations, submit on your behalf or under your account, and handle review feedback. Rejections happen; responding to them is part of the engagement, not an extra." },
  { q: "What does support look like after launch?", a: "A monthly arrangement covering bug fixes, OS and framework updates, performance monitoring and an agreed amount of enhancement work. For products that are actively growing, that is usually a small standing team rather than ad-hoc tickets." },
];

const Card = ({ i, t, d, cta, href }: { i: IconName; t: string; d: string; cta?: string; href?: string }) => (
  <div className="loc-whyCard" style={{ flexDirection: "column", alignItems: "flex-start" }}>
    <span className="loc-tile"><Icon name={i} /></span>
    <h3 className="loc-whyTitle">{t}</h3>
    <p className="loc-whyText" style={{ flexGrow: 1 }}>{d}</p>
    {cta && href ? <Link className="st-cardLink" href={href}>{cta}</Link> : null}
  </div>
);

export default function SoftwareDevelopmentCompanyCalifornia() {
  return (
    <div className="loc-page">
      <LocationStyles />
      <style>{STATE_CSS}</style>
      <StateSchema blocks={SCHEMA} />
      <LocBreadcrumb current="California" />

      {/* ═══ HERO ═══ */}
      <section className="st-hero">
        <div className="st-heroInner">
          <div>
            <span className="st-eyebrow">mTouch Labs · California</span>
            <h1 className="st-h1">Software Development Company in <em>California</em></h1>
            <p className="st-heroText">SaaS platforms, AI-powered products, mobile apps and marketplaces for California startups, scale-ups and established businesses.</p>
            <div className="st-heroActions">
              <Link href="/contact-us" className="st-btnA">Talk to a Software Expert</Link>
              <Link href="/portfolio" className="st-btnB">See Our Work</Link>
            </div>
          </div>
          <div className="loc-introStats">{STATS.map((s) => (
            <div className="loc-statCard" key={s.l}>
              <span className="loc-statIcon"><Icon name={s.i} size={19} /></span>
              <div className="loc-statNum">{s.n}</div>
              <div className="loc-statLabel">{s.l}</div>
            </div>
          ))}</div>
        </div>
      </section>

      {/* ═══ INTRO ═══ */}
      <section className="loc-section loc-introSection">
        <div className="loc-sectionInner">
          <div className="loc-sectionHeader" style={{ maxWidth: "900px" }}>
            <p className="loc-sectionDesc" style={{ textAlign: "left", marginBottom: "1rem" }}>California businesses tend to arrive with a product thesis rather than a specification. The question is usually not whether the idea works but how quickly it can be put in front of real users, and what it will take to hold up once it does.</p>
            <p className="loc-sectionDesc" style={{ textAlign: "left", marginBottom: "1rem" }}>mTouch Labs works on both halves of that. We build the first version quickly enough to learn from it, then do the less glamorous engineering — architecture, performance, infrastructure — that keeps it standing when usage grows.</p>
            <p className="loc-sectionDesc" style={{ textAlign: "left", marginBottom: "1rem" }}>Our teams cover product design, mobile and web engineering, AI integration, cloud and DevOps, so a product does not need three vendors to reach launch.</p>
          </div>
        </div>
      </section>

      {/* ═══ SERVICES ═══ */}
      <section className="loc-section loc-servicesSection">
        <div className="loc-sectionInner">
          <div className="loc-sectionHeader">
            <h2 className="loc-sectionTitle">What We Build for <span className="loc-highlight">California Businesses</span></h2>
            <p className="loc-sectionDesc">What California clients most often need built. The wider capability list, how we run projects and the ways you can engage us are on the <Link href="/software-development-company-usa">USA page</Link>.</p>
          </div>
          <div className="loc-whyGrid">{SERVICES.map((s) => <Card key={s.t} {...s} />)}</div>
        </div>
      </section>

      {/* ═══ INDUSTRIES ═══ */}
      <section className="loc-section loc-introSection">
        <div className="loc-sectionInner">
          <div className="loc-sectionHeader">
            <h2 className="loc-sectionTitle">Industries We Serve Across <span className="loc-highlight">California</span></h2>
            <p className="loc-sectionDesc">The California sectors that reach us most, and what each tends to need built.</p>
          </div>
          <div className="loc-whyGrid">{INDUSTRIES.map((x) => <Card key={x.t} {...x} />)}</div>
        </div>
      </section>

      {/* ═══ WHY US ═══ */}
      <section className="loc-section loc-servicesSection">
        <div className="loc-sectionInner">
          <div className="loc-sectionHeader">
            <h2 className="loc-sectionTitle">Why California Businesses <span className="loc-highlight">Work With Us</span></h2>
          </div>
          <div className="loc-whyGrid" style={{ gridTemplateColumns: "repeat(4, 1fr)" }}>{WHY.map((w) => <Card key={w.t} {...w} />)}</div>
        </div>
      </section>

      {/* ═══ METROS ═══ */}
      <section className="loc-section loc-introSection">
        <div className="loc-sectionInner">
          <div className="loc-sectionHeader">
            <h2 className="loc-sectionTitle">Across <span className="loc-highlight">California</span></h2>
          </div>
          <div className="loc-metroGrid">{METROS.map((m) => (
            <div className="loc-metroCard" key={m.t}>
              <h3 className="loc-metroName"><span><Icon name={m.i} size={17} /></span>{m.t}</h3>
              <p className="loc-metroText">{m.d}</p>
            </div>
          ))}</div>
          <div className="st-midCta">
            <h2 className="st-midCtaTitle">Operating beyond California?</h2>
            <p className="st-midCtaText">There is a page for each of the other US markets we work in: <Link href="/software-development-company-new-york">New York</Link>, <Link href="/software-development-company-texas">Texas</Link>, <Link href="/software-development-company-florida">Florida</Link> and <Link href="/software-development-company-illinois">Illinois</Link>.</p>
            <Link className="st-inlineBtn" href="/software-development-company-usa">See All US Services</Link>
          </div>
        </div>
      </section>

      {/* ═══ FAQ ═══ */}
      <section className="loc-section loc-faqSection">
        <div className="loc-sectionInner">
          <div className="loc-sectionHeader">
            <h2 className="loc-sectionTitle">California <span className="loc-highlight">Questions</span></h2>
          </div>
          <div className="loc-faqList">{FAQS.map((f) => (
            <details className="loc-faqItem" key={f.q}>
              <summary className="loc-faqQuestion">
                <span className="loc-faqQuestionText">{f.q}</span>
                <span className="loc-faqChevron"><Icon name="chevron" size={16} /></span>
              </summary>
              <div className="loc-faqAnswer">{f.a}</div>
            </details>
          ))}</div>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section className="loc-ctaSection">
        <div className="loc-ctaInner">
          <h2 className="loc-ctaTitle">Got a product to build or scale?</h2>
          <p className="loc-ctaDesc">Send us the idea, the wireframes or the existing app — whichever you have. We will tell you what it takes.</p>
          <div className="loc-ctaActions">
            <Link href="/contact-us" className="loc-ctaBtnPrimary"><Icon name="phoneCall" size={17} />Book a Free Consultation</Link>
            <Link href="/request-free-quote" className="loc-ctaBtnSecondary">Request a Proposal</Link>
          </div>
        </div>
      </section>

      <FAQSchema faqs={FAQS} />
    </div>
  );
}
