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

export default function App() {
  const [content, setContent] = useState(null);

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
        visas: (data.visas || []).map((visa) => ({
          ...visa,
          id: visa.slug,
          flagImg: visa.flag_url,
          processingTime: visa.processing_time,
        })),
        tourPackages: (data.tourPackages || []).map((pkg) => ({
          ...pkg,
          id: pkg.slug,
          flagImg: pkg.flag_url,
          image: pkg.image_url,
        })),
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
      <Navbar settings={content?.settings} />

        <main>
          <Hero settings={content?.settings} />
          <VisaSection items={content?.visas} settings={content?.settings} />
          <EmbassySection />
          <TranslationSection settings={content?.settings} />
          <LicenseSection />
          <FlightBookingSection />
          <PackagesSection items={content?.tourPackages} settings={content?.settings} />
          <AboutSection settings={content?.settings} />
          <Contact settings={content?.settings} />
        </main>
      
      <Footer settings={content?.settings} />
    </div>

    </LanguageProvider>
  );
}
