
import React, { useState } from 'react';
import { Check, Package, File, Layout, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';

const PricingCard = ({ 
  title, 
  price, 
  annualPrice,
  annualFee, 
  features, 
  icon, 
  accentColor, 
  popularPlan = false,
  isAnnual = false,
  savings = ""
}: { 
  title: string; 
  price: string; 
  annualPrice?: string;
  annualFee?: string; 
  features: string[]; 
  icon: React.ReactNode; 
  accentColor: string;
  popularPlan?: boolean;
  isAnnual?: boolean;
  savings?: string;
}) => {
  const displayPrice = isAnnual && annualPrice ? annualPrice : price;
  
  return (
    <Card className={`border overflow-hidden relative transition-all duration-300 ${
      popularPlan ? 'shadow-xl scale-105 z-10' : 'hover:shadow-lg hover:-translate-y-1'
    }`}>
      {popularPlan && (
        <div className="absolute top-0 right-0 bg-windo-orange text-white px-4 py-1 text-xs font-medium uppercase tracking-wider">
          Popular
        </div>
      )}
      {savings && isAnnual && (
        <div className="absolute top-0 left-0 bg-green-500 text-white px-3 py-1 text-xs font-medium uppercase tracking-wider">
          Save {savings}
        </div>
      )}
      <div className={`h-2 ${accentColor}`}></div>
      <CardContent className="p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className={`w-12 h-12 flex items-center justify-center rounded-lg text-white ${accentColor}`}>
            {icon}
          </div>
          <h3 className="text-xl font-semibold text-windo-darkgray">{title}</h3>
        </div>
        
        <div className="mt-4 mb-6">
          <div className="text-3xl font-bold text-windo-darkgray">{displayPrice}</div>
          {isAnnual ? (
            <div className="text-gray-600 mt-1">Billed annually</div>
          ) : (
            <div className="text-gray-600 mt-1">One-time payment</div>
          )}
          
          {isAnnual && annualFee && (
            <div className="text-gray-600 mt-1">+ {annualFee} annual fee</div>
          )}
        </div>
        
        <div className="space-y-3 mb-8">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start">
              <Check className="text-windo-orange mr-2 mt-0.5 flex-shrink-0" size={18} />
              <span className="text-gray-600">{feature}</span>
            </div>
          ))}
        </div>
        
        <Button 
          className={`w-full ${
            popularPlan 
              ? 'bg-orange-gradient hover:bg-opacity-90 text-white' 
              : 'bg-white text-windo-orange border border-windo-orange hover:bg-orange-50'
          }`}
        >
          Choose Plan
        </Button>
      </CardContent>
    </Card>
  );
};

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(false);
  
  const pricingPlans = [
    {
      title: "One Pager",
      price: "CHF 690",
      annualPrice: "CHF 690",
      features: [
        "Single beautifully designed page",
        "Mobile responsive design",
        "Contact form integration",
        "Basic SEO optimization",
        "4 content updates per year"
      ],
      icon: <Layout size={24} />,
      accentColor: "bg-yellow-400",
      popularPlan: false,
      savings: ""
    },
    {
      title: "Small Website",
      price: "CHF 960",
      annualPrice: "CHF 960",
      annualFee: "CHF 200",
      features: [
        "Up to 3 content pages",
        "Mobile responsive design",
        "Contact form integration",
        "Basic SEO optimization",
        "4 content updates per year",
        "Custom domain setup"
      ],
      icon: <File size={24} />,
      accentColor: "bg-orange-400",
      popularPlan: true,
      savings: "15%"
    },
    {
      title: "Medium Website",
      price: "CHF 1,490",
      annualPrice: "CHF 1,490",
      annualFee: "CHF 300",
      features: [
        "Up to 10 content pages",
        "Mobile responsive design",
        "Advanced contact features",
        "Enhanced SEO optimization",
        "4 content updates per year",
        "Custom domain setup"
      ],
      icon: <Package size={24} />,
      accentColor: "bg-amber-500",
      popularPlan: false,
      savings: "18%"
    },
    {
      title: "Big Website",
      price: "CHF 2,490",
      annualPrice: "CHF 2,490",
      annualFee: "CHF 400",
      features: [
        "Up to 20 content pages",
        "Mobile responsive design",
        "Advanced contact features",
        "Enhanced SEO optimization",
        "4 content updates per year",
        "Custom domain setup",
        "Premium support"
      ],
      icon: <Globe size={24} />,
      accentColor: "bg-red-400",
      popularPlan: false,
      savings: "20%"
    }
  ];

  return (
    <section id="pricing" className="bg-windo-light section-padding relative overflow-hidden">
      <div className="absolute top-20 -right-32 w-64 h-64 rounded-full bg-windo-softOrange opacity-30 -z-10"></div>
      <div className="absolute -bottom-32 -left-32 w-80 h-80 rounded-full bg-windo-yellow opacity-20 -z-10"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block bg-white px-4 py-2 rounded-full text-windo-deeporange font-medium text-sm mb-2">Our Packages</div>
          <h2 className="text-3xl md:text-4xl font-bold text-windo-darkgray mb-4">
            Choose Your <span className="text-transparent bg-clip-text bg-orange-gradient">Perfect Plan</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Transparent pricing with no hidden fees. All plans include high-quality design, responsive layouts, and ongoing support.
          </p>
          
          <div className="flex items-center justify-center space-x-4 mb-8">
            <span className={`font-medium ${!isAnnual ? 'text-windo-darkgray' : 'text-gray-500'}`}>One-time payment</span>
            <div className="flex items-center">
              <Switch
                checked={isAnnual}
                onCheckedChange={setIsAnnual}
                className="data-[state=checked]:bg-orange-gradient"
              />
            </div>
            <span className={`font-medium ${isAnnual ? 'text-windo-darkgray' : 'text-gray-500'}`}>Annual billing</span>
            <span className="bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded-full ml-2 animate-pulse">
              Save up to 20%
            </span>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4">
          {pricingPlans.map((plan, index) => (
            <div key={index} className="animate-fade-in" style={{animationDelay: `${0.1 * (index + 1)}s`}}>
              <PricingCard
                title={plan.title}
                price={plan.price}
                annualPrice={plan.annualPrice}
                annualFee={plan.annualFee}
                features={plan.features}
                icon={plan.icon}
                accentColor={plan.accentColor}
                popularPlan={plan.popularPlan}
                isAnnual={isAnnual}
                savings={plan.savings}
              />
            </div>
          ))}
        </div>

        <div className="mt-16 text-center p-8 bg-white rounded-xl shadow-md max-w-3xl mx-auto animate-fade-in" style={{animationDelay: "0.5s"}}>
          <h3 className="text-xl font-semibold text-windo-darkgray mb-3">Need Additional Updates?</h3>
          <p className="text-gray-600 mb-4">
            After using your included 4 updates per year, additional content updates are available for CHF 100 per update. 
            Custom maintenance packages are also available for clients with frequent update needs.
          </p>
          <Button className="bg-windo-amber text-white hover:bg-opacity-90">
            Contact Us for Custom Options
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
