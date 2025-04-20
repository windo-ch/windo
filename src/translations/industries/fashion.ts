export type TranslationSet = {
  [key: string]: string;
};

export type LanguageTranslations = {
  [key: string]: TranslationSet;
};

export const fashionTranslations: LanguageTranslations = {
  en: {
    'fashion.hero.title': 'Professional Websites for Fashion Brands',
    'fashion.hero.description': 'Create a stunning online presence that showcases your collections, brand story, and connects with your target audience.',
    'fashion.hero.cta': 'Launch Your Fashion Website',
    
    'fashion.features.collections.title': 'Collections',
    'fashion.features.collections.description': 'Showcase your latest collections with high-quality images and detailed product information.',
    
    'fashion.features.story.title': 'Brand Story',
    'fashion.features.story.description': 'Share your brand\'s unique story and values with your audience.',
    
    'fashion.features.lookbook.title': 'Lookbook',
    'fashion.features.lookbook.description': 'Create an inspiring lookbook to showcase your designs in style.',
    
    'fashion.features.shop.title': 'Online Shop',
    'fashion.features.shop.description': 'Sell your products online with a seamless shopping experience.',
    
    'fashion.cta.title': 'Ready to Elevate Your Fashion Brand?',
    'fashion.cta.description': 'Join successful fashion brands who have enhanced their online presence with our professional websites.',
    'fashion.cta.button': 'Start Your Project Now'
  },
  de: {
    'fashion.hero.title': 'Professionelle Websites für Modemarken',
    'fashion.hero.description': 'Erstellen Sie eine beeindruckende Online-Präsenz, die Ihre Kollektionen, Markengeschichte präsentiert und Ihre Zielgruppe anspricht.',
    'fashion.hero.cta': 'Starten Sie Ihre Mode-Website',
    
    'fashion.features.collections.title': 'Kollektionen',
    'fashion.features.collections.description': 'Präsentieren Sie Ihre neuesten Kollektionen mit hochwertigen Bildern und detaillierten Produktinformationen.',
    
    'fashion.features.story.title': 'Markengeschichte',
    'fashion.features.story.description': 'Teilen Sie die einzigartige Geschichte und Werte Ihrer Marke mit Ihrem Publikum.',
    
    'fashion.features.lookbook.title': 'Lookbook',
    'fashion.features.lookbook.description': 'Erstellen Sie ein inspirierendes Lookbook, um Ihre Designs stilvoll zu präsentieren.',
    
    'fashion.features.shop.title': 'Online-Shop',
    'fashion.features.shop.description': 'Verkaufen Sie Ihre Produkte online mit einem nahtlosen Einkaufserlebnis.',
    
    'fashion.cta.title': 'Bereit, Ihre Modemarke zu verbessern?',
    'fashion.cta.description': 'Schliessen Sie sich erfolgreichen Modemarken an, die ihre Online-Präsenz mit unseren professionellen Websites verbessert haben.',
    'fashion.cta.button': 'Starten Sie Ihr Projekt jetzt'
  },
  fr: {
    'fashion.hero.title': 'Sites Web Professionnels pour Marques de Mode',
    'fashion.hero.description': 'Créez une présence en ligne impressionnante qui met en valeur vos collections, l\'histoire de votre marque et connecte avec votre public cible.',
    'fashion.hero.cta': 'Lancez Votre Site Web de Mode',
    
    'fashion.features.collections.title': 'Collections',
    'fashion.features.collections.description': 'Présentez vos dernières collections avec des images de haute qualité et des informations détaillées sur les produits.',
    
    'fashion.features.story.title': 'Histoire de Marque',
    'fashion.features.story.description': 'Partagez l\'histoire et les valeurs uniques de votre marque avec votre public.',
    
    'fashion.features.lookbook.title': 'Lookbook',
    'fashion.features.lookbook.description': 'Créez un lookbook inspirant pour présenter vos designs avec style.',
    
    'fashion.features.shop.title': 'Boutique en Ligne',
    'fashion.features.shop.description': 'Vendez vos produits en ligne avec une expérience d\'achat fluide.',
    
    'fashion.cta.title': 'Prêt à Élever Votre Marque de Mode?',
    'fashion.cta.description': 'Rejoignez les marques de mode à succès qui ont amélioré leur présence en ligne avec nos sites web professionnels.',
    'fashion.cta.button': 'Commencez Votre Projet Maintenant'
  },
  it: {
    'fashion.hero.title': 'Siti Web Professionali per Brand di Moda',
    'fashion.hero.description': 'Crea una straordinaria presenza online che mostri le tue collezioni, la storia del tuo brand e ti connetta con il tuo pubblico di riferimento.',
    'fashion.hero.cta': 'Lancia il tuo Sito Web di Moda',
    
    'fashion.features.collections.title': 'Collezioni',
    'fashion.features.collections.description': 'Mostra le tue ultime collezioni con immagini di alta qualità e informazioni dettagliate sui prodotti.',
    
    'fashion.features.story.title': 'Storia del Brand',
    'fashion.features.story.description': 'Condividi la storia e i valori unici del tuo brand con il tuo pubblico.',
    
    'fashion.features.lookbook.title': 'Lookbook',
    'fashion.features.lookbook.description': 'Crea un lookbook stimolante per mostrare i tuoi design con stile.',
    
    'fashion.features.shop.title': 'Negozio Online',
    'fashion.features.shop.description': 'Vendi i tuoi prodotti online con un\'esperienza di acquisto impeccabile.',
    
    'fashion.cta.title': 'Pronto a Elevare il Tuo Brand di Moda?',
    'fashion.cta.description': 'Unisciti ai brand di moda di successo che hanno migliorato la loro presenza online con i nostri siti web professionali.',
    'fashion.cta.button': 'Inizia il Tuo Progetto Ora'
  }
};

export type FashionTranslationKey = keyof typeof fashionTranslations.en; 