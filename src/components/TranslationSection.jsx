import React, { useState } from 'react';
import { 
  FileText, 
  Languages, 
  ShieldCheck, 
  Clock, 
  CheckCircle2, 
  MessageSquare, 
  Sparkles, 
  Award, 
  ArrowRight, 
  Stamp, 
  UploadCloud, 
  BadgeCheck,
  Building2
} from 'lucide-react';
import { motion } from 'framer-motion';

// DATA SET: Document Categories for Certified Translation
const documentTypes = [
  {
    id: 'travel-visa',
    title: 'Visa & Travel Documents',
    icon: <FileText className="text-[#FF7A00]" size={22} />,
    popular: true,
    turnaround: 'Same-Day (2 - 4 Hours)',
    items: [
      'Salary & HR Employment Certificates',
      'Bank Statements & Financial Proofs',
      'Saudi National ID & Iqama Cards',
      'Travel Insurance & Hotel Vouchers'
    ]
  },
  {
    id: 'personal-civil',
    title: 'Civil & Personal Records',
    icon: <BadgeCheck className="text-[#0084D6]" size={22} />,
    popular: false,
    turnaround: '24 Hours Express',
    items: [
      'Birth & Marriage Certificates',
      'Family Cards & Identification Books',
      'Police Clearance / Good Conduct',
      'Driver’s Licenses & International Permits'
    ]
  },
  {
    id: 'academic-commercial',
    title: 'Academic & Commercial Papers',
    icon: <Building2 className="text-emerald-500" size={22} />,
    popular: false,
    turnaround: '24 - 48 Hours',
    items: [
      'University Degrees & Academic Transcripts',
      'Commercial Registrations (CR / سجـل تجـاري)',
      'Articles of Association & Memorandums',
      'Medical Reports & Health Certificates'
    ]
  }
];

// DATA SET: Supported Target Languages
const targetLanguages = [
  { name: 'English', flag: 'https://flagcdn.com/w40/gb.png' },
  { name: 'French', flag: 'https://flagcdn.com/w40/fr.png' },
  { name: 'German', flag: 'https://flagcdn.com/w40/de.png' },
  { name: 'Spanish', flag: 'https://flagcdn.com/w40/es.png' },
  { name: 'Italian', flag: 'https://flagcdn.com/w40/it.png' },
  { name: 'Turkish', flag: 'https://flagcdn.com/w40/tr.png' },
  { name: 'Russian', flag: 'https://flagcdn.com/w40/ru.png' },
  { name: 'Chinese', flag: 'https://flagcdn.com/w40/cn.png' }
];

