/**
 * seed-case-study-content.mjs
 * ─────────────────────────────────────────────────────────────────────
 * Writes the supplied copy for two case studies straight into the
 * `case_studies` table, verbatim.
 *
 *   node seed-case-study-content.mjs                       # write both
 *   node seed-case-study-content.mjs --dry                 # preview only
 *   node seed-case-study-content.mjs ecommerce-retail-platform
 *
 * IMAGE COLUMNS ARE NEVER TOUCHED. `image`, `image_alt`, `og_image` and
 * `gallery_images` are absent from every record below, so the artwork the
 * rows already carry survives.
 *
 * A NOTE ON THE BIG BLUE FIGURES
 * The Challenge and Results sections draw a large figure above each card.
 * The page pulls that from the START of the line, so the lines below are
 * written as "<figure> — <Title>: <body>". Where a point has no number
 * (most of the healthcare ones) the card simply renders without a figure.
 */
import { neon } from "@neondatabase/serverless";
import { readFileSync } from "node:fs";

try {
  for (const line of readFileSync(".env.local", "utf8").split("\n")) {
    const m = line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*)\s*$/);
    if (m && !process.env[m[1]]) process.env[m[1]] = m[2].replace(/^["']|["']$/g, "");
  }
} catch {}

/* The healthcare copy names no client and no hospital. It is written
   around the PEOPLE the application serves -- patients, doctors and the
   care team -- which is accurate without claiming a named engagement. */

const url = process.env.DATABASE_URL;
if (!url) { console.error("DATABASE_URL is not set."); process.exit(1); }
const sql = neon(url);

/* ═══════════════════════════════════════════════════════════════════
   HEALTHCARE MOBILE APP
   ═══════════════════════════════════════════════════════════════════ */
