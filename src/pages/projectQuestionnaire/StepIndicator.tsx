
import React from 'react';
import { Check, LucideIcon } from 'lucide-react';

interface StepIndicatorProps {
  steps: {
    title: string;
    icon: LucideIcon;
  }[];
  currentStep: number;
  setCurrentStep: (step: number) => void;
}

const StepIndicator: React.FC<StepIndicatorProps> = ({ steps, currentStep, setCurrentStep }) => {
  // Calculate progress percentage
  const progress = ((currentStep) / (steps.length - 1)) * 100;

  return (
    <>
      {/* Progress bar */}
      <div className="w-full bg-gray-200 h-2 rounded-full mb-6">
        <div 
          className="bg-orange-gradient h-full rounded-full transition-all duration-300" 
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      
      {/* Step indicators */}
      <div className="flex justify-between mb-8 py-2">
        {steps.map((step, index) => {
          const StepIcon = step.icon;
          return (
            <div 
              key={index}
              className={`flex flex-col items-center cursor-pointer transition-colors ${
                index === currentStep 
                  ? 'text-windo-orange' 
                  : index < currentStep 
                    ? 'text-gray-500 hover:text-windo-orange' 
                    : 'text-gray-300'
              }`}
              onClick={() => {
                if (index < currentStep) {
                  setCurrentStep(index);
                }
              }}
            >
              <div className={`w-12 h-12 flex items-center justify-center rounded-full mb-1 ${
                index === currentStep 
                  ? 'bg-windo-orange text-white' 
                  : index < currentStep 
                    ? 'bg-gray-200 text-gray-500 hover:bg-gray-300' 
                    : 'bg-gray-100 text-gray-300'
              }`}>
                {index < currentStep ? (
                  <Check size={20} /> 
                ) : (
                  <StepIcon size={20} />
                )}
              </div>
              <span className="text-sm font-medium">{step.title}</span>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default StepIndicator;
