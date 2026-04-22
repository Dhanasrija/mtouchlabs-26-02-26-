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
//     images: [{ url: "https://www.mtouchlabs.com/images/web-and-mobile-app-development.png", width: 1200, height: 630, alt: "Thank You" }],
//   },
//   twitter: {
//     card: "summary_large_image",
//     title: "Thank You",
//     description: "Thank You",
//     images: ["https://www.mtouchlabs.com/images/web-and-mobile-app-development.png"],
//   },
// };

// export default function ThankYouPage() {
//   return (
//     <section className="thank-you">
//       <img src="/images/logo-black.svg" alt="Logo" className="logo-thankyou" />
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
//       <img src="/images/logo-black.svg" alt="Logo" className="logo-thankyou" />

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

export const metadata: Metadata = {
  title: "Thank You",
  robots: { index: false, follow: false },
};

// 🚫 Direct access is blocked at the edge by middleware.ts — it requires a
// one-time HttpOnly `mtl_form_submitted` cookie that only the form-submission
// API routes (`/api/contact`, `/api/request-quote`, `/api/brochure`,
// `/api/careers`) set on a successful submission, and the cookie is deleted
// on the very first /thank-you visit so refresh / back-button revisits also
// redirect to /request-free-quote. The old `?success=true` query check was
// removed because it was trivially spoofable by typing the URL.
export default function ThankYouPage() {
  return (
    <section className="thank-you">
      <img src="/images/logo-black.svg" alt="Logo" className="logo-thankyou" />

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
