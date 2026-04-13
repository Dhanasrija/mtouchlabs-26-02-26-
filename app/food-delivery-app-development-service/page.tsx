// import type { Metadata } from "next";
// import Image from "next/image";
// import Link from "next/link";

// export const metadata: Metadata = {
//   title: "Food Delivery App Development Service",
//   description:
//     "mTouch Labs offers food delivery app development services to build user-friendly mobile apps for restaurants and delivery platforms.",
//   alternates: {
//     canonical: "https://www.mtouchlabs.com/food-delivery-app-development-service",
//   },

//   openGraph: {
//     title: "Food Delivery App Development Service",
//     description: "mTouch Labs offers food delivery app development services to build user-friendly mobile apps for restaurants and delivery platforms.",
//     url: "https://www.mtouchlabs.com/food-delivery-app-development-service",
//     siteName: "mTouch Labs",
//     type: "website",
//     images: [{ url: "https://www.mtouchlabs.com/images/web-and-mobile-app-development.png", width: 1200, height: 630, alt: "Food Delivery App Development Service" }],
//   },
//   twitter: {
//     card: "summary_large_image",
//     title: "Food Delivery App Development Service",
//     description: "mTouch Labs offers food delivery app development services to build user-friendly mobile apps for restaurants and delivery platforms.",
//     images: ["https://www.mtouchlabs.com/images/web-and-mobile-app-development.png"],
//   },
// };

// export default function Page() {
//   const customerFeatures = [
//     "Dashboard",
//     "My Orders",
//     "My Address Book",
//     "Quick Product Search",
//     "Order Status Tracking",
//     "Sign up / Login",
//     "My Favourites",
//     "Delivery Time Slots",
//     "Product Variant Selection",
//     "Apply Coupon",
//     "Order Alerts / History",
//     "Order Cancellation",
//     "Google Location",
//   ];

//   const adminFeatures = [
//     "User Management",
//     "Restaurant Management",
//     "Order Management",
//     "Analytics and Reporting",
//     "Promotions and Discounts",
//     "Payment Management",
//     "Feedback and Review",
//     "Inventory Management",
//     "Security and Privacy",
//   ];

//   const deliveryFeatures = [
//     "Order Management",
//     "Route Optimization",
//     "Real-Time Tracking",
//     "Communication Tools",
//     "Earnings and Payments",
//     "Profile Management",
//     "Feedback and Ratings",
//     "Support and Help",
//     "Geolocation and Mapping",
//   ];

//   const techStack = [
//     { src: "/images/products/html.png", alt: "HTML5", width: 65 },
//     { src: "/images/products/css.png", alt: "CSS3", width: 45 },
//     { src: "/images/products/js.png", alt: "JavaScript", width: 95 },
//     { src: "/images/products/boot.png", alt: "Bootstrap", width: 95 },
//     { src: "/images/products/php.png", alt: "PHP", width: 95 },
//     { src: "/images/products/laverl.png", alt: "Laravel", width: 95 },
//     { src: "/images/products/flutter.png", alt: "Flutter", width: 95 },
//     { src: "/images/products/firebase.png", alt: "Firebase", width: 95 },
//     { src: "/images/products/MySQL.png", alt: "MySQL", width: 95 },
//     { src: "/images/products/crashlytics.png", alt: "Crashlytics", width: 95 },
//     { src: "/images/products/Google_Analytics.png", alt: "Google Analytics", width: 95 },
//     { src: "/images/products/aws.png", alt: "AWS", width: 95 },
//   ];

//   const appScreens = [
//     "/images/products/silder1.png",
//     "/images/products/silder2.png",
//     "/images/products/silder3.png",
//     "/images/products/silder4.png",
//     "/images/products/silder5.png",
//   ];

//   const faqData = [
//     {
//       question: "What features should a food delivery app have",
//       answer:
//         "A comprehensive food delivery app should include features such as user registration and profiles, restaurant listings, menu browsing, order placement, real-time order tracking, payment integration, ratings and reviews, push notifications, and customer support.",
//     },
//     {
//       question: "How long does it take to develop a food delivery app",
//       answer:
//         "The development time for a food delivery app can vary based on the complexity and features required. A simple app may take around 3-6 months to develop, while a more complex app can take 9 months or longer.",
//     },
//     {
//       question: "What technologies are used in developing a food delivery app",
//       answer:
//         "Common technologies include programming languages like Swift and Kotlin for native iOS and Android apps, React Native or Flutter for cross-platform development, and backend technologies like Node.js, Python, or Ruby on Rails. For databases, SQL or NoSQL solutions are often used.",
//     },
//     {
//       question: "Can you integrate third-party services into the app",
//       answer:
//         "Yes, we can integrate a wide range of third-party services into your food delivery app to enhance its functionality and user experience. Common third-party integrations include payment gateways like Stripe, PayPal, and Square to facilitate secure and diverse payment options. Maps and geolocation services such as Google Maps API are used for location tracking, route optimization, and delivery management.",
//     },
//     {
//       question: "How do you ensure the security of the app",
//       answer:
//         "Ensuring the security of your food delivery app is a top priority for us. We implement multiple layers of security measures to protect user data, transactions, and the overall integrity of the app. Data encryption using SSL/TLS protocols ensures that sensitive information is protected during transit. Secure authentication mechanisms like OAuth and JWT ensure that only authorized users can access the app's features.",
//     },
//   ];

//   return (
//     <>
//       {/* Breadcrumb */}
//       <div className="AIproduct-breadcrumb" style={{ color: "black" }}>
//         <Link href="/" style={{ color: "black" }}>
//           Home{" "}
//         </Link>
//         <span className="AIservices-separator">/</span>
//         <Link href="/on-demand-products-development-company-hyderabad" style={{ color: "black" }}>
//           Products{" "}
//         </Link>
//         <span className="AIservices-separator">/</span>
//         <span className="active" style={{ color: "black" }}>
//           Grow Your Food Delivery with Web &amp; App Solutions
//         </span>
//       </div>

//       {/* Hero Section */}
//       <section className="food-delivery-main">
//         <div className="foodelivery-delivery-content">
//           <Image
//             src="/images/products/FoodDelivery.gif"
//             className="foodelivery-gif"
//             alt="Food Delivery App Development"
//             width={600}
//             height={400}
//             unoptimized
//           />
//           <h1 className="foodelivery-heading-h1">
//             Grow Your <br />
//             <span className="food-development-heading">Food Delivery</span> with <br />
//             Web &amp; App Solutions
//           </h1>
//           <Link
//             href="https://youtu.be/Zvae5N9p3Gc"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="foodelivery-delivery-button"
//             style={{ display: "inline-block", position: "relative", zIndex: 2 }}
//           >
//             View Demo
//           </Link>
//         </div>
//       </section>

//       {/* Page Content */}
//       <div className="page1">
//         {/* Features Image */}
//         <section className="food-delivery-features">
//           <Image
//             src="/images/products/foodservices.png"
//             className="food-delivery-feature-img"
//             alt="Food Delivery Features"
//             width={1200}
//             height={400}
//           />
//         </section>

