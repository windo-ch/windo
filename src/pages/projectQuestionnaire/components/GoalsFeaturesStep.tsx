
import React from 'react';
import { Target } from 'lucide-react';
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

const GoalsFeaturesStep = () => {
  const form = useFormContext();
  
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

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3 mb-4">
        <Target className="h-6 w-6 text-windo-orange" />
        <h2 className="text-2xl font-bold">Website Goals & Features</h2>
      </div>
      <p className="text-gray-600 mb-4">What do you want your website to achieve and what features do you need?</p>
      
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-2">
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
                      checked={field.value?.includes(goal)}
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
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
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
    </div>
  );
};

export default GoalsFeaturesStep;
