import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Top Mobile App Development Company in Kuwait - mTouch Labs",
  description: "Looking for mobile app development in Kuwait? Get innovative iOS and Android app solutions tailored to your business.",
  alternates: {
    canonical: "https://www.mtouchlabs.com/top-mobile-app-development-company-in-kuwait",
  },

  openGraph: {
    title: "Top Mobile App Development Company in Kuwait - mTouch Labs",
    description: "Looking for mobile app development in Kuwait? Get innovative iOS and Android app solutions tailored to your business.",
    url: "https://www.mtouchlabs.com/top-mobile-app-development-company-in-kuwait",
    siteName: "mTouch Labs",
    type: "website",
    images: [{ url: "https://www.mtouchlabs.com/images/web-and-mobile-app-development.png", width: 1200, height: 630, alt: "Top Mobile App Development Company in Kuwait - mTouch Labs" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Top Mobile App Development Company in Kuwait - mTouch Labs",
    description: "Looking for mobile app development in Kuwait? Get innovative iOS and Android app solutions tailored to your business.",
    images: ["https://www.mtouchlabs.com/images/web-and-mobile-app-development.png"],
  },
};

export default function Page() {
  return (
    <>
<section className="location_new_hero">
			<img src="/images/location/Kuwait.png" alt="Kuwait" className="location_new_hero_bg" />
			<div className="location_new_container">
				<div className="location_new_hero_content">
					<p className="location_new_hero_text">Top Mobile App Development Company in Kuwait</p>
					<h1 className="location_new_hero_title">
						Best Mobile App Development Company in <span>Kuwait</span>
					</h1>
					<p className="location_new_hero_text">
						mTouch Labs is a leading Mobile App Development Company in Kuwait, building high-quality
						Android, iOS, and hybrid apps for startups and enterprises across multiple industries.
					</p>
					<a href="/contact-us" className="location_new_cta_button">Get a Free Consultation</a>
				</div>
			</div>
		</section>

		{/*  Custom Mobile App Development Services  */}
		<section className="location_new_services">
			<div className="location_new_container">
				{/*  Card 1: Text Left, Image Right  */}
				<div className="location_new_service_card">
					<div className="location_new_service_content">
						<h2>Custom Mobile App Development Services</h2>
						<p>
							We combine innovation, UX/UI excellence, and strong technical skills to deliver scalable
							mobile applications tailored to your business needs. From concept to deployment, we develop
							native and hybrid apps that offer seamless performance and exceptional user experience.
						</p>
					</div>
					<div>
						<img src="/images/serviceImg/customMobile.png" alt="Custom Mobile App Development"
							className="location_new_service_image" />
					</div>
				</div>

				{/*  Card 2: Image Left, Text Right  */}
				<div className="location_new_service_card">
					<div>
						<img src="/images/serviceImg/mobileAppDevelopment.png" alt="Mobile App Development Agency"
							className="location_new_service_image" />
					</div>
					<div className="location_new_service_content">
						<h2>Mobile App <br /> Development Agency</h2>
						<p>
							As a top Mobile App Development Agency in Kuwait, we provide end-to-end services-design,
							development, testing, and launch. Our team builds user-centric, secure, and high-performing
							mobile apps using the latest technologies, ensuring maximum ROI and long-term value.
						</p>
					</div>
				</div>
			</div>
		</section>

		{/*  Mobile App Development Services Grid  */}
		<section className="location_new_dev_services"
			style={{background: "linear-gradient(135deg, #e3f2fd 0%, #f3e5f5 100%)"}}>
			<div className="location_new_container">
				<h2 className="location_new_section_title">Mobile App Development Services</h2>
				<p className="location_new_section_subtitle">
					We offer exceptional Mobile apps development services for various technologies
				</p>

				<div className="location_new_services_grid">
					{/*  Android  */}
					<div className="location_new_service_item">
						<div className="location_new_service_icon_wrapper">
							<img src="/images/serviceImg/android.png" alt="Android App Development"
								className="location_new_service_icon_img" />
						</div>
						<h3>Android App Development</h3>
						<p>
							Our Android app Developers perform deep research and investigation offering proficient
							android application development services
						</p>
					</div>

					{/*  iOS  */}
					<div className="location_new_service_item">
						<div className="location_new_service_icon_wrapper">
							<img src="/images/serviceImg/IOS.png" alt="iOS App Development"
								className="location_new_service_icon_img" />
						</div>
						<h3>iOS App Development</h3>
						<p>
							We offer first-class, impeccable, and dynamic iOS app development that enhances the user
							experience and adds value to your application.
						</p>
					</div>

					{/*  App Testing  */}
					<div className="location_new_service_item">
						<div className="location_new_service_icon_wrapper">
							<img src="/images/serviceImg/apptesting.png" alt="App Testing"
								className="location_new_service_icon_img" />
						</div>
						<h3>App Testing</h3>
						<p>
							mTouchlabs' expert Android testers ensure scalable, reliable, and high-performance apps
							through rigorous UI, compatibility, and stress testing.
						</p>
					</div>

					{/*  Hybrid  */}
					<div className="location_new_service_item">
						<div className="location_new_service_icon_wrapper">
							<img src="/images/serviceImg/hybrid.png" alt="Hybrid App Development"
								className="location_new_service_icon_img" />
						</div>
						<h3>Hybrid</h3>
						<p>
							We offer a complete spectrum of hybrid app development that includes proper implementation
							of mobile technology, technical support, and maintenance.
						</p>
					</div>

					{/*  React Native  */}
					<div className="location_new_service_item">
						<div className="location_new_service_icon_wrapper">
							<img src="/images/serviceImg/native.png" alt="React Native"
								className="location_new_service_icon_img" />
						</div>
						<h3>React Native</h3>
						<p>
							React Native is an open-source framework that uses efficiently to develop native plus
							cross-platform applications working seamlessly on multiple OS
						</p>
					</div>

					{/*  Flutter  */}
					<div className="location_new_service_item">
						<div className="location_new_service_icon_wrapper">
							<img src="/images/serviceImg/Flutter.png" alt="Flutter Development"
								className="location_new_service_icon_img" />
						</div>
						<h3>Flutter Development</h3>
						<p>
							Our Flutter developers use a wide variety of tools and widgets that are great for both
							android and iOS mobile applications
						</p>
					</div>
				</div>
			</div>
		</section>

		<section className="location_new_hero">
			<img src="/images/serviceImg/hire.png" alt="Kuwait" className="location_new_hero_bg" />
			<div className="location_new_container">
				<div className="location_new_hero_content">

					<h1 className="location_new_hero_title">
						Hire the Best
						App Developers in
						Kuwait
					</h1>
					<p className="location_new_hero_text">
						Our Mobile Application Development Company in Kuwait provides
						technical expertise and delivers outstanding Mobile App Development
						Services.
					</p>
					<a href="/contact-us" className="location_new_cta_button">Talk to our experts</a>
				</div>
			</div>
		</section>

		{/*  Tech Stack / AI Models Section  */}
		<section className="location_new_ai_section">
			<div className="location_new_container">
				<h2 className="location_new_ai_title">
					<span style={{color: "#2196f3"}}>Generative AI</span> Models Powering Real-World Use Cases
				</h2>
				<p className="location_new_ai_subtitle">
					Discover the many cybersecurity methods that assist companies in protecting their digital
					infrastructure and
					addressing constantly changing threats.
				</p>

				<div className="location_new_ai_grid">
					{/*  Row 1  */}
					<div className="location_new_ai_card">
						<img src="/images/location/androidStudio.png" alt="Android Studio"
							className="location_new_tech_icon" />
						<span className="location_new_ai_name">Android Studio</span>
					</div>

					<div className="location_new_ai_card">
						<img src="/images/location/realm.png" alt="Realm" className="location_new_tech_icon" />
						<span className="location_new_ai_name">Realm</span>
					</div>

					<div className="location_new_ai_card">
						<img src="/images/location/androidSdk.png" alt="Android SDK" className="location_new_tech_icon" />
						<span className="location_new_ai_name">Android SDK</span>
					</div>

					<div className="location_new_ai_card">
						<img src="/images/location/iconic.png" alt="Ionic" className="location_new_tech_icon" />
						<span className="location_new_ai_name">Ionic</span>
					</div>

					{/*  Row 2  */}
					<div className="location_new_ai_card">
						<img src="/images/location/kotlin.png" alt="Kotlin" className="location_new_tech_icon" />
						<span className="location_new_ai_name">Kotlin</span>
					</div>

					<div className="location_new_ai_card">
						<img src="/images/location/github.png" alt="Github" className="location_new_tech_icon" />
						<span className="location_new_ai_name">Github</span>
					</div>

					<div className="location_new_ai_card">
						
						<img src="/images/location/android.png" alt="Android Auto" className="location_new_tech_icon" />
						<span className="location_new_ai_name">Android Auto</span>
					</div>

					<div className="location_new_ai_card">
						<img src="/images/location/firebase.png" alt="Firebase" className="location_new_tech_icon" />
						<span className="location_new_ai_name">Firebase</span>
					</div>

					{/*  Row 3  */}
					<div className="location_new_ai_card">
						<img src="/images/location/figma.png" alt="Figma" className="location_new_tech_icon" />
						<span className="location_new_ai_name">Figma</span>
					</div>

					<div className="location_new_ai_card">
						<img src="/images/location/adobe.png" alt="AdobeXD" className="location_new_tech_icon" />
						<span className="location_new_ai_name">AdobeXD</span>
					</div>

					<div className="location_new_ai_card">
						<img src="/images/location/mobileApp.png" alt="Mobile App" className="location_new_tech_icon" />
						<span className="location_new_ai_name">Mobile App</span>
					</div>

					<div className="location_new_ai_card">
						<img src="/images/location/web.png" alt="web" className="location_new_tech_icon" />
						<span className="location_new_ai_name">web</span>
					</div>
				</div>
			</div>
		</section>

		{/*  Project CTA Section  */}


		<section className="project-cta-new">
			<div className="container">
				<div className="cta-new-wrapper">
					{/*  Left Column: Image  */}
					<div className="cta-new-image">
						<img src="/images/serviceImg/haveproject.png" alt="Contact Us" />
					</div>

					{/*  Right Column: Text  */}
					<div className="cta-new-content">
						<h2>Have a <strong>Project in</strong><br /><strong>mind ?</strong> <span
								className="highlight-blue">Let's
								chat.</span></h2>
						<p>Have a project in mind? Let's connect, discuss your ideas, and turn them into impactful,
							user-focused solutions.</p>
						<div className="cta-new-btns">
							<a href="/contact-us" className="btn btn-primary cta-btn-blue">
								<i className="fas fa-phone-alt"></i> Contact Us
							</a>
							<a href="https://wa.me/919390683154" target="_blank"
								className="btn btn-outline cta-btn-whatsapp">
								<i className="fab fa-whatsapp"></i> Whatsapp
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	
		<div style={{padding: "6rem 0", marginTop: "6rem", backgroundColor: "rgba(243, 246, 253, 1)"}}>
			<div className="_faq_container">
				<div className="_faq_header">
					<h2 className="_faq_title">Your Questions <span className="_faq_title_highlight">Answered</span> Clearly
					</h2>
					<p className="_faq_subtitle">Everything you need to know about Mtouchlabs</p>
				</div>

				<div className="_faq_list">

					{/*  1  */}
					<div className="_faq_item active glow">
						<button className="_faq_question">
							<span>Why choose mTouch Labs in Kuwait?</span>
							<span className="_faq_icon">+</span>
						</button>
						<div className="_faq_answer">
							<p className="_faq_answer_text">We deliver modern, scalable apps built for Kuwait's business
								needs.</p>
						</div>
					</div>
					{/*  2  */}
					<div className="_faq_item">
						<button className="_faq_question">
							<span>Do you build apps for SMEs in Kuwait?</span>
							<span className="_faq_icon">+</span>
						</button>
						<div className="_faq_answer">
							<p className="_faq_answer_text">Yes, SMEs and enterprises are our key clients.</p>
						</div>
					</div>
					{/*  3  */}
					<div className="_faq_item">
						<button className="_faq_question">
							<span>Can you integrate payment gateways?</span>
							<span className="_faq_icon">+</span>
						</button>
						<div className="_faq_answer">
							<p className="_faq_answer_text">Yes - KNET, wallets, and more.</p>
						</div>
					</div>
					{/*  4  */}
					<div className="_faq_item">
						<button className="_faq_question">
							<span>Do you offer Arabic-enabled apps?</span>
							<span className="_faq_icon">+</span>
						</button>
						<div className="_faq_answer">
							<p className="_faq_answer_text">Yes, full RTL and localization support.</p>
						</div>
					</div>
					{/*  5  */}
					<div className="_faq_item">
						<button className="_faq_question">
							<span>Do you provide support after launch?</span>
							<span className="_faq_icon">+</span>
						</button>
						<div className="_faq_answer">
							<p className="_faq_answer_text">Yes, maintenance and updates included.</p>
						</div>
					</div>
				</div>
			</div>
		</div>
    </>
  );
}
