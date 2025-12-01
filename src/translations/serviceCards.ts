import { Language } from '../contexts/LanguageContext';

type TranslationSet = Record<string, string>;
type LanguageTranslations = Record<Language, TranslationSet>;

export const serviceCardsTranslations: LanguageTranslations = {
  en: {
    'service.moderne-website.title': 'Modern Website',
    'service.moderne-website.description': 'Professional, responsive websites that look perfect and function flawlessly on all devices.',
    'service.moderne-website.feature1': 'Responsive design for all devices',
    'service.moderne-website.feature2': 'Modern, user-friendly navigation',
    'service.moderne-website.feature3': 'Brand integration',
    'service.moderne-website.feature4': 'Conversion optimized',
    
    'service.personlicher-support.title': 'Personal Support',
    'service.personlicher-support.description': 'You have a direct contact person – no call center, no automated responses.',
    'service.personlicher-support.feature1': 'Direct contact with Henry',
    'service.personlicher-support.feature2': 'Fast response times',
    'service.personlicher-support.feature3': 'Personal care',
    'service.personlicher-support.feature4': 'Long-term partnership',
    
    'service.hosting-wartung.title': 'Hosting & Maintenance',
    'service.hosting-wartung.description': 'We take care of hosting, updates, security, and maintenance – you don\'t have to worry about anything.',
    'service.hosting-wartung.feature1': 'Hosting & Domain included',
    'service.hosting-wartung.feature2': 'Regular updates',
    'service.hosting-wartung.feature3': 'Security updates',
    'service.hosting-wartung.feature4': 'Technical maintenance',
    
    'service.seo-optimierung.title': 'SEO Optimization',
    'service.seo-optimierung.description': 'Your website is optimized so that potential customers can find you.',
    'service.seo-optimierung.feature1': 'On-Page SEO',
    'service.seo-optimierung.feature2': 'Technical optimization',
    'service.seo-optimierung.feature3': 'Performance tracking',
    'service.seo-optimierung.feature4': 'Continuous improvement',
  },
  
  de: {
    'service.moderne-website.title': 'Moderne Website',
    'service.moderne-website.description': 'Professionelle, responsive Websites die auf allen Geräten perfekt aussehen und funktionieren.',
    'service.moderne-website.feature1': 'Responsive Design für alle Geräte',
    'service.moderne-website.feature2': 'Moderne, benutzerfreundliche Navigation',
    'service.moderne-website.feature3': 'Brand-Integration',
    'service.moderne-website.feature4': 'Conversion-optimiert',
    
    'service.personlicher-support.title': 'Persönlicher Support',
    'service.personlicher-support.description': 'Sie haben einen direkten Ansprechpartner – kein Call-Center, keine automatischen Antworten.',
    'service.personlicher-support.feature1': 'Direkter Kontakt zu Henry',
    'service.personlicher-support.feature2': 'Schnelle Antwortzeiten',
    'service.personlicher-support.feature3': 'Persönliche Betreuung',
    'service.personlicher-support.feature4': 'Langfristige Partnerschaft',
    
    'service.hosting-wartung.title': 'Hosting & Wartung',
    'service.hosting-wartung.description': 'Wir kümmern uns um Hosting, Updates, Sicherheit und Wartung – Sie müssen sich um nichts kümmern.',
    'service.hosting-wartung.feature1': 'Hosting & Domain inklusive',
    'service.hosting-wartung.feature2': 'Regelmässige Updates',
    'service.hosting-wartung.feature3': 'Sicherheits-Updates',
    'service.hosting-wartung.feature4': 'Technische Wartung',
    
    'service.seo-optimierung.title': 'SEO-Optimierung',
    'service.seo-optimierung.description': 'Ihre Website wird so optimiert, dass Sie von potenziellen Kunden gefunden werden.',
    'service.seo-optimierung.feature1': 'On-Page SEO',
    'service.seo-optimierung.feature2': 'Technische Optimierung',
    'service.seo-optimierung.feature3': 'Performance-Tracking',
    'service.seo-optimierung.feature4': 'Kontinuierliche Verbesserung',
  }
};

