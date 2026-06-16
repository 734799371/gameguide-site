# Game Guide Static Site

A fast, SEO-optimized, static game guide website designed for monetization with Google AdSense and full GDPR compliance. Built with plain HTML, CSS, and JavaScript — no frameworks, no build toolchain dependencies, minimal maintenance.

## Features

- **Static & Fast** — No server-side rendering, no database. Pages load instantly.
- **SEO Optimized** — JSON-LD structured data, auto-generated sitemap, meta tags, Open Graph.
- **Search Index** — Client-side search powered by a generated JSON index.
- **Cache-Busting** — Content hashes automatically appended to asset filenames.
- **GDPR Compliant** — Cookie consent banner, privacy policy page, data processing transparency.
- **AdSense Ready** — Pre-built ad slots (leaderboard, in-content, sidebar) and auto-ads support.
- **Mobile-First** — Responsive design that works on all screen sizes.

## Quick Start

```bash
# 1. Clone the repository
git clone https://github.com/YOUR_USERNAME/gameguide-site.git
cd gameguide-site

# 2. Start local development server
./scripts/serve.sh

# 3. Open http://localhost:8080 in your browser
```

## Project Structure

```
gameguide-site/
├── src/                    # Source files (edit these)
│   ├── index.html          # Homepage
│   ├── guides/             # Game guide pages
│   │   ├── game-a-walkthrough.html
│   │   └── game-b-tips.html
│   ├── css/
│   │   └── style.css       # Main stylesheet
│   ├── js/
│   │   └── main.js         # Main JavaScript (search, consent, ads)
│   └── images/             # Game screenshots, icons, etc.
├── scripts/                # Build and deploy scripts
│   ├── build.sh            # Production build (minify, optimize, hash)
│   ├── serve.sh            # Local dev server
│   ├── deploy-cloudflare.sh
│   ├── deploy-netlify.sh
│   └── deploy-github-pages.sh
├── docs/                   # Documentation
│   ├── README.md           # This file
│   ├── deployment-guide.md
│   ├── adsense-guide.md
│   ├── seo-guide.md
│   ├── gdpr-guide.md
│   └── domain-setup.md
├── dist/                   # Build output (generated, don't edit)
└── .gitignore
```

## Build

```bash
# Production build with minification and optimization
./scripts/build.sh

# Build with a specific site URL for sitemap
SITE_URL=https://yourdomain.com ./scripts/build.sh

# Preview built output locally
./scripts/serve.sh dist/
```

### What the build does:
1. Minifies HTML (html-minifier-terser)
2. Minifies CSS (cleancss)
3. Minifies JavaScript (terser)
4. Optimizes SVG images (svgo)
5. Adds cache-busting content hashes to CSS/JS filenames
6. Generates `search-index.json` from page content
7. Generates `robots.txt` and `sitemap.xml`

## Deployment

### Option 1: Cloudflare Pages (Recommended)

Best for overseas traffic. Free tier with unlimited bandwidth.

```bash
./scripts/deploy-cloudflare.sh
```

### Option 2: Netlify

Free tier with 100GB bandwidth/month.

```bash
./scripts/deploy-netlify.sh
```

### Option 3: GitHub Pages

Free for public repositories.

```bash
./scripts/deploy-github-pages.sh
```

### Option 4: Vercel

Connect your GitHub repo at [vercel.com](https://vercel.com). Set build command to `./scripts/build.sh` and output directory to `dist`.

See [deployment-guide.md](./deployment-guide.md) for detailed instructions.

## Ad Integration (Google AdSense)

The site includes pre-built ad slots ready for AdSense:

- **Leaderboard** (728×90) — Below the header on every page
- **In-content** (responsive) — Between article sections
- **Sidebar** (300×250) — Right sidebar on guide pages
- **Auto-ads** — Optional Google-managed ad placement

See [adsense-guide.md](./adsense-guide.md) for the full setup tutorial.

## SEO Features

- Semantic HTML5 structure (`<article>`, `<section>`, `<nav>`)
- JSON-LD structured data (Article, BreadcrumbList, WebSite)
- Auto-generated sitemap.xml
- Canonical URLs on every page
- Open Graph and Twitter Card meta tags
- Mobile-friendly viewport meta tag
- Fast load times with minified assets

See [seo-guide.md](./seo-guide.md) for the complete SEO checklist and strategy.

## GDPR Compliance

- Cookie consent banner (blocks scripts until user consents)
- Privacy policy page template
- Google AdSense data processing disclosure
- User rights (access, deletion, portability) support
- Cookie categorization (necessary, analytics, advertising)

See [gdpr-guide.md](./gdpr-guide.md) for implementation details and audit checklist.

## Customization

### Adding a New Game Guide

1. Create a new HTML file in `src/guides/`:
   ```bash
   cp src/guides/template.html src/guides/my-new-guide.html
   ```

2. Edit the file — update title, meta description, headings, content.

3. Add a link to the guide from `index.html`.

4. Build and deploy:
   ```bash
   ./scripts/build.sh && ./scripts/deploy-cloudflare.sh
   ```

### Changing the Theme

Edit `src/css/style.css` to change colors, fonts, spacing, and layout.

### Adding Search

The build script automatically generates `search-index.json`. The search widget in `src/js/main.js` loads this index and provides client-side full-text search. No server required.

## Prerequisites

- **macOS** (scripts use bash, md5, and python3)
- **Node.js** (for minification tools via npx)
- **Python 3** (included on macOS, used for build and dev server)
- **Git** (for version control and GitHub Pages deployment)

## License

MIT
