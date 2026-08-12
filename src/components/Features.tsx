import React from 'react';
import { Building, PiggyBank, Settings, BellRing } from 'lucide-react';

export function Features() {
  const features = [
    {
      icon: <Building className="w-6 h-6 text-primary" />,
      title: "Invest in cities",
      description: "Discover new markets and expand your real estate portfolio across borders."
    },
    {
      icon: <PiggyBank className="w-6 h-6 text-primary" />,
      title: "Save with plans",
      description: "Optimize your marketing budget with our cost-effective subscription plans."
    },
    {
      icon: <Settings className="w-6 h-6 text-primary" />,
      title: "Custom features",
      description: "Tailor your videos and landing pages with highly customizable branding tools."
    },
    {
      icon: <BellRing className="w-6 h-6 text-primary" />,
      title: "New notifications",
      description: "Stay updated with real-time alerts on your campaign performance."
    }
  ];

  return (
    <section className="w-full py-20 bg-background">
      <div className="container px-4 md:px-8 max-w-screen-xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
            <div key={idx} className="flex flex-col items-center text-center p-6 space-y-4">
              <div className="p-4 bg-primary/10 rounded-full">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold">{feature.title}</h3>
              <p className="text-muted-foreground text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
