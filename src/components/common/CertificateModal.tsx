import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';
import { FaTimes } from 'react-icons/fa';

interface CertificateModalProps {
  isOpen: boolean;
  onClose: () => void;
  certificate: {
    title: string;
    issuer: string;
    date: string;
    imageUrl?: string;
  } | null;
}

const CertificateModal: React.FC<CertificateModalProps> = ({ isOpen, onClose, certificate }) => {
  const { theme } = useTheme();

  return (
    <AnimatePresence>
      {isOpen && certificate && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 z-50"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed z-50 inset-x-0 bottom-0 md:inset-16 md:bottom-auto"
          >
            <div className={`relative w-full max-w-4xl mx-auto h-[90vh] md:h-auto ${
              theme === 'dark' ? 'bg-gray-800' : 'bg-white'
            } rounded-t-xl md:rounded-xl shadow-2xl overflow-hidden`}
            >
              <div className={`flex items-center justify-between p-4 border-b ${
                theme === 'dark' ? 'border-gray-700' : 'border-gray-200'
              }`}>
                <h2 className={`text-lg font-semibold ${
                  theme === 'dark' ? 'text-gray-100' : 'text-gray-900'
                }`}>
                  {`${certificate.title} - ${certificate.issuer} - ${certificate.date}`}
                </h2>
                <button
                  onClick={onClose}
                  className={`p-2 rounded-full ${
                    theme === 'dark' ? 'hover:bg-gray-700 text-gray-300' : 'hover:bg-gray-100 text-gray-700'
                  } transition-colors`}
                >
                  <FaTimes />
                </button>
              </div>

              <div className="h-[calc(90vh-4rem)] md:h-[75vh] w-full p-4">
                <img
                  src={certificate.imageUrl}
                  alt={certificate.title}
                  className="w-full h-full object-contain"
                />
              </div>

              <div className="md:hidden p-4 border-t border-gray-200 dark:border-gray-700">
                <button
                  onClick={onClose}
                  className="w-full py-2 px-4 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CertificateModal; 