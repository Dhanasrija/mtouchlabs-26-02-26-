/**
 * FAQSchema — Reusable JSON-LD Structured Data for FAQ sections
 *
 * Usage:
 *   import FAQSchema from "@/components/seo/FAQSchema";
 *
 *   const faqs = [
 *     { q: "What is ...?", a: "It is ..." },
 *     { q: "How does ...?", a: "It works by ..." },
 *   ];
 *
 *   <FAQSchema faqs={faqs} />
 */

type FAQ = { q: string; a: string };

export default function FAQSchema({ faqs }: { faqs: FAQ[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}