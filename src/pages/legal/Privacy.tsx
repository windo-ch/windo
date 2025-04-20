import React from 'react';
import SEO from '@/components/SEO';
import { useLanguage } from '@/contexts/LanguageContext';
import { Shield, Lock, Eye, Database, Bell, FileText, Mail } from 'lucide-react';
import { privacyTranslations } from '@/translations/legal/privacy';
import AnimatedGradientText from '@/components/ui/AnimatedGradientText';

const Privacy = () => {
  const { language, t } = useLanguage();
  const privacy = privacyTranslations[language];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": privacy.title,
    "description": "Comprehensive privacy policy for Windo - Swiss precision website builder for businesses.",
    "dateModified": "2025-04-20"
  };

  return (
    <>
      <SEO
        title={privacy.title}
        description="Our comprehensive privacy policy outlines how we collect, use, and protect your personal information with Swiss-level security and transparency."
        canonicalUrl="/privacy"
        structuredData={structuredData}
      />
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex justify-center items-center mb-4">
              <Shield className="w-10 h-10 text-windo-orange" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold bg-orange-gradient bg-clip-text text-transparent mb-4">
              <AnimatedGradientText>{privacy.intro.headline}</AnimatedGradientText>
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              {privacy.lastUpdated}
            </p>
            <div className="mt-4 max-w-2xl mx-auto">
              <p className="text-gray-600 dark:text-gray-400">
                {privacy.intro.description}
              </p>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 md:p-10 prose dark:prose-invert max-w-none">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="bg-gray-50 dark:bg-gray-700/30 p-6 rounded-xl">
                <Lock className="w-8 h-8 text-windo-orange mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{privacy.cards.security.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {privacy.cards.security.description}
                </p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-700/30 p-6 rounded-xl">
                <Eye className="w-8 h-8 text-windo-orange mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{privacy.cards.transparency.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {privacy.cards.transparency.description}
                </p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-700/30 p-6 rounded-xl">
                <Database className="w-8 h-8 text-windo-orange mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{privacy.cards.minimization.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {privacy.cards.minimization.description}
                </p>
              </div>
            </div>

            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center">
                  <FileText className="w-6 h-6 text-windo-orange mr-2" />
                  {privacy.sections.introduction.title}
                </h2>
                <p>
                  {privacy.sections.introduction.paragraph1}
                </p>
                <p>
                  {privacy.sections.introduction.paragraph2}
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center">
                  <Database className="w-6 h-6 text-windo-orange mr-2" />
                  {privacy.sections.informationCollect.title}
                </h2>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-4 mb-2">{privacy.sections.informationCollect.personalInfo.title}</h3>
                  <p>
                    {privacy.sections.informationCollect.personalInfo.description}
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-400">
                    {privacy.sections.informationCollect.personalInfo.items.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>

                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-4 mb-2">{privacy.sections.informationCollect.automaticInfo.title}</h3>
                  <p>
                    {privacy.sections.informationCollect.automaticInfo.description}
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-400">
                    {privacy.sections.informationCollect.automaticInfo.items.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center">
                  <Eye className="w-6 h-6 text-windo-orange mr-2" />
                  {privacy.sections.howWeUse.title}
                </h2>
                <p>
                  {privacy.sections.howWeUse.description}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  <div className="bg-gray-50 dark:bg-gray-700/20 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">{privacy.sections.howWeUse.purposes.service.title}</h4>
                    <ul className="list-disc list-inside space-y-1 text-sm text-gray-600 dark:text-gray-400">
                      {privacy.sections.howWeUse.purposes.service.items.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-700/20 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">{privacy.sections.howWeUse.purposes.improvement.title}</h4>
                    <ul className="list-disc list-inside space-y-1 text-sm text-gray-600 dark:text-gray-400">
                      {privacy.sections.howWeUse.purposes.improvement.items.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-700/20 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">{privacy.sections.howWeUse.purposes.communication.title}</h4>
                    <ul className="list-disc list-inside space-y-1 text-sm text-gray-600 dark:text-gray-400">
                      {privacy.sections.howWeUse.purposes.communication.items.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-700/20 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">{privacy.sections.howWeUse.purposes.security.title}</h4>
                    <ul className="list-disc list-inside space-y-1 text-sm text-gray-600 dark:text-gray-400">
                      {privacy.sections.howWeUse.purposes.security.items.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center">
                  <Lock className="w-6 h-6 text-windo-orange mr-2" />
                  {privacy.sections.legalBasis.title}
                </h2>
                <p>
                  We process your personal data on the following legal grounds:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400 mt-2">
                  {privacy.sections.legalBasis.items.map((item, index) => {
                    const parts = item.split(':');
                    return (
                      <li key={index}>
                        <span className="font-semibold text-gray-900 dark:text-white">{parts[0]}</span>
                        {parts.length > 1 ? `: ${parts.slice(1).join(':')}` : ''}
                      </li>
                    );
                  })}
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center">
                  <Database className="w-6 h-6 text-windo-orange mr-2" />
                  {privacy.sections.dataSharing.title}
                </h2>
                <p>
                  {privacy.sections.dataSharing.description}
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400 mt-2">
                  {privacy.sections.dataSharing.items.map((item, index) => (
                    <li key={index}><span className="font-semibold text-gray-900 dark:text-white">{item.split(':')[0]}</span>: {item.split(':')[1]}</li>
                  ))}
                </ul>
                <p className="mt-4 text-windo-orange font-semibold">
                  {privacy.sections.dataSharing.noSell}
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center">
                  <Bell className="w-6 h-6 text-windo-orange mr-2" />
                  {privacy.sections.yourRights.title}
                </h2>
                <p>
                  {privacy.sections.yourRights.description}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  <div className="bg-gray-50 dark:bg-gray-700/20 p-4 rounded-lg">
                    <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-400">
                      {privacy.sections.yourRights.items1.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-700/20 p-4 rounded-lg">
                    <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-400">
                      {privacy.sections.yourRights.items2.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <p className="mt-4">
                  {privacy.sections.yourRights.contact}
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center">
                  <Lock className="w-6 h-6 text-windo-orange mr-2" />
                  {privacy.sections.dataSecurity.title}
                </h2>
                <p>
                  {privacy.sections.dataSecurity.description}
                </p>
                <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-400 mt-2">
                  {privacy.sections.dataSecurity.items.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center">
                  <FileText className="w-6 h-6 text-windo-orange mr-2" />
                  {privacy.sections.changes.title}
                </h2>
                <p>
                  {privacy.sections.changes.description}
                </p>
                <p className="mt-2">
                  {privacy.sections.changes.notification}
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center">
                  <Mail className="w-6 h-6 text-windo-orange mr-2" />
                  {privacy.sections.contact.title}
                </h2>
                <p>
                  {privacy.sections.contact.description}
                </p>
                <p className="mt-4 text-center">
                  <a href={`mailto:${privacy.sections.contact.email}`} className="font-semibold text-windo-orange hover:underline">
                    {privacy.sections.contact.email}
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

export default Privacy; 