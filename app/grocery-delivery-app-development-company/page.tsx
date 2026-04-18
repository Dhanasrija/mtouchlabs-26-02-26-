// import type { Metadata } from "next";
// import Link from "next/link";

// export const metadata: Metadata = {
//   title: "Grocery Delivery App Development in Hyderabad | mTouch Labs",
//   description:
//     "Build scalable grocery delivery apps in Hyderabad with real-time tracking, smart inventory, and seamless checkout. Custom solutions for startups and enterprises.",
//   keywords:
//     "grocery delivery app development Hyderabad, grocery app development company, grocery delivery app developers, hyperlocal grocery delivery app, multi vendor grocery app development, online grocery app development",
//   robots: "index, follow",
//   alternates: {
//     canonical:
//       "https://www.mtouchlabs.com/grocery-delivery-app-development-company-hyderabad",
//   },
//   openGraph: {
//     title: "Grocery Delivery App Development in Hyderabad | mTouch Labs",
//     description:
//       "Build scalable grocery delivery apps with real-time tracking, smart inventory, and seamless checkout. Custom solutions for startups and enterprises.",
//     url: "https://www.mtouchlabs.com/grocery-delivery-app-development-company-hyderabad",
//     siteName: "mTouch Labs",
//     type: "website",
//     images: [
//       {
//         url: "https://www.mtouchlabs.com/images/grocery-app-development.jpg",
//         width: 1200,
//         height: 630,
//         alt: "Grocery Delivery App Development",
//       },
//     ],
//   },
//   twitter: {
//     card: "summary_large_image",
//     title: "Grocery Delivery App Development in Hyderabad | mTouch Labs",
//     description:
//       "Launch your grocery delivery app with real-time tracking, smart inventory & seamless checkout. Built for scalability and performance.",
//     images: [
//       "https://www.mtouchlabs.com/images/grocery-app-development.jpg",
//     ],
//   },
// };

// export default function Page() {
//   return (
//     <>
//       {/* JSON-LD FAQ Schema */}
//       <script
//         type="application/ld+json"
//         dangerouslySetInnerHTML={{
//           __html: JSON.stringify({
//             "@context": "https://schema.org",
//             "@type": "FAQPage",
//             mainEntity: [
//               {
//                 "@type": "Question",
//                 name: "Which is the best grocery delivery app development company in Hyderabad?",
//                 acceptedAnswer: {
//                   "@type": "Answer",
//                   text: "mTouch Labs is a trusted grocery delivery app development company in Hyderabad, offering scalable solutions with real-time tracking, smart inventory, and seamless user experience for startups and enterprises.",
//                 },
//               },
//               {
//                 "@type": "Question",
//                 name: "How long does it take to develop a grocery delivery app?",
//                 acceptedAnswer: {
//                   "@type": "Answer",
//                   text: "A grocery delivery app typically takes 4 to 12 weeks to develop, depending on features, platform, and complexity.",
//                 },
//               },
//               {
//                 "@type": "Question",
//                 name: "What features are essential in a grocery delivery app?",
//                 acceptedAnswer: {
//                   "@type": "Answer",
//                   text: "Essential features include product search, real-time inventory, order tracking, secure payments, and delivery management.",
//                 },
//               },
//               {
//                 "@type": "Question",
//                 name: "What is the cost of grocery delivery app development?",
//                 acceptedAnswer: {
//                   "@type": "Answer",
//                   text: "The cost depends on features, integrations, and scalability requirements. Basic apps cost less, while advanced multi-vendor platforms require higher investment.",
//                 },
//               },
//               {
//                 "@type": "Question",
//                 name: "Can you build a multi-vendor grocery delivery app?",
//                 acceptedAnswer: {
//                   "@type": "Answer",
//                   text: "Yes, mTouch Labs develops scalable multi-vendor grocery delivery apps where multiple sellers can manage products, inventory, and orders within a single platform.",
//                 },
//               },
//               {
//                 "@type": "Question",
//                 name: "Is real-time inventory management possible in grocery apps?",
//                 acceptedAnswer: {
//                   "@type": "Answer",
//                   text: "Yes, modern grocery delivery apps support real-time inventory management, allowing businesses to update stock availability instantly.",
//                 },
//               },
//               {
//                 "@type": "Question",
//                 name: "Do you provide post-launch support for grocery apps?",
//                 acceptedAnswer: {
//                   "@type": "Answer",
//                   text: "Yes, mTouch Labs provides complete post-launch support, including maintenance, updates, performance optimization, and feature enhancements.",
//                 },
//               },
//               {
//                 "@type": "Question",
//                 name: "Can grocery delivery apps support subscription-based orders?",
//                 acceptedAnswer: {
//                   "@type": "Answer",
//                   text: "Yes, grocery delivery apps can include subscription features for recurring orders, allowing customers to schedule daily or weekly deliveries for essential items.",
//                 },
//               },
//             ],
//           }),
//         }}
//       />

//       {/* Breadcrumb — SAME as original */}
//       <div className="AIproduct-breadcrumb" style={{ color: "black" }}>
//         <Link href="/" style={{ color: "black" }}>Home </Link>
//         <span className="AIservices-separator">/</span>
//         <Link href="/on-demand-products-development-company-hyderabad" style={{ color: "black" }}>Products </Link>
//         <span className="AIservices-separator">/</span>
//         <span className="active" style={{ color: "black" }}>Grocery Delivery App Development</span>
//       </div>

//       {/* Hero Section — EXACT original structure */}
//       <section className="grocery-delivery-main">
//         <div className="grocery-delivery-content">
//           <img src="/images/products/grocery/bag.gif" className="grocery-banner-gif" alt="Grocery App Development" />
//           <h1 className="grocery-heading-h1">Grocery Delivery<br />
//             <span className="grocery-heading">App Development</span>
//           </h1>
//           <Link href="https://youtu.be/OG7xN9zS0nQ" target="_blank" rel="noopener noreferrer">
//             <button className="grocery-delivery-button">View Demo</button>
//           </Link>
//         </div>
//       </section>

//       <div className="page2">
//         <div className="grocery-delivery-one">

//           {/* Key Features — Redesigned as clean card grid */}
//           <section className="grocery-key-features-section">
//             <h2 className="grocery-key-features-title">Key Features for Seamless Functionality</h2>
//             <div className="grocery-key-features-grid">
//               <div className="grocery-key-feature-card">
//                 <img src="/images/products/grocery/grocery1.png" alt="Scheduled Delivery" loading="lazy" />
//                 <h6>Scheduled Delivery</h6>
//                 <p>Let customers pick their preferred delivery time slots.</p>
//               </div>
//               <div className="grocery-key-feature-card">
//                 <img src="/images/products/grocery/grocery2.png" alt="Product Search and Filters" loading="lazy" />
//                 <h6>Product Search &amp; Filters</h6>
//                 <p>Help users find exactly what they need, fast.</p>
//               </div>
//               <div className="grocery-key-feature-card">
//                 <img src="/images/products/grocery/grocery3.png" alt="Real-Time Order Tracking" loading="lazy" />
//                 <h6>Real-Time Order Tracking</h6>
//                 <p>Live updates from order placement to doorstep delivery.</p>
//               </div>
//               <div className="grocery-key-feature-card">
//                 <img src="/images/products/grocery/grocery4.png" alt="Order Customization" loading="lazy" />
//                 <h6>Order Customization</h6>
//                 <p>Allow users to modify quantities, add notes, and personalize orders.</p>
//               </div>
//             </div>
//           </section>

//           {/* Intro Section — updated content */}
//           <div className="grocery-delivery-mobile-container">
//             <div className="grocery-delivery-mobile-phone-section">
//               <img src="/images/products/grocery/ondemandgrocery.png" alt="grocery delivery app development company in Hyderabad" className="grocery-delivery-mobile-phone-image" loading="lazy" />
//             </div>
//             <div className="grocery-delivery-mobile-text-section">
//               <h3>Grocery App Solutions Designed for Growth</h3>
//               <p>
//                 mTouch Labs helps businesses build modern{" "}
//                 <Link href="/mobile-app-development-company" style={{ color: "#3e8cfb", fontWeight: 600 }}>grocery delivery platforms</Link>{" "}
//                 that handle everything—from browsing products to doorstep delivery—smoothly and efficiently. As a{" "}
//                 <Link href="/on-demand-products-development-company-hyderabad" style={{ color: "#3e8cfb", fontWeight: 600 }}>grocery delivery app development company</Link>{" "}
//                 in Hyderabad, we create scalable solutions designed to manage high order volumes, real-time inventory, and seamless customer experiences.
//               </p>
//               <p>Every grocery business has unique needs. We build solutions that adapt to your model and scale as your business grows.</p>
//               <button className="js-open-modal">Request Quote<i className="fas fa-long-arrow-alt-right" id="food-button-icon"></i></button>
//             </div>
//           </div>

//           {/* Customizable Section — same structure */}
//           <div className="grocery-delivery-two">
//             <div className="grocery-delivery-mobile-container">
//               <div className="grocery-delivery-mobile-text-section">
//                 <h4 className="grocery-delivery-two-text">Our apps are fully customizable to fit your brand, inventory, and business model.</h4>
//               </div>
//               <div className="grocery-delivery-mobile-phone-section">
//                 <img src="/images/products/grocery/appfully.png" alt="Customizable Grocery App" className="grocery-delivery-mobile-phone-image" loading="lazy" />
//               </div>
//             </div>
//           </div>

