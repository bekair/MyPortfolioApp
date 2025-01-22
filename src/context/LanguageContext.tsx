import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'en' | 'tr' | 'nl';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    // Only run on client side
    if (typeof window !== 'undefined') {
      // Get saved language or browser language
      const savedLang = localStorage.getItem('language') as Language;
      if (savedLang) return savedLang;

      // Get browser language
      const browserLang = navigator.language.split('-')[0];
      
      // Check if browser language is supported
      if (['en', 'tr', 'nl'].includes(browserLang)) {
        return browserLang as Language;
      }
    }
    
    // Default to English
    return 'en';
  });

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}; 