/* ============================================================
   Trip data: Midriff Islands 2026
   REEF Field Survey Trip · Sea of Cortez, Mexico | September 12–19, 2026
   Aboard the Rocio del Mar (Mexico Liveaboards)

   This is the ONLY file with Midriff-specific text. Page shells
   (index.html, pages/*.html) and shared js/css are UNCHANGED
   from the Bonaire deployment — this is the platform's second
   trip, proving the data-swap model per Bonaire VERSION.md's
   Phase 3 roadmap.

   Source documents this was built from:
   - REEF Midriff Islands Field Survey Trip Leader Playbook.docx
   - Stacey Pre-Trip Paperwork email thread, 07.13.26–07.20.26
   - Midriff 2026 - Participant Tracking.xlsx ("Deadlines" tab only —
     no participant names/PII used anywhere in this file)

   CONTENT PLACEHOLDERS — see MORNING_HANDOFF.md for the full list:
   - No standalone TEP fish-ID quick-reference exists yet (flagged
     as an open prep task in the Trip Leader Playbook itself).
     Links point to REEF's real TEP Surveyor Toolbox / Fishinar
     archive instead of a fabricated quick-reference.
   - No 2026 Midriff-specific photos exist yet (trip hasn't happened). As of
     2026-07-22, the During-Trip Fun page now shows a photo teaser + album
     links from REEF's own Flickr, from past trips on this same liveaboard
     route (2022 Explore Baja, 2017 Baja) — real REEF.org-hosted photos, not
     staged. Once the 2026 trip happens, its own photos should replace/
     supplement these.
   - No detailed hour-by-hour daily dive schedule exists yet (unlike
     Bonaire, whose Pre-Trip Info PDF had one) — the Captain sets
     daily sites based on conditions per the Playbook's own
     Operations & Safety Boundaries section, so the itinerary below
     is presented at the island/day level, honestly, not invented
     down to the hour.

   2026-07-23 PRD implementation pass: adopted "Fishy Hour" as the
   official cross-trip term (cadenceLabel + every prior "evening fish
   ID session" mention); replaced Martha's reused Yellowhead Jawfish
   funFact with a Bluespotted Jawfish narrative specific to this
   region (see Change Log for sourcing); added askMeAbout and
   lastUpdated; removed the unverified "bee season" pack note and the
   self-contradictory outlet-adapter recommendation; expanded regional
   lookalikes from one pair to three; softened whale shark language to
   read as seasonal, not guaranteed; trimmed the repeated 1993/Roving
   Diver Technique origin story down to a cross-reference in Prepare &
   Study since Start Here already tells it in full. See the REEF
   Participant Dashboard Platform PRD (governing spec) and this
   project's own implementation summary for the complete list.

   2026-08-09 pass: confirmed the Bluespotted/Yellowhead jawfish naming
   question raised against this file — they are two distinct real species,
   not a naming variant of one (Bluespotted = Opistognathus rosenblatti,
   Gulf of California endemic; Yellowhead = Opistognathus aurifrons,
   Tropical Western Atlantic/Caribbean, Martha's favorite fish in the
   world generally and the correct choice for her Bonaire entry). This
   file's text was already correct from the 07-23 pass. Closed the "no
   confirmed photo" gap by attaching a real credited photo of O.
   rosenblatti from REEF's Media Assets archive (Christy Semmens). See
   TECH_DEBT.md for the new standing process note this prompted: trip
   leader profiles (funFact especially) need a per-trip regional-accuracy
   check, not just a one-time write.
   ============================================================ */

