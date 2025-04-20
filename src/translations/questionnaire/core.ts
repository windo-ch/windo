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
    
    // Confirmation Dialog
    'questionnaire.confirmation.successTitle': 'Submission Successful',
    'questionnaire.confirmation.errorTitle': 'Submission Error',
    'questionnaire.confirmation.successMessage': 'Your questionnaire has been successfully submitted',
    'questionnaire.confirmation.response24h': 'We will review your requirements and get back to you within 24 hours',
    'questionnaire.confirmation.errorMessage': 'We couldn\'t submit your questionnaire',
    'questionnaire.confirmation.tryAgain': 'Please try again or contact our support team for assistance',
    'questionnaire.confirmation.continue': 'Continue',
    'questionnaire.confirmation.close': 'Close',
    'questionnaire.confirmation.viewSubmission': 'View your submission',
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
    
    // Confirmation Dialog
    'questionnaire.confirmation.successTitle': 'Übermittlung erfolgreich',
    'questionnaire.confirmation.errorTitle': 'Übermittlungsfehler',
    'questionnaire.confirmation.successMessage': 'Ihr Fragebogen wurde erfolgreich übermittelt',
    'questionnaire.confirmation.response24h': 'Wir werden Ihre Anforderungen prüfen und uns innerhalb von 24 Stunden bei Ihnen melden',
    'questionnaire.confirmation.errorMessage': 'Wir konnten Ihren Fragebogen nicht übermitteln',
    'questionnaire.confirmation.tryAgain': 'Bitte versuchen Sie es erneut oder kontaktieren Sie unseren Support für Hilfe',
    'questionnaire.confirmation.continue': 'Fortfahren',
    'questionnaire.confirmation.close': 'Schließen',
    'questionnaire.confirmation.viewSubmission': 'Ihre Einreichung ansehen',
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
    
    // Confirmation Dialog
    'questionnaire.confirmation.successTitle': 'Soumission Réussie',
    'questionnaire.confirmation.errorTitle': 'Erreur de Soumission',
    'questionnaire.confirmation.successMessage': 'Votre questionnaire a été soumis avec succès',
    'questionnaire.confirmation.response24h': 'Nous examinerons vos besoins et vous répondrons dans les 24 heures',
    'questionnaire.confirmation.errorMessage': 'Nous n\'avons pas pu soumettre votre questionnaire',
    'questionnaire.confirmation.tryAgain': 'Veuillez réessayer ou contacter notre équipe d\'assistance pour obtenir de l\'aide',
    'questionnaire.confirmation.continue': 'Continuer',
    'questionnaire.confirmation.close': 'Fermer',
    'questionnaire.confirmation.viewSubmission': 'Voir votre soumission',
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
    
    // Confirmation Dialog
    'questionnaire.confirmation.successTitle': 'Invio Riuscito',
    'questionnaire.confirmation.errorTitle': 'Errore di Invio',
    'questionnaire.confirmation.successMessage': 'Il tuo questionario è stato inviato con successo',
    'questionnaire.confirmation.response24h': 'Esamineremo le tue richieste e ti risponderemo entro 24 ore',
    'questionnaire.confirmation.errorMessage': 'Non siamo riusciti a inviare il tuo questionario',
    'questionnaire.confirmation.tryAgain': 'Per favore riprova o contatta il nostro team di supporto per assistenza',
    'questionnaire.confirmation.continue': 'Continua',
    'questionnaire.confirmation.close': 'Chiudi',
    'questionnaire.confirmation.viewSubmission': 'Visualizza la tua submission',
  },
}; 