// import type { Metadata } from "next";
// import Link from "next/link";
// import ServiceHero from "@/components/sections/ServiceHero";
// import FAQSchema from "@/components/seo/FAQSchema";

// export const metadata: Metadata = {
//   title: "Software Development Company in United States",
//   description: "mTouch Labs is a leading software development company in the United States delivering custom software, enterprise applications, cloud, and AI solutions.",
//   keywords: ["software development company in United States","custom software development United States","enterprise software United States"],
//   openGraph: { images: [{ url: "/images/Light.png", width: 1200, height: 630, alt: "mTouch Labs" }],
//     title: "Software Development Company in United States",
//     description: "mTouch Labs is a leading Software Development Company in United States delivering custom software, enterprise applications, cloud services, and AI solutions.",
//     url: "https://www.mtouchlabs.com/software-development-company-usa",
//     type: "website",
//   },
//   alternates: {
//     canonical: "https://www.mtouchlabs.com/software-development-company-usa",
//     languages: {
//       "en-AU": "https://www.mtouchlabs.com/software-development-company-australia",
//       "en-CA": "https://www.mtouchlabs.com/software-development-company-canada",
//       "en-AE": "https://www.mtouchlabs.com/software-development-company-united-arab-emirates",
//       "en-DE": "https://www.mtouchlabs.com/software-development-company-germany",
//       "en-IN": "https://www.mtouchlabs.com/software-development-company-india",
//       "en-IE": "https://www.mtouchlabs.com/software-development-company-ireland",
//       "en-KW": "https://www.mtouchlabs.com/software-development-company-kuwait",
//       "en-NZ": "https://www.mtouchlabs.com/software-development-company-new-zealand",
//       "en-QA": "https://www.mtouchlabs.com/software-development-company-qatar",
//       "en-SA": "https://www.mtouchlabs.com/software-development-company-saudi-arabia",
//       "en-SG": "https://www.mtouchlabs.com/software-development-company-singapore",
//       "en-GB": "https://www.mtouchlabs.com/software-development-company-united-kingdom",
//       "en-US": "https://www.mtouchlabs.com/software-development-company-usa",
//       "x-default": "https://www.mtouchlabs.com/software-development-company-india"
//     }
//   },
//   twitter: {
//     card: "summary_large_image",
//     site: "@mtouchlabs",
//     creator: "@mtouchlabs",
//     title: "Software Development Company in United States | mTouch Labs",
//     description: "mTouch Labs — software development company serving United States with custom software, cloud, AI and enterprise applications.",
//     images: [{ url: "/images/Light.png", alt: "mTouch Labs Software Development Company in United States" }]
//   },
//   robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 }
// };


// const localBusinessSchema = {
//   "@context": "https://schema.org",
//   "@type": "ProfessionalService",
//   "name": "mTouch Labs — Software Development in United States",
//   "url": "https://www.mtouchlabs.com/software-development-company-usa",
//   "description": "mTouch Labs — custom software, enterprise apps, cloud and AI for clients in United States.",
//   "image": "https://www.mtouchlabs.com/images/Light.png",
//   "priceRange": "$$",
//   "areaServed": { "@type": "Country", "name": "United States" },
//   "address": { "@type": "PostalAddress", "addressLocality": "United States", "addressCountry": "US" },
//   "provider": { "@type": "Organization", "name": "mTouch Labs", "url": "https://www.mtouchlabs.com" },
//   "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "reviewCount": "150", "bestRating": "5" }
// };

// const locationBreadcrumb = {
//   "@context": "https://schema.org",
//   "@type": "BreadcrumbList",
//   "itemListElement": [
//     { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.mtouchlabs.com/" },
//     { "@type": "ListItem", "position": 2, "name": "Locations", "item": "https://www.mtouchlabs.com/services" },
//     { "@type": "ListItem", "position": 3, "name": "Software Development Company in United States", "item": "https://www.mtouchlabs.com/software-development-company-usa" }
//   ]
// };

// export default function SoftwareDevelopmentCompanyUsa() {
//   return (
//     <div className="loc-page">
//       <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
//       <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(locationBreadcrumb) }} />
//       {/* ═══ HERO ═══ */}
//       <ServiceHero
//         badge="Software Development"
//         titleLead="Software Development Company in"
//         titleAccent="United States"
//         description="Engineering enterprise-grade digital solutions for U.S. startups, scale-ups, and enterprises nationwide."
//       />

//       {/* ═══ SERVICES ═══ */}
//       <section className="loc-section loc-servicesSection">
//         <div className="loc-sectionInner">
//           <div className="loc-sectionHeader">
//             <h2 className="loc-sectionTitle">
//               Our Services in <span className="loc-highlight">United States</span>
//             </h2>
//             <p className="loc-sectionDesc">
//               End-to-end software development services tailored for United States businesses.
//             </p>
//           </div>
//           <div className="loc-servicesGrid">
//             <div className="loc-serviceCard">
//               <div className="loc-serviceIcon">⚙️</div>
//               <h3 className="loc-serviceTitle">Custom Software Development</h3>
//               <p className="loc-serviceDesc">Tailored enterprise-grade solutions designed for scalability and performance.</p>
//             </div>
//             <div className="loc-serviceCard">
//               <div className="loc-serviceIcon">🏢</div>
//               <h3 className="loc-serviceTitle">Enterprise Applications</h3>
//               <p className="loc-serviceDesc">Robust ERP, CRM, and workflow automation for operational efficiency.</p>
//             </div>
//             <div className="loc-serviceCard">
//               <div className="loc-serviceIcon">📱</div>
//               <h3 className="loc-serviceTitle">Mobile App Development</h3>
//               <p className="loc-serviceDesc">iOS, Android, and cross-platform applications built for growth.</p>
//             </div>
//             <div className="loc-serviceCard">
//               <div className="loc-serviceIcon">☁️</div>
//               <h3 className="loc-serviceTitle">Cloud Services & Migration</h3>
//               <p className="loc-serviceDesc">Cloud-native architecture and secure migration strategies.</p>
//             </div>
//             <div className="loc-serviceCard">
//               <div className="loc-serviceIcon">🤖</div>
//               <h3 className="loc-serviceTitle">AI & Intelligent Automation</h3>
//               <p className="loc-serviceDesc">AI-powered analytics and predictive systems for smarter decisions.</p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ═══ WHY US ═══ */}
//       <section className="loc-section loc-whySection">
//         <div className="loc-sectionInner">
//           <div className="loc-sectionHeader">
//             <h2 className="loc-sectionTitle">
//               Why Businesses Choose <span className="loc-highlight">mTouch Labs</span>
//             </h2>
//           </div>
//           <div className="loc-whyGrid">
//             <div className="loc-whyCard">
//               <div className="loc-whyIcon">👥</div>
//               <div>
//                 <h4 className="loc-whyTitle">Experienced Team</h4>
//                 <p className="loc-whyText">Skilled engineers with deep domain expertise.</p>
//               </div>
//             </div>
//             <div className="loc-whyCard">
//               <div className="loc-whyIcon">🔄</div>
//               <div>
//                 <h4 className="loc-whyTitle">Agile Methodology</h4>
//                 <p className="loc-whyText">Sprint-based delivery for rapid results.</p>
//               </div>
//             </div>
//             <div className="loc-whyCard">
//               <div className="loc-whyIcon">☁️</div>
//               <div>
//                 <h4 className="loc-whyTitle">Cloud-First Architecture</h4>
//                 <p className="loc-whyText">Scalable infrastructure built for performance.</p>
//               </div>
//             </div>
//             <div className="loc-whyCard">
//               <div className="loc-whyIcon">🔒</div>
//               <div>
//                 <h4 className="loc-whyTitle">Enterprise Security</h4>
//                 <p className="loc-whyText">Industry-standard security and compliance.</p>
//               </div>
//             </div>
//             <div className="loc-whyCard">
//               <div className="loc-whyIcon">📊</div>
//               <div>
//                 <h4 className="loc-whyTitle">Transparent Process</h4>
//                 <p className="loc-whyText">Real-time project tracking and reporting.</p>
//               </div>
//             </div>
//             <div className="loc-whyCard">
//               <div className="loc-whyIcon">🛠️</div>
//               <div>
//                 <h4 className="loc-whyTitle">Long-Term Support</h4>
//                 <p className="loc-whyText">Ongoing maintenance and optimization.</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ═══ INDUSTRIES ═══ */}
//       <section className="loc-section loc-industriesSection">
//         <div className="loc-sectionInner">
//           <div className="loc-sectionHeader">
//             <h2 className="loc-sectionTitle">
//               Industries We Serve in <span className="loc-highlight">United States</span>
//             </h2>
//           </div>
//           <div className="loc-industriesGrid">
//             <div className="loc-industryCard">
//               <span className="loc-industryEmoji">🏥</span>
//               <h4 className="loc-industryName">Healthcare & HealthTech</h4>
//             </div>
//             <div className="loc-industryCard">
//               <span className="loc-industryEmoji">💳</span>
//               <h4 className="loc-industryName">Fintech & Banking</h4>
//             </div>
//             <div className="loc-industryCard">
//               <span className="loc-industryEmoji">🛒</span>
//               <h4 className="loc-industryName">E-commerce & Retail</h4>
//             </div>
//             <div className="loc-industryCard">
//               <span className="loc-industryEmoji">🚚</span>
//               <h4 className="loc-industryName">Logistics & Supply Chain</h4>
//             </div>
//             <div className="loc-industryCard">
//               <span className="loc-industryEmoji">📚</span>
//               <h4 className="loc-industryName">Education Technology</h4>
//             </div>
//             <div className="loc-industryCard">
//               <span className="loc-industryEmoji">💼</span>
//               <h4 className="loc-industryName">Enterprise SaaS</h4>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ═══ PROCESS ═══ */}
//       <section className="loc-section loc-processSection">
//         <div className="loc-sectionInner">
//           <div className="loc-sectionHeader">
//             <h2 className="loc-sectionTitle">Our Development Approach</h2>
//             <p className="loc-sectionDesc">
//               A structured process tailored to deliver measurable ROI through scalable digital systems.
//             </p>
//           </div>
//           <div className="loc-processSteps">
//             <div className="loc-processStep">
//               <div className="loc-processNum">01</div>
//               <div className="loc-processStepContent">
//                 <h4 className="loc-processStepTitle">Requirement Analysis</h4>
//                 <p className="loc-processStepDesc">Deep-dive consultation to understand your business needs.</p>
//               </div>
//             </div>
//             <div className="loc-processStep">
//               <div className="loc-processNum">02</div>
//               <div className="loc-processStepContent">
//                 <h4 className="loc-processStepTitle">Architecture Planning</h4>
//                 <p className="loc-processStepDesc">Designing scalable system architecture.</p>
//               </div>
//             </div>
//             <div className="loc-processStep">
//               <div className="loc-processNum">03</div>
//               <div className="loc-processStepContent">
//                 <h4 className="loc-processStepTitle">UI/UX Design</h4>
//                 <p className="loc-processStepDesc">User-centered prototyping and interface design.</p>
//               </div>
//             </div>
//             <div className="loc-processStep">
//               <div className="loc-processNum">04</div>
//               <div className="loc-processStepContent">
//                 <h4 className="loc-processStepTitle">Agile Development</h4>
//                 <p className="loc-processStepDesc">Sprint-based development with CI/CD.</p>
//               </div>
//             </div>
//             <div className="loc-processStep">
//               <div className="loc-processNum">05</div>
//               <div className="loc-processStepContent">
//                 <h4 className="loc-processStepTitle">Quality Testing</h4>
//                 <p className="loc-processStepDesc">Comprehensive testing and optimization.</p>
//               </div>
//             </div>
//             <div className="loc-processStep">
//               <div className="loc-processNum">06</div>
//               <div className="loc-processStepContent">
//                 <h4 className="loc-processStepTitle">Deployment & Support</h4>
//                 <p className="loc-processStepDesc">Launch and ongoing support.</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ═══ FAQ ═══ */}
//       <section className="loc-section loc-faqSection">
//         <div className="loc-sectionInner">
//           <div className="loc-sectionHeader">
//             <h2 className="loc-sectionTitle">
//               Frequently Asked Questions
//             </h2>
//           </div>
//           <div className="loc-faqList">
//             <details className="loc-faqItem">
//               <summary className="loc-faqQuestion">
//                 <span className="loc-faqQuestionText">Why choose a software development company in United States?</span>
//                 <span className="loc-faqChevron">
//                   <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6"/></svg>
//                 </span>
//               </summary>
//               <div className="loc-faqAnswer">United States offers a strong technology ecosystem and access to skilled engineering talent, making it an ideal hub for software development.</div>
//             </details>
//             <details className="loc-faqItem">
//               <summary className="loc-faqQuestion">
//                 <span className="loc-faqQuestionText">Does mTouch Labs provide custom software development in United States?</span>
//                 <span className="loc-faqChevron">
//                   <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6"/></svg>
//                 </span>
//               </summary>
//               <div className="loc-faqAnswer">Yes, we provide fully customized software development services tailored to businesses in United States.</div>
//             </details>
//             <details className="loc-faqItem">
//               <summary className="loc-faqQuestion">
//                 <span className="loc-faqQuestionText">Do you offer mobile app development in United States?</span>
//                 <span className="loc-faqChevron">
//                   <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6"/></svg>
//                 </span>
//               </summary>
//               <div className="loc-faqAnswer">Yes, we develop iOS, Android, and cross-platform mobile applications for businesses across United States.</div>
//             </details>
//             <details className="loc-faqItem">
//               <summary className="loc-faqQuestion">
//                 <span className="loc-faqQuestionText">Can you help with cloud migration and AI solutions?</span>
//                 <span className="loc-faqChevron">
//                   <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6"/></svg>
//                 </span>
//               </summary>
//               <div className="loc-faqAnswer">Yes, we offer cloud migration services and AI-powered automation solutions for United States-based businesses.</div>
//             </details>
//             <details className="loc-faqItem">
//               <summary className="loc-faqQuestion">
//                 <span className="loc-faqQuestionText">Do you provide ongoing support after project completion?</span>
//                 <span className="loc-faqChevron">
//                   <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6"/></svg>
//                 </span>
//               </summary>
//               <div className="loc-faqAnswer">Yes, we offer application maintenance and long-term support services to ensure optimal performance.</div>
//             </details>
//           </div>
//         </div>
//       </section>

