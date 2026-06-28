#!/usr/bin/env python3
"""One-off: convert all PNG/JPG under public/ to .webp siblings.
Keeps originals (fallback). Records a webp as 'smaller' only when it
actually beats the source size. Pillow drops metadata by default."""
import os, json, sys
from concurrent.futures import ThreadPoolExecutor
from PIL import Image

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
PUBLIC = os.path.join(ROOT, "public")
QUALITY = 80

files = []
for dirpath, _, filenames in os.walk(PUBLIC):
    for fn in filenames:
        if fn.lower().endswith((".png", ".jpg", ".jpeg")):
            files.append(os.path.join(dirpath, fn))
print("Source raster files:", len(files), flush=True)

manifest = []
counters = {"converted": 0, "bigger": 0, "errors": 0, "done": 0}

def to_webp(src):
    out = os.path.splitext(src)[0] + ".webp"
    pub = "/" + os.path.relpath(src, PUBLIC).replace(os.sep, "/")
    webp_pub = os.path.splitext(pub)[0] + ".webp"
    rec = None
    try:
        im = Image.open(src)
        has_alpha = im.mode in ("RGBA", "LA", "P") and ("transparency" in im.info or im.mode in ("RGBA", "LA"))
        if im.mode == "P":
            im = im.convert("RGBA" if "transparency" in im.info else "RGB")
        elif im.mode not in ("RGB", "RGBA", "L", "LA"):
            im = im.convert("RGBA" if has_alpha else "RGB")
        im.save(out, "WEBP", quality=QUALITY, method=4)
        src_size = os.path.getsize(src)
        out_size = os.path.getsize(out)
        smaller = out_size < src_size
        rec = {"src": pub, "webp": webp_pub, "smaller": smaller,
               "srcSize": src_size, "outSize": out_size}
        counters["converted" if smaller else "bigger"] += 1
    except Exception as e:
        counters["errors"] += 1
        sys.stderr.write(f"ERR {pub}: {e}\n")
    finally:
        counters["done"] += 1
        if counters["done"] % 200 == 0:
            print(f"  {counters['done']}/{len(files)}", flush=True)
    return rec

with ThreadPoolExecutor(max_workers=8) as ex:
    for r in ex.map(to_webp, files):
        if r:
            manifest.append(r)

with open(os.path.join(ROOT, "scripts/_webp_manifest.json"), "w") as f:
    json.dump(manifest, f)

orig = sum(m["srcSize"] for m in manifest)
used = sum(m["outSize"] if m["smaller"] else m["srcSize"] for m in manifest)
print("------")
print("converted(smaller):", counters["converted"],
      "| kept-original(webp bigger):", counters["bigger"],
      "| errors:", counters["errors"])
print(f"orig total: {orig/1048576:.1f} MB")
print(f"served after rewrite: {used/1048576:.1f} MB")
print(f"savings: {(orig-used)/1048576:.1f} MB")
