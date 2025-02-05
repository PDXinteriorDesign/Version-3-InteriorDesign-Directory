import { City } from '../../../../types/location';

export const irvine: City = {
  name: 'Irvine',
  slug: 'irvine',
  metaDescription: 'Find Irvine\'s best interior designers specializing in modern luxury and family-friendly design. Connect with experts who understand Orange County\'s planned community lifestyle.',
  designerCount: 45,
  popularStyles: ['Modern Luxury', 'Contemporary', 'Transitional'],
  averagePrice: '$150-275/hour',
  neighborhoods: [
    'Woodbridge',
    'Turtle Rock',
    'Northwood',
    'Westpark',
    'University Park',
    'Orchard Hills',
    'Portola Springs',
    'Quail Hill'
  ],
  content: {
    cityGuide: {
      title: 'Irvine Design: Master-Planned Modernity and Family-Friendly Spaces',
      sections: [
        {
          title: 'Planned Community Excellence',
          content: 'Irvine\'s interior design reflects its reputation for thoughtful planning and organization. Designers create sophisticated yet practical spaces that complement the city\'s modern master-planned communities while maintaining individual character.'
        },
        {
          title: 'Family-Focused Design',
          content: 'With its family-oriented lifestyle, Irvine designers excel at creating spaces that balance style with functionality. From kid-friendly materials to multi-purpose rooms, every design decision considers the needs of modern families.'
        },
        {
          title: 'Cultural Fusion',
          content: 'Irvine\'s diverse population influences its design aesthetic, blending Asian-inspired minimalism with California contemporary style. Designers create culturally sensitive spaces that appeal to the city\'s international community.'
        }
      ]
    },
    designTips: {
      title: 'Your Guide to Hiring an Interior Designer in Irvine',
      tips: [
        'Look for experience with planned community guidelines',
        'Check their expertise in family-friendly design',
        'Verify understanding of HOA requirements',
        'Ask about their approach to multi-functional spaces',
        'Review their experience with similar properties',
        'Ensure they understand local building codes'
      ]
    },
    localResources: {
      title: 'Irvine Design Resources',
      resources: [
        {
          name: 'Orange County Design Center',
          description: 'Premier design showroom and resource center',
          website: 'https://ocdesigncenter.com'
        },
        {
          name: 'Irvine Home & Design Show',
          description: 'Annual home improvement and design event',
          website: 'https://irvinehomeshow.com'
        },
        {
          name: 'ASID Orange County',
          description: 'Professional interior design organization',
          website: 'https://oc.asid.org'
        }
      ]
    }
  }
};