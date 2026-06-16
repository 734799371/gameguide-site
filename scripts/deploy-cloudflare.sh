#!/bin/bash
set -euo pipefail

# =============================================================================
# deploy-cloudflare.sh — Deploy the Game Guide site to Cloudflare Pages
# Requires: Wrangler CLI (npm install -g wrangler)
# Free tier: 500 builds/month, unlimited bandwidth, unlimited requests
# =============================================================================

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
PROJECT_DIR="$(dirname "$SCRIPT_DIR")"
DIST_DIR="$PROJECT_DIR/dist"

CYAN='\033[0;36m'
YELLOW='\033[1;33m'
GREEN='\033[0;32m'
NC='\033[0m'

echo -e "${CYAN}=== Cloudflare Pages Deployment ===${NC}"
echo ""

# --- First-time setup check ---
if ! command -v wrangler &>/dev/null; then
    echo -e "${YELLOW}Wrangler CLI not found. Installing...${NC}"
    npm install -g wrangler
    echo ""
    echo -e "${YELLOW}First-time setup required:${NC}"
    echo ""
    echo "  1. Log in to Cloudflare:"
    echo "     wrangler login"
    echo ""
    echo "  2. Create a Pages project (or let the deploy command create one):"
    echo "     This script will prompt for project creation on first deploy."
    echo ""
    echo "  3. Set your custom domain in Cloudflare Dashboard:"
    echo "     Pages → Your Project → Custom domains → Add domain"
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
echo -e "${YELLOW}[2/2] Deploying to Cloudflare Pages...${NC}"
echo ""

PROJECT_NAME="${PROJECT_NAME:-gameguide-site}"

cd "$DIST_DIR"
wrangler pages deploy . --project-name="$PROJECT_NAME" "$@"

echo ""
echo -e "${GREEN}=== Deployment Complete ===${NC}"
echo ""
echo "Your site is live at: https://$PROJECT_NAME.pages.dev"
echo ""
echo -e "${CYAN}Next steps:${NC}"
echo "  • Add custom domain: Cloudflare Dashboard → Pages → Custom domains"
echo "  • Set up DNS: CNAME your domain to $PROJECT_NAME.pages.dev"
echo "  • SSL is automatic — Cloudflare provides free HTTPS"
