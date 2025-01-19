import React from 'react';

interface SectionTitleProps {
  title: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title }) => {
  return (
    <div className="flex items-center gap-4 mb-12">
      <div className="flex-1 h-px bg-gray-200" />
      <h2 className="section-title m-0">{title}</h2>
      <div className="flex-1 h-px bg-gray-200" />
    </div>
  );
};

export default SectionTitle; 