"use client";

import { useEffect, useRef } from "react";

function useSlotCount(
  ref: React.RefObject<HTMLElement>,
  target: string,
  duration = 1800
) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const digits = '0123456789';
    const chars = target.split('');
    const digitIndexes = chars
      .map((c, i) => (digits.includes(c) ? i : -1))
      .filter(i => i !== -1);

    let rafId: number;

    const observer = new IntersectionObserver(([entry]) => {
      if (!el) return;

      if (!entry.isIntersecting) {
        // Reset to 0 when out of view so it re-animates next time
        cancelAnimationFrame(rafId);
        el.textContent = chars
          .map(ch => (digits.includes(ch) ? '0' : ch))
          .join('');
        return;
      }

      // In view – start the slot animation
      cancelAnimationFrame(rafId);
      let startTime: number | null = null;

      function animate(ts: number) {
        if (!el) return;
        if (!startTime) startTime = ts;
        const progress = Math.min((ts - startTime) / duration, 1);

        const result = chars.map((ch, i) => {
          if (!digits.includes(ch)) return ch;
          const pos = digitIndexes.indexOf(i);
          const lockAt = ((pos + 1) / digitIndexes.length) * 0.85;
          if (progress >= lockAt) return ch;
          return digits[Math.floor((ts / 50 + i) % 10)];
        });

        el.textContent = result.join('');

        if (progress < 1) {
          rafId = requestAnimationFrame(animate);
        } else {
          el.textContent = target;
        }
      }

      rafId = requestAnimationFrame(animate);
    }, { threshold: 0.3 });

    observer.observe(el);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(rafId);
    };
  }, [ref, target, duration]);
}

export default function StatCounter({ value, label }: { value: string; label: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  useSlotCount(ref as React.RefObject<HTMLElement>, value);

  return (
    <div className="wcs2-stat">
      <span ref={ref} className="wcs2-num">{value}</span>
      <p>{label}</p>
    </div>
  );
}
