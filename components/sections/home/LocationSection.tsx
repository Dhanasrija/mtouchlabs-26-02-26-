import React from "react";
import LocationCarousel from "./ui/LocationCarousel";

const locations = {
  hyderabad: {
    key: "hyderabad",
    name: "Hyderabad",
    address: "mTouch Labs Private Limited, #514, Manjeera Trinity Corporate, JNTU – Hitech City Road, Kukatpally, Hyderabad – 500072",
    phone: "+91-9390683154",
    email: "contact@mtouchlabs.com",
    image: "/images/hyderabad.png",
    mapLink: "https://www.google.com/maps/place/mTouch+Labs+Pvt+Ltd+-+Software+Development+Company/@17.4892271,78.3901496,791m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3bcb90cec63e97d9:0xb045c9dc22129055!8m2!3d17.489222!4d78.3927245!16s%2Fg%2F11b8zhlwcv",
    index: 0
  },
  bangalore: {
    key: "bangalore",
    name: "Bangalore",
    address: "mTouch Labs Private Limited, #101, 4th Main Rd, Gayathri Layout, Vijaya Bank Layout, Bilekahalli, Bengaluru, Karnataka - 560076",
    phone: "+91-9014793487",
    email: "contact@mtouchlabs.com",
    image: "/images/bangalore.png",
    mapLink: "https://www.google.com/maps/search/?api=1&query=mTouch+Labs+Bilekahalli+Bengaluru+Karnataka+560076",
    index: 1
  },
  usa: {
    key: "usa",
    name: "USA",
    address: "1111b South Governors Avenue, Suite 48193, Dover, Delaware (DE)-19904 United States (US)",
    phone: "+1 (551) 222-0070",
    email: "contact@mtouchlabs.com",
    image: "/images/usa.jpg",
    mapLink: "https://maps.app.goo.gl/amg7vRf4qFy6BFZW9",
    index: 2
  }
};

const locationList = [locations.hyderabad, locations.bangalore, locations.usa];

