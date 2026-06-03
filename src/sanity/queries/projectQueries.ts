import { groq } from 'next-sanity';

export const featuredProjectsQuery = groq`
  *[_type == "project" && featured == true] | order(_createdAt desc) {
    _id,
    title,
    slug,
    shortDescription,
    coverImage,
    company,
    featured,
    liveUrl,
    gitHubUrl
  }
`;

export const allProjectsQuery = groq`
  *[_type == "project"] | order(_createdAt desc) {
    _id,
    title,
    slug,
    shortDescription,
    company,
    coverImage,
    company,
    featured,
    liveUrl,
    gitHubUrl
  }
`;

export const projectBySlugQuery = groq`
  *[_type == "project" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    shortDescription,
    fullDescription,
    coverImage,
    gallery,
    duration,
    company,
    technologies,
    liveUrl,
    gitHubUrl,
    features,
    responsibilities,
    role,
  }
`;
