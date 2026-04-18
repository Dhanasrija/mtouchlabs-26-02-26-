"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log to analytics / Sentry / gtag if configured
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("event", "exception", {
        description: error.message,
        fatal: false,
      });
    }
    // eslint-disable-next-line no-console
    console.error("Route error:", error);
  }, [error]);

  return (
    <div
      style={{
        minHeight: "60vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "2rem",
        fontFamily: "Outfit, Inter, sans-serif",
        textAlign: "center",
      }}
    >
      <div style={{ maxWidth: 560 }}>
        <h1 style={{ fontSize: "2rem", color: "#1a1a2e", marginBottom: "0.75rem" }}>
          Something went wrong
        </h1>
        <p style={{ color: "#4a5568", marginBottom: "1.5rem" }}>
          We hit an unexpected issue loading this page. Please try again, or head back home.
        </p>
        <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
          <button
            onClick={() => reset()}
            style={{
              background: "#3E8CFB",
              color: "#fff",
              border: "none",
              padding: "10px 24px",
              borderRadius: 999,
              cursor: "pointer",
              fontWeight: 600,
            }}
          >
            Try again
          </button>
          <a
            href="/"
            style={{
              background: "#fff",
              color: "#1a1a2e",
              border: "1px solid #d1d5db",
              padding: "10px 24px",
              borderRadius: 999,
              textDecoration: "none",
              fontWeight: 600,
            }}
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}
