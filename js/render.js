/* ============================================================
   Generic page renderer. Builds header/nav/footer and each
   page's body content purely from window.TRIP_DATA (set by
   the active trip's trip-data.js via loader.js). No trip-specific
   strings live in this file — only structure/labels that are
   the same for every trip (page names, section order, etc).

   Shared byte-for-byte across every trip's shell. Do not add
   trip-specific (Midriff-only or Bonaire-only) logic here — if a
   feature needs shell code, it needs to work for every trip. See
   this trip's VERSION.md and the sprint's
   01_Updated_Shared_Shell.md for what changed and why.
   ============================================================ */

// Labels updated 2026-07-23 per the REEF Participant Dashboard Platform PRD
// (governing spec): Study Tips -> Prepare & Study, During-Trip Fun -> Fishy
// Hour (now REEF's official cross-trip term for the daily fish ID
// gathering, not just a Bonaire nickname), Reflection -> Your Impact. Ids,
// hrefs, and file names deliberately left unchanged — those are internal
// wiring (trip-data.js keys, PAGE_RENDERERS keys, file paths) with no
// participant-facing effect, and renaming them would touch every trip's
// data file and every page's bootstrap script for zero visible benefit.
//
// V2 (this file) — REORDERED 2026-07-24 per the Expedition Guide V2 Design
// Review: order now follows the evaluation-before-preparation journey
// (Discovery -> Evaluation -> Preparation -> Expedition -> Reflection) from
// the July 24 Product Definition & UX Architecture doc, instead of the
// original arbitrary build order. Trip Leader moves up (build trust early);
// Trip Details is new, inserted right after Itinerary (evaluation-stage
// content belongs together). Ids/hrefs/file names still untouched — only
// array order changed, plus one new entry.
var NAV_ITEMS = [
  { id: "home", label: "Start Here", href: "index.html" },
  { id: "leader", label: "Trip Leader", href: "pages/trip-leader.html" },
  { id: "itinerary", label: "Itinerary", href: "pages/itinerary.html" },
  { id: "details", label: "Trip Details", href: "pages/trip-details.html" },
  { id: "study", label: "Explore & Prepare", href: "pages/study-tips.html" },
  { id: "pretrip", label: "Pre-Trip Info", href: "pages/pre-trip-info.html" },
  { id: "fun", label: "Fishy Hour", href: "pages/during-trip-fun.html" },
  { id: "reflection", label: "Your Impact", href: "pages/reflection.html" }
];

var MONTH_NAMES = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"];

// Added 2026-07-23 for the shared "Last Updated" footer line (PRD: "Last
// Updated should come from trip metadata"). Reads data.lastUpdated, an
// ISO date string ("YYYY-MM-DD") each trip's data file sets and updates
// whenever its content changes. Not present = nothing rendered.
function formatDisplayDate(isoDate) {
  var parts = isoDate.split("-");
  var y = parseInt(parts[0], 10), m = parseInt(parts[1], 10), d = parseInt(parts[2], 10);
  if (!y || !m || !d) return isoDate;
  return MONTH_NAMES[m - 1] + " " + d + ", " + y;
}

function el(tag, attrs, children) {
  var node = document.createElement(tag);
  attrs = attrs || {};
  Object.keys(attrs).forEach(function (key) {
    if (key === "text") node.textContent = attrs[key];
    else if (key === "html") node.innerHTML = attrs[key];
    else node.setAttribute(key, attrs[key]);
  });
  (children || []).forEach(function (child) {
    if (child) node.appendChild(child);
  });
  return node;
}

function findNavItem(navId) {
  return NAV_ITEMS.filter(function (n) { return n.id === navId; })[0];
}

function renderHeader(activePageId) {
  var data = window.TRIP_DATA;
  var mount = document.getElementById("site-header");
  if (!mount) return;

  var logo = el("img", {
    src: window.SITE_ROOT + "assets/reef_logo_white.png",
    alt: "REEF — Reef Environmental Education Foundation"
  });

  var titleWrap = el("div", {}, [
    el("div", { class: "trip-title", text: data.program + " — " + data.destination }),
    el("div", { class: "trip-dates", text: data.dateRange + " · " + data.location })
  ]);

  var brand = el("a", { href: window.SITE_ROOT + "index.html", class: "brand-lockup", style: "color:#fff;" }, [logo, titleWrap]);

  var nav = el("nav", { class: "site-nav", id: "site-nav" });
  NAV_ITEMS.forEach(function (item) {
    var a = el("a", { href: window.SITE_ROOT + item.href, text: item.label });
    if (item.id === activePageId) {
      a.classList.add("active");
      a.setAttribute("aria-current", "page");
    }
    nav.appendChild(a);
  });

  // Mobile nav toggle — added in the V2 pass (Design Review Section 6.3).
  // Growing from 7 to 8 nav items made the old always-wrapping mobile nav
  // noticeably worse, so below the existing 640px breakpoint the nav now
  // collapses behind this button instead of wrapping to 2-3 lines. Desktop
  // behavior (nav always visible, no button shown) is unchanged — this is
  // pure CSS + one small class toggle, no new dependency.
  var navToggle = el("button", {
    class: "nav-toggle",
    type: "button",
    "aria-expanded": "false",
    "aria-controls": "site-nav",
    text: "Menu ☰"
  });
  navToggle.addEventListener("click", function () {
    var isOpen = nav.classList.toggle("nav-open");
    navToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });

  mount.appendChild(el("div", { class: "site-header-inner" }, [brand, navToggle, nav]));
}

function renderFooter() {
  var data = window.TRIP_DATA;
  var mount = document.getElementById("site-footer");
  if (!mount) return;
  mount.appendChild(el("div", { class: "tagline", text: "Explore. Discover. Make a Difference." }));
  mount.appendChild(el("div", {
    text: "Reef Environmental Education Foundation · P.O. Box 370246, Key Largo, FL 33037 · 305-852-0030 · www.REEF.org · info@REEF.org"
  }));
  // Last Updated + feedback line — added 2026-07-23 per the governing PRD.
  // Both are shell-level and generic: lastUpdated comes from this trip's own
  // data file, and the feedback routing (Trip Leader or trips@REEF.org) is
  // the same for every trip, so neither needs trip-specific code here.
  if (data && data.lastUpdated) {
    mount.appendChild(el("div", { class: "footer-meta", text: "Last updated " + formatDisplayDate(data.lastUpdated) }));
  }
  // Footer routing updated 2026-08-21: this participant site is a pilot, so
  // feedback about the SITE goes to the leader piloting it, while anything
  // about the trip itself (forms, payments, reservations, travel changes)
  // goes to the standing trips@REEF.org inbox. Reusable for any trip — both
  // addresses are constants, not trip-specific.
  mount.appendChild(el("div", {
    class: "footer-meta",
    text: "This participant site is being piloted for REEF Field Survey Trips. Feedback on the site itself is welcome at martha@REEF.org. For trip logistics — forms, payments, reservations, or travel changes — please email trips@REEF.org."
  }));
}

/* ---------- Site-wide banner ----------
   Added 2026-07-23, per request to add a photo "at least on the first
   landing page, perhaps across all pages." Reads an optional
   data.home.bannerImage { src, alt, credit } — src is a path inside the
   trip's own resources/ folder, resolved via tripResourceUrl like every
   other trip resource link. Pure function of TRIP_DATA, rendered once by
   window.initPage on every page (not per-renderer), so every trip and
   every page gets this for free the moment it sets bannerImage — no
   trip-specific code here. No banner set = nothing rendered. */

