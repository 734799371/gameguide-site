# Google AdSense Integration Guide

A step-by-step guide to monetizing your game guide site with Google AdSense.

## Prerequisites

Before applying for AdSense, make sure your site meets these requirements:

1. **Google Account** — You need a Google account (Gmail) to sign up for AdSense.
2. **Site is live** — Your site must be publicly accessible, not localhost or behind auth.
3. **Original content** — All game guides must be original writing, not copied from other sites.
4. **Sufficient content** — Aim for at least 15-30 quality pages before applying. Thin sites are frequently rejected.
5. **Privacy policy** — You must have a privacy policy page. A template is included in this project.
6. **Navigation** — Clear site navigation with About, Contact, and Privacy Policy pages.
7. **No prohibited content** — Review [AdSense Program Policies](https://support.google.com/adsense/answer/105954) to ensure compliance.

## Step-by-Step Application

### 1. Prepare Your Site

Make sure these pages exist before applying:
- **Homepage** with clear navigation
- **At least 15 game guide pages** with substantial, useful content (500+ words each)
- **About page** explaining what the site is about
- **Contact page** (even a simple email link)
- **Privacy Policy page** (template included — customize it)
- **Terms of Service** (optional but recommended)

### 2. Sign Up for AdSense

1. Go to [google.com/adsense](https://www.google.com/adsense/)
2. Click "Get Started"
3. Enter your website URL
4. Select your country
5. Submit the application

Google will review your site. This typically takes **1-4 weeks**. You'll receive an email with the result.

### 3. Verify Your Site (after approval)

Once approved, Google will ask you to verify site ownership:

1. Copy the AdSense verification code from the AdSense dashboard
2. Place it in the `<head>` section of your `src/index.html`:
   ```html
   <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXXXXXX" crossorigin="anonymous"></script>
   ```
3. Build and redeploy your site
4. Click "Verify" in the AdSense dashboard

---

## Ad Unit Setup

### Option A: Auto Ads (Easiest — Recommended to Start)

Auto Ads lets Google automatically place ads on your pages. Good for beginners.

1. In AdSense Dashboard → Ads → By site → Select your site
2. Toggle "Auto ads" ON
3. Choose ad types: Display ads, In-feed ads, In-article ads, Anchor ads, Vignette ads
4. Save

Google will automatically insert ads into your pages. No code changes needed beyond the verification script.

### Option B: Manual Ad Units (More Control)

For better control over ad placement, create specific ad units:

#### Leaderboard Ad (728×90 — Top of Page)

1. AdSense Dashboard → Ads → By ad unit → Display ads → Create new
2. Name: "Leaderboard"
3. Size: Responsive (recommended) or 728×90
4. Get the ad code
5. Place in your HTML template after the header:

```html
<!-- Leaderboard Ad -->
<div class="ad-container ad-leaderboard">
    <ins class="adsbygoogle"
         style="display:block"
         data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
         data-ad-slot="XXXXXXXXXX"
         data-ad-format="auto"
         data-full-width-responsive="true"></ins>
    <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
</div>
```

#### In-Content Ad (Responsive — Between Article Sections)

1. Create another ad unit: "In-Content"
2. Place between paragraphs in your guide articles:

```html
<!-- In-Content Ad — place after 2nd or 3rd paragraph -->
<div class="ad-container ad-in-content">
    <ins class="adsbygoogle"
         style="display:block"
         data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
         data-ad-slot="XXXXXXXXXX"
         data-ad-format="auto"
         data-full-width-responsive="true"></ins>
    <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
</div>
```

**Tip:** Don't place more than 3 in-content ads per page. Too many ads hurt user experience and can reduce RPM.

#### Sidebar Ad (300×250 — Right Column)

1. Create ad unit: "Sidebar"
2. Place in the sidebar area of guide pages:

```html
<!-- Sidebar Ad -->
<div class="ad-container ad-sidebar">
    <ins class="adsbygoogle"
         style="display:block"
         data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
         data-ad-slot="XXXXXXXXXX"
         data-ad-format="auto"
         data-full-width-responsive="true"></ins>
    <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
</div>
```

---

## Placing Ad Codes in HTML Templates

### Recommended Placement Strategy

For game guide pages (long-form content), use this layout:

```
┌─────────────────────────────────┐
│          HEADER / NAV           │
├─────────────────────────────────┤
│    LEADERBOARD AD (728×90)      │
├───────────────────┬─────────────┤
│                   │             │
│   ARTICLE CONTENT  │  SIDEBAR   │
│                   │   AD        │
│   [In-Content Ad] │  (300×250)  │
│                   │             │
│   [In-Content Ad] │             │
│                   │             │
│                   │             │
├───────────────────┴─────────────┤
│         FOOTER                  │
└─────────────────────────────────┘
```

### Ad Container CSS

Add this to your `src/css/style.css` for proper ad styling:

```css
.ad-container {
    margin: 1.5rem auto;
    text-align: center;
    max-width: 100%;
    overflow: hidden;
}

.ad-leaderboard {
    max-width: 728px;
}

.ad-in-content {
    max-width: 728px;
    margin: 2rem 0;
}

.ad-sidebar {
    margin: 0;
    position: sticky;
    top: 1rem;
}
```

---

## GDPR Considerations with AdSense

AdSense sets cookies for ad personalization. Under GDPR, you **must** get user consent before loading the AdSense script.

This project includes a cookie consent system. When a user hasn't consented:
- The AdSense script is **not loaded**
- Ads either don't show or show non-personalized ads
- The consent banner appears

After the user consents to "Advertising" cookies, AdSense loads normally.

For more details, see [gdpr-guide.md](./gdpr-guide.md).

---

## Revenue Optimization Tips

### Content Strategy
- **Target high-CPC niches**: PC gaming, gaming hardware, AAA game guides tend to have higher RPMs
- **Write comprehensive guides**: Long, detailed guides (2000+ words) have more ad inventory and rank better
- **Update regularly**: Fresh content gets better crawl rates and user engagement
- **Answer specific questions**: "How to beat Boss X in Game Y" attracts search traffic looking for solutions

### Ad Placement
- **Above the fold**: A leaderboard or responsive ad visible without scrolling improves viewability
- **Mid-article**: In-content ads between meaningful sections get high engagement
- **Don't overdo it**: 3-4 ads per page maximum. More ads ≠ more revenue beyond a point
- **Avoid accidental clicks**: Don't place ads too close to navigation or interactive elements

### Technical Optimization
- **Page speed**: Fast-loading pages reduce bounce rate and improve ad viewability
- **Mobile responsive**: Mobile traffic is 60%+ for gaming sites. Use responsive ad units
- **Core Web Vitals**: Google prioritizes sites with good LCP, FID, CLS scores. CLS is especially important — unstable layouts that push ads around are penalized

### AdSense Settings
- **Enable Auto Ads** as a baseline, then add manual units for high-traffic pages
- **Review Ad Review Center** regularly to block irrelevant or low-quality advertisers
- **Use URL channels** to track performance per game guide
- **Monitor Performance Reports** weekly to identify trends

---

## AdSense Policy Compliance

### Do:
- ✅ Create original, valuable content
- ✅ Use standard ad placements with clear visual separation
- ✅ Disclose affiliate relationships if you also use affiliate links
- ✅ Keep ad density reasonable (no more than 3-4 per page)
- ✅ Ensure ads don't interfere with content readability

### Don't:
- ❌ Click your own ads (instant ban risk)
- ❌ Encourage others to click ads
- ❌ Place ads in deceptive positions (e.g., fake close buttons, menu overlays)
- ❌ Serve ads on pages with copied/stolen content
- ❌ Use traffic bots or paid traffic to inflate impressions
- ❌ Modify AdSense code in any way

### Policy Violation Recovery

If you receive a policy warning:
1. Read the warning carefully — it tells you the specific issue
2. Fix the issue immediately
3. Request a review through the AdSense dashboard
4. If your account is suspended, you can submit an appeal within 30 days

---

## Timeline Expectations

| Phase | What to Expect |
|-------|---------------|
| Week 0-1 | Apply for AdSense after building 15+ pages |
| Week 1-4 | Review period — focus on creating more content |
| Month 1-2 | Initial earnings likely $0.50-5/day depending on traffic |
| Month 3-6 | With 50+ pages and growing traffic: $5-30/day is achievable |
| Month 6+ | Established sites with 100+ pages can reach $30-100+/day |

**Key metric**: RPM (Revenue Per Mille) for gaming content typically ranges from $2-$15 depending on geography, niche, and content quality.