//       {/* ═══ CTA ═══ */}
//       <section className="loc-ctaSection">
//         <div className="loc-ctaInner">
//           <h2 className="loc-ctaTitle">Ready to Build Something Great?</h2>
//           <p className="loc-ctaDesc">
//             Partner with mTouch Labs to transform your business with scalable, secure, and innovative software solutions.
//           </p>
//           <div className="loc-ctaActions">
//             <Link href="/contact-us" className="loc-ctaBtnPrimary">
//               Get a Free Consultation →
//             </Link>
//             <Link href="/portfolio" className="loc-ctaBtnSecondary">
//               Explore Our Work
//             </Link>
//           </div>
//         </div>
//       </section>

//       <FAQSchema faqs={[
//     { q: "Why choose a software development company in United States?", a: "United States offers a strong technology ecosystem and access to skilled engineering talent, making it an ideal hub for software development." },
//     { q: "Does mTouch Labs provide custom software development in United States?", a: "Yes, we provide fully customized software development services tailored to businesses in United States." },
//     { q: "Do you offer mobile app development in United States?", a: "Yes, we develop iOS, Android, and cross-platform mobile applications for businesses across United States." },
//     { q: "Can you help with cloud migration and AI solutions?", a: "Yes, we offer cloud migration services and AI-powered automation solutions for United States-based businesses." },
//     { q: "Do you provide ongoing support after project completion?", a: "Yes, we offer application maintenance and long-term support services to ensure optimal performance." }
//   ]} />
//       <script dangerouslySetInnerHTML={{ __html: `
//         (function() {
//           function initAOS() {
//             if (typeof AOS !== "undefined") { AOS.init({ duration: 800, once: true, offset: 80, easing: "ease-out-cubic" }); }
//             else { setTimeout(initAOS, 200); }
//           }
//           initAOS();
//           function animateCounters() {
//             var nums = document.querySelectorAll("[data-count]");
//             if (!nums.length) return setTimeout(animateCounters, 300);
//             var observer = new IntersectionObserver(function(entries) {
//               entries.forEach(function(entry) {
//                 if (entry.isIntersecting && !entry.target.dataset.animated) {
//                   entry.target.dataset.animated = "true";
//                   var target = parseInt(entry.target.dataset.count);
//                   var suffix = entry.target.dataset.suffix || "+";
//                   var duration = 2000;
//                   var startTime = null;
//                   function step(ts) {
//                     if (!startTime) startTime = ts;
//                     var progress = Math.min((ts - startTime) / duration, 1);
//                     var eased = 1 - Math.pow(1 - progress, 3);
//                     entry.target.textContent = Math.floor(eased * target) + suffix;
//                     if (progress < 1) requestAnimationFrame(step);
//                     else entry.target.textContent = target + suffix;
//                   }
//                   requestAnimationFrame(step);
//                 }
//               });
//             }, { threshold: 0.5 });
//             nums.forEach(function(el) { observer.observe(el); });
//           }
//           animateCounters();
//         })();
//       `}} />
//     </div>
//   );
// }




import type { Metadata } from "next";
import Link from "next/link";
import FAQSchema from "@/components/seo/FAQSchema";
import ServiceHero from "@/components/sections/ServiceHero";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.mtouchlabs.com"),

  title: "Software Development Company USA | mTouch Labs",

  description:
    "mTouch Labs is a trusted Software Development Company in the USA delivering custom software, enterprise applications, AI solutions, SaaS platforms, web development, and mobile app development for startups and enterprises.",

  keywords: [
    "Software Development Company USA",
    "Software Development Company in USA",
    "Custom Software Development USA",
    "Enterprise Software Development",
    "Software Development Services USA",
    "AI Development Company",
    "Generative AI Development",
    "SaaS Development Company",
    "Enterprise Application Development",
    "Web Application Development",
    "Mobile App Development Company",
    "Cloud Application Development",
    "Software Engineering Services",
    "Digital Transformation Company",
    "Dedicated Development Team",
    "Technology Consulting",
    "mTouch Labs",
  ],

  alternates: {
    canonical: "https://www.mtouchlabs.com/software-development-company-usa",
  },

  openGraph: {
    title: "Software Development Company USA | mTouch Labs",
    description:
      "Partner with mTouch Labs to build custom software, AI-powered applications, SaaS platforms, enterprise solutions, and scalable web & mobile apps.",
    url: "https://www.mtouchlabs.com/software-development-company-usa",
    siteName: "mTouch Labs",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/images/og/software-development-company-usa.webp",
        width: 1200,
        height: 630,
        alt: "Software Development Company USA | mTouch Labs",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Software Development Company USA | mTouch Labs",
    description:
      "Custom Software, AI Development, Enterprise Solutions, SaaS, Web & Mobile App Development.",
    images: ["/images/og/software-development-company-usa.webp"],
  },

 robots: {
  index: true,
  follow: true,
  googleBot: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-image-preview": "large",
    "max-video-preview": -1,
  },
},

  category: "Technology",

  authors: [
    {
      name: "mTouch Labs",
      url: "https://www.mtouchlabs.com",
    },
  ],

  creator: "mTouch Labs",
  publisher: "mTouch Labs",
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "mTouch Labs — Software Development in the USA",
  url: "https://www.mtouchlabs.com/software-development-company-usa",
  description:
    "mTouch Labs — custom software, enterprise apps, SaaS, AI, and cloud technologies for businesses across the United States.",
  image: "https://www.mtouchlabs.com/images/og/software-development-company-usa.webp",
  priceRange: "$$",
  areaServed: { "@type": "Country", name: "United States" },
  address: {
    "@type": "PostalAddress",
    streetAddress: "1111B South Governors Avenue, Suite 48193",
    addressLocality: "Dover",
    addressRegion: "DE",
    postalCode: "19904",
    addressCountry: "US",
  },
  telephone: "+1-551-222-0070",
  email: "contact@mtouchlabs.com",
  provider: { "@type": "Organization", name: "mTouch Labs", url: "https://www.mtouchlabs.com" },
  aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "500", bestRating: "5" },
};

const locationBreadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.mtouchlabs.com/" },
    { "@type": "ListItem", position: 2, name: "Locations", item: "https://www.mtouchlabs.com/services" },
    {
      "@type": "ListItem",
      position: 3,
      name: "Software Development Company in USA",
      item: "https://www.mtouchlabs.com/software-development-company-usa",
    },
  ],
};

