export interface Project {
  id: string;
  name: string;
  title: string;
  description: string;
  technologies: string[];
  features: string[];
  category: 'Blockchain' | 'Python' | 'Web3';
  githubUrl?: string;
  demoUrl?: string;
  architectureDetails?: string[];
  contractHighlights?: string[];
}

export interface SkillCategory {
  title: string;
  skills: {
    name: string;
    status?: 'Learning' | 'Core';
  }[];
}

export interface AchievementItem {
  id: string;
  title: string;
  organization: string;
  type: 'Certification' | 'Presentation' | 'Hackathon' | 'Workshop' | 'Leadership' | 'Problem Solving';
  description?: string;
}

export interface ExperienceItem {
  role: string;
  organization: string;
  duration: string;
  type: string;
  description: string;
  highlights: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  scoreLabel: string;
  scoreValue: string;
  discipline?: string;
}
