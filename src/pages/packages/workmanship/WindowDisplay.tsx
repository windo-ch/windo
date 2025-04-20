import React from 'react';
import { ArrowLeft, Check, Clock, Calendar, MessageSquare, Smartphone, Search, Rocket } from 'lucide-react';
import { Link } from 'react-router-dom';

const WindowDisplay = () => {
  const features = [
    {
      title: 'Single Page Design',
      description: 'A beautiful, focused landing page that tells your story and converts visitors into customers.',
      icon: Smartphone,
    },
    {
      title: 'Contact Form',
      description: 'Easy-to-use contact form that helps potential customers reach out to you directly.',
      icon: MessageSquare,
    },
    {
      title: 'Mobile-Friendly',
      description: 'Looks perfect on any device, from smartphones to desktop computers.',
      icon: Smartphone,
    },
    {
      title: 'Basic SEO Setup',
      description: 'Optimized to help your business get found in search engines.',
      icon: Search,
    },
  ];

  const process = [
    {
      title: 'Initial Consultation',
      description: 'We discuss your business needs and goals to create the perfect website.',
      icon: MessageSquare,
    },
    {
      title: 'Design & Development',
      description: 'Your website is crafted with precision and attention to detail.',
      icon: Clock,
    },
    {
      title: 'Review & Launch',
      description: 'We review the website together and launch it when you\'re satisfied.',
      icon: Calendar,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-6 py-16">
        <Link
          to="/workmanship"
          className="inline-flex items-center text-windo-orange hover:text-windo-deeporange mb-8"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Packages
        </Link>

        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-orange-gradient text-transparent bg-clip-text">Window Display</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-6">
              A simple, elegant one-page website perfect for showcasing your business.
            </p>
            <div className="flex items-center justify-center space-x-4">
              <span className="text-3xl font-bold text-gray-900 dark:text-white">
                CHF 960
              </span>
              <span className="text-gray-500 dark:text-gray-400">
                exkl. MWSt.
              </span>
              <span className="bg-windo-orange text-white text-sm font-medium px-3 py-1 rounded-full">
                -20%
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700"
              >
                <div className="flex items-start">
                  <div className="p-3 bg-windo-light/10 dark:bg-windo-light/20 rounded-lg mr-4">
                    <feature.icon className="w-6 h-6 text-windo-orange" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-sm border border-gray-200 dark:border-gray-700 mb-16">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
              What's Included
            </h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Check className="w-5 h-5 text-windo-orange mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-1">
                    Custom Design
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    A unique design that reflects your brand and business identity.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <Check className="w-5 h-5 text-windo-orange mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-1">
                    Responsive Layout
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Looks perfect on all devices, from mobile phones to desktop computers.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <Check className="w-5 h-5 text-windo-orange mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-1">
                    Basic SEO Setup
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Optimized to help your business get found in search engines.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <Check className="w-5 h-5 text-windo-orange mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-1">
                    1 Month of Support
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    We're here to help with any questions or adjustments after launch.
                  </p>
                </div>
              </li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-sm border border-gray-200 dark:border-gray-700 mb-16">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
              Our Process
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {process.map((step) => (
                <div
                  key={step.title}
                  className="flex flex-col items-center text-center"
                >
                  <div className="p-4 bg-windo-light/10 dark:bg-windo-light/20 rounded-full mb-4">
                    <step.icon className="w-6 h-6 text-windo-orange" />
                  </div>
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center">
            <Link
              to="/questionnaire"
              className="inline-flex items-center space-x-2 bg-windo-orange text-white px-6 py-3 rounded-lg hover:bg-windo-deeporange transition-colors"
            >
              <span>Launch Project</span>
              <Rocket className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WindowDisplay; 