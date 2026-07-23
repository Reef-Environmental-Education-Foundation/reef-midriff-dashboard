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

var NAV_ITEMS = [
  { id: "home", label: "Start Here", href: "index.html" },
  { id: "itinerary", label: "Itinerary", href: "pages/itinerary.html" },
  { id: "pretrip", label: "Pre-Trip Info", href: "pages/pre-trip-info.html" },
  { id: "study", label: "Study Tips", href: "pages/study-tips.html" },
  { id: "fun", label: "During-Trip Fun", href: "pages/during-trip-fun.html" },
  { id: "leader", label: "Trip Leader", href: "pages/trip-leader.html" },
  { id: "reflection", label: "Reflection", href: "pages/reflection.html" }
];

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

  var nav = el("nav", { class: "site-nav" });
  NAV_ITEMS.forEach(function (item) {
    var a = el("a", { href: window.SITE_ROOT + item.href, text: item.label });
    if (item.id === activePageId) {
      a.classList.add("active");
      a.setAttribute("aria-current", "page");
    }
    nav.appendChild(a);
  });

  mount.appendChild(el("div", { class: "site-header-inner" }, [brand, nav]));
}

function renderFooter() {
  var mount = document.getElementById("site-footer");
  if (!mount) return;
  mount.appendChild(el("div", { class: "tagline", text: "Explore. Discover. Make a Difference." }));
  mount.appendChild(el("div", {
    text: "Reef Environmental Education Foundation · P.O. Box 370246, Key Largo, FL 33037 · 305-852-0030 · www.REEF.org · info@REEF.org"
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

function renderList(items) {
  var ul = el("ul");
  items.forEach(function (item) {
    ul.appendChild(el("li", { text: item }));
  });
  return ul;
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
    action: "Get to know your trip leader and start on early paperwork.",
    navId: "pretrip"
  },
  ramping: {
    headline: function (n) { return "Our adventure begins in " + n + " day" + (n === 1 ? "" : "s") + " — now is a good time to start on forms and packing."; },
    action: "Start on your forms and general packing list.",
    navId: "pretrip"
  },
  intensify: {
    headline: function (n) { return "Our adventure begins in " + n + " day" + (n === 1 ? "" : "s") + " — time to get serious about fish ID."; },
    action: "Start your fish ID prep for the trip.",
    navId: "study"
  },
  finalWeek: {
    headline: function (n) { return "Our adventure begins in just " + n + " day" + (n === 1 ? "" : "s") + "!"; },
    action: "Finish packing and read what your first day will feel like.",
    navId: "pretrip"
  },
  during: {
    headline: function () { return "The expedition is happening right now."; },
    action: "Check today's During-Trip Fun for today's discovery.",
    navId: "fun"
  },
  after: {
    headline: function () { return "This expedition has wrapped up — thank you for surveying with REEF."; },
    action: "Visit the Reflection page for a shared send-off and what's next.",
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
      textWrap.appendChild(el("p", { html: "<em>" + (leader.funFact.label || "Fun fact") + ":</em> " + leader.funFact.value }));
    }
    if (leader.whyILead) {
      textWrap.appendChild(el("p", { class: "why-i-lead", text: "“" + leader.whyILead + "”" }));
    }

    if (leader.photo) {
      card.appendChild(el("div", { class: "leader-intro-row" }, [
        el("img", {
          src: window.tripResourceUrl ? window.tripResourceUrl(leader.photo) : leader.photo,
          alt: leader.name,
          class: "leader-photo-thumb"
        }),
        textWrap
      ]));
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
   Added 2026-07-23. A single static Featured Fish is fine for most of
   the pre-trip window, but in the last stretch before a trip —
   ROTATION_WINDOW_DAYS out, which lines up with the "intensify" and
   "finalWeek" countdown stages where copy already shifts toward
   getting serious about fish ID — participants are actually studying,
   so a rotating spotlight pulls more weight. If a trip supplies
   home.featuredFishPool (an array of entries shaped exactly like
   featuredFish — name/blurb/photo), Start Here rotates through it
   once inside that window, changing every ROTATION_CADENCE_DAYS days.
   Outside the window, or if no pool is set, this falls back to the
   single static home.featuredFish untouched — so trips without a pool
   (e.g. Bonaire, at first) need zero changes. The pool should be real,
   REEF-sourced species (e.g. pulled from a Batch/Geographic Area
   Report) — see the Change Log for how Midriff's pool was sourced. */
var ROTATION_WINDOW_DAYS = 30;
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
  var card = el("div", { class: "card about-card" }, [el("h2", { text: "Today's Featured Fish: " + ff.name })]);
  if (ff.photo && ff.photo.src) {
    card.appendChild(el("img", {
      src: window.tripResourceUrl ? window.tripResourceUrl(ff.photo.src) : ff.photo.src,
      alt: ff.photo.alt || ff.name,
      class: "fish-photo-thumb"
    }));
    if (ff.photo.credit) card.appendChild(el("p", { class: "photo-credit", text: "Photo: " + ff.photo.credit }));
  }
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

  if (data.startDate) container.appendChild(renderCountdownCard(data));

  var leaderIntro = renderLeaderIntroCard(data);
  if (leaderIntro) container.appendChild(leaderIntro);

  var featuredFish = renderFeaturedFishCard(data);
  if (featuredFish) container.appendChild(featuredFish);

  var destinationStory = renderDestinationStoryCard(data);
  if (destinationStory) container.appendChild(destinationStory);

  var stage = data.startDate ? computeGuideStage(data) : null;
  var featuredNavId = stage && STAGE_COPY[stage] ? STAGE_COPY[stage].navId : null;

  var tileGrid = el("div", { class: "tile-grid" });
  var tileDefs = [
    { navId: "itinerary", desc: "Day-by-day plan for the week." },
    { navId: "pretrip", desc: "Everything to arrange before you fly: forms, fees, packing, and travel details." },
    { navId: "study", desc: "How to prep your fish ID before you arrive." },
    { navId: "fun", desc: "Fish facts, conversation starters, and a little evening fun — check in whenever." }
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

/* ---------- Pre-Trip Info ---------- */

function renderPreTripInfo(container) {
  var data = window.TRIP_DATA;
  var info = data.preTripInfo || {};

  container.appendChild(el("h1", { class: "page-title", text: "Pre-Trip Info" }));
  container.appendChild(el("p", {
    class: "page-subtitle",
    text: "Everything to sort out before you head to " + data.destination + "."
  }));

  if (info.firstDayVignette) {
    var vignetteParas = Array.isArray(info.firstDayVignette) ? info.firstDayVignette : [info.firstDayVignette];
    var vignetteCard = el("div", { class: "card about-card" }, [el("h2", { text: "What Your First Day Actually Feels Like" })]);
    vignetteParas.forEach(function (p) { vignetteCard.appendChild(el("p", { text: p })); });
    container.appendChild(vignetteCard);
  }

  if (info.priorityList && info.priorityList.length) {
    // Heading generalized 2026-07-23 to drop the specific count ("...Three
    // Things") — this is shell-level text shared by every trip, and a
    // trip's real must-do list isn't always exactly three items long.
    var priorityCard = el("div", { class: "card priority-card" }, [el("h2", { text: "If You Do Nothing Else, Do These Things" })]);
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

  if (data.tripLeaders && data.tripLeaders.length) {
    var leaderCard = el("div", { class: "card" }, [el("h2", { text: "Questions Before You Go?" })]);
    data.tripLeaders.forEach(function (leader) {
      // Email only — no personal cell/WhatsApp numbers on this public,
      // unauthenticated page, even if a trip's data happens to include one.
      // See render.js's renderTripLeader() for the same rule.
      leaderCard.appendChild(el("p", {
        text: leader.name + " — " + leader.email
      }));
    });
    container.appendChild(leaderCard);
  }
}

/* ---------- Study Tips ---------- */

function renderStudyTips(container) {
  var data = window.TRIP_DATA;
  var st = data.studyTips || {};

  container.appendChild(el("h1", { class: "page-title", text: "Study Tips" }));
  container.appendChild(el("p", { class: "page-subtitle", text: "Get ready for " + data.destination + " fish ID." }));

  var introCard = el("div", { class: "card" });
  if (st.intro) introCard.appendChild(el("p", { text: st.intro }));
  if (st.tips && st.tips.length) introCard.appendChild(renderList(st.tips));
  container.appendChild(introCard);

  if (st.toolkit) {
    var toolkitCard = el("div", { class: "card" }, [el("h2", { text: "Your Study Toolkit" })]);
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

  if (st.lookalikes && st.lookalikes.pairs && st.lookalikes.pairs.length) {
    var lookalikeCard = el("div", { class: "card" }, [el("h2", { text: "Lookalikes Worth Knowing Before You Go" })]);
    if (st.lookalikes.intro) lookalikeCard.appendChild(el("p", { text: st.lookalikes.intro }));
    st.lookalikes.pairs.forEach(function (pair) {
      lookalikeCard.appendChild(el("div", { class: "toolkit-item" }, [
        el("h3", { text: pair.names }),
        el("p", { text: pair.note })
      ]));
    });
    container.appendChild(lookalikeCard);
  }

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
      surveyCard.appendChild(el("h3", { text: "Submitting your data" }));
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

/* ---------- During-Trip Fun ---------- */

function currentTripDayIndex(data, totalDays) {
  if (!data.startDate || !totalDays) return 0;
  var start = new Date(data.startDate + "T00:00:00");
  var now = new Date();
  var diffDays = Math.floor((now - start) / 86400000);
  if (diffDays < 0) diffDays = 0;
  if (diffDays > totalDays - 1) diffDays = totalDays - 1;
  return diffDays;
}

function renderDuringTripFun(container) {
  var data = window.TRIP_DATA;
  var fun = data.duringTripFun || {};

  container.appendChild(el("h1", { class: "page-title", text: "During-Trip Fun" }));
  container.appendChild(el("p", { class: "page-subtitle", text: "A few things to notice, wonder about, and enjoy whenever you check in." }));

  if (fun.dailyDiscoveries && fun.dailyDiscoveries.length) {
    var dayIdx = currentTripDayIndex(data, fun.dailyDiscoveries.length);
    var today = fun.dailyDiscoveries[dayIdx];
    var discoveryCard = el("div", { class: "card" }, [
      el("h2", { text: "Fish (or Food) for Thought" })
    ]);
    discoveryCard.appendChild(el("p", { text: "A few things to think about, chat over dinner, or just enjoy on your own — come back and browse whenever it's useful. There's no schedule to keep and nothing to miss." }));
    if (today.photo && today.photo.src) {
      discoveryCard.appendChild(el("img", {
        src: window.tripResourceUrl ? window.tripResourceUrl(today.photo.src) : today.photo.src,
        alt: today.photo.alt || "",
        class: "fish-photo-thumb"
      }));
      if (today.photo.credit) discoveryCard.appendChild(el("p", { class: "photo-credit", text: "Photo: " + today.photo.credit }));
    }
    discoveryCard.appendChild(el("p", { text: today.fact }));
    discoveryCard.appendChild(el("p", { html: "<strong>If you feel like it:</strong> " + today.question }));
    if (today.prompt) {
      discoveryCard.appendChild(el("p", { html: "<strong>One thing to notice today:</strong> " + today.prompt }));
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
  container.appendChild(card);

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
      card.appendChild(el("img", {
        src: window.tripResourceUrl ? window.tripResourceUrl(leader.photo) : leader.photo,
        alt: leader.name,
        style: "max-width:160px;border-radius:10px;float:right;margin:0 0 0.75rem 1rem;"
      }));
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
      var factCard = el("div", { class: "card about-card" }, [
        el("h2", { text: (leader.funFact.label || "Fun fact") + (leaders.length > 1 ? " — " + leader.name : "") })
      ]);
      if (leader.funFact.photo && leader.funFact.photo.src) {
        factCard.appendChild(el("img", {
          src: window.tripResourceUrl ? window.tripResourceUrl(leader.funFact.photo.src) : leader.funFact.photo.src,
          alt: leader.funFact.photo.alt || leader.funFact.value,
          class: "fish-photo-thumb"
        }));
        if (leader.funFact.photo.credit) factCard.appendChild(el("p", { class: "photo-credit", text: "Photo: " + leader.funFact.photo.credit }));
      }
      factCard.appendChild(el("p", { html: "<strong>" + leader.funFact.value + "</strong>" + (leader.funFact.note ? " — " + leader.funFact.note : "") }));
      container.appendChild(factCard);
    }
  });
}

/* ---------- Reflection ----------
   New shared page, added in the 2026-07-22 sprint (Section 9 of the
   approved Experience Review). Category A / shared content only —
   thank-you, non-personal highlights, a conservation note, and an
   invitation back. No participant photos, no "your memories," no
   login — that's the future Personal Participant Dashboard's "My
   Memories" (Category B), not this page. All fields optional so this
   works honestly before a trip has even happened. */

function renderReflection(container) {
  var data = window.TRIP_DATA;
  var r = data.reflection || {};

  container.appendChild(el("h1", { class: "page-title", text: "Reflection" }));
  container.appendChild(el("p", { class: "page-subtitle", text: "A shared send-off, and a look toward what's next." }));

  if (r.thankYou) {
    container.appendChild(el("div", { class: "card" }, [el("p", { text: r.thankYou })]));
  }

  if (r.highlights && r.highlights.length) {
    var highlightsCard = el("div", { class: "card" }, [el("h2", { text: "A Few Highlights" })]);
    highlightsCard.appendChild(renderList(r.highlights));
    container.appendChild(highlightsCard);
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
      (!r.highlights || !r.highlights.length) &&
      (!r.photoAlbums || !r.photoAlbums.length) && !r.dataEntry) {
    container.appendChild(el("div", { class: "card" }, [
      el("p", { class: "empty-note", text: "Reflection content hasn't been added for this trip yet — check back after the expedition." })
    ]));
  }
}

/* ---------- Dispatcher ---------- */

var PAGE_RENDERERS = {
  home: renderHome,
  itinerary: renderItinerary,
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
