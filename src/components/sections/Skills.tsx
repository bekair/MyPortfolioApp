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

const skillCategories = [
  {
    title: "Backend Development",
    skills: [
      { name: '.NET Core', level: 95, icon: SiDotnet },
      { name: 'C#', level: 95, icon: SiCsharp },
      { name: 'REST APIs', level: 90, icon: FaServer },
      { name: 'Entity Framework', level: 90, icon: FaMicrosoft },
      { name: 'SQL Server', level: 90, icon: SiMicrosoftsqlserver },
    ]
  },
  {
    title: "Frontend Development",
    skills: [
      { name: 'React.js', level: 85, icon: FaReact },
      { name: 'TypeScript', level: 85, icon: SiTypescript },
      { name: 'JavaScript', level: 85, icon: FaJs },
      { name: 'Redux', level: 85, icon: SiRedux },
    ]
  },
  {
    title: "DevOps & Tools",
    skills: [
      { name: 'Azure DevOps', level: 90, icon: SiAzuredevops },
      { name: 'Docker', level: 85, icon: FaDocker },
      { name: 'Git', level: 90, icon: FaGitAlt },
    ]
  }
];

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
        <SectionTitle title="Skills & Expertise" />
        
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