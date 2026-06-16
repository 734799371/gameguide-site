#!/bin/bash
set -euo pipefail

# =============================================================================
# deploy-github-pages.sh — Deploy the Game Guide site to GitHub Pages
# Pushes the built dist/ to the gh-pages branch of the repository.
# Free tier: Unlimited public repos, GitHub Pages for public repos
# =============================================================================

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
PROJECT_DIR="$(dirname "$SCRIPT_DIR")"
DIST_DIR="$PROJECT_DIR/dist"

CYAN='\033[0;36m'
YELLOW='\033[1;33m'
GREEN='\033[0;32m'
RED='\033[0;31m'
NC='\033[0m'

echo -e "${CYAN}=== GitHub Pages Deployment ===${NC}"
echo ""

# --- Check git is available ---
if ! command -v git &>/dev/null; then
    echo -e "${RED}Error: git is required. Install it first.${NC}"
    exit 1
fi

# --- Check we're in a git repo ---
cd "$PROJECT_DIR"
if ! git rev-parse --is-inside-work-tree &>/dev/null; then
    echo -e "${RED}Error: Not a git repository.${NC}"
    echo ""
    echo -e "${YELLOW}First-time setup:${NC}"
    echo ""
    echo "  1. Create a GitHub repository (e.g., gameguide-site)"
    echo "  2. Initialize locally:"
    echo "     cd $PROJECT_DIR"
    echo "     git init"
    echo "     git add ."
    echo "     git commit -m 'Initial commit'"
    echo "     git remote add origin https://github.com/YOUR_USERNAME/gameguide-site.git"
    echo "     git push -u origin main"
    echo ""
    echo "  3. Run this script again."
    exit 1
fi

# --- Build ---
echo -e "${YELLOW}[1/3] Building site...${NC}"
"$SCRIPT_DIR/build.sh"
echo ""

# --- Check dist exists ---
if [ ! -d "$DIST_DIR" ]; then
    echo "Error: Build output not found at $DIST_DIR"
    exit 1
fi

# --- Create/switch to gh-pages branch ---
echo -e "${YELLOW}[2/3] Preparing gh-pages branch...${NC}"

# Save current branch
CURRENT_BRANCH=$(git branch --show-current)

# Check if gh-pages branch exists remotely or locally
GH_EXISTS=$(git branch -a | grep -q 'gh-pages' && echo "yes" || echo "no")

if [ "$GH_EXISTS" = "yes" ]; then
    # Delete local gh-pages if it exists, then checkout from remote
    git branch -D gh-pages 2>/dev/null || true
    git checkout -b gh-pages origin/gh-pages 2>/dev/null || git checkout -b gh-pages
else
    git checkout --orphan gh-pages
fi

# Remove everything except .git
find . -maxdepth 1 ! -name '.git' ! -name '.' -exec rm -rf {} +

# Copy dist contents
echo -e "${YELLOW}[3/3] Copying build output and pushing...${NC}"
cp -r "$DIST_DIR/." .

# Create .nojekyll (tells GitHub Pages not to use Jekyll)
touch .nojekyll

git add -A
git commit -m "Deploy: $(date -u +%Y-%m-%d\ %H:%M)" || {
    echo "No changes to deploy."
    git checkout "$CURRENT_BRANCH"
    exit 0
}

git push origin gh-pages -f

# Return to original branch
git checkout "$CURRENT_BRANCH"

echo ""
echo -e "${GREEN}=== Deployment Complete ===${NC}"
echo ""
echo "Your site is live at: https://YOUR_USERNAME.github.io/gameguide-site/"
echo ""
echo -e "${CYAN}Next steps:${NC}"
echo "  • Enable GitHub Pages: Settings → Pages → Source: gh-pages branch"
echo "  • Custom domain: Add a CNAME file in src/ with your domain"
echo "  • DNS: Add a CNAME record: yourdomain.com → YOUR_USERNAME.github.io"
echo "  • SSL: GitHub Pages auto-provisions certificates for custom domains"
echo "  • Enforce HTTPS: Settings → Pages → Enforce HTTPS toggle"
