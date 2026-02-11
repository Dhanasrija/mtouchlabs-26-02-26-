import type { Metadata } from "next";
import HeroSection from "@/components/sections/home/HeroSection";
import TrustedPartnersSection from "@/components/sections/home/TrustedPartnersSection";
import DigitalSolutionsSection from "@/components/sections/home/DigitalSolutionsSection";
import WhyChooseSection from "@/components/sections/home/WhyChooseSection";
import WhatMakesDifferentSection from "@/components/sections/home/WhatMakesDifferentSection";
import WhyBusinessTrustSection from "@/components/sections/home/WhyBusinessTrustSection";
import IndustriesSection from "@/components/sections/home/IndustriesSection";
import TargetAudiencesSection from "@/components/sections/home/TargetAudiencesSection";
import TestimonialSection from "@/components/sections/home/TestimonialSection";
import PortfolioSection from "@/components/sections/home/PortfolioSection";
import TechnologiesSection from "@/components/sections/home/TechnologiesSection";
import AwardsSection from "@/components/sections/home/AwardsSection";
import BlogSection from "@/components/sections/home/BlogSection";
import LocationSection from "@/components/sections/home/LocationSection";
import FAQSection from "@/components/sections/home/FAQSection";

export const metadata: Metadata = {
  title: "Software Development Company | Web | Mobile App",
  description:
    "mTouch Labs delivers custom software development, mobile apps, web solutions, AI, and enterprise IT services to drive digital transformation.",
  keywords:
    "software development company, generative artificial intelligence, mobile app development, web development, ios app development",
  alternates: {
    canonical: "https://mtouchlabs.com/",
  },
  openGraph: {
    title: "Software Development | Web | Mobile App Development Company",
    description:
      "mTouch Labs delivers custom software development, mobile apps, web solutions, AI, and enterprise IT services to drive digital transformation.",
    url: "https://mtouchlabs.com",
    siteName: "mTouch Labs",
    type: "website",
    images: [
      {
        url: "https://mtouchlabs.com/images/web-and-mobile-app-development.png",
        alt: "Mobile App Development Services",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "mTouch Labs | Software & Mobile App Development Company",
    description:
      "mTouch Labs delivers custom software development, mobile apps, web solutions, AI, and enterprise IT services to drive digital transformation.",
    images: ["https://mtouchlabs.com/images/web-and-mobile-app-development.png"],
  },
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustedPartnersSection />
      <DigitalSolutionsSection />
      <WhyChooseSection />
      <WhatMakesDifferentSection />
      <WhyBusinessTrustSection />
      <IndustriesSection />
      <TargetAudiencesSection />
      <TestimonialSection />
      <PortfolioSection />
      <TechnologiesSection />
      <AwardsSection />
      <BlogSection />
      <LocationSection />
      <FAQSection />

      {/* Logo modal — shows all partner logos when "View All" is clicked */}
      <div className="modal-overlay hide" id="openlogoModal">
        <div className="logomodal">
          <div className="modal-content" style={{ background: "#fff", borderRadius: "20px", position: "relative" }}>
            <span className="js-close-logo-modal" style={{ position: "absolute", top: "15px", right: "20px", fontSize: "28px", cursor: "pointer", color: "#333", fontWeight: "bold" }}>&times;</span>
            <h3 style={{ marginBottom: "20px", fontSize: "22px", textAlign: "center" }}>Our Trusted Partners</h3>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: "20px", overflowY: "auto", maxHeight: "450px", padding: "10px" }}>
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
                <div key={i} style={{ border: "1px solid #eee", borderRadius: "12px", padding: "15px", display: "flex", alignItems: "center", justifyContent: "center", minHeight: "80px" }}>
                  <img src={`/images/home/tech/${logo}`} alt={logo.replace(/\.\w+$/, "")} style={{ maxWidth: "100px", maxHeight: "50px", objectFit: "contain" }} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}