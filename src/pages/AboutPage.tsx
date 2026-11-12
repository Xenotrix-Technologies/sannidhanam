import React from 'react';
import { ShieldCheck, Users, Wrench, CheckCircle2, Clock, Phone } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';
import { PageRoute } from '../types';

interface AboutPageProps {
  onNavigate?: (page: PageRoute) => void;
  onOpenQuoteModal: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onOpenQuoteModal }) => {
  return (
    <div className="pt-20 sm:pt-24 bg-white text-charcoal-500">
      {/* Page Header Banner */}
      <section className="bg-charcoal-900 text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/services/services-banner.jpg"
            alt="Construction machinery"
            className="w-full h-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal-950 via-charcoal-900/90 to-charcoal-900/80"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 text-yellow font-heading font-black uppercase tracking-widest text-xs">
              <span className="w-2.5 h-2.5 rounded bg-yellow"></span>
              <span>Our Heritage &amp; Operational Standards</span>
            </div>
            <h1 className="font-heading font-black text-4xl sm:text-5xl md:text-6xl uppercase tracking-tight text-white leading-[1.02]">
              About Sannidhanam <br />
              <span className="text-yellow">Earth Movers</span>
            </h1>
            <div className="w-20 h-1.5 bg-yellow rounded-full"></div>
            <p className="text-base sm:text-lg text-charcoal-200 leading-relaxed font-normal">
              For over 15 years, Sannidhanam Earth Movers has been the backbone of civil construction, commercial developments, and private residential groundworks across Thrissur and Central Kerala.
            </p>
          </div>
        </div>
      </section>

      {/* Main Story & Experience */}
      <section className="py-20 bg-charcoal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-heading font-black uppercase text-yellow-600 tracking-widest">
                  Our Journey &amp; Legacy
                </span>
                <h2 className="font-heading font-black text-3xl sm:text-4xl uppercase text-charcoal-800 tracking-tight leading-[1.1]">
                  From a Single Machine to Central Kerala's Trusted Heavy Fleet
                </h2>
                <div className="w-16 h-1 bg-yellow rounded-full"></div>
              </div>

              <p className="text-sm sm:text-base text-charcoal-500 leading-relaxed">
                Founded with a straightforward philosophy—delivering raw mechanical power paired with genuine reliability—<strong>Sannidhanam Earth Movers</strong> has steadily expanded from an initial backhoe loader service into a comprehensive earthmoving contractor and quarry materials supplier.
              </p>

              <p className="text-sm sm:text-base text-charcoal-500 leading-relaxed">
                Headquartered at KM Complex, SM Junction, Thrissur, our depot houses a modern fleet of JCB backhoe loaders, mini and heavy tracked Hitachi excavators, high-horsepower bulldozers, and multi-axle tipper trucks. By operating <strong>7 days a week, 365 days a year</strong>, we eliminate the weekend dead-time that plagues civil contracting schedules.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-white border border-charcoal-200">
                  <div className="font-heading font-black text-3xl text-yellow-600">1,250+</div>
                  <div className="font-heading font-bold uppercase text-xs text-charcoal-800 mt-1">
                    Completed Sites
                  </div>
                  <p className="text-[11px] text-charcoal-400 mt-0.5">Commercial, residential, and PWD roads</p>
                </div>
                <div className="p-4 rounded-xl bg-white border border-charcoal-200">
                  <div className="font-heading font-black text-3xl text-yellow-600">100%</div>
                  <div className="font-heading font-bold uppercase text-xs text-charcoal-800 mt-1">
                    Direct Ownership
                  </div>
                  <p className="text-[11px] text-charcoal-400 mt-0.5">Zero middlemen commissions or markups</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-charcoal-800">
                <img
                  src="/vehicles/hitachi-heavy.jpg"
                  alt="Hitachi Excavator in action"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <span className="font-heading font-bold text-xs uppercase tracking-widest text-yellow block">
                    Field Proven
                  </span>
                  <p className="font-heading font-black text-xl uppercase mt-1">
                    Masters of Challenging Soil &amp; Laterite Rock
                  </p>
                </div>
              </div>

              <div className="hidden sm:block absolute -bottom-5 -left-5 bg-charcoal-800 p-4 rounded-xl border border-yellow text-white shadow-xl max-w-xs">
                <div className="flex items-center gap-2 text-yellow font-heading font-black text-sm uppercase">
                  <Clock className="w-4 h-4" />
                  <span>Sunday to Monday</span>
                </div>
                <p className="text-xs text-charcoal-300 mt-1">
                  Active machinery on your site all 7 days of the week.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, and Core Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <span className="text-xs font-heading font-black uppercase text-yellow-600 tracking-widest">
              Guiding Principles
            </span>
            <h2 className="font-heading font-black text-3xl sm:text-4xl uppercase text-charcoal-800 tracking-tight">
              Mission, Vision &amp; Core Values
            </h2>
            <div className="w-16 h-1 bg-yellow rounded-full mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-charcoal-50 border border-charcoal-200/90 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-charcoal-800 text-yellow flex items-center justify-center font-black font-heading text-xl">
                01
              </div>
              <h3 className="font-heading font-black uppercase text-2xl text-charcoal-800 tracking-wide">
                Our Mission
              </h3>
              <p className="text-sm text-charcoal-400 leading-relaxed">
                To empower construction and infrastructure projects with dependable, fuel-efficient heavy machinery and high-grade quarry materials delivered on time, with safety, precision, and honest direct pricing.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-charcoal-50 border border-charcoal-200/90 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-charcoal-800 text-yellow flex items-center justify-center font-black font-heading text-xl">
                02
              </div>
              <h3 className="font-heading font-black uppercase text-2xl text-charcoal-800 tracking-wide">
                Our Vision
              </h3>
              <p className="text-sm text-charcoal-400 leading-relaxed">
                To be Central Kerala’s most trusted earthmoving partner—renowned for zero downtime, impeccably maintained equipment, ethical customer relationships, and rapid emergency site support.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-charcoal-50 border border-charcoal-200/90 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-charcoal-800 text-yellow flex items-center justify-center font-black font-heading text-xl">
                03
              </div>
              <h3 className="font-heading font-black uppercase text-2xl text-charcoal-800 tracking-wide">
                Core Values
              </h3>
              <ul className="text-xs sm:text-sm text-charcoal-500 space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-yellow-600 shrink-0" />
                  <span><strong>Safety First:</strong> Zero compromise on site protocols.</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-yellow-600 shrink-0" />
                  <span><strong>Operational Punctuality:</strong> Mobilization on schedule.</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-yellow-600 shrink-0" />
                  <span><strong>Transparent Rates:</strong> Clear fuel &amp; shift logs.</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-yellow-600 shrink-0" />
                  <span><strong>Operator Excellence:</strong> Licensed, disciplined crews.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Workforce & Machinery Maintenance Standards */}
      <section className="py-20 bg-charcoal-900 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-heading font-black uppercase text-yellow tracking-widest">
                  Engineering Discipline
                </span>
                <h2 className="font-heading font-black text-3xl sm:text-4xl md:text-5xl uppercase tracking-tight leading-[1.08]">
                  Licensed Operators &amp; Daily Fleet Inspections
                </h2>
                <div className="w-16 h-1 bg-yellow rounded-full"></div>
              </div>

              <p className="text-sm sm:text-base text-charcoal-300 leading-relaxed">
                Even the most powerful hydraulic excavator is only as effective as the technician behind the controls. At Sannidhanam Earth Movers, our heavy machinery operators are seasoned professionals with over a decade of hands-on experience navigating Kerala's steep hillsides, waterlogged monsoon mud, and densely populated residential streets.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3 p-4 rounded-xl bg-charcoal-800/90 border border-charcoal-700">
                  <Wrench className="w-5 h-5 text-yellow shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-heading font-bold uppercase text-sm text-white">
                      Preventative Daily Servicing
                    </h4>
                    <p className="text-xs text-charcoal-400 mt-0.5">
                      Hydraulic pressure tests, track tensioning, filter replacements, and lubrication are conducted daily to preempt mechanical failures.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 rounded-xl bg-charcoal-800/90 border border-charcoal-700">
                  <Users className="w-5 h-5 text-yellow shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-heading font-bold uppercase text-sm text-white">
                      Site-Aware Operators
                    </h4>
                    <p className="text-xs text-charcoal-400 mt-0.5">
                      Trained in laser grading, avoiding underground sewer/fiber lines, and respecting neighboring boundary walls.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 rounded-xl bg-charcoal-800/90 border border-charcoal-700">
                  <ShieldCheck className="w-5 h-5 text-yellow shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-heading font-bold uppercase text-sm text-white">
                      Rapid On-Call Mechanics
                    </h4>
                    <p className="text-xs text-charcoal-400 mt-0.5">
                      Mobile service vehicle carries spare hydraulic hoses, fittings, and tooling to handle immediate field repairs.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative rounded-2xl overflow-hidden border-2 border-charcoal-700 aspect-video lg:aspect-square">
              <img
                src="/vehicles/jcb-3dx.jpg"
                alt="JCB heavy backhoe loader operating"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <span className="font-heading font-bold text-xs uppercase tracking-widest text-yellow">
                  Thrissur Fleet Depot
                </span>
                <p className="font-heading font-black text-xl uppercase text-white mt-1">
                  Ready to deploy 7 days a week
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-yellow text-charcoal-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-heading font-black text-2xl sm:text-3xl uppercase tracking-tight">
              Ready to Work With Kerala's Earthmoving Specialists?
            </h3>
            <p className="text-sm font-medium text-charcoal-800 mt-1">
              Contact our depot at KM Complex, SM Junction, Thrissur for immediate equipment scheduling.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href={`tel:${COMPANY_INFO.primaryPhoneRaw}`}
              className="px-6 py-3.5 rounded-lg bg-charcoal-900 hover:bg-charcoal-800 text-white font-heading font-black text-xs uppercase tracking-wider transition-colors flex items-center gap-2 shadow-lg"
            >
              <Phone className="w-4 h-4 text-yellow" />
              <span>Call {COMPANY_INFO.primaryPhone}</span>
            </a>
            <button
              onClick={onOpenQuoteModal}
              className="px-6 py-3.5 rounded-lg bg-white hover:bg-charcoal-100 text-charcoal-900 font-heading font-black text-xs uppercase tracking-wider transition-colors shadow-md"
            >
              Book Equipment
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
