import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Milk Delivery App Development Service | mTouch Labs",
  description:
    "mTouch Labs offers milk delivery app development services, building scalable, feature-rich user-friendly mobile apps delivery operations for businesses.",
  keywords:
    "milk delivery app development service, milk delivery app development, milk delivery mobile app, on demand delivery apps, dairy delivery app development, milk order app solutions",
  alternates: {
    canonical: "https://www.mtouchlabs.com/milk-delivery-app-development-service",
  },

  openGraph: {
    title: "Milk Delivery App Development Service | mTouch Labs",
    description: "mTouch Labs offers milk delivery app development services, building scalable, feature-rich user-friendly mobile apps delivery operations for businesses.",
    url: "https://www.mtouchlabs.com/milk-delivery-app-development-service",
    siteName: "mTouch Labs",
    type: "website",
    images: [{ url: "https://www.mtouchlabs.com/images/web-and-mobile-app-development.png", width: 1200, height: 630, alt: "Milk Delivery App Development Service | mTouch Labs" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Milk Delivery App Development Service | mTouch Labs",
    description: "mTouch Labs offers milk delivery app development services, building scalable, feature-rich user-friendly mobile apps delivery operations for businesses.",
    images: ["https://www.mtouchlabs.com/images/web-and-mobile-app-development.png"],
  },
};

function MilkFaqItem({ question, answer }: { question: string; answer: string }) {
  return (
    <details className="milk-faq-item">
      <summary className="milk-faq-question">
        {question}
        <span className="milk-faq-toggle">+</span>
      </summary>
      <div className="milk-faq-answer">{answer}</div>
    </details>
  );
}

export default function MilkDeliveryAppDevelopmentService() {
  const adminPanelItems = [
    "Dashboard Overview",
    "Analytics & Reporting",
    "User Management",
    "Notifications",
    "Product Management",
    "Inventory Management",
    "Order Management",
  ];

  const userPanelItems = [
    "Profile Management",
    "Browse Products",
    "Shopping Cart",
    "Order Products",
    "Track Orders",
    "Payment Options",
    "Customer Support",
  ];

  const deliveryPanelItems = [
    "Order Overview",
    "Route Optimization",
    "Delivery Tracking",
    "Delivery Notifications",
    "Earnings Dashboard",
    "Profile Settings",
    "Order Status Update",
  ];

  const faqData = [
    {
      question: "How can a milk delivery app streamline operations for dairy businesses?",
      answer:
        "A milk delivery app automates order management, subscription tracking, and delivery schedules, helping businesses reduce manual tasks, improve delivery accuracy, and manage vendors efficiently.",
    },
    {
      question: "What innovative features does mTouch Labs include in milk delivery apps?",
      answer:
        "mTouch Labs integrates features like real-time delivery tracking, multiple payment options, push notifications, subscription management, and analytics dashboards to enhance customer experience and operational efficiency.",
    },
    {
      question: "How does mTouch Labs ensure a seamless user experience in milk delivery apps?",
      answer:
        "mTouch Labs focuses on intuitive UI/UX design, fast loading times, easy navigation, and responsive layouts across devices to make ordering milk simple and convenient for end users.",
    },
    {
      question: "Can milk delivery apps support recurring subscriptions and notifications?",
      answer:
        "Yes, modern milk delivery apps can handle recurring deliveries, automated notifications, and alerts for order confirmations, deliveries, or subscription changes to improve customer retention.",
    },
    {
      question: "What factors affect the development timeline for a milk delivery app?",
      answer:
        "The development time depends on app complexity, features, and integrations. A basic app can launch in weeks, while advanced apps with subscription management, vendor support, and analytics dashboards may take a few months.",
    },
  ];

  return (
    <div className="milk-delivery-page">
      {/* Breadcrumb */}
      <nav className="milk-breadcrumb" aria-label="Breadcrumb">
        <Link href="/">Home</Link>
        <span className="milk-breadcrumb-separator">/</span>
        <Link href="/on-demand-products-development-company-hyderabad">Products</Link>
        <span className="milk-breadcrumb-separator">/</span>
        <span className="milk-breadcrumb-active">
          Revolutionize Your Dairy Business with Custom Milk Delivery Solution
        </span>
      </nav>

      {/* Hero Section */}
      <section className="milk-hero-section">
        <div className="milk-hero-content">
          <p className="milk-hero-heading-para">
            Revolutionize Your Dairy Business with Custom
          </p>
          <h1 className="milk-hero-h1">Milk Delivery Solution</h1>
          <div>
            <Link
              href="https://youtu.be/c68vsTArxhE?si=kRUJdGYUY9V6-Ixv"
              target="_blank"
              rel="noopener noreferrer"
              className="milk-hero-demo-btn"
            >
              VIEW DEMO
            </Link>
          </div>
          <div className="milk-hero-gif-wrapper">
            <Image
              src="/images/products/milk/Milk.gif"
              alt="Milk Delivery App Demo"
              width={800}
              height={500}
              className="milk-hero-gif"
              unoptimized
            />
          </div>
        </div>
      </section>

      {/* Header Section */}
      <div className="milk-container">
        <section className="milk-header-section">
          <h2>
            Milk Delivery App <br /> Development Company
          </h2>
          <Image
            src="/images/products/milk/milk-circle-header.svg"
            alt="Milk Circle Header"
            width={120}
            height={120}
          />
        </section>

        <p className="milk-description">
          We are a leading{" "}
          <Link href="https://mtouchlabs.com/milk-delivery-app-development-company" target="_blank">
            milk delivery app development company
          </Link>{" "}
          dedicated to providing top-notch milk delivery app development services. Our skilled milk
          delivery app developers design innovative solutions that cater to your business needs,
          ensuring seamless delivery and exceptional user experiences.
        </p>

        {/* Online Milk Delivery App Section */}
        <section className="milk-content-section">
          <div className="milk-content-img">
            <Image
              src="/images/products/milk/milk-phone-img1.webp"
              alt="Online Milk Delivery App"
              width={400}
              height={600}
            />
          </div>
          <div className="milk-content-text">
            <h3>Online Milk Delivery App</h3>
            <p className="milk-section-heading">
              Our app is built to simplify dairy operations, whether you&#39;re running a small
              family farm or managing a large dairy network.
            </p>
            <p>
              Empower your dairy business with{" "}
              <Link href="/mobile-app-design-company" target="_blank">
                milk delivery app solutions
              </Link>{" "}
              designed to streamline operations and boost customer satisfaction. From small dairies
              to large-scale operations, our apps ensure a seamless, efficient process.
            </p>
            <p>
              From scheduling routes to tracking inventory, our solution empowers your business to
              thrive in today&#39;s competitive market, ensuring both dairy producers and customers
              benefit from a seamless process.
            </p>
            <div className="milk-icons-row">
              <Image
                src="/images/products/milk/OrganicFood_Icon.svg"
                alt="Organic Food Icon"
                width={40}
                height={40}
              />
              <p>Organic Food</p>
              <Image
                src="/images/products/milk/NaturalMilk_Icon.svg"
                alt="Natural Milk Icon"
                width={40}
                height={40}
              />
              <p>Natural Milk</p>
            </div>
          </div>
        </section>

        {/* Desktop / Web Development Section */}
        <div className="milk-desktop-content-section">
          <section className="milk-content-section milk-content-section-narrow">
            <div className="milk-content-text">
              <h6>Discover Services</h6>
              <h3>Milk Delivery Web and App Development Services</h3>
              <p className="milk-section-heading">
                Whether you&#39;re starting a new{" "}
                <Link href="/amazon-web-services-company" target="_blank">
                  milk delivery platform
                </Link>{" "}
                or upgrading an existing system, our solutions are tailored to your needs.
              </p>
              <p>
                We specialize in creating scalable, feature-rich apps that streamline your
                operations while enhancing customer satisfaction. From delivery management to
                subscription tracking, every feature is designed to ensure efficiency.
              </p>
              <p>
                Our customized approach ensures your app grows with your business, helping you
                manage daily tasks with ease and keeping your customers happy with smooth, timely
                deliveries.
              </p>
              <div className="milk-icons-row">
                <Image
                  src="/images/products/milk/OrganicFood_Icon.svg"
                  alt="Organic Food Icon"
                  width={40}
                  height={40}
                />
                <p>Organic Food</p>
                <Image
                  src="/images/products/milk/NaturalMilk_Icon.svg"
                  alt="Natural Milk Icon"
                  width={40}
                  height={40}
                />
                <p>Natural Milk</p>
              </div>
            </div>
            <div className="milk-content-img">
              <Image
                src="/images/products/milk/milk-desktop-img.svg"
                alt="Milk Delivery Desktop View"
                width={500}
                height={400}
              />
            </div>
          </section>
        </div>

        {/* Subscription Section */}
        <section className="milk-content-section">
          <div className="milk-content-img">
            <Image
              src="/images/products/milk/milk-phone-img2.svg"
              alt="Milk Delivery App Screens"
              width={500}
              height={500}
              className="milk-three-screens-img"
            />
          </div>
          <div className="milk-content-text">
            <Image
              src="/images/products/milk/cow.svg"
              alt="Cow Icon"
              width={60}
              height={60}
              className="milk-cow-img"
            />
            <h3>Streamline Your Success with Our Integrated App and Web Services</h3>
            <p>
              Upgrade your{" "}
              <Link href="/ecommerce-app-development-company" target="_blank">
                milk delivery service
              </Link>{" "}
              with our subscription-based app development solution. Easily manage recurring orders,
              automate delivery schedules, and offer multiple payment options for a hassle-free
              experience.
            </p>
            <p>
              Customers can subscribe to daily or weekly deliveries, modify their orders, and
              receive real-time updates on their deliveries. Designed for efficiency, the app
              streamlines operations for vendors and ensures a seamless, reliable service for
              customers, boosting both convenience and satisfaction.
            </p>
          </div>
        </section>
      </div>

      {/* Business Model */}
      <section className="milk-business-model">
        <Image
          src="/images/products/milk/business_model_img.webp"
          alt="Milk Delivery Business Model"
          width={1200}
          height={600}
          className="milk-business-model-img"
        />
      </section>

      {/* Features Section */}
      <section className="milk-features-section">
        <h2>Features of Milk Delivery App</h2>
        <div className="milk-features-grid">
          <div className="milk-features-column">
            <div className="milk-feature-item">
              <h3>App Customization <span>🌿</span></h3>
              <p>
                Tailor the app to suit your business needs with customizable features, branding
                options, and unique functionalities.
              </p>
            </div>
            <div className="milk-feature-item">
              <h3>Admin Dashboard <span>🌿</span></h3>
              <p>
                A comprehensive dashboard for managing customer subscriptions, tracking deliveries,
                and overseeing operations.
              </p>
            </div>
            <div className="milk-feature-item">
              <h3>Inventory &amp; Stock Management <span>🌿</span></h3>
              <p>
                Real-time inventory tracking to ensure product availability and minimize shortages.
              </p>
            </div>
          </div>

          <div className="milk-features-center">
            <Image
              src="/images/products/milk/features_img.webp"
              alt="Milk Delivery Features"
              width={300}
              height={500}
            />
            <Link href="/contact" className="milk-request-quote-btn">
              REQUEST QUOTE
            </Link>
          </div>

          <div className="milk-features-column">
            <div className="milk-feature-item">
              <h3>Push Notifications &amp; Alerts <span>🌿</span></h3>
              <p>
                Instant alerts for order confirmation, delivery status updates, and promotional
                offers to keep users informed.
              </p>
            </div>
            <div className="milk-feature-item">
              <h3>Multi-Payment Gateway Integration <span>🌿</span></h3>
              <p>
                Seamless integration of multiple payment options like credit/debit cards, e-wallets,
                UPI, and cash-on-delivery.
              </p>
            </div>
            <div className="milk-feature-item">
              <h3>Customer Feedback &amp; Ratings <span>🌿</span></h3>
              <p>
                Integrated rating system for customers to provide feedback on deliveries and service
                quality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="milk-process-section">
        <div className="milk-process-content">
          <h6>Transform Your Milk Business With Us</h6>
          <h3>Milk Delivery App &amp; Web Development Process</h3>
          <div className="milk-process-cards">
            <div className="milk-process-card">
              <Image src="/images/products/milk/process1_icon.svg" alt="Planning Icon" width={60} height={60} />
              <h4>Planning &amp; Design</h4>
              <p>Gather requirements, conduct market research, and create wireframes for an intuitive user experience.</p>
              <span className="milk-process-arrow">→</span>
            </div>
            <div className="milk-process-card">
              <Image src="/images/products/milk/process2_icon.svg" alt="Development Icon" width={60} height={60} />
              <h4>Development</h4>
              <p>Build the app and website with robust features, ensuring seamless integration of payment gateways and user-friendly navigation.</p>
              <span className="milk-process-arrow">→</span>
            </div>
            <div className="milk-process-card">
              <Image src="/images/products/milk/process3_icon.svg" alt="Testing Icon" width={60} height={60} />
              <h4>Testing</h4>
              <p>Conduct thorough testing for functionality and performance, addressing any bugs to ensure a smooth launch.</p>
              <span className="milk-process-arrow">→</span>
            </div>
            <div className="milk-process-card">
              <Image src="/images/products/milk/process4_icon.svg" alt="Support Icon" width={60} height={60} />
              <h4>Launch &amp; Support</h4>
              <p>Deploy the app and website, followed by ongoing maintenance and updates based on user feedback for continuous improvement.</p>
              <span className="milk-process-arrow">→</span>
            </div>
          </div>
          <Link href="/contact" className="milk-process-quote-btn">
            REQUEST QUOTE
          </Link>
        </div>
      </section>

      {/* Journey Section */}
      <section className="milk-journey-section">
        <div className="milk-journey-content">
          <h3>
            Transform Your Milk Delivery Service with Custom
            <br /> Web and Mobile Solutions
          </h3>
          <p>
            Build a powerful ecosystem with our tailored web and mobile app solutions that connect
            customers and dairy providers seamlessly. Our integrated approach enhances user
            experience, facilitates smooth transactions, and drives growth for your milk delivery
            service.
          </p>
        </div>
      </section>

      {/* Application Features - CSS-only tabs */}
      <div className="milk-app-features-wrapper">
        <div className="milk-app-features-heading">
          <h3>Application Features</h3>
          <h6>Explore the features of each panel in our milk delivery platform!</h6>
        </div>
        <div className="milk-app-features-container">
          <input type="radio" name="milk-panel-tab" id="milk-tab-admin" className="milk-tab-radio" defaultChecked />
          <input type="radio" name="milk-panel-tab" id="milk-tab-user" className="milk-tab-radio" />
          <input type="radio" name="milk-panel-tab" id="milk-tab-delivery" className="milk-tab-radio" />

          <div className="milk-panel-selector">
            <label htmlFor="milk-tab-admin" className="milk-panel-btn">Admin Panel</label>
            <label htmlFor="milk-tab-user" className="milk-panel-btn">User Panel</label>
            <label htmlFor="milk-tab-delivery" className="milk-panel-btn">Delivery Partner Panel</label>
          </div>

          <div className="milk-panels-wrapper">
            <div className="milk-panel milk-panel-admin">
              <ul className="milk-panel-list">
                {adminPanelItems.map((item, i) => (<li key={i}>{item}</li>))}
              </ul>
            </div>
            <div className="milk-panel milk-panel-user">
              <ul className="milk-panel-list">
                {userPanelItems.map((item, i) => (<li key={i}>{item}</li>))}
              </ul>
            </div>
            <div className="milk-panel milk-panel-delivery">
              <ul className="milk-panel-list">
                {deliveryPanelItems.map((item, i) => (<li key={i}>{item}</li>))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <section className="milk-faq-section">
        <h2 className="milk-faq-heading">Frequently Asked Questions</h2>
        <div className="milk-faq-list">
          {faqData.map((faq, index) => (
            <MilkFaqItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </section>
    </div>
  );
}