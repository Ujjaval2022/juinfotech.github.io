# juinfotech.github.io

J.U Infotech is a professional computer repair and accessories service provider offering laptop repair, desktop maintenance, software installation, networking solutions, and quality computer accessories with reliable support. 💻🔧

## Analysis (What was broken)

- The main CTA used class `btn` in HTML, but CSS only defined `.button`, so the button style did not apply.
- The hero section depended on `hero-image.jpg`, but this asset was not available, causing inconsistent rendering.
- Service and accessory sections were missing layout styles (`.service-container`, `.product-grid`) for a proper responsive grid.
- Contact interactions were plain text instead of clickable links (`tel:` / `mailto:`).

## Solution Implemented

- Unified CTA styling using `.btn` in CSS.
- Replaced missing image dependency with a gradient hero background.
- Added responsive grid layouts for services and accessories.
- Added clickable phone/email links and safe WhatsApp external link attributes.
- Added active section highlighting in navigation with lightweight JavaScript.

## Run locally

Open `index.html` in a browser.
