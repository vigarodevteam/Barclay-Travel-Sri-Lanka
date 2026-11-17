/**
 * Barclay Travel Sri Lanka — Frontend Router, Page Templates & PHP API Client
 */

const appState = {
  currentRoute: '/',
  currentAnchor: null,
  prefilledTour: '',
  prefilledDates: '',
  prefilledDestination: '',
  tourDurationFilter: 'all',
  tourSearchText: '',
  localSessionEnquiries: []
};

// =========================================================================
// 1. NAVIGATION & HISTORY ROUTER
// =========================================================================
function initNavigationMenus() {
  const desktopSub = document.getElementById('desktop-destinations-submenu');
  const mobileSub = document.getElementById('mobile-destinations-submenu');
  if (!desktopSub || !mobileSub) return;

  desktopSub.innerHTML = SITE_DATA.destinations.map(d => `
    <a href="/destinations/${d.slug}/" onclick="return handleNavClick(event, '/destinations/${d.slug}/')" class="block px-3 py-2 rounded-xl text-sm text-stone-700 hover:bg-sand-100 hover:text-ceylon-900 transition">
      ${d.name}
    </a>
  `).join('');

  mobileSub.innerHTML = SITE_DATA.destinations.map(d => `
    <a href="/destinations/${d.slug}/" onclick="return handleNavClick(event, '/destinations/${d.slug}/', null, true)" class="block px-2 py-1.5 rounded-lg text-sm text-stone-700 hover:bg-sand-100">
      ${d.name}
    </a>
  `).join('');
}

function toggleMobileMenu() {
  const menu = document.getElementById('mobile-menu');
  if (menu) menu.classList.toggle('hidden');
}

function handleNavClick(event, route, anchor = null, closeMobile = false) {
  if (event) event.preventDefault();
  if (closeMobile) {
    const menu = document.getElementById('mobile-menu');
    if (menu) menu.classList.add('hidden');
  }
  navigateTo(route, anchor);
  return false;
}

function navigateTo(route, anchor = null, prefill = {}) {
  if (prefill.tour) appState.prefilledTour = prefill.tour;
  if (prefill.dates) appState.prefilledDates = prefill.dates;
  if (prefill.destination) appState.prefilledDestination = prefill.destination;

  const cleanRoute = route.endsWith('/') && route.length > 1 ? route : (route === '/' ? '/' : route + '/');
  const fullUrl = anchor ? `${cleanRoute}#${anchor}` : cleanRoute;

  if (window.location.pathname + window.location.hash !== fullUrl) {
    history.pushState(null, '', fullUrl);
  }

  renderRoute(cleanRoute, anchor);
}

window.addEventListener('popstate', () => {
  const path = window.location.pathname || '/';
  const anchor = window.location.hash ? window.location.hash.replace('#', '') : null;
  renderRoute(path, anchor);
});

function setMeta(title, desc) {
  document.title = title;
  const metaTag = document.querySelector('meta[name="description"]');
  if (metaTag) metaTag.setAttribute('content', desc);
}

