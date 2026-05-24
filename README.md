# Pavan Kumar Lankapalli — Portfolio

A single-page portfolio for an Analytics Engineer specializing in LookML,
Snowflake, and dbt-style modeling.

## Run locally

No build step. Just open `index.html` in a browser, or serve the folder:

```bash
# Python
python -m http.server 8080

# Node
npx serve .
```

Then visit http://localhost:8080.

## Files

- `index.html` — content & structure
- `styles.css` — dark theme, semantic-layer-inspired design
- `script.js` — scroll reveals + active nav highlighting

## Deploy

Drop the folder into Netlify, Vercel, GitHub Pages, or Cloudflare Pages —
no build configuration required.

## Customizing

- **Metrics & copy:** edit the hero metrics and bullet points in `index.html`.
- **Theme:** tweak CSS variables at the top of `styles.css` (`--accent`,
  `--accent-2`, `--bg`, etc.).
- **Sections:** sections are independent; add or remove `<section>` blocks
  and matching nav links freely.
