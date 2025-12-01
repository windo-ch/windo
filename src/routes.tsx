import React, { lazy, Suspense } from 'react';
import { RouteObject } from 'react-router-dom';

// Lazy load components for better performance
const Index = lazy(() => import('./pages/Index'));
const ProjectQuestionnaire = lazy(() => import('./pages/ProjectQuestionnaire'));
const Services = lazy(() => import('./pages/services/Services'));
const ModerneWebsite = lazy(() => import('./pages/services/ModerneWebsite'));
const PersonlicherSupport = lazy(() => import('./pages/services/PersonlicherSupport'));
const HostingWartung = lazy(() => import('./pages/services/HostingWartung'));
const SEOOptimierung = lazy(() => import('./pages/services/SEOOptimierung'));
const Contact = lazy(() => import('./pages/contact/Contact'));
const NotFound = lazy(() => import('./pages/NotFound'));

// Industry pages
const PhotographyStudios = lazy(() => import('./pages/industries/PhotographyStudios'));
const DentalClinics = lazy(() => import('./pages/industries/DentalClinics'));
const FitnessStudios = lazy(() => import('./pages/industries/FitnessStudios'));
const RetailStores = lazy(() => import('./pages/industries/RetailStores'));
const RealEstate = lazy(() => import('./pages/industries/RealEstate'));
const YogaStudios = lazy(() => import('./pages/industries/YogaStudios'));
const Spas = lazy(() => import('./pages/industries/Spas'));
const Cafes = lazy(() => import('./pages/industries/Cafes'));
const InteriorDesigners = lazy(() => import('./pages/industries/InteriorDesigners'));
const ArtGalleries = lazy(() => import('./pages/industries/ArtGalleries'));
const Boutiques = lazy(() => import('./pages/industries/Boutiques'));
const Hotels = lazy(() => import('./pages/industries/Hotels'));
const MarketingAgencies = lazy(() => import('./pages/industries/MarketingAgencies'));
const TechStartups = lazy(() => import('./pages/industries/TechStartups'));
const Consultants = lazy(() => import('./pages/industries/Consultants'));
const AccountingFirms = lazy(() => import('./pages/industries/AccountingFirms'));
const ArchitectureFirms = lazy(() => import('./pages/industries/ArchitectureFirms'));
const FashionBrands = lazy(() => import('./pages/industries/FashionBrands'));
const HairSalon = lazy(() => import('./pages/industries/HairSalon'));
const CarDealerships = lazy(() => import('./pages/industries/CarDealerships'));
const CraftBreweries = lazy(() => import('./pages/industries/CraftBreweries'));
const CoworkingSpaces = lazy(() => import('./pages/industries/CoworkingSpaces'));
const EventPlanners = lazy(() => import('./pages/industries/EventPlanners'));
const JewelryStores = lazy(() => import('./pages/industries/JewelryStores'));
const LawFirms = lazy(() => import('./pages/industries/LawFirms'));
const MedicalPractices = lazy(() => import('./pages/industries/MedicalPractices'));
const MusicSchools = lazy(() => import('./pages/industries/MusicSchools'));
const Restaurants = lazy(() => import('./pages/industries/Restaurants'));
const IndustryComingSoon = lazy(() => import('./pages/industries/IndustryComingSoon'));
const WeddingPlanners = lazy(() => import('./pages/industries/WeddingPlanners'));
const TravelAgencies = lazy(() => import('./pages/industries/TravelAgencies'));

// Legal pages
const Privacy = lazy(() => import('./pages/legal/Privacy'));
const Terms = lazy(() => import('./pages/legal/Terms'));

// Suspense wrapper component - modified to eliminate flicker
const SuspenseWrapper = ({ children }: { children: React.ReactNode }) => (
  <Suspense fallback={<div></div>}>
    {children}
  </Suspense>
);

