"use client";

import React, { useEffect, useRef, useCallback } from "react";

const galleryImages = [
  { src: "/images/hero/Devops.png", alt: "development" },
  { src: "/images/hero/DigitalMarketing.png", alt: "Digital Marketing" },
  { src: "/images/hero/MobileappDevelopment.png", alt: "Mobile app Development" },
  { src: "/images/hero/Salesforce.png", alt: "Software Development" },
  { src: "/images/hero/SMEINSPIRE.png", alt: "SME Inspire" },
  { src: "/images/hero/WebDevelopment.png", alt: "Web Development" },
];

// 4 copies for seamless looping
const loopImages = [
  ...galleryImages,
  ...galleryImages,
  ...galleryImages,
  ...galleryImages,
];

export default function ScrollGallery() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const apply3D = useCallback(() => {
    const wrap = wrapRef.current;
    const cards = cardRefs.current;
    if (!wrap || !cards) return;

    const rect = wrap.getBoundingClientRect();
    const center = rect.left + rect.width / 2;

    for (let i = 0; i < cards.length; i++) {
      const card = cards[i];
      if (!card) continue;

      const r = card.getBoundingClientRect();
      const c = r.left + r.width / 2;

      let dist = (c - center) / (rect.width / 2);
      dist = Math.max(-1, Math.min(1, dist));

      const absDist = Math.abs(dist);
      const rotateY = dist * -50;
      const scaleVal = 0.85 + absDist * absDist * 0.3;
      const translateZ = absDist * 100;
      const translateY = absDist * absDist * -40;

      card.style.transform = `perspective(900px) rotateY(${rotateY}deg) scale(${scaleVal}) translateZ(${translateZ}px) translateY(${translateY}px)`;
      card.style.opacity = "1";
      card.style.zIndex = `${Math.round(100 + absDist * 100)}`;
    }
  }, []);

  useEffect(() => {
    const wrap = wrapRef.current;
    const track = trackRef.current;
    if (!wrap || !track) return;

    // Single accumulating offset (always negative, moving left)
    let offset = 0;
    // Width of ONE set of images — computed after mount
    let oneSetWidth = 0;
    let lastScroll = window.scrollY;
    let rafId = 0;
    let ready = false;

    const init = () => {
      // track has 4 copies; one set = track.scrollWidth / 4
      oneSetWidth = track.scrollWidth / 4;
      // Start so the second copy is visible at center (prevents seeing edge on first frame)
      offset = -oneSetWidth;
      ready = true;
    };

    requestAnimationFrame(init);

    const onScroll = () => {
      if (!ready) return;
      const scrollY = window.scrollY;
      const delta = scrollY - lastScroll;
      lastScroll = scrollY;

      const rect = wrap.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        offset -= delta * 1.8;
      }
    };

    const animate = () => {
      if (!ready) {
        rafId = requestAnimationFrame(animate);
        return;
      }

      const rect = wrap.getBoundingClientRect();
      const wh = window.innerHeight;

      // Auto-advance when visible
      if (rect.top < wh && rect.bottom > 0) {
        offset -= 0.5;
      }

      // Seamless loop: wrap within [-2*oneSetWidth, -oneSetWidth)
      // We use 4 copies so there's always content on both sides
      if (oneSetWidth > 0) {
        if (offset <= -oneSetWidth * 2) offset += oneSetWidth;
        if (offset > 0) offset -= oneSetWidth;
      }

      track.style.transform = `translateX(${offset}px)`;
      apply3D();
      rafId = requestAnimationFrame(animate);
    };

    lastScroll = window.scrollY;
    window.addEventListener("scroll", onScroll, { passive: true });
    rafId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(rafId);
    };
  }, [apply3D]);

  return (
    <div className="mtl-cgallery-wrap" ref={wrapRef}>
      <div className="mtl-cgallery-track" ref={trackRef}>
        {loopImages.map((img, i) => (
          <div
            key={i}
            className="mtl-cgallery-card"
            ref={(el) => { cardRefs.current[i] = el; }}
          >
            <img src={img.src} alt={img.alt} loading="lazy" />
          </div>
        ))}
      </div>
    </div>
  );
}