function renderBanner() {
  var data = window.TRIP_DATA;
  var banner = data && data.home && data.home.bannerImage;
  if (!banner || !banner.src) return null;
  var src = window.tripResourceUrl ? window.tripResourceUrl(banner.src) : banner.src;
  var wrap = el("div", { class: "site-banner" }, [
    el("img", { src: src, alt: banner.alt || "", class: "site-banner-img" })
  ]);
  if (banner.credit) {
    wrap.appendChild(el("p", { class: "photo-credit", text: "Photo: " + banner.credit }));
  }
  return wrap;
}

/* Shared list renderer. Extended 2026-08-23: items may be plain strings OR
   { label, url, note } objects — the same shape renderPreTripInfo's section
   items already accept. Previously string-only, which meant any list built
   with renderList (trip includes/excludes, survey submitting steps, post-trip
   highlights) silently rendered "[object Object]" if a trip tried to put a
   real link in one. Now they can. renderPreTripInfo still carries its own
   copy of this same logic — worth collapsing into this function next time
   that renderer is touched, but left alone here to keep this change additive. */
function renderList(items) {
  var ul = el("ul");
  items.forEach(function (item) {
    if (!item) return;
    if (typeof item === "string") {
      ul.appendChild(el("li", { text: item }));
      return;
    }
    var li = el("li");
    if (item.url) {
      li.appendChild(el("a", { href: item.url, target: "_blank", rel: "noopener", text: item.label }));
      if (item.note) li.appendChild(document.createTextNode(" — " + item.note));
    } else {
      li.textContent = item.label + (item.note ? " — " + item.note : "");
    }
    ul.appendChild(li);
  });
  return ul;
}

/* ---------- Shared credited-photo block ----------
   Added in the V2 pass (Design Review Section 1.4/4): consolidates three
   near-identical inline blocks that already existed separately in
   renderLeaderIntroCard, renderFeaturedFishCard, and renderDuringTripFun —
   same img + optional "Photo: {credit}" caption, same two CSS classes,
   different call sites. One helper now backs all of them plus the new
   Trip Details accommodations photo, so a future fifth call site is a
   one-line addition instead of another copy-pasted block. Pure function of
   a { src, alt, credit } object — sizeClass lets callers keep their
   existing visual sizing (fish-photo-thumb vs. a wider Trip Details photo). */
function renderCreditedPhoto(photo, sizeClass) {
  if (!photo || !photo.src) return null;
  var wrap = el("div", { class: "credited-photo" });
  wrap.appendChild(el("img", {
    src: window.tripResourceUrl ? window.tripResourceUrl(photo.src) : photo.src,
    alt: photo.alt || "",
    class: sizeClass || "fish-photo-thumb"
  }));
  if (photo.credit) wrap.appendChild(el("p", { class: "photo-credit", text: "Photo: " + photo.credit }));
  return wrap;
}

/* ---------- Availability band pill ----------
   Added in the V2 pass (Design Review Sections 1.2, 4, 8) implementing the
   Architecture doc's Section 7 rule: "the public availability-band
   component should be technically incapable of rendering a real count,
   only a computed band." Enforced here at the data layer, not just the
   render layer — this function only ever reads data.tripDetails.
   availabilityBand, a pre-computed string ("open" | "limited" | "waitlist"
   | "full"). The real Registered/Maximum Capacity/Waitlist counts that
   produced that band live in Airtable, not in this public trip-data file,
   so there is no raw number anywhere in this codebase for a well-meaning
   future edit to accidentally expose. */
var AVAILABILITY_BAND_LABELS = {
  open: "Open",
  limited: "Limited Availability",
  waitlist: "Full — Waitlist Open",
  full: "Full"
};

function renderAvailabilityBand(band) {
  if (!band || !AVAILABILITY_BAND_LABELS[band]) return null;
  return el("span", {
    class: "availability-pill availability-" + band,
    text: AVAILABILITY_BAND_LABELS[band]
  });
}

/* ---------- Living Start Here helpers ----------
   Added in the 2026-07-22 "Public Expedition Guide" sprint. Pure
   functions of window.TRIP_DATA + the visitor's clock — no
   trip-specific strings, so every trip gets a countdown, a stage-
   aware "next action," and a featured tile for free. See
   01_Updated_Shared_Shell.md for the full writeup. */

function daysUntil(isoDate) {
  var target = new Date(isoDate + "T00:00:00");
  var now = new Date();
  return Math.ceil((target - now) / 86400000);
}

/* Where "now" sits relative to the trip, per the approved Dynamic
   Content Timeline (120/60/30/7 days out, during, after). Only
   needs startDate/endDate — endDate falls back to startDate so a
   trip missing it still works, just with a one-day "during" window. */
function computeGuideStage(data) {
  if (!data.startDate) return "early";
  var start = new Date(data.startDate + "T00:00:00");
  var end = data.endDate ? new Date(data.endDate + "T23:59:59") : start;
  var now = new Date();
  if (now > end) return "after";
  if (now >= start) return "during";
  var out = daysUntil(data.startDate);
  if (out <= 7) return "finalWeek";
  if (out <= 30) return "intensify";
  if (out <= 60) return "ramping";
  return "early";
}

var STAGE_COPY = {
  // Headlines switched 2026-07-23 from a "cadence unit" count (e.g. "51
  // evening fish ID sessions away") to a plain day count ("Our adventure
  // begins in 51 days"). The unit-based framing read as a mouthful once a
  // trip's cadenceLabel was more than a couple words, and mixing it with a
  // day count elsewhere on the same page felt inconsistent. cadenceLabel
  // stays in the schema (still useful as documentation of a trip's evening
  // tradition name) — it's just no longer read here.
  early: {
    headline: function (n) { return "Our adventure begins in " + n + " day" + (n === 1 ? "" : "s") + " — plenty of time to get ready."; },
    action: "Get to know your trip leader and take a look at the pre-trip checklist.",
    navId: "pretrip"
  },
  ramping: {
    headline: function (n) { return "Our adventure begins in " + n + " day" + (n === 1 ? "" : "s") + " — now is a good time to start on forms and packing."; },
    action: "Start on your forms and general packing list.",
    navId: "pretrip"
  },
  intensify: {
    headline: function (n) { return "Our adventure begins in " + n + " day" + (n === 1 ? "" : "s") + " — a great time to start exploring the fish of the region."; },
    action: "Explore fish ID resources for the Sea of Cortez.",
    navId: "study"
  },
  finalWeek: {
    headline: function (n) { return "Our adventure begins in just " + n + " day" + (n === 1 ? "" : "s") + "!"; },
    action: "Finish packing and read what your first day will feel like.",
    navId: "pretrip"
  },
  during: {
    headline: function () { return "The expedition is happening right now."; },
    action: "Check today's Fishy Hour for today's discovery.",
    navId: "fun"
  },
  after: {
    headline: function () { return "This expedition has wrapped up — thank you for surveying with REEF."; },
    action: "Visit Your Impact to see how your surveys contribute to REEF science.",
    navId: "reflection"
  }
};

function renderCountdownCard(data) {
  var stage = computeGuideStage(data);
  var copy = STAGE_COPY[stage];
  var headline = (stage === "during" || stage === "after") ? copy.headline() : copy.headline(daysUntil(data.startDate));

  var card = el("div", { class: "card countdown-card" }, [el("h2", { text: headline })]);
  card.appendChild(el("p", { text: copy.action }));
  var navItem = findNavItem(copy.navId);
  if (navItem) {
    card.appendChild(el("p", {}, [
      el("a", { class: "resource-link", href: window.SITE_ROOT + navItem.href, text: navItem.label + " →" })
    ]));
  }
  return card;
}

