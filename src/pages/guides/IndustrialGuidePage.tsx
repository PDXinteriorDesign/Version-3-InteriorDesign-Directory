import React from 'react';
import { Navbar } from '../../components/Navbar';
import { SEOHead } from '../../components/SEOHead';
import { BackToResourcesButton } from '../../components/BackToResourcesButton';
import { Link } from 'react-router-dom';
import { ExternalLink } from 'lucide-react';

export const IndustrialGuidePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <SEOHead
        title="Industrial Design Style Guide | The Design Refuge"
        description="Master industrial interior design with our comprehensive guide covering exposed elements, metal accents, and raw materials for creating authentic urban spaces."
      />
      
      <Navbar />
      
      <main className="max-w-4xl mx-auto px-4 py-12">
        <BackToResourcesButton />
        
        <article className="bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="aspect-video relative">
            <img
              src="https://images.unsplash.com/photo-1515542706656-8e6ef17a1521?auto=format&fit=crop&q=80"
              alt="Industrial style loft space"
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="p-8">
            <h1 className="text-3xl md:text-4xl font-serif mb-6">Crafting an Industrial Aesthetic</h1>
            
            <p className="text-gray-800 mb-8 text-lg leading-relaxed">
              The industrial aesthetic draws from the raw charm of old factories and warehouses, 
              creating spaces that are both edgy and functional. It's perfect for clients who 
              value urban grit with a polished touch.
            </p>

            <section className="mb-12">
              <h2 className="text-2xl font-serif mb-4">Key Elements</h2>
              <ul className="space-y-3 text-gray-800">
                <li className="flex items-start">
                  <span className="text-sage-600 mr-2">•</span>
                  <span><strong>Exposed Architectural Features:</strong> Exposed brick, pipes, and beams bring authenticity.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-sage-600 mr-2">•</span>
                  <span><strong>Metal Accents:</strong> Industrial design thrives on steel, iron, and aged metals.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-sage-600 mr-2">•</span>
                  <span><strong>Weathered Wood:</strong> Warm, reclaimed wood softens the look.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-sage-600 mr-2">•</span>
                  <span><strong>Open Layouts:</strong> Minimal partitions and airy spaces create a sense of flow.</span>
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-serif mb-4">Color Palette</h2>
              <div className="space-y-4 text-gray-800">
                <div>
                  <h3 className="font-semibold mb-2">Base Colors</h3>
                  <p>Neutral tones like gray, black, and white set the mood.</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Accent Colors</h3>
                  <p>Rust, copper, and bronze tones add warmth.</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Pops of Color</h3>
                  <p>Use bold colors sparingly to create focal points.</p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-serif mb-4">Furniture and Decor</h2>
              <div className="grid md:grid-cols-2 gap-6 text-gray-800">
                <div>
                  <h3 className="font-semibold mb-2">Furniture Pieces</h3>
                  <ul className="space-y-2">
                    <li>• Reclaimed wood dining tables</li>
                    <li>• Metal-frame seating</li>
                    <li>• Industrial storage solutions</li>
                    <li>• Raw wood shelving units</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Lighting & Decor</h3>
                  <ul className="space-y-2">
                    <li>• Factory-inspired pendant lights</li>
                    <li>• Edison bulb fixtures</li>
                    <li>• Vintage signs and artwork</li>
                    <li>• Black & white photography</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-serif mb-4">Styling Tips</h2>
              <ul className="space-y-3 text-gray-800">
                <li className="flex items-start">
                  <span className="text-sage-600 mr-2">•</span>
                  Highlight raw materials like concrete floors, steel fixtures, or weathered brick walls.
                </li>
                <li className="flex items-start">
                  <span className="text-sage-600 mr-2">•</span>
                  Balance hard surfaces with soft textiles—sheepskin throws, wool blankets, or a tufted rug.
                </li>
                <li className="flex items-start">
                  <span className="text-sage-600 mr-2">•</span>
                  Choose oversized statement lighting, such as a chandelier made of salvaged materials.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-serif mb-4">Visual Inspiration</h2>
              <div className="space-y-3">
                <Link 
                  to="https://www.houzz.com/photos/query/industrial-style"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-sage-600 hover:text-sage-700"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Industrial Spaces by Houzz
                </Link>
                <Link 
                  to="https://www.westelm.com/shop/lighting"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-sage-600 hover:text-sage-700"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Lighting Fixtures from West Elm
                </Link>
              </div>
            </section>
          </div>
        </article>
      </main>
    </div>
  );
};