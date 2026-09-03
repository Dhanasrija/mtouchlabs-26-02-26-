#!/usr/bin/env node
/**
 * mTouch Labs — SEO LOCK-IN CODEMOD
 * ════════════════════════════════════════════════════════════════
 * Run once, from the project root:
 *
 *     node seo-lock.mjs --dry     # report only, changes nothing
 *     node seo-lock.mjs           # apply
 *
 * WHAT IT FIXES, across every public page under app/
 *
 *  1. DOUBLE "| mTouch Labs" IN TITLES
 *     app/layout.tsx sets `title.template = "%s | mTouch Labs"`. Any
 *     page whose own title already ends in "| mTouch Labs" and is a
 *     plain string gets the suffix appended a second time, shipping
 *     "... | mTouch Labs | mTouch Labs". The fix is to wrap that title
 *     in `{ absolute: "..." }`, which tells Next to skip the template.
 *     Titles that do NOT already carry the brand are left as plain
 *     strings on purpose — the template is what adds their brand, and
 *     that is correct behaviour.
 *
 *  2. MISSING CANONICAL
 *     Every page must declare its own canonical. The root layout
 *     deliberately does not set one (a root canonical cascades and
 *     tells Google every page is a duplicate of the homepage), so a
 *     page without one has none at all. Absolute URLs are used rather
 *     than paths so the value is unambiguous in the emitted HTML.
 *
 *  3. CONTRADICTORY FIGURES
 *     The audit found the same facts stated differently in different
 *     places. Every variant below is rewritten to the single locked
 *     value from lib/facts.ts.
 *
 * WHAT IT WILL NOT TOUCH
 *   - app/(home)/page.tsx  — already done by hand, and its canonical is
 *     emitted as a literal <link> because of a Next 14 bug with the
 *     root path (see the note in that file).
 *   - app/admin/**, app/api/**  — not indexed, no metadata to fix.
 *   - Dynamic routes ([slug]) — their canonical has to be built from
 *     the slug at request time, so they are reported, never rewritten.
 *   - Any page whose metadata it cannot parse with confidence. Those
 *     are listed at the end as MANUAL so nothing is silently mangled.
 *
 * Every change is printed. Nothing is written in --dry mode.
 * ════════════════════════════════════════════════════════════════
 */

import { readFileSync, writeFileSync, readdirSync, statSync } from "node:fs";
import { join, relative, sep } from "node:path";

const ROOT = process.cwd();
const APP = join(ROOT, "app");
const ORIGIN = "https://www.mtouchlabs.com";
const DRY = process.argv.includes("--dry");

/* ── The locked values. Must match lib/facts.ts exactly. ────────── */
const LOCKED = {
  clients: "500+",
  projects: "1,500+",
  countries: "12+",
  experience: "14+",
  foundedYear: "2012",
};

/*
 * Figure corrections, applied to page text.
 *
 * Ordered longest-pattern-first so that a broad rule never eats a
 * narrow one. Each entry is [regex, replacement, why].
 */
const FIGURE_FIXES = [
  // "1.5k Happy Clients" and friends — the claim the audit said to remove.
  [/\b1\.5\s*k\+?\s+(happy\s+)?clients\b/gi, `${LOCKED.clients} Clients`,
    "1.5k clients contradicted the 500+ figure used elsewhere"],
  [/\b1,?500\+?\s+(happy\s+)?clients\b/gi, `${LOCKED.clients} Clients`,
    "1,500+ describes projects, not clients"],
  [/\b1\.5\s*k\+?\s+(happy\s+)?customers\b/gi, `${LOCKED.clients} Clients`,
    "same claim, worded as customers"],
  [/\bHappy Clients\b/g, "Clients Served",
    "one label for the metric, everywhere"],

  // Country count. /clutch said 20+ where everything else said 12+.
  [/\b(40|35|30|25|20|15|10)\+\s+countries\b/gi, `${LOCKED.countries} countries`,
    `country count locked to ${LOCKED.countries}`],

  // Founding year in prose. /about said "founded in 2011" in both its FAQ
  // and its intro paragraph, against 2012 everywhere else.
  [/\bfounded in 20(09|10|11|13|14|15)\b/gi, `founded in ${LOCKED.foundedYear}`,
    `founding year locked to ${LOCKED.foundedYear}`],
  [/\bestablished in 20(09|10|11|13|14|15)\b/gi, `established in ${LOCKED.foundedYear}`,
    `founding year locked to ${LOCKED.foundedYear}`],

  // Thousands separator on the project count. "1500+" and "1,500+" are the
  // same number but read as two different claims to a crawler diffing text.
  [/\b1500\+/g, LOCKED.projects,
    "one spelling of the project count, with the comma"],

  // Years of experience / founding year.
  [/\b(10|11|12|13|15|16)\+\s+years\b/gi, `${LOCKED.experience} years`,
    `experience locked to ${LOCKED.experience} years`],
  [/"foundingDate":\s*"20(14|13|15)"/g, `"foundingDate": "${LOCKED.foundedYear}"`,
    "foundingDate must be 2012 for 14+ years to be true"],
  [/foundingDate:\s*"20(14|13|15)"/g, `foundingDate: "${LOCKED.foundedYear}"`,
    "same, unquoted key"],
  [/\bsince\s+20(14|13|15)\b/g, `since ${LOCKED.foundedYear}`,
    "founding year in prose"],
];

