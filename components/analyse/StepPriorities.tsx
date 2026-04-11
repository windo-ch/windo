"use client";

import { motion } from "framer-motion";
import type { Priority } from "@/lib/analyse/types";
import { STEP_COPY } from "@/lib/analyse/copy";
import StepOption from "./StepOption";

interface Props {
  value: Priority[];
  onChange: (val: Priority[]) => void;
  onNext: () => void;
  onBack: () => void;
}

const OPTIONS: { value: Priority; label: string; icon: string }[] = [
  { value: "more-clients", label: STEP_COPY.priority_more_clients, icon: "📞" },
  { value: "professional-look", label: STEP_COPY.priority_professional, icon: "✨" },
  { value: "google-visibility", label: STEP_COPY.priority_google, icon: "🔍" },
  { value: "independence", label: STEP_COPY.priority_independence, icon: "🔓" },
  { value: "mobile", label: STEP_COPY.priority_mobile, icon: "📱" },
];

export default function StepPriorities({ value, onChange, onNext, onBack }: Props) {
  function handleSelect(val: Priority) {
    if (value.includes(val)) {
      onChange(value.filter((v) => v !== val));
    } else if (value.length >= 2) {
      onChange([value[1], val]);
    } else {
      onChange([...value, val]);
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.3 }}
    >
      <h2 className="text-2xl font-bold text-bg-dark mb-1">{STEP_COPY.step2_title}</h2>
      <p className="text-gray-500 mb-6">{STEP_COPY.step2_subtitle}</p>
      <div className="flex flex-col gap-3 mb-6">
        {OPTIONS.map((opt) => (
          <StepOption
            key={opt.value}
            label={opt.label}
            icon={opt.icon}
            selected={value.includes(opt.value)}
            onClick={() => handleSelect(opt.value)}
          />
        ))}
      </div>
      {value.length >= 1 && (
        <button
          type="button"
          onClick={onNext}
          className="w-full bg-glow-deep text-white font-semibold px-7 py-3.5 rounded-xl btn-glow mb-3"
        >
          Weiter →
        </button>
      )}
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
