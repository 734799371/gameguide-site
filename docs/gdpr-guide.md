# GDPR Compliance Guide

A guide to making your game guide site compliant with the EU General Data Protection Regulation (GDPR).

## Overview

GDPR applies to any website accessible by EU residents, regardless of where the site is hosted. Non-compliance can result in fines up to €20 million or 4% of annual global revenue.

For a static game guide site with Google AdSense, the key GDPR requirements are:

1. **Cookie consent** before setting non-essential cookies
2. **Privacy policy** explaining data collection
3. **Transparency about AdSense data processing**
4. **User rights** (access, deletion, portability)
5. **No data collection beyond what's disclosed**

---

## Cookie Consent Implementation

### How It Works

The site uses a cookie consent banner that blocks all non-essential scripts until the user gives consent.

**Essential cookies** (always active): No cookies are strictly essential on a static site.

**Analytics cookies** (opt-in): Google Analytics (if added later).

**Advertising cookies** (opt-in): Google AdSense cookies for ad personalization.

### Consent Banner Logic

```javascript
// src/js/main.js — Cookie consent system

(function() {
    const CONSENT_KEY = 'site_cookie_consent';

    // Get stored consent preferences
    function getConsent() {
        try {
            return JSON.parse(localStorage.getItem(CONSENT_KEY));
        } catch { return null; }
    }

    // Save consent preferences
    function saveConsent(prefs) {
        localStorage.setItem(CONSENT_KEY, JSON.stringify(prefs));
    }

    // Check if user has given consent for a category
    function hasConsent(category) {
        const prefs = getConsent();
        return prefs && prefs[category] === true;
    }

    // Show consent banner
    function showBanner() {
        if (getConsent() !== null) return; // Already decided

        // Create banner element
        const banner = document.createElement('div');
        banner.id = 'cookie-banner';
        banner.setAttribute('role', 'dialog');
        banner.setAttribute('aria-label', 'Cookie consent');
        banner.innerHTML = `
            <div class="cookie-banner-content">
                <p>We use cookies to improve your experience and display personalized ads.
                   <a href="/privacy.html">Learn more</a></p>
                <div class="cookie-actions">
                    <button onclick="rejectAll()">Reject Non-Essential</button>
                    <button onclick="acceptAll()">Accept All</button>
                    <button onclick="manageCookies()">Manage Preferences</button>
                </div>
                <div id="cookie-preferences" style="display:none;">
                    <label><input type="checkbox" id="consent-analytics"> Analytics</label>
                    <label><input type="checkbox" id="consent-advertising"> Advertising</label>
                    <button onclick="savePreferences()">Save Preferences</button>
                </div>
            </div>
        `;
        document.body.prepend(banner);
    }

    // Accept all cookies
    window.acceptAll = function() {
        saveConsent({ analytics: true, advertising: true });
        document.getElementById('cookie-banner').remove();
        loadScripts();
    };

    // Reject non-essential cookies
    window.rejectAll = function() {
        saveConsent({ analytics: false, advertising: false });
        document.getElementById('cookie-banner').remove();
        loadNonPersonalizedAds();
    };

    // Show preference manager
    window.manageCookies = function() {
        document.getElementById('cookie-preferences').style.display = 'block';
    };

    // Save granular preferences
    window.savePreferences = function() {
        const prefs = {
            analytics: document.getElementById('consent-analytics').checked,
            advertising: document.getElementById('consent-advertising').checked
        };
        saveConsent(prefs);
        document.getElementById('cookie-banner').remove();
        loadScripts();
    };

    // Load scripts based on consent
    function loadScripts() {
        if (hasConsent('advertising')) {
            // Load Google AdSense
            const script = document.createElement('script');
            script.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXXXXXX';
            script.async = true;
            script.crossOrigin = 'anonymous';
            document.head.appendChild(script);
        }
        if (hasConsent('analytics')) {
            // Load Google Analytics (if used)
            const script = document.createElement('script');
            script.src = 'https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX';
            script.async = true;
            document.head.appendChild(script);
        }
    }

    // Load non-personalized ads (when user rejects advertising cookies)
    function loadNonPersonalizedAds() {
        // AdSense can serve non-personalized ads via privacy settings
        (window.adsbygoogle = window.adsbygoogle || []).push({
            google_ad_client: 'ca-pub-XXXXXXXXXXXXXXXX',
            enable_page_level_ads: false,
            overlays: {bottom: false}
        });
    }

    // Initialize
    if (getConsent() === null) {
        // Show banner with slight delay to not block rendering
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', showBanner);
        } else {
            showBanner();
        }
    } else {
        loadScripts(); // Already has consent, load scripts
    }
})();
```

