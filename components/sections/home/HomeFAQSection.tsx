"use client";

import { useState } from "react";

const homeFaqs = [
  {
    q: "What services does mTouch Labs offer?",
    a: "mTouch Labs offers custom software development, AI development, mobile app development, web development, and IT solutions for businesses of all sizes."
  },
  {
    q: "Why choose mTouch Labs as your software development company?",
    a: "We provide scalable, secure, and innovative solutions with expertise in AI, SaaS, and enterprise applications."
  },
  {
    q: "Do you provide AI development services?",
    a: "Yes, we are an AI development company offering generative AI, automation, and machine learning solutions."
  },
  {
    q: "How much does software development cost?",
    a: "The cost depends on project complexity, features, and timeline. Contact us for a customized quote."
  },
  {
    q: "Do you work with global clients?",
    a: "Yes, we serve clients across the USA, India, and other global markets."
  },
  {
    q: "How long does it take to build a software product?",
    a: "Typically 4–12 weeks depending on requirements and scope."
  },
];

export default function HomeFAQSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
      <style>{`
        @keyframes faqBlurIn {
          from { opacity: 0; filter: blur(10px); transform: translateX(-10px); }
          to   { opacity: 1; filter: blur(0);    transform: translateX(0);     }
        }

        @keyframes faqSlideUp {
          from { opacity: 0; transform: translateY(30px); }
          to   { opacity: 1; transform: translateY(0);    }
        }

        ._faq_answer {
          overflow: hidden;
          transition: all 0.4s ease;
        }

        ._faq_chevron {
          transition: transform 0.3s ease;
        }
      `}</style>

      <section style={{ padding: "6rem 0", backgroundColor: "#F3F1FF", position: "relative", zIndex: 1 }}>
        <div className="_faq_container">

          {/* Header */}
          <div className="_faq_header">
            <h2 className="_faq_title">
              <span style={{ animation: "faqBlurIn 0.5s ease-out both", animationDelay: "0s", display: "inline-block" }}>
                Your Questions
              </span>
              {" "}
              <span
                className="_faq_title_highlight"
                style={{ animation: "faqBlurIn 0.5s ease-out both", animationDelay: "0.4s", display: "inline-block" }}
              >
                Answered
              </span>
              {" "}
              <span style={{ animation: "faqBlurIn 0.5s ease-out both", animationDelay: "0.8s", display: "inline-block" }}>
                Clearly
              </span>
            </h2>

            <div
              className="_faq_subtitle"
              style={{ animation: "faqBlurIn 0.5s ease-out both", animationDelay: "1.2s" }}
            >
              Everything you need to know about mTouch Labs
            </div>
          </div>

          {/* FAQ List */}
          <div className="_faq_list">
            {homeFaqs.map((f, i) => {
              const isOpen = activeIndex === i;

              return (
                <div
                  key={i}
                  className="_faq_item"
                  style={{
                    animation: "faqSlideUp 0.5s ease-out both",
                    animationDelay: `${0.5 + i * 0.1}s`,
                    boxShadow: isOpen ? "0 0 0 2px rgba(62,140,251,0.3)" : "none",
                    borderRadius: "12px",
                  }}
                >
                  <button
                    className="_faq_question"
                    onClick={() => setActiveIndex(isOpen ? -1 : i)}
                    style={{
                      width: "100%",
                      textAlign: "left",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      background: "none",
                      border: "none",
                      cursor: "pointer"
                    }}
                  >
                    <span>{f.q}</span>

                    <span
                      className="_faq_chevron"
                      style={{
                        transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                      }}
                    >
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#08182b"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M6 9l6 6 6-6" />
                      </svg>
                    </span>
                  </button>

                  <div
                    className="_faq_answer"
                    style={{
                      maxHeight: isOpen ? "500px" : "0px",
                      opacity: isOpen ? 1 : 0,
                    }}
                  >
                    <p className="_faq_answer_text">{f.a}</p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>
    </>
  );
}