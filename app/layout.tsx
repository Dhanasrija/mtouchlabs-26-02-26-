import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Script from "next/script";

export const metadata = {
  title: "mTouch Labs - Software Development Company",
  description:
    "mTouch Labs is a leading software development company providing mobile app development, web development, and digital marketing services.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Core CSS */}
        <link href="/css/bootstrap.min.css" rel="stylesheet" />
        <link href="/css/plugin.min.css" rel="stylesheet" />
        <link href="/css/all.min.css" rel="stylesheet" />
        <link href="/css/ionicon.min.css" rel="stylesheet" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Lora:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
        />
        {/* Template CSS */}
        <link href="/css/style.css" rel="stylesheet" />
        <link href="/css/responsive.css" rel="stylesheet" />
        <link href="/css/mega-menu.css" rel="stylesheet" />
        <link href="/css/about.css" rel="stylesheet" />
        <link href="/css/blog.css" rel="stylesheet" />
        <link href="/css/home-mega-menu.css" rel="stylesheet" />
        {/* AOS animations */}
        <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet" />
        {/* Owl Carousel */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.theme.default.min.css"
        />
        {/* Favicon */}
        <link href="/images/favicon.png" rel="icon" />
      </head>
      <body>
        {/* Request Quote Modal Overlay (shared) */}
        <div className="modal-overlay hide" id="requestQuoteModal"></div>

        {/* Brochure Modal Overlay */}
        <div className="modal-overlay hide" id="brochureModal">
          <div style={{
            display: "flex",
            maxWidth: "850px",
            margin: "60px auto",
            background: "#fff",
            borderRadius: "12px",
            overflow: "hidden",
            boxShadow: "0 20px 60px rgba(0,0,0,0.3)",
            position: "relative"
          }}>
            {/* Left — Brochure Image */}
            <div style={{
              flex: "0 0 45%",
              background: "linear-gradient(135deg, #e8e0f5 0%, #d4e4f7 100%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "30px"
            }}>
              <img src="/images/brochure-preview.png" alt="Brochure Preview"
                style={{ maxWidth: "100%", maxHeight: "400px", objectFit: "contain" }} />
            </div>
            {/* Right — Form */}
            <div style={{ flex: "1", padding: "35px 40px", position: "relative" }}>
              <button id="closeBrochureModal" style={{
                position: "absolute", top: "12px", right: "16px",
                background: "none", border: "none", fontSize: "24px",
                cursor: "pointer", color: "#999", lineHeight: "1"
              }}>✕</button>
              <h3 style={{ fontSize: "20px", fontWeight: "700", color: "#1a1a2e", marginBottom: "25px", textTransform: "uppercase", letterSpacing: "0.5px" }}>Request Brochure</h3>

              <div id="brochureForm">
                <label style={{ display: "block", fontSize: "13px", fontWeight: "600", color: "#333", marginBottom: "6px" }}>Full Name</label>
                <div style={{ display: "flex", alignItems: "center", border: "1px solid #ddd", borderRadius: "6px", marginBottom: "18px", padding: "0 12px" }}>
                  <span style={{ color: "#3b82f6", marginRight: "10px" }}>👤</span>
                  <input type="text" id="brochure_name" placeholder="Full Name"
                    style={{ width: "100%", padding: "11px 0", border: "none", outline: "none", fontSize: "14px" }} />
                </div>

                <label style={{ display: "block", fontSize: "13px", fontWeight: "600", color: "#333", marginBottom: "6px" }}>Your Email</label>
                <div style={{ display: "flex", alignItems: "center", border: "1px solid #ddd", borderRadius: "6px", marginBottom: "18px", padding: "0 12px" }}>
                  <span style={{ color: "#3b82f6", marginRight: "10px" }}>✉️</span>
                  <input type="email" id="brochure_email" placeholder="Email Id"
                    style={{ width: "100%", padding: "11px 0", border: "none", outline: "none", fontSize: "14px" }} />
                </div>

                <label style={{ display: "block", fontSize: "13px", fontWeight: "600", color: "#333", marginBottom: "6px" }}>Country Code</label>
                <select id="brochure_country" style={{
                  width: "100%", padding: "11px 12px", border: "1px solid #ddd",
                  borderRadius: "6px", marginBottom: "18px", fontSize: "14px",
                  outline: "none", color: "#333", background: "#fff"
                }}>
                  <option value="+91">India (+91)</option>
                  <option value="+1">USA (+1)</option>
                  <option value="+44">UK (+44)</option>
                  <option value="+61">Australia (+61)</option>
                  <option value="+971">UAE (+971)</option>
                  <option value="+65">Singapore (+65)</option>
                  <option value="+49">Germany (+49)</option>
                  <option value="+33">France (+33)</option>
                  <option value="+81">Japan (+81)</option>
                  <option value="+86">China (+86)</option>
                  <option value="+974">Qatar (+974)</option>
                  <option value="+965">Kuwait (+965)</option>
                  <option value="+966">Saudi Arabia (+966)</option>
                  <option value="+1">Canada (+1)</option>
                </select>

                <label style={{ display: "block", fontSize: "13px", fontWeight: "600", color: "#333", marginBottom: "6px" }}>Your Mobile</label>
                <div style={{ display: "flex", alignItems: "center", border: "1px solid #ddd", borderRadius: "6px", marginBottom: "25px", padding: "0 12px" }}>
                  <span style={{ color: "#3b82f6", marginRight: "10px" }}>📱</span>
                  <input type="tel" id="brochure_phone" placeholder="Contact Number"
                    style={{ width: "100%", padding: "11px 0", border: "none", outline: "none", fontSize: "14px" }} />
                </div>

                <button id="brochureSubmitBtn" style={{
                  width: "auto", padding: "12px 40px",
                  background: "linear-gradient(135deg, #3b82f6, #1d4ed8)",
                  color: "#fff", border: "none", borderRadius: "6px",
                  fontSize: "14px", fontWeight: "700", cursor: "pointer",
                  textTransform: "uppercase", letterSpacing: "1px"
                }}>Submit Now</button>
              </div>
            </div>
          </div>
        </div>

        <Header />
        {children}
        <Footer />

        {/* ========== SHARED SCRIPTS ========== */}
        <Script
          src="/js/jquery-3.6.0.min.js"
          strategy="beforeInteractive"
        />
        <Script
          src="/js/bootstrap.bundle.min.js"
          strategy="beforeInteractive"
        />
        <Script src="/js/app.bundle.js" strategy="afterInteractive" />
        <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js"
          strategy="afterInteractive"
        />
        <Script
          src="https://unpkg.com/aos@2.3.1/dist/aos.js"
          strategy="afterInteractive"
        />
        <Script src="/js/mega-menu.js" strategy="afterInteractive" />
        <Script src="/js/navbar-init.js" strategy="afterInteractive" />
        <Script src="/js/main.js" strategy="afterInteractive" />
        <Script src="/js/site-interactions.js" strategy="afterInteractive" />
        <Script src="/js/faq.js" strategy="afterInteractive" />
        <Script src="/js/tabs.js" strategy="afterInteractive" />
        <Script src="/js/services.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}