import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Building, Paintbrush, Target, Settings, Rocket, Check, X } from 'lucide-react';
import { Form } from '@/components/ui/form';
import { useToast } from '@/components/ui/use-toast';
import PageTransition from '@/components/PageTransition';
import { useLanguage } from '../contexts/LanguageContext';
import { Helmet } from 'react-helmet-async';
import SEO from '../components/SEO';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
// Dynamically import the blob module to prevent build issues
const blobModule = import.meta.env.VITE_BLOB_READ_WRITE_TOKEN ? import('@vercel/blob') : null;

// Import components from restructured folders
import BusinessInfoStep from './projectQuestionnaire/components/BusinessInfoStep';
import GoalsFeaturesStep from './projectQuestionnaire/components/GoalsFeaturesStep';
import DesignContentStep from './projectQuestionnaire/components/DesignContentStep';
import TechnicalContactStep from './projectQuestionnaire/components/TechnicalContactStep';
import StepIndicator from './projectQuestionnaire/components/StepIndicator';
import NavigationButtons from './projectQuestionnaire/components/NavigationButtons';
import { formSchema, FormValues, steps } from './projectQuestionnaire/schema/FormSchema';

// Import new utilities
import { handleFormSubmission } from '@/lib/formService';
import { updateSEO, logPageView } from '@/lib/seo';

