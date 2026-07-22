/* ============================================================
   Generic trip-data loader. Every page includes this after
   site-config.js. It injects a <script> tag for the active
   trip's trip-data.js, then fires "trip-data-ready" on
   window once it's loaded — pages listen for that event
   before rendering. This is the only piece of code that knows
   how to find a trip's data file; page templates never
   reference a trip id directly.

   Reused verbatim from the Bonaire dashboard shell.

   Requires window.SITE_ROOT (set inline per-page, "./" or "../")
   and window.ACTIVE_TRIP (set in site-config.js) to already exist.
   ============================================================ */

(function () {
  if (!window.SITE_ROOT) window.SITE_ROOT = "./";
  if (!window.ACTIVE_TRIP) {
    console.error("loader.js: window.ACTIVE_TRIP is not set. Check site-config.js is loaded first.");
    return;
  }

  var script = document.createElement("script");
  script.src = window.SITE_ROOT + "trips/" + window.ACTIVE_TRIP + "/trip-data.js";
  script.onload = function () {
    if (!window.TRIP_DATA) {
      console.error("loader.js: trip-data.js loaded but window.TRIP_DATA was not set.");
      return;
    }
    window.dispatchEvent(new Event("trip-data-ready"));
  };
  script.onerror = function () {
    console.error("loader.js: failed to load trip data for trip \"" + window.ACTIVE_TRIP + "\".");
  };
  document.head.appendChild(script);
})();

/* Helper other scripts can use to build a URL into the active
   trip's own resource folder (e.g. its copy of the flashcards
   tool or field guide PDF), without hardcoding the trip id. */
window.tripResourceUrl = function (relativePath) {
  return window.SITE_ROOT + "trips/" + window.ACTIVE_TRIP + "/" + relativePath;
};
