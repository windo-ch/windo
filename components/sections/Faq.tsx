import SectionWrapper from '@/components/ui/SectionWrapper';
import Accordion from '@/components/ui/Accordion';

const faqs = [
  {
    question: 'Was ist der Unterschied zu Wix, Squarespace oder einem Baukasten?',
    answer:
      'Baukästen machen alle Websites gleich. Jeder erkennt das. Meine Websites sind individuell gebaut — eigenes Design, eigene Texte, kein Template. Und sie laden schneller, ranken besser, und gehören wirklich Ihnen.',
  },
  {
    question: '10 Arbeitstage — wirklich?',
    answer:
      'Ja. Der Prozess ist so aufgebaut, dass wir in zwei Wochen online sind: Briefing, Design, Texte, Feedback, Launch. Was es von Ihnen braucht: ein kurzes Gespräch und 1–2 Feedbackrunden. Den Rest übernehmen wir.',
  },
  {
    question: 'Was kostet es — und gibt es versteckte Kosten?',
    answer:
      "Ab CHF 990 (Landingpage) oder CHF 1'990 (Basis) — erstes Jahr komplett, inkl. Website, Hosting und Betreuung. Ab dem zweiten Jahr CHF 59/Monat — Hosting, Sicherheit, Updates und kleine Anpassungen inklusive. Keine Setup-Gebühren, keine Überraschungen.",
  },
  {
    question: 'Wie schnell werden Änderungen umgesetzt?',
    answer:
      'Innert 24 Stunden. Schreiben Sie per E-Mail oder WhatsApp — wir passen Texte, Bilder, Öffnungszeiten oder Preise noch am selben Tag an. Grössere Anpassungen besprechen wir kurz und liefern innert 48 Stunden.',
  },
  {
    question: 'Gehört mir die Website?',
    answer:
      'Ja — vollständig. Code, Inhalte, Domain: alles gehört Ihnen. Wenn Sie irgendwann wechseln möchten, nehmen Sie alles mit. Kein Lock-in, keine Abhängigkeit.',
  },
  {
    question: 'Was passiert, wenn ich kündige?',
    answer:
      'Sie behalten Ihre Website und alle Inhalte. Sie können sie selbst hosten oder zu einem anderen Anbieter wechseln — wir helfen bei der Übergabe. Monatlich kündbar, keine Mindestlaufzeit.',
  },
  {
    question: 'Wer steht hinter windo.ch?',
    answer:
      'Henry Barrows, Webentwickler aus Zug. Er arbeitet mit einer KI-Assistentin (Karin), die Anfragen entgegennimmt und Änderungen vorbereitet. Jede Änderung wird von Henry geprüft, bevor sie live geht. So bleibt die Qualität hoch — und der Preis tief.',
  },
  {
    question: 'Muss ich Texte oder Bilder liefern?',
    answer:
      'Texte sind immer inklusive — wir schreiben alles, Sie lesen gegenseitig und geben Feedback. Eigene Fotos sind ein Plus, aber kein Muss: Wir arbeiten auch mit lizenzfreiem Bildmaterial, wenn nichts vorhanden ist.',
  },
];

export default function Faq() {
  return (
    <SectionWrapper bg="bg">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-bg-dark mb-4">Häufige Fragen.</h2>
        </div>
        <Accordion items={faqs} />
      </div>
    </SectionWrapper>
  );
}
