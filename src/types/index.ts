export interface Project {
  id: string;
  title: string;
  alt: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  completionDate: string;
  githubUrl?: string;
  liveUrl?: string;
}

export interface Skill {
  name: string;
  level: number;
  icon: any;
}

export interface Experience {
  company: string;
  position: string;
  duration: string;
  description: string[];
  technologies: string[];
}

export interface FreelanceJob {
  id: string;
  title: string;
  client: string;
  period: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  alt: string;
} 