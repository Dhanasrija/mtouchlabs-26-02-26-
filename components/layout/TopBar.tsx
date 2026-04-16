"use client";

import React from "react";

export default function TopBar() {
  return (
    <>
      

      <div className="top-header">

        {/* ── LEFT: email ── */}
        <div style={{ display: "flex", alignItems: "center", flexShrink: 0 }}>
          <a
            href="mailto:contact@mtouchlabs.com"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              textDecoration: "none",
              fontWeight: 500,
              color: "inherit",
            }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
            <span className="tb-email-text">contact@mtouchlabs.com</span>
          </a>
        </div>

        {/* ── CENTER: phone numbers ── */}
        <div className="tb-phone-center">
          <span style={{ display: "inline-flex", alignItems: "center", gap: "7px", marginRight: "15px" }}>
            <img src="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.4.6/flags/4x3/us.svg" alt="USA" width="18" height="12" style={{ borderRadius: "1px" }} />
            <a href="tel:+15512220070" style={{ fontSize: "12.5px", textDecoration: "none", color: "inherit", fontWeight: 400 }}>+1 (551) 222-0070</a>
          </span>
          <span style={{ display: "inline-flex", alignItems: "center", gap: "7px" }}>
            <img src="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.4.6/flags/4x3/in.svg" alt="India" width="18" height="12" style={{ borderRadius: "1px" }} />
            <a href="tel:+919390683154" style={{ fontSize: "12.5px", textDecoration: "none", color: "inherit", fontWeight: 400 }}>+91 9390683154</a>
          </span>
        </div>

        {/* ── RIGHT: globe + India text (no dropdown) ── */}
        <div className="tb-location">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <line x1="2" y1="12" x2="22" y2="12" />
            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
          </svg>
          <span>India</span>
        </div>

      </div>
    </>
  );
}