"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { AnimatePresence } from "framer-motion";
import type { AnalyseFormState, AnalyseSubmission } from "@/lib/analyse/types";
import { submitAnalyse } from "@/app/(analyse)/analyse/actions";
import ProgressBar from "./ProgressBar";
import StepSituation from "./StepSituation";
import StepPriorities from "./StepPriorities";
import StepIndustry from "./StepIndustry";
import StepTimeline from "./StepTimeline";
import StepContact from "./StepContact";

interface Props {
  leadSlug?: string;
  prefillDomain?: string;
  prefillName?: string;
}

const TOTAL_STEPS = 5;

const initialState: AnalyseFormState = {
  situation: null,
  priorities: [],
  industry: null,
  timeline: null,
  contact: {
    name: "",
    phone: "",
    email: "",
    domain: "",
    preference: null,
  },
};

export default function BedarfsanalyseWizard({ leadSlug, prefillDomain, prefillName }: Props) {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [form, setForm] = useState<AnalyseFormState>({
    ...initialState,
    contact: {
      ...initialState.contact,
      name: prefillName ?? "",
      domain: prefillDomain ?? "",
      preference: null,
    },
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit() {
    setIsSubmitting(true);
    setError(null);

    const submission: AnalyseSubmission = {
      ...form,
      submittedAt: new Date().toISOString(),
      source: leadSlug ? "lead-page" : "standalone",
      leadSlug,
    };

    const result = await submitAnalyse(submission);

    if (result.ok) {
      const encoded = btoa(encodeURIComponent(JSON.stringify(submission)));
      router.push(`/analyse/result?d=${encoded}`);
    } else {
      setIsSubmitting(false);
      setError(
        "Etwas ist schiefgelaufen. Bitte versuchen Sie es erneut oder rufen Sie mich direkt an: 079 175 20 20"
      );
    }
  }

  return (
    <div className="max-w-lg mx-auto px-5 py-10">
      <ProgressBar currentStep={step} totalSteps={TOTAL_STEPS} />

      {error && (
        <div className="mb-6 px-4 py-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-sm">
          {error}
        </div>
      )}

      <AnimatePresence mode="wait">
        {step === 1 && (
          <div key={1}>
            <StepSituation
              value={form.situation}
              onChange={(v) => setForm((f) => ({ ...f, situation: v }))}
              onNext={() => setStep(2)}
              hideNoSite={!!leadSlug}
            />
          </div>
        )}
        {step === 2 && (
          <div key={2}>
            <StepPriorities
              value={form.priorities}
              onChange={(v) => setForm((f) => ({ ...f, priorities: v }))}
              onNext={() => setStep(3)}
              onBack={() => setStep(1)}
            />
          </div>
        )}
        {step === 3 && (
          <div key={3}>
            <StepIndustry
              value={form.industry}
              onChange={(v) => setForm((f) => ({ ...f, industry: v }))}
              onNext={() => setStep(4)}
              onBack={() => setStep(2)}
            />
          </div>
        )}
        {step === 4 && (
          <div key={4}>
            <StepTimeline
              value={form.timeline}
              onChange={(v) => setForm((f) => ({ ...f, timeline: v }))}
              onNext={() => setStep(5)}
              onBack={() => setStep(3)}
            />
          </div>
        )}
        {step === 5 && (
          <div key={5}>
            <StepContact
              value={form.contact}
              onChange={(v) => setForm((f) => ({ ...f, contact: v }))}
              onSubmit={handleSubmit}
              onBack={() => setStep(4)}
              isSubmitting={isSubmitting}
              prefillDomain={prefillDomain}
            />
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
