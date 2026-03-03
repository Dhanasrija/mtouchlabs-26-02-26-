// import type { Metadata } from "next";
// import HeroSection from "@/components/sections/home/HeroSection";
// import TrustedPartnersSection from "@/components/sections/home/TrustedPartnersSection";
// import DigitalSolutionsSection from "@/components/sections/home/DigitalSolutionsSection";
// import WhyChooseSection from "@/components/sections/home/WhyChooseSection";
// import WhatMakesDifferentSection from "@/components/sections/home/WhatMakesDifferentSection";
// import WhyBusinessTrustSection from "@/components/sections/home/WhyBusinessTrustSection";
// import IndustriesSection from "@/components/sections/home/IndustriesSection";
// import TargetAudiencesSection from "@/components/sections/home/TargetAudiencesSection";
// import TestimonialSection from "@/components/sections/home/TestimonialSection";
// import PortfolioSection from "@/components/sections/home/PortfolioSection";
// import TechnologiesSection from "@/components/sections/home/TechnologiesSection";
// import AwardsSection from "@/components/sections/home/AwardsSection";
// import BlogSection from "@/components/sections/home/BlogSection";
// import LocationSection from "@/components/sections/home/LocationSection";
// import FAQSection from "@/components/sections/home/FAQSection";

// export const metadata: Metadata = {
//   title: "Software Development Company | Web | Mobile App",
//   description:
//     "mTouch Labs delivers custom software development, mobile apps, web solutions, AI, and enterprise IT services to drive digital transformation.",
//   keywords:
//     "software development company, generative artificial intelligence, mobile app development, web development, ios app development",
//   alternates: {
//     canonical: "https://mtouchlabs.com/",
//   },
//   openGraph: {
//     title: "Software Development | Web | Mobile App Development Company",
//     description:
//       "mTouch Labs delivers custom software development, mobile apps, web solutions, AI, and enterprise IT services to drive digital transformation.",
//     url: "https://mtouchlabs.com",
//     siteName: "mTouch Labs",
//     type: "website",
//     images: [
//       {
//         url: "https://mtouchlabs.com/images/web-and-mobile-app-development.png",
//         alt: "Mobile App Development Services",
//       },
//     ],
//   },
//   twitter: {
//     card: "summary",
//     title: "mTouch Labs | Software & Mobile App Development Company",
//     description:
//       "mTouch Labs delivers custom software development, mobile apps, web solutions, AI, and enterprise IT services to drive digital transformation.",
//     images: ["https://mtouchlabs.com/images/web-and-mobile-app-development.png"],
//   },
// };

// export default function HomePage() {
//   return (
//     <>
//       <HeroSection />
//       <TrustedPartnersSection />
//       <DigitalSolutionsSection />
//       <WhyChooseSection />
//       <WhatMakesDifferentSection />
//       <WhyBusinessTrustSection />
//       <IndustriesSection />
//       <TargetAudiencesSection />
//       <TestimonialSection />
//       <PortfolioSection />
//       <TechnologiesSection />
//       <AwardsSection />
//       <BlogSection />
//       <LocationSection />
//       <FAQSection />

