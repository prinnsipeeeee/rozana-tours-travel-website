import React, { useState } from "react";
import { ShieldCheck, MapPin, Phone, Mail, Clock, Send, MessageSquare, Sparkles, CheckCircle2, Building, QrCode } from "lucide-react";
import { motion } from "framer-motion";

export default function Contact() {
    const [ formData, setFormData ] = useState({
        name: ' ',
        phone: ' ',
        service: 'Visa Assistance',
        message: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        const text = `*New Website Inquiry - Rozana Tours*\n\n` +
      `👤 *Name:* ${formData.name}\n` +
      `📱 *Phone:* ${formData.phone}\n` +
      `🎯 *Service Interested:* ${formData.service}\n` +
      `💬 *Message:* ${formData.message || 'I would like more details regarding your services.'}`
    
    const encoded = encodeURIComponent(text);
    window.open(`https://wa.me/966552993899?text=${encoded}`, '_blank')
    };

    return (
        <section id="contact" className="py-24 bg-white relative font-sans overflow-hidden">

            {/* 1. SUBTLE MODERN GRID TEXTURE BACKGROUND  */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#002B5B08_1px,transparent_1px),linear-gradient(to_bottom,#002B5B08_1px,transparent_1px)] bg-size-[28px_28px] pointer-events-none"></div>
            <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#FF7A00]/5 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#0084D6]/5 rounded-full blur-3xl pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">

                {/* 2. SECTION HEADER */}
                <motion.div
                    initial={{ opacity: 0, y: 30}}
                    whileInView={{ opacity: 1, y: 0}}
                    viewport={{ once: true}}
                    transition={{ duration: 0.6}}
                    className="text-center max-w-3xl mx-auto space-y-4 mb-16"
                >
                    <div className="inline-flex items-center gap-2 bg-[#003B7A]/10 text-[#003B7A] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
                        <Sparkles size={15} className="text-[#FF7A00]" />
                        <span>Connect With Our Travel Consultants</span>
                    </div>

                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#002B5B] tracking-tight">
                        Let's Plan Your <span className="tetx-[#FF7A00]">Next Journey</span>
                    </h2>

                    <p className="text-slate-600 text-base md:text-lg leading-relaxed font-light">
                        Visit our office in Riyadh or send us an instant inquiry. Our certified travel specialists are available 24/7 to assist with your visas, packages, and bookings.
                    </p>
                </motion.div>

                {/* 3. MAIN CONTACT  */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">

                    {/* LEFT COLUMN */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opcaity: 1, x: 0}}
                        viewport={{ once: true}}
                        transition={{ duration: 0.6 }}
                        className="lg:col-span-5 space-y-6 text-left"
                    >
                        <div className="bg-slate-50/80 backdrop-blur-sm p-6 rounded-3xl border border-slate-200/90 shadow-sm spacey-y-3 hover:border-[#0084D6]/40 transition-colors">
                            <div className="w-12 h-12 rounded-2xl bg-[#002B5B] text-white flex items-center justify-center shadow-md">
                                <MapPin size={22} className="text-[#FF7A00]" />
                            </div>

                            <h3 className="text-lg font-bold text-[#002B5B]">Riyadh Main Office</h3>

                            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                                Umm Al Hamam St., Umm Al Hamam Al Sharqi Dist.,<br />
                                Riyadh &bull; Kingdom of Saudi Arabia
                            </p>
                                                        
                        </div>

                            {/* PHONE & WHATSAPP NUMBERS */}
                            <div className="bg-slate-50/80 backdrop-blur-sm p-6 rounded-3xl border boder-slate-200/90 shadow-sm space-y-4">
                                <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400">Direct Consultation Channels</h3>

                                <div className="space-y-3">
                                    <a 
                                        href="https://wa.me/966552993899"
                                        target="blank"
                                        rel="horeferrer"
                                        className="flex items-center justify-between p-3.5 rounded-2xl bg-white border border-slate-200 hover:border-[#FF7A00] transition-all group"
                                    >
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-600 flex items-center jusitfy-center font-bold">
                                                <MessageSquare size={18} />
                                            </div>
                                            <div>
                                                <p className="text-xs text-slate-400 font-medium">Senior Consultant (Ashraf)</p>
                                                <p className="text-sm font-bold text-slate-800 group-hover:tetx-[#FF7A00]">+966 55 299 3899</p>
                                            </div>
                                        </div>
                                        <span className="text-[11px] font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full">WhatsApp</span>
                                    </a>

                                    <a 
                                    href="tel:+966531880016"
                                    className="flex items-center justify-between p-3.5 rounded-2xl bg-white border border-slate-200 hovder:border-[#0084D6] transition-all group"
                                    >
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-xl bg-[#0084D6]/10 text-[#0084D6] flex items-center justify-center font-bold">
                                                <Phone size={18} />
                                            </div>

                                            <div>
                                                <p className="text-xs text-slate-400 font-medium">Office Support Line</p>
                                                <p className="text-sm font-bold text-slate-800 group-hover:text-[#0084D6]">+966 53 188 0016</p>
                                            </div>
                                        </div>
                                        <span className="text-[11px] font-bold text-[#0084D6] bg-blue-50 px-2.5 py-1 rounded-full">Call</span>
                                    </a>

                                    <a 
                                    href="mailto:rozanaruh@gmail.com"
                                    className="flex items-center gap-3 p-3.5 rounded-2xl bg-white border border-slate-200 hovder:border-slate-400 transition-all group"
                                    >
                                        <div className="w-10> h-10 rounded-xl bg-slate-100 text-slate-600 flex items-center justify-center font-bold">
                                            <Mail size={18} />
                                        </div>
                                        <div>
                                            <p className="text-xs text-slate-400 font-medium">Official Inquiry Email</p>
                                            <p className="text-sm font-bold text-slate-800">rozanaruh@gmai.com</p>
                                        </div>
                                    </a>
                                </div>
                            </div>

                            {/* WORKING HOURS */}
                            <div className="bg-[#002B5B] text-white p-6 rounded-3xl shadow-xl flex items-center hap-4">
                                <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center shrink-0">
                                    <Clock size={24} className="text-[#FF7A00]" />
                                </div>
                                <div className="text-left space-y-1">
                                    <h4 className="text-sm font-bold text-amber-300">Office Working Hours</h4>
                                    <p className="text-xs text-slate-300">Saturday - Thursday: 9:00 AM - 10:00 PM</p>
                                    <p className="text-xs text-slate-300">Friday: 4:00 PM - 10:00 PM</p>
                                </div>
                            </div>

                    </motion.div>
                </div>
            </div>

        </section>
    )
}