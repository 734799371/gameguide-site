# SEO Optimization Guide

A comprehensive guide to making your game guide site rank well in search engines.

## On-Page SEO Checklist

Every game guide page on your site should include:

### Essential Meta Tags

```html
<head>
    <!-- Title: Include primary keyword, keep under 60 characters -->
    <title>Complete Walkthrough for [Game Name] - GameGuideSite</title>

    <!-- Meta Description: Include keywords, keep 150-160 characters -->
    <meta name="description" content="Detailed walkthrough for [Game Name] with boss strategies, collectible locations, achievement guides, and tips for beating every chapter.">

    <!-- Canonical URL -->
    <link rel="canonical" href="https://yourdomain.com/guides/game-name-walkthrough.html">

    <!-- Viewport for mobile -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <!-- Open Graph (Facebook, social sharing) -->
    <meta property="og:title" content="Complete Walkthrough for [Game Name]">
    <meta property="og:description" content="Boss strategies, collectibles, achievements, and tips.">
    <meta property="og:type" content="article">
    <meta property="og:url" content="https://yourdomain.com/guides/game-name-walkthrough.html">
    <meta property="og:image" content="https://yourdomain.com/images/game-name-cover.jpg">

    <!-- Twitter Card -->
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="Complete Walkthrough for [Game Name]">
    <meta name="twitter:description" content="Boss strategies, collectibles, achievements, and tips.">
    <meta name="twitter:image" content="https://yourdomain.com/images/game-name-cover.jpg">
</head>
```

### Content Structure

- **H1**: One per page — the main title (e.g., "Complete Walkthrough for [Game Name]")
- **H2**: Major sections (e.g., "Chapter 1: The Beginning", "Boss Guide")
- **H3**: Subsections (e.g., "Boss Attack Patterns", "Recommended Equipment")
- **Use `<article>`** wrapper for main content
- **Use `<section>`** for distinct content blocks
- **Use `<nav>`** for navigation elements
- **Use `<time>`** for dates (e.g., "Last updated: <time datetime='2025-01-15'>January 15, 2025</time>")

### Image Optimization

```html
<img src="/images/boss-fight-strategy.webp"
     alt="Map showing safe zones during the Dragon Boss phase 2 fight in Game Name"
     width="800"
     height="450"
     loading="lazy">
```

Rules:
- Always include descriptive `alt` text (helps with Google Images rankings)
- Specify `width` and `height` to prevent layout shift (CLS)
- Use `loading="lazy"` for below-the-fold images
- Prefer WebP format over PNG/JPG (30-50% smaller)
- Keep image file sizes under 200KB where possible

---

## JSON-LD Structured Data

Structured data helps search engines understand your content and can earn rich results (enhanced listings in search).

### Article Schema

Add to every game guide page:

```html
<script type="application/ld+json">
{
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Complete Walkthrough for [Game Name]",
    "description": "Detailed walkthrough covering all chapters, bosses, collectibles, and achievements.",
    "image": "https://yourdomain.com/images/game-name-cover.jpg",
    "datePublished": "2025-01-10",
    "dateModified": "2025-01-15",
    "author": {
        "@type": "Person",
        "name": "Your Name or Site Name"
    },
    "publisher": {
        "@type": "Organization",
        "name": "GameGuideSite",
        "logo": {
            "@type": "ImageObject",
            "url": "https://yourdomain.com/images/logo.png"
        }
    }
}
</script>
```

### BreadcrumbList Schema

```html
<script type="application/ld+json">
{
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
        {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://yourdomain.com/"
        },
        {
            "@type": "ListItem",
            "position": 2,
            "name": "[Game Name] Guides",
            "item": "https://yourdomain.com/guides/"
        },
        {
            "@type": "ListItem",
            "position": 3,
            "name": "Walkthrough"
        }
    ]
}
</script>
```

### WebSite Schema (on homepage only)

```html
<script type="application/ld+json">
{
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "GameGuideSite",
    "url": "https://yourdomain.com",
    "potentialAction": {
        "@type": "SearchAction",
        "target": "https://yourdomain.com/search?q={search_term_string}",
        "query-input": "required name=search_term_string"
    }
}
</script>
```

### HowTo Schema (for tutorial-style guides)

If your guide follows a step-by-step format:

```html
<script type="application/ld+json">
{
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Beat the Final Boss in [Game Name]",
    "step": [
        {
            "@type": "HowToStep",
            "name": "Prepare your equipment",
            "text": "Equip the Flame Sword and Dragon Shield before entering the arena."
        },
        {
            "@type": "HowToStep",
            "name": "Phase 1: Dodge the sweep attack",
            "text": "Stay close to the boss and roll right when you see the red glow."
        }
    ]
}
</script>
```

### Validate Your Structured Data

