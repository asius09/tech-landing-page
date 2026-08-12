import React from 'react';
import Image from 'next/image';
import { ChevronRight, Maximize, Play } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { FadeIn } from './FadeIn';

export function Hero() {
  return (
    <section className="relative w-full pt-48 pb-20 overflow-hidden flex flex-col items-center justify-center text-center px-4">
      {/* Background Dots Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#d1d5db_1px,transparent_1px)] bg-size-[24px_24px] opacity-30 -z-30 pointer-events-none" />

      {/* Top Background Gradient Blobs */}
      <div className="absolute top-[-5%] right-[0%] w-150 h-100 bg-secondary-300/40 blur-[100px] rounded-full pointer-events-none z-0" />
      <div className="absolute top-[-5%] left-[0%] w-150 h-100 bg-primary-200/40 blur-[100px] rounded-full pointer-events-none z-0" />

      {/* Hero Content */}
      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
        <FadeIn delay={0.1}>
          <h1 className="text-5xl md:text-[4rem] font-bold tracking-tight text-black leading-[1.05] mb-6">
            Turn listing into <br className="hidden md:block" />
            scroll-stopping real estate videos
          </h1>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto font-medium leading-relaxed">
            Create Instagram Reels, TikToks, MLS videos, YouTube tours, Facebook videos, and branded videos in minutes without editing a single video.
          </p>
        </FadeIn>

        <FadeIn delay={0.3}>
          <p className="text-sm font-bold text-gray-800 mb-4">
            Over 5,000 Video Created
          </p>
        </FadeIn>

        {/* CTAs */}
        <FadeIn delay={0.4}>
          <div className="flex flex-col items-center mb-16 md:mb-24 relative">
            <Button className="rounded-full bg-primary hover:bg-primary-500 text-white font-bold h-14 px-8 text-base shadow-lg shadow-orange-200 flex items-center mb-4 relative z-10">
              Get 1,500 Free Credits <ChevronRight className="w-5 h-5 ml-1" />
            </Button>
            <div className="relative flex items-center justify-center w-full mt-2">
              <p className="text-sm font-bold text-black">
                Start for Free - No credit card required
              </p>
              {/* Hand drawn arrow */}
              <div className="absolute -right-8 -top-8 w-12 h-14 pointer-events-none text-brand-pink">
                <svg viewBox="0 0 100 100" fill="none" className="w-full h-full overflow-visible">
                  <path d="M 90,10 C 60,-10 90,60 100,40 C 110,20 60,30 40,60 C 25,80 15,90 0,95" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                  <path d="M 15,85 L 0,95 L 15,100" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>

      {/* Video Preview Container */}
      <FadeIn delay={0.6} direction="up" className="relative w-full max-w-5xl mx-auto z-10 px-4 md:px-12">
        {/* Offset Purple Background Block */}
        <div className="absolute top-8 left-0 w-full h-[95%] bg-purple-200 rounded-[3rem] -z-10 transform -rotate-1 origin-bottom-left" />
        <div className="absolute top-12 left-4 w-full h-[95%] bg-purple-300 rounded-[3rem] -z-20 transform -rotate-2 origin-bottom-left" />

        <div className="relative aspect-video md:aspect-21/10 bg-white rounded-[2.5rem] overflow-hidden shadow-2xl flex items-center justify-center border-4 border-white">
          <div className="relative w-full h-full rounded-4xl overflow-hidden bg-gray-900">
            <Image
              src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
              alt="Living room interior"
              fill sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover opacity-90"
            />

            {/* Tag Overlay - Top Left */}
            <div className="absolute top-6 left-6 flex items-center space-x-2">
              <div className="bg-black/30 border-primary-400 border backdrop-blur-sm p-1 rounded-md">
                <Maximize className="w-4 h-4 text-primary-400" />
              </div>
              <span className="text-white font-bold text-sm tracking-wide">Push-in Animation</span>
            </div>

            {/* Play Button Overlay - Bottom Center */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white px-6 py-3 rounded-full shadow-xl flex items-center space-x-2 cursor-pointer transition-all hover:bg-gray-50">
              <div className="bg-purple-600 rounded-full w-6 h-6 flex items-center justify-center">
                <Play className="w-3 h-3 text-white fill-white ml-0.5" />
              </div>
              <span className="text-black font-bold text-sm">Watch Demo</span>
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
