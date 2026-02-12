import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "PPC Management Services Company | mTouch Labs",
  description: "mTouch Labs is a PPC management services company offering pay-per-click campaigns, optimized ad strategies, and performance-driven results to boost ROI.",
};

export default function Page() {
  return (
    <>
<section className="AIservices-banner" data-bg="/images/new_services/ppcbg.webp">
		<div className="AIservices-banner-container">
			{/*  Left Content  */}
			<div className="AIservices-banner-content">

				{/*  Breadcrumb  */}
				<div className="AIservices-breadcrumb">
					&nbsp;<a href="/">Home &nbsp;</a>
					<span className="AIservices-separator">/</span>
					&nbsp; <a href="/services">Services &nbsp;</a>
					<span className="AIservices-separator">/</span>
					&nbsp; <a className="active"> PPC Management Services
						Company</a>
				</div>

				<p className="AIservices-description" id="mobile-AIservices-description"> Best <span style={{color: "#75a1ff"}}>
						PPC Management Services </span> in Hyderabad
				</p>

				<h1 className="AIservices-title" id="mobile-AIservices-title"><span style={{color: "#75a1ff"}}>PPC Management
						Services </span> Company </h1>
				<p className="AIservices-description" id="mobile-AIservices-description">
					mTouch Labs drives instant traffic, leads, and sales with result-focused PPC campaigns. From Google
					Ads to Facebook and YouTube, we deliver tailored strategies for business growth.
				</p>
			</div>

			{/*  Right Side Image  */}
			{/*  <div className="AIservices-banner-image">
      <img src="/images/new_services/ppc_hero.png" alt="PPC Services in India" />
    </div>  */}
		</div>
	</section>

	{/*  🟪 Service Highlights  */}
	<section className="AIservices-info-section">
		<div className="AIservices-info-card">
			<div className="AIservices-info-card-height">
				<h2>Best PPC Services in Hyderabad</h2>
				<p>
					Our expert-managed PPC services deliver fast results, optimized ad spend, and high-quality traffic
					for maximum ROI.
				</p>
			</div>
			<a href="/contact-us" target="_blank">
				<button className="AIservices-btn">Let’s Discuss</button>
			</a>
		</div>
		<div className="AIservices-info-card">
			<div className="AIservices-info-card-height">
				<h2>Certified Google Ads & Paid Media Experts</h2>
				<p>
					As a leading PPC agency in India, we create strategic campaigns across Google, YouTube, and social
					platforms to convert users into customers.
				</p>
			</div>
			<a href="/contact-us" target="_blank">
				<button className="AIservices-btn">Talk to an Expert</button>
			</a>
		</div>
	</section>

	{/*  🟨 Main Section Title  */}
	<section className="AIservices-process-section">
		<h2 className="AIservices-process-title">Drive Traffic & Boost Conversions with Smart PPC Campaigns</h2>

		<div className="AIservices-process-container">
			{/*  Step 1  */}
			<div className="AIservices-process-item">
				<div className="AIservices-process-text">
					<h3>Keyword & Audience Research</h3>
					<p>We begin with strategic keyword planning, competitive analysis, and target audience segmentation
						to set the foundation.</p>
				</div>
				<div className="AIservices-process-image1">
					<img src="/images/new_services/planning.png" alt="Keyword & Audience Research" />
				</div>
			</div>

			{/*  Step 2  */}
			<div className="AIservices-process-item reverse">
				<div className="AIservices-process-text">
					<h3>Ad Copy & Creative Design</h3>
					<p>Our team writes compelling ad copy and visuals that match user intent, boost clicks, and improve
						Quality Scores.</p>
				</div>
				<div className="AIservices-process-image">
					<img src="/images/new_services/development.png" alt="Ad Copy and Creative Design" />
				</div>
			</div>

			{/*  Step 3  */}
			<div className="AIservices-process-item">
				<div className="AIservices-process-text">
					<h3>Campaign Setup & Targeting</h3>
					<p>We build PPC campaigns with detailed targeting options across networks like Google Search,
						Display, YouTube & Meta Ads.</p>
				</div>
				<div className="AIservices-process-image1">
					<img src="/images/new_services/post-launch.png" alt="Campaign Setup and Targeting" />
				</div>
			</div>

			{/*  Step 4  */}
			<div className="AIservices-process-item reverse">
				<div className="AIservices-process-text">
					<h3>Budget & Bid Management</h3>
					<p>Our PPC experts fine-tune bidding strategies to get the best cost-per-click and maximize return
						on ad spend.</p>
				</div>
				<div className="AIservices-process-image">
					<img src="/images/new_services/launch.png" alt="Budget and Bid Management" />
				</div>
			</div>

			{/*  Step 5  */}
			<div className="AIservices-process-item">
				<div className="AIservices-process-text">
					<h3>Conversion Tracking & Optimization</h3>
					<p>We set up conversion goals, monitor click-through rates, and continually optimize for better lead
						generation.</p>
				</div>
				<div className="AIservices-process-image1">
					<img src="/images/new_services/testing.png" alt="Conversion Tracking and Optimization" />
				</div>
			</div>

			{/*  Step 6  */}
			<div className="AIservices-process-item reverse">
				<div className="AIservices-process-text">
					<h3>Detailed Reporting & Analysis</h3>
					<p>Transparent reporting helps you see ad performance, conversions, CPC, CTR, and real-time ROI
						metrics.</p>
				</div>
				<div className="AIservices-process-image">
					<img src="/images/new_services/development.png" alt="Reporting and Analysis" />
				</div>
			</div>
		</div>
	</section>

	{/*  🟩 Testimonial Section  */}
	<section className="Aiservices-testimonials">
		<div className="Aiservices-container">
			<h2 className="Aiservices-testimonials-title">Customer Success Story</h2>
			<div className="Aiservices-testimonial-card">
				<div className="Aiservices-testimonial-content">
					<div className="Aiservices-company-logo-container">
						<div className="Aiservices-company-logo-div">
							<img src="/images/home/tech/agrigain.png" alt="StyleCraft Logo" />
						</div>
					</div>
					<div className="Aiservices-testimonial-text">
						<div className="Aiservices-rating">
							<img src="/images/new_services/doublequotes.png" className="doublequotes_img" alt="Quotes" />
						</div>
						<p className="Aiservices-testimonial-quote">
							"mTouch Labs helped us scale from zero to 300+ sales/day using targeted Google Shopping and
							Facebook remarketing ads.
							We achieved 6.5x ROAS within two months!"
							— Rohit K., Founder
						</p>
						<div className="Aiservices-testimonial-author">
							<span><a href="/ppc-services" target="_blank">Explore →</a></span>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>

	{/* -our work flow */}
	<section className="r-bg-x sec-pad">
		<div className="container">
			<div className="row justify-content-center">
				<div className="col-lg-7 text-center">
					<div className="page-headings">
						<h3>Frequently Asked Questions</h3>
						&nbsp;
						<div className="accordion">

							<div className="accordion-item">
								<button id="accordion-button-1" aria-expanded={false}>
									<span className="accordion-title">What are PPC management services and how do they help
										businesses?</span>
									<span className="icon" aria-hidden={true}></span>
								</button>
								<div className="accordion-content">
									<p>
										PPC (Pay‑Per‑Click) management services involve creating, optimizing,
										andmonitoring paid advertising campaigns to drive targeted traffic, increase
										visibility, and generate measurable leads and conversions.
									</p>
								</div>
							</div>

							<div className="accordion-item">
								<button id="accordion-button-2" aria-expanded={false}>
									<span className="accordion-title">How does mTouch Labs manage PPC campaigns for better
										ROI?</span>
									<span className="icon" aria-hidden={true}></span>
								</button>
								<div className="accordion-content">
									<p>
										mTouch Labs conducts keyword research, audience segmentation, ad copy creation,
										bid optimization, and performance tracking to ensure campaigns deliver higher
										click‑through rates, lower cost‑per‑click, and improved return on investment.
									</p>
								</div>
							</div>

							<div className="accordion-item">
								<button id="accordion-button-3" aria-expanded={false}>
									<span className="accordion-title">Why should businesses choose mTouch Labs for PPC
										management services?</span>
									<span className="icon" aria-hidden={true}></span>
								</button>
								<div className="accordion-content">
									<p>
										mTouch Labs provides tailored PPC strategies, continuous campaign monitoring,
										and data-driven optimization to help businesses reach the right audience,
										maximize ad performance, and achieve measurable results.
									</p>
								</div>
							</div>

							<div className="accordion-item">
								<button id="accordion-button-4" aria-expanded={false}>
									<span className="accordion-title">Which advertising platforms can mTouch Labs handle for
										PPC campaigns?</span>
									<span className="icon" aria-hidden={true}></span>
								</button>
								<div className="accordion-content">
									<p>
										mTouch Labs manages PPC campaigns across platforms like Google Ads, Bing Ads,
										YouTube ads, and social media channels including Facebook, Instagram, LinkedIn,
										and Twitter to ensure wide reach and targeted engagement.
									</p>
								</div>
							</div>

							<div className="accordion-item">
								<button id="accordion-button-5" aria-expanded={false}>
									<span className="accordion-title">How long does it take to see results from PPC
										campaigns managed by mTouch Labs?</span>
									<span className="icon" aria-hidden={true}></span>
								</button>
								<div className="accordion-content">
									<p>
										Paid campaigns can generate traffic and leads immediately, but optimal results
										are achieved after ongoing monitoring, testing, and refinement over several
										weeks for maximum ROI.
									</p>
								</div>
							</div>

						</div>
					</div>
				</div>
			</div>
		</div>
	</section>

	{/* start cta */}
	<section className="sec-pad r-bg-a">
		<div className="container">
			<div className="ree">
				<div className="row">
					<div className="col-lg-6 vcenter">
						<div className="cta-heading">
							<span className="sub-heading mb15">Contact Us</span>
							<h3>Have a <span className="ree-text rt40">project</span> in mind? Let's get to chat.</h3>
							<a href="/contact-us" className="ree-btn  ree-btn-grdt1  mt40 mr20"><i
									className="fas fa-user fb-bigon"></i> Contact </a>
							<a href="https://wa.me/message/H5VADFWLMPYIM1" target="_blank"
								className="ree-btn  whatsapp-bg mt40 shadows"><i className="fab fa-whatsapp fb-bigon"></i>
								Whatsapp </a>

						</div>
					</div>
					<div className="col-lg-6 vcenter text-center">
						<div className="sol-img-png">
							<img src="/images/cta/let's-get-to-chat-PPC.svg"
								alt="PPC advertising and PPC management services" className="img-fluid" />
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
	{/* end cta */}
    </>
  );
}
