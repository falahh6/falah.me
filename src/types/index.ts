export interface SubProject {
  title: string;
  description: string;
  technologies: string[];
  link?: string;
  images?: string[];
}

export interface TimelineEntry {
  period: string;
  title: string;
  details: string;
  institutionCompany?: string;
  subProjects: SubProject[];
  type?: "education" | "work" | "project";
  logo?: string;
  productHuntLink?: string;
  images?: string[];
}

type Projects = {
  title: string;
  description: string;
  techStack: string[];
  screenshots: {
    id: number;
    title: string;
    description: string;
    imageUrl: string;
  }[];
}[];

export type Company = {
  title: string;
  description: string;
  period: string;
  about: string[];
  projects: Projects;
  techStack: string[];
};

export type Project = {
  title: string;
  description: string;
  logo: string;
  socialLinks: {
    github: string;
    website: string;
    producthunt?: string;
  };
  highlights: {
    title: string;
    description: string;
  }[];
  techStack: string[];
  slidesData: {
    id: number;
    title: string;
    description: string;
    imageUrl: string;
  }[];
  about: string[];
  callToAction: {
    text: string;
    buttonText: string;
    buttonLink: string;
  };
  footer: string;
};

interface CommitNode {
  message: string;
  committedDate: string;
  url: string;
}

export interface RepositoryNode {
  name: string;
  defaultBranchRef?: {
    target?: {
      history?: {
        edges: { node: CommitNode }[];
      };
    };
  };
}
