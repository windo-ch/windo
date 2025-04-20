import * as z from 'zod';

// Define the form schema with Zod
export const formSchema = z.object({
  // Step 1: Business Information
  industry: z.string().min(2, {
    message: "Please enter your industry",
  }),
  servicesProducts: z.string().min(5, {
    message: "Please describe your products or services",
  }),
  targetAudience: z.string().min(5, {
    message: "Please describe your target audience",
  }),
  brandValues: z.string().min(5, {
    message: "Please describe your brand values",
  }),
  
  // Step 2: Website Goals & Features
  primaryGoal: z.string({
    required_error: "Please select a primary goal for your website",
  }),
  secondaryGoals: z.array(z.string()).min(1, {
    message: "Please select at least one secondary goal",
  }),
  features: z.array(z.string()).min(1, {
    message: "Please select at least one feature",
  }),
  
  // Step 3: Design & Content
  designStyle: z.string({
    required_error: "Please select a design style",
  }),
  designPreferences: z.array(z.string()).optional(),
  websitesLike: z.string().min(5, {
    message: "Please share examples of websites you like",
  }),
  contentPages: z.array(z.string()).min(1, {
    message: "Please select at least one page type",
  }),
  existingContent: z.string({
    required_error: "Please indicate if you have existing content",
  }),
  
  // Step 4: Technical & Contact
  domainOption: z.string({
    required_error: "Please select your domain status",
  }),
  hostingOption: z.string({
    required_error: "Please select your hosting preference",
  }),
  existingDomain: z.string().optional(),
  technicalRequirements: z.string().optional(),
  // Optional technical contact fields that only validate if filled
  technicalContactName: z.string().optional().refine(val => !val || val.length >= 2, {
    message: "Name must be at least 2 characters if provided"
  }),
  technicalContactEmail: z.string().optional().refine(val => !val || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val), {
    message: "Please enter a valid email address if provided"
  }),
  technicalContactPhone: z.string().optional(),
  // Required contact fields
  name: z.string().superRefine((val, ctx) => {
    // Only validate if the field has been touched or submitted
    if (val === "") return; // Empty is fine initially
    
    if (val.length < 2) {
      ctx.addIssue({
        code: z.ZodIssueCode.too_small,
        minimum: 2,
        type: "string",
        inclusive: true,
        message: "Please enter your name",
      });
    }
  }),
  email: z.string().superRefine((val, ctx) => {
    // Only validate if the field has been touched or submitted
    if (val === "") return; // Empty is fine initially
    
    // Basic email validation
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val)) {
      ctx.addIssue({
        code: z.ZodIssueCode.invalid_string,
        validation: "email",
        message: "Please enter a valid email address",
      });
    }
  }),
  phone: z.string().optional(),
  company: z.string().optional(),
  projectTimeline: z.array(z.object({
    description: z.string(),
    date: z.string(),
  })).min(1, {
    message: "Please add at least one timeline entry",
  }),
  budget: z.number().min(500, {
    message: "Minimum budget is CHF 500",
  }).max(20000, {
    message: "Maximum budget is CHF 20,000",
  }),
  termsAgreed: z.boolean().refine(val => val === true, {
    message: "You must agree to the terms",
  }),
});

export type FormValues = z.infer<typeof formSchema>;

export const steps = [
  { 
    title: "Business Info", 
    fields: ["industry", "servicesProducts", "targetAudience", "brandValues"],
    icon: 'Building' as const
  },
  { 
    title: "Goals & Features", 
    fields: ["primaryGoal", "secondaryGoals", "features"],
    icon: 'Target' as const
  },
  { 
    title: "Design & Content", 
    fields: ["designStyle", "designPreferences", "websitesLike", "contentPages", "existingContent"],
    icon: 'Paintbrush' as const
  },
  { 
    title: "Technical & Contact", 
    fields: [
      "domainOption", "hostingOption", "existingDomain", "technicalRequirements", 
      "technicalContactName", "technicalContactEmail", "technicalContactPhone",
      "name", "email", "phone", "company", "projectTimeline", "budget", "termsAgreed"
    ],
    icon: 'Settings' as const
  },
];
