import React, { useState } from 'react';
import { 
  FileText, 
  Languages, 
  ShieldCheck, 
  Clock, 
  CheckCircle2, 
  MessageSquare, 
  Sparkles, 
  Stamp, 
  UploadCloud, 
  BadgeCheck,
  Building2
} from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const defaultDocumentTypes = [
  {
    id: 'travel-visa',
    title: 'Visa & Travel Documents',
    title_ar: 'وثائق السفر واستخراج التأشيرات',
    popular: true,
    turnaround: 'Same-Day (2 - 4 Hours)',
    turnaround_ar: 'نفس اليوم (2 - 4 ساعات)',
    items: [
      'Salary & HR Employment Certificates',
      'Bank Statements & Financial Proofs',
      'Saudi National ID & Iqama Cards',
      'Travel Insurance & Hotel Vouchers'
    ],
    items_ar: [
      'خطابات التعريف بالراتب والموارد البشرية',
      'كشوف الحسابات البنكية والإثباتات المالية',
      'بطاقات الهوية الوطنية والإقامة السعودية',
      'وثائق التأمين الطبي وتأكيدات الفنادق'
    ]
  },
  {
    id: 'personal-civil',
    title: 'Civil & Personal Records',
    title_ar: 'الوثائق الشخصية والأحوال المدنية',
    popular: false,
    turnaround: '24 Hours Express',
    turnaround_ar: '24 ساعة إنجاز سريع',
    items: [
      'Birth & Marriage Certificates',
      'Family Cards & Identification Books',
      'Police Clearance / Good Conduct',
      'Driver’s Licenses & International Permits'
    ],
    items_ar: [
      'شهادات الميلاد وعقود الزواج الرسمية',
      'بطاقات العائلة ودفاتر النفوس',
      'شهادات الخلو من السوابق الجنائية',
      'رخص القيادة والتصاريح الدولية'
    ]
  },
  {
    id: 'academic-commercial',
    title: 'Academic & Commercial Papers',
    title_ar: 'الشهادات والوثائق التجارية',
    popular: false,
    turnaround: '24 - 48 Hours',
    turnaround_ar: '24 - 48 ساعة',
    items: [
      'University Degrees & Academic Transcripts',
      'Commercial Registrations (CR / سجل تجاري)',
      'Articles of Association & Memorandums',
      'Medical Reports & Health Certificates'
    ],
    items_ar: [
      'الشهادات الجامعية وسجلات الدرجات',
      'السجلات التجارية والوكالات والقرارات',
      'عقود التأسيس والاتفاقيات الدولية',
      'التقارير والشهادات الطبية الرسمية'
    ]
  }
];

const targetLanguages = [
  { name: 'English', name_ar: 'الإنجليزية', flag: 'https://flagcdn.com/w40/gb.png' },
  { name: 'French', name_ar: 'الفرنسية', flag: 'https://flagcdn.com/w40/fr.png' },
  { name: 'German', name_ar: 'الألمانية', flag: 'https://flagcdn.com/w40/de.png' },
  { name: 'Spanish', name_ar: 'الإسبانية', flag: 'https://flagcdn.com/w40/es.png' },
  { name: 'Italian', name_ar: 'الإيطالية', flag: 'https://flagcdn.com/w40/it.png' },
  { name: 'Turkish', name_ar: 'التركية', flag: 'https://flagcdn.com/w40/tr.png' },
  { name: 'Russian', name_ar: 'الروسية', flag: 'https://flagcdn.com/w40/ru.png' },
  { name: 'Chinese', name_ar: 'الصينية', flag: 'https://flagcdn.com/w40/cn.png' }
];

