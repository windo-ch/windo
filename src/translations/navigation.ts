import { Language } from '../contexts/LanguageContext';

type TranslationSet = Record<string, string>;
type LanguageTranslations = Record<Language, TranslationSet>;

export const navigationTranslations: LanguageTranslations = {
  en: {
    // Main Navigation
    'nav.workshop': 'Services',
    'nav.windows': 'Method',
    'nav.workmanship': 'Packages',
    'nav.welcome': 'Contact',
    
    // Who We Are
    'nav.who_we_are': 'Who We Are',
    'nav.watchmakers': 'Watchmakers of the Web',
    'nav.workshop_views': 'Services Overview',
    
    // Method Design
    'nav.window_design': 'Method Design',
    'nav.wireframing': 'Wireframing',
    'nav.walkthrough': 'Walkthrough Design',
    'nav.worldwide': 'Worldwide Visibility',
    'nav.widescreen': 'Wide-Screen Adaptation',
    'nav.webstore': 'Webstore Crafting',
    
    // Contact Section
    'nav.wave_hello': 'Wave Hello',
    'nav.where_to_find': 'Where to Find',
    'nav.whisper_vision': 'Whisper Vision',
    
    // Explore
    'nav.explore': 'Explore',
  },
  de: {
    // Main Navigation
    'nav.workshop': 'Dienste',
    'nav.windows': 'Methode',
    'nav.workmanship': 'Pakete',
    'nav.welcome': 'Kontakt',
    
    // Who We Are
    'nav.who_we_are': 'Wer wir sind',
    'nav.watchmakers': 'Uhrmacher des Webs',
    'nav.workshop_views': 'Dienste-Übersicht',
    
    // Method Design
    'nav.window_design': 'Methoden-Design',
    'nav.wireframing': 'Wireframing',
    'nav.walkthrough': 'Rundgang-Design',
    'nav.worldwide': 'Weltweite Sichtbarkeit',
    'nav.widescreen': 'Breitbild-Anpassung',
    'nav.webstore': 'Webshop-Erstellung',
    
    // Contact Section
    'nav.wave_hello': 'Hallo sagen',
    'nav.where_to_find': 'Wo Sie uns finden',
    'nav.whisper_vision': 'Vision teilen',
    
    // Explore
    'nav.explore': 'Entdecken',
  },
  fr: {
    // Main Navigation
    'nav.workshop': 'Services',
    'nav.windows': 'Méthode',
    'nav.workmanship': 'Forfaits',
    'nav.welcome': 'Contact',
    
    // Who We Are
    'nav.who_we_are': 'Qui Sommes-Nous',
    'nav.watchmakers': 'Horlogers du Web',
    'nav.workshop_views': 'Aperçu des Services',
    
    // Method Design
    'nav.window_design': 'Conception Méthodique',
    'nav.wireframing': 'Wireframing',
    'nav.walkthrough': 'Conception de Visite Guidée',
    'nav.worldwide': 'Visibilité Mondiale',
    'nav.widescreen': 'Adaptation Grand Écran',
    'nav.webstore': 'Création de Boutique Web',
    
    // Contact Section
    'nav.wave_hello': 'Dire Bonjour',
    'nav.where_to_find': 'Où Nous Trouver',
    'nav.whisper_vision': 'Partager Votre Vision',
    
    // Explore
    'nav.explore': 'Explorer',
  },
  it: {
    // Main Navigation
    'nav.workshop': 'Servizi',
    'nav.windows': 'Metodo',
    'nav.workmanship': 'Pacchetti',
    'nav.welcome': 'Contatti',
    
    // Who We Are
    'nav.who_we_are': 'Chi siamo',
    'nav.watchmakers': 'Orologiai del Web',
    'nav.workshop_views': 'Panoramica dei servizi',
    
    // Method Design
    'nav.window_design': 'Design del metodo',
    'nav.wireframing': 'Wireframing',
    'nav.walkthrough': 'Design della visita',
    'nav.worldwide': 'Visibilità mondiale',
    'nav.widescreen': 'Adattamento schermo largo',
    'nav.webstore': 'Creazione negozio online',
    
    // Contact Section
    'nav.wave_hello': 'Salutare',
    'nav.where_to_find': 'Dove trovarci',
    'nav.whisper_vision': 'Condividi la tua visione',
    
    // Explore
    'nav.explore': 'Esplora',
  },
}; 