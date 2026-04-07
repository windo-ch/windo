import { SectionLabel } from './section-label';

interface AiHookProps {
  aiHook: {
    chatPrompt: string;
    result: string;
    punchline: string;
  };
}

export function AiHook({ aiHook }: AiHookProps) {
  return (
    <section className="py-16 md:py-20">
      <SectionLabel text="KI-Sichtbarkeit" />
      <h2 className="mt-6 text-2xl md:text-3xl font-semibold text-bg-dark leading-snug">
        Was passiert, wenn jemand fragt?
      </h2>
      <p className="mt-3 text-sm text-gray-600">
        Immer mehr Suchanfragen laufen über ChatGPT und andere KI-Assistenten. Wer dort nicht vorkommt, verliert Kunden — still und leise.
      </p>

      <div className="mt-8 rounded-2xl border border-glow-soft bg-bg-card card-warm p-6 md:p-8">
        <div className="bg-gray-50 rounded-lg px-4 py-3 flex items-center gap-2">
          <span className="text-gray-400 text-sm shrink-0">ChatGPT</span>
          <span className="text-gray-400 text-xs mx-1">›</span>
          <span className="text-bg-dark text-sm">{aiHook.chatPrompt}</span>
          <span className="ml-auto text-gray-400 text-xs">⏎</span>
        </div>

        <div className="bg-bg-subtle rounded-lg px-4 py-4 mt-3">
          <p className="text-xs text-gray-400 mb-3 uppercase tracking-wider">Antwort</p>
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <span className="w-2 h-2 rounded-full bg-gray-300 shrink-0" />
              Erster Treffer — erster-treffer.ch
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <span className="w-2 h-2 rounded-full bg-gray-300 shrink-0" />
              Zweiter Treffer — zweiter-treffer.ch
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <span className="w-2 h-2 rounded-full bg-gray-300 shrink-0" />
              Dritter Treffer — dritter-treffer.ch
            </div>
            <div className="flex items-center gap-2 text-sm text-red-500 mt-3 pt-3 border-t border-gray-200">
              <span className="w-2 h-2 rounded-full bg-red-400 shrink-0" />
              {aiHook.result}
            </div>
          </div>
        </div>

        <p className="mt-4 text-sm font-semibold text-glow-deep">{aiHook.punchline}</p>
      </div>
    </section>
  );
}
