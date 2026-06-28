import ScrollGallery from "./ScrollGallery";
import StatsBar from "./StatsBar";

const logos = [
  { src: "/images/home/tech/kezad-logo.webp", alt: "Kezad Group" },
  { src: "/images/home/tech/kohere.webp", alt: "Kohere" },
  { src: "/images/home/tech/aduri.webp", alt: "Aburi Group" },
  { src: "/images/home/tech/image1.webp", alt: "ADJD" },
  { src: "/images/home/tech/image3.webp", alt: "Government of Telangana" },
  { src: "/images/home/tech/zefsci.webp", alt: "ZetSci" },
  { src: "/images/home/tech/uptick.webp", alt: "UaTiK" },
  { src: "/images/home/tech/saachi.webp", alt: "Sacchi" },
  { src: "/images/home/tech/drpicklogo.webp", alt: "Dr.Pick" },
  { src: "/images/home/tech/image2.webp", alt: "ZuppiBuy" },
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
                    alt={l.alt}
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