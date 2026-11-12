import React, { useState, useEffect } from 'react';
import { Phone, MessageSquare, Menu, X, ArrowUpRight, ShieldCheck } from 'lucide-react';
import { COMPANY_INFO } from '../../data/companyData';
import { PageRoute } from '../../types';
import { getWhatsAppUrl } from '../../utils/whatsapp';

interface HeaderProps {
  currentPage: PageRoute;
  onNavigate: (page: PageRoute) => void;
  onOpenQuoteModal: (initialService?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentPage,
  onNavigate,
  onOpenQuoteModal,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: { name: string; route: PageRoute }[] = [
    { name: 'Home', route: 'home' },
    { name: 'About', route: 'about' },
    { name: 'Services', route: 'services' },
    { name: 'Machinery Fleet', route: 'machinery' },
    { name: 'Projects', route: 'projects' },
    { name: 'Contact', route: 'contact' },
  ];

  const handleNavClick = (route: PageRoute) => {
    onNavigate(route);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Main Navbar */}
      <div
        className={`transition-all duration-300 ${
          isScrolled
            ? 'bg-charcoal-900/98 backdrop-blur-md shadow-2xl py-3 border-b border-charcoal-700'
            : 'bg-charcoal-900/90 backdrop-blur-sm py-4 border-b border-charcoal-800'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Company Brand & Logo */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center space-x-3.5 text-left group focus:outline-none"
          >
            <div className="relative">
              <img
                src="/logo.png"
                alt="Sannidhanam Earth Movers Logo"
                className="h-12 w-auto object-contain rounded bg-charcoal-900/40 p-0.5 border border-charcoal-600 group-hover:border-yellow transition-all"
                onError={(e) => {
                  (e.target as HTMLElement).style.display = 'none';
                  const fallback = document.getElementById('nav-logo-fallback');
                  if (fallback) fallback.style.display = 'flex';
                }}
              />
              <div
                id="nav-logo-fallback"
                className="hidden h-12 w-12 rounded bg-yellow text-charcoal-900 font-extrabold items-center justify-center font-heading text-2xl shadow-yellow-sm"
              >
                S
              </div>
            </div>

            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-heading tracking-wider uppercase font-black text-xl sm:text-2xl text-white group-hover:text-yellow transition-colors leading-none">
                  Sannidhanam
                </span>
                <span className="inline-block w-2 h-2 rounded-full bg-yellow animate-pulse"></span>
              </div>
              <div className="text-[11px] sm:text-xs font-semibold tracking-widest uppercase text-yellow font-heading flex items-center gap-1.5 mt-0.5">
                <span>Earth Movers</span>
                <span className="text-charcoal-500">•</span>
                <span className="text-charcoal-300 font-normal">Heavy Equipment</span>
              </div>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navLinks.map((link) => {
              const isActive = currentPage === link.route;
              return (
                <button
                  key={link.route}
                  onClick={() => handleNavClick(link.route)}
                  className={`px-3.5 py-2 text-sm font-semibold tracking-wide uppercase font-heading transition-all rounded-md relative ${
                    isActive
                      ? 'text-yellow bg-charcoal-700/60'
                      : 'text-charcoal-200 hover:text-white hover:bg-charcoal-700/30'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-yellow rounded-full shadow-yellow-sm"></span>
                  )}
                </button>
              );
            })}
          </nav>

          {/* Header Action Buttons */}
          <div className="hidden sm:flex items-center space-x-3">
            <a
              href={`tel:${COMPANY_INFO.primaryPhoneRaw}`}
              className="hidden xl:flex items-center gap-2 px-3 py-2 rounded border border-charcoal-600 bg-charcoal-700/50 hover:bg-charcoal-700 text-charcoal-100 text-xs font-medium transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-yellow" />
              <span>{COMPANY_INFO.primaryPhone}</span>
            </a>

            <button
              onClick={() => onOpenQuoteModal()}
              className="inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded font-heading font-bold text-sm tracking-wider uppercase bg-yellow hover:bg-yellow-400 text-charcoal-900 transition-all duration-200 shadow-yellow-sm hover:shadow-yellow-glow transform hover:-translate-y-0.5"
            >
              <span>Get Free Quote</span>
              <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-2 lg:hidden">
            <button
              onClick={() => onOpenQuoteModal()}
              className="sm:hidden px-3 py-1.5 rounded font-heading font-bold text-xs uppercase bg-yellow text-charcoal-900"
            >
              Quote
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-charcoal-700 text-charcoal-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-yellow"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-charcoal-900/98 backdrop-blur-xl border-b border-charcoal-700 shadow-2xl animate-fade-in">
          <div className="max-w-7xl mx-auto px-4 py-5 space-y-3">
            <div className="p-3 bg-charcoal-800 rounded-lg border border-charcoal-700 text-xs text-charcoal-300 space-y-1.5">
              <div className="flex items-center gap-1.5 text-yellow font-medium">
                <ShieldCheck className="w-4 h-4" />
                <span>Heavy Machinery Hire & Site Materials</span>
              </div>
              <p className="text-charcoal-300">Ground Floor, KM Complex, SM Junction, Thrissur</p>
            </div>

            <div className="grid grid-cols-2 gap-2 pt-2">
              {navLinks.map((link) => {
                const isActive = currentPage === link.route;
                return (
                  <button
                    key={link.route}
                    onClick={() => handleNavClick(link.route)}
                    className={`px-4 py-3 rounded-lg text-left font-heading uppercase text-sm font-bold tracking-wider transition-all ${
                      isActive
                        ? 'bg-yellow text-charcoal-900 shadow-yellow-sm'
                        : 'bg-charcoal-800 text-charcoal-200 hover:bg-charcoal-700 hover:text-white'
                    }`}
                  >
                    {link.name}
                  </button>
                );
              })}
            </div>

            <div className="pt-3 border-t border-charcoal-700 space-y-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuoteModal();
                }}
                className="w-full py-3 rounded-lg font-heading font-black text-sm uppercase tracking-wider bg-yellow text-charcoal-900 flex items-center justify-center gap-2 shadow-yellow-sm"
              >
                <span>Request Project Quote</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              <div className="grid grid-cols-2 gap-2">
                <a
                  href={`tel:${COMPANY_INFO.primaryPhoneRaw}`}
                  className="py-2.5 px-3 rounded-lg bg-charcoal-800 border border-charcoal-700 text-white font-semibold text-xs flex items-center justify-center gap-1.5"
                >
                  <Phone className="w-3.5 h-3.5 text-yellow" />
                  <span>Call 9496697937</span>
                </a>
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2.5 px-3 rounded-lg bg-green-600 hover:bg-green-500 text-white font-semibold text-xs flex items-center justify-center gap-1.5"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

