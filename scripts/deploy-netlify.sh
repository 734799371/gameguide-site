#!/bin/bash
set -euo pipefail

# =============================================================================
# deploy-netlify.sh — Deploy the Game Guide site to Netlify
# Requires: Netlify CLI (npm install -g netlify-cli)
# Free tier: 100 build minutes/month, 100GB bandwidth, 300 build hours
# =============================================================================

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
PROJECT_DIR="$(dirname "$SCRIPT_DIR")"
DIST_DIR="$PROJECT_DIR/dist"

CYAN='\033[0;36m'
YELLOW='\033[1;33m'
GREEN='\033[0;32m'
NC='\033[0m'

echo -e "${CYAN}=== Netlify Deployment ===${NC}"
echo ""

# --- First-time setup check ---
if ! command -v netlify &>/dev/null; then
    echo -e "${YELLOW}Netlify CLI not found. Installing...${NC}"
    npm install -g netlify-cli
    echo ""
    echo -e "${YELLOW}First-time setup required:${NC}"
    echo ""
    echo "  1. Log in to Netlify:"
    echo "     netlify login"
    echo ""
    echo "  2. Initialize the site (or let deploy create it automatically):"
    echo "     netlify init"
    echo ""
    echo "  3. This script deploys via drag-and-drop (no Git required)."
    echo ""
    exit 1
fi

# --- Build ---
echo -e "${YELLOW}[1/2] Building site...${NC}"
"$SCRIPT_DIR/build.sh"
echo ""

# --- Check dist exists ---
if [ ! -d "$DIST_DIR" ]; then
    echo "Error: Build output not found at $DIST_DIR"
    exit 1
fi

# --- Deploy ---
echo -e "${YELLOW}[2/2] Deploying to Netlify...${NC}"
echo ""

# Use netlify deploy with --prod flag for production
# The --dir flag specifies the folder to deploy
netlify deploy --dir="$DIST_DIR" --prod

echo ""
echo -e "${GREEN}=== Deployment Complete ===${NC}"
echo ""
echo -e "${CYAN}Next steps:${NC}"
echo "  • Your site URL will be shown above"
echo "  • Add custom domain: Netlify Dashboard → Domain settings → Add custom domain"
echo "  • DNS: Add a CNAME record pointing your domain to your Netlify URL"
echo "  • SSL: Netlify auto-provisions Let's Encrypt certificates"
