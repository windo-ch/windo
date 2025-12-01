import React from 'react';
import ContactForm from '../../components/Contact';
import SEO from '../../components/SEO';
import { useLanguage } from '../../contexts/LanguageContext';

const ContactPage = () => {
  const { t } = useLanguage();

  return (
    <>
      <SEO
        title={t('seo.contact.title')}
        description={t('seo.contact.description')}
        canonicalUrl="/contact"
      />
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
        <ContactForm />
      </div>
    </>
  );
};

export default ContactPage; 