//         {/* On-Demand Section */}
//         <div className="food-delivery-mobile-container">
//           <div className="food-delivery-mobile-phone-section">
//             <Image
//               src="/images/products/phoneframe1.png"
//               alt="Food delivery app development agency"
//               className="food-delivery-mobile-phone-image"
//               width={400}
//               height={700}
//               loading="lazy"
//             />
//           </div>
//           <div className="food-delivery-mobile-text-section">
//             <h3>On-Demand Food Delivery App Development</h3>
//             <p>
//               <Link
//                 href="/mobile-app-development-company"
//                 style={{ color: "#3e8cfb", fontWeight: 600 }}
//               >
//                 Food delivery app development services
//               </Link>{" "}
//               have transformed the way people order food and get delivered. These applications have
//               become an essential part due to the growing desire for speed and convenience.
//             </p>
//             <p>
//               When it comes to designing a food delivery app, there are many crucial services that
//               assist businesses in building a successful platform. From creating{" "}
//               <Link
//                 href="/ui-ux-design-company"
//                 style={{ color: "#3e8cfb", fontWeight: 600 }}
//               >
//                 user-friendly interfaces
//               </Link>{" "}
//               to integrating secure payment methods, app development services are critical
//               to providing a seamless experience for both customers and restaurants.
//             </p>
//           </div>
//         </div>

//         {/* Customizable Section */}
//         <div className="food-delivery-mobile-customizable-section">
//           <Image
//             src="/images/products/food11.png"
//             className="mobile-customizable-section-img1"
//             alt="Custom App Solutions"
//             width={200}
//             height={200}
//             loading="lazy"
//           />
//           <h2>Custom App Solutions for Your Brand</h2>
//           <Image
//             src="/images/products/food11.png"
//             className="mobile-customizable-section-img2"
//             alt="Custom App Solutions"
//             width={200}
//             height={200}
//             loading="lazy"
//           />
//         </div>

//         {/* Online Food Delivery Section */}
//         <div className="food-delivery-mobile-container1">
//           <div className="food-delivery-mobile-text-section">
//             <h3>Online Food Delivery Applications</h3>
//             <p>
//               At mTouch Labs, we specialise in creating unique
//               food delivery apps
//               that transform how restaurants and food businesses interact with their customers. Our
//               expertise in{" "}
//               <Link
//                 href="/cross-platform-app-development-company"
//                 style={{ color: "#3e8cfb", fontWeight: 600 }}
//               >
//                 cross-platform app development
//               </Link>{" "}
//               and deep understanding of the food and beverage industry
//               allow us to create solutions that are not only functional but also highly engaging and
//               user-friendly.
//             </p>
//             <p>
//               Our Food delivery app solutions are intended to create a seamless experience for both
//               customers and restaurant partners. From user-friendly interfaces to secure payment
//               gateways, our apps are designed to improve every aspect of the food delivery
//               experience.
//             </p>
//           </div>
//           <div className="food-delivery-mobile-phone-section">
//             <Image
//               src="/images/products/phoneframe2.png"
//               alt="Custom food delivery app development services"
//               className="food-delivery-mobile-phone-image"
//               width={400}
//               height={700}
//               loading="lazy"
//             />
//           </div>
//         </div>

//         {/* Banner Image */}
//         <div className="food-delivery-mobile-container2">
//           <Image
//             src="/images/products/food22.png"
//             className="mobile-customizable-section-img"
//             alt="Food Delivery Solutions"
//             width={1200}
//             height={400}
//             loading="lazy"
//           />
//         </div>

