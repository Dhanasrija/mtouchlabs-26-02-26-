"use client";
import React, { useEffect, useRef, useState } from "react";

interface BuildMethodWrapperProps {
  children: React.ReactNode;
}

export function BuildMethodWrapper({ children }: BuildMethodWrapperProps) {
  const [inView, setInView] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
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