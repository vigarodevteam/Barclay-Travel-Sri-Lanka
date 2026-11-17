    // Set current year cleanly
    document.getElementById('footer-year').textContent = new Date().getFullYear();

    // =========================================================================
    // 1. COMPLETE DATA REPOSITORY (Strictly sourced from client specification)
    // =========================================================================
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
          featured: true,
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
          featured: true,
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
          featured: false,
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
          featured: false,
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
          featured: false,
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
          featured: false,
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
          featured: false,
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
          featured: false,
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
          featured: false,
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
          featured: true,
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
        {
          q: 'Can you change a sample itinerary?',
          a: 'Yes. Tell us which places, dates or activities you want to change and we will check what fits.'
        },
        {
          q: 'When is my hotel or vehicle reserved?',
          a: 'The booking confirmation identifies confirmed services. A quotation or supplier check can still be pending.'
        },
        {
          q: 'Will I pay a deposit or the full amount?',
          a: 'The amount due and any balance date appear in your approved quote and checkout.'
        },
        {
          q: 'Can I change or cancel a booking?',
          a: 'Contact us with your reference. We will explain the available options under your accepted booking terms.'
        },
        {
          q: 'Can I drive or ride myself?',
          a: 'Ask us to check the applicable licence, vehicle eligibility and rental terms before booking.'
        },
        {
          q: 'Is the Grand Ride part of my private tour?',
          a: 'The annual event has its own participation arrangements. A private tour is arranged around your travel dates.'
        }
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

    // State for prefilled forms & tour filtering
    let appState = {
      currentRoute: '/',
      currentAnchor: null,
      prefilledTour: '',
      prefilledDates: '',
      prefilledDestination: '',
      tourDurationFilter: 'all',
      tourSearchText: '',
      submittedEnquiries: []
    };

    // =========================================================================
    // 2. INITIALIZE NAVIGATION SUBMENUS
    // =========================================================================
    function initNavigationMenus() {
      const desktopSub = document.getElementById('desktop-destinations-submenu');
      const mobileSub = document.getElementById('mobile-destinations-submenu');
      if (!desktopSub || !mobileSub) return;

      desktopSub.innerHTML = SITE_DATA.destinations.map(d => `
        <a href="#/destinations/${d.slug}/" onclick="navigateTo('/destinations/${d.slug}/')" class="block px-3 py-2 rounded-xl text-sm text-stone-700 hover:bg-sand-100 hover:text-ceylon-900 transition">
          ${d.name}
        </a>
      `).join('');

      mobileSub.innerHTML = SITE_DATA.destinations.map(d => `
        <a href="#/destinations/${d.slug}/" onclick="navigateTo('/destinations/${d.slug}/'); toggleMobileMenu()" class="block px-2 py-1.5 rounded-lg text-sm text-stone-700 hover:bg-sand-100">
          ${d.name}
        </a>
      `).join('');
    }

    function toggleMobileMenu() {
      const menu = document.getElementById('mobile-menu');
      menu.classList.toggle('hidden');
    }

    // =========================================================================
    // 3. CLIENT-SIDE ROUTER & ANCHOR SCROLLING
    // =========================================================================
    function navigateTo(route, anchor = null, prefill = {}) {
      if (prefill.tour) appState.prefilledTour = prefill.tour;
      if (prefill.dates) appState.prefilledDates = prefill.dates;
      if (prefill.destination) appState.prefilledDestination = prefill.destination;

      appState.currentRoute = route;
      appState.currentAnchor = anchor;

      const hashPath = anchor ? `#${route}#${anchor}` : `#${route}`;
      if (window.location.hash !== hashPath) {
        history.pushState(null, '', hashPath);
      }

      renderRoute(route, anchor);
    }

    function parseHashAndRender() {
      const raw = window.location.hash.replace(/^#/, '');
      if (!raw || raw === '/') {
        renderRoute('/', null);
        return;
      }
      const parts = raw.split('#');
      const route = parts[0].startsWith('/') ? parts[0] : '/' + parts[0];
      const anchor = parts[1] || null;
      renderRoute(route, anchor);
    }

    window.addEventListener('hashchange', parseHashAndRender);

    function setMeta(title, desc) {
      document.title = title;
      const metaTag = document.querySelector('meta[name="description"]');
      if (metaTag) metaTag.setAttribute('content', desc);
    }

    function renderRoute(route, anchor) {
      const root = document.getElementById('app-root');
      const cleanRoute = route.endsWith('/') && route.length > 1 ? route : (route === '/' ? '/' : route + '/');

      if (cleanRoute === '/') {
        setMeta('Sri Lanka Tours and Private Travel | Barclay Travel Sri Lanka', 'Explore Sri Lanka with planned itineraries, bespoke holidays, accommodation, private transfers and vehicle rentals from Barclay Travel Sri Lanka.');
        root.innerHTML = renderHomePage();
      } else if (cleanRoute === '/about/') {
        setMeta('About Barclay Travel Sri Lanka | How We Plan Your Trip', 'See how Barclay Travel Sri Lanka brings together itineraries, accommodation, private transport and local experiences.');
        root.innerHTML = renderAboutPage();
      } else if (cleanRoute === '/destinations/') {
        setMeta('Sri Lanka Destinations | Coast, Highlands and Heritage', 'Explore eight Sri Lankan regions and find the tours, stays and transfers that fit your route.');
        root.innerHTML = renderDestinationsPage();
      } else if (cleanRoute.startsWith('/destinations/')) {
        const slug = cleanRoute.replace('/destinations/', '').replace('/', '');
        const dest = SITE_DATA.destinations.find(d => d.slug === slug);
        if (dest) {
          setMeta(dest.seoTitle, dest.metaDesc);
          root.innerHTML = renderDestinationDetailPage(dest);
        } else {
          root.innerHTML = renderDestinationsPage();
        }
      } else if (cleanRoute === '/holiday-types/') {
        setMeta('Sri Lanka Holiday Types | Find Your Travel Style', 'Choose a coastal, heritage, wildlife, walking, food, wellness, family or motorcycle holiday in Sri Lanka.');
        root.innerHTML = renderHolidayTypesPage();
      } else if (cleanRoute === '/tours/') {
        setMeta('Sri Lanka Private Tours and Sample Itineraries', 'Explore ten sample Sri Lanka itineraries from three to ten days, with private transport and flexible accommodation.');
        root.innerHTML = renderToursPage();
      } else if (cleanRoute.startsWith('/tours/')) {
        const slug = cleanRoute.replace('/tours/', '').replace('/', '');
        const tour = SITE_DATA.tours.find(t => t.slug === slug);
        if (tour) {
          setMeta(tour.seoTitle, tour.metaDesc);
          root.innerHTML = renderTourDetailPage(tour);
        } else {
          root.innerHTML = renderToursPage();
        }
      } else if (cleanRoute === '/exclusive-experiences/') {
        setMeta('Private Sri Lanka Experiences and Tailor Made Holidays', 'Request a bespoke Sri Lanka itinerary with private guiding, boutique stays and producer-led visits.');
        root.innerHTML = renderExclusiveExperiencesPage();
      } else if (cleanRoute === '/transport/') {
        setMeta('Private Transfers and Drivers in Sri Lanka', 'Request an airport transfer, chauffeur-driven car or van, private driver or itinerary support for travel in Sri Lanka.');
        root.innerHTML = renderTransportPage();
      } else if (cleanRoute === '/vehicle-rentals/') {
        setMeta('Motorcycle and Vehicle Rental Enquiries Sri Lanka', 'Request a motorcycle or other eligible vehicle for your Sri Lanka dates, with pickup, return and rental terms confirmed in your quote.');
        root.innerHTML = renderVehicleRentalsPage();
      } else if (cleanRoute === '/accommodation/') {
        setMeta('Sri Lanka Accommodation Planning and Boutique Stays', 'Request Sri Lanka accommodation by region, travel dates, room needs and budget, from beach stays to hill-country retreats.');
        root.innerHTML = renderAccommodationPage();
      } else if (cleanRoute === '/ceylon-grand-ride/') {
        setMeta('The Ceylon Grand Ride | Annual Sri Lanka Motorcycle Event', 'Explore the proposed annual Ceylon Grand Ride, with a planned Panadura flag-off and supported motorcycle stages across Sri Lanka.');
        root.innerHTML = renderGrandRidePage();
      } else if (cleanRoute === '/contact/') {
        setMeta('Contact Barclay Travel Sri Lanka | Plan Your Trip', 'Enquire about a private Sri Lanka tour, accommodation, transport or vehicle rental.');
        root.innerHTML = renderContactPage();
      } else if (cleanRoute === '/booking/') {
        setMeta('Sri Lanka Tour Booking, Payments and FAQs | Barclay Travel', 'Learn how a Barclay Travel Sri Lanka enquiry becomes a confirmed tour, transfer, stay or rental booking.');
        root.innerHTML = renderBookingPage();
      } else {
        root.innerHTML = renderHomePage();
      }

      // Re-initialize icons
      lucide.createIcons();

      // Handle anchor or top scroll
      if (anchor) {
        setTimeout(() => {
          const targetEl = document.getElementById(anchor);
          if (targetEl) {
            targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }, 80);
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }

    // =========================================================================
    // 4. PAGE TEMPLATES (Strict adherence to client handover copy & structure)
    // =========================================================================

    // --- HOME PAGE (/) ---
    function renderHomePage() {
      const featuredDestinations = [
        SITE_DATA.destinations.find(d => d.slug === 'south-coast-galle'),
        SITE_DATA.destinations.find(d => d.slug === 'central-highlands'),
        SITE_DATA.destinations.find(d => d.slug === 'cultural-triangle')
      ];

      const featuredTours = [
        SITE_DATA.tours.find(t => t.slug === 'southern-coast-cinnamon'),
        SITE_DATA.tours.find(t => t.slug === 'central-highlands'),
        SITE_DATA.tours.find(t => t.slug === 'island-highlights')
      ];

      return `
        <!-- Hero Section with Accessible Text Panel -->
        <section class="relative bg-ceylon-950 overflow-hidden">
          <div class="absolute inset-0">
            <img src="https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=1800&q=85"
                 alt="View across Sri Lankan coastal and highland scenery from a private tour stop"
                 class="w-full h-full object-cover opacity-55" />
            <div class="absolute inset-0 bg-gradient-to-r from-ceylon-950/90 via-ceylon-950/65 to-transparent"></div>
          </div>

          <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-32">
            <div class="max-w-2xl bg-ceylon-950/75 backdrop-blur-md border border-white/15 rounded-3xl p-7 sm:p-10 shadow-2xl">
              <span class="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-cinnamon-300 mb-4">
                <i data-lucide="map-pin" class="w-3.5 h-3.5"></i> Private Sri Lanka Travel
              </span>
              <h1 class="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Sri Lanka at your own pace
              </h1>
              <p class="mt-5 text-lg sm:text-xl text-sand-100 leading-relaxed">
                Follow the coast, head for the hills or let us plan a journey around you.
              </p>

              <!-- Primary & Secondary CTAs -->
              <div class="mt-8 flex flex-wrap items-center gap-3.5">
                <a href="#/tours/" onclick="navigateTo('/tours/')" class="inline-flex items-center gap-2 bg-cinnamon-600 hover:bg-cinnamon-500 text-white font-semibold px-6 py-3.5 rounded-xl shadow-lg transition">
                  <span>Explore Tours</span>
                  <i data-lucide="arrow-right" class="w-4 h-4"></i>
                </a>
                <a href="#/contact/#trip-enquiry" onclick="navigateTo('/contact/', 'trip-enquiry')" class="inline-flex items-center gap-2 bg-white hover:bg-sand-100 text-ceylon-950 font-semibold px-6 py-3.5 rounded-xl transition">
                  <span>Plan My Trip</span>
                </a>
                <a href="#/transport/#transfer-enquiry" onclick="navigateTo('/transport/', 'transfer-enquiry')" class="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/25 font-medium px-5 py-3.5 rounded-xl transition">
                  <i data-lucide="car" class="w-4 h-4 text-cinnamon-300"></i>
                  <span>Book Transport</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        <!-- Editorial Introduction -->
        <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div class="lg:col-span-5">
              <span class="text-xs font-semibold uppercase tracking-[0.2em] text-cinnamon-700">Tailored & Sample Routes</span>
              <h2 class="font-serif text-3xl sm:text-4xl font-bold text-ceylon-950 mt-2 leading-snug">
                Start with a place you have always wanted to see
              </h2>
            </div>
            <div class="lg:col-span-7 space-y-5 text-stone-700 text-base sm:text-lg leading-relaxed">
              <p>
                Start with a place you have always wanted to see, a few days you have free or simply the way you like to travel. Barclay Travel Sri Lanka helps you put the pieces together. Choose a sample itinerary, ask us to build a private holiday, or arrange the accommodation and transport you need for a trip of your own.
              </p>
              <p>
                You could spend five days between Galle Fort and the southern cinnamon country, travel from Kandy through the tea hills to Ella, or slow down in a village near the Knuckles range. Explore destinations to see how the regions fit together, then browse our tours for a day-by-day starting point. If you already know where you are going, enquire about a private transfer or vehicle rental.
              </p>
              <p>
                Motorcyclists can also explore The Ceylon Grand Ride, our planned annual ride across Sri Lanka. For a private holiday at any time of year, tell us your dates, who is travelling and what you would like to experience. We can suggest a route and explain what can be arranged for your dates.
              </p>
            </div>
          </div>
        </section>

        <!-- Featured Destinations -->
        <section class="bg-sand-100/80 border-y border-sand-200 py-16 sm:py-20">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
              <div>
                <span class="text-xs font-semibold uppercase tracking-[0.2em] text-ceylon-700">Regional Guides</span>
                <h2 class="font-serif text-3xl font-bold text-ceylon-950 mt-1">Featured destinations</h2>
              </div>
              <a href="#/destinations/" onclick="navigateTo('/destinations/')" class="inline-flex items-center gap-1.5 text-sm font-semibold text-ceylon-800 hover:text-cinnamon-700 transition">
                <span>View all eight regions</span>
                <i data-lucide="arrow-right" class="w-4 h-4"></i>
              </a>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
              ${featuredDestinations.map(dest => `
                <article class="bg-white rounded-2xl overflow-hidden border border-sand-200 shadow-sm hover:shadow-md transition flex flex-col">
                  <div class="aspect-[16/10] overflow-hidden bg-sand-200">
                    <img src="${dest.image}" alt="${dest.alt}" class="w-full h-full object-cover hover:scale-105 transition duration-500" />
                  </div>
                  <div class="p-6 flex flex-col flex-grow">
                    <h3 class="font-serif text-xl font-bold text-ceylon-950">${dest.name}</h3>
                    <p class="text-sm font-medium text-cinnamon-700 mt-1">${dest.hero}</p>
                    <p class="text-sm text-stone-600 mt-3 leading-relaxed flex-grow">${dest.summary}</p>
                    <div class="mt-6 pt-4 border-t border-sand-100">
                      <a href="#/destinations/${dest.slug}/" onclick="navigateTo('/destinations/${dest.slug}/')" class="inline-flex items-center gap-1.5 text-sm font-semibold text-ceylon-800 hover:text-cinnamon-700">
                        <span>Explore region</span>
                        <i data-lucide="arrow-right" class="w-4 h-4"></i>
                      </a>
                    </div>
                  </div>
                </article>
              `).join('')}
            </div>
          </div>
        </section>

        <!-- Featured Tours -->
        <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div class="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <span class="text-xs font-semibold uppercase tracking-[0.2em] text-cinnamon-700">Sample Itineraries</span>
              <h2 class="font-serif text-3xl font-bold text-ceylon-950 mt-1">Featured tours</h2>
            </div>
            <a href="#/tours/" onclick="navigateTo('/tours/')" class="inline-flex items-center gap-1.5 text-sm font-semibold text-ceylon-800 hover:text-cinnamon-700 transition">
              <span>Compare all ten tours</span>
              <i data-lucide="arrow-right" class="w-4 h-4"></i>
            </a>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            ${featuredTours.map(tour => `
              <article class="bg-white rounded-2xl overflow-hidden border border-sand-200 shadow-sm hover:shadow-md transition flex flex-col">
                <div class="relative aspect-[16/10] overflow-hidden bg-sand-200">
                  <img src="${tour.image}" alt="${tour.caption}" class="w-full h-full object-cover" />
                  <span class="absolute top-3 left-3 bg-ceylon-950/85 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1.5 rounded-lg">
                    ${tour.duration}
                  </span>
                </div>
                <div class="p-6 flex flex-col flex-grow">
                  <div class="text-xs font-medium text-stone-500">${tour.routeSummary}</div>
                  <h3 class="font-serif text-xl font-bold text-ceylon-950 mt-1">${tour.title}</h3>
                  <p class="text-sm text-stone-600 mt-3 leading-relaxed flex-grow">${tour.overview[0].slice(0, 145)}...</p>
                  <div class="mt-6 pt-4 border-t border-sand-100 flex items-center justify-between gap-3">
                    <a href="#/tours/${tour.slug}/" onclick="navigateTo('/tours/${tour.slug}/')" class="text-sm font-semibold text-ceylon-800 hover:text-cinnamon-700 inline-flex items-center gap-1">
                      <span>Day-by-day plan</span>
                      <i data-lucide="chevron-right" class="w-4 h-4"></i>
                    </a>
                    <button onclick="navigateTo('/contact/', 'trip-enquiry', { tour: '${tour.title}' })" class="text-xs font-semibold bg-sand-100 hover:bg-ceylon-800 hover:text-white text-ceylon-900 px-3 py-2 rounded-lg transition">
                      Request a Quote
                    </button>
                  </div>
                </div>
              </article>
            `).join('')}
          </div>
        </section>

        <!-- Event Card: The Ceylon Grand Ride -->
        <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
          <div class="bg-ceylon-900 rounded-3xl overflow-hidden border border-ceylon-800 shadow-xl grid grid-cols-1 lg:grid-cols-12">
            <div class="lg:col-span-7 p-8 sm:p-12 flex flex-col justify-center">
              <div class="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-cinnamon-300 mb-3">
                <i data-lucide="bike" class="w-4 h-4"></i> Annual Motorcycle Journey
              </div>
              <h2 class="font-serif text-3xl sm:text-4xl font-bold text-white">The Ceylon Grand Ride</h2>
              <p class="text-lg text-sand-200 mt-3 leading-relaxed">
                An annual, non-competitive motorcycle journey around Sri Lanka
              </p>
              <p class="text-sm text-sand-300 mt-4 leading-relaxed">
                Proposed inaugural edition for mid-February 2027 with a ceremonial flag-off planned at The Barnhouse Studio in Panadura and flexible stage durations from 3 up to 30 days.
              </p>
              <div class="mt-8">
                <a href="#/ceylon-grand-ride/" onclick="navigateTo('/ceylon-grand-ride/')" class="inline-flex items-center gap-2 bg-cinnamon-600 hover:bg-cinnamon-500 text-white font-semibold px-6 py-3.5 rounded-xl transition">
                  <span>View the Event</span>
                  <i data-lucide="arrow-right" class="w-4 h-4"></i>
                </a>
              </div>
            </div>
            <div class="lg:col-span-5 relative min-h-[260px]">
              <img src="https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=1000&q=80"
                   alt="Supported motorcycle touring formation on a scenic public road"
                   class="w-full h-full object-cover" />
              <div class="absolute bottom-3 right-3 bg-stone-950/75 text-white text-[11px] px-3 py-1 rounded-lg">
                Illustrative motorcycle stage view
              </div>
            </div>
          </div>
        </section>
      `;
    }

    // --- ABOUT PAGE (/about/) ---
    function renderAboutPage() {
      return `
        <section class="bg-ceylon-950 text-white py-16 sm:py-24">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <span class="text-xs font-semibold uppercase tracking-[0.2em] text-cinnamon-300">How We Plan Your Trip</span>
            <h1 class="font-serif text-4xl sm:text-5xl font-bold mt-3 max-w-3xl">A Sri Lankan holiday shaped around you</h1>
            <div class="mt-8">
              <a href="#/contact/#trip-enquiry" onclick="navigateTo('/contact/', 'trip-enquiry')" class="inline-flex items-center gap-2 bg-cinnamon-600 hover:bg-cinnamon-500 text-white font-semibold px-6 py-3.5 rounded-xl transition">
                <span>Plan My Trip</span>
                <i data-lucide="arrow-right" class="w-4 h-4"></i>
              </a>
            </div>
          </div>
        </section>

        <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div class="lg:col-span-7 space-y-6 text-stone-700 text-base sm:text-lg leading-relaxed">
              <p>
                Barclay Travel Sri Lanka brings together the practical elements of an island holiday: where to go, how to get there, where to stay and what to do along the way. You can come to us with a complete itinerary and ask for transport, or start with a rough idea and ask for help designing the whole trip.
              </p>
              <p>
                We begin with your dates, group size, interests and preferred pace. That helps us decide whether to base you in one place for several nights, build a route across different regions or leave space for an unplanned afternoon. We then outline the route, accommodation options and services you can request. Your quote sets out what is included and which arrangements need supplier confirmation.
              </p>
              <p>
                Our trips suit travellers who want room to make their own choices. You might prefer a small hotel near a market, a private driver between two towns or a guide for a particular walk. The Ceylon Grand Ride is our dedicated annual motorcycle event. Our private tours and travel services can be arranged separately throughout the year, subject to availability.
              </p>
            </div>

            <div class="lg:col-span-5 space-y-6">
              <figure class="bg-white rounded-2xl overflow-hidden border border-sand-200 shadow-sm">
                <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=1000&q=80"
                     alt="Route planning map and travel itinerary preparation"
                     class="w-full h-64 object-cover" />
                <figcaption class="p-4 text-xs text-stone-500">
                  Planning regional routes, pacing and supplier confirmations around your travel dates.
                </figcaption>
              </figure>

              <div class="bg-sand-100 rounded-2xl p-6 border border-sand-200 space-y-4">
                <h2 class="font-serif text-xl font-bold text-ceylon-950">How we structure your quote</h2>
                <ul class="space-y-3 text-sm text-stone-700">
                  <li class="flex items-start gap-2.5">
                    <i data-lucide="check-circle-2" class="w-4 h-4 text-ceylon-700 mt-0.5 shrink-0"></i>
                    <span>Clear distinction between confirmed services and items awaiting supplier checks.</span>
                  </li>
                  <li class="flex items-start gap-2.5">
                    <i data-lucide="check-circle-2" class="w-4 h-4 text-ceylon-700 mt-0.5 shrink-0"></i>
                    <span>Flexible pacing with multi-night bases rather than rushed daily hotel changes.</span>
                  </li>
                  <li class="flex items-start gap-2.5">
                    <i data-lucide="check-circle-2" class="w-4 h-4 text-ceylon-700 mt-0.5 shrink-0"></i>
                    <span>Modular services: book a full private tour, standalone chauffeur transport, accommodation or vehicle rental.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      `;
    }

    // --- DESTINATIONS HUB PAGE (/destinations/) ---
    function renderDestinationsPage() {
      return `
        <section class="relative bg-ceylon-950 text-white overflow-hidden">
          <div class="absolute inset-0">
            <img src="https://images.unsplash.com/photo-1546708973-b339540b5162?auto=format&fit=crop&w=1800&q=80"
                 alt="Wide view of Sri Lanka's central hills and tea estates"
                 class="w-full h-full object-cover opacity-40" />
          </div>
          <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
            <span class="text-xs font-semibold uppercase tracking-[0.2em] text-cinnamon-300">Coast, Highlands and Heritage</span>
            <h1 class="font-serif text-4xl sm:text-5xl font-bold mt-3">Where would you like to go?</h1>
            <div class="mt-8">
              <a href="#/tours/" onclick="navigateTo('/tours/')" class="inline-flex items-center gap-2 bg-cinnamon-600 hover:bg-cinnamon-500 text-white font-semibold px-6 py-3.5 rounded-xl transition">
                <span>Explore Tours</span>
                <i data-lucide="arrow-right" class="w-4 h-4"></i>
              </a>
            </div>
          </div>
        </section>

        <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <div class="max-w-3xl space-y-4 text-stone-700 text-base sm:text-lg leading-relaxed mb-14">
            <p>
              Start with the landscapes that interest you most. The South Coast pairs sea air, old streets and food with easy days beside the water. Inland, the Central Highlands are better suited to slower drives, tea-country stays and short walks. Around Sigiriya and Dambulla, historic sites can anchor several days without requiring a change of hotel every night.
            </p>
            <p>
              The east and north reward a longer trip or a holiday focused on one region. Consider Trincomalee and Batticaloa for coastal towns and lagoon landscapes, or Jaffna for peninsula drives, palmyra country and a different kitchen. In the southeast, set aside early mornings for a safari and leave room in the schedule for the pace of a park visit.
            </p>
            <p>
              Use the regional guides to pick your priorities. Each one links to an itinerary and to practical options for accommodation and private transport. If you want to combine two or three areas, tell us your arrival point and the time available. We can suggest where to spend extra nights and which stops work best on the same trip.
            </p>
          </div>

          <h2 class="font-serif text-2xl sm:text-3xl font-bold text-ceylon-950 mb-8">Eight Regional Guides</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            ${SITE_DATA.destinations.map(dest => `
              <article class="bg-white rounded-2xl overflow-hidden border border-sand-200 shadow-sm hover:shadow-md transition flex flex-col">
                <div class="aspect-[4/3] overflow-hidden bg-sand-200">
                  <img src="${dest.image}" alt="${dest.alt}" class="w-full h-full object-cover hover:scale-105 transition duration-500" />
                </div>
                <div class="p-5 flex flex-col flex-grow">
                  <h3 class="font-serif text-lg font-bold text-ceylon-950">${dest.name}</h3>
                  <p class="text-xs font-medium text-cinnamon-700 mt-1">${dest.hero}</p>
                  <p class="text-sm text-stone-600 mt-3 leading-relaxed flex-grow">${dest.summary}</p>
                  <div class="mt-5 pt-3 border-t border-sand-100">
                    <a href="#/destinations/${dest.slug}/" onclick="navigateTo('/destinations/${dest.slug}/')" class="inline-flex items-center gap-1.5 text-sm font-semibold text-ceylon-800 hover:text-cinnamon-700">
                      <span>Read regional guide</span>
                      <i data-lucide="arrow-right" class="w-4 h-4"></i>
                    </a>
                  </div>
                </div>
              </article>
            `).join('')}
          </div>
        </section>
      `;
    }

    // --- INDIVIDUAL DESTINATION PROFILE PAGE (/destinations/{slug}/) ---
    function renderDestinationDetailPage(dest) {
      const linkedTour = SITE_DATA.tours.find(t => t.slug === dest.ctaTourSlug);

      return `
        <section class="relative bg-ceylon-950 text-white overflow-hidden">
          <div class="absolute inset-0">
            <img src="${dest.image}" alt="${dest.alt}" class="w-full h-full object-cover opacity-45" />
            <div class="absolute inset-0 bg-gradient-to-t from-ceylon-950 via-ceylon-950/60 to-transparent"></div>
          </div>
          <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
            <div class="flex items-center gap-2 text-xs text-sand-300 mb-4">
              <a href="#/destinations/" onclick="navigateTo('/destinations/')" class="hover:text-white">Destinations</a>
              <span>/</span>
              <span class="text-cinnamon-300 font-semibold">${dest.name}</span>
            </div>
            <h1 class="font-serif text-4xl sm:text-5xl font-bold max-w-3xl">${dest.hero}</h1>
            <p class="text-sm text-sand-200 mt-3">${dest.caption}</p>
            <div class="mt-8 flex flex-wrap gap-3">
              <a href="#/tours/${dest.ctaTourSlug}/" onclick="navigateTo('/tours/${dest.ctaTourSlug}/')" class="inline-flex items-center gap-2 bg-cinnamon-600 hover:bg-cinnamon-500 text-white font-semibold px-6 py-3.5 rounded-xl transition">
                <span>${dest.ctaLabel}</span>
                <i data-lucide="arrow-right" class="w-4 h-4"></i>
              </a>
              <button onclick="navigateTo('/contact/', 'trip-enquiry', { destination: '${dest.name}' })" class="inline-flex items-center gap-2 bg-white/15 hover:bg-white/25 text-white border border-white/25 font-medium px-5 py-3.5 rounded-xl transition">
                <span>Plan a Stay Here</span>
              </button>
            </div>
          </div>
        </section>

        <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div class="lg:col-span-8 space-y-6 text-stone-700 text-base sm:text-lg leading-relaxed">
              <h2 class="font-serif text-2xl sm:text-3xl font-bold text-ceylon-950">${dest.name}</h2>
              ${dest.paragraphs.map(p => `<p>${p}</p>`).join('')}
            </div>

            <aside class="lg:col-span-4 space-y-6">
              ${linkedTour ? `
                <div class="bg-white rounded-2xl p-6 border border-sand-200 shadow-sm">
                  <span class="text-xs font-semibold uppercase tracking-wider text-cinnamon-700">Matching Sample Route</span>
                  <h3 class="font-serif text-xl font-bold text-ceylon-950 mt-1">${linkedTour.title}</h3>
                  <p class="text-xs font-medium text-stone-500 mt-1">${linkedTour.duration} · ${linkedTour.routeSummary}</p>
                  <p class="text-sm text-stone-600 mt-3">${linkedTour.suitableFor}</p>
                  <a href="#/tours/${linkedTour.slug}/" onclick="navigateTo('/tours/${linkedTour.slug}/')" class="mt-5 w-full inline-flex items-center justify-center gap-2 bg-ceylon-800 hover:bg-ceylon-900 text-white text-sm font-semibold py-3 rounded-xl transition">
                    <span>View Day-by-Day Plan</span>
                    <i data-lucide="arrow-right" class="w-4 h-4"></i>
                  </a>
                </div>
              ` : ''}

              <div class="bg-sand-100 rounded-2xl p-6 border border-sand-200 space-y-3">
                <h3 class="font-serif text-lg font-bold text-ceylon-950">Arrange Practical Details</h3>
                <p class="text-sm text-stone-600">Combine this region with accommodation or private road transfers.</p>
                <div class="pt-2 flex flex-col gap-2">
                  <button onclick="navigateTo('/contact/', 'accommodation-enquiry', { destination: '${dest.name}' })" class="w-full text-left px-4 py-2.5 rounded-xl bg-white border border-sand-200 hover:border-ceylon-600 text-sm font-medium text-ceylon-900 flex items-center justify-between transition">
                    <span>Request Accommodation</span>
                    <i data-lucide="bed-double" class="w-4 h-4 text-ceylon-700"></i>
                  </button>
                  <button onclick="navigateTo('/transport/', 'transfer-enquiry')" class="w-full text-left px-4 py-2.5 rounded-xl bg-white border border-sand-200 hover:border-ceylon-600 text-sm font-medium text-ceylon-900 flex items-center justify-between transition">
                    <span>Request Private Transport</span>
                    <i data-lucide="car" class="w-4 h-4 text-ceylon-700"></i>
                  </button>
                </div>
              </div>
            </aside>
          </div>

          <!-- Other Regions Quick Switcher -->
          <div class="mt-16 pt-10 border-t border-sand-200">
            <h3 class="font-serif text-xl font-bold text-ceylon-950 mb-4">Explore Other Regions</h3>
            <div class="flex flex-wrap gap-2">
              ${SITE_DATA.destinations.map(d => `
                <a href="#/destinations/${d.slug}/" onclick="navigateTo('/destinations/${d.slug}/')"
                   class="px-4 py-2 rounded-xl text-sm font-medium border transition ${d.slug === dest.slug ? 'bg-ceylon-800 text-white border-ceylon-800' : 'bg-white text-stone-700 border-sand-200 hover:border-ceylon-600'}">
                  ${d.name}
                </a>
              `).join('')}
            </div>
          </div>
        </section>
      `;
    }

    // --- HOLIDAY TYPES PAGE (/holiday-types/) ---
    function renderHolidayTypesPage() {
      return `
        <section class="relative bg-ceylon-950 text-white overflow-hidden">
          <div class="absolute inset-0">
            <img src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=1800&q=80"
                 alt="Sri Lankan outdoor lunch and regional flavours"
                 class="w-full h-full object-cover opacity-35" />
          </div>
          <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
            <span class="text-xs font-semibold uppercase tracking-[0.2em] text-cinnamon-300">Find Your Travel Style</span>
            <h1 class="font-serif text-4xl sm:text-5xl font-bold mt-3 max-w-3xl">Start with the kind of holiday you want</h1>
            <div class="mt-8">
              <a href="#/contact/#trip-enquiry" onclick="navigateTo('/contact/', 'trip-enquiry')" class="inline-flex items-center gap-2 bg-cinnamon-600 hover:bg-cinnamon-500 text-white font-semibold px-6 py-3.5 rounded-xl transition">
                <span>Plan My Trip</span>
                <i data-lucide="arrow-right" class="w-4 h-4"></i>
              </a>
            </div>
          </div>
        </section>

        <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <div class="max-w-3xl space-y-4 text-stone-700 text-base sm:text-lg leading-relaxed mb-10">
            <p>
              Some trips begin with a place. Others begin with the feeling you want from a week away: mornings outside, a few good meals or enough time for the whole family to enjoy the same holiday. Choose a travel style below, and use it to find a route that makes room for what matters most.
            </p>
            <p>
              A beach stay can be the main event or the final chapter of a heritage itinerary. A wildlife trip may work better with an extra night near the park than with another attraction on the same day. Walkers can choose a few hours with a guide, while food lovers can spend more time with producers and hosts. Tell us which experiences you want to prioritise and where you would prefer to keep your options open.
            </p>
            <p>
              Use our sample tours as a starting point, then ask us to adjust the pace, transport and accommodation. You can also enquire about just one part of a trip you are arranging yourself.
            </p>
          </div>

          <!-- On-Page Anchors Navigation -->
          <div class="bg-white rounded-2xl p-4 border border-sand-200 shadow-sm mb-12 sticky top-24 z-30">
            <div class="text-xs font-semibold uppercase tracking-wider text-stone-400 mb-2.5 px-1">Jump to Travel Style</div>
            <div class="flex flex-wrap gap-2">
              ${SITE_DATA.holidayTypes.map(ht => `
                <button onclick="document.getElementById('${ht.id}').scrollIntoView({ behavior: 'smooth' })"
                        class="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-medium bg-sand-100 hover:bg-ceylon-800 hover:text-white text-stone-800 transition">
                  <i data-lucide="${ht.icon}" class="w-3.5 h-3.5"></i>
                  <span>${ht.title}</span>
                </button>
              `).join('')}
            </div>
          </div>

          <!-- 8 Holiday Type Sections -->
          <div class="space-y-8">
            ${SITE_DATA.holidayTypes.map(ht => `
              <article id="${ht.id}" class="scroll-mt-44 bg-white rounded-2xl p-6 sm:p-8 border border-sand-200 shadow-sm">
                <div class="flex items-center gap-3 mb-4">
                  <div class="w-10 h-10 rounded-xl bg-ceylon-50 border border-ceylon-200 text-ceylon-800 flex items-center justify-center">
                    <i data-lucide="${ht.icon}" class="w-5 h-5"></i>
                  </div>
                  <h2 class="font-serif text-2xl font-bold text-ceylon-950">${ht.title}</h2>
                </div>
                <div class="space-y-4 text-stone-700 leading-relaxed">
                  ${ht.paragraphs.map(p => `<p>${p}</p>`).join('')}
                </div>
                <div class="mt-6 pt-5 border-t border-sand-100 flex flex-wrap items-center justify-between gap-3">
                  <div class="flex flex-wrap items-center gap-2">
                    <span class="text-xs font-semibold uppercase tracking-wider text-stone-400 mr-1">Suggested Starting Points:</span>
                    ${ht.relatedTours.map(rt => {
                      if (rt.slug) {
                        return `<a href="#/tours/${rt.slug}/" onclick="navigateTo('/tours/${rt.slug}/')" class="text-xs font-semibold bg-ceylon-50 text-ceylon-800 hover:bg-ceylon-100 px-3 py-1.5 rounded-lg transition">${rt.label} →</a>`;
                      } else if (rt.destSlug) {
                        return `<a href="#/destinations/${rt.destSlug}/" onclick="navigateTo('/destinations/${rt.destSlug}/')" class="text-xs font-semibold bg-ceylon-50 text-ceylon-800 hover:bg-ceylon-100 px-3 py-1.5 rounded-lg transition">${rt.label} →</a>`;
                      } else {
                        return `<a href="#${rt.routeUrl}" onclick="navigateTo('${rt.routeUrl}')" class="text-xs font-semibold bg-cinnamon-50 text-cinnamon-800 hover:bg-cinnamon-100 px-3 py-1.5 rounded-lg transition">${rt.label} →</a>`;
                      }
                    }).join('')}
                  </div>
                  <button onclick="navigateTo('/contact/', 'trip-enquiry', { tour: '${ht.title} Enquiry' })" class="text-sm font-semibold text-cinnamon-700 hover:text-cinnamon-800">
                    Request tailored quote →
                  </button>
                </div>
              </article>
            `).join('')}
          </div>
        </section>
      `;
    }

    // --- TOURS CATALOGUE PAGE (/tours/) ---
    function renderToursPage() {
      const filteredTours = SITE_DATA.tours.filter(tour => {
        const matchesDuration =
          appState.tourDurationFilter === 'all' ||
          (appState.tourDurationFilter === 'short' && tour.daysCount <= 4) ||
          (appState.tourDurationFilter === 'medium' && tour.daysCount >= 5 && tour.daysCount <= 6) ||
          (appState.tourDurationFilter === 'long' && tour.daysCount >= 7);

        const q = appState.tourSearchText.trim().toLowerCase();
        const matchesQuery = !q ||
          tour.title.toLowerCase().includes(q) ||
          tour.routeSummary.toLowerCase().includes(q) ||
          tour.suitableFor.toLowerCase().includes(q);

        return matchesDuration && matchesQuery;
      });

      return `
        <section class="relative bg-ceylon-950 text-white overflow-hidden">
          <div class="absolute inset-0">
            <img src="https://images.unsplash.com/photo-1586611292717-f828b167408c?auto=format&fit=crop&w=1800&q=80"
                 alt="Travellers exploring a historic Sri Lankan itinerary stop"
                 class="w-full h-full object-cover opacity-40" />
          </div>
          <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
            <span class="text-xs font-semibold uppercase tracking-[0.2em] text-cinnamon-300">Private Tours & Sample Itineraries</span>
            <h1 class="font-serif text-4xl sm:text-5xl font-bold mt-3">Choose a route and make it yours</h1>
            <div class="mt-8">
              <a href="#/contact/#trip-enquiry" onclick="navigateTo('/contact/', 'trip-enquiry')" class="inline-flex items-center gap-2 bg-cinnamon-600 hover:bg-cinnamon-500 text-white font-semibold px-6 py-3.5 rounded-xl transition">
                <span>Request a Quote</span>
                <i data-lucide="arrow-right" class="w-4 h-4"></i>
              </a>
            </div>
          </div>
        </section>

        <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <div class="max-w-3xl space-y-4 text-stone-700 text-base sm:text-lg leading-relaxed mb-12">
            <p>
              Our sample tours give you a practical way to plan time in Sri Lanka. Choose a route for its landscapes, activities or length, then tell us what you would like to change. You can add a night, spend less time in transit or ask for a stay close to the places you most want to visit.
            </p>
            <p>
              The itineraries use private road transport as their starting point. Walking, supplier visits and safari excursions each have their own arrangements. For suitable routes, experienced riders can ask whether a separately planned motorcycle version is possible. Some excursions depend on site access, the season and local conditions, and your quote will say what is confirmed.
            </p>
            <p>
              Use the tour cards to compare durations and explore the day-by-day plans. If a route looks right but your dates or preferred start point differ, send an enquiry and we can work out what changes. You can also ask for transport only or browse stays before deciding.
            </p>
          </div>

          <!-- Availability & Route Filter Bar (#availability anchor per specification) -->
          <div id="availability" class="scroll-mt-28 bg-white rounded-2xl p-5 sm:p-6 border border-sand-200 shadow-sm mb-10">
            <div class="flex flex-col lg:flex-row lg:items-end justify-between gap-4">
              <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 flex-grow">
                <div>
                  <label class="block text-xs font-semibold uppercase tracking-wider text-stone-500 mb-1.5">Duration</label>
                  <select onchange="updateTourFilter('duration', this.value)" class="w-full rounded-xl border border-sand-300 bg-sand-50 px-3.5 py-2.5 text-sm text-stone-800 focus:outline-none focus:border-ceylon-700">
                    <option value="all" ${appState.tourDurationFilter === 'all' ? 'selected' : ''}>All 10 Sample Tours (3–10 days)</option>
                    <option value="short" ${appState.tourDurationFilter === 'short' ? 'selected' : ''}>Short Breaks (3–4 days)</option>
                    <option value="medium" ${appState.tourDurationFilter === 'medium' ? 'selected' : ''}>Regional Journeys (5–6 days)</option>
                    <option value="long" ${appState.tourDurationFilter === 'long' ? 'selected' : ''}>Extended Routes (7–10 days)</option>
                  </select>
                </div>
                <div>
                  <label class="block text-xs font-semibold uppercase tracking-wider text-stone-500 mb-1.5">Search Region or Start Point</label>
                  <input type="text" value="${appState.tourSearchText}" oninput="updateTourFilter('search', this.value)" placeholder="e.g. Galle, Kandy, Jaffna, Colombo..." class="w-full rounded-xl border border-sand-300 bg-sand-50 px-3.5 py-2.5 text-sm text-stone-800 focus:outline-none focus:border-ceylon-700" />
                </div>
                <div>
                  <label class="block text-xs font-semibold uppercase tracking-wider text-stone-500 mb-1.5">Preferred Travel Dates</label>
                  <input type="text" value="${appState.prefilledDates}" onchange="appState.prefilledDates = this.value" placeholder="e.g. November 2026 or flexible" class="w-full rounded-xl border border-sand-300 bg-sand-50 px-3.5 py-2.5 text-sm text-stone-800 focus:outline-none focus:border-ceylon-700" />
                </div>
              </div>
              <div>
                <button onclick="checkTourAvailability()" class="w-full lg:w-auto inline-flex items-center justify-center gap-2 bg-ceylon-800 hover:bg-ceylon-900 text-white text-sm font-semibold px-5 py-2.5 rounded-xl transition">
                  <i data-lucide="calendar-check" class="w-4 h-4"></i>
                  <span>Check Availability</span>
                </button>
              </div>
            </div>
            <div id="availability-banner" class="hidden mt-4 p-3.5 rounded-xl bg-ceylon-50 border border-ceylon-200 text-sm text-ceylon-900 flex items-center justify-between gap-3">
              <span><strong>Status: Available to request.</strong> Select any itinerary below to request a manual date and supplier check.</span>
              <button onclick="navigateTo('/contact/', 'trip-enquiry')" class="text-xs font-semibold underline shrink-0">Open Trip Enquiry</button>
            </div>
          </div>

          <!-- 10 Tour Catalogue Cards -->
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            ${filteredTours.map(tour => `
              <article class="bg-white rounded-2xl overflow-hidden border border-sand-200 shadow-sm hover:shadow-md transition flex flex-col">
                <div class="relative aspect-[16/10] overflow-hidden bg-sand-200">
                  <img src="${tour.image}" alt="${tour.caption}" class="w-full h-full object-cover hover:scale-105 transition duration-500" />
                  <div class="absolute top-3 left-3 flex gap-2">
                    <span class="bg-ceylon-950/85 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1.5 rounded-lg">${tour.duration}</span>
                    <span class="bg-white/90 backdrop-blur-sm text-ceylon-950 text-xs font-medium px-3 py-1.5 rounded-lg">Available to request</span>
                  </div>
                </div>
                <div class="p-6 flex flex-col flex-grow">
                  <div class="text-xs font-semibold text-cinnamon-700 uppercase tracking-wider">${tour.routeSummary}</div>
                  <h2 class="font-serif text-xl font-bold text-ceylon-950 mt-1">${tour.title}</h2>
                  <p class="text-xs text-stone-500 mt-1">${tour.transport} · ${tour.category}</p>
                  <p class="text-sm text-stone-600 mt-3 leading-relaxed flex-grow">${tour.overview[0]}</p>
                  <div class="mt-5 pt-4 border-t border-sand-100 flex items-center justify-between gap-2">
                    <a href="#/tours/${tour.slug}/" onclick="navigateTo('/tours/${tour.slug}/')" class="inline-flex items-center gap-1.5 text-sm font-semibold text-ceylon-800 hover:text-cinnamon-700">
                      <span>View Itinerary</span>
                      <i data-lucide="arrow-right" class="w-4 h-4"></i>
                    </a>
                    <button onclick="navigateTo('/contact/', 'trip-enquiry', { tour: '${tour.title}' })" class="text-xs font-semibold bg-sand-100 hover:bg-cinnamon-600 hover:text-white text-stone-800 px-3.5 py-2 rounded-lg transition">
                      Request a Quote
                    </button>
                  </div>
                </div>
              </article>
            `).join('')}
          </div>
        </section>
      `;
    }

    function updateTourFilter(type, value) {
      if (type === 'duration') appState.tourDurationFilter = value;
      if (type === 'search') appState.tourSearchText = value;
      renderRoute('/tours/', null);
    }

    function checkTourAvailability() {
      const banner = document.getElementById('availability-banner');
      if (banner) banner.classList.remove('hidden');
    }

    // --- INDIVIDUAL TOUR DETAIL PAGE (/tours/{slug}/) ---
    function renderTourDetailPage(tour) {
      const relatedDest = SITE_DATA.destinations.find(d => d.slug === tour.relatedDestSlug);

      return `
        <section class="relative bg-ceylon-950 text-white overflow-hidden">
          <div class="absolute inset-0">
            <img src="${tour.image}" alt="${tour.caption}" class="w-full h-full object-cover opacity-45" />
            <div class="absolute inset-0 bg-gradient-to-t from-ceylon-950 via-ceylon-950/65 to-transparent"></div>
          </div>
          <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
            <div class="flex items-center gap-2 text-xs text-sand-300 mb-4">
              <a href="#/tours/" onclick="navigateTo('/tours/')" class="hover:text-white">Tours</a>
              <span>/</span>
              <span class="text-cinnamon-300 font-semibold">${tour.title}</span>
            </div>
            <div class="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/20 text-sand-100 text-xs font-semibold px-3.5 py-1.5 rounded-lg mb-4">
              <span>${tour.duration}</span>
              <span>·</span>
              <span>${tour.transport}</span>
              <span>·</span>
              <span>${tour.category}</span>
            </div>
            <h1 class="font-serif text-4xl sm:text-5xl font-bold max-w-3xl">${tour.title}</h1>
            <p class="text-sm text-sand-200 mt-3">${tour.caption}</p>
            <div class="mt-8 flex flex-wrap gap-3">
              <button onclick="navigateTo('/contact/', 'trip-enquiry', { tour: '${tour.title}' })" class="inline-flex items-center gap-2 bg-cinnamon-600 hover:bg-cinnamon-500 text-white font-semibold px-6 py-3.5 rounded-xl transition">
                <span>Request a Quote</span>
                <i data-lucide="arrow-right" class="w-4 h-4"></i>
              </button>
              <span class="inline-flex items-center gap-2 bg-ceylon-900/90 border border-ceylon-700 text-sand-100 text-xs font-medium px-4 py-3.5 rounded-xl">
                <i data-lucide="clock" class="w-4 h-4 text-cinnamon-300"></i>
                <span>Available to request for your dates</span>
              </span>
            </div>
          </div>
        </section>

        <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <!-- Left Main Column: Overview & Day-by-Day Table -->
            <div class="lg:col-span-8 space-y-10">
              <div class="space-y-4 text-stone-700 text-base sm:text-lg leading-relaxed">
                ${tour.overview.map(p => `<p>${p}</p>`).join('')}
              </div>

              <!-- Day-by-Day Itinerary Table -->
              <div class="bg-white rounded-2xl border border-sand-200 overflow-hidden shadow-sm">
                <div class="px-6 py-4 bg-sand-100 border-b border-sand-200 flex items-center justify-between">
                  <h2 class="font-serif text-xl font-bold text-ceylon-950">Sample Day-by-Day Plan</h2>
                  <span class="text-xs font-medium text-stone-500">${tour.duration}</span>
                </div>
                <div class="overflow-x-auto">
                  <table class="w-full text-left border-collapse">
                    <thead>
                      <tr class="border-b border-sand-200 text-xs font-semibold uppercase tracking-wider text-stone-500 bg-sand-50">
                        <th class="py-3.5 px-6 w-20">Day</th>
                        <th class="py-3.5 px-6">Route and highlights</th>
                        <th class="py-3.5 px-6 w-52">Overnight or finish</th>
                      </tr>
                    </thead>
                    <tbody class="divide-y divide-sand-200 text-sm">
                      ${tour.days.map(d => `
                        <tr class="hover:bg-sand-50/70 transition">
                          <td class="py-4 px-6 font-bold text-ceylon-900">Day ${d.day}</td>
                          <td class="py-4 px-6 text-stone-700 leading-relaxed">${d.highlight}</td>
                          <td class="py-4 px-6 font-medium text-stone-800">${d.overnight}</td>
                        </tr>
                      `).join('')}
                    </tbody>
                  </table>
                </div>
              </div>

              <!-- Proposed Inclusions & Exclusions -->
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div class="bg-ceylon-50/70 rounded-2xl p-6 border border-ceylon-200">
                  <h3 class="font-serif text-lg font-bold text-ceylon-950 flex items-center gap-2">
                    <i data-lucide="check-circle" class="w-5 h-5 text-ceylon-700"></i>
                    <span>Proposed inclusions</span>
                  </h3>
                  <p class="text-sm text-stone-700 mt-3 leading-relaxed">
                    Private road transport as mapped, driver and itinerary coordination. Overnight stays and listed excursions can be included where itemised in the approved quote.
                  </p>
                </div>
                <div class="bg-sand-100 rounded-2xl p-6 border border-sand-200">
                  <h3 class="font-serif text-lg font-bold text-ceylon-950 flex items-center gap-2">
                    <i data-lucide="info" class="w-5 h-5 text-cinnamon-700"></i>
                    <span>Proposed exclusions</span>
                  </h3>
                  <p class="text-sm text-stone-700 mt-3 leading-relaxed">
                    Flights, personal insurance, personal expenses and any meals, entry fees, guides or optional activities omitted from the quote.
                  </p>
                </div>
              </div>
            </div>

            <!-- Right Sidebar: Practical Metadata & Related Pages -->
            <aside class="lg:col-span-4 space-y-6">
              <div class="bg-white rounded-2xl p-6 border border-sand-200 shadow-sm space-y-4">
                <h3 class="font-serif text-xl font-bold text-ceylon-950">Itinerary Summary</h3>
                <div class="space-y-3 text-sm border-t border-sand-100 pt-4">
                  <div>
                    <div class="text-xs font-semibold uppercase tracking-wider text-stone-400">Start and finish</div>
                    <div class="font-medium text-stone-800 mt-0.5">${tour.routeSummary}</div>
                  </div>
                  <div>
                    <div class="text-xs font-semibold uppercase tracking-wider text-stone-400">Suitable for</div>
                    <div class="font-medium text-stone-800 mt-0.5">${tour.suitableFor}</div>
                  </div>
                  <div>
                    <div class="text-xs font-semibold uppercase tracking-wider text-stone-400">Optional</div>
                    <div class="font-medium text-stone-800 mt-0.5">${tour.optional}</div>
                  </div>
                </div>
                <button onclick="navigateTo('/contact/', 'trip-enquiry', { tour: '${tour.title}' })" class="w-full inline-flex items-center justify-center gap-2 bg-cinnamon-600 hover:bg-cinnamon-500 text-white font-semibold py-3.5 rounded-xl transition">
                  <span>Request a Quote</span>
                  <i data-lucide="arrow-right" class="w-4 h-4"></i>
                </button>
              </div>

              <div class="bg-sand-100 rounded-2xl p-6 border border-sand-200 space-y-3">
                <h3 class="font-serif text-lg font-bold text-ceylon-950">Related pages</h3>
                <div class="flex flex-col gap-2 text-sm">
                  ${relatedDest ? `
                    <a href="#/destinations/${relatedDest.slug}/" onclick="navigateTo('/destinations/${relatedDest.slug}/')" class="px-4 py-2.5 rounded-xl bg-white border border-sand-200 hover:border-ceylon-600 font-medium text-ceylon-900 flex items-center justify-between">
                      <span>Destination guide: ${relatedDest.name}</span>
                      <i data-lucide="arrow-up-right" class="w-4 h-4"></i>
                    </a>
                  ` : ''}
                  <a href="#/accommodation/" onclick="navigateTo('/accommodation/')" class="px-4 py-2.5 rounded-xl bg-white border border-sand-200 hover:border-ceylon-600 font-medium text-ceylon-900 flex items-center justify-between">
                    <span>Accommodation</span>
                    <i data-lucide="arrow-up-right" class="w-4 h-4"></i>
                  </a>
                  <a href="#/transport/" onclick="navigateTo('/transport/')" class="px-4 py-2.5 rounded-xl bg-white border border-sand-200 hover:border-ceylon-600 font-medium text-ceylon-900 flex items-center justify-between">
                    <span>Private transport</span>
                    <i data-lucide="arrow-up-right" class="w-4 h-4"></i>
                  </a>
                </div>
              </div>
            </aside>
          </div>
        </section>
      `;
    }

    // --- EXCLUSIVE EXPERIENCES PAGE (/exclusive-experiences/) ---
    function renderExclusiveExperiencesPage() {
      return `
        <section class="relative bg-ceylon-950 text-white overflow-hidden">
          <div class="absolute inset-0">
            <img src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=1800&q=80"
                 alt="A host preparing a spice and culinary tasting in a Sri Lankan workshop"
                 class="w-full h-full object-cover opacity-40" />
          </div>
          <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
            <span class="text-xs font-semibold uppercase tracking-[0.2em] text-cinnamon-300">Tailor Made Holidays & Hosted Visits</span>
            <h1 class="font-serif text-4xl sm:text-5xl font-bold mt-3 max-w-3xl">Make time for the experiences you came for</h1>
            <div class="mt-8">
              <a href="#/contact/#trip-enquiry" onclick="navigateTo('/contact/', 'trip-enquiry')" class="inline-flex items-center gap-2 bg-cinnamon-600 hover:bg-cinnamon-500 text-white font-semibold px-6 py-3.5 rounded-xl transition">
                <span>Plan My Trip</span>
                <i data-lucide="arrow-right" class="w-4 h-4"></i>
              </a>
            </div>
          </div>
        </section>

        <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div class="lg:col-span-7 space-y-6 text-stone-700 text-base sm:text-lg leading-relaxed">
              <p>
                A private itinerary gives you time to follow the parts of a trip that interest you most. Spend a morning with a producer, walk with a guide who knows the area or stay somewhere small enough to make a quiet evening part of the experience. We can build these requests into a route or arrange a single activity as part of a wider holiday.
              </p>
              <p>
                Tell us what you enjoy and what you would like to avoid rushing. A private guide may be most useful at a heritage site. A boutique stay may make more sense on a night when you will arrive early enough to enjoy it. A producer visit can become the focus of a morning when the host is available and receiving visitors.
              </p>
              <p>
                We confirm what can be arranged for your dates and set out the practical details in your quote. Browse destinations and accommodation to pick a base, then ask which experiences fit naturally within the time you have.
              </p>

              <h2 class="font-serif text-2xl sm:text-3xl font-bold text-ceylon-950 pt-4">Private itineraries and hosted visits</h2>
              <p>
                Start with a blank map or tell us which parts of an existing plan feel rushed. We can recommend where a private driver would save a difficult connection, where a local guide can add context and where to leave the day open. If you enjoy meeting producers, choose one visit and give it enough time for conversation. We can check whether the host receives small groups, what a visit involves and whether it fits the route.
              </p>
              <p>
                A boutique property can be the focus of a stay in its own right. Tell us which features matter most, from a quiet setting to an accessible room or space for a family. We can suggest options and let you know which are on request. Once a plan is ready, review the quote to see which arrangements are included. If the proposed outing depends on the weather or a host's schedule, ask us about a suitable alternative before confirming.
              </p>
            </div>

            <div class="lg:col-span-5 space-y-6">
              <div class="bg-white rounded-2xl p-6 sm:p-8 border border-sand-200 shadow-sm space-y-5">
                <h3 class="font-serif text-xl font-bold text-ceylon-950">Ways to Build Your Itinerary</h3>
                <div class="space-y-4">
                  <div class="p-4 rounded-xl bg-sand-50 border border-sand-200">
                    <div class="font-semibold text-ceylon-950 text-sm">Producer-Led Visits</div>
                    <p class="text-xs text-stone-600 mt-1">Inland cinnamon preparation, Matale spice gardens, or highland tea estate tastings subject to host availability.</p>
                  </div>
                  <div class="p-4 rounded-xl bg-sand-50 border border-sand-200">
                    <div class="font-semibold text-ceylon-950 text-sm">Private Heritage & Trail Guiding</div>
                    <p class="text-xs text-stone-600 mt-1">Qualified site guides at Sigiriya or Polonnaruwa, or local trail guides in the Knuckles range.</p>
                  </div>
                  <div class="p-4 rounded-xl bg-sand-50 border border-sand-200">
                    <div class="font-semibold text-ceylon-950 text-sm">Small Boutique Bases</div>
                    <p class="text-xs text-stone-600 mt-1">Multi-night stays chosen for quiet mornings, walkability or proximity to park gates.</p>
                  </div>
                </div>
                <a href="#/contact/#trip-enquiry" onclick="navigateTo('/contact/', 'trip-enquiry')" class="w-full inline-flex items-center justify-center gap-2 bg-ceylon-800 hover:bg-ceylon-900 text-white font-semibold py-3.5 rounded-xl transition">
                  <span>Start a Bespoke Enquiry</span>
                  <i data-lucide="arrow-right" class="w-4 h-4"></i>
                </a>
              </div>
            </div>
          </div>
        </section>
      `;
    }

    // --- TRANSPORT AND TRAVEL SERVICES PAGE (/transport/) ---
    function renderTransportPage() {
      return `
        <section class="relative bg-ceylon-950 text-white overflow-hidden">
          <div class="absolute inset-0">
            <img src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=1800&q=80"
                 alt="Private chauffeur-driven touring vehicle on a scenic road"
                 class="w-full h-full object-cover opacity-40" />
          </div>
          <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
            <span class="text-xs font-semibold uppercase tracking-[0.2em] text-cinnamon-300">Private Transfers & Drivers</span>
            <h1 class="font-serif text-4xl sm:text-5xl font-bold mt-3 max-w-3xl">Arrange the road part of your trip</h1>
            <div class="mt-8">
              <button onclick="document.getElementById('transfer-enquiry').scrollIntoView({ behavior: 'smooth' })" class="inline-flex items-center gap-2 bg-cinnamon-600 hover:bg-cinnamon-500 text-white font-semibold px-6 py-3.5 rounded-xl transition">
                <span>Request a Transfer</span>
                <i data-lucide="arrow-down" class="w-4 h-4"></i>
              </button>
            </div>
          </div>
        </section>

        <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div class="lg:col-span-6 space-y-6 text-stone-700 text-base sm:text-lg leading-relaxed">
              <p>
                Arrange an airport pickup, a private drive between hotels or a vehicle with a driver for several days. We can discuss the route, plan pickup around your schedule and suggest whether a car or van makes sense for the passengers and luggage. If you already have a hotel or activity reservation, share the details so we can plan around it.
              </p>
              <p>
                For an airport transfer, provide your flight number, arrival time and drop-off address. For travel between regions, tell us if you want a direct drive or one or two stops along the way. A longer itinerary may also need a local guide, separately arranged safari vehicle or help coordinating accommodation and activities.
              </p>
              <p>
                Your quote will identify the vehicle arrangement, intended pickup and any extras that need confirmation. If you prefer to drive or ride independently, visit Vehicle Rentals to discuss eligibility and the appropriate category. To plan the whole journey, use the trip enquiry and include your preferred pace.
              </p>

              <h2 class="font-serif text-2xl font-bold text-ceylon-950 pt-4">Airport transfers and multi-day transport</h2>
              <p>
                For an airport pickup, tell us the flight number, how many travellers are arriving and where you want to go first. Mention bulky bags, sports equipment or any special requirements so we can check the right vehicle. Once the transfer is confirmed, keep the meeting point and pickup instructions with your travel documents. If your plans change, contact us with the booking reference and updated details.
              </p>
              <p>
                For several days on the road, share the whole route even if you only need a driver for part of it. We can look at each stop, check whether a detour is practical and discuss the time needed between stays. If the trip includes walking, a heritage visit or a park excursion, your quote can show the guiding or specialist vehicle arrangements separately. Tell us if you prefer a direct transfer on some days and a slower journey on others. You can build a longer journey around a sample itinerary.
              </p>
            </div>

            <!-- Transfer Enquiry Form (#transfer-enquiry anchor per spec) -->
            <div id="transfer-enquiry" class="scroll-mt-28 lg:col-span-6 bg-white rounded-3xl p-6 sm:p-8 border border-sand-200 shadow-lg">
              <span class="text-xs font-semibold uppercase tracking-wider text-ceylon-700">Chauffeur Car or Van</span>
              <h2 class="font-serif text-2xl font-bold text-ceylon-950 mt-1">Transfer & Private Driver Enquiry</h2>
              <p class="text-sm text-stone-600 mt-1 mb-6">Share your pickup, drop-off, flight details and luggage requirements.</p>

              <form onsubmit="handleFormSubmit(event, 'Transfer Enquiry')" class="space-y-4">
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label class="block text-xs font-semibold text-stone-700 mb-1">Full name *</label>
                    <input type="text" name="fullName" required class="w-full rounded-xl border border-sand-300 bg-sand-50 px-3.5 py-2.5 text-sm" />
                  </div>
                  <div>
                    <label class="block text-xs font-semibold text-stone-700 mb-1">Email or WhatsApp *</label>
                    <input type="text" name="contact" required class="w-full rounded-xl border border-sand-300 bg-sand-50 px-3.5 py-2.5 text-sm" />
                  </div>
                </div>
                <div>
                  <label class="block text-xs font-semibold text-stone-700 mb-1">Pickup and drop-off *</label>
                  <input type="text" name="route" required placeholder="e.g. Bandaranaike Airport (CMB) to Galle Fort" class="w-full rounded-xl border border-sand-300 bg-sand-50 px-3.5 py-2.5 text-sm" />
                </div>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label class="block text-xs font-semibold text-stone-700 mb-1">Date and time *</label>
                    <input type="text" name="dateTime" required placeholder="e.g. 14 Feb 2027, 09:30" class="w-full rounded-xl border border-sand-300 bg-sand-50 px-3.5 py-2.5 text-sm" />
                  </div>
                  <div>
                    <label class="block text-xs font-semibold text-stone-700 mb-1">Flight number where applicable</label>
                    <input type="text" name="flightNumber" placeholder="e.g. UL 504" class="w-full rounded-xl border border-sand-300 bg-sand-50 px-3.5 py-2.5 text-sm" />
                  </div>
                </div>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label class="block text-xs font-semibold text-stone-700 mb-1">Passengers *</label>
                    <input type="text" name="passengers" required placeholder="e.g. 2 adults, 1 child" class="w-full rounded-xl border border-sand-300 bg-sand-50 px-3.5 py-2.5 text-sm" />
                  </div>
                  <div>
                    <label class="block text-xs font-semibold text-stone-700 mb-1">Luggage</label>
                    <input type="text" name="luggage" placeholder="e.g. 2 large suitcases, 2 carry-ons" class="w-full rounded-xl border border-sand-300 bg-sand-50 px-3.5 py-2.5 text-sm" />
                  </div>
                </div>
                <div>
                  <label class="block text-xs font-semibold text-stone-700 mb-1">Optional stops / Multi-day route notes</label>
                  <textarea name="optionalStops" rows="3" placeholder="Tell us if you want stops along the way or a driver for several days." class="w-full rounded-xl border border-sand-300 bg-sand-50 px-3.5 py-2.5 text-sm"></textarea>
                </div>
                <p class="text-xs text-stone-500">
                  See <button type="button" onclick="openLegalModal('privacy')" class="underline text-ceylon-800">Privacy Notice</button> for how we use the information in your enquiry.
                </p>
                <button type="submit" class="w-full bg-ceylon-800 hover:bg-ceylon-900 text-white font-semibold py-3.5 rounded-xl shadow-sm transition">
                  Send Enquiry
                </button>
              </form>
            </div>
          </div>
        </section>
      `;
    }

    // --- VEHICLE RENTALS PAGE (/vehicle-rentals/) ---
    function renderVehicleRentalsPage() {
      return `
        <section class="relative bg-ceylon-950 text-white overflow-hidden">
          <div class="absolute inset-0">
            <img src="https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=1800&q=80"
                 alt="Touring motorcycle prepared for independent travel in Sri Lanka"
                 class="w-full h-full object-cover opacity-40" />
          </div>
          <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
            <span class="text-xs font-semibold uppercase tracking-[0.2em] text-cinnamon-300">Motorcycle & Vehicle Rentals</span>
            <h1 class="font-serif text-4xl sm:text-5xl font-bold mt-3 max-w-3xl">Find a vehicle for your dates</h1>
            <div class="mt-8">
              <button onclick="document.getElementById('rental-enquiry').scrollIntoView({ behavior: 'smooth' })" class="inline-flex items-center gap-2 bg-cinnamon-600 hover:bg-cinnamon-500 text-white font-semibold px-6 py-3.5 rounded-xl transition">
                <span>Reserve a Vehicle</span>
                <i data-lucide="arrow-down" class="w-4 h-4"></i>
              </button>
            </div>
          </div>
        </section>

        <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div class="lg:col-span-6 space-y-6 text-stone-700 text-base sm:text-lg leading-relaxed">
              <p>
                Tell us your dates, preferred pickup and return points, and the kind of vehicle you need. You can enquire about a motorcycle or another available rental category for an independent trip. If several people are travelling together or you would rather have a driver, private transport may be the better fit.
              </p>
              <p>
                For a self-drive reservation, we will ask about the driver or rider and check eligibility for the category requested. Ask us which licence documents to prepare, what insurance applies, and how the deposit, excess, permitted use and return conditions are handled. You can request optional equipment at the same time and we can check compatibility and availability.
              </p>
              <p>
                Your quote will set out the proposed vehicle or category, pickup and return details, included items and applicable terms. Availability may depend on vehicles already assigned to tours or due for maintenance. Submit your request before travelling so there is time to confirm the vehicle and documents. Wait for a booking confirmation before relying on the reservation.
              </p>

              <h2 class="font-serif text-2xl font-bold text-ceylon-950 pt-4">Self-drive motorcycles and other vehicles</h2>
              <p>
                Tell us which roads and regions you plan to use so we can discuss a suitable category. For a motorcycle, include the type of bike you ride regularly and whether you need luggage equipment. If you are enquiring about another vehicle category, tell us the number of passengers and bags. The proposed vehicle, pickup arrangements and any extras will be shown in the quote where available.
              </p>
              <p>
                Before committing, ask what documents the driver or rider needs to provide and how the vehicle's condition is recorded at collection and return. Review the permitted-use terms, insurance coverage, excess, security deposit and damage reporting arrangements for your specific rental. If your plans involve remote roads or a one-way return, mention them early so we can check feasibility and costs. Travellers who want to choose the itinerary but leave the driving to someone else can request a chauffeur-driven vehicle. For an accompanied motorcycle trip, ask whether a guided itinerary can be arranged.
              </p>
            </div>

            <!-- Rental Enquiry Form (#rental-enquiry anchor per spec) -->
            <div id="rental-enquiry" class="scroll-mt-28 lg:col-span-6 bg-white rounded-3xl p-6 sm:p-8 border border-sand-200 shadow-lg">
              <span class="text-xs font-semibold uppercase tracking-wider text-cinnamon-700">Self-Drive & Rider Eligibility Check</span>
              <h2 class="font-serif text-2xl font-bold text-ceylon-950 mt-1">Vehicle Rental Enquiry</h2>
              <p class="text-sm text-stone-600 mt-1 mb-6">Wait for secure document instructions before sending licence or identity records.</p>

              <form onsubmit="handleFormSubmit(event, 'Vehicle Rental Enquiry')" class="space-y-4">
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label class="block text-xs font-semibold text-stone-700 mb-1">Full name *</label>
                    <input type="text" name="fullName" required class="w-full rounded-xl border border-sand-300 bg-sand-50 px-3.5 py-2.5 text-sm" />
                  </div>
                  <div>
                    <label class="block text-xs font-semibold text-stone-700 mb-1">Email or WhatsApp *</label>
                    <input type="text" name="contact" required class="w-full rounded-xl border border-sand-300 bg-sand-50 px-3.5 py-2.5 text-sm" />
                  </div>
                </div>
                <div>
                  <label class="block text-xs font-semibold text-stone-700 mb-1">Pickup and return dates and locations *</label>
                  <input type="text" name="datesLocations" required placeholder="e.g. 10–18 Mar, pickup Panadura / return Negombo" class="w-full rounded-xl border border-sand-300 bg-sand-50 px-3.5 py-2.5 text-sm" />
                </div>
                <div>
                  <label class="block text-xs font-semibold text-stone-700 mb-1">Vehicle category *</label>
                  <select name="vehicleCategory" class="w-full rounded-xl border border-sand-300 bg-sand-50 px-3.5 py-2.5 text-sm">
                    <option value="Motorcycle (Dual-sport / Adventure)">Motorcycle (Dual-sport / Adventure)</option>
                    <option value="Motorcycle (Standard / Commuter)">Motorcycle (Standard / Commuter)</option>
                    <option value="Passenger Car (Self-drive)">Passenger Car (Self-drive)</option>
                    <option value="SUV / 4x4 Category">SUV / 4x4 Category</option>
                  </select>
                </div>
                <div>
                  <label class="block text-xs font-semibold text-stone-700 mb-1">Driver or rider experience *</label>
                  <textarea name="experience" rows="2" required placeholder="Type of bike or vehicle you drive regularly, licence country & years of experience" class="w-full rounded-xl border border-sand-300 bg-sand-50 px-3.5 py-2.5 text-sm"></textarea>
                </div>
                <div>
                  <label class="block text-xs font-semibold text-stone-700 mb-1">Equipment requests & planned regions</label>
                  <textarea name="equipment" rows="2" placeholder="e.g. Panniers, top box, helmet/gear sizing, or highland/remote roads planned" class="w-full rounded-xl border border-sand-300 bg-sand-50 px-3.5 py-2.5 text-sm"></textarea>
                </div>
                <p class="text-xs text-stone-500">
                  See <button type="button" onclick="openLegalModal('privacy')" class="underline text-ceylon-800">Privacy Notice</button> for how we use the information in your enquiry.
                </p>
                <button type="submit" class="w-full bg-ceylon-800 hover:bg-ceylon-900 text-white font-semibold py-3.5 rounded-xl shadow-sm transition">
                  Send Enquiry
                </button>
              </form>
            </div>
          </div>
        </section>
      `;
    }

    // --- ACCOMMODATION PAGE (/accommodation/) ---
    function renderAccommodationPage() {
      return `
        <section class="relative bg-ceylon-950 text-white overflow-hidden">
          <div class="absolute inset-0">
            <img src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1800&q=80"
                 alt="Boutique Sri Lankan retreat property exterior"
                 class="w-full h-full object-cover opacity-40" />
          </div>
          <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
            <span class="text-xs font-semibold uppercase tracking-[0.2em] text-cinnamon-300">Boutique Stays, Coastal Bases & Lodges</span>
            <h1 class="font-serif text-4xl sm:text-5xl font-bold mt-3 max-w-3xl">Choose a stay that fits your route</h1>
            <div class="mt-8">
              <a href="#/contact/#accommodation-enquiry" onclick="navigateTo('/contact/', 'accommodation-enquiry')" class="inline-flex items-center gap-2 bg-cinnamon-600 hover:bg-cinnamon-500 text-white font-semibold px-6 py-3.5 rounded-xl transition">
                <span>Request Accommodation</span>
                <i data-lucide="arrow-right" class="w-4 h-4"></i>
              </a>
            </div>
          </div>
        </section>

        <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div class="lg:col-span-7 space-y-6 text-stone-700 text-base sm:text-lg leading-relaxed">
              <p>
                Where you stay shapes what you can do comfortably each day. A room near Galle Fort gives you time to walk the streets in the evening. In the hills, a quiet base can make a slower morning part of the trip. For a safari, consider a lodge suited to the intended park gate. We can propose options around your route, travel style and budget.
              </p>
              <p>
                Tell us your dates, number of rooms, preferred bedding and any accessibility, meal or family requirements. Share whether you prefer a boutique hotel, a coastal property, a retreat in the highlands or a nature lodge. If you are arranging the trip yourself, provide nearby places you want to visit so we can check how the stay fits.
              </p>
              <p>
                We will explain which rooms and rates a supplier has confirmed and which remain on request. Where a first choice is unavailable, we can discuss another property or adjust the route. You can add transfers to a stay or include accommodation in a complete tour quote.
              </p>

              <h2 class="font-serif text-2xl sm:text-3xl font-bold text-ceylon-950 pt-4">Boutique hotels and regional stays</h2>
              <p>
                A few nights at the right base can give you more usable time than a new hotel every evening. On the south coast, decide whether you want beach access or proximity to Galle Fort. In the hills, consider whether a hillside retreat or a room in town would suit your mornings and evening plans. Near wildlife areas, tell us whether easy access to the intended park gate matters more than facilities at the property.
              </p>
              <p>
                We can look for boutique hotels, coastal stays, highland retreats and nature lodges that fit your route. Share your approximate budget and the room features your group needs. Let us know if you need parking, step-free access or an early breakfast. The quote will identify the property, room category and meals offered once confirmed by the supplier. If a particular stay is central to your holiday, tell us before we arrange transport so we can check the room and route together.
              </p>
            </div>

            <div class="lg:col-span-5 space-y-6">
              <div class="bg-white rounded-2xl p-6 sm:p-8 border border-sand-200 shadow-sm space-y-5">
                <h3 class="font-serif text-xl font-bold text-ceylon-950">Property Categories We Source</h3>
                <ul class="space-y-3 text-sm text-stone-700">
                  <li class="flex items-start gap-2.5">
                    <i data-lucide="building-2" class="w-4 h-4 text-ceylon-700 mt-0.5 shrink-0"></i>
                    <span><strong>Boutique Hotels:</strong> Character properties inside Galle Fort, Kandy and heritage towns.</span>
                  </li>
                  <li class="flex items-start gap-2.5">
                    <i data-lucide="waves" class="w-4 h-4 text-ceylon-700 mt-0.5 shrink-0"></i>
                    <span><strong>Coastal Stays:</strong> Beachfront bases in the south and east (Trincomalee, Pasikuda, Batticaloa).</span>
                  </li>
                  <li class="flex items-start gap-2.5">
                    <i data-lucide="mountain" class="w-4 h-4 text-ceylon-700 mt-0.5 shrink-0"></i>
                    <span><strong>Highland Retreats:</strong> Tea-estate bungalows and quiet hill-country stays in Nuwara Eliya and Ella.</span>
                  </li>
                  <li class="flex items-start gap-2.5">
                    <i data-lucide="trees" class="w-4 h-4 text-ceylon-700 mt-0.5 shrink-0"></i>
                    <span><strong>Nature & Safari Lodges:</strong> Positioned near Udawalawe, Yala and Knuckles access points.</span>
                  </li>
                </ul>
                <a href="#/contact/#accommodation-enquiry" onclick="navigateTo('/contact/', 'accommodation-enquiry')" class="w-full inline-flex items-center justify-center gap-2 bg-ceylon-800 hover:bg-ceylon-900 text-white font-semibold py-3.5 rounded-xl transition">
                  <span>Request Accommodation</span>
                  <i data-lucide="arrow-right" class="w-4 h-4"></i>
                </a>
              </div>
            </div>
          </div>
        </section>
      `;
    }

    // --- THE CEYLON GRAND RIDE PAGE (/ceylon-grand-ride/) ---
    function renderGrandRidePage() {
      return `
        <section class="relative bg-ceylon-950 text-white overflow-hidden">
          <div class="absolute inset-0">
            <img src="https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=1800&q=85"
                 alt="Small formation of properly equipped motorcyclists on a public-road stage"
                 class="w-full h-full object-cover opacity-45" />
            <div class="absolute inset-0 bg-gradient-to-r from-ceylon-950/90 via-ceylon-950/70 to-transparent"></div>
          </div>
          <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
            <div class="inline-flex items-center gap-2 bg-cinnamon-600/25 border border-cinnamon-400/40 text-cinnamon-200 text-xs font-semibold uppercase tracking-wider px-3.5 py-1.5 rounded-lg mb-4">
              <span>Proposed Inaugural Edition · Mid-February 2027</span>
            </div>
            <h1 class="font-serif text-4xl sm:text-6xl font-bold max-w-3xl">The Ceylon Grand Ride</h1>
            <p class="text-xl text-sand-100 mt-3 max-w-2xl">An annual motorcycle journey through Sri Lanka</p>
            <p class="text-xs text-sand-300 mt-3">Illustrative motorcycle touring formation on a scenic public road.</p>
            <div class="mt-8">
              <button onclick="document.getElementById('register-interest').scrollIntoView({ behavior: 'smooth' })" class="inline-flex items-center gap-2 bg-cinnamon-600 hover:bg-cinnamon-500 text-white font-semibold px-6 py-3.5 rounded-xl shadow-lg transition">
                <span>Register Interest</span>
                <i data-lucide="arrow-down" class="w-4 h-4"></i>
              </button>
            </div>
          </div>
        </section>

        <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <!-- Left Content -->
            <div class="lg:col-span-7 space-y-6 text-stone-700 text-base sm:text-lg leading-relaxed">
              <p>
                The Ceylon Grand Ride is a planned annual, non-competitive motorcycle event across Sri Lanka. The inaugural edition is proposed for mid-February 2027, with a ceremonial flag-off planned at The Barnhouse Studio in Panadura. Start dates, joining points and the final route will be announced once the operating arrangements are confirmed.
              </p>
              <p>
                The proposed journey moves from the southwest coast and cinnamon country through the hills and across to the east and north. Along the way, time off the bike can include heritage visits, regional meals, producer stops and optional wellness activities. Participants can express interest in a short stage or in the full journey of up to 30 days.
              </p>
              <p>
                To help us suggest a stage, tell us about your motorcycle experience, the time you have available and the type of support you would like. We will share entry information when dates, the route and fleet allocation are confirmed. For trips outside the annual event, explore our year-round tours and vehicle rental enquiries.
              </p>

              <h2 class="font-serif text-2xl sm:text-3xl font-bold text-ceylon-950 pt-4">Proposed route and participation options</h2>
              <p>
                The route concept starts in Panadura and heads south towards Galle before passing through Ratnapura and the southeast. It continues into tea country around Ella and Nuwara Eliya, then reaches the east coast and proceeds north towards Jaffna and Mannar. The proposed return follows public roads towards the Wilpattu area, the Cultural Triangle, Knuckles and Kandy, with a finish near Negombo.
              </p>
              <p>
                Choose the duration that fits the trip you want. A shorter stage could give you a focused look at one region. Multiple stages give you a chance to experience different landscapes and spend more time on off-bike activities. The longest option takes in the complete expedition window, including activity, rest and transfer days. Joining and departure points depend on how luggage, accommodation and motorcycle handovers are arranged for each stage.
              </p>
              <p>
                Each option is provisional. We will share daily stages, joining instructions and expected riding demands after route checks and operational confirmation.
              </p>

              <!-- Proposed Durations Table -->
              <div class="bg-white rounded-2xl border border-sand-200 overflow-hidden shadow-sm my-6">
                <table class="w-full text-left border-collapse">
                  <thead>
                    <tr class="bg-sand-100 border-b border-sand-200 text-xs font-semibold uppercase tracking-wider text-stone-600">
                      <th class="py-3.5 px-6 w-44">Proposed duration</th>
                      <th class="py-3.5 px-6">What to expect</th>
                    </tr>
                  </thead>
                  <tbody class="divide-y divide-sand-200 text-sm">
                    ${SITE_DATA.grandRideStages.map(st => `
                      <tr class="hover:bg-sand-50">
                        <td class="py-3.5 px-6 font-bold text-ceylon-900">${st.duration}</td>
                        <td class="py-3.5 px-6 text-stone-700">${st.expect}</td>
                      </tr>
                    `).join('')}
                  </tbody>
                </table>
              </div>

              <h2 class="font-serif text-2xl sm:text-3xl font-bold text-ceylon-950 pt-2">Eligibility and rider support</h2>
              <p>
                Tell us about your recent experience, how often you ride and the kind of motorcycle you are comfortable handling. Before entry is confirmed, we will check the relevant licence entitlement and supporting documents for the motorcycle category. We will also share the expected road conditions, protective equipment requirements and the arrangements for bike allocation.
              </p>
              <p>
                The proposed support plan includes lead and sweep riding, pre-ride checks, daylight stages, planned breaks and arrangements for luggage, mechanical assistance and recovery. The services included for your stage will be set out before booking. Some activities, including a possible Yala or Wilpattu safari, would take place separately in an arranged park vehicle where access and permits are confirmed. Discuss any companion or non-riding arrangements with us before committing.
              </p>
              <p>
                The initial interest form asks for your contact details, preferred duration and riding background. Please wait for secure document instructions before sending licence or identity records. We will contact you about the next step after reviewing your request.
              </p>
            </div>

            <!-- Right Form: Register Interest (#register-interest anchor per spec) -->
            <div id="register-interest" class="scroll-mt-28 lg:col-span-5 bg-white rounded-3xl p-6 sm:p-8 border border-sand-200 shadow-lg sticky top-24">
              <span class="text-xs font-semibold uppercase tracking-wider text-cinnamon-700">Proposed Mid-February 2027</span>
              <h2 class="font-serif text-2xl font-bold text-ceylon-950 mt-1">Register Interest</h2>
              <p class="text-sm text-stone-600 mt-1 mb-6">
                No payment or sensitive identity documents are collected at this stage.
              </p>

              <form onsubmit="handleFormSubmit(event, 'The Ceylon Grand Ride Interest')" class="space-y-4">
                <div>
                  <label class="block text-xs font-semibold text-stone-700 mb-1">Name *</label>
                  <input type="text" name="name" required class="w-full rounded-xl border border-sand-300 bg-sand-50 px-3.5 py-2.5 text-sm" />
                </div>
                <div>
                  <label class="block text-xs font-semibold text-stone-700 mb-1">Email *</label>
                  <input type="email" name="email" required class="w-full rounded-xl border border-sand-300 bg-sand-50 px-3.5 py-2.5 text-sm" />
                </div>
                <div>
                  <label class="block text-xs font-semibold text-stone-700 mb-1">Country of residence *</label>
                  <input type="text" name="country" required class="w-full rounded-xl border border-sand-300 bg-sand-50 px-3.5 py-2.5 text-sm" />
                </div>
                <div>
                  <label class="block text-xs font-semibold text-stone-700 mb-1">Preferred duration *</label>
                  <select name="duration" class="w-full rounded-xl border border-sand-300 bg-sand-50 px-3.5 py-2.5 text-sm">
                    <option value="3 or 5 days">3 or 5 days</option>
                    <option value="7 or 10 days">7 or 10 days</option>
                    <option value="12 or 14 days">12 or 14 days</option>
                    <option value="20 days">20 days</option>
                    <option value="Up to 30 days">Up to 30 days</option>
                  </select>
                </div>
                <div>
                  <label class="block text-xs font-semibold text-stone-700 mb-1">Recent riding experience *</label>
                  <textarea name="experience" rows="2" required placeholder="How often you ride, touring experience, road conditions" class="w-full rounded-xl border border-sand-300 bg-sand-50 px-3.5 py-2.5 text-sm"></textarea>
                </div>
                <div>
                  <label class="block text-xs font-semibold text-stone-700 mb-1">Motorcycle preference</label>
                  <input type="text" name="bikePreference" placeholder="e.g. 250cc–500cc dual-sport or touring" class="w-full rounded-xl border border-sand-300 bg-sand-50 px-3.5 py-2.5 text-sm" />
                </div>
                <div>
                  <label class="block text-xs font-semibold text-stone-700 mb-1">Any questions</label>
                  <textarea name="questions" rows="2" placeholder="Companion arrangements, stage joining points, gear" class="w-full rounded-xl border border-sand-300 bg-sand-50 px-3.5 py-2.5 text-sm"></textarea>
                </div>
                <p class="text-xs text-stone-500">
                  See <button type="button" onclick="openLegalModal('privacy')" class="underline text-ceylon-800">Privacy Notice</button> for how we use the information in your enquiry.
                </p>
                <button type="submit" class="w-full bg-cinnamon-600 hover:bg-cinnamon-500 text-white font-semibold py-3.5 rounded-xl shadow-sm transition">
                  Register Interest
                </button>
              </form>
            </div>
          </div>
        </section>
      `;
    }

    // --- CONTACT AND ENQUIRIES PAGE (/contact/) ---
    function renderContactPage() {
      return `
        <section class="bg-ceylon-950 text-white py-16 sm:py-20">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <span class="text-xs font-semibold uppercase tracking-[0.2em] text-cinnamon-300">Plan Your Trip</span>
            <h1 class="font-serif text-4xl sm:text-5xl font-bold mt-3">Tell us what you have in mind</h1>
            <div class="mt-6">
              <button onclick="document.getElementById('trip-enquiry').scrollIntoView({ behavior: 'smooth' })" class="inline-flex items-center gap-2 bg-cinnamon-600 hover:bg-cinnamon-500 text-white font-semibold px-6 py-3 rounded-xl transition">
                <span>Send Enquiry</span>
                <i data-lucide="arrow-down" class="w-4 h-4"></i>
              </button>
            </div>
          </div>
        </section>

        <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <!-- Left Column: Guidance & Direct Contact Channels -->
            <div class="lg:col-span-5 space-y-6">
              <div class="space-y-4 text-stone-700 leading-relaxed">
                <p>
                  Send us your dates, the places you want to see and how you would like to travel. If you already have a route, include it and tell us which parts need arranging. If you are at the early planning stage, a few interests and an idea of your pace are enough for us to suggest a starting point.
                </p>
                <p>
                  Use the trip enquiry for a complete holiday or a question about a sample tour. Choose an accommodation request if your dates and destination are already decided. If you need a driver, an airport pickup or a standalone vehicle, use the relevant transport or rental form so we have the details needed to check your request.
                </p>
                <p>
                  You can also contact us by phone, WhatsApp or email using the details below. Include a booking reference when asking about an existing arrangement. For the annual ride, use the event interest form and let us know which duration you are considering.
                </p>
              </div>

              <!-- Direct Contact Channels Card -->
              <div class="bg-white rounded-2xl p-6 border border-sand-200 shadow-sm space-y-4">
                <h2 class="font-serif text-xl font-bold text-ceylon-950">Contact channels</h2>
                <div class="space-y-3 text-sm">
                  <div class="flex items-center gap-3">
                    <div class="w-9 h-9 rounded-xl bg-ceylon-50 text-ceylon-800 flex items-center justify-center shrink-0">
                      <i data-lucide="phone" class="w-4 h-4"></i>
                    </div>
                    <div>
                      <div class="text-xs text-stone-500">Phone</div>
                      <div class="font-medium text-stone-800">Available on quote & booking confirmation</div>
                    </div>
                  </div>
                  <div class="flex items-center gap-3">
                    <div class="w-9 h-9 rounded-xl bg-ceylon-50 text-ceylon-800 flex items-center justify-center shrink-0">
                      <i data-lucide="message-circle" class="w-4 h-4"></i>
                    </div>
                    <div>
                      <div class="text-xs text-stone-500">WhatsApp</div>
                      <div class="font-medium text-stone-800">Direct trip coordination desk</div>
                    </div>
                  </div>
                  <div class="flex items-center gap-3">
                    <div class="w-9 h-9 rounded-xl bg-ceylon-50 text-ceylon-800 flex items-center justify-center shrink-0">
                      <i data-lucide="mail" class="w-4 h-4"></i>
                    </div>
                    <div>
                      <div class="text-xs text-stone-500">Email</div>
                      <div class="font-medium text-stone-800">enquiries@barclaytravelsrilanka.com</div>
                    </div>
                  </div>
                </div>
                <div class="pt-3 border-t border-sand-100">
                  <a href="#/ceylon-grand-ride/#register-interest" onclick="navigateTo('/ceylon-grand-ride/', 'register-interest')" class="text-xs font-semibold text-cinnamon-700 hover:text-cinnamon-800 inline-flex items-center gap-1">
                    <span>Registering for The Ceylon Grand Ride? Open Event Form</span>
                    <i data-lucide="arrow-right" class="w-3.5 h-3.5"></i>
                  </a>
                </div>
              </div>
            </div>

            <!-- Right Column: Multi-Tab Enquiry Forms (#trip-enquiry & #accommodation-enquiry anchors) -->
            <div class="lg:col-span-7 space-y-8">
              <!-- Quick Form Switcher -->
              <div class="flex flex-wrap gap-2 bg-sand-100 p-2 rounded-2xl border border-sand-200">
                <button type="button" onclick="switchContactTab('trip')" id="tab-btn-trip" class="px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold bg-ceylon-800 text-white transition">
                  Trip Enquiry
                </button>
                <button type="button" onclick="switchContactTab('accommodation')" id="tab-btn-accommodation" class="px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-stone-700 hover:bg-white transition">
                  Accommodation Request
                </button>
                <button type="button" onclick="switchContactTab('transfer')" id="tab-btn-transfer" class="px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-stone-700 hover:bg-white transition">
                  Transfer Request
                </button>
                <button type="button" onclick="switchContactTab('rental')" id="tab-btn-rental" class="px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-stone-700 hover:bg-white transition">
                  Vehicle Rental
                </button>
              </div>

              <!-- 1. TRIP ENQUIRY FORM (#trip-enquiry) -->
              <div id="trip-enquiry" class="scroll-mt-28 bg-white rounded-3xl p-6 sm:p-8 border border-sand-200 shadow-lg">
                <h2 class="font-serif text-2xl font-bold text-ceylon-950">Trip Enquiry</h2>
                <p class="text-sm text-stone-600 mt-1 mb-6">For a complete private holiday or a tailored version of a sample tour.</p>

                <form onsubmit="handleFormSubmit(event, 'Trip Enquiry')" class="space-y-4">
                  <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label class="block text-xs font-semibold text-stone-700 mb-1">Full name *</label>
                      <input type="text" name="fullName" required class="w-full rounded-xl border border-sand-300 bg-sand-50 px-3.5 py-2.5 text-sm" />
                    </div>
                    <div>
                      <label class="block text-xs font-semibold text-stone-700 mb-1">Email *</label>
                      <input type="email" name="email" required class="w-full rounded-xl border border-sand-300 bg-sand-50 px-3.5 py-2.5 text-sm" />
                    </div>
                  </div>
                  <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label class="block text-xs font-semibold text-stone-700 mb-1">Phone or WhatsApp</label>
                      <input type="text" name="phone" class="w-full rounded-xl border border-sand-300 bg-sand-50 px-3.5 py-2.5 text-sm" />
                    </div>
                    <div>
                      <label class="block text-xs font-semibold text-stone-700 mb-1">Travel dates or flexibility *</label>
                      <input type="text" name="dates" value="${appState.prefilledDates}" required placeholder="e.g. 10–20 Nov or flexible in Q1" class="w-full rounded-xl border border-sand-300 bg-sand-50 px-3.5 py-2.5 text-sm" />
                    </div>
                  </div>
                  <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label class="block text-xs font-semibold text-stone-700 mb-1">Number of travellers *</label>
                      <input type="text" name="travellers" required placeholder="e.g. 2 adults" class="w-full rounded-xl border border-sand-300 bg-sand-50 px-3.5 py-2.5 text-sm" />
                    </div>
                    <div>
                      <label class="block text-xs font-semibold text-stone-700 mb-1">Start and finish</label>
                      <input type="text" name="startFinish" placeholder="e.g. Colombo Airport to Galle" class="w-full rounded-xl border border-sand-300 bg-sand-50 px-3.5 py-2.5 text-sm" />
                    </div>
                  </div>
                  <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label class="block text-xs font-semibold text-stone-700 mb-1">Preferred tour</label>
                      <select name="preferredTour" class="w-full rounded-xl border border-sand-300 bg-sand-50 px-3.5 py-2.5 text-sm">
                        <option value="Custom / Bespoke Route">Custom / Bespoke Route</option>
                        ${SITE_DATA.tours.map(t => `
                          <option value="${t.title}" ${appState.prefilledTour === t.title ? 'selected' : ''}>${t.title} (${t.duration})</option>
                        `).join('')}
                      </select>
                    </div>
                    <div>
                      <label class="block text-xs font-semibold text-stone-700 mb-1">Interests</label>
                      <input type="text" name="interests" value="${appState.prefilledDestination}" placeholder="Coast, tea hills, wildlife, food, walking" class="w-full rounded-xl border border-sand-300 bg-sand-50 px-3.5 py-2.5 text-sm" />
                    </div>
                  </div>
                  <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label class="block text-xs font-semibold text-stone-700 mb-1">Accommodation preference</label>
                      <input type="text" name="accommodationPref" placeholder="Boutique, coastal, lodge" class="w-full rounded-xl border border-sand-300 bg-sand-50 px-3.5 py-2.5 text-sm" />
                    </div>
                    <div>
                      <label class="block text-xs font-semibold text-stone-700 mb-1">Transport preference</label>
                      <input type="text" name="transportPref" placeholder="Private car, van, motorcycle" class="w-full rounded-xl border border-sand-300 bg-sand-50 px-3.5 py-2.5 text-sm" />
                    </div>
                    <div>
                      <label class="block text-xs font-semibold text-stone-700 mb-1">Budget range (optional)</label>
                      <input type="text" name="budget" placeholder="e.g. USD / GBP" class="w-full rounded-xl border border-sand-300 bg-sand-50 px-3.5 py-2.5 text-sm" />
                    </div>
                  </div>
                  <div>
                    <label class="block text-xs font-semibold text-stone-700 mb-1">Message</label>
                    <textarea name="message" rows="3" placeholder="Tell us about your preferred pace, must-see places or questions." class="w-full rounded-xl border border-sand-300 bg-sand-50 px-3.5 py-2.5 text-sm"></textarea>
                  </div>
                  <p class="text-xs text-stone-500">
                    See <button type="button" onclick="openLegalModal('privacy')" class="underline text-ceylon-800">Privacy Notice</button> for how we use the information in your enquiry.
                  </p>
                  <button type="submit" class="w-full bg-ceylon-800 hover:bg-ceylon-900 text-white font-semibold py-3.5 rounded-xl shadow-sm transition">
                    Send Enquiry
                  </button>
                </form>
              </div>

              <!-- 2. ACCOMMODATION FORM (#accommodation-enquiry) -->
              <div id="accommodation-enquiry" class="scroll-mt-28 bg-white rounded-3xl p-6 sm:p-8 border border-sand-200 shadow-lg">
                <h2 class="font-serif text-2xl font-bold text-ceylon-950">Accommodation Request</h2>
                <p class="text-sm text-stone-600 mt-1 mb-6">For boutique hotels, coastal stays, highland retreats and nature lodges.</p>

                <form onsubmit="handleFormSubmit(event, 'Accommodation Enquiry')" class="space-y-4">
                  <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label class="block text-xs font-semibold text-stone-700 mb-1">Full name & Email *</label>
                      <input type="text" name="contact" required placeholder="Your name and email" class="w-full rounded-xl border border-sand-300 bg-sand-50 px-3.5 py-2.5 text-sm" />
                    </div>
                    <div>
                      <label class="block text-xs font-semibold text-stone-700 mb-1">Destination *</label>
                      <input type="text" name="destination" value="${appState.prefilledDestination}" required placeholder="e.g. Galle Fort, Ella, Sigiriya" class="w-full rounded-xl border border-sand-300 bg-sand-50 px-3.5 py-2.5 text-sm" />
                    </div>
                  </div>
                  <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label class="block text-xs font-semibold text-stone-700 mb-1">Check-in and check-out *</label>
                      <input type="text" name="checkInOut" required placeholder="e.g. 12–15 Dec" class="w-full rounded-xl border border-sand-300 bg-sand-50 px-3.5 py-2.5 text-sm" />
                    </div>
                    <div>
                      <label class="block text-xs font-semibold text-stone-700 mb-1">Rooms and guests *</label>
                      <input type="text" name="roomsGuests" required placeholder="e.g. 1 double room, 2 adults" class="w-full rounded-xl border border-sand-300 bg-sand-50 px-3.5 py-2.5 text-sm" />
                    </div>
                  </div>
                  <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label class="block text-xs font-semibold text-stone-700 mb-1">Budget range</label>
                      <input type="text" name="budget" placeholder="Per night budget range" class="w-full rounded-xl border border-sand-300 bg-sand-50 px-3.5 py-2.5 text-sm" />
                    </div>
                    <div>
                      <label class="block text-xs font-semibold text-stone-700 mb-1">Accessibility or meal requirements</label>
                      <input type="text" name="requirements" placeholder="Step-free access, early breakfast, dietary needs" class="w-full rounded-xl border border-sand-300 bg-sand-50 px-3.5 py-2.5 text-sm" />
                    </div>
                  </div>
                  <p class="text-xs text-stone-500">
                    See <button type="button" onclick="openLegalModal('privacy')" class="underline text-ceylon-800">Privacy Notice</button> for how we use the information in your enquiry.
                  </p>
                  <button type="submit" class="w-full bg-ceylon-800 hover:bg-ceylon-900 text-white font-semibold py-3.5 rounded-xl shadow-sm transition">
                    Send Enquiry
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      `;
    }

    function switchContactTab(tab) {
      if (tab === 'trip') {
        document.getElementById('trip-enquiry')?.scrollIntoView({ behavior: 'smooth' });
      } else if (tab === 'accommodation') {
        document.getElementById('accommodation-enquiry')?.scrollIntoView({ behavior: 'smooth' });
      } else if (tab === 'transfer') {
        navigateTo('/transport/', 'transfer-enquiry');
      } else if (tab === 'rental') {
        navigateTo('/vehicle-rentals/', 'rental-enquiry');
      }
    }

    // --- BOOKING, PAYMENTS AND FAQS PAGE (/booking/) ---
    function renderBookingPage() {
      return `
        <section class="relative bg-ceylon-950 text-white overflow-hidden">
          <div class="absolute inset-0">
            <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=1800&q=80"
                 alt="Trip planning route map and travel documents"
                 class="w-full h-full object-cover opacity-35" />
          </div>
          <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
            <span class="text-xs font-semibold uppercase tracking-[0.2em] text-cinnamon-300">Booking, Payments and FAQs</span>
            <h1 class="font-serif text-4xl sm:text-5xl font-bold mt-3 max-w-3xl">From your first request to confirmed travel</h1>
            <div class="mt-8">
              <a href="#/tours/#availability" onclick="navigateTo('/tours/', 'availability')" class="inline-flex items-center gap-2 bg-cinnamon-600 hover:bg-cinnamon-500 text-white font-semibold px-6 py-3.5 rounded-xl transition">
                <span>Check Availability</span>
                <i data-lucide="arrow-right" class="w-4 h-4"></i>
              </a>
            </div>
          </div>
        </section>

        <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
          <!-- Process Overview -->
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div class="lg:col-span-7 space-y-5 text-stone-700 text-base sm:text-lg leading-relaxed">
              <p>
                Choose a tour, vehicle or service and send us the dates you have in mind. If you are requesting a tailormade trip or a supplier-dependent service, we will check the details and explain what is available for your dates. Your quote identifies the agreed services, amount, currency, payment schedule and applicable terms before you commit.
              </p>
              <p>
                If payment is due, use the secure checkout or the payment link issued for your booking. A payment receipt shows the status of that transaction. Your booking is confirmed when you receive a confirmation message with a reference and the agreed arrangements. If some services are still awaiting a supplier, the confirmation will specify the status of each one.
              </p>
              <p>
                Keep your booking reference and check the dates, pickup points, inclusions and any remaining payments. For a change or cancellation, contact us with the reference and the details of your request. We will explain the options and any charges or refund eligibility under the terms accepted at booking.
              </p>
            </div>

            <!-- Booking Reference & Status Lookup -->
            <div class="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-8 border border-sand-200 shadow-sm space-y-4">
              <h2 class="font-serif text-xl font-bold text-ceylon-950">Check Enquiry or Booking Status</h2>
              <p class="text-sm text-stone-600">
                Enter a reference issued during this session (e.g., <code class="bg-sand-100 px-1.5 py-0.5 rounded text-xs">BT-SL-...</code>) to inspect your current request status.
              </p>
              <div class="flex gap-2">
                <input id="booking-ref-input" type="text" placeholder="Enter booking reference" class="flex-grow rounded-xl border border-sand-300 bg-sand-50 px-3.5 py-2.5 text-sm" />
                <button onclick="lookupBookingReference()" class="bg-ceylon-800 hover:bg-ceylon-900 text-white text-sm font-semibold px-4 py-2.5 rounded-xl transition">
                  Check
                </button>
              </div>
              <div id="booking-lookup-result" class="hidden p-4 rounded-xl bg-sand-50 border border-sand-200 text-sm"></div>
            </div>
          </div>

          <!-- FAQs Section -->
          <div>
            <h2 class="font-serif text-3xl font-bold text-ceylon-950 mb-8">Frequently Asked Questions</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              ${SITE_DATA.faqs.map(faq => `
                <div class="bg-white rounded-2xl p-6 border border-sand-200 shadow-sm">
                  <h3 class="font-serif text-lg font-bold text-ceylon-950">${faq.q}</h3>
                  <p class="text-sm text-stone-700 mt-2.5 leading-relaxed">${faq.a}</p>
                </div>
              `).join('')}
            </div>
          </div>

          <!-- Standard Booking & Payment Status Definitions -->
          <div class="bg-sand-100 rounded-3xl p-6 sm:p-10 border border-sand-200">
            <h2 class="font-serif text-2xl font-bold text-ceylon-950 mb-2">Booking & Payment Status Guide</h2>
            <p class="text-sm text-stone-600 mb-6">
              We separate payment receipts from final booking confirmations so you always know which arrangements are confirmed and which await supplier checks.
            </p>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              ${SITE_DATA.bookingStatuses.map(st => `
                <div class="bg-white rounded-2xl p-4 border border-sand-200 flex flex-col gap-2">
                  <div>
                    <span class="inline-block text-xs font-semibold px-2.5 py-1 rounded-lg ${st.badge}">${st.label}</span>
                  </div>
                  <p class="text-xs text-stone-600 leading-relaxed">${st.copy}</p>
                </div>
              `).join('')}
            </div>
          </div>
        </section>
      `;
    }

    function lookupBookingReference() {
      const input = document.getElementById('booking-ref-input');
      const resultBox = document.getElementById('booking-lookup-result');
      if (!input || !resultBox) return;

      const ref = input.value.trim().toUpperCase();
      resultBox.classList.remove('hidden');

      const found = appState.submittedEnquiries.find(e => e.reference === ref);
      if (found) {
        resultBox.innerHTML = `
          <div class="font-semibold text-ceylon-900">Reference: ${found.reference} (${found.type})</div>
          <p class="text-stone-700 mt-1">
            ${found.type === 'The Ceylon Grand Ride Interest'
              ? 'Thank you for registering interest in The Ceylon Grand Ride. We will send entry information when arrangements are confirmed.'
              : `Thank you. We have received your enquiry ${found.reference}. We will check your request and contact you with the next steps.`}
          </p>
        `;
      } else if (ref) {
        resultBox.innerHTML = `
          <div class="font-semibold text-stone-800">Reference ${ref}</div>
          <p class="text-stone-600 mt-1">
            No active quote found in this browser session. If you received a reference by email, please contact us with your reference for a status update.
          </p>
        `;
      } else {
        resultBox.innerHTML = `<p class="text-stone-600">Please enter a valid enquiry or booking reference.</p>`;
      }
    }

    // =========================================================================
    // 5. FORM SUBMISSION & MODAL HANDLERS (No browser alert() or confirm())
    // =========================================================================
    function handleFormSubmit(event, formType) {
      event.preventDefault();
      const refNumber = 'BT-SL-' + Math.floor(100000 + Math.random() * 900000);

      appState.submittedEnquiries.push({
        reference: refNumber,
        type: formType,
        timestamp: new Date().toISOString()
      });

      const isGrandRide = formType === 'The Ceylon Grand Ride Interest';
      const statusHeadline = isGrandRide ? 'Ride interest received' : 'Enquiry received';
      const statusMessage = isGrandRide
        ? 'Thank you for registering interest in The Ceylon Grand Ride. We will send entry information when arrangements are confirmed.'
        : `Thank you. We have received your enquiry <strong>${refNumber}</strong>. We will check your request and contact you with the next steps.`;

      openModal(`
        <div class="space-y-4">
          <div class="w-12 h-12 rounded-2xl bg-ceylon-100 text-ceylon-800 flex items-center justify-center">
            <i data-lucide="check-circle-2" class="w-6 h-6"></i>
          </div>
          <span class="inline-block text-xs font-semibold uppercase tracking-wider text-cinnamon-700">${formType}</span>
          <h3 class="font-serif text-2xl font-bold text-ceylon-950">${statusHeadline}</h3>
          <p class="text-sm text-stone-700 leading-relaxed">${statusMessage}</p>
          <div class="p-3.5 rounded-xl bg-sand-100 border border-sand-200 text-xs text-stone-600">
            <strong>Your Reference:</strong> ${refNumber} — Keep this reference to check status on our Booking & FAQs page.
          </div>
          <div class="pt-2 flex flex-wrap gap-2">
            <button onclick="closeModal()" class="flex-1 bg-ceylon-800 hover:bg-ceylon-900 text-white text-sm font-semibold py-3 rounded-xl transition">
              Done
            </button>
            <button onclick="closeModal(); navigateTo('/booking/')" class="flex-1 bg-sand-100 hover:bg-sand-200 text-stone-800 text-sm font-semibold py-3 rounded-xl transition">
              Booking & FAQs
            </button>
          </div>
        </div>
      `);

      event.target.reset();
    }

    function openLegalModal(policyType) {
      const policies = {
        terms: {
          title: 'Terms & Conditions',
          body: 'All sample itineraries, private transfers, accommodation proposals and vehicle rental enquiries are subject to route checks, availability and supplier confirmation. Your approved quote identifies the agreed services, amount, currency, payment schedule and applicable terms before you commit.'
        },
        cancellation: {
          title: 'Cancellation & Refund Policy',
          body: 'For a change or cancellation, contact us with your booking reference and the details of your request. We will explain the available options and any charges or refund eligibility under the terms accepted at booking.'
        },
        privacy: {
          title: 'Privacy Notice',
          body: 'Information submitted through our enquiry forms is used solely to review route feasibility, check supplier and vehicle availability, and prepare your requested travel quotation. Please wait for secure document instructions before sending driver licence or identity records.'
        }
      };

      const item = policies[policyType] || policies.privacy;
      openModal(`
        <div class="space-y-4">
          <span class="text-xs font-semibold uppercase tracking-wider text-cinnamon-700">Barclay Travel Sri Lanka</span>
          <h3 class="font-serif text-2xl font-bold text-ceylon-950">${item.title}</h3>
          <p class="text-sm text-stone-700 leading-relaxed">${item.body}</p>
          <div class="pt-2">
            <button onclick="closeModal()" class="w-full bg-ceylon-800 hover:bg-ceylon-900 text-white text-sm font-semibold py-3 rounded-xl transition">
              Close
            </button>
          </div>
        </div>
      `);
    }

    function openModal(html) {
      const modal = document.getElementById('ui-modal');
      const content = document.getElementById('ui-modal-content');
      if (!modal || !content) return;
      content.innerHTML = html;
      modal.classList.remove('hidden');
      modal.classList.add('flex');
      lucide.createIcons();
    }

    function closeModal() {
      const modal = document.getElementById('ui-modal');
      if (!modal) return;
      modal.classList.add('hidden');
      modal.classList.remove('flex');
    }

    // Initialize application on window load
    window.addEventListener('DOMContentLoaded', () => {
      initNavigationMenus();
      parseHashAndRender();
    });