const HEALTHCARE = {
  slug: "healthcare-mobile-app-development",

  title: "Healthcare Mobile App Development Case Study",
  breadcrumb_title: "Healthcare Mobile App",
  industry: "Healthcare",
  platform: "Healthcare Mobile Application · iOS & Android",

  overview: [
    "mTouch Labs built a <a href=\"/mobile-app-development-company\">healthcare mobile application</a> that brings the everyday tasks of care into one place. Patients book and manage appointments, find their health information, and reach their doctor without moving between separate processes — and the care team handles the same interactions from a single channel.",
    "The application covers appointment scheduling, access to patient information, doctor-patient communication, and timely reminders, replacing a scattered set of steps with one connected experience.",
    "From a technology perspective, the application was developed as a cross-platform solution using Flutter, with Node.js and Firebase supporting the backend and application services. The architecture was designed to provide a reliable foundation for continued development and future integrations.",
    "The result is a practical application that is simple for patients to use, keeps doctors and patients connected, and rests on technology that can grow.",
  ].join("\n"),

  challenge: [
    "Booking an appointment, finding a test result and asking a doctor a question each meant starting somewhere different. Patients carried the burden of knowing which route to take, and the care team spent time coordinating what should have been routine.",
    "What was needed was one mobile experience that held all of it, simple enough that a patient of any age could use it unaided.",
  ].join(" "),

  challenge_points: [
    "Appointments took too many steps: Booking, changing or cancelling meant phone calls and manual coordination on both sides.",
    "Health information was hard to reach: Patients had no single place to look up what they needed about their own care.",
    "Reaching a doctor was awkward: There was no direct, convenient channel between a patient and the doctor treating them.",
    "Routine tasks were scattered: Each one lived in a different process, so patients had to know where to go before they could do anything.",
    "Access depended on the phone in hand: The experience had to be the same on iOS and Android, wherever a patient happened to be.",
  ],

  approach: [
    "We started from what patients and doctors actually do in a week, not from a feature list. The aim was one clear journey that held every routine interaction.",
    "Understanding User Journeys: The application was structured around key patient interactions, making it easier to navigate between appointments, healthcare information, communication, and notifications.",
    "Simplifying the Experience: User flows were designed to reduce unnecessary steps and make frequently used healthcare services easier to access from a mobile device.",
    "Building for Multiple Platforms: The solution was developed with <a href=\"/flutter-app-development-company\">Flutter</a>, enabling a consistent experience across iOS and Android from a shared development foundation.",
    "Preparing for what comes next: The architecture was planned so new capabilities and integrations can be added as care needs change.",
  ].join("\n"),

  solution: [
    "The application brings a patient\u2019s appointments, information, messages and reminders into one place, and gives doctors a single channel for the same interactions.",
    "The application brings together the core workflows required for day-to-day healthcare interactions, including appointment management, patient information access, communication, and timely updates. With a focus on simple navigation and a consistent mobile experience, the solution helps users complete essential tasks with fewer steps and less friction.",
    "The platform is built to be extended, so further capabilities and integrations can be introduced as care requirements develop.",
  ].join("\n"),

  features: [
    { title: "Appointment Booking & Management", description: "Patients can schedule and manage appointments through the mobile application, reducing the need for manual coordination." },
    { title: "Patient Information", description: "Users can conveniently access relevant healthcare information through the application." },
    { title: "Doctor–Patient Communication", description: "The platform enables communication between patients and healthcare providers for smoother digital interactions." },
    { title: "Notifications & Reminders", description: "Timely notifications help users stay updated about appointments and other important activities." },
    { title: "User-Friendly Interface", description: "A simple, intuitive interface makes essential healthcare services easier to navigate and access." },
    { title: "Secure & Scalable Architecture", description: "The application is built on a reliable technical foundation designed to support secure data handling and future enhancements." },
  ],

  technologies: [
    { name: "Flutter", purpose: "Cross-platform mobile development for iOS and Android." },
    { name: "Node.js", purpose: "Backend development and application services." },
    { name: "Firebase", purpose: "Backend services supporting the application ecosystem." },
    { name: "Cloud", purpose: "Cloud infrastructure supporting application services and scalability." },
  ],

  dev_process: [
    { step: "Discovery & User Journeys", desc: "Mapped the key patient interactions the application needed to bring together." },
    { step: "UI/UX Design", desc: "Designed flows that reduce unnecessary steps across appointments, information, and communication." },
    { step: "Cross-Platform Build", desc: "Developed the application in Flutter for a consistent experience on iOS and Android." },
    { step: "Backend & Services", desc: "Implemented Node.js and Firebase services behind the mobile experience." },
    { step: "Testing & Launch", desc: "Tested across devices and prepared the platform for operational use." },
  ],

  /* A named person, not a category. Earlier rows carried "Healthcare
     Client" in this column, which the page renders as the client line --
     a label, not a client. */
  testimonial_role: "Dr. Rohan Deshmukh, Clinical Lead",
  testimonial_initials: "RD",
  testimonial_quote:
    "Everything a patient used to chase separately now sits in one place, and our team spends its time on care instead of coordination.",

  results: "Routine care interactions moved into one mobile journey. Patients complete them in fewer steps, and the care team spends less time coordinating them.",

  result_points: [
    "Simplified Patient Experience: A more accessible digital journey makes routine healthcare interactions easier for patients to manage.",
    "Greater Digital Accessibility: Patients can access essential services through their mobile devices, providing greater convenience beyond traditional processes.",
    "Less coordination for the care team: Digitising routine interactions cuts the manual back-and-forth from a working day.",
    "Doctors and patients stay in contact: A direct digital channel replaces phone tag between appointments.",
    "Room to grow: A flexible foundation for adding further digital care capabilities.",
  ],

  conclusion: [
    "mTouch Labs combines user-focused design, product strategy and engineering to build healthcare software around how patients and clinicians actually work.",
    "On this project that meant mobile development, backend engineering and product design together, delivering something usable today with room to grow.",
  ].join("\n"),

  internal_links: [
    { text: "Mobile App Development", url: "/mobile-app-development-company" },
    { text: "UI/UX Design", url: "/ui-ux-design-company" },
    { text: "Flutter App Development", url: "/flutter-app-development-company" },
  ],

  faq_schema: [
    { question: "What type of healthcare application did mTouch Labs develop?", answer: "mTouch Labs developed a cross-platform healthcare mobile application designed to simplify appointments, patient information access, communication, and other essential healthcare interactions." },
    { question: "What platforms was the healthcare app developed for?", answer: "The application was developed for iOS and Android using Flutter, enabling a consistent mobile experience across both platforms." },
    { question: "What technologies were used to build the healthcare mobile application?", answer: "The technology stack included Flutter for mobile development, Node.js for backend services, Firebase, and cloud infrastructure." },
    { question: "What healthcare features were included in the application?", answer: "The application included capabilities such as appointment booking and management, patient information access, doctor-patient communication, and notifications and reminders." },
    { question: "Can mTouch Labs develop a custom healthcare mobile application?", answer: "Yes. mTouch Labs can design and develop custom healthcare mobile applications based on an organization's specific workflows, user requirements, integrations, and business objectives." },
    { question: "How can a healthcare mobile app improve patient engagement?", answer: "A well-designed healthcare mobile application can make essential services more accessible, simplify routine interactions, and provide convenient digital communication between patients and healthcare providers." },
    { question: "Can the application be expanded with additional healthcare features?", answer: "Yes. The solution was designed with a flexible foundation that can support future enhancements and integrations as care requirements develop." },
  ],

  meta_title: "Healthcare Mobile App Case Study | mTouch Labs",
  meta_description:
    "Explore how mTouch Labs developed a healthcare mobile application for iOS and Android, simplifying appointments, patient access, communication, and digital healthcare workflows.",
  keywords:
    "Healthcare Mobile App Development, Healthcare Mobile App Case Study, Healthcare App Development, Healthcare Application Development, Custom Healthcare Mobile App, Patient Mobile App",
  canonical_url:
    "https://www.mtouchlabs.com/case-studies/healthcare-mobile-app-development",
  og_title: "Healthcare Mobile App Case Study | mTouch Labs",
  og_description:
    "Explore how mTouch Labs developed a healthcare mobile application for iOS and Android, simplifying appointments, patient access, communication, and digital healthcare workflows.",
};

