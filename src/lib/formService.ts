import { FormValues } from '../pages/projectQuestionnaire/schema/FormSchema';

type FormSubmissionData = FormValues | Record<string, any>;

interface FormSubmissionOptions {
  endpoint?: string;
  logToConsole?: boolean;
  logToLocalStorage?: boolean;
  redirectUrl?: string;
}

/**
 * Handles form submission including logging, API submission, and redirect
 */
export async function handleFormSubmission(
  data: FormSubmissionData,
  options: FormSubmissionOptions = {}
): Promise<{success: boolean, message?: string}> {
  
  const {
    endpoint = '/api/form-submission',
    logToConsole = true,
    logToLocalStorage = process.env.NODE_ENV === 'development',
    redirectUrl,
  } = options;

  // Add metadata to track form submission
  const submissionData = {
    ...data,
    _meta: {
      timestamp: new Date().toISOString(),
      userAgent: navigator.userAgent,
      url: window.location.href,
      referrer: document.referrer || 'direct',
      sessionId: getOrCreateSessionId(),
    }
  };

  try {
    // Log to console if enabled
    if (logToConsole) {
      console.log('Form submitted:', submissionData);
    }

    // Log to localStorage if enabled
    if (logToLocalStorage) {
      logSubmissionToLocalStorage(submissionData);
    }

    // Submit to API endpoint if in production
    if (process.env.NODE_ENV === 'production' && endpoint) {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(submissionData),
      });

      if (!response.ok) {
        throw new Error(`Form submission failed: ${response.statusText}`);
      }
    }

    // Return success
    return { success: true };
  } catch (error) {
    console.error('Form submission error:', error);
    return { 
      success: false, 
      message: error instanceof Error ? error.message : 'Unknown error occurred'
    };
  }
}

// Helper to create or retrieve a session ID
function getOrCreateSessionId(): string {
  let sessionId = sessionStorage.getItem('form_session_id');
  if (!sessionId) {
    sessionId = `session_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`;
    sessionStorage.setItem('form_session_id', sessionId);
  }
  return sessionId;
}

// Helper to log submissions to localStorage
function logSubmissionToLocalStorage(data: any): void {
  try {
    const submissions = JSON.parse(localStorage.getItem('form_submissions') || '[]');
    submissions.push(data);
    localStorage.setItem('form_submissions', JSON.stringify(submissions));
  } catch (error) {
    console.error('Error logging submission to localStorage:', error);
  }
}

// Helper to retrieve form submissions from localStorage
export function getFormSubmissionsFromLocalStorage(): any[] {
  try {
    return JSON.parse(localStorage.getItem('form_submissions') || '[]');
  } catch (error) {
    console.error('Error retrieving submissions from localStorage:', error);
    return [];
  }
} 