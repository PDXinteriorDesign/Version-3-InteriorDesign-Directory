import React from 'react';
import { Star, Check } from 'lucide-react';
import { Review } from '../types';

interface ReviewSectionProps {
  reviews: Review[];
}

export const ReviewSection: React.FC<ReviewSectionProps> = ({ reviews }) => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-lg">
      <h3 className="text-xl font-semibold mb-6">Client Reviews</h3>
      <div className="space-y-6">
        {reviews.map((review) => (
          <div key={review.id} className="border-b border-gray-100 pb-6 last:border-0">
            <div className="flex items-start justify-between mb-3">
              <div>
                <div className="flex items-center mb-1">
                  <h4 className="font-medium text-gray-900 mr-2">{review.author}</h4>
                  {review.verified && (
                    <span className="flex items-center text-green-600 text-sm">
                      <Check className="w-4 h-4 mr-1" />
                      Verified Client
                    </span>
                  )}
                </div>
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < review.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                      }`}
                    />
                  ))}
                  <span className="ml-2 text-sm text-gray-600">{review.date}</span>
                </div>
              </div>
              {review.projectCost && (
                <span className="text-sm text-gray-600">
                  Project Cost: {review.projectCost}
                </span>
              )}
            </div>
            <p className="text-gray-700 mb-3">{review.comment}</p>
            {review.projectDetails && (
              <div className="mb-3">
                <h5 className="text-sm font-medium text-gray-900 mb-1">Project Details</h5>
                <p className="text-sm text-gray-600">{review.projectDetails}</p>
              </div>
            )}
            {review.images && review.images.length > 0 && (
              <div className="grid grid-cols-3 gap-2">
                {review.images.map((image, index) => (
                  <div key={index} className="relative aspect-square rounded-lg overflow-hidden">
                    <img
                      src={image}
                      alt={`Review photo ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};