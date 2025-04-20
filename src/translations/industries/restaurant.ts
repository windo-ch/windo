import { Language } from '../../contexts/LanguageContext';

type TranslationSet = Record<string, string>;
type LanguageTranslations = Record<Language, TranslationSet>;

export const restaurantTranslations: LanguageTranslations = {
  en: {
    // Hero section
    'restaurant.hero.title': 'Savor Success with Your Digital Dining Experience',
    'restaurant.hero.description': 'Create an irresistible online presence that brings your culinary vision to life and fills your tables with eager diners.',
    'restaurant.hero.cta': 'Launch Your Restaurant Website',
    
    // Features section
    'restaurant.features.menu.title': 'Menu Showcase',
    'restaurant.features.menu.description': 'Present your dishes with mouthwatering photos and detailed descriptions.',
    
    'restaurant.features.reservations.title': 'Online Reservations',
    'restaurant.features.reservations.description': 'Let guests book tables directly through your website, 24/7.',
    
    'restaurant.features.reviews.title': 'Customer Reviews',
    'restaurant.features.reviews.description': 'Showcase your best reviews and build trust with potential diners.',
    
    'restaurant.features.location.title': 'Location & Hours',
    'restaurant.features.location.description': 'Make it easy for guests to find you and know when you\'re open.',
    
    // CTA section
    'restaurant.cta.title': 'Ready to Serve Up Your Digital Success?',
    'restaurant.cta.description': 'Join successful restaurants who have transformed their business with our professional websites.',
    'restaurant.cta.button': 'Start Your Project Now',
  },
  
  de: {
    // Hero section
    'restaurant.hero.title': 'Geniessen Sie Erfolg mit Ihrem digitalen Restauranterlebnis',
    'restaurant.hero.description': 'Schaffen Sie eine unwiderstehliche Online-Präsenz, die Ihre kulinarische Vision zum Leben erweckt und Ihre Tische mit begeisterten Gästen füllt.',
    'restaurant.hero.cta': 'Starten Sie Ihre Restaurant-Website',
    
    // Features section
    'restaurant.features.menu.title': 'Menü-Präsentation',
    'restaurant.features.menu.description': 'Präsentieren Sie Ihre Gerichte mit appetitanregenden Fotos und detaillierten Beschreibungen.',
    
    'restaurant.features.reservations.title': 'Online-Reservierungen',
    'restaurant.features.reservations.description': 'Lassen Sie Gäste rund um die Uhr direkt über Ihre Website Tische reservieren.',
    
    'restaurant.features.reviews.title': 'Kundenbewertungen',
    'restaurant.features.reviews.description': 'Präsentieren Sie Ihre besten Bewertungen und bauen Sie Vertrauen bei potenziellen Gästen auf.',
    
    'restaurant.features.location.title': 'Standort & Öffnungszeiten',
    'restaurant.features.location.description': 'Erleichtern Sie es den Gästen, Sie zu finden und zu wissen, wann Sie geöffnet haben.',
    
    // CTA section
    'restaurant.cta.title': 'Bereit, Ihren digitalen Erfolg zu servieren?',
    'restaurant.cta.description': 'Schliessen Sie sich erfolgreichen Restaurants an, die ihr Geschäft mit unseren professionellen Websites transformiert haben.',
    'restaurant.cta.button': 'Starten Sie Ihr Projekt jetzt',
  },
  
  fr: {
    // Hero section
    'restaurant.hero.title': 'Savourez le Succès avec Votre Expérience Culinaire Digitale',
    'restaurant.hero.description': 'Créez une présence en ligne irrésistible qui donne vie à votre vision culinaire et remplit vos tables de convives enthousiastes.',
    'restaurant.hero.cta': 'Lancez Votre Site Web de Restaurant',
    
    // Features section
    'restaurant.features.menu.title': 'Présentation du Menu',
    'restaurant.features.menu.description': 'Présentez vos plats avec des photos appétissantes et des descriptions détaillées.',
    
    'restaurant.features.reservations.title': 'Réservations en Ligne',
    'restaurant.features.reservations.description': 'Permettez aux invités de réserver des tables directement via votre site web, 24h/24 et 7j/7.',
    
    'restaurant.features.reviews.title': 'Avis des Clients',
    'restaurant.features.reviews.description': 'Mettez en valeur vos meilleures critiques et établissez la confiance avec les clients potentiels.',
    
    'restaurant.features.location.title': 'Emplacement et Horaires',
    'restaurant.features.location.description': 'Facilitez la tâche aux clients pour vous trouver et connaître vos heures d\'ouverture.',
    
    // CTA section
    'restaurant.cta.title': 'Prêt à Servir Votre Succès Numérique?',
    'restaurant.cta.description': 'Rejoignez les restaurants qui ont transformé leur activité grâce à nos sites web professionnels.',
    'restaurant.cta.button': 'Démarrez Votre Projet Maintenant',
  },
  
  it: {
    // Hero section
    'restaurant.hero.title': 'Assapora il Successo con la Tua Esperienza Culinaria Digitale',
    'restaurant.hero.description': 'Crea una presenza online irresistibile che dia vita alla tua visione culinaria e riempia i tuoi tavoli di commensali entusiasti.',
    'restaurant.hero.cta': 'Lancia il Tuo Sito Web di Ristorante',
    
    // Features section
    'restaurant.features.menu.title': 'Vetrina dei Menu',
    'restaurant.features.menu.description': 'Presenta i tuoi piatti con foto appetitose e descrizioni dettagliate.',
    
    'restaurant.features.reservations.title': 'Prenotazioni Online',
    'restaurant.features.reservations.description': 'Permetti agli ospiti di prenotare tavoli direttamente tramite il tuo sito web, 24 ore su 24.',
    
    'restaurant.features.reviews.title': 'Recensioni dei Clienti',
    'restaurant.features.reviews.description': 'Metti in mostra le tue migliori recensioni e costruisci fiducia con potenziali clienti.',
    
    'restaurant.features.location.title': 'Posizione e Orari',
    'restaurant.features.location.description': 'Rendi facile per gli ospiti trovarti e sapere quando sei aperto.',
    
    // CTA section
    'restaurant.cta.title': 'Pronto a Servire il Tuo Successo Digitale?',
    'restaurant.cta.description': 'Unisciti ai ristoranti di successo che hanno trasformato la loro attività con i nostri siti web professionali.',
    'restaurant.cta.button': 'Inizia il Tuo Progetto Ora',
  }
}; 