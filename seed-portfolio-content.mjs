/**
 * seed-portfolio-content.mjs
 * ─────────────────────────────────────────────────────────────────────
 * Writes the supplied copy for two portfolios straight into the
 * `portfolios` table, verbatim.
 *
 *   node seed-portfolio-content.mjs            # write both
 *   node seed-portfolio-content.mjs --dry      # show what would change
 *   node seed-portfolio-content.mjs uptik      # just one slug
 *
 * IMAGE COLUMNS ARE NEVER TOUCHED. `image`, `og_image`, `app_screens`,
 * `web_screens` and `gallery_images` are deliberately absent from every
 * record below, so whatever artwork the rows already carry survives.
 *
 * REQUIRES /api/migrate-portfolio-v5 to have been run: nine of the
 * columns written here (industry_background, objectives,
 * strategy_approach, solution_architecture, ui_ux_highlights,
 * development_process, security_performance, future_scope, conclusion)
 * do not exist until that migration adds them. The script checks and
 * tells you rather than failing halfway.
 */
import { neon } from "@neondatabase/serverless";
import { readFileSync } from "node:fs";

/* .env.local, parsed by hand -- this runs outside Next, so nothing has
   loaded it for us. */
try {
  for (const line of readFileSync(".env.local", "utf8").split("\n")) {
    const m = line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*)\s*$/);
    if (m && !process.env[m[1]]) {
      process.env[m[1]] = m[2].replace(/^["']|["']$/g, "");
    }
  }
} catch { /* no .env.local -- fall back to the real environment */ }

const url = process.env.DATABASE_URL;
if (!url) {
  console.error("DATABASE_URL is not set (looked in the environment and .env.local).");
  process.exit(1);
}
const sql = neon(url);

/* ═══════════════════════════════════════════════════════════════════
   GOLKONDA HANDICRAFTS
   ═══════════════════════════════════════════════════════════════════ */
