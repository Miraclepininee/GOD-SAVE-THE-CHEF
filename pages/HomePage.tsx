
import React from 'react';
import Hero from '../components/Hero';
import AIKitchen from '../components/AIKitchen';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
  return (
    <div className="flex flex-col">
      <Hero />

      {/* About Section */}
      <section id="about" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1577214495773-551bc4f28941?auto=format&fit=crop&q=80&w=1000" 
              alt="Chef Andres" 
              className="rounded-2xl shadow-2xl z-10 relative"
            />
            <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-amber-100 rounded-2xl -z-10"></div>
          </div>
          <div>
            <span className="text-amber-600 font-bold uppercase tracking-widest text-sm">Led by Chef Andres R.</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-8 leading-tight font-serif">Crafting Culinary Memories <br/>In Your Own Home</h2>
            <p className="text-stone-600 text-lg mb-8 leading-relaxed">
              God Save The Chef Ltd is a bespoke private chef service based in London. With over a decade of experience in fine-dining kitchens and Michelin-style training, we bring restaurant-level cooking to your event.
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
            <Link to="/about" className="border-2 border-stone-900 px-8 py-3 rounded-full font-bold hover:bg-stone-900 hover:text-white transition-colors inline-block">
              Learn More About Andres
            </Link>
          </div>
        </div>
      </section>

      {/* Menus Section */}
      <section id="menus" className="py-24 bg-stone-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 font-serif">Sample Culinary Journeys</h2>
            <p className="text-stone-600">All menus are custom-crafted to your taste and event.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Seasonal Tasting', img: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=600', desc: 'A sophisticated 7-course exploration of the season\'s finest offerings.' },
              { title: 'Outdoor Feast', img: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&q=80&w=600', desc: 'Luxury BBQ and fire-cooked delicacies for elegant summer gatherings.' },
              { title: 'Celebration Dinner', img: 'https://images.unsplash.com/photo-1534080564607-c92752e8929f?auto=format&fit=crop&q=80&w=600', desc: 'Indulgent multi-course dinners for birthdays, anniversaries, and milestones.' },
            ].map((menu, idx) => (
              <div key={idx} className="group cursor-pointer">
                <div className="overflow-hidden rounded-2xl mb-6 shadow-lg h-80">
                  <img src={menu.img} alt={menu.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <h3 className="text-2xl font-bold mb-2 font-serif">{menu.title}</h3>
                <p className="text-stone-600 mb-4">{menu.desc}</p>
                <Link to="/menus" className="text-amber-600 font-bold hover:underline">Explore Menu →</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services & Pricing */}
      <section id="services" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-8 font-serif">Services & Experience</h2>
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="w-12 h-12 bg-stone-100 rounded-full flex items-center justify-center shrink-0">
                    <span className="font-serif text-xl">01</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-xl mb-2">Private Dinner Parties</h4>
                    <p className="text-stone-600">Complete kitchen takeover, table service, and full cleanup. You just host.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-12 h-12 bg-stone-100 rounded-full flex items-center justify-center shrink-0">
                    <span className="font-serif text-xl">02</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-xl mb-2">Special Events & Catering</h4>
                    <p className="text-stone-600">Canapés, buffets, or formal seating for larger London venues.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-12 h-12 bg-stone-100 rounded-full flex items-center justify-center shrink-0">
                    <span className="font-serif text-xl">03</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-xl mb-2">Meal Prep & Consultation</h4>
                    <p className="text-stone-600">Weekly healthy gourmet meals or custom diet planning at home.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-stone-900 text-white p-12 rounded-3xl shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-10">
                <svg className="w-32 h-32" fill="currentColor" viewBox="0 0 24 24"><path d="M12 3L4 9v12h16V9l-8-6zm0 2.5L17.5 10H6.5L12 5.5zM6 12h12v7H6v-7z"/></svg>
              </div>
              <h3 className="text-3xl font-bold mb-4 font-serif">Investment</h3>
              <p className="text-amber-400 text-5xl font-bold mb-2">From £68</p>
              <p className="text-stone-400 mb-8 uppercase tracking-widest text-sm font-medium">per person / min spend approx £795</p>
              <p className="text-stone-400 text-sm italic mb-10">Pricing depends on guest count, menu complexity & travel requirements across London and beyond.</p>
              <Link to="/book-now" className="block w-full text-center bg-white text-stone-900 py-4 rounded-full font-bold hover:bg-stone-200 transition-colors">
                Request a Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      <AIKitchen />

      {/* Testimonials Section */}
      <section id="testimonials" className="py-24 bg-stone-100">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-12 font-serif">What Our Guests Say</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {[
              { name: "James L.", text: "God Save The Chef made our dinner unforgettable — fresh flavors and professional service. A true London gem.", stars: 5 },
              { name: "Sarah M.", text: "The bespoke menu exceeded all expectations. Restaurant-level dining without leaving our home. Simply stunning.", stars: 5 },
              { name: "Robert K.", text: "Andres is a master of his craft. The Pan-Asian influences in our birthday dinner were executed with absolute precision.", stars: 5 },
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
          <div className="inline-block px-6 py-3 bg-white/50 border border-stone-300 rounded-full text-stone-500 text-sm font-medium">
            <span className="animate-pulse mr-2 text-amber-600">●</span> Real testimonials from our London clients are coming soon.
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center font-serif">A Visual Taste</h2>
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4">
            {[
              'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=800',
              'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=800',
              'https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&q=80&w=800',
              'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&q=80&w=800',
              'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=800',
              'https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=800',
            ].map((img, i) => (
              <div key={i} className="mb-4 overflow-hidden rounded-xl">
                <img src={img} alt="Culinary creation" className="w-full hover:scale-105 transition-transform duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-stone-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 font-serif">Book Your Event</h2>
            <p className="text-stone-600">Planning an event? Get a bespoke menu and quote in minutes.</p>
          </div>
          <form className="bg-white p-10 rounded-3xl shadow-xl space-y-6 border border-stone-200">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-stone-700 mb-2">Name</label>
                <input type="text" className="w-full p-4 bg-stone-50 border border-stone-200 rounded-xl focus:ring-2 focus:ring-amber-600 outline-none" />
              </div>
              <div>
                <label className="block text-sm font-medium text-stone-700 mb-2">Email</label>
                <input type="email" className="w-full p-4 bg-stone-50 border border-stone-200 rounded-xl focus:ring-2 focus:ring-amber-600 outline-none" />
              </div>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-medium text-stone-700 mb-2">Event Date</label>
                <input type="date" className="w-full p-4 bg-stone-50 border border-stone-200 rounded-xl focus:ring-2 focus:ring-amber-600 outline-none" />
              </div>
              <div>
                <label className="block text-sm font-medium text-stone-700 mb-2">Guests</label>
                <input type="number" className="w-full p-4 bg-stone-50 border border-stone-200 rounded-xl focus:ring-2 focus:ring-amber-600 outline-none" />
              </div>
              <div>
                <label className="block text-sm font-medium text-stone-700 mb-2">Service Type</label>
                <select className="w-full p-4 bg-stone-50 border border-stone-200 rounded-xl focus:ring-2 focus:ring-amber-600 outline-none">
                  <option>Dinner Party</option>
                  <option>Event Catering</option>
                  <option>Meal Prep</option>
                </select>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-stone-700 mb-2">Message & Dietary Requirements</label>
              <textarea className="w-full p-4 bg-stone-50 border border-stone-200 rounded-xl h-32 focus:ring-2 focus:ring-amber-600 outline-none"></textarea>
            </div>
            <button className="w-full bg-stone-900 text-white py-5 rounded-xl font-bold hover:bg-stone-800 transition-all text-lg shadow-lg">
              Submit Booking Request
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
