"use client";

import { useState } from "react";
import Image from "next/image";

type Card = {
  iconSrc: string;
  iconAlt: string;
  title: string;
  description: string;
  image: string;
};

export default function MobileCardCarousel({ cards }: { cards: Card[] }) {
  const [current, setCurrent] = useState(0);

  const goPrev = () => setCurrent((p) => Math.max(0, p - 1));
  const goNext = () => setCurrent((p) => Math.min(cards.length - 1, p + 1));

  const card = cards[current];

  return (
    <div className="wmc-carousel">
      {/* Left arrow */}
      <button
        className="wmc-nav"
        aria-label="Previous"
        onClick={goPrev}
        disabled={current === 0}
      >
        <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </button>

      {/* Card */}
      <div className="wmc-card" key={current}>
        <div className="wmc-card-img">
          <Image
            src={card.image}
            alt={card.title}
            fill
            sizes="(max-width: 768px) 85vw"
            style={{ objectFit: "cover" }}
            unoptimized
          />
        </div>
        <div className="wmc-card-body">
          <div className="wmc-icon-box">
            <Image src={card.iconSrc} alt={card.iconAlt} width={28} height={28} />
          </div>
          <h3 className="wmc-card-title">{card.title}</h3>
          <p className="wmc-card-desc">{card.description}</p>
        </div>
      </div>

      {/* Right arrow */}
      <button
        className="wmc-nav"
        aria-label="Next"
        onClick={goNext}
        disabled={current === cards.length - 1}
      >
        <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </button>
    </div>
  );
}
