import React from 'react';
import { Target, Layout } from 'lucide-react';
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
import { useLanguage } from '../../../contexts/LanguageContext';

const GoalsFeaturesStep = () => {
  const form = useFormContext();
  const { t } = useLanguage();
  
  // Features list for checkbox selection
  const featuresList = [
    { id: "contactForm", label: t('questionnaire.features.contactForm.label'), description: t('questionnaire.features.contactForm.description') },
    { id: "onlineBooking", label: t('questionnaire.features.onlineBooking.label'), description: t('questionnaire.features.onlineBooking.description') },
    { id: "ecommerce", label: t('questionnaire.features.ecommerce.label'), description: t('questionnaire.features.ecommerce.description') },
    { id: "portfolio", label: t('questionnaire.features.portfolio.label'), description: t('questionnaire.features.portfolio.description') },
    { id: "blog", label: t('questionnaire.features.blog.label'), description: t('questionnaire.features.blog.description') },
    { id: "members", label: t('questionnaire.features.members.label'), description: t('questionnaire.features.members.description') },
    { id: "newsletter", label: t('questionnaire.features.newsletter.label'), description: t('questionnaire.features.newsletter.description') },
    { id: "social", label: t('questionnaire.features.social.label'), description: t('questionnaire.features.social.description') },
    { id: "multilingual", label: t('questionnaire.features.multilingual.label'), description: t('questionnaire.features.multilingual.description') },
  ];

  // Primary goals list
  const primaryGoalsList = [
    { id: "branding", label: t('questionnaire.goals.primary.branding.label'), description: t('questionnaire.goals.primary.branding.description') },
    { id: "leads", label: t('questionnaire.goals.primary.leads.label'), description: t('questionnaire.goals.primary.leads.description') },
    { id: "sales", label: t('questionnaire.goals.primary.sales.label'), description: t('questionnaire.goals.primary.sales.description') },
    { id: "information", label: t('questionnaire.goals.primary.information.label'), description: t('questionnaire.goals.primary.information.description') },
  ];

  // Secondary goals list
  const secondaryGoalsList = [
    { id: "credibility", label: t('questionnaire.goals.secondary.credibility.label'), description: t('questionnaire.goals.secondary.credibility.description') },
    { id: "community", label: t('questionnaire.goals.secondary.community.label'), description: t('questionnaire.goals.secondary.community.description') },
    { id: "support", label: t('questionnaire.goals.secondary.support.label'), description: t('questionnaire.goals.secondary.support.description') },
    { id: "recruitment", label: t('questionnaire.goals.secondary.recruitment.label'), description: t('questionnaire.goals.secondary.recruitment.description') },
  ];

  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 dark:bg-gray-800 mb-4">
          <Target className="w-6 h-6 text-windo-orange" />
        </div>
        <h2 className="text-2xl font-semibold mb-2">{t('questionnaire.goals.title')}</h2>
        <p className="text-gray-600 dark:text-gray-400">
          {t('questionnaire.goals.subtitle')}
        </p>
      </div>

      <div className="space-y-6">
        <div className="space-y-4">
          <h3 className="text-lg font-medium flex items-center space-x-2">
            <Target className="w-5 h-5 text-windo-orange" />
            <span>{t('questionnaire.goals.primary.title')}</span>
          </h3>
          <FormField
            name="primaryGoal"
            render={({ field }) => (
              <FormItem className="space-y-3">
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="grid grid-cols-1 md:grid-cols-2 gap-4"
                  >
                    {primaryGoalsList.map((goal) => (
                      <FormItem key={goal.id} className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4 hover:bg-windo-light/10 dark:hover:bg-gray-800/50 transition-colors">
                        <FormControl>
                          <RadioGroupItem value={goal.id} className="text-windo-orange border-windo-orange" />
                        </FormControl>
                        <div className="space-y-1 leading-none">
                          <FormLabel>{goal.label}</FormLabel>
                          <FormDescription>{goal.description}</FormDescription>
                        </div>
                      </FormItem>
                    ))}
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-medium flex items-center space-x-2">
            <Target className="w-5 h-5 text-windo-orange" />
            <span>{t('questionnaire.goals.secondary.title')}</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {secondaryGoalsList.map((goal) => (
              <FormField
                key={goal.id}
                name="secondaryGoals"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4 hover:bg-windo-light/10 dark:hover:bg-gray-800/50 transition-colors">
                    <FormControl>
                      <Checkbox
                        checked={field.value?.includes(goal.id)}
                        onCheckedChange={(checked) => {
                          const current = field.value || [];
                          if (checked) {
                            field.onChange([...current, goal.id]);
                          } else {
                            field.onChange(current.filter((v) => v !== goal.id));
                          }
                        }}
                        className="border-windo-orange data-[state=checked]:bg-windo-orange data-[state=checked]:text-white"
                      />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel>{goal.label}</FormLabel>
                      <FormDescription>{goal.description}</FormDescription>
                    </div>
                  </FormItem>
                )}
              />
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-medium flex items-center space-x-2">
            <Layout className="w-5 h-5 text-windo-orange" />
            <span>{t('questionnaire.goals.features.title')}</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {featuresList.map((feature) => (
              <FormField
                key={feature.id}
                name="features"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4 hover:bg-windo-light/10 dark:hover:bg-gray-800/50 transition-colors">
                    <FormControl>
                      <Checkbox
                        checked={field.value?.includes(feature.id)}
                        onCheckedChange={(checked) => {
                          const current = field.value || [];
                          if (checked) {
                            field.onChange([...current, feature.id]);
                          } else {
                            field.onChange(current.filter((v) => v !== feature.id));
                          }
                        }}
                        className="border-windo-orange data-[state=checked]:bg-windo-orange data-[state=checked]:text-white"
                      />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel>{feature.label}</FormLabel>
                      <FormDescription>{feature.description}</FormDescription>
                    </div>
                  </FormItem>
                )}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GoalsFeaturesStep;
