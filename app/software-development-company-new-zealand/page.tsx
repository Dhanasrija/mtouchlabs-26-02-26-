import type { Metadata } from "next";
import Link from "next/link";
import FAQSchema from "@/components/seo/FAQSchema";
import ServiceHero from "@/components/sections/ServiceHero";

export const metadata: Metadata = {
  title: "Software Development Company in New Zealand",
  description: "mTouch Labs is a leading Software Development Company in New Zealand delivering custom software, enterprise applications, cloud services, and AI solutions.",
  keywords: ["software development company in New Zealand","custom software development New Zealand","enterprise software New Zealand"],
  openGraph: { images: [{ url: "/images/Light.png", width: 1200, height: 630, alt: "mTouch Labs" }],
    title: "Software Development Company in New Zealand",
    description: "mTouch Labs is a leading Software Development Company in New Zealand delivering custom software, enterprise applications, cloud services, and AI solutions.",
    url: "https://www.mtouchlabs.com/software-development-company-new-zealand",
    type: "website",
  },
  alternates: {
    canonical: "https://www.mtouchlabs.com/software-development-company-new-zealand",
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
    title: "Software Development Company in New Zealand | mTouch Labs",
    description: "mTouch Labs — software development company serving New Zealand with custom software, cloud, AI and enterprise applications.",
    images: [{ url: "/images/Light.png", alt: "mTouch Labs Software Development Company in New Zealand" }]
  },
  robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 }
};


const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "mTouch Labs — Software Development in New Zealand",
  "url": "https://www.mtouchlabs.com/software-development-company-new-zealand",
  "description": "mTouch Labs — custom software, enterprise apps, cloud and AI for clients in New Zealand.",
  "image": "https://www.mtouchlabs.com/images/Light.png",
  "priceRange": "$$",
  "areaServed": { "@type": "Country", "name": "New Zealand" },
  "address": { "@type": "PostalAddress", "addressLocality": "New Zealand", "addressCountry": "NZ" },
  "provider": { "@type": "Organization", "name": "mTouch Labs", "url": "https://www.mtouchlabs.com" },
  "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "reviewCount": "150", "bestRating": "5" }
};

const locationBreadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.mtouchlabs.com/" },
    { "@type": "ListItem", "position": 2, "name": "Locations", "item": "https://www.mtouchlabs.com/services" },
    { "@type": "ListItem", "position": 3, "name": "Software Development Company in New Zealand", "item": "https://www.mtouchlabs.com/software-development-company-new-zealand" }
  ]
};

export default function SoftwareDevelopmentCompanyNewzealand() {
  return (
    <div className="loc-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(locationBreadcrumb) }} />
      {/* ═══ HERO ═══ */}
      <ServiceHero
        badge="mTouch Labs · New Zealand"
        titleLead="Software Development Company in"
        titleAccent="New Zealand"
        description={<>Scalable digital solutions for growing businesses in New Zealand&apos;s evolving market.</>}
      />

      {/* ═══ SERVICES ═══ */}
      <section className="loc-section loc-servicesSection">
        <div className="loc-sectionInner">
          <div className="loc-sectionHeader">
            <h2 className="loc-sectionTitle">
              Our Services in <span className="loc-highlight">New Zealand</span>
            </h2>
            <p className="loc-sectionDesc">
              End-to-end software development services tailored for New Zealand businesses.
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
              Industries We Serve in <span className="loc-highlight">New Zealand</span>
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
                <h4 className="loc-processStepTitle">Requirement Analysis</h4>
                <p className="loc-processStepDesc">Deep-dive consultation to understand your business needs.</p>
              </div>
            </div>
            <div className="loc-processStep">
              <div className="loc-processNum">02</div>
              <div className="loc-processStepContent">
                <h4 className="loc-processStepTitle">Architecture Planning</h4>
                <p className="loc-processStepDesc">Designing scalable system architecture.</p>
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
                <p className="loc-processStepDesc">Sprint-based development with CI/CD.</p>
              </div>
            </div>
            <div className="loc-processStep">
              <div className="loc-processNum">05</div>
              <div className="loc-processStepContent">
                <h4 className="loc-processStepTitle">Quality Testing</h4>
                <p className="loc-processStepDesc">Comprehensive testing and optimization.</p>
              </div>
            </div>
            <div className="loc-processStep">
              <div className="loc-processNum">06</div>
              <div className="loc-processStepContent">
                <h4 className="loc-processStepTitle">Deployment & Support</h4>
                <p className="loc-processStepDesc">Launch and ongoing support.</p>
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
                <span className="loc-faqQuestionText">Why choose a software development company in New Zealand?</span>
                <span className="loc-faqChevron">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6"/></svg>
                </span>
              </summary>
              <div className="loc-faqAnswer">New Zealand offers a strong technology ecosystem and access to skilled engineering talent, making it an ideal hub for software development.</div>
            </details>
            <details className="loc-faqItem">
              <summary className="loc-faqQuestion">
                <span className="loc-faqQuestionText">Does mTouch Labs provide custom software development in New Zealand?</span>
                <span className="loc-faqChevron">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6"/></svg>
                </span>
              </summary>
              <div className="loc-faqAnswer">Yes, we provide fully customized software development services tailored to businesses in New Zealand.</div>
            </details>
            <details className="loc-faqItem">
              <summary className="loc-faqQuestion">
                <span className="loc-faqQuestionText">Do you offer mobile app development in New Zealand?</span>
                <span className="loc-faqChevron">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6"/></svg>
                </span>
              </summary>
              <div className="loc-faqAnswer">Yes, we develop iOS, Android, and cross-platform mobile applications for businesses across New Zealand.</div>
            </details>
            <details className="loc-faqItem">
              <summary className="loc-faqQuestion">
                <span className="loc-faqQuestionText">Can you help with cloud migration and AI solutions?</span>
                <span className="loc-faqChevron">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6"/></svg>
                </span>
              </summary>
              <div className="loc-faqAnswer">Yes, we offer cloud migration services and AI-powered automation solutions for New Zealand-based businesses.</div>
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
    { q: "Why choose a software development company in New Zealand?", a: "New Zealand offers a strong technology ecosystem and access to skilled engineering talent, making it an ideal hub for software development." },
    { q: "Does mTouch Labs provide custom software development in New Zealand?", a: "Yes, we provide fully customized software development services tailored to businesses in New Zealand." },
    { q: "Do you offer mobile app development in New Zealand?", a: "Yes, we develop iOS, Android, and cross-platform mobile applications for businesses across New Zealand." },
    { q: "Can you help with cloud migration and AI solutions?", a: "Yes, we offer cloud migration services and AI-powered automation solutions for New Zealand-based businesses." },
    { q: "Do you provide ongoing support after project completion?", a: "Yes, we offer application maintenance and long-term support services to ensure optimal performance." }
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