//       {/* Logo modal — shows all partner logos when "View All" is clicked */}
//       <div className="modal-overlay hide" id="openlogoModal">
//         <div className="logomodal">
//           <div className="modal-content" style={{ background: "#fff", borderRadius: "20px", position: "relative" }}>
//             <span className="js-close-logo-modal" style={{ position: "absolute", top: "15px", right: "20px", fontSize: "28px", cursor: "pointer", color: "#333", fontWeight: "bold" }}>&times;</span>
//             <h3 style={{ marginBottom: "20px", fontSize: "22px", textAlign: "center" }}>Our Trusted Partners</h3>
//             <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: "20px", overflowY: "auto", maxHeight: "450px", padding: "10px" }}>
//               {[
//                 "adjd.png", "l2r.png", "aduri.png", "govt.png", "kezad-logo.png",
//                 "paygenpro.png", "payville.png", "kohere.png", "onlyshops.png", "olt.png",
//                 "fleuncyo.png", "zuppibuy.png", "paygen.png", "voosh.png", "omvideos.png",
//                 "book.png", "uptick.png", "saachi.png", "macServices.png", "drpicklogo.png",
//                 "classy.png", "onus.png", "hitech.svg", "zefsci.png", "medbuz.png",
//                 "veteach.png", "tanyya.png", "heyman.png", "badham.png", "v.png",
//                 "tej.png", "adify.png", "clikget.png", "countryclub.png", "kalp.png",
//                 "roboride.png", "ricehub.png",
//               ].map((logo, i) => (
//                 <div key={i} style={{ border: "1px solid #eee", borderRadius: "12px", padding: "15px", display: "flex", alignItems: "center", justifyContent: "center", minHeight: "80px" }}>
//                   <img src={`/images/home/tech/${logo}`} alt={logo.replace(/\.\w+$/, "")} style={{ maxWidth: "100px", maxHeight: "50px", objectFit: "contain" }} />
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }
import type { Metadata } from "next";
import Script from "next/script";
import HeroSection from "@/components/sections/home/HeroSection";
import TrustedPartnersSection from "@/components/sections/home/TrustedPartnersSection";
import DigitalSolutionsSection from "@/components/sections/home/DigitalSolutionsSection";
import WhyChooseSection from "@/components/sections/home/WhyChooseSection";
import WhatMakesDifferentSection from "@/components/sections/home/WhatMakesDifferentSection";
import WhyBusinessTrustSection from "@/components/sections/home/WhyBusinessTrustSection";
import IndustriesSection from "@/components/sections/home/IndustriesSection";
import TargetAudiencesSection from "@/components/sections/home/TargetAudiencesSection";
import TestimonialSection from "@/components/sections/home/TestimonialSection";
import PortfolioSection from "@/components/sections/home/PortfolioSection";
import TechnologiesSection from "@/components/sections/home/TechnologiesSection";
import AwardsSection from "@/components/sections/home/AwardsSection";
import BlogSection from "@/components/sections/home/BlogSection";
import LocationSection from "@/components/sections/home/LocationSection";
import FAQSection from "@/components/sections/home/FAQSection";

// ─────────────────────────────────────────────────────────────
// SEO + AEO Metadata (2025-2026)
// H1: Global Software Development Company Delivering Scalable Digital Solutions
// ─────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Software Development Company | mTouch Labs",
  description:
    "mTouch Labs is a global software development company delivering custom software solutions, SaaS platforms, Salesforce consulting, cloud engineering, and end-to-end digital transformation services.",
  keywords: [
    "global software development company",
    "custom software development",
    "SaaS product development",
    "Salesforce consulting services",
    "cloud and DevOps solutions",
    "enterprise digital transformation",
    "scalable digital solutions",
    "software development company India",
    "SaaS platform engineering",
    "CRM implementation services",
    "cloud-native architecture",
    "CI/CD pipeline services",
    "business process automation",
    "software development company near me",
    "hire software developers",
  ].join(", "),
  alternates: {
    canonical: "https://mtouchlabs.com/",
  },
  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-image-preview": "large" as const,
    "max-video-preview": -1,
  },
  openGraph: {
    title: "Software Development Company | mTouch Labs",
    description:
      "From product strategy to deployment — mTouch Labs delivers custom software, SaaS platforms, Salesforce consulting, and cloud engineering for startups and enterprises worldwide.",
    url: "https://mtouchlabs.com",
    siteName: "mTouch Labs",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://mtouchlabs.com/images/web-and-mobile-app-development.png",
        width: 1200,
        height: 630,
        alt: "mTouch Labs — Global Software Development Company",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Software Development Company | mTouch Labs",
    description:
      "Custom software, SaaS, Salesforce & cloud solutions for startups and enterprises. Trusted by 50+ businesses worldwide.",
    images: [
      {
        url: "https://mtouchlabs.com/images/web-and-mobile-app-development.png",
        alt: "mTouch Labs — Software Development Services",
      },
    ],
  },
  other: {
    "theme-color": "#0a0a0a",
  },
};

