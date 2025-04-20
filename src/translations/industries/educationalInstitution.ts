import { Language } from '../../contexts/LanguageContext';

// Define the translation set structure
type TranslationSet = {
  [key: string]: string;
};

// Define the language translations structure
type LanguageTranslations = {
  [key in Language]: TranslationSet;
};

// Define the translations for educational institutions
export const educationalInstitutionTranslations: LanguageTranslations = {
  en: {
    // Hero Section
    'educationalInstitution.hero.title': 'Websites for Educational Institutions',
    'educationalInstitution.hero.description': 'Create an engaging online presence that showcases your programs, faculty, and campus life to attract students and parents.',
    'educationalInstitution.hero.button': 'Build Your Education Website',

    // Features Section
    'educationalInstitution.features.programs.title': 'Academic Programs',
    'educationalInstitution.features.programs.description': 'Highlight your curriculum, courses, and unique educational approach that sets your institution apart.',

    'educationalInstitution.features.faculty.title': 'Faculty & Staff',
    'educationalInstitution.features.faculty.description': 'Showcase your qualified educators and their expertise to build trust and credibility.',

    'educationalInstitution.features.campus.title': 'Campus & Facilities',
    'educationalInstitution.features.campus.description': 'Display your campus, classrooms, labs, libraries, and other facilities that enhance the learning experience.',

    'educationalInstitution.features.activities.title': 'Student Life',
    'educationalInstitution.features.activities.description': 'Feature extracurricular activities, clubs, sports, and events that enrich the student experience.',

    // CTA Section
    'educationalInstitution.cta.title': 'Ready to elevate your educational institution online?',
    'educationalInstitution.cta.description': 'Create a professional website that attracts prospective students and communicates your institution\'s values and vision.',
    'educationalInstitution.cta.button': 'Start Your Education Website',
  },
  de: {
    // Hero Section
    'educationalInstitution.hero.title': 'Websites für Bildungseinrichtungen',
    'educationalInstitution.hero.description': 'Erstellen Sie eine ansprechende Online-Präsenz, die Ihre Programme, Fakultät und das Campusleben präsentiert, um Studierende und Eltern anzuziehen.',
    'educationalInstitution.hero.button': 'Erstellen Sie Ihre Bildungswebsite',

    // Features Section
    'educationalInstitution.features.programs.title': 'Akademische Programme',
    'educationalInstitution.features.programs.description': 'Heben Sie Ihren Lehrplan, Kurse und einzigartigen pädagogischen Ansatz hervor, der Ihre Einrichtung auszeichnet.',

    'educationalInstitution.features.faculty.title': 'Fakultät & Mitarbeiter',
    'educationalInstitution.features.faculty.description': 'Präsentieren Sie Ihre qualifizierten Pädagogen und deren Expertise, um Vertrauen und Glaubwürdigkeit aufzubauen.',

    'educationalInstitution.features.campus.title': 'Campus & Einrichtungen',
    'educationalInstitution.features.campus.description': 'Zeigen Sie Ihren Campus, Klassenräume, Labore, Bibliotheken und andere Einrichtungen, die das Lernerlebnis verbessern.',

    'educationalInstitution.features.activities.title': 'Studentenleben',
    'educationalInstitution.features.activities.description': 'Präsentieren Sie ausserschulische Aktivitäten, Clubs, Sport und Veranstaltungen, die das Studentenerlebnis bereichern.',

    // CTA Section
    'educationalInstitution.cta.title': 'Bereit, Ihre Bildungseinrichtung online zu verbessern?',
    'educationalInstitution.cta.description': 'Erstellen Sie eine professionelle Website, die potenzielle Studierende anzieht und die Werte und Vision Ihrer Einrichtung kommuniziert.',
    'educationalInstitution.cta.button': 'Starten Sie Ihre Bildungswebsite',
  },
  fr: {
    // Hero Section
    'educationalInstitution.hero.title': 'Sites Web pour Établissements Éducatifs',
    'educationalInstitution.hero.description': 'Créez une présence en ligne attrayante qui met en valeur vos programmes, votre faculté et la vie sur le campus pour attirer étudiants et parents.',
    'educationalInstitution.hero.button': 'Créez Votre Site Web Éducatif',

    // Features Section
    'educationalInstitution.features.programs.title': 'Programmes Académiques',
    'educationalInstitution.features.programs.description': 'Mettez en valeur votre programme d\'études, vos cours et votre approche éducative unique qui distingue votre établissement.',

    'educationalInstitution.features.faculty.title': 'Faculté & Personnel',
    'educationalInstitution.features.faculty.description': 'Présentez vos éducateurs qualifiés et leur expertise pour établir la confiance et la crédibilité.',

    'educationalInstitution.features.campus.title': 'Campus & Installations',
    'educationalInstitution.features.campus.description': 'Montrez votre campus, vos salles de classe, laboratoires, bibliothèques et autres installations qui améliorent l\'expérience d\'apprentissage.',

    'educationalInstitution.features.activities.title': 'Vie Étudiante',
    'educationalInstitution.features.activities.description': 'Présentez les activités extrascolaires, clubs, sports et événements qui enrichissent l\'expérience étudiante.',

    // CTA Section
    'educationalInstitution.cta.title': 'Prêt à élever votre établissement éducatif en ligne?',
    'educationalInstitution.cta.description': 'Créez un site web professionnel qui attire les futurs étudiants et communique les valeurs et la vision de votre établissement.',
    'educationalInstitution.cta.button': 'Commencez Votre Site Web Éducatif',
  },
  it: {
    // Hero Section
    'educationalInstitution.hero.title': 'Siti Web per Istituti Educativi',
    'educationalInstitution.hero.description': 'Crea una presenza online coinvolgente che metta in mostra i tuoi programmi, il corpo docente e la vita nel campus per attirare studenti e genitori.',
    'educationalInstitution.hero.button': 'Crea il Tuo Sito Web Educativo',

    // Features Section
    'educationalInstitution.features.programs.title': 'Programmi Accademici',
    'educationalInstitution.features.programs.description': 'Evidenzia il tuo curriculum, i corsi e l\'approccio educativo unico che distingue la tua istituzione.',

    'educationalInstitution.features.faculty.title': 'Facoltà & Staff',
    'educationalInstitution.features.faculty.description': 'Presenta i tuoi educatori qualificati e la loro competenza per costruire fiducia e credibilità.',

    'educationalInstitution.features.campus.title': 'Campus & Strutture',
    'educationalInstitution.features.campus.description': 'Mostra il tuo campus, le aule, i laboratori, le biblioteche e altre strutture che migliorano l\'esperienza di apprendimento.',

    'educationalInstitution.features.activities.title': 'Vita Studentesca',
    'educationalInstitution.features.activities.description': 'Presenta attività extracurricolari, club, sport ed eventi che arricchiscono l\'esperienza degli studenti.',

    // CTA Section
    'educationalInstitution.cta.title': 'Pronto a elevare la tua istituzione educativa online?',
    'educationalInstitution.cta.description': 'Crea un sito web professionale che attragga potenziali studenti e comunichi i valori e la visione della tua istituzione.',
    'educationalInstitution.cta.button': 'Inizia il Tuo Sito Web Educativo',
  },
}; 