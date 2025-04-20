import { Language } from '../../contexts/LanguageContext';

type TranslationSet = Record<string, string>;
type LanguageTranslations = Record<Language, TranslationSet>;

export const cafeTranslations: LanguageTranslations = {
  en: {
    // Hero section
    'cafe.hero.title': 'Inviting Websites for Cafes & Coffee Shops',
    'cafe.hero.description': 'Create a warm online presence that showcases your cafe\'s unique ambiance and attracts coffee enthusiasts.',
    'cafe.hero.button': 'Build Your Cafe Website',
    
    // Features section
    'cafe.features.menu.title': 'Coffee & Food Menu',
    'cafe.features.menu.description': 'Display your complete menu of coffee specialties, beverages, and food offerings with enticing descriptions.',
    
    'cafe.features.atmosphere.title': 'Cafe Atmosphere',
    'cafe.features.atmosphere.description': 'Showcase your cafe\'s unique ambiance, decor, and comfortable seating areas with a visual gallery.',
    
    'cafe.features.events.title': 'Events & Gatherings',
    'cafe.features.events.description': 'Promote special events, live music, open mic nights, and other gatherings hosted at your cafe.',
    
    'cafe.features.beans.title': 'Coffee Bean Selection',
    'cafe.features.beans.description': 'Highlight your coffee bean varieties, roasting process, and commitment to quality and sustainability.',
    
    // CTA section
    'cafe.cta.title': 'Ready to Grow Your Cafe Business?',
    'cafe.cta.description': 'Join successful cafes who have increased foot traffic with our professional websites.',
    'cafe.cta.button': 'Start Your Cafe Website',
  },
  
  de: {
    // Hero section
    'cafe.hero.title': 'Einladende Websites für Cafés & Kaffeehäuser',
    'cafe.hero.description': 'Erstellen Sie eine warme Online-Präsenz, die die einzigartige Atmosphäre Ihres Cafés präsentiert und Kaffeeliebhaber anzieht.',
    'cafe.hero.button': 'Erstellen Sie Ihre Café-Website',
    
    // Features section
    'cafe.features.menu.title': 'Kaffee- & Speisekarte',
    'cafe.features.menu.description': 'Zeigen Sie Ihre komplette Auswahl an Kaffeespezialitäten, Getränken und Speisen mit verlockenden Beschreibungen an.',
    
    'cafe.features.atmosphere.title': 'Café-Atmosphäre',
    'cafe.features.atmosphere.description': 'Präsentieren Sie die einzigartige Atmosphäre, Dekoration und gemütliche Sitzbereiche Ihres Cafés mit einer visuellen Galerie.',
    
    'cafe.features.events.title': 'Veranstaltungen & Treffen',
    'cafe.features.events.description': 'Bewerben Sie besondere Veranstaltungen, Live-Musik, Open-Mic-Abende und andere Treffen in Ihrem Café.',
    
    'cafe.features.beans.title': 'Kaffeebohnen-Auswahl',
    'cafe.features.beans.description': 'Heben Sie Ihre Kaffeebohnensorten, den Röstprozess und Ihr Engagement für Qualität und Nachhaltigkeit hervor.',
    
    // CTA section
    'cafe.cta.title': 'Bereit, Ihr Café-Geschäft zu erweitern?',
    'cafe.cta.description': 'Schliessen Sie sich erfolgreichen Cafés an, die mit unseren professionellen Websites mehr Laufkundschaft gewonnen haben.',
    'cafe.cta.button': 'Starten Sie Ihre Café-Website',
  },
  
  fr: {
    // Hero section
    'cafe.hero.title': 'Sites Web Accueillants pour Cafés',
    'cafe.hero.description': 'Créez une présence en ligne chaleureuse qui met en valeur l\'ambiance unique de votre café et attire les amateurs de café.',
    'cafe.hero.button': 'Créez Votre Site Web de Café',
    
    // Features section
    'cafe.features.menu.title': 'Menu Café & Restauration',
    'cafe.features.menu.description': 'Affichez votre menu complet de spécialités de café, de boissons et d\'offres alimentaires avec des descriptions attrayantes.',
    
    'cafe.features.atmosphere.title': 'Ambiance du Café',
    'cafe.features.atmosphere.description': 'Présentez l\'ambiance unique, la décoration et les espaces confortables de votre café avec une galerie visuelle.',
    
    'cafe.features.events.title': 'Événements & Rassemblements',
    'cafe.features.events.description': 'Promouvez des événements spéciaux, de la musique live, des soirées micro ouvert et autres rassemblements organisés dans votre café.',
    
    'cafe.features.beans.title': 'Sélection de Grains de Café',
    'cafe.features.beans.description': 'Mettez en avant vos variétés de grains de café, le processus de torréfaction et votre engagement envers la qualité et la durabilité.',
    
    // CTA section
    'cafe.cta.title': 'Prêt à Développer Votre Activité de Café?',
    'cafe.cta.description': 'Rejoignez les cafés prospères qui ont augmenté leur fréquentation grâce à nos sites web professionnels.',
    'cafe.cta.button': 'Commencez Votre Site Web de Café',
  },
  
  it: {
    // Hero section
    'cafe.hero.title': 'Siti Web Invitanti per Caffè e Bar',
    'cafe.hero.description': 'Crea una presenza online accogliente che mostri l\'atmosfera unica del tuo caffè e attiri gli appassionati di caffè.',
    'cafe.hero.button': 'Crea il Tuo Sito Web per Caffè',
    
    // Features section
    'cafe.features.menu.title': 'Menu Caffè e Cibo',
    'cafe.features.menu.description': 'Mostra il tuo menu completo di specialità di caffè, bevande e offerte alimentari con descrizioni invitanti.',
    
    'cafe.features.atmosphere.title': 'Atmosfera del Caffè',
    'cafe.features.atmosphere.description': 'Metti in mostra l\'atmosfera unica, l\'arredamento e le comode aree di seduta del tuo caffè con una galleria visiva.',
    
    'cafe.features.events.title': 'Eventi e Incontri',
    'cafe.features.events.description': 'Promuovi eventi speciali, musica dal vivo, serate open mic e altri incontri ospitati nel tuo caffè.',
    
    'cafe.features.beans.title': 'Selezione di Chicchi di Caffè',
    'cafe.features.beans.description': 'Evidenzia le tue varietà di chicchi di caffè, il processo di tostatura e l\'impegno per la qualità e la sostenibilità.',
    
    // CTA section
    'cafe.cta.title': 'Pronto a Far Crescere la Tua Attività di Caffè?',
    'cafe.cta.description': 'Unisciti ai caffè di successo che hanno aumentato l\'afflusso di clienti con i nostri siti web professionali.',
    'cafe.cta.button': 'Inizia il Tuo Sito Web per Caffè',
  }
}; 