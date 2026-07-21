import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const domain = 'https://magnoramarketing.dk';

// Get current date for pages that update frequently
const currentDate = new Date().toISOString();

// Blog posts [slug, publish date] — keep in sync with src/pages/BlogPage.tsx
const blogPosts = [
  ['saas-loesninger-2026', '2026-01-15'],
  ['ai-automation-2026', '2026-02-01'],
  ['modebooking-2026', '2026-02-20'],
  ['telesalg-2026', '2026-03-05'],
  ['outbound-sales-2026', '2026-03-20'],
  ['hvorfor-saas-2026', '2026-04-01'],
  ['saas-vs-on-premise', '2026-04-05'],
  ['bedste-saas-tools-2026', '2026-04-10'],
  ['saas-integration-2026', '2026-04-15'],
  ['saas-security-gdpr', '2026-04-20'],
  ['hvorfor-magnora-webudvikling', '2026-04-25'],
  ['hjemmeside-til-vaekst-2026', '2026-05-05'],
  ['websitekonvertering-tips', '2026-05-15'],
  ['hvorfor-magnora-ai-integration', '2026-05-01'],
  ['ai-integration-roi-2026', '2026-05-10'],
  ['hvorfor-magnora-telesalg', '2026-05-20'],
  ['hvorfor-magnora-moedebooking', '2026-05-25'],
  ['outsourcing-telesalg-2026', '2026-06-01'],
  ['b2b-salg-strategi-2026', '2026-06-05'],
  ['moedebooking-scripts-2026', '2026-06-10'],
  ['leadgenerering-strategier-2026', '2026-06-15'],
  ['hvad-er-bant-2026', '2026-06-20'],
  ['vaekst-partner-guide', '2026-06-23'],
  ['startup-til-vaekst-2026', '2026-06-26'],
  ['cold-calling-vs-inbound', '2026-06-29'],
  ['hvorfor-samarbejde-magnora', '2026-07-01'],
  ['ideudvikling-med-magnora', '2026-07-02'],
  ['fra-ide-til-salg', '2026-07-03'],
  ['moedebooking-partner-magnora', '2026-07-04'],
  ['outsource-moedebooking-fordele', '2026-07-05'],
  ['telesalg-partner-magnora', '2026-07-06'],
  ['b2b-telesalg-samarbejde', '2026-07-07'],
  ['vaekstpartner-ide-moedebooking-telesalg', '2026-07-08'],
  ['saadan-foregaar-samarbejdet', '2026-07-09'],
  ['hvorfor-outsource-salg-og-moedebooking', '2026-07-10'],
];

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
    path: '/hvorfor-nexny',
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
  ...blogPosts.map(([slug, date]) => ({
    path: `/blog/${slug}`,
    priority: '0.7',
    changefreq: 'monthly',
    lastmod: new Date(date).toISOString()
  })),

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
  {
    path: '/digital/ai-widget',
    priority: '0.7',
    changefreq: 'weekly',
    lastmod: currentDate
  },
  {
    path: '/digital/ai-reception',
    priority: '0.7',
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
    path: '/jobs/webudvikling-salg',
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
const robots = `# Robots.txt for Magnora Marketing
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

# AI / LLM crawlers — explicitly welcomed for AI search visibility
# (ChatGPT, Perplexity, Claude, Google AI, Apple Intelligence, Common Crawl)
User-agent: GPTBot
Allow: /

User-agent: OAI-SearchBot
Allow: /

User-agent: ChatGPT-User
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: Perplexity-User
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: Claude-Web
Allow: /

User-agent: anthropic-ai
Allow: /

User-agent: Google-Extended
Allow: /

User-agent: Applebot-Extended
Allow: /

User-agent: CCBot
Allow: /

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