import React from 'react';
import { Navbar } from '../components/Navbar';
import { SEOHead } from '../components/SEOHead';
import { Footer } from '../components/Footer';
import { Users, Award, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

interface FeaturedProject {
  image: string;
  title: string;
  description: string;
}

interface FeaturedDesigner {
  name: string;
  bio: string;
  expertise: string[];
  projects: FeaturedProject[];
}

const featuredDesigners: FeaturedDesigner[] = [
  {
    name: "Sarah Anderson",
    bio: "With over 15 years of experience in modern and contemporary design, Sarah creates spaces that blend functionality with sophisticated aesthetics.",
    expertise: ["Modern", "Contemporary", "Minimalist"],
    projects: [
      {
        image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80",
        title: "Modern Loft Living Room",
        description: "A contemporary living space that maximizes natural light and open-concept living."
      },
      {
        image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&q=80",
        title: "Minimalist Kitchen Design",
        description: "Clean lines and efficient workspace define this modern kitchen renovation."
      },
      {
        image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80",
        title: "Urban Master Suite",
        description: "A serene master bedroom that combines comfort with contemporary style."
      }
    ]
  },
  {
    name: "Michael Chen",
    bio: "Specializing in sustainable and eco-friendly design, Michael creates spaces that are both beautiful and environmentally conscious.",
    expertise: ["Sustainable", "Eco-Friendly", "Scandinavian"],
    projects: [
      {
        image: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&q=80",
        title: "Eco-Friendly Living Room",
        description: "Sustainable materials and natural elements create a harmonious living space."
      },
      {
        image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&q=80",
        title: "Sustainable Kitchen",
        description: "Energy-efficient appliances and recycled materials showcase sustainable design."
      },
      {
        image: "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?auto=format&fit=crop&q=80",
        title: "Green Office Space",
        description: "A workspace that promotes productivity and environmental consciousness."
      }
    ]
  },
  {
    name: "Emma Rodriguez",
    bio: "Emma brings warmth and personality to every project, specializing in transitional and traditional design styles that stand the test of time.",
    expertise: ["Traditional", "Transitional", "Classic"],
    projects: [
      {
        image: "https://images.unsplash.com/photo-1600121848594-d8644e57abab?auto=format&fit=crop&q=80",
        title: "Traditional Family Room",
        description: "Classic elements blend with modern comfort in this family-centered space."
      },
      {
        image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&q=80",
        title: "Transitional Dining Room",
        description: "A perfect balance of traditional and contemporary design elements."
      },
      {
        image: "https://images.unsplash.com/photo-1600573472591-ee6c8e695394?auto=format&fit=crop&q=80",
        title: "Classic Master Bedroom",
        description: "Timeless elegance meets modern luxury in this master suite."
      }
    ]
  }
];

export const ProjectGalleryPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <SEOHead
        title="Meet Our Featured Designers | The Design Refuge"
        description="Discover exceptional interior designers in your area. Explore the work of our featured professionals and find inspiration for your next home project."
      />
      
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-4 py-12">
        {/* Introduction Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif mb-6">Featured Designer Projects</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the talented interior designers shaping beautiful spaces in your community. 
            These featured professionals are known for their unique styles and exceptional work.
          </p>
        </div>

        {/* Featured Designer Criteria */}
        <div className="bg-white rounded-xl p-8 shadow-sm mb-16">
          <h2 className="text-2xl font-serif mb-6">Featured Designer Criteria</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex items-start">
              <Star className="w-8 h-8 text-coral-500 mr-4 flex-shrink-0" />
              <div>
                <h3 className="font-semibold mb-2">Client Testimonials</h3>
                <p className="text-gray-600">Consistently high ratings and positive client feedback</p>
              </div>
            </div>
            <div className="flex items-start">
              <Award className="w-8 h-8 text-coral-500 mr-4 flex-shrink-0" />
              <div>
                <h3 className="font-semibold mb-2">Design Excellence</h3>
                <p className="text-gray-600">Recognition through awards and industry accolades</p>
              </div>
            </div>
            <div className="flex items-start">
              <Users className="w-8 h-8 text-coral-500 mr-4 flex-shrink-0" />
              <div>
                <h3 className="font-semibold mb-2">Professional Experience</h3>
                <p className="text-gray-600">Proven track record of successful projects</p>
              </div>
            </div>
          </div>
        </div>

        {/* Featured Designers */}
        <div className="space-y-16">
          {featuredDesigners.map((designer, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm overflow-hidden">
              <div className="p-8">
                <h2 className="text-2xl font-serif mb-4">{designer.name}</h2>
                <p className="text-gray-600 mb-4">{designer.bio}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {designer.expertise.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex}
                      className="px-3 py-1 bg-sage-50 text-sage-700 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                
                <div className="grid md:grid-cols-3 gap-6">
                  {designer.projects.map((project, projectIndex) => (
                    <div key={projectIndex} className="group">
                      <div className="aspect-[4/3] rounded-lg overflow-hidden mb-3">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>
                      <h4 className="font-semibold mb-1">{project.title}</h4>
                      <p className="text-sm text-gray-600">{project.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-br from-sage-50 to-azure-50 rounded-xl p-12 text-center mt-16">
          <h2 className="text-3xl font-serif mb-6">Ready to Find Your Perfect Designer?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Browse our directory of talented designers or contact us today for a personalized consultation.
          </p>
          <div className="flex justify-center gap-4">
            <Link
              to="/designers"
              className="px-6 py-3 bg-sage-600 text-white rounded-lg hover:bg-sage-700 transition-colors"
            >
              Browse Directory
            </Link>
            <Link
              to="/contact"
              className="px-6 py-3 bg-white text-sage-600 rounded-lg hover:bg-sage-50 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};