import { Language } from '../../contexts/LanguageContext';

// Define the translation set structure
export type TranslationSet = {
  [key: string]: string;
};

// Define the language translations structure
export type LanguageTranslations = {
  [language: string]: TranslationSet;
};

// Define the translations for architecture firms
export const architectureTranslations: LanguageTranslations = {
  en: {
    // Hero Section
    'architecture.hero.title': 'Innovative Architectural Design',
    'architecture.hero.description': 'Create a stunning online portfolio that showcases your architectural vision and attracts new clients.',
    'architecture.hero.button': 'Get Started',

    // Features Section
    'architecture.features.portfolio.title': 'Project Portfolio',
    'architecture.features.portfolio.description': 'Showcase your best architectural projects with high-quality images and detailed descriptions.',
    
    'architecture.features.services.title': 'Design Services',
    'architecture.features.services.description': 'Highlight your range of architectural services from concept to completion.',
    
    'architecture.features.approach.title': 'Design Approach',
    'architecture.features.approach.description': 'Communicate your unique architectural philosophy and sustainable design practices.',
    
    'architecture.features.team.title': 'Expert Team',
    'architecture.features.team.description': 'Introduce your talented architects and designers to build trust with potential clients.',

    // Add the missing projects keys
    'architecture.features.projects.title': 'Featured Projects',
    'architecture.features.projects.description': 'Display your most impressive architectural achievements with stunning visuals and compelling stories.',

    // CTA Section
    'architecture.cta.title': 'Ready to Showcase Your Architectural Vision?',
    'architecture.cta.description': 'Create a professional online presence that highlights your design excellence and grows your practice.',
    'architecture.cta.button': 'Start Building Today',
  },
  de: {
    // Hero Section
    'architecture.hero.title': 'Innovative Architekturgestaltung',
    'architecture.hero.description': 'Erstellen Sie ein beeindruckendes Online-Portfolio, das Ihre architektonische Vision präsentiert und neue Kunden anzieht.',
    'architecture.hero.button': 'Jetzt starten',

    // Features Section
    'architecture.features.portfolio.title': 'Projektportfolio',
    'architecture.features.portfolio.description': 'Präsentieren Sie Ihre besten Architekturprojekte mit hochwertigen Bildern und detaillierten Beschreibungen.',
    
    'architecture.features.services.title': 'Designdienstleistungen',
    'architecture.features.services.description': 'Heben Sie Ihre Palette an Architekturdienstleistungen vom Konzept bis zur Fertigstellung hervor.',
    
    'architecture.features.approach.title': 'Design-Ansatz',
    'architecture.features.approach.description': 'Kommunizieren Sie Ihre einzigartige Architekturphilosophie und nachhaltige Designpraktiken.',
    
    'architecture.features.team.title': 'Expertenteam',
    'architecture.features.team.description': 'Stellen Sie Ihre talentierten Architekten und Designer vor, um Vertrauen bei potenziellen Kunden aufzubauen.',

    // Add the missing projects keys
    'architecture.features.projects.title': 'Ausgewählte Projekte',
    'architecture.features.projects.description': 'Zeigen Sie Ihre beeindruckendsten architektonischen Leistungen mit atemberaubenden Bildern und überzeugenden Geschichten.',

    // CTA Section
    'architecture.cta.title': 'Bereit, Ihre architektonische Vision zu präsentieren?',
    'architecture.cta.description': 'Erstellen Sie eine professionelle Online-Präsenz, die Ihre Designexzellenz hervorhebt und Ihr Unternehmen wachsen lässt.',
    'architecture.cta.button': 'Beginnen Sie noch heute',
  },
  fr: {
    // Hero Section
    'architecture.hero.title': 'Conception Architecturale Innovante',
    'architecture.hero.description': 'Créez un portfolio en ligne impressionnant qui met en valeur votre vision architecturale et attire de nouveaux clients.',
    'architecture.hero.button': 'Commencer',

    // Features Section
    'architecture.features.portfolio.title': 'Portfolio de Projets',
    'architecture.features.portfolio.description': 'Présentez vos meilleurs projets architecturaux avec des images de haute qualité et des descriptions détaillées.',
    
    'architecture.features.services.title': 'Services de Conception',
    'architecture.features.services.description': 'Mettez en avant votre gamme de services architecturaux, du concept à la réalisation.',
    
    'architecture.features.approach.title': 'Approche de Conception',
    'architecture.features.approach.description': 'Communiquez votre philosophie architecturale unique et vos pratiques de conception durable.',
    
    'architecture.features.team.title': 'Équipe d\'Experts',
    'architecture.features.team.description': 'Présentez vos architectes et designers talentueux pour établir la confiance avec les clients potentiels.',

    // Add the missing projects keys
    'architecture.features.projects.title': 'Projets en Vedette',
    'architecture.features.projects.description': 'Présentez vos réalisations architecturales les plus impressionnantes avec des visuels époustouflants et des histoires captivantes.',

    // CTA Section
    'architecture.cta.title': 'Prêt à présenter votre vision architecturale?',
    'architecture.cta.description': 'Créez une présence en ligne professionnelle qui met en valeur l\'excellence de votre design et développe votre cabinet.',
    'architecture.cta.button': 'Commencez à construire aujourd\'hui',
  },
  it: {
    // Hero Section
    'architecture.hero.title': 'Design Architettonico Innovativo',
    'architecture.hero.description': 'Crea un portfolio online straordinario che metta in mostra la tua visione architettonica e attragga nuovi clienti.',
    'architecture.hero.button': 'Inizia ora',

    // Features Section
    'architecture.features.portfolio.title': 'Portfolio Progetti',
    'architecture.features.portfolio.description': 'Metti in mostra i tuoi migliori progetti architettonici con immagini di alta qualità e descrizioni dettagliate.',
    
    'architecture.features.services.title': 'Servizi di Design',
    'architecture.features.services.description': 'Evidenzia la tua gamma di servizi architettonici dal concetto al completamento.',
    
    'architecture.features.approach.title': 'Approccio al Design',
    'architecture.features.approach.description': 'Comunica la tua filosofia architettonica unica e le pratiche di design sostenibile.',
    
    'architecture.features.team.title': 'Team di Esperti',
    'architecture.features.team.description': 'Presenta i tuoi architetti e designer di talento per costruire fiducia con potenziali clienti.',

    // Add the missing projects keys
    'architecture.features.projects.title': 'Progetti in Evidenza',
    'architecture.features.projects.description': 'Mostra i tuoi risultati architettonici più impressionanti con immagini straordinarie e storie avvincenti.',

    // CTA Section
    'architecture.cta.title': 'Pronto a mostrare la tua visione architettonica?',
    'architecture.cta.description': 'Crea una presenza online professionale che evidenzi l\'eccellenza del tuo design e faccia crescere il tuo studio.',
    'architecture.cta.button': 'Inizia a costruire oggi',
  },
}; 