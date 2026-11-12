import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, ArrowUp } from 'lucide-react';
import { COMPANY_INFO } from '../../data/companyData';
import { getWhatsAppUrl } from '../../utils/whatsapp';

export const FloatingActions: React.FC = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-5 right-4 sm:right-6 z-40 flex flex-col items-end gap-3 pointer-events-none">
      {/* Scroll To Top */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="pointer-events-auto p-2.5 rounded-full bg-charcoal-800/90 text-yellow hover:bg-yellow hover:text-charcoal-900 border border-charcoal-600 shadow-lg transition-all duration-300 transform hover:scale-110 focus:outline-none"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-5 h-5 stroke-[2.5]" />
        </button>
      )}

      {/* Floating Call Button */}
      <a
        href={`tel:${COMPANY_INFO.primaryPhoneRaw}`}
        className="pointer-events-auto sm:hidden flex items-center gap-2 px-3.5 py-2.5 rounded-full bg-charcoal-800 text-white border border-yellow/50 shadow-industrial transition-all active:scale-95"
        aria-label="Call Now"
      >
        <div className="w-7 h-7 rounded-full bg-yellow text-charcoal-900 flex items-center justify-center font-bold">
          <Phone className="w-3.5 h-3.5" />
        </div>
        <span className="font-heading uppercase font-bold text-xs tracking-wider pr-1">Call Now</span>
      </a>

      {/* Floating WhatsApp Action with Tooltip & Pulse */}
      <div className="relative group pointer-events-auto">
        {/* Subtle Tooltip on Hover (Desktop) */}
        <div className="hidden sm:block absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-charcoal-900 text-white text-xs font-semibold py-1.5 px-3 rounded shadow-xl whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none border border-charcoal-700">
          <span>Enquire on WhatsApp</span>
          <div className="absolute right-[-4px] top-1/2 -translate-y-1/2 w-2 h-2 bg-charcoal-900 rotate-45 border-t border-r border-charcoal-700"></div>
        </div>

        <a
          href={getWhatsAppUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-gradient-to-r from-emerald-600 to-green-500 hover:from-emerald-500 hover:to-green-400 text-white px-4 py-3 sm:px-5 sm:py-3.5 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-105 active:scale-95 border-2 border-white/20"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle className="w-5 h-5 fill-current stroke-[1.5]" />
          <span className="font-heading uppercase font-extrabold text-sm tracking-wider hidden xs:inline">
            WhatsApp Enquiry
          </span>
        </a>
      </div>
    </div>
  );
};

