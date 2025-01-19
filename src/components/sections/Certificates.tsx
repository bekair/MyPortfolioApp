import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaCertificate, FaExternalLinkAlt } from 'react-icons/fa';
import SectionTitle from '../common/SectionTitle';
import { useTheme } from '../../context/ThemeContext';
import CertificateModal from '../common/CertificateModal';

interface Certificate {
  title: string;
  issuer: string;
  date: string;
  credentialLink?: string;
  skills?: string;
  imageUrl?: string;
}

const Certificates: React.FC = () => {
  const { theme } = useTheme();
  const [visibleItems, setVisibleItems] = useState(3);
  const [selectedCertificate, setSelectedCertificate] = useState<Certificate | null>(null);
  
  const certificates: Certificate[] = [
    {
      title: "ASP .NET Web Application Development (.NET Core) Certificate",
      issuer: "Coder Bilişim Akademisi",
      date: "From Sep 2016 to Nov 2016",
      skills: "Skills: .NET Core, .NET, C#",
      imageUrl: "/images/certificates/aspnet-core-web-application-development.png"
    },
    {
      title: "Designing RESTful APIs",
      issuer: "LinkedIn",
      date: "Issued May 2022",
      credentialLink: "https://www.linkedin.com/learning/certificates/1583f9efa7d84d0bc832bdb35d659e119675a32d25fb1476b8048914205929c3"
    },
    {
      title: "Microsoft SQL Server Certificate",
      issuer: "Coder Bilişim Akademisi",
      date: "From Jun 2016 to Aug 2016",
      imageUrl: "/images/certificates/microsoft-sql-server.png",
      skills: "Skills: .NET"
    },
    {
      title: "Learning REST APIs",
      issuer: "LinkedIn",
      date: "May 2022",
      credentialLink: "https://www.linkedin.com/learning/certificates/f244e7d332dc17d94b2ba0e2d34331244ef76789b201f24a6833bec991dc9c7d"
    },
    {
      title: "Asp .NET C#, SQL and Web Forms Software Specialist Certificate",
      issuer: "Vektörel Bilişim",
      date: "From Jan 2015 to Jul 2015",
      credentialLink: "#",
      imageUrl: "/images/certificates/asp-net-sql-web-forms.png",
      skills: "Skills: .NET"
    },
    {
      title: "HTTP Essential Training",
      issuer: "LinkedIn",
      date: "Issued May 2022",
      credentialLink: "https://www.linkedin.com/learning/certificates/05999edc61ecbab9e573380dbf496b08ae2cd44b80b1992484114f0158ac9fc5",
    },
    {
      title: "What is Data Science?",
      issuer: "Coursera",
      date: "Issued Feb 2020",
      credentialLink: "https://www.coursera.org/account/accomplishments/verify/563MU28PJ9ZM",
    },
    {
      title: "C# .NET Programming Certificate",
      issuer: "Coder Bilişim Akademisi",
      date: "From Jul 2016 to Sep 2016",
      skills: "Skills: .NET",
      imageUrl: "/images/certificates/c-net-programming.png"
    },
    {
      title: "Web Design Certificate",
      issuer: "Coder Bilişim Akademisi",
      date: "From May 2016 to Jul 2016",
      skills: "Skills: .NET, HTML, CSS, JavaScript",
      imageUrl: "/images/certificates/web-design.png"
    }
  ];

  const showMore = () => {
    if (visibleItems === 3) {
      setVisibleItems(certificates.length);
    } else {
      setVisibleItems(3);
    }
  };

  const handleCertificateClick = (cert: Certificate) => {
    if (cert.credentialLink && cert.credentialLink !== "#") {
      // Open the credential link in a new tab
      window.open(cert.credentialLink, '_blank', 'noopener noreferrer');
    } else {
      // Show the certificate image in modal
      setSelectedCertificate(cert);
    }
  };

  return (
    <section id="certificates" className={`section-container ${
      theme === 'dark' ? 'bg-gray-900' : 'bg-white'
    }`}>
      <div className="max-w-6xl mx-auto">
        <SectionTitle title="Certifications" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {certificates.slice(0, visibleItems).map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className={`p-6 rounded-xl transition-all duration-300 flex flex-col h-full ${
                theme === 'dark' 
                  ? 'bg-gray-800 hover:bg-gray-750' 
                  : 'bg-white hover:bg-gray-50'
              } shadow-lg hover:shadow-xl`}
            >
              <div className="flex flex-col items-center text-center flex-1">
                <div className={`w-16 h-16 rounded-full flex items-center justify-center bg-gradient-to-r mb-4 ${
                  theme === 'dark' ? 'from-primary-600 to-primary-400' : 'from-primary-500 to-primary-300'
                }`}>
                  <FaCertificate className="text-white text-2xl" />
                </div>
                
                <div className="flex-1">
                  <h3 className={`text-lg font-bold ${
                    theme === 'dark' ? 'text-gray-100' : 'text-gray-900'
                  }`}>
                    {cert.title}
                  </h3>
                  <p className={`text-sm font-medium ${
                    theme === 'dark' ? 'text-primary-400' : 'text-primary-600'
                  }`}>
                    {cert.issuer}
                  </p>
                  <p className={`text-sm ${
                    theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    {cert.date}
                  </p>
                  {cert.skills && (
                    <p className={`text-xs mt-2 ${
                      theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                      {cert.skills}
                    </p>
                  )}
                </div>
              </div>
              
              <div className="flex justify-center mt-6">
                <motion.button
                  onClick={() => handleCertificateClick(cert)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`
                    border-2 border-primary-600 text-primary-600 px-6 py-2 rounded-full 
                    transition-all hover:shadow-lg transform hover:-translate-y-1
                    flex items-center gap-2 
                    ${theme === 'dark' 
                      ? 'hover:bg-primary-900/30'
                      : 'hover:bg-primary-50'
                    }
                  `}
                >
                  {cert.credentialLink && cert.credentialLink !== "#" ? (
                    <>
                      View Credential
                      <FaExternalLinkAlt size={14} />
                    </>
                  ) : (
                    "Show"
                  )}
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {certificates.length > 3 && (
          <motion.div 
            className="flex justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <motion.button
              onClick={showMore}
              className={`flex items-center gap-2 px-6 py-3 rounded-full ${
                theme === 'dark'
                  ? 'bg-gray-800 hover:bg-gray-700 text-gray-300'
                  : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
              } transition-colors`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {visibleItems === 3 ? 'Load More' : 'Show Less'}
            </motion.button>
          </motion.div>
        )}
      </div>

      <CertificateModal 
        isOpen={!!selectedCertificate}
        onClose={() => setSelectedCertificate(null)}
        certificate={selectedCertificate}
      />
    </section>
  );
};

export default Certificates; 