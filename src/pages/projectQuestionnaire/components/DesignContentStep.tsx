import React from 'react';
import { Paintbrush, FileText, Palette, Globe } from 'lucide-react';
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
import { useLanguage } from '../../../contexts/LanguageContext';

const DesignContentStep = () => {
  const form = useFormContext();
  const { t } = useLanguage();
  
  // Content pages list for checkbox selection
  const contentPagesList = [
    { id: "home", label: t('questionnaire.content.pages.home.label'), description: t('questionnaire.content.pages.home.description') },
    { id: "about", label: t('questionnaire.content.pages.about.label'), description: t('questionnaire.content.pages.about.description') },
    { id: "services", label: t('questionnaire.content.pages.services.label'), description: t('questionnaire.content.pages.services.description') },
    { id: "portfolio", label: t('questionnaire.content.pages.portfolio.label'), description: t('questionnaire.content.pages.portfolio.description') },
    { id: "testimonials", label: t('questionnaire.content.pages.testimonials.label'), description: t('questionnaire.content.pages.testimonials.description') },
    { id: "blog", label: t('questionnaire.content.pages.blog.label'), description: t('questionnaire.content.pages.blog.description') },
    { id: "contact", label: t('questionnaire.content.pages.contact.label'), description: t('questionnaire.content.pages.contact.description') },
    { id: "pricing", label: t('questionnaire.content.pages.pricing.label'), description: t('questionnaire.content.pages.pricing.description') },
    { id: "faq", label: t('questionnaire.content.pages.faq.label'), description: t('questionnaire.content.pages.faq.description') },
  ];

  // Design preferences list
  const designPreferencesList = [
    { id: "modern", label: t('questionnaire.design.preferences.modern.label'), description: t('questionnaire.design.preferences.modern.description') },
    { id: "responsive", label: t('questionnaire.design.preferences.responsive.label'), description: t('questionnaire.design.preferences.responsive.description') },
    { id: "interactive", label: t('questionnaire.design.preferences.interactive.label'), description: t('questionnaire.design.preferences.interactive.description') },
    { id: "traditional", label: t('questionnaire.design.preferences.traditional.label'), description: t('questionnaire.design.preferences.traditional.description') },
  ];

  // Design style options
  const designStyleOptions = [
    { id: "minimalist", label: t('questionnaire.design.style.minimalist.label'), description: t('questionnaire.design.style.minimalist.description') },
    { id: "modern", label: t('questionnaire.design.style.modern.label'), description: t('questionnaire.design.style.modern.description') },
    { id: "classic", label: t('questionnaire.design.style.classic.label'), description: t('questionnaire.design.style.classic.description') },
    { id: "creative", label: t('questionnaire.design.style.creative.label'), description: t('questionnaire.design.style.creative.description') },
  ];

  // Existing content options
  const existingContentOptions = [
    { id: "yes", label: t('questionnaire.content.existing.yes.label'), description: t('questionnaire.content.existing.yes.description') },
    { id: "partial", label: t('questionnaire.content.existing.partial.label'), description: t('questionnaire.content.existing.partial.description') },
    { id: "no", label: t('questionnaire.content.existing.no.label'), description: t('questionnaire.content.existing.no.description') },
  ];

  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 dark:bg-gray-800 mb-4">
          <Paintbrush className="w-6 h-6 text-windo-orange" />
        </div>
        <h2 className="text-2xl font-semibold mb-2">{t('questionnaire.design.title')}</h2>
        <p className="text-gray-600 dark:text-gray-400">
          {t('questionnaire.design.subtitle')}
        </p>
      </div>

      <div className="space-y-6">
        {/* Design Style */}
        <div className="space-y-4">
          <h3 className="text-lg font-medium flex items-center space-x-2">
            <Palette className="w-5 h-5 text-windo-orange" />
            <span>{t('questionnaire.design.style.title')}</span>
          </h3>
          <FormField
            name="designStyle"
            render={({ field }) => (
              <FormItem className="space-y-3">
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="grid grid-cols-1 md:grid-cols-2 gap-4"
                  >
                    {designStyleOptions.map((style) => (
                      <FormItem key={style.id} className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4 hover:bg-windo-light/10 dark:hover:bg-gray-800/50 transition-colors">
                        <FormControl>
                          <RadioGroupItem value={style.id} className="text-windo-orange border-windo-orange" />
                        </FormControl>
                        <div className="space-y-1 leading-none">
                          <FormLabel>{style.label}</FormLabel>
                          <FormDescription>{style.description}</FormDescription>
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

        {/* Design Preferences */}
        <div className="space-y-4">
          <h3 className="text-lg font-medium flex items-center space-x-2">
            <Palette className="w-5 h-5 text-windo-orange" />
            <span>{t('questionnaire.design.preferences.title')}</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {designPreferencesList.map((preference) => (
              <FormField
                key={preference.id}
                name="designPreferences"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4 hover:bg-windo-light/10 dark:hover:bg-gray-800/50 transition-colors">
                    <FormControl>
                      <Checkbox
                        checked={field.value?.includes(preference.id)}
                        onCheckedChange={(checked) => {
                          const current = field.value || [];
                          if (checked) {
                            field.onChange([...current, preference.id]);
                          } else {
                            field.onChange(current.filter((v) => v !== preference.id));
                          }
                        }}
                        className="border-windo-orange data-[state=checked]:bg-windo-orange data-[state=checked]:text-white"
                      />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel>{preference.label}</FormLabel>
                      <FormDescription>{preference.description}</FormDescription>
                    </div>
                  </FormItem>
                )}
              />
            ))}
          </div>
        </div>

        {/* Websites Like */}
        <div className="space-y-4">
          <h3 className="text-lg font-medium flex items-center space-x-2">
            <Globe className="w-5 h-5 text-windo-orange" />
            <span>{t('questionnaire.design.websitesLike.title')}</span>
          </h3>
          <FormField
            name="websitesLike"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Textarea 
                    placeholder={t('questionnaire.design.websitesLike.placeholder')} 
                    className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 focus:border-windo-orange focus:ring-windo-orange min-h-[100px]"
                    {...field} 
                  />
                </FormControl>
                <FormDescription>
                  {t('questionnaire.design.websitesLike.description')}
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        {/* Content Pages */}
        <div className="space-y-4">
          <h3 className="text-lg font-medium flex items-center space-x-2">
            <FileText className="w-5 h-5 text-windo-orange" />
            <span>{t('questionnaire.content.pages.title')}</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {contentPagesList.map((page) => (
              <FormField
                key={page.id}
                name="contentPages"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4 hover:bg-windo-light/10 dark:hover:bg-gray-800/50 transition-colors">
                    <FormControl>
                      <Checkbox
                        checked={field.value?.includes(page.id)}
                        onCheckedChange={(checked) => {
                          const current = field.value || [];
                          if (checked) {
                            field.onChange([...current, page.id]);
                          } else {
                            field.onChange(current.filter((v) => v !== page.id));
                          }
                        }}
                        className="border-windo-orange data-[state=checked]:bg-windo-orange data-[state=checked]:text-white"
                      />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel>{page.label}</FormLabel>
                      <FormDescription>{page.description}</FormDescription>
                    </div>
                  </FormItem>
                )}
              />
            ))}
          </div>
        </div>

        {/* Existing Content */}
        <div className="space-y-4">
          <h3 className="text-lg font-medium flex items-center space-x-2">
            <FileText className="w-5 h-5 text-windo-orange" />
            <span>{t('questionnaire.content.existing.title')}</span>
          </h3>
          <FormField
            name="existingContent"
            render={({ field }) => (
              <FormItem className="space-y-3">
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="grid grid-cols-1 gap-4"
                  >
                    {existingContentOptions.map((option) => (
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
      </div>
    </div>
  );
};

export default DesignContentStep;
