/* ============================================================
   Generic page renderer. Builds header/nav/footer and each
   page's body content purely from window.TRIP_DATA (set by
   the active trip's trip-data.js via loader.js). No trip-specific
   strings live in this file — only structure/labels that are
   the same for every trip (page names, section order, etc).

   Reused verbatim from the Bonaire dashboard shell. Do not add
   Midriff-specific (or any trip-specific) logic here — if a
   feature needs shell code, it needs to work for every trip.
   ============================================================ */

var NAV_ITEMS = [
  { id: "home", label: "Start Here", href: "index.html" },
  { id: "itinerary", label: "Itinerary", href: "pages/itinerary.html" },
  { id: "pretrip", label: "Pre-Trip Info", href: "pages/pre-trip-info.html" },
  { id: "study", label: "Study Tips", href: "pages/study-tips.html" },
  { id: "fun", label: "During-Trip Fun", href: "pages/during-trip-fun.html" }
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

function renderList(items) {
  var ul = el("ul");
  items.forEach(function (item) {
    ul.appendChild(el("li", { text: item }));
  });
  return ul;
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

  var tileGrid = el("div", { class: "tile-grid" });
  var tileDefs = [
    { navId: "itinerary", desc: "Day-by-day plan for the week — islands, dives, and the whale shark snorkel day." },
    { navId: "pretrip", desc: "Everything to arrange before you fly: forms, fees, packing, and travel details." },
    { navId: "study", desc: "How to prep your fish ID before you arrive, including the Sea of Cortez basics." },
    { navId: "fun", desc: "Fish facts, conversation starters, wildlife of the day, and a little evening fun — check in whenever." }
  ];
  tileDefs.forEach(function (t) {
    var navItem = NAV_ITEMS.filter(function (n) { return n.id === t.navId; })[0];
    tileGrid.appendChild(el("a", { class: "tile", href: window.SITE_ROOT + navItem.href }, [
      el("div", { class: "tile-title", text: navItem.label }),
      el("div", { class: "tile-desc", text: t.desc })
    ]));
  });
  container.appendChild(tileGrid);

  if (data.tripLeaders && data.tripLeaders.length) {
    var leaderCard = el("div", { class: "card" }, [el("h2", { text: "Trip Leader" + (data.tripLeaders.length > 1 ? "s" : "") })]);
    data.tripLeaders.forEach(function (leader) {
      leaderCard.appendChild(el("p", {
        text: leader.name + " — " + leader.email + (leader.phone ? " · " + leader.phone : "")
      }));
    });
    container.appendChild(leaderCard);
  }

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
      leaderCard.appendChild(el("p", {
        text: leader.name + " — " + leader.email + (leader.phone ? " · " + leader.phone : "")
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
    discoveryCard.appendChild(el("p", { text: today.fact }));
    discoveryCard.appendChild(el("p", { html: "<strong>If you feel like it:</strong> " + today.question }));
    container.appendChild(discoveryCard);
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

/* ---------- Dispatcher ---------- */

var PAGE_RENDERERS = {
  home: renderHome,
  itinerary: renderItinerary,
  pretrip: renderPreTripInfo,
  study: renderStudyTips,
  fun: renderDuringTripFun
};

window.initPage = function (pageId) {
  renderHeader(pageId);
  renderFooter();
  var container = document.getElementById("page-content");
  var renderer = PAGE_RENDERERS[pageId];
  if (container) container.innerHTML = "";
  if (container && renderer) renderer(container);
};
