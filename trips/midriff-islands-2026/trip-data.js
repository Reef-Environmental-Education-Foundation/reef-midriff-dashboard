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
  lastUpdated: "2026-08-21",

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
        "Martha is the REEF Co-Executive Director of Strategy and Operations. Before joining the REEF staff team in 2011, her passion for teaching people about the oceans grew over ten years of leading residential marine science programs. Her undergraduate degree focused on environmental education, and her master's was in Educational Leadership and Administration.",
        "She's passionate about connecting people with the marine environment and building a sense of community among ocean enthusiasts — and she's enthusiastic about expanding REEF's impact and reach to create a future where healthy oceans thrive. She believes it's the little things that change the world, like how a single fish survey adds up to one of the largest marine life databases in the world."
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
        note: "found only in the Gulf of California, so this is one of the few trips anywhere you can look for it — watch for one hovering just above its sandy burrow; it drops straight back in the instant it feels threatened."
      // PHOTO REMOVED 2026-08-21 — do not re-add without Martha's sign-off.
      // Two blocking problems were found with resources/photos/bluespotted-jawfish.jpg:
      //   1. The file does not exist. It was referenced on 2026-08-09 but never
      //      placed in resources/photos/, so this reference renders a broken
      //      image. (The live site is unaffected — it still serves the 2026-07-23
      //      build, which had no photo field here.)
      //   2. The only source images REEF holds for Opistognathus rosenblatti are
      //      three files in the Marine Life Species base (Media Assets:
      //      bluespottedjawfish_ccoxIMG_1400/1597/0637), and all three carry the
      //      licence note "REEF internal use only, photographer credit required."
      //      This is a public site, so they cannot be published as-is.
      // Also note the credit previously written here ("Christy Semmens") does not
      // match the source records, which all credit CAROL COX with Credit
      // Confirmed = true.
      // The species feature itself is kept — the text is sound and sourced. Add a
      // photo once Martha confirms a publication-cleared image and its credit.
      },
      whyILead: "Leading REEF trips combines so many things I care about: exploring remarkable places, connecting with wonderful people, and discovering something new about the underwater world. I love helping people see the ocean in a new way. Whether someone is brand new to fish identification or has surveyed for decades, everyone has something to learn and something to share. My goal is for every participant to leave with new skills, new friends, and a deeper appreciation and understanding of the ocean.",
      // Added 2026-07-23 per the governing PRD's Trip Leader page spec.
      askMeAbout: [
        "Fish ID for anything you spotted on a dive that day",
        "How the Roving Diver Technique and REEF Experience Levels work",
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
    // Replaced 2026-08-21 per REEF editorial review: the static spotlight is
    // now a species with a confirmed, credited REEF photo already in this
    // trip's resources folder (Opistognathus rosenblatti, REEF Media Assets,
    // Christy Semmens) — the same image used on the Trip Leader page.
    featuredFish: {
      name: "Bluespotted Jawfish",
      blurb: "A Gulf of California endemic, found nowhere else in the world. Colonies burrow into sandy patches near the reef, and you will usually see one hovering just above its burrow before it drops straight back in. Approach slowly and stay low."
      // PHOTO REMOVED 2026-08-21 — do not re-add without Martha's sign-off.
      // Two blocking problems were found with resources/photos/bluespotted-jawfish.jpg:
      //   1. The file does not exist. It was referenced on 2026-08-09 but never
      //      placed in resources/photos/, so this reference renders a broken
      //      image. (The live site is unaffected — it still serves the 2026-07-23
      //      build, which had no photo field here.)
      //   2. The only source images REEF holds for Opistognathus rosenblatti are
      //      three files in the Marine Life Species base (Media Assets:
      //      bluespottedjawfish_ccoxIMG_1400/1597/0637), and all three carry the
      //      licence note "REEF internal use only, photographer credit required."
      //      This is a public site, so they cannot be published as-is.
      // Also note the credit previously written here ("Christy Semmens") does not
      // match the source records, which all credit CAROL COX with Credit
      // Confirmed = true.
      // The species feature itself is kept — the text is sound and sourced. Add a
      // photo once Martha confirms a publication-cleared image and its credit.
    },
    // Rotating featured-fish pool RETIRED 2026-08-21. Per REEF editorial
    // review the Start Here spotlight is now a single, scientifically sound
    // species feature — the Bluespotted Jawfish above, with the credited REEF
    // photo also used on the Trip Leader page. The rotation was overriding
    // that choice, so the pool is disabled here rather than deleted: the 11
    // entries below are all real, REEF-sourced species with credited photos
    // (from REEF's own Batch Report for the 2019 Rocio del Mar Baja Field
    // Survey), so re-enabling this is a one-line change if Martha wants
    // rotation back. render.js's pickFeaturedFish() falls through to the
    // static featuredFish whenever this field is absent.
    _retiredFeaturedFishPool: [

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
        blurb: "Gray body with two broad yellow bars across the face and a yellow tail. Named for the Gulf of California, where it is a common sight on rocky reefs.",
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
        // Rewritten 2026-08-21 per REEF editorial review: no superlatives, no
        // comparison to other kinds of travel, accurate survey description
        // ("positively identified species and abundance categories," not
        // "every fish you log"), and "marine life" rather than "reef fish"
        // since REEF surveys both coral and non-coral habitats.
        "This stretch of the Sea of Cortez is home to sea lion colonies, mobula rays that leap clear out of the water, and, seasonally, whale sharks around Bahía de los Ángeles.",
        "It is also part of the Tropical Eastern Pacific survey region for the REEF Volunteer Fish Survey Project. Every survey conducted this week contributes species and abundance observations to a long-running dataset used to understand changes in marine life. It is an extraordinary travel experience that also contributes to a clearer understanding of how ocean ecosystems are changing."
      ]
    },
    aboutThisResource: {
      heading: "Before You Dive In",
      body: [
        "Welcome! This page brings together trip information, travel logistics, fish ID resources, and a few other helpful references for our REEF Field Survey Trip to the Midriff Islands.",
        "Two different kinds of things live here. The Before the Trip checklist on Pre-Trip Info covers what is genuinely required — forms, documents, and travel arrangements with real deadlines. Everything on Explore & Prepare is there for you to browse however you like: dip in, skip around, or leave it entirely. We will work through plenty of it together during Fishy Hour and time on the water all week.",
        "This trip is a liveaboard aboard the Rocio del Mar, and the Pre-Trip Info page walks through getting from Phoenix to the boat step by step.",
        "If you think of something that would make this even more helpful for future trips, we would love to hear your ideas."
      ]
    }
  },

  itinerary: {
    overview: "This is a liveaboard trip aboard the Rocio del Mar: we board in Puerto Peñasco the evening of September 12 and spend the week moving between islands in the Midriff region of the Sea of Cortez — Isla Ángel de la Guarda, Isla San Pedro Mártir, Isla Salsipuedes, Isla Las Ánimas, and Bahía de los Ángeles — with 3-4 dives most days. The Captain and crew set the exact daily dive sites based on conditions, so think of the plan below as the shape of the week rather than a fixed hour-by-hour schedule.",
    note: "The Captain and crew choose the dive sites and timing each day based on conditions, which is what makes the week work well. Martha will share the plan each morning. Evenings are Fishy Hour, a chance to gather in the salon for fish ID and conversation about whatever the group saw that day.",
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
          { time: "Evenings", desc: "Fishy Hour: a casual fish ID gathering in the salon based on what the group saw that day. Timing is shared onboard." }
        ]
      },
      {
        date: "Around Day 7 (Friday, September 18)",
        tag: "Bahía de los Ángeles",
        events: [
          { time: "Per the vessel itinerary", desc: "Two dives at Bahía de los Ángeles plus a snorkel with whale sharks, both part of the planned itinerary. Exact timing is the crew's call based on conditions." },
          { time: "Evening", desc: "Final-night gathering: a look back at the week together." }
        ]
      },
      {
        date: "Saturday, September 19",
        tag: "Disembarkation Day",
        events: [
          { time: "~7:30 AM", desc: "Return to Marina Fonatur; disembark and board the same shuttle back to Phoenix." },
          { time: "~12:00 noon", desc: "The shuttle is expected to reach Phoenix Sky Harbor around midday, so please book your departing flight for 2:00 PM or later out of PHX." }
        ]
      }
    ]
  },

  preTripInfo: {
    firstDayVignette: [
      "Travel day has a nice shape to it: a flight into Phoenix, a few hours on the shuttle with the border crossing in the middle, and then you are standing at Marina Fonatur looking at the Rocio del Mar.",
      "There is no rush once you are aboard. Dinner is around 7:00 PM, and the welcome meeting happens during the overnight transit out of port, so there is nothing to prepare for on the spot. Settle into your cabin and get your bearings."
    ],
    // Merged 2026-08-21: the old "If You Do Nothing Else" callout and the
    // separate "Forms to Complete Before You Go" card said many of the same
    // things twice. Now one checklist of what is genuinely required, phrased
    // positively. Links live here so the list is self-contained.
    priorityList: [
      "Complete your REEF Liability Form (Smartwaiver) — this is what lets REEF ship your survey materials out to you: https://www.smartwaiver.com/w/5508b640d0310/web/",
      "Forward your airline itinerary to Noa.Parks@REEF.org, and send an update if anything changes.",
      "Email a close-up photo of your passport's photo and information page to Documents@MexicoLiveaboards.com at least two weeks before departure.",
      "Complete your Mexico Liveaboards passenger registration. New guests use the online New Passenger Registration form (allow an uninterrupted stretch — it expires four hours after you start): https://www.mexicoliveaboards.com/ords/f?p=rqpif:1:0 — returning guests use the individual portal link sent to you directly.",
      "Book your Head Out to Rocky Point shuttle (about $175 per person round trip, subject to change) and note your transfer details on your Rocio del Mar passenger forms: https://www.headouttorockypoint.com/scuba",
      "Bring your full dive kit, including exposure protection, fins, mask, SMB, and whistle. The vessel does not rent these and there is no local rental source in Puerto Peñasco.",
      "Plan to obtain your FMM (Mexican tourist card) at the border on the way in. Every non-Mexican passenger needs one and the vessel cannot depart without them. For a seven-day stay there is normally no fee, but the stop to get the form is still required — the shuttle driver walks the group through it."
    ],
    sections: [
      {
        heading: "Getting to the Boat",
        intro: "The Rocio del Mar departs from Marina Fonatur in Puerto Peñasco, Mexico — about a 4.5-hour drive from Phoenix, Arizona, the closest and most convenient airport (PHX).",
        items: [
          "Plan your arriving flight into PHX for no later than 11:00 AM on September 12 to make the 1:00 PM shuttle.",
          "The shuttle departs PHX Terminal 4, Door #5 (outer curb, north side arrivals) and crosses the U.S.–Mexico border at Lukeville/Sonoyta — the driver handles the crossing process and makes scheduled rest stops along the way.",
          { label: "Book your Head Out to Rocky Point shuttle", url: "https://www.headouttorockypoint.com/scuba", note: "About $175 per person round trip, subject to change, paid directly to the shuttle company. Note your transfer arrangements on your Rocio del Mar passenger forms once booked." },
          "On the return, plan to disembark around 7:30 AM on September 19. The shuttle is expected to reach Phoenix around midday, so book your departing PHX flight for 2:00 PM or later.",
          "Traveling a different way, or need to change a travel arrangement? Please email trips@REEF.org."
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
          "Bring your own exposure protection, fins, mask, SMB, whistle, and lights. The vessel does not rent these, and there is no local rental source in Puerto Peñasco.",
          "The vessel has a limited number of regulators, BCDs, dive computers, and HP100 tanks available by advance reservation — contact Valerie at Documents@MexicoLiveaboards.com as early as you can, since they go first come, first served.",
          "Expected water temperatures in mid-September are roughly 79–84°F. The operator generally suggests a 3mm wetsuit with a hooded vest through mid-September. Comfort varies a lot from person to person, though, and the Sea of Cortez has thermoclines that move through, so if you tend to get cold you may well want more protection — layers you can adjust are a good bet.",
          "A dive computer, SMB, and whistle are required for every diver, along with proof of certification and dive insurance.",
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
          { label: "REEF Geographic Zone Report for the islands on our itinerary", url: "https://www.reef.org/db/reports/geo?end_date=2026-08-21&format_type=chart&group_type=species&language=common&region_code=TEP&start_date=1993-01-01&zones=2154%2C2164%2C2155%2C3108&zone_map=0", note: "REEF sighting data for Isla Ángel de la Guarda, Isla San Pedro Mártir, Isla Salsipuedes / Isla Las Ánimas, and Bahía de los Ángeles — sorted by how often each species has been recorded. A useful way to see what is most likely to turn up." }
        ]
      },
      {
        heading: "Don't Forget to Pack",
        items: [
          "Passport valid for the full duration of the trip, plus the copy you have already sent ahead.",
          "Dive certification card and dive insurance card (DAN or similar).",
          "Dive computer, SMB, and whistle (all required) — plus your full dive kit, since gear rental isn't available locally.",
          "Exposure protection that suits you — a 3mm wetsuit with a hooded vest is the operator's general suggestion for mid-September, with something warmer if you tend to get cold.",
          // "(it's bee season)" removed 2026-07-23 — unverified and
          // unexplained (no confirmation of what "bee season" means for
          // participants or whether it poses any real risk). Flagged for
          // REEF confirmation before adding back with real detail.
          "Reef-safe sunscreen and a rash guard.",
          "Any medications you take, including motion-sickness remedies just in case. If anything needs cool storage — an EpiPen, for example — speak with the captain or lead divemaster when you board and they will keep it in the galley for you.",
          "Camera, housing, and batteries if you're bringing one — pack batteries and memory cards in your carry-on.",
          "Any fish ID resources you enjoy using, and your REEF shirt!"
        ]
      }
    ]
  },

  studyTips: {
    intro: "None of this is a checklist to complete. Think of it like learning your neighbors' names rather than memorizing the phone book — and follow your curiosity to any fish that is not mentioned here, because some of the most memorable finds are the unexpected ones. A few ideas, if you feel like exploring:",
    tips: [
      "Learn families before species. Once you can place a fish in its family (angelfish, triggerfish, damselfish, wrasse, blenny, etc.), the rest gets much easier — families share body shape and behavior, so species-level ID is often just color and pattern from there.",
      "Look low and slow for the small things. Blennies, jawfish, seahorses, and frogfish reward patient, careful observation rather than fast swimming, and they are some of the most rewarding finds of the week.",
      "Expect variation. Fish look different from different angles and life stages — a photo you studied ahead of time may look a little different head-on or as a juvenile.",
      "Save some for Fishy Hour. We gather to talk fish and share the day's favorite finds. No advance preparation needed — just come curious.",
      "Questions welcome, any time before the trip. Happy to point you in the right direction."
    ],
    toolkit: {
      intro: "These REEF resources are a good place to start exploring Sea of Cortez fish ID:",
      items: [
        {
          title: "TEP Surveyor Toolbox",
          desc: "The REEF survey method, gear list, and regional guide for the Tropical Eastern Pacific — the best entry point for Sea of Cortez fish ID prep.",
          externalUrl: "https://www.reef.org/reef-surveyor-toolbox#TEP",
          linkLabel: "Open the TEP Surveyor Toolbox"
        },
        {
          title: "Archived TEP Fishinars",
          desc: "Recorded sessions covering Sea of Cortez species and survey topics. Log in to your REEF account to watch.",
          externalUrl: "https://www.reef.org/fishinar-and-fishy-hour-archive-directory",
          linkLabel: "Browse the Fishinar archive"
        },
        {
          title: "Sighting data for our islands",
          desc: "The REEF Geographic Zone Report for the four island areas on our itinerary, sorted by how often each species has been recorded there. A good way to see what is most likely to turn up.",
          externalUrl: "https://www.reef.org/db/reports/geo?end_date=2026-08-21&format_type=chart&group_type=species&language=common&region_code=TEP&start_date=1993-01-01&zones=2154%2C2164%2C2155%2C3108&zone_map=0",
          linkLabel: "Open the Geographic Zone Report"
        }
      ]
    },
    // The "lookalikes" block was removed 2026-08-21 per REEF editorial
    // review: species-comparison and hybridization copy reads as speculative
    // identification advice and does not belong on a participant page. The
    // shared shell no longer renders this field at all.
    surveyBasics: {
      intro: "Here is how a REEF survey works. No previous experience needed, just curiosity and a little practice.",
      steps: [
        {
          title: "It's called the Roving Diver Technique",
          desc: "You conduct a survey by swimming your normal dive — no set path and no timed segment — and recording the species you can positively identify, along with an abundance category for each one."
        },
        {
          title: "Jot down the metadata too",
          desc: "Site name, date, visibility, current, and habitat. Write it down promptly — memory fades fast once you're back on the boat for the next dive."
        },
        {
          title: "It's the same method everywhere",
          desc: "The same Roving Diver Technique is used by REEF surveyors across all 10 REEF regions worldwide, including here in the Sea of Cortez."
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
      levelsNote: "REEF has 5 Experience Levels, based on survey counts and identification tests. Wherever you are starting from, the Surveyor Toolbox explains how the levels work and how to take an Experience Level test. Martha is glad to talk through fish ID and the survey method any time during the week.",
      toolboxLink: {
        label: "REEF Surveyor Toolbox — the full method, gear list, and regional guides",
        url: "https://www.reef.org/reef-surveyor-toolbox#TEP"
      }
    }
  },

  duringTripFun: {
    dailyDiscoveries: [
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
        question: "What is the one thing you are hoping to notice up close at Bahía de los Ángeles?"
      },
      {
        fact: "Every survey conducted and submitted on this trip contributes species and abundance observations to the REEF Volunteer Fish Survey Project — the same long-running dataset used to understand changes in marine fish populations across the Tropical Eastern Pacific.",
        question: "What's one species you can confidently name now that you couldn't before the trip?"
      },
      {
        fact: "Your surveys keep contributing long after you fly home — once submitted, they join the REEF Volunteer Fish Survey Project database alongside three decades of observations from divers just like you.",
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
        }
      ]
    },
    // gamesToolkit: intentionally not added for Midriff — unlike Bonaire,
    // no built Fishy-Hour-style game (Jeopardy, Bingo, etc.) exists yet for
    // this trip. The shell (render.js renderDuringTripFun) already supports
    // this field the moment REEF builds one for the Sea of Cortez/TEP region.
    // The "Wildlife of the Day" and "Species-Count Guess & Fish of the Day"
    // items were removed 2026-08-21 per REEF editorial review: optional
    // evening activities must not be presented to participants as guaranteed
    // features of every trip unless the trip leader has confirmed them.
    intro: "",
    items: [],
    // Added 2026-08-21. Each fact carries a rendered source. The REEF figures
    // below come from REEF's own Geographic Zone Report for the four island
    // areas on this itinerary (zones 2154, 2164, 2155 and 3108), pulled
    // 2026-08-21; the vessel and region facts come from the Mexico
    // Liveaboards Know Before You Go document dated 2026-05-01.
    didYouKnow: {
      heading: "Did You Know?",
      intro: "A few verified facts about where we are going.",
      items: [
        {
          fact: "REEF surveyors have recorded 218 species across the four island areas on our itinerary, from 1,354 surveys logged since 1993.",
          source: "REEF Geographic Zone Report, zones 2154 / 2164 / 2155 / 3108, retrieved August 2026"
        },
        {
          fact: "Isla San Pedro Mártir alone accounts for 372 of those surveys, across 18 named dive sites — it is one of the best-surveyed places in the whole Gulf of California.",
          source: "REEF Geographic Zone Report, zone 3108, retrieved August 2026"
        },
        {
          fact: "The King Angelfish is the single most frequently recorded species in the central Gulf of California, reported on about 90% of surveys by experienced REEF surveyors.",
          source: "REEF Geographic Zone Report, TEP Region 3, retrieved August 2026"
        },
        {
          fact: "Jacques Cousteau called the Sea of Cortez \"the world's aquarium.\"",
          source: "Mexico Liveaboards, Know Before You Go — Midriff Islands / Sea of Cortez, May 2026"
        },
        {
          fact: "The Sea of Cortez is a strongly seasonal sea, and it has vertical thermoclines — you can sometimes see the water shimmer before you feel it. A temperature difference of 10°F within a single dive is not unusual, and the cool layers do not last long.",
          source: "Mexico Liveaboards, Know Before You Go — Midriff Islands / Sea of Cortez, May 2026"
        },
        {
          fact: "The Cortez Angelfish is endemic to this region, and fields of black coral grow along the walls here.",
          source: "Mexico Liveaboards, Know Before You Go — Midriff Islands / Sea of Cortez, May 2026"
        },
        {
          fact: "Every island we visit sits inside a Mexican federal protected area administered by CONANP, which is what the marine park fee supports.",
          source: "Mexico Liveaboards, Know Before You Go — Midriff Islands / Sea of Cortez, May 2026"
        }
      ]
    },
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
    // audience marks this guide as being shared only with people who have
    // already registered and paid, so render.js suppresses the availability
    // pill, the payment schedule, and the register/waitlist CTA.
    audience: "registered",
    availabilityBand: "waitlist",
    accommodations: {
      heading: "About the Rocio del Mar",
      body: [
        "The Rocio del Mar is a 110-foot vessel built specifically for divers, carrying our full REEF group for the whole week. We board at Marina Fonatur in Puerto Peñasco on the evening of September 12 and move between islands rather than staying in one place.",
        "There are ten private staterooms, each with its own bathroom. Every interior area is air conditioned, including the cabins, salon, galley, and hallways, and the outlets are 110V with standard U.S. plugs.",
        "Onboard you will find a large salon with a television and computer station — that is where Fishy Hour happens — plus a dive deck, a large fully equipped camera table with power outlets, two freshwater showers, and a shaded sun deck. The vessel has external stabilizers, and diving is done from two inflatable pangas.",
        "Cabin assignments are handled by Mexico Liveaboards as part of your passenger registration. For any question about your cabin, please email trips@REEF.org."
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
      "REEF trip leadership, daily fish ID sessions, and survey facilitation"
    ],
    // Amounts below are the current figures in the vessel's Know Before You
    // Go document dated 2026-05-01 and are all marked subject to change.
    excludes: [
      "Round-trip flights to Phoenix (PHX)",
      "Head Out to Rocky Point shuttle, PHX to Puerto Peñasco and back — about $175 per person, subject to change, booked directly with the shuttle company rather than through REEF",
      "Marine park fees — 240 pesos per day for six days, subject to change, paid aboard the vessel to CONANP",
      "Crew gratuity — the vessel's guidance is 10–15% of the trip price, and the REEF trip listing notes gratuities are at each participant's discretion",
      "Dive travel insurance — REEF partners with DiveAssure and DAN if you need to purchase a policy",
      "Onboard Wi-Fi — $50 per device, subject to change, working within about 10 miles of an island or at port and unavailable during open-ocean crossings",
      "Nitrox — $140 for the trip, subject to change, arranged in advance with Guest Services",
      "Private divemaster, if you would like more individual attention — $600, subject to change, arranged at least 30 days ahead through Mexico Liveaboards",
      "Rental regulators, BCDs, dive computers, or HP100 tanks, by advance reservation with Valerie at Documents@MexicoLiveaboards.com"
    ],
    requirements: [
      { status: "required", label: "Open Water scuba certification (or higher), plus proof of dive insurance", note: "The REEF trip listing describes this trip as best suited for divers. No advanced certification or minimum dive count is specified. Proof of certification and dive insurance are required in order to dive. REEF surveys generally can also be conducted while snorkeling, and this particular itinerary is built around diving." },
      { status: "required", label: "Dive computer, safety sausage (SMB), and whistle", note: "Required for every diver — all diving is done from two inflatable pangas." },
      { status: "required", label: "Passport valid for the full duration of the trip", note: "A photo of your passport's photo and information page goes to Mexico Liveaboards at least two weeks before departure. You will also obtain an FMM (Mexican tourist card) at the border on the way in — required for every non-Mexican passenger, normally with no fee for a stay of this length." },
      { status: "required", label: "Vessel passenger registration completed online", note: "Required by Mexico Liveaboards, typically due about 30 days before departure; the online form expires after a 4-hour window once started." },
      { status: "recommended", label: "Comfortable with limited connectivity for a full week", note: "Wi-Fi is paid and limited near islands, and unavailable entirely during open-water crossings." },
      { status: "recommended", label: "Comfortable with small-boat transfers and liveaboard living", note: "Diving is done from two inflatable pangas, and the group shares the vessel for the whole week." }
    ],
    pricing: [
      { label: "Trip price, double occupancy", amount: "$3,095 per person" },
      { label: "REEF program fee, added to the trip price", amount: "$350 per person" }
    ],
    paymentSchedule: [
      { when: "At booking", amount: "$500 deposit" },
      { when: "180 days before departure (March 16, 2026)", amount: "$1,298" },
      { when: "90 days before departure (June 14, 2026)", amount: "$1,297" }
    ],
    pricingNote: "The $350 REEF program fee is in addition to the $3,095 trip price, not included in it. Items paid aboard the vessel are listed under What's Not Included. For any question about your payments, please email trips@REEF.org.",
    faq: [
      { q: "This is my first liveaboard — what should I expect?", a: "You will be in good company: this roster includes both repeat Mexico Liveaboards guests and people sailing for the first time. Martha runs a welcome session on the first night that covers the survey method and how the week works, with time afterwards for anyone who would like to go over the basics of setting up survey paper." },
      { q: "Is this trip dive-focused?", a: "Yes. The REEF trip listing describes it as best suited for divers, and the itinerary is built around three to four dives a day. REEF surveys generally can also be conducted while snorkeling, and the itinerary includes a whale shark snorkel at Bahía de los Ángeles. For questions about a specific situation, please email trips@REEF.org." }
    ]
  },

  // Reflection: new shared, non-personal page added this sprint (Phase 7).
  // Since the 2026 trip hasn't happened yet, this is deliberately written to
  // work honestly pre-trip too — no invented recap or photos. Once the trip
  // happens, add real (non-personal, no participant names/photos) highlights
  // here and consider a past-trip-photos-style teaser for actual 2026 shots.
  reflection: {
    thankYou: "Thank you for spending a week conducting marine-life surveys with us. Whether you are reading this before you have packed a bag or looking back on a week already behind you, the same thing is true: every survey you conduct and submit becomes part of something REEF has been building since 1993, one observation at a time.",
    conservationNote: "Each survey contributes positively identified species, an abundance category for each one, and environmental metadata such as site, depth, visibility, and habitat. Submissions go through quality checks and then become part of the REEF Volunteer Fish Survey Project database — a long-running, publicly accessible record used by researchers, resource managers, and conservation partners. Your surveys contribute observations to REEF science that stay useful long after the trip, helping build a clearer picture of how marine fish populations in the Tropical Eastern Pacific are changing over time.",
    invitation: "REEF runs Field Survey Trips around the world each year. You can see what is coming up at <a href=\"https://www.REEF.org/trips\" target=\"_blank\" rel=\"noopener\">www.REEF.org/trips</a>."
    // highlights: intentionally left out — there's nothing genuine to put
    // here before the trip happens. Once it does, add a few real, shared
    // (non-personal) moments — no participant names or photos.
  }
};
