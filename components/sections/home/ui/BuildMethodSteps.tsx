"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

interface Step {
  label: string;
  img: string;
}

interface BuildMethodStepsProps {
  steps: Step[];
}

export function BuildMethodSteps({ steps }: BuildMethodStepsProps) {
  return (
    <div className="bm-steps-container no-scrollbar">
      
      {steps.map((step, i) => {
        const stepDelay = 0.3 + i * 0.6;
        return (
          <React.Fragment key={i}>
            <div
              className="bm-step-card"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "flex-start",
                width: "170px",
                flexShrink: 0,
                textAlign: "center",
                animationDelay: `${stepDelay}s`,
              }}
            >
              <div
                className="bm-step-img-box"
                style={{
                  width: "150px",
                  height: "150px",
                  background: "#fff",
                  borderRadius: "24px",
                  /* Flexbox centering — guarantees the icon sits exactly in the
                     middle of the card with EQUAL gap on top, bottom, left, and
                     right at every breakpoint. The wrapper is a fixed square so
                     the visual offset is identical from every edge. */
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxSizing: "border-box",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
                  overflow: "hidden",
                  cursor: "pointer",
                  animationDelay: `${stepDelay + 0.15}s`,
                  margin: "0 auto 16px",
                  padding: 0,
                }}
              >
                <Image
                  src={step.img}
                  alt={step.label}
                  width={116}
                  height={116}
                  className="bm-item-icon"
                  style={{
                    /* Fixed 116px icon — same intrinsic size on every card
                       so every icon visually centers identically. With a
                       150px square wrapper this leaves a clean 17px gutter
                       on top, bottom, left and right. Mobile sizing is
                       handled in the @media block above (100px icon in a
                       130px card → 15px gutter on each side). */
                    width: "116px",
                    height: "116px",
                    objectFit: "contain",
                    objectPosition: "center center",
                    display: "block",
                    margin: 0,
                  }}
                />
              </div>
              <span
                className="bm-step-label"
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "15px",
                  fontWeight: 600,
                  color: "#1A1A1A",
                  lineHeight: 1.4,
                  textAlign: "center",
                  whiteSpace: "pre-line",
                  animationDelay: `${stepDelay + 0.3}s`,
                }}
              >
                {step.label}
              </span>
            </div>

            {i < steps.length - 1 && (
              <span
                className="bm-step-arrow"
                style={{
                  fontSize: "24px",
                  color: "#aab0c8",
                  margin: "0 4px",
                  paddingTop: "67px",
                  display: "inline-block",
                  animationDelay: `${stepDelay + 0.45}s`,
                }}
              >
                →
              </span>
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
}