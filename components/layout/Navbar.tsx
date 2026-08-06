import { headers } from "next/headers";
import NavbarView from "./NavbarView";

/*
  Navbar — thin server wrapper.

  Its only job is to read the middleware-injected request headers (which is a
  server-only capability) and hand the result to NavbarView, where all of the
  markup lives. See NavbarView.tsx for why the markup is a client component.
*/
export default function Navbar() {
  const headersList = headers();

  // Prefer the middleware-injected header. Normalise defensively so we don't
  // miss a match because of stray trailing slashes, casing, or query strings.
  const rawPath = headersList.get("x-pathname") || "/";
  let pathname = rawPath.split("?")[0].split("#")[0].toLowerCase();
  if (!pathname.startsWith("/")) pathname = "/" + pathname;
  if (pathname.length > 1 && pathname.endsWith("/")) pathname = pathname.slice(0, -1);

  // Middleware can positively assert the active top-level nav tab (used for
  // root-level portfolio slugs that would otherwise be confused with Services
  // because they end with "-development" / "-company").
  const activeNavHint = (headersList.get("x-active-nav") || "").toLowerCase();

  return <NavbarView pathname={pathname} activeNavHint={activeNavHint} />;
}
