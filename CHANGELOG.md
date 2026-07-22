# Changelog

## 4.0.0 — Internal GitLab deployment

- Replaced the Google Drive and Apps Script deployment plan with an internal GitLab Pages setup.
- Added an automated GitLab CI/CD pipeline that validates, builds and publishes the application.
- Kept all 26 local documents in the repository and retained the existing RDK link.
- Kept the installable PWA, offline cache, automatic update checks and embedded Google Maps view.
- Added setup and content-maintenance instructions for the GitLab web interface and Web IDE.
- Removed the public GitHub Pages link and public GitHub deployment instructions.

## 2.5.1 — Reliable map update

- Kept the embedded Google Maps view for Wormser Strasse 111, 67590 Monsheim.
- Switched the iframe to the direct Google Maps embed endpoint.
- Added `UPDATE-APP.html` to clear stale PCC Prep Assist caches and reopen the current app version.
- Bumped the application and service-worker cache version so installed apps replace the old decorative map view.

## 2.5.0 — Embedded Google Maps

- Replaced the decorative PCC location graphic with an interactive Google Maps embed.
- Embedded the PCC address at Wormser Strasse 111, 67590 Monsheim.
- Kept the existing external Google Maps button as an alternative.
- Added lazy loading so the third-party map is requested only when needed.
- Added a styled fallback background for unavailable network access.

## 2.4.0 — Clickable document folders

- Replaced the flat document listing with a hierarchical, clickable folder browser.
- Added folders for cobas pro, cobas pure, Leveling and Modification.
- Added nested folders for Exhibition Mode, C503, C703, C703 Adjustment, E801, SB, Preparation, C303 and E402.
- Added a clickable breadcrumb path for returning to parent folders.
- Kept search and filters active within the current folder and all its descendants.
- Updated global search results to open the folder containing the selected document.

## 2.3.0 — Expanded document library

- Added 25 new preparation, leveling, modification, switch-setting and adjustment references.
- Kept the existing cobas pro and cobas pure Exhibition Mode PDFs without adding duplicates.
- Added support for PDF, PNG, JPG, PPTX and external RDK document entries.
- Added document search plus system and category filters.
- Added bilingual document titles and descriptions.
- Kept the two Exhibition Mode PDFs preloaded and changed large additional documents to cache after first opening.
- Added package validation for every local document file.
- Suppressed the service-worker warning when `index.html` is opened directly from the local file system.

## 2.2.0 — ISE and ISE NEO selection

- Replaced the ISE NEO toggle with an exclusive choice between no ISE module, ISE NEO and ISE.
- Added classic ISE exhibition-mode guidance: board PMC2 and setting 6 ON.
- Added SSU SW14 values of 4 for ISE NEO and 2 for classic ISE.
- Added the classic ISE exhibition-mode setting SW14 = 2 to every selected SB.
- Migrated previously stored ISE NEO selections automatically.
- Added automated tests for ISE guidance, migration and system sequence behavior.

## 2.1.1 — Language switch and automatic updates

- Added a persistent German/English language switch for desktop, tablet and mobile layouts.
- Translated static interface content, generated configuration guidance, connector descriptions, assembly content, search, dialogs, status messages and copied summaries.
- Changed the document status wording from `Available offline` to `Offline available`.
- Added `version.json` as a network-only update source.
- Added automatic update checks on startup, app focus, visibility changes, restored connectivity and every 60 seconds while the application is active.
- Added automatic cache replacement and client reload when a new service worker activates.
- Updated the application and offline cache version to 2.1.1.

## 2.0.6 — Original PCC logo

- Replaced the sidebar and mobile-header branding with the user-provided original PCC logo.
- Embedded the header logo directly into `index.html` so it cannot fail because of a missing image path.
- Rebuilt iPhone, Android and PWA home-screen icons from the same original PCC logo.
- Added the exact uploaded source logo as `icons/pcc-logo-original.png`.
- Updated the application and offline-cache version to 2.0.6.

## 2.0.4 — Mobile header and connector labels

- Renamed switch-box connector cards to `SB1` through `SB4`.
- Added a visible PCC Prep Assist identity to the iPhone portrait header.
- Added iOS safe-area spacing so the header no longer overlaps the status bar.
- Enlarged mobile search and theme controls to reliable 44 × 44 px touch targets.
- Replaced the SSU symbol with a clearer sample-supply-unit icon.

## 2.0.0 — 15 July 2026

### Interface

- Rebuilt the interface with a responsive application shell, desktop sidebar and mobile bottom navigation.
- Added light and dark themes with persistent user preference.
- Added animated backgrounds, live status feedback, sequence transitions, card motion and micro-interactions.
- Added a guided configuration workspace for cobas pro and cobas pure.
- Added dedicated pages for connectors, assembly, documents and contact information.
- Replaced the embedded Google Maps iframe with an external map link to reduce third-party loading and improve offline behavior.
- Added a redesigned PWA icon set.

### Functionality

- Added automatic state persistence for module selections.
- Added configuration summary copy support.
- Added quick search and keyboard shortcut support.
- Added online/offline status and installation guidance.
- Added a controlled update banner instead of forced reload loops.

### Logic and reliability

- Fixed AU numbering when empty positions exist between selected modules.
- Expanded C703/C503 ordering validation to evaluate every occurrence.
- Added a warning for internal AU gaps without blocking the configuration.
- Separated business rules from DOM rendering.
- Added automated tests for validation, sequencing, connector mapping, assembly counts and stored-state sanitization.
- Reworked the service worker with separate static/document caches and request-specific strategies.

### Project structure

- Split the former single-file application into `index.html`, `assets/styles.css`, `assets/core.js` and `assets/app.js`.
- Added deployment, offline-use and test documentation.

## 2.0.2 · 2026-07-15

- Fixed the application not initializing when `index.html` is opened directly from the extracted ZIP.
- Replaced the browser ES-module entry with a generated classic JavaScript bundle.
- Added static AU options as a resilient HTML fallback.
- Restored all click, toggle, navigation and selection interactions in local-file mode.
- Removed the owner name from the sidebar footer.
- Updated the offline cache version.

## 2.0.2 · 2026-07-15

- Bundled the complete stylesheet and application script directly into `index.html`.
- Prevented an unstyled page when the ZIP is opened incorrectly, a folder is missing, or an older service worker serves stale asset paths.
- Embedded the large PCC document logo and added intrinsic dimensions so it can never expand across the page before CSS is applied.
- Reworked the service worker to remove old caches immediately and never substitute HTML for CSS, JavaScript, images or PDFs.
- Added a deterministic build step and package verification for the bundled CSS, bundled JavaScript, AU options and removed owner name.
- Changed the downloadable ZIP layout so `index.html` is located directly at the archive root.
