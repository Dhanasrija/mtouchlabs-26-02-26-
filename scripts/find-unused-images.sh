#!/bin/bash
# Find unused images in public/images/
# Strategy: list all images, then check if each filename is referenced in app/, components/, lib/, public/

BASE_DIR="/Users/srijaaiethamsetti/Downloads/vercel-test/mtouch1-mtouchwebsite_nextjs-4b0a6d19df4f"
cd "$BASE_DIR"

# Find all image files
find public/images -type f \( -name "*.png" -o -name "*.jpg" -o -name "*.jpeg" -o -name "*.svg" -o -name "*.webp" -o -name "*.gif" \) | sed 's|^public/||' | sort > /tmp/all_images.txt

echo "Total images found: $(wc -l < /tmp/all_images.txt)"
echo ""
echo "=== UNUSED IMAGES ==="

UNUSED_COUNT=0
while IFS= read -r img; do
  # Skip explicitly excluded files
  case "$img" in
    images/favicon.png|images/Light.png|images/logo-*.svg) continue ;;
  esac

  # Get the filename for searching - use the path after 'images/'
  # Images are referenced as /images/... in code
  search_path="/$img"

  # Also try just the filename
  filename=$(basename "$img")

  # Search in source files
  found=0

  # Check for the full path reference
  if grep -rq "$search_path" app/ components/ lib/ middleware.ts 2>/dev/null; then
    found=1
  fi

  # Also check in public css/js files if they exist
  if [ "$found" -eq 0 ] && [ -d "public/css" ]; then
    if grep -rq "$search_path" public/css/ 2>/dev/null; then
      found=1
    fi
  fi
  if [ "$found" -eq 0 ] && [ -d "public/js" ]; then
    if grep -rq "$search_path" public/js/ 2>/dev/null; then
      found=1
    fi
  fi

  # Try searching by just filename (some refs might be constructed dynamically)
  if [ "$found" -eq 0 ]; then
    if grep -rq "$filename" app/ components/ lib/ 2>/dev/null; then
      found=1
    fi
  fi

  if [ "$found" -eq 0 ]; then
    echo "$img"
    UNUSED_COUNT=$((UNUSED_COUNT + 1))
  fi
done < /tmp/all_images.txt

echo ""
echo "Total unused: $UNUSED_COUNT"
