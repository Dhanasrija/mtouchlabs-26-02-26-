// Full-height skeleton for the blog listing.
//
// Without this, a route transition into /blog renders an (almost) empty
// segment while the post list is fetched, the page collapses to just the
// header + footer, and the footer flashes near the top before the real
// content streams in and pushes everything back down. Reserving the hero
// and a grid of card placeholders keeps the page at full height so the
// footer stays below the fold and content swaps in place.
export default function BlogLoading() {
  const cards = Array.from({ length: 6 });

  return (
    <>
      <div
        className="r-bg-a pt85 pb120"
        style={{
          background:
            "linear-gradient(135deg, #e3f2fd 0%, #ffffff 50%, #f5f5f5 100%)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <div className="row pt80">
            <div className="col-lg-12 text-center">
              <div className="page-headings">
                <h1
                  className="mb15"
                  style={{
                    fontSize: "48px",
                    fontWeight: 700,
                    color: "#1f2937",
                    marginBottom: "20px",
                  }}
                >
                  Insights &amp; Ideas
                </h1>
                <p
                  style={{
                    fontSize: "18px",
                    color: "#6b7280",
                    maxWidth: "700px",
                    margin: "0 auto",
                    lineHeight: 1.6,
                  }}
                >
                  Explore articles and trends shaping the future of technology,
                  design, and innovation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="blog-block sec-pad pt80">
        <div className="container">
          <div className="blog-post">
            <div className="row" aria-hidden="true">
              {cards.map((_, i) => (
                <div key={i} className="col-lg-4 col-sm-6 blog-card-item">
                  <div className="ree-media-crd">
                    <div
                      className="rpl-img"
                      style={{ background: "#eef1f6" }}
                    />
                    <div className="rpl-contt" style={{ padding: "18px 20px" }}>
                      <div
                        style={{
                          width: "40%",
                          height: 14,
                          borderRadius: 6,
                          background: "#eef1f6",
                          marginBottom: 14,
                        }}
                      />
                      <div
                        style={{
                          width: "90%",
                          height: 20,
                          borderRadius: 6,
                          background: "#e7ebf2",
                          marginBottom: 10,
                        }}
                      />
                      <div
                        style={{
                          width: "100%",
                          height: 12,
                          borderRadius: 6,
                          background: "#eef1f6",
                          marginBottom: 8,
                        }}
                      />
                      <div
                        style={{
                          width: "75%",
                          height: 12,
                          borderRadius: 6,
                          background: "#eef1f6",
                        }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
