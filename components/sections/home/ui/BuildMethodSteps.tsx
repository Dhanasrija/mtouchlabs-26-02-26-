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
      <style>{`
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
        .bm-step-card:hover .bm-item-icon {
          transform: scale(1.4) rotate(-6deg) !important;
        }
        .bm-step-card:hover .bm-step-img-box {
          box-shadow: 0 12px 40px rgba(0,0,0,0.1);
          border-color: #3E8CFB55;
          transform: translateY(-5px);
        }
        .bm-item-icon {
          transition: transform 0.35s cubic-bezier(0.22, 1, 0.36, 1);
        }

        @media (max-width: 1024px) {
          .bm-steps-container {
            flex-direction: column;
            align-items: center;
            justify-content: flex-start;
            gap: 16px;
            overflow-x: visible;
            padding: 16px 0 20px;
          }
          .bm-step-card {
            width: 100% !important;
            max-width: 240px;
            flex-shrink: 0 !important;
          }
          .bm-step-arrow {
            transform: rotate(90deg);
            padding-top: 0 !important;
            padding-bottom: 0 !important;
            margin: 2px 0 !important;
            line-height: 1 !important;
          }
        }
        @media (max-width: 600px) {
          .bm-steps-container {
            gap: 16px;
            padding: 16px 0 20px;
          }
          .bm-step-arrow {
            margin: 0 0 !important;
          }
        }
      `}</style>
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
                width: "160px",
                flexShrink: 0,
                textAlign: "center",
                animationDelay: `${stepDelay}s`,
              }}
            >
              <div
                className="bm-step-img-box"
                style={{
                  width: "140px",
                  height: "140px",
                  background: "#fff",
                  borderRadius: "24px",
                  /* Use grid place-items:center for true geometric centering.
                     A grid container with a single child treats the child as
                     a sized item placed at the exact center of the container,
                     so the icon sits with EQUAL gap on top, bottom, left, right
                     regardless of the icon's intrinsic aspect ratio. */
                  display: "grid",
                  placeItems: "center",
                  boxSizing: "border-box",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
                  overflow: "hidden",
                  cursor: "pointer",
                  animationDelay: `${stepDelay + 0.15}s`,
                  margin: "0 auto 16px",
                  /* No padding — the icon's own fixed size + grid centering
                     guarantees symmetric whitespace. */
                  padding: 0,
                }}
              >
                <Image
                  src={step.img}
                  alt={step.label}
                  width={80}
                  height={80}
                  className="bm-item-icon"
                  style={{
                    /* Fixed square box for the icon — same dimensions on every
                       card means every icon visually centers identically. */
                    width: "80px",
                    height: "80px",
                    objectFit: "contain",
                    objectPosition: "center center",
                    display: "block",
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
                  paddingTop: "62px",
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