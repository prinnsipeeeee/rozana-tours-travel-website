import React, { useState } from "react";
import { Building2, Car, Clock2, CheckCircle2, MessageSquare, Sparkles, ShieldCheck, MapPin, Star, Users, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

// DATA SET: Umrah Packages
const umrahPackages = [
    {
        id: 'vip-executive',
        title: 'VIP Executive Umrah Experience',
        makkahHotel: 'Fairmont Clock Tower (Kaaba View)',
        madinahHotel: 'The Oberal Madinah',
        durationg: '5 Days / 4 Nights',
        price: '3,500 SAR',
        rating: 5.0,
        popular: true,
        transport: 'Private VIP Mercedes / GMC Yukon',
        inclusions: [
            'Direct Front Haram / Kaaba View Suite',
            'Daily 5-Star Open Buffet Breakfast',
            'Private Chaurffeur Airport & Haram Transfers',
            'Nusuk Permit & Fast-Track Assistance',
            'Guided Historical Ziyarat Tours'
        ]
    },
    {
        id: 'premium-family',
        title: 'Premium Family Umrah Package',
        makkahHotel: 'Swissotel Makkah',
        madinahHotel: 'Pullman Zamzam Madinah',
        duration: '7 Days / 6 Nights',
        price: '2,950 SAR',
        rating: 4.9,
        popular: false,
        transport: 'Private Family SUV Transfer',
        inclusions: [
            'Connections Family Suites near Haram',
            'Daily Breakfast Included',
            'Makkah - Madinah VIP Train / Car',
            'Ziyarat in Makkah (Ghar-Hira, Thawr)',
            '24/7 Dedicated Arabic & English Guide'
        ]
    },
    {
        id: 'weekend-express',
        title: 'Weekend Express Umrah',
        makkahHotel: 'Pullman Makkah Clock Royal',
        madinahHotel: 'Day Tour (Optional)',
        duration: '3 Days / 2 Nights',
        price: '1,750 SAR',
        rating: 4.8,
        popular: false,
        transport: 'Airport Pick-up & Drop-off',
        inclusions: [
            'Step away from king Abdulaziz Gate',
            'Express Check-in Service',
            'Roundtrip Jeddah Airport Transfer',
            'Nusuk Rawdah Slot Support',
        ]
    }
];

export default function UmrahSection() {
    const [selectedTransport, setSelectedTransport] = useState('all');

    const handleInquiry = (packageTitle) => {
    const msg = encodeURIComponent(`Peace be upon you Rozana Tours! I would like to inquire and book the "${packageTitle}". Please send available dates.`);
    window.open(`https://wa.me/966552993899?text=${msg}`, '_blank');
    }

    return (
        <section id="flights" className="py-24 bg-slate-900 text-white relative font-sans overflow-hidden">

            <div className="absolute top-0 right-1/4 w-96 h-86 bg-[#FF7A00]/10 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#0084D6]/15 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] bg-size-[32px_32px] opacity-5 pointer-events-none"></div>

            <div className="wax-w-7xl mx-auto py-4 md:px-8 relative z-10">

                {/* 1. SECTION HEADER */}
                <motion.div
                    initial={{ opacity: 0, y: 10}}
                    whileInView={{ opacity: 1, y: 0}}
                    viewport={{ once: true}}
                    transition={{ duration: 0.6}}
                    className="text-center max-w-3xl mx-auto space-y-4 mb-16"
                >
                    <div className="inline-flex items-center gap-2 bg-amber-400/10 border border-amber-400/20 text-amber-300 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
                        <Sparkles size={15} className="text-[#FF7A00]" />
                        <span>Spiritual Journeys & Luxury Pilgrimage</span>
                    </div>
                    
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-blak tracking-tight text-white">
                        Bespoke <spand className="text-transparent bg-clip-text bg-linear-to-r from-amber-200 via-[#FF7A00] to-orange-400">VIP Umrah Packages</spand>
                    </h2>

                    <p className="text-slate-300 text-base md:text-lg leading-relaxed font-light">
                        Perform your pilgrimage with complete peace of mind. 5-Star luxury hotels overlooking the Holy Kaaba, private GMC transfers, and complete Nusuk concierge.
                    </p>
                </motion.div>

                {/* 2. UMRAH PACKAGES GRID */}
                <div className="grid gird-cols- lg:grid-cols-3 gap-8 mb-16">
                    {umrahPackages.map((pkg) => (
                        <motion.div
                            key={pkg.id}
                            whileHover={{ y: -8 }}
                            transition={{ type: "spring", stiffness: 300 }}
                            className={`rounded-3xl p-8 flex flex-col justify-between relative overflow-hidden text-left backdrop-blur-xl border transition-all duration-300 ${
                                pkg.popular
                                ? 'bg-linear-to-b from-[#002B5B] to-[#001E3D] border-[#FF7A00]/60 shadow-2xl shadow-[#FF7A00]/10'
                                : 'bg-white/5 border-white/10 hover:border-white/25 shadow-lg'
                        }`}
                        >
                            {pkg.popular && (
                                <div className="absolute top-4 right-4 bg-linear-to-r from-[#FF7A00] to-amber-500 text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-wider shadow:md flex items-center gap-1">
                                    <Star size={12} fill="#FFFFF" />
                                    <span>Most Popular</span>
                                </div>
                            )}

                            <div>
                                <div className="flex items-center gap-3 text-xs text-slate-300 mb-3">
                                    <span className="bg-white/10 px-3 py-1 rounded-full font-semibold text-amber-300 border border-white-10">
                                        {pkg.duration}
                                    </span>

                                    <div className="flex items-center gap-1">
                                        <Star size={14} fill="#F59E0B" className="text-amber-400" />
                                        <span className="font-bold text-white">{pkg.rating}</span>
                                    </div>
                                </div>


                                {/* TITLE */}
                                <h3 className="text-2xl font-black text-white mb-6">
                                    {pkg.title}
                                </h3>

                                {/* HOTEL PARTNERS */}
                                <div className="space-y-3 bg-black/30 p-4 rounded-2xl border boder-white/10 mb-6 text-xs">
                                    <div className="space-y-1">
                                        <span className="text-amber-400 font-bold flex items-center gap-1.5">
                                            <Building2 size={14} /> 
                                            Makkah Al-Mukarramah:
                                        </span>
                                        <p className="text-slate-200 font-medium pl-5">
                                            {pkg.makkahHotel}
                                        </p>
                                    </div>
                                    <div className="space-y-1 border-t border-white/10 pt-2">
                                        <span className="text-sky-400 font-bold flex items-center gap-1.5">
                                            <Building2 size={14} /> 
                                            Madinah Al-Munwwarah:
                                        </span>
                                        <p className="text-slate-200 font-medium pl-5">
                                            {pkg.madinahHotel}
                                        </p>
                                    </div>
                                </div>


                                {/* INCLUSIONS LIST */}
                                <div className="space-y-2 5 mb-8">
                                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
                                        Packages Inclusions:
                                    </span>
                                    <span>
                                        {pkg.inclusions.map((inc, i) => (
                                            <div key={i} className="flex items-start gap-2.5 text-xs text-slate-300">
                                                <CheckCircle2 size={15} className="text-emerald-400 shrink-0 mt-0.5" />
                                                <span>{inc}</span>
                                            </div>
                                        ))}
                                    </span>
                                </div>
                            </div>

                            {/* FOOTER PRICE & ACTION BUTTON */}
                            <div className="pt-6 border-t border-white.10 flex items-center justify-between gap-4">
                                <div>
                                    <span className="text-[10px] uppercase font-bold text-slate-400 block">Starting Per Person</span>
                                    <span className="text-2xl font-black text-amber-300">{pkg.price}</span>
                                </div>

                                <button
                                    onClick={() => handleInquiry(pkg.title)}
                                    className="bg-linear-to-r from-[#FF7A00] to-amber-500 hover:from-amber-500 hover:to-[#FF7A00] text-white px-5 py-3 rounded-2xl font-bold text-xs transition-all flex items-center gap-2 shadow-lg shadow-[#FF7A00]/25 hover:scale-105 active:scale-95"
                                    >
                                    <MessageSquare size={15} />
                                    <span>Book VIP</span>
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
                
                {/*  3. CUSTOM UMRAH QUOTATION BANNER */}
                <motion.div
                    initial={{ opacity: 0, y: 20}}
                    whileInView={{ opacity: 1, y: 0}}
                    viewport={{ once: true}}
                    transition={{ duration: 0.6}}
                    className="bg-linear-to-r from-[#002B5B] via-[#003B7A] to-[#002B5B] border border-amber-500/30 rounded-3xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 text-left shadow-2xl"
                >
                    <div className="space-y-2">
                        <h4 className="text-xl md:text-2xl font-black text-white flex items-center gap-2">
                            <Sparkles size={20} className="text-[#FF7A00]" />
                            Need a custom Date or Group Umrah Itinerary?
                        </h4>
                        <p className="text-sm text-slate-300 font-light max-w-2xl">
                            We customize bespoke pilgrimages for families, corporate delegations, and VIP guests with private jet coordination and 5-star royal suites.
                        </p>

                        <a
                            href="https://wa.me/966500000000?text=Hello%20Rozana%20Tours!%20I%20would%20like%20a%20custom%20Umrah%20quotation."
                            target="_blank"
                            rel="noreferrer"
                            className="shrink-0 inline-flex items-center gap-2 bg-white text-[#002B5B] hover:bg-amber-300 px-6 py-3.5 rounded-2xl font-black text-xs uppercase tracking-wider transition-all shadow-xl hover:scale-105"
                        >
                            <span>Request Custom Quotation</span>
                            <ChevronRight size={16} />
                        </a>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}