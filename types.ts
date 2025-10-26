
export interface ContactInfo {
  name: string;
  email: string;
  github: string;
  phone: string;
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface ExperienceItem {
  company: string;
  role: string;
  location: string;
  period: string;
  tasks: string[];
}

export interface Project {
  title: string;
  description: string;
  techStack: string[];
}

export interface EducationItem {
  institution: string;
  degree: string;
  location: string;
  period: string;
}

export interface PortfolioData {
  contactInfo: ContactInfo;
  skills: SkillCategory[];
  experience: ExperienceItem[];
  projects: Project[];
  education: EducationItem[];
}
