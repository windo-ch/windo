import { SectionLabel } from './section-label';

const STEPS = [
  {
    label: 'Gespräch',
    title: '15 Minuten am Telefon.',
    body: 'Sie erzählen mir, was Ihre Website braucht. Ich sage Ihnen ehrlich, ob und wie ich helfen kann. Kein Pitch.',
  },
  {
    label: 'Umsetzung',
    title: 'In 10 Arbeitstagen online.',
    body: 'Ich baue Ihre Website. Sie bekommen einen Entwurf, geben Feedback, ich passe an. Direkt mit mir — kein Ticketsystem, kein Projektmanager dazwischen.',
  },
  {
    label: 'Ergebnis',
    title: 'Eine Website, die für Sie arbeitet.',
    body: 'Schnell, modern, mobiloptimiert. Ich kümmere mich um Hosting, Updates und Support. Sie kümmern sich um Ihr Geschäft.',
  },
];

export function HowItWorks() {
  return (
    <section className="py-16 md:py-20">
      <SectionLabel text="Ablauf" />
      <h2 className="mt-6 text-2xl md:text-3xl font-semibold text-bg-dark leading-snug">
        So läuft's ab.
      </h2>
      <div className="mt-8 space-y-0">
        {STEPS.map((step, i) => (
          <div key={i} className="flex gap-5 pb-8 last:pb-0">
            <div className="flex flex-col items-center">
              <div className="w-8 h-8 rounded-full bg-glow-deep text-white text-sm font-bold flex items-center justify-center shrink-0">
                {i + 1}
              </div>
              {i < STEPS.length - 1 && (
                <div className="w-px flex-1 bg-glow-soft mt-2" />
              )}
            </div>
            <div className="pt-1 pb-2">
              <p className="text-xs font-semibold text-glow-deep uppercase tracking-wider mb-1">
                {step.label}
              </p>
              <h3 className="font-semibold text-bg-dark mb-1">{step.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{step.body}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
