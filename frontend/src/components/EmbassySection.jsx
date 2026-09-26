import React, { useState, useEffect } from 'react';
import { 
  Building2, 
  Stamp, 
  ShieldCheck, 
  Clock, 
  CheckCircle2, 
  MessageSquare, 
  FileCheck2, 
  Briefcase, 
  GraduationCap, 
  HeartHandshake, 
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const defaultEmbassyServices = [
  {
    id: 1,
    title: "MOFA & Foreign Embassy Attestation",
    title_ar: "تصديق وزارة الخارجية والسفارات الأجنبية",
    category: "commercial",
    tag: "Most Requested",
    tag_ar: "الأكثر طلباً",
    popular: true,
    turnaround: "2 - 3 Business Days",
    turnaround_ar: "2 - 3 أيام عمل",
    startingFee: "250 SAR",
    description: "Full authentication chain from Saudi Ministry of Foreign Affairs (MOFA) to international embassies in the Riyadh Diplomatic Quarter.",
    description_ar: "إنهاء كافة إجراءات التصديق من وزارة الخارجية السعودية والسفارات المعتمدة بالحي الدبلوماسي بالرياض.",
    inclusions: [
      "Saudi MOFA Digital Attestation",
      "Foreign Embassy Final Seal & Stamp",
      "Document Verification & Courier Handover",
      "Apostille Certificate for Hague Countries"
    ],
    inclusions_ar: [
      "التصديق الرقمي من وزارة الخارجية السعودية",
      "الختم والتصديق القنصلي من السفارة المعنية",
      "مراجعة وتدقيق المستندات والتسليم المباشر",
      "شهادة الأبوستيل لدول اتفاقية لاهاي"
    ]
  },
  {
    id: 2,
    title: "Educational & Degree Legalization",
    title_ar: "تصديق الشهادات والمؤهلات الأكاديمية",
    category: "educational",
    tag: "Students & Employees",
    tag_ar: "للطلاب والعمل",
    popular: false,
    turnaround: "3 - 5 Business Days",
    turnaround_ar: "3 - 5 أيام عمل",
    startingFee: "350 SAR",
    description: "Official verification for Saudi & foreign university diplomas, academic transcripts, and professional board licenses.",
    description_ar: "تصديق رسمي للشهادات الجامعية وسجلات الدرجات ورخص الهيئات المهنية من الملحقيات والجهات المختصة.",
    inclusions: [
      "Saudi Ministry of Education Stamping",
      "Cultural Mission / Attache Clearance",
      "Embassy Verification for Employment Visas",
      "Certified True Copy Issuance"
    ],
    inclusions_ar: [
      "تصديق وزارة التعليم السعودية",
      "موافقة وختم الملحقية الثقافية",
      "تصديق السفارة لفيز العمل والإقامة",
      "إصدار نسخ طبق الأصل المعتمدة"
    ]
  },
  {
    id: 3,
    title: "Commercial & Corporate Legalization",
    title_ar: "تصديق العقود والوثائق التجارية",
    category: "commercial",
    tag: "Business & Trade",
    tag_ar: "للشركات والأعمال",
    popular: true,
    turnaround: "2 - 4 Business Days",
    turnaround_ar: "2 - 4 أيام عمل",
    startingFee: "450 SAR",
    description: "Authentication of commercial contracts, board resolutions, power of attorneys (Wakalah), and commercial registrations (CR).",
    description_ar: "توثيق العقود التجارية، قرارات مجالس الإدارة، الوكالات الشرعية، والسجلات التجارية لدى الغرفة التجارية والخارجية.",
    inclusions: [
      "Saudi Chamber of Commerce Legalization",
      "Ministry of Commerce & MOFA Attestation",
      "Target Country Embassy Stamping",
      "Bilingual Arabic-English Verification"
    ],
    inclusions_ar: [
      "تصديق الغرفة التجارية السعودية",
      "تصديق وزارة التجارة والخارجية",
      "ختم سفارة الدولة المستهدفة",
      "المطابقة والترجمة المعتمدة عربي-إنجليزي"
    ]
  },
  {
    id: 4,
    title: "Civil Records & Family Attestation",
    title_ar: "تصديق الأحوال المدنية والوثائق الشخصية",
    category: "civil",
    tag: "Family Visa Support",
    tag_ar: "للإقامة والزيارة",
    popular: false,
    turnaround: "1 - 2 Business Days",
    turnaround_ar: "1 - 2 يوم عمل",
    startingFee: "200 SAR",
    description: "Official stamping for birth certificates, marriage contracts, police clearance records, and family status books.",
    description_ar: "تصديق وتوثيق شهادات الميلاد، عقود الزواج، شهادات الخلو من السوابق، ودفاتر العائلة لدى السفارات.",
    inclusions: [
      "Ministry of Interior / Police Clearance Seal",
      "Saudi Ministry of Justice Endorsement",
      "Embassy Stamping for Family Residency",
      "Official Certified Translation Included"
    ],
    inclusions_ar: [
      "ختم الأدلة الجنائية / وزارة الداخلية",
      "تصديق وزارة العدل السعودية",
      "ختم السفارة لاستقدام العائلة والإقامة",
      "ترجمة معتمدة رسمية مشمولة"
    ]
  },
  {
    id: 5,
    title: "Embassy VIP Appointment Booking",
    title_ar: "حجز مواعيد السفارات ومراكز التأشيرات",
    category: "appointments",
    tag: "Express Slots",
    tag_ar: "مواعيد سريعة",
    popular: false,
    turnaround: "Same-Day Booking",
    turnaround_ar: "حجز فوري نفس اليوم",
    startingFee: "150 SAR",
    description: "Fast-track appointment scheduling for VFS Global, TLScontact, BLS, and direct consular interview slots across Riyadh.",
    description_ar: "حجز أسرع المواعيد المتاحة لدى VFS Global وTLScontact وBLS ومواعيد المقابلات المباشرة بالسفارات.",
    inclusions: [
      "Prime Time & Early Slot Availability",
      "Document Checklist & Form Pre-Check",
      "SMS & Email Slot Confirmation Alert",
      "Embassy Submission VIP Support"
    ],
    inclusions_ar: [
      "إتاحة المواعيد المميزة والصباحية المبكرة",
      "التدقيق المسبق لملف واستمارة التقديم",
      "إشعار وتأكيد الموعد عبر الجوال والإيميل",
      "توجيهات المقابلة والتقديم لدى المركز"
    ]
  }
];

export default function EmbassySection({ settings = {} }) {
  const { isRTL, getContent } = useLanguage();
  const whatsappNumber = settings.whatsapp_number || '966552993899';
  const [services] = useState(defaultEmbassyServices);
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredServices = activeCategory === "all" 
    ? services 
    : services.filter(s => s.category === activeCategory);

  const handleApply = (serviceTitle) => {
    const text = isRTL 
      ? `السلام عليكم روزانة للسياحة، أرغب في الاستفسار عن خدمة: "${serviceTitle}". الرجاء توضيح المتطلبات والرسوم.`
      : `Hello Rozana Tours! I need assistance with "${serviceTitle}". Please inform me about requirements and fees.`;
    const encoded = encodeURIComponent(text);
    window.location.href = `https://wa.me/${whatsappNumber}?text=${encoded}`;
  };

  return (
    <section id="embassy" className="py-24 bg-white relative font-sans overflow-hidden">
      <div className="max-w-360 mx-auto px-4 sm:px-6 md:px-10 relative z-10">

        {/* 1. SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 bg-[#003B7A]/10 text-[#003B7A] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
            <Building2 size={15} className="text-[#FF7A00]" />
            <span>{isRTL ? 'خدمات السفارات والتصديقات بالرياض' : 'Diplomatic Quarter Attestation'}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#002B5B] tracking-tight">
            {isRTL ? 'تصديقات وزارة الخارجية و ' : 'Official Embassy & '}
            <span className="text-[#FF7A00]">{isRTL ? 'السفارات الأجنبية' : 'Legal Attestation'}</span>
          </h2>

          <p className="text-slate-600 text-base md:text-lg leading-relaxed font-light">
            {isRTL 
              ? 'إنهاء وتصديق كافة المعاملات والوثائق التجارية والأكاديمية والشخصية من وزارة الخارجية السعودية والسفارات بالحي الدبلوماسي بالرياض.'
              : 'Fast-track legalization and consular stamping for commercial, educational, and personal documents through MOFA and foreign embassies.'}
          </p>
        </div>

        {/* 2. CATEGORY TABS */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {[
            { id: "all", label: isRTL ? "جميع الخدمات" : "All Services" },
            { id: "commercial", label: isRTL ? "🏢 الشركات والتجارة" : "🏢 Commercial & MOFA" },
            { id: "educational", label: isRTL ? "🎓 الشهادات الأكاديمية" : "🎓 Educational Degrees" },
            { id: "civil", label: isRTL ? "👨‍👩‍👦 الوثائق الشخصية" : "👨‍👩‍👦 Civil & Family" },
            { id: "appointments", label: isRTL ? "📅 حجز المواعيد" : "📅 Appointments" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveCategory(tab.id)}
              className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all duration-300 ${
                activeCategory === tab.id
                  ? 'bg-[#003B7A] text-white shadow-md shadow-[#003B7A]/25 scale-105'
                  : 'bg-slate-50 text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* 3. SERVICES CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredServices.map((service) => (
            <motion.div
              key={service.id}
              whileHover={{ y: -6 }}
              className="bg-white rounded-3xl p-7 border border-slate-200/90 shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col justify-between text-start relative overflow-hidden group"
            >
              {service.popular && (
                <div className="absolute top-1 right-4 bg-linear-to-r from-[#FF7A00] to-amber-500 text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-wider shadow-sm flex items-center gap-1">
                  <Sparkles size={11} />
                  <span>{getContent(service, 'tag')}</span>
                </div>
              )}

              <div>
                <div className="flex items-start gap-3.5 mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#002B5B]/5 border border-[#002B5B]/10 flex items-center justify-center shrink-0 text-[#002B5B] group-hover:bg-[#002B5B] group-hover:text-white transition-colors duration-300">
                    <Stamp size={22} className="text-[#FF7A00] group-hover:text-amber-300" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#002B5B] group-hover:text-[#FF7A00] transition-colors leading-snug">
                      {getContent(service, 'title')}
                    </h3>
                    <div className="flex items-center gap-1.5 text-xs text-slate-400 mt-1">
                      <Clock size={13} className="text-[#0084D6]" />
                      <span>{getContent(service, 'turnaround')}</span>
                    </div>
                  </div>
                </div>

                <p className="text-xs text-slate-500 mb-6 leading-relaxed font-light">
                  {getContent(service, 'description')}
                </p>

                <div className="space-y-2.5 bg-slate-50 p-4 rounded-2xl border border-slate-100 mb-6">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                    {isRTL ? 'الإجراءات المشمولة:' : "What's Included:"}
                  </span>
                  {(isRTL ? service.inclusions_ar : service.inclusions).map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                      <CheckCircle2 size={14} className="text-emerald-500 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                <div>
                  <span className="text-[10px] uppercase font-bold text-slate-400 block">{isRTL ? 'الرسوم من' : 'Starting From'}</span>
                  <span className="text-xl font-black text-[#002B5B]">{service.startingFee}</span>
                </div>

                <button
                  onClick={() => handleApply(getContent(service, 'title'))}
                  className="bg-[#002B5B] hover:bg-[#FF7A00] text-white px-4 py-2.5 rounded-xl font-bold text-xs transition-colors duration-300 shadow-md flex items-center gap-1.5"
                >
                  <MessageSquare size={14} />
                  <span>{isRTL ? 'بدء التصديق' : 'Start Attestation'}</span>
                </button>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}