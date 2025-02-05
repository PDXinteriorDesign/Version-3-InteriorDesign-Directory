import React from 'react';
import { HomePage } from '../pages/HomePage';
import { AboutPage } from '../pages/AboutPage';
import { ContactPage } from '../pages/ContactPage';
import { DesignerResourcesPage } from '../pages/DesignerResourcesPage';
import { DesignersStatePage } from '../pages/locations/DesignersStatePage';
import { DesignersCityPage } from '../pages/locations/DesignersCityPage';
import { DesignerProfilePage } from '../pages/locations/DesignerProfilePage';
import { ComingSoonPage } from '../pages/ComingSoonPage';
import { ProfitCalculatorPage } from '../pages/ProfitCalculatorPage';
import { GrowthStrategiesPage } from '../pages/GrowthStrategiesPage';
import { DesignGuidesPage } from '../pages/DesignGuidesPage';
import { BohemianGuidePage } from '../pages/guides/BohemianGuidePage';
import { IndustrialGuidePage } from '../pages/guides/IndustrialGuidePage';
import { MidCenturyGuidePage } from '../pages/guides/MidCenturyGuidePage';
import { BusinessTemplatesPage } from '../pages/BusinessTemplatesPage';
import { ClientIntakeFormPage } from '../pages/templates/ClientIntakeFormPage';
import { ArticlesPage } from '../pages/ArticlesPage';
import { ListBusinessPage } from '../pages/ListBusinessPage';
import { DesignersPage } from '../pages/DesignersPage';
import { SuccessPage } from '../components/listing/SuccessPage';
import { FindDesignerPage } from '../pages/FindDesignerPage';
import { DesignStylesPage } from '../pages/DesignStylesPage';
import { ProjectGalleryPage } from '../pages/ProjectGalleryPage';
import { BudgetDesignPage } from '../pages/BudgetDesignPage';
import { DesignTipsPage } from '../pages/DesignTipsPage';
import { DIYProjectsPage } from '../pages/DIYProjectsPage';
import { DesignBlogPage } from '../pages/DesignBlogPage';

export const AppRoutes = [
  { path: '/', element: <HomePage /> },
  { path: '/about', element: <AboutPage /> },
  { path: '/contact', element: <ContactPage /> },
  { path: '/for-designers', element: <DesignerResourcesPage /> },
  { path: '/community', element: <ComingSoonPage /> },
  { path: '/profit-calculator', element: <ProfitCalculatorPage /> },
  { path: '/resources/growth-strategies', element: <GrowthStrategiesPage /> },
  { path: '/resources/guides', element: <DesignGuidesPage /> },
  { path: '/resources/guides/bohemian-chic', element: <BohemianGuidePage /> },
  { path: '/resources/guides/industrial-style', element: <IndustrialGuidePage /> },
  { path: '/resources/guides/mid-century-modern', element: <MidCenturyGuidePage /> },
  { path: '/resources/templates', element: <BusinessTemplatesPage /> },
  { path: '/resources/templates/client-intake-form', element: <ClientIntakeFormPage /> },
  { path: '/resources/articles', element: <ArticlesPage /> },
  { path: '/list-with-us', element: <ListBusinessPage /> },
  { path: '/designers', element: <DesignersPage /> },
  { path: '/list-with-us/success', element: <SuccessPage /> },
  { path: '/find-designer', element: <FindDesignerPage /> },
  { path: '/design-styles', element: <DesignStylesPage /> },
  { path: '/project-gallery', element: <ProjectGalleryPage /> },
  { path: '/budget-design', element: <BudgetDesignPage /> },
  { path: '/resources/tips', element: <DesignTipsPage /> },
  { path: '/resources/diy', element: <DIYProjectsPage /> },
  { path: '/resources/blog', element: <DesignBlogPage /> },
  { path: '/designers/:state', element: <DesignersStatePage /> },
  { path: '/designers/:state/:city', element: <DesignersCityPage /> },
  { path: '/designers/:state/:city/:designerSlug', element: <DesignerProfilePage /> }
];