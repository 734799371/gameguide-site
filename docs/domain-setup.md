# Domain Registration and DNS Setup Guide

A guide to choosing, registering, and configuring a domain name for your game guide site.

## Recommended Domain Registrars

| Registrar | .com Price | .net Price | .io Price | Free WHOIS | Transfer Price | Why Choose Them |
|-----------|-----------|-----------|-----------|------------|----------------|-----------------|
| **Cloudflare Registrar** | ~$10/yr | ~$11/yr | ~$35/yr | Yes | At-cost | Best value — sells at wholesale cost, no markup |
| **Porkbun** | ~$9/yr | ~$11/yr | ~$32/yr | Yes | At-cost + small fee | Clean interface, good support, cheap extras |
| **Namecheap** | ~$9/yr | ~$11/yr | ~$30/yr | Yes (1st year) | ~$9 | Popular, reliable, lots of features |
| **Google Domains** | $12/yr | $12/yr | $35/yr | Yes | Free | Simple but closed (sold to Squarespace) |

**Recommendation**: Use **Cloudflare Registrar** for the best price (at-cost pricing) and seamless integration with Cloudflare Pages. If you want the simplest setup, **Porkbun** is a close second.

---

## Domain Name Selection Tips

### For a Game Guide Site

1. **Keep it memorable and short**: 2-3 words maximum
   - ✅ `gamevault.io`, `guidepulse.com`, `playbook.gg`
   - ❌ `thebestgameguidesandwalkthroughs.com`

2. **Use gaming-related keywords** (optional but helpful for branding):
   - `game`, `guide`, `play`, `level`, `boss`, `quest`, `map`, `cheat`, `walk`

3. **Consider your target audience**:
   - `.com` — Universal, most recognized, best for SEO
   - `.gg` — Gaming-focused, trendy, affordable
   - `.io` — Tech/gaming appeal, commonly used in the gaming community
   - `.net` — Good alternative if .com is taken
   - `.dev` — Google-backed, good for developer guides

4. **Avoid**:
   - Hyphens (hard to say out loud): `game-guides.com`
   - Numbers: `gameguides101.com`
   - Trademarked game names in your domain: `eldenringguides.com` (legal risk)

5. **Check availability across platforms**: Make sure the handle is available on Twitter/X, YouTube, and Discord for branding consistency.

6. **Think long-term**: Don't tie the domain to a single game. You want it to work for any game guide.

### Good Examples for a Game Guide Site

- `gamevault.com` / `gamevault.gg`
- `guidepulse.com`
- `levelskip.com` (already taken)
- `playthrough.gg`
- `bossfolio.com`
- `questlog.io`
- `nexusguides.com`

---

## DNS Records Setup

After registering your domain, configure DNS records. The exact process depends on where your nameservers point.

### Core DNS Records

| Record Type | Name | Value | Purpose |
|-------------|------|-------|---------|
| **A** | @ | (Hosting IP) | Points root domain to server |
| **CNAME** | www | (Hosting URL) | Points www subdomain |
| **CNAME** | @ | (Hosting URL) | Alternative to A record for some hosts |
| **TXT** | @ | `v=spf1 include:_spf.google.com ~all` | SPF for email |
| **TXT** | @ | Google/Bing verification code | Search console verification |
| **CAA** | @ | `0 issue "letsencrypt.org"` | Authorize SSL certificate issuer |

---

## Nameserver Configuration per Platform

### Option A: Cloudflare Pages (Recommended)

If your domain is registered with **Cloudflare Registrar**:
1. Nameservers are already on Cloudflare — no changes needed
2. Go to Pages → Your Project → Custom domains → Add domain
3. Cloudflare auto-configures DNS

If your domain is registered **elsewhere** (e.g., Namecheap):
1. Log in to your registrar
2. Find DNS/Nameserver settings
3. Change nameservers to Cloudflare's:
   - `xxx.ns.cloudflare.com`
   - `yyy.ns.cloudflare.com`
   - (Exact values shown in your Cloudflare dashboard → Add Site)
4. Wait 1-24 hours for propagation
5. In Cloudflare: Add your site, go to Pages → Custom domains → Add your domain

### Option B: Netlify

