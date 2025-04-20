import React from 'react';
import { ArrowRight, Users, Target, Clock, Heart, Shield, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const aboutSections = [
  {
    id: 'our-digital-canvas',
    title: 'Our Digital Canvas',
    subtitle: 'Where Vision Meets Reality',
    description: 'We are a team of passionate creators, dedicated to transforming your digital dreams into reality. Our Swiss-based studio combines technical excellence with creative innovation.',
    icon: <Sparkles className="w-6 h-6" />,
    features: ['Creative Excellence', 'Technical Mastery', 'Innovation Driven'],
  },
  {
    id: 'swiss-precision-online',
    title: 'Swiss Precision Online',
    subtitle: 'Excellence in Every Detail',
    description: 'Drawing inspiration from Swiss craftsmanship, we bring the same level of precision and attention to detail to every digital project we undertake.',
    icon: <Target className="w-6 h-6" />,
    features: ['Meticulous Planning', 'Quality Assurance', 'Continuous Improvement'],
  },
  {
    id: 'our-services',
    title: 'Our Services',
  },
];

const values = [
  {
    title: 'Client-Centric',
    description: 'Your success is our priority. We listen, understand, and deliver solutions that exceed expectations.',
    icon: <Heart className="w-6 h-6" />,
  },
  {
    title: 'Reliability',
    description: 'We stand by our work with unwavering commitment to quality and timely delivery.',
    icon: <Shield className="w-6 h-6" />,
  },
  {
    title: 'Innovation',
    description: 'Constantly pushing boundaries to deliver cutting-edge solutions that set you apart.',
    icon: <Sparkles className="w-6 h-6" />,
  },
];

const Connect = () => {
  return (
    <section id="connect" className="section-padding bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-orange-gradient text-transparent bg-clip-text">Connect With Us</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Discover the team behind your digital success and learn about our Swiss-inspired approach to web excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {aboutSections.map((section) => (
            <div
              key={section.id}
              className="group bg-white dark:bg-gray-700 rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover-shadow-effect"
            >
              <div className="flex items-center space-x-4 mb-4">
                <div className="p-3 bg-windo-light dark:bg-gray-600 rounded-lg text-windo-orange">
                  {section.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{section.title}</h3>
                  <p className="text-sm text-windo-orange">{section.subtitle}</p>
                </div>
              </div>
              
              <p className="text-gray-600 dark:text-gray-400 mb-4">{section.description}</p>
              
              <ul className="space-y-2 mb-6">
                {section.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                    <ArrowRight className="w-4 h-4 mr-2 text-windo-orange" />
                    {feature}
                  </li>
                ))}
              </ul>

              <Link
                to={`#${section.id}`}
                className="inline-flex items-center text-windo-orange hover:text-windo-deeporange transition-colors"
              >
                Learn more
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Our Core Values</h3>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            These principles guide everything we do, ensuring we deliver exceptional results for our clients.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-700 rounded-xl p-6 text-center"
            >
              <div className="w-12 h-12 mx-auto mb-4 bg-windo-light dark:bg-gray-600 rounded-lg flex items-center justify-center text-windo-orange">
                {value.icon}
              </div>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{value.title}</h4>
              <p className="text-gray-600 dark:text-gray-400">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Connect; 