import { CSSProperties } from "react";

interface BlurRevealTextProps {
  text: string;
  className?: string;
  baseDelay?: number;
  isInView: boolean;
  activeColor?: string;
}

export function BlurRevealText({
  text,
  className,
  baseDelay = 0,
  isInView,
}: BlurRevealTextProps) {
  const words = text.split(" ");
  return (
    <>
      
      <span className={className} style={{ display: "inline" }}>
        {words.map((word, i) => (
          <span
            key={i}
            className={`blur-reveal-word${isInView ? " in-view" : ""}`}
            style={{ animationDelay: `${baseDelay + i * 0.07}s` } as CSSProperties}
          >
            {word}
          </span>
        ))}
      </span>
    </>
  );
}