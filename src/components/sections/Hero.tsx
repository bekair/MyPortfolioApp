import React, { useState, useCallback } from 'react';
import { useTypewriter } from '../../hooks/useTypewriter';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaFilePdf } from 'react-icons/fa';
import { useTheme } from '../../context/ThemeContext';
import CVModal from '../common/CVModal';
import { useTranslations } from 'next-intl';

const Hero: React.FC = () => {
  const { theme } = useTheme();
  const [showCVModal, setShowCVModal] = useState(false);
  const t = useTranslations("hero");
  const titles = [
    t('name'),
    t('titles.specialty1'),
    t('titles.specialty2'),
    t('titles.specialty3')
  ];

  const animatedText = useTypewriter(titles, 150, 100, 2000);

  const handleOpenCV = useCallback(() => {
    // Prevent scrolling when modal is open
    document.body.style.overflow = 'hidden';
    setShowCVModal(true);
  }, []);

  const handleCloseCV = useCallback(() => {
    // Restore scrolling when modal is closed
    document.body.style.overflow = 'unset';
    setShowCVModal(false);
  }, []);

  return (
    <section id="home" className={`min-h-screen flex items-center justify-center relative overflow-hidden ${
      theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'
    }`}>
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className={`absolute top-20 left-20 w-72 h-72 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob ${
          theme === 'dark' ? 'bg-primary-900/30' : 'bg-primary-200'
        }`} />
        <div className={`absolute top-40 right-20 w-72 h-72 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000 ${
          theme === 'dark' ? 'bg-blue-900/30' : 'bg-blue-200'
        }`} />
        <div className={`absolute -bottom-8 left-40 w-72 h-72 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000 ${
          theme === 'dark' ? 'bg-pink-900/30' : 'bg-pink-200'
        }`} />
      </div>

      <div className="container mx-auto px-6 py-20">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className={`text-5xl md:text-7xl font-bold mb-6 ${
              theme === 'dark' ? 'text-gray-100' : 'text-gray-900'
            }`}>
              {t('greeting')} {' '}
              <span className={theme === 'dark' ? 'text-primary-400' : 'text-primary-600'}>
                {animatedText}
                <span className="cursor" />
              </span>
            </h1>
            <p className={`text-xl md:text-2xl mb-8 ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
            }`}>
              {t('titles.specialty1')} | {t('titles.specialty2')} | {t('titles.specialty3')}
            </p>

            <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-12">
              <motion.div
                className="flex gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <a 
                  href="#projects"
                  className="bg-primary-600 text-white px-8 py-3 rounded-full hover:bg-primary-700 transition-all hover:shadow-lg transform hover:-translate-y-1"
                >
                  {t('buttons.viewProjects')}
                </a>
                <a
                  href="#contact"
                  className={`
                    border-2 border-primary-600 text-primary-600 px-8 py-3 rounded-full 
                    transition-all hover:shadow-lg transform hover:-translate-y-1
                    ${theme === 'dark' 
                      ? 'hover:bg-primary-900/30'
                      : 'hover:bg-primary-50'
                    }
                  `}
                >
                  {t('buttons.contactMe')}
                </a>
              </motion.div>

              <motion.div 
                className="flex gap-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <a 
                  href="https://github.com/bekair" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-600 hover:text-primary-600 transition-colors"
                >
                  <FaGithub size={28} />
                </a>
                <a 
                  href="https://www.linkedin.com/in/bekir-can-baykal-msc-1545157b" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-600 hover:text-primary-600 transition-colors"
                >
                  <FaLinkedin size={28} />
                </a>
                <motion.button
                  onClick={handleOpenCV}
                  className="flex items-center gap-1 px-3 py-1.5 rounded-lg border-2 border-red-500/20 bg-red-500/10 hover:bg-red-500/20 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaFilePdf size={24} className="text-red-500" />
                  <span className="font-semibold text-red-500">
                    {t('buttons.cv')}
                  </span>
                </motion.button>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex justify-center"
          >
            <a 
              href="#about"
              className="animate-bounce text-gray-400 hover:text-primary-600 transition-colors"
            >
              <svg 
                className="w-6 h-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
              </svg>
            </a>
          </motion.div>
        </div>
      </div>

      <CVModal 
        isOpen={showCVModal} 
        onClose={handleCloseCV}
      />
    </section>
  );
};

export default Hero; 