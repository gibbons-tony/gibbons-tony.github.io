#!/bin/bash

# ============================================
# Jekyll Site Rebuild Script
# ============================================
# Purpose: Rebuild the Jekyll al-folio portfolio site using Docker
# Usage: ./rebuild_jekyll.sh
# Result: Fresh site available at http://localhost:8080
# ============================================

set -e  # Exit on error

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Configuration
CONTAINER_NAME="new-portfolio-jekyll-1"
PORT=8080
SITE_URL="http://localhost:${PORT}"

echo -e "${BLUE}============================================${NC}"
echo -e "${BLUE}    Jekyll Site Rebuild Script${NC}"
echo -e "${BLUE}============================================${NC}"
echo ""

# Step 1: Check if Docker is running
echo -e "${YELLOW}[1/7] Checking Docker status...${NC}"
if ! docker info > /dev/null 2>&1; then
    echo -e "${RED}❌ Docker is not running. Please start Docker Desktop.${NC}"
    exit 1
fi
echo -e "${GREEN}✅ Docker is running${NC}"
echo ""

# Step 2: Stop existing container if running
echo -e "${YELLOW}[2/7] Stopping any existing containers...${NC}"
docker compose down 2>/dev/null || true
echo -e "${GREEN}✅ Cleaned up existing containers${NC}"
echo ""

# Step 3: Pull the latest Docker image
echo -e "${YELLOW}[3/7] Pulling Docker image (this may take a moment)...${NC}"
docker compose pull
echo -e "${GREEN}✅ Docker image ready${NC}"
echo ""

# Step 4: Start the container
echo -e "${YELLOW}[4/7] Starting Docker container...${NC}"
docker compose up -d
sleep 3  # Give container time to start
echo -e "${GREEN}✅ Container started${NC}"
echo ""

# Step 5: Install dependencies inside container
echo -e "${YELLOW}[5/7] Installing Ruby dependencies...${NC}"
docker exec ${CONTAINER_NAME} bundle install
echo -e "${GREEN}✅ Dependencies installed${NC}"
echo ""

# Step 6: Build the Jekyll site
echo -e "${YELLOW}[6/7] Building Jekyll site...${NC}"
docker exec ${CONTAINER_NAME} bundle exec jekyll build
echo -e "${GREEN}✅ Site built successfully${NC}"
echo ""

# Step 7: Start the development server with auto-rebuild
echo -e "${YELLOW}[7/7] Starting development server with auto-rebuild...${NC}"
docker exec -d ${CONTAINER_NAME} sh -c "bundle exec jekyll serve --watch --port=${PORT} --host=0.0.0.0 --livereload --verbose"
sleep 5  # Give server time to start
echo -e "${GREEN}✅ Development server started${NC}"
echo ""

# Verify the site is accessible
echo -e "${YELLOW}Verifying site accessibility...${NC}"
if curl -s -o /dev/null -w "%{http_code}" ${SITE_URL} | grep -q "200"; then
    echo -e "${GREEN}✅ Site is running successfully!${NC}"
    echo ""
    echo -e "${BLUE}============================================${NC}"
    echo -e "${GREEN}🎉 Rebuild Complete!${NC}"
    echo -e "${BLUE}============================================${NC}"
    echo ""
    echo -e "Your site is available at: ${GREEN}${SITE_URL}${NC}"
    echo -e "The site will ${GREEN}auto-rebuild${NC} when you edit files."
    echo ""
    echo -e "To view logs: ${YELLOW}docker logs -f ${CONTAINER_NAME}${NC}"
    echo -e "To stop: ${YELLOW}docker compose down${NC}"
else
    echo -e "${RED}⚠️  Warning: Site may still be starting up.${NC}"
    echo -e "Wait a few seconds and try: ${YELLOW}${SITE_URL}${NC}"
fi

# Show rebuild timestamp
echo ""
echo -e "${BLUE}Build Information:${NC}"
echo -e "Timestamp: $(date '+%Y-%m-%d %H:%M:%S')"
echo -e "Container: ${CONTAINER_NAME}"
echo -e "Port: ${PORT}"

# Check if old Python server is running on port 8000
if lsof -i :8000 > /dev/null 2>&1; then
    echo ""
    echo -e "${YELLOW}⚠️  Note: Old Python server detected on port 8000${NC}"
    echo -e "That serves stale content from March 13."
    echo -e "Use port ${GREEN}${PORT}${NC} for fresh content."
fi

echo ""
echo -e "${BLUE}============================================${NC}"