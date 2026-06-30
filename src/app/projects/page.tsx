'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import { projectsData } from '@/data/projects';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Search, ArrowLeft, ArrowUpRight, Cpu, Smartphone, Monitor, Gamepad2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ProjectsPage() {
  const { t, locale } = useLanguage();
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState<'all' | 'web' | 'mobile' | 'iot' | 'game'>('all');

  const filteredProjects = projectsData.filter((project) => {
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.techStack.some((tech) => tech.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (locale === 'en' ? project.summary.en : project.summary.id)
        .toLowerCase()
        .includes(searchQuery.toLowerCase());

    const matchesCategory = activeFilter === 'all' || project.category === activeFilter;

    return matchesSearch && matchesCategory;
  });

  const categories = [
    { id: 'all' as const, name: t('projAll') },
    { id: 'web' as const, name: t('projWeb') },
    { id: 'mobile' as const, name: t('projMobile') },
    { id: 'iot' as const, name: t('projIot') },
    { id: 'game' as const, name: t('projGame') },
  ];

  const ProjectMockup = ({ category }: { category: string }) => {
    switch (category) {
      case 'iot':
        return (
          <div className="relative w-full h-44 flex items-center justify-center bg-gradient-to-br from-purple-950/20 via-[#12111E] to-[#0A0914]">
            <Cpu className="w-10 h-10 text-cyan-400 relative z-10" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(6,182,212,0.04),transparent_60%)]" />
          </div>
        );
      case 'mobile':
        return (
          <div className="relative w-full h-44 flex items-center justify-center bg-gradient-to-br from-purple-950/20 via-[#12111E] to-[#0A0914]">
            <Smartphone className="w-10 h-10 text-cyan-400 relative z-10" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(6,182,212,0.04),transparent_60%)]" />
          </div>
        );
      case 'game':
        return (
          <div className="relative w-full h-44 flex items-center justify-center bg-gradient-to-br from-purple-950/20 via-[#12111E] to-[#0A0914]">
            <Gamepad2 className="w-10 h-10 text-cyan-400 relative z-10" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(6,182,212,0.04),transparent_60%)]" />
          </div>
        );
      default:
        return (
          <div className="relative w-full h-44 flex items-center justify-center bg-gradient-to-br from-purple-950/20 via-[#12111E] to-[#0A0914]">
            <Monitor className="w-10 h-10 text-cyan-400 relative z-10" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(6,182,212,0.04),transparent_60%)]" />
          </div>
        );
    }
  };

  return (
    <>
      <Navbar />
      <main className="flex-1 bg-background pt-32 pb-24">
        {/* Glow Effects */}
        <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* Header Action */}
          <div className="mb-10">
            <Link
              href="/"
              className="inline-flex items-center space-x-2 text-xs font-bold text-text-muted hover:text-cyan-400 transition-colors duration-200"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>{t('detailBack')}</span>
            </Link>
          </div>

          {/* Heading */}
          <div className="mb-12">
            <h1 className="font-heading text-3xl sm:text-4xl font-bold text-text-primary">
              {t('projHeading')}
            </h1>
            <p className="text-text-muted mt-2.5 text-xs max-w-lg">
              {t('projSub')}
            </p>
          </div>

          {/* Controls Bar: Search & Tabs */}
          <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-6 mb-12">
            {/* Tabs */}
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveFilter(cat.id)}
                  className={`px-4.5 py-2 rounded-full border text-xs font-semibold tracking-wider uppercase transition-all duration-300 cursor-pointer ${
                    activeFilter === cat.id
                      ? 'bg-cyan-500/10 border-cyan-500/50 text-cyan-400'
                      : 'bg-cardBg/30 border-border-line text-text-muted hover:text-cyan-400 hover:border-cyan-500/30'
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative w-full lg:max-w-xs">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted" />
              <input
                type="text"
                placeholder={locale === 'en' ? 'Search projects or tools...' : 'Cari proyek atau teknologi...'}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-full border border-border-line bg-cardBg/10 text-text-primary text-xs focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/20 transition-all"
              />
            </div>
          </div>

          {/* Grid list */}
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <motion.div
                  layout
                  key={project.slug}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="group glass rounded-xl overflow-hidden flex flex-col justify-between hover:border-cyan-500/30 transition-colors"
                >
                  <div>
                    {/* Mockup image */}
                    {project.thumbnail ? (
                      <div className="relative w-full h-44 overflow-hidden bg-[#0A0914] border-b border-white/5 flex items-center justify-center">
                        <Image
                          src={project.thumbnail}
                          alt={project.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                      </div>
                    ) : (
                      <ProjectMockup category={project.category} />
                    )}

                    {/* Content */}
                    <div className="p-6">
                      <h3 className="font-heading font-bold text-base text-text-primary group-hover:text-cyan-400 transition-colors duration-300">
                        {project.title}
                      </h3>
                      <p className="text-xs text-text-muted mt-2.5 leading-relaxed line-clamp-3">
                        {locale === 'en' ? project.summary.en : project.summary.id}
                      </p>

                      {/* Stack Badges */}
                      <div className="flex flex-wrap gap-1.5 mt-5">
                        {project.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-0.5 rounded bg-border-line border border-border-line text-[9px] text-text-muted font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Links */}
                  <div className="p-6 pt-0 flex items-center justify-between">
                    <Link
                      href={`/projects/${project.slug}`}
                      className="inline-flex items-center space-x-1 text-xs font-bold text-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                      <span>{t('projViewDetail')}</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>

                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[10px] font-bold text-text-muted hover:text-text-primary transition-colors"
                    >
                      GitHub
                    </a>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  );
}
