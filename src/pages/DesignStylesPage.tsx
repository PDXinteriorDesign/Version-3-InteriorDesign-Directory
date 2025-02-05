import React from 'react';
import { Navbar } from '../components/Navbar';
import { SEOHead } from '../components/SEOHead';
import { Footer } from '../components/Footer';
import { Link } from 'react-router-dom';
import { Palette, ArrowRight, Compass, Heart } from 'lucide-react';

interface DesignStyle {
  name: string;
  slug: string;
  description: string;
  characteristics: string[];
  image: string;
  colors: string[];
  materials: string[];
}

const designStyles: DesignStyle[] = [
  {
    name: 'Modern',
    slug: 'modern',
    description: 'Clean lines, minimalist aesthetic, and an emphasis on functionality define modern design. This style embraces simplicity and intentional asymmetry.',
    characteristics: [
      'Open floor plans',
      'Minimal ornamentation',
      'Emphasis on horizontal and vertical lines',
      'Functional furniture'
    ],
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80',
    colors: ['Neutral tones', 'Black', 'White', 'Gray'],
    materials: ['Glass', 'Steel', 'Concrete', 'Natural wood']
  },
  {
    name: 'Scandinavian',
    slug: 'scandinavian',
    description: 'Scandinavian design emphasizes simplicity, functionality, and connection to nature, creating bright and airy spaces that promote well-being.',
    characteristics: [
      'Minimalist aesthetic',
      'Natural light maximization',
      'Functional furniture',
      'Cozy textiles'
    ],
    image: 'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&q=80',
    colors: ['White', 'Gray', 'Beige', 'Soft pastels'],
    materials: ['Light wood', 'Wool', 'Linen', 'Natural fibers']
  },
  {
    name: 'Bohemian',
    slug: 'bohemian',
    description: 'Bohemian style celebrates free expression, artistic elements, and global influences, creating spaces that are personal and full of life.',
    characteristics: [
      'Layered textures',
      'Mixed patterns',
      'Plant life',
      'Vintage elements'
    ],
    image: 'https://images.unsplash.com/photo-1522444195799-478538b28823?auto=format&fit=crop&q=80',
    colors: ['Jewel tones', 'Earth tones', 'Rich colors', 'Metallics'],
    materials: ['Natural fibers', 'Rattan', 'Vintage textiles', 'Plants']
  },
  {
    name: 'Mid-Century Modern',
    slug: 'mid-century-modern',
    description: 'Mid-Century Modern combines functionality with beautiful design, featuring organic shapes and timeless appeal.',
    characteristics: [
      'Clean lines',
      'Organic curves',
      'Minimal ornamentation',
      'Indoor-outdoor connection'
    ],
    image: 'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?auto=format&fit=crop&q=80',
    colors: ['Warm wood tones', 'Orange', 'Olive green', 'Navy'],
    materials: ['Teak', 'Walnut', 'Molded plastic', 'Metal']
  },
  {
    name: 'Industrial',
    slug: 'industrial',
    description: 'Industrial design celebrates raw materials and architectural elements, creating spaces with an urban edge and historical character.',
    characteristics: [
      'Exposed elements',
      'Raw materials',
      'Open spaces',
      'Utilitarian features'
    ],
    image: 'https://images.unsplash.com/photo-1515542706656-8e6ef17a1521?auto=format&fit=crop&q=80',
    colors: ['Gray', 'Black', 'Brown', 'Rust'],
    materials: ['Exposed brick', 'Metal', 'Concrete', 'Reclaimed wood']
  },
  {
    name: 'Coastal',
    slug: 'coastal',
    description: 'Coastal design brings the beach indoors with light colors, natural textures, and a relaxed atmosphere.',
    characteristics: [
      'Light and airy spaces',
      'Natural light',
      'Beach-inspired elements',
      'Comfortable furniture'
    ],
    image: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&q=80',
    colors: ['White', 'Blue', 'Sand', 'Sea glass'],
    materials: ['Weathered wood', 'Linen', 'Rope', 'Natural fibers']
  },
  {
    name: 'Traditional',
    slug: 'traditional',
    description: 'Traditional design incorporates classic elements, symmetry, and refined details for timeless elegance.',
    characteristics: [
      'Symmetrical layouts',
      'Classic patterns',
      'Rich textures',
      'Detailed millwork'
    ],
    image: 'https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&q=80',
    colors: ['Rich jewel tones', 'Deep wood', 'Gold', 'Cream'],
    materials: ['Mahogany', 'Silk', 'Crystal', 'Brass']
  }
];

