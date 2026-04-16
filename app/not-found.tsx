export default function NotFound() {
  return (
    <div style={{ textAlign: "center", padding: "160px 20px 80px", minHeight: "70vh" }}>
      <h1 style={{ fontSize: "72px", fontWeight: 800, color: "#0C1C32", margin: 0 }}>404</h1>
      <h2 style={{ fontSize: "24px", color: "#555", marginTop: "16px" }}>Page Not Found</h2>
      <p style={{ color: "#777", marginTop: "12px", fontSize: "16px" }}>
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <div style={{ marginTop: "40px", display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
        <a href="/" style={{ padding: "14px 36px", background: "#3E8CFB", color: "#fff", borderRadius: "8px", textDecoration: "none", fontWeight: 600, fontSize: "15px" }}>Go to Homepage</a>
        <a href="/services" style={{ padding: "14px 36px", background: "#0C1C32", color: "#fff", borderRadius: "8px", textDecoration: "none", fontWeight: 600, fontSize: "15px" }}>View Services</a>
        <a href="/contact-us" style={{ padding: "14px 36px", background: "transparent", color: "#3E8CFB", borderRadius: "8px", textDecoration: "none", fontWeight: 600, fontSize: "15px", border: "2px solid #3E8CFB" }}>Contact Us</a>
      </div>
      <script dangerouslySetInnerHTML={{ __html: `
        document.addEventListener('click', function(e) {
          var link = e.target.closest('a[href]');
          if (link && link.href && !link.href.includes('#')) {
            e.preventDefault();
            window.location.href = link.href;
          }
        });
      ` }} />
    </div>
  );
}
