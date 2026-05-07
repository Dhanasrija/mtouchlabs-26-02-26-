// Minimal, non-blocking loading indicator.
//
// Behaviour:
//   • Stays HIDDEN for the first 200ms so quick route transitions never
//     produce a visible flash.
//   • If the navigation is still in flight after 200ms, fades a 2px brand
//     bar in at the very top of the viewport.
//   • Bar never covers page content (height = 2px, pointerEvents = none).
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
        height: 2,
        zIndex: 9999,
        pointerEvents: "none",
        overflow: "hidden",
        background: "transparent",
        opacity: 0,
        animation: "mtl-loading-fade 0.3s ease-out 0.2s forwards",
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
      <style>{`
        @keyframes mtl-topbar {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(350%); }
        }
        @keyframes mtl-loading-fade {
          to { opacity: 1; }
        }
      `}</style>
    </div>
  );
}
