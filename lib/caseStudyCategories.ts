// Curated filter groups for the /case-studies listing page.
// Mirrors the way /portfolio groups its work into a clean, fixed filter bar.

export const CASE_STUDY_CATEGORY_ORDER = [
  "AI & Automation",
  "Ecommerce",
  "Healthcare",
  "Fintech",
  "Logistics",
  "SaaS",
  "Enterprise",
  "Sales & Marketing",
] as const;

export type CaseStudyCategory = (typeof CASE_STUDY_CATEGORY_ORDER)[number];

// Explicit slug → group mapping (most reliable, independent of DB values).
const SLUG_CATEGORY: Record<string, CaseStudyCategory> = {
  // Industry apps
  "ecommerce-retail-platform": "Ecommerce",
  "healthcare-mobile-app-development": "Healthcare",
  "fintech-payment-platform": "Fintech",
  "logistics-fleet-tracking": "Logistics",
  "saas-team-collaboration-platform": "SaaS",
  // AI & Automation
  "ai-agent-customer-support-automation": "AI & Automation",
  "generative-ai-chatbot-development": "AI & Automation",
  "multi-agent-ai-system": "AI & Automation",
  "ai-document-processing-automation": "AI & Automation",
  "ai-voice-agent-development": "AI & Automation",
  "predictive-analytics-ai-platform": "AI & Automation",
  "ai-mobile-app-development": "AI & Automation",
  "custom-llm-development": "AI & Automation",
  // Sales & Marketing
  "ai-sales-assistant-platform": "Sales & Marketing",
  "ai-real-estate-lead-scoring": "Sales & Marketing",
  "ai-content-generation-platform": "Sales & Marketing",
  "ai-powered-crm-automation": "Sales & Marketing",
  // Enterprise
  "ai-knowledge-base-assistant": "Enterprise",
  "enterprise-ai-workflow-automation": "Enterprise",
  "ai-recruitment-platform": "Enterprise",
  "ai-image-recognition-system": "Enterprise",
};

// Fallback: map a raw `industry` value to a curated group when a slug
// isn't in the explicit map above (keeps future studies working).
function fromIndustry(industry?: string): CaseStudyCategory {
  const i = (industry || "").toLowerCase();
  if (/ecom|retail/.test(i)) return "Ecommerce";
  if (/health|medical|patient/.test(i)) return "Healthcare";
  if (/fin|payment|bank/.test(i)) return "Fintech";
  if (/logistic|fleet|transport|supply/.test(i)) return "Logistics";
  if (/saas/.test(i)) return "SaaS";
  if (/sales|market|crm/.test(i)) return "Sales & Marketing";
  if (/enterprise|hr|manufactur|operations/.test(i)) return "Enterprise";
  return "AI & Automation";
}

export function getCaseStudyCategory(slug: string, industry?: string): CaseStudyCategory {
  return SLUG_CATEGORY[slug] || fromIndustry(industry);
}
