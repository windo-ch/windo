"use client";

import { motion } from "framer-motion";
import type { Industry } from "@/lib/analyse/types";
import { STEP_COPY } from "@/lib/analyse/copy";
import StepOption from "./StepOption";

interface Props {
  value: Industry | null;
  onChange: (val: Industry) => void;
  onNext: () => void;
  onBack: () => void;
}

const OPTIONS: { value: Industry; label: string; icon: string }[] = [
  { value: "zahnarzt", label: STEP_COPY.industry_zahnarzt, icon: "🦷" },
  { value: "coiffeur", label: STEP_COPY.industry_coiffeur, icon: "💇" },
  { value: "restaurant", label: STEP_COPY.industry_restaurant, icon: "🍽️" },
  { value: "handwerker", label: STEP_COPY.industry_handwerker, icon: "🔨" },
  { value: "arztpraxis", label: STEP_COPY.industry_arztpraxis, icon: "🏥" },
  { value: "anwalt", label: STEP_COPY.industry_anwalt, icon: "⚖️" },
  { value: "immobilien", label: STEP_COPY.industry_immobilien, icon: "🏠" },
  { value: "fitness", label: STEP_COPY.industry_fitness, icon: "💪" },
  { value: "andere", label: STEP_COPY.industry_andere, icon: "📁" },
];

export default function StepIndustry({ value, onChange, onNext, onBack }: Props) {
  function handleSelect(val: Industry) {
    onChange(val);
    setTimeout(onNext, 300);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.3 }}
    >
      <h2 className="text-2xl font-bold text-bg-dark mb-1">{STEP_COPY.step3_title}</h2>
      <p className="text-gray-500 mb-6">{STEP_COPY.step3_subtitle}</p>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6">
        {OPTIONS.map((opt) => (
          <StepOption
            key={opt.value}
            label={opt.label}
            icon={opt.icon}
            selected={value === opt.value}
            onClick={() => handleSelect(opt.value)}
          />
        ))}
      </div>
      <div className="text-center">
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
