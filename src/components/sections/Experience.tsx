import React from 'react';
import { motion } from 'framer-motion';
import { Experience as ExperienceType } from '../../types';
import { FaCalendar, FaTasks } from 'react-icons/fa';
import SectionTitle from '../common/SectionTitle';
import { useTheme } from '../../context/ThemeContext';

const experiences: ExperienceType[] = [
  {
    company: 'Accelleron (Andersen Lab)',
    position: 'Senior Software Engineer',
    duration: 'Jul 2022 - Present',
    description: [
      'The vessels are equipped with multiple engines and send data at specified intervals. The app analyzes the time-series data from the configured vessels. Our algorithms continuously evaluate this data and use it to generate recommendations.',
      'Involving in the development and maintenance of the Tekomar XPERT product.',
      'Refactoring the TimeSeries implementation to meet the specific requirements of a customer.',
      'Containerizing the newly developed approach using Docker.',
      'Deploying the Docker image onto an intranet server and conducting evaluations within that environment.'
    ],
    technologies: ['C#', '.NET', 'REST APIs', 'Scrum', 'Azure DevOps Server', 'Docker', 'Microsoft SQL Server', 'React.js', '.NET Core', 'Git', 'Microsoft Azure', 'Entity Framework (EF) Core', 'JIRA', 'Docker']
  },
  {
    company: 'ICTerra',
    position: 'Senior Software Engineer Technical Lead',
    duration: 'May 2021 - Jul 2022 · 1 year 3 months',
    description: [
      'As a team lead, collaborated with a team of five individuals, applying the Scrum methodology to develop three projects: Project Management Plan project, Prioritization, and Performance.',
      'Successfully delivered all three projects within a one-year timeframe, utilizing the following technologies: .NET Core 5, React, Redux Toolkit, PostGre SQL, and Material UI.',
      'Managed both customer relations and team coordination effectively.',
      'Provided valuable consultancy to the customer, specifically focusing on .Net Development.',
      'Supported the customer, Aselsan, one of the most important defense industry companies in Türkiye, in achieving their project goals and requirements.'
    ],
    technologies: ['.NET', '.NET Core', 'REST APIs', 'JavaScript', 'Redux', 'Team Leadership', 'PostgreSQL', 'React.js']
  },
  {
    company: 'Ante Group',
    position: 'Software Engineer',
    duration: 'Jul 2018 - May 2021 · ~3 years',
    description: [
      'Developed and maintained a disaster risk management system for the Ministry of Environment and Urban Planning using .Net MVC, MSSql DB, and JavaScript (September 2020 - May 2021).',
      'Contributed to the development and maintenance of a staff management system for the Turkish Court of Accounts, utilizing .Net MVC 5, Oracle DB, MSSql DB, Postgre SQL, JavaScript, and jQuery (February 2020 - September 2020).',
      'Collaborated on a GIS-focused web application, specifically a Map Widget, using React and JavaScript (May 2019 - February 2020).',
      'Conducted unit testing, addressed issues identified by SonarQube, refactored methods and classes for single responsibility, and upgraded code to Java 8 (July 2018 - May 2019).',
      'Led the refactoring of a GIS project in Java for an outsourced project at Havelsan (July 2018 - May 2019).'
    ],
    technologies: ['.NET', '.NET Core', 'REST APIs', 'JavaScript', 'Redux', 'Team Leadership', 'PostgreSQL', 'React.js']
  }
];

const Experience: React.FC = () => {
  const { theme } = useTheme();

  return (
    <section id="experience" className={`section-container ${
      theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'
    }`}>
      <SectionTitle title="Professional Journey" />
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
                      ? 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
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