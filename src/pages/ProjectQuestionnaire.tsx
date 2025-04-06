
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { ChevronLeft, ChevronRight, Check } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormDescription,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Checkbox } from '@/components/ui/checkbox';
import { useToast } from '@/components/ui/use-toast';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageTransition from '@/components/PageTransition';

// Define the form schema with Zod
const formSchema = z.object({
  // Step 1: Core Business Information
  industry: z.string().min(2, {
    message: "Please enter your industry",
  }),
  servicesProducts: z.string().min(5, {
    message: "Please describe your products or services",
  }),
  targetAudience: z.string().min(5, {
    message: "Please describe your target audience",
  }),
  sellingPoints: z.string().min(5, {
    message: "Please describe what makes your business unique",
  }),
  
  // Step 2: Brand Identity
  brandValues: z.string().min(5, {
    message: "Please describe your brand values",
  }),
  brandVoice: z.string().min(5, {
    message: "Please describe your brand voice and tone",
  }),
  existingVisuals: z.string().optional(),
  
  // Step 3: Website Goals
  primaryGoal: z.enum(["leadGeneration", "sales", "information", "brandAwareness"], {
    required_error: "Please select a primary goal for your website",
  }),
  secondaryGoals: z.array(z.enum(["leadGeneration", "sales", "information", "brandAwareness"])).optional(),
  
  // Step 4: Features
  features: z.array(z.string()).min(1, {
    message: "Please select at least one feature",
  }),
  otherFeatures: z.string().optional(),
  
  // Step 5: Competitors
  competitors: z.string().min(5, {
    message: "Please list your main competitors",
  }),
  differentiators: z.string().min(5, {
    message: "Please describe what makes your business different",
  }),
  
  // Step 6: Content Needs
  contentPages: z.array(z.string()).min(1, {
    message: "Please select at least one page type",
  }),
  existingContent: z.enum(["yes", "no", "partial"], {
    required_error: "Please indicate if you have existing content",
  }),
  contentNotes: z.string().optional(),
  
  // Step 7: Technical Requirements
  domain: z.enum(["have", "need", "unsure"], {
    required_error: "Please select your domain status",
  }),
  domainName: z.string().optional(),
  hosting: z.enum(["need", "have", "unsure"], {
    required_error: "Please select your hosting preference",
  }),
  integrations: z.string().optional(),
  
  // Step 8: Design Preferences
  designStyle: z.enum(["modern", "minimalist", "bold", "traditional", "playful", "luxury", "other"], {
    required_error: "Please select a design style",
  }),
  colorPreferences: z.string().optional(),
  websitesLike: z.string().min(5, {
    message: "Please share examples of websites you like",
  }),
  websitesDislike: z.string().optional(),
  
  // Contact Information
  name: z.string().min(2, {
    message: "Please enter your name",
  }),
  email: z.string().email({
    message: "Please enter a valid email address",
  }),
  phone: z.string().optional(),
  company: z.string().optional(),
  
  // Terms agreement
  termsAgreed: z.boolean().refine(val => val === true, {
    message: "You must agree to the terms",
  }),
});

type FormValues = z.infer<typeof formSchema>;

const steps = [
  { title: "Business Info", fields: ["industry", "servicesProducts", "targetAudience", "sellingPoints"] },
  { title: "Brand Identity", fields: ["brandValues", "brandVoice", "existingVisuals"] },
  { title: "Website Goals", fields: ["primaryGoal", "secondaryGoals"] },
  { title: "Features", fields: ["features", "otherFeatures"] },
  { title: "Competitors", fields: ["competitors", "differentiators"] },
  { title: "Content", fields: ["contentPages", "existingContent", "contentNotes"] },
  { title: "Technical", fields: ["domain", "domainName", "hosting", "integrations"] },
  { title: "Design", fields: ["designStyle", "colorPreferences", "websitesLike", "websitesDislike"] },
  { title: "Contact", fields: ["name", "email", "phone", "company", "termsAgreed"] },
];