function renderLeaderIntroCard(data) {
  var leaders = data.tripLeaders || [];
  if (!leaders.length) return null;
  var multi = leaders.length > 1;
  var card = el("div", { class: "card" }, [el("h2", { text: multi ? "Your Trip Leaders" : "Your Trip Leader" })]);
  leaders.forEach(function (leader) {
    var textWrap = el("div", { class: "leader-intro-text" });
    var line = leader.name + (leader.role ? " — " + leader.role : "");
    textWrap.appendChild(el("p", { html: "<strong>" + line + "</strong>" }));
    if (leader.funFact && leader.funFact.value) {
      textWrap.appendChild(el("p", { html: "<em>" + (leader.funFact.label || "Favorite Fish in This Region") + ":</em> " + leader.funFact.value }));
    }
    if (leader.whyILead) {
      textWrap.appendChild(el("p", { class: "why-i-lead", text: "“" + leader.whyILead + "”" }));
    }

    if (leader.photo) {
      // Photo credit line added in the V2 pass (Design Review Section 1.4):
      // leader photos are one of the three "photo + caption + attribution"
      // patterns this section calls out for consolidation, but a real,
      // documented credit (e.g. Martha's headshot, credited to Stacey
      // Henderson) was previously only sitting in a trip-data.js code
      // comment and never actually shown to participants — every other
      // photo type on this site (featured fish, daily discovery,
      // accommodations) already displays its credit via
      // renderCreditedPhoto(). This closes that one gap for leader photos
      // too, using the same optional-field pattern (no photoCredit set =
      // nothing rendered, same as before).
      var photoCol = el("div", { class: "leader-photo-col" }, [
        el("img", {
          src: window.tripResourceUrl ? window.tripResourceUrl(leader.photo) : leader.photo,
          alt: leader.name,
          class: "leader-photo-thumb"
        })
      ]);
      if (leader.photoCredit) {
        photoCol.appendChild(el("p", { class: "photo-credit", text: "Photo: " + leader.photoCredit }));
      }
      card.appendChild(el("div", { class: "leader-intro-row" }, [photoCol, textWrap]));
    } else {
      card.appendChild(textWrap);
    }
  });
  var navItem = findNavItem("leader");
  if (navItem) {
    card.appendChild(el("p", {}, [
      el("a", { href: window.SITE_ROOT + navItem.href, text: "Meet your trip leader" + (multi ? "s" : "") + " →" })
    ]));
  }
  return card;
}

/* ---------- Rotating pre-trip Featured Fish ----------
   Added 2026-07-23, window widened to 60 days on 2026-07-23 (v2). A
   single static Featured Fish is fine for most of the pre-trip window,
   but in the last stretch before a trip — ROTATION_WINDOW_DAYS out,
   which now lines up with the "ramping" countdown stage's start (60
   days out is exactly where copy shifts from "plenty of time" to
   "start on forms and packing") through "intensify" and "finalWeek" —
   participants are gradually easing into trip prep, so a rotating
   spotlight pulls more weight than a single static fish for that whole
   stretch. If a trip supplies home.featuredFishPool (an array of
   entries shaped exactly like featuredFish — name/blurb/photo), Start
   Here rotates through it once inside that window, changing every
   ROTATION_CADENCE_DAYS days. Outside the window, or if no pool is
   set, this falls back to the single static home.featuredFish
   untouched — so trips without a pool (e.g. Bonaire, at first) need
   zero changes. The pool should be real, REEF-sourced species (e.g.
   pulled from a Batch/Geographic Area Report) — see the Change Log
   for how Midriff's pool was sourced. */
var ROTATION_WINDOW_DAYS = 60;
var ROTATION_CADENCE_DAYS = 4;

function pickFeaturedFish(data) {
  var home = data.home || {};
  var pool = home.featuredFishPool;
  if (pool && pool.length && data.startDate) {
    var daysOut = daysUntil(data.startDate);
    if (daysOut >= 0 && daysOut <= ROTATION_WINDOW_DAYS) {
      var daysIntoWindow = ROTATION_WINDOW_DAYS - daysOut;
      var idx = Math.floor(daysIntoWindow / ROTATION_CADENCE_DAYS) % pool.length;
      return pool[idx];
    }
  }
  return home.featuredFish;
}

function renderFeaturedFishCard(data) {
  var ff = pickFeaturedFish(data);
  if (!ff || !ff.name) return null;
  var card = el("div", { class: "card about-card" }, [el("h2", { text: (data.home && data.home.featuredFishPool && data.home.featuredFishPool.length ? "Today's Featured Fish: " : "Featured Fish: ") + ff.name })]);
  var ffPhoto = renderCreditedPhoto(ff.photo && { src: ff.photo.src, alt: ff.photo.alt || ff.name, credit: ff.photo.credit });
  if (ffPhoto) card.appendChild(ffPhoto);
  if (ff.blurb) card.appendChild(el("p", { text: ff.blurb }));
  return card;
}

function renderDestinationStoryCard(data) {
  var story = data.home && data.home.destinationStory;
  if (!story || !story.heading) return null;
  var card = el("div", { class: "card" }, [el("h2", { text: story.heading })]);
  var paras = Array.isArray(story.body) ? story.body : (story.body ? [story.body] : []);
  paras.forEach(function (p) { card.appendChild(el("p", { text: p })); });
  return card;
}

/* ---------- Start Here ---------- */

function renderHome(container) {
  var data = window.TRIP_DATA;

  container.appendChild(el("h1", { class: "page-title", text: "Start Here" }));
  container.appendChild(el("p", {
    class: "page-subtitle",
    text: data.program + " · " + data.destination + " · " + data.dateRange
  }));

  if (data.home && data.home.welcomeNote) {
    container.appendChild(el("div", { class: "card" }, [
      el("p", { text: data.home.welcomeNote })
    ]));
  }

  // Card order changed in the V2 pass (Design Review Section 1.2): leader
  // intro now comes before the countdown. The Experience Review's own
  // Emotional Journey Map puts "is this real, is someone actually leading
  // it" ahead of logistics on a first visit — the countdown is a
  // preparedness signal, but trust-in-real-people is the higher-priority
  // one, and code order was previously arbitrary (build order, not journey
  // order).
  var leaderIntro = renderLeaderIntroCard(data);
  if (leaderIntro) container.appendChild(leaderIntro);

  if (data.startDate) container.appendChild(renderCountdownCard(data));

  var featuredFish = renderFeaturedFishCard(data);
  if (featuredFish) container.appendChild(featuredFish);

  var destinationStory = renderDestinationStoryCard(data);
  if (destinationStory) container.appendChild(destinationStory);

  var stage = data.startDate ? computeGuideStage(data) : null;
  var featuredNavId = stage && STAGE_COPY[stage] ? STAGE_COPY[stage].navId : null;

  var tileGrid = el("div", { class: "tile-grid" });
  // "details" tile added in the V2 pass — the one new page this release
  // adds (Design Review Section 1.5). Placed second, right after
  // Itinerary, matching the reordered nav's evaluation-before-preparation
  // sequence.
  var tileDefs = [
    { navId: "itinerary", desc: "Day-by-day plan for the week." },
    { navId: "details", desc: "What's included, what to expect aboard, requirements, and FAQ." },
    { navId: "study", desc: "Fish ID resources for the Sea of Cortez, at whatever pace suits you." },
    { navId: "pretrip", desc: "What to arrange before you fly: forms, packing, and travel details." },
    { navId: "fun", desc: "Fish facts, conversation starters, and a little evening fun." }
  ];
  tileDefs.forEach(function (t) {
    var navItem = findNavItem(t.navId);
    if (!navItem) return;
    tileGrid.appendChild(el("a", {
      class: "tile" + (t.navId === featuredNavId ? " tile-featured" : ""),
      href: window.SITE_ROOT + navItem.href
    }, [
      el("div", { class: "tile-title", text: navItem.label }),
      el("div", { class: "tile-desc", text: t.desc })
    ]));
  });
  container.appendChild(tileGrid);

  if (data.home && data.home.aboutThisResource) {
    var about = data.home.aboutThisResource;
    var aboutCard = el("div", { class: "card about-card" }, [el("h2", { text: about.heading })]);
    var bodyParas = Array.isArray(about.body) ? about.body : [about.body];
    bodyParas.forEach(function (para) { aboutCard.appendChild(el("p", { text: para })); });
    container.appendChild(aboutCard);
  }
}

