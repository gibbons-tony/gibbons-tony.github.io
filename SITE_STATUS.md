# New Portfolio Site - Current Status

## What Works Right Now

The site is **fully functional** at http://localhost:8000 when served from the `_site` directory.

### How to Run It

```bash
./serve_site.sh
# Or directly:
python3 -m http.server 8000 --directory _site
```

## Current Site Contents

### ✅ What's Live and Working

1. **Homepage** - Your bio and featured content
2. **About** - Personal information and background
3. **Projects Tab** - Contains 6 projects:
   - Medical AI with Deep Learning (UC Berkeley)
   - Financial Sentiment Analysis (UC Berkeley)
   - RAG System (UC Berkeley)
   - Cloud ML Platform (UC Berkeley)
   - Algorithmic Trading (UC Berkeley)
   - Homelessness Study (previous work)

4. **Case Studies** - 6 enhanced business case studies:
   - Time Tracking App (Connective Tissue - new)
   - Inventory Optimization
   - Revenue Platform
   - SAP Transition
   - Profitability Framework
   - AI Analytics Assistant

5. **Repos Tab** - Configured to show `gibbons-tony/project-demos-public`
6. **CV** - Your curriculum vitae
7. **Publications** - Your publications list
8. **Teaching** - Your teaching experience

## Git Status

```bash
# All changes committed locally:
- Project cards added
- Case studies enhanced
- Repository configuration updated

# Branch status:
- On branch: main
- Ahead of origin/main by 2 commits
- Ready to push when needed
```

## What's in Each Directory

```
new-portfolio/
├── _site/                 # ← THE BUILT SITE (serve this!)
│   ├── projects/          # Built project pages
│   ├── casestudies/       # Built case study pages
│   └── ...               # All other built content
├── _projects/             # Source: 5 UC Berkeley + 1 old project
├── _casestudies/          # Source: 6 enhanced case studies
├── _projects_archive/     # Old projects (backed up)
├── assets/               # Images and other assets
├── SERVE_SITE.md         # This documentation
├── serve_site.sh         # Simple server script
└── docker-compose.yml    # Ignore this - it's broken

```

## The Truth About Building

- **DON'T TRY TO REBUILD** - The _site from March 13 works perfectly
- Jekyll build is broken due to jekyll-terser dependency issues
- Docker container can't build due to missing Gemfile.lock
- But none of that matters because **the site is already built**

## If You Absolutely Must Rebuild

You'll need to fix the dependency issues first:
1. Remove jekyll-terser from Gemfile
2. Run `bundle install`
3. Then `bundle exec jekyll build`

But seriously, just use the existing _site. It works.

## Quick Troubleshooting

**Site not loading?**
- Make sure you're using port 8000, not 8080
- Check if something else is using the port: `lsof -i :8000`
- Kill any existing server: `kill <PID>`
- Run `./serve_site.sh`

**Want to see what's actually running?**
```bash
curl http://localhost:8000  # Should show your site
```

**Docker container issues?**
```bash
docker compose down  # Stop it
# Then ignore Docker completely
```

## Summary

The site is **100% functional** when served from `_site`. Just run the server script and access http://localhost:8000. Everything else is noise.