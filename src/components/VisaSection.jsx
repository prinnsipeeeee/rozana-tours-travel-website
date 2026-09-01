import React, { useState } from "react";
import { 
  ShieldCheck, 
  Sparkles, 
  Clock, 
  Calendar, 
  CheckCircle2, 
  MessageSquare, 
  Info, 
  X 
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// DATA SET: Official Visa Information
const visaData = [
  {
    id: 'schengen',
    country: 'Schengen (Europe)',
    flagImg: 'https://flagcdn.com/w80/eu.png',
    category: 'europe',
    popular: true,
    processingTime: '3 - 5 Working Days',
    validity: 'Up to 90 Days / Multi-Entry',
    price: '450 SAR',
    requirements: [
      'Original Passport (Valid 6+ months)',
      'Saudi ID / Iqama Copy',
      '2 White Background Photos (3.5 x 4.5cm)',
      '3-Month Bank Statement',
      'Flight & Hotel Bookings (Provided by Us)'
    ],
    description: 'Travel freely across 29 European countries including France, Italy, Germany, and Spain.'
  },
  {
    id: 'uk',
    country: 'United Kingdom (EVW & Standard)',
    flagImg: 'https://flagcdn.com/w80/gb.png',
    category: 'europe',
    popular: true,
    processingTime: '24 - 48 Hours (EVW)',
    validity: '6 Months / 2 to 5 Years',
    price: '380 SAR',
    requirements: [
      'Passport Copy (High Resolution)',
      'Saudi Iqama / National ID',
      'Travel Dates & Flight Details',
      'No Bank Statement needed for EVW'
    ],
    description: 'Fast-track electronic visa waiver (EVW) or standard visitor visa for London & UK cities.'  
  },
  {
    id: 'usa',
    country: 'United States (B1/B2 Tourist)',
    flagImg: 'https://flagcdn.com/w80/us.png',
    category: 'americas',
    popular: false,
    processingTime: '5 - 7 Working Days (Appt)',
    validity: '10 Years Multi-Entry',
    price: '650 SAR',
    requirements: [
      'DS-160 Confirmation Page',
      'Original Passport',
      'US Visa Specification Photo',
      'Appointment Slot Booking',
      'Bank Statement & Salary Certificate'
    ],
    description: '10-Year multi-entry tourist & business visa for all states across the USA.'
  },
  {
    id: 'japan',
    country: 'Japan (e-Visa / Tourist)',
    flagImg: 'https://flagcdn.com/w80/jp.png',
    category: 'asia',
    popular: true,
    processingTime: '3 - 4 Working Days',
    validity: '90 Days Single / Multi',
    price: '350 SAR',
    requirements: [
      'Passport Copy',
      'Iqama / Saudi National ID',
      'Recent Bank Statement',
      'Hotel Reservation'
    ],
    description: 'Hassle-free e-Visa application for Tokyo, Kyoto, and Japan vacations.'
  },
  {
    id: 'turkey',
    country: 'Turkey (e-Visa & Sticker)',
    flagImg: 'https://flagcdn.com/w80/tr.png',
    category: 'asia',
    popular: false,
    processingTime: 'Same Day (Instant)',
    validity: '180 Days Multiple Entry',
    price: '280 SAR',
    requirements: [
      'Passport Copy',
      'Flight Ticket Confirmation',
      'Email address for instant PDF receipt'
    ],
    description: 'Instant e-Visa issuing for Istanbul, Cappadocia, and Antalya trips.'
  },
  {
    id: 'canada',
    country: 'Canada (V-1 Tourist)',
    flagImg: 'https://flagcdn.com/w80/ca.png',
    category: 'americas',
    popular: false,
    processingTime: '10 - 15 Working Days',
    validity: 'Up to 10 Years (Passport Expiry)',
    price: '590 SAR',
    requirements: [
      'Passport Copy',
      'Biometrics Appointment Scheduling',
      'Financial Proof / Bank Statement',
      'Employment Letter'
    ],
    description: 'Long-term visitor visa for Canada travel and family visits.'
  }
];

export default function VisaSection() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [activeModalVisa, setActiveModalVisa] = useState(null);

  // Filter Logic
  const filteredVisas = selectedCategory === 'all'
    ? visaData
    : visaData.filter(v => v.category === selectedCategory);

  // Direct WhatsApp Trigger
  const handleApply = (visaName) => {
    const message = encodeURIComponent(`Hello Rozana Tours! I want to apply for the ${visaName} Visa. Please assist me with the process.`);
    window.open(`https://wa.me/966552993899?text=${message}`, '_blank');
  };

  return (
    <section id="visa" className="py-24 bg-slate-50 relative font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8">

        {/* 1. SECTION HEADER */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto space-y-4 mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-[#003B7A]/10 text-[#003B7A] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide">
            <ShieldCheck size={16} className="text-[#FF7A00]" />
            <span>Fast & Guaranteed Visa Processing</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#002B5B] tracking-tight">
            Seamless Visa Assistance for <span className="text-[#FF7A00]">Saudi Residents</span>
          </h2>

          <p className="text-slate-600 text-base md:text-lg leading-relaxed font-sans">
            We handle everything from document translation, embassy appointment slots, to form filling with a 99.6% approval rating.
          </p>
        </motion.div>

        {/* CATEGORY FILTER TABS WITH HD FLAG BADGES */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-12">
        {[
            { id: 'all', label: 'All Destinations', flagImg: null },
            { id: 'europe', label: 'Europe & UK', flagImg: 'https://flagcdn.com/w40/eu.png' },
            { id: 'americas', label: 'North America', flagImg: 'https://flagcdn.com/w40/us.png' },
            { id: 'asia', label: 'Asia & Turkey', flagImg: 'https://flagcdn.com/w40/jp.png' },
        ].map((tab) => (
            <button
            key={tab.id}
            onClick={() => setSelectedCategory(tab.id)}
            className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all duration-300 flex items-center gap-2 ${
                selectedCategory === tab.id
                ? 'bg-[#003B7A] text-white shadow-lg shadow-[#003B7A]/20 scale-105'
                : 'bg-white text-slate-600 hover:bg-slate-200 border border-slate-200'
            }`}
            >
            {tab.flagImg && (
                <img 
                src={tab.flagImg} 
                alt={tab.label} 
                className="w-4 h-3 object-cover rounded-sm border border-slate-200 shrink-0" 
                />
            )}
            <span>{tab.label}</span>
            </button>
        ))}
        </div>

        {/* 3. ANIMATED VISA CARD GRID */}
        <AnimatePresence mode="wait">
          <motion.div 
            key={selectedCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredVisas.map((visa) => (
              <motion.div 
                key={visa.id}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="bg-white rounded-3xl p-7 border border-slate-200/80 shadow-sm hover:shadow-2xl transition-shadow duration-300 flex flex-col justify-between group relative overflow-hidden text-left"
              >
                {/* POPULAR BADGE */}
                {visa.popular && (
                  <div className="absolute top-2 right-4 bg-linear-to-r from-[#FF7A00] to-amber-500 text-white text-[10px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm flex items-center gap-1">
                    <Sparkles size={12} />
                    <span>Most Popular</span>
                  </div>
                )}
                
                <div>
                  {/* HEADER INFO */}
                  <div className="flex items-center gap-3 mb-4">
                    <img 
                        src={visa.flagImg} 
                        alt={visa.country} 
                        className="w-10 h-7 object-cover rounded shadow-sm border border-slate-200 shrink-0" 
                    />
                    <div>
                      <h3 className="text-lg font-bold text-[#002B5B] group-hover:text-[#FF7A00] transition-colors">
                        {visa.country}
                      </h3>
                      <span className="text-xs text-slate-400 font-medium">Assisted Visa Processing</span>
                    </div>
                  </div>

                  <p className="text-xs text-slate-500 mb-6 leading-relaxed line-clamp-2">
                    {visa.description}
                  </p>

                  {/* PROCESSING TIME & VALIDITY */}
                  <div className="space-y-3 bg-slate-50 p-4 rounded-2xl border border-slate-100 mb-6 text-xs">
                    <div className="flex items-center justify-between text-slate-700">
                      <span className="flex items-center gap-1.5 font-medium text-slate-500">
                        <Clock size={15} className="text-[#0084D6]" />
                        Processing Time:
                      </span>
                      <span className="font-bold text-slate-900">{visa.processingTime}</span>
                    </div>

                    <div className="flex items-center justify-between text-slate-700 border-t border-slate-200/60 pt-2">
                      <span className="flex items-center gap-1.5 font-medium text-slate-500">
                        <Calendar size={15} className="text-[#FF7A00]" />
                        Visa Validity:
                      </span>
                      <span className="font-bold text-slate-900">{visa.validity}</span>
                    </div>
                  </div>

                  {/* REQUIREMENTS SUMMARY */}
                  <div className="space-y-2 mb-6">
                    <span className="text-xs font-bold text-slate-700 block">Key Requirements:</span>
                    {visa.requirements.slice(0, 3).map((req, index) => (
                      <div key={index} className="flex items-start gap-2 text-xs text-slate-600">
                        <CheckCircle2 size={14} className="text-emerald-500 shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{req}</span>
                      </div>
                    ))}
                    {visa.requirements.length > 3 && (
                      <button
                        onClick={() => setActiveModalVisa(visa)}
                        className="text-xs font-semibold text-[#0084D6] hover:text-[#003B7A] flex items-center gap-1 mt-1 underline"
                      >
                        <Info size={13} />
                        <span>View all {visa.requirements.length} requirements</span>
                      </button>
                    )}
                  </div>
                </div>

                {/* FOOTER & BUTTON */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] uppercase font-bold text-slate-400 block">Starting Fee</span>
                    <span className="text-xl font-black text-[#002B5B]">{visa.price}</span>
                  </div>

                  <button
                    onClick={() => handleApply(visa.country)}
                    className="inline-flex items-center gap-2 bg-[#002B5B] hover:bg-[#FF7A00] text-white px-4 py-2.5 rounded-xl font-bold text-xs transition-colors duration-300 shadow-md"
                  >
                    <MessageSquare size={14} />
                    <span>Apply Now</span>
                  </button>
                </div>

              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* 4. FULL REQUIREMENTS MODAL POPUP WITH ANIMATION */}
        <AnimatePresence>
          {activeModalVisa && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
            >
              <motion.div 
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ type: "spring", duration: 0.3 }}
                className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 space-y-6 shadow-2xl relative text-left"
              >
                <button 
                  onClick={() => setActiveModalVisa(null)}
                  className="absolute top-5 right-5 text-slate-400 hover:text-slate-700 bg-slate-100 p-2 rounded-full transition-colors"
                >
                  <X size={20} />
                </button>

                <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                  <span className="text-4xl">{activeModalVisa.flag}</span>
                  <div>
                    <h3 className="text-xl font-bold text-[#002B5B]">{activeModalVisa.country} Visa Requirements</h3>
                    <p className="text-xs text-slate-500">Official document checklist for Saudi & Iqama holders</p>
                  </div>
                </div>

                <div className="space-y-3 text-sm text-slate-700">
                  <p className="font-bold text-xs uppercase tracking-wider text-slate-400">Required Documents:</p>
                  {activeModalVisa.requirements.map((req, idx) => (
                    <div key={idx} className="flex items-start gap-3 bg-slate-50 p-3 rounded-xl border border-slate-100">
                      <CheckCircle2 size={18} className="text-emerald-500 shrink-0 mt-0.5" />
                      <span className="text-xs font-medium text-slate-800">{req}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-2 flex items-center justify-between gap-3">
                  <div>
                    <span className="text-xs text-slate-400 block">Service Fee</span>
                    <span className="text-lg font-extrabold text-[#002B5B]">{activeModalVisa.price}</span>
                  </div>
                  <button
                    onClick={() => {
                      handleApply(activeModalVisa.country);
                      setActiveModalVisa(null);
                    }}
                    className="flex-1 bg-[#FF7A00] hover:bg-orange-600 text-white py-3 rounded-xl font-bold text-xs flex items-center justify-center gap-2 shadow-lg"
                  >
                    <MessageSquare size={16} />
                    <span>Start WhatsApp Application</span>
                  </button>
                </div>

              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}