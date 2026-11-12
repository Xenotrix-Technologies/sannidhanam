import React from 'react';
import { ArrowRight, Phone, MessageSquare, CheckCircle2 } from 'lucide-react';
import { COMPANY_INFO } from '../../data/companyData';
import { PageRoute } from '../../types';
import { getWhatsAppUrl } from '../../utils/whatsapp';

interface HeroSectionProps {
  onNavigate: (page: PageRoute) => void;
  onOpenQuoteModal: (initialService?: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onNavigate, onOpenQuoteModal }) => {
  return (
    <section className="relative min-h-[92vh] pt-24 sm:pt-32 pb-16 flex items-center bg-charcoal-900 text-white overflow-hidden">
      {/* High-Resolution Hero Machinery Background with Perfectly Balanced Industrial Contrast */}
      <div className="absolute inset-0 z-0">
        <img
          src="/vehicles/hitachi-heavy.jpg"
          alt="Heavy Hitachi Excavator at work"
          className="w-full h-full object-cover object-center transform scale-100 transition-transform duration-1000 ease-out"
        />
        {/* Cinematic Gradient Overlays: Dark on the left for crisp text contrast, open on the right for clear machinery visibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal-900 via-charcoal-900/85 to-charcoal-900/35"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900 via-transparent to-charcoal-900/60"></div>
        {/* Geometric Industrial Dot Grid Overlay */}
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none bg-[radial-gradient(#FFB800_1.5px,transparent_1.5px)] [background-size:28px_28px]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl space-y-6 sm:space-y-7">
          {/* Availability Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-charcoal-800/90 border border-yellow/40 backdrop-blur-md shadow-lg animate-fade-in">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-yellow"></span>
            </span>
            <span className="font-heading uppercase tracking-wider text-xs sm:text-sm font-bold text-yellow">
              Available 7 Days a Week • Instant Site Deployment
            </span>
          </div>

          {/* Strong Headline */}
          <div className="space-y-2">
            <h1 className="font-heading font-black tracking-tight text-4xl sm:text-6xl md:text-7xl lg:text-7xl uppercase text-white leading-[0.95] drop-shadow-md">
              Powering Projects.<br />
              <span className="text-yellow inline-block">Moving The Earth.</span>
            </h1>
            <div className="flex items-center gap-2 pt-1">
              <div className="h-1.5 w-20 bg-yellow rounded-full shadow-yellow-sm"></div>
              <div className="h-1.5 w-4 bg-charcoal-500 rounded-full"></div>
              <div className="h-1.5 w-2 bg-charcoal-600 rounded-full"></div>
            </div>
          </div>

          {/* Supporting Copy */}
          <p className="text-base sm:text-lg md:text-xl text-charcoal-200 leading-relaxed font-normal max-w-2xl drop-shadow-sm">
            Thrissur's trusted fleet for heavy earthmoving, precision JCB &amp; excavator hire, rock breaking, and certified building materials supply. Built on 15+ years of operational excellence.
          </p>

          {/* Quick Pillars Chips */}
          <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-xs sm:text-sm text-charcoal-300 font-medium">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-yellow shrink-0" />
              <span>Certified Heavy Operators</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-yellow shrink-0" />
              <span>Modern Hydraulic Machinery</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-yellow shrink-0" />
              <span>Direct Quarry-Rate Materials</span>
            </div>
          </div>

          {/* Primary & Secondary Call to Actions */}
          <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4">
            <button
              onClick={() => onNavigate('services')}
              className="px-6 py-4 rounded-lg bg-yellow hover:bg-yellow-400 text-charcoal-900 font-heading font-black text-base uppercase tracking-wider transition-all duration-200 shadow-yellow-glow hover:shadow-yellow-glow flex items-center justify-center gap-2.5 transform hover:-translate-y-0.5"
            >
              <span>Explore Our Services</span>
              <ArrowRight className="w-5 h-5 stroke-[2.5]" />
            </button>

            <button
              onClick={() => onOpenQuoteModal()}
              className="px-6 py-4 rounded-lg bg-charcoal-800/90 hover:bg-charcoal-700/90 text-white border-2 border-charcoal-500 hover:border-yellow font-heading font-extrabold text-base uppercase tracking-wider transition-all duration-200 flex items-center justify-center gap-2 backdrop-blur-sm"
            >
              <span>Get a Free Quote</span>
            </button>

            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="sm:hidden px-4 py-3 rounded-lg bg-emerald-600 text-white font-heading font-bold text-sm uppercase tracking-wider flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>

          {/* Direct Dial Banner */}
          <div className="pt-4 border-t border-charcoal-700/70 flex flex-wrap items-center gap-4 text-xs sm:text-sm text-charcoal-300">
            <span className="text-charcoal-400 font-medium">Quick Booking Hotlines:</span>
            <div className="flex items-center gap-3 font-semibold">
              <a
                href={`tel:${COMPANY_INFO.primaryPhoneRaw}`}
                className="hover:text-yellow text-white inline-flex items-center gap-1.5 bg-charcoal-800/60 px-3 py-1.5 rounded border border-charcoal-700 hover:border-yellow transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-yellow" />
                <span>{COMPANY_INFO.primaryPhone}</span>
              </a>
              <a
                href={`tel:${COMPANY_INFO.secondaryPhoneRaw}`}
                className="hover:text-yellow text-charcoal-200 inline-flex items-center gap-1.5 bg-charcoal-800/60 px-3 py-1.5 rounded border border-charcoal-700 hover:border-yellow transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-yellow" />
                <span>{COMPANY_INFO.secondaryPhone}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Hero Bottom Metric Cards Bar */}
        <div className="mt-14 sm:mt-16 pt-8 border-t border-charcoal-700/70 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          <div className="bg-charcoal-800/60 backdrop-blur-sm p-4 rounded-lg border border-charcoal-700">
            <div className="font-heading font-black text-3xl sm:text-4xl text-yellow">15+</div>
            <div className="font-heading uppercase tracking-wider font-bold text-xs sm:text-sm text-white mt-0.5">
              Years Experience
            </div>
            <p className="text-[11px] text-charcoal-400 mt-1">Proven reliability in Kerala groundworks</p>
          </div>

          <div className="bg-charcoal-800/60 backdrop-blur-sm p-4 rounded-lg border border-charcoal-700">
            <div className="font-heading font-black text-3xl sm:text-4xl text-yellow">1,250+</div>
            <div className="font-heading uppercase tracking-wider font-bold text-xs sm:text-sm text-white mt-0.5">
              Sites Completed
            </div>
            <p className="text-[11px] text-charcoal-400 mt-1">Commercial, PWD & residential sites</p>
          </div>

          <div className="bg-charcoal-800/60 backdrop-blur-sm p-4 rounded-lg border border-charcoal-700">
            <div className="font-heading font-black text-3xl sm:text-4xl text-yellow">22+</div>
            <div className="font-heading uppercase tracking-wider font-bold text-xs sm:text-sm text-white mt-0.5">
              Heavy Equipment
            </div>
            <p className="text-[11px] text-charcoal-400 mt-1">JCBs, excavators, dozers & tippers</p>
          </div>

          <div className="bg-charcoal-800/60 backdrop-blur-sm p-4 rounded-lg border border-charcoal-700">
            <div className="font-heading font-black text-3xl sm:text-4xl text-yellow">7 Days</div>
            <div className="font-heading uppercase tracking-wider font-bold text-xs sm:text-sm text-white mt-0.5">
              Weekly Operation
            </div>
            <p className="text-[11px] text-charcoal-400 mt-1">Zero downtime, weekend deployment</p>
          </div>
        </div>
      </div>
    </section>
  );
};
