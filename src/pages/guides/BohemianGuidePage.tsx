import React from 'react';
import { Navbar } from '../../components/Navbar';
import { SEOHead } from '../../components/SEOHead';
import { BackToResourcesButton } from '../../components/BackToResourcesButton';
import { Link } from 'react-router-dom';
import { ExternalLink } from 'lucide-react';

export const BohemianGuidePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <SEOHead
        title="Bohemian (Boho) Chic Design Guide | The Design Refuge"
        description="Master the art of Bohemian interior design with our comprehensive guide covering key elements, color palettes, furniture selection, and styling tips."
      />
      
      <Navbar />
      
      <main className="max-w-4xl mx-auto px-4 py-12">
        <BackToResourcesButton />
        
        <article className="bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="aspect-video relative">
            <img
              src="https://images.unsplash.com/photo-1522444195799-478538b28823?auto=format&fit=crop&q=80"
              alt="Bohemian style living room"
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="p-8">
            <h1 className="text-3xl md:text-4xl font-serif mb-6">Embracing Bohemian (Boho) Chic</h1>
            
            <p className="text-gray-800 mb-8 text-lg leading-relaxed">
              Bohemian, or "boho-chic," is the epitome of free-spirited design. It's a style rooted in creativity, 
              self-expression, and an eclectic mix of cultures and eras. For clients seeking a relaxed, lived-in 
              feel with plenty of personality, Boho is the way to go.
            </p>

            <section className="mb-12">
              <h2 className="text-2xl font-serif mb-4">Key Elements</h2>
              <ul className="space-y-3 text-gray-800">
                <li className="flex items-start">
                  <span className="text-sage-600 mr-2">•</span>
                  <span><strong>Layered Textures and Patterns:</strong> Think tassels, fringe, and a variety of textiles layered for depth.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-sage-600 mr-2">•</span>
                  <span><strong>Rich, Vibrant Colors:</strong> Jewel tones paired with earthy hues create a cozy yet vibrant atmosphere.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-sage-600 mr-2">•</span>
                  <span><strong>Vintage and Handcrafted Pieces:</strong> This style thrives on one-of-a-kind finds, from flea market treasures to handmade decor.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-sage-600 mr-2">•</span>
                  <span><strong>Plants and Natural Elements:</strong> Greenery is essential—macramé plant hangers, potted palms, or trailing pothos.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-sage-600 mr-2">•</span>
                  <span><strong>Eclectic Furniture and Decor:</strong> No matching sets here. Mismatched pieces add to the charm.</span>
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-serif mb-4">Color Palette</h2>
              <div className="space-y-4 text-gray-800">
                <div>
                  <h3 className="font-semibold mb-2">Base Colors</h3>
                  <p>Warm neutrals like cream, beige, and off-white provide a grounding backdrop.</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Accent Colors</h3>
                  <p>Jewel tones (emerald, ruby, sapphire) and earthy hues (terracotta, mustard yellow) inject energy.</p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-serif mb-4">Furniture and Decor</h2>
              <div className="grid md:grid-cols-2 gap-6 text-gray-800">
                <div>
                  <h3 className="font-semibold mb-2">Furniture Pieces</h3>
                  <ul className="space-y-2">
                    <li>• Low-lying furniture and floor cushions</li>
                    <li>• Rattan chairs and wicker furniture</li>
                    <li>• Vintage wooden pieces</li>
                    <li>• Daybeds and poufs</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Decorative Elements</h3>
                  <ul className="space-y-2">
                    <li>• Vintage rugs and tapestries</li>
                    <li>• Handwoven throws and pillows</li>
                    <li>• Macramé wall hangings</li>
                    <li>• Global-inspired accessories</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-serif mb-4">Styling Tips</h2>
              <ul className="space-y-3 text-gray-800">
                <li className="flex items-start">
                  <span className="text-sage-600 mr-2">•</span>
                  Layer textiles like a pro—mix prints, patterns, and textures to create visual interest.
                </li>
                <li className="flex items-start">
                  <span className="text-sage-600 mr-2">•</span>
                  Incorporate global influences, such as Moroccan poufs or Indian block-printed cushions.
                </li>
                <li className="flex items-start">
                  <span className="text-sage-600 mr-2">•</span>
                  Display personal collections—vintage pottery, travel souvenirs, or curated bookshelves.
                </li>
                <li className="flex items-start">
                  <span className="text-sage-600 mr-2">•</span>
                  Add plants of varying sizes for a lush, organic vibe (e.g., monstera, fiddle-leaf figs).
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-serif mb-4">Visual Inspiration</h2>
              <div className="space-y-3">
                <Link 
                  to="https://www.apartmenttherapy.com/boho-living-room-ideas-36657922"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-sage-600 hover:text-sage-700"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Boho Living Room Ideas by Apartment Therapy
                </Link>
                <Link 
                  to="https://www.anthropologie.com/rugs-curtains"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-sage-600 hover:text-sage-700"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Global-Inspired Rugs on Anthropologie
                </Link>
              </div>
            </section>
          </div>
        </article>
      </main>
    </div>
  );
};