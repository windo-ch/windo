import React from 'react';
import { ArrowRight, Code, Layout, Zap, Search, Smartphone, ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';

const IconWrapper = ({ children }: { children: React.ReactNode }) => (
  <div className="w-6 h-6">{children}</div>
);

const getServiceIcon = (Icon: React.ComponentType) => <IconWrapper><Icon /></IconWrapper>;

const services = [
  {
    id: 'web-alchemy',
    title: 'Web Alchemy',
    subtitle: 'Transform Your Vision',
    description: 'Crafting bespoke websites that blend Swiss precision with creative excellence. Every pixel, every interaction, perfectly placed.',
    icon: getServiceIcon(Layout),
    features: ['Custom Design', 'Responsive Layout', 'Performance Optimized'],
  },
  {
    id: 'code-mastery',
    title: 'Code Mastery',
    subtitle: 'Clean & Efficient',
    description: 'Writing elegant, maintainable code that stands the test of time. Built with modern technologies and best practices.',
    icon: getServiceIcon(Code),
    features: ['Modern Stack', 'Clean Code', 'Scalable Architecture'],
  },
  {
    id: 'experience-engineering',
    title: 'Experience Engineering',
    subtitle: 'Seamless Journeys',
    description: 'Creating intuitive user experiences that delight and convert. Every interaction designed with purpose.',
    icon: getServiceIcon(Zap),
    features: ['UX Research', 'User Testing', 'Conversion Optimization'],
  },
  {
    id: 'digital-visibility',
    title: 'Digital Visibility',
    subtitle: 'Be Found Online',
    description: "Optimizing your digital presence to ensure you're found by the right audience at the right time.",
    icon: getServiceIcon(Search),
    features: ['SEO Strategy', 'Content Optimization', 'Analytics'],
  },
  {
    id: 'device-fluency',
    title: 'Device Fluency',
    subtitle: 'Every Screen, Perfect',
    description: 'Ensuring flawless performance across all devices and platforms. Your website, anywhere, anytime.',
    icon: getServiceIcon(Smartphone),
    features: ['Mobile First', 'Cross-Platform', 'Progressive Web Apps'],
  },
  {
    id: 'shop-solutions',
    title: 'Shop Solutions',
    subtitle: 'E-Commerce Excellence',
    description: 'Building powerful online stores that drive sales and create memorable shopping experiences.',
    icon: getServiceIcon(ShoppingCart),
    features: ['Payment Integration', 'Inventory Management', 'Checkout Optimization'],
  },
];

const Craft = () => {
  return (
    <section id="craft" className="section-padding bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-orange-gradient text-transparent bg-clip-text">Our Craft</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Swiss precision meets creative excellence in every project. We transform your vision into digital reality.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="group bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover-shadow-effect"
            >
              <div className="flex items-center space-x-4 mb-4">
                <div className="p-3 bg-windo-light dark:bg-gray-700 rounded-lg text-windo-orange">
                  {service.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{service.title}</h3>
                  <p className="text-sm text-windo-orange">{service.subtitle}</p>
                </div>
              </div>
              
              <p className="text-gray-600 dark:text-gray-400 mb-4">{service.description}</p>
              
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                    <ArrowRight className="w-4 h-4 mr-2 text-windo-orange" />
                    {feature}
                  </li>
                ))}
              </ul>

              <Link
                to={`#${service.id}`}
                className="inline-flex items-center text-windo-orange hover:text-windo-deeporange transition-colors"
              >
                Learn more
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Craft; 