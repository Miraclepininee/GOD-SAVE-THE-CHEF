
import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';

const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Menus', href: '/menus' },
    { name: 'AI Kitchen', href: '/ai-kitchen' },
    { name: 'Testimonials', href: '/testimonials' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="text-2xl font-serif font-bold tracking-tight text-stone-900">
          GOD SAVE <span className="text-amber-600">THE CHEF</span>
        </Link>
        <div className="hidden md:flex space-x-8">
          {links.map((link) => (
            <NavLink 
              key={link.name} 
              to={link.href} 
              className={({ isActive }) => `text-sm font-medium transition-colors uppercase tracking-widest ${isActive ? 'text-amber-600 border-b-2 border-amber-600 pb-1' : 'hover:text-amber-600'}`}
            >
              {link.name}
            </NavLink>
          ))}
        </div>
        <Link to="/book-now" className="bg-stone-900 text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-stone-800 transition-colors">
          Book Now
        </Link>
      </div>
    </nav>
  );
};

export default Navigation;
