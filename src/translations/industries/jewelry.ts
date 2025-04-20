import { Language } from '../../contexts/LanguageContext';

// Define the type for our translation set 
type TranslationSet = Record<string, string>;

// Define the type for our language translations
type LanguageTranslations = Record<Language, TranslationSet>;

// Export the translations for the jewelry industry
export const jewelryTranslations: LanguageTranslations = {
  en: {
    // Hero Section
    'jewelry.hero.title': 'Elegant Jewelry Store Website',
    'jewelry.hero.description': 'Create a stunning online showcase for your jewelry collections that captivates customers and drives sales.',
    'jewelry.hero.button': 'Explore Designs',

    // Features Section
    'jewelry.features.title': 'Showcase Your Exquisite Collections',
    
    // Collections Feature
    'jewelry.features.collections.title': 'Collections Showcase',
    'jewelry.features.collections.description': 'Display your jewelry collections with high-quality images in an elegant gallery that highlights craftsmanship and details.',
    
    // Craftsmanship Feature
    'jewelry.features.craftsmanship.title': 'Artisan Craftsmanship',
    'jewelry.features.craftsmanship.description': 'Tell the story behind your jewelry pieces and showcase the artisanal craftsmanship that makes your designs unique.',
    
    // Custom Orders Feature
    'jewelry.features.custom.title': 'Custom Designs',
    'jewelry.features.custom.description': 'Offer custom jewelry design services and allow customers to request bespoke pieces through your website.',
    
    // Shopping Experience Feature
    'jewelry.features.shopping.title': 'Seamless Shopping',
    'jewelry.features.shopping.description': 'Provide a luxury shopping experience with secure checkout and detailed product information for each jewelry piece.',
    
    // CTA Section
    'jewelry.cta.title': 'Ready to Create Your Jewelry Store Website?',
    'jewelry.cta.description': 'Launch an elegant online presence that showcases your collections and attracts discerning customers.',
    'jewelry.cta.button': 'Get Started Today',
  },
  
  de: {
    // Hero Section
    'jewelry.hero.title': 'Elegante Schmuckgeschäft-Website',
    'jewelry.hero.description': 'Erstellen Sie eine atemberaubende Online-Präsentation für Ihre Schmuckkollektionen, die Kunden begeistert und den Umsatz steigert.',
    'jewelry.hero.button': 'Designs entdecken',

    // Features Section
    'jewelry.features.title': 'Präsentieren Sie Ihre exquisiten Kollektionen',
    
    // Collections Feature
    'jewelry.features.collections.title': 'Kollektionspräsentation',
    'jewelry.features.collections.description': 'Zeigen Sie Ihre Schmuckkollektionen mit hochwertigen Bildern in einer eleganten Galerie, die Handwerkskunst und Details hervorhebt.',
    
    // Craftsmanship Feature
    'jewelry.features.craftsmanship.title': 'Handwerkskunst',
    'jewelry.features.craftsmanship.description': 'Erzählen Sie die Geschichte hinter Ihren Schmuckstücken und präsentieren Sie die handwerkliche Kunst, die Ihre Designs einzigartig macht.',
    
    // Custom Orders Feature
    'jewelry.features.custom.title': 'Massgefertigte Designs',
    'jewelry.features.custom.description': 'Bieten Sie massgefertigte Schmuckdesign-Services an und ermöglichen Sie Kunden, individuelle Stücke über Ihre Website anzufragen.',
    
    // Shopping Experience Feature
    'jewelry.features.shopping.title': 'Nahtloses Einkaufserlebnis',
    'jewelry.features.shopping.description': 'Bieten Sie ein Luxus-Einkaufserlebnis mit sicherer Bezahlung und detaillierten Produktinformationen für jedes Schmuckstück.',
    
    // CTA Section
    'jewelry.cta.title': 'Bereit, Ihre Schmuckgeschäft-Website zu erstellen?',
    'jewelry.cta.description': 'Starten Sie eine elegante Online-Präsenz, die Ihre Kollektionen präsentiert und anspruchsvolle Kunden anzieht.',
    'jewelry.cta.button': 'Jetzt starten',
  },
  
  fr: {
    // Hero Section
    'jewelry.hero.title': 'Site Web Élégant pour Bijouterie',
    'jewelry.hero.description': 'Créez une vitrine en ligne éblouissante pour vos collections de bijoux qui captive les clients et stimule les ventes.',
    'jewelry.hero.button': 'Explorer les Designs',

    // Features Section
    'jewelry.features.title': 'Mettez en valeur vos collections exquises',
    
    // Collections Feature
    'jewelry.features.collections.title': 'Présentation des Collections',
    'jewelry.features.collections.description': 'Présentez vos collections de bijoux avec des images de haute qualité dans une galerie élégante qui met en valeur l\'artisanat et les détails.',
    
    // Craftsmanship Feature
    'jewelry.features.craftsmanship.title': 'Artisanat d\'Excellence',
    'jewelry.features.craftsmanship.description': 'Racontez l\'histoire derrière vos bijoux et mettez en valeur l\'artisanat qui rend vos créations uniques.',
    
    // Custom Orders Feature
    'jewelry.features.custom.title': 'Créations Sur Mesure',
    'jewelry.features.custom.description': 'Proposez des services de conception de bijoux personnalisés et permettez aux clients de demander des pièces sur mesure via votre site web.',
    
    // Shopping Experience Feature
    'jewelry.features.shopping.title': 'Expérience d\'Achat Fluide',
    'jewelry.features.shopping.description': 'Offrez une expérience d\'achat luxueuse avec paiement sécurisé et informations détaillées pour chaque pièce de bijouterie.',
    
    // CTA Section
    'jewelry.cta.title': 'Prêt à créer le site web de votre bijouterie?',
    'jewelry.cta.description': 'Lancez une présence en ligne élégante qui met en valeur vos collections et attire une clientèle exigeante.',
    'jewelry.cta.button': 'Commencer Aujourd\'hui',
  },
  
  it: {
    // Hero Section
    'jewelry.hero.title': 'Elegante Sito Web per Gioielleria',
    'jewelry.hero.description': 'Crea una stupenda vetrina online per le tue collezioni di gioielli che cattura i clienti e aumenta le vendite.',
    'jewelry.hero.button': 'Esplora i Design',

    // Features Section
    'jewelry.features.title': 'Metti in mostra le tue collezioni squisite',
    
    // Collections Feature
    'jewelry.features.collections.title': 'Vetrina delle Collezioni',
    'jewelry.features.collections.description': 'Esponi le tue collezioni di gioielli con immagini di alta qualità in una galleria elegante che evidenzia l\'artigianato e i dettagli.',
    
    // Craftsmanship Feature
    'jewelry.features.craftsmanship.title': 'Maestria Artigianale',
    'jewelry.features.craftsmanship.description': 'Racconta la storia dietro i tuoi gioielli e metti in risalto l\'artigianato che rende unici i tuoi design.',
    
    // Custom Orders Feature
    'jewelry.features.custom.title': 'Design Personalizzati',
    'jewelry.features.custom.description': 'Offri servizi di design di gioielli su misura e permetti ai clienti di richiedere pezzi personalizzati attraverso il tuo sito web.',
    
    // Shopping Experience Feature
    'jewelry.features.shopping.title': 'Esperienza di Acquisto Impeccabile',
    'jewelry.features.shopping.description': 'Fornisci un\'esperienza di acquisto di lusso con checkout sicuro e informazioni dettagliate per ogni gioiello.',
    
    // CTA Section
    'jewelry.cta.title': 'Pronto a creare il sito web della tua gioielleria?',
    'jewelry.cta.description': 'Lancia una presenza online elegante che mette in mostra le tue collezioni e attira clienti esigenti.',
    'jewelry.cta.button': 'Inizia Oggi',
  },
}; 