import React from 'react';

export function Testimonials() {
  const reviews = [
    {
      name: "Sarah Jenks",
      role: "Real Estate Agent",
      content: "Reelmatic has completely transformed how I market my listings. The videos look incredibly professional and take minutes to make.",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&w=150&q=80"
    },
    {
      name: "David Chen",
      role: "Property Manager",
      content: "The AI features are mind-blowing. I can generate engaging content for social media effortlessly. Highly recommend it to anyone in the industry.",
      avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&w=150&q=80"
    },
    {
      name: "Emily Rodriguez",
      role: "Broker",
      content: "Our engagement rates have skyrocketed since we started using Reelmatic. The ROI is undeniable. It's a must-have tool.",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&w=150&q=80"
    }
  ];

  return (
    <section className="w-full py-20 bg-accent/30">
      <div className="container px-4 md:px-8 max-w-screen-xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Customers reviews</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            See what our community of real estate professionals has to say about Reelmatic.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, idx) => (
            <div key={idx} className="bg-background p-8 rounded-2xl shadow-sm border border-border flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full overflow-hidden mb-4 border-2 border-primary/20">
                <img src={review.avatar} alt={review.name} className="w-full h-full object-cover" />
              </div>
              <h3 className="font-semibold text-lg">{review.name}</h3>
              <p className="text-primary text-sm font-medium mb-4">{review.role}</p>
              <p className="text-muted-foreground italic">
                "{review.content}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
