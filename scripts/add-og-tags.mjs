

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const APP_DIR = path.join(__dirname, "..", "app");
const BASE_URL = "https://www.mtouchlabs.com";
const OG_IMAGE = `${BASE_URL}/images/web-and-mobile-app-development.png`;

let updated = 0;
let skipped = 0;
let noMetadata = 0;
let errors = [];

function getPagePath(filePath) {
  // Convert file path to URL path
  // app/about-us/page.tsx → /about-us
  // app/page.tsx → /
  const rel = path.relative(APP_DIR, path.dirname(filePath));
  if (rel === "" || rel === ".") return "/";
  return "/" + rel.replace(/\\/g, "/");
}

function findAllPageFiles(dir) {
  const results = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      // Skip node_modules, .next, etc.
      if (["node_modules", ".next", ".git", "api"].includes(entry.name)) continue;
      results.push(...findAllPageFiles(fullPath));
    } else if (entry.name === "page.tsx" || entry.name === "page.jsx") {
      results.push(fullPath);
    }
  }
  return results;
}

function extractMetadataTitle(content) {
  // Try to find title in metadata export
  const titleMatch = content.match(/title:\s*["'`]([^"'`]+)["'`]/);
  return titleMatch ? titleMatch[1] : null;
}

function extractMetadataDescription(content) {
  const descMatch = content.match(/description:\s*\n?\s*["'`]([^"'`]+)["'`]/);
  if (descMatch) return descMatch[1];
  // Try multiline
  const descMatch2 = content.match(/description:\s*\n?\s*"([^"]+)"/);
  return descMatch2 ? descMatch2[1] : null;
}

function hasOpenGraph(content) {
  return content.includes("openGraph") || content.includes("open_graph");
}

function hasTwitter(content) {
  return content.includes("twitter:");
}

function hasCanonical(content) {
  return content.includes("canonical") || content.includes("alternates");
}

function hasMetadataExport(content) {
  return content.includes("export const metadata") || content.includes("export const generateMetadata");
}

function addOgTwitterToMetadata(content, pagePath) {
  const title = extractMetadataTitle(content);
  const description = extractMetadataDescription(content);

  if (!title) return null; // Can't generate OG without title

  const ogBlock = `
  openGraph: {
    title: "${title}",
    description: "${description || title}",
    url: "${BASE_URL}${pagePath}",
    siteName: "mTouch Labs",
    type: "website",
    images: [{ url: "${OG_IMAGE}", width: 1200, height: 630, alt: "${title}" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "${title}",
    description: "${description || title}",
    images: ["${OG_IMAGE}"],
  },`;

  const canonicalBlock = `
  alternates: {
    canonical: "${BASE_URL}${pagePath}",
  },`;

  // Find the closing of metadata object to insert before it
  // Look for the pattern: export const metadata: Metadata = { ... };
  // We need to insert before the last }; of the metadata block

  let modified = content;
  let changes = [];

  // Add canonical if missing
  if (!hasCanonical(content)) {
    // Insert after description line
    const descPattern = /description:\s*\n?\s*["'`][^"'`]*["'`]\s*,?/;
    const descMatch = modified.match(descPattern);
    if (descMatch) {
      const insertPos = descMatch.index + descMatch[0].length;
      modified = modified.slice(0, insertPos) + canonicalBlock + modified.slice(insertPos);
      changes.push("canonical");
    }
  }

  // Add OG + Twitter if missing
  if (!hasOpenGraph(content) || !hasTwitter(content)) {
    // Find the last }; that closes the metadata export
    // Strategy: find "export const metadata" then find its closing
    const metadataStart = modified.indexOf("export const metadata");
    if (metadataStart === -1) return null;

    // Count braces to find the matching closing brace
    let braceCount = 0;
    let closingIndex = -1;
    let foundFirstBrace = false;

    for (let i = metadataStart; i < modified.length; i++) {
      if (modified[i] === "{") {
        braceCount++;
        foundFirstBrace = true;
      } else if (modified[i] === "}") {
        braceCount--;
        if (foundFirstBrace && braceCount === 0) {
          closingIndex = i;
          break;
        }
      }
    }

    if (closingIndex === -1) return null;

    // Insert OG + Twitter before the closing brace
    if (!hasOpenGraph(modified)) {
      modified = modified.slice(0, closingIndex) + ogBlock + "\n" + modified.slice(closingIndex);
      changes.push("openGraph", "twitter");
    } else if (!hasTwitter(modified)) {
      // Only add twitter
      const twitterOnly = `
  twitter: {
    card: "summary_large_image",
    title: "${title}",
    description: "${description || title}",
    images: ["${OG_IMAGE}"],
  },`;
      modified = modified.slice(0, closingIndex) + twitterOnly + "\n" + modified.slice(closingIndex);
      changes.push("twitter");
    }
  }

  return changes.length > 0 ? { content: modified, changes } : null;
}

function generateFullMetadata(content, pagePath) {
  // For pages with NO metadata at all
  // Generate a basic title from the folder name
  const folderName = pagePath === "/" ? "home" : pagePath.slice(1);
  const title = folderName
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");

  const importLine = `import { generateSEO } from "@/lib/seo";\n`;
  const metadataBlock = `\nexport const metadata = generateSEO({
  title: "${title}",
  description: "mTouch Labs provides expert ${title.toLowerCase()} services. Custom software, SaaS, mobile, and web development solutions for enterprises worldwide.",
  path: "${pagePath}",
});\n`;

  // Check if generateSEO is already imported
  if (content.includes("generateSEO")) return null;

  // Add import at top (after existing imports) and metadata before the default export
  let modified = content;

  // Add import
  if (!modified.includes("generateSEO")) {
    // Find the last import statement
    const importLines = modified.match(/^import .+$/gm);
    if (importLines && importLines.length > 0) {
      const lastImport = importLines[importLines.length - 1];
      const lastImportIndex = modified.lastIndexOf(lastImport) + lastImport.length;
      modified = modified.slice(0, lastImportIndex) + "\n" + importLine + modified.slice(lastImportIndex);
    } else {
      modified = importLine + modified;
    }
  }

  // Add metadata before default export
  const defaultExportMatch = modified.match(/export\s+default\s+function/);
  if (defaultExportMatch) {
    const insertPos = defaultExportMatch.index;
    modified = modified.slice(0, insertPos) + metadataBlock + "\n" + modified.slice(insertPos);
  }

  return { content: modified, changes: ["generateSEO (full metadata)"] };
}

// ─── MAIN ───
console.log("🔍 Scanning all page.tsx files...\n");

const pageFiles = findAllPageFiles(APP_DIR);
console.log(`Found ${pageFiles.length} page files\n`);

const report = {
  alreadyComplete: [],
  updated: [],
  needsManualReview: [],
  noMetadataAdded: [],
};

for (const filePath of pageFiles) {
  const pagePath = getPagePath(filePath);
  const content = fs.readFileSync(filePath, "utf-8");

  // Skip API routes, not-found, etc.
  if (pagePath.includes("/api/") || pagePath.includes("_not-found")) {
    skipped++;
    continue;
  }

  const hasOG = hasOpenGraph(content);
  const hasTW = hasTwitter(content);
  const hasCan = hasCanonical(content);
  const hasMeta = hasMetadataExport(content);

  if (hasOG && hasTW && hasCan) {
    report.alreadyComplete.push(pagePath);
    skipped++;
    continue;
  }

  if (hasMeta) {
    // Has metadata but missing OG/Twitter/Canonical
    const result = addOgTwitterToMetadata(content, pagePath);
    if (result) {
      fs.writeFileSync(filePath, result.content, "utf-8");
      report.updated.push({ path: pagePath, changes: result.changes });
      updated++;
    } else {
      report.needsManualReview.push(pagePath);
      errors.push(pagePath);
    }
  } else {
    // No metadata at all — add generateSEO
    const result = generateFullMetadata(content, pagePath);
    if (result) {
      fs.writeFileSync(filePath, result.content, "utf-8");
      report.noMetadataAdded.push(pagePath);
      noMetadata++;
    } else {
      report.needsManualReview.push(pagePath);
    }
  }
}

// ─── REPORT ───
console.log("═══════════════════════════════════════════");
console.log("  📊 SEO AUTO-FIX REPORT");
console.log("═══════════════════════════════════════════\n");

console.log(`✅ Already complete: ${report.alreadyComplete.length} pages`);
if (report.alreadyComplete.length > 0) {
  report.alreadyComplete.forEach((p) => console.log(`   ${p}`));
}

console.log(`\n🔧 Updated (OG/Twitter/Canonical added): ${report.updated.length} pages`);
if (report.updated.length > 0) {
  report.updated.forEach((p) => console.log(`   ${p.path} → +${p.changes.join(", +")}`));
}

console.log(`\n🆕 Full metadata added (generateSEO): ${report.noMetadataAdded.length} pages`);
if (report.noMetadataAdded.length > 0) {
  report.noMetadataAdded.forEach((p) => console.log(`   ${p}`));
}

console.log(`\n⚠️  Needs manual review: ${report.needsManualReview.length} pages`);
if (report.needsManualReview.length > 0) {
  report.needsManualReview.forEach((p) => console.log(`   ${p}`));
}

console.log(`\n─────────────────────────────────────────`);
console.log(`Total: ${pageFiles.length} files | Updated: ${updated + noMetadata} | Skipped: ${skipped} | Review: ${report.needsManualReview.length}`);
console.log(`─────────────────────────────────────────\n`);

if (report.noMetadataAdded.length > 0) {
  console.log("⚠️  Pages with auto-generated titles may need manual title/description updates.");
  console.log("   Check the 'Full metadata added' pages above and update their titles.\n");
}

console.log("✅ Done! Run 'npm run build' to verify no errors.\n");