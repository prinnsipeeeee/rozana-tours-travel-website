import React, { useState } from "react";
import { Compass, Calendar, Star, Check, MessageSquare, X, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

// DEFAULT STATIC DATA (used when Laravel API is not connected)
const packageData = [
    {
        id: 'maldives',
        title_en: 'Maldives Paradise & Overwater Villa',
        title_ar: 'جنة المالديف وفيلا فوق الماء',
        location_en: 'Maldives Islands',
        location_ar: 'جزر المالديف',
        flagImg: 'https://flagcdn.com/w40/mv.png',
        category: 'tropical',
        duration_en: '5 Days / 4 Nights',
        duration_ar: '٥ أيام / ٤ ليالٍ',
        price: '4,750 SAR',
        rating: 4.9,
        reviews: 184,
        image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=800&q=80',
        popular: true,
        inclusions_en: ['5-Star Resort', 'Private Speedboat', 'Daily Breakfast', 'Seaplane Flight'],
        inclusions_ar: ['منتجع 5 نجوم', 'قارب خاص سريع', 'إفطار يومي', 'رحلة بالطائرة المائية'],
        itinerary_en: [
            { day: 'Day 1', detail: 'Arrival at Male Airport, private seaplane transfer to 5-star Overwater Resort.' },
            { day: 'Day 2', detail: 'Guided Snorkeling with Turtle Bay experience & sunset dolphin cruise.' },
            { day: 'Day 3', detail: 'Private floating breakfast in ocean pool & couples spa treatment.' },
            { day: 'Day 4', detail: 'Island hopping tour & private candlelit beach dinner.' },
            { day: 'Day 5', detail: 'Breakfast, morning leisure, and speedboat checkout transfer to airport.' }
        ],
        itinerary_ar: [
            { day: 'اليوم ١', detail: 'الوصول إلى مطار ماليه، ثم انتقال خاص بالطائرة المائية إلى المنتجع.' },
            { day: 'اليوم ٢', detail: 'رحلة غوص مرافقة مع تجربة خليج السلاحف ورحلة مشاهدة الدلافين عند الغروب.' },
            { day: 'اليوم ٣', detail: 'إفطار عائم خاص في حوض المحيط وجلسة سبا للأزواج.' },
            { day: 'اليوم ٤', detail: 'جولة بين الجزر وعشاء رومانسي على الشاطئ.' },
            { day: 'اليوم ٥', detail: 'إفطار وراحة صباحية ثم المغادرة بالقارب السريع إلى المطار.' }
        ]
    },
    {
        id: 'switzerland',
        title_en: 'Swiss Alps & Interlaken Luxury Escape',
        title_ar: 'جبال الألب السويسرية وإنترلاكن الفاخرة',
        location_en: 'Zurich & Interlaken, Switzerland',
        location_ar: 'زيورخ وإنترلاكن، سويسرا',
        flagImg: 'https://flagcdn.com/w40/ch.png',
        category: 'europe',
        duration_en: '7 Days / 6 Nights',
        duration_ar: '٧ أيام / ٦ ليالٍ',
        price: '6,800 SAR',
        rating: 5.0,
        reviews: 210,
        image: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=800&q=80',
        popular: true,
        inclusions_en: ['Roundtrip Flights', 'Alpine Train Pass', 'Luxury Chalet Hotel', 'Lake Thun Cruise'],
        inclusions_ar: ['رحلات ذهاب وعودة', 'تصريح قطار جبلي', 'فندق شاليه فاخر', 'رحلة بحيرة ثون'],
        itinerary_en: [
            { day: 'Day 1-2', detail: 'Arrive in Zurich, scenic train ride to Interlaken. Check-in luxury chalet.' },
            { day: 'Day 3-4', detail: 'Jungfraujoch Top of Europe cable car & Grindelwald First excursion.' },
            { day: 'Day 5-6', detail: 'Private Lake Lucerne boat tour & shopping trip in Zurich.' },
            { day: 'Day 7', detail: 'Final breakfast and VIP limousine transfer to Zurich International Airport.' }
        ],
        itinerary_ar: [
            { day: 'اليوم ١-٢', detail: 'الوصول إلى زيورخ، ثم رحلة قطار جميلة إلى إنترلاكن وتسجيل في الشاليه.' },
            { day: 'اليوم ٣-٤', detail: 'رحلة بالتلفريك إلى قمة يونغفراو وجرينديلوالد فيرست.' },
            { day: 'اليوم ٥-٦', detail: 'جولة بحرية خاصة في بحيرة لوسيرن وتسوق في زيورخ.' },
            { day: 'اليوم ٧', detail: 'إفطار أخير ونقل VIP بالليموزين إلى مطار زيورخ الدولي.' }
        ]
    },
    {
        id: 'paris',
        title_en: 'Parisian Romance & Fashion Tour',
        title_ar: 'رومانسية باريس وجولة الأزياء',
        location_en: 'Paris, France',
        location_ar: 'باريس، فرنسا',
        flagImg: 'https://flagcdn.com/w40/fr.png',
        category: 'europe',
        duration_en: '6 Days / 5 Nights',
        duration_ar: '٦ أيام / ٥ ليالٍ',
        price: '5,400 SAR',
        rating: 4.9,
        reviews: 142,
        image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=800&q=80',
        popular: false,
        inclusions_en: ['Eiffel Tower VIP Access', 'Louvre Museum Pass', 'Seine Dinner Cruise', '4-Star Boutique Hotel'],
        inclusions_ar: ['دخول VIP لبرج إيفل', 'تصريح متحف اللوفر', 'عشاء على نهر السين', 'فندق بوتيك ٤ نجوم'],
        itinerary_en: [
            { day: 'Day 1', detail: 'Arrival at Paris Charles de Gaulle Airport, private luxury transfer to hotel.' },
            { day: 'Day 2', detail: 'Skip-the-line Eiffel Tower & Louvre Museum guided tour.' },
            { day: 'Day 3', detail: 'Day Trip to Palace of Versailles & gardens.' },
            { day: 'Day 4-5', detail: 'Champs-Élysées luxury shopping & evening Seine River dinner cruise.' },
            { day: 'Day 6', detail: 'Breakfast & departure transfer.' }
        ],
        itinerary_ar: [
            { day: 'اليوم ١', detail: 'الوصول إلى مطار شارل ديغول، نقل خاص فاخر إلى الفندق.' },
            { day: 'اليوم ٢', detail: 'جولة موجهة بدون انتظار في برج إيفل ومتحف اللوفر.' },
            { day: 'اليوم ٣', detail: 'رحلة يومية إلى قصر فرساي وحدائقه.' },
            { day: 'اليوم ٤-٥', detail: 'تسوق فاخر في الشانزيليزيه وعشاء رومانسي على نهر السين.' },
            { day: 'اليوم ٦', detail: 'إفطار ثم المغادرة.' }
        ]
    },
    {
        id: 'bali',
        title_en: 'Bali Exotic Jungle & Beach Villa',
        title_ar: 'فيلا الغابة والشاطئ الغريبة في بالي',
        location_en: 'Ubud & Seminyak, Indonesia',
        location_ar: 'أوبود وسيمينياك، إندونيسيا',
        flagImg: 'https://flagcdn.com/w40/id.png',
        category: 'tropical',
        duration_en: '6 Days / 5 Nights',
        duration_ar: '٦ أيام / ٥ ليالٍ',
        price: '3,100 SAR',
        rating: 4.5,
        reviews: 98,
        image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=80',
        popular: false,
        inclusions_en: ['Private Pool Villa', 'Floating Breakfast', 'Waterfalls Tour', 'Private Car Chauffeur'],
        inclusions_ar: ['فيلا مع مسبح خاص', 'إفطار عائم', 'جولة الشلالات', 'سائق خاص'],
        itinerary_en: [
            { day: 'Day 1', detail: 'Arrival in Bali, private driver pickup to Ubud Private Jungle Villa.' },
            { day: 'Day 2', detail: 'Tegallalang Rice Terraces, Jungle Swing, & Sacred Monkey Forest.' },
            { day: 'Day 3', detail: 'Tegenungan Waterfall & Nusa Penida Island day tour.' },
            { day: 'Day 4-5', detail: 'Transfer to Seminyak beachfront villa & Tanah Lot Sunset Temple.' },
            { day: 'Day 6', detail: 'Relaxing spa morning and airport drop-off.' }
        ],
        itinerary_ar: [
            { day: 'اليوم ١', detail: 'الوصول إلى بالي، ثم انتقال بسائق خاص إلى فيلا الغابة في أوبود.' },
            { day: 'اليوم ٢', detail: 'مدرجات الأرز تيغالالانغ، أرجوحة الغابة، وغابة القرود المقدسة.' },
            { day: 'اليوم ٣', detail: 'شلال تيغينونغان وجولة يومية إلى جزيرة نوسا بينيدا.' },
            { day: 'اليوم ٤-٥', detail: 'الانتقال إلى فيلا شاطئ سيمينياك ومعبد تاناه لوت عند الغروب.' },
            { day: 'اليوم ٦', detail: 'جلسة سبا صباحية ثم التوجه إلى المطار.' }
        ]
    },
    {
        id: 'dubai',
        title_en: 'Dubai Luxury Skyline & Desert Safari',
        title_ar: 'أفق دبي الفاخر وسفاري الصحراء',
        location_en: 'Dubai, UAE',
        location_ar: 'دبي، الإمارات العربية المتحدة',
        flagImg: 'https://flagcdn.com/w40/ae.png',
        category: 'arabian',
        duration_en: '4 Days / 3 Nights',
        duration_ar: '٤ أيام / ٣ ليالٍ',
        price: '2,900 SAR',
        rating: 4.9,
        reviews: 310,
        image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80',
        popular: true,
        inclusions_en: ['Burj Khalifa At The Top', 'VIP Desert Safari', 'Yacht Cruise', '5-Star Hotel'],
        inclusions_ar: ['قمة برج خليفة', 'سفاري صحراء VIP', 'رحلة يخت', 'فندق ٥ نجوم'],
        itinerary_en: [
            { day: 'Day 1', detail: 'Arrive at Dubai Airport (DXB), private Mercedes transfer to 5-Star Hotel.' },
            { day: 'Day 2', detail: 'Burj Khalifa 124th Floor ticket & Dubai Mall Fountain View Lunch.' },
            { day: 'Day 3', detail: '4x4 VIP Desert Safari with Dune Bashing & BBQ Bedouin Dinner.' },
            { day: 'Day 4', detail: 'Marina Yacht Cruise and airport departure.' }
        ],
        itinerary_ar: [
            { day: 'اليوم ١', detail: 'الوصول إلى مطار دبي، نقل خاص بمرسيدس إلى فندق ٥ نجوم.' },
            { day: 'اليوم ٢', detail: 'تذكرة الطابق ١٢٤ في برج خليفة وغداء بإطلالة نافورة دبي مول.' },
            { day: 'اليوم ٣', detail: 'سفاري صحراء VIP بسيارة 4x4 مع التزلج على الكثبان وعشاء بدوي.' },
            { day: 'اليوم ٤', detail: 'رحلة يخت في مارينا ثم المغادرة من المطار.' }
        ]
    },
    {
        id: 'bosnia',
        title_en: 'Bosnia Nature & Lakes Expedition',
        title_ar: 'رحلة طبيعة وبحيرات البوسنة',
        location_en: 'Sarajevo & Mostar, Bosnia',
        location_ar: 'سراييفو وموستار، البوسنة',
        flagImg: 'https://flagcdn.com/w40/ba.png',
        category: 'europe',
        duration_en: '7 Days / 6 Nights',
        duration_ar: '٧ أيام / ٦ ليالٍ',
        price: '4,100 SAR',
        rating: 4.5,
        reviews: 165,
        image: 'https://images.unsplash.com/photo-1565008447742-97f6f38c985c?auto=format&fit=crop&w=800&q=80',
        popular: false,
        inclusions_en: ['Direct Flights', 'Private SUV Driver', 'Halal Dining Included', 'Kravice Waterfalls'],
        inclusions_ar: ['رحلات مباشرة', 'سائق SUV خاص', 'وجبات حلال', 'شلالات كرافيتسه'],
        itinerary_en: [
            { day: 'Day 1-2', detail: 'Arrive in Sarajevo, Old Town tour & Baščaršija historical market.' },
            { day: 'Day 3-4', detail: 'Drive to Mostar, Old Bridge tour & Kravice Waterfalls trip.' },
            { day: 'Day 5-6', detail: 'Prokoško Lake mountain village excursion & shopping.' },
            { day: 'Day 7', detail: 'Airport transfer & return flight.' }
        ],
        itinerary_ar: [
            { day: 'اليوم ١-٢', detail: 'الوصول إلى سراييفو، جولة في البلدة القديمة وسوق باشارشيا التاريخي.' },
            { day: 'اليوم ٣-٤', detail: 'القيادة إلى موستار وجولة الجسر القديم وشلالات كرافيتسه.' },
            { day: 'اليوم ٥-٦', detail: 'رحلة قرية بروكوشكو المحاطة بالجبال والتسوق.' },
            { day: 'اليوم ٧', detail: 'نقل إلى المطار والمغادرة.' }
        ]
    }
];

export default function PackagesSection({ items, settings = {} }) {
    const { lang, isRTL, t } = useLanguage();
    const whatsappNumber = settings.whatsapp_number || '966552993899';
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [activeModalPackage, setActiveModalPackage] = useState(null);

    // Backend-ready: use API items if provided, else use default static data
    // Items from API should have title_ar/title_en, location_ar/location_en, etc.
    const packages = Array.isArray(items) && items.length > 0 ? items : packageData;
    const filteredPackages = selectedCategory === 'all' ? packages : packages.filter(p => p.category === selectedCategory);

    const getField = (item, field) => {
        const arKey = `${field}_ar`;
        const enKey = `${field}_en`;
        return lang === 'ar'
            ? (item[arKey] || item[field] || '')
            : (item[enKey] || item[field] || '');
    };

    const handleBook = (packageTitle) => {
        const message = lang === 'ar'
            ? encodeURIComponent(`مرحباً روزانا للسياحة! أرغب في حجز باقة "${packageTitle}". أرجو إرسال التفاصيل والتواريخ المتاحة.`)
            : encodeURIComponent(`Hello Rozana Tours! I am interested in booking the "${packageTitle}" Tour Package. Please send me details & available dates.`);
        window.location.href = `https://wa.me/${whatsappNumber}?text=${message}`;
    };

    const categories = [
        { id: 'all', label_en: 'All Packages', label_ar: 'جميع الباقات', flagImg: null },
        { id: 'tropical', label_en: 'Tropical Islands', label_ar: 'الجزر الاستوائية', flagImg: 'https://flagcdn.com/w40/mv.png' },
        { id: 'europe', label_en: 'European Escapes', label_ar: 'وجهات أوروبا', flagImg: 'https://flagcdn.com/w40/ch.png' },
        { id: 'arabian', label_en: 'Arabian Luxury', label_ar: 'الفخامة العربية', flagImg: 'https://flagcdn.com/w40/ae.png' },
    ];

    return (
        <section id="packages" className="py-24 bg-white relative font-sans overflow-hidden" dir={isRTL ? 'rtl' : 'ltr'}>
            <div className="max-w-360 mx-auto px-4 md:px-10">

                {/* SECTION HEADER */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-3xl mx-auto space-y-4 mb-16"
                >
                    <div className="inline-flex items-center gap-2 bg-[#FF7A00]/10 text-[#FF7A00] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide">
                        <Compass size={16} />
                        <span>{lang === 'ar' ? 'باقات سياحية مختارة بعناية' : 'Curated Luxury Vacations'}</span>
                    </div>

                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#002B5B] tracking-tight">
                        {lang === 'ar' ? (
                            <>{settings.packages_heading_ar || <> باقات سياحية <span className="text-[#FF7A00]">مصممة خصيصاً</span> لك</>}</>
                        ) : (
                            <>{settings.packages_heading_en || <>Handcrafted <span className="text-[#FF7A00]">Tour Packages</span> For You</>}</>
                        )}
                    </h2>

                    <p className="text-slate-600 text-base md:text-lg leading-relaxed">
                        {lang === 'ar'
                            ? (settings.packages_description_ar || 'جميع الباقات تشمل ترتيبات الرحلات ذهاباً وإياباً، فنادق 5 نجوم، جولات مرافقة، وخدمة كونسيرج على مدار الساعة.')
                            : (settings.packages_description_en || 'All packages include roundtrip flight arrangements, 5-star hotel accommodations, guided tours, and 24/7 dedicated concierge.')}
                    </p>
                </motion.div>

                {/* CATEGORY FILTER */}
                <div className="flex flex-wrap items-center justify-center gap-2.5 mb-14">
                    {categories.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setSelectedCategory(tab.id)}
                            className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all duration-300 flex items-center gap-2 ${
                                selectedCategory === tab.id
                                    ? 'bg-[#003B7A] text-white shadow-lg shadow-[#003B7A]/20 scale-105'
                                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200 border border-slate-200/80'
                            }`}
                        >
                            {tab.flagImg && (
                                <img src={tab.flagImg} alt="" className="w-4 h-3 object-cover rounded-sm border border-slate-200" />
                            )}
                            <span>{lang === 'ar' ? tab.label_ar : tab.label_en}</span>
                        </button>
                    ))}
                </div>

                {/* ANIMATED PACKAGE CARDS GRID */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={selectedCategory}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.4 }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                        {filteredPackages.map((pkg) => (
                            <motion.div
                                key={pkg.id}
                                whileHover={{ y: -10 }}
                                transition={{ type: "spring", stiffness: 300 }}
                                className="bg-white rounded-3xl border border-slate-200/90 shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col justify-between overflow-hidden group"
                            >
                                <div>
                                    {/* IMAGE HEADER */}
                                    <div className="relative h-60 w-full overflow-hidden">
                                        <img
                                            src={pkg.image}
                                            alt={getField(pkg, 'title')}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent"></div>

                                        {pkg.popular && (
                                            <div className="absolute top-4 inset-s-4 bg-linear-to-r from-[#FF7A00] to-amber-500 text-white text-[10px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider shadow-md flex items-center gap-1">
                                                <Sparkles size={12} />
                                                <span>{lang === 'ar' ? 'الأكثر مبيعاً' : 'Best Seller'}</span>
                                            </div>
                                        )}

                                        {/* DURATION BADGE */}
                                        <div className="absolute bottom-4 inset-s-4 bg-black/60 backdrop-blur-md text-white text-xs font-semibold px-3 py-1.5 rounded-xl border border-white/20 flex items-center gap-1.5">
                                            <Calendar size={14} className="text-amber-400" />
                                            <span>{getField(pkg, 'duration')}</span>
                                        </div>

                                        {/* RATING BADGE */}
                                        <div className="absolute bottom-4 inset-e-4 bg-white/90 backdrop-blur-md text-slate-900 text-xs font-bold px-2.5 py-1 rounded-xl shadow-md flex items-center gap-1">
                                            <Star size={13} fill="#F59E0B" className="text-amber-500" />
                                            <span>{pkg.rating}</span>
                                            <span className="text-[10px] text-slate-500 font-normal">({pkg.reviews})</span>
                                        </div>
                                    </div>

                                    {/* CARD BODY */}
                                    <div className="p-6 space-y-4 text-start">
                                        <div className="flex items-center gap-2">
                                            <img
                                                src={pkg.flagImg}
                                                alt={getField(pkg, 'location')}
                                                className="w-5 h-3.5 object-cover rounded border border-slate-200"
                                            />
                                            <span className="text-xs font-bold text-slate-400 uppercase tracking-wide">
                                                {getField(pkg, 'location')}
                                            </span>
                                        </div>

                                        <h3 className="text-xl font-extrabold text-[#002B5B] group-hover:text-[#FF7A00] transition-colors leading-snug">
                                            {getField(pkg, 'title')}
                                        </h3>

                                        {/* INCLUSIONS CHECKLIST */}
                                        <div className="grid grid-cols-2 gap-2 pt-2 border-t border-slate-100">
                                            {(getField(pkg, 'inclusions') || []).map((inc, i) => (
                                                <div key={i} className="flex items-center gap-1.5 text-xs text-slate-600">
                                                    <Check size={14} className="text-emerald-500 shrink-0" />
                                                    <span className="truncate">{inc}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* CARD FOOTER */}
                                <div className="px-6 pb-6 pt-2 border-t border-slate-100 flex items-center justify-between gap-3">
                                    <div className="text-start">
                                        <span className="text-[10px] uppercase font-bold text-slate-400 block">
                                            {lang === 'ar' ? 'يبدأ من' : 'Starting From'}
                                        </span>
                                        <span className="text-xl font-black text-[#002B5B]">{pkg.price}</span>
                                    </div>

                                    <div className="flex items-center gap-2">
                                        <button
                                            onClick={() => setActiveModalPackage(pkg)}
                                            className="bg-slate-100 hover:bg-slate-200 text-slate-700 px-3 py-2.5 rounded-xl text-xs font-bold transition-colors"
                                            title={lang === 'ar' ? 'عرض البرنامج' : 'View Itinerary'}
                                        >
                                            {lang === 'ar' ? 'البرنامج' : 'Itinerary'}
                                        </button>

                                        <button
                                            onClick={() => handleBook(getField(pkg, 'title'))}
                                            className="bg-[#002B5B] hover:bg-[#FF7A00] text-white px-4 py-2.5 rounded-xl font-bold text-xs transition-colors flex items-center gap-1.5 shadow-md"
                                        >
                                            <MessageSquare size={14} />
                                            <span>{lang === 'ar' ? 'احجز الآن' : 'Book'}</span>
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </AnimatePresence>

                {/* ITINERARY MODAL */}
                <AnimatePresence>
                    {activeModalPackage && (
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
                                className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 space-y-6 shadow-2xl relative text-start max-h-[90vh] overflow-y-auto"
                                dir={isRTL ? 'rtl' : 'ltr'}
                            >
                                <button
                                    onClick={() => setActiveModalPackage(null)}
                                    className="absolute top-5 inset-e-5 text-slate-400 hover:text-slate-700 bg-slate-100 p-2 rounded-full transition-colors"
                                >
                                    <X size={20} />
                                </button>

                                <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                                    <img src={activeModalPackage.flagImg} alt="" className="w-8 h-6 object-cover rounded shadow" />
                                    <div>
                                        <h3 className="text-xl font-bold text-[#002B5B]">
                                            {getField(activeModalPackage, 'title')}
                                        </h3>
                                        <p className="text-xs text-slate-500">
                                            {getField(activeModalPackage, 'duration')} — {lang === 'ar' ? 'البرنامج التفصيلي' : 'Full Itinerary Schedule'}
                                        </p>
                                    </div>
                                </div>

                                {/* DAY-BY-DAY TIMELINE */}
                                <div className="space-y-4">
                                    <p className="font-bold text-xs uppercase tracking-wider text-slate-400">
                                        {lang === 'ar' ? 'البرنامج اليومي' : 'Day-by-Day Schedule'}
                                    </p>
                                    <div className="space-y-3">
                                        {(getField(activeModalPackage, 'itinerary') || []).map((item, idx) => (
                                            <div key={idx} className="bg-slate-50 p-4 rounded-2xl border border-slate-100 space-y-1">
                                                <span className="bg-[#003B7A] text-white text-[10px] font-extrabold px-2.5 py-0.5 rounded-full uppercase">
                                                    {item.day}
                                                </span>
                                                <p className="text-xs font-medium text-slate-700 pt-1 leading-relaxed">
                                                    {item.detail}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-4">
                                    <div>
                                        <span className="text-xs text-slate-400 block">
                                            {lang === 'ar' ? 'إجمالي سعر الباقة' : 'Total Package Price'}
                                        </span>
                                        <span className="text-xl font-black text-[#002B5B]">{activeModalPackage.price}</span>
                                    </div>

                                    <button
                                        onClick={() => {
                                            handleBook(getField(activeModalPackage, 'title'));
                                            setActiveModalPackage(null);
                                        }}
                                        className="bg-[#FF7A00] hover:bg-orange-600 text-white px-6 py-3 rounded-xl font-bold text-xs flex items-center gap-2 shadow-lg shadow-[#FF7A00]/25"
                                    >
                                        <MessageSquare size={16} />
                                        <span>{lang === 'ar' ? 'استفسر عبر واتساب' : 'Inquire via WhatsApp'}</span>
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
