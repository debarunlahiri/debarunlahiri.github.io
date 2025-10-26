import React from 'react';
import type { Project } from '../types';
import Section from './Section';

interface ProjectsProps {
  projects: Project[];
}

const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  return (
    <Section title="Projects">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="card-style p-6 rounded-xl flex flex-col transition-all duration-300 hover:-translate-y-1 glow-on-hover">
            <h3 className="text-xl font-bold text-gradient mb-2">{project.title}</h3>
            <p className="text-gray-400 mb-4 flex-grow font-light">{project.description}</p>
            <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-gray-700/50">
              {project.techStack.map((tech) => (
                <span key={tech} className="bg-cyan-900/50 text-cyan-300 text-xs font-semibold px-2.5 py-1 rounded-full">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Projects;