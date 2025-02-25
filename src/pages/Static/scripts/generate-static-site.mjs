import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { JSDOM } from 'jsdom';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Create needed directories
const outputDir = path.join(__dirname, '../../../../dist');
const designersDir = path.join(outputDir, 'designers');

// Ensure directories exist
if (!fs.existsSync(outputDir)) {
  console.error(`❌ "dist" directory not found. Please run the build process first.`);
  process.exit(1); // Exit early if dist doesn't exist
}


if (!fs.existsSync(designersDir)) {
  fs.mkdirSync(designersDir, { recursive: true });
}

// 1. Read the prefetched data
async function generateStaticSite() {
  try {
    console.log('Starting improved static site generation...');
    
    // Read state index
    const statesIndexPath = path.join(__dirname, '../../../src/data/prefetched/states-index.json');
    
    if (!fs.existsSync(statesIndexPath)) {
      throw new Error(`States index file not found: ${statesIndexPath}`);
    }
    
    const statesIndex = JSON.parse(fs.readFileSync(statesIndexPath, 'utf8'));
    console.log(`Found ${statesIndex.length} states in index`);
    
    // Read template
    const templatePath = path.join(__dirname, '../../../../index.html');
    const template = fs.readFileSync(templatePath, 'utf8');
    
    // 2. Generate state pages
    console.log('Generating state pages...');
    for (const state of statesIndex) {
      try {
        const stateDataPath = path.join(__dirname, `../../../src/data/prefetched/${state.slug}.json`);
        
        if (!fs.existsSync(stateDataPath)) {
          console.warn(`State data file not found: ${stateDataPath}`);
          continue;
        }
        
        const stateData = JSON.parse(fs.readFileSync(stateDataPath, 'utf8'));
        
        // Only process states with listings
        if (stateData.length === 0) {
          console.log(`Skipping ${state.name} - no listings`);
          continue;
        }
        
        console.log(`Generating page for ${state.name} with ${stateData.length} listings...`);
        
        // Create state directory
        const stateDir = path.join(designersDir, state.slug);
        if (!fs.existsSync(stateDir)) {
          fs.mkdirSync(stateDir, { recursive: true });
        }
        
        // Create DOM from template
        const dom = new JSDOM(template);
        const { document } = dom.window;
        
        // Set title and meta
        document.title = `Interior Designers in ${state.name} | The Design Refuge`;
        
        // Set meta description
        let metaDesc = document.querySelector('meta[name="description"]');
        if (!metaDesc) {
          metaDesc = document.createElement('meta');
          metaDesc.setAttribute('name', 'description');
          document.head.appendChild(metaDesc);
        }
        metaDesc.setAttribute('content', `Discover talented interior designers in ${state.name}. Browse portfolios and connect with local designers.`);
        
        // Set canonical
        let canonicalLink = document.querySelector('link[rel="canonical"]');
        if (!canonicalLink) {
          canonicalLink = document.createElement('link');
          canonicalLink.setAttribute('rel', 'canonical');
          document.head.appendChild(canonicalLink);
        }
        canonicalLink.setAttribute('href', `https://thedesignrefuge.com/designers/${state.slug}`);
        
        // Add preloaded state data to avoid client-side fetching
        const stateDataScript = document.createElement('script');
        stateDataScript.id = 'preloaded-state-data';
        stateDataScript.type = 'application/json';
        stateDataScript.textContent = JSON.stringify({
          currentState: state,
          listings: stateData
        });
        document.head.appendChild(stateDataScript);
        
        // Add hydration script
        const hydrationScript = document.createElement('script');
        hydrationScript.type = 'text/javascript';
        hydrationScript.textContent = `
          window.__PRELOADED_STATE__ = {
            currentState: ${JSON.stringify(state)},
            currentStateData: ${JSON.stringify(stateData)}
          };
        `;
        document.head.appendChild(hydrationScript);
        
        // Create a basic content container - this will be hydrated by React
        const rootDiv = document.getElementById('root');
        if (!rootDiv) {
          const newRoot = document.createElement('div');
          newRoot.id = 'root';
          document.body.appendChild(newRoot);
        }
        
        // Add a simple content placeholder that shows something to users and search engines
        // even before JavaScript loads
        const noScriptContent = document.createElement('noscript');
        noScriptContent.innerHTML = `
          <div style="max-width: 1200px; margin: 0 auto; padding: 20px;">
            <h1>Interior Designers in ${state.name}</h1>
            <p>Browse our directory of ${stateData.length} interior designers in ${state.name}.</p>
            <div>
              ${stateData.map(listing => `
                <div style="margin-bottom: 20px; border: 1px solid #eee; padding: 15px;">
                  <h2>${listing.businessInfo?.name || listing.name || 'Designer'}</h2>
                  <p>${listing.businessLocation
                      ? `${listing.businessLocation.city}, ${listing.businessLocation.state}`
                      : listing.location || 'Location not specified'}</p>
                </div>
              `).join('')}
            </div>
          </div>
        `;
        rootDiv.appendChild(noScriptContent);
        
        // Add structured data
        const structuredData = {
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          "name": `Interior Designers in ${state.name}`,
          "description": `Find top-rated interior designers in ${state.name}. Browse portfolios and connect with local design professionals.`,
          "url": `https://thedesignrefuge.com/designers/${state.slug}`,
          "mainEntity": {
            "@type": "ItemList",
            "itemListElement": stateData.map((listing, index) => ({
              "@type": "ListItem",
              "position": index + 1,
              "item": {
                "@type": "LocalBusiness",
                "name": listing.businessInfo?.name || listing.name || 'Interior Designer',
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": listing.businessLocation?.city || '',
                  "addressRegion": listing.businessLocation?.state || state.name
                }
              }
            }))
          }
        };
        
        const schemaScript = document.createElement('script');
        schemaScript.type = 'application/ld+json';
        schemaScript.textContent = JSON.stringify(structuredData);
        document.head.appendChild(schemaScript);
        
        // Write the files
        const outputFilePath = path.join(designersDir, `${state.slug}.html`);
        fs.writeFileSync(outputFilePath, dom.serialize());
        fs.writeFileSync(path.join(stateDir, 'index.html'), dom.serialize());
        
        console.log(`✅ Generated ${state.name} page at ${outputFilePath}`);
      } catch (error) {
        console.error(`Error generating page for ${state.name}:`, error);
      }
    }
    
    // 3. Generate index page
    try {
      console.log('Generating index page...');
      
      const dom = new JSDOM(template);
      const { document } = dom.window;
      
      document.title = 'Interior Designers Directory | The Design Refuge';
      
      let metaDesc = document.querySelector('meta[name="description"]');
      if (!metaDesc) {
        metaDesc = document.createElement('meta');
        metaDesc.setAttribute('name', 'description');
        document.head.appendChild(metaDesc);
      }
      metaDesc.setAttribute('content', 'Find interior designers across the United States. Browse by state to discover local design professionals.');
      
      let canonicalLink = document.querySelector('link[rel="canonical"]');
      if (!canonicalLink) {
        canonicalLink = document.createElement('link');
        canonicalLink.setAttribute('rel', 'canonical');
        document.head.appendChild(canonicalLink);
      }
      canonicalLink.setAttribute('href', 'https://thedesignrefuge.com/designers');
      
      // Filter states with designers
      const statesWithDesigners = statesIndex.filter(state => state.count > 0);
      
      // Add preloaded state data
      const stateDataScript = document.createElement('script');
      stateDataScript.id = 'preloaded-states-index';
      stateDataScript.type = 'application/json';
      stateDataScript.textContent = JSON.stringify({
        states: statesWithDesigners
      });
      document.head.appendChild(stateDataScript);
      
      // Add hydration script
      const hydrationScript = document.createElement('script');
      hydrationScript.type = 'text/javascript';
      hydrationScript.textContent = `
        window.__PRELOADED_STATES_INDEX__ = ${JSON.stringify(statesWithDesigners)};
      `;
      document.head.appendChild(hydrationScript);
      
      // Create root element if it doesn't exist
      const rootDiv = document.getElementById('root');
      if (!rootDiv) {
        const newRoot = document.createElement('div');
        newRoot.id = 'root';
        document.body.appendChild(newRoot);
      }
      
      // Add noscript content
      const noScriptContent = document.createElement('noscript');
      noScriptContent.innerHTML = `
        <div style="max-width: 1200px; margin: 0 auto; padding: 20px;">
          <h1>Interior Designers Directory</h1>
          <p>Browse our directory of interior designers by state</p>
          <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 20px;">
            ${statesWithDesigners.map(state => `
              <a href="/designers/${state.slug}" style="text-decoration: none; color: inherit;">
                <div style="border: 1px solid #eee; padding: 15px; border-radius: 8px;">
                  <h2 style="margin-top: 0;">${state.name}</h2>
                  <p>${state.count} designer${state.count !== 1 ? 's' : ''}</p>
                </div>
              </a>
            `).join('')}
          </div>
        </div>
      `;
      rootDiv.appendChild(noScriptContent);
      
      // Add structured data
      const structuredData = {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        "name": "Interior Designers Directory",
        "description": "Find interior designers across the United States. Browse by state to discover local design professionals.",
        "url": "https://thedesignrefuge.com/designers",
        "mainEntity": {
          "@type": "ItemList",
          "itemListElement": statesWithDesigners.map((state, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "item": {
              "@type": "WebPage",
              "name": `Interior Designers in ${state.name}`,
              "url": `https://thedesignrefuge.com/designers/${state.slug}`
            }
          }))
        }
      };
      
      const schemaScript = document.createElement('script');
      schemaScript.type = 'application/ld+json';
      schemaScript.textContent = JSON.stringify(structuredData);
      document.head.appendChild(schemaScript);
      
      // Write the files
      const outputFilePath = path.join(designersDir, 'index.html');
      fs.writeFileSync(outputFilePath, dom.serialize());
      
      console.log(`✅ Generated index page at ${outputFilePath}`);
    } catch (error) {
      console.error('Error generating index page:', error);
    }
    
    // 4. Generate sitemap
    try {
      console.log('Generating sitemap...');
      
      const sitemapPath = path.join(outputDir, 'sitemap.xml');
      const baseUrl = 'https://thedesignrefuge.com';
      
      const statesWithDesigners = statesIndex.filter(state => state.count > 0);
      
      const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${baseUrl}</loc>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>${baseUrl}/designers</loc>
    <changefreq>daily</changefreq>
    <priority>0.9</priority>
  </url>
  ${statesWithDesigners.map(state => `
  <url>
    <loc>${baseUrl}/designers/${state.slug}</loc>
    <changefreq>daily</changefreq>
    <priority>0.8</priority>
  </url>
  `).join('')}
</urlset>`;
      
      fs.writeFileSync(sitemapPath, sitemap);
      console.log(`✅ Generated sitemap at ${sitemapPath}`);
    } catch (error) {
      console.error('Error generating sitemap:', error);
    }
    
    console.log('✅ Static site generation complete!');
  } catch (error) {
    console.error('❌ Static site generation failed:', error);
    process.exit(1);
  }
}

generateStaticSite();