import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';
import { FaMoon, FaSun } from 'react-icons/fa';

interface ThemeToggleProps {
  compact?: boolean;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ compact = false }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      className={`relative ${
        compact ? 'w-12 h-6' : 'w-14 h-7'
      } rounded-full p-1 transition-colors duration-300 ${
        theme === 'dark'
          ? 'bg-[#183153]'
          : 'bg-[#ffd43b]'
      }`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Toggle theme"
    >
      <motion.div
        layout
        className={`${
          compact ? 'w-4 h-4' : 'w-5 h-5'
        } rounded-full shadow-md flex items-center justify-center ${
          theme === 'dark'
            ? 'bg-[#27446c]'
            : 'bg-[#ffe066]'
        }`}
        animate={{
          x: theme === 'dark' ? (compact ? 24 : 28) : 0
        }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
      >
        {theme === 'dark' ? (
          <FaMoon className="text-[10px] text-[#60a5fa]" />
        ) : (
          <FaSun className="text-[10px] text-[#ff922b]" />
        )}
      </motion.div>
    </motion.button>
  );
};

export default ThemeToggle; 