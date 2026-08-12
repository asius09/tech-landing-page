import React from 'react';
import { Check } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const PRICING_PLANS = [
  {
    name: "Starter",
    price: "$29",
    period: "/month",
    description: "Perfect for independent agents just getting started with video marketing.",
    features: [
      "10 AI Video Generations/mo",
      "Standard Templates",
      "720p Export Quality",
      "Email Support"
    ],
    highlighted: false,
    buttonText: "Start Free Trial"
  },
  {
    name: "Professional",
    price: "$99",
    period: "/month",
    description: "Ideal for growing agencies looking to scale their content creation.",
    features: [
      "Unlimited AI Video Generations",
      "Premium Custom Templates",
      "4K Ultra HD Export Quality",
      "Priority 24/7 Support",
      "Custom Branding & Watermarks"
    ],
    highlighted: true,
    buttonText: "Get Professional"
  }
];

export function Pricing() {
  return (
    <section className="w-full py-20 bg-background relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-primary/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] bg-secondary/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="container px-4 md:px-8 max-w-screen-xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Choose Plans</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Simple, transparent pricing that grows with your real estate business. No hidden fees.
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center md:items-stretch gap-8 max-w-5xl mx-auto">
          {PRICING_PLANS.map((plan, idx) => (
            <Card 
              key={idx} 
              className={`flex flex-col w-full max-w-md transition-transform hover:-translate-y-2 ${
                plan.highlighted 
                  ? 'bg-foreground text-background shadow-2xl scale-105 md:scale-110 z-10 border-2 border-primary' 
                  : 'bg-accent/40 border border-border shadow-md'
              }`}
            >
              <CardHeader className="pb-8">
                <CardTitle className={`text-xl mb-2 ${plan.highlighted ? 'text-primary-foreground' : ''}`}>{plan.name}</CardTitle>
                <CardDescription className={`mb-6 ${plan.highlighted ? 'text-background/80' : ''}`}>
                  {plan.description}
                </CardDescription>
                <div className="flex items-baseline">
                  <span className="text-5xl font-extrabold">{plan.price}</span>
                  <span className={`ml-2 font-medium ${plan.highlighted ? 'text-background/80' : 'text-muted-foreground'}`}>{plan.period}</span>
                </div>
              </CardHeader>

              <CardContent className="flex-1 pb-8">
                <ul className="space-y-4">
                  {plan.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start">
                      <Check className={`w-5 h-5 mr-3 flex-shrink-0 ${plan.highlighted ? 'text-primary' : 'text-primary'}`} />
                      <span className={plan.highlighted ? 'text-background/90' : 'text-foreground/80'}>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>

              <CardFooter>
                <Button 
                  size="lg"
                  className={`w-full rounded-xl font-bold ${
                    plan.highlighted 
                      ? 'bg-primary text-primary-foreground hover:bg-primary/90' 
                      : 'bg-background text-foreground border border-border hover:bg-accent'
                  }`}
                >
                  {plan.buttonText}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
