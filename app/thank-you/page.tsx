import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Thank You | mTouch Labs",
  robots: { index: false, follow: false },

  openGraph: {
    title: "Thank You | mTouch Labs",
    description: "Thank You | mTouch Labs",
    url: "https://www.mtouchlabs.com/thank-you",
    siteName: "mTouch Labs",
    type: "website",
    images: [{ url: "https://www.mtouchlabs.com/images/web-and-mobile-app-development.png", width: 1200, height: 630, alt: "Thank You | mTouch Labs" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Thank You | mTouch Labs",
    description: "Thank You | mTouch Labs",
    images: ["https://www.mtouchlabs.com/images/web-and-mobile-app-development.png"],
  },
};

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
            <button className="thank-you-btn thank-you-btn-back">Go Back</button>
          </a>
          <a href="/files/mTouchLabs_Brochure.pdf" target="_blank" rel="noopener noreferrer">
            <button className="thank-you-btn thank-you-btn-brochure">View Brochure</button>
          </a>
        </div>
      </div>
    </section>
  );
}