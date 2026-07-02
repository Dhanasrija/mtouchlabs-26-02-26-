import Link from "next/link";

export default function NotFound() {
  return (
    <main
      style={{
        // ⭐ FIX: a sitewide `main { display: flex; ... }` rule in
        // public/css/style.css (meant only for the old /thank-you page)
        // was matching every bare <main> tag, including this one — it
        // forced this page into a single centered flex ROW, squashing the
        // heading, subheading, description, and buttons onto one line.
        // Pinning `display: block` here overrides that rule directly
        // (inline styles win over external stylesheets), restoring the
        // normal stacked layout regardless of that global CSS.
        display: "block",
        textAlign: "center",
        padding: "160px 20px 80px",
        minHeight: "70vh",
      }}
    >
      <h1
        style={{
          display: "block",
          fontSize: "72px",
          fontWeight: 800,
          color: "#0C1C32",
          margin: 0,
        }}
      >
        404
      </h1>

      <h2
        style={{
          display: "block",
          fontSize: "24px",
          color: "#555",
          marginTop: "16px",
        }}
      >
        Page Not Found
      </h2>

      <p
        style={{
          display: "block",
          color: "#777",
          marginTop: "12px",
          fontSize: "16px",
        }}
      >
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>

      <div
        style={{
          marginTop: "40px",
          display: "flex",
          gap: "16px",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        <Link
          href="/"
          style={{
            padding: "14px 36px",
            background: "#3E8CFB",
            color: "#fff",
            borderRadius: "8px",
            textDecoration: "none",
            fontWeight: 600,
            fontSize: "15px",
          }}
        >
          Go to Homepage
        </Link>

        <Link
          href="/services"
          style={{
            padding: "14px 36px",
            background: "#0C1C32",
            color: "#fff",
            borderRadius: "8px",
            textDecoration: "none",
            fontWeight: 600,
            fontSize: "15px",
          }}
        >
          View Services
        </Link>

        <Link
          href="/contact-us"
          style={{
            padding: "14px 36px",
            background: "transparent",
            color: "#3E8CFB",
            border: "2px solid #3E8CFB",
            borderRadius: "8px",
            textDecoration: "none",
            fontWeight: 600,
            fontSize: "15px",
          }}
        >
          Contact Us
        </Link>
      </div>
    </main>
  );
}