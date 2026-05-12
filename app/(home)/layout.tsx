import Script from "next/script";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/*
        Add home-page class to body BEFORE the page paints so the homepage-
        specific CSS rules (e.g. .home-page .ree-header transparent navbar,
        background colours, hero spacing) apply on the very first paint.
        Running this beforeInteractive prevents a brief flash of the wrong
        styles while the rest of the page hydrates.
      */}
      <Script
        id="home-page-class"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: `try{document.body.classList.add('home-page');}catch(e){}`,
        }}
      />
      {children}

      <Script src="/js/homepage.js" strategy="lazyOnload" />
    </>
  );
}