/* ---------- Itinerary ---------- */

function renderItinerary(container) {
  var data = window.TRIP_DATA;
  var itin = data.itinerary || {};

  container.appendChild(el("h1", { class: "page-title", text: "Itinerary" }));
  container.appendChild(el("p", {
    class: "page-subtitle",
    text: data.program + " · " + data.destination + " · " + data.dateRange
  }));

  if (itin.overview) {
    container.appendChild(el("div", { class: "card" }, [
      el("h2", { text: "The Week at a Glance" }),
      el("p", { text: itin.overview })
    ]));
  }

  if (itin.note) {
    container.appendChild(el("div", { class: "card" }, [el("p", { text: itin.note })]));
  }

  (itin.days || []).forEach(function (day) {
    var block = el("div", { class: "day-block" });
    block.appendChild(el("div", { class: "day-heading" }, [
      document.createTextNode(day.date),
      el("span", { class: "day-tag", text: day.tag ? " — " + day.tag : "" })
    ]));
    var table = el("table", { class: "event-table" });
    (day.events || []).forEach(function (ev) {
      table.appendChild(el("tr", {}, [
        el("td", { class: "time-col", text: ev.time }),
        el("td", { text: ev.desc })
      ]));
    });
    block.appendChild(table);
    container.appendChild(block);
  });
}

/* ---------- Trip Details (new in V2) ----------
   Added per the July 24 Product Definition & UX Architecture doc, Section
   4.2/5.2: the one new top-level page this release adds. Answers
   decision-support questions (accommodations, what's included, requirements
   & suitability, pricing, FAQ) that don't fit the five story-driven pages —
   distinct from Pre-Trip Info, which stays action-oriented ("what do I need
   to DO"), not duplicated with it. Reads data.tripDetails, a new top-level
   trip-data.js section. Every field here is optional so this renders
   honestly even before a trip's data is fully filled in — same convention
   as every other page in this file. */

function renderRequirementChip(status) {
  // Fixed vocabulary, per Architecture doc Section 7 ("small, fixed visual
  // vocabulary... following the small-role-vocabulary principle"). Adapted
  // here to "Required / Recommended / Ask Us" rather than "met / not met"
  // literally: this is a public, unauthenticated page with no participant
  // identity yet, so the system cannot know whether the person reading it
  // personally "meets" a requirement. This vocabulary lets a visitor
  // self-assess against a clear label instead.
  var labels = { required: "Required", recommended: "Recommended", ask: "Ask Us" };
  var label = labels[status] || "Ask Us";
  return el("span", { class: "requirement-chip requirement-" + (labels[status] ? status : "ask"), text: label });
}

function renderTripDetails(container) {
  var data = window.TRIP_DATA;
  var td = data.tripDetails || {};

  container.appendChild(el("h1", { class: "page-title", text: "Trip Details" }));
  // audience === "registered" (added 2026-08-21) switches this page from
  // evaluation mode to readiness mode: no availability pill, no payment
  // schedule, no register/waitlist CTA — the people reading it have already
  // booked and paid. Reusable: any trip whose guide is shared only with
  // registered participants sets tripDetails.audience = "registered".
  var registeredOnly = td.audience === "registered";
  var subtitleRow = el("p", { class: "page-subtitle" }, [
    document.createTextNode(registeredOnly
      ? "What's included, what to expect aboard, and what to have ready."
      : "Pricing, requirements, and what's included. ")
  ]);
  if (!registeredOnly) {
    var band = renderAvailabilityBand(td.availabilityBand);
    if (band) subtitleRow.appendChild(band);
  }
  container.appendChild(subtitleRow);

  if (td.accommodations) {
    var acc = td.accommodations;
    var accCard = el("div", { class: "card" }, [el("h2", { text: acc.heading || "Accommodations" })]);
    var accPhoto = renderCreditedPhoto(acc.photo, "fish-photo-thumb");
    if (accPhoto) accCard.appendChild(accPhoto);
    (Array.isArray(acc.body) ? acc.body : [acc.body]).forEach(function (p) {
      if (p) accCard.appendChild(el("p", { text: p }));
    });
    container.appendChild(accCard);
  }

  if ((td.includes && td.includes.length) || (td.excludes && td.excludes.length)) {
    var incCard = el("div", { class: "card" }, [el("h2", { text: "What's Included / What's Not" })]);
    if (td.includes && td.includes.length) {
      incCard.appendChild(el("h3", { text: "Included" }));
      incCard.appendChild(renderList(td.includes));
    }
    if (td.excludes && td.excludes.length) {
      incCard.appendChild(el("h3", { text: "Not Included / Paid Separately" }));
      incCard.appendChild(renderList(td.excludes));
    }
    container.appendChild(incCard);
  }

  if (td.requirements && td.requirements.length) {
    var reqCard = el("div", { class: "card" }, [el("h2", { text: "Requirements & Is This Trip For Me" })]);
    td.requirements.forEach(function (req) {
      var line = el("div", { class: "requirement-line" }, [
        renderRequirementChip(req.status),
        el("span", { class: "requirement-label", text: req.label })
      ]);
      reqCard.appendChild(line);
      if (req.note) reqCard.appendChild(el("p", { class: "requirement-note", text: req.note }));
    });
    container.appendChild(reqCard);
  }

  if (td.pricing && td.pricing.length) {
    var priceCard = el("div", { class: "card" }, [el("h2", { text: registeredOnly ? "Trip Cost" : "Pricing & Payment Schedule" })]);
    var priceTable = el("table", { class: "event-table" });
    priceTable.appendChild(el("tr", {}, [
      el("td", { class: "time-col", html: "<strong>Item</strong>" }),
      el("td", { html: "<strong>Amount</strong>" })
    ]));
    td.pricing.forEach(function (item) {
      priceTable.appendChild(el("tr", {}, [
        el("td", { class: "time-col", text: item.label }),
        el("td", { text: item.amount })
      ]));
    });
    priceCard.appendChild(priceTable);
    if (!registeredOnly && td.paymentSchedule && td.paymentSchedule.length) {
      priceCard.appendChild(el("h3", { text: "Payment Schedule" }));
      var schedTable = el("table", { class: "event-table" });
      td.paymentSchedule.forEach(function (row) {
        schedTable.appendChild(el("tr", {}, [
          el("td", { class: "time-col", text: row.when }),
          el("td", { text: row.amount })
        ]));
      });
      priceCard.appendChild(schedTable);
    }
    if (td.pricingNote) priceCard.appendChild(el("p", { class: "empty-note", text: td.pricingNote }));
    container.appendChild(priceCard);
  }

  if (td.faq && td.faq.length) {
    var faqCard = el("div", { class: "card" }, [el("h2", { text: "Frequently Asked Questions" })]);
    td.faq.forEach(function (item) {
      faqCard.appendChild(el("details", { class: "joke" }, [
        el("summary", { text: item.q }),
        el("p", { text: item.a })
      ]));
    });
    container.appendChild(faqCard);
  }

  if (!td.accommodations && !td.requirements && !td.pricing && !td.faq) {
    container.appendChild(el("div", { class: "card" }, [
      el("p", { class: "empty-note", text: "Trip Details hasn't been filled in yet for this trip — check back soon, or reach out with any questions." })
    ]));
  }

  // Sticky CTA — new shared component (Design Review Section 4). Honest
  // link, not a fabricated "Register" flow: the Registration Experience
  // (baseline Product Strategy Phase 2) isn't live yet, so this points to
  // REEF's real current contact path rather than implying a connected
  // booking flow that doesn't exist. Label adapts to the availability band
  // so a full trip never invites someone to "Register" for a spot that
  // isn't there.
  if (!registeredOnly) {
    var ctaLabel = (td.availabilityBand === "waitlist" || td.availabilityBand === "full")
      ? "Contact REEF to Join the Waitlist"
      : "Contact REEF to Register";
    container.appendChild(el("div", { class: "sticky-cta" }, [
      el("a", { href: "mailto:trips@REEF.org", class: "resource-link", text: ctaLabel + " →" })
    ]));
  } else {
    container.appendChild(el("div", { class: "card" }, [
      el("p", { html: "Questions about forms, payments, reservations, or travel changes? Email <strong>trips@REEF.org</strong>." })
    ]));
  }
}

