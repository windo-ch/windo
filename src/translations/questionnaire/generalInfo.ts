import { Language } from '../../contexts/LanguageContext';

type TranslationSet = Record<string, string>;
type LanguageTranslations = Record<Language, TranslationSet>;

export const questionnaireGeneralInfoTranslations: LanguageTranslations = {
  en: {
    // General Info Step
    'questionnaire.generalInfo.title': 'General Information',
    'questionnaire.generalInfo.subtitle': 'Tell us about your business',
    
    // Company Information
    'questionnaire.generalInfo.companyName.label': 'Company Name',
    'questionnaire.generalInfo.companyName.placeholder': 'Enter your company name',
    'questionnaire.generalInfo.website.label': 'Website',
    'questionnaire.generalInfo.website.placeholder': 'https://example.com',
    'questionnaire.generalInfo.industry.label': 'Industry',
    'questionnaire.generalInfo.industry.placeholder': 'Select your industry',
    
    // Company Size
    'questionnaire.generalInfo.companySize.label': 'Company Size',
    'questionnaire.generalInfo.companySize.option1': '1-10 employees',
    'questionnaire.generalInfo.companySize.option2': '11-50 employees',
    'questionnaire.generalInfo.companySize.option3': '51-200 employees',
    'questionnaire.generalInfo.companySize.option4': '201-500 employees',
    'questionnaire.generalInfo.companySize.option5': '501-1000 employees',
    'questionnaire.generalInfo.companySize.option6': '1000+ employees',
    
    // Project Description
    'questionnaire.generalInfo.projectDescription.label': 'Project Description',
    'questionnaire.generalInfo.projectDescription.placeholder': 'Briefly describe your project and its goals',
    
    // Business Info
    'questionnaire.businessInfo.title': 'Tell us about your business',
    'questionnaire.business_info.title': 'Business Info',
    'questionnaire.businessInfo.subtitle': 'Help us understand your business and what makes it unique.',
    'questionnaire.businessInfo.industry.label': 'Industry',
    'questionnaire.businessInfo.industry.placeholder': 'e.g., E-commerce, Healthcare, Finance',
    'questionnaire.businessInfo.industry.description': 'What industry does your business operate in?',
    'questionnaire.businessInfo.company.label': 'Company Name',
    'questionnaire.businessInfo.company.placeholder': 'Your company name',
    'questionnaire.businessInfo.company.description': 'Please provide your company name',
    'questionnaire.businessInfo.audience.label': 'Target Audience',
    'questionnaire.businessInfo.audience.placeholder': 'Describe your ideal customers',
    'questionnaire.businessInfo.audience.description': 'Who are you trying to reach with your website?',
    'questionnaire.businessInfo.services.label': 'Services',
    'questionnaire.businessInfo.services.placeholder': 'List your main services or products',
    'questionnaire.businessInfo.services.description': 'What services or products do you offer?',
    'questionnaire.businessInfo.values.label': 'Brand Values',
    'questionnaire.businessInfo.values.placeholder': 'Describe your brand values and personality',
    'questionnaire.businessInfo.values.description': 'What values define your brand?',
  },
  de: {
    // General Info Step
    'questionnaire.generalInfo.title': 'Allgemeine Informationen',
    'questionnaire.generalInfo.subtitle': 'Erzählen Sie uns etwas über Ihr Unternehmen',
    
    // Company Information
    'questionnaire.generalInfo.companyName.label': 'Unternehmensname',
    'questionnaire.generalInfo.companyName.placeholder': 'Geben Sie Ihren Unternehmensnamen ein',
    'questionnaire.generalInfo.website.label': 'Website',
    'questionnaire.generalInfo.website.placeholder': 'https://beispiel.de',
    'questionnaire.generalInfo.industry.label': 'Branche',
    'questionnaire.generalInfo.industry.placeholder': 'Wählen Sie Ihre Branche',
    
    // Company Size
    'questionnaire.generalInfo.companySize.label': 'Unternehmensgrösse',
    'questionnaire.generalInfo.companySize.option1': '1-10 Mitarbeiter',
    'questionnaire.generalInfo.companySize.option2': '11-50 Mitarbeiter',
    'questionnaire.generalInfo.companySize.option3': '51-200 Mitarbeiter',
    'questionnaire.generalInfo.companySize.option4': '201-500 Mitarbeiter',
    'questionnaire.generalInfo.companySize.option5': '501-1000 Mitarbeiter',
    'questionnaire.generalInfo.companySize.option6': '1000+ Mitarbeiter',
    
    // Project Description
    'questionnaire.generalInfo.projectDescription.label': 'Projektbeschreibung',
    'questionnaire.generalInfo.projectDescription.placeholder': 'Beschreiben Sie kurz Ihr Projekt und seine Ziele',
    
    // Business Info
    'questionnaire.businessInfo.title': 'Erzählen Sie uns von Ihrem Unternehmen',
    'questionnaire.business_info.title': 'Unternehmensinformationen',
    'questionnaire.businessInfo.subtitle': 'Helfen Sie uns, Ihr Unternehmen und seine Besonderheiten zu verstehen.',
    'questionnaire.businessInfo.industry.label': 'Branche',
    'questionnaire.businessInfo.industry.placeholder': 'z.B. E-Commerce, Gesundheitswesen, Finanzen',
    'questionnaire.businessInfo.industry.description': 'In welcher Branche ist Ihr Unternehmen tätig?',
    'questionnaire.businessInfo.company.label': 'Unternehmensname',
    'questionnaire.businessInfo.company.placeholder': 'Ihr Unternehmensname',
    'questionnaire.businessInfo.company.description': 'Bitte geben Sie den Namen Ihres Unternehmens an',
    'questionnaire.businessInfo.audience.label': 'Zielgruppe',
    'questionnaire.businessInfo.audience.placeholder': 'Beschreiben Sie Ihre idealen Kunden',
    'questionnaire.businessInfo.audience.description': 'Wen möchten Sie mit Ihrer Website erreichen?',
    'questionnaire.businessInfo.services.label': 'Dienstleistungen',
    'questionnaire.businessInfo.services.placeholder': 'Listen Sie Ihre wichtigsten Dienstleistungen oder Produkte auf',
    'questionnaire.businessInfo.services.description': 'Welche Dienstleistungen oder Produkte bieten Sie an?',
    'questionnaire.businessInfo.values.label': 'Markenwerte',
    'questionnaire.businessInfo.values.placeholder': 'Beschreiben Sie Ihre Markenwerte und Persönlichkeit',
    'questionnaire.businessInfo.values.description': 'Welche Werte definieren Ihre Marke?',
  },
  fr: {
    // General Info Step
    'questionnaire.generalInfo.title': 'Informations Générales',
    'questionnaire.generalInfo.subtitle': 'Parlez-nous de votre entreprise',
    
    // Company Information
    'questionnaire.generalInfo.companyName.label': 'Nom de l\'entreprise',
    'questionnaire.generalInfo.companyName.placeholder': 'Entrez le nom de votre entreprise',
    'questionnaire.generalInfo.website.label': 'Site Web',
    'questionnaire.generalInfo.website.placeholder': 'https://exemple.fr',
    'questionnaire.generalInfo.industry.label': 'Secteur d\'activité',
    'questionnaire.generalInfo.industry.placeholder': 'Choisissez votre secteur',
    
    // Company Size
    'questionnaire.generalInfo.companySize.label': 'Taille de l\'entreprise',
    'questionnaire.generalInfo.companySize.option1': '1-10 employés',
    'questionnaire.generalInfo.companySize.option2': '11-50 employés',
    'questionnaire.generalInfo.companySize.option3': '51-200 employés',
    'questionnaire.generalInfo.companySize.option4': '201-500 employés',
    'questionnaire.generalInfo.companySize.option5': '501-1000 employés',
    'questionnaire.generalInfo.companySize.option6': '1000+ employés',
    
    // Project Description
    'questionnaire.generalInfo.projectDescription.label': 'Description du projet',
    'questionnaire.generalInfo.projectDescription.placeholder': 'Décrivez brièvement votre projet et ses objectifs',
    
    // Business Info
    'questionnaire.businessInfo.title': 'Parlez-nous de votre entreprise',
    'questionnaire.business_info.title': 'Info Entreprise',
    'questionnaire.businessInfo.subtitle': 'Aidez-nous à comprendre votre entreprise et ce qui la rend unique.',
    'questionnaire.businessInfo.industry.label': 'Secteur d\'activité',
    'questionnaire.businessInfo.industry.placeholder': 'par ex., E-commerce, Santé, Finance',
    'questionnaire.businessInfo.industry.description': 'Dans quel secteur votre entreprise exerce-t-elle?',
    'questionnaire.businessInfo.company.label': 'Nom de l\'entreprise',
    'questionnaire.businessInfo.company.placeholder': 'Le nom de votre entreprise',
    'questionnaire.businessInfo.company.description': 'Veuillez indiquer le nom de votre entreprise',
    'questionnaire.businessInfo.audience.label': 'Public cible',
    'questionnaire.businessInfo.audience.placeholder': 'Décrivez vos clients idéaux',
    'questionnaire.businessInfo.audience.description': 'Qui essayez-vous d\'atteindre avec votre site web?',
    'questionnaire.businessInfo.services.label': 'Services',
    'questionnaire.businessInfo.services.placeholder': 'Listez vos principaux services ou produits',
    'questionnaire.businessInfo.services.description': 'Quels services ou produits proposez-vous?',
    'questionnaire.businessInfo.values.label': 'Valeurs de la marque',
    'questionnaire.businessInfo.values.placeholder': 'Décrivez les valeurs et la personnalité de votre marque',
    'questionnaire.businessInfo.values.description': 'Quelles valeurs définissent votre marque?',
  },
  it: {
    // General Info Step
    'questionnaire.generalInfo.title': 'Informazioni Generali',
    'questionnaire.generalInfo.subtitle': 'Parlaci della tua azienda',
    
    // Company Information
    'questionnaire.generalInfo.companyName.label': 'Nome Azienda',
    'questionnaire.generalInfo.companyName.placeholder': 'Inserisci il nome della tua azienda',
    'questionnaire.generalInfo.website.label': 'Sito Web',
    'questionnaire.generalInfo.website.placeholder': 'https://esempio.it',
    'questionnaire.generalInfo.industry.label': 'Settore',
    'questionnaire.generalInfo.industry.placeholder': 'Seleziona il tuo settore',
    
    // Company Size
    'questionnaire.generalInfo.companySize.label': 'Dimensione Azienda',
    'questionnaire.generalInfo.companySize.option1': '1-10 dipendenti',
    'questionnaire.generalInfo.companySize.option2': '11-50 dipendenti',
    'questionnaire.generalInfo.companySize.option3': '51-200 dipendenti',
    'questionnaire.generalInfo.companySize.option4': '201-500 dipendenti',
    'questionnaire.generalInfo.companySize.option5': '501-1000 dipendenti',
    'questionnaire.generalInfo.companySize.option6': '1000+ dipendenti',
    
    // Project Description
    'questionnaire.generalInfo.projectDescription.label': 'Descrizione del Progetto',
    'questionnaire.generalInfo.projectDescription.placeholder': 'Descrivi brevemente il tuo progetto e i suoi obiettivi',
    
    // Business Info
    'questionnaire.businessInfo.title': 'Parlaci della tua azienda',
    'questionnaire.business_info.title': 'Parlaci della tua azienda',
    'questionnaire.businessInfo.subtitle': 'Aiutaci a capire la tua azienda e ciò che la rende unica.',
    'questionnaire.businessInfo.industry.label': 'Settore',
    'questionnaire.businessInfo.industry.placeholder': 'es., E-commerce, Sanità, Finanza',
    'questionnaire.businessInfo.industry.description': 'In quale settore opera la tua azienda?',
    'questionnaire.businessInfo.company.label': 'Nome Azienda',
    'questionnaire.businessInfo.company.placeholder': 'Il nome della tua azienda',
    'questionnaire.businessInfo.company.description': 'Indica il nome della tua azienda',
    'questionnaire.businessInfo.audience.label': 'Pubblico Target',
    'questionnaire.businessInfo.audience.placeholder': 'Descrivi i tuoi clienti ideali',
    'questionnaire.businessInfo.audience.description': 'Chi stai cercando di raggiungere con il tuo sito web?',
    'questionnaire.businessInfo.services.label': 'Servizi',
    'questionnaire.businessInfo.services.placeholder': 'Elenca i tuoi principali servizi o prodotti',
    'questionnaire.businessInfo.services.description': 'Quali servizi o prodotti offri?',
    'questionnaire.businessInfo.values.label': 'Valori del Brand',
    'questionnaire.businessInfo.values.placeholder': 'Descrivi i valori e la personalità del tuo brand',
    'questionnaire.businessInfo.values.description': 'Quali valori definiscono il tuo brand?',
  },
}; 