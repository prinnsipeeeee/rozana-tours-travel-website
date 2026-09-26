import React, { useState } from "react";
import { 
  ShieldCheck, 
  Sparkles, 
  Clock, 
  Calendar, 
  CheckCircle2, 
  MessageSquare, 
  Info, 
  X,
  FileCheck
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";

// DEFAULT DATA SET
const defaultVisaData = [
  {
    id: 'schengen',
    country: 'Schengen (Europe)',
    country_ar: 'تأشيرة شنغن (أوروبا)',
    flagImg: 'https://flagcdn.com/w80/eu.png',
    category: 'europe',
    popular: true,
    processingTime: '10 - 15 Working Days',
    processingTime_ar: '10 - 15 يوم عمل',
    validity: 'Up to 90 Days / Multi-Entry',
    validity_ar: 'تصل إلى 90 يوماً / دخول متعدد',
    price: '450 SAR',
    requirements: [
      'Original Passport (Valid 6+ months)',
      'Saudi ID / Iqama Copy',
      '2 White Background Photos (3.5 x 4.5cm)',
      '3-6 Months Stamped Bank Statement',
      'Flight & Hotel Bookings (Provided by Us)'
    ],
    requirements_ar: [
      'جواز سفر أصلي (صالح لمدة 6 أشهر فأكثر)',
      'صورة من الهوية الوطنية أو الإقامة',
      'صورتان شخصيتان بخلفية بيضاء (3.5 × 4.5 سم)',
      'كشف حساب بنكي مختوم لآخر 3 إلى 6 أشهر',
      'حجوزات طيران وفندق مؤكدة (نوفرها لك)'
    ],
    description: 'Travel freely across 29 European countries including France, Italy, Germany, and Spain.',
    description_ar: 'سافر بحرية عبر 29 دولة أوروبية تشمل فرنسا، إيطاليا، ألمانيا، وإسبانيا.'
  },
  {
    id: 'uk',
    country: 'United Kingdom (UK)',
    country_ar: 'المملكة المتحدة (بريطانيا)',
    flagImg: 'https://flagcdn.com/w80/gb.png',
    category: 'europe',
    popular: true,
    processingTime: '24 - 48 Hours (ETA)',
    processingTime_ar: '24 - 48 ساعة (إعفاء ETA)',
    validity: '2 - 10 Years Multiple',
    validity_ar: 'سنتان إلى 10 سنوات متعددة',
    price: '380 SAR',
    requirements: [
      'High-Resolution Passport Scan',
      'Saudi Iqama / National ID Copy',
      'Confirmed Flight & Hotel Details',
      'Completed Online Form'
    ],
    requirements_ar: [
      'صورة واضحة عالية الدقة لجواز السفر',
      'صورة من الهوية الوطنية أو الإقامة',
      'تفاصيل حجز الطيران والإقامة',
      'تعبئة النموذج الإلكتروني الرسمي'
    ],
    description: 'Fast-track electronic visa waiver (ETA) or standard visitor visa for London & UK cities.',
    description_ar: 'استخراج سريع للإعفاء الإلكتروني البريطاني (ETA) أو تأشيرة الزيارة العادية إلى لندن وكافة مدن بريطانيا.'
  },
  {
    id: 'usa',
    country: 'United States (B1/B2)',
    country_ar: 'الولايات المتحدة (B1/B2)',
    flagImg: 'https://flagcdn.com/w80/us.png',
    category: 'americas',
    popular: false,
    processingTime: 'Express Slot Assistance',
    processingTime_ar: 'تأكيد الموعد ومراجعة الاستمارة',
    validity: 'Up to 10 Years Multi-Entry',
    validity_ar: 'تصل إلى 10 سنوات دخول متعدد',
    price: '650 SAR',
    requirements: [
      'DS-160 Application Confirmation Page',
      'Valid Passport & 5x5cm US Photo',
      'Embassy Appointment Confirmation Slip',
      'Salary Letter & Bank Statement'
    ],
    requirements_ar: [
      'صفحة تأكيد استمارة التقديم DS-160',
      'جواز سفر ساري وصورة مقاس 5×5 سم بخلفية بيضاء',
      'إيصال تأكيد موعد المقابلة بالسفارة بالرياض',
      'خطاب تعريف بالراتب وكشف حساب بنكي'
    ],
    description: 'Comprehensive US tourist and business visa filing, interview scheduling, and document review.',
    description_ar: 'تعبئة استمارة التأشيرة الأمريكية السياحية والتجارية وحجز أقرب موعد للمقابلة وتجهيز الملف بالكامل.'
  },
  {
    id: 'japan',
    country: 'Japan & East Asia',
    country_ar: 'اليابان وشرق آسيا',
    flagImg: 'https://flagcdn.com/w80/jp.png',
    category: 'asia',
    popular: false,
    processingTime: '5 - 7 Working Days',
    processingTime_ar: '5 - 7 أيام عمل',
    validity: '90 Days Tourist Permit',
    validity_ar: 'تصريح سياحي لمدة 90 يوماً',
    price: '320 SAR',
    requirements: [
      'Original Passport Scan',
      'White Background Photo',
      '3-Month Bank Statement',
      'Confirmed Flight Itinerary'
    ],
    requirements_ar: [
      'نسخة واضحة من جواز السفر',
      'صورة شخصية حديثة بخلفية بيضاء',
      'كشف حساب بنكي لآخر 3 أشهر',
      'حجز طيران مبدئي مؤكد'
    ],
    description: 'Explore Tokyo, Kyoto, and beyond with official e-Visa processing for Saudi travelers.',
    description_ar: 'استكشف طوكيو وكيوتو مع استخراج التأشيرة الإلكترونية الرسمية لليابان بكل سهولة.'
  }
];

export default function VisaSection({ items, settings = {} }) {
  const { isRTL, getContent } = useLanguage();
  const whatsappNumber = settings.whatsapp_number || '966552993899';
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedVisa, setSelectedVisa] = useState(null);

  const displayData = items && items.length > 0 ? items : defaultVisaData;

  const filteredVisas = selectedCategory === 'all'
    ? displayData
    : displayData.filter(v => v.category === selectedCategory);

  const handleApplyWhatsApp = (countryName) => {
    const text = isRTL 
      ? `السلام عليكم روزانة للسياحة، أرغب في التقديم على استخراج ${countryName}. الرجاء تزويدي بالتفاصيل والمواعيد المتاحة.`
      : `Hello Rozana Tours! I want to apply for the ${countryName} visa. Please provide me with requirements and details.`;
    const encoded = encodeURIComponent(text);
    window.location.href = `https://wa.me/${whatsappNumber}?text=${encoded}`;
  };

  return (
    <section id="visa" className="py-24 bg-white relative font-sans overflow-hidden">
      <div className="max-w-360 mx-auto px-4 sm:px-6 md:px-10 relative z-10">

        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 bg-[#003B7A]/10 text-[#003B7A] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
            <FileCheck size={15} className="text-[#FF7A00]" />
            <span>{isRTL ? 'خدمات التأشيرات المعتمدة' : 'Fast-Track Worldwide Visas'}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#002B5B] tracking-tight">
            {isRTL ? 'استخراج التأشيرات لجميع ' : 'Fast-Track Global '}
            <span className="text-[#FF7A00]">{isRTL ? 'دول العالم' : 'Visa Assistance'}</span>
          </h2>

          <p className="text-slate-600 text-base md:text-lg leading-relaxed font-light">
            {isRTL 
              ? 'فريق متخصص لمساعدتك في استخراج تأشيرات الشنغن، بريطانيا، وأمريكا مع حجز المواعيد وتعبئة النماذج وتجهيز ملفك كاملاً.'
              : 'End-to-end visa assistance for Saudi citizens & residents. Appointment booking, official translations, and application filing.'}
          </p>
        </div>

        {/* CATEGORY TABS */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {[
            { id: 'all', label: isRTL ? 'جميع التأشيرات' : 'All Destinations' },
            { id: 'europe', label: isRTL ? '🇪🇺 أوروبا وبريطانيا' : '🇪🇺 Europe & UK' },
            { id: 'americas', label: isRTL ? '🇺🇸 أمريكا وكندا' : '🇺🇸 USA & Canada' },
            { id: 'asia', label: isRTL ? '🇯🇵 آسيا وشرق آسيا' : '🇯🇵 Asia' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSelectedCategory(tab.id)}
              className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all duration-300 ${
                selectedCategory === tab.id
                  ? 'bg-[#003B7A] text-white shadow-md shadow-[#003B7A]/25 scale-105'
                  : 'bg-slate-50 text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* VISA CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {filteredVisas.map((visa) => (
            <motion.div
              key={visa.id}
              whileHover={{ y: -6 }}
              className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-sm hover:shadow-xl transition-all text-start flex flex-col justify-between group relative overflow-hidden"
            >
              {visa.popular && (
                <div className="absolute top-3.5 right-4 bg-linear-to-r from-[#FF7A00] to-amber-500 text-white text-[9px] font-black px-2.5 py-0.5 rounded-full uppercase tracking-wider shadow-sm flex items-center gap-1">
                  <Sparkles size={10} />
                  <span>{isRTL ? 'الأكثر طلباً' : 'Popular'}</span>
                </div>
              )}

              <div>
                <div className="flex items-center gap-3 mb-4">
                  <img src={visa.flagImg || visa.flag} alt="" className="w-8 h-6 object-cover rounded shadow-xs border border-slate-200" />
                  <div>
                    <h3 className="font-extrabold text-[#002B5B] text-base group-hover:text-[#FF7A00] transition-colors">
                      {getContent(visa, 'country')}
                    </h3>
                    <span className="text-[11px] text-slate-400 font-medium">
                      {isRTL ? 'تجهيز الملف بالكامل' : 'Full Assisted Filing'}
                    </span>
                  </div>
                </div>

                <p className="text-xs text-slate-500 mb-5 leading-relaxed line-clamp-2">
                  {getContent(visa, 'description')}
                </p>

                <div className="space-y-2 py-3 border-y border-slate-100 mb-6 text-xs text-slate-600">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400 flex items-center gap-1">
                      <Clock size={13} className="text-[#0084D6]" /> {isRTL ? 'مدة الإنجاز:' : 'Turnaround:'}
                    </span>
                    <span className="font-bold text-[#002B5B]">{getContent(visa, 'processingTime')}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400 flex items-center gap-1">
                      <Calendar size={13} className="text-[#FF7A00]" /> {isRTL ? 'الصلاحية:' : 'Validity:'}
                    </span>
                    <span className="font-bold text-emerald-600">{getContent(visa, 'validity')}</span>
                  </div>
                </div>
              </div>

              <div className="space-y-3 pt-2">
                <div className="flex items-baseline justify-between">
                  <span className="text-[10px] text-slate-400 font-bold uppercase">{isRTL ? 'رسوم الخدمة' : 'Service Fee'}</span>
                  <span className="text-xl font-black text-[#002B5B]">{visa.price}</span>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => setSelectedVisa(visa)}
                    className="bg-slate-100 hover:bg-slate-200 text-slate-700 py-2.5 rounded-xl font-bold text-xs transition-colors"
                  >
                    {isRTL ? 'المتطلبات' : 'Requirements'}
                  </button>

                  <button
                    onClick={() => handleApplyWhatsApp(getContent(visa, 'country'))}
                    className="bg-[#002B5B] hover:bg-[#FF7A00] text-white py-2.5 rounded-xl font-bold text-xs transition-colors shadow-sm flex items-center justify-center gap-1"
                  >
                    <MessageSquare size={13} />
                    <span>{isRTL ? 'قدم الآن' : 'Apply'}</span>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* REQUIREMENTS POPUP MODAL */}
      <AnimatePresence>
        {selectedVisa && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelectedVisa(null)} className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm" />
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} className="relative w-full max-w-lg bg-white rounded-3xl p-6 sm:p-8 shadow-2xl z-10 text-start">
              <button onClick={() => setSelectedVisa(null)} className="absolute top-5 right-5 w-8 h-8 rounded-full bg-slate-100 text-slate-600 flex items-center justify-center">
                <X size={16} />
              </button>

              <div className="flex items-center gap-3 mb-4">
                <img src={selectedVisa.flagImg || selectedVisa.flag} alt="" className="w-8 h-6 object-cover rounded border" />
                <h3 className="text-xl font-black text-[#002B5B]">
                  {getContent(selectedVisa, 'country')} - {isRTL ? 'متطلبات التقديم' : 'Checklist'}
                </h3>
              </div>

              <div className="space-y-2.5 py-4 border-y border-slate-100 mb-6 max-h-60 overflow-y-auto">
                {((isRTL && selectedVisa.requirements_ar) ? selectedVisa.requirements_ar : selectedVisa.requirements).map((req, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs text-slate-700">
                    <CheckCircle2 size={15} className="text-emerald-500 shrink-0 mt-0.5" />
                    <span>{req}</span>
                  </div>
                ))}
              </div>

              <button
                onClick={() => handleApplyWhatsApp(getContent(selectedVisa, 'country'))}
                className="w-full bg-[#FF7A00] hover:bg-orange-600 text-white py-3 rounded-xl font-bold text-xs uppercase shadow-md flex items-center justify-center gap-2"
              >
                <MessageSquare size={16} />
                <span>{isRTL ? 'تواصل مع مسؤول التأشيرات' : 'Inquire via WhatsApp'}</span>
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