/* ---------- Pre-Trip Info ---------- */

function renderPreTripInfo(container) {
  var data = window.TRIP_DATA;
  var info = data.preTripInfo || {};

  container.appendChild(el("h1", { class: "page-title", text: "Pre-Trip Info" }));
  container.appendChild(el("p", {
    class: "page-subtitle",
    text: "What to arrange before you head to " + data.destination + "."
  }));

  if (info.firstDayVignette) {
    var vignetteParas = Array.isArray(info.firstDayVignette) ? info.firstDayVignette : [info.firstDayVignette];
    var vignetteCard = el("div", { class: "card about-card" }, [el("h2", { text: "What Your First Day Looks Like" })]);
    vignetteParas.forEach(function (p) { vignetteCard.appendChild(el("p", { text: p })); });
    container.appendChild(vignetteCard);
  }

  if (info.priorityList && info.priorityList.length) {
    // Heading generalized 2026-07-23 to drop the specific count ("...Three
    // Things") — this is shell-level text shared by every trip, and a
    // trip's real must-do list isn't always exactly three items long.
    var priorityCard = el("div", { class: "card priority-card" }, [el("h2", { text: "Before the Trip" })]);
    var ol = el("ol");
    info.priorityList.forEach(function (item) { ol.appendChild(el("li", { text: item })); });
    priorityCard.appendChild(ol);
    container.appendChild(priorityCard);
  }

  (info.sections || []).forEach(function (section) {
    var card = el("div", { class: "card" }, [el("h2", { text: section.heading })]);

    if (section.intro) card.appendChild(el("p", { text: section.intro }));

    if (section.items && section.items.length) {
      var ul = el("ul");
      section.items.forEach(function (item) {
        if (typeof item === "string") {
          ul.appendChild(el("li", { text: item }));
          return;
        }
        var li = el("li");
        if (item.url) {
          var a = el("a", { href: item.url, target: "_blank", rel: "noopener", text: item.label });
          li.appendChild(a);
          if (item.note) li.appendChild(document.createTextNode(" — " + item.note));
        } else {
          li.textContent = item.label + (item.note ? " — " + item.note : "");
        }
        ul.appendChild(li);
      });
      card.appendChild(ul);
    }
    container.appendChild(card);
  });

  // "Questions Before You Go?" — restructured 2026-07-23 per the governing
  // PRD's shared contact-routing rule: administrative questions (forms,
  // payments, reservations, logistics) go to trips@REEF.org; educational,
  // fish ID, destination, and participant-experience questions go to the
  // trip leader. Shell-level and generic — trips@REEF.org is a constant
  // REEF address, not trip-specific, so every trip gets the same routing
  // for free.
  var contactCard = el("div", { class: "card" }, [el("h2", { text: "Questions Before You Go?" })]);
  contactCard.appendChild(el("p", {
    html: "<strong>Forms, payments, reservations, or other administrative questions:</strong> email <strong>trips@REEF.org</strong>."
  }));
  if (data.tripLeaders && data.tripLeaders.length) {
    var leaderNote = el("p", {
      html: "<strong>Fish ID, " + data.destination + " itself, or what to expect on this trip:</strong> reach out to your trip leader —"
    });
    contactCard.appendChild(leaderNote);
    data.tripLeaders.forEach(function (leader) {
      // Email only — no personal cell/WhatsApp numbers on this public,
      // unauthenticated page, even if a trip's data happens to include one.
      // See render.js's renderTripLeader() for the same rule.
      contactCard.appendChild(el("p", {
        text: leader.name + " — " + leader.email
      }));
    });
  }
  container.appendChild(contactCard);
}

/* ---------- Explore & Prepare (formerly "Prepare & Study") ---------- */

function renderStudyTips(container) {
  var data = window.TRIP_DATA;
  var st = data.studyTips || {};

  container.appendChild(el("h1", { class: "page-title", text: "Explore & Prepare" }));
  container.appendChild(el("p", { class: "page-subtitle", text: "Fish ID resources for " + data.destination + ", at whatever pace suits you." }));

  var introCard = el("div", { class: "card" });
  if (st.intro) introCard.appendChild(el("p", { text: st.intro }));
  if (st.tips && st.tips.length) introCard.appendChild(renderList(st.tips));
  container.appendChild(introCard);

  if (st.toolkit) {
    var toolkitCard = el("div", { class: "card" }, [el("h2", { text: "Your Fish ID Toolkit" })]);
    if (st.toolkit.intro) toolkitCard.appendChild(el("p", { text: st.toolkit.intro }));

    (st.toolkit.items || []).forEach(function (item) {
      var itemBox = el("div", { class: "toolkit-item" }, [
        el("h3", { text: item.title }),
        el("p", { text: item.desc })
      ]);
      if (item.href) {
        itemBox.appendChild(el("a", {
          class: "resource-link",
          href: window.tripResourceUrl(item.href),
          target: "_blank",
          rel: "noopener",
          text: "Open the " + item.title
        }));
      } else if (item.externalUrl) {
        itemBox.appendChild(el("a", {
          class: "resource-link",
          href: item.externalUrl,
          target: "_blank",
          rel: "noopener",
          text: item.linkLabel || ("Open " + item.title)
        }));
      }
      toolkitCard.appendChild(itemBox);
    });
    container.appendChild(toolkitCard);
  }

  // The "Lookalikes" component was removed 2026-08-21 per REEF editorial
  // review: species-comparison and hybridization copy is speculative
  // identification advice and does not belong on a participant page. Do not
  // reintroduce it here or in any trip's data file.

  if (st.surveyBasics) {
    var sb = st.surveyBasics;
    var surveyCard = el("div", { class: "card" }, [el("h2", { text: "How REEF Surveys Work" })]);
    if (sb.intro) surveyCard.appendChild(el("p", { text: sb.intro }));

    (sb.steps || []).forEach(function (step) {
      surveyCard.appendChild(el("div", { class: "toolkit-item" }, [
        el("h3", { text: step.title }),
        el("p", { text: step.desc })
      ]));
    });

    if (sb.abundance && sb.abundance.length) {
      surveyCard.appendChild(el("h3", { text: "Abundance categories" }));
      var abTable = el("table", { class: "event-table" });
      sb.abundance.forEach(function (a) {
        abTable.appendChild(el("tr", {}, [
          el("td", { class: "time-col", text: a.label }),
          el("td", { text: a.range + (a.range === "1" ? " individual" : " individuals") })
        ]));
      });
      surveyCard.appendChild(abTable);
    }

    if (sb.submitting && sb.submitting.length) {
      surveyCard.appendChild(el("h3", { text: "Submitting your surveys" }));
      surveyCard.appendChild(renderList(sb.submitting));
    }

    if (sb.levelsNote) {
      surveyCard.appendChild(el("h3", { text: "Experience Levels" }));
      surveyCard.appendChild(el("p", { text: sb.levelsNote }));
    }

    if (sb.toolboxLink) {
      surveyCard.appendChild(el("p", {}, [
        el("a", { href: sb.toolboxLink.url, target: "_blank", rel: "noopener", text: sb.toolboxLink.label })
      ]));
    }

    container.appendChild(surveyCard);
  }
}

