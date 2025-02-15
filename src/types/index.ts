export interface Designer {
  id: string;
  name: string;
  company: string;
  rating: number;
  reviewCount: number;
  specialty: string[];
  description: string;
  personalBio: string;
  profileImage: string;
  coverImage: string;
  portfolioImages: string[];
  businessLocation: {
    city: string;
    state: string;
  };
  location?: string; 
  coordinates?: {
    lat: number;
    lng: number;
  };
  experience: number;
  contact: {
    phone: string;
    email: string;
    website: string;
  };
  services: string[];
  priceRange: string;
  source?: string;
}



export interface SearchFilters {
  location?: string;
  zipCode?: string;
  coordinates?: {
    lat: number;
    lng: number;
  };
  radius?: number;
}