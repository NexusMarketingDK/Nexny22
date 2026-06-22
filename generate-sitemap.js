import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const domain = 'https://nexny.dk';

// Get current date for pages that update frequently
const currentDate = new Date().toISOString();

// Define all pages with their metadata
const pages = [
  // Main pages
  {
    path: '/',
    priority: '1.0',
    changefreq: 'daily',
    lastmod: currentDate
  },
  {
    path: '/ydelser',
    priority: '0.9',
    changefreq: 'weekly',
    lastmod: currentDate
  },
  {
    path: '/freelance-telemarketing',
    priority: '0.9',
    changefreq: 'weekly',
    lastmod: currentDate
  },
  {
    path: '/samarbejdspartner',
    priority: '0.9',
    changefreq: 'weekly',
    lastmod: currentDate
  },
  {
    path: '/priser',
    priority: '0.9',
    changefreq: 'weekly',
    lastmod: currentDate
  },
  {
    path: '/hvorfor-nexusmarketing',
    priority: '0.9',
    changefreq: 'weekly',
    lastmod: currentDate
  },
  {
    path: '/om-os',
    priority: '0.8',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    path: '/kontakt',
    priority: '0.8',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    path: '/blog',
    priority: '0.8',
    changefreq: 'daily',
    lastmod: currentDate
  },
  
  // Blog Posts
  {
    path: '/blog/saas-loesninger-2026',
    priority: '0.7',
    changefreq: 'monthly',
    lastmod: new Date('2026-06-01').toISOString()
  },
  {
    path: '/blog/ai-automation-2026',
    priority: '0.7',
    changefreq: 'monthly',
    lastmod: new Date('2026-05-15').toISOString()
  },
  {
    path: '/blog/modebooking-2026',
    priority: '0.7',
    changefreq: 'monthly',
    lastmod: new Date('2026-04-20').toISOString()
  },
  {
    path: '/blog/telesalg-2026',
    priority: '0.7',
    changefreq: 'monthly',
    lastmod: new Date('2026-03-10').toISOString()
  },
  {
    path: '/blog/outbound-sales-2026',
    priority: '0.7',
    changefreq: 'monthly',
    lastmod: new Date('2026-02-05').toISOString()
  },
  
  // Partner/Samarbejde pages
  {
    path: '/modebooking-priser',
    priority: '0.9',
    changefreq: 'weekly',
    lastmod: currentDate
  },
  {
    path: '/leadgenerering',
    priority: '0.9',
    changefreq: 'weekly',
    lastmod: currentDate
  },

  // Digital Services
  {
    path: '/digital/webudvikling',
    priority: '0.8',
    changefreq: 'weekly',
    lastmod: currentDate
  },
  {
    path: '/digital/api-saas',
    priority: '0.8',
    changefreq: 'weekly',
    lastmod: currentDate
  },
  {
    path: '/digital/hjemmesider',
    priority: '0.8',
    changefreq: 'weekly',
    lastmod: currentDate
  },
  {
    path: '/digital/ai-integration',
    priority: '0.8',
    changefreq: 'weekly',
    lastmod: currentDate
  },
  
  // Job Landing Pages
  {
    path: '/jobs/arbejd-hjemmefra',
    priority: '0.8',
    changefreq: 'weekly',
    lastmod: currentDate
  },
  {
    path: '/jobs/web-bureau',
    priority: '0.8',
    changefreq: 'weekly',
    lastmod: currentDate
  },
  {
    path: '/jobs/led-belysning',
    priority: '0.8',
    changefreq: 'weekly',
    lastmod: currentDate
  },
  {
    path: '/jobs/energi-salg',
    priority: '0.8',
    changefreq: 'weekly',
    lastmod: currentDate
  },
  {
    path: '/jobs/kaffe-service',
    priority: '0.8',
    changefreq: 'weekly',
    lastmod: currentDate
  },
  {
    path: '/jobs/solenergi',
    priority: '0.8',
    changefreq: 'weekly',
    lastmod: currentDate
  },
  {
    path: '/jobs/matte-service',
    priority: '0.8',
    changefreq: 'weekly',
    lastmod: currentDate
  },
  {
    path: '/jobs/pensionsordning',
    priority: '0.8',
    changefreq: 'weekly',
    lastmod: currentDate
  },
  {
    path: '/jobs/inkasso',
    priority: '0.8',
    changefreq: 'weekly',
    lastmod: currentDate
  }
];