export default function TranslationSection({ settings = {} }) {
  const { isRTL, getContent } = useLanguage();
  const whatsappNumber = settings.whatsapp_number || '966552993899';
  const [selectedDoc, setSelectedDoc] = useState('Visa & Travel Documents');
  const [selectedLang, setSelectedLang] = useState('English');

  const handleInstantQuote = () => {
    const message = isRTL
      ? `السلام عليكم روزانة للسياحة، أحتاج ترجمة معتمدة للوثيقة: *${selectedDoc}* إلى اللغة: *${selectedLang}*. الرجاء تزويدي بالرسوم ووقت التسليم.`
      : `Hello Rozana Tours! I need certified legal translation for: *${selectedDoc}* to *${selectedLang}*. Please provide fee and turnaround.`;
    const encoded = encodeURIComponent(message);
    window.location.href = `https://wa.me/${whatsappNumber}?text=${encoded}`;
  };

  return (
    <section id="translation" className="py-24 bg-slate-50 relative font-sans overflow-hidden">
      <div className="max-w-360 mx-auto px-4 sm:px-6 md:px-10 relative z-10">

        {/* 1. SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 bg-[#003B7A]/10 text-[#003B7A] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
            <Languages size={15} className="text-[#FF7A00]" />
            <span>{isRTL ? 'الترجمة المعتمدة لجميع السفارات' : 'Official Certified Translation'}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#002B5B] tracking-tight">
            {isRTL ? 'ترجمة معتمدة مقبولة لدى ' : 'Accredited Legal Translation for '}
            <span className="text-[#FF7A00]">{isRTL ? 'كافة السفارات والجهات' : 'Embassies & Ministries'}</span>
          </h2>

          <p className="text-slate-600 text-base md:text-lg leading-relaxed font-light">
            {isRTL 
              ? 'معتمدة لدى جميع السفارات الأجنبية بالرياض ومراكز VFS Global وTLScontact والوزارات السعودية. دقة لغوية مع أختام رسمية معتمدة.'
              : '100% accepted by all foreign embassies in Riyadh, VFS Global, TLScontact, and Saudi ministries. Fast and sworn.'}
          </p>
        </div>

        {/* 2. ADVANTAGES PILLARS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
          <div className="bg-white p-6 rounded-2xl border border-slate-200/90 shadow-sm flex items-start gap-4 text-start">
            <div className="w-12 h-12 rounded-xl bg-[#002B5B] text-white flex items-center justify-center shrink-0">
              <Stamp size={22} className="text-[#FF7A00]" />
            </div>
            <div>
              <h4 className="font-bold text-[#002B5B] text-sm">{isRTL ? 'ختم معتمد لدى السفارات' : 'Embassy-Approved Seal'}</h4>
              <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                {isRTL ? 'مقبولة لدى سفارات دول الشنغن، بريطانيا، وأمريكا وكندا.' : 'Recognized by Schengen, UK, US, and Asian missions.'}
              </p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200/90 shadow-sm flex items-start gap-4 text-start">
            <div className="w-12 h-12 rounded-xl bg-[#002B5B] text-white flex items-center justify-center shrink-0">
              <Clock size={22} className="text-amber-400" />
            </div>
            <div>
              <h4 className="font-bold text-[#002B5B] text-sm">{isRTL ? 'تسليم فوري نفس اليوم' : 'Same-Day Fast Delivery'}</h4>
              <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                {isRTL ? 'تسليم الوثائق العاجلة بصيغة PDF ومطبوعة خلال 2 إلى 4 ساعات.' : 'Urgent documents translated and sealed in 2 to 4 hours.'}
              </p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200/90 shadow-sm flex items-start gap-4 text-start">
            <div className="w-12 h-12 rounded-xl bg-[#002B5B] text-white flex items-center justify-center shrink-0">
              <ShieldCheck size={22} className="text-emerald-400" />
            </div>
            <div>
              <h4 className="font-bold text-[#002B5B] text-sm">{isRTL ? 'دقة ومطابقة قانونية 100%' : '100% Legal Accuracy'}</h4>
              <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                {isRTL ? 'مترجمون محلفون معتمدون لضمان صحة المصطلحات وسرية البيانات.' : 'Conducted by certified sworn translators ensuring precision.'}
              </p>
            </div>
          </div>
        </div>

        {/* 3. MAIN CARDS GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          
          {/* CATEGORIES (7 cols) */}
          <div className="lg:col-span-7 space-y-5">
            {defaultDocumentTypes.map((doc) => (
              <motion.div
                key={doc.id}
                whileHover={{ y: -4 }}
                className="bg-white p-6 rounded-3xl border border-slate-200/90 shadow-sm text-start relative overflow-hidden"
              >
                {doc.popular && (
                  <span className="absolute top-4 right-4 bg-linear-to-r from-[#FF7A00] to-amber-500 text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-wider">
                    {isRTL ? 'الأكثر طلباً' : 'Popular'}
                  </span>
                )}

                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center shrink-0 text-[#FF7A00]">
                    <FileText size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#002B5B]">{getContent(doc, 'title')}</h3>
                    <p className="text-xs text-slate-400 flex items-center gap-1.5 mt-0.5">
                      <Clock size={12} />
                      <span>{isRTL ? 'سرعة الإنجاز:' : 'Turnaround:'} {getContent(doc, 'turnaround')}</span>
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2 border-t border-slate-100">
                  {(isRTL ? doc.items_ar : doc.items).map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-slate-600">
                      <CheckCircle2 size={14} className="text-emerald-500 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* INSTANT UPLOAD FORM (5 cols) */}
          <div className="lg:col-span-5 bg-white p-7 sm:p-8 rounded-3xl border border-slate-200 shadow-xl text-start space-y-6">
            <div className="border-b border-slate-100 pb-4">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#FF7A00] block">
                {isRTL ? 'تسعير وترجمة فورية' : 'Instant Translation Quote'}
              </span>
              <h3 className="text-xl font-black text-[#002B5B] mt-1">
                {isRTL ? 'أرسل وثيقتك للترجمة الآن' : 'Upload & Translate Today'}
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                {isRTL ? 'أرسل صورة أو ملف PDF مباشرة عبر الواتساب للحصول على السعر والوقت.' : 'Send a photo or PDF directly to our translation desk on WhatsApp.'}
              </p>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">
                {isRTL ? 'نوع الوثيقة:' : 'Select Document Category:'}
              </label>
              <select
                value={selectedDoc}
                onChange={(e) => setSelectedDoc(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-3 text-xs text-slate-800 font-medium focus:outline-none focus:border-[#FF7A00]"
              >
                <option value="Visa & Employment Papers">{isRTL ? 'خطابات التعريف بالراتب وكشوف الحساب' : 'Visa & Employment Papers'}</option>
                <option value="National ID / Iqama">{isRTL ? 'بطاقات الهوية والإقامة ودفتر العائلة' : 'National ID / Iqama / Family Card'}</option>
                <option value="Marriage / Birth Certificate">{isRTL ? 'عقود الزواج وشهادات الميلاد' : 'Marriage / Birth Certificate'}</option>
                <option value="Commercial Registration / Contracts">{isRTL ? 'السجلات التجارية والعقود القانونية' : 'Commercial Registration / Legal Contracts'}</option>
                <option value="University Degree">{isRTL ? 'الشهادات الجامعية والمؤهلات الدراسية' : 'University Degree & Transcripts'}</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">
                {isRTL ? 'اللغة المطلوب الترجمة إليها:' : 'Target Language:'}
              </label>
              <select
                value={selectedLang}
                onChange={(e) => setSelectedLang(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-3 text-xs text-slate-800 font-medium focus:outline-none focus:border-[#FF7A00]"
              >
                {targetLanguages.map((l) => (
                  <option key={l.name} value={l.name}>{isRTL ? l.name_ar : l.name}</option>
                ))}
              </select>
            </div>

            <div className="bg-slate-50 border border-dashed border-slate-300 rounded-2xl p-4 text-center space-y-1.5">
              <UploadCloud size={24} className="text-[#0084D6] mx-auto" />
              <p className="text-xs font-semibold text-slate-700">
                {isRTL ? 'التقط صورة واضحة أو أرفق ملف PDF عبر الواتساب' : 'Snap photo or attach PDF via WhatsApp'}
              </p>
              <p className="text-[11px] text-slate-400">
                {isRTL ? 'يرد فريق الترجمة خلال أقل من 15 دقيقة.' : 'Our translation desk responds in under 15 minutes.'}
              </p>
            </div>

            <button
              onClick={handleInstantQuote}
              className="w-full bg-linear-to-r from-[#FF7A00] to-amber-500 hover:from-amber-500 hover:to-[#FF7A00] text-white py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider shadow-lg shadow-[#FF7A00]/25 transition-all flex items-center justify-center gap-2"
            >
              <MessageSquare size={16} />
              <span>{isRTL ? 'إرسال المستند عبر الواتساب' : 'Send Document via WhatsApp'}</span>
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
