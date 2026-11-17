/**
 * Barclay Travel Sri Lanka — Structured Content Repository
 * Contains all 8 regional profiles, 8 holiday types, 10 day-by-day sample itineraries,
 * Ceylon Grand Ride stages, FAQs, and standard booking/payment status copy.
 */

const SITE_DATA = {
  destinations: [
    {
      slug: 'south-coast-galle',
      name: 'South Coast and Galle',
      url: '/destinations/south-coast-galle/',
      seoTitle: "Galle and Sri Lanka's South Coast | Barclay Travel",
      metaDesc: "Plan a stay around Galle Fort, coastal villages and a cinnamon producer visit on Sri Lanka's southern coast.",
      hero: 'Fort streets, cinnamon and the sea',
      ctaLabel: 'Explore the Southern Coast Tour',
      ctaTourSlug: 'southern-coast-cinnamon',
      image: 'https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?auto=format&fit=crop&w=1400&q=80',
      caption: 'Galle Fort ramparts overlooking the Indian Ocean on Sri Lanka’s southern coast.',
      alt: 'Galle Fort stone ramparts beside the sea in southern Sri Lanka',
      summary: 'Sea air, fortified historic streets, coastal towns and inland cinnamon producer visits.',
      paragraphs: [
        'Galle makes a useful base if you want coast and culture within the same few days. Inside the fortified old town, time on foot gives you a better sense of the narrow streets, courtyards and ramparts. Plan the walk for a cooler part of the day and leave time for a meal or an afternoon by the water.',
        'Beyond Galle, the coastal towns offer different kinds of stays. Choose a beach base for slower mornings, or spend a night near the fort if you prefer restaurants and historic streets within walking distance. An inland cinnamon visit, when a producer is receiving guests, adds a chance to see how the spice is prepared and ask questions about the work involved.',
        'The region is a natural fit for the Southern Coast and Cinnamon Trail. It also works as the last stop after the highlands or a safari. Ask us to match your stay to the kind of coast you enjoy and arrange a private transfer between your hotel, the fort and your next destination.'
      ]
    },
    {
      slug: 'central-highlands',
      name: 'Central Highlands',
      url: '/destinations/central-highlands/',
      seoTitle: 'Sri Lanka Central Highlands and Tea Country | Barclay Travel',
      metaDesc: "Plan a highlands journey through Nuwara Eliya, Ella and Sri Lanka's tea landscapes.",
      hero: 'Take the slower road through tea country',
      ctaLabel: 'Explore the Central Highlands Trail',
      ctaTourSlug: 'central-highlands',
      image: 'https://images.unsplash.com/photo-1546708973-b339540b5162?auto=format&fit=crop&w=1400&q=80',
      caption: 'Morning light across hillside tea estates in Sri Lanka’s Central Highlands.',
      alt: 'Hillside tea plantations in soft morning light in the Central Highlands of Sri Lanka',
      summary: 'Winding tea-country roads, Nuwara Eliya gardens, Ella valley views and optional rail segments.',
      paragraphs: [
        "The Central Highlands change the feel of a Sri Lankan journey. Roads wind through tea slopes and cooler towns, with stretches where a short distance can take a surprisingly long time. Nuwara Eliya offers a place to pause between transfers. Ella makes a good base for valley views and walks chosen around the weather and your group's pace.",
        'A tea visit can be as simple as a tasting or as involved as a producer-led tour, depending on the arrangements available. You could spend another morning in a garden, take a short guided walk or request a longer outing to Horton Plains. Park access, conditions and the suitability of the walk should be checked for your dates. A train segment may also be considered where tickets and the wider route work together.',
        'The Central Highlands Trail gives this region time over several nights. Choose a hillside stay if quiet mornings matter, or a town base if you like to walk to dinner. A private vehicle makes it easier to keep luggage and transfer plans together.'
      ]
    },
    {
      slug: 'knuckles-meemure',
      name: 'Knuckles and Meemure',
      url: '/destinations/knuckles-meemure/',
      seoTitle: 'Knuckles and Meemure | Sri Lanka Mountain Holidays',
      metaDesc: 'Explore guided walks, mountain landscapes and village stays in the Knuckles and Meemure area.',
      hero: 'Mountain days at a village pace',
      ctaLabel: 'Explore the Knuckles and Meemure Trail',
      ctaTourSlug: 'knuckles-meemure',
      image: 'https://images.unsplash.com/photo-1588258524675-c61945a28955?auto=format&fit=crop&w=1400&q=80',
      caption: 'Misty mountain ridges and footpaths in the Knuckles range.',
      alt: 'Mountain ridges and walking paths in the Knuckles range, Sri Lanka',
      summary: 'Guided mountain walks, changing cloud forest weather and unhurried village hospitality.',
      paragraphs: [
        'The Knuckles range is a place to set aside time for walking and looking. A few days here allow space for changing weather, a village meal and a guided outing pitched to the group. Meemure offers one possible base for an itinerary built on landscape and village life. Its access road and local arrangements need checking before the trip is confirmed.',
        'A short walk near your stay may suit travellers who want a gentle introduction. Those seeking more time on foot can ask for a longer guide-led outing, with the route chosen around fitness, weather and permitted access. Village experiences work best when arranged with hosts in advance and allowed enough time to feel unhurried.',
        'The Knuckles and Meemure Trail uses Kandy as a practical gateway and builds in flexibility. We can suggest accommodation and an appropriate local transfer for the access conditions. If heavy rain or poor visibility affects the route, ask about a lower-elevation alternative that still gives you time with a local guide.'
      ]
    },
    {
      slug: 'kandy-matale',
      name: 'Kandy and Matale',
      url: '/destinations/kandy-matale/',
      seoTitle: 'Kandy and Matale | Heritage, Gardens and Spices',
      metaDesc: "Explore Kandy's historic setting and make time for a spice visit in Matale. Find tours and private transport.",
      hero: "From Kandy's lake to Matale's spice country",
      ctaLabel: 'Explore the Spice and Kitchens Tour',
      ctaTourSlug: 'spices-kitchens',
      image: 'https://images.unsplash.com/photo-1590123717647-de5b78776105?auto=format&fit=crop&w=1400&q=80',
      caption: 'Kandy lakeside and surrounding green hills in central Sri Lanka.',
      alt: 'Kandy lake surrounded by lush hills in central Sri Lanka',
      summary: 'Historic lakeside Kandy paired with Matale spice gardens, market walks and cooking sessions.',
      paragraphs: [
        'Kandy is a useful place to pause between the Cultural Triangle and the highlands. A visit can take in the lake area, a market or a sacred site, with time left for a quiet afternoon. If visiting the Temple of the Sacred Tooth Relic is important to you, ask about practical arrangements and appropriate dress before setting out.',
        'North of Kandy, Matale adds a different interest to the trip. A hosted spice visit can show how crops are grown and used in Sri Lankan kitchens. A cooking session or guided market visit gives that story more context, especially if you enjoy asking about ingredients and preparation. Producer visits depend on who is available to host.',
        'The Spice Gardens and Sri Lankan Kitchens itinerary makes food the focus, while the Central Highlands Trail uses Kandy as the first stage before travelling further into the hills. Consider two nights in the area if you want both sightseeing and a slower day. We can arrange transport and suggest a stay that fits your plans.'
      ]
    },
    {
      slug: 'cultural-triangle',
      name: 'Cultural Triangle',
      url: '/destinations/cultural-triangle/',
      seoTitle: 'Sri Lanka Cultural Triangle | Sigiriya and Dambulla',
      metaDesc: 'Plan a heritage stay around Sigiriya, Dambulla and ancient-city sites with private transport and optional guiding.',
      hero: "Give Sri Lanka's ancient sites time",
      ctaLabel: 'Explore the Cultural Triangle Tour',
      ctaTourSlug: 'cultural-triangle',
      image: 'https://images.unsplash.com/photo-1586611292717-f828b167408c?auto=format&fit=crop&w=1400&q=80',
      caption: 'Sigiriya rock fortress rising above the surrounding forest canopy.',
      alt: 'Sigiriya rock fortress viewed above the forest canopy in Sri Lanka',
      summary: 'Single-base heritage stays for Sigiriya, Dambulla cave temples and ancient Polonnaruwa.',
      paragraphs: [
        "A few nights in the Cultural Triangle give you time to visit the region's major sites at a pace that suits you. Sigiriya's rock fortress and Dambulla's cave temple can each have their own morning. Polonnaruwa adds an ancient-city visit, with time best spent on a selection of sites if you prefer fewer stops and more explanation.",
        'Consider keeping the same hotel for much of the visit. It allows you to rest after a climb, change the order if conditions call for it and see something beyond the major monuments. Tell us how comfortable your group is with steps, exposed paths and the heat. We can suggest an alternative viewpoint or shorter visit where appropriate.',
        'The Cultural Triangle Tour is designed around a single regional base and a few focused visits. For a longer journey, match it with Kandy and tea country on Sri Lanka Island Highlights. Ask about an appropriately qualified site guide, private transfers and accommodation near the route that makes sense for your dates.'
      ]
    },
    {
      slug: 'southeast-wildlife',
      name: 'Southeast wildlife region',
      url: '/destinations/southeast-wildlife/',
      seoTitle: 'Yala and Udawalawe Safari Holidays | Barclay Travel',
      metaDesc: 'Plan a southeast Sri Lanka trip with guided safari excursions, suitable overnight bases and coastal add-ons.',
      hero: "Early mornings in Sri Lanka's wildlife country",
      ctaLabel: 'Explore Wildlife and the Southeast',
      ctaTourSlug: 'wildlife-southeast',
      image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1400&q=80',
      caption: 'Asian elephant observed in open habitat in southeast Sri Lanka.',
      alt: 'Wild elephant in open grassland habitat in southeastern Sri Lanka',
      summary: 'Early-morning safaris in Udawalawe and Yala with gate-convenient overnight bases.',
      paragraphs: [
        'A wildlife trip works best when there is time for early starts and unhurried afternoons. Udawalawe and the Yala area can be combined over several nights, with a different base for each park. Staying near the relevant entry point gives you more flexibility to plan the excursion and less time on the road before it begins.',
        'Safaris use an arranged park vehicle and the applicable entry procedures. The park, gate and drive time are confirmed for your dates. A guide can help you notice birds, tracks and changes in habitat even on a quiet day. Wildlife moves freely and sightings vary. Ask about comfort, boarding the vehicle and expected time in the park if anyone in the group has mobility needs.',
        'The Wildlife and the Southeast itinerary combines two possible excursions with time between them. A coastal finish can make a pleasant change after the early mornings. We can suggest lodging near the relevant access point and coordinate road transfers between your stays, with the safari arrangements identified separately in your quote.'
      ]
    },
    {
      slug: 'east-coast',
      name: 'East Coast',
      url: '/destinations/east-coast/',
      seoTitle: 'Sri Lanka East Coast | Trincomalee and Batticaloa',
      metaDesc: 'Explore the East Coast with time for Trincomalee, Batticaloa, coastal stays and local food.',
      hero: 'Two coastal towns and time by the water',
      ctaLabel: 'Explore Eastern Coast and Coastal Culture',
      ctaTourSlug: 'eastern-coast',
      image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1400&q=80',
      caption: 'Calm daylight shoreline along Sri Lanka’s eastern coast.',
      alt: 'Sandy beach and clear coastal water on Sri Lanka’s East Coast',
      summary: 'Trincomalee heritage and bays paired with Batticaloa and Pasikuda lagoons.',
      paragraphs: [
        'Trincomalee and the Batticaloa area make good anchors for a holiday that gives the east its own time. In Trincomalee, alternate a town or heritage visit with a beach afternoon. Further south, a stay around Batticaloa or Pasikuda changes the pace and gives you time for lagoon views, coastal food and a slower morning.',
        "Plan sea-based activities around the season, local conditions and the operator's advice. Tell us whether you want a beach-first holiday or would rather use the coast as a base for markets and heritage visits. We can suggest when to keep the afternoon free and which activities to request in advance.",
        'The Eastern Coast and Coastal Culture itinerary divides the week between two bases, with a flexible arrival or departure arrangement. If your flights leave little time for a long final transfer, add a night nearer the airport or continue inland before returning west. Ask us about coastal accommodation and the private transfers that will work with your flight times and luggage.'
      ]
    },
    {
      slug: 'jaffna-north',
      name: 'Jaffna and the North',
      url: '/destinations/jaffna-north/',
      seoTitle: 'Jaffna and Northern Sri Lanka | Barclay Travel',
      metaDesc: "Discover Jaffna's food, heritage and palmyra landscapes with a private northern itinerary.",
      hero: 'Explore the peninsula from a Jaffna base',
      ctaLabel: 'Explore Jaffna and the Northern Peninsula',
      ctaTourSlug: 'jaffna-north',
      image: 'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?auto=format&fit=crop&w=1400&q=80',
      caption: 'Palmyra palms and coastal peninsula roads in northern Sri Lanka.',
      alt: 'Palmyra palm trees along a level road on the Jaffna peninsula',
      summary: 'Peninsula drives framed by palmyra palms, northern culinary traditions and historic streets.',
      paragraphs: [
        'A stay in Jaffna gives you time to explore the north through its food, streets and peninsula landscapes. Spend part of a day in the city, then use the next morning for a short drive past palmyra palms and coastal settlements. A market visit or a meal arranged around local cooking can give you a sense of the region beyond the main sights.',
        "Northern itineraries benefit from a few nights in one place. It is easier to adjust the order around a site's visiting hours and leave space for a longer meal or a conversation with your guide. Check access before travelling to specific sites or islands. Ask us to build any ferry-dependent outing around the timetable and a workable mainland alternative.",
        'The Jaffna and Northern Peninsula itinerary starts and finishes in Jaffna to make room for the peninsula itself. If you are coming from Colombo or the Cultural Triangle, we can quote a separate transfer or help work the northern stay into a longer private trip.'
      ]
    }
  ],

  holidayTypes: [
    {
      id: 'beach-coastal',
      title: 'Beach and coastal holidays',
      icon: 'waves',
      paragraphs: [
        'Choose where to stay according to how you want to spend your mornings. A base near Galle makes it easy to combine the coast with a walk around the fort. An East Coast stay can give you more time around Trincomalee, Pasikuda or Batticaloa, depending on the route and the conditions for your dates. Tell us if you want a quiet shore, a pool, somewhere to walk to dinner or a property with family rooms.',
        'We can plan several nights in one place or build a coastal stay into a longer holiday with tea country and heritage sites. Ask us to check swimming conditions locally and confirm any boat trip or water activity with its operator. Add a private transfer if you want to travel straight from the airport or avoid coordinating multiple vehicles.',
        'Browse the Southern Coast and Eastern Coast itineraries for different ways to spend time by the water.'
      ],
      relatedTours: [
        { label: 'Southern Coast and Cinnamon Trail', slug: 'southern-coast-cinnamon' },
        { label: 'Eastern Coast and Coastal Culture', slug: 'eastern-coast' }
      ]
    },
    {
      id: 'culture-heritage',
      title: 'Culture and heritage',
      icon: 'landmark',
      paragraphs: [
        'Build your trip around a handful of places you want to understand in more depth. You can walk through Galle Fort with time to notice the layers of its streets, spend a morning at Sigiriya, and set aside another day for part of an ancient city. An itinerary with fewer stops can leave more time for the stories that sit behind the architecture.',
        'Tell us if you prefer a private guide, independent time at a site or a mix of both. Let us know about mobility needs or concerns about stairs and heat so we can discuss practical options. At sacred sites, ask ahead about dress and visiting arrangements. Where possible, we can plan your accommodation close enough to allow an early start or a rest between visits. The Cultural Triangle Tour and Kandy and Matale guide are good starting points for a heritage-led itinerary. Add the South Coast if you would like the trip to finish with time on foot in Galle.'
      ],
      relatedTours: [
        { label: 'Cultural Triangle Tour', slug: 'cultural-triangle' },
        { label: 'Kandy and Matale Guide', destSlug: 'kandy-matale' }
      ]
    },
    {
      id: 'wildlife-holidays',
      title: 'Wildlife holidays',
      icon: 'binoculars',
      paragraphs: [
        'Plan your safari around time in the landscape. An early drive can be followed by lunch and an afternoon at your lodge, with space to rest before another transfer. Ask us about staying near the intended park gate, what the vehicle will be like and how long an excursion may take. The particular gate and park arrangements are confirmed for your dates.',
        'Udawalawe and the Yala area can form part of the same trip with separate bases and space between drives. A local guide can help you make sense of habitats, birdlife and tracks. Individual sightings vary, so think about what else would make the day worthwhile. If a gate, road or park becomes unavailable, discuss a suitable local alternative before travel. Our Wildlife and the Southeast itinerary shows one way to combine safari time with a coastal finish. Ask for a quote that identifies park entry, vehicle and guide costs individually.'
      ],
      relatedTours: [
        { label: 'Wildlife and the Southeast', slug: 'wildlife-southeast' }
      ]
    },
    {
      id: 'hill-country-walking',
      title: 'Hill country and walking',
      icon: 'mountain',
      paragraphs: [
        "A walking holiday can begin with short outings between tea-country stays or with several days based near the Knuckles range. Tell us how much time you want to spend on foot and whether you are comfortable on uneven ground, exposed steps and steep paths. We can suggest walks that suit the group and plan road transfers with room for the hills' slower pace.",
        'In the highlands, a morning outing can be followed by a tea visit or an afternoon in town. A more remote village base needs extra attention to road access, weather and the choice of vehicle. Ask for a guide where the trail or local arrangements call for one, and keep an alternative in mind if conditions change. Try the Central Highlands Trail for tea country and short outings, or the Knuckles and Meemure Trail for a trip shaped around the mountains. Both can be planned with a private car or van and guided walking where confirmed.'
      ],
      relatedTours: [
        { label: 'Central Highlands Trail', slug: 'central-highlands' },
        { label: 'Knuckles and Meemure Trail', slug: 'knuckles-meemure' }
      ]
    },
    {
      id: 'food-plantation',
      title: 'Food and plantation experiences',
      icon: 'utensils',
      paragraphs: [
        'Follow the ingredients you encounter at the table. A planned visit might take you to cinnamon country inland from the south coast, to a spice host near Matale or to a tea producer in the hills. At a market, ask a guide or host to help you recognise ingredients before taking them back to a kitchen for a demonstration or meal.',
        "We can propose a route around one or two visits that suit your group and the hosts' schedules. If you are interested in the work behind an ingredient, tell us whether you would rather watch, take part in a session or spend more time over a tasting. Share dietary requirements and allergies early so we can check what the host can accommodate. Start with Spice Gardens and Sri Lankan Kitchens or Southern Coast and Cinnamon Trail. Producer and cooking visits are arranged for your dates where hosts are available."
      ],
      relatedTours: [
        { label: 'Spice Gardens and Sri Lankan Kitchens', slug: 'spices-kitchens' },
        { label: 'Southern Coast and Cinnamon Trail', slug: 'southern-coast-cinnamon' }
      ]
    },
    {
      id: 'wellness-holidays',
      title: 'Wellness holidays',
      icon: 'leaf',
      paragraphs: [
        'Make room for a slower day or a short stay built around rest. You could ask for accommodation close to a forest garden, a guided nature walk, a gentle movement session or time to sit outdoors. Itineraries can also include a traditional meal, a creative leaf activity or a quiet evening, depending on the host and programme available.',
        'Tell us whether wellness is the focus of your holiday or something you would like to add after several busy days. We can suggest where a session would fit naturally, how to get there and whether you should stay nearby. Any treatment or Ayurveda appointment depends on an appropriate provider and a separate discussion of what the session involves. Share accessibility or dietary requirements before booking so we can check practical arrangements. The Forest Wellness and Village Retreat offers a short itinerary that can stand on its own or be added before a flight or after a longer tour.'
      ],
      relatedTours: [
        { label: 'Forest Wellness and Village Retreat', slug: 'forest-wellness-village' }
      ]
    },
    {
      id: 'family-travel',
      title: 'Family travel',
      icon: 'users',
      paragraphs: [
        "A family itinerary works best when each day has room to change pace. A shared car or van can make it easier to manage bags, snacks and unexpected stops. Choose a few bases, with time between major sights for swimming where conditions allow, a meal together or an afternoon back at the hotel. Tell us the children's ages and what keeps them interested on longer drives.",
        'We can check room configurations, child-seat availability and activities against the needs of your group. A wildlife outing or cooking visit can work well when the timing, vehicle and host are suitable. We can also suggest alternatives for early starts, steep climbs or long transfers. Begin with the Southern Coast and Cinnamon Trail for a slower coastal break, or use Sri Lanka Island Highlights as a starting point and shorten the route. Share your flight times so the first and last days are comfortable for everyone.'
      ],
      relatedTours: [
        { label: 'Southern Coast and Cinnamon Trail', slug: 'southern-coast-cinnamon' },
        { label: 'Sri Lanka Island Highlights', slug: 'island-highlights' }
      ]
    },
    {
      id: 'guided-motorcycle-touring',
      title: 'Guided motorcycle touring',
      icon: 'bike',
      paragraphs: [
        'A private guided ride gives a group the opportunity to spend time on Sri Lanka’s roads and stop for the places along them. We can discuss daily riding time, the riding experience in your group, the type of motorcycle you prefer and how you want to spend the off-bike hours. There may be room for a tea producer visit, a coast stay or an afternoon in a village, depending on the route.',
        'Motorcycle versions of suitable holiday itineraries depend on road access, weather, qualified guides, serviceable fleet and rider eligibility. Ask about licence documents, protective gear, luggage and backup arrangements before making commitments. A car or van option can also be discussed for companions, with space and logistics confirmed in the quote. If you are looking for a dated group event with staged joining options, explore The Ceylon Grand Ride. For a year-round private trip, use Plan My Trip and tell us how much time you want to spend riding each day.'
      ],
      relatedTours: [
        { label: 'The Ceylon Grand Ride (Annual Event)', routeUrl: '/ceylon-grand-ride/' }
      ]
    }
  ],

  tours: [
    {
      slug: 'southern-coast-cinnamon',
      title: 'Southern Coast and Cinnamon Trail',
      duration: '5 days',
      daysCount: 5,
      routeSummary: 'Colombo or airport to Colombo or airport',
      transport: 'Private car or van',
      category: 'Sample itinerary',
      url: '/tours/southern-coast-cinnamon/',
      seoTitle: '5-Day Southern Coast and Cinnamon Trail | Barclay Travel Sri Lanka',
      metaDesc: 'Explore this 5-day sample private Sri Lanka tour from Colombo or airport to Colombo or airport. Request a tailored itinerary and quote.',
      image: 'https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?auto=format&fit=crop&w=1400&q=80',
      caption: 'Galle Fort ramparts above the Indian Ocean.',
      suitableFor: 'Couples, families and leisurely travellers',
      optional: 'A second beach afternoon or an arranged cooking session.',
      relatedDestSlug: 'south-coast-galle',
      overview: [
        "Start on Sri Lanka's southwest coast and make Galle your base for a few days of old streets, coastal meals and a visit into cinnamon country. This trip is built to give the fort a morning of its own and leave time to sit down for lunch, walk the ramparts or return later for an evening stroll. You can choose a room inside the fort or a coastal property with easier access to the water.",
        "A hosted cinnamon visit adds a look at the people and work behind the spice. Tell us if you would prefer a demonstration, a tasting or time to talk with a producer. The visit depends on the host's availability. The following day is intentionally open, so your group can choose a shorter town outing or another day by the coast.",
        'The final drive returns west. If your onward flight is early, we can arrange an airport-area stay separately.'
      ],
      days: [
        { day: 1, highlight: 'Transfer to Galle; settle in and take a short local walk if time allows.', overnight: 'Galle' },
        { day: 2, highlight: 'Explore Galle Fort on foot; leave the afternoon free.', overnight: 'Galle' },
        { day: 3, highlight: 'Visit a cinnamon producer inland, subject to host confirmation; return to the coast.', overnight: 'Galle' },
        { day: 4, highlight: 'Take a slow beach day or a short local outing, depending on conditions.', overnight: 'Galle area' },
        { day: 5, highlight: 'Travel west by private road transfer.', overnight: 'Colombo or airport drop-off' }
      ]
    },
    {
      slug: 'central-highlands',
      title: 'Central Highlands Trail',
      duration: '7 days',
      daysCount: 7,
      routeSummary: 'Colombo to Colombo',
      transport: 'Private car or van',
      category: 'Sample itinerary',
      url: '/tours/central-highlands/',
      seoTitle: '7-Day Central Highlands Trail | Barclay Travel Sri Lanka',
      metaDesc: 'Explore this 7-day sample private Sri Lanka tour from Colombo to Colombo. Request a tailored itinerary and quote.',
      image: 'https://images.unsplash.com/photo-1546708973-b339540b5162?auto=format&fit=crop&w=1400&q=80',
      caption: 'Tea slopes near Nuwara Eliya with a visible local path.',
      suitableFor: 'Travellers who enjoy scenery, tea and flexible walks',
      optional: 'Horton Plains with access confirmed, or a separate train segment if ticketed.',
      relatedDestSlug: 'central-highlands',
      overview: [
        'Spend a week travelling from Kandy through the tea country to Ella, with enough nights in each place to avoid making the hills a series of roadside stops. Kandy gives you a first day to walk near the lake or arrange a heritage visit. The next drive leads into tea landscapes, where you can settle in before choosing a producer visit or a walk.',
        'Use one morning near Nuwara Eliya for a longer outing if access, weather and fitness allow. A garden or market visit can suit guests who prefer a gentler day. Ella is the final highland base. Leave a morning open for a view, a short guided walk or a slower breakfast before travelling west.',
        'The sample route uses a car or van throughout. If you want a train segment, ask whether tickets and the road handover work for your dates. The last day is a dedicated return transfer, so consider an additional airport-area night before an early flight.'
      ],
      days: [
        { day: 1, highlight: 'Drive to Kandy and settle in.', overnight: 'Kandy' },
        { day: 2, highlight: 'Visit the lakeside and choose a heritage stop or market visit.', overnight: 'Kandy' },
        { day: 3, highlight: 'Travel to Nuwara Eliya with an arranged tea stop if available.', overnight: 'Nuwara Eliya' },
        { day: 4, highlight: 'Choose a local garden outing or an early Horton Plains visit subject to access.', overnight: 'Nuwara Eliya' },
        { day: 5, highlight: 'Drive to Ella; keep the afternoon for the town or your stay.', overnight: 'Ella' },
        { day: 6, highlight: 'Choose a guided short walk or a valley viewpoint with time to rest.', overnight: 'Ella' },
        { day: 7, highlight: 'Allow the day for the westbound road journey.', overnight: 'Colombo drop-off' }
      ]
    },
    {
      slug: 'knuckles-meemure',
      title: 'Knuckles and Meemure Trail',
      duration: '5 days',
      daysCount: 5,
      routeSummary: 'Kandy to Kandy',
      transport: 'Private car or van',
      category: 'Sample itinerary',
      url: '/tours/knuckles-meemure/',
      seoTitle: '5-Day Knuckles and Meemure Trail | Barclay Travel Sri Lanka',
      metaDesc: 'Explore this 5-day sample private Sri Lanka tour from Kandy to Kandy. Request a tailored itinerary and quote.',
      image: 'https://images.unsplash.com/photo-1588258524675-c61945a28955?auto=format&fit=crop&w=1400&q=80',
      caption: 'Guided walkers in the Knuckles foothills on an approved path.',
      suitableFor: 'Walkers comfortable with rural facilities and variable weather',
      optional: 'A longer guided walk or a host-arranged village meal.',
      relatedDestSlug: 'knuckles-meemure',
      overview: [
        'This trip uses Kandy as the gateway to a few days of village life and mountain walks. Start with a night in the city, then move towards a foothill base selected for road conditions and the interests of your group. If the approach is suitable and the host can receive you, spend time around Meemure. A nearby base with more reliable access can serve the same purpose when conditions change.',
        'The walking days can be gentle or more demanding. Tell us how comfortable you are on slopes and uneven ground. We can ask a local guide to propose an appropriate route and identify an alternative if rain or poor visibility affects the hills. A village meal or an afternoon at your stay gives the trip space between outings.',
        'The plan keeps the final mountain day flexible and returns to Kandy by road. If you need airport transport, allow additional time and request that transfer separately.'
      ],
      days: [
        { day: 1, highlight: 'Meet in Kandy; discuss walking preferences and access with the guide.', overnight: 'Kandy' },
        { day: 2, highlight: 'Drive towards the foothills in a vehicle suited to current conditions.', overnight: 'Knuckles foothills or approved village base' },
        { day: 3, highlight: 'Take a guided walk on a permitted route or a lower-level alternative.', overnight: 'Same base' },
        { day: 4, highlight: 'Visit Meemure if access allows, or spend time with a host near the base.', overnight: 'Same base' },
        { day: 5, highlight: 'Return by road after a short morning stop if conditions permit.', overnight: 'Kandy drop-off' }
      ]
    },
    {
      slug: 'cultural-triangle',
      title: 'Cultural Triangle Tour',
      duration: '5 days',
      daysCount: 5,
      routeSummary: 'Colombo to Kandy',
      transport: 'Private car or van',
      category: 'Sample itinerary',
      url: '/tours/cultural-triangle/',
      seoTitle: '5-Day Cultural Triangle Tour | Barclay Travel Sri Lanka',
      metaDesc: 'Explore this 5-day sample private Sri Lanka tour from Colombo to Kandy. Request a tailored itinerary and quote.',
      image: 'https://images.unsplash.com/photo-1586611292717-f828b167408c?auto=format&fit=crop&w=1400&q=80',
      caption: 'Sigiriya framed by established forest from a permitted viewpoint.',
      suitableFor: 'Heritage travellers, couples and families with adaptable plans',
      optional: 'An arranged site guide or an alternative to the Sigiriya climb.',
      relatedDestSlug: 'cultural-triangle',
      overview: [
        'Base yourself near Sigiriya or Dambulla and give the Cultural Triangle several mornings of its own. The route pairs Sigiriya with Dambulla and a separate day in Polonnaruwa. A single accommodation base means you can return to a familiar place after each visit, swap the order for weather or rest and avoid packing every morning.',
        'Sigiriya is a good early outing for travellers comfortable with steps. If someone would prefer to skip the climb, tell us so we can suggest a shorter visit or a viewpoint. Dambulla allows time for a cave-temple visit, subject to site arrangements. A guide at Polonnaruwa can help you pick a manageable sequence rather than trying to cover the entire site in one go.',
        'The trip ends in Kandy, making it easy to add the highlands or ask for a return transfer west. Discuss mobility, heat and early starts when you enquire so the site visits can match your group.'
      ],
      days: [
        { day: 1, highlight: 'Drive from Colombo to the chosen regional base.', overnight: 'Sigiriya or Dambulla' },
        { day: 2, highlight: 'Visit Sigiriya early, with a lower-impact option for part of the group.', overnight: 'Same base' },
        { day: 3, highlight: 'Visit Dambulla and leave the afternoon unplanned.', overnight: 'Same base' },
        { day: 4, highlight: 'Explore selected sites at Polonnaruwa and return to your base.', overnight: 'Same base' },
        { day: 5, highlight: 'Transfer south to Kandy with a short stop if practical.', overnight: 'Kandy drop-off' }
      ]
    },
    {
      slug: 'wildlife-southeast',
      title: 'Wildlife and the Southeast',
      duration: '5 days',
      daysCount: 5,
      routeSummary: 'Colombo to Galle',
      transport: 'Private car or van',
      category: 'Sample itinerary',
      url: '/tours/wildlife-southeast/',
      seoTitle: '5-Day Wildlife and the Southeast | Barclay Travel Sri Lanka',
      metaDesc: 'Explore this 5-day sample private Sri Lanka tour from Colombo to Galle. Request a tailored itinerary and quote.',
      image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1400&q=80',
      caption: 'An elephant in open habitat from a permitted safari vehicle.',
      suitableFor: 'Wildlife travellers comfortable with early starts and safari vehicles',
      optional: 'Bird-focused guiding or an additional night on the coast.',
      relatedDestSlug: 'southeast-wildlife',
      overview: [
        'Build a short wildlife holiday around two different landscapes, with separate accommodation bases for Udawalawe and the Yala area. This gives you a more practical start for each safari and leaves time to rest after the drive. The programme makes room for two park outings where arrangements allow, with a separate private road vehicle for travel between regions.',
        'Ask about the safari vehicle, gate, expected journey length and what you should bring. A quiet drive can still be interesting if you have time to watch birds and hear about habitats. Individual sightings vary. If an outing is affected by access or operating conditions, we can discuss a revised plan before the visit.',
        'The trip finishes towards Galle. Keep the final day for the coastal transfer, or extend the journey with a beach stay around the south coast. If you are travelling with children or anyone with mobility needs, tell us early so we can check boarding arrangements and whether the proposed drive length is suitable.'
      ],
      days: [
        { day: 1, highlight: 'Transfer from Colombo to the Udawalawe area.', overnight: 'Udawalawe area' },
        { day: 2, highlight: 'Take an arranged Udawalawe safari, subject to permits and conditions.', overnight: 'Udawalawe area' },
        { day: 3, highlight: 'Drive to the Tissamaharama area and keep the afternoon free.', overnight: 'Tissamaharama area' },
        { day: 4, highlight: 'Visit Yala in an arranged park vehicle if the selected gate and permits are confirmed.', overnight: 'Tissamaharama area' },
        { day: 5, highlight: 'Drive west to Galle with a meal stop along the coast.', overnight: 'Galle drop-off' }
      ]
    },
    {
      slug: 'spices-kitchens',
      title: 'Spice Gardens and Sri Lankan Kitchens',
      duration: '4 days',
      daysCount: 4,
      routeSummary: 'Kandy to Kandy',
      transport: 'Private car or van',
      category: 'Sample itinerary',
      url: '/tours/spices-kitchens/',
      seoTitle: '4-Day Spice Gardens and Sri Lankan Kitchens | Barclay Travel Sri Lanka',
      metaDesc: 'Explore this 4-day sample private Sri Lanka tour from Kandy to Kandy. Request a tailored itinerary and quote.',
      image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=1400&q=80',
      caption: 'Fresh spices and traditional Sri Lankan culinary ingredients.',
      suitableFor: 'Food-focused travellers and small private groups',
      optional: 'A market tasting or a regional cooking activity.',
      relatedDestSlug: 'kandy-matale',
      overview: [
        'Follow a few ingredients from the field or market to the kitchen on a short trip based around Kandy and Matale. The route gives a hosted spice visit and a cooking session separate days, so there is time to ask how the ingredients are selected and used. Expect a flexible itinerary shaped around willing hosts and the activities they can offer on your dates.',
        'A market walk can introduce you to produce and seasonings before you sit down for a meal. Around Matale, ask a host to talk through the crops they work with. On the cooking day, you can request a demonstration or a participatory session depending on the kitchen and your interests.',
        'Stay in or around Kandy to keep transfers straightforward. Tell us about allergies, dietary needs and whether you would rather observe or take part. We can check these details before confirming a host. The trip also works as a short addition before a highlands or Cultural Triangle holiday.'
      ],
      days: [
        { day: 1, highlight: 'Meet in Kandy and take a short introductory market walk if appropriate.', overnight: 'Kandy' },
        { day: 2, highlight: 'Travel to an arranged Matale spice visit; return after lunch.', overnight: 'Kandy' },
        { day: 3, highlight: 'Join a hosted cooking session and meal, subject to arrangements.', overnight: 'Kandy' },
        { day: 4, highlight: 'Leave time for a local breakfast or market stop before drop-off.', overnight: 'Kandy drop-off' }
      ]
    },
    {
      slug: 'eastern-coast',
      title: 'Eastern Coast and Coastal Culture',
      duration: '7 days',
      daysCount: 7,
      routeSummary: 'Trincomalee to Batticaloa',
      transport: 'Private car or van',
      category: 'Sample itinerary',
      url: '/tours/eastern-coast/',
      seoTitle: '7-Day Eastern Coast and Coastal Culture | Barclay Travel Sri Lanka',
      metaDesc: 'Explore this 7-day sample private Sri Lanka tour from Trincomalee to Batticaloa. Request a tailored itinerary and quote.',
      image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1400&q=80',
      caption: 'A clearly identified east-coast beach and lagoon at daylight.',
      suitableFor: 'Travellers who prefer two bases and several unscheduled afternoons',
      optional: 'A locally approved sea outing where conditions allow.',
      relatedDestSlug: 'east-coast',
      overview: [
        'A week on the east coast gives Trincomalee and the Batticaloa area time to feel like destinations in their own right. Begin with a few nights in Trincomalee, allowing a town or heritage visit and a separate day by the sea. Travel south to a base near Batticaloa or Pasikuda for lagoon views, coastal food and an easier final pace.',
        'Talk to us about where you would rather stay and what you want from the water. Some guests prefer a beach and a pool, while others would choose a market visit or a day around the lagoon. Sea activities depend on season, actual conditions and local operator advice. We can keep a shore-based alternative on the itinerary.',
        'The sample starts in Trincomalee and finishes in Batticaloa, so the longer cross-island journeys can be arranged around your onward plans. Ask for an additional transfer and consider an airport-area night if you are returning west for an early flight.'
      ],
      days: [
        { day: 1, highlight: 'Meet in Trincomalee; settle at your coastal base.', overnight: 'Trincomalee area' },
        { day: 2, highlight: 'Explore town and a heritage stop where open.', overnight: 'Trincomalee area' },
        { day: 3, highlight: 'Spend a flexible beach day or request a local outing.', overnight: 'Trincomalee area' },
        { day: 4, highlight: 'Transfer to the Batticaloa or Pasikuda area.', overnight: 'Batticaloa or Pasikuda' },
        { day: 5, highlight: 'Visit Batticaloa and make time for food and lagoon views.', overnight: 'Same base' },
        { day: 6, highlight: 'Keep the day free for the coast or a shore-based alternative.', overnight: 'Same base' },
        { day: 7, highlight: 'Transfer locally to the agreed finish point.', overnight: 'Batticaloa drop-off' }
      ]
    },
    {
      slug: 'jaffna-north',
      title: 'Jaffna and the Northern Peninsula',
      duration: '6 days',
      daysCount: 6,
      routeSummary: 'Jaffna to Jaffna',
      transport: 'Private car or van',
      category: 'Sample itinerary',
      url: '/tours/jaffna-north/',
      seoTitle: '6-Day Jaffna and the Northern Peninsula | Barclay Travel Sri Lanka',
      metaDesc: 'Explore this 6-day sample private Sri Lanka tour from Jaffna to Jaffna. Request a tailored itinerary and quote.',
      image: 'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?auto=format&fit=crop&w=1400&q=80',
      caption: 'Palmyra palms beside a level peninsula road in northern Sri Lanka.',
      suitableFor: 'Guests interested in regional food, heritage and quiet drives',
      optional: 'An island excursion subject to ferry operations and access.',
      relatedDestSlug: 'jaffna-north',
      overview: [
        'Settle in Jaffna for five nights and explore the peninsula from one base. Begin in the city, where a market and a meal are good ways to get your bearings. Use separate days for heritage and a peninsula drive through palmyra country, with stops selected for opening arrangements and the interests of your group.',
        'The north is worth time at the table. Ask for an arranged meal or time with a guide who can introduce you to regional ingredients. If you are interested in visiting an island, we can check ferry schedules and local access before proposing it. An inland or coastal mainland outing gives you another option for that day.',
        'The itinerary starts locally and keeps the last morning short. Ask us to arrange road travel before or after the stay or to link Jaffna to an inland itinerary. With few hotel changes, you can adjust outings around heat, opening hours or the time you would like to spend in town.'
      ],
      days: [
        { day: 1, highlight: 'Meet in Jaffna and settle into your base.', overnight: 'Jaffna' },
        { day: 2, highlight: 'Explore the city, with a market or an authorised heritage stop.', overnight: 'Jaffna' },
        { day: 3, highlight: 'Drive through the peninsula with short coastal or village stops.', overnight: 'Jaffna' },
        { day: 4, highlight: 'Arrange a regional meal and a flexible cultural visit.', overnight: 'Jaffna' },
        { day: 5, highlight: 'Consider an island outing if access is confirmed, or choose a mainland circuit.', overnight: 'Jaffna' },
        { day: 6, highlight: 'Finish with a short morning and local drop-off.', overnight: 'Jaffna drop-off' }
      ]
    },
    {
      slug: 'forest-wellness-village',
      title: 'Forest Wellness and Village Retreat',
      duration: '3 days',
      daysCount: 3,
      routeSummary: 'Colombo to Colombo',
      transport: 'Private car or van',
      category: 'Sample itinerary',
      url: '/tours/forest-wellness-village/',
      seoTitle: '3-Day Forest Wellness and Village Retreat | Barclay Travel Sri Lanka',
      metaDesc: 'Explore this 3-day sample private Sri Lanka tour from Colombo to Colombo. Request a tailored itinerary and quote.',
      image: 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&w=1400&q=80',
      caption: 'A quiet guided walk in a lush Sri Lankan forest garden.',
      suitableFor: 'Couples, solo travellers and small groups seeking a gentle programme',
      optional: 'Forest-garden activities in Panadura, subject to host and programme confirmation.',
      relatedDestSlug: 'south-coast-galle',
      overview: [
        "Build a short break around rest, nature and a stay within reach of Colombo. Choose a base near the planned experiences and leave the first afternoon free to settle. The main day can include a gentle forest-garden walk, a seasonal meal and time to try a simple leaf-printing activity or a quiet listening session, subject to the host's programme.",
        'Tell us what kind of pace suits you and whether you would like gentle yoga or another optional wellness session. We can check facilitator availability and suggest a shorter walk or more time at the accommodation. Tell us about access needs or dietary requirements when you enquire. Your quote will say which experiences can be confirmed.',
        'The final morning stays light so you can continue south, return to Colombo or arrange a separate airport transfer. This retreat works as a short holiday in its own right, or as time to pause after a longer journey around the island.'
      ],
      days: [
        { day: 1, highlight: 'Drive to the agreed Panadura-area base and settle in.', overnight: 'Panadura area' },
        { day: 2, highlight: 'Join confirmed nature and wellness activities with a local meal where available.', overnight: 'Same base' },
        { day: 3, highlight: 'Keep the morning free and return by private vehicle.', overnight: 'Colombo drop-off' }
      ]
    },
    {
      slug: 'island-highlights',
      title: 'Sri Lanka Island Highlights',
      duration: '10 days',
      daysCount: 10,
      routeSummary: 'Colombo to Galle',
      transport: 'Private car or van',
      category: 'Sample itinerary',
      url: '/tours/island-highlights/',
      seoTitle: '10-Day Sri Lanka Island Highlights | Barclay Travel Sri Lanka',
      metaDesc: 'Explore this 10-day sample private Sri Lanka tour from Colombo to Galle. Request a tailored itinerary and quote.',
      image: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=1400&q=80',
      caption: 'A roadside highland viewpoint along a private Sri Lankan touring route.',
      suitableFor: 'First-time visitors who want varied landscapes and a coastal finish',
      optional: 'A tea tasting, guided heritage visit or extra nights at the coast.',
      relatedDestSlug: 'cultural-triangle',
      overview: [
        'This ten-day route gives first-time visitors a way to combine ancient sites, tea country, wildlife and the south coast without revisiting the same roads each day. Begin near Sigiriya with time to choose a heritage visit, then travel through Kandy and spend a night in tea country before reaching Ella. Keep the main Highland transfer days simple so there is time to stop along the way.',
        'The southeastern stage adds a night near the chosen wildlife access point. Ask about arranging a safari near Udawalawe, with a private vehicle for the onward coastal transfer. If a park outing cannot be arranged, use the time for a slower morning and a comfortable drive south.',
        'Finish with time in Galle to walk the fort or take a short coastal outing. The itinerary ends locally. If you have a flight to catch, an additional road transfer or airport-area stay can be arranged around the departure time.'
      ],
      days: [
        { day: 1, highlight: 'Transfer from Colombo to the Cultural Triangle.', overnight: 'Sigiriya or Dambulla' },
        { day: 2, highlight: 'Choose an early Sigiriya visit and a quiet afternoon.', overnight: 'Same base' },
        { day: 3, highlight: 'Visit Dambulla, then travel south to Kandy.', overnight: 'Kandy' },
        { day: 4, highlight: 'Explore a chosen Kandy site and leave time for the lake area.', overnight: 'Kandy' },
        { day: 5, highlight: 'Drive into tea country, with an arranged producer stop if available.', overnight: 'Nuwara Eliya' },
        { day: 6, highlight: 'Transfer to Ella and keep the afternoon easy.', overnight: 'Ella' },
        { day: 7, highlight: 'Take a short walk or viewpoint outing; leave the rest of the day open.', overnight: 'Ella' },
        { day: 8, highlight: 'Drive to the Udawalawe area and settle near the planned gate.', overnight: 'Udawalawe area' },
        { day: 9, highlight: 'Take a confirmed morning safari if available, then drive to Galle.', overnight: 'Galle' },
        { day: 10, highlight: 'Walk in Galle Fort or choose a coast stop before local drop-off.', overnight: 'Galle drop-off' }
      ]
    }
  ],

  grandRideStages: [
    { duration: '3 or 5 days', expect: 'A regional stage or short sequence of linked stages' },
    { duration: '7 or 10 days', expect: 'Supported multi-stop rides with off-bike activities' },
    { duration: '12 or 14 days', expect: 'Longer programmes with scheduled recovery time' },
    { duration: '20 days', expect: 'Travel across several regions, with handovers to be confirmed' },
    { duration: 'Up to 30 days', expect: 'The entire expedition window, including planned activity and transfer days' }
  ],

  faqs: [
    { q: 'Can you change a sample itinerary?', a: 'Yes. Tell us which places, dates or activities you want to change and we will check what fits.' },
    { q: 'When is my hotel or vehicle reserved?', a: 'The booking confirmation identifies confirmed services. A quotation or supplier check can still be pending.' },
    { q: 'Will I pay a deposit or the full amount?', a: 'The amount due and any balance date appear in your approved quote and checkout.' },
    { q: 'Can I change or cancel a booking?', a: 'Contact us with your reference. We will explain the available options under your accepted booking terms.' },
    { q: 'Can I drive or ride myself?', a: 'Ask us to check the applicable licence, vehicle eligibility and rental terms before booking.' },
    { q: 'Is the Grand Ride part of my private tour?', a: 'The annual event has its own participation arrangements. A private tour is arranged around your travel dates.' }
  ],

  bookingStatuses: [
    { label: 'Enquiry received', copy: 'Thank you. We have received your enquiry [reference]. We will check your request and contact you with the next steps.', badge: 'bg-ceylon-100 text-ceylon-900' },
    { label: 'Awaiting supplier confirmation', copy: 'We are checking [service] for [dates]. We will update you once the supplier responds.', badge: 'bg-amber-100 text-amber-900' },
    { label: 'Awaiting payment', copy: 'Your quote is ready. Review the services, amount due and booking terms before paying.', badge: 'bg-blue-100 text-blue-900' },
    { label: 'Payment received', copy: 'We received [amount and currency] for [reference]. Your current booking status is [status]. Keep this receipt for your records.', badge: 'bg-emerald-100 text-emerald-900' },
    { label: 'Payment pending', copy: 'We are checking your payment. Please wait for a status update before trying again.', badge: 'bg-amber-100 text-amber-900' },
    { label: 'Payment unsuccessful', copy: 'We could not confirm this payment. Check your booking status before trying again, or contact us if your account shows a charge.', badge: 'bg-rose-100 text-rose-900' },
    { label: 'Booking confirmed', copy: 'Your booking [reference] is confirmed. Review your itinerary and the status of each service in your confirmation.', badge: 'bg-emerald-100 text-emerald-900' },
    { label: 'Balance reminder', copy: 'The remaining balance for [reference] is [amount and currency], due on [date]. Use your booking link to review and pay.', badge: 'bg-cinnamon-100 text-cinnamon-900' },
    { label: 'Booking cancelled', copy: 'Booking [reference] has been cancelled. We will send any applicable refund details separately.', badge: 'bg-stone-200 text-stone-800' },
    { label: 'Ride interest received', copy: 'Thank you for registering interest in The Ceylon Grand Ride. We will send entry information when arrangements are confirmed.', badge: 'bg-cinnamon-100 text-cinnamon-900' }
  ]
};