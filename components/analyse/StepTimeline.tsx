"use client";

import { motion } from "framer-motion";
import type { Timeline } from "@/lib/analyse/types";
import { STEP_COPY } from "@/lib/analyse/copy";
import StepOption from "./StepOption";

interface Props {
  value: Timeline | null;
  onChange: (val: Timeline) => void;
  onNext: () => void;
  onBack: () => void;
}

const OPTIONS: { value: Timeline; label: string; icon: string }[] = [
  { value: "asap", label: STEP_COPY.timeline_asap, icon: "⚡" },
  { value: "weeks", label: STEP_COPY.timeline_weeks, icon: "📅" },
  { value: "exploring", label: STEP_COPY.timeline_exploring, icon: "🧭" },
];

export default function StepTimeline({ value, onChange, onNext, onBack }: Props) {
  function handleSelect(val: Timeline) {
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
      <h2 className="text-2xl font-bold text-bg-dark mb-1">{STEP_COPY.step4_title}</h2>
      <p className="text-gray-500 mb-6">{STEP_COPY.step4_subtitle}</p>
      <div className="flex flex-col gap-3 mb-6">
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
