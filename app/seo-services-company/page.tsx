import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SEO Services Company | mTouch Labs",
  description: "mTouch Labs delivers strategic SEO services to improve search rankings, increase organic traffic, and boost online visibility.",
};

export default function Page() {
  return (
    <>
<section className="AIservices-banner" data-bg="/images/new_services/seobg.webp">
		<div className="AIservices-banner-container">
			{/*  Left Content  */}
			<div className="AIservices-banner-content">

				{/*  Breadcrumb  */}
				<div className="AIservices-breadcrumb">
					&nbsp;<a href="/">Home &nbsp;</a>
					<span className="AIservices-separator">/</span>
					&nbsp; <a href="/services">Services &nbsp;</a>
					<span className="AIservices-separator">/</span>
					&nbsp; <a className="active"> SEO Services
						Company</a>
				</div>

				<p className="AIservices-description" id="mobile-AIservices-description"> Best <span
						style={{color: "#6485d6"}}>SEO services</span> Company In Hyderabad
				</p>
				<h1 className="AIservices-title" id="mobile-AIservices-title">Leading <br /> <span style={{color: "#6485d6"}}>SEO
						Company </span> in Hyderabad</h1>
				<p className="AIservices-description" id="mobile-AIservices-description">
					mTouch Labs is a result-driven SEO agency that helps businesses boost traffic, visibility, and
					rankings with tailored local to enterprise SEO strategies that drive revenue.
				</p>
			</div>

			{/*  Right Side Image  */}
			{/*  <div className="AIservices-banner-image">
      <img src="/images/new_services/seo_hero.png" alt="SEO Services in India" />
    </div>  */}
		</div>
	</section>

	{/*  🟪 Service Highlights  */}
	<section className="AIservices-info-section">
		<div className="AIservices-info-card">
			<div className="AIservices-info-card-height">
				<h2>Top SEO Services in Hyderabad</h2>
				<p>
					We offer comprehensive SEO services that deliver increased traffic, higher search engine rankings,
					and stronger brand visibility.
				</p>
			</div>
			<a href="/contact-us" target="_blank">
				<button className="AIservices-btn">Let’s Discuss</button>
			</a>
		</div>
		<div className="AIservices-info-card">
			<div className="AIservices-info-card-height">
				<h2>Customized SEO Strategies for Your Business</h2>
				<p>
					Whether you’re a startup or a large enterprise, our tailored SEO campaigns target your audience and
					drive measurable growth.
				</p>
			</div>
			<a href="/contact-us" target="_blank">
				<button className="AIservices-btn">Talk to an Expert</button>
			</a>
		</div>
	</section>

	{/*  🟨 Main Section Title  */}
	<section className="AIservices-process-section">
		<h2 className="AIservices-process-title">Rank Higher. Grow Faster. Optimize with mTouch Labs</h2>

		<div className="AIservices-process-container">
			{/*  Step 1  */}
			<div className="AIservices-process-item">
				<div className="AIservices-process-text">
					<h3>SEO Audit & Website Analysis</h3>
					<p>We start with a comprehensive audit—analyzing technical structure, page content, backlinks,
						loading speed, and other ranking factors.</p>
				</div>
				<div className="AIservices-process-image1">
					<img src="/images/new_services/planning.png" alt="SEO Audit & Website Analysis" />
				</div>
			</div>

			{/*  Step 2  */}
			<div className="AIservices-process-item reverse">
				<div className="AIservices-process-text">
					<h3>Keyword Research & Competitor Analysis</h3>
					<p>We identify high-value keywords and evaluate your competition to find opportunities for ranking
						and visibility.</p>
				</div>
				<div className="AIservices-process-image">
					<img src="/images/new_services/post-launch.png" alt="Keyword Research and Competitor Analysis" />
				</div>
			</div>

			{/*  Step 3  */}
			<div className="AIservices-process-item">
				<div className="AIservices-process-text">
					<h3>On-Page SEO Optimization</h3>
					<p>From metadata to content formatting and internal linking, we optimize every element for search
						engine visibility and user experience.</p>
				</div>
				<div className="AIservices-process-image1">
					<img src="/images/new_services/development.png" alt="On-Page SEO Optimization" />
				</div>
			</div>

			{/*  Step 4  */}
			<div className="AIservices-process-item reverse">
				<div className="AIservices-process-text">
					<h3>Technical SEO & Mobile Optimization</h3>
					<p>We improve core vitals, site speed, mobile responsiveness, and crawlability for better indexing
						and ranking performance.</p>
				</div>
				<div className="AIservices-process-image">
					<img src="/images/new_services/testing.png" alt="Technical and Mobile SEO" />
				</div>
			</div>

			{/*  Step 5  */}
			<div className="AIservices-process-item">
				<div className="AIservices-process-text">
					<h3>Off-Page SEO & Link Building</h3>
					<p>We use ethical backlink strategies to build domain authority and improve trust signals across
						search engines.</p>
				</div>
				<div className="AIservices-process-image1">
					<img src="/images/new_services/launch.png" alt="Link Building and Off-Page SEO" />
				</div>
			</div>

			{/*  Step 6  */}
			<div className="AIservices-process-item reverse">
				<div className="AIservices-process-text">
					<h3>Performance Tracking & Reporting</h3>
					<p>Our monthly SEO reports track traffic, rankings, CTR, and conversions—so you always know your
						ROI.</p>
				</div>
				<div className="AIservices-process-image">
					<img src="/images/new_services/development.png" alt="SEO Reporting and Monitoring" />
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
							<img src="/images/home/tech/medbuz.png" alt="CleanServe India Logo" />
						</div>
					</div>
					<div className="Aiservices-testimonial-text">
						<div className="Aiservices-rating">
							<img src="/images/new_services/doublequotes.png" className="doublequotes_img" alt="Quotes" />
						</div>
						<p className="Aiservices-testimonial-quote">
							"After working with mTouch Labs, our local search traffic doubled, and we started getting
							daily inquiries through Google.
							Their SEO strategy delivered more than promised!"
							— Kavya S., Marketing Manager
						</p>
						<div className="Aiservices-testimonial-author">
							<span><a href="/seo-services" target="_blank">Explore →</a></span>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>

	{/* Industries */}

	{/* Industries end */}

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
									<span className="accordion-title">What SEO services does mTouch provide to improve
										online visibility?</span>
									<span className="icon" aria-hidden={true}></span>
								</button>
								<div className="accordion-content">
									<p>
										mTouch offers comprehensive SEO services including keyword research, on‑page
										optimization, technical SEO, content strategy, and link building to help
										businesses rank higher in search results and attract targeted organic traffic.
									</p>
								</div>
							</div>
							<div className="accordion-item">
								<button id="accordion-button-2" aria-expanded={false}>
									<span className="accordion-title">How does mTouch approach SEO strategy for different
										businesses?</span>
									<span className="icon" aria-hidden={true}></span>
								</button>
								<div className="accordion-content">
									<p>
										mTouch analyzes your industry, competitors, and audience intent to create a
										customized SEO strategy. This includes optimizing website structure, improving
										content relevance, fixing technical issues, and tracking performance for
										sustained growth.
									</p>
								</div>
							</div>
							<div className="accordion-item">
								<button id="accordion-button-3" aria-expanded={false}>
									<span className="accordion-title">Why is SEO important for business growth?</span>
									<span className="icon" aria-hidden={true}></span>
								</button>
								<div className="accordion-content">
									<p>
										SEO helps businesses increase visibility in search engines, drive quality
										organic traffic, build brand authority, improve user engagement, and boost
										conversions—all of which support long‑term growth and measurable ROI.
									</p>
								</div>
							</div>
							<div className="accordion-item">
								<button id="accordion-button-4" aria-expanded={false}>
									<span className="accordion-title">How long does it take to see results from SEO
										services?</span>
									<span className="icon" aria-hidden={true}></span>
								</button>
								<div className="accordion-content">
									<p>
										SEO results vary based on industry, competition, and the current website
										condition. Typically, improvements in rankings and traffic can be seen within a
										few months, with stronger long‑term results over time.
									</p>
								</div>
							</div>
							<div className="accordion-item">
								<button id="accordion-button-5" aria-expanded={false}>
									<span className="accordion-title">What tools and techniques are used in modern
										SEO?</span>
									<span className="icon" aria-hidden={true}></span>
								</button>
								<div className="accordion-content">
									<p>
										Modern SEO uses tools for keyword analysis, rank tracking, site audits, and
										performance monitoring. Techniques include schema markup, mobile optimization,
										content optimization, internal linking, and improving page speed for better
										rankings.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/*  <div className="col-lg-6 vcenter text-center">
						<div className="sol-img-png"> <img src="/images/cta/Mobile-app-developers.svg" alt="app" className="img-fluid" />	</div>
					</div>  */}
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
							<a href="/contact-us" className="ree-btn  ree-btn-grdt1  mt40 mr20">
								<i className="fas fa-user fb-bigon"></i>Contact </a>
							<a href="https://wa.me/message/H5VADFWLMPYIM1" target="_blank"
								className="ree-btn  whatsapp-bg mt40 shadows"><i className="fab fa-whatsapp fb-bigon"></i>
								Whatsapp </a>

						</div>
					</div>
					<div className="col-lg-6 vcenter text-center">
						<div className="sol-img-png">
							<img src="/images/cta/Let's-get-to-chat-SEO.svg" alt="Best SEO Company in India"
								className="img-fluid" />
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
