export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <link href="/css/admin-dashboard.css" rel="stylesheet" />
      <style dangerouslySetInnerHTML={{ __html: `
        header, footer, nav:not(.s-links), .navbar, .site-header, .site-footer,
        .header, .footer, .nav-wrapper, .site-nav, #header, #footer,
        [class*="header"]:not(#admin-root *):not(.ab-header):not(.admin-header),
        [class*="footer"]:not(#admin-root *),
        [class*="navbar"]:not(#admin-root *) {
          display: none !important;
        }
      `}} />
      {children}
    </>
  );
}