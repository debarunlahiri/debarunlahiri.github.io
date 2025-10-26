import React from 'react';
import type { SkillCategory } from '../types';
import Section from './Section';

interface SkillsProps {
  skills: SkillCategory[];
}

const Skills: React.FC<SkillsProps> = ({ skills }) => {
  return (
    <Section title="Key Skills">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {skills.map((category) => (
          <div key={category.category} className="card-style p-6 rounded-xl transition-all duration-300 hover:-translate-y-1 glow-on-hover">
            <h3 className="text-lg font-bold text-gradient mb-4">{category.category}</h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span key={skill} className="bg-cyan-900/50 text-cyan-300 text-sm font-medium px-3 py-1 rounded-md">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Skills;
