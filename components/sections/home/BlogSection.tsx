"use client";
/*
  Marked "use client" as an HTML-payload optimisation, not for interactivity.
  As a server component this section's element tree was serialised a second time
  into the inlined RSC flight payload on every request. As a client component the
  SSR'd HTML is byte-for-byte identical, but the tree is no longer duplicated —
  its JSX lives in a cacheable JS chunk instead.
*/
const blogs = [
  {
    href: "/blog/top-generative-ai-tools-for-developers",
    img: "/images/home/blogs/blog-img-1.webp",
    imgAlt: "Best Generative AI Tools and Platforms",
    caption: ["Best Generative AI Tools and Platforms"],
  },
  {
    href: "/blog/ai-role-in-business-automation",
    img: "/images/home/blogs/blog-img-2.webp",
    imgAlt: "The Role of AI in Enhancing Business Automation and Efficiency",
    caption: ["The Role of AI in Enhancing Business Automation and Efficiency"],
  },
  {
    href: "/blog/artificial-intelligence-transforming-mobile-technology",
    img: "/images/home/blogs/blog-img-3.webp",
    imgAlt: "AI & Automation The Future of AI Automation in Business",
    caption: ["AI & Automation The Future of AI Automation in Business"],
  },
];

export default function BlogSection() {
  return (
    <>
      
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
                Fresh perspectives on software, AI, and digital transformation — delivered by engineers who ship.
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