// =========================================================================
// 2. ROUTE RESOLVER
// =========================================================================
function renderRoute(route, anchor = null) {
  const root = document.getElementById('app-root');
  if (!root) return;

  const cleanRoute = route.endsWith('/') && route.length > 1 ? route : (route === '/' ? '/' : route + '/');
  appState.currentRoute = cleanRoute;
  appState.currentAnchor = anchor;

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

  if (window.lucide) lucide.createIcons();

  if (anchor) {
    setTimeout(() => {
      const targetEl = document.getElementById(anchor);
      if (targetEl) targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 80);
  } else {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

// =========================================================================
// 3. PAGE TEMPLATES
// =========================================================================
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
    <section class="relative bg-ceylon-950 overflow-hidden">
      <div class="absolute inset-0">
        <img src="https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=1800&q=85" alt="View across Sri Lankan coastal and highland scenery" class="w-full h-full object-cover opacity-55" />
        <div class="absolute inset-0 bg-gradient-to-r from-ceylon-950/90 via-ceylon-950/65 to-transparent"></div>
      </div>
      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-32">
        <div class="max-w-2xl bg-ceylon-950/75 backdrop-blur-md border border-white/15 rounded-3xl p-7 sm:p-10 shadow-2xl">
          <span class="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-cinnamon-300 mb-4">
            <i data-lucide="map-pin" class="w-3.5 h-3.5"></i> Private Sri Lanka Travel
          </span>
          <h1 class="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">Sri Lanka at your own pace</h1>
          <p class="mt-5 text-lg sm:text-xl text-sand-100 leading-relaxed">Follow the coast, head for the hills or let us plan a journey around you.</p>
          <div class="mt-8 flex flex-wrap items-center gap-3.5">
            <a href="/tours/" onclick="return handleNavClick(event, '/tours/')" class="inline-flex items-center gap-2 bg-cinnamon-600 hover:bg-cinnamon-500 text-white font-semibold px-6 py-3.5 rounded-xl shadow-lg transition">
              <span>Explore Tours</span><i data-lucide="arrow-right" class="w-4 h-4"></i>
            </a>
            <a href="/contact/#trip-enquiry" onclick="return handleNavClick(event, '/contact/', 'trip-enquiry')" class="inline-flex items-center gap-2 bg-white hover:bg-sand-100 text-ceylon-950 font-semibold px-6 py-3.5 rounded-xl transition">
              <span>Plan My Trip</span>
            </a>
            <a href="/transport/#transfer-enquiry" onclick="return handleNavClick(event, '/transport/', 'transfer-enquiry')" class="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/25 font-medium px-5 py-3.5 rounded-xl transition">
              <i data-lucide="car" class="w-4 h-4 text-cinnamon-300"></i><span>Book Transport</span>
            </a>
          </div>
        </div>
      </div>
    </section>

    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        <div class="lg:col-span-5">
          <span class="text-xs font-semibold uppercase tracking-[0.2em] text-cinnamon-700">Tailored & Sample Routes</span>
          <h2 class="font-serif text-3xl sm:text-4xl font-bold text-ceylon-950 mt-2 leading-snug">Start with a place you have always wanted to see</h2>
        </div>
        <div class="lg:col-span-7 space-y-5 text-stone-700 text-base sm:text-lg leading-relaxed">
          <p>Start with a place you have always wanted to see, a few days you have free or simply the way you like to travel. Barclay Travel Sri Lanka helps you put the pieces together. Choose a sample itinerary, ask us to build a private holiday, or arrange the accommodation and transport you need for a trip of your own.</p>
          <p>You could spend five days between Galle Fort and the southern cinnamon country, travel from Kandy through the tea hills to Ella, or slow down in a village near the Knuckles range. Explore destinations to see how the regions fit together, then browse our tours for a day-by-day starting point. If you already know where you are going, enquire about a private transfer or vehicle rental.</p>
          <p>Motorcyclists can also explore The Ceylon Grand Ride, our planned annual ride across Sri Lanka. For a private holiday at any time of year, tell us your dates, who is travelling and what you would like to experience. We can suggest a route and explain what can be arranged for your dates.</p>
        </div>
      </div>
    </section>

    <section class="bg-sand-100/80 border-y border-sand-200 py-16 sm:py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <span class="text-xs font-semibold uppercase tracking-[0.2em] text-ceylon-700">Regional Guides</span>
            <h2 class="font-serif text-3xl font-bold text-ceylon-950 mt-1">Featured destinations</h2>
          </div>
          <a href="/destinations/" onclick="return handleNavClick(event, '/destinations/')" class="inline-flex items-center gap-1.5 text-sm font-semibold text-ceylon-800 hover:text-cinnamon-700 transition">
            <span>View all eight regions</span><i data-lucide="arrow-right" class="w-4 h-4"></i>
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
                  <a href="/destinations/${dest.slug}/" onclick="return handleNavClick(event, '/destinations/${dest.slug}/')" class="inline-flex items-center gap-1.5 text-sm font-semibold text-ceylon-800 hover:text-cinnamon-700">
                    <span>Explore region</span><i data-lucide="arrow-right" class="w-4 h-4"></i>
                  </a>
                </div>
              </div>
            </article>
          `).join('')}
        </div>
      </div>
    </section>

    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
      <div class="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
        <div>
          <span class="text-xs font-semibold uppercase tracking-[0.2em] text-cinnamon-700">Sample Itineraries</span>
          <h2 class="font-serif text-3xl font-bold text-ceylon-950 mt-1">Featured tours</h2>
        </div>
        <a href="/tours/" onclick="return handleNavClick(event, '/tours/')" class="inline-flex items-center gap-1.5 text-sm font-semibold text-ceylon-800 hover:text-cinnamon-700 transition">
          <span>Compare all ten tours</span><i data-lucide="arrow-right" class="w-4 h-4"></i>
        </a>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        ${featuredTours.map(tour => `
          <article class="bg-white rounded-2xl overflow-hidden border border-sand-200 shadow-sm hover:shadow-md transition flex flex-col">
            <div class="relative aspect-[16/10] overflow-hidden bg-sand-200">
              <img src="${tour.image}" alt="${tour.caption}" class="w-full h-full object-cover" />
              <span class="absolute top-3 left-3 bg-ceylon-950/85 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1.5 rounded-lg">${tour.duration}</span>
            </div>
            <div class="p-6 flex flex-col flex-grow">
              <div class="text-xs font-medium text-stone-500">${tour.routeSummary}</div>
              <h3 class="font-serif text-xl font-bold text-ceylon-950 mt-1">${tour.title}</h3>
              <p class="text-sm text-stone-600 mt-3 leading-relaxed flex-grow">${tour.overview[0].slice(0, 145)}...</p>
              <div class="mt-6 pt-4 border-t border-sand-100 flex items-center justify-between gap-3">
                <a href="/tours/${tour.slug}/" onclick="return handleNavClick(event, '/tours/${tour.slug}/')" class="text-sm font-semibold text-ceylon-800 hover:text-cinnamon-700 inline-flex items-center gap-1">
                  <span>Day-by-day plan</span><i data-lucide="chevron-right" class="w-4 h-4"></i>
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

    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
      <div class="bg-ceylon-900 rounded-3xl overflow-hidden border border-ceylon-800 shadow-xl grid grid-cols-1 lg:grid-cols-12">
        <div class="lg:col-span-7 p-8 sm:p-12 flex flex-col justify-center">
          <div class="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-cinnamon-300 mb-3">
            <i data-lucide="bike" class="w-4 h-4"></i> Annual Motorcycle Journey
          </div>
          <h2 class="font-serif text-3xl sm:text-4xl font-bold text-white">The Ceylon Grand Ride</h2>
          <p class="text-lg text-sand-200 mt-3 leading-relaxed">An annual, non-competitive motorcycle journey around Sri Lanka</p>
          <p class="text-sm text-sand-300 mt-4 leading-relaxed">Proposed inaugural edition for mid-February 2027 with a ceremonial flag-off planned at The Barnhouse Studio in Panadura and flexible stage durations from 3 up to 30 days.</p>
          <div class="mt-8">
            <a href="/ceylon-grand-ride/" onclick="return handleNavClick(event, '/ceylon-grand-ride/')" class="inline-flex items-center gap-2 bg-cinnamon-600 hover:bg-cinnamon-500 text-white font-semibold px-6 py-3.5 rounded-xl transition">
              <span>View the Event</span><i data-lucide="arrow-right" class="w-4 h-4"></i>
            </a>
          </div>
        </div>
        <div class="lg:col-span-5 relative min-h-[260px]">
          <img src="https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=1000&q=80" alt="Supported motorcycle touring formation on a scenic public road" class="w-full h-full object-cover" />
          <div class="absolute bottom-3 right-3 bg-stone-950/75 text-white text-[11px] px-3 py-1 rounded-lg">Illustrative motorcycle stage view</div>
        </div>
      </div>
    </section>
  `;
}

function renderAboutPage() {
  return `
    <section class="bg-ceylon-950 text-white py-16 sm:py-24">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <span class="text-xs font-semibold uppercase tracking-[0.2em] text-cinnamon-300">How We Plan Your Trip</span>
        <h1 class="font-serif text-4xl sm:text-5xl font-bold mt-3 max-w-3xl">A Sri Lankan holiday shaped around you</h1>
        <div class="mt-8">
          <a href="/contact/#trip-enquiry" onclick="return handleNavClick(event, '/contact/', 'trip-enquiry')" class="inline-flex items-center gap-2 bg-cinnamon-600 hover:bg-cinnamon-500 text-white font-semibold px-6 py-3.5 rounded-xl transition">
            <span>Plan My Trip</span><i data-lucide="arrow-right" class="w-4 h-4"></i>
          </a>
        </div>
      </div>
    </section>
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        <div class="lg:col-span-7 space-y-6 text-stone-700 text-base sm:text-lg leading-relaxed">
          <p>Barclay Travel Sri Lanka brings together the practical elements of an island holiday: where to go, how to get there, where to stay and what to do along the way. You can come to us with a complete itinerary and ask for transport, or start with a rough idea and ask for help designing the whole trip.</p>
          <p>We begin with your dates, group size, interests and preferred pace. That helps us decide whether to base you in one place for several nights, build a route across different regions or leave space for an unplanned afternoon. We then outline the route, accommodation options and services you can request. Your quote sets out what is included and which arrangements need supplier confirmation.</p>
          <p>Our trips suit travellers who want room to make their own choices. You might prefer a small hotel near a market, a private driver between two towns or a guide for a particular walk. The Ceylon Grand Ride is our dedicated annual motorcycle event. Our private tours and travel services can be arranged separately throughout the year, subject to availability.</p>
        </div>
        <div class="lg:col-span-5 space-y-6">
          <figure class="bg-white rounded-2xl overflow-hidden border border-sand-200 shadow-sm">
            <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=1000&q=80" alt="Route planning map and travel itinerary preparation" class="w-full h-64 object-cover" />
            <figcaption class="p-4 text-xs text-stone-500">Planning regional routes, pacing and supplier confirmations around your travel dates.</figcaption>
          </figure>
        </div>
      </div>
    </section>
  `;
}

function renderDestinationsPage() {
  return `
    <section class="relative bg-ceylon-950 text-white overflow-hidden">
      <div class="absolute inset-0">
        <img src="https://images.unsplash.com/photo-1546708973-b339540b5162?auto=format&fit=crop&w=1800&q=80" alt="Wide view of Sri Lanka's central hills" class="w-full h-full object-cover opacity-40" />
      </div>
      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <span class="text-xs font-semibold uppercase tracking-[0.2em] text-cinnamon-300">Coast, Highlands and Heritage</span>
        <h1 class="font-serif text-4xl sm:text-5xl font-bold mt-3">Where would you like to go?</h1>
        <div class="mt-8">
          <a href="/tours/" onclick="return handleNavClick(event, '/tours/')" class="inline-flex items-center gap-2 bg-cinnamon-600 hover:bg-cinnamon-500 text-white font-semibold px-6 py-3.5 rounded-xl transition">
            <span>Explore Tours</span><i data-lucide="arrow-right" class="w-4 h-4"></i>
          </a>
        </div>
      </div>
    </section>
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
      <div class="max-w-3xl space-y-4 text-stone-700 text-base sm:text-lg leading-relaxed mb-14">
        <p>Start with the landscapes that interest you most. The South Coast pairs sea air, old streets and food with easy days beside the water. Inland, the Central Highlands are better suited to slower drives, tea-country stays and short walks. Around Sigiriya and Dambulla, historic sites can anchor several days without requiring a change of hotel every night.</p>
        <p>The east and north reward a longer trip or a holiday focused on one region. Consider Trincomalee and Batticaloa for coastal towns and lagoon landscapes, or Jaffna for peninsula drives, palmyra country and a different kitchen. In the southeast, set aside early mornings for a safari and leave room in the schedule for the pace of a park visit.</p>
        <p>Use the regional guides to pick your priorities. Each one links to an itinerary and to practical options for accommodation and private transport. If you want to combine two or three areas, tell us your arrival point and the time available. We can suggest where to spend extra nights and which stops work best on the same trip.</p>
      </div>
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
                <a href="/destinations/${dest.slug}/" onclick="return handleNavClick(event, '/destinations/${dest.slug}/')" class="inline-flex items-center gap-1.5 text-sm font-semibold text-ceylon-800 hover:text-cinnamon-700">
                  <span>Read regional guide</span><i data-lucide="arrow-right" class="w-4 h-4"></i>
                </a>
              </div>
            </div>
          </article>
        `).join('')}
      </div>
    </section>
  `;
}

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
          <a href="/destinations/" onclick="return handleNavClick(event, '/destinations/')" class="hover:text-white">Destinations</a>
          <span>/</span><span class="text-cinnamon-300 font-semibold">${dest.name}</span>
        </div>
        <h1 class="font-serif text-4xl sm:text-5xl font-bold max-w-3xl">${dest.hero}</h1>
        <p class="text-sm text-sand-200 mt-3">${dest.caption}</p>
        <div class="mt-8 flex flex-wrap gap-3">
          <a href="/tours/${dest.ctaTourSlug}/" onclick="return handleNavClick(event, '/tours/${dest.ctaTourSlug}/')" class="inline-flex items-center gap-2 bg-cinnamon-600 hover:bg-cinnamon-500 text-white font-semibold px-6 py-3.5 rounded-xl transition">
            <span>${dest.ctaLabel}</span><i data-lucide="arrow-right" class="w-4 h-4"></i>
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
              <a href="/tours/${linkedTour.slug}/" onclick="return handleNavClick(event, '/tours/${linkedTour.slug}/')" class="mt-5 w-full inline-flex items-center justify-center gap-2 bg-ceylon-800 hover:bg-ceylon-900 text-white text-sm font-semibold py-3 rounded-xl transition">
                <span>View Day-by-Day Plan</span><i data-lucide="arrow-right" class="w-4 h-4"></i>
              </a>
            </div>
          ` : ''}
        </aside>
      </div>
    </section>
  `;
}

function renderHolidayTypesPage() {
  return `
    <section class="relative bg-ceylon-950 text-white overflow-hidden">
      <div class="absolute inset-0">
        <img src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=1800&q=80" alt="Sri Lankan outdoor lunch" class="w-full h-full object-cover opacity-35" />
      </div>
      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <span class="text-xs font-semibold uppercase tracking-[0.2em] text-cinnamon-300">Find Your Travel Style</span>
        <h1 class="font-serif text-4xl sm:text-5xl font-bold mt-3 max-w-3xl">Start with the kind of holiday you want</h1>
        <div class="mt-8">
          <a href="/contact/#trip-enquiry" onclick="return handleNavClick(event, '/contact/', 'trip-enquiry')" class="inline-flex items-center gap-2 bg-cinnamon-600 hover:bg-cinnamon-500 text-white font-semibold px-6 py-3.5 rounded-xl transition">
            <span>Plan My Trip</span><i data-lucide="arrow-right" class="w-4 h-4"></i>
          </a>
        </div>
      </div>
    </section>
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
      <div class="space-y-8">
        ${SITE_DATA.holidayTypes.map(ht => `
          <article id="${ht.id}" class="scroll-mt-28 bg-white rounded-2xl p-6 sm:p-8 border border-sand-200 shadow-sm">
            <div class="flex items-center gap-3 mb-4">
              <div class="w-10 h-10 rounded-xl bg-ceylon-50 border border-ceylon-200 text-ceylon-800 flex items-center justify-center">
                <i data-lucide="${ht.icon}" class="w-5 h-5"></i>
              </div>
              <h2 class="font-serif text-2xl font-bold text-ceylon-950">${ht.title}</h2>
            </div>
            <div class="space-y-4 text-stone-700 leading-relaxed">
              ${ht.paragraphs.map(p => `<p>${p}</p>`).join('')}
            </div>
          </article>
        `).join('')}
      </div>
    </section>
  `;
}

function renderToursPage() {
  const filteredTours = SITE_DATA.tours.filter(tour => {
    const matchesDuration =
      appState.tourDurationFilter === 'all' ||
      (appState.tourDurationFilter === 'short' && tour.daysCount <= 4) ||
      (appState.tourDurationFilter === 'medium' && tour.daysCount >= 5 && tour.daysCount <= 6) ||
      (appState.tourDurationFilter === 'long' && tour.daysCount >= 7);

    const q = appState.tourSearchText.trim().toLowerCase();
    const matchesQuery = !q || tour.title.toLowerCase().includes(q) || tour.routeSummary.toLowerCase().includes(q);
    return matchesDuration && matchesQuery;
  });

  return `
    <section class="relative bg-ceylon-950 text-white overflow-hidden">
      <div class="absolute inset-0">
        <img src="https://images.unsplash.com/photo-1586611292717-f828b167408c?auto=format&fit=crop&w=1800&q=80" alt="Sample Sri Lanka tour route" class="w-full h-full object-cover opacity-40" />
      </div>
      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <span class="text-xs font-semibold uppercase tracking-[0.2em] text-cinnamon-300">Private Tours & Sample Itineraries</span>
        <h1 class="font-serif text-4xl sm:text-5xl font-bold mt-3">Choose a route and make it yours</h1>
        <div class="mt-8">
          <a href="/contact/#trip-enquiry" onclick="return handleNavClick(event, '/contact/', 'trip-enquiry')" class="inline-flex items-center gap-2 bg-cinnamon-600 hover:bg-cinnamon-500 text-white font-semibold px-6 py-3.5 rounded-xl transition">
            <span>Request a Quote</span><i data-lucide="arrow-right" class="w-4 h-4"></i>
          </a>
        </div>
      </div>
    </section>
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
      <div id="availability" class="scroll-mt-28 bg-white rounded-2xl p-5 sm:p-6 border border-sand-200 shadow-sm mb-10">
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <select onchange="appState.tourDurationFilter = this.value; renderRoute('/tours/')" class="rounded-xl border border-sand-300 bg-sand-50 px-3.5 py-2.5 text-sm">
            <option value="all" ${appState.tourDurationFilter === 'all' ? 'selected' : ''}>All 10 Sample Tours (3–10 days)</option>
            <option value="short" ${appState.tourDurationFilter === 'short' ? 'selected' : ''}>Short Breaks (3–4 days)</option>
            <option value="medium" ${appState.tourDurationFilter === 'medium' ? 'selected' : ''}>Regional Journeys (5–6 days)</option>
            <option value="long" ${appState.tourDurationFilter === 'long' ? 'selected' : ''}>Extended Routes (7–10 days)</option>
          </select>
          <input type="text" value="${appState.tourSearchText}" oninput="appState.tourSearchText = this.value; renderRoute('/tours/')" placeholder="Filter by destination or start point..." class="rounded-xl border border-sand-300 bg-sand-50 px-3.5 py-2.5 text-sm" />
          <button onclick="document.getElementById('avail-msg').classList.remove('hidden')" class="bg-ceylon-800 hover:bg-ceylon-900 text-white text-sm font-semibold px-5 py-2.5 rounded-xl transition">
            Check Availability
          </button>
        </div>
        <div id="avail-msg" class="hidden mt-4 p-3 rounded-xl bg-ceylon-50 border border-ceylon-200 text-sm text-ceylon-900">
          <strong>Status: Available to request.</strong> Select any itinerary below to request a manual date and supplier check.
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
        ${filteredTours.map(tour => `
          <article class="bg-white rounded-2xl overflow-hidden border border-sand-200 shadow-sm hover:shadow-md transition flex flex-col">
            <div class="relative aspect-[16/10] overflow-hidden bg-sand-200">
              <img src="${tour.image}" alt="${tour.caption}" class="w-full h-full object-cover" />
              <span class="absolute top-3 left-3 bg-ceylon-950/85 text-white text-xs font-semibold px-3 py-1.5 rounded-lg">${tour.duration}</span>
            </div>
            <div class="p-6 flex flex-col flex-grow">
              <div class="text-xs font-semibold text-cinnamon-700 uppercase tracking-wider">${tour.routeSummary}</div>
              <h2 class="font-serif text-xl font-bold text-ceylon-950 mt-1">${tour.title}</h2>
              <p class="text-sm text-stone-600 mt-3 leading-relaxed flex-grow">${tour.overview[0]}</p>
              <div class="mt-5 pt-4 border-t border-sand-100 flex items-center justify-between">
                <a href="/tours/${tour.slug}/" onclick="return handleNavClick(event, '/tours/${tour.slug}/')" class="text-sm font-semibold text-ceylon-800 hover:text-cinnamon-700">View Itinerary →</a>
                <button onclick="navigateTo('/contact/', 'trip-enquiry', { tour: '${tour.title}' })" class="text-xs font-semibold bg-sand-100 hover:bg-cinnamon-600 hover:text-white px-3.5 py-2 rounded-lg transition">Request a Quote</button>
              </div>
            </div>
          </article>
        `).join('')}
      </div>
    </section>
  `;
}

function renderTourDetailPage(tour) {
  return `
    <section class="relative bg-ceylon-950 text-white overflow-hidden">
      <div class="absolute inset-0">
        <img src="${tour.image}" alt="${tour.caption}" class="w-full h-full object-cover opacity-45" />
      </div>
      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <span class="text-xs font-semibold uppercase tracking-[0.2em] text-cinnamon-300">${tour.duration} · ${tour.transport} · ${tour.category}</span>
        <h1 class="font-serif text-4xl sm:text-5xl font-bold mt-3 max-w-3xl">${tour.title}</h1>
        <div class="mt-8">
          <button onclick="navigateTo('/contact/', 'trip-enquiry', { tour: '${tour.title}' })" class="inline-flex items-center gap-2 bg-cinnamon-600 hover:bg-cinnamon-500 text-white font-semibold px-6 py-3.5 rounded-xl transition">
            <span>Request a Quote</span><i data-lucide="arrow-right" class="w-4 h-4"></i>
          </button>
        </div>
      </div>
    </section>
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 space-y-10">
      <div class="max-w-3xl space-y-4 text-stone-700 text-base sm:text-lg leading-relaxed">
        ${tour.overview.map(p => `<p>${p}</p>`).join('')}
      </div>
      <div class="bg-white rounded-2xl border border-sand-200 overflow-hidden shadow-sm">
        <table class="w-full text-left border-collapse">
          <thead>
            <tr class="border-b border-sand-200 text-xs font-semibold uppercase tracking-wider text-stone-500 bg-sand-50">
              <th class="py-3.5 px-6 w-24">Day</th>
              <th class="py-3.5 px-6">Route and highlights</th>
              <th class="py-3.5 px-6 w-52">Overnight or finish</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-sand-200 text-sm">
            ${tour.days.map(d => `
              <tr>
                <td class="py-4 px-6 font-bold text-ceylon-900">Day ${d.day}</td>
                <td class="py-4 px-6 text-stone-700">${d.highlight}</td>
                <td class="py-4 px-6 font-medium text-stone-800">${d.overnight}</td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    </section>
  `;
}

function renderExclusiveExperiencesPage() {
  return `
    <section class="bg-ceylon-950 text-white py-16 sm:py-24">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <span class="text-xs font-semibold uppercase tracking-[0.2em] text-cinnamon-300">Tailor Made Holidays</span>
        <h1 class="font-serif text-4xl sm:text-5xl font-bold mt-3 max-w-3xl">Make time for the experiences you came for</h1>
        <div class="mt-8">
          <a href="/contact/#trip-enquiry" onclick="return handleNavClick(event, '/contact/', 'trip-enquiry')" class="inline-flex items-center gap-2 bg-cinnamon-600 hover:bg-cinnamon-500 text-white font-semibold px-6 py-3.5 rounded-xl transition">
            <span>Plan My Trip</span><i data-lucide="arrow-right" class="w-4 h-4"></i>
          </a>
        </div>
      </div>
    </section>
    <section class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-6 text-stone-700 text-base sm:text-lg leading-relaxed">
      <p>A private itinerary gives you time to follow the parts of a trip that interest you most. Spend a morning with a producer, walk with a guide who knows the area or stay somewhere small enough to make a quiet evening part of the experience. We can build these requests into a route or arrange a single activity as part of a wider holiday.</p>
      <p>Tell us what you enjoy and what you would like to avoid rushing. A private guide may be most useful at a heritage site. A boutique stay may make more sense on a night when you will arrive early enough to enjoy it. A producer visit can become the focus of a morning when the host is available and receiving visitors.</p>
      <p>We confirm what can be arranged for your dates and set out the practical details in your quote. Browse destinations and accommodation to pick a base, then ask which experiences fit naturally within the time you have.</p>
    </section>
  `;
}

function renderTransportPage() {
  return `
    <section class="bg-ceylon-950 text-white py-16 sm:py-24">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <span class="text-xs font-semibold uppercase tracking-[0.2em] text-cinnamon-300">Private Transfers & Drivers</span>
        <h1 class="font-serif text-4xl sm:text-5xl font-bold mt-3 max-w-3xl">Arrange the road part of your trip</h1>
      </div>
    </section>
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-1 lg:grid-cols-12 gap-12">
      <div class="lg:col-span-6 space-y-5 text-stone-700 leading-relaxed">
        <p>Arrange an airport pickup, a private drive between hotels or a vehicle with a driver for several days. We can discuss the route, plan pickup around your schedule and suggest whether a car or van makes sense for the passengers and luggage.</p>
        <p>For an airport transfer, provide your flight number, arrival time and drop-off address. For travel between regions, tell us if you want a direct drive or one or two stops along the way.</p>
      </div>
      <div id="transfer-enquiry" class="lg:col-span-6 bg-white rounded-3xl p-6 sm:p-8 border border-sand-200 shadow-lg">
        <h2 class="font-serif text-2xl font-bold text-ceylon-950 mb-4">Request a Transfer</h2>
        <form onsubmit="handleFormSubmit(event, 'Transfer Enquiry')" class="space-y-4">
          <input type="text" name="fullName" required placeholder="Full name *" class="w-full rounded-xl border border-sand-300 bg-sand-50 px-3.5 py-2.5 text-sm" />
          <input type="text" name="contact" required placeholder="Email or WhatsApp *" class="w-full rounded-xl border border-sand-300 bg-sand-50 px-3.5 py-2.5 text-sm" />
          <input type="text" name="route" required placeholder="Pickup and drop-off *" class="w-full rounded-xl border border-sand-300 bg-sand-50 px-3.5 py-2.5 text-sm" />
          <input type="text" name="dateTime" required placeholder="Date and time *" class="w-full rounded-xl border border-sand-300 bg-sand-50 px-3.5 py-2.5 text-sm" />
          <input type="text" name="flightNumber" placeholder="Flight number where applicable" class="w-full rounded-xl border border-sand-300 bg-sand-50 px-3.5 py-2.5 text-sm" />
          <input type="text" name="passengers" required placeholder="Passengers & luggage *" class="w-full rounded-xl border border-sand-300 bg-sand-50 px-3.5 py-2.5 text-sm" />
          <textarea name="optionalStops" rows="2" placeholder="Optional stops" class="w-full rounded-xl border border-sand-300 bg-sand-50 px-3.5 py-2.5 text-sm"></textarea>
          <button type="submit" class="w-full bg-ceylon-800 hover:bg-ceylon-900 text-white font-semibold py-3.5 rounded-xl transition">Send Enquiry</button>
        </form>
      </div>
    </section>
  `;
}

function renderVehicleRentalsPage() {
  return `
    <section class="bg-ceylon-950 text-white py-16 sm:py-24">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <span class="text-xs font-semibold uppercase tracking-[0.2em] text-cinnamon-300">Motorcycle & Vehicle Rentals</span>
        <h1 class="font-serif text-4xl sm:text-5xl font-bold mt-3 max-w-3xl">Find a vehicle for your dates</h1>
      </div>
    </section>
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-1 lg:grid-cols-12 gap-12">
      <div class="lg:col-span-6 space-y-5 text-stone-700 leading-relaxed">
        <p>Tell us your dates, preferred pickup and return points, and the kind of vehicle you need. You can enquire about a motorcycle or another available rental category for an independent trip.</p>
        <p>For a self-drive reservation, we will ask about the driver or rider and check eligibility for the category requested. Wait for secure document instructions before sending licence or identity records.</p>
      </div>
      <div id="rental-enquiry" class="lg:col-span-6 bg-white rounded-3xl p-6 sm:p-8 border border-sand-200 shadow-lg">
        <h2 class="font-serif text-2xl font-bold text-ceylon-950 mb-4">Reserve a Vehicle</h2>
        <form onsubmit="handleFormSubmit(event, 'Vehicle Rental Enquiry')" class="space-y-4">
          <input type="text" name="fullName" required placeholder="Full name *" class="w-full rounded-xl border border-sand-300 bg-sand-50 px-3.5 py-2.5 text-sm" />
          <input type="text" name="contact" required placeholder="Email or WhatsApp *" class="w-full rounded-xl border border-sand-300 bg-sand-50 px-3.5 py-2.5 text-sm" />
          <input type="text" name="datesLocations" required placeholder="Pickup and return dates and locations *" class="w-full rounded-xl border border-sand-300 bg-sand-50 px-3.5 py-2.5 text-sm" />
          <input type="text" name="vehicleCategory" required placeholder="Vehicle category *" class="w-full rounded-xl border border-sand-300 bg-sand-50 px-3.5 py-2.5 text-sm" />
          <textarea name="experience" rows="2" required placeholder="Driver or rider experience *" class="w-full rounded-xl border border-sand-300 bg-sand-50 px-3.5 py-2.5 text-sm"></textarea>
          <textarea name="equipment" rows="2" placeholder="Equipment requests" class="w-full rounded-xl border border-sand-300 bg-sand-50 px-3.5 py-2.5 text-sm"></textarea>
          <button type="submit" class="w-full bg-ceylon-800 hover:bg-ceylon-900 text-white font-semibold py-3.5 rounded-xl transition">Send Enquiry</button>
        </form>
      </div>
    </section>
  `;
}

function renderAccommodationPage() {
  return `
    <section class="bg-ceylon-950 text-white py-16 sm:py-24">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <span class="text-xs font-semibold uppercase tracking-[0.2em] text-cinnamon-300">Boutique Stays & Regional Lodges</span>
        <h1 class="font-serif text-4xl sm:text-5xl font-bold mt-3 max-w-3xl">Choose a stay that fits your route</h1>
        <div class="mt-8">
          <a href="/contact/#accommodation-enquiry" onclick="return handleNavClick(event, '/contact/', 'accommodation-enquiry')" class="inline-flex items-center gap-2 bg-cinnamon-600 hover:bg-cinnamon-500 text-white font-semibold px-6 py-3.5 rounded-xl transition">
            <span>Request Accommodation</span><i data-lucide="arrow-right" class="w-4 h-4"></i>
          </a>
        </div>
      </div>
    </section>
    <section class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-6 text-stone-700 text-base sm:text-lg leading-relaxed">
      <p>Where you stay shapes what you can do comfortably each day. A room near Galle Fort gives you time to walk the streets in the evening. In the hills, a quiet base can make a slower morning part of the trip. For a safari, consider a lodge suited to the intended park gate. We can propose options around your route, travel style and budget.</p>
      <p>We will explain which rooms and rates a supplier has confirmed and which remain on request. Where a first choice is unavailable, we can discuss another property or adjust the route. You can add transfers to a stay or include accommodation in a complete tour quote.</p>
    </section>
  `;
}

function renderGrandRidePage() {
  return `
    <section class="bg-ceylon-950 text-white py-16 sm:py-24">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <span class="text-xs font-semibold uppercase tracking-[0.2em] text-cinnamon-300">Proposed Inaugural Edition · Mid-February 2027</span>
        <h1 class="font-serif text-4xl sm:text-6xl font-bold mt-3">The Ceylon Grand Ride</h1>
        <p class="text-xl text-sand-100 mt-3">An annual motorcycle journey through Sri Lanka</p>
      </div>
    </section>
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-1 lg:grid-cols-12 gap-12">
      <div class="lg:col-span-7 space-y-6 text-stone-700 leading-relaxed">
        <p>The Ceylon Grand Ride is a planned annual, non-competitive motorcycle event across Sri Lanka. The inaugural edition is proposed for mid-February 2027, with a ceremonial flag-off planned at The Barnhouse Studio in Panadura. Start dates, joining points and the final route will be announced once the operating arrangements are confirmed.</p>
        <div class="bg-white rounded-2xl border border-sand-200 overflow-hidden shadow-sm">
          <table class="w-full text-left border-collapse text-sm">
            <thead>
              <tr class="bg-sand-100 border-b border-sand-200 text-xs font-semibold uppercase text-stone-600">
                <th class="py-3.5 px-6">Proposed duration</th>
                <th class="py-3.5 px-6">What to expect</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-sand-200">
              ${SITE_DATA.grandRideStages.map(st => `
                <tr><td class="py-3.5 px-6 font-bold text-ceylon-900">${st.duration}</td><td class="py-3.5 px-6">${st.expect}</td></tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </div>
      <div id="register-interest" class="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-8 border border-sand-200 shadow-lg">
        <h2 class="font-serif text-2xl font-bold text-ceylon-950 mb-4">Register Interest</h2>
        <form onsubmit="handleFormSubmit(event, 'The Ceylon Grand Ride Interest')" class="space-y-4">
          <input type="text" name="name" required placeholder="Name *" class="w-full rounded-xl border border-sand-300 bg-sand-50 px-3.5 py-2.5 text-sm" />
          <input type="email" name="email" required placeholder="Email *" class="w-full rounded-xl border border-sand-300 bg-sand-50 px-3.5 py-2.5 text-sm" />
          <input type="text" name="country" required placeholder="Country of residence *" class="w-full rounded-xl border border-sand-300 bg-sand-50 px-3.5 py-2.5 text-sm" />
          <select name="duration" class="w-full rounded-xl border border-sand-300 bg-sand-50 px-3.5 py-2.5 text-sm">
            <option value="3 or 5 days">3 or 5 days</option>
            <option value="7 or 10 days">7 or 10 days</option>
            <option value="12 or 14 days">12 or 14 days</option>
            <option value="20 days">20 days</option>
            <option value="Up to 30 days">Up to 30 days</option>
          </select>
          <textarea name="experience" rows="2" required placeholder="Recent riding experience *" class="w-full rounded-xl border border-sand-300 bg-sand-50 px-3.5 py-2.5 text-sm"></textarea>
          <input type="text" name="bikePreference" placeholder="Motorcycle preference" class="w-full rounded-xl border border-sand-300 bg-sand-50 px-3.5 py-2.5 text-sm" />
          <textarea name="questions" rows="2" placeholder="Any questions" class="w-full rounded-xl border border-sand-300 bg-sand-50 px-3.5 py-2.5 text-sm"></textarea>
          <button type="submit" class="w-full bg-cinnamon-600 hover:bg-cinnamon-500 text-white font-semibold py-3.5 rounded-xl transition">Register Interest</button>
        </form>
      </div>
    </section>
  `;
}

function renderContactPage() {
  return `
    <section class="bg-ceylon-950 text-white py-16 sm:py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <span class="text-xs font-semibold uppercase tracking-[0.2em] text-cinnamon-300">Contact and Enquiries</span>
        <h1 class="font-serif text-4xl sm:text-5xl font-bold mt-3">Tell us what you have in mind</h1>
      </div>
    </section>
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 grid grid-cols-1 lg:grid-cols-12 gap-12">
      <div class="lg:col-span-5 space-y-5 text-stone-700 leading-relaxed">
        <p>Send us your dates, the places you want to see and how you would like to travel. Use the trip enquiry for a complete holiday or a question about a sample tour. Choose an accommodation request if your dates and destination are already decided.</p>
      </div>
      <div class="lg:col-span-7 space-y-8">
        <div id="trip-enquiry" class="bg-white rounded-3xl p-6 sm:p-8 border border-sand-200 shadow-lg">
          <h2 class="font-serif text-2xl font-bold text-ceylon-950 mb-4">Trip Enquiry</h2>
          <form onsubmit="handleFormSubmit(event, 'Trip Enquiry')" class="space-y-4">
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input type="text" name="fullName" required placeholder="Full name *" class="w-full rounded-xl border border-sand-300 bg-sand-50 px-3.5 py-2.5 text-sm" />
              <input type="email" name="email" required placeholder="Email *" class="w-full rounded-xl border border-sand-300 bg-sand-50 px-3.5 py-2.5 text-sm" />
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input type="text" name="phone" placeholder="Phone or WhatsApp" class="w-full rounded-xl border border-sand-300 bg-sand-50 px-3.5 py-2.5 text-sm" />
              <input type="text" name="dates" value="${appState.prefilledDates}" required placeholder="Travel dates or flexibility *" class="w-full rounded-xl border border-sand-300 bg-sand-50 px-3.5 py-2.5 text-sm" />
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input type="text" name="travellers" required placeholder="Number of travellers *" class="w-full rounded-xl border border-sand-300 bg-sand-50 px-3.5 py-2.5 text-sm" />
              <input type="text" name="startFinish" placeholder="Start and finish" class="w-full rounded-xl border border-sand-300 bg-sand-50 px-3.5 py-2.5 text-sm" />
            </div>
            <select name="preferredTour" class="w-full rounded-xl border border-sand-300 bg-sand-50 px-3.5 py-2.5 text-sm">
              <option value="Custom / Bespoke Route">Preferred tour: Custom / Bespoke Route</option>
              ${SITE_DATA.tours.map(t => `<option value="${t.title}" ${appState.prefilledTour === t.title ? 'selected' : ''}>${t.title} (${t.duration})</option>`).join('')}
            </select>
            <textarea name="message" rows="3" placeholder="Interests, accommodation, transport & budget notes" class="w-full rounded-xl border border-sand-300 bg-sand-50 px-3.5 py-2.5 text-sm"></textarea>
            <button type="submit" class="w-full bg-ceylon-800 hover:bg-ceylon-900 text-white font-semibold py-3.5 rounded-xl transition">Send Enquiry</button>
          </form>
        </div>

        <div id="accommodation-enquiry" class="bg-white rounded-3xl p-6 sm:p-8 border border-sand-200 shadow-lg">
          <h2 class="font-serif text-2xl font-bold text-ceylon-950 mb-4">Accommodation Enquiry</h2>
          <form onsubmit="handleFormSubmit(event, 'Accommodation Enquiry')" class="space-y-4">
            <input type="text" name="contact" required placeholder="Full name & Email *" class="w-full rounded-xl border border-sand-300 bg-sand-50 px-3.5 py-2.5 text-sm" />
            <input type="text" name="destination" value="${appState.prefilledDestination}" required placeholder="Destination *" class="w-full rounded-xl border border-sand-300 bg-sand-50 px-3.5 py-2.5 text-sm" />
            <input type="text" name="checkInOut" required placeholder="Check-in and check-out *" class="w-full rounded-xl border border-sand-300 bg-sand-50 px-3.5 py-2.5 text-sm" />
            <input type="text" name="roomsGuests" required placeholder="Rooms and guests *" class="w-full rounded-xl border border-sand-300 bg-sand-50 px-3.5 py-2.5 text-sm" />
            <input type="text" name="requirements" placeholder="Budget range, accessibility or meal requirements" class="w-full rounded-xl border border-sand-300 bg-sand-50 px-3.5 py-2.5 text-sm" />
            <button type="submit" class="w-full bg-ceylon-800 hover:bg-ceylon-900 text-white font-semibold py-3.5 rounded-xl transition">Send Enquiry</button>
          </form>
        </div>
      </div>
    </section>
  `;
}

function renderBookingPage() {
  return `
    <section class="bg-ceylon-950 text-white py-16 sm:py-24">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <span class="text-xs font-semibold uppercase tracking-[0.2em] text-cinnamon-300">Booking, Payments and FAQs</span>
        <h1 class="font-serif text-4xl sm:text-5xl font-bold mt-3">From your first request to confirmed travel</h1>
      </div>
    </section>
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-14">
      <div class="bg-white rounded-3xl p-6 sm:p-8 border border-sand-200 shadow-sm max-w-xl">
        <h2 class="font-serif text-xl font-bold text-ceylon-950 mb-2">Check Enquiry or Booking Reference</h2>
        <div class="flex gap-2">
          <input id="booking-ref-input" type="text" placeholder="e.g. BT-SL-123456" class="flex-grow rounded-xl border border-sand-300 bg-sand-50 px-3.5 py-2.5 text-sm" />
          <button onclick="lookupBookingReference()" class="bg-ceylon-800 hover:bg-ceylon-900 text-white text-sm font-semibold px-5 py-2.5 rounded-xl transition">Check</button>
        </div>
        <div id="booking-lookup-result" class="hidden mt-4 p-4 rounded-xl bg-sand-50 border border-sand-200 text-sm"></div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        ${SITE_DATA.faqs.map(faq => `
          <div class="bg-white rounded-2xl p-6 border border-sand-200">
            <h3 class="font-serif text-lg font-bold text-ceylon-950">${faq.q}</h3>
            <p class="text-sm text-stone-700 mt-2">${faq.a}</p>
          </div>
        `).join('')}
      </div>
    </section>
  `;
}

// =========================================================================
// 4. PHP API FORM SUBMISSION & STATUS LOOKUP
// =========================================================================
async function handleFormSubmit(event, formType) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const fields = Object.fromEntries(formData.entries());

  try {
    const response = await fetch('/api.php', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ formType, fields })
    });
    const result = await response.json();

    if (result.ok) {
      appState.localSessionEnquiries.push(result);
      openModal(`
        <div class="space-y-4">
          <span class="inline-block text-xs font-semibold uppercase tracking-wider text-cinnamon-700">${result.type}</span>
          <h3 class="font-serif text-2xl font-bold text-ceylon-950">${result.status}</h3>
          <p class="text-sm text-stone-700 leading-relaxed">${result.message}</p>
          <div class="p-3.5 rounded-xl bg-sand-100 border border-sand-200 text-xs text-stone-700">
            <strong>Reference:</strong> ${result.reference}
          </div>
          <button onclick="closeModal()" class="w-full bg-ceylon-800 hover:bg-ceylon-900 text-white text-sm font-semibold py-3 rounded-xl transition">Done</button>
        </div>
      `);
      event.target.reset();
    }
  } catch (err) {
    openModal(`<p class="text-sm text-rose-700">Unable to submit right now. Please try again shortly.</p>`);
  }
}

