import React from 'react';
import { Building, Target, Paintbrush, Settings } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useLanguage } from '../../../contexts/LanguageContext';

interface StepIndicatorProps {
  currentStep: number;
  totalSteps: number;
}

const StepIndicator: React.FC<StepIndicatorProps> = ({ currentStep, totalSteps }) => {
  const { t } = useLanguage();
  
  const steps = [
    { icon: Building, label: t('questionnaire.business_info.title') },
    { icon: Target, label: t('questionnaire.goals.title') },
    { icon: Paintbrush, label: t('questionnaire.design.title') },
    { icon: Settings, label: t('questionnaire.technical.title') },
  ];

  return (
    <div className="flex justify-between items-center mb-8">
      {steps.map((step, index) => {
        const Icon = step.icon;
        const isActive = index === currentStep;
        const isCompleted = index < currentStep;

        return (
          <React.Fragment key={index}>
            <div className="flex flex-col items-center">
              <div
                className={cn(
                  'w-12 h-12 rounded-full flex items-center justify-center mb-2 transition-all duration-300',
                  isActive ? 'bg-orange-gradient text-white' : 
                  isCompleted ? 'bg-orange-gradient text-white' : 
                  'bg-gray-100 dark:bg-gray-800 text-gray-400'
                )}
              >
                <Icon className="w-6 h-6" />
              </div>
              <span
                className={cn(
                  'text-sm font-medium transition-colors duration-300',
                  isActive ? 'text-windo-orange' : 
                  isCompleted ? 'text-windo-orange' : 
                  'text-gray-500 dark:text-gray-400'
                )}
              >
                {step.label}
              </span>
            </div>
            {index < steps.length - 1 && (
              <div
                className={cn(
                  'flex-1 h-1 mx-4 transition-colors duration-300',
                  isCompleted ? 'bg-orange-gradient' : 'bg-gray-200 dark:bg-gray-700'
                )}
              />
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default StepIndicator;
