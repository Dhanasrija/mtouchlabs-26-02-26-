// Minimal, non-blocking loading indicator.
// Previously a full-screen overlay with a blur — that was too visible on
// fast routes and showed a noticeable "loading flash" on Home.
// Now: a thin 3px top progress bar that doesn't cover the page content.\
// Minimal, non-blocking loading indicator.
// Previously a full-screen overlay with a blur — that was too visible on
// fast routes and showed a noticeable "loading flash" on Home.
// Now: a thin 3px top progress bar that doesn't cover the page content.
// Minimal, non-blocking loading indicator.
// Previously a full-screen overlay with a blur — that was too visible on
// fast routes and showed a noticeable "loading flash" on Home.
// Now: a thin 3px top progress bar that doesn't cover the page content.
// Minimal, non-blocking loading indicator.
// Previously a full-screen overlay with a blur — that was too visible on
// fast routes and showed a noticeable "loading flash" on Home.
// Now: a thin 3px top progress bar that doesn't cover the page content.
export default function Loading() {
  return (
    <div
      role="status"
      aria-live="polite"
      aria-label="Loading"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        height: 3,
        zIndex: 9999,
        pointerEvents: "none",
        overflow: "hidden",
        background: "transparent",
      }}
    >
      <div
        style={{
          height: "100%",
          width: "40%",
          background:
            "linear-gradient(90deg, transparent, #3E8CFB 50%, transparent)",
          animation: "mtl-topbar 1.1s ease-in-out infinite",
        }}
      />
      <style>{`@keyframes mtl-topbar { 0% { transform: translateX(-100%);} 100% { transform: translateX(350%);} }`}</style>
    </div>
  );
}
