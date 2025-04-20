import { useState } from 'react';
import { handleFormSubmission } from '@/lib/formService';

interface FormSubmissionOptions {
  endpoint?: string;
  redirectUrl?: string;
  logToConsole?: boolean;
  logToLocalStorage?: boolean;
  onSuccess?: (data: any) => void;
  onError?: (error: any) => void;
}

/**
 * A custom hook for handling form submissions
 */
export function useFormSubmission<T extends Record<string, any>>(options: FormSubmissionOptions = {}) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const submitForm = async (data: T) => {
    setIsSubmitting(true);
    setError(null);
    
    try {
      const result = await handleFormSubmission(data, {
        endpoint: options.endpoint,
        logToConsole: options.logToConsole,
        logToLocalStorage: options.logToLocalStorage,
        redirectUrl: options.redirectUrl
      });
      
      if (result.success) {
        setIsSuccess(true);
        if (options.onSuccess) {
          options.onSuccess(data);
        }
        return { success: true, data };
      } else {
        throw new Error(result.message || 'Form submission failed');
      }
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Unknown error occurred';
      setError(errorMessage);
      if (options.onError) {
        options.onError(err);
      }
      return { success: false, error: errorMessage };
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setIsSuccess(false);
    setError(null);
  };

  return {
    submitForm,
    resetForm,
    isSubmitting,
    isSuccess,
    error
  };
}

export default useFormSubmission; 