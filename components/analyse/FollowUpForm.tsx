"use client";

import { useState } from "react";
import { submitFollowUp } from "@/app/(analyse)/analyse/actions";

const TIME_SLOTS = [
  "08:00 – 09:00",
  "09:00 – 10:00",
  "10:00 – 11:00",
  "11:00 – 12:00",
  "13:00 – 14:00",
  "14:00 – 15:00",
  "15:00 – 16:00",
  "16:00 – 17:00",
  "17:00 – 18:00",
];

const inputClass =
  "w-full px-4 py-3 rounded-xl border-2 border-glow-soft focus:border-glow-deep focus:ring-2 focus:ring-glow-deep/20 outline-none transition-all text-base bg-white";

function todayStr() {
  return new Date().toISOString().slice(0, 10);
}

export default function FollowUpForm({
  prefillName,
  prefillEmail,
}: {
  prefillName?: string;
  prefillEmail?: string;
}) {
  const [wantsEmail, setWantsEmail] = useState(false);
  const [wantsCallback, setWantsCallback] = useState(false);
  const [callbackDate, setCallbackDate] = useState("");
  const [callbackTime, setCallbackTime] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!wantsEmail && !wantsCallback) return;
    setSubmitting(true);
    const result = await submitFollowUp({
      name: prefillName ?? "",
      email: prefillEmail ?? "",
      wantsEmail,
      wantsCallback,
      callbackDate: wantsCallback ? callbackDate : undefined,
      callbackTime: wantsCallback ? callbackTime : undefined,
    });
    setSubmitting(false);
    if (result.ok) setDone(true);
    else setError(true);
  }

  if (done) {
    return (
      <div className="text-center py-8">
        <p className="text-2xl mb-2">✓</p>
        <p className="font-semibold text-bg-dark mb-1">Erhalten.</p>
        <p className="text-gray-500 text-sm">Ich kümmere mich darum.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="space-y-3">
        <label className="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            checked={wantsEmail}
            onChange={(e) => setWantsEmail(e.target.checked)}
            className="mt-0.5 w-4 h-4 rounded border-gray-300 accent-glow-deep shrink-0"
          />
          <span className="text-sm text-gray-700">Ergebnisse und Einschätzung per E-Mail erhalten</span>
        </label>

        <label className="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            checked={wantsCallback}
            onChange={(e) => setWantsCallback(e.target.checked)}
            className="mt-0.5 w-4 h-4 rounded border-gray-300 accent-glow-deep shrink-0"
          />
          <span className="text-sm text-gray-700">Ich möchte einen Rückruf von Henry</span>
        </label>
      </div>

      {wantsCallback && (
        <div className="flex gap-3 pl-7">
          <div className="flex-1">
            <label className="block text-xs font-medium text-gray-500 mb-1.5">Datum</label>
            <input
              type="date"
              min={todayStr()}
              value={callbackDate}
              onChange={(e) => setCallbackDate(e.target.value)}
              className={inputClass}
            />
          </div>
          <div className="flex-1">
            <label className="block text-xs font-medium text-gray-500 mb-1.5">Uhrzeit</label>
            <select
              value={callbackTime}
              onChange={(e) => setCallbackTime(e.target.value)}
              className={inputClass}
            >
              <option value="">Beliebig</option>
              {TIME_SLOTS.map((slot) => (
                <option key={slot} value={slot}>{slot}</option>
              ))}
            </select>
          </div>
        </div>
      )}

      {error && (
        <p className="text-sm text-red-500">Etwas hat nicht geklappt. Bitte versuchen Sie es erneut.</p>
      )}

      <button
        type="submit"
        disabled={submitting || (!wantsEmail && !wantsCallback)}
        className="w-full bg-glow-deep text-white font-semibold px-7 py-3.5 rounded-xl btn-glow transition-opacity disabled:opacity-40 disabled:cursor-not-allowed"
      >
        {submitting ? "Wird gesendet..." : "Absenden"}
      </button>
    </form>
  );
}