async function lookupBookingReference() {
  const input = document.getElementById('booking-ref-input');
  const resultBox = document.getElementById('booking-lookup-result');
  if (!input || !resultBox) return;

  const ref = input.value.trim().toUpperCase();
  resultBox.classList.remove('hidden');

  const localMatch = appState.localSessionEnquiries.find(e => e.reference === ref);
  if (localMatch) {
    resultBox.innerHTML = `<strong>${localMatch.reference} — ${localMatch.status}</strong><p class="mt-1 text-stone-700">${localMatch.message}</p>`;
    return;
  }

  try {
    const res = await fetch(`/api.php?ref=${encodeURIComponent(ref)}`);
    const data = await res.json();
    resultBox.innerHTML = data.ok
      ? `<strong>${data.reference} — ${data.status}</strong><p class="mt-1 text-stone-700">${data.message}</p>`
      : `<p class="text-stone-700">${data.message}</p>`;
  } catch (e) {
    resultBox.innerHTML = `<p class="text-stone-700">Could not check reference at this time.</p>`;
  }
}

// =========================================================================
// 5. MODAL HELPERS
// =========================================================================
function openLegalModal(type) {
  const copy = {
    terms: 'All sample itineraries, private transfers, accommodation proposals and vehicle rental enquiries are subject to route checks, availability and supplier confirmation.',
    cancellation: 'For a change or cancellation, contact us with your booking reference and we will explain the available options under your accepted booking terms.',
    privacy: 'Information submitted through our enquiry forms is used solely to review route feasibility and prepare your requested travel quotation.'
  };
  openModal(`
    <div class="space-y-4">
      <h3 class="font-serif text-2xl font-bold text-ceylon-950 capitalize">${type} Policy</h3>
      <p class="text-sm text-stone-700 leading-relaxed">${copy[type] || copy.privacy}</p>
      <button onclick="closeModal()" class="w-full bg-ceylon-800 text-white text-sm font-semibold py-3 rounded-xl">Close</button>
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
  if (window.lucide) lucide.createIcons();
}

function closeModal() {
  const modal = document.getElementById('ui-modal');
  if (!modal) return;
  modal.classList.add('hidden');
  modal.classList.remove('flex');
}

window.addEventListener('DOMContentLoaded', () => {
  initNavigationMenus();
  const initialRoute = window.INITIAL_SERVER_PATH || window.location.pathname || '/';
  const initialAnchor = window.location.hash ? window.location.hash.replace('#', '') : null;
  renderRoute(initialRoute, initialAnchor);
});