const GOLKONDA = {
  slug: "telangana-ecommerce-mobile-app-development",

  title: "Golkonda Handicrafts – Telangana E-Commerce Website & Mobile App",
  subtitle:
    "A digital commerce platform developed for Golkonda Handicrafts to bring Telangana’s traditional handicrafts and handloom products to customers through a dedicated eCommerce website and mobile application.",
  description: "eCommerce Website & Mobile Application",
  category: "Ecommerce",
  tags: "eCommerce, Handicrafts & Handlooms, Telangana, Web + Mobile",
  role: "Design, Development & Backend",
  live_url: "https://golkondashop.telangana.gov.in/",

  tech_stack: ["React", "Flutter", "Node.js", "MySQL"],

  about: [
    "Golkonda Handicrafts is a digital commerce initiative focused on making Telangana’s handicrafts and handloom products accessible through online channels. The project brings the organization’s product catalogue into a dedicated digital shopping environment, allowing customers to explore products and place orders through web and mobile experiences.",
    "The platform is built around the Golkonda Shop digital presence, providing an online storefront for showcasing traditional products to a broader customer base. Its web and mobile experiences provide customers with convenient access to the catalogue while giving the business a dedicated digital channel for online commerce.",
    "mTouch Labs contributed to the development of the <a href=\"/ecommerce-app-development-company\">eCommerce website</a> and <a href=\"/mobile-app-development-company\">mobile application</a>, together with the supporting backend capabilities required to manage the platform. The project combines product presentation, digital shopping, and platform management into a connected commerce solution for Golkonda Handicrafts.",
  ].join("\n"),

  industry_background: [
    "Telangana has a strong tradition of handicrafts and handlooms, with artisans producing products that reflect the region’s cultural identity and craftsmanship. Bringing these products into a digital commerce environment creates an opportunity to make traditional collections easier to discover and access beyond physical retail channels.",
    "Golkonda Handicrafts required a digital presence that could represent its product catalogue online while supporting a modern shopping experience across customer devices. An eCommerce website and mobile application provide dedicated channels through which customers can explore the available collection and interact with the brand digitally.",
    "The project therefore sits at the intersection of traditional handicrafts and modern eCommerce, using digital technology to create a more accessible online channel for Telangana’s craft products.",
  ].join("\n"),

  requirements: [
    "Creating a digital shopping presence: Establishing a dedicated online channel where customers could discover Golkonda Handicrafts products beyond physical retail environments.",
    "Presenting diverse craft products online: Organizing different types of handicrafts and handloom products into a structured digital catalogue that customers could browse easily.",
    "Supporting web and mobile access: Providing a consistent shopping experience across the eCommerce website and mobile application.",
    "Making product discovery convenient: Structuring the digital storefront so customers could navigate the catalogue and find products without depending on an in-person shopping experience.",
    "Connecting the customer experience with platform management: Supporting the operational requirements behind an online storefront, including the management of products and digital commerce activities.",
  ].join("\n"),

  objectives: [
    "Expand digital reach: Creating an online channel for Golkonda Handicrafts beyond conventional physical shopping.",
    "Build a unified commerce experience: One consistent journey across the eCommerce website and mobile application.",
    "Improve product accessibility: Presenting the handicrafts and handloom collection in an organized online environment.",
    "Simplify online shopping: Providing customers with a convenient way to browse products and engage with the digital storefront.",
    "Support digital operations: The backend capabilities required to manage the online commerce platform.",
    "Create a scalable digital foundation: A base that can support the continued growth of Golkonda Handicrafts’ online presence.",
  ].join("\n"),

  strategy_approach: [
    "mTouch Labs developed a connected digital commerce solution for Golkonda Handicrafts, bringing the customer shopping experience and supporting platform capabilities together across web and mobile.",
    "Rather than treating the website and mobile application as separate products, the project brings them together as part of a broader digital commerce ecosystem. This creates a consistent foundation for presenting Golkonda Handicrafts online while supporting customers across different digital touchpoints.",
  ].join("\n"),

  features: [
    { title: "Product Catalogue", description: "Customers can explore the available collection of Golkonda Handicrafts products through an organized digital catalogue, making it easier to discover products online." },
    { title: "Product Discovery", description: "The platform provides customers with a structured browsing experience for exploring different products and finding items that match their interests." },
    { title: "Product Information", description: "Individual product pages provide customers with relevant information about the products, helping them understand the items before making a purchase decision." },
    { title: "Online Shopping", description: "The eCommerce experience enables customers to move from product discovery toward online purchasing through the digital storefront." },
    { title: "Mobile Shopping Experience", description: "The mobile application extends the shopping experience to mobile devices, giving customers another convenient way to access the Golkonda Handicrafts collection." },
    { title: "Digital Product Management", description: "The supporting platform provides capabilities for maintaining the digital product catalogue and managing the information presented through the customer-facing commerce experience." },
    { title: "Web and Mobile Accessibility", description: "By providing both web and mobile experiences, the platform gives customers multiple digital touchpoints for accessing Golkonda Handicrafts online." },
  ],

  solution_architecture: [
    "The Golkonda Handicrafts platform uses a connected architecture that supports both web and mobile commerce through a shared backend. The React web application and Flutter mobile application communicate with the Node.js backend, which manages application requests and connects the customer-facing experiences with the platform data stored in MySQL.",
    "This shared backend approach provides a common data foundation for the web and mobile applications while keeping the presentation layers independent.",
  ].join("\n"),

  ui_ux_highlights: [
    "Web Interface: The website uses structured page layouts and visual hierarchy to organize content and product information. The interface separates key areas of the storefront clearly, helping visitors understand where they are within the website and navigate between different sections.",
    "Mobile Interface: The Flutter application uses layouts adapted for mobile screens and touch interactions. Content is arranged to make effective use of the available screen space while maintaining visual consistency with the web experience.",
    "Consistent Digital Identity: The website and mobile application follow a common design direction, creating a recognizable digital identity for Golkonda Handicrafts across platforms. Typography, visual elements, spacing, and interface patterns are coordinated to maintain consistency throughout the customer-facing experiences.",
  ].join("\n"),

  development_process: [
    "React web application: Developed for the browser-based experience of the Golkonda Shop storefront.",
    "Flutter mobile application: Extended the platform to mobile users through a unified application codebase.",
    "Node.js + MySQL: Provided the application services connecting both client applications with the database.",
    "Component-based approach: Allowed the web and mobile interfaces to be developed independently while relying on a common backend foundation.",
    "Cross-platform consistency: Throughout implementation the focus remained on maintaining consistency between platforms, integrating the application layers correctly, and preparing the digital commerce platform for operational use.",
  ].join("\n"),

  security_performance: [
    "Layered platform architecture: The application layers are connected through the Node.js backend, with MySQL providing the underlying data storage.",
    "Clear separation of concerns: Separating the customer-facing applications from the backend and database establishes clear boundaries between presentation, application logic, and data.",
    "Cross-environment testing: Development and testing focused on ensuring the website and mobile application function correctly across their respective environments.",
    "Reliable inter-component communication: Attention was given to application stability and the reliability of communication between the different platform components.",
    "Maintainable foundation: The resulting architecture can be maintained and extended as the Golkonda Handicrafts digital platform evolves.",
  ].join("\n"),

  business_impact: [
    "A dedicated online storefront: For presenting the Golkonda Handicrafts collection.",
    "Web and mobile access: For customers using different digital devices.",
    "An organized digital catalogue: For presenting handicraft and handloom products online.",
    "A connected platform foundation: Linking the web application, mobile application, backend services, and database.",
    "A digital foundation for future growth: Allowing the online presence to evolve with changing business requirements.",
  ].join("\n"),

  future_scope: [
    "Broader catalogue coverage: Bringing more of the handicraft and handloom collection into the digital storefront.",
    "Expanded digital reach: Growing the online channel beyond its current customer base.",
    "Evolving commerce capabilities: Extending the platform as Golkonda Handicrafts’ online requirements develop.",
  ].join("\n"),

  conclusion:
    "The project brings Golkonda Handicrafts into a dedicated digital commerce environment, creating an additional channel through which customers can discover and access its traditional product collection.",

  faq_schema: [
    { question: "What is Golkonda Handicrafts?", answer: "Golkonda Handicrafts is a Telangana-focused platform for showcasing and selling traditional handicraft and handloom products through digital commerce." },
    { question: "What is Golkonda Shop?", answer: "Golkonda Shop is the online storefront for Golkonda Handicrafts, providing customers with access to its product collection through the web." },
    { question: "What was developed for Golkonda Handicrafts?", answer: "The project includes an eCommerce website and mobile application, supported by backend services and a centralized database." },
    { question: "Which technologies were used for the Golkonda Handicrafts platform?", answer: "The platform uses React for the web application, Flutter for the mobile application, Node.js for backend development, and MySQL for data management." },
    { question: "Who developed the Golkonda Handicrafts digital platform?", answer: "mTouch Labs contributed to the development of the Golkonda Handicrafts web and mobile eCommerce platform." },
    { question: "What type of products are available through Golkonda Shop?", answer: "Golkonda Shop focuses on Telangana handicrafts and handloom products, providing a digital channel for customers to discover and purchase these products." },
    { question: "Where can I access Golkonda Shop?", answer: "The official Golkonda Shop platform is available at https://golkondashop.telangana.gov.in/." },
  ],

  meta_title: "Golkonda Handicrafts | Telangana E-Commerce | mTouch Labs",
  meta_description:
    "Explore the Golkonda Handicrafts eCommerce project developed by mTouch Labs for Telangana handicrafts and handloom products.",
  canonical_url:
    "https://www.mtouchlabs.com/portfolio/telangana-ecommerce-mobile-app-development",
  og_title: "Golkonda Handicrafts | Telangana E-Commerce | mTouch Labs",
  og_description:
    "Explore the Golkonda Handicrafts eCommerce project developed by mTouch Labs for Telangana handicrafts and handloom products.",
};

