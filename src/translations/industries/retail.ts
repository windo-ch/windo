import { Language } from '../../contexts/LanguageContext';

type TranslationSet = Record<string, string>;
type LanguageTranslations = Record<Language, TranslationSet>;

export const retailTranslations: LanguageTranslations = {
  en: {
    // Hero section
    'retail.hero.title': 'Engaging Websites for Retail Stores',
    'retail.hero.description': 'Create a compelling online presence that showcases your products and drives in-store and online sales.',
    'retail.hero.cta': 'Build Your Retail Website',
    
    // Features section
    'retail.features.products.title': 'Product Showcase',
    'retail.features.products.description': 'Display your product collections with high-quality images and detailed descriptions.',
    
    'retail.features.shopping.title': 'Online Shopping',
    'retail.features.shopping.description': 'Enable customers to browse and purchase your products online with a seamless shopping experience.',
    
    'retail.features.locations.title': 'Store Locations',
    'retail.features.locations.description': 'Help customers find your physical locations with maps, hours, and contact information.',
    
    'retail.features.loyalty.title': 'Loyalty Program',
    'retail.features.loyalty.description': 'Highlight your customer rewards program to encourage repeat business and customer loyalty.',
    
    // CTA section
    'retail.cta.title': 'Ready to Expand Your Retail Presence?',
    'retail.cta.description': 'Join successful retailers who have increased sales with our professional websites.',
    'retail.cta.button': 'Start Your Retail Website',
  },
  
  de: {
    // Hero section
    'retail.hero.title': 'Ansprechende Websites für Einzelhandelsgeschäfte',
    'retail.hero.description': 'Erstellen Sie eine überzeugende Online-Präsenz, die Ihre Produkte präsentiert und den Verkauf im Geschäft und online steigert.',
    'retail.hero.cta': 'Erstellen Sie Ihre Einzelhandels-Website',
    
    // Features section
    'retail.features.products.title': 'Produktpräsentation',
    'retail.features.products.description': 'Zeigen Sie Ihre Produktkollektionen mit hochwertigen Bildern und detaillierten Beschreibungen.',
    
    'retail.features.shopping.title': 'Online-Shopping',
    'retail.features.shopping.description': 'Ermöglichen Sie Kunden, Ihre Produkte online zu durchsuchen und zu kaufen, mit einem nahtlosen Einkaufserlebnis.',
    
    'retail.features.locations.title': 'Filialstandorte',
    'retail.features.locations.description': 'Helfen Sie Kunden, Ihre physischen Standorte mit Karten, Öffnungszeiten und Kontaktinformationen zu finden.',
    
    'retail.features.loyalty.title': 'Treueprogramm',
    'retail.features.loyalty.description': 'Heben Sie Ihr Kundenbelohnungsprogramm hervor, um Stammkunden zu gewinnen und Kundentreue zu fördern.',
    
    // CTA section
    'retail.cta.title': 'Bereit, Ihre Einzelhandelspräsenz zu erweitern?',
    'retail.cta.description': 'Schliessen Sie sich erfolgreichen Einzelhändlern an, die mit unseren professionellen Websites ihren Umsatz gesteigert haben.',
    'retail.cta.button': 'Starten Sie Ihre Einzelhandels-Website',
  },
  
  fr: {
    // Hero section
    'retail.hero.title': 'Sites Web Captivants pour Magasins de Détail',
    'retail.hero.description': 'Créez une présence en ligne attrayante qui met en valeur vos produits et stimule les ventes en magasin et en ligne.',
    'retail.hero.cta': 'Créez Votre Site Web de Vente au Détail',
    
    // Features section
    'retail.features.products.title': 'Vitrine de Produits',
    'retail.features.products.description': 'Présentez vos collections de produits avec des images de haute qualité et des descriptions détaillées.',
    
    'retail.features.shopping.title': 'Achats en Ligne',
    'retail.features.shopping.description': 'Permettez aux clients de parcourir et d\'acheter vos produits en ligne avec une expérience d\'achat fluide.',
    
    'retail.features.locations.title': 'Emplacements des Magasins',
    'retail.features.locations.description': 'Aidez les clients à trouver vos emplacements physiques avec des cartes, des horaires et des coordonnées.',
    
    'retail.features.loyalty.title': 'Programme de Fidélité',
    'retail.features.loyalty.description': 'Mettez en avant votre programme de récompenses client pour encourager les achats répétés et la fidélité client.',
    
    // CTA section
    'retail.cta.title': 'Prêt à Étendre Votre Présence au Détail?',
    'retail.cta.description': 'Rejoignez les détaillants prospères qui ont augmenté leurs ventes grâce à nos sites web professionnels.',
    'retail.cta.button': 'Commencez Votre Site Web de Vente au Détail',
  },
  
  it: {
    // Hero section
    'retail.hero.title': 'Siti Web Coinvolgenti per Negozi al Dettaglio',
    'retail.hero.description': 'Crea una presenza online avvincente che mostri i tuoi prodotti e aumenti le vendite in negozio e online.',
    'retail.hero.cta': 'Crea il Tuo Sito Web per il Retail',
    
    // Features section
    'retail.features.products.title': 'Vetrina Prodotti',
    'retail.features.products.description': 'Mostra le tue collezioni di prodotti con immagini di alta qualità e descrizioni dettagliate.',
    
    'retail.features.shopping.title': 'Shopping Online',
    'retail.features.shopping.description': 'Permetti ai clienti di sfogliare e acquistare i tuoi prodotti online con un\'esperienza di acquisto perfetta.',
    
    'retail.features.locations.title': 'Posizioni dei Negozi',
    'retail.features.locations.description': 'Aiuta i clienti a trovare i tuoi negozi fisici con mappe, orari e informazioni di contatto.',
    
    'retail.features.loyalty.title': 'Programma Fedeltà',
    'retail.features.loyalty.description': 'Evidenzia il tuo programma di fidelizzazione per incoraggiare gli acquisti ripetuti e la fedeltà dei clienti.',
    
    // CTA section
    'retail.cta.title': 'Pronto ad Espandere la Tua Presenza nel Retail?',
    'retail.cta.description': 'Unisciti ai rivenditori di successo che hanno aumentato le vendite con i nostri siti web professionali.',
    'retail.cta.button': 'Inizia il Tuo Sito Web per il Retail',
  }
}; 