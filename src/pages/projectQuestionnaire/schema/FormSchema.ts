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
  domain: z.string({
    required_error: "Please select your domain status",
  }),
  name: z.string().min(2, {
    message: "Please enter your name",
  }).optional().or(z.literal("")),
  email: z.string().email({
    message: "Please enter a valid email address",
  }).optional().or(z.literal("")),
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
    fields: ["domain", "name", "email", "phone", "company", "projectTimeline", "budget", "termsAgreed"],
    icon: 'Settings' as const
  },
];
