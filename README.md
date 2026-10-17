# Gewabin Astro website

A static Astro 6 website using SPX Cooling's homepage structure, the supplied Gewabin logo and Gewabin product content.

## Run locally

```sh
pnpm install
pnpm dev
```

## Build

```sh
pnpm build
pnpm preview
```

Upload the contents of `dist/` to a static hosting provider. For Git-based hosting, use `npm run build` and output directory `dist` after installing dependencies.

## Cloudflare Pages deployment

Connect `t16754123-beep/gewabin-astro` through Cloudflare Pages Git integration with the following configuration:

| Setting | Value |
|---|---|
| Suggested project name | `gewabin-evaporative-condenser` (subject to availability) |
| Production branch | `main` |
| Framework preset | Astro |
| Build command | `npm run build` |
| Build output directory | `dist` |
| Root directory | Repository root (leave blank) |
| Node.js version | `24.19.0`, provided by `.node-version` |
| Environment variable | `PNPM_VERSION=11.25.0` |

The repository keeps its existing pnpm lockfile and package manager configuration for dependency installation. `npm run build` runs the same Astro build script. Set `PNPM_VERSION` for both production and preview builds, because Cloudflare's v3 build environment does not infer it from the lockfile.

The proposed Pages hostname is `gewabin-evaporative-condenser.pages.dev`. It is not reserved by this repository; Cloudflare must confirm availability during project creation. A custom `.com` or other independent domain requires an already registered domain and a separate domain association.

Setup: https://developers.cloudflare.com/pages/get-started/git-integration/
Astro configuration: https://developers.cloudflare.com/pages/framework-guides/deploy-an-astro-site/
Build environment: https://developers.cloudflare.com/pages/configuration/build-image/

## Content and images

- Visual structure: https://spxcooling.com/
- Requested content site: https://www.gewabintech.com/
- Authorized alternative: https://www.gwbrefrigeration.com/
- The original site was inaccessible during collection. The user explicitly authorized the alternative Gewabin website. Product content, imagery, company facts and contact information come from these Gewabin websites; individual records contain source URLs in `src/data/content.ts`.
- Logo: user-supplied `QQ图片20261017212434.jpg`, whitespace trimmed without changing the artwork.
- News retains the original 2023 publication dates.
- Product images are local assets, not hotlinked.
- Typography follows the reference: locally hosted Lato and Open Sans. The homepage follows the reference's compact header, carousel, overlapping intro card, video, three-column news, blue contact band and image-backed inquiry section.
- The factory video is the official Gewabin embed linked on its video page: https://www.gwbrefrigeration.com/video (YouTube ID `4irPZt6UlNA`). Playback depends on YouTube availability.
- Contact form uses an explicit `mailto:` handoff. There is no form backend or server delivery confirmation. A configured email app is needed.
- Source specifications describe the corresponding source product; confirm equipment selection with Gewabin before purchase.

## Edit

The expanded website has 46 static HTML pages, including the 404 page. Its eight main sections are Products, Parts, Library, About, Applications, Services, Tools and News. It includes product category pages, three component products, five application pages, three service pages, factory/quality/location pages, four technical reading pages and two official video embeds.

The resource library supports type and keyword filters. Site-wide search works in the browser. The product-family selector groups equipment by purpose and prepopulates an inquiry; it does not calculate thermal capacity or make a final engineering selection. Technical guides can be printed from the browser. There are no invented PDF downloads or backend email delivery claims.

New page content is defined in `src/data/extended.ts`, route and navigation metadata in `src/data/site.ts`, and common section templates in `src/pages/[...path].astro`. Source provenance is recorded in `docs/content-sources.md`.

Content is in `src/data/content.ts`, page routes in `src/pages/`, shared layout in `src/layouts/Layout.astro`, and responsive styling in `src/styles/global.css`.
