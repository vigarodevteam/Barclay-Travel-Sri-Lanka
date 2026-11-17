RewriteEngine On

# Serve existing files and assets directly
RewriteCond %{REQUEST_FILENAME} -f [OR]
RewriteCond %{REQUEST_FILENAME} -d
RewriteRule ^ - [L]

# Route API requests to api.php
RewriteRule ^api/?$ api.php [L,QSA]

# Route all clean frontend paths (/destinations/, /tours/central-highlands/, etc.) to index.php
RewriteRule ^ index.php [L]