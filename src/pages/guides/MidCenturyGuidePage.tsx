import React from 'react';
import { Navbar } from '../../components/Navbar';
import { SEOHead } from '../../components/SEOHead';
import { BackToResourcesButton } from '../../components/BackToResourcesButton';
import { Link } from 'react-router-dom';
import { ExternalLink } from 'lucide-react';

export const MidCenturyGuidePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <SEOHead
        title="Mid-Century Modern Design Guide | The Design Refuge"
        description="Master Mid-Century Modern interior design with our comprehensive guide covering iconic pieces, clean lines, and organic forms for timeless spaces."
      />
      
      <Navbar />
      
      <main className="max-w-4xl mx-auto px-4 py-12">
        <BackToResourcesButton />
        
        <article className="bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="aspect-video relative">
            <img
              src="https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?auto=format&fit=crop&q=80"
              alt="Mid-Century Modern living room"
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="p-8">
            <h1 className="text-3xl md:text-4xl font-serif mb-6">Mastering Mid-Century Modern Design</h1>
            
            <p className="text-gray-800 mb-8 text-lg leading-relaxed">
              Mid-Century Modern (MCM) is all about clean lines, organic forms, and a seamless 
              connection between indoor and outdoor living. This timeless style appeals to clients 
              who value elegance, simplicity, and functionality.
            </p>

            <section className="mb-12">
              <h2 className="text-2xl font-serif mb-4">Key Elements</h2>
              <ul className="space-y-3 text-gray-800">
                <li className="flex items-start">
                  <span className="text-sage-600 mr-2">•</span>
                  <span><strong>Minimalist Silhouettes:</strong> Furniture with tapered legs and sleek profiles.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-sage-600 mr-2">•</span>
                  <span><strong>Organic and Geometric Shapes:</strong> From kidney-shaped coffee tables to angular lamps.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-sage-600 mr-2">•</span>
                  <span><strong>Mixed Materials:</strong> The interplay of wood, metal, and molded plastic defines the era.</span>
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-serif mb-4">Color Palette</h2>
              <div className="space-y-4 text-gray-800">
                <div>
                  <h3 className="font-semibold mb-2">Base Colors</h3>
                  <p>Warm neutrals like tan and beige create a timeless foundation.</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Accent Colors</h3>
                  <p>Bold, saturated hues—mustard yellow, teal, or burnt orange add personality.</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Wood Tones</h3>
                  <p>Rich walnut or teak finishes bring warmth and authenticity.</p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-serif mb-4">Furniture and Decor</h2>
              <div className="grid md:grid-cols-2 gap-6 text-gray-800">
                <div>
                  <h3 className="font-semibold mb-2">Iconic Pieces</h3>
                  <ul className="space-y-2">
                    <li>• Eames Lounge Chair</li>
                    <li>• Egg Chair</li>
                    <li>• Nelson Bench</li>
                    <li>• Low-profile sofas</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Decorative Elements</h3>
                  <ul className="space-y-2">
                    <li>• Atomic-inspired clocks</li>
                    <li>• Sunburst mirrors</li>
                    <li>• Geometric art</li>
                    <li>• Abstract sculptures</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-serif mb-4">Styling Tips</h2>
              <ul className="space-y-3 text-gray-800">
                <li className="flex items-start">
                  <span className="text-sage-600 mr-2">•</span>
                  Invest in a few iconic MCM pieces to anchor the space.
                </li>
                <li className="flex items-start">
                  <span className="text-sage-600 mr-2">•</span>
                  Keep the decor minimal—every item should serve a purpose or make a statement.
                </li>
                <li className="flex items-start">
                  <span className="text-sage-600 mr-2">•</span>
                  Use bold accent colors strategically through pillows, art, or rugs.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-serif mb-4">Visual Inspiration</h2>
              <div className="space-y-3">
                <Link 
                  to="https://www.dwell.com/guide/style/mid-century-modern-design-guide-e5168f5f"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-sage-600 hover:text-sage-700"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Mid-Century Design Guide by Dwell
                </Link>
                <Link 
                  to="https://www.dwr.com/category/furniture.do"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-sage-600 hover:text-sage-700"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Furniture Finds at Design Within Reach
                </Link>
              </div>
            </section>
          </div>
        </article>
      </main>
    </div>
  );
};