const blogs = [
  {
    href: "/top-generative-ai-tools-for-developers",
    img: "/images/home/blogs/blog-img-1.png",
    imgAlt: "Best Generative AI Tools and Platforms",
    caption: ["Best Generative AI Tools and Platforms"],
  },
  {
    href: "/ai-role-in-business-automation",
    img: "/images/home/blogs/blog-img-2.png",
    imgAlt: "The Role of AI in Enhancing Business Automation and Efficiency",
    caption: ["The Role of AI in Enhancing Business Automation and Efficiency"],
  },
  {
    href: "/artificial-intelligence-transforming-mobile-technology",
    img: "/images/home/blogs/blog-img-3.png",
    imgAlt: "AI & Automation The Future of AI Automation in Business",
    caption: ["AI & Automation The Future of AI Automation in Business"],
  },
];

export default function BlogSection() {
  return (
    <>
      <style>{`
        @keyframes blogFadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to   { opacity: 1; transform: translateY(0);    }
        }
        @keyframes blogBlurIn {
          from { opacity: 0; filter: blur(8px); }
          to   { opacity: 1; filter: blur(0);   }
        }
        .blog-ref-card-img-wrap img {
          transition: transform 0.4s ease;
          width: 100%;
          display: block;
        }
        .blog-ref-card:hover .blog-ref-card-img-wrap img {
          transform: scale(1.04);
        }
      `}</style>
      <section className="blog-section-ref">
        <div className="blog-ref-container">

          {/* Header */}
          <div className="blog-ref-header">
            <div className="blog-ref-header-left">
              <p
                className="blog-ref-label"
                style={{
                  animation: "blogFadeUp 0.5s ease-out both",
                  animationDelay: "0s",
                }}
              >
                &#8226; BLOG AND ARTICLES
              </p>

              <h2 className="blog-ref-title">
                <span
                  className="blog-ref-title-accent"
                  style={{
                    display: "inline-block",
                    animation: "blogBlurIn 0.6s ease-out both",
                    animationDelay: "0.1s",
                  }}
                >
                  Latest
                </span>
                {" "}
                <span
                  style={{
                    display: "inline-block",
                    animation: "blogBlurIn 0.6s ease-out both",
                    animationDelay: "0.3s",
                  }}
                >
                  insights and
                </span>
                <br/>
                <span
                  style={{
                    display: "inline-block",
                    animation: "blogBlurIn 0.6s ease-out both",
                    animationDelay: "0.3s",
                  }}
                >
                  trends
                </span>
              </h2>

              <p
                className="blog-ref-desc"
                style={{
                  animation: "blogBlurIn 0.7s ease-out both",
                  animationDelay: "0.5s",
                }}
              >
                Whether you&apos;re optimizing today or building for tomorrow
                &nbsp;we help you move faster with confidence.
              </p>
            </div>

            <div
              className="blog-ref-header-right"
              style={{
                animation: "blogFadeUp 0.6s ease-out both",
                animationDelay: "0.6s",
              }}
            >
              <a href="/blog" className="blog-ref-viewall-btn">VIEW ALL</a>
            </div>
          </div>

          {/* Cards */}
          <div className="blog-ref-cards">
            {blogs.map((blog, i) => (
              <div
                className="blog-ref-card"
                key={i}
                style={{
                  animation: "blogFadeUp 0.6s ease-out both",
                  animationDelay: `${0.7 + i * 0.15}s`,
                }}
              >
                <a href={blog.href}>
                  <div className="blog-ref-card-img-wrap">
                    <img src={blog.img} alt={blog.imgAlt} />
                    <div className="blog-ref-card-overlay">
                      <p className="blog-ref-card-caption">
                        {blog.caption.map((line, j) => (
                          <span key={j}>{line}<br /></span>
                        ))}
                      </p>
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}