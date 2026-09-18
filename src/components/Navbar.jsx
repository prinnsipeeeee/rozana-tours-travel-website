import React, { useState, useEffect } from "react";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Globe, 
  Menu, 
  X, 
  MessageSquare, 
  Sparkles, 
  Plane, 
  FileCheck,
  Languages
} from 'lucide-react';
import logoImg from '../assets/logo-1.png'; 

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState('EN');

  const toggleLanguage = () => {
    const nextLang = currentLang === 'EN' ? 'AR' : 'EN';
    setCurrentLang(nextLang);
    
    const selectElem = document.querySelector('.goog-te-combo');
    if (selectElem) {
      selectElem.value = nextLang === 'AR' ? 'ar' : 'en';
      selectElem.dispatchEvent(new Event('change'));
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 font-sans transition-all duration-300">
      {/* 1. TOP ANNOUNCEMENT & CONTACT BAR */}
      <div className="bg-[#002B5B] text-white text-xs py-2 px-4 md:px-10 border-b border-blue-900/50">
        <div className="max-w-360 mx-auto flex justify-between items-center gap-4">

          {/* LEFT SIDE INFO */}
          <div className="flex items-center gap-5 whitespace-nowrap overflow-hidden">
            <a 
              href="tel:+966552993899" 
              className="flex items-center gap-1.5 text-slate-200 hover:text-[#FF7A00] transition-all duration-300 ease-out hover:-translate-y-0.5 font-medium"
            >
              <Phone size={12} className="text-[#FF7A00]" />
              <span>+966 55 299 3899</span>
            </a>
            <a 
              href="mailto:rozanaruh@gmail.com" 
              className="hidden sm:flex items-center gap-1.5 text-slate-200 hover:text-[#FF7A00] transition-all duration-300 ease-out hover:-translate-y-0.5 font-medium"
            >
              <Mail size={13} className="text-[#FF7A00]" />
              <span>info@rozanatravels.com</span>
            </a>
            <div className="hidden xl:flex items-center gap-1.5 text-slate-300 truncate font-light">
              <MapPin size={13} className="text-[#FF7A00] shrink-0" />
              <span className="truncate">Umm Al Hamam St., Riyadh, Saudi Arabia</span>
            </div>
          </div>

          {/* RIGHT SIDE INFO */}
          <div className="flex items-center gap-3 shrink-0">
            <div className="hidden md:flex items-center gap-1.5 bg-blue-900/40 px-2.5 py-1 rounded-full text-slate-200 border border-blue-800/40">
              <Sparkles size={12} className="text-amber-400 animate-pulse" />
              <span className="font-medium text-[11px]">24/7 VIP Assistance</span>
            </div>

            {/* SLEEK CUSTOM LANGUAGE TOGGLE BUTTON */}
            <button 
              onClick={toggleLanguage}
              className="flex items-center gap-1.5 text-white hover:text-[#FF7A00] bg-blue-900/60 hover:bg-blue-950 px-3 py-1 rounded-full font-semibold text-[11px] border border-blue-700/50 shadow-sm transition-all duration-300 ease-out hover:scale-105 active:scale-95"
            >
              <Globe size={13} className="text-[#FF7A00]" />
              <span>{currentLang === 'EN' ? 'العربية (AR)' : 'English (EN)'}</span>
            </button>
          </div>

        </div>
      </div>

      {/* 2. MAIN NAVIGATION BAR */}
      <nav
        className={`w-full transition-all duration-500 ease-out ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-lg py-2.5' 
            : 'bg-white py-3.5'
        }`}
      >
        <div className="max-w-360 mx-auto px-4 md:px-10 flex items-center justify-between gap-4">

          {/* LOGO WITH SPRING HOVER */}
          <a href="#home" className="flex items-center gap-2.5 shrink-0 group transition-transform duration-300 ease-out hover:scale-[1.02]">
            <div className="relative shrink-0">
              <img 
                src={logoImg}
                alt="Rozana Logo"
                className="h-10 w-10 sm:h-12 sm:w-12 object-contain transition-transform duration-500 ease-out group-hover:rotate-3"
              />
            </div>

            <div className="flex flex-col text-left justify-center whitespace-nowrap">
              <span className="text-[#002B5B] font-black text-sm sm:text-base md:text-lg tracking-tight leading-none font-sans group-hover:text-[#FF7A00] transition-colors duration-300">
                روزانة للسياحة والسفر
              </span>
              <span className="text-[#002B5B] font-extrabold text-[10px] sm:text-[11px] tracking-wider uppercase leading-tight mt-0.5">
                ROZANA <span className="text-[#FF7A00]">TOURS & TRAVELS</span>
              </span>
            </div>
          </a>

          {/* DESKTOP LINKS WITH NON-LINEAR PILL HOVER EFFECTS */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-2 font-semibold text-slate-700 text-xs xl:text-sm whitespace-nowrap">
            
            {/* Home */}
            <a 
              href="#home" 
              className="px-3 py-1.5 rounded-full text-[#002B5B] font-bold hover:bg-slate-100 hover:text-[#FF7A00] transition-all duration-300 ease-out hover:-translate-y-0.5"
            >
              Home
            </a>

            {/* Visa Services */}
            <a 
              href="#visa" 
              className="px-3 py-1.5 rounded-full hover:bg-slate-100 hover:text-[#002B5B] transition-all duration-300 ease-out hover:-translate-y-0.5 flex items-center gap-1.5 group"
            >
              <FileCheck size={15} className="text-[#FF7A00] transition-transform duration-300 group-hover:scale-110" />
              <span>Visa Services</span>
              <span className="bg-amber-100 text-amber-800 text-[9px] font-bold px-1.5 py-0.2 rounded-full uppercase tracking-wider">
                Fast
              </span>
            </a>

            {/* Translation Services (NEW) */}
            <a 
              href="#translation" 
              className="px-3 py-1.5 rounded-full hover:bg-slate-100 hover:text-[#002B5B] transition-all duration-300 ease-out hover:-translate-y-0.5 flex items-center gap-1.5 group"
            >
              <Languages size={15} className="text-emerald-500 transition-transform duration-300 group-hover:rotate-12" />
              <span>Translation</span>
            </a>

            {/* Tour Packages */}
            <a 
              href="#packages" 
              className="px-3 py-1.5 rounded-full hover:bg-slate-100 hover:text-[#002B5B] transition-all duration-300 ease-out hover:-translate-y-0.5 flex items-center gap-1.5 group"
            >
              <Plane size={15} className="text-[#0084D6] transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              <span>Tour Packages</span>
            </a>

            {/* VIP Umrah */}
            <a 
              href="#umrah" 
              className="px-3 py-1.5 rounded-full hover:bg-slate-100 hover:text-[#002B5B] transition-all duration-300 ease-out hover:-translate-y-0.5"
            >
              VIP Umrah
            </a>

            {/* About Us */}
            <a 
              href="#about" 
              className="px-3 py-1.5 rounded-full hover:bg-slate-100 hover:text-[#002B5B] transition-all duration-300 ease-out hover:-translate-y-0.5"
            >
              About Us
            </a>

            {/* Contact */}
            <a 
              href="#contact" 
              className="px-3 py-1.5 rounded-full hover:bg-slate-100 hover:text-[#002B5B] transition-all duration-300 ease-out hover:-translate-y-0.5"
            >
              Contact
            </a>
          </div>

          {/* DESKTOP ACTION BUTTONS WITH SPRING GLOW */}
          <div className="hidden lg:flex items-center gap-2.5 shrink-0">
            {/* WhatsApp Us Button */}
            <a 
              href="https://wa.me/966552993899" 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center gap-1.5 bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 rounded-full font-bold text-xs shadow-md shadow-emerald-500/20 transition-all duration-300 ease-out hover:scale-105 hover:shadow-lg hover:shadow-emerald-500/30 active:scale-95 whitespace-nowrap"
            >
              <MessageSquare size={14} />
              <span>WhatsApp Us</span>
            </a>

            {/* Plan My Trip Button */}
            <a 
              href="#contact" 
              className="relative group overflow-hidden rounded-full p-0.5 font-bold text-xs shadow-md shadow-blue-900/20 transition-all duration-300 ease-out hover:scale-105 hover:shadow-xl hover:shadow-[#003B7A]/30 active:scale-95 whitespace-nowrap"
            >
              <span className="absolute inset-0 bg-linear-t-to-r from-[#003B7A] via-[#0084D6] to-[#FF7A00] rounded-full transition-all duration-500 group-hover:opacity-90"></span>
              <span className="relative block bg-[#003B7A] text-white px-4 py-2 rounded-full transition-colors duration-300 group-hover:bg-transparent">
                Plan My Trip
              </span>
            </a>
          </div>

          {/* MOBILE MENU TOGGLE BUTTON */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl text-slate-700 hover:bg-slate-100 transition-all duration-200"
          >
            {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>

        </div>

        {/* MOBILE DROPDOWN MENU */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-slate-100 px-6 py-6 space-y-4 shadow-2xl animate-in slide-in-from-top-2 duration-300">
            <div className="flex flex-col space-y-2.5 font-medium text-slate-700 text-sm">
              <a href="#home" onClick={() => setMobileMenuOpen(false)} className="text-[#003B7A] font-bold py-2 border-b border-slate-100">
                Home
              </a>
              <a href="#visa" onClick={() => setMobileMenuOpen(false)} className="py-2 border-b border-slate-100 flex items-center justify-between">
                <span>Visa Services</span>
                <span className="bg-amber-100 text-amber-800 text-[10px] font-bold px-2 py-0.5 rounded-full">Fast</span>
              </a>
              <a href="#translation" onClick={() => setMobileMenuOpen(false)} className="py-2 border-b border-slate-100 flex items-center justify-between">
                <span>Certified Translation</span>
                <span className="bg-emerald-100 text-emerald-800 text-[10px] font-bold px-2 py-0.5 rounded-full">Official</span>
              </a>
              <a href="#packages" onClick={() => setMobileMenuOpen(false)} className="py-2 border-b border-slate-100">
                Tour Packages
              </a>
              <a href="#umrah" onClick={() => setMobileMenuOpen(false)} className="py-2 border-b border-slate-100">
                VIP Umrah
              </a>
              <a href="#about" onClick={() => setMobileMenuOpen(false)} className="py-2 border-b border-slate-100">
                About Us
              </a>
              <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="py-2 border-b border-slate-100">
                Contact
              </a>
            </div>

            <div className="pt-2 flex flex-col gap-3">
              <a href="https://wa.me/966552993899" target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 bg-emerald-500 text-white py-3 rounded-xl font-semibold text-sm shadow-md">
                <MessageSquare size={18} />
                <span>WhatsApp Us</span>
              </a>
              <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="flex items-center justify-center bg-linear-to-r from-[#003B7A] to-[#0084D6] text-white py-3 rounded-xl font-semibold text-sm shadow-md">
                Plan My Trip
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}