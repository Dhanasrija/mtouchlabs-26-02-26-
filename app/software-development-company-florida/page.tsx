import type { Metadata } from "next";
import Link from "next/link";
import FAQSchema from "@/components/seo/FAQSchema";
import { Icon, type IconName, LOC_CSS, STATE_CSS, LocationStyles, LocBreadcrumb, StateSchema, stateSchema, US_CONTACT } from "@/components/locations/LocationKit";
import HeroLeadForm from "@/components/locations/HeroLeadForm";

/* ════════════════════════════════════════════════════════════
   FLORIDA
   On-brand for mTouch Labs: what we build, for the industries
   that actually concentrate in this state. Services, delivery
   process and engagement models live on the USA page and are
   linked to, not restated here.
   ════════════════════════════════════════════════════════════ */

const SLUG = "software-development-company-florida";
const H1 = "Software Development Company in Florida";

export const metadata: Metadata = {
  metadataBase: new URL(US_CONTACT.origin),
  title: { absolute: "Software Development Company in Florida | mTouch Labs" },
  description: "Software development company in Florida. mTouch Labs builds booking platforms, hospitality apps, healthcare software, ecommerce and mobile apps for Florida businesses.",
  alternates: { canonical: `${US_CONTACT.origin}/${SLUG}` },
  openGraph: {
    title: "Software Development Company in Florida | mTouch Labs",
    description: "Booking platforms, hospitality and travel apps, healthcare software and ecommerce for Florida businesses — built in the same time zone you work in.",
    url: `${US_CONTACT.origin}/${SLUG}`,
    siteName: "mTouch Labs", type: "website", locale: "en_US",
    images: [{ url: "/images/og/software-development-company-usa.webp", width: 1200, height: 630, alt: "mTouch Labs — Software Development in Florida" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Software Development Company in Florida | mTouch Labs",
    description: "Booking platforms, hospitality and travel apps, healthcare software and ecommerce for Florida businesses — built in the same time zone you work in.",
    images: ["/images/og/software-development-company-usa.webp"],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large", "max-video-preview": -1 } },
};

const SCHEMA = stateSchema({ state: "Florida", slug: SLUG, headline: H1, summary: "Software development company in Florida. mTouch Labs builds booking platforms, hospitality apps, healthcare software, ecommerce and mobile apps for Florida businesses." });

const STATS: { i: IconName; n: string; l: string }[] = [
  { i: "award", n: "14+", l: "Years delivering software" },
  { i: "package", n: "1,500+", l: "Products built and launched" },
  { i: "users", n: "500+", l: "Clients served" },
  { i: "clock", n: "EST", l: "Same time zone as you" },
];

const WHY: { i: IconName; t: string; d: string }[] = [
  { i: "send", t: "Booking flows that convert", d: "Most reservation systems lose people at payment or availability. We treat that flow as the product, because for a hospitality or clinic business it is." },
  { i: "phone", t: "Mobile-first by default", d: "Your customers are booking on a phone, often outdoors, often in a hurry. We design for that case first and let the desktop view follow." },
  { i: "cloud", t: "Built to stay up in storm season", d: "Multi-region hosting, tested restores and a documented runbook — because a named storm should be an inconvenience, not a lost week of bookings." },
  { i: "globe", t: "Bilingual where you need it", d: "Multilingual interfaces and locale-aware formatting for businesses serving Spanish-speaking and Latin American customers." },
];

const SERVICES: { i: IconName; t: string; d: string; cta: string; href: string }[] = [
  { i: "send", t: "Booking & Reservation Platforms", d: "Availability, pricing, payments, confirmations and cancellations — for hotels, tours, clinics, venues and rentals.", cta: "Explore Booking App Development", href: "/hotel-booking-app-development-company" },
  { i: "phone", t: "Mobile App Development", d: "Guest apps, loyalty apps, patient apps and on-demand service apps for iOS and Android.", cta: "Explore Mobile App Development", href: "/mobile-app-development-company" },
  { i: "activity", t: "Healthcare Applications", d: "Appointment scheduling, telehealth, patient portals and diagnostics apps for practices and provider networks.", cta: "Explore Healthcare Solutions", href: "/diagnostic-app-development-company" },
  { i: "cart", t: "eCommerce Development", d: "Online stores, multi-vendor marketplaces, subscription commerce and order management.", cta: "Explore eCommerce Development", href: "/ecommerce-app-development-company" },
  { i: "truck", t: "On-Demand Delivery Apps", d: "Customer, driver and admin applications for food, grocery and last-mile delivery businesses.", cta: "Explore On-Demand Development", href: "/on-demand-service-mobile-app-development" },
  { i: "globe", t: "Web Platforms & Portals", d: "Customer portals, dashboards, membership sites and the content platforms that support them.", cta: "Explore Web Development", href: "/web-development-company" },
];

const INDUSTRIES: { i: IconName; t: string; d: string }[] = [
  { i: "send", t: "Travel & Hospitality", d: "Booking engines, property management integrations, guest apps, loyalty programmes and itinerary tools." },
  { i: "activity", t: "Healthcare & Senior Care", d: "Scheduling, telehealth, care coordination, family portals and remote monitoring for a state with an older population than most." },
  { i: "cart", t: "Retail & eCommerce", d: "Storefronts, marketplaces, inventory across multiple locations and loyalty apps." },
  { i: "home", t: "Real Estate & Property", d: "Listing portals, rental management, tenant apps, maintenance requests and document handling." },
  { i: "landmark", t: "Financial Services", d: "Client portals, onboarding, reporting dashboards and workflow tools for Miami's growing financial sector." },
  { i: "truck", t: "Logistics & Distribution", d: "Port-adjacent freight tooling, fleet tracking, warehouse systems and delivery platforms." },
];

const METROS: { i: IconName; t: string; d: string }[] = [
  { i: "landmark", t: "Miami & Fort Lauderdale", d: "Financial services, international trade, and startups with strong Latin American ties." },
  { i: "send", t: "Orlando", d: "Hospitality, attractions, travel technology and training platforms." },
  { i: "activity", t: "Tampa & St. Petersburg", d: "Healthcare networks, insurance and back-office operations." },
  { i: "rocket", t: "Space Coast & Jacksonville", d: "Aerospace suppliers, logistics and distribution businesses." },
];

const FAQS: { q: string; a: string }[] = [
  { q: "Can you integrate with our existing property management or booking system?", a: "Usually. Most hospitality and clinic systems expose an API or at least a data export, and we build the customer-facing app or portal on top rather than replacing what your staff already knows. Where no API exists we will tell you honestly what the workaround costs." },
  { q: "How do you handle payments?", a: "Through established providers — Stripe, PayPal, Square or whatever your business already uses — rather than handling card data ourselves. That keeps the compliance surface small and the integration well-trodden. We build the flows around it: deposits, refunds, cancellations and no-show handling." },
  { q: "Our business is seasonal. Can the system handle the peak?", a: "That is a hosting and architecture question we plan for explicitly. Autoscaling infrastructure means you pay for capacity in season and less out of it, and we load-test against your expected peak rather than your average." },
  { q: "Can you build the app in Spanish as well as English?", a: "Yes. We build multilingual interfaces with locale-aware dates, currency and formatting. For customer-facing copy we would recommend native Spanish writing and review rather than relying on machine translation." },
  { q: "Do you have a Florida office?", a: "No. We are a Delaware-registered company with engineering in Hyderabad, working Eastern hours. Given how many local addresses in this state turn out to be mail forwarding, we would rather say that plainly than blend in." },
  { q: "What does it cost to build a booking app?", a: "It depends mostly on how complicated availability and pricing are — a single-location clinic is very different from a multi-property operation with seasonal rates and channel management. Discovery gives you a fixed estimate before development starts." },
];

const Card = ({ i, t, d, cta, href }: { i: IconName; t: string; d: string; cta?: string; href?: string }) => (
  <div className="loc-whyCard" style={{ flexDirection: "column", alignItems: "flex-start" }}>
    <span className="loc-tile"><Icon name={i} /></span>
    <h3 className="loc-whyTitle">{t}</h3>
    <p className="loc-whyText" style={{ flexGrow: 1 }}>{d}</p>
    {cta && href ? <Link className="st-cardLink" href={href}>{cta}</Link> : null}
  </div>
);

export default function SoftwareDevelopmentCompanyFlorida() {
  return (
    <div className="loc-page">
      <LocationStyles />
      <style>{STATE_CSS}</style>
      <StateSchema blocks={SCHEMA} />
      <LocBreadcrumb current="Florida" />

      {/* ═══ HERO ═══ */}
      <section className="st-hero">
        <div className="st-heroInner">
          <div>
            <span className="st-eyebrow">mTouch Labs · Florida</span>
            <h1 className="st-h1">Software Development Company in <em>Florida</em></h1>
            <p className="st-heroText">Booking platforms, hospitality and travel apps, healthcare software and ecommerce for Florida businesses — built in the same time zone you work in.</p>
            <div className="st-heroActions">
              <Link href="/contact-us" className="st-btnA">Talk to a Software Expert</Link>
              <Link href="/portfolio" className="st-btnB">See Our Work</Link>
            </div>
          </div>
          {/* The right column holds the lead form, matching
              /software-development-company-usa. It was a stat grid; the
              USA hero has no stats, and the brief is that every location
              hero matches that one. */}
          <HeroLeadForm location="Florida" />
        </div>
      </section>

      {/* ═══ INTRO ═══ */}
      <section className="loc-section loc-introSection">
        <div className="loc-sectionInner">
          <div className="loc-sectionHeader" style={{ maxWidth: "900px" }}>
            <p className="loc-sectionDesc" style={{ textAlign: "left", marginBottom: "1rem" }}>Florida runs on businesses that serve people who are moving: guests checking in, patients booking appointments, customers ordering delivery, travellers changing plans. The software behind them succeeds or fails on whether a booking goes through cleanly at the moment someone is ready to commit.</p>
            <p className="loc-sectionDesc" style={{ textAlign: "left", marginBottom: "1rem" }}>mTouch Labs builds those systems — reservation and booking engines, guest and patient apps, on-demand service platforms and the operational tooling that keeps staff on top of them.</p>
            <p className="loc-sectionDesc" style={{ textAlign: "left", marginBottom: "1rem" }}>We have delivered 1,500+ digital products over 14+ years, and we work on Eastern time, so a Florida client shares our full working day rather than a slice of it.</p>
          </div>
        </div>
      </section>

      {/* ═══ SERVICES ═══ */}
      <section className="loc-section loc-servicesSection">
        <div className="loc-sectionInner">
          <div className="loc-sectionHeader">
            <h2 className="loc-sectionTitle">What We Build for <span className="loc-highlight">Florida Businesses</span></h2>
            <p className="loc-sectionDesc">The systems Florida clients need most. Our full capability list and how engagements are structured are covered on the <Link href="/software-development-company-usa">USA page</Link>.</p>
          </div>
          <div className="loc-whyGrid">{SERVICES.map((s) => <Card key={s.t} {...s} />)}</div>
        </div>
      </section>

      {/* ═══ INDUSTRIES ═══ */}
      <section className="loc-section loc-introSection">
        <div className="loc-sectionInner">
          <div className="loc-sectionHeader">
            <h2 className="loc-sectionTitle">Industries We Serve Across <span className="loc-highlight">Florida</span></h2>
            <p className="loc-sectionDesc">Where Florida businesses come to us from, and the software each sector depends on.</p>
          </div>
          <div className="loc-whyGrid">{INDUSTRIES.map((x) => <Card key={x.t} {...x} />)}</div>
        </div>
      </section>

      {/* ═══ WHY US ═══ */}
      <section className="loc-section loc-servicesSection">
        <div className="loc-sectionInner">
          <div className="loc-sectionHeader">
            <h2 className="loc-sectionTitle">Why Florida Businesses <span className="loc-highlight">Work With Us</span></h2>
          </div>
          <div className="loc-whyGrid" style={{ gridTemplateColumns: "repeat(4, 1fr)" }}>{WHY.map((w) => <Card key={w.t} {...w} />)}</div>
        </div>
      </section>

      {/* ═══ METROS ═══ */}
      <section className="loc-section loc-introSection">
        <div className="loc-sectionInner">
          <div className="loc-sectionHeader">
            <h2 className="loc-sectionTitle">Across <span className="loc-highlight">Florida</span></h2>
          </div>
          <div className="loc-metroGrid">{METROS.map((m) => (
            <div className="loc-metroCard" key={m.t}>
              <h3 className="loc-metroName"><span><Icon name={m.i} size={17} /></span>{m.t}</h3>
              <p className="loc-metroText">{m.d}</p>
            </div>
          ))}</div>
          <div className="st-midCta">
            <h2 className="st-midCtaTitle">Also serving customers elsewhere in the US?</h2>
            <p className="st-midCtaText">We maintain a page for every US market we work in regularly: <Link href="/software-development-company-new-york">New York</Link>, <Link href="/software-development-company-california">California</Link>, <Link href="/software-development-company-texas">Texas</Link> and <Link href="/software-development-company-illinois">Illinois</Link>.</p>
            <Link className="st-inlineBtn" href="/software-development-company-usa">See All US Services</Link>
          </div>
        </div>
      </section>

      {/* ═══ FAQ ═══ */}
      <section className="loc-section loc-faqSection">
        <div className="loc-sectionInner">
          <div className="loc-sectionHeader">
            <h2 className="loc-sectionTitle">Florida <span className="loc-highlight">Questions</span></h2>
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
          <h2 className="loc-ctaTitle">Need customers to book, order or check in?</h2>
          <p className="loc-ctaDesc">Describe the flow you want and we will show you what it takes to make it work properly.</p>
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
