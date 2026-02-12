import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kohere | B2B Lead Intelligence Platform for Smarter Prospecting & Sales | mTouch Labs",
  description: "Kohere is a B2B lead intelligence platform to discover prospects, decision-makers & company insights. Get AI-driven recommendations, CRM sync, and outreach tools to boost sales and marketing growth.",
};

export default function Page() {
  return (
    <>
{/* page head */}
        <div className="port-head-sec pt85 pb120 r-bg-x">
                <div className="container">
                        <div className="row vcenter pt80">
                                <div className="col-lg-6">
                                        <div className="page-headings">
                                                <span className="sub-heading mb15" data-aos="fade-up" data-aos-delay="200">
                                                        <i className="fas fa-database mr5"></i> Kohere
                                                </span>
                                                <h1 className="mb15" data-aos="fade-up" data-aos-delay="400">
                                                        B2B Lead Intelligence Platform <span className="ree-text rt40"> Web
                                                                + Mobile Applications </span>
                                                </h1>
                                                <p className="h-light" data-aos="fade-up" data-aos-delay="600">
                                                        Discover, connect, and engage with prospects smarter. AI-powered
                                                        recommendations, CRM sync, and verified company & people
                                                        insights.
                                                </p>
                                        </div>
                                </div>
                                <div className="col-lg-6">
                                        <div className="sol-img m-mt30" data-aos="fade-in" data-aos-delay="400">
                                                <img src="/images/portfolio/koheremain.webp"
                                                        alt="Kohere B2B Lead Intelligence Platform" className="img-fluid" />
                                        </div>
                                </div>
                        </div>
                </div>
        </div>
        {/* end page head */}

        {/* about items */}
        <section className="r-bg-a sec-pad">
                <div className="container">
                        <div className="row">
                                <div className="col-lg-6">
                                        <div className="details-port">
                                                <h2 className="mb15">About Kohere</h2>
                                                <p>
                                                        Kohere is a powerful B2B lead intelligence platform designed to
                                                        help businesses discover potential prospects, decision-makers,
                                                        and company insights. Similar to ZoomInfo, it combines
                                                        data-driven lead discovery, AI-powered recommendations, and CRM
                                                        integrations to streamline sales and marketing outreach.
                                                </p>

                                                <h4 className="mt30">The Challenges</h4>
                                                <p>• Difficulty finding accurate and verified contact information.</p>
                                                <p>• Sales teams spending hours manually researching prospects.</p>
                                                <p>• Fragmented data sources making it hard to build reliable lists.</p>
                                                <p>• Lack of seamless CRM integration.</p>
                                                <p>• Missed opportunities due to outdated company and people data.</p>

                                                <h4 className="mt30">The Solution</h4>
                                                <p>Kohere was developed as a centralized B2B intelligence platform that
                                                        addresses these challenges:</p>
                                                <p>✔️ Unified onboarding with personalized preferences.</p>
                                                <p>✔️ Company & people discovery with advanced filters and AI
                                                        recommendations.</p>
                                                <p>✔️ Detailed profiles with funding, org charts, and tech stacks.</p>
                                                <p>✔️ Lead list building with one-click CRM sync.</p>
                                                <p>✔️ Integrated outreach tools (email + calling).</p>
                                                <p>✔️ Notifications for job changes, company news & funding rounds.</p>
                                                <p>✔️ Role-based team management and flexible subscription plans.</p>
                                        </div>
                                </div>

                                <div className="col-lg-6">
                                        <div className="technolo-sec">
                                                <div className="icon-with-title">
                                                        <div className="iwt-icon"><img
                                                                        src="/images/home/tech-logos/react.webp"
                                                                        alt="React" /></div>
                                                        <div className="iwt-content">
                                                                <p>React</p>
                                                        </div>
                                                </div>
                                                <div className="icon-with-title">
                                                        <div className="iwt-icon"><img src="/images/icons/Node.JS.svg"
                                                                        alt="NodeJS" /></div>
                                                        <div className="iwt-content">
                                                                <p>NodeJS</p>
                                                        </div>
                                                </div>

                                                <div className="icon-with-title">
                                                        <div className="iwt-icon"><img src="/images/icons/aws-icon.svg"
                                                                        alt="AWS" /></div>
                                                        <div className="iwt-content">
                                                                <p>AWS</p>
                                                        </div>
                                                </div>

                                        </div>
                                </div>
                        </div>
                </div>
        </section>
        {/* about items end */}

        {/* features */}
        <section className="home-partners-block r-bg-x sec-pad">
                <div className="container">
                        <div className="row justify-content-center">
                                <div className="col-lg-8">
                                        <div className="sec-heading text-center">
                                                <h2 className="mb15"><span className="ree-text rt40">Features of </span> Kohere
                                                        Platform</h2>
                                                <p>The Kohere ecosystem delivers advanced tools for sales, marketing,
                                                        and recruitment teams.</p>
                                        </div>
                                        <ul style={{listStyleType: "circle", lineHeight: 28}}>
                                                <li>
                                                        <h6>Smart Onboarding – Email/LinkedIn/Google sign-up with
                                                                role-based preferences.</h6>
                                                </li>
                                                <li>
                                                        <h6>Company Search – Filter by name, size, revenue, industry,
                                                                tech stack.</h6>
                                                </li>
                                                <li>
                                                        <h6>People Discovery – Find prospects by title, department, or
                                                                decision-making role.</h6>
                                                </li>
                                                <li>
                                                        <h6>Detailed Profiles – Verified contacts, org charts, funding,
                                                                and social links.</h6>
                                                </li>
                                                <li>
                                                        <h6>CRM Sync – One-click integration with Salesforce, HubSpot,
                                                                Zoho & more.</h6>
                                                </li>
                                                <li>
                                                        <h6>Outreach Tools – Email sequences, calling integration.</h6>
                                                </li>
                                                <li>
                                                        <h6>Notifications – Updates on job changes, funding rounds &
                                                                company news.</h6>
                                                </li>
                                                <li>
                                                        <h6>Analytics Dashboard – Search tracking, list performance &
                                                                engagement insights.</h6>
                                                </li>
                                        </ul>
                                </div>
                        </div>
                </div>
        </section>
        {/* features end */}

        {/* typo & branding */}
        <section className="home-partners-block r-bg-c sec-pad">
                <div className="container">
                        <div className="row">
                                <div className="col-lg-8">
                                        <h5>Typography & Branding</h5>
                                        <div className="typo-set mt60">
                                                <div className="typo-head">
                                                        <h2>Aa</h2>
                                                        <p>Poppins / Inter <span>Modern & Corporate</span></p>
                                                </div>
                                        </div>
                                        <div className="heading-paragrapph mt60">
                                                <h3 className="mb20">Clean & Professional UI</h3>
                                                <p>
                                                        Kohere follows a business-focused design system with
                                                        Poppins/Inter typography, ensuring a professional, modern, and
                                                        data-driven interface for enterprise users.
                                                </p>
                                        </div>
                                </div>
                                <div className="col-lg-4">
                                        <div className="color-palette">
                                                <h5>Color Palette</h5>
                                                <div className="media mt60">
                                                        <div className="color-box1" style={{background: "#004E89"}}></div>
                                                        <div className="color-detailss">
                                                                <h6>Business Blue</h6>
                                                                <p>#004E89</p>
                                                        </div>
                                                </div>
                                                <div className="media mt30">
                                                        <div className="color-box1" style={{background: "#2AA876"}}></div>
                                                        <div className="color-detailss">
                                                                <h6>Growth Green</h6>
                                                                <p>#2AA876</p>
                                                        </div>
                                                </div>
                                                <div className="media mt30">
                                                        <div className="color-box1" style={{background: "#F4F4F4"}}></div>
                                                        <div className="color-detailss">
                                                                <h6>Neutral Gray</h6>
                                                                <p>#F4F4F4</p>
                                                        </div>
                                                </div>
                                                <div className="media mt30">
                                                        <div className="color-box1"
                                                                style={{background: "#FFFFFF", border: "1px solid #ddd"}}>
                                                        </div>
                                                        <div className="color-detailss">
                                                                <h6>White</h6>
                                                                <p>#FFFFFF</p>
                                                        </div>
                                                </div>
                                        </div>
                                </div>
                        </div>
                </div>
        </section>
        {/* typo end */}

        {/* website screens */}
        <section className="home-partners-block r-bg-x sec-pad">
                <div className="container">
                        <div className="row justify-content-center">
                                <div className="col-lg-8">
                                        <div className="sec-heading text-center">
                                                <h3 className="mb15"><span className="ree-text rt40">Website</span> Screens</h3>
                                                <p>Check out Kohere’s web platform for advanced lead discovery &
                                                        intelligence.</p>
                                        </div>
                                </div>
                        </div>
                        <div className="app-screenss owl-carousel mt70 dottss">
                                <div className="appscreen">
                                        <div className="itme-img"><img src="/images/portfolio/kohere1.png" alt="Landing Page"
                                                        className="img-fluid" /></div>
                                </div>
                                <div className="appscreen">
                                        <div className="itme-img"><img src="/images/portfolio/kohere2.png"
                                                        alt="Company Directory" className="img-fluid" /></div>
                                </div>
                                <div className="appscreen">
                                        <div className="itme-img"><img src="/images/portfolio/kohere3.png"
                                                        alt="People Profiles" className="img-fluid" /></div>
                                </div>
                                <div className="appscreen">
                                        <div className="itme-img"><img src="/images/portfolio/kohere4.png"
                                                        alt="Insights Dashboard" className="img-fluid" /></div>
                                </div>
                                <div className="appscreen">
                                        <div className="itme-img"><img src="/images/portfolio/kohere5.png"
                                                        alt="Insights Dashboard" className="img-fluid" /></div>
                                </div>
                                <div className="appscreen">
                                        <div className="itme-img"><img src="/images/portfolio/kohere6.png"
                                                        alt="Insights Dashboard" className="img-fluid" /></div>
                                </div>

                        </div>
                </div>
        </section>

        {/* needs and solution */}
        <section className="r-bg-a sec-pad">
                <div className="container">
                        <div className="row">
                                <div className="col-lg-6">
                                        <h3>Core Features</h3>
                                        <p><b>1. Smart Prospecting</b> – Discover companies & decision-makers with
                                                filters.</p>
                                        <p><b>2. AI Recommendations</b> – Get instant lead suggestions.</p>
                                        <p><b>3. CRM Sync</b> – Direct integration with Salesforce, HubSpot, Zoho.</p>
                                        <p><b>4. Outreach Tools</b> – Emails, calls & sequences inside platform.</p>
                                        <p><b>5. Market Intelligence</b> – Stay updated with funding, acquisitions & job
                                                changes.</p>
                                </div>
                                <div className="col-lg-6 m-mt30">
                                        <h3>Business-Centric Solutions</h3>
                                        <p><b>Sales Teams</b> → Faster lead discovery & targeted prospecting.</p>
                                        <p><b>Marketing Teams</b> → Build accurate audiences for campaigns.</p>
                                        <p><b>Recruiters</b> → Discover talent & decision-makers.</p>
                                        <p><b>Enterprises</b> → API access for scalable lead intelligence.</p>
                                </div>
                        </div>
                        <div className="row justify-content-center mt60">
                                <div className="col-lg-6">
                                        <div className="center-btn big-txt">
                                                <a href="/hitech-shuttle-bus-management-platform"
                                                        className="ree-btn ree-btn-grdt2"><i
                                                                className="fas fa-arrow-left fa-btn mr5"></i> Previous
                                                        Project </a>
                                                <a href="/app-and-web-development-for-ecommerce-services"
                                                        className="ree-btn ree-btn-grdt2"> Next Project <i
                                                                className="fas fa-arrow-right fa-btn"></i></a>
                                        </div>
                                </div>
                        </div>
                </div>
        </section>
        {/* needs and solution end */}
    </>
  );
}