### Consent Banner CSS

```css
#cookie-banner {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background: #1a1a2e;
    color: #eee;
    padding: 1rem 2rem;
    z-index: 10000;
    box-shadow: 0 -2px 10px rgba(0,0,0,0.3);
    font-size: 0.9rem;
}

.cookie-banner-content {
    max-width: 800px;
    margin: 0 auto;
    text-align: center;
}

.cookie-actions {
    margin-top: 0.75rem;
}

.cookie-actions button {
    padding: 0.5rem 1rem;
    margin: 0 0.25rem;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 0.85rem;
}

.cookie-actions button:nth-child(1) {
    background: transparent;
    color: #ccc;
    border: 1px solid #666;
}

.cookie-actions button:nth-child(2) {
    background: #4a90d9;
    color: white;
}

.cookie-actions button:nth-child(3) {
    background: transparent;
    color: #ccc;
    border: 1px solid #666;
}

#cookie-preferences {
    margin-top: 1rem;
    padding-top: 1rem;
    border-top: 1px solid #333;
}

#cookie-preferences label {
    display: block;
    margin: 0.5rem 0;
}
```

---

## Privacy Policy Requirements

Your privacy policy page (`privacy.html`) must include:

### Required Sections

1. **Who we are**: Site name, operator name, contact email
2. **What data we collect**:
   - Cookie data (via AdSense)
   - Log data (hosting platform may collect IP, browser, etc.)
   - LocalStorage data (consent preferences)
3. **Why we collect it**: To serve ads and improve the site
4. **Who processes the data**: Google (AdSense), your hosting provider
5. **How long we keep it**: As long as required by law or service agreements
6. **User rights**: How users can exercise their GDPR rights
7. **Third parties**: List of services that set cookies (Google AdSense, Google Analytics if used)
8. **How to contact us**: Email address for privacy inquiries
9. **Changes to this policy**: Last updated date

### Privacy Policy Template

Create `src/privacy.html` with these sections. Key points to customize:

- Replace `GameGuideSite` with your actual site name
- Replace contact email with your real email
- Update the "Last updated" date when changes are made
- List all third-party services you use

---

## Data Processing for AdSense

Google AdSense processes user data for ad serving. You must:

### 1. Disclose in Privacy Policy

