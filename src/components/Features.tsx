import React from 'react';
import { Building, PiggyBank, Settings, BellRing } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const FEATURES_DATA = [
  {
    icon: Building,
    title: "Invest in cities",
    description: "Discover new markets and expand your real estate portfolio across borders."
  },
  {
    icon: PiggyBank,
    title: "Save with plans",
    description: "Optimize your marketing budget with our cost-effective subscription plans."
  },
  {
    icon: Settings,
    title: "Custom features",
    description: "Tailor your videos and landing pages with highly customizable branding tools."
  },
  {
    icon: BellRing,
    title: "New notifications",
    description: "Stay updated with real-time alerts on your campaign performance."
  }
];

export function Features() {
  return (
    <section className="w-full py-20 bg-background">
      <div className="container px-4 md:px-8 max-w-screen-xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {FEATURES_DATA.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <Card key={idx} className="border-none shadow-none bg-transparent">
                <CardHeader className="items-center pb-2">
                  <div className="p-4 bg-primary/10 rounded-full mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl text-center">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-sm">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
