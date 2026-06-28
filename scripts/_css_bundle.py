#!/usr/bin/env python3
"""Bundle + minify all local /public/css stylesheets into a single
bundle.css, preserving the EXACT cascade order they were linked in
app/layout.tsx. External Google-Font @import rules are hoisted to the top
(the only valid position once files are concatenated); the dead
`@import "tailwindcss"` and the JS-imported `@import './brand.css'` are
dropped. Run this after editing any source CSS, then bump the ?v= query in
app/layout.tsx so browsers/CDN pick up the new bundle.

Requires esbuild (npm i esbuild). Usage: python3 scripts/_css_bundle.py
"""
import re, os, subprocess, sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
CSS = os.path.join(ROOT, "public", "css")
ESBUILD = os.path.join(ROOT, "node_modules", ".bin", "esbuild")

# Order MUST match the original <link> order in app/layout.tsx.
ORDER = [
    "bootstrap.min.css", "plugin.min.css", "all.min.css", "ionicon.min.css",
    "style.css", "responsive.css", "mega-menu.css", "about.css", "blog.css",
    "home-mega-menu.css", "navbar-redesign.css", "chat-widget.css",
    "location-pages.css", "navbar-dropdown.css", "services.css",
    "homepage-fixes.css", "ui-fixes.css",
]

# url(...) form (semicolons allowed inside the parens) OR bare string form.
IMP_RE = re.compile(
    r"""@import\s+(?:url\(\s*(['"]?)[^)]*\1\s*\)|(['"])[^'"]*\2)\s*[^;]*;""",
    re.IGNORECASE,
)

font_imports, seen, parts = [], set(), []
for f in ORDER:
    txt = open(os.path.join(CSS, f), encoding="utf-8").read()
    def repl(m):
        s = re.sub(r"\s+", " ", m.group(0)).strip()
        if "fonts.googleapis" in s.lower() and s not in seen:
            seen.add(s); font_imports.append(s)
        return ""  # strip every inline @import (font ones are hoisted below)
    parts.append(f"/* ==== {f} ==== */\n{IMP_RE.sub(repl, txt)}\n")

combined = "\n".join(font_imports) + "\n" + "".join(parts)
tmp = os.path.join(CSS, "_combined.css")
open(tmp, "w", encoding="utf-8").write(combined)
print(f"hoisted {len(font_imports)} font @imports | combined {len(combined)} bytes")

out = os.path.join(CSS, "bundle.css")
r = subprocess.run([ESBUILD, tmp, "--minify", f"--outfile={out}", "--log-level=error"])
open(tmp, "w").write("")  # truncate temp (mount may forbid unlink)
if r.returncode != 0:
    sys.exit("esbuild failed")
print("bundle.css:", os.path.getsize(out), "bytes")
