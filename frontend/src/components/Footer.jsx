import React from 'react';
import { 
  ShieldCheck, 
  ChevronRight,
  Phone, 
  Mail, 
  Lock
} from 'lucide-react';
import logoImg from '../assets/logo-1.png';
import { useLanguage } from '../context/LanguageContext';

const socialLinks = [
  {
    name: "Facebook",
    url: "https://www.facebook.com/profile.php?id=61594517969345",
    icon: (
      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
      </svg>
    ),
    color: "hover:bg-[#1877F2]"
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/officialrozanatravels/",
    icon: (
      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
      </svg>
    ),
    color: "hover:bg-gradient-to-tr hover:from-[#f09433] hover:via-[#dc2743] hover:to-[#bc1888]"
  },
  {
    name: "TikTok",
    url: "https://www.tiktok.com/@rozanatravels",
    icon: (
      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
        <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-1.01v8.83c-.02 2.1-.63 4.21-1.87 5.92-1.8 2.47-4.7 3.99-7.79 3.99-3.23.03-6.3-1.6-7.9-4.38-1.62-2.8-1.53-6.37.24-9.08 1.74-2.67 4.79-4.24 7.97-4.11v4.21c-1.57-.1-3.15.54-4.08 1.82-.93 1.28-1.02 3-.24 4.37.78 1.36 2.31 2.16 3.88 2.05 1.57-.1 2.94-1.12 3.42-2.58.23-.69.34-1.42.34-2.15V.02h.19z"/>
      </svg>
    ),
    color: "hover:bg-black"
  }
];

