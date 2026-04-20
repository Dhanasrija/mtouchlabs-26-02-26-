import { Metadata } from "next";

const BASE_URL = "https://www.mtouchlabs.com";
const SITE_NAME = "mTouch Labs";
const DEFAULT_OG_IMAGE = `${BASE_URL}/images/og-default.png`; // Update with your actual OG image path

/**
 * Generate complete SEO metadata for any page.
 * Usage in any page.tsx:
 *
 * import { generateSEO } from "@/lib/seo";
 *
 * export const metadata = generateSEO({
 *   title: "Custom Software Development Company",
 *   description: "Build scalable custom software solutions with mTouch Labs...",
 *   path: "/custom-software-development-company",
 *   keywords: ["custom software", "software development", "mTouch Labs"],
 * });
 */

interface SEOParams {
  title: string;
  description: string;
  path: string; // e.g. "/services" or "/contact-us"
  keywords?: string[];
  ogImage?: string;
  noIndex?: boolean;
  type?: "website" | "article";
  publishedTime?: string; // ISO date for blog posts
}

export function generateSEO({
  title,
  description,
  path,
  keywords = [],
  ogImage = DEFAULT_OG_IMAGE,
  noIndex = false,
  type = "website",
  publishedTime,
}: SEOParams): Metadata {
  const url = `${BASE_URL}${path}`;
  const fullTitle = title.includes(SITE_NAME)
    ? title
    : `${title} | ${SITE_NAME}`;

  return {
    title: fullTitle,
    description,
    keywords: keywords.length > 0 ? keywords.join(", ") : undefined,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: SITE_NAME,
      type: type === "article" ? "article" : "website",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      ...(publishedTime && { publishedTime }),
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [ogImage],
    },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
  };
}

/**
 * Generate JSON-LD structured data as a script tag.
 * Usage: Add <JsonLd data={...} /> in your page component.
 */
export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

// ================================
// PRE-BUILT JSON-LD SCHEMAS
// ================================
// NOTE: Organization schema is rendered site-wide in app/layout.tsx with a
// richer variant on app/(home)/page.tsx. Do not duplicate Organization here —
// having 3 divergent copies causes Google entity-confusion. Single source of
// truth for Organization = app/layout.tsx.

/** LocalBusiness schema — add to location pages */
export function localBusinessSchema(location: {
  city: string;
  country: string;
  countryCode: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: `mTouch Labs - ${location.city}`,
    url: BASE_URL,
    description: `Top mobile app and software development company in ${location.city}, ${location.country}. Custom software, mobile apps, cloud solutions.`,
    address: {
      "@type": "PostalAddress",
      addressLocality: location.city,
      addressCountry: location.countryCode,
    },
    priceRange: "$$",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "150",
    },
  };
}

/** Service schema — add to service pages */
export function serviceSchema(service: {
  name: string;
  description: string;
  url: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.description,
    url: `${BASE_URL}${service.url}`,
    provider: {
      "@type": "Organization",
      name: "mTouch Labs",
      url: BASE_URL,
    },
    areaServed: {
      "@type": "Country",
      name: "Worldwide",
    },
  };
}

/** FAQ schema — add to pages with FAQ sections */
export function faqSchema(
  faqs: Array<{ question: string; answer: string }>
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

/** BreadcrumbList schema — add to any inner page */
export function breadcrumbSchema(
  items: Array<{ name: string; url: string }>
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${BASE_URL}${item.url}`,
    })),
  };
}

/** Blog post schema */
export function blogPostSchema(post: {
  title: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified?: string;
  image?: string;
  author?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    url: `${BASE_URL}${post.url}`,
    datePublished: post.datePublished,
    dateModified: post.dateModified || post.datePublished,
    image: post.image || DEFAULT_OG_IMAGE,
    author: {
      "@type": "Organization",
      name: "mTouch Labs",
    },
    publisher: {
      "@type": "Organization",
      name: "mTouch Labs",
      logo: {
        "@type": "ImageObject",
        url: `${BASE_URL}/images/logo.png`,
      },
    },
  };
}