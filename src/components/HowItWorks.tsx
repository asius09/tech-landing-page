import React from 'react';
import Image from 'next/image';
import { PlayCircle, UploadCloud, Wand2, Download, Share2 } from 'lucide-react';
import { SectionHeader } from './SectionHeader';
import { FadeIn } from './FadeIn';

const STEPS = [
  {
    id: 1,
    title: "Choose Recipe",
    description: "Pick from a library of professionally crafted videos templates.",
    bgClass: "bg-surface-purple",
    mockUi: (
      <div className="grid grid-cols-2 gap-3 w-full h-full">
         {[1,2,3,4].map(i => (
           <div key={i} className="bg-white rounded-xl relative overflow-hidden flex flex-col">
             <div className="flex-1 bg-gray-200 relative">
               <Image src={`https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80`} alt="template" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover opacity-80" />
               <div className="absolute inset-0 flex items-center justify-center">
                 <PlayCircle className="w-6 h-6 text-white" />
               </div>
             </div>
             <div className="h-6 bg-white w-full flex items-center px-2">
               <div className="w-1/2 h-1.5 bg-surface-purple rounded-full" />
             </div>
           </div>
         ))}
       </div>
    ),
    delay: 0.2
  },
  {
    id: 2,
    title: "Upload Photos",
    description: "The recipe tells you which photos to upload with animations already selected.",
    bgClass: "bg-surface-yellow",
    mockUi: (
      <div className="w-full h-full border border-dashed border-primary-300 rounded-2xl bg-white flex flex-col items-center justify-center p-4 text-center">
         <UploadCloud className="w-8 h-8 text-primary-400 mb-2" />
         <span className="font-bold text-sm text-black mb-1">Upload your photo</span>
         <span className="text-[10px] text-gray-400 mb-4">Drag and drop your image here.</span>
         <div className="bg-primary-400 text-white text-xs px-4 py-2 rounded-lg font-bold w-full max-w-30">Choose File</div>
       </div>
    ),
    delay: 0.3
  },
  {
    id: 3,
    title: "AI Builds Video",
    description: "Watch AI transform your photos into a cinematic real estate video.",
    bgClass: "bg-accent-50",
    mockUi: (
      <>
        <div className="w-full bg-white rounded-xl overflow-hidden">
           <div className="bg-gray-900 w-full aspect-video relative flex items-center justify-center">
             <Image src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=400&q=80" alt="Video" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover opacity-70" />
             <PlayCircle className="w-8 h-8 text-white relative z-10" />
           </div>
           <div className="p-3 bg-white border-t border-gray-50">
             <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-accent-50 rounded-sm flex items-center justify-center"><Wand2 className="w-3 h-3 text-secondary-500" /></div>
                <div className="h-1.5 flex-1 bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full w-2/3 bg-secondary-500 rounded-full" />
                </div>
             </div>
           </div>
        </div>
        {/* Magic Star overlay */}
        <div className="absolute -top-4 -right-2 text-brand-magenta">
          <Wand2 className="w-8 h-8" />
        </div>
      </>
    ),
    delay: 0.4
  },
  {
    id: 4,
    title: "Download & Share",
    description: "Download your finished video and share it anywhere in minutes.",
    bgClass: "bg-primary-50",
    mockUi: (
      <div className="w-full h-full bg-white rounded-2xl flex flex-col items-center justify-center text-center p-4">
          <div className="w-10 h-10 rounded-full bg-primary-50 flex items-center justify-center mb-2">
            <div className="w-6 h-6 rounded-full bg-primary-400 flex items-center justify-center text-white text-xs">✓</div>
          </div>
          <span className="font-bold text-sm mb-1">Your video is ready!</span>
          <span className="text-[10px] text-gray-400 mb-4 leading-tight">Your cinematic real estate video is complete and ready to download or share.</span>
          <div className="flex w-full gap-2">
            <div className="flex-1 flex flex-col items-center justify-center bg-gray-50 rounded-lg py-2 text-primary-400 hover:bg-primary-50 cursor-pointer">
              <Download className="w-4 h-4 mb-1" />
              <span className="text-[10px] font-bold">Download</span>
            </div>
            <div className="flex-1 flex flex-col items-center justify-center bg-gray-50 rounded-lg py-2 text-primary-400 hover:bg-primary-50 cursor-pointer">
              <Share2 className="w-4 h-4 mb-1" />
              <span className="text-[10px] font-bold">Share</span>
            </div>
          </div>
       </div>
    ),
    delay: 0.5
  }
];

export function HowItWorks() {
  return (
    <section id="features" className="w-full py-24 bg-white relative">
      <div className="container px-4 md:px-8 max-w-7xl mx-auto">
        
        {/* Header */}
        <FadeIn>
          <SectionHeader 
            title="How it works"
            subtitle="Just insert your photos into our professional crafted video templates."
          />
        </FadeIn>

        {/* Toggle Switch */}
        <FadeIn delay={0.1}>
          <div className="flex justify-center mb-24">
             <div className="relative inline-flex bg-white rounded-full border border-gray-200 overflow-visible">
               <div className="bg-brand-magenta text-white px-8 py-3 rounded-full text-sm font-bold z-10 cursor-pointer">
                 Create Your Own
               </div>
               <div className="text-gray-600 px-8 py-3 rounded-full text-sm font-bold cursor-pointer hover:text-black transition-colors z-10 relative">
                 Use Our Templates
                 {/* Badge */}
                 <div className="absolute -top-3 right-6 bg-primary-400 text-white text-[10px] tracking-wide font-bold px-3 py-0.5 rounded-full">
                   Powerful
                 </div>
               </div>
             </div>
          </div>
        </FadeIn>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 text-center">
          {STEPS.map((step) => (
            <FadeIn key={step.id} delay={step.delay} direction="up" className="flex flex-col items-center">
              {/* Mock UI */}
              <div className={`w-full h-60 ${step.bgClass} rounded-4xl p-6 mb-8 relative flex flex-col items-center justify-center gap-4`}>
                 {step.mockUi}
              </div>
              {/* Number Badge */}
              <div className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center font-bold text-lg mb-6 -mt-14 z-10 relative">
                {step.id}
              </div>
              <h3 className="text-xl font-bold text-black mb-3">{step.title}</h3>
              <p className="text-sm text-gray-500">{step.description}</p>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
