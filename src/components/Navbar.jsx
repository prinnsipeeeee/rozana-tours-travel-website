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
  FileCheck
} from 'lucide-react';
import logoImg from '../assets/logo.jpeg'; 

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
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 font-sans">
      {/* 1. TOP ANNOUNCEMENT & CONTACT BAR */}
      <div className="bg-[#002B5B] text-white text-xs py-2 px-4 md:px-8 border-b border-blue-900/50">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">

          {/* LEFT SIDE INFO */}
          <div className="flex items-center gap-6">
            <a 
              href="tel:+966500000000" 
              className="flex items-center gap-2 hover:text-[#FF7A00] transition-colors"
            >
              <Phone size={12} className="text-[#FF7A00]" />
              <span>+966 50 000 0000</span>
            </a>
            <a 
              href="mailto:info@rozanatours.com" 
              className="hidden sm:flex items-center gap-2 hover:text-[#FF7A00] transition-colors"
            >
              <Mail size={14} className="text-[#FF7A00]" />
              <span>info@rozanatours.com</span>
            </a>
            <div className="hidden lg:flex items-center gap-2 text-slate-300">
              <MapPin size={14} className="text-[#FF7A00]" />
              <span>Riyadh, Kingdom of Saudi Arabia</span>
            </div>
          </div>

          {/* RIGHT SIDE INFO */}
          <div className="flex items-center gap-4 ml-auto sm:ml-0">
            <div className="flex items-center gap-1 bg-blue-900/40 px-2 py-1 rounded text-slate-200">
              <Sparkles size={12} className="text-amber-400" />
              <span className="font-medium text-[11px]">24/7 VIP Assistance</span>
            </div>

            {/* SLEEK CUSTOM LANGUAGE TOGGLE BUTTON */}
            <button 
              onClick={toggleLanguage}
              className="flex items-center gap-1.5 hover:text-[#FF7A00] transition-colors bg-blue-900/60 hover:bg-blue-900/90 px-3 py-1 rounded font-semibold text-[11px] border border-blue-700/50 shadow-sm"
            >
              <Globe size={13} className="text-[#FF7A00]" />
              <span>{currentLang === 'EN' ? 'العربية (AR)' : 'English (EN)'}</span>
            </button>
          </div>

        </div>
      </div>

      {/* 2. MAIN NAVIGATION BAR */}
      <nav
        className={`w-full transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-lg py-2' 
            : 'bg-white py-3'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">

          {/* LOGO */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative overflow-hidden rounded-xl p-1 transition-transform duration-300 group-hover:scale-105">
              <img 
                src={logoImg}
                alt="Rozana Tours & Travels Logo"
                className="h-12 md:h-14 w-auto object-contain"
              />
            </div>
          </a>

          {/* DESKTOP LINKS */}
          <div className="hidden lg:flex items-center gap-8 font-medium text-slate-700 text-sm">
            <a 
              href="#home" 
              className="hover:text-[#003B7A] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#FF7A00] hover:after:w-full after:transition-all font-semibold text-[#003B7A]"
            >
              Home
            </a>

            <a 
              href="#visa" 
              className="hover:text-[#003B7A] transition-colors relative py-1 flex items-center gap-1.5 group"
            >
              <FileCheck size={16} className="text-[#FF7A00]" />
              <span>Visa Services</span>
              <span className="bg-amber-100 text-amber-800 text-[10px] font-bold px-1.5 py-0.5 rounded-full uppercase tracking-wider">
                Fast Track
              </span>
            </a>

            <a 
              href="#packages" 
              className="hover:text-[#003B7A] transition-colors relative py-1 flex items-center gap-1.5"
            >
              <Plane size={16} className="text-[#0084D6]" />
              <span>Tour Packages</span>
            </a>

            <a 
              href="#flights" 
              className="hover:text-[#003B7A] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#FF7A00] hover:after:w-full after:transition-all"
            >
              Flights & Hotels
            </a>

            <a 
              href="#about" 
              className="hover:text-[#003B7A] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#FF7A00] hover:after:w-full after:transition-all"
            >
              About Us
            </a>

            <a 
              href="#contact" 
              className="hover:text-[#003B7A] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#FF7A00] hover:after:w-full after:transition-all"
            >
              Contact
            </a>
          </div>

          {/* DESKTOP ACTION BUTTONS */}
          <div className="hidden lg:flex items-center gap-3">
            <a 
              href="https://wa.me/966500000000" 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2.5 rounded-full font-medium text-xs shadow-md shadow-emerald-500/20 transition-all hover:scale-105 active:scale-95"
            >
              <MessageSquare size={16} />
              <span>WhatsApp Us</span>
            </a>

            <a 
              href="#book" 
              className="relative group overflow-hidden rounded-full p-0.5 font-semibold text-xs transition-all shadow-md hover:shadow-xl active:scale-95"
            >
              <span className="absolute inset-0 bg-linear-to-r from-[#003B7A] via-[#0084D6] to-[#FF7A00] rounded-full transition-all group-hover:opacity-90"></span>
              <span className="relative block bg-[#003B7A] text-white px-5 py-2.5 rounded-full transition-colors group-hover:bg-transparent">
                Plan My Trip
              </span>
            </a>
          </div>

          {/* MOBILE MENU TOGGLE BUTTON */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors"
          >
            {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>

        </div>

        {/* MOBILE DROPDOWN MENU */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-slate-100 px-6 py-6 space-y-4 shadow-2xl">
            <div className="flex flex-col space-y-3 font-medium text-slate-700">
              <a href="#home" onClick={() => setMobileMenuOpen(false)} className="text-[#003B7A] font-bold py-2 border-b border-slate-100">
                Home
              </a>
              <a href="#visa" onClick={() => setMobileMenuOpen(false)} className="py-2 border-b border-slate-100 flex items-center justify-between">
                <span>Visa Services</span>
                <span className="bg-amber-100 text-amber-800 text-[10px] font-bold px-2 py-0.5 rounded-full">Fast Track</span>
              </a>
              <a href="#packages" onClick={() => setMobileMenuOpen(false)} className="py-2 border-b border-slate-100">
                Tour Packages
              </a>
              <a href="#flights" onClick={() => setMobileMenuOpen(false)} className="py-2 border-b border-slate-100">
                Flights & Hotels
              </a>
              <a href="#about" onClick={() => setMobileMenuOpen(false)} className="py-2 border-b border-slate-100">
                About Us
              </a>
              <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="py-2 border-b border-slate-100">
                Contact
              </a>
            </div>

            <div className="pt-2 flex flex-col gap-3">
              <a href="https://wa.me/966500000000" target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 bg-emerald-500 text-white py-3 rounded-xl font-semibold text-sm shadow-md">
                <MessageSquare size={18} />
                <span>WhatsApp Us</span>
              </a>
              <a href="#book" onClick={() => setMobileMenuOpen(false)} className="flex items-center justify-center bg-linear-to-r from-[#003B7A] to-[#0084D6] text-white py-3 rounded-xl font-semibold text-sm shadow-md">
                Plan My Trip
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}