export default function Footer({ settings = {} }) {
  const { isRTL, t } = useLanguage();
  const whatsappNumber = settings.whatsapp_number || '966552993899';
  const phonePrimary = settings.phone_primary || '+966 55 299 3899';
  const phoneSecondary = settings.phone_secondary || '+966 53 188 0016';
  const email = settings.email || 'rozanaruh@gmail.com';
  const address = settings.address || (isRTL ? 'شارع أم الحمام، حي أم الحمام الشرقي، الرياض، المملكة العربية السعودية' : 'Umm Al Hamam St., Umm Al Hamam Al Sharqi Dist., Riyadh · Saudi Arabia');

  return (
    <footer className="bg-[#001730] text-slate-300 font-sans border-t border-blue-900/60 pt-20 pb-12 relative overflow-hidden">
      
      {/* BRAND GLOW */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#FF7A00]/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-360 mx-auto px-4 sm:px-6 md:px-10 relative z-10">
        
        {/* MAIN FOOTER GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 border-b border-white/10 text-start">
          
          {/* BRAND COLUMN (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            <div className="flex items-center gap-3.5">
              <img 
                src={logoImg} 
                alt="Rozana Logo" 
                className="h-16 w-16 md:h-20 md:w-20 object-contain drop-shadow-md"
              />
              <div className="flex flex-col text-start">
                <span className="text-white font-black text-xl md:text-2xl tracking-normal leading-tight font-sans">
                  روزانة للسياحة والسفر
                </span>
                <span className="text-slate-300 font-extrabold text-xs md:text-sm tracking-wider uppercase leading-tight mt-1">
                  ROZANA <span className="text-[#FF7A00]">TOURS & TRAVELS</span>
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed font-light max-w-sm">
              {t('footer.about_text')}
            </p>

            {/* SOCIAL MEDIA ICONS */}
            <div className="space-y-2.5">
              <span className="text-[11px] font-bold uppercase tracking-wider text-amber-300 block">
                {isRTL ? 'تابعنا على منصات التواصل' : 'Follow & Connect With Us'}
              </span>
              
              <div className="flex items-center gap-3">
                {socialLinks.map((social, idx) => (
                  <a
                    key={idx}
                    href={social.url}
                    target="_blank"
                    rel="noreferrer"
                    className={`w-10 h-10 rounded-2xl bg-white/10 text-slate-300 hover:text-white flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-sm ${social.color}`}
                    title={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-2 text-amber-300 text-xs font-semibold pt-1">
              <ShieldCheck size={16} className="text-[#FF7A00]" />
              <span>{t('footer.certified')}</span>
            </div>
          </div>

          {/* QUICK LINKS (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-white font-bold text-xs uppercase tracking-wider">{t('footer.quick_links')}</h4>
            <ul className="space-y-2.5 text-xs text-slate-400 font-medium">
              <li><a href="#home" className="hover:text-[#FF7A00] transition-colors flex items-center gap-1.5"><ChevronRight size={13} className={`text-[#FF7A00] ${isRTL ? 'rotate-180' : ''}`} /> {t('nav.home')}</a></li>
              <li><a href="#visa" className="hover:text-[#FF7A00] transition-colors flex items-center gap-1.5"><ChevronRight size={13} className={`text-[#FF7A00] ${isRTL ? 'rotate-180' : ''}`} /> {t('nav.visa')}</a></li>
              <li><a href="#flights" className="hover:text-[#FF7A00] transition-colors flex items-center gap-1.5"><ChevronRight size={13} className={`text-[#FF7A00] ${isRTL ? 'rotate-180' : ''}`} /> {t('nav.flights')}</a></li>
              <li><a href="#packages" className="hover:text-[#FF7A00] transition-colors flex items-center gap-1.5"><ChevronRight size={13} className={`text-[#FF7A00] ${isRTL ? 'rotate-180' : ''}`} /> {t('nav.packages')}</a></li>
              <li><a href="#about" className="hover:text-[#FF7A00] transition-colors flex items-center gap-1.5"><ChevronRight size={13} className={`text-[#FF7A00] ${isRTL ? 'rotate-180' : ''}`} /> {t('nav.about')}</a></li>
              <li><a href="#contact" className="hover:text-[#FF7A00] transition-colors flex items-center gap-1.5"><ChevronRight size={13} className={`text-[#FF7A00] ${isRTL ? 'rotate-180' : ''}`} /> {t('nav.contact')}</a></li>
            </ul>
          </div>

          {/* CORE SERVICES (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-white font-bold text-xs uppercase tracking-wider">{t('footer.our_services')}</h4>
            <ul className="space-y-2.5 text-xs text-slate-400 font-medium">
              <li><a href="#visa" className="hover:text-[#FF7A00] transition-colors">&bull; {isRTL ? 'استخراج التأشيرات العالمية' : 'Worldwide Visa Assistance'}</a></li>
              <li><a href="#embassy" className="hover:text-[#FF7A00] transition-colors">&bull; {isRTL ? 'تصديقات وزارة الخارجية والسفارات' : 'Embassy & MOFA Attestation'}</a></li>
              <li><a href="#translation" className="hover:text-[#FF7A00] transition-colors">&bull; {isRTL ? 'الترجمة المعتمدة لجميع اللغات' : 'Certified Document Translation'}</a></li>
              <li><a href="#license" className="hover:text-[#FF7A00] transition-colors">&bull; {isRTL ? 'رخصة القيادة الدولية (150+ دولة)' : 'International Driving License'}</a></li>
              <li><a href="#flights" className="hover:text-[#FF7A00] transition-colors">&bull; {isRTL ? 'حجوزات الطيران وتأكيد التذاكر' : 'Airline Ticketing & Upgrades'}</a></li>
              <li><a href="#packages" className="hover:text-[#FF7A00] transition-colors">&bull; {isRTL ? 'البكجات السياحية المتكاملة' : 'Luxury Vacation Packages'}</a></li>
            </ul>
          </div>

          {/* RIYADH OFFICE CONTACT (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-white font-bold text-xs uppercase tracking-wider">{t('footer.riyadh_office')}</h4>
            
            <p className="text-xs text-slate-400 leading-relaxed font-light">
              {address}
            </p>

            <div className="space-y-2 pt-1 text-xs">
              <a 
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank" 
                rel="noreferrer" 
                className="text-[#FF7A00] font-bold hover:underline flex items-center gap-1.5"
              >
                <Phone size={13} />
                <span dir="ltr">{phonePrimary}</span>
              </a>

              <a 
                href={`tel:${phoneSecondary.replace(/\s+/g, '')}`}
                className="text-slate-300 hover:text-white font-medium flex items-center gap-1.5"
              >
                <Phone size={13} />
                <span dir="ltr">{phoneSecondary}</span>
              </a>

              <p className="text-slate-400 flex items-center gap-1.5 font-light">
                <Mail size={13} />
                <span>{email}</span>
              </p>
            </div>

            <div className="pt-2">
              <a 
                href="/admin" 
                className="inline-flex items-center gap-1.5 text-[11px] text-slate-500 hover:text-amber-400 font-semibold transition-colors"
              >
                <Lock size={12} />
                <span>{t('nav.admin_login')}</span>
              </a>
            </div>
          </div>

        </div>

        {/* BOTTOM COPYRIGHT */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>&copy; {new Date().getFullYear()} Rozana Tours & Travels (روزانة للسياحة والسفر). {t('footer.rights')}.</p>
          <div className="flex items-center gap-2 text-slate-400">
            <span>Riyadh &bull; Kingdom of Saudi Arabia</span>
          </div>
        </div>

      </div>
    </footer>
  );
}