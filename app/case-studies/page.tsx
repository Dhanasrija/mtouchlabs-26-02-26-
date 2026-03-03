import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Case Studies | Mobile App Development & Web Development Projects",
  description: "Explore our detailed case studies showcasing successful mobile app development and web development projects across various industries.",
  alternates: {
    canonical: "https://www.mtouchlabs.com/case-studies",
  },

  openGraph: {
    title: "Case Studies | Mobile App Development & Web Development Projects",
    description: "Explore our detailed case studies showcasing successful mobile app development and web development projects across various industries.",
    url: "https://www.mtouchlabs.com/case-studies",
    siteName: "mTouch Labs",
    type: "website",
    images: [{ url: "https://www.mtouchlabs.com/images/web-and-mobile-app-development.png", width: 1200, height: 630, alt: "Case Studies | Mobile App Development & Web Development Projects" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Case Studies | Mobile App Development & Web Development Projects",
    description: "Explore our detailed case studies showcasing successful mobile app development and web development projects across various industries.",
    images: ["https://www.mtouchlabs.com/images/web-and-mobile-app-development.png"],
  },
};

export default function Page() {
  return (
    <>

    <div className="port-head-sec pt85 pb120 r-bg-a ">
        <div className="container">
            <div className="row vcenter pt80">
                <div className="col-lg-7">
                    <div className="page-headings">
                        <span className="sub-heading mb15" data-aos="fade-in" data-aos-delay="200"><i
                                className="fas fa-chart-line mr5"></i>
                            Success Stories</span>
                        <h1 className="mb15" data-aos="fade-in" data-aos-delay="400">Detailed Case Studies of Our <span
                                className="ree-text rt40"> Mobile App Development & Web Development </span> Projects</h1>
                        <p className="h-light" data-aos="fade-in" data-aos-delay="600">Explore in-depth case studies
                            showcasing our successful projects across various industries, technologies, and business
                            challenges.</p>
                        <a className="ree-btn  ree-btn-grdt1 mt40" data-aos="fade-in"
                            data-aos-delay="800">Get Quote <i className="fas fa-arrow-right fa-btn"></i></a>
                    </div>
                </div>
                <div className="col-lg-5">
                    <div className="custom_ree_card m-mt30 trust-review owl-carousel" data-aos="fade-in"
                        data-aos-delay="500" >
                        <div className="items">
                            <div className="review-text">
                                <p>mTouch Labs delivered an exceptional mobile application that exceeded our
                                    expectations. Their team's expertise in mobile app development and attention to
                                    detail helped us achieve significant business growth.</p>
                            </div>
                            <div className="ree-row-set mt30">
                                <div className="media vcenter">
                                    <div className="ree-details-set user-info">
                                        <h5>Sarah Johnson</h5>
                                        <p>CEO, TechStart Inc.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="items">
                            <div className="review-text">
                                <p>The web development project was completed on time and within budget. Their technical
                                    expertise and professional approach made the entire process smooth and efficient.
                                </p>
                            </div>
                            <div className="ree-row-set mt30">
                                <div className="media vcenter">
                                    <div className="ree-details-set user-info">
                                        <h5>Michael Chen</h5>
                                        <p>CTO, Digital Solutions</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    

    
    <div className="success-stories-header">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-8 text-center">
                    <h1 className="success-title">Our Success Stories</h1>
                    <p className="success-subtitle">Discover how we've helped businesses transform their ideas into
                        impactful digital solutions</p>
                </div>
            </div>
        </div>
    </div>

    
    <div className="filter-section">
        <div className="container">
            <div className="filter-bar">
                <div className="filter-categories">
                    <span className="filter-label">Filter by:</span>
                    <button className="filter-category-btn" data-category="technology">Technology</button>
                    <button className="filter-category-btn active" data-category="industry">Industry</button>
                </div>
                <div className="filter-options" id="industry-filters">
                    <button className="filter-option active" data-filter="all">All</button>
                    <button className="filter-option" data-filter="healthcare">Healthcare</button>
                    <button className="filter-option" data-filter="government">Government</button>
                    <button className="filter-option" data-filter="ecommerce">E-commerce</button>
                    <button className="filter-option" data-filter="logistics">Logistics</button>
                    <button className="filter-option" data-filter="food">Food & Beverage</button>
                    <button className="filter-option" data-filter="education">Education</button>
                    <button className="filter-option" data-filter="fintech">Fintech</button>
                    <button className="filter-option" data-filter="smartcity">Smart City</button>
                </div>
            </div>
        </div>
    </div>

    
    <div className="case-studies-section">
        <div className="container">
            <div className="case-studies-header">
                <h2 id="case-studies-count">Showing 9 of 9 case studies</h2>
            </div>

            <div className="case-studies-grid" id="case-studies-grid">
                
                <div className="case-study-card" data-industry="healthcare" data-technologies="react,ai,node">
                    <div className="case-study-image">
                        <img src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=250&fit=crop"
                            alt="AI-Powered Healthcare Platform" />
                        <div className="image-overlay">
                            <span className="client-name">MedBuz</span>
                            <span className="year">2024</span>
                        </div>
                    </div>
                    <div className="case-study-content">
                        <h3 className="case-study-title">AI-Powered Healthcare Platform</h3>
                        <p className="case-study-description">Developed a comprehensive healthcare management system with
                            AI-driven diagnostics and patient monitoring capabilities.</p>
                        <div className="technology-tags">
                            <span className="tech-tag">React</span>
                            <span className="tech-tag">AI/ML</span>
                            <span className="tech-tag">Node.js</span>
                            <span className="tech-tag">+1</span>
                        </div>
                        <div className="key-results">
                            <h4>Key Results:</h4>
                            <ul>
                                <li><span className="checkmark">✓</span> 60% reduction in patient wait times</li>
                                <li><span className="checkmark">✓</span> AI diagnostics improved accuracy by 40%</li>
                            </ul>
                        </div>
                        <button className="download-btn">
                            <i className="fas fa-download"></i>
                            Download Case Study
                        </button>
                    </div>
                </div>

                
                <div className="case-study-card" data-industry="government" data-technologies="angular,blockchain,cloud">
                    <div className="case-study-image">
                        <img src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=400&h=250&fit=crop"
                            alt="Government Document Management System" />
                        <div className="image-overlay">
                            <span className="client-name">Abu Dhabi Judicial Department</span>
                            <span className="year">2023</span>
                        </div>
                    </div>
                    <div className="case-study-content">
                        <h3 className="case-study-title">Government Document Management System</h3>
                        <p className="case-study-description">Built a secure, scalable document management and workflow
                            automation system for government operations.</p>
                        <div className="technology-tags">
                            <span className="tech-tag">Angular</span>
                            <span className="tech-tag">Blockchain</span>
                            <span className="tech-tag">Cloud</span>
                            <span className="tech-tag">+1</span>
                        </div>
                        <div className="key-results">
                            <h4>Key Results:</h4>
                            <ul>
                                <li><span className="checkmark">✓</span> 99.9% uptime achieved</li>
                                <li><span className="checkmark">✓</span> Processed 1M+ documents annually</li>
                            </ul>
                        </div>
                        <button className="download-btn">
                            <i className="fas fa-download"></i>
                            Download Case Study
                        </button>
                    </div>
                </div>

                
                <div className="case-study-card" data-industry="logistics" data-technologies="react,mobile,iot">
                    <div className="case-study-image">
                        <img src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400&h=250&fit=crop"
                            alt="Real-Time Logistics Mobile App" />
                        <div className="image-overlay">
                            <span className="client-name">KEZAD</span>
                            <span className="year">2024</span>
                        </div>
                    </div>
                    <div className="case-study-content">
                        <h3 className="case-study-title">Real-Time Logistics Mobile App</h3>
                        <p className="case-study-description">Developed iOS and Android apps for real-time logistics
                            tracking and warehouse management.</p>
                        <div className="technology-tags">
                            <span className="tech-tag">React Native</span>
                            <span className="tech-tag">Mobile</span>
                            <span className="tech-tag">IoT</span>
                            <span className="tech-tag">+1</span>
                        </div>
                        <div className="key-results">
                            <h4>Key Results:</h4>
                            <ul>
                                <li><span className="checkmark">✓</span> 30% faster delivery times</li>
                                <li><span className="checkmark">✓</span> Real-time tracking for 10K+ shipments</li>
                            </ul>
                        </div>
                        <button className="download-btn">
                            <i className="fas fa-download"></i>
                            Download Case Study
                        </button>
                    </div>
                </div>

                
                <div className="case-study-card" data-industry="ecommerce" data-technologies="next,ai,stripe">
                    <div className="case-study-image">
                        <img src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=250&fit=crop"
                            alt="E-commerce Platform with AI Recommendations" />
                        <div className="image-overlay">
                            <span className="client-name">Classy Fashion</span>
                            <span className="year">2023</span>
                        </div>
                    </div>
                    <div className="case-study-content">
                        <h3 className="case-study-title">E-commerce Platform with AI Recommendations</h3>
                        <p className="case-study-description">Created a modern e-commerce platform with AI-powered product
                            recommendations and personalized shopping experience.</p>
                        <div className="technology-tags">
                            <span className="tech-tag">Next.js</span>
                            <span className="tech-tag">AI/ML</span>
                            <span className="tech-tag">Stripe</span>
                            <span className="tech-tag">+1</span>
                        </div>
                        <div className="key-results">
                            <h4>Key Results:</h4>
                            <ul>
                                <li><span className="checkmark">✓</span> 200% increase in conversion rate</li>
                                <li><span className="checkmark">✓</span> 50K+ active users monthly</li>
                            </ul>
                        </div>
                        <button className="download-btn">
                            <i className="fas fa-download"></i>
                            Download Case Study
                        </button>
                    </div>
                </div>

                
                <div className="case-study-card" data-industry="food" data-technologies="react,mobile,node">
                    <div className="case-study-image">
                        <img src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=250&fit=crop"
                            alt="Food Delivery Management System" />
                        <div className="image-overlay">
                            <span className="client-name">Voosh</span>
                            <span className="year">2024</span>
                        </div>
                    </div>
                    <div className="case-study-content">
                        <h3 className="case-study-title">Food Delivery Management System</h3>
                        <p className="case-study-description">Built a comprehensive multi-restaurant food delivery platform
                            with advanced analytics and vendor management.</p>
                        <div className="technology-tags">
                            <span className="tech-tag">React</span>
                            <span className="tech-tag">Mobile</span>
                            <span className="tech-tag">Node.js</span>
                            <span className="tech-tag">+1</span>
                        </div>
                        <div className="key-results">
                            <h4>Key Results:</h4>
                            <ul>
                                <li><span className="checkmark">✓</span> Integrated 500+ restaurants</li>
                                <li><span className="checkmark">✓</span> Handled 100K+ orders monthly</li>
                            </ul>
                        </div>
                        <button className="download-btn">
                            <i className="fas fa-download"></i>
                            Download Case Study
                        </button>
                    </div>
                </div>

                
                <div className="case-study-card" data-industry="education" data-technologies="vue,webrtc,python">
                    <div className="case-study-image">
                        <img src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=250&fit=crop"
                            alt="EdTech Learning Platform" />
                        <div className="image-overlay">
                            <span className="client-name">Learn2Read Foundation</span>
                            <span className="year">2023</span>
                        </div>
                    </div>
                    <div className="case-study-content">
                        <h3 className="case-study-title">EdTech Learning Platform</h3>
                        <p className="case-study-description">Developed an interactive learning platform with gamification
                            features and progress tracking for students.</p>
                        <div className="technology-tags">
                            <span className="tech-tag">Vue.js</span>
                            <span className="tech-tag">WebRTC</span>
                            <span className="tech-tag">Python</span>
                            <span className="tech-tag">+1</span>
                        </div>
                        <div className="key-results">
                            <h4>Key Results:</h4>
                            <ul>
                                <li><span className="checkmark">✓</span> 50K+ students enrolled</li>
                                <li><span className="checkmark">✓</span> 85% course completion rate</li>
                            </ul>
                        </div>
                        <button className="download-btn">
                            <i className="fas fa-download"></i>
                            Download Case Study
                        </button>
                    </div>
                </div>

                
                <div className="case-study-card" data-industry="healthcare" data-technologies="react,mobile,webrtc">
                    <div className="case-study-image">
                        <img src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=250&fit=crop"
                            alt="Telemedicine Consultation App" />
                        <div className="image-overlay">
                            <span className="client-name">Dr. Pick</span>
                            <span className="year">2024</span>
                        </div>
                    </div>
                    <div className="case-study-content">
                        <h3 className="case-study-title">Telemedicine Consultation App</h3>
                        <p className="case-study-description">Created a secure telemedicine platform enabling virtual
                            consultations with integrated prescription management.</p>
                        <div className="technology-tags">
                            <span className="tech-tag">React Native</span>
                            <span className="tech-tag">WebRTC</span>
                            <span className="tech-tag">HIPAA</span>
                            <span className="tech-tag">+1</span>
                        </div>
                        <div className="key-results">
                            <h4>Key Results:</h4>
                            <ul>
                                <li><span className="checkmark">✓</span> 10K+ consultations monthly</li>
                                <li><span className="checkmark">✓</span> HIPAA compliant infrastructure</li>
                            </ul>
                        </div>
                        <button className="download-btn">
                            <i className="fas fa-download"></i>
                            Download Case Study
                        </button>
                    </div>
                </div>

                
                <div className="case-study-card" data-industry="smartcity" data-technologies="react,iot,bigdata">
                    <div className="case-study-image">
                        <img src="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&h=250&fit=crop"
                            alt="Smart City IoT Dashboard" />
                        <div className="image-overlay">
                            <span className="client-name">Telangana Government</span>
                            <span className="year">2023</span>
                        </div>
                    </div>
                    <div className="case-study-content">
                        <h3 className="case-study-title">Smart City IoT Dashboard</h3>
                        <p className="case-study-description">Designed and deployed a comprehensive IoT dashboard for smart
                            city infrastructure monitoring and management.</p>
                        <div className="technology-tags">
                            <span className="tech-tag">React</span>
                            <span className="tech-tag">IoT</span>
                            <span className="tech-tag">Big Data</span>
                            <span className="tech-tag">+1</span>
                        </div>
                        <div className="key-results">
                            <h4>Key Results:</h4>
                            <ul>
                                <li><span className="checkmark">✓</span> Monitoring 1000+ IoT devices</li>
                                <li><span className="checkmark">✓</span> Real-time alerts reduced response time by 70%</li>
                            </ul>
                        </div>
                        <button className="download-btn">
                            <i className="fas fa-download"></i>
                            Download Case Study
                        </button>
                    </div>
                </div>

                
                <div className="case-study-card" data-industry="fintech" data-technologies="java,microservices,blockchain">
                    <div className="case-study-image">
                        <img src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=250&fit=crop"
                            alt="Fintech Payment Gateway" />
                        <div className="image-overlay">
                            <span className="client-name">Onus Financial</span>
                            <span className="year">2024</span>
                        </div>
                    </div>
                    <div className="case-study-content">
                        <h3 className="case-study-title">Fintech Payment Gateway</h3>
                        <p className="case-study-description">Built a secure, high-performance payment gateway with
                            multi-currency support and fraud detection.</p>
                        <div className="technology-tags">
                            <span className="tech-tag">Java</span>
                            <span className="tech-tag">Microservices</span>
                            <span className="tech-tag">Blockchain</span>
                            <span className="tech-tag">+1</span>
                        </div>
                        <div className="key-results">
                            <h4>Key Results:</h4>
                            <ul>
                                <li><span className="checkmark">✓</span> Processing $10M+ transactions monthly</li>
                                <li><span className="checkmark">✓</span> 99.99% transaction success rate</li>
                            </ul>
                        </div>
                        <button className="download-btn">
                            <i className="fas fa-download"></i>
                            Download Case Study
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>



    
    
    
    

    
    
    
    
    
    
    
    
    
    

    
    

    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
        
    
    

    
      

    </>
  );
}
