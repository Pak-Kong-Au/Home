# 2B Pak Kong Au — Owner-Direct Sale Site

A bilingual (繁體中文 / English), fully responsive single-page site.
It is a **pure static site** — there is **no build step**. React runs in the
browser via CDN, so any static host works.

## Files
- `index.html` — the site (open this)
- `styles.css`, `content.js`, `app.jsx`, `diagrams.jsx`, `tweaks-panel.jsx`
- `assets/` — photos, generated share image (`assets/og-image.png`)
- `overview.html` — a side-by-side EN/中 + mobile preview (optional)

---

## Deploy

### Vercel (drag & drop — easiest)
1. Go to https://vercel.com → **Add New… → Project**.
2. Choose **Deploy** without a Git repo, or drag this whole folder onto the
   upload area.
3. Framework preset: **Other**. Build command: **(leave empty)**.
   Output directory: **`.`** (the folder itself).
4. Deploy. Done.

**Vercel CLI alternative:** `npm i -g vercel` → run `vercel` in this folder →
accept defaults.

### Netlify (drag & drop)
1. Go to https://app.netlify.com/drop
2. Drag this entire folder onto the page. It deploys instantly.
   (No build command, no publish dir needed.)

### Render (Static Site)
1. Push this folder to a GitHub repo (or use Render's manual deploy).
2. New → **Static Site**.
3. **Build Command:** leave empty.
4. **Publish Directory:** `.`
5. Create. Done.

### GitHub Pages
Push the folder to a repo, enable Pages on the `main` branch root. Works as-is.

---

## After your first deploy — two quick edits

1. **Social share image (Open Graph).** Most platforms (WhatsApp, Facebook,
   WeChat, LinkedIn) require an **absolute** image URL. In `index.html`, find
   the two lines with `assets/og-image.png` and replace them with your live URL,
   e.g.:

   ```html
   <meta property="og:image" content="https://YOUR-DOMAIN/assets/og-image.png"/>
   <meta name="twitter:image" content="https://YOUR-DOMAIN/assets/og-image.png"/>
   ```

2. **Contact links.** In `content.js`, search for `wa.me`, `t.me`,
   `mailto:` and the WeChat entry, and put in your real numbers / IDs.

---

## Notes
- The interior photos still carry agency watermarks — replace the files in
  `assets/photos/` (keep the same filenames) with clean originals.
- The site needs an internet connection to load fonts and the React runtime
  from their CDNs. For a fully offline single file, use the bundled
  `Pak Kong Au 2B.html` instead.
- Test the share preview with https://www.opengraph.xyz/ after deploying.