//         {/* Services Grid */}
//         <div className="diagnostic-service-container">
//           <div className="service-container">
//             <h3 className="service-heading">Food Delivery App Development Services</h3>
//             <p className="service-para">Key Services for Food Delivery App Development</p>
//             <div className="service-grid">
//               <div className="service-card-main">
//                 <div className="service-card service-card-1">
//                   <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
//                     <rect x="6" y="8" width="24" height="32" rx="3" stroke="#6366f1" strokeWidth="2.5" fill="none" />
//                     <rect x="18" y="12" width="24" height="28" rx="3" stroke="#6366f1" strokeWidth="2.5" fill="none" />
//                     <path d="M12 16h12M12 22h12M12 28h8" stroke="#818cf8" strokeWidth="2" strokeLinecap="round" />
//                     <circle cx="36" cy="34" r="5" fill="#c7d2fe" stroke="#6366f1" strokeWidth="2" />
//                     <path d="M34 34l1.5 1.5L38 32" stroke="#6366f1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
//                   </svg>
//                 </div>
//                 <h6>Custom App Development</h6>
//                 <p>Create a custom food delivery app from the ground up.</p>
//               </div>
//               <div className="service-card-main">
//                 <div className="service-card service-card-2">
//                   <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
//                     <rect x="4" y="14" width="16" height="22" rx="2" stroke="#f59e0b" strokeWidth="2.5" fill="none" />
//                     <rect x="28" y="14" width="16" height="22" rx="2" stroke="#f59e0b" strokeWidth="2.5" fill="none" />
//                     <path d="M20 24h8" stroke="#fbbf24" strokeWidth="2.5" strokeLinecap="round" strokeDasharray="4 3" />
//                     <circle cx="12" cy="10" r="4" fill="#fef3c7" stroke="#f59e0b" strokeWidth="2" />
//                     <circle cx="36" cy="10" r="4" fill="#fef3c7" stroke="#f59e0b" strokeWidth="2" />
//                     <circle cx="24" cy="42" r="4" fill="#fef3c7" stroke="#f59e0b" strokeWidth="2" />
//                     <path d="M12 14v-0M36 14v-0M24 38v-4" stroke="#fbbf24" strokeWidth="2" strokeLinecap="round" />
//                   </svg>
//                 </div>
//                 <h6>Multi-Vendor Marketplace</h6>
//                 <p>Create a platform that links patrons and several eateries.</p>
//               </div>
//               <div className="service-card-main">
//                 <div className="service-card service-card-3">
//                   <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
//                     <path d="M6 18h36v20a4 4 0 01-4 4H10a4 4 0 01-4-4V18z" stroke="#ef4444" strokeWidth="2.5" fill="none" />
//                     <path d="M6 18l4-10h28l4 10" stroke="#ef4444" strokeWidth="2.5" fill="none" />
//                     <circle cx="18" cy="28" r="3" fill="#fecaca" stroke="#ef4444" strokeWidth="2" />
//                     <circle cx="30" cy="28" r="3" fill="#fecaca" stroke="#ef4444" strokeWidth="2" />
//                     <path d="M18 35h12" stroke="#f87171" strokeWidth="2" strokeLinecap="round" />
//                   </svg>
//                 </div>
//                 <h6>Restaurant App Solutions</h6>
//                 <p>Custom Programs for Restaurant Online Orders.</p>
//               </div>
//               <div className="service-card-main">
//                 <div className="service-card service-card-4">
//                   <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
//                     <rect x="8" y="16" width="24" height="20" rx="3" stroke="#10b981" strokeWidth="2.5" fill="none" />
//                     <circle cx="14" cy="40" r="3" stroke="#10b981" strokeWidth="2.5" fill="none" />
//                     <circle cx="26" cy="40" r="3" stroke="#10b981" strokeWidth="2.5" fill="none" />
//                     <path d="M32 20l6-8h6v16h-6" stroke="#10b981" strokeWidth="2.5" fill="none" strokeLinejoin="round" />
//                     <circle cx="38" cy="40" r="3" stroke="#10b981" strokeWidth="2.5" fill="none" />
//                     <path d="M16 10v6M24 8v8" stroke="#6ee7b7" strokeWidth="2" strokeLinecap="round" />
//                   </svg>
//                 </div>
//                 <h6>Delivery Partner App</h6>
//                 <p>Delivery Acceptance &amp; Tracking Software for Drivers.</p>
//               </div>
//               <div className="service-card-main">
//                 <div className="service-card service-card-5">
//                   <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
//                     <path d="M8 40V16l16-10 16 10v24H8z" stroke="#8b5cf6" strokeWidth="2.5" fill="none" strokeLinejoin="round" />
//                     <rect x="18" y="28" width="12" height="12" rx="1" stroke="#8b5cf6" strokeWidth="2" fill="none" />
//                     <path d="M14 22h6M28 22h6" stroke="#a78bfa" strokeWidth="2" strokeLinecap="round" />
//                     <path d="M24 6v4" stroke="#c4b5fd" strokeWidth="2" strokeLinecap="round" />
//                     <circle cx="38" cy="10" r="6" fill="#ede9fe" stroke="#8b5cf6" strokeWidth="2" />
//                     <path d="M36 10h4M38 8v4" stroke="#8b5cf6" strokeWidth="1.5" strokeLinecap="round" />
//                   </svg>
//                 </div>
//                 <h6>Cloud Kitchen App</h6>
//                 <p>Meal Plan Apps with Automated Food Delivery Service.</p>
//               </div>
//               <div className="service-card-main">
//                 <div className="service-card service-card-6">
//                   <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
//                     <rect x="8" y="8" width="32" height="32" rx="4" stroke="#ec4899" strokeWidth="2.5" fill="none" />
//                     <path d="M16 20l4 4 8-8" stroke="#ec4899" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
//                     <path d="M16 30h16M16 36h10" stroke="#f9a8d4" strokeWidth="2" strokeLinecap="round" />
//                     <circle cx="40" cy="8" r="5" fill="#fce7f3" stroke="#ec4899" strokeWidth="2" />
//                     <path d="M38.5 8l1 1 2-2" stroke="#ec4899" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
//                   </svg>
//                 </div>
//                 <h6>Subscription-Based Delivery</h6>
//                 <p>Offer meal plan apps with recurring food deliveries.</p>
//               </div>
//               <div className="service-card-main">
//                 <div className="service-card service-card-7">
//                   <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
//                     <rect x="10" y="6" width="28" height="36" rx="4" stroke="#0ea5e9" strokeWidth="2.5" fill="none" />
//                     <rect x="16" y="14" width="16" height="10" rx="2" stroke="#0ea5e9" strokeWidth="2" fill="#e0f2fe" />
//                     <path d="M16 30h16M16 36h10" stroke="#7dd3fc" strokeWidth="2" strokeLinecap="round" />
//                     <circle cx="24" cy="19" r="3" stroke="#0ea5e9" strokeWidth="1.5" fill="none" />
//                     <path d="M18 10h12" stroke="#7dd3fc" strokeWidth="2" strokeLinecap="round" />
//                   </svg>
//                 </div>
//                 <h6>White-Label Solutions</h6>
//                 <p>Offer a pre-made, adaptable app for meal delivery.</p>
//               </div>
//               <div className="service-card-main">
//                 <div className="service-card service-card-8">
//                   <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
//                     <rect x="4" y="14" width="28" height="20" rx="3" stroke="#f97316" strokeWidth="2.5" fill="none" />
//                     <path d="M4 20h28" stroke="#f97316" strokeWidth="2" />
//                     <path d="M10 28h8M10 32h5" stroke="#fdba74" strokeWidth="2" strokeLinecap="round" />
//                     <circle cx="38" cy="20" r="8" stroke="#f97316" strokeWidth="2.5" fill="none" />
//                     <path d="M36 18v4l3 2" stroke="#f97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
//                     <path d="M32 34l-4 4M36 34l-2 6" stroke="#fdba74" strokeWidth="2" strokeLinecap="round" />
//                   </svg>
//                 </div>
//                 <h6>API &amp; Payment Integration</h6>
//                 <p>Incorporate third-party APIs, GPS, and payment gateways.</p>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* App Screens */}
//         <div className="food-delivery-silder">
//           <section className="home-partners-block sec-pad">
//             <div className="container">
//               <div className="food-delivery-silder-header">
//                 <h3>App Screens</h3>
//                 <h6>App Screen Design and User Interface</h6>
//               </div>
//               <div className="food-app-screens-scroll">
//                 {appScreens.map((screen, i) => (
//                   <div key={i} className="food-appscreen">
//                     <Image src={screen} alt={`App screen ${i + 1}`} width={250} height={500} className="img-fluid" />
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </section>
//         </div>

//         {/* Application Features - CSS-only tabs */}
//         <div className="food-application-features">
//           <div className="food-application-features-heading">
//             <h3>Application Features</h3>
//             <h6>Build a customizable, multi-featured grocery platform with us!</h6>
//           </div>
//           <div className="food-application-container">
//             <input type="radio" name="food-panel-tab" id="food-tab-customer" className="food-tab-radio" defaultChecked />
//             <input type="radio" name="food-panel-tab" id="food-tab-admin" className="food-tab-radio" />
//             <input type="radio" name="food-panel-tab" id="food-tab-delivery" className="food-tab-radio" />

//             <div className="food-application-panel-selector">
//               <label htmlFor="food-tab-customer" className="food-application-panel-btn">
//                 Customer Panel
//               </label>
//               <label htmlFor="food-tab-admin" className="food-application-panel-btn">
//                 Admin Panel
//               </label>
//               <label htmlFor="food-tab-delivery" className="food-application-panel-btn">
//                 Delivery Partner Panel
//               </label>
//             </div>

//             <div className="food-panels-wrapper">
//               <div className="food-panel food-panel-customer">
//                 <ul>
//                   {customerFeatures.map((f, i) => (
//                     <li key={i}>{f}</li>
//                   ))}
//                 </ul>
//               </div>
//               <div className="food-panel food-panel-admin">
//                 <ul>
//                   {adminFeatures.map((f, i) => (
//                     <li key={i}>{f}</li>
//                   ))}
//                 </ul>
//               </div>
//               <div className="food-panel food-panel-delivery">
//                 <ul>
//                   {deliveryFeatures.map((f, i) => (
//                     <li key={i}>{f}</li>
//                   ))}
//                 </ul>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Technology Stack */}
//         <div className="food-teach-container">
//           <div className="food-teach-container-heading">
//             <h3>Technology We Use</h3>
//             <p>Advanced Tools &amp; Frameworks for Food Delivery App Development</p>
//           </div>
//           <div className="food-tech-grid">
//             {techStack.map((tech, i) => (
//               <div key={i} className="food-tech-item">
//                 <Image src={tech.src} width={tech.width} height={60} alt={tech.alt} />
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* FAQ Section - native details/summary */}
//         <div className="food-faq-section">
//           <h2 className="food-faq-section-heading">FAQ&#39;s</h2>
//           <div className="food-faq">
//             {faqData.map((faq, i) => (
//               <details key={i} className="food-faq-item">
//                 <summary className="food-faq-question">
//                   {faq.question}
//                   <span className="food-faq-toggle">+</span>
//                 </summary>
//                 <div className="food-faq-answer">{faq.answer}</div>
//               </details>
//             ))}
//           </div>
//         </div>

