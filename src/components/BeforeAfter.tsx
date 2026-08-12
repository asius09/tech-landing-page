import React from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, Wand2, Sparkles } from 'lucide-react';
import { SectionHeader } from './SectionHeader';
import { FadeIn } from './FadeIn';

export function BeforeAfter() {
  return (
    <section id="examples" className="relative w-full py-24 bg-white overflow-hidden">
      {/* Background Dots Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] bg-size-[20px_20px] opacity-60 pointer-events-none" />
      
      <div className="container px-4 md:px-8 max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <FadeIn>
          <SectionHeader title="Before & after" />
        </FadeIn>

        {/* Gallery */}
        <FadeIn delay={0.2} direction="up">
          <div className="relative w-full flex items-center justify-center gap-4 md:gap-5 h-75 md:h-112.5">
            
            {/* Left partially visible image */}
            <div className="hidden lg:block relative w-45 h-full rounded-3xl overflow-hidden opacity-40 shrink-0">
               <Image src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80" alt="Gallery left edge" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
            </div>

            {/* Left Image (Nav) */}
            <div className="relative w-70 md:w-[320px] h-full rounded-3xl overflow-hidden shrink-0 group cursor-pointer shadow-md">
              <Image src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80" alt="Before" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
              <div className="absolute inset-0 bg-black/5 group-hover:bg-black/10 transition-colors" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg transition-transform">
                <ChevronLeft className="w-5 h-5 text-black pr-0.5" />
              </div>
            </div>

            {/* Center Magic Image Container */}
            <div className="relative w-125 md:w-175 h-full shrink-0 z-10">
              <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl">
                <Image src="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=1200&q=80" alt="Magic Before After" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
                <div className="absolute top-0 left-0 bottom-0 w-1/2 bg-black/40" />
                <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-px bg-white shadow-[0_0_20px_5px_rgba(192,38,211,0.8)] z-20">
                   {/* Glowing lightning nodes */}
                   <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-2 h-2 bg-white rounded-full shadow-[0_0_10px_5px_rgba(217,70,239,0.8)]" />
                   <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-3 h-3 bg-white rounded-full shadow-[0_0_15px_5px_rgba(217,70,239,0.9)]" />
                 <div className="absolute top-3/4 left-1/2 -translate-x-1/2 w-2 h-2 bg-white rounded-full shadow-[0_0_10px_5px_rgba(217,70,239,0.8)]" />
                 
                 {/* Constellation lines effect */}
                 <svg className="absolute top-0 bottom-0 -left-24 w-48 h-full pointer-events-none stroke-purple-400/60" preserveAspectRatio="none">
                   <path d="M 96,20 L 40,35 L 96,50 L 140,65 L 96,80" fill="none" strokeWidth="1.5" />
                   <path d="M 96,40 L 130,45 L 96,60 L 60,75" fill="none" strokeWidth="1.5" />
                   {/* Star dots */}
                   <circle cx="40" cy="35" r="2" fill="#d946ef" />
                   <circle cx="140" cy="65" r="2" fill="#d946ef" />
                   <circle cx="130" cy="45" r="2" fill="#d946ef" />
                   <circle cx="60" cy="75" r="2" fill="#d946ef" />
                 </svg>
              </div>
            </div>
            
            {/* Magic Badge (Placed outside overflow-hidden) */}
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-black text-white px-5 py-2.5 rounded-full flex items-center space-x-2 shadow-xl border border-white/10 whitespace-nowrap z-30">
              <Sparkles className="w-4 h-4 text-accent-500 fill-accent-500" />
              <span className="text-[11px] font-bold tracking-[0.2em] uppercase">AI Magic In Action</span>
              <Sparkles className="w-4 h-4 text-accent-500 fill-accent-500" />
            </div>
          </div>

          {/* Right Image (Nav) */}
          <div className="relative w-70 md:w-[320px] h-full rounded-3xl overflow-hidden shrink-0 group cursor-pointer shadow-md">
            <Image src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80" alt="After" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
            <div className="absolute inset-0 bg-black/5 group-hover:bg-black/10 transition-colors" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg transition-transform">
              <ChevronRight className="w-5 h-5 text-black pl-0.5" />
            </div>
          </div>

          {/* Right partially visible image */}
          <div className="hidden lg:block relative w-45 h-full rounded-3xl overflow-hidden opacity-40 shrink-0">
             <Image src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80" alt="Gallery right edge" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
          </div>

        </div>
        </FadeIn>
      </div>
    </section>
  );
}