If your domain is registered elsewhere:
1. In Netlify Dashboard → Domain management → Add custom domain
2. Netlify will show you the DNS records to add:
   - **A record**: `104.198.5.171` (Netlify's load balancer IP — check dashboard for current value)
   - **CNAME**: `www` → `your-site.netlify.app`
3. Add these records at your registrar
4. Netlify auto-provisions SSL

**Alternative (Netlify DNS)**:
1. In Netlify → Domain management → Add domain → Select "Set up Netlify DNS"
2. Netlify gives you nameservers to set at your registrar
3. Change nameservers to Netlify's

### Option C: GitHub Pages

At your domain registrar, add:

| Type | Name | Value |
|------|------|-------|
| A | @ | `185.199.108.153` |
| A | @ | `185.199.109.153` |
| A | @ | `185.199.110.153` |
| A | @ | `185.199.111.153` |
| CNAME | www | `YOUR_USERNAME.github.io` |

**Note**: GitHub Pages requires these four A records for the apex domain (root domain).

If using a subdomain (e.g., `guides.yourdomain.com`):
- Just add a single CNAME: `guides` → `YOUR_USERNAME.github.io`

---

## Verification Records

### Google Search Console

Verify your domain with Google by adding a TXT record:

1. Go to Google Search Console → Add Property → Domain
2. Google provides a TXT record like:
   ```
   google-site-verification=XXXXXXXXXXXXXXXXXX
   ```
3. Add it at your registrar/DNS provider:
   - Type: TXT
   - Name/Host: @
   - Value: `google-site-verification=XXXXXXXXXXXXXXXXXX`
4. Click "Verify" in Search Console

### Bing Webmaster Tools

Similar process:
1. Bing Webmaster Tools → Add site → Verify
2. Add TXT record: `bing-site-verification=XXXXXXXXXX`
3. Or add a CNAME: `verify.bing.com` → `XXXXXXXXXX.yourdomain.com`

---

## Email Setup (Optional)

### Forward-Only Email (Free)

Most registrars offer free email forwarding. This lets you use `contact@yourdomain.com` without running a mail server.

**Cloudflare**: Email Routing (free) — forwards emails to your personal Gmail/outlook
1. Cloudflare Dashboard → Email Routing
2. Set destination: your-personal@gmail.com
3. Add routing rule: `*@yourdomain.com` → your email
4. Add `contact@yourdomain.com` to your site's Contact page

**Namecheap**: Free email forwarding for .com/.net domains
**Porkbun**: Free email forwarding

### Full Email (Paid)

For a professional email with your domain:

| Provider | Price | Notes |
|----------|-------|-------|
| **Google Workspace** | $6/mo | Gmail interface, 30GB storage |
| **Migadu** | $1/mo+ | Affordable, flexible |
| **Zoho Mail** | Free tier | 5GB, limited features |
| **Fastmail** | $5/mo | Privacy-focused |

**Recommendation**: Start with **free email forwarding** from Cloudflare. Upgrade to a full email service only if you need to send email from that address (not just receive).

---

## DNS Propagation

After changing DNS records, propagation can take:

| Change Type | Typical Time |
|-------------|-------------|
| Nameserver change | 1-24 hours |
| A/CNAME records | 5 minutes - 1 hour |
| TXT records | 5 minutes - 1 hour |

Check propagation status at:
- [dnschecker.org](https://dnschecker.org)
- `dig yourdomain.com` in terminal

---

## Common DNS Issues and Fixes

### "Site not found" after adding domain
- DNS hasn't propagated yet — wait up to 24 hours
- Check that CNAME/A records are correct
- Verify nameservers are pointing to the right provider

### SSL certificate not provisioning
- DNS must be fully propagated first
- Some providers (GitHub Pages) require HTTPS enforcement toggle
- Check for incorrect DNS records

### Subdomain works but root domain doesn't
- Root domain needs A records (not CNAME)
- Some registrars require the A record host to be `@` (not blank)
- GitHub Pages needs all four A records

### Mixed content warnings
- Make sure all URLs in your HTML use `https://` or relative paths
- Update `SITE_URL` in build script to use `https://`
- Check `<img>` and `<script>` src attributes
