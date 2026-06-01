export interface Project {
  title: string;
  slug: string;

  shortDescription: string;
  fullDescription: string;

  duration: string;

  role: string;

  technologies?: ProjectTechnology[];
  features?: ProjectFeature[];
  responsibilities?: string[];

  liveUrl?: string;
  gitHubUrl?: string;

  coverImage?: string;
  gallery?: string[];

  company?: string | null;

  isFeatured?: boolean;
}

export interface ProjectFeature {
  title: string;
  description: string;
}

export interface ProjectTechnology {
  key: string;
  name: string;
}
