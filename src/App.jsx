import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import VisaSection from './components/VisaSection';
import PackagesSection from './components/PackagesSection';
import UmrahSection from './components/UmrahSection';
import AboutSection from './components/AboutSection';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans selection:bg-[#FF7A00] selection:text-white">
      {/* 1. Navbar */}
      <Navbar />

      <main>
        <Hero />
        <VisaSection />
        <PackagesSection />
        <UmrahSection />
        <AboutSection />
      </main>
      
    </div>
  );
}