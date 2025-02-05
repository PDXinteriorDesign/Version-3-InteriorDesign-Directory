import React from 'react';
import { Users, MessageSquare, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

export const CommunitySection: React.FC = () => {
  return (
    <section className="bg-white rounded-xl p-8 shadow-sm">
      <h2 className="text-3xl font-serif mb-8">Join Our Design Community</h2>
      
      <div className="grid md:grid-cols-3 gap-8">
        <div className="text-center">
          <Users className="w-12 h-12 mx-auto mb-4 text-sage-600" />
          <h3 className="text-xl font-semibold mb-2">Network</h3>
          <p className="text-gray-600">
            Connect with fellow designers and share experiences
          </p>
        </div>
        
        <div className="text-center">
          <MessageSquare className="w-12 h-12 mx-auto mb-4 text-sage-600" />
          <h3 className="text-xl font-semibold mb-2">Discuss</h3>
          <p className="text-gray-600">
            Participate in discussions about design trends and challenges
          </p>
        </div>
        
        <div className="text-center">
          <Calendar className="w-12 h-12 mx-auto mb-4 text-sage-600" />
          <h3 className="text-xl font-semibold mb-2">Events</h3>
          <p className="text-gray-600">
            Join virtual and local design events and workshops
          </p>
        </div>
      </div>
      
      <div className="mt-8 text-center">
        <Link
          to="/community"
          className="px-6 py-3 bg-sage-600 text-white rounded-lg hover:bg-sage-700 transition-colors inline-flex items-center"
        >
          <Users className="w-5 h-5 mr-2" />
          Join the Community
        </Link>
      </div>
    </section>
  );
};