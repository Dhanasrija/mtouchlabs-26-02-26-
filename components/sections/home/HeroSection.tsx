export default function HeroSection() {
  return (
    <div className="hero-wrapper">
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

      <a
        href="https://wa.me/message/H5VADFWLMPYIM1"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-hero-btn"
        title="Chat with us on WhatsApp"
      >
        <img
          src="/images/new_home/ai-product-pages/cybersecurity/whatsapp.png"
          alt="WhatsApp"
          className="whatsapp-hero-img"
        />
        <span className="wa-tooltip">Chat with us!</span>
      </a>
    </div>
  );
}