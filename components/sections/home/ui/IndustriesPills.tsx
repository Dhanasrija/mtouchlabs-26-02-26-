"use client";

import { useEffect, useRef } from "react";
import { minifyCss } from "@/lib/inline-css";

// ── pill definitions ──────────────────────────────────────────────────────────
const PILLS = [
  { label: "Real Estate",     color: "blue",   fcx: 0.278, fcy: 0.700, stagger: 0 },
  // { label: "Real Estate",   color: "yellow", fcx: 0.590, fcy: 0.635, stagger: 1 },
  { label: "Education", color: "navy",   fcx: 0.620, fcy: 0.762, stagger: 2 },
  { label: "Healthcare",        color: "salmon", fcx: 0.222, fcy: 0.895, stagger: 3 },
  { label: "Fintech",        color: "pink",   fcx: 0.333, fcy: 0.895, stagger: 4 },
  { label: "Logistics",  color: "lime",   fcx: 0.460, fcy: 0.895, stagger: 5 },
  { label: "E-commerce",          color: "steel",  fcx: 0.608, fcy: 0.895, stagger: 6 },
  { label: "Startup & SaaS", color: "mint",   fcx: 0.786, fcy: 0.895, stagger: 7 },
] as const;

// ── timing constants ──────────────────────────────────────────────────────────
const STAGGER_MS   = 400;   // delay between each pill's drop
const DROP_MS      = 2400;  // duration of each fall
const FADE_MS      = 400;   // opacity ramp-up at start of drop
const JUMP_HEIGHT  = 38;    // px upward at hover peak
const JUMP_MS      = 800;   // total hover-jump round-trip duration
const START_Y      = -220;  // px above wrap top (drop origin)

// ── alternating start tilts ───────────────────────────────────────────────────
const START_ROTS = PILLS.map((_, i) => (i % 2 === 0 ? 14 : -14));

// ── easing functions ──────────────────────────────────────────────────────────
const easeOutQuart   = (t: number) => 1 - (1 - t) ** 4;
const easeInOutSine  = (t: number) => -(Math.cos(Math.PI * t) - 1) / 2;

