import React from 'react';
import { Mail, Phone, Rocket, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import { Helmet } from 'react-helmet';

const Contact = () => {
  const { t } = useLanguage();

  const contactOptions = [
    {
      title: 'Wave Hello',
      description: 'Get in touch with us to discuss your project ideas and requirements.',
      icon: Mail,
      link: 'mailto:hello@windo.ch',
      isExternal: true,
    },
    {
      title: 'Launch Your Project',
      description: 'Start your journey with us and bring your vision to life.',
      icon: Rocket,
      link: '/questionnaire',
    },
    {
      title: 'Whisper Your Vision',
      description: 'Call us and tell us your deepest desires.',
      icon: Phone,
      link: 'tel:+41791752020',
      isExternal: true,
    },
  ];

  return (
    <>
      <Helmet>
        <title>{t('seo.contact.title')} | Windo</title>
        <meta name="description" content={t('seo.contact.description')} />
        <meta name="keywords" content="contact windo, web design contact, website development contact, digital solutions contact" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
        {/* Hero Section */}
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/images/contact-bg.jpg')] bg-cover bg-center opacity-10 dark:opacity-5" />
          <div className="container mx-auto px-6 py-24 relative">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                <span className="bg-orange-gradient text-transparent bg-clip-text">
                  {t('section.welcome.title')}
                </span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
                {t('section.welcome.description')}
              </p>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="container mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactOptions.map((option) => (
              option.isExternal ? (
                <a
                  key={option.title}
                  href={option.link}
                  className="group bg-white dark:bg-gray-800 rounded-xl p-8 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-200 dark:border-gray-700"
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="p-4 bg-windo-light/10 dark:bg-windo-light/20 rounded-full mb-6">
                      <option.icon className="w-8 h-8 text-windo-orange" />
                    </div>
                    <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                      {option.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-6">
                      {option.description}
                    </p>
                    <div className="flex items-center text-windo-orange">
                      {option.link.startsWith('mailto:') ? (
                        <>
                          <span className="text-sm font-medium">Email us</span>
                          <Mail className="w-4 h-4 ml-2 group-hover:scale-110 transition-transform" />
                        </>
                      ) : (
                        <>
                          <span className="text-sm font-medium">Call us</span>
                          <Phone className="w-4 h-4 ml-2 group-hover:scale-110 transition-transform" />
                        </>
                      )}
                    </div>
                  </div>
                </a>
              ) : (
                <Link
                  key={option.title}
                  to={option.link}
                  className="group bg-white dark:bg-gray-800 rounded-xl p-8 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-200 dark:border-gray-700"
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="p-4 bg-windo-light/10 dark:bg-windo-light/20 rounded-full mb-6">
                      <option.icon className="w-8 h-8 text-windo-orange" />
                    </div>
                    <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                      {option.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-6">
                      {option.description}
                    </p>
                    <div className="flex items-center text-windo-orange">
                      <span className="text-sm font-medium">Get started</span>
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              )
            ))}
          </div>

          <div className="mt-16 text-center">
            <div className="inline-flex items-center space-x-4">
              <a
                href="mailto:hello@windo.ch"
                className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-windo-orange dark:hover:text-windo-orange transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span>hello@windo.ch</span>
              </a>
              <span className="text-gray-300 dark:text-gray-600">|</span>
              <a
                href="tel:+41791752020"
                className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-windo-orange dark:hover:text-windo-orange transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span>+41 79 175 20 20</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact; 