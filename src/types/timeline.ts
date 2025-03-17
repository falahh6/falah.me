export interface SubProject {
  title: string;
  description: string;
  technologies: string[];
  link?: string;
  images?: string[]; // Updated from 'image' to 'images' to support multiple images
}

export interface TimelineEntry {
  period: string;
  title: string;
  details: string;
  institutionCompany?: string;
  subProjects?: SubProject[];
  type?: "education" | "work" | "project";
  productHuntLink?: string; // Added field for Product Hunt link
  images?: string[]; // Added field for project-level images
}
