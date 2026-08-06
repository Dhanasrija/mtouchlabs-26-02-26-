"use client";

import React, { useRef } from "react";

interface BlurTextProps {
  text: string;
  className?: string;
  style?: React.CSSProperties;
  delay?: number;
}

/*
  BlurText — per-character blur/fade-in reveal.

  PERFORMANCE NOTE (why the split is client-side):
  This effect needs one <span class="blur-text-char"> per character, and each
  of those costs ~70 bytes of HTML. Across the homepage that was ~1,900 spans
  ≈ 134 KB — about 16% of the whole document — and every one of them was dead
  weight in the server response, because `.blur-text-char` is `opacity: 0`
  until the `.in-view` class is added, and that class is only ever added here
  on the client after IntersectionObserver fires. So the server was shipping
  134 KB of markup that was invisible until JS ran and then re-rendered.

  Now the server (and the first client render, so hydration matches) emits the
  heading as a single text node inside one wrapper span. The per-character
  spans are built only once the element scrolls into view — the exact moment
  the animation is about to play. The visible result is identical:
    - before reveal: text hidden (opacity 0), same as `.blur-text-char` was
    - line breaking: unchanged — words were already wrapped in
      `white-space: nowrap` boxes, so breaks happened at spaces only, which is
      also how the plain text node wraps
*/
export const BlurText = ({ text, className, style, delay = 0 }: BlurTextProps) => {
  const ref = useRef<HTMLSpanElement>(null);
  const [inView, setInView] = React.useState(false);

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    // No IntersectionObserver (very old browsers / some crawlers): reveal at
    // once rather than leaving the text permanently invisible.
    if (typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setInView(true); observer.disconnect(); } },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const wrapperStyle: React.CSSProperties = { display: "inline-block", ...style };

  // ── Server render + pre-reveal client render: one span, one text node. ──
  if (!inView) {
    return (
      <span ref={ref} className={className} style={wrapperStyle}>
        <span style={{ opacity: 0 }}>{text}</span>
      </span>
    );
  }

  // ── In view: expand into the animated per-character spans. ──
  const words = text.split(" ");
  let charIndex = 0;

  return (
    <span ref={ref} className={className} style={wrapperStyle}>
      {words.map((word, wordIndex) => (
        <span key={wordIndex} style={{ display: "inline-block", whiteSpace: "nowrap" }}>
          {word.split("").map((char, ci) => {
            // Rounded to 3dp — raw float math produced delays such as
            // "0.16999999999999998s", 17 wasted bytes per character.
            const currentDelay = Math.round((delay + charIndex * 0.04) * 1000) / 1000;
            charIndex++;
            return (
              <span
                key={ci}
                className="blur-text-char in-view"
                style={{ animationDelay: `${currentDelay}s` }}
              >
                {char}
              </span>
            );
          })}
          {wordIndex < words.length - 1 && <span>&nbsp;</span>}
        </span>
      ))}
    </span>
  );
};
