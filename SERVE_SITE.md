# Jekyll Site Serving Instructions

## The Simple Truth

The Jekyll site is already built in the `_site` directory. You don't need Docker, bundle, or any Ruby nonsense. Just serve the static files.

## Quick Start (What Actually Works)

```bash
# From the new-portfolio directory:
python3 -m http.server 8000 --directory _site
```

That's it. Site runs at http://localhost:8000

## What's in _site

The `_site` directory contains the fully built static website from March 13, 2026. It includes:
- All pages (about, CV, publications, etc.)
- Case studies (6 enhanced business case studies)
- Projects (5 UC Berkeley MIDS projects + homelessness study)
- Blog posts
- All CSS, JavaScript, and assets

## If You Need to Kill the Server

```bash
# Find the process
lsof -i :8000

# Kill it (replace PID with the actual process ID)
kill PID
```

## Why This Works

- Jekyll already built the site to `_site` on March 13
- The `_site` directory contains plain HTML/CSS/JS files
- Python's http.server just serves these static files
- No compilation, no dependencies, no Docker needed

## What NOT to Do

- Don't try to run `bundle exec jekyll build` - it has dependency issues
- Don't use Docker - the container has Gemfile.lock issues
- Don't try to rebuild - the existing build works fine

## Ports in Use

- Port 8000: Python http server (what you want)
- Port 8080: Docker container (ignore/stop it)
- Port 8001, 8081, 8090: Other Python servers (ignore)

## The Script

Run `./serve_site.sh` to automatically start the server.