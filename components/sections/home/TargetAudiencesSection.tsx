// export default function TargetAudiencesSection() {
//   return (
//     <section className="target-audiences-section">
//       <div className="target-audiences-header">
//         <h2 className="target-audiences-title">Who We Work With</h2>
//         <p className="target-audiences-description">
//           At mTouch Labs, we partner with startups, enterprises, and global brands across industries to
//           create transformative digital solutions that inspire innovation and fuel business growth.
//         </p>
//       </div>

//       <div className="target-audiences-container">
//         {/* Top Left: Enterprises & Corporations */}
//         <div className="target-audience-card target-audience-card--top-left" data-aos="zoom-in">
//           <img src="/images/who_we_work_with/Enterprises & Corporations.png" alt="Enterprises & Corporations" />
//           <div className="target-audience-content">
//             <h3 className="target-audience-title">Enterprises &amp; Corporations</h3>
//             <p className="target-audience-description">
//               Secure and scalable digital solutions designed to simplify operations, improve efficiency,
//               and support large-scale growth.
//             </p>
//           </div>
//         </div>

//         {/* Top Right: Startups & Scale-Ups */}
//         <div className="target-audience-card target-audience-card--top-right" data-aos="zoom-in-up">
//           <div className="target-audience-content">
//             <h3 className="target-audience-title">Startups &amp; Scale-Ups</h3>
//             <p className="target-audience-description">
//               Turning your idea into an app that grows with your business simple, fast, and stress-free.
//             </p>
//           </div>
//           <div className="target-audience-image">
//             <img src="/images/who_we_work_with/Startups & Scale-Ups.png" alt="Startups & Scale-Ups" />
//           </div>
//         </div>

//         {/* Central Icon */}
//         <div className="target-audience-icon target-audience-logo_one" data-aos="zoom-in-down" style={{ height: "100%" }}>
//           <img src="/images/who_we_work_with/center_logo.png" alt="mTouchLabs" className="target-audience-logo" />
//         </div>

//         {/* Bottom Left: Customer-Centric Brands */}
//         <div className="target-audience-card target-audience-card--bottom-left" data-aos="zoom-in-left">
//           <div className="target-audience-content">
//             <h3 className="target-audience-title">Customer-Centric Brands</h3>
//             <p className="target-audience-description">
//               Engaging digital experiences that make customers happy, build loyalty, and strengthen brand trust.
//             </p>
//           </div>
//           <div className="target-audience-image">
//             <img src="/images/who_we_work_with/Customer-Centric Brands.png" alt="Customer-Centric Brands" />
//           </div>
//         </div>

//         {/* Bottom Right: Businesses Migrating to the Cloud */}
//         <div className="target-audience-card target-audience-card--bottom-right" data-aos="zoom-in-right">
//           <img
//             src="/images/who_we_work_with/Businesses Migrating to the Cloud.png"
//             alt="Businesses Migrating to the Cloud"
//           />
//           <div className="target-audience-content">
//             <h3 className="target-audience-title">Businesses Migrating to the Cloud</h3>
//             <p className="target-audience-description">
//               Smooth cloud migration and modern, high-performance platforms that help businesses work faster
//               and scale easily.
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


