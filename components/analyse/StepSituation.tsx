"use client";

import { motion } from "framer-motion";
import type { Situation } from "@/lib/analyse/types";
import { STEP_COPY } from "@/lib/analyse/copy";
import StepOption from "./StepOption";

interface Props {
  value: Situation | null;
  onChange: (val: Situation) => void;
  onNext: () => void;
  hideNoSite?: boolean;
}

const OPTIONS: { value: Situation; label: string; icon: string }[] = [
  { value: "has-bad-site", label: STEP_COPY.situation_has_bad_site, icon: "🔧" },
  { value: "has-agency-site", label: STEP_COPY.situation_has_agency_site, icon: "🏢" },
  { value: "no-site", label: STEP_COPY.situation_no_site, icon: "🆕" },
  { value: "unsure", label: STEP_COPY.situation_unsure, icon: "🤔" },
];

export default function StepSituation({ value, onChange, onNext, hideNoSite }: Props) {
  const options = hideNoSite ? OPTIONS.filter((o) => o.value !== "no-site") : OPTIONS;

  function handleSelect(val: Situation) {
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
      <h2 className="text-2xl font-bold text-bg-dark mb-1">{STEP_COPY.step1_title}</h2>
      <p className="text-gray-500 mb-6">{STEP_COPY.step1_subtitle}</p>
      <div className="flex flex-col gap-3">
        {options.map((opt) => (
          <StepOption
            key={opt.value}
            label={opt.label}
            icon={opt.icon}
            selected={value === opt.value}
            onClick={() => handleSelect(opt.value)}
          />
        ))}
      </div>
    </motion.div>
  );
}
