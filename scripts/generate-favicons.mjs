// scripts/generate-favicons.mjs
// Generates all favicon files Google & browsers need, from your existing logo.
//
// Run from the project root:
//   npm i -D sharp png-to-ico
//   node scripts/generate-favicons.mjs
//
// Outputs (all into public/, served at the site root by Next.js):
//   public/favicon.ico          (16+32+48 multi-size .ico  → required by Google Search)
//   public/favicon-16x16.png
//   public/favicon-32x32.png    (crisp browser-tab icon)
//   public/favicon.svg          (scalable icon for modern browsers)

import sharp from "sharp";
import pngToIco from "png-to-ico";
import { writeFile } from "node:fs/promises";

// Source logo — square PNG. Change this if you have a higher-res square mark.
const SRC = "public/images/icon-192.png";

const png = async (size) => sharp(SRC).resize(size, size).png().toBuffer();

const [p16, p32, p48, p192] = await Promise.all([png(16), png(32), png(48), png(192)]);

await writeFile("public/favicon-16x16.png", p16);
await writeFile("public/favicon-32x32.png", p32);
await writeFile("public/favicon.ico", await pngToIco([p16, p32, p48]));

// SVG favicon. NOTE: this wraps the PNG so it "just works" — if you have the
// actual mTouch Labs logo as a real vector SVG, drop that in as
// public/favicon.svg instead for perfect scaling + dark-mode support.
const b64 = p192.toString("base64");
await writeFile(
  "public/favicon.svg",
  `<svg xmlns="http://www.w3.org/2000/svg" width="192" height="192" viewBox="0 0 192 192"><image href="data:image/png;base64,${b64}" width="192" height="192"/></svg>`
);

console.log("✔ Wrote public/favicon.ico, favicon-16x16.png, favicon-32x32.png, favicon.svg");
