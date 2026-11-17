<?php
/**
 * Barclay Travel Sri Lanka — Main PHP Entry Point
 * Injects per-route SEO titles and meta descriptions for search crawlers
 * while serving the interactive frontend application.
 */

$requestUri = parse_url($_SERVER['REQUEST_URI'] ?? '/', PHP_URL_PATH);
$cleanPath = rtrim($requestUri, '/') . '/';
if ($cleanPath === '//') {
    $cleanPath = '/';
}

// Server-side SEO metadata map matching the client specification
$seoMap = [
    '/' => [
        'title' => 'Sri Lanka Tours and Private Travel | Barclay Travel Sri Lanka',
        'desc'  => 'Explore Sri Lanka with planned itineraries, bespoke holidays, accommodation, private transfers and vehicle rentals from Barclay Travel Sri Lanka.'
    ],
    '/about/' => [
        'title' => 'About Barclay Travel Sri Lanka | How We Plan Your Trip',
        'desc'  => 'See how Barclay Travel Sri Lanka brings together itineraries, accommodation, private transport and local experiences.'
    ],
    '/destinations/' => [
        'title' => 'Sri Lanka Destinations | Coast, Highlands and Heritage',
        'desc'  => 'Explore eight Sri Lankan regions and find the tours, stays and transfers that fit your route.'
    ],
    '/destinations/south-coast-galle/' => [
        'title' => "Galle and Sri Lanka's South Coast | Barclay Travel",
        'desc'  => "Plan a stay around Galle Fort, coastal villages and a cinnamon producer visit on Sri Lanka's southern coast."
    ],
    '/destinations/central-highlands/' => [
        'title' => 'Sri Lanka Central Highlands and Tea Country | Barclay Travel',
        'desc'  => "Plan a highlands journey through Nuwara Eliya, Ella and Sri Lanka's tea landscapes."
    ],
    '/destinations/knuckles-meemure/' => [
        'title' => 'Knuckles and Meemure | Sri Lanka Mountain Holidays',
        'desc'  => 'Explore guided walks, mountain landscapes and village stays in the Knuckles and Meemure area.'
    ],
    '/destinations/kandy-matale/' => [
        'title' => 'Kandy and Matale | Heritage, Gardens and Spices',
        'desc'  => "Explore Kandy's historic setting and make time for a spice visit in Matale. Find tours and private transport."
    ],
    '/destinations/cultural-triangle/' => [
        'title' => 'Sri Lanka Cultural Triangle | Sigiriya and Dambulla',
        'desc'  => 'Plan a heritage stay around Sigiriya, Dambulla and ancient-city sites with private transport and optional guiding.'
    ],
    '/destinations/southeast-wildlife/' => [
        'title' => 'Yala and Udawalawe Safari Holidays | Barclay Travel',
        'desc'  => 'Plan a southeast Sri Lanka trip with guided safari excursions, suitable overnight bases and coastal add-ons.'
    ],
    '/destinations/east-coast/' => [
        'title' => 'Sri Lanka East Coast | Trincomalee and Batticaloa',
        'desc'  => 'Explore the East Coast with time for Trincomalee, Batticaloa, coastal stays and local food.'
    ],
    '/destinations/jaffna-north/' => [
        'title' => 'Jaffna and Northern Sri Lanka | Barclay Travel',
        'desc'  => "Discover Jaffna's food, heritage and palmyra landscapes with a private northern itinerary."
    ],
    '/holiday-types/' => [
        'title' => 'Sri Lanka Holiday Types | Find Your Travel Style',
        'desc'  => 'Choose a coastal, heritage, wildlife, walking, food, wellness, family or motorcycle holiday in Sri Lanka.'
    ],
    '/tours/' => [
        'title' => 'Sri Lanka Private Tours and Sample Itineraries',
        'desc'  => 'Explore ten sample Sri Lanka itineraries from three to ten days, with private transport and flexible accommodation.'
    ],
    '/exclusive-experiences/' => [
        'title' => 'Private Sri Lanka Experiences and Tailor Made Holidays',
        'desc'  => 'Request a bespoke Sri Lanka itinerary with private guiding, boutique stays and producer-led visits.'
    ],
    '/transport/' => [
        'title' => 'Private Transfers and Drivers in Sri Lanka',
        'desc'  => 'Request an airport transfer, chauffeur-driven car or van, private driver or itinerary support for travel in Sri Lanka.'
    ],
    '/vehicle-rentals/' => [
        'title' => 'Motorcycle and Vehicle Rental Enquiries Sri Lanka',
        'desc'  => 'Request a motorcycle or other eligible vehicle for your Sri Lanka dates, with pickup, return and rental terms confirmed in your quote.'
    ],
    '/accommodation/' => [
        'title' => 'Sri Lanka Accommodation Planning and Boutique Stays',
        'desc'  => 'Request Sri Lanka accommodation by region, travel dates, room needs and budget, from beach stays to hill-country retreats.'
    ],
    '/ceylon-grand-ride/' => [
        'title' => 'The Ceylon Grand Ride | Annual Sri Lanka Motorcycle Event',
        'desc'  => 'Explore the proposed annual Ceylon Grand Ride, with a planned Panadura flag-off and supported motorcycle stages across Sri Lanka.'
    ],
    '/contact/' => [
        'title' => 'Contact Barclay Travel Sri Lanka | Plan Your Trip',
        'desc'  => 'Enquire about a private Sri Lanka tour, accommodation, transport or vehicle rental.'
    ],
    '/booking/' => [
        'title' => 'Sri Lanka Tour Booking, Payments and FAQs | Barclay Travel',
        'desc'  => 'Learn how a Barclay Travel Sri Lanka enquiry becomes a confirmed tour, transfer, stay or rental booking.'
    ],
];

