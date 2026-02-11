import Script from "next/script";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* Add home-page class to body so CSS like .home-page .ree-header applies */}
      <Script
        id="home-page-class"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `document.body.classList.add('home-page');`,
        }}
      />
      {children}
      <Script src="/js/homepage.js" strategy="afterInteractive" />
    </>
  );
}