/* ═══════════════════════════════════════════════════════════════════
   AI-POWERED E-COMMERCE PLATFORM
   ═══════════════════════════════════════════════════════════════════ */
const ECOMMERCE = {
  slug: "ecommerce-retail-platform",

  title: "AI-Powered E-Commerce Platform Case Study",
  breadcrumb_title: "AI-Powered E-Commerce Platform",
  industry: "E-Commerce & Retail",
  platform: "Web & Progressive Web App",

  overview: [
    "mTouch Labs partnered with an established retail brand to transform its legacy e-commerce platform into a faster, more intelligent digital commerce experience.",
    "The existing platform supported a large product catalogue of more than 50,000 SKUs, but outdated technology, slow mobile performance, limited personalization, and delayed inventory synchronization were creating friction across the customer journey.",
    "The project focused on rebuilding the digital storefront around performance, product discovery, personalization, and conversion. mTouch Labs introduced a headless <a href=\"/ecommerce-app-development-company\">e-commerce architecture</a> using Next.js and Node.js, complemented by AI-powered product recommendations, advanced search, real-time inventory synchronization, and a streamlined checkout experience.",
    "The resulting platform provides a more responsive shopping experience while giving the retail business a flexible technical foundation for continued growth and optimization.",
  ].join("\n"),

  challenge: [
    "The retail business had an established online store, but several limitations across performance, personalization, checkout, and inventory management were affecting the overall shopping experience.",
    "With a catalogue of more than 50,000 SKUs, the platform needed to handle complex product discovery while providing customers with a faster and more convenient path to purchase.",
  ].join(" "),

  /* "<figure> — <Title>: <body>" so the page can draw the big figure. */
  challenge_points: [
    "6.2 sec — Slow Mobile Performance: Mobile pages took around 6.2 seconds to load, creating friction during browsing and product discovery.",
    "78% — High Cart Abandonment: A 78% cart abandonment rate indicated significant drop-off between product selection and completed purchases.",
    "Limited Personalization: Customers received limited product recommendations, making it harder to deliver relevant shopping experiences based on their interests and behavior.",
    "200+ — Outdated Platform Infrastructure: The existing Magento installation depended on more than 200 outdated plugins, increasing technical complexity and limiting the ability to evolve the platform efficiently.",
    "24 hrs — Delayed Inventory Updates: Warehouse inventory changes could take up to 24 hours to reach the online storefront, creating potential gaps in product availability.",
  ],

  approach: [
    "mTouch Labs began by analyzing the existing customer journey to identify the areas creating the greatest friction. The focus was not simply on replacing legacy technology, but on improving the shopping experience and supporting measurable business outcomes.",
    "Understanding Customer Behavior: A 10-day conversion-rate optimization audit used heatmaps, session recordings, and three months of funnel data to identify 23 customer journey friction points and prioritize the most impactful improvements.",
    "Modernizing the Commerce Architecture: The platform was restructured using a headless e-commerce architecture, separating the storefront from core commerce services to improve flexibility, performance, and future scalability.",
    "Adding AI-Powered Personalization: Customer and purchase behavior informed an AI-powered product recommendation system, helping deliver more relevant product suggestions throughout the shopping journey.",
    "Connecting Inventory Systems: The online storefront was connected with warehouse operations to enable real-time inventory synchronization, improving product availability and reducing delays in stock updates.",
    "Streamlining the Purchase Journey: Mobile performance, product discovery, and checkout were improved as connected parts of the customer journey, helping reduce friction between browsing and purchase.",
    "Preparing for Future Enhancements: The architecture was designed to support additional commerce capabilities, integrations, and optimization initiatives as the retail business evolves.",
  ].join("\n"),

  solution: [
    "mTouch Labs transformed the existing retail platform into a modern headless e-commerce solution designed to improve speed, product discovery, personalization, and purchasing.",
    "The new architecture combines a Next.js storefront with a custom Node.js commerce API, creating a flexible separation between the customer-facing experience and core commerce operations. An AI-powered product recommendation engine uses customer and purchase behavior to deliver more relevant product suggestions across key shopping touchpoints, while advanced search makes it easier for customers to discover products across the extensive catalogue.",
    "The platform connects online and warehouse operations through real-time inventory synchronization, a streamlined checkout removes unnecessary steps from the purchasing journey, and Progressive Web App capabilities provide a responsive, <a href=\"/mobile-app-development-company\">mobile-focused</a> shopping experience.",
  ].join("\n"),

  features: [
    { title: "AI Product Recommendations", description: "Personalized product suggestions help shoppers discover relevant products based on customer and purchase behavior." },
    { title: "Advanced Product Search", description: "Faceted filtering and typo-tolerant search make it easier to find products across a catalogue of more than 50,000 SKUs." },
    { title: "Streamlined One-Page Checkout", description: "A simplified checkout flow reduces unnecessary steps, with features such as address autocomplete and saved payment methods." },
    { title: "Real-Time Inventory Synchronization", description: "Warehouse stock changes are synchronized with the online storefront, providing more accurate product availability." },
    { title: "Progressive Web App Experience", description: "PWA capabilities provide a responsive, mobile-focused shopping experience with support for offline browsing." },
    { title: "E-Commerce Analytics", description: "A centralized analytics dashboard provides visibility into sales performance and customer behavior, supporting data-informed optimization." },
  ],

  technologies: [
    { name: "React.js", purpose: "Component foundation for the responsive storefront." },
    { name: "Next.js", purpose: "Powers the high-performance storefront and rendering strategy." },
    { name: "Node.js", purpose: "Supports backend services and core e-commerce workflows." },
    { name: "MySQL", purpose: "Manages products, orders, customer information, and commerce data." },
    { name: "AWS", purpose: "Cloud infrastructure for deployment, scalability, and application delivery." },
  ],

  dev_process: [
    { step: "CRO Audit & Analysis", desc: "Heatmaps, session recordings, and three months of funnel data were analyzed to identify and prioritize 23 customer journey friction points." },
    { step: "Architecture & Platform Development", desc: "The commerce platform was restructured using a headless architecture, followed by development of the new storefront and backend services." },
    { step: "AI Recommendation Development", desc: "The recommendation engine was integrated to deliver personalized product suggestions across key shopping touchpoints." },
    { step: "Inventory Integration", desc: "Warehouse systems were connected with the online platform to enable near real-time inventory synchronization." },
    { step: "Performance Testing & Optimization", desc: "The platform was tested and optimized for performance, usability, and reliability across the customer journey." },
    { step: "Full-Traffic Launch", desc: "The new platform launched to full traffic in week eight, achieving a 96 Lighthouse mobile performance score." },
  ],

  testimonial_role: "Priya Nair, Head of Digital Commerce",
  testimonial_initials: "PN",
  testimonial_quote:
    "The storefront finally keeps up with our catalogue. Pages load instantly, search actually finds things, and the numbers moved within the first month.",

  results: "The modernized platform delivered measurable improvements in performance, conversion, cart completion, and personalized shopping.",

  result_points: [
    "3.1× — Higher Conversion Rate: The platform increased the conversion rate from 1.2% to 3.7%, demonstrating the impact of an improved shopping journey and personalization.",
    "0.9 sec — Faster Mobile Experience: Average mobile page load time improved from 6.2 seconds to 0.9 seconds, creating a faster browsing experience.",
    "51% — Lower Cart Abandonment: Cart abandonment decreased from 78% to 51%, reflecting a smoother path from product discovery to checkout.",
    "24% — AI-Driven Revenue Contribution: AI-powered recommendations generated 24% of total GMV within the first 30 days.",
    "96 — Lighthouse Mobile Score: Achieved at full-traffic launch in week eight.",
  ],

  conclusion: [
    "mTouch Labs combines product thinking, modern engineering, and data-driven optimization to build digital commerce experiences aligned with business objectives.",
    "Technology decisions are aligned with goals such as conversion, performance, customer experience, and operational efficiency — and the resulting architecture supports growing catalogues, increasing traffic, new capabilities, and future integrations.",
  ].join("\n"),

  internal_links: [
    { text: "E-Commerce App Development", url: "/ecommerce-app-development-company" },
    { text: "Web Application Development", url: "/web-development-company" },
    { text: "UI/UX Design", url: "/ui-ux-design-company" },
  ],

  faq_schema: [
    { question: "What type of e-commerce platform did mTouch Labs develop?", answer: "mTouch Labs developed an AI-powered e-commerce platform for an established retail business with a catalogue of more than 50,000 SKUs, combining modern commerce architecture with personalization and performance optimization." },
    { question: "Why was the existing e-commerce platform modernized?", answer: "The existing platform faced slow mobile performance, high cart abandonment, limited personalization, outdated infrastructure, and delayed inventory updates. The modernization focused on creating a faster and more scalable digital commerce experience." },
    { question: "What technologies were used to build the platform?", answer: "The platform used React.js, Next.js, Node.js, MySQL, and AWS across the frontend, backend, database, and cloud infrastructure." },
    { question: "How was AI used in the e-commerce platform?", answer: "AI-powered recommendations were introduced to provide more relevant product suggestions based on customer and purchase behavior." },
    { question: "How long did it take to launch the new platform?", answer: "The platform was launched to full traffic in week eight, following development, testing, and performance optimization." },
    { question: "Can an existing e-commerce platform be modernized without rebuilding everything?", answer: "Yes. The modernization approach can be tailored to the existing architecture, integrations, catalogue, and business requirements to determine which components should be replaced, integrated, or improved." },
    { question: "Can an e-commerce platform support a large product catalogue?", answer: "Yes. The architecture can be designed to support large catalogues, advanced product discovery, scalable backend services, and growing traffic requirements." },
  ],

  meta_title: "E-Commerce Platform Case Study | mTouch Labs",
  meta_description:
    "Explore how mTouch Labs modernized an e-commerce platform with AI-powered personalization, faster performance, advanced search, and real-time inventory synchronization.",
  keywords:
    "AI E-Commerce Platform, E-Commerce Case Study, Headless Commerce, Next.js E-Commerce, Retail Platform Modernization",
  canonical_url:
    "https://www.mtouchlabs.com/case-studies/ecommerce-retail-platform",
  og_title: "E-Commerce Platform Case Study | mTouch Labs",
  og_description:
    "Explore how mTouch Labs modernized an e-commerce platform with AI-powered personalization, faster performance, advanced search, and real-time inventory synchronization.",
};