const ProjectQuestionnaire = () => {
  const [currentStep, setCurrentStep] = React.useState(0);
  const { toast } = useToast();
  const navigate = useNavigate();
  
  // Initialize the form
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      industry: "",
      servicesProducts: "",
      targetAudience: "",
      sellingPoints: "",
      brandValues: "",
      brandVoice: "",
      existingVisuals: "",
      features: [],
      otherFeatures: "",
      competitors: "",
      differentiators: "",
      contentPages: [],
      contentNotes: "",
      integrations: "",
      colorPreferences: "",
      websitesDislike: "",
      phone: "",
      company: "",
      termsAgreed: false,
    },
    mode: "onChange",
  });
  
  // Calculate progress percentage
  const progress = ((currentStep) / (steps.length - 1)) * 100;

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
  
  // Features list for checkbox selection
  const featuresList = [
    { id: "contactForm", label: "Contact form" },
    { id: "onlineBooking", label: "Online booking/scheduling" },
    { id: "ecommerce", label: "E-commerce/online store" },
    { id: "portfolio", label: "Portfolio/gallery" },
    { id: "blog", label: "Blog" },
    { id: "members", label: "Membership area" },
    { id: "newsletter", label: "Newsletter signup" },
    { id: "social", label: "Social media integration" },
    { id: "multilingual", label: "Multiple languages" },
  ];
  
  // Content pages list for checkbox selection
  const contentPagesList = [
    { id: "home", label: "Home page" },
    { id: "about", label: "About us" },
    { id: "services", label: "Services/Products" },
    { id: "portfolio", label: "Portfolio/Gallery" },
    { id: "testimonials", label: "Testimonials" },
    { id: "blog", label: "Blog" },
    { id: "contact", label: "Contact" },
    { id: "pricing", label: "Pricing" },
    { id: "faq", label: "FAQ" },
  ];

  // Render form step based on current step
  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return (
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold mb-4">Tell us about your business</h2>
              <p className="text-gray-600">This helps us understand your business context and needs.</p>
            </div>
            
            <FormField
              control={form.control}
              name="industry"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>What industry are you in?</FormLabel>
                  <FormControl>
                    <Input placeholder="E.g., Healthcare, Retail, Education..." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="servicesProducts"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>What products or services do you offer?</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="Describe your main products or services..." 
                      className="min-h-[100px]"
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="targetAudience"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Who is your target audience?</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="Describe your ideal customers or clients..." 
                      className="min-h-[100px]"
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="sellingPoints"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>What makes your business unique?</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="Describe your unique selling points..." 
                      className="min-h-[100px]"
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        );
      
      case 1:
        return (
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold mb-4">Brand Identity</h2>
              <p className="text-gray-600">Help us understand your brand personality and existing visual elements.</p>
            </div>
            
            <FormField
              control={form.control}
              name="brandValues"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>What are your core brand values?</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="E.g., Innovation, Reliability, Sustainability..." 
                      className="min-h-[100px]"
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="brandVoice"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>How would you describe your brand voice and tone?</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="E.g., Professional, Friendly, Technical, Casual..." 
                      className="min-h-[100px]"
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="existingVisuals"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Do you have existing visual elements? (Logo, colors, fonts)</FormLabel>
                  <FormDescription>
                    Describe any existing brand elements we should incorporate.
                  </FormDescription>
                  <FormControl>
                    <Textarea 
                      placeholder="Describe your existing visual elements or leave blank if none..." 
                      className="min-h-[100px]"
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        );
      
      case 2:
        return (
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold mb-4">Website Goals</h2>
              <p className="text-gray-600">What do you want your website to achieve for your business?</p>
            </div>
            
            <FormField
              control={form.control}
              name="primaryGoal"
              render={({ field }) => (
                <FormItem className="space-y-3">
                  <FormLabel>What is the primary goal of your website?</FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="flex flex-col space-y-1"
                    >
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="leadGeneration" />
                        </FormControl>
                        <FormLabel className="font-normal">
                          Lead Generation (Collect inquiries)
                        </FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="sales" />
                        </FormControl>
                        <FormLabel className="font-normal">
                          Direct Sales (Sell products/services online)
                        </FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="information" />
                        </FormControl>
                        <FormLabel className="font-normal">
                          Information Sharing (Educate visitors)
                        </FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="brandAwareness" />
                        </FormControl>
                        <FormLabel className="font-normal">
                          Brand Awareness (Build recognition)
                        </FormLabel>
                      </FormItem>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="secondaryGoals"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Any secondary goals? (Optional)</FormLabel>
                  <FormDescription>
                    You can select multiple options if applicable.
                  </FormDescription>
                  <div className="space-y-2 mt-2">
                    {["leadGeneration", "sales", "information", "brandAwareness"].map((goal) => {
                      const goalLabels: Record<string, string> = {
                        leadGeneration: "Lead Generation",
                        sales: "Direct Sales",
                        information: "Information Sharing",
                        brandAwareness: "Brand Awareness"
                      };
                      
                      return (
                        <div key={goal} className="flex items-center space-x-2">
                          <Checkbox
                            id={`secondary-${goal}`}
                            checked={field.value?.includes(goal as any)}
                            onCheckedChange={(checked) => {
                              const updatedGoals = checked
                                ? [...(field.value || []), goal]
                                : (field.value || []).filter((value) => value !== goal);
                              field.onChange(updatedGoals);
                            }}
                            disabled={form.watch("primaryGoal") === goal}
                          />
                          <label
                            htmlFor={`secondary-${goal}`}
                            className={`text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 ${
                              form.watch("primaryGoal") === goal ? "text-gray-400" : ""
                            }`}
                          >
                            {goalLabels[goal]}
                          </label>
                        </div>
                      );
                    })}
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        );
      
      case 3:
        return (
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold mb-4">Website Features</h2>
              <p className="text-gray-600">Select the features you need for your website.</p>
            </div>
            
            <FormField
              control={form.control}
              name="features"
              render={() => (
                <FormItem>
                  <div className="mb-4">
                    <FormLabel>Which features do you need?</FormLabel>
                    <FormDescription>
                      Select all that apply to your project.
                    </FormDescription>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {featuresList.map((feature) => (
                      <FormField
                        key={feature.id}
                        control={form.control}
                        name="features"
                        render={({ field }) => {
                          return (
                            <FormItem
                              key={feature.id}
                              className="flex flex-row items-start space-x-3 space-y-0"
                            >
                              <FormControl>
                                <Checkbox
                                  checked={field.value?.includes(feature.id)}
                                  onCheckedChange={(checked) => {
                                    const updatedFeatures = checked
                                      ? [...field.value || [], feature.id]
                                      : field.value?.filter(
                                          (value) => value !== feature.id
                                        );
                                    field.onChange(updatedFeatures);
                                  }}
                                />
                              </FormControl>
                              <FormLabel className="font-normal">
                                {feature.label}
                              </FormLabel>
                            </FormItem>
                          );
                        }}
                      />
                    ))}
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="otherFeatures"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Any other features not listed above?</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="Describe any other features you need..." 
                      className="min-h-[100px]"
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        );
      
      case 4:
        return (
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold mb-4">Competitors</h2>
              <p className="text-gray-600">Help us understand your competitive landscape.</p>
            </div>
            
            <FormField
              control={form.control}
              name="competitors"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Who are your main competitors?</FormLabel>
                  <FormDescription>
                    List their names and websites if possible.
                  </FormDescription>
                  <FormControl>
                    <Textarea 
                      placeholder="List your main competitors..." 
                      className="min-h-[100px]"
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="differentiators"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>What makes your business different from competitors?</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="Describe what sets you apart..." 
                      className="min-h-[100px]"
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        );
      
      case 5:
        return (
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold mb-4">Content Needs</h2>
              <p className="text-gray-600">Tell us about what pages and content you need.</p>
            </div>
            
            <FormField
              control={form.control}
              name="contentPages"
              render={() => (
                <FormItem>
                  <div className="mb-4">
                    <FormLabel>Which pages will you need?</FormLabel>
                    <FormDescription>
                      Select all pages that should be included in your website.
                    </FormDescription>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {contentPagesList.map((page) => (
                      <FormField
                        key={page.id}
                        control={form.control}
                        name="contentPages"
                        render={({ field }) => {
                          return (
                            <FormItem
                              key={page.id}
                              className="flex flex-row items-start space-x-3 space-y-0"
                            >
                              <FormControl>
                                <Checkbox
                                  checked={field.value?.includes(page.id)}
                                  onCheckedChange={(checked) => {
                                    const updatedPages = checked
                                      ? [...field.value || [], page.id]
                                      : field.value?.filter(
                                          (value) => value !== page.id
                                        );
                                    field.onChange(updatedPages);
                                  }}
                                />
                              </FormControl>
                              <FormLabel className="font-normal">
                                {page.label}
                              </FormLabel>
                            </FormItem>
                          );
                        }}
                      />
                    ))}
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="existingContent"
              render={({ field }) => (
                <FormItem className="space-y-3">
                  <FormLabel>Do you have existing content to use?</FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="flex flex-col space-y-1"
                    >
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="yes" />
                        </FormControl>
                        <FormLabel className="font-normal">
                          Yes, I have all content ready
                        </FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="partial" />
                        </FormControl>
                        <FormLabel className="font-normal">
                          Partially, I have some content
                        </FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="no" />
                        </FormControl>
                        <FormLabel className="font-normal">
                          No, I need help with content
                        </FormLabel>
                      </FormItem>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="contentNotes"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Additional notes about content (optional)</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="Any special requirements for content..." 
                      className="min-h-[100px]"
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        );
      
      case 6:
        return (
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold mb-4">Technical Requirements</h2>
              <p className="text-gray-600">Tell us about domain, hosting, and integration needs.</p>
            </div>
            
            <FormField
              control={form.control}
              name="domain"
              render={({ field }) => (
                <FormItem className="space-y-3">
                  <FormLabel>Do you have a domain name?</FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="flex flex-col space-y-1"
                    >
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="have" />
                        </FormControl>
                        <FormLabel className="font-normal">
                          Yes, I already have a domain
                        </FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="need" />
                        </FormControl>
                        <FormLabel className="font-normal">
                          No, I need help registering one
                        </FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="unsure" />
                        </FormControl>
                        <FormLabel className="font-normal">
                          I'm not sure yet
                        </FormLabel>
                      </FormItem>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            {form.watch("domain") === "have" && (
              <FormField
                control={form.control}
                name="domainName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>What is your domain name?</FormLabel>
                    <FormControl>
                      <Input placeholder="E.g., yourbusiness.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            )}
            
            <FormField
              control={form.control}
              name="hosting"
              render={({ field }) => (
                <FormItem className="space-y-3">
                  <FormLabel>Do you have web hosting?</FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="flex flex-col space-y-1"
                    >
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="have" />
                        </FormControl>
                        <FormLabel className="font-normal">
                          Yes, I already have hosting
                        </FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="need" />
                        </FormControl>
                        <FormLabel className="font-normal">
                          No, I need hosting
                        </FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="unsure" />
                        </FormControl>
                        <FormLabel className="font-normal">
                          I'm not sure yet
                        </FormLabel>
                      </FormItem>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="integrations"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Do you need any third-party integrations? (Optional)</FormLabel>
                  <FormDescription>
                    E.g., CRM, email marketing, payment processors, etc.
                  </FormDescription>
                  <FormControl>
                    <Textarea 
                      placeholder="List any integrations you need..." 
                      className="min-h-[100px]"
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        );
      
      case 7:
        return (
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold mb-4">Design Preferences</h2>
              <p className="text-gray-600">Tell us about your visual preferences.</p>
            </div>
            
            <FormField
              control={form.control}
              name="designStyle"
              render={({ field }) => (
                <FormItem className="space-y-3">
                  <FormLabel>What design style do you prefer?</FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="flex flex-col space-y-1"
                    >
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="modern" />
                        </FormControl>
                        <FormLabel className="font-normal">
                          Modern & Clean
                        </FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="minimalist" />
                        </FormControl>
                        <FormLabel className="font-normal">
                          Minimalist
                        </FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="bold" />
                        </FormControl>
                        <FormLabel className="font-normal">
                          Bold & Colorful
                        </FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="traditional" />
                        </FormControl>
                        <FormLabel className="font-normal">
                          Traditional/Classic
                        </FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="playful" />
                        </FormControl>
                        <FormLabel className="font-normal">
                          Playful/Fun
                        </FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="luxury" />
                        </FormControl>
                        <FormLabel className="font-normal">
                          Luxury/Premium
                        </FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="other" />
                        </FormControl>
                        <FormLabel className="font-normal">
                          Other (please describe below)
                        </FormLabel>
                      </FormItem>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="colorPreferences"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Do you have color preferences? (Optional)</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="Describe your color preferences..." 
                      className="min-h-[100px]"
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="websitesLike"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Examples of websites you like</FormLabel>
                  <FormDescription>
                    Share links or descriptions of websites whose design you admire.
                  </FormDescription>
                  <FormControl>
                    <Textarea 
                      placeholder="List websites you like and what you like about them..." 
                      className="min-h-[100px]"
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="websitesDislike"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Examples of websites you dislike (Optional)</FormLabel>
                  <FormDescription>
                    This helps us understand what to avoid.
                  </FormDescription>
                  <FormControl>
                    <Textarea 
                      placeholder="List websites you dislike and why..." 
                      className="min-h-[100px]"
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        );
      
      case 8:
        return (
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
              <p className="text-gray-600">How can we get in touch with you?</p>
            </div>
            
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Your Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Full name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email Address</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="you@example.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone Number (Optional)</FormLabel>
                  <FormControl>
                    <Input placeholder="+1234567890" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="company"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Company Name (Optional)</FormLabel>
                  <FormControl>
                    <Input placeholder="Your company name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="termsAgreed"
              render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormLabel>
                      I agree to the terms and privacy policy
                    </FormLabel>
                    <FormDescription>
                      By submitting this form, you agree that we may contact you about your project.
                    </FormDescription>
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        );
      
      default:
        return null;
    }
  };
  
  return (
    <>
      <PageTransition />
      <Navbar />
      
      <div className="bg-gradient-to-b from-windo-light to-white pt-32 pb-20 min-h-screen">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <div className="mb-12 text-center">
              <h1 className="text-3xl md:text-4xl font-bold text-windo-darkgray mb-4">
                <span className="text-transparent bg-clip-text bg-orange-gradient">Project</span> Questionnaire
              </h1>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Help us understand your project needs so we can create the perfect website for your business.
              </p>
            </div>
            
            {/* Progress bar */}
            <div className="w-full bg-gray-200 h-2 rounded-full mb-8">
              <div 
                className="bg-orange-gradient h-full rounded-full transition-all duration-300" 
                style={{ width: `${progress}%` }}
              ></div>
            </div>
            
            {/* Step indicators */}
            <div className="flex justify-between mb-8 overflow-x-auto py-2">
              {steps.map((step, index) => (
                <div 
                  key={index}
                  className={`flex flex-col items-center mx-1 ${
                    index === currentStep 
                      ? 'text-windo-orange' 
                      : index < currentStep 
                        ? 'text-gray-500' 
                        : 'text-gray-300'
                  }`}
                >
                  <div className={`w-8 h-8 flex items-center justify-center rounded-full mb-1 ${
                    index === currentStep 
                      ? 'bg-windo-orange text-white' 
                      : index < currentStep 
                        ? 'bg-gray-200 text-gray-500' 
                        : 'bg-gray-100 text-gray-300'
                  }`}>
                    {index < currentStep ? <Check size={16} /> : index + 1}
                  </div>
                  <span className="text-xs whitespace-nowrap">{step.title}</span>
                </div>
              ))}
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                  {renderStep()}
                  
                  <div className="flex flex-col sm:flex-row justify-between pt-4 gap-4">
                    {currentStep > 0 && (
                      <Button
                        type="button"
                        onClick={prevStep}
                        variant="outline"
                        className="flex-1"
                      >
                        <ChevronLeft className="mr-2 h-4 w-4" />
                        Previous
                      </Button>
                    )}
                    
                    {currentStep < steps.length - 1 ? (
                      <Button 
                        type="button" 
                        onClick={nextStep}
                        className="flex-1 bg-orange-gradient text-white"
                      >
                        Next
                        <ChevronRight className="ml-2 h-4 w-4" />
                      </Button>
                    ) : (
                      <Button 
                        type="submit" 
                        className="flex-1 bg-orange-gradient text-white"
                      >
                        Submit Questionnaire
                        <Check className="ml-2 h-4 w-4" />
                      </Button>
                    )}
                  </div>
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
