# McNamara Law, PLLC — Website

Marketing site for McNamara Law, PLLC, a Central Florida law firm based in Orlando with five practice areas: Immigration, Family Law, Civil Litigation, Criminal Defense, and Personal Injury. Static HTML site deployed on Vercel (`vercel.json` enables clean URLs, so `/family-law` serves `family-law.html`).

## Pages

| File | URL | Description |
|---|---|---|
| `index.html` | `/` | Homepage. Sections: Practice Areas, Featured guides, The Firm, Know the Basics, Contact (Clio Grow intake embed). |
| `immigration.html` | `/immigration` | Immigration hub: family-based, business & investor, asylum/humanitarian/waivers, citizenship and removal defense. |
| `e2-visas.html` | `/e2-visas` | E-2 Treaty Investor Visa page. Lives under Immigration → Business & Investor Visas (URL kept as-is for existing links). |
| `family-law.html` | `/family-law` | Florida family law: divorce, timesharing, support, modifications, paternity, relocation, alimony, etc. |
| `civil-litigation.html` | `/civil-litigation` | Contract, fraud, consumer/FDUTPA, dealer and repair-shop disputes, replevin, commercial and partnership disputes. |
| `fdutpa-consumer-claims.html` | `/fdutpa-consumer-claims` | SEO landing page for FDUTPA and Motor Vehicle Repair Act claims against auto dealers, mechanics, and repair shops. |
| `criminal-defense.html` | `/criminal-defense` | Florida criminal defense, both pre-filing (investigation) and after charges are filed. |
| `personal-injury.html` | `/personal-injury` | Personal injury, with focus on car accidents and slip-and-fall / premises liability. |
| `car-accidents.html` | `/car-accidents` | SEO landing page for Florida car accident injuries: PIP, BI, UM/UIM, property damage, lost wages, pain & suffering, rideshare/commercial. |

`sitemap.xml` and `robots.txt` point search engines at `https://www.mclawfl.com/`. Add any new page to `sitemap.xml`.

## Structure & conventions

- Plain HTML/CSS/JS — no build step, no framework, no dependencies to install.
- Shared files live in `assets/`:
  - `assets/site.css` — design tokens, header/nav (with the Practice Areas dropdown), footer, and the reusable page components (page hero, service cards, panels, timeline, FAQ, CTA).
  - `assets/site.js` — FAQ accordion, scroll reveal, mobile menu, cursor glow.
  - `assets/logo-mark.svg` / `assets/logo-mark-white.svg` — the logo for the header and footer.
- Page-specific styles stay in a `<style>` block in that page's `<head>`.
- Every page repeats the same header and footer markup. When adding or renaming a page, update the nav dropdown, the mobile menu, and the footer on **every** page.
- Internal links use root-relative clean URLs, e.g. `/family-law` or `/#contact`.
- Pages with a FAQ section that targets search (`car-accidents`, `fdutpa-consumer-claims`, `personal-injury`) include matching `FAQPage` JSON-LD in the `<head>`. If you edit those FAQ answers, update the JSON-LD too.
- The homepage contact form is the Clio Grow intake embed (`https://mcnamaralaw.cliogrow.com/inquiry`).

## Previewing locally

Because links use clean URLs (`/family-law`), opening files directly from disk won't navigate correctly. Use a local server that resolves `.html` extensions, e.g. `npx vercel dev` or `npx serve -l 3000` (serve supports clean URLs by default).

## Publishing changes

Commits to `main` are deployed by Vercel.
