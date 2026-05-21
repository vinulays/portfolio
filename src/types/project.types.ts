export interface Project {
  title: string;
  slug: string;

  shortDescription: string;
  fullDescription: string;

  technologies?: string[];

  liveUrl?: string;
  gitHubUrl?: string;

  coverImage?: string;
  gallery?: string[];

  company?: string | null;

  isFeatured?: boolean;
}
