# Gewabin Astro Website Implementation Plan

**Goal:** Recreate the SPX Cooling homepage structure for Gewabin using the supplied logo and Gewabin's verified product content.

**Architecture:** Static Astro pages with shared navigation and footer; a central product dataset generates local product details. Small browser scripts implement the carousel, accessible navigation, product search and filters, and a mail-client inquiry handoff.

**Tech Stack:** Astro 6, semantic HTML, custom CSS, TypeScript browser scripts, locally hosted source imagery.

## Design
The user clarified that the site should reproduce SPX's page style closely. Follow the measured reference: 84px white header, compact Menu dropdown and blue/orange actions, full-width 600px carousel with product image left and text right, 90%-width rounded company card overlapping the hero, centered video heading and 16:9 video poster with play control, three-column news, blue gradient contact band, photographic inquiry banner, and footer. Use the source site's Lato and Open Sans typography and blue accent. Keep the supplied Gewabin logo and authorized Gewabin content. Do not invent additional offices to imitate SPX's three location cards.

## Tasks
1. Collect source product imagery and factual descriptions; record provenance. User authorized gwbrefrigeration.com as an alternative after gewabintech.com was inaccessible.
2. Build shared layout, responsive navigation, footer, homepage and carousel.
3. Build product catalog with filters, individual product pages, company and contact pages.
4. Verify local imagery, page routes, filters, menus, responsive widths and form handoff in a browser, and run Astro production build.
5. Publish a private review copy with Sites, and deliver source and preview. Inquiry submission opens the visitor's email client; no message is transmitted by a server.
