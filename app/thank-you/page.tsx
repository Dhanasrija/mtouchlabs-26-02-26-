// import { Metadata } from "next";
// export const metadata: Metadata = {
//   title: "Thank You",
//   robots: { index: false, follow: false },

//   openGraph: {
//     title: "Thank You",
//     description: "Thank You",
//     url: "https://www.mtouchlabs.com/thank-you",
//     siteName: "mTouch Labs",
//     type: "website",
//     images: [{ url: "https://www.mtouchlabs.com/images/web-and-mobile-app-development.webp", width: 1200, height: 630, alt: "Thank You" }],
//   },
//   twitter: {
//     card: "summary_large_image",
//     title: "Thank You",
//     description: "Thank You",
//     images: ["https://www.mtouchlabs.com/images/web-and-mobile-app-development.webp"],
//   },
// };

// export default function ThankYouPage() {
//   return (
//     <section className="thank-you">
//       <img width={1854} height={374} loading="lazy" decoding="async" src="/images/logo-black.svg" alt="Logo" className="logo-thankyou" />
//       <div className="thank-you-container-msg">
//         <h3 className="thank-you-msg">
//           Thank You for submitting your information<br />
//           Our team will get in touch at the earliest
//         </h3>
//         <div className="thank-you-buttons">
//           <a href="/">
//             <button className="thank-you-btn thank-you-btn-back">Go Back</button>
//           </a>
//           <a href="/files/mTouchLabs_Brochure.pdf" target="_blank" rel="noopener noreferrer">
//             <button className="thank-you-btn thank-you-btn-brochure">View Brochure</button>
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// }


// import { Metadata } from "next";
// import { redirect } from "next/navigation";

// export const metadata: Metadata = {
//   title: "Thank You",
//   robots: { index: false, follow: false },
// };

// export default function ThankYouPage({
//   searchParams,
// }: {
//   searchParams: { success?: string };
// }) {
//   // 🚫 Block direct access
//   if (searchParams?.success !== "true") {
//     redirect("/contact-us");
//   }

//   return (
//     <section className="thank-you">
//       <img width={1854} height={374} loading="lazy" decoding="async" src="/images/logo-black.svg" alt="Logo" className="logo-thankyou" />

//       <div className="thank-you-container-msg">
//         <h3 className="thank-you-msg">
//           Thank You for submitting your information<br />
//           Our team will get in touch at the earliest
//         </h3>

//         <div className="thank-you-buttons">
//           <a href="/">
//             <button className="thank-you-btn thank-you-btn-back">
//               Go Back
//             </button>
//           </a>

//           <a
//             href="/files/mTouchLabs_Brochure.pdf"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <button className="thank-you-btn thank-you-btn-brochure">
//               View Brochure
//             </button>
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// }


import { Metadata } from "next";
import Script from "next/script";
import OpenAILeadOnce from "@/components/OpenAILeadOnce";

export const metadata: Metadata = {
  title: "Thank You",
  robots: { index: false, follow: false },
};

// Whitelist of valid ?source= values. Anything else is treated as "unknown"
// so we never inject arbitrary strings into GTM's dataLayer.
const VALID_SOURCES = ["quote", "contact", "brochure", "careers"] as const;
type FormSource = (typeof VALID_SOURCES)[number] | "unknown";

function normalizeSource(raw: string | string[] | undefined): FormSource {
  const value = Array.isArray(raw) ? raw[0] : raw;
  if (value && (VALID_SOURCES as readonly string[]).includes(value)) {
    return value as FormSource;
  }
  return "unknown";
}

// Human-readable form name + event label (one event per source so GTM
// triggers can be written as simple Custom Event = form_submit_<source>).
const SOURCE_META: Record<FormSource, { label: string; event: string }> = {
  quote:    { label: "Request Free Quote", event: "form_submit_quote" },
  contact:  { label: "Contact Us",         event: "form_submit_contact" },
  brochure: { label: "Brochure Download",  event: "form_submit_brochure" },
  careers:  { label: "Careers Application", event: "form_submit_careers" },
  unknown:  { label: "Unknown Form",       event: "form_submit_unknown" },
};

// 🚫 Direct access is blocked at the edge by middleware.ts — it requires a
// one-time HttpOnly `mtl_form_submitted` cookie that only the form-submission
// API routes (`/api/contact`, `/api/request-quote`, `/api/brochure`,
// `/api/careers`) set on a successful submission, and the cookie is deleted
// on the very first /thank-you visit so refresh / back-button revisits also
// redirect to /request-free-quote. The old `?success=true` query check was
// removed because it was trivially spoofable by typing the URL.
//
// The `?source=<form>` query param is NOT a security gate — middleware is.
// It exists purely so GTM / GA4 / Google Ads can attribute the conversion
// to the specific form (quote / contact / brochure / careers).
export default function ThankYouPage({
  searchParams,
}: {
  searchParams: { source?: string | string[] };
}) {
  const source = normalizeSource(searchParams?.source);
  const meta = SOURCE_META[source];

  // Safe JSON — `source` comes from a whitelist, but we still JSON.stringify
  // so the inline script is never vulnerable to quote-escape breakouts.
  const dataLayerPayload = JSON.stringify({
    event: meta.event,
    form_source: source,
    form_label: meta.label,
    page_path: "/thank-you",
  });

  return (
    <section className="thank-you">
      {/* ========== GTM / GA4 conversion event ==========
          Fires once per /thank-you render. GTM triggers can listen for the
          Custom Event name (e.g. `form_submit_quote`) OR read the
          `form_source` dataLayer variable. Google Ads conversions can be
          wired to these events in GTM too. ============================= */}
      <Script id="thank-you-datalayer" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
window.dataLayer.push(${dataLayerPayload});`}
      </Script>

      {/* OpenAI Pixel — sends `lead_created` once, and only if the quote
          form left a pending marker behind. This page is reachable only
          behind the one-time cookie set by /api/request-quote, so it is
          never reached without a successful submission. */}
      {source === "quote" && <OpenAILeadOnce />}

      <img width={1854} height={374} loading="lazy" decoding="async" src="/images/logo-black.svg" alt="Logo" className="logo-thankyou" />

      <div className="thank-you-container-msg">
        <h3 className="thank-you-msg">
          Thank You for submitting your information<br />
          Our team will get in touch at the earliest
        </h3>

        <div className="thank-you-buttons">
          <a href="/">
            <button className="thank-you-btn thank-you-btn-back">
              Go Back
            </button>
          </a>

          <a
            href="/files/mTouchLabs_Brochure.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="thank-you-btn thank-you-btn-brochure">
              View Brochure
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}