$currentSeo = $seoMap[$cleanPath] ?? $seoMap['/'];
?>
<!DOCTYPE html>
<html lang="en" class="scroll-smooth">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title><?= htmlspecialchars($currentSeo['title'], ENT_QUOTES, 'UTF-8') ?></title>
  <meta name="description" content="<?= htmlspecialchars($currentSeo['desc'], ENT_QUOTES, 'UTF-8') ?>" />

  <!-- Tailwind CSS -->
  <script src="https://cdn.tailwindcss.com"></script>

  <!-- Google Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@0,500;0,600;0,700;1,400&display=swap" rel="stylesheet">

  <!-- Custom Stylesheet -->
  <link rel="stylesheet" href="/assets/css/styles.css" />

  <!-- Lucide Icons -->
  <script src="https://unpkg.com/lucide@latest"></script>

  <script>
    tailwind.config = {
      theme: {
        extend: {
          fontFamily: {
            sans: ['Inter', 'sans-serif'],
            serif: ['Playfair Display', 'serif'],
          },
          colors: {
            ceylon: {
              50: '#f5f8f6', 100: '#e4ede7', 200: '#cadcd0', 300: '#a3c1ae',
              400: '#769f86', 500: '#538266', 600: '#3f6850', 700: '#335341',
              800: '#2a4336', 900: '#23372d', 950: '#121e18',
            },
            cinnamon: {
              50: '#fbf7f4', 100: '#f5ece4', 200: '#ead6c7', 300: '#dbb89e',
              400: '#c9936f', 500: '#bc774d', 600: '#ae633f', 700: '#914f35',
              800: '#764230', 900: '#60382a',
            },
            sand: {
              50: '#faf9f6', 100: '#f3f1eb', 200: '#e7e3d6', 300: '#d6ceb9',
              800: '#4a453b', 900: '#2c2923',
            }
          }
        }
      }
    };
    window.INITIAL_SERVER_PATH = <?= json_encode($cleanPath) ?>;
  </script>
