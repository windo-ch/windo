"use client";

import { motion } from "framer-motion";

interface Props {
  label: string;
  selected: boolean;
  onClick: () => void;
  icon?: string;
}

export default function StepOption({ label, selected, onClick, icon }: Props) {
  return (
    <motion.button
      type="button"
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={`w-full text-left px-5 py-4 rounded-xl border-2 transition-all duration-200 cursor-pointer ${
        selected
          ? "border-glow-deep bg-glow-ambient ring-2 ring-glow-deep/20"
          : "border-glow-soft bg-white hover:border-glow hover:bg-glow-ambient"
      }`}
    >
      <span className="text-bg-dark font-medium text-base">
        {icon && <span className="mr-3 text-xl">{icon}</span>}
        {label}
      </span>
    </motion.button>
  );
}
