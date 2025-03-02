export interface SubProject {
  title: string;
  description: string;
  technologies: string[];
  link?: string;
  image?: string;
}

export interface TimelineEntry {
  period: string;
  title: string;
  details: string;
  institutionCompany?: string;
  subProjects?: SubProject[];
}
