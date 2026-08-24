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
   file's text was already correct from the 07-23 pass. A photo of O.
   rosenblatti was attached in this pass, sourced from REEF's Media Assets
   archive. See TECH_DEBT.md for the new standing process note this
   prompted: trip leader profiles (funFact especially) need a per-trip
   regional-accuracy check, not just a one-time write.

   2026-08-21 correction to the above: that photo attachment was REVERSED.
   The referenced file was never placed in resources/photos/, and the only
   images REEF holds for this species are licensed "REEF internal use only,
   photographer credit required" and so cannot be published here. The credit
   written at the time ("Christy Semmens") was also wrong — the source
   records credit Carol Cox. RESOLVED 2026-08-23 by retiring the species:
   see the second 08-23 note below.

   2026-08-23 pass 1 (Participant Pre-Trip Webpage Content QA handoff):
   rewrote reflection.* so "Your Impact" reads correctly before, during and
   after the trip and is substantial rather than three thin cards — new
   generic reflection.sections support in render.js, plus the survey
   data-entry card the page was missing. Softened whale shark and mobula
   claims to what the sources actually support, replaced the sea lion
   in-water advice with crew-deferring wildlife-respect framing, and
   corrected the Cortez Angelfish endemism claim to Tropical Eastern
   Pacific. No post-trip content, photos, participant names or unverified
   statistics were added.

   2026-08-23 pass 2 (Martha's review of pass 1, two decisions):

   (a) NO PRICING OR FEE FIGURES ON THIS DASHBOARD, at all. Pass 1 had
   re-confirmed the marine park fee against the vessel's May 2026 Know
   Before You Go document and found the public Mexico Liveaboards page
   disagreeing with it (240 pesos/day for six days vs 230 pesos per day of
   diving — different rate, different basis). Martha's call was to stop
   publishing amounts rather than adjudicate them: everyone reading this has
   already registered and paid, the figures belong to Mexico Liveaboards,
   and a stale number on a public page is worse than no number. Removed:
   tripDetails.pricing, tripDetails.paymentSchedule, tripDetails.pricingNote
   (trip price, REEF program fee, deposit schedule), every amount in
   tripDetails.excludes, and the shuttle and Wi-Fi amounts in preTripInfo.
   excludes[] now names what participants pay separately and points at the
   Know Before You Go document and trips@REEF.org for current figures.
   Do not reintroduce amounts anywhere in this file.

   (b) BLUESPOTTED JAWFISH RETIRED, replaced by blennies as a group, in both
   the trip leader funFact and home.featuredFish. Every blenny species named
   is backed by REEF sighting-frequency data in Midriff Fish ID Tools/data/
   species.json and by FishBase behaviour checks run 2026-08-23 — see the
   full sourcing comment on funFact.

   2026-08-23 pass 3 (Martha corrected a wrong conclusion in pass 2, and it
   is worth reading before anyone repeats it):

   Pass 2 concluded that REEF's species photo library could not supply an
   image for a public page, because every asset checked carried the licence
   note "REEF internal use only, photographer credit required." That
   conclusion was WRONG, and the note is misleading rather than restrictive.
   Martha, who curates the base, states the actual policy: only photos REEF
   has permission to use are allowed into that base at all, so everything in
   it is cleared for REEF use. What the note is really about is CREDIT:

     - Photographer Credit filled  -> that photographer MUST be credited.
     - Photographer Credit empty    -> credit "REEF" (staff photos taken over
       the years, which the organisation holds rights to, with no individual
       attribution).

   Both blenny cards therefore now carry real credited photos. The two files
   were pulled from Marine Life Photo Library/TEP Tropical Eastern Pacific/
   and cropped to the 842x532 this site already uses.

   STANDING NOTE for whoever edits this file next: a photo from that base is
   publishable. Read the Photographer Credit field, show that name if it has
   one and "REEF" if it does not, and never publish an image from it with no
   credit line at all. Do NOT read the "internal use only" licence text as a
   block — that misreading cost this project a pass, and the field text
   should probably be rewritten in Airtable to stop it happening again.
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
  lastUpdated: "2026-08-23",

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
      // funFact replaced 2026-08-23 at Martha's direction: blennies as a
      // group, rather than a single species. This retires the Bluespotted
      // Jawfish entry that had run here since 2026-07-23 and ends the
      // photo-clearance problem it carried (see the note below).
      //
      // Species named below were chosen on two criteria: they are in the
      // Midriff Fish ID Tools species set with real REEF sighting-frequency
      // data (Midriff Fish ID Tools/data/species.json, TEP region), and REEF
      // holds a photo of each. Sighting frequencies from that dataset:
      // Panamic Fanged 32.41%, Redside 28.55%, Browncheek 26.48%,
      // Orangethroat Pikeblenny 16.20%.
      //
      // Behaviour claims verified against FishBase 2026-08-23:
      //   Ophioblennius steindachneri — "Adults prefer the surge zone of
      //     unprotected rocky headlands... They wedge themselves in crevices
      //     close to shore in shallow water, darting out to defend their
      //     territory." Its range is given as including Isla Angel de la
      //     Guarda, which is on this itinerary.
      //   Acanthemblemaria crockeri — "Eastern Central Pacific: Gulf of
      //     California"; "Inhabits empty worm and mollusk tubes on rocky
      //     reefs." Described here as "a Gulf of California species," NOT as
      //     "found nowhere else" — FishBase gives the distribution as the
      //     Gulf but its coordinate box runs further south, and STRI was
      //     unreachable for a second opinion. Deliberately not an endemism
      //     claim; see the Cortez Angelfish correction elsewhere in this file
      //     for why that distinction now gets treated carefully.
      //   Malacoctenus hubbsi — "Gulf of California and southwestern coast
      //     of Baja California"; "Occurs in shallow rocky areas." Depth range
      //     1-4 m, hence "shallow" rather than a general reef claim.
      //   Chaenopsis alepidota — "Inhabits sandy areas in worm tubes."
      // Cirri are stated as a family-level trait, which is what they are, not
      // attributed to any one species.
      //
      // PHOTO RIGHTS, corrected 2026-08-23 by Martha, who curates the base.
      // Every blenny image in REEF's Media Assets table (Airtable
      // appDD6S7n5AS7wtZ4 / tblHZzUE5dKxJZNHj) carries the note "REEF
      // internal use only, photographer credit required." That note had been
      // read as blocking publication. It does not. Martha's standing policy:
      // ONLY photos REEF has permission to use are allowed into that base at
      // all, so anything in there is cleared for REEF use. The credit rule is
      // what the note is actually about:
      //   - Photographer Credit filled  -> that name MUST be shown.
      //   - Photographer Credit empty    -> credit "REEF" (staff photos the
      //     organisation holds rights to, with no individual attribution).
      // Photo below: panamic-fanged-blenny.jpg, cropped for the web from
      // panamicfangblenny_ccoxIMG_1170_.jpg (Media Assets recJ3ydDgyzAR8syn,
      // Marine Life Photo Library/TEP Tropical Eastern Pacific/). Credit
      // Carol Cox, Credit Confirmed = true, Status = Ready. Chosen because it
      // shows the thing the copy describes: propped up on its pectoral fins
      // on the rock, cirri visible above the eye.
      funFact: {
        label: "Favorite Fish in This Region",
        value: "Blennies",
        photo: {
          src: "resources/photos/panamic-fanged-blenny.jpg",
          alt: "A Panamic Fanged Blenny perched on a rocky reef in the Sea of Cortez",
          credit: "Carol Cox"
        },
        note: "I love them all. Blennies are full of personality — big eyes, quirky expressions, feathery cirri sprouting over the brow like unruly eyebrows, and that habit of perching up on a rock like a tiny underwater dog watching the street go by. Ones to look for this week: the <strong>Panamic Fanged Blenny</strong>, wedged into a crevice in the shallow surge and darting out to defend its patch; the <strong>Browncheek Blenny</strong>, a Gulf of California species that lives inside an empty worm or mollusk tube with only its face showing; the <strong>Redside Blenny</strong>, in shallow rocky areas; and the <strong>Orangethroat Pikeblenny</strong>, long and slender, tucked into an abandoned worm tube out on the sand."
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
    // Replaced 2026-08-23 at Martha's direction, in step with the trip
    // leader funFact: the Start Here spotlight is now blennies as a group
    // rather than the Bluespotted Jawfish. Deliberately NOT the same words
    // as the funFact note — that one is Martha's own "why I love these"
    // in first person, this one is the practical how-to-actually-find-them
    // and carries the REEF sighting-frequency figures. See the funFact
    // comment above for full sourcing of every species claim and for the
    // photo-rights position.
    // Photo: browncheek-blenny.jpg, cropped for the web from
    // blenny_browncheek_madalynmussey.JPG (Media Assets rechtGF4mF2lM59xu).
    // Credit Madalyn Mussey, Credit Confirmed = true, Status = Ready.
    // Deliberately a different species and photographer from the funFact
    // card, so the two cards do not show the same picture twice — and this
    // one is the in-the-tube view the blurb describes, only a face showing.
    featuredFish: {
      name: "Blennies",
      photo: {
        src: "resources/photos/browncheek-blenny.jpg",
        alt: "A Browncheek Blenny peering out of its tube in the reef, only its head showing",
        credit: "Madalyn Mussey"
      },
      blurb: "Small, big-eyed, and easy to swim straight past — blennies reward slowing down more than almost anything else on the reef. Most are only a few inches long, and they spend their time propped on a rock or tucked inside an empty worm tube with just a face showing. Get low, hold still for a few seconds, and let your eye adjust to the scale. REEF surveyors record the Panamic Fanged, Redside, and Browncheek Blennies on roughly a quarter to a third of surveys in this region, so there is a fair chance of all three."
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
    // Photographer credit corrected 2026-08-23: two entries below credited
    // "Jonathan Laven". REEF's Media Assets table spells it "Jonathan Lavan"
    // across all 8 of his records, so the site was misspelling a
    // photographer's name. Nothing here renders today (this pool is
    // retired), but under Martha's photo-credit policy a named photographer
    // must be credited correctly, and this would have published wrong the
    // moment anyone re-enabled rotation.
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
        photo: { src: "resources/photos/blue-and-yellow-chromis.jpg", alt: "Blue-and-Yellow Chromis in the Sea of Cortez", credit: "Jonathan Lavan" }
      },
      {
        name: "Finescale Triggerfish",
        blurb: "REEF doesn't have a written species profile for this one yet, but it was a regular sighting on REEF's own 2019 Sea of Cortez survey trip — keep an eye out and see what you notice.",
        photo: { src: "resources/photos/finescale-triggerfish.jpg", alt: "Finescale Triggerfish in the Sea of Cortez", credit: "Jonathan Lavan" }
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
          // Softened 2026-08-23: the vessel's published route and its Know
          // Before You Go document (May 1, 2026) both list a whale shark
          // snorkel at Bahía de los Ángeles on Day 7, so the ACTIVITY is
          // genuinely planned — but a wildlife ENCOUNTER is never
          // guaranteed, and the previous wording read as though it were.
          { time: "Per the vessel itinerary", desc: "Two dives at Bahía de los Ángeles, plus a planned whale shark snorkel if conditions and wildlife allow. Exact timing is the crew's call." },
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
      "Book your Head Out to Rocky Point shuttle (round trip, booked and paid directly with the shuttle company) and note your transfer details on your Rocio del Mar passenger forms: https://www.headouttorockypoint.com/scuba",
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
          { label: "Book your Head Out to Rocky Point shuttle", url: "https://www.headouttorockypoint.com/scuba", note: "Round trip, booked and paid directly with the shuttle company. Note your transfer arrangements on your Rocio del Mar passenger forms once booked." },
          "On the return, plan to disembark around 7:30 AM on September 19. The shuttle is expected to reach Phoenix around midday, so book your departing PHX flight for 2:00 PM or later.",
          "Traveling a different way, or need to change a travel arrangement? Please email trips@REEF.org."
        ]
      },
      {
        heading: "What to Expect Onboard",
        items: [
          "Ten cabins aboard the Rocio del Mar, most set up as two twin bunks, a few as queen or full-bed-with-bunk configurations.",
          "Wi-Fi is limited and paid — it works within roughly 10 miles of an island and is unavailable during open-water crossings. Plan on being mostly offline for the week.",
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
          "Wi-Fi aboard is paid, per device, and only works within roughly 10 miles of an island or at port \u2014 it is unavailable during open-ocean crossings. The office line is the only reliable channel while we are at sea.",
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
          { label: "TEP Surveyor Toolbox", url: "https://www.REEF.org/reef-surveyor-toolbox#TEP", note: "The best starting point for Sea of Cortez / Tropical Eastern Pacific species." },
          { label: "Archived TEP Fishinars", url: "https://www.REEF.org/fishinar-and-fishy-hour-archive-directory", note: "Log in to your REEF account to watch — several are specific to the Sea of Cortez." },
          { label: "REEF Geographic Zone Report for the islands on our itinerary", url: "https://www.REEF.org/db/reports/geo?end_date=2026-08-21&format_type=chart&group_type=species&language=common&region_code=TEP&start_date=1993-01-01&zones=2154%2C2164%2C2155%2C3108&zone_map=0", note: "REEF sighting data for Isla Ángel de la Guarda, Isla San Pedro Mártir, Isla Salsipuedes / Isla Las Ánimas, and Bahía de los Ángeles — sorted by how often each species has been recorded. A useful way to see what is most likely to turn up." }
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
          externalUrl: "https://www.REEF.org/reef-surveyor-toolbox#TEP",
          linkLabel: "Open the TEP Surveyor Toolbox"
        },
        {
          title: "Archived TEP Fishinars",
          desc: "Recorded sessions covering Sea of Cortez species and survey topics. Log in to your REEF account to watch.",
          externalUrl: "https://www.REEF.org/fishinar-and-fishy-hour-archive-directory",
          linkLabel: "Browse the Fishinar archive"
        },
        {
          title: "Sighting data for our islands",
          desc: "The REEF Geographic Zone Report for the four island areas on our itinerary, sorted by how often each species has been recorded there. A good way to see what is most likely to turn up.",
          externalUrl: "https://www.REEF.org/db/reports/geo?end_date=2026-08-21&format_type=chart&group_type=species&language=common&region_code=TEP&start_date=1993-01-01&zones=2154%2C2164%2C2155%2C3108&zone_map=0",
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
      // Offline entry turned into a real download link 2026-08-23 at Martha's
      // request: Wi-Fi aboard is limited, so the program needs to be on your
      // laptop BEFORE you travel, not downloaded from the boat. renderList
      // gained { label, url, note } support the same day so this list could
      // carry a link at all.
      submitting: [
        "Online at REEF.org/dataentry (needs an internet connection — easiest once you're back on land)",
        {
          label: "Download the free REEF Survey Data Entry Program before the trip",
          url: "https://www.REEF.org/reef-survey-data-entry-program",
          note: "We recommend everyone downloads this before departure, since Wi-Fi aboard is limited. It runs on a Mac or Windows laptop, not on phones or tablets, and it lets you enter surveys offline during the week and upload them all at once once you are back online."
        },
        "Either way, you'll need your free REEF member number"
      ],
      levelsNote: "REEF has 5 Experience Levels, based on survey counts and identification tests. Wherever you are starting from, the Surveyor Toolbox explains how the levels work and how to take an Experience Level test. Martha is glad to talk through fish ID and the survey method any time during the week.",
      toolboxLink: {
        label: "REEF Surveyor Toolbox — the full method, gear list, and regional guides",
        url: "https://www.REEF.org/reef-surveyor-toolbox#TEP"
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
        // Made time-neutral 2026-08-23. This is dailyDiscoveries[0], which
        // is what currentTripDayIndex() shows to every pre-departure
        // visitor, and "yet?" made the trip sound already underway. Belt
        // and braces alongside the stage-aware framing now in render.js.
        question: "Who can spot a jawfish hovering just above its burrow?",
        prompt: "Approach slowly and stay low — jawfish drop straight back into the sand the instant they feel threatened, so patience is the only way to get a good look."
      },
      {
        fact: "Frogfish are ambush predators that lure prey with a modified fin spine that looks like a tiny fishing rod and bait — and they're masters of camouflage, so they're often sitting in plain sight.",
        question: "Slow down near sponges and rubble — that's prime frogfish habitat."
      },
      {
        // Superlative removed 2026-08-23: "one of the best places in the
        // world" was not supported by any source REEF holds. The leaping
        // behaviour and the competing explanations for it are well
        // documented; the ranking was not.
        fact: "The Sea of Cortez is known for mobula rays, which are famous for leaping clear out of the water — nobody's entirely sure why, but theories range from communication to just shaking off parasites.",
        question: "Has anyone seen one breach yet?"
      },
      {
        fact: "Sea lion colonies are common around the Midriff Islands, and young sea lions are famously curious divers — don't be surprised if one comes over to check out your gear rather than the other way around.",
        question: "What's the most curious animal encounter you've had so far this trip?",
        // Rewritten 2026-08-23. The previous prompt ("no need to swim
        // away") gave in-water behaviour advice from a webpage, which can
        // conflict with what the crew tells you on the day. Wildlife-respect
        // framing that defers to the divemaster instead.
        prompt: "If a sea lion comes over to investigate, stay calm and follow the crew and divemaster guidance, keep your hands to yourself, and let the animal choose the distance. Do not touch, chase, feed, or block wildlife."
      },
      {
        // Softened 2026-08-23: "one of the more reliable places in the
        // world" was an unsourced ranking, and pairing it with a planned
        // snorkel implied a guaranteed encounter. The seasonality and the
        // filter-feeding are sound; the ranking and the certainty were not.
        fact: "Bahía de los Ángeles is known for seasonal whale shark encounters. Whale sharks are the largest fish in the ocean, and despite their size they are filter feeders and no threat to snorkelers. Whether we see one is down to the season, the conditions, and the animals — it is never a given.",
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
      intro: "REEF has explored the Sea of Cortez aboard the Rocio del Mar before, and these shots give you a real taste of what's waiting for you.",
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
        // Corrected 2026-08-23. The vessel's Know Before You Go document
        // calls the Cortez Angelfish "endemic to this region," which is too
        // narrow if "this region" reads as the Gulf of California — the
        // species ranges well beyond it. Shorefishes of the Tropical Eastern
        // Pacific (STRI) gives the distribution as "Southern Baja and Gulf
        // of California to Peru, including all the oceanic islands," i.e. a
        // Tropical Eastern Pacific endemic, not a Gulf endemic. Split into
        // two facts so each carries the source that actually supports it;
        // the black coral claim is the vessel's and stays with the vessel.
        {
          fact: "The Cortez Angelfish takes its name from the Sea of Cortez, but it is a Tropical Eastern Pacific species rather than a Gulf of California one — it ranges from southern Baja and the Gulf south to Peru, including the region's oceanic islands. The Gulf is one end of its range, not the whole of it.",
          source: "Shorefishes of the Tropical Eastern Pacific (Smithsonian Tropical Research Institute), retrieved August 2026"
        },
        {
          fact: "Fields of black coral grow along the walls here.",
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
  // not assumed; (2) the vessel's onboard-paid items (park fees, tips) had
  // no confirmed dollar amount in Airtable's Pricing table ("Paid onboard
  // and Pricing TBD"), so excludes[] never invented one. As of 2026-08-23
  // that question is moot: no amounts of any kind are published on this
  // dashboard — see the note above excludes[].
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
    // ALL AMOUNTS REMOVED 2026-08-23 at Martha's direction: this dashboard
    // carries no pricing or fee figures. Everyone reading it has already
    // registered and paid, the amounts are Mexico Liveaboards' to set and
    // change, and a stale figure on a public page is worse than no figure —
    // which is exactly what the 240-vs-230 peso park fee discrepancy found
    // on 2026-08-23 demonstrated. The list still tells participants WHAT
    // they pay separately and WHO to ask; the last item points at the
    // authoritative source for the numbers. Do not reintroduce amounts here.
    excludes: [
      "Round-trip flights to Phoenix (PHX)",
      "Head Out to Rocky Point shuttle, PHX to Puerto Peñasco and back — booked and paid directly with the shuttle company rather than through REEF",
      "Marine park fees, paid aboard the vessel to CONANP",
      "Crew gratuity — at each participant's discretion, per the trip listing",
      "Dive travel insurance — REEF partners with DiveAssure and DAN if you need to purchase a policy",
      "Onboard Wi-Fi, which works within about 10 miles of an island or at port and is unavailable during open-ocean crossings",
      "Nitrox, arranged in advance with Guest Services",
      "Private divemaster, if you would like more individual attention — arranged at least 30 days ahead through Mexico Liveaboards",
      "Rental regulators, BCDs, dive computers, or HP100 tanks, by advance reservation with Valerie at Documents@MexicoLiveaboards.com",
      "Current amounts for all of the above come from Mexico Liveaboards and can change. Your Know Before You Go document has the latest figures, and trips@REEF.org can help if you need them."
    ],
    requirements: [
      { status: "required", label: "Open Water scuba certification (or higher), plus proof of dive insurance", note: "The trip listing describes this trip as best suited for divers. No advanced certification or minimum dive count is specified. Proof of certification and dive insurance are required in order to dive. REEF surveys can also be conducted while snorkeling, but this particular itinerary is built around diving." },
      { status: "required", label: "Dive computer, safety sausage (SMB), and whistle", note: "Required for every diver — all diving is done from two inflatable pangas." },
      { status: "required", label: "Passport valid for the full duration of the trip", note: "A photo of your passport's photo and information page goes to Mexico Liveaboards at least two weeks before departure. You will also obtain an FMM (Mexican tourist card) at the border on the way in — required for every non-Mexican passenger, normally with no fee for a stay of this length." },
      { status: "required", label: "Vessel passenger registration completed online", note: "Required by Mexico Liveaboards, typically due about 30 days before departure; the online form expires after a 4-hour window once started." },
      { status: "recommended", label: "Comfortable with limited connectivity for a full week", note: "Wi-Fi is paid and limited near islands, and unavailable entirely during open-water crossings." },
      { status: "recommended", label: "Comfortable with small-boat transfers and liveaboard living", note: "Diving is done from two inflatable pangas, and the group shares the vessel for the whole week." }
    ],
    // pricing / paymentSchedule / pricingNote REMOVED 2026-08-23 at Martha's
    // direction. The renderer already suppressed paymentSchedule for
    // audience: "registered", but the Trip Cost card and the pricing note
    // still showed the trip price, the REEF program fee, and the deposit
    // schedule to an audience that has already paid all of it. All three
    // fields are optional in render.js (renderTripDetails guards on
    // td.pricing), so deleting them removes the card cleanly. Payment
    // questions go to trips@REEF.org, which the FAQ and Pre-Trip Info
    // already say. Do not reintroduce these fields for this trip.
    faq: [
      { q: "This is my first liveaboard — what should I expect?", a: "You will be in good company: this roster includes both repeat Mexico Liveaboards guests and people sailing for the first time. Martha runs a welcome session on the first night that covers the survey method and how the week works, with time afterwards for anyone who would like to go over the basics of setting up survey paper." },
      { q: "Is this trip dive-focused?", a: "Yes. The trip listing describes it as best suited for divers, and the itinerary is built around three to four dives a day. REEF surveys can also be conducted while snorkeling, and the itinerary includes a planned whale shark snorkel at Bahía de los Ángeles, conditions and wildlife permitting. For questions about a specific situation, please email trips@REEF.org." }
    ]
  },

  // Reflection: new shared, non-personal page added this sprint (Phase 7).
  // Since the 2026 trip hasn't happened yet, this is deliberately written to
  // work honestly pre-trip too — no invented recap or photos. Once the trip
  // happens, add real (non-personal, no participant names/photos) highlights
  // here and consider a past-trip-photos-style teaser for actual 2026 shots.
  reflection: {
    // Rewritten 2026-08-23 per the Participant Pre-Trip Webpage Content QA
    // handoff. The opening card used to begin "Thank you for spending a week
    // conducting marine-life surveys with us," which read as post-trip on a
    // page participants are using weeks before departure. It is now
    // before/during/after neutral: it states what the page is FOR rather
    // than thanking people for something they may not have done yet.
    // Field name kept as thankYou for renderer compatibility — it is a data
    // key only and never appears in visible copy.
    thankYou: "Before, during, and after the trip, this page connects your survey slate to the bigger REEF picture. Every survey you complete and submit adds positively identified species, abundance observations, and site information to a long-running dataset REEF has been building since 1993.",
    // sections[] is generic renderer support added to render.js on the same
    // date (renderReflection) — any trip can supply heading + body
    // paragraphs and get ordinary cards. Added because "Your Impact" had
    // only three possible cards, which was too thin for a page with that
    // name, and because everything here is true before the trip as well as
    // after it. Every claim below is drawn from REEF's own Volunteer Fish
    // Survey Project page and Surveyor Toolbox — nothing about this
    // specific trip's results, which do not exist yet.
    sections: [
      {
        heading: "From Your Slate to REEF Science",
        body: [
          "On a survey you swim your normal dive — no set path, no timed segment — and record the marine life you can positively identify, assign each species an abundance category, and note the basic site information: location, date, depth, visibility, and habitat.",
          "Once you submit, those observations go through REEF's quality checks and become part of the Volunteer Fish Survey Project database. REEF data are used in species distribution and population trend reports, in published research, and in monitoring and conservation work with management agencies and partner organizations.",
          "One survey is a small act. Many surveys, over many years, become a way to see patterns no single diver could see alone."
        ]
      },
      {
        heading: "Why Surveys from the Midriff Islands Matter",
        body: [
          "The Midriff Islands sit within REEF's Tropical Eastern Pacific survey region. Surveys from this trip add observations from a distinctive Gulf of California setting, where rocky reefs, islands, sandy patches, sea lion colonies, and seasonal wildlife movements all shape what a surveyor may see.",
          "No single trip proves a population trend on its own. What a week of surveys does is add well-documented observations from a specific place and time to a record that already stretches back three decades — which is exactly what makes a trend visible later."
        ]
      },
      {
        heading: "Keeping Your Records Accurate",
        body: [
          "Write your site information down promptly rather than trusting it to memory — details fade fast once you are back aboard and getting ready for the next dive.",
          "Record only what you can positively identify. If an identification is uncertain, leave it off or ask rather than guessing: a species left out costs the dataset far less than a species recorded wrongly.",
          "Hold on to your slates and survey paper until your entries are complete and submitted."
        ]
      }
    ],
    // Added 2026-08-23 using the renderer's existing generic dataEntry
    // support (present since 2026-07-23, unused by this trip until now).
    // This page previously never answered the most practical question a
    // participant has: what do I actually do with my survey data? Submission
    // wording matches REEF's own VFSP instructions — online interface, or
    // the free offline program with a connection needed only to submit.
    dataEntry: {
      heading: "Submit Your Surveys After the Trip",
      intro: "Once you are back online, enter each completed survey through REEF's data entry system. You will need your free REEF member number, your site and dive information, and the species and abundance notes from your slate. You can enter surveys directly through REEF's online interface, or use REEF's free offline data entry program and submit once you have a connection.",
      link: {
        label: "Open REEF survey data entry",
        url: "https://www.REEF.org/dataentry"
      }
    },
    // Rewritten 2026-08-23 to cut the repetition the handoff flagged: the
    // survey mechanics (abundance categories, site metadata, quality checks)
    // now live once, in the "From Your Slate to REEF Science" section above.
    // This card carries only the point that section does not — why a
    // consistent method over a long record is what makes the data usable.
    // Opening claim added 2026-08-23, corrected 2026-08-24 by Martha.
    //
    // RANKING: "one of the largest," not "the world's largest." The first
    // draft said "the world's largest"; Martha confirmed the softer claim is
    // the correct one. It now matches REEF.org's own Volunteer Fish Survey
    // Project page and Martha's bio on the Trip Leader page, both of which
    // say "one of the largest marine life databases in the world." Keep all
    // three in step — do not upgrade this to a superlative.
    //
    // COUNT: "over 325,000" is a DELIBERATE ROUND-DOWN, not a stale figure.
    // REEF.org's home page carries a live auto-updating survey count (326,664
    // on 2026-08-24). This page is static trip data, so quoting the live
    // number would need hand-maintenance forever. Rounding down to 325,000
    // stays true as the real count climbs and needs no upkeep. Only revisit
    // when the live count approaches the next round figure — then move to
    // "over 350,000," not to an exact number. This is the only survey-count
    // reference in this file; if another is ever added, use the same rounded
    // figure so the two cannot drift apart.
    conservationNote: "You're part of one of the largest marine life sightings databases in the world — over 325,000 surveys and counting. What makes it valuable is not any single survey. It is the consistency of the method and the length of the record: the same Roving Diver Technique, used by volunteer divers and snorkelers in the same places, year after year since 1993. That is what turns a week of diving into evidence, and it is why your surveys stay useful long after you have unpacked.",
    invitation: "REEF runs Field Survey Trips around the world each year. You can see what is coming up at <a href=\"https://www.REEF.org/trips\" target=\"_blank\" rel=\"noopener\">www.REEF.org/trips</a>."
    // highlights, impactStats and photoAlbums: intentionally still left out.
    // There is nothing genuine to put in them before the trip happens, and
    // the handoff was explicit that this restraint is correct and should be
    // preserved. After the trip, add real shared (non-personal) highlights
    // and verified stats using those existing optional fields — no
    // participant names, no participant photos, no private comments, and no
    // impact statistic without verified: true.
  }
};
