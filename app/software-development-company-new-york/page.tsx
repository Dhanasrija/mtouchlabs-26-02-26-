import type { Metadata } from "next";
import Link from "next/link";
import FAQSchema from "@/components/seo/FAQSchema";
import { Icon, type IconName, LOC_CSS, STATE_CSS, LocationStyles, LocBreadcrumb, StateSchema, stateSchema, US_CONTACT } from "@/components/locations/LocationKit";
import HeroLeadForm from "@/components/locations/HeroLeadForm";

/* ════════════════════════════════════════════════════════════
   NEW YORK
   On-brand for mTouch Labs: what we build, for the industries
   that actually concentrate in this state. Services, delivery
   process and engagement models live on the USA page and are
   linked to, not restated here.
   ════════════════════════════════════════════════════════════ */

const SLUG = "software-development-company-new-york";
const H1 = "Software Development Company in New York";

export const metadata: Metadata = {
  metadataBase: new URL(US_CONTACT.origin),
  title: { absolute: "Software Development Company in New York | mTouch Labs" },
  description: "Software development company in New York. mTouch Labs builds mobile apps, web platforms, ecommerce systems, fintech products and AI solutions for New York businesses.",
  alternates: { canonical: `${US_CONTACT.origin}/${SLUG}` },
  openGraph: {
    title: "Software Development Company in New York | mTouch Labs",
    description: "Mobile apps, web platforms and custom software for New York businesses — from Manhattan fintech and D2C brands to real estate portals and on-demand delivery.",
    url: `${US_CONTACT.origin}/${SLUG}`,
    siteName: "mTouch Labs", type: "website", locale: "en_US",
    images: [{ url: "/images/og/software-development-company-usa.webp", width: 1200, height: 630, alt: "mTouch Labs — Software Development in New York" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Software Development Company in New York | mTouch Labs",
    description: "Mobile apps, web platforms and custom software for New York businesses — from Manhattan fintech and D2C brands to real estate portals and on-demand delivery.",
    images: ["/images/og/software-development-company-usa.webp"],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large", "max-video-preview": -1 } },
};

const SCHEMA = stateSchema({ state: "New York", slug: SLUG, headline: H1, summary: "Software development company in New York. mTouch Labs builds mobile apps, web platforms, ecommerce systems, fintech products and AI solutions for New York businesses." });

const STATS: { i: IconName; n: string; l: string }[] = [
  { i: "award", n: "14+", l: "Years building digital products" },
  { i: "users", n: "500+", l: "Clients served worldwide" },
  { i: "package", n: "1,500+", l: "Products delivered" },
  { i: "clock", n: "EST", l: "Working hours that match yours" },
];

const WHY: { i: IconName; t: string; d: string }[] = [
  { i: "target", t: "Built for a competitive market", d: "New York users abandon slow, confusing products quickly. We spend the design time on the first-run experience, because that is where most apps lose people." },
  { i: "rocket", t: "Launch-ready, not demo-ready", d: "We ship to the App Store, Play Store and production infrastructure — including store submission, review responses and post-launch monitoring." },
  { i: "shield", t: "Secure by default", d: "Role-based access, encryption in transit and at rest, secure APIs and audit logging come as standard, which matters when you are handling payments or client data." },
  { i: "infinity", t: "We stay after launch", d: "Most of our client relationships run for years. Enhancements, performance work and platform updates continue after v1 ships." },
];

const SERVICES: { i: IconName; t: string; d: string; cta: string; href: string }[] = [
  { i: "phone", t: "Mobile App Development", d: "Native iOS and Android, Flutter and React Native apps for consumer products, marketplaces and internal business tools.", cta: "Explore Mobile App Development", href: "/mobile-app-development-company" },
  { i: "globe", t: "Web & Portal Development", d: "Customer portals, dashboards, booking systems and B2B platforms built to be fast, accessible and easy to maintain.", cta: "Explore Web Development", href: "/web-development-company" },
  { i: "cart", t: "eCommerce & D2C Platforms", d: "Storefronts, multi-vendor marketplaces, subscription commerce and the inventory and fulfilment systems behind them.", cta: "Explore eCommerce Development", href: "/ecommerce-app-development-company" },
  { i: "home", t: "Real Estate Platforms", d: "Listing portals, tenant and owner apps, document management and CRM for brokerages and property managers.", cta: "Explore Real Estate Solutions", href: "/real-estate-app-development-company" },
  { i: "cpu", t: "AI Chatbots & Assistants", d: "Customer support assistants, lead qualification bots and internal knowledge tools grounded in your own content.", cta: "Explore AI Chatbot Development", href: "/ai-chatbot-development-company" },
  { i: "code", t: "Custom Business Software", d: "CRM, ERP, workflow automation and reporting systems built around how your business actually operates.", cta: "Explore Custom Software", href: "/custom-software-development-company" },
];

const INDUSTRIES: { i: IconName; t: string; d: string }[] = [
  { i: "landmark", t: "Financial Services & FinTech", d: "Client portals, onboarding flows, payment integrations, dashboards and reporting tools for brokerages, lenders and fintech startups." },
  { i: "cart", t: "Retail & D2C Commerce", d: "Shopify and custom storefronts, loyalty apps, subscription billing, and inventory systems for brands scaling beyond one channel." },
  { i: "monitor", t: "Media & Entertainment", d: "OTT and streaming apps, subscription and paywall platforms, content management and audience analytics." },
  { i: "home", t: "Real Estate", d: "Listing search, virtual tours, tenant portals, maintenance request apps and broker CRM." },
  { i: "send", t: "On-Demand Services", d: "Delivery, booking and dispatch apps built for dense urban markets — driver apps, customer apps and the admin panel that runs both." },
  { i: "activity", t: "Healthcare", d: "Patient scheduling, telehealth, diagnostics apps and practice management tools." },
];

const METROS: { i: IconName; t: string; d: string }[] = [
  { i: "building", t: "New York City", d: "Fintech, media, D2C commerce and on-demand — most of our New York work." },
  { i: "grid", t: "Brooklyn & Queens", d: "Early-stage founders and marketplace products moving quickly to a first release." },
  { i: "factory", t: "Long Island", d: "Distribution, healthcare networks and manufacturers replacing older internal systems." },
  { i: "landmark", t: "Albany & Upstate", d: "Public sector, education and regional businesses modernising legacy applications." },
];

const FAQS: { q: string; a: string }[] = [
  { q: "How much does it cost to build an app for a New York business?", a: "It depends on scope. A focused MVP with a clear feature set costs considerably less than a multi-role platform with payments, live tracking and admin tooling. After a discovery conversation we give you a written estimate with a milestone breakdown, so you are not working from a range." },
  { q: "How long will it take?", a: "A straightforward mobile app typically takes a few months from kickoff to store submission; a larger platform with multiple user types and integrations takes longer. Discovery ends with a dated roadmap so you can plan launch, marketing and hiring around real milestones." },
  { q: "Do we own the code?", a: "Yes, entirely, on payment. All source code, designs and documentation are assigned to you. We can work directly in your GitHub organisation from day one so the code is never somewhere you cannot reach it." },
  { q: "Can you work with our existing app or website?", a: "Often, yes. We start with a short assessment of the current codebase — dependencies, test coverage, how it deploys — and give you an honest read on whether improving it or rebuilding one part is the better spend before committing to a plan." },
  { q: "Do you have an office in New York?", a: "No. Our US operations run on Eastern time and engineering is delivered from our Hyderabad development centre. You get overlap with your full working day and named people on your project, rather than a local address." },
  { q: "What happens after the app launches?", a: "Most clients continue with us on a support arrangement covering bug fixes, OS and store compliance updates, performance work and new features. Apps need maintenance whether or not you plan for it, so we would rather plan for it." },
];

const Card = ({ i, t, d, cta, href }: { i: IconName; t: string; d: string; cta?: string; href?: string }) => (
  <div className="loc-whyCard" style={{ flexDirection: "column", alignItems: "flex-start" }}>
    <span className="loc-tile"><Icon name={i} /></span>
    <h3 className="loc-whyTitle">{t}</h3>
    <p className="loc-whyText" style={{ flexGrow: 1 }}>{d}</p>
    {cta && href ? <Link className="st-cardLink" href={href}>{cta}</Link> : null}
  </div>
);

export default function SoftwareDevelopmentCompanyNewYork() {
  return (
    <div className="loc-page">
      <LocationStyles />
      <style>{STATE_CSS}</style>
      <StateSchema blocks={SCHEMA} />
      <LocBreadcrumb current="New York" />

      {/* ═══ HERO ═══ */}
      <section className="st-hero">
        <div className="st-heroInner">
          <div>
            <span className="st-eyebrow">mTouch Labs · New York</span>
            <h1 className="st-h1">Software Development Company in <em>New York</em></h1>
            <p className="st-heroText">Mobile apps, web platforms and custom software for New York businesses — from Manhattan fintech and D2C brands to real estate portals and on-demand delivery.</p>
            <div className="st-heroActions">
              <Link href="/contact-us" className="st-btnA">Talk to a Software Expert</Link>
              <Link href="/portfolio" className="st-btnB">See Our Work</Link>
            </div>
          </div>
          {/* The right column holds the lead form, matching
              /software-development-company-usa. It was a stat grid; the
              USA hero has no stats, and the brief is that every location
              hero matches that one. */}
          <HeroLeadForm location="New York" />
        </div>
      </section>

      {/* ═══ INTRO ═══ */}
      <section className="loc-section loc-introSection">
        <div className="loc-sectionInner">
          <div className="loc-sectionHeader" style={{ maxWidth: "900px" }}>
            <p className="loc-sectionDesc" style={{ textAlign: "left", marginBottom: "1rem" }}>New York moves faster than most markets, and the software has to keep up. A delivery app competing in Manhattan, a D2C brand scaling into a second warehouse, a brokerage replacing spreadsheets with a real platform — the common thread is that the product has to work on day one in front of demanding users.</p>
            <p className="loc-sectionDesc" style={{ textAlign: "left", marginBottom: "1rem" }}>mTouch Labs builds those products. We have delivered more than 1,500 digital products over 14+ years, working with founders and established businesses to design, build, launch and keep improving mobile apps, web platforms and custom business software.</p>
            <p className="loc-sectionDesc" style={{ textAlign: "left", marginBottom: "1rem" }}>Whether you are validating a first version or replacing a system your team has outgrown, we can take it from product discovery through design, engineering, launch and long-term support.</p>
          </div>
        </div>
      </section>

      {/* ═══ SERVICES ═══ */}
      <section className="loc-section loc-servicesSection">
        <div className="loc-sectionInner">
          <div className="loc-sectionHeader">
            <h2 className="loc-sectionTitle">What We Build for <span className="loc-highlight">New York Businesses</span></h2>
            <p className="loc-sectionDesc">The work New York clients bring us most often. Our complete service list, delivery process and engagement models sit on the <Link href="/software-development-company-usa">USA page</Link>.</p>
          </div>
          <div className="loc-whyGrid">{SERVICES.map((s) => <Card key={s.t} {...s} />)}</div>
        </div>
      </section>

      {/* ═══ INDUSTRIES ═══ */}
      <section className="loc-section loc-introSection">
        <div className="loc-sectionInner">
          <div className="loc-sectionHeader">
            <h2 className="loc-sectionTitle">Industries We Serve Across <span className="loc-highlight">New York</span></h2>
            <p className="loc-sectionDesc">Six sectors that account for most of what we are asked to build in New York.</p>
          </div>
          <div className="loc-whyGrid">{INDUSTRIES.map((x) => <Card key={x.t} {...x} />)}</div>
        </div>
      </section>

      {/* ═══ WHY US ═══ */}
      <section className="loc-section loc-servicesSection">
        <div className="loc-sectionInner">
          <div className="loc-sectionHeader">
            <h2 className="loc-sectionTitle">Why New York Businesses <span className="loc-highlight">Work With Us</span></h2>
          </div>
          <div className="loc-whyGrid" style={{ gridTemplateColumns: "repeat(4, 1fr)" }}>{WHY.map((w) => <Card key={w.t} {...w} />)}</div>
        </div>
      </section>

      {/* ═══ METROS ═══ */}
      <section className="loc-section loc-introSection">
        <div className="loc-sectionInner">
          <div className="loc-sectionHeader">
            <h2 className="loc-sectionTitle">Across <span className="loc-highlight">New York</span></h2>
          </div>
          <div className="loc-metroGrid">{METROS.map((m) => (
            <div className="loc-metroCard" key={m.t}>
              <h3 className="loc-metroName"><span><Icon name={m.i} size={17} /></span>{m.t}</h3>
              <p className="loc-metroText">{m.d}</p>
            </div>
          ))}</div>
          <div className="st-midCta">
            <h2 className="st-midCtaTitle">Selling into other US markets too?</h2>
            <p className="st-midCtaText">We keep a separate page for each state we work in most: <Link href="/software-development-company-california">California</Link>, <Link href="/software-development-company-texas">Texas</Link>, <Link href="/software-development-company-florida">Florida</Link> and <Link href="/software-development-company-illinois">Illinois</Link>.</p>
            <Link className="st-inlineBtn" href="/software-development-company-usa">See All US Services</Link>
          </div>
        </div>
      </section>

      {/* ═══ FAQ ═══ */}
      <section className="loc-section loc-faqSection">
        <div className="loc-sectionInner">
          <div className="loc-sectionHeader">
            <h2 className="loc-sectionTitle">New York <span className="loc-highlight">Questions</span></h2>
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
          <h2 className="loc-ctaTitle">Building something for the New York market?</h2>
          <p className="loc-ctaDesc">Tell us what you have in mind and we will come back with an approach, a timeline and a number.</p>
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