//         {/* CTA Section */}
//         <div className="food-cta-section">
//           <div className="food-cta-content-img">
//             <Image
//               src="/images/products/delivery.png"
//               alt="Delivery Person"
//               className="food-cta-image"
//               width={400}
//               height={400}
//             />
//           </div>
//           <div className="food-cta-content">
//             <h2>Get Your Custom Food Delivery App Now</h2>
//             <p>
//               Drive your business forward with our customizable Food Delivery App Development
//               Solutions
//             </p>
//             <Link href="/contact-us" className="food-cta-button">
//               Let&#39;s Bring Your Idea to Life
//               <span className="food-button-icon">→</span>
//             </Link>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }



import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

/* ─── SEO + AEO METADATA ──────────────────────────────────── */
export const metadata: Metadata = {
  title: "Food Delivery App Development Company in Hyderabad | mTouch Labs",
  description:
    "NASSCOM award-winning food delivery app development company in Hyderabad. Build scalable Zomato/Swiggy-like apps with real-time tracking, AI features & secure payments. Free consultation.",
  keywords:
    "food delivery app development company Hyderabad, food delivery app development service, custom food delivery app development, on-demand food delivery app, zomato clone app development, swiggy clone app, uber eats clone development, restaurant app development Hyderabad",
  alternates: {
    canonical: "https://www.mtouchlabs.com/food-delivery-app-development-service",
  },
  openGraph: {
    title: "Food Delivery App Development Company in Hyderabad | mTouch Labs",
    description:
      "NASSCOM award-winning food delivery app development in Hyderabad. Scalable apps with AI, real-time tracking & secure payments.",
    url: "https://www.mtouchlabs.com/food-delivery-app-development-service",
    siteName: "mTouch Labs",
    type: "website",
    images: [
      {
        url: "https://www.mtouchlabs.com/images/og-food-delivery-app-development.jpg",
        width: 1200,
        height: 630,
        alt: "Food Delivery App Development Company in Hyderabad — mTouch Labs",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Food Delivery App Development Company in Hyderabad | mTouch Labs",
    description:
      "Build scalable food delivery apps with AI, real-time tracking & secure payments. NASSCOM award-winning company in Hyderabad.",
    images: ["https://www.mtouchlabs.com/images/og-food-delivery-app-development.jpg"],
  },
  robots: { index: true, follow: true },
};

/* ─── JSON-LD ─────────────────────────────────────────────── */
const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Food Delivery App Development Service",
  alternateName: "On-Demand Food Delivery App Development",
  provider: {
    "@type": "Organization",
    name: "mTouch Labs",
    url: "https://www.mtouchlabs.com",
    logo: "https://www.mtouchlabs.com/images/logo.png",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Hyderabad",
      addressRegion: "Telangana",
      addressCountry: "IN",
    },
    contactPoint: { "@type": "ContactPoint", telephone: "+91-9390683154", contactType: "customer service" },
    award: "NASSCOM Award",
  },
  description:
    "End-to-end food delivery app development including single restaurant apps, multi-vendor platforms, cloud kitchen solutions, AI-powered delivery platforms, and white-label solutions.",
  areaServed: ["IN", "US", "GB", "AU"],
  serviceType: "Mobile App Development",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "What features should a food delivery app have?", acceptedAnswer: { "@type": "Answer", text: "A food delivery app needs user registration, restaurant listings, menu browsing, cart and checkout, real-time order tracking, multiple payment options, ratings and reviews, push notifications, and customer support chat." } },
    { "@type": "Question", name: "How much does it cost to develop a food delivery app?", acceptedAnswer: { "@type": "Answer", text: "Costs vary by scope. A basic single-restaurant app costs less than a full multi-vendor marketplace with AI features and analytics. Contact mTouch Labs for a custom quote." } },
    { "@type": "Question", name: "How long does it take to build a food delivery app?", acceptedAnswer: { "@type": "Answer", text: "A basic food delivery app typically takes 3–6 months. A full multi-vendor platform like Zomato or Swiggy can take 9–12 months." } },
    { "@type": "Question", name: "Can you build an app like Zomato or Swiggy?", acceptedAnswer: { "@type": "Answer", text: "Yes. mTouch Labs builds scalable multi-vendor food delivery platforms similar to Zomato, Swiggy, and Uber Eats with real-time tracking, restaurant dashboards, and AI features." } },
    { "@type": "Question", name: "Can AI be integrated into a food delivery app?", acceptedAnswer: { "@type": "Answer", text: "Yes — personalized recommendations, smart search, demand forecasting, route optimization, chatbot support, and behavior analytics can all be integrated." } },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home",     item: "https://www.mtouchlabs.com/" },
    { "@type": "ListItem", position: 2, name: "Products", item: "https://www.mtouchlabs.com/on-demand-products-development-company-hyderabad" },
    { "@type": "ListItem", position: 3, name: "Food Delivery App Development", item: "https://www.mtouchlabs.com/food-delivery-app-development-service" },
  ],
};

/* ─── SCROLL-SPY SCRIPT (client-side, SSR-safe) ────────────
   Injected as a plain <script> tag — runs after hydration.
   Uses IntersectionObserver to set data-active="true" on the
   correct <li> in the TOC list whenever a section scrolls
   into view. No React state, no useEffect, pure vanilla JS.
   ──────────────────────────────────────────────────────────── */
const scrollSpyScript = `
(function() {
  if (typeof window === 'undefined') return;
  var ids = ['on-demand','services','app-screens','features','ai-powered','why-choose','process','tech-stack','industries','faq'];

  function activate(id) {
    var items = document.querySelectorAll('[data-toc-id]');
    items.forEach(function(el) {
      el.setAttribute('data-active', el.getAttribute('data-toc-id') === id ? 'true' : 'false');
    });
  }

  function init() {
    var sections = ids.map(function(id){ return document.getElementById(id); }).filter(Boolean);
    if (!sections.length) return;

    var io = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) activate(entry.target.id);
      });
    }, { rootMargin: '-20% 0px -65% 0px', threshold: 0 });

    sections.forEach(function(s){ io.observe(s); });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
`;

