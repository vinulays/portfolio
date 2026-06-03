import { client } from '../lib/client';
import { allProjectsQuery, featuredProjectsQuery, projectBySlugQuery } from '../queries/projectQueries';

export async function getFeaturedProjects() {
  return client.fetch(featuredProjectsQuery);
}

export async function getProjectBySlug(slug: string) {
  return client.fetch(projectBySlugQuery, { slug });
}

export async function getAllProjects() {
  return client.fetch(allProjectsQuery);
}
