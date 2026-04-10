import SectionWrapper from '@/components/ui/SectionWrapper';
import Accordion from '@/components/ui/Accordion';

const faqs = [
  {
    question: 'Was kostet ein Website-Check?',
    answer: 'Nichts. Der Check ist vollständig kostenlos — keine Anmeldung, keine Kreditkarte.',
  },
  {
    question: 'Wie lange dauert es, bis meine Website fertig ist?',
    answer: 'In der Regel 10 Arbeitstage. Bei grösseren Projekten können es 3 Wochen sein.',
  },
  {
    question: 'Was kostet eine neue Website?',
    answer: "Einmalig ab CHF 1'490 (Frühlings-Aktion 2026), danach CHF 59/Monat für Betreuung & Hosting. Alles transparent.",
  },
  {
    question: 'Muss ich technische Kenntnisse haben?',
    answer: 'Nein. Ich kümmere mich um alles Technische — Hosting, Domain, Updates, Sicherheit.',
  },
  {
    question: 'Was passiert, wenn mir das Ergebnis nicht gefällt?',
    answer: 'Sie sehen die neue Site, bevor sie online geht. Ihre Änderungswünsche werden eingearbeitet.',
  },
  {
    question: 'Kann ich meine bestehende Domain behalten?',
    answer:
      'Ja. Ich kümmere mich um die Übertragung oder Verknüpfung, egal wo Ihre Domain registriert ist.',
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