export function IndustriesPills() {
  const wrapRef     = useRef<HTMLDivElement>(null);
  const pillRefs    = useRef<(HTMLDivElement | null)[]>([]);
  const dropRaf     = useRef<number | null>(null);
  const jumpRafs    = useRef<(number | null)[]>(PILLS.map(() => null));
  const settled     = useRef<boolean[]>(PILLS.map(() => false));
  const finalPos    = useRef<{ x: number; y: number }[]>(PILLS.map(() => ({ x: 0, y: 0 })));

  useEffect(() => {
    const wrap = wrapRef.current;
    if (!wrap) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      pillRefs.current.forEach((el) => {
        if (!el) return;
        el.style.opacity = "1";
        el.style.transform = "none";
      });
      return;
    }

    const resetPills = () => {
      if (dropRaf.current) cancelAnimationFrame(dropRaf.current);
      settled.current = PILLS.map(() => false);
      
      const wRect = wrap.getBoundingClientRect();
      const wW = wRect.width;
      const wH = wRect.height;
      
      PILLS.forEach((pill, i) => {
        const el = pillRefs.current[i];
        if (!el) return;
        const pRect = el.getBoundingClientRect();
        finalPos.current[i] = {
          x: pill.fcx * wW - pRect.width  / 2,
          y: pill.fcy * wH - pRect.height / 2,
        };
        const startX = wW / 2 - pRect.width / 2;
        el.style.opacity   = "0";
        el.style.transform = `translate(${startX}px, ${START_Y}px) rotate(${START_ROTS[i]}deg)`;
      });
    };

    const startAnimation = () => {
      resetPills();
      const animStart = performance.now();

      const frame = (now: number) => {
        let pending = false;
        const wW = wrap.getBoundingClientRect().width;

        PILLS.forEach((pill, i) => {
          if (settled.current[i]) return;
          const el = pillRefs.current[i];
          if (!el) return;

          const elapsed = now - animStart - pill.stagger * STAGGER_MS;
          if (elapsed < 0) { pending = true; return; }

          const t  = Math.min(elapsed / DROP_MS, 1);
          const fp = finalPos.current[i];
          const pRectWidth = el.getBoundingClientRect().width;
          const startX = wW / 2 - pRectWidth / 2;

          if (t < 1) {
            const curX   = startX + (fp.x - startX) * easeInOutSine(t);
            const curY   = START_Y + (fp.y - START_Y) * easeOutQuart(t);
            const curRot = START_ROTS[i] * (1 - easeInOutSine(t));
            const alpha  = Math.min(elapsed / FADE_MS, 1);

            el.style.opacity   = String(alpha);
            el.style.transform = `translate(${curX}px, ${curY}px) rotate(${curRot}deg)`;
            pending = true;
          } else {
            settled.current[i] = true;
            el.style.opacity   = "1";
            el.style.transform = `translate(${fp.x}px, ${fp.y}px)`;
          }
        });

        if (pending) dropRaf.current = requestAnimationFrame(frame);
      };

      dropRaf.current = requestAnimationFrame(frame);
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          startAnimation();
        } else {
          // Reset when leaving to allow re-triggering
          if (dropRaf.current) cancelAnimationFrame(dropRaf.current);
          settled.current = PILLS.map(() => false);
        }
      });
    }, { threshold: 0.1 });

    observer.observe(wrap);

    return () => {
      observer.disconnect();
      if (dropRaf.current) cancelAnimationFrame(dropRaf.current);
      jumpRafs.current.forEach(r => { if (r !== null) cancelAnimationFrame(r); });
    };
  }, []);

  const handleMouseEnter = (i: number) => {
    if (!settled.current[i]) return;
    const el = pillRefs.current[i];
    if (!el) return;

    if (jumpRafs.current[i] !== null) {
      cancelAnimationFrame(jumpRafs.current[i]!);
      jumpRafs.current[i] = null;
    }

    const fp    = finalPos.current[i];
    const start = performance.now();

    const jump = (now: number) => {
      const t          = Math.min((now - start) / JUMP_MS, 1);
      const sineArc    = Math.sin(Math.PI * t);
      const jumpOffset = -JUMP_HEIGHT * sineArc;
      const scale      = 1 + 0.07 * sineArc;

      if (t < 1) {
        el.style.transform  = `translate(${fp.x}px, ${fp.y + jumpOffset}px) scale(${scale})`;
        jumpRafs.current[i] = requestAnimationFrame(jump);
      } else {
        el.style.transform  = `translate(${fp.x}px, ${fp.y}px)`;
        jumpRafs.current[i] = null;
      }
    };

    jumpRafs.current[i] = requestAnimationFrame(jump);
  };

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: minifyCss(`
        /* Pill base overrides for JS-driven layout */
        .ind-pill--js {
          left: 0;
          top: 0;
          will-change: transform;
          cursor: default;
        }

        /* Mobile: drop absolute layout, show pills in a flex wrap */
        @media (max-width: 768px) {
          .ind-pills-wrap--js {
            display: flex !important;
            flex-wrap: wrap;
            justify-content: center;
            gap: 12px;
            height: auto !important;
            min-height: unset !important;
            margin-top: 0 !important;
          }
          .ind-pill--js {
            position: static !important;
            transform: none !important;
            opacity: 1 !important;
          }
        }

        /* Reduced-motion: show pills statically */
        @media (prefers-reduced-motion: reduce) {
          .ind-pills-wrap--js {
            display: flex !important;
            flex-wrap: wrap;
            justify-content: center;
            gap: 12px;
            height: auto !important;
            min-height: unset !important;
          }
          .ind-pill--js {
            position: static !important;
            transform: none !important;
            opacity: 1 !important;
          }
        }
      `)}} />

      <div
        ref={wrapRef}
        className="ind-pills-wrap ind-pills-wrap--js"
      >
        {PILLS.map((pill, i) => (
          <div
            key={i}
            ref={el => { pillRefs.current[i] = el; }}
            className={`ind-pill ind-pill--${pill.color} ind-pill--js`}
            onMouseEnter={() => handleMouseEnter(i)}
          >
            {pill.label}
          </div>
        ))}
      </div>
    </>
  );
}
