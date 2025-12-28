
import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <div className="pt-32 pb-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <img 
            src="https://media-los2-1.cdn.whatsapp.net/v/t61.24694-24/418025451_826712426050420_1088016425134389899_n.jpg?ccb=11-4&oh=01_Q5Aa3QE1u1WFsaFwMXvBDb851g55zb3CqYJUZiOBuwaRy-5F5g&oe=695EB42E&_nc_sid=5e03e0&_nc_cat=103" 
            alt="Chef Andres" 
            className="rounded-2xl shadow-2xl z-10 relative"
          />
          <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-amber-100 rounded-2xl -z-10"></div>
        </div>
        <div>
          <span className="text-amber-600 font-bold uppercase tracking-widest text-sm">Led by Chef Andres R.</span>
          <h1 className="text-4xl md:text-5xl font-bold mt-4 mb-8 leading-tight font-serif">Crafting Culinary Memories In Your Own Home</h1>
          <p className="text-stone-600 text-lg mb-8 leading-relaxed">
            God Save The Chef Ltd is a bespoke private chef service based in London. With over a decade of experience in fine-dining kitchens and Michelin-style training, we bring restaurant-level cooking to your event.
          </p>
          <p className="text-stone-600 text-lg mb-8 leading-relaxed">
            Chef Andres' philosophy is simple: celebrate the ingredient. By combining Mediterranean heritage with Pan-Asian precision, he creates menus that are as visually stunning as they are delicious.
          </p>
          <ul className="space-y-4 mb-8">
            {[
              'Mediterranean influence with global flavors',
              'Pan-Asian precision and technique',
              'Seasonal, locally-sourced London ingredients',
              'Personalized service for intimate & large events'
            ].map((item, idx) => (
              <li key={idx} className="flex items-center text-stone-700">
                <svg className="w-5 h-5 text-amber-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