State that:
- Google uses cookies to serve ads based on user visits
- Users can opt out of personalized ads at [Google Ad Settings](https://www.google.com/settings/ads)
- Google's privacy policy: [policies.google.com/privacy](https://policies.google.com/privacy)
- Third-party vendors may also use cookies

### 2. Implement Non-Personalized Ads Option

When users reject advertising cookies, the site should still serve ads but in non-personalized mode. This is handled by the consent system above — `loadNonPersonalizedAds()` serves ads without personalization.

### 3. Google Privacy and Messaging

If you use Google AdSense, Google requires their own messaging on your site:

```html
<!-- Google required disclosure (add to privacy policy page) -->
<p>This site uses cookies from Google to deliver its services and to analyze traffic.
Information about your use of this site is shared with Google.
By using this site, you agree to its use of cookies.
<a href="https://policies.google.com/technologies/cookies">Google Cookie Policy</a></p>
```

---

## User Rights

Under GDPR, EU users have the right to:

| Right | Description | How You Handle It |
|-------|-------------|-------------------|
| **Access** | Request a copy of all data you hold about them | Provide via email (you hold minimal data — only consent preferences in localStorage) |
| **Rectification** | Request correction of inaccurate data | Update consent preferences on request |
| **Erasure** | Request deletion of their data | Clear localStorage, provide instructions |
| **Portability** | Request data in machine-readable format | Export consent preferences as JSON |
| **Objection** | Object to data processing | Disable ad personalization |
| **Withdraw consent** | Remove consent at any time | Provide a "Cookie Settings" link in the footer |

### Implementation

Add a cookie settings link in your site footer:

```html
<footer>
    <p>
        <a href="/privacy.html">Privacy Policy</a> ·
        <a href="#" onclick="resetConsent(); return false;">Cookie Settings</a> ·
        <a href="/contact.html">Contact</a>
    </p>
</footer>
```

```javascript
// Reset consent and show banner again
window.resetConsent = function() {
    localStorage.removeItem('site_cookie_consent');
    location.reload(); // Banner will show again
};
```

---

## Cookie Categories

| Category | Examples | Consent Required | Default |
|----------|----------|------------------|---------|
| **Strictly Necessary** | Session state (none used on this static site) | No | Always on |
| **Functional** | Language preferences (none used) | No | On |
| **Analytics** | Google Analytics (_ga, _gid, _gat cookies) | Yes | Off |
| **Advertising** | Google AdSense (__gads, __gpi, IDE, DSID cookies) | Yes | Off |

### Google AdSense Cookies

| Cookie | Purpose | Duration |
|--------|---------|----------|
| __gads | AdSense ad serving and tracking | 13 months |
| __gpi | AdSense user identification | 13 months |
| IDE | Google DoubleClick ad targeting | 13 months |
| DSID | DoubleClick ad tracking | 1 day |
| NID | Google ad personalization | 6 months |

---

## IAB TCF Considerations

The IAB Transparency and Consent Framework (TCF) is a standardized protocol for obtaining and storing user consent in the EU. For a simple site:

**You don't need full TCF implementation** if you:
- Use a simple consent mechanism (which this site does)
- Don't sell user data to third parties
- Only use Google AdSense (Google handles its own TCF compliance)

However, if you use multiple ad networks or CMPs, you may need IAB TCF compliance. In that case, consider using a Cookie Management Platform (CMP) like:

- **Cookiebot** (free for basic use)
- **OneTrust** (freemium)
- **iubenda** (freemium)

These CMPs handle the complexity of IAB TCF for you.

---

## Regular Audit Checklist

Audit your GDPR compliance quarterly:

- [ ] **Consent banner works correctly** — Shows on first visit, stores preference, doesn't show again after choosing
- [ ] **AdSense doesn't load before consent** — Check with browser DevTools Network tab
- [ ] **Privacy policy is up to date** — Reflect current data practices, last updated date
- [ ] **Contact information is valid** — Privacy inquiry email works
- [ ] **Non-EU visitors still see consent** — GDPR doesn't require consent for non-EU, but showing it doesn't hurt and simplifies logic
- [ ] **Cookie list is accurate** — All cookies used are documented in the privacy policy
- [ ] **User can reset consent** — Cookie Settings link in footer works
- [ ] **No hidden tracking** — Check for unexpected third-party scripts
- [ ] **Google AdSense policies** — AdSense may update their requirements; review quarterly
- [ ] **Data breach procedures** — Document how you'd handle a breach (even though static sites have minimal risk)

---

## Disclaimer

This guide provides general GDPR compliance information for a static website using Google AdSense. It is not legal advice. Consult a qualified legal professional for specific compliance requirements in your jurisdiction.
