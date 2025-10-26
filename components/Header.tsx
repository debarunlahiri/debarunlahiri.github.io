import React from 'react';
import type { ContactInfo } from '../types';
import { GithubIcon, MailIcon, PhoneIcon } from './IconComponents';

interface HeaderProps {
  contactInfo: ContactInfo;
}

const Header: React.FC<HeaderProps> = ({ contactInfo }) => {
  return (
    <header className="flex flex-col items-center text-center pb-10 border-b border-gray-800">
      <h1 className="text-5xl lg:text-6xl font-bold text-white tracking-tight">{contactInfo.name}</h1>
      <h2 className="text-xl mt-3 text-gradient font-semibold">Senior Assistant Engineer | Full Stack Developer</h2>
      <p className="mt-4 max-w-2xl text-gray-400">
        Crafting seamless and robust digital experiences, from pixel-perfect interfaces to scalable backend systems. Passionate about leveraging technology to solve complex problems and drive innovation.
      </p>
      <div className="flex items-center space-x-4 mt-6">
        <a href={`mailto:${contactInfo.email}`} className="text-gray-400 bg-gray-800/50 hover:bg-gray-700/70 p-3 rounded-full transition-all duration-300 glow-on-hover" aria-label="Email">
          <MailIcon className="h-6 w-6" />
        </a>
        <a href={contactInfo.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 bg-gray-800/50 hover:bg-gray-700/70 p-3 rounded-full transition-all duration-300 glow-on-hover" aria-label="GitHub">
          <GithubIcon className="h-6 w-6" />
        </a>
        <a href={`tel:${contactInfo.phone}`} className="text-gray-400 bg-gray-800/50 hover:bg-gray-700/70 p-3 rounded-full transition-all duration-300 glow-on-hover" aria-label="Phone">
          <PhoneIcon className="h-6 w-6" />
        </a>
      </div>
    </header>
  );
};

export default Header;