import type { Metadata } from "next";
import { FreeRequestQuoteClient } from "./FreeRequestQuoteClient";

export const metadata: Metadata = {
  title: "Request a Free Quote",
  description:
    "Get a free project quote from mTouch Labs. Tell us about your idea and our expert team will help you turn it into a scalable digital product — AI, mobile, web, cloud & Salesforce.",
  keywords: [
    "Request Free Quote",
    "Free Project Quote",
    "Software Development Quote",
    "AI Development Quote",
    "Mobile App Development Quote",
    "Web Development Quote",
    "Hire mTouch Labs",
    "mTouch Labs",
  ],
  alternates: { canonical: "/request-free-quote" },
  openGraph: {
    title: "Request a Free Quote | mTouch Labs",
    description:
      "Start your project with a free quote from mTouch Labs — AI, web, mobile, cloud & Salesforce experts.",
    url: "https://www.mtouchlabs.com/request-free-quote",
    siteName: "mTouch Labs",
    type: "website",
    images: [
      {
        url: "/images/Light.png",
        width: 1200,
        height: 630,
        alt: "mTouch Labs — Request a Free Quote",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Request a Free Quote | mTouch Labs",
    description:
      "Start your project with a free quote from mTouch Labs — AI, web, and mobile experts.",
    images: ["/images/Light.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function FreeRequestQuotePage() {
  return <FreeRequestQuoteClient />;
}