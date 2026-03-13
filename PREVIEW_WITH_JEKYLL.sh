#!/bin/bash

# Preview Jekyll al-folio site with Docker
# This runs Jekyll in a container so you don't need Ruby/Jekyll installed locally

echo "🚀 Starting Jekyll Preview with Docker"
echo "======================================"
echo ""
echo "This will build and serve your site exactly as it will appear on GitHub Pages."
echo "It may take a minute to start up the first time..."
echo ""

# Check if Docker is running
if ! docker info > /dev/null 2>&1; then
    echo "❌ Docker is not running. Please start Docker Desktop first."
    exit 1
fi

echo "📦 Pulling Jekyll Docker image if needed..."
docker pull jekyll/jekyll:latest

echo ""
echo "🔨 Building your site with Jekyll..."
echo ""

# Run Jekyll server in Docker
docker run --rm \
  --volume="$PWD:/srv/jekyll:Z" \
  --volume="$PWD/vendor/bundle:/usr/local/bundle:Z" \
  --publish 4000:4000 \
  --publish 35729:35729 \
  --env JEKYLL_ENV=development \
  jekyll/jekyll:latest \
  jekyll serve --watch --force_polling --livereload --incremental --host 0.0.0.0

echo ""
echo "🛑 Preview server stopped"