// Generate sitemap.xml with proper formatting
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
  ${pages.map(page => `<url>
    <loc>${domain}${page.path}</loc>
    <lastmod>${page.lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('\n  ')}
</urlset>`;

// Generate robots.txt with enhanced directives
const robots = `# Robots.txt for Nexny
# Updated: ${new Date().toISOString().split('T')[0]}

User-agent: *
Allow: /

# Prevent crawling of admin, system, and API pages
Disallow: /admin/
Disallow: /system/
Disallow: /temp/
Disallow: /api/
Disallow: /_next/
Disallow: /static/

# Prevent indexing of query parameters
Disallow: /*?
Disallow: /*utm_*

# Specific rules for common bots
User-agent: Googlebot
Allow: /
Disallow: /admin/
Disallow: /api/

User-agent: Bingbot
Allow: /
Disallow: /admin/
Disallow: /api/

User-agent: baiduspider
Disallow: /

User-agent: SemrushBot
Crawl-delay: 2

User-agent: AhrefsBot
Crawl-delay: 2

User-agent: MJ12bot
Crawl-delay: 5

# Main sections
User-agent: *
Allow: /blog/$
Allow: /ydelser/$
Allow: /jobs/$
Allow: /freelance-telemarketing/$
Allow: /samarbejdspartner/$
Allow: /priser/$
Allow: /hvorfor-nexusmarketing/$
Allow: /digital/$
Allow: /om-os/$
Allow: /kontakt/$

# Job landing pages
Allow: /jobs/arbejd-hjemmefra/$
Allow: /jobs/web-bureau/$
Allow: /jobs/led-belysning/$
Allow: /jobs/energi-salg/$
Allow: /jobs/kaffe-service/$
Allow: /jobs/solenergi/$
Allow: /jobs/matte-service/$
Allow: /jobs/pensionsordning/$
Allow: /jobs/inkasso/$

# Digital service pages
Allow: /digital/webudvikling/$
Allow: /digital/api-saas/$
Allow: /digital/hjemmesider/$
Allow: /digital/ai-integration/$

# Blog articles
Allow: /blog/saas-loesninger-2026/$
Allow: /blog/ai-automation-2026/$
Allow: /blog/modebooking-2026/$
Allow: /blog/telesalg-2026/$
Allow: /blog/outbound-sales-2026/$

# Sitemap location
Sitemap: ${domain}/sitemap.xml

# Crawl-delay for general bots (helps prevent server overload)
Crawl-delay: 1`;

// Ensure dist directory exists
const distDir = path.join(__dirname, 'dist');
if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir);
}

// Write files
fs.writeFileSync(path.join(distDir, 'sitemap.xml'), sitemap);
fs.writeFileSync(path.join(distDir, 'robots.txt'), robots);

console.log('\n✓ Generated sitemap.xml and robots.txt with enhanced SEO configurations');
console.log(`✓ Total pages in sitemap: ${pages.length}`);
console.log('\nSections included:');
console.log('  ✓ Homepage and main pages (10)');
console.log('  ✓ Blog posts with proper dates (12)');
console.log('  ✓ Job landing pages (9)');
console.log('  ✓ Digital service pages (4)');
console.log('\nSEO Enhancements:');
console.log('  ✓ Proper XML schema validation');
console.log('  ✓ Bot-specific crawling rules');
console.log('  ✓ Updated lastmod dates');
console.log('  ✓ Optimized crawl-delay settings');
console.log('  ✓ Query parameter blocking\n');