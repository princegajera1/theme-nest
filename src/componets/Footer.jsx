import React from 'react';
import { FaFacebookF, FaYoutube, FaLinkedinIn, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaChevronUp } from 'react-icons/fa';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full font-sans bg-white border-t border-gray-100">
      
      {/* 1. PURPLE SUGGESTION SECTION (Screenshot mujab) */}
      <section className="bg-gradient-to-r from-[#6366f1] to-[#a288ff] py-16 px-6 text-center text-white relative overflow-hidden">
        {/* Background Grid Pattern */}
        <div className="absolute inset-0 opacity-10 pointer-events-none" 
             style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '30px 30px' }}>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
            Which Website Template <br className="hidden md:block" /> Are You Looking For?
          </h2>
          <p className="text-white/90 text-lg mb-10 max-w-3xl mx-auto font-medium">
            Suggest the type of website you'd love to see, and we'll carefully review it while planning our upcoming designs. Your input helps us create templates that truly match what people need.
          </p>
          
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <input 
              type="text" 
              placeholder="Please type your suggestions...." 
              className="w-full md:w-[450px] px-6 py-4 rounded-xl text-white outline-none border border-white/30 bg-white/10 placeholder:text-white/60 focus:border-white transition-all"
            />
            <button className="cursor-pointer bg-white text-[#6366f1] font-bold px-8 py-4 rounded-xl hover:bg-opacity-95 transition-all shadow-lg whitespace-nowrap">
              Send a Suggestions
            </button>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 pt-16 pb-10">
        {/* 2. THEMENEST.AI HEADER & SOCIAL (Section upar) */}
        <div className="mb-12">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            <span className="text-[#6366f1]">Theme</span>Nest.ai
          </h3>
          <p className="text-gray-500 text-[16px] mb-6 max-w-lg font-medium">
            Helping brands build stunning websites and grow their digital presence with ease.
          </p>
          <div className="flex gap-4">
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full border border-gray-100 flex items-center justify-center text-gray-400 hover:bg-[#6366f1] hover:text-white transition-all shadow-sm">
              <FaFacebookF size={16} />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full border border-gray-100 flex items-center justify-center text-gray-400 hover:bg-[#6366f1] hover:text-white transition-all shadow-sm">
              <FaYoutube size={16} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full border border-gray-100 flex items-center justify-center text-gray-400 hover:bg-[#6366f1] hover:text-white transition-all shadow-sm">
              <FaLinkedinIn size={16} />
            </a>
          </div>
        </div>

        {/* 3. 4-COLUMN GRID (Exact Screenshot alignment) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 border-t border-gray-50 pt-10 mb-16">
          
          <div className="space-y-6">
            <h4 className="font-bold text-gray-900 text-[18px] uppercase">Company</h4>
            <ul className="space-y-4 text-gray-500 font-bold">
              <li className="hover:text-[#6366f1] cursor-pointer">About Us</li>
              <li className="hover:text-[#6366f1] cursor-pointer">Contact Us</li>
              <li className="hover:text-[#6366f1] cursor-pointer">Privacy Policy</li>
              <li className="hover:text-[#6366f1] cursor-pointer">Help Center</li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="font-bold text-gray-900 text-[18px] uppercase">Resources</h4>
            <ul className="space-y-4 text-gray-500 font-bold">
              <li className="hover:text-[#6366f1] cursor-pointer">What's New</li>
              <li className="hover:text-[#6366f1] cursor-pointer">Recommendations</li>
              <li className="hover:text-[#6366f1] cursor-pointer">FAQ</li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="font-bold text-gray-900 text-[18px] uppercase">Quick Links</h4>
            <ul className="space-y-4 text-gray-500 font-bold">
              <li className="hover:text-[#6366f1] cursor-pointer">Business Templates</li>
              <li className="hover:text-[#6366f1] cursor-pointer">E-Commerce Templates</li>
              <li className="hover:text-[#6366f1] cursor-pointer">Portfolio Templates</li>
              <li className="hover:text-[#6366f1] cursor-pointer">Education Templates</li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="font-bold text-gray-900 text-[18px] uppercase">Follow Us On</h4>
            <ul className="space-y-5">
              <li className="flex gap-4 font-bold">
                <a href="https://maps.google.com" target="_blank" rel="noreferrer" className="flex gap-4 hover:text-[#6366f1] transition-colors">
                  <FaMapMarkerAlt className="text-[#6366f1] text-xl mt-1 shrink-0" />
                  <span className="text-gray-600 text-[14px]">123 Innovation Street, Tech Park, Business Bay, Delhi, NY 10001, INDIA</span>
                </a>
              </li>
              <li className="flex gap-4 items-center font-bold">
                <a href="tel:+919876543210" className="flex gap-4 items-center hover:text-[#6366f1] transition-colors">
                  <FaPhoneAlt className="text-[#6366f1] shrink-0" />
                  <span className="text-gray-600">+91 9876543210</span>
                </a>
              </li>
              <li className="flex gap-4 items-center font-bold">
                <a href="mailto:themenest@help.com" className="flex gap-4 items-center hover:text-[#6366f1] transition-colors">
                  <FaEnvelope className="text-[#6366f1] shrink-0" />
                  <span className="text-gray-600">themenest@help.com</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* 4. BOTTOM COPYRIGHT BAR */}
        <div className="pt-8 border-t border-gray-100 flex flex-col md:row justify-between items-center gap-4">
          <p className="text-gray-400 text-[14px] font-medium">
            © 2026 ThemeNest.ai. All rights reserved.
          </p>
          
          <div className="flex items-center gap-1 text-gray-400 text-[14px] font-medium">
            <span>Made with</span>
            <span className="text-red-500 mx-1">❤️</span>
            <span>by</span>
            <span className="font-bold text-gray-600 ml-1">themenest</span>
          </div>
          
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;