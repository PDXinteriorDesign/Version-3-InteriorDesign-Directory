interface LocationContent {
  title: string;
  description: string;
  intro: string;
  neighborhoods: string[];
  specialties: string[];
  popularStyles: string[];
}

export const locationContent: Record<string, LocationContent> = {
  portland: {
    title: "Portland Interior Designers | Local Design Experts",
    description: "Find top-rated Portland interior designers. From Pearl District luxury to Alberta Arts creativity, connect with local design experts for your home or business.",
    intro: "Portland's interior design scene uniquely blends Pacific Northwest aesthetics with eco-conscious innovation. Our curated network of Portland designers specializes in creating spaces that reflect both the city's creative spirit and commitment to sustainability.",
    neighborhoods: [
      'Pearl District',
      'Alberta Arts District',
      'Nob Hill',
      'Hawthorne',
      'Division/Clinton',
      'Sellwood-Moreland'
    ],
    specialties: [
      'Eco-friendly design',
      'Modern industrial',
      'Pacific Northwest style',
      'Historic home renovation',
      'Sustainable materials'
    ],
    popularStyles: [
      'Modern Industrial',
      'Pacific Northwest Modern',
      'Eco-Minimalist',
      'Urban Contemporary'
    ]
  },
  beaverton: {
    title: "Beaverton Interior Designers | Home Design Experts",
    description: "Connect with experienced Beaverton interior designers. From modern homes to traditional spaces, find the perfect designer for your project.",
    intro: "Beaverton's interior design community combines suburban comfort with contemporary style. Our local designers specialize in creating functional, beautiful spaces that cater to modern family living while maintaining sophisticated aesthetics.",
    neighborhoods: [
      'Central Beaverton',
      'West Slope',
      'Cedar Hills',
      'Progress Ridge',
      'South Beaverton'
    ],
    specialties: [
      'Family-friendly design',
      'Modern suburban homes',
      'Home office design',
      'Kitchen remodeling',
      'Open-concept living'
    ],
    popularStyles: [
      'Contemporary',
      'Transitional',
      'Modern Farmhouse',
      'Comfortable Modern'
    ]
  },
  tualatin: {
    title: "Tualatin Interior Designers | Local Design Services",
    description: "Discover talented Tualatin interior designers. Expert design services for homes and businesses in the Tualatin Valley.",
    intro: "Tualatin's design professionals excel in creating spaces that balance suburban comfort with modern sophistication. Our local designers understand the unique character of Tualatin homes and bring fresh perspectives to every project.",
    neighborhoods: [
      'Tualatin Commons',
      'Riverpark',
      'Martinazzi',
      'Ibach',
      'Meridian'
    ],
    specialties: [
      'Luxury home design',
      'Open-concept living',
      'Outdoor living spaces',
      'Custom kitchens',
      'Master suite design'
    ],
    popularStyles: [
      'Traditional',
      'Transitional',
      'Contemporary',
      'Modern Classic'
    ]
  }
};