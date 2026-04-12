const ArrowSVG = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M7 17L17 7M17 7H7M17 7V17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ViewArrowSVG = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 19V5M12 5L5 12M12 5L19 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const blogs = [
  {
    href: "top-generative-ai-tools-for-developers",
    img: "/images/blogs/Generative AI Tools and Platforms1.png",
    imgAlt: "Best Generative AI Tools and Platforms",
    category: "Generative AI",
    date: "2025-08-01",
    readTime: "7 min read",
    title: "Best Generative AI Tools and Platforms",
    excerpt: "In today's fast-evolving tech world, artificial intelligence (AI) is driving innovation across industries. Among its branches, generative AI is particularly exciting and impactful. With the ability to autonomously create content—text, images, music, and even code—generative AI is transforming creativity and efficiency.",
    delay: "200",
  },
  {
    href: "ai-role-in-business-automation",
    img: "/images/blogs/ai-in-business.png",
    imgAlt: "The Role of AI in Business Automation",
    category: "The Role of AI",
    date: "2025-08-01",
    readTime: "8 min read",
    title: "The Role of AI in Enhancing Business Automation and Efficiency",
    excerpt: "In today's fast changing digital landscape, organisations are continuously looking for methods to streamline operations, cut costs, and increase efficiency. Artificial intelligence (AI) has emerged as a disruptive force in business automation and operational efficiency, affecting sectors worldwide.",
    delay: "400",
  },
  {
    href: "artificial-intelligence-transforming-mobile-technology",
    img: "/images/blogs/artificial-intelligence-transforming-mobile-technology.png",
    imgAlt: "AI Transforming Mobile Technology",
    category: "Artificial Intelligence",
    date: "2025-08-01",
    readTime: "10 min read",
    title: "AI & Automation The Future of AI Automation in Business",
    excerpt: "Artificial intelligence (AI) is no longer just a science fiction notion; it has become a fundamental part of our daily life, thanks to mobile technology. From virtual assistants to personalized user experiences, artificial intelligence is changing the way we interact with our smartphones and other mobile devices.",
    delay: "600",
  },
];

export default function BlogSection() {
  return (
    <section className="blog-section">
      <div className="blog-container">
        {/* Blog Header */}
        <div className="blog-header">
          <div className="blog-header-left">
            <p className="blog-label">BLOGS</p>
            <h2 className="blog-title">Explore Inspiring Insights.</h2>
            <p className="blog-description">
              Learn about the latest in technology and how it can revolutionize your business growth.
            </p>
          </div>
          <div className="blog-header-right">
            <a href="/blog" target="_blank" className="view-all-btn">
              View All
              <div><ViewArrowSVG /></div>
            </a>
          </div>
        </div>

        {/* Blog Cards */}
        <div className="blog-cards">
          {blogs.map((blog, i) => (
            <div className="blog-card" data-aos="fade-up" data-aos-delay={blog.delay} key={i}>
              <div className="blog-card-image">
                <a href={blog.href} target="_blank">
                  <img src={blog.img} alt={blog.imgAlt} />
                  <span className="blog-category">{blog.category}</span>
                </a>
              </div>
              <div className="blog-card-content">
                <div className="blog-meta">
                  <span className="blog-date">{blog.date}</span>
                  <span className="blog-separator">•</span>
                  <span className="blog-read-time">{blog.readTime}</span>
                </div>
                <h3 className="blog-card-title">
                  <a href={blog.href} target="_blank">{blog.title}</a>
                </h3>
                <p className="blog-excerpt">{blog.excerpt}</p>
                <a href={blog.href} target="_blank" className="blog-arrow-btn">
                  <ArrowSVG />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
