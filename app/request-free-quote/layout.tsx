import type { ReactNode } from "react";

/**
 * Standalone layout for /request-free-quote.
 * Adds the `rq-standalone` class to <body> synchronously (before first paint)
 * so the global Header/Footer/Chat widget don't flash on initial load.
 * The class is removed by FreeRequestQuoteClient's cleanup when the user
 * navigates away.
 */
export default function RequestFreeQuoteLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <>
      {/* Runs synchronously in <head> before React hydrates. */}
      <script
        dangerouslySetInnerHTML={{
          __html:
            "try{document.documentElement.classList.add('rq-standalone-html');document.body&&document.body.classList.add('rq-standalone');}catch(e){}",
        }}
      />
      {children}
    </>
  );
}
