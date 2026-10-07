import React, { useState } from 'react';
import {
  Sparkles,
  Clock,
  Calendar,
  CheckCircle2,
  MessageSquare,
  X,
  LayoutGrid,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { useHashCategory } from '../hooks/useHashCategory';

// Renders an admin-managed dynamic section with the visa-section design:
// category filter tabs + cards (+ details popup), EN/AR aware. Every field
// is optional on the backend — elements without a value are not rendered.
export default function DynamicSection({ section, settings = {} }) {
  const { isRTL, getContent } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useHashCategory(section.slug);
  const [selectedItem, setSelectedItem] = useState(null);

  const rawWhatsappNumber = settings.whatsapp_number || '966552993899';
  const whatsappNumber = String(rawWhatsappNumber)
    .replace(/\D/g, '')
    .replace(/^00/, '');

  const items = section.items || [];
  const categories = section.categories || [];

  const copy = (field, fallbackEn, fallbackAr) => {
    const localized = isRTL
      ? section[`${field}_ar`] || section[`${field}_en`]
      : section[`${field}_en`] || section[`${field}_ar`];
    return localized || (isRTL ? fallbackAr : fallbackEn);
  };

  const spec = (item, prefix) => {
    const value = isRTL
      ? item[`${prefix}_value_ar`] || item[`${prefix}_value_en`]
      : item[`${prefix}_value_en`] || item[`${prefix}_value_ar`];
    if (!value) return null;
    const label = isRTL
      ? item[`${prefix}_label_ar`] || item[`${prefix}_label_en`]
      : item[`${prefix}_label_en`] || item[`${prefix}_label_ar`];
    return { label, value };
  };

  const bulletsOf = (item) =>
    (isRTL && item.bullets_ar && item.bullets_ar.length
      ? item.bullets_ar
      : item.bullets_en) || [];

  const filteredItems =
    selectedCategory === 'all'
      ? items
      : items.filter((item) => item.category === selectedCategory);

  const sectionName = copy('name', section.slug, section.slug);

  const handleWhatsApp = (item) => {
    const title = getContent(item, 'title');
    const text = isRTL
      ? `السلام عليكم روزانة للسياحة، أرغب في الاستفسار عن ${title} ضمن ${sectionName}. الرجاء تزويدي بالتفاصيل والمواعيد المتاحة.`
      : `Hello Rozana Tours! I want to apply for the ${title} (${sectionName}). Please provide me with details.`;

    window.location.href = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;
  };

  const specIcons = [
    { icon: Clock, color: '#0084D6' },
    { icon: Calendar, color: '#FF7A00' },
  ];

  return (
    <section id={section.slug} className="py-24 bg-white relative font-sans overflow-hidden">
      <div className="max-w-360 mx-auto px-4 sm:px-6 md:px-10 relative z-10">

        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          {copy('badge', '', '') && (
            <div className="inline-flex items-center gap-2 bg-[#003B7A]/10 text-[#003B7A] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
              <LayoutGrid size={15} className="text-[#FF7A00]" />
              <span>{copy('badge', '', '')}</span>
            </div>
          )}

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#002B5B] tracking-tight">
            {copy('heading', sectionName, sectionName)}{' '}
            {copy('highlight', '', '') && (
              <span className="text-[#FF7A00]">{copy('highlight', '', '')}</span>
            )}
          </h2>

          {copy('description', '', '') && (
            <p className="text-slate-600 text-base md:text-lg leading-relaxed font-light">
              {copy('description', '', '')}
            </p>
          )}
        </div>

        {/* CATEGORY TABS */}
        {categories.length > 0 && (
          <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
            {[
              { slug: 'all', name_en: 'All', name_ar: 'الكل' },
              ...categories,
            ].map((category) => (
              <button
                key={category.slug}
                onClick={() => setSelectedCategory(category.slug)}
                className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all duration-300 ${
                  selectedCategory === category.slug
                    ? 'bg-[#003B7A] text-white shadow-md shadow-[#003B7A]/25 scale-105'
                    : 'bg-slate-50 text-slate-600 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {isRTL ? category.name_ar || category.name_en : category.name_en || category.name_ar}
              </button>
            ))}
          </div>
        )}

        {/* CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {filteredItems.map((item) => {
            const specs = [spec(item, 'spec1'), spec(item, 'spec2')].filter(Boolean);
            const bullets = bulletsOf(item);

            return (
              <motion.div
                key={item.slug}
                whileHover={{ y: -6 }}
                className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-sm hover:shadow-xl transition-all text-start flex flex-col justify-between group relative overflow-hidden"
              >
                {item.popular && (
                  <div className={`absolute top-3.5 ${isRTL ? 'left-4' : 'right-4'} bg-linear-to-r from-[#FF7A00] to-amber-500 text-white text-[9px] font-black px-2.5 py-0.5 rounded-full uppercase tracking-wider shadow-sm flex items-center gap-1`}>
                    <Sparkles size={10} />
                    <span>{isRTL ? 'الأكثر طلباً' : 'Popular'}</span>
                  </div>
                )}

                <div className="flex flex-col flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    {item.image_url && (
                      <img src={item.image_url} alt="" className="w-8 h-6 object-cover rounded shadow-xs border border-slate-200" />
                    )}
                    <div>
                      <h3 className="font-extrabold mt-2 text-[#002B5B] text-base group-hover:text-[#FF7A00] transition-colors">
                        {getContent(item, 'title')}
                      </h3>
                    </div>
                  </div>

                  {getContent(item, 'description') && (
                    <div className="py-2.5 mb-5 min-h-22 flex items-start">
                      <p className="text-sm text-slate-600 leading-relaxed font-normal">
                        {getContent(item, 'description')}
                      </p>
                    </div>
                  )}

                  {specs.length > 0 && (
                    <div className="space-y-2.5 py-3.5 border-y border-slate-100 mb-6 text-xs text-slate-600 mt-auto">
                      {specs.map(({ label, value }, index) => {
                        const SpecIcon = specIcons[index].icon;
                        return (
                          <div key={index} className="flex items-center justify-between">
                            <span className="text-slate-400 flex items-center gap-1">
                              <SpecIcon size={13} style={{ color: specIcons[index].color }} /> {label}
                            </span>
                            <span className="font-bold text-[#002B5B]">{value}</span>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>

                <div className="space-y-3 pt-2">
                  {item.price && (
                    <div className="flex items-baseline justify-between">
                      <span className="text-[10px] text-slate-400 font-bold uppercase">
                        {isRTL ? 'رسوم الخدمة' : 'Service Fee'}
                      </span>
                      <span className="text-xl font-black text-[#002B5B]">{item.price}</span>
                    </div>
                  )}

                  <div className={`grid ${bullets.length > 0 ? 'grid-cols-2' : 'grid-cols-1'} gap-2`}>
                    {bullets.length > 0 && (
                      <button
                        onClick={() => setSelectedItem(item)}
                        className="bg-slate-100 hover:bg-slate-200 text-slate-700 py-2.5 rounded-xl font-bold text-xs transition-colors"
                      >
                        {isRTL ? 'التفاصيل' : 'Details'}
                      </button>
                    )}

                    <button
                      onClick={() => handleWhatsApp(item)}
                      className="bg-[#002B5B] hover:bg-[#FF7A00] text-white py-2.5 rounded-xl font-bold text-xs transition-colors shadow-sm flex items-center justify-center gap-1"
                    >
                      <MessageSquare size={13} />
                      <span>{isRTL ? 'قدم الآن' : 'Apply'}</span>
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>

      {/* DETAILS POPUP MODAL */}
      <AnimatePresence>
        {selectedItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelectedItem(null)} className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm" />
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} className="relative w-full max-w-lg bg-white rounded-3xl p-6 sm:p-8 shadow-2xl z-10 text-start">
              <button onClick={() => setSelectedItem(null)} className="absolute top-5 right-5 w-8 h-8 rounded-full bg-slate-100 text-slate-600 flex items-center justify-center">
                <X size={16} />
              </button>

              <div className="flex items-center gap-3 mb-4">
                {selectedItem.image_url && (
                  <img src={selectedItem.image_url} alt="" className="w-8 h-6 object-cover rounded border" />
                )}
                <h3 className="text-xl font-black text-[#002B5B]">
                  {getContent(selectedItem, 'title')} - {isRTL ? 'التفاصيل' : 'Details'}
                </h3>
              </div>

              <div className="space-y-2.5 py-4 border-y border-slate-100 mb-6 max-h-60 overflow-y-auto">
                {bulletsOf(selectedItem).map((bullet, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs text-slate-700">
                    <CheckCircle2 size={15} className="text-emerald-500 shrink-0 mt-0.5" />
                    <span>{bullet}</span>
                  </div>
                ))}
              </div>

              <button
                onClick={() => handleWhatsApp(selectedItem)}
                className="w-full bg-[#FF7A00] hover:bg-orange-600 text-white py-3 rounded-xl font-bold text-xs uppercase shadow-md flex items-center justify-center gap-2"
              >
                <MessageSquare size={16} />
                <span>{isRTL ? 'تواصل عبر واتساب' : 'Inquire via WhatsApp'}</span>
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
