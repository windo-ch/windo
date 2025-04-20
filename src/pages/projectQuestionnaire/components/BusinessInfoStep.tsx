import React from 'react';
import { Building2 } from 'lucide-react';
import { FormField, FormItem, FormLabel, FormControl, FormMessage, FormDescription } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useLanguage } from '../../../contexts/LanguageContext';

const BusinessInfoStep = () => {
  const { t } = useLanguage();
  
  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 dark:bg-gray-800 mb-4">
          <Building2 className="w-6 h-6 text-windo-orange" />
        </div>
        <h2 className="text-2xl font-semibold mb-2">{t('questionnaire.businessInfo.title')}</h2>
        <p className="text-gray-600 dark:text-gray-400">
          {t('questionnaire.businessInfo.subtitle')}
        </p>
      </div>

      <div className="space-y-6">
        <FormField
          name="industry"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t('questionnaire.businessInfo.industry.label')}</FormLabel>
              <FormControl>
                <Input 
                  placeholder={t('questionnaire.businessInfo.industry.placeholder')}
                  className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 focus:border-windo-orange focus:ring-windo-orange hover:border-windo-orange/50"
                  {...field} 
                />
              </FormControl>
              <FormDescription>
                {t('questionnaire.businessInfo.industry.description')}
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          name="servicesProducts"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t('questionnaire.businessInfo.services.label')}</FormLabel>
              <FormControl>
                <Textarea 
                  placeholder={t('questionnaire.businessInfo.services.placeholder')}
                  className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 focus:border-windo-orange focus:ring-windo-orange hover:border-windo-orange/50 min-h-[100px]"
                  {...field} 
                />
              </FormControl>
              <FormDescription>
                {t('questionnaire.businessInfo.services.description')}
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          name="targetAudience"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t('questionnaire.businessInfo.audience.label')}</FormLabel>
              <FormControl>
                <Textarea 
                  placeholder={t('questionnaire.businessInfo.audience.placeholder')}
                  className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 focus:border-windo-orange focus:ring-windo-orange hover:border-windo-orange/50 min-h-[100px]"
                  {...field} 
                />
              </FormControl>
              <FormDescription>
                {t('questionnaire.businessInfo.audience.description')}
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          name="brandValues"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t('questionnaire.businessInfo.values.label')}</FormLabel>
              <FormControl>
                <Textarea 
                  placeholder={t('questionnaire.businessInfo.values.placeholder')}
                  className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 focus:border-windo-orange focus:ring-windo-orange hover:border-windo-orange/50 min-h-[100px]"
                  {...field} 
                />
              </FormControl>
              <FormDescription>
                {t('questionnaire.businessInfo.values.description')}
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
    </div>
  );
};

export default BusinessInfoStep;
