#!/usr/bin/env python3
"""Repoint /images and /uploads .png/.jpg refs to .webp where a SMALLER
webp exists. Only rewrites exact paths present in the manifest, so it can
never create a broken reference. Excludes favicon / OG share image."""
import os, json, re

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
manifest = json.load(open(os.path.join(ROOT, "scripts/_webp_manifest.json")))

EXCLUDE_SUBSTR = ("favicon",)            # keep favicons as png
EXCLUDE_EXACT = {"/images/Light.png"}    # OG/twitter share image — keep png

mapping = {}
for m in manifest:
    if not m["smaller"]:
        continue
    src = m["src"]
    if src in EXCLUDE_EXACT:
        continue
    if any(s in src.lower() for s in EXCLUDE_SUBSTR):
        continue
    mapping[src] = m["webp"]
print("rewritable mappings:", len(mapping))

SKIP_DIRS = {"node_modules", ".next", ".git", ".vercel", "scripts"}
EXTS = (".tsx", ".ts", ".jsx", ".js", ".css", ".mjs", ".cjs")
pat = re.compile(r"/(?:images|uploads)/[^\"'`)\s]+?\.(?:png|jpe?g)", re.IGNORECASE)

files_changed, total_repl = 0, 0
per_ext = {}
for dirpath, dirnames, filenames in os.walk(ROOT):
    dirnames[:] = [d for d in dirnames if d not in SKIP_DIRS]
    for fn in filenames:
        if not fn.endswith(EXTS):
            continue
        p = os.path.join(dirpath, fn)
        try:
            txt = open(p, encoding="utf-8").read()
        except Exception:
            continue
        count = [0]
        def repl(mo):
            s = mo.group(0)
            if s in mapping:
                count[0] += 1
                return mapping[s]
            return s
        new = pat.sub(repl, txt)
        if count[0]:
            open(p, "w", encoding="utf-8").write(new)
            files_changed += 1
            total_repl += count[0]
            ext = os.path.splitext(fn)[1]
            per_ext[ext] = per_ext.get(ext, 0) + count[0]

print("files changed:", files_changed, "| total refs repointed:", total_repl)
print("by ext:", per_ext)
