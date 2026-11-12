import React from 'react';
import { Phone, MapPin, Clock, ArrowUpRight, ShieldCheck, Mail } from 'lucide-react';
import { COMPANY_INFO, SERVICES_DATA, BUILDING_MATERIALS } from '../../data/companyData';
import { PageRoute } from '../../types';

interface FooterProps {
  onNavigate: (page: PageRoute, targetSectionId?: string) => void;
  onOpenQuoteModal: (initialService?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenQuoteModal }) => {
  return (
    <footer className="bg-charcoal-900 border-t-4 border-yellow text-charcoal-300 relative overflow-hidden">
      {/* Industrial Grid Texture Overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#FFB800_1px,transparent_1px)] [background-size:24px_24px]"></div>

      {/* Top Banner Strip */}
      <div className="border-b border-charcoal-800 bg-charcoal-800/60 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-yellow/10 border border-yellow/30 flex items-center justify-center text-yellow">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-heading uppercase font-bold text-white tracking-wider text-base">
                  Available 7 Days a Week for Urgent Deployment
                </h4>
                <p className="text-xs text-charcoal-400">
                  Reliable operators, certified machinery, and prompt material haulage across Thrissur & Central Kerala.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <a
                href={`tel:${COMPANY_INFO.primaryPhoneRaw}`}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded bg-charcoal-700 hover:bg-charcoal-600 text-white font-heading font-bold text-xs uppercase tracking-wider transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-yellow" />
                <span>Call {COMPANY_INFO.primaryPhone}</span>
              </a>
              <button
                onClick={() => onOpenQuoteModal()}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded bg-yellow hover:bg-yellow-400 text-charcoal-900 font-heading font-black text-xs uppercase tracking-wider transition-all shadow-yellow-sm"
              >
                <span>Book Machine Now</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Column 1: Brand Info (5 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center space-x-3.5">
              <img
                src="/logo.png"
                alt="Sannidhanam Earth Movers"
                className="h-14 w-auto object-contain rounded bg-charcoal-800 p-1 border border-charcoal-700"
                onError={(e) => {
                  (e.target as HTMLElement).style.display = 'none';
                }}
              />
              <div>
                <span className="font-heading tracking-wider uppercase font-black text-2xl text-white block leading-none">
                  Sannidhanam
                </span>
                <span className="text-xs font-bold tracking-widest uppercase text-yellow font-heading">
                  Earth Movers
                </span>
              </div>
            </div>

            <p className="text-sm text-charcoal-400 leading-relaxed">
              Delivering heavy machinery strength and operational reliability to construction sites throughout Kerala. Specialized in JCB and excavator rental, site leveling, precision trenching, and certified building materials supply.
            </p>

            <div className="pt-2 space-y-2 text-xs">
              <div className="flex items-center gap-2 text-charcoal-300">
                <Clock className="w-4 h-4 text-yellow shrink-0" />
                <span>Operational Hours: Mon – Sun (6:00 AM – 9:00 PM)</span>
              </div>
              <div className="flex items-center gap-2 text-charcoal-300">
                <ShieldCheck className="w-4 h-4 text-yellow shrink-0" />
                <span>15+ Years of Site Experience &amp; Safety Compliance</span>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-heading uppercase font-bold text-white tracking-widest text-sm border-l-2 border-yellow pl-2.5">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs font-medium">
              {[
                { name: 'Home', route: 'home' as PageRoute },
                { name: 'About Us', route: 'about' as PageRoute },
                { name: 'Services Directory', route: 'services' as PageRoute },
                { name: 'Machinery Fleet', route: 'machinery' as PageRoute },
                { name: 'Featured Projects', route: 'projects' as PageRoute },
                { name: 'Contact & Booking', route: 'contact' as PageRoute },
              ].map((link) => (
                <li key={link.route}>
                  <button
                    onClick={() => {
                      onNavigate(link.route);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="hover:text-yellow text-charcoal-400 transition-colors flex items-center gap-1.5"
                  >
                    <span className="text-yellow text-base leading-none">›</span>
                    <span>{link.name}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-heading uppercase font-bold text-white tracking-widest text-sm border-l-2 border-yellow pl-2.5">
              Core Services
            </h4>
            <ul className="space-y-1.5 text-xs">
              {SERVICES_DATA.slice(0, 6).map((service) => (
                <li key={service.id}>
                  <button
                    onClick={() => onNavigate('services', service.id)}
                    className="hover:text-yellow text-charcoal-400 hover:translate-x-1 transition-all text-left flex items-center gap-1.5 group cursor-pointer w-full py-0.5"
                    title={`View ${service.title} details`}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-yellow shrink-0 group-hover:scale-125 transition-transform"></span>
                    <span className="truncate group-hover:text-white transition-colors">{service.title}</span>
                  </button>
                </li>
              ))}
            </ul>

            <div className="pt-2">
              <span className="text-[11px] font-heading font-bold text-yellow uppercase tracking-wider block mb-1">
                Quarry Materials:
              </span>
              <div className="flex flex-wrap gap-1">
                {BUILDING_MATERIALS.map((m) => (
                  <button
                    key={m.id}
                    onClick={() => onNavigate('services', m.id)}
                    className="text-[10px] px-2 py-0.5 rounded bg-charcoal-800 hover:bg-yellow hover:text-charcoal-900 border border-charcoal-700 text-charcoal-300 transition-colors cursor-pointer font-medium"
                    title={`View ${m.name} specifications`}
                  >
                    {m.name.split('/')[0].trim()}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Column 4: Contact & Office (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-heading uppercase font-bold text-white tracking-widest text-sm border-l-2 border-yellow pl-2.5">
              Head Office
            </h4>
            <div className="text-xs text-charcoal-300 space-y-3">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-yellow shrink-0 mt-0.5" />
                <address className="not-italic text-charcoal-400 leading-snug">
                  {COMPANY_INFO.address.room}<br />
                  {COMPANY_INFO.address.building}<br />
                  {COMPANY_INFO.address.city}, {COMPANY_INFO.address.state} – {COMPANY_INFO.address.pincode}
                </address>
              </div>

              <div className="space-y-1.5 pt-1">
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-yellow shrink-0" />
                  <a href={`tel:${COMPANY_INFO.primaryPhoneRaw}`} className="hover:text-yellow text-white font-semibold">
                    {COMPANY_INFO.primaryPhone}
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-yellow shrink-0" />
                  <a href={`tel:${COMPANY_INFO.secondaryPhoneRaw}`} className="hover:text-yellow text-charcoal-300">
                    {COMPANY_INFO.secondaryPhone}
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-yellow shrink-0" />
                  <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-yellow text-charcoal-400">
                    {COMPANY_INFO.email}
                  </a>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href={COMPANY_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-yellow hover:underline font-heading uppercase font-bold tracking-wider"
                >
                  <span>Open in Google Maps</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Legal & Copyright Bar */}
      <div className="border-t border-charcoal-800 bg-charcoal-900/90 py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between text-xs text-charcoal-500 gap-3">
          <p>© {new Date().getFullYear()} Sannidhanam Earth Movers. All rights reserved. Thrissur, Kerala.</p>
          <div className="flex items-center space-x-6 text-charcoal-400">
            <span>Heavy Machinery Hire</span>
            <span>•</span>
            <span>Site Excavation</span>
            <span>•</span>
            <span>Materials Supply</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
