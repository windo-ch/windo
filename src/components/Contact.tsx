
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success("Message sent successfully! We'll get back to you soon.");
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    }, 1500);
  };

  return (
    <section id="contact" className="bg-windo-lightblue section-padding">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-windo-darkgray mb-4">Get in Touch</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Have a project in mind or want to learn more about our services? We'd love to hear from you.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-semibold mb-6 text-windo-darkgray">Send us a message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Your Name
                </label>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  required
                  className="w-full"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  required
                  className="w-full"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Subject
                </label>
                <Input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Project inquiry"
                  required
                  className="w-full"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project..."
                  required
                  rows={5}
                  className="w-full"
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-windo-blue hover:bg-opacity-90"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'} 
                <Send className="ml-2" size={18} />
              </Button>
            </form>
          </div>
          
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-lg p-6 flex items-start">
              <div className="bg-windo-lightblue p-3 rounded-full mr-4">
                <Mail className="text-windo-blue" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-windo-darkgray">Email Us</h4>
                <p className="text-gray-600 mt-1">hello@windo.ch</p>
                <p className="text-gray-600">support@windo.ch</p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-6 flex items-start">
              <div className="bg-windo-lightblue p-3 rounded-full mr-4">
                <Phone className="text-windo-blue" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-windo-darkgray">Call Us</h4>
                <p className="text-gray-600 mt-1">+41 44 123 45 67</p>
                <p className="text-gray-600">Monday-Friday, 9am-6pm</p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-6 flex items-start">
              <div className="bg-windo-lightblue p-3 rounded-full mr-4">
                <MapPin className="text-windo-blue" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-windo-darkgray">Visit Us</h4>
                <p className="text-gray-600 mt-1">Bahnhofstrasse 42</p>
                <p className="text-gray-600">8001 Zürich, Switzerland</p>
              </div>
            </div>
            
            <div className="bg-windo-blue text-white rounded-lg shadow-lg p-6">
              <h4 className="text-lg font-semibold">Why Choose Us</h4>
              <ul className="mt-3 space-y-2">
                <li className="flex items-center">
                  <Check className="mr-2" size={16} />
                  <span>Professional and experienced team</span>
                </li>
                <li className="flex items-center">
                  <Check className="mr-2" size={16} />
                  <span>Custom solutions tailored to your needs</span>
                </li>
                <li className="flex items-center">
                  <Check className="mr-2" size={16} />
                  <span>Transparent pricing and process</span>
                </li>
                <li className="flex items-center">
                  <Check className="mr-2" size={16} />
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