export default function WhoWeWorkWithSection() {
  return (
    <section className="wwww-section">
      <div className="wwww-container">

        {/* Header */}
        <p className="wwww-eyebrow">
          <span className="wwww-eyebrow-dot" />
          EXPERTISE
        </p>
        <h2 className="wwww-heading">
          Who We <span className="wwww-highlight">Work With</span>
        </h2>
        <p className="wwww-subheading">
          We help startups and enterprises create digital solutions that inspire<br />
          innovation and business growth.
        </p>

        {/* Grid: 2 columns × 2 rows */}
        <div className="wwww-grid">

          {/* ── Card 1: Enterprises & Corporations ── */}
          <div className="wwww-card">
            <div className="wwww-card-visual">
              {/* Background dark card */}
              <div className="wwww-mock wwww-mock--dark wwww-mock--back">
                <span className="wwww-mock-label">Performance</span>
                <svg className="wwww-mock-icon" viewBox="0 0 20 20" fill="none">
                  <polyline points="2,14 7,8 11,11 18,4" stroke="#4ade80" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <div className="wwww-mock-stat">12+</div>
                <div className="wwww-mock-stat-label">Months experience</div>
              </div>
              {/* Foreground white card */}
              <div className="wwww-mock wwww-mock--white wwww-mock--front">
                <div className="wwww-mock-title">Enterprises &amp;<br/>Corporations</div>
                <div className="wwww-mock-bar">
                  <div className="wwww-mock-bar-fill" style={{ width: "70%" }} />
                </div>
                <div className="wwww-mock-rows">
                  <div className="wwww-mock-row">
                    <svg viewBox="0 0 16 16" width="13" fill="none" stroke="#555" strokeWidth="1.4">
                      <circle cx="8" cy="8" r="6"/><path d="M8 5v3l2 2"/>
                    </svg>
                    <span>Operations:</span>
                    <span className="wwww-mock-val">$2.4M</span>
                  </div>
                  <div className="wwww-mock-row">
                    <svg viewBox="0 0 16 16" width="13" fill="none" stroke="#555" strokeWidth="1.4">
                      <circle cx="8" cy="8" r="6"/><path d="M5 8l2 2 4-4"/>
                    </svg>
                    <span>Efficiency Gains:</span>
                    <span className="wwww-mock-val">$1.1M</span>
                  </div>
                  <div className="wwww-mock-row">
                    <svg viewBox="0 0 16 16" width="13" fill="none" stroke="#555" strokeWidth="1.4">
                      <polyline points="2,12 5,7 8,9 11,5 14,8"/>
                    </svg>
                    <span>Sustainable Growth:</span>
                    <span className="wwww-mock-val">14%</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="wwww-card-body">
              <h3 className="wwww-card-title">Enterprises &amp; Corporations</h3>
              <p className="wwww-card-desc">
                Secure and scalable digital solutions designed to streamline operations,
                improve efficiency, and enable sustainable business growth.
              </p>
            </div>
          </div>

          {/* ── Card 2: Startups & Scale-Ups ── */}
          <div className="wwww-card">
            <div className="wwww-card-visual">
              {/* Background dark card */}
              <div className="wwww-mock wwww-mock--dark wwww-mock--back wwww-mock--back-right">
                <span className="wwww-mock-label">Strategy, Artificial<br/>Intelligence<br/>for grow</span>
              </div>
              {/* Foreground white card */}
              <div className="wwww-mock wwww-mock--white wwww-mock--front wwww-mock--front-right">
                <div className="wwww-mock-title" style={{ fontSize: "15px", marginBottom: "6px" }}>
                  Startups &amp; Scale-Ups
                </div>
                <div className="wwww-mock-subtitle">Turning your idea<br/>into an app</div>
                <p className="wwww-mock-body-text">
                  that grows with your business<br/>simple, fast, and stress-free.
                </p>
                {/* Bar chart */}
                <div className="wwww-mock-chart">
                  {[30, 45, 55, 60, 70, 80, 100].map((h, i) => (
                    <div
                      key={i}
                      className="wwww-mock-bar-col"
                      style={{
                        height: `${h}%`,
                        background: i === 6 ? "#3b82f6" : "#d1d5db",
                      }}
                    />
                  ))}
                </div>
                <div className="wwww-mock-chart-labels">
                  {["2019","2020","2021","2022","2023","2024","2025"].map((y) => (
                    <span key={y}>{y}</span>
                  ))}
                </div>
              </div>
            </div>
            <div className="wwww-card-body">
              <h3 className="wwww-card-title">Startups &amp; Scale-Ups</h3>
              <p className="wwww-card-desc">
                Turning your idea into an app that grows with your business —
                simple, fast, and stress-free.
              </p>
            </div>
          </div>

          {/* ── Card 3: Customer-Centric Brands ── */}
          <div className="wwww-card">
            <div className="wwww-card-visual">
              <div className="wwww-mock wwww-mock--dark wwww-mock--back">
                <span className="wwww-mock-label">Customer<br/>Engagement<br/>Platform</span>
              </div>
              <div className="wwww-mock wwww-mock--white wwww-mock--front">
                <div className="wwww-mock-title">Customer-Centric<br/>Brands</div>
                <div className="wwww-mock-bar">
                  <div className="wwww-mock-bar-fill" style={{ width: "85%", background: "#f59e0b" }} />
                </div>
                <div className="wwww-mock-rows">
                  <div className="wwww-mock-row">
                    <svg viewBox="0 0 16 16" width="13" fill="none" stroke="#555" strokeWidth="1.4">
                      <path d="M8 1l2 4 5 .7-3.6 3.5.85 5L8 12l-4.25 2.2.85-5L1 5.7 6 5z"/>
                    </svg>
                    <span>Loyalty Score:</span>
                    <span className="wwww-mock-val">94%</span>
                  </div>
                  <div className="wwww-mock-row">
                    <svg viewBox="0 0 16 16" width="13" fill="none" stroke="#555" strokeWidth="1.4">
                      <circle cx="8" cy="6" r="3"/><path d="M2 14c0-3 2.7-5 6-5s6 2 6 5"/>
                    </svg>
                    <span>Retention Rate:</span>
                    <span className="wwww-mock-val">88%</span>
                  </div>
                  <div className="wwww-mock-row">
                    <svg viewBox="0 0 16 16" width="13" fill="none" stroke="#555" strokeWidth="1.4">
                      <path d="M3 8h10M8 3l5 5-5 5"/>
                    </svg>
                    <span>NPS Growth:</span>
                    <span className="wwww-mock-val">+32</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="wwww-card-body">
              <h3 className="wwww-card-title">Customer-Centric Brands</h3>
              <p className="wwww-card-desc">
                Engaging digital experiences that make customers happy, build loyalty,
                and strengthen brand trust.
              </p>
            </div>
          </div>

          {/* ── Card 4: Businesses Migrating to Cloud ── */}
          <div className="wwww-card">
            <div className="wwww-card-visual">
              <div className="wwww-mock wwww-mock--dark wwww-mock--back wwww-mock--back-right">
                <span className="wwww-mock-label">Cloud<br/>Migration<br/>Roadmap</span>
              </div>
              <div className="wwww-mock wwww-mock--white wwww-mock--front wwww-mock--front-right">
                <div className="wwww-mock-title" style={{ fontSize: "15px", marginBottom: "6px" }}>
                  Cloud Migration
                </div>
                <div className="wwww-mock-subtitle">From legacy to<br/>cloud-native</div>
                <p className="wwww-mock-body-text">
                  Smooth migration, zero downtime,<br/>built to scale.
                </p>
                <div className="wwww-mock-chart">
                  {[40, 52, 60, 72, 80, 90, 100].map((h, i) => (
                    <div
                      key={i}
                      className="wwww-mock-bar-col"
                      style={{
                        height: `${h}%`,
                        background: i === 6 ? "#3b82f6" : "#d1d5db",
                      }}
                    />
                  ))}
                </div>
                <div className="wwww-mock-chart-labels">
                  {["Q1","Q2","Q3","Q4","Q5","Q6","Q7"].map((q) => (
                    <span key={q}>{q}</span>
                  ))}
                </div>
              </div>
            </div>
            <div className="wwww-card-body">
              <h3 className="wwww-card-title">Businesses Migrating to the Cloud</h3>
              <p className="wwww-card-desc">
                Smooth cloud migration and modern, high-performance platforms that help
                businesses work faster and scale easily.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}