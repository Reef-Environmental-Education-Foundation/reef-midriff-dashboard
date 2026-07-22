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
- No participant roster, photos, or forms on this site — same policy as Bonaire.
- No detailed hour-by-hour daily dive schedule — Midriff's source materials didn't include one the way Bonaire's did (this is a liveaboard where the crew sets daily sites based on conditions); the itinerary is presented honestly at the island/day level instead of inventing clock times.
- `index.html`/`pages/*.html` reconstructed, not verified against a live render — check visually before publishing (see `MORNING_HANDOFF.md`).
- `assets/reef_logo_*.png` need to be copied in manually — see `assets/README_ASSETS_NEEDED.md`.
- No Midriff-specific study toolkit yet — see `trips/midriff-islands-2026/resources/README_CONTENT_NEEDED.md`.

## Next trip after this one

Per Bonaire's own roadmap, the logical next step is extracting a `trips/_template/` starter package so a third trip doesn't require re-deriving this structure from two examples. That template is built separately in this sprint's `04_Trip_Template/` package — see `MORNING_HANDOFF.md`.

---
_Created during the REEF Field Survey Trips Platform implementation sprint, 2026-07-21._
