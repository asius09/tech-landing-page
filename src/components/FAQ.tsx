import React from 'react';

const FAQS_DATA = [
  { question: "Do you offer a free trial?", answer: "Yes, we offer a 14-day free trial on all plans." },
  { question: "How does the AI work?", answer: "Our AI analyzes your property photos and listing details to automatically generate professional marketing videos." },
  { question: "Is there a limit on videos?", answer: "Our Starter plan includes 10 videos per month, while our Professional plan offers unlimited generations." },
  { question: "Can I use my own branding?", answer: "Yes, the Professional plan allows for custom branding, colors, and watermarks." },
  { question: "Do you have mobile app?", answer: "Currently, our platform is web-based but fully optimized for mobile devices." }
];

export function FAQ() {
  return (
    <section className="w-full py-24 bg-pastel-yellow" id="faq">
      <div className="container px-4 md:px-8 max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row gap-12 md:gap-24">
          <div className="md:w-1/3">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-foreground">Frequently asked questions</h2>
            <p className="text-lg text-muted-foreground">
              Everything you need to know about the product and billing.
            </p>
          </div>
          <div className="md:w-2/3">
            <div className="space-y-6">
              {FAQS_DATA.map((faq, idx) => (
                <div key={idx} className="border-b border-border/50 pb-6 group cursor-pointer">
                  <div className="flex justify-between items-center">
                    <h3 className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors">{faq.question}</h3>
                    <span className="text-primary font-light text-2xl">+</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
