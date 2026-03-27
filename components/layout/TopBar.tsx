export default function TopBar() {
  return (
    <div
      className="top-header"
      style={{ display: "flex", alignItems: "center", justifyContent: "space-between", position: "relative" }}
    >
      {/* LEFT */}
      <div className="left_header_nav">
        <span>
          <i className="fas fa-envelope"></i> contact@mtouchlabs.com
        </span>
        <span>
          <img
            src="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.4.6/flags/4x3/in.svg"
            alt="India Flag"
            className="flag-icon"
          />{" "}
          +91 9390683154
        </span>
        <span>
          <img
            src="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.4.6/flags/4x3/us.svg"
            alt="USA Flag"
            className="flag-icon"
          />{" "}
          +1 (551) 222-0070
        </span>
      </div>

      {/* CENTER */}
      <div
        style={{
          position: "absolute",
          left: "50%",
          transform: "translateX(-35%)",
          whiteSpace: "nowrap",
          pointerEvents: "none",
          fontSize: "12px",
          color: "#fff",
          display: "flex",
          alignItems: "center",
        }}
      >
        <strong style={{ color: "#f5c518", verticalAlign: "middle" }}>NASSCOM</strong>
        <span style={{ verticalAlign: "middle" }}>&nbsp;SME Inspire Awards 2026</span>
        <span style={{ verticalAlign: "middle", fontSize: "12px" }}>🏆</span>
      </div>

      {/* RIGHT */}
      <div className="right_header_nav">
        <a href="https://maps.app.goo.gl/vHVVC1vzkR2hS7Ek7" target="_blank" rel="noopener noreferrer">Hyderabad</a>
        <span className="topbar-divider">|</span>
        <a href="https://maps.app.goo.gl/WgJMfx2PzuScWZbQA" target="_blank" rel="noopener noreferrer">Bangalore</a>
        <span className="topbar-divider">|</span>
        <a href="https://maps.app.goo.gl/RUQSXXJ8hCP2RMRd7" target="_blank" rel="noopener noreferrer">USA</a>
      </div>
    </div>
  );
}