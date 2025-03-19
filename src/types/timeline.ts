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
