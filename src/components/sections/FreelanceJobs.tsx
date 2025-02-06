import React from 'react';
import { motion } from 'framer-motion';
import { FaShoppingCart, FaBitcoin, FaStore } from 'react-icons/fa';
import SectionTitle from '../common/SectionTitle';
import { useTheme } from '../../context/ThemeContext';
import { useTranslations } from 'next-intl';

const FreelanceJobs: React.FC = () => {
  const { theme } = useTheme();
  const t = useTranslations('freelance');

  const projects = [
    {
      icon: FaShoppingCart,
      title: t('first.title'),
      duration: t('first.duration'),
      description: t('first.description'),
      technologies: [
        t('first.technologies.first'), 
        t('first.technologies.second'), 
        t('first.technologies.third'), 
        t('first.technologies.fourth'), 
        t('first.technologies.fifth')
      ]
    },
    {
      icon: FaBitcoin,
      title: t('second.title'),
      duration: t('second.duration'),
      description: t('second.description'),
      technologies: [
        t('second.technologies.first'),
        t('second.technologies.second'),
        t('second.technologies.third'),
        t('second.technologies.fourth'),
        t('second.technologies.fifth')
      ]
    },
    {
      icon: FaStore,
      title: t('third.title'),
      duration: t('third.duration'),
      description: t('third.description'),
      technologies: [
        t('third.technologies.first'),
        t('third.technologies.second'),
        t('third.technologies.third'),
        t('third.technologies.fourth'),
        t('third.technologies.fifth')
      ]
    }
  ];

  return (
    <section id="freelance" className={`section-container ${
      theme === 'dark' ? 'bg-gray-900' : 'bg-white'
    }`}>
      <div className="max-w-6xl mx-auto">
        <SectionTitle title={t('title')} />

        <div className="grid grid-cols-1 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className={`p-6 rounded-xl transition-all duration-300 ${
                theme === 'dark' 
                  ? 'bg-gray-800 hover:bg-gray-750' 
                  : 'bg-white hover:bg-gray-50'
              } shadow-lg hover:shadow-xl`}
            >
              <div className="flex items-start gap-6">
                <div className={`text-4xl ${
                  theme === 'dark' ? 'text-primary-400' : 'text-primary-600'
                }`}>
                  <project.icon />
                </div>
                <div className="space-y-4">
                  <div>
                    <h3 className={`text-xl font-bold ${
                      theme === 'dark' ? 'text-gray-100' : 'text-gray-900'
                    }`}>
                      {project.title}
                    </h3>
                    <p className={`text-sm ${
                      theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                      {t('duration')}: {project.duration}
                    </p>
                  </div>
                  <p className={`text-base leading-relaxed ${
                    theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className={`px-3 py-1 rounded-full text-sm font-medium ${
                          theme === 'dark'
                            ? 'bg-primary-900/30 text-primary-400'
                            : 'bg-primary-50 text-primary-600'
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FreelanceJobs; 