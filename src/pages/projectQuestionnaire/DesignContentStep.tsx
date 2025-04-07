
import React from 'react';
import { Paintbrush } from 'lucide-react';
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
import { Textarea } from '@/components/ui/textarea';

const DesignContentStep = () => {
  const form = useFormContext();
  
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

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3 mb-4">
        <Paintbrush className="h-6 w-6 text-windo-orange" />
        <h2 className="text-2xl font-bold">Design & Content</h2>
      </div>
      <p className="text-gray-600 mb-4">Tell us about your visual preferences and content needs.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                      <RadioGroupItem value="luxury" />
                    </FormControl>
                    <FormLabel className="font-normal">
                      Luxury/Premium
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
                  className="min-h-[150px]"
                  {...field} 
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
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
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
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
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
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
                </div>
              </RadioGroup>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
};

export default DesignContentStep;
