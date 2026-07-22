# REEF Trip Dashboard Platform — Midriff Islands deployment — VERSION.md

This is the platform's **second trip deployment**, built during the July 2026 implementation sprint — proof of the "data-swap model" that Bonaire's own `VERSION.md` named as Phase 3 of its roadmap: *"build the second real trip (e.g. Roatán or Solomon Islands) as proof the data-swap model works."* Midriff Islands became that second trip instead, ahead of schedule.

## What did and didn't change from the Bonaire shell

**Unchanged, byte-for-byte in spirit** (copied from `Bonaire/Website Dashboard (Draft)/`):
- `css/styles.css` — identical.
- `js/render.js` — identical, **plus one small backward-compatible addition**: toolkit items can now link to an `externalUrl` (an off-site REEF resource) in addition to the existing local `href` (a file in the trip's own `resources/` folder). Bonaire's data still uses `href` exclusively, so this is additive, not a breaking change — see reasoning below.
- `js/loader.js` — identical.

**Changed on purpose, one line:**
- `js/site-config.js` — `window.ACTIVE_TRIP` set to `"midriff-islands-2026"`.

**New for this trip:**
- `trips/midriff-islands-2026/trip-data.js` — all Midriff-specific content.
- `trips/midriff-islands-2026/resources/` — currently empty (see `README_CONTENT_NEEDED.md` inside it); Midriff doesn't yet have a built fish-ID tool the way Bonaire does.
- `index.html` / `pages/*.html` — reconstructed from the render/loader contract rather than copied byte-for-byte (Bonaire's originals couldn't be retrieved as raw HTML in this session — see `ASSUMPTIONS.md` #5). Functionally identical; flagged for a visual side-by-side check before publishing.

## Why `render.js` grew one small capability

Midriff doesn't have a locally-hosted study tool yet (no Flashcards/Field Guide equivalent), but it does have real, valuable external REEF resources to point to (the TEP Surveyor Toolbox, the TEP Fishinar archive). The original `renderStudyTips`/toolkit-item code only supported linking to a file inside the trip's own `resources/` folder (via `tripResourceUrl`). Rather than fake a local resource file, I added an `externalUrl` + `linkLabel` option to the same toolkit-item shape, checked only if `href` is absent. This is exactly the kind of shell change the platform's own rule anticipates ("if you find yourself needing to edit the shell to add a trip, stop and treat that as a signal the shell has a gap") — this is a real, cross-trip gap (any future trip may want to point to an external resource before it has a built local one), not a Midriff-only special case.

## Known limitations, same posture as Bonaire V1

- No "after the trip" pillar — same as Bonaire, this remains unbuilt platform-wide.
- No participant roster or forms on this site — same policy as Bonaire. (Photos: see 2026-07-22 update below — past-trip photos now appear, this trip's own photos still pending.)
- No detailed hour-by-hour daily dive schedule — Midriff's source materials didn't include one the way Bonaire's did (this is a liveaboard where the crew sets daily sites based on conditions); the itinerary is presented honestly at the island/day level instead of inventing clock times.
- `index.html`/`pages/*.html` reconstructed, not verified against a live render — check visually before publishing (see `MORNING_HANDOFF.md`).
- `assets/reef_logo_*.png` — resolved 2026-07-22, see `assets/README_ASSETS_NEEDED.md`. These were already correct; the earlier flag was stale.
- No Midriff-specific study toolkit yet — see `trips/midriff-islands-2026/resources/README_CONTENT_NEEDED.md`. Deliberately staying on the list for a later session per Martha (2026-07-22).

## Next trip after this one

Per Bonaire's own roadmap, the logical next step is extracting a `trips/_template/` starter package so a third trip doesn't require re-deriving this structure from two examples. That template is built separately in this sprint's `04_Trip_Template/` package — see `MORNING_HANDOFF.md`.

## 2026-07-22 update — "Trip Leader" tab

Added a sixth nav tab, `pages/trip-leader.html`, plus a `renderTripLeader()` function in `js/render.js` (registered in `NAV_ITEMS`/`PAGE_RENDERERS` like every other page — a shell-level change, not a Midriff-only one, per the same reasoning as the `externalUrl` addition above). Each `tripLeaders` entry can now optionally carry `role`, `bio`, `photo`, and `funFact` (e.g. favorite fish) — all optional so existing minimal entries (just name/email/phone) still render fine. Martha's entry now includes her real REEF bio and her favorite fish (Yellowhead Jawfish). The reusable `04_Trip_Template/trips_template_starter/trip-data.template.js` was updated with the same fields so future trips get this tab by default. See `BUILD_LOG.md`'s 2026-07-22 session for full detail.

## 2026-07-22 update — past-trip photos on During-Trip Fun

Added a "Photos from Past Trips to the Sea of Cortez" card to `pages/during-trip-fun.html`, per Martha's request to make the participant page feel more alive. This is a **shell-level addition** (`renderDuringTripFun` in `js/render.js`, plus a new `.photo-grid`/`.photo-credit` block in `css/styles.css`), reading an optional `duringTripFun.pastTripPhotos` object — any future trip can use the same field, not just Midriff.

- 4 real photos hotlinked directly from REEF's own official Flickr account (`flickr.com/photos/reeforg`), each linking back to its source photo page — no images downloaded or copied, no staged/stock photography.
- Links to both full source albums: "2022 Explore Baja Field Survey" (158 photos, same Rocio del Mar liveaboard route) and "2017 Baja REEF Field Survey" (33 photos, same boat, led by Brice and Christy Semmens) — both verified live and public via direct fetch before adding.
- Card copy is explicit that these are past-trip photos, not 2026 Midriff photos, and that this trip's own photos should replace/supplement these once taken.
- The two logo files flagged as missing earlier in the sprint (`assets/reef_logo_color.png`, `assets/reef_logo_white.png`) turned out to already be in place and byte-for-byte correct against Martha's official REEF Brand Kit (added to the connected Dropbox folder the same day) — see `assets/README_ASSETS_NEEDED.md`. Stale flag, no action needed.
- TEP fish-ID toolkit remains deliberately unbuilt — Martha confirmed it stays on the list for a later session.
- **Not done this session:** redeploying to GitHub Pages. These changes are live in the source files in this Dropbox folder but have not been pushed to the `reef-environmental-education-foundation.github.io/reef-midriff-dashboard` repo — no GitHub-write tool is available in this session. Someone with repo access needs to sync this folder's contents to the deployed site (or ask for this in a session with browser/GitHub access) before participants will see the updated page.

---
_Created during the REEF Field Survey Trips Platform implementation sprint, 2026-07-21._
