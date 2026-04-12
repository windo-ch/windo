"use client";

import { useState } from "react";
import { submitNeustart } from "./actions";

const inputClass =
  "w-full px-4 py-3 rounded-xl border-2 border-glow-soft focus:border-glow-deep focus:ring-2 focus:ring-glow-deep/20 outline-none transition-all text-base bg-white";

function Label({ children }: { children: React.ReactNode }) {
  return (
    <label className="block text-xs font-medium text-gray-500 mb-1.5">
      {children}
    </label>
  );
}

export default function NeustartForm() {
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    setError(false);

    const fd = new FormData(e.currentTarget);
    const result = await submitNeustart({
      firmenname: fd.get("firmenname") as string,
      websiteUrl: fd.get("website-url") as string,
      vorname: fd.get("vorname") as string,
      nachname: fd.get("nachname") as string,
      telefon: fd.get("telefon") as string,
      email: fd.get("email") as string,
      feedback: fd.get("feedback") as string,
    });

    setSubmitting(false);
    if (result.ok) {
      setDone(true);
    } else {
      setError(true);
    }
  }

  if (done) {
    return (
      <div className="text-center py-12">
        <p className="text-4xl mb-4">✓</p>
        <p className="text-2xl font-bold text-bg-dark mb-3">Danke!</p>
        <p className="text-gray-500 max-w-sm mx-auto leading-relaxed">
          Ich schaue mir Ihre Website an und melde mich innerhalb von
          24 Stunden mit Ihrem Entwurf. Versprochen.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <Label>Firmenname *</Label>
        <input
          type="text"
          name="firmenname"
          required
          placeholder="z.B. Zahnarztpraxis Müller"
          className={inputClass}
        />
      </div>

      <div>
        <Label>Website-URL</Label>
        <input
          type="text"
          name="website-url"
          placeholder="z.B. www.meine-praxis.ch oder «Ich habe noch keine»"
          className={inputClass}
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label>Vorname *</Label>
          <input
            type="text"
            name="vorname"
            required
            className={inputClass}
          />
        </div>
        <div>
          <Label>Nachname *</Label>
          <input
            type="text"
            name="nachname"
            required
            className={inputClass}
          />
        </div>
      </div>

      <div>
        <Label>Telefon *</Label>
        <input
          type="tel"
          name="telefon"
          required
          placeholder="079 ..."
          className={inputClass}
        />
      </div>

      <div>
        <Label>E-Mail *</Label>
        <input
          type="email"
          name="email"
          required
          placeholder="name@firma.ch"
          className={inputClass}
        />
      </div>

      <div>
        <Label>Was stört Sie an Ihrer aktuellen Website? (optional)</Label>
        <textarea
          name="feedback"
          rows={3}
          placeholder="Hilft mir beim Entwurf — aber kein Muss."
          className={`${inputClass} resize-none`}
        />
      </div>

      {error && (
        <p className="text-sm text-red-500">
          Etwas hat nicht geklappt. Bitte versuchen Sie es erneut oder rufen Sie mich direkt an.
        </p>
      )}

      <button
        type="submit"
        disabled={submitting}
        className="w-full bg-glow-deep text-white font-semibold px-7 py-4 rounded-xl btn-glow transition-opacity disabled:opacity-50 disabled:cursor-not-allowed text-base"
      >
        {submitting ? "Wird gesendet…" : "Neustart anfragen"}
      </button>

      <p className="text-gray-400 text-xs text-center">
        Keine Verpflichtung. Keine Kosten. Ihre Daten bleiben bei mir.
      </p>
    </form>
  );
}