</head>
<body class="bg-sand-50 text-stone-800 font-sans antialiased selection:bg-ceylon-700 selection:text-white flex flex-col min-h-screen">

  <!-- TOP NAVIGATION BAR -->
  <header class="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-sand-200 transition-all">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-20">
        <a href="/" onclick="return handleNavClick(event, '/')" class="flex items-center gap-3 group focus:outline-none">
          <div class="w-10 h-10 rounded-xl bg-ceylon-800 text-white flex items-center justify-center shadow-sm group-hover:bg-ceylon-700 transition">
            <i data-lucide="compass" class="w-5 h-5 text-cinnamon-300"></i>
          </div>
          <div class="flex flex-col">
            <span class="font-serif font-bold text-lg sm:text-xl tracking-tight text-ceylon-950 leading-none">Barclay Travel</span>
            <span class="text-[11px] uppercase tracking-[0.2em] text-cinnamon-700 font-semibold mt-1">Sri Lanka</span>
          </div>
        </a>

        <nav class="hidden xl:flex items-center space-x-1 text-sm font-medium text-stone-700">
          <div class="relative group">
            <button onclick="navigateTo('/destinations/')" class="px-3 py-2 rounded-lg hover:bg-sand-100 hover:text-ceylon-800 flex items-center gap-1 transition">
              <span>Destinations</span>
              <i data-lucide="chevron-down" class="w-3.5 h-3.5 text-stone-400 group-hover:text-ceylon-700"></i>
            </button>
            <div class="dropdown-panel absolute left-0 mt-1 w-64 bg-white rounded-2xl shadow-xl border border-sand-200 p-2 z-50">
              <a href="/destinations/" onclick="return handleNavClick(event, '/destinations/')" class="block px-3 py-2 rounded-xl text-xs font-semibold uppercase tracking-wider text-ceylon-800 bg-ceylon-50 mb-1">All 8 Regional Guides</a>
              <div id="desktop-destinations-submenu" class="space-y-0.5"></div>
            </div>
          </div>

          <a href="/holiday-types/" onclick="return handleNavClick(event, '/holiday-types/')" class="px-3 py-2 rounded-lg hover:bg-sand-100 hover:text-ceylon-800 transition">Holiday Types</a>
          <a href="/tours/" onclick="return handleNavClick(event, '/tours/')" class="px-3 py-2 rounded-lg hover:bg-sand-100 hover:text-ceylon-800 transition">Tours</a>
          <a href="/exclusive-experiences/" onclick="return handleNavClick(event, '/exclusive-experiences/')" class="px-3 py-2 rounded-lg hover:bg-sand-100 hover:text-ceylon-800 transition">Exclusive Experiences</a>

          <div class="relative group">
            <button onclick="navigateTo('/transport/')" class="px-3 py-2 rounded-lg hover:bg-sand-100 hover:text-ceylon-800 flex items-center gap-1 transition">
              <span>Travel Services</span>
              <i data-lucide="chevron-down" class="w-3.5 h-3.5 text-stone-400 group-hover:text-ceylon-700"></i>
            </button>
            <div class="dropdown-panel absolute left-0 mt-1 w-56 bg-white rounded-2xl shadow-xl border border-sand-200 p-2 z-50">
              <a href="/transport/" onclick="return handleNavClick(event, '/transport/')" class="flex items-start gap-2.5 p-2.5 rounded-xl hover:bg-sand-100 transition">
                <i data-lucide="car" class="w-4 h-4 text-ceylon-700 mt-0.5"></i>
                <div>
                  <div class="text-sm font-semibold text-stone-900">Private Transport</div>
                  <div class="text-xs text-stone-500">Chauffeur cars, vans & transfers</div>
                </div>
              </a>
              <a href="/vehicle-rentals/" onclick="return handleNavClick(event, '/vehicle-rentals/')" class="flex items-start gap-2.5 p-2.5 rounded-xl hover:bg-sand-100 transition mt-1">
                <i data-lucide="bike" class="w-4 h-4 text-cinnamon-700 mt-0.5"></i>
                <div>
                  <div class="text-sm font-semibold text-stone-900">Vehicle Rentals</div>
                  <div class="text-xs text-stone-500">Self-drive motorcycles & cars</div>
                </div>
              </a>
            </div>
          </div>

          <a href="/accommodation/" onclick="return handleNavClick(event, '/accommodation/')" class="px-3 py-2 rounded-lg hover:bg-sand-100 hover:text-ceylon-800 transition">Accommodation</a>

          <a href="/ceylon-grand-ride/" onclick="return handleNavClick(event, '/ceylon-grand-ride/')" class="px-3 py-2 rounded-lg hover:bg-cinnamon-50 text-cinnamon-800 font-semibold flex items-center gap-1.5 transition">
            <span class="w-2 h-2 rounded-full bg-cinnamon-600"></span>
            <span>The Ceylon Grand Ride</span>
          </a>
        </nav>

        <div class="flex items-center gap-3">
          <a href="/contact/#trip-enquiry" onclick="return handleNavClick(event, '/contact/', 'trip-enquiry')" class="hidden sm:inline-flex items-center gap-2 bg-ceylon-800 hover:bg-ceylon-900 text-white text-sm font-medium px-5 py-2.5 rounded-xl shadow-sm transition">
            <span>Plan My Trip</span>
            <i data-lucide="arrow-right" class="w-4 h-4"></i>
          </a>
          <button id="mobile-menu-btn" onclick="toggleMobileMenu()" aria-label="Toggle Menu" class="xl:hidden p-2.5 rounded-xl border border-sand-200 text-stone-700 hover:bg-sand-100 transition">
            <i data-lucide="menu" class="w-5 h-5"></i>
          </button>
        </div>
      </div>
    </div>

    <div id="mobile-menu" class="hidden xl:hidden bg-white border-b border-sand-200 px-4 pt-3 pb-6 space-y-2 max-h-[85vh] overflow-y-auto">
      <a href="/" onclick="return handleNavClick(event, '/', null, true)" class="block px-3 py-2.5 rounded-xl font-medium text-stone-800 hover:bg-sand-100">Home</a>
      <div class="px-3 py-2">
        <a href="/destinations/" onclick="return handleNavClick(event, '/destinations/', null, true)" class="block font-semibold text-ceylon-900 mb-2">Destinations (8 Regions)</a>
        <div id="mobile-destinations-submenu" class="grid grid-cols-1 sm:grid-cols-2 gap-1 pl-3 border-l-2 border-ceylon-200"></div>
      </div>
      <a href="/holiday-types/" onclick="return handleNavClick(event, '/holiday-types/', null, true)" class="block px-3 py-2.5 rounded-xl font-medium text-stone-800 hover:bg-sand-100">Holiday Types</a>
      <a href="/tours/" onclick="return handleNavClick(event, '/tours/', null, true)" class="block px-3 py-2.5 rounded-xl font-medium text-stone-800 hover:bg-sand-100">Tours (10 Itineraries)</a>
      <a href="/exclusive-experiences/" onclick="return handleNavClick(event, '/exclusive-experiences/', null, true)" class="block px-3 py-2.5 rounded-xl font-medium text-stone-800 hover:bg-sand-100">Exclusive Experiences</a>
      <a href="/transport/" onclick="return handleNavClick(event, '/transport/', null, true)" class="block px-3 py-2.5 rounded-xl font-medium text-stone-800 hover:bg-sand-100">Travel Services: Private Transport</a>
      <a href="/vehicle-rentals/" onclick="return handleNavClick(event, '/vehicle-rentals/', null, true)" class="block px-3 py-2.5 rounded-xl font-medium text-stone-800 hover:bg-sand-100">Travel Services: Vehicle Rentals</a>
      <a href="/accommodation/" onclick="return handleNavClick(event, '/accommodation/', null, true)" class="block px-3 py-2.5 rounded-xl font-medium text-stone-800 hover:bg-sand-100">Accommodation</a>
      <a href="/ceylon-grand-ride/" onclick="return handleNavClick(event, '/ceylon-grand-ride/', null, true)" class="block px-3 py-2.5 rounded-xl font-semibold text-cinnamon-800 bg-cinnamon-50">The Ceylon Grand Ride</a>
      <div class="pt-3 border-t border-sand-200 flex flex-col sm:flex-row gap-2">
        <a href="/contact/#trip-enquiry" onclick="return handleNavClick(event, '/contact/', 'trip-enquiry', true)" class="w-full text-center bg-ceylon-800 text-white font-medium py-3 rounded-xl">Plan My Trip</a>
        <a href="/booking/" onclick="return handleNavClick(event, '/booking/', null, true)" class="w-full text-center bg-sand-100 text-stone-800 font-medium py-3 rounded-xl">Booking & FAQs</a>
      </div>
    </div>
  </header>

  <!-- MAIN DYNAMIC VIEWPORT -->
  <main id="app-root" class="flex-grow"></main>

  <!-- FOOTER -->
  <footer class="bg-ceylon-950 text-sand-200 border-t border-ceylon-900 mt-16">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div class="space-y-4">
          <div class="flex items-center gap-3">
            <div class="w-9 h-9 rounded-xl bg-ceylon-800 flex items-center justify-center">
              <i data-lucide="compass" class="w-5 h-5 text-cinnamon-300"></i>
            </div>
            <div>
              <span class="font-serif font-bold text-lg text-white block leading-none">Barclay Travel</span>
              <span class="text-[10px] uppercase tracking-[0.2em] text-cinnamon-300 font-semibold">Sri Lanka</span>
            </div>
          </div>
          <p class="text-sm text-sand-300 leading-relaxed">
            Private journeys, bespoke itineraries, coastal and highland stays, chauffeur-driven transport, vehicle rentals, and The Ceylon Grand Ride.
          </p>
          <div class="pt-2">
            <a href="/contact/#trip-enquiry" onclick="return handleNavClick(event, '/contact/', 'trip-enquiry')" class="inline-flex items-center gap-1.5 text-xs font-semibold bg-cinnamon-600 hover:bg-cinnamon-500 text-white px-4 py-2 rounded-lg transition">
              <span>Plan My Trip</span>
              <i data-lucide="arrow-up-right" class="w-3.5 h-3.5"></i>
            </a>
          </div>
        </div>

        <div>
          <h3 class="text-xs font-semibold uppercase tracking-wider text-white mb-4">Explore Sri Lanka</h3>
          <ul class="space-y-2.5 text-sm text-sand-300">
            <li><a href="/destinations/" onclick="return handleNavClick(event, '/destinations/')" class="hover:text-white transition">Destinations (8 Regions)</a></li>
            <li><a href="/holiday-types/" onclick="return handleNavClick(event, '/holiday-types/')" class="hover:text-white transition">Holiday Types</a></li>
            <li><a href="/tours/" onclick="return handleNavClick(event, '/tours/')" class="hover:text-white transition">Sample Tours (10 Routes)</a></li>
            <li><a href="/exclusive-experiences/" onclick="return handleNavClick(event, '/exclusive-experiences/')" class="hover:text-white transition">Exclusive Experiences</a></li>
            <li><a href="/ceylon-grand-ride/" onclick="return handleNavClick(event, '/ceylon-grand-ride/')" class="hover:text-cinnamon-300 text-cinnamon-200 font-medium transition">The Ceylon Grand Ride</a></li>
          </ul>
        </div>

        <div>
          <h3 class="text-xs font-semibold uppercase tracking-wider text-white mb-4">Travel Services</h3>
          <ul class="space-y-2.5 text-sm text-sand-300">
            <li><a href="/accommodation/" onclick="return handleNavClick(event, '/accommodation/')" class="hover:text-white transition">Accommodation Planning</a></li>
            <li><a href="/transport/" onclick="return handleNavClick(event, '/transport/')" class="hover:text-white transition">Private Transport & Drivers</a></li>
            <li><a href="/vehicle-rentals/" onclick="return handleNavClick(event, '/vehicle-rentals/')" class="hover:text-white transition">Motorcycle & Vehicle Rentals</a></li>
            <li><a href="/booking/" onclick="return handleNavClick(event, '/booking/')" class="hover:text-white transition">Booking, Payments & FAQs</a></li>
          </ul>
        </div>

        <div>
          <h3 class="text-xs font-semibold uppercase tracking-wider text-white mb-4">Company & Enquiries</h3>
          <ul class="space-y-2.5 text-sm text-sand-300">
            <li><a href="/about/" onclick="return handleNavClick(event, '/about/')" class="hover:text-white transition">About Barclay Travel Sri Lanka</a></li>
            <li><a href="/contact/" onclick="return handleNavClick(event, '/contact/')" class="hover:text-white transition">Contact & Enquiries</a></li>
            <li><a href="/booking/" onclick="return handleNavClick(event, '/booking/')" class="hover:text-white transition">Booking & FAQs</a></li>
            <li><button onclick="openLegalModal('terms')" class="hover:text-white transition text-left">Terms & Conditions</button></li>
            <li><button onclick="openLegalModal('cancellation')" class="hover:text-white transition text-left">Cancellation & Refund Policy</button></li>
            <li><button onclick="openLegalModal('privacy')" class="hover:text-white transition text-left">Privacy Notice</button></li>
          </ul>
        </div>
      </div>

      <div class="mt-12 pt-8 border-t border-ceylon-900 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-sand-300/80">
        <p>&copy; <?= date('Y') ?> Barclay Travel Sri Lanka. All rights reserved.</p>
        <p>Commercial itineraries available year-round subject to supplier confirmation.</p>
      </div>
    </div>
  </footer>

  <!-- CUSTOM MODAL -->
  <div id="ui-modal" class="fixed inset-0 z-50 hidden items-center justify-center bg-stone-950/60 backdrop-blur-sm p-4">
    <div class="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-sand-200 relative modal-card">
      <button onclick="closeModal()" aria-label="Close modal" class="absolute top-4 right-4 p-2 rounded-xl text-stone-400 hover:text-stone-700 hover:bg-sand-100 transition">
        <i data-lucide="x" class="w-5 h-5"></i>
      </button>
      <div id="ui-modal-content"></div>
    </div>
  </div>

  <!-- Separated JavaScript Modules -->
  <script src="/assets/js/data.js"></script>
  <script src="/assets/js/app.js"></script>
</body>
</html>