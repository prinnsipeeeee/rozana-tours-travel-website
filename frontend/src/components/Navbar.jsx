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
  Languages,
  Building2,
  CreditCard,
  ChevronDown,
  Lock
} from 'lucide-react';
import logoImg from '../assets/logo-1.png'; 
import { useLanguage } from '../context/LanguageContext'; // <-- Import dito

export default function Navbar() {
  const { lang, toggleLanguage, t, isRTL } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 font-sans transition-all duration-300">
      
      {/* 1. TOP ANNOUNCEMENT & CONTACT BAR */}
      <div className="bg-[#002B5B] text-white text-xs py-2 px-4 md:px-10 border-b border-blue-900/50">
        <div className="max-w-306 mx-auto flex justify-between items-center gap-4">

          {/* LEFT SIDE CONTACT INFO */}
          <div className="flex items-center gap-5 whitespace-nowrap overflow-hidden">
            <a 
              href="tel:+966552993899" 
              className="flex items-center gap-1.5 text-slate-200 hover:text-[#FF7A00] transition-all font-medium"
            >
              <Phone size={12} className="text-[#FF7A00]" />
              <span dir="ltr">+966 55 299 3899</span>
            </a>
            <a 
              href="mailto:rozanaruh@gmail.com" 
              className="hidden sm:flex items-center gap-1.5 text-slate-200 hover:text-[#FF7A00] transition-all font-medium"
            >
              <Mail size={13} className="text-[#FF7A00]" />
              <span>rozanaruh@gmail.com</span>
            </a>
            <div className="hidden xl:flex items-center gap-1.5 text-slate-300 truncate font-light">
              <MapPin size={13} className="text-[#FF7A00] shrink-0" />
              <span className="truncate">{t('footer.address')}</span>
            </div>
          </div>

          {/* RIGHT SIDE CONTROLS */}
          <div className="flex items-center gap-3 shrink-0">
            {/* ADMIN LOGIN */}
            <a 
              href="https://rozanatravels.com/admin/login" 
              className="flex items-center gap-1 bg-blue-900/50 hover:bg-[#FF7A00] text-slate-200 hover:text-white px-2.5 py-1 rounded-full text-[11px] font-semibold border border-blue-700/40 transition-all hover:scale-105"
            >
              <Lock size={11} className="text-amber-400" />
              <span>{t('nav.admin_login')}</span>
            </a>

            <div className="hidden md:flex items-center gap-1.5 bg-blue-900/40 px-2.5 py-1 rounded-full text-slate-200 border border-blue-800/40">
              <Sparkles size={12} className="text-amber-400" />
              <span className="font-medium text-[11px]">{t('nav.vip_assistance')}</span>
            </div>

            {/* LANGUAGE TOGGLE BUTTON */}
            <button 
              onClick={toggleLanguage}
              className="flex items-center gap-1.5 text-white hover:text-[#FF7A00] bg-blue-900/60 hover:bg-blue-950 px-3 py-1 rounded-full font-semibold text-[11px] border border-blue-700/50 shadow-sm transition-all hover:scale-105"
            >
              <Globe size={13} className="text-[#FF7A00]" />
              <span>{lang === 'ar' ? 'English (EN)' : 'العربية (AR)'}</span>
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

          {/* LOGO */}
          <a href="#home" className="flex items-center gap-2.5 shrink-0 group">
            <img 
              src={logoImg}
              alt="Rozana Logo"
              className="h-10 w-10 sm:h-12 sm:w-12 object-contain transition-transform duration-500 group-hover:rotate-3"
            />
            <div className="flex flex-col text-start justify-center whitespace-nowrap">
              <span className="text-[#002B5B] font-black text-sm sm:text-base md:text-lg tracking-tight leading-none font-sans group-hover:text-[#FF7A00] transition-colors">
                روزانة للسياحة والسفر
              </span>
              <span className="text-[#002B5B] font-extrabold text-[10px] sm:text-[11px] tracking-wider uppercase leading-tight mt-0.5">
                ROZANA <span className="text-[#FF7A00]">TOURS & TRAVELS</span>
              </span>
            </div>
          </a>

          {/* DESKTOP NAVIGATION LINKS */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-2 font-semibold text-slate-700 text-xs xl:text-sm whitespace-nowrap">
            
            <a 
              href="#home" 
              className="px-3 py-1.5 rounded-full text-[#002B5B] font-bold hover:bg-slate-100 hover:text-[#FF7A00] transition-all hover:-translate-y-0.5"
            >
              {t('nav.home')}
            </a>

            {/* SERVICES DROPDOWN */}
            <div 
              className="relative"
              onMouseEnter={() => setServicesDropdownOpen(true)}
              onMouseLeave={() => setServicesDropdownOpen(false)}
            >
              <button 
                className="px-3 py-1.5 rounded-full hover:bg-slate-100 hover:text-[#002B5B] transition-all hover:-translate-y-0.5 flex items-center gap-1.5"
              >
                <span>{t('nav.services')}</span>
                <ChevronDown size={14} className={`transition-transform duration-300 ${servicesDropdownOpen ? 'rotate-180 text-[#FF7A00]' : 'text-slate-400'}`} />
              </button>

              {servicesDropdownOpen && (
                <div className={`absolute top-full ${isRTL ? 'right-0' : 'left-0'} w-64 bg-white rounded-2xl shadow-2xl border border-slate-100 py-3 px-2 z-50 text-start`}>
                  <a href="#visa" className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-slate-50 transition-colors group">
                    <div className="w-8 h-8 rounded-lg bg-blue-50 text-[#003B7A] flex items-center justify-center shrink-0">
                      <FileCheck size={16} />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-[#002B5B] group-hover:text-[#FF7A00]">{t('nav.visa')}</p>
                      <p className="text-[10px] text-slate-400">{isRTL ? 'شنغن، بريطانيا، وأمريكا' : 'Schengen, UK, USA'}</p>
                    </div>
                  </a>

                  <a href="#embassy" className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-slate-50 transition-colors group">
                    <div className="w-8 h-8 rounded-lg bg-amber-50 text-[#FF7A00] flex items-center justify-center shrink-0">
                      <Building2 size={16} />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-[#002B5B] group-hover:text-[#FF7A00]">{t('nav.embassy')}</p>
                      <p className="text-[10px] text-slate-400">{isRTL ? 'تصديقات وزارة الخارجية والسفارات' : 'MOFA & Embassy Attestation'}</p>
                    </div>
                  </a>

                  <a href="#translation" className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-slate-50 transition-colors group">
                    <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                      <Languages size={16} />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-[#002B5B] group-hover:text-[#FF7A00]">{t('nav.translation')}</p>
                      <p className="text-[10px] text-slate-400">{isRTL ? 'ترجمة معتمدة لجميع اللغات' : 'Official Sworn Translation'}</p>
                    </div>
                  </a>

                  <a href="#license" className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-slate-50 transition-colors group">
                    <div className="w-8 h-8 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center shrink-0">
                      <CreditCard size={16} />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-[#002B5B] group-hover:text-[#FF7A00]">{t('nav.license')}</p>
                      <p className="text-[10px] text-slate-400">{isRTL ? 'معتمدة في أكثر من 150 دولة' : 'Accepted in 150+ countries'}</p>
                    </div>
                  </a>
                </div>
              )}
            </div>

            <a 
              href="#flights" 
              className="px-3 py-1.5 rounded-full hover:bg-slate-100 hover:text-[#002B5B] transition-all hover:-translate-y-0.5 flex items-center gap-1.5"
            >
              <Plane size={15} className="text-[#0084D6]" />
              <span>{t('nav.flights')}</span>
            </a>

            <a 
              href="#packages" 
              className="px-3 py-1.5 rounded-full hover:bg-slate-100 hover:text-[#002B5B] transition-all hover:-translate-y-0.5"
            >
              {t('nav.packages')}
            </a>

            <a 
              href="#about" 
              className="px-3 py-1.5 rounded-full hover:bg-slate-100 hover:text-[#002B5B] transition-all hover:-translate-y-0.5"
            >
              {t('nav.about')}
            </a>

            <a 
              href="#contact" 
              className="px-3 py-1.5 rounded-full hover:bg-slate-100 hover:text-[#002B5B] transition-all hover:-translate-y-0.5"
            >
              {t('nav.contact')}
            </a>
          </div>

          {/* ACTION BUTTONS */}
          <div className="hidden lg:flex items-center gap-2.5 shrink-0">
            <a 
              href="https://wa.me/966552993899" 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center gap-1.5 bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 rounded-full font-bold text-xs shadow-md shadow-emerald-500/20 transition-all hover:scale-105 active:scale-95"
            >
              <MessageSquare size={14} />
              <span>{t('nav.whatsapp_us')}</span>
            </a>

            <a 
              href="#contact" 
              className="relative group overflow-hidden rounded-full p-0.5 font-bold text-xs shadow-md transition-all hover:scale-105 active:scale-95"
            >
              <span className="absolute inset-0 bg-linear-to-r from-[#003B7A] via-[#0084D6] to-[#FF7A00] rounded-full transition-all group-hover:opacity-90"></span>
              <span className="relative block bg-[#003B7A] text-white px-4 py-2 rounded-full transition-colors group-hover:bg-transparent">
                {t('nav.plan_trip')}
              </span>
            </a>
          </div>

          {/* MOBILE TOGGLE */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl text-slate-700 hover:bg-slate-100"
          >
            {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>

        </div>
      </nav>
    </header>
  );
}