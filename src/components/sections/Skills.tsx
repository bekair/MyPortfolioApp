import React from 'react';
import { motion } from 'framer-motion';
import { Skill } from '../../types';
import { 
  FaServer,
  FaDocker, 
  FaGitAlt,
  FaReact,
  FaMicrosoft,
  FaJs
} from 'react-icons/fa';
import { 
  SiDotnet, 
  SiCsharp, 
  SiTypescript,
  SiAzuredevops,
  SiMicrosoftsqlserver,
  SiRedux
} from 'react-icons/si';
import SectionTitle from '../common/SectionTitle';
import { useTheme } from '../../context/ThemeContext';
import { useTranslations } from 'next-intl';

const SkillCard: React.FC<{ skill: Skill }> = ({ skill }) => {
  const { theme } = useTheme();
  const Icon = skill.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ 
        scale: 1.05,
        boxShadow: theme === 'dark' 
          ? "0 10px 30px -15px rgba(2, 12, 27, 0.9)"
          : "0 10px 30px -15px rgba(2, 12, 27, 0.7)"
      }}
      className={`relative p-6 ${
        theme === 'dark' 
          ? 'bg-gray-800 shadow-gray-900/50' 
          : 'bg-white shadow-md'
      } rounded-xl transition-all duration-300 group`}
    >
      <div className="flex items-center gap-4">
        <div className={`${
          theme === 'dark' ? 'text-primary-400' : 'text-primary-600'
        } text-3xl group-hover:scale-110 transition-transform duration-300`}>
          <Icon />
        </div>
        <div>
          <h3 className={`text-lg font-bold ${
            theme === 'dark' ? 'text-gray-100' : 'text-gray-900'
          }`}>{skill.name}</h3>
          <motion.div 
            className={`h-1 w-0 ${
              theme === 'dark' ? 'bg-primary-400' : 'bg-primary-500'
            } mt-1 rounded`}
            whileInView={{ width: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
        </div>
      </div>
    </motion.div>
  );
};

const Skills: React.FC = () => {
  const { theme } = useTheme();
  const t = useTranslations("skills");
  const skillCategories = [
    {
      title: t('categories.first.title'),
      skills: [
        { name: '.NET Core', level: 95, icon: SiDotnet },
        { name: 'C#', level: 95, icon: SiCsharp },
        { name: 'REST APIs', level: 90, icon: FaServer },
        { name: 'Entity Framework', level: 90, icon: FaMicrosoft },
        { name: 'SQL Server', level: 90, icon: SiMicrosoftsqlserver },
      ]
    },
    {
      title: t('categories.second.title'),
      skills: [
        { name: 'React.js', level: 85, icon: FaReact },
        { name: 'TypeScript', level: 85, icon: SiTypescript },
        { name: 'JavaScript', level: 85, icon: FaJs },
        { name: 'Redux', level: 85, icon: SiRedux },

      ]
    },
    {
      title: t('categories.third.title'),
      skills: [
        { name: 'Azure DevOps', level: 90, icon: SiAzuredevops },
        { name: 'Docker', level: 85, icon: FaDocker },
        { name: 'Git', level: 90, icon: FaGitAlt },
      ]
    }
  ];

  const experienceTimeline = [
    {
      year: "10+",
      area: t('timeline.first.area'),
      description: t('timeline.first.description')
    },
    {
      year: "6+",
      area: t('timeline.second.area'),
      description: t('timeline.second.description')
    },
    {
      year: "2.5+",
      area: t('timeline.third.area'),
      description: t('timeline.third.description')
    }
  ];

  return (
    <section id="skills" className={`section-container ${
      theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'
    }`}>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <SectionTitle title={t('title')} />
        {/* Experience Timeline */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {experienceTimeline.map((exp, index) => (
              <motion.div
                key={exp.area}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className={`p-6 rounded-xl border-2 ${
                  theme === 'dark' 
                    ? 'border-primary-700 bg-primary-900/10' 
                    : 'border-primary-200 bg-primary-50'
                } text-center hover:transform hover:-translate-y-1 transition-all duration-300`}
              >
                <div className={`text-4xl font-bold mb-2 ${
                  theme === 'dark' ? 'text-primary-400' : 'text-primary-600'
                }`}>
                  {exp.year}
                </div>
                <div className="text-lg font-semibold mb-1">{exp.area}</div>
                <div className="text-sm text-theme-secondary">{exp.description}</div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="space-y-12 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <h3 className={`text-2xl font-bold mb-6 text-center ${
                theme === 'dark' ? 'text-gray-100' : 'text-gray-800'
              }`}>
                {category.title}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.skills.map((skill) => (
                  <SkillCard key={skill.name} skill={skill} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills; 