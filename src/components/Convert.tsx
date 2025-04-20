import React from 'react';
import { ArrowRight, Check, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const packages = [
  {
    id: 'digital-foundations',
    title: 'Digital Foundations',
    subtitle: 'Essential Web Presence',
    price: '2,900',
    description: 'Perfect for startups and small businesses looking to establish their online presence.',
    features: [
      'Custom Design',
      '5 Pages',
      'Mobile Responsive',
      'Basic SEO Setup',
      'Contact Form',
      '1 Month Support'
    ],
    popular: false
  },
  {
    id: 'growth-essentials',
    title: 'Growth Essentials',
    subtitle: 'Enhanced Digital Solution',
    price: '4,900',
    description: 'Ideal for growing businesses needing more features and functionality.',
    features: [
      'Everything in Digital Foundations',
      'Up to 10 Pages',
      'Advanced SEO',
      'Blog Integration',
      'Analytics Setup',
      '3 Months Support',
      'Performance Optimization'
    ],
    popular: true
  },
  {
    id: 'business-accelerator',
    title: 'Business Accelerator',
    subtitle: 'Complete Digital Platform',
    price: '7,900',
    description: 'Comprehensive solution for established businesses ready to scale.',
    features: [
      'Everything in Growth Essentials',
      'Unlimited Pages',
      'Custom Features',
      'E-commerce Ready',
      'API Integration',
      '6 Months Support',
      'Priority Updates'
    ],
    popular: false
  },
  {
    id: 'enterprise-ecosystem',
    title: 'Enterprise Ecosystem',
    subtitle: 'Tailored Digital Experience',
    price: 'Custom',
    description: 'Fully customized solution for large organizations with complex needs.',
    features: [
      'Everything in Business Accelerator',
      'Custom Development',
      'Enterprise Security',
      'Dedicated Support',
      'Training & Documentation',
      'Ongoing Maintenance',
      'Custom Integrations'
    ],
    popular: false
  }
];

const Convert = () => {
  return (
    <section id="convert" className="section-padding bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-orange-gradient text-transparent bg-clip-text">Convert Your Vision</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Choose the perfect package to transform your digital presence. All packages include Swiss precision and creative excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className={`group relative bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover-shadow-effect ${
                pkg.popular ? 'border-2 border-windo-orange' : ''
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <div className="bg-windo-orange text-white text-sm font-medium px-4 py-1 rounded-full">
                    Most Popular
                  </div>
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">{pkg.title}</h3>
                <p className="text-sm text-windo-orange mb-2">{pkg.subtitle}</p>
                <div className="flex items-baseline mb-2">
                  <span className="text-3xl font-bold text-gray-900 dark:text-white">
                    {pkg.price === 'Custom' ? pkg.price : `CHF ${pkg.price}`}
                  </span>
                  {pkg.price !== 'Custom' && (
                    <span className="text-gray-500 dark:text-gray-400 ml-1">/project</span>
                  )}
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">{pkg.description}</p>
              </div>

              <ul className="space-y-3 mb-6">
                {pkg.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                    <Check className="w-4 h-4 mr-2 text-windo-orange flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              <Link
                to="#collaborate"
                className={`w-full inline-flex items-center justify-center px-4 py-2 rounded-lg transition-colors ${
                  pkg.popular
                    ? 'bg-windo-orange text-white hover:bg-windo-deeporange'
                    : 'bg-windo-light dark:bg-gray-700 text-windo-orange hover:bg-windo-softOrange dark:hover:bg-gray-600'
                }`}
              >
                Get Started
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-2 bg-windo-light dark:bg-gray-800 rounded-full px-6 py-3">
            <Star className="w-5 h-5 text-windo-orange" />
            <span className="text-gray-600 dark:text-gray-400">
              All packages include a free initial consultation and project planning session
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Convert; 