// ─────────────────────────────────────────────────────────────
// JSON-LD Structured Data — Updated for new service positioning
// ─────────────────────────────────────────────────────────────

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "mTouch Labs",
  url: "https://mtouchlabs.com",
  logo: "https://mtouchlabs.com/images/logo.png",
  description:
    "mTouch Labs is a global software development company specializing in custom software development, SaaS product engineering, Salesforce consulting, cloud & DevOps solutions, and enterprise digital transformation.",
  foundingDate: "2018",
  sameAs: [
    "https://www.linkedin.com/company/mtouchlabs",
    "https://twitter.com/mtouchlabs",
    "https://www.facebook.com/mtouchlabs",
    "https://www.instagram.com/mtouchlabs",
  ],
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+91-9390683154",
      contactType: "sales",
      availableLanguage: ["English", "Hindi", "Telugu"],
      areaServed: ["IN", "US", "AE", "GB"],
    },
    {
      "@type": "ContactPoint",
      telephone: "+1-551-222-0070",
      contactType: "sales",
      availableLanguage: "English",
      areaServed: "US",
    },
  ],
  address: [
    {
      "@type": "PostalAddress",
      addressLocality: "Hyderabad",
      addressRegion: "Telangana",
      postalCode: "500072",
      addressCountry: "IN",
    },
    {
      "@type": "PostalAddress",
      addressLocality: "Bengaluru",
      addressRegion: "Karnataka",
      postalCode: "560076",
      addressCountry: "IN",
    },
    {
      "@type": "PostalAddress",
      addressLocality: "Dover",
      addressRegion: "DE",
      postalCode: "19904",
      addressCountry: "US",
    },
  ],
  areaServed: [
    { "@type": "Country", name: "India" },
    { "@type": "Country", name: "United States" },
    { "@type": "Country", name: "United Arab Emirates" },
    { "@type": "Country", name: "United Kingdom" },
  ],
  knowsAbout: [
    "Custom Software Development",
    "SaaS Product Engineering",
    "Salesforce Consulting",
    "Salesforce CRM Implementation",
    "Cloud Engineering",
    "DevOps Solutions",
    "Enterprise Digital Transformation",
    "Business Process Automation",
    "Mobile App Development",
    "Web Application Development",
    "AI & Machine Learning",
    "Multi-tenant SaaS Architecture",
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "mTouch Labs",
  url: "https://mtouchlabs.com",
  description:
    "Global software development company delivering custom software, SaaS platforms, Salesforce consulting, and cloud & DevOps solutions.",
  publisher: {
    "@type": "Organization",
    name: "mTouch Labs",
    url: "https://mtouchlabs.com",
  },
  potentialAction: {
    "@type": "SearchAction",
    target: "https://mtouchlabs.com/search?q={search_term_string}",
    "query-input": "required name=search_term_string",
  },
};

// AEO FAQ — updated to match new service pages
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What does a software development company do?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A software development company designs, develops, and maintains digital applications and systems tailored to business needs. mTouch Labs provides end-to-end custom software, SaaS, cloud, Salesforce CRM, and enterprise digital transformation solutions for startups and enterprises globally.",
      },
    },
    {
      "@type": "Question",
      name: "Do you work with international clients?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. mTouch Labs serves startups and enterprises across North America, Europe, the Middle East, and APAC from offices in Hyderabad, Bangalore, and the United States.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer SaaS and enterprise solutions?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. mTouch Labs develops scalable SaaS platforms with multi-tenant architecture, subscription systems, API integrations, and cloud-native infrastructure, as well as enterprise-grade applications designed for security, performance, and growth.",
      },
    },
    {
      "@type": "Question",
      name: "What custom software development services does mTouch Labs provide?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "mTouch Labs builds tailored software systems including enterprise application development, business process automation, scalable backend architecture, and full-stack web and mobile applications to solve complex business challenges.",
      },
    },
    {
      "@type": "Question",
      name: "Does mTouch Labs offer Salesforce consulting?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. mTouch Labs provides Salesforce implementation, customization, automation workflows, and CRM integrations to help organizations optimize customer relationship management.",
      },
    },
    {
      "@type": "Question",
      name: "What cloud and DevOps services does mTouch Labs offer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "mTouch Labs implements cloud-native environments, CI/CD pipelines, infrastructure automation, and scalable deployment solutions on AWS, Google Cloud, and Azure to accelerate innovation and reduce time-to-market.",
      },
    },
    {
      "@type": "Question",
      name: "Which industries does mTouch Labs serve?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "mTouch Labs delivers digital solutions across financial services, healthcare, retail and e-commerce, logistics and transportation, manufacturing, and SaaS and technology sectors.",
      },
    },
    {
      "@type": "Question",
      name: "Why choose mTouch Labs as a technology partner?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "mTouch Labs offers end-to-end software development expertise, enterprise-grade architecture, agile and DevOps-driven delivery, a global client engagement model, and long-term technology partnerships that go beyond project delivery.",
      },
    },
  ],
};

