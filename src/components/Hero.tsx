import React from 'react';
import Image from 'next/image';
import { Play } from 'lucide-react';

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function Hero() {
  return (
    <section className="relative w-full py-20 md:py-32 overflow-hidden flex flex-col items-center justify-center text-center px-4">
      {/* Background gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/20 blur-[100px] rounded-full pointer-events-none" />
      
      <div className="z-10 flex flex-col items-center max-w-4xl mx-auto space-y-6">
        <Badge variant="glass" className="px-3 py-1">
          <span className="flex h-2 w-2 rounded-full bg-primary mr-2"></span>
          AI Video Creation
        </Badge>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight">
          Transforming real <br className="hidden sm:block" />
          estate marketing
        </h1>
        
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
          Reelmatic helps you create high-quality, AI-powered videos in minutes. Turn your property listings into engaging visual stories.
        </p>
        
        <div className="flex items-center space-x-4 pt-4">
          <Button size="lg" variant="secondary" className="font-semibold px-8 rounded-full">
            Start Free Trial
          </Button>
        </div>
      </div>

      <div className="relative w-full max-w-5xl mx-auto mt-16 z-10">
        <div className="aspect-video bg-muted rounded-2xl overflow-hidden border border-border shadow-2xl relative flex items-center justify-center group cursor-pointer">
          <Image 
            src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
            alt="Real estate preview" 
            fill
            className="object-cover opacity-80 group-hover:opacity-100 transition-opacity"
          />
          <div className="absolute inset-0 bg-foreground/20 group-hover:bg-foreground/10 transition-colors" />
          <div className="absolute bg-background/90 p-4 rounded-full shadow-lg transform group-hover:scale-110 transition-transform">
            <Play className="w-8 h-8 text-primary ml-1" />
          </div>
        </div>
      </div>
    </section>
  );
}
