import React from 'react';
import { Image as ImageIcon, PlayCircle, Timer, DollarSign } from 'lucide-react';

const BENEFITS_DATA = [
  {
    icon: ImageIcon,
    iconBg: "bg-secondary-50",
    iconColor: "text-secondary-500",
    title: "Made from images",
    description: "Turn Photos Into Property Videos"
  },
  {
    icon: PlayCircle,
    iconBg: "bg-primary-50",
    iconColor: "text-primary-500",
    title: "No editing skills required",
    description: "No video editing, no complicated tools"
  },
  {
    icon: Timer,
    iconBg: "bg-accent-50",
    iconColor: "text-accent-500",
    title: "Create in 5 minutes",
    description: "Go From Photos to Video in 5 Minutes"
  },
  {
    icon: DollarSign,
    iconBg: "bg-surface-yellow",
    iconColor: "text-yellow-600",
    title: "Just $1.50 per image",
    description: "More Listings. Less Cost. Just $1.50"
  }
];

export function Benefits() {
  return (
    <section className="w-full py-16 bg-white border-b border-gray-100">
      <div className="container px-4 md:px-8 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {BENEFITS_DATA.map((benefit, idx) => {
            const Icon = benefit.icon;
            return (
              <div key={idx} className="flex flex-col items-start p-4">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${benefit.iconBg}`}>
                  <Icon className={`w-7 h-7 ${benefit.iconColor}`} />
                </div>
                <h3 className="text-lg font-bold text-black mb-2">{benefit.title}</h3>
                <p className="text-sm text-gray-500 font-medium leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
