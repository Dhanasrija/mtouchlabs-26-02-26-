import Script from "next/script";

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
      <Script src="/js/portfolio.js" strategy="afterInteractive" />
    </>
  );
}
