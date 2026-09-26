import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations } from '../utils/translations';

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  // Default to 'ar' (Arabic) as requested by Saudi Client!
  const [lang, setLang] = useState(() => {
    return localStorage.getItem('rozana_lang') || 'ar';
  });

  // Automatically update HTML 'dir' and 'lang' attributes
  useEffect(() => {
    localStorage.setItem('rozana_lang', lang);
    const htmlElement = document.documentElement;
    
    if (lang === 'ar') {
      htmlElement.setAttribute('dir', 'rtl');
      htmlElement.setAttribute('lang', 'ar');
    } else {
      htmlElement.setAttribute('dir', 'ltr');
      htmlElement.setAttribute('lang', 'en');
    }
  }, [lang]);

  // Toggle function between Arabic and English
  const toggleLanguage = () => {
    setLang(prevLang => (prevLang === 'ar' ? 'en' : 'ar'));
  };

  // 1. Helper function for Static UI translations (e.g. t('nav.home'))
  const t = (path) => {
    try {
      const keys = path.split('.');
      let current = translations;
      for (let key of keys) {
        if (current[key] !== undefined) {
          current = current[key];
        } else {
          return path; // Fallback to key if not found
        }
      }
      return current[lang] || current['ar'] || path;
    } catch (err) {
      return path;
    }
  };

  // 2. Helper function for LARAVEL Dynamic API Content!
  // Checks if field exists as field_ar / field_en, or fallback to field
  const getContent = (item, field) => {
    if (!item) return '';
    if (lang === 'ar' && item[`${field}_ar`]) {
      return item[`${field}_ar`];
    }
    if (lang === 'en' && item[`${field}_en`]) {
      return item[`${field}_en`];
    }
    return item[field] || '';
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLanguage, t, getContent, isRTL: lang === 'ar' }}>
      {children}
    </LanguageContext.Provider>
  );
}

// Custom hook for easy use in any component
export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}