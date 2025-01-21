import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useTheme } from '../context/ThemeContext';
import { FaHome, FaSearch } from 'react-icons/fa';

const NotFound: React.FC = () => {
  const { theme } = useTheme();

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

      {/* Overlay gradient - reduced opacity */}
      <div 
        className={`absolute inset-0 z-0 ${
          theme === 'dark' 
            ? 'bg-gradient-to-b from-gray-900/40 to-gray-900/70'
            : 'bg-gradient-to-b from-white/30 to-white/60'
        }`}
      />

      {/* Content */}
      <div className="relative z-10 text-center space-y-8">
        {/* Animated 404 Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-4"
        >
          <h1 className={`text-9xl font-bold ${
            theme === 'dark' ? 'text-primary-400' : 'text-primary-600'
          }`}>
            4
            <motion.span
              animate={{ 
                rotate: [0, -10, 10, -10, 0],
                scale: [1, 1.1, 1.1, 1.1, 1]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse"
              }}
              className="inline-block"
            >
              0
            </motion.span>
            4
          </h1>
          
          <h2 className={`text-2xl font-semibold ${
            theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
          }`}>
            Oops! Page Not Found
          </h2>
          
          <p className={`text-lg ${
            theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
          }`}>
            Looks like you've ventured into the void...
          </p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex justify-center"
        >
          <Link href="/">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`
                flex items-center justify-center gap-2 px-8 py-3 rounded-full
                ${theme === 'dark' 
                  ? 'bg-primary-600 hover:bg-primary-700' 
                  : 'bg-primary-500 hover:bg-primary-600'
                } text-white font-medium transition-colors
              `}
            >
              <FaHome />
              Back to Home
            </motion.a>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound; 