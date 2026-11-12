import React, { useState } from 'react';
import { ArrowRight, MessageSquare, ShieldCheck, Gauge, Wrench, Check, Clock } from 'lucide-react';
import { MACHINERY_DATA } from '../data/companyData';
import { getMachineryWhatsAppUrl } from '../utils/whatsapp';

interface MachineryPageProps {
  onOpenQuoteModal: (initialMachine?: string) => void;
}

export const MachineryPage: React.FC<MachineryPageProps> = ({ onOpenQuoteModal }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const filtered = activeCategory === 'all'
    ? MACHINERY_DATA
    : MACHINERY_DATA.filter((m) => m.category === activeCategory);

  return (
    <div className="pt-20 sm:pt-24 bg-charcoal-50 text-charcoal-500">
      {/* Header Banner */}
      <section className="bg-charcoal-900 text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/services/services-banner.jpg"
            alt="Heavy equipment fleet"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal-950 via-charcoal-900/95 to-charcoal-900/80"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 text-yellow font-heading font-black uppercase tracking-widest text-xs">
              <span className="w-2.5 h-2.5 rounded bg-yellow"></span>
              <span>Central Kerala Heavy Fleet</span>
            </div>
            <h1 className="font-heading font-black text-4xl sm:text-5xl md:text-6xl uppercase tracking-tight text-white leading-[1.02]">
              Heavy Machinery &amp; <br />
              <span className="text-yellow">Equipment Rental</span>
            </h1>
            <div className="w-20 h-1.5 bg-yellow rounded-full"></div>
            <p className="text-base sm:text-lg text-charcoal-200 leading-relaxed font-normal">
              Explore our modern, well-maintained earthmoving equipment. Every rental includes licensed, certified operators and rapid on-site mobilization across Thrissur.
            </p>
          </div>
        </div>
      </section>

      {/* Fleet Listing Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center gap-2 mb-12 pb-4 border-b border-charcoal-200">
            {[
              { id: 'all', label: 'All Fleet Units' },
              { id: 'backhoe', label: 'JCB Backhoe Loaders' },
              { id: 'excavator', label: 'Tracked Excavators' },
              { id: 'bulldozer', label: 'Heavy Bulldozers' },
              { id: 'breaker', label: 'Rock Breakers' },
              { id: 'tipper', label: 'Tippers & Dumpers' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id)}
                className={`px-4 sm:px-5 py-2.5 rounded-lg font-heading font-black text-xs sm:text-sm uppercase tracking-wider transition-all ${
                  activeCategory === tab.id
                    ? 'bg-charcoal-800 text-yellow shadow-md'
                    : 'bg-white text-charcoal-500 hover:bg-charcoal-100 hover:text-charcoal-800 border border-charcoal-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Machinery Cards */}
          <div className="space-y-12">
            {filtered.map((machine) => (
              <div
                key={machine.id}
                className="bg-white rounded-3xl overflow-hidden border border-charcoal-200 shadow-md hover:shadow-xl transition-all duration-300 p-6 sm:p-8"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
                  {/* Left: Image (5 cols) */}
                  <div className="lg:col-span-5">
                    <div className="relative rounded-2xl overflow-hidden aspect-[16/11] bg-charcoal-900 shadow-md">
                      <img
                        src={machine.image}
                        alt={machine.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/75 via-transparent to-transparent"></div>

                      <div className="absolute top-4 left-4">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-600 text-white font-heading font-bold text-xs uppercase tracking-wider shadow-sm">
                          <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span>
                          <span>Ready for Deployment</span>
                        </span>
                      </div>

                      <div className="absolute bottom-4 left-4 text-white">
                        <span className="font-heading font-black text-xs text-yellow tracking-widest uppercase">
                          MODEL: {machine.model}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Right: Technical Specs & Details (7 cols) */}
                  <div className="lg:col-span-7 space-y-4">
                    <div>
                      <div className="flex items-center justify-between">
                        <h2 className="font-heading font-black uppercase text-2xl sm:text-3xl text-charcoal-800 tracking-wide">
                          {machine.name}
                        </h2>
                        <span className="text-xs font-heading font-bold uppercase px-3 py-1 rounded bg-charcoal-100 text-charcoal-700">
                          {machine.category}
                        </span>
                      </div>
                      <p className="text-xs font-heading font-bold uppercase text-yellow-600 tracking-wider mt-0.5">
                        {machine.tagline}
                      </p>
                    </div>

                    <p className="text-xs sm:text-sm text-charcoal-500 leading-relaxed">
                      {machine.description}
                    </p>

                    {/* Technical Specifications Grid */}
                    <div className="p-4 rounded-xl bg-charcoal-50 border border-charcoal-200">
                      <h4 className="font-heading font-bold uppercase text-xs text-charcoal-700 tracking-wider mb-2.5 flex items-center gap-1.5">
                        <Gauge className="w-4 h-4 text-yellow-600" />
                        <span>Technical Machine Specifications</span>
                      </h4>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
                        {machine.specs.operatingWeight && (
                          <div className="bg-white p-2.5 rounded border border-charcoal-100">
                            <span className="text-[10px] text-charcoal-400 font-heading uppercase block">Weight:</span>
                            <span className="font-bold text-charcoal-800">{machine.specs.operatingWeight}</span>
                          </div>
                        )}
                        {machine.specs.enginePower && (
                          <div className="bg-white p-2.5 rounded border border-charcoal-100">
                            <span className="text-[10px] text-charcoal-400 font-heading uppercase block">Power:</span>
                            <span className="font-bold text-charcoal-800">{machine.specs.enginePower}</span>
                          </div>
                        )}
                        {machine.specs.bucketCapacity && (
                          <div className="bg-white p-2.5 rounded border border-charcoal-100">
                            <span className="text-[10px] text-charcoal-400 font-heading uppercase block">Bucket:</span>
                            <span className="font-bold text-charcoal-800">{machine.specs.bucketCapacity}</span>
                          </div>
                        )}
                        {machine.specs.maxDigDepth && (
                          <div className="bg-white p-2.5 rounded border border-charcoal-100">
                            <span className="text-[10px] text-charcoal-400 font-heading uppercase block">Dig Depth:</span>
                            <span className="font-bold text-charcoal-800">{machine.specs.maxDigDepth}</span>
                          </div>
                        )}
                        {machine.specs.bladeCapacity && (
                          <div className="bg-white p-2.5 rounded border border-charcoal-100">
                            <span className="text-[10px] text-charcoal-400 font-heading uppercase block">Blade:</span>
                            <span className="font-bold text-charcoal-800">{machine.specs.bladeCapacity}</span>
                          </div>
                        )}
                        {machine.specs.payloadCapacity && (
                          <div className="bg-white p-2.5 rounded border border-charcoal-100">
                            <span className="text-[10px] text-charcoal-400 font-heading uppercase block">Payload:</span>
                            <span className="font-bold text-charcoal-800">{machine.specs.payloadCapacity}</span>
                          </div>
                        )}
                      </div>

                      <div className="pt-2.5 mt-2.5 border-t border-charcoal-200 flex items-center gap-1.5 text-xs text-charcoal-700 font-medium">
                        <ShieldCheck className="w-4 h-4 text-yellow-600 shrink-0" />
                        <span>{machine.specs.operatorType}</span>
                      </div>
                    </div>

                    {/* Features Chips */}
                    <div className="flex flex-wrap gap-2 text-xs">
                      {machine.features.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-center gap-1.5 text-charcoal-600 bg-white px-2.5 py-1 rounded-md border border-charcoal-200">
                          <Check className="w-3.5 h-3.5 text-yellow-600 shrink-0 stroke-[2.5]" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>

                    {/* Hire Modes & Buttons */}
                    <div className="pt-3 flex flex-wrap items-center justify-between gap-4 border-t border-charcoal-100">
                      <div className="flex items-center gap-1 text-xs text-charcoal-400">
                        <Clock className="w-3.5 h-3.5 text-yellow-600 shrink-0" />
                        <span>Hire Modes: Hourly, Daily Shift, Weekly &amp; Monthly Contracts</span>
                      </div>

                      <div className="flex items-center gap-3">
                        <button
                          onClick={() => onOpenQuoteModal(`${machine.name} (${machine.model})`)}
                          className="px-5 py-2.5 rounded-lg bg-charcoal-800 hover:bg-charcoal-700 text-white font-heading font-black text-xs uppercase tracking-wider transition-colors flex items-center gap-1.5 shadow-md"
                        >
                          <span>Book Machine</span>
                          <ArrowRight className="w-3.5 h-3.5 text-yellow" />
                        </button>

                        <a
                          href={getMachineryWhatsAppUrl(machine.name, machine.model)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-4 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-heading font-bold text-xs uppercase tracking-wider transition-colors flex items-center gap-2 shadow-sm"
                        >
                          <MessageSquare className="w-3.5 h-3.5" />
                          <span>WhatsApp Availability</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fleet Standards Banner */}
      <section className="py-14 bg-charcoal-900 text-white border-t border-charcoal-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center sm:text-left">
            <div className="flex items-start gap-3.5">
              <div className="p-3 rounded-xl bg-charcoal-800 text-yellow border border-charcoal-700 shrink-0">
                <Wrench className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-heading font-bold uppercase text-base text-white">
                  Zero Downtime Protocol
                </h4>
                <p className="text-xs text-charcoal-300 mt-1">
                  Mobile mechanic and spare parts van mobilized on-site in case of any technical snag.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3.5">
              <div className="p-3 rounded-xl bg-charcoal-800 text-yellow border border-charcoal-700 shrink-0">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-heading font-bold uppercase text-base text-white">
                  Certified Heavy Drivers
                </h4>
                <p className="text-xs text-charcoal-300 mt-1">
                  Fully licensed, safety-trained operators who respect building lines and neighbor property.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3.5">
              <div className="p-3 rounded-xl bg-charcoal-800 text-yellow border border-charcoal-700 shrink-0">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-heading font-bold uppercase text-base text-white">
                  7-Day Mobilization
                </h4>
                <p className="text-xs text-charcoal-300 mt-1">
                  Immediate dispatch on Sundays and holidays so critical project milestones are met.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
