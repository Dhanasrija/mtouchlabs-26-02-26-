// Home has a custom, immediately-paintable hero. We do NOT want the default
// spinner overlay on the home route — it created a visible flash on
// first-paint. Returning null disables the Suspense fallback here.
export default function Loading() {
  return null;
}
