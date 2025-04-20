import { Language } from '../../contexts/LanguageContext';

type TranslationSet = Record<string, string>;
type LanguageTranslations = Record<Language, TranslationSet>;

export const questionnaireTechnicalContactTranslations: LanguageTranslations = {
  en: {
    // Technical & Contact Step
    'questionnaire.technical.title': 'Technical & Contact',
    'questionnaire.technical.subtitle': 'Technical details and contact information for your project',
    
    // Hosting options
    'questionnaire.technical.hosting.title': 'Hosting Options',
    'questionnaire.technical.hosting.windo.label': 'Hosted by Windo',
    'questionnaire.technical.hosting.windo.description': 'We\'ll take care of hosting your website on our secure servers',
    'questionnaire.technical.hosting.own.label': 'Using my own hosting',
    'questionnaire.technical.hosting.own.description': 'You already have a hosting provider that you\'d like to use',
    'questionnaire.technical.hosting.undecided.label': 'Not sure yet',
    'questionnaire.technical.hosting.undecided.description': 'We can discuss hosting options during the consultation',
    
    // Domain options
    'questionnaire.technical.domain.title': 'Domain Information',
    'questionnaire.technical.domain.have.label': 'I already have a domain',
    'questionnaire.technical.domain.have.description': 'You already have a domain name that you\'d like to use',
    'questionnaire.technical.domain.need.label': 'I need a new domain',
    'questionnaire.technical.domain.need.description': 'We\'ll help you find and register the perfect domain name for your business',
    'questionnaire.technical.domain.undecided.label': 'Not sure yet',
    'questionnaire.technical.domain.undecided.description': 'We can discuss domain options during the consultation',
    
    // Existing domain
    'questionnaire.technical.existingDomain.label': 'Your Domain Name',
    'questionnaire.technical.existingDomain.placeholder': 'e.g., example.com',
    'questionnaire.technical.existingDomain.description': 'Enter your existing domain name if you have one',
    
    // Requirements
    'questionnaire.technical.requirements.title': 'Technical Requirements',
    'questionnaire.technical.requirements.placeholder': 'Describe any specific technical requirements or features you need...',
    'questionnaire.technical.requirements.description': 'Let us know if you have any specific technical requirements or integrations for your project',
    
    // Contact information
    'questionnaire.technical.contact.title': 'Contact Information',
    'questionnaire.technical.contact.name.label': 'Name',
    'questionnaire.technical.contact.name.placeholder': 'Your name',
    'questionnaire.technical.contact.email.label': 'Email',
    'questionnaire.technical.contact.email.placeholder': 'your@email.com',
    'questionnaire.technical.contact.phone.label': 'Phone',
    'questionnaire.technical.contact.phone.placeholder': '+41 79 123 45 67',
    'questionnaire.technical.contact.company.label': 'Company',
    'questionnaire.technical.contact.company.placeholder': 'Company name',
    
    // Budget
    'questionnaire.technical.budget.title': 'Project Budget',
    'questionnaire.technical.budget.range.label': 'Budget Range',
    'questionnaire.technical.budget.range.description': 'Select your budget range to help us understand your project scope and requirements.',
    'questionnaire.technical.budget.label': 'Budget Range',
    'questionnaire.technical.budget.description': 'Select your budget range to help us understand your project scope and requirements.',
    'questionnaire.technical.budget.small': 'Small Project',
    'questionnaire.technical.budget.medium': 'Medium Project',
    'questionnaire.technical.budget.large': 'Large Project',
    'questionnaire.technical.budget.enterprise': 'Enterprise',
    
    // Terms agreement
    'questionnaire.terms.agreement.label': 'I agree to the terms and conditions',
    'questionnaire.terms.agreement.description': 'By checking this box, you agree to our terms of service and privacy policy',
  },
  de: {
    // Technical & Contact Step
    'questionnaire.technical.title': 'Technik & Kontakt',
    'questionnaire.technical.subtitle': 'Technische Details und Kontaktinformationen für Ihr Projekt',
    
    // Hosting options
    'questionnaire.technical.hosting.title': 'Hosting-Optionen',
    'questionnaire.technical.hosting.windo.label': 'Gehostet von Windo',
    'questionnaire.technical.hosting.windo.description': 'Wir kümmern uns um das Hosting Ihrer Website auf unseren sicheren Servern',
    'questionnaire.technical.hosting.own.label': 'Ich nutze mein eigenes Hosting',
    'questionnaire.technical.hosting.own.description': 'Sie haben bereits einen Hosting-Anbieter, den Sie nutzen möchten',
    'questionnaire.technical.hosting.undecided.label': 'Noch nicht sicher',
    'questionnaire.technical.hosting.undecided.description': 'Wir können Hosting-Optionen während der Beratung besprechen',
    
    // Domain options
    'questionnaire.technical.domain.title': 'Domain-Informationen',
    'questionnaire.technical.domain.have.label': 'Ich habe bereits eine Domain',
    'questionnaire.technical.domain.have.description': 'Sie haben bereits einen Domainnamen, den Sie verwenden möchten',
    'questionnaire.technical.domain.need.label': 'Ich benötige eine neue Domain',
    'questionnaire.technical.domain.need.description': 'Wir helfen Ihnen, den perfekten Domainnamen für Ihr Unternehmen zu finden und zu registrieren',
    'questionnaire.technical.domain.undecided.label': 'Noch nicht sicher',
    'questionnaire.technical.domain.undecided.description': 'Wir können Domain-Optionen während der Beratung besprechen',
    
    // Existing domain
    'questionnaire.technical.existingDomain.label': 'Ihr Domainname',
    'questionnaire.technical.existingDomain.placeholder': 'z.B. beispiel.ch',
    'questionnaire.technical.existingDomain.description': 'Geben Sie Ihren bestehenden Domainnamen ein, falls vorhanden',
    
    // Requirements
    'questionnaire.technical.requirements.title': 'Technische Anforderungen',
    'questionnaire.technical.requirements.placeholder': 'Beschreiben Sie spezifische technische Anforderungen oder Funktionen, die Sie benötigen...',
    'questionnaire.technical.requirements.description': 'Teilen Sie uns mit, ob Sie spezifische technische Anforderungen oder Integrationen für Ihr Projekt haben',
    
    // Contact information
    'questionnaire.technical.contact.title': 'Kontaktinformationen',
    'questionnaire.technical.contact.name.label': 'Name',
    'questionnaire.technical.contact.name.placeholder': 'Ihr Name',
    'questionnaire.technical.contact.email.label': 'E-Mail',
    'questionnaire.technical.contact.email.placeholder': 'ihre@email.de',
    'questionnaire.technical.contact.phone.label': 'Telefon',
    'questionnaire.technical.contact.phone.placeholder': '+49 123 456789',
    'questionnaire.technical.contact.company.label': 'Unternehmen',
    'questionnaire.technical.contact.company.placeholder': 'Unternehmensname',
    
    // Budget
    'questionnaire.technical.budget.title': 'Projektbudget',
    'questionnaire.technical.budget.range.label': 'Budget-Bereich',
    'questionnaire.technical.budget.range.description': 'Wählen Sie Ihren Budget-Bereich, um uns zu helfen, den Umfang und die Anforderungen Ihres Projekts zu verstehen',
    'questionnaire.technical.budget.label': 'Budget-Bereich',
    'questionnaire.technical.budget.description': 'Wählen Sie Ihren Budget-Bereich, um uns zu helfen, den Umfang und die Anforderungen Ihres Projekts zu verstehen',
    'questionnaire.technical.budget.small': 'Kleines Projekt',
    'questionnaire.technical.budget.medium': 'Mittleres Projekt',
    'questionnaire.technical.budget.large': 'Grosses Projekt',
    'questionnaire.technical.budget.enterprise': 'Unternehmensprojekt',
    
    // Terms agreement
    'questionnaire.terms.agreement.label': 'Ich stimme den Nutzungsbedingungen zu',
    'questionnaire.terms.agreement.description': 'Durch Anklicken dieses Kästchens stimmen Sie unseren Nutzungsbedingungen und Datenschutzrichtlinien zu',
  },
  fr: {
    // Technical & Contact Step
    'questionnaire.technical.title': 'Technique & Contact',
    'questionnaire.technical.subtitle': 'Détails techniques et coordonnées pour votre projet',
    
    // Hosting options
    'questionnaire.technical.hosting.title': 'Options d\'Hébergement',
    'questionnaire.technical.hosting.windo.label': 'Hébergé par Windo',
    'questionnaire.technical.hosting.windo.description': 'Nous nous occupons de l\'hébergement de votre site web sur nos serveurs sécurisés',
    'questionnaire.technical.hosting.own.label': 'J\'utilise mon propre hébergement',
    'questionnaire.technical.hosting.own.description': 'Vous avez déjà un fournisseur d\'hébergement que vous souhaitez utiliser',
    'questionnaire.technical.hosting.undecided.label': 'Pas encore décidé',
    'questionnaire.technical.hosting.undecided.description': 'Nous pouvons discuter des options d\'hébergement lors de la consultation',
    
    // Domain options
    'questionnaire.technical.domain.title': 'Informations sur le Domaine',
    'questionnaire.technical.domain.have.label': 'J\'ai déjà un domaine',
    'questionnaire.technical.domain.have.description': 'Vous avez déjà un nom de domaine que vous souhaitez utiliser',
    'questionnaire.technical.domain.need.label': 'J\'ai besoin d\'un nouveau domaine',
    'questionnaire.technical.domain.need.description': 'Nous vous aiderons à trouver et à enregistrer le nom de domaine parfait pour votre entreprise',
    'questionnaire.technical.domain.undecided.label': 'Pas encore décidé',
    'questionnaire.technical.domain.undecided.description': 'Nous pouvons discuter des options de domaine lors de la consultation',
    
    // Existing domain
    'questionnaire.technical.existingDomain.label': 'Votre Nom de Domaine',
    'questionnaire.technical.existingDomain.placeholder': 'ex., exemple.fr',
    'questionnaire.technical.existingDomain.description': 'Entrez votre nom de domaine existant si vous en avez un',
    
    // Requirements
    'questionnaire.technical.requirements.title': 'Exigences Techniques',
    'questionnaire.technical.requirements.placeholder': 'Décrivez les exigences techniques spécifiques ou les fonctionnalités dont vous avez besoin...',
    'questionnaire.technical.requirements.description': 'Faites-nous savoir si vous avez des besoins techniques spécifiques ou des intégrations pour votre projet',
    
    // Contact information
    'questionnaire.technical.contact.title': 'Coordonnées',
    'questionnaire.technical.contact.name.label': 'Nom',
    'questionnaire.technical.contact.name.placeholder': 'Votre nom',
    'questionnaire.technical.contact.email.label': 'Email',
    'questionnaire.technical.contact.email.placeholder': 'votre@email.fr',
    'questionnaire.technical.contact.phone.label': 'Téléphone',
    'questionnaire.technical.contact.phone.placeholder': '+33 6 12 34 56 78',
    'questionnaire.technical.contact.company.label': 'Entreprise',
    'questionnaire.technical.contact.company.placeholder': 'Nom de l\'entreprise',
    
    // Budget
    'questionnaire.technical.budget.title': 'Budget du Projet',
    'questionnaire.technical.budget.range.label': 'Fourchette de Budget',
    'questionnaire.technical.budget.range.description': 'Sélectionnez votre fourchette de budget pour nous aider à comprendre l\'étendue et les exigences de votre projet',
    'questionnaire.technical.budget.label': 'Fourchette de Budget',
    'questionnaire.technical.budget.description': 'Sélectionnez votre fourchette de budget pour nous aider à comprendre l\'étendue et les exigences de votre projet',
    'questionnaire.technical.budget.small': 'Petit Projet',
    'questionnaire.technical.budget.medium': 'Projet Moyen',
    'questionnaire.technical.budget.large': 'Grand Projet',
    'questionnaire.technical.budget.enterprise': 'Enterprise',
    
    // Terms agreement
    'questionnaire.terms.agreement.label': 'J\'accepte les conditions générales',
    'questionnaire.terms.agreement.description': 'En cochant cette case, vous acceptez nos conditions d\'utilisation et notre politique de confidentialité',
  },
  it: {
    // Technical & Contact Step
    'questionnaire.technical.title': 'Informazioni Tecniche & Contatti',
    'questionnaire.technical.subtitle': 'Dettagli tecnici e informazioni di contatto per il tuo progetto',
    
    // Hosting options
    'questionnaire.technical.hosting.title': 'Opzioni di Hosting',
    'questionnaire.technical.hosting.windo.label': 'Ospitato da Windo',
    'questionnaire.technical.hosting.windo.description': 'Ci occuperemo di ospitare il tuo sito web sui nostri server sicuri',
    'questionnaire.technical.hosting.own.label': 'Uso il mio hosting',
    'questionnaire.technical.hosting.own.description': 'Hai già un provider di hosting che vorresti utilizzare',
    'questionnaire.technical.hosting.undecided.label': 'Non sono ancora sicuro',
    'questionnaire.technical.hosting.undecided.description': 'Possiamo discutere delle opzioni di hosting durante la consultazione',
    
    // Domain options
    'questionnaire.technical.domain.title': 'Informazioni sul Dominio',
    'questionnaire.technical.domain.have.label': 'Ho già un dominio',
    'questionnaire.technical.domain.have.description': 'Hai già un nome di dominio che vorresti utilizzare',
    'questionnaire.technical.domain.need.label': 'Ho bisogno di un nuovo dominio',
    'questionnaire.technical.domain.need.description': 'Ti aiuteremo a trovare e registrare il nome di dominio perfetto per la tua attività',
    'questionnaire.technical.domain.undecided.label': 'Non sono ancora sicuro',
    'questionnaire.technical.domain.undecided.description': 'Possiamo discutere delle opzioni di dominio durante la consultazione',
    
    // Existing domain
    'questionnaire.technical.existingDomain.label': 'Il Tuo Nome di Dominio',
    'questionnaire.technical.existingDomain.placeholder': 'es., esempio.it',
    'questionnaire.technical.existingDomain.description': 'Inserisci il tuo nome di dominio esistente se ne hai uno',
    
    // Requirements
    'questionnaire.technical.requirements.title': 'Requisiti Tecnici',
    'questionnaire.technical.requirements.placeholder': 'Descrivi requisiti tecnici specifici o funzionalità di cui hai bisogno...',
    'questionnaire.technical.requirements.description': 'Comunicaci se hai requisiti tecnici o integrazioni speciali per il tuo progetto',
    
    // Contact information
    'questionnaire.technical.contact.title': 'Informazioni di Contatto',
    'questionnaire.technical.contact.name.label': 'Nome',
    'questionnaire.technical.contact.name.placeholder': 'Il tuo nome',
    'questionnaire.technical.contact.email.label': 'Email',
    'questionnaire.technical.contact.email.placeholder': 'tuo@email.it',
    'questionnaire.technical.contact.phone.label': 'Telefono',
    'questionnaire.technical.contact.phone.placeholder': '+39 123 456 7890',
    'questionnaire.technical.contact.company.label': 'Azienda',
    'questionnaire.technical.contact.company.placeholder': 'Nome azienda',
    
    // Budget
    'questionnaire.technical.budget.title': 'Budget del Progetto',
    'questionnaire.technical.budget.range.label': 'Intervallo di Budget',
    'questionnaire.technical.budget.range.description': 'Seleziona il tuo intervallo di budget per aiutarci a comprendere l\'ambito e i requisiti del tuo progetto',
    'questionnaire.technical.budget.label': 'Intervallo di Budget',
    'questionnaire.technical.budget.description': 'Seleziona il tuo intervallo di budget per aiutarci a comprendere l\'ambito e i requisiti del tuo progetto',
    'questionnaire.technical.budget.small': 'Piccolo Progetto',
    'questionnaire.technical.budget.medium': 'Progetto Medio',
    'questionnaire.technical.budget.large': 'Grande Progetto',
    'questionnaire.technical.budget.enterprise': 'Enterprise',
    
    // Terms agreement
    'questionnaire.terms.agreement.label': 'Accetto i termini e le condizioni',
    'questionnaire.terms.agreement.description': 'Selezionando questa casella, accetti i nostri termini di servizio e la politica sulla privacy',
  },
}; 