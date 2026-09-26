import React, { useState } from "react";
import { MapPin, Phone, Mail, Clock, MessageSquare, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";

export default function Contact({ settings = {} }) {
  const { isRTL } = useLanguage();
  const whatsappNumber = settings.whatsapp_number || '966552993899';
  const phonePrimary = settings.phone_primary || '+966 55 299 3899';
  const phoneSecondary = settings.phone_secondary || '+966 53 188 0016';
  const email = settings.email || 'rozanaruh@gmail.com';
  const address = settings.address || (isRTL ? 'شارع أم الحمام، حي أم الحمام الشرقي، الرياض، المملكة العربية السعودية' : 'Umm Al Hamam St., Umm Al Hamam Al Sharqi Dist., Riyadh · Saudi Arabia');

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: 'Visa Assistance',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = isRTL
      ? `*طلب استفسار جديد عبر الموقع - روزانة للسياحة*\n\n` +
        `👤 *الاسم:* ${formData.name}\n` +
        `📱 *رقم الجوال:* ${formData.phone}\n` +
        `🎯 *الخدمة:* ${formData.service}\n` +
        `💬 *التفاصيل:* ${formData.message || 'أرغب في الحصول على تفاصيل الخدمة.'}`
      : `*New Website Inquiry - Rozana Tours*\n\n` +
        `👤 *Name:* ${formData.name}\n` +
        `📱 *Phone:* ${formData.phone}\n` +
        `🎯 *Service:* ${formData.service}\n` +
        `💬 *Message:* ${formData.message || 'I would like more information.'}`;

    const encoded = encodeURIComponent(text);
    window.location.href = `https://wa.me/${whatsappNumber}?text=${encoded}`;
  };

  return (
    <section id="contact" className="py-24 bg-white relative font-sans overflow-hidden">
      
      {/* BACKGROUND ACCENTS */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#002B5B08_1px,transparent_1px),linear-gradient(to_bottom,#002B5B08_1px,transparent_1px)] bg-size-[28px_28px] pointer-events-none"></div>
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#FF7A00]/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#0084D6]/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-360 mx-auto px-4 sm:px-6 md:px-10 relative z-10">

        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 bg-[#003B7A]/10 text-[#003B7A] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
            <Sparkles size={15} className="text-[#FF7A00]" />
            <span>{isRTL ? 'تواصل مع مستشارينا' : 'Connect With Our Travel Consultants'}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#002B5B] tracking-tight">
            {isRTL ? 'نسعد دائماً ' : "Let's Plan Your "}
            <span className="text-[#FF7A00]">{isRTL ? 'بخدمتك وتواصلك' : 'Next Journey'}</span>
          </h2>

          <p className="text-slate-600 text-base md:text-lg leading-relaxed font-light">
            {isRTL 
              ? 'تفضل بزيارة فرعنا في الرياض أو أرسل استفسارك الفوري لفريق العمل المتاح على مدار الساعة.'
              : 'Visit our office in Riyadh or send an instant inquiry. Certified specialists available 24/7.'}
          </p>
        </div>

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* CONTACT INFO (5 cols) */}
          <div className="lg:col-span-5 space-y-6 text-start">
            <div className="bg-slate-50/80 p-6 rounded-3xl border border-slate-200/90 space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-[#002B5B] text-white flex items-center justify-center shadow-md">
                <MapPin size={22} className="text-[#FF7A00]" />
              </div>
              <h3 className="text-lg font-bold text-[#002B5B]">{isRTL ? 'فرع الرياض الرئيسي' : 'Riyadh Main Office'}</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                {address}
              </p>
            </div>

            <div className="bg-slate-50/80 p-6 rounded-3xl border border-slate-200/90 space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                {isRTL ? 'قنوات التواصل المباشرة' : 'Direct Consultation Channels'}
              </h4>

              <a 
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between p-3.5 rounded-2xl bg-white border border-slate-200 hover:border-[#FF7A00] transition-all group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
                    <MessageSquare size={18} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 font-medium">{isRTL ? 'المستشار أشرف حسين' : 'Senior Consultant (Ashraf)'}</p>
                    <p className="text-sm font-bold text-slate-800" dir="ltr">{phonePrimary}</p>
                  </div>
                </div>
                <span className="text-[11px] font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full">WhatsApp</span>
              </a>

              <a 
                href={`tel:${phoneSecondary.replace(/\s+/g, '')}`}
                className="flex items-center justify-between p-3.5 rounded-2xl bg-white border border-slate-200 hover:border-[#0084D6] transition-all group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0084D6] flex items-center justify-center font-bold">
                    <Phone size={18} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 font-medium">{isRTL ? 'هاتف خدمة العملاء' : 'Office Support Line'}</p>
                    <p className="text-sm font-bold text-slate-800" dir="ltr">{phoneSecondary}</p>
                  </div>
                </div>
                <span className="text-[11px] font-bold text-[#0084D6] bg-blue-50 px-2.5 py-1 rounded-full">Call</span>
              </a>

              <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-white border border-slate-200 text-xs">
                <div className="w-10 h-10 rounded-xl bg-slate-100 text-slate-600 flex items-center justify-center font-bold">
                  <Mail size={18} />
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-medium">{isRTL ? 'البريد الإلكتروني' : 'Official Email'}</p>
                  <p className="text-sm font-bold text-slate-800">{email}</p>
                </div>
              </div>
            </div>

            <div className="bg-[#002B5B] text-white p-6 rounded-3xl shadow-xl flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center shrink-0">
                <Clock size={24} className="text-[#FF7A00]" />
              </div>
              <div className="text-start space-y-1">
                <h4 className="text-sm font-bold text-amber-300">{isRTL ? 'أوقات الدوام الرسمي' : 'Office Working Hours'}</h4>
                <p className="text-xs text-slate-300">{isRTL ? 'السبت - الخميس: 9:00 صباحاً - 10:00 مساءً' : 'Saturday – Thursday: 9:00 AM – 10:00 PM'}</p>
                <p className="text-xs text-slate-300">{isRTL ? 'الجمعة: 4:00 عصراً - 10:00 مساءً' : 'Friday: 4:00 PM – 10:00 PM'}</p>
              </div>
            </div>
          </div>

          {/* INQUIRY FORM (7 cols) */}
          <div className="lg:col-span-7 bg-slate-50/90 p-8 sm:p-10 rounded-3xl border border-slate-200/90 shadow-xl text-start">
            <h3 className="text-2xl font-black text-[#002B5B] mb-1">
              {isRTL ? 'أرسل استفسارك المباشر' : 'Send an Instant Inquiry'}
            </h3>
            <p className="text-xs text-slate-500 mb-6">
              {isRTL ? 'سيتم تحويل طلبك مباشرة لمستشار السفر عبر تطبيق الواتساب.' : 'Connect directly with a dedicated travel consultant via WhatsApp.'}
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">{isRTL ? 'الاسم الكريم *' : 'Your Full Name *'}</label>
                  <input 
                    type="text"
                    required
                    placeholder={isRTL ? 'مثال: محمد العتيبي' : 'e.g. Mohammed Al-Otaibi'}
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-xs text-slate-800 focus:outline-none focus:border-[#FF7A00]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">{isRTL ? 'رقم الجوال / الواتساب *' : 'Phone / WhatsApp *'}</label>
                  <input 
                    type="tel"
                    required
                    placeholder="05X XXX XXXX"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-xs text-slate-800 focus:outline-none focus:border-[#FF7A00]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">{isRTL ? 'نوع الخدمة المطلوبة *' : 'Service Interested In *'}</label>
                <select 
                  value={formData.service}
                  onChange={(e) => setFormData({...formData, service: e.target.value})}
                  className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-xs text-slate-800 focus:outline-none focus:border-[#FF7A00]"
                >
                  <option value="Visa Assistance">{isRTL ? '🛂 استخراج التأشيرات (شنغن، بريطانيا، أمريكا، اليابان)' : '🛂 Visa Assistance (Schengen, UK, USA, Japan)'}</option>
                  <option value="Embassy Services">{isRTL ? '🏛️ تصديقات وزارة الخارجية والسفارات' : '🏛️ Embassy & MOFA Attestation'}</option>
                  <option value="Certified Translation">{isRTL ? '📝 الترجمة المعتمدة لجميع اللغات' : '📝 Certified Document Translation'}</option>
                  <option value="International License">{isRTL ? '🪪 رخصة القيادة الدولية' : '🪪 International Driving License'}</option>
                  <option value="Flight Booking">{isRTL ? '✈️ حجز تذاكر الطيران' : '✈️ Flight Booking'}</option>
                  <option value="Tour Packages">{isRTL ? '🏖️ البكجات السياحية والعطلات' : '🏖️ Luxury Holiday Tour Packages'}</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">{isRTL ? 'تفاصيل الطلب أو التواريخ (اختياري)' : 'Additional Details (Optional)'}</label>
                <textarea 
                  rows={4}
                  placeholder={isRTL ? 'أخبرنا عن وجهتك المفضلة، عدد المسافرين، أو تاريخ السفر المتوقع...' : 'Tell us about your destination, number of travelers, or expected travel date...'}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full bg-white border border-slate-200 rounded-xl p-4 text-xs text-slate-800 focus:outline-none focus:border-[#FF7A00]"
                />
              </div>

              <button 
                type="submit"
                className="w-full bg-linear-to-r from-[#FF7A00] to-amber-500 hover:from-amber-500 hover:to-[#FF7A00] text-white py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider shadow-xl shadow-[#FF7A00]/25 transition-all flex items-center justify-center gap-2"
              >
                <MessageSquare size={16} />
                <span>{isRTL ? 'إرسال وتواصل عبر الواتساب' : 'Submit & Chat on WhatsApp'}</span>
              </button>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
}
