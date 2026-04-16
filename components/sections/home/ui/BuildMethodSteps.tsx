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
        @keyframes bmAntiGravityCard {
          0%   { opacity: 0; transform: translateY(70px) scale(0.93); }
          70%  { opacity: 1; transform: translateY(-10px) scale(1.02); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes bmAntiGravityFloat {
          0%   { opacity: 0; transform: translateY(40px); }
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
          padding: 20px 0;
        }
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
            gap: 24px;
            overflow-x: visible;
          }
          .bm-step-arrow {
            transform: rotate(90deg);
            padding-bottom: 0 !important;
            margin: 12px 0 !important;
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
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "16px",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
                  overflow: "hidden",
                  cursor: "pointer",
                  animationDelay: `${stepDelay + 0.15}s`,
                  margin: "0 auto 16px",
                }}
              >
                <div
                  className="bm-item-icon"
                  style={{
                    position: "relative",
                    width: "100px",
                    height: "100px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "auto",
                  }}
                >
                  <Image
                    src={step.img}
                    alt={step.label}
                    fill
                    sizes="100px"
                    style={{
                      objectFit: "contain",
                      objectPosition: "center",
                      display: "block",
                    }}
                  />
                </div>
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