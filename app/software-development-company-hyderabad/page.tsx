// import type { Metadata } from "next";
// import Link from "next/link";
// import FAQSchema from "@/components/seo/FAQSchema";
// import ServiceHero from "@/components/sections/ServiceHero";

// export const metadata: Metadata = {
//   title: "Software Development Company in Hyderabad",
//   description: "Looking for a software development company in Hyderabad? mTouch Labs delivers custom software, mobile apps, enterprise solutions, cloud, and AI services.",
//   keywords: ["software development company in Hyderabad","custom software development Hyderabad","mobile app development company Hyderabad","enterprise application development Hyderabad","AI development company Hyderabad"],
//   openGraph: { images: [{ url: "/images/Light.png", width: 1200, height: 630, alt: "mTouch Labs" }],
//     title: "Software Development Company in Hyderabad",
//     description: "mTouch Labs is a leading Software Development Company in Hyderabad offering custom software, enterprise applications, mobile apps, cloud services, and AI solutions.",
//     url: "https://www.mtouchlabs.com/software-development-company-hyderabad",
//     type: "website",
//   },
//   alternates: {
//     canonical: "https://www.mtouchlabs.com/software-development-company-hyderabad",
//   },
//   twitter: {
//     card: "summary_large_image",
//     site: "@mtouchlabs",
//     creator: "@mtouchlabs",
//     title: "Software Development Company in Hyderabad | mTouch Labs",
//     description: "mTouch Labs — software development company serving Hyderabad with custom software, cloud, AI and enterprise applications.",
//     images: [{ url: "/images/Light.png", alt: "mTouch Labs Software Development Company in Hyderabad" }]
//   },
//   robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 }
// };


// const localBusinessSchema = {
//   "@context": "https://schema.org",
//   "@type": "ProfessionalService",
//   "name": "mTouch Labs — Software Development in Hyderabad",
//   "url": "https://www.mtouchlabs.com/software-development-company-hyderabad",
//   "description": "mTouch Labs — custom software, enterprise apps, cloud and AI for clients in Hyderabad.",
//   "image": "https://www.mtouchlabs.com/images/Light.png",
//   "priceRange": "$$",
//   "areaServed": { "@type": "Country", "name": "Hyderabad" },
//   "address": { "@type": "PostalAddress", "addressLocality": "Hyderabad", "addressCountry": "IN" },
//   "provider": { "@type": "Organization", "name": "mTouch Labs", "url": "https://www.mtouchlabs.com" },
//   "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "reviewCount": "150", "bestRating": "5" }
// };

// const locationBreadcrumb = {
//   "@context": "https://schema.org",
//   "@type": "BreadcrumbList",
//   "itemListElement": [
//     { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.mtouchlabs.com/" },
//     { "@type": "ListItem", "position": 2, "name": "Locations", "item": "https://www.mtouchlabs.com/services" },
//     { "@type": "ListItem", "position": 3, "name": "Software Development Company in Hyderabad", "item": "https://www.mtouchlabs.com/software-development-company-hyderabad" }
//   ]
// };

// export default function SoftwareDevelopmentCompanyHyderabad() {
//   return (
//     <div className="loc-page">
//       <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
//       <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(locationBreadcrumb) }} />
//       {/* ═══ HERO ═══ */}
//       <ServiceHero
//         badge="mTouch Labs · Hyderabad"
//         titleLead="Software Development Company in"
//         titleAccent="Hyderabad"
//         description={<>Delivering scalable, secure, and performance-driven digital solutions for startups, SMEs, and enterprises in one of India&apos;s fastest-growing technology hubs.</>}
//       />

