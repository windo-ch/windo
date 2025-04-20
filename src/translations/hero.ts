import { Language } from '../contexts/LanguageContext';

type TranslationSet = Record<string, string>;
type LanguageTranslations = Record<Language, TranslationSet>;

export const heroTranslations: LanguageTranslations = {
  en: {
    'hero.title': 'Your Window to the Internet',
    'hero.description': 'We create beautiful, functional websites that help your business stand out online.',
    'hero.cta': 'Start Your Project',
    'hero.discover_services': 'Discover Services',
  },
  de: {
    'hero.title': 'Ihr Fenster ins Internet',
    'hero.description': 'Wir erstellen schöne, funktionale Websites, die Ihr Unternehmen online hervorheben.',
    'hero.cta': 'Projekt starten',
    'hero.discover_services': 'Dienste entdecken',
  },
  fr: {
    'hero.title': 'Votre Fenêtre sur Internet',
    'hero.description': 'Nous créons des sites web beaux et fonctionnels qui aident votre entreprise à se démarquer en ligne.',
    'hero.cta': 'Lancez Votre Projet',
    'hero.discover_services': 'Découvrir les Services',
  },
  it: {
    'hero.title': 'La Vostra Finestra su Internet',
    'hero.description': 'Creiamo siti web belli e funzionali che aiutano la tua azienda a distinguersi online.',
    'hero.cta': 'Avvia il Tuo Progetto',
    'hero.discover_services': 'Scopri i Servizi',
  },
}; 