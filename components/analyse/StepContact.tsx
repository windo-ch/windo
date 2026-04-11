"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import type { AnalyseFormState, ContactPreference } from "@/lib/analyse/types";
import { STEP_COPY } from "@/lib/analyse/copy";

type Contact = AnalyseFormState["contact"];

interface Props {
  value: Contact;
  onChange: (val: Contact) => void;
  onSubmit: () => void;
  onBack: () => void;
  isSubmitting: boolean;
  prefillDomain?: string;
}

const inputClass =
  "w-full px-4 py-3 rounded-xl border-2 border-glow-soft focus:border-glow-deep focus:ring-2 focus:ring-glow-deep/20 outline-none transition-all text-base";
const labelClass = "block text-sm font-medium text-gray-700 mb-1.5";

const PREFERENCES: { value: ContactPreference; label: string; icon: string }[] = [
  { value: "phone", label: STEP_COPY.preference_phone, icon: "📞" },
  { value: "whatsapp", label: STEP_COPY.preference_whatsapp, icon: "💬" },
  { value: "email", label: STEP_COPY.preference_email, icon: "✉️" },
];

export default function StepContact({
  value,
  onChange,
  onSubmit,
  onBack,
  isSubmitting,
  prefillDomain,
}: Props) {
  const [errors, setErrors] = useState<Partial<Record<keyof Contact | "consent", string>>>({});
  const [attempted, setAttempted] = useState(false);
  const [consent, setConsent] = useState(false);

  function update(field: keyof Contact, v: string | ContactPreference | null) {
    onChange({ ...value, [field]: v });
    if (attempted) validate({ ...value, [field]: v }, consent);
  }

  function validate(data: Contact, hasConsent: boolean): boolean {
    const errs: Partial<Record<keyof Contact | "consent", string>> = {};
    if (!data.name.trim()) errs.name = "Bitte geben Sie Ihren Namen ein.";
    if (!data.phone.trim()) errs.phone = "Bitte geben Sie Ihre Telefonnummer ein.";
    if (!data.email.trim()) errs.email = "Bitte geben Sie Ihre E-Mail-Adresse ein.";
    else if (!data.email.includes("@")) errs.email = "Bitte geben Sie eine gültige E-Mail-Adresse ein.";
    if (!hasConsent) errs.consent = "Bitte stimmen Sie zu, um fortzufahren.";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  }

  function handleSubmit() {
    setAttempted(true);
    if (validate(value, consent)) onSubmit();
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.3 }}
    >
      <h2 className="text-2xl font-bold text-bg-dark mb-1">{STEP_COPY.step5_title}</h2>
      <p className="text-gray-500 mb-6">{STEP_COPY.step5_subtitle}</p>

      <div className="flex flex-col gap-4">
        <div>
          <label htmlFor="analyse-name" className={labelClass}>
            {STEP_COPY.label_name}
          </label>
          <input
            id="analyse-name"
            type="text"
            placeholder={STEP_COPY.placeholder_name}
            value={value.name}
            onChange={(e) => update("name", e.target.value)}
            className={inputClass}
            autoComplete="name"
          />
          {errors.name && <p className="text-sm text-red-500 mt-1">{errors.name}</p>}
        </div>

        <div>
          <label htmlFor="analyse-phone" className={labelClass}>
            {STEP_COPY.label_phone}
          </label>
          <input
            id="analyse-phone"
            type="tel"
            placeholder={STEP_COPY.placeholder_phone}
            value={value.phone}
            onChange={(e) => update("phone", e.target.value)}
            className={inputClass}
            autoComplete="tel"
          />
          {errors.phone && <p className="text-sm text-red-500 mt-1">{errors.phone}</p>}
        </div>

        <div>
          <label htmlFor="analyse-email" className={labelClass}>
            {STEP_COPY.label_email}
          </label>
          <input
            id="analyse-email"
            type="email"
            placeholder={STEP_COPY.placeholder_email}
            value={value.email}
            onChange={(e) => update("email", e.target.value)}
            className={inputClass}
            autoComplete="email"
          />
          {errors.email && <p className="text-sm text-red-500 mt-1">{errors.email}</p>}
        </div>

        <div>
          <label htmlFor="analyse-domain" className={labelClass}>
            {STEP_COPY.label_domain}
          </label>
          <input
            id="analyse-domain"
            type="text"
            placeholder={STEP_COPY.placeholder_domain}
            value={value.domain}
            onChange={(e) => update("domain", e.target.value)}
            readOnly={!!prefillDomain}
            className={`${inputClass} ${prefillDomain ? "bg-gray-100 cursor-default" : ""}`}
            autoComplete="url"
          />
        </div>

        {/* Contact preference */}
        <div>
          <p className={labelClass}>{STEP_COPY.label_preference}</p>
          <div className="flex gap-2">
            {PREFERENCES.map((p) => (
              <button
                key={p.value}
                type="button"
                onClick={() => update("preference", value.preference === p.value ? null : p.value)}
                className={`flex-1 flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl border-2 text-sm font-medium transition-all ${
                  value.preference === p.value
                    ? "border-glow-deep bg-glow-ambient text-bg-dark"
                    : "border-glow-soft text-gray-600 hover:border-glow-deep"
                }`}
              >
                <span>{p.icon}</span>
                {p.label}
              </button>
            ))}
          </div>
        </div>

        {/* Consent */}
        <label className="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            checked={consent}
            onChange={(e) => {
              setConsent(e.target.checked);
              if (attempted) validate(value, e.target.checked);
            }}
            className="mt-0.5 w-4 h-4 rounded border-gray-300 accent-glow-deep shrink-0"
          />
          <span className="text-sm text-gray-600 leading-relaxed">
            {STEP_COPY.consent_text}{" "}
            <a href="/datenschutz" target="_blank" rel="noopener noreferrer" className="underline hover:text-glow-deep">
              Datenschutzerklärung
            </a>
          </span>
        </label>
        {errors.consent && <p className="text-sm text-red-500 -mt-2">{errors.consent}</p>}

        <button
          type="submit"
          onClick={handleSubmit}
          disabled={isSubmitting}
          className={`w-full bg-glow-deep text-white font-semibold px-7 py-3.5 rounded-xl btn-glow transition-opacity ${
            isSubmitting ? "opacity-60 cursor-not-allowed" : ""
          }`}
        >
          {isSubmitting ? "Wird gesendet..." : STEP_COPY.submit_button}
        </button>

        <p className="text-xs text-gray-400 text-center">{STEP_COPY.privacy_note}</p>
      </div>

      <div className="text-center mt-4">
        <button
          type="button"
          onClick={onBack}
          className="text-glow-deep underline text-sm"
        >
          {STEP_COPY.back_button}
        </button>
      </div>
    </motion.div>
  );
}
