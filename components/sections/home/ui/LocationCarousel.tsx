"use client";
import React, { useState } from "react";

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

/**
 * LocationCarousel — two-card paired display.
 *
 * Renders exactly two cards at a time:
 *   • LEFT  — the active location (larger, full overlay + View on Map)
 *   • RIGHT — the next location in the cycle (smaller thumbnail, name label)
 *
 * Cycle order matches `locationList`:
 *   hyderabad → bangalore → usa → hyderabad → ...
 *
 * Each card is bound directly to its own `loc.image`, so there is no way
 * for the displayed image to desync from the label. No carousel offsets,
 * no transforms, no clones.
 */
export default function LocationCarousel({ locations, locationList }: LocationCarouselProps) {
  const [activeKey, setActiveKey] = useState("hyderabad");

  const activeLoc = locations[activeKey] ?? locationList[0];
  const activeIndex = locationList.findIndex((l) => l.key === activeLoc.key);
  const nextLoc =
    locationList[(activeIndex + 1) % locationList.length] ?? locationList[0];

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
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            {activeLoc?.phone}
          </div>
          <div className="_location_we_serve_contact-item">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
            {activeLoc?.email}
          </div>
        </div>

        <div className="_location_we_serve_button-group">
          {locationList.map((loc) => (
            <button
              key={loc.key}
              className={`_location_we_serve_location-btn ${activeKey === loc.key ? "active" : ""}`}
              onClick={() => setActiveKey(loc.key)}
              type="button"
            >
              {loc.name}
            </button>
          ))}
        </div>
      </div>

      <div className="_location_we_serve_right-section">
        <div className="_location_we_serve_carousel-container">
          <div className="_location_we_serve_carousel-wrapper">
            {/* LEFT (active) */}
            <div
              key={`active-${activeLoc.key}`}
              className="_location_we_serve_card is-active"
              role="button"
              tabIndex={0}
              aria-pressed
              aria-label={`${activeLoc.name} office details`}
            >
              <img
                src={activeLoc.image}
                alt={activeLoc.name}
                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
              />
              <div className="_location_we_serve_card-overlay">
                <div className="_location_we_serve_card-title">{activeLoc.name}</div>
                <a
                  className="_location_we_serve_view-map-btn"
                  href={activeLoc.mapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View On Map →
                </a>
              </div>
            </div>

            {/* RIGHT (next-in-cycle preview) */}
            <div
              key={`preview-${nextLoc.key}`}
              className="_location_we_serve_card is-preview"
              onClick={() => setActiveKey(nextLoc.key)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setActiveKey(nextLoc.key);
                }
              }}
              aria-label={`Show ${nextLoc.name} office details`}
            >
              <img
                src={nextLoc.image}
                alt={nextLoc.name}
                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
              />
              <div className="_location_we_serve_card-overlay _location_we_serve_card-overlay--preview">
                <div className="_location_we_serve_card-title">{nextLoc.name}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
