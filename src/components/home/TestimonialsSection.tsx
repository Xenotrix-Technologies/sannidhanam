import React from 'react';
import { Star, Quote } from 'lucide-react';
import { TESTIMONIALS_DATA } from '../../data/companyData';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-20 sm:py-24 bg-charcoal-50 text-charcoal-500 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 text-yellow-600 font-heading font-black uppercase tracking-widest text-xs">
            <span className="w-2.5 h-2.5 rounded bg-yellow-500"></span>
            <span>Client Feedback &amp; Reviews</span>
          </div>
          <h2 className="font-heading font-black text-3xl sm:text-4xl md:text-5xl uppercase text-charcoal-800 tracking-tight leading-[1.05]">
            Trusted By Contractors Across Kerala
          </h2>
          <div className="w-16 h-1.5 bg-yellow rounded-full mx-auto"></div>
          <p className="text-sm sm:text-base text-charcoal-400">
            Read what civil contractors, project engineers, and private builders say about our machine reliability, operator discipline, and materials supply.
          </p>
        </div>

        {/* Testimonials Grid (4 Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {TESTIMONIALS_DATA.map((t) => (
            <div
              key={t.id}
              className="bg-white p-7 sm:p-8 rounded-2xl border border-charcoal-200/90 hover:border-yellow shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between relative group"
            >
              <div>
                {/* Rating & Quote Icon */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow text-yellow" />
                    ))}
                  </div>
                  <Quote className="w-7 h-7 text-charcoal-200 group-hover:text-yellow transition-colors" />
                </div>

                <p className="text-sm sm:text-base text-charcoal-600 leading-relaxed italic mb-6">
                  "{t.quote}"
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-4 border-t border-charcoal-100 flex items-center justify-between">
                <div>
                  <h4 className="font-heading font-bold uppercase text-base text-charcoal-800 tracking-wide">
                    {t.author}
                  </h4>
                  <p className="text-xs text-charcoal-400 font-medium">
                    {t.role} • <span className="text-yellow-600 font-semibold">{t.project}</span>
                  </p>
                </div>

                <div className="text-right">
                  <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-charcoal-100 text-charcoal-600">
                    📍 {t.location}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
