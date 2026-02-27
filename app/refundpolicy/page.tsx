import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "We are committed to safeguarding and preserving the privacy of our users. Read our privacy policy page before submitting any confidential data",
  alternates: {
    canonical: "https://www.mtouchlabs.com/refundpolicy",
  },

  openGraph: {
    title: "Privacy Policy",
    description: "We are committed to safeguarding and preserving the privacy of our users. Read our privacy policy page before submitting any confidential data",
    url: "https://www.mtouchlabs.com/refundpolicy",
    siteName: "mTouch Labs",
    type: "website",
    images: [{ url: "https://www.mtouchlabs.com/images/web-and-mobile-app-development.png", width: 1200, height: 630, alt: "Privacy Policy" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy",
    description: "We are committed to safeguarding and preserving the privacy of our users. Read our privacy policy page before submitting any confidential data",
    images: ["https://www.mtouchlabs.com/images/web-and-mobile-app-development.png"],
  },
};

export default function Page() {
  return (
    <>
<div className="sec-pad">
                <div className="container">
                        <div className="refund-policy">
                                <h1 className="refund-title">Refund Policy – mTouch Labs</h1>

                                <p className="refund-intro">
                                        At mTouch Labs, we strive to deliver high-quality software solutions and digital
                                        services tailored to our clients' needs. Please read our refund policy carefully
                                        before
                                        making any payments.
                                </p>

                                <h2 className="refund-no-refund">No Refund Policy</h2>
                                <p className="refund-details">
                                        All payments made to mTouch Labs for software development, digital services, or
                                        subscription-based products are non-refundable. By making a payment, you confirm
                                        that
                                        you have reviewed the scope of services and agreed to the terms associated with
                                        the
                                        engagement.
                                </p>

                                <p className="refund-exclusions">
                                        We do not offer refunds for:
                                </p>
                                <ul className="refund-list">
                                        <li className="refund-item">Change of mind after project initiation</li>
                                        <li className="refund-item">Partial or incomplete service usage</li>
                                        <li className="refund-item">Delays caused by third-party dependencies or client-side
                                                issues
                                        </li>
                                        <li className="refund-item">Subscription cancellations or unused portions of service
                                                time
                                        </li>
                                </ul>

                                <h2 className="refund-exceptions">Exceptions</h2>
                                <p className="refund-exception-details">
                                        While we maintain a strict no-refund policy, exceptions may be considered at our
                                        sole
                                        discretion in the following special cases:
                                </p>
                                <ul className="refund-exception-list">
                                        <li className="refund-exception-item">Duplicate payments made in error</li>
                                        <li className="refund-exception-item">Non-delivery of service due to technical
                                                failures
                                                directly attributable to mTouch Labs</li>
                                        <li className="refund-exception-item">Situations deemed exceptional by our
                                                management after
                                                internal review</li>
                                </ul>

                                <p className="refund-approval">
                                        Any approved refund, if applicable, will be processed within 7–14 business days
                                        to the
                                        original payment method.
                                </p>

                                <h2 className="refund-contact-title">Contact</h2>
                                <p className="refund-contact">
                                        For refund-related inquiries or to report exceptional cases, please contact our
                                        support
                                        team at: <a href="/cdn-cgi/l/email-protection#ea8985849e8b899eaa879e859f8982868b8899c4898587" className="refund-contact-email"><span className="__cf_email__" data-cfemail="c8aba7a6bca9abbc88a5bca7bdaba0a4a9aabbe6aba7a5">[email&#160;protected]</span></a>
                                </p>


                        </div>
                </div>
        </div>
    </>
  );
}