//           {/* Grocery Solutions Types — updated content */}
//           <div className="grocery-delivery-mobile-container">
//             <div className="grocery-delivery-mobile-text-section">
//               <h3>Grocery Delivery Solutions We Build</h3>
//               <p>We develop scalable{" "}
//                 <Link href="/on-demand-products-development-company-hyderabad" style={{ color: "#3e8cfb", fontWeight: 600 }}>grocery delivery applications</Link>{" "}
//                 tailored to different business models. Whether it&apos;s a single store app for direct online orders and deliveries, a multi-vendor marketplace where multiple sellers list products through a unified system, or hyperlocal delivery apps for fast fulfillment within a specific area—we build it all.
//               </p>
//               <p>We also create{" "}
//                 <Link href="/custom-software-development-company" style={{ color: "#3e8cfb", fontWeight: 600 }}>subscription-based grocery apps</Link>{" "}
//                 that allow users to schedule recurring deliveries for daily essentials, with user-friendly interfaces and seamless payment integration.
//               </p>
//             </div>
//             <div className="grocery-delivery-mobile-phone-section">
//               <img src="/images/products/grocery/ondemandgrocery2.png" alt="custom grocery delivery app development service" className="grocery-delivery-mobile-phone-image" />
//             </div>
//             <img src="/images/products/grocery/dots.png" alt="Decorative dots" className="dots-grocery" />
//           </div>

//           {/* Service Cards — updated content */}
//           <div className="diagnostic-service-container">
//             <div className="service-container">
//               <h3 className="service-heading">Grocery App Development Services</h3>
//               <p className="service-para">End-to-End Grocery Delivery App Development Solutions</p>
//               <div className="service-grid">
//                 <div className="service-card-main">
//                   <div className="service-card service-card-1">
//                     <img src="/images/products/grocery/icon1.png" alt="Single Store Apps" />
//                   </div>
//                   <h6>Single Store Apps</h6>
//                   <p>Enable your store to accept online orders, manage deliveries, and engage customers directly.</p>
//                 </div>
//                 <div className="service-card-main">
//                   <div className="service-card service-card-2">
//                     <img src="/images/products/grocery/icon2.png" alt="Multi-Vendor Marketplaces" />
//                   </div>
//                   <h6>Multi-Vendor Marketplaces</h6>
//                   <p>Create a platform where multiple sellers can list products and deliver through a unified system.</p>
//                 </div>
//                 <div className="service-card-main">
//                   <div className="service-card service-card-3">
//                     <img src="/images/products/grocery/icon3.png" alt="Hyperlocal Delivery Apps" />
//                   </div>
//                   <h6>Hyperlocal Delivery Apps</h6>
//                   <p>Quick deliveries within a specific area, ensuring fast fulfillment and customer satisfaction.</p>
//                 </div>
//                 <div className="service-card-main">
//                   <div className="service-card service-card-4">
//                     <img src="/images/products/grocery/icon4.png" alt="Subscription-Based Apps" />
//                   </div>
//                   <h6>Subscription-Based Apps</h6>
//                   <p>Allow users to schedule recurring deliveries for daily essentials like milk and vegetables.</p>
//                 </div>
//                 <div className="service-card-main">
//                   <div className="service-card service-card-5">
//                     <img src="/images/products/grocery/icon5.png" alt="Payment Gateway Integration" />
//                   </div>
//                   <h6>Payment Gateway Setup</h6>
//                   <p>Provide a variety of safe payment methods for seamless checkout.</p>
//                 </div>
//                 <div className="service-card-main">
//                   <div className="service-card service-card-6">
//                     <img src="/images/products/grocery/icon6.png" alt="Admin & Vendor Panel" />
//                   </div>
//                   <h6>Admin &amp; Vendor Panel</h6>
//                   <p>Complete platform control with analytics, reports, and order management.</p>
//                 </div>
//                 <div className="service-card-main">
//                   <div className="service-card service-card-7">
//                     <img src="/images/products/grocery/icon7.png" alt="Smart Capabilities" />
//                   </div>
//                   <h6>Smart Capabilities</h6>
//                   <p>Personalized suggestions, smart search, demand prediction, and data-driven insights.</p>
//                 </div>
//                 <div className="service-card-main">
//                   <div className="service-card service-card-8">
//                     <img src="/images/products/grocery/icon8.png" alt="Maintenance & Support" />
//                   </div>
//                   <h6>Maintenance &amp; Support</h6>
//                   <p>Keep your system smooth with updates, optimization, and ongoing support.</p>
//                 </div>
//               </div>
//             </div>
//           </div>

//         </div>

//         {/* App Screens Slider — SAME */}
//         <div className="grocary-silder">
//           <section className="home-partners-block sec-pad">
//             <div className="container">
//               <div className="row justify-content-center">
//                 <div className="col-lg-8">
//                   <div className="food-delivery-silder-header">
//                     <h3>App Screens</h3>
//                     <h6>Intuitive App Screens for Seamless User Experience.</h6>
//                   </div>
//                 </div>
//               </div>
//               <div className="app-screenss owl-carousel mt70 dottss">
//                 <div className="appscreen"><div className="itme-img"><img src="/images/products/grocery/appscreen1.png" alt="Grocery app screen 1" className="img-fluid" /></div></div>
//                 <div className="appscreen"><div className="itme-img"><img src="/images/products/grocery/appscreen2.png" alt="Grocery app screen 2" className="img-fluid" /></div></div>
//                 <div className="appscreen"><div className="itme-img"><img src="/images/products/grocery/appscreen3.png" alt="Grocery app screen 3" className="img-fluid" /></div></div>
//                 <div className="appscreen"><div className="itme-img"><img src="/images/products/grocery/appscreen4.png" alt="Grocery app screen 4" className="img-fluid" /></div></div>
//                 <div className="appscreen"><div className="itme-img"><img src="/images/products/grocery/appscreen5.png" alt="Grocery app screen 5" className="img-fluid" /></div></div>
//               </div>
//             </div>
//           </section>
//         </div>

//         {/* Features Tabs — CSS-only with radio inputs */}
//         <div className="grocery-application-features">
//           <div className="grocery-application-features-heading">
//             <h2>Features That Power Grocery Apps</h2>
//             <h6>Core functionalities across every panel of the ecosystem.</h6>
//           </div>
//           <div className="grocery-application-container">
//             <input type="radio" name="grocery-tab" id="gtab-customer" className="grocery-tab-radio" defaultChecked />
//             <input type="radio" name="grocery-tab" id="gtab-store" className="grocery-tab-radio" />
//             <input type="radio" name="grocery-tab" id="gtab-delivery" className="grocery-tab-radio" />
//             <input type="radio" name="grocery-tab" id="gtab-admin" className="grocery-tab-radio" />

//             <div className="grocery-panel-selector">
//               <label htmlFor="gtab-customer" className="grocery-panel-btn">Customer App</label>
//               <label htmlFor="gtab-store" className="grocery-panel-btn">Store Panel</label>
//               <label htmlFor="gtab-delivery" className="grocery-panel-btn">Delivery App</label>
//               <label htmlFor="gtab-admin" className="grocery-panel-btn">Admin Dashboard</label>
//             </div>

//             <div className="grocery-panel" id="gpanel-customer">
//               <ul>
//                 <li>Easy Product Browsing and Search</li>
//                 <li>Smart Cart and Quick Checkout</li>
//                 <li>Multiple Payment Methods</li>
//                 <li>Real-Time Order Tracking</li>
//                 <li>Notifications and Offers</li>
//               </ul>
//             </div>
//             <div className="grocery-panel" id="gpanel-store">
//               <ul>
//                 <li>Product and Inventory Management</li>
//                 <li>Order Tracking and Updates</li>
//                 <li>Pricing and Discount Control</li>
//               </ul>
//             </div>
//             <div className="grocery-panel" id="gpanel-delivery">
//               <ul>
//                 <li>Order Assignment</li>
//                 <li>Route Optimization</li>
//                 <li>Live Tracking</li>
//               </ul>
//             </div>
//             <div className="grocery-panel" id="gpanel-admin">
//               <ul>
//                 <li>Complete Platform Control</li>
//                 <li>Analytics and Reports</li>
//                 <li>Vendor and Order Management</li>
//               </ul>
//             </div>
//           </div>
//         </div>

//         {/* What Makes a Grocery App Successful */}
//         <div className="grocery-success-section">
//           <h2>What Makes a Grocery App Successful?</h2>
//           <p className="grocery-success-subtitle">A great grocery app is not just about products—it&apos;s about performance and reliability.</p>
//           <div className="grocery-success-grid">
//             <div className="grocery-success-card"><span>⚡</span><h6>Fast Loading Experience</h6></div>
//             <div className="grocery-success-card"><span>📦</span><h6>Accurate Inventory Updates</h6></div>
//             <div className="grocery-success-card"><span>🛒</span><h6>Smooth Checkout Flow</h6></div>
//             <div className="grocery-success-card"><span>📍</span><h6>Reliable Delivery Tracking</h6></div>
//             <div className="grocery-success-card"><span>🏗️</span><h6>Scalable Backend Systems</h6></div>
//           </div>
//         </div>

