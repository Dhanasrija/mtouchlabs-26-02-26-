// /brochure — legacy URL. The brochure form is now an in-place modal
// triggered from the footer / any .js-brochure-modal button, so visiting
// this URL directly simply redirects to the home page. This removes the
// old intermediate "loader" page flow.
import { redirect } from "next/navigation";
import type { Metadata } from "next";

export const metadata: Metadata = {
  robots: { index: false, follow: false },
  alternates: { canonical: "https://www.mtouchlabs.com/" },
};

export default function BrochurePage() {
  // Permanent redirect to the home page where the in-place modal can be opened.
  redirect("/?brochure=1");
}
