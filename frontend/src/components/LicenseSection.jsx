import React, { useState } from 'react';
import { 
  CreditCard, 
  ShieldCheck, 
  Clock, 
  CheckCircle2, 
  MessageSquare, 
  FileCheck, 
  Sparkles
} from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const defaultLicensePlans = [
  {
    id: 1,
    title: "1-Year International Permit",
    title_ar: "رخصة القيادة الدولية - سنة واحدة",
    validity: "Valid for 1 Full Year",
    validity_ar: "صالحة لمدة سنة كاملة",
    price: "180 SAR",
    turnaround: "15 - 30 Minutes (Express)",
    turnaround_ar: "15 - 30 دقيقة (فوري)",
    popular: false,
    recommendedFor: "Short holidays & tourist vacations",
    recommendedFor_ar: "للإجازات القصيرة والسياحة",
    features: [
      "Accepted in 150+ Countries Worldwide",
      "Compliant with 1949 UN Geneva Convention",
      "Immediate Digital Copy + Hard Booklet",
      "Official 10-Language Translation",
      "Car Rental Insurance Acceptance Guaranteed"
    ],
    features_ar: [
      "معتمدة في أكثر من 150 دولة حول العالم",
      "متوافقة مع اتفاقية جنيف للأمم المتحدة 1949",
      "دفتر رسمي معتمد + نسخة إلكترونية فورية",
      "مترجمة رسمياً إلى 10 لغات عالمية",
      "قبول مضمون لدى كافة شركات تأجير السيارات"
    ]
  },
  {
    id: 2,
    title: "2-Year International Permit",
    title_ar: "رخصة القيادة الدولية - سنتان",
    validity: "Valid for 2 Full Years",
    validity_ar: "صالحة لمدة سنتين كاملتين",
    price: "280 SAR",
    turnaround: "15 - 30 Minutes (Express)",
    turnaround_ar: "15 - 30 دقيقة (فوري)",
    popular: true,
    recommendedFor: "Frequent business travelers & expats",
    recommendedFor_ar: "الخيار الأكثر توفيراً للمسافرين",
    features: [
      "Best Value & Long-Term Savings",
      "Accepted in 150+ Countries Worldwide",
      "Compliant with 1949 & 1968 Conventions",
      "Immediate Digital Copy + Hard Booklet",
      "Free Re-Issuance if Damaged Abroad"
    ],
    features_ar: [
      "أفضل قيمة وأعلى توفير للمسافرين الدائمين",
      "معتمدة في أكثر من 150 دولة حول العالم",
      "متوافقة مع اتفاقيتي 1949 و1968 الدولية",
      "دفتر رسمي معتمد + نسخة إلكترونية فورية",
      "إعادة إصدار مجانية في حال التلف أثناء السفر"
    ]
  },
  {
    id: 3,
    title: "3-Year International Permit",
    title_ar: "رخصة القيادة الدولية - 3 سنوات",
    validity: "Valid for 3 Full Years",
    validity_ar: "صالحة لمدة 3 سنوات كاملة",
    price: "380 SAR",
    turnaround: "15 - 30 Minutes (Express)",
    turnaround_ar: "15 - 30 دقيقة (فوري)",
    popular: false,
    recommendedFor: "Overseas students & frequent flyers",
    recommendedFor_ar: "للطلاب والمبتعثين ورجال الأعمال",
    features: [
      "Maximum Legal Driving Validity",
      "Accepted in Europe, USA, UK, Asia, & Gulf",
      "No Annual Renewal Required",
      "Immediate Digital Copy + Hard Booklet",
      "VIP Dedicated Support Hotline"
    ],
    features_ar: [
      "أطول مدة صلاحية قانونية لقيادة السيارات",
      "معتمدة في أوروبا وأمريكا وبريطانيا وآسيا",
      "لا حاجة للتجديد السنوي المتكرر",
      "دفتر رسمي معتمد + نسخة إلكترونية فورية",
      "دعم استشاري مخصص على مدار الساعة"
    ]
  }
];

