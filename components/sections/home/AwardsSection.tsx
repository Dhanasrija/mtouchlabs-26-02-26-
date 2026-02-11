const awards = [
  { img: "award-winning-designers.png", alt: "Award winning designers", text: "Award <br /> winning designers", aos: "fade-right" },
  { img: "4.9-rating.png", alt: "4.9 rating in google reviews", text: "4.9 rating in google <br /> reviews", aos: "zoom-in" },
  { img: "app-development-company.png", alt: "App Development Company of the Year", text: "App Development <br /> Company of the <br />Year", aos: "zoom-in" },
  { img: "RushLogo.png", alt: "App Development Company of the Year", text: "Partnered With <br /> Design Rush", aos: "zoom-in" },
  { img: "nasscom.png", alt: "Official NASSCOM Member", text: "Official<br /> NASSCOM Member", aos: "fade-left" },
];

export default function AwardsSection() {
  return (
    <section className="home-about sec-pad r-bg-x" style={{ paddingTop: 0 }}>
      {/* Top Button Section */}
      <div className="container text-center mb60 mt50">
        <a href="/about" target="_blank" className="know-more-btn">
          Know More mTouchLabs
          <i className="fa-solid fa-arrow-right"></i>
        </a>
      </div>

      {/* Awards Badges Section */}
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-12">
            <div className="app-awards">
              {awards.map((award, i) => (
                <div className="award-achivt" data-aos={award.aos} key={i}>
                  <a target="_blank">
                    <img
                      src={`/images/brand-logo/${award.img}`}
                      alt={award.alt}
                      className="img-fluid"
                    />
                  </a>
                  <p dangerouslySetInnerHTML={{ __html: award.text }} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
