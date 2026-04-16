"use client";
import ProductPageTemplate, { type ProductPageData } from "@/components/templates/ProductPageTemplate";
import { buildDefaults } from "@/lib/product-defaults";

const d = {
  ...buildDefaults("Sports & Fitness"),
  dividerTitle: undefined,
  dividerImg: undefined,
};


const data: ProductPageData = {
  crumbLabel: "Sports and Fitness App Development Company",
  hero: {
    h1Top: "Sports & Fitness App",
    h1Accent: "Development Company",
    h1Tail: "in Hyderabad",
    subtitle: "Launch a scalable fitness app with workout tracking, live classes, wearable integration, nutrition plans, and personalized coaching.",
    demoHref: "https://youtu.be/pQpWph29AdA?si=rUt7n3HeLiARR1z_",
    leftPhoneImg: "/images/products/sports/phone1.png",
    rightPhoneImg: "/images/products/sports/phone2.png",
  },
  intro: {
    img: "/images/products/sports/phone1.png",
    label: "Fitness App Experts",
    h3: "Sports & Fitness App Development",
    body: [
      <>mTouch Labs is a NASSCOM award-winning <a href="/mobile-app-development-company" target="_blank">sports and fitness app development company</a> in Hyderabad, helping wellness brands and coaches launch modern fitness platforms.</>,
      <>We build workout tracking, live fitness classes, wearable sync, nutrition and meal plans, and sports coaching apps tailored to your audience.</>,
    ],
  },
  dividerTitle: "Custom Sports & Fitness App Development",
  endToEnd: {
    img: "/images/products/sports/phone2.png",
    label: "End-to-End Solutions",
    h3: "Complete Fitness App Development",
    body: [
      "End-to-end fitness apps covering user apps, coach apps, gym panels, and admin dashboards.",
      "Our solutions include workout tracking, live classes, nutrition plans, wearable sync, and sports coaching.",
    ],
  },
  cardsSection: {
    label: "What We Build",
    h2: "Fitness Apps We Build",
    intro: "Scalable fitness applications for different wellness models.",
    cards: [
      { icon: "💪", title: "Workout Tracking", desc: "Log workouts, sets, reps, and personal records." },
      { icon: "🎥", title: "Live Fitness Classes", desc: "Live and on-demand video classes with trainers." },
      { icon: "⌚", title: "Wearable Integration", desc: "Sync with Apple Watch, Fitbit, and Google Fit." },
      { icon: "🥗", title: "Nutrition & Meals", desc: "Personalized diet plans and calorie tracking." },
      { icon: "🏋️", title: "Gym Booking", desc: "Book gyms, studios, and classes on-demand." },
      { icon: "🏃", title: "Sports Coaching", desc: "One-on-one coaching with video analysis." },
      { icon: "🏷️", title: "White-Label Solutions", desc: "Customizable fitness apps ready for launch." },
      { icon: "🔌", title: "API Integration", desc: "Wearables, payments, and video streaming." },
    ],
  },
  screens: {
    alt: "Sports and fitness app screen",
    images: [
      "/images/products/sports/appscreen1.png",
      "/images/products/sports/appscreen2.png",
      "/images/products/sports/appscreen3.png",
      "/images/products/sports/appscreen4.png",
      "/images/products/sports/appscreen5.png",
    ],
  },
  tabs: {
    label: "Features",
    h2: "Core Features of Our Fitness App",
    intro: "Our sports and fitness app development covers every part of the ecosystem.",
    panels: [
      { id: "user", title: "User App", items: ["Easy Sign-Up", "Workout Tracking", "Live & On-Demand Classes", "Wearable Sync", "Nutrition Tracker", "Goal Setting", "Community Feed", "Push Notifications"] },
      { id: "admin", title: "Admin Panel", items: ["User & Coach Management", "Content Management", "Reports & Analytics", "Payment Settlements", "Subscriptions"] },
      { id: "coach", title: "Coach App", items: ["Client Management", "Plan Creation", "Live Classes", "Earnings Dashboard", "Chat & Video"] },
      { id: "gym", title: "Gym Panel", items: ["Class Scheduling", "Member Management", "Equipment Tracking", "Sales Tracking", "Offers"] },
    ],
  },
  ...d,
  industries: {
    h2: "Industries and Business Models We Support",
    items: [
      { icon: "💪", name: "Fitness" },
      { icon: "🏋️", name: "Gyms" },
      { icon: "🧘", name: "Yoga & Wellness" },
      { icon: "🏃", name: "Sports Coaching" },
      { icon: "🥗", name: "Nutrition" },
      { icon: "🏷️", name: "White-Label" },
    ],
  },
  faqs: [
    { q: "What is sports and fitness app development?", a: "Sports and fitness app development is the process of building platforms that help users track workouts, follow coaches, and stay fit with personalized plans." },
    { q: "How much does it cost?", a: "Costs depend on features, integrations, and scale. Basic tracking apps are affordable while live class platforms require higher investment." },
    { q: "How long does it take?", a: "A fitness app typically takes 8 to 16 weeks depending on features." },
    { q: "Can you build apps like Cult.fit or Strava?", a: "Yes, we build scalable fitness platforms similar to Cult.fit and Strava with custom features." },
    { q: "Do you support wearables?", a: "Yes, we integrate Apple Watch, Fitbit, Google Fit, and other wearables." },
    { q: "Do you provide post-launch support?", a: "Yes, we provide ongoing maintenance and enhancements." },
  ],
  cta: {
    img: "/images/products/sports/service1.png",
    h2: "Build a Fitness App Users Love",
    body: "Launch a modern fitness platform that is engaging, scalable, and ready for growth.",
  },
};

export default function Page() { return <ProductPageTemplate data={data} />; }
