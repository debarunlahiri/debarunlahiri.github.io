import React from 'react';
import { portfolioData } from './constants';
import Header from './components/Header';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import { GithubIcon, MailIcon, PhoneIcon } from './components/IconComponents';

const App: React.FC = () => {
  return (
    <div className="bg-gray-900 text-gray-300 font-light leading-relaxed">
      <div className="container mx-auto max-w-5xl p-4 sm:p-6 lg:p-8">
        <Header contactInfo={portfolioData.contactInfo} />
        <main className="mt-12 space-y-20">
          <Skills skills={portfolioData.skills} />
          <Experience experience={portfolioData.experience} />
          <Projects projects={portfolioData.projects} />
          <Education education={portfolioData.education} />
        </main>
        <footer className="mt-20 text-center text-gray-500 border-t border-gray-800 pt-8">
          <p className="text-sm">&copy; {new Date().getFullYear()} Debarun Lahiri. Built with passion and code.</p>
           <div className="flex justify-center items-center space-x-6 mt-4">
              <a href={`mailto:${portfolioData.contactInfo.email}`} className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">
                  <MailIcon className="h-6 w-6" />
              </a>
              <a href={portfolioData.contactInfo.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">
                  <GithubIcon className="h-6 w-6" />
              </a>
              <a href={`tel:${portfolioData.contactInfo.phone}`} className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">
                  <PhoneIcon className="h-6 w-6" />
              </a>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default App;