# Mariox Final — website

Next.js (pages router) build of the **Mariox Software Site** design (`Mariox Software Site.dc.html`) with all functionality of `../marioxwebsite`. The `.dc.html` / `.html` design files in this folder are untouched reference files.

## Run

```bash
npm install
cp .env.example .env.local   # fill in SMTP + API values
npm run dev                  # http://localhost:3000
npm run build && npm start   # production, port 9601
```

## Routes

| URL | Source |
| --- | --- |
| `/` | Design home |
| `/services`, `/services/[slug]` | Design services (10 detail pages) |
| `/industries`, `/industries/[slug]` | Design industries (16 detail pages) |
| `/case-study`, `/case-study/[slug]` | 42 case studies from the old site, filters kept, design layout |
| `/technologies`, `/process`, `/about`, `/hire`, `/ai` | Design pages |
| `/contact`, `/career`, `/terms-and-conditions` | Old-site pages in the design language |
| `/[serviceCity]` | SEO landing pages from `NEXT_PUBLIC_BASE_API_URL/homeScreen/:slug` (incl. top-companies variant) |
| `/api/contact` | Nodemailer enquiry + acknowledgement mail, rate limit, honeypot (unchanged) |

Redirects: `/work → /case-study`, `/company → /about`, `/technology → /technologies`, `/industry → /industries`, legacy `/case-study-*` and `/cs-detail`.

Kept from the old site: GTM, GA4, Google Ads conversion (fired on successful enquiry), Search Console tag, ClickTrue, favicons, `robots.txt`, all sitemaps, Organization / WebPage / LocalBusiness / Breadcrumb / FAQPage structured data, canonical + OG tags.

## Structure

- `src/lib/css.js` — turns the design's inline CSS strings into React styles; hover styles become generated classes.
- `src/lib/fx.js` — motion layer from the design (three.js particles, cursor, GSAP scenes, Lenis, reveal).
- `src/components/ui.jsx` — shared design blocks; `sections.jsx` — SEO, FAQ, testimonials, contact block.
- `src/data/` — all content (design data, case studies, terms, FAQs, career).
