import { Language } from '../../contexts/LanguageContext';

type TranslationSet = Record<string, string>;
type LanguageTranslations = Record<Language, TranslationSet>;

export const questionnaireCoreTranslations: LanguageTranslations = {
  en: {
    'questionnaire.title': 'Project Questionnaire',
    'questionnaire.subtitle': 'Help us understand your project requirements',
    
    // Form Navigation
    'questionnaire.navigation.next': 'Next',
    'questionnaire.navigation.previous': 'Previous',
    'questionnaire.navigation.submit': 'Submit',
    
    // Form Messages
    'questionnaire.form.error.title': 'Please check your answers',
    'questionnaire.form.error.message': 'Some fields need your attention before proceeding.',
    'questionnaire.form.error.generic': 'Something went wrong. Please try again.',
    'questionnaire.form.success.title': 'Project launched!',
    'questionnaire.form.success.message': 'We\'ll be in touch soon to discuss your project.',
  },
  de: {
    'questionnaire.title': 'Projekt-Fragebogen',
    'questionnaire.subtitle': 'Teilen Sie uns Ihre Projektideen mit, damit wir gemeinsam eine Lösung erstellen können',
    
    // Form Navigation
    'questionnaire.navigation.next': 'Weiter',
    'questionnaire.navigation.previous': 'Zurück',
    'questionnaire.navigation.submit': 'Einreichen',
    
    // Form Messages
    'questionnaire.form.error.title': 'Bitte überprüfen Sie Ihre Antworten',
    'questionnaire.form.error.message': 'Einige Felder benötigen Ihre Aufmerksamkeit, bevor Sie fortfahren können.',
    'questionnaire.form.error.generic': 'Etwas ist schiefgelaufen. Bitte versuchen Sie es erneut.',
    'questionnaire.form.success.title': 'Projekt gestartet!',
    'questionnaire.form.success.message': 'Wir werden uns in Kürze mit Ihnen in Verbindung setzen, um Ihr Projekt zu besprechen.',
  },
  fr: {
    'questionnaire.title': 'Questionnaire de Projet',
    'questionnaire.subtitle': 'Partagez vos idées de projet pour que nous puissions créer une solution ensemble',
    
    // Form Navigation
    'questionnaire.navigation.next': 'Suivant',
    'questionnaire.navigation.previous': 'Précédent',
    'questionnaire.navigation.submit': 'Soumettre',
    
    // Form Messages
    'questionnaire.form.error.title': 'Veuillez vérifier vos réponses',
    'questionnaire.form.error.message': 'Certains champs nécessitent votre attention avant de continuer.',
    'questionnaire.form.error.generic': 'Une erreur s\'est produite. Veuillez réessayer.',
    'questionnaire.form.success.title': 'Projet lancé !',
    'questionnaire.form.success.message': 'Nous vous contacterons bientôt pour discuter de votre projet.',
  },
  it: {
    'questionnaire.title': 'Questionario del Progetto',
    'questionnaire.subtitle': 'Aiutaci a capire i requisiti del tuo progetto',
    
    // Form Navigation
    'questionnaire.navigation.next': 'Avanti',
    'questionnaire.navigation.previous': 'Indietro',
    'questionnaire.navigation.submit': 'Invia',
    
    // Form Messages
    'questionnaire.form.error.title': 'Controlla le tue risposte',
    'questionnaire.form.error.message': 'Alcuni campi richiedono la tua attenzione prima di procedere.',
    'questionnaire.form.error.generic': 'Qualcosa è andato storto. Per favore riprova.',
    'questionnaire.form.success.title': 'Progetto avviato!',
    'questionnaire.form.success.message': 'Ti contatteremo presto per discutere del tuo progetto.',
  },
}; 