//       {/* ═══ INTRO ═══ */}
//       <section className="loc-section loc-introSection">
//         <div className="loc-sectionInner">
//           <div className="loc-introGrid">
//             <div>
//               <h2 className="loc-introTitle">Supporting Hyderabad's Growing Tech Ecosystem</h2>
//               <p className="loc-introText">Hyderabad has rapidly emerged as a major IT and innovation hub in India. With thriving startups, global enterprises, and expanding digital-first businesses, companies require reliable technology partners to scale efficiently.</p>
//               <div className="loc-introTags">
//                 <span className="loc-introTag">HITEC City</span>
//                 <span className="loc-introTag">Gachibowli</span>
//                 <span className="loc-introTag">Madhapur</span>
//                 <span className="loc-introTag">Kondapur</span>
//                 <span className="loc-introTag">Financial District</span>
//               </div>
//             </div>
//             <div className="loc-introStats">
//               <div className="loc-statCard">
//                 <div className="loc-statNum">2000+</div>
//                 <div className="loc-statLabel">Projects</div>
//               </div>
//               <div className="loc-statCard">
//                 <div className="loc-statNum">1050+</div>
//                 <div className="loc-statLabel">Clients</div>
//               </div>
//               <div className="loc-statCard">
//                 <div className="loc-statNum">14+</div>
//                 <div className="loc-statLabel">Years</div>
//               </div>
//               <div className="loc-statCard">
//                 <div className="loc-statNum">99%</div>
//                 <div className="loc-statLabel">Retention</div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ═══ SERVICES ═══ */}
//       <section className="loc-section loc-servicesSection">
//         <div className="loc-sectionInner">
//           <div className="loc-sectionHeader">
//             <h2 className="loc-sectionTitle">
//               Our Services in <span className="loc-highlight">Hyderabad</span>
//             </h2>
//             <p className="loc-sectionDesc">
//               End-to-end software development services tailored for Hyderabad businesses.
//             </p>
//           </div>
//           <div className="loc-servicesGrid">
//             <div className="loc-serviceCard">
//               <div className="loc-serviceIcon">⚙️</div>
//               <h3 className="loc-serviceTitle">Custom Software Development</h3>
//               <p className="loc-serviceDesc">Tailored enterprise-grade software solutions designed for scalability, performance, and security.</p>
//             </div>
//             <div className="loc-serviceCard">
//               <div className="loc-serviceIcon">🏢</div>
//               <h3 className="loc-serviceTitle">Enterprise Applications</h3>
//               <p className="loc-serviceDesc">Robust ERP, CRM, and workflow automation platforms for operational efficiency.</p>
//             </div>
//             <div className="loc-serviceCard">
//               <div className="loc-serviceIcon">📱</div>
//               <h3 className="loc-serviceTitle">Mobile App Development</h3>
//               <p className="loc-serviceDesc">iOS, Android, and cross-platform applications for startups and enterprises.</p>
//             </div>
//             <div className="loc-serviceCard">
//               <div className="loc-serviceIcon">☁️</div>
//               <h3 className="loc-serviceTitle">Cloud Services & Migration</h3>
//               <p className="loc-serviceDesc">Cloud-native architecture, infrastructure management, and secure migration strategies.</p>
//             </div>
//             <div className="loc-serviceCard">
//               <div className="loc-serviceIcon">🤖</div>
//               <h3 className="loc-serviceTitle">AI & Intelligent Automation</h3>
//               <p className="loc-serviceDesc">AI-powered analytics, automation tools, and predictive systems for smarter decisions.</p>
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
//                 <h4 className="loc-whyTitle">Experienced Local Team</h4>
//                 <p className="loc-whyText">Hyderabad-based development team with deep domain expertise.</p>
//               </div>
//             </div>
//             <div className="loc-whyCard">
//               <div className="loc-whyIcon">🔄</div>
//               <div>
//                 <h4 className="loc-whyTitle">Agile & DevOps-Driven</h4>
//                 <p className="loc-whyText">Sprint-based methodology for rapid, iterative delivery.</p>
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
//                 <p className="loc-whyText">Industry-standard security protocols and compliance.</p>
//               </div>
//             </div>
//             <div className="loc-whyCard">
//               <div className="loc-whyIcon">📊</div>
//               <div>
//                 <h4 className="loc-whyTitle">Transparent Management</h4>
//                 <p className="loc-whyText">Real-time project tracking and reporting.</p>
//               </div>
//             </div>
//             <div className="loc-whyCard">
//               <div className="loc-whyIcon">🛠️</div>
//               <div>
//                 <h4 className="loc-whyTitle">Long-Term Support</h4>
//                 <p className="loc-whyText">Ongoing maintenance, monitoring, and optimization.</p>
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
//               Industries We Serve in <span className="loc-highlight">Hyderabad</span>
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
//                 <p className="loc-processStepDesc">Designing scalable system architecture and technology stack.</p>
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
//                 <p className="loc-processStepDesc">Sprint-based development with continuous integration.</p>
//               </div>
//             </div>
//             <div className="loc-processStep">
//               <div className="loc-processNum">05</div>
//               <div className="loc-processStepContent">
//                 <h4 className="loc-processStepTitle">Quality Testing</h4>
//                 <p className="loc-processStepDesc">Comprehensive testing and performance optimization.</p>
//               </div>
//             </div>
//             <div className="loc-processStep">
//               <div className="loc-processNum">06</div>
//               <div className="loc-processStepContent">
//                 <h4 className="loc-processStepTitle">Deployment & Support</h4>
//                 <p className="loc-processStepDesc">Launch and ongoing maintenance for optimal performance.</p>
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
//                 <span className="loc-faqQuestionText">Why choose a software development company in Hyderabad?</span>
//                 <span className="loc-faqChevron">
//                   <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6"/></svg>
//                 </span>
//               </summary>
//               <div className="loc-faqAnswer">Hyderabad offers a strong IT ecosystem, experienced talent pool, and cost-effective development solutions, making it an ideal technology hub.</div>
//             </details>
//             <details className="loc-faqItem">
//               <summary className="loc-faqQuestion">
//                 <span className="loc-faqQuestionText">Does mTouch Labs provide custom software development in Hyderabad?</span>
//                 <span className="loc-faqChevron">
//                   <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6"/></svg>
//                 </span>
//               </summary>
//               <div className="loc-faqAnswer">Yes, we provide fully customized software development services tailored to startups, SMEs, and enterprises in Hyderabad.</div>
//             </details>
//             <details className="loc-faqItem">
//               <summary className="loc-faqQuestion">
//                 <span className="loc-faqQuestionText">Do you offer mobile app development services in Hyderabad?</span>
//                 <span className="loc-faqChevron">
//                   <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6"/></svg>
//                 </span>
//               </summary>
//               <div className="loc-faqAnswer">Yes, we develop iOS, Android, and cross-platform mobile applications for businesses across Hyderabad.</div>
//             </details>
//             <details className="loc-faqItem">
//               <summary className="loc-faqQuestion">
//                 <span className="loc-faqQuestionText">Can you help with cloud migration and AI solutions?</span>
//                 <span className="loc-faqChevron">
//                   <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6"/></svg>
//                 </span>
//               </summary>
//               <div className="loc-faqAnswer">Yes, we offer cloud migration services and AI-powered automation solutions for Hyderabad-based businesses.</div>
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
//     { q: "Why choose a software development company in Hyderabad?", a: "Hyderabad offers a strong IT ecosystem, experienced talent pool, and cost-effective development solutions, making it an ideal technology hub." },
//     { q: "Does mTouch Labs provide custom software development in Hyderabad?", a: "Yes, we provide fully customized software development services tailored to startups, SMEs, and enterprises in Hyderabad." },
//     { q: "Do you offer mobile app development services in Hyderabad?", a: "Yes, we develop iOS, Android, and cross-platform mobile applications for businesses across Hyderabad." },
//     { q: "Can you help with cloud migration and AI solutions?", a: "Yes, we offer cloud migration services and AI-powered automation solutions for Hyderabad-based businesses." },
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
  title: "Software Development Company in Hyderabad | mTouch Labs",
  description: "Looking for a trusted software development company in Hyderabad? mTouch Labs delivers custom software, AI, web, mobile app, SaaS, and enterprise software development services for startups and businesses worldwide.",
  keywords: [
    "software development company in Hyderabad",
    "custom software development Hyderabad",
    "mobile app development company Hyderabad",
    "enterprise application development Hyderabad",
    "AI development company Hyderabad",
    "SaaS development company Hyderabad",
    "cloud application development Hyderabad",
    "ERP development Hyderabad",
    "CRM software development Hyderabad",
    "software outsourcing Hyderabad"
  ],
  openGraph: {
    images: [{ url: "/images/Light.png", width: 1200, height: 630, alt: "mTouch Labs" }],
    title: "Software Development Company in Hyderabad",
    description: "mTouch Labs is a leading Software Development Company in Hyderabad offering custom software, enterprise applications, mobile apps, cloud services, and AI solutions.",
    url: "https://www.mtouchlabs.com/software-development-company-hyderabad",
    type: "website",
  },
  alternates: {
    canonical: "https://www.mtouchlabs.com/software-development-company-hyderabad",
  },
  twitter: {
    card: "summary_large_image",
    site: "@mtouchlabs",
    creator: "@mtouchlabs",
    title: "Software Development Company in Hyderabad | mTouch Labs",
    description: "mTouch Labs — software development company serving Hyderabad with custom software, cloud, AI and enterprise applications.",
    images: [{ url: "/images/Light.png", alt: "mTouch Labs Software Development Company in Hyderabad" }]
  },
  robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 }
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "mTouch Labs — Software Development in Hyderabad",
  "url": "https://www.mtouchlabs.com/software-development-company-hyderabad",
  "description": "mTouch Labs — custom software, enterprise apps, cloud and AI for clients in Hyderabad.",
  "image": "https://www.mtouchlabs.com/images/Light.png",
  "priceRange": "$$",
  "areaServed": { "@type": "Country", "name": "Hyderabad" },
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Flat No. 203, 2nd Floor, SR Classic, HUDA Techno Enclave, HITEC City",
    "addressLocality": "Hyderabad",
    "addressRegion": "Telangana",
    "postalCode": "500081",
    "addressCountry": "IN"
  },
  "provider": { "@type": "Organization", "name": "mTouch Labs", "url": "https://www.mtouchlabs.com" },
  "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "reviewCount": "150", "bestRating": "5" }
};

const locationBreadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.mtouchlabs.com/" },
    { "@type": "ListItem", "position": 2, "name": "Locations", "item": "https://www.mtouchlabs.com/services" },
    { "@type": "ListItem", "position": 3, "name": "Software Development Company in Hyderabad", "item": "https://www.mtouchlabs.com/software-development-company-hyderabad" }
  ]
};

export default function SoftwareDevelopmentCompanyHyderabad() {
  return (
    <div className="loc-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(locationBreadcrumb) }} />

      {/* ═══ HERO ═══ */}
      <ServiceHero
        badge="mTouch Labs · Hyderabad"
        titleLead="Software Development Company in"
        titleAccent="Hyderabad"
        description={<>Delivering scalable, secure, and performance-driven digital solutions for startups, SMEs, and enterprises in one of India&apos;s fastest-growing technology hubs.</>}
      />

      {/* ═══ INTRO ═══ */}
      <section className="loc-section loc-introSection">
        <div className="loc-sectionInner">
          <div className="loc-introGrid">
            <div>
              <h2 className="loc-introTitle">Supporting Hyderabad&apos;s Growing Tech Ecosystem</h2>
              <p className="loc-introText">Hyderabad has rapidly emerged as a major IT and innovation hub in India. With thriving startups, global enterprises, and expanding digital-first businesses, companies require reliable technology partners to scale efficiently. As home to HITEC City, the Financial District, and numerous Global Capability Centers, Hyderabad continues to drive innovation across AI, cloud computing, FinTech, healthcare, and enterprise software.</p>
              <p className="loc-introText">mTouch Labs helps startups, SMEs, enterprises, and government organizations transform ideas into innovative digital solutions — from strategy and architecture to development, deployment, and long-term support.</p>
              <div className="loc-introTags">
                <span className="loc-introTag">HITEC City</span>
                <span className="loc-introTag">Gachibowli</span>
                <span className="loc-introTag">Madhapur</span>
                <span className="loc-introTag">Kondapur</span>
                <span className="loc-introTag">Financial District</span>
              </div>
            </div>
            <div className="loc-introStats">
              <div className="loc-statCard">
                <div className="loc-statNum">2000+</div>
                <div className="loc-statLabel">Projects</div>
              </div>
              <div className="loc-statCard">
                <div className="loc-statNum">1050+</div>
                <div className="loc-statLabel">Clients</div>
              </div>
              <div className="loc-statCard">
                <div className="loc-statNum">14+</div>
                <div className="loc-statLabel">Years</div>
              </div>
              <div className="loc-statCard">
                <div className="loc-statNum">99%</div>
                <div className="loc-statLabel">Retention</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ WHY CUSTOM SOFTWARE (benefits) ═══ */}
      <section className="loc-section loc-whySection">
        <div className="loc-sectionInner">
          <div className="loc-sectionHeader">
            <h2 className="loc-sectionTitle">
              Why Invest in <span className="loc-highlight">Custom Software Development</span>
            </h2>
            <p className="loc-sectionDesc">
              Off-the-shelf software solves common needs — custom software is built around how your business actually works.
            </p>
          </div>
          <div className="loc-whyGrid">
            <div className="loc-whyCard">
              <div className="loc-whyIcon">🎯</div>
              <div>
                <h4 className="loc-whyTitle">Tailored to Your Processes</h4>
                <p className="loc-whyText">Software built around your workflows, not the other way around.</p>
              </div>
            </div>
            <div className="loc-whyCard">
              <div className="loc-whyIcon">⚡</div>
              <div>
                <h4 className="loc-whyTitle">Improved Efficiency</h4>
                <p className="loc-whyText">Automate manual tasks and reduce operational overhead.</p>
              </div>
            </div>
            <div className="loc-whyCard">
              <div className="loc-whyIcon">🔗</div>
              <div>
                <h4 className="loc-whyTitle">Seamless Integration</h4>
                <p className="loc-whyText">Connects cleanly with your ERP, CRM, HRMS, and third-party systems.</p>
              </div>
            </div>
            <div className="loc-whyCard">
              <div className="loc-whyIcon">🛡️</div>
              <div>
                <h4 className="loc-whyTitle">Enterprise-Grade Security</h4>
                <p className="loc-whyText">Built with compliance and data protection from day one.</p>
              </div>
            </div>
            <div className="loc-whyCard">
              <div className="loc-whyIcon">📈</div>
              <div>
                <h4 className="loc-whyTitle">Built to Scale</h4>
                <p className="loc-whyText">Cloud-ready, AI-enabled architecture that grows with you.</p>
              </div>
            </div>
            <div className="loc-whyCard">
              <div className="loc-whyIcon">💰</div>
              <div>
                <h4 className="loc-whyTitle">Lower Long-Term Costs</h4>
                <p className="loc-whyText">Fewer workarounds and licensing fees over the software&apos;s lifetime.</p>
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
              Our Services in <span className="loc-highlight">Hyderabad</span>
            </h2>
            <p className="loc-sectionDesc">
              End-to-end software development services tailored for Hyderabad businesses.
            </p>
          </div>
          <div className="loc-servicesGrid">
            <div className="loc-serviceCard">
              <div className="loc-serviceIcon">⚙️</div>
              <h3 className="loc-serviceTitle">Custom Software Development</h3>
              <p className="loc-serviceDesc">Tailored enterprise-grade software solutions designed for scalability, performance, and security.</p>
            </div>
            <div className="loc-serviceCard">
              <div className="loc-serviceIcon">🏢</div>
              <h3 className="loc-serviceTitle">Enterprise Applications</h3>
              <p className="loc-serviceDesc">Robust ERP, CRM, and workflow automation platforms for operational efficiency.</p>
            </div>
            <div className="loc-serviceCard">
              <div className="loc-serviceIcon">📱</div>
              <h3 className="loc-serviceTitle">Mobile App Development</h3>
              <p className="loc-serviceDesc">iOS, Android, and cross-platform applications for startups and enterprises.</p>
            </div>
            <div className="loc-serviceCard">
              <div className="loc-serviceIcon">☁️</div>
              <h3 className="loc-serviceTitle">Cloud Services & Migration</h3>
              <p className="loc-serviceDesc">Cloud-native architecture, infrastructure management, and secure migration strategies.</p>
            </div>
            <div className="loc-serviceCard">
              <div className="loc-serviceIcon">🤖</div>
              <h3 className="loc-serviceTitle">AI & Intelligent Automation</h3>
              <p className="loc-serviceDesc">AI-powered analytics, automation tools, and predictive systems for smarter decisions.</p>
            </div>
            <div className="loc-serviceCard">
              <div className="loc-serviceIcon">🚀</div>
              <h3 className="loc-serviceTitle">SaaS Product Development</h3>
              <p className="loc-serviceDesc">Multi-tenant, subscription-ready SaaS platforms from MVP to enterprise scale.</p>
            </div>
            <div className="loc-serviceCard">
              <div className="loc-serviceIcon">🌐</div>
              <h3 className="loc-serviceTitle">Web Application Development</h3>
              <p className="loc-serviceDesc">Responsive, high-performance web portals, marketplaces, and business applications.</p>
            </div>
            <div className="loc-serviceCard">
              <div className="loc-serviceIcon">🔌</div>
              <h3 className="loc-serviceTitle">API Development & Integration</h3>
              <p className="loc-serviceDesc">Secure APIs and enterprise integrations that connect your software ecosystem.</p>
            </div>
            <div className="loc-serviceCard">
              <div className="loc-serviceIcon">🛠️</div>
              <h3 className="loc-serviceTitle">Legacy Application Modernization</h3>
              <p className="loc-serviceDesc">Transform outdated systems into modern, secure, cloud-ready applications.</p>
            </div>
            <div className="loc-serviceCard">
              <div className="loc-serviceIcon">🧩</div>
              <h3 className="loc-serviceTitle">Software Maintenance & Support</h3>
              <p className="loc-serviceDesc">Continuous monitoring, updates, and technical support that keep software reliable.</p>
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

      {/* ═══ SOLUTIONS WE BUILD ═══ */}
      <section className="loc-section loc-servicesSection">
        <div className="loc-sectionInner">
          <div className="loc-sectionHeader">
            <h2 className="loc-sectionTitle">
              Software Solutions We <span className="loc-highlight">Build</span>
            </h2>
            <p className="loc-sectionDesc">
              Real business challenges solved with purpose-built software.
            </p>
          </div>
          <div className="loc-servicesGrid">
            <div className="loc-serviceCard">
              <div className="loc-serviceIcon">🏢</div>
              <h3 className="loc-serviceTitle">Enterprise Business Solutions</h3>
              <p className="loc-serviceDesc">ERP, CRM, HRMS, procurement, inventory management, and business intelligence dashboards.</p>
            </div>
            <div className="loc-serviceCard">
              <div className="loc-serviceIcon">🤖</div>
              <h3 className="loc-serviceTitle">AI & Intelligent Business Solutions</h3>
              <p className="loc-serviceDesc">AI chatbots, generative AI apps, intelligent document processing, and predictive analytics.</p>
            </div>
            <div className="loc-serviceCard">
              <div className="loc-serviceIcon">🖥️</div>
              <h3 className="loc-serviceTitle">Web & Customer Experience Platforms</h3>
              <p className="loc-serviceDesc">Customer portals, vendor portals, PWAs, marketplaces, and booking platforms.</p>
            </div>
            <div className="loc-serviceCard">
              <div className="loc-serviceIcon">📲</div>
              <h3 className="loc-serviceTitle">Mobile Applications</h3>
              <p className="loc-serviceDesc">Android, iOS, Flutter, and React Native apps for customers and internal teams.</p>
            </div>
            <div className="loc-serviceCard">
              <div className="loc-serviceIcon">🛒</div>
              <h3 className="loc-serviceTitle">eCommerce & Marketplace Solutions</h3>
              <p className="loc-serviceDesc">Multi-vendor marketplaces, B2B/B2C commerce, order management, and loyalty platforms.</p>
            </div>
            <div className="loc-serviceCard">
              <div className="loc-serviceIcon">🏭</div>
              <h3 className="loc-serviceTitle">Industry-Specific Software</h3>
              <p className="loc-serviceDesc">Purpose-built applications for healthcare, FinTech, logistics, education, and more.</p>
            </div>
            <div className="loc-serviceCard">
              <div className="loc-serviceIcon">🚀</div>
              <h3 className="loc-serviceTitle">SaaS & Cloud-Native Platforms</h3>
              <p className="loc-serviceDesc">Multi-tenant, subscription-ready SaaS products built for scale.</p>
            </div>
            <div className="loc-serviceCard">
              <div className="loc-serviceIcon">🌱</div>
              <h3 className="loc-serviceTitle">Startup & MVP Solutions</h3>
              <p className="loc-serviceDesc">Fast, cost-effective MVPs that help startups validate and launch quickly.</p>
            </div>
            <div className="loc-serviceCard">
              <div className="loc-serviceIcon">🛵</div>
              <h3 className="loc-serviceTitle">On-Demand & Delivery App Solutions</h3>
              <p className="loc-serviceDesc">Food delivery, grocery delivery, and taxi booking apps built for scale.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ WHY US ═══ */}
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
                <h4 className="loc-whyTitle">Experienced Local Team</h4>
                <p className="loc-whyText">Hyderabad-based development team with deep domain expertise.</p>
              </div>
            </div>
            <div className="loc-whyCard">
              <div className="loc-whyIcon">🔄</div>
              <div>
                <h4 className="loc-whyTitle">Agile & DevOps-Driven</h4>
                <p className="loc-whyText">Sprint-based methodology for rapid, iterative delivery.</p>
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
                <p className="loc-whyText">Industry-standard security protocols and compliance.</p>
              </div>
            </div>
            <div className="loc-whyCard">
              <div className="loc-whyIcon">📊</div>
              <div>
                <h4 className="loc-whyTitle">Transparent Management</h4>
                <p className="loc-whyText">Real-time project tracking and reporting.</p>
              </div>
            </div>
            <div className="loc-whyCard">
              <div className="loc-whyIcon">🛠️</div>
              <div>
                <h4 className="loc-whyTitle">Long-Term Support</h4>
                <p className="loc-whyText">Ongoing maintenance, monitoring, and optimization.</p>
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
              Industries We Serve in <span className="loc-highlight">Hyderabad</span>
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
              <span className="loc-industryEmoji">🍔</span>
              <h4 className="loc-industryName">Food & Grocery Delivery</h4>
            </div>
            <div className="loc-industryCard">
              <span className="loc-industryEmoji">🏠</span>
              <h4 className="loc-industryName">Real Estate</h4>
            </div>
            <div className="loc-industryCard">
              <span className="loc-industryEmoji">✈️</span>
              <h4 className="loc-industryName">Travel & Hospitality</h4>
            </div>
            <div className="loc-industryCard">
              <span className="loc-industryEmoji">🏭</span>
              <h4 className="loc-industryName">Manufacturing</h4>
            </div>
            <div className="loc-industryCard">
              <span className="loc-industryEmoji">🏛</span>
              <h4 className="loc-industryName">Government & Public Sector</h4>
            </div>
            <div className="loc-industryCard">
              <span className="loc-industryEmoji">🎬</span>
              <h4 className="loc-industryName">Media & Entertainment</h4>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ TECHNOLOGIES ═══ */}
      <section className="loc-section loc-introSection">
        <div className="loc-sectionInner">
          <div className="loc-sectionHeader">
            <h2 className="loc-sectionTitle">
              Technologies That Power Our <span className="loc-highlight">Solutions</span>
            </h2>
            <p className="loc-sectionDesc">
              Modern frameworks, cloud platforms, and AI technologies behind every build.
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
                  <span className="loc-introTag">.NET</span>
                  <span className="loc-introTag">Python</span>
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
            <div className="loc-whyCard">
              <div className="loc-whyIcon">🧠</div>
              <div>
                <h4 className="loc-whyTitle">AI & Emerging Tech</h4>
                <div className="loc-introTags">
                  <span className="loc-introTag">OpenAI</span>
                  <span className="loc-introTag">LLMs</span>
                  <span className="loc-introTag">RAG</span>
                  <span className="loc-introTag">Machine Learning</span>
                  <span className="loc-introTag">NLP</span>
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
                <h4 className="loc-processStepTitle">Discovery & Consultation</h4>
                <p className="loc-processStepDesc">Understanding your business goals, challenges, and requirements.</p>
              </div>
            </div>
            <div className="loc-processStep">
              <div className="loc-processNum">02</div>
              <div className="loc-processStepContent">
                <h4 className="loc-processStepTitle">Architecture Planning</h4>
                <p className="loc-processStepDesc">Designing scalable system architecture and technology stack.</p>
              </div>
            </div>
            <div className="loc-processStep">
              <div className="loc-processNum">03</div>
              <div className="loc-processStepContent">
                <h4 className="loc-processStepTitle">UI/UX Design</h4>
                <p className="loc-processStepDesc">User-centered prototyping and interface design.</p>
              </div>
            </div>
            <div className="loc-processStep">
              <div className="loc-processNum">04</div>
              <div className="loc-processStepContent">
                <h4 className="loc-processStepTitle">Agile Development</h4>
                <p className="loc-processStepDesc">Sprint-based development with continuous integration.</p>
              </div>
            </div>
            <div className="loc-processStep">
              <div className="loc-processNum">05</div>
              <div className="loc-processStepContent">
                <h4 className="loc-processStepTitle">Quality Testing</h4>
                <p className="loc-processStepDesc">Comprehensive testing and performance optimization.</p>
              </div>
            </div>
            <div className="loc-processStep">
              <div className="loc-processNum">06</div>
              <div className="loc-processStepContent">
                <h4 className="loc-processStepTitle">Deployment & Launch</h4>
                <p className="loc-processStepDesc">Launching with minimal downtime, scalability, and reliability.</p>
              </div>
            </div>
            <div className="loc-processStep">
              <div className="loc-processNum">07</div>
              <div className="loc-processStepContent">
                <h4 className="loc-processStepTitle">Maintenance & Continuous Improvement</h4>
                <p className="loc-processStepDesc">Ongoing support, enhancements, and optimization to stay future-ready.</p>
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
                <p className="loc-whyText">A remote team working exclusively on your project — ideal for long-term and enterprise builds.</p>
              </div>
            </div>
            <div className="loc-whyCard">
              <div className="loc-whyIcon">➕</div>
              <div>
                <h4 className="loc-whyTitle">Team Augmentation</h4>
                <p className="loc-whyText">Extend your existing team with skilled professionals for faster delivery.</p>
              </div>
            </div>
            <div className="loc-whyCard">
              <div className="loc-whyIcon">📌</div>
              <div>
                <h4 className="loc-whyTitle">Fixed Cost Projects</h4>
                <p className="loc-whyText">Predictable pricing for clearly scoped MVPs, websites, and apps.</p>
              </div>
            </div>
            <div className="loc-whyCard">
              <div className="loc-whyIcon">⏱️</div>
              <div>
                <h4 className="loc-whyTitle">Time & Material</h4>
                <p className="loc-whyText">Flexible resourcing for continuous, evolving product development.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ OFFICE / AREAS SERVED ═══ */}
      <section className="loc-section loc-introSection">
        <div className="loc-sectionInner">
          <div className="loc-introGrid">
            <div>
              <h2 className="loc-introTitle">Visit Our Hyderabad Office</h2>
              <p className="loc-introText">📍 mTouch Labs Pvt. Ltd. — Flat No. 203, 2nd Floor, SR Classic, HUDA Techno Enclave, HITEC City, Hyderabad, Telangana – 500081</p>
              <p className="loc-introText">📧 info@mtouchlabs.com &nbsp; 🕒 Monday – Friday, 9:30 AM – 6:30 PM</p>
              <p className="loc-introText">We work with businesses across:</p>
              <div className="loc-introTags">
                <span className="loc-introTag">HITEC City</span>
                <span className="loc-introTag">Madhapur</span>
                <span className="loc-introTag">Gachibowli</span>
                <span className="loc-introTag">Kondapur</span>
                <span className="loc-introTag">Financial District</span>
                <span className="loc-introTag">Jubilee Hills</span>
                <span className="loc-introTag">Banjara Hills</span>
                <span className="loc-introTag">Kukatpally</span>
                <span className="loc-introTag">Miyapur</span>
                <span className="loc-introTag">Secunderabad</span>
                <span className="loc-introTag">Manikonda</span>
                <span className="loc-introTag">Kokapet</span>
              </div>
            </div>
            <div className="loc-introStats">
              <div className="loc-statCard">
                <div className="loc-statNum">14+</div>
                <div className="loc-statLabel">Years Experience</div>
              </div>
              <div className="loc-statCard">
                <div className="loc-statNum">10+</div>
                <div className="loc-statLabel">Global Markets Served</div>
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
                <span className="loc-faqQuestionText">Why choose a software development company in Hyderabad?</span>
                <span className="loc-faqChevron">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6"/></svg>
                </span>
              </summary>
              <div className="loc-faqAnswer">Hyderabad offers a strong IT ecosystem, experienced talent pool, and cost-effective development solutions, making it an ideal technology hub.</div>
            </details>
            <details className="loc-faqItem">
              <summary className="loc-faqQuestion">
                <span className="loc-faqQuestionText">Does mTouch Labs provide custom software development in Hyderabad?</span>
                <span className="loc-faqChevron">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6"/></svg>
                </span>
              </summary>
              <div className="loc-faqAnswer">Yes, we provide fully customized software development services tailored to startups, SMEs, and enterprises in Hyderabad.</div>
            </details>
            <details className="loc-faqItem">
              <summary className="loc-faqQuestion">
                <span className="loc-faqQuestionText">Do you offer mobile app development services in Hyderabad?</span>
                <span className="loc-faqChevron">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6"/></svg>
                </span>
              </summary>
              <div className="loc-faqAnswer">Yes, we develop iOS, Android, and cross-platform mobile applications for businesses across Hyderabad.</div>
            </details>
            <details className="loc-faqItem">
              <summary className="loc-faqQuestion">
                <span className="loc-faqQuestionText">Can you help with cloud migration and AI solutions?</span>
                <span className="loc-faqChevron">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6"/></svg>
                </span>
              </summary>
              <div className="loc-faqAnswer">Yes, we offer cloud migration services and AI-powered automation solutions for Hyderabad-based businesses.</div>
            </details>
            <details className="loc-faqItem">
              <summary className="loc-faqQuestion">
                <span className="loc-faqQuestionText">Do you provide ongoing support after project completion?</span>
                <span className="loc-faqChevron">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6"/></svg>
                </span>
              </summary>
              <div className="loc-faqAnswer">Yes, we offer application maintenance and long-term support services to ensure optimal performance.</div>
            </details>
            <details className="loc-faqItem">
              <summary className="loc-faqQuestion">
                <span className="loc-faqQuestionText">Which industries do you specialize in?</span>
                <span className="loc-faqChevron">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6"/></svg>
                </span>
              </summary>
              <div className="loc-faqAnswer">We deliver software for healthcare, banking, FinTech, retail, logistics, manufacturing, education, real estate, food delivery, travel, government, and SaaS businesses.</div>
            </details>
            <details className="loc-faqItem">
              <summary className="loc-faqQuestion">
                <span className="loc-faqQuestionText">What technologies do you use for software development?</span>
                <span className="loc-faqChevron">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6"/></svg>
                </span>
              </summary>
              <div className="loc-faqAnswer">We build with React, Next.js, Angular, Node.js, Java, .NET, Python, Flutter, React Native, AWS, Azure, Google Cloud, PostgreSQL, MongoDB, and OpenAI-based AI technologies.</div>
            </details>
            <details className="loc-faqItem">
              <summary className="loc-faqQuestion">
                <span className="loc-faqQuestionText">Do you offer dedicated software development teams?</span>
                <span className="loc-faqChevron">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6"/></svg>
                </span>
              </summary>
              <div className="loc-faqAnswer">Yes, we offer dedicated development teams, team augmentation, fixed-cost projects, and time & material engagement models.</div>
            </details>
            <details className="loc-faqItem">
              <summary className="loc-faqQuestion">
                <span className="loc-faqQuestionText">How long does it take to develop custom software?</span>
                <span className="loc-faqChevron">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6"/></svg>
                </span>
              </summary>
              <div className="loc-faqAnswer">Timelines vary by complexity — a simple MVP may take a few months, while enterprise platforms follow a longer phased approach. We share a roadmap after understanding your requirements.</div>
            </details>
            <details className="loc-faqItem">
              <summary className="loc-faqQuestion">
                <span className="loc-faqQuestionText">Do you work with clients outside Hyderabad and India?</span>
                <span className="loc-faqChevron">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6"/></svg>
                </span>
              </summary>
              <div className="loc-faqAnswer">Yes, we work with clients across India and internationally, including the USA, UK, UAE, Canada, Singapore, Australia, and Europe.</div>
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
        { q: "Why choose a software development company in Hyderabad?", a: "Hyderabad offers a strong IT ecosystem, experienced talent pool, and cost-effective development solutions, making it an ideal technology hub." },
        { q: "Does mTouch Labs provide custom software development in Hyderabad?", a: "Yes, we provide fully customized software development services tailored to startups, SMEs, and enterprises in Hyderabad." },
        { q: "Do you offer mobile app development services in Hyderabad?", a: "Yes, we develop iOS, Android, and cross-platform mobile applications for businesses across Hyderabad." },
        { q: "Can you help with cloud migration and AI solutions?", a: "Yes, we offer cloud migration services and AI-powered automation solutions for Hyderabad-based businesses." },
        { q: "Do you provide ongoing support after project completion?", a: "Yes, we offer application maintenance and long-term support services to ensure optimal performance." },
        { q: "Which industries do you specialize in?", a: "We deliver software for healthcare, banking, FinTech, retail, logistics, manufacturing, education, real estate, food delivery, travel, government, and SaaS businesses." },
        { q: "What technologies do you use for software development?", a: "We build with React, Next.js, Angular, Node.js, Java, .NET, Python, Flutter, React Native, AWS, Azure, Google Cloud, PostgreSQL, MongoDB, and OpenAI-based AI technologies." },
        { q: "Do you offer dedicated software development teams?", a: "Yes, we offer dedicated development teams, team augmentation, fixed-cost projects, and time & material engagement models." },
        { q: "How long does it take to develop custom software?", a: "Timelines vary by complexity — a simple MVP may take a few months, while enterprise platforms follow a longer phased approach. We share a roadmap after understanding your requirements." },
        { q: "Do you work with clients outside Hyderabad and India?", a: "Yes, we work with clients across India and internationally, including the USA, UK, UAE, Canada, Singapore, Australia, and Europe." }
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