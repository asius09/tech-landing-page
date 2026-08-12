import React from 'react';
import Image from 'next/image';
import { SectionHeader } from './SectionHeader';
import { FadeIn } from './FadeIn';

export function VideoStudio() {
  return (
    <section className="w-full py-24 bg-white relative">
      <div className="container px-4 md:px-8 max-w-5xl mx-auto flex flex-col items-center">
        
        {/* Header */}
        <FadeIn>
          <SectionHeader 
            title={<>Ready-to-Use <br />Video Templates</>}
            subtitle="Choose from hundreds of premium, professionally designed templates to create your next video in minutes."
          />
        </FadeIn>

        {/* Aspect Ratio Toggles */}
        <FadeIn delay={0.1}>
          <div className="inline-flex bg-gray-50 rounded-full p-1 mb-8">
            <div className="px-6 py-2 rounded-full bg-white shadow-sm text-sm font-bold border border-gray-100 cursor-pointer">
              Horizontal
            </div>
            <div className="px-6 py-2 rounded-full text-sm font-bold text-gray-500 cursor-pointer hover:text-black transition-colors">
              Vertical
            </div>
            <div className="px-6 py-2 rounded-full text-sm font-bold text-gray-500 cursor-pointer hover:text-black transition-colors">
              Square
            </div>
          </div>
        </FadeIn>

        {/* Video Template Frame */}
        <FadeIn delay={0.2} direction="up" className="w-full">
          <div className="w-full rounded-[3rem] p-1.5 md:p-2 shadow-2xl relative overflow-hidden bg-linear-to-tr from-secondary-200 via-white to-primary-100">
           <div className="w-full aspect-16/11 md:aspect-video rounded-[2.5rem] overflow-hidden relative">
             {/* The Image from the screenshot (woman looking at laptop editing video) */}
             <Image src="https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" alt="Video editing template" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
             
             {/* Play Icon and Text Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <svg className="w-20 h-20 text-white drop-shadow-xl mb-2" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8 5v14l11-7z" />
                </svg>
                <span className="text-white font-bold text-lg md:text-xl drop-shadow-md">See how easy it is</span>
             </div>
           </div>
          </div>
        </FadeIn>
        
        <FadeIn delay={0.3}>
          <div className="mt-8">
             <button className="flex items-center text-sm font-bold hover:text-primary-500 transition-colors">
               Explore all templates
             </button>
          </div>
        </FadeIn>

      </div>
    </section>
  );
}
