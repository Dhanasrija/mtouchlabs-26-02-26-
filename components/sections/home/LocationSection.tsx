"use client";
/*
  Marked "use client" as an HTML-payload optimisation, not for interactivity.
  As a server component this section's element tree was serialised a second time
  into the inlined RSC flight payload on every request. As a client component the
  SSR'd HTML is byte-for-byte identical, but the tree is no longer duplicated —
  its JSX lives in a cacheable JS chunk instead.
*/
import React from "react";
import Link from "next/link";
import LocationCarousel from "./ui/LocationCarousel";

const locations = {
  hyderabad: {
    key: "hyderabad",
    name: "Hyderabad",
    address: "mTouch Labs Private Limited, #514, Manjeera Trinity Corporate, JNTU – Hitech City Road, Kukatpally, Hyderabad – 500072",
    phone: "+91-9390683154",
    email: "contact@mtouchlabs.com",
    image: "/images/hyderabad.webp",
    mapLink: "https://www.google.com/maps/place/mTouch+Labs+Pvt+Ltd+-+Software+Development+Company/@17.4892271,78.3901496,791m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3bcb90cec63e97d9:0xb045c9dc22129055!8m2!3d17.489222!4d78.3927245!16s%2Fg%2F11b8zhlwcv",
    index: 0
  },
  bangalore: {
    key: "bangalore",
    name: "Bangalore",
    address: "mTouch Labs Private Limited, #101, 4th Main Rd, Gayathri Layout, Vijaya Bank Layout, Bilekahalli, Bengaluru, Karnataka - 560076",
    phone: "+91-9014793487",
    email: "contact@mtouchlabs.com",
    image: "/images/bangalore.webp",
    mapLink: "https://www.google.com/maps/search/?api=1&query=mTouch+Labs+Bilekahalli+Bengaluru+Karnataka+560076",
    index: 1
  },
  usa: {
    key: "usa",
    name: "USA",
    address: "1111b South Governors Avenue, Suite 48193, Dover, Delaware (DE)-19904 United States (US)",
    phone: "+1 (551) 222-0070",
    email: "contact@mtouchlabs.com",
    image: "/images/usa.webp",
    mapLink: "https://maps.app.goo.gl/amg7vRf4qFy6BFZW9",
    index: 2
  }
};

const locationList = [locations.hyderabad, locations.bangalore, locations.usa];

export default function LocationSection() {
  return (
    <>
      

      <section className="_location_we_serve_container">
        <LocationCarousel locations={locations} locationList={locationList} />
        {/* Contextual link to the Hyderabad location page. The head office is
            our largest delivery centre; this points local commercial intent at
            the page that actually serves it. */}
        <p className="_location_we_serve_note" style={{ textAlign: "center", marginTop: "1.25rem" }}>
          Read more about{" "}
          <Link href="/software-development-company-hyderabad">custom software development in Hyderabad</Link>{" "}
          at our head office.
        </p>
      </section>
    </>
  );
}