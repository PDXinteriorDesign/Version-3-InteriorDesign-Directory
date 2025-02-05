import { designers } from '../data/designers';

export const generateSitemap = () => {
  const baseUrl = 'https://thedesignrefuge.com';
  const today = new Date().toISOString();

  const staticPages = [
    '',
    '/about',
    '/contact',
    '/for-designers',
    '/resources'
  ];

  const locations = [
    '/location/oregon',
    '/location/nevada',
    '/location/arizona',
    '/location/washington'
  ];

  const urls = [
    ...staticPages.map(page => ({
      url: `${baseUrl}${page}`,
      lastmod: today,
      priority: page === '' ? '1.0' : '0.8'
    })),
    ...locations.map(location => ({
      url: `${baseUrl}${location}`,
      lastmod: today,
      priority: '0.8'
    })),
    ...designers.map(designer => ({
      url: `${baseUrl}/designer/${designer.id}`,
      lastmod: today,
      priority: '0.9'
    }))
  ];

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${urls.map(({ url, lastmod, priority }) => `
    <url>
      <loc>${url}</loc>
      <lastmod>${lastmod}</lastmod>
      <priority>${priority}</priority>
    </url>
  `).join('')}
</urlset>`;
};