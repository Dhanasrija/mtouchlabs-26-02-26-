import type { Metadata } from "next";
import { sql } from "@/lib/db";
import Link from "next/link";
import BlogFilter from "./BlogFilter";

export const metadata: Metadata = {
  title: "Blog - Insights & Ideas",
  description: "Explore articles and trends shaping the future of technology, design, and innovation.",
  alternates: {
    canonical: "https://www.mtouchlabs.com/blog",
  },
  openGraph: {
    title: "Blog - Insights & Ideas",
    description: "Explore articles and trends shaping the future of technology, design, and innovation.",
    url: "https://www.mtouchlabs.com/blog",
    siteName: "mTouch Labs",
    type: "website",
    images: [{ url: "https://www.mtouchlabs.com/images/Light.png", width: 1200, height: 630, alt: "Blog - Insights & Ideas" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog - Insights & Ideas",
    description: "Explore articles and trends shaping the future of technology, design, and innovation.",
    images: ["https://www.mtouchlabs.com/images/Light.png"],
  },
};

interface BlogRow {
  id: number;
  slug: string;
  title: string;
  description: string;
  image: string;
  author: string;
  category: string;
  tags: string | string[];
  reading_time: number;
  publish_date: string;
  created_at: string;
}

export const revalidate = 60;

export default async function BlogPage() {
  const blogs = await sql`
    SELECT id, slug, title, description, image, author, category, tags, reading_time,
           publish_date, created_at
    FROM blogs
    WHERE published = true OR status = 'published'
    ORDER BY COALESCE(publish_date, created_at) DESC
  ` as BlogRow[];

  const categories = [...new Set(blogs.map(b => b.category).filter(Boolean))];

  return (
    <>
      <div className="r-bg-a pt85 pb120" style={{background: "linear-gradient(135deg, #e3f2fd 0%, #ffffff 50%, #f5f5f5 100%)", position: "relative", overflow: "hidden"}}>
        <div style={{position: "absolute", top: "-50px", right: "-50px", width: "300px", height: "300px", background: "radial-gradient(circle, rgba(59,130,246,0.1) 0%, transparent 70%)", borderRadius: "50%"}} />
        <div style={{position: "absolute", bottom: "-100px", left: "-100px", width: "400px", height: "400px", background: "radial-gradient(circle, rgba(59,130,246,0.08) 0%, transparent 70%)", borderRadius: "50%"}} />
        <div className="container" style={{position: "relative", zIndex: 1}}>
          <div className="row pt80">
            <div className="col-lg-12 text-center">
              <div className="page-headings">
                <h1 className="mb15" style={{fontSize: "48px", fontWeight: 700, color: "#1f2937", marginBottom: "20px"}}>Insights &amp; Ideas</h1>
                <p style={{fontSize: "18px", color: "#6b7280", maxWidth: "700px", margin: "0 auto", lineHeight: 1.6}}>Explore articles and trends shaping the future of technology, design, and innovation.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="blog-block sec-pad pt80">
        <div className="container">
          <div className="blog-filter-section mb50">
            <div className="blog-filter-buttons">
              <button className="blog-filter-btn active" data-filter="all">All</button>
              {categories.map((cat) => (
                <button key={cat} className="blog-filter-btn" data-filter={cat}>
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="blog-post">
            <div className="row" id="blog-cards-container">
              {blogs.map((blog) => {
                const displayDate = blog.publish_date || blog.created_at;
                const dateStr = displayDate
                  ? new Date(displayDate).toISOString().split("T")[0]
                  : "";
                const readTime = Number(blog.reading_time) || 0;
                const desc = blog.description
                  ? blog.description.length > 150
                    ? blog.description.slice(0, 150) + "..."
                    : blog.description
                  : "";

                return (
                  <div
                    key={blog.id}
                    className="col-lg-4 col-sm-6 blog-card-item"
                    data-category={blog.category || ""}
                  >
                    <div className="ree-media-crd">
                      <div className="rpl-img">
                        <Link href={`/blog/${blog.slug}`}>
                          <img
                            src={blog.image || "/images/Light.png"}
                            alt={blog.title}
                            className="fill-fixed"
                          />
                        </Link>
                      </div>
                      <div className="rpl-contt">
                        {blog.category && (
                          <span className="blog-category-tag">{blog.category}</span>
                        )}
                        <p className="blog-meta">
                          {dateStr}
                          {readTime > 0 && ` • ${readTime} min read`}
                        </p>
                        <h4>
                          <Link href={`/blog/${blog.slug}`}>{blog.title}</Link>
                        </h4>
                        {desc && <p className="blog-description">{desc}</p>}
                        <Link href={`/blog/${blog.slug}`} className="blog-read-more">
                          Read More <i className="fas fa-arrow-right"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <BlogFilter />
    </>
  );
}
