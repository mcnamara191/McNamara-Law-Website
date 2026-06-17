# McNamara Law, PLLC — Website

Marketing site for McNamara Law, PLLC, a Central Florida immigration law firm based in Orlando. Static HTML site hosted on GitHub Pages.

## Pages

| File | Description |
|---|---|
| `index.html` | Homepage. Sections: Services, The Firm, Know the Basics, Insights, Contact. |
| `e2-visas.html` | E-2 Treaty Investor Visa landing page. |

## Structure & conventions

- The site is plain HTML/CSS/JS — no build step, no framework, no dependencies to install.
- Each page shares the same header, footer, color palette, and fonts (Newsreader, Public Sans, Spline Sans Mono via Google Fonts) for visual consistency.
- Internal links between pages use relative paths and point to `index.html` (not the old filename), so any new page added to the site should link back the same way, e.g. `index.html#contact`.
- The contact form on the homepage is static HTML only — it has no backend, so submissions currently go nowhere. Wire it up to a form service (e.g. Formspree) or swap it for a `mailto:` link if live submissions are needed.

## Publishing changes

This repo is deployed via **GitHub Pages**, configured under Settings → Pages to deploy from the `main` branch.

To update the live site:
