import { Language } from '../contexts/LanguageContext';

type TranslationSet = Record<string, string>;
type LanguageTranslations = Record<Language, TranslationSet>;

export const homepageTranslations: LanguageTranslations = {
  en: {
    // Services section
    'homepage.services.badge': 'What\'s Included?',
    'homepage.services.title': 'Everything You Need',
    'homepage.services.subtitle': 'With a Managed Website from Windo, everything is included – from creation to ongoing support.',
    'homepage.services.cta': 'Free Consultation',
    'homepage.services.learn_more': 'Learn more',
    'homepage.exit_popup.title': 'Questions?',
    'homepage.exit_popup.subtitle': 'Free Consultation',
    'homepage.exit_popup.footer': 'Personal Support • Transparent Prices',
    
    // Case Studies section
    'homepage.case_studies.badge': 'Portfolio',
    'homepage.case_studies.title': 'Our <span class="text-transparent bg-clip-text bg-orange-gradient">Projects</span>',
    'homepage.case_studies.subtitle': 'Take a look at some of our latest projects. Each project is implemented with Swiss precision and personal support.',
    'homepage.case_studies.visit': 'Visit website',
    'homepage.case_studies.cta': 'Start Your Project',
    'homepage.case_studies.footer': 'All projects are implemented with personal support and long-term care',
    
    // Testimonials section
    'homepage.testimonials.badge': 'Testimonials',
    'homepage.testimonials.title': 'What Our <span class="text-transparent bg-clip-text bg-orange-gradient">Clients</span> Say',
    'homepage.testimonials.subtitle': 'Don\'t just take our word for it. Here\'s what our clients have to say about working with us.',
    
    // CTA section
    'homepage.cta.title': 'Ready for Your Managed Website?',
    'homepage.cta.description': 'No stress, no hassle – we take care of everything. From CHF 500/year for small businesses.',
    'homepage.cta.services_link': 'Our Services',
    'homepage.cta.features': '✓ Personal Support • ✓ Everything Included • ✓ From CHF 500/year',
  },
  
  de: {
    // Services section
    'homepage.services.badge': 'Was ist inklusive?',
    'homepage.services.title': 'Alles, was Sie brauchen',
    'homepage.services.subtitle': 'Bei einer Managed Website von Windo ist alles inklusive – von der Erstellung bis zur laufenden Betreuung.',
    'homepage.services.cta': 'Kostenlose Beratung',
    'homepage.services.learn_more': 'Mehr erfahren',
    'homepage.exit_popup.title': 'Fragen?',
    'homepage.exit_popup.subtitle': 'Kostenlose Beratung',
    'homepage.exit_popup.footer': 'Persönlicher Support • Transparente Preise',
    
    // Case Studies section
    'homepage.case_studies.badge': 'Portfolio',
    'homepage.case_studies.title': 'Unsere <span class="text-transparent bg-clip-text bg-orange-gradient">Projekte</span>',
    'homepage.case_studies.subtitle': 'Sehen Sie sich einige unserer neuesten Projekte an. Jedes Projekt wird mit Schweizer Präzision und persönlichem Support umgesetzt.',
    'homepage.case_studies.visit': 'Website besuchen',
    'homepage.case_studies.cta': 'Ihr Projekt starten',
    'homepage.case_studies.footer': 'Alle Projekte werden mit persönlichem Support und langfristiger Betreuung umgesetzt',
    
    // Testimonials section
    'homepage.testimonials.badge': 'Testimonials',
    'homepage.testimonials.title': 'Was unsere <span class="text-transparent bg-clip-text bg-orange-gradient">Kunden</span> sagen',
    'homepage.testimonials.subtitle': 'Hören Sie nicht nur auf unser Wort. Hier ist, was unsere Kunden über die Zusammenarbeit mit uns sagen.',
    
    // CTA section
    'homepage.cta.title': 'Bereit für Ihre Managed Website?',
    'homepage.cta.description': 'Kein Stress, kein Aufwand – wir kümmern uns um alles. Ab CHF 500/Jahr für kleine Unternehmen.',
    'homepage.cta.services_link': 'Unsere Leistungen',
    'homepage.cta.features': '✓ Persönlicher Support • ✓ Alles inklusive • ✓ Ab CHF 500/Jahr',
  }
};

