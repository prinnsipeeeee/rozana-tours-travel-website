import React, { useState } from 'react';
import {
    Plane,
    Calendar,
    Users,
    MapPin,
    Sparkles,
    MessageSquare,
    ArrowRight,
    Armchair,
    X,
    Ticket,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

// POPULAR DESTINATIONS WITH HD FLAG CDN
const popularDestinations = [
    { city_en: 'Dubai (DXB)', city_ar: 'دبي (DXB)', country_en: 'UAE', country_ar: 'الإمارات', price: 'from 550 SAR', flag: 'https://flagcdn.com/w40/ae.png' },
    { city_en: 'Cairo (CAI)', city_ar: 'القاهرة (CAI)', country_en: 'Egypt', country_ar: 'مصر', price: 'from 650 SAR', flag: 'https://flagcdn.com/w40/eg.png' },
    { city_en: 'Istanbul (IST)', city_ar: 'إسطنبول (IST)', country_en: 'Turkey', country_ar: 'تركيا', price: 'from 890 SAR', flag: 'https://flagcdn.com/w40/tr.png' },
    { city_en: 'London (LHR)', city_ar: 'لندن (LHR)', country_en: 'United Kingdom', country_ar: 'المملكة المتحدة', price: 'from 1,850 SAR', flag: 'https://flagcdn.com/w40/gb.png' },
    { city_en: 'Maldives (MLE)', city_ar: 'المالديف (MLE)', country_en: 'Maldives', country_ar: 'المالديف', price: 'from 1,950 SAR', flag: 'https://flagcdn.com/w40/mv.png' },
    { city_en: 'Bangkok (BKK)', city_ar: 'بانكوك (BKK)', country_en: 'Thailand', country_ar: 'تايلاند', price: 'from 1,750 SAR', flag: 'https://flagcdn.com/w40/th.png' }
];

export default function FlightBookingSection({ settings = {} }) {
    const { lang, isRTL } = useLanguage();
    const whatsappNumber = settings.whatsapp_number || '966552993899';

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [tripType, setTripType] = useState('roundtrip');
    const [fromCity, setFromCity] = useState('Riyadh (RUH) - King Khalid Intl');
    const [toCity, setToCity] = useState('Dubai (DXB) - UAE');
    const [departDate, setDepartDate] = useState('');
    const [returnDate, setReturnDate] = useState('');
    const [passengers, setPassengers] = useState('1 Adult');
    const [cabinClass, setCabinClass] = useState('Economy Class');

    const handleSelectTrending = (destCity) => {
        setToCity(destCity);
        setIsModalOpen(true);
    };

    const handleFlightInquiry = (e) => {
        e.preventDefault();
        let details;
        if (lang === 'ar') {
            details =
                `*استفسار حجز رحلة - روزانا للسياحة*\n\n` +
                `✈️ *نوع الرحلة:* ${tripType === 'roundtrip' ? 'ذهاب وعودة' : 'ذهاب فقط'}\n` +
                `🛫 *من:* ${fromCity}\n` +
                `🛬 *إلى:* ${toCity}\n` +
                `📅 *تاريخ المغادرة:* ${departDate || 'مرن / استفسار'}\n` +
                (tripType === 'roundtrip' ? `🔙 *تاريخ العودة:* ${returnDate || 'مرن / استفسار'}\n` : '') +
                `👥 *المسافرون:* ${passengers}\n` +
                `💺 *درجة السفر:* ${cabinClass}\n\n` +
                `أرجو مراجعة أفضل الأسعار والجداول المتاحة.`;
        } else {
            details =
                `*Flight Booking Inquiry - Rozana Tours*\n\n` +
                `✈️ *Trip Type:* ${tripType === 'roundtrip' ? 'Round Trip' : 'One Way'}\n` +
                `🛫 *From:* ${fromCity}\n` +
                `🛬 *To:* ${toCity}\n` +
                `📅 *Departure Date:* ${departDate || 'Flexible / Inquire'}\n` +
                (tripType === 'roundtrip' ? `🔙 *Return Date:* ${returnDate || 'Flexible / Inquire'}\n` : '') +
                `👥 *Passengers:* ${passengers}\n` +
                `💺 *Cabin Class:* ${cabinClass}\n\n` +
                `Please check the best available airline fares and schedules for me.`;
        }

        const encoded = encodeURIComponent(details);
        window.location.href = `https://wa.me/${whatsappNumber}?text=${encoded}`;
    };

    const steps = [
        {
            num: '01',
            color: 'bg-[#002B5B]',
            title_en: 'Select Route & Dates',
            title_ar: 'اختر المسار والتواريخ',
            desc_en: 'Choose your Saudi departure airport (Riyadh, Jeddah, or Dammam), destination, and preferred travel dates.',
            desc_ar: 'اختر مطار المغادرة السعودي (الرياض، جدة، أو الدمام)، والوجهة، والتواريخ المفضلة.',
            hover: 'hover:border-[#0084D6]/40'
        },
        {
            num: '02',
            color: 'bg-[#FF7A00]',
            title_en: 'Instant Fare Comparison',
            title_ar: 'مقارنة فورية للأسعار',
            desc_en: 'Our travel specialists compare over 100+ partner airlines to find the lowest fares and best luggage allowances.',
            desc_ar: 'يقارن متخصصو السفر لدينا أكثر من 100 شركة طيران للعثور على أفضل الأسعار وأوزان الأمتعة.',
            hover: 'hover:border-[#FF7A00]/40'
        },
        {
            num: '03',
            color: 'bg-emerald-600',
            title_en: 'Receive E-Ticket via WhatsApp',
            title_ar: 'استلم تذكرتك عبر واتساب',
            desc_en: 'Confirm your itinerary, pay securely, and get your official e-ticket on WhatsApp in minutes.',
            desc_ar: 'أكّد برنامجك، ادفع بأمان، واستلم تذكرتك الإلكترونية الرسمية عبر واتساب خلال دقائق.',
            hover: 'hover:border-emerald-500/40'
        }
    ];

    return (
        <section id="flights" className="py-24 bg-white relative font-sans overflow-hidden" dir={isRTL ? 'rtl' : 'ltr'}>

            {/* SUBTLE BACKGROUND ACCENTS */}
            <div className="absolute top-10 right-10 w-96 h-96 bg-[#0084D6]/5 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#FF7A00]/5 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#002B5B05_1px,transparent_1px),linear-gradient(to_bottom,#002B5B05_1px,transparent_1px)] bg-size-[32px_32px] pointer-events-none"></div>

            <div className="max-w-360 mx-auto px-4 sm:px-6 md:px-10 relative z-10">

                {/* 1. SECTION HEADER */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-3xl mx-auto space-y-4 mb-16"
                >
                    <div className="inline-flex items-center gap-2 bg-[#003B7A]/10 text-[#003B7A] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
                        <Plane size={15} className="text-[#FF7A00]" />
                        <span>{lang === 'ar' ? 'حجز تذاكر الطيران الدولية' : 'Worldwide Flight Bookings'}</span>
                    </div>

                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#002B5B] tracking-tight">
                        {lang === 'ar' ? (
                            <>احجز رحلتك بـ<span className="text-[#FF7A00]">أسعار سعودية حصرية</span></>
                        ) : (
                            <>Book Flights with <span className="text-[#FF7A00]">Exclusive Saudi Fares</span></>
                        )}
                    </h2>

                    <p className="text-slate-600 text-base md:text-lg leading-relaxed font-light">
                        {lang === 'ar'
                            ? 'استمتع بخصومات مؤسسية على السعودية وطيران الإمارات والقطرية وأبرز شركات الطيران الدولية. إصدار تذاكر إلكترونية سهل ودعم إعادة الحجز على مدار الساعة.'
                            : 'Enjoy special corporate discounts on Saudia, Emirates, Qatar Airways, and top international airlines. Hassle-free e-ticketing and 24/7 rebooking support.'}
                    </p>
                </motion.div>

                {/* 2. THREE-STEP EASY BOOKING CARDS */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                    {steps.map((step, i) => (
                        <div key={i} className={`bg-slate-50/80 p-6 rounded-3xl border border-slate-200/90 text-start space-y-3 ${step.hover} transition-colors`}>
                            <div className={`w-12 h-12 rounded-2xl ${step.color} text-white flex items-center justify-center font-black text-base shadow-md`}>
                                {step.num}
                            </div>
                            <h3 className="font-extrabold text-[#002B5B] text-base">
                                {lang === 'ar' ? step.title_ar : step.title_en}
                            </h3>
                            <p className="text-xs text-slate-500 leading-relaxed font-light">
                                {lang === 'ar' ? step.desc_ar : step.desc_en}
                            </p>
                        </div>
                    ))}
                </div>

                {/* 3. PRIMARY ACTION BANNER */}
                <div className="bg-linear-to-r from-[#002B5B] via-[#003B7A] to-[#002B5B] rounded-3xl p-8 sm:p-10 text-white text-center sm:text-start flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl mb-16">
                    <div className="space-y-2 max-w-2xl">
                        <div className="inline-flex items-center gap-2 text-amber-300 text-xs font-bold uppercase tracking-wider">
                            <Sparkles size={15} />
                            <span>{lang === 'ar' ? 'هل أنت مستعد للسفر؟' : 'Ready to Fly?'}</span>
                        </div>
                        <h3 className="text-2xl sm:text-3xl font-black">
                            {lang === 'ar'
                                ? 'اعثر على أفضل الرحلات والأسعار الآن'
                                : 'Find Available Flights & Lowest Rates Now'}
                        </h3>
                        <p className="text-xs sm:text-sm text-slate-300 font-light">
                            {lang === 'ar'
                                ? 'انقر لفتح نظام حجز الرحلات وأرسل تفاصيل رحلتك.'
                                : 'Click below to launch our flight finder console and submit your trip details.'}
                        </p>
                    </div>

                    <button
                        onClick={() => setIsModalOpen(true)}
                        className="shrink-0 bg-linear-to-r from-[#FF7A00] to-amber-500 hover:from-amber-500 hover:to-[#FF7A00] text-white px-8 py-4 rounded-2xl font-black text-xs uppercase tracking-wider shadow-xl shadow-[#FF7A00]/25 transition-all hover:scale-105 active:scale-95 flex items-center gap-2.5"
                    >
                        <Ticket size={18} />
                        <span>{lang === 'ar' ? 'افتح نظام حجز الرحلات' : 'Open Flight Booking Console'}</span>
                    </button>
                </div>

                {/* 4. POPULAR FARES QUICK-PICK ROW */}
                <div className="space-y-4 text-start">
                    <div className="flex items-center justify-between">
                        <h4 className="text-base sm:text-lg font-bold text-[#002B5B] flex items-center gap-2">
                            <Sparkles size={16} className="text-[#FF7A00]" />
                            <span>{lang === 'ar' ? 'الوجهات الأكثر طلباً من الرياض وجدة' : 'Trending Destinations from Riyadh & Jeddah'}</span>
                        </h4>
                        <span className="text-xs text-slate-400 font-medium">
                            {lang === 'ar' ? 'انقر للحجز' : 'Click to book'}
                        </span>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3.5">
                        {popularDestinations.map((dest, i) => (
                            <button
                                key={i}
                                type="button"
                                onClick={() => handleSelectTrending(dest.city_en)}
                                className="bg-slate-50 hover:bg-white p-4 rounded-2xl border border-slate-200 hover:border-[#FF7A00] transition-all text-start group shadow-xs hover:shadow-lg"
                            >
                                <div className="flex items-center gap-2 mb-2">
                                    <img src={dest.flag} alt={dest.country_en} className="w-5 h-3.5 object-cover rounded-xs border border-slate-200" />
                                    <span className="text-xs font-bold text-slate-700 truncate">
                                        {lang === 'ar' ? dest.city_ar : dest.city_en}
                                    </span>
                                </div>
                                <p className="text-xs font-black text-[#002B5B] group-hover:text-[#FF7A00] transition-colors">
                                    {dest.price}
                                </p>
                            </button>
                        ))}
                    </div>
                </div>

            </div>

            {/* 5. INTERACTIVE FLIGHT BOOKING MODAL */}
            <AnimatePresence>
                {isModalOpen && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">

                        {/* BACKDROP */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsModalOpen(false)}
                            className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm"
                        />

                        {/* MODAL WINDOW */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            transition={{ type: "spring", stiffness: 300, damping: 25 }}
                            className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-100 p-6 sm:p-8 text-start z-10 my-8"
                            dir={isRTL ? 'rtl' : 'ltr'}
                        >

                            {/* CLOSE BUTTON */}
                            <button
                                onClick={() => setIsModalOpen(false)}
                                className="absolute top-5 inset-e-5 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition-colors"
                            >
                                <X size={18} />
                            </button>

                            {/* MODAL HEADER */}
                            <div className="border-b border-slate-100 pb-4 mb-6 pe-10">
                                <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#FF7A00] uppercase tracking-wider mb-1">
                                    <Plane size={14} />
                                    <span>{lang === 'ar' ? 'نظام حجز الرحلات' : 'Flight Booking Console'}</span>
                                </div>
                                <h3 className="text-xl sm:text-2xl font-black text-[#002B5B]">
                                    {lang === 'ar' ? 'ابحث عن أفضل الرحلات المتاحة' : 'Search Available Flight Fares'}
                                </h3>
                            </div>

                            {/* FORM */}
                            <form onSubmit={handleFlightInquiry} className="space-y-5">

                                {/* TRIP TYPE TABS */}
                                <div className="flex items-center gap-2 bg-slate-100 p-1 rounded-2xl w-fit">
                                    <button
                                        type="button"
                                        onClick={() => setTripType('roundtrip')}
                                        className={`px-4 py-1.5 rounded-xl text-xs font-bold transition-all ${
                                            tripType === 'roundtrip'
                                                ? 'bg-white text-[#002B5B] shadow-sm'
                                                : 'text-slate-600 hover:text-slate-900'
                                        }`}
                                    >
                                        {lang === 'ar' ? 'ذهاب وعودة' : 'Round Trip'}
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => setTripType('oneway')}
                                        className={`px-4 py-1.5 rounded-xl text-xs font-bold transition-all ${
                                            tripType === 'oneway'
                                                ? 'bg-white text-[#002B5B] shadow-sm'
                                                : 'text-slate-600 hover:text-slate-900'
                                        }`}
                                    >
                                        {lang === 'ar' ? 'ذهاب فقط' : 'One Way'}
                                    </button>
                                </div>

                                {/* ORIGIN & DESTINATION */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-xs font-bold text-slate-700 mb-1.5">
                                            {lang === 'ar' ? 'مدينة المغادرة (من):' : 'Departure City (From):'}
                                        </label>
                                        <select
                                            value={fromCity}
                                            onChange={(e) => setFromCity(e.target.value)}
                                            className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-3 text-xs text-slate-800 font-semibold focus:outline-none focus:border-[#FF7A00]"
                                        >
                                            <option value="Riyadh (RUH) - King Khalid Intl">Riyadh (RUH) - King Khalid Intl</option>
                                            <option value="Jeddah (JED) - King Abdulaziz Intl">Jeddah (JED) - King Abdulaziz Intl</option>
                                            <option value="Dammam (DMM) - King Fahd Intl">Dammam (DMM) - King Fahd Intl</option>
                                            <option value="Madinah (MED) - Prince Mohammad Intl">Madinah (MED) - Prince Mohammad Intl</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label className="block text-xs font-bold text-slate-700 mb-1.5">
                                            {lang === 'ar' ? 'مدينة الوصول (إلى):' : 'Destination City (To):'}
                                        </label>
                                        <select
                                            value={toCity}
                                            onChange={(e) => setToCity(e.target.value)}
                                            className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-3 text-xs text-slate-800 font-semibold focus:outline-none focus:border-[#FF7A00]"
                                        >
                                            <option value="Dubai (DXB) - UAE">Dubai (DXB) - UAE</option>
                                            <option value="Cairo (CAI) - Egypt">Cairo (CAI) - Egypt</option>
                                            <option value="London (LHR) - United Kingdom">London (LHR) - United Kingdom</option>
                                            <option value="Istanbul (IST) - Turkey">Istanbul (IST) - Turkey</option>
                                            <option value="Maldives (MLE) - Male">Maldives (MLE) - Male</option>
                                            <option value="Bangkok (BKK) - Thailand">Bangkok (BKK) - Thailand</option>
                                            <option value="Paris (CDG) - France">Paris (CDG) - France</option>
                                            <option value="Manila (MNL) - Philippines">Manila (MNL) - Philippines</option>
                                            <option value="Sarajevo (SJJ) - Bosnia">Sarajevo (SJJ) - Bosnia</option>
                                            <option value="Other International Destination">Other International Destination</option>
                                        </select>
                                    </div>
                                </div>

                                {/* DATES */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-xs font-bold text-slate-700 mb-1.5">
                                            {lang === 'ar' ? 'تاريخ المغادرة:' : 'Departure Date:'}
                                        </label>
                                        <input
                                            type="date"
                                            value={departDate}
                                            onChange={(e) => setDepartDate(e.target.value)}
                                            className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-800 font-medium focus:outline-none focus:border-[#FF7A00]"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-xs font-bold text-slate-700 mb-1.5">
                                            {lang === 'ar' ? 'تاريخ العودة:' : 'Return Date:'}
                                        </label>
                                        <input
                                            type="date"
                                            disabled={tripType === 'oneway'}
                                            value={tripType === 'oneway' ? '' : returnDate}
                                            onChange={(e) => setReturnDate(e.target.value)}
                                            className={`w-full border rounded-xl px-3.5 py-2.5 text-xs font-medium focus:outline-none ${
                                                tripType === 'oneway'
                                                    ? 'bg-slate-100 border-slate-200 text-slate-400 cursor-not-allowed'
                                                    : 'bg-slate-50 border border-slate-200 text-slate-800 focus:border-[#FF7A00]'
                                            }`}
                                        />
                                    </div>
                                </div>

                                {/* PASSENGERS & CABIN */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-xs font-bold text-slate-700 mb-1.5">
                                            {lang === 'ar' ? 'المسافرون:' : 'Passengers:'}
                                        </label>
                                        <select
                                            value={passengers}
                                            onChange={(e) => setPassengers(e.target.value)}
                                            className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-800 font-medium focus:outline-none focus:border-[#FF7A00]"
                                        >
                                            <option value="1 Adult">1 Adult</option>
                                            <option value="2 Adults">2 Adults</option>
                                            <option value="Family (2 Adults, 1-2 Children)">Family (2 Adults + Children)</option>
                                            <option value="Group (4+ Passengers)">Group (4+ Passengers)</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label className="block text-xs font-bold text-slate-700 mb-1.5">
                                            {lang === 'ar' ? 'درجة السفر:' : 'Cabin Class:'}
                                        </label>
                                        <select
                                            value={cabinClass}
                                            onChange={(e) => setCabinClass(e.target.value)}
                                            className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-800 font-medium focus:outline-none focus:border-[#FF7A00]"
                                        >
                                            <option value="Economy Class">Economy Class (الدرجة السياحية)</option>
                                            <option value="Business Class">Business Class (درجة رجال الأعمال)</option>
                                            <option value="First Class">First Class (الدرجة الأولى)</option>
                                        </select>
                                    </div>
                                </div>

                                {/* SUBMIT BUTTON */}
                                <button
                                    type="submit"
                                    className="w-full bg-linear-to-r from-[#FF7A00] to-amber-500 hover:from-amber-500 hover:to-[#FF7A00] text-white py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider shadow-lg shadow-[#FF7A00]/25 transition-all flex items-center justify-center gap-2 hover:scale-[1.01] active:scale-[0.99] mt-2"
                                >
                                    <MessageSquare size={16} />
                                    <span>{lang === 'ar' ? 'ابحث عن الأسعار عبر واتساب' : 'Search Fares on WhatsApp'}</span>
                                </button>

                            </form>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>

        </section>
    );
}