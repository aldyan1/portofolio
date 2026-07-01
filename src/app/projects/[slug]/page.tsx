import React from 'react';
import { notFound } from 'next/navigation';
import { projectsData } from '@/data/projects';
import ProjectDetailClient from '@/components/sections/ProjectDetailClient';
import type { Metadata } from 'next';

interface RouteParams {
  params: Promise<{
    slug: string;
  }>;
}

// Generates static paths for each project at build time
export async function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }));
}

// Custom Metadata for SEO
export async function generateMetadata({ params }: RouteParams): Promise<Metadata> {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: 'Project Not Found | Aldyan Satya Fausta Portfolio',
    };
  }

  return {
    title: `${project.title} | Aldyan Satya Fausta Portfolio`,
    description: project.summary.en,
  };
}

export default async function ProjectPage({ params }: RouteParams) {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug);

  // If the slug doesn't exist, trigger Next.js notFound handler
  if (!project) {
    notFound();
  }

  return <ProjectDetailClient project={project} />;
}
