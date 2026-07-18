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
    "Software Development Company Hyderabad",
    "Software Development Services Hyderabad",
    "Custom Software Development Hyderabad",
    "Enterprise Software Development Hyderabad",
    "Software Developers Hyderabad",
    "IT Company Hyderabad",
    "AI Development Company Hyderabad",
    "Mobile App Development Hyderabad",
    "Web Development Company Hyderabad",
    "SaaS Development Company Hyderabad",
    "Cloud Application Development Hyderabad",
    "Digital Transformation Hyderabad",
    "Business Software Development",
    "ERP Development Hyderabad",
    "CRM Software Development Hyderabad",
    "Software Consulting Hyderabad",
    "Software Outsourcing Hyderabad",
    "Dedicated Development Team Hyderabad"
  ],
  openGraph: {
    images: [{ url: "/images/software-development-company-hyderabad.webp", width: 1200, height: 630, alt: "Software Development Company in Hyderabad - mTouch Labs" }],
    title: "Software Development Company in Hyderabad | mTouch Labs",
    description: "mTouch Labs is a leading Software Development Company in Hyderabad offering custom software, enterprise applications, mobile apps, cloud services, and AI solutions.",
    url: "https://www.mtouchlabs.com/software-development-company-hyderabad",
    type: "website",
    siteName: "mTouch Labs",
    locale: "en_US",
  },
  alternates: {
    canonical: "https://www.mtouchlabs.com/software-development-company-hyderabad",
  },
  twitter: {
    card: "summary_large_image",
    title: "Software Development Company in Hyderabad | mTouch Labs",
    description: "mTouch Labs — software development company serving Hyderabad with custom software, cloud, AI and enterprise applications.",
    images: [{ url: "/images/software-development-company-hyderabad.webp", alt: "mTouch Labs Software Development Company in Hyderabad" }]
  },
  robots: {
    index: true, follow: true,
    googleBot: { index: true, follow: true, "max-video-preview": -1, "max-image-preview": "large", "max-snippet": -1 }
  },
  category: "Technology",
  applicationName: "mTouch Labs",
  creator: "mTouch Labs",
  publisher: "mTouch Labs",
  authors: [{ name: "mTouch Labs", url: "https://www.mtouchlabs.com" }],
  referrer: "origin-when-cross-origin",
  formatDetection: { email: false, address: false, telephone: false },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "mTouch Labs — Software Development in Hyderabad",
  "url": "https://www.mtouchlabs.com/software-development-company-hyderabad",
  "description": "mTouch Labs — custom software, enterprise apps, cloud and AI for clients in Hyderabad.",
  "image": "https://www.mtouchlabs.com/images/software-development-company-hyderabad.webp",
  "priceRange": "$$",
  "areaServed": { "@type": "Country", "name": "Hyderabad" },
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Manjeera Trinity Corporate, 514, JNTU - Hitech City Rd, Kukatpally Housing Board Colony, K P H B Phase 3, Kukatpally",
    "addressLocality": "Hyderabad",
    "addressRegion": "Telangana",
    "postalCode": "500072",
    "addressCountry": "IN"
  },
  "telephone": "+91-9390683154",
  "email": "contact@mtouchlabs.com",
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
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Sora:wght@600;700;800&display=swap" rel="stylesheet" />
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

        /* ── Engagement model cards ── */
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
        <span className="loc-breadcrumbCurrent">Software Development Company in Hyderabad</span>
      </nav>

      {/* ═══ HERO ═══ */}
      <ServiceHero
        badge="mTouch Labs · Hyderabad"
        titleLead="Software Development Company in"
        titleAccent="Hyderabad"
        description={<>Build Intelligent Software Solutions That Drive Business Growth — for startups, SMEs, enterprises, and government organizations across India&apos;s fastest-growing technology hub.</>}
      />

      {/* ═══ INTRO ═══ */}
      <section className="loc-section loc-introSection">
        <div className="loc-sectionInner">
          <div className="loc-introGrid">
            <div>
              <h2 className="loc-introTitle">Build Intelligent Software Solutions That Drive Business Growth</h2>
              <p className="loc-introText">Technology is reshaping the way businesses operate, compete, and grow. From startups building their first digital product to enterprises modernizing legacy systems, organizations need software that is secure, scalable, and designed for long-term success. Choosing the right software development partner is not just about writing code — it&apos;s about building technology that solves business challenges, improves efficiency, and creates measurable value.</p>
              <p className="loc-introText">mTouch Labs is a leading <strong>Software Development Company in Hyderabad</strong>, helping startups, SMEs, enterprises, and government organizations transform ideas into innovative digital solutions. With over 14 years of experience, 500+ global clients, and expertise across <Link href="/custom-software-development-company">Custom Software Development</Link>, <Link href="/ai-development-company">AI</Link>, Enterprise Applications, SaaS, <Link href="/web-development-company">Web Development</Link>, <Link href="/mobile-app-development-company">Mobile Apps</Link>, Cloud Solutions, and Digital Transformation, we deliver technology that empowers businesses to innovate with confidence.</p>
              <p className="loc-introText">From strategy and architecture to development, deployment, and long-term support, our experienced team works closely with clients to build software that aligns with their business goals, accelerates growth, and adapts to future demands.</p>
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
              <div className="loc-statCard">
                <div className="loc-statNum">10+</div>
                <div className="loc-statLabel">Technologies</div>
              </div>
              <div className="loc-statCard">
                <div className="loc-statNum">24/7</div>
                <div className="loc-statLabel">Support</div>
              </div>
              <div className="loc-statCard">
                <div className="loc-statNum">15+</div>
                <div className="loc-statLabel">Industries Served</div>
              </div>
              <div className="loc-statCard">
                <div className="loc-statNum">8+</div>
                <div className="loc-statLabel">Core Services</div>
              </div>
              <div className="loc-statCard">
                <div className="loc-statNum">🌍</div>
                <div className="loc-statLabel">Global Delivery</div>
              </div>
              <div className="loc-statCard">
                <div className="loc-statNum">🏆</div>
                <div className="loc-statLabel">Proven Track Record</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ WHY BUSINESSES CHOOSE MTOUCH LABS (Our Strengths / Business Value) ═══ */}
      <section className="loc-section loc-whySection">
        <div className="loc-sectionInner">
          <div className="loc-sectionHeader">
            <h2 className="loc-sectionTitle">
              Why Businesses Choose <span className="loc-highlight">mTouch Labs</span>
            </h2>
            <p className="loc-sectionDesc">
              Businesses choose mTouch Labs because we combine technical excellence with a deep understanding of business challenges. Every solution is designed to deliver measurable outcomes while maintaining the highest standards of quality, security, and scalability.
            </p>
          </div>
          <div className="loc-whyGrid">
            <div className="loc-whyCard">
              <div className="loc-whyIcon">🧑‍💻</div>
              <div>
                <h4 className="loc-whyTitle">14+ Years of Experience</h4>
                <p className="loc-whyText">Proven expertise across multiple industries and technologies.</p>
              </div>
            </div>
            <div className="loc-whyCard">
              <div className="loc-whyIcon">🌍</div>
              <div>
                <h4 className="loc-whyTitle">500+ Global Clients</h4>
                <p className="loc-whyText">Trusted by startups, enterprises, and government organizations worldwide.</p>
              </div>
            </div>
            <div className="loc-whyCard">
              <div className="loc-whyIcon">🔗</div>
              <div>
                <h4 className="loc-whyTitle">End-to-End Development</h4>
                <p className="loc-whyText">Consulting, UI/UX, development, testing, deployment, and ongoing support.</p>
              </div>
            </div>
            <div className="loc-whyCard">
              <div className="loc-whyIcon">🤖</div>
              <div>
                <h4 className="loc-whyTitle">AI & Emerging Technologies</h4>
                <p className="loc-whyText">Build intelligent applications powered by AI, automation, analytics, and cloud.</p>
              </div>
            </div>
            <div className="loc-whyCard">
              <div className="loc-whyIcon">🔄</div>
              <div>
                <h4 className="loc-whyTitle">Agile Delivery</h4>
                <p className="loc-whyText">Transparent communication, faster releases, and continuous improvements.</p>
              </div>
            </div>
            <div className="loc-whyCard">
              <div className="loc-whyIcon">📈</div>
              <div>
                <h4 className="loc-whyTitle">Scalable Architecture</h4>
                <p className="loc-whyText">Future-ready applications designed for growth and performance.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ WHY HYDERABAD IS A LEADING SOFTWARE DEVELOPMENT DESTINATION ═══ */}
      <section className="loc-section loc-introSection">
        <div className="loc-sectionInner">
          <div className="loc-introGrid">
            <div>
              <h2 className="loc-introTitle">Why Hyderabad Is a Leading Software Development Destination</h2>
              <p className="loc-introText">Hyderabad has earned its reputation as one of India&apos;s premier technology hubs, bringing together global enterprises, innovative startups, research institutions, and a highly skilled engineering workforce. The city&apos;s strong IT infrastructure, vibrant startup ecosystem, and access to world-class talent make it an ideal destination for businesses seeking reliable software development services.</p>
              <p className="loc-introText">As home to HITEC City, the Financial District, and numerous Global Capability Centers (GCCs), Hyderabad continues to drive innovation across Artificial Intelligence, Cloud Computing, FinTech, Healthcare, Cybersecurity, and Enterprise Software. This thriving ecosystem enables companies to accelerate digital transformation while benefiting from experienced engineering talent and modern development practices.</p>
              <p className="loc-introText">By partnering with mTouch Labs, businesses gain the advantage of Hyderabad&apos;s technology ecosystem combined with global delivery standards, enabling faster innovation, cost-effective development, and high-quality software solutions.</p>
            </div>
            <div className="loc-introStats">
              <div className="loc-statCard">
                <div className="loc-statNum">🏙️</div>
                <div className="loc-statLabel">Premier Tech Hub</div>
              </div>
              <div className="loc-statCard">
                <div className="loc-statNum">GCC</div>
                <div className="loc-statLabel">Global Capability Centers</div>
              </div>
              <div className="loc-statCard">
                <div className="loc-statNum">AI</div>
                <div className="loc-statLabel">& Cloud Innovation Hub</div>
              </div>
              <div className="loc-statCard">
                <div className="loc-statNum">💡</div>
                <div className="loc-statLabel">World-Class Talent Pool</div>
              </div>
              <div className="loc-statCard">
                <div className="loc-statNum">🔐</div>
                <div className="loc-statLabel">Cybersecurity Expertise</div>
              </div>
              <div className="loc-statCard">
                <div className="loc-statNum">💳</div>
                <div className="loc-statLabel">FinTech Innovation</div>
              </div>
              <div className="loc-statCard">
                <div className="loc-statNum">🏥</div>
                <div className="loc-statLabel">Healthcare Tech Hub</div>
              </div>
              <div className="loc-statCard">
                <div className="loc-statNum">💰</div>
                <div className="loc-statLabel">Cost-Effective Delivery</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ WHY INVEST IN CUSTOM SOFTWARE DEVELOPMENT ═══ */}
      <section className="loc-section loc-whySection">
        <div className="loc-sectionInner">
          <div className="loc-sectionHeader">
            <h2 className="loc-sectionTitle">
              Why Invest in <span className="loc-highlight">Custom Software Development?</span>
            </h2>
            <p className="loc-sectionDesc">
              Off-the-shelf software can solve common business needs, but growing organizations often require solutions that align with their unique workflows, operational goals, and customer expectations. Custom software provides the flexibility to build exactly what your business needs — without the limitations of generic platforms. At mTouch Labs, we develop custom software that helps businesses automate processes, improve collaboration, integrate existing systems, and create exceptional digital experiences. Every solution is built with scalability, security, and long-term growth in mind.
            </p>
          </div>
          <div className="loc-whyGrid">
            <div className="loc-whyCard"><div className="loc-whyIcon">🎯</div><div><h4 className="loc-whyTitle">Tailored to Your Business Processes</h4></div></div>
            <div className="loc-whyCard"><div className="loc-whyIcon">⚡</div><div><h4 className="loc-whyTitle">Improved Operational Efficiency & Automation</h4></div></div>
            <div className="loc-whyCard"><div className="loc-whyIcon">🔗</div><div><h4 className="loc-whyTitle">Seamless ERP, CRM, HRMS Integration</h4></div></div>
            <div className="loc-whyCard"><div className="loc-whyIcon">🛡️</div><div><h4 className="loc-whyTitle">Enterprise-Grade Security & Compliance</h4></div></div>
            <div className="loc-whyCard"><div className="loc-whyIcon">☁️</div><div><h4 className="loc-whyTitle">Cloud-Ready & AI-Enabled Architecture</h4></div></div>
            <div className="loc-whyCard"><div className="loc-whyIcon">📈</div><div><h4 className="loc-whyTitle">Better Scalability for Future Growth</h4></div></div>
            <div className="loc-whyCard"><div className="loc-whyIcon">💰</div><div><h4 className="loc-whyTitle">Lower Long-Term Operational Costs</h4></div></div>
            <div className="loc-whyCard"><div className="loc-whyIcon">✨</div><div><h4 className="loc-whyTitle">Enhanced Customer & Employee Experiences</h4></div></div>
            <div className="loc-whyCard"><div className="loc-whyIcon">🚀</div><div><h4 className="loc-whyTitle">Faster Time-to-Market</h4></div></div>
          </div>
        </div>
      </section>

      {/* ═══ YOUR TRUSTED SOFTWARE DEVELOPMENT PARTNER ═══ */}
      <section className="loc-section loc-introSection">
        <div className="loc-sectionInner">
          <div className="loc-introGrid">
            <div>
              <h2 className="loc-introTitle">Your Trusted Software Development Partner</h2>
              <p className="loc-introText">Successful software projects require more than technical expertise — they require a partner who understands your business objectives and is committed to delivering measurable results. At mTouch Labs, we combine business consulting, modern engineering practices, and agile development methodologies to build software that supports innovation and sustainable growth.</p>
              <p className="loc-introText">Whether you&apos;re developing a new SaaS platform, modernizing enterprise applications, launching a mobile app, or integrating AI into your business, our team works as an extension of your organization to deliver secure, scalable, and future-ready solutions.</p>
              <p className="loc-introText">We focus on building long-term partnerships by delivering high-quality software, transparent communication, and continuous support throughout your digital transformation journey.</p>
            </div>
            <div className="loc-introStats">
              <div className="loc-statCard">
                <div className="loc-statNum">💼</div>
                <div className="loc-statLabel">Business Consulting</div>
              </div>
              <div className="loc-statCard">
                <div className="loc-statNum">⚙️</div>
                <div className="loc-statLabel">Modern Engineering</div>
              </div>
              <div className="loc-statCard">
                <div className="loc-statNum">🔄</div>
                <div className="loc-statLabel">Agile Methodologies</div>
              </div>
              <div className="loc-statCard">
                <div className="loc-statNum">🤝</div>
                <div className="loc-statLabel">Long-Term Partnership</div>
              </div>
              <div className="loc-statCard">
                <div className="loc-statNum">💬</div>
                <div className="loc-statLabel">Transparent Communication</div>
              </div>
              <div className="loc-statCard">
                <div className="loc-statNum">🎯</div>
                <div className="loc-statLabel">Business-Objective Focused</div>
              </div>
              <div className="loc-statCard">
                <div className="loc-statNum">🛠️</div>
                <div className="loc-statLabel">Continuous Support</div>
              </div>
              <div className="loc-statCard">
                <div className="loc-statNum">📈</div>
                <div className="loc-statLabel">Sustainable Growth</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ COMPREHENSIVE SERVICES INTRO ═══ */}
      <section className="loc-section loc-introSection">
        <div className="loc-sectionInner">
          <div className="loc-introGrid">
            <div>
              <h2 className="loc-introTitle">Comprehensive Software Development Services in Hyderabad</h2>
              <p className="loc-introText">Every business has unique goals, operational challenges, and technology requirements. At mTouch Labs, we provide end-to-end software development services that help startups, SMEs, enterprises, and government organizations build secure, scalable, and future-ready digital solutions.</p>
              <p className="loc-introText">From custom business applications and enterprise platforms to AI-powered software and cloud-native products, our experienced team delivers solutions that improve efficiency, automate workflows, and accelerate digital transformation.</p>
              <p className="loc-introText">Whether you&apos;re launching a new product, modernizing legacy systems, or expanding your digital ecosystem, we combine business expertise with modern technologies to build software that delivers measurable business outcomes.</p>
            </div>
            <div className="loc-introStats">
              <div className="loc-statCard">
                <div className="loc-statNum">10+</div>
                <div className="loc-statLabel">Core Services</div>
              </div>
              <div className="loc-statCard">
                <div className="loc-statNum">E2E</div>
                <div className="loc-statLabel">End-to-End Delivery</div>
              </div>
              <div className="loc-statCard">
                <div className="loc-statNum">🤖</div>
                <div className="loc-statLabel">AI-Powered Software</div>
              </div>
              <div className="loc-statCard">
                <div className="loc-statNum">☁️</div>
                <div className="loc-statLabel">Cloud-Native Products</div>
              </div>
              <div className="loc-statCard">
                <div className="loc-statNum">🔁</div>
                <div className="loc-statLabel">Workflow Automation</div>
              </div>
              <div className="loc-statCard">
                <div className="loc-statNum">🚀</div>
                <div className="loc-statLabel">Digital Transformation</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ SERVICES OVERVIEW GRID ═══ */}
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
              <h3 className="loc-serviceTitle"><Link href="/custom-software-development-company">Custom Software Development</Link></h3>
              <p className="loc-serviceDesc">Tailored enterprise-grade software solutions designed for scalability, performance, and security.</p>
            </div>
            <div className="loc-serviceCard">
              <div className="loc-serviceIcon">🏢</div>
              <h3 className="loc-serviceTitle"><Link href="/enterprise-software-development-company">Enterprise Applications</Link></h3>
              <p className="loc-serviceDesc">Robust ERP, CRM, and workflow automation platforms for operational efficiency.</p>
            </div>
            <div className="loc-serviceCard">
              <div className="loc-serviceIcon">📱</div>
              <h3 className="loc-serviceTitle"><Link href="/mobile-app-development-company">Mobile App Development</Link></h3>
              <p className="loc-serviceDesc">iOS, Android, and cross-platform applications for startups and enterprises.</p>
            </div>
            <div className="loc-serviceCard">
              <div className="loc-serviceIcon">☁️</div>
              <h3 className="loc-serviceTitle"><Link href="/cloud-application-development-company">Cloud Services & Migration</Link></h3>
              <p className="loc-serviceDesc">Cloud-native architecture, infrastructure management, and secure migration strategies.</p>
            </div>
            <div className="loc-serviceCard">
              <div className="loc-serviceIcon">🤖</div>
              <h3 className="loc-serviceTitle"><Link href="/ai-development-company">AI & Intelligent Automation</Link></h3>
              <p className="loc-serviceDesc">AI-powered analytics, automation tools, and predictive systems for smarter decisions.</p>
            </div>
            <div className="loc-serviceCard">
              <div className="loc-serviceIcon">🚀</div>
              <h3 className="loc-serviceTitle"><Link href="/saas-development-company">SaaS Product Development</Link></h3>
              <p className="loc-serviceDesc">Multi-tenant, subscription-ready SaaS platforms from MVP to enterprise scale.</p>
            </div>
            <div className="loc-serviceCard">
              <div className="loc-serviceIcon">🌐</div>
              <h3 className="loc-serviceTitle"><Link href="/web-development-company">Web Application Development</Link></h3>
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
              <h3 className="loc-serviceTitle"><Link href="/devops-services">DevOps & CI/CD Automation</Link></h3>
              <p className="loc-serviceDesc">Automated pipelines, infrastructure as code, and faster, safer releases.</p>
            </div>
            <div className="loc-serviceCard">
              <div className="loc-serviceIcon">🎨</div>
              <h3 className="loc-serviceTitle"><Link href="/ui-ux-design-company">UI/UX Design Services</Link></h3>
              <p className="loc-serviceDesc">Research-driven interface design that improves usability and conversion.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ OUR SOFTWARE DEVELOPMENT SERVICES (in depth, full detail from source) ═══ */}
      <section className="loc-section loc-introSection">
        <div className="loc-sectionInner">
          <div className="loc-sectionHeader">
            <h2 className="loc-sectionTitle">Our Software Development Services — <span className="loc-highlight">In Detail</span></h2>
            <p className="loc-sectionDesc">Every service below is built around the solutions our clients ask for most, with the specific business benefits it delivers.</p>
          </div>

          <div className="loc-detailGrid">
            <div className="loc-detailCard">
              <div className="loc-detailHead">
                <div className="loc-detailNum">01</div>
                <h3 className="loc-detailTitle"><Link href="/custom-software-development-company">Custom Software Development</Link></h3>
              </div>
              <p className="loc-detailDesc">Build software tailored specifically to your business processes, operational workflows, and long-term objectives. Our custom software solutions improve efficiency, eliminate manual tasks, and provide the flexibility to scale as your business grows.</p>
              <div className="loc-detailBlock">
                <p className="loc-detailLabel">Solutions Include</p>
                <div className="loc-detailTagRow">
                  <span className="loc-detailTag">Business Management Software</span>
                  <span className="loc-detailTag">CRM Development</span>
                  <span className="loc-detailTag">ERP Development</span>
                  <span className="loc-detailTag">HRMS Solutions</span>
                  <span className="loc-detailTag">Workflow Automation</span>
                  <span className="loc-detailTag">Inventory Management</span>
                  <span className="loc-detailTag">Customer & Vendor Portals</span>
                  <span className="loc-detailTag">Business Dashboards</span>
                </div>
              </div>
              <div className="loc-detailBlock">
                <p className="loc-detailLabel">Business Benefits</p>
                <div className="loc-detailBenefits">
                  <span className="loc-detailBenefit"><span className="loc-checkMark">✓</span> Tailored to your business needs</span>
                  <span className="loc-detailBenefit"><span className="loc-checkMark">✓</span> Easy integration with existing systems</span>
                  <span className="loc-detailBenefit"><span className="loc-checkMark">✓</span> Scalable architecture for future growth</span>
                </div>
              </div>
            </div>

            <div className="loc-detailCard">
              <div className="loc-detailHead">
                <div className="loc-detailNum">02</div>
                <h3 className="loc-detailTitle"><Link href="/enterprise-software-development-company">Enterprise Software Development</Link></h3>
              </div>
              <p className="loc-detailDesc">Modern enterprises require intelligent software that connects teams, automates operations, and delivers real-time insights. We develop enterprise applications that improve collaboration, simplify business processes, and support organizational growth.</p>
              <div className="loc-detailBlock">
                <p className="loc-detailLabel">Enterprise Solutions</p>
                <div className="loc-detailTagRow">
                  <span className="loc-detailTag">Enterprise Resource Planning (ERP)</span>
                  <span className="loc-detailTag">Customer Relationship Management (CRM)</span>
                  <span className="loc-detailTag">Procurement Systems</span>
                  <span className="loc-detailTag">Supply Chain Management</span>
                  <span className="loc-detailTag">Business Intelligence Dashboards</span>
                  <span className="loc-detailTag">Document Management Systems</span>
                </div>
              </div>
              <div className="loc-detailBlock">
                <p className="loc-detailLabel">Business Benefits</p>
                <div className="loc-detailBenefits">
                  <span className="loc-detailBenefit"><span className="loc-checkMark">✓</span> Increased productivity</span>
                  <span className="loc-detailBenefit"><span className="loc-checkMark">✓</span> Better business visibility</span>
                  <span className="loc-detailBenefit"><span className="loc-checkMark">✓</span> Enterprise-grade security</span>
                </div>
              </div>
            </div>

            <div className="loc-detailCard">
              <div className="loc-detailHead">
                <div className="loc-detailNum">03</div>
                <h3 className="loc-detailTitle"><Link href="/ai-development-company">AI & Generative AI Development</Link></h3>
              </div>
              <p className="loc-detailDesc">Harness the power of Artificial Intelligence to automate operations, improve decision-making, and deliver personalized customer experiences. We develop AI-powered solutions that help businesses innovate faster and operate smarter.</p>
              <div className="loc-detailBlock">
                <p className="loc-detailLabel">AI Solutions</p>
                <div className="loc-detailTagRow">
                  <span className="loc-detailTag">AI Chatbots</span>
                  <span className="loc-detailTag">Generative AI Applications</span>
                  <span className="loc-detailTag">AI Assistants</span>
                  <span className="loc-detailTag">Machine Learning Models</span>
                  <span className="loc-detailTag">Predictive Analytics</span>
                  <span className="loc-detailTag">Intelligent Document Processing</span>
                  <span className="loc-detailTag">AI Workflow Automation</span>
                  <span className="loc-detailTag">Recommendation Engines</span>
                </div>
              </div>
              <div className="loc-detailBlock">
                <p className="loc-detailLabel">Business Benefits</p>
                <div className="loc-detailBenefits">
                  <span className="loc-detailBenefit"><span className="loc-checkMark">✓</span> Reduce manual effort</span>
                  <span className="loc-detailBenefit"><span className="loc-checkMark">✓</span> Improve customer engagement</span>
                  <span className="loc-detailBenefit"><span className="loc-checkMark">✓</span> Unlock actionable business insights</span>
                </div>
              </div>
            </div>

            <div className="loc-detailCard">
              <div className="loc-detailHead">
                <div className="loc-detailNum">04</div>
                <h3 className="loc-detailTitle"><Link href="/saas-development-company">SaaS Product Development</Link></h3>
              </div>
              <p className="loc-detailDesc">Launch scalable Software-as-a-Service (SaaS) platforms designed for subscription-based business models. From MVP development to enterprise SaaS applications, we help businesses build secure, cloud-native products that scale with demand.</p>
              <div className="loc-detailBlock">
                <p className="loc-detailLabel">We Build</p>
                <div className="loc-detailTagRow">
                  <span className="loc-detailTag">B2B SaaS Platforms</span>
                  <span className="loc-detailTag">B2C SaaS Applications</span>
                  <span className="loc-detailTag">Multi-Tenant Solutions</span>
                  <span className="loc-detailTag">Subscription Management</span>
                  <span className="loc-detailTag">Admin Dashboards</span>
                  <span className="loc-detailTag">API-Driven SaaS Products</span>
                </div>
              </div>
              <div className="loc-detailBlock">
                <p className="loc-detailLabel">Business Benefits</p>
                <div className="loc-detailBenefits">
                  <span className="loc-detailBenefit"><span className="loc-checkMark">✓</span> Faster product launch</span>
                  <span className="loc-detailBenefit"><span className="loc-checkMark">✓</span> Scalable cloud infrastructure</span>
                  <span className="loc-detailBenefit"><span className="loc-checkMark">✓</span> Recurring revenue-ready architecture</span>
                </div>
              </div>
            </div>

            <div className="loc-detailCard">
              <div className="loc-detailHead">
                <div className="loc-detailNum">05</div>
                <h3 className="loc-detailTitle"><Link href="/web-development-company">Web Application Development</Link></h3>
              </div>
              <p className="loc-detailDesc">Develop responsive, secure, and high-performance web applications using modern frameworks and cloud technologies. Our solutions are designed to deliver exceptional user experiences across desktop and mobile devices.</p>
              <div className="loc-detailBlock">
                <p className="loc-detailLabel">Applications We Develop</p>
                <div className="loc-detailTagRow">
                  <span className="loc-detailTag">Enterprise Portals</span>
                  <span className="loc-detailTag">Customer Portals</span>
                  <span className="loc-detailTag">Vendor Portals</span>
                  <span className="loc-detailTag">Business Applications</span>
                  <span className="loc-detailTag"><Link href="/ecommerce-development-company">eCommerce Platforms</Link></span>
                  <span className="loc-detailTag">Marketplace Solutions</span>
                  <span className="loc-detailTag">Progressive Web Apps (PWAs)</span>
                </div>
              </div>
              <div className="loc-detailBlock">
                <p className="loc-detailLabel">Business Benefits</p>
                <div className="loc-detailBenefits">
                  <span className="loc-detailBenefit"><span className="loc-checkMark">✓</span> Responsive design</span>
                  <span className="loc-detailBenefit"><span className="loc-checkMark">✓</span> High performance</span>
                  <span className="loc-detailBenefit"><span className="loc-checkMark">✓</span> SEO-friendly architecture</span>
                </div>
              </div>
            </div>

            <div className="loc-detailCard">
              <div className="loc-detailHead">
                <div className="loc-detailNum">06</div>
                <h3 className="loc-detailTitle"><Link href="/mobile-app-development-company">Mobile App Development</Link></h3>
              </div>
              <p className="loc-detailDesc">Create engaging mobile experiences that strengthen customer relationships and improve business productivity. We develop native and cross-platform mobile applications for startups and enterprises.</p>
              <div className="loc-detailBlock">
                <p className="loc-detailLabel">Our Expertise</p>
                <div className="loc-detailTagRow">
                  <span className="loc-detailTag">Android App Development</span>
                  <span className="loc-detailTag">iOS App Development</span>
                  <span className="loc-detailTag"><Link href="/flutter-app-development-company">Flutter App Development</Link></span>
                  <span className="loc-detailTag"><Link href="/react-native-app-development-company">React Native Development</Link></span>
                  <span className="loc-detailTag">Enterprise Mobility Solutions</span>
                  <span className="loc-detailTag">Tablet & Wearable Applications</span>
                </div>
              </div>
              <div className="loc-detailBlock">
                <p className="loc-detailLabel">Business Benefits</p>
                <div className="loc-detailBenefits">
                  <span className="loc-detailBenefit"><span className="loc-checkMark">✓</span> Better user engagement</span>
                  <span className="loc-detailBenefit"><span className="loc-checkMark">✓</span> Cross-platform compatibility</span>
                  <span className="loc-detailBenefit"><span className="loc-checkMark">✓</span> Faster development cycles</span>
                </div>
              </div>
            </div>

            <div className="loc-detailCard">
              <div className="loc-detailHead">
                <div className="loc-detailNum">07</div>
                <h3 className="loc-detailTitle"><Link href="/cloud-application-development-company">Cloud Application Development</Link></h3>
              </div>
              <p className="loc-detailDesc">Adopt cloud-first technologies that improve scalability, performance, and operational efficiency. Our cloud experts help businesses migrate, modernize, and optimize applications for AWS, Azure, and Google Cloud.</p>
              <div className="loc-detailBlock">
                <p className="loc-detailLabel">Cloud Services</p>
                <div className="loc-detailTagRow">
                  <span className="loc-detailTag">Cloud Migration</span>
                  <span className="loc-detailTag">Cloud-Native Development</span>
                  <span className="loc-detailTag">AWS Solutions</span>
                  <span className="loc-detailTag">Microsoft Azure</span>
                  <span className="loc-detailTag">Google Cloud Platform</span>
                  <span className="loc-detailTag">Serverless Applications</span>
                  <span className="loc-detailTag">Cloud Infrastructure Management</span>
                </div>
              </div>
              <div className="loc-detailBlock">
                <p className="loc-detailLabel">Business Benefits</p>
                <div className="loc-detailBenefits">
                  <span className="loc-detailBenefit"><span className="loc-checkMark">✓</span> High availability</span>
                  <span className="loc-detailBenefit"><span className="loc-checkMark">✓</span> Lower infrastructure costs</span>
                  <span className="loc-detailBenefit"><span className="loc-checkMark">✓</span> Secure and scalable deployments</span>
                </div>
              </div>
            </div>

            <div className="loc-detailCard">
              <div className="loc-detailHead">
                <div className="loc-detailNum">08</div>
                <h3 className="loc-detailTitle">API Development & System Integration</h3>
              </div>
              <p className="loc-detailDesc">Enable seamless communication between business applications through secure APIs and enterprise integrations. We connect your software ecosystem to improve efficiency and eliminate data silos.</p>
              <div className="loc-detailBlock">
                <p className="loc-detailLabel">Integration Services</p>
                <div className="loc-detailTagRow">
                  <span className="loc-detailTag">ERP Integration</span>
                  <span className="loc-detailTag">CRM Integration</span>
                  <span className="loc-detailTag">Payment Gateway Integration</span>
                  <span className="loc-detailTag">Third-Party APIs</span>
                  <span className="loc-detailTag">HRMS Integration</span>
                  <span className="loc-detailTag">Enterprise System Integration</span>
                </div>
              </div>
              <div className="loc-detailBlock">
                <p className="loc-detailLabel">Business Benefits</p>
                <div className="loc-detailBenefits">
                  <span className="loc-detailBenefit"><span className="loc-checkMark">✓</span> Connected business systems</span>
                  <span className="loc-detailBenefit"><span className="loc-checkMark">✓</span> Automated workflows</span>
                  <span className="loc-detailBenefit"><span className="loc-checkMark">✓</span> Improved operational efficiency</span>
                </div>
              </div>
            </div>

            <div className="loc-detailCard">
              <div className="loc-detailHead">
                <div className="loc-detailNum">09</div>
                <h3 className="loc-detailTitle">Legacy Application Modernization</h3>
              </div>
              <p className="loc-detailDesc">Transform outdated software into modern, secure, and cloud-ready applications without disrupting your business operations.</p>
              <div className="loc-detailBlock">
                <p className="loc-detailLabel">Modernization Services</p>
                <div className="loc-detailTagRow">
                  <span className="loc-detailTag">Legacy Software Migration</span>
                  <span className="loc-detailTag">UI/UX Modernization</span>
                  <span className="loc-detailTag">Cloud Migration</span>
                  <span className="loc-detailTag">Database Modernization</span>
                  <span className="loc-detailTag">Performance Optimization</span>
                  <span className="loc-detailTag">Security Enhancement</span>
                </div>
              </div>
              <div className="loc-detailBlock">
                <p className="loc-detailLabel">Business Benefits</p>
                <div className="loc-detailBenefits">
                  <span className="loc-detailBenefit"><span className="loc-checkMark">✓</span> Improved application performance</span>
                  <span className="loc-detailBenefit"><span className="loc-checkMark">✓</span> Enhanced security</span>
                  <span className="loc-detailBenefit"><span className="loc-checkMark">✓</span> Reduced maintenance costs</span>
                </div>
              </div>
            </div>

            <div className="loc-detailCard">
              <div className="loc-detailHead">
                <div className="loc-detailNum">10</div>
                <h3 className="loc-detailTitle">Software Maintenance & Support</h3>
              </div>
              <p className="loc-detailDesc">Keep your software secure, reliable, and optimized with continuous monitoring, updates, and technical support. We ensure your applications evolve alongside your business.</p>
              <div className="loc-detailBlock">
                <p className="loc-detailLabel">Support Services</p>
                <div className="loc-detailTagRow">
                  <span className="loc-detailTag">Performance Monitoring</span>
                  <span className="loc-detailTag">Bug Fixes</span>
                  <span className="loc-detailTag">Security Updates</span>
                  <span className="loc-detailTag">Feature Enhancements</span>
                  <span className="loc-detailTag">Application Monitoring</span>
                  <span className="loc-detailTag">Technical Support</span>
                </div>
              </div>
              <div className="loc-detailBlock">
                <p className="loc-detailLabel">Business Benefits</p>
                <div className="loc-detailBenefits">
                  <span className="loc-detailBenefit"><span className="loc-checkMark">✓</span> Increased software reliability</span>
                  <span className="loc-detailBenefit"><span className="loc-checkMark">✓</span> Continuous improvements</span>
                  <span className="loc-detailBenefit"><span className="loc-checkMark">✓</span> Long-term business continuity</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="loc-section loc-whySection">
        <div className="loc-sectionInner">
          <div className="loc-sectionHeader">
            <h2 className="loc-sectionTitle">
              Why Choose Our <span className="loc-highlight">Software Development Services?</span>
            </h2>
            <p className="loc-sectionDesc">
              Choosing the right technology partner is essential for building software that delivers measurable business value. At mTouch Labs, we focus on understanding your business objectives before recommending the right technologies, architecture, and development approach. What you can expect:
            </p>
          </div>
          <div className="loc-whyGrid">
            <div className="loc-whyCard"><div className="loc-whyIcon">🎯</div><div><h4 className="loc-whyTitle">End-to-End Product Development</h4></div></div>
            <div className="loc-whyCard"><div className="loc-whyIcon">🧑‍💻</div><div><h4 className="loc-whyTitle">Experienced Software Architects & Developers</h4></div></div>
            <div className="loc-whyCard"><div className="loc-whyIcon">🔄</div><div><h4 className="loc-whyTitle">Agile Development Methodology</h4></div></div>
            <div className="loc-whyCard"><div className="loc-whyIcon">🤖</div><div><h4 className="loc-whyTitle">AI-Ready & Cloud-Native Solutions</h4></div></div>
            <div className="loc-whyCard"><div className="loc-whyIcon">🔒</div><div><h4 className="loc-whyTitle">Enterprise-Grade Security</h4></div></div>
            <div className="loc-whyCard"><div className="loc-whyIcon">🧩</div><div><h4 className="loc-whyTitle">Flexible Engagement Models</h4></div></div>
            <div className="loc-whyCard"><div className="loc-whyIcon">📊</div><div><h4 className="loc-whyTitle">Transparent Project Management</h4></div></div>
            <div className="loc-whyCard"><div className="loc-whyIcon">🛠️</div><div><h4 className="loc-whyTitle">Long-Term Maintenance & Support</h4></div></div>
            <div className="loc-whyCard"><div className="loc-whyIcon">💡</div><div><h4 className="loc-whyTitle">Innovation-Driven Approach</h4></div></div>
          </div>
          <p className="loc-sectionDesc loc-descStandalone">
            Whether you&apos;re building a startup MVP, enterprise software, AI-powered platform, SaaS product, or customer-facing application, our team delivers technology solutions that are secure, scalable, and built for long-term success.
          </p>
        </div>
      </section>

      {/* ═══ SOFTWARE SOLUTIONS WE BUILD ═══ */}
      <section className="loc-section loc-servicesSection">
        <div className="loc-sectionInner">
          <div className="loc-sectionHeader">
            <h2 className="loc-sectionTitle">
              Software Solutions We <span className="loc-highlight">Build</span>
            </h2>
            <p className="loc-sectionDesc">
              At mTouch Labs, we develop custom software solutions that solve real business challenges, streamline operations, and create exceptional digital experiences. Every solution is designed around your business goals, industry requirements, and future growth strategy, ensuring long-term scalability, security, and performance.
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
              <p className="loc-serviceDesc"><Link href="/food-delivery-app-development-company">Food delivery</Link>, <Link href="/grocery-delivery-app-development-company">grocery delivery</Link>, and <Link href="/taxi-booking-app-development-company">taxi booking</Link> apps built for scale.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ SOLUTIONS WE BUILD — FULL LISTS ═══ */}
      <section className="loc-section loc-introSection">
        <div className="loc-sectionInner">
          <div className="loc-sectionHeader">
            <h2 className="loc-sectionTitle">Solutions We Build — <span className="loc-highlight">In Detail</span></h2>
            <p className="loc-sectionDesc">A closer look at what goes into each solution category we build for Hyderabad businesses.</p>
          </div>

          <div className="loc-detailGrid">
            <div className="loc-detailCard">
              <div className="loc-detailHead">
                <div className="loc-detailNum">🏢</div>
                <h3 className="loc-detailTitle">Enterprise Business Solutions</h3>
              </div>
              <p className="loc-detailDesc">Digitize and automate business operations with enterprise software designed to improve productivity and decision-making.</p>
              <div className="loc-detailBlock">
                <p className="loc-detailLabel">Solutions We Build</p>
                <div className="loc-detailTagRow">
                  <span className="loc-detailTag">Enterprise Resource Planning (ERP)</span>
                  <span className="loc-detailTag">Customer Relationship Management (CRM)</span>
                  <span className="loc-detailTag">Human Resource Management System (HRMS)</span>
                  <span className="loc-detailTag">Procurement Management</span>
                  <span className="loc-detailTag">Inventory Management</span>
                  <span className="loc-detailTag">Business Process Automation</span>
                  <span className="loc-detailTag">Document Management System</span>
                  <span className="loc-detailTag">Business Intelligence Dashboards</span>
                </div>
              </div>
            </div>

            <div className="loc-detailCard">
              <div className="loc-detailHead">
                <div className="loc-detailNum">🤖</div>
                <h3 className="loc-detailTitle">AI & Intelligent Business Solutions</h3>
              </div>
              <p className="loc-detailDesc">Transform your business with Artificial Intelligence, automation, and intelligent data-driven applications.</p>
              <div className="loc-detailBlock">
                <p className="loc-detailLabel">Solutions We Build</p>
                <div className="loc-detailTagRow">
                  <span className="loc-detailTag">AI Chatbots & Virtual Assistants</span>
                  <span className="loc-detailTag">Generative AI Applications</span>
                  <span className="loc-detailTag">AI Search & Knowledge Assistants</span>
                  <span className="loc-detailTag">Machine Learning Solutions</span>
                  <span className="loc-detailTag">Intelligent Document Processing</span>
                  <span className="loc-detailTag">Predictive Analytics</span>
                  <span className="loc-detailTag">Recommendation Engines</span>
                  <span className="loc-detailTag">AI Workflow Automation</span>
                </div>
              </div>
            </div>

            <div className="loc-detailCard">
              <div className="loc-detailHead">
                <div className="loc-detailNum">🖥️</div>
                <h3 className="loc-detailTitle">Web & Customer Experience Platforms</h3>
              </div>
              <p className="loc-detailDesc">Create secure, scalable, and user-friendly digital experiences for customers, partners, and employees.</p>
              <div className="loc-detailBlock">
                <p className="loc-detailLabel">Solutions We Build</p>
                <div className="loc-detailTagRow">
                  <span className="loc-detailTag">Business Portals</span>
                  <span className="loc-detailTag">Customer Portals</span>
                  <span className="loc-detailTag">Vendor Portals</span>
                  <span className="loc-detailTag">Employee Self-Service Portals</span>
                  <span className="loc-detailTag">Progressive Web Apps (PWAs)</span>
                  <span className="loc-detailTag">Marketplace Platforms</span>
                  <span className="loc-detailTag">Booking Platforms</span>
                  <span className="loc-detailTag">Business Dashboards</span>
                </div>
              </div>
            </div>

            <div className="loc-detailCard">
              <div className="loc-detailHead">
                <div className="loc-detailNum">📲</div>
                <h3 className="loc-detailTitle">Mobile Applications</h3>
              </div>
              <p className="loc-detailDesc">Deliver seamless mobile experiences across Android, iOS, and cross-platform environments.</p>
              <div className="loc-detailBlock">
                <p className="loc-detailLabel">Solutions We Build</p>
                <div className="loc-detailTagRow">
                  <span className="loc-detailTag">Android Applications</span>
                  <span className="loc-detailTag">iOS Applications</span>
                  <span className="loc-detailTag">Flutter Applications</span>
                  <span className="loc-detailTag">React Native Applications</span>
                  <span className="loc-detailTag">Enterprise Mobility Solutions</span>
                  <span className="loc-detailTag">Customer Engagement Apps</span>
                  <span className="loc-detailTag">Internal Business Apps</span>
                </div>
              </div>
            </div>

            <div className="loc-detailCard">
              <div className="loc-detailHead">
                <div className="loc-detailNum">🛒</div>
                <h3 className="loc-detailTitle">eCommerce & Marketplace Solutions</h3>
              </div>
              <p className="loc-detailDesc">Build high-performance commerce platforms that help businesses increase online sales and improve customer experiences.</p>
              <div className="loc-detailBlock">
                <p className="loc-detailLabel">Solutions We Build</p>
                <div className="loc-detailTagRow">
                  <span className="loc-detailTag">eCommerce Websites</span>
                  <span className="loc-detailTag">Multi-Vendor Marketplaces</span>
                  <span className="loc-detailTag">B2B Commerce Platforms</span>
                  <span className="loc-detailTag">B2C Online Stores</span>
                  <span className="loc-detailTag">Subscription Commerce</span>
                  <span className="loc-detailTag">Order Management Systems</span>
                  <span className="loc-detailTag">POS Integration</span>
                  <span className="loc-detailTag">Loyalty & Rewards Platforms</span>
                </div>
              </div>
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

      {/* ═══ INDUSTRY-SPECIFIC SOFTWARE SOLUTIONS (table) ═══ */}
      <section className="loc-section loc-industriesSection">
        <div className="loc-sectionInner">
          <div className="loc-sectionHeader">
            <h2 className="loc-sectionTitle">
              Industry-Specific Software <span className="loc-highlight">Solutions</span>
            </h2>
            <p className="loc-sectionDesc">
              We build tailored applications for businesses across multiple industries.
            </p>
          </div>
          <div className="loc-industriesGrid">
            <div className="loc-industryCard">
              <span className="loc-industryEmoji">🏥</span>
              <h4 className="loc-industryName">Healthcare</h4>
              <p className="loc-serviceDesc">Hospital Management, Telemedicine, EMR/EHR, Pharmacy Management.</p>
            </div>
            <div className="loc-industryCard">
              <span className="loc-industryEmoji">💳</span>
              <h4 className="loc-industryName">Banking & FinTech</h4>
              <p className="loc-serviceDesc">Digital Banking, Wallets, Lending, Insurance Platforms.</p>
            </div>
            <div className="loc-industryCard">
              <span className="loc-industryEmoji">🛒</span>
              <h4 className="loc-industryName">Retail & eCommerce</h4>
              <p className="loc-serviceDesc">POS, Inventory, Marketplace, Retail Management.</p>
            </div>
            <div className="loc-industryCard">
              <span className="loc-industryEmoji">🚚</span>
              <h4 className="loc-industryName">Logistics</h4>
              <p className="loc-serviceDesc">Fleet Management, Warehouse, Shipment Tracking, Supply Chain.</p>
            </div>
            <div className="loc-industryCard">
              <span className="loc-industryEmoji">🍔</span>
              <h4 className="loc-industryName">Food & Grocery</h4>
              <p className="loc-serviceDesc">Food Delivery, Grocery Delivery, Restaurant Management.</p>
            </div>
            <div className="loc-industryCard">
              <span className="loc-industryEmoji">🎓</span>
              <h4 className="loc-industryName">Education</h4>
              <p className="loc-serviceDesc">LMS, School ERP, Student Portals, Online Learning.</p>
            </div>
            <div className="loc-industryCard">
              <span className="loc-industryEmoji">🏠</span>
              <h4 className="loc-industryName">Real Estate</h4>
              <p className="loc-serviceDesc">Property Management, Real Estate CRM, Builder Solutions.</p>
            </div>
            <div className="loc-industryCard">
              <span className="loc-industryEmoji">✈️</span>
              <h4 className="loc-industryName">Travel & Hospitality</h4>
              <p className="loc-serviceDesc">Hotel Booking, Travel Portal, Reservation Systems.</p>
            </div>
            <div className="loc-industryCard">
              <span className="loc-industryEmoji">🏭</span>
              <h4 className="loc-industryName">Manufacturing</h4>
              <p className="loc-serviceDesc">Production Management, Asset Monitoring, Industrial Automation.</p>
            </div>
            <div className="loc-industryCard">
              <span className="loc-industryEmoji">🏛</span>
              <h4 className="loc-industryName">Government</h4>
              <p className="loc-serviceDesc">Workflow Automation, Citizen Services, eGovernance Solutions.</p>
            </div>
            <div className="loc-industryCard">
              <span className="loc-industryEmoji">🛡️</span>
              <h4 className="loc-industryName">Insurance</h4>
              <p className="loc-serviceDesc">Policy Management, Claims Processing, Underwriting Platforms.</p>
            </div>
            <div className="loc-industryCard">
              <span className="loc-industryEmoji">💼</span>
              <h4 className="loc-industryName">Startups & SaaS</h4>
              <p className="loc-serviceDesc">MVP Development, Multi-Tenant Platforms, Subscription Billing.</p>
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
              Choosing the right technology is critical for building secure, scalable, and future-ready applications. Our development teams leverage modern frameworks, cloud platforms, and AI technologies to create high-performance digital solutions.
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
                  <span className="loc-introTag"><Link href="/flutter-app-development-company">Flutter</Link></span>
                  <span className="loc-introTag"><Link href="/react-native-app-development-company">React Native</Link></span>
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
                  <span className="loc-introTag">Microsoft Azure</span>
                  <span className="loc-introTag">Google Cloud Platform</span>
                  <span className="loc-introTag">Docker</span>
                  <span className="loc-introTag">Kubernetes</span>
                  <span className="loc-introTag">CI/CD Pipelines</span>
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
                <h4 className="loc-whyTitle">AI & Emerging Technologies</h4>
                <div className="loc-introTags">
                  <span className="loc-introTag">OpenAI</span>
                  <span className="loc-introTag">LLMs</span>
                  <span className="loc-introTag">RAG</span>
                  <span className="loc-introTag">Machine Learning</span>
                  <span className="loc-introTag">NLP</span>
                  <span className="loc-introTag">Computer Vision</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ INDUSTRIES WE SERVE (full list) ═══ */}
      <section className="loc-section loc-introSection">
        <div className="loc-sectionInner">
          <div className="loc-sectionHeader">
            <h2 className="loc-sectionTitle">Industries We <span className="loc-highlight">Serve</span></h2>
            <p className="loc-sectionDesc">Every industry has unique business processes, compliance requirements, and customer expectations. Our team combines domain expertise with modern technology to build software that addresses real-world business challenges and delivers measurable outcomes. We proudly work with:</p>
          </div>
          <div className="loc-chipGrid">
            <div className="loc-chipCard"><span className="loc-chipEmoji">🏥</span>Healthcare & Life Sciences</div>
            <div className="loc-chipCard"><span className="loc-chipEmoji">🏦</span>Banking & Financial Services</div>
            <div className="loc-chipCard"><span className="loc-chipEmoji">💳</span>FinTech</div>
            <div className="loc-chipCard"><span className="loc-chipEmoji">🛒</span>Retail & eCommerce</div>
            <div className="loc-chipCard"><span className="loc-chipEmoji">🏭</span>Manufacturing</div>
            <div className="loc-chipCard"><span className="loc-chipEmoji">🚚</span>Logistics & Transportation</div>
            <div className="loc-chipCard"><span className="loc-chipEmoji">🎓</span>Education & EdTech</div>
            <div className="loc-chipCard"><span className="loc-chipEmoji">✈️</span>Travel & Hospitality</div>
            <div className="loc-chipCard"><span className="loc-chipEmoji">🏠</span>Real Estate & Construction</div>
            <div className="loc-chipCard"><span className="loc-chipEmoji">🍔</span>Food & Grocery</div>
            <div className="loc-chipCard"><span className="loc-chipEmoji">🛡️</span>Insurance</div>
            <div className="loc-chipCard"><span className="loc-chipEmoji">🏛</span>Government & Public Sector</div>
            <div className="loc-chipCard"><span className="loc-chipEmoji">🎬</span>Media & Entertainment</div>
            <div className="loc-chipCard"><span className="loc-chipEmoji">⚡</span>Energy & Utilities</div>
            <div className="loc-chipCard"><span className="loc-chipEmoji">🚀</span>Startups & SaaS Companies</div>
          </div>
          <p className="loc-sectionDesc loc-descStandalone">Regardless of your industry, we develop software that improves operational efficiency, enhances customer engagement, and supports sustainable business growth.</p>
        </div>
      </section>

      {/* ═══ WHY BUSINESSES ACROSS INDUSTRIES CHOOSE MTOUCH LABS ═══ */}
      <section className="loc-section loc-whySection">
        <div className="loc-sectionInner">
          <div className="loc-sectionHeader">
            <h2 className="loc-sectionTitle">
              Why Businesses Across Industries Choose <span className="loc-highlight">mTouch Labs</span>
            </h2>
            <p className="loc-sectionDesc">
              Businesses choose mTouch Labs because we combine industry knowledge with technical expertise to build software that solves practical business challenges — not just technical requirements. Our solutions are designed to:
            </p>
          </div>
          <div className="loc-whyGrid">
            <div className="loc-whyCard"><div className="loc-whyIcon">⚡</div><div><h4 className="loc-whyTitle">Improve Operational Efficiency</h4></div></div>
            <div className="loc-whyCard"><div className="loc-whyIcon">🔁</div><div><h4 className="loc-whyTitle">Automate Manual Workflows</h4></div></div>
            <div className="loc-whyCard"><div className="loc-whyIcon">💬</div><div><h4 className="loc-whyTitle">Enhance Customer Experiences</h4></div></div>
            <div className="loc-whyCard"><div className="loc-whyIcon">📊</div><div><h4 className="loc-whyTitle">Enable Data-Driven Decision-Making</h4></div></div>
            <div className="loc-whyCard"><div className="loc-whyIcon">📈</div><div><h4 className="loc-whyTitle">Support Business Scalability</h4></div></div>
            <div className="loc-whyCard"><div className="loc-whyIcon">🚀</div><div><h4 className="loc-whyTitle">Accelerate Digital Transformation</h4></div></div>
            <div className="loc-whyCard"><div className="loc-whyIcon">💰</div><div><h4 className="loc-whyTitle">Reduce Operational Costs</h4></div></div>
            <div className="loc-whyCard"><div className="loc-whyIcon">🏃</div><div><h4 className="loc-whyTitle">Increase Business Agility</h4></div></div>
          </div>
          <p className="loc-sectionDesc loc-descStandalone">
            Whether you&apos;re launching a new digital product, modernizing legacy systems, or building enterprise software, our team delivers solutions that are secure, scalable, and built for long-term success.
          </p>
        </div>
      </section>

      {/* ═══ PROCESS ═══ */}
      <section className="loc-section loc-processSection">
        <div className="loc-sectionInner">
          <div className="loc-sectionHeader">
            <h2 className="loc-sectionTitle">Our Software Development <span className="loc-highlight">Process</span></h2>
            <p className="loc-sectionDesc">
              Building successful software requires more than technical expertise — it requires a structured approach that minimizes risks, ensures transparency, and delivers measurable business outcomes. At mTouch Labs, we follow an agile software development process that keeps clients involved throughout every stage of the project while ensuring faster delivery and continuous improvement.
            </p>
          </div>
          <div className="loc-timeline">
            <div className="loc-timelineItem">
              <div className="loc-timelineDot">01</div>
              <div className="loc-timelineBody">
                <h4 className="loc-timelineTitle">Discovery & Consultation</h4>
                <p className="loc-timelineDesc">We understand your business goals, challenges, target audience, and project requirements to define the right technology strategy.</p>
              </div>
            </div>
            <div className="loc-timelineItem">
              <div className="loc-timelineDot">02</div>
              <div className="loc-timelineBody">
                <h4 className="loc-timelineTitle">Solution Planning</h4>
                <p className="loc-timelineDesc">Our experts prepare the project roadmap, define architecture, select the technology stack, and create a scalable development plan.</p>
              </div>
            </div>
            <div className="loc-timelineItem">
              <div className="loc-timelineDot">03</div>
              <div className="loc-timelineBody">
                <h4 className="loc-timelineTitle">UI/UX Design</h4>
                <p className="loc-timelineDesc">We design intuitive user experiences and modern interfaces that improve engagement and usability.</p>
              </div>
            </div>
            <div className="loc-timelineItem">
              <div className="loc-timelineDot">04</div>
              <div className="loc-timelineBody">
                <h4 className="loc-timelineTitle">Agile Development</h4>
                <p className="loc-timelineDesc">Our development teams build secure, scalable, and high-performance software using agile methodologies with regular sprint reviews.</p>
              </div>
            </div>
            <div className="loc-timelineItem">
              <div className="loc-timelineDot">05</div>
              <div className="loc-timelineBody">
                <h4 className="loc-timelineTitle">Quality Assurance & Testing</h4>
                <p className="loc-timelineDesc">Every application undergoes functional, performance, security, usability, and compatibility testing before launch.</p>
              </div>
            </div>
            <div className="loc-timelineItem">
              <div className="loc-timelineDot">06</div>
              <div className="loc-timelineBody">
                <h4 className="loc-timelineTitle">Deployment & Launch</h4>
                <p className="loc-timelineDesc">We deploy applications with minimal downtime while ensuring scalability, security, and reliability.</p>
              </div>
            </div>
            <div className="loc-timelineItem">
              <div className="loc-timelineDot">07</div>
              <div className="loc-timelineBody">
                <h4 className="loc-timelineTitle">Maintenance & Continuous Improvement</h4>
                <p className="loc-timelineDesc">We provide ongoing support, feature enhancements, monitoring, and optimization to keep your software future-ready.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ WHY OUR PROCESS WORKS ═══ */}
      <section className="loc-section loc-whySection">
        <div className="loc-sectionInner">
          <div className="loc-sectionHeader">
            <h2 className="loc-sectionTitle">Why Our Process Works</h2>
          </div>
          <div className="loc-whyGrid">
            <div className="loc-whyCard"><div className="loc-whyIcon">💬</div><div><h4 className="loc-whyTitle">Transparent Communication</h4><p className="loc-whyText">Throughout the project lifecycle.</p></div></div>
            <div className="loc-whyCard"><div className="loc-whyIcon">⚡</div><div><h4 className="loc-whyTitle">Faster Delivery</h4><p className="loc-whyText">Through agile development.</p></div></div>
            <div className="loc-whyCard"><div className="loc-whyIcon">✅</div><div><h4 className="loc-whyTitle">Enterprise-Grade QA</h4><p className="loc-whyText">Rigorous quality assurance at every stage.</p></div></div>
            <div className="loc-whyCard"><div className="loc-whyIcon">🔁</div><div><h4 className="loc-whyTitle">Continuous Feedback</h4><p className="loc-whyText">And improvements throughout delivery.</p></div></div>
            <div className="loc-whyCard"><div className="loc-whyIcon">🔒</div><div><h4 className="loc-whyTitle">Secure & Scalable Architecture</h4><p className="loc-whyText">Built into every solution.</p></div></div>
            <div className="loc-whyCard"><div className="loc-whyIcon">🛠️</div><div><h4 className="loc-whyTitle">Long-Term Technical Support</h4><p className="loc-whyText">Beyond project delivery.</p></div></div>
          </div>
        </div>
      </section>

      {/* ═══ ENGAGEMENT MODELS ═══ */}
      <section className="loc-section loc-introSection">
        <div className="loc-sectionInner">
          <div className="loc-sectionHeader">
            <h2 className="loc-sectionTitle">
              Flexible <span className="loc-highlight">Engagement Models</span>
            </h2>
            <p className="loc-sectionDesc">
              Every business has different project requirements, budgets, and timelines. To support organizations of all sizes, mTouch Labs offers flexible engagement models that align with your business objectives and development strategy.
            </p>
          </div>
          <div className="loc-engageGrid">
            <div className="loc-engageCard">
              <div className="loc-engageIcon">👨‍💻</div>
              <h3 className="loc-engageTitle">Dedicated Development Team</h3>
              <p className="loc-engageDesc">Build your own remote software development team with experienced developers, designers, QA engineers, and project managers working exclusively on your project.</p>
              <span className="loc-engageBest">Best For: Long-term projects, product development, enterprise applications, and startups</span>
            </div>
            <div className="loc-engageCard">
              <div className="loc-engageIcon">➕</div>
              <h3 className="loc-engageTitle">Team Augmentation</h3>
              <p className="loc-engageDesc">Expand your existing development team with skilled professionals who seamlessly integrate into your workflows and accelerate project delivery.</p>
              <span className="loc-engageBest">Best For: Businesses needing additional expertise or faster project execution</span>
            </div>
            <div className="loc-engageCard">
              <div className="loc-engageIcon">📌</div>
              <h3 className="loc-engageTitle">Fixed Cost Projects</h3>
              <p className="loc-engageDesc">Ideal for projects with clearly defined requirements, timelines, and deliverables. We provide predictable pricing while maintaining quality and transparency.</p>
              <span className="loc-engageBest">Best For: MVPs, websites, mobile apps, and custom software with fixed scope</span>
            </div>
            <div className="loc-engageCard">
              <div className="loc-engageIcon">⏱️</div>
              <h3 className="loc-engageTitle">Time & Material</h3>
              <p className="loc-engageDesc">A flexible engagement model where development resources are allocated based on evolving project requirements.</p>
              <span className="loc-engageBest">Best For: Continuous product development, innovation projects, and evolving business needs</span>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ WHY PARTNER WITH MTOUCH LABS ═══ */}
      <section className="loc-section loc-whySection">
        <div className="loc-sectionInner">
          <div className="loc-sectionHeader">
            <h2 className="loc-sectionTitle">
              Why Partner with <span className="loc-highlight">mTouch Labs?</span>
            </h2>
            <p className="loc-sectionDesc">
              Choosing the right software development partner goes beyond technical capabilities. It requires a team that understands your business, embraces innovation, and remains committed to your long-term success. What makes mTouch Labs different:
            </p>
          </div>
          <div className="loc-whyGrid">
            <div className="loc-whyCard"><div className="loc-whyIcon">🧑‍💻</div><div><h4 className="loc-whyTitle">14+ Years of Software Development Excellence</h4></div></div>
            <div className="loc-whyCard"><div className="loc-whyIcon">🤝</div><div><h4 className="loc-whyTitle">500+ Successful Client Engagements</h4></div></div>
            <div className="loc-whyCard"><div className="loc-whyIcon">🏗️</div><div><h4 className="loc-whyTitle">Experienced Architects & Certified Developers</h4></div></div>
            <div className="loc-whyCard"><div className="loc-whyIcon">🤖</div><div><h4 className="loc-whyTitle">AI, Cloud & Enterprise Technology Expertise</h4></div></div>
            <div className="loc-whyCard"><div className="loc-whyIcon">🔄</div><div><h4 className="loc-whyTitle">Agile Development with Transparent Communication</h4></div></div>
            <div className="loc-whyCard"><div className="loc-whyIcon">🔒</div><div><h4 className="loc-whyTitle">Secure & Scalable Software Architecture</h4></div></div>
            <div className="loc-whyCard"><div className="loc-whyIcon">🧩</div><div><h4 className="loc-whyTitle">Flexible Engagement Models</h4></div></div>
            <div className="loc-whyCard"><div className="loc-whyIcon">🛠️</div><div><h4 className="loc-whyTitle">Long-Term Maintenance & Technical Support</h4></div></div>
            <div className="loc-whyCard"><div className="loc-whyIcon">🎯</div><div><h4 className="loc-whyTitle">Customer-Centric Development Approach</h4></div></div>
            <div className="loc-whyCard"><div className="loc-whyIcon">💡</div><div><h4 className="loc-whyTitle">Focus on Innovation & Business Outcomes</h4></div></div>
            <div className="loc-whyCard"><div className="loc-whyIcon">🌐</div><div><h4 className="loc-whyTitle">Global Delivery Standards</h4></div></div>
            <div className="loc-whyCard"><div className="loc-whyIcon">📞</div><div><h4 className="loc-whyTitle">Responsive Client Support</h4></div></div>
          </div>
        </div>
      </section>

      {/* ═══ VISIT OUR HYDERABAD OFFICE ═══ */}
      <section className="loc-section loc-introSection">
        <div className="loc-sectionInner">
          <div className="loc-introGrid" style={{ alignItems: "stretch" }}>
            <div>
              <h2 className="loc-introTitle">Visit Our Hyderabad Office</h2>
              <p className="loc-introText">Looking for a reliable software development company in Hyderabad? Meet our experts to discuss your project requirements, digital transformation initiatives, or product ideas. Whether you&apos;re planning a custom software application, AI-powered solution, enterprise platform, SaaS product, or mobile application, our consultants are ready to help you identify the right technology strategy for your business.</p>
              <p className="loc-introText">📍 <strong>mTouch Labs Pvt. Ltd.</strong> — Manjeera Trinity Corporate, 514, JNTU - Hitech City Rd, Kukatpally Housing Board Colony, K P H B Phase 3, Kukatpally, Hyderabad, Telangana 500072</p>
              <p className="loc-introText">📞 Phone: <a href="tel:+919390683154">+91 9390683154</a> &nbsp; 📧 Email: contact@mtouchlabs.com</p>
              <p className="loc-introText">🕒 Business Hours: Monday – Friday | 9:30 AM – 6:30 PM</p>
              <p className="loc-introText"><strong>Serving businesses across:</strong></p>
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
            <div className="loc-officeRightCol">
              <div className="loc-introStats">
                <div className="loc-statCard"><div className="loc-statNum">12+</div><div className="loc-statLabel">Areas Served</div></div>
                <div className="loc-statCard"><div className="loc-statNum">Mon–Fri</div><div className="loc-statLabel">9:30 AM – 6:30 PM</div></div>
                <div className="loc-statCard"><div className="loc-statNum">🏢</div><div className="loc-statLabel">HITEC City HQ</div></div>
                <div className="loc-statCard"><div className="loc-statNum">💬</div><div className="loc-statLabel">Free Consultation</div></div>
              </div>
              <div className="loc-mapWrap">
                <iframe
                  className="loc-mapFrame"
                  src="https://www.google.com/maps?q=Manjeera+Trinity+Corporate+JNTU+Hitech+City+Rd+Kukatpally+Hyderabad+Telangana+500072&output=embed"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="mTouch Labs Hyderabad Office Location"
                />
                <a
                  href="https://maps.app.goo.gl/vHVVC1vzkR2hS7Ek7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="loc-mapOverlay"
                  aria-label="Open mTouch Labs Hyderabad office in Google Maps"
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
                <span className="loc-faqQuestionText">Why choose mTouch Labs as a Software Development Company in Hyderabad?</span>
                <span className="loc-faqChevron"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6"/></svg></span>
              </summary>
              <div className="loc-faqAnswer">mTouch Labs combines over 14 years of software development experience with expertise in AI, enterprise software, SaaS platforms, web applications, and mobile app development. We work closely with startups, SMEs, enterprises, and government organizations to deliver secure, scalable, and business-focused software solutions tailored to their goals.</div>
            </details>
            <details className="loc-faqItem">
              <summary className="loc-faqQuestion">
                <span className="loc-faqQuestionText">What software development services do you offer?</span>
                <span className="loc-faqChevron"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6"/></svg></span>
              </summary>
              <div className="loc-faqAnswer">We provide end-to-end software development services, including Custom Software Development, Enterprise Software Development, AI & Generative AI Development, SaaS Product Development, Web Application Development, Mobile App Development, Cloud Solutions, API Integration, Legacy Software Modernization, UI/UX Design, DevOps, and ongoing Software Maintenance & Support.</div>
            </details>
            <details className="loc-faqItem">
              <summary className="loc-faqQuestion">
                <span className="loc-faqQuestionText">Which industries do you specialize in?</span>
                <span className="loc-faqChevron"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6"/></svg></span>
              </summary>
              <div className="loc-faqAnswer">Our team has experience delivering software solutions for Healthcare, FinTech, Banking, Retail & eCommerce, Logistics, Manufacturing, Education, Real Estate, Food & Grocery, Travel & Hospitality, Government, Insurance, Media, and SaaS businesses.</div>
            </details>
            <details className="loc-faqItem">
              <summary className="loc-faqQuestion">
                <span className="loc-faqQuestionText">Do you develop custom software for startups and enterprises?</span>
                <span className="loc-faqChevron"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6"/></svg></span>
              </summary>
              <div className="loc-faqAnswer">Yes. Whether you&apos;re validating an MVP, launching a SaaS product, or modernizing enterprise applications, we build software tailored to your business model, operational workflows, and future growth plans.</div>
            </details>
            <details className="loc-faqItem">
              <summary className="loc-faqQuestion">
                <span className="loc-faqQuestionText">What technologies do you use for software development?</span>
                <span className="loc-faqChevron"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6"/></svg></span>
              </summary>
              <div className="loc-faqAnswer">We use modern technologies such as React, Next.js, Angular, Node.js, Java, .NET, Python, Flutter, React Native, AWS, Microsoft Azure, Google Cloud Platform, PostgreSQL, MongoDB, OpenAI, and other AI and cloud technologies to build secure and scalable applications.</div>
            </details>
            <details className="loc-faqItem">
              <summary className="loc-faqQuestion">
                <span className="loc-faqQuestionText">Can you modernize our existing software application?</span>
                <span className="loc-faqChevron"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6"/></svg></span>
              </summary>
              <div className="loc-faqAnswer">Yes. We help businesses modernize legacy applications by improving architecture, redesigning user interfaces, migrating to the cloud, enhancing security, optimizing performance, and integrating modern technologies without disrupting business operations.</div>
            </details>
            <details className="loc-faqItem">
              <summary className="loc-faqQuestion">
                <span className="loc-faqQuestionText">Do you provide AI and Generative AI development services?</span>
                <span className="loc-faqChevron"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6"/></svg></span>
              </summary>
              <div className="loc-faqAnswer">Yes. We develop AI-powered applications, Generative AI solutions, AI chatbots, intelligent automation, predictive analytics, recommendation engines, AI assistants, and enterprise AI integrations that help businesses improve efficiency and customer engagement.</div>
            </details>
            <details className="loc-faqItem">
              <summary className="loc-faqQuestion">
                <span className="loc-faqQuestionText">How do you ensure software quality and security?</span>
                <span className="loc-faqChevron"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6"/></svg></span>
              </summary>
              <div className="loc-faqAnswer">Our development process includes code reviews, automated and manual testing, security best practices, performance optimization, and continuous quality assurance throughout the project lifecycle. We also follow secure development practices and recommend appropriate security measures based on your business requirements.</div>
            </details>
            <details className="loc-faqItem">
              <summary className="loc-faqQuestion">
                <span className="loc-faqQuestionText">Do you offer dedicated software development teams?</span>
                <span className="loc-faqChevron"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6"/></svg></span>
              </summary>
              <div className="loc-faqAnswer">Yes. We provide flexible engagement models, including dedicated development teams, staff augmentation, fixed-price projects, and time & material models, allowing businesses to choose the approach that best fits their project scope and budget.</div>
            </details>
            <details className="loc-faqItem">
              <summary className="loc-faqQuestion">
                <span className="loc-faqQuestionText">How long does it take to develop custom software?</span>
                <span className="loc-faqChevron"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6"/></svg></span>
              </summary>
              <div className="loc-faqAnswer">The timeline depends on the complexity, features, integrations, and scope of the project. A simple MVP may take a few months, while enterprise-grade platforms typically require a longer phased development approach. After understanding your requirements, we provide a detailed project roadmap and estimated timeline.</div>
            </details>
            <details className="loc-faqItem">
              <summary className="loc-faqQuestion">
                <span className="loc-faqQuestionText">Can you integrate third-party APIs and enterprise systems?</span>
                <span className="loc-faqChevron"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6"/></svg></span>
              </summary>
              <div className="loc-faqAnswer">Yes. We integrate ERP, CRM, HRMS, payment gateways, cloud platforms, accounting software, communication tools, and other third-party services to create a connected and efficient digital ecosystem.</div>
            </details>
            <details className="loc-faqItem">
              <summary className="loc-faqQuestion">
                <span className="loc-faqQuestionText">Do you provide post-launch maintenance and support?</span>
                <span className="loc-faqChevron"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6"/></svg></span>
              </summary>
              <div className="loc-faqAnswer">Absolutely. We offer ongoing maintenance, performance monitoring, feature enhancements, security updates, bug fixes, cloud infrastructure support, and technical assistance to ensure your software continues to perform reliably.</div>
            </details>
            <details className="loc-faqItem">
              <summary className="loc-faqQuestion">
                <span className="loc-faqQuestionText">Do you work with clients outside Hyderabad and India?</span>
                <span className="loc-faqChevron"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6"/></svg></span>
              </summary>
              <div className="loc-faqAnswer">Yes. While our development center is located in Hyderabad, we work with businesses across India and international markets, including the USA, UK, UAE, Canada, Singapore, Australia, and Europe through remote collaboration and agile delivery.</div>
            </details>
            <details className="loc-faqItem">
              <summary className="loc-faqQuestion">
                <span className="loc-faqQuestionText">How much does custom software development cost?</span>
                <span className="loc-faqChevron"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6"/></svg></span>
              </summary>
              <div className="loc-faqAnswer">The cost depends on factors such as project scope, complexity, technology stack, integrations, development timeline, and engagement model. We provide customized estimates after understanding your business requirements and project objectives.</div>
            </details>
            <details className="loc-faqItem">
              <summary className="loc-faqQuestion">
                <span className="loc-faqQuestionText">How can I get started with mTouch Labs?</span>
                <span className="loc-faqChevron"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6"/></svg></span>
              </summary>
              <div className="loc-faqAnswer">Getting started is simple. Contact our team to schedule a free consultation. We&apos;ll discuss your business goals, understand your project requirements, recommend the right technology approach, and provide a transparent roadmap for development.</div>
            </details>
          </div>
        </div>
      </section>

      {/* ═══ FINAL CTA (moved here, above footer, per request) ═══ */}
      <section className="loc-ctaSection">
        <div className="loc-ctaInner">
          <h2 className="loc-ctaTitle">Ready to Transform Your Business with Custom Software?</h2>
          <p className="loc-ctaDesc">
            Partner with mTouch Labs, a trusted Software Development Company in Hyderabad, to build innovative software solutions tailored to your business goals. From idea validation to deployment and ongoing support — and from strategy and consulting to design, development, and long-term support — we help organizations develop technology that delivers real business value and achieves sustainable growth.
          </p>
          <div className="loc-ctaActions">
            <Link href="/contact-us" className="loc-ctaBtnPrimary">
              📞 Schedule a Free Consultation →
            </Link>
            <Link href="/contact-us" className="loc-ctaBtnSecondary">
              Request a Free Quote
            </Link>
          </div>
        </div>
      </section>

      <FAQSchema faqs={[
        { q: "Why choose mTouch Labs as a Software Development Company in Hyderabad?", a: "mTouch Labs has over 14 years of experience delivering custom software, enterprise applications, AI solutions, SaaS platforms, web applications, and mobile apps for startups, SMEs, enterprises, and government organizations." },
        { q: "What software development services do you offer?", a: "We provide Custom Software Development, Enterprise Software Development, AI & Generative AI Development, SaaS Product Development, Web Application Development, Mobile App Development, Cloud Solutions, API Integration, Legacy Software Modernization, DevOps, UI/UX Design, and Software Maintenance & Support." },
        { q: "Which industries do you serve?", a: "We develop software solutions for Healthcare, Banking, FinTech, Retail & eCommerce, Logistics, Manufacturing, Education, Real Estate, Food & Grocery, Travel, Hospitality, Government, Insurance, Media, and SaaS businesses." },
        { q: "Do you develop custom software for startups and enterprises?", a: "Yes. We build custom software for startups, SMEs, enterprises, and government organizations based on their business goals, workflows, and scalability requirements." },
        { q: "What technologies do you use for software development?", a: "Our technology stack includes React, Next.js, Angular, Node.js, Java, .NET, Python, Flutter, React Native, AWS, Microsoft Azure, Google Cloud Platform, PostgreSQL, MongoDB, OpenAI, and modern AI technologies." },
        { q: "Can you modernize our existing software application?", a: "Yes. We modernize legacy applications through cloud migration, UI/UX improvements, performance optimization, security enhancements, database upgrades, and technology modernization." },
        { q: "Do you provide AI and Generative AI development services?", a: "Yes. We develop AI chatbots, Generative AI applications, AI assistants, intelligent automation, machine learning solutions, predictive analytics, and enterprise AI integrations." },
        { q: "How do you ensure software quality and security?", a: "Our team follows agile development, code reviews, automated and manual testing, secure coding practices, performance optimization, and continuous quality assurance throughout the software development lifecycle." },
        { q: "Do you offer dedicated software development teams?", a: "Yes. We offer Dedicated Development Teams, Team Augmentation, Fixed Cost Projects, and Time & Material engagement models based on your business requirements." },
        { q: "How long does it take to develop custom software?", a: "The timeline depends on project scope, complexity, integrations, and business requirements. After understanding your requirements, we provide a detailed project roadmap and estimated delivery timeline." },
        { q: "Can you integrate third-party APIs and enterprise systems?", a: "Yes. We integrate ERP, CRM, HRMS, payment gateways, cloud platforms, accounting software, communication tools, and other third-party APIs to streamline business operations." },
        { q: "Do you provide post-launch maintenance and support?", a: "Yes. We provide ongoing software maintenance, security updates, feature enhancements, cloud support, bug fixes, performance monitoring, and technical support." },
        { q: "Do you work with clients outside Hyderabad and India?", a: "Yes. We work with clients across India and globally, including the USA, UK, UAE, Canada, Singapore, Australia, and Europe through remote collaboration and agile delivery." },
        { q: "How much does custom software development cost?", a: "The cost depends on project scope, features, technology stack, integrations, timeline, and engagement model. We provide customized quotations after understanding your project requirements." },
        { q: "How can I get started with mTouch Labs?", a: "Simply contact our team to schedule a free consultation. We'll understand your business goals, discuss your requirements, recommend the right technology approach, and provide a detailed development roadmap." }
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