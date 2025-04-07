
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Building, Paintbrush, Target, Settings } from 'lucide-react';
import { Form } from '@/components/ui/form';
import { useToast } from '@/components/ui/use-toast';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageTransition from '@/components/PageTransition';

// Import components
import BusinessInfoStep from './projectQuestionnaire/BusinessInfoStep';
import GoalsFeaturesStep from './projectQuestionnaire/GoalsFeaturesStep';
import DesignContentStep from './projectQuestionnaire/DesignContentStep';
import TechnicalContactStep from './projectQuestionnaire/TechnicalContactStep';
import StepIndicator from './projectQuestionnaire/StepIndicator';
import NavigationButtons from './projectQuestionnaire/NavigationButtons';
import { formSchema, FormValues, steps } from './projectQuestionnaire/FormSchema';

const ProjectQuestionnaire = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const { toast } = useToast();
  const navigate = useNavigate();
  
  // Initialize the form
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      industry: "",
      servicesProducts: "",
      targetAudience: "",
      brandValues: "",
      features: [],
      contentPages: [],
      secondaryGoals: [],
      phone: "",
      company: "",
      termsAgreed: false,
    },
    mode: "onChange",
  });
  
  // Function to go to the next step
  const nextStep = async () => {
    const stepFields = steps[currentStep].fields;
    
    const stepValid = await form.trigger(stepFields as any);
    
    if (stepValid) {
      if (currentStep < steps.length - 1) {
        setCurrentStep(currentStep + 1);
        window.scrollTo(0, 0);
      }
    } else {
      toast({
        title: "Please check your answers",
        description: "Some fields need your attention before proceeding.",
        variant: "destructive",
      });
    }
  };
  
  // Function to go to the previous step
  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
      window.scrollTo(0, 0);
    }
  };
  
  // Handle form submission
  const onSubmit = (data: FormValues) => {
    console.log("Form submitted with:", data);
    toast({
      title: "Questionnaire submitted!",
      description: "We'll be in touch soon to discuss your project.",
    });
    
    // Redirect to home page after 2 seconds
    setTimeout(() => {
      navigate('/');
    }, 2000);
  };

  // Map step components
  const stepComponents = [
    <BusinessInfoStep key="business" />,
    <GoalsFeaturesStep key="goals" />,
    <DesignContentStep key="design" />,
    <TechnicalContactStep key="technical" />
  ];

  // Create steps array with Lucide icon components
  const stepsWithIcons = [
    { title: steps[0].title, icon: Building },
    { title: steps[1].title, icon: Target },
    { title: steps[2].title, icon: Paintbrush },
    { title: steps[3].title, icon: Settings }
  ];
  
  return (
    <>
      <PageTransition />
      <Navbar />
      
      <div className="bg-gradient-to-b from-windo-light to-white pt-32 pb-20 min-h-screen">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8 text-center">
              <h1 className="text-3xl md:text-4xl font-bold text-windo-darkgray mb-4">
                <span className="text-transparent bg-clip-text bg-orange-gradient">Project</span> Questionnaire
              </h1>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Help us understand your project needs so we can create the perfect website for your business.
              </p>
            </div>
            
            {/* Step Indicator Component */}
            <StepIndicator 
              steps={stepsWithIcons} 
              currentStep={currentStep}
              setCurrentStep={setCurrentStep}
            />
            
            <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
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
      
      <Footer />
    </>
  );
};

export default ProjectQuestionnaire;