//         {/* Cost Section */}
//         <div className="grocery-cost-section">
//           <div className="grocery-cost-inner">
//             <h2>Grocery Delivery App Development Cost</h2>
//             <p>The cost of grocery app development depends on features, integrations, and complexity.</p>
//             <div className="grocery-cost-factors">
//               <div className="grocery-cost-factor"><span>👥</span><p>Number of user panels</p></div>
//               <div className="grocery-cost-factor"><span>⏱️</span><p>Real-time features</p></div>
//               <div className="grocery-cost-factor"><span>💳</span><p>Payment integrations</p></div>
//               <div className="grocery-cost-factor"><span>🚚</span><p>Delivery management system</p></div>
//             </div>
//             <p className="grocery-cost-note">We provide flexible solutions tailored to startups and enterprises.</p>
//             <Link href="/contact-us"><button className="grocery-cost-cta">Talk to Our Team for a Custom Estimate</button></Link>
//           </div>
//         </div>

//         {/* Development Approach */}
//         <div className="grocery-process-section">
//           <h2>Our Development Approach</h2>
//           <p className="grocery-process-subtitle">We follow a practical and structured approach.</p>
//           <div className="grocery-process-grid">
//             <div className="grocery-process-step"><span className="grocery-process-number">01</span><h6>Understanding Your Business Model</h6></div>
//             <div className="grocery-process-step"><span className="grocery-process-number">02</span><h6>Designing Intuitive Interfaces</h6></div>
//             <div className="grocery-process-step"><span className="grocery-process-number">03</span><h6>Developing Scalable Systems</h6></div>
//             <div className="grocery-process-step"><span className="grocery-process-number">04</span><h6>Integrating Payments &amp; Logistics</h6></div>
//             <div className="grocery-process-step"><span className="grocery-process-number">05</span><h6>Testing and Optimization</h6></div>
//             <div className="grocery-process-step"><span className="grocery-process-number">06</span><h6>Launch and Ongoing Support</h6></div>
//           </div>
//         </div>

//         {/* Who Can Benefit */}
//         <div className="grocery-benefit-section">
//           <h2>Who Can Benefit?</h2>
//           <div className="grocery-benefit-grid">
//             <div className="grocery-benefit-card"><span>🏬</span><h6>Supermarkets &amp; Grocery Chains</h6></div>
//             <div className="grocery-benefit-card"><span>🏪</span><h6>Local Grocery Stores</h6></div>
//             <div className="grocery-benefit-card"><span>🚀</span><h6>Online Grocery Startups</h6></div>
//             <div className="grocery-benefit-card"><span>📍</span><h6>Hyperlocal Delivery Services</h6></div>
//             <div className="grocery-benefit-card"><span>🌿</span><h6>Organic &amp; Specialty Stores</h6></div>
//           </div>
//         </div>

//         {/* Technology Partners — SAME */}
//         <div className="food-teach-container">
//           <div className="food-teach-container-heading">
//             <h3>Technology Partners</h3>
//             <p>Collaborating with Leading Technology Providers</p>
//           </div>
//           <div className="food-tech-grid">
//             <div className="food-tech-item"><img src="/images/products/html.png" width="65" alt="HTML5" /></div>
//             <div className="food-tech-item"><img src="/images/products/css.png" width="45" alt="CSS3" /></div>
//             <div className="food-tech-item"><img src="/images/products/js.png" width="95" alt="JavaScript" /></div>
//             <div className="food-tech-item"><img src="/images/products/boot.png" width="95" alt="Bootstrap" /></div>
//             <div className="food-tech-item"><img src="/images/products/php.png" width="95" alt="PHP" /></div>
//             <div className="food-tech-item"><img src="/images/products/laverl.png" width="95" alt="Laravel" /></div>
//             <div className="food-tech-item"><img src="/images/products/flutter.png" width="95" alt="Flutter" /></div>
//             <div className="food-tech-item"><img src="/images/products/firebase.png" width="95" alt="Firebase" /></div>
//             <div className="food-tech-item"><img src="/images/products/MySQL.png" width="95" alt="MySQL" /></div>
//             <div className="food-tech-item"><img src="/images/products/crashlytics.png" width="95" alt="Crashlytics" /></div>
//             <div className="food-tech-item"><img src="/images/products/Google_Analytics.png" width="95" alt="Google Analytics" /></div>
//             <div className="food-tech-item"><img src="/images/products/aws.png" width="95" alt="AWS" /></div>
//           </div>
//         </div>

//         {/* FAQ Section — updated content */}
//         <div className="food-faq-section">
//           <h2 className="food-faq-section-heading">Frequently Asked Questions</h2>
//           <div className="food-faq">
//             <details className="food-faq-item">
//               <summary className="food-faq-question">
//                 Which is the best grocery delivery app development company in Hyderabad?
//                 <span className="food-faq-toggle">+</span>
//               </summary>
//               <div className="food-faq-answer">
//                 mTouch Labs is a trusted grocery delivery app development company in Hyderabad, offering scalable solutions with real-time tracking, smart inventory, and seamless user experience for startups and enterprises.
//               </div>
//             </details>
//             <details className="food-faq-item">
//               <summary className="food-faq-question">
//                 How long does it take to develop a grocery delivery app?
//                 <span className="food-faq-toggle">+</span>
//               </summary>
//               <div className="food-faq-answer">
//                 A grocery delivery app typically takes 4 to 12 weeks to develop, depending on features, platform, and complexity. Basic apps are faster to build, while multi-vendor or advanced grocery delivery platforms require more time for development, testing, and deployment.
//               </div>
//             </details>
//             <details className="food-faq-item">
//               <summary className="food-faq-question">
//                 What features are essential in a grocery delivery app?
//                 <span className="food-faq-toggle">+</span>
//               </summary>
//               <div className="food-faq-answer">
//                 Essential features include product search, real-time inventory, order tracking, secure payments, and delivery management. Advanced grocery delivery apps also include smart recommendations, notifications, and analytics to improve user experience and business performance.
//               </div>
//             </details>
//             <details className="food-faq-item">
//               <summary className="food-faq-question">
//                 What is the cost of grocery delivery app development?
//                 <span className="food-faq-toggle">+</span>
//               </summary>
//               <div className="food-faq-answer">
//                 The cost of grocery delivery app development depends on features, integrations, and scalability requirements. Basic apps cost less, while advanced multi-vendor platforms with real-time tracking and automation require higher investment.
//               </div>
//             </details>
//             <details className="food-faq-item">
//               <summary className="food-faq-question">
//                 Can you build a multi-vendor grocery delivery app?
//                 <span className="food-faq-toggle">+</span>
//               </summary>
//               <div className="food-faq-answer">
//                 Yes, mTouch Labs develops scalable multi-vendor grocery delivery apps where multiple sellers can manage products, inventory, and orders within a single platform, making it ideal for marketplace-based grocery businesses.
//               </div>
//             </details>
//             <details className="food-faq-item">
//               <summary className="food-faq-question">
//                 Is real-time inventory management possible in grocery apps?
//                 <span className="food-faq-toggle">+</span>
//               </summary>
//               <div className="food-faq-answer">
//                 Yes, modern grocery delivery apps support real-time inventory management, allowing businesses to update stock availability instantly and avoid order issues, improving customer satisfaction and operational efficiency.
//               </div>
//             </details>
//             <details className="food-faq-item">
//               <summary className="food-faq-question">
//                 Do you provide post-launch support for grocery apps?
//                 <span className="food-faq-toggle">+</span>
//               </summary>
//               <div className="food-faq-answer">
//                 Yes, mTouch Labs provides complete post-launch support, including maintenance, updates, performance optimization, and feature enhancements to ensure your grocery delivery app runs smoothly.
//               </div>
//             </details>
//             <details className="food-faq-item">
//               <summary className="food-faq-question">
//                 Can grocery delivery apps support subscription-based orders?
//                 <span className="food-faq-toggle">+</span>
//               </summary>
//               <div className="food-faq-answer">
//                 Yes, grocery delivery apps can include subscription features for recurring orders, allowing customers to schedule daily or weekly deliveries for essential items like milk, vegetables, or groceries.
//               </div>
//             </details>
//           </div>
//         </div>
//       </div>

//       {/* CTA Section — updated content */}
//       <div className="food-cta-section">
//         <div className="food-cta-content">
//           <h2>Let&apos;s Build Your Grocery Delivery App</h2>
//           <p>Create a reliable and scalable grocery delivery platform that customers trust and use daily.</p>
//           <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" as const }}>
//             <Link href="/contact-us" className="food-cta-button">Get Free Consultation<i className="fas fa-arrow-right" id="food-button-icon"></i></Link>
//             <Link href="/contact-us" className="food-cta-button food-cta-button-outline">Start Your Project<i className="fas fa-arrow-right" id="food-button-icon"></i></Link>
//           </div>
//         </div>
//         <div className="food-cta-content-img">
//           <img src="/images/products/grocery/grocey.png" alt="Grocery Delivery" className="food-cta-image" />
//         </div>
//       </div>
//     </>
//   );
// }


