#!/bin/bash
echo "✅ Sidebar Navigation Items in Generated HTML:"
echo "=============================================="
grep -o 'nav-item-title">[^<]*' site/intro/index.html | sed 's/nav-item-title">//g'
