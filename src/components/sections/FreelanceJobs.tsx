import React from 'react';
import { motion } from 'framer-motion';
import { FaShoppingCart, FaBitcoin, FaStore } from 'react-icons/fa';
import SectionTitle from '../common/SectionTitle';
import { useTheme } from '../../context/ThemeContext';

const FreelanceJobs: React.FC = () => {
  const { theme } = useTheme();

  const projects = [
    {
      icon: FaShoppingCart,
      title: "Grocery Web App",
      duration: "1 year",
      description: "Architected and developed a comprehensive e-commerce solution for a grocery business startup. Implemented full-stack development using ASP.NET MVC, creating a scalable architecture that handled inventory management, order processing, and user authentication. Designed and implemented both customer-facing interfaces and administrative dashboards, ensuring a seamless shopping experience.",
      technologies: ["ASP.NET MVC", "SQL Server", "JavaScript", "Bootstrap", "Entity Framework"]
    },
    {
      icon: FaBitcoin,
      title: "Orbit Crypto",
      duration: "2 months",
      description: "Led frontend development for a cryptocurrency platform specializing in token launches and funding operations. Engineered robust wallet integration systems and implemented complex blockchain interactions using React. Developed intuitive user interfaces for token management, funding operations, and real-time cryptocurrency tracking.",
      technologies: ["React", "Web3.js", "TypeScript", "Tailwind CSS", "MetaMask Integration"]
    },
    {
      icon: FaStore,
      title: "Wholesale E-commerce Platform",
      duration: "1 year",
      description: "Spearheaded full-stack development of a wholesale e-commerce platform, focusing on B2B transactions. Implemented complex database queries for bulk order processing and integrated multiple third-party services for payment processing, shipping, and e-invoice management. Developed responsive user interfaces optimized for wholesale operations.",
      technologies: ["ASP.NET Core", "React", "SQL Server", "Redis", "RESTful APIs"]
    }
  ];

  return (
    <section id="freelance" className={`section-container ${
      theme === 'dark' ? 'bg-gray-900' : 'bg-white'
    }`}>
      <div className="max-w-6xl mx-auto">
        <SectionTitle title="Freelance Projects" />
        
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
                      Duration: {project.duration}
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
                        className={`px-3 py-1 text-sm rounded-full ${
                          theme === 'dark'
                            ? 'bg-gray-700 text-gray-300'
                            : 'bg-gray-100 text-gray-700'
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