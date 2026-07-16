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
import ServiceHero from "@/components/sections/ServiceHero";
import FAQSchema from "@/components/seo/FAQSchema";

export const metadata: Metadata = {
  title: "Software Development Company in United States | mTouch Labs",
  description: "mTouch Labs is a leading software development company in the United States delivering custom software, enterprise applications, AI, SaaS, cloud, and mobile app development.",
  keywords: [
    "software development company in United States",
    "custom software development United States",
    "enterprise software United States",
    "AI development company USA",
    "SaaS development company USA",
    "cloud application development USA",
    "software development company Delaware"
  ],
  openGraph: { images: [{ url: "/images/Light.png", width: 1200, height: 630, alt: "mTouch Labs" }],
    title: "Software Development Company in United States",
    description: "mTouch Labs is a leading Software Development Company in United States delivering custom software, enterprise applications, cloud services, and AI solutions.",
    url: "https://www.mtouchlabs.com/software-development-company-usa",
    type: "website",
  },
  alternates: {
    canonical: "https://www.mtouchlabs.com/software-development-company-usa",
    languages: {
      "en-AU": "https://www.mtouchlabs.com/software-development-company-australia",
      "en-CA": "https://www.mtouchlabs.com/software-development-company-canada",
      "en-AE": "https://www.mtouchlabs.com/software-development-company-united-arab-emirates",
      "en-DE": "https://www.mtouchlabs.com/software-development-company-germany",
      "en-IN": "https://www.mtouchlabs.com/software-development-company-india",
      "en-IE": "https://www.mtouchlabs.com/software-development-company-ireland",
      "en-KW": "https://www.mtouchlabs.com/software-development-company-kuwait",
      "en-NZ": "https://www.mtouchlabs.com/software-development-company-new-zealand",
      "en-QA": "https://www.mtouchlabs.com/software-development-company-qatar",
      "en-SA": "https://www.mtouchlabs.com/software-development-company-saudi-arabia",
      "en-SG": "https://www.mtouchlabs.com/software-development-company-singapore",
      "en-GB": "https://www.mtouchlabs.com/software-development-company-united-kingdom",
      "en-US": "https://www.mtouchlabs.com/software-development-company-usa",
      "x-default": "https://www.mtouchlabs.com/software-development-company-india"
    }
  },
  twitter: {
    card: "summary_large_image",
    site: "@mtouchlabs",
    creator: "@mtouchlabs",
    title: "Software Development Company in United States | mTouch Labs",
    description: "mTouch Labs — software development company serving United States with custom software, cloud, AI and enterprise applications.",
    images: [{ url: "/images/Light.png", alt: "mTouch Labs Software Development Company in United States" }]
  },
  robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 }
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "mTouch Labs — Software Development in United States",
  "url": "https://www.mtouchlabs.com/software-development-company-usa",
  "description": "mTouch Labs — custom software, enterprise apps, cloud and AI for clients in United States.",
  "image": "https://www.mtouchlabs.com/images/Light.png",
  "priceRange": "$$",
  "areaServed": { "@type": "Country", "name": "United States" },
  "address": { "@type": "PostalAddress", "addressLocality": "Delaware", "addressCountry": "US" },
  "provider": { "@type": "Organization", "name": "mTouch Labs", "url": "https://www.mtouchlabs.com" },
  "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "reviewCount": "150", "bestRating": "5" }
};

const locationBreadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.mtouchlabs.com/" },
    { "@type": "ListItem", "position": 2, "name": "Locations", "item": "https://www.mtouchlabs.com/services" },
    { "@type": "ListItem", "position": 3, "name": "Software Development Company in United States", "item": "https://www.mtouchlabs.com/software-development-company-usa" }
  ]
};

