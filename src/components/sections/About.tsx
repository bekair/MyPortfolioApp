import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaLaptopCode, FaUserTie } from 'react-icons/fa';
import SectionTitle from '../common/SectionTitle';
import { useTheme } from '../../context/ThemeContext';
import { useTranslations } from 'next-intl';

const About: React.FC = () => {
  const { theme } = useTheme();
  const t = useTranslations("about");
  const highlights = [
    {
      icon: FaLaptopCode,
      title: t('highlights.first.title'),
      description: t('highlights.first.description'),
      color: "text-primary-500",
      bgColor: theme === 'dark' ? "bg-primary-900/20" : "bg-primary-50",
      borderColor: theme === 'dark' ? "border-primary-700" : "border-primary-200"
    },
    {
      icon: FaGraduationCap,
      title: t('highlights.second.title'),
      description: t('highlights.second.description'),
      color: "text-primary-500",
      bgColor: theme === 'dark' ? "bg-primary-900/20" : "bg-primary-50",
      borderColor: theme === 'dark' ? "border-primary-700" : "border-primary-200"
    },
    {
      icon: FaUserTie,
      title: t('highlights.third.title'),
      description: t('highlights.third.description'),
      color: "text-primary-500",
      bgColor: theme === 'dark' ? "bg-primary-900/20" : "bg-primary-50",
      borderColor: theme === 'dark' ? "border-primary-700" : "border-primary-200"
    }
  ];

  return (
    <section id="about" className="section-container bg-theme">
      <motion.div className="max-w-6xl mx-auto">
        <SectionTitle title={t('title')} />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {highlights.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className={`
                ${item.bgColor} 
                ${item.borderColor} 
                border 
                p-6 
                rounded-xl 
                hover:shadow-xl 
                transition-all 
                duration-300 
                transform 
                hover:-translate-y-1
                content-center
              `}
            >
              <div className="flex items-center gap-4">
                <div className={`text-4xl ${item.color}`}>
                  <item.icon />
                </div>
                <div>
                  <h3 className="font-bold text-lg">{item.title}</h3>
                  <p className="text-theme-secondary">{item.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Main content */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div className="space-y-6">
            <motion.p className="text-lg leading-relaxed text-theme-secondary">
              {t('mainContent.part1')}
            </motion.p>
            <motion.p className="text-lg leading-relaxed text-theme-secondary">
              {t('mainContent.part2')}
            </motion.p>
            <motion.p className="text-lg leading-relaxed text-theme-secondary">
              {t('mainContent.part3')}
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative max-w-xs mx-auto"
          >
            <div className={`absolute inset-0 rounded-3xl ${
              theme === 'dark'
                ? 'bg-gradient-to-br from-primary-900/50 to-blue-900/50'
                : 'bg-gradient-to-br from-primary-100 to-blue-100'
            } transform rotate-6`} />
            <img
              src="/images/profile.jpeg"
              alt={t('altProfileImage')}
              className="relative rounded-3xl shadow-lg w-full h-auto object-cover aspect-[4/5]"
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About; 