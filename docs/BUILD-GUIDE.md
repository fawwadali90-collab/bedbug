# Build Guide — bedbugtreatmentnaplesfl.com

Read TEMPLATE.html first. It is the exact skeleton. Copy the verbatim blocks (topbar, header, callbar, comparison table, why-choose-us, contact band, footer, scripts) character-for-character. Fill every `[BRACKETED]` marker with real, unique content. No bracketed text may remain in a finished page.

## Brand & tokens
- Brand: "Naples Bed Bug Treatment". Domain: https://bedbugtreatmentnaplesfl.com. Email (real): info@bedbugtreatmentnaplesfl.com.
- Contact tokens — use EXACTLY these, everywhere contact info appears (visible text AND tel: hrefs): `{{PHONE}}` (display), `{{PHONE_TEL}}` (tel:+1… href), `{{ADDRESS}}` (street address).
- NEVER invent: phone number, address, review, rating, testimonial, years in business, license number, awards, "since 19xx". Zero fabricated claims.

## Banned content
- NO pricing sections, NO price numbers anywhere (no $, no "starting at").
- NO testimonials / reviews sections, NO star ratings, NO aggregateRating in schema.
- NO forms anywhere (no quote forms, no newsletter, no contact form).

## Page types & section order
- **Homepage** (index.html): hero → services grid (all 10 cards) → how-it-works (4 steps: Call/Inspect → Identify the Plan → Treat → Follow Up) → comparison table → why-choose-us → service area (map q=Naples,FL + pills) → FAQ (6) → contact band. 1200+ words.
- **Service page** (/services/<slug>.html): hero → intro split (what it is + info box) → how-it-works (4 steps adapted to the service) → comparison table → related services grid (6 OTHER services) → why-choose-us → service area (map q=Naples,FL + pills) → FAQ (6, service-specific) → contact band. 900–1100 words. Canonical: https://bedbugtreatmentnaplesfl.com/services/<slug>
- **Location page** (/locations/<slug>.html): hero → intro split (local angle + info box with ZIP list) → services grid (6 most relevant services for that area) → why-choose-us → service area (map q=<City>,FL + nearby-area pills: 6 nearby locations) → FAQ (6, local-angle) → contact band. 800–1000 words. Canonical: https://bedbugtreatmentnaplesfl.com/locations/<slug>. Map iframe: `https://maps.google.com/maps?q=<City+Name>%2C%20FL&t=&z=12&ie=UTF8&iwloc=&output=embed`. Title attr: "Map of <City>, FL".
- **About** (/about.html): page-intro hero (use .page-intro instead of .hero) → story split → why-choose-us → service area → FAQ (4) → contact band. 600–800 words. No invented founding story details — write about the specialty/focus, Naples market knowledge (tourism corridor, condos/HOAs, seasonal residents), and process.
- **Contact** (/contact.html): page-intro → contact band (expanded with hours line "Call today — same-day inspections available") → service area map → FAQ (4, contact-oriented) → NO second contact band (avoid duplication; end with CTA strip instead). 300–500 words. Include PestControlService JSON-LD.
- **Privacy** (/privacy-policy.html): page-intro → prose sections (Information We Collect / How We Use It / Cookies / Third Parties / Your Rights / Contact Us with tokens). 500–700 words. No FAQ, no contact band; end with CTA strip.
- **404** (/404.html): err-wrap + "Popular pages" links. `<meta name="robots" content="noindex">`. No FAQ/schema beyond BreadcrumbList.

## SEO per page
- `<title>`: unique site-wide, 50–62 chars, include "Naples, FL" where natural + brand or keyword.
- Meta description: unique site-wide, ≤155 chars. Service/location/homepage/contact metas include {{PHONE}} (money-page convention).
- H1: unique site-wide, Title Case. Exactly one H1 per page.
- ALL headings H1/H2/H3 in Title Case: capitalize major words; lowercase ONLY: a, an, the, and, but, or, nor, for, so, yet, as, at, by, in, of, on, to, up, via, vs. Hyphenated words: capitalize both parts (Same-Day).
- OG + Twitter tags mirror title/description/url. Canonical extensionless; homepage canonical = bare domain.
- JSON-LD: BreadcrumbList on EVERY page (Home > Services > X, or Home > About etc. — breadcrumb URLs must be real pages/anchors). FAQPage on FAQ pages — visible Q&A text must match schema exactly. PestControlService ONLY on homepage + contact. Never aggregateRating.
- Body copy genuinely unique per page. Naples-specific angles: tourism corridor, 5th Ave South, Park Shore/Vanderbilt resorts, Marco Island vacation rentals, condos/HOAs, seasonal residents, Old Naples historic homes.

## Interlinking
- Every service page links 6 related services (cards) + 3+ location pills in copy where natural.
- Every location page links 6 nearby location pills + relevant services.
- Homepage links everything via grids/pills. Footer links all 25 inner pages (verbatim).
- No broken internal links. No orphan pages (every page reachable from nav/footer/grids/pills).

## QA the coordinator will run
Titles/H1s/metas unique; Title Case headings; tokens present; sitemap parity; 0 broken links; 0 orphans. Write carefully so QA passes first time.
