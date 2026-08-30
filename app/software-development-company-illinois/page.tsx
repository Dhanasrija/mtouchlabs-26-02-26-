import type { Metadata } from "next";
import Link from "next/link";
import FAQSchema from "@/components/seo/FAQSchema";
import { Icon, type IconName, LOC_CSS, STATE_CSS, LocationStyles, LocBreadcrumb, StateSchema, stateSchema, US_CONTACT } from "@/components/locations/LocationKit";

/* ════════════════════════════════════════════════════════════
   ILLINOIS
   On-brand for mTouch Labs: what we build, for the industries
   that actually concentrate in this state. Services, delivery
   process and engagement models live on the USA page and are
   linked to, not restated here.
   ════════════════════════════════════════════════════════════ */

const SLUG = "software-development-company-illinois";
const H1 = "Software Development Company in Illinois";

export const metadata: Metadata = {
  metadataBase: new URL(US_CONTACT.origin),
  title: { absolute: "Software Development Company in Illinois | mTouch Labs" },
  description: "Software development company in Illinois. mTouch Labs builds logistics platforms, manufacturing systems, restaurant and delivery apps, and custom business software for Illinois companies.",
  alternates: { canonical: `${US_CONTACT.origin}/${SLUG}` },
  openGraph: {
    title: "Software Development Company in Illinois | mTouch Labs",
    description: "Logistics platforms, manufacturing systems, delivery apps and custom business software for Illinois companies — from Chicago freight to downstate industry.",
    url: `${US_CONTACT.origin}/${SLUG}`,
    siteName: "mTouch Labs", type: "website", locale: "en_US",
    images: [{ url: "/images/og/software-development-company-usa.webp", width: 1200, height: 630, alt: "mTouch Labs — Software Development in Illinois" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Software Development Company in Illinois | mTouch Labs",
    description: "Logistics platforms, manufacturing systems, delivery apps and custom business software for Illinois companies — from Chicago freight to downstate industry.",
    images: ["/images/og/software-development-company-usa.webp"],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large", "max-video-preview": -1 } },
};

const SCHEMA = stateSchema({ state: "Illinois", slug: SLUG, headline: H1, summary: "Software development company in Illinois. mTouch Labs builds logistics platforms, manufacturing systems, restaurant and delivery apps, and custom business software for Illinois companies." });

const STATS: { i: IconName; n: string; l: string }[] = [
  { i: "award", n: "14+", l: "Years of delivery experience" },
  { i: "package", n: "1,500+", l: "Systems and apps built" },
  { i: "users", n: "500+", l: "Clients across industries" },
  { i: "clock", n: "CST+1", l: "An hour from your working day" },
];

const WHY: { i: IconName; t: string; d: string }[] = [
  { i: "checkSquare", t: "Systems people actually use", d: "An operations tool only works if the person on the floor prefers it to the spreadsheet. We test with the people who will use it, not just the manager who commissioned it." },
  { i: "link", t: "We connect to your existing stack", d: "WMS, ERP, accounting, telematics, EDI — most of the value in an Illinois project is in the integrations, so that is where we spend the discovery time." },
  { i: "barChart", t: "Reporting that answers real questions", d: "Dashboards built around the decisions your team makes weekly, rather than a wall of charts nobody opens twice." },
  { i: "infinity", t: "Long-term maintenance", d: "Industrial systems live for years. We plan for the version that is still running in 2031, not just the one that ships this quarter." },
];

const SERVICES: { i: IconName; t: string; d: string; cta: string; href: string }[] = [
  { i: "truck", t: "Logistics & Fleet Software", d: "Load tracking, dispatch, route optimisation, proof of delivery, driver apps and customer visibility portals.", cta: "Explore Logistics Solutions", href: "/taxi-booking-app-development-company" },
  { i: "factory", t: "Manufacturing & Warehouse Systems", d: "Production tracking, quality management, inventory, maintenance scheduling and shop-floor data capture.", cta: "Explore IoT & Industrial Solutions", href: "/best-iot-development-company-in-india" },
  { i: "cart", t: "Food Delivery & Ordering Apps", d: "Customer ordering, restaurant dashboards, driver apps and the dispatch logic that keeps delivery times honest.", cta: "Explore Food Delivery Development", href: "/food-delivery-app-development-service" },
  { i: "building", t: "Enterprise Applications", d: "Multi-site, multi-department systems with role-based access, audit trails and integration into what you already run.", cta: "Explore Enterprise Development", href: "/enterprise-application-development-company" },
  { i: "code", t: "Custom Business Software", d: "CRM, ERP extensions, workflow automation, supplier portals and internal tools built around your processes.", cta: "Explore Custom Software", href: "/custom-software-development-company" },
  { i: "cloud", t: "Cloud Migration & DevOps", d: "Move off ageing servers, modernise deployment, and get monitoring and backups that someone has actually tested.", cta: "Explore Cloud Migration", href: "/cloud-migration-services" },
];

const INDUSTRIES: { i: IconName; t: string; d: string }[] = [
  { i: "truck", t: "Freight, Rail & Logistics", d: "Intermodal tracking, yard management, drayage scheduling, customs documentation and shipper visibility portals." },
  { i: "factory", t: "Manufacturing & Industrial", d: "Machine data capture, downtime analysis, quality control, maintenance scheduling and supplier collaboration." },
  { i: "cart", t: "Food Processing & Distribution", d: "Traceability, cold-chain monitoring, grower and supplier portals, and route-based distribution tools." },
  { i: "landmark", t: "Insurance & Financial Services", d: "Policy and claims portals, agent tooling, document workflow and reporting dashboards." },
  { i: "send", t: "Restaurants & Hospitality", d: "Online ordering, delivery integration, loyalty programmes and multi-location management." },
  { i: "book", t: "Education & Training", d: "Learning platforms, certification tracking, virtual classrooms and student management." },
];

const METROS: { i: IconName; t: string; d: string }[] = [
  { i: "landmark", t: "Chicago", d: "Logistics headquarters, financial services, food businesses and professional services — most of our Illinois work." },
  { i: "factory", t: "Rockford & Quad Cities", d: "Aerospace components, heavy equipment and machining businesses modernising shop-floor systems." },
  { i: "shield", t: "Bloomington–Normal & Peoria", d: "Insurance and heavy industry, with long system lifespans and formal change control." },
  { i: "cart", t: "Springfield & Central Illinois", d: "Agriculture, food processing, distribution and public sector work." },
];

const FAQS: { q: string; a: string }[] = [
  { q: "Can you build something that works with our WMS or ERP?", a: "That is most of what we do here. We integrate through whatever the system exposes — API, database view, flat-file exchange or EDI — and build the new interfaces on top. We will tell you early if an integration is going to be the expensive part, because sometimes it is." },
  { q: "Our team is not especially technical. Will they use it?", a: "Only if it is faster than what they do now, which is the actual bar. We test early versions with the people who will use the system daily and design around their workflow rather than the org chart. Training material and a simple admin interface are part of the delivery." },
  { q: "How much does a logistics or manufacturing platform cost?", a: "It scales with the number of roles, sites and integrations rather than screens. A single-site tool is a very different project from a multi-facility platform feeding a customer portal. Discovery produces a fixed estimate with milestones so you can phase it." },
  { q: "Can we start small and expand later?", a: "Usually the right approach. We build the first phase around the workflow causing the most pain, get it in use, then extend. That gets value in front of your team early and means the later phases are designed with real usage data rather than assumptions." },
  { q: "Do you have an office in Chicago?", a: "No. We are Delaware-registered with our engineering team in Hyderabad. Because Illinois runs on Central time, most of your working day overlaps ours — in practice you are not waiting overnight for replies." },
  { q: "What about support once it is running?", a: "Operational software needs a support arrangement — monitoring, fixes, updates and an agreed amount of enhancement work each month. For systems that run a plant or a fleet, that is not optional, and we would rather price it honestly up front." },
];

const Card = ({ i, t, d, cta, href }: { i: IconName; t: string; d: string; cta?: string; href?: string }) => (
  <div className="loc-whyCard" style={{ flexDirection: "column", alignItems: "flex-start" }}>
    <span className="loc-tile"><Icon name={i} /></span>
    <h3 className="loc-whyTitle">{t}</h3>
    <p className="loc-whyText" style={{ flexGrow: 1 }}>{d}</p>
    {cta && href ? <Link className="st-cardLink" href={href}>{cta}</Link> : null}
  </div>
);

export default function SoftwareDevelopmentCompanyIllinois() {
  return (
    <div className="loc-page">
      <LocationStyles />
      <style>{STATE_CSS}</style>
      <StateSchema blocks={SCHEMA} />
      <LocBreadcrumb current="Illinois" />

      {/* ═══ HERO ═══ */}
      <section className="st-hero">
        <div className="st-heroInner">
          <div>
            <span className="st-eyebrow">mTouch Labs · Illinois</span>
            <h1 className="st-h1">Software Development Company in <em>Illinois</em></h1>
            <p className="st-heroText">Logistics platforms, manufacturing systems, delivery apps and custom business software for Illinois companies — from Chicago freight to downstate industry.</p>
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
            <p className="loc-sectionDesc" style={{ textAlign: "left", marginBottom: "1rem" }}>Illinois is where things get moved, made and processed. Freight passes through Chicago on a scale nowhere else in the country matches, manufacturers run plants that have been operating for decades, and food businesses supply a good share of the national market.</p>
            <p className="loc-sectionDesc" style={{ textAlign: "left", marginBottom: "1rem" }}>The software those businesses need is rarely glamorous and always specific: tracking a load, scheduling a line, capturing what happened on a shift, letting a customer see where their order is. Get it wrong and people go back to the spreadsheet.</p>
            <p className="loc-sectionDesc" style={{ textAlign: "left", marginBottom: "1rem" }}>mTouch Labs builds these systems — logistics and fleet platforms, manufacturing and warehouse tooling, ordering and delivery apps, and the custom business software that ties them together. We have delivered 1,500+ products over 14+ years.</p>
          </div>
        </div>
      </section>

      {/* ═══ SERVICES ═══ */}
      <section className="loc-section loc-servicesSection">
        <div className="loc-sectionInner">
          <div className="loc-sectionHeader">
            <h2 className="loc-sectionTitle">What We Build for <span className="loc-highlight">Illinois Businesses</span></h2>
            <p className="loc-sectionDesc">What Illinois clients most commonly need. Our broader services, delivery approach and engagement options are set out on the <Link href="/software-development-company-usa">USA page</Link>.</p>
          </div>
          <div className="loc-whyGrid">{SERVICES.map((s) => <Card key={s.t} {...s} />)}</div>
        </div>
      </section>

      {/* ═══ INDUSTRIES ═══ */}
      <section className="loc-section loc-introSection">
        <div className="loc-sectionInner">
          <div className="loc-sectionHeader">
            <h2 className="loc-sectionTitle">Industries We Serve Across <span className="loc-highlight">Illinois</span></h2>
            <p className="loc-sectionDesc">Illinois sectors we know well, and the operational software each one runs.</p>
          </div>
          <div className="loc-whyGrid">{INDUSTRIES.map((x) => <Card key={x.t} {...x} />)}</div>
        </div>
      </section>

      {/* ═══ WHY US ═══ */}
      <section className="loc-section loc-servicesSection">
        <div className="loc-sectionInner">
          <div className="loc-sectionHeader">
            <h2 className="loc-sectionTitle">Why Illinois Businesses <span className="loc-highlight">Work With Us</span></h2>
          </div>
          <div className="loc-whyGrid" style={{ gridTemplateColumns: "repeat(4, 1fr)" }}>{WHY.map((w) => <Card key={w.t} {...w} />)}</div>
        </div>
      </section>

      {/* ═══ METROS ═══ */}
      <section className="loc-section loc-introSection">
        <div className="loc-sectionInner">
          <div className="loc-sectionHeader">
            <h2 className="loc-sectionTitle">Across <span className="loc-highlight">Illinois</span></h2>
          </div>
          <div className="loc-metroGrid">{METROS.map((m) => (
            <div className="loc-metroCard" key={m.t}>
              <h3 className="loc-metroName"><span><Icon name={m.i} size={17} /></span>{m.t}</h3>
              <p className="loc-metroText">{m.d}</p>
            </div>
          ))}</div>
          <div className="st-midCta">
            <h2 className="st-midCtaTitle">Working across state lines?</h2>
            <p className="st-midCtaText">The other US markets we cover each have a page of their own: <Link href="/software-development-company-new-york">New York</Link>, <Link href="/software-development-company-california">California</Link>, <Link href="/software-development-company-texas">Texas</Link> and <Link href="/software-development-company-florida">Florida</Link>.</p>
            <Link className="st-inlineBtn" href="/software-development-company-usa">See All US Services</Link>
          </div>
        </div>
      </section>

      {/* ═══ FAQ ═══ */}
      <section className="loc-section loc-faqSection">
        <div className="loc-sectionInner">
          <div className="loc-sectionHeader">
            <h2 className="loc-sectionTitle">Illinois <span className="loc-highlight">Questions</span></h2>
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
          <h2 className="loc-ctaTitle">Got an operation that needs better software?</h2>
          <p className="loc-ctaDesc">Freight, plant floor, kitchen or claims desk — tell us the workflow and we will scope the build.</p>
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
