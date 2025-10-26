import React from 'react';
import type { EducationItem } from '../types';
import Section from './Section';
import { GraduationCapIcon } from './IconComponents';

interface EducationProps {
  education: EducationItem[];
}

const Education: React.FC<EducationProps> = ({ education }) => {
  return (
    <Section title="Education">
      <div className="space-y-6">
        {education.map((item, index) => (
          <div key={index} className="card-style p-6 rounded-xl shadow-md flex items-center space-x-6 transition-all duration-300 hover:shadow-cyan-500/20 hover:-translate-y-1">
            <div className="bg-gray-800 p-3 rounded-full">
              <GraduationCapIcon className="h-8 w-8 text-cyan-400"/>
            </div>
            <div className="flex-grow flex flex-col sm:flex-row justify-between sm:items-center">
              <div>
                <h3 className="text-lg font-bold text-white">{item.institution}</h3>
                <p className="text-md text-gradient">{item.degree}</p>
              </div>
              <div className="text-sm text-gray-500 mt-2 sm:mt-0 sm:text-right">
                <p>{item.period}</p>
                <p>{item.location}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Education;