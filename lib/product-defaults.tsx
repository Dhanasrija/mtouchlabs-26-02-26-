import { ReactNode } from "react";
import type { ProductPageData } from "@/components/templates/ProductPageTemplate";

/**
 * Shared default blocks used across product pages. Each page file overrides
 * the sections that need product-specific content (cards, tabs, AI, industries, FAQs, CTA).
 */

export const defaultAiCards = (product: string) => [
  { icon: "🎯", title: "Personalized Recommendations", desc: `AI-driven suggestions based on user preferences and ${product.toLowerCase()} history.` },
  { icon: "🔍", title: "Smart Search Results",         desc: "Intelligent search that understands intent and delivers relevant results." },
  { icon: "📊", title: "Demand Forecasting",           desc: "Predict demand patterns and optimize operations accordingly." },
  { icon: "🗺️", title: "Route & Workflow Optimization",desc: "AI-optimized workflows that improve speed and efficiency." },
  { icon: "🤖", title: "Chatbot Support",              desc: "24/7 automated customer support for queries, bookings, and complaints." },
  { icon: "📈", title: "Customer Behavior Insights",   desc: "Deep analytics on customer habits to improve engagement and retention." },
];

export const defaultWhyCards = (): {
  icon: string; title: string; desc: ReactNode;
}[] => [
  { icon: "🏆", title: "NASSCOM Award-Winning",           desc: "Recognized technology company with proven excellence." },
  { icon: "📱", title: "Mobile, Software & AI Expertise", desc: "Full-stack capabilities across all technology domains." },
  { icon: "⚡", title: "Scalable Architecture",           desc: "Solutions built to grow with startups and enterprises." },
  { icon: "🎨", title: "Custom UI/UX Design",             desc: <>Engaging interfaces crafted by our <a href="/ui-ux-design-company" target="_blank">UI/UX design team</a>.</> },
  { icon: "🔒", title: "Secure Payment Integration",      desc: "PCI-compliant payment gateways and third-party API integration." },
  { icon: "🔄", title: "Agile Development",               desc: "Transparent communication with iterative development cycles." },
  { icon: "🛠️", title: "Post-Launch Support",             desc: "Ongoing maintenance, updates, and feature enhancements." },
];

export const defaultCostTiers = [
  { name: "Basic",     desc: "Suitable for startups with core features and essential functionality." },
  { name: "Mid-Level", desc: "Suitable for growing businesses that need advanced features and integrations.", highlight: true },
  { name: "Advanced",  desc: "Enterprise-grade platform with analytics, automation, and scale-ready infrastructure." },
];

export const defaultProcessSteps = [
  { n: "01", title: "Discovery & Planning", desc: "We understand your business model, audience, workflows, and goals." },
  { n: "02", title: "UI/UX Design",         desc: "Our team creates a user-friendly interface for every user role." },
  { n: "03", title: "Development",          desc: "We build secure, scalable, and feature-rich applications using modern technologies." },
  { n: "04", title: "Testing & QA",         desc: "Every module is tested for performance, usability, and reliability." },
  { n: "05", title: "Launch & Support",     desc: "We help you launch smoothly and continue with upgrades, maintenance, and optimization." },
];

export const defaultScreens = (alt: string) => ({
  images: [1,2,3,4,5].map((n) => `/images/products/silder${n}.png`),
  alt,
});

/**
 * Build common "Why" + "Process" + "Cost" blocks quickly.
 */
export const buildDefaults = (product: string) => ({
  ai: {
    label: "AI-Powered",
    h2: `AI-Powered ${product} App Development`,
    desc: <>At mTouch Labs, we go beyond standard app development by integrating smart features that improve efficiency and user experience. Our <a href="/generative-ai-development-company" target="_blank">AI-powered {product.toLowerCase()} app development</a> solutions help businesses personalize customer journeys and optimize operations.</>,
    cards: defaultAiCards(product),
  },
  why: {
    label: "Why mTouch Labs",
    h2: `Why Choose mTouch Labs for ${product} App Development?`,
    intro: `Choosing the right development partner is critical when launching a ${product.toLowerCase()} platform. mTouch Labs combines mobile, software, and AI expertise to deliver reliable and growth-focused applications.`,
    cards: defaultWhyCards(),
    footer: `As a trusted ${product.toLowerCase()} app development company in Hyderabad, we help businesses launch faster and scale with confidence.`,
  } as ProductPageData["why"],
  cost: {
    h2: `${product} App Development Cost`,
    intro: "The cost depends on the business model, number of user panels, custom features, integrations, and platform requirements.",
    tiers: defaultCostTiers,
    note: "We provide custom development plans based on your goals, feature list, and launch roadmap.",
  } as ProductPageData["cost"],
  process: {
    h2: `Our ${product} App Development Process`,
    intro: "We follow a clear and efficient process to ensure timely delivery and quality outcomes.",
    steps: defaultProcessSteps,
  } as ProductPageData["process"],
});
