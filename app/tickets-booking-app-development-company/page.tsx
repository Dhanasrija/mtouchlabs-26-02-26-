"use client";
import ProductPageTemplate, { type ProductPageData } from "@/components/templates/ProductPageTemplate";
import { buildDefaults } from "@/lib/product-defaults";

const d = {
  ...buildDefaults("Ticket Booking"),
  dividerTitle: undefined,
  dividerImg: undefined,
};

const data: ProductPageData = {
  crumbLabel: "Tickets Booking App Development Company",
  hero: {
    h1Top: "Tickets Booking App",
    h1Accent: "Development Company",
    h1Tail: "in Hyderabad",
    subtitle: "Launch a scalable ticket booking app for movies, events, travel, and attractions with real-time seat selection and secure payments.",
    demoHref: "https://youtu.be/jy_PrGTVv1I?si=NBxN427gKvSklHu2",
    leftPhoneImg: "/images/products/movie/phone1.png",
    rightPhoneImg: "/images/products/movie/phone2.png",
  },
  intro: {
    img: "/images/products/movie/phone1.png",
    label: "Ticket Booking Experts",
    h3: "Tickets Booking App Development",
    body: [
      <>mTouch Labs is a NASSCOM award-winning <a href="/mobile-app-development-company" target="_blank">tickets booking app development company</a> in Hyderabad, helping entertainment and travel brands launch ticketing platforms.</>,
      <>We build movie ticket apps, event booking, bus/train/flight booking, and attraction ticketing platforms tailored to your scale.</>,
    ],
  },
  dividerTitle: "Custom Tickets Booking App Development",
  endToEnd: {
    img: "/images/products/movie/phone2.png",
    label: "End-to-End Solutions",
    h3: "Complete Ticketing App Development",
    body: [
      "End-to-end ticketing apps covering customer apps, organizer panels, and admin dashboards.",
      "Our solutions include movie ticketing, event booking, bus/train/flight booking, and attraction ticketing.",
    ],
  },
  cardsSection: {
    label: "What We Build",
    h2: "Ticketing Apps We Build",
    intro: "Scalable ticketing applications for different booking models.",
    cards: [
      { icon: "🎬", title: "Movie Ticketing",       desc: "Real-time seat selection and cinema booking." },
      { icon: "🎉", title: "Event Booking",         desc: "Concerts, festivals, and live events ticketing." },
      { icon: "🚌", title: "Bus & Train",           desc: "Live inventory for bus and train ticket booking." },
      { icon: "✈️", title: "Flight Booking",        desc: "GDS-integrated flight search and booking." },
      { icon: "🏛️", title: "Attractions",           desc: "Museums, theme parks, and tourist attraction passes." },
      { icon: "💳", title: "Secure Payments",       desc: "UPI, wallets, cards, and multi-currency support." },
      { icon: "🏷️", title: "White-Label Solutions", desc: "Customizable ticketing apps ready for launch." },
      { icon: "🔌", title: "API Integration",       desc: "GDS, venue, and payment gateway integration." },
    ],
  },
  screens: {
    alt: "Tickets booking app screen",
    images: [
      "/images/products/movie/appscreen1.png",
      "/images/products/movie/appscreen2.png",
      "/images/products/movie/appscreen3.png",
      "/images/products/movie/appscreen4.png",
      "/images/products/movie/appscreen5.png",
    ],
  },
  tabs: {
    label: "Features",
    h2: "Core Features of Our Ticketing App",
    intro: "Our ticketing app development covers every part of the ecosystem.",
    panels: [
      { id: "customer",  title: "Customer App",  items: ["Easy Sign-Up","Smart Search","Seat Selection","Instant Booking","Multiple Payment Options","E-Tickets & QR","Ratings & Reviews","Push Notifications"] },
      { id: "admin",     title: "Admin Panel",   items: ["User & Venue Management","Commission Management","Booking Tracking","Reports & Analytics","Payment Settlements"] },
      { id: "organizer", title: "Organizer",     items: ["Event Creation","Seat Map Builder","Pricing & Offers","Check-In Scanner","Sales Tracking"] },
      { id: "agent",     title: "Agent Panel",   items: ["B2B Rates","Bulk Booking","Commission Tracking","Invoice Management","Reports"] },
    ],
  },
  ...d,
  industries: {
    h2: "Industries and Business Models We Support",
    items: [
      { icon: "🎬", name: "Cinemas" },
      { icon: "🎉", name: "Events" },
      { icon: "🚌", name: "Bus Operators" },
      { icon: "✈️", name: "Travel" },
      { icon: "🏛️", name: "Attractions" },
      { icon: "🏷️", name: "White-Label" },
    ],
  },
  faqs: [
    { q: "What is tickets booking app development?", a: "Tickets booking app development is the process of building platforms that let users book tickets for movies, events, travel, and attractions with real-time seat selection and secure payments." },
    { q: "How much does it cost?", a: "Costs depend on features, integrations, and scale. Basic apps are affordable while multi-category ticketing platforms require higher investment." },
    { q: "How long does it take?", a: "A ticketing app typically takes 8 to 16 weeks depending on features." },
    { q: "Can you build apps like BookMyShow?", a: "Yes, we build scalable multi-category ticketing platforms similar to BookMyShow with custom features." },
    { q: "Do you support QR-based e-tickets?", a: "Yes, we build QR-based e-ticket generation and check-in scanners." },
    { q: "Do you provide post-launch support?", a: "Yes, we provide ongoing maintenance and enhancements." },
  ],
  cta: {
    img: "/images/products/movie/service1.png",
    h2: "Build a Ticketing App Customers Love",
    body: "Launch a modern ticketing platform that is scalable, user-friendly, and ready for growth.",
  },
};

export default function Page() { return <ProductPageTemplate data={data} />; }
