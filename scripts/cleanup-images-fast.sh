#!/bin/bash
set -e

PROJECT="$(cd "$(dirname "$0")/.." && pwd)"
IMG_DIR="$PROJECT/public/images"
BACKUP_ZIP="$PROJECT/removed-images-backup.zip"
REF_FILE="/tmp/all-refs.txt"
UNUSED_FILE="/tmp/unused-images.txt"

echo "🔍 Step 1: Building reference index..."
find "$PROJECT/app" "$PROJECT/components" "$PROJECT/lib" "$PROJECT/public/css" "$PROJECT/public/js" \
  -type f \( -name "*.tsx" -o -name "*.ts" -o -name "*.css" -o -name "*.js" -o -name "*.jsx" \) \
  -exec cat {} + > "$REF_FILE" 2>/dev/null
echo "   Index: $(wc -c < "$REF_FILE" | tr -d ' ') bytes"

echo "🔍 Step 2: Checking images..."
> "$UNUSED_FILE"

find "$IMG_DIR" -type f \( -name "*.png" -o -name "*.jpg" -o -name "*.jpeg" -o -name "*.svg" -o -name "*.webp" -o -name "*.gif" \) | while read -r img; do
  rel="${img#$PROJECT/public/}"
  fname=$(basename "$img")
  if ! grep -qF "$rel" "$REF_FILE" && ! grep -qF "$fname" "$REF_FILE"; then
    echo "$img" >> "$UNUSED_FILE"
  fi
done

unused=$(wc -l < "$UNUSED_FILE" | tr -d ' ')
total=$(find "$IMG_DIR" -type f | wc -l | tr -d ' ')
echo "📊 Total: $total | Unused: $unused"

if [ "$unused" -eq 0 ]; then
  echo "✅ No unused images!"; exit 0
fi

echo "📦 Zipping unused images..."
cd "$PROJECT"
cat "$UNUSED_FILE" | sed "s|$PROJECT/||" | xargs zip -q "$BACKUP_ZIP" 2>/dev/null || true

echo "🗑️  Removing..."
xargs rm -f < "$UNUSED_FILE"
find "$IMG_DIR" -type d -empty -delete 2>/dev/null || true

echo "✅ Done! Backup: removed-images-backup.zip ($unused files)"
