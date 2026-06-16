#!/bin/bash
set -euo pipefail

# =============================================================================
# build.sh — Build script for the Game Guide static site
# Minifies HTML/CSS/JS, optimizes images, generates search index,
# sitemap, robots.txt, and adds cache-busting hashes.
# =============================================================================

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
PROJECT_DIR="$(dirname "$SCRIPT_DIR")"
SRC_DIR="$PROJECT_DIR/src"
DIST_DIR="$PROJECT_DIR/dist"
BUILD_TMP="$PROJECT_DIR/.build-tmp"

# Colors
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
CYAN='\033[0;36m'
NC='\033[0m'

# Counters
total_before=0
total_after=0
file_count=0

cleanup() { rm -rf "$BUILD_TMP"; }
trap cleanup EXIT

echo -e "${CYAN}=== Game Guide Site Build ===${NC}"
echo ""

# --- 1. Clean and prepare output ---
rm -rf "$DIST_DIR"
mkdir -p "$BUILD_TMP/css" "$BUILD_TMP/js" "$BUILD_TMP/images"

echo -e "${YELLOW}[1/8] Copying source files...${NC}"
cp -r "$SRC_DIR/"* "$BUILD_TMP/" 2>/dev/null || true
cp -r "$SRC_DIR/." "$BUILD_TMP/" 2>/dev/null || true

# --- 2. Minify HTML ---
echo -e "${YELLOW}[2/8] Minifying HTML...${NC}"
for html_file in "$BUILD_TMP/"*.html "$BUILD_TMP"/**/*.html; do
    [ -f "$html_file" ] || continue
    size_before=$(wc -c < "$html_file")
    total_before=$((total_before + size_before))

    npx --yes html-minifier-terser \
        --collapse-whitespace \
        --remove-comments \
        --remove-redundant-attributes \
        --remove-empty-attributes \
        --minify-css true \
        --minify-js true \
        -o "$html_file" "$html_file" 2>/dev/null

    size_after=$(wc -c < "$html_file")
    total_after=$((total_after + size_after))
    file_count=$((file_count + 1))
    echo "  HTML: $(basename "$html_file") (${size_before}B → ${size_after}B)"
done

# --- 3. Minify CSS ---
echo -e "${YELLOW}[3/8] Minifying CSS...${NC}"
for css_file in "$BUILD_TMP/"*.css "$BUILD_TMP"/**/*.css; do
    [ -f "$css_file" ] || continue
    size_before=$(wc -c < "$css_file")
    total_before=$((total_before + size_before))

    npx --yes clean-css-cli -O2 -o "$css_file" "$css_file" 2>/dev/null

    size_after=$(wc -c < "$css_file")
    total_after=$((total_after + size_after))
    file_count=$((file_count + 1))
    echo "  CSS: $(basename "$css_file") (${size_before}B → ${size_after}B)"
done

# --- 4. Minify JS ---
echo -e "${YELLOW}[4/8] Minifying JavaScript...${NC}"
for js_file in "$BUILD_TMP/"*.js "$BUILD_TMP"/**/*.js; do
    [ -f "$js_file" ] || continue
    size_before=$(wc -c < "$js_file")
    total_before=$((total_before + size_before))

    npx --yes terser "$js_file" -o "$js_file" --compress --mangle 2>/dev/null

    size_after=$(wc -c < "$js_file")
    total_after=$((total_after + size_after))
    file_count=$((file_count + 1))
    echo "  JS: $(basename "$js_file") (${size_before}B → ${size_after}B)"
done

# --- 5. Optimize images ---
echo -e "${YELLOW}[5/8] Optimizing images...${NC}"
# Optimize SVG files
for svg_file in "$BUILD_TMP/"*.svg "$BUILD_TMP"/**/*.svg; do
    [ -f "$svg_file" ] || continue
    size_before=$(wc -c < "$svg_file")
    total_before=$((total_before + size_before))

    npx --yes svgo "$svg_file" -o "$svg_file" --quiet 2>/dev/null

    size_after=$(wc -c < "$svg_file")
    total_after=$((total_after + size_after))
    file_count=$((file_count + 1))
    echo "  SVG: $(basename "$svg_file") (${size_before}B → ${size_after}B)"
done

# Copy raster images as-is (full imagemin-cli requires complex setup)
for img_file in "$BUILD_TMP/"*.{png,jpg,jpeg,gif,webp,ico} "$BUILD_TMP"/**/*.{png,jpg,jpeg,gif,webp,ico}; do
    [ -f "$img_file" ] || continue
    size=$(wc -c < "$img_file")
    total_before=$((total_before + size))
    total_after=$((total_after + size))
    file_count=$((file_count + 1))
    echo "  IMG: $(basename "$img_file") (${size}B, copied)"
done

# --- 6. Cache-busting: add content hash to CSS/JS filenames ---
echo -e "${YELLOW}[6/8] Adding cache-busting hashes...${NC}"
for css_file in "$BUILD_TMP/"*.css "$BUILD_TMP"/**/*.css; do
    [ -f "$css_file" ] || continue
    dir=$(dirname "$css_file")
    base=$(basename "$css_file")
    hash=$(md5 -q "$css_file" | cut -c1-8)
    hashed_name="${base%.css}.${hash}.css"
    # Update references in HTML files
    find "$BUILD_TMP" -name '*.html' -exec sed -i '' "s|$base|$hashed_name|g" {} +
    mv "$css_file" "$dir/$hashed_name"
    echo "  → $base → $hashed_name"
