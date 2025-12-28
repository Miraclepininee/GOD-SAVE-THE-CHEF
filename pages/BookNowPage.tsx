
import React from 'react';

const BookNowPage: React.FC = () => {
  return (
    <div className="pt-32 pb-24 bg-stone-900 text-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-serif">Book Your Experience</h1>
          <p className="text-stone-400">Secure your date and start your bespoke culinary journey.</p>
        </div>
        <form className="bg-stone-800 p-10 rounded-3xl shadow-2xl border border-stone-700 space-y-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <label className="text-sm font-medium text-stone-400 uppercase tracking-widest">Full Name</label>
              <input type="text" className="w-full bg-stone-900 border border-stone-700 p-4 rounded-xl focus:ring-2 focus:ring-amber-600 outline-none" placeholder="John Doe" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-stone-400 uppercase tracking-widest">Email Address</label>
              <input type="email" className="w-full bg-stone-900 border border-stone-700 p-4 rounded-xl focus:ring-2 focus:ring-amber-600 outline-none" placeholder="john@example.com" />
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-2">
              <label className="text-sm font-medium text-stone-400 uppercase tracking-widest">Event Date</label>
              <input type="date" className="w-full bg-stone-900 border border-stone-700 p-4 rounded-xl focus:ring-2 focus:ring-amber-600 outline-none" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-stone-400 uppercase tracking-widest">Guest Count</label>
              <input type="number" className="w-full bg-stone-900 border border-stone-700 p-4 rounded-xl focus:ring-2 focus:ring-amber-600 outline-none" placeholder="Min. 2" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-stone-400 uppercase tracking-widest">Budget p.p.</label>
              <select className="w-full bg-stone-900 border border-stone-700 p-4 rounded-xl focus:ring-2 focus:ring-amber-600 outline-none">
                <option>£68 - £100</option>
                <option>£100 - £150</option>
                <option>£150 - £250</option>
                <option>£250+</option>
              </select>
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-stone-400 uppercase tracking-widest">Dietary Requirements & Notes</label>
            <textarea className="w-full bg-stone-900 border border-stone-700 p-4 rounded-xl h-40 focus:ring-2 focus:ring-amber-600 outline-none" placeholder="Tell us about allergies, occasion details, or menu preferences..."></textarea>
          </div>
          <button className="w-full bg-amber-600 hover:bg-amber-500 text-white py-5 rounded-xl font-bold transition-all text-lg shadow-lg">
            Confirm Booking Request
          </button>
          <p className="text-center text-stone-500 text-xs italic">
            Chef Andres will review your request and get back to you within 24 hours to discuss your bespoke menu.
          </p>
        </form>
      </div>
    </div>
  );
};

export default BookNowPage;
