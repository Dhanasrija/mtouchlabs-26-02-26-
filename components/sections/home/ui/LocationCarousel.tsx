"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

interface Location {
  key: string;
  name: string;
  address: string;
  phone: string;
  email: string;
  image: string;
  mapLink: string;
  index: number;
}

interface LocationCarouselProps {
  locations: Record<string, Location>;
  locationList: Location[];
}

export default function LocationCarousel({ locations, locationList }: LocationCarouselProps) {
  const [activeKey, setActiveKey] = useState("hyderabad");
  const [offset, setOffset] = useState(0);

  // Clones for loop animation
  const doubledList = [...locationList, ...locationList];

  useEffect(() => {
    const loc = locations[activeKey];
    if (loc) {
      setOffset(-loc.index * 300);
    }
  }, [activeKey, locations]);

  const activeLoc = locations[activeKey];

  return (
    <>
      <div className="_location_we_serve_left-section">
        <div className="_location_we_serve_contact-label">CONTACT US</div>
        <h2 className="_location_we_serve_title">
          Serving Clients <br />
          Worldwide
        </h2>

        <div className="_location_we_serve_address-text">
          {activeLoc?.address}
        </div>

        <div className="_location_we_serve_contact-info">
          <div className="_location_we_serve_contact-item">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
            </svg>
            {activeLoc?.phone}
          </div>
          <div className="_location_we_serve_contact-item">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
              <polyline points="22,6 12,13 2,6"/>
            </svg>
            {activeLoc?.email}
          </div>
        </div>

        <div className="_location_we_serve_button-group">
          {locationList.map((loc) => (
            <button
              key={loc.key}
              className={`_location_we_serve_location-btn ${activeKey === loc.key ? 'active' : ''}`}
              onClick={() => setActiveKey(loc.key)}
            >
              {loc.name}
            </button>
          ))}
        </div>
      </div>

      <div className="_location_we_serve_right-section">
        <div className="_location_we_serve_carousel-container">
          <div
            className="_location_we_serve_carousel-wrapper"
            style={{ transform: `translateX(${offset}px)` }}
          >
            {doubledList.map((loc, idx) => {
              const isActive = activeKey === loc.key && idx < 3;
              return (
                <div
                  key={idx}
                  className="_location_we_serve_card"
                  style={{ 
                    width: isActive ? '400px' : '300px', 
                    opacity: (idx >= 3) ? 0.4 : 1 
                  }}
                  onClick={() => {
                    if (idx < 3) setActiveKey(loc.key);
                  }}
                >
                  <img src={loc.image} alt={loc.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                  <div className="_location_we_serve_card-overlay">
                    <div className="_location_we_serve_card-title">{loc.name}</div>
                    <a
                      className="_location_we_serve_view-map-btn"
                      href={loc.mapLink}
                      target="_blank"
                      rel="noreferrer"
                      style={{ display: isActive ? 'block' : 'none' }}
                    >
                      View On Map →
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
