import React from 'react';
import { Phone, MessageSquare, ArrowRight, Clock } from 'lucide-react';
import { COMPANY_INFO } from '../../data/companyData';
import { PageRoute } from '../../types';
import { getWhatsAppUrl } from '../../utils/whatsapp';

interface CtaBannerProps {
  onNavigate?: (page: PageRoute) => void;
  onOpenQuoteModal: () => void;
}

export const CtaBanner: React.FC<CtaBannerProps> = ({ onOpenQuoteModal }) => {
  return (
    <section className="relative py-20 sm:py-28 bg-charcoal-900 text-white overflow-hidden">
      {/* High-Impact Heavy Machinery Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="/services/services-banner.jpg"
          alt="Heavy earthmoving machinery fleet on site"
          className="w-full h-full object-cover object-center"
        />
        {/* Dark Charcoal Mask */}
        <div className="absolute inset-0 bg-charcoal-900/90 backdrop-blur-[2px]"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal-950 via-charcoal-900/95 to-charcoal-900/80"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 sm:space-y-8">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-yellow/15 border border-yellow/40 text-yellow text-xs font-heading font-black uppercase tracking-widest mx-auto">
          <Clock className="w-3.5 h-3.5" />
          <span>Operational 7 Days a Week • Direct Machine Fleet</span>
        </div>

        <h2 className="font-heading font-black text-3xl sm:text-5xl md:text-6xl uppercase tracking-tight text-white max-w-4xl mx-auto leading-[0.98]">
          Have A Project? <br />
          <span className="text-yellow">Let's Get It Moving.</span>
        </h2>

        <p className="text-base sm:text-lg text-charcoal-200 max-w-2xl mx-auto leading-relaxed">
          Book reliable earthmoving machinery or order high-grade M-Sand and foundation stones today. Sannidhanam delivers strength, reliability, and precision every day of the week.
        </p>

        {/* Buttons Row */}
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={`tel:${COMPANY_INFO.primaryPhoneRaw}`}
            className="w-full sm:w-auto px-8 py-4 rounded-lg bg-yellow hover:bg-yellow-400 text-charcoal-900 font-heading font-black text-sm uppercase tracking-wider transition-all shadow-yellow-glow flex items-center justify-center gap-2.5 transform hover:-translate-y-0.5"
          >
            <Phone className="w-4 h-4 stroke-[2.5]" />
            <span>Call {COMPANY_INFO.primaryPhone}</span>
          </a>

          <button
            onClick={onOpenQuoteModal}
            className="w-full sm:w-auto px-8 py-4 rounded-lg bg-charcoal-800 hover:bg-charcoal-700 text-white font-heading font-extrabold text-sm uppercase tracking-wider border-2 border-charcoal-600 hover:border-yellow transition-all flex items-center justify-center gap-2"
          >
            <span>Request Online Quote</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-6 py-4 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-heading font-black text-sm uppercase tracking-wider transition-all flex items-center justify-center gap-2"
          >
            <MessageSquare className="w-4 h-4" />
            <span>WhatsApp Enquiry</span>
          </a>
        </div>

        <div className="pt-4 flex flex-wrap items-center justify-center gap-6 text-xs text-charcoal-400">
          <span>📍 KM Complex, SM Junction, Thrissur</span>
          <span>•</span>
          <span>⚡ 7 Days a Week Support</span>
          <span>•</span>
          <span>📞 Secondary Line: {COMPANY_INFO.secondaryPhone}</span>
        </div>
      </div>
    </section>
  );
};