export default function LocationSection() {
  return (
    <>
      <style>{`
        ._location_we_serve_container {
          display: flex;
          align-items: center;
          background: #FFFFFF;
          padding: 80px 60px;
          min-height: 600px;
          gap: 60px;
          overflow: hidden;
          width: 100vw;
          position: relative;
          left: 50%;
          transform: translateX(-50%);
          border-radius: 0 !important;
        }

        @media (max-width: 1024px) {
          ._location_we_serve_container {
            flex-direction: column;
            padding: 40px 20px;
            gap: 40px;
          }
        }

        ._location_we_serve_left-section {
          flex: 0 0 420px;
          max-width: 420px;
          z-index: 2;
        }
        @media (max-width: 1024px) {
          ._location_we_serve_left-section {
            flex: 1;
            max-width: 100%;
            width: 100%;
          }
        }

        ._location_we_serve_contact-label {
          font-family: 'Inter', sans-serif;
          font-size: 20px;
          font-weight: 600;
          line-height: 35.24px;
          color: #1A1A1A;
          margin-bottom: 12px;
          text-transform: uppercase;
          vertical-align: middle;
        }

        ._location_we_serve_title {
          font-family: 'Inter', sans-serif;
          font-size: 48px;
          font-weight: 700;
          line-height: 100%;
          color: #111;
          margin-bottom: 24px;
          vertical-align: middle;
        }

        ._location_we_serve_address-text {
          font-family: 'Inter', sans-serif;
          font-size: 18px;
          font-weight: 400;
          line-height: 24px;
          color: #777777;
          margin-bottom: 20px;
          min-height: 80px;
          vertical-align: middle;
        }

        ._location_we_serve_contact-info {
          margin-bottom: 30px;
        }

        ._location_we_serve_contact-item {
          font-size: 15px;
          color: #111;
          font-weight: 600;
          margin-bottom: 8px;
          display: flex;
          align-items: center;
          gap: 10px;
        }

        ._location_we_serve_button-group {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
        }

        ._location_we_serve_location-btn {
          padding: 12px 28px;
          border: 1px solid #ddd;
          border-radius: 8px;
          background: #fff;
          color: #444;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        ._location_we_serve_location-btn.active {
          background: #3E8CFB;
          color: #fff;
          border-color: #3E8CFB;
          box-shadow: 0 8px 24px rgba(62, 140, 251, 0.25);
        }

        ._location_we_serve_right-section {
          flex: 1;
          position: relative;
          min-width: 0;
          background: #FFFFFF;
          border-top-left-radius: 120px;
          border-bottom-left-radius: 120px;
          padding: 60px 40px 60px 60px;
          box-shadow: -20px 0 50px rgba(0,0,0,0.03);
          margin-left: 20px;
        }
        @media (max-width: 1024px) {
          ._location_we_serve_right-section {
            border-radius: 40px;
            padding: 24px 16px;
            margin-left: 0;
          }
        }
        @media (max-width: 600px) {
          ._location_we_serve_right-section {
            border-radius: 24px;
            padding: 16px 12px;
          }
        }

        /* ── Two-card paired layout ──
           LEFT  — active card (larger, full overlay + View on Map)
           RIGHT — next-in-cycle preview (smaller, name label only).
           Cards size by flex ratio so they always fill the right-section
           pane edge to edge — no horizontal cutting on any breakpoint. */
        ._location_we_serve_carousel-container {
          width: 100% !important;
          max-width: 100% !important;
          overflow: hidden !important;
          padding: 12px 0 !important;
        }

        ._location_we_serve_carousel-wrapper {
          display: flex !important;
          gap: 16px !important;
          width: 100% !important;
          align-items: stretch !important;
          transition: none !important;
          transform: none !important;
        }

        ._location_we_serve_card {
          position: relative !important;
          min-width: 0 !important;
          width: auto !important;
          height: 460px !important;
          border-radius: 24px !important;
          overflow: hidden !important;
          cursor: pointer !important;
          transition:
            flex-grow 0.55s cubic-bezier(0.16, 1, 0.3, 1),
            flex-basis 0.55s cubic-bezier(0.16, 1, 0.3, 1),
            box-shadow 0.3s ease,
            transform 0.3s ease,
            filter 0.4s ease !important;
        }

        /* Active = ~62% of the row */
        ._location_we_serve_card.is-active {
          flex: 1.7 1 0% !important;
          box-shadow: 0 24px 48px rgba(0, 0, 0, 0.18) !important;
        }

        /* Preview (next-in-cycle) = ~38% of the row */
        ._location_we_serve_card.is-preview {
          flex: 1 1 0% !important;
        }

        ._location_we_serve_card.is-preview:hover {
          transform: translateY(-3px) !important;
        }

        ._location_we_serve_card img {
          width: 100% !important;
          height: 100% !important;
          object-fit: cover !important;
          object-position: center center !important;
          display: block !important;
          transition: transform 0.4s ease, filter 0.4s ease !important;
        }

        ._location_we_serve_card.is-preview img {
          filter: brightness(0.92) saturate(0.95);
        }

        ._location_we_serve_card:focus-visible {
          outline: 3px solid #3E8CFB;
          outline-offset: 3px;
        }

        /* Preview overlay only shows the city name — no View on Map */
        ._location_we_serve_card-overlay--preview .\_location_we_serve_view-map-btn {
          display: none !important;
        }

        @media (max-width: 1024px) {
          ._location_we_serve_carousel-wrapper { gap: 12px !important; }
          ._location_we_serve_card { height: 360px !important; }
        }

        @media (max-width: 600px) {
          ._location_we_serve_carousel-wrapper { gap: 10px !important; }
          ._location_we_serve_card { height: 260px !important; border-radius: 18px !important; }
        }

        @media (max-width: 380px) {
          ._location_we_serve_card { height: 220px !important; }
        }

        ._location_we_serve_card-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(0,0,0,0.85) 0%, transparent 60%);
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          padding: 30px;
          color: #fff;
        }

        ._location_we_serve_card-title {
          font-size: 26px;
          font-weight: 800;
          margin-bottom: 12px;
        }

        ._location_we_serve_view-map-btn {
          background: #fff;
          color: #111;
          padding: 8px 18px;
          border-radius: 10px;
          font-size: 14px;
          font-weight: 700;
          text-decoration: none;
          display: inline-block;
          align-self: flex-start;
          transition: transform 0.2s ease, opacity 0.3s ease;
        }
        ._location_we_serve_view-map-btn:hover {
          transform: translateY(-2px);
          color: #3E8CFB;
        }
      `}</style>

      <section className="_location_we_serve_container">
        <LocationCarousel locations={locations} locationList={locationList} />
      </section>
    </>
  );
}