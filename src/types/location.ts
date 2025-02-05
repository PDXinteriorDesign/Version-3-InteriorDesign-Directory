interface CityContent {
  cityGuide: {
    title: string;
    sections: Array<{
      title: string;
      content: string;
    }>;
  };
  designTips: {
    title: string;
    tips: string[];
  };
  localResources: {
    title: string;
    resources: Array<{
      name: string;
      description: string;
      website: string;
    }>;
  };
}

export interface City {
  name: string;
  slug: string;
  metaDescription: string;
  designerCount: number;
  popularStyles: string[];
  averagePrice: string;
  neighborhoods: string[];
  content?: CityContent;
}

export interface Location {
  state: string;
  stateSlug: string;
  metaDescription: string;
  popularDesignStyles: string[];
  averageCost: string;
  cities: City[];
}