window.TRIP_DATA = {
  tripId: "midriff-islands-2026",
  program: "REEF Field Survey Trip",
  destination: "Midriff Islands, Sea of Cortez",
  location: "Aboard the Rocio del Mar (Mexico Liveaboards)",
  dateRange: "September 12–19, 2026",
  startDate: "2026-09-12",
  endDate: "2026-09-19",
  // Drives the shared footer's "Last updated" line (render.js renderFooter).
  // Update this whenever this file's content changes.
  lastUpdated: "2026-08-09",

  tripLeaders: [
    {
      name: "Martha Klitzkie",
      role: "REEF Co-Executive Director of Strategy and Operations",
      email: "martha@REEF.org",
      // Phone/WhatsApp intentionally removed 2026-07-23 — this is a public,
      // unauthenticated page (viewable via plain view-source), so no
      // personal cell numbers belong here. Email only. See render.js —
      // renderPreTripInfo() and renderTripLeader() no longer render a
      // phone field even if one is present.
      photo: "resources/photos/martha-klitzkie-headshot.jpg",
      // Added 2026-07-24 (V2 pass) — this credit previously sat only in a
      // code comment on this line and was never shown to participants. See
      // render.js renderLeaderIntroCard/renderTripLeader.
      photoCredit: "Stacey Henderson",
      bio: [
        "Martha is REEF's Co-Executive Director of Strategy and Operations. Before joining the REEF staff team in 2011, her passion for teaching people about the oceans grew over ten years of leading residential marine science programs. Her undergraduate degree focused on environmental education, and her master's was in Educational Leadership and Administration.",
        "She's passionate about connecting people with the marine environment and building a sense of community among ocean enthusiasts — and she's enthusiastic about expanding REEF's impact and reach to create a future where healthy oceans thrive. She believes it's the little things that change the world, like how a single fish survey adds up to the world's largest marine sighting database."
      ],
      // funFact replaced 2026-07-23 per the governing PRD — Martha's Midriff
      // favorite fish is the Bluespotted Jawfish (Opistognathus
      // rosenblatti), a Gulf of California endemic, NOT the Yellowhead
      // Jawfish (Opistognathus aurifrons, a Tropical Western Atlantic/
      // Caribbean species) reused from her Bonaire entry — confirmed
      // 2026-08-09 these are two genuinely distinct species, not a naming
      // variant of one. Facts below verified against FishBase, WoRMS, and
      // IUCN (Least Concern, assessed 2007) — see the Change Log for full
      // sourcing.
      // Photo added 2026-08-09, closing the "no confirmed photo" gap noted
      // when this funFact was first written: sourced from REEF's own Media
      // Assets archive (Airtable, REEF Species ID 0084), credited photo of
      // the actual Opistognathus rosenblatti. An unrelated leftover
      // "yellowhead-jawfish.jpg" file was found sitting unused in this same
      // resources/photos/ folder (carried over from the Bonaire template
      // scaffold, never referenced by this file) — flagged for Martha to
      // delete so it doesn't cause future confusion.
      funFact: {
        label: "Favorite Fish in This Region",
        value: "Bluespotted Jawfish",
        note: "found only in the Gulf of California, so this is one of the few trips anywhere you can look for it — watch for one hovering just above its sandy burrow; it drops straight back in the instant it feels threatened.",
        photo: {
          src: "resources/photos/bluespotted-jawfish.jpg",
          alt: "Bluespotted Jawfish (Opistognathus rosenblatti)",
          credit: "Christy Semmens"
        }
      },
      whyILead: "Leading REEF trips combines so many things I care about: exploring remarkable places, connecting with wonderful people, and discovering something new about the underwater world. I love helping people see the ocean in a new way. Whether someone is brand new to fish identification or has surveyed for decades, everyone has something to learn and something to share. My goal is for every participant to leave with new skills, new friends, and a deeper appreciation and understanding of the ocean.",
      // Added 2026-07-23 per the governing PRD's Trip Leader page spec.
      askMeAbout: [
        "Fish ID for anything you spotted on a dive that day",
        "How the Roving Diver Technique and REEF's Experience Levels work",
        "What to expect on a liveaboard trip, if this is your first one",
        "Sea of Cortez / Tropical Eastern Pacific marine life and conservation"
      ]
    }
  ],

  home: {
    welcomeNote: "Welcome to the Midriff Islands! Here's everything for the week in one place — the itinerary, what to sort out before you fly, some fish ID prep for the Sea of Cortez, and a few things to enjoy once we're all aboard, September 12–19.",
    // Cadence label powers the Living Start Here countdown ("N {cadenceLabel}s
    // away"). Updated 2026-07-23 — "Fishy Hour" is now REEF's official
    // cross-trip term for the daily fish ID gathering (governing PRD), so
    // Midriff uses it too rather than the generic "evening fish ID session"
    // this used to say.
    cadenceLabel: "Fishy Hour",
    // Banner photo replaced 2026-07-23 (v2) — Martha felt the original rock-
    // pinnacle banner wasn't inspiring enough. Swapped for a livelier shot:
    // a curious pod of sea lions, sourced from REEF's own species photo
    // library (Fish and Invertebrate Algae Photos/TEP Region Fish Photos/),
    // credited in-file to Christy Semmens — matches the file-naming-is-the-
    // photographer convention Martha confirmed is safe to trust, and ties
    // directly to the "curious sea lion divers" line in destinationStory
    // below.
    bannerImage: {
      src: "resources/photos/midriff-banner.jpg",
      alt: "A curious pod of sea lions in the Sea of Cortez, Midriff Islands region",
      credit: "Christy Semmens"
    },
    // No confirmed Frogfish photo exists yet for this region (see Study
    // Tips/During-Trip Fun gaps below) — left without a photo field rather
    // than attaching an unconfirmed image to a specific species claim.
    featuredFish: {
      name: "Frogfish",
      blurb: "Frogfish are ambush predators that lure prey with a modified fin spine that looks like a tiny fishing rod and bait — and they're masters of camouflage, so they're often sitting in plain sight near sponges and rubble. Slow down and look closely."
    },
    // Rotating pre-trip pool — added 2026-07-23, window widened to 60 days
    // out the same day (v2). Sourced from REEF's own Batch Report for the
    // "Rocio del Mar Baja Field Survey 2019" trip (this exact liveaboard
    // route, TEP region, led by Amy Lee — REEF's reef.org/db/reports/batch),
    // cross-referenced with REEF's own species reference pages
    // (reef.org/species/...) for scientific name and description text
    // where REEF has published one. render.js's pickFeaturedFish() rotates
    // through this list in the last 60 days before the trip (every 4
    // days); outside that window Start Here shows the static Frogfish
    // spotlight above instead. Ordered roughly by how
    // frequently REEF's own group recorded each species (highest first).
    // Five species below have real REEF-written descriptions; the other six
    // have a confirmed photo and credit but REEF hasn't published a written
    // profile for them yet — flagged honestly in their blurb rather than
    // inventing distinctive features not in REEF's own text.
    featuredFishPool: [
      {
        name: "Mexican Hogfish",
        blurb: "Also called the streamer hogfish, for the long, trailing filaments on its dorsal, anal, and tail fins. Look for a yellow bar across the midbody — REEF's own 2019 Sea of Cortez trip recorded this as the single most frequently sighted fish of the week.",
        photo: { src: "resources/photos/mexican-hogfish.jpg", alt: "Mexican Hogfish in the Sea of Cortez", credit: "Beth & Al Brunton" }
      },
      {
        name: "King Angelfish",
        blurb: "Dark blue body with yellow-to-orange markings on the dorsal and anal fins, and a crown of pale blue spots on the forehead — look for the white bar behind the pectoral fin and the bright yellow tail. Often solitary, but sometimes seen in large schools.",
        photo: { src: "resources/photos/king-angelfish.jpg", alt: "King Angelfish in the Sea of Cortez", credit: "Beth & Al Brunton" }
      },
      {
        name: "Leopard Grouper",
        blurb: "REEF doesn't have a written species profile for this one yet, but it was one of the most frequently sighted fish on REEF's own 2019 Sea of Cortez survey trip — keep an eye out and see what you notice.",
        photo: { src: "resources/photos/leopard-grouper.jpg", alt: "Leopard Grouper in the Sea of Cortez", credit: "Dan Grolemund" }
      },
      {
        name: "Scissortail Damselfish",
        blurb: "Greenish brown to gray, lightening toward a pale belly — named for the dark-bordered \"scissortail\" and a small white spot near the rear of the dorsal fin.",
        photo: { src: "resources/photos/scissortail-damselfish.jpg", alt: "Scissortail Damselfish in the Sea of Cortez", credit: "New World Publications" }
      },
      {
        name: "Blue-and-Yellow Chromis",
        blurb: "REEF doesn't have a written species profile for this one yet, but it was a regular sighting on REEF's own 2019 Sea of Cortez survey trip — keep an eye out and see what you notice.",
        photo: { src: "resources/photos/blue-and-yellow-chromis.jpg", alt: "Blue-and-Yellow Chromis in the Sea of Cortez", credit: "Jonathan Laven" }
      },
      {
        name: "Finescale Triggerfish",
        blurb: "REEF doesn't have a written species profile for this one yet, but it was a regular sighting on REEF's own 2019 Sea of Cortez survey trip — keep an eye out and see what you notice.",
        photo: { src: "resources/photos/finescale-triggerfish.jpg", alt: "Finescale Triggerfish in the Sea of Cortez", credit: "Jonathan Laven" }
      },
      {
        name: "Panama Graysby",
        blurb: "REEF doesn't have a written species profile for this one yet, but it was a regular sighting on REEF's own 2019 Sea of Cortez survey trip — keep an eye out and see what you notice.",
        photo: { src: "resources/photos/panama-graysby.jpg", alt: "Panama Graysby in the Sea of Cortez", credit: "John Wolfe" }
      },
      {
        name: "Cortez Damselfish",
        blurb: "REEF doesn't have a written species profile for this one yet, but it was a regular sighting on REEF's own 2019 Sea of Cortez survey trip — keep an eye out and see what you notice.",
        photo: { src: "resources/photos/cortez-damselfish-adult.jpg", alt: "Cortez Damselfish in the Sea of Cortez", credit: "Beth & Al Brunton" }
      },
      {
        name: "Barberfish",
        blurb: "A small silver-and-yellow butterflyfish with a black ring around the snout and a black bar running from the dorsal fin to just above the eye.",
        photo: { src: "resources/photos/barberfish.jpg", alt: "Barberfish in the Sea of Cortez", credit: "Beth & Al Brunton" }
      },
      {
        name: "Cortez Angelfish",
        blurb: "Gray body with two yellow bars across the face — the King Angelfish's closest lookalike in these waters, and the two species even hybridize where their ranges overlap.",
        photo: { src: "resources/photos/cortez-angelfish.jpg", alt: "Cortez Angelfish in the Sea of Cortez", credit: "Beth & Al Brunton" }
      },
      {
        name: "Panamic Sergeant Major",
        blurb: "REEF doesn't have a written species profile for this one yet, but it was a regular sighting on REEF's own 2019 Sea of Cortez survey trip — keep an eye out and see what you notice.",
        photo: { src: "resources/photos/panamic-sergeant-major.jpg", alt: "Panamic Sergeant Major in the Sea of Cortez", credit: "Beth & Al Brunton" }
      }
    ],
    destinationStory: {
      heading: "Why the Midriff Islands Matter",
      body: [
        // Tightened 2026-07-23 (PRD: "tighten Start Here copy") and reworded
        // so whale sharks read as seasonal, not guaranteed — matching the
        // conditional framing already used in the itinerary and Fishy Hour
        // ("optional add-on," "typically offered," "if it happens").
        "This stretch of the Sea of Cortez is home to sea lion colonies, mobula rays that leap clear out of the water, and, seasonally, some of the best whale shark encounters anywhere in the world around Bahía de los Ángeles.",
        "It's also part of REEF's Tropical Eastern Pacific survey region — every fish you log this week joins a dataset that's been tracking reef fish populations for decades, the same one that makes a REEF trip different from an ordinary dive vacation."
      ]
    },
    aboutThisResource: {
      heading: "Before You Dive In",
      body: [
        "Welcome! This page brings together trip information, travel logistics, fish ID resources, and a few other helpful references for our REEF Field Survey Trip to the Midriff Islands. Use whatever's useful to you now, and save the rest — we'll work through plenty of it together during Fishy Hour, conversations, and time on and around the water all week.",
        "This trip is a liveaboard aboard the Rocio del Mar, so a bit more advance planning goes into getting everyone from Phoenix to the boat than on a resort-based trip — the Pre-Trip Info page walks through it step by step.",
        "If you think of something that would make this even more helpful for future trips, we'd love to hear your ideas."
      ]
    }
  },

  itinerary: {
    overview: "This is a liveaboard trip aboard the Rocio del Mar, so the rhythm is a little different from a resort-based trip: we board in Puerto Peñasco the evening of September 12 and spend the week moving between islands in the Midriff region of the Sea of Cortez — Isla Ángel de la Guarda, Isla San Pedro Mártir, Isla Salsipuedes, Isla Las Ánimas, and Bahía de los Ángeles — with 3-4 dives most days. The Captain and crew set the exact daily dive sites based on conditions, so think of the plan below as the shape of the week rather than a fixed hour-by-hour schedule.",
    note: "Because a small liveaboard's schedule depends on weather, currents, and what each island offers that day, the Captain and divemasters make the day-to-day call on sites and timing — that's their expertise, not ours. Martha will keep everyone posted on the plan each morning. Evenings are Fishy Hour, our chance to gather in the salon for a short fish ID session tied to whatever we actually saw that day.",
    days: [
      {
        date: "Saturday, September 12",
        tag: "Boarding Day",
        events: [
          { time: "By 11:00 AM", desc: "Arrive at Phoenix Sky Harbor (PHX) — this buffer matters because the shuttle runs on a tight schedule with a border crossing; there isn't flexibility to delay departure for a late arrival." },
          { time: "1:00 PM", desc: "Head Out to Rocky Point shuttle departs PHX Terminal 4, Door #5 (outer curb, north side arrivals) for the ~4.5-hour drive to Puerto Peñasco, including the border crossing at Lukeville/Sonoyta." },
          { time: "~5:30 PM", desc: "Arrive at Marina Fonatur; board the Rocio del Mar." },
          { time: "~7:00 PM", desc: "Dinner aboard, followed by departure from port and our first-night welcome meeting during the overnight transit." }
        ]
      },
      {
        date: "Sunday, September 13 – Thursday, September 17",
        tag: "Island Days",
        events: [
          { time: "Daily", desc: "3–4 dives a day across the Midriff Islands, exact sites set by the Captain based on conditions — likely stops include Isla Ángel de la Guarda, Isla San Pedro Mártir, Isla Salsipuedes, and Isla Las Ánimas." },
          { time: "Evenings", desc: "Fishy Hour: a short, casual fish ID gathering in the salon based on what the group actually saw that day, plus our recurring traditions (Fish of the Day, Wildlife of the Day, species-count updates — see Fishy Hour)." }
        ]
      },
      {
        date: "Around Day 7 (Friday, September 18)",
        tag: "Bahía de los Ángeles",
        events: [
          { time: "TBD by crew", desc: "An optional whale shark snorkel add-on is typically offered around Bahía de los Ángeles — Martha will share timing and any add-on cost once the crew confirms it onboard." },
          { time: "Evening", desc: "Final-night gathering: a look back at the week's species list, wildlife sightings, and any survey-level testing to celebrate." }
        ]
      },
      {
        date: "Saturday, September 19",
        tag: "Disembarkation Day",
        events: [
          { time: "~7:30 AM", desc: "Return to Marina Fonatur; disembark and board the same shuttle back to Phoenix." },
          { time: "Afternoon", desc: "Arrive back in Phoenix — book your departing flight for 2:00 PM or later out of PHX so you're not rushing off the shuttle." }
        ]
      }
    ]
  },

  preTripInfo: {
    firstDayVignette: [
      "You'll likely be tired by the time you reach Puerto Peñasco — it's an early flight into Phoenix, a few hours on the shuttle with a border crossing in the middle, and then suddenly you're standing at Marina Fonatur looking at the Rocio del Mar.",
      "There's no rush once you're aboard: dinner's waiting around 7:00 PM, and the welcome meeting happens during the overnight transit out of port — so there's nothing to prepare for on the spot. Just settle into your cabin and get your bearings."
    ],
    // Expanded 2026-07-23 — the real must-do list for a Mexico Liveaboards
    // trip is longer than three items (the shared shell heading no longer
    // hardcodes a count; see render.js). Passport photo + New Passenger
    // Registration were already documented under "Forms to Complete Before
    // You Go" below but were missing from this priority callout.
    priorityList: [
      "Complete your REEF Liability Form (Smartwaiver) as soon as you can — REEF can't ship your survey materials until it's done.",
      "Send a close-up photo of your passport's photo/info page to Documents@MexicoLiveaboards.com at least two weeks before departure.",
      "New to Mexico Liveaboards? Complete your New Passenger Registration. Returning guests, use the individual portal link Stacey sent you instead.",
      "Book your Head Out to Rocky Point shuttle and note your transfer info on your Rocio del Mar passenger forms.",
      "Pack your full dive kit — Puerto Peñasco has no fin/mask/wetsuit rentals, so there's no backup plan if you leave gear at home."
    ],
    sections: [
      {
        heading: "Getting to the Boat",
        intro: "The Rocio del Mar departs from Marina Fonatur in Puerto Peñasco, Mexico — about a 4.5-hour drive from Phoenix, Arizona, the closest and most convenient airport (PHX).",
        items: [
          "Plan your arriving flight into PHX for no later than 11:00 AM on September 12 to make the 1:00 PM shuttle.",
          "The shuttle departs PHX Terminal 4, Door #5 (outer curb, north side arrivals) and crosses the U.S.–Mexico border at Lukeville/Sonoyta — the driver handles the crossing process and makes scheduled rest stops along the way.",
          { label: "Book your Head Out to Rocky Point shuttle", url: "https://www.headouttorockypoint.com/scuba", note: "About $175–190 per person, paid directly to the shuttle company. Note your transfer arrangements on your Rocio del Mar passenger forms once booked." },
          "On the return, plan to disembark around 7:30 AM on September 19 and book your departing PHX flight for 2:00 PM or later.",
          "Arriving a different way? Let Martha know so we can plan accordingly."
        ]
      },
      {
        heading: "Forms to Complete Before You Go",
        items: [
          { label: "REEF Liability Form (Smartwaiver)", url: "https://www.smartwaiver.com/w/5508b640d0310/web/", note: "Please complete this as soon as you can — REEF can't ship your survey materials until it's done." },
          { label: "Flight itinerary", note: "Forward your airline itinerary to Noa.Parks@REEF.org, and let us know right away if anything changes." },
          { label: "Passport copy to Mexico Liveaboards", note: "Send a close-up photo of your passport's photo/info page to Valerie at Documents@MexicoLiveaboards.com at least two weeks before departure." },
          { label: "New Passenger Registration (new Mexico Liveaboards guests only)", url: "https://www.mexicoliveaboards.com/ords/f?p=rqpif:1:0", note: "You'll have 4 hours to complete it once you start, or it resets — no travel info yet? You can submit now and add it later." },
          "Returning Mexico Liveaboards guests: use the individual portal link Stacey sent you directly rather than the new-guest form."
        ]
      },
      {
        heading: "What to Expect Onboard",
        items: [
          "Ten cabins aboard the Rocio del Mar, most set up as two twin bunks, a few as queen or full-bed-with-bunk configurations.",
          "Wi-Fi is limited — about $50/device within roughly 10 miles of an island, and unavailable during open-water crossings. Plan on being mostly offline for the week.",
          "Fishy Hour happens each evening in the boat's salon, using the onboard TV/computer station.",
          "Outlets aboard are 110V, standard U.S. plugs.",
          "REEF trip leader role: marine life educator and survey facilitator. The Captain and divemasters own all dive planning, site selection, panga groups, diver supervision and in-water safety decisions."
        ]
      },
      // Added 2026-08-21 at Martha's request. This is the ONLY emergency /
      // contact information published on this public dashboard. The remaining
      // destination-level emergency facts (nearest medical facility, nearest
      // hyperbaric chamber, evacuation plan, embassy/consulate, insurance
      // claims contact) stay in Airtable for the trip-leader binder and are
      // deliberately NOT published here.
      // Personal direct-dial numbers for Valerie and Dora were removed by
      // Martha before publishing — role inboxes only. This matches the
      // no-personal-numbers rule already enforced in render.js
      // (renderTripLeader / renderPreTripInfo).
      // Source: Mexico Liveaboards "Know Before You Go - Midriff Islands /
      // Sea of Cortez", updated 2026-05-01, pp. 2 and 7.
      {
        heading: "Staying in Touch \u2014 and How Family Can Reach You",
        intro: "Plan on being mostly offline for the week. If someone at home needs to reach you, they call the vessel's office \u2014 not your phone.",
        items: [
          { label: "Mexico Liveaboards 24-hour emergency line: +1 (602) 558-9580", note: "Phone or WhatsApp. This is the number family and friends should call. Give it to them before you leave." },
          "The vessel maintains daily radio contact with the Mexico Liveaboards US office, and office staff relay messages to the boat.",
          "Wi-Fi aboard is about $50 per device and only works within roughly 10 miles of an island or at port \u2014 it is unavailable during open-ocean crossings. The office line is the only reliable channel while we are at sea.",
          { label: "Guest services and passenger documents", note: "Documents@MexicoLiveaboards.com" },
          { label: "Mexico Liveaboards office", note: "Dora@MexicoLiveaboards.com" }
        ]
      },
      {
        heading: "Diving Information",
        items: [
          "This is a bring-your-own-gear trip — Puerto Peñasco does not have fin/mask/exposure-suit rentals, so pack your full dive kit.",
          "A 5mm wetsuit plus a hooded vest is recommended for early September water temperatures.",
          "A dive computer, SMB, and whistle are required for every diver.",
          "Islands typically visited include Isla Ángel de la Guarda, Isla San Pedro Mártir, Isla Salsipuedes, Isla Las Ánimas, and Bahía de los Ángeles — exact sites are the crew's call based on conditions."
        ]
      },
      {
        heading: "Survey Materials",
        intro: "REEF mails survey materials to participants ahead of the trip, so please complete your Liability Form as soon as you can.",
        items: [
          "REEF Volunteer Fish Survey Project starter kit or a yellow survey slate with pencil (unless you tell us on your Liability Form you don't need one — first-timers, we recommend the starter kit).",
          "Region-specific underwater survey paper and a laminated color ID card.",
          "A REEF luggage tag and your 2026 Field Survey team t-shirt (let us know your size preference).",
          { label: "REEF online store", url: "http://www.REEF.org/store", note: "For field guides and other gear, if you'd like to bring extra." }
        ]
      },
      {
        heading: "Getting Ready for Fish ID",
        items: [
          { label: "TEP Surveyor Toolbox", url: "https://www.reef.org/reef-surveyor-toolbox#TEP", note: "The best starting point for Sea of Cortez / Tropical Eastern Pacific species." },
          { label: "Archived TEP Fishinars", url: "https://www.reef.org/fishinar-and-fishy-hour-archive-directory", note: "Log in to your REEF account to watch — several are specific to the Sea of Cortez." },
          "REEF's 2010 trip to this region has a batch report on file — a good beginner starting point, and Martha can share it on request. A more recent regional summary isn't available yet."
        ]
      },
      {
        heading: "Don't Forget to Pack",
        items: [
          "Passport with at least 6 months remaining, plus the copy you've already sent ahead.",
          "Dive certification card and dive insurance card (DAN or similar).",
          "Dive computer, SMB, and whistle (all required) — plus your full dive kit, since gear rental isn't available locally.",
          "5mm wetsuit and a hooded vest.",
          // "(it's bee season)" removed 2026-07-23 — unverified and
          // unexplained (no confirmation of what "bee season" means for
          // participants or whether it poses any real risk). Flagged for
          // REEF confirmation before adding back with real detail.
          "Reef-safe sunscreen, a rash guard, and foot coverings for the deck.",
          "Any medications you take, including motion-sickness remedies just in case — and let Martha know ahead of time about anything (like an EpiPen) that needs cool storage.",
          "Camera, housing, and batteries if you're bringing one — pack batteries and memory cards in your carry-on.",
          // Outlet-adapter recommendation removed 2026-07-23 — the boat's
          // outlets are already standard 110V U.S. plugs (see "What to
          // Expect Onboard" above), so a "U.S.-style outlet adapter" was
          // self-contradictory as written. A dry bag stands on its own.
          "A dry bag.",
          "Fish ID resources you like to study from, and your REEF shirt!"
        ]
      }
    ]
  },

  studyTips: {
    intro: "These lists aren't a checklist to complete — think of them like learning your neighbors' names before trying to memorize the phone book. Don't hesitate to look into a fish that isn't mentioned here, either — some of the most memorable discoveries are the unexpected ones. Here's where to spend your prep time:",
    tips: [
      "Learn families before species. Once you can place a fish in its family (angelfish, triggerfish, damselfish, wrasse, blenny, etc.), the rest gets much easier — families share body shape and behavior, so species-level ID is often just color and pattern from there.",
      "Know your lookalikes. The Sea of Cortez's King Angelfish and Cortez Angelfish are a classic pair to watch for — they even hybridize where their ranges overlap, which is exactly why fish ID is about patterns, not perfect labels.",
      "Look low and slow for the small stuff. Blennies, jawfish, seahorses, and frogfish reward patient, careful looking rather than fast swimming — REEF's trip leaders will point these out at Fishy Hour.",
      "Expect variation. Fish look different from different angles and life stages — a photo you studied ahead of time may look a little different head-on or as a juvenile.",
      "Save some for Fishy Hour. Each night we'll gather to talk fish and share the day's favorite finds. No advance prep required — just come curious.",
      "Questions welcome, any time before the trip. Happy to point you in the right direction."
    ],
    toolkit: {
      intro: "A dedicated Sea of Cortez / Tropical Eastern Pacific flashcard set and pocket field guide (like the ones built for our Caribbean trips) haven't been built yet for this region — that's an honest gap, not an oversight, and it's on the list for a future trip. In the meantime, these REEF resources are the best way to prepare:",
      items: [
        {
          title: "TEP Surveyor Toolbox",
          desc: "REEF's survey method, gear list, and regional guide for the Tropical Eastern Pacific — the best entry point for Sea of Cortez fish ID prep.",
          externalUrl: "https://www.reef.org/reef-surveyor-toolbox#TEP",
          linkLabel: "Open the TEP Surveyor Toolbox"
        },
        {
          title: "Archived TEP Fishinars",
          desc: "Recorded sessions covering Sea of Cortez species and survey topics. Log in to your REEF account to watch.",
          externalUrl: "https://www.reef.org/fishinar-and-fishy-hour-archive-directory",
          linkLabel: "Browse the Fishinar archive"
        }
      ]
    },
    // Expanded 2026-07-23 from a single pair to three — PRD review flagged
    // Midriff's regional lookalike/fish-family guidance as thin relative to
    // Bonaire's. All three added here are well-established biology (general
    // wrasse sex-change / angelfish juvenile-coloration patterns, plus the
    // already-documented King/Cortez Angelfish hybridization), not
    // speculative — still worth a REEF science-staff read before publishing.
    lookalikes: {
      intro: "A few pairs worth knowing before you go, so a tricky ID doesn't throw you off:",
      pairs: [
        {
          names: "King Angelfish vs. Cortez Angelfish",
          note: "Close enough relatives that they sometimes hybridize where their ranges overlap — a great early lesson in why fish ID is about patterns, not just field-guide certainty."
        },
        {
          names: "Mexican Hogfish — juvenile/female vs. terminal-phase male",
          note: "Like many wrasses, this species changes color dramatically as it matures and changes sex. The streaming fin filaments and bold yellow midbody bar belong to the terminal-phase male — younger fish and females can look quite different."
        },
        {
          names: "Angelfish — juveniles vs. adults",
          note: "Several angelfish species here look nothing like their adult selves as juveniles, with entirely different color patterns — don't assume a small, unfamiliar-looking fish is a different species from the adult you already know."
        }
      ]
    },
    surveyBasics: {
      intro: "Here's the other half of getting ready: how a REEF survey actually works. No certification or experience needed, just curiosity and a little practice.",
      steps: [
        {
          title: "It's called the Roving Diver Technique",
          desc: "You're a REEF surveyor the moment you start counting. Swim your normal dive — no set path or timed segment — and record every fish species you can positively identify."
        },
        {
          title: "Jot down the metadata too",
          desc: "Site name, date, visibility, current, and habitat. Write it down promptly — memory fades fast once you're back on the boat for the next dive."
        },
        {
          title: "It's the same method everywhere",
          desc: "You'll use the identical Roving Diver Technique REEF surveyors use in all 10 of its regions worldwide, including here in the Sea of Cortez — see Start Here for how the method got its start."
        }
      ],
      abundance: [
        { label: "Single", range: "1" },
        { label: "Few", range: "2–10" },
        { label: "Many", range: "11–100" },
        { label: "Abundant", range: "100+" }
      ],
      submitting: [
        "Online at reef.org/dataentry (needs an internet connection — easiest once you're back on land)",
        "Or the free Offline Data Entry Program — no internet needed on the boat, just sync once you're back online",
        "Either way, you'll need your free REEF member number"
      ],
      levelsNote: "REEF has 5 Experience Levels, based on survey counts and ID tests. Wherever you're starting from, ask Martha if you'd like to test up this week — several returning guests on this trip are already experienced Sea of Cortez surveyors and are happy to help.",
      toolboxLink: {
        label: "REEF Surveyor Toolbox — the full method, gear list, and regional guides",
        url: "https://www.reef.org/reef-surveyor-toolbox#TEP"
      }
    }
  },

  duringTripFun: {
    dailyDiscoveries: [
      {
        fact: "The Sea of Cortez's King Angelfish and Cortez Angelfish are close enough relatives that they sometimes hybridize where their territories overlap — a great early lesson in why fish ID is about patterns, not just field-guide certainty.",
        question: "If you spot an angelfish that doesn't look quite like either species in the book, that might be exactly why."
      },
      {
        // Rewritten 2026-07-23 to name the actual species (Bluespotted
        // Jawfish, Martha's favorite fish in this region — see Trip Leader)
        // instead of a generic, unnamed "jawfish" fact. Sex-linked coloring
        // and burrow behavior verified against FishBase/Wikipedia; the
        // mouthbrooding-by-males detail is well-established for the jawfish
        // family generally but not confirmed species-specifically, hence
        // "believed to" — flag for REEF science-staff confirmation.
        fact: "One to watch for here is the Bluespotted Jawfish, found only in the Gulf of California. Colonies burrow into sandy patches near the reef, and — like related species — males are believed to incubate the eggs in their mouths. The color is a fun twist: the vivid blue spotting is actually more pronounced on females and resting males, while courting males turn strikingly pale as they dash up from the burrow to defend their territory.",
        question: "Has anyone spotted a jawfish hovering just above its burrow yet?",
        prompt: "Approach slowly and stay low — jawfish drop straight back into the sand the instant they feel threatened, so patience is the only way to get a good look."
      },
      {
        fact: "Frogfish are ambush predators that lure prey with a modified fin spine that looks like a tiny fishing rod and bait — and they're masters of camouflage, so they're often sitting in plain sight.",
        question: "Slow down near sponges and rubble — that's prime frogfish habitat."
      },
      {
        fact: "The Sea of Cortez is one of the best places in the world to see mobula rays, which are famous for leaping clear out of the water — nobody's entirely sure why, but theories range from communication to just shaking off parasites.",
        question: "Has anyone seen one breach yet?"
      },
      {
        fact: "Sea lion colonies are common around the Midriff Islands, and young sea lions are famously curious divers — don't be surprised if one comes over to check out your gear rather than the other way around.",
        question: "What's the most curious animal encounter you've had so far this trip?",
        prompt: "If a young sea lion comes over to check out your gear, that's completely normal here — no need to swim away."
      },
      {
        fact: "Bahía de los Ángeles is, seasonally, one of the more reliable places in the world to encounter whale sharks, the largest fish in the ocean — despite their size, they're filter feeders and no threat to snorkelers.",
        question: "If the whale shark snorkel add-on happens this trip, what's the one thing you're hoping to notice up close?"
      },
      {
        fact: "Every survey logged this trip feeds directly into REEF's long-term dataset — the same one that's been tracking reef fish populations, in this case in the Tropical Eastern Pacific, for decades.",
        question: "What's one species you can confidently name now that you couldn't before the trip?"
      },
      {
        fact: "Your data doesn't end when you fly home — once submitted, it joins REEF's long-running Volunteer Fish Survey Project database alongside three decades of sightings from divers just like you.",
        question: "Which fish story from this trip are you most excited to tell people back home?"
      }
    ],
    pastTripPhotos: {
      heading: "Photos from Past Trips to the Sea of Cortez",
      // Rewritten 2026-07-23 to read as participant-facing copy rather than
      // an internal build note ("see VERSION.md" was a leftover reference
      // to this project's own dev documentation, not something a
      // participant should ever see).
      intro: "This will be our first trip together to the Midriff Islands in 2026, so we don't have this year's photos yet — but REEF has sailed this same route aboard the Rocio del Mar before, and these shots give you a real taste of what's waiting for you.",
      photos: [
        {
          src: "https://live.staticflickr.com/65535/52419550335_0e77bf419d_c.jpg",
          sourceUrl: "https://www.flickr.com/photos/reeforg/52419550335/in/album-72177720302805813",
          alt: "REEF's 2022 Explore Baja trip aboard the Rocio del Mar"
        },
        {
          src: "https://live.staticflickr.com/65535/52419113571_383f96d0e4_c.jpg",
          sourceUrl: "https://www.flickr.com/photos/reeforg/52419113571/in/album-72177720302805813",
          alt: "REEF's 2022 Explore Baja trip aboard the Rocio del Mar"
        },
        {
          src: "https://live.staticflickr.com/65535/52419392004_41394e24d0_z.jpg",
          sourceUrl: "https://www.flickr.com/photos/reeforg/52419392004/in/album-72177720302805813",
          alt: "REEF's 2022 Explore Baja trip aboard the Rocio del Mar"
        },
        {
          src: "https://live.staticflickr.com/65535/52419623248_5d7a6a877f_h.jpg",
          sourceUrl: "https://www.flickr.com/photos/reeforg/52419623248/in/album-72177720302805813",
          alt: "REEF's 2022 Explore Baja trip aboard the Rocio del Mar"
        }
      ],
      albums: [
        {
          label: "2022 Explore Baja Field Survey — full album (158 photos)",
          url: "https://flic.kr/s/aHBqjAaHeX",
          note: "Same liveaboard, Midriff Islands to Cabo San Lucas."
        },
        {
          label: "2017 Baja REEF Field Survey — full album (33 photos)",
          url: "https://flic.kr/s/aHsm92KdGh",
          note: "Also aboard the Rocio del Mar, led by Brice and Christy Semmens."
        },
        {
          label: "Read a 2021 Explore Baja trip report",
          url: "https://www.bluewaterdivetravel.com/article/explore-baja-trip-report-2021",
          note: "A third-party account of this same Rocio del Mar route, from Blue Water Dive Travel — jawfish, sea lions, whale sharks, and frogfish all make an appearance."
        }
      ]
    },
    // gamesToolkit: intentionally not added for Midriff — unlike Bonaire,
    // no built Fishy-Hour-style game (Jeopardy, Bingo, etc.) exists yet for
    // this trip. The shell (render.js renderDuringTripFun) already supports
    // this field the moment REEF builds one for the Sea of Cortez/TEP region.
    intro: "A few more things to enjoy whenever you like — recurring traditions from past REEF trips, plus a little evening fun.",
    items: [
      {
        title: "Wildlife of the Day",
        desc: "Sea lions, mobula rays, whales, and — around Bahía de los Ángeles — whale sharks are as much a part of this trip as the fish. Each evening, the group calls out the day's best megafauna sighting alongside the fish list."
      },
      {
        title: "Species-Count Guess & Fish of the Day",
        desc: "On the first night, the group guesses how many total species we'll collectively record by the end of the week — then each evening, everyone names one fish that caught their eye. No printing or downloading needed; we just keep a running tally together."
      }
    ],
    jokes: [
      { q: "What do you call a fish with no eye?", a: "A fsh." },
      { q: "Why don't fish do well in school?", a: "They're always below C-level." },
      { q: "What kind of music do fish avoid?", a: "Anything with too much bass." },
      { q: "Why did the fish blush?", a: "Because it saw the ocean's bottom." },
      { q: "What do you call a fancy fish?", a: "So-fish-ticated." },
      { q: "Why are fish so smart?", a: "Because they live in schools." },
      { q: "What did the ocean say to the beach?", a: "Nothing — it just waved." },
      { q: "Why do fish avoid using computers?", a: "They're afraid of the net." }
    ]
  },

  // Trip Details: NEW section, added 2026-07-24 for the Expedition Guide V2
  // pass, per the Product Definition & UX Architecture doc (Section 4.2/5.2).
  // Every fact below is sourced from the real Airtable Trips/Pricing records
  // and the Midriff Islands Trip Leader Playbook (pulled directly while
  // building this file — not invented). Two honest gaps, flagged rather
  // than guessed, per this project's own "flag, don't guess" convention:
  // (1) no minimum-certification-level fact exists in either source, so the
  // one requirement most participants would ask first is marked "ask us,"
  // not assumed; (2) the vessel's onboard-paid items (park fees, tips) have
  // no confirmed dollar amount yet in Airtable's Pricing table ("Paid
  // onboard and Pricing TBD"), so excludes[] says so honestly instead of
  // inventing a number.
  tripDetails: {
    // availabilityBand is the ONLY availability fact in this public file —
    // deliberately pre-computed, never a raw count. Real source (Airtable
    // Trips, pulled 2026-07-24): Registered Count 20 / Maximum Capacity 20 /
    // Waitlist Count 8 — this trip is genuinely full with a real waitlist
    // today. Update this string by hand when Airtable's numbers change;
    // never add the raw counts themselves to this file (see render.js's
    // renderAvailabilityBand comment for why).
    availabilityBand: "waitlist",
    accommodations: {
      heading: "Aboard the Rocio del Mar",
      body: [
        "This trip is a full-charter liveaboard aboard the Rocio del Mar (Mexico Liveaboards), boarding at Marina Fonatur in Puerto Peñasco the evening of September 12. The charter carries our full REEF group — about 20 people — for the whole week, moving between islands rather than staying at a fixed resort.",
        "Cabin assignments are handled by Mexico Liveaboards as part of your passenger registration; note any rooming preference there rather than on this page."
      ]
    },
    // includes/excludes/requirements[0]/faq updated 2026-07-24 against REEF's
    // own live public listing for this trip (reef.org/events/midriff-island-
    // field-survey-trip, confirmed 2026-07-24) — this closed the one
    // requirement gap the Design Review flagged as unconfirmed (see
    // TECH_DEBT.md, "Required for V2," resolved below) and gave real
    // inclusion detail (meals, beverages, tanks/weights) this file didn't
    // have before.
    includes: [
      "Seven nights double-occupancy accommodation in a cabin aboard the Rocio del Mar, Sept 12–19",
      "All planned dives per the itinerary, led by the vessel's crew",
      "3 daily meals plus snacks; beverages including soda, local beer, and wine",
      "Taxes and port fees",
      "Tanks and weights (80 cubic foot tanks; weights and weight belts)",
      "REEF trip leadership, daily fish ID instruction, and survey facilitation",
      "REEF program fee and standard trip deposit, per your registration"
    ],
    excludes: [
      "Round-trip flights to Phoenix (PHX)",
      "Head Out to Rocky Point shuttle, PHX ↔ Puerto Peñasco (~$175–190/person) — book directly, not through REEF",
      "Marine park fees and gratuities, paid directly aboard the vessel — gratuities are at each participant's discretion",
      "Dive travel insurance — not included; REEF partners with DiveAssure and DAN if you need to purchase a policy",
      "Onboard Wi-Fi ($50/device where available; no signal during open-water crossings)",
      "Optional whale shark snorkel add-on and optional private-divemaster add-on (ask your trip leader for current pricing)",
      "Nitrox, available by request for an additional fee"
    ],
    requirements: [
      { status: "required", label: "Open Water scuba certification (or higher), plus proof of dive insurance", note: "Per REEF's own trip listing: \"Best Suited For: Divers.\" No advanced certification or minimum dive count is specified for this trip — proof of certification and dive insurance are required to dive, same as any REEF Field Survey Trip." },
      { status: "required", label: "Dive computer, safety sausage (SMB), and whistle", note: "Required for every diver — all diving is done from two inflatable zodiacs." },
      { status: "required", label: "Passport valid for international travel", note: "A passport photo page must be sent to Mexico Liveaboards at least 2 weeks before departure." },
      { status: "required", label: "Vessel passenger registration completed online", note: "Required by Mexico Liveaboards, typically due about 30 days before departure; the online form expires after a 4-hour window once started." },
      { status: "recommended", label: "Comfortable with limited connectivity for a full week", note: "Wi-Fi is paid and limited near islands, and unavailable entirely during open-water crossings." },
      { status: "recommended", label: "Comfortable with small-boat transfers and liveaboard living", note: "This is a full-charter liveaboard, not a resort — everyone shares the boat for the whole week." }
    ],
    pricing: [
      { label: "Trip cost (Double Occupancy)", amount: "$3,095 total" },
      { label: "REEF program fee", amount: "$350" },
      { label: "Deposit due at booking", amount: "$500" }
    ],
    paymentSchedule: [
      { when: "At booking", amount: "$500 deposit" },
      { when: "180 days before departure (March 16, 2026)", amount: "$1,298" },
      { when: "90 days before departure (June 14, 2026)", amount: "$1,297" }
    ],
    pricingNote: "Figures above are REEF's own real, current pricing records for this trip. Onboard-paid items (marine park fees, gratuities) are not yet itemized — see What's Not Included.",
    faq: [
      { q: "Is this trip right for a first-time liveaboard traveler?", a: "Many participants on this exact roster are repeat Mexico Liveaboards guests, and REEF's trip leader plans a beginner orientation the first night for anyone new to liveaboard diving or REEF surveying. If you're unsure, reach out before booking." },
      { q: "What if this trip is full?", a: "This trip is currently full, with a real waitlist. Joining the waitlist is the right next step — REEF will reach out if a spot opens." },
      { q: "Can snorkelers join, or is this dive-only?", a: "REEF's own trip listing describes this trip as \"Best Suited For: Divers,\" and diving requires proof of certification and dive insurance — so plan on this being a dive-focused trip. There is a seasonal whale shark snorkel add-on around Bahía de los Ángeles; ask us if you have a specific non-diving question." }
    ]
  },

  // Reflection: new shared, non-personal page added this sprint (Phase 7).
  // Since the 2026 trip hasn't happened yet, this is deliberately written to
  // work honestly pre-trip too — no invented recap or photos. Once the trip
  // happens, add real (non-personal, no participant names/photos) highlights
  // here and consider a past-trip-photos-style teaser for actual 2026 shots.
  reflection: {
    thankYou: "Thank you for signing up to spend a week counting fish with us. Whether you're reading this before you've even packed a bag or looking back at a week that's already behind you, the same thing is true: every survey you log becomes part of something REEF has been building since 1993, one sighting at a time.",
    conservationNote: "Every fish survey logged this week adds to REEF's Volunteer Fish Survey Project (VFSP) — the same long-running database that's helped track real changes in reef fish populations across the Tropical Eastern Pacific for decades. Your data doesn't stop being useful when you fly home; it becomes part of the scientific record for as long as REEF keeps this work going, informing conservation research across the region.",
    invitation: "If this week leaves you wanting more, REEF runs Field Survey Trips to destinations all over the world, every year — ask Martha about what's coming up next, or keep an eye on <a href=\"https://www.REEF.org/trips\" target=\"_blank\" rel=\"noopener\">www.REEF.org/trips</a> for upcoming trips."
    // highlights: intentionally left out — there's nothing genuine to put
    // here before the trip happens. Once it does, add a few real, shared
    // (non-personal) moments — no participant names or photos.
  }
};
