import React, { useState } from 'react';
import { X, CheckCircle, MessageSquare, Phone, ArrowRight, ShieldAlert } from 'lucide-react';
import { COMPANY_INFO, SERVICES_DATA, MACHINERY_DATA, BUILDING_MATERIALS } from '../../data/companyData';
import { getWhatsAppUrl } from '../../utils/whatsapp';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialServiceOrMachine?: string;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({
  isOpen,
  onClose,
  initialServiceOrMachine,
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [selectedItem, setSelectedItem] = useState(initialServiceOrMachine || 'JCB 3DX Backhoe Loader');
  const [location, setLocation] = useState('');
  const [duration, setDuration] = useState('Daily Shift (8 Hours)');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;
    setSubmitted(true);
  };

  const handleWhatsAppDirect = () => {
    const formatted = `*NEW PROJECT ENQUIRY (Website)*%0A%0A*Name:* ${name || 'Prospective Client'}%0A*Phone:* ${phone || 'Not provided'}%0A*Requirement:* ${selectedItem}%0A*Site Location:* ${location || 'Thrissur / Kerala'}%0A*Duration:* ${duration}%0A*Notes:* ${notes || 'Please provide rates and machine availability.'}`;
    window.open(getWhatsAppUrl(formatted), '_blank');
  };

  const resetAndClose = () => {
    setSubmitted(false);
    setName('');
    setPhone('');
    setLocation('');
    setNotes('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-charcoal-900/85 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-fade-in">
      <div
        className="relative bg-charcoal-800 border-2 border-charcoal-600 rounded-xl max-w-xl w-full shadow-2xl overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Yellow Industrial Accent */}
        <div className="h-2 bg-yellow w-full"></div>

        {/* Modal Close Button */}
        <button
          onClick={resetAndClose}
          className="absolute top-4 right-4 p-2 rounded-lg bg-charcoal-700/80 text-charcoal-300 hover:text-white hover:bg-charcoal-600 transition-colors"
          aria-label="Close Modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="p-8 text-center space-y-5">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 border-2 border-emerald-500 text-emerald-400 flex items-center justify-center mx-auto">
              <CheckCircle className="w-10 h-10" />
            </div>

            <div>
              <h3 className="font-heading uppercase font-black text-2xl text-white tracking-wider">
                Enquiry Received!
              </h3>
              <p className="text-sm text-charcoal-300 mt-2">
                Thank you, <strong className="text-white">{name}</strong>. Our operations team at Sannidhanam Earth Movers will call you at <strong className="text-yellow">{phone}</strong> shortly with equipment availability and pricing.
              </p>
            </div>

            <div className="p-4 rounded-lg bg-charcoal-900 border border-charcoal-700 text-left text-xs space-y-1.5 text-charcoal-300">
              <p><strong className="text-white">Selected:</strong> {selectedItem}</p>
              <p><strong className="text-white">Site Location:</strong> {location || 'Thrissur / Nearby'}</p>
              <p><strong className="text-white">Rental Mode:</strong> {duration}</p>
            </div>

            <div className="space-y-3 pt-2">
              <button
                onClick={handleWhatsAppDirect}
                className="w-full py-3 px-4 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-heading font-black text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg transition-all"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Instant Connect on WhatsApp</span>
              </button>

              <button
                onClick={resetAndClose}
                className="w-full py-2.5 px-4 rounded-lg bg-charcoal-700 hover:bg-charcoal-600 text-charcoal-200 font-heading font-bold text-xs uppercase tracking-wider"
              >
                Done / Close Window
              </button>
            </div>
          </div>
        ) : (
          <div className="p-6 sm:p-8">
            <div className="mb-6">
              <div className="flex items-center gap-2 text-yellow font-heading font-bold uppercase tracking-widest text-xs mb-1">
                <span className="w-2 h-2 rounded-full bg-yellow"></span>
                <span>Fast Deployment &amp; Booking</span>
              </div>
              <h3 className="font-heading uppercase font-black text-2xl sm:text-3xl text-white tracking-wide">
                Get a Free Machine Quote
              </h3>
              <p className="text-xs sm:text-sm text-charcoal-300 mt-1">
                Tell us your site requirements. We provide upfront pricing, certified operators, and on-time mobilization.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Select Service or Machine */}
              <div>
                <label className="block text-xs font-heading uppercase font-bold text-charcoal-200 tracking-wider mb-1.5">
                  Select Machine or Service Required *
                </label>
                <select
                  value={selectedItem}
                  onChange={(e) => setSelectedItem(e.target.value)}
                  className="w-full bg-charcoal-900 border border-charcoal-600 rounded-lg px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-yellow focus:ring-1 focus:ring-yellow font-medium"
                >
                  <optgroup label="Heavy Machinery Fleet">
                    {MACHINERY_DATA.map((m) => (
                      <option key={m.id} value={`${m.name} (${m.model})`}>
                        🚜 {m.name} – {m.model}
                      </option>
                    ))}
                  </optgroup>
                  <optgroup label="Earthmoving & Construction Services">
                    {SERVICES_DATA.map((s) => (
                      <option key={s.id} value={s.title}>
                        ⚙️ {s.title}
                      </option>
                    ))}
                  </optgroup>
                  <optgroup label="Quarry Materials Supply">
                    {BUILDING_MATERIALS.map((mat) => (
                      <option key={mat.id} value={`Materials Supply: ${mat.name}`}>
                        📦 {mat.name}
                      </option>
                    ))}
                  </optgroup>
                </select>
              </div>

              {/* Name & Phone Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-heading uppercase font-bold text-charcoal-200 tracking-wider mb-1.5">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Rajesh Kumar"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-charcoal-900 border border-charcoal-600 rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-charcoal-500 focus:outline-none focus:border-yellow focus:ring-1 focus:ring-yellow"
                  />
                </div>

                <div>
                  <label className="block text-xs font-heading uppercase font-bold text-charcoal-200 tracking-wider mb-1.5">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. 9496697937"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-charcoal-900 border border-charcoal-600 rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-charcoal-500 focus:outline-none focus:border-yellow focus:ring-1 focus:ring-yellow"
                  />
                </div>
              </div>

              {/* Location & Rental Duration */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-heading uppercase font-bold text-charcoal-200 tracking-wider mb-1.5">
                    Site Location / Town
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. SM Junction / Thrissur"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="w-full bg-charcoal-900 border border-charcoal-600 rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-charcoal-500 focus:outline-none focus:border-yellow focus:ring-1 focus:ring-yellow"
                  />
                </div>

                <div>
                  <label className="block text-xs font-heading uppercase font-bold text-charcoal-200 tracking-wider mb-1.5">
                    Rental Duration / Scope
                  </label>
                  <select
                    value={duration}
                    onChange={(e) => setDuration(e.target.value)}
                    className="w-full bg-charcoal-900 border border-charcoal-600 rounded-lg px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-yellow focus:ring-1 focus:ring-yellow font-medium"
                  >
                    <option value="Hourly Hire (Short Job)">Hourly Hire</option>
                    <option value="Daily Shift (8 Hours)">Daily Shift (8 Hours)</option>
                    <option value="Weekly Hire (7 Days)">Weekly Hire (7 Days)</option>
                    <option value="Monthly Project Contract">Monthly Project Contract</option>
                    <option value="Turnkey Lump Sum Contract">Turnkey Lump Sum Work</option>
                  </select>
                </div>
              </div>

              {/* Optional Notes */}
              <div>
                <label className="block text-xs font-heading uppercase font-bold text-charcoal-200 tracking-wider mb-1.5">
                  Project Notes / Details (Optional)
                </label>
                <textarea
                  rows={2}
                  placeholder="Terrain conditions, soil type, estimated cubic meters, or specific timeline..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full bg-charcoal-900 border border-charcoal-600 rounded-lg px-3.5 py-2 text-sm text-white placeholder-charcoal-500 focus:outline-none focus:border-yellow focus:ring-1 focus:ring-yellow resize-none"
                ></textarea>
              </div>

              {/* Actions */}
              <div className="pt-2 space-y-2.5">
                <button
                  type="submit"
                  className="w-full py-3 rounded-lg bg-yellow hover:bg-yellow-400 text-charcoal-900 font-heading font-black text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-yellow-sm transition-all transform hover:-translate-y-0.5"
                >
                  <span>Submit Instant Enquiry</span>
                  <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                </button>

                <div className="flex items-center justify-between gap-3 pt-1">
                  <button
                    type="button"
                    onClick={handleWhatsAppDirect}
                    className="flex-1 py-2.5 rounded-lg bg-emerald-600/20 border border-emerald-500/50 hover:bg-emerald-600 hover:text-white text-emerald-400 font-heading font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-colors"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Send on WhatsApp</span>
                  </button>

                  <a
                    href={`tel:${COMPANY_INFO.primaryPhoneRaw}`}
                    className="flex-1 py-2.5 rounded-lg bg-charcoal-700 hover:bg-charcoal-600 text-white font-heading font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-colors border border-charcoal-600"
                  >
                    <Phone className="w-3.5 h-3.5 text-yellow" />
                    <span>Direct Call</span>
                  </a>
                </div>
              </div>

              <div className="flex items-center justify-center gap-1.5 text-[11px] text-charcoal-400 pt-1">
                <ShieldAlert className="w-3.5 h-3.5 text-yellow" />
                <span>Zero spam guarantee. Transparent pricing directly from machine owners.</span>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

