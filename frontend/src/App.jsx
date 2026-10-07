import React, { useEffect, useState } from 'react';
import { LanguageProvider } from './context/LanguageContext'; 

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import VisaSection from './components/VisaSection';
import PackagesSection from './components/PackagesSection';
import AboutSection from './components/AboutSection';
import Contact from './components/Contact';
import Footer from './components/Footer';
import TranslationSection from './components/TranslationSection';
import EmbassySection from './components/EmbassySection';
import LicenseSection from './components/LicenseSection';
import FlightBookingSection from './components/FlightBookingSection';
import DynamicSection from './components/DynamicSection';

export default function App() {
  const [content, setContent] = useState(null);
  const serviceBySlug = (slug) => content?.services?.find((service) => service.slug === slug);

  useEffect(() => {
    const apiBase = import.meta.env.VITE_API_URL || 'http://127.0.0.1:8000';
    const controller = new AbortController();

    fetch(`${apiBase}/api/v1/content`, { signal: controller.signal })
      .then((response) => {
        if (!response.ok) throw new Error('Content API unavailable');
        return response.json();
      })
      .then((data) => setContent({
        settings: data.settings || {},
        services: data.services || [],
        visas: (data.visas || []).map((visa) => ({
          ...visa,
          id: visa.slug,
          flagImg: visa.flag_url,
          processingTime: visa.processing_time,
          processingTime_ar: visa.processing_time_ar,
        })),
        visaCategories: data.visaCategories || [],
        tourPackages: (data.tourPackages || []).map((pkg) => ({
          ...pkg,
          id: pkg.slug,
          flagImg: pkg.flag_url,
          image: pkg.image_url,
        })),
        tourPackageCategories: data.tourPackageCategories || [],
        sections: data.sections || [],
        umrahPackages: (data.umrahPackages || []).map((pkg) => ({
          ...pkg,
          id: pkg.slug,
          makkahHotel: pkg.makkah_hotel,
          madinahHotel: pkg.madinah_hotel,
        })),
      }))
      .catch((error) => {
        if (error.name !== 'AbortError') console.warn('Using bundled website content.', error);
      });

    return () => controller.abort();
  }, []);

  return (
    <LanguageProvider>
    <div className="min-h-screen bg-slate-50 font-sans selection:bg-[#FF7A00] selection:text-white transition-all">
      
      {/* 1. Navbar */}
      <Navbar settings={content?.settings} services={content?.services} visaCategories={content?.visaCategories} sections={content?.sections} />

        <main>
          <Hero settings={content?.settings} />
          {(content === null || serviceBySlug('visa')) && <VisaSection items={content?.visas} categories={content?.visaCategories} settings={content?.settings} service={serviceBySlug('visa')} />}
          {(content === null || serviceBySlug('embassy')) && <EmbassySection settings={content?.settings} service={serviceBySlug('embassy')} />}
          {(content === null || serviceBySlug('translation')) && <TranslationSection settings={content?.settings} service={serviceBySlug('translation')} />}
          {(content === null || serviceBySlug('license')) && <LicenseSection settings={content?.settings} service={serviceBySlug('license')} />}
          <FlightBookingSection />
          <PackagesSection items={content?.tourPackages} categories={content?.tourPackageCategories} settings={content?.settings} />
          {(content?.sections || []).map((section) => (
            <DynamicSection key={section.slug} section={section} settings={content?.settings} />
          ))}
          <AboutSection settings={content?.settings} />
          <Contact settings={content?.settings} />
        </main>
      
      <Footer settings={content?.settings} />
    </div>

    </LanguageProvider>
  );
}
