import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Building, Paintbrush, Target, Settings, Rocket } from 'lucide-react';
import { Form } from '@/components/ui/form';
import { useToast } from '@/components/ui/use-toast';
import PageTransition from '@/components/PageTransition';
import { useLanguage } from '../contexts/LanguageContext';
import { Helmet } from 'react-helmet-async';
import SEO from '../components/SEO';

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
      domain: "",
      name: "",
      email: "",
      phone: "",
      company: "",
      projectTimeline: [{ description: "", date: "" }],
      budget: 5000,
      termsAgreed: false,
    },
    mode: "onTouched",
    reValidateMode: "onChange",
    criteriaMode: "all",
  });
  
  // Function to go to the next step
  const nextStep = async () => {
    const stepFields = steps[currentStep].fields;
    
    try {
      // Validate only the current step's fields
      const result = await form.trigger(stepFields as any);
      
      if (result) {
        if (currentStep < steps.length - 1) {
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
    try {
      // Use the new form submission service
      const result = await handleFormSubmission(data, {
        endpoint: '/api/form-submission',
        logToConsole: true,
        logToLocalStorage: true
      });
      
      if (result.success) {
        // Show success message
        toast({
          title: t('questionnaire.form.success.title'),
          description: t('questionnaire.form.success.message'),
        });
        
        // Redirect to home page after 2 seconds
        setTimeout(() => {
          navigate('/');
        }, 2000);
      } else {
        throw new Error(result.message || 'Form submission failed');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      toast({
        title: "Error",
        description: t('questionnaire.form.error.generic'),
        variant: "destructive",
      });
    }
  };

  // Map step components
  const stepComponents = [
    <BusinessInfoStep key="business" />,
    <GoalsFeaturesStep key="goals" />,
    <DesignContentStep key="design" />,
    <TechnicalContactStep key="technical" />
  ];

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
                    onNext={nextStep}
                  />
                </form>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default ProjectQuestionnaire;
