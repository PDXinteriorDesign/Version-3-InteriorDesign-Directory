import React from 'react';
import { Navbar } from '../components/Navbar';
import { SEOHead } from '../components/SEOHead';
import { Footer } from '../components/Footer';
import { Palette, Layout, Lightbulb, Sun, Link as LinkIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

export const DesignTipsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <SEOHead
        title="Interior Design Tips & Advice | The Design Refuge"
        description="Unlock your inner designer! Our expert tips and advice cover everything from choosing color palettes and selecting furniture to maximizing space and creating a home you'll love. Find inspiration and practical guidance for all your interior design needs."
      />
      
      <Navbar />
      
      {/* Hero Section with Background Image */}
      <div className="relative bg-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80"
            alt="Beautiful modern living room with design elements"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gray-900/40 backdrop-blur-[2px]" />
        </div>
        
        <div className="relative max-w-4xl mx-auto px-4 py-24 sm:py-32 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-serif mb-6">Interior Design Tips & Advice</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Transforming your home doesn't have to be a daunting task. With a little inspiration and know-how, 
            you can create beautiful and functional spaces that reflect your unique style. This page is your guide 
            to unlocking your inner designer, offering valuable tips and advice on everything from color palettes 
            and furniture selection to maximizing space and creating a home you'll love.
          </p>
        </div>
      </div>
      
      <main className="max-w-4xl mx-auto px-4 py-12">
        {/* Color & Palette Tips */}
        <section className="bg-white rounded-xl overflow-hidden mb-8 shadow-sm">
          <div className="text-center bg-sage-50/50 p-8 border-b border-sage-100">
            <h2 className="text-3xl font-serif">Color & Palette Tips</h2>
            <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
              Master the art of color selection and create harmonious spaces that reflect your style
            </p>
          </div>
          
          <div className="p-8 space-y-8">
            <div>
              <h3 className="text-2xl font-serif mb-4">How to Choose a Color Palette That Works</h3>
              <div className="prose max-w-none text-gray-600">
                <p className="mb-4">
                  Colors have the power to transform spaces and influence moods. Understanding color psychology 
                  is key to creating the perfect atmosphere in your home:
                </p>
                <ul className="space-y-2 mb-6">
                  <li><strong>Blues:</strong> Calm and serene, perfect for bedrooms and bathrooms</li>
                  <li><strong>Greens:</strong> Fresh and natural, ideal for spaces where you want to feel connected to nature</li>
                  <li><strong>Yellows:</strong> Energetic and welcoming, great for kitchens and dining areas</li>
                  <li><strong>Neutrals:</strong> Versatile and timeless, providing a perfect backdrop for any style</li>
                </ul>
                <div className="bg-sage-50 p-6 rounded-lg mb-6">
                  <h4 className="font-semibold mb-2">Pro Tip: Using the Color Wheel</h4>
                  <p>
                    Choose colors that are either complementary (opposite on the wheel) for bold contrast, 
                    or analogous (next to each other) for a harmonious feel.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-serif mb-4">The 60-30-10 Rule: A Simple Guide to Color Balance</h3>
              <div className="prose max-w-none text-gray-600">
                <p className="mb-4">
                  This classic decorating rule helps create well-balanced spaces:
                </p>
                <ul className="mb-6">
                  <li><strong>60%</strong> - Dominant color (walls, large furniture)</li>
                  <li><strong>30%</strong> - Secondary color (accent furniture, textiles)</li>
                  <li><strong>10%</strong> - Accent color (accessories, artwork)</li>
                </ul>
                <div className="grid md:grid-cols-3 gap-4 mb-6">
                  <div className="bg-gray-100 p-4 rounded-lg text-center">
                    <div className="w-full h-24 bg-sage-200 rounded-lg mb-2"></div>
                    <span className="text-sm">60% Main Color</span>
                  </div>
                  <div className="bg-gray-100 p-4 rounded-lg text-center">
                    <div className="w-full h-24 bg-coral-200 rounded-lg mb-2"></div>
                    <span className="text-sm">30% Secondary</span>
                  </div>
                  <div className="bg-gray-100 p-4 rounded-lg text-center">
                    <div className="w-full h-24 bg-azure-200 rounded-lg mb-2"></div>
                    <span className="text-sm">10% Accent</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Furniture & Decor Tips */}
        <section className="bg-white rounded-xl overflow-hidden mb-8 shadow-sm">
          <div className="text-center bg-sage-50/50 p-8 border-b border-sage-100">
            <h2 className="text-3xl font-serif">Furniture & Decor Tips</h2>
            <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
              Learn how to arrange furniture and select decor pieces that maximize your space
            </p>
          </div>
          
          <div className="p-8 space-y-8">
            <div>
              <h3 className="text-2xl font-serif mb-4">Maximizing Space with Furniture Placement</h3>
              <div className="prose max-w-none text-gray-600">
                <p className="mb-4">
                  Strategic furniture placement can make any room feel larger and more inviting:
                </p>
                <ul className="mb-6">
                  <li>Create conversation areas by positioning seating to face each other</li>
                  <li>Leave clear pathways for easy movement through the space</li>
                  <li>Consider the room's focal point (fireplace, window, TV) when arranging furniture</li>
                  <li>Use appropriately sized furniture for your space</li>
                </ul>
                <div className="bg-sage-50 p-6 rounded-lg mb-6">
                  <h4 className="font-semibold mb-2">The Rule of Thirds</h4>
                  <p>
                    Divide your room into a 3x3 grid and place key furniture pieces along these lines 
                    for a balanced, visually pleasing arrangement.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-serif mb-4">Finding Affordable Furniture & Decor</h3>
              <div className="prose max-w-none text-gray-600">
                <p className="mb-4">
                  Create a beautiful home without breaking the bank:
                </p>
                <ul className="mb-6">
                  <li>Mix high and low-end pieces for a curated look</li>
                  <li>Shop secondhand stores and online marketplaces</li>
                  <li>Refinish or reupholster existing furniture</li>
                  <li>DIY artwork and accessories</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Lighting & Window Treatments */}
        <section className="bg-white rounded-xl overflow-hidden mb-8 shadow-sm">
          <div className="text-center bg-sage-50/50 p-8 border-b border-sage-100">
            <h2 className="text-3xl font-serif">Lighting & Window Treatments</h2>
            <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
              Transform your space with proper lighting and window treatment solutions
            </p>
          </div>
          
          <div className="p-8 space-y-8">
            <div>
              <h3 className="text-2xl font-serif mb-4">The Importance of Natural and Artificial Lighting</h3>
              <div className="prose max-w-none text-gray-600">
                <p className="mb-4">
                  Proper lighting can transform the mood and functionality of any space:
                </p>
                <div className="grid md:grid-cols-3 gap-6 mb-6">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Ambient Lighting</h4>
                    <p className="text-sm">General illumination for everyday activities</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Task Lighting</h4>
                    <p className="text-sm">Focused light for specific activities</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Accent Lighting</h4>
                    <p className="text-sm">Highlights architectural features or artwork</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-serif mb-4">Selecting the Right Window Treatments</h3>
              <div className="prose max-w-none text-gray-600">
                <p className="mb-4">
                  Window treatments should balance aesthetics with functionality:
                </p>
                <ul className="mb-6">
                  <li>Consider privacy needs and natural light control</li>
                  <li>Choose materials that complement your decor style</li>
                  <li>Layer treatments for versatility (e.g., sheers with drapes)</li>
                  <li>Mount curtains high and wide to make windows appear larger</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Design Inspiration & Resources */}
        <section className="bg-white rounded-xl overflow-hidden mb-8 shadow-sm">
          <div className="text-center bg-sage-50/50 p-8 border-b border-sage-100">
            <h2 className="text-3xl font-serif">Design Inspiration & Resources</h2>
            <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
              Find inspiration and professional resources to bring your vision to life
            </p>
          </div>
          
          <div className="p-8 space-y-8">
            <div>
              <h3 className="text-2xl font-serif mb-4">Find Inspiration Everywhere</h3>
              <div className="prose max-w-none text-gray-600">
                <p className="mb-4">
                  Design inspiration can come from unexpected places:
                </p>
                <ul className="mb-6">
                  <li>Nature's color palettes and textures</li>
                  <li>Art galleries and museums</li>
                  <li>Travel experiences and local architecture</li>
                  <li>Fashion and textile design</li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-serif mb-4">Consult with a Professional</h3>
              <div className="prose max-w-none text-gray-600">
                <p className="mb-6">
                  Sometimes, the best way to achieve your design goals is to work with a professional. 
                  Interior designers can:
                </p>
                <ul className="mb-6">
                  <li>Provide expert guidance and fresh perspectives</li>
                  <li>Access trade-only resources and materials</li>
                  <li>Save you time and prevent costly mistakes</li>
                  <li>Create cohesive, professional results</li>
                </ul>
                <div className="bg-sage-50 p-6 rounded-lg text-center">
                  <h4 className="font-semibold mb-4">Ready to Work with a Professional?</h4>
                  <Link
                    to="/designers"
                    className="inline-flex items-center px-6 py-3 bg-sage-600 text-white rounded-lg hover:bg-sage-700 transition-colors"
                  >
                    Browse Our Designer Directory
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};