import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Social Media App Development Company | mTouch Labs",
  description:
    "mTouch Labs is a leading social media app development company that enhance engagement, connectivity, and community interaction.",
  keywords:
    "social media app development company, social networking app development, social app developers, mobile social app solutions, social engagement app development, community app development",
  alternates: {
    canonical: "https://mtouchlabs.com/social-media-app-development-company",
  },
  openGraph: {
    title: "Mobile app development company | Website development company",
    description:
      "mTouch Labs is a top-tier software development company in India providing Website development and mobile app development for Startups and Enterprises",
    url: "https://mtouchlabs.com",
    siteName: "mTouch Labs",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Mobile app development company | Website development company",
    description:
      "mTouch Labs is a top-tier software development company in India providing Website development and mobile app development for Startups and Enterprises",
  },
};

export default function SocialMediaAppDevelopment() {
  const features = [
    { icon: "/images/products/social/service1.png", label: "User Profiles &\nCustomization" },
    { icon: "/images/products/social/service2.png", label: "Feed & Content\nSharing" },
    { icon: "/images/products/social/service3.png", label: "Private\nMessaging" },
    { icon: "/images/products/social/service4.png", label: "Notifications &\nAlerts" },
  ];

  const services = [
    { icon: "/images/products/service1.png", title: "Custom Social Media App", desc: "Solutions for Communities, Influencers & Enterprises", bg: 1 },
    { icon: "/images/products/social/icon1.png", title: "Social Media App UI/UX", desc: "Captivating & User-Friendly UI/UX Design Solutions", bg: 2 },
    { icon: "/images/products/social/icon2.png", title: "Real-time Chat & Messaging", desc: "Features for Safe Chat & Multimedia Sharing", bg: 3 },
    { icon: "/images/products/social/icon3.png", title: "Video & Live Streaming", desc: "Live Streaming & High-Quality Video Sharing Features", bg: 4 },
    { icon: "/images/products/social/icon7.png", title: "AI Content Recommendation", desc: "Clever Algorithms to Improve User Interaction", bg: 5 },
    { icon: "/images/products/social/icon4.png", title: "Multi-Platform App", desc: "Apps for Web, iOS, and Android Social Networking", bg: 6 },
    { icon: "/images/products/social/icon5.png", title: "Social Media API Integration", desc: "Seamless Integration with Twitter, Facebook & Instagram", bg: 7 },
    { icon: "/images/products/social/icon6.png", title: "Scalable Cloud Hosting", desc: "Stable Backend Development and Safe Data Storage", bg: 8 },
  ];

  const appScreens = [
    "/images/products/social/appscreen1.png",
    "/images/products/social/appscreen2.png",
    "/images/products/social/appscreen3.png",
    "/images/products/social/appscreen4.png",
    "/images/products/social/appscreen5.png",
  ];

  const adminFeatures = [
    "User Management", "Content Management", "Community Management",
    "Analytics and Reporting", "Payment Management", "Promotions and Marketing",
    "Feedback and Review Management",
  ];

  const moderatorFeatures = [
    "Content Moderation", "Live Stream", "User Reports Management",
    "Community Engagement", "User Behavior Monitoring", "Event Management",
    "Spam Detection", "Policy Updates", "Communication Tools",
  ];

  const userFeatures = [
    "Create and Share Content", "Follow/Unfollow Users", "Message and Chat",
    "Social Feed", "Notifications and Alerts", "Profile Management",
    "Reviews and Ratings", "Engagement Tools", "Privacy Settings",
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

  const faqData = [
    {
      question: "What are the key features of a social media app?",
      answer: "Key features of a social media app include user profiles, news feeds, messaging, multimedia sharing, notifications, and integration with other services.",
    },
    {
      question: "What technologies are used in social media app development?",
      answer: "Technologies commonly used in social media app development include programming languages like JavaScript, Swift, and Kotlin, as well as frameworks such as React Native and Flutter. Backend technologies like Node.js and Django are also used, along with cloud services like AWS and Firebase.",
    },
    {
      question: "Will you customize my social media app?",
      answer: "Yes, we offer customization services for social media app development. Our team of experienced developers can tailor your app to meet your specific requirements and preferences. Whether you need additional features, a unique design, or integration with third-party services, we can work with you to customize your app and make it stand out in the market.",
    },
    {
      question: "How do I handle user data and privacy concerns in my social media app?",
      answer: "To address user data and privacy concerns in your social media app, you can implement robust data protection measures, such as encryption and secure authentication, and ensure compliance with relevant data protection regulations, such as GDPR or CCPA.",
    },
    {
      question: "What are some emerging trends in social media app development?",
      answer: "Some emerging trends in social media app development include the integration of augmented reality (AR) and virtual reality (VR) technologies, the use of artificial intelligence (AI) for personalized content recommendations, and the rise of ephemeral content formats such as Stories.",
    },
  ];

  return (
    <div className="social-page">
      {/* Hero Section */}
      <section className="social-hero-section">
        <div className="social-hero-content">
          <h1 className="social-hero-h1">
            Grow Your <br />
            <span className="social-hero-span">Social App </span>
            with <br />Web &amp; App <br /> Development
          </h1>
          <Image
            src="/images/products/social/banner-gif.gif"
            alt="Social Media App Development"
            width={600}
            height={400}
            className="social-hero-gif"
            unoptimized
          />
          <Link
            href="https://www.youtube.com/watch?v=mWcMXqtNP30"
            target="_blank"
            rel="noopener noreferrer"
            className="social-hero-demo-btn"
          >
            View Demo
          </Link>
        </div>
      </section>

      {/* Breadcrumb */}
      <nav className="social-breadcrumb" aria-label="Breadcrumb">
        <Link href="/">Home</Link>
        <span className="social-breadcrumb-sep">/</span>
        <Link href="/on-demand-products-development-company-hyderabad">Products</Link>
        <span className="social-breadcrumb-sep">/</span>
        <span>Grow Your Social App with Web &amp; App Development</span>
      </nav>

      {/* Key Features */}
      <section className="social-key-features">
        <h2 className="social-key-features-heading">Key Features for Seamless Functionality</h2>
        <div className="social-features-row">
          {features.map((f, i) => (
            <div key={i} className="social-feature-item">
              <Image src={f.icon} alt={f.label} width={60} height={60} className="social-feature-icon" />
              <p>{f.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* On-Demand Section */}
      <div className="social-dark-section">
        <div className="social-two-col">
          <div className="social-two-col-img">
            <Image src="/images/products/social/phone1.png" alt="Social Media App" width={400} height={700} className="social-phone-img" />
          </div>
          <div className="social-two-col-text">
            <h2>On - Demand Social Media App Development</h2>
            <p>
              Social networking apps have transformed the way we communicate, share, and interact with others. These
              platforms have become a vital part of our daily lives, offering a multitude of features that cater to
              various needs and preferences. From personal interactions and community building to professional
              networking and content development,{" "}
              <Link href="/social-community-mobile-app-development" target="_blank">
                social media applications
              </Link>{" "}
              offer a dynamic platform for individuals and organisations to connect with a global audience.
            </p>
          </div>
        </div>
      </div>

      {/* Agency Section */}
      <div className="social-agency-section">
        <div className="social-two-col social-two-col-reverse">
          <div className="social-two-col-text">
            <h3>Social Media App Development Agency</h3>
            <p>
              We are passionate about developing{" "}
              <Link href="/custom-software-development-company" target="_blank">
                social media apps
              </Link>{" "}
              that redefine the way people connect and interact online. Our team of trained specialists uses
              cutting-edge technologies and innovative design principles to create platforms that are not only
              feature-rich and safe, but also extremely engaging and user-friendly. Whether you aim to build a niche
              community or a global social network, we provide the expertise and creativity to bring your vision to life.
            </p>
            <Image src="/images/products/diagnostic/dots.png" alt="" width={80} height={20} className="social-dots-img" />
          </div>
          <div className="social-two-col-img">
            <Image src="/images/products/diagnostic/phone2.png" alt="Social Media Agency" width={400} height={700} className="social-phone-img" />
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="social-services-container">
        <div className="social-services-inner">
          <h3 className="social-services-heading">Social Media App Development Services</h3>
          <p className="social-services-para">Comprehensive Social Media App Development Services for Next-Gen Networking</p>
          <div className="social-services-grid">
            {services.map((s, i) => (
              <div key={i} className="social-service-card-main">
                <div className={`social-service-card social-service-card-${s.bg}`}>
                  <Image src={s.icon} alt={s.title} width={48} height={48} />
                </div>
                <h6>{s.title}</h6>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* App Screens */}
      <div className="social-screens-section">
        <div className="social-screens-header">
          <h3>App Screens</h3>
          <h6>Showcasing App Screens for Better Navigation and Engagement</h6>
        </div>
        <div className="social-screens-scroll">
          {appScreens.map((screen, i) => (
            <div key={i} className="social-screen-item">
              <Image src={screen} alt={`Social app screen ${i + 1}`} width={250} height={500} />
            </div>
          ))}
        </div>
      </div>

      {/* Application Features - CSS-only tabs */}
      <div className="social-app-features">
        <div className="social-app-features-heading">
          <h3>Application Features</h3>
          <h6>Key Features That Enhance Your Application&#39;s Functionality and Performance</h6>
        </div>
        <div className="social-app-features-container">
          <input type="radio" name="social-panel-tab" id="social-tab-admin" className="social-tab-radio" defaultChecked />
          <input type="radio" name="social-panel-tab" id="social-tab-moderator" className="social-tab-radio" />
          <input type="radio" name="social-panel-tab" id="social-tab-user" className="social-tab-radio" />

          <div className="social-panel-selector">
            <label htmlFor="social-tab-admin" className="social-panel-btn">Admin Panel</label>
            <label htmlFor="social-tab-moderator" className="social-panel-btn">Moderator Panel</label>
            <label htmlFor="social-tab-user" className="social-panel-btn">User Panel</label>
          </div>

          <div className="social-panels-wrapper">
            <div className="social-panel social-panel-admin">
              <ul>{adminFeatures.map((f, i) => <li key={i}>{f}</li>)}</ul>
            </div>
            <div className="social-panel social-panel-moderator">
              <ul>{moderatorFeatures.map((f, i) => <li key={i}>{f}</li>)}</ul>
            </div>
            <div className="social-panel social-panel-user">
              <ul>{userFeatures.map((f, i) => <li key={i}>{f}</li>)}</ul>
            </div>
          </div>
        </div>
      </div>

      {/* Technology Stack */}
      <div className="social-tech-section">
        <div className="social-tech-heading">
          <h2>Technology We Use</h2>
          <p>Advanced Technologies We Leverage for App Development</p>
        </div>
        <div className="social-tech-grid">
          {techStack.map((tech, i) => (
            <div key={i} className="social-tech-item">
              <Image src={tech.src} width={tech.width} height={60} alt={tech.alt} />
            </div>
          ))}
        </div>
      </div>

      {/* FAQ */}
      <div className="social-faq-section">
        <h3 className="social-faq-heading">FAQ&#39;s</h3>
        <div className="social-faq-list">
          {faqData.map((faq, i) => (
            <details key={i} className="social-faq-item">
              <summary className="social-faq-question">
                {faq.question}
                <span className="social-faq-toggle">+</span>
              </summary>
              <div className="social-faq-answer">{faq.answer}</div>
            </details>
          ))}
        </div>
      </div>
    </div>
  );
}