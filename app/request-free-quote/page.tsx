import type { Metadata } from "next";
import { FreeRequestQuoteClient } from "./FreeRequestQuoteClient";

export const metadata: Metadata = {
  title: "Free Request Quote | mTouch Labs",
  description:
    "Get a free project quote from mTouch Labs. Tell us about your idea and our expert team will help you turn it into a scalable digital product.",
  keywords: [
    "Free Quote",
    "Project Quote",
    "Software Development Quote",
    "AI Development",
    "Mobile App Development",
    "Web Development Quote",
    "mTouch Labs",
  ],
  metadataBase: new URL("https://www.mtouchlabs.com"),
  alternates: { canonical: "/free-request-quote" },
  openGraph: {
    title: "Free Request Quote | mTouch Labs",
    description:
      "Get a free project quote from mTouch Labs. Expert AI, web, and mobile development.",
    url: "https://www.mtouchlabs.com/free-request-quote",
    siteName: "mTouch Labs",
    type: "website",
    images: [
      {
        url: "/images/Light.png",
        width: 1200,
        height: 630,
        alt: "mTouch Labs Free Quote",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Request Quote | mTouch Labs",
    description:
      "Start your project with a free quote from mTouch Labs — AI, web, and mobile experts.",
    images: ["/images/Light.png"],
  },
  robots: { index: true, follow: true },
};

export default function FreeRequestQuotePage() {
  return <FreeRequestQuoteClient />;
}
