import React from 'react';

const SolidStar = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
  </svg>
);

const MARQUEE_ITEMS = [
  { text: "Property Videos", bg: "bg-accent-400" },
  { text: "Instagram Reels", bg: "bg-secondary-400" },
  { text: "Facebook Posts", bg: "bg-accent-400" },
  { text: "YouTube Shorts", bg: "bg-primary-400" },
  { text: "Neighborhood Video", bg: "bg-primary-400" },
  { text: "Property Videos", bg: "bg-accent-400" },
  { text: "Instagram Reels", bg: "bg-secondary-400" },
];

export function Marquee() {
  return (
    <section className="w-full py-20 bg-white overflow-hidden flex flex-col items-center justify-center">
      {/* The rotating container */}
      <div className="w-[120%] ml-[-10%] transform -rotate-3 bg-white flex flex-col gap-1">
        
        {/* Top row (Pink hues) */}
        <div className="flex w-full whitespace-nowrap overflow-hidden py-4">
          <div className="flex animate-[marquee_20s_linear_infinite] shrink-0">
             {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, idx) => (
               item.bg.includes('pink') || item.bg.includes('fuchsia') ? (
                 <div key={idx} className="flex items-center px-6">
                   <span className="text-3xl md:text-4xl font-extrabold text-brand-fuchsia tracking-tight">{item.text}</span>
                   <SolidStar className="w-6 h-6 text-brand-fuchsia ml-6" />
                 </div>
               ) : null
             ))}
          </div>
        </div>

        {/* Bottom row (Orange hues) */}
        <div className="flex w-full whitespace-nowrap overflow-hidden py-4 bg-brand-orange">
          <div className="flex animate-[marquee_25s_linear_infinite_reverse] shrink-0">
             {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, idx) => (
               <div key={idx} className="flex items-center px-6">
                 <span className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">{item.text}</span>
                 <SolidStar className="w-6 h-6 text-white ml-6" />
               </div>
             ))}
          </div>
        </div>

      </div>
      
      {/* Add keyframes to globals.css if not present, but inline works with arbitrary values or tailwind config */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
      `}} />
    </section>
  );
}
