import React from 'react';
import { Zap, Calendar, Wrench, UserCheck, PackageCheck, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { WHY_CHOOSE_US, COMPANY_INFO } from '../../data/companyData';

const iconMap: Record<string, React.ReactNode> = {
  Zap: <Zap className="w-6 h-6 text-yellow" />,
  Calendar: <Calendar className="w-6 h-6 text-yellow" />,
  Wrench: <Wrench className="w-6 h-6 text-yellow" />,
  UserCheck: <UserCheck className="w-6 h-6 text-yellow" />,
  PackageCheck: <PackageCheck className="w-6 h-6 text-yellow" />,
  ShieldCheck: <ShieldCheck className="w-6 h-6 text-yellow" />,
};

interface WhyChooseUsProps {
  onOpenQuoteModal: () => void;
}

export const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ onOpenQuoteModal }) => {
  return (
    <section className="py-20 sm:py-24 bg-charcoal-50 text-charcoal-500 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 text-yellow-600 font-heading font-black uppercase tracking-widest text-xs">
            <span className="w-2.5 h-2.5 rounded bg-yellow-500"></span>
            <span>Why Contractors Trust Sannidhanam</span>
          </div>
          <h2 className="font-heading font-black text-3xl sm:text-4xl md:text-5xl uppercase text-charcoal-800 tracking-tight leading-[1.05]">
            Built On Uncompromising Trust &amp; Performance
          </h2>
          <div className="w-16 h-1.5 bg-yellow rounded-full mx-auto"></div>
          <p className="text-sm sm:text-base text-charcoal-400">
            Construction timelines are unforgiving. That’s why we operate around the clock with well-maintained equipment and licensed veterans who get your job done right the first time.
          </p>
        </div>

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {WHY_CHOOSE_US.map((item, idx) => (
            <div
              key={idx}
              className="bg-white p-7 rounded-2xl border border-charcoal-200/90 hover:border-yellow shadow-sm hover:shadow-xl transition-all duration-300 relative group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-13 h-13 p-3 rounded-xl bg-charcoal-800 border border-charcoal-700 shadow-md group-hover:bg-yellow transition-colors">
                    {React.cloneElement(iconMap[item.icon] as React.ReactElement, {
                      className: 'w-6 h-6 text-yellow group-hover:text-charcoal-900 transition-colors',
                    })}
                  </div>
                  <span className="font-heading font-black text-xl text-charcoal-300 group-hover:text-yellow transition-colors">
                    0{idx + 1}
                  </span>
                </div>

                <h3 className="font-heading font-black uppercase text-xl text-charcoal-800 mb-2 tracking-wide group-hover:text-yellow-600 transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-charcoal-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-charcoal-100 flex items-center gap-1.5 text-xs text-yellow-600 font-semibold">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span>Guaranteed Standard</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-charcoal-900 via-charcoal-800 to-charcoal-900 border-2 border-yellow/40 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="font-heading font-black text-xl sm:text-2xl uppercase tracking-wide">
              Have an urgent requirement on your construction site?
            </h4>
            <p className="text-xs sm:text-sm text-charcoal-300">
              Direct hotline connection with our operations desk. Mobilizing machinery in hours.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href={`tel:${COMPANY_INFO.primaryPhoneRaw}`}
              className="px-5 py-3 rounded-lg bg-yellow hover:bg-yellow-400 text-charcoal-900 font-heading font-black text-xs uppercase tracking-wider transition-all shadow-yellow-sm"
            >
              Call {COMPANY_INFO.primaryPhone}
            </a>
            <button
              onClick={onOpenQuoteModal}
              className="px-5 py-3 rounded-lg bg-charcoal-700 hover:bg-charcoal-600 text-white font-heading font-bold text-xs uppercase tracking-wider border border-charcoal-600"
            >
              Get Free Estimate
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