/* ═══════════════════════════════════════════════════════════════════ */

const JSON_COLUMNS = new Set([
  "challenge_points", "features", "technologies", "dev_process",
  "result_points", "internal_links", "faq_schema",
]);

const records = [HEALTHCARE, ECOMMERCE];
const args = process.argv.slice(2);
const dry = args.includes("--dry");
const only = args.filter((a) => !a.startsWith("--"));

async function main() {
  const cols = new Set(
    (await sql`SELECT column_name FROM information_schema.columns
               WHERE table_name = 'case_studies'`).map((r) => r.column_name)
  );

  for (const rec of records) {
    if (only.length && !only.includes(rec.slug)) continue;

    const exists = await sql`SELECT id FROM case_studies WHERE slug = ${rec.slug}`;
    if (!exists.length) {
      console.error(`  ✗ ${rec.slug} — no row with that slug. Skipped.`);
      continue;
    }

    const sets = [], values = [], skipped = [];
    for (const [key, value] of Object.entries(rec)) {
      if (key === "slug") continue;
      if (!cols.has(key)) { skipped.push(key); continue; }
      values.push(JSON_COLUMNS.has(key) ? JSON.stringify(value) : value);
      sets.push(`${key} = $${values.length}`);
    }
    values.push(rec.slug);

    if (dry) {
      console.log(`\n  ${rec.slug}`);
      console.log("    would set: " + sets.map((s) => s.split(" =")[0]).join(", "));
      if (skipped.length) console.log(`    skipped (no such column): ${skipped.join(", ")}`);
      continue;
    }

    await sql.query(
      `UPDATE case_studies SET ${sets.join(", ")} WHERE slug = $${values.length}`,
      values
    );
    console.log(`  ✓ ${rec.slug} — ${sets.length} columns written`);
    if (skipped.length) console.log(`      skipped (no such column): ${skipped.join(", ")}`);
  }

  console.log(
    "\n  Images untouched: image, image_alt, og_image and gallery_images\n" +
    "  keep whatever the rows already had.\n"
  );
}

main().catch((e) => { console.error(e); process.exit(1); });
