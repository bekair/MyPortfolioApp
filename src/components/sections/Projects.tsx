import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';
import { Project } from '../../types';
import SectionTitle from '../common/SectionTitle';
import { useTheme } from '../../context/ThemeContext';
import { useTranslations } from 'next-intl';

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  const { theme } = useTheme();
  const t = useTranslations("projects");

  return (
    <motion.div
      key={project.title}
      className={`p-6 rounded-xl transition-all duration-300 flex flex-col h-full ${
        theme === 'dark' 
          ? 'bg-gray-800 hover:bg-gray-750' 
          : 'bg-white hover:bg-gray-50'
      } shadow-lg hover:shadow-xl`}
    >
      <div className="relative aspect-video mb-4 rounded-lg overflow-hidden">
        <img
          src={project.imageUrl}
          alt={project.alt}
          className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        <div className="absolute bottom-4 left-4 text-white">
          <p className="text-sm opacity-75">{project.completionDate}</p>
        </div>
      </div>
      
      <div className="flex flex-col flex-grow">
        <h3 className="text-xl font-bold mb-2">
          {project.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          {project.description}
        </p>
        
        <div className="flex-grow" />
        
        <div className="flex flex-wrap gap-2 mb-4">
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
        
        <div className="flex gap-4">
          {project.githubUrl && (
            <motion.a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-2 ${
                theme === 'dark'
                  ? 'text-gray-300 hover:text-primary-400'
                  : 'text-gray-600 hover:text-primary-600'
              } transition-colors`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaGithub />
              <span>{t('viewCode')}</span>
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const Projects: React.FC = () => {
  const { theme } = useTheme();
  const t = useTranslations("projects");

  const projects: Project[] = [
    {
      id: 'bookstore',
      title: t('first.title'),
      alt: t('first.imageAlt'),
      description: t('first.description'),
      technologies: ['C#', '.NET Core', 'React', 'SQL Server', 'Entity Framework', 'Azure DevOps'],
      imageUrl: '/images/projects/bookstore.jpeg',
      completionDate: t('first.completionDate'),
      githubUrl: 'https://github.com/bekair/BookStore',
    },
    {
      id: 'assets-api',
      title: t('second.title'),
      alt: t('second.imageAlt'),
      description: t('second.description'),
      technologies: ['C#', '.NET Core', 'REST API', 'CSV Processing', 'Swagger'],
      imageUrl: '/images/projects/assets.jpeg',
      completionDate: t('second.completionDate'),
      githubUrl: 'https://github.com/bekair/AssetsApi',
    },
    {
      id: 'geojson-features',
      title: t('third.title'),
      alt: t('third.imageAlt'),
      description: t('third.description'),
      technologies: ['JavaScript', 'OpenStreetMap API', 'GeoJSON', 'XML Processing', 'Web UI'],
      imageUrl: '/images/projects/geojson-features.jpeg',
      completionDate: t('third.completionDate'),
      githubUrl: 'https://github.com/bekair/GeoJsonFeatures',
    },
    {
      id: 'robotic-moves',
      title: t('fourth.title'),
      alt: t('fourth.imageAlt'),
      description: t('fourth.description'),
      technologies: ['C#', '.NET Core', 'Clean Code', 'Unit Testing', 'Design Patterns'],
      imageUrl: '/images/projects/robotic-moves.jpeg',
      completionDate: t('fourth.completionDate'),
      githubUrl: 'https://github.com/bekair/RoboticMovesConsole',
    },
    {
      id: 'order-integration-api',
      title: t('fifth.title'),
      alt: t('fifth.imageAlt'),
      description: t('fifth.description'),
      technologies: ['C#', '.NET Core', 'REST API', 'ERP Integration', 'File Processing'],
      imageUrl: '/images/projects/order-integration.jpeg',
      completionDate: t('fifth.completionDate'),
      githubUrl: 'https://github.com/bekair/IntegrationAPI',
    },
    {
      id: 'smart-charging-poc',
      title: t('sixth.title'),
      alt: t('sixth.imageAlt'),
      description: t('sixth.description'),
      technologies: ['C#', '.NET Core', 'REST API', 'Swagger', 'Clean Architecture'],
      imageUrl: '/images/projects/smart-charging.jpeg',
      completionDate: t('sixth.completionDate'),
      githubUrl: 'https://github.com/bekair/SmartChargingPoC',
    }
  ];
  
  return (
    <section id="projects" className={`section-container ${
      theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'
    }`}>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <SectionTitle title={t('title')} />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects; 