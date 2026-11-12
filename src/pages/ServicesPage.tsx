import React, { useState } from 'react';
import { Check, ArrowRight, MessageSquare, Phone, Truck, Sparkles } from 'lucide-react';
import { SERVICES_DATA, BUILDING_MATERIALS, COMPANY_INFO } from '../data/companyData';
import { getServiceWhatsAppUrl, getMaterialWhatsAppUrl } from '../utils/whatsapp';

interface ServicesPageProps {
  onOpenQuoteModal: (initialService?: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onOpenQuoteModal }) => {
  const [selectedMaterialUnit, setSelectedMaterialUnit] = useState<Record<string, string>>({
    rocks: '2 Units',
    'crushed-metals': '3 Units',
    'baby-metals': '2 Units',
    'm-sand': '5 Units',
    'p-sand': '2 Units',
    slurry: '1 Unit',
  });

  const handleUnitSelect = (matId: string, unit: string) => {
    setSelectedMaterialUnit((prev) => ({ ...prev, [matId]: unit }));
  };

  return (
    <div className="pt-20 sm:pt-24 bg-charcoal-50 text-charcoal-500">
      {/* Header Banner */}
      <section className="bg-charcoal-900 text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/services/services-banner.jpg"
            alt="Excavation and earthmoving site"
            className="w-full h-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal-950 via-charcoal-900/95 to-charcoal-900/80"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 text-yellow font-heading font-black uppercase tracking-widest text-xs">
              <span className="w-2.5 h-2.5 rounded bg-yellow"></span>
              <span>Comprehensive Field Solutions</span>
            </div>
            <h1 className="font-heading font-black text-4xl sm:text-5xl md:text-6xl uppercase tracking-tight text-white leading-[1.02]">
              Our Services &amp; <br />
              <span className="text-yellow">Site Solutions</span>
            </h1>
            <div className="w-20 h-1.5 bg-yellow rounded-full"></div>
            <p className="text-base sm:text-lg text-charcoal-200 leading-relaxed font-normal">
              From heavy cut-and-fill grading to delicate urban trenching, building demolition, and quarry-fresh building materials, we supply everything your site needs under one trusted roof.
            </p>
          </div>
        </div>
      </section>

      {/* Services List Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {SERVICES_DATA.map((service, index) => {
            const isReversed = index % 2 !== 0;
            return (
              <div
                key={service.id}
                id={service.id}
                className="bg-white rounded-3xl overflow-hidden border border-charcoal-200 shadow-md hover:shadow-xl transition-all duration-300 p-6 sm:p-10"
              >
                <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center ${isReversed ? 'lg:flex-row-reverse' : ''}`}>
                  {/* Image Column (5 cols) */}
                  <div className={`lg:col-span-5 ${isReversed ? 'lg:order-2' : 'lg:order-1'}`}>
                    <div className="relative rounded-2xl overflow-hidden aspect-[16/11] bg-charcoal-900 shadow-lg border border-charcoal-200">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/70 via-transparent to-transparent"></div>
                      
                      {service.badge && (
                        <div className="absolute top-4 left-4">
                          <span className="px-3 py-1 rounded bg-yellow text-charcoal-900 font-heading font-black text-xs uppercase tracking-wider shadow-sm">
                            {service.badge}
                          </span>
                        </div>
                      )}

                      <div className="absolute bottom-4 left-4 text-white">
                        <span className="font-heading font-black text-xs text-yellow tracking-widest uppercase">
                          0{index + 1} / SERVICE SPECIFICATION
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Content Column (7 cols) */}
                  <div className={`lg:col-span-7 space-y-5 ${isReversed ? 'lg:order-1' : 'lg:order-2'}`}>
                    <div>
                      <h2 className="font-heading font-black uppercase text-2xl sm:text-3xl text-charcoal-800 tracking-wide">
                        {service.title}
                      </h2>
                      <div className="w-12 h-1 bg-yellow rounded-full mt-2"></div>
                    </div>

                    <p className="text-sm sm:text-base text-charcoal-500 leading-relaxed font-normal">
                      {service.fullDesc}
                    </p>

                    {/* Applications & Key Benefits Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                      <div className="p-4 rounded-xl bg-charcoal-50 border border-charcoal-100">
                        <h4 className="font-heading font-bold uppercase text-xs text-charcoal-800 tracking-wider mb-2.5 flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-yellow"></span>
                          <span>Site Applications</span>
                        </h4>
                        <ul className="space-y-1.5 text-xs text-charcoal-500">
                          {service.applications.map((app, aIdx) => (
                            <li key={aIdx} className="flex items-start gap-1.5">
                              <Check className="w-3.5 h-3.5 text-yellow-600 shrink-0 mt-0.5" />
                              <span>{app}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="p-4 rounded-xl bg-charcoal-50 border border-charcoal-100">
                        <h4 className="font-heading font-bold uppercase text-xs text-charcoal-800 tracking-wider mb-2.5 flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-yellow"></span>
                          <span>Key Advantages</span>
                        </h4>
                        <ul className="space-y-1.5 text-xs text-charcoal-500">
                          {service.keyBenefits.map((b, bIdx) => (
                            <li key={bIdx} className="flex items-start gap-1.5">
                              <Check className="w-3.5 h-3.5 text-yellow-600 shrink-0 mt-0.5" />
                              <span>{b}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Machinery Recommended */}
                    <div className="pt-1 flex flex-wrap items-center gap-2 text-xs">
                      <span className="font-heading font-bold uppercase text-charcoal-400">Deployed Fleet:</span>
                      {service.recommendedMachinery.map((m, mIdx) => (
                        <span
                          key={mIdx}
                          className="px-2.5 py-1 rounded bg-charcoal-100 font-medium text-charcoal-700"
                        >
                          {m}
                        </span>
                      ))}
                    </div>

                    {/* Actions */}
                    <div className="pt-3 flex flex-wrap items-center gap-3">
                      <button
                        onClick={() => onOpenQuoteModal(service.title)}
                        className="px-6 py-3 rounded-lg bg-charcoal-800 hover:bg-charcoal-700 text-white font-heading font-black text-xs uppercase tracking-wider transition-all flex items-center gap-2 shadow-md"
                      >
                        <span>Book Service for Site</span>
                        <ArrowRight className="w-4 h-4 text-yellow" />
                      </button>

                      <a
                        href={getServiceWhatsAppUrl(service.title)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-5 py-3 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-heading font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-2 shadow-sm"
                      >
                        <MessageSquare className="w-4 h-4" />
                        <span>Enquire on WhatsApp</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Building Materials Supply Deep Dive Section */}
      <section className="py-20 bg-charcoal-900 text-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <div className="inline-flex items-center gap-2 text-yellow font-heading font-black uppercase tracking-widest text-xs">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Certified Quarry Supply</span>
              </div>
              <h2 className="font-heading font-black text-3xl sm:text-4xl md:text-5xl uppercase tracking-tight text-white leading-[1.05]">
                Building Materials &amp; Aggregates
              </h2>
              <div className="w-16 h-1 bg-yellow rounded-full"></div>
              <p className="text-sm sm:text-base text-charcoal-300 mt-2">
                Delivering high-grade, double-washed M-Sand, structural granite aggregates, and foundation rocks directly to your site with our dedicated multi-axle tippers.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-charcoal-800 border border-charcoal-700 text-xs text-charcoal-300 space-y-1 max-w-xs">
              <div className="font-heading font-bold uppercase text-yellow flex items-center gap-1.5">
                <Truck className="w-4 h-4" />
                <span>Flexible Transport Load Units</span>
              </div>
              <p>Choose 1, 2, 3, or 5-unit deliveries based on your project storage capacity.</p>
            </div>
          </div>

          {/* Materials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {BUILDING_MATERIALS.map((mat) => {
              const currentUnit = selectedMaterialUnit[mat.id] || mat.deliveryUnits[0];
              return (
                <div
                  key={mat.id}
                  className="group bg-charcoal-800 rounded-2xl overflow-hidden border border-charcoal-700 hover:border-yellow transition-all duration-300 flex flex-col justify-between hover:shadow-2xl"
                >
                  <div>
                    {/* Real Material Photographic Preview */}
                    <div className="relative aspect-[16/10] overflow-hidden bg-charcoal-900 border-b border-charcoal-700/80">
                      <img
                        src={mat.image}
                        alt={mat.name}
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/80 via-transparent to-transparent"></div>
                      <div className="absolute top-3 right-3">
                        <span className="text-[11px] font-heading font-black uppercase tracking-wider px-2.5 py-1 rounded bg-charcoal-950/90 backdrop-blur-md text-yellow border border-yellow/30 shadow-md">
                          {mat.category}
                        </span>
                      </div>
                      <div className="absolute bottom-3 left-4">
                        <span className="text-[10px] font-heading font-bold uppercase tracking-widest text-charcoal-300 flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-yellow"></span>
                          <span>Certified Quarry Stock</span>
                        </span>
                      </div>
                    </div>

                    <div className="p-6 sm:p-7 space-y-3">
                      <h3 className="font-heading font-black uppercase text-xl text-white tracking-wide">
                        {mat.name}
                      </h3>

                      <p className="text-xs sm:text-sm text-charcoal-300 leading-relaxed">
                        {mat.description}
                      </p>

                      <div className="pt-1 text-xs text-charcoal-400">
                        <strong className="text-charcoal-200">Ideal For:</strong> {mat.applications}
                      </div>

                      {/* Unit Selector Chips */}
                      <div className="pt-3 border-t border-charcoal-700/80">
                        <label className="block text-[11px] font-heading font-bold uppercase text-charcoal-400 mb-2">
                          Select Delivery Size:
                        </label>
                        <div className="grid grid-cols-4 gap-1.5">
                          {mat.deliveryUnits.map((u) => (
                            <button
                              key={u}
                              type="button"
                              onClick={() => handleUnitSelect(mat.id, u)}
                              className={`py-1.5 px-1 rounded text-center text-xs font-heading font-bold uppercase transition-all ${
                                currentUnit === u
                                  ? 'bg-yellow text-charcoal-900 shadow-yellow-sm font-black'
                                  : 'bg-charcoal-700/80 text-charcoal-300 hover:bg-charcoal-700'
                              }`}
                            >
                              {u}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* WhatsApp Direct Order Button */}
                  <div className="px-6 pb-6 sm:px-7 sm:pb-7 pt-0">
                    <a
                      href={getMaterialWhatsAppUrl(mat.name, currentUnit)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-2.5 px-3 rounded-lg bg-yellow hover:bg-yellow-400 text-charcoal-900 font-heading font-black text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-yellow-sm"
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                      <span>Order {currentUnit} on WhatsApp</span>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Booking Help Strip */}
      <section className="py-14 bg-charcoal-100 text-charcoal-700 border-t border-charcoal-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1">
            <h3 className="font-heading font-black text-2xl uppercase tracking-wide text-charcoal-900">
              Need assistance selecting the right machine or material volume?
            </h3>
            <p className="text-xs sm:text-sm text-charcoal-500">
              Speak directly with our operations dispatch engineer. We provide site-specific estimates free of charge.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href={`tel:${COMPANY_INFO.primaryPhoneRaw}`}
              className="px-6 py-3.5 rounded-lg bg-charcoal-800 hover:bg-charcoal-700 text-white font-heading font-black text-xs uppercase tracking-wider flex items-center gap-2 shadow-md"
            >
              <Phone className="w-4 h-4 text-yellow" />
              <span>Call {COMPANY_INFO.primaryPhone}</span>
            </a>
            <button
              onClick={() => onOpenQuoteModal()}
              className="px-6 py-3.5 rounded-lg bg-yellow hover:bg-yellow-400 text-charcoal-900 font-heading font-black text-xs uppercase tracking-wider transition-all shadow-yellow-sm"
            >
              Request Site Visit
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
