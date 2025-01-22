import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { slide as Menu } from 'react-burger-menu';
import { useTheme } from '../../context/ThemeContext';
import ThemeToggle from '../common/ThemeToggle';
import { FaChevronDown, FaHome, FaUser, FaCode, FaBriefcase, FaProjectDiagram, FaEnvelope, FaLaptopCode, FaCertificate } from 'react-icons/fa';
import Link from 'next/link';
import LanguageSelector from '../common/LanguageSelector';

const Navbar: React.FC = () => {
  const { theme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isManualNavigation, setIsManualNavigation] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  const burgerStyles = {
    bmBurgerButton: {
      display: 'none',
    },
    bmCrossButton: {
      height: '24px',
      width: '24px',
      right: '20px',
      top: '20px',
    },
    bmCross: {
      background: 'currentColor',
    },
    bmMenuWrap: {
      position: 'fixed',
      height: '100vh',
      width: '280px !important',
      top: '0',
      right: '0',
      transition: 'all 0.3s ease-in-out',
    },
    bmMenu: {
      background: theme === 'dark' ? '#1F2937' : '#FFFFFF',
      height: '100%',
      padding: '4rem 0 0',
    },
    bmItemList: {
      height: 'auto',
      display: 'flex',
      flexDirection: 'column',
      padding: '1rem',
    },
    bmOverlay: {
      background: 'rgba(0, 0, 0, 0.3)',
      top: '0',
      right: '0',
      position: 'fixed',
      width: '100vw',
      height: '100vh',
    }
  };

  // Group your navigation items
  const mainNavItems = [
    { name: 'Home', icon: <FaHome className="text-xl" /> },
    { name: 'About', icon: <FaUser className="text-xl" /> },
    { name: 'Skills', icon: <FaCode className="text-xl" /> },
    { name: 'Experience', icon: <FaBriefcase className="text-xl" /> },
    { name: 'Projects', icon: <FaProjectDiagram className="text-xl" /> },
    { name: 'Contact', icon: <FaEnvelope className="text-xl" /> },
  ];

  const dropdownNavItems = [
    { name: 'Freelance', icon: <FaLaptopCode className="text-xl" /> },
    { name: 'Certificates', icon: <FaCertificate className="text-xl" /> },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);

      if (isManualNavigation) {
        return;
      }

      const sections = [
        'home', 
        'about', 
        'skills', 
        'projects',
        'experience',
        'contact',
        'freelance', 
        'certificates'
      ];

      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          const viewportHeight = window.innerHeight;

          return rect.top < viewportHeight / 2 && rect.bottom > viewportHeight / 2;
        }
        return false;
      });

      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isManualNavigation]);

  const handleNavClick = (section: string) => {
    setIsManualNavigation(true);
    setActiveSection(section);

    setTimeout(() => {
      setIsManualNavigation(false);
    }, 1000);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 w-full z-[100] transition-all duration-300 ${
        scrolled 
          ? theme === 'dark'
            ? 'bg-gray-900/80 backdrop-blur-lg shadow-lg'
            : 'bg-white/80 backdrop-blur-lg shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link 
              href="#home"
              className="flex items-center space-x-2 cursor-pointer"
            >
              <div className="flex items-center">
                <motion.span
                  className="text-3xl font-bold bg-primary-600 text-white h-10 w-10 rounded-lg flex items-center justify-center"
                  whileHover={{ rotate: -6 }}
                  initial={{ rotate: -6 }}
                >
                  B
                </motion.span>
                <motion.span
                  className="text-3xl font-bold bg-primary-500 text-white h-10 w-10 rounded-lg flex items-center justify-center -ml-2"
                  whileHover={{ rotate: 6 }}
                >
                  C
                </motion.span>
                <motion.span
                  className="text-3xl font-bold bg-primary-400 text-white h-10 w-10 rounded-lg flex items-center justify-center -ml-2"
                  whileHover={{ rotate: 6 }}
                  initial={{ rotate: 6 }}
                >
                  B
                </motion.span>
              </div>
              <span className={`bg-gradient-to-r from-primary-600 to-primary-400 bg-clip-text text-transparent text-xl font-bold hidden sm:inline-block transition-colors duration-300`}>
                Portfolio
              </span>
            </Link>
          </motion.div>

          {/* Desktop Navigation - Text Only */}
          <div className="hidden lg:flex items-center justify-center flex-1 px-4">
            <div className="flex space-x-6">
              {mainNavItems.map((item) => (
                <motion.div
                  key={item.name}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link 
                    href={`#${item.name.toLowerCase()}`}
                    onClick={() => handleNavClick(item.name.toLowerCase())}
                    className={`relative px-2 py-1 text-sm transition-colors duration-300 ${
                      activeSection === item.name.toLowerCase()
                        ? theme === 'dark' ? 'text-primary-400' : 'text-primary-600'
                        : theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                    }`}
                  >
                    {item.name}
                    {activeSection === item.name.toLowerCase() && (
                      <motion.div
                        layoutId="underline"
                        className={`absolute bottom-0 left-0 w-full h-0.5 ${
                          theme === 'dark' ? 'bg-primary-400' : 'bg-primary-600'
                        }`}
                      />
                    )}
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Side Controls */}
          <div className="flex items-center space-x-4">
            {/* More Dropdown - Desktop */}
            <div className="hidden lg:block relative">
              <motion.button
                onClick={() => setShowDropdown(!showDropdown)}
                className={`flex items-center space-x-1 px-2 py-1 text-sm ${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                }`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>More</span>
                <FaChevronDown className={`transform transition-transform ${showDropdown ? 'rotate-180' : ''}`} />
              </motion.button>

              <AnimatePresence>
                {showDropdown && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className={`absolute right-0 mt-2 py-2 w-48 rounded-xl shadow-lg ${
                      theme === 'dark' ? 'bg-gray-800' : 'bg-white'
                    }`}
                    onMouseLeave={() => setShowDropdown(false)}
                  >
                    {dropdownNavItems.map((item) => (
                      <motion.div
                        key={item.name}
                        whileHover={{ x: 6 }}
                      >
                        <Link 
                          href={`#${item.name.toLowerCase()}`}
                          onClick={() => {
                            handleNavClick(item.name.toLowerCase());
                            setShowDropdown(false);
                          }}
                          className={`block px-4 py-2 text-sm ${
                            activeSection === item.name.toLowerCase()
                              ? theme === 'dark' ? 'text-primary-400' : 'text-primary-600'
                              : theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                          } hover:bg-gray-100 dark:hover:bg-gray-700`}
                        >
                          {item.name}
                        </Link>
                      </motion.div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Language & Theme Controls - Desktop Only */}
            <div className="hidden lg:flex items-center space-x-4">
              <div className="relative z-50">
                <LanguageSelector />
              </div>
              <div className="relative z-50">
                <ThemeToggle compact={!!isMobileMenuOpen} />
              </div>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`lg:hidden ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
              } hover:text-primary-600 transition-colors relative z-50`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={isMobileMenuOpen 
                    ? "M6 18L18 6M6 6l12 12" 
                    : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Burger Menu */}
      <Menu
        right
        isOpen={isMobileMenuOpen}
        onStateChange={({ isOpen }) => setIsMobileMenuOpen(isOpen)}
        styles={burgerStyles}
        className={`${theme === 'dark' ? 'dark' : ''}`}
        width={280}
        customBurgerIcon={false}
      >
        {/* Controls Section - Mobile Only */}
        <div className={`px-4 py-3 mb-2 border-b ${
          theme === 'dark' ? 'border-gray-700' : 'border-gray-200'
        }`}>
          <div className="flex items-center justify-between">
            <LanguageSelector />
            <ThemeToggle compact={true} />
          </div>
        </div>

        {/* Main Items */}
        {mainNavItems.map((item) => (
          <motion.div
            key={item.name}
            whileHover={{ 
              x: 10,
              transition: { duration: 0.2 }
            }}
          >
            <Link 
              href={`#${item.name.toLowerCase()}`}
              onClick={() => {
                handleNavClick(item.name.toLowerCase());
                setIsMobileMenuOpen(false);
              }}
              className={`block px-4 py-3 rounded-lg transition-colors ${
                activeSection === item.name.toLowerCase()
                  ? theme === 'dark'
                    ? 'bg-gray-800 text-primary-400'
                    : 'bg-gray-100 text-primary-600'
                  : theme === 'dark'
                    ? 'text-gray-300 hover:bg-gray-800'
                    : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              <div className="flex items-center gap-3">
                {item.icon}
                <span>{item.name}</span>
              </div>
            </Link>
          </motion.div>
        ))}

        {/* Divider */}
        <div className={`my-4 border-t ${
          theme === 'dark' ? 'border-gray-800' : 'border-gray-200'
        }`} />

        {/* More Items */}
        <div className="px-4 py-2 text-sm text-gray-500">
          More
        </div>
        {dropdownNavItems.map((item) => (
          <motion.div
            key={item.name}
            whileHover={{ 
              x: 10,
              transition: { duration: 0.2 }
            }}
          >
            <Link 
              href={`#${item.name.toLowerCase()}`}
              onClick={() => {
                handleNavClick(item.name.toLowerCase());
                setIsMobileMenuOpen(false);
              }}
              className={`block px-4 py-3 rounded-lg transition-colors ${
                activeSection === item.name.toLowerCase()
                  ? theme === 'dark'
                    ? 'bg-gray-800 text-primary-400'
                    : 'bg-gray-100 text-primary-600'
                  : theme === 'dark'
                    ? 'text-gray-300 hover:bg-gray-800'
                    : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              <div className="flex items-center gap-3">
                {item.icon}
                <span>{item.name}</span>
              </div>
            </Link>
          </motion.div>
        ))}
      </Menu>
    </motion.nav>
  );
};

export default Navbar; 