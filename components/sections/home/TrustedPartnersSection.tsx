import ScrollGallery from "./ScrollGallery";
import StatsBar from "./StatsBar";

const logos = [
  { src: "/images/home/tech/kezad-logo.png", alt: "Kezad Group" },
  { src: "/images/home/tech/kohere.png", alt: "Kohere" },
  { src: "/images/home/tech/aduri.png", alt: "Aburi Group" },
  { src: "/images/home/tech/image1.png", alt: "ADJD" },
  { src: "/images/home/tech/image3.png", alt: "Government of Telangana" },
  { src: "/images/home/tech/zefsci.png", alt: "ZetSci" },
  { src: "/images/home/tech/uptick.png", alt: "UaTiK" },
  { src: "/images/home/tech/saachi.png", alt: "Sacchi" },
  { src: "/images/home/tech/drpicklogo.png", alt: "Dr.Pick" },
  { src: "/images/home/tech/image2.png", alt: "ZuppiBuy" },
];

export default function TrustedPartnersSection() {
  return (
    <>
      

      <section className="mtl-partners-wrap">
        <ScrollGallery />
        <StatsBar />

        {/* LOGOS — pure CSS scroll */}
        <div className="mtl-logo-track-outer" aria-label="Trusted client logos">
          <div className="mtl-logo-track">
            {[...logos, ...logos].map((l, i) => {
              const isClone = i >= logos.length;
              return (
                <div
                  key={i}
                  className="mtl-logo-item"
                  aria-hidden={isClone ? true : undefined}
                >
                  <img
                    src={l.src}
                    alt={isClone ? "" : l.alt}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}