const ProjectQuestionnaire = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState<'success' | 'error'>('success');
  const [blobUrl, setBlobUrl] = useState<string | null>(null);
  const [blobEnabled, setBlobEnabled] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();
  const location = useLocation();
  const { t } = useLanguage();
  
  // Parse query parameters
  const queryParams = new URLSearchParams(location.search);
  const industryParam = queryParams.get('industry');
  
  // Set up SEO
  useEffect(() => {
    updateSEO({
      title: t('questionnaire.title'),
      description: t('questionnaire.subtitle'),
      canonical: 'https://windo.app/project-questionnaire',
    });

    // Log page view
    logPageView();
  }, [t]);
  
  // Check if blob storage is available
  useEffect(() => {
    const checkBlobAvailability = async () => {
      try {
        if (import.meta.env.VITE_BLOB_READ_WRITE_TOKEN && blobModule) {
          setBlobEnabled(true);
          console.log("Vercel Blob storage is enabled");
        } else {
          console.log("Vercel Blob storage is not available");
          setBlobEnabled(false);
        }
      } catch (error) {
        console.error("Error checking Blob availability:", error);
        setBlobEnabled(false);
      }
    };
    
    checkBlobAvailability();
  }, []);
  
  // Initialize the form
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      // Step 1: Business Information
      industry: industryParam || "",
      servicesProducts: "",
      targetAudience: "",
      brandValues: "",
      
      // Step 2: Website Goals & Features
      primaryGoal: "",
      secondaryGoals: [],
      features: [],
      
      // Step 3: Design & Content
      designStyle: "",
      designPreferences: [],
      websitesLike: "",
      contentPages: [],
      existingContent: "",
      
      // Step 4: Technical & Contact
      domainOption: "",
      hostingOption: "",
      existingDomain: "",
      technicalRequirements: "",
      technicalContactName: "",
      technicalContactEmail: "",
      technicalContactPhone: "",
      name: "",
      email: "",
      phone: "",
      company: "",
      projectTimeline: [{ description: "", date: "" }],
      budget: 5000,
      termsAgreed: false,
    },
    mode: "onSubmit",
    reValidateMode: "onSubmit",
    criteriaMode: "all",
  });
  
  // Function to go to the next step
  const nextStep = async () => {
    const stepFields = steps[currentStep].fields;
    
    try {
      // Validate only the current step's fields
      const result = await form.trigger(stepFields as any, { shouldFocus: true });
      
      if (result) {
        if (currentStep < steps.length - 1) {
          // Clear any existing errors before moving to the next step
          form.clearErrors();
          
          setCurrentStep(currentStep + 1);
          // Smooth scroll to top
          window.scrollTo({
            top: 0,
            behavior: 'smooth'
          });
        }
      } else {
        // Get the first error field
        const errors = form.formState.errors;
        const firstError = Object.keys(errors)[0];
        
        if (firstError) {
          // Scroll to the first error field
          const element = document.querySelector(`[name="${firstError}"]`);
          if (element) {
            element.scrollIntoView({
              behavior: 'smooth',
              block: 'center'
            });
          }
        }
        
        toast({
          title: t('questionnaire.form.error.title'),
          description: t('questionnaire.form.error.message'),
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error('Form validation error:', error);
      toast({
        title: "Error",
        description: t('questionnaire.form.error.generic'),
        variant: "destructive",
      });
    }
  };
  
  // Function to go to the previous step
  const prevStep = () => {
    if (currentStep > 0) {
      // Clear validation errors when going back
      form.clearErrors();
      
      setCurrentStep(currentStep - 1);
      // Smooth scroll to top
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  };
  
  // Handle form submission
  const onSubmit = async (data: FormValues) => {
    console.log("Form data:", data);
    setIsSubmitting(true);

    // Check required fields
    if (!data.domainOption) {
      toast({
        title: t('questionnaire.errors.domainRequired'),
        description: t('questionnaire.errors.pleaseComplete'),
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }

    if (!data.hostingOption) {
      toast({
        title: t('questionnaire.errors.hostingRequired'),
        description: t('questionnaire.errors.pleaseComplete'),
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }

    // Check name and email when technical contact is provided
    if ((data.name || data.email) && (!data.name || !data.email)) {
      if (!data.name) {
        toast({
          title: t('questionnaire.errors.nameRequired'),
          description: t('questionnaire.errors.pleaseComplete'),
          variant: "destructive",
        });
      }
      if (!data.email) {
        toast({
          title: t('questionnaire.errors.emailRequired'),
          description: t('questionnaire.errors.pleaseComplete'),
          variant: "destructive",
        });
      }
      setIsSubmitting(false);
      return;
    }

    // Check terms agreement
    if (!data.termsAgreed) {
      toast({
        title: t('questionnaire.errors.termsRequired'),
        description: t('questionnaire.errors.pleaseAccept'),
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }

    try {
      let url = null;
      
      // Only use Blob storage if enabled
      if (blobEnabled && blobModule) {
        try {
          // Generate a unique ID for the blob filename
          const timestamp = new Date().getTime();
          const uniqueId = `${data.email?.replace(/[^a-zA-Z0-9]/g, '_')}_${timestamp}`;
          const filename = `questionnaires/${uniqueId}.json`;

          // Convert form data to JSON string
          const jsonData = JSON.stringify(data, null, 2);
          
          // Dynamically import the put function
          const { put } = await blobModule;

          // Save to Vercel Blob
          const response = await put(filename, jsonData, { 
            access: 'public',
            token: import.meta.env.VITE_BLOB_READ_WRITE_TOKEN
          });
          
          url = response.url;
          console.log("Form data saved to blob:", url);
          setBlobUrl(url);
        } catch (blobError) {
          console.error("Error saving to Blob storage:", blobError);
          // Continue with submission even if Blob storage fails
        }
      }

      // Make API call in all cases, with or without blob URL
      try {
        const apiData = url ? { ...data, blobUrl: url } : data;
        const response = await fetch(`${import.meta.env.VITE_API_URL}/projects`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
          body: JSON.stringify(apiData),
        });
        
        const responseData = await response.json();
        if (!response.ok) {
          console.warn("API submission failed");
          if (!url) {
            // If both API and Blob failed, throw error
            throw new Error(responseData.message || "Failed to submit form");
          }
        }
      } catch (apiError) {
        console.warn("API call failed:", apiError);
        if (!url) {
          // If both API and Blob failed, throw error
          throw apiError;
        }
      }

      // If we got here, either API call succeeded or we saved to Blob
      toast({
        title: "Success!",
        description: "Your project questionnaire has been submitted successfully. We'll be in touch soon!",
      });
      setSubmissionStatus('success');
      setIsSubmitted(true);
      setShowConfirmation(true);
      form.reset();
      window.scrollTo(0, 0);
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: "Submission Error",
        description: "Failed to submit form. Please try again later.",
        variant: "destructive",
      });
      setSubmissionStatus('error');
      setShowConfirmation(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Close the confirmation dialog and reset or redirect
  const handleCloseConfirmation = () => {
    setShowConfirmation(false);
    if (submissionStatus === 'success') {
      setIsSubmitted(true);
      // Redirect to home page after successful submission and showing thank you page
      setTimeout(() => {
        navigate('/');
      }, 3000);
    }
  };

  // Map step components
  const stepComponents = [
    <BusinessInfoStep key="business" />,
    <GoalsFeaturesStep key="goals" />,
    <DesignContentStep key="design" />,
    <TechnicalContactStep key="technical" />
  ];

  // If the form has been submitted, show thank you message
  if (isSubmitted) {
    return (
      <PageTransition>
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center">
          <div className="max-w-md w-full text-center">
            <div className="mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-4">
                <Check className="w-8 h-8 text-green-600" />
              </div>
              <h1 className="text-3xl font-bold bg-orange-gradient bg-clip-text text-transparent mb-2">
                Thank You!
              </h1>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Your project questionnaire has been submitted successfully.
              </p>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                We will review your requirements and get back to you within 24 hours.
              </p>
              {blobUrl && (
                <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm">
                  <a href={blobUrl} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                    {t('questionnaire.confirmation.viewSubmission')}
                  </a>
                </p>
              )}
              <p className="text-gray-500 dark:text-gray-500 text-sm">
                Redirecting to home page in a few seconds...
              </p>
            </div>
            <Button 
              onClick={() => navigate('/')}
              className="bg-orange-gradient text-white"
            >
              Return to Home
            </Button>
          </div>
        </div>
      </PageTransition>
    );
  }

  return (
    <PageTransition>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold bg-orange-gradient bg-clip-text text-transparent mb-2">
              {t('questionnaire.title')}
            </h1>
            <p className="text-gray-600 dark:text-gray-400">
              {t('questionnaire.subtitle')}
            </p>
          </div>

          <StepIndicator currentStep={currentStep} totalSteps={steps.length} />

          <div className="mt-8">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 md:p-8">
              <Form {...form}>
                <form id="questionnaire-form" onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                  {/* Render the current step */}
                  {stepComponents[currentStep]}
                  
                  {/* Navigation Buttons */}
                  <NavigationButtons
                    currentStep={currentStep}
                    totalSteps={steps.length}
                    onPrevious={prevStep}
                    onNext={currentStep < steps.length - 1 ? nextStep : undefined}
                    isSubmitting={isSubmitting}
                    showSubmit={currentStep === steps.length - 1}
                  />
                </form>
              </Form>
            </div>
          </div>
        </div>
      </div>

      {/* Submission Confirmation Dialog */}
      <Dialog open={showConfirmation} onOpenChange={setShowConfirmation}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className={submissionStatus === 'success' ? "text-green-600" : "text-red-600"}>
              {submissionStatus === 'success' 
                ? t('questionnaire.confirmation.successTitle') 
                : t('questionnaire.confirmation.errorTitle')}
            </DialogTitle>
          </DialogHeader>
          
          <div className="py-6">
            {submissionStatus === 'success' ? (
              <div className="flex flex-col items-center text-center gap-3">
                <div className="bg-green-100 p-3 rounded-full">
                  <Check className="h-12 w-12 text-green-600" />
                </div>
                <p className="text-lg font-medium">{t('questionnaire.confirmation.successMessage')}</p>
                <p className="text-gray-600">{t('questionnaire.confirmation.response24h')}</p>
                {blobUrl && (
                  <a href={blobUrl} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline text-sm">
                    {t('questionnaire.confirmation.viewSubmission')}
                  </a>
                )}
              </div>
            ) : (
              <div className="flex flex-col items-center text-center gap-3">
                <div className="bg-red-100 p-3 rounded-full">
                  <X className="h-12 w-12 text-red-600" />
                </div>
                <p className="text-lg font-medium">{t('questionnaire.confirmation.errorMessage')}</p>
                <p className="text-gray-600">{t('questionnaire.confirmation.tryAgain')}</p>
              </div>
            )}
          </div>
          
          <DialogFooter>
            <Button 
              onClick={handleCloseConfirmation} 
              className={submissionStatus === 'success' 
                ? "bg-green-600 hover:bg-green-700 w-full" 
                : "bg-orange-gradient w-full"}
            >
              {submissionStatus === 'success' 
                ? t('questionnaire.confirmation.continue') 
                : t('questionnaire.confirmation.close')}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </PageTransition>
  );
};

export default ProjectQuestionnaire;
