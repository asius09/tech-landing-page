import React from 'react';
import Image from 'next/image';
import { Card, CardContent } from "@/components/ui/card";
import { Quote, Star } from 'lucide-react';
import { SectionHeader } from './SectionHeader';
import { FadeIn } from './FadeIn';

const TESTIMONIALS_DATA = [
  {
    name: "Robert B",
    company: "BLUESTONE PROPERTIES",
    content: "This platform has become an essential part of my marketing. The AI creates beautiful, smooth videos that help my listings stand out and attract more potential buyers.",
    avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&w=150&q=80"
  },
  {
    name: "Ashley R",
    company: "SUMMIT REALTY GROUP",
    content: "I was amazed by how quickly I could turn a single property image into a professional-looking video. It has completely changed the way I present my listings online and saves me hours every week.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&w=150&q=80"
  },
  {
    name: "Sara J",
    company: "PRIMENEST REAL ESTATE",
    content: "I have no video editing experience, but this tool made the entire process effortless. The results look polished, and I've noticed much better engagement on my property posts.",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&w=150&q=80"
  },
  {
    name: "Michael T",
    company: "ELEVATE HOMES",
    content: "Creating neighborhood guides used to take hours of editing. Now I just drop in photos and let the AI do the heavy lifting.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&w=150&q=80"
  }
];

export function Testimonials() {
  return (
    <section className="w-full pt-32 pb-24 bg-white relative">
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-pastel-pink rounded-t-[4rem] sm:rounded-t-[6rem]" />
      
      <div className="container px-4 md:px-8 max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <FadeIn>
          <SectionHeader title="Customers reviews" />
        </FadeIn>
        
        {/* Scrolling Container with Edge Fades */}
        <FadeIn delay={0.2}>
          <div className="relative w-full overflow-hidden">
            {/* Left Fade */}
            <div className="absolute top-0 bottom-0 left-0 w-16 md:w-32 bg-linear-to-r from-pastel-pink to-transparent z-20 pointer-events-none" />
            {/* Right Fade */}
            <div className="absolute top-0 bottom-0 right-0 w-16 md:w-32 bg-linear-to-l from-pastel-pink to-transparent z-20 pointer-events-none" />
            
            <div className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory hide-scrollbar">
              {TESTIMONIALS_DATA.map((review, idx) => (
                <Card key={idx} className="w-[320px] md:w-87.5 shrink-0 flex flex-col items-center text-center bg-white border-none shadow-sm rounded-3xl snap-center pt-8 pb-10 px-6 md:px-8">
                  
                  <CardContent className="flex flex-col items-center p-0 w-full">
                     
                     {/* Avatar and Quote Icon Container */}
                     <div className="relative mb-4">
                       <div className="relative w-18 h-18 rounded-full overflow-hidden bg-gray-100 shadow-sm">
                          <Image src={review.avatar} alt={review.name} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
                       </div>
                       
                       {/* Pink Quote Icon Badge placed absolute relative to the avatar container */}
                       <div className="absolute -top-1 -right-3 bg-white p-0.75 rounded-full shadow-sm z-10">
                         <div className="w-6 h-6 bg-accent-100 rounded-full flex items-center justify-center">
                           <Quote className="w-3 h-3 text-secondary-500 fill-secondary-500" />
                         </div>
                       </div>
                     </div>
    
                     <h4 className="font-bold text-black text-[1.1rem] tracking-tight mb-1">{review.name}</h4>
                     <p className="text-[9px] font-bold text-gray-500 uppercase tracking-widest mb-3">{review.company}</p>
                     
                     <div className="flex items-center space-x-1 mb-6">
                       {[1,2,3,4,5].map(star => (
                         <Star key={star} className="w-4 h-4 text-primary-400 fill-primary-400" />
                       ))}
                     </div>
  
                     <p className="text-gray-700 font-medium text-[13px] leading-relaxed">
                       {review.content}
                     </p>
                  </CardContent>
    
                </Card>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
      
      {/* Hide scrollbar styles inline */}
      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}} />
    </section>
  );
}