/* ---------- Fishy Hour (formerly "During-Trip Fun") ----------
   Renamed 2026-07-23 per the governing PRD: "Fishy Hour" is now REEF's
   official cross-trip term for the daily fish ID gathering, not a
   Bonaire-only nickname. Function name / dispatcher key left as-is
   (internal wiring only). */

function currentTripDayIndex(data, totalDays) {
  if (!data.startDate || !totalDays) return 0;
  var start = new Date(data.startDate + "T00:00:00");
  var now = new Date();
  var diffDays = Math.floor((now - start) / 86400000);
  if (diffDays < 0) diffDays = 0;
  if (diffDays > totalDays - 1) diffDays = totalDays - 1;
  return diffDays;
}

/* Stage-aware framing for the daily-discovery card — added 2026-08-23.
   currentTripDayIndex() clamps a pre-departure visitor to the first
   discovery, which used to render with onboard framing ("One thing to
   notice today", "…yet?") on a page participants read weeks ahead — it made
   the trip sound as though it were already underway. The copy below is
   generic platform copy keyed off computeGuideStage(), so a pre-trip
   visitor gets a preview, an in-trip visitor gets today's prompt, and a
   post-trip visitor gets a look back. {cadence} is filled from the trip's
   own home.cadenceLabel, so no trip-specific string lives here. */
var DISCOVERY_STAGE_COPY = {
  before: {
    intro: "A preview of the kind of thing we talk over at {cadence} once we are aboard.",
    questionLabel: "Something to think about:",
    promptLabel: "One thing to look for:"
  },
  during: {
    intro: "A few things to think about or chat over dinner.",
    questionLabel: "If you feel like it:",
    promptLabel: "One thing to notice today:"
  },
  after: {
    intro: "A few of the things we talked about during the week, worth another look.",
    questionLabel: "Still worth asking:",
    promptLabel: "One thing to keep noticing:"
  }
};

function renderDuringTripFun(container) {
  var data = window.TRIP_DATA;
  var fun = data.duringTripFun || {};

  container.appendChild(el("h1", { class: "page-title", text: "Fishy Hour" }));
  container.appendChild(el("p", { class: "page-subtitle", text: "Onboard fish ID and conversation. Timing is shared during the trip." }));

  if (fun.dailyDiscoveries && fun.dailyDiscoveries.length) {
    var stage = computeGuideStage(data);
    var stageKey = stage === "during" ? "during" : (stage === "after" ? "after" : "before");
    var stageCopy = DISCOVERY_STAGE_COPY[stageKey];
    var cadence = (data.home && data.home.cadenceLabel) || "Fishy Hour";
    var dayIdx = currentTripDayIndex(data, fun.dailyDiscoveries.length);
    var today = fun.dailyDiscoveries[dayIdx];
    var discoveryCard = el("div", { class: "card" }, [
      el("h2", { text: "Fish (or Food) for Thought" })
    ]);
    discoveryCard.appendChild(el("p", { text: stageCopy.intro.replace("{cadence}", cadence) }));
    var discoveryPhoto = renderCreditedPhoto(today.photo, "fish-photo-thumb");
    if (discoveryPhoto) discoveryCard.appendChild(discoveryPhoto);
    discoveryCard.appendChild(el("p", { text: today.fact }));
    if (today.question) {
      discoveryCard.appendChild(el("p", { html: "<strong>" + stageCopy.questionLabel + "</strong> " + today.question }));
    }
    if (today.prompt) {
      discoveryCard.appendChild(el("p", { html: "<strong>" + stageCopy.promptLabel + "</strong> " + today.prompt }));
    }
    container.appendChild(discoveryCard);
  }

  if (fun.pastTripPhotos && ((fun.pastTripPhotos.photos && fun.pastTripPhotos.photos.length) || (fun.pastTripPhotos.albums && fun.pastTripPhotos.albums.length))) {
    var ptp = fun.pastTripPhotos;
    var photoCard = el("div", { class: "card" }, [el("h2", { text: ptp.heading || "Photos from Past Trips" })]);
    if (ptp.intro) photoCard.appendChild(el("p", { text: ptp.intro }));

    if (ptp.photos && ptp.photos.length) {
      var grid = el("div", { class: "photo-grid" });
      ptp.photos.forEach(function (photo) {
        var link = el("a", { href: photo.sourceUrl || photo.src, target: "_blank", rel: "noopener" }, [
          el("img", { src: photo.src, alt: photo.alt || "" })
        ]);
        grid.appendChild(link);
      });
      photoCard.appendChild(grid);
      photoCard.appendChild(el("p", { class: "photo-credit", text: "Photos: REEF.org / REEF Field Survey Trips Flickr" }));
    }

    if (ptp.albums && ptp.albums.length) {
      var albumList = el("ul");
      ptp.albums.forEach(function (album) {
        var li = el("li");
        li.appendChild(el("a", { href: album.url, target: "_blank", rel: "noopener", text: album.label }));
        if (album.note) li.appendChild(document.createTextNode(" — " + album.note));
        albumList.appendChild(li);
      });
      photoCard.appendChild(albumList);
    }

    container.appendChild(photoCard);
  }

  if (fun.gamesToolkit && fun.gamesToolkit.items && fun.gamesToolkit.items.length) {
    var gt = fun.gamesToolkit;
    var gamesCard = el("div", { class: "card" }, [el("h2", { text: gt.heading || "Fishy Hour Games" })]);
    if (gt.intro) gamesCard.appendChild(el("p", { text: gt.intro }));
    gt.items.forEach(function (item) {
      var itemBox = el("div", { class: "toolkit-item" }, [
        el("h3", { text: item.title }),
        el("p", { text: item.desc })
      ]);
      if (item.href) {
        itemBox.appendChild(el("a", {
          class: "resource-link",
          href: window.tripResourceUrl(item.href),
          target: "_blank",
          rel: "noopener",
          text: "Open the " + item.title
        }));
      } else if (item.externalUrl) {
        itemBox.appendChild(el("a", {
          class: "resource-link",
          href: item.externalUrl,
          target: "_blank",
          rel: "noopener",
          text: item.linkLabel || ("Open " + item.title)
        }));
      }
      gamesCard.appendChild(itemBox);
    });
    container.appendChild(gamesCard);
  }

  // Only appended if it actually has content — a trip with no confirmed
  // evening activities (items: []) and no intro should not render an empty card.
  var card = el("div", { class: "card" });
  if (fun.intro) card.appendChild(el("p", { text: fun.intro }));

  (fun.items || []).forEach(function (item) {
    var itemBox = el("div", { class: "toolkit-item" }, [
      el("h3", { text: item.title }),
      el("p", { text: item.desc })
    ]);
    if (item.href) {
      itemBox.appendChild(el("a", {
        class: "resource-link",
        href: window.tripResourceUrl(item.href),
        target: "_blank",
        rel: "noopener",
        text: "Open the " + item.title
      }));
    } else if (item.externalUrl) {
      itemBox.appendChild(el("a", {
        class: "resource-link",
        href: item.externalUrl,
        target: "_blank",
        rel: "noopener",
        text: item.linkLabel || ("Open " + item.title)
      }));
    }
    card.appendChild(itemBox);
  });
  if (card.childNodes.length) container.appendChild(card);

  // "Did You Know?" — added 2026-08-21. Every entry must carry a `source`
  // string traceable to REEF, the vessel's Know Before You Go document, or
  // another authoritative scientific source; the source is rendered, so an
  // unsourced fact is visibly unsourced. Reusable by any trip.
  if (fun.didYouKnow && fun.didYouKnow.items && fun.didYouKnow.items.length) {
    var dykCard = el("div", { class: "card about-card" }, [
      el("h2", { text: fun.didYouKnow.heading || "Did You Know?" })
    ]);
    if (fun.didYouKnow.intro) dykCard.appendChild(el("p", { text: fun.didYouKnow.intro }));
    fun.didYouKnow.items.forEach(function (item) {
      var box = el("div", { class: "toolkit-item" }, [el("p", { text: item.fact })]);
      if (item.source) box.appendChild(el("p", { class: "photo-credit", text: "Source: " + item.source }));
      dykCard.appendChild(box);
    });
    container.appendChild(dykCard);
  }

  if (fun.jokes && fun.jokes.length) {
    var jokesCard = el("div", { class: "card" }, [el("h2", { text: "Fish Jokes" })]);
    fun.jokes.forEach(function (joke) {
      jokesCard.appendChild(el("details", { class: "joke" }, [
        el("summary", { text: joke.q }),
        el("p", { text: joke.a })
      ]));
    });
    container.appendChild(jokesCard);
  }
}

