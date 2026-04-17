"use client";

import React, { useEffect, useRef, useState } from "react";

function useInView(ref: React.RefObject<HTMLElement | null>, amount = 0.5) {
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { setInView(entry.isIntersecting); },
      { threshold: amount }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [ref, amount]);
  return inView;
}

function useCounter(end: number, decimals: number, suffix: string, started: boolean) {
  // Initialize at `end` so SSR + first paint show the final value, preventing a flash of "0.0".
  const [value, setValue] = useState(end);
  const [hasAnimated, setHasAnimated] = useState(false);
  useEffect(() => {
    if (!started || hasAnimated) return;
    // When animation is about to begin, reset to 0 then animate up.
    setValue(0);
    let startTime: number | null = null;
    let rafId: number;
    const duration = 1800;
    function step(timestamp: number) {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(parseFloat((eased * end).toFixed(decimals)));
      if (progress < 1) {
        rafId = requestAnimationFrame(step);
      } else {
        setHasAnimated(true);
      }
    }
    rafId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafId);
  }, [started, end, decimals, hasAnimated]);
  return `${value.toFixed(decimals)}${suffix}`;
}

const AnimatedBlurText = ({ text, delay = 0 }: { text: string; delay?: number }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, 0.5);

  return (
    <span ref={ref} style={{ display: "inline-block" }}>
      {text.split(" ").map((word, wordIndex) => (
        <span key={wordIndex} style={{ display: "inline-block", whiteSpace: "nowrap", marginRight: "0.25em" }}>
          {word.split("").map((char, ci) => (
            <span
              key={ci}
              className={`mtl-blur-char${isInView ? " in-view" : ""}`}
              style={{ display: "inline-block", animationDelay: `${delay + (wordIndex * 0.1) + (ci * 0.012)}s` }}
            >
              {char}
            </span>
          ))}
        </span>
      ))}
    </span>
  );
};

const DigitBlurCounter = ({
  value,
  end,
  decimals = 0,
  suffix = "",
  delay = 0
}: {
  value: string;
  end: number;
  decimals?: number;
  suffix?: string;
  delay?: number;
}) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, 0.5);
  const finalStr = `${end.toFixed(decimals)}${suffix}`;
  // Use the animated value when long enough; otherwise show the final string
  const displayStr = (value && value.length >= finalStr.length) ? value : finalStr;

  return (
    <span ref={ref} style={{ display: "inline-block" }}>
      {finalStr.split("").map((char, i) => (
        <span
          key={i}
          className={`mtl-digit-blur${isInView ? " in-view" : ""}`}
          style={{
            display: "inline-block",
            minWidth: char === "." ? "auto" : "0.6em",
            textAlign: "left",
            animationDelay: `${delay + (i * 0.05)}s`,
          }}
        >
          {displayStr[i] ?? char}
        </span>
      ))}
    </span>
  );
};

export default function StatsBar() {
  const statsRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const statsItemsRef = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);

  const isHeadingInView = useInView(headingRef);
  const isStatsInView = useInView(statsItemsRef);

  useEffect(() => {
    const el = statsRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { setStarted(entry.isIntersecting); },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const yearsVal = useCounter(14, 0, "+", started);
  const ratingVal = useCounter(4.9, 1, "", started);
  const ratingLabelVal = useCounter(5.0, 1, "", started);

  return (
    <div className="mtl-stats-bar" ref={statsRef}>
      <div
        ref={headingRef}
        className={`mtl-stats-heading mtl-heading-slide${isHeadingInView ? " in-view" : ""}`}
      >
        <AnimatedBlurText text="Successfully Delivered Government" />
        <br />
        <AnimatedBlurText text="& Enterprise-Grade Solutions" />
      </div>

      <div
        ref={statsItemsRef}
        className={`mtl-stats-items mtl-stats-slide${isStatsInView ? " in-view" : ""}`}
      >
        <div className={`mtl-stat-item mtl-stat-fade${isStatsInView ? " in-view" : ""}`} style={{ animationDelay: "0.2s" }}>
          <div className="mtl-stat-number">
            <DigitBlurCounter value={yearsVal} end={14} suffix="+" delay={0.5} />
          </div>
          <div className="mtl-stat-label">Years Industry<br />Experience</div>
        </div>

        <div className={`mtl-stat-item mtl-stat-fade${isStatsInView ? " in-view" : ""}`} style={{ animationDelay: "0.4s" }}>
          <div className="mtl-stat-number">
            <DigitBlurCounter value={ratingVal} end={4.9} decimals={1} delay={0.18} />
          </div>
          <div className="mtl-stat-stars">
            <span
              className={`mtl-rating-label${isStatsInView ? " in-view" : ""}`}
              style={{ marginRight: "4px" }}
            >
              {ratingLabelVal}
            </span>
            {[...Array(5)].map((_, i) => (
              <span
                key={i}
                className={`mtl-star-pop${isStatsInView ? " in-view" : ""}`}
                style={{ animationDelay: `${1.4 + (i * 0.1)}s` }}
              >
                ★
              </span>
            ))}
          </div>
          <div className="mtl-stat-label">3,595 Rating</div>
        </div>
      </div>
    </div>
  );
}
