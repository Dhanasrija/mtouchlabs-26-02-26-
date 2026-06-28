"use client";
import React, { useRef, useState, useEffect } from "react";
import { BlurText } from "@/components/sections/home/ui/BlurText";

interface Testimonial {
  image: string;
  icon: string;
  quote: string;
  name: string;
  company: string;
}

export default function TestimonialCarousel({ testimonials }: { testimonials: Testimonial[] }) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem("testimonialAnimated")) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          sessionStorage.setItem("testimonialAnimated", "true");
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const amount = scrollRef.current.clientWidth * 0.5;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -amount : amount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="testi-carousel-root" ref={containerRef}>
      <div className="testi-nav-btns-container">
        <div className="testi-nav-btns">
          <button className="testi-nav-btn" onClick={() => scroll("left")}>
            <img width={72} height={72} loading="lazy" decoding="async" src="/images/home/testmonial/left.webp" alt="Previous" className="testi-nav-icon" />
          </button>
          <button className="testi-nav-btn" onClick={() => scroll("right")}>
            <img width={72} height={72} loading="lazy" decoding="async" src="/images/home/testmonial/right.webp" alt="Next" className="testi-nav-icon" />
          </button>
        </div>
      </div>

      <div className="testi-scroll-wrap" ref={scrollRef}>
        {testimonials.map((t, i) => (
          <div
            className={`testi-card${isVisible ? " testi-card-enter" : ""}`}
            key={i}
            style={{ animationDelay: `${isVisible ? 0.2 + i * 0.15 : 0}s` }}
          >
            <img
              className="testi-card-photo"
              src={t.image}
              alt={t.name}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
            <div className="testi-card-overlay" />
            <div className="testi-card-bottom">
              <img src={t.icon} alt="quote" className="testi-quote-icon" />
              <BlurText text={t.quote} delay={0.2 + i * 0.1} className="testi-quote-text" />
              <p className="testi-card-name">-{t.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
