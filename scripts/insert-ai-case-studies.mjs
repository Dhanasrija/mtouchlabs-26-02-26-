#!/usr/bin/env node
/**
 * Insert / upsert 16 AI case studies into the `case_studies` table.
 *
 * Mirrors the existing case-study schema (see lib/case-study-actions.ts):
 *   slug, title, industry, platform, icon, color, image, image_alt,
 *   overview, challenge, challenge_points, approach, solution, features,
 *   technologies, dev_process, results, result_points, conclusion,
 *   testimonial_*, internal_links, meta_title, meta_description, keywords,
 *   canonical_url, breadcrumb_title, og_title, og_description, og_image,
 *   schema_json_ld, faq_schema, gallery_images, status, published, publish_date.
 *
 * Behaviour:
 *   - Ensures a `gallery_images` jsonb column + a unique index on slug exist.
 *   - Resolves images from public/images/case-studies/<slug>/ on disk:
 *        featured = /images/case-studies/<slug>/<slug>.svg
 *        gallery  = the (up to 4) "*-web-*"/"*-Web-*" SVGs, natural-sorted.
 *     All gallery SVGs are 1200x700 and the featured are 1200x600, so the
 *     gallery grid (object-fit: cover) stays uniform and never looks squashed.
 *   - Upserts each row via ON CONFLICT (slug) DO UPDATE — safe to re-run.
 *   - Staggers publish_date (newest first, in listed order) so the new
 *     studies appear at the TOP of /case-studies, which orders by
 *     COALESCE(publish_date, created_at) DESC and shows 3 cards per row.
 *
 * meta_title is stored WITHOUT the "| mTouch Labs" suffix; the root layout
 * applies the `"%s | mTouch Labs"` template, and every title here stays well
 * under 60 chars once the brand is appended. canonical_url is the correct
 * absolute URL (required for SEO). Each study carries 2-3 DISTINCT, verified
 * internal links to real service pages.
 *
 * Run:  node scripts/insert-ai-case-studies.mjs
 * Requires: .env.local with DATABASE_URL set.
 */

import { neon } from '@neondatabase/serverless';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, '..');

// ── Load .env.local ──
const envPath = path.join(ROOT, '.env.local');
if (fs.existsSync(envPath)) {
  const raw = fs.readFileSync(envPath, 'utf8');
  for (const line of raw.split('\n')) {
    const m = line.match(/^([A-Z0-9_]+)=(.*)$/);
    if (m && !process.env[m[1]]) process.env[m[1]] = m[2].replace(/^["']|["']$/g, '');
  }
}
if (!process.env.DATABASE_URL) {
  console.error('❌ DATABASE_URL not set. Add it to .env.local');
  process.exit(1);
}
const sql = neon(process.env.DATABASE_URL);

const SITE = 'https://www.mtouchlabs.com';
const IMG_BASE = '/images/case-studies';
const IMG_DIR = path.join(ROOT, 'public', IMG_BASE);

// Natural sort so web-2 < web-3 < web-3-1 < web-10
const natCmp = (a, b) =>
  a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' });

/**
 * Resolve featured + gallery image URLs for a slug by reading its folder.
 * Returns { image, gallery } with web-rooted paths. Falls back gracefully
 * if the folder is missing so the script never crashes on a single slug.
 */
function resolveImages(slug) {
  const dir = path.join(IMG_DIR, slug);
  const fallback = { image: `${IMG_BASE}/${slug}/${slug}.svg`, gallery: [] };
  if (!fs.existsSync(dir)) {
    console.warn(`⚠️  image folder missing for "${slug}" — using expected paths anyway`);
    return fallback;
  }
  const files = fs.readdirSync(dir).filter((f) => /\.(svg|png|jpg|jpeg|webp)$/i.test(f));
  const featuredName =
    files.find((f) => f.toLowerCase() === `${slug}.svg`.toLowerCase()) ||
    files.find((f) => !/-web/i.test(f)); // any non-"web" asset is the hero
  const galleryNames = files
    .filter((f) => /-web/i.test(f))
    .sort(natCmp)
    .slice(0, 4);
  return {
    image: featuredName ? `${IMG_BASE}/${slug}/${featuredName}` : fallback.image,
    gallery: galleryNames.map((f) => `${IMG_BASE}/${slug}/${f}`),
  };
}

// FAQ → JSON-LD (matches how the detail page builds FAQPage schema)
function faqJsonLd(faq) {
  return JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
    })),
  });
}

