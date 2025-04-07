
import React from 'react';
import { Building } from 'lucide-react';
import { useFormContext } from 'react-hook-form';
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const BusinessInfoStep = () => {
  const form = useFormContext();

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3 mb-4">
        <Building className="h-6 w-6 text-windo-orange" />
        <h2 className="text-2xl font-bold">Tell us about your business</h2>
      </div>
      <p className="text-gray-600 mb-4">This helps us understand your business context and needs.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                  className="min-h-[80px]"
                  {...field} 
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormField
          control={form.control}
          name="targetAudience"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Who is your target audience?</FormLabel>
              <FormControl>
                <Textarea 
                  placeholder="Describe your ideal customers or clients..." 
                  className="min-h-[80px]"
                  {...field} 
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="brandValues"
          render={({ field }) => (
            <FormItem>
              <FormLabel>What are your core brand values?</FormLabel>
              <FormControl>
                <Textarea 
                  placeholder="E.g., Innovation, Reliability, Sustainability..." 
                  className="min-h-[80px]"
                  {...field} 
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
    </div>
  );
};

export default BusinessInfoStep;
