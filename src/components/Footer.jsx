import React from "react";
import { Plane, MapPin, Phone, Mail, ShieldCheck, Heart, ChevronRight, Globe2 } from "lucide-react";
import logoImg from '../assets/logo.jpeg';

export default function Footer() {
    return (
        <footer className="bg-[#001E3D] text-slate-300 font-sans border-t border-blue-900/60 pt-16 pb-10">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                
                {/* FOOTER MAIN GRID */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10 text-left">
                
                {/* BRAND COLUMN (4 cols) */}
                <div className="lg:col-span-4 space-y-4">
                    <img 
                    src={logoImg} 
                    alt="Rozana Tours & Travels Logo" 
                    className="h-12 w-auto object-contain bg-white/90 p-1.5 rounded-xl shadow-sm"
                    />
                    <p className="text-xs text-slate-400 leading-relaxed font-light">
                    Making your travel experience exceptional every time. Accredited travel and visa consultancy based in Riyadh, Saudi Arabia.
                    </p>
                    <div className="flex items-center gap-2 text-amber-300 text-xs font-semibold">
                    <ShieldCheck size={16} className="text-[#FF7A00]" />
                    <span>Certified Saudi Tourism Operator</span>
                    </div>
                </div>
                {/* QUICK LINKS (2 cols) */}
                <div className="lg:col-span-2 space-y-3">
                    <h4 className="text-white font-bold text-xs uppercase tracking-wider">Quick Links</h4>
                    <ul className="space-y-2 text-xs text-slate-400">
                    <li><a href="#home" className="hover:text-[#FF7A00] transition-colors">Home</a></li>
                    <li><a href="#visa" className="hover:text-[#FF7A00] transition-colors">Visa Services</a></li>
                    <li><a href="#packages" className="hover:text-[#FF7A00] transition-colors">Tour Packages</a></li>
                    <li><a href="#umrah" className="hover:text-[#FF7A00] transition-colors">VIP Umrah</a></li>
                    <li><a href="#about" className="hover:text-[#FF7A00] transition-colors">About Rozana</a></li>
                    </ul>
                </div>
                {/* SERVICES (3 cols) */}
                <div className="lg:col-span-3 space-y-3">
                    <h4 className="text-white font-bold text-xs uppercase tracking-wider">Our Services</h4>
                    <ul className="space-y-2 text-xs text-slate-400">
                    <li>&bull; Global Visa Consultation (Schengen, UK, USA)</li>
                    <li>&bull; Certified Document Translation</li>
                    <li>&bull; International Travel Insurance</li>
                    <li>&bull; Embassy Attestation & Services</li>
                    <li>&bull; 5-Star Makkah & Madinah Hotels</li>
                    </ul>
                </div>
                {/* CONTACT INFO (3 cols) */}
                <div className="lg:col-span-3 space-y-3">
                    <h4 className="text-white font-bold text-xs uppercase tracking-wider">Riyadh Office</h4>
                    <p className="text-xs text-slate-400 leading-relaxed">
                    Umm Al Hamam St., Umm Al Hamam Al Sharqi Dist., Riyadh, Saudi Arabia
                    </p>
                    <p className="text-xs text-[#FF7A00] font-bold">Tel: +966 55 299 3899</p>
                    <p className="text-xs text-slate-400">Email: rozanaruh@gmail.com</p>
                </div>
                </div>
                {/* BOTTOM COPYRIGHT */}
                <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
                <p>&copy; {new Date().getFullYear()} Yaramay IT Services. All Rights Reserved.</p>
                <div className="flex items-center gap-1 text-slate-400">
                    <span>Riyadh &bull; Kingdom of Saudi Arabia</span>
                </div>
                </div>
            </div>
        </footer>
    );
}