import { useFormContext } from "react-hook-form";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Coins } from "lucide-react";
import { useLanguage } from "../../../contexts/LanguageContext";

const featureCosts = {
  contactForm: 300,
  onlineBooking: 800,
  ecommerce: 1500,
  portfolio: 500,
  blog: 600,
  members: 1000,
  newsletter: 400,
  social: 200,
  multilingual: 800,
};

const pageCosts = {
  home: 500,
  about: 300,
  services: 400,
  portfolio: 400,
  testimonials: 300,
  blog: 400,
  contact: 300,
  pricing: 300,
  faq: 300,
};

export function CostEstimation() {
  const form = useFormContext();
  const { t } = useLanguage();
  const features = form.watch("features") || [];
  const contentPages = form.watch("contentPages") || [];

  const calculateTotal = () => {
    const featuresTotal = features.reduce((sum, feature) => sum + (featureCosts[feature] || 0), 0);
    const pagesTotal = contentPages.reduce((sum, page) => sum + (pageCosts[page] || 0), 0);
    return featuresTotal + pagesTotal;
  };

  const total = calculateTotal();

  return (
    <Card className="mb-8">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Coins className="w-5 h-5 text-windo-orange" />
          <span>{t('questionnaire.technical.budget.title')}</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-medium mb-2">{t('questionnaire.goals.features.title')}</h4>
              <ul className="space-y-1 text-sm text-muted-foreground">
                {features.map((feature) => (
                  <li key={feature} className="flex justify-between">
                    <span className="capitalize">{t(`questionnaire.features.${feature}.label`)}</span>
                    <span>CHF {featureCosts[feature].toLocaleString()}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-2">{t('questionnaire.content.pages.title')}</h4>
              <ul className="space-y-1 text-sm text-muted-foreground">
                {contentPages.map((page) => (
                  <li key={page} className="flex justify-between">
                    <span className="capitalize">{t(`questionnaire.content.pages.${page}.label`)}</span>
                    <span>CHF {pageCosts[page].toLocaleString()}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="pt-4 border-t">
            <div className="flex justify-between items-center">
              <span className="font-medium">{t('questionnaire.technical.budget.label')}</span>
              <span className="text-lg font-semibold text-windo-orange">
                CHF {total.toLocaleString()}
              </span>
            </div>
            <p className="text-sm text-muted-foreground mt-2">
              {t('questionnaire.technical.budget.description')}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
} 