export default function SoftwareDevelopmentCompanyUsa() {
  return (
    <div className="loc-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(locationBreadcrumb) }} />

      {/* ═══ HERO ═══ */}
      <ServiceHero
        badge="Software Development"
        titleLead="Software Development Company in"
        titleAccent="United States"
        description="Engineering enterprise-grade digital solutions for U.S. startups, scale-ups, and enterprises nationwide."
      />

      {/* ═══ INTRO ═══ */}
      <section className="loc-section loc-introSection">
        <div className="loc-sectionInner">
          <div className="loc-introGrid">
            <div>
              <h2 className="loc-introTitle">Supporting Businesses Across the United States</h2>
              <p className="loc-introText">mTouch Labs maintains a registered business presence in Delaware, USA, helping us stay close to clients across North America. We collaborate with startups, growing businesses, software product companies, and enterprises through a flexible global delivery model that combines experienced engineering teams with responsive communication and agile execution.</p>
              <p className="loc-introText">We proudly work with organizations across major business and technology hubs, including Delaware, New York, San Francisco, Los Angeles, Austin, Seattle, Chicago, Boston, Dallas, Miami, Atlanta, and Washington, D.C.</p>
              <div className="loc-introTags">
                <span className="loc-introTag">Delaware</span>
                <span className="loc-introTag">New York</span>
                <span className="loc-introTag">San Francisco</span>
                <span className="loc-introTag">Austin</span>
                <span className="loc-introTag">Seattle</span>
                <span className="loc-introTag">Chicago</span>
                <span className="loc-introTag">Boston</span>
              </div>
            </div>
            <div className="loc-introStats">
              <div className="loc-statCard">
                <div className="loc-statNum">14+</div>
                <div className="loc-statLabel">Years Experience</div>
              </div>
              <div className="loc-statCard">
                <div className="loc-statNum">500+</div>
                <div className="loc-statLabel">Global Projects</div>
              </div>
              <div className="loc-statCard">
                <div className="loc-statNum">DE</div>
                <div className="loc-statLabel">Registered US Presence</div>
              </div>
              <div className="loc-statCard">
                <div className="loc-statNum">99%</div>
                <div className="loc-statLabel">Retention</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ WHAT SETS US APART ═══ */}
      <section className="loc-section loc-whySection">
        <div className="loc-sectionInner">
          <div className="loc-sectionHeader">
            <h2 className="loc-sectionTitle">
              Why American Businesses Partner with <span className="loc-highlight">mTouch Labs</span>
            </h2>
            <p className="loc-sectionDesc">
              We work as a strategic technology partner, not just a development vendor.
            </p>
          </div>
          <div className="loc-whyGrid">
            <div className="loc-whyCard">
              <div className="loc-whyIcon">🧑‍💻</div>
              <div>
                <h4 className="loc-whyTitle">14+ Years of Engineering Experience</h4>
                <p className="loc-whyText">Proven expertise delivering software for startups, SMBs, and global enterprises.</p>
              </div>
            </div>
            <div className="loc-whyCard">
              <div className="loc-whyIcon">🤝</div>
              <div>
                <h4 className="loc-whyTitle">500+ Successful Engagements</h4>
                <p className="loc-whyText">Trusted by businesses across diverse industries and technology domains.</p>
              </div>
            </div>
            <div className="loc-whyCard">
              <div className="loc-whyIcon">🤖</div>
              <div>
                <h4 className="loc-whyTitle">AI, Cloud & Enterprise Expertise</h4>
                <p className="loc-whyText">Build intelligent, scalable, and future-ready software solutions.</p>
              </div>
            </div>
            <div className="loc-whyCard">
              <div className="loc-whyIcon">🔄</div>
              <div>
                <h4 className="loc-whyTitle">Agile & Transparent Delivery</h4>
                <p className="loc-whyText">Predictable milestones, continuous communication, and faster releases.</p>
              </div>
            </div>
            <div className="loc-whyCard">
              <div className="loc-whyIcon">🧩</div>
              <div>
                <h4 className="loc-whyTitle">Flexible Engagement Models</h4>
                <p className="loc-whyText">Dedicated teams, staff augmentation, and end-to-end project delivery.</p>
              </div>
            </div>
            <div className="loc-whyCard">
              <div className="loc-whyIcon">📈</div>
              <div>
                <h4 className="loc-whyTitle">Long-Term Technology Partnership</h4>
                <p className="loc-whyText">Continuous product improvements, maintenance, and strategic consulting.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ SERVICES ═══ */}
      <section className="loc-section loc-servicesSection">
        <div className="loc-sectionInner">
          <div className="loc-sectionHeader">
            <h2 className="loc-sectionTitle">
              Our Services in <span className="loc-highlight">United States</span>
            </h2>
            <p className="loc-sectionDesc">
              End-to-end software development services tailored for United States businesses.
            </p>
          </div>
          <div className="loc-servicesGrid">
            <div className="loc-serviceCard">
              <div className="loc-serviceIcon">⚙️</div>
              <h3 className="loc-serviceTitle">Custom Software Development</h3>
              <p className="loc-serviceDesc">Tailored enterprise-grade solutions designed for scalability and performance.</p>
            </div>
            <div className="loc-serviceCard">
              <div className="loc-serviceIcon">🏢</div>
              <h3 className="loc-serviceTitle">Enterprise Applications</h3>
              <p className="loc-serviceDesc">Robust ERP, CRM, and workflow automation for operational efficiency.</p>
            </div>
            <div className="loc-serviceCard">
              <div className="loc-serviceIcon">📱</div>
              <h3 className="loc-serviceTitle">Mobile App Development</h3>
              <p className="loc-serviceDesc">iOS, Android, and cross-platform applications built for growth.</p>
            </div>
            <div className="loc-serviceCard">
              <div className="loc-serviceIcon">☁️</div>
              <h3 className="loc-serviceTitle">Cloud Services & Migration</h3>
              <p className="loc-serviceDesc">Cloud-native architecture and secure migration strategies.</p>
            </div>
            <div className="loc-serviceCard">
              <div className="loc-serviceIcon">🤖</div>
              <h3 className="loc-serviceTitle">AI & Intelligent Automation</h3>
              <p className="loc-serviceDesc">AI-powered analytics and predictive systems for smarter decisions.</p>
            </div>
            <div className="loc-serviceCard">
              <div className="loc-serviceIcon">🚀</div>
              <h3 className="loc-serviceTitle">Digital Product Engineering</h3>
              <p className="loc-serviceDesc">From product discovery to MVP, architecture, and continuous enhancement.</p>
            </div>
            <div className="loc-serviceCard">
              <div className="loc-serviceIcon">🌐</div>
              <h3 className="loc-serviceTitle">Customer Experience Engineering</h3>
              <p className="loc-serviceDesc">Customer portals, digital commerce, and self-service applications.</p>
            </div>
            <div className="loc-serviceCard">
              <div className="loc-serviceIcon">🔌</div>
              <h3 className="loc-serviceTitle">API Development & Integration</h3>
              <p className="loc-serviceDesc">Secure APIs and enterprise integrations connecting your software ecosystem.</p>
            </div>
            <div className="loc-serviceCard">
              <div className="loc-serviceIcon">🛠️</div>
              <h3 className="loc-serviceTitle">Legacy Software Modernization</h3>
              <p className="loc-serviceDesc">Migrate, refactor, and modernize outdated systems without disruption.</p>
            </div>
            <div className="loc-serviceCard">
              <div className="loc-serviceIcon">🧩</div>
              <h3 className="loc-serviceTitle">Software Maintenance & Support</h3>
              <p className="loc-serviceDesc">Ongoing monitoring, updates, and technical support post-launch.</p>
            </div>
            <div className="loc-serviceCard">
              <div className="loc-serviceIcon">🔁</div>
              <h3 className="loc-serviceTitle">DevOps & CI/CD Automation</h3>
              <p className="loc-serviceDesc">Automated pipelines, infrastructure as code, and faster, safer releases.</p>
            </div>
            <div className="loc-serviceCard">
              <div className="loc-serviceIcon">🎨</div>
              <h3 className="loc-serviceTitle">UI/UX Design Services</h3>
              <p className="loc-serviceDesc">Research-driven interface design that improves usability and conversion.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ BUSINESS SOLUTIONS WE DEVELOP ═══ */}
      <section className="loc-section loc-servicesSection">
        <div className="loc-sectionInner">
          <div className="loc-sectionHeader">
            <h2 className="loc-sectionTitle">
              Business Solutions We <span className="loc-highlight">Develop</span>
            </h2>
            <p className="loc-sectionDesc">
              Software engineered around real business challenges, not generic templates.
            </p>
          </div>
          <div className="loc-servicesGrid">
            <div className="loc-serviceCard">
              <div className="loc-serviceIcon">🏢</div>
              <h3 className="loc-serviceTitle">Enterprise Business Applications</h3>
              <p className="loc-serviceDesc">ERP, CRM, HRMS, inventory management, procurement, and executive dashboards.</p>
            </div>
            <div className="loc-serviceCard">
              <div className="loc-serviceIcon">🖥️</div>
              <h3 className="loc-serviceTitle">Customer Experience Platforms</h3>
              <p className="loc-serviceDesc">Customer portals, membership platforms, booking systems, and loyalty apps.</p>
            </div>
            <div className="loc-serviceCard">
              <div className="loc-serviceIcon">🤖</div>
              <h3 className="loc-serviceTitle">AI-Driven Business Applications</h3>
              <p className="loc-serviceDesc">Enterprise AI assistants, generative AI apps, and intelligent document processing.</p>
            </div>
            <div className="loc-serviceCard">
              <div className="loc-serviceIcon">☁️</div>
              <h3 className="loc-serviceTitle">Cloud-Based Business Platforms</h3>
              <p className="loc-serviceDesc">SaaS platforms, multi-tenant apps, cloud portals, and API-driven systems.</p>
            </div>
            <div className="loc-serviceCard">
              <div className="loc-serviceIcon">🛒</div>
              <h3 className="loc-serviceTitle">eCommerce & Marketplace Solutions</h3>
              <p className="loc-serviceDesc">Multi-vendor marketplaces, B2B/B2C commerce, and order management platforms.</p>
            </div>
            <div className="loc-serviceCard">
              <div className="loc-serviceIcon">🏭</div>
              <h3 className="loc-serviceTitle">Industry-Specific Software Solutions</h3>
              <p className="loc-serviceDesc">Purpose-built platforms for healthcare, FinTech, logistics, and retail.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ WHY US (execution) ═══ */}
      <section className="loc-section loc-whySection">
        <div className="loc-sectionInner">
          <div className="loc-sectionHeader">
            <h2 className="loc-sectionTitle">
              Why Businesses Choose <span className="loc-highlight">mTouch Labs</span>
            </h2>
          </div>
          <div className="loc-whyGrid">
            <div className="loc-whyCard">
              <div className="loc-whyIcon">👥</div>
              <div>
                <h4 className="loc-whyTitle">Experienced Team</h4>
                <p className="loc-whyText">Skilled engineers with deep domain expertise.</p>
              </div>
            </div>
            <div className="loc-whyCard">
              <div className="loc-whyIcon">🔄</div>
              <div>
                <h4 className="loc-whyTitle">Agile Methodology</h4>
                <p className="loc-whyText">Sprint-based delivery for rapid results.</p>
              </div>
            </div>
            <div className="loc-whyCard">
              <div className="loc-whyIcon">☁️</div>
              <div>
                <h4 className="loc-whyTitle">Cloud-First Architecture</h4>
                <p className="loc-whyText">Scalable infrastructure built for performance.</p>
              </div>
            </div>
            <div className="loc-whyCard">
              <div className="loc-whyIcon">🔒</div>
              <div>
                <h4 className="loc-whyTitle">Enterprise Security</h4>
                <p className="loc-whyText">Industry-standard security and compliance.</p>
              </div>
            </div>
            <div className="loc-whyCard">
              <div className="loc-whyIcon">📊</div>
              <div>
                <h4 className="loc-whyTitle">Transparent Process</h4>
                <p className="loc-whyText">Real-time project tracking and reporting.</p>
              </div>
            </div>
            <div className="loc-whyCard">
              <div className="loc-whyIcon">🛠️</div>
              <div>
                <h4 className="loc-whyTitle">Long-Term Support</h4>
                <p className="loc-whyText">Ongoing maintenance and optimization.</p>
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
              Industries We Serve in <span className="loc-highlight">United States</span>
            </h2>
          </div>
          <div className="loc-industriesGrid">
            <div className="loc-industryCard">
              <span className="loc-industryEmoji">🏥</span>
              <h4 className="loc-industryName">Healthcare & HealthTech</h4>
            </div>
            <div className="loc-industryCard">
              <span className="loc-industryEmoji">💳</span>
              <h4 className="loc-industryName">Fintech & Banking</h4>
            </div>
            <div className="loc-industryCard">
              <span className="loc-industryEmoji">🛒</span>
              <h4 className="loc-industryName">E-commerce & Retail</h4>
            </div>
            <div className="loc-industryCard">
              <span className="loc-industryEmoji">🚚</span>
              <h4 className="loc-industryName">Logistics & Supply Chain</h4>
            </div>
            <div className="loc-industryCard">
              <span className="loc-industryEmoji">📚</span>
              <h4 className="loc-industryName">Education Technology</h4>
            </div>
            <div className="loc-industryCard">
              <span className="loc-industryEmoji">💼</span>
              <h4 className="loc-industryName">Enterprise SaaS</h4>
            </div>
            <div className="loc-industryCard">
              <span className="loc-industryEmoji">🏭</span>
              <h4 className="loc-industryName">Manufacturing</h4>
            </div>
            <div className="loc-industryCard">
              <span className="loc-industryEmoji">🏠</span>
              <h4 className="loc-industryName">Real Estate</h4>
            </div>
            <div className="loc-industryCard">
              <span className="loc-industryEmoji">✈️</span>
              <h4 className="loc-industryName">Travel & Hospitality</h4>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ TECHNOLOGIES ═══ */}
      <section className="loc-section loc-introSection">
        <div className="loc-sectionInner">
          <div className="loc-sectionHeader">
            <h2 className="loc-sectionTitle">
              Modern Technologies Behind Every <span className="loc-highlight">Solution</span>
            </h2>
            <p className="loc-sectionDesc">
              The frameworks, cloud platforms, and AI technologies our engineering teams work with daily.
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
                  <span className="loc-introTag">PHP</span>
                </div>
              </div>
            </div>
            <div className="loc-whyCard">
              <div className="loc-whyIcon">📱</div>
              <div>
                <h4 className="loc-whyTitle">Mobile</h4>
                <div className="loc-introTags">
                  <span className="loc-introTag">Flutter</span>
                  <span className="loc-introTag">React Native</span>
                  <span className="loc-introTag">Android</span>
                  <span className="loc-introTag">iOS</span>
                </div>
              </div>
            </div>
            <div className="loc-whyCard">
              <div className="loc-whyIcon">☁️</div>
              <div>
                <h4 className="loc-whyTitle">Cloud & DevOps</h4>
                <div className="loc-introTags">
                  <span className="loc-introTag">AWS</span>
                  <span className="loc-introTag">Azure</span>
                  <span className="loc-introTag">Google Cloud</span>
                  <span className="loc-introTag">Docker</span>
                  <span className="loc-introTag">Kubernetes</span>
                </div>
              </div>
            </div>
            <div className="loc-whyCard">
              <div className="loc-whyIcon">🗄️</div>
              <div>
                <h4 className="loc-whyTitle">Data & Intelligence</h4>
                <div className="loc-introTags">
                  <span className="loc-introTag">PostgreSQL</span>
                  <span className="loc-introTag">MySQL</span>
                  <span className="loc-introTag">MongoDB</span>
                  <span className="loc-introTag">Redis</span>
                </div>
              </div>
            </div>
            <div className="loc-whyCard">
              <div className="loc-whyIcon">🧠</div>
              <div>
                <h4 className="loc-whyTitle">AI & Emerging Tech</h4>
                <div className="loc-introTags">
                  <span className="loc-introTag">OpenAI</span>
                  <span className="loc-introTag">LLMs</span>
                  <span className="loc-introTag">RAG</span>
                  <span className="loc-introTag">Machine Learning</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ PROCESS ═══ */}
      <section className="loc-section loc-processSection">
        <div className="loc-sectionInner">
          <div className="loc-sectionHeader">
            <h2 className="loc-sectionTitle">Our Development Approach</h2>
            <p className="loc-sectionDesc">
              A structured process tailored to deliver measurable ROI through scalable digital systems.
            </p>
          </div>
          <div className="loc-processSteps">
            <div className="loc-processStep">
              <div className="loc-processNum">01</div>
              <div className="loc-processStepContent">
                <h4 className="loc-processStepTitle">Business Discovery</h4>
                <p className="loc-processStepDesc">Understand your goals, users, challenges, and project vision.</p>
              </div>
            </div>
            <div className="loc-processStep">
              <div className="loc-processNum">02</div>
              <div className="loc-processStepContent">
                <h4 className="loc-processStepTitle">Solution Planning</h4>
                <p className="loc-processStepDesc">Define architecture, technology stack, and project milestones.</p>
              </div>
            </div>
            <div className="loc-processStep">
              <div className="loc-processNum">03</div>
              <div className="loc-processStepContent">
                <h4 className="loc-processStepTitle">Design & Prototyping</h4>
                <p className="loc-processStepDesc">Create intuitive user experiences and validate product concepts.</p>
              </div>
            </div>
            <div className="loc-processStep">
              <div className="loc-processNum">04</div>
              <div className="loc-processStepContent">
                <h4 className="loc-processStepTitle">Agile Development</h4>
                <p className="loc-processStepDesc">Deliver software in iterative sprints with regular reviews.</p>
              </div>
            </div>
            <div className="loc-processStep">
              <div className="loc-processNum">05</div>
              <div className="loc-processStepContent">
                <h4 className="loc-processStepTitle">Quality Assurance & Deployment</h4>
                <p className="loc-processStepDesc">Test, optimize, and launch secure, production-ready applications.</p>
              </div>
            </div>
            <div className="loc-processStep">
              <div className="loc-processNum">06</div>
              <div className="loc-processStepContent">
                <h4 className="loc-processStepTitle">Continuous Support & Enhancement</h4>
                <p className="loc-processStepDesc">Maintain, improve, and scale your software as your business grows.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ ENGAGEMENT MODELS ═══ */}
      <section className="loc-section loc-whySection">
        <div className="loc-sectionInner">
          <div className="loc-sectionHeader">
            <h2 className="loc-sectionTitle">
              Flexible <span className="loc-highlight">Engagement Models</span>
            </h2>
            <p className="loc-sectionDesc">
              Choose the model that fits your project scope, budget, and timeline.
            </p>
          </div>
          <div className="loc-whyGrid">
            <div className="loc-whyCard">
              <div className="loc-whyIcon">👨‍💻</div>
              <div>
                <h4 className="loc-whyTitle">Dedicated Development Team</h4>
                <p className="loc-whyText">Long-term product development and ongoing engineering support.</p>
              </div>
            </div>
            <div className="loc-whyCard">
              <div className="loc-whyIcon">➕</div>
              <div>
                <h4 className="loc-whyTitle">Team Augmentation</h4>
                <p className="loc-whyText">Expand in-house engineering capabilities with experienced specialists.</p>
              </div>
            </div>
            <div className="loc-whyCard">
              <div className="loc-whyIcon">📌</div>
              <div>
                <h4 className="loc-whyTitle">Fixed Scope Projects</h4>
                <p className="loc-whyText">Clearly defined projects with predetermined requirements and timelines.</p>
              </div>
            </div>
            <div className="loc-whyCard">
              <div className="loc-whyIcon">🔁</div>
              <div>
                <h4 className="loc-whyTitle">Agile Product Partnership</h4>
                <p className="loc-whyText">Continuous product development, feature enhancements, and innovation.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ REGIONS SERVED ═══ */}
      <section className="loc-section loc-introSection">
        <div className="loc-sectionInner">
          <div className="loc-introGrid">
            <div>
              <h2 className="loc-introTitle">Delivering Innovation Across the United States</h2>
              <p className="loc-introText">With a registered business presence in Delaware, mTouch Labs partners with organizations across the United States to build software that supports innovation and long-term growth.</p>
              <div className="loc-introTags">
                <span className="loc-introTag">Delaware</span>
                <span className="loc-introTag">New York</span>
                <span className="loc-introTag">California</span>
                <span className="loc-introTag">Texas</span>
                <span className="loc-introTag">Washington</span>
                <span className="loc-introTag">Florida</span>
                <span className="loc-introTag">Massachusetts</span>
                <span className="loc-introTag">Illinois</span>
                <span className="loc-introTag">Georgia</span>
                <span className="loc-introTag">North Carolina</span>
              </div>
            </div>
            <div className="loc-introStats">
              <div className="loc-statCard">
                <div className="loc-statNum">10+</div>
                <div className="loc-statLabel">States Served</div>
              </div>
              <div className="loc-statCard">
                <div className="loc-statNum">24/7</div>
                <div className="loc-statLabel">Support Availability</div>
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
                <span className="loc-faqChevron">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6"/></svg>
                </span>
              </summary>
              <div className="loc-faqAnswer">mTouch Labs combines over 14 years of software engineering experience with a registered business presence in Delaware, USA, helping startups, SMBs, ISVs, and enterprises build custom software, AI applications, SaaS platforms, and cloud-native solutions.</div>
            </details>
            <details className="loc-faqItem">
              <summary className="loc-faqQuestion">
                <span className="loc-faqQuestionText">What software development services do you offer in the USA?</span>
                <span className="loc-faqChevron">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6"/></svg>
                </span>
              </summary>
              <div className="loc-faqAnswer">We provide custom software development, enterprise software, AI and Generative AI development, SaaS development, web and mobile app development, cloud engineering, API integration, DevOps, and ongoing maintenance.</div>
            </details>
            <details className="loc-faqItem">
              <summary className="loc-faqQuestion">
                <span className="loc-faqQuestionText">Do you develop custom software for startups and enterprises?</span>
                <span className="loc-faqChevron">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6"/></svg>
                </span>
              </summary>
              <div className="loc-faqAnswer">Yes. We develop tailored software for startups, SMBs, and enterprises, including MVPs, SaaS platforms, enterprise applications, and customer portals designed around your business goals.</div>
            </details>
            <details className="loc-faqItem">
              <summary className="loc-faqQuestion">
                <span className="loc-faqQuestionText">Can you build AI-powered software applications?</span>
                <span className="loc-faqChevron">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6"/></svg>
                </span>
              </summary>
              <div className="loc-faqAnswer">Absolutely. We build Generative AI applications, enterprise AI assistants, intelligent chatbots, predictive analytics, machine learning models, and RAG-based systems.</div>
            </details>
            <details className="loc-faqItem">
              <summary className="loc-faqQuestion">
                <span className="loc-faqQuestionText">Which industries does mTouch Labs serve?</span>
                <span className="loc-faqChevron">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6"/></svg>
                </span>
              </summary>
              <div className="loc-faqAnswer">We deliver software for healthcare, fintech, banking, retail, eCommerce, manufacturing, logistics, education, real estate, travel, hospitality, food and grocery, and insurance.</div>
            </details>
            <details className="loc-faqItem">
              <summary className="loc-faqQuestion">
                <span className="loc-faqQuestionText">Do you provide dedicated software development teams?</span>
                <span className="loc-faqChevron">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6"/></svg>
                </span>
              </summary>
              <div className="loc-faqAnswer">Yes. Businesses can hire dedicated software engineers, UI/UX designers, QA specialists, DevOps engineers, and project managers who work exclusively on their project.</div>
            </details>
            <details className="loc-faqItem">
              <summary className="loc-faqQuestion">
                <span className="loc-faqQuestionText">How do you manage software development projects for US clients?</span>
                <span className="loc-faqChevron">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6"/></svg>
                </span>
              </summary>
              <div className="loc-faqAnswer">We follow Agile methodologies with sprint planning, milestone tracking, and transparent communication using Jira, Slack, Microsoft Teams, Zoom, and GitHub.</div>
            </details>
            <details className="loc-faqItem">
              <summary className="loc-faqQuestion">
                <span className="loc-faqQuestionText">Can you modernize legacy software applications?</span>
                <span className="loc-faqChevron">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6"/></svg>
                </span>
              </summary>
              <div className="loc-faqAnswer">Yes. We modernize legacy software through cloud migration, architecture upgrades, UI/UX improvements, and enhanced security while minimizing business disruption.</div>
            </details>
            <details className="loc-faqItem">
              <summary className="loc-faqQuestion">
                <span className="loc-faqQuestionText">Do you provide cloud application development services?</span>
                <span className="loc-faqChevron">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6"/></svg>
                </span>
              </summary>
              <div className="loc-faqAnswer">Yes. Our cloud engineering team develops cloud-native applications and provides migration, DevOps implementation, and optimization on AWS, Azure, and Google Cloud.</div>
            </details>
            <details className="loc-faqItem">
              <summary className="loc-faqQuestion">
                <span className="loc-faqQuestionText">What engagement models do you offer?</span>
                <span className="loc-faqChevron">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6"/></svg>
                </span>
              </summary>
              <div className="loc-faqAnswer">We offer Dedicated Development Teams, Team Augmentation, Fixed Scope Projects, and Agile Product Partnerships based on your project needs.</div>
            </details>
            <details className="loc-faqItem">
              <summary className="loc-faqQuestion">
                <span className="loc-faqQuestionText">Do you offer software maintenance and support after launch?</span>
                <span className="loc-faqChevron">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6"/></svg>
                </span>
              </summary>
              <div className="loc-faqAnswer">Yes. We provide ongoing maintenance, security updates, feature enhancements, cloud management, and technical support to keep software performing reliably.</div>
            </details>
            <details className="loc-faqItem">
              <summary className="loc-faqQuestion">
                <span className="loc-faqQuestionText">How much does custom software development cost in the USA?</span>
                <span className="loc-faqChevron">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6"/></svg>
                </span>
              </summary>
              <div className="loc-faqAnswer">Cost depends on project scope, complexity, technology stack, integrations, and engagement model. We provide a transparent proposal after understanding your requirements.</div>
            </details>
            <details className="loc-faqItem">
              <summary className="loc-faqQuestion">
                <span className="loc-faqQuestionText">Do you work with clients across all US states?</span>
                <span className="loc-faqChevron">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6"/></svg>
                </span>
              </summary>
              <div className="loc-faqAnswer">Yes. With a registered presence in Delaware, we serve clients nationwide, including New York, California, Texas, Washington, Florida, Massachusetts, Illinois, Georgia, and North Carolina.</div>
            </details>
            <details className="loc-faqItem">
              <summary className="loc-faqQuestion">
                <span className="loc-faqQuestionText">How can I get started with mTouch Labs?</span>
                <span className="loc-faqChevron">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6"/></svg>
                </span>
              </summary>
              <div className="loc-faqAnswer">Contact our team for a free consultation. We'll understand your business goals, recommend the right technology approach, and prepare a customized proposal.</div>
            </details>
          </div>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section className="loc-ctaSection">
        <div className="loc-ctaInner">
          <h2 className="loc-ctaTitle">Ready to Build Something Great?</h2>
          <p className="loc-ctaDesc">
            Partner with mTouch Labs to transform your business with scalable, secure, and innovative software solutions.
          </p>
          <div className="loc-ctaActions">
            <Link href="/contact-us" className="loc-ctaBtnPrimary">
              Get a Free Consultation →
            </Link>
            <Link href="/portfolio" className="loc-ctaBtnSecondary">
              Explore Our Work
            </Link>
          </div>
        </div>
      </section>

      <FAQSchema faqs={[
        { q: "Why choose mTouch Labs as your software development company in the USA?", a: "mTouch Labs combines over 14 years of software engineering experience with a registered business presence in Delaware, USA, helping startups, SMBs, ISVs, and enterprises build custom software, AI applications, SaaS platforms, and cloud-native solutions." },
        { q: "What software development services do you offer in the USA?", a: "We provide custom software development, enterprise software, AI and Generative AI development, SaaS development, web and mobile app development, cloud engineering, API integration, DevOps, and ongoing maintenance." },
        { q: "Do you develop custom software for startups and enterprises?", a: "Yes. We develop tailored software for startups, SMBs, and enterprises, including MVPs, SaaS platforms, enterprise applications, and customer portals designed around your business goals." },
        { q: "Can you build AI-powered software applications?", a: "Absolutely. We build Generative AI applications, enterprise AI assistants, intelligent chatbots, predictive analytics, machine learning models, and RAG-based systems." },
        { q: "Which industries does mTouch Labs serve?", a: "We deliver software for healthcare, fintech, banking, retail, eCommerce, manufacturing, logistics, education, real estate, travel, hospitality, food and grocery, and insurance." },
        { q: "Do you provide dedicated software development teams?", a: "Yes. Businesses can hire dedicated software engineers, UI/UX designers, QA specialists, DevOps engineers, and project managers who work exclusively on their project." },
        { q: "How do you manage software development projects for US clients?", a: "We follow Agile methodologies with sprint planning, milestone tracking, and transparent communication using Jira, Slack, Microsoft Teams, Zoom, and GitHub." },
        { q: "Can you modernize legacy software applications?", a: "Yes. We modernize legacy software through cloud migration, architecture upgrades, UI/UX improvements, and enhanced security while minimizing business disruption." },
        { q: "Do you provide cloud application development services?", a: "Yes. Our cloud engineering team develops cloud-native applications and provides migration, DevOps implementation, and optimization on AWS, Azure, and Google Cloud." },
        { q: "What engagement models do you offer?", a: "We offer Dedicated Development Teams, Team Augmentation, Fixed Scope Projects, and Agile Product Partnerships based on your project needs." },
        { q: "Do you offer software maintenance and support after launch?", a: "Yes. We provide ongoing maintenance, security updates, feature enhancements, cloud management, and technical support to keep software performing reliably." },
        { q: "How much does custom software development cost in the USA?", a: "Cost depends on project scope, complexity, technology stack, integrations, and engagement model. We provide a transparent proposal after understanding your requirements." },
        { q: "Do you work with clients across all US states?", a: "Yes. With a registered presence in Delaware, we serve clients nationwide, including New York, California, Texas, Washington, Florida, Massachusetts, Illinois, Georgia, and North Carolina." },
        { q: "How can I get started with mTouch Labs?", a: "Contact our team for a free consultation. We'll understand your business goals, recommend the right technology approach, and prepare a customized proposal." }
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