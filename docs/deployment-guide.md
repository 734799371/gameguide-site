# Deployment Guide

A step-by-step guide to deploying the Game Guide site to various platforms.

## Prerequisites

Before deploying, make sure you have the following installed:

- **Node.js** (v18+) — Required for build tools (minification, optimization)
  ```bash
  # Check if installed
  node --version
  # Install via Homebrew (macOS)
  brew install node
  ```
- **Git** — Required for GitHub Pages and version control
  ```bash
  git --version
  brew install git
  ```
- **Python 3** — Included on macOS; used for dev server and build helpers
  ```bash
  python3 --version
  ```

---

## Option A: Cloudflare Pages (Recommended)

**Why Cloudflare Pages?** Free tier with unlimited bandwidth, unlimited requests, and a global CDN. Excellent performance for international traffic. No build time limits on the free tier.

### First-Time Setup

1. **Create a Cloudflare account**
   - Go to [dash.cloudflare.com/sign-up](https://dash.cloudflare.com/sign-up)
   - Sign up with your email or GitHub account

2. **Install Wrangler CLI**
   ```bash
   npm install -g wrangler
   ```

3. **Log in**
   ```bash
   wrangler login
   ```
   This opens a browser window for authentication.

4. **Deploy**
   ```bash
   ./scripts/deploy-cloudflare.sh
   ```
   On first deploy, Wrangler will ask you to create the project. Accept the defaults.

5. **Custom Domain** (optional)
   - Go to Cloudflare Dashboard → Pages → Your Project → Custom domains
   - Click "Set up a custom domain"
   - Enter your domain (e.g., `gameguides.example.com`)
   - Cloudflare handles DNS and SSL automatically if your domain is registered with Cloudflare
   - If your domain is elsewhere, add a CNAME record pointing to your `<project>.pages.dev` URL

### Subsequent Deploys

```bash
./scripts/deploy-cloudflare.sh
```

### Custom Project Name

```bash
PROJECT_NAME=my-awesome-guides ./scripts/deploy-cloudflare.sh
```

### Cloudflare Pages Features

| Feature | Free Tier |
|---------|-----------|
| Requests | Unlimited |
| Bandwidth | Unlimited |
| Builds | 500/month |
| Workers Invocations | 100,000/day |
| Custom Domains | Unlimited |
| SSL | Automatic |

---

## Option B: Netlify

**Why Netlify?** Easy setup, automatic deploys from Git, form handling, and a generous free tier.

### First-Time Setup

1. **Create a Netlify account**
   - Go to [app.netlify.com/signup](https://app.netlify.com/signup)
   - Sign up with GitHub, GitLab, or email

2. **Install Netlify CLI**
   ```bash
   npm install -g netlify-cli
   ```

3. **Log in**
   ```bash
   netlify login
   ```

4. **Deploy**
   ```bash
   ./scripts/deploy-netlify.sh
   ```
   The CLI will deploy via drag-and-drop mode (direct folder upload) or prompt you to link an existing site.

5. **Custom Domain**
   - Go to Netlify Dashboard → Domain settings → Add custom domain
   - Add a CNAME record at your domain registrar: `yourdomain.com` → `your-site.netlify.app`
   - Netlify auto-provisions Let's Encrypt SSL certificates

### Subsequent Deploys

```bash
./scripts/deploy-netlify.sh
```

### Netlify Features

| Feature | Free Tier |
|---------|-----------|
| Bandwidth | 100 GB/month |
| Build Minutes | 300/month |
| Sites | Unlimited |
| Custom Domains | 1 custom (unlimited subdomains) |
| SSL | Automatic (Let's Encrypt) |

---

## Option C: GitHub Pages

**Why GitHub Pages?** Free for public repos, integrated with GitHub, simple workflow. Good for smaller sites.

### First-Time Setup

1. **Create a GitHub repository**
   - Go to github.com → New Repository
   - Name it `gameguide-site` (or any name you prefer)
   - Make it Public (required for free Pages)
   - Do NOT initialize with README

2. **Initialize locally and push**
   ```bash
   cd /path/to/gameguide-site
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/gameguide-site.git
   git push -u origin main
   ```

3. **Deploy**
   ```bash
   ./scripts/deploy-github-pages.sh
   ```

4. **Enable GitHub Pages**
   - Go to your repo → Settings → Pages
   - Source: Deploy from a branch
   - Branch: `gh-pages` / `(root)`
   - Click Save

5. **Custom Domain** (optional)
   - Create a `CNAME` file in `src/` containing your domain:
     ```
     yourdomain.com
     ```
   - Add a CNAME record at your registrar: `yourdomain.com` → `YOUR_USERNAME.github.io`
   - Go to Settings → Pages → Enforce HTTPS (toggle on)

### Site URL

Your site will be available at:
- Without custom domain: `https://YOUR_USERNAME.github.io/gameguide-site/`
- With custom domain: `https://yourdomain.com`

### Subsequent Deploys

```bash
./scripts/build.sh && ./scripts/deploy-github-pages.sh
```

---

## DNS Setup for Custom Domain

### For Cloudflare Pages

If your domain is registered **with Cloudflare**:
1. Go to Pages → Your Project → Custom domains → Add
2. Cloudflare handles everything automatically

If your domain is registered **elsewhere**:
1. At your registrar, add these DNS records:

| Type | Name | Value | TTL |
|------|------|-------|-----|
| CNAME | @ or www | `your-project.pages.dev` | Auto |
| TXT | @ | `v=spf1 include:_spf.google.com ~all` | Auto |

2. Go to Cloudflare Pages → Custom domains and add your domain
3. Cloudflare will issue a free SSL certificate

### For Netlify

At your registrar, add:

| Type | Name | Value |
|------|------|-------|
| CNAME | www | `your-site.netlify.app` |
| CNAME | @ | `your-site.netlify.app` |

Then in Netlify Dashboard → Domain management → Add your domain.

### For GitHub Pages

At your registrar, add:

| Type | Name | Value |
|------|------|-------|
| CNAME | @ | `YOUR_USERNAME.github.io` |
| CNAME | www | `YOUR_USERNAME.github.io` |

---

## SSL/HTTPS

All three platforms provide **automatic free SSL certificates**:

- **Cloudflare Pages**: Universal SSL — active immediately. Edge certificates auto-renew.
- **Netlify**: Let's Encrypt certificates — auto-provisioned when you add a custom domain. Takes a few minutes.
- **GitHub Pages**: Certificates via Let's Encrypt — auto-provisioned. Enable "Enforce HTTPS" in repo settings.

No manual SSL configuration needed. All sites are served over HTTPS by default.

## Environment Variables

The site is fully static and doesn't require environment variables for deployment. The only optional configuration is:

| Variable | Purpose | Where |
|----------|---------|-------|
| `SITE_URL` | Your production domain (used for sitemap generation) | `build.sh` |
| `PROJECT_NAME` | Cloudflare Pages project name | `deploy-cloudflare.sh` |
| `PORT` | Local dev server port (default: 8080) | `serve.sh` |

---

## Which Platform Should You Choose?

| Criteria | Cloudflare Pages | Netlify | GitHub Pages |
|----------|------------------|---------|--------------|
| **Best for traffic** | ✅ Unlimited bandwidth | 100GB limit | Reasonably generous |
| **Best for overseas** | ✅ Global CDN | Good | Limited CDN |
| **Easiest setup** | CLI-based | CLI + Web UI | Git-based |
| **Custom domains** | Unlimited | 1 custom + subs | 1 per repo |
| **Build minutes** | 500/month | 300/month | GitHub Actions (2,000 min) |
| **Cost** | Free | Free | Free |
| **Recommendation** | ✅ **Best overall** | Good second choice | Good for hobby projects |

**Recommendation:** Use **Cloudflare Pages** for a game guide site. Unlimited bandwidth matters because guide pages with images can be large, and international readers benefit from Cloudflare's global network.
