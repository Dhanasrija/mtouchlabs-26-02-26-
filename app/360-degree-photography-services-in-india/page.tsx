import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "360 Degree Photography Services in India | mTouch Labs",
  description:
    "mTouch Labs offers professional 360 degree photography services in India, delivering immersive virtual tours and panoramic visual solutions.",
  keywords: [
    "360 degree photography services",
    "virtual tour photography India",
    "360 panoramic photography",
    "Google Street View photography",
    "360 product photography",
    "immersive photography services India",
  ],
  alternates: {
    canonical: "https://www.mtouchlabs.com/360-degree-photography-services-in-india",
  },
  openGraph: {
    title: "360 Degree Photography Services in India | mTouch Labs",
    description: "Interactive 360 virtual tours and panoramic photography solutions for businesses.",
    url: "https://www.mtouchlabs.com/360-degree-photography-services-in-india",
    siteName: "mTouch Labs",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "360 Degree Photography Services in India | mTouch Labs",
    description: "Immersive panoramic photography and virtual tour services across India.",
  },
};

export default function ThreeSixtyPhotography() {
  return (
    <>
      {/* ===== HERO ===== */}
      <section className="dp-hero">
        <div className="dp-hero__inner">
          <Breadcrumb pagePath="/360-degree-photography-services-in-india" />
          <h1 className="dp-hero__title">
            360° <span className="dp-hero__title-accent">Photography</span> Services
          </h1>
          <p className="dp-hero__subtitle">
            Immersive Visual Experiences That Capture Every Angle
          </p>
          <p className="dp-hero__desc">
            mTouch Labs provides professional 360 degree photography services in India, helping businesses showcase their spaces, products, and environments through interactive panoramic visuals. From real estate and hospitality to retail and corporate spaces, we capture environments with precision and clarity. Visual storytelling is evolving — 360-degree photography leads the way.
          </p>
        </div>
      </section>

      {/* ===== ABOUT ===== */}
      <section className="dp-about">
        <div className="dp-container">
          <div className="dp-about__grid">
            <div className="dp-about__content dp-animate--left">
              <h2 className="dp-about__heading">
                What Is <span className="dp-text-accent">360 Degree</span> Photography?
              </h2>
              <p className="dp-about__text">
                360 degree photography involves capturing panoramic images that allow viewers to explore a space interactively from every angle. Unlike traditional photography, 360 visuals offer full-environment visibility, interactive navigation, zoom-enabled exploration, realistic spatial experience, and virtual walkthrough capability.
              </p>
              <p className="dp-about__text">
                It transforms static viewing into immersive engagement — giving customers the ability to virtually explore spaces before visiting in person. Combined with our{" "}
                <a href="/ui-ux-design-company" style={{color: "#2563eb", textDecoration: "none", fontWeight: 600}}>UI/UX design services</a>, we create seamless interactive visual experiences that maximize engagement.
              </p>
              <p className="dp-about__text">
                Our{" "}
                <a href="/web-development-company" style={{color: "#2563eb", textDecoration: "none", fontWeight: 600}}>web development team</a>{" "}
                ensures smooth integration of 360 visuals into websites, apps, and digital marketing platforms for maximum business impact.
              </p>
            </div>
            <div className="dp-stats dp-animate--right">
              <div className="dp-stat"><span className="dp-stat__icon">🌍</span><span className="dp-stat__label">Full-Environment Visibility</span></div>
              <div className="dp-stat"><span className="dp-stat__icon">🖱️</span><span className="dp-stat__label">Interactive Navigation</span></div>
              <div className="dp-stat"><span className="dp-stat__icon">🔍</span><span className="dp-stat__label">Zoom-Enabled Exploration</span></div>
              <div className="dp-stat"><span className="dp-stat__icon">🏠</span><span className="dp-stat__label">Virtual Walkthrough</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== EXPERTISE ===== */}
      <section className="dp-whoweare">
        <div className="dp-container">
          <div className="dp-whoweare__grid">
            <div className="dp-whoweare__stats dp-animate--left">
              <div className="dp-stat dp-stat--dark"><span className="dp-stat__number">1000+</span><span className="dp-stat__label">Projects Captured</span></div>
              <div className="dp-stat dp-stat--dark"><span className="dp-stat__number">50+</span><span className="dp-stat__label">Cities Covered</span></div>
              <div className="dp-stat dp-stat--dark"><span className="dp-stat__number">8K</span><span className="dp-stat__label">Resolution Quality</span></div>
              <div className="dp-stat dp-stat--dark"><span className="dp-stat__number">48hr</span><span className="dp-stat__label">Fast Turnaround</span></div>
            </div>
            <div className="dp-whoweare__content dp-animate--right">
              <h2 className="dp-whoweare__heading">
                Benefits of <span className="dp-text-accent">360° Photography</span>
              </h2>
              <p className="dp-whoweare__text">Immersive visuals influence buying decisions and drive engagement:</p>
              <ul className="dp-checklist">
                <li className="dp-checklist__item"><span className="dp-checklist__icon">✓</span><span>Increased customer engagement &amp; interaction time</span></li>
                <li className="dp-checklist__item"><span className="dp-checklist__icon">✓</span><span>Improved online visibility &amp; search rankings</span></li>
                <li className="dp-checklist__item"><span className="dp-checklist__icon">✓</span><span>Higher conversion rates for real estate &amp; hospitality</span></li>
                <li className="dp-checklist__item"><span className="dp-checklist__icon">✓</span><span>Better space presentation &amp; remote exploration</span></li>
                <li className="dp-checklist__item"><span className="dp-checklist__icon">✓</span><span>Competitive digital advantage over static imagery</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SERVICES ===== */}
      <section className="dp-services">
        <div className="dp-container">
          <div className="dp-services__header dp-animate">
            <h2 className="dp-services__title">Our 360° <span className="dp-text-accent">Photography Services</span></h2>
            <p className="dp-services__subtitle">From virtual tours to product photography</p>
          </div>
          <div className="dp-services__grid dp-stagger">
            <div className="dp-service-card dp-animate--scale">
              <span className="dp-service-card__badge">01</span>
              <h4 className="dp-service-card__title">360 Virtual Tour Services</h4>
              <p className="dp-service-card__text">Interactive virtual tours for commercial properties, residential real estate, hotels &amp; resorts, educational institutions, healthcare facilities, and corporate offices — helping customers explore spaces remotely.</p>
            </div>
            <div className="dp-service-card dp-animate--scale">
              <span className="dp-service-card__badge">02</span>
              <h4 className="dp-service-card__title">360 Product Photography</h4>
              <p className="dp-service-card__text">Immersive product capture with rotational viewing, close-up interaction, enhanced product visibility, and improved eCommerce engagement — ideal for retail brands and online stores.</p>
            </div>
            <div className="dp-service-card dp-animate--scale">
              <span className="dp-service-card__badge">03</span>
              <h4 className="dp-service-card__title">Google Street View Integration</h4>
              <p className="dp-service-card__text">Integration of 360 visuals into Google Business profiles, websites, online directories, and marketing campaigns — increasing visibility and local customer engagement.</p>
            </div>
            <div className="dp-service-card dp-animate--scale">
              <span className="dp-service-card__badge">04</span>
              <h4 className="dp-service-card__title">Real Estate 360 Photography</h4>
              <p className="dp-service-card__text">Showcase apartments, villas, commercial properties, showrooms, and construction progress with high-quality visuals that increase property interest and buyer confidence.</p>
            </div>
            <div className="dp-service-card dp-service-card--wide dp-animate--scale">
              <span className="dp-service-card__badge">05</span>
              <h4 className="dp-service-card__title">Hospitality &amp; Tourism Photography</h4>
              <p className="dp-service-card__text">Room walkthroughs, facility previews, venue showcasing, and event space displays for hotels, resorts, and travel destinations — immersive visuals that improve booking conversions and guest confidence.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== DELIVERY ===== */}
      <section className="dp-delivery">
        <div className="dp-container">
          <h2 className="dp-delivery__heading dp-animate">Our 360° Photography <span className="dp-text-accent">Process</span></h2>
          <p className="dp-delivery__text">Professional-quality output and smooth digital integration.</p>
          <div className="dp-delivery__steps">
            <div className="dp-step"><span className="dp-step__circle">Site Assessment</span></div><span className="dp-step__arrow">→</span>
            <div className="dp-step"><span className="dp-step__circle">Equipment Setup</span></div><span className="dp-step__arrow">→</span>
            <div className="dp-step"><span className="dp-step__circle">Hi-Res Capture</span></div><span className="dp-step__arrow">→</span>
            <div className="dp-step"><span className="dp-step__circle">Image Stitching</span></div><span className="dp-step__arrow">→</span>
            <div className="dp-step"><span className="dp-step__circle">Post-Processing</span></div><span className="dp-step__arrow">→</span>
            <div className="dp-step"><span className="dp-step__circle">Integration</span></div><span className="dp-step__arrow">→</span>
            <div className="dp-step"><span className="dp-step__circle">Final Delivery</span></div>
          </div>
        </div>
      </section>

      {/* ===== RELIABLE ===== */}
      <section className="dp-reliable">
        <div className="dp-container">
          <div className="dp-reliable__inner dp-animate">
            <h2 className="dp-reliable__heading">Why Choose mTouch Labs for <span className="dp-text-accent">360° Photography</span>?</h2>
            <p className="dp-reliable__text">We combine visual precision with digital presentation expertise.</p>
            <div className="dp-reliable__pillars">
              <div className="dp-pillar"><span className="dp-pillar__dot"></span><span className="dp-pillar__label">High-resolution panoramic capture</span></div>
              <div className="dp-pillar"><span className="dp-pillar__dot"></span><span className="dp-pillar__label">Professional-grade equipment</span></div>
              <div className="dp-pillar"><span className="dp-pillar__dot"></span><span className="dp-pillar__label">Interactive virtual tour integration</span></div>
              <div className="dp-pillar"><span className="dp-pillar__dot"></span><span className="dp-pillar__label">Business-ready digital formatting</span></div>
              <div className="dp-pillar"><span className="dp-pillar__dot"></span><span className="dp-pillar__label">Local expertise across India</span></div>
              <div className="dp-pillar"><span className="dp-pillar__dot"></span><span className="dp-pillar__label">Fast turnaround &amp; structured delivery</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== INDUSTRIES ===== */}
      <section className="dp-industries">
        <div className="dp-container">
          <h2 className="dp-industries__title dp-animate">Industries We <span className="dp-text-accent">Serve</span></h2>
          <div className="dp-industries__grid dp-stagger">
            <div className="dp-industry dp-animate--scale"><span className="dp-industry__icon">🏠</span><h4 className="dp-industry__title">Real Estate &amp; Property</h4></div>
            <div className="dp-industry dp-animate--scale"><span className="dp-industry__icon">🏨</span><h4 className="dp-industry__title">Hospitality &amp; Tourism</h4></div>
            <div className="dp-industry dp-animate--scale"><span className="dp-industry__icon">🛍️</span><h4 className="dp-industry__title">Retail &amp; Showrooms</h4></div>
            <div className="dp-industry dp-animate--scale"><span className="dp-industry__icon">🎓</span><h4 className="dp-industry__title">Education Institutions</h4></div>
            <div className="dp-industry dp-animate--scale"><span className="dp-industry__icon">🏢</span><h4 className="dp-industry__title">Corporate Offices</h4></div>
            <div className="dp-industry dp-animate--scale"><span className="dp-industry__icon">🎪</span><h4 className="dp-industry__title">Event &amp; Exhibition Spaces</h4></div>
          </div>
        </div>
      </section>

      {/* ===== TECHNOLOGIES ===== */}
      <section className="dp-tech">
        <div className="dp-container">
          <div className="dp-tech__grid">
            <div className="dp-animate--left">
              <h2 className="dp-tech__heading">Equipment &amp; Tools <span className="dp-text-accent">We Use</span></h2>
              <p className="dp-tech__text">We leverage professional-grade cameras, software, and integration platforms to deliver stunning 360° visuals.</p>
              <div className="dp-tech__tags">
                {[
                  "Ricoh Theta Z1", "Insta360 Pro", "Matterport", "Google Street View",
                  "PTGui", "Adobe Lightroom", "Adobe Photoshop", "Pano2VR",
                  "Kuula", "3DVista", "CloudPano", "Krpano",
                  "HTML5 Embed", "WebGL", "React Integration", "AWS S3 Hosting"
                ].map((tech) => (
                  <span key={tech} className="dp-tag">{tech}</span>
                ))}
              </div>
            </div>
            <div className="dp-tech__stats dp-animate--right">
              <div className="dp-stat dp-stat--dark"><span className="dp-stat__number">8K+</span><span className="dp-stat__label">Resolution Output</span></div>
              <div className="dp-stat dp-stat--dark"><span className="dp-stat__number">360°</span><span className="dp-stat__label">Full Panoramic</span></div>
              <div className="dp-stat dp-stat--dark"><span className="dp-stat__number">HDR</span><span className="dp-stat__label">High Dynamic Range</span></div>
              <div className="dp-stat dp-stat--dark"><span className="dp-stat__number">Web</span><span className="dp-stat__label">Ready Integration</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="dp-faq">
        <div className="dp-container">
          <div className="dp-faq__wrapper">
            <h3 className="dp-faq__heading dp-animate">Frequently Asked <span className="dp-text-accent">Questions</span></h3>
            <p className="dp-faq__subtext">Everything you need to know about 360° photography</p>
            <div className="dp-faq__list">
              <details className="dp-faq__item"><summary className="dp-faq__question"><span>What are 360 degree photography services?</span><span className="dp-faq__chevron"></span></summary><div className="dp-faq__answer"><p>360 degree photography services capture panoramic images that allow users to interactively explore spaces or products online, providing a virtual walkthrough experience from every angle.</p></div></details>
              <details className="dp-faq__item"><summary className="dp-faq__question"><span>How does 360 photography help businesses?</span><span className="dp-faq__chevron"></span></summary><div className="dp-faq__answer"><p>It enhances digital engagement, improves property or product presentation, increases customer interaction, and drives higher conversion rates — especially for real estate, hospitality, and eCommerce.</p></div></details>
              <details className="dp-faq__item"><summary className="dp-faq__question"><span>Can 360 images be integrated into websites?</span><span className="dp-faq__chevron"></span></summary><div className="dp-faq__answer"><p>Yes. 360 visuals can be embedded into websites, Google Business profiles, marketing platforms, and mobile apps using HTML5, WebGL, and modern interactive viewers.</p></div></details>
              <details className="dp-faq__item"><summary className="dp-faq__question"><span>Do you provide services across India?</span><span className="dp-faq__chevron"></span></summary><div className="dp-faq__answer"><p>Yes. We offer 360 degree photography services across all major cities in India including Hyderabad, Bangalore, Mumbai, Delhi, Chennai, and Pune with fast turnaround times.</p></div></details>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="dp-cta">
        <div className="dp-container">
          <div className="dp-cta__inner dp-animate--scale">
            <h2 className="dp-cta__heading">Ready for <span className="dp-text-accent">Immersive Visuals</span>?</h2>
            <p className="dp-cta__text">Let&apos;s discuss how 360° photography can showcase your spaces and products with interactive, high-impact visuals.</p>
            <button type="button" className="dp-cta__button js-open-modal">Get a Free Quote</button>
          </div>
        </div>
      </section>
    </>
  );
}