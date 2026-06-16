#!/bin/bash
set -euo pipefail

# =============================================================================
# serve.sh — Local development server for the Game Guide static site
# =============================================================================

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
PROJECT_DIR="$(dirname "$SCRIPT_DIR")"
SRC_DIR="$PROJECT_DIR/src"
PORT="${PORT:-8080}"

CYAN='\033[0;36m'
GREEN='\033[0;32m'
NC='\033[0m'

echo -e "${CYAN}=== Game Guide Dev Server ===${NC}"

# Use src/ directory for development (unprocessed source)
SERVE_DIR="${1:-$SRC_DIR}"

if [ ! -d "$SERVE_DIR" ]; then
    echo "Error: Directory '$SERVE_DIR' not found."
    echo "Usage: ./scripts/serve.sh [directory]"
    echo "  Defaults to src/ for development."
    echo "  Use 'dist/' to preview the built output."
    exit 1
fi

echo "Serving: $SERVE_DIR"
echo "URL: http://localhost:$PORT"
echo ""
echo -e "${GREEN}Press Ctrl+C to stop.${NC}"

# Open browser after a short delay
(sleep 1 && open "http://localhost:$PORT") &

# Use Python's built-in HTTP server (always available on macOS)
cd "$SERVE_DIR"
python3 -m http.server "$PORT"
