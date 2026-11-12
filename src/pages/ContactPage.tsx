import React, { useState } from 'react';
import { Phone, MessageSquare, MapPin, Clock, Mail, CheckCircle, Send, ArrowUpRight, ShieldCheck } from 'lucide-react';
import { COMPANY_INFO, SERVICES_DATA, MACHINERY_DATA, BUILDING_MATERIALS } from '../data/companyData';
import { getWhatsAppUrl } from '../utils/whatsapp';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: 'JCB 3DX Backhoe Loader',
    location: '',
    duration: 'Daily Shift (8 Hours)',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    setSubmitted(true);
  };

  const handleWhatsAppSend = () => {
    const formatted = `*NEW CONTACT FORM ENQUIRY*%0A%0A*Name:* ${formData.name || 'Site Client'}%0A*Phone:* ${formData.phone}%0A*Email:* ${formData.email || 'None'}%0A*Required Machine/Service:* ${formData.service}%0A*Site Location:* ${formData.location || 'Thrissur / Kerala'}%0A*Duration:* ${formData.duration}%0A*Message:* ${formData.message || 'Please provide rates and mobilization schedule.'}`;
    window.open(getWhatsAppUrl(formatted), '_blank');
  };

  return (
    <div className="pt-20 sm:pt-24 bg-charcoal-50 text-charcoal-500">
      {/* Header Banner */}
      <section className="bg-charcoal-900 text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/services/services-banner.jpg"
            alt="Contact Sannidhanam Earth Movers"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal-950 via-charcoal-900/95 to-charcoal-900/80"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 text-yellow font-heading font-black uppercase tracking-widest text-xs">
              <span className="w-2.5 h-2.5 rounded bg-yellow"></span>
              <span>Direct Booking &amp; Enquiries</span>
            </div>
            <h1 className="font-heading font-black text-4xl sm:text-5xl md:text-6xl uppercase tracking-tight text-white leading-[1.02]">
              Contact &amp; <br />
              <span className="text-yellow">Site Booking</span>
            </h1>
            <div className="w-20 h-1.5 bg-yellow rounded-full"></div>
            <p className="text-base sm:text-lg text-charcoal-200 leading-relaxed font-normal">
              Need a quote, want to book an excavator, or order building materials? We're just a phone call or WhatsApp message away — operational every day of the week.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14">
            {/* Left Column: Contact Cards & Office Details (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-heading font-black uppercase text-yellow-600 tracking-widest">
                  Quick Connect
                </span>
                <h2 className="font-heading font-black text-3xl uppercase text-charcoal-800 tracking-tight">
                  Reach Our Operations Team
                </h2>
                <div className="w-14 h-1 bg-yellow rounded-full"></div>
              </div>

              {/* Direct Phone Cards */}
              <div className="space-y-3">
                <a
                  href={`tel:${COMPANY_INFO.primaryPhoneRaw}`}
                  className="flex items-center gap-4 p-4 rounded-xl bg-white border border-charcoal-200 hover:border-yellow shadow-sm hover:shadow-md transition-all group"
                >
                  <div className="w-12 h-12 rounded-lg bg-charcoal-800 text-yellow flex items-center justify-center shrink-0 group-hover:bg-yellow group-hover:text-charcoal-900 transition-colors">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-heading font-bold uppercase text-charcoal-400 block">
                      Primary Contact Hotline
                    </span>
                    <span className="font-heading font-black text-xl text-charcoal-800 group-hover:text-yellow-600 transition-colors">
                      {COMPANY_INFO.primaryPhone}
                    </span>
                  </div>
                </a>

                <a
                  href={`tel:${COMPANY_INFO.secondaryPhoneRaw}`}
                  className="flex items-center gap-4 p-4 rounded-xl bg-white border border-charcoal-200 hover:border-yellow shadow-sm hover:shadow-md transition-all group"
                >
                  <div className="w-12 h-12 rounded-lg bg-charcoal-800 text-yellow flex items-center justify-center shrink-0 group-hover:bg-yellow group-hover:text-charcoal-900 transition-colors">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-heading font-bold uppercase text-charcoal-400 block">
                      Secondary Contact Line
                    </span>
                    <span className="font-heading font-black text-xl text-charcoal-800 group-hover:text-yellow-600 transition-colors">
                      {COMPANY_INFO.secondaryPhone}
                    </span>
                  </div>
                </a>

                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl bg-emerald-600 text-white shadow-md hover:bg-emerald-500 transition-all"
                >
                  <div className="w-12 h-12 rounded-lg bg-white/20 flex items-center justify-center shrink-0">
                    <MessageSquare className="w-6 h-6 fill-current" />
                  </div>
                  <div className="flex-1">
                    <span className="text-[11px] font-heading font-bold uppercase text-emerald-100 block">
                      Fastest Response Time
                    </span>
                    <span className="font-heading font-black text-xl">
                      Chat on WhatsApp (+91 9496697937)
                    </span>
                  </div>
                </a>
              </div>

              {/* Office & Operations Card */}
              <div className="p-6 rounded-2xl bg-white border border-charcoal-200 shadow-sm space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-yellow-600 shrink-0 mt-1" />
                  <div>
                    <h4 className="font-heading font-bold uppercase text-sm text-charcoal-800">
                      Office &amp; Depot Address
                    </h4>
                    <p className="text-xs sm:text-sm text-charcoal-500 leading-snug mt-1">
                      {COMPANY_INFO.address.room}<br />
                      {COMPANY_INFO.address.building}<br />
                      {COMPANY_INFO.address.city}, {COMPANY_INFO.address.state} – {COMPANY_INFO.address.pincode}
                    </p>
                    <a
                      href={COMPANY_INFO.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs text-yellow-600 font-heading font-bold uppercase tracking-wider mt-2.5 hover:underline"
                    >
                      <span>Get Directions on Google Maps</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>

                <div className="pt-3 border-t border-charcoal-100 flex items-start gap-3">
                  <Clock className="w-5 h-5 text-yellow-600 shrink-0 mt-1" />
                  <div>
                    <h4 className="font-heading font-bold uppercase text-sm text-charcoal-800">
                      Working Hours
                    </h4>
                    <p className="text-xs sm:text-sm text-charcoal-500 mt-0.5 font-semibold text-emerald-600">
                      Open 7 Days a Week (Sunday to Monday)
                    </p>
                    <p className="text-xs text-charcoal-400">
                      Site mobilization: 6:00 AM – 9:00 PM daily
                    </p>
                  </div>
                </div>

                <div className="pt-3 border-t border-charcoal-100 flex items-start gap-3">
                  <Mail className="w-5 h-5 text-yellow-600 shrink-0 mt-1" />
                  <div>
                    <h4 className="font-heading font-bold uppercase text-sm text-charcoal-800">
                      Email Communication
                    </h4>
                    <a
                      href={`mailto:${COMPANY_INFO.email}`}
                      className="text-xs sm:text-sm text-charcoal-600 hover:text-yellow-600"
                    >
                      {COMPANY_INFO.email}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Professional Enquiry Form (7 cols) */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-3xl border border-charcoal-200 shadow-xl p-7 sm:p-10 relative overflow-hidden">
                <div className="h-2 bg-yellow absolute top-0 left-0 right-0"></div>

                {submitted ? (
                  <div className="py-12 text-center space-y-5">
                    <div className="w-20 h-20 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto border-2 border-emerald-400">
                      <CheckCircle className="w-12 h-12" />
                    </div>

                    <div>
                      <h3 className="font-heading font-black text-3xl uppercase text-charcoal-800">
                        Enquiry Submitted Successfully!
                      </h3>
                      <p className="text-sm text-charcoal-500 max-w-md mx-auto mt-2">
                        Thank you, <strong className="text-charcoal-900">{formData.name}</strong>. Our dispatch desk has received your request and will call you on <strong className="text-yellow-600">{formData.phone}</strong> shortly.
                      </p>
                    </div>

                    <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                      <button
                        onClick={handleWhatsAppSend}
                        className="px-6 py-3 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-heading font-black text-xs uppercase tracking-wider flex items-center gap-2 shadow-md"
                      >
                        <MessageSquare className="w-4 h-4" />
                        <span>Send Copy via WhatsApp</span>
                      </button>

                      <button
                        onClick={() => setSubmitted(false)}
                        className="px-6 py-3 rounded-lg bg-charcoal-100 hover:bg-charcoal-200 text-charcoal-800 font-heading font-bold text-xs uppercase tracking-wider"
                      >
                        Submit Another Enquiry
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-6">
                    <div>
                      <span className="text-xs font-heading font-black uppercase text-yellow-600 tracking-widest">
                        Online Booking Form
                      </span>
                      <h3 className="font-heading font-black text-2xl sm:text-3xl uppercase text-charcoal-800 tracking-tight mt-1">
                        Request Equipment Or Material Quote
                      </h3>
                      <p className="text-xs sm:text-sm text-charcoal-400 mt-1">
                        Fill in your project details. We verify equipment availability and provide all-inclusive pricing.
                      </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                      {/* Name & Phone */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-heading uppercase font-bold text-charcoal-700 tracking-wider mb-1.5">
                            Full Name *
                          </label>
                          <input
                            type="text"
                            required
                            placeholder="e.g. Suresh Kumar"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className="w-full bg-charcoal-50 border border-charcoal-200 rounded-lg px-3.5 py-2.5 text-sm text-charcoal-800 focus:outline-none focus:border-yellow focus:ring-1 focus:ring-yellow"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-heading uppercase font-bold text-charcoal-700 tracking-wider mb-1.5">
                            Phone Number *
                          </label>
                          <input
                            type="tel"
                            required
                            placeholder="e.g. 9496697937"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            className="w-full bg-charcoal-50 border border-charcoal-200 rounded-lg px-3.5 py-2.5 text-sm text-charcoal-800 focus:outline-none focus:border-yellow focus:ring-1 focus:ring-yellow"
                          />
                        </div>
                      </div>

                      {/* Email & Site Location */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-heading uppercase font-bold text-charcoal-700 tracking-wider mb-1.5">
                            Email Address (Optional)
                          </label>
                          <input
                            type="email"
                            placeholder="e.g. contact@domain.com"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="w-full bg-charcoal-50 border border-charcoal-200 rounded-lg px-3.5 py-2.5 text-sm text-charcoal-800 focus:outline-none focus:border-yellow focus:ring-1 focus:ring-yellow"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-heading uppercase font-bold text-charcoal-700 tracking-wider mb-1.5">
                            Site Location / Town *
                          </label>
                          <input
                            type="text"
                            required
                            placeholder="e.g. KM Complex / Thrissur"
                            value={formData.location}
                            onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                            className="w-full bg-charcoal-50 border border-charcoal-200 rounded-lg px-3.5 py-2.5 text-sm text-charcoal-800 focus:outline-none focus:border-yellow focus:ring-1 focus:ring-yellow"
                          />
                        </div>
                      </div>

                      {/* Machine/Service & Duration */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-heading uppercase font-bold text-charcoal-700 tracking-wider mb-1.5">
                            Equipment or Service Required *
                          </label>
                          <select
                            value={formData.service}
                            onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                            className="w-full bg-charcoal-50 border border-charcoal-200 rounded-lg px-3.5 py-2.5 text-sm text-charcoal-800 focus:outline-none focus:border-yellow focus:ring-1 focus:ring-yellow font-medium"
                          >
                            <optgroup label="Machinery Fleet">
                              {MACHINERY_DATA.map((m) => (
                                <option key={m.id} value={`${m.name} (${m.model})`}>
                                  🚜 {m.name} – {m.model}
                                </option>
                              ))}
                            </optgroup>
                            <optgroup label="Site Services">
                              {SERVICES_DATA.map((s) => (
                                <option key={s.id} value={s.title}>
                                  ⚙️ {s.title}
                                </option>
                              ))}
                            </optgroup>
                            <optgroup label="Quarry Building Materials">
                              {BUILDING_MATERIALS.map((mat) => (
                                <option key={mat.id} value={`Materials Supply: ${mat.name}`}>
                                  📦 {mat.name}
                                </option>
                              ))}
                            </optgroup>
                          </select>
                        </div>

                        <div>
                          <label className="block text-xs font-heading uppercase font-bold text-charcoal-700 tracking-wider mb-1.5">
                            Rental Scope / Duration
                          </label>
                          <select
                            value={formData.duration}
                            onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
                            className="w-full bg-charcoal-50 border border-charcoal-200 rounded-lg px-3.5 py-2.5 text-sm text-charcoal-800 focus:outline-none focus:border-yellow focus:ring-1 focus:ring-yellow font-medium"
                          >
                            <option value="Hourly Hire">Hourly Hire (Short Job)</option>
                            <option value="Daily Shift (8 Hours)">Daily Shift (8 Hours)</option>
                            <option value="Weekly Hire (7 Days)">Weekly Hire (7 Days)</option>
                            <option value="Monthly Lease">Monthly Project Lease</option>
                            <option value="Lump Sum Work">Turnkey Contract Work</option>
                          </select>
                        </div>
                      </div>

                      {/* Project Message */}
                      <div>
                        <label className="block text-xs font-heading uppercase font-bold text-charcoal-700 tracking-wider mb-1.5">
                          Project Details &amp; Notes
                        </label>
                        <textarea
                          rows={3}
                          placeholder="Describe your site access, approximate volume/depth, start date, or any special requirement..."
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          className="w-full bg-charcoal-50 border border-charcoal-200 rounded-lg px-3.5 py-2.5 text-sm text-charcoal-800 focus:outline-none focus:border-yellow focus:ring-1 focus:ring-yellow resize-none"
                        ></textarea>
                      </div>

                      {/* Submit Buttons */}
                      <div className="pt-2 space-y-3">
                        <button
                          type="submit"
                          className="w-full py-3.5 rounded-lg bg-yellow hover:bg-yellow-400 text-charcoal-900 font-heading font-black text-sm uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-yellow-sm"
                        >
                          <Send className="w-4 h-4" />
                          <span>Submit Booking Request</span>
                        </button>

                        <button
                          type="button"
                          onClick={handleWhatsAppSend}
                          className="w-full py-3 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-heading font-black text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2"
                        >
                          <MessageSquare className="w-4 h-4" />
                          <span>Send Directly Via WhatsApp</span>
                        </button>
                      </div>

                      <div className="pt-1 flex items-center justify-center gap-1.5 text-xs text-charcoal-400">
                        <ShieldCheck className="w-4 h-4 text-yellow-600" />
                        <span>Direct machine owner contact. Available 7 days a week.</span>
                      </div>
                    </form>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Google Maps Embed / Interactive Location Showcase */}
      <section className="bg-charcoal-900 py-16 text-white border-t border-charcoal-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-heading font-black uppercase text-yellow tracking-widest">
                Our Fleet Depot Location
              </span>
              <h3 className="font-heading font-black text-2xl uppercase tracking-wide">
                Ground Floor, KM Complex, SM Junction, Thrissur
              </h3>
            </div>
            <a
              href={COMPANY_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-lg bg-yellow hover:bg-yellow-400 text-charcoal-900 font-heading font-black text-xs uppercase tracking-wider transition-all flex items-center gap-2 shadow-yellow-sm self-start sm:self-auto"
            >
              <span>Open in Google Maps App</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          <div className="rounded-2xl overflow-hidden border-2 border-charcoal-700 aspect-video sm:aspect-[21/9] w-full bg-charcoal-800">
            <iframe
              title="Sannidhanam Earth Movers Office Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125530.40798670868!2d76.12644234907153!3d10.527641618641108!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba7ee15ed42d1bb%3A0x82e45aa016ca7be!2sThrissur%2C%20Kerala!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