/* ═══════════════════════════════════════════════════════════════════
   UPTIK
   ═══════════════════════════════════════════════════════════════════ */
const UPTIK = {
  slug: "uptik",

  title: "UpTik – FinTech Investment Platform for Invoice-Based Investing",
  subtitle:
    "UpTik is a fintech investment platform that enables users to invest in invoice-based financing opportunities. It connects investors with real business invoices, allowing them to fund short-term business working capital needs through a structured digital investment experience.",
  description: "Invoice-Based Investment Platform",
  category: "FinTech",
  tags: "FinTech, Investment Platform, Invoice-Based Investing, Mobile App",
  role: "FinTech Product, Mobile, Web & Backend",
  live_url: "https://uptik.co.in/",
  play_store_url:
    "https://play.google.com/store/apps/details?id=com.uptik.user&hl=en_IN",
  app_store_url:
    "https://apps.apple.com/in/app/uptik-growth-simplified/id6748020482",

  tech_stack: ["Flutter", "Node.js", "React", "MySQL"],

  about: [
    "UpTik is a <a href=\"/fintech-app-development-company\">fintech investment platform</a> built around invoice-based financing. It enables users to explore real business invoices and invest in selected opportunities, while helping businesses access short-term working capital through invoice funding.",
    "The platform brings the invoice investment process into a digital experience, allowing users to review available opportunities, understand relevant investment information, and manage their investment activity through a centralized platform.",
    "With a focus on transparency, structured investments, and predictable returns, UpTik provides an alternative investment experience connecting investors with real business transactions.",
  ].join("\n"),

  industry_background: [
    "Invoice-based financing lets businesses unlock working capital tied up in unpaid invoices, and lets investors participate in short-term, asset-backed opportunities. Bringing that model into a dedicated digital environment makes it accessible to individual investors rather than institutions alone.",
    "UpTik required a platform that could present real business invoices clearly, carry the compliance steps a financial product demands, and give investors an ongoing view of their position — all within one mobile experience.",
  ].join("\n"),

  requirements: [
    "Making alternative investing accessible: Opening invoice-based opportunities to individual investors through a structured digital product.",
    "Presenting financial information clearly: Giving investors the business details, payment timelines, and risk information needed to evaluate an opportunity.",
    "Meeting compliance obligations: Carrying KYC verification and secure authentication inside the onboarding flow.",
    "Keeping activity in one place: Bringing investments, transactions, wallet activity, and returns together instead of scattering them.",
    "Supporting ongoing visibility: Letting investors track active and completed investments and overall portfolio performance over time.",
  ].join("\n"),

  objectives: [
    "Enable access to alternative investments: Connecting users with real business invoice opportunities.",
    "Simplify invoice investing: A digital platform for discovering and funding selected opportunities.",
    "Improve transparency: Presenting relevant investment and invoice information in a clear, structured format.",
    "Support investment tracking: Letting users monitor their investments, returns, and portfolio performance.",
    "Create a secure onboarding experience: Through KYC verification and user authentication.",
    "Bring investment activities together: Investment management, transactions, wallet activity, notifications, and account management within one platform.",
  ].join("\n"),

  strategy_approach: [
    "UpTik brings invoice-based investing, financial visibility, and investment management together within a single digital platform. The solution was structured to give users a clear and organized experience across different stages of their investment activity.",
    "Investment-related activities are connected through portfolio tracking, transactions, wallet management, and return tracking, while KYC verification, secure authentication, structured investment timelines, and transparent deal visibility are built into the platform’s financial workflow.",
  ].join("\n"),

  features: [
    { title: "KYC & Secure Onboarding", description: "Users complete KYC verification and secure authentication as part of the onboarding process before accessing platform features." },
    { title: "Invoice Investment Opportunities", description: "Users can browse available invoice-based investment opportunities and review investment amounts, durations, and expected returns before investing." },
    { title: "Investment Dashboard", description: "A centralized dashboard presents the total invested amount, portfolio value, and investment growth trends in one view." },
    { title: "Portfolio Tracking", description: "Users can monitor active and completed investments, along with returns and overall portfolio performance." },
    { title: "Invoice Details & Transparency", description: "Investment opportunities provide relevant information about the underlying business, payment timelines, and applicable risk information." },
    { title: "Transactions & Wallet Management", description: "Users can manage wallet funds, investments, transaction history, and credited returns within the platform." },
    { title: "Notifications & Alerts", description: "The platform provides updates for new investment opportunities, investment maturity, and credited returns." },
    { title: "Profile & Account Settings", description: "Users can manage their personal information, KYC status, and account preferences through their profile." },
    { title: "Risk & Compliance Handling", description: "The platform incorporates structured investment timelines, transparent deal visibility, and compliance considerations within the investment workflow." },
  ],

  solution_architecture: [
    "The UpTik platform was developed using a combination of technologies to support its mobile application, web interface, backend services, and data management. The Flutter mobile application and React web interface communicate with the Node.js backend, which supports server-side functionality and application business logic.",
    "MySQL is used for database management, supporting the storage and organization of the application data behind investment opportunities, portfolios, transactions, and account activity.",
  ].join("\n"),

  ui_ux_highlights: [
    "Clear Financial Interface: The UI organizes investment values, portfolio information, invoice opportunities, and transaction activity into clearly defined screens.",
    "Information-Focused Screens: Investment opportunity and invoice screens present important details such as investment amount, duration, expected returns, business information, and payment timelines.",
    "Consistent Visual Language: The application uses Montserrat typography and a defined visual system built around Indigo (#553DDF), Olive Green (#749220), Ocean Blue (#165479), and neutral tones.",
    "Simplified Navigation: Investment opportunities, portfolio tracking, wallet activity, transactions, notifications, and account settings are organized within the mobile experience.",
    "Designed for Financial Clarity: The design prioritizes readability, structured information, and straightforward interactions.",
  ].join("\n"),

  development_process: [
    "FinTech Product Development: Developing the digital foundation for an invoice-based investment platform.",
    "Mobile Application Development: Building the UpTik mobile application using Flutter.",
    "Backend Development: Implementing backend functionality using Node.js.",
    "Web Interface Development: Developing the web frontend using React.",
    "Data Management: Using MySQL to support the platform’s data requirements.",
    "Investment Workflow Implementation: Translating requirements around onboarding, investment opportunities, portfolio management, transactions, and related activities into the digital platform.",
  ].join("\n"),

  security_performance: [
    "KYC-Based Onboarding: Users are required to complete KYC verification as part of the onboarding process before accessing platform features.",
    "Secure Authentication: The platform includes secure user authentication to support controlled access to user accounts.",
    "Structured Investment Workflows: Investment opportunities are organized around defined investment timelines and transparent deal information.",
    "Compliance Considerations: The platform incorporates financial compliance considerations within its onboarding and investment workflow, aligning it with applicable financial norms.",
  ].join("\n"),

  business_impact: [
    "Digitized invoice-based investing: Transforms participation in invoice financing opportunities into a dedicated digital experience.",
    "Greater financial visibility: Gives investors a centralized view of their investment activity and portfolio position.",
    "Structured decision-making: Presents relevant investment information in an organized format to support opportunity evaluation.",
    "Centralized investment management: Brings investment-related activities together within one platform rather than across separate channels.",
    "Scalable fintech foundation: Establishes a technology-driven platform for managing invoice-based investment activities.",
  ].join("\n"),

  future_scope: [
    "Wider opportunity coverage: Expanding the range of invoice-based opportunities available on the platform.",
    "Deeper portfolio analytics: Richer reporting on returns and portfolio performance over time.",
    "Broader financial ecosystem: Extending UpTik as part of a wider digital financial offering.",
  ].join("\n"),

  conclusion:
    "UpTik demonstrates mTouch Labs’ experience in translating a specialized financial model — invoice-based investing — into a structured digital platform that brings investment workflows and financial information together.",

  faq_schema: [
    { question: "What type of fintech platform did mTouch Labs develop for UpTik?", answer: "mTouch Labs developed UpTik as a fintech investment platform focused on invoice-based investing, bringing investment opportunities, portfolio management, transactions, and related financial workflows into a digital product." },
    { question: "What was mTouch Labs’ role in the UpTik project?", answer: "mTouch Labs contributed to the development of UpTik across mobile application development, backend development, web interface development, and data management, using Flutter, Node.js, React, and MySQL." },
    { question: "How did mTouch Labs approach the development of an invoice-based investment platform?", answer: "The development focused on translating the requirements of invoice-based investing into structured digital workflows covering KYC onboarding, investment opportunities, portfolio tracking, transactions, wallet activity, and account management." },
    { question: "What technologies did mTouch Labs use to build UpTik?", answer: "The UpTik project was developed using Flutter, Node.js, React, and MySQL. These technologies supported the mobile application, web interface, backend functionality, and data management requirements of the platform." },
    { question: "Can mTouch Labs develop custom investment applications?", answer: "Yes. mTouch Labs develops custom fintech and financial technology solutions tailored to specific business requirements and digital workflows. The UpTik project demonstrates this capability within the investment domain." },
    { question: "What makes UpTik relevant to mTouch Labs’ fintech development experience?", answer: "UpTik demonstrates mTouch Labs’ experience in translating a specialized financial model—invoice-based investing—into a structured digital platform that brings investment workflows and financial information together." },
    { question: "Can mTouch Labs build both mobile and web components for fintech products?", answer: "Yes. The UpTik project included mobile application and web interface development, demonstrating mTouch Labs’ ability to support multiple digital touchpoints within a fintech product." },
  ],

  typography: { font: "Montserrat", style_description: "Montserrat throughout the UpTik interface." },
  color_palette: [
    { name: "Indigo", hex: "#553DDF" },
    { name: "Olive Green", hex: "#749220" },
    { name: "Ocean Blue", hex: "#165479" },
  ],

  meta_title: "UpTik | FinTech Investment Platform | mTouch Labs",
  meta_description:
    "Explore UpTik, a fintech investment platform for invoice-based investing, portfolio tracking, and digital investment management developed by mTouch Labs.",
  canonical_url: "https://www.mtouchlabs.com/portfolio/uptik",
  og_title: "UpTik | FinTech Investment Platform | mTouch Labs",
  og_description:
    "Explore UpTik, a fintech investment platform for invoice-based investing, portfolio tracking, and digital investment management developed by mTouch Labs.",
};

