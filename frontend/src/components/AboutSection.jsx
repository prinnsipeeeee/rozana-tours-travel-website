import React from "react";
import { Award, ShieldCheck, MapPin, Sparkles, HeartHandshake, Compass, PhoneCall, Clock } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from '../context/LanguageContext';

export default function AboutSection({ settings = {} }) {
    const { lang, isRTL } = useLanguage();
    const whatsappNumber = settings.whatsapp_number || '966552993899';
    const phonePrimary = settings.phone_primary || '+966 55 299 3899';
    const address = lang === 'ar'
        ? (settings.address_ar || 'شارع أم الحمام، حي أم الحمام الشرقي، الرياض، المملكة العربية السعودية')
        : (settings.address_en || settings.address || 'Umm Al Hamam St., Umm Al Hamam Al Sharqi Dist., Riyadh, Saudi Arabia');

    const pillars = [
        {
            icon: <Award size={24} className="text-[#FF7A00]" />,
            title_en: 'Licensed Excellence',
            title_ar: 'ترخيص وتميز',
            desc_en: 'Fully accredited Saudi Arabian tourism agency adhering to international hospitality standards.',
            desc_ar: 'وكالة سياحة سعودية مرخصة بالكامل وفق أعلى المعايير الدولية للضيافة.'
        },
        {
            icon: <ShieldCheck size={24} className="text-[#0084D6]" />,
            title_en: '99.6% Visa Success',
            title_ar: '99.6% نسبة نجاح التأشيرات',
            desc_en: 'Expert embassy relations, error-free documentations, and certified legal translation support.',
            desc_ar: 'علاقات متميزة مع السفارات، وثائق خالية من الأخطاء، ودعم ترجمة قانونية معتمدة.'
        },
        {
            icon: <HeartHandshake size={24} className="text-emerald-500" />,
            title_en: 'Personalized Care',
            title_ar: 'رعاية شخصية مخصصة',
            desc_en: 'Tailor-made itineraries designed to make your journey effortless, luxurious, and memorable.',
            desc_ar: 'برامج سياحية مصممة خصيصاً لجعل رحلتك سهلة وفاخرة ولا تُنسى.'
        },
        {
            icon: <Clock size={24} className="text-amber-500" />,
            title_en: '24/7 Dedicated Support',
            title_ar: 'دعم متواصل 24/7',
            desc_en: 'Direct access to expert travel consultants before, during, and after your trip.',
            desc_ar: 'وصول مباشر إلى مستشارين سفر متخصصين قبل وأثناء وبعد رحلتك.'
        }
    ];

    return (
        <section id="about" className="py-24 bg-white relative font-sans overflow-hidden" dir={isRTL ? 'rtl' : 'ltr'}>

            {/* BACKGROUND SUBTLE ACCENTS */}
            <div className="absolute top-10 right-10 w-96 h-96 bg-[#0084D6]/5 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#FF7A00]/5 rounded-full blur-3xl pointer-events-none"></div>

            <div className="max-w-360 mx-auto px-4 md:px-10 relative z-10">

                {/* ASYMMETRIC 2-COLUMN LAYOUT */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

                    {/* LEFT COLUMN */}
                    <motion.div
                        initial={{ opacity: 0, x: isRTL ? 30 : -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="lg:col-span-6 space-y-6 text-start"
                    >
                        <div className="inline-flex items-center gap-2 bg-[#003B7A]/10 text-[#003B7A] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide">
                            <Compass size={15} className="text-[#FF7A00]" />
                            <span>{lang === 'ar' ? 'عن روزانا للسياحة والسفر' : 'About Rozana Tours & Travels'}</span>
                        </div>

                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#002B5B] tracking-tight leading-tight">
                            {lang === 'ar' ? (
                                <>نجعل تجربة سفرك <br /><span className="text-[#FF7A00]">استثنائية في كل مرة</span></>
                            ) : (
                                <>Making Your Travel Experience <br /><span className="text-[#FF7A00]">Exceptional Every Time</span></>
                            )}
                        </h2>

                        <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-light">
                            {lang === 'ar' ? (
                                <>يقع مقرنا في قلب الرياض في <strong className="text-slate-800 font-semibold">شارع أم الحمام</strong>، وتُعدّ <span className="text-[#002B5B] font-bold">روزانا للسياحة والسفر</span> بوابتك الموثوقة نحو باقات سياحية عالمية المستوى وحلول تأشيرات احترافية.</>
                            ) : (
                                <>Headquartered in the heart of Riyadh on <strong className="text-slate-800 font-semibold">Umm Al Hamam Street</strong>, <span className="text-[#002B5B] font-bold">Rozana Tours & Travels</span> is a trusted gateway for Saudi citizens and residents seeking world-class travel, bespoke holiday packages, and streamlined global visa solutions.</>
                            )}
                        </p>

                        <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-light">
                            {lang === 'ar'
                                ? 'سواء كنت تتقدم بطلب تأشيرة شنغن أوروبية، أو تخطط لعطلة عائلية فاخرة، فإن مستشارينا يضمنون لك دقة واهتمامًا لا مثيل لهما.'
                                : 'Whether you are applying for a complex European Schengen visa, planning a luxury family vacation to the Maldives, our dedicated travel consultants ensure unparalleled precision and care.'}
                        </p>

                        {/* CONSULTANT TRUST HIGHLIGHT CARD */}
                        <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-5 flex items-center justify-between gap-4 shadow-sm">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-2xl bg-[#002B5B] text-white flex items-center justify-center font-bold text-lg shadow-md shadow-[#002B5B]/20 shrink-0">
                                    RT
                                </div>
                                <div>
                                    <h4 className="font-extrabold text-[#002B5B] text-sm sm:text-base">
                                        {lang === 'ar' ? 'أشرف حسين' : 'Ashraf Hussein'}
                                    </h4>
                                    <p className="text-xs text-slate-500 font-medium">
                                        {lang === 'ar' ? 'مستشار سفر أول • مكتب الرياض' : 'Senior Travel Consultant • Riyadh Office'}
                                    </p>
                                </div>
                            </div>

                            <a
                                href={`tel:${phonePrimary.replace(/[^+\d]/g, '')}`}
                                className="hidden sm:inline-flex items-center gap-2 bg-[#002B5B] hover:bg-[#FF7A00] text-white px-4 py-2.5 rounded-xl font-bold text-xs transition-colors shadow-sm"
                            >
                                <PhoneCall size={14} />
                                <span>{lang === 'ar' ? 'اتصل مباشرة' : 'Call Directly'}</span>
                            </a>
                        </div>

                        {/* PHYSICAL OFFICE LOCATION PIN */}
                        <div className="flex items-center gap-2.5 text-xs font-semibold text-slate-500 pt-2">
                            <MapPin size={16} className="text-[#FF7A00] shrink-0" />
                            <span>{address}</span>
                        </div>
                    </motion.div>

                    {/* RIGHT COLUMN */}
                    <motion.div
                        initial={{ opacity: 0, x: isRTL ? -30 : 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="lg:col-span-6 space-y-6"
                    >
                        {/* 4 PILLARS GRID */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {pillars.map((item, idx) => (
                                <motion.div
                                    key={idx}
                                    whileHover={{ y: -6, scale: 1.02 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                    className="bg-white p-6 rounded-3xl border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 text-start space-y-3"
                                >
                                    <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center">
                                        {item.icon}
                                    </div>
                                    <h3 className="font-extrabold text-[#002B5B] text-base">
                                        {lang === 'ar' ? item.title_ar : item.title_en}
                                    </h3>
                                    <p className="text-xs text-slate-500 leading-relaxed font-light">
                                        {lang === 'ar' ? item.desc_ar : item.desc_en}
                                    </p>
                                </motion.div>
                            ))}
                        </div>

                        {/* BIG PROMISE BANNER */}
                        <div className="bg-linear-to-r from-[#002B5B] to-[#004080] p-6 rounded-3xl text-white flex flex-col sm:flex-row items-center justify-between gap-4 text-start shadow-xl shadow-[#002B5B]/15">
                            <div className="space-y-1">
                                <p className="text-xs font-bold uppercase tracking-wider text-amber-300 flex items-center gap-1.5">
                                    <Sparkles size={14} />
                                    {lang === 'ar' ? 'وعودنا الأساسية' : 'Our Core Promises'}
                                </p>
                                <h4 className="text-lg font-black leading-snug">
                                    {lang === 'ar'
                                        ? 'لا رسوم خفية. استشارة صادقة 100%.'
                                        : 'Zero Hidden Fees. 100% Genuine Consultation.'}
                                </h4>
                            </div>

                            <button
                                onClick={() => {
                                    const msg = lang === 'ar'
                                        ? encodeURIComponent('مرحباً روزانا للسياحة! أود الاستفسار عن خدماتكم.')
                                        : encodeURIComponent('Hello Rozana Tours! I would like to know more about your services.');
                                    window.location.href = `https://wa.me/${whatsappNumber}?text=${msg}`;
                                }}
                                className="shrink-0 bg-[#FF7A00] hover:bg-orange-600 text-white px-5 py-3 rounded-2xl font-bold text-xs transition-transform hover:scale-105 shadow-md"
                            >
                                {lang === 'ar' ? 'تحدث معنا' : 'Chat with Us'}
                            </button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
