import type { Metadata } from "next";
import Link from "next/link";
import FAQSchema from "@/components/seo/FAQSchema";
import { Icon, type IconName, LOC_CSS, STATE_CSS, LocationStyles, LocBreadcrumb, StateSchema, stateSchema, US_CONTACT } from "@/components/locations/LocationKit";

/* ════════════════════════════════════════════════════════════
   TEXAS
   On-brand for mTouch Labs: what we build, for the industries
   that actually concentrate in this state. Services, delivery
   process and engagement models live on the USA page and are
   linked to, not restated here.
   ════════════════════════════════════════════════════════════ */

const SLUG = "software-development-company-texas";
const H1 = "Software Development Company in Texas";

export const metadata: Metadata = {
  metadataBase: new URL(US_CONTACT.origin),
  title: { absolute: "Software Development Company in Texas | mTouch Labs" },
  description: "Software development company in Texas. mTouch Labs builds enterprise applications, field service apps, logistics platforms, healthcare software and mobile apps for Texas businesses.",
  alternates: { canonical: `${US_CONTACT.origin}/${SLUG}` },
  openGraph: {
    title: "Software Development Company in Texas | mTouch Labs",
    description: "Enterprise applications, field service apps, logistics platforms and custom software for Texas businesses in energy, healthcare, manufacturing and distribution.",
    url: `${US_CONTACT.origin}/${SLUG}`,
    siteName: "mTouch Labs", type: "website", locale: "en_US",
    images: [{ url: "/images/og/software-development-company-usa.webp", width: 1200, height: 630, alt: "mTouch Labs — Software Development in Texas" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Software Development Company in Texas | mTouch Labs",
    description: "Enterprise applications, field service apps, logistics platforms and custom software for Texas businesses in energy, healthcare, manufacturing and distribution.",
    images: ["/images/og/software-development-company-usa.webp"],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large", "max-video-preview": -1 } },
};

const SCHEMA = stateSchema({ state: "Texas", slug: SLUG, headline: H1, summary: "Software development company in Texas. mTouch Labs builds enterprise applications, field service apps, logistics platforms, healthcare software and mobile apps for Texas businesses." });

const STATS: { i: IconName; n: string; l: string }[] = [
  { i: "award", n: "14+", l: "Years of engineering delivery" },
  { i: "users", n: "500+", l: "Clients worldwide" },
  { i: "package", n: "1,500+", l: "Applications delivered" },
  { i: "clock", n: "CST+1", l: "One hour from your working day" },
];

const WHY: { i: IconName; t: string; d: string }[] = [
  { i: "link", t: "We integrate with what you already run", d: "Most Texas projects are not greenfield. The value is usually in connecting an existing ERP, accounting system or piece of equipment to something people can actually use." },
  { i: "phone", t: "Built for the field, not the desk", d: "Offline-first data capture, sync that survives a dead zone, and interfaces that work on a phone in bright sunlight with one hand." },
  { i: "clipboard", t: "Estimates you can plan around", d: "Discovery produces a written architecture and milestone plan before development starts, and scope changes get re-estimated in writing rather than absorbed quietly." },
  { i: "clock", t: "Close to your working day", d: "Central time sits an hour behind our US cover, so questions raised in your morning generally get answered the same afternoon." },
];

const SERVICES: { i: IconName; t: string; d: string; cta: string; href: string }[] = [
  { i: "building", t: "Enterprise Application Development", d: "Systems multiple departments and sites depend on daily — built for uptime, role-based access and integration with your existing estate.", cta: "Explore Enterprise Development", href: "/enterprise-application-development-company" },
  { i: "truck", t: "Logistics & Fleet Platforms", d: "Dispatch, route planning, live tracking, proof of delivery and driver apps, with the admin panel that keeps operations visible.", cta: "Explore Logistics Solutions", href: "/taxi-booking-app-development-company" },
  { i: "activity", t: "Healthcare Software", d: "Patient scheduling, diagnostics apps, care coordination and practice management, built around clinical workflows rather than around a database.", cta: "Explore Healthcare Solutions", href: "/diagnostic-app-development-company" },
  { i: "server", t: "IoT & Connected Systems", d: "Device data collection, telemetry dashboards, alerting and the cloud backend that turns sensor output into something a manager can act on.", cta: "Explore IoT Development", href: "/best-iot-development-company-in-india" },
  { i: "code", t: "Custom Business Applications", d: "CRM, ERP extensions, inventory, workflow automation and reporting built to match how your operation actually runs.", cta: "Explore Custom Software", href: "/custom-software-development-company" },
  { i: "refresh", t: "Legacy Modernization", d: "Move off aging infrastructure without stopping the business — re-engineering, cloud migration, API layers and performance work.", cta: "Explore Modernization", href: "/it-services-digital-transformation-company" },
];

const INDUSTRIES: { i: IconName; t: string; d: string }[] = [
  { i: "zap", t: "Energy & Utilities", d: "Field data capture, asset and inspection tracking, compliance reporting and operations dashboards for upstream, midstream and service companies." },
  { i: "activity", t: "Healthcare & Medical", d: "Scheduling, telehealth, patient engagement apps and the integrations that connect them to existing hospital systems." },
  { i: "factory", t: "Manufacturing", d: "Production tracking, quality management, maintenance scheduling, supplier portals and shop-floor data capture." },
  { i: "truck", t: "Logistics & Transportation", d: "Fleet management, load tracking, driver apps, warehouse tooling and customer visibility portals." },
  { i: "home", t: "Real Estate & Construction", d: "Project tracking, site inspection apps, document management, tenant portals and property management systems." },
  { i: "cart", t: "Retail & Distribution", d: "Multi-location inventory, B2B ordering portals, ecommerce and route-based sales tools." },
];

const METROS: { i: IconName; t: string; d: string }[] = [
  { i: "cpu", t: "Austin", d: "Software products, connected devices and venture-backed teams needing a build partner before their first senior hires." },
  { i: "zap", t: "Houston", d: "Energy operations, petrochemical services, maritime logistics and the medical complex." },
  { i: "landmark", t: "Dallas–Fort Worth", d: "Corporate headquarters, financial services, insurance and distribution networks." },
  { i: "globe", t: "San Antonio", d: "Healthcare systems, public sector work and military-adjacent contracting." },
];

const FAQS: { q: string; a: string }[] = [
  { q: "Can you build something that works without a signal?", a: "Yes, and it is one of the more common Texas requirements. Offline-first apps store work locally and sync when connectivity returns, with conflict handling for the cases where two people edited the same record. It changes the data design, so it needs deciding early rather than added later." },
  { q: "We already have an ERP. Can you build around it rather than replace it?", a: "That is usually the better spend. We put an API layer in front of the existing system and build the new interfaces, mobile apps and reporting on top, leaving the parts that work alone. Replacing a working ERP is rarely the cheapest route to the outcome you want." },
  { q: "How much does a custom business application cost?", a: "It varies with how many user roles, integrations and workflows are involved — those drive cost far more than screen count. After discovery you get a fixed estimate broken into milestones, so you can stage the spend rather than committing to everything at once." },
  { q: "Do you provide ongoing support once it is live?", a: "Yes. Operational systems need someone on call when something breaks at 6am. Support arrangements cover fixes, monitoring, updates and a set amount of enhancement work each month." },
  { q: "Do you have a Texas office?", a: "No. Our US entity is in Delaware and engineering is delivered from Hyderabad. If in-state presence is a hard procurement requirement for your organisation, tell us in the first call rather than after a month of process." },
  { q: "Can you take over a project another firm started?", a: "Often. We begin with a read-only assessment of the codebase and give you a written verdict — what is salvageable, what should be rewritten, and what it would cost either way — before committing to a roadmap." },
];

const Card = ({ i, t, d, cta, href }: { i: IconName; t: string; d: string; cta?: string; href?: string }) => (
  <div className="loc-whyCard" style={{ flexDirection: "column", alignItems: "flex-start" }}>
    <span className="loc-tile"><Icon name={i} /></span>
    <h3 className="loc-whyTitle">{t}</h3>
    <p className="loc-whyText" style={{ flexGrow: 1 }}>{d}</p>
    {cta && href ? <Link className="st-cardLink" href={href}>{cta}</Link> : null}
  </div>
);

export default function SoftwareDevelopmentCompanyTexas() {
  return (
    <div className="loc-page">
      <LocationStyles />
      <style>{STATE_CSS}</style>
      <StateSchema blocks={SCHEMA} />
      <LocBreadcrumb current="Texas" />

      {/* ═══ HERO ═══ */}
      <section className="st-hero">
        <div className="st-heroInner">
          <div>
            <span className="st-eyebrow">mTouch Labs · Texas</span>
            <h1 className="st-h1">Software Development Company in <em>Texas</em></h1>
            <p className="st-heroText">Enterprise applications, field service apps, logistics platforms and custom software for Texas businesses in energy, healthcare, manufacturing and distribution.</p>
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
            <p className="loc-sectionDesc" style={{ textAlign: "left", marginBottom: "1rem" }}>A lot of Texas software has to meet the physical world. Crews in the field, trucks on the road, equipment on a plant floor, patients moving through a facility — the systems that matter are the ones that hold up when connectivity is poor and the people using them are wearing gloves.</p>
            <p className="loc-sectionDesc" style={{ textAlign: "left", marginBottom: "1rem" }}>mTouch Labs builds that kind of software: field data capture that works offline, dispatch and tracking platforms, operations dashboards, and the integrations that connect them to whatever you already run.</p>
            <p className="loc-sectionDesc" style={{ textAlign: "left", marginBottom: "1rem" }}>We also do the ordinary work well — mobile apps, customer portals, ecommerce and custom business systems — for the many Texas businesses whose growth is being held back by spreadsheets and disconnected tools.</p>
          </div>
        </div>
      </section>

      {/* ═══ SERVICES ═══ */}
      <section className="loc-section loc-servicesSection">
        <div className="loc-sectionInner">
          <div className="loc-sectionHeader">
            <h2 className="loc-sectionTitle">What We Build for <span className="loc-highlight">Texas Businesses</span></h2>
            <p className="loc-sectionDesc">The builds Texas clients ask for most. Everything else we do — process, engagement models, full service list — lives on the <Link href="/software-development-company-usa">USA page</Link>.</p>
          </div>
          <div className="loc-whyGrid">{SERVICES.map((s) => <Card key={s.t} {...s} />)}</div>
        </div>
      </section>

      {/* ═══ INDUSTRIES ═══ */}
      <section className="loc-section loc-introSection">
        <div className="loc-sectionInner">
          <div className="loc-sectionHeader">
            <h2 className="loc-sectionTitle">Industries We Serve Across <span className="loc-highlight">Texas</span></h2>
            <p className="loc-sectionDesc">Texas industries where we have done the most work, and the systems each one runs on.</p>
          </div>
          <div className="loc-whyGrid">{INDUSTRIES.map((x) => <Card key={x.t} {...x} />)}</div>
        </div>
      </section>

      {/* ═══ WHY US ═══ */}
      <section className="loc-section loc-servicesSection">
        <div className="loc-sectionInner">
          <div className="loc-sectionHeader">
            <h2 className="loc-sectionTitle">Why Texas Businesses <span className="loc-highlight">Work With Us</span></h2>
          </div>
          <div className="loc-whyGrid" style={{ gridTemplateColumns: "repeat(4, 1fr)" }}>{WHY.map((w) => <Card key={w.t} {...w} />)}</div>
        </div>
      </section>

      {/* ═══ METROS ═══ */}
      <section className="loc-section loc-introSection">
        <div className="loc-sectionInner">
          <div className="loc-sectionHeader">
            <h2 className="loc-sectionTitle">Across <span className="loc-highlight">Texas</span></h2>
          </div>
          <div className="loc-metroGrid">{METROS.map((m) => (
            <div className="loc-metroCard" key={m.t}>
              <h3 className="loc-metroName"><span><Icon name={m.i} size={17} /></span>{m.t}</h3>
              <p className="loc-metroText">{m.d}</p>
            </div>
          ))}</div>
          <div className="st-midCta">
            <h2 className="st-midCtaTitle">Business in more than one state?</h2>
            <p className="st-midCtaText">Each of the other US markets we serve has its own page: <Link href="/software-development-company-new-york">New York</Link>, <Link href="/software-development-company-california">California</Link>, <Link href="/software-development-company-florida">Florida</Link> and <Link href="/software-development-company-illinois">Illinois</Link>.</p>
            <Link className="st-inlineBtn" href="/software-development-company-usa">See All US Services</Link>
          </div>
        </div>
      </section>

      {/* ═══ FAQ ═══ */}
      <section className="loc-section loc-faqSection">
        <div className="loc-sectionInner">
          <div className="loc-sectionHeader">
            <h2 className="loc-sectionTitle">Texas <span className="loc-highlight">Questions</span></h2>
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
          <h2 className="loc-ctaTitle">Got a system that has to meet the real world?</h2>
          <p className="loc-ctaDesc">Field crews, fleets, plants or patients — tell us what it has to connect to and we will scope it.</p>
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