// Professional Service schema — updated service catalog
const professionalServiceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "mTouch Labs",
  url: "https://mtouchlabs.com",
  image: "https://mtouchlabs.com/images/web-and-mobile-app-development.png",
  description:
    "Global software development company delivering custom software, SaaS platforms, Salesforce consulting, and cloud & DevOps solutions.",
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Hyderabad",
    addressRegion: "Telangana",
    addressCountry: "IN",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    bestRating: "5",
    reviewCount: "50",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Software Development Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Custom Software Development",
          description:
            "Tailored software systems for enterprise application development, business process automation, and scalable backend architecture.",
          url: "https://mtouchlabs.com/custom-software-development-company",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "SaaS Product Development",
          description:
            "Scalable SaaS platforms with multi-tenant architecture, subscription systems, API integrations, and cloud-native infrastructure.",
          url: "https://mtouchlabs.com/saas-development",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Salesforce Consulting & CRM Solutions",
          description:
            "Salesforce implementation, customization, automation workflows, and CRM integrations for optimized customer relationship management.",
          url: "https://mtouchlabs.com/salesforce-consulting-services-company",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Cloud & DevOps Engineering",
          description:
            "Cloud-native environments, CI/CD pipelines, infrastructure automation, and scalable deployment solutions on AWS, GCP, and Azure.",
          url: "https://mtouchlabs.com/devops-services",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Enterprise Digital Transformation",
          description:
            "End-to-end digital transformation services from product strategy to deployment and long-term optimization.",
        },
      },
    ],
  },
};

// SiteNavigationElement schema — internal linking for AI engines
const siteNavSchema = {
  "@context": "https://schema.org",
  "@type": "SiteNavigationElement",
  name: "Main Services",
  hasPart: [
    {
      "@type": "WebPage",
      name: "Custom Software Development Services",
      url: "https://mtouchlabs.com/custom-software-development-company",
    },
    {
      "@type": "WebPage",
      name: "SaaS Development Services",
      url: "https://mtouchlabs.com/saas-development",
    },
    {
      "@type": "WebPage",
      name: "Salesforce Consulting Services",
      url: "https://mtouchlabs.com/salesforce-consulting-services-company",
    },
    {
      "@type": "WebPage",
      name: "Cloud & DevOps Services",
      url: "https://mtouchlabs.com/devops-services",
    },
    {
      "@type": "WebPage",
      name: "Contact mTouch Labs",
      url: "https://mtouchlabs.com/contact-us",
    },
  ],
};

/* ── Home page FAQ data ── */
const homeFaqs = [
  { q: "What does a software development company do?", a: "A software development company designs, develops, and maintains digital applications and systems tailored to business needs. mTouch Labs provides end-to-end custom software, SaaS, cloud, Salesforce CRM, and enterprise digital transformation solutions for startups and enterprises globally." },
  { q: "Do you work with international clients?", a: "Yes. mTouch Labs serves startups and enterprises across North America, Europe, the Middle East, and APAC from offices in Hyderabad, Bangalore, and the United States." },
  { q: "Do you offer SaaS and enterprise solutions?", a: "Yes. mTouch Labs develops scalable SaaS platforms with multi-tenant architecture, subscription systems, API integrations, and cloud-native infrastructure, as well as enterprise-grade applications designed for security, performance, and growth." },
  { q: "What custom software development services does mTouch Labs provide?", a: "mTouch Labs builds tailored software systems including enterprise application development, business process automation, scalable backend architecture, and full-stack web and mobile applications to solve complex business challenges." },
  { q: "Does mTouch Labs offer Salesforce consulting?", a: "Yes. mTouch Labs provides Salesforce implementation, customization, automation workflows, and CRM integrations to help organizations optimize customer relationship management." },
];

