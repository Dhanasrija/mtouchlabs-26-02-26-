"use client";
import ProductPageTemplate, { type ProductPageData } from "@/components/templates/ProductPageTemplate";
import { buildDefaults } from "@/lib/product-defaults";

const d = {
  ...buildDefaults("Car Wash"),
  dividerTitle: undefined,
  dividerImg: undefined,
};

const data: ProductPageData = {
  crumbLabel: "Car Wash App Development Company",
  hero: {
    h1Top: "Car Wash App",
    h1Accent: "Development Company",
    h1Tail: "in Hyderabad",
    subtitle: "Launch an on-demand car wash app with live tracking, slot booking, automated scheduling, secure payments, and smart route planning.",
    demoHref: "/contact-us",
    leftPhoneImg: "/images/products/carwash/car-wash-phone-1.svg",
    rightPhoneImg: "/images/products/carwash/car-wash-phone-3.svg",
  },
  intro: {
    img: "/images/products/carwash/car-wash-phone-1.svg",
    label: "Car Wash Experts",
    h3: "Car Wash App Development",
    body: [
      <>mTouch Labs is a NASSCOM award-winning <a href="/mobile-app-development-company" target="_blank">car wash app development company</a> in Hyderabad, helping auto-care startups and franchises launch on-demand car wash platforms.</>,
      <>We build at-home mobile detailing apps, drive-in car wash booking platforms, multi-outlet franchise systems, and subscription car care apps tailored to your scale.</>,
    ],
  },
  dividerTitle: "Custom Car Wash App Development Services",
  dividerImg: "/images/products/carwash/application.svg",
  endToEnd: {
    img: "/images/products/carwash/car-wash-phone-2.svg",
    label: "End-to-End Solutions",
    h3: "Complete Car Wash Platform",
    body: [
      "End-to-end car wash apps covering customer apps, washer partner apps, outlet panels, and admin dashboards.",
      "Our solutions include doorstep detailing, drive-in booking, multi-outlet chains, and subscription-based car care programs.",
    ],
  },
  cardsSection: {
    label: "What We Build",
    h2: "Car Wash Apps We Build",
    intro: "Scalable car wash and auto-care applications for different business models.",
    cards: [
      { icon: "🚘", title: "On-Demand Car Wash", desc: "Book a car wash instantly with live washer tracking." },
      { icon: "🏠", title: "Doorstep Detailing", desc: "At-home car cleaning and detailing service apps." },
      { icon: "🏢", title: "Multi-Outlet Chains", desc: "Manage multiple outlets with centralized bookings." },
      { icon: "📅", title: "Subscription Plans", desc: "Weekly, monthly, and yearly car care packages." },
      { icon: "🚗", title: "Drive-In Booking", desc: "Slot booking and queue management for drive-in centers." },
      { icon: "💳", title: "Secure Payments", desc: "Wallets, UPI, cards, and auto-debit integration." },
      { icon: "🏷️", title: "White-Label Solutions", desc: "Customizable car wash apps ready to launch." },
      { icon: "🔌", title: "API Integration", desc: "GPS, SMS, and payment gateway integration." },
    ],
  },
  screens: {
    alt: "Car wash app screen",
    images: [
      "/images/products/carwash/car-wash-phone-1.svg",
      "/images/products/carwash/car-wash-phone-2.svg",
      "/images/products/carwash/car-wash-phone-3.svg",
      "/images/products/carwash/car-wash-phone-4.svg",
      "/images/products/carwash/car-wash-phone-5.svg",
    ],
  },
  tabs: {
    label: "Features",
    h2: "Core Features of Our Car Wash App",
    intro: "Our car wash app development covers the entire ecosystem.",
    panels: [
      { id: "customer", title: "Customer App", items: ["Easy Sign-Up", "Service Selection", "Slot & Location Booking", "Live Washer Tracking", "Multiple Payment Options", "Ratings & Feedback", "Offers & Referrals", "Push Notifications"] },
      { id: "admin", title: "Admin Panel", items: ["User & Washer Management", "Booking Dashboard", "Reports & Analytics", "Promotions & Offers", "Revenue Reports"] },
      { id: "washer", title: "Washer App", items: ["Job Assignments", "Live Navigation", "Earnings Dashboard", "Availability Toggle", "Service Checklist"] },
      { id: "outlet", title: "Outlet Panel", items: ["Queue Management", "Staff & Bay Allocation", "Inventory Control", "Revenue Reports", "Customer History"] },
    ],
  },
  ...d,
  industries: {
    h2: "Industries and Business Models We Support",
    items: [
      { icon: "🚘", name: "Car Wash Chains" },
      { icon: "🏠", name: "Doorstep Services" },
      { icon: "🧽", name: "Detailing Studios" },
      { icon: "⛽", name: "Fuel & Service" },
      { icon: "📅", name: "Subscription Plans" },
      { icon: "🏷️", name: "White-Label" },
    ],
  },
  faqs: [
    { q: "What is car wash app development?", a: "Car wash app development is the process of building on-demand platforms that let customers book car cleaning and detailing services with live tracking and secure payments." },
    { q: "How much does it cost to build a car wash app?", a: "Costs depend on features, scale, and integrations. Basic booking apps are affordable; multi-outlet platforms with analytics require higher investment." },
    { q: "How long does it take to build?", a: "A car wash app typically takes 8 to 14 weeks depending on features and complexity." },
    { q: "Can you build doorstep and drive-in models together?", a: "Yes, we build hybrid apps that support both at-home detailing and drive-in slot booking." },
    { q: "Do you support subscription packages?", a: "Yes, we build weekly, monthly, and yearly subscription plans with auto-debit billing." },
    { q: "Do you provide post-launch support?", a: "Yes, we provide ongoing maintenance, performance tuning, and feature enhancements." },
  ],
  cta: {
    img: "/images/products/carwash/bg-car-wash.svg",
    h2: "Build a Car Wash App Customers Love",
    body: "Launch a modern on-demand car wash platform that is scalable, reliable, and ready for growth.",
  },
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: data.faqs.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          }),
        }}
      />
      <ProductPageTemplate data={data} />
    </>
  );
}
