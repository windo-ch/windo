// @ts-check
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Get directory name in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuration
const SITE_URL = 'https://windo.ch';
const PUBLIC_DIR = path.join(__dirname, '../public');
const SITEMAP_PATH = path.join(PUBLIC_DIR, 'sitemap.xml');
const CURRENT_DATE = new Date().toISOString().split('T')[0]; // YYYY-MM-DD format

// Define routes to include in sitemap - modified to match actual file paths
const routes = [
  { path: '/', priority: 1.0, changefreq: 'monthly' },
  { path: '/services', priority: 0.8, changefreq: 'monthly' },
  { path: '/project-questionnaire', priority: 0.7, changefreq: 'monthly' },
  { path: '/privacy', priority: 0.5, changefreq: 'yearly' },
  { path: '/terms', priority: 0.5, changefreq: 'yearly' },
  
  // Industry pages with corrected naming
  { path: '/industries/photography-studios', priority: 0.7, changefreq: 'monthly' },
  { path: '/industries/dental-clinics', priority: 0.7, changefreq: 'monthly' },
  { path: '/industries/fitness-studios', priority: 0.7, changefreq: 'monthly' },
  { path: '/industries/retail-stores', priority: 0.7, changefreq: 'monthly' },
  { path: '/industries/real-estate', priority: 0.7, changefreq: 'monthly' },
  { path: '/industries/yoga-studios', priority: 0.7, changefreq: 'monthly' },
  { path: '/industries/spas', priority: 0.7, changefreq: 'monthly' },
  { path: '/industries/cafes', priority: 0.7, changefreq: 'monthly' },
  { path: '/industries/interior-designers', priority: 0.7, changefreq: 'monthly' },
  { path: '/industries/art-galleries', priority: 0.7, changefreq: 'monthly' },
  { path: '/industries/boutiques', priority: 0.7, changefreq: 'monthly' },
  { path: '/industries/hotels', priority: 0.7, changefreq: 'monthly' },
  { path: '/industries/marketing-agencies', priority: 0.7, changefreq: 'monthly' },
  { path: '/industries/tech-startups', priority: 0.7, changefreq: 'monthly' },
  { path: '/industries/consultants', priority: 0.7, changefreq: 'monthly' }
];

// Generate sitemap XML content
function generateSitemapXml() {
  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
  
  routes.forEach(route => {
    xml += '  <url>\n';
    xml += `    <loc>${SITE_URL}${route.path}</loc>\n`;
    xml += `    <lastmod>${CURRENT_DATE}</lastmod>\n`;
    xml += `    <changefreq>${route.changefreq}</changefreq>\n`;
    xml += `    <priority>${route.priority}</priority>\n`;
    xml += '  </url>\n';
  });
  
  xml += '</urlset>';
  return xml;
}

// Write the sitemap to a file
function writeSitemap() {
  const xml = generateSitemapXml();
  
  try {
    // Ensure the public directory exists
    if (!fs.existsSync(PUBLIC_DIR)) {
      fs.mkdirSync(PUBLIC_DIR, { recursive: true });
    }
    
    // Write the file
    fs.writeFileSync(SITEMAP_PATH, xml);
    console.log(`Sitemap generated successfully at ${SITEMAP_PATH}`);
  } catch (error) {
    console.error('Error writing sitemap:', error);
  }
}

// Execute the script
writeSitemap(); 