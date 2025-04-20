import { Language } from '../contexts/LanguageContext';

type TranslationSet = Record<string, string>;
type LanguageTranslations = Record<Language, TranslationSet>;

export const servicesTranslations: LanguageTranslations = {
  en: {
    // Page title and hero
    'services.title': 'Our Services',
    'services.subtitle': 'Everything you need to establish an exceptional online presence for your business.',
    
    // Service cards
    'services.website.title': 'Website Design & Development',
    'services.website.description': 'Custom, responsive websites that look beautiful on all devices and drive real business results.',
    'services.technical.title': 'Technical Development',
    'services.technical.description': 'Solid, reliable code with modern frameworks that ensures your website performs perfectly.',
    'services.digital.title': 'Digital Presence Optimization',
    'services.digital.description': 'Help your business get found online with SEO, analytics, and performance enhancements.',
    'services.learn_more': 'Learn more',
    
    // Modal content
    'services.modal.included': 'What\'s Included',
    
    // Website features
    'services.website.feature1': 'Custom design tailored to your brand',
    'services.website.feature2': 'Mobile-responsive layouts that work on all devices',
    'services.website.feature3': 'User journey optimization for better conversion',
    'services.website.feature4': 'Intuitive navigation and user experience',
    'services.website.feature5': 'Performance optimization for speed',
    'services.website.feature6': 'SEO-friendly structure',
    
    // Technical features
    'services.technical.feature1': 'Professional coding using latest technologies',
    'services.technical.feature2': 'Custom functionality development',
    'services.technical.feature3': 'E-commerce and payment integration',
    'services.technical.feature4': 'Database and backend systems',
    'services.technical.feature5': 'API integrations with third-party services',
    'services.technical.feature6': 'Security and data protection',
    
    // Digital presence features
    'services.digital.feature1': 'Search engine optimization (SEO)',
    'services.digital.feature2': 'Google Analytics setup and tracking',
    'services.digital.feature3': 'Performance monitoring and optimization',
    'services.digital.feature4': 'Content strategy recommendations',
    'services.digital.feature5': 'Social media integration',
    'services.digital.feature6': 'Local business optimization',
    
    // Method section
    'services.method.title': 'Our Method',
    'services.method.subtitle': 'Applying Swiss precision to every aspect of web development, ensuring quality and reliability in every project.',
    
    // Who we are section
    'services.who.title': 'Who We Are',
    'services.who.description': 'A team passionate about transforming the Swiss web development landscape by offering superior quality, transparent pricing, and exceptional service.',
    
    // Values section
    'services.values.mission.title': 'Our Mission',
    'services.values.mission.description': 'Making custom-developed websites more accessible, affordable, and better quality for businesses in Switzerland.',
    'services.values.promise.title': 'Our Promise',
    'services.values.promise.description': 'No hidden costs, no restrictive contracts, and no compromise on quality. We focus on long-term relationships.',
    
    // Solution section
    'services.solution.title': 'Our Solution',
    'services.solution.feature1': 'Custom-developed websites at competitive prices',
    'services.solution.feature2': 'Transparent pricing with no hidden costs',
    'services.solution.feature3': 'Exceptional quality and performance',
    'services.solution.feature4': 'Long-term relationships and support',
    
    // Watchmakers section
    'services.watchmakers.title': 'Watchmakers of the Web',
    'services.watchmakers.description': 'Just as Swiss watchmakers are known for their precision, we apply the same meticulous approach to create websites that are not just functional, but exceptional.',
    
    // Principles section
    'services.principles.precision.title': 'Precision Engineering',
    'services.principles.precision.description': 'Every aspect of your website is crafted with meticulous attention to detail, ensuring optimal performance.',
    'services.principles.quality.title': 'Quality First',
    'services.principles.quality.description': 'We never compromise on quality, from the initial design to the final deployment and beyond.',
    'services.principles.code.title': 'Clean Code',
    'services.principles.code.description': 'Our codebase is maintained with the highest standards, making it scalable and efficient.',
    'services.principles.user.title': 'User-Centered',
    'services.principles.user.description': 'Your customers are at the heart of our design process, creating intuitive and engaging experiences.',
    
    // Result section
    'services.result.title': 'The Result',
    'services.result.description': 'When you choose us, you get a website built with precision and care, exceptional performance, and a partner committed to your long-term success.',
    
    // CTA section
    'services.cta.title': 'Ready to Transform Your Online Presence?',
    'services.cta.description': 'Let\'s work together to create a website that perfectly represents your brand and drives real results.',
    'services.cta.button': 'Start Your Project'
  },
  
  de: {
    // Page title and hero
    'services.title': 'Unsere Dienstleistungen',
    'services.subtitle': 'Alles, was Sie brauchen, um eine aussergewöhnliche Online-Präsenz für Ihr Unternehmen zu etablieren.',
    
    // Service cards
    'services.website.title': 'Website Design & Entwicklung',
    'services.website.description': 'Massgeschneiderte, responsive Websites, die auf allen Geräten gut aussehen und echte Geschäftsergebnisse liefern.',
    'services.technical.title': 'Technische Entwicklung',
    'services.technical.description': 'Solider, zuverlässiger Code mit modernen Frameworks, der sicherstellt, dass Ihre Website perfekt funktioniert.',
    'services.digital.title': 'Optimierung der digitalen Präsenz',
    'services.digital.description': 'Helfen Sie Ihrem Unternehmen, online gefunden zu werden, mit SEO, Analysen und Leistungsverbesserungen.',
    'services.learn_more': 'Mehr erfahren',
    
    // Modal content
    'services.modal.included': 'Was ist enthalten',
    
    // Website features
    'services.website.feature1': 'Massgeschneidertes Design für Ihre Marke',
    'services.website.feature2': 'Mobile-responsive Layouts für alle Geräte',
    'services.website.feature3': 'Optimierung der Benutzerreise für bessere Konversionen',
    'services.website.feature4': 'Intuitive Navigation und Benutzererfahrung',
    'services.website.feature5': 'Leistungsoptimierung für Geschwindigkeit',
    'services.website.feature6': 'SEO-freundliche Struktur',
    
    // Technical features
    'services.technical.feature1': 'Professionelles Coding mit neuesten Technologien',
    'services.technical.feature2': 'Entwicklung angepasster Funktionalitäten',
    'services.technical.feature3': 'E-Commerce und Zahlungsintegration',
    'services.technical.feature4': 'Datenbank- und Backend-Systeme',
    'services.technical.feature5': 'API-Integrationen mit Drittanbietern',
    'services.technical.feature6': 'Sicherheit und Datenschutz',
    
    // Digital presence features
    'services.digital.feature1': 'Suchmaschinenoptimierung (SEO)',
    'services.digital.feature2': 'Google Analytics-Einrichtung und Tracking',
    'services.digital.feature3': 'Leistungsüberwachung und Optimierung',
    'services.digital.feature4': 'Empfehlungen zur Content-Strategie',
    'services.digital.feature5': 'Social Media Integration',
    'services.digital.feature6': 'Lokale Geschäftsoptimierung',
    
    // Method section
    'services.method.title': 'Unsere Methode',
    'services.method.subtitle': 'Anwendung Schweizer Präzision in allen Aspekten der Webentwicklung, um Qualität und Zuverlässigkeit in jedem Projekt zu gewährleisten.',
    
    // Who we are section
    'services.who.title': 'Wer wir sind',
    'services.who.description': 'Ein Team mit Leidenschaft für die Transformation der Schweizer Webentwicklungslandschaft durch überlegene Qualität, transparente Preisgestaltung und aussergewöhnlichen Service.',
    
    // Values section
    'services.values.mission.title': 'Unsere Mission',
    'services.values.mission.description': 'Massgeschneiderte Websites zugänglicher, erschwinglicher und qualitativ hochwertiger für Unternehmen in der Schweiz zu machen.',
    'services.values.promise.title': 'Unser Versprechen',
    'services.values.promise.description': 'Keine versteckten Kosten, keine restriktiven Verträge und keine Kompromisse bei der Qualität. Wir konzentrieren uns auf langfristige Beziehungen.',
    
    // Solution section
    'services.solution.title': 'Unsere Lösung',
    'services.solution.feature1': 'Massgeschneiderte Websites zu wettbewerbsfähigen Preisen',
    'services.solution.feature2': 'Transparente Preisgestaltung ohne versteckte Kosten',
    'services.solution.feature3': 'Aussergewöhnliche Qualität und Leistung',
    'services.solution.feature4': 'Langfristige Beziehungen und Unterstützung',
    
    // Watchmakers section
    'services.watchmakers.title': 'Uhrmacher des Webs',
    'services.watchmakers.description': 'So wie Schweizer Uhrmacher für ihre Präzision bekannt sind, wenden wir den gleichen akribischen Ansatz an, um Websites zu erstellen, die nicht nur funktional, sondern aussergewöhnlich sind.',
    
    // Principles section
    'services.principles.precision.title': 'Präzisionstechnik',
    'services.principles.precision.description': 'Jeder Aspekt Ihrer Website wird mit akribischer Aufmerksamkeit für Details gefertigt, um optimale Leistung zu gewährleisten.',
    'services.principles.quality.title': 'Qualität zuerst',
    'services.principles.quality.description': 'Wir machen keine Kompromisse bei der Qualität, vom ersten Design bis zur endgültigen Bereitstellung und darüber hinaus.',
    'services.principles.code.title': 'Sauberer Code',
    'services.principles.code.description': 'Unsere Codebasis wird nach höchsten Standards gepflegt, was sie skalierbar und effizient macht.',
    'services.principles.user.title': 'Benutzerzentriert',
    'services.principles.user.description': 'Ihre Kunden stehen im Mittelpunkt unseres Designprozesses, der intuitive und ansprechende Erlebnisse schafft.',
    
    // Result section
    'services.result.title': 'Das Ergebnis',
    'services.result.description': 'Wenn Sie uns wählen, erhalten Sie eine Website, die mit Präzision und Sorgfalt gebaut wurde, aussergewöhnliche Leistung und einen Partner, der sich für Ihren langfristigen Erfolg einsetzt.',
    
    // CTA section
    'services.cta.title': 'Bereit, Ihre Online-Präsenz zu transformieren?',
    'services.cta.description': 'Lassen Sie uns gemeinsam eine Website erstellen, die Ihre Marke perfekt repräsentiert und echte Ergebnisse liefert.',
    'services.cta.button': 'Starten Sie Ihr Projekt'
  },
  
  fr: {
    // Page title and hero
    'services.title': 'Nos Services',
    'services.subtitle': 'Tout ce dont vous avez besoin pour établir une présence en ligne exceptionnelle pour votre entreprise.',
    
    // Service cards
    'services.website.title': 'Conception & Développement de Sites Web',
    'services.website.description': 'Des sites web sur mesure et responsifs qui sont beaux sur tous les appareils et génèrent de vrais résultats commerciaux.',
    'services.technical.title': 'Développement Technique',
    'services.technical.description': 'Code solide et fiable avec des frameworks modernes qui garantit que votre site web fonctionne parfaitement.',
    'services.digital.title': 'Optimisation de la Présence Digitale',
    'services.digital.description': 'Aidez votre entreprise à être trouvée en ligne avec le SEO, l\'analyse et les améliorations de performance.',
    'services.learn_more': 'En savoir plus',
    
    // Modal content
    'services.modal.included': 'Ce qui est inclus',
    
    // Website features
    'services.website.feature1': 'Design personnalisé adapté à votre marque',
    'services.website.feature2': 'Mises en page adaptées aux mobiles qui fonctionnent sur tous les appareils',
    'services.website.feature3': 'Optimisation du parcours utilisateur pour une meilleure conversion',
    'services.website.feature4': 'Navigation intuitive et expérience utilisateur',
    'services.website.feature5': 'Optimisation des performances pour la vitesse',
    'services.website.feature6': 'Structure adaptée au SEO',
    
    // Technical features
    'services.technical.feature1': 'Codage professionnel utilisant les dernières technologies',
    'services.technical.feature2': 'Développement de fonctionnalités personnalisées',
    'services.technical.feature3': 'Intégration e-commerce et paiement',
    'services.technical.feature4': 'Systèmes de base de données et backend',
    'services.technical.feature5': 'Intégrations API avec services tiers',
    'services.technical.feature6': 'Sécurité et protection des données',
    
    // Digital presence features
    'services.digital.feature1': 'Optimisation pour les moteurs de recherche (SEO)',
    'services.digital.feature2': 'Configuration et suivi de Google Analytics',
    'services.digital.feature3': 'Surveillance et optimisation des performances',
    'services.digital.feature4': 'Recommandations de stratégie de contenu',
    'services.digital.feature5': 'Intégration des médias sociaux',
    'services.digital.feature6': 'Optimisation des entreprises locales',
    
    // Method section
    'services.method.title': 'Notre Méthode',
    'services.method.subtitle': 'Application de la précision suisse à tous les aspects du développement web, assurant qualité et fiabilité dans chaque projet.',
    
    // Who we are section
    'services.who.title': 'Qui Nous Sommes',
    'services.who.description': 'Une équipe passionnée par la transformation du paysage du développement web suisse en offrant une qualité supérieure, des prix transparents et un service exceptionnel.',
    
    // Values section
    'services.values.mission.title': 'Notre Mission',
    'services.values.mission.description': 'Rendre les sites web développés sur mesure plus accessibles, abordables et de meilleure qualité pour les entreprises en Suisse.',
    'services.values.promise.title': 'Notre Promesse',
    'services.values.promise.description': 'Pas de coûts cachés, pas de contrats restrictifs et pas de compromis sur la qualité. Nous nous concentrons sur les relations à long terme.',
    
    // Solution section
    'services.solution.title': 'Notre Solution',
    'services.solution.feature1': 'Sites web développés sur mesure à des prix compétitifs',
    'services.solution.feature2': 'Prix transparents sans coûts cachés',
    'services.solution.feature3': 'Qualité et performance exceptionnelles',
    'services.solution.feature4': 'Relations et support à long terme',
    
    // Watchmakers section
    'services.watchmakers.title': 'Horlogers du Web',
    'services.watchmakers.description': 'Tout comme les horlogers suisses sont connus pour leur précision, nous appliquons la même approche méticuleuse pour créer des sites web qui ne sont pas seulement fonctionnels, mais exceptionnels.',
    
    // Principles section
    'services.principles.precision.title': 'Ingénierie de Précision',
    'services.principles.precision.description': 'Chaque aspect de votre site web est conçu avec une attention méticuleuse aux détails, assurant une performance optimale.',
    'services.principles.quality.title': 'Qualité d\'Abord',
    'services.principles.quality.description': 'Nous ne faisons jamais de compromis sur la qualité, de la conception initiale au déploiement final et au-delà.',
    'services.principles.code.title': 'Code Propre',
    'services.principles.code.description': 'Notre base de code est maintenue selon les normes les plus élevées, la rendant évolutive et efficace.',
    'services.principles.user.title': 'Centré sur l\'Utilisateur',
    'services.principles.user.description': 'Vos clients sont au cœur de notre processus de conception, créant des expériences intuitives et engageantes.',
    
    // Result section
    'services.result.title': 'Le Résultat',
    'services.result.description': 'Lorsque vous nous choisissez, vous obtenez un site web construit avec précision et soin, des performances exceptionnelles et un partenaire engagé pour votre succès à long terme.',
    
    // CTA section
    'services.cta.title': 'Prêt à Transformer Votre Présence en Ligne?',
    'services.cta.description': 'Travaillons ensemble pour créer un site web qui représente parfaitement votre marque et génère des résultats réels.',
    'services.cta.button': 'Démarrez Votre Projet'
  },
  
  it: {
    // Page title and hero
    'services.title': 'I Nostri Servizi',
    'services.subtitle': 'Tutto ciò di cui hai bisogno per stabilire una presenza online eccezionale per la tua azienda.',
    
    // Service cards
    'services.website.title': 'Design e Sviluppo di Siti Web',
    'services.website.description': 'Siti web personalizzati e reattivi che appaiono belli su tutti i dispositivi e generano risultati aziendali reali.',
    'services.technical.title': 'Sviluppo Tecnico',
    'services.technical.description': 'Codice solido e affidabile con framework moderni che garantisce che il tuo sito web funzioni perfettamente.',
    'services.digital.title': 'Ottimizzazione della Presenza Digitale',
    'services.digital.description': 'Aiuta la tua azienda a essere trovata online con SEO, analisi e miglioramenti delle prestazioni.',
    'services.learn_more': 'Scopri di più',
    
    // Modal content
    'services.modal.included': 'Cosa è incluso',
    
    // Website features
    'services.website.feature1': 'Design personalizzato adattato al tuo marchio',
    'services.website.feature2': 'Layout responsive che funzionano su tutti i dispositivi',
    'services.website.feature3': 'Ottimizzazione del percorso utente per una migliore conversione',
    'services.website.feature4': 'Navigazione intuitiva ed esperienza utente',
    'services.website.feature5': 'Ottimizzazione delle prestazioni per la velocità',
    'services.website.feature6': 'Struttura adatta al SEO',
    
    // Technical features
    'services.technical.feature1': 'Codifica professionale utilizzando le ultime tecnologie',
    'services.technical.feature2': 'Sviluppo di funzionalità personalizzate',
    'services.technical.feature3': 'Integrazione e-commerce e pagamenti',
    'services.technical.feature4': 'Sistemi di database e backend',
    'services.technical.feature5': 'Integrazioni API con servizi di terze parti',
    'services.technical.feature6': 'Sicurezza e protezione dei dati',
    
    // Digital presence features
    'services.digital.feature1': 'Ottimizzazione per i motori di ricerca (SEO)',
    'services.digital.feature2': 'Configurazione e monitoraggio di Google Analytics',
    'services.digital.feature3': 'Monitoraggio e ottimizzazione delle prestazioni',
    'services.digital.feature4': 'Raccomandazioni sulla strategia dei contenuti',
    'services.digital.feature5': 'Integrazione con i social media',
    'services.digital.feature6': 'Ottimizzazione delle attività locali',
    
    // Method section
    'services.method.title': 'Il Nostro Metodo',
    'services.method.subtitle': 'Applicazione della precisione svizzera a ogni aspetto dello sviluppo web, garantendo qualità e affidabilità in ogni progetto.',
    
    // Who we are section
    'services.who.title': 'Chi Siamo',
    'services.who.description': 'Un team appassionato della trasformazione del panorama dello sviluppo web svizzero offrendo qualità superiore, prezzi trasparenti e servizio eccezionale.',
    
    // Values section
    'services.values.mission.title': 'La Nostra Missione',
    'services.values.mission.description': 'Rendere i siti web sviluppati su misura più accessibili, convenienti e di migliore qualità per le aziende in Svizzera.',
    'services.values.promise.title': 'La Nostra Promessa',
    'services.values.promise.description': 'Nessun costo nascosto, nessun contratto restrittivo e nessun compromesso sulla qualità. Ci concentriamo sulle relazioni a lungo termine.',
    
    // Solution section
    'services.solution.title': 'La Nostra Soluzione',
    'services.solution.feature1': 'Siti web sviluppati su misura a prezzi competitivi',
    'services.solution.feature2': 'Prezzi trasparenti senza costi nascosti',
    'services.solution.feature3': 'Qualità e prestazioni eccezionali',
    'services.solution.feature4': 'Relazioni e supporto a lungo termine',
    
    // Watchmakers section
    'services.watchmakers.title': 'Orologiai del Web',
    'services.watchmakers.description': 'Proprio come gli orologiai svizzeri sono noti per la loro precisione, applichiamo lo stesso approccio meticoloso per creare siti web che non sono solo funzionali, ma eccezionali.',
    
    // Principles section
    'services.principles.precision.title': 'Ingegneria di Precisione',
    'services.principles.precision.description': 'Ogni aspetto del tuo sito web è realizzato con meticolosa attenzione ai dettagli, garantendo prestazioni ottimali.',
    'services.principles.quality.title': 'Qualità Prima di Tutto',
    'services.principles.quality.description': 'Non scendiamo mai a compromessi sulla qualità, dal design iniziale all\'implementazione finale e oltre.',
    'services.principles.code.title': 'Codice Pulito',
    'services.principles.code.description': 'La nostra base di codice è mantenuta con i più alti standard, rendendola scalabile ed efficiente.',
    'services.principles.user.title': 'Incentrato sull\'Utente',
    'services.principles.user.description': 'I tuoi clienti sono al centro del nostro processo di progettazione, creando esperienze intuitive e coinvolgenti.',
    
    // Result section
    'services.result.title': 'Il Risultato',
    'services.result.description': 'Quando scegli noi, ottieni un sito web costruito con precisione e cura, prestazioni eccezionali e un partner impegnato per il tuo successo a lungo termine.',
    
    // CTA section
    'services.cta.title': 'Pronto a Trasformare la Tua Presenza Online?',
    'services.cta.description': 'Lavoriamo insieme per creare un sito web che rappresenti perfettamente il tuo marchio e generi risultati reali.',
    'services.cta.button': 'Inizia il Tuo Progetto'
  }
}; 