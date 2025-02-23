import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const BASE_URL = 'https://www.thedesignrefuge.com';
const today = new Date().toISOString().split('T')[0];

import { statesList } from '../../../data/states.mjs';  

// Define static routes
const staticRoutes = [
  '/',
  '/about',
  '/contact',
  '/pricing',
  '/terms',
  '/privacy'
];

const generateSitemapXML = (entries) => {
  const xmlEntries = entries
    .map(entry => `
    <url>
      <loc>${entry.loc}</loc>
      <lastmod>${entry.lastmod}</lastmod>
      <changefreq>${entry.changefreq}</changefreq>
      <priority>${entry.priority.toFixed(1)}</priority>
    </url>`)
    .join('');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${xmlEntries}
</urlset>`;
}

const generateSitemap = async () => {
  try {
    const sitemapEntries = [];
    const existingUrlSet = new Set();

    // Try to read existing sitemap
    try {
      const existingSitemap = fs.readFileSync('./public/sitemap.xml', 'utf-8');
      const existingUrls = existingSitemap.match(/<loc>([^<]+)<\/loc>/g) || [];
      existingUrls.forEach(url => {
        existingUrlSet.add(url.replace(/<\/?loc>/g, ''));
      });
      console.log(`Found ${existingUrlSet.size} existing URLs in sitemap`);
    } catch (error) {
      console.log('No existing sitemap found, creating new one');
    }

    // Add static routes
    staticRoutes.forEach(route => {
      const url = `${BASE_URL}${route}`;
      if (!existingUrlSet.has(url)) {
        sitemapEntries.push({
          loc: url,
          lastmod: today,
          changefreq: 'weekly',
          priority: route === '/' ? 1.0 : 0.8
        });
      }
    });

    // Add state pages
    statesList.forEach(state => {
      const url = `${BASE_URL}/designers/${state.slug}`;
      if (!existingUrlSet.has(url)) {
        sitemapEntries.push({
          loc: url,
          lastmod: today,
          changefreq: 'daily',
          priority: 0.9
        });
      }
    });

    // Create single sitemap
    const sitemapXML = generateSitemapXML(sitemapEntries);
    fs.writeFileSync('./public/sitemap.xml', sitemapXML);
    console.log(`Generated sitemap with ${sitemapEntries.length} URLs`);

    // Create robots.txt if it doesn't exist
    const robotsTxtPath = './public/robots.txt';
    if (!fs.existsSync(robotsTxtPath)) {
      const robotsTxt = `User-agent: *
Allow: /

Sitemap: ${BASE_URL}/sitemap.xml`;
      fs.writeFileSync(robotsTxtPath, robotsTxt);
      console.log('Generated robots.txt');
    }

  } catch (error) {
    console.error('Error generating sitemap:', error);
    process.exit(1);
  }
};

generateSitemap();