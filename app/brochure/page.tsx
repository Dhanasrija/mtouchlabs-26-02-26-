// /brochure — dedicated page that opens the brochure modal automatically.
// Keeps the URL as /brochure (no more /contact-us redirect) while reusing
// the global brochure modal mounted in app/layout.tsx.
import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Download Brochure | mTouch Labs",
  description:
    "Download the mTouch Labs company brochure — a quick overview of our services, capabilities and industries we serve.",
  alternates: { canonical: "https://www.mtouchlabs.com/brochure" },
  robots: { index: false, follow: true }, // the real content is the modal
};

export default function BrochurePage() {
  return (
    <main
      style={{
        minHeight: "60vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "80px 20px",
        textAlign: "center",
        background: "#f8fafc",
      }}
    >
      <div style={{ maxWidth: 560 }}>
        <h1
          style={{
            fontSize: "clamp(1.4rem, 4vw, 2.2rem)",
            fontWeight: 700,
            color: "#1a1a2e",
            marginBottom: 12,
            lineHeight: 1.25,
          }}
        >
          Download our Brochure
        </h1>
        <p
          style={{
            color: "#475569",
            fontSize: "clamp(0.95rem, 2.2vw, 1.05rem)",
            marginBottom: 24,
            lineHeight: 1.6,
          }}
        >
          Fill in the short form to receive the mTouch Labs company brochure
          covering services, capabilities, and industry expertise.
        </p>
        <button
          type="button"
          className="ft-brochure-btn js-brochure-modal"
          style={{ padding: "12px 28px" }}
        >
          Open Brochure Form →
        </button>
      </div>

      {/* Auto-open the shared brochure modal on page load */}
      <Script id="auto-open-brochure" strategy="afterInteractive">{`
        (function() {
          function open() {
            var m = document.getElementById("brochureModal");
            if (m) m.classList.remove("hide");
          }
          if (document.readyState === "complete") setTimeout(open, 150);
          else window.addEventListener("load", function(){ setTimeout(open, 150); });
        })();
      `}</Script>
    </main>
  );
}
