import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers | mTouch Labs",
  description: "Join our team and build the future of technology.",
};

export default function Page() {
  return (
    <>
      <div className="modal-overlay hide" id="careerformModal">

    </div>
    

    <div>
        <section className="careers-hero">
            <div className="careers-hero-content" style={{"alignSelf": "center"}}>
                <h1 style={{"color": "white"}}>Grow Your Career in Web & Mobile App Development</h1>
                <p style={{"color": "white"}}>Looking for a rewarding career in web and mobile app development? Explore
                    opportunities to work with
                    industry leaders, advanced technologies, and global projects that challenge and inspire you.</p>
                <div className="careers-hero-buttons">
                    <button className="careers-apply-btn-section">Apply Now</button>
                    
                </div>
            </div>
            <div className="careers-hero-img">
                
            </div>
        </section>

        <div className="careers-hero-findjob">
            <div>
                <h2>Explore Exciting Career Opportunities <br /> Across Various Industries
                </h2>
            </div>
            
        </div>
        

        <div className="career-container">
            <div id="jobCarousel" className="carousel slide" data-ride="carousel" style={{"borderRadius": "10px"}}>
                

                <ol className="carousel-indicators carousel-indicators_two">
                    <li data-target="#jobCarousel" data-slide-to="0" className="active"></li>
                    <li data-target="#jobCarousel" data-slide-to="1"></li>
                </ol>

                
                <div className="carousel-inner">
                    
                    <div className="carousel-item active">
                        <div className="d-flex justify-content-center align-items-start flex-wrap" style={{"width": "100%", "margin": "auto", "marginBottom": "30px"}}>

                            <section className="careers-jobs">
                                <div className="careers-job-cards">
                                    
                                    <div className="careers-job-card" id="job-card-2">
                                        <div className="careers-job">
                                            <div className="careers-job-img">
                                                <img src="/images/favicon.png" className="careers-job-card-icon" />
                                            </div>
                                            <div>
                                                <div className="careers-job-content">
                                                    <span className="careers-job-role">
                                                        <p>Business Development Manager</p>
                                                    </span>
                                                    <span className="careers-job-exp">
                                                        <p>5-10 Years Exp</p>
                                                    </span>
                                                    <div className="careers-location">
                                                        <i className="fas fa-map-marker-alt"></i> Hyderabad
                                                    </div>
                                                </div>
                                                <span className="careers-apply-btn">Apply
                                                    Now</span>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="careers-job-card" id="job-card-4">
                                        <div className="careers-job">
                                            <div className="careers-job-img">
                                                <img src="/images/favicon.png" className="careers-job-card-icon" />
                                            </div>
                                            <div>
                                                <div className="careers-job-content">
                                                    <span className="careers-job-role">
                                                        <p>Next JS Developer</p>
                                                    </span>
                                                    <span className="careers-job-exp">
                                                        <p>4-5 Years Exp</p>
                                                    </span>
                                                    <div className="careers-location">
                                                        <i className="fas fa-map-marker-alt"></i> Hyderabad
                                                    </div>
                                                </div>
                                                <span className="careers-apply-btn">Apply
                                                    Now</span>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="careers-job-card" id="job-card-9">
                                        <div className="careers-job">
                                            <div className="careers-job-img">
                                                <img src="/images/favicon.png" className="careers-job-card-icon" />
                                            </div>
                                            <div>
                                                <div className="careers-job-content">
                                                    <span className="careers-job-role">
                                                        <p>Project Management</p>
                                                    </span>
                                                    <span className="careers-job-exp">
                                                        <p>4-6 Years Exp</p>
                                                    </span>
                                                    <div className="careers-location">
                                                        <i className="fas fa-map-marker-alt"></i> Hyderabad
                                                    </div>
                                                </div>
                                                <span className="careers-apply-btn">Apply
                                                    Now</span>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="careers-job-card" id="job-card-1">
                                        <div className="careers-job">
                                            <div className="careers-job-img">
                                                <img src="/images/favicon.png" className="careers-job-card-icon" />
                                            </div>
                                            <div>
                                                <div className="careers-job-content">
                                                    <span className="careers-job-role">
                                                        <p>Digital Marketing Manager</p>
                                                    </span>
                                                    <span className="careers-job-exp">
                                                        <p>4-5 Years Exp</p>
                                                    </span>
                                                    <div className="careers-location">
                                                        <i className="fas fa-map-marker-alt"></i> Hyderabad
                                                    </div>
                                                </div>
                                                <span className="careers-apply-btn">Apply
                                                    Now</span>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="careers-job-card" id="job-card-6">
                                        <div className="careers-job">
                                            <div className="careers-job-img">
                                                <img src="/images/favicon.png" className="careers-job-card-icon" />
                                            </div>
                                            <div>
                                                <div className="careers-job-content">
                                                    <span className="careers-job-role">
                                                        <p>Flutter Developer</p>
                                                    </span>
                                                    <span className="careers-job-exp">
                                                        <p>1+ Years Exp</p>
                                                    </span>
                                                    <div className="careers-location">
                                                        <i className="fas fa-map-marker-alt"></i> Hyderabad
                                                    </div>
                                                </div>
                                                <span className="careers-apply-btn">Apply
                                                    Now</span>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="careers-job-card" id="job-card-7">
                                        <div className="careers-job">
                                            <div className="careers-job-img">
                                                <img src="/images/favicon.png" className="careers-job-card-icon" />
                                            </div>
                                            <div>
                                                <div className="careers-job-content">
                                                    <span className="careers-job-role">
                                                        <p>Full Stack Developer</p>
                                                    </span>
                                                    <span className="careers-job-exp">
                                                        <p>1-3 Years Exp</p>
                                                    </span>
                                                    <div className="careers-location">
                                                        <i className="fas fa-map-marker-alt"></i> Hyderabad
                                                    </div>
                                                </div>
                                                <span className="careers-apply-btn">Apply
                                                    Now</span>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </section>
                        </div>
                    </div>

                    
                    <div className="carousel-item">
                        <div className="d-flex justify-content-center align-items-start flex-wrap" style={{"width": "100%", "margin": "auto", "marginBottom": "30px"}}>

                            <section className="careers-jobs">
                                <div className="careers-job-cards">
                                    

                                    <div className="careers-job-card" id="job-card-3">
                                        <div className="careers-job">
                                            <div className="careers-job-img">
                                                <img src="/images/favicon.png" className="careers-job-card-icon" />
                                            </div>
                                            <div>
                                                <div className="careers-job-content">
                                                    <span className="careers-job-role">
                                                        <p>Manual Tester</p>
                                                    </span>
                                                    <span className="careers-job-exp">
                                                        <p>0-1 Years Exp</p>
                                                    </span>
                                                    <div className="careers-location">
                                                        <i className="fas fa-map-marker-alt"></i> Hyderabad
                                                    </div>
                                                </div>
                                                <span className="careers-apply-btn">Apply
                                                    Now</span>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="careers-job-card" id="job-card-5">
                                        <div className="careers-job">
                                            <div className="careers-job-img">
                                                <img src="/images/favicon.png" className="careers-job-card-icon" />
                                            </div>
                                            <div>
                                                <div className="careers-job-content">
                                                    <span className="careers-job-role">
                                                        <p>React JS Developer</p>
                                                    </span>
                                                    <span className="careers-job-exp">
                                                        <p>1-3 Years Exp</p>
                                                    </span>
                                                    <div className="careers-location">
                                                        <i className="fas fa-map-marker-alt"></i> Hyderabad
                                                    </div>
                                                </div>
                                                <span className="careers-apply-btn">Apply
                                                    Now</span>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="careers-job-card" id="job-card-8">
                                        <div className="careers-job">
                                            <div className="careers-job-img">
                                                <img src="/images/favicon.png" className="careers-job-card-icon" />
                                            </div>
                                            <div>
                                                <div className="careers-job-content">
                                                    <span className="careers-job-role">
                                                        <p>UI / UX Designer</p>
                                                    </span>
                                                    <span className="careers-job-exp">
                                                        <p>1-3 Years Exp</p>
                                                    </span>
                                                    <div className="careers-location">
                                                        <i className="fas fa-map-marker-alt"></i> Hyderabad
                                                    </div>
                                                </div>
                                                <span className="careers-apply-btn">Apply
                                                    Now</span>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="careers-job-card" id="job-card-10">
                                        <div className="careers-job">
                                            <div className="careers-job-img">
                                                <img src="/images/favicon.png" className="careers-job-card-icon" />
                                            </div>
                                            <div>
                                                <div className="careers-job-content">
                                                    <span className="careers-job-role">
                                                        <p>Node JS Developer</p>
                                                    </span>
                                                    <span className="careers-job-exp">
                                                        <p>4-5 Years Exp</p>
                                                    </span>
                                                    <div className="careers-location">
                                                        <i className="fas fa-map-marker-alt"></i> Hyderabad
                                                    </div>
                                                </div>
                                                <span className="careers-apply-btn">Apply
                                                    Now</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>

                        </div>
                    </div>
                </div>

                
                
            </div>
        </div>

        <div className="careers-stats-main">
            <h3 className="careers-stats-main-heading">
                Our Achievements Reflect <br /> Our Commitment to Excellence
            </h3>

            <section className="careers-stats">
                <div className="careers-stat">
                    <h3 className="yearsOfExcellence">12</h3>
                    <p>Years of Excellence</p>
                </div>
                <div className="careers-stat">
                    <h3>70+</h3>
                    <p>Tech Experts</p>
                </div>
                <div className="careers-stat">
                    <h3>4k</h3>
                    <p>Achievements</p>
                </div>
                <div className="careers-stat">
                    <h3>30+</h3>
                    <p>Industries Covered</p>
                </div>
            </section>

        </div>

        

        
        <div className="careers-how">
            
            <div className="careers-text">
                <h4>How it Works</h4>
                <h2>Start Your Career in Just <br /> a Few Simple Steps</h2>
                <p className="description">Take the next step in your professional journey with a quick and seamless
                    application process. </p>

                <div className="careers-step">
                    <span className="icon"><img src="/images/career/icon1.png" className="career-how-it-icon" /></span>
                    <div>
                        <h3>Complete Your Profile</h3>
                        <p>Upload your resume or create a professional<br /> profile in just a few minutes.
                        </p>
                    </div>
                </div>

                <div className="careers-step">
                    <span className="icon"><img src="/images/career/icon2.png" className="career-how-it-icon" /></span>
                    <div>
                        <h3>Explore Career Opportunities</h3>
                        <p>Browse job openings across various industries<br /> and find the perfect role that matches your
                            skills.
                        </p>
                    </div>
                </div>

                <div className="careers-step">
                    <span className="icon"><img src="/images/career/icon3.png" className="career-how-it-icon" /></span>
                    <div>
                        <h3>Apply Instantly</h3>
                        <p>Submit your application in one click and<br /> move closer to your dream job effortlessly.
                        </p>
                    </div>
                </div>
            </div>

            
            <div className="careers-image">
                <img src="/images/career/how-it-works.png" alt="current Job Openings At mTouch Labs" />
            </div>
        </div>

        
        <section className="careers-why-choose">
            <div className="careers-why-choose-one">
                <div className="careers-why-choose-one-inside">
                    <div>
                        <img src="/images/career/why1.png" className="careers-why-choose-img" />
                        <p>Award winning
                            designers</p>
                    </div>
                    <div>
                        <img src="/images/career/why2.png" className="careers-why-choose-img" />
                        <p>4.9 rating in google
                            reviews</p>
                    </div>
                    <div>

                        <img src="/images/brand-logo/nasscom.png" alt="Official NASSCOM Member" className="careers-why-choose-img" />

                        <p>NASSCOM Member</p>

                    </div>

                    
                    
                    
                    
                    
                </div>
                <div className="careers-why-choose-one-inside">
                    <div>
                        <img src="/images/career/why4.png" className="careers-why-choose-img" />
                        <p>App Development
                            Company of the Year</p>
                    </div>
                    <div>
                        <img src="/images/career/why5.png" className="careers-why-choose-img" />
                        <p>100+ hours of
                            effort</p>
                    </div>
                </div>
            </div>
            <div className="careers-why-choose-two">
                <h3>Why Choose mTouch Labs?</h3>
                <p><b> Industry Leader: </b> acknowledged as a <a href="/" target="_blank">web and mobile app
                        development</a> business with ISO
                    certification.</p>
                &nbsp;
                <p><b>Career Growth:</b>We offer career progression opportunities, mentorship, and skill development
                    programs.
                </p>
                &nbsp;
                <p><b>Innovative Culture:</b>Develop technologies such as blockchain, AI, Flutter, and React Native.</p>
                &nbsp;
                <p><b>Global Projects: </b>Work together on software solutions, UI/UX design, and app development with
                    clients from around the world.</p>
                &nbsp;
                <p><b>Employee-focused setting:</b> We place a high priority on employee wellness, remote work choices,
                    and work-life balance.</p>

                &nbsp;
            </div>
        </section>

        <div className="Home-logo-container">
            <div id="logoCarousel" className="carousel slide" data-ride="carousel" style={{"padding": "30px", "borderRadius": "10px"}}>
                
                <ol className="carousel-indicators carousel-indicators_two">
                    <li data-target="#logoCarousel" data-slide-to="0" className="active"></li>
                    <li data-target="#logoCarousel" data-slide-to="1"></li>
                </ol>

                
                <div className="carousel-inner">
                    <h3>Some of Our Clients</h3>

                    
                    <div className="carousel-item active">
                        <div className="d-flex justify-content-center align-items-start flex-wrap" style={{"width": "100%", "margin": "auto", "marginBottom": "30px"}}>
                            <div className="Home-logo-grid-item"><img src="/images/home/tech/adjd.png" alt="adjd" /></div>
                            <div className="Home-logo-grid-item"><img src="/images/home/tech/govt.png" alt="golkonda" /></div>
                            <div className="Home-logo-grid-item"><img src="/images/home/tech/aduri.png" alt="aduri" /></div>
                            <div className="Home-logo-grid-item"><img src="/images/home/tech/voosh.png" alt="voosh" /></div>
                            <div className="Home-logo-grid-item"><img src="/images/home/tech/l2r.png" alt="learn2read" /></div>
                            <div className="Home-logo-grid-item"><img src="/images/home/tech/zefsci.png" alt="zefsci" /></div>
                            <div className="Home-logo-grid-item"><img src="/images/home/tech/medbuz.png" alt="medbuz" /></div>
                            <div className="Home-logo-grid-item"><img src="/images/home/tech/veteach.png" alt="veteach" />
                            </div>
                            <div className="Home-logo-grid-item"><img src="/images/home/tech/tanyya.png" alt="tannya" /></div>
                            <div className="Home-logo-grid-item"><img src="/images/home/tech/heyman.png" alt="heyman" /></div>
                            <div className="Home-logo-grid-item"><img src="/images/home/tech/badham.png" alt="badham" /></div>
                            <div className="Home-logo-grid-item"><img src="/images/home/tech/v.png" alt="vivent" /></div>

                            <div className="Home-logo-grid-item"><img src="/images/home/tech/tej.png" alt="tej" /></div>
                            <div className="Home-logo-grid-item"><img src="/images/home/tech/adify.png" alt="adify" /></div>
                            <div className="Home-logo-grid-item"><img src="/images/home/tech/clikget.png" alt="roboride" />
                            </div>

                        </div>
                    </div>

                    
                    <div className="carousel-item">
                        <div className="d-flex justify-content-center align-items-start flex-wrap" style={{"width": "100%", "margin": "auto", "marginBottom": "30px"}}>
                            <div className="Home-logo-grid-item"><img src="/images/home/tech/countryclub.png" alt="countryclub" />
                            </div>
                            <div className="Home-logo-grid-item"><img src="/images/home/tech/kalp.png" alt="kalp" /></div>
                            <div className="Home-logo-grid-item"><img src="/images/home/tech/roboride.png" alt="roboride" />
                            </div>
                            <div className="Home-logo-grid-item"><img src="/images/home/tech/ricehub.png" alt="ricehub" />
                            </div>
                            <div className="Home-logo-grid-item"><img src="/images/home/tech/jaimaxcoin.png" alt="jaimaxcoin" /></div>

                            <div className="Home-logo-grid-item"><img src="/images/home/tech/Citzon.png" alt="Citzon" /></div>
                            <div className="Home-logo-grid-item"><img src="/images/home/tech/fair.png" alt="fair" /></div>

                            <div className="Home-logo-grid-item"><img src="/images/home/tech/inst.png" alt="inst" /></div>
                            <div className="Home-logo-grid-item"><img src="/images/home/tech/dush.png" alt="inst" /></div>
                            <div className="Home-logo-grid-item"><img src="/images/home/tech/revsoul.png" alt="inst" /></div>
                            <div className="Home-logo-grid-item"><img src="/images/home/tech/smartpg.png" alt="inst" /></div>
                        </div>
                    </div>
                </div>

                
                
            </div>
        </div>

        <section className="career-newsletter">
            <div className="career-newsletter-content">
                <h2>Unlock Your Next Career Opportunity in <br /> Web & Mobile App Development</h2>
                <p>For any career-related queries, reach out to
                    <a href="/cdn-cgi/l/email-protection#87e4e6f5e2e2f5f4c7eaf3e8f2e4efebe6e5f4a9e4e8ea" target="_blank" style={{"color": "#fff"}}><span className="__cf_email__" data-cfemail="abc8cad9ceced9d8ebc6dfc4dec8c3c7cac9d885c8c4c6">[email&#160;protected]</span></a>
                    Stay on top of your profession in online and <a href="mobile-app-development-company" target="_blank" style={{"color": "#fff"}}>mobile app development</a>. Get the most recent job
                    openings, market insights, and professional advice on app development, software engineering, and
                    UI/UX design. Take the next step toward your ideal career by connecting with us today!
                </p>
            </div>
            <div>
                <img src="/images/career/subscribe.png" className="Newsletter-Subscribe" />
            </div>
        </section>
    </div>
    <section className="r-bg-x sec-pad">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-7 text-center">
                    <div className="page-headings">
                        <h3>Frequently Asked Questions</h3>
                        &nbsp;
                        <div className="accordion">

                            <div className="accordion-item">
                                <button id="accordion-button-1" aria-expanded="false">
                                    <span className="accordion-title">What job opportunities are available at mTouch Labs in
                                        Hyderabad?</span>
                                    <span className="icon" aria-hidden="true"></span>
                                </button>
                                <div className="accordion-content">
                                    <p>
                                        mTouch Labs offers IT job opportunities in Hyderabad for roles such as Flutter
                                        developers, React JS developers, full-stack developers, UI/UX designers, digital
                                        marketing managers, and project managers. The company regularly hires skilled
                                        professionals for web and mobile app development projects.
                                    </p>
                                </div>
                            </div>

                            <div className="accordion-item">
                                <button id="accordion-button-2" aria-expanded="false">
                                    <span className="accordion-title">How can I apply for jobs at mTouch Labs?</span>
                                    <span className="icon" aria-hidden="true"></span>
                                </button>
                                <div className="accordion-content">
                                    <p>
                                        Candidates can apply for jobs at mTouch Labs by visiting the careers page,
                                        selecting a suitable position, and submitting their resume through the online
                                        application form. The hiring team reviews applications and connects with
                                        shortlisted candidates for further steps.
                                    </p>
                                </div>
                            </div>

                            <div className="accordion-item">
                                <button id="accordion-button-3" aria-expanded="false">
                                    <span className="accordion-title">Does mTouch Labs offer career growth for developers
                                        and freshers?</span>
                                    <span className="icon" aria-hidden="true"></span>
                                </button>
                                <div className="accordion-content">
                                    <p>
                                        Yes, mTouch Labs provides career growth opportunities through mentorship, skill
                                        development programs, and exposure to global projects. Freshers and experienced
                                        professionals can work with modern technologies and build strong technical
                                        expertise.
                                    </p>
                                </div>
                            </div>

                            <div className="accordion-item">
                                <button id="accordion-button-4" aria-expanded="false">
                                    <span className="accordion-title">What skills are required to work at mTouch
                                        Labs?</span>
                                    <span className="icon" aria-hidden="true"></span>
                                </button>
                                <div className="accordion-content">
                                    <p>
                                        mTouch Labs looks for candidates with strong technical knowledge,
                                        problem-solving skills, teamwork, and passion for innovation. Experience in web
                                        development, mobile app development, UI/UX design, testing, and digital
                                        marketing is highly valued.
                                    </p>
                                </div>
                            </div>

                            <div className="accordion-item">
                                <button id="accordion-button-5" aria-expanded="false">
                                    <span className="accordion-title">Why choose mTouch Labs for a career in app development
                                        and IT?</span>
                                    <span className="icon" aria-hidden="true"></span>
                                </button>
                                <div className="accordion-content">
                                    <p>
                                        mTouch Labs offers an innovative work culture, global client exposure, and
                                        opportunities to work on advanced technologies like AI, Flutter, blockchain, and
                                        React Native. Employees benefit from a collaborative environment focused on
                                        learning, growth, and work-life balance.
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>
    </>
  );
}