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
  LayoutGrid,
} from "lucide-react";

import logoImg from "../assets/logo-1.png";
import { useLanguage } from "../context/LanguageContext";

const defaultServices = [
  {
    slug: "visa",
    title_en: "Visa Services",
    title_ar: "خدمات التأشيرات",
    subtitle_en: "Schengen, UK, USA",
    subtitle_ar: "شنغن، بريطانيا، وأمريكا",
    href: "#visa",
    icon: "visa",
  },
  {
    slug: "embassy",
    title_en: "Embassy Services",
    title_ar: "خدمات السفارات",
    subtitle_en: "MOFA & Embassy Attestation",
    subtitle_ar: "تصديقات وزارة الخارجية والسفارات",
    href: "#embassy",
    icon: "embassy",
  },
  {
    slug: "translation",
    title_en: "Certified Translation",
    title_ar: "الترجمة المعتمدة",
    subtitle_en: "Official Sworn Translation",
    subtitle_ar: "ترجمة معتمدة لجميع اللغات",
    href: "#translation",
    icon: "translation",
  },
  {
    slug: "license",
    title_en: "International License",
    title_ar: "رخصة القيادة الدولية",
    subtitle_en: "Accepted in 150+ countries",
    subtitle_ar: "معتمدة في أكثر من 150 دولة",
    href: "#license",
    icon: "license",
  },
];

const serviceIcons = {
  visa: {
    component: FileCheck,
    className: "bg-blue-50 text-[#003B7A]",
  },
  embassy: {
    component: Building2,
    className: "bg-amber-50 text-[#FF7A00]",
  },
  translation: {
    component: Languages,
    className: "bg-emerald-50 text-emerald-600",
  },
  license: {
    component: CreditCard,
    className: "bg-purple-50 text-purple-600",
  },
};

// Fallback categories shown while the content API has not loaded yet.
const defaultVisaCategories = [
  { slug: "europe", name_en: "Europe & UK", name_ar: "أوروبا وبريطانيا" },
  { slug: "americas", name_en: "USA & Canada", name_ar: "أمريكا وكندا" },
  { slug: "asia", name_en: "Asia", name_ar: "آسيا وشرق آسيا" },
];