/* ─── STATIC DATA ─────────────────────────────────────────── */
const tocItems = [
  { id: "on-demand",   label: "On-Demand Development" },
  { id: "services",    label: "Our Services" },
  { id: "app-screens", label: "App Screens" },
  { id: "features",    label: "App Features" },
  { id: "ai-powered",  label: "AI-Powered" },
  { id: "why-choose",  label: "Why Choose Us" },
  { id: "process",     label: "Our Process" },
  { id: "tech-stack",  label: "Tech Stack" },
  { id: "industries",  label: "Industries" },
  { id: "faq",         label: "FAQ" },
];

const heroStats = [
  { num: "150+", label: "Apps Delivered",      i: 0 },
  { num: "12+",  label: "Years Experience",    i: 1 },
  { num: "98%",  label: "Client Satisfaction", i: 2 },
  { num: "50+",  label: "Expert Developers",   i: 3 },
];

const appTypes = [
  { icon: "🍽️", title: "Single Restaurant Apps",   desc: "Direct ordering and delivery management without relying on third-party marketplaces." },
  { icon: "🌐", title: "Multi-Vendor Platforms",   desc: "Aggregator platforms letting multiple restaurants manage menus and process orders from one system." },
  { icon: "☁️", title: "Cloud Kitchen Apps",       desc: "Efficient order handling and kitchen coordination for delivery-only brands." },
  { icon: "⚙️", title: "Custom On-Demand Apps",   desc: "Unique features, branding, and workflows built from the ground up for your requirements." },
];

