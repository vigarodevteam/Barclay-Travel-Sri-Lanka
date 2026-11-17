# Barclay Travel Sri Lanka — Multi-File PHP & MySQL Project

## Directory Layout
```text
barclay-travel-sri-lanka/
├── .htaccess               # Clean URL rewrites (/destinations/, /tours/, etc.)
├── index.php               # Main HTML shell, SEO meta tag injector, header & footer
├── api.php                 # Backend JSON API for form submissions & booking reference lookup
├── database.sql            # MySQL schema for enquiries, bookings & Grand Ride registrations
└── assets/
    ├── css/
    │   └── styles.css      # Custom design tokens, typography, transitions & responsive styles
    └── js/
        ├── data.js         # Complete structured content (8 destinations, 10 tours, FAQs, statuses)
        └── app.js          # Client-side router, DOM renderer, filter logic & API fetch handlers
```

## Setup Instructions
1. Import `database.sql` into your MySQL / MariaDB database (`barclay_travel`).
2. Update database credentials in `api.php`.
3. Deploy to an Apache/Nginx PHP 8.1+ server with `mod_rewrite` enabled.