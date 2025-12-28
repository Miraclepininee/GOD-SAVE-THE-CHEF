
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=2000" 
          alt="Fine Dining" 
          className="w-full h-full object-cover brightness-[0.4]"
        />
      </div>
      <div className="relative z-10 text-center text-white px-6 max-w-4xl">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Bespoke Private Chef Experiences <br/>
          <span className="text-amber-400">London & Beyond</span>
        </h1>
        <p className="text-xl md:text-2xl mb-10 font-light opacity-90 max-w-2xl mx-auto">
          Restaurant-Level Cuisine in the Comfort of Your Home. Custom menus tailored to your event and taste.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#contact" className="bg-amber-600 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-amber-500 transition-all transform hover:scale-105">
            Book Your Experience
          </a>
          <a href="#menus" className="bg-white/10 backdrop-blur-md border border-white/30 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-white/20 transition-all">
            View Sample Menus
          </a>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