export default function TranslationSection() {
  const [selectedDoc, setSelectedDoc] = useState('Visa & Travel Documents');
  const [selectedLang, setSelectedLang] = useState('English');

  const handleInstantQuote = () => {
    const message = `Hello Rozana Tours! I need certified legal translation for:\n` +
      `📄 *Document Type:* ${selectedDoc}\n` +
      `🌐 *Target Language:* ${selectedLang}\n` +
      `Please give me the estimated fee and turnaround time.`;
    const encoded = encodeURIComponent(message);
    window.location.href = `https://wa.me/966552993899?text=${encoded}`;
  };

  return (
    <section id="translation" className="py-24 bg-slate-50 relative font-sans overflow-hidden">
      
      {/* SUBTLE BACKGROUND ACCENTS */}
      <div className="absolute top-10 left-1/3 w-96 h-96 bg-[#0084D6]/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-[#FF7A00]/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-360 mx-auto px-4 md:px-10 relative z-10">

        {/* 1. SECTION HEADER */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto space-y-4 mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-[#003B7A]/10 text-[#003B7A] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
            <Languages size={15} className="text-[#FF7A00]" />
            <span>Official Certified Translation &bull; ترجمة معتمدة</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#002B5B] tracking-tight">
            Accredited Legal Translation for <br />
            <span className="text-[#FF7A00]">Embassies & Ministries</span>
          </h2>

          <p className="text-slate-600 text-base md:text-lg leading-relaxed font-light">
            100% accepted by all foreign embassies in Riyadh, VFS Global, TLScontact, and Saudi government entities. Fast, accurate, and officially certified with sworn seals.
          </p>
        </motion.div>

        {/* 2. THREE PILLARS / ADVANTAGES */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
          <div className="bg-white p-6 rounded-2xl border border-slate-200/90 shadow-sm flex items-start gap-4 text-left">
            <div className="w-12 h-12 rounded-xl bg-[#002B5B] text-white flex items-center justify-center shrink-0 shadow-md">
              <Stamp size={22} className="text-[#FF7A00]" />
            </div>
            <div>
              <h4 className="font-bold text-[#002B5B] text-sm">Embassy-Approved Seal</h4>
              <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                Recognized by Schengen (European), UK, US, Canada, and Asian diplomatic missions.
              </p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200/90 shadow-sm flex items-start gap-4 text-left">
            <div className="w-12 h-12 rounded-xl bg-[#002B5B] text-white flex items-center justify-center shrink-0 shadow-md">
              <Clock size={22} className="text-amber-400" />
            </div>
            <div>
              <h4 className="font-bold text-[#002B5B] text-sm">Express Same-Day Delivery</h4>
              <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                Urgent document translations delivered in PDF and physical print within 2 to 4 hours.
              </p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200/90 shadow-sm flex items-start gap-4 text-left">
            <div className="w-12 h-12 rounded-xl bg-[#002B5B] text-white flex items-center justify-center shrink-0 shadow-md">
              <ShieldCheck size={22} className="text-emerald-400" />
            </div>
            <div>
              <h4 className="font-bold text-[#002B5B] text-sm">100% Legal Accuracy</h4>
              <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                Conducted by certified sworn translators ensuring terminology precision and privacy.
              </p>
            </div>
          </div>
        </div>

        {/* 3. MAIN CARDS GRID (DOCUMENT TYPES & QUICK ESTIMATOR) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          
          {/* LEFT: 3 DOCUMENT CATEGORIES (7 cols) */}
          <div className="lg:col-span-7 space-y-5">
            {documentTypes.map((doc) => (
              <motion.div
                key={doc.id}
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="bg-white p-6 rounded-3xl border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 text-left relative overflow-hidden"
              >
                {doc.popular && (
                  <span className="absolute top-4 right-4 bg-linear-to-r from-[#FF7A00] to-amber-500 text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-wider shadow-sm flex items-center gap-1">
                    <Sparkles size={11} />
                    <span>High Demand</span>
                  </span>
                )}

                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center shrink-0">
                    {doc.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#002B5B]">{doc.title}</h3>
                    <p className="text-xs text-slate-400 flex items-center gap-1.5 mt-0.5">
                      <Clock size={12} className="text-slate-400" />
                      <span>Turnaround: {doc.turnaround}</span>
                    </p>
                  </div>
                </div>

                {/* ITEMS CHECKLIST */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2 border-t border-slate-100">
                  {doc.items.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-slate-600">
                      <CheckCircle2 size={14} className="text-emerald-500 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* RIGHT: INSTANT WHATSAPP TRANSLATION DISPATCH (5 cols) */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 bg-white p-7 sm:p-8 rounded-3xl border border-slate-200 shadow-xl text-left space-y-6"
          >
            <div className="border-b border-slate-100 pb-4">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#FF7A00] block">
                Instant Translation Quote
              </span>
              <h3 className="text-xl font-black text-[#002B5B] mt-1">
                Upload & Translate Today
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Send a photo or PDF of your document directly to our Riyadh certified translator.
              </p>
            </div>

            {/* SELECT DOCUMENT TYPE */}
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">
                Select Document Category:
              </label>
              <select
                value={selectedDoc}
                onChange={(e) => setSelectedDoc(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-3 text-xs text-slate-800 font-medium focus:outline-none focus:border-[#FF7A00]"
              >
                <option value="Salary / Bank Statement (Visa)">Visa & Employment Financial Proofs</option>
                <option value="Iqama / National ID / Family Card">National ID / Iqama / Family Card</option>
                <option value="Marriage / Birth Certificate">Marriage / Birth Certificate</option>
                <option value="Commercial Registration / Legal Contract">Commercial Registration / Legal Contracts</option>
                <option value="University Degree / Academic Transcript">University Degree & Academic Records</option>
                <option value="Driver's License / International Permit">Driver’s License & Permits</option>
              </select>
            </div>

            {/* SELECT TARGET LANGUAGE */}
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">
                Target Language (Language to translate into):
              </label>
              <select
                value={selectedLang}
                onChange={(e) => setSelectedLang(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-3 text-xs text-slate-800 font-medium focus:outline-none focus:border-[#FF7A00]"
              >
                {targetLanguages.map((l) => (
                  <option key={l.name} value={l.name}>{l.name}</option>
                ))}
              </select>
            </div>

            {/* UPLOAD PROMPT BANNER */}
            <div className="bg-slate-50 border border-dashed border-slate-300 rounded-2xl p-4 text-center space-y-2">
              <UploadCloud size={24} className="text-[#0084D6] mx-auto" />
              <p className="text-xs font-semibold text-slate-700">
                Snap a clear photo or attach PDF via WhatsApp
              </p>
              <p className="text-[11px] text-slate-400">
                Our translation desk responds with exact quote & timing in under 15 minutes.
              </p>
            </div>

            {/* ACTION BUTTON */}
            <button
              onClick={handleInstantQuote}
              className="w-full bg-linear-to-r from-[#FF7A00] to-amber-500 hover:from-amber-500 hover:to-[#FF7A00] text-white py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider shadow-lg shadow-[#FF7A00]/25 transition-all flex items-center justify-center gap-2 hover:scale-[1.01] active:scale-[0.99]"
            >
              <MessageSquare size={16} />
              <span>Send Document via WhatsApp</span>
            </button>
          </motion.div>

        </div>

        {/* 4. SUPPORTED TARGET LANGUAGES PILL ROW */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200/90 shadow-sm flex flex-wrap items-center justify-center gap-3">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-wide mr-2">
            Common Language Pairs:
          </span>
          {targetLanguages.map((lang, idx) => (
            <div key={idx} className="flex items-center gap-2 bg-slate-50 border border-slate-200 px-3 py-1.5 rounded-full text-xs font-semibold text-slate-700">
              <img src={lang.flag} alt={lang.name} className="w-4 h-3 object-cover rounded-sm border border-slate-200" />
              <span>{lang.name}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}