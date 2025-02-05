import React, { useState } from 'react';
import { Navbar } from '../components/Navbar';
import { SEOHead } from '../components/SEOHead';
import { Footer } from '../components/Footer';
import { Mail, Share2, Facebook, Twitter, Instagram, Sparkles, PaintBucket, Hammer, ShoppingBag, Lightbulb } from 'lucide-react';

export const BudgetDesignPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement email subscription logic
    setSubscribed(true);
    setEmail('');
  };

  const shareUrl = encodeURIComponent(window.location.href);
  const shareText = encodeURIComponent('Create stunning spaces on a budget with The Design Refuge!');

  return (
    <div className="min-h-screen bg-sage-50">
      <SEOHead
        title="Budget Interior Design Tips & Ideas | The Design Refuge"
        description="Transform your home without breaking the bank. Discover affordable interior design tips, DIY projects, and budget-friendly decorating hacks for creating beautiful spaces."
      />
      
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <div className="relative h-[60vh] min-h-[400px] flex items-center justify-center">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80"
              alt="Beautiful and affordable living room with natural light, featuring thrifted furniture and DIY decor"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40" />
          </div>
          
          <div className="relative text-center text-white px-4 max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-serif mb-6">
              Unleash Your Inner Designer: Create Stunning Spaces on a Budget
            </h1>
            <p className="text-xl md:text-2xl text-white/90">
              Transform your home without breaking the bank
            </p>
          </div>
        </div>

        {/* Introduction */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-serif mb-6">Welcome Design Enthusiasts!</h2>
            <p className="text-xl text-gray-700 leading-relaxed">
              We understand creating a beautiful and functional living space can be expensive. 
              But fear not! Here at The Design Refuge, we empower you to transform your home 
              without breaking the bank. Our upcoming guide will show you how to achieve 
              magazine-worthy interiors while staying within your budget.
            </p>
          </div>
        </section>

        {/* Sneak Peek Tips */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-serif mb-8 text-center">
              Sneak Peek: Decorating on a Budget Tips
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-sage-50 p-6 rounded-xl">
                <PaintBucket className="w-8 h-8 text-sage-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3">Repurpose & Refresh</h3>
                <p className="text-gray-700">
                  Learn the art of transforming existing furniture and decor through painting, 
                  reupholstering, and creative updates.
                </p>
              </div>
              
              <div className="bg-sage-50 p-6 rounded-xl">
                <Hammer className="w-8 h-8 text-sage-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3">DIY Projects</h3>
                <p className="text-gray-700">
                  Discover step-by-step guides for creating custom decor pieces that look 
                  expensive but cost a fraction of retail prices.
                </p>
              </div>
              
              <div className="bg-sage-50 p-6 rounded-xl">
                <ShoppingBag className="w-8 h-8 text-sage-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3">Thrifting Secrets</h3>
                <p className="text-gray-700">
                  Master the art of finding hidden gems at thrift stores, flea markets, 
                  and online marketplaces.
                </p>
              </div>
              
              <div className="bg-sage-50 p-6 rounded-xl">
                <Lightbulb className="w-8 h-8 text-sage-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3">Smart Storage</h3>
                <p className="text-gray-700">
                  Maximize your space with clever storage solutions that are both 
                  functional and aesthetically pleasing.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Subscribe Section */}
        <section className="py-16 px-4 bg-gradient-to-br from-sage-100 to-azure-50">
          <div className="max-w-2xl mx-auto text-center">
            <Sparkles className="w-12 h-12 text-sage-600 mx-auto mb-6" />
            <h2 className="text-3xl font-serif mb-6">Don't Miss Out on the Design Revolution!</h2>
            <p className="text-xl text-gray-700 mb-8">
              Sign up to receive updates on the launch of our comprehensive guide to 
              affordable interior design.
            </p>
            
            {subscribed ? (
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <p className="text-sage-600 font-semibold">
                  Thank you for subscribing! We'll keep you updated on our launch.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col md:flex-row gap-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  required
                  className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-sage-500 focus:border-transparent"
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-sage-600 text-white rounded-lg hover:bg-sage-700 transition-colors flex items-center justify-center"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Subscribe
                </button>
              </form>
            )}
          </div>
        </section>

        {/* Share Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-serif mb-6">Share the Love</h2>
            <p className="text-xl text-gray-700 mb-8">
              Know someone who would love budget-friendly design tips? Share this page!
            </p>
            <div className="flex justify-center gap-4">
              <a
                href={`https://facebook.com/sharer/sharer.php?u=${shareUrl}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white rounded-full shadow-sm hover:shadow-md transition-shadow"
              >
                <Facebook className="w-6 h-6 text-[#1877F2]" />
              </a>
              <a
                href={`https://twitter.com/intent/tweet?url=${shareUrl}&text=${shareText}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white rounded-full shadow-sm hover:shadow-md transition-shadow"
              >
                <Twitter className="w-6 h-6 text-[#1DA1F2]" />
              </a>
              <a
                href={`https://www.instagram.com/`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white rounded-full shadow-sm hover:shadow-md transition-shadow"
              >
                <Instagram className="w-6 h-6 text-[#E4405F]" />
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};