import React from 'react';
import { motion } from 'framer-motion';
import { Experience as ExperienceType } from '../../types';
import { FaCalendar, FaTasks } from 'react-icons/fa';
import SectionTitle from '../common/SectionTitle';
import { useTheme } from '../../context/ThemeContext';
import { useTranslations } from 'next-intl';

const Experience: React.FC = () => {
  const { theme } = useTheme();
  const t = useTranslations("experiences");

  const experiences: ExperienceType[] = [
    {
      company: 'Accelleron (Andersen Lab)',
      position: t('first.position'),
      duration: t('first.duration'),
      description: [
        t('first.descriptions.first'),
        t('first.descriptions.second'),
        t('first.descriptions.third'),
        t('first.descriptions.fourth'),
        t('first.descriptions.fifth')
      ],
      technologies: [
        t('first.technologies.first'),
        t('first.technologies.second'),
        t('first.technologies.third'),
        t('first.technologies.fourth'),
        t('first.technologies.fifth'),
        t('first.technologies.sixth'),
        t('first.technologies.seventh'),
        t('first.technologies.eighth'),
        t('first.technologies.ninth'),
        t('first.technologies.tenth'),
        t('first.technologies.eleventh'),
        t('first.technologies.twelfth'),
        t('first.technologies.thirteenth'),
        t('first.technologies.fourteenth')
      ]
    },
    {
      company: 'ICTerra',
      position: t('second.position'),
      duration: t('second.duration'),
      description: [
        t('second.descriptions.first'),
        t('second.descriptions.second'),
        t('second.descriptions.third'),
        t('second.descriptions.fourth'),
        t('second.descriptions.fifth')
      ],
      technologies: [
        t('second.technologies.first'),
        t('second.technologies.second'),
        t('second.technologies.third'),
        t('second.technologies.fourth'),
        t('second.technologies.fifth'),
        t('second.technologies.sixth'),
        t('second.technologies.seventh'),
        t('second.technologies.eighth')
      ]
    },
    {
      company: 'Ante Grup',
      position: t('third.position'),
      duration: t('third.duration'),
      description: [
        t('third.descriptions.first'),
        t('third.descriptions.second'),
        t('third.descriptions.third'),
        t('third.descriptions.fourth'),
        t('third.descriptions.fifth')
      ],
      technologies: [
        t('third.technologies.first'),
        t('third.technologies.second'),
        t('third.technologies.third'),
        t('third.technologies.fourth'),
        t('third.technologies.fifth'),
        t('third.technologies.sixth'),
        t('third.technologies.seventh'),
        t('third.technologies.eighth')
      ]
    }
  ];


  return (
    <section id="experiences" className={`section-container ${
      theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'
    }`}>
      <SectionTitle title={t('title')} />
      <div className="max-w-4xl mx-auto">
        {experiences.map((exp, index) => (
          <motion.div
            key={exp.company}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className={`${
              theme === 'dark' ? 'bg-gray-800' : 'bg-white'
            } rounded-xl shadow-lg p-6 mb-8`}
          >
            <div className="flex flex-col md:flex-row gap-4 md:items-center mb-4">
              <h3 className={`text-xl font-bold ${
                theme === 'dark' ? 'text-gray-100' : 'text-gray-900'
              }`}>
                {exp.position}
              </h3>
              <div className={`flex items-center gap-2 ${
                theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
              }`}>
                <FaCalendar className="text-sm" />
                <span className="text-sm">{exp.duration}</span>
              </div>
            </div>

            <div className={`flex items-center gap-2 mb-4 ${
              theme === 'dark' ? 'text-primary-400' : 'text-primary-600'
            }`}>
              <FaTasks />
              <span>{exp.company}</span>
            </div>

            <ul className="space-y-2 mb-4">
              {exp.description.map((desc, i) => (
                <li 
                  key={i}
                  className={`flex items-start gap-2 ${
                    theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                  }`}
                >
                  <span className="mt-1.5">•</span>
                  <span>{desc}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-2">
              {exp.technologies.map((tech, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.2, delay: 0.05 * i }}
                  className={`px-3 py-1 rounded-full text-sm font-medium ${
                    theme === 'dark'
                      ? 'bg-primary-900/30 text-primary-400'
                      : 'bg-primary-50 text-primary-600'
                  } transition-colors duration-200`}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience; 