Test your structured data at [Google Rich Results Test](https://search.google.com/test/rich-results) to ensure it's valid.

---

## Sitemap and Robots.txt

### Sitemap

The build script automatically generates `sitemap.xml`. Ensure `SITE_URL` is set correctly:

```bash
SITE_URL=https://yourdomain.com ./scripts/build.sh
```

The sitemap includes:
- All HTML pages
- `<lastmod>` dates
- `<changefreq>` set to weekly
- `<priority>` set to 0.7 for all pages

You can adjust priority values for important pages (homepage = 1.0, popular guides = 0.8).

### Robots.txt

Also auto-generated. The default allows all crawlers and references the sitemap:

```
User-agent: *
Allow: /
Sitemap: https://yourdomain.com/sitemap.xml
```

### Submit Sitemap to Search Engines

After deploying, submit your sitemap URL to:
- Google Search Console: `https://search.google.com/search-console`
- Bing Webmaster Tools: `https://www.bing.com/webmasters`

---

## Google Search Console Setup

1. Go to [search.google.com/search-console](https://search.google.com/search-console)
2. Click "Add Property" → Enter your full domain URL
3. Verify ownership:
   - **DNS verification** (recommended): Add a TXT record to your domain
   - **HTML file**: Upload the verification file to your site
   - **HTML tag**: Add a meta tag to your homepage
4. Once verified, submit your sitemap: `https://yourdomain.com/sitemap.xml`
5. Monitor:
   - **Coverage**: Check for indexing errors
   - **Performance**: See which queries drive traffic, click-through rates
   - **URL Inspection**: Test individual pages for indexing status

### Key Metrics to Track

| Metric | What It Means | Target |
|--------|--------------|--------|
| Total Clicks | How often users click your listing | Grow month-over-month |
| Total Impressions | How often your pages appear in results | Grow month-over-month |
| Average CTR | Click-through rate | >3% (10%+ for position 1-3) |
| Average Position | Your ranking position | Top 10 for target keywords |
| Core Web Vitals | Page experience signals | "Good" rating |
| Mobile Usability | Mobile-friendliness issues | 0 errors |

---

## Bing Webmaster Tools Setup

Bing powers Yahoo search as well, so this covers two search engines.

1. Go to [bing.com/webmasters](https://www.bing.com/webmasters)
2. Sign in with Microsoft account
3. Add your site URL
4. Verify via DNS TXT record, XML file, or meta tag
5. Submit sitemap: `https://yourdomain.com/sitemap.xml`
6. Enable **Bing indexing** — Bing can import sitemaps from Google Search Console if you connect accounts

---

## Keyword Strategy for Game Guides

### Finding Keywords

Use these tools to find what players are searching for:
- **Google Autosuggest**: Type "[game name]" and see what Google suggests
- **Google Trends**: Compare interest in different games
- **Ahrefs / SEMrush** (paid, but powerful): See search volume, difficulty, competing pages
- **AnswerThePublic**: Find question-based queries like "how to beat X in Y"

### Keyword Patterns for Game Guides

Target these search patterns:

| Pattern | Example | Intent |
|---------|---------|--------|
| `[game] walkthrough` | "elden ring walkthrough" | Comprehensive guide |
| `[game] boss guide` | "elden ring boss guide" | Specific boss strategies |
| `[game] how to [action]` | "how to fast travel elden ring" | Tutorial |
| `[game] [item] location` | "elden ring golden seed locations" | Collectible guide |
| `[game] best [thing]` | "elden ring best builds" | Recommendation |
| `[game] cheats` | "gta 5 cheats" | Code/cheat sheet |
| `[game] tips and tricks` | "zelda totk tips" | General advice |
| `[game] all [collectible]` | "botw all shrines" | Completionist guide |

### Content Prioritization

1. **New game launches**: When a popular game launches, create guides immediately. The first 2 weeks are crucial — traffic drops sharply after the first month.
2. **Evergreen content**: Guides for classic/popular games (Minecraft, GTA, Zelda) have steady long-term traffic.
3. **Long-tail keywords**: "how to beat malenia without summons elden ring" has low competition but decent traffic.

### Title Tag Formula

```
[Primary Keyword] - [Value Proposition] | Site Name
```

Examples:
- "Elden Ring Walkthrough - Complete Guide to All Areas | GameGuides"
- "All Korok Seed Locations - Zelda TOTK Map Guide | GameGuides"
- "GTA 5 Cheats - Full Cheat Code List (PS5, Xbox, PC) | GameGuides"

---

## Internal Linking Strategy

Internal links distribute "link juice" and help search engines discover pages.

### Rules

1. **Link from homepage**: Every game should be listed on the homepage with a link to its guide
2. **Link between guides**: If a guide mentions another game or related topic, link to it
3. **Use descriptive anchor text**: "Check out our [Elden Ring boss guide](/guides/elden-ring-bosses.html)" — not "click here"
4. **Breadcrumbs**: Include breadcrumb navigation on every page (Home → Guides → [Game] → [Page])
5. **Related guides section**: At the bottom of each guide, link to 3-5 related guides
6. **Sitemap page**: Create a `/sitemap-page.html` that lists all guides in a structured format

### Example Breadcrumb HTML

```html
<nav aria-label="Breadcrumb">
    <ol>
        <li><a href="/">Home</a></li>
        <li><a href="/guides/">Guides</a></li>
        <li><a href="/guides/elden-ring/">Elden Ring</a></li>
        <li aria-current="page">Boss Guide</li>
    </ol>
</nav>
```

---

## Page Speed Optimization

### Current Build Optimizations

The build script already handles:
- HTML minification (removes comments, whitespace)
- CSS minification (cleancss)
- JavaScript minification (terser)
- SVG optimization (svgo)
- Cache-busting hashes (long-term caching)

### Additional Recommendations

1. **Compress images**: Use WebP format. Tools: `cwebp` (Google), Squoosh (web), or `sharp` (Node.js)
2. **Lazy load images**: Use `loading="lazy"` on images below the fold
3. **Preload critical assets**: Add `<link rel="preload">` for above-the-fold images and fonts
   ```html
   <link rel="preload" href="/css/style.css" as="style">
   <link rel="preload" href="/images/hero.webp" as="image">
   ```
4. **Inline critical CSS**: Consider inlining above-the-fold CSS directly in `<style>` tags
5. **Defer non-critical JS**: Use `<script defer>` or `<script async>` appropriately
6. **Enable compression**: Your hosting platform (Cloudflare/Netlify) handles gzip/brotli automatically
7. **Set proper cache headers**: Cloudflare Pages sets optimal cache headers by default

### Core Web Vitals Targets

| Metric | What It Measures | Good | Needs Improvement |
|--------|-----------------|------|-------------------|
| **LCP** | Largest Contentful Paint | <2.5s | >2.5s |
| **FID** | First Input Delay | <100ms | >100ms |
| **CLS** | Cumulative Layout Shift | <0.1 | >0.1 |
| **INP** | Interaction to Next Paint | <200ms | >200ms |

Static sites naturally score well on these. Your main concern is **CLS** — make sure ads and images don't shift the layout.

---

## Mobile-First Indexing

Google uses mobile-first indexing, meaning it primarily uses the mobile version of your site for ranking.

### Requirements

- **Responsive design**: Use CSS media queries, flexible layouts, fluid typography
- **Viewport meta tag**: Must be present on every page
- **Readable content**: Font sizes at least 16px, adequate line spacing
- **Tappable elements**: Buttons and links at least 44×44 CSS pixels
- **No horizontal scrolling**: Content must fit within the viewport
- **Mobile navigation**: Hamburger menu or collapsible nav for mobile

### Testing

- [Google Mobile-Friendly Test](https://search.google.com/test/mobile-friendly)
- Chrome DevTools → Toggle device toolbar → Test at various widths
- Test on actual devices when possible

---

## SEO Content Template

Use this template when creating new game guide pages:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>[Primary Keyword] - [Game Name] Guide | GameGuideSite</title>
    <meta name="description" content="[150-char description with keywords]">
    <link rel="canonical" href="https://yourdomain.com/guides/[slug].html">

    <!-- Open Graph -->
    <meta property="og:title" content="[Title]">
    <meta property="og:description" content="[Description]">
    <meta property="og:type" content="article">
    <meta property="og:url" content="https://yourdomain.com/guides/[slug].html">
    <meta property="og:image" content="https://yourdomain.com/images/[cover].webp">

    <!-- Twitter Card -->
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="[Title]">
    <meta name="twitter:description" content="[Description]">
    <meta name="twitter:image" content="https://yourdomain.com/images/[cover].webp">

    <!-- JSON-LD -->
    <script type="application/ld+json">
    {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "[Title]",
        "description": "[Description]",
        "image": "https://yourdomain.com/images/[cover].webp",
        "datePublished": "[YYYY-MM-DD]",
        "dateModified": "[YYYY-MM-DD]",
        "author": { "@type": "Person", "name": "Your Name" },
        "publisher": {
            "@type": "Organization",
            "name": "GameGuideSite",
            "logo": { "@type": "ImageObject", "url": "https://yourdomain.com/images/logo.png" }
        }
    }
    </script>

    <link rel="stylesheet" href="/css/style.css">
</head>
<body>
    <nav aria-label="Main navigation">
        <!-- Navigation links -->
    </nav>

    <nav aria-label="Breadcrumb">
        <ol>
            <li><a href="/">Home</a></li>
            <li><a href="/guides/">Guides</a></li>
            <li aria-current="page">[Page Title]</li>
        </ol>
    </nav>

    <article>
        <h1>[Primary Keyword]</h1>

        <p>[Introduction paragraph with main keyword]...</p>

        <h2>[Section 1]</h2>
        <p>Content...</p>

        <img src="/images/[image].webp" alt="[Descriptive alt text]" width="800" height="450" loading="lazy">

        <h2>[Section 2]</h2>
        <p>Content...</p>
    </article>

    <aside>
        <h2>Related Guides</h2>
        <ul>
            <li><a href="/guides/[related].html">[Related Guide]</a></li>
        </ul>
    </aside>

    <footer>
        <!-- Footer content -->
    </footer>
</body>
</html>
```
