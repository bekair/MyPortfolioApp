import React from 'react';
import { motion } from 'framer-motion';
import { FaSun, FaMoon } from 'react-icons/fa';
import { useTheme } from '../../context/ThemeContext';

interface ThemeToggleProps {
  compact?: boolean;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ compact = false }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="flex items-center gap-2">
      {!compact && (
        <span className={`text-[10px] font-medium ${
          theme === 'dark' 
            ? 'text-gray-300' 
            : 'text-gray-700'
        }`}>
          Light
        </span>
      )}

      <motion.button
        onClick={toggleTheme}
        className={`relative ${
          compact 
            ? 'w-[60px] h-[30px]' 
            : 'w-[70px] h-[34px]'
        } rounded-full p-1 transition-colors duration-300 ${
          theme === 'dark' 
            ? 'bg-[#183153]'
            : 'bg-[#ffd43b]'
        }`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {/* Toggle slider */}
        <motion.div
          layout
          className={`${
            compact ? 'w-6 h-6' : 'w-7 h-7'
          } rounded-full shadow-md flex items-center justify-center ${
            theme === 'dark'
              ? 'bg-[#27446c]'
              : 'bg-[#ffe066]'
          }`}
          animate={{
            x: theme === 'dark' ? (compact ? 30 : 36) : 0,
          }}
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
        >
          {theme === 'dark' ? (
            <FaMoon className={`${compact ? 'text-xs' : 'text-sm'} text-[#60a5fa]`} />
          ) : (
            <FaSun className={`${compact ? 'text-xs' : 'text-sm'} text-[#ff922b]`} />
          )}
        </motion.div>
      </motion.button>

      {!compact && (
        <span className={`text-[10px] font-medium ${
          theme === 'dark' 
            ? 'text-gray-300' 
            : 'text-gray-700'
        }`}>
          Dark
        </span>
      )}
    </div>
  );
};

export default ThemeToggle; 