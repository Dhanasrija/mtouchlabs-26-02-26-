/**
 * The redesigned Services page is fully server-rendered and needs no
 * client-side JavaScript — the FAQ uses native <details>/<summary> and the
 * quick-nav uses plain anchor links. The previous /js/services.js bundle
 * (dev tabs + a process carousel) is no longer referenced by any markup on
 * this route, so it is not loaded here.
 */
export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
