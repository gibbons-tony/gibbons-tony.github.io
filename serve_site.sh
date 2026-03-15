#!/bin/bash

# Simple script to serve the Jekyll site
# No Docker, no Ruby, no bullshit

PORT=8000
SITE_DIR="_site"

# Colors for output
GREEN='\033[0;32m'
RED='\033[0;31m'
NC='\033[0m' # No Color

echo "🚀 Starting Jekyll site server..."

# Check if _site directory exists
if [ ! -d "$SITE_DIR" ]; then
    echo -e "${RED}Error: _site directory not found!${NC}"
    echo "The pre-built site should be in _site/"
    exit 1
fi

# Check if port is already in use
if lsof -Pi :$PORT -sTCP:LISTEN -t >/dev/null ; then
    echo -e "${RED}Port $PORT is already in use${NC}"
    echo "Current process using port $PORT:"
    lsof -i :$PORT | grep LISTEN

    echo ""
    echo "Do you want to kill it and start fresh? (y/n)"
    read -r response
    if [[ "$response" =~ ^[Yy]$ ]]; then
        # Kill the process
        PID=$(lsof -t -i:$PORT)
        kill $PID
        echo "Killed process $PID"
        sleep 1
    else
        echo "Exiting. Use a different port or kill the process manually."
        exit 1
    fi
fi

# Start the server
echo -e "${GREEN}Starting server on http://localhost:$PORT${NC}"
echo "Press Ctrl+C to stop the server"
echo ""

# Actually start the server
cd "$(dirname "$0")"
python3 -m http.server $PORT --directory $SITE_DIR