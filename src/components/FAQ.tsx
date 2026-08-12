import React from 'react';

export function FAQ() {
  const faqs = [
    {
      question: "Do you offer a free trial?",
      answer: "Yes, we offer a 14-day free trial on our Starter plan so you can experience the power of Reelmatic before committing."
    },
    {
      question: "Can I cancel my subscription anytime?",
      answer: "Absolutely. There are no long-term contracts. You can cancel your subscription at any time from your account settings."
    },
    {
      question: "Is there a limit on video length?",
      answer: "Starter plan videos can be up to 60 seconds long. Professional plan allows for up to 5-minute videos."
    },
    {
      question: "Can I use my own branding?",
      answer: "Yes, the Professional plan includes full custom branding capabilities, allowing you to add your logos, colors, and watermarks."
    },
    {
      question: "Do I need video editing experience?",
      answer: "Not at all! Reelmatic is designed to be completely intuitive. Our AI handles the heavy lifting of editing and formatting."
    }
  ];

  return (
    <section className="w-full py-20 bg-accent/20">
      <div className="container px-4 md:px-8 max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently asked questions</h2>
          <p className="text-muted-foreground">
            Everything you need to know about the product and billing.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <details key={idx} className="group border border-border rounded-lg bg-background [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 font-medium text-foreground">
                <h3 className="text-lg">{faq.question}</h3>
                <span className="shrink-0 rounded-full bg-accent p-1.5 text-foreground sm:p-3 transition duration-300 group-open:-rotate-180">
                  <svg xmlns="http://www.w3.org/2000/svg" className="size-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </span>
              </summary>
              <div className="px-6 pb-6 text-muted-foreground leading-relaxed">
                {faq.answer}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
