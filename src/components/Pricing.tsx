
import React from 'react';
import { Check, Package, File, Layout, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const PricingCard = ({ 
  title, 
  price, 
  priceNote,
  priceBreakdown,
  annualFee, 
  example,
  features, 
  icon, 
  accentColor, 
  popularPlan = false 
}: { 
  title: string; 
  price: string; 
  priceNote?: string;
  priceBreakdown?: string;
  annualFee?: string; 
  example?: string;
  features: string[]; 
  icon: React.ReactNode; 
  accentColor: string;
  popularPlan?: boolean;
}) => {
  return (
    <Card className={`border overflow-hidden relative transition-all duration-300 dark:bg-gray-900 ${
      popularPlan ? 'shadow-xl scale-105 z-10 border-windo-orange' : 'hover:shadow-lg hover:-translate-y-1'
    }`}>
      {popularPlan && (
        <div className="absolute top-0 right-0 bg-windo-orange text-white px-4 py-1 text-xs font-medium uppercase tracking-wider">
          Beliebt
        </div>
      )}
      <div className={`h-2 ${accentColor}`}></div>
      <CardContent className="p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className={`w-12 h-12 flex items-center justify-center rounded-lg text-white ${accentColor}`}>
            {icon}
          </div>
          <h3 className="text-xl font-semibold text-windo-darkgray dark:text-white">{title}</h3>
        </div>
        
        {example && (
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-3 italic">{example}</p>
        )}
        
        <div className="mt-4 mb-4">
          <div className="text-3xl font-bold text-windo-darkgray dark:text-white">{price}</div>
          {priceNote && (
            <div className="text-gray-600 dark:text-gray-400 mt-1 text-sm">{priceNote}</div>
          )}
          {priceBreakdown && (
            <div className="text-gray-500 dark:text-gray-500 mt-2 text-xs">{priceBreakdown}</div>
          )}
          {annualFee && (
            <div className="text-gray-600 dark:text-gray-400 mt-2 text-sm font-medium">Ab Jahr 2: {annualFee}</div>
          )}
        </div>
        
        <div className="space-y-3 mb-8">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start">
              <Check className="text-windo-orange dark:text-orange-400 mr-2 mt-0.5 flex-shrink-0" size={18} />
              <span className="text-gray-600 dark:text-gray-300 text-sm">{feature}</span>
            </div>
          ))}
        </div>
        
        <Button 
          className={`w-full ${
            popularPlan 
              ? 'bg-orange-gradient hover:bg-opacity-90 text-white' 
              : 'bg-white dark:bg-gray-800 text-windo-orange border border-windo-orange hover:bg-orange-50 dark:hover:bg-orange-950/20'
          }`}
        >
          Jetzt starten
        </Button>
      </CardContent>
    </Card>
  );
};

const Pricing = () => {
  const pricingPlans = [
    {
      title: "Kleine Website",
      price: "CHF 500",
      priceNote: "pro Jahr",
      example: "z.B. topcutbarber.ch",
      features: [
        "Moderne, responsive Website",
        "Persönlicher Support & Betreuung",
        "Hosting & Domain inklusive",
        "Regelmässige Updates & Wartung",
        "SEO-Optimierung",
        "Kontaktformular",
        "Keine versteckten Kosten"
      ],
      icon: <File size={24} />,
      accentColor: "bg-yellow-400",
      popularPlan: true
    },
    {
      title: "Mittlere Website",
      price: "CHF 2,250",
      priceNote: "im ersten Jahr",
      priceBreakdown: "CHF 2,000 einmalig + CHF 500/Jahr",
      annualFee: "CHF 500/Jahr",
      example: "z.B. zahnarzt-neumann.ch",
      features: [
        "Professionelle Website mit mehreren Seiten",
        "Persönlicher Support & Betreuung",
        "Hosting & Domain inklusive",
        "Regelmässige Updates & Wartung",
        "Erweiterte SEO-Optimierung",
        "Kontaktformular & Terminbuchung",
        "Langfristige Betreuung"
      ],
      icon: <Package size={24} />,
      accentColor: "bg-orange-400",
      popularPlan: false
    },
    {
      title: "Grosse Website",
      price: "CHF 3,750",
      priceNote: "im ersten Jahr",
      priceBreakdown: "CHF 3,500 einmalig + CHF 500/Jahr",
      annualFee: "CHF 500/Jahr",
      example: "z.B. storeofvalue.ch",
      features: [
        "Umfangreiche Website mit vielen Seiten",
        "Persönlicher Support & Betreuung",
        "Hosting & Domain inklusive",
        "Regelmässige Updates & Wartung",
        "Premium SEO-Optimierung",
        "Erweiterte Funktionen",
        "Prioritätssupport"
      ],
      icon: <Globe size={24} />,
      accentColor: "bg-amber-500",
      popularPlan: false
    }
  ];

  return (
    <section id="pricing" className="bg-windo-light section-padding relative overflow-hidden">
      <div className="absolute top-20 -right-32 w-64 h-64 rounded-full bg-windo-softOrange opacity-30 -z-10"></div>
      <div className="absolute -bottom-32 -left-32 w-80 h-80 rounded-full bg-windo-yellow opacity-20 -z-10"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block bg-white dark:bg-gray-800 px-4 py-2 rounded-full text-windo-deeporange dark:text-orange-400 font-medium text-sm mb-2 animate-fade-in">
            Preise
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-windo-darkgray dark:text-white mb-4 animate-fade-in" style={{animationDelay: "0.1s"}}>
            Einfache <span className="text-transparent bg-clip-text bg-orange-gradient">Preise</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto animate-fade-in" style={{animationDelay: "0.2s"}}>
            Managed Websites für kleine Unternehmen. Kein Stress, kein Aufwand – wir kümmern uns um alles. Transparente Preise, keine versteckten Kosten.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-6">
          {pricingPlans.map((plan, index) => (
            <div key={index} className="animate-fade-in" style={{animationDelay: `${0.1 * (index + 1)}s`}}>
              <PricingCard
                title={plan.title}
                price={plan.price}
                priceNote={plan.priceNote}
                priceBreakdown={plan.priceBreakdown}
                annualFee={plan.annualFee}
                example={plan.example}
                features={plan.features}
                icon={plan.icon}
                accentColor={plan.accentColor}
                popularPlan={plan.popularPlan}
              />
            </div>
          ))}
        </div>

        <div className="mt-16 text-center p-8 bg-white dark:bg-gray-800 rounded-xl shadow-md max-w-3xl mx-auto animate-fade-in" style={{animationDelay: "0.5s"}}>
          <h3 className="text-xl font-semibold text-windo-darkgray dark:text-white mb-3">Was bedeutet "Managed Website"?</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Sie haben einen direkten Ansprechpartner (kein Call-Center), wir kümmern uns um Hosting, Updates, Sicherheit und Wartung. 
            Sie können sich auf Ihr Geschäft konzentrieren – wir kümmern uns um Ihre Website.
          </p>
          <Button className="bg-orange-gradient hover:bg-opacity-90 text-white">
            Kostenlose Beratung
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