/* ---------- Trip Leader ---------- */

function renderTripLeader(container) {
  var data = window.TRIP_DATA;
  var leaders = data.tripLeaders || [];

  container.appendChild(el("h1", {
    class: "page-title",
    text: leaders.length > 1 ? "Your Trip Leaders" : "Your Trip Leader"
  }));
  container.appendChild(el("p", {
    class: "page-subtitle",
    text: "The REEF team member leading the " + data.program + " to " + data.destination + "."
  }));

  if (!leaders.length) {
    container.appendChild(el("div", { class: "card" }, [
      el("p", { class: "empty-note", text: "Trip leader details haven't been added yet — check back soon." })
    ]));
    return;
  }

  leaders.forEach(function (leader) {
    var card = el("div", { class: "card" });

    if (leader.photo) {
      // Same photo-credit consolidation as renderLeaderIntroCard above —
      // one shared reason (Design Review Section 1.4), two call sites.
      var photoWrap = el("div", { style: "max-width:160px;float:right;margin:0 0 0.75rem 1rem;" }, [
        el("img", {
          src: window.tripResourceUrl ? window.tripResourceUrl(leader.photo) : leader.photo,
          alt: leader.name,
          style: "width:100%;display:block;border-radius:10px;"
        })
      ]);
      if (leader.photoCredit) {
        photoWrap.appendChild(el("p", { class: "photo-credit", text: "Photo: " + leader.photoCredit }));
      }
      card.appendChild(photoWrap);
    }

    card.appendChild(el("h2", { text: leader.name }));
    if (leader.role) card.appendChild(el("p", { html: "<strong>" + leader.role + "</strong>" }));

    var bioParas = Array.isArray(leader.bio) ? leader.bio : (leader.bio ? [leader.bio] : []);
    bioParas.forEach(function (para) { card.appendChild(el("p", { text: para })); });

    if (leader.whyILead) {
      card.appendChild(el("p", { class: "why-i-lead", text: "“" + leader.whyILead + "”" }));
    }

    // Email only — no personal cell/WhatsApp numbers on this public,
    // unauthenticated page, even if leader.phone happens to be set in a
    // trip's data. See render.js's renderPreTripInfo() for the same rule.
    card.appendChild(el("p", { text: leader.email }));

    container.appendChild(card);

    if (leader.funFact && leader.funFact.value) {
      // Label defaults to "Favorite Fish in This Region" (not a generic "Fun
      // fact") per the governing PRD's shared Trip Leader section rename —
      // every trip should set funFact.label explicitly, but this keeps old
      // data honest if one doesn't.
      var factCard = el("div", { class: "card about-card" }, [
        el("h2", { text: (leader.funFact.label || "Favorite Fish in This Region") + (leaders.length > 1 ? " — " + leader.name : "") })
      ]);
      var funFactPhoto = renderCreditedPhoto(leader.funFact.photo && {
        src: leader.funFact.photo.src,
        alt: leader.funFact.photo.alt || leader.funFact.value,
        credit: leader.funFact.photo.credit
      });
      if (funFactPhoto) factCard.appendChild(funFactPhoto);
      factCard.appendChild(el("p", { html: "<strong>" + leader.funFact.value + "</strong>" + (leader.funFact.note ? " — " + leader.funFact.note : "") }));
      container.appendChild(factCard);
    }

    // "Ask Me About" — added 2026-07-23 per the governing PRD's Trip Leader
    // page spec (Bio, Why I Lead, Favorite Fish in This Region, Ask Me
    // About). Data-driven (leader.askMeAbout, an array of topic strings) so
    // it works for any trip the moment a leader's data includes it; a leader
    // without it (e.g. a co-leader whose profile isn't built out yet) simply
    // doesn't get the card, same pattern as bio/whyILead/funFact above.
    if (leader.askMeAbout && leader.askMeAbout.length) {
      var askCard = el("div", { class: "card" }, [
        el("h2", { text: "Ask Me About" + (leaders.length > 1 ? " — " + leader.name : "") })
      ]);
      askCard.appendChild(renderList(leader.askMeAbout));
      askCard.appendChild(el("p", {
        class: "empty-note",
        text: "For forms, payments, reservations, or other administrative questions, email trips@REEF.org instead."
      }));
      container.appendChild(askCard);
    }
  });
}

/* ---------- Your Impact (formerly "Reflection") ----------
   New shared page, added in the 2026-07-22 sprint (Section 9 of the
   approved Experience Review); renamed 2026-07-23 per the governing PRD,
   which also gives this page a clearer job: explain VFSP, how participant
   observations contribute to science and conservation outcomes, and
   post-trip next steps. Category A / shared content only — thank-you,
   non-personal highlights, a conservation note, and an invitation back. No
   participant photos, no "your memories," no login — that's the future
   Personal Participant Dashboard's "My Memories" (Category B), not this
   page. All fields optional so this works honestly before a trip has even
   happened. */

