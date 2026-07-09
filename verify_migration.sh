#!/bin/bash
echo "✅ Content Migration Verification"
echo "================================="
echo ""
echo "Source Markdown Files:"
ls -1 docs/*.md
echo ""
echo "Generated HTML Pages:"
find site -name "index.html" -type f | grep -v "site/index.html" | sort
echo ""
echo "Page Content Sample:"
echo ""
for page in site/*/index.html; do
  page_name=$(basename $(dirname $page))
  echo "📄 $page_name:"
  sed -n '/<main class="content-area"/,/<\/main>/p' "$page" | grep -oE '<h[1-4][^>]*>[^<]+' | head -2 | sed 's/<h[0-9][^>]*>//g'
  echo ""
done
