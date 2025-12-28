
import React from 'react';

const TestimonialsPage: React.FC = () => {
  return (
    <div className="pt-32 pb-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-12 font-serif">What Our Guests Say</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {[
            { name: "James L.", text: "God Save The Chef made our dinner unforgettable — fresh flavors and professional service. A true London gem.", stars: 5 },
            { name: "Sarah M.", text: "The bespoke menu exceeded all expectations. Restaurant-level dining without leaving our home. Simply stunning.", stars: 5 },
            { name: "Robert K.", text: "Andres is a master of his craft. The Pan-Asian influences in our birthday dinner were executed with absolute precision.", stars: 5 },
            { name: "Eleanor W.", text: "The attention to detail was sublime. From the sourcing of the scallops to the final petit fours, every moment was perfection.", stars: 5 },
            { name: "Michael T.", text: "Chef Andres is not just a cook; he's an artist. He managed our dietary restrictions seamlessly without sacrificing flavor.", stars: 5 },
            { name: "Sophia R.", text: "The AI Kitchen tool helped us visualize the menu perfectly, and the reality was even better. Highly recommended.", stars: 5 },
          ].map((t, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-stone-200 flex flex-col items-center">
              <div className="flex text-amber-500 mb-4">
                {[...Array(t.stars)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                ))}
              </div>
              <blockquote className="text-stone-700 italic text-lg mb-6 leading-relaxed font-serif">
                "{t.text}"
              </blockquote>
              <cite className="text-stone-900 font-bold not-italic">— {t.name}</cite>
            </div>
          ))}
        </div>
        <div className="inline-block px-8 py-4 bg-white/50 border border-stone-300 rounded-full text-stone-500 text-sm font-medium">
          <span className="animate-pulse mr-2 text-amber-600">●</span> More verified testimonials from our London clients are coming soon.
        </div>
      </div>
    </div>
  );
};

export default TestimonialsPage;
