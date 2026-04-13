#!/bin/bash
# Find unused images in public/images/ and zip + remove them
# Run from project root

set -e

PROJECT_DIR="$(cd "$(dirname "$0")/.." && pwd)"
IMG_DIR="$PROJECT_DIR/public/images"
BACKUP_ZIP="$PROJECT_DIR/removed-images-backup.zip"
TEMP_LIST="/tmp/unused-images.txt"

echo "🔍 Scanning images in $IMG_DIR..."
echo "" > "$TEMP_LIST"

# Count total
total=0
unused=0

# Find all images recursively
while IFS= read -r img; do
  total=$((total + 1))
  # Get relative path from public/
  rel="${img#$PROJECT_DIR/public/}"

  # Search for this image reference in codebase
  # Check tsx, ts, css, js files
  found=$(grep -rl "$rel" \
    "$PROJECT_DIR/app/" \
    "$PROJECT_DIR/components/" \
    "$PROJECT_DIR/public/css/" \
    "$PROJECT_DIR/public/js/" \
    "$PROJECT_DIR/lib/" \
    2>/dev/null | head -1)

  if [ -z "$found" ]; then
    # Also check just the filename (some references use just the name)
    fname=$(basename "$img")
    found2=$(grep -rl "$fname" \
      "$PROJECT_DIR/app/" \
      "$PROJECT_DIR/components/" \
      "$PROJECT_DIR/public/css/" \
      "$PROJECT_DIR/public/js/" \
      2>/dev/null | head -1)

    if [ -z "$found2" ]; then
      echo "$img" >> "$TEMP_LIST"
      unused=$((unused + 1))
    fi
  fi
done < <(find "$IMG_DIR" -type f \( -name "*.png" -o -name "*.jpg" -o -name "*.jpeg" -o -name "*.svg" -o -name "*.webp" -o -name "*.gif" \) 2>/dev/null)

echo "📊 Total images: $total"
echo "🗑️  Unused images: $unused"

if [ "$unused" -eq 0 ]; then
  echo "✅ No unused images found!"
  exit 0
fi

echo ""
echo "📦 Creating backup zip: $BACKUP_ZIP"
# Create zip from the list
cd "$PROJECT_DIR"
cat "$TEMP_LIST" | sed "s|$PROJECT_DIR/||" | xargs zip -q "$BACKUP_ZIP" 2>/dev/null || true

echo "🗑️  Removing unused images..."
while IFS= read -r img; do
  [ -z "$img" ] && continue
  rm -f "$img"
  echo "   Removed: ${img#$PROJECT_DIR/public/}"
done < "$TEMP_LIST"

# Clean up empty directories
find "$IMG_DIR" -type d -empty -delete 2>/dev/null || true

echo ""
echo "✅ Done! Backup saved to: removed-images-backup.zip"
echo "   You can restore with: unzip removed-images-backup.zip"
