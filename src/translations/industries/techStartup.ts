import { Language } from '../../contexts/LanguageContext';

type TranslationSet = Record<string, string>;
type LanguageTranslations = Record<Language, TranslationSet>;

export const techStartupTranslations: LanguageTranslations = {
  en: {
    // Hero section
    'techStartup.hero.title': 'Innovative Websites for Tech Startups',
    'techStartup.hero.description': 'Create a cutting-edge online presence that showcases your tech solution and attracts investors, partners, and users.',
    'techStartup.hero.cta': 'Build Your Tech Startup Website',
    
    // Features section
    'techStartup.features.product.title': 'Product Showcase',
    'techStartup.features.product.description': 'Highlight your software, platform, or tech solution with compelling visuals, demos, and clear value propositions.',
    
    'techStartup.features.team.title': 'Founding Team',
    'techStartup.features.team.description': 'Introduce your talented founders and team members with their expertise, background, and vision for the company.',
    
    'techStartup.features.investors.title': 'Investors & Partners',
    'techStartup.features.investors.description': 'Build credibility by featuring your investors, accelerators, and strategic partners that support your vision.',
    
    'techStartup.features.roadmap.title': 'Product Roadmap',
    'techStartup.features.roadmap.description': 'Share your vision for the future with a clear product roadmap that demonstrates growth potential.',
    
    'techStartup.features.vision.title': 'Company Vision',
    'techStartup.features.vision.description': 'Communicate your startup\'s mission, values, and long-term goals to connect with like-minded customers and investors.',
    
    'techStartup.features.funding.title': 'Funding Status',
    'techStartup.features.funding.description': 'Showcase your current funding round, investment history, and financial momentum to attract potential investors.',
    
    // CTA section
    'techStartup.cta.title': 'Ready to Accelerate Your Tech Startup?',
    'techStartup.cta.description': 'Join successful startups who have increased their visibility and user acquisition with our professional websites.',
    'techStartup.cta.button': 'Start Your Startup Website',
  },
  
  de: {
    // Hero section
    'techStartup.hero.title': 'Innovative Websites für Tech-Startups',
    'techStartup.hero.description': 'Erstellen Sie eine hochmoderne Online-Präsenz, die Ihre technologische Lösung präsentiert und Investoren, Partner und Nutzer anzieht.',
    'techStartup.hero.cta': 'Erstellen Sie Ihre Tech-Startup-Website',
    
    // Features section
    'techStartup.features.product.title': 'Produktpräsentation',
    'techStartup.features.product.description': 'Heben Sie Ihre Software, Plattform oder technologische Lösung mit überzeugenden Visualisierungen, Demos und klaren Werteversprechen hervor.',
    
    'techStartup.features.team.title': 'Gründerteam',
    'techStartup.features.team.description': 'Stellen Sie Ihre talentierten Gründer und Teammitglieder mit ihrer Expertise, ihrem Hintergrund und ihrer Vision für das Unternehmen vor.',
    
    'techStartup.features.investors.title': 'Investoren & Partner',
    'techStartup.features.investors.description': 'Bauen Sie Glaubwürdigkeit auf, indem Sie Ihre Investoren, Acceleratoren und strategischen Partner präsentieren, die Ihre Vision unterstützen.',
    
    'techStartup.features.roadmap.title': 'Produkt-Roadmap',
    'techStartup.features.roadmap.description': 'Teilen Sie Ihre Zukunftsvision mit einer klaren Produkt-Roadmap, die das Wachstumspotenzial demonstriert.',
    
    'techStartup.features.vision.title': 'Unternehmensvision',
    'techStartup.features.vision.description': 'Kommunizieren Sie die Mission, Werte und langfristigen Ziele Ihres Startups, um mit gleichgesinnten Kunden und Investoren in Verbindung zu treten.',
    
    'techStartup.features.funding.title': 'Finanzierungsstatus',
    'techStartup.features.funding.description': 'Präsentieren Sie Ihre aktuelle Finanzierungsrunde, Investitionshistorie und finanzielle Dynamik, um potenzielle Investoren anzuziehen.',
    
    // CTA section
    'techStartup.cta.title': 'Bereit, Ihr Tech-Startup zu beschleunigen?',
    'techStartup.cta.description': 'Schliessen Sie sich erfolgreichen Startups an, die mit unseren professionellen Websites ihre Sichtbarkeit und Nutzerakquise gesteigert haben.',
    'techStartup.cta.button': 'Starten Sie Ihre Startup-Website',
  },
  
  fr: {
    // Hero section
    'techStartup.hero.title': 'Sites Web Innovants pour Startups Tech',
    'techStartup.hero.description': 'Créez une présence en ligne à la pointe de la technologie qui met en valeur votre solution technologique et attire investisseurs, partenaires et utilisateurs.',
    'techStartup.hero.cta': 'Créez Votre Site Web de Startup Tech',
    
    // Features section
    'techStartup.features.product.title': 'Présentation du Produit',
    'techStartup.features.product.description': 'Mettez en avant votre logiciel, plateforme ou solution technologique avec des visuels convaincants, des démos et des propositions de valeur claires.',
    
    'techStartup.features.team.title': 'Équipe Fondatrice',
    'techStartup.features.team.description': 'Présentez vos talentueux fondateurs et membres de l\'équipe avec leur expertise, leur parcours et leur vision pour l\'entreprise.',
    
    'techStartup.features.investors.title': 'Investisseurs & Partenaires',
    'techStartup.features.investors.description': 'Établissez la crédibilité en présentant vos investisseurs, accélérateurs et partenaires stratégiques qui soutiennent votre vision.',
    
    'techStartup.features.roadmap.title': 'Feuille de Route du Produit',
    'techStartup.features.roadmap.description': 'Partagez votre vision pour l\'avenir avec une feuille de route claire du produit qui démontre le potentiel de croissance.',
    
    'techStartup.features.vision.title': 'Vision de l\'Entreprise',
    'techStartup.features.vision.description': 'Communiquez la mission, les valeurs et les objectifs à long terme de votre startup pour établir des liens avec des clients et des investisseurs partageant les mêmes idées.',
    
    'techStartup.features.funding.title': 'État du Financement',
    'techStartup.features.funding.description': 'Présentez votre cycle de financement actuel, l\'historique des investissements et la dynamique financière pour attirer des investisseurs potentiels.',
    
    // CTA section
    'techStartup.cta.title': 'Prêt à Accélérer Votre Startup Tech?',
    'techStartup.cta.description': 'Rejoignez les startups prospères qui ont augmenté leur visibilité et leur acquisition d\'utilisateurs grâce à nos sites web professionnels.',
    'techStartup.cta.button': 'Commencez Votre Site Web de Startup',
  },
  
  it: {
    // Hero section
    'techStartup.hero.title': 'Siti Web Innovativi per Startup Tecnologiche',
    'techStartup.hero.description': 'Crea una presenza online all\'avanguardia che mostri la tua soluzione tecnologica e attiri investitori, partner e utenti.',
    'techStartup.hero.cta': 'Crea il Tuo Sito Web per Startup Tecnologica',
    
    // Features section
    'techStartup.features.product.title': 'Vetrina del Prodotto',
    'techStartup.features.product.description': 'Metti in evidenza il tuo software, piattaforma o soluzione tecnologica con immagini coinvolgenti, demo e chiare proposte di valore.',
    
    'techStartup.features.team.title': 'Team Fondatore',
    'techStartup.features.team.description': 'Presenta i tuoi talentuosi fondatori e membri del team con la loro competenza, background e visione per l\'azienda.',
    
    'techStartup.features.investors.title': 'Investitori e Partner',
    'techStartup.features.investors.description': 'Costruisci credibilità presentando i tuoi investitori, acceleratori e partner strategici che supportano la tua visione.',
    
    'techStartup.features.roadmap.title': 'Roadmap del Prodotto',
    'techStartup.features.roadmap.description': 'Condividi la tua visione per il futuro con una chiara roadmap del prodotto che dimostri il potenziale di crescita.',
    
    'techStartup.features.vision.title': 'Visione Aziendale',
    'techStartup.features.vision.description': 'Comunica la missione, i valori e gli obiettivi a lungo termine della tua startup per connetterti con clienti e investitori che condividono i tuoi ideali.',
    
    'techStartup.features.funding.title': 'Stato di Finanziamento',
    'techStartup.features.funding.description': 'Mostra il tuo attuale round di finanziamento, la storia degli investimenti e lo slancio finanziario per attrarre potenziali investitori.',
    
    // CTA section
    'techStartup.cta.title': 'Pronto ad Accelerare la Tua Startup Tecnologica?',
    'techStartup.cta.description': 'Unisciti alle startup di successo che hanno aumentato la loro visibilità e acquisizione di utenti con i nostri siti web professionali.',
    'techStartup.cta.button': 'Inizia il Tuo Sito Web per Startup',
  }
}; 