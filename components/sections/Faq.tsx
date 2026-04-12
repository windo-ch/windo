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
      'Ja. Ich habe den Prozess so aufgebaut, dass wir in zwei Wochen online sind: Briefing, Design, Texte, Feedback, Launch. Was es von Ihnen braucht: ein kurzes Gespräch und 1–2 Feedbackrunden. Den Rest übernehme ich.',
  },
  {
    question: 'Was kostet es — und gibt es versteckte Kosten?',
    answer:
      "Ab CHF 990 (Landingpage) oder CHF 1'990 (Basis) — erstes Jahr komplett, inkl. Website, Hosting und Betreuung. Ab dem zweiten Jahr CHF 59/Mt. oder CHF 590/Jahr. Keine Setup-Gebühren, keine Überraschungen.",
  },
  {
    question: 'Gehört mir die Website?',
    answer:
      'Ja — vollständig. Code, Inhalte, Domain: alles gehört Ihnen. Wenn Sie irgendwann wechseln möchten, nehmen Sie alles mit. Kein Lock-in, keine Abhängigkeit.',
  },
  {
    question: 'Was passiert, wenn ich kündige?',
    answer:
      'Sie behalten Ihre Website und alle Inhalte. Sie können sie selbst hosten oder zu einem anderen Anbieter wechseln — ich helfe bei der Übergabe. Monatlich kündbar, keine Mindestlaufzeit.',
  },
  {
    question: 'Muss ich Texte oder Bilder liefern?',
    answer:
      'Texte sind immer inklusive — ich schreibe alles, Sie lesen gegenseitig und geben Feedback. Eigene Fotos sind ein Plus, aber kein Muss: Ich arbeite auch mit lizenzfreiem Bildmaterial, wenn nichts vorhanden ist.',
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
