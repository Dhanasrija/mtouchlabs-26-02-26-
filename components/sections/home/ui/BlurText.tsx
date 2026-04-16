"use client";

import React, { useRef } from "react";

interface BlurTextProps {
  text: string;
  className?: string;
  style?: React.CSSProperties;
  delay?: number;
}

export const BlurText = ({ text, className, style, delay = 0 }: BlurTextProps) => {
  const words = text.split(" ");
  const ref = useRef<HTMLSpanElement>(null);
  const [inView, setInView] = React.useState(false);

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setInView(true); observer.disconnect(); } },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  let charIndex = 0;

  return (
    <>
      
      <span
        ref={ref}
        className={className}
        style={{ display: "inline-block", ...style }}
      >
        {words.map((word, wordIndex) => (
          <span key={wordIndex} style={{ display: "inline-block", whiteSpace: "nowrap" }}>
            {word.split("").map((char, ci) => {
              const currentDelay = delay + charIndex * 0.04;
              charIndex++;
              return (
                <span
                  key={ci}
                  className={`blur-text-char${inView ? " in-view" : ""}`}
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
    </>
  );
};