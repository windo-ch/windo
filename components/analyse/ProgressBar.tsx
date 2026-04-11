"use client";

interface Props {
  currentStep: number;
  totalSteps: number;
}

export default function ProgressBar({ currentStep, totalSteps }: Props) {
  const pct = (currentStep / totalSteps) * 100;

  return (
    <div className="mb-8">
      <div className="w-full h-1.5 rounded-full bg-glow-ambient overflow-hidden">
        <div
          className="h-full bg-glow-deep rounded-full transition-all duration-500 ease-out"
          style={{ width: `${pct}%` }}
        />
      </div>
      <p className="text-right text-sm text-gray-400 mt-1.5">
        Schritt {currentStep} von {totalSteps}
      </p>
    </div>
  );
}
