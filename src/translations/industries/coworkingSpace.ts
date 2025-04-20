import { Language } from '../../contexts/LanguageContext';

// Define a type for each set of translations
type TranslationSet = Record<string, string>;

// Define a type for all language translations
type LanguageTranslations = Record<Language, TranslationSet>;

// Translations organized by language
export const coworkingSpaceTranslations: LanguageTranslations = {
  en: {
    // Hero section
    'coworkingSpace.hero.title': 'Create a Stunning Website for Your Coworking Space',
    'coworkingSpace.hero.description': 'Attract digital nomads and local professionals with an engaging website that showcases your unique workspace and community.',
    'coworkingSpace.hero.button': 'Start Building Your Site',
    'coworkingSpace.hero.cta': 'Start Building Your Site',

    // Features section
    'coworkingSpace.features.workspace.title': 'Showcase Your Workspace',
    'coworkingSpace.features.workspace.description': 'Display your modern facilities, meeting rooms, and collaborative spaces that foster productivity and innovation.',

    'coworkingSpace.features.amenities.title': 'Highlight Your Amenities',
    'coworkingSpace.features.amenities.description': 'Feature the perks that make your space special — from high-speed internet to coffee bars, relaxation areas, and networking events.',

    'coworkingSpace.features.membership.title': 'Promote Membership Plans',
    'coworkingSpace.features.membership.description': 'Present your pricing options, from drop-in passes to dedicated desks and private offices, making it easy for prospects to find their fit.',

    'coworkingSpace.features.community.title': 'Build Your Community',
    'coworkingSpace.features.community.description': 'Share your community values, showcase member stories, and promote upcoming events to foster connection.',
    
    // Add the missing spaces keys
    'coworkingSpace.features.spaces.title': 'Flexible Work Environments',
    'coworkingSpace.features.spaces.description': 'Highlight your diverse range of spaces, from quiet focus zones to collaborative areas designed for productivity and creativity.',

    // CTA section
    'coworkingSpace.cta.title': 'Ready to Attract More Members to Your Coworking Space?',
    'coworkingSpace.cta.description': 'Create a professional website that reflects your brand and helps fill your desks.',
    'coworkingSpace.cta.button': 'Build Your Coworking Site'
  },
  de: {
    // Hero section
    'coworkingSpace.hero.title': 'Erstellen Sie eine beeindruckende Website für Ihren Coworking Space',
    'coworkingSpace.hero.description': 'Ziehen Sie digitale Nomaden und lokale Fachleute mit einer ansprechenden Website an, die Ihren einzigartigen Arbeitsraum und Ihre Gemeinschaft präsentiert.',
    'coworkingSpace.hero.button': 'Beginnen Sie mit dem Aufbau Ihrer Website',
    'coworkingSpace.hero.cta': 'Beginnen Sie mit dem Aufbau Ihrer Website',

    // Features section
    'coworkingSpace.features.workspace.title': 'Präsentieren Sie Ihren Arbeitsbereich',
    'coworkingSpace.features.workspace.description': 'Zeigen Sie Ihre modernen Einrichtungen, Besprechungsräume und Gemeinschaftsbereiche, die Produktivität und Innovation fördern.',

    'coworkingSpace.features.amenities.title': 'Heben Sie Ihre Annehmlichkeiten hervor',
    'coworkingSpace.features.amenities.description': 'Stellen Sie die Vorteile vor, die Ihren Raum besonders machen — von Hochgeschwindigkeits-Internet bis hin zu Kaffeebars, Entspannungsbereichen und Networking-Events.',

    'coworkingSpace.features.membership.title': 'Bewerben Sie Ihre Mitgliedschaftspläne',
    'coworkingSpace.features.membership.description': 'Präsentieren Sie Ihre Preisoptionen, von Tagestickets bis hin zu festen Schreibtischen und privaten Büros, damit Interessenten leicht das Passende finden.',

    'coworkingSpace.features.community.title': 'Bauen Sie Ihre Gemeinschaft auf',
    'coworkingSpace.features.community.description': 'Teilen Sie Ihre Gemeinschaftswerte, präsentieren Sie Mitgliedergeschichten und bewerben Sie kommende Veranstaltungen, um Verbindungen zu fördern.',
    
    // Add the missing spaces keys
    'coworkingSpace.features.spaces.title': 'Flexible Arbeitsumgebungen',
    'coworkingSpace.features.spaces.description': 'Zeigen Sie Ihre vielfältigen Räumlichkeiten, von ruhigen Fokusbereichen bis hin zu Gemeinschaftsbereichen, die für Produktivität und Kreativität konzipiert sind.',

    // CTA section
    'coworkingSpace.cta.title': 'Bereit, mehr Mitglieder für Ihren Coworking Space zu gewinnen?',
    'coworkingSpace.cta.description': 'Erstellen Sie eine professionelle Website, die Ihre Marke widerspiegelt und hilft, Ihre Schreibtische zu füllen.',
    'coworkingSpace.cta.button': 'Erstellen Sie Ihre Coworking-Website'
  },
  fr: {
    // Hero section
    'coworkingSpace.hero.title': 'Créez un site web impressionnant pour votre espace de coworking',
    'coworkingSpace.hero.description': 'Attirez les nomades numériques et les professionnels locaux avec un site web attrayant qui met en valeur votre espace de travail unique et votre communauté.',
    'coworkingSpace.hero.button': 'Commencer à construire votre site',
    'coworkingSpace.hero.cta': 'Commencer à construire votre site',

    // Features section
    'coworkingSpace.features.workspace.title': 'Mettez en valeur votre espace de travail',
    'coworkingSpace.features.workspace.description': 'Présentez vos installations modernes, salles de réunion et espaces collaboratifs qui favorisent la productivité et l\'innovation.',

    'coworkingSpace.features.amenities.title': 'Soulignez vos commodités',
    'coworkingSpace.features.amenities.description': 'Mettez en avant les avantages qui rendent votre espace spécial — de l\'internet haut débit aux cafés, espaces de détente et événements de réseautage.',

    'coworkingSpace.features.membership.title': 'Promouvez vos formules d\'adhésion',
    'coworkingSpace.features.membership.description': 'Présentez vos options tarifaires, des pass journaliers aux bureaux dédiés et bureaux privés, pour que les prospects trouvent facilement ce qui leur convient.',

    'coworkingSpace.features.community.title': 'Construisez votre communauté',
    'coworkingSpace.features.community.description': 'Partagez vos valeurs communautaires, présentez les témoignages des membres et promouvez les événements à venir pour favoriser les connexions.',
    
    // Add the missing spaces keys
    'coworkingSpace.features.spaces.title': 'Environnements de travail flexibles',
    'coworkingSpace.features.spaces.description': 'Mettez en valeur votre diversité d\'espaces, des zones calmes de concentration aux espaces collaboratifs conçus pour la productivité et la créativité.',

    // CTA section
    'coworkingSpace.cta.title': 'Prêt à attirer plus de membres dans votre espace de coworking ?',
    'coworkingSpace.cta.description': 'Créez un site web professionnel qui reflète votre marque et aide à remplir vos bureaux.',
    'coworkingSpace.cta.button': 'Construire votre site de coworking'
  },
  it: {
    // Hero section
    'coworkingSpace.hero.title': 'Crea un sito web straordinario per il tuo spazio di coworking',
    'coworkingSpace.hero.description': 'Attira nomadi digitali e professionisti locali con un sito web coinvolgente che mette in mostra il tuo spazio di lavoro unico e la tua comunità.',
    'coworkingSpace.hero.button': 'Inizia a costruire il tuo sito',
    'coworkingSpace.hero.cta': 'Inizia a costruire il tuo sito',

    // Features section
    'coworkingSpace.features.workspace.title': 'Metti in mostra il tuo spazio di lavoro',
    'coworkingSpace.features.workspace.description': 'Mostra le tue strutture moderne, sale riunioni e spazi collaborativi che favoriscono la produttività e l\'innovazione.',

    'coworkingSpace.features.amenities.title': 'Evidenzia i tuoi servizi',
    'coworkingSpace.features.amenities.description': 'Presenta i vantaggi che rendono il tuo spazio speciale — dalla connessione internet ad alta velocità ai bar caffè, aree relax ed eventi di networking.',

    'coworkingSpace.features.membership.title': 'Promuovi i tuoi piani di abbonamento',
    'coworkingSpace.features.membership.description': 'Presenta le tue opzioni di prezzo, dai pass giornalieri alle scrivanie dedicate e uffici privati, rendendo facile per i potenziali clienti trovare la soluzione più adatta.',

    'coworkingSpace.features.community.title': 'Costruisci la tua comunità',
    'coworkingSpace.features.community.description': 'Condividi i valori della tua comunità, mostra le storie dei membri e promuovi i prossimi eventi per favorire le connessioni.',
    
    // Add the missing spaces keys
    'coworkingSpace.features.spaces.title': 'Ambienti di lavoro flessibili',
    'coworkingSpace.features.spaces.description': 'Metti in evidenza la tua varietà di spazi, dalle zone tranquille per la concentrazione alle aree collaborative progettate per la produttività e la creatività.',

    // CTA section
    'coworkingSpace.cta.title': 'Pronto ad attirare più membri nel tuo spazio di coworking?',
    'coworkingSpace.cta.description': 'Crea un sito web professionale che rifletta il tuo marchio e aiuti a riempire le tue scrivanie.',
    'coworkingSpace.cta.button': 'Costruisci il tuo sito di coworking'
  }
}; 