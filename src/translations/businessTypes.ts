import { Language } from '../contexts/LanguageContext';

type TranslationSet = Record<string, string>;
type LanguageTranslations = Record<Language, TranslationSet>;

export const businessTypesTranslations: LanguageTranslations = {
  en: {
    // Business Types
    'business.accounting': 'Accounting Firms',
    'business.architecture': 'Architecture Firms',
    'business.art': 'Art Galleries',
    'business.boutiques': 'Boutiques',
    'business.cafes': 'Cafes',
    'business.car': 'Car Dealerships',
    'business.consultants': 'Consultants',
    'business.coworking': 'Coworking Spaces',
    'business.brewery': 'Craft Breweries',
    'business.dental': 'Dental Clinics',
    'business.event': 'Event Planners',
    'business.fashion': 'Fashion Brands',
    'business.fitness': 'Fitness Studios',
    'business.hair': 'Hair Salons',
    'business.hotels': 'Hotels',
    'business.interior': 'Interior Designers',
    'business.jewelry': 'Jewelry Stores',
    'business.law': 'Law Firms',
    'business.marketing': 'Marketing Agencies',
    'business.medical': 'Medical Practices',
    'business.music': 'Music Schools',
    'business.pet': 'Pet Services',
    'business.photography': 'Photography Studios',
    'business.realestate': 'Real Estate',
    'business.restaurants': 'Restaurants',
    'business.retail': 'Retail',
    'business.spas': 'Spas',
    'business.tech': 'Tech Startups',
    'business.travel': 'Travel Agencies',
    'business.wedding': 'Wedding Planners',
    'business.yoga': 'Yoga Studios',
    'business.your': 'Your Business',
  },
  de: {
    // Business Types
    'business.accounting': 'Buchhaltungsfirmen',
    'business.architecture': 'Architekturbüros',
    'business.art': 'Kunstgalerien',
    'business.boutiques': 'Boutiquen',
    'business.cafes': 'Cafés',
    'business.car': 'Autohändler',
    'business.consultants': 'Berater',
    'business.coworking': 'Coworking-Spaces',
    'business.brewery': 'Craft-Brauereien',
    'business.dental': 'Zahnkliniken',
    'business.event': 'Eventplaner',
    'business.fashion': 'Modemarken',
    'business.fitness': 'Fitnessstudios',
    'business.hair': 'Friseursalons',
    'business.hotels': 'Hotels',
    'business.interior': 'Innenarchitekten',
    'business.jewelry': 'Schmuckgeschäfte',
    'business.law': 'Anwaltskanzleien',
    'business.marketing': 'Marketingagenturen',
    'business.medical': 'Arztpraxen',
    'business.music': 'Musikschulen',
    'business.pet': 'Tierdienste',
    'business.photography': 'Fotostudios',
    'business.realestate': 'Immobilien',
    'business.restaurants': 'Restaurants',
    'business.retail': 'Einzelhandel',
    'business.spas': 'Spas',
    'business.tech': 'Tech-Startups',
    'business.travel': 'Reisebüros',
    'business.wedding': 'Hochzeitsplaner',
    'business.yoga': 'Yogastudios',
    'business.your': 'Ihr Unternehmen',
  },
  fr: {
    // Business Types
    'business.accounting': 'Cabinets Comptables',
    'business.architecture': 'Cabinets d\'Architecture',
    'business.art': 'Galeries d\'Art',
    'business.boutiques': 'Boutiques',
    'business.cafes': 'Cafés',
    'business.car': 'Concessionnaires Auto',
    'business.consultants': 'Consultants',
    'business.coworking': 'Espaces de Coworking',
    'business.brewery': 'Brasseries Artisanales',
    'business.dental': 'Cliniques Dentaires',
    'business.event': 'Organisateurs d\'Événements',
    'business.fashion': 'Marques de Mode',
    'business.fitness': 'Salles de Fitness',
    'business.hair': 'Salons de Coiffure',
    'business.hotels': 'Hôtels',
    'business.interior': 'Designers d\'Intérieur',
    'business.jewelry': 'Bijouteries',
    'business.law': 'Cabinets d\'Avocats',
    'business.marketing': 'Agences Marketing',
    'business.medical': 'Cabinets Médicaux',
    'business.music': 'Écoles de Musique',
    'business.pet': 'Services Animaliers',
    'business.photography': 'Studios de Photographie',
    'business.realestate': 'Immobilier',
    'business.restaurants': 'Restaurants',
    'business.retail': 'Commerce de Détail',
    'business.spas': 'Spas',
    'business.tech': 'Startups Tech',
    'business.travel': 'Agences de Voyage',
    'business.wedding': 'Planificateurs de Mariages',
    'business.yoga': 'Studios de Yoga',
    'business.your': 'Votre Entreprise',
  },
  it: {
    // Business Types
    'business.accounting': 'Studi Commercialisti',
    'business.architecture': 'Studi di Architettura',
    'business.art': 'Gallerie d\'Arte',
    'business.boutiques': 'Boutique',
    'business.cafes': 'Caffetterie',
    'business.car': 'Concessionarie Auto',
    'business.consultants': 'Consulenti',
    'business.coworking': 'Spazi Coworking',
    'business.brewery': 'Birrifici Artigianali',
    'business.dental': 'Cliniche Dentali',
    'business.event': 'Organizzatori Eventi',
    'business.fashion': 'Marchi di Moda',
    'business.fitness': 'Palestre',
    'business.hair': 'Saloni di Bellezza',
    'business.hotels': 'Hotel',
    'business.interior': 'Designer d\'Interni',
    'business.jewelry': 'Gioiellerie',
    'business.law': 'Studi Legali',
    'business.marketing': 'Agenzie Marketing',
    'business.medical': 'Studi Medici',
    'business.music': 'Scuole di Musica',
    'business.pet': 'Servizi per Animali',
    'business.photography': 'Studi Fotografici',
    'business.realestate': 'Immobiliare',
    'business.restaurants': 'Ristoranti',
    'business.retail': 'Negozi al Dettaglio',
    'business.spas': 'Spa',
    'business.tech': 'Startup Tecnologiche',
    'business.travel': 'Agenzie di Viaggio',
    'business.wedding': 'Wedding Planner',
    'business.yoga': 'Studi di Yoga',
    'business.your': 'La Tua Azienda',
  },
}; 