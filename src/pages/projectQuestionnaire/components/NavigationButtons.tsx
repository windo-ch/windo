import React from 'react';
import { ChevronLeft, ChevronRight, Check, Rocket } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '../../../contexts/LanguageContext';
import { useFormContext } from 'react-hook-form';

interface NavigationButtonsProps {
  currentStep: number;
  totalSteps: number;
  onPrevious: () => void;
  onNext?: () => void;
  isSubmitting?: boolean;
  showSubmit?: boolean;
}

const NavigationButtons: React.FC<NavigationButtonsProps> = ({
  currentStep,
  totalSteps,
  onPrevious,
  onNext,
  isSubmitting = false,
  showSubmit = false,
}) => {
  const { t } = useLanguage();
  const form = useFormContext(); // Access form context for validation

  // Handle final submission button click
  const handleSubmitClick = async (e: React.MouseEvent) => {
    // Don't prevent default here - let the native form submission happen
    // which will trigger the onSubmit handler in the parent component
    
    // Trigger validation for all fields in the form before submitting
    const isValid = await form.trigger();
    
    if (!isValid) {
      // If not valid, prevent default form submission and show errors
      e.preventDefault();
      
      // Find the first error and scroll to it
      const errors = form.formState.errors;
      const firstErrorField = Object.keys(errors)[0];
      
      console.log("Form validation failed, errors:", errors);
      
      if (firstErrorField) {
        const errorElement = document.querySelector(`[name="${firstErrorField}"]`);
        if (errorElement) {
          setTimeout(() => {
            errorElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
          }, 100);
        }
      }
    } else {
      // If form is valid, let the native form submission happen
      console.log("Form is valid, proceeding with submission");
    }
  };
  
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
      
      {!showSubmit ? (
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
          onClick={handleSubmitClick}
          disabled={isSubmitting}
        >
          {isSubmitting ? t('questionnaire.navigation.submitting') : t('questionnaire.navigation.submit')}
          {isSubmitting ? null : <Rocket className="ml-2 h-4 w-4" />}
        </Button>
      )}
    </div>
  );
};

export default NavigationButtons;
