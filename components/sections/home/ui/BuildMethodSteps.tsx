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
      <style dangerouslySetInnerHTML={{ __html: `
        /* ⭐ Smaller travel & no overshoot — prevents the section
           looking like it "jumps up" / cards being cut off on scroll. */
        @keyframes bmAntiGravityCard {
          0%   { opacity: 0; transform: translateY(20px) scale(0.98); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes bmAntiGravityFloat {
          0%   { opacity: 0; transform: translateY(12px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        .bm-step-card, .bm-step-label, .bm-step-img-box, .bm-step-arrow {
          opacity: 0;
        }

        .bm-in-view .bm-step-card { animation: bmAntiGravityCard 0.95s cubic-bezier(0.22, 1, 0.36, 1) both; }
        .bm-in-view .bm-step-img-box { animation: bmAntiGravityFloat 0.7s cubic-bezier(0.22, 1, 0.36, 1) both; }
        .bm-in-view .bm-step-label { animation: bmAntiGravityFloat 0.7s cubic-bezier(0.22, 1, 0.36, 1) both; }
        .bm-in-view .bm-step-arrow { animation: bmAntiGravityFloat 0.7s cubic-bezier(0.22, 1, 0.36, 1) both; }

        .bm-step-img-box {
          transition: all 0.4s cubic-bezier(0.22, 1, 0.36, 1);
          border: 1.5px solid transparent;
          position: relative;
        }
        /* Absolute-position the icon image so its EXACT geometric centre
           sits on the centre of the 150px square card. Combined with the
           fixed 116×116 size, this guarantees the top, bottom, left and
           right gutters are visually identical (~17px on every side) on
           every one of the six cards.

           Icon size was increased from 96px → 116px so each icon reads
           more clearly without crowding the card edges. Math:
             gutter = (150 − 116) / 2 = 17px on every side. */
        .bm-step-img-box .bm-item-icon {
          position: absolute;
          top: 50% !important;
          left: 50% !important;
          transform: translate(-50%, -50%);
          width: 116px !important;
          height: 116px !important;
          object-fit: contain !important;
          object-position: center center !important;
          margin: 0 !important;
          padding: 0 !important;
        }
        .bm-step-card:hover .bm-step-img-box .bm-item-icon {
          transform: translate(-50%, -50%) scale(1.10) rotate(-6deg);
        }
        .bm-steps-container {
          display: flex;
          align-items: flex-start;
          justify-content: center;
          max-width: 1300px;
          margin: 0 auto;
          gap: 8px;
          overflow-x: auto;
          overflow-y: visible;
          padding: 30px 0 40px;
          touch-action: pan-y;
          -webkit-overflow-scrolling: touch;
        }
        .bm-steps-container::-webkit-scrollbar { display: none; }
        .bm-step-label {
          min-height: 44px;
          display: flex;
          align-items: flex-start;
          justify-content: center;
        }

        /* Hover states */
        .bm-step-card:hover .bm-step-img-box {
          box-shadow: 0 12px 40px rgba(0,0,0,0.1);
          border-color: #3E8CFB55;
          transform: translateY(-5px);
        }
        .bm-item-icon {
          transition: transform 0.35s cubic-bezier(0.22, 1, 0.36, 1);
        }

        /* Mid-width desktop / MacBook Air style screens (≤1280px) — the
           six 170px cards + arrows total ~1180px, so on a windowed
           browser at 1100-1280px they would overflow horizontally and
           start scrolling. Switch to a 3-column grid here so the cards
           wrap into two clean rows of three, no horizontal scrolling. */
        @media (max-width: 1280px) and (min-width: 1025px) {
          .bm-steps-container {
            display: grid;
            grid-template-columns: repeat(3, minmax(0, 170px));
            justify-content: center;
            gap: 24px 16px;
            overflow-x: visible;
            padding: 16px 0 20px;
          }
          .bm-step-arrow {
            display: none;
          }
        }
        @media (max-width: 1024px) {
          .bm-steps-container {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 220px));
            justify-content: center;
            align-items: start;
            gap: 20px 16px;
            overflow-x: visible;
            padding: 16px 0 20px;
          }
          .bm-step-card {
            width: 100% !important;
            max-width: 220px;
            flex-shrink: 0 !important;
            margin: 0 auto;
          }
          .bm-step-arrow {
            display: none;
          }
        }
        @media (max-width: 600px) {
          .bm-steps-container {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 16px 12px;
            padding: 16px 0 20px;
            max-width: 420px;
          }
          .bm-step-card {
            max-width: 100% !important;
          }
          .bm-step-img-box {
            width: 130px !important;
            height: 130px !important;
          }
          /* Mobile icon — scaled proportionally to the smaller 130px
             card. 100px icon gives a 15px gutter on every side, the
             same visual rhythm as the desktop ~17px gutter. */
          .bm-step-img-box .bm-item-icon {
            width: 100px !important;
            height: 100px !important;
          }
        }
        @media (max-width: 380px) {
          .bm-steps-container {
            grid-template-columns: 1fr;
            max-width: 220px;
          }
        }
      `}} />
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