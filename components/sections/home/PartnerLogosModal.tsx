"use client";

/*
  PartnerLogosModal — the hidden "Our Trusted Partners" grid shown when the
  homepage's "View All" link is clicked.

  Marked "use client" as a payload optimisation only (see BrochureModal for the
  full rationale): the rendered HTML is unchanged — same #openlogoModal id, same
  37 lazy-loaded logos, still server-rendered — but the subtree is no longer
  duplicated into the inlined RSC flight payload.
*/
export default function PartnerLogosModal() {
  return (
      <div className="modal-overlay hide" id="openlogoModal">
        <div className="logomodal">
          <div
            className="modal-content"
            style={{
              background: "#fff",
              borderRadius: "20px",
              position: "relative",
            }}
          >
            <span
              className="js-close-logo-modal"
              role="button"
              tabIndex={0}
              aria-label="Close partners modal"
              style={{
                position: "absolute",
                top: "15px",
                right: "20px",
                fontSize: "28px",
                cursor: "pointer",
                color: "#333",
                fontWeight: "bold",
              }}
            >
              &times;
            </span>
            <h3
              style={{
                marginBottom: "20px",
                fontSize: "22px",
                textAlign: "center",
              }}
            >
              Our Trusted Partners
            </h3>
            <div
              className="logo-modal-grid-inline"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(5, 1fr)",
                gap: "20px",
                overflowY: "auto",
                maxHeight: "450px",
                padding: "10px",
              }}
            >
              {[
                "adjd.png", "l2r.png", "aduri.png", "govt.png", "kezad-logo.png",
                "paygenpro.png", "payville.png", "kohere.png", "onlyshops.png", "olt.png",
                "fleuncyo.png", "zuppibuy.png", "paygen.png", "voosh.png", "omvideos.png",
                "book.png", "uptick.png", "saachi.png", "macServices.png", "drpicklogo.png",
                "classy.png", "onus.png", "hitech.svg", "zefsci.png", "medbuz.png",
                "veteach.png", "tanyya.png", "heyman.png", "badham.png", "v.png",
                "tej.png", "adify.png", "clikget.png", "countryclub.png", "kalp.png",
                "roboride.png", "ricehub.png",
              ].map((logo, i) => (
                <div key={i} className="logo-modal-cell">
                  <img
                    src={`/images/home/tech/${logo}`}
                    alt={`${logo.replace(/\.\w+$/, "")} — mTouch Labs partner`}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
  );
}
