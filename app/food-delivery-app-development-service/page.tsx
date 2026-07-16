import type { Metadata } from "next";
import FoodDeliveryClient from "./FoodDeliveryClient";

export const metadata: Metadata = {
  title: "Food Delivery App Development Service",
  description:
    "NASSCOM award-winning food delivery app development service in Hyderabad offering scalable apps with real-time tracking, secure payments & AI-powered features.",
  alternates: {
    canonical: "https://www.mtouchlabs.com/food-delivery-app-development-service",
  },
  openGraph: {
    title: "Food Delivery App Development Service | mTouch Labs",
    description:
      "NASSCOM award-winning food delivery app development service in Hyderabad offering scalable apps with real-time tracking, secure payments & AI-powered features.",
    url: "https://www.mtouchlabs.com/food-delivery-app-development-service",
    type: "website",
    siteName: "mTouch Labs",
  },
  twitter: {
    card: "summary_large_image",
    title: "Food Delivery App Development Service | mTouch Labs",
    description:
      "NASSCOM award-winning food delivery app development service in Hyderabad with real-time tracking, secure payments & AI-powered features.",
  },
};

export default function Page() {
  return <FoodDeliveryClient />;
}
