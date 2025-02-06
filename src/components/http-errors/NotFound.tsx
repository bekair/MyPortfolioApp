"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Link } from '@/i18n/routing';
import { useTheme } from '@/context/ThemeContext';
import { FaHome } from 'react-icons/fa';
import { useTranslations } from 'next-intl';

export default function NotFound() {
  const { theme } = useTheme();
  const t = useTranslations('errorPages.notFound');

  return (
    <div className="min-h-screen relative flex items-center justify-center p-4 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(/images/404-astronaut.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          filter: theme === 'dark' ? 'brightness(0.5)' : 'brightness(1)',
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-4"
        >
          <h1 className={`text-9xl font-bold ${
            theme === 'dark' ? 'text-primary-400' : 'text-primary-600'
          }`}>404</h1>
          
          <h2 className={`text-2xl font-semibold ${
            theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
          }`}>
            {t('title')}
          </h2>
        </motion.div>

        {/* Action Button */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex justify-center"
        >
          <Link href="/" className={`
            flex items-center justify-center gap-2 px-8 py-3 rounded-full
            ${theme === 'dark' 
              ? 'bg-primary-600 hover:bg-primary-700' 
              : 'bg-primary-500 hover:bg-primary-600'
            } text-white font-medium transition-colors
          `}>
            <FaHome />
            {t('buttons.backToHome')}
          </Link>
        </motion.div>
      </div>

    </div>
  );
} 