/* ── Walk app/, collecting page.tsx files worth touching ────────── */
const SKIP_DIRS = new Set(["admin", "api", "node_modules"]);

function findPages(dir, out = []) {
  for (const name of readdirSync(dir)) {
    const full = join(dir, name);
    let st;
    try { st = statSync(full); } catch { continue; }
    if (st.isDirectory()) {
      if (SKIP_DIRS.has(name)) continue;
      findPages(full, out);
    } else if (name === "page.tsx") {
      out.push(full);
    }
  }
  return out;
}

/**
 * The route a page.tsx serves.
 * Route groups — a directory in parentheses such as (home) — are part
 * of the filesystem, not the URL, so they are dropped.
 */
function routeFor(file) {
  const rel = relative(APP, file).split(sep).slice(0, -1);
  const segs = rel.filter((s) => !(s.startsWith("(") && s.endsWith(")")));
  return "/" + segs.join("/");
}

const pages = findPages(APP).sort();
const report = { titles: [], canonicals: [], figures: [], manual: [], skipped: [] };

for (const file of pages) {
  const route = routeFor(file);

  // The homepage was done by hand and has a deliberate non-standard
  // canonical; leave it completely alone.
  if (route === "/") { report.skipped.push([route, "homepage — hand-edited"]); continue; }

  let src = readFileSync(file, "utf8");
  const before = src;
  const isDynamic = route.includes("[");

  /* ── 3. figures (applies to every page, dynamic or not) ── */
  for (const [re, to, why] of FIGURE_FIXES) {
    const hits = src.match(re);
    if (hits) {
      src = src.replace(re, to);
      report.figures.push([route, `${hits.length}x ${hits[0]} -> ${to}`, why]);
    }
  }

  /* ── 1. double-pipe titles ── */
  // Only a plain-string `title:` at the top level of the metadata object
  // is a candidate. `title: {` is already an object and needs no help.
  const titleRe = /(\n\s{2}title:\s*)(["'`])((?:[^"'`\\]|\\.)*)\2/;
  const tm = src.match(titleRe);
  if (tm) {
    const value = tm[3];
    if (/\|\s*mTouch Labs\s*$/i.test(value)) {
      src = src.replace(titleRe, `$1{ absolute: $2${value}$2 }`);
      report.titles.push([route, `"${value}" -> absolute (template would have doubled the brand)`]);
    }
  } else if (/export const metadata/.test(src) && !/title:\s*\{/.test(src)) {
    report.manual.push([route, "has metadata but no title this script could read"]);
  }

  /* ── 2. canonical ── */
  const hasCanonical = /canonical\s*:/.test(src.replace(/^\s*\/\/.*$/gm, ""));
  if (!hasCanonical) {
    if (isDynamic) {
      report.manual.push([route, "dynamic route — canonical must be built from the slug at request time"]);
    } else if (/alternates\s*:\s*\{/.test(src)) {
      src = src.replace(/(alternates\s*:\s*\{)/, `$1\n    canonical: "${ORIGIN}${route}",`);
      report.canonicals.push([route, "added into the existing alternates block"]);
    } else if (/export const metadata[^=]*=\s*\{/.test(src)) {
      src = src.replace(
        /(export const metadata[^=]*=\s*\{)/,
        `$1\n  // Every page declares its own canonical: app/layout.tsx sets none,\n  // because a root canonical would mark every page a duplicate of "/".\n  alternates: { canonical: "${ORIGIN}${route}" },`
      );
      report.canonicals.push([route, "added with a new alternates block"]);
    } else {
      report.manual.push([route, "no `export const metadata` found — canonical must be added by hand"]);
    }
  } else if (isDynamic) {
    report.skipped.push([route, "dynamic route, already has a canonical"]);
  }

  if (src !== before && !DRY) writeFileSync(file, src, "utf8");
}

/* ── Report ────────────────────────────────────────────────────── */
const line = (s) => console.log(s);
line("");
line(`mTouch Labs SEO lock-in ${DRY ? "(DRY RUN — nothing written)" : "(applied)"}`);
line(`${pages.length} page.tsx files scanned under app/ (admin and api excluded)`);
line("");

for (const [heading, rows, fmt] of [
  ["TITLES un-doubled", report.titles, (r) => `${r[0]}\n      ${r[1]}`],
  ["CANONICALS added", report.canonicals, (r) => `${r[0]}\n      ${r[1]}`],
  ["FIGURES corrected", report.figures, (r) => `${r[0]}\n      ${r[1]}\n      why: ${r[2]}`],
  ["NEEDS A HUMAN", report.manual, (r) => `${r[0]}\n      ${r[1]}`],
]) {
  line(`── ${heading} (${rows.length})`);
  if (!rows.length) line("   none");
  for (const r of rows) line(`   • ${fmt(r)}`);
  line("");
}

line("Next: run `npm run build` and check the emitted <title> and");
line("<link rel=\"canonical\"> on a handful of routes before deploying.");
