import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Send, Check, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from "sonner";
import { handleFormSubmission } from '@/lib/formService';
import { updateSEO } from '@/lib/seo';

// Structured data for SEO
const contactStructuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "windo.ch",
  "url": "https://windo.ch",
  "logo": "https://windo.ch/logo.png",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+41-44-123-4567",
    "contactType": "customer service",
    "email": "hello@windo.ch",
    "areaServed": "CH",
    "availableLanguage": ["English", "German", "French"]
  },
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Bahnhofstrasse 42",
    "addressLocality": "Zug",
    "postalCode": "6300",
    "addressCountry": "CH"
  },
  "sameAs": [
    "https://twitter.com/windo_ch",
    "https://www.facebook.com/windoch",
    "https://www.linkedin.com/company/windo-ch",
    "https://www.instagram.com/windo.ch"
  ]
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    phone: '',
    company: '',
    budget: '',
    timeframe: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    // Set SEO metadata for the contact page when component mounts
    updateSEO({
      title: 'Contact Us',
      description: 'Get in touch with windo.ch. We\'d love to hear about your project and how we can help bring your vision to life.',
      canonical: 'https://windo.app/contact',
    });
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Use the form submission service
      const result = await handleFormSubmission(formData, {
        endpoint: '/api/contact-form',
        logToConsole: true,
        logToLocalStorage: true
      });
      
      if (result.success) {
        toast.success("Message sent successfully! We'll get back to you soon.");
        // Reset form
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
          phone: '',
          company: '',
          budget: '',
          timeframe: ''
        });
        setShowDetails(false);
      } else {
        throw new Error(result.message || 'Form submission failed');
      }
    } catch (error) {
      toast.error("Something went wrong. Please try again or contact us directly.");
      console.error('Contact form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="bg-windo-light dark:bg-gray-900 py-24 relative">
      {/* Add structured data for SEO */}
      <script 
        type="application/ld+json" 
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactStructuredData) }}
      />
      
      <div className="absolute -top-20 -left-40 w-80 h-80 rounded-full bg-windo-softOrange dark:bg-orange-950/20 opacity-30 -z-10"></div>
      <div className="absolute bottom-40 right-0 w-64 h-64 rounded-full bg-windo-light dark:bg-orange-950/20 opacity-60 -z-10"></div>
      
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block bg-windo-light dark:bg-orange-950/30 px-4 py-2 rounded-full text-windo-deeporange dark:text-orange-400 font-medium text-sm mb-2 animate-fade-in">Contact Us</div>
          <h2 className="text-3xl md:text-4xl font-bold text-windo-darkgray dark:text-white mb-4 animate-fade-in" style={{animationDelay: "0.1s"}}>
            Get in <span className="text-transparent bg-clip-text bg-orange-gradient">Touch</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto animate-fade-in" style={{animationDelay: "0.2s"}}>
            Have a project in mind or want to learn more about our services? We'd love to hear from you.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 animate-fade-in" style={{animationDelay: "0.3s"}}>
            <h3 className="text-2xl font-semibold mb-6 text-windo-darkgray dark:text-white">Send us a message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Your Name *
                  </label>
                  <Input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                    aria-required="true"
                    className="w-full dark:bg-gray-700 dark:border-gray-600"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Email Address *
                  </label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                    aria-required="true"
                    className="w-full dark:bg-gray-700 dark:border-gray-600"
                  />
                </div>
              </div>
              
              {showDetails && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Phone Number
                    </label>
                    <Input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+41 44 123 45 67"
                      className="w-full dark:bg-gray-700 dark:border-gray-600"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Company
                    </label>
                    <Input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Your Company"
                      className="w-full dark:bg-gray-700 dark:border-gray-600"
                    />
                  </div>
                </div>
              )}
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Subject *
                </label>
                <Input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Project inquiry"
                  required
                  aria-required="true"
                  className="w-full dark:bg-gray-700 dark:border-gray-600"
                />
              </div>
              
              {showDetails && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="budget" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Budget
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-gray-700 dark:border-gray-600"
                    >
                      <option value="">Select budget range</option>
                      <option value="less-than-5000">Less than $5,000</option>
                      <option value="5000-10000">$5,000 - $10,000</option>
                      <option value="10000-25000">$10,000 - $25,000</option>
                      <option value="25000-plus">$25,000+</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="timeframe" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Timeframe
                    </label>
                    <select
                      id="timeframe"
                      name="timeframe"
                      value={formData.timeframe}
                      onChange={handleChange}
                      className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-gray-700 dark:border-gray-600"
                    >
                      <option value="">Select timeframe</option>
                      <option value="asap">As soon as possible</option>
                      <option value="1-month">Within 1 month</option>
                      <option value="1-3-months">1-3 months</option>
                      <option value="3-plus-months">3+ months</option>
                    </select>
                  </div>
                </div>
              )}
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Message *
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project..."
                  required
                  aria-required="true"
                  rows={5}
                  className="w-full dark:bg-gray-700 dark:border-gray-600"
                />
              </div>
              
              {!showDetails && (
                <Button 
                  type="button" 
                  variant="outline"
                  className="w-full border-windo-orange text-windo-orange hover:bg-windo-orange/10 dark:border-orange-400 dark:text-orange-400"
                  onClick={() => setShowDetails(true)}
                >
                  Add More Details <ArrowRight className="ml-2" size={16} />
                </Button>
              )}
              
              <Button 
                type="submit" 
                className="w-full bg-orange-gradient hover:bg-opacity-90"
                disabled={isSubmitting}
                aria-busy={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'} 
                <Send className="ml-2" size={18} />
              </Button>
              
              <p className="text-xs text-gray-500 dark:text-gray-400 text-center">
                By submitting this form, you agree to our <a href="#" className="underline">Privacy Policy</a> and <a href="#" className="underline">Terms of Service</a>.
              </p>
            </form>
          </div>
          
          <div className="space-y-6 animate-fade-in" style={{animationDelay: "0.4s"}}>
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 flex items-start">
              <div className="bg-windo-light dark:bg-orange-950/30 p-3 rounded-full mr-4">
                <Mail className="text-windo-orange dark:text-orange-400" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-windo-darkgray dark:text-white">Email Us</h4>
                <a href="mailto:hello@windo.ch" className="text-gray-600 dark:text-gray-300 mt-1 hover:text-windo-orange dark:hover:text-orange-400 transition-colors">hello@windo.ch</a>
                <a href="mailto:support@windo.ch" className="block text-gray-600 dark:text-gray-300 hover:text-windo-orange dark:hover:text-orange-400 transition-colors">support@windo.ch</a>
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 flex items-start">
              <div className="bg-windo-light dark:bg-orange-950/30 p-3 rounded-full mr-4">
                <Phone className="text-windo-orange dark:text-orange-400" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-windo-darkgray dark:text-white">Call Us</h4>
                <a href="tel:+41441234567" className="text-gray-600 dark:text-gray-300 mt-1 hover:text-windo-orange dark:hover:text-orange-400 transition-colors">+41 44 123 45 67</a>
                <p className="text-gray-600 dark:text-gray-400">Monday-Friday, 9am-6pm</p>
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 flex items-start">
              <div className="bg-windo-light dark:bg-orange-950/30 p-3 rounded-full mr-4">
                <MapPin className="text-windo-orange dark:text-orange-400" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-windo-darkgray dark:text-white">Visit Us</h4>
                <address className="text-gray-600 dark:text-gray-300 mt-1 not-italic">
                  Bahnhofstrasse 42<br />
                  6300 Zug, Switzerland
                </address>
              </div>
            </div>
            
            <div className="bg-orange-gradient text-white rounded-xl shadow-lg p-6">
              <h4 className="text-lg font-semibold">Why Choose Us</h4>
              <ul className="mt-3 space-y-2">
                <li className="flex items-center">
                  <Check className="mr-2 flex-shrink-0" size={16} />
                  <span>Professional and experienced team</span>
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 flex-shrink-0" size={16} />
                  <span>Custom solutions tailored to your needs</span>
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 flex-shrink-0" size={16} />
                  <span>Transparent pricing and process</span>
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 flex-shrink-0" size={16} />
                  <span>Ongoing support after launch</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
