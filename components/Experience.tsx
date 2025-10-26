import React from 'react';
import type { ExperienceItem } from '../types';
import Section from './Section';
import { BriefcaseIcon } from './IconComponents';

interface ExperienceProps {
  experience: ExperienceItem[];
}

const Experience: React.FC<ExperienceProps> = ({ experience }) => {
  return (
    <Section title="Experience">
      <div className="relative border-l-2 border-cyan-500/30 ml-3">
        {experience.map((job, index) => (
          <div key={index} className="mb-10 ml-10">
            <span className="absolute flex items-center justify-center w-8 h-8 bg-gray-800 rounded-full -left-4 ring-4 ring-gray-900">
              <BriefcaseIcon className="w-5 h-5 text-cyan-400" />
            </span>
            <div className="card-style p-6 rounded-xl shadow-lg transition-all duration-300 hover:shadow-cyan-500/20 hover:-translate-y-1">
              <div className="flex flex-col sm:flex-row justify-between sm:items-center mb-1">
                <h3 className="text-xl font-bold text-white">{job.role}</h3>
                <time className="block sm:hidden text-sm font-normal leading-none text-gray-500 mt-1">{job.period}</time>
              </div>
              <div className="flex flex-col sm:flex-row justify-between sm:items-center mb-3">
                <p className="text-md font-semibold text-gradient">{job.company}</p>
                 <time className="hidden sm:block text-sm font-normal leading-none text-gray-500">{job.period}</time>
              </div>
               <p className="text-sm text-gray-400 mb-4">{job.location}</p>
              <ul className="list-disc list-inside space-y-2 text-gray-400 font-light">
                {job.tasks.map((task, i) => (
                  <li key={i}>{task}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Experience;