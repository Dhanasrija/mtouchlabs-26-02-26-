"use client";
import React, { useEffect, useRef, useState } from "react";

interface BuildMethodWrapperProps {
  children: React.ReactNode;
}

export function BuildMethodWrapper({ children }: BuildMethodWrapperProps) {
  const [inView, setInView] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // ⭐ Fire animation only ONCE — stop re-triggering on every scroll
    // that passes the section (was causing visible "jump/flicker").
    if (!containerRef.current) return;
    const el = containerRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect(); // lock the visible state in
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div 
      ref={containerRef}
      className={inView ? "bm-in-view" : ""}
    >
      {children}
    </div>
  );
}