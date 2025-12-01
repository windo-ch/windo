import { Language } from '../contexts/LanguageContext';

type TranslationSet = Record<string, any>;
type LanguageTranslations = Record<Language, TranslationSet>;

export const caseStudiesTranslations: LanguageTranslations = {
  en: {
    'case_studies.topcut.title': 'Top Cut Barber',
    'case_studies.topcut.description': 'Modern website for a barbershop with clear presentation of services and easy appointment booking',
    'case_studies.topcut.industry': 'Barbershop',
    'case_studies.topcut.highlight1': 'Simple, clear structure',
    'case_studies.topcut.highlight2': 'Mobile optimized',
    'case_studies.topcut.highlight3': 'Managed Service',
    
    'case_studies.neumann.title': 'Dental Practice Schaffhausen',
    'case_studies.neumann.description': 'Professional website for sleep dentistry focusing on specialization and patient experience',
    'case_studies.neumann.industry': 'Dentistry',
    'case_studies.neumann.highlight1': 'Comprehensive information pages',
    'case_studies.neumann.highlight2': 'Professional design',
    'case_studies.neumann.highlight3': 'Long-term care',
    
    'case_studies.storeofvalue.title': 'Store of Value',
    'case_studies.storeofvalue.description': 'Professional website for financial services focusing on trust and credibility',
    'case_studies.storeofvalue.industry': 'Financial Services',
    'case_studies.storeofvalue.highlight1': 'Advanced features',
    'case_studies.storeofvalue.highlight2': 'Premium design',
    'case_studies.storeofvalue.highlight3': 'Managed Service with direct contact',
  },
  
  de: {
    'case_studies.topcut.title': 'Top Cut Barber',
    'case_studies.topcut.description': 'Moderne Website für einen Friseursalon mit klarer Darstellung der Dienstleistungen und einfacher Terminbuchung',
    'case_studies.topcut.industry': 'Friseursalon',
    'case_studies.topcut.highlight1': 'Einfache, klare Struktur',
    'case_studies.topcut.highlight2': 'Mobile-optimiert',
    'case_studies.topcut.highlight3': 'Managed Service',
    
    'case_studies.neumann.title': 'Zahnarztpraxis Schaffhausen',
    'case_studies.neumann.description': 'Professionelle Website für Schlafzahnmedizin mit Fokus auf Spezialisierung und Patientenerfahrung',
    'case_studies.neumann.industry': 'Zahnmedizin',
    'case_studies.neumann.highlight1': 'Umfassende Informationsseiten',
    'case_studies.neumann.highlight2': 'Professionelles Design',
    'case_studies.neumann.highlight3': 'Langfristige Betreuung',
    
    'case_studies.storeofvalue.title': 'Store of Value',
    'case_studies.storeofvalue.description': 'Professionelle Website für Finanzdienstleistungen mit Fokus auf Vertrauen und Glaubwürdigkeit',
    'case_studies.storeofvalue.industry': 'Finanzdienstleistungen',
    'case_studies.storeofvalue.highlight1': 'Erweiterte Funktionen',
    'case_studies.storeofvalue.highlight2': 'Premium Design',
    'case_studies.storeofvalue.highlight3': 'Managed Service mit direktem Ansprechpartner',
  }
};