// Routes configuration
export const routes: RouteObject[] = [
  {
    path: '/',
    element: <SuspenseWrapper><Index /></SuspenseWrapper>,
  },
  {
    path: '/services',
    element: <SuspenseWrapper><Services /></SuspenseWrapper>,
  },
  {
    path: '/services/moderne-website',
    element: <SuspenseWrapper><ModerneWebsite /></SuspenseWrapper>,
  },
  {
    path: '/services/personlicher-support',
    element: <SuspenseWrapper><PersonlicherSupport /></SuspenseWrapper>,
  },
  {
    path: '/services/hosting-wartung',
    element: <SuspenseWrapper><HostingWartung /></SuspenseWrapper>,
  },
  {
    path: '/services/seo-optimierung',
    element: <SuspenseWrapper><SEOOptimierung /></SuspenseWrapper>,
  },
  {
    path: '/contact',
    element: <SuspenseWrapper><Contact /></SuspenseWrapper>,
  },
  {
    path: '/project',
    element: <SuspenseWrapper><ProjectQuestionnaire /></SuspenseWrapper>,
  },
  {
    path: '/privacy',
    element: <SuspenseWrapper><Privacy /></SuspenseWrapper>,
  },
  {
    path: '/terms',
    element: <SuspenseWrapper><Terms /></SuspenseWrapper>,
  },
  // Industry routes with kebab-case paths
  {
    path: '/industries/photography-studios',
    element: <SuspenseWrapper><PhotographyStudios /></SuspenseWrapper>,
  },
  {
    path: '/industries/dental-clinics',
    element: <SuspenseWrapper><DentalClinics /></SuspenseWrapper>,
  },
  {
    path: '/industries/fitness-studios',
    element: <SuspenseWrapper><FitnessStudios /></SuspenseWrapper>,
  },
  {
    path: '/industries/retail-stores',
    element: <SuspenseWrapper><RetailStores /></SuspenseWrapper>,
  },
  {
    path: '/industries/real-estate',
    element: <SuspenseWrapper><RealEstate /></SuspenseWrapper>,
  },
  {
    path: '/industries/yoga-studios',
    element: <SuspenseWrapper><YogaStudios /></SuspenseWrapper>,
  },
  {
    path: '/industries/spas',
    element: <SuspenseWrapper><Spas /></SuspenseWrapper>,
  },
  {
    path: '/industries/cafes',
    element: <SuspenseWrapper><Cafes /></SuspenseWrapper>,
  },
  {
    path: '/industries/interior-designers',
    element: <SuspenseWrapper><InteriorDesigners /></SuspenseWrapper>,
  },
  {
    path: '/industries/art-galleries',
    element: <SuspenseWrapper><ArtGalleries /></SuspenseWrapper>,
  },
  {
    path: '/industries/boutiques',
    element: <SuspenseWrapper><Boutiques /></SuspenseWrapper>,
  },
  {
    path: '/industries/hotels',
    element: <SuspenseWrapper><Hotels /></SuspenseWrapper>,
  },
  {
    path: '/industries/marketing-agencies',
    element: <SuspenseWrapper><MarketingAgencies /></SuspenseWrapper>,
  },
  {
    path: '/industries/tech-startups',
    element: <SuspenseWrapper><TechStartups /></SuspenseWrapper>,
  },
  {
    path: '/industries/consultants',
    element: <SuspenseWrapper><Consultants /></SuspenseWrapper>,
  },
  // Missing industry pages (using IndustryComingSoon as a placeholder)
  {
    path: '/industries/pet-services',
    element: <SuspenseWrapper><IndustryComingSoon /></SuspenseWrapper>,
  },
  {
    path: '/industries/accounting-firms',
    element: <SuspenseWrapper><AccountingFirms /></SuspenseWrapper>,
  },
  {
    path: '/industries/architecture-firms',
    element: <SuspenseWrapper><ArchitectureFirms /></SuspenseWrapper>,
  },
  {
    path: '/industries/car-dealerships',
    element: <SuspenseWrapper><CarDealerships /></SuspenseWrapper>,
  },
  {
    path: '/industries/coworking-spaces',
    element: <SuspenseWrapper><CoworkingSpaces /></SuspenseWrapper>,
  },
  {
    path: '/industries/craft-breweries',
    element: <SuspenseWrapper><CraftBreweries /></SuspenseWrapper>,
  },
  {
    path: '/industries/event-planners',
    element: <SuspenseWrapper><EventPlanners /></SuspenseWrapper>,
  },
  {
    path: '/industries/fashion-brands',
    element: <SuspenseWrapper><FashionBrands /></SuspenseWrapper>,
  },
  {
    path: '/industries/hair-salon',
    element: <SuspenseWrapper><HairSalon /></SuspenseWrapper>,
  },
  {
    path: '/industries/jewelry-stores',
    element: <SuspenseWrapper><JewelryStores /></SuspenseWrapper>,
  },
  {
    path: '/industries/law-firms',
    element: <SuspenseWrapper><LawFirms /></SuspenseWrapper>,
  },
  {
    path: '/industries/medical-practices',
    element: <SuspenseWrapper><MedicalPractices /></SuspenseWrapper>,
  },
  {
    path: '/industries/music-schools',
    element: <SuspenseWrapper><MusicSchools /></SuspenseWrapper>,
  },
  {
    path: '/industries/restaurants',
    element: <SuspenseWrapper><Restaurants /></SuspenseWrapper>,
  },
  {
    path: '/industries/travel-agencies',
    element: <SuspenseWrapper><TravelAgencies /></SuspenseWrapper>,
  },
  {
    path: '/industries/wedding-planners',
    element: <SuspenseWrapper><WeddingPlanners /></SuspenseWrapper>,
  },
  // Legacy route for backward compatibility
  {
    path: '/project-questionnaire',
    element: <SuspenseWrapper><ProjectQuestionnaire /></SuspenseWrapper>,
  },
  // Additional legacy route for '/questionnaire'
  {
    path: '/questionnaire',
    element: <SuspenseWrapper><ProjectQuestionnaire /></SuspenseWrapper>,
  },
  // Catch-all 404 route
  {
    path: '*',
    element: <SuspenseWrapper><NotFound /></SuspenseWrapper>,
  },
];

export default routes; 