"use client";

import Link from "next/link";
import { useState } from "react";

const faqs = [
  { q: "Which is the best grocery delivery app development company in Hyderabad?", a: "mTouch Labs is a trusted grocery delivery app development company in Hyderabad, offering scalable solutions with real-time tracking, smart inventory, and seamless user experience for startups and enterprises." },
  { q: "How long does it take to develop a grocery delivery app?", a: "A grocery delivery app typically takes 4 to 12 weeks to develop, depending on features, platform, and complexity. Basic apps are faster to build, while multi-vendor or advanced grocery delivery platforms require more time for development, testing, and deployment." },
  { q: "What features are essential in a grocery delivery app?", a: "Essential features include product search, real-time inventory, order tracking, secure payments, and delivery management. Advanced grocery delivery apps also include smart recommendations, notifications, and analytics to improve user experience and business performance." },
  { q: "What is the cost of grocery delivery app development?", a: "The cost of grocery delivery app development depends on features, integrations, and scalability requirements. Basic apps cost less, while advanced multi-vendor platforms with real-time tracking and automation require higher investment." },
  { q: "Can you build a multi-vendor grocery delivery app?", a: "Yes, mTouch Labs develops scalable multi-vendor grocery delivery apps where multiple sellers can manage products, inventory, and orders within a single platform, making it ideal for marketplace-based grocery businesses." },
  { q: "Is real-time inventory management possible in grocery apps?", a: "Yes, modern grocery delivery apps support real-time inventory management, allowing businesses to update stock availability instantly and avoid order issues, improving customer satisfaction and operational efficiency." },
  { q: "Do you provide post-launch support for grocery apps?", a: "Yes, mTouch Labs provides complete post-launch support, including maintenance, updates, performance optimization, and feature enhancements to ensure your grocery delivery app runs smoothly." },
  { q: "Can grocery delivery apps support subscription-based orders?", a: "Yes, grocery delivery apps can include subscription features for recurring orders, allowing customers to schedule daily or weekly deliveries for essential items like milk, vegetables, or groceries." },
];

const services = [
  { img: "/images/products/grocery/icon1.png", cls: "gi1", title: "Single Store Apps",         desc: "Enable your store to accept online orders, manage deliveries, and engage customers directly." },
  { img: "/images/products/grocery/icon2.png", cls: "gi2", title: "Multi-Vendor Marketplaces", desc: "Create a platform where multiple sellers can list products and deliver through a unified system." },
  { img: "/images/products/grocery/icon3.png", cls: "gi3", title: "Hyperlocal Delivery Apps",  desc: "Quick deliveries within a specific area, ensuring fast fulfillment and customer satisfaction." },
  { img: "/images/products/grocery/icon4.png", cls: "gi4", title: "Subscription-Based Apps",   desc: "Allow users to schedule recurring deliveries for daily essentials like milk and vegetables." },
  { img: "/images/products/grocery/icon5.png", cls: "gi5", title: "Payment Gateway Setup",     desc: "Provide a variety of safe payment methods for seamless checkout." },
  { img: "/images/products/grocery/icon6.png", cls: "gi6", title: "Admin & Vendor Panel",      desc: "Complete platform control with analytics, reports, and order management." },
  { img: "/images/products/grocery/icon7.png", cls: "gi7", title: "Smart Capabilities",        desc: "Personalized suggestions, smart search, demand prediction, and data-driven insights." },
  { img: "/images/products/grocery/icon8.png", cls: "gi8", title: "Maintenance & Support",     desc: "Keep your system smooth with updates, optimization, and ongoing support." },
];

const keyFeatures = [
  { img: "/images/products/grocery/grocery1.png", title: "Scheduled Delivery",          desc: "Let customers pick their preferred delivery time slots." },
  { img: "/images/products/grocery/grocery2.png", title: "Product Search & Filters",    desc: "Help users find exactly what they need, fast." },
  { img: "/images/products/grocery/grocery3.png", title: "Real-Time Order Tracking",    desc: "Live updates from order placement to doorstep delivery." },
  { img: "/images/products/grocery/grocery4.png", title: "Order Customization",         desc: "Allow users to modify quantities, add notes, and personalize orders." },
];

const successCards = [
  { icon: "⚡", title: "Fast Loading Experience" },
  { icon: "📦", title: "Accurate Inventory Updates" },
  { icon: "🛒", title: "Smooth Checkout Flow" },
  { icon: "📍", title: "Reliable Delivery Tracking" },
  { icon: "🏗️", title: "Scalable Backend Systems" },
];

const benefitCards = [
  { icon: "🏬", title: "Supermarkets & Grocery Chains" },
  { icon: "🏪", title: "Local Grocery Stores" },
  { icon: "🚀", title: "Online Grocery Startups" },
  { icon: "📍", title: "Hyperlocal Delivery Services" },
  { icon: "🌿", title: "Organic & Specialty Stores" },
];

const processSteps = [
  { n: "01", title: "Understanding Your Business Model" },
  { n: "02", title: "Designing Intuitive Interfaces" },
  { n: "03", title: "Developing Scalable Systems" },
  { n: "04", title: "Integrating Payments & Logistics" },
  { n: "05", title: "Testing and Optimization" },
  { n: "06", title: "Launch and Ongoing Support" },
];

const techStack = [
  { src: "/images/products/html.png",             w: 65, alt: "HTML5" },
  { src: "/images/products/css.png",              w: 45, alt: "CSS3" },
  { src: "/images/products/js.png",               w: 75, alt: "JavaScript" },
  { src: "/images/products/boot.png",             w: 75, alt: "Bootstrap" },
  { src: "/images/products/php.png",              w: 75, alt: "PHP" },
  { src: "/images/products/laverl.png",           w: 75, alt: "Laravel" },
  { src: "/images/products/flutter.png",          w: 75, alt: "Flutter" },
  { src: "/images/products/firebase.png",         w: 75, alt: "Firebase" },
  { src: "/images/products/MySQL.png",            w: 75, alt: "MySQL" },
  { src: "/images/products/crashlytics.png",      w: 75, alt: "Crashlytics" },
  { src: "/images/products/Google_Analytics.png", w: 75, alt: "Google Analytics" },
  { src: "/images/products/aws.png",              w: 75, alt: "AWS" },
];

