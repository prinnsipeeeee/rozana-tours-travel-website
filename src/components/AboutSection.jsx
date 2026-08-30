import React from "react";
import { Building2, Award, ShieldCheck, Users, MapPin, CheckCircle2, Sparkles, HeartHandshake, Compass, PhoneCall, Clock } from "lucide-react";
import { motion } from "framer-motion";
import { desc } from "framer-motion/client";

export default function AboutSection() {
    const pillars = [
        {
            icon: <Award size={24} className="text-[#FF7A00]"  />,
            title: "Licensed Excellence",
            desc: "Fully accredited Saudi Arabian tourism agency adhering to international hospitality standards."
        },
        {
            icon: <ShieldCheck size={24} className="text-[#0084D6]" />,
            tiltle: '99.6% Visa Success',
            desc: 'Expert embassy relations, error-free documentations, and certified legal translation support.'
        },
        {
            icon: <HeartHandshake size={24} className="text-emerald-500" />,
            title: 'Personalized Care',
            desc: 'Tailor-made itineraries designed to make your journey effortless luxurious, and memorable.'
        },
        {
            icon: <Clock size={24} className="text-amber-500" />,
            title: '24/7 Dedicated Support',
            desc: 'Direct access to expert travel consultants before, during, and after your trip.'
        }
    ];

    return (
        <section id="about" className="py-24 bg-white relative font-sans overflow-hidden">


            {/* BACKGROUND SUBTLE ACCENTS */}
            <div className="absolute top-10 right-10 w-96 h-96 bg-[#0084D6]/5 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#FF7A00]/5 rounded-full blur-3xl pointer-events-none"></div>
            
            <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">

                {/* 1. ASYMETRIC 2-COLUMN LAYOUT */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

                    {/* LEFT COLUMN */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0}}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="lg:col-span-6 space-y-6 text-left"
                    >
                        <div className="inline-flex items-center gap-2 bg-[#003B7A]/10 text-[#003B7A] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide">
                            <Compass size={15} className="text-[#FF7A00]" />
                            <span>About Rozana Tours & Travels</span>
                        </div>

                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#002B5B] tracking-tight leading-tight">
                            Making Your Travel Experience <br /> <span className="text-[#FF7A00]">Exceptional Every Time</span>
                        </h2>

                        <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-light">
                            Headquartered in the heart of Riyadh on <strong className="text-slate-800 font-semibold">Umm Al Hamam Street</strong>, <span className="text-[#002B5B] font-bold">Rozana Tours & Travels</span> is a trusted gateway for Saudi citizens and residents seeking world-class travel, bespoke holiday packages, and streamlined global visa solutions.
                        </p>

                        <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-light">
                            Whether you are applying for a complex European Schengen visa, planning a luxury family vacation to the Maldives, or embarking on a spiritual Umrah journey, our dedicated travel consultants ensure unparalleled precision and care.
                        </p>

                        {/* CONSULTANT TRUST HIGHLIGHT CARD */}
                        <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-5 flex items-center justify-between gap-4 shadow-sm">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-2xl bg-[#002B5B] text-white flex items-center justify-center font-bold text-lg shadow-md shadow-[#002B5B]/20 shrink-0">
                                    RT
                                </div>
                                <div>
                                    <h4 className="font-extrabold text-[#002B5B] text-sm sm:text-base">
                                        Ashraf Hussein
                                    </h4>
                                    <p className="text-xs text-slate-500 font-medium">
                                        Senior Travel Consultant &bull; Riyadh Office
                                    </p>
                                </div>
                            </div>

                            <a 
                                href="tel:+966552993899" 
                                className="hidden sm:inline-flex items-center gap-2 bg-[#002B5B] hover:bg-[#FF7A00] text-white px-4 py-2.5 rounded-xl font-bold text-xs transition-colors shadow-sm"
                            >
                                <PhoneCall size={14} />
                                <span>Call Directly</span>
                            </a>
                        </div>

                        {/* PHYSICAL OFFICE LOCATION PIN */}
                        <div className="flex items-center gap-2.5 text-xs font-semibold text-slate-500 pt-2">
                            <MapPin size={16} className="text-[#FF7A00] shrink-0" />
                            <span>Umm Al Hamam St., Umm Al Hamam Al Sharqi Dist., Riyadh, Saudi Arabia</span>
                        </div>
                    </motion.div>

                    {/* RIGHT COLUMN */}
                    <motion.div
                        initial={{ opacity: 0, x: 30}}
                        whileInView={{ opacity: 1, x: 0}}
                        viewport={{ once: true}}
                        transition={{ duration: 0.6, dleay: 0.2}}
                        className="lg:col-span-6 space-y-6"
                    >
                        {/* 4 PILLARS GRID */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {pillars.map((item, idx) => (
                                <motion.div
                                    key={idx}
                                    whileHover={{ y: -6, scale: 1.02}}
                                    transition={{ type: "spring", stiffness: 300 }}
                                    className="bg-white p-6 rounded-3xl border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 text-left space-y-3"
                                >
                                    <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center">
                                        {item.icon}
                                    </div>
                                    <h3 className="font-extrabold text-[#002B5B] text-base">
                                        {item.title}
                                    </h3>
                                    <p className="text-xs text-slate-500 leading-relaxed font-light">
                                        {item.desc}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                        
                        {/* BIG PROMISE BANNER */}
                        <div className="bg-linear-to-r from-[#002B5B] to-[#004080] p-6 rounded-3xl text-white flex flex-col sm:flex-row items-center justify-between gap-4 text-left shadow-xl shadow-[#002B5B]/15">
                            <div className="space-y-1">
                                <p className="text-xs font-bold uppercase tracking-wider text-amber-300 flex items-center gap-1.5">
                                    <Sparkles size={14} /> 
                                    Our Core Promises
                                </p>
                                <h4 className="text-lg font-black leading-snug">
                                    Zero Hidden Fees. 100% Genuine Consultation.
                                </h4>
                            </div>

                              <a
                                href="https://wa.me/966552993899?text=Hello%20Rozana%20Tours!%20I%20would%20like%20to%20know%20more%20about%20your%20services."
                                target="_blank"
                                rel="noreferrer"
                                className="shrink-0 bg-[#FF7A00] hover:bg-orange-600 text-white px-5 py-3 rounded-2xl font-bold text-xs transition-transform hover:scale-105 shadow-md"
                            >
                                Chat with Us
                            </a>
                        </div>

                    </motion.div>

                </div>

            </div>
        </section>
    );
}