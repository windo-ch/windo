
import React from 'react';
import { Settings } from 'lucide-react';
import { useFormContext } from 'react-hook-form';
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
} from '@/components/ui/form';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';

const TechnicalContactStep = () => {
  const form = useFormContext();

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3 mb-4">
        <Settings className="h-6 w-6 text-windo-orange" />
        <h2 className="text-2xl font-bold">Technical & Contact Information</h2>
      </div>
      <p className="text-gray-600 mb-4">Tell us about your technical requirements and how we can reach you.</p>
      
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
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
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
                </div>
              </RadioGroup>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
      </div>
      
      <FormField
        control={form.control}
        name="termsAgreed"
        render={({ field }) => (
          <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md p-4 border border-gray-200 bg-gray-50">
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
};

export default TechnicalContactStep;
