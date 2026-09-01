import Script from "next/script";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/*
        Add the `home-page` class to <body> BEFORE the page paints.
        The navbar rules in public/css/homepage-fixes.css key off it
        (`.home-page .ree-header` etc. render the header white with no
        border or shadow), so the header looks identical to how it has
        always looked on the homepage. Running this beforeInteractive
        prevents a flash of the wrong header styling on first paint.

        The rebuilt landing page is scoped to `.hmx` and does not depend
        on any other `.home-page` rule.
      */}
      <Script
        id="home-page-class"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: `try{document.body.classList.add('home-page');}catch(e){}`,
        }}
      />
      {children}

      {/*
        /js/homepage.js drove the OLD homepage only — the hero word
        rotator, the technology tabs, the location pills and the partner
        logo modal. None of that markup exists on the rebuilt page (the
        FAQ uses native <details>/<summary>, the reveal animation is a
        few lines inlined in page.tsx), so loading it would cost a
        request and parse for nothing.

        Restore this line together with the old page if you ever revert:
        <Script src="/js/homepage.js" strategy="lazyOnload" />
      */}
    </>
  );
}
