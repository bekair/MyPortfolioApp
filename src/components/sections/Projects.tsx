import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';
import { Project } from '../../types';
import SectionTitle from '../common/SectionTitle';
import { useTheme } from '../../context/ThemeContext';

const projects: Project[] = [
  {
    id: 'bookstore',
    title: 'BookStore',
    alt: 'Library/Bookshelf',
    description: 'This is the implementation of a Bookstore system as part of an MSc. Software Engineering Senior Project. It is a secondhand book selling and ordering application. The project utilizes a range of technologies and demonstrates skills in software development, architecture design, and project management.',
    technologies: ['C#', '.NET Core', 'React', 'SQL Server', 'Entity Framework', 'Azure DevOps'],
    imageUrl: '/images/projects/bookstore.jpeg',
    completionDate: 'January 2020',
    githubUrl: 'https://github.com/bekair/BookStore',
  },
  {
    id: 'assets-api',
    title: 'Assets API',
    alt: 'Abstract digital data visualization',
    description: 'This project implements a simple service that provides information about different assets available on the market. The service reads information about assets from a CSV file and provides various endpoints for asset management. The assets are defined by name and ID, with each asset described by a predefined list of properties.',
    technologies: ['C#', '.NET Core', 'REST API', 'CSV Processing', 'Swagger'],
    imageUrl: '/images/projects/assets.jpeg',
    completionDate: 'January 2021',
    githubUrl: 'https://github.com/bekair/AssetsApi',
  },
  {
    id: 'geojson-features',
    title: 'GeoJson Features',
    alt: 'Map visualization representing geographical data',
    description: 'The application retrieves features from OpenStreetMap using the OSM API, converts the XML data to GeoJSON format with osmtogeojson.js, and parses it into a list of GeoJSON features for use in the Web UI.',
    technologies: ['JavaScript', 'OpenStreetMap API', 'GeoJSON', 'XML Processing', 'Web UI'],
    imageUrl: '/images/projects/geojson-features.jpeg',
    completionDate: 'May 2021',
    githubUrl: 'https://github.com/bekair/GeoJsonFeatures',
  },
  {
    id: 'robotic-moves',
    title: 'Mars Robotic Moves',
    alt: 'Robot navigating on a grid',
    description: 'This project is a coding exercise to improve clean coding and abstraction skills by simulating robot navigation on a bounded grid representing Mars. Robots follow instructions (L, R, F), with "LOST" robots leaving a scent to prevent repeated falls. The program processes each robot sequentially and outputs their final positions.',
    technologies: ['C#', '.NET Core', 'Clean Code', 'Unit Testing', 'Design Patterns'],
    imageUrl: '/images/projects/robotic-moves.jpeg',
    completionDate: 'July 2022',
    githubUrl: 'https://github.com/bekair/RoboticMovesConsole',
  },
  {
    id: 'order-integration-api',
    title: 'Order Integration API',
    alt: 'Data integration and workflow visualization',
    description: 'Integration API is a small POC solution designed to process supplier-side orders through flat file integration, price validation, stock management, and ERP system communication. The system handles fixed-length order documents (.sdf files) and performs comprehensive validation and processing workflows.',
    technologies: ['C#', '.NET Core', 'REST API', 'ERP Integration', 'File Processing'],
    imageUrl: '/images/projects/order-integration.jpeg',
    completionDate: 'August 2022',
    githubUrl: 'https://github.com/bekair/IntegrationAPI',
  },
  {
    id: 'smart-charging-poc',
    title: 'Smart Charging PoC',
    alt: 'Electric vehicle charging station',
    description: 'A small POC application with a RESTful API implementation for managing electric vehicle charging stations, groups, and connectors with capacity management.',
    technologies: ['C#', '.NET Core', 'REST API', 'Swagger', 'Clean Architecture'],
    imageUrl: '/images/projects/smart-charging.jpeg',
    completionDate: 'November 2022',
    githubUrl: 'https://github.com/bekair/SmartChargingPoC',
  }
];

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  const { theme } = useTheme();
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`${
        theme === 'dark' 
          ? 'bg-gray-800 hover:shadow-primary-900/20' 
          : 'bg-white hover:shadow-xl'
      } rounded-xl shadow-lg overflow-hidden transition-shadow duration-300`}
    >
      <div className="relative aspect-video overflow-hidden">
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
      
      <div className="p-6">
        <h3 className={`text-xl font-bold mb-2 ${
          theme === 'dark' ? 'text-gray-100' : 'text-gray-900'
        }`}>{project.title}</h3>
        <p className={`mb-4 ${
          theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
        }`}>{project.description}</p>
        
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
              <span>View Code</span>
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const Projects: React.FC = () => {
  const { theme } = useTheme();
  
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
        <SectionTitle title="Featured Projects" />
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