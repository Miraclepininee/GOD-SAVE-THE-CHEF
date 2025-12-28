
import React from 'react';

const ContactPage: React.FC = () => {
  return (
    <div className="pt-32 pb-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h1 className="text-4xl font-bold mb-8 font-serif">Get in Touch</h1>
            <p className="text-stone-600 text-lg mb-12">
              Whether you're planning a wedding, an intimate anniversary dinner, or a corporate reception, we're here to bring the culinary excellence to you.
            </p>
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                </div>
                <div>
                  <h4 className="font-bold">Email Us</h4>
                  <p className="text-stone-500">hello@godsavethechef.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                </div>
                <div>
                  <h4 className="font-bold">Call Us</h4>
                  <p className="text-stone-500">+44 (0) 700 000 000</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                </div>
                <div>
                  <h4 className="font-bold">Location</h4>
                  <p className="text-stone-500">London & Surrounding Areas</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white p-10 rounded-3xl shadow-xl">
            <h3 className="text-2xl font-bold mb-6 font-serif">Quick Inquiry</h3>
            <form className="space-y-4">
              <input type="text" placeholder="Your Name" className="w-full p-4 bg-stone-50 border border-stone-200 rounded-xl outline-none focus:ring-2 focus:ring-amber-600" />
              <input type="email" placeholder="Your Email" className="w-full p-4 bg-stone-50 border border-stone-200 rounded-xl outline-none focus:ring-2 focus:ring-amber-600" />
              <textarea placeholder="How can we help?" className="w-full p-4 bg-stone-50 border border-stone-200 rounded-xl h-40 outline-none focus:ring-2 focus:ring-amber-600"></textarea>
              <button className="w-full bg-stone-900 text-white py-4 rounded-xl font-bold hover:bg-stone-800 transition-colors">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
