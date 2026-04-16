import Image from "next/image";

const panels = [
  { id: "outer-left",  src: "https://picsum.photos/seed/synergy/400/500",  alt: "Synergy AI" },
  { id: "inner-left",  src: "https://picsum.photos/seed/webdev/400/500",   alt: "Web App Development" },
  { id: "center",      src: "https://picsum.photos/seed/award2026/400/520",alt: "Nasscom SME Inspire" },
  { id: "inner-right", src: "https://picsum.photos/seed/mtouch/400/500",   alt: "mTouch Labs" },
  { id: "outer-right", src: "https://picsum.photos/seed/team99/400/500",   alt: "Team collaboration" },
];

const panelStyles: Record<string, React.CSSProperties> = {
  "outer-left": {
    width: "160px", flexShrink: 0, zIndex: 1, opacity: 0.85,
    transform: "perspective(700px) rotateY(38deg) scaleX(0.92)",
    transformOrigin: "right center", marginRight: "-22px",
  },
  "inner-left": {
    width: "240px", flexShrink: 0, zIndex: 2,
    transform: "perspective(700px) rotateY(18deg) scaleX(0.97)",
    transformOrigin: "right center", marginRight: "-18px",
  },
  center: {
    width: "340px", flexShrink: 0, zIndex: 3,
  },
  "inner-right": {
    width: "240px", flexShrink: 0, zIndex: 2,
    transform: "perspective(700px) rotateY(-18deg) scaleX(0.97)",
    transformOrigin: "left center", marginLeft: "-18px",
  },
  "outer-right": {
    width: "160px", flexShrink: 0, zIndex: 1, opacity: 0.85,
    transform: "perspective(700px) rotateY(-38deg) scaleX(0.92)",
    transformOrigin: "left center", marginLeft: "-22px",
  },
};

export default function PanoramicBanner() {
  return (
    <div style={{
      background: "#fff",
      padding: "40px 0 50px",
      marginTop: "100px", // ✅ ADDED (moves banner down)
      overflow: "hidden"
    }}>

      {/* Top curve mask */}
      <div style={{
        height: "36px", background: "#fff", position: "relative", zIndex: 2,
        borderRadius: "0 0 50% 50% / 0 0 100% 100%", marginBottom: "-2px",
      }} />

      {/* Banner strip */}
      <div style={{
        display: "flex", alignItems: "stretch", justifyContent: "center",
        background: "#111", minHeight: "420px",
      }}>
        {panels.map((panel) => (
          <div
            key={panel.id}
            style={{
              ...panelStyles[panel.id],
              position: "relative",
              overflow: "hidden",
            }}
          >
            <Image
              src={panel.src}
              alt={panel.alt}
              fill
              style={{ objectFit: "cover" }}
              sizes="340px"
            />

            {panel.id === "outer-left" && (
              <div style={{
                position: "absolute", inset: 0,
                background: "linear-gradient(to right, rgba(0,0,0,0.45), transparent)",
              }} />
            )}
            {panel.id === "outer-right" && (
              <div style={{
                position: "absolute", inset: 0,
                background: "linear-gradient(to left, rgba(0,0,0,0.45), transparent)",
              }} />
            )}

            {panel.id === "center" && (
              <div style={{
                position: "absolute", bottom: 0, left: 0, right: 0,
                background: "linear-gradient(transparent 20%, rgba(0,0,0,0.82) 100%)",
                padding: "28px 20px 20px",
              }}>
                <p style={{ fontSize: "13px", fontWeight: 700, color: "#fff", letterSpacing: "1px", marginBottom: "6px" }}>
                  MARCH 2026
                </p>
                <p style={{ fontSize: "28px", fontWeight: 900, color: "#e8624a", lineHeight: 1 }}>
                  nasscom
                </p>
                <p style={{ fontSize: "22px", fontWeight: 900, color: "#fff", letterSpacing: "1px" }}>
                  SME INSPIRE
                </p>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Bottom curve mask */}
      <div style={{
        height: "36px", background: "#fff", position: "relative", zIndex: 2,
        borderRadius: "50% 50% 0 0 / 100% 100% 0 0", marginTop: "-2px",
      }} />
    </div>
  );
}