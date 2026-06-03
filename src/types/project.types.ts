import { PortableTextBlock } from 'sanity';

export interface Project {
  _id: string;

  title: string;

  slug: {
    current: string;
  };

  shortDescription: string;
  fullDescription: PortableTextBlock[];

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
