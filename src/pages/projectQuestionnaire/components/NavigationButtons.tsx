import React from 'react';
import { ChevronLeft, ChevronRight, Check, Rocket } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '../../../contexts/LanguageContext';

interface NavigationButtonsProps {
  currentStep: number;
  totalSteps: number;
  onPrevious: () => void;
  onNext: () => void;
}

const NavigationButtons: React.FC<NavigationButtonsProps> = ({
  currentStep,
  totalSteps,
  onPrevious,
  onNext,
}) => {
  const { t } = useLanguage();
  
  return (
    <div className="flex flex-col sm:flex-row justify-between pt-4 gap-4">
      {currentStep > 0 && (
        <Button
          type="button"
          onClick={onPrevious}
          variant="outline"
          className="flex-1"
        >
          <ChevronLeft className="mr-2 h-4 w-4" />
          {t('questionnaire.navigation.previous')}
        </Button>
      )}
      
      {currentStep < totalSteps - 1 ? (
        <Button 
          type="button" 
          onClick={onNext}
          className="flex-1 bg-orange-gradient text-white"
        >
          {t('questionnaire.navigation.next')}
          <ChevronRight className="ml-2 h-4 w-4" />
        </Button>
      ) : (
        <Button 
          type="submit"
          form="questionnaire-form"
          className="flex-1 bg-orange-gradient text-white"
        >
          {t('questionnaire.navigation.submit')}
          <Rocket className="ml-2 h-4 w-4" />
        </Button>
      )}
    </div>
  );
};

export default NavigationButtons;
