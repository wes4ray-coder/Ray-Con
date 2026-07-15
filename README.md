# Ray Construction &amp; Demolition — ray-con.com

The website for **Ray Construction &amp; Demolition** (owner: Willie Ray).
A simple, fast, one-page site — no database, no server code.

- **Live site:** http://ray-con.com
- **Owner / contact on site:** Willie Ray · (214) 405-5621 · willier85@yahoo.com
- **Service area:** Dallas &amp; surrounding areas

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

- **Logo:** `images/logo.svg` — a vector excavator + "earth layers" emblem in
  terracotta. Scales to any size; edit the SVG to change it.
  Note: if you edit the SVG, keep any `&` written as `&amp;` or the file won't load.
- **Fonts** (loaded from Google Fonts in `index.html`):
  Cinzel (the big "RAY" wordmark, matches Willie's business card),
  Barlow Condensed (headings + phone number), Barlow (body text).
- **Theme colors** (in `styles.css`): terracotta `#e07b39` / `#c25e22`,
  slate `#35433d` / `#47564e`, dark footer `#232c27`.

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
