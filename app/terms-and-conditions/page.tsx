import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms and Conditions | mTouch Labs – Digital Solutions & Services",
  description: "Read the Terms and Conditions of mTouch Labs to understand your rights, responsibilities, and our service policies. Stay informed and protected.",
  alternates: {
    canonical: "https://www.mtouchlabs.com/terms-and-conditions",
  },

  openGraph: {
    title: "Terms and Conditions | mTouch Labs – Digital Solutions & Services",
    description: "Read the Terms and Conditions of mTouch Labs to understand your rights, responsibilities, and our service policies. Stay informed and protected.",
    url: "https://www.mtouchlabs.com/terms-and-conditions",
    siteName: "mTouch Labs",
    type: "website",
    images: [{ url: "https://www.mtouchlabs.com/images/web-and-mobile-app-development.png", width: 1200, height: 630, alt: "Terms and Conditions | mTouch Labs – Digital Solutions & Services" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms and Conditions | mTouch Labs – Digital Solutions & Services",
    description: "Read the Terms and Conditions of mTouch Labs to understand your rights, responsibilities, and our service policies. Stay informed and protected.",
    images: ["https://www.mtouchlabs.com/images/web-and-mobile-app-development.png"],
  },
};

export default function Page() {
  return (
    <>
{/* portfolio items */}
	<div className="sec-pad">
		<div className="container">

			<h1><b>Terms and Conditions – mTouch Labs</b></h1>
			&nbsp;
			<p><strong>Effective Date:</strong> 16-07-2025</p>
			<p>Welcome to mTouch Labs. By accessing or using our website, products, or services, you agree to comply
				with the following Terms and Conditions.</p>

			<ul>
				<li><strong>1. Acceptance of Terms</strong>
					<p>By using our services, you agree to be legally bound by these Terms. If you do not agree, please
						do not use our services.</p>
				</li>

				<li><strong>2. Services Overview</strong>
					<p>mTouch Labs offers digital solutions including mobile app development, web development, UI/UX
						design, digital marketing, and more.</p>
				</li>

				<li><strong>3. User Responsibilities</strong>
					<ul className=" ul-list-icon mt10">
						<li>Not to misuse our services</li>
						<li>Not to engage in any activity that disrupts or harms our systems</li>
						<li>To provide accurate and truthful information</li>
					</ul>
				</li>

				<li><strong>4. Intellectual Property</strong>
					<p>All content on our site (text, graphics, logos, software) is the property of mTouch Labs and is
						protected by copyright laws. You may not use, copy, or distribute any material without written
						consent.</p>
				</li>

				<li><strong>5. Payments and Refunds</strong>
					<p>Payment terms will be agreed upon during the project onboarding. Refunds, if applicable, will be
						issued as per the service agreement signed.</p>
				</li>

				<li><strong>6. Limitation of Liability</strong>
					<p>mTouch Labs is not liable for any direct, indirect, or incidental damages arising from your use
						of our services.</p>
				</li>

				<li><strong>7. Termination</strong>
					<p>We reserve the right to terminate or suspend your access to our services if you violate these
						Terms.</p>
				</li>

				<li><strong>8. Governing Law</strong>
					<p>These Terms shall be governed in accordance with the laws of Your Jurisdiction, without regard to
						conflict of law provisions.</p>
				</li>

				<li><strong>9. Modifications</strong>
					<p>We may revise these Terms at any time. Continued use of the services means you accept the updated
						Terms.</p>
				</li>

				<li><strong>10. Contact Us</strong>
					<p>If you have any questions about these Terms, reach out to us:</p>
					<ul className="ul-list-icon mt10">
						<li><strong>Email:</strong> <a href="/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="54373b3a203537201439203b21373c383536277a373b39">[email&#160;protected]</a></li>
						<li><strong>Phone:</strong> +91-9390683154</li>
					</ul>
				</li>
			</ul>
		</div>
	</div>
	{/* portfolio end */}

	{/* start cta */}

	{/* start cta */}
    </>
  );
}