export default function Page() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const toggleFaq = (i: number) => setOpenFaq(openFaq === i ? null : i);

  return (
    <>
      {/* ── JSON-LD ── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          }),
        }}
      />

      {/* ── ALL STYLES ── */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap');

        /* ── Brand Variables (from brand.css) ── */
        :root {
          --fp:       'Poppins', -apple-system, BlinkMacSystemFont, sans-serif;
          --blue:     #3E8CFB;
          --navy:     #011D80;
          --indigo:   #0C1C32;
          --carbon:   #0D1117;
          --gold:     #FAC759;
          --grey:     #777777;
          --white:    #FFFFFF;
          --light:    #F4F7FF;
          --green:    #2ECC71;
          --green-dk: #1a9e52;

          /* brand.css type scale */
          --h1: clamp(30px, 5vw, 52px);
          --h2: clamp(24px, 3.5vw, 40px);
          --h3: clamp(20px, 3vw, 34px);
          --h4: clamp(18px, 2.5vw, 28px);
          --b1: 18px;
          --b3: 16px;
          --tag: 13px;
        }

        /* Global body dark-bg override — product pages use light theme. */
        html:has(.gd), body:has(.gd) { background: #ffffff !important; }
        .gd * { box-sizing: border-box; margin: 0; padding: 0; }
        .gd { font-family: var(--fp); color: var(--indigo); background: #ffffff; }

        /* ════════════════════════════════
           BREADCRUMB
        ════════════════════════════════ */
        .gd-crumb {
          padding: 13px 48px;
          font-family: var(--fp);
          font-size: var(--tag);
          font-weight: 500;
          background: #f8f9fd;
          border-bottom: 1px solid #e5e8f5;
          color: #555;
        }
        .gd-crumb a { color: #555; text-decoration: none; transition: color .2s; }
        .gd-crumb a:hover, .gd-crumb .active { color: var(--blue); font-weight: 600; }
        .gd-sep { margin: 0 8px; color: #ccc; }

        /* ════════════════════════════════
           BUTTONS
        ════════════════════════════════ */
        .gd-btn {
          display: inline-flex; align-items: center; gap: 8px;
          font-family: var(--fp); font-size: var(--tag); font-weight: 600;
          letter-spacing: .3px; padding: 13px 28px; border-radius: 10px;
          border: 2px solid var(--blue); background: var(--blue);
          color: #ffffff !important; cursor: pointer; text-decoration: none;
          transition: all .22s ease; line-height: 1;
        }
        .gd-btn:hover { background: var(--navy); border-color: var(--navy); transform: translateY(-2px); box-shadow: 0 8px 24px rgba(62,140,251,.35); }
        .gd-btn-outline { background: transparent; color: var(--blue) !important; }
        .gd-btn-outline:hover { background: var(--blue); color: #fff !important; transform: translateY(-2px); box-shadow: 0 8px 24px rgba(62,140,251,.25); }
        .gd-btn-gold { background: var(--gold); border-color: var(--gold); color: var(--navy) !important; }
        .gd-btn-gold:hover { background: #e6b340; border-color: #e6b340; box-shadow: 0 8px 24px rgba(250,199,89,.4); transform: translateY(-2px); }

        /* ════════════════════════════════
           LABEL PILL
        ════════════════════════════════ */
        .gd-pill {
          display: inline-block; font-family: var(--fp); font-size: 11px;
          font-weight: 700; letter-spacing: 1.8px; text-transform: uppercase;
          color: var(--blue); background: rgba(62,140,251,.1);
          padding: 5px 14px; border-radius: 40px; margin-bottom: 12px;
        }
        .gd-pill.green { color: var(--green-dk); background: rgba(46,204,113,.12); }
        .gd-pill.gold  { color: #b27d00; background: rgba(250,199,89,.18); }

        /* ════════════════════════════════
           HERO
        ════════════════════════════════ */
        .gd-hero {
          display: flex; align-items: center; justify-content: center;
          gap: 48px; padding: 72px 80px 64px;
          background: linear-gradient(160deg, #edfff4 0%, #f4f9ff 55%, #fffbf0 100%);
          position: relative; overflow: hidden;
        }
        .gd-hero::before {
          content: ''; position: absolute; top: -100px; right: -100px;
          width: 380px; height: 380px;
          background: radial-gradient(circle, rgba(46,204,113,.12) 0%, transparent 70%);
          pointer-events: none;
        }
        .gd-hero::after {
          content: ''; position: absolute; bottom: -80px; left: -60px;
          width: 300px; height: 300px;
          background: radial-gradient(circle, rgba(62,140,251,.1) 0%, transparent 70%);
          pointer-events: none;
        }
        .gd-hero-phone { flex: 0 0 auto; position: relative; z-index: 1; }
        .gd-hero-phone img {
          width: 200px; height: auto; border-radius: 28px;
          filter: drop-shadow(0 20px 52px rgba(46,204,113,.2));
          animation: gd-float 3.8s ease-in-out infinite;
        }
        .gd-hero-phone.right img { animation-delay: 1.9s; }
        @keyframes gd-float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-10px)} }

        .gd-hero-center { flex: 1; text-align: center; max-width: 560px; position: relative; z-index: 1; }
        .gd-h1 {
          font-family: var(--fp); font-size: var(--h1); line-height: 1.18;
          font-weight: 800; color: var(--indigo); margin-bottom: 18px; letter-spacing: -.5px;
        }
        .gd-h1 .accent { color: var(--blue); }
        .gd-hero-sub {
          font-family: var(--fp); font-size: var(--b3); line-height: 1.75;
          color: #5a6480; max-width: 460px; margin: 0 auto 32px;
        }

        /* ════════════════════════════════
           SHARED TYPOGRAPHY
        ════════════════════════════════ */
        .gd-h2 { font-family:var(--fp); font-size:var(--h2); line-height:1.22; font-weight:700; color:var(--indigo); margin-bottom:14px; letter-spacing:-.3px; }
        .gd-h3 { font-family:var(--fp); font-size:var(--h3); line-height:1.28; font-weight:700; color:#000; margin-bottom:14px; }
        .gd-h4 { font-family:var(--fp); font-size:var(--h4); line-height:1.34; font-weight:700; color:var(--indigo); margin-bottom:12px; }
        /* Default .gd-body is used on LIGHT bg only.
           Dark bg sections use their own selectors: .gd-custom-band, .gd-cta (white text). */
        .gd-body { font-family:var(--fp); font-size:var(--b3); line-height:1.75; color:#1a1a2e; }
        .gd-body-light { color:#1a1a2e; }
        .gd-body-dark { color:#ffffff; }

        /* ════════════════════════════════
           KEY FEATURES (4-card grid)
        ════════════════════════════════ */
        .gd-key-features { padding: 64px 24px; background: #fff; text-align: center; }
        .gd-key-features-inner { max-width: 1200px; margin: 0 auto; }
        .gd-key-grid {
          display: grid; grid-template-columns: repeat(4, 1fr);
          gap: 24px; margin-top: 40px;
        }
        .gd-key-card {
          background: var(--light); border-radius: 18px; padding: 28px 20px 24px;
          border: 1px solid #e0eaff; text-align: center;
          transition: transform .22s, box-shadow .22s;
        }
        .gd-key-card:hover { transform: translateY(-6px); box-shadow: 0 12px 36px rgba(62,140,251,.13); }
        .gd-key-card img { width: 72px; height: auto; margin-bottom: 16px; }
        .gd-key-card h6 { font-family:var(--fp); font-size:15px; font-weight:700; color:var(--indigo); margin-bottom:8px; }
        .gd-key-card p  { font-family:var(--fp); font-size:13px; line-height:1.65; color:var(--grey); }

        /* ════════════════════════════════
           TWO-COL LAYOUT
        ════════════════════════════════ */
        .gd-twocol {
          display: flex; align-items: center; gap: 60px;
          padding: 72px 80px; max-width: 1240px; margin: 0 auto;
        }
        .gd-twocol.reverse { flex-direction: row-reverse; }
        .gd-twocol-img { flex: 0 0 auto; }
        .gd-phone-img {
          width: 240px; height: auto; border-radius: 24px;
          filter: drop-shadow(0 16px 48px rgba(46,204,113,.18));
        }
        .gd-twocol-text { flex: 1; }
        .gd-twocol-text p { margin-bottom: 14px; }
        .gd-twocol-text a { color: var(--blue); font-weight: 600; text-decoration: none; }
        .gd-twocol-text a:hover,
        .gd-twocol-text a:focus,
        .gd-twocol-text a:visited,
        .gd-twocol-text a:active { color: var(--blue); text-decoration: none; }

        /* ════════════════════════════════
           CUSTOMIZABLE BAND
        ════════════════════════════════ */
        .gd-custom-band {
          background: linear-gradient(135deg, var(--indigo) 0%, #0a2550 100%);
          padding: 56px 80px; color: #ffffff;
        }
        .gd-custom-band h1, .gd-custom-band h2, .gd-custom-band h3, .gd-custom-band h4,
        .gd-custom-band h5, .gd-custom-band h6, .gd-custom-band p, .gd-custom-band li { color: #ffffff; }
        .gd-custom-band-inner {
          display: flex; align-items: center; gap: 60px;
          max-width: 1200px; margin: 0 auto;
        }
        .gd-custom-band h4 {
          font-family: var(--fp); font-size: var(--h4); font-weight: 700;
          color: var(--white); line-height: 1.4; flex: 1;
        }
        .gd-custom-band h4 em { color: var(--gold); font-style: normal; }
        .gd-custom-band img { width: 260px; height: auto; border-radius: 20px; flex: 0 0 auto;
          filter: drop-shadow(0 12px 40px rgba(0,0,0,.4)); }

        /* ════════════════════════════════
           SERVICE CARDS (3×3 grid)
        ════════════════════════════════ */
        .gd-services { background: var(--light); padding: 72px 24px; text-align: center; }
        .gd-services-inner { max-width: 1200px; margin: 0 auto; }
        .gd-services-grid {
          display: grid; grid-template-columns: repeat(4, 1fr);
          gap: 20px; margin-top: 40px;
        }
        .gd-svc-card {
          background: #fff; border-radius: 18px; padding: 28px 18px 24px;
          border: 1px solid #eaeeff; text-align: center;
          transition: transform .22s, box-shadow .22s, border-color .22s;
        }
        .gd-svc-card:hover { transform: translateY(-6px); box-shadow: 0 12px 36px rgba(62,140,251,.13); border-color: rgba(62,140,251,.25); }
        .gd-svc-icon {
          width: 64px; height: 64px; border-radius: 50%;
          display: flex; align-items: center; justify-content: center; margin: 0 auto 16px;
        }
        .gd-svc-icon img { width: 36px; height: auto; }
        .gi1 { background: #e8f0ff; }
        .gi2 { background: #e8f9f0; }
        .gi3 { background: #fff4e6; }
        .gi4 { background: #fef9e7; }
        .gi5 { background: #f3e8ff; }
        .gi6 { background: #e8fcff; }
        .gi7 { background: #fde8ee; }
        .gi8 { background: #e8fff3; }
        .gd-svc-card h6 { font-family:var(--fp); font-size:15px; font-weight:700; color:var(--indigo); margin-bottom:8px; }
        .gd-svc-card p  { font-family:var(--fp); font-size:13px; line-height:1.65; color:var(--grey); }

        /* ════════════════════════════════
           APP SCREENS
        ════════════════════════════════ */
        .gd-screens {
          background: var(--light);
          padding: 72px 0 64px;
          text-align: center;
          overflow: hidden;
        }
        .gd-screens h3 { font-family:var(--fp); font-size:var(--h3); font-weight:700; color:var(--indigo); margin-bottom:8px; }
        .gd-screens > p { font-family:var(--fp); font-size:15px; color:var(--grey); margin-bottom:48px; }

        /* marquee track */
        .gd-screens-track-wrap {
          position: relative;
          overflow: hidden;
          padding: 12px 0 24px;
        }
        .gd-screens-track-wrap::before,
        .gd-screens-track-wrap::after {
          content: '';
          position: absolute;
          top: 0; bottom: 0;
          width: 120px;
          z-index: 2;
          pointer-events: none;
        }
        .gd-screens-track-wrap::before { left: 0;  background: linear-gradient(to right, var(--light), transparent); }
        .gd-screens-track-wrap::after  { right: 0; background: linear-gradient(to left,  var(--light), transparent); }

        .gd-screens-track {
          display: flex;
          gap: 24px;
          width: max-content;
          animation: gd-scroll 22s linear infinite;
        }
        .gd-screens-track:hover { animation-play-state: paused; }

        @keyframes gd-scroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .gd-screen-wrap {
          border: 2px solid rgba(62,140,251,.18);
          border-radius: 22px;
          overflow: hidden;
          background: #fff;
          box-shadow: 0 6px 24px rgba(62,140,251,.1);
          transition: transform .25s, box-shadow .25s;
          flex-shrink: 0;
        }
        .gd-screen-wrap:hover { transform: scale(1.05) translateY(-6px); box-shadow: 0 14px 40px rgba(62,140,251,.2); }
        .gd-screen-wrap img { width: 185px; height: auto; display: block; }

        /* ════════════════════════════════
           FEATURE TABS
        ════════════════════════════════ */
        .gd-tabs { padding: 72px 24px; background: #fff; }
        .gd-tabs-inner { max-width: 860px; margin: 0 auto; text-align: center; }
        .gd-tabs-inner .gd-body { max-width: 640px; margin: 0 auto 36px; }
        .gd-radio { display: none; }
        .gd-tab-btns {
          display: flex; gap: 10px; justify-content: center;
          flex-wrap: wrap; margin-bottom: 32px;
        }
        .gd-tab-btn {
          font-family:var(--fp); font-size:var(--tag); font-weight:600;
          padding: 10px 22px; border-radius: 40px; cursor: pointer;
          border: 2px solid var(--blue); color: var(--blue); background: transparent;
          transition: all .2s; user-select: none;
        }
        #gtab-customer:checked  ~ .gd-tab-btns label[for="gtab-customer"],
        #gtab-store:checked     ~ .gd-tab-btns label[for="gtab-store"],
        #gtab-delivery:checked  ~ .gd-tab-btns label[for="gtab-delivery"],
        #gtab-admin:checked     ~ .gd-tab-btns label[for="gtab-admin"] {
          background: var(--blue); color: #fff; box-shadow: 0 4px 14px rgba(62,140,251,.3);
        }
        .gd-panel { display: none; }
        #gtab-customer:checked  ~ .gd-tab-btns ~ #gpanel-customer,
        #gtab-store:checked     ~ .gd-tab-btns ~ #gpanel-store,
        #gtab-delivery:checked  ~ .gd-tab-btns ~ #gpanel-delivery,
        #gtab-admin:checked     ~ .gd-tab-btns ~ #gpanel-admin { display: block; }
        .gd-panel {
          background: var(--light); border-radius: 20px; padding: 36px 40px;
          text-align: left; border: 1px solid #dce4f8;
        }
        .gd-panel ul { list-style: none; display: grid; grid-template-columns: 1fr 1fr; gap: 14px; }
        .gd-panel ul li {
          font-family:var(--fp); font-size:15px; line-height:1.6;
          color:var(--indigo); font-weight:500; padding-left:26px; position:relative;
        }
        .gd-panel ul li::before { content:'✓'; position:absolute; left:0; color:var(--blue); font-weight:800; }

        /* ════════════════════════════════
           SUCCESS FACTORS
        ════════════════════════════════ */
        .gd-success { padding: 72px 24px; background: var(--light); text-align: center; }
        .gd-success-inner { max-width: 1000px; margin: 0 auto; }
        .gd-success .gd-body { max-width: 640px; margin: 0 auto 40px; }
        .gd-success-grid { display: flex; flex-wrap: wrap; gap: 20px; justify-content: center; }
        .gd-success-card {
          background: #fff; border-radius: 16px; padding: 24px 28px;
          display: flex; align-items: center; gap: 16px;
          border: 1px solid #e0eaff;
          box-shadow: 0 2px 10px rgba(0,0,0,.05);
          transition: transform .22s, box-shadow .22s;
          min-width: 200px;
        }
        .gd-success-card:hover { transform: translateY(-4px); box-shadow: 0 8px 28px rgba(62,140,251,.12); }
        .gd-success-card span { font-size: 30px; flex-shrink: 0; }
        .gd-success-card h6 { font-family:var(--fp); font-size:15px; font-weight:700; color:var(--indigo); }

        /* ════════════════════════════════
           COST SECTION
        ════════════════════════════════ */
        .gd-cost { padding: 72px 24px; background: #fff; text-align: center; }
        .gd-cost-inner { max-width: 860px; margin: 0 auto; }
        .gd-cost .gd-body { margin-bottom: 36px; }
        .gd-cost-factors {
          display: grid; grid-template-columns: repeat(4, 1fr);
          gap: 16px; margin-bottom: 28px;
        }
        .gd-cost-factor {
          background: var(--light); border-radius: 14px; padding: 22px 16px;
          border: 1px solid #e0eaff; text-align: center;
          transition: transform .2s, box-shadow .2s;
        }
        .gd-cost-factor:hover { transform: translateY(-4px); box-shadow: 0 8px 24px rgba(62,140,251,.12); }
        .gd-cost-factor span { font-size: 32px; display: block; margin-bottom: 10px; }
        .gd-cost-factor p { font-family:var(--fp); font-size:14px; line-height:1.5; color:var(--indigo); font-weight:600; }
        .gd-cost-note { font-family:var(--fp); font-size:14px; color:var(--grey); margin-bottom:24px; }

        /* ════════════════════════════════
           PROCESS
        ════════════════════════════════ */
        .gd-process { padding: 72px 24px; background: var(--light); text-align: center; }
        .gd-process-inner { max-width: 1100px; margin: 0 auto; }
        .gd-process .gd-body { max-width: 580px; margin: 0 auto 52px; }
        .gd-process-grid {
          display: grid; grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }
        .gd-process-step {
          background: #fff; border-radius: 18px; padding: 32px 24px;
          border: 1px solid #e0eaff; text-align: center;
          transition: transform .22s, box-shadow .22s;
        }
        .gd-process-step:hover { transform: translateY(-5px); box-shadow: 0 10px 32px rgba(62,140,251,.12); }
        .gd-step-num {
          width: 60px; height: 60px; border-radius: 50%; background: var(--blue);
          color: #fff; font-family:var(--fp); font-size: 20px; font-weight: 800;
          display: flex; align-items: center; justify-content: center;
          margin: 0 auto 16px; box-shadow: 0 6px 18px rgba(62,140,251,.3);
        }
        .gd-process-step h6 { font-family:var(--fp); font-size:15px; font-weight:700; color:var(--indigo); }

        /* ════════════════════════════════
           WHO CAN BENEFIT
        ════════════════════════════════ */
        .gd-benefit { padding: 72px 24px; background: #fff; text-align: center; }
        .gd-benefit-grid { display: flex; flex-wrap: wrap; gap: 16px; justify-content: center; max-width: 900px; margin: 36px auto 0; }
        .gd-benefit-card {
          background: var(--light); border-radius: 14px; padding: 22px 28px;
          display: flex; align-items: center; gap: 14px; border: 1px solid #e0eaff;
          transition: transform .2s, box-shadow .2s;
        }
        .gd-benefit-card:hover { transform: translateY(-3px); box-shadow: 0 6px 20px rgba(62,140,251,.12); }
        .gd-benefit-card span { font-size: 26px; }
        .gd-benefit-card h6 { font-family:var(--fp); font-size:15px; font-weight:700; color:var(--indigo); }

        /* ════════════════════════════════
           TECH STACK
        ════════════════════════════════ */
        .gd-tech { background: var(--light); padding: 60px 24px; text-align: center; }
        .gd-tech h3 { font-family:var(--fp); font-size:var(--h3); font-weight:700; color:var(--indigo); margin-bottom:8px; }
        .gd-tech .gd-body { margin-bottom: 36px; }
        .gd-tech-grid { display:flex; flex-wrap:wrap; justify-content:center; gap:16px; max-width:1000px; margin:0 auto; }
        .gd-tech-item {
          background:#fff; border-radius:14px; padding:16px 20px;
          box-shadow:0 2px 10px rgba(0,0,0,.06); display:flex;
          align-items:center; justify-content:center;
          transition:transform .2s,box-shadow .2s; border:1px solid #e8eaf5;
        }
        .gd-tech-item:hover { transform:translateY(-3px); box-shadow:0 8px 24px rgba(0,0,0,.1); }

        /* ════════════════════════════════
           FAQ ACCORDION
        ════════════════════════════════ */
        .gd-faq { padding: 72px 24px; background: #fff; text-align: center; }
        .gd-faq-list { max-width: 800px; margin: 36px auto 0; display: flex; flex-direction: column; gap: 10px; text-align: left; }
        .gd-faq-item {
          background: var(--light); border-radius: 14px; overflow: hidden;
          border: 1px solid #e0eaff; box-shadow: 0 2px 8px rgba(0,0,0,.04);
          transition: box-shadow .2s;
        }
        .gd-faq-item.open { box-shadow: 0 4px 20px rgba(62,140,251,.13); border-color: rgba(62,140,251,.35); }
        .gd-faq-q {
          font-family:var(--fp); font-size:15px; font-weight:600;
          color:var(--indigo); padding:20px 24px;
          display:flex; align-items:center; justify-content:space-between;
          gap:12px; cursor:pointer; user-select:none; transition:background .15s;
        }
        .gd-faq-item.open .gd-faq-q { background: rgba(62,140,251,.05); color: var(--blue); }
        .gd-faq-q:hover { background: rgba(62,140,251,.05); }
        .gd-faq-icon {
          width:28px; height:28px; border-radius:50%;
          background:rgba(62,140,251,.12); color:var(--blue);
          display:flex; align-items:center; justify-content:center;
          font-size:18px; font-weight:400; flex-shrink:0;
          transition:transform .25s, background .2s; line-height:1;
        }
        .gd-faq-item.open .gd-faq-icon { transform:rotate(45deg); background:var(--blue); color:#fff; }
        .gd-faq-body { max-height:0; overflow:hidden; transition:max-height .35s ease; }
        .gd-faq-item.open .gd-faq-body { max-height:300px; }
        .gd-faq-a { font-family:var(--fp); font-size:14px; line-height:1.8; color:var(--grey); padding:0 24px 20px; }

        /* ════════════════════════════════
           FINAL CTA
        ════════════════════════════════ */
        .gd-cta {
          background: linear-gradient(130deg, var(--navy) 0%, var(--indigo) 60%, #020b24 100%);
          padding: 72px 80px; display: flex; align-items: center; gap: 64px; color: #ffffff;
        }
        .gd-cta h1, .gd-cta h2, .gd-cta h3, .gd-cta h4, .gd-cta h5, .gd-cta h6,
        .gd-cta-text h2, .gd-cta-text p { color: #ffffff; }
        .gd-cta-text p { color: rgba(255,255,255,.8); }
        .gd-cta-text { flex: 1; }
        .gd-cta-text .gd-pill { background: rgba(250,199,89,.15); color: var(--gold); }
        .gd-cta-text h2 { font-family:var(--fp); font-size:var(--h2); line-height:1.22; font-weight:700; color:var(--white); margin-bottom:16px; }
        .gd-cta-text p  { font-family:var(--fp); font-size:var(--b3); line-height:1.75; color:rgba(255,255,255,.75); margin-bottom:32px; max-width:520px; }
        .gd-cta-btns { display:flex; gap:14px; flex-wrap:wrap; }
        .gd-cta-img-wrap { flex: 0 0 auto; }
        .gd-cta-img { width:300px; height:auto; border-radius:24px; filter:drop-shadow(0 16px 48px rgba(0,0,0,.5)); }

        /* ════════════════════════════════
           RESPONSIVE
        ════════════════════════════════ */
        @media (max-width: 1100px) {
          .gd-hero { padding: 56px 40px 48px; gap: 32px; }
          .gd-hero-phone img { width: 165px; }
          .gd-twocol { padding: 56px 40px; gap: 40px; }
          .gd-custom-band { padding: 48px 40px; }
          .gd-key-grid { grid-template-columns: repeat(2, 1fr); }
          .gd-services-grid { grid-template-columns: repeat(2, 1fr); }
          .gd-cost-factors { grid-template-columns: repeat(2, 1fr); }
          .gd-cta { padding: 56px 40px; gap: 40px; }
          .gd-cta-img { width: 240px; }
        }

        @media (max-width: 768px) {
          :root { --h1:clamp(26px,7vw,38px); --h2:clamp(22px,5vw,30px); --h3:clamp(18px,4vw,26px); --b3:15px; --tag:13px; }
          .gd-crumb { padding: 12px 20px; }
          .gd-hero { flex-direction: column; padding: 52px 20px 44px; gap: 28px; }
          .gd-hero-phone { display: none; }
          .gd-twocol, .gd-twocol.reverse { flex-direction: column; padding: 44px 20px; gap: 28px; text-align: center; }
          .gd-phone-img { width: 200px; }
          .gd-custom-band { padding: 40px 20px; }
          .gd-custom-band-inner { flex-direction: column; gap: 28px; text-align: center; }
          .gd-custom-band img { width: 200px; }
          .gd-key-grid { grid-template-columns: repeat(2, 1fr); }
          .gd-services-grid { grid-template-columns: repeat(2, 1fr); }
          .gd-process-grid { grid-template-columns: repeat(2, 1fr); }
          .gd-cost-factors { grid-template-columns: repeat(2, 1fr); }
          .gd-cta { flex-direction: column; padding: 52px 20px; gap: 28px; text-align: center; }
          .gd-cta-img { width: 220px; }
          .gd-cta-btns { justify-content: center; }
          .gd-panel { padding: 24px; }
          .gd-panel ul { grid-template-columns: 1fr; }
          .gd-screen-wrap img { width: 140px; }
        }

        @media (max-width: 520px) {
          .gd-key-grid { grid-template-columns: 1fr; }
          .gd-services-grid { grid-template-columns: 1fr; }
          .gd-process-grid { grid-template-columns: 1fr; }
          .gd-cost-factors { grid-template-columns: 1fr; }
          .gd-btn, .gd-btn-outline, .gd-btn-gold { width: 100%; justify-content: center; }
          .gd-cta-btns { flex-direction: column; }
          .gd-hero-sub { font-size: 14px; }
        }
      `}</style>

      <div className="gd">

        {/* ── BREADCRUMB ── */}
        <div className="gd-crumb">
          <Link href="/">Home</Link>
          <span className="gd-sep">/</span>
          <Link href="/on-demand-products-development-company-hyderabad">Products</Link>
          <span className="gd-sep">/</span>
          <span className="active">Grocery Delivery App Development</span>
        </div>

        {/* ── HERO ── */}
        <section className="gd-hero">
          <div className="gd-hero-phone left">
            <img src="/images/products/grocery/ondemandgrocery.png" alt="Grocery app screen" loading="lazy" />
          </div>
          <div className="gd-hero-center">
            <span className="gd-pill green">GROCERY APP</span>
            <h1 className="gd-h1">
              Grocery Delivery<br />
              <span className="accent">App Development</span>
            </h1>
            <p className="gd-hero-sub">
              Build scalable grocery delivery apps with real-time tracking, smart inventory, and seamless checkout — custom solutions for startups and enterprises.
            </p>
            <Link href="https://youtu.be/OG7xN9zS0nQ?si=0_gnd60CIxP10yrs" target="_blank" rel="noopener noreferrer" className="gd-btn">
              View Demo &nbsp;▶
            </Link>
          </div>
          <div className="gd-hero-phone right">
            <img src="/images/products/grocery/ondemandgrocery2.png" alt="Grocery app screen 2" loading="lazy" />
          </div>
        </section>

        {/* ── KEY FEATURES ── */}
        <section className="gd-key-features">
          <div className="gd-key-features-inner">
            <span className="gd-pill">Core Capabilities</span>
            <h2 className="gd-h2">Key Features for Seamless Functionality</h2>
            {/* <p className="gd-body" style={{ maxWidth: "580px", margin: "0 auto" }}>
              Every feature is built to give your customers a smooth, reliable grocery shopping experience.
            </p> */}
            <div className="gd-key-grid">
              {keyFeatures.map((f) => (
                <div key={f.title} className="gd-key-card">
                  <img src={f.img} alt={f.title} loading="lazy" />
                  <h6>{f.title}</h6>
                  <p>{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── INTRO TWO-COL ── */}
        <div className="gd-twocol">
          <div className="gd-twocol-img">
            <img src="/images/products/grocery/ondemandgrocery.png" alt="Grocery delivery app" className="gd-phone-img" loading="lazy" />
          </div>
          <div className="gd-twocol-text">
            <span className="gd-pill">About Us</span>
            <h3 className="gd-h3">Grocery App Solutions Designed for Growth</h3>
            <p className="gd-body">
              mTouch Labs helps businesses build modern{" "}
              <Link href="/mobile-app-development-company">grocery delivery platforms</Link>{" "}
              that handle everything — from browsing products to doorstep delivery — smoothly and efficiently. As a{" "}
              <Link href="/on-demand-products-development-company-hyderabad">grocery delivery app development company</Link>{" "}
              in Hyderabad, we create scalable solutions designed to manage high order volumes, real-time inventory, and seamless customer experiences.
            </p>
            <p className="gd-body">
              Every grocery business has unique needs. We build solutions that adapt to your model and scale as your business grows.
            </p>
            <a href="/contact" className="gd-btn" style={{ marginTop: "12px" }}>
              Request a Quote &nbsp;→
            </a>
          </div>
        </div>

        {/* ── CUSTOMIZABLE BAND ── */}
        {/* <div className="gd-custom-band">
          <div className="gd-custom-band-inner">
            <h4>
              Our apps are <em>fully customizable</em> to fit your brand, inventory, and business model — from a single corner store to a nationwide multi-vendor marketplace.
            </h4>
            <img src="/images/products/grocery/appfully.png" alt="Customizable Grocery App" loading="lazy" />
          </div>
        </div> */}

        {/* ── SOLUTIONS TWO-COL ── */}
        <div className="gd-twocol reverse">
          <div className="gd-twocol-img">
            <img src="/images/products/grocery/ondemandgrocery2.png" alt="Grocery delivery solutions" className="gd-phone-img" loading="lazy" />
          </div>
          <div className="gd-twocol-text">
            <span className="gd-pill">Solutions</span>
            <h3 className="gd-h3">Grocery Delivery Solutions We Build</h3>
            <p className="gd-body">
              We develop scalable{" "}
              <Link href="/on-demand-products-development-company-hyderabad">grocery delivery applications</Link>{" "}
              tailored to different business models. Whether it&apos;s a single store app for direct online orders, a multi-vendor marketplace, or hyperlocal delivery apps — we build it all.
            </p>
            <p className="gd-body">
              We also create{" "}
              <Link href="/custom-software-development-company">subscription-based grocery apps</Link>{" "}
              that allow users to schedule recurring deliveries for daily essentials, with user-friendly interfaces and seamless payment integration.
            </p>
          </div>
        </div>

        {/* ── SERVICE CARDS ── */}
        <section className="gd-services">
          <div className="gd-services-inner">
            <span className="gd-pill">What We Offer</span>
            <h2 className="gd-h2">Grocery App Development Services</h2>
            <p className="gd-body" style={{ maxWidth: "580px", margin: "0 auto" }}>
              End-to-End Grocery Delivery App Development Solutions
            </p>
            <div className="gd-services-grid">
              {services.map((s) => (
                <div key={s.title} className="gd-svc-card">
                  <div className={`gd-svc-icon ${s.cls}`}>
                    <img src={s.img} alt={s.title} />
                  </div>
                  <h6>{s.title}</h6>
                  <p>{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── APP SCREENS — light bg, uniform size, infinite scroll ── */}
        <div className="gd-screens">
          <h3>App Screens</h3>
          <p>Intuitive App Screens for Seamless User Experience</p>
          <div className="gd-screens-track-wrap">
            {/* duplicate the set so the scroll loops seamlessly */}
            <div className="gd-screens-track">
              {[1, 2, 3, 4, 5, 1, 2, 3, 4, 5].map((n, i) => (
                <div key={i} className="gd-screen-wrap">
                  <img
                    src={`/images/products/grocery/appscreen${n}.png`}
                    alt={`Grocery app screen ${n}`}
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── FEATURE TABS ── */}
        <div className="gd-tabs">
          <div className="gd-tabs-inner">
            <span className="gd-pill">Features</span>
            <h2 className="gd-h2">Features That Power Grocery Apps</h2>
            <p className="gd-body">Core functionalities across every panel of the ecosystem.</p>

            <input type="radio" name="grocery-tab" id="gtab-customer" className="gd-radio" defaultChecked />
            <input type="radio" name="grocery-tab" id="gtab-store"    className="gd-radio" />
            <input type="radio" name="grocery-tab" id="gtab-delivery" className="gd-radio" />
            <input type="radio" name="grocery-tab" id="gtab-admin"    className="gd-radio" />

            <div className="gd-tab-btns">
              <label htmlFor="gtab-customer" className="gd-tab-btn">Customer App</label>
              <label htmlFor="gtab-store"    className="gd-tab-btn">Store Panel</label>
              <label htmlFor="gtab-delivery" className="gd-tab-btn">Delivery App</label>
              <label htmlFor="gtab-admin"    className="gd-tab-btn">Admin Dashboard</label>
            </div>

            <div className="gd-panel" id="gpanel-customer">
              <ul>
                <li>Easy Product Browsing and Search</li>
                <li>Smart Cart and Quick Checkout</li>
                <li>Multiple Payment Methods</li>
                <li>Real-Time Order Tracking</li>
                <li>Notifications and Offers</li>
                <li>Scheduled Delivery Slots</li>
              </ul>
            </div>
            <div className="gd-panel" id="gpanel-store">
              <ul>
                <li>Product and Inventory Management</li>
                <li>Order Tracking and Updates</li>
                <li>Pricing and Discount Control</li>
                <li>Sales Analytics</li>
              </ul>
            </div>
            <div className="gd-panel" id="gpanel-delivery">
              <ul>
                <li>Order Assignment</li>
                <li>Route Optimization</li>
                <li>Live Tracking</li>
                <li>Earnings Dashboard</li>
              </ul>
            </div>
            <div className="gd-panel" id="gpanel-admin">
              <ul>
                <li>Complete Platform Control</li>
                <li>Analytics and Reports</li>
                <li>Vendor and Order Management</li>
                <li>Commission Management</li>
              </ul>
            </div>
          </div>
        </div>

        {/* ── SUCCESS FACTORS ── */}
        <div className="gd-success">
          <div className="gd-success-inner">
            <span className="gd-pill">Why It Works</span>
            <h2 className="gd-h2">What Makes a Grocery App Successful?</h2>
            {/* <p className="gd-body">A great grocery app is not just about products — it&apos;s about performance and reliability.</p> */}
            <div className="gd-success-grid">
              {successCards.map((c) => (
                <div key={c.title} className="gd-success-card">
                  <span>{c.icon}</span>
                  <h6>{c.title}</h6>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── COST ── */}
        <div className="gd-cost">
          <div className="gd-cost-inner">
            <span className="gd-pill">Pricing</span>
            <h2 className="gd-h2">Grocery Delivery App Development Cost</h2>
            {/* <p className="gd-body">The cost of grocery app development depends on features, integrations, and complexity.</p> */}
            <div className="gd-cost-factors">
              {[
                { icon: "👥", label: "Number of user panels" },
                { icon: "⏱️", label: "Real-time features" },
                { icon: "💳", label: "Payment integrations" },
                { icon: "🚚", label: "Delivery management system" },
              ].map((f) => (
                <div key={f.label} className="gd-cost-factor">
                  <span>{f.icon}</span>
                  <p>{f.label}</p>
                </div>
              ))}
            </div>
            <p className="gd-cost-note">We provide flexible solutions tailored to startups and enterprises.</p>
            <Link href="/contact-us" className="gd-btn gd-btn-gold">
              Talk to Our Team for a Custom Estimate
            </Link>
          </div>
        </div>

        {/* ── PROCESS ── */}
        <div className="gd-process">
          <div className="gd-process-inner">
            <span className="gd-pill">Our Approach</span>
            <h2 className="gd-h2">Our Development Approach</h2>
            <p className="gd-body">We follow a practical and structured approach to deliver on time, every time.</p>
            <div className="gd-process-grid">
              {processSteps.map((s) => (
                <div key={s.n} className="gd-process-step">
                  <div className="gd-step-num">{s.n}</div>
                  <h6>{s.title}</h6>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── WHO CAN BENEFIT ── */}
        <div className="gd-benefit">
          <span className="gd-pill">Industries</span>
          <h2 className="gd-h2">Who Can Benefit?</h2>
          <div className="gd-benefit-grid">
            {benefitCards.map((b) => (
              <div key={b.title} className="gd-benefit-card">
                <span>{b.icon}</span>
                <h6>{b.title}</h6>
              </div>
            ))}
          </div>
        </div>

        {/* ── TECH STACK ── */}
        <div className="gd-tech">
          <h3>Technology Partners</h3>
          <p className="gd-body">Collaborating with Leading Technology Providers</p>
          <div className="gd-tech-grid">
            {techStack.map((t) => (
              <div key={t.alt} className="gd-tech-item">
                <img src={t.src} width={t.w} alt={t.alt} />
              </div>
            ))}
          </div>
        </div>

        {/* ── FAQ ACCORDION ── */}
        <div className="gd-faq">
          <span className="gd-pill">FAQ</span>
          <h2 className="gd-h2">Frequently Asked Questions</h2>
          <div className="gd-faq-list">
            {faqs.map((f, i) => (
              <div key={i} className={`gd-faq-item${openFaq === i ? " open" : ""}`}>
                <div className="gd-faq-q" onClick={() => toggleFaq(i)}>
                  {f.q}
                  <span className="gd-faq-icon">+</span>
                </div>
                <div className="gd-faq-body">
                  <p className="gd-faq-a">{f.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── FINAL CTA ── */}
        <div className="gd-cta">
          <div className="gd-cta-text">
            <span className="gd-pill gold">Get Started</span>
            <h2>Let&apos;s Build Your Grocery Delivery App</h2>
            <p>Create a reliable and scalable grocery delivery platform that customers trust and use daily.</p>
            <div className="gd-cta-btns">
              <Link href="/contact-us" className="gd-btn gd-btn-gold">
                Get Free Consultation &nbsp;→
              </Link>
              <Link
                href="/contact-us"
                className="gd-btn"
                style={{ background: "transparent", borderColor: "rgba(255,255,255,.5)", color: "#fff" }}
              >
                Start Your Project &nbsp;→
              </Link>
            </div>
          </div>
          <div className="gd-cta-img-wrap">
            <img src="/images/products/grocery/grocey.png" alt="Grocery Delivery App" className="gd-cta-img" />
          </div>
        </div>

      </div>
    </>
  );
}