export default function Navbar({ services, visaCategories, sections }) {
  const { lang, toggleLanguage, t, isRTL } = useLanguage();

  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [visasDropdownOpen, setVisasDropdownOpen] = useState(false);
  const [openSectionMenu, setOpenSectionMenu] = useState(null);

  const displayedServices = Array.isArray(services)
    ? services
    : defaultServices;

  const displayedVisaCategories =
    Array.isArray(visaCategories) && visaCategories.length > 0
      ? visaCategories
      : defaultVisaCategories;

  // Admin-managed dynamic sections; only sections with items get a menu.
  const navSections = (Array.isArray(sections) ? sections : []).filter(
    (section) => (section.items || []).length > 0
  );

  const sectionLabel = (section) =>
    isRTL
      ? section.name_ar || section.name_en
      : section.name_en || section.name_ar;

  // Detect page scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Close mobile menu when screen becomes desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileMenuOpen(false);
        setServicesDropdownOpen(false);
        setVisasDropdownOpen(false);
        setOpenSectionMenu(null);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Close mobile menu helper
  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
    setVisasDropdownOpen(false);
    setOpenSectionMenu(null);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 font-sans transition-all duration-300">
      
      {/* =========================================================
          TOP ANNOUNCEMENT & CONTACT BAR
      ========================================================= */}
      <div className="bg-[#002B5B] text-white text-xs py-2 px-4 md:px-10 border-b border-blue-900/50">
        <div className="max-w-306 mx-auto flex justify-between items-center gap-4">

          {/* LEFT SIDE CONTACT INFO */}
          <div className="flex items-center gap-5 whitespace-nowrap overflow-hidden">

            <a
              href="tel:+966552993899"
              className="flex items-center gap-1.5 text-slate-200 hover:text-[#FF7A00] transition-all font-medium"
            >
              <Phone size={12} className="text-[#FF7A00]" />

              <span dir="ltr">
                +966 55 299 3899
              </span>
            </a>

            <a
              href="mailto:rozanaruh@gmail.com"
              className="hidden sm:flex items-center gap-1.5 text-slate-200 hover:text-[#FF7A00] transition-all font-medium"
            >
              <Mail size={13} className="text-[#FF7A00]" />

              <span>
                rozanaruh@gmail.com
              </span>
            </a>

            <div className="hidden xl:flex items-center gap-1.5 text-slate-300 truncate font-light">
              <MapPin
                size={13}
                className="text-[#FF7A00] shrink-0"
              />

              <span className="truncate">
                {t("footer.address")}
              </span>
            </div>
          </div>

          {/* RIGHT SIDE CONTROLS */}
          <div className="flex items-center gap-3 shrink-0">

            {/* VIP ASSISTANCE */}
            <div className="hidden md:flex items-center gap-1.5 bg-blue-900/40 px-2.5 py-1 rounded-full text-slate-200 border border-blue-800/40">
              <Sparkles
                size={12}
                className="text-amber-400"
              />

              <span className="font-medium text-[11px]">
                {t("nav.vip_assistance")}
              </span>
            </div>

            {/* LANGUAGE TOGGLE */}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1.5 text-white hover:text-[#FF7A00] bg-blue-900/60 hover:bg-blue-950 px-3 py-1 rounded-full font-semibold text-[11px] border border-blue-700/50 shadow-sm transition-all hover:scale-105"
            >
              <Globe
                size={13}
                className="text-[#FF7A00]"
              />

              <span>
                {lang === "ar"
                  ? "English (EN)"
                  : "العربية (AR)"}
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* =========================================================
          MAIN NAVIGATION
      ========================================================= */}
      <nav
        className={`w-full transition-all duration-500 ease-out ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg py-2.5"
            : "bg-white py-3.5"
        }`}
      >
        <div className="max-w-360 mx-auto px-4 md:px-10 flex items-center justify-between gap-4">

          {/* =====================================================
              LOGO
          ===================================================== */}
          <a
            href="#home"
            onClick={closeMobileMenu}
            className="flex items-center gap-2.5 shrink-0 group"
          >
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
                ROZANA{" "}
                <span className="text-[#FF7A00]">
                  TOURS & TRAVELS
                </span>
              </span>
            </div>
          </a>

          {/* =====================================================
              DESKTOP NAVIGATION LINKS
          ===================================================== */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-2 font-semibold text-slate-700 text-xs xl:text-sm whitespace-nowrap">

            {/* HOME */}
            <a
              href="#home"
              className="px-3 py-1.5 rounded-full text-[#002B5B] font-bold hover:bg-slate-100 hover:text-[#FF7A00] transition-all hover:-translate-y-0.5"
            >
              {t("nav.home")}
            </a>

            {/* SERVICES DROPDOWN */}
            <div
              className="relative"
              onMouseEnter={() =>
                setServicesDropdownOpen(true)
              }
              onMouseLeave={() =>
                setServicesDropdownOpen(false)
              }
            >
              <button
                className="px-3 py-1.5 rounded-full hover:bg-slate-100 hover:text-[#002B5B] transition-all hover:-translate-y-0.5 flex items-center gap-1.5"
              >
                <span>{t("nav.services")}</span>

                <ChevronDown
                  size={14}
                  className={`transition-transform duration-300 ${
                    servicesDropdownOpen
                      ? "rotate-180 text-[#FF7A00]"
                      : "text-slate-400"
                  }`}
                />
              </button>

              {servicesDropdownOpen && (
                <div
                  className={`absolute top-full ${
                    isRTL
                      ? "right-0"
                      : "left-0"
                  } w-64 bg-white rounded-2xl shadow-2xl border border-slate-100 py-3 px-2 z-50 text-start`}
                >
                  {displayedServices.map((service) => {
                    const icon =
                      serviceIcons[service.icon] ||
                      serviceIcons.visa;

                    const Icon = icon.component;

                    return (
                      <a
                        key={service.slug}
                        href={service.href}
                        className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-slate-50 transition-colors group"
                      >
                        <div
                          className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${icon.className}`}
                        >
                          <Icon size={16} />
                        </div>

                        <div>
                          <p className="text-xs font-bold text-[#002B5B] group-hover:text-[#FF7A00]">
                            {isRTL
                              ? service.title_ar
                              : service.title_en}
                          </p>

                          <p className="text-[10px] text-slate-400">
                            {isRTL
                              ? service.subtitle_ar
                              : service.subtitle_en}
                          </p>
                        </div>
                      </a>
                    );
                  })}
                </div>
              )}
            </div>

            {/* VISAS DROPDOWN (driven by admin-managed visa categories) */}
            <div
              className="relative"
              onMouseEnter={() =>
                setVisasDropdownOpen(true)
              }
              onMouseLeave={() =>
                setVisasDropdownOpen(false)
              }
            >
              <button
                className="px-3 py-1.5 rounded-full hover:bg-slate-100 hover:text-[#002B5B] transition-all hover:-translate-y-0.5 flex items-center gap-1.5"
              >
                <FileCheck
                  size={15}
                  className="text-[#003B7A]"
                />

                <span>{t("nav.visas")}</span>

                <ChevronDown
                  size={14}
                  className={`transition-transform duration-300 ${
                    visasDropdownOpen
                      ? "rotate-180 text-[#FF7A00]"
                      : "text-slate-400"
                  }`}
                />
              </button>

              {visasDropdownOpen && (
                <div
                  className={`absolute top-full ${
                    isRTL
                      ? "right-0"
                      : "left-0"
                  } w-60 bg-white rounded-2xl shadow-2xl border border-slate-100 py-3 px-2 z-50 text-start`}
                >
                  <a
                    href="#visa"
                    className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-slate-50 transition-colors group"
                  >
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 bg-slate-100 text-slate-500">
                      <Globe size={16} />
                    </div>

                    <p className="text-xs font-bold text-[#002B5B] group-hover:text-[#FF7A00]">
                      {isRTL
                        ? "جميع التأشيرات"
                        : "All Destinations"}
                    </p>
                  </a>

                  {displayedVisaCategories.map(
                    (category) => (
                      <a
                        key={category.slug}
                        href={`#visa/${category.slug}`}
                        className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-slate-50 transition-colors group"
                      >
                        <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 bg-blue-50 text-[#003B7A]">
                          <FileCheck size={16} />
                        </div>

                        <p className="text-xs font-bold text-[#002B5B] group-hover:text-[#FF7A00]">
                          {isRTL
                            ? category.name_ar ||
                              category.name_en
                            : category.name_en ||
                              category.name_ar}
                        </p>
                      </a>
                    )
                  )}
                </div>
              )}
            </div>

            {/* DYNAMIC SECTION DROPDOWNS (admin-managed) */}
            {navSections.map((section) => (
              <div
                key={section.slug}
                className="relative"
                onMouseEnter={() =>
                  setOpenSectionMenu(section.slug)
                }
                onMouseLeave={() =>
                  setOpenSectionMenu(null)
                }
              >
                <button
                  className="px-3 py-1.5 rounded-full hover:bg-slate-100 hover:text-[#002B5B] transition-all hover:-translate-y-0.5 flex items-center gap-1.5"
                >
                  <LayoutGrid
                    size={15}
                    className="text-[#0084D6]"
                  />

                  <span>{sectionLabel(section)}</span>

                  <ChevronDown
                    size={14}
                    className={`transition-transform duration-300 ${
                      openSectionMenu === section.slug
                        ? "rotate-180 text-[#FF7A00]"
                        : "text-slate-400"
                    }`}
                  />
                </button>

                {openSectionMenu === section.slug && (
                  <div
                    className={`absolute top-full ${
                      isRTL
                        ? "right-0"
                        : "left-0"
                    } w-60 bg-white rounded-2xl shadow-2xl border border-slate-100 py-3 px-2 z-50 text-start`}
                  >
                    <a
                      href={`#${section.slug}`}
                      className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-slate-50 transition-colors group"
                    >
                      <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 bg-slate-100 text-slate-500">
                        <Globe size={16} />
                      </div>

                      <p className="text-xs font-bold text-[#002B5B] group-hover:text-[#FF7A00]">
                        {isRTL
                          ? `كل ${sectionLabel(section)}`
                          : `All ${sectionLabel(section)}`}
                      </p>
                    </a>

                    {(section.categories || []).map(
                      (category) => (
                        <a
                          key={category.slug}
                          href={`#${section.slug}/${category.slug}`}
                          className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-slate-50 transition-colors group"
                        >
                          <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 bg-blue-50 text-[#003B7A]">
                            <LayoutGrid size={16} />
                          </div>

                          <p className="text-xs font-bold text-[#002B5B] group-hover:text-[#FF7A00]">
                            {isRTL
                              ? category.name_ar ||
                                category.name_en
                              : category.name_en ||
                                category.name_ar}
                          </p>
                        </a>
                      )
                    )}
                  </div>
                )}
              </div>
            ))}

            {/* FLIGHTS */}
            <a
              href="#flights"
              className="px-3 py-1.5 rounded-full hover:bg-slate-100 hover:text-[#002B5B] transition-all hover:-translate-y-0.5 flex items-center gap-1.5"
            >
              <Plane
                size={15}
                className="text-[#0084D6]"
              />

              <span>
                {t("nav.flights")}
              </span>
            </a>

            {/* PACKAGES */}
            <a
              href="#packages"
              className="px-3 py-1.5 rounded-full hover:bg-slate-100 hover:text-[#002B5B] transition-all hover:-translate-y-0.5"
            >
              {t("nav.packages")}
            </a>

            {/* ABOUT */}
            <a
              href="#about"
              className="px-3 py-1.5 rounded-full hover:bg-slate-100 hover:text-[#002B5B] transition-all hover:-translate-y-0.5"
            >
              {t("nav.about")}
            </a>

            {/* CONTACT */}
            <a
              href="#contact"
              className="px-3 py-1.5 rounded-full hover:bg-slate-100 hover:text-[#002B5B] transition-all hover:-translate-y-0.5"
            >
              {t("nav.contact")}
            </a>
          </div>

          {/* =====================================================
              DESKTOP ACTION BUTTONS
          ===================================================== */}
          <div className="hidden lg:flex items-center gap-2.5 shrink-0">

            {/* WHATSAPP */}
            <a
              href="https://wa.me/966552993899"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 rounded-full font-bold text-xs shadow-md shadow-emerald-500/20 transition-all hover:scale-105 active:scale-95"
            >
              <MessageSquare size={14} />

              <span>
                {t("nav.whatsapp_us")}
              </span>
            </a>

            {/* PLAN TRIP */}
            <a
              href="#contact"
              className="relative group overflow-hidden rounded-full p-0.5 font-bold text-xs shadow-md transition-all hover:scale-105 active:scale-95"
            >
              <span className="absolute inset-0 bg-linear-to-r from-[#003B7A] via-[#0084D6] to-[#FF7A00] rounded-full transition-all group-hover:opacity-90"></span>

              <span className="relative block bg-[#003B7A] text-white px-4 py-2 rounded-full transition-colors group-hover:bg-transparent">
                {t("nav.plan_trip")}
              </span>
            </a>
          </div>

          {/* =====================================================
              MOBILE BURGER BUTTON
          ===================================================== */}
          <button
            type="button"
            onClick={() =>
              setMobileMenuOpen(!mobileMenuOpen)
            }
            aria-label={
              mobileMenuOpen
                ? "Close menu"
                : "Open menu"
            }
            aria-expanded={mobileMenuOpen}
            className="lg:hidden flex items-center justify-center w-11 h-11 rounded-xl text-[#002B5B] hover:bg-slate-100 active:bg-slate-200 transition-colors"
          >
            {mobileMenuOpen ? (
              <X size={27} strokeWidth={2.5} />
            ) : (
              <Menu size={27} strokeWidth={2.5} />
            )}
          </button>
        </div>

        {/* =========================================================
            MOBILE MENU
        ========================================================= */}
        {mobileMenuOpen && (
          <div
            dir={isRTL ? "rtl" : "ltr"}
            className="lg:hidden border-t border-slate-100 bg-white shadow-xl"
          >
            <div className="px-4 py-4 max-h-[calc(100vh-100px)] overflow-y-auto">

              {/* HOME */}
              <a
                href="#home"
                onClick={closeMobileMenu}
                className="block px-4 py-3 rounded-xl font-semibold text-[#002B5B] hover:bg-slate-50 transition-colors"
              >
                {t("nav.home")}
              </a>

              {/* SERVICES */}
              <div className="mt-1">
                <button
                  type="button"
                  onClick={() =>
                    setServicesDropdownOpen(
                      !servicesDropdownOpen
                    )
                  }
                  className="w-full flex items-center justify-between px-4 py-3 rounded-xl font-semibold text-slate-700 hover:bg-slate-50 transition-colors"
                >
                  <span>
                    {t("nav.services")}
                  </span>

                  <ChevronDown
                    size={17}
                    className={`transition-transform duration-300 ${
                      servicesDropdownOpen
                        ? "rotate-180 text-[#FF7A00]"
                        : "text-slate-400"
                    }`}
                  />
                </button>

                {servicesDropdownOpen && (
                  <div className="mt-1 mx-2 space-y-1">
                    {displayedServices.map(
                      (service) => {
                        const icon =
                          serviceIcons[
                            service.icon
                          ] ||
                          serviceIcons.visa;

                        const Icon =
                          icon.component;

                        return (
                          <a
                            key={service.slug}
                            href={service.href}
                            onClick={
                              closeMobileMenu
                            }
                            className="flex items-center gap-3 px-3 py-3 rounded-xl hover:bg-slate-50 transition-colors"
                          >
                            <div
                              className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 ${icon.className}`}
                            >
                              <Icon size={17} />
                            </div>

                            <div
                              className={
                                isRTL
                                  ? "text-right"
                                  : "text-left"
                              }
                            >
                              <p className="text-sm font-bold text-[#002B5B]">
                                {isRTL
                                  ? service.title_ar
                                  : service.title_en}
                              </p>

                              <p className="text-[10px] text-slate-400">
                                {isRTL
                                  ? service.subtitle_ar
                                  : service.subtitle_en}
                              </p>
                            </div>
                          </a>
                        );
                      }
                    )}
                  </div>
                )}
              </div>

              {/* VISAS (driven by admin-managed visa categories) */}
              <div className="mt-1">
                <button
                  type="button"
                  onClick={() =>
                    setVisasDropdownOpen(
                      !visasDropdownOpen
                    )
                  }
                  className="w-full flex items-center justify-between px-4 py-3 rounded-xl font-semibold text-slate-700 hover:bg-slate-50 transition-colors"
                >
                  <span className="flex items-center gap-2">
                    <FileCheck
                      size={17}
                      className="text-[#003B7A]"
                    />

                    <span>
                      {t("nav.visas")}
                    </span>
                  </span>

                  <ChevronDown
                    size={17}
                    className={`transition-transform duration-300 ${
                      visasDropdownOpen
                        ? "rotate-180 text-[#FF7A00]"
                        : "text-slate-400"
                    }`}
                  />
                </button>

                {visasDropdownOpen && (
                  <div className="mt-1 mx-2 space-y-1">
                    <a
                      href="#visa"
                      onClick={closeMobileMenu}
                      className="flex items-center gap-3 px-3 py-3 rounded-xl hover:bg-slate-50 transition-colors"
                    >
                      <div className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0 bg-slate-100 text-slate-500">
                        <Globe size={17} />
                      </div>

                      <p className="text-sm font-bold text-[#002B5B]">
                        {isRTL
                          ? "جميع التأشيرات"
                          : "All Destinations"}
                      </p>
                    </a>

                    {displayedVisaCategories.map(
                      (category) => (
                        <a
                          key={category.slug}
                          href={`#visa/${category.slug}`}
                          onClick={
                            closeMobileMenu
                          }
                          className="flex items-center gap-3 px-3 py-3 rounded-xl hover:bg-slate-50 transition-colors"
                        >
                          <div className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0 bg-blue-50 text-[#003B7A]">
                            <FileCheck size={17} />
                          </div>

                          <p className="text-sm font-bold text-[#002B5B]">
                            {isRTL
                              ? category.name_ar ||
                                category.name_en
                              : category.name_en ||
                                category.name_ar}
                          </p>
                        </a>
                      )
                    )}
                  </div>
                )}
              </div>

              {/* DYNAMIC SECTIONS (admin-managed) */}
              {navSections.map((section) => (
                <div className="mt-1" key={section.slug}>
                  <button
                    type="button"
                    onClick={() =>
                      setOpenSectionMenu(
                        openSectionMenu === section.slug
                          ? null
                          : section.slug
                      )
                    }
                    className="w-full flex items-center justify-between px-4 py-3 rounded-xl font-semibold text-slate-700 hover:bg-slate-50 transition-colors"
                  >
                    <span className="flex items-center gap-2">
                      <LayoutGrid
                        size={17}
                        className="text-[#0084D6]"
                      />

                      <span>
                        {sectionLabel(section)}
                      </span>
                    </span>

                    <ChevronDown
                      size={17}
                      className={`transition-transform duration-300 ${
                        openSectionMenu === section.slug
                          ? "rotate-180 text-[#FF7A00]"
                          : "text-slate-400"
                      }`}
                    />
                  </button>

                  {openSectionMenu === section.slug && (
                    <div className="mt-1 mx-2 space-y-1">
                      <a
                        href={`#${section.slug}`}
                        onClick={closeMobileMenu}
                        className="flex items-center gap-3 px-3 py-3 rounded-xl hover:bg-slate-50 transition-colors"
                      >
                        <div className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0 bg-slate-100 text-slate-500">
                          <Globe size={17} />
                        </div>

                        <p className="text-sm font-bold text-[#002B5B]">
                          {isRTL
                            ? `كل ${sectionLabel(section)}`
                            : `All ${sectionLabel(section)}`}
                        </p>
                      </a>

                      {(section.categories || []).map(
                        (category) => (
                          <a
                            key={category.slug}
                            href={`#${section.slug}/${category.slug}`}
                            onClick={
                              closeMobileMenu
                            }
                            className="flex items-center gap-3 px-3 py-3 rounded-xl hover:bg-slate-50 transition-colors"
                          >
                            <div className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0 bg-blue-50 text-[#003B7A]">
                              <LayoutGrid size={17} />
                            </div>

                            <p className="text-sm font-bold text-[#002B5B]">
                              {isRTL
                                ? category.name_ar ||
                                  category.name_en
                                : category.name_en ||
                                  category.name_ar}
                            </p>
                          </a>
                        )
                      )}
                    </div>
                  )}
                </div>
              ))}

              {/* FLIGHTS */}
              <a
                href="#flights"
                onClick={closeMobileMenu}
                className="mt-1 flex items-center gap-2 px-4 py-3 rounded-xl font-semibold text-slate-700 hover:bg-slate-50 transition-colors"
              >
                <Plane
                  size={17}
                  className="text-[#0084D6]"
                />

                <span>
                  {t("nav.flights")}
                </span>
              </a>

              {/* PACKAGES */}
              <a
                href="#packages"
                onClick={closeMobileMenu}
                className="block mt-1 px-4 py-3 rounded-xl font-semibold text-slate-700 hover:bg-slate-50 transition-colors"
              >
                {t("nav.packages")}
              </a>

              {/* ABOUT */}
              <a
                href="#about"
                onClick={closeMobileMenu}
                className="block mt-1 px-4 py-3 rounded-xl font-semibold text-slate-700 hover:bg-slate-50 transition-colors"
              >
                {t("nav.about")}
              </a>

              {/* CONTACT */}
              <a
                href="#contact"
                onClick={closeMobileMenu}
                className="block mt-1 px-4 py-3 rounded-xl font-semibold text-slate-700 hover:bg-slate-50 transition-colors"
              >
                {t("nav.contact")}
              </a>

              {/* =================================================
                  MOBILE ACTION BUTTONS
              ================================================= */}
              <div className="pt-4 mt-3 border-t border-slate-100 space-y-2">

                {/* WHATSAPP */}
                <a
                  href="https://wa.me/966552993899"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-3 rounded-xl font-bold text-sm transition-colors"
                >
                  <MessageSquare size={17} />

                  <span>
                    {t("nav.whatsapp_us")}
                  </span>
                </a>

                {/* PLAN TRIP */}
                <a
                  href="#contact"
                  onClick={closeMobileMenu}
                  className="block text-center bg-[#003B7A] hover:bg-[#002B5B] text-white px-4 py-3 rounded-xl font-bold text-sm transition-colors"
                >
                  {t("nav.plan_trip")}
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}