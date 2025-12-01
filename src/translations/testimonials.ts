import { Language } from '../contexts/LanguageContext';

type TranslationSet = Record<string, any>;
type LanguageTranslations = Record<Language, TranslationSet>;

export const testimonialsTranslations: LanguageTranslations = {
  en: {
    'testimonials.neumann.content': 'Windo has created two professional websites for our dental practice. The personal support, transparent communication, and attention to detail convinced us. We now have modern, responsive websites that perfectly represent our specialization and services.',
    'testimonials.neumann.author': 'Dr. med. dent. Günther Neumann',
    'testimonials.neumann.company': 'Dental Practice Schaffhausen',
    
    'testimonials.topcut.content': 'Simple, clear, and exactly what we needed. Windo created a modern website for our barbershop that makes it easy for customers to find us and book appointments. The personal support and fair pricing made the decision easy.',
    'testimonials.topcut.author': 'Top Cut Barber',
    'testimonials.topcut.company': 'Top Cut Barber',
  },
  
  de: {
    'testimonials.neumann.content': 'Windo hat für unsere Zahnarztpraxis zwei professionelle Websites erstellt. Der persönliche Support, die transparente Kommunikation und die Sorgfalt haben uns überzeugt. Wir haben jetzt moderne, responsive Websites, die unsere Spezialisierung und Dienstleistungen perfekt darstellen.',
    'testimonials.neumann.author': 'Dr. med. dent. Günther Neumann',
    'testimonials.neumann.company': 'Zahnarztpraxis Schaffhausen',
    
    'testimonials.topcut.content': 'Einfach, klar und genau das, was wir brauchten. Windo hat eine moderne Website für unseren Friseursalon erstellt, die es Kunden leicht macht, uns zu finden und Termine zu buchen. Der persönliche Support und faire Preise haben die Entscheidung leicht gemacht.',
    'testimonials.topcut.author': 'Top Cut Barber',
    'testimonials.topcut.company': 'Top Cut Barber',
  }
};

