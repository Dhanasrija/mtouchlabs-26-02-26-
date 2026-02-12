import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Thank You | mTouch Labs",
  description: "Thank you for submitting your information. Our team will get in touch at the earliest.",
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