/**
 * mTouch Labs — THE LOCKED FACT SHEET
 * ═══════════════════════════════════════════════════════════════
 * The single source of truth for every number and name that appears
 * about the company anywhere on this site.
 *
 * WHY THIS FILE EXISTS
 * An SEO audit found the same facts stated differently in different
 * places: 1.5k clients in one section and 500+ in another, a 2014
 * foundingDate in the schema against 14+ years of experience in the
 * copy, 30+ countries on one page and 12+ on the next. Search engines
 * discount figures they cannot corroborate across a site, and a
 * language model asked "how many clients does mTouch Labs have"
 * cannot answer from a site that gives two answers.
 *
 * RULES
 *   1. Nothing on any page retypes one of these values. Import FACTS.
 *   2. Change a value here and it changes everywhere at once.
 *   3. Two files outside this module restate these facts in prose and
 *      must be updated in the same commit:
 *        - app/(home)/page.tsx      → WHO_WE_ARE (built from FACTS)
 *        - public/.well-known/llms.txt
 *
 * "Incorporated 30 August 2012" is the date to confirm against the
 * certificate of incorporation before this ships. Everything else is
 * already published on the site.
 * ═══════════════════════════════════════════════════════════════
 */
export const FACTS = {
  brand: "mTouch Labs",

  /* The logo's own lighter blue, sampled from public/images/logo-black.svg
     (which carries #5599fc alongside brand.css's #3e8cfb). Used for the
     highlighted keywords in the hero headline, so the emphasis colour is
     literally the mark's colour rather than an approximation of it. */
  logoBlue: "#5599FC",

  legalName: "mTouch Labs Private Limited",

  /* Incorporation. `foundingDateISO` is what schema.org consumes;
     `incorporated` is the human form used in prose. 2012 -> 2026 is
     what makes "14+ years" true, which is why the old "2014" in the
     JSON-LD had to go. */
  /* ⚠ FOUNDING YEAR — UNRESOLVED, AND IT NEEDS ONE ANSWER.
     Two dates are in play. Your audit fact sheet said "Incorporated
     30 August 2012 — confirm internally"; /about and the hero copy you
     approved both say 2011. The site is set to 2011 below because that
     is what the visible copy says, and one wrong-but-consistent year
     ranks better than two competing ones.

     Two knock-ons to settle at the same time:
       - "14+ years" is right for 2012. From 2011 it is 15+.
       - `foundingDateISO` is a year only, not a full date, because if
         2011 is correct then 30 August is not the right day.
     Fix the year here and it propagates to the hero, the About copy,
     the Organization JSON-LD and /llms.txt at once. */
  incorporated: "2011",
  foundingDateISO: "2011",
  foundedYear: "2011",

  experience: "14+",

  /* One word for delivered work, everywhere: "projects". Not
     "products", not "solutions" — mixing the three is what made the
     figure look inflated. */
  projects: "1,500+",

  /* 500+, not 1.5k. The 1,500+ figure describes projects, not clients;
     using it for both is the contradiction the audit caught. Raise this
     only when the higher number can be independently defended. */
  clients: "500+",

  countries: "12+",

  hq: "Hyderabad, Telangana",
  otherOffices: "Bengaluru, India and Dover, Delaware, USA",

  /* Street address as published on /contact-us. */
  streetAddress: "#514, Manjeera Trinity Corporate, JNTU–Hitech City Road, Kukatpally",
  postalCode: "500072",

  certifications: "ISO 9001 + ISO 27001",
  membership: "NASSCOM",

  publicSector: "Government of Telangana and the Government of Abu Dhabi",

  /* The award, named in full. An unnamed "industry award" is not
     something a search engine or a language model can cite. */
  award: "Digital Transformation Catalyst, NASSCOM SME Inspire Awards 2026",
} as const;

export type Facts = typeof FACTS;
