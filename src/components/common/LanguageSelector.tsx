"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ReactCountryFlag from "react-country-flag";
import { useLocale } from 'next-intl';
import { usePathname, Link } from '@/i18n/routing';
import { languages } from '@/i18n/languages';

const LanguageSelector: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const currentLocale = useLocale();
  const pathname = usePathname();

  const selectedLang = languages.find(lang => lang.code === currentLocale);

  return (
    <div className="relative">
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 p-1 rounded hover:bg-gray-100 dark:hover:bg-gray-800"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <span className="uppercase text-xs font-medium text-gray-600 dark:text-gray-300">
          {selectedLang?.code}
        </span>
        <ReactCountryFlag
          countryCode={selectedLang?.countryCode || 'GB'}
          svg
          style={{
            width: '1em',
            height: '1em'
          }}
        />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute right-0 mt-2 py-2 w-40 bg-white dark:bg-gray-800 rounded-lg shadow-lg lg:z-50 lg:right-0 lg:left-auto lg:top-full lg:mt-2 z-[60] left-0 top-[calc(100%+0.5rem)]"
            onMouseLeave={() => setIsOpen(false)}
          >
            {languages.map((lang) => (
              <Link
                key={lang.code}
                href={pathname}
                locale={lang.code}
                className={`flex items-center gap-2 w-full px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700 ${
                  currentLocale === lang.code 
                    ? 'text-primary-600 dark:text-primary-400 font-medium' 
                    : 'text-gray-700 dark:text-gray-300'
                }`}
              >
                <ReactCountryFlag
                  countryCode={lang.countryCode}
                  svg
                  style={{
                    width: '1em',
                    height: '1em'
                  }}
                />
                <span>{lang.name}</span>
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LanguageSelector; 