'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { projectsData, Project } from '@/data/projects';
import { ArrowUpRight, Cpu, Smartphone, Monitor, Gamepad2 } from 'lucide-react';

export default function Projects() {
  const { t, locale } = useLanguage();
  const [activeFilter, setActiveFilter] = useState<'all' | 'web' | 'mobile' | 'iot' | 'game'>('all');

  const categories = [
    { id: 'all' as const, name: t('projAll') },
    { id: 'web' as const, name: t('projWeb') },
    { id: 'mobile' as const, name: t('projMobile') },
    { id: 'iot' as const, name: t('projIot') },
    { id: 'game' as const, name: t('projGame') },
  ];

  const filteredProjects = projectsData.filter(
    (project) => activeFilter === 'all' || project.category === activeFilter
  );

  // Renders a high-end vector background in place of project images
  const ProjectMockup = ({ category, title }: { category: string; title: string }) => {
    const getDetails = () => {
      switch (category) {
        case 'iot':
          return {
            icon: <Cpu className="w-12 h-12 text-cyan-400" />,
            gradient: 'from-purple-950/20 via-[#12111E] to-[#0A0914]',
            gridColor: 'rgba(6, 182, 212, 0.05)',
          };
        case 'mobile':
          return {
            icon: <Smartphone className="w-12 h-12 text-cyan-400" />,
            gradient: 'from-purple-950/20 via-[#12111E] to-[#0A0914]',
            gridColor: 'rgba(6, 182, 212, 0.05)',
          };
        case 'game':
          return {
            icon: <Gamepad2 className="w-12 h-12 text-cyan-400" />,
            gradient: 'from-purple-950/20 via-[#12111E] to-[#0A0914]',
            gridColor: 'rgba(6, 182, 212, 0.05)',
          };
        default:
          return {
            icon: <Monitor className="w-12 h-12 text-cyan-400" />,
            gradient: 'from-purple-950/20 via-[#12111E] to-[#0A0914]',
            gridColor: 'rgba(6, 182, 212, 0.05)',
          };
      }
    };

    const details = getDetails();

    return (
      <div
        className={`relative w-full h-48 sm:h-52 flex items-center justify-center bg-gradient-to-br ${details.gradient} overflow-hidden`}
      >
        {/* Vector grid overlay */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(${details.gridColor} 1px, transparent 1px), linear-gradient(90deg, ${details.gridColor} 1px, transparent 1px)`,
            backgroundSize: '20px 20px',
          }}
        />
        {/* Glow center */}
        <div className="absolute w-28 h-28 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none" />

        {/* Floating icon */}
        <motion.div
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          className="relative z-10 p-4 rounded-full border border-cyan-500/20 bg-background/80 shadow shadow-cyan-500/15"
        >
          {details.icon}
        </motion.div>
        
        {/* Project title tag */}
        <div className="absolute bottom-4 left-4 z-10">
          <span className="text-[10px] uppercase font-bold tracking-widest text-cyan-400 bg-background/80 border border-cyan-500/20 px-2 py-1 rounded">
            {category}
          </span>
        </div>
      </div>
    );
  };

  return (
    <section id="projects" className="py-24 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute right-0 top-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-heading text-3xl sm:text-4xl font-bold text-text-primary"
          >
            {t('projHeading')}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-text-muted mt-4 max-w-xl mx-auto text-sm"
          >
            {t('projSub')}
          </motion.p>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Categories Tab Selector */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveFilter(cat.id)}
              className={`px-5 py-2 rounded-full border text-xs font-semibold tracking-wider uppercase transition-all duration-300 cursor-pointer ${
                activeFilter === cat.id
                  ? 'bg-cyan-500 border-cyan-500 text-background shadow-lg shadow-cyan-500/15'
                  : 'bg-cardBg/30 border-border-line text-text-muted hover:text-cyan-400 hover:border-cyan-500/30'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Project Card Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                key={project.slug}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="group glass rounded-xl overflow-hidden flex flex-col justify-between hover:border-cyan-500/30 glow-card-cyan"
              >
                <div>
                  {/* Thumbnail / Graphic representation */}
                  {project.thumbnail ? (
                    <div className="relative w-full h-48 sm:h-52 overflow-hidden bg-[#0A0914] border-b border-white/5 flex items-center justify-center">
                      <Image
                        src={project.thumbnail}
                        alt={project.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>
                  ) : (
                    <ProjectMockup category={project.category} title={project.title} />
                  )}

                  {/* Body Content */}
                  <div className="p-6">
                    <h3 className="font-heading font-bold text-base text-text-primary group-hover:text-cyan-400 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-xs text-text-muted mt-2.5 leading-relaxed line-clamp-3">
                      {locale === 'en' ? project.summary.en : project.summary.id}
                    </p>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5 mt-5">
                      {project.techStack.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 rounded bg-border-line border border-border-line text-[10px] text-text-muted"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.techStack.length > 3 && (
                        <span className="px-2 py-0.5 rounded bg-border-line border border-border-line text-[10px] text-text-muted">
                          +{project.techStack.length - 3}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Footer Action Links */}
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
    </section>
  );
}
