import Script from "next/script";

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <link rel="stylesheet" href="/css/case-study.css" />
      {children}
      <Script src="/js/portfolio.js" strategy="afterInteractive" />
    </>
  );
}
