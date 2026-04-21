export default function Loading() {
  return (
    <div
      role="status"
      aria-live="polite"
      style={{
        position: "fixed",
        inset: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "rgba(255,255,255,0.85)",
        zIndex: 9999,
        backdropFilter: "blur(2px)",
      }}
    >
      <div
        style={{
          width: 48,
          height: 48,
          border: "4px solid #e6edf7",
          borderTopColor: "#3E8CFB",
          borderRadius: "50%",
          animation: "mtl-spin 0.9s linear infinite",
        }}
      />
      <style>{`@keyframes mtl-spin { to { transform: rotate(360deg); } }`}</style>
    </div>
  );
}