function renderReflection(container) {
  var data = window.TRIP_DATA;
  var r = data.reflection || {};

  container.appendChild(el("h1", { class: "page-title", text: "Your Impact" }));
  container.appendChild(el("p", { class: "page-subtitle", text: "How your observations become part of REEF science." }));

  if (r.thankYou) {
    container.appendChild(el("div", { class: "card" }, [el("p", { text: r.thankYou })]));
  }

  /* Generic content sections — added 2026-08-23. Any trip can supply
     reflection.sections: [{ heading, body: [ "paragraph", ... ] }] and get
     ordinary cards rendered here, between the opening card and the optional
     post-trip blocks below. Deliberately generic: no trip-specific strings
     live in this file. This exists because "Your Impact" previously had only
     three possible cards (opening, conservationNote, invitation), which is
     too thin for the page — and because everything a trip wants to say about
     how surveys become science is true before the trip as well as after it,
     so it must not be gated behind the post-trip-only fields below.
     body accepts a single string as well as an array. Paragraphs are set as
     html (not text), the same convention as the invitation card below, so a
     section can carry a real <a> link — this content is trusted,
     hand-authored, static trip data, never user input. */
  if (r.sections && r.sections.length) {
    r.sections.forEach(function (section) {
      if (!section) return;
      var body = section.body || [];
      if (typeof body === "string") body = [body];
      if (!section.heading && !body.length) return;
      var sectionCard = el("div", { class: "card" });
      if (section.heading) sectionCard.appendChild(el("h2", { text: section.heading }));
      body.forEach(function (para) {
        if (para) sectionCard.appendChild(el("p", { html: para }));
      });
      container.appendChild(sectionCard);
    });
  }

  if (r.highlights && r.highlights.length) {
    var highlightsCard = el("div", { class: "card" }, [el("h2", { text: "A Few Highlights" })]);
    highlightsCard.appendChild(renderList(r.highlights));
    container.appendChild(highlightsCard);
  }

  // Impact stats — added 2026-07-23 per the PRD's QA rule to "hide optional
  // statistics until verified" (called out specifically for Bonaire species
  // totals, but written generically since any trip could eventually have
  // post-trip numbers). Each entry needs verified:true to render at all —
  // an entered-but-unverified stat (e.g. a species count still being
  // checked against the batch report) stays invisible rather than showing
  // provisional or estimated numbers. No verified entries = nothing renders.
  if (r.impactStats && r.impactStats.length) {
    var verifiedStats = r.impactStats.filter(function (s) { return s.verified; });
    if (verifiedStats.length) {
      var statsCard = el("div", { class: "card about-card" }, [el("h2", { text: "This Trip's Impact, By the Numbers" })]);
      verifiedStats.forEach(function (s) {
        statsCard.appendChild(el("p", { html: "<strong>" + s.value + "</strong> " + s.label }));
      });
      container.appendChild(statsCard);
    }
  }

  // Trip photo albums (Flickr, Google Photos, etc.) — added 2026-07-23.
  // Shell-level and generic: any trip can point here once real photos
  // exist. Rendered as plain links, same pattern as During-Trip Fun's
  // past-trip-photos albums list. Note field is a good place to flag an
  // album as open/collaborative rather than REEF-curated.
  if (r.photoAlbums && r.photoAlbums.length) {
    var albumsCard = el("div", { class: "card" }, [el("h2", { text: "Trip Photos" })]);
    var albumList = el("ul");
    r.photoAlbums.forEach(function (album) {
      var li = el("li");
      li.appendChild(el("a", { href: album.url, target: "_blank", rel: "noopener", text: album.label }));
      if (album.note) li.appendChild(document.createTextNode(" — " + album.note));
      albumList.appendChild(li);
    });
    albumsCard.appendChild(albumList);
    container.appendChild(albumsCard);
  }

  // Post-trip data-entry reminder — added 2026-07-23. Optional structured
  // block: a nudge to submit survey data, an optional time-sensitive
  // deadline note, a link to reef.org/dataentry, and an optional extra
  // resource (e.g. a trip's geographic zone codes file) living in that
  // trip's own resources/ folder. Generic enough for any trip to use once
  // it has actually happened.
  if (r.dataEntry) {
    var de = r.dataEntry;
    var deCard = el("div", { class: "card" }, [el("h2", { text: de.heading || "Enter Your Survey Data" })]);
    if (de.intro) deCard.appendChild(el("p", { text: de.intro }));
    if (de.deadlineNote) deCard.appendChild(el("p", { html: "<strong>" + de.deadlineNote + "</strong>" }));
    if (de.link) {
      deCard.appendChild(el("p", {}, [
        el("a", { href: de.link.url, target: "_blank", rel: "noopener", text: de.link.label })
      ]));
    }
    if (de.extraResource) {
      deCard.appendChild(el("p", {}, [
        el("a", {
          href: window.tripResourceUrl ? window.tripResourceUrl(de.extraResource.href) : de.extraResource.href,
          target: "_blank",
          rel: "noopener",
          text: de.extraResource.label
        })
      ]));
    }
    container.appendChild(deCard);
  }

  if (r.conservationNote) {
    container.appendChild(el("div", { class: "card about-card" }, [
      el("h2", { text: "Why It Matters" }),
      el("p", { text: r.conservationNote })
    ]));
  }

  if (r.invitation) {
    // html (not text): this is trusted, hand-authored static content (same
    // convention as leader bio/funFact lines above), which lets a trip
    // include a real <a> link — e.g. www.REEF.org/trips — rather than a
    // plain-text URL.
    container.appendChild(el("div", { class: "card" }, [
      el("h2", { text: "See You on the Next One?" }),
      el("p", { html: r.invitation })
    ]));
  }

  if (!r.thankYou && !r.conservationNote && !r.invitation &&
      (!r.sections || !r.sections.length) &&
      (!r.highlights || !r.highlights.length) &&
      (!r.photoAlbums || !r.photoAlbums.length) && !r.dataEntry) {
    container.appendChild(el("div", { class: "card" }, [
      el("p", { class: "empty-note", text: "Your Impact content hasn't been added for this trip yet — check back after the expedition." })
    ]));
  }
}

/* ---------- Dispatcher ---------- */

var PAGE_RENDERERS = {
  home: renderHome,
  itinerary: renderItinerary,
  details: renderTripDetails,
  pretrip: renderPreTripInfo,
  study: renderStudyTips,
  fun: renderDuringTripFun,
  leader: renderTripLeader,
  reflection: renderReflection
};

window.initPage = function (pageId) {
  renderHeader(pageId);
  renderFooter();
  var container = document.getElementById("page-content");
  if (!container) return;
  // Clear the static "Loading trip info…" placeholder (and anything from a
  // previous render) before appending real content. This used to be done
  // ad hoc, inconsistently, in each page's inline bootstrap script — some
  // pages cleared it, some didn't, which is why the placeholder text kept
  // showing up above the real page content. Doing it once here, in the one
  // function every page already calls, makes it impossible to forget.
  container.innerHTML = "";
  var banner = renderBanner();
  if (banner) container.appendChild(banner);
  var renderer = PAGE_RENDERERS[pageId];
  if (renderer) renderer(container);
};
