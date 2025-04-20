import { Language } from '../../contexts/LanguageContext';

type TranslationSet = Record<string, string>;
type LanguageTranslations = Record<Language, TranslationSet>;

export const questionnaireGoalsFeaturesTranslations: LanguageTranslations = {
  en: {
    // Goals & Features Step
    'questionnaire.goals.title': 'Goals & Features',
    'questionnaire.goals.subtitle': 'What do you want to achieve with your website?',
    'questionnaire.goals.primary.title': 'Primary Goal',
    'questionnaire.goals.secondary.title': 'Secondary Goals',
    'questionnaire.goals.features.title': 'Features',
    
    // Primary Goals
    'questionnaire.goals.primary.branding.label': 'Brand Awareness',
    'questionnaire.goals.primary.branding.description': 'Establish and promote your brand identity',
    'questionnaire.goals.primary.leads.label': 'Generate Leads',
    'questionnaire.goals.primary.leads.description': 'Capture potential customer information',
    'questionnaire.goals.primary.sales.label': 'Increase Sales',
    'questionnaire.goals.primary.sales.description': 'Sell products or services online',
    'questionnaire.goals.primary.information.label': 'Share Information',
    'questionnaire.goals.primary.information.description': 'Provide company and service details',

    // Secondary Goals
    'questionnaire.goals.secondary.credibility.label': 'Build Credibility',
    'questionnaire.goals.secondary.credibility.description': 'Establish trust and authority',
    'questionnaire.goals.secondary.community.label': 'Build Community',
    'questionnaire.goals.secondary.community.description': 'Engage with customers and followers',
    'questionnaire.goals.secondary.support.label': 'Customer Support',
    'questionnaire.goals.secondary.support.description': 'Provide help and assistance',
    'questionnaire.goals.secondary.recruitment.label': 'Recruitment',
    'questionnaire.goals.secondary.recruitment.description': 'Attract potential employees',

    // Features
    'questionnaire.features.contactForm.label': 'Contact form',
    'questionnaire.features.contactForm.description': 'Lead capture and customer inquiry system',
    'questionnaire.features.onlineBooking.label': 'Online booking/scheduling',
    'questionnaire.features.onlineBooking.description': 'Appointment scheduling and management',
    'questionnaire.features.ecommerce.label': 'E-commerce/online store',
    'questionnaire.features.ecommerce.description': 'Product catalog and online shopping',
    'questionnaire.features.portfolio.label': 'Portfolio/gallery',
    'questionnaire.features.portfolio.description': 'Showcase of past work and projects',
    'questionnaire.features.blog.label': 'Blog',
    'questionnaire.features.blog.description': 'News, articles, and industry insights',
    'questionnaire.features.members.label': 'Membership area',
    'questionnaire.features.members.description': 'Private content and user accounts',
    'questionnaire.features.newsletter.label': 'Newsletter signup',
    'questionnaire.features.newsletter.description': 'Email marketing integration',
    'questionnaire.features.social.label': 'Social media integration',
    'questionnaire.features.social.description': 'Social sharing and feeds',
    'questionnaire.features.multilingual.label': 'Multiple languages',
    'questionnaire.features.multilingual.description': 'Support for multiple languages',
  },
  de: {
    // Goals & Features Step
    'questionnaire.goals.title': 'Ziele & Funktionen',
    'questionnaire.goals.subtitle': 'Helfen Sie uns zu verstehen, was Sie erreichen möchten',
    'questionnaire.goals.primary.title': 'Primäres Ziel',
    'questionnaire.goals.secondary.title': 'Sekundäre Ziele',
    'questionnaire.goals.features.title': 'Funktionen',
    
    // Primary Goals
    'questionnaire.goals.primary.branding.label': 'Markenbekanntheit',
    'questionnaire.goals.primary.branding.description': 'Ihre Markenidentität etablieren und fördern',
    'questionnaire.goals.primary.leads.label': 'Leads generieren',
    'questionnaire.goals.primary.leads.description': 'Informationen potenzieller Kunden erfassen',
    'questionnaire.goals.primary.sales.label': 'Umsatz steigern',
    'questionnaire.goals.primary.sales.description': 'Produkte oder Dienstleistungen online verkaufen',
    'questionnaire.goals.primary.information.label': 'Informationen teilen',
    'questionnaire.goals.primary.information.description': 'Unternehmens- und Servicedetails bereitstellen',

    // Secondary Goals
    'questionnaire.goals.secondary.credibility.label': 'Glaubwürdigkeit aufbauen',
    'questionnaire.goals.secondary.credibility.description': 'Vertrauen und Autorität etablieren',
    'questionnaire.goals.secondary.community.label': 'Community aufbauen',
    'questionnaire.goals.secondary.community.description': 'Mit Kunden und Followern interagieren',
    'questionnaire.goals.secondary.support.label': 'Kundensupport',
    'questionnaire.goals.secondary.support.description': 'Hilfe und Unterstützung anbieten',
    'questionnaire.goals.secondary.recruitment.label': 'Personalbeschaffung',
    'questionnaire.goals.secondary.recruitment.description': 'Potenzielle Mitarbeiter anziehen',

    // Features
    'questionnaire.features.contactForm.label': 'Kontaktformular',
    'questionnaire.features.contactForm.description': 'Lead-Erfassung und Kundenanfragesystem',
    'questionnaire.features.onlineBooking.label': 'Online-Buchung/Terminplanung',
    'questionnaire.features.onlineBooking.description': 'Terminplanung und -verwaltung',
    'questionnaire.features.ecommerce.label': 'E-Commerce/Online-Shop',
    'questionnaire.features.ecommerce.description': 'Produktkatalog und Online-Shopping',
    'questionnaire.features.portfolio.label': 'Portfolio/Galerie',
    'questionnaire.features.portfolio.description': 'Präsentation von früheren Arbeiten und Projekten',
    'questionnaire.features.blog.label': 'Blog',
    'questionnaire.features.blog.description': 'Neuigkeiten, Artikel und Brancheneinblicke',
    'questionnaire.features.members.label': 'Mitgliederbereich',
    'questionnaire.features.members.description': 'Private Inhalte und Benutzerkonten',
    'questionnaire.features.newsletter.label': 'Newsletter-Anmeldung',
    'questionnaire.features.newsletter.description': 'E-Mail-Marketing-Integration',
    'questionnaire.features.social.label': 'Social-Media-Integration',
    'questionnaire.features.social.description': 'Soziales Teilen und Feeds',
    'questionnaire.features.multilingual.label': 'Mehrsprachigkeit',
    'questionnaire.features.multilingual.description': 'Unterstützung für mehrere Sprachen',
  },
  fr: {
    // Goals & Features Step
    'questionnaire.goals.title': 'Objectifs & Fonctionnalités',
    'questionnaire.goals.subtitle': 'Aidez-nous à comprendre ce que vous souhaitez accomplir',
    'questionnaire.goals.primary.title': 'Objectif Principal',
    'questionnaire.goals.secondary.title': 'Objectifs Secondaires',
    'questionnaire.goals.features.title': 'Fonctionnalités',
    
    // Primary Goals
    'questionnaire.goals.primary.branding.label': 'Notoriété de la marque',
    'questionnaire.goals.primary.branding.description': 'Établir et promouvoir votre identité de marque',
    'questionnaire.goals.primary.leads.label': 'Générer des prospects',
    'questionnaire.goals.primary.leads.description': 'Capturer les informations des clients potentiels',
    'questionnaire.goals.primary.sales.label': 'Augmenter les ventes',
    'questionnaire.goals.primary.sales.description': 'Vendre des produits ou services en ligne',
    'questionnaire.goals.primary.information.label': 'Partager des informations',
    'questionnaire.goals.primary.information.description': 'Fournir des détails sur l\'entreprise et les services',

    // Secondary Goals
    'questionnaire.goals.secondary.credibility.label': 'Établir la crédibilité',
    'questionnaire.goals.secondary.credibility.description': 'Établir la confiance et l\'autorité',
    'questionnaire.goals.secondary.community.label': 'Construire une communauté',
    'questionnaire.goals.secondary.community.description': 'Interagir avec les clients et les suiveurs',
    'questionnaire.goals.secondary.support.label': 'Support client',
    'questionnaire.goals.secondary.support.description': 'Fournir de l\'aide et de l\'assistance',
    'questionnaire.goals.secondary.recruitment.label': 'Recrutement',
    'questionnaire.goals.secondary.recruitment.description': 'Attirer des employés potentiels',

    // Features
    'questionnaire.features.contactForm.label': 'Formulaire de contact',
    'questionnaire.features.contactForm.description': 'Système de capture de leads et de demandes clients',
    'questionnaire.features.onlineBooking.label': 'Réservation/planification en ligne',
    'questionnaire.features.onlineBooking.description': 'Planification et gestion des rendez-vous',
    'questionnaire.features.ecommerce.label': 'E-commerce/boutique en ligne',
    'questionnaire.features.ecommerce.description': 'Catalogue de produits et achats en ligne',
    'questionnaire.features.portfolio.label': 'Portfolio/galerie',
    'questionnaire.features.portfolio.description': 'Présentation des travaux et projets passés',
    'questionnaire.features.blog.label': 'Blog',
    'questionnaire.features.blog.description': 'Actualités, articles et perspectives de l\'industrie',
    'questionnaire.features.members.label': 'Espace membres',
    'questionnaire.features.members.description': 'Contenu privé et comptes utilisateurs',
    'questionnaire.features.newsletter.label': 'Inscription à la newsletter',
    'questionnaire.features.newsletter.description': 'Intégration marketing par e-mail',
    'questionnaire.features.social.label': 'Intégration des médias sociaux',
    'questionnaire.features.social.description': 'Partage social et flux',
    'questionnaire.features.multilingual.label': 'Multilingue',
    'questionnaire.features.multilingual.description': 'Support pour plusieurs langues',
  },
  it: {
    // Goals & Features Step
    'questionnaire.goals.title': 'Obiettivi & Funzionalità',
    'questionnaire.goals.subtitle': 'Cosa vuoi ottenere con il tuo sito web?',
    'questionnaire.goals.primary.title': 'Obiettivo Principale',
    'questionnaire.goals.secondary.title': 'Obiettivi Secondari',
    'questionnaire.goals.features.title': 'Funzionalità',
    
    // Primary Goals
    'questionnaire.goals.primary.branding.label': 'Riconoscibilità del marchio',
    'questionnaire.goals.primary.branding.description': 'Stabilire e promuovere la tua identità di marca',
    'questionnaire.goals.primary.leads.label': 'Generare contatti',
    'questionnaire.goals.primary.leads.description': 'Raccogliere informazioni sui potenziali clienti',
    'questionnaire.goals.primary.sales.label': 'Aumentare le vendite',
    'questionnaire.goals.primary.sales.description': 'Vendere prodotti o servizi online',
    'questionnaire.goals.primary.information.label': 'Condividere informazioni',
    'questionnaire.goals.primary.information.description': 'Fornire dettagli sull\'azienda e sui servizi',

    // Secondary Goals
    'questionnaire.goals.secondary.credibility.label': 'Costruire credibilità',
    'questionnaire.goals.secondary.credibility.description': 'Stabilire fiducia e autorità',
    'questionnaire.goals.secondary.community.label': 'Costruire una comunità',
    'questionnaire.goals.secondary.community.description': 'Interagire con clienti e follower',
    'questionnaire.goals.secondary.support.label': 'Supporto clienti',
    'questionnaire.goals.secondary.support.description': 'Fornire aiuto e assistenza',
    'questionnaire.goals.secondary.recruitment.label': 'Reclutamento',
    'questionnaire.goals.secondary.recruitment.description': 'Attrarre potenziali dipendenti',

    // Features
    'questionnaire.features.contactForm.label': 'Modulo di contatto',
    'questionnaire.features.contactForm.description': 'Sistema di acquisizione lead e richieste clienti',
    'questionnaire.features.onlineBooking.label': 'Prenotazione/pianificazione online',
    'questionnaire.features.onlineBooking.description': 'Pianificazione e gestione degli appuntamenti',
    'questionnaire.features.ecommerce.label': 'E-commerce/negozio online',
    'questionnaire.features.ecommerce.description': 'Catalogo prodotti e acquisti online',
    'questionnaire.features.portfolio.label': 'Portfolio/galleria',
    'questionnaire.features.portfolio.description': 'Vetrina di lavori e progetti passati',
    'questionnaire.features.blog.label': 'Blog',
    'questionnaire.features.blog.description': 'Notizie, articoli e approfondimenti del settore',
    'questionnaire.features.members.label': 'Area membri',
    'questionnaire.features.members.description': 'Contenuti privati e account utente',
    'questionnaire.features.newsletter.label': 'Iscrizione alla newsletter',
    'questionnaire.features.newsletter.description': 'Integrazione con email marketing',
    'questionnaire.features.social.label': 'Integrazione social media',
    'questionnaire.features.social.description': 'Condivisione sociale e feed',
    'questionnaire.features.multilingual.label': 'Multilingue',
    'questionnaire.features.multilingual.description': 'Supporto per più lingue',
  },
}; 