import React from 'react';
import { Navbar } from '../components/Navbar';
import { SEOHead } from '../components/SEOHead';
import { Footer } from '../components/Footer';
import { Palette, Hammer, Lightbulb, Youtube, ExternalLink } from 'lucide-react';

export const DIYProjectsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <SEOHead
        title="Easy DIY Home Decor Projects: Transform Your Space on a Budget"
        description="Unleash your inner designer with these simple and budget-friendly DIY projects! Discover easy-to-follow tutorials and inspiring ideas to transform your home without breaking the bank. Let's get creative!"
      />
      
      <Navbar />
      
      {/* Hero Section with Background Image */}
      <div className="relative bg-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1617104551722-3b2d51366400?auto=format&fit=crop&q=80"
            alt="DIY home decor workspace with crafting supplies"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gray-900/40 backdrop-blur-[2px]" />
        </div>
        
        <div className="relative max-w-4xl mx-auto px-4 py-24 sm:py-32 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-serif mb-6">Easy DIY Home Decor Projects</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Tired of staring at the same old walls? Ready to give your home a fresh, new look? 
            You don't need to be a professional decorator to create a space you love! These five 
            easy and budget-friendly DIY projects are perfect for beginners and will help you 
            transform your home with a little creativity and elbow grease. Let's get started!
          </p>
        </div>
      </div>
      
      <main className="max-w-4xl mx-auto px-4 py-12">
        {/* Project 1: Painted Terracotta Pots */}
        <div className="bg-white rounded-xl overflow-hidden mb-8 shadow-sm">
          <div className="aspect-video relative">
            <img
              src="https://images.unsplash.com/photo-1604762524889-3e2fcc145683?auto=format&fit=crop&q=80"
              alt="Beautifully painted terracotta pots with various patterns and colors"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-8">
            <h2 className="text-3xl font-serif mb-4">1. Painted Terracotta Pots</h2>
            <p className="text-gray-600 mb-6">
              Give your plants a personality transplant with some colorful paint! It's amazing how much 
              a coat of paint can brighten up a plain terracotta pot. Try geometric patterns, watercolor 
              designs, or even a simple pop of color. This is a super easy project, perfect for a weekend afternoon.
            </p>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-sage-50 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Estimated Cost</h3>
                <p className="text-gray-600">$5-$15 (depending on paint and supplies)</p>
              </div>
              <div className="bg-sage-50 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Difficulty Level</h3>
                <p className="text-gray-600">Beginner-Friendly</p>
              </div>
            </div>
            <a
              href="https://www.youtube.com/results?search_query=diy+painted+terracotta+pots"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-sage-600 hover:text-sage-700"
            >
              <Youtube className="w-5 h-5 mr-2" />
              Find a Tutorial
            </a>
          </div>
        </div>

        {/* Project 2: Upcycled Mason Jar Lighthouses */}
        <div className="bg-white rounded-xl overflow-hidden mb-8 shadow-sm">
          <div className="aspect-video relative">
            <img
              src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&q=80"
              alt="Mason jars transformed into charming miniature lighthouses"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-8">
            <h2 className="text-3xl font-serif mb-4">2. Upcycled Mason Jar Lighthouses</h2>
            <p className="text-gray-600 mb-6">
              Who knew mason jars could be so charming? This little project turns ordinary jars into 
              adorable nautical-themed lighthouses. It's easier than you think! You'll need some paint, 
              rope, and a few other simple supplies. These little guys make perfect nightlights or just 
              cute decorations.
            </p>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-sage-50 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Estimated Cost</h3>
                <p className="text-gray-600">$3-$8 per lighthouse</p>
              </div>
              <div className="bg-sage-50 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Difficulty Level</h3>
                <p className="text-gray-600">Easy</p>
              </div>
            </div>
            <a
              href="https://www.youtube.com/results?search_query=diy+mason+jar+lighthouse"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-sage-600 hover:text-sage-700"
            >
              <Youtube className="w-5 h-5 mr-2" />
              Find a Tutorial
            </a>
          </div>
        </div>

        {/* Project 3: DIY Macrame Wall Hanging */}
        <div className="bg-white rounded-xl overflow-hidden mb-8 shadow-sm">
          <div className="aspect-video relative">
            <img
              src="https://images.unsplash.com/photo-1612456225451-bb8d10d0131d?auto=format&fit=crop&q=80"
              alt="Beautiful macrame wall hanging"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-8">
            <h2 className="text-3xl font-serif mb-4">3. DIY Macrame Wall Hanging</h2>
            <p className="text-gray-600 mb-6">
              Macrame wall hangings are all the rage right now, and for good reason! They add a touch 
              of boho chic to any room. This project is a great way to learn some basic macrame knots 
              while creating a beautiful piece for your home. Don't worry, it's easier than it looks!
            </p>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-sage-50 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Estimated Cost</h3>
                <p className="text-gray-600">$10-$25 (depending on size)</p>
              </div>
              <div className="bg-sage-50 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Difficulty Level</h3>
                <p className="text-gray-600">Intermediate</p>
              </div>
            </div>
            <a
              href="https://www.youtube.com/results?search_query=diy+macrame+wall+hanging+for+beginners"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-sage-600 hover:text-sage-700"
            >
              <Youtube className="w-5 h-5 mr-2" />
              Find a Tutorial
            </a>
          </div>
        </div>

        {/* Project 4: Fabric-Covered Photo Frames */}
        <div className="bg-white rounded-xl overflow-hidden mb-8 shadow-sm">
          <div className="aspect-video relative">
            <img
              src="https://images.unsplash.com/photo-1577083552431-6e5fd01aa342?auto=format&fit=crop&q=80"
              alt="Photo frames covered in vibrant fabrics"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-8">
            <h2 className="text-3xl font-serif mb-4">4. Fabric-Covered Photo Frames</h2>
            <p className="text-gray-600 mb-6">
              Give your favorite photos a fresh new look with this easy and budget-friendly project. 
              It's a simple way to use up leftover fabric and add a touch of personality to your home. 
              Plus, it's a great way to upcycle old photo frames.
            </p>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-sage-50 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Estimated Cost</h3>
                <p className="text-gray-600">$2-$10 per frame</p>
              </div>
              <div className="bg-sage-50 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Difficulty Level</h3>
                <p className="text-gray-600">Easy</p>
              </div>
            </div>
            <a
              href="https://www.youtube.com/results?search_query=diy+fabric+covered+photo+frames"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-sage-600 hover:text-sage-700"
            >
              <Youtube className="w-5 h-5 mr-2" />
              Find a Tutorial
            </a>
          </div>
        </div>

        {/* Project 5: DIY Painted Wooden Signs */}
        <div className="bg-white rounded-xl overflow-hidden mb-8 shadow-sm">
          <div className="aspect-video relative">
            <img
              src="https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&q=80"
              alt="Wooden sign with an inspiring quote"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-8">
            <h2 className="text-3xl font-serif mb-4">5. DIY Painted Wooden Signs</h2>
            <p className="text-gray-600 mb-6">
              Create personalized wall art that reflects your unique style. You can paint inspirational 
              quotes, funny sayings, or even just a decorative design. It's a fun and rewarding project 
              that's sure to add a touch of personality to your home.
            </p>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-sage-50 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Estimated Cost</h3>
                <p className="text-gray-600">$5-$20 per sign</p>
              </div>
              <div className="bg-sage-50 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Difficulty Level</h3>
                <p className="text-gray-600">Beginner to Intermediate</p>
              </div>
            </div>
            <a
              href="https://www.youtube.com/results?search_query=diy+wooden+sign+painting"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-sage-600 hover:text-sage-700"
            >
              <Youtube className="w-5 h-5 mr-2" />
              Find a Tutorial
            </a>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-br from-sage-50 to-azure-50 rounded-xl p-8 text-center">
          <h2 className="text-2xl font-serif mb-4">Ready to Start Creating?</h2>
          <p className="text-gray-600 mb-6">
            Remember, the key to successful DIY projects is patience and creativity. 
            Don't be afraid to make mistakes – they're part of the learning process!
          </p>
          <a
            href="/resources/tips"
            className="inline-flex items-center px-6 py-3 bg-sage-600 text-white rounded-lg hover:bg-sage-700 transition-colors"
          >
            <Lightbulb className="w-5 h-5 mr-2" />
            More Design Tips
          </a>
        </div>
      </main>

      <Footer />
    </div>
  );
};