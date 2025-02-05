import React from 'react';
import { Phone, Mail, Globe, MapPin, Clock, Award, ArrowLeft } from 'lucide-react';
import { useParams, Link } from 'react-router-dom';
import { getStyleColor } from '../utils/styles';


interface DesignerProfileProps {
  designer: any;
}


export const DesignerProfile: React.FC<DesignerProfileProps> = ({ designer }) => {
  const { id } = useParams<{ id: string }>();



  const profileImage = designer.portfolio?.images?.[0];
  const coverImage = designer.portfolio?.images?.[1];
  const portfolioImages = designer.portfolio?.images?.slice(2) || [];



  const mainStyle = designer?.specialty?.[0] || "defaultStyle";
  const styleColor = getStyleColor(mainStyle);


  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="mb-8">
        <Link
          to="/designers"
          className="inline-flex items-center text-gray-600 hover:text-coral-500 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to All Designers
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className={`relative h-[400px] rounded-xl overflow-hidden mb-8 border-t-4 ${styleColor.border}`}>
            {coverImage && (
              <img
                src={coverImage}
                alt={`${designer.businessInfo?.name}'s cover`}
                className="w-full h-full object-cover"
              />
            )}
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg mb-8">
            <div className="flex items-center mb-6">
              {profileImage && (
                <img
                  src={profileImage}
                  alt={designer.businessInfo?.name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-white mr-4"
                />
              )}
              <div>
                <h1 className="text-3xl font-bold mb-1">{designer.businessInfo.name}</h1>
                <h2 className="text-xl text-gray-600">{designer.businessInfo.company}</h2>
              </div>
            </div>
            <p className="text-gray-700 mb-6 leading-relaxed">{designer.portfolio.description}</p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">

              {designer.businessInfo.location && (
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 text-gray-500 mr-2" />
                  <span>{designer.businessInfo.location}</span>
                </div>
              )}

              <div className="flex items-center">
                <Clock className="w-5 h-5 text-gray-500 mr-2" />
                <span>{designer.businessInfo.experience} Years</span>
              </div>
              <div className="flex items-center">
                <Award className="w-5 h-5 text-gray-500 mr-2" />
                <span>{designer.rating} Rating</span>
              </div>
            </div>
          </div>

          {portfolioImages.length > 0 && (
            <div className="bg-white rounded-xl p-6 shadow-lg mb-8">
              <h3 className="text-xl font-semibold mb-4">Portfolio</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {portfolioImages.map((imageUrl: string, index: number) => (
                  <div
                    key={index}
                    className="relative aspect-square rounded-lg overflow-hidden group cursor-pointer"
                    onClick={() => window.open(imageUrl, '_blank')}
                  >
                    <img
                      src={imageUrl}
                      alt={`Portfolio piece ${index + 1}`}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = '/placeholder-image.jpg'; // Replace with your placeholder image
                        target.onerror = null;
                      }}
                    />
                    <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <span className="text-white text-sm font-medium">Click to view</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        <div>
          <div className="bg-white rounded-xl p-6 shadow-lg sticky top-4">
            <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
            <div className="space-y-4">
              <a
                href={`tel:${designer.businessInfo.phone}`}
                className="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors group"
              >
                <Phone className="w-5 h-5 text-coral-500 mr-3" />
                <span className="group-hover:text-coral-500 transition-colors">{designer.businessInfo.phone}</span>
              </a>
              <a
                href={`mailto:${designer.businessInfo.email}`}
                className="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors group"
              >
                <Mail className="w-5 h-5 text-coral-500 mr-3" />
                <span className="group-hover:text-coral-500 transition-colors">{designer.businessInfo.email}</span>
              </a>
              <a
                href={`https://${designer.businessInfo.website}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors group"
              >
                <Globe className="w-5 h-5 text-coral-500 mr-3" />
                <span className="group-hover:text-coral-500 transition-colors">{designer.businessInfo.website}</span>
              </a>
            </div>


            {(designer.services?.areas?.length > 0 || designer.services?.offerings?.length > 0) && (
              <div className="mt-6">
                {designer.services.areas?.length > 0 && (
                  <div className="mb-4">
                    <h4 className="text-lg font-medium mb-2 text-gray-700">Areas</h4>
                    <div className="space-y-2">
                      {designer.services.areas.map((area: string, index: number) => (
                        <div key={index} className="p-2 bg-gray-50 rounded-lg text-gray-700">
                          {area}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {designer.services.offerings?.length > 0 && (
                  <div>
                    <h4 className="text-lg font-medium mb-2 text-gray-700">Service Offerings</h4>
                    <div className="space-y-2">
                      {designer.services.offerings.map((offering: string, index: number) => (
                        <div key={index} className="p-2 bg-gray-50 rounded-lg text-gray-700">
                          {offering}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}

            {designer.portfolio?.style?.length > 0 && (
              <div className="mt-6">
                <h3 className="text-xl font-semibold mb-4">Specialties</h3>
                <div className="flex flex-wrap gap-2">
                  {designer.portfolio.style.map((style: string, index: number) => (
                    <span
                      key={index}
                      className={`px-3 py-1 rounded-full text-sm ${getStyleColor(style).badge}`}
                    >
                      {style}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};