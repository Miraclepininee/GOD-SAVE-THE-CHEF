
import React from 'react';

const MenusPage: React.FC = () => {
  return (
    <div className="pt-32 pb-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-serif">Sample Culinary Journeys</h1>
          <p className="text-stone-600 max-w-2xl mx-auto">Our menus are alive, changing with the seasons and your specific desires. Here is a taste of what we can create for you.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: 'Seasonal Tasting', img: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=600', desc: 'A sophisticated 7-course exploration of the season\'s finest offerings.' },
            { title: 'Outdoor Feast', img: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&q=80&w=600', desc: 'Luxury BBQ and fire-cooked delicacies for elegant summer gatherings.' },
            { title: 'Celebration Dinner', img: 'https://images.unsplash.com/photo-1534080564607-c92752e8929f?auto=format&fit=crop&q=80&w=600', desc: 'Indulgent multi-course dinners for birthdays, anniversaries, and milestones.' },
            { title: 'The Canapé Soirée', img: 'https://images.unsplash.com/photo-1541529086526-db283c563270?auto=format&fit=crop&q=80&w=600', desc: 'Delicate, bite-sized explosions of flavor for sophisticated standing receptions.' },
            { title: 'Chef’s Table Home', img: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=600', desc: 'An intimate dining experience with interactive plating and storytelling.' },
            { title: 'Global Fusion', img: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=600', desc: 'Where Mediterranean soul meets Pan-Asian precision in a unique 5-course menu.' },
          ].map((menu, idx) => (
            <div key={idx} className="group cursor-pointer">
              <div className="overflow-hidden rounded-2xl mb-6 shadow-lg h-80">
                <img src={menu.img} alt={menu.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>
              <h3 className="text-2xl font-bold mb-2 font-serif">{menu.title}</h3>
              <p className="text-stone-600 mb-4">{menu.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-20 p-12 bg-stone-900 text-white rounded-3xl text-center">
          <h2 className="text-3xl font-bold mb-4 font-serif">Looking for something unique?</h2>
          <p className="text-stone-400 mb-8 max-w-xl mx-auto">All our menus are custom-crafted. Use our AI Kitchen tool to start dreaming your perfect event.</p>
          <a href="/ai-kitchen" className="inline-block bg-amber-600 text-white px-8 py-3 rounded-full font-bold hover:bg-amber-500 transition-colors">Start Planning</a>
        </div>
      </div>
    </div>
  );
};

export default MenusPage;
