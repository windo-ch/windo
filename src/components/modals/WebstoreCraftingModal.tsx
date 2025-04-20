import React from 'react';
import { ShoppingCart, Check } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';

interface WebstoreCraftingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const WebstoreCraftingModal: React.FC<WebstoreCraftingModalProps> = ({ isOpen, onClose }) => {
  const features = [
    'E-commerce platform setup and configuration',
    'Product catalog management',
    'Secure payment gateway integration',
    'Inventory management system',
    'Order processing automation',
    'Customer account management'
  ];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px] bg-white dark:bg-gray-800">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-gray-900 dark:text-white">
            Webstore Crafting
          </DialogTitle>
        </DialogHeader>

        <div className="mt-6 space-y-6">
          <div className="flex items-start space-x-4">
            <div className="p-3 bg-windo-light/10 dark:bg-windo-light/20 rounded-lg">
              <ShoppingCart className="w-6 h-6 text-windo-orange" />
            </div>
            <div>
              <p className="text-gray-600 dark:text-gray-400">
                Setting up your online shop to sell products and services with ease.
                We create secure, user-friendly e-commerce solutions that drive sales.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              What's Included
            </h3>
            <ul className="space-y-3">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-windo-orange mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600 dark:text-gray-400">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="pt-6">
            <a
              href="/questionnaire"
              className="inline-flex items-center justify-center w-full px-6 py-3 rounded-md bg-windo-orange text-white hover:bg-windo-orange/90 transition-colors"
            >
              Start Your Project
            </a>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default WebstoreCraftingModal; 