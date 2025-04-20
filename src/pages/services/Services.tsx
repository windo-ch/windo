import React, { useState } from 'react';
import { 
  Layout, Code, Search, ArrowRight, Clock, 
  Building2, Shield, Target, Users
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import { Helmet } from 'react-helmet';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Check } from 'lucide-react';

const Services = () => {
  const { t } = useLanguage();
  const [modalOpen, setModalOpen] = useState<string | null>(null);

  const closeModal = () => setModalOpen(null);
  
  const services = [
    {
      id: 'website-design',
      title: t('services.website.title'),
      description: t('services.website.description'),
      icon: Layout,
      features: [
        t('services.website.feature1'),
        t('services.website.feature2'),
        t('services.website.feature3'),
        t('services.website.feature4'),
        t('services.website.feature5'),
        t('services.website.feature6'),
      ]
    },
    {
      id: 'technical-development',
      title: t('services.technical.title'),
      description: t('services.technical.description'),
      icon: Code,
      features: [
        t('services.technical.feature1'),
        t('services.technical.feature2'),
        t('services.technical.feature3'),
        t('services.technical.feature4'),
        t('services.technical.feature5'),
        t('services.technical.feature6'),
      ]
    },
    {
      id: 'digital-presence',
      title: t('services.digital.title'),
      description: t('services.digital.description'),
      icon: Search,
      features: [
        t('services.digital.feature1'),
        t('services.digital.feature2'),
        t('services.digital.feature3'),
        t('services.digital.feature4'),
        t('services.digital.feature5'),
        t('services.digital.feature6'),
      ]
    },
  ];

  // Method content - principles and values
  const principles = [
    {
      title: t('services.principles.precision.title'),
      description: t('services.principles.precision.description'),
      icon: Clock,
    },
    {
      title: t('services.principles.quality.title'),
      description: t('services.principles.quality.description'),
      icon: Target,
    },
    {
      title: t('services.principles.code.title'),
      description: t('services.principles.code.description'),
      icon: Code,
    },
    {
      title: t('services.principles.user.title'),
      description: t('services.principles.user.description'),
      icon: Users,
    },
  ];

  const values = [
    {
      title: t('services.values.mission.title'),
      description: t('services.values.mission.description'),
      icon: Target,
    },
    {
      title: t('services.values.promise.title'),
      description: t('services.values.promise.description'),
      icon: Shield,
    },
  ];

  // Service modal component
  const ServiceModal = ({ service }: { service: typeof services[0] }) => (
    <Dialog open={modalOpen === service.id} onOpenChange={closeModal}>
      <DialogContent className="sm:max-w-[600px] bg-white dark:bg-gray-800">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-gray-900 dark:text-white">
            {service.title}
          </DialogTitle>
        </DialogHeader>

        <div className="mt-6 space-y-6">
          <div className="flex items-start space-x-4">
            <div className="p-3 bg-windo-light/10 dark:bg-windo-light/20 rounded-lg">
              <service.icon className="w-6 h-6 text-windo-orange" />
            </div>
            <div>
              <p className="text-gray-600 dark:text-gray-400">
                {service.description}
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              {t('services.modal.included')}
            </h3>
            <ul className="space-y-3">
              {service.features.map((feature, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-windo-orange mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600 dark:text-gray-400">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="pt-6">
            <Link
              to="/questionnaire"
              className="inline-flex items-center justify-center w-full px-6 py-3 rounded-md bg-windo-orange text-white hover:bg-windo-orange/90 transition-colors"
            >
              {t('services.cta.button')}
            </Link>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );

  return (
    <>
      <Helmet>
        <title>{t('seo.services.title')} | Windo</title>
        <meta name="description" content={t('seo.services.description')} />
        <meta name="keywords" content="web design, website development, digital presence, Swiss precision, web method" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
        {/* Hero Section */}
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/images/services-bg.jpg')] bg-cover bg-center opacity-10 dark:opacity-5" />
          <div className="container mx-auto px-6 py-24 relative">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                <span className="bg-orange-gradient text-transparent bg-clip-text">
                  {t('services.title')}
                </span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
                {t('services.subtitle')}
              </p>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-6 py-16">
          {/* Services Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
            {services.map((service) => (
              <button
                key={service.id}
                onClick={() => setModalOpen(service.id)}
                className="group bg-white dark:bg-gray-800 rounded-xl p-8 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-200 dark:border-gray-700 text-left h-full"
              >
                <div className="flex flex-col h-full">
                  <div className="p-4 bg-windo-light/10 dark:bg-windo-light/20 rounded-lg self-start mb-6">
                    <service.icon className="w-8 h-8 text-windo-orange" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-6">
                      {service.description}
                    </p>
                  </div>
                  <div className="flex items-center text-windo-orange mt-auto">
                    <span className="text-sm font-medium">{t('services.learn_more')}</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Method Section */}
          <div className="pt-12 border-t border-gray-200 dark:border-gray-700 mb-24">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="bg-orange-gradient text-transparent bg-clip-text">
                  {t('services.method.title')}
                </span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                {t('services.method.subtitle')}
              </p>
            </div>

            {/* Who We Are Section */}
            <div className="max-w-4xl mx-auto mb-16">
              <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-sm border border-gray-200 dark:border-gray-700 mb-12">
                <div className="flex items-start mb-6">
                  <div className="p-4 bg-windo-light/10 dark:bg-windo-light/20 rounded-lg mr-6 flex-shrink-0">
                    <Building2 className="w-8 h-8 text-windo-orange" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                      {t('services.who.title')}
                    </h3>
                    <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">
                      {t('services.who.description')}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  {values.map((value) => (
                    <div key={value.title} className="flex items-start space-x-4">
                      <div className="p-3 bg-windo-light/10 dark:bg-windo-light/20 rounded-lg flex-shrink-0">
                        <value.icon className="w-6 h-6 text-windo-orange" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                          {value.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400">
                          {value.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="bg-gray-50 dark:bg-gray-700/30 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    {t('services.solution.title')}
                  </h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <li className="flex items-start space-x-2">
                      <div className="mt-1 text-windo-orange">•</div>
                      <span className="text-gray-600 dark:text-gray-400">{t('services.solution.feature1')}</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="mt-1 text-windo-orange">•</div>
                      <span className="text-gray-600 dark:text-gray-400">{t('services.solution.feature2')}</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="mt-1 text-windo-orange">•</div>
                      <span className="text-gray-600 dark:text-gray-400">{t('services.solution.feature3')}</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="mt-1 text-windo-orange">•</div>
                      <span className="text-gray-600 dark:text-gray-400">{t('services.solution.feature4')}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Watchmakers Section */}
            <div className="max-w-4xl mx-auto">
              <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-sm border border-gray-200 dark:border-gray-700">
                <div className="flex items-start mb-6">
                  <div className="p-4 bg-windo-light/10 dark:bg-windo-light/20 rounded-lg mr-6 flex-shrink-0">
                    <Clock className="w-8 h-8 text-windo-orange" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                      {t('services.watchmakers.title')}
                    </h3>
                    <p className="text-lg text-gray-600 dark:text-gray-400">
                      {t('services.watchmakers.description')}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  {principles.map((principle) => (
                    <div key={principle.title} className="flex items-start space-x-4">
                      <div className="p-3 bg-windo-light/10 dark:bg-windo-light/20 rounded-lg flex-shrink-0">
                        <principle.icon className="w-6 h-6 text-windo-orange" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                          {principle.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400">
                          {principle.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="bg-gray-50 dark:bg-gray-700/30 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    {t('services.result.title')}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {t('services.result.description')}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center">
            <div className="max-w-2xl mx-auto mb-10 px-4">
              <h2 className="text-3xl font-bold mb-4">{t('services.cta.title')}</h2>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                {t('services.cta.description')}
              </p>
            </div>
            <Link
              to="/questionnaire"
              className="inline-flex items-center space-x-2 bg-windo-orange text-white px-8 py-4 rounded-lg hover:bg-windo-deeporange transition-colors text-lg font-medium"
            >
              <span>{t('services.cta.button')}</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Render the appropriate modal based on which service was clicked */}
      {services.map(service => (
        <ServiceModal key={service.id} service={service} />
      ))}
    </>
  );
};

export default Services; 