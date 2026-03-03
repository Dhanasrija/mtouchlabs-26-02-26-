import type { Metadata } from "next";
import Link from "next/link";
import FAQSchema from "@/components/seo/FAQSchema";

export const metadata: Metadata = {
  title: "Software Development Company in Saudi Arabia | mTouch Labs",
  description: "mTouch Labs is a leading Software Development Company in Saudi Arabia delivering custom software, enterprise applications, cloud services, and AI solutions.",
  keywords: ["software development company in Saudi Arabia","custom software development Saudi Arabia","enterprise software Saudi Arabia"],
  openGraph: {
    title: "Software Development Company in Saudi Arabia - mTouch Labs",
    description: "mTouch Labs is a leading Software Development Company in Saudi Arabia delivering custom software, enterprise applications, cloud services, and AI solutions.",
    url: "https://www.mtouchlabs.com/software-development-company-saudi-arabia",
    type: "website",
  },
  alternates: {
    canonical: "https://www.mtouchlabs.com/software-development-company-saudi-arabia",
  },
};

export default function SoftwareDevelopmentCompanySaudiarabia() {
  return (
    <div className="loc-page">
      {/* ═══ HERO ═══ */}
      <section className="loc-hero">
        <div className="loc-heroInner">
          <div className="loc-heroContent">
            <div className="loc-heroBadge">
              <span className="loc-heroBadgeDot" />
              mTouch Labs · Saudi Arabia
            </div>
            <h1 className="loc-heroTitle">
              Software Development Company in{" "}
              <span className="loc-highlight">Saudi Arabia</span>
            </h1>
            <p className="loc-heroDesc">
              Enabling digital transformation aligned with Vision 2030 for Saudi enterprises.
            </p>
            <Link href="/contact-us" className="loc-heroCta">
              Get a Free Consultation →
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ SERVICES ═══ */}
      <section className="loc-section loc-servicesSection">
        <div className="loc-sectionInner">
          <div className="loc-sectionHeader">
            <h2 className="loc-sectionTitle">
              Our Services in <span className="loc-highlight">Saudi Arabia</span>
            </h2>
            <p className="loc-sectionDesc">
              End-to-end software development services tailored for Saudi Arabia businesses.
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
              Industries We Serve in <span className="loc-highlight">Saudi Arabia</span>
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
                <span className="loc-faqQuestionText">Why choose a software development company in Saudi Arabia?</span>
                <span className="loc-faqChevron">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6"/></svg>
                </span>
              </summary>
              <div className="loc-faqAnswer">Saudi Arabia offers a strong technology ecosystem and access to skilled engineering talent, making it an ideal hub for software development.</div>
            </details>
            <details className="loc-faqItem">
              <summary className="loc-faqQuestion">
                <span className="loc-faqQuestionText">Does mTouch Labs provide custom software development in Saudi Arabia?</span>
                <span className="loc-faqChevron">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6"/></svg>
                </span>
              </summary>
              <div className="loc-faqAnswer">Yes, we provide fully customized software development services tailored to businesses in Saudi Arabia.</div>
            </details>
            <details className="loc-faqItem">
              <summary className="loc-faqQuestion">
                <span className="loc-faqQuestionText">Do you offer mobile app development in Saudi Arabia?</span>
                <span className="loc-faqChevron">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6"/></svg>
                </span>
              </summary>
              <div className="loc-faqAnswer">Yes, we develop iOS, Android, and cross-platform mobile applications for businesses across Saudi Arabia.</div>
            </details>
            <details className="loc-faqItem">
              <summary className="loc-faqQuestion">
                <span className="loc-faqQuestionText">Can you help with cloud migration and AI solutions?</span>
                <span className="loc-faqChevron">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6"/></svg>
                </span>
              </summary>
              <div className="loc-faqAnswer">Yes, we offer cloud migration services and AI-powered automation solutions for Saudi Arabia-based businesses.</div>
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
    { q: "Why choose a software development company in Saudi Arabia?", a: "Saudi Arabia offers a strong technology ecosystem and access to skilled engineering talent, making it an ideal hub for software development." },
    { q: "Does mTouch Labs provide custom software development in Saudi Arabia?", a: "Yes, we provide fully customized software development services tailored to businesses in Saudi Arabia." },
    { q: "Do you offer mobile app development in Saudi Arabia?", a: "Yes, we develop iOS, Android, and cross-platform mobile applications for businesses across Saudi Arabia." },
    { q: "Can you help with cloud migration and AI solutions?", a: "Yes, we offer cloud migration services and AI-powered automation solutions for Saudi Arabia-based businesses." },
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