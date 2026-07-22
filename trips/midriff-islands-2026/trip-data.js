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
   - No Midriff-specific photos or destination imagery exist yet.
   - No detailed hour-by-hour daily dive schedule exists yet (unlike
     Bonaire, whose Pre-Trip Info PDF had one) — the Captain sets
     daily sites based on conditions per the Playbook's own
     Operations & Safety Boundaries section, so the itinerary below
     is presented at the island/day level, honestly, not invented
     down to the hour.
   ============================================================ */

window.TRIP_DATA = {
  tripId: "midriff-islands-2026",
  program: "REEF Field Survey Trip",
  destination: "Midriff Islands, Sea of Cortez",
  location: "Aboard the Rocio del Mar (Mexico Liveaboards)",
  dateRange: "September 12–19, 2026",
  startDate: "2026-09-12",

  tripLeaders: [
    {
      name: "Martha Klitzkie",
      role: "REEF Co-Executive Director of Strategy and Operations",
      email: "martha@REEF.org",
      phone: "305-393-5364 (cell/WhatsApp)",
      bio: [
        "Martha is REEF's Co-Executive Director of Strategy and Operations. Before joining the REEF staff team in 2011, her passion for teaching people about the oceans grew over ten years of leading residential marine science programs. Her undergraduate degree focused on environmental education, and her master's was in Educational Leadership and Administration.",
        "She's passionate about connecting people with the marine environment and building a sense of community among ocean enthusiasts — and she's enthusiastic about expanding REEF's impact and reach to create a future where healthy oceans thrive. She believes it's the little things that change the world, like how a single fish survey adds up to the world's largest marine sighting database."
      ],
      funFact: {
        label: "Favorite fish to spot",
        value: "Yellowhead Jawfish",
        note: "keep an eye on sandy burrows this trip — you might catch one 'airing out' its mouthful of eggs."
      }
    }
  ],

  home: {
    welcomeNote: "Welcome to the Midriff Islands! Here's everything for the week in one place — the itinerary, what to sort out before you fly, some fish ID prep for the Sea of Cortez, and a few things to enjoy once we're all aboard, September 12–19.",
    aboutThisResource: {
      heading: "Before You Dive In",
      body: [
        "Welcome! This page brings together trip information, travel logistics, fish ID resources, and a few other helpful references for our REEF Field Survey Trip to the Midriff Islands. Use whatever is helpful to you, and don't worry about trying to read everything before you arrive — we'll explore it all together throughout the week during evening fish ID sessions, conversations, and plenty of time on and around the water.",
        "This trip is a liveaboard aboard the Rocio del Mar, so a bit more advance planning goes into getting everyone from Phoenix to the boat than on a resort-based trip — the Pre-Trip Info page walks through it step by step.",
        "If you think of something that would make this even more helpful for future trips, we'd love to hear your ideas."
      ]
    }
  },

  itinerary: {
    overview: "This is a liveaboard trip aboard the Rocio del Mar, so the rhythm is a little different from a resort-based trip: we board in Puerto Peñasco the evening of September 12 and spend the week moving between islands in the Midriff region of the Sea of Cortez — Isla Ángel de la Guarda, Isla San Pedro Mártir, Isla Salsipuedes, Isla Las Ánimas, and Bahía de los Ángeles — with 3-4 dives most days. The Captain and crew set the exact daily dive sites based on conditions, so think of the plan below as the shape of the week rather than a fixed hour-by-hour schedule.",
    note: "Because a small liveaboard's schedule depends on weather, currents, and what each island offers that day, the Captain and divemasters make the day-to-day call on sites and timing — that's their expertise, not ours. Martha will keep everyone posted on the plan each morning. Evenings are our chance to gather in the salon for a short fish ID session tied to whatever we actually saw that day.",
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
          { time: "Evenings", desc: "A short, casual fish ID session in the salon based on what the group actually saw that day, plus our recurring traditions (Fish of the Day, Wildlife of the Day, species-count updates — see During-Trip Fun)." }
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
    sections: [
      {
        heading: "Getting to the Boat",
        intro: "The Rocio del Mar departs from Marina Fonatur in Puerto Peñasco, Mexico — about a 4.5-hour drive from Phoenix, Arizona, the closest and most convenient airport (PHX).",
        items: [
          "Plan your arriving flight into PHX for no later than 11:00 AM on September 12 to make the 1:00 PM shuttle.",
          "The shuttle departs PHX Terminal 4, Door #5 (outer curb, north side arrivals) and crosses the U.S.–Mexico border at Lukeville/Sonoyta — the driver handles the crossing process and makes scheduled rest stops along the way.",
          { label: "Book your Head Out to Rocky Point shuttle", url: "https://www.headouttorockypoint.com/scuba", note: "About $175–190 per person, paid directly to the shuttle company. Note your transfer arrangements on your Rocio del Mar passenger forms once booked." },
          "On the return, plan to disembark around 7:30 AM on September 19 and book your departing PHX flight for 2:00 PM or later.",
          "Arriving a different way? Let Martha know so we can plan around it."
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
          "Evening fish ID sessions happen in the boat's salon, using the onboard TV/computer station.",
          "Outlets aboard are 110V, standard U.S. plugs.",
          "REEF's trip leader handles marine life education and survey facilitation; the Captain and divemasters make all diving, safety, and scheduling decisions."
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
          "Reef-safe sunscreen, a rash guard, and foot coverings for the deck (it's bee season).",
          "Any medications you take, including motion-sickness remedies just in case — and let Martha know ahead of time about anything (like an EpiPen) that needs cool storage.",
          "Camera, housing, and batteries if you're bringing one — pack batteries and memory cards in your carry-on.",
          "A dry bag and a U.S.-style outlet adapter if you need one (outlets aboard are 110V, standard U.S. plugs).",
          "Fish ID resources you like to study from, and your REEF shirt!"
        ]
      }
    ]
  },

  studyTips: {
    intro: "These lists aren't a checklist to complete — think of them like learning your neighbors' names before trying to memorize the phone book. Don't hesitate to look into a fish that isn't mentioned here, either — some of the most memorable discoveries are the unexpected ones. Here's where to spend your prep time:",
    tips: [
      "Learn families before species. Once you can place a fish in its family (angelfish, triggerfish, damselfish, blenny, etc.), the rest gets much easier — families share body shape and behavior, so species-level ID is often just color and pattern from there.",
      "Know your lookalikes. The Sea of Cortez's King Angelfish and Cortez Angelfish are a classic pair to watch for — they even hybridize where their ranges overlap, so don't worry about getting every one perfectly labeled.",
      "Look low and slow for the small stuff. Blennies, jawfish, seahorses, and frogfish reward patient, careful looking rather than fast swimming — REEF's trip leaders will point these out at Fishy Hour.",
      "Expect variation. Fish look different from different angles and life stages — a photo you studied ahead of time may look a little different head-on or as a juvenile.",
      "Save some for the evening fish ID session. Each night we'll gather to talk fish and share the day's favorite finds. No advance prep required — just come curious.",
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
          title: "It's been around since 1993",
          desc: "The Roving Diver Technique started in the Tropical Western Atlantic and is now used the same way in all 10 of REEF's regions worldwide, including here in the Sea of Cortez."
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
        fact: "Jawfish are mouthbrooders — the male incubates the eggs by holding them in his mouth until they hatch, occasionally 'airing them out' by spitting and re-catching the whole clutch.",
        question: "Has anyone spotted a jawfish peeking out of its burrow yet?"
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
        question: "What's the most curious animal encounter you've had so far this trip?"
      },
      {
        fact: "Bahía de los Ángeles is one of the more reliable places in the world to encounter whale sharks, the largest fish in the ocean — despite their size, they're filter feeders and no threat to snorkelers.",
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
  }
};
