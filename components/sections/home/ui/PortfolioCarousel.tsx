"use client";
import React, { useState, useEffect } from "react";

interface PortfolioItem {
  href: string;
  img: string;
  imgAlt?: string;
  title: string;
  tags: string;
  isDefault: boolean;
}

export default function PortfolioCarousel({ items }: { items: PortfolioItem[] }) {
  const [page, setPage] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const perPage = isMobile ? 1 : 3;
  const totalPages = Math.ceil(items.length / perPage);
  const visible = items.slice(page * perPage, page * perPage + perPage);

  const goNext = () => { if (page < totalPages - 1) { setPage(p => p + 1); setActiveIndex(0); } };
  const goPrev = () => { if (page > 0) { setPage(p => p - 1); setActiveIndex(0); } };

  return (
    <div className="pf-carousel">

      <button className="pf-nav" aria-label="Previous" onClick={goPrev} disabled={page === 0}>
        <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </button>

      <div className="pf-track">
        {visible.map((item, i) => (
          <div
            key={`${page}-${i}`}
            className={`pf-card${(isMobile || activeIndex === i) ? " pf-card--active" : ""}`}
            onMouseEnter={() => setActiveIndex(i)}
          >
            <div className="pf-img">
              <img src={item.img} alt={item.imgAlt ?? item.title} loading="lazy" />
            </div>

            <a href={item.href} className="pf-icon" aria-label={item.title} onClick={e => e.stopPropagation()}>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
                <path d="M7 17L17 7M17 7H7M17 7V17"
                  stroke="#fff" strokeWidth="2.5"
                  strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>

            <div className="pf-info">
              <h4 className="pf-card-title">
                <a href={item.href} onClick={e => e.stopPropagation()}>{item.title}</a>
              </h4>
              <p className="pf-card-tags">{item.tags}</p>
            </div>
          </div>
        ))}
      </div>

      <button className="pf-nav" aria-label="Next" onClick={goNext} disabled={page === totalPages - 1}>
        <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </button>

    </div>
  );
}