import React from 'react';
import { PlayCircle, Video, Wand2 } from 'lucide-react';

export function VideoStudio() {
  const templates = [
    { title: "Property Tours", image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80" },
    { title: "Neighborhood Guides", image: "https://images.unsplash.com/photo-1449844908441-8829872d2607?auto=format&fit=crop&w=800&q=80" },
    { title: "Agent Intros", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80" },
    { title: "Market Updates", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80" },
  ];

  return (
    <section className="w-full py-20 bg-background">
      <div className="container px-4 md:px-8 max-w-screen-xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center rounded-full border border-secondary/30 bg-secondary/10 px-3 py-1 text-sm text-secondary font-medium mb-6">
            <Wand2 className="w-4 h-4 mr-2" />
            AI Marketing Studio
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Your Ideas with AI Marketing Studio</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Choose from hundreds of templates or let our AI generate a custom video tailored to your specific listing and target audience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {templates.map((template, idx) => (
            <div key={idx} className="group relative rounded-xl overflow-hidden aspect-[3/4] cursor-pointer">
              <img src={template.image} alt={template.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6 w-full">
                <h3 className="text-white font-semibold text-lg flex items-center justify-between">
                  {template.title}
                  <PlayCircle className="w-6 h-6 text-white/80 group-hover:text-white transition-colors" />
                </h3>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-accent/40 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between border border-primary/10">
          <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready-to-Use Video Templates</h3>
            <p className="text-muted-foreground mb-6">
              Skip the editing timeline. Simply input your property details and photos, and Reelmatic creates a polished, ready-to-share video in seconds.
            </p>
            <button className="px-6 py-3 bg-foreground text-background rounded-full font-medium hover:bg-foreground/90 transition-colors flex items-center">
              <Video className="w-4 h-4 mr-2" />
              Explore Templates
            </button>
          </div>
          <div className="md:w-1/2 relative w-full">
            <div className="aspect-video bg-background rounded-xl border shadow-xl overflow-hidden">
               <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1000&q=80" alt="Dashboard" className="w-full h-full object-cover opacity-90" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
