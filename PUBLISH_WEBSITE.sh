#!/bin/bash

# Website Publishing Script
# Created: March 12, 2026
# Purpose: Publish all website enhancements to GitHub Pages

echo "🚀 Website Publishing Script"
echo "============================"
echo ""
echo "This will publish all the enhancements to your live website:"
echo "- 3 new blog posts (Crucible 1.7M lines, Creating Pull, Cross-Disciplinary)"
echo "- 11 enhanced case studies with STAR format"
echo "- Updated About and Story pages with philosophy"
echo "- Enhanced projects and resume"
echo ""
read -p "Do you want to proceed? (y/n): " -n 1 -r
echo ""

if [[ $REPLY =~ ^[Yy]$ ]]; then
    echo ""
    echo "📦 Stage 1: Adding all changes..."

    # Add modified files
    git add _casestudies/*.md
    git add _pages/about.md
    git add _pages/story.md
    git add _projects/*.md
    git add assets/json/resume.json

    # Add new blog posts
    git add _posts/2026-03-12-*.md

    # Add new homelessness project if it exists
    if [ -f "_projects/homelessness_analysis.md" ]; then
        git add _projects/homelessness_analysis.md
    fi

    # Remove deleted files
    git rm -f assets/prompts/portfolio-prompts_WS_COPY.json 2>/dev/null
    git rm -f gemini-dual-theme-prompts_WS_COPY.md 2>/dev/null
    git rm -f imagen-4-ultra-prompts_WS_COPY.md 2>/dev/null
    git rm -f portfolio-image-prompts-complete_WS_COPY.md 2>/dev/null

    echo "✅ All changes staged"
    echo ""

    echo "📝 Stage 2: Creating commit..."
    git commit -m "Major website enhancement: Authentic narrative + Crucible achievement

BLOG POSTS:
- Added 'I Built a 1.7M Line AI Software Company in 31 Days' with full journey
- Added 'Creating Pull vs. Pushing Harder' leadership philosophy
- Added 'The Cross-Disciplinary Advantage' career insights

CASE STUDIES:
- Enhanced all 11 with STAR format and 40-50% more content
- Corrected R&D Portfolio Visibility narrative (was Time Tracking)
- Positioned AI Analytics as proactive strategy (crawl-walk-run)
- Added specific metrics throughout (\$30B+, \$200M+)

PHILOSOPHY:
- Integrated 'creating pull' throughout narratives
- Added 'rocket & landing pad' principle
- Embedded UAT as investment strategy
- Updated About/Story with authentic voice

ACHIEVEMENTS:
- Crucible: 1.7M lines, 31 days, 13 AI agents
- Revenue Platform: 0→8,000 users without mandates
- Cross-disciplinary insights from silicon→finance→AI"

    echo "✅ Changes committed"
    echo ""

    echo "🌐 Stage 3: Pushing to GitHub..."
    git push origin main

    if [ $? -eq 0 ]; then
        echo ""
        echo "✅ SUCCESS! Website published to GitHub Pages"
        echo ""
        echo "📊 Your website will be updated at:"
        echo "   https://gibbons-tony.github.io"
        echo ""
        echo "Note: GitHub Pages may take 2-10 minutes to update"
        echo ""
        echo "📋 Next Steps:"
        echo "1. Check https://gibbons-tony.github.io in 5 minutes"
        echo "2. Verify new blog posts appear"
        echo "3. Share Crucible post on LinkedIn"
        echo "4. Update resume PDF to match"
        echo ""
        echo "🎉 Congratulations on launching your enhanced narrative!"
    else
        echo ""
        echo "❌ Error pushing to GitHub. Please check your connection and try:"
        echo "   git push origin main"
    fi
else
    echo ""
    echo "📌 Publishing cancelled. Your changes are saved locally."
    echo "   To publish later, run: ./PUBLISH_WEBSITE.sh"
fi