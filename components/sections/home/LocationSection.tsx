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
    image: "https://images.unsplash.com/photo-1485871981521-5b1fd3805eee?w=1200&q=80&auto=format&fit=crop",
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
          padding: 80px 20px 80px 80px;
          box-shadow: -20px 0 50px rgba(0,0,0,0.03);
          margin-left: 20px;
          margin-right: -100px; /* Slight breakout to ensure overlap with screen edge */
          padding-right: 150px; /* Buffer for the curve */
        }
        @media (max-width: 1024px) {
          ._location_we_serve_right-section {
            border-radius: 40px;
            padding: 40px 0 40px 20px;
            margin-left: 0;
          }
        }

        ._location_we_serve_carousel-container {
          width: 100%;
          overflow: hidden;
          padding: 20px 0;
        }

        ._location_we_serve_carousel-wrapper {
          display: flex;
          gap: 12px;
          transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
          width: max-content;
        }

        ._location_we_serve_card {
          position: relative;
          height: 400px;
          border-radius: 24px;
          overflow: hidden;
          cursor: pointer;
          transition: width 0.6s cubic-bezier(0.16, 1, 0.3, 1), transform 0.6s ease;
          flex-shrink: 0;
        }

        ._location_we_serve_card img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.4s ease;
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