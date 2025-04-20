import React from 'react';
import { Link } from 'react-router-dom';
import { Home, MapPin, Building2, Camera, ArrowRight } from 'lucide-react';

const RealEstate = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/real-estate-bg.jpg')] bg-cover bg-center opacity-10 dark:opacity-5" />
        <div className="container mx-auto px-6 py-24 relative">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-orange-gradient text-transparent bg-clip-text">
                Showcase Your Properties in Style
              </span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
              Create an impressive online presence that highlights your properties and attracts potential buyers.
            </p>
            <Link
              to="/questionnaire"
              className="inline-flex items-center space-x-2 bg-windo-orange text-white px-8 py-4 rounded-lg hover:bg-windo-deeporange transition-colors text-lg font-medium"
            >
              <span>Launch Your Real Estate Website</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-200 dark:border-gray-700">
            <div className="p-3 bg-windo-light/10 dark:bg-windo-light/20 rounded-full w-fit mb-4">
              <Home className="w-6 h-6 text-windo-orange" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              Property Listings
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Showcase your properties with high-quality images and detailed descriptions.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-200 dark:border-gray-700">
            <div className="p-3 bg-windo-light/10 dark:bg-windo-light/20 rounded-full w-fit mb-4">
              <MapPin className="w-6 h-6 text-windo-orange" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              Location Maps
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Interactive maps to help clients find properties in their desired areas.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-200 dark:border-gray-700">
            <div className="p-3 bg-windo-light/10 dark:bg-windo-light/20 rounded-full w-fit mb-4">
              <Building2 className="w-6 h-6 text-windo-orange" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              Virtual Tours
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Offer immersive 3D tours of your properties for remote viewing.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-200 dark:border-gray-700">
            <div className="p-3 bg-windo-light/10 dark:bg-windo-light/20 rounded-full w-fit mb-4">
              <Camera className="w-6 h-6 text-windo-orange" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              Photo Galleries
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Beautiful galleries to showcase property photos and videos.
            </p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-windo-light/5 dark:bg-windo-light/10 py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Transform Your Real Estate Business?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            Join successful real estate agencies who have enhanced their property marketing with our professional websites.
          </p>
          <Link
            to="/questionnaire"
            className="inline-flex items-center space-x-2 bg-windo-orange text-white px-8 py-4 rounded-lg hover:bg-windo-deeporange transition-colors text-lg font-medium"
          >
            <span>Start Your Project Now</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RealEstate; 