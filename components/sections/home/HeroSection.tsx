export default function HeroSection() {
  return (
    <div className="hero-wrapper" style={{ position: "relative", width: "100%", overflow: "hidden" }}>
      {/* Use dangerouslySetInnerHTML to avoid Next.js JSX issues with video/source */}
      <div
        dangerouslySetInnerHTML={{
          __html: `
            <video id="heroVideo" autoplay muted loop playsinline preload="auto"
              style="width:100%;height:100%;object-fit:cover;display:block;">
              <source src="/images/banner/mtouchnew_banner.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          `,
        }}
      />

      {/* Bottom-LEFT CTA over the video */}
      <div
        style={{
          position: "absolute",
          left: "40px",
          bottom: "28px",
          zIndex: 3,
        }}
      >
        <a
          href="https://wa.me/message/H5VADFWLMPYIM1"
          target="_blank"
          rel="noreferrer"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "12px",
            padding: "12px 22px",
            background: "linear-gradient(90deg,#2f91f8 0%, #2fb86a 100%)",
            color: "#ffffff",
            borderRadius: "30px",
            boxShadow: "0 10px 30px rgba(16,24,40,0.35)",
            textDecoration: "none",
            fontWeight: 700,
          }}
        >
          <img
            src="/images/new_home/ai-product-pages/cybersecurity/whatsapp.png"
            alt="WhatsApp"
            style={{ width: "28px", height: "28px", objectFit: "contain", display: "block" }}
          />
          <span style={{ whiteSpace: "nowrap" }}>Get a Free Quote &nbsp; &gt;</span>
        </a>
      </div>
    </div>
  );
}