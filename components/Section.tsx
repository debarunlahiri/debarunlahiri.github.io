import React from 'react';

interface SectionProps {
  title: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ title, children }) => {
  return (
    <section>
      <div className="flex items-center gap-4 mb-8">
        <h2 className="text-3xl font-bold text-white tracking-wide">{title}</h2>
        <div className="h-px flex-grow bg-gradient-to-r from-cyan-500 to-transparent"></div>
      </div>
      {children}
    </section>
  );
};

export default Section;