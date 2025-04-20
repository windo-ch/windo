import React from 'react';
import SEO from '@/components/SEO';
import { useLanguage } from '@/contexts/LanguageContext';
import { FileText, CheckCircle, AlertTriangle, Scale, Clock, Award, Shield, Mail } from 'lucide-react';
import { termsTranslations } from '@/translations/legal/terms';
import AnimatedGradientText from '@/components/ui/AnimatedGradientText';

const Terms = () => {
  const { language } = useLanguage();
  const terms = termsTranslations[language];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": terms.title,
    "description": "Comprehensive Terms of Service for Windo - Swiss precision website builder for businesses.",
    "dateModified": "2025-04-20"
  };

  return (
    <>
      <SEO
        title={terms.title}
        description="Our Terms of Service outline the rules, rights, and obligations when using Windo's professional website building platform."
        canonicalUrl="/terms"
        structuredData={structuredData}
      />
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex justify-center items-center mb-4">
              <Scale className="w-10 h-10 text-windo-orange" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <AnimatedGradientText>{terms.intro.headline}</AnimatedGradientText>
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              {terms.lastUpdated}
            </p>
            <div className="mt-4 max-w-2xl mx-auto">
              <p className="text-gray-600 dark:text-gray-400">
                {terms.intro.description}
              </p>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 md:p-10 prose dark:prose-invert max-w-none">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="bg-gray-50 dark:bg-gray-700/30 p-6 rounded-xl">
                <CheckCircle className="w-8 h-8 text-windo-orange mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{terms.cards.commitments.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {terms.cards.commitments.description}
                </p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-700/30 p-6 rounded-xl">
                <Award className="w-8 h-8 text-windo-orange mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{terms.cards.quality.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {terms.cards.quality.description}
                </p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-700/30 p-6 rounded-xl">
                <Shield className="w-8 h-8 text-windo-orange mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{terms.cards.rights.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {terms.cards.rights.description}
                </p>
              </div>
            </div>

            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center">
                  <FileText className="w-6 h-6 text-windo-orange mr-2" />
                  {terms.sections.introduction.title}
                </h2>
                <p>
                  {terms.sections.introduction.paragraph1}
                </p>
                <p>
                  {terms.sections.introduction.paragraph2}
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center">
                  <CheckCircle className="w-6 h-6 text-windo-orange mr-2" />
                  {terms.sections.eligibility.title}
                </h2>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-4 mb-2">{terms.sections.eligibility.requirements.title}</h3>
                  <p>
                    To use our Services, you must:
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-400">
                    {terms.sections.eligibility.requirements.items.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>

                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-4 mb-2">{terms.sections.eligibility.account.title}</h3>
                  <p>
                    When creating an account with Windo, you agree to:
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-400">
                    {terms.sections.eligibility.account.items.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center">
                  <Award className="w-6 h-6 text-windo-orange mr-2" />
                  {terms.sections.services.title}
                </h2>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-4 mb-2">{terms.sections.services.description.title}</h3>
                  <p>
                    {terms.sections.services.description.content}
                  </p>

                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-4 mb-2">{terms.sections.services.subscription.title}</h3>
                  <p>
                    {terms.sections.services.subscription.content}
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-400">
                    {terms.sections.services.subscription.items.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                  <div className="bg-gray-50 dark:bg-gray-700/20 p-4 rounded-lg mt-4">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">{terms.sections.services.cancellation.title}</h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      {terms.sections.services.cancellation.content}
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center">
                  <Shield className="w-6 h-6 text-windo-orange mr-2" />
                  {terms.sections.intellectualProperty.title}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  <div className="bg-gray-50 dark:bg-gray-700/20 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">{terms.sections.intellectualProperty.yourContent.title}</h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      {terms.sections.intellectualProperty.yourContent.content}
                    </p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-700/20 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">{terms.sections.intellectualProperty.ourIP.title}</h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      {terms.sections.intellectualProperty.ourIP.content}
                    </p>
                  </div>
                </div>
                <div className="mt-4">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{terms.sections.intellectualProperty.guidelines.title}</h3>
                  <p>
                    {terms.sections.intellectualProperty.guidelines.content}
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-400">
                    {terms.sections.intellectualProperty.guidelines.items.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center">
                  <AlertTriangle className="w-6 h-6 text-windo-orange mr-2" />
                  {terms.sections.limitations.title}
                </h2>
                <div className="ml-4 space-y-4">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-4 mb-2">{terms.sections.limitations.availability.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {terms.sections.limitations.availability.content}
                  </p>

                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-4 mb-2">{terms.sections.limitations.disclaimer.title}</h3>
                  <div className="bg-gray-50 dark:bg-gray-700/20 p-4 rounded-lg">
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      {terms.sections.limitations.disclaimer.content}
                    </p>
                  </div>

                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-4 mb-2">{terms.sections.limitations.liability.title}</h3>
                  <div className="bg-gray-50 dark:bg-gray-700/20 p-4 rounded-lg">
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      {terms.sections.limitations.liability.content}
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center">
                  <Clock className="w-6 h-6 text-windo-orange mr-2" />
                  {terms.sections.termination.title}
                </h2>
                <p>
                  {terms.sections.termination.content}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  <div className="bg-gray-50 dark:bg-gray-700/20 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">{terms.sections.termination.byYou.title}</h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      {terms.sections.termination.byYou.content}
                    </p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-700/20 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">{terms.sections.termination.byUs.title}</h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      {terms.sections.termination.byUs.content}
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center">
                  <Scale className="w-6 h-6 text-windo-orange mr-2" />
                  {terms.sections.governing.title}
                </h2>
                <p>
                  {terms.sections.governing.content}
                </p>
                <div className="mt-4">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{terms.sections.governing.dispute.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {terms.sections.governing.dispute.content}
                  </p>
                  <ol className="list-decimal list-inside space-y-2 text-gray-600 dark:text-gray-400 mt-2">
                    {terms.sections.governing.dispute.steps.map((step, index) => (
                      <li key={index}>{step}</li>
                    ))}
                  </ol>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center">
                  <FileText className="w-6 h-6 text-windo-orange mr-2" />
                  {terms.sections.changes.title}
                </h2>
                <p>
                  {terms.sections.changes.content}
                </p>
                <p className="mt-4">
                  {terms.sections.changes.notification}
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center">
                  <Mail className="w-6 h-6 text-windo-orange mr-2" />
                  {terms.sections.contact.title}
                </h2>
                <p>
                  {terms.sections.contact.content}
                </p>
                <p className="mt-4 text-center">
                  <a href={`mailto:${terms.sections.contact.email}`} className="font-semibold text-windo-orange hover:underline">
                    {terms.sections.contact.email}
                  </a>
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Terms; 