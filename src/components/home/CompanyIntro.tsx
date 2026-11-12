import React from 'react';
import { ShieldCheck, Clock, Award, ArrowRight, Wrench } from 'lucide-react';
import { PageRoute } from '../../types';

interface CompanyIntroProps {
  onNavigate: (page: PageRoute) => void;
  onOpenQuoteModal: () => void;
}

export const CompanyIntro: React.FC<CompanyIntroProps> = ({ onNavigate, onOpenQuoteModal }) => {
  return (
    <section className="py-20 sm:py-24 bg-charcoal-50 text-charcoal-500 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left: Imagery Column with Overlapping Badges (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-charcoal-800 aspect-[4/5] sm:aspect-[3/4]">
              <img
                src="/services/earthmoving-works.jpg"
                alt="Sannidhanam Earth Movers on construction site"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/80 via-transparent to-transparent"></div>
              
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="font-heading uppercase tracking-widest text-xs font-bold text-yellow block">
                  Groundworks & Heavy Earthmoving
                </span>
                <p className="font-heading font-black text-xl sm:text-2xl uppercase mt-1">
                  Engineered For Demanding Terrain
                </p>
              </div>
            </div>

            {/* Floating Experience Badge */}
            <div className="absolute -bottom-6 -right-4 sm:-right-6 bg-charcoal-800 text-white p-5 sm:p-6 rounded-xl border-2 border-yellow shadow-2xl max-w-[220px]">
              <div className="font-heading font-black text-4xl text-yellow leading-none">15+</div>
              <div className="font-heading uppercase font-bold text-xs tracking-wider text-white mt-1">
                Years of Site Leadership
              </div>
              <p className="text-[11px] text-charcoal-300 mt-1 leading-snug">
                Trusted by leading civil contractors across Thrissur & Kerala.
              </p>
            </div>

            {/* Industrial corner accent */}
            <div className="hidden sm:block absolute -top-4 -left-4 w-24 h-24 border-t-4 border-l-4 border-yellow pointer-events-none"></div>
          </div>

          {/* Right: Copy & Company Value Pillars (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 text-yellow-600 font-heading font-black uppercase tracking-widest text-xs">
                <span className="w-2.5 h-2.5 rounded bg-yellow-500"></span>
                <span>Company Introduction</span>
              </div>
              <h2 className="font-heading font-black text-3xl sm:text-4xl md:text-5xl uppercase text-charcoal-800 tracking-tight leading-[1.05]">
                Heavy Power Built On Unwavering Reliability
              </h2>
              <div className="w-16 h-1.5 bg-yellow rounded-full"></div>
            </div>

            <p className="text-base sm:text-lg text-charcoal-500 leading-relaxed">
              Established with a clear mission to provide contractors and property owners with high-performing heavy machinery and timely quarry materials, <strong>Sannidhanam Earth Movers</strong> has grown into one of Thrissur's premier earthmoving operations.
            </p>

            <p className="text-sm sm:text-base text-charcoal-400 leading-relaxed">
              Whether you need an agile JCB for a residential foundation trench, a heavy 20-ton tracked excavator for extensive commercial cut-and-fill, or bulk M-Sand and boulder delivery directly from certified quarries, our fleet operates 7 days a week to ensure your job proceeds without interruption.
            </p>

            {/* 4 Core Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-white border border-charcoal-100 shadow-sm flex items-start gap-3.5">
                <div className="p-2 rounded-lg bg-yellow/15 text-charcoal-800 shrink-0">
                  <Clock className="w-5 h-5 text-yellow-600" />
                </div>
                <div>
                  <h4 className="font-heading font-bold uppercase text-sm text-charcoal-800 tracking-wider">
                    7 Days Operational
                  </h4>
                  <p className="text-xs text-charcoal-400 mt-1">
                    Work never stops on weekends. Machines and operators ready 365 days.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white border border-charcoal-100 shadow-sm flex items-start gap-3.5">
                <div className="p-2 rounded-lg bg-yellow/15 text-charcoal-800 shrink-0">
                  <Award className="w-5 h-5 text-yellow-600" />
                </div>
                <div>
                  <h4 className="font-heading font-bold uppercase text-sm text-charcoal-800 tracking-wider">
                    Certified Operators
                  </h4>
                  <p className="text-xs text-charcoal-400 mt-1">
                    Licensed veterans skilled in precision slope digging and tight urban sites.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white border border-charcoal-100 shadow-sm flex items-start gap-3.5">
                <div className="p-2 rounded-lg bg-yellow/15 text-charcoal-800 shrink-0">
                  <Wrench className="w-5 h-5 text-yellow-600" />
                </div>
                <div>
                  <h4 className="font-heading font-bold uppercase text-sm text-charcoal-800 tracking-wider">
                    Peak Fleet Health
                  </h4>
                  <p className="text-xs text-charcoal-400 mt-1">
                    Daily preventive maintenance checks prevent costly site breakdowns.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white border border-charcoal-100 shadow-sm flex items-start gap-3.5">
                <div className="p-2 rounded-lg bg-yellow/15 text-charcoal-800 shrink-0">
                  <ShieldCheck className="w-5 h-5 text-yellow-600" />
                </div>
                <div>
                  <h4 className="font-heading font-bold uppercase text-sm text-charcoal-800 tracking-wider">
                    Machines &amp; Materials
                  </h4>
                  <p className="text-xs text-charcoal-400 mt-1">
                    Complete package with direct supply of M-Sand, Aggregates &amp; Boulders.
                  </p>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={() => onNavigate('about')}
                className="px-6 py-3 rounded-lg bg-charcoal-800 hover:bg-charcoal-700 text-white font-heading font-black text-sm uppercase tracking-wider transition-all flex items-center gap-2 shadow-md"
              >
                <span>Read Full Company Profile</span>
                <ArrowRight className="w-4 h-4 text-yellow" />
              </button>

              <button
                onClick={onOpenQuoteModal}
                className="px-6 py-3 rounded-lg bg-yellow hover:bg-yellow-400 text-charcoal-900 font-heading font-black text-sm uppercase tracking-wider transition-all shadow-yellow-sm"
              >
                <span>Request Equipment Call</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
