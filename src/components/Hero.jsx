import React, { useState } from 'react';
import { 
  Plane, 
  FileCheck, 
  Compass, 
  Sparkles, 
  ArrowRight, 
  ShieldCheck, 
  Clock, 
  Star, 
  CheckCircle2,
  MessageSquare,
  ChevronRight,
  Award
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Hero({ settings = {} }) {
  const whatsappNumber = settings.whatsapp_number || '966552993899';
  const [activeTab, setActiveTab] = useState('visa');
  const [destination, setDestination] = useState('');
  const [visaType, setVisaType] = useState('Schengen (Europe)');

  const handleConsultation = () => {
    let msg = `Hi Rozana Tours & Travels! I would like to inquire about: `;
    if (activeTab === 'visa') {
      msg += `Visa Assistance for ${visaType}.`;
    } else if (activeTab === 'packages') {
      msg += `Tour Package to ${destination || 'Popular Destinations'}.`;
    } else {
      msg += `Flight & Hotel Bookings.`;
    }
    const encoded = encodeURIComponent(msg);
    window.open(`https://wa.me/${whatsappNumber}?text=${encoded}`, '_blank');
  };

  return (
    <section id="home" className="relative min-h-screen bg-linear-to-b from-[#001E3D] via-[#002B5B] to-[#003B7A] text-white pt-36 pb-20 overflow-hidden font-sans">
      
      {/* BACKGROUND ELEGANT GRAPHICS & ANIMATED GLOW */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-[#0084D6]/20 rounded-full blur-3xl pointer-events-none animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#FF7A00]/15 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] bg-size-[32px_32px] opacity-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        
        {/* TOP BADGE (Framer Motion Fade-In) */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-1.5 rounded-full text-xs font-medium text-amber-300 mb-8 shadow-inner"
        >
          <Award size={15} className="text-[#FF7A00]" />
          <span>{settings.hero_badge || 'Premier Saudi Arabia Travel & Visa Consultancy'}</span>
          <span className="bg-[#FF7A00] text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase ml-1">
            VIP Standard
          </span>
        </motion.div>

        {/* MAIN HERO GRID (SPLIT 2 COLUMNS) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* LEFT COLUMN: TYPOGRAPHY & VALUE PROPOSITION */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-7 space-y-6 text-left"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.15]">
              {settings.hero_title || 'Your Gateway To'} <br />
              <span className="bg-clip-text text-transparent bg-linear-to-r from-amber-200 via-[#FF7A00] to-orange-400">
                {settings.hero_highlight || 'Seamless Global Travel'}
              </span>
            </h1>

            <p className="text-slate-300 text-base sm:text-lg max-w-2xl font-light leading-relaxed">
              {settings.hero_description || 'Experience hassle-free worldwide visa processing, bespoke luxury tour packages, and first-class flight bookings crafted with perfection for Saudi travelers.'}
            </p>

            {/* QUICK FEATURE BULLETS */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-200 bg-white/5 border border-white/10 px-3 py-2 rounded-xl backdrop-blur-sm">
                <CheckCircle2 size={16} className="text-emerald-400 shrink-0" />
                <span>99.6% Visa Approval</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-200 bg-white/5 border border-white/10 px-3 py-2 rounded-xl backdrop-blur-sm">
                <ShieldCheck size={16} className="text-[#FF7A00] shrink-0" />
                <span>Licensed Travel Agency</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-200 bg-white/5 border border-white/10 px-3 py-2 rounded-xl backdrop-blur-sm col-span-2 sm:col-span-1">
                <Clock size={16} className="text-sky-400 shrink-0" />
                <span>Express Turnaround</span>
              </div>
            </div>

            {/* ACTION BUTTONS */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleConsultation}
                className="group relative inline-flex items-center gap-3 bg-linear-to-r from-[#FF7A00] to-amber-500 hover:from-amber-500 hover:to-[#FF7A00] text-white px-8 py-4 rounded-2xl font-bold text-sm shadow-xl shadow-[#FF7A00]/25 transition-all duration-300"
              >
                <MessageSquare size={18} />
                <span>Instant Travel Consultation</span>
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </motion.button>

              <a 
                href="#packages"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-6 py-4 rounded-2xl font-semibold text-sm backdrop-blur-md border border-white/15 transition-all hover:border-white/30"
              >
                <span>Explore Packages</span>
                <ChevronRight size={16} />
              </a>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: INTERACTIVE CONSOLE & FLOATING EXPERIENCE CARDS */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="lg:col-span-5 relative"
          >
            
            {/* FLOATING GLASSMOPHISM SEARCH CONSOLE */}
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-6 shadow-2xl space-y-5 relative z-20">
              
              {/* CONSOLE HEADER & TABS */}
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <h3 className="text-sm font-bold tracking-wide uppercase text-amber-300 flex items-center gap-2">
                  <Sparkles size={16} />
                  <span>Quick Travel Finder</span>
                </h3>
                <span className="text-[11px] text-slate-300 bg-white/10 px-2.5 py-1 rounded-full">
                  Fast Assistance
                </span>
              </div>

              {/* TABS SELECTOR */}
              <div className="grid grid-cols-3 gap-1 bg-black/20 p-1.5 rounded-2xl border border-white/10">
                <button
                  onClick={() => setActiveTab('visa')}
                  className={`flex items-center justify-center gap-1.5 py-2.5 rounded-xl text-xs font-bold transition-all ${
                    activeTab === 'visa' 
                      ? 'bg-linear-to-r from-[#0084D6] to-[#003B7A] text-white shadow-md' 
                      : 'text-slate-300 hover:text-white'
                  }`}
                >
                  <FileCheck size={14} />
                  <span>Visas</span>
                </button>

                <button
                  onClick={() => setActiveTab('packages')}
                  className={`flex items-center justify-center gap-1.5 py-2.5 rounded-xl text-xs font-bold transition-all ${
                    activeTab === 'packages' 
                      ? 'bg-linear-to-r from-[#0084D6] to-[#003B7A] text-white shadow-md' 
                      : 'text-slate-300 hover:text-white'
                  }`}
                >
                  <Compass size={14} />
                  <span>Tours</span>
                </button>

                <button
                  onClick={() => setActiveTab('flights')}
                  className={`flex items-center justify-center gap-1.5 py-2.5 rounded-xl text-xs font-bold transition-all ${
                    activeTab === 'flights' 
                      ? 'bg-linear-to-r from-[#0084D6] to-[#003B7A] text-white shadow-md' 
                      : 'text-slate-300 hover:text-white'
                  }`}
                >
                  <Plane size={14} />
                  <span>Flights</span>
                </button>
              </div>

              {/* TAB CONTENT FORM WITH ANIMATE PRESENCE */}
              <AnimatePresence mode="wait">
                {activeTab === 'visa' && (
                  <motion.div 
                    key="visa-tab"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="space-y-4"
                  >
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1 text-left">
                        Select Target Destination / Visa Type
                      </label>
                      <select
                        value={visaType}
                        onChange={(e) => setVisaType(e.target.value)}
                        className="w-full bg-slate-900/80 border border-white/20 text-white rounded-xl p-3 text-xs focus:outline-none focus:border-[#FF7A00]"
                      >
                        <option value="Schengen (Europe)">🇪🇺 Schengen (Europe)</option>
                        <option value="United Kingdom (UK)">🇬🇧 United Kingdom (UK)</option>
                        <option value="United States (USA)">🇺🇸 United States (USA)</option>
                        <option value="Japan & East Asia">🇯🇵 Japan & East Asia</option>
                        <option value="Turkey & Caucasus">🇹🇷 Turkey & Caucasus</option>
                        <option value="Canada">🇨🇦 Canada Visa</option>
                      </select>
                    </div>
                    <div className="bg-white/5 p-3 rounded-xl border border-white/10 text-xs text-slate-300 text-left space-y-1">
                      <p className="font-semibold text-amber-300 flex items-center gap-1">
                        <ShieldCheck size={14} /> Guaranteed Processing Support
                      </p>
                      <p className="text-[11px] text-slate-400">Includes appointment booking, document translation, and embassy filing.</p>
                    </div>
                  </motion.div>
                )}

                {activeTab === 'packages' && (
                  <motion.div 
                    key="packages-tab"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="space-y-4"
                  >
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1 text-left">
                        Where would you like to explore?
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Maldives, Paris, Bali, Dubai"
                        value={destination}
                        onChange={(e) => setDestination(e.target.value)}
                        className="w-full bg-slate-900/80 border border-white/20 text-white placeholder-slate-400 rounded-xl p-3 text-xs focus:outline-none focus:border-[#FF7A00]"
                      />
                    </div>
                    <div className="flex flex-wrap gap-1.5 text-[10px]">
                      <span className="text-slate-400 self-center mr-1">Popular:</span>
                      {['Maldives', 'Switzerland', 'Thailand', 'Bosnia'].map((tag) => (
                        <button
                          key={tag}
                          onClick={() => setDestination(tag)}
                          className="bg-white/10 hover:bg-[#FF7A00] text-white px-2.5 py-1 rounded-lg transition-colors"
                        >
                          {tag}
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}

                {activeTab === 'flights' && (
                  <motion.div 
                    key="flights-tab"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="space-y-3 text-left"
                  >
                    <div className="bg-white/5 p-4 rounded-xl border border-white/10 text-xs space-y-2">
                      <p className="font-semibold text-sky-300 flex items-center gap-1.5">
                        <Plane size={16} /> VIP Flight & Hotel Reservations
                      </p>
                      <p className="text-[11px] text-slate-300">
                        Get direct discounted fares with Saudi Airlines, Emirates, Qatar Airways & luxury 5-star hotel partners.
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* SUBMIT BUTTON */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleConsultation}
                className="w-full bg-linear-to-r from-[#FF7A00] to-orange-500 hover:from-orange-500 hover:to-[#FF7A00] text-white py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider shadow-lg transition-all flex items-center justify-center gap-2"
              >
                <MessageSquare size={16} />
                <span>Check Rates & Availability</span>
              </motion.button>

            </div>

            {/* DECORATIVE FLOATING BADGE (Smooth Bobbing Animation) */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              className="hidden sm:flex absolute -top-6 -right-6 bg-slate-900/90 border border-amber-500/40 backdrop-blur-xl p-3.5 rounded-2xl shadow-2xl items-center gap-3 z-30"
            >
              <div className="bg-amber-500/20 p-2 rounded-xl text-amber-400">
                <Star size={20} fill="#F59E0B" />
              </div>
              <div className="text-left">
                <p className="text-xs font-bold text-white">4.9 / 5.0 Rating</p>
                <p className="text-[10px] text-slate-400">Over 12,000+ Happy Travelers</p>
              </div>
            </motion.div>

          </motion.div>

        </div>

        {/* TRUST METRICS FOOTER BAR (Scroll Reveal Animation) */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 pt-10 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-6 text-center"
        >
          <div className="space-y-1">
            <p className="text-3xl font-black text-[#FF7A00]">15,000+</p>
            <p className="text-xs text-slate-300 font-medium">Visas Issued Successfully</p>
          </div>
          <div className="space-y-1">
            <p className="text-3xl font-black text-sky-400">120+</p>
            <p className="text-xs text-slate-300 font-medium">Worldwide Destinations</p>
          </div>
          <div className="space-y-1">
            <p className="text-3xl font-black text-emerald-400">100%</p>
            <p className="text-xs text-slate-300 font-medium">Transparent Pricing</p>
          </div>
          <div className="space-y-1">
            <p className="text-3xl font-black text-amber-300">24 / 7</p>
            <p className="text-xs text-slate-300 font-medium">VIP WhatsApp Support</p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
