export default function TargetAudiencesSection() {
  return (
    <section className="target-audiences-section">
      <div className="target-audiences-header">
        <h2 className="target-audiences-title">Who We Work With</h2>
        <p className="target-audiences-description">
          At mTouch Labs, we partner with startups, enterprises, and global brands across industries to
          create transformative digital solutions that inspire innovation and fuel business growth.
        </p>
      </div>

      <div className="target-audiences-container">
        {/* Top Left: Enterprises & Corporations */}
        <div className="target-audience-card target-audience-card--top-left" data-aos="zoom-in">
          <img src="/images/who_we_work_with/Enterprises & Corporations.png" alt="Enterprises & Corporations" />
          <div className="target-audience-content">
            <h3 className="target-audience-title">Enterprises &amp; Corporations</h3>
            <p className="target-audience-description">
              Secure and scalable digital solutions designed to simplify operations, improve efficiency,
              and support large-scale growth.
            </p>
          </div>
        </div>

        {/* Top Right: Startups & Scale-Ups */}
        <div className="target-audience-card target-audience-card--top-right" data-aos="zoom-in-up">
          <div className="target-audience-content">
            <h3 className="target-audience-title">Startups &amp; Scale-Ups</h3>
            <p className="target-audience-description">
              Turning your idea into an app that grows with your business simple, fast, and stress-free.
            </p>
          </div>
          <div className="target-audience-image">
            <img src="/images/who_we_work_with/Startups & Scale-Ups.png" alt="Startups & Scale-Ups" />
          </div>
        </div>

        {/* Central Icon */}
        <div className="target-audience-icon target-audience-logo_one" data-aos="zoom-in-down" style={{ height: "100%" }}>
          <img src="/images/who_we_work_with/center_logo.png" alt="mTouchLabs" className="target-audience-logo" />
        </div>

        {/* Bottom Left: Customer-Centric Brands */}
        <div className="target-audience-card target-audience-card--bottom-left" data-aos="zoom-in-left">
          <div className="target-audience-content">
            <h3 className="target-audience-title">Customer-Centric Brands</h3>
            <p className="target-audience-description">
              Engaging digital experiences that make customers happy, build loyalty, and strengthen brand trust.
            </p>
          </div>
          <div className="target-audience-image">
            <img src="/images/who_we_work_with/Customer-Centric Brands.png" alt="Customer-Centric Brands" />
          </div>
        </div>

        {/* Bottom Right: Businesses Migrating to the Cloud */}
        <div className="target-audience-card target-audience-card--bottom-right" data-aos="zoom-in-right">
          <img
            src="/images/who_we_work_with/Businesses Migrating to the Cloud.png"
            alt="Businesses Migrating to the Cloud"
          />
          <div className="target-audience-content">
            <h3 className="target-audience-title">Businesses Migrating to the Cloud</h3>
            <p className="target-audience-description">
              Smooth cloud migration and modern, high-performance platforms that help businesses work faster
              and scale easily.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