export default function HomePage() {
  return (
    <>
      {/* JSON-LD Structured Data for SEO + AEO */}
      <Script
        id="organization-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <Script
        id="website-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <Script
        id="faq-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Script
        id="service-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(professionalServiceSchema),
        }}
      />
      <Script
        id="site-nav-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(siteNavSchema) }}
      />

      {/* Page Sections */}
      <HeroSection />
      <TrustedPartnersSection />
      <DigitalSolutionsSection />
      <WhyChooseSection />
      <WhatMakesDifferentSection />
      <WhyBusinessTrustSection />
      <IndustriesSection />
      <TargetAudiencesSection />
      <TestimonialSection />
      <PortfolioSection />
      <TechnologiesSection />
      <AwardsSection />
      <BlogSection />
      <LocationSection />

      {/* ===== FAQ — matching product page style with chevron icons ===== */}
      <div style={{ padding: "6rem 0", backgroundColor: "rgba(243, 246, 253, 1)" }}>
        <div className="_faq_container">
          <div className="_faq_header">
            <h2 className="_faq_title">Your Questions <span className="_faq_title_highlight">Answered</span> Clearly</h2>
            <p className="_faq_subtitle">Everything you need to know about mTouch Labs</p>
          </div>
          <div className="_faq_list">
            {homeFaqs.map((f, i) => (
              <div className={`_faq_item${i === 0 ? " active glow" : ""}`} key={i}>
                <button className="_faq_question">
                  <span>{f.q}</span>
                  <span className="_faq_chevron" aria-hidden="true"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#08182b" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6" /></svg></span>
                </button>
                <div className="_faq_answer"><p className="_faq_answer_text">{f.a}</p></div>
              </div>
            ))}
          </div>
        </div>
      </div>
<script dangerouslySetInnerHTML={{ __html: `
        document.addEventListener("click", function(e) {
          var btn = e.target.closest("._faq_question");
          if (!btn) return;
          var item = btn.closest("._faq_item");
          var wasActive = item.classList.contains("active");
          document.querySelectorAll("._faq_item").forEach(function(o) { o.classList.remove("active", "glow"); });
          if (!wasActive) { item.classList.add("active", "glow"); }
        });
      ` }} />
      {/* Logo modal — shows all partner logos when "View All" is clicked */}
      <div className="modal-overlay hide" id="openlogoModal">
        <div className="logomodal">
          <div
            className="modal-content"
            style={{
              background: "#fff",
              borderRadius: "20px",
              position: "relative",
            }}
          >
            <span
              className="js-close-logo-modal"
              style={{
                position: "absolute",
                top: "15px",
                right: "20px",
                fontSize: "28px",
                cursor: "pointer",
                color: "#333",
                fontWeight: "bold",
              }}
            >
              &times;
            </span>
            <h3
              style={{
                marginBottom: "20px",
                fontSize: "22px",
                textAlign: "center",
              }}
            >
              Our Trusted Partners
            </h3>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(5, 1fr)",
                gap: "20px",
                overflowY: "auto",
                maxHeight: "450px",
                padding: "10px",
              }}
            >
              {[
                "adjd.png", "l2r.png", "aduri.png", "govt.png", "kezad-logo.png",
                "paygenpro.png", "payville.png", "kohere.png", "onlyshops.png", "olt.png",
                "fleuncyo.png", "zuppibuy.png", "paygen.png", "voosh.png", "omvideos.png",
                "book.png", "uptick.png", "saachi.png", "macServices.png", "drpicklogo.png",
                "classy.png", "onus.png", "hitech.svg", "zefsci.png", "medbuz.png",
                "veteach.png", "tanyya.png", "heyman.png", "badham.png", "v.png",
                "tej.png", "adify.png", "clikget.png", "countryclub.png", "kalp.png",
                "roboride.png", "ricehub.png",
              ].map((logo, i) => (
                <div
                  key={i}
                  style={{
                    border: "1px solid #eee",
                    borderRadius: "12px",
                    padding: "15px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    minHeight: "80px",
                  }}
                >
                  <img
                    src={`/images/home/tech/${logo}`}
                    alt={`${logo.replace(/\.\w+$/, "")} — mTouch Labs partner`}
                    loading="lazy"
                    style={{
                      maxWidth: "100px",
                      maxHeight: "50px",
                      objectFit: "contain",
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <script dangerouslySetInnerHTML={{ __html: `
        (function() {
          function initFaqToggle() {
            var items = document.querySelectorAll('._faq_item');
            if (!items.length) return setTimeout(initFaqToggle, 300);
            items.forEach(function(item) {
              var btn = item.querySelector('._faq_question');
              if (!btn) return;
              btn.addEventListener('click', function() {
                var isOpen = item.classList.contains('active');
                items.forEach(function(i) { i.classList.remove('active', 'glow'); });
                if (!isOpen) { item.classList.add('active', 'glow'); }
              });
            });
          }
          initFaqToggle();
        })();
      `}} />
    </>
  );
}