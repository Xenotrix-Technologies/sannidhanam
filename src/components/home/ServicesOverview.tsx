import React from 'react';
import { ArrowRight, MessageSquare, Check, Sparkles } from 'lucide-react';
import { SERVICES_DATA } from '../../data/companyData';
import { PageRoute } from '../../types';
import { getServiceWhatsAppUrl } from '../../utils/whatsapp';

interface ServicesOverviewProps {
  onNavigate: (page: PageRoute) => void;
  onOpenQuoteModal: (serviceName?: string) => void;
}

export const ServicesOverview: React.FC<ServicesOverviewProps> = ({
  onNavigate,
  onOpenQuoteModal,
}) => {
  return (
    <section className="py-20 sm:py-24 bg-white text-charcoal-500 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-2 text-yellow-600 font-heading font-black uppercase tracking-widest text-xs">
              <span className="w-2.5 h-2.5 rounded bg-yellow"></span>
              <span>Our Field Capabilities</span>
            </div>
            <h2 className="font-heading font-black text-3xl sm:text-4xl md:text-5xl uppercase text-charcoal-800 tracking-tight leading-[1.05]">
              Specialized Earthmoving &amp; Site Services
            </h2>
            <div className="w-16 h-1.5 bg-yellow rounded-full"></div>
            <p className="text-sm sm:text-base text-charcoal-400 mt-2">
              From heavy cut-and-fill grading to delicate urban trenching and controlled building demolition, our fleet delivers power, precision, and speed.
            </p>
          </div>

          <button
            onClick={() => onNavigate('services')}
            className="self-start md:self-auto inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-charcoal-800 hover:bg-charcoal-700 text-white font-heading font-black text-xs uppercase tracking-wider transition-all shadow-md group shrink-0"
          >
            <span>View All Services In Detail</span>
            <ArrowRight className="w-4 h-4 text-yellow group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Services Grid (8 Services) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {SERVICES_DATA.slice(0, 6).map((service, idx) => (
            <div
              key={service.id}
              className="group bg-charcoal-50 rounded-xl overflow-hidden border border-charcoal-200/80 hover:border-yellow transition-all duration-300 hover:shadow-xl flex flex-col justify-between"
            >
              <div>
                {/* Image Container with Badges */}
                <div className="relative aspect-[16/10] overflow-hidden bg-charcoal-800">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/80 via-transparent to-transparent"></div>
                  
                  {service.badge && (
                    <div className="absolute top-3 left-3">
                      <span className="px-2.5 py-1 rounded bg-yellow text-charcoal-900 font-heading font-black text-[11px] uppercase tracking-wider shadow-sm">
                        {service.badge}
                      </span>
                    </div>
                  )}

                  <div className="absolute bottom-3 left-3 text-white">
                    <span className="font-heading font-extrabold text-xs text-yellow tracking-widest uppercase">
                      0{idx + 1} / SERVICE
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 space-y-3">
                  <h3 className="font-heading font-black uppercase text-xl text-charcoal-800 group-hover:text-yellow-600 transition-colors tracking-wide">
                    {service.title}
                  </h3>
                  
                  <p className="text-xs sm:text-sm text-charcoal-400 line-clamp-3 leading-relaxed">
                    {service.shortDesc}
                  </p>

                  <div className="pt-2 border-t border-charcoal-200/60 space-y-1.5">
                    {service.applications.slice(0, 2).map((app, aIdx) => (
                      <div key={aIdx} className="flex items-center gap-2 text-xs text-charcoal-500">
                        <Check className="w-3.5 h-3.5 text-yellow-600 shrink-0 stroke-[2.5]" />
                        <span className="truncate">{app}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="p-6 pt-0 flex items-center justify-between gap-3 border-t border-charcoal-200/60 mt-3">
                <button
                  onClick={() => onOpenQuoteModal(service.title)}
                  className="flex-1 py-2.5 px-3 rounded-lg bg-charcoal-800 hover:bg-charcoal-700 text-white font-heading font-bold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-1.5"
                >
                  <span>Book Service</span>
                  <ArrowRight className="w-3.5 h-3.5 text-yellow" />
                </button>

                <a
                  href={getServiceWhatsAppUrl(service.title)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg bg-emerald-50 hover:bg-emerald-100 text-emerald-700 border border-emerald-300 transition-colors"
                  title="Enquire on WhatsApp"
                  aria-label={`Enquire about ${service.title} on WhatsApp`}
                >
                  <MessageSquare className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Extra Strip For Materials Supply */}
        <div className="mt-10 p-6 sm:p-8 rounded-2xl bg-charcoal-800 text-white border-2 border-charcoal-700 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1.5">
            <div className="inline-flex items-center gap-1.5 text-yellow font-heading font-bold text-xs uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Direct Quarry-To-Site Deliveries</span>
            </div>
            <h3 className="font-heading font-black text-2xl uppercase tracking-wide">
              Need M-Sand, Aggregates, or Boulder Stones Delivered?
            </h3>
            <p className="text-xs sm:text-sm text-charcoal-300 max-w-2xl">
              We operate our own tipper fleet supplying washed M-Sand, P-Sand, 20mm/40mm coarse aggregates, and foundation rocks in flexible 1, 2, 3, or 5-unit batches across Thrissur.
            </p>
          </div>

          <button
            onClick={() => onOpenQuoteModal('Materials Supply: M-Sand & Aggregates')}
            className="shrink-0 px-6 py-3.5 rounded-lg bg-yellow hover:bg-yellow-400 text-charcoal-900 font-heading font-black text-sm uppercase tracking-wider transition-all shadow-yellow-sm"
          >
            Order Materials Now
          </button>
        </div>
      </div>
    </section>
  );
};