done

for js_file in "$BUILD_TMP/"*.js "$BUILD_TMP"/**/*.js; do
    [ -f "$js_file" ] || continue
    dir=$(dirname "$js_file")
    base=$(basename "$js_file")
    hash=$(md5 -q "$js_file" | cut -c1-8)
    hashed_name="${base%.js}.${hash}.js"
    find "$BUILD_TMP" -name '*.html' -exec sed -i '' "s|$base|$hashed_name|g" {} +
    mv "$js_file" "$dir/$hashed_name"
    echo "  → $base → $hashed_name"
done

# --- 7. Generate search index ---
echo -e "${YELLOW}[7/8] Generating search index...${NC}"
python3 - "$BUILD_TMP" "$PROJECT_DIR" << 'PYEOF'
import sys, os, json, re
from html.parser import HTMLParser

class PageParser(HTMLParser):
    def __init__(self):
        super().__init__()
        self.title = ""
        self.description = ""
        self.body_text = ""
        self.in_title = False
        self.in_desc = False
        self.in_body = False
        self.skip = False

    def handle_starttag(self, tag, attrs):
        if tag == "title": self.in_title = True
        elif tag == "meta":
            for name, val in attrs:
                if name == "name" and val == "description":
                    for n2, v2 in attrs:
                        if n2 == "content": self.description = v2
        elif tag == "body": self.in_body = True
        elif tag in ("script", "style", "nav", "footer"): self.skip = True

    def handle_endtag(self, tag):
        if tag == "title": self.in_title = False
        elif tag == "body": self.in_body = False
        elif tag in ("script", "style", "nav", "footer"): self.skip = False

    def handle_data(self, data):
        if self.in_title: self.title += data
        elif self.in_body and not self.skip:
            self.body_text += data + " "

src_dir = sys.argv[1]
base_url = sys.argv[2] if len(sys.argv) > 2 else ""
index = []

for root, dirs, files in os.walk(src_dir):
    for f in sorted(files):
        if not f.endswith(".html"): continue
        path = os.path.relpath(os.path.join(root, f), src_dir)
        filepath = os.path.join(root, f)
        with open(filepath, "r", encoding="utf-8", errors="ignore") as fh:
            content = fh.read()
        parser = PageParser()
        try: parser.feed(content)
        except: continue
        text = re.sub(r'\s+', ' ', parser.body_text).strip()
        if parser.title or text:
            index.append({
                "title": parser.title.strip() or f,
                "description": parser.description.strip(),
                "url": "/" + path.replace("\\", "/"),
                "body": text[:500]
            })

out = os.path.join(src_dir, "search-index.json")
with open(out, "w", encoding="utf-8") as fh:
    json.dump(index, fh, ensure_ascii=False, indent=2)
print(f"  → search-index.json ({len(index)} pages)")
PYEOF

# --- 8. Generate robots.txt and sitemap.xml ---
echo -e "${YELLOW}[8/8] Generating robots.txt and sitemap.xml...${NC}"

# Default domain — override with SITE_URL env var
SITE_URL="${SITE_URL:-https://example.com}"

cat > "$BUILD_TMP/robots.txt" << EOF
User-agent: *
Allow: /
Sitemap: ${SITE_URL}/sitemap.xml
EOF
echo "  → robots.txt"

sitemap_header='<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">'
sitemap_footer="</urlset>"

# Collect HTML files for sitemap
sitemap_urls=""
for html_file in $(find "$BUILD_TMP" -name '*.html' | sort); do
    rel_path=$(python3 -c "import os; print(os.path.relpath('$html_file', '$BUILD_TMP'))")
    lastmod=$(date -u +"%Y-%m-%d")
    sitemap_urls+="  <url><loc>${SITE_URL}/${rel_path}</loc><lastmod>${lastmod}</lastmod><changefreq>weekly</changefreq><priority>0.7</priority></url>"$'\n'
done

printf '%s\n%s%s\n' "$sitemap_header" "$sitemap_urls" "$sitemap_footer" > "$BUILD_TMP/sitemap.xml"
echo "  → sitemap.xml"

# --- Move to dist ---
mv "$BUILD_TMP" "$DIST_DIR"

# --- Print summary ---
echo ""
echo -e "${GREEN}=== Build Complete ===${NC}"
echo "  Files processed: $file_count"
if [ $total_before -gt 0 ]; then
    savings=$((100 - (total_after * 100 / total_before)))
    echo "  Before: $(numfmt --to=iec $total_before 2>/dev/null || echo "${total_before}B")"
    echo "  After:  $(numfmt --to=iec $total_after 2>/dev/null || echo "${total_after}B")"
    echo "  Savings: ~${savings}%"
fi
echo "  Output: $DIST_DIR/"
echo ""
echo -e "${CYAN}Tip: Set SITE_URL env var for correct sitemap URLs${NC}"
echo -e "${CYAN}  SITE_URL=https://yourdomain.com ./scripts/build.sh${NC}"