export const DesignStylesPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-sage-50">
      <SEOHead
        title="Explore Popular Interior Design Styles | The Design Refuge"
        description="Discover a world of design inspiration! Learn about popular interior design styles like modern, Scandinavian, and Bohemian. Find the perfect style to express your personal aesthetic."
      />
      
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <div className="relative bg-white overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-r from-sage-50 to-terracotta-50 opacity-50" />
            <div className="absolute inset-0" style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80')`,
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              opacity: 0.1
            }} />
          </div>

          <div className="relative z-10 max-w-4xl mx-auto px-4 py-16 text-center">
            <Palette className="w-16 h-16 mx-auto mb-6 text-sage-600" />
            <h1 className="text-4xl md:text-5xl font-serif mb-4">
              Explore Popular Interior Design Styles
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover the world of interior design styles! From classic to contemporary, 
              learn about the unique characteristics, color palettes, and defining features 
              of popular design trends.
            </p>
          </div>
        </div>

        {/* Introduction */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-serif mb-6 text-center">Why Understanding Design Styles Matters</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Your home is a reflection of your personality and lifestyle. Understanding different 
              design styles helps you create spaces that not only look beautiful but also feel 
              authentically you. Whether you're drawn to the clean lines of modern design or the 
              eclectic charm of bohemian interiors, knowing the principles behind each style 
              empowers you to make confident design choices.
            </p>
          </div>
        </section>

        {/* Design Styles Grid */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-serif mb-12 text-center">Featured Styles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {designStyles.map((style) => (
                <div key={style.slug} className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                  <div className="aspect-[4/3] relative overflow-hidden">
                    <img
                      src={style.image}
                      alt={`${style.name} interior design style example`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-3">{style.name}</h3>
                    <p className="text-gray-600 mb-4">{style.description}</p>
                    <div className="mb-4">
                      <h4 className="font-medium mb-2">Key Characteristics:</h4>
                      <ul className="space-y-1">
                        {style.characteristics.map((char, index) => (
                          <li key={index} className="flex items-start text-gray-600">
                            <span className="text-sage-600 mr-2">•</span>
                            {char}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-medium mb-2">Colors:</h4>
                        <ul className="space-y-1">
                          {style.colors.map((color, index) => (
                            <li key={index} className="text-gray-600 text-sm">{color}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium mb-2">Materials:</h4>
                        <ul className="space-y-1">
                          {style.materials.map((material, index) => (
                            <li key={index} className="text-gray-600 text-sm">{material}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Finding Your Style */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-serif mb-8 text-center">Finding Your Style</h2>
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <Compass className="w-12 h-12 mx-auto mb-4 text-sage-600" />
                <h3 className="text-xl font-semibold mb-3">Explore & Discover</h3>
                <p className="text-gray-600">
                  Create mood boards, browse design magazines, and save inspiration photos 
                  to identify patterns in what you're drawn to.
                </p>
              </div>
              <div className="text-center">
                <Heart className="w-12 h-12 mx-auto mb-4 text-sage-600" />
                <h3 className="text-xl font-semibold mb-3">Trust Your Instincts</h3>
                <p className="text-gray-600">
                  Pay attention to spaces that make you feel comfortable and energized. 
                  Your emotional response is a powerful guide.
                </p>
              </div>
              <div className="text-center">
                <Palette className="w-12 h-12 mx-auto mb-4 text-sage-600" />
                <h3 className="text-xl font-semibold mb-3">Mix & Match</h3>
                <p className="text-gray-600">
                  Don't feel confined to one style. The best spaces often combine elements 
                  from different design approaches.
                </p>
              </div>
            </div>

            <div className="text-center">
              <Link
                to="/designers"
                className="inline-flex items-center px-6 py-3 bg-sage-600 text-white rounded-lg hover:bg-sage-700 transition-colors"
              >
                Find a Designer
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};