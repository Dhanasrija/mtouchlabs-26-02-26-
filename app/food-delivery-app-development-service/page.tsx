import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Food Delivery App Development Service | mTouch Labs",
  description:
    "mTouch Labs offers food delivery app development services to build user-friendly mobile apps for restaurants and delivery platforms.",
  alternates: {
    canonical: "https://www.mtouchlabs.com/food-delivery-app-development-service",
  },

  openGraph: {
    title: "Food Delivery App Development Service | mTouch Labs",
    description: "mTouch Labs offers food delivery app development services to build user-friendly mobile apps for restaurants and delivery platforms.",
    url: "https://www.mtouchlabs.com/food-delivery-app-development-service",
    siteName: "mTouch Labs",
    type: "website",
    images: [{ url: "https://www.mtouchlabs.com/images/web-and-mobile-app-development.png", width: 1200, height: 630, alt: "Food Delivery App Development Service | mTouch Labs" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Food Delivery App Development Service | mTouch Labs",
    description: "mTouch Labs offers food delivery app development services to build user-friendly mobile apps for restaurants and delivery platforms.",
    images: ["https://www.mtouchlabs.com/images/web-and-mobile-app-development.png"],
  },
};

export default function Page() {
  const customerFeatures = [
    "Dashboard",
    "My Orders",
    "My Address Book",
    "Quick Product Search",
    "Order Status Tracking",
    "Sign up / Login",
    "My Favourites",
    "Delivery Time Slots",
    "Product Variant Selection",
    "Apply Coupon",
    "Order Alerts / History",
    "Order Cancellation",
    "Google Location",
  ];

  const adminFeatures = [
    "User Management",
    "Restaurant Management",
    "Order Management",
    "Analytics and Reporting",
    "Promotions and Discounts",
    "Payment Management",
    "Feedback and Review",
    "Inventory Management",
    "Security and Privacy",
  ];

  const deliveryFeatures = [
    "Order Management",
    "Route Optimization",
    "Real-Time Tracking",
    "Communication Tools",
    "Earnings and Payments",
    "Profile Management",
    "Feedback and Ratings",
    "Support and Help",
    "Geolocation and Mapping",
  ];

  const techStack = [
    { src: "/images/products/html.png", alt: "HTML5", width: 65 },
    { src: "/images/products/css.png", alt: "CSS3", width: 45 },
    { src: "/images/products/js.png", alt: "JavaScript", width: 95 },
    { src: "/images/products/boot.png", alt: "Bootstrap", width: 95 },
    { src: "/images/products/php.png", alt: "PHP", width: 95 },
    { src: "/images/products/laverl.png", alt: "Laravel", width: 95 },
    { src: "/images/products/flutter.png", alt: "Flutter", width: 95 },
    { src: "/images/products/firebase.png", alt: "Firebase", width: 95 },
    { src: "/images/products/MySQL.png", alt: "MySQL", width: 95 },
    { src: "/images/products/crashlytics.png", alt: "Crashlytics", width: 95 },
    { src: "/images/products/Google_Analytics.png", alt: "Google Analytics", width: 95 },
    { src: "/images/products/aws.png", alt: "AWS", width: 95 },
  ];

  const appScreens = [
    "/images/products/silder1.png",
    "/images/products/silder2.png",
    "/images/products/silder3.png",
    "/images/products/silder4.png",
    "/images/products/silder5.png",
  ];

  const faqData = [
    {
      question: "What features should a food delivery app have",
      answer:
        "A comprehensive food delivery app should include features such as user registration and profiles, restaurant listings, menu browsing, order placement, real-time order tracking, payment integration, ratings and reviews, push notifications, and customer support.",
    },
    {
      question: "How long does it take to develop a food delivery app",
      answer:
        "The development time for a food delivery app can vary based on the complexity and features required. A simple app may take around 3-6 months to develop, while a more complex app can take 9 months or longer.",
    },
    {
      question: "What technologies are used in developing a food delivery app",
      answer:
        "Common technologies include programming languages like Swift and Kotlin for native iOS and Android apps, React Native or Flutter for cross-platform development, and backend technologies like Node.js, Python, or Ruby on Rails. For databases, SQL or NoSQL solutions are often used.",
    },
    {
      question: "Can you integrate third-party services into the app",
      answer:
        "Yes, we can integrate a wide range of third-party services into your food delivery app to enhance its functionality and user experience. Common third-party integrations include payment gateways like Stripe, PayPal, and Square to facilitate secure and diverse payment options. Maps and geolocation services such as Google Maps API are used for location tracking, route optimization, and delivery management.",
    },
    {
      question: "How do you ensure the security of the app",
      answer:
        "Ensuring the security of your food delivery app is a top priority for us. We implement multiple layers of security measures to protect user data, transactions, and the overall integrity of the app. Data encryption using SSL/TLS protocols ensures that sensitive information is protected during transit. Secure authentication mechanisms like OAuth and JWT ensure that only authorized users can access the app's features.",
    },
  ];

  return (
    <>
      {/* Breadcrumb */}
      <div className="AIproduct-breadcrumb" style={{ color: "black" }}>
        <Link href="/" style={{ color: "black" }}>
          Home{" "}
        </Link>
        <span className="AIservices-separator">/</span>
        <Link href="/on-demand-products-development-company-hyderabad" style={{ color: "black" }}>
          Products{" "}
        </Link>
        <span className="AIservices-separator">/</span>
        <span className="active" style={{ color: "black" }}>
          Grow Your Food Delivery with Web &amp; App Solutions
        </span>
      </div>

      {/* Hero Section */}
      <section className="food-delivery-main">
        <div className="foodelivery-delivery-content">
          <Image
            src="/images/products/FoodDelivery.gif"
            className="foodelivery-gif"
            alt="Food Delivery App Development"
            width={600}
            height={400}
            unoptimized
          />
          <h1 className="foodelivery-heading-h1">
            Grow Your <br />
            <span className="food-development-heading">Food Delivery</span> with <br />
            Web &amp; App Solutions
          </h1>
          <Link
            href="https://youtu.be/Zvae5N9p3Gc"
            target="_blank"
            rel="noopener noreferrer"
            className="foodelivery-delivery-button"
            style={{ position: "relative", zIndex: 10, display: "inline-block" }}
          >
            View Demo
          </Link>
        </div>
      </section>

      {/* Page Content */}
      <div className="page1">
        {/* Features Image */}
        <section className="food-delivery-features">
          <Image
            src="/images/products/foodservices.png"
            className="food-delivery-feature-img"
            alt="Food Delivery Features"
            width={1200}
            height={400}
          />
        </section>

        {/* On-Demand Section */}
        <div className="food-delivery-mobile-container">
          <div className="food-delivery-mobile-phone-section">
            <Image
              src="/images/products/phoneframe1.png"
              alt="Food delivery app development agency"
              className="food-delivery-mobile-phone-image"
              width={400}
              height={700}
              loading="lazy"
            />
          </div>
          <div className="food-delivery-mobile-text-section">
            <h3>On-Demand Food Delivery App Development</h3>
            <p>
              <Link
                href="/mobile-app-development-company"
                style={{ color: "#3e8cfb", fontWeight: 600 }}
              >
                Food delivery app development services
              </Link>{" "}
              have transformed the way people order food and get delivered. These applications have
              become an essential part due to the growing desire for speed and convenience.
            </p>
            <p>
              When it comes to designing a food delivery app, there are many crucial services that
              assist businesses in building a successful platform. From creating{" "}
              <Link
                href="/ui-ux-design-company"
                style={{ color: "#3e8cfb", fontWeight: 600 }}
              >
                user-friendly interfaces
              </Link>{" "}
              to integrating secure payment methods, app development services are critical
              to providing a seamless experience for both customers and restaurants.
            </p>
          </div>
        </div>

        {/* Customizable Section */}
        <div className="food-delivery-mobile-customizable-section">
          <Image
            src="/images/products/food11.png"
            className="mobile-customizable-section-img1"
            alt="Custom App Solutions"
            width={200}
            height={200}
            loading="lazy"
          />
          <h2>Custom App Solutions for Your Brand</h2>
          <Image
            src="/images/products/food11.png"
            className="mobile-customizable-section-img2"
            alt="Custom App Solutions"
            width={200}
            height={200}
            loading="lazy"
          />
        </div>

        {/* Online Food Delivery Section */}
        <div className="food-delivery-mobile-container1">
          <div className="food-delivery-mobile-text-section">
            <h3>Online Food Delivery Applications</h3>
            <p>
              At mTouch Labs, we specialise in creating unique
              food delivery apps
              that transform how restaurants and food businesses interact with their customers. Our
              expertise in{" "}
              <Link
                href="/cross-platform-app-development-company"
                style={{ color: "#3e8cfb", fontWeight: 600 }}
              >
                cross-platform app development
              </Link>{" "}
              and deep understanding of the food and beverage industry
              allow us to create solutions that are not only functional but also highly engaging and
              user-friendly.
            </p>
            <p>
              Our Food delivery app solutions are intended to create a seamless experience for both
              customers and restaurant partners. From user-friendly interfaces to secure payment
              gateways, our apps are designed to improve every aspect of the food delivery
              experience.
            </p>
          </div>
          <div className="food-delivery-mobile-phone-section">
            <Image
              src="/images/products/phoneframe2.png"
              alt="Custom food delivery app development services"
              className="food-delivery-mobile-phone-image"
              width={400}
              height={700}
              loading="lazy"
            />
          </div>
        </div>

        {/* Banner Image */}
        <div className="food-delivery-mobile-container2">
          <Image
            src="/images/products/food22.png"
            className="mobile-customizable-section-img"
            alt="Food Delivery Solutions"
            width={1200}
            height={400}
            loading="lazy"
          />
        </div>

        {/* Services Grid */}
        <div className="diagnostic-service-container">
          <div className="service-container">
            <h3 className="service-heading">Food Delivery App Development Services</h3>
            <p className="service-para">Key Services for Food Delivery App Development</p>
            <div className="service-grid">
              <div className="service-card-main">
                <div className="service-card service-card-1">
                  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="6" y="8" width="24" height="32" rx="3" stroke="#6366f1" strokeWidth="2.5" fill="none" />
                    <rect x="18" y="12" width="24" height="28" rx="3" stroke="#6366f1" strokeWidth="2.5" fill="none" />
                    <path d="M12 16h12M12 22h12M12 28h8" stroke="#818cf8" strokeWidth="2" strokeLinecap="round" />
                    <circle cx="36" cy="34" r="5" fill="#c7d2fe" stroke="#6366f1" strokeWidth="2" />
                    <path d="M34 34l1.5 1.5L38 32" stroke="#6366f1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h6>Custom App Development</h6>
                <p>Create a custom food delivery app from the ground up.</p>
              </div>
              <div className="service-card-main">
                <div className="service-card service-card-2">
                  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="4" y="14" width="16" height="22" rx="2" stroke="#f59e0b" strokeWidth="2.5" fill="none" />
                    <rect x="28" y="14" width="16" height="22" rx="2" stroke="#f59e0b" strokeWidth="2.5" fill="none" />
                    <path d="M20 24h8" stroke="#fbbf24" strokeWidth="2.5" strokeLinecap="round" strokeDasharray="4 3" />
                    <circle cx="12" cy="10" r="4" fill="#fef3c7" stroke="#f59e0b" strokeWidth="2" />
                    <circle cx="36" cy="10" r="4" fill="#fef3c7" stroke="#f59e0b" strokeWidth="2" />
                    <circle cx="24" cy="42" r="4" fill="#fef3c7" stroke="#f59e0b" strokeWidth="2" />
                    <path d="M12 14v-0M36 14v-0M24 38v-4" stroke="#fbbf24" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </div>
                <h6>Multi-Vendor Marketplace</h6>
                <p>Create a platform that links patrons and several eateries.</p>
              </div>
              <div className="service-card-main">
                <div className="service-card service-card-3">
                  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 18h36v20a4 4 0 01-4 4H10a4 4 0 01-4-4V18z" stroke="#ef4444" strokeWidth="2.5" fill="none" />
                    <path d="M6 18l4-10h28l4 10" stroke="#ef4444" strokeWidth="2.5" fill="none" />
                    <circle cx="18" cy="28" r="3" fill="#fecaca" stroke="#ef4444" strokeWidth="2" />
                    <circle cx="30" cy="28" r="3" fill="#fecaca" stroke="#ef4444" strokeWidth="2" />
                    <path d="M18 35h12" stroke="#f87171" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </div>
                <h6>Restaurant App Solutions</h6>
                <p>Custom Programs for Restaurant Online Orders.</p>
              </div>
              <div className="service-card-main">
                <div className="service-card service-card-4">
                  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="8" y="16" width="24" height="20" rx="3" stroke="#10b981" strokeWidth="2.5" fill="none" />
                    <circle cx="14" cy="40" r="3" stroke="#10b981" strokeWidth="2.5" fill="none" />
                    <circle cx="26" cy="40" r="3" stroke="#10b981" strokeWidth="2.5" fill="none" />
                    <path d="M32 20l6-8h6v16h-6" stroke="#10b981" strokeWidth="2.5" fill="none" strokeLinejoin="round" />
                    <circle cx="38" cy="40" r="3" stroke="#10b981" strokeWidth="2.5" fill="none" />
                    <path d="M16 10v6M24 8v8" stroke="#6ee7b7" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </div>
                <h6>Delivery Partner App</h6>
                <p>Delivery Acceptance &amp; Tracking Software for Drivers.</p>
              </div>
              <div className="service-card-main">
                <div className="service-card service-card-5">
                  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 40V16l16-10 16 10v24H8z" stroke="#8b5cf6" strokeWidth="2.5" fill="none" strokeLinejoin="round" />
                    <rect x="18" y="28" width="12" height="12" rx="1" stroke="#8b5cf6" strokeWidth="2" fill="none" />
                    <path d="M14 22h6M28 22h6" stroke="#a78bfa" strokeWidth="2" strokeLinecap="round" />
                    <path d="M24 6v4" stroke="#c4b5fd" strokeWidth="2" strokeLinecap="round" />
                    <circle cx="38" cy="10" r="6" fill="#ede9fe" stroke="#8b5cf6" strokeWidth="2" />
                    <path d="M36 10h4M38 8v4" stroke="#8b5cf6" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </div>
                <h6>Cloud Kitchen App</h6>
                <p>Meal Plan Apps with Automated Food Delivery Service.</p>
              </div>
              <div className="service-card-main">
                <div className="service-card service-card-6">
                  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="8" y="8" width="32" height="32" rx="4" stroke="#ec4899" strokeWidth="2.5" fill="none" />
                    <path d="M16 20l4 4 8-8" stroke="#ec4899" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M16 30h16M16 36h10" stroke="#f9a8d4" strokeWidth="2" strokeLinecap="round" />
                    <circle cx="40" cy="8" r="5" fill="#fce7f3" stroke="#ec4899" strokeWidth="2" />
                    <path d="M38.5 8l1 1 2-2" stroke="#ec4899" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h6>Subscription-Based Delivery</h6>
                <p>Offer meal plan apps with recurring food deliveries.</p>
              </div>
              <div className="service-card-main">
                <div className="service-card service-card-7">
                  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="10" y="6" width="28" height="36" rx="4" stroke="#0ea5e9" strokeWidth="2.5" fill="none" />
                    <rect x="16" y="14" width="16" height="10" rx="2" stroke="#0ea5e9" strokeWidth="2" fill="#e0f2fe" />
                    <path d="M16 30h16M16 36h10" stroke="#7dd3fc" strokeWidth="2" strokeLinecap="round" />
                    <circle cx="24" cy="19" r="3" stroke="#0ea5e9" strokeWidth="1.5" fill="none" />
                    <path d="M18 10h12" stroke="#7dd3fc" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </div>
                <h6>White-Label Solutions</h6>
                <p>Offer a pre-made, adaptable app for meal delivery.</p>
              </div>
              <div className="service-card-main">
                <div className="service-card service-card-8">
                  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="4" y="14" width="28" height="20" rx="3" stroke="#f97316" strokeWidth="2.5" fill="none" />
                    <path d="M4 20h28" stroke="#f97316" strokeWidth="2" />
                    <path d="M10 28h8M10 32h5" stroke="#fdba74" strokeWidth="2" strokeLinecap="round" />
                    <circle cx="38" cy="20" r="8" stroke="#f97316" strokeWidth="2.5" fill="none" />
                    <path d="M36 18v4l3 2" stroke="#f97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M32 34l-4 4M36 34l-2 6" stroke="#fdba74" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </div>
                <h6>API &amp; Payment Integration</h6>
                <p>Incorporate third-party APIs, GPS, and payment gateways.</p>
              </div>
            </div>
          </div>
        </div>

        {/* App Screens */}
        <div className="food-delivery-silder">
          <section className="home-partners-block sec-pad">
            <div className="container">
              <div className="food-delivery-silder-header">
                <h3>App Screens</h3>
                <h6>App Screen Design and User Interface</h6>
              </div>
              <div className="food-app-screens-scroll">
                {appScreens.map((screen, i) => (
                  <div key={i} className="food-appscreen">
                    <Image src={screen} alt={`App screen ${i + 1}`} width={250} height={500} className="img-fluid" />
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>

        {/* Application Features - CSS-only tabs */}
        <div className="food-application-features">
          <div className="food-application-features-heading">
            <h3>Application Features</h3>
            <h6>Build a customizable, multi-featured grocery platform with us!</h6>
          </div>
          <div className="food-application-container">
            <input type="radio" name="food-panel-tab" id="food-tab-customer" className="food-tab-radio" defaultChecked />
            <input type="radio" name="food-panel-tab" id="food-tab-admin" className="food-tab-radio" />
            <input type="radio" name="food-panel-tab" id="food-tab-delivery" className="food-tab-radio" />

            <div className="food-application-panel-selector">
              <label htmlFor="food-tab-customer" className="food-application-panel-btn">
                Customer Panel
              </label>
              <label htmlFor="food-tab-admin" className="food-application-panel-btn">
                Admin Panel
              </label>
              <label htmlFor="food-tab-delivery" className="food-application-panel-btn">
                Delivery Partner Panel
              </label>
            </div>

            <div className="food-panels-wrapper">
              <div className="food-panel food-panel-customer">
                <ul>
                  {customerFeatures.map((f, i) => (
                    <li key={i}>{f}</li>
                  ))}
                </ul>
              </div>
              <div className="food-panel food-panel-admin">
                <ul>
                  {adminFeatures.map((f, i) => (
                    <li key={i}>{f}</li>
                  ))}
                </ul>
              </div>
              <div className="food-panel food-panel-delivery">
                <ul>
                  {deliveryFeatures.map((f, i) => (
                    <li key={i}>{f}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Technology Stack */}
        <div className="food-teach-container">
          <div className="food-teach-container-heading">
            <h3>Technology We Use</h3>
            <p>Advanced Tools &amp; Frameworks for Food Delivery App Development</p>
          </div>
          <div className="food-tech-grid">
            {techStack.map((tech, i) => (
              <div key={i} className="food-tech-item">
                <Image src={tech.src} width={tech.width} height={60} alt={tech.alt} />
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section - native details/summary */}
        <div className="food-faq-section">
          <h2 className="food-faq-section-heading">FAQ&#39;s</h2>
          <div className="food-faq">
            {faqData.map((faq, i) => (
              <details key={i} className="food-faq-item">
                <summary className="food-faq-question">
                  {faq.question}
                  <span className="food-faq-toggle">+</span>
                </summary>
                <div className="food-faq-answer">{faq.answer}</div>
              </details>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="food-cta-section">
          <div className="food-cta-content-img">
            <Image
              src="/images/products/delivery.png"
              alt="Delivery Person"
              className="food-cta-image"
              width={400}
              height={400}
            />
          </div>
          <div className="food-cta-content">
            <h2>Get Your Custom Food Delivery App Now</h2>
            <p>
              Drive your business forward with our customizable Food Delivery App Development
              Solutions
            </p>
            <Link href="/contact-us" className="food-cta-button">
              Let&#39;s Bring Your Idea to Life
              <span className="food-button-icon">→</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}