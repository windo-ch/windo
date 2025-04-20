import { Language } from '../../contexts/LanguageContext';

type TranslationSet = Record<string, string>;
type LanguageTranslations = Record<Language, TranslationSet>;

export const hotelTranslations: LanguageTranslations = {
  en: {
    // Hero section
    'hotel.hero.title': 'Elegant Websites for Hotels & Accommodations',
    'hotel.hero.description': 'Create a sophisticated online presence that showcases your hotel\'s unique experience and encourages direct bookings.',
    'hotel.hero.cta': 'Build Your Hotel Website',
    'hotel.hero.button': 'Build Your Hotel Website',
    
    // Features section
    'hotel.features.rooms.title': 'Room Showcase',
    'hotel.features.rooms.description': 'Display your rooms and suites with stunning photography, detailed descriptions, and clear pricing information.',
    
    'hotel.features.amenities.title': 'Hotel Amenities',
    'hotel.features.amenities.description': 'Highlight your property\'s amenities, from pools and spas to restaurants and business facilities.',
    
    'hotel.features.booking.title': 'Online Booking',
    'hotel.features.booking.description': 'Enable guests to check availability and book rooms directly through your website with a seamless reservation system.',
    
    'hotel.features.experience.title': 'Guest Experience',
    'hotel.features.experience.description': 'Showcase nearby attractions, local activities, and concierge services to enhance the guest experience.',
    
    'hotel.features.dining.title': 'Fine Dining Experience',
    'hotel.features.dining.description': 'Highlight your restaurants, bars, and unique culinary offerings that make your hotel a gastronomic destination.',
    
    'hotel.features.location.title': 'Prime Location',
    'hotel.features.location.description': 'Showcase your hotel\'s convenient location and proximity to attractions, business districts, and transportation options.',
    
    // CTA section
    'hotel.cta.title': 'Ready to Boost Your Hotel\'s Online Presence?',
    'hotel.cta.description': 'Join successful hotels who have increased direct bookings with our professional websites.',
    'hotel.cta.button': 'Start Your Hotel Website',
  },
  
  de: {
    // Hero section
    'hotel.hero.title': 'Elegante Websites für Hotels & Unterkünfte',
    'hotel.hero.description': 'Erstellen Sie eine anspruchsvolle Online-Präsenz, die das einzigartige Erlebnis Ihres Hotels präsentiert und direkte Buchungen fördert.',
    'hotel.hero.cta': 'Erstellen Sie Ihre Hotel-Website',
    'hotel.hero.button': 'Erstellen Sie Ihre Hotel-Website',
    
    // Features section
    'hotel.features.rooms.title': 'Zimmerübersicht',
    'hotel.features.rooms.description': 'Präsentieren Sie Ihre Zimmer und Suiten mit beeindruckenden Fotos, detaillierten Beschreibungen und transparenten Preisinformationen.',
    
    'hotel.features.amenities.title': 'Hotel-Annehmlichkeiten',
    'hotel.features.amenities.description': 'Heben Sie die Annehmlichkeiten Ihrer Immobilie hervor, von Pools und Spas bis hin zu Restaurants und Geschäftseinrichtungen.',
    
    'hotel.features.booking.title': 'Online-Buchung',
    'hotel.features.booking.description': 'Ermöglichen Sie Gästen, die Verfügbarkeit zu prüfen und Zimmer direkt über Ihre Website mit einem reibungslosen Reservierungssystem zu buchen.',
    
    'hotel.features.experience.title': 'Gästeerlebnis',
    'hotel.features.experience.description': 'Präsentieren Sie nahegelegene Attraktionen, lokale Aktivitäten und Concierge-Services, um das Gästeerlebnis zu verbessern.',
    
    'hotel.features.dining.title': 'Exquisite Gastronomie',
    'hotel.features.dining.description': 'Heben Sie Ihre Restaurants, Bars und einzigartigen kulinarischen Angebote hervor, die Ihr Hotel zu einem gastronomischen Ziel machen.',
    
    'hotel.features.location.title': 'Erstklassige Lage',
    'hotel.features.location.description': 'Präsentieren Sie die günstige Lage Ihres Hotels und die Nähe zu Sehenswürdigkeiten, Geschäftsvierteln und Verkehrsanbindungen.',
    
    // CTA section
    'hotel.cta.title': 'Bereit, die Online-Präsenz Ihres Hotels zu stärken?',
    'hotel.cta.description': 'Schliessen Sie sich erfolgreichen Hotels an, die mit unseren professionellen Websites ihre direkten Buchungen gesteigert haben.',
    'hotel.cta.button': 'Starten Sie Ihre Hotel-Website',
  },
  
  fr: {
    // Hero section
    'hotel.hero.title': 'Sites Web Élégants pour Hôtels et Hébergements',
    'hotel.hero.description': 'Créez une présence en ligne sophistiquée qui met en valeur l\'expérience unique de votre hôtel et encourage les réservations directes.',
    'hotel.hero.cta': 'Créez Votre Site Web d\'Hôtel',
    'hotel.hero.button': 'Créez Votre Site Web d\'Hôtel',
    
    // Features section
    'hotel.features.rooms.title': 'Présentation des Chambres',
    'hotel.features.rooms.description': 'Affichez vos chambres et suites avec des photographies magnifiques, des descriptions détaillées et des informations claires sur les prix.',
    
    'hotel.features.amenities.title': 'Équipements de l\'Hôtel',
    'hotel.features.amenities.description': 'Mettez en avant les équipements de votre propriété, des piscines et spas aux restaurants et installations d\'affaires.',
    
    'hotel.features.booking.title': 'Réservation en Ligne',
    'hotel.features.booking.description': 'Permettez aux clients de vérifier la disponibilité et de réserver des chambres directement via votre site web avec un système de réservation fluide.',
    
    'hotel.features.experience.title': 'Expérience Client',
    'hotel.features.experience.description': 'Présentez les attractions à proximité, les activités locales et les services de conciergerie pour améliorer l\'expérience des clients.',
    
    'hotel.features.dining.title': 'Expérience Gastronomique',
    'hotel.features.dining.description': 'Mettez en valeur vos restaurants, bars et offres culinaires uniques qui font de votre hôtel une destination gastronomique.',
    
    'hotel.features.location.title': 'Emplacement de Choix',
    'hotel.features.location.description': 'Mettez en avant l\'emplacement pratique de votre hôtel et sa proximité avec les attractions, les quartiers d\'affaires et les options de transport.',
    
    // CTA section
    'hotel.cta.title': 'Prêt à Booster la Présence en Ligne de Votre Hôtel?',
    'hotel.cta.description': 'Rejoignez les hôtels prospères qui ont augmenté leurs réservations directes grâce à nos sites web professionnels.',
    'hotel.cta.button': 'Commencez Votre Site Web d\'Hôtel',
  },
  
  it: {
    // Hero section
    'hotel.hero.title': 'Siti Web Eleganti per Hotel e Alloggi',
    'hotel.hero.description': 'Crea una presenza online sofisticata che mostri l\'esperienza unica del tuo hotel e incoraggi le prenotazioni dirette.',
    'hotel.hero.cta': 'Crea il Tuo Sito Web per Hotel',
    'hotel.hero.button': 'Crea il Tuo Sito Web per Hotel',
    
    // Features section
    'hotel.features.rooms.title': 'Vetrina delle Camere',
    'hotel.features.rooms.description': 'Mostra le tue camere e suite con fotografie straordinarie, descrizioni dettagliate e informazioni chiare sui prezzi.',
    
    'hotel.features.amenities.title': 'Servizi dell\'Hotel',
    'hotel.features.amenities.description': 'Metti in evidenza i servizi della tua struttura, dalle piscine e spa ai ristoranti e strutture business.',
    
    'hotel.features.booking.title': 'Prenotazione Online',
    'hotel.features.booking.description': 'Permetti agli ospiti di verificare la disponibilità e prenotare camere direttamente attraverso il tuo sito web con un sistema di prenotazione impeccabile.',
    
    'hotel.features.experience.title': 'Esperienza Ospiti',
    'hotel.features.experience.description': 'Mostra attrazioni nelle vicinanze, attività locali e servizi di concierge per migliorare l\'esperienza degli ospiti.',
    
    'hotel.features.dining.title': 'Esperienza Gastronomica',
    'hotel.features.dining.description': 'Metti in evidenza i tuoi ristoranti, bar e proposte culinarie uniche che rendono il tuo hotel una destinazione gastronomica.',
    
    'hotel.features.location.title': 'Posizione Privilegiata',
    'hotel.features.location.description': 'Metti in risalto la posizione strategica del tuo hotel e la vicinanza ad attrazioni, distretti commerciali e opzioni di trasporto.',
    
    // CTA section
    'hotel.cta.title': 'Pronto a Potenziare la Presenza Online del Tuo Hotel?',
    'hotel.cta.description': 'Unisciti agli hotel di successo che hanno aumentato le prenotazioni dirette con i nostri siti web professionali.',
    'hotel.cta.button': 'Inizia il Tuo Sito Web per Hotel',
  }
}; 