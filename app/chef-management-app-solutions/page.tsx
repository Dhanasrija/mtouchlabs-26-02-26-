import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Chef Management App Solutions | mTouch Labs",
  description:
    "mTouch Labs offers chef management app solutions to streamline kitchen operations, manage chefs, orders, and improve overall kitchen efficiency.",
  keywords:
    "chef management app solutions, chef management app development, kitchen management app, restaurant chef management software, cloud kitchen management app, chef scheduling app, kitchen order management system, food service management app",
  alternates: {
    canonical: "https://www.mtouchlabs.com/chef-management-app-solutions",
  },

  openGraph: {
    title: "Chef Management App Solutions | mTouch Labs",
    description: "mTouch Labs offers chef management app solutions to streamline kitchen operations, manage chefs, orders, and improve overall kitchen efficiency.",
    url: "https://www.mtouchlabs.com/chef-management-app-solutions",
    siteName: "mTouch Labs",
    type: "website",
    images: [{ url: "https://www.mtouchlabs.com/images/web-and-mobile-app-development.png", width: 1200, height: 630, alt: "Chef Management App Solutions | mTouch Labs" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Chef Management App Solutions | mTouch Labs",
    description: "mTouch Labs offers chef management app solutions to streamline kitchen operations, manage chefs, orders, and improve overall kitchen efficiency.",
    images: ["https://www.mtouchlabs.com/images/web-and-mobile-app-development.png"],
  },
};

function ChefFaqItem({ question, answer, defaultOpen }: { question: string; answer: string; defaultOpen?: boolean }) {
  return (
    <details className="chef-faq-item" {...(defaultOpen ? { open: true } : {})}>
      <summary className="chef-faq-question">
        <h3>{question}</h3>
        <span className="chef-faq-toggle-icon">+</span>
      </summary>
      <div className="chef-faq-answer">
        <p>{answer}</p>
      </div>
    </details>
  );
}

export default function ChefManagementAppSolutions() {
  const userFeatures = [
    "User Registration",
    "Profile & Role Management",
    "Task Assignment",
    "Push Notifications",
    "Multi-Language Support",
  ];

  const adminFeatures = [
    "Chef & Staff Management",
    "Kitchen Operations Control",
    "Order & Workflow Monitoring",
    "Real-Time Alerts",
    "Detailed Reports & Analytics",
    "Inventory & Stock Tracking",
    "Recipe Library & Versions",
  ];

  const managerFeatures = [
    "Restaurant/Outlet Management",
    "Performance Monitoring",
    "Recipe Costing & Food Cost Control",
    "Kitchen-Wise Productivity Analysis",
    "Integration with POS & Billing",
    "Vendor & Purchase Order Management",
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
    "/images/products/chef/screen1.png",
    "/images/products/chef/screen2.png",
    "/images/products/chef/screen3.png",
    "/images/products/chef/screen4.png",
    "/images/products/chef/screen5.png",
    "/images/products/chef/screen6.png",
    "/images/products/chef/screen7.png",
  ];

  const services = [
    { icon: "/images/products/chef/1.png", title: "Easy-to-Use Interface", bg: 1 },
    { icon: "/images/products/chef/2.png", title: "Multi-Role Access", bg: 2 },
    { icon: "/images/products/chef/3.png", title: "Cost-Effective Solutions", bg: 3 },
    { icon: "/images/products/chef/4.png", title: "Custom App Development", bg: 4 },
    { icon: "/images/products/chef/5.png", title: "Highly Scalable Architecture", bg: 5 },
    { icon: "/images/products/chef/6.png", title: "Secure Data Management", bg: 6 },
    { icon: "/images/products/chef/7.png", title: "Feature-Rich Modules", bg: 7 },
    { icon: "/images/products/chef/8.png", title: "Modern & Attractive UI", bg: 8 },
  ];

  const faqData = [
    {
      question: "What is a chef management app and how can it help food businesses?",
      answer:
        "A chef management app helps restaurants and food service providers organize kitchen tasks, track orders, manage staff schedules, and monitor inventory in real time, improving kitchen efficiency and service quality.",
    },
    {
      question: "What features does mTouch Labs include in chef management app solutions?",
      answer:
        "mTouch Labs builds chef management apps with features like menu planning, order tracking, recipe management, staff assignments, inventory alerts, performance analytics, and secure access controls to streamline kitchen operations.",
    },
    {
      question: "How does mTouch Labs ensure the app improves kitchen productivity?",
      answer:
        "mTouch Labs focuses on intuitive design, real-time updates, automated task alerts, and easy-to-use dashboards so kitchen staff can track orders, manage workflows, and coordinate tasks without delays.",
    },
    {
      question: "Can a chef management app integrate with POS and other restaurant systems?",
      answer:
        "Yes, chef management apps can integrate with point-of-sale (POS) systems, inventory software, reservations platforms, and accounting tools to provide synchronized data across restaurant operations and eliminate manual entry errors.",
    },
    {
      question: "What benefits can restaurants expect from using a chef management app?",
      answer:
        "Businesses can expect improved order accuracy, faster kitchen workflows, better staff coordination, reduced food waste, and enhanced customer satisfaction through streamlined operations and real-time performance monitoring.",
    },
  ];

  return (
    <div className="chef-page">
      {/* Hero Section */}
      <section className="chef-hero-section">
        <div className="chef-hero-container">
          <div className="chef-hero-text">
            <h1 className="chef-hero-title">
              <span className="chef-highlight-green">Chef Management App<br />Development</span>
            </h1>
            <p className="chef-hero-subtitle">
              Empowering Restaurants, Cloud Kitchens &amp; F&amp;B<br />Brands with Smart Chef Operations
            </p>
          </div>
          <div className="chef-hero-image">
            <Image
              src="/images/products/chef/iphone14_mock.png"
              alt="Chef App Mockup"
              width={500}
              height={600}
              className="chef-hero-mockup"
            />
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="chef-key-features">
        <div className="chef-key-features-container">
          <div className="chef-key-features-image">
            <Image
              src="/images/products/chef/phone1.png"
              alt="Chef App Features"
              width={400}
              height={600}
            />
          </div>
          <div className="chef-key-features-content">
            <h2>Key Features for Seamless<br />Kitchen Operations</h2>
            <div className="chef-feature-cards-grid">
              <div className="chef-feature-card">
                <div className="chef-feature-icon">
                  <Image src="/images/products/chef/receiptManagement.png" alt="Recipe Management" width={50} height={50} />
                </div>
                <h5>Recipe Management</h5>
              </div>
              <div className="chef-feature-card">
                <div className="chef-feature-icon">
                  <Image src="/images/products/chef/stockcontrol.png" alt="Stock Control" width={50} height={50} />
                </div>
                <h5>Stock Control</h5>
              </div>
              <div className="chef-feature-card">
                <div className="chef-feature-icon">
                  <Image src="/images/products/chef/orderTracking.png" alt="Order Tracking" width={50} height={50} />
                </div>
                <h5>Order Tracking</h5>
              </div>
              <div className="chef-feature-card">
                <div className="chef-feature-icon">
                  <Image src="/images/products/chef/analyticalDashboard.png" alt="Analytics Dashboard" width={50} height={50} />
                </div>
                <h5>Analytics Dashboard</h5>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* On-Demand Chef Section */}
      <section className="chef-ondemand-section">
        <Image src="/images/products/chef/leaf.png" alt="Decorative leaf" width={100} height={100} className="chef-leaf-decor" />
        <Image src="/images/products/chef/tomatto.png" alt="Decorative tomato" width={80} height={80} className="chef-tomato-decor" />

        <div className="chef-ondemand-container">
          <div className="chef-ondemand-image">
            <Image
              src="/images/products/chef/section3phone.png"
              alt="On-Demand Chef Management App"
              width={450}
              height={600}
              className="chef-phone-img"
            />
          </div>
          <div className="chef-ondemand-content">
            <h2>On-Demand Chef Management<br />App Development</h2>
            <p>
              Managing chefs, recipes, and kitchen operations manually can slow down your entire
              service chain. With our fully customizable Chef Management App, we help restaurants and
              cloud kitchens streamline workflows, reduce errors, and boost kitchen efficiency.
            </p>
            <p>
              Our solution gives chefs powerful tools to manage daily tasks, track ingredients,
              collaborate with team members, and maintain consistent food quality across every dish.
              Whether you&#39;re running a single restaurant or multiple outlets, our app adapts to
              your operations seamlessly.
            </p>
          </div>
        </div>

        {/* Banner */}
        <div className="chef-custom-banner">
          <div className="chef-banner-inner">
            <h3>
              Every culinary operation is different. We build customized chef management platforms
              that align with your specific business workflows.
            </h3>
          </div>
        </div>
        <Image
          src="/images/products/chef/chef.png"
          alt="Chef"
          width={200}
          height={280}
          className="chef-banner-img"
        />
      </section>

      {/* Custom-Built Section */}
      <section className="chef-custom-built-section">
        <div className="chef-custom-built-container">
          <div className="chef-custom-content">
            <h2>Custom-Built for Your<br />Kitchen Needs</h2>
            <p>
              Every kitchen operates differently. That&#39;s why we design and develop chef
              management apps tailored to your restaurant&#39;s structure—whether it&#39;s dine-in,
              takeaway, delivery, or a multi-brand cloud kitchen. Manage roles, recipes, portion
              sizes, kitchen inventory, and order preparation flows from one robust platform
              engineered for efficiency and accuracy.
            </p>
          </div>
          <div className="chef-custom-image">
            <Image
              src="/images/products/chef/chefSpecial.png"
              alt="Custom Chef App"
              width={500}
              height={400}
              className="chef-custom-img"
            />
          </div>
        </div>
      </section>

      {/* Development Services Section */}
      <section className="chef-services-section">
        <h2>Chef Management App<br />Development Services</h2>
        <div className="chef-services-grid">
          {services.map((service, i) => (
            <div key={i} className="chef-service-card">
              <div className={`chef-service-icon-wrapper chef-service-bg-${service.bg}`}>
                <Image src={service.icon} alt={service.title} width={50} height={50} />
              </div>
              <h5>{service.title}</h5>
            </div>
          ))}
        </div>
        <Image src="/images/products/chef/leaf.png" alt="Decorative leaf" width={100} height={100} className="chef-footer-leaf" />
      </section>

      {/* App Screens Section */}
      <section className="chef-screens-section">
        <h2>App Screens</h2>
        <p className="chef-screens-subtitle">
          Build a customizable, multi-featured Chef<br />Management platform with us!
        </p>
        <div className="chef-screens-scroll">
          {appScreens.map((screen, i) => (
            <div key={i} className="chef-screen-item">
              <Image src={screen} alt={`Chef App Screen ${i + 1}`} width={250} height={500} />
            </div>
          ))}
        </div>
      </section>

      {/* Application Features - CSS-only tabs */}
      <section className="chef-features-tabs-section">
        <h2>Application Features</h2>
        <p className="chef-tabs-subtitle">Build a customizable, multi-featured Hotel platform with us!</p>

        <div className="chef-features-content-box">
          <input type="radio" name="chef-feature-tab" id="chef-tab-user" className="chef-tab-radio" defaultChecked />
          <input type="radio" name="chef-feature-tab" id="chef-tab-admin" className="chef-tab-radio" />
          <input type="radio" name="chef-feature-tab" id="chef-tab-manager" className="chef-tab-radio" />

          <div className="chef-features-tab-nav">
            <label htmlFor="chef-tab-user" className="chef-features-tab-btn">User</label>
            <label htmlFor="chef-tab-admin" className="chef-features-tab-btn">Admin Panel</label>
            <label htmlFor="chef-tab-manager" className="chef-features-tab-btn">Manager Portal</label>
          </div>

          <div className="chef-tab-panels">
            {/* User Panel */}
            <div className="chef-tab-pane chef-tab-pane-user">
              <div className="chef-features-list">
                {userFeatures.map((f, i) => (
                  <div key={i} className="chef-feature-list-item">
                    <span className="chef-check-icon">✓</span>
                    <span>{f}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Admin Panel */}
            <div className="chef-tab-pane chef-tab-pane-admin">
              <div className="chef-features-list">
                {adminFeatures.map((f, i) => (
                  <div key={i} className="chef-feature-list-item">
                    <span className="chef-check-icon">✓</span>
                    <span>{f}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Manager Panel */}
            <div className="chef-tab-pane chef-tab-pane-manager">
              <div className="chef-features-list">
                {managerFeatures.map((f, i) => (
                  <div key={i} className="chef-feature-list-item">
                    <span className="chef-check-icon">✓</span>
                    <span>{f}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="chef-tech-stack-section">
        <h3>Technology Stack</h3>
        <p>Designed with advanced technologies for reliability &amp; performance</p>
        <div className="chef-tech-grid">
          {techStack.map((tech, i) => (
            <div key={i} className="chef-tech-item">
              <Image src={tech.src} alt={tech.alt} width={tech.width} height={60} />
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="chef-faq-section">
        <h2>FAQ&#39;s</h2>
        <div className="chef-faq-container">
          {faqData.map((faq, index) => (
            <ChefFaqItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              defaultOpen={index === 0}
            />
          ))}
        </div>
      </section>
    </div>
  );
}