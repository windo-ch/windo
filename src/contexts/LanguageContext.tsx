import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';

// Import translations from modular files
import { baseTranslations } from '../translations/base';
import { heroTranslations } from '../translations/hero';
import { navigationTranslations } from '../translations/navigation';
import { businessTypesTranslations } from '../translations/businessTypes';
import { servicesTranslations } from '../translations/services';
import { seoTranslations } from '../translations/seo';
import { getIndustryTranslations } from '../translations/industries';
import { questionnaireCoreTranslations } from '../translations/questionnaire/core';
import { questionnaireGeneralInfoTranslations } from '../translations/questionnaire/generalInfo';
import { questionnaireGoalsFeaturesTranslations } from '../translations/questionnaire/goalsFeatures';
import { questionnaireDesignContentTranslations } from '../translations/questionnaire/designContent';
import { questionnaireTechnicalContactTranslations } from '../translations/questionnaire/technicalContact';

export type Language = 'en' | 'de' | 'fr' | 'it';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  missingTranslations: string[];
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');
  const [missingTranslations, setMissingTranslations] = useState<string[]>([]);

  // Combine all translations
  const mergeTranslations = (translations: Record<string, any>[]) => {
    return translations.reduce((acc, curr) => ({ ...acc, ...curr }), {});
  };

  // Create the combined base translations
  const combinedBaseTranslations = mergeTranslations([
    baseTranslations,
    heroTranslations.en,
    navigationTranslations.en,
    businessTypesTranslations.en,
    servicesTranslations.en,
    seoTranslations.en,
    getIndustryTranslations('en'),
    questionnaireCoreTranslations.en,
    questionnaireGeneralInfoTranslations.en,
    questionnaireGoalsFeaturesTranslations.en,
    questionnaireDesignContentTranslations.en,
    questionnaireTechnicalContactTranslations.en,
  ]);

  const translations: Record<Language, Record<string, any>> = {
    en: combinedBaseTranslations,
    de: {
      ...combinedBaseTranslations,
      ...heroTranslations.de,
      ...navigationTranslations.de,
      ...businessTypesTranslations.de,
      ...servicesTranslations.de,
      ...seoTranslations.de,
      ...getIndustryTranslations('de'),
      ...questionnaireCoreTranslations.de,
      ...questionnaireGeneralInfoTranslations.de,
      ...questionnaireGoalsFeaturesTranslations.de,
      ...questionnaireDesignContentTranslations.de,
      ...questionnaireTechnicalContactTranslations.de,
    },
    fr: {
      ...combinedBaseTranslations,
      ...heroTranslations.fr,
      ...navigationTranslations.fr,
      ...businessTypesTranslations.fr,
      ...servicesTranslations.fr,
      ...seoTranslations.fr,
      ...getIndustryTranslations('fr'),
      ...questionnaireCoreTranslations.fr,
      ...questionnaireGeneralInfoTranslations.fr,
      ...questionnaireGoalsFeaturesTranslations.fr,
      ...questionnaireDesignContentTranslations.fr,
      ...questionnaireTechnicalContactTranslations.fr,
    },
    it: {
      ...combinedBaseTranslations,
      ...heroTranslations.it,
      ...navigationTranslations.it,
      ...businessTypesTranslations.it,
      ...servicesTranslations.it,
      ...seoTranslations.it,
      ...getIndustryTranslations('it'),
      ...questionnaireCoreTranslations.it,
      ...questionnaireGeneralInfoTranslations.it,
      ...questionnaireGoalsFeaturesTranslations.it,
      ...questionnaireDesignContentTranslations.it,
      ...questionnaireTechnicalContactTranslations.it,
    },
  };

  // Check for missing translations
  useEffect(() => {
    const missing: string[] = [];
    Object.keys(combinedBaseTranslations).forEach((key) => {
      Object.keys(translations).forEach((lang) => {
        if (!translations[lang as Language][key]) {
          missing.push(`${lang}:${key}`);
        }
      });
    });
    setMissingTranslations(missing);
    
    // Log missing translations in development
    if (process.env.NODE_ENV === 'development' && missing.length > 0) {
      console.warn('Missing translations:', missing);
    }
  }, []);

  const t = (key: string): string => {
    // In development, show a warning for missing translations
    if (process.env.NODE_ENV === 'development' && !translations[language][key]) {
      console.warn(`Missing translation for key "${key}" in language "${language}"`);
    }
    return translations[language][key] || translations['en'][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, missingTranslations }}>
      {children}
    </LanguageContext.Provider>
  );
}; 