/* ═══════════════════════════════════════════════════════════════════ */

const JSON_COLUMNS = new Set([
  "tech_stack", "features", "faq_schema", "typography", "color_palette",
]);

const records = [GOLKONDA, UPTIK];
const args = process.argv.slice(2);
const dry = args.includes("--dry");
const only = args.filter((a) => !a.startsWith("--"));

async function main() {
  /* Which columns actually exist? A record that names a missing column
     would abort the whole UPDATE, so unknown columns are reported and
     skipped instead. */
  const cols = new Set(
    (await sql`
      SELECT column_name FROM information_schema.columns
      WHERE table_name = 'portfolios'`).map((r) => r.column_name)
  );

  const V5 = ["industry_background","objectives","strategy_approach","solution_architecture",
              "ui_ux_highlights","development_process","security_performance","future_scope","conclusion"];
  const missingV5 = V5.filter((c) => !cols.has(c));
  if (missingV5.length) {
    console.error("\n  These columns do not exist yet: " + missingV5.join(", "));
    console.error("  Run the migration first, then re-run this script:\n");
    console.error("      curl -X POST http://localhost:3000/api/migrate-portfolio-v5\n");
    process.exit(1);
  }

  for (const rec of records) {
    if (only.length && !only.includes(rec.slug)) continue;

    const exists = await sql`SELECT id FROM portfolios WHERE slug = ${rec.slug}`;
    if (!exists.length) {
      console.error(`  ✗ ${rec.slug} — no row with that slug. Skipped.`);
      continue;
    }

    const sets = [];
    const values = [];
    const skipped = [];
    for (const [key, value] of Object.entries(rec)) {
      if (key === "slug") continue;
      if (!cols.has(key)) { skipped.push(key); continue; }
      values.push(JSON_COLUMNS.has(key) ? JSON.stringify(value) : value);
      sets.push(`${key} = $${values.length}`);
    }
    values.push(rec.slug);

    if (dry) {
      console.log(`\n  ${rec.slug}`);
      console.log(`    would set ${sets.length} columns:`);
      console.log("      " + sets.map((s) => s.split(" =")[0]).join(", "));
      if (skipped.length) console.log(`    skipped (no such column): ${skipped.join(", ")}`);
      continue;
    }

    await sql.query(
      `UPDATE portfolios SET ${sets.join(", ")} WHERE slug = $${values.length}`,
      values
    );
    console.log(`  ✓ ${rec.slug} — ${sets.length} columns written`);
    if (skipped.length) console.log(`      skipped (no such column): ${skipped.join(", ")}`);
  }

  console.log(
    "\n  Images were not touched: image, og_image, app_screens, web_screens\n" +
    "  and gallery_images keep whatever the rows already had.\n"
  );
}

main().catch((e) => { console.error(e); process.exit(1); });
