"use client";
import ProductPageTemplate, { type ProductPageData } from "@/components/templates/ProductPageTemplate";
import { buildDefaults } from "@/lib/product-defaults";

const d = {
  ...buildDefaults("E-Learning"),
  dividerTitle: undefined,
  dividerImg: undefined,
};

const data: ProductPageData = {
  crumbLabel: "E-Learning App Development Company",
  hero: {
    h1Top: "E-Learning App",
    h1Accent: "Development Company",
    h1Tail: "in Hyderabad",
    subtitle: "Launch a scalable e-learning platform with virtual classrooms, gamified learning, AI-powered personalization, and LMS integration for modern education delivery.",
    demoHref: "/contact-us",
    leftPhoneImg: "/images/products/elearning/phone1.png",
    rightPhoneImg: "/images/products/elearning/phone.png",
  },
  featuresBannerImg: "/images/products/elearning/banner1.png",
  featuresBannerAlt: "e-learning app development company in Hyderabad",
  intro: {
    img: "/images/products/elearning/phone1.png",
    label: "E-Learning Experts",
    h3: "E-Learning App Development",
    body: [
      <>mTouch Labs is a NASSCOM award-winning <a href="/mobile-app-development-company" target="_blank">e-learning app development company</a> in Hyderabad, helping EdTech startups, schools, and enterprises launch scalable online learning platforms.</>,
      <>We build LMS platforms, virtual classroom apps, gamified learning tools, <a href="/generative-ai-development-company" target="_blank">AI-powered tutoring solutions</a>, and corporate training portals tailored to your audience.</>,
    ],
  },
  dividerTitle: "Custom E-Learning App Development Services",
  dividerImg: "/images/products/elearning/icon1.png",
  endToEnd: {
    img: "/images/products/elearning/phone.png",
    label: "End-to-End Solutions",
    h3: "Complete E-Learning Platform",
    body: [
      "End-to-end e-learning apps covering learner apps, tutor dashboards, admin panels, and parent portals — all connected in one platform.",
      "Our solutions include K-12 learning, higher-ed LMS, test-prep apps, corporate training, and skill-development marketplaces.",
    ],
  },
  cardsSection: {
    label: "What We Build",
    h2: "E-Learning Apps We Build",
    intro: "Scalable EdTech applications for different learning models.",
    cards: [
      { icon: "🎓", title: "LMS Platforms", desc: "Course management, enrollments, and progress tracking." },
      { icon: "📺", title: "Virtual Classrooms", desc: "Live video classes with chat, whiteboard, and polls." },
      { icon: "🎮", title: "Gamified Learning", desc: "Leaderboards, badges, and interactive quizzes." },
      { icon: "📝", title: "Test-Prep Apps", desc: "Mock tests, analytics, and adaptive learning paths." },
      { icon: "🏢", title: "Corporate Training", desc: "Employee learning, certifications, and compliance." },
      { icon: "🤖", title: "AI Tutoring", desc: "Personalized recommendations and smart doubt-solving." },
      { icon: "🏷️", title: "White-Label LMS", desc: "Customizable learning apps ready to launch." },
      { icon: "🔌", title: "API Integration", desc: "Zoom, Stripe, payment gateways, and SCORM." },
    ],
  },
  screens: {
    alt: "E-learning app screen",
    images: [
      "/images/products/elearning/appscreen1.png",
      "/images/products/elearning/appscreen2.png",
      "/images/products/elearning/appscreen3.png",
      "/images/products/elearning/appscreen4.png",
      "/images/products/elearning/appscreen5.png",
    ],
  },
  tabs: {
    label: "Features",
    h2: "Core Features of Our E-Learning App",
    intro: "Our e-learning app development covers the entire education ecosystem.",
    panels: [
      { id: "learner", title: "Learner App", items: ["Easy Sign-Up", "Course Catalog", "Live & Recorded Classes", "Quizzes & Assignments", "Progress Tracking", "Certificates", "Discussion Forums", "Push Notifications"] },
      { id: "tutor", title: "Tutor App", items: ["Class Scheduling", "Content Upload", "Live Streaming", "Grading & Feedback", "Earnings Dashboard"] },
      { id: "admin", title: "Admin Panel", items: ["Course Management", "User Management", "Reports & Analytics", "Payment Settlements", "Content Moderation"] },
      { id: "parent", title: "Parent Portal", items: ["Child Progress", "Attendance Reports", "Fee Payments", "Teacher Communication", "Schedule View"] },
    ],
  },
  ...d,
  industries: {
    h2: "Industries and Business Models We Support",
    items: [
      { icon: "🎓", name: "K-12 Learning" },
      { icon: "🏫", name: "Higher Education" },
      { icon: "📝", name: "Test Prep" },
      { icon: "🏢", name: "Corporate Training" },
      { icon: "💼", name: "Skill Development" },
      { icon: "🏷️", name: "White-Label LMS" },
    ],
  },
  faqs: [
    { q: "What is e-learning app development?", a: "E-learning app development is the process of building online learning platforms that offer courses, virtual classes, assessments, and certifications for learners." },
    { q: "How much does it cost to build an e-learning app?", a: "Costs depend on features, scale, and integrations. Basic LMS apps are affordable; enterprise e-learning platforms require higher investment." },
    { q: "How long does it take to build?", a: "An e-learning app typically takes 8 to 16 weeks depending on features and complexity." },
    { q: "Can you build apps like BYJU'S or Coursera?", a: "Yes, we build scalable e-learning platforms similar to BYJU'S and Coursera with custom features." },
    { q: "Do you support live and recorded classes?", a: "Yes, we integrate live streaming, VOD, and interactive classroom tools." },
    { q: "Do you provide post-launch support?", a: "Yes, we provide ongoing maintenance, performance tuning, and feature enhancements." },
  ],
  cta: {
    img: "/images/products/elearning/elearning.png",
    h2: "Build an E-Learning App Students Love",
    body: "Launch a modern EdTech platform that is scalable, engaging, and ready for growth.",
  },
};

export default function Page() { return <ProductPageTemplate data={data} />; }
