import React, { useEffect, useState, useRef } from 'react';
import { STATS_DATA } from '../../data/companyData';

export const StatsSection: React.FC = () => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
        }
      },
      { threshold: 0.25 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <section ref={sectionRef} className="py-16 sm:py-20 bg-charcoal-900 border-y-2 border-charcoal-700 text-white relative overflow-hidden">
      {/* Background Subtle Grid Texture */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none bg-[radial-gradient(#FFB800_1px,transparent_1px)] [background-size:24px_24px]"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {STATS_DATA.map((stat) => (
            <div
              key={stat.id}
              className="p-6 rounded-2xl bg-charcoal-800/80 border border-charcoal-700 hover:border-yellow/60 transition-all duration-300 relative group"
            >
              <div className="font-heading font-black text-4xl sm:text-5xl lg:text-6xl text-yellow tracking-tight leading-none">
                {stat.value}{stat.suffix}
              </div>

              <div className="h-1 w-10 bg-yellow rounded-full mt-3 mb-2 group-hover:w-16 transition-all duration-300"></div>

              <h4 className="font-heading font-black uppercase text-base sm:text-lg text-white tracking-wide">
                {stat.label}
              </h4>

              <p className="text-xs text-charcoal-400 mt-1 leading-relaxed">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