const services = [
  { ac: "#6366f1", title: "Custom App Development",     desc: "Fully custom food delivery app from scratch, tailored to your brand and workflows.",
    svg: <svg width="26" height="26" viewBox="0 0 48 48" fill="none" aria-hidden="true"><rect x="6" y="8" width="24" height="32" rx="3" stroke="currentColor" strokeWidth="2.5" fill="none"/><rect x="18" y="12" width="24" height="28" rx="3" stroke="currentColor" strokeWidth="2.5" fill="none"/><path d="M12 16h12M12 22h12M12 28h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg> },
  { ac: "#f59e0b", title: "Multi-Vendor Marketplace",   desc: "Platform linking customers with multiple restaurants — like Zomato or Swiggy.",
    svg: <svg width="26" height="26" viewBox="0 0 48 48" fill="none" aria-hidden="true"><rect x="4" y="14" width="16" height="22" rx="2" stroke="currentColor" strokeWidth="2.5" fill="none"/><rect x="28" y="14" width="16" height="22" rx="2" stroke="currentColor" strokeWidth="2.5" fill="none"/><path d="M20 24h8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeDasharray="4 3"/></svg> },
  { ac: "#ef4444", title: "Restaurant App Solutions",   desc: "Custom programs for online ordering, menu management, and kitchen coordination.",
    svg: <svg width="26" height="26" viewBox="0 0 48 48" fill="none" aria-hidden="true"><path d="M6 18h36v20a4 4 0 01-4 4H10a4 4 0 01-4-4V18z" stroke="currentColor" strokeWidth="2.5" fill="none"/><path d="M6 18l4-10h28l4 10" stroke="currentColor" strokeWidth="2.5" fill="none"/><path d="M18 35h12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg> },
  { ac: "#10b981", title: "Delivery Partner App",       desc: "Order acceptance, live navigation, earnings dashboard, and tracking for drivers.",
    svg: <svg width="26" height="26" viewBox="0 0 48 48" fill="none" aria-hidden="true"><rect x="8" y="16" width="24" height="20" rx="3" stroke="currentColor" strokeWidth="2.5" fill="none"/><circle cx="14" cy="40" r="3" stroke="currentColor" strokeWidth="2.5" fill="none"/><circle cx="26" cy="40" r="3" stroke="currentColor" strokeWidth="2.5" fill="none"/><path d="M32 20l6-8h6v16h-6" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinejoin="round"/></svg> },
  { ac: "#8b5cf6", title: "Cloud Kitchen App",          desc: "Delivery-only kitchen management with efficient order routing and coordination.",
    svg: <svg width="26" height="26" viewBox="0 0 48 48" fill="none" aria-hidden="true"><path d="M8 40V16l16-10 16 10v24H8z" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinejoin="round"/><rect x="18" y="28" width="12" height="12" rx="1" stroke="currentColor" strokeWidth="2" fill="none"/></svg> },
  { ac: "#ec4899", title: "Subscription Delivery",      desc: "Meal plan apps with recurring deliveries, loyalty rewards, and subscription billing.",
    svg: <svg width="26" height="26" viewBox="0 0 48 48" fill="none" aria-hidden="true"><rect x="8" y="8" width="32" height="32" rx="4" stroke="currentColor" strokeWidth="2.5" fill="none"/><path d="M16 20l4 4 8-8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg> },
  { ac: "#0ea5e9", title: "White-Label Solutions",      desc: "Ready-to-brand food delivery apps with full customization for identity and features.",
    svg: <svg width="26" height="26" viewBox="0 0 48 48" fill="none" aria-hidden="true"><rect x="10" y="6" width="28" height="36" rx="4" stroke="currentColor" strokeWidth="2.5" fill="none"/><rect x="16" y="14" width="16" height="10" rx="2" stroke="currentColor" strokeWidth="2" fill="currentColor" fillOpacity="0.12"/></svg> },
  { ac: "#e85d04", title: "API & Payment Integration",  desc: "Third-party APIs, GPS, Razorpay/Stripe/PayPal, Google Maps, and analytics integrations.",
    svg: <svg width="26" height="26" viewBox="0 0 48 48" fill="none" aria-hidden="true"><rect x="4" y="14" width="28" height="20" rx="3" stroke="currentColor" strokeWidth="2.5" fill="none"/><path d="M4 20h28" stroke="currentColor" strokeWidth="2"/><circle cx="38" cy="20" r="8" stroke="currentColor" strokeWidth="2.5" fill="none"/></svg> },
];

const customerFeatures = ["Dashboard","My Orders","My Address Book","Quick Product Search","Order Status Tracking","Sign up / Login","My Favourites","Delivery Time Slots","Product Variant Selection","Apply Coupon","Order Alerts / History","Order Cancellation","Google Location"];
const adminFeatures    = ["User Management","Restaurant Management","Order Management","Analytics and Reporting","Promotions and Discounts","Payment Management","Feedback and Review","Inventory Management","Security and Privacy"];
const deliveryFeatures = ["Order Management","Route Optimization","Real-Time Tracking","Communication Tools","Earnings and Payments","Profile Management","Feedback and Ratings","Support and Help","Geolocation and Mapping"];

const aiFeatures = [
  { icon: "🎯", title: "Personalized Recommendations", desc: "AI learns user tastes to surface relevant restaurants and dishes automatically." },
  { icon: "🔍", title: "Smart Search",                 desc: "Intelligent NLP-powered search understands user intent, not just keywords." },
  { icon: "📈", title: "Demand Forecasting",           desc: "Predict order volumes by time, location, and season to optimise supply." },
  { icon: "🗺️", title: "Route Optimization",          desc: "AI-computed delivery routes cut costs and improve estimated delivery times." },
  { icon: "🤖", title: "Chatbot Support",              desc: "24/7 AI-powered support handles order queries, returns, and complaints." },
  { icon: "📊", title: "Behavior Insights",            desc: "Deep analytics on customer journeys to improve retention and lifetime value." },
];

const whyUs = [
  { icon: "🏆", label: "NASSCOM Award-Winning Company" },
  { icon: "📱", label: "Mobile, Software & AI Expertise" },
  { icon: "📐", label: "Scalable Architecture" },
  { icon: "🎨", label: "Custom UI/UX Design" },
  { icon: "🔒", label: "Secure Payments & Integrations" },
  { icon: "🔄", label: "Agile & Transparent Process" },
  { icon: "🛠️", label: "Post-Launch Support" },
  { icon: "⚡", label: "Fast Time-to-Market" },
];

const processSteps = [
  { n: "01", icon: "🔭", title: "Discovery & Planning",  desc: "We understand your business model, audience, workflows, and growth goals." },
  { n: "02", icon: "🎨", title: "UI/UX Design",          desc: "Intuitive, on-brand interfaces for customers, restaurant owners, and delivery agents." },
  { n: "03", icon: "💻", title: "Development",           desc: "Secure, scalable, feature-rich apps built with modern tech stacks." },
  { n: "04", icon: "🧪", title: "Testing & QA",          desc: "End-to-end testing for performance, security, usability, and reliability." },
  { n: "05", icon: "🚀", title: "Launch & Support",      desc: "Smooth deployment followed by ongoing maintenance, updates, and optimisation." },
];

const techStack = [
  { src: "/images/products/html.png",             alt: "HTML5",            w: 52 },
  { src: "/images/products/css.png",              alt: "CSS3",             w: 38 },
  { src: "/images/products/js.png",               alt: "JavaScript",       w: 68 },
  { src: "/images/products/boot.png",             alt: "Bootstrap",        w: 68 },
  { src: "/images/products/php.png",              alt: "PHP",              w: 68 },
  { src: "/images/products/laverl.png",           alt: "Laravel",          w: 68 },
  { src: "/images/products/flutter.png",          alt: "Flutter",          w: 68 },
  { src: "/images/products/firebase.png",         alt: "Firebase",         w: 68 },
  { src: "/images/products/MySQL.png",            alt: "MySQL",            w: 68 },
  { src: "/images/products/crashlytics.png",      alt: "Crashlytics",      w: 68 },
  { src: "/images/products/Google_Analytics.png", alt: "Google Analytics", w: 68 },
  { src: "/images/products/aws.png",              alt: "AWS",              w: 68 },
];

const appScreens = [
  { src: "/images/products/silder1.png", alt: "Customer app home screen — food delivery UI" },
  { src: "/images/products/silder2.png", alt: "Restaurant listing screen — food delivery app" },
  { src: "/images/products/silder3.png", alt: "Order tracking screen — real-time delivery map" },
  { src: "/images/products/silder4.png", alt: "Cart and checkout — food delivery app screen" },
  { src: "/images/products/silder5.png", alt: "Delivery partner app — order management screen" },
];

const industries = [
  { icon: "🍕", label: "Restaurants" },
  { icon: "☁️", label: "Cloud Kitchens" },
  { icon: "🏬", label: "Multi-Vendor Marketplaces" },
  { icon: "⚡", label: "Quick Commerce" },
  { icon: "🥗", label: "Meal Subscription" },
  { icon: "🛒", label: "Grocery & Food Combos" },
];

const faqData = [
  { q: "What features should a food delivery app have?",         a: "A food delivery app needs user registration, restaurant listings, menu browsing, cart and checkout, real-time order tracking, multiple payment options, ratings and reviews, push notifications, and customer support chat." },
  { q: "How much does it cost to develop a food delivery app?",  a: "Costs vary by scope. A basic single-restaurant app is most affordable. A full multi-vendor platform with AI features, analytics, and integrations requires higher investment. We provide transparent custom quotes." },
  { q: "How long does it take to build a food delivery app?",    a: "A basic food delivery app typically takes 3–6 months. A full multi-vendor platform similar to Zomato or Swiggy can take 9–12 months depending on features and integrations." },
  { q: "Can you build an app like Zomato or Swiggy?",           a: "Yes. mTouch Labs builds scalable multi-vendor food delivery platforms with custom features, real-time tracking, restaurant management dashboards, and AI-powered capabilities." },
  { q: "Can AI be integrated into a food delivery app?",         a: "Yes — personalized recommendations, smart search, demand forecasting, delivery route optimization, chatbot support, and customer behavior analytics can all be integrated." },
  { q: "Do you support third-party integrations?",               a: "Yes. We integrate payment gateways (Razorpay, Stripe, PayPal), Google Maps, Firebase push notifications, CRM tools, analytics platforms, and more." },
  { q: "What business models are supported?",                    a: "We build apps for single restaurants, multi-vendor marketplaces, cloud kitchens, meal subscription services, and quick-commerce food platforms." },
  { q: "Do you provide support after launch?",                   a: "Yes. mTouch Labs provides ongoing post-launch support including performance optimisation, bug fixes, feature enhancements, and server maintenance." },
];

/* ─── PAGE ────────────────────────────────────────────────── */
export default function Page() {
  return (
    <>
      {/* JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Scroll-spy — runs client-side only, SSR renders nothing */}
      <script dangerouslySetInnerHTML={{ __html: scrollSpyScript }} />

      <div className={styles.root}>

        {/* ── BREADCRUMB ── */}
        <nav className={styles.breadcrumb} aria-label="Breadcrumb">
          <Link href="/" className={styles.bcLink}>Home</Link>
          <span className={styles.bcSep} aria-hidden="true">/</span>
          <Link href="/on-demand-products-development-company-hyderabad" className={styles.bcLink}>Products</Link>
          <span className={styles.bcSep} aria-hidden="true">/</span>
          <span className={styles.bcCurrent}>Food Delivery App Development</span>
        </nav>

        {/* ── HERO ── */}
        <section className={styles.hero} aria-labelledby="hero-h1">
          <div className={styles.heroBlob1} aria-hidden="true" />
          <div className={styles.heroBlob2} aria-hidden="true" />
          <div className={styles.heroGrid}  aria-hidden="true" />

          <div className={styles.heroInner}>
            {/* LEFT */}
            <div className={styles.heroLeft}>
              <div className={styles.heroBadge}>
                <span className={styles.heroBadgePulse} aria-hidden="true" />
                Food Delivery App Development Company
              </div>

              <h1 id="hero-h1" className={styles.heroH1}>
                Food Delivery App<br />
                Development Company<br />
                <span className={styles.heroH1Accent}>in Hyderabad</span>
              </h1>

              <p className={styles.heroDesc}>
                Launch a scalable, user-friendly food delivery app with advanced features,
                seamless ordering, real-time tracking, and secure payment integration.
              </p>

              <div className={styles.heroBtns}>
                <Link href="/contact" className={styles.btnPrimary}>
                  Get Free Consultation
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
                <Link href="/contact?type=demo" className={styles.btnOutline}>
                  Request a Demo
                </Link>
              </div>
            </div>

            {/* RIGHT — static image, NO gif */}
            <div className={styles.heroRight}>
              <div className={styles.heroImgWrap}>
                <Image
                  src="/images/products/foodservices.png"
                  alt="Food delivery app development features overview — mTouch Labs Hyderabad"
                  width={560}
                  height={315}
                  priority
                  className={styles.heroImg}
                />
              </div>
              <div className={styles.heroFloat1} aria-hidden="true">
                <span className={styles.heroFloatIcon}>📦</span>
                <div>
                  <strong>Real-Time Tracking</strong>
                  <span>Live GPS updates</span>
                </div>
              </div>
              <div className={styles.heroFloat2} aria-hidden="true">
                <span className={styles.heroFloatIcon}>⭐</span>
                <div>
                  <strong>98% Satisfaction</strong>
                  <span>Client retention rate</span>
                </div>
              </div>
            </div>
          </div>

        </section>

        {/* ── BODY: TOC + CONTENT ── */}
        <div className={styles.body}>

          {/* TOC — sticky, scroll-spy activated via inline JS */}
          <aside className={styles.toc} aria-label="Table of contents">
            <p className={styles.tocTitle}>On This Page</p>
            <nav>
              <ol className={styles.tocList}>
                {tocItems.map((t) => (
                  <li key={t.id} data-toc-id={t.id} data-active="false">
                    <a href={`#${t.id}`} className={styles.tocLink}>
                      <span className={styles.tocDot} aria-hidden="true" />
                      {t.label}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
          </aside>

          {/* CONTENT */}
          <main className={styles.content}>

            {/* ON-DEMAND */}
            <section id="on-demand" className={styles.sec} aria-labelledby="h-ondemand">
              <div className={styles.secLabel}>What We Do</div>
              <h2 id="h-ondemand" className={styles.secH2}>
                On-Demand Food Delivery App Development
              </h2>
              <p className={styles.secLead}>
                <Link href="/mobile-app-development-company" className={styles.textLink}>Food delivery app development services</Link>{" "}
                have transformed how people order food. We build powerful platforms that connect
                customers, restaurants, and delivery partners on a single seamless system.
              </p>

              <div className={styles.splitSection}>
                <div className={styles.splitPhones}>
                  <div className={styles.phone1Wrap}>
                    <Image src="/images/products/phoneframe1.png" alt="Customer-facing food delivery app — phone mockup" width={240} height={480} loading="lazy" className={styles.phoneImg} />
                  </div>
                  <div className={styles.phone2Wrap}>
                    <Image src="/images/products/phoneframe2.png" alt="Restaurant management panel — phone mockup" width={240} height={480} loading="lazy" className={styles.phoneImg} />
                  </div>
                </div>

                <div>
                  <p className={styles.splitIntro}>
                    At mTouch Labs we specialise in creating food delivery apps that transform
                    how restaurants interact with customers. From{" "}
                    <Link href="/ui-ux-design-company" className={styles.textLink}>user-friendly interfaces</Link>{" "}
                    to secure payments, every part is engineered for growth.
                  </p>
                  <div className={styles.appTypeGrid}>
                    {appTypes.map((a) => (
                      <div key={a.title} className={styles.appTypeCard}>
                        <span className={styles.appTypeIcon}>{a.icon}</span>
                        <h3 className={styles.appTypeTitle}>{a.title}</h3>
                        <p  className={styles.appTypeDesc}>{a.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* SERVICES */}
            <section id="services" className={styles.sec} aria-labelledby="h-services">
              <div className={styles.secLabel}>What We Build</div>
              <h2 id="h-services" className={styles.secH2}>Food Delivery App Development Services</h2>
              <p className={styles.secLead}>
                End-to-end services for businesses looking to streamline ordering, improve
                customer experience, and scale revenue.
              </p>
              <div className={styles.svcGrid}>
                {services.map((s) => (
                  <div key={s.title} className={styles.svcCard} style={{ "--ac": s.ac } as React.CSSProperties}>
                    <div className={styles.svcIcon}>{s.svg}</div>
                    <h3 className={styles.svcTitle}>{s.title}</h3>
                    <p  className={styles.svcDesc}>{s.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* APP SCREENS */}
            <section id="app-screens" className={styles.sec} aria-labelledby="h-screens">
              <div className={styles.secLabel}>UI Showcase</div>
              <h2 id="h-screens" className={styles.secH2}>App Screens</h2>
              <p className={styles.secLead}>
                Clean, intuitive interfaces designed for customers, restaurants, and delivery partners.
              </p>
              <div className={styles.screensRow}>
                {appScreens.map((s, i) => (
                  <div key={i} className={styles.screenCard}>
                    <Image src={s.src} alt={s.alt} width={200} height={400} loading="lazy" className={styles.screenImg} />
                  </div>
                ))}
              </div>
            </section>

            {/* FEATURES (CSS-only tabs) */}
            <section id="features" className={styles.sec} aria-labelledby="h-features">
              <div className={styles.secLabel}>Feature Breakdown</div>
              <h2 id="h-features" className={styles.secH2}>Application Features</h2>
              <p className={styles.secLead}>
                Every panel is purpose-built — from the customer ordering experience to admin
                reporting dashboards.
              </p>

              <div className={styles.tabs}>
                <input type="radio" name="fdtab" id="tab-c" className={styles.tabR} defaultChecked />
                <input type="radio" name="fdtab" id="tab-a" className={styles.tabR} />
                <input type="radio" name="fdtab" id="tab-d" className={styles.tabR} />

                <div className={styles.tabBar}>
                  <label htmlFor="tab-c" className={styles.tabLbl}>
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="2"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
                    Customer Panel
                  </label>
                  <label htmlFor="tab-a" className={styles.tabLbl}>
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="3" stroke="currentColor" strokeWidth="2"/><path d="M9 9h6M9 12h6M9 15h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
                    Admin Panel
                  </label>
                  <label htmlFor="tab-d" className={styles.tabLbl}>
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" stroke="currentColor" strokeWidth="2"/><path d="M12 8v4l3 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
                    Delivery Partner
                  </label>
                </div>

                <div className={styles.tabContent}>
                  <div className={`${styles.tabPane} ${styles.paneC}`}>
                    <ul className={styles.chipList}>
                      {customerFeatures.map((f) => (
                        <li key={f} className={styles.chip}>
                          <svg width="11" height="11" viewBox="0 0 12 12" fill="none" aria-hidden="true"><circle cx="6" cy="6" r="5" fill="currentColor" opacity=".15"/><path d="M3.5 6l1.8 1.8L8.5 4.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className={`${styles.tabPane} ${styles.paneA}`}>
                    <ul className={styles.chipList}>
                      {adminFeatures.map((f) => (
                        <li key={f} className={styles.chip}>
                          <svg width="11" height="11" viewBox="0 0 12 12" fill="none" aria-hidden="true"><circle cx="6" cy="6" r="5" fill="currentColor" opacity=".15"/><path d="M3.5 6l1.8 1.8L8.5 4.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className={`${styles.tabPane} ${styles.paneD}`}>
                    <ul className={styles.chipList}>
                      {deliveryFeatures.map((f) => (
                        <li key={f} className={styles.chip}>
                          <svg width="11" height="11" viewBox="0 0 12 12" fill="none" aria-hidden="true"><circle cx="6" cy="6" r="5" fill="currentColor" opacity=".15"/><path d="M3.5 6l1.8 1.8L8.5 4.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* AI */}
            <section id="ai-powered" className={styles.secDark} aria-labelledby="h-ai">
              <div className={styles.aiBlob} aria-hidden="true" />
              <div className={styles.secLabelLight}>Next-Gen Technology</div>
              <h2 id="h-ai" className={styles.secH2Light}>AI-Powered Food Delivery App Development</h2>
              <p className={styles.secLeadLight}>
                We integrate intelligent features that personalise customer journeys, optimise
                operations, and make your platform more competitive and future-ready.
              </p>
              <div className={styles.aiGrid}>
                {aiFeatures.map((f) => (
                  <div key={f.title} className={styles.aiCard}>
                    <span className={styles.aiIcon}>{f.icon}</span>
                    <h3 className={styles.aiTitle}>{f.title}</h3>
                    <p  className={styles.aiDesc}>{f.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* WHY CHOOSE */}
            <section id="why-choose" className={styles.sec} aria-labelledby="h-why">
              <div className={styles.secLabel}>Our Advantage</div>
              <h2 id="h-why" className={styles.secH2}>
                Why Choose mTouch Labs for Food Delivery App Development?
              </h2>
              <p className={styles.secLead}>
                As a trusted food delivery app development company in Hyderabad, we combine deep
                mobile, software, and AI expertise to deliver platforms that scale.
              </p>
              <div className={styles.whyGrid}>
                {whyUs.map((w) => (
                  <div key={w.label} className={styles.whyCard}>
                    <span className={styles.whyIcon}>{w.icon}</span>
                    <span className={styles.whyLabel}>{w.label}</span>
                  </div>
                ))}
              </div>
              <div className={styles.relatedLinks}>
                <p className={styles.relatedTitle}>Explore Related Services</p>
                <div className={styles.relatedRow}>
                  {[
                    { href: "/mobile-app-development-company", label: "Mobile App Development" },
                    { href: "/software-development-company",   label: "Software Development" },
                    { href: "/ai-development-company",         label: "AI Development" },
                    { href: "/on-demand-app-development",      label: "On-Demand App Development" },
                    { href: "/ui-ux-design-services",          label: "UI/UX Design Services" },
                  ].map((l) => (
                    <Link key={l.href} href={l.href} className={styles.relatedChip}>{l.label}</Link>
                  ))}
                </div>
              </div>
            </section>

            {/* PROCESS */}
            <section id="process" className={styles.sec} aria-labelledby="h-process">
              <div className={styles.secLabel}>How We Work</div>
              <h2 id="h-process" className={styles.secH2}>Our Development Process</h2>
              <p className={styles.secLead}>
                A transparent, agile process that ensures quality delivery at every milestone.
              </p>
              <ol className={styles.processList}>
                {processSteps.map((s, i) => (
                  <li key={s.n} className={styles.processItem}>
                    <div className={styles.processLeft}>
                      <div className={styles.processNum}>{s.n}</div>
                      {i < processSteps.length - 1 && <div className={styles.processLine} aria-hidden="true" />}
                    </div>
                    <div className={styles.processCard}>
                      <span className={styles.processIcon}>{s.icon}</span>
                      <div>
                        <h3 className={styles.processTitle}>{s.title}</h3>
                        <p  className={styles.processDesc}>{s.desc}</p>
                      </div>
                    </div>
                  </li>
                ))}
              </ol>
            </section>

            {/* TECH STACK */}
            <section id="tech-stack" className={styles.sec} aria-labelledby="h-tech">
              <div className={styles.secLabel}>Technologies</div>
              <h2 id="h-tech" className={styles.secH2}>Technology We Use</h2>
              <p className={styles.secLead}>
                Advanced tools and frameworks chosen for performance, scalability, and
                long-term maintainability.
              </p>
              <div className={styles.techGrid}>
                {techStack.map((t) => (
                  <div key={t.alt} className={styles.techCard}>
                    <Image src={t.src} alt={t.alt} width={t.w} height={44} loading="lazy" className={styles.techImg} />
                    <span className={styles.techLabel}>{t.alt}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* INDUSTRIES */}
            <section id="industries" className={styles.sec} aria-labelledby="h-industries">
              <div className={styles.secLabel}>Who We Serve</div>
              <h2 id="h-industries" className={styles.secH2}>Industries &amp; Business Models We Support</h2>
              <p className={styles.secLead}>
                Our food delivery app development services suit a wide range of business
                models and delivery operations.
              </p>
              <div className={styles.industryRow}>
                {industries.map((ind) => (
                  <div key={ind.label} className={styles.industryCard}>
                    <span className={styles.industryIcon}>{ind.icon}</span>
                    <span className={styles.industryLabel}>{ind.label}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* CTA */}
            <section className={styles.sec} aria-label="Call to action">
              <div className={styles.ctaBanner}>
              <div className={styles.ctaBannerBlob} aria-hidden="true" />
              <div className={styles.ctaBannerImg}>
                <Image src="/images/products/delivery.png" alt="Get your custom food delivery app — mTouch Labs" width={300} height={340} loading="lazy" className={styles.ctaImg} />
              </div>
              <div className={styles.ctaBannerText}>
                <h2 className={styles.ctaH2}>Get Your Custom Food Delivery App Now</h2>
                <p className={styles.ctaDesc}>
                  Drive your business forward with a customisable food delivery platform
                  built for speed, growth, and real business value.
                </p>
                <div className={styles.ctaBtns}>
                  <Link href="/contact-us" className={styles.btnPrimary}>
                    Let&apos;s Bring Your Idea to Life
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </Link>
                  <Link href="/contact?type=demo" className={styles.btnOutlineLight}>
                    Request a Demo
                  </Link>
                </div>
              </div>
              </div>
            </section>

            {/* FAQ */}
            <section id="faq" className={styles.sec} aria-labelledby="h-faq">
              <div className={styles.secLabel}>Got Questions?</div>
              <h2 id="h-faq" className={styles.secH2}>Frequently Asked Questions</h2>
              <p className={styles.secLead}>
                Everything you need to know about building a food delivery app with mTouch Labs.
              </p>
              <div className={styles.faqList}>
                {faqData.map((f, i) => (
                  <details key={i} className={styles.faqItem}>
                    <summary className={styles.faqSummary}>
                      <span className={styles.faqIdx} aria-hidden="true">{String(i + 1).padStart(2, "0")}</span>
                      <span className={styles.faqQ}>{f.q}</span>
                      <span className={styles.faqToggle} aria-hidden="true" />
                    </summary>
                    <p className={styles.faqA}>{f.a}</p>
                  </details>
                ))}
              </div>
            </section>

          </main>
        </div>
      </div>
    </>
  );
}