export default function LicenseSection({ settings = {} }) {
  const { isRTL, getContent } = useLanguage();
  const whatsappNumber = settings.whatsapp_number || '966552993899';
  const [plans] = useState(defaultLicensePlans);

  const handleApply = (planTitle, price) => {
    const text = isRTL 
      ? `السلام عليكم روزانة للسياحة، أرغب في استخراج "${planTitle}" بقيمة (${price}). الرجاء إفادتي بالمتطلبات.`
      : `Hello Rozana Tours! I want to apply for the "${planTitle}" (${price}). Please assist me with issuance.`;
    const encoded = encodeURIComponent(text);
    window.location.href = `https://wa.me/${whatsappNumber}?text=${encoded}`;
  };

  return (
    <section id="license" className="py-24 bg-slate-50/70 relative font-sans overflow-hidden">
      <div className="max-w-360 mx-auto px-4 sm:px-6 md:px-10 relative z-10">

        {/* 1. SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 bg-[#003B7A]/10 text-[#003B7A] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
            <CreditCard size={15} className="text-[#FF7A00]" />
            <span>{isRTL ? 'رخصة القيادة الدولية المعتمدة' : 'Official UN International Permit'}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#002B5B] tracking-tight">
            {isRTL ? 'استخراج رخصة القيادة ' : 'International '}
            <span className="text-[#FF7A00]">{isRTL ? 'الدولية الفورية' : 'Driving License'}</span>
          </h2>

          <p className="text-slate-600 text-base md:text-lg leading-relaxed font-light">
            {isRTL 
              ? 'قد سيارتك بكل أمان وقانونية في أكثر من 150 دولة حول العالم. تصدر وفقاً لاتفاقيات الأمم المتحدة ومعتمدة لدى كافة شركات تأجير السيارات العالمية.'
              : 'Drive legally across 150+ countries. Issued in accordance with UN conventions, accepted by all major car rental agencies.'}
          </p>
        </div>

        {/* 2. PLANS CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 items-stretch">
          {plans.map((plan) => (
            <motion.div
              key={plan.id}
              whileHover={{ y: -6 }}
              className={`rounded-3xl p-8 flex flex-col justify-between text-start relative transition-all duration-300 border ${
                plan.popular 
                  ? 'bg-white border-[#FF7A00] shadow-2xl ring-2 ring-[#FF7A00]/20'
                  : 'bg-white border-slate-200/90 shadow-sm hover:shadow-xl'
              }`}
            >
              {plan.popular && (
                <div className="absolute top-2 right-4 bg-linear-to-r from-[#FF7A00] to-amber-500 text-white text-[10px] font-black px-3.5 py-1 rounded-full uppercase tracking-wider shadow-sm flex items-center gap-1">
                  <Sparkles size={11} />
                  <span>{isRTL ? 'الخيار الأكثر طلباً' : 'Most Popular Choice'}</span>
                </div>
              )}

              <div>
                <div className="space-y-1 mb-4">
                  <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#0084D6] block">
                    {getContent(plan, 'recommendedFor')}
                  </span>
                  <h3 className="text-2xl font-black text-[#002B5B]">
                    {getContent(plan, 'title')}
                  </h3>
                  <div className="flex items-center gap-1.5 text-xs text-slate-500 pt-1">
                    <Clock size={13} className="text-emerald-500" />
                    <span>{isRTL ? 'سرعة الإنجاز:' : 'Turnaround:'} {getContent(plan, 'turnaround')}</span>
                  </div>
                </div>

                <div className="py-4 border-y border-slate-100 my-6">
                  <span className="text-[11px] uppercase font-bold text-slate-400 block">{isRTL ? 'رسوم الإصدار شاملة' : 'Total Issuance Fee'}</span>
                  <div className="flex items-baseline gap-1 mt-0.5">
                    <span className="text-3xl sm:text-4xl font-black text-[#002B5B]">{plan.price}</span>
                    <span className="text-xs text-slate-400 font-medium">{isRTL ? '/ شامل الدفتر' : '/ all-inclusive'}</span>
                  </div>
                </div>

                <div className="space-y-3 mb-8">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block">
                    {isRTL ? 'المواصفات والاعتمادات:' : 'Permit Specifications:'}
                  </span>
                  {(isRTL ? plan.features_ar : plan.features).map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-700 leading-relaxed">
                      <CheckCircle2 size={15} className="text-emerald-500 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={() => handleApply(getContent(plan, 'title'), plan.price)}
                className={`w-full py-3.5 rounded-2xl font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-md ${
                  plan.popular
                    ? 'bg-linear-to-r from-[#FF7A00] to-amber-500 hover:from-amber-500 hover:to-[#FF7A00] text-white shadow-[#FF7A00]/25'
                    : 'bg-[#002B5B] hover:bg-[#FF7A00] text-white'
                }`}
              >
                <MessageSquare size={16} />
                <span>{isRTL ? 'طلب إصدار الرخصة' : 'Apply for this Permit'}</span>
              </button>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}