export default function SoftwareDevelopmentCompanyUSA() {
  return (
    <div className="loc-page">
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Sora:wght@600;700;800&display=swap"
        rel="stylesheet"
      />
      <style>{`
        .loc-page {
          --loc-ink: #0F172A;
          --loc-ink-soft: #475569;
          --loc-ink-faint: #94A3B8;
          --loc-bg: #FFFFFF;
          --loc-bg-alt: #F6F8FC;
          --loc-line: #E6EAF2;
          --loc-accent-1: #4338CA;
          --loc-accent-2: #0EA5E9;
          --loc-accent-grad: linear-gradient(120deg, #4338CA 0%, #6D28D9 45%, #0EA5E9 100%);
          --loc-card-shadow: 0 1px 2px rgba(15, 23, 42, 0.04), 0 8px 24px rgba(15, 23, 42, 0.06);
          --loc-card-shadow-hover: 0 4px 10px rgba(15, 23, 42, 0.06), 0 16px 36px rgba(67, 56, 202, 0.12);
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
          color: var(--loc-ink);
          background: var(--loc-bg);
          line-height: 1.65;
          -webkit-font-smoothing: antialiased;
        }

        .loc-page * { box-sizing: border-box; }

        .loc-page a {
          color: var(--loc-accent-1);
          text-decoration: none;
          font-weight: 600;
          transition: color 0.15s ease;
        }
        .loc-page a:hover { color: var(--loc-accent-2); text-decoration: underline; }

        /* ── Section shell ── */
        .loc-section { padding: 4.5rem 1.5rem; }
        .loc-introSection, .loc-whySection { background: var(--loc-bg-alt); }
        .loc-servicesSection, .loc-industriesSection, .loc-processSection, .loc-faqSection { background: var(--loc-bg); }
        .loc-sectionInner { max-width: 1160px; margin: 0 auto; }

        .loc-sectionHeader { text-align: center; max-width: 780px; margin: 0 auto 3rem; }
        .loc-sectionTitle {
          font-family: 'Sora', 'Inter', sans-serif;
          font-size: clamp(1.65rem, 2.6vw, 2.5rem);
          font-weight: 700;
          line-height: 1.25;
          color: var(--loc-ink);
          margin: 0 0 0.9rem;
          letter-spacing: -0.01em;
        }
        .loc-highlight {
          background: var(--loc-accent-grad);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }
        .loc-sectionDesc {
          font-size: 1.05rem;
          color: var(--loc-ink-soft);
          line-height: 1.75;
          margin: 0 auto;
          max-width: 780px;
          text-align: center;
        }
        .loc-sectionDesc.loc-descStandalone {
          margin-top: 2rem;
          padding-top: 1.75rem;
          border-top: 1px dashed var(--loc-line);
        }

        /* ── Intro / paragraph sections ── */
        .loc-introGrid {
          display: grid;
          grid-template-columns: 1.6fr 1fr;
          gap: 3rem;
          align-items: start;
        }
        .loc-introTitle {
          font-family: 'Sora', 'Inter', sans-serif;
          font-size: clamp(1.4rem, 2.2vw, 2rem);
          font-weight: 700;
          color: var(--loc-ink);
          margin: 0 0 1.1rem;
          letter-spacing: -0.01em;
        }
        .loc-introText {
          font-size: 1.02rem;
          color: var(--loc-ink-soft);
          margin: 0 0 1.1rem;
          line-height: 1.8;
        }
        .loc-introText:last-child { margin-bottom: 0; }
        .loc-introText strong { color: var(--loc-ink); font-weight: 600; }

        .loc-introTags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.6rem;
          margin: 1rem 0 1.4rem;
        }
        .loc-introTag {
          display: inline-flex;
          align-items: center;
          padding: 0.45rem 0.95rem;
          background: #FFFFFF;
          border: 1px solid var(--loc-line);
          border-radius: 999px;
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--loc-accent-1);
          white-space: nowrap;
        }
        .loc-introSection .loc-introTag,
        .loc-whySection .loc-introTag { background: #FFFFFF; }
        .loc-introTag a { color: inherit; font-weight: 600; }
        .loc-introTag a:hover { text-decoration: none; color: var(--loc-accent-2); }

        .loc-introStats {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1rem;
          align-content: start;
        }
        .loc-statCard {
          background: #FFFFFF;
          border: 1px solid var(--loc-line);
          border-radius: 16px;
          padding: 1.5rem 1.1rem;
          text-align: center;
          box-shadow: var(--loc-card-shadow);
        }
        .loc-statNum {
          font-family: 'Sora', 'Inter', sans-serif;
          font-size: 1.9rem;
          font-weight: 800;
          background: var(--loc-accent-grad);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          line-height: 1.1;
        }
        .loc-statLabel {
          margin-top: 0.4rem;
          font-size: 0.82rem;
          font-weight: 600;
          color: var(--loc-ink-soft);
        }

        /* ── Card grids (services / why / industries) ── */
        .loc-servicesGrid, .loc-whyGrid, .loc-industriesGrid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
          align-items: stretch;
        }

        .loc-serviceCard, .loc-whyCard, .loc-industryCard {
          background: #FFFFFF;
          border: 1px solid var(--loc-line);
          border-radius: 18px;
          padding: 1.75rem;
          box-shadow: var(--loc-card-shadow);
          transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
          display: flex;
          flex-direction: column;
          height: 100%;
        }
        .loc-serviceCard:hover, .loc-whyCard:hover, .loc-industryCard:hover {
          transform: translateY(-4px);
          box-shadow: var(--loc-card-shadow-hover);
          border-color: #C7D2FE;
        }

        .loc-serviceIcon {
          width: 48px; height: 48px;
          display: flex; align-items: center; justify-content: center;
          font-size: 1.4rem;
          background: var(--loc-bg-alt);
          border-radius: 12px;
          margin-bottom: 1.1rem;
        }
        .loc-serviceTitle {
          font-size: 1.08rem;
          font-weight: 700;
          color: var(--loc-ink);
          margin: 0 0 0.55rem;
          line-height: 1.4;
        }
        .loc-serviceTitle a { color: var(--loc-ink); }
        .loc-serviceTitle a:hover { color: var(--loc-accent-1); text-decoration: none; }
        .loc-serviceDesc {
          font-size: 0.92rem;
          color: var(--loc-ink-soft);
          line-height: 1.65;
          margin: 0;
          flex-grow: 1;
        }
        .loc-serviceCard .loc-introTags { margin: 0.9rem 0 0; }
        .loc-serviceCard .loc-introTag { font-size: 0.76rem; padding: 0.32rem 0.7rem; }

        .loc-whyCard { flex-direction: row; align-items: flex-start; gap: 1rem; }
        .loc-whyIcon {
          flex-shrink: 0;
          width: 46px; height: 46px;
          display: flex; align-items: center; justify-content: center;
          font-size: 1.3rem;
          background: var(--loc-bg-alt);
          border-radius: 12px;
        }
        .loc-whyTitle {
          font-size: 1rem;
          font-weight: 700;
          color: var(--loc-ink);
          margin: 0 0 0.3rem;
          line-height: 1.4;
        }
        .loc-whyText {
          font-size: 0.9rem;
          color: var(--loc-ink-soft);
          margin: 0;
          line-height: 1.6;
        }
        .loc-whyCard .loc-introTags { margin-top: 0.6rem; }
        .loc-whyCard .loc-introTag { font-size: 0.74rem; padding: 0.3rem 0.65rem; }

        .loc-industryCard { align-items: center; text-align: center; }
        .loc-industryEmoji { font-size: 2.1rem; margin-bottom: 0.75rem; display: block; }
        .loc-industryName {
          font-size: 1rem;
          font-weight: 700;
          color: var(--loc-ink);
          margin: 0 0 0.4rem;
        }
        .loc-industryCard .loc-serviceDesc { text-align: center; }

        /* ── Process timeline ── */
        .loc-processSteps {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
        }
        .loc-processStep {
          display: flex;
          gap: 1rem;
          background: var(--loc-bg-alt);
          border: 1px solid var(--loc-line);
          border-radius: 18px;
          padding: 1.6rem;
        }
        .loc-processNum {
          flex-shrink: 0;
          width: 44px; height: 44px;
          display: flex; align-items: center; justify-content: center;
          border-radius: 12px;
          background: var(--loc-accent-grad);
          color: #FFFFFF;
          font-family: 'Sora', 'Inter', sans-serif;
          font-weight: 700;
          font-size: 0.95rem;
        }
        .loc-processStepTitle {
          font-size: 1rem;
          font-weight: 700;
          color: var(--loc-ink);
          margin: 0 0 0.35rem;
        }
        .loc-processStepDesc {
          font-size: 0.88rem;
          color: var(--loc-ink-soft);
          margin: 0;
          line-height: 1.6;
        }

        /* ── FAQ accordion ── */
        .loc-faqList {
          display: flex;
          flex-direction: column;
          gap: 0.8rem;
          max-width: 860px;
          margin: 0 auto;
        }
        .loc-faqItem {
          background: var(--loc-bg-alt);
          border: 1px solid var(--loc-line);
          border-radius: 14px;
          padding: 0;
          overflow: hidden;
        }
        .loc-faqQuestion {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
          padding: 1.15rem 1.4rem;
          cursor: pointer;
          list-style: none;
          font-weight: 600;
          color: var(--loc-ink);
          font-size: 0.98rem;
        }
        .loc-faqQuestion::-webkit-details-marker { display: none; }
        .loc-faqChevron {
          flex-shrink: 0;
          display: flex;
          color: var(--loc-accent-1);
          transition: transform 0.2s ease;
        }
        .loc-faqItem[open] .loc-faqChevron { transform: rotate(180deg); }
        .loc-faqAnswer {
          padding: 0 1.4rem 1.3rem;
          font-size: 0.92rem;
          color: var(--loc-ink-soft);
          line-height: 1.7;
        }

        /* ── CTA sections ── */
        .loc-ctaSection {
          background: var(--loc-accent-grad);
          padding: 4rem 1.5rem;
        }
        .loc-ctaInner {
          max-width: 780px;
          margin: 0 auto;
          text-align: center;
        }
        .loc-ctaTitle {
          font-family: 'Sora', 'Inter', sans-serif;
          font-size: clamp(1.5rem, 2.4vw, 2.1rem);
          font-weight: 700;
          color: #FFFFFF;
          margin: 0 0 1rem;
          letter-spacing: -0.01em;
        }
        .loc-ctaDesc {
          font-size: 1rem;
          color: rgba(255,255,255,0.9);
          line-height: 1.75;
          margin: 0 0 2rem;
        }
        .loc-ctaActions {
          display: flex;
          flex-wrap: wrap;
          gap: 0.9rem;
          justify-content: center;
        }
        .loc-ctaBtnPrimary {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          padding: 0.9rem 1.8rem;
          background: #FFFFFF;
          color: var(--loc-accent-1) !important;
          border-radius: 999px;
          font-weight: 700;
          font-size: 0.95rem;
          transition: transform 0.15s ease, box-shadow 0.15s ease;
        }
        .loc-ctaBtnPrimary:hover, .loc-ctaBtnPrimary:focus { transform: translateY(-2px); box-shadow: 0 10px 24px rgba(0,0,0,0.18); text-decoration: none !important; }
        .loc-ctaBtnSecondary {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          padding: 0.9rem 1.8rem;
          background: transparent;
          color: #FFFFFF !important;
          border: 1.5px solid rgba(255,255,255,0.6);
          border-radius: 999px;
          font-weight: 700;
          font-size: 0.95rem;
          transition: background 0.15s ease, transform 0.15s ease;
        }
        .loc-ctaBtnSecondary:hover, .loc-ctaBtnSecondary:focus { background: rgba(255,255,255,0.12); transform: translateY(-2px); text-decoration: none !important; }

        /* ── Keyframes ── */
        @keyframes locFadeUp {
          from { opacity: 0; transform: translateY(18px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes locFadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        /* ── Detail cards (services in depth / solutions in depth) ── */
        .loc-detailGrid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.5rem;
        }
        .loc-detailCard {
          position: relative;
          background: #FFFFFF;
          border: 1px solid var(--loc-line);
          border-radius: 20px;
          padding: 2rem 2.2rem;
          box-shadow: var(--loc-card-shadow);
          overflow: hidden;
          animation: locFadeUp 0.7s ease both;
          transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
        }
        .loc-detailCard::before {
          content: '';
          position: absolute;
          left: 0; top: 0; bottom: 0;
          width: 5px;
          background: var(--loc-accent-grad);
          opacity: 0.85;
        }
        .loc-detailCard:hover {
          transform: translateY(-3px);
          box-shadow: var(--loc-card-shadow-hover);
          border-color: #C7D2FE;
        }
        .loc-detailHead {
          display: flex;
          align-items: center;
          gap: 0.9rem;
          margin-bottom: 0.9rem;
        }
        .loc-detailNum {
          flex-shrink: 0;
          width: 40px; height: 40px;
          display: flex; align-items: center; justify-content: center;
          border-radius: 10px;
          background: var(--loc-bg-alt);
          color: var(--loc-accent-1);
          font-family: 'Sora', 'Inter', sans-serif;
          font-weight: 800;
          font-size: 0.9rem;
        }
        .loc-detailTitle {
          font-family: 'Sora', 'Inter', sans-serif;
          font-size: 1.2rem;
          font-weight: 700;
          color: var(--loc-ink);
          margin: 0;
        }
        .loc-detailTitle a { color: var(--loc-ink); }
        .loc-detailTitle a:hover { color: var(--loc-accent-1); text-decoration: none; }
        .loc-detailDesc {
          font-size: 0.95rem;
          color: var(--loc-ink-soft);
          line-height: 1.75;
          margin: 0 0 1.1rem;
        }
        .loc-detailBlock { margin-bottom: 0.9rem; }
        .loc-detailBlock:last-child { margin-bottom: 0; }
        .loc-detailLabel {
          font-size: 0.75rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--loc-accent-1);
          margin: 0 0 0.55rem;
        }
        .loc-detailTagRow {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }
        .loc-detailTag {
          display: inline-flex;
          align-items: center;
          padding: 0.4rem 0.85rem;
          background: var(--loc-bg-alt);
          border: 1px solid var(--loc-line);
          border-radius: 999px;
          font-size: 0.8rem;
          font-weight: 600;
          color: var(--loc-ink-soft);
        }
        .loc-detailBenefits {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem 1.2rem;
        }
        .loc-detailBenefit {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--loc-ink);
        }
        .loc-detailBenefit .loc-checkMark {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 18px; height: 18px;
          border-radius: 50%;
          background: #DCFCE7;
          color: #16A34A;
          font-size: 0.7rem;
          flex-shrink: 0;
        }
        .loc-detailCard:nth-child(1) { animation-delay: 0.02s; }
        .loc-detailCard:nth-child(2) { animation-delay: 0.08s; }
        .loc-detailCard:nth-child(3) { animation-delay: 0.14s; }
        .loc-detailCard:nth-child(4) { animation-delay: 0.20s; }
        .loc-detailCard:nth-child(5) { animation-delay: 0.26s; }
        .loc-detailCard:nth-child(6) { animation-delay: 0.32s; }
        .loc-detailCard:nth-child(7) { animation-delay: 0.38s; }
        .loc-detailCard:nth-child(8) { animation-delay: 0.44s; }
        .loc-detailCard:nth-child(9) { animation-delay: 0.50s; }
        .loc-detailCard:nth-child(10) { animation-delay: 0.56s; }

        /* ── Timeline (process) ── */
        .loc-timeline {
          position: relative;
          max-width: 780px;
          margin: 0 auto;
        }
        .loc-timeline::before {
          content: '';
          position: absolute;
          left: 27px;
          top: 8px;
          bottom: 8px;
          width: 2px;
          background: linear-gradient(180deg, #C7D2FE, #E6EAF2);
        }
        .loc-timelineItem {
          position: relative;
          display: flex;
          gap: 1.5rem;
          padding-bottom: 2.2rem;
          animation: locFadeUp 0.6s ease both;
        }
        .loc-timelineItem:last-child { padding-bottom: 0; }
        .loc-timelineItem:nth-child(1) { animation-delay: 0.02s; }
        .loc-timelineItem:nth-child(2) { animation-delay: 0.09s; }
        .loc-timelineItem:nth-child(3) { animation-delay: 0.16s; }
        .loc-timelineItem:nth-child(4) { animation-delay: 0.23s; }
        .loc-timelineItem:nth-child(5) { animation-delay: 0.30s; }
        .loc-timelineItem:nth-child(6) { animation-delay: 0.37s; }
        .loc-timelineItem:nth-child(7) { animation-delay: 0.44s; }
        .loc-timelineDot {
          position: relative;
          z-index: 1;
          flex-shrink: 0;
          width: 56px; height: 56px;
          display: flex; align-items: center; justify-content: center;
          border-radius: 50%;
          background: var(--loc-accent-grad);
          color: #FFFFFF;
          font-family: 'Sora', 'Inter', sans-serif;
          font-weight: 800;
          font-size: 1.1rem;
          box-shadow: 0 6px 16px rgba(67, 56, 202, 0.28);
        }
        .loc-timelineBody {
          background: #FFFFFF;
          border: 1px solid var(--loc-line);
          border-radius: 16px;
          padding: 1.3rem 1.6rem;
          flex: 1;
          box-shadow: var(--loc-card-shadow);
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        .loc-timelineBody:hover { transform: translateX(4px); box-shadow: var(--loc-card-shadow-hover); }
        .loc-timelineTitle {
          font-size: 1.05rem;
          font-weight: 700;
          color: var(--loc-ink);
          margin: 0 0 0.4rem;
        }
        .loc-timelineDesc {
          font-size: 0.9rem;
          color: var(--loc-ink-soft);
          margin: 0;
          line-height: 1.65;
        }
        .loc-timelineBody .loc-detailTagRow { margin-top: 0.75rem; }

        /* ── Engagement / success-story cards ── */
        .loc-engageGrid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.5rem;
        }
        .loc-engageCard {
          background: #FFFFFF;
          border: 1px solid var(--loc-line);
          border-radius: 20px;
          padding: 2rem;
          box-shadow: var(--loc-card-shadow);
          animation: locFadeUp 0.65s ease both;
          transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
        }
        .loc-engageCard:nth-child(1) { animation-delay: 0.02s; }
        .loc-engageCard:nth-child(2) { animation-delay: 0.10s; }
        .loc-engageCard:nth-child(3) { animation-delay: 0.18s; }
        .loc-engageCard:nth-child(4) { animation-delay: 0.26s; }
        .loc-engageCard:hover {
          transform: translateY(-4px);
          box-shadow: var(--loc-card-shadow-hover);
          border-color: #C7D2FE;
        }
        .loc-engageIcon {
          width: 52px; height: 52px;
          display: flex; align-items: center; justify-content: center;
          font-size: 1.5rem;
          background: var(--loc-accent-grad);
          border-radius: 14px;
          margin-bottom: 1.1rem;
        }
        .loc-engageTitle {
          font-family: 'Sora', 'Inter', sans-serif;
          font-size: 1.1rem;
          font-weight: 700;
          color: var(--loc-ink);
          margin: 0 0 0.6rem;
        }
        .loc-engageDesc {
          font-size: 0.92rem;
          color: var(--loc-ink-soft);
          line-height: 1.7;
          margin: 0 0 1rem;
        }
        .loc-engageBest {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.82rem;
          font-weight: 700;
          color: var(--loc-accent-1);
          background: var(--loc-bg-alt);
          padding: 0.5rem 0.9rem;
          border-radius: 10px;
        }

        /* ── Office map ── */
        .loc-officeRightCol {
          display: flex;
          flex-direction: column;
          height: 100%;
          gap: 1.25rem;
        }
        .loc-mapWrap {
          position: relative;
          flex: 1;
          min-height: 220px;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: var(--loc-card-shadow);
          border: 1px solid var(--loc-line);
        }
        .loc-mapFrame {
          width: 100%;
          height: 100%;
          border: 0;
          display: block;
        }
        .loc-mapOverlay {
          position: absolute;
          inset: 0;
          cursor: pointer;
          background: transparent;
          transition: background 0.2s ease;
        }
        .loc-mapOverlay:hover { background: rgba(67, 56, 202, 0.06); }
        .loc-mapBadge {
          position: absolute;
          bottom: 12px;
          left: 12px;
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          background: #FFFFFF;
          padding: 0.5rem 0.9rem;
          border-radius: 999px;
          font-size: 0.78rem;
          font-weight: 700;
          color: var(--loc-accent-1);
          box-shadow: var(--loc-card-shadow);
          pointer-events: none;
        }

        /* ── Small chip / mini industry boxes ── */
        .loc-chipGrid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 0.9rem;
        }
        .loc-chipCard {
          background: #FFFFFF;
          border: 1px solid var(--loc-line);
          border-radius: 14px;
          padding: 1.1rem 0.75rem;
          text-align: center;
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--loc-ink);
          box-shadow: var(--loc-card-shadow);
          transition: transform 0.2s ease, box-shadow 0.2s ease, color 0.2s ease;
          animation: locFadeIn 0.6s ease both;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
        }
        .loc-chipEmoji { font-size: 1.5rem; line-height: 1; }

        /* ── Breadcrumb ── */
        .loc-breadcrumb {
          max-width: 1160px;
          margin: 0 auto;
          padding: 1.1rem 1.5rem 0;
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 0.4rem;
          font-size: 0.85rem;
        }
        .loc-breadcrumb a {
          color: var(--loc-ink-soft);
          font-weight: 500;
        }
        .loc-breadcrumb a:hover { color: var(--loc-accent-1); }
        .loc-breadcrumb .loc-breadcrumbSep { color: var(--loc-ink-faint); }
        .loc-breadcrumb .loc-breadcrumbCurrent { color: var(--loc-ink); font-weight: 600; }
        .loc-chipCard:hover {
          transform: translateY(-3px);
          box-shadow: var(--loc-card-shadow-hover);
          color: var(--loc-accent-1);
          border-color: #C7D2FE;
        }

        /* ── Responsive ── */
        @media (max-width: 980px) {
          .loc-servicesGrid, .loc-whyGrid, .loc-industriesGrid, .loc-processSteps { grid-template-columns: repeat(2, 1fr); }
          .loc-introGrid { grid-template-columns: 1fr; gap: 2rem; }
          .loc-introStats { grid-template-columns: repeat(4, 1fr); }
          .loc-engageGrid { grid-template-columns: 1fr; }
          .loc-chipGrid { grid-template-columns: repeat(3, 1fr); }
        }
        @media (max-width: 640px) {
          .loc-section { padding: 3rem 1.25rem; }
          .loc-chipGrid { grid-template-columns: repeat(2, 1fr); }
          .loc-timeline::before { left: 22px; }
          .loc-timelineDot { width: 44px; height: 44px; font-size: 0.95rem; }
          .loc-timelineItem { gap: 1rem; }
          .loc-servicesGrid, .loc-whyGrid, .loc-industriesGrid, .loc-processSteps { grid-template-columns: 1fr; }
          .loc-introStats { grid-template-columns: repeat(2, 1fr); }
          .loc-whyCard { flex-direction: row; }
          .loc-ctaActions { flex-direction: column; align-items: stretch; }
        }
      `}</style>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(locationBreadcrumb) }} />

      {/* ═══ BREADCRUMB ═══ */}
      <nav className="loc-breadcrumb" aria-label="Breadcrumb">
        <Link href="/">Home</Link>
        <span className="loc-breadcrumbSep">/</span>
        <Link href="/services">Locations</Link>
        <span className="loc-breadcrumbSep">/</span>
        <span className="loc-breadcrumbCurrent">Software Development Company in USA</span>
      </nav>

      {/* ═══ HERO ═══ */}
      <ServiceHero
        badge="mTouch Labs · United States"
        titleLead="Software Development Company in the"
        titleAccent="USA"
        description={<>Build Intelligent Software That Accelerates Business Growth — for startups, growing businesses, ISVs, and enterprises across the United States.</>}
      />

      {/* ═══ INTRO ═══ */}
      <section className="loc-section loc-introSection">
        <div className="loc-sectionInner">
          <div className="loc-introGrid">
            <div>
              <h2 className="loc-introTitle">Build Intelligent Software That Accelerates Business Growth</h2>
              <p className="loc-introText">Technology is no longer just a support function — it has become the driving force behind business innovation, customer experience, and competitive advantage. Whether you&apos;re launching a SaaS platform, modernizing legacy systems, building AI-powered applications, or developing enterprise software, success depends on choosing the right technology partner.</p>
              <p className="loc-introText">mTouch Labs helps startups, growing businesses, ISVs, and enterprises across the United States transform ideas into scalable digital products. As a trusted <strong>Software Development Company in the USA</strong>, we combine strategic consulting, modern software engineering, <Link href="/ai-development-company">AI expertise</Link>, and cloud technologies to build secure, high-performance solutions that deliver measurable business outcomes.</p>
              <p className="loc-introText">From product discovery to architecture design, <Link href="/software-product-development-company">software development</Link>, cloud deployment, and continuous optimization, our experienced engineering teams work alongside your business to deliver software that creates lasting value.</p>
              <div className="loc-introTags">
                <span className="loc-introTag">SaaS Products</span>
                <span className="loc-introTag">Enterprise Software</span>
                <span className="loc-introTag">AI-Powered Solutions</span>
                <span className="loc-introTag">Web Portals</span>
                <span className="loc-introTag">Mobile Applications</span>
              </div>
            </div>
            <div className="loc-introStats">
              <div className="loc-statCard">
                <div className="loc-statNum">14+</div>
                <div className="loc-statLabel">Years of Experience</div>
              </div>
              <div className="loc-statCard">
                <div className="loc-statNum">500+</div>
                <div className="loc-statLabel">Global Clients</div>
              </div>
              <div className="loc-statCard">
                <div className="loc-statNum">🤖</div>
                <div className="loc-statLabel">AI & Cloud Expertise</div>
              </div>
              <div className="loc-statCard">
                <div className="loc-statNum">🔄</div>
                <div className="loc-statLabel">Agile Delivery Model</div>
              </div>
              <div className="loc-statCard">
                <div className="loc-statNum">🛠️</div>
                <div className="loc-statLabel">Post-Launch Support</div>
              </div>
              <div className="loc-statCard">
                <div className="loc-statNum">🔒</div>
                <div className="loc-statLabel">Enterprise-Grade Security</div>
              </div>
              <div className="loc-statCard">
                <div className="loc-statNum">📈</div>
                <div className="loc-statLabel">Scalable Architecture</div>
              </div>
              <div className="loc-statCard">
                <div className="loc-statNum">🌎</div>
                <div className="loc-statLabel">Nationwide Delivery</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ WHY BUSINESSES PARTNER WITH US ═══ */}
      <section className="loc-section loc-whySection">
        <div className="loc-sectionInner">
          <div className="loc-sectionHeader">
            <h2 className="loc-sectionTitle">
              Why Businesses Across the USA Partner with <span className="loc-highlight">mTouch Labs</span>
            </h2>
            <p className="loc-sectionDesc">
              Building successful software requires more than technical expertise. It demands a partner who understands your business objectives, industry challenges, users, and long-term vision. We work as an extension of your team — not just another software vendor — helping organizations innovate faster, reduce development risks, and deliver products that create measurable business value.
            </p>
          </div>
          <div className="loc-whyGrid">
            <div className="loc-whyCard">
              <div className="loc-whyIcon">🎯</div>
              <div>
                <h4 className="loc-whyTitle">Business-First Engineering</h4>
                <p className="loc-whyText">Every feature is aligned with measurable business outcomes — not technology for its own sake.</p>
              </div>
            </div>
            <div className="loc-whyCard">
              <div className="loc-whyIcon">🤖</div>
              <div>
                <h4 className="loc-whyTitle">AI-Driven Innovation</h4>
                <p className="loc-whyText">Intelligent automation, Generative AI applications, AI assistants, and predictive analytics that improve productivity.</p>
              </div>
            </div>
            <div className="loc-whyCard">
              <div className="loc-whyIcon">📈</div>
              <div>
                <h4 className="loc-whyTitle">Scalable Architecture</h4>
                <p className="loc-whyText">Cloud-native, modular, API-first systems that accommodate growth without major redevelopment.</p>
              </div>
            </div>
            <div className="loc-whyCard">
              <div className="loc-whyIcon">💬</div>
              <div>
                <h4 className="loc-whyTitle">Transparent Collaboration</h4>
                <p className="loc-whyText">Sprint planning, product roadmaps, milestone reviews, and regular progress updates keep you informed.</p>
              </div>
            </div>
            <div className="loc-whyCard">
              <div className="loc-whyIcon">🤝</div>
              <div>
                <h4 className="loc-whyTitle">Long-Term Technology Partnership</h4>
                <p className="loc-whyText">Continuous enhancement, cloud optimization, security improvements, and technical consulting beyond launch.</p>
              </div>
            </div>
            <div className="loc-whyCard">
              <div className="loc-whyIcon">🧑‍💻</div>
              <div>
                <h4 className="loc-whyTitle">14+ Years, 500+ Clients</h4>
                <p className="loc-whyText">A proven track record helping US businesses build software that drives innovation and growth.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ BUSINESS CHALLENGES WE HELP SOLVE ═══ */}
      <section className="loc-section loc-introSection">
        <div className="loc-sectionInner">
          <div className="loc-sectionHeader">
            <h2 className="loc-sectionTitle">Business Challenges We <span className="loc-highlight">Help Solve</span></h2>
            <p className="loc-sectionDesc">Every organization faces unique technology challenges. Some businesses are launching their first digital product, while others need to modernize outdated systems, improve customer experiences, or scale rapidly growing platforms.</p>
          </div>
          <div className="loc-whyGrid">
            <div className="loc-whyCard">
              <div className="loc-whyIcon">🧱</div>
              <div>
                <h4 className="loc-whyTitle">Your current software is limiting growth</h4>
                <p className="loc-whyText">We modernize legacy applications with scalable architectures, intuitive UX, cloud technologies, and secure integrations.</p>
              </div>
            </div>
            <div className="loc-whyCard">
              <div className="loc-whyIcon">🚀</div>
              <div>
                <h4 className="loc-whyTitle">Your product needs to reach the market faster</h4>
                <p className="loc-whyText">Agile development, rapid prototyping, and continuous delivery accelerate launches without compromising quality.</p>
              </div>
            </div>
            <div className="loc-whyCard">
              <div className="loc-whyIcon">🤖</div>
              <div>
                <h4 className="loc-whyTitle">You want to integrate Artificial Intelligence</h4>
                <p className="loc-whyText">We implement practical AI solutions that automate tasks, improve engagement, and enhance decision-making.</p>
              </div>
            </div>
            <div className="loc-whyCard">
              <div className="loc-whyIcon">🔌</div>
              <div>
                <h4 className="loc-whyTitle">Your teams use disconnected systems</h4>
                <p className="loc-whyText">We develop integrated software ecosystems that connect operations and automate workflows.</p>
              </div>
            </div>
            <div className="loc-whyCard">
              <div className="loc-whyIcon">📊</div>
              <div>
                <h4 className="loc-whyTitle">Your software can&apos;t scale with demand</h4>
                <p className="loc-whyText">We build cloud-native, microservices-based software capable of supporting growing traffic and requirements.</p>
              </div>
            </div>
            <div className="loc-whyCard">
              <div className="loc-whyIcon">🧑‍🔧</div>
              <div>
                <h4 className="loc-whyTitle">You need experienced engineering talent</h4>
                <p className="loc-whyText"><Link href="/dedicated-development-team">Dedicated development teams</Link> give you immediate access to architects, developers, QA, DevOps, and AI experts.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ WHAT MAKES US DIFFERENT ═══ */}
      <section className="loc-section loc-whySection">
        <div className="loc-sectionInner">
          <div className="loc-sectionHeader">
            <h2 className="loc-sectionTitle">What Makes <span className="loc-highlight">mTouch Labs Different?</span></h2>
            <p className="loc-sectionDesc">Many software companies can build applications. We focus on building business success through technology — combining strategic thinking, modern engineering practices, and long-term partnership across AI, enterprise software, cloud platforms, and SaaS products.</p>
          </div>
          <div className="loc-whyGrid">
            <div className="loc-whyCard"><div className="loc-whyIcon">🏗️</div><div><h4 className="loc-whyTitle">Business-Focused Solution Architecture</h4></div></div>
            <div className="loc-whyCard"><div className="loc-whyIcon">☁️</div><div><h4 className="loc-whyTitle">Modern Cloud-Native Development</h4></div></div>
            <div className="loc-whyCard"><div className="loc-whyIcon">🤖</div><div><h4 className="loc-whyTitle">AI-First Software Engineering</h4></div></div>
            <div className="loc-whyCard"><div className="loc-whyIcon">🔒</div><div><h4 className="loc-whyTitle">Enterprise-Grade Security</h4></div></div>
            <div className="loc-whyCard"><div className="loc-whyIcon">🔄</div><div><h4 className="loc-whyTitle">Agile Product Delivery</h4></div></div>
            <div className="loc-whyCard"><div className="loc-whyIcon">💬</div><div><h4 className="loc-whyTitle">Transparent Communication</h4></div></div>
            <div className="loc-whyCard"><div className="loc-whyIcon">🧑‍💻</div><div><h4 className="loc-whyTitle">Scalable Engineering Teams</h4></div></div>
            <div className="loc-whyCard"><div className="loc-whyIcon">💡</div><div><h4 className="loc-whyTitle">Continuous Innovation</h4></div></div>
            <div className="loc-whyCard"><div className="loc-whyIcon">🛠️</div><div><h4 className="loc-whyTitle">Long-Term Support & Optimization</h4></div></div>
          </div>
          <p className="loc-sectionDesc loc-descStandalone">We believe successful software is measured not by the number of features delivered, but by the business impact it creates — improved productivity, increased revenue, enhanced customer experiences, or operational efficiency.</p>
        </div>
      </section>

      {/* ═══ SERVICES OVERVIEW GRID ═══ */}
      <section className="loc-section loc-servicesSection">
        <div className="loc-sectionInner">
          <div className="loc-sectionHeader">
            <h2 className="loc-sectionTitle">
              Software Engineering Capabilities That Drive <span className="loc-highlight">Business Growth</span>
            </h2>
            <p className="loc-sectionDesc">
              We don&apos;t believe in one-size-fits-all software solutions. Every application is built around your workflows, ensuring flexibility, efficiency, and a competitive advantage.
            </p>
          </div>
          <div className="loc-servicesGrid">
            <div className="loc-serviceCard">
              <div className="loc-serviceIcon">⚙️</div>
              <h3 className="loc-serviceTitle"><Link href="/custom-software-development-company">Custom Software Development</Link></h3>
              <p className="loc-serviceDesc">Business management systems, CRM & ERP, HR platforms, workflow automation, and reporting dashboards.</p>
            </div>
            <div className="loc-serviceCard">
              <div className="loc-serviceIcon">🏢</div>
              <h3 className="loc-serviceTitle"><Link href="/enterprise-software-development-company">Enterprise Software Development</Link></h3>
              <p className="loc-serviceDesc">Reliable, secure software built for complex operations across departments and locations.</p>
            </div>
            <div className="loc-serviceCard">
              <div className="loc-serviceIcon">🚀</div>
              <h3 className="loc-serviceTitle"><Link href="/saas-development-company">SaaS Product Development</Link></h3>
              <p className="loc-serviceDesc">Multi-tenant architecture, subscription billing, secure authentication, and cloud scalability.</p>
            </div>
            <div className="loc-serviceCard">
              <div className="loc-serviceIcon">🤖</div>
              <h3 className="loc-serviceTitle"><Link href="/ai-development-company">AI-Powered Business Solutions</Link></h3>
              <p className="loc-serviceDesc">Generative AI, chatbots, RAG, document processing, and LLM integrations that solve real business problems.</p>
            </div>
            <div className="loc-serviceCard">
              <div className="loc-serviceIcon">🌐</div>
              <h3 className="loc-serviceTitle"><Link href="/web-development-company">Web & Customer Experience Platforms</Link></h3>
              <p className="loc-serviceDesc">Responsive, secure, high-performing portals, marketplaces, and enterprise web applications.</p>
            </div>
            <div className="loc-serviceCard">
              <div className="loc-serviceIcon">📱</div>
              <h3 className="loc-serviceTitle"><Link href="/mobile-app-development-company">Mobile App Development</Link></h3>
              <p className="loc-serviceDesc">Native iOS/Android, Flutter, and React Native apps across the full mobile app lifecycle.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ CAPABILITIES IN DETAIL ═══ */}
      <section className="loc-section loc-introSection">
        <div className="loc-sectionInner">
          <div className="loc-sectionHeader">
            <h2 className="loc-sectionTitle">Our Capabilities — <span className="loc-highlight">In Detail</span></h2>
            <p className="loc-sectionDesc">A closer look at each capability, and the solutions built around it.</p>
          </div>

          <div className="loc-detailGrid">
            <div className="loc-detailCard">
              <div className="loc-detailHead">
                <div className="loc-detailNum">01</div>
                <h3 className="loc-detailTitle"><Link href="/custom-software-development-company">Custom Software Development</Link></h3>
              </div>
              <p className="loc-detailDesc">Off-the-shelf software often forces businesses to adapt their workflows to predefined features. Custom software adapts to your business — automating operations, improving productivity, and integrating seamlessly with your existing systems.</p>
              <div className="loc-detailBlock">
                <p className="loc-detailLabel">Solutions Include</p>
                <div className="loc-detailTagRow">
                  <span className="loc-detailTag">Business Management Systems</span>
                  <span className="loc-detailTag">CRM & ERP Solutions</span>
                  <span className="loc-detailTag">HR & Workforce Management</span>
                  <span className="loc-detailTag">Inventory & Supply Chain Systems</span>
                  <span className="loc-detailTag">Workflow Automation</span>
                  <span className="loc-detailTag">Customer & Vendor Portals</span>
                  <span className="loc-detailTag">Reporting & Analytics Dashboards</span>
                </div>
              </div>
            </div>

            <div className="loc-detailCard">
              <div className="loc-detailHead">
                <div className="loc-detailNum">02</div>
                <h3 className="loc-detailTitle"><Link href="/enterprise-software-development-company">Enterprise Software Development</Link></h3>
              </div>
              <p className="loc-detailDesc">Large organizations require software that is reliable, secure, and capable of supporting complex operations across multiple departments and locations — built with scalability, performance, and integration in mind.</p>
              <div className="loc-detailBlock">
                <p className="loc-detailLabel">We Build</p>
                <div className="loc-detailTagRow">
                  <span className="loc-detailTag">Enterprise Portals</span>
                  <span className="loc-detailTag">Operational Dashboards</span>
                  <span className="loc-detailTag">Workflow Automation</span>
                  <span className="loc-detailTag">Large-Scale Business Applications</span>
                </div>
              </div>
            </div>

            <div className="loc-detailCard">
              <div className="loc-detailHead">
                <div className="loc-detailNum">03</div>
                <h3 className="loc-detailTitle"><Link href="/saas-development-company">SaaS Product Development</Link></h3>
              </div>
              <p className="loc-detailDesc">Software-as-a-Service has become the preferred delivery model for modern businesses. Whether you&apos;re building a subscription-based product or transforming an existing application, our SaaS expertise helps you launch faster and scale confidently.</p>
              <div className="loc-detailBlock">
                <p className="loc-detailLabel">Key Features</p>
                <div className="loc-detailTagRow">
                  <span className="loc-detailTag">Multi-Tenant Architecture</span>
                  <span className="loc-detailTag">Subscription & Billing Management</span>
                  <span className="loc-detailTag">Secure Authentication</span>
                  <span className="loc-detailTag">User & Role Management</span>
                  <span className="loc-detailTag">API Integrations</span>
                  <span className="loc-detailTag">Analytics Dashboards</span>
                  <span className="loc-detailTag">Cloud Scalability</span>
                </div>
              </div>
            </div>

            <div className="loc-detailCard">
              <div className="loc-detailHead">
                <div className="loc-detailNum">04</div>
                <h3 className="loc-detailTitle"><Link href="/ai-development-company">AI-Powered Business Solutions</Link></h3>
              </div>
              <p className="loc-detailDesc">Artificial Intelligence is reshaping how organizations operate, analyze data, and interact with customers. Instead of implementing AI for the sake of innovation, we focus on solving real business problems and delivering measurable value.</p>
              <div className="loc-detailBlock">
                <p className="loc-detailLabel">Our AI Capabilities</p>
                <div className="loc-detailTagRow">
                  <span className="loc-detailTag"><Link href="/generative-ai-development-company">Generative AI Applications</Link></span>
                  <span className="loc-detailTag">AI Chatbots & Virtual Assistants</span>
                  <span className="loc-detailTag">Intelligent Document Processing</span>
                  <span className="loc-detailTag">Knowledge Management Systems</span>
                  <span className="loc-detailTag">Recommendation Engines</span>
                  <span className="loc-detailTag">Predictive Analytics</span>
                  <span className="loc-detailTag">Large Language Model Integrations</span>
                  <span className="loc-detailTag">Retrieval-Augmented Generation (RAG)</span>
                </div>
              </div>
            </div>

            <div className="loc-detailCard">
              <div className="loc-detailHead">
                <div className="loc-detailNum">05</div>
                <h3 className="loc-detailTitle"><Link href="/web-development-company">Web & Customer Experience Platforms</Link></h3>
              </div>
              <p className="loc-detailDesc">A business&apos;s website is often the first interaction customers have with the brand. We develop responsive, secure, and high-performing web applications that enhance customer engagement and support business growth.</p>
              <div className="loc-detailBlock">
                <p className="loc-detailLabel">We Build</p>
                <div className="loc-detailTagRow">
                  <span className="loc-detailTag">Customer Self-Service Portals</span>
                  <span className="loc-detailTag">B2B & B2C Platforms</span>
                  <span className="loc-detailTag">Marketplace Platforms</span>
                  <span className="loc-detailTag">Booking & Reservation Systems</span>
                  <span className="loc-detailTag">Learning Management Systems</span>
                  <span className="loc-detailTag">Progressive Web Applications</span>
                </div>
              </div>
            </div>

            <div className="loc-detailCard">
              <div className="loc-detailHead">
                <div className="loc-detailNum">06</div>
                <h3 className="loc-detailTitle"><Link href="/mobile-app-development-company">Mobile App Development</Link></h3>
              </div>
              <p className="loc-detailDesc">Today&apos;s users expect seamless digital experiences across every device. From concept and UI/UX design to development, testing, deployment, and post-launch support, we manage the complete mobile application lifecycle.</p>
              <div className="loc-detailBlock">
                <p className="loc-detailLabel">We Build</p>
                <div className="loc-detailTagRow">
                  <span className="loc-detailTag">Native iOS Applications</span>
                  <span className="loc-detailTag">Native Android Applications</span>
                  <span className="loc-detailTag"><Link href="/flutter-app-development-company">Flutter Applications</Link></span>
                  <span className="loc-detailTag"><Link href="/react-native-app-development-company">React Native Applications</Link></span>
                  <span className="loc-detailTag">Enterprise Mobility Solutions</span>
                  <span className="loc-detailTag">On-Demand Service Apps</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ INDUSTRIES ═══ */}
      <section className="loc-section loc-industriesSection">
        <div className="loc-sectionInner">
          <div className="loc-sectionHeader">
            <h2 className="loc-sectionTitle">
              Industries We Help <span className="loc-highlight">Transform</span>
            </h2>
            <p className="loc-sectionDesc">
              Every industry has unique operational challenges, customer expectations, and regulatory requirements. Our experience across multiple business domains allows us to build software that aligns with industry-specific needs while remaining flexible enough to support future growth.
            </p>
          </div>
          <div className="loc-industriesGrid">
            <div className="loc-industryCard">
              <span className="loc-industryEmoji">🏥</span>
              <h4 className="loc-industryName">Healthcare</h4>
              <p className="loc-serviceDesc">Telemedicine, patient management, appointment scheduling, and AI-assisted healthcare tools.</p>
            </div>
            <div className="loc-industryCard">
              <span className="loc-industryEmoji">🏦</span>
              <h4 className="loc-industryName">Financial Services</h4>
              <p className="loc-serviceDesc">Digital banking, payment solutions, lending, investment platforms, and fraud detection.</p>
            </div>
            <div className="loc-industryCard">
              <span className="loc-industryEmoji">🛒</span>
              <h4 className="loc-industryName">Retail & eCommerce</h4>
              <p className="loc-serviceDesc">Omnichannel commerce, marketplaces, inventory management, and loyalty programs.</p>
            </div>
            <div className="loc-industryCard">
              <span className="loc-industryEmoji">🏭</span>
              <h4 className="loc-industryName">Manufacturing</h4>
              <p className="loc-serviceDesc">Production management, warehouse automation, supplier portals, and quality management.</p>
            </div>
            <div className="loc-industryCard">
              <span className="loc-industryEmoji">🚚</span>
              <h4 className="loc-industryName">Logistics & Transportation</h4>
              <p className="loc-serviceDesc">Fleet management, shipment tracking, route optimization, and delivery platforms.</p>
            </div>
            <div className="loc-industryCard">
              <span className="loc-industryEmoji">🏠</span>
              <h4 className="loc-industryName">Real Estate</h4>
              <p className="loc-serviceDesc">Property management, CRM, listing portals, and tenant management applications.</p>
            </div>
            <div className="loc-industryCard">
              <span className="loc-industryEmoji">🎓</span>
              <h4 className="loc-industryName">Education</h4>
              <p className="loc-serviceDesc">Learning Management Systems, virtual classrooms, and student information systems.</p>
            </div>
            <div className="loc-industryCard">
              <span className="loc-industryEmoji">✈️</span>
              <h4 className="loc-industryName">Travel & Hospitality</h4>
              <p className="loc-serviceDesc">Booking engines, travel management, hotel reservations, and loyalty platforms.</p>
            </div>
            <div className="loc-industryCard">
              <span className="loc-industryEmoji">🛡️</span>
              <h4 className="loc-industryName">Insurance</h4>
              <p className="loc-serviceDesc">Policy management, claims processing, underwriting platforms, and fraud detection.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ DIGITAL TRANSFORMATION ═══ */}
      <section className="loc-section loc-introSection">
        <div className="loc-sectionInner">
          <div className="loc-sectionHeader">
            <h2 className="loc-sectionTitle">
              Accelerating Digital Transformation with <span className="loc-highlight">AI & Cloud</span>
            </h2>
            <p className="loc-sectionDesc">Digital transformation is more than adopting new technology — it&apos;s about creating smarter business processes, better customer experiences, and scalable digital operations by combining cloud computing, AI, automation, and modern software engineering.</p>
          </div>
          <div className="loc-chipGrid">
            <div className="loc-chipCard"><span className="loc-chipEmoji">🧱</span>Legacy System Modernization</div>
            <div className="loc-chipCard"><span className="loc-chipEmoji">☁️</span>Cloud Migration & Optimization</div>
            <div className="loc-chipCard"><span className="loc-chipEmoji">🤖</span>AI Integration</div>
            <div className="loc-chipCard"><span className="loc-chipEmoji">🔁</span>Business Process Automation</div>
            <div className="loc-chipCard"><span className="loc-chipEmoji">🔌</span>API-First Architecture</div>
            <div className="loc-chipCard"><span className="loc-chipEmoji">🧩</span>Microservices Development</div>
            <div className="loc-chipCard"><span className="loc-chipEmoji">📊</span>Data Analytics & BI</div>
            <div className="loc-chipCard"><span className="loc-chipEmoji">🔗</span>Enterprise Integration</div>
            <div className="loc-chipCard"><span className="loc-chipEmoji">⚙️</span>DevOps Automation</div>
            <div className="loc-chipCard"><span className="loc-chipEmoji">⚡</span>Performance Optimization</div>
          </div>
        </div>
      </section>

      {/* ═══ PROCESS ═══ */}
      <section className="loc-section loc-processSection">
        <div className="loc-sectionInner">
          <div className="loc-sectionHeader">
            <h2 className="loc-sectionTitle">How We Deliver Successful <span className="loc-highlight">Software Projects</span></h2>
            <p className="loc-sectionDesc">
              Building successful software isn&apos;t just about writing code — it&apos;s about understanding business objectives, reducing risk, and delivering technology that creates measurable value. We&apos;ve refined our approach over 14+ years to ensure every project is delivered with transparency, agility, and quality.
            </p>
          </div>
          <div className="loc-timeline">
            <div className="loc-timelineItem">
              <div className="loc-timelineDot">01</div>
              <div className="loc-timelineBody">
                <h4 className="loc-timelineTitle">Discovery & Product Strategy</h4>
                <p className="loc-timelineDesc">Business & stakeholder workshops, product vision alignment, user journey mapping, technical feasibility assessment, and roadmap creation.</p>
                <div className="loc-detailTagRow">
                  <span className="loc-detailTag">Stakeholder Workshops</span>
                  <span className="loc-detailTag">Feature Prioritization</span>
                  <span className="loc-detailTag">Architecture Planning</span>
                </div>
              </div>
            </div>
            <div className="loc-timelineItem">
              <div className="loc-timelineDot">02</div>
              <div className="loc-timelineBody">
                <h4 className="loc-timelineTitle">Agile Engineering & Continuous Delivery</h4>
                <p className="loc-timelineDesc">Sprint planning, weekly progress reviews, product demonstrations, CI/CD, automated testing, and transparent reporting.</p>
                <div className="loc-detailTagRow">
                  <span className="loc-detailTag">Sprint Planning</span>
                  <span className="loc-detailTag">CI/CD</span>
                  <span className="loc-detailTag">Automated Testing</span>
                </div>
              </div>
            </div>
            <div className="loc-timelineItem">
              <div className="loc-timelineDot">03</div>
              <div className="loc-timelineBody">
                <h4 className="loc-timelineTitle">Quality Built into Every Release</h4>
                <p className="loc-timelineDesc">Our QA engineers work alongside developers from day one, ensuring every feature meets functional, performance, usability, and security standards.</p>
                <div className="loc-detailTagRow">
                  <span className="loc-detailTag">Functional Testing</span>
                  <span className="loc-detailTag">Performance Testing</span>
                  <span className="loc-detailTag">UAT</span>
                </div>
              </div>
            </div>
            <div className="loc-timelineItem">
              <div className="loc-timelineDot">04</div>
              <div className="loc-timelineBody">
                <h4 className="loc-timelineTitle">Security by Design</h4>
                <p className="loc-timelineDesc">Secure coding standards, role-based access control, multi-factor authentication, data encryption, and compliance-ready architecture from day one.</p>
                <div className="loc-detailTagRow">
                  <span className="loc-detailTag">Secure APIs</span>
                  <span className="loc-detailTag">MFA</span>
                  <span className="loc-detailTag">Vulnerability Assessments</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ TECHNOLOGIES ═══ */}
      <section className="loc-section loc-introSection">
        <div className="loc-sectionInner">
          <div className="loc-sectionHeader">
            <h2 className="loc-sectionTitle">
              Modern Technology <span className="loc-highlight">Ecosystem</span>
            </h2>
            <p className="loc-sectionDesc">
              Technology decisions directly influence software performance, scalability, and long-term maintainability. We select technologies based on business objectives, scalability requirements, and long-term maintainability rather than following technology trends alone.
            </p>
          </div>
          <div className="loc-whyGrid">
            <div className="loc-whyCard">
              <div className="loc-whyIcon">🎨</div>
              <div>
                <h4 className="loc-whyTitle">Frontend</h4>
                <div className="loc-introTags">
                  <span className="loc-introTag">React.js</span>
                  <span className="loc-introTag">Next.js</span>
                  <span className="loc-introTag">Angular</span>
                  <span className="loc-introTag">Vue.js</span>
                  <span className="loc-introTag">TypeScript</span>
                </div>
              </div>
            </div>
            <div className="loc-whyCard">
              <div className="loc-whyIcon">🖥️</div>
              <div>
                <h4 className="loc-whyTitle">Backend</h4>
                <div className="loc-introTags">
                  <span className="loc-introTag">Node.js</span>
                  <span className="loc-introTag">Java</span>
                  <span className="loc-introTag">Python</span>
                  <span className="loc-introTag">.NET</span>
                  <span className="loc-introTag">Laravel</span>
                  <span className="loc-introTag">Spring Boot</span>
                </div>
              </div>
            </div>
            <div className="loc-whyCard">
              <div className="loc-whyIcon">📱</div>
              <div>
                <h4 className="loc-whyTitle">Mobile</h4>
                <div className="loc-introTags">
                  <span className="loc-introTag"><Link href="/flutter-app-development-company">Flutter</Link></span>
                  <span className="loc-introTag"><Link href="/react-native-app-development-company">React Native</Link></span>
                  <span className="loc-introTag">Native Android</span>
                  <span className="loc-introTag">Native iOS</span>
                </div>
              </div>
            </div>
            <div className="loc-whyCard">
              <div className="loc-whyIcon">☁️</div>
              <div>
                <h4 className="loc-whyTitle">Cloud & DevOps</h4>
                <div className="loc-introTags">
                  <span className="loc-introTag">AWS</span>
                  <span className="loc-introTag">Microsoft Azure</span>
                  <span className="loc-introTag">Google Cloud Platform</span>
                  <span className="loc-introTag">Docker</span>
                  <span className="loc-introTag">Kubernetes</span>
                  <span className="loc-introTag">Terraform</span>
                </div>
              </div>
            </div>
            <div className="loc-whyCard">
              <div className="loc-whyIcon">🧠</div>
              <div>
                <h4 className="loc-whyTitle">Artificial Intelligence</h4>
                <div className="loc-introTags">
                  <span className="loc-introTag">OpenAI</span>
                  <span className="loc-introTag">LangChain</span>
                  <span className="loc-introTag">RAG</span>
                  <span className="loc-introTag">AI Agents</span>
                  <span className="loc-introTag">Machine Learning</span>
                  <span className="loc-introTag">NLP</span>
                </div>
              </div>
            </div>
            <div className="loc-whyCard">
              <div className="loc-whyIcon">🗄️</div>
              <div>
                <h4 className="loc-whyTitle">Databases</h4>
                <div className="loc-introTags">
                  <span className="loc-introTag">PostgreSQL</span>
                  <span className="loc-introTag">MySQL</span>
                  <span className="loc-introTag">MongoDB</span>
                  <span className="loc-introTag">SQL Server</span>
                  <span className="loc-introTag">Redis</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ WHY LEADING BUSINESSES TRUST US ═══ */}
      <section className="loc-section loc-whySection">
        <div className="loc-sectionInner">
          <div className="loc-sectionHeader">
            <h2 className="loc-sectionTitle">
              Why Leading Businesses Trust <span className="loc-highlight">mTouch Labs</span>
            </h2>
            <p className="loc-sectionDesc">Choosing a software development partner is a long-term investment. For over 14 years, mTouch Labs has partnered with startups, SMBs, enterprises, and global organizations to build software that drives innovation and business growth. Our success is measured by the value we create for our clients — not just the software we deliver.</p>
          </div>
          <div className="loc-whyGrid">
            <div className="loc-whyCard"><div className="loc-whyIcon">🧑‍💻</div><div><h4 className="loc-whyTitle">14+ Years of Experience</h4></div></div>
            <div className="loc-whyCard"><div className="loc-whyIcon">🌍</div><div><h4 className="loc-whyTitle">500+ Global Clients Served</h4></div></div>
            <div className="loc-whyCard"><div className="loc-whyIcon">🚀</div><div><h4 className="loc-whyTitle">Enterprise, SaaS & AI Expertise</h4></div></div>
            <div className="loc-whyCard"><div className="loc-whyIcon">🏗️</div><div><h4 className="loc-whyTitle">Experienced Architects & Engineers</h4></div></div>
            <div className="loc-whyCard"><div className="loc-whyIcon">🔄</div><div><h4 className="loc-whyTitle">Agile Development Methodology</h4></div></div>
            <div className="loc-whyCard"><div className="loc-whyIcon">📋</div><div><h4 className="loc-whyTitle">Dedicated Project Managers</h4></div></div>
            <div className="loc-whyCard"><div className="loc-whyIcon">💬</div><div><h4 className="loc-whyTitle">Transparent Communication</h4></div></div>
            <div className="loc-whyCard"><div className="loc-whyIcon">📈</div><div><h4 className="loc-whyTitle">Scalable Delivery Models</h4></div></div>
            <div className="loc-whyCard"><div className="loc-whyIcon">🛠️</div><div><h4 className="loc-whyTitle">Post-Launch Support & Continuous Improvement</h4></div></div>
            <div className="loc-whyCard"><div className="loc-whyIcon">🎯</div><div><h4 className="loc-whyTitle">Focus on Long-Term Business Success</h4></div></div>
          </div>
        </div>
      </section>

      {/* ═══ SUCCESS STORIES ═══ */}
      <section className="loc-section loc-introSection">
        <div className="loc-sectionInner">
          <div className="loc-sectionHeader">
            <h2 className="loc-sectionTitle">Success Stories That Create <span className="loc-highlight">Business Impact</span></h2>
            <p className="loc-sectionDesc">Over the years, we&apos;ve helped organizations transform ideas into successful digital products across multiple industries. Here are a few examples of the types of business outcomes we deliver.</p>
          </div>
          <div className="loc-engageGrid">
            <div className="loc-engageCard">
              <div className="loc-engageIcon">🏢</div>
              <h3 className="loc-engageTitle">Enterprise Business Management Platform</h3>
              <p className="loc-engageDesc"><strong>Challenge:</strong> A growing enterprise relied on multiple disconnected systems, leading to duplicate data, manual processes, and limited operational visibility.<br /><br /><strong>Solution:</strong> We developed a centralized business management platform integrating core business functions, workflow automation, and real-time reporting.</p>
              <span className="loc-engageBest">Outcome: Improved efficiency, better decision-making, reduced manual effort, scalable architecture</span>
            </div>
            <div className="loc-engageCard">
              <div className="loc-engageIcon">🤖</div>
              <h3 className="loc-engageTitle">AI-Powered Customer Support Solution</h3>
              <p className="loc-engageDesc"><strong>Challenge:</strong> A service-based organization wanted to improve customer response times while reducing the workload on support teams.<br /><br /><strong>Solution:</strong> We developed an AI-powered virtual assistant integrated with the company&apos;s knowledge base for intelligent conversations and automated query resolution.</p>
              <span className="loc-engageBest">Outcome: Faster responses, improved efficiency, higher satisfaction, lower operational costs</span>
            </div>
            <div className="loc-engageCard">
              <div className="loc-engageIcon">☁️</div>
              <h3 className="loc-engageTitle">Cloud-Based SaaS Product</h3>
              <p className="loc-engageDesc"><strong>Challenge:</strong> A startup required a secure, scalable SaaS platform capable of supporting rapid customer growth.<br /><br /><strong>Solution:</strong> We built a cloud-native SaaS application with subscription management, authentication, API integrations, and analytics dashboards.</p>
              <span className="loc-engageBest">Outcome: Faster launch, improved UX, scalable infrastructure, foundation for growth</span>
            </div>
            <div className="loc-engageCard">
              <div className="loc-engageIcon">🏭</div>
              <h3 className="loc-engageTitle">Legacy System Modernization for a Manufacturing Enterprise</h3>
              <p className="loc-engageDesc"><strong>Challenge:</strong> A mid-market manufacturer was running production operations on an outdated on-premise system that limited visibility and slowed decision-making.<br /><br /><strong>Solution:</strong> We modernized the platform with a cloud-native architecture, real-time production dashboards, and API integrations with the client&apos;s existing ERP system.</p>
              <span className="loc-engageBest">Outcome: Reduced downtime, faster reporting, better cross-team visibility, future-ready infrastructure</span>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ VISIT OUR USA OFFICE ═══ */}
      <section className="loc-section loc-introSection">
        <div className="loc-sectionInner">
          <div className="loc-introGrid" style={{ alignItems: "stretch" }}>
            <div>
              <h2 className="loc-introTitle">Visit Our USA Office</h2>
              <p className="loc-introText">Looking for a reliable software development company in the USA? Meet our experts to discuss your project requirements, digital transformation initiatives, or product ideas. Whether you&apos;re planning a custom software application, AI-powered solution, enterprise platform, SaaS product, or mobile application, our consultants are ready to help you identify the right technology strategy for your business.</p>
              <p className="loc-introText">📍 <strong>mTouch Labs — US Operations</strong> — 1111B South Governors Avenue, Suite 48193, Dover, DE 19904, United States</p>
              <p className="loc-introText">📞 Phone: <a href="tel:+15512220070">+1 (551) 222-0070</a> &nbsp; 📧 Email: contact@mtouchlabs.com</p>
              <p className="loc-introText">🕒 Business Hours: Monday – Friday | 9:00 AM – 6:00 PM EST</p>
              <p className="loc-introText"><strong>Serving businesses nationwide, including:</strong></p>
              <div className="loc-introTags">
                <span className="loc-introTag">New York</span>
                <span className="loc-introTag">San Francisco Bay Area</span>
                <span className="loc-introTag">Austin</span>
                <span className="loc-introTag">Chicago</span>
                <span className="loc-introTag">Boston</span>
                <span className="loc-introTag">Seattle</span>
                <span className="loc-introTag">Dallas</span>
                <span className="loc-introTag">Philadelphia</span>
                <span className="loc-introTag">Washington D.C.</span>
                <span className="loc-introTag">Delaware</span>
              </div>
            </div>
            <div className="loc-officeRightCol">
              <div className="loc-introStats">
                <div className="loc-statCard"><div className="loc-statNum">🇺🇸</div><div className="loc-statLabel">Dover, Delaware HQ</div></div>
                <div className="loc-statCard"><div className="loc-statNum">Mon–Fri</div><div className="loc-statLabel">9:00 AM – 6:00 PM EST</div></div>
                <div className="loc-statCard"><div className="loc-statNum">🌎</div><div className="loc-statLabel">Nationwide Delivery</div></div>
                <div className="loc-statCard"><div className="loc-statNum">💬</div><div className="loc-statLabel">Free Consultation</div></div>
              </div>
              <div className="loc-mapWrap">
                <iframe
                  className="loc-mapFrame"
                  src="https://www.google.com/maps?q=1111B+South+Governors+Avenue+Suite+48193+Dover+DE+19904&output=embed"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="mTouch Labs USA Office Location"
                />
                <a
                  href="https://maps.app.goo.gl/RUQSXXJ8hCP2RMRd7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="loc-mapOverlay"
                  aria-label="Open mTouch Labs USA office in Google Maps"
                />
                <span className="loc-mapBadge">📍 Get Directions</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ FAQ ═══ */}
      <section className="loc-section loc-faqSection">
        <div className="loc-sectionInner">
          <div className="loc-sectionHeader">
            <h2 className="loc-sectionTitle">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="loc-faqList">
            <details className="loc-faqItem">
              <summary className="loc-faqQuestion">
                <span className="loc-faqQuestionText">Why choose mTouch Labs as your software development company in the USA?</span>
                <span className="loc-faqChevron"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6"/></svg></span>
              </summary>
              <div className="loc-faqAnswer">mTouch Labs combines over 14 years of software development experience with expertise in AI, enterprise software, cloud technologies, SaaS platforms, and digital transformation. We work as a long-term technology partner, helping businesses build scalable software solutions aligned with their growth objectives.</div>
            </details>
            <details className="loc-faqItem">
              <summary className="loc-faqQuestion">
                <span className="loc-faqQuestionText">What software development services do you provide?</span>
                <span className="loc-faqChevron"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6"/></svg></span>
              </summary>
              <div className="loc-faqAnswer">We offer custom software development, enterprise application development, SaaS product development, AI-powered software solutions, web application development, mobile app development, cloud engineering, API integrations, software modernization, DevOps, and ongoing maintenance & support.</div>
            </details>
            <details className="loc-faqItem">
              <summary className="loc-faqQuestion">
                <span className="loc-faqQuestionText">Do you work with startups as well as enterprises?</span>
                <span className="loc-faqChevron"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6"/></svg></span>
              </summary>
              <div className="loc-faqAnswer">Yes. We work with startups, SMBs, ISVs, and large enterprises. Whether you&apos;re validating an MVP, launching a SaaS platform, or modernizing enterprise systems, we tailor our engagement model to your business stage and technical requirements.</div>
            </details>
            <details className="loc-faqItem">
              <summary className="loc-faqQuestion">
                <span className="loc-faqQuestionText">Can you modernize our legacy software?</span>
                <span className="loc-faqChevron"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6"/></svg></span>
              </summary>
              <div className="loc-faqAnswer">Absolutely. We help businesses modernize legacy applications by upgrading technologies, migrating to the cloud, improving performance, enhancing security, redesigning user experiences, and integrating modern APIs while minimizing business disruption.</div>
            </details>
            <details className="loc-faqItem">
              <summary className="loc-faqQuestion">
                <span className="loc-faqQuestionText">What industries do you serve?</span>
                <span className="loc-faqChevron"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6"/></svg></span>
              </summary>
              <div className="loc-faqAnswer">Our team has experience developing software solutions for healthcare, fintech, retail, eCommerce, manufacturing, logistics, transportation, education, travel, hospitality, real estate, and on-demand service businesses.</div>
            </details>
            <details className="loc-faqItem">
              <summary className="loc-faqQuestion">
                <span className="loc-faqQuestionText">Do you provide AI software development services?</span>
                <span className="loc-faqChevron"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6"/></svg></span>
              </summary>
              <div className="loc-faqAnswer">Yes. Our AI expertise includes Generative AI applications, AI chatbots, intelligent document processing, Retrieval-Augmented Generation (RAG), workflow automation, recommendation engines, predictive analytics, and Large Language Model integrations that help businesses automate processes and improve decision-making.</div>
            </details>
            <details className="loc-faqItem">
              <summary className="loc-faqQuestion">
                <span className="loc-faqQuestionText">How do you ensure software quality and security?</span>
                <span className="loc-faqChevron"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6"/></svg></span>
              </summary>
              <div className="loc-faqAnswer">Quality and security are integrated throughout our development lifecycle. We follow secure coding standards, automated testing, code reviews, CI/CD pipelines, vulnerability assessments, performance testing, and continuous monitoring to deliver reliable and secure software solutions.</div>
            </details>
            <details className="loc-faqItem">
              <summary className="loc-faqQuestion">
                <span className="loc-faqQuestionText">Do you provide post-launch support and maintenance?</span>
                <span className="loc-faqChevron"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6"/></svg></span>
              </summary>
              <div className="loc-faqAnswer">Yes. We offer long-term maintenance, feature enhancements, security updates, cloud monitoring, performance optimization, bug fixes, and technical support to ensure your software continues to evolve with your business.</div>
            </details>
            <details className="loc-faqItem">
              <summary className="loc-faqQuestion">
                <span className="loc-faqQuestionText">How long does a software development project take?</span>
                <span className="loc-faqChevron"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6"/></svg></span>
              </summary>
              <div className="loc-faqAnswer">Project timelines vary depending on the scope, complexity, technology stack, and business requirements. After the discovery phase, we provide a detailed project roadmap with estimated milestones, deliverables, and timelines.</div>
            </details>
            <details className="loc-faqItem">
              <summary className="loc-faqQuestion">
                <span className="loc-faqQuestionText">How do I get started with mTouch Labs?</span>
                <span className="loc-faqChevron"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6"/></svg></span>
              </summary>
              <div className="loc-faqAnswer">Simply contact our team to schedule a free consultation. We&apos;ll understand your business goals, evaluate your project requirements, recommend the most suitable technology approach, and provide a customized proposal to help you move forward with confidence.</div>
            </details>
          </div>
        </div>
      </section>

      {/* ═══ FINAL CTA ═══ */}
      <section className="loc-ctaSection">
        <div className="loc-ctaInner">
          <h2 className="loc-ctaTitle">Let&apos;s Build Software That Moves Your Business Forward</h2>
          <p className="loc-ctaDesc">
            At mTouch Labs, we combine strategic consulting, modern software engineering, AI expertise, and cloud technologies to help businesses across the USA build scalable, secure, and future-ready digital solutions. From product strategy and UX design to development, deployment, and continuous optimization, we deliver end-to-end software solutions that align technology with business outcomes.
          </p>
          <div className="loc-ctaActions">
            <Link href="/contact-us" className="loc-ctaBtnPrimary">
              📞 Book a Free Consultation →
            </Link>
            <Link href="/contact-us" className="loc-ctaBtnSecondary">
              Request Proposal
            </Link>
          </div>
        </div>
      </section>

      <FAQSchema faqs={[
        { q: "Why choose mTouch Labs as your software development company in the USA?", a: "mTouch Labs combines over 14 years of software development experience with expertise in AI, enterprise software, cloud technologies, SaaS platforms, and digital transformation. We work as a long-term technology partner, helping businesses build scalable software solutions aligned with their growth objectives." },
        { q: "What software development services do you provide?", a: "We offer custom software development, enterprise application development, SaaS product development, AI-powered software solutions, web application development, mobile app development, cloud engineering, API integrations, software modernization, DevOps, and ongoing maintenance & support." },
        { q: "Do you work with startups as well as enterprises?", a: "Yes. We work with startups, SMBs, ISVs, and large enterprises. Whether you're validating an MVP, launching a SaaS platform, or modernizing enterprise systems, we tailor our engagement model to your business stage and technical requirements." },
        { q: "Can you modernize our legacy software?", a: "Absolutely. We help businesses modernize legacy applications by upgrading technologies, migrating to the cloud, improving performance, enhancing security, redesigning user experiences, and integrating modern APIs while minimizing business disruption." },
        { q: "What industries do you serve?", a: "Our team has experience developing software solutions for healthcare, fintech, retail, eCommerce, manufacturing, logistics, transportation, education, travel, hospitality, real estate, and on-demand service businesses." },
        { q: "Do you provide AI software development services?", a: "Yes. Our AI expertise includes Generative AI applications, AI chatbots, intelligent document processing, Retrieval-Augmented Generation (RAG), workflow automation, recommendation engines, predictive analytics, and Large Language Model integrations that help businesses automate processes and improve decision-making." },
        { q: "How do you ensure software quality and security?", a: "Quality and security are integrated throughout our development lifecycle. We follow secure coding standards, automated testing, code reviews, CI/CD pipelines, vulnerability assessments, performance testing, and continuous monitoring to deliver reliable and secure software solutions." },
        { q: "Do you provide post-launch support and maintenance?", a: "Yes. We offer long-term maintenance, feature enhancements, security updates, cloud monitoring, performance optimization, bug fixes, and technical support to ensure your software continues to evolve with your business." },
        { q: "How long does a software development project take?", a: "Project timelines vary depending on the scope, complexity, technology stack, and business requirements. After the discovery phase, we provide a detailed project roadmap with estimated milestones, deliverables, and timelines." },
        { q: "How do I get started with mTouch Labs?", a: "Simply contact our team to schedule a free consultation. We'll understand your business goals, evaluate your project requirements, recommend the most suitable technology approach, and provide a customized proposal to help you move forward with confidence." }
      ]} />

      <script dangerouslySetInnerHTML={{ __html: `
        (function() {
          function initAOS() {
            if (typeof AOS !== "undefined") { AOS.init({ duration: 800, once: true, offset: 80, easing: "ease-out-cubic" }); }
            else { setTimeout(initAOS, 200); }
          }
          initAOS();
          function animateCounters() {
            var nums = document.querySelectorAll("[data-count]");
            if (!nums.length) return setTimeout(animateCounters, 300);
            var observer = new IntersectionObserver(function(entries) {
              entries.forEach(function(entry) {
                if (entry.isIntersecting && !entry.target.dataset.animated) {
                  entry.target.dataset.animated = "true";
                  var target = parseInt(entry.target.dataset.count);
                  var suffix = entry.target.dataset.suffix || "+";
                  var duration = 2000;
                  var startTime = null;
                  function step(ts) {
                    if (!startTime) startTime = ts;
                    var progress = Math.min((ts - startTime) / duration, 1);
                    var eased = 1 - Math.pow(1 - progress, 3);
                    entry.target.textContent = Math.floor(eased * target) + suffix;
                    if (progress < 1) requestAnimationFrame(step);
                    else entry.target.textContent = target + suffix;
                  }
                  requestAnimationFrame(step);
                }
              });
            }, { threshold: 0.5 });
            nums.forEach(function(el) { observer.observe(el); });
          }
          animateCounters();
        })();
      `}} />
    </div>
  );
}