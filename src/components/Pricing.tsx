import React from 'react';
import { Wallet, Calendar, PlayCircle, Timer, CircleDollarSign, ChevronDown, Zap, ChevronRight, Image as ImageLucide, Sparkles, ArrowDown } from 'lucide-react';
import { Button } from "@/components/ui/button";

import { SectionHeader } from './SectionHeader';
import { FadeIn } from './FadeIn';

const PRICING_PLANS = [
  {
    id: 'payg',
    label: 'ONE-TIME CREDITS',
    title: 'Pay as you go',
    price: '$25',
    period: '/per image',
    credits: '1,000 credits',
    perImageCost: 'Per Image $1.50',
    videos: 'Videos 8',
    iconBg: 'bg-primary-100',
    iconColor: 'text-primary-400',
    labelColor: 'text-primary-400',
    priceColor: 'text-primary-400',
    buttonColor: 'bg-primary-400 hover:bg-primary-500',
    buttonShadow: 'shadow-orange-200',
    cardBorder: 'border-2 border-card-border',
    cardBg: 'bg-card-light',
    infoBg: 'bg-primary-100',
    infoBorder: 'border-primary-200',
    Icon: Wallet,
    isPopular: false,
    delay: 0.2
  },
  {
    id: 'monthly',
    label: 'MONTHLY CREDITS',
    title: 'Monthly',
    price: '$199',
    period: '/per month',
    credits: '1,000 credits',
    perImageCost: 'Per Image $1.50',
    videos: 'Videos 8',
    iconBg: 'bg-secondary-50 border border-secondary-100',
    iconColor: 'text-brand-purple',
    labelColor: 'text-brand-purple',
    priceColor: 'text-brand-purple',
    buttonColor: 'bg-brand-purple hover:bg-brand-purple-hover',
    buttonShadow: 'shadow-fuchsia-200',
    cardBorder: 'border-[3px] border-brand-purple',
    cardBg: 'bg-white',
    infoBg: 'bg-surface-purple',
    infoBorder: 'border-purple-100',
    Icon: Calendar,
    isPopular: true,
    delay: 0.4
  }
];

const FEATURES = [
  {
    id: 'made-from-images',
    text: <>Made from<br />images</>,
    iconNode: (
      <div className="relative mb-3 flex items-center justify-center">
        <ImageLucide className="w-9 h-9 text-black stroke-2" />
        <Sparkles className="absolute -top-1 -right-2 w-4 h-4 text-brand-purple fill-brand-purple" />
      </div>
    )
  },
  {
    id: 'no-editing',
    text: <>No editing skills<br />required</>,
    iconNode: (
      <div className="w-11 h-11 border-[2.5px] border-black rounded-[0.9rem] flex items-center justify-center mb-3 shadow-sm">
        <PlayCircle className="w-5 h-5 text-black stroke-[2.5] ml-0.5" />
      </div>
    )
  },
  {
    id: 'create-fast',
    text: <>Create in 5<br />minutes</>,
    iconNode: (
      <div className="relative mb-4 flex items-center justify-center mt-1">
        <Timer className="w-9 h-9 text-black stroke-2" />
        <div className="absolute top-1 -left-4 flex flex-col space-y-1">
          <div className="w-3.5 h-0.75 bg-brand-purple rounded-full" />
          <div className="w-2.5 h-0.75 bg-brand-purple rounded-full ml-1" />
        </div>
      </div>
    )
  },
  {
    id: 'low-cost',
    text: <>Just $1.50 per<br />image</>,
    iconNode: (
      <div className="flex flex-col items-center mb-3 relative">
        <ArrowDown className="w-5 h-5 text-brand-purple stroke-3 absolute -top-5" />
        <CircleDollarSign className="w-9 h-9 text-black stroke-2" />
      </div>
    )
  }
];

export function Pricing() {
  return (
    <section id="pricing" className="w-full py-24 bg-white relative">
      <div className="container px-4 md:px-8 max-w-5xl mx-auto">
        
        {/* Header */}
        <FadeIn>
          <SectionHeader 
            title="Credit Plans"
            subtitle="Choose the plan that works best for you and your team."
          />
        </FadeIn>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl mx-auto mb-20">
          {PRICING_PLANS.map((plan) => (
            <FadeIn key={plan.id} delay={plan.delay} direction="up" className="w-full">
              <div className={`w-full h-full rounded-[2.5rem] ${plan.cardBg} ${plan.cardBorder} p-8 md:p-10 flex flex-col relative shadow-sm`}>
                
                {plan.isPopular && (
                  <div 
                    className="absolute top-[-1.1rem] right-8 bg-brand-purple text-white font-bold text-[11px] uppercase tracking-widest pt-2 pb-5 px-5 flex flex-col items-center text-center leading-tight shadow-md z-10" 
                    style={{clipPath: "polygon(0 0, 100% 0, 100% 100%, 50% 85%, 0 100%)"}}
                  >
                    BEST<br />VALUE
                  </div>
                )}

                <div className="flex items-center space-x-4 mb-8">
                  <div className={`w-12 h-12 ${plan.iconBg} rounded-xl flex items-center justify-center`}>
                    <plan.Icon className={`w-6 h-6 ${plan.iconColor} stroke-2`} />
                  </div>
                  <div className="flex flex-col items-start text-left">
                    <p className={`${plan.labelColor} font-bold text-[10px] tracking-widest uppercase mb-1`}>{plan.label}</p>
                    <h3 className="text-black font-bold text-2xl tracking-tight">{plan.title}</h3>
                  </div>
                </div>
                
                <div className="flex items-baseline mb-6">
                  <span className={`text-5xl font-bold ${plan.priceColor}`}>{plan.price}</span>
                  <span className="text-gray-800 font-bold text-[13px] ml-2">{plan.period}</span>
                </div>

                <div className={`w-full bg-white border ${plan.isPopular ? 'border-brand-purple' : 'border-gray-200'} rounded-xl px-4 py-3.5 flex items-center justify-between mb-6 shadow-sm cursor-pointer hover:border-gray-300 transition-colors`}>
                  <div className="flex items-center text-gray-700 font-bold text-[13px]">
                    <Zap className="w-4 h-4 mr-2" />
                    {plan.credits}
                  </div>
                  <ChevronDown className="w-4 h-4 text-gray-500" />
                </div>

                <div className={`w-full ${plan.infoBg} rounded-xl p-5 flex mb-8`}>
                  <div className={`flex-1 flex flex-col items-center justify-center border-r ${plan.infoBorder}`}>
                    <ImageLucide className="w-6 h-6 text-black mb-2 stroke-[1.5]" />
                    <span className="text-xs font-bold text-black">{plan.perImageCost}</span>
                  </div>
                  <div className="flex-1 flex flex-col items-center justify-center">
                    <PlayCircle className="w-6 h-6 text-black mb-2 stroke-[1.5]" />
                    <span className="text-xs font-bold text-black">{plan.videos}</span>
                  </div>
                </div>

                <div className="mt-auto pt-4">
                  <Button className={`w-full rounded-full ${plan.buttonColor} text-white font-bold h-14 text-base shadow-lg ${plan.buttonShadow}`}>
                    Get Started For Free <ChevronRight className="w-5 h-5 ml-1" />
                  </Button>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Feature Bottom Row */}
        <div className="w-full max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 px-4">
          {FEATURES.map((feature) => (
            <div key={feature.id} className="flex flex-col items-center text-center">
              {feature.iconNode}
              <span className="font-bold text-[14px] text-black leading-tight">
                {feature.text}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
