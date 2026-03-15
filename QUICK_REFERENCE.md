# 🚀 Jekyll Site Quick Reference

## The Only Commands You Need

### Rebuild the Site
```bash
./rebuild_jekyll.sh
```
Your site will be available at: **http://localhost:8080**

### Stop the Site
```bash
docker compose down
```

### View Logs
```bash
docker logs -f new-portfolio-jekyll-1
```

## ⚠️ Important: Use the RIGHT Port!

| Port | What It Serves | Status |
|------|----------------|--------|
| **8080** | ✅ **Fresh content** (Docker/Jekyll) | **USE THIS** |
| 8000 | ❌ Stale content from March 13 | DON'T USE |

## How It Works

```
Your Edits → Docker Rebuilds → Fresh Site at :8080
     ↓              ↓                    ↓
_casestudies/   Auto-rebuild      http://localhost:8080
_projects/      when saving
_pages/         files
```

## File Locations

| What | Where | Can I Edit? |
|------|-------|-------------|
| Case Studies | `_casestudies/*.md` | ✅ YES |
| Projects | `_projects/*.md` | ✅ YES |
| Images | `assets/img/` | ✅ YES |
| Built Site | `_site/` | ❌ NO (auto-generated) |

## Troubleshooting

### "Site not loading"
```bash
# Rebuild it
./rebuild_jekyll.sh
```

### "Changes not showing"
1. Hard refresh browser: `Cmd+Shift+R`
2. Check you're on port **8080** not 8000
3. Wait 5-10 seconds for auto-rebuild

### "Port already in use"
```bash
docker compose down
./rebuild_jekyll.sh
```

## The Golden Rule

**Edit source files** → **Docker rebuilds automatically** → **View at :8080**

Never edit `_site/` directly - it gets overwritten!