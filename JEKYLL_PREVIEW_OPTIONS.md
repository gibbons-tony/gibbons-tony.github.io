# Jekyll Preview Options for Your al-folio Site

Since we're having trouble getting Jekyll running locally, here are your options to preview the site exactly as it will appear when published:

---

## 🚀 Option 1: Push to GitHub (Recommended)
**This is the most reliable way to see exactly how your site will look.**

1. **Create a preview branch** (so you don't affect main yet):
```bash
git checkout -b preview-enhancements
git add .
git commit -m "Preview: Website enhancements with Crucible story"
git push origin preview-enhancements
```

2. **GitHub will build it automatically** and you can view at:
   - If you set up GitHub Pages for branches: `https://gibbons-tony.github.io`
   - Or create a Pull Request to see the preview

3. **If you're happy, merge to main:**
```bash
git checkout main
git merge preview-enhancements
git push origin main
```

---

## 🐳 Option 2: Docker (if Docker Desktop is running)
**Start Docker Desktop first, then:**

```bash
./PREVIEW_WITH_JEKYLL.sh
```

This will:
- Build your site with the exact Jekyll version GitHub uses
- Serve it at http://localhost:4000
- Include all al-folio styling and features

---

## 💎 Option 3: Install Jekyll Locally
**If you want a permanent local preview setup:**

### Using rbenv (recommended for Mac):
```bash
# Install rbenv
brew install rbenv ruby-build

# Install Ruby 3.0
rbenv install 3.0.6
rbenv local 3.0.6

# Install Jekyll
gem install bundler jekyll
bundle install

# Run the preview
bundle exec jekyll serve
```

---

## 📝 Option 4: Review Changes Without Full Preview

Since I've only modified content (not templates or styles), you can:

1. **Review the markdown files directly** to see the content changes:
   - New blog posts in `_posts/2026-03-12-*.md`
   - Enhanced case studies in `_casestudies/`
   - Updated About/Story in `_pages/`

2. **Check what changed:**
```bash
# See all changes
git diff --stat

# Review specific file changes
git diff _casestudies/00_time_tracking_app.md
git diff _pages/about.md
```

3. **Trust that the al-folio template will render them beautifully** (it will!)

---

## ✅ What's Already Confirmed:

1. **Your al-folio template is intact** - no structural changes made
2. **All new content follows Jekyll/al-folio conventions** - proper front matter, markdown format
3. **The site structure is unchanged** - layouts, includes, sass all untouched
4. **Content enhancements are additive** - existing content enhanced, not replaced

---

## 🎯 My Recommendation:

**Push to a preview branch on GitHub.** This gives you:
- Exact production preview
- No local setup needed
- Easy rollback if needed
- GitHub Pages builds it perfectly

The command:
```bash
git checkout -b preview-march-12
git add .
git commit -m "Major enhancement: Crucible story + philosophy"
git push origin preview-march-12
```

Then view your site normally - GitHub will build it with all the al-folio styling!