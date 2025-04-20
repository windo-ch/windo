import { Language } from '../../contexts/LanguageContext';

// Define the translation set structure
export type TranslationSet = {
  [key: string]: string;
};

// Define the language translations structure
export type LanguageTranslations = {
  [language: string]: TranslationSet;
};

// Define the translations for consulting firms
export const consultingFirmTranslations: LanguageTranslations = {
  en: {
    // Hero Section
    'consultingFirm.hero.title': 'Strategic Solutions for Business Growth',
    'consultingFirm.hero.description': 'Professional consulting services that drive meaningful transformation and results for your clients.',
    'consultingFirm.hero.button': 'Get Started',

    // Features Section
    'consultingFirm.features.strategy.title': 'Strategic Planning',
    'consultingFirm.features.strategy.description': 'Comprehensive strategic planning services to align business goals with actionable roadmaps.',
    
    'consultingFirm.features.analysis.title': 'Data Analysis',
    'consultingFirm.features.analysis.description': 'In-depth data analysis to uncover insights and drive informed decision-making.',
    
    'consultingFirm.features.implementation.title': 'Implementation Support',
    'consultingFirm.features.implementation.description': 'Expert guidance and support for successful strategy implementation and change management.',
    
    'consultingFirm.features.optimization.title': 'Process Optimization',
    'consultingFirm.features.optimization.description': 'Streamline operations and improve efficiency through targeted process improvements.',

    // CTA Section
    'consultingFirm.cta.title': 'Ready to Transform Your Clients\' Businesses?',
    'consultingFirm.cta.description': 'Create a professional online presence that showcases your expertise and attracts ideal clients.',
    'consultingFirm.cta.button': 'Start Building Today',
  },
  de: {
    // Hero Section
    'consultingFirm.hero.title': 'Strategische Lösungen für Unternehmenswachstum',
    'consultingFirm.hero.description': 'Professionelle Beratungsdienstleistungen, die bedeutsame Transformation und Ergebnisse für Ihre Kunden vorantreiben.',
    'consultingFirm.hero.button': 'Jetzt starten',

    // Features Section
    'consultingFirm.features.strategy.title': 'Strategische Planung',
    'consultingFirm.features.strategy.description': 'Umfassende strategische Planungsdienste, um Unternehmensziele mit umsetzbaren Fahrplänen abzustimmen.',
    
    'consultingFirm.features.analysis.title': 'Datenanalyse',
    'consultingFirm.features.analysis.description': 'Tiefgehende Datenanalyse zur Aufdeckung von Erkenntnissen und Förderung informierter Entscheidungsfindung.',
    
    'consultingFirm.features.implementation.title': 'Implementierungsunterstützung',
    'consultingFirm.features.implementation.description': 'Fachkundige Anleitung und Unterstützung für erfolgreiche Strategieumsetzung und Änderungsmanagement.',
    
    'consultingFirm.features.optimization.title': 'Prozessoptimierung',
    'consultingFirm.features.optimization.description': 'Optimieren Sie Abläufe und verbessern Sie die Effizienz durch gezielte Prozessverbesserungen.',

    // CTA Section
    'consultingFirm.cta.title': 'Bereit, die Unternehmen Ihrer Kunden zu transformieren?',
    'consultingFirm.cta.description': 'Erstellen Sie eine professionelle Online-Präsenz, die Ihre Expertise präsentiert und ideale Kunden anzieht.',
    'consultingFirm.cta.button': 'Beginnen Sie noch heute',
  },
  fr: {
    // Hero Section
    'consultingFirm.hero.title': 'Solutions stratégiques pour la croissance des entreprises',
    'consultingFirm.hero.description': 'Services de conseil professionnels qui favorisent une transformation significative et des résultats pour vos clients.',
    'consultingFirm.hero.button': 'Commencer',

    // Features Section
    'consultingFirm.features.strategy.title': 'Planification stratégique',
    'consultingFirm.features.strategy.description': 'Services de planification stratégique complets pour aligner les objectifs commerciaux sur des feuilles de route exploitables.',
    
    'consultingFirm.features.analysis.title': 'Analyse de données',
    'consultingFirm.features.analysis.description': 'Analyse approfondie des données pour découvrir des insights et favoriser une prise de décision éclairée.',
    
    'consultingFirm.features.implementation.title': 'Support de mise en œuvre',
    'consultingFirm.features.implementation.description': 'Conseils et soutien d\'experts pour la mise en œuvre réussie de stratégies et la gestion du changement.',
    
    'consultingFirm.features.optimization.title': 'Optimisation des processus',
    'consultingFirm.features.optimization.description': 'Rationalisez les opérations et améliorez l\'efficacité grâce à des améliorations ciblées des processus.',

    // CTA Section
    'consultingFirm.cta.title': 'Prêt à transformer les entreprises de vos clients?',
    'consultingFirm.cta.description': 'Créez une présence en ligne professionnelle qui met en valeur votre expertise et attire les clients idéaux.',
    'consultingFirm.cta.button': 'Commencez à construire aujourd\'hui',
  },
  it: {
    // Hero Section
    'consultingFirm.hero.title': 'Soluzioni strategiche per la crescita aziendale',
    'consultingFirm.hero.description': 'Servizi di consulenza professionale che guidano una trasformazione significativa e risultati per i tuoi clienti.',
    'consultingFirm.hero.button': 'Inizia ora',

    // Features Section
    'consultingFirm.features.strategy.title': 'Pianificazione strategica',
    'consultingFirm.features.strategy.description': 'Servizi di pianificazione strategica completi per allineare gli obiettivi aziendali con roadmap attuabili.',
    
    'consultingFirm.features.analysis.title': 'Analisi dei dati',
    'consultingFirm.features.analysis.description': 'Analisi approfondita dei dati per scoprire insights e guidare processi decisionali informati.',
    
    'consultingFirm.features.implementation.title': 'Supporto all\'implementazione',
    'consultingFirm.features.implementation.description': 'Guida e supporto esperti per un\'implementazione strategica di successo e la gestione del cambiamento.',
    
    'consultingFirm.features.optimization.title': 'Ottimizzazione dei processi',
    'consultingFirm.features.optimization.description': 'Razionalizza le operazioni e migliora l\'efficienza attraverso miglioramenti mirati dei processi.',

    // CTA Section
    'consultingFirm.cta.title': 'Pronto a trasformare le attività dei tuoi clienti?',
    'consultingFirm.cta.description': 'Crea una presenza online professionale che metta in mostra la tua esperienza e attiri i clienti ideali.',
    'consultingFirm.cta.button': 'Inizia a costruire oggi',
  },
}; 