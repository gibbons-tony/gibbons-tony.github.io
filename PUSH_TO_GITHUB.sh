#!/bin/bash

echo "🚀 Preparing Clean Push to GitHub"
echo "================================="
echo ""
echo "This script will create a clean copy of your website and push it to GitHub."
echo "This avoids issues with large git history."
echo ""

# Create temporary directory
TEMP_DIR="/tmp/gibbons-tony-site-$(date +%s)"
echo "📦 Creating clean copy in $TEMP_DIR..."

# Copy only essential files (excluding git history, vendor, _site, etc.)
rsync -av --exclude='.git' \
          --exclude='_site' \
          --exclude='vendor' \
          --exclude='node_modules' \
          --exclude='.bundle' \
          --exclude='.jekyll-cache' \
          --exclude='lighthouse_results' \
          --exclude='readme_preview' \
          --exclude='*.sh' \
          --exclude='*.py' \
          --exclude='*.md' \
          --exclude-from='.gitignore' \
          . "$TEMP_DIR/"

cd "$TEMP_DIR"

echo ""
echo "🔧 Initializing new git repository..."
git init
git remote add origin https://github.com/gibbons-tony/gibbons-tony.github.io.git

echo ""
echo "📝 Adding and committing files..."
git add .
git commit -m "Initial commit: Jekyll al-folio site with enhancements

CONTENT:
- 3 new blog posts (Crucible 1.7M lines, Creating Pull, Cross-Disciplinary)
- 11 enhanced case studies with STAR format
- Updated About and Story pages
- Philosophy and authentic narrative throughout
- Specific metrics ($30B+, $200M+, $100M+)"

echo ""
echo "🌐 Pushing to GitHub..."
git branch -M main
git push -u origin main --force

echo ""
echo "✅ SUCCESS! Your site has been pushed to GitHub."
echo ""
echo "📋 Next Steps:"
echo "1. Go to: https://github.com/gibbons-tony/gibbons-tony.github.io/settings/pages"
echo "2. Under 'Source', select 'Deploy from a branch'"
echo "3. Select 'main' branch and '/ (root)' folder"
echo "4. Click 'Save'"
echo ""
echo "Your site will be live at: https://gibbons-tony.github.io in ~5-10 minutes!"
echo ""
echo "📁 Clean copy location: $TEMP_DIR"
echo "   (You can delete this after verifying the push worked)"