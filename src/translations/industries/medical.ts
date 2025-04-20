import { Language } from '../../contexts/LanguageContext';

type TranslationSet = Record<string, string>;
type LanguageTranslations = Record<Language, TranslationSet>;

export const medicalTranslations: LanguageTranslations = {
  en: {
    // Hero section
    'medical.hero.title': 'Professional Websites for Medical Practices',
    'medical.hero.description': 'Create a professional online presence that builds trust with patients and showcases your medical services.',
    'medical.hero.cta': 'Launch Your Medical Website',
    
    // Features section
    'medical.features.services.title': 'Medical Services',
    'medical.features.services.description': 'Showcase your medical services and specialties to potential patients.',
    
    'medical.features.appointments.title': 'Online Appointments',
    'medical.features.appointments.description': 'Allow patients to book appointments online at their convenience.',
    
    'medical.features.portal.title': 'Patient Portal',
    'medical.features.portal.description': 'Provide secure access to medical records and test results.',
    
    'medical.features.location.title': 'Practice Location',
    'medical.features.location.description': 'Share your practice location and contact details with patients.',
    
    // CTA section
    'medical.cta.title': 'Ready to Enhance Your Medical Practice?',
    'medical.cta.description': 'Join successful medical practices who have improved patient engagement with our professional websites.',
    'medical.cta.button': 'Start Your Project Now',
  },
  
  de: {
    // Hero section
    'medical.hero.title': 'Professionelle Websites für Arztpraxen',
    'medical.hero.description': 'Erstellen Sie eine professionelle Online-Präsenz, die Vertrauen bei Patienten aufbaut und Ihre medizinischen Dienstleistungen präsentiert.',
    'medical.hero.cta': 'Starten Sie Ihre Medizinische Website',
    
    // Features section
    'medical.features.services.title': 'Medizinische Leistungen',
    'medical.features.services.description': 'Präsentieren Sie Ihre medizinischen Dienstleistungen und Fachgebiete für potenzielle Patienten.',
    
    'medical.features.appointments.title': 'Online-Termine',
    'medical.features.appointments.description': 'Ermöglichen Sie Patienten, Termine online nach ihren Bedürfnissen zu buchen.',
    
    'medical.features.portal.title': 'Patientenportal',
    'medical.features.portal.description': 'Bieten Sie sicheren Zugriff auf Krankenakten und Testergebnisse.',
    
    'medical.features.location.title': 'Praxisstandort',
    'medical.features.location.description': 'Teilen Sie Ihren Praxisstandort und Kontaktdaten mit Patienten.',
    
    // CTA section
    'medical.cta.title': 'Bereit, Ihre Arztpraxis zu verbessern?',
    'medical.cta.description': 'Schliessen Sie sich erfolgreichen Arztpraxen an, die mit unseren professionellen Websites das Patientenengagement verbessert haben.',
    'medical.cta.button': 'Starten Sie Ihr Projekt jetzt',
  },
  
  fr: {
    // Hero section
    'medical.hero.title': 'Sites Web Professionnels pour Cabinets Médicaux',
    'medical.hero.description': 'Créez une présence en ligne professionnelle qui instaure la confiance avec les patients et met en valeur vos services médicaux.',
    'medical.hero.cta': 'Lancez Votre Site Web Médical',
    
    // Features section
    'medical.features.services.title': 'Services Médicaux',
    'medical.features.services.description': 'Présentez vos services médicaux et spécialités aux patients potentiels.',
    
    'medical.features.appointments.title': 'Rendez-vous en Ligne',
    'medical.features.appointments.description': 'Permettez aux patients de prendre rendez-vous en ligne selon leur convenance.',
    
    'medical.features.portal.title': 'Portail Patient',
    'medical.features.portal.description': 'Fournissez un accès sécurisé aux dossiers médicaux et aux résultats des tests.',
    
    'medical.features.location.title': 'Emplacement du Cabinet',
    'medical.features.location.description': 'Partagez l\'emplacement de votre cabinet et les coordonnées avec les patients.',
    
    // CTA section
    'medical.cta.title': 'Prêt à Améliorer Votre Cabinet Médical?',
    'medical.cta.description': 'Rejoignez les cabinets médicaux prospères qui ont amélioré l\'engagement des patients grâce à nos sites web professionnels.',
    'medical.cta.button': 'Commencez Votre Projet Maintenant',
  },
  
  it: {
    // Hero section
    'medical.hero.title': 'Siti Web Professionali per Studi Medici',
    'medical.hero.description': 'Crea una presenza online professionale che costruisca fiducia con i pazienti e metta in mostra i tuoi servizi medici.',
    'medical.hero.cta': 'Lancia il Tuo Sito Web Medico',
    
    // Features section
    'medical.features.services.title': 'Servizi Medici',
    'medical.features.services.description': 'Metti in mostra i tuoi servizi medici e le specialità per potenziali pazienti.',
    
    'medical.features.appointments.title': 'Appuntamenti Online',
    'medical.features.appointments.description': 'Consenti ai pazienti di prenotare appuntamenti online secondo le loro esigenze.',
    
    'medical.features.portal.title': 'Portale Paziente',
    'medical.features.portal.description': 'Fornisci accesso sicuro alle cartelle cliniche e ai risultati dei test.',
    
    'medical.features.location.title': 'Posizione dello Studio',
    'medical.features.location.description': 'Condividi la posizione del tuo studio e i dettagli di contatto con i pazienti.',
    
    // CTA section
    'medical.cta.title': 'Pronto a Migliorare il Tuo Studio Medico?',
    'medical.cta.description': 'Unisciti agli studi medici di successo che hanno migliorato il coinvolgimento dei pazienti con i nostri siti web professionali.',
    'medical.cta.button': 'Inizia il Tuo Progetto Ora',
  }
}; 