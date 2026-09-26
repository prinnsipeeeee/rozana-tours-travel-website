import React, { useState } from 'react';
import { 
  Compass, 
  ArrowRight, 
  ShieldCheck, 
  Clock, 
  Star, 
  Plane, 
  FileCheck, 
  Navigation,
  CheckCircle2,
  Sparkles
} from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

export default function Hero() {
  const { lang, t, isRTL } = useLanguage();
  const [activeTab, setActiveTab] = useState('visas');
  const [selectedDestination, setSelectedDestination] = useState('Schengen');

  const handleConsoleSubmit = () => {
    let msg = '';
    if (activeTab === 'visas') {
      msg = isRTL 
        ? `السلام عليكم روزانة للسياحة، أرغب في الاستفسار عن تأشيرة ${selectedDestination}.`
        : `Hello Rozana Tours! I would like to inquire about visa processing for ${selectedDestination}.`;
    } else if (activeTab === 'tours') {
      msg = isRTL 
        ? `السلام عليكم روزانة للسياحة، أرغب في الاستفسار عن بكجات ${selectedDestination}.`
        : `Hello Rozana Tours! I want to check holiday packages for ${selectedDestination}.`;
    } else {
      msg = isRTL 
        ? `السلام عليكم روزانة للسياحة، أرغب في حجز طيران إلى ${selectedDestination}.`
        : `Hello Rozana Tours! I need to search and book flights to ${selectedDestination}.`;
    }
    const encoded = encodeURIComponent(msg);
    window.location.href = `https://wa.me/966552993899?text=${encoded}`;
  };

  return (
    <section id="home" className="relative min-h-[92vh] pt-36 pb-20 bg-white font-sans flex items-center overflow-hidden">
      
      {/* 1. RADAR & COMPASS GRID BACKGROUND */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#002B5B08_1px,transparent_1px),linear-gradient(to_bottom,#002B5B08_1px,transparent_1px)] bg-size-[36px_36px] pointer-events-none"></div>

      {/* RADAR RINGS */}
      <div className="absolute top-1/2 right-10 -translate-y-1/2 w-150 h-150 rounded-full border border-[#0084D6]/10 pointer-events-none hidden lg:block"></div>
      <div className="absolute top-1/2 right-10 -translate-y-1/2 w-150 h-150 rounded-full border border-[#FF7A00]/10 pointer-events-none hidden lg:block"></div>

      {/* AMBIENT GLOWS */}
      <div className="absolute top-20 right-1/4 w-96 h-96 bg-[#FF7A00]/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#0084D6]/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-360 mx-auto px-4 sm:px-6 md:px-10 w-full relative z-10">
        
        {/* RESPONSIVE GRID (EQUAL 2-COL SPLIT, ZERO OVERLAPPING) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
          
          {/* HEADLINE COLUMN (ALIGNED TO START) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full space-y-6 text-start"
          >
            {/* VIP BADGE */}
            <div className="inline-flex items-center gap-2 bg-[#002B5B]/5 border border-[#002B5B]/10 text-[#002B5B] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
              <Compass size={15} className="text-[#FF7A00] animate-spin-slow shrink-0" />
              <span>{t('hero.badge')}</span>
              <span className="bg-[#FF7A00] text-white text-[9px] font-black px-2 py-0.5 rounded-full">
                VIP
              </span>
            </div>

            {/* HEADLINE IN ARABIC & ENGLISH */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-[#002B5B] tracking-tight leading-[1.18]">
              {t('hero.title_1')} <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-[#FF7A00] via-amber-500 to-[#FF7A00]">
                {t('hero.title_2')}
              </span>
            </h1>

            {/* SUBTITLE */}
            <p className="text-slate-600 text-sm sm:text-base lg:text-lg leading-relaxed max-w-xl font-light">
              {t('hero.subtitle')}
            </p>

            {/* TRUST PILLS */}
            <div className="flex flex-wrap items-center gap-2.5 pt-1">
              <div className="flex items-center gap-2 bg-slate-50 border border-slate-200/90 px-3.5 py-1.5 rounded-full text-xs font-semibold text-slate-700">
                <CheckCircle2 size={15} className="text-emerald-500 shrink-0" />
                <span>{t('hero.stat_approval')}</span>
              </div>
              <div className="flex items-center gap-2 bg-slate-50 border border-slate-200/90 px-3.5 py-1.5 rounded-full text-xs font-semibold text-slate-700">
                <ShieldCheck size={15} className="text-[#0084D6] shrink-0" />
                <span>{t('hero.stat_licensed')}</span>
              </div>
              <div className="flex items-center gap-2 bg-slate-50 border border-slate-200/90 px-3.5 py-1.5 rounded-full text-xs font-semibold text-slate-700">
                <Clock size={15} className="text-[#FF7A00] shrink-0" />
                <span>{t('hero.stat_express')}</span>
              </div>
            </div>

            {/* ACTION BUTTONS */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="https://wa.me/966552993899"
                className="bg-linear-to-r from-[#FF7A00] to-amber-500 hover:from-amber-500 hover:to-[#FF7A00] text-white px-7 py-3.5 rounded-2xl font-bold text-xs uppercase tracking-wider shadow-xl shadow-[#FF7A00]/25 transition-all hover:scale-105 active:scale-95 flex items-center gap-2"
              >
                <span>{t('hero.cta_consult')}</span>
                <ArrowRight size={15} className={isRTL ? 'rotate-180' : ''} />
              </a>

              <a
                href="#packages"
                className="bg-white hover:bg-slate-50 text-[#002B5B] border border-slate-200 px-6 py-3.5 rounded-2xl font-bold text-xs uppercase tracking-wider transition-all hover:border-[#0084D6] shadow-xs"
              >
                <span>{t('hero.cta_explore')}</span>
              </a>
            </div>
          </motion.div>

          {/* QUICK FINDER CONSOLE COLUMN (ALIGNED TO START) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full max-w-lg mx-auto lg:mx-0 relative"
          >
            {/* FLOATING 4.9 RATING BADGE (Fixed positioning in RTL) */}
            <motion.div 
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className={`absolute -top-4 ${isRTL ? '-left-2' : '-right-2'} bg-white/95 backdrop-blur-md p-3 rounded-2xl border border-slate-200/90 shadow-xl flex items-center gap-2.5 z-20`}
            >
              <div className="w-8 h-8 rounded-xl bg-amber-400/20 text-amber-500 flex items-center justify-center font-bold">
                <Star size={16} fill="#F59E0B" />
              </div>
              <div className="text-start">
                <div className="flex items-center gap-1">
                  <span className="text-xs font-black text-[#002B5B]">4.9 / 5.0</span>
                  <span className="text-[9px] text-emerald-600 font-bold bg-emerald-50 px-1 py-0.2 rounded">
                    {isRTL ? 'معتمد' : 'Verified'}
                  </span>
                </div>
                <p className="text-[10px] text-slate-500 font-medium">
                  {isRTL ? 'أكثر من 17,000 مسافر' : '17,000+ Happy Travelers'}
                </p>
              </div>
            </motion.div>

            {/* FROSTED LUXURY FINDER CARD */}
            <div className="bg-white/95 backdrop-blur-xl p-6 sm:p-7 rounded-3xl border border-slate-200/90 shadow-2xl text-start space-y-5">
              
              {/* CARD HEADER */}
              <div className="border-b border-slate-100 pb-3">
                <div className="flex items-center gap-1.5 text-xs font-bold text-[#FF7A00] uppercase tracking-wider mb-1">
                  <Navigation size={13} />
                  <span>{t('hero.finder_title')}</span>
                </div>
                <h3 className="text-lg sm:text-xl font-black text-[#002B5B]">
                  {t('hero.finder_subtitle')}
                </h3>
              </div>

              {/* TABS SELECTOR */}
              <div className="grid grid-cols-3 gap-1.5 bg-slate-100 p-1.5 rounded-2xl">
                <button
                  type="button"
                  onClick={() => { setActiveTab('visas'); setSelectedDestination(isRTL ? 'شنغن (أوروبا)' : 'Schengen (Europe)'); }}
                  className={`py-2 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1 ${
                    activeTab === 'visas'
                      ? 'bg-white text-[#002B5B] shadow-sm'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  <FileCheck size={14} className={activeTab === 'visas' ? 'text-[#FF7A00]' : ''} />
                  <span>{t('hero.tab_visas')}</span>
                </button>

                <button
                  type="button"
                  onClick={() => { setActiveTab('tours'); setSelectedDestination(isRTL ? 'المالديف' : 'Maldives'); }}
                  className={`py-2 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1 ${
                    activeTab === 'tours'
                      ? 'bg-white text-[#002B5B] shadow-sm'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  <Compass size={14} className={activeTab === 'tours' ? 'text-[#0084D6]' : ''} />
                  <span>{t('hero.tab_tours')}</span>
                </button>

                <button
                  type="button"
                  onClick={() => { setActiveTab('flights'); setSelectedDestination(isRTL ? 'دبي (DXB)' : 'Dubai (DXB)'); }}
                  className={`py-2 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1 ${
                    activeTab === 'flights'
                      ? 'bg-white text-[#002B5B] shadow-sm'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  <Plane size={14} className={activeTab === 'flights' ? 'text-emerald-500' : ''} />
                  <span>{t('hero.tab_flights')}</span>
                </button>
              </div>

              {/* SELECT FIELD */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  {activeTab === 'visas' && (isRTL ? 'اختر الدولة / نوع التأشيرة:' : 'Select Target Destination / Visa Type:')}
                  {activeTab === 'tours' && (isRTL ? 'اختر الوجهة السياحية:' : 'Select Holiday Vacation Destination:')}
                  {activeTab === 'flights' && (isRTL ? 'اختر وجهة الطيران:' : 'Select Flight Destination:')}
                </label>

                <select
                  value={selectedDestination}
                  onChange={(e) => setSelectedDestination(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-3 text-xs text-slate-800 font-semibold focus:outline-none focus:border-[#FF7A00]"
                >
                  {activeTab === 'visas' && (
                    <>
                      <option value={isRTL ? 'تأشيرة شنغن (أوروبا)' : 'Schengen (Europe)'}>
                        {isRTL ? 'تأشيرة شنغن (فرنسا، إيطاليا، ألمانيا، إسبانيا)' : 'Schengen (France, Italy, Germany, Spain)'}
                      </option>
                      <option value={isRTL ? 'تأشيرة بريطانيا' : 'United Kingdom'}>
                        {isRTL ? 'المملكة المتحدة (بريطانيا ETA وعادية)' : 'United Kingdom (UK ETA & Standard)'}
                      </option>
                      <option value={isRTL ? 'تأشيرة أمريكا B1/B2' : 'United States (US B1/B2)'}>
                        {isRTL ? 'الولايات المتحدة الأمريكية (سياحة وعمل B1/B2)' : 'United States (US B1/B2 Tourist & Business)'}
                      </option>
                      <option value={isRTL ? 'اليابان وكوريا الجنوبية' : 'Japan & East Asia'}>
                        {isRTL ? 'اليابان، كوريا الجنوبية وشرق آسيا' : 'Japan, South Korea & East Asia'}
                      </option>
                    </>
                  )}
                  {activeTab === 'tours' && (
                    <>
                      <option value={isRTL ? 'منتجعات المالديف الفاخرة' : 'Maldives Paradise'}>
                        {isRTL ? 'المالديف - فلل مائية فاخرة' : 'Maldives Paradise & Overwater Villa'}
                      </option>
                      <option value={isRTL ? 'سويسرا والريف الأوروبي' : 'Switzerland Alps'}>
                        {isRTL ? 'سويسرا - جبال الألب والقطار البانورامي' : 'Switzerland Alps & Scenic Glacier Express'}
                      </option>
                      <option value={isRTL ? 'تركيا (إسطنبول وكابادوكيا)' : 'Turkey Luxury'}>
                        {isRTL ? 'تركيا - إسطنبول وكابادوكيا' : 'Turkey Luxury Istanbul & Cappadocia'}
                      </option>
                    </>
                  )}
                  {activeTab === 'flights' && (
                    <>
                      <option value="Dubai (DXB)">{isRTL ? 'دبي (DXB) - الإمارات' : 'Dubai (DXB) - UAE'}</option>
                      <option value="Cairo (CAI)">{isRTL ? 'القاهرة (CAI) - مصر' : 'Cairo (CAI) - Egypt'}</option>
                      <option value="London (LHR)">{isRTL ? 'لندن (LHR) - بريطانيا' : 'London (LHR) - United Kingdom'}</option>
                      <option value="Istanbul (IST)">{isRTL ? 'إسطنبول (IST) - تركيا' : 'Istanbul (IST) - Turkey'}</option>
                    </>
                  )}
                </select>
              </div>

              {/* HIGHLIGHT DETAILS */}
              <div className="bg-slate-50 p-3.5 rounded-2xl border border-slate-100 flex items-start gap-2.5">
                <div className="w-7 h-7 rounded-lg bg-[#FF7A00]/10 text-[#FF7A00] flex items-center justify-center shrink-0 mt-0.5">
                  <Sparkles size={14} />
                </div>
                <div>
                  <h5 className="text-xs font-bold text-[#002B5B]">
                    {isRTL ? 'مراجعة فورية للمستندات وحجز المواعيد' : 'Instant Document Pre-Check & Slots'}
                  </h5>
                  <p className="text-[10px] text-slate-500 mt-0.5 leading-relaxed">
                    {isRTL ? 'رد مباشر عبر الواتساب مع توضيح المتطلبات والأسعار الرسمية.' : 'Instant WhatsApp response with exact requirements & official fees.'}
                  </p>
                </div>
              </div>

              {/* SUBMIT BUTTON */}
              <button
                type="button"
                onClick={handleConsoleSubmit}
                className="w-full bg-linear-to-r from-[#FF7A00] to-amber-500 hover:from-amber-500 hover:to-[#FF7A00] text-white py-3 rounded-xl font-bold text-xs uppercase tracking-wider shadow-lg shadow-[#FF7A00]/25 transition-all flex items-center justify-center gap-2 hover:scale-[1.01] active:scale-[0.99]"
              >
                <span>{t('hero.check_rates')}</span>
                <ArrowRight size={14} className={isRTL ? 'rotate-180' : ''} />
              </button>
            </div>

          </motion.div>

        </div>

        {/* BOTTOM METRICS COUNTER BAR */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-10 border-t border-slate-200/90 text-center">
          <div className="space-y-1">
            <span className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#002B5B] tracking-tight">15,000+</span>
            <p className="text-xs text-slate-500 font-medium">{isRTL ? 'تأشيرة تم إنجازها بنجاح' : 'Visas Issued Successfully'}</p>
          </div>

          <div className="space-y-1 border-x border-slate-200/80">
            <span className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#002B5B] tracking-tight">120+</span>
            <p className="text-xs text-slate-500 font-medium">{isRTL ? 'وجهة سياحية حول العالم' : 'Worldwide Destinations'}</p>
          </div>

          <div className="space-y-1 md:border-r border-slate-200/80">
            <span className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#002B5B] tracking-tight">100%</span>
            <p className="text-xs text-slate-500 font-medium">{isRTL ? 'شفافية كاملة في الأسعار' : 'Transparent Pricing'}</p>
          </div>

          <div className="space-y-1">
            <span className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#002B5B] tracking-tight">24 / 7</span>
            <p className="text-xs text-slate-500 font-medium">{isRTL ? 'دعم VIP متواصل عبر الواتساب' : 'VIP WhatsApp Support'}</p>
          </div>
        </div>

      </div>
    </section>
  );
}