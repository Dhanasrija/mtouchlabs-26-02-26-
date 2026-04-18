"use client";

import { useEffect } from "react";

/**
 * global-error.tsx is the top-level error boundary. It replaces the entire
 * <html>/<body> tree when thrown from the root layout itself. Keep it
 * intentionally minimal — no external CSS / scripts — so it can never fail.
 */
export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // eslint-disable-next-line no-console
    console.error("Global error:", error);
  }, [error]);

  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily:
            "system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif",
          background: "#ffffff",
          color: "#1a1a2e",
          padding: "2rem",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: 560 }}>
          <h1 style={{ fontSize: "2rem", marginBottom: "0.75rem" }}>
            Something went wrong
          </h1>
          <p style={{ color: "#4a5568", marginBottom: "1.5rem" }}>
            Please refresh the page or return to the homepage.
          </p>
          <div
            style={{
              display: "flex",
              gap: 12,
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
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
      </body>
    </html>
  );
}
