# Ray Excavation &amp; Demolition — ray-con.com

The website for **Ray Excavation &amp; Demolition** (owner: Willie Ray).
A simple, fast, one-page site — no database, no server code.

- **Live site:** http://ray-con.com
- **Owner / contact on site:** Willie Ray · (214) 405-5621 · willier85@yahoo.com
- **Service area:** Kaufman County &amp; surrounding areas

## How it's hosted

- Hosted free on **GitHub Pages** from this repo's `main` branch.
- The custom domain `ray-con.com` is set via GitHub Pages (CNAME) + the domain's DNS.
- Every time `main` is updated, GitHub automatically re-publishes the site
  (see `.github/workflows/static.yml`). Changes go live in a minute or two.
- Because it's GitHub Pages (static hosting), there is **no back-end** — forms
  can't "send" on their own, which is why the site uses **call/text** instead of
  a contact form. (A real form would need a small mail endpoint + an MX record on
  the domain; not set up today.)

## Files

| File | What it is |
|------|-----------|
| `index.html` | All the page content (text, sections, links) |
| `styles.css` | All the colors, fonts, and layout |
| `script.js`  | Small extras: smooth scrolling, header-on-scroll, animations |
| `images/`    | Photos + the logo (`logo.svg`) |

## Design notes

- **Logo (master copy):** `images/logo.svg` — the red-diamond italic "R" from the
  job-site sign, redrawn from scratch as a vector (brand red `#d4451f`, white R).
  This SVG is the master: it scales to any size (signs, shirts, cards).
  - `images/logo-knockout.svg` — same mark with a see-through R (for light backgrounds/print).
  - `images/logo-1024.png`, `images/logo-knockout-1024.png` — transparent PNG exports.
  - `favicon.png` (64px) and `apple-touch-icon.png` (180px) — browser/phone icons.
  If you edit the SVG, re-export the PNGs from it (any SVG tool or a browser screenshot).
- **Fonts** (loaded from Google Fonts in `index.html`):
  Saira heavy italic (the "RAY EXCAVATION / & DEMOLITION" title, header name and
  phone number, matching the job-site sign), Barlow Condensed (headings),
  Barlow (body text).
- **Hero title** mirrors the sign: orange `RAY EXCAVATION`, then an orange band
  (`#d4451f`, the logo red) with white `& DEMOLITION` (`.brand-ray` / `.brand-sub`).
- **Theme colors** (in `styles.css`): terracotta `#e07b39` / `#c25e22`,
  slate `#35433d` / `#47564e`, dark footer `#232c27`.

## SEO (how Google finds the site)

- `index.html` `<head>`: title, description, canonical URL (`https://ray-con.com/`),
  link-preview tags (`og:*`, image `images/social-card.jpg` 1200x630), and
  **structured data** (the `application/ld+json` block: business name, phone,
  hours, Kaufman County service area, services). Update it when hours/services change.
- `sitemap.xml` (the page + gallery photos) and `robots.txt` (points Google at the sitemap).
- **Google Search Console:** verified as a *Domain* property through Cloudflare (DNS),
  so no verification tag is needed in the HTML. Don't delete the `google-site-verification`
  TXT record in Cloudflare DNS. Sitemap submitted as `https://ray-con.com/sitemap.xml`.
- **AI answers (Google AI Overviews, Gemini, ChatGPT, etc.):** the "Common Questions"
  section (`#faq`) plus its `FAQPage` data block answer what people ask; `llms.txt` is a
  plain-text business summary some AI tools read. Keep all three in sync with the site.
- Photos are resized/compressed for speed (gallery 800px wide). Shrink new phone photos
  the same way before adding them.

## Common updates (how-to)

**Change the phone number** — in `index.html`, search for `2144055621` (in the
`tel:`/`sms:` links) and `(214) 405-5621` (the visible text) and replace both.

**Change the email** — search `index.html` for `willier85@yahoo.com`.

**Add or swap a work photo** — put the new image in `images/`, then in
`index.html` point the matching `<img src="images/...">` at it. Phone photos are
large; shrinking them to ~1000px wide keeps the site fast.

**Edit services** — the service cards are in the `<section id="services">` block
in `index.html`. Copy a `<div class="service-card">…</div>` to add one.

**Publish a change** — commit and push to `main`; GitHub Pages redeploys
automatically. If you don't see the change, hard-refresh (Ctrl+Shift+R).

## History

Refreshed 2026-07-15 from the original template: real business name, owner,
phone, email, and services; real job-site photos (excavation, bobcat, hauling,
pond work, site prep); a bold logo + wordmark masthead; earthy slate/terracotta
theme; and a call/text-first contact section (form removed).
