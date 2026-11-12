import React, { useState } from 'react';
import { ArrowRight, MessageSquare, ShieldCheck } from 'lucide-react';
import { MACHINERY_DATA } from '../../data/companyData';
import { PageRoute } from '../../types';
import { getMachineryWhatsAppUrl } from '../../utils/whatsapp';

interface MachineryShowcaseProps {
  onNavigate: (page: PageRoute) => void;
  onOpenQuoteModal: (machineName?: string) => void;
}

export const MachineryShowcase: React.FC<MachineryShowcaseProps> = ({
  onNavigate,
  onOpenQuoteModal,
}) => {
  const [filter, setFilter] = useState<'all' | 'excavator' | 'backhoe' | 'bulldozer' | 'tipper'>('all');

  const filteredMachines = filter === 'all'
    ? MACHINERY_DATA
    : MACHINERY_DATA.filter((m) => m.category === filter);

  return (
    <section className="py-20 sm:py-24 bg-charcoal-800 text-white relative overflow-hidden">
      {/* Background Graphic Grid */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#FFB800_1px,transparent_1px)] [background-size:20px_20px]"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-14 gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-2 text-yellow font-heading font-black uppercase tracking-widest text-xs">
              <span className="w-2.5 h-2.5 rounded bg-yellow"></span>
              <span>Available Fleet for Hire</span>
            </div>
            <h2 className="font-heading font-black text-3xl sm:text-4xl md:text-5xl uppercase text-white tracking-tight leading-[1.05]">
              Heavy Machinery &amp; Earthmovers
            </h2>
            <div className="w-16 h-1.5 bg-yellow rounded-full"></div>
            <p className="text-sm sm:text-base text-charcoal-300 mt-2">
              Well-maintained, fuel-efficient machinery ready for immediate mobilization to your job site with licensed, experienced heavy equipment operators.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => onNavigate('machinery')}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-charcoal-700 hover:bg-charcoal-600 text-white font-heading font-black text-xs uppercase tracking-wider transition-all border border-charcoal-600"
            >
              <span>Explore Fleet Specs</span>
              <ArrowRight className="w-4 h-4 text-yellow" />
            </button>
          </div>
        </div>

        {/* Category Filter Chips */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-2 border-b border-charcoal-700">
          {[
            { id: 'all', label: 'All Equipment' },
            { id: 'backhoe', label: 'JCB Backhoe Loaders' },
            { id: 'excavator', label: 'Tracked Excavators (Mini & Heavy)' },
            { id: 'bulldozer', label: 'Bulldozers' },
            { id: 'tipper', label: 'Tippers & Dumpers' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id as any)}
              className={`px-4 py-2 rounded-lg font-heading font-bold text-xs uppercase tracking-wider transition-all ${
                filter === tab.id
                  ? 'bg-yellow text-charcoal-900 shadow-yellow-sm'
                  : 'bg-charcoal-700/60 text-charcoal-300 hover:bg-charcoal-700 hover:text-white'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Machinery Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredMachines.map((machine, idx) => (
            <div
              key={machine.id}
              className="bg-charcoal-900 rounded-xl overflow-hidden border border-charcoal-700 hover:border-yellow/70 transition-all duration-300 hover:shadow-2xl flex flex-col justify-between group"
            >
              <div>
                {/* Image */}
                <div className="relative aspect-[16/10] overflow-hidden bg-charcoal-950">
                  <img
                    src={machine.image}
                    alt={machine.name}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900 via-transparent to-transparent"></div>

                  {/* Availability Badge */}
                  <div className="absolute top-3 right-3">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-emerald-500/90 text-white font-heading font-bold text-[10px] uppercase tracking-wider backdrop-blur-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span>
                      <span>Available Now</span>
                    </span>
                  </div>

                  <div className="absolute bottom-3 left-3">
                    <span className="font-heading font-black text-xs text-yellow tracking-widest uppercase bg-charcoal-900/80 px-2 py-0.5 rounded">
                      0{idx + 1} / {machine.model}
                    </span>
                  </div>
                </div>

                {/* Info & Specs */}
                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="font-heading font-black uppercase text-2xl text-white group-hover:text-yellow transition-colors tracking-wide">
                      {machine.name}
                    </h3>
                    <p className="text-xs text-yellow font-heading font-bold uppercase tracking-wider mt-0.5">
                      {machine.model}
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-charcoal-300 line-clamp-2 leading-relaxed">
                    {machine.description}
                  </p>

                  {/* Specs Quick Box */}
                  <div className="p-3.5 rounded-lg bg-charcoal-800/80 border border-charcoal-700 text-xs space-y-2">
                    <div className="grid grid-cols-2 gap-2 text-charcoal-300">
                      {machine.specs.operatingWeight && (
                        <div>
                          <span className="text-[10px] text-charcoal-400 uppercase font-heading block">Weight:</span>
                          <span className="font-semibold text-white">{machine.specs.operatingWeight}</span>
                        </div>
                      )}
                      {machine.specs.enginePower && (
                        <div>
                          <span className="text-[10px] text-charcoal-400 uppercase font-heading block">Power:</span>
                          <span className="font-semibold text-white">{machine.specs.enginePower}</span>
                        </div>
                      )}
                      {machine.specs.bucketCapacity && (
                        <div>
                          <span className="text-[10px] text-charcoal-400 uppercase font-heading block">Bucket:</span>
                          <span className="font-semibold text-white">{machine.specs.bucketCapacity}</span>
                        </div>
                      )}
                      {machine.specs.maxDigDepth && (
                        <div>
                          <span className="text-[10px] text-charcoal-400 uppercase font-heading block">Max Dig:</span>
                          <span className="font-semibold text-white">{machine.specs.maxDigDepth}</span>
                        </div>
                      )}
                    </div>

                    <div className="pt-2 border-t border-charcoal-700/60 flex items-center gap-1.5 text-[11px] text-yellow">
                      <ShieldCheck className="w-3.5 h-3.5 shrink-0" />
                      <span>{machine.specs.operatorType}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="p-6 pt-0 flex items-center justify-between gap-3 border-t border-charcoal-800 mt-2">
                <button
                  onClick={() => onOpenQuoteModal(`${machine.name} (${machine.model})`)}
                  className="flex-1 py-2.5 px-3 rounded-lg bg-yellow hover:bg-yellow-400 text-charcoal-900 font-heading font-black text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-1.5 shadow-yellow-sm"
                >
                  <span>Book Equipment</span>
                  <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
                </button>

                <a
                  href={getMachineryWhatsAppUrl(machine.name, machine.model)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white transition-colors"
                  title="Enquire on WhatsApp"
                  aria-label={`Enquire about ${machine.name} on WhatsApp`}
                >
                  <MessageSquare className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
