
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import VoiceConcierge from './components/VoiceConcierge';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import MenusPage from './pages/MenusPage';
import TestimonialsPage from './pages/TestimonialsPage';
import ContactPage from './pages/ContactPage';
import BookNowPage from './pages/BookNowPage';
import AIKitchen from './components/AIKitchen';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-stone-50 flex flex-col">
        <Navigation />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/menus" element={<MenusPage />} />
            <Route path="/ai-kitchen" element={<div className="pt-20"><AIKitchen /></div>} />
            <Route path="/testimonials" element={<TestimonialsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/book-now" element={<BookNowPage />} />
          </Routes>
        </main>

        <footer className="bg-stone-950 text-white py-16">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12">
            <div className="col-span-2">
              <h3 className="text-2xl font-serif font-bold mb-6 uppercase tracking-widest">God Save The Chef</h3>
              <p className="text-stone-400 max-w-sm mb-6">
                Bespoke private chef services in London and the UK. Fine-dining quality brought directly to your home.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-amber-600 transition-colors">Instagram</a>
                <a href="#" className="hover:text-amber-600 transition-colors">WhatsApp</a>
                <a href="#" className="hover:text-amber-600 transition-colors">LinkedIn</a>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-6">Explore</h4>
              <ul className="space-y-4 text-stone-400">
                <li><a href="/about" className="hover:text-white transition-colors">Our Story</a></li>
                <li><a href="/menus" className="hover:text-white transition-colors">Menus</a></li>
                <li><a href="/testimonials" className="hover:text-white transition-colors">Reviews</a></li>
                <li><a href="/book-now" className="hover:text-white transition-colors">Book Now</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-6">Contact</h4>
              <ul className="space-y-4 text-stone-400 text-sm">
                <li>London, United Kingdom</li>
                <li>hello@godsavethechef.com</li>
                <li>+44 (0) 700 000 000</li>
              </ul>
            </div>
          </div>
          <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-stone-800 text-center text-stone-500 text-xs">
            © {new Date().getFullYear()} God Save The Chef Ltd. All Rights Reserved.
          </div>
        </footer>

        <VoiceConcierge />
      </div>
    </BrowserRouter>
  );
};

export default App;
