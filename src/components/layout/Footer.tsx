import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { useTranslations } from 'next-intl';

const Footer: React.FC = () => {
  const name = 'Bekir Can Baykal';
  const githubUrl = 'https://github.com/bekair';
  const linkedinUrl = 'https://www.linkedin.com/in/bekir-can-baykal-msc-1545157b';
  const t = useTranslations("footer");
  
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-bold">{name}</h3>
            <p className="text-gray-400">{t("specialty")}</p>
          </div>
          
          <div className="flex space-x-6">
            <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="hover:text-primary-400 transition">
              <FaGithub size={24} />
            </a>
            <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" className="hover:text-primary-400 transition">
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>
        
        <div className="mt-8 text-center text-gray-400 text-sm">
          © {new Date().getFullYear()} {name}. {t("copyright")}
        </div>
      </div>
    </footer>

  );
};

export default Footer; 