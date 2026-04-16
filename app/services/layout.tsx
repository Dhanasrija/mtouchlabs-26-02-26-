import Script from "next/script";

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
      <Script src="/js/services.js" strategy="afterInteractive" />
    </>
  );
}
