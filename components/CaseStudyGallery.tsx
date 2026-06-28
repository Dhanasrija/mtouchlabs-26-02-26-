'use client';

import { useState } from 'react';

interface CaseStudyGalleryProps {
  images: string[];
  title: string;
}

const FALLBACK = '/images/case-study-banner.webp';

export default function CaseStudyGallery({ images, title }: CaseStudyGalleryProps) {
  const [errored, setErrored] = useState<Record<number, boolean>>({});

  if (!images || images.length === 0) return null;

  const srcOf = (i: number) => (errored[i] ? FALLBACK : images[i]);

  // Duplicate the list so the marquee can loop seamlessly (translateX -50%).
  const loop = [...images, ...images];

  // Slower for fewer images, a touch faster for more — keeps a steady pace.
  const duration = Math.max(18, images.length * 6);

  return (
    <div className="csg-marquee" aria-label={`${title} gallery`}>
      <div
        className="csg-track"
        style={{ animationDuration: `${duration}s` }}
      >
        {loop.map((img, i) => {
          const realIndex = i % images.length;
          return (
            <div className="csg-item" key={i} aria-hidden={i >= images.length}>
              <img
                src={srcOf(realIndex)}
                alt={`${title} — screenshot ${realIndex + 1} of ${images.length}`}
                loading="lazy"
                draggable={false}
                onError={() => setErrored((p) => ({ ...p, [realIndex]: true }))}
              />
            </div>
          );
        })}
      </div>

      <style jsx>{`
        .csg-marquee {
          position: relative;
          width: 100%;
          margin-top: 1.25rem;
          overflow: hidden;
          border-radius: 16px;
          /* soft fade on both edges so images glide in/out cleanly */
          -webkit-mask-image: linear-gradient(
            to right,
            transparent 0,
            #000 6%,
            #000 94%,
            transparent 100%
          );
          mask-image: linear-gradient(
            to right,
            transparent 0,
            #000 6%,
            #000 94%,
            transparent 100%
          );
        }
        .csg-track {
          display: flex;
          width: max-content;
          gap: 20px;
          animation-name: csgScroll;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
          will-change: transform;
        }
        /* Pause when the user hovers anywhere over the strip */
        .csg-marquee:hover .csg-track {
          animation-play-state: paused;
        }
        .csg-item {
          flex: 0 0 auto;
          width: 440px;
          height: 257px; /* 1200x700 native ratio — image stays fully visible */
          border: 1px solid #e8eaef;
          border-radius: 14px;
          overflow: hidden;
          background: #f6f8fb;
          box-shadow: 0 6px 20px rgba(15, 23, 42, 0.07);
        }
        .csg-item img {
          width: 100%;
          height: 100%;
          object-fit: cover; /* native ratio matches the box, so nothing is cropped */
          object-position: center;
          display: block;
        }
        @keyframes csgScroll {
          from {
            transform: translateX(0);
          }
          to {
            /* shift by exactly one copy (half the doubled track + one gap) */
            transform: translateX(calc(-50% - 10px));
          }
        }
        @media (max-width: 768px) {
          .csg-item {
            width: 320px;
            height: 187px;
          }
        }
        @media (max-width: 480px) {
          .csg-item {
            width: 260px;
            height: 152px;
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .csg-track {
            animation: none;
            flex-wrap: wrap;
            justify-content: center;
          }
        }
      `}</style>
    </div>
  );
}