// ── Case study content (16) ──
// Each entry is the substantive, SEO-standard content; images are resolved
// from disk at insert time and merged in below.
const STUDIES = [
  {
    slug: 'ai-agent-customer-support-automation',
    title: 'AI Agent for Customer Support Automation',
    metaTitle: 'AI Customer Support Automation Case Study',
    industry: 'Customer Service',
    platform: 'Web',
    icon: '🤖',
    color: '#6366f1',
    keywords: 'AI agent, customer support automation, agentic AI, conversational AI, ticket deflection, LLM support bot',
    overview:
      'We built an autonomous AI support agent that resolves customer tickets end to end — understanding intent, retrieving account context, and taking real actions across connected systems. It handles the high-volume repetitive queries that previously consumed most of the support team\'s day.',
    challenge:
      'The client\'s support team was drowning in repetitive tickets, with first-response times stretching into hours and agents burning out on copy-paste answers. Their existing rule-based chatbot deflected almost nothing because it could not understand context or take action.',
    challengePoints: [
      'Average first-response time exceeded 4 hours during peak periods',
      'A rigid, rule-based bot deflected under 8% of incoming tickets',
      'Agents spent most of their time on repetitive, low-complexity queries',
      'No way to securely let automation act inside billing and CRM systems',
    ],
    approach:
      'We designed an agentic architecture where a reasoning LLM plans each resolution, calls tools to fetch live data, and escalates to humans only when confidence is low. Retrieval-augmented generation grounds every answer in the client\'s real knowledge base to eliminate hallucinations.',
    solution:
      'The delivered platform pairs a tool-using AI agent with a human-in-the-loop console, secure API connectors, and full audit logging. Support leaders get a live dashboard of deflection rate, sentiment, and escalations.',
    features: [
      'Autonomous multi-step ticket resolution with tool calling',
      'RAG grounding on the company knowledge base and policy docs',
      'Secure connectors to CRM, billing, and order systems',
      'Confidence-based human escalation with full context handoff',
      'Real-time sentiment detection and priority routing',
      'Complete audit trail of every action the agent takes',
    ],
    technologies: [
      { name: 'GPT-4 class LLM', purpose: 'Reasoning, planning, and natural-language responses' },
      { name: 'LangGraph', purpose: 'Stateful multi-step agent orchestration' },
      { name: 'Pinecone', purpose: 'Vector store for knowledge-base retrieval' },
      { name: 'Next.js', purpose: 'Agent console and analytics dashboard' },
      { name: 'PostgreSQL', purpose: 'Conversation state and audit logging' },
      { name: 'Redis', purpose: 'Low-latency session and rate-limit handling' },
    ],
    devProcess: [
      { step: 'Discovery & ticket analysis', desc: 'Clustered 12 months of tickets to find the highest-volume automatable intents.' },
      { step: 'Knowledge ingestion', desc: 'Chunked and embedded help-center, policies, and macros into the vector store.' },
      { step: 'Agent & tool design', desc: 'Built the planning loop and secure, permission-scoped action tools.' },
      { step: 'Guardrails & evaluation', desc: 'Added grounding checks, refusal rules, and an automated eval suite.' },
      { step: 'Pilot & rollout', desc: 'Shadow-mode pilot, then phased rollout with live human oversight.' },
    ],
    results:
      'Within three months the AI agent was resolving the majority of inbound tickets without human touch, freeing agents for complex, high-value work.',
    resultPoints: [
      '68% of tickets resolved fully autonomously',
      'First-response time cut from 4+ hours to under 30 seconds',
      'Customer satisfaction (CSAT) up 22 points',
      'Support cost per ticket reduced by 54%',
      'Agent attrition dropped as repetitive load fell away',
    ],
    conclusion:
      'Agentic AI turned a reactive, overloaded support queue into a proactive, largely self-serving system — proving that grounded, tool-using agents can safely own real customer outcomes.',
    testimonialQuote:
      'It feels like we hired a tireless senior agent who never sleeps and never gets a ticket wrong.',
    testimonialRole: 'VP of Customer Experience',
    testimonialInitials: 'VC',
    links: [
      { url: '/generative-ai-development-company', text: 'Generative AI Development' },
      { url: '/machine-learning-development-company', text: 'Machine Learning Development' },
      { url: '/saas-development-services', text: 'SaaS Development Services' },
    ],
    faq: [
      { question: 'What is an AI customer support agent?', answer: 'It is an autonomous system that understands a customer query, retrieves the relevant account and policy context, and resolves the request — including taking actions in connected systems — escalating to a human only when needed.' },
      { question: 'How does it avoid giving wrong answers?', answer: 'Every response is grounded with retrieval-augmented generation against the company knowledge base, and low-confidence cases are routed to human agents with full context.' },
      { question: 'Can it integrate with our existing CRM and helpdesk?', answer: 'Yes. We build secure, permission-scoped connectors to CRM, billing, order, and helpdesk platforms so the agent can both read context and take approved actions.' },
      { question: 'How long does deployment take?', answer: 'A typical pilot is live in 4-6 weeks, followed by phased rollout once deflection and CSAT targets are validated in shadow mode.' },
      { question: 'Is customer data kept secure?', answer: 'All actions are permission-scoped and fully audit-logged, and data handling is designed to meet enterprise security and compliance requirements.' },
    ],
  },

  {
    slug: 'generative-ai-chatbot-development',
    title: 'Generative AI Chatbot Development',
    metaTitle: 'Generative AI Chatbot Development Case Study',
    industry: 'SaaS',
    platform: 'Web',
    icon: '💬',
    color: '#0ea5e9',
    keywords: 'generative AI chatbot, conversational AI, RAG chatbot, LLM chatbot development, AI assistant',
    overview:
      'We developed a generative AI chatbot that holds natural, context-aware conversations across a SaaS product — answering product questions, guiding onboarding, and surfacing the right docs at the right moment, all grounded in the client\'s own content.',
    challenge:
      'The product had rich documentation but users could not find answers, leading to abandoned trials and a flood of "how do I" tickets. A scripted FAQ widget felt robotic and frequently sent users in circles.',
    challengePoints: [
      'Low trial-to-paid conversion driven by onboarding friction',
      'Documentation was comprehensive but hard to search',
      'Scripted FAQ bot could not handle natural phrasing',
      'No personalization based on the user\'s plan or progress',
    ],
    approach:
      'We combined a large language model with retrieval-augmented generation so the chatbot answers from the client\'s live docs and changelog. Conversation memory and user metadata let it tailor responses to each account\'s context.',
    solution:
      'The chatbot ships as an embeddable widget with streaming responses, source citations, and a feedback loop that continuously improves retrieval quality.',
    features: [
      'Context-aware conversations with short- and long-term memory',
      'RAG over docs, changelog, and support macros with citations',
      'Streaming token-by-token responses for instant feel',
      'Personalization by plan, role, and onboarding stage',
      'Inline feedback capture to improve answers over time',
      'Embeddable widget with full theming controls',
    ],
    technologies: [
      { name: 'OpenAI / Anthropic LLM', purpose: 'Natural-language understanding and generation' },
      { name: 'LangChain', purpose: 'Retrieval pipelines and prompt orchestration' },
      { name: 'pgvector', purpose: 'Embedding storage and similarity search' },
      { name: 'React', purpose: 'Embeddable streaming chat widget' },
      { name: 'Node.js', purpose: 'Streaming API and retrieval service' },
      { name: 'Redis', purpose: 'Conversation memory and caching' },
    ],
    devProcess: [
      { step: 'Content audit', desc: 'Mapped and cleaned all docs, changelog, and macros for ingestion.' },
      { step: 'Embedding pipeline', desc: 'Built an automated re-indexing pipeline triggered on content changes.' },
      { step: 'Prompt & persona design', desc: 'Crafted a helpful brand voice with strict grounding rules.' },
      { step: 'Widget engineering', desc: 'Built the streaming, themeable, embeddable front end.' },
      { step: 'Evaluation & tuning', desc: 'Ran answer-quality evals and tuned retrieval thresholds.' },
    ],
    results:
      'The chatbot became the primary self-serve channel, deflecting routine questions and measurably smoothing onboarding.',
    resultPoints: [
      'Trial-to-paid conversion improved by 19%',
      '47% reduction in onboarding-related support tickets',
      'Median answer time under 2 seconds with citations',
      'Over 80% of conversations rated helpful by users',
    ],
    conclusion:
      'A grounded generative AI chatbot turned static documentation into an interactive guide, lifting conversion while cutting support load.',
    testimonialQuote:
      'Our users finally get instant, accurate answers — and our docs are doing the work they were always meant to.',
    testimonialRole: 'Head of Product',
    testimonialInitials: 'HP',
    links: [
      { url: '/generative-ai-development-company', text: 'Generative AI Development' },
      { url: '/web-development-company', text: 'Web Development Services' },
      { url: '/machine-learning-development-company', text: 'Machine Learning Development' },
    ],
    faq: [
      { question: 'How is a generative AI chatbot different from a rule-based bot?', answer: 'A generative chatbot understands natural language and composes original, context-aware answers grounded in your content, whereas a rule-based bot can only follow pre-scripted flows.' },
      { question: 'Will it make up answers?', answer: 'No. Retrieval-augmented generation forces the bot to answer from your real documentation and cite sources, and it declines gracefully when it lacks grounding.' },
      { question: 'Can we embed it in our existing product?', answer: 'Yes. It ships as a lightweight, themeable widget that drops into any web app or marketing site.' },
      { question: 'Does it keep up with content changes?', answer: 'An automated re-indexing pipeline updates the knowledge base whenever your docs or changelog change.' },
      { question: 'Which LLM do you use?', answer: 'We are model-agnostic and select the best fit (OpenAI, Anthropic, or open models) based on quality, latency, and cost for your use case.' },
    ],
  },

  {
    slug: 'enterprise-ai-workflow-automation',
    title: 'Enterprise AI Workflow Automation',
    metaTitle: 'Enterprise AI Workflow Automation Case Study',
    industry: 'Enterprise',
    platform: 'Web',
    icon: '⚙️',
    color: '#8b5cf6',
    keywords: 'enterprise AI workflow automation, intelligent process automation, AI orchestration, business process automation',
    overview:
      'We delivered an AI workflow automation platform that orchestrates multi-step business processes across departments — routing documents, making decisions, and triggering actions with human approval gates where they matter.',
    challenge:
      'Critical operations relied on manual handoffs between email, spreadsheets, and siloed systems. Work stalled in queues, errors slipped through, and leadership had no visibility into where processes broke down.',
    challengePoints: [
      'Manual handoffs caused delays and dropped tasks',
      'Data re-entered by hand across disconnected systems',
      'No audit trail or visibility into process bottlenecks',
      'Compliance steps depended on individuals remembering them',
    ],
    approach:
      'We modeled each workflow as a graph of AI and deterministic steps, inserting LLM reasoning where judgment was needed and strict rules where compliance demanded it. Approval gates keep humans in control of consequential actions.',
    solution:
      'The platform provides a visual workflow builder, AI decision nodes, system connectors, and an observability layer showing every run, decision, and SLA in real time.',
    features: [
      'Visual builder for AI-plus-rules workflow graphs',
      'LLM decision nodes for classification and extraction',
      'Human approval gates on high-impact actions',
      'Connectors to ERP, CRM, email, and storage systems',
      'Real-time observability with SLA and bottleneck tracking',
      'Full audit logging for compliance',
    ],
    technologies: [
      { name: 'Temporal', purpose: 'Durable, reliable workflow orchestration' },
      { name: 'LLM reasoning layer', purpose: 'Document classification and decisioning' },
      { name: 'Next.js', purpose: 'Workflow builder and observability UI' },
      { name: 'PostgreSQL', purpose: 'Process state and audit records' },
      { name: 'Kafka', purpose: 'Event streaming between systems' },
      { name: 'Docker / Kubernetes', purpose: 'Scalable, isolated deployment' },
    ],
    devProcess: [
      { step: 'Process mapping', desc: 'Documented existing workflows and identified automation candidates.' },
      { step: 'Decision modeling', desc: 'Split steps into AI-judgment vs deterministic-rule nodes.' },
      { step: 'Integration build', desc: 'Connected ERP, CRM, and document stores via secure APIs.' },
      { step: 'Approval & guardrails', desc: 'Added human gates, validation, and rollback handling.' },
      { step: 'Rollout & monitoring', desc: 'Deployed per-department with live SLA dashboards.' },
    ],
    results:
      'Processes that took days now complete in hours, with full traceability and far fewer errors.',
    resultPoints: [
      'Process cycle time reduced by 73%',
      'Manual data entry eliminated across 9 workflows',
      'Processing errors down 61%',
      'Full compliance audit trail on every run',
    ],
    conclusion:
      'By blending AI judgment with deterministic rules and human oversight, the platform made enterprise operations faster, more reliable, and fully auditable.',
    testimonialQuote:
      'We went from chasing tasks across inboxes to watching work flow through one transparent system.',
    testimonialRole: 'Director of Operations',
    testimonialInitials: 'DO',
    links: [
      { url: '/custom-software-development-company', text: 'Custom Software Development' },
      { url: '/generative-ai-development-company', text: 'Generative AI Development' },
      { url: '/devops-consulting-services', text: 'DevOps & Cloud Services' },
    ],
    faq: [
      { question: 'What is AI workflow automation?', answer: 'It is the orchestration of multi-step business processes where AI handles judgment-based steps (like classification or extraction) and deterministic rules handle compliance steps, with humans approving consequential actions.' },
      { question: 'Does AI make decisions without oversight?', answer: 'No. High-impact actions pass through human approval gates, and every decision is logged for audit.' },
      { question: 'Can it connect to our ERP and CRM?', answer: 'Yes. We build secure connectors to ERP, CRM, email, and document systems so workflows act across your existing stack.' },
      { question: 'How is reliability guaranteed?', answer: 'We use durable workflow orchestration so long-running processes survive failures and resume exactly where they left off.' },
      { question: 'How do we measure impact?', answer: 'A real-time observability layer tracks cycle time, error rates, SLAs, and bottlenecks for every workflow.' },
    ],
  },

  {
    slug: 'ai-sales-assistant-platform',
    title: 'AI Sales Assistant Platform',
    metaTitle: 'AI Sales Assistant Platform Case Study',
    industry: 'Sales',
    platform: 'Web',
    icon: '📈',
    color: '#10b981',
    keywords: 'AI sales assistant, sales automation, AI lead qualification, conversational sales AI, revenue intelligence',
    overview:
      'We built an AI sales assistant that qualifies leads, drafts personalized outreach, and surfaces the next best action for every deal — giving reps an always-on copilot grounded in real CRM data.',
    challenge:
      'Reps spent more time on admin and research than selling. Leads went cold in the queue, follow-ups slipped, and pipeline data was always out of date.',
    challengePoints: [
      'Reps lost hours daily to manual research and data entry',
      'Inbound leads sat unqualified and went cold',
      'Inconsistent, generic outreach hurt reply rates',
      'Pipeline forecasts were unreliable',
    ],
    approach:
      'We connected the assistant to the CRM and enrichment sources, using an LLM to score intent, generate tailored messaging, and recommend next actions — all reviewable by the rep before sending.',
    solution:
      'The platform delivers AI lead scoring, one-click personalized drafts, deal-health insights, and automatic CRM updates so data stays current without manual effort.',
    features: [
      'AI lead scoring from intent and firmographic signals',
      'Personalized email and message drafting',
      'Next-best-action recommendations per deal',
      'Automatic CRM enrichment and activity logging',
      'Deal-health and risk insights',
      'Conversation summaries from calls and threads',
    ],
    technologies: [
      { name: 'LLM (GPT-4 class)', purpose: 'Scoring, drafting, and summarization' },
      { name: 'Python / FastAPI', purpose: 'Scoring and enrichment services' },
      { name: 'PostgreSQL', purpose: 'Lead, deal, and activity data' },
      { name: 'React', purpose: 'Rep copilot interface' },
      { name: 'Celery', purpose: 'Background enrichment and scoring jobs' },
      { name: 'CRM APIs', purpose: 'Two-way sync with the sales system' },
    ],
    devProcess: [
      { step: 'Sales-process discovery', desc: 'Shadowed reps to map where time was lost and where AI could help.' },
      { step: 'Scoring model design', desc: 'Defined intent signals and built the lead-scoring pipeline.' },
      { step: 'Drafting & guardrails', desc: 'Tuned outreach generation to brand voice with approval before send.' },
      { step: 'CRM integration', desc: 'Built two-way sync to keep records current automatically.' },
      { step: 'Pilot & coaching', desc: 'Ran a rep pilot and refined recommendations from feedback.' },
    ],
    results:
      'Reps reclaimed selling time and engaged the right leads faster, lifting both activity quality and conversion.',
    resultPoints: [
      'Lead response time reduced by 80%',
      'Qualified-meeting rate up 34%',
      'Reps saved roughly 9 hours per week on admin',
      'Forecast accuracy materially improved with live data',
    ],
    conclusion:
      'An AI sales copilot let the team focus on relationships and closing while automation handled research, drafting, and data hygiene.',
    testimonialQuote:
      'My reps finally sell instead of typing notes — the assistant does the busywork and points them at the right deals.',
    testimonialRole: 'VP of Sales',
    testimonialInitials: 'VS',
    links: [
      { url: '/custom-crm-software-development-company', text: 'Custom CRM Software Development' },
      { url: '/machine-learning-development-company', text: 'Machine Learning Development' },
      { url: '/saas-development-services', text: 'SaaS Development Services' },
    ],
    faq: [
      { question: 'What does an AI sales assistant do?', answer: 'It qualifies and scores leads, drafts personalized outreach, recommends the next best action for each deal, and keeps the CRM updated automatically.' },
      { question: 'Does it send messages on its own?', answer: 'No. It drafts outreach for the rep to review and approve, keeping a human in control of every send.' },
      { question: 'Which CRMs can it connect to?', answer: 'We build two-way sync with major CRMs so scoring, drafting, and activity logging stay in step with your system of record.' },
      { question: 'How does lead scoring work?', answer: 'The assistant combines intent signals, firmographic data, and engagement history into a calibrated score that prioritizes the reps\' queue.' },
      { question: 'Will it improve forecast accuracy?', answer: 'Yes. Because the CRM stays current automatically and deal-health is tracked continuously, forecasts reflect reality far more closely.' },
    ],
  },

  {
    slug: 'multi-agent-ai-system',
    title: 'Multi-Agent AI System',
    metaTitle: 'Multi-Agent AI System Case Study',
    industry: 'Technology',
    platform: 'Web',
    icon: '🕸️',
    color: '#f59e0b',
    keywords: 'multi-agent AI system, agent orchestration, autonomous agents, agentic AI, collaborative AI agents',
    overview:
      'We engineered a multi-agent AI system where specialized agents — research, analysis, writing, and review — collaborate under an orchestrator to complete complex tasks that a single model could not reliably handle alone.',
    challenge:
      'The client needed to automate end-to-end knowledge work that spanned research, synthesis, and quality control. A single prompt-and-response model produced shallow, inconsistent output and could not self-correct.',
    challengePoints: [
      'Single-model outputs lacked depth and consistency',
      'No mechanism to verify or critique generated work',
      'Long, multi-stage tasks exceeded one model\'s reliable context',
      'Hard to trace which step caused a bad result',
    ],
    approach:
      'We decomposed the task into roles, each handled by a specialized agent with its own tools and prompt, coordinated by an orchestrator that manages state, delegation, and a critique-and-revise loop.',
    solution:
      'The system runs a planner, domain agents, and a reviewer agent in a shared workspace, with full step-level tracing so every decision is observable and debuggable.',
    features: [
      'Orchestrator that plans and delegates subtasks',
      'Specialized agents with role-specific tools',
      'Critique-and-revise loop for self-correction',
      'Shared memory and artifact workspace',
      'Step-level tracing and replay for debugging',
      'Pluggable agents to extend new capabilities',
    ],
    technologies: [
      { name: 'LangGraph', purpose: 'Multi-agent orchestration and state' },
      { name: 'LLMs (mixed)', purpose: 'Role-specialized reasoning and generation' },
      { name: 'Python', purpose: 'Agent runtime and tool layer' },
      { name: 'Redis', purpose: 'Shared agent memory and queues' },
      { name: 'PostgreSQL', purpose: 'Run history and artifacts' },
      { name: 'OpenTelemetry', purpose: 'Step-level tracing and observability' },
    ],
    devProcess: [
      { step: 'Task decomposition', desc: 'Broke the target workflow into agent roles and interfaces.' },
      { step: 'Orchestration design', desc: 'Built the planner, delegation, and shared-state model.' },
      { step: 'Agent specialization', desc: 'Tuned each agent\'s prompt and tools for its role.' },
      { step: 'Review loop', desc: 'Added a reviewer agent and revision cycle for quality.' },
      { step: 'Tracing & hardening', desc: 'Instrumented every step and added failure recovery.' },
    ],
    results:
      'The multi-agent system produced markedly higher-quality, more reliable output on complex tasks, with full transparency into every step.',
    resultPoints: [
      'Output quality scores up 41% vs single-model baseline',
      'Self-correction caught the majority of errors before delivery',
      'Complex tasks completed without human intervention',
      'Every run fully traceable and replayable',
    ],
    conclusion:
      'Coordinated, specialized agents with a review loop unlocked reliable automation of complex knowledge work that single-model approaches could not deliver.',
    testimonialQuote:
      'It is like having a small expert team that researches, drafts, and checks its own work — at machine speed.',
    testimonialRole: 'Chief Technology Officer',
    testimonialInitials: 'CT',
    links: [
      { url: '/generative-ai-development-company', text: 'Generative AI Development' },
      { url: '/custom-software-development-company', text: 'Custom Software Development' },
      { url: '/data-science-solutions', text: 'Data Science Solutions' },
    ],
    faq: [
      { question: 'What is a multi-agent AI system?', answer: 'It is an architecture where multiple specialized AI agents collaborate — under an orchestrator — to plan, execute, and review complex tasks that exceed what a single model can do reliably.' },
      { question: 'Why use multiple agents instead of one model?', answer: 'Specialized agents with focused roles and a critique-and-revise loop produce deeper, more consistent results and can catch and fix their own mistakes.' },
      { question: 'Is the system\'s behavior observable?', answer: 'Yes. Every step is traced and replayable, so you can see exactly how each result was produced and debug failures.' },
      { question: 'Can new capabilities be added later?', answer: 'Agents are pluggable, so new roles and tools can be added without rebuilding the orchestration.' },
      { question: 'How do you control cost and latency?', answer: 'We assign the right-sized model to each role and cache shared context, balancing quality against cost and speed.' },
    ],
  },

  {
    slug: 'ai-document-processing-automation',
    title: 'AI Document Processing Automation',
    metaTitle: 'AI Document Processing Automation Case Study',
    industry: 'Finance',
    platform: 'Web',
    icon: '📄',
    color: '#ef4444',
    keywords: 'AI document processing, intelligent document processing, OCR automation, data extraction AI, document understanding',
    overview:
      'We built an intelligent document processing system that ingests invoices, contracts, and forms, extracts structured data with high accuracy, and routes it into downstream systems — replacing slow, error-prone manual entry.',
    challenge:
      'Teams keyed data from thousands of varied documents by hand. Throughput was low, error rates were high, and exceptions piled up with no clear triage.',
    challengePoints: [
      'High volume of varied, semi-structured documents',
      'Manual data entry was slow and error-prone',
      'Legacy OCR failed on layout variation',
      'No structured exception handling for low-confidence extracts',
    ],
    approach:
      'We combined modern OCR with a vision-language model that understands layout and context, validating every extracted field against business rules and routing uncertain cases to a review queue.',
    solution:
      'The platform classifies documents, extracts and validates fields, and pushes clean data to ERP and accounting systems, with a human review console for exceptions only.',
    features: [
      'Automatic document classification and routing',
      'Layout-aware extraction with vision-language models',
      'Field-level confidence scoring and validation rules',
      'Exception review console for low-confidence items',
      'Straight-through posting to ERP and accounting systems',
      'Continuous learning from reviewer corrections',
    ],
    technologies: [
      { name: 'Vision-language model', purpose: 'Layout-aware understanding and extraction' },
      { name: 'Tesseract / cloud OCR', purpose: 'Text recognition baseline' },
      { name: 'Python', purpose: 'Extraction and validation pipeline' },
      { name: 'PostgreSQL', purpose: 'Extracted data and audit storage' },
      { name: 'FastAPI', purpose: 'Processing and review APIs' },
      { name: 'React', purpose: 'Exception review console' },
    ],
    devProcess: [
      { step: 'Document survey', desc: 'Catalogued document types, layouts, and target fields.' },
      { step: 'Extraction pipeline', desc: 'Built classification, extraction, and validation stages.' },
      { step: 'Confidence & rules', desc: 'Added per-field confidence and business-rule checks.' },
      { step: 'Review console', desc: 'Built an efficient queue for human exception handling.' },
      { step: 'Integration & learning', desc: 'Connected downstream systems and a correction feedback loop.' },
    ],
    results:
      'The system processed documents in seconds with high straight-through rates, slashing manual workload and errors.',
    resultPoints: [
      'Straight-through processing on 88% of documents',
      'Extraction accuracy above 97% on key fields',
      'Processing time per document cut from minutes to seconds',
      'Manual data-entry effort reduced by 90%',
    ],
    conclusion:
      'Intelligent document processing converted a manual bottleneck into a fast, accurate, auditable pipeline that scales with volume.',
    testimonialQuote:
      'What used to take a team all week now clears by lunchtime — and the data is cleaner than ever.',
    testimonialRole: 'Head of Finance Operations',
    testimonialInitials: 'HF',
    links: [
      { url: '/machine-learning-development-company', text: 'Machine Learning Development' },
      { url: '/data-science-solutions', text: 'Data Science Solutions' },
      { url: '/enterprise-application-development-company', text: 'Enterprise Application Development' },
    ],
    faq: [
      { question: 'What is intelligent document processing?', answer: 'It is the use of OCR plus AI that understands document layout and context to automatically classify documents, extract structured data, validate it, and route it into downstream systems.' },
      { question: 'How accurate is the extraction?', answer: 'On key fields the system exceeds 97% accuracy, with per-field confidence scores and business-rule validation flagging anything uncertain for review.' },
      { question: 'What happens to low-confidence documents?', answer: 'They are routed to a human review console so staff only touch the small share of exceptions rather than every document.' },
      { question: 'Can it handle different layouts?', answer: 'Yes. The vision-language approach understands varied and unseen layouts far better than template-based legacy OCR.' },
      { question: 'Does it improve over time?', answer: 'Reviewer corrections feed back into the system, continuously improving accuracy on your document mix.' },
    ],
  },

  {
    slug: 'ai-recruitment-platform',
    title: 'AI Recruitment Platform',
    metaTitle: 'AI Recruitment Platform Case Study',
    industry: 'HR Tech',
    platform: 'Web',
    icon: '🧑‍💼',
    color: '#3b82f6',
    keywords: 'AI recruitment platform, AI resume screening, candidate matching, talent acquisition AI, hiring automation',
    overview:
      'We developed an AI recruitment platform that screens applications, matches candidates to roles on skills and fit, and automates scheduling — helping recruiters focus on people instead of paperwork while reducing bias.',
    challenge:
      'Recruiters were overwhelmed by application volume, strong candidates were missed in keyword filters, and manual screening introduced inconsistency and bias.',
    challengePoints: [
      'Thousands of applications per role to triage manually',
      'Keyword filters rejected qualified non-standard profiles',
      'Inconsistent screening criteria across recruiters',
      'Scheduling back-and-forth wasted days',
    ],
    approach:
      'We used semantic matching to score candidates on actual skills and experience rather than keywords, paired with structured, criteria-based evaluation to improve fairness and consistency.',
    solution:
      'The platform ranks candidates with explainable match scores, generates structured screening summaries, and automates interview scheduling end to end.',
    features: [
      'Semantic resume-to-role matching with explainable scores',
      'Structured, criteria-based screening summaries',
      'Bias-mitigation controls and audit logging',
      'Automated interview scheduling and reminders',
      'Talent-pool search across past applicants',
      'Recruiter dashboard with pipeline analytics',
    ],
    technologies: [
      { name: 'Embedding models', purpose: 'Semantic candidate-role matching' },
      { name: 'LLM', purpose: 'Screening summaries and structured evaluation' },
      { name: 'pgvector', purpose: 'Candidate similarity search' },
      { name: 'Next.js', purpose: 'Recruiter dashboard and workflows' },
      { name: 'Node.js', purpose: 'Matching and scheduling services' },
      { name: 'PostgreSQL', purpose: 'Candidate and pipeline data' },
    ],
    devProcess: [
      { step: 'Hiring-flow mapping', desc: 'Documented screening criteria and pipeline stages.' },
      { step: 'Matching engine', desc: 'Built semantic scoring with explainability.' },
      { step: 'Fairness controls', desc: 'Added bias-mitigation rules and audit logging.' },
      { step: 'Scheduling automation', desc: 'Integrated calendars for self-serve interview booking.' },
      { step: 'Validation', desc: 'Back-tested rankings against past successful hires.' },
    ],
    results:
      'Recruiters moved faster and surfaced stronger, more diverse shortlists with consistent criteria.',
    resultPoints: [
      'Time-to-shortlist reduced by 65%',
      'Quality-of-hire signals improved on validated cohorts',
      'Scheduling time cut from days to minutes',
      'More consistent, auditable screening decisions',
    ],
    conclusion:
      'AI-assisted recruitment let the team evaluate more candidates fairly and faster, keeping human judgment central to final decisions.',
    testimonialQuote:
      'We see better shortlists in a fraction of the time — and we can explain exactly why each candidate ranked where they did.',
    testimonialRole: 'Head of Talent Acquisition',
    testimonialInitials: 'HT',
    links: [
      { url: '/machine-learning-development-company', text: 'Machine Learning Development' },
      { url: '/saas-development-services', text: 'SaaS Development Services' },
      { url: '/data-science-solutions', text: 'Data Science Solutions' },
    ],
    faq: [
      { question: 'How does AI candidate matching work?', answer: 'It uses semantic embeddings to compare a candidate\'s real skills and experience against the role, producing an explainable match score rather than a keyword pass/fail.' },
      { question: 'Does AI make the hiring decision?', answer: 'No. The platform ranks and summarizes candidates to assist recruiters; final decisions remain with people.' },
      { question: 'How do you address bias?', answer: 'We apply structured, criteria-based evaluation, bias-mitigation controls, and full audit logging to make screening more consistent and fair.' },
      { question: 'Can it surface past applicants?', answer: 'Yes. The talent-pool search lets recruiters re-discover strong candidates from previous roles.' },
      { question: 'Does it integrate with our ATS and calendars?', answer: 'Yes. It integrates with applicant tracking systems and calendars to automate scheduling and keep records in sync.' },
    ],
  },

  {
    slug: 'ai-voice-agent-development',
    title: 'AI Voice Agent Development',
    metaTitle: 'AI Voice Agent Development Case Study',
    industry: 'Telephony',
    platform: 'Web & Telephony',
    icon: '🎙️',
    color: '#06b6d4',
    keywords: 'AI voice agent, voice AI, conversational voice bot, speech-to-text, real-time voice assistant, IVR automation',
    overview:
      'We built a real-time AI voice agent that answers calls, understands natural speech, and completes tasks — booking appointments, answering questions, and routing complex calls — with low-latency, human-like conversation.',
    challenge:
      'The client\'s phone lines were overwhelmed, callers abandoned long IVR menus, and after-hours calls went unanswered, costing bookings and goodwill.',
    challengePoints: [
      'High call volume with long hold times',
      'Rigid IVR menus frustrated callers',
      'After-hours calls went unanswered',
      'No way to capture intent from spoken language',
    ],
    approach:
      'We assembled a low-latency pipeline of streaming speech-to-text, an LLM for reasoning, and natural text-to-speech, with barge-in support so callers can interrupt naturally.',
    solution:
      'The voice agent handles calls 24/7, completes bookings and FAQs autonomously, and warm-transfers to staff with context when a human is needed.',
    features: [
      'Real-time streaming speech recognition',
      'Natural, low-latency text-to-speech with barge-in',
      'Task completion: bookings, lookups, and FAQs',
      'Warm transfer to humans with full call context',
      '24/7 availability across multiple languages',
      'Call transcripts, summaries, and analytics',
    ],
    technologies: [
      { name: 'Streaming STT', purpose: 'Real-time speech-to-text' },
      { name: 'LLM', purpose: 'Dialog reasoning and task execution' },
      { name: 'Neural TTS', purpose: 'Natural-sounding voice output' },
      { name: 'Twilio', purpose: 'Telephony and call routing' },
      { name: 'WebRTC', purpose: 'Low-latency audio streaming' },
      { name: 'Node.js', purpose: 'Real-time orchestration service' },
    ],
    devProcess: [
      { step: 'Call-flow analysis', desc: 'Mapped common call reasons and desired outcomes.' },
      { step: 'Latency engineering', desc: 'Tuned the STT-LLM-TTS pipeline for natural turn-taking.' },
      { step: 'Task integration', desc: 'Connected booking and lookup systems for real actions.' },
      { step: 'Handoff design', desc: 'Built warm transfer with context for complex calls.' },
      { step: 'Pilot & tuning', desc: 'Ran live-call pilots and refined prompts and voices.' },
    ],
    results:
      'The voice agent absorbed routine call volume around the clock while keeping callers satisfied.',
    resultPoints: [
      'Over 70% of calls handled without a human',
      'After-hours bookings captured 24/7',
      'Average hold time effectively eliminated for routine calls',
      'Caller satisfaction improved on handled calls',
    ],
    conclusion:
      'A natural, low-latency voice agent turned an overloaded phone line into an always-available service channel that completes real tasks.',
    testimonialQuote:
      'Callers genuinely cannot tell at first — and they get what they called for without waiting on hold.',
    testimonialRole: 'Operations Manager',
    testimonialInitials: 'OM',
    links: [
      { url: '/generative-ai-development-company', text: 'Generative AI Development' },
      { url: '/machine-learning-development-company', text: 'Machine Learning Development' },
      { url: '/mobile-app-development-company', text: 'Mobile App Development' },
    ],
    faq: [
      { question: 'What is an AI voice agent?', answer: 'It is a system that answers phone calls, understands natural speech in real time, holds a conversation, and completes tasks such as bookings or lookups, transferring to a human when needed.' },
      { question: 'How natural does the conversation feel?', answer: 'We engineer the speech-to-text, reasoning, and text-to-speech pipeline for low latency and support barge-in, so callers can interrupt and speak naturally.' },
      { question: 'Can it transfer to a human?', answer: 'Yes. Complex calls are warm-transferred to staff along with a summary of the conversation so far.' },
      { question: 'Does it work after hours?', answer: 'Yes. The agent operates 24/7, capturing bookings and answering questions even when your team is offline.' },
      { question: 'Can it speak multiple languages?', answer: 'Yes. The pipeline supports multiple languages so you can serve a broader caller base.' },
    ],
  },

  {
    slug: 'ai-real-estate-lead-scoring',
    title: 'AI Real Estate Lead Scoring',
    metaTitle: 'AI Real Estate Lead Scoring Case Study',
    industry: 'Real Estate',
    platform: 'Web',
    icon: '🏠',
    color: '#14b8a6',
    keywords: 'AI lead scoring, real estate AI, predictive lead scoring, property tech, AI lead qualification',
    overview:
      'We built an AI lead-scoring engine for a real estate brokerage that predicts which inquiries are most likely to transact, so agents spend their time on the leads that actually convert.',
    challenge:
      'Agents chased every lead equally, wasting effort on low-intent inquiries while hot prospects cooled. There was no data-driven way to prioritize a flood of portal and web leads.',
    challengePoints: [
      'High lead volume with no prioritization',
      'Agents spent equal effort on low- and high-intent leads',
      'Hot prospects went cold while agents chased dead ends',
      'No insight into which signals predicted conversion',
    ],
    approach:
      'We trained a predictive model on historical lead and transaction data, blending behavioral signals, property interest, and engagement to produce a calibrated conversion-likelihood score.',
    solution:
      'The platform scores and ranks every incoming lead in real time, explains the key drivers, and routes hot leads instantly to the right agent.',
    features: [
      'Real-time predictive lead scoring',
      'Explainable score drivers per lead',
      'Behavioral and engagement signal tracking',
      'Instant routing of hot leads to agents',
      'Automated nurture for lower-intent leads',
      'Conversion analytics and model monitoring',
    ],
    technologies: [
      { name: 'Gradient-boosted models', purpose: 'Conversion-likelihood prediction' },
      { name: 'Python / scikit-learn', purpose: 'Model training and evaluation' },
      { name: 'Feature store', purpose: 'Real-time signal serving' },
      { name: 'PostgreSQL', purpose: 'Lead and outcome data' },
      { name: 'FastAPI', purpose: 'Real-time scoring API' },
      { name: 'React', purpose: 'Agent lead dashboard' },
    ],
    devProcess: [
      { step: 'Data consolidation', desc: 'Unified lead, behavioral, and transaction history.' },
      { step: 'Feature engineering', desc: 'Built predictive signals from engagement and intent.' },
      { step: 'Model training', desc: 'Trained and calibrated scoring models against outcomes.' },
      { step: 'Serving & routing', desc: 'Deployed real-time scoring with instant lead routing.' },
      { step: 'Monitoring', desc: 'Added drift detection and periodic retraining.' },
    ],
    results:
      'Agents focused on high-probability leads, lifting conversion while reducing wasted outreach.',
    resultPoints: [
      'Lead-to-deal conversion improved by 38%',
      'Agent time on low-intent leads cut sharply',
      'Hot leads contacted within minutes, not hours',
      'Clear visibility into what drives conversion',
    ],
    conclusion:
      'Predictive lead scoring turned an undifferentiated lead pile into a prioritized pipeline, directing agent effort where it pays off.',
    testimonialQuote:
      'We stopped guessing. The model tells us who to call first, and the numbers prove it works.',
    testimonialRole: 'Brokerage Sales Director',
    testimonialInitials: 'BS',
    links: [
      { url: '/machine-learning-development-company', text: 'Machine Learning Development' },
      { url: '/real-estate-app-development-company', text: 'Real Estate App Development' },
      { url: '/data-science-solutions', text: 'Data Science Solutions' },
    ],
    faq: [
      { question: 'What is AI lead scoring?', answer: 'It is a predictive model that estimates how likely each lead is to convert, so teams can prioritize outreach to the highest-intent prospects.' },
      { question: 'What data does it use?', answer: 'It blends behavioral signals, property interest, engagement history, and past transaction outcomes to produce a calibrated score.' },
      { question: 'Is the score explainable?', answer: 'Yes. Each lead shows the key drivers behind its score, so agents understand why it ranked where it did.' },
      { question: 'Does the model stay accurate over time?', answer: 'We monitor for drift and retrain periodically so the model keeps pace with changing market behavior.' },
      { question: 'How quickly are hot leads handled?', answer: 'High-scoring leads are routed instantly to the right agent so they are contacted within minutes.' },
    ],
  },

  {
    slug: 'ai-content-generation-platform',
    title: 'AI Content Generation Platform',
    metaTitle: 'AI Content Generation Platform Case Study',
    industry: 'Marketing',
    platform: 'Web',
    icon: '✍️',
    color: '#a855f7',
    keywords: 'AI content generation, generative AI writing, content automation, AI copywriting, brand-voice AI',
    overview:
      'We built an AI content generation platform that produces on-brand blogs, product copy, and social posts at scale, with built-in editing, SEO guidance, and approval workflows so quality stays high.',
    challenge:
      'The marketing team could not keep up with content demand across channels. Output was inconsistent in voice, and freelancers were costly and slow.',
    challengePoints: [
      'Content demand outpaced the team\'s capacity',
      'Inconsistent brand voice across channels',
      'High freelancer cost and slow turnaround',
      'No structured review or SEO checks before publishing',
    ],
    approach:
      'We fine-tuned generation on the brand\'s voice and style guide, layered in SEO scoring and fact-grounding, and wrapped it in a collaborative editor with approval gates.',
    solution:
      'The platform drafts content from briefs, enforces brand voice and SEO, and routes pieces through review before publishing to connected channels.',
    features: [
      'Brand-voice-tuned generation from briefs',
      'Built-in SEO scoring and keyword guidance',
      'Collaborative editor with version history',
      'Approval workflows before publishing',
      'Multi-format output: blog, social, product, email',
      'Plagiarism and fact-grounding checks',
    ],
    technologies: [
      { name: 'LLM (fine-tuned)', purpose: 'Brand-voice content generation' },
      { name: 'RAG layer', purpose: 'Grounding in product facts and sources' },
      { name: 'Next.js', purpose: 'Collaborative editor and workflows' },
      { name: 'PostgreSQL', purpose: 'Content, versions, and approvals' },
      { name: 'Elasticsearch', purpose: 'Content search and SEO analysis' },
      { name: 'Node.js', purpose: 'Generation and publishing APIs' },
    ],
    devProcess: [
      { step: 'Voice modeling', desc: 'Captured the brand style guide and sample corpus.' },
      { step: 'Generation tuning', desc: 'Tuned prompts and models to match voice reliably.' },
      { step: 'SEO & grounding', desc: 'Added keyword scoring and fact-grounding checks.' },
      { step: 'Editorial workflow', desc: 'Built the collaborative editor and approval gates.' },
      { step: 'Channel publishing', desc: 'Connected CMS and social channels for one-click publish.' },
    ],
    results:
      'The team produced far more content, faster and more consistently, without sacrificing quality control.',
    resultPoints: [
      'Content output increased 5x',
      'Production cost per piece reduced by 60%',
      'Consistent brand voice across all channels',
      'Faster time-from-brief-to-publish',
    ],
    conclusion:
      'AI content generation scaled the team\'s output dramatically while approval gates and SEO checks kept every published piece on-brand and effective.',
    testimonialQuote:
      'We ship a week\'s worth of content in a day now, and it actually sounds like us.',
    testimonialRole: 'Content Marketing Lead',
    testimonialInitials: 'CM',
    links: [
      { url: '/generative-ai-development-company', text: 'Generative AI Development' },
      { url: '/saas-development-services', text: 'SaaS Development Services' },
      { url: '/web-development-company', text: 'Web Development Services' },
    ],
    faq: [
      { question: 'Can AI match our brand voice?', answer: 'Yes. We tune generation on your style guide and sample content so output consistently reflects your brand voice.' },
      { question: 'How do you prevent inaccurate or off-brand content?', answer: 'Generation is grounded in your product facts, checked for SEO and plagiarism, and routed through human approval before publishing.' },
      { question: 'What formats can it produce?', answer: 'Blogs, product copy, social posts, and email — all from a single brief.' },
      { question: 'Does it help with SEO?', answer: 'Built-in keyword guidance and scoring help each piece target the right terms before it goes live.' },
      { question: 'Can it publish to our channels?', answer: 'Yes. It connects to your CMS and social channels for one-click publishing after approval.' },
    ],
  },

  {
    slug: 'ai-image-recognition-system',
    title: 'AI Image Recognition System',
    metaTitle: 'AI Image Recognition System Case Study',
    industry: 'Manufacturing',
    platform: 'Web',
    icon: '👁️',
    color: '#f43f5e',
    keywords: 'AI image recognition, computer vision, defect detection, visual inspection AI, object detection',
    overview:
      'We built a computer-vision system that inspects products on the line in real time, detecting defects and classifying items with accuracy and consistency that manual inspection could not match.',
    challenge:
      'Manual visual inspection was slow, fatiguing, and inconsistent. Defects slipped through to customers, and there was no data on where quality issues originated.',
    challengePoints: [
      'Manual inspection was slow and inconsistent',
      'Defects escaped to customers, hurting reputation',
      'Inspector fatigue caused missed detections',
      'No analytics on defect types or sources',
    ],
    approach:
      'We trained custom detection and classification models on labeled defect imagery and deployed them at the edge for real-time, low-latency inspection on the line.',
    solution:
      'The system flags defects instantly, classifies type and severity, and feeds a dashboard that pinpoints where and why quality issues arise.',
    features: [
      'Real-time defect detection and classification',
      'Edge deployment for low-latency inspection',
      'Severity scoring and automatic reject signals',
      'Defect analytics by type, line, and shift',
      'Active-learning loop from flagged edge cases',
      'Integration with line-control systems',
    ],
    technologies: [
      { name: 'PyTorch', purpose: 'Detection and classification model training' },
      { name: 'YOLO / CNNs', purpose: 'Real-time object and defect detection' },
      { name: 'ONNX / TensorRT', purpose: 'Optimized edge inference' },
      { name: 'Python', purpose: 'Vision pipeline and tooling' },
      { name: 'React', purpose: 'Inspection analytics dashboard' },
      { name: 'Edge devices', purpose: 'On-line, low-latency inference' },
    ],
    devProcess: [
      { step: 'Data capture & labeling', desc: 'Collected and annotated defect imagery across conditions.' },
      { step: 'Model training', desc: 'Trained and validated detection and classification models.' },
      { step: 'Edge optimization', desc: 'Quantized and optimized models for real-time inference.' },
      { step: 'Line integration', desc: 'Connected to cameras and reject mechanisms.' },
      { step: 'Active learning', desc: 'Looped flagged edge cases back into training.' },
    ],
    results:
      'Inspection became fast, consistent, and data-rich, catching defects manual review missed.',
    resultPoints: [
      'Defect detection accuracy above 98%',
      'Inspection throughput increased significantly',
      'Customer-reported defects reduced sharply',
      'Actionable analytics on defect root causes',
    ],
    conclusion:
      'Computer-vision inspection delivered consistent, real-time quality control and turned visual data into insight that drives upstream improvements.',
    testimonialQuote:
      'It catches things a tired human eye misses — every unit, every shift, without fail.',
    testimonialRole: 'Quality Assurance Manager',
    testimonialInitials: 'QA',
    links: [
      { url: '/machine-learning-development-company', text: 'Machine Learning Development' },
      { url: '/data-science-solutions', text: 'Data Science Solutions' },
      { url: '/custom-software-development-company', text: 'Custom Software Development' },
    ],
    faq: [
      { question: 'What can AI image recognition detect?', answer: 'It can detect and classify objects, defects, and anomalies in images or video — for example surface flaws, missing components, or mislabeled items on a production line.' },
      { question: 'Does it run in real time?', answer: 'Yes. Models are optimized and deployed at the edge for low-latency, real-time inspection directly on the line.' },
      { question: 'How accurate is it?', answer: 'On trained defect classes the system exceeds 98% detection accuracy and stays consistent across shifts.' },
      { question: 'Can it improve after deployment?', answer: 'Yes. An active-learning loop feeds flagged edge cases back into training to keep improving on rare defects.' },
      { question: 'Does it integrate with our line equipment?', answer: 'Yes. It connects to cameras and reject mechanisms and feeds analytics into your quality systems.' },
    ],
  },

  {
    slug: 'predictive-analytics-ai-platform',
    title: 'Predictive Analytics AI Platform',
    metaTitle: 'Predictive Analytics AI Platform Case Study',
    industry: 'Retail',
    platform: 'Web',
    icon: '📊',
    color: '#0891b2',
    keywords: 'predictive analytics, AI forecasting, demand forecasting, machine learning analytics, business intelligence AI',
    overview:
      'We built a predictive analytics platform that forecasts demand, flags churn risk, and surfaces actionable insights from the client\'s data — turning historical reporting into forward-looking decisions.',
    challenge:
      'The client had dashboards full of what already happened but no reliable way to anticipate demand or risk. Stockouts and overstock alternated, and churn was noticed only after customers left.',
    challengePoints: [
      'Reporting was backward-looking only',
      'Demand swings caused stockouts and overstock',
      'Churn detected too late to intervene',
      'Insights buried across disconnected data sources',
    ],
    approach:
      'We unified the data sources, engineered predictive features, and trained forecasting and churn models, then exposed results through clear, decision-oriented dashboards and alerts.',
    solution:
      'The platform delivers demand forecasts, churn-risk scores, and automated insight alerts, with model monitoring to keep predictions trustworthy.',
    features: [
      'Demand and sales forecasting',
      'Churn-risk scoring with drivers',
      'Automated anomaly and insight alerts',
      'Unified data pipeline across sources',
      'Decision-oriented dashboards',
      'Model monitoring and retraining',
    ],
    technologies: [
      { name: 'Python / scikit-learn', purpose: 'Forecasting and churn models' },
      { name: 'Prophet / time-series models', purpose: 'Demand forecasting' },
      { name: 'dbt + warehouse', purpose: 'Unified, modeled data pipeline' },
      { name: 'FastAPI', purpose: 'Prediction-serving APIs' },
      { name: 'React', purpose: 'Analytics dashboards' },
      { name: 'Airflow', purpose: 'Scheduled training and refresh' },
    ],
    devProcess: [
      { step: 'Data unification', desc: 'Consolidated sales, customer, and operations data.' },
      { step: 'Feature engineering', desc: 'Built predictive features for demand and churn.' },
      { step: 'Model development', desc: 'Trained, validated, and calibrated models.' },
      { step: 'Dashboards & alerts', desc: 'Designed decision-focused views and proactive alerts.' },
      { step: 'MLOps', desc: 'Automated retraining and drift monitoring.' },
    ],
    results:
      'The business shifted from reacting to anticipating, improving inventory and retention outcomes.',
    resultPoints: [
      'Forecast error reduced by 31%',
      'Stockout and overstock incidents down materially',
      'At-risk customers flagged in time to retain',
      'Decisions made on forward-looking data',
    ],
    conclusion:
      'A predictive analytics platform converted scattered historical data into reliable forecasts and early warnings that drive better decisions.',
    testimonialQuote:
      'We finally plan around what is coming instead of explaining what already went wrong.',
    testimonialRole: 'Director of Analytics',
    testimonialInitials: 'DA',
    links: [
      { url: '/data-science-solutions', text: 'Data Science Solutions' },
      { url: '/machine-learning-development-company', text: 'Machine Learning Development' },
      { url: '/saas-development-services', text: 'SaaS Development Services' },
    ],
    faq: [
      { question: 'What is a predictive analytics platform?', answer: 'It is a system that uses machine learning on your historical data to forecast future outcomes — like demand or churn — and surface them as actionable insights and alerts.' },
      { question: 'What can it forecast?', answer: 'Common use cases include demand and sales forecasting, churn risk, anomaly detection, and other outcome predictions tailored to your data.' },
      { question: 'How accurate are the forecasts?', answer: 'Accuracy depends on data quality, but in this project forecast error fell 31% versus the prior approach, with ongoing monitoring to maintain it.' },
      { question: 'Do the models stay accurate over time?', answer: 'Yes. We add MLOps with scheduled retraining and drift detection so predictions remain trustworthy.' },
      { question: 'Can it connect to our existing data?', answer: 'Yes. We unify your sales, customer, and operations sources into a modeled pipeline that feeds the models and dashboards.' },
    ],
  },

  {
    slug: 'ai-powered-crm-automation',
    title: 'AI-Powered CRM Automation',
    metaTitle: 'AI-Powered CRM Automation Case Study',
    industry: 'Sales',
    platform: 'Web',
    icon: '🔗',
    color: '#7c3aed',
    keywords: 'AI CRM automation, intelligent CRM, sales automation, CRM data enrichment, AI customer insights',
    overview:
      'We added an AI automation layer to the client\'s CRM that enriches records, logs activity automatically, summarizes interactions, and recommends next steps — eliminating the data hygiene work reps hate.',
    challenge:
      'The CRM was only as good as what reps remembered to enter, which was little. Records were stale, activity went unlogged, and managers could not trust the data.',
    challengePoints: [
      'Reps neglected manual CRM data entry',
      'Records were stale and incomplete',
      'Interactions went unlogged and unsummarized',
      'Managers could not trust pipeline data',
    ],
    approach:
      'We integrated AI that captures activity from email and calls, enriches contacts from external sources, and writes concise interaction summaries straight into the CRM, with next-step suggestions.',
    solution:
      'The automation keeps records current without rep effort and gives managers reliable, AI-summarized pipeline visibility.',
    features: [
      'Automatic activity capture and logging',
      'AI contact and company enrichment',
      'Interaction summaries written to records',
      'Next-step and follow-up recommendations',
      'Duplicate detection and data cleanup',
      'Pipeline-health insights for managers',
    ],
    technologies: [
      { name: 'LLM', purpose: 'Summarization and next-step suggestions' },
      { name: 'Python', purpose: 'Enrichment and sync services' },
      { name: 'CRM APIs', purpose: 'Two-way data synchronization' },
      { name: 'PostgreSQL', purpose: 'Staging and audit data' },
      { name: 'Celery', purpose: 'Background enrichment jobs' },
      { name: 'React', purpose: 'Manager insights dashboard' },
    ],
    devProcess: [
      { step: 'CRM audit', desc: 'Assessed data gaps and rep workflow friction.' },
      { step: 'Capture pipelines', desc: 'Built email/call activity capture and logging.' },
      { step: 'Enrichment & summaries', desc: 'Added enrichment and AI interaction summaries.' },
      { step: 'Recommendations', desc: 'Generated next-step suggestions per record.' },
      { step: 'Rollout', desc: 'Deployed with deduplication and data-cleanup passes.' },
    ],
    results:
      'CRM data became current and trustworthy with effectively zero manual effort from reps.',
    resultPoints: [
      'CRM data completeness rose above 90%',
      'Manual logging effort essentially eliminated',
      'Managers gained reliable pipeline visibility',
      'Faster, better-informed follow-ups',
    ],
    conclusion:
      'AI-powered CRM automation removed the data-entry burden and restored trust in the pipeline, letting reps sell and managers lead with confidence.',
    testimonialQuote:
      'Our CRM finally reflects reality — and nobody had to type a single note to make that happen.',
    testimonialRole: 'Revenue Operations Lead',
    testimonialInitials: 'RO',
    links: [
      { url: '/custom-crm-software-development-company', text: 'Custom CRM Software Development' },
      { url: '/salesforce-integration-services', text: 'Salesforce Integration Services' },
      { url: '/machine-learning-development-company', text: 'Machine Learning Development' },
    ],
    faq: [
      { question: 'What does AI CRM automation do?', answer: 'It automatically captures activity, enriches contacts, summarizes interactions, and suggests next steps inside your CRM, so records stay current without manual data entry.' },
      { question: 'Does it work with our CRM?', answer: 'Yes. We build two-way sync with major CRMs, including Salesforce, so the automation reads and writes to your system of record.' },
      { question: 'Will reps still need to enter data?', answer: 'Almost never. The system logs activity and writes summaries automatically, leaving reps to focus on selling.' },
      { question: 'How does enrichment work?', answer: 'It pulls contact and company details from external sources to fill gaps and keep records complete and accurate.' },
      { question: 'Is the data deduplicated?', answer: 'Yes. The rollout includes duplicate detection and cleanup so the CRM stays tidy over time.' },
    ],
  },

  {
    slug: 'ai-knowledge-base-assistant',
    title: 'AI Knowledge Base Assistant',
    metaTitle: 'AI Knowledge Base Assistant Case Study',
    industry: 'Enterprise',
    platform: 'Web',
    icon: '📚',
    color: '#2563eb',
    keywords: 'AI knowledge base, enterprise search AI, RAG assistant, internal knowledge assistant, semantic search',
    overview:
      'We built an internal AI knowledge assistant that lets employees ask questions in plain language and get accurate, cited answers drawn from scattered wikis, docs, and tickets — ending the daily hunt for information.',
    challenge:
      'Institutional knowledge was fragmented across wikis, drives, and chat history. Employees wasted hours searching, and the same questions were answered over and over.',
    challengePoints: [
      'Knowledge scattered across many disconnected systems',
      'Keyword search returned noise, not answers',
      'Employees lost hours hunting for information',
      'Experts interrupted by repeat questions',
    ],
    approach:
      'We connected the assistant to all content sources, indexed them with semantic embeddings, and used retrieval-augmented generation to answer questions with citations and permission awareness.',
    solution:
      'Employees get instant, source-cited answers in a chat interface that respects access permissions and improves as content grows.',
    features: [
      'Natural-language Q&A over all internal content',
      'Source citations on every answer',
      'Permission-aware retrieval and access control',
      'Connectors to wikis, drives, and ticketing',
      'Automatic re-indexing as content changes',
      'Usage analytics revealing knowledge gaps',
    ],
    technologies: [
      { name: 'LLM', purpose: 'Answer generation with grounding' },
      { name: 'pgvector', purpose: 'Semantic search over content' },
      { name: 'LangChain', purpose: 'Retrieval and citation pipeline' },
      { name: 'Next.js', purpose: 'Chat interface and admin tools' },
      { name: 'Node.js', purpose: 'Connectors and indexing service' },
      { name: 'OAuth / SSO', purpose: 'Permission-aware access' },
    ],
    devProcess: [
      { step: 'Source inventory', desc: 'Catalogued knowledge sources and access models.' },
      { step: 'Indexing pipeline', desc: 'Built connectors and semantic indexing with permissions.' },
      { step: 'Grounded answering', desc: 'Implemented RAG with mandatory citations.' },
      { step: 'Access control', desc: 'Enforced per-user permission-aware retrieval.' },
      { step: 'Rollout & analytics', desc: 'Launched company-wide with gap analytics.' },
    ],
    results:
      'Employees found trustworthy answers in seconds, reclaiming time and easing the load on experts.',
    resultPoints: [
      'Time spent searching for information cut by ~50%',
      'Repeat questions to experts dropped sharply',
      'Answers delivered with verifiable citations',
      'Surfaced gaps where documentation was missing',
    ],
    conclusion:
      'A grounded, permission-aware knowledge assistant turned fragmented institutional knowledge into an instant, trustworthy resource for the whole company.',
    testimonialQuote:
      'It is like having a colleague who has read every document we own and answers in seconds.',
    testimonialRole: 'Head of Internal Operations',
    testimonialInitials: 'IO',
    links: [
      { url: '/generative-ai-development-company', text: 'Generative AI Development' },
      { url: '/saas-development-services', text: 'SaaS Development Services' },
      { url: '/custom-software-development-company', text: 'Custom Software Development' },
    ],
    faq: [
      { question: 'What is an AI knowledge base assistant?', answer: 'It is an internal assistant that answers employees\' plain-language questions using retrieval-augmented generation over your wikis, documents, and tickets, with citations to the source.' },
      { question: 'Does it respect access permissions?', answer: 'Yes. Retrieval is permission-aware, so users only get answers from content they are allowed to see.' },
      { question: 'How does it avoid wrong answers?', answer: 'Every answer is grounded in your real content and cites its sources, and the assistant declines when it lacks supporting material.' },
      { question: 'What sources can it connect to?', answer: 'It connects to wikis, document drives, ticketing systems, and other internal content via secure connectors.' },
      { question: 'Does it stay current?', answer: 'Yes. An automatic re-indexing pipeline keeps the knowledge base in sync as content changes.' },
    ],
  },

  {
    slug: 'custom-llm-development',
    title: 'Custom LLM Development',
    metaTitle: 'Custom LLM Development Case Study',
    industry: 'Technology',
    platform: 'Web',
    icon: '🧠',
    color: '#9333ea',
    keywords: 'custom LLM development, fine-tuned LLM, private LLM, domain-specific language model, on-premise AI',
    overview:
      'We developed a custom, domain-tuned large language model for a client with strict data-privacy needs — delivering expert-level performance on their specialized tasks while keeping all data inside their own infrastructure.',
    challenge:
      'General-purpose APIs could not match the client\'s domain terminology and could not be used at all for their most sensitive data, which had to stay on-premise for compliance.',
    challengePoints: [
      'Generic models misunderstood domain-specific language',
      'Sensitive data could not leave client infrastructure',
      'API costs scaled painfully with volume',
      'No control over model updates or behavior',
    ],
    approach:
      'We curated a domain dataset, fine-tuned an open-weight base model, and deployed it privately with an inference stack the client fully controls, plus an evaluation harness to prove quality.',
    solution:
      'The result is a private, domain-expert LLM running in the client\'s environment, served through an internal API with monitoring and a clear retraining path.',
    features: [
      'Domain-tuned model on curated proprietary data',
      'Fully private, on-premise or VPC deployment',
      'Internal API with autoscaling inference',
      'Evaluation harness proving task quality',
      'Guardrails and safety filtering',
      'Documented retraining and versioning path',
    ],
    technologies: [
      { name: 'Open-weight base LLM', purpose: 'Foundation for fine-tuning' },
      { name: 'LoRA / PEFT', purpose: 'Efficient domain fine-tuning' },
      { name: 'vLLM', purpose: 'High-throughput private inference' },
      { name: 'PyTorch', purpose: 'Training and evaluation' },
      { name: 'Kubernetes', purpose: 'Scalable private deployment' },
      { name: 'Weights & Biases', purpose: 'Experiment tracking and evals' },
    ],
    devProcess: [
      { step: 'Data curation', desc: 'Assembled and cleaned a high-quality domain dataset.' },
      { step: 'Fine-tuning', desc: 'Tuned the base model efficiently with PEFT methods.' },
      { step: 'Evaluation', desc: 'Built task-specific evals to validate quality and safety.' },
      { step: 'Private deployment', desc: 'Deployed the inference stack inside client infrastructure.' },
      { step: 'Monitoring & handover', desc: 'Set up monitoring and a documented retraining path.' },
    ],
    results:
      'The custom model outperformed general APIs on the client\'s tasks while keeping data fully private and costs predictable.',
    resultPoints: [
      'Domain-task accuracy exceeded general-purpose APIs',
      'All sensitive data kept on client infrastructure',
      'Per-query cost reduced at the client\'s volume',
      'Full control over updates, behavior, and safety',
    ],
    conclusion:
      'A custom, privately deployed LLM gave the client domain-expert AI on their own terms — accurate, compliant, controllable, and cost-effective at scale.',
    testimonialQuote:
      'We get a model that speaks our language, never sends data outside, and we control every version.',
    testimonialRole: 'VP of Engineering',
    testimonialInitials: 'VE',
    links: [
      { url: '/generative-ai-development-company', text: 'Generative AI Development' },
      { url: '/machine-learning-development-company', text: 'Machine Learning Development' },
      { url: '/data-science-solutions', text: 'Data Science Solutions' },
    ],
    faq: [
      { question: 'What is custom LLM development?', answer: 'It is building or fine-tuning a large language model on your domain data and deploying it under your control, so it understands your terminology and meets your privacy needs.' },
      { question: 'Can the model run on our own infrastructure?', answer: 'Yes. We deploy privately — on-premise or in your VPC — so sensitive data never leaves your environment.' },
      { question: 'Why not just use a general API?', answer: 'A domain-tuned, private model can outperform general APIs on specialized tasks, keep data in-house for compliance, and offer more predictable costs at scale.' },
      { question: 'How do you prove it is good enough?', answer: 'We build a task-specific evaluation harness to measure quality and safety against your real requirements before launch.' },
      { question: 'Can it be updated later?', answer: 'Yes. We provide a documented retraining and versioning path so the model evolves with your needs.' },
    ],
  },

  {
    slug: 'ai-mobile-app-development',
    title: 'AI Mobile App Development',
    metaTitle: 'AI Mobile App Development Case Study',
    industry: 'Consumer Apps',
    platform: 'iOS & Android',
    icon: '📱',
    color: '#db2777',
    keywords: 'AI mobile app development, on-device AI, AI app, intelligent mobile app, generative AI app',
    overview:
      'We designed and built an AI-powered mobile app that brings personalized recommendations, a conversational assistant, and on-device intelligence to users — delivering a smart, responsive experience on both iOS and Android.',
    challenge:
      'The client wanted AI features users expect — personalization and a natural assistant — but needed them fast, responsive offline, and privacy-respecting, without a heavy backend on every interaction.',
    challengePoints: [
      'Users expected smart, personalized experiences',
      'Latency and offline support were critical',
      'Privacy concerns around sending data to the cloud',
      'Needed a single codebase across iOS and Android',
    ],
    approach:
      'We combined on-device models for fast, private inference with cloud LLM calls for heavier reasoning, in a cross-platform app that degrades gracefully offline.',
    solution:
      'The app pairs a conversational assistant and personalized recommendations with on-device intelligence, syncing securely to the cloud only when needed.',
    features: [
      'Conversational in-app AI assistant',
      'Personalized recommendations from user behavior',
      'On-device inference for speed and privacy',
      'Graceful offline functionality',
      'Cross-platform single codebase',
      'Secure cloud sync for heavier tasks',
    ],
    technologies: [
      { name: 'React Native', purpose: 'Cross-platform mobile app' },
      { name: 'Core ML / TFLite', purpose: 'On-device model inference' },
      { name: 'Cloud LLM API', purpose: 'Heavier reasoning and generation' },
      { name: 'Node.js', purpose: 'Backend sync and orchestration' },
      { name: 'PostgreSQL', purpose: 'User and personalization data' },
      { name: 'Firebase', purpose: 'Auth, push, and analytics' },
    ],
    devProcess: [
      { step: 'UX & AI scoping', desc: 'Defined which features run on-device vs in the cloud.' },
      { step: 'On-device models', desc: 'Optimized and embedded models for mobile inference.' },
      { step: 'Assistant build', desc: 'Implemented the conversational assistant and personalization.' },
      { step: 'Offline & sync', desc: 'Built graceful offline behavior and secure sync.' },
      { step: 'Cross-platform QA', desc: 'Tested performance and parity across iOS and Android.' },
    ],
    results:
      'The app delivered fast, intelligent, privacy-respecting experiences that drove engagement on both platforms.',
    resultPoints: [
      'On-device inference kept key features instant and offline',
      'User engagement and retention improved post-launch',
      'Single codebase shipped to iOS and Android together',
      'Sensitive processing kept on-device for privacy',
    ],
    conclusion:
      'Blending on-device and cloud AI in a cross-platform app delivered the smart, responsive, private experience modern users expect — efficiently and at scale.',
    testimonialQuote:
      'The app feels instant and genuinely smart, and our users love that it works even offline.',
    testimonialRole: 'Founder & CEO',
    testimonialInitials: 'FC',
    links: [
      { url: '/mobile-app-development-company', text: 'Mobile App Development' },
      { url: '/generative-ai-development-company', text: 'Generative AI Development' },
      { url: '/cross-platform-app-development-company', text: 'Cross-Platform App Development' },
    ],
    faq: [
      { question: 'What is an AI mobile app?', answer: 'It is a mobile app that embeds AI features such as a conversational assistant, personalization, or on-device intelligence to deliver smarter, more responsive experiences.' },
      { question: 'Why run AI on-device?', answer: 'On-device inference makes features fast, works offline, and keeps sensitive data on the phone for better privacy.' },
      { question: 'Does it work on both iOS and Android?', answer: 'Yes. We build with a cross-platform framework so a single codebase ships to both platforms with native performance.' },
      { question: 'When does it use the cloud?', answer: 'Heavier reasoning uses a cloud LLM, while lightweight, latency-sensitive, or private tasks run on-device, syncing securely only when needed.' },
      { question: 'Can you add AI to our existing app?', answer: 'Yes. We can integrate assistant and personalization features into an existing app or build a new one from scratch.' },
    ],
  },
];

