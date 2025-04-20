import React, { useEffect } from 'react';
import { FormField, FormItem, FormLabel, FormControl, FormMessage, FormDescription } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { User, Mail, Phone, Building, Calendar, Check, Coins, Plus, Trash2, Globe, Clock } from 'lucide-react';
import { Slider } from '@/components/ui/slider';
import { Button } from '@/components/ui/button';
import { useFormContext } from 'react-hook-form';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Calendar as CalendarComponent } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { format } from 'date-fns';
import { cn } from '@/lib/utils';
import { CalendarIcon } from 'lucide-react';
import { CostEstimation } from './CostEstimation';
import { useLanguage } from '../../../contexts/LanguageContext';

export function TechnicalContactStep() {
  const form = useFormContext();
  const { t } = useLanguage();

  // Set initial values when component mounts
  useEffect(() => {
    if (!form.getValues('projectTimeline')?.length) {
      form.setValue('projectTimeline', [{ description: '', date: format(new Date(), 'yyyy-MM-dd') }]);
    }
    if (!form.getValues('budget')) {
      form.setValue('budget', 5000);
    }
  }, [form]);

  // Format budget value for display
  const formatBudget = (value: number) => {
    if (value >= 20000) return `CHF 20,000+`;
    return `CHF ${value.toLocaleString()}`;
  };

  // Add new timeline entry
  const addTimelineEntry = () => {
    const currentTimeline = form.getValues('projectTimeline') || [];
    form.setValue('projectTimeline', [
      ...currentTimeline,
      { description: '', date: format(new Date(), 'yyyy-MM-dd') }
    ]);
  };

  // Remove timeline entry
  const removeTimelineEntry = (index: number) => {
    const currentTimeline = form.getValues('projectTimeline') || [];
    if (currentTimeline.length > 1) {
      form.setValue('projectTimeline', currentTimeline.filter((_, i) => i !== index));
    }
  };

  const hostingOptions = [
    { 
      id: "windo", 
      label: t('questionnaire.technical.hosting.windo.label'), 
      description: t('questionnaire.technical.hosting.windo.description') 
    },
    { 
      id: "own", 
      label: t('questionnaire.technical.hosting.own.label'), 
      description: t('questionnaire.technical.hosting.own.description') 
    },
    { 
      id: "undecided", 
      label: t('questionnaire.technical.hosting.undecided.label'), 
      description: t('questionnaire.technical.hosting.undecided.description') 
    },
  ];

  const domainOptions = [
    { 
      id: "have", 
      label: t('questionnaire.technical.domain.have.label'), 
      description: t('questionnaire.technical.domain.have.description') 
    },
    { 
      id: "need", 
      label: t('questionnaire.technical.domain.need.label'), 
      description: t('questionnaire.technical.domain.need.description') 
    },
    { 
      id: "undecided", 
      label: t('questionnaire.technical.domain.undecided.label'), 
      description: t('questionnaire.technical.domain.undecided.description') 
    },
  ];

  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 dark:bg-gray-800 mb-4">
          <Building className="w-6 h-6 text-windo-orange" />
        </div>
        <h2 className="text-2xl font-semibold mb-2">{t('questionnaire.technical.title')}</h2>
        <p className="text-gray-600 dark:text-gray-400">
          {t('questionnaire.technical.subtitle')}
        </p>
      </div>

      <div className="space-y-6">
        {/* Hosting Options */}
        <div className="space-y-4">
          <h3 className="text-lg font-medium flex items-center space-x-2">
            <Building className="w-5 h-5 text-windo-orange" />
            <span>{t('questionnaire.technical.hosting.title')}</span>
          </h3>
          <FormField
            name="hostingOption"
            render={({ field }) => (
              <FormItem className="space-y-3">
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="grid grid-cols-1 gap-4"
                  >
                    {hostingOptions.map((option) => (
                      <FormItem key={option.id} className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4 hover:bg-windo-light/10 dark:hover:bg-gray-800/50 transition-colors">
                        <FormControl>
                          <RadioGroupItem value={option.id} className="text-windo-orange border-windo-orange" />
                        </FormControl>
                        <div className="space-y-1 leading-none">
                          <FormLabel>{option.label}</FormLabel>
                          <FormDescription>{option.description}</FormDescription>
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

        {/* Domain Options */}
        <div className="space-y-4">
          <h3 className="text-lg font-medium flex items-center space-x-2">
            <Globe className="w-5 h-5 text-windo-orange" />
            <span>{t('questionnaire.technical.domain.title')}</span>
          </h3>
          <FormField
            name="domainOption"
            render={({ field }) => (
              <FormItem className="space-y-3">
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="grid grid-cols-1 gap-4"
                  >
                    {domainOptions.map((option) => (
                      <FormItem key={option.id} className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4 hover:bg-windo-light/10 dark:hover:bg-gray-800/50 transition-colors">
                        <FormControl>
                          <RadioGroupItem value={option.id} className="text-windo-orange border-windo-orange" />
                        </FormControl>
                        <div className="space-y-1 leading-none">
                          <FormLabel>{option.label}</FormLabel>
                          <FormDescription>{option.description}</FormDescription>
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

        {/* Existing Domain */}
        <div className="space-y-4">
          <FormField
            name="existingDomain"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t('questionnaire.technical.existingDomain.label')}</FormLabel>
                <FormControl>
                  <Input
                    placeholder={t('questionnaire.technical.existingDomain.placeholder')}
                    className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 focus:border-windo-orange focus:ring-windo-orange"
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  {t('questionnaire.technical.existingDomain.description')}
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        {/* Technical Requirements */}
        <div className="space-y-4">
          <h3 className="text-lg font-medium flex items-center space-x-2">
            <Building className="w-5 h-5 text-windo-orange" />
            <span>{t('questionnaire.technical.requirements.title')}</span>
          </h3>
          <FormField
            name="technicalRequirements"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Textarea 
                    placeholder={t('questionnaire.technical.requirements.placeholder')} 
                    className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 focus:border-windo-orange focus:ring-windo-orange min-h-[100px]"
                    {...field} 
                  />
                </FormControl>
                <FormDescription>
                  {t('questionnaire.technical.requirements.description')}
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        {/* Technical Contact */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h3 className="text-lg font-medium flex items-center space-x-2">
              <User className="w-5 h-5 text-windo-orange" />
              <span>{t('questionnaire.technical.contact.title')}</span>
            </h3>

            <FormField
              name="technicalContactName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t('questionnaire.technical.contact.name.label')}</FormLabel>
                  <FormControl>
                    <Input
                      placeholder={t('questionnaire.technical.contact.name.placeholder')}
                      className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 focus:border-windo-orange focus:ring-windo-orange"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              name="technicalContactEmail"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t('questionnaire.technical.contact.email.label')}</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder={t('questionnaire.technical.contact.email.placeholder')}
                      className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 focus:border-windo-orange focus:ring-windo-orange"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              name="technicalContactPhone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t('questionnaire.technical.contact.phone.label')}</FormLabel>
                  <FormControl>
                    <Input
                      type="tel"
                      placeholder={t('questionnaire.technical.contact.phone.placeholder')}
                      className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 focus:border-windo-orange focus:ring-windo-orange"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>
      </div>

      <CostEstimation />

      <div className="space-y-4">
        <h3 className="text-lg font-medium flex items-center space-x-2">
          <Coins className="w-5 h-5 text-windo-orange" />
          <span>{t('questionnaire.technical.budget.title')}</span>
        </h3>
        <FormField
          control={form.control}
          name="budget"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t('questionnaire.technical.budget.range.label')}</FormLabel>
              <FormDescription className="mb-4">
                {t('questionnaire.technical.budget.range.description')}
              </FormDescription>
              <div className="space-y-4">
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>{t('questionnaire.technical.budget.small')}</span>
                  <span>{t('questionnaire.technical.budget.medium')}</span>
                  <span>{t('questionnaire.technical.budget.large')}</span>
                  <span>{t('questionnaire.technical.budget.enterprise')}</span>
                </div>
                <FormControl>
                  <Slider
                    min={500}
                    max={20000}
                    step={100}
                    value={[field.value]}
                    onValueChange={(value) => field.onChange(value[0])}
                    className="py-4 [&_[role=slider]]:bg-windo-orange [&_[role=slider]]:border-windo-orange [&_[role=slider]]:hover:bg-windo-orange/90 [&_[role=slider]]:focus:ring-windo-orange [&_[role=slider]]:focus:ring-offset-windo-orange"
                  />
                </FormControl>
                <div className="text-center text-lg font-medium text-windo-orange">
                  {formatBudget(field.value)}
                </div>
              </div>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>

      <FormField
        control={form.control}
        name="termsAgreed"
        render={({ field }) => (
          <FormItem className="flex flex-row items-start space-x-3 space-y-0">
            <FormControl>
              <Checkbox
                checked={field.value}
                onCheckedChange={field.onChange}
                className="border-windo-orange data-[state=checked]:bg-windo-orange data-[state=checked]:text-white"
              />
            </FormControl>
            <div className="space-y-1 leading-none">
              <FormLabel>
                {t('questionnaire.terms.agreement.label')}
              </FormLabel>
              <FormDescription>
                {t('questionnaire.terms.agreement.description')}
              </FormDescription>
            </div>
          </FormItem>
        )}
      />
    </div>
  );
}

export default TechnicalContactStep;
