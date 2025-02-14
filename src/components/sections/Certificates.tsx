"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaCertificate, FaExternalLinkAlt } from 'react-icons/fa';
import SectionTitle from '../common/SectionTitle';
import { useTheme } from '../../context/ThemeContext';
import CertificateModal from '../common/CertificateModal';
import { useTranslations } from 'next-intl';

interface Certificate {
  title: string;
  issuer: string;
  date: string;
  credentialLink?: string;
  skills?: string[];
  imageUrl?: string;
}

const Certificates: React.FC = () => {
  const { theme } = useTheme();
  const [visibleItems, setVisibleItems] = useState(3);
  const [selectedCertificate, setSelectedCertificate] = useState<Certificate | null>(null);
  const t = useTranslations('certificates');

  const certificates: Certificate[] = [
    {
      title: t('first.title'),
      issuer: t('first.issuer'),
      date: t('first.date'),
      skills: [
        t('first.skills.first'), 
        t('first.skills.second'), 
        t('first.skills.third')
      ],
      imageUrl: "/images/certificates/aspnet-core-web-application-development.png"
    },
    {
      title: t('second.title'),
      issuer: t('second.issuer'),
      date: t('second.date'),
      skills: [
        t('second.skills.first'), 
        t('second.skills.second'), 
        t('second.skills.third')
      ],
      credentialLink: "https://www.linkedin.com/learning/certificates/1583f9efa7d84d0bc832bdb35d659e119675a32d25fb1476b8048914205929c3"
    },
    {
      title: t('third.title'),
      issuer: t('third.issuer'),
      date: t('third.date'),
      imageUrl: "/images/certificates/microsoft-sql-server.png",
      skills: [
        t('third.skills.first'), 
        t('third.skills.second'), 
        t('third.skills.third')
      ]
    },
    {
      title: t('fourth.title'),
      issuer: t('fourth.issuer'),
      date: t('fourth.date'),
      skills: [
        t('fourth.skills.first'), 
        t('fourth.skills.second')
      ],
      credentialLink: "https://www.linkedin.com/learning/certificates/f244e7d332dc17d94b2ba0e2d34331244ef76789b201f24a6833bec991dc9c7d"
    },
    {
      title: t('fifth.title'),
      issuer: t('fifth.issuer'),
      date: t('fifth.date'),
      credentialLink: "#",
      imageUrl: "/images/certificates/asp-net-sql-web-forms.png",
      skills: [
        t('fifth.skills.first'), 
        t('fifth.skills.second'), 
        t('fifth.skills.third')
      ]
    },
    {
      title: t('sixth.title'),
      issuer: t('sixth.issuer'),
      date: t('sixth.date'),
      skills: [
        t('sixth.skills.first')
      ],
      credentialLink: "https://www.linkedin.com/learning/certificates/05999edc61ecbab9e573380dbf496b08ae2cd44b80b1992484114f0158ac9fc5",
    },
    {
      title: t('seventh.title'),
      issuer: t('seventh.issuer'),
      date: t('seventh.date'),
      skills: [
        t('seventh.skills.first'), 
        t('seventh.skills.second')
      ],
      credentialLink: "https://www.coursera.org/account/accomplishments/verify/563MU28PJ9ZM",
    },
    {
      title: t('eighth.title'),
      issuer: t('eighth.issuer'),
      date: t('eighth.date'),
      skills: [
        t('eighth.skills.first')
      ],
      imageUrl: "/images/certificates/c-net-programming.png"
    },
    {
      title: t('ninth.title'),
      issuer: t('ninth.issuer'),
      date: t('ninth.date'),
      skills: [
        t('ninth.skills.first'), 
        t('ninth.skills.second'), 
        t('ninth.skills.third'), 
        t('ninth.skills.fourth')
      ],
      imageUrl: "/images/certificates/web-design.png"
    }
  ];

  const showMore = () => {
    if (visibleItems === 3) {
      setVisibleItems(certificates.length);
    } else {
      setVisibleItems(3);
      // Scroll to the top of the certificates section when showing less
      const certificatesSection = document.getElementById('certificates');
      if (certificatesSection) {
        certificatesSection.scrollIntoView({ behavior: 'smooth' });
      }
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
        <SectionTitle title={t('title')} />

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
                    <div className="flex flex-wrap gap-2 mt-2 justify-center">
                      {cert.skills.map((skill) => (
                        <span
                          key={skill}
                          className={`px-2 py-1 rounded-full text-xs font-medium ${
                            theme === 'dark'
                              ? 'bg-primary-900/30 text-primary-400'
                              : 'bg-primary-50 text-primary-600'
                          }`}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
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
                      {t('viewCredential')}
                      <FaExternalLinkAlt size={14} />
                    </>

                  ) : (
                    t('showCredential')
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
              {visibleItems === 3 ? t('button.showMore') : t('button.showLess')}
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