// ── Run ──
(async () => {
  console.log(`Preparing to upsert ${STUDIES.length} AI case studies...\n`);

  // Ensure schema bits exist (idempotent, safe to re-run).
  await sql`ALTER TABLE case_studies ADD COLUMN IF NOT EXISTS gallery_images jsonb DEFAULT '[]'::jsonb`;
  await sql`CREATE UNIQUE INDEX IF NOT EXISTS case_studies_slug_unique ON case_studies (slug)`;

  const now = Date.now();
  let i = 0;
  for (const s of STUDIES) {
    const { image, gallery } = resolveImages(s.slug);
    if (gallery.length < 4) {
      console.warn(`⚠️  ${s.slug}: found ${gallery.length} gallery images (expected 4)`);
    }
    const canonical = `${SITE}/case-studies/${s.slug}`;
    // Stagger publish_date so the first listed study is newest (top of the grid).
    const publishDate = new Date(now - i * 60_000);
    const ogImage = image;
    const metaDescription = s.overview.length > 158 ? s.overview.slice(0, 155) + '...' : s.overview;

    await sql`
      INSERT INTO case_studies (
        slug, title, industry, platform, icon, color, image, image_alt,
        overview, challenge, challenge_points, approach, solution, features,
        technologies, dev_process, results, result_points, conclusion,
        testimonial_quote, testimonial_role, testimonial_initials, internal_links,
        meta_title, meta_description, keywords, canonical_url, breadcrumb_title,
        og_title, og_description, og_image, schema_json_ld, faq_schema,
        gallery_images, status, published, publish_date, created_at
      ) VALUES (
        ${s.slug}, ${s.title}, ${s.industry}, ${s.platform}, ${s.icon}, ${s.color}, ${image}, ${s.title},
        ${s.overview}, ${s.challenge}, ${JSON.stringify(s.challengePoints)},
        ${s.approach}, ${s.solution}, ${JSON.stringify(s.features)},
        ${JSON.stringify(s.technologies)}, ${JSON.stringify(s.devProcess)},
        ${s.results}, ${JSON.stringify(s.resultPoints)}, ${s.conclusion},
        ${s.testimonialQuote}, ${s.testimonialRole}, ${s.testimonialInitials},
        ${JSON.stringify(s.links)},
        ${s.metaTitle}, ${metaDescription}, ${s.keywords}, ${canonical}, ${s.title},
        ${s.title}, ${metaDescription}, ${ogImage}, ${faqJsonLd(s.faq)},
        ${JSON.stringify(s.faq)},
        ${JSON.stringify(gallery)},
        'published', true, ${publishDate}, NOW()
      )
      ON CONFLICT (slug) DO UPDATE SET
        title = EXCLUDED.title,
        industry = EXCLUDED.industry,
        platform = EXCLUDED.platform,
        icon = EXCLUDED.icon,
        color = EXCLUDED.color,
        image = EXCLUDED.image,
        image_alt = EXCLUDED.image_alt,
        overview = EXCLUDED.overview,
        challenge = EXCLUDED.challenge,
        challenge_points = EXCLUDED.challenge_points,
        approach = EXCLUDED.approach,
        solution = EXCLUDED.solution,
        features = EXCLUDED.features,
        technologies = EXCLUDED.technologies,
        dev_process = EXCLUDED.dev_process,
        results = EXCLUDED.results,
        result_points = EXCLUDED.result_points,
        conclusion = EXCLUDED.conclusion,
        testimonial_quote = EXCLUDED.testimonial_quote,
        testimonial_role = EXCLUDED.testimonial_role,
        testimonial_initials = EXCLUDED.testimonial_initials,
        internal_links = EXCLUDED.internal_links,
        meta_title = EXCLUDED.meta_title,
        meta_description = EXCLUDED.meta_description,
        keywords = EXCLUDED.keywords,
        canonical_url = EXCLUDED.canonical_url,
        breadcrumb_title = EXCLUDED.breadcrumb_title,
        og_title = EXCLUDED.og_title,
        og_description = EXCLUDED.og_description,
        og_image = EXCLUDED.og_image,
        schema_json_ld = EXCLUDED.schema_json_ld,
        faq_schema = EXCLUDED.faq_schema,
        gallery_images = EXCLUDED.gallery_images,
        status = 'published',
        published = true,
        publish_date = EXCLUDED.publish_date
    `;
    console.log(`✅ [${String(++i).padStart(2)}/${STUDIES.length}] ${s.slug}  (${gallery.length} gallery imgs)`);
  }

  console.log('\nDone. View at: ' + SITE + '/case-studies');
  console.log('The /case-studies list (revalidate=60, 3 cards/row) orders by publish_date DESC,');
  console.log('so these 16 appear at the top within ~1 minute / next deploy.');
})().catch((e) => {
  console.error('❌ Error:', e.message);
  process.exit(1);
});
