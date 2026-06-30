'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import { Project } from '@/data/projects';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { ArrowLeft, ExternalLink, Cpu, Smartphone, Monitor, Gamepad2, CheckCircle, AlertTriangle } from 'lucide-react';
import { GithubIcon } from '@/components/ui/BrandIcons';
import { motion } from 'framer-motion';

interface ProjectDetailClientProps {
  project: Project;
}

export default function ProjectDetailClient({ project }: ProjectDetailClientProps) {
  const { t, locale } = { ...useLanguage() }; // Destructure from language context

  const getMockupDetails = () => {
    switch (project.category) {
      case 'iot':
        return {
          icon: <Cpu className="w-20 h-20 text-cyan-400" />,
          gradient: 'from-purple-950/20 via-[#12111E] to-[#0A0914]',
          gridColor: 'rgba(6, 182, 212, 0.04)',
        };
      case 'mobile':
        return {
          icon: <Smartphone className="w-20 h-20 text-cyan-400" />,
          gradient: 'from-purple-950/20 via-[#12111E] to-[#0A0914]',
          gridColor: 'rgba(6, 182, 212, 0.04)',
        };
      case 'game':
        return {
          icon: <Gamepad2 className="w-20 h-20 text-cyan-400" />,
          gradient: 'from-purple-950/20 via-[#12111E] to-[#0A0914]',
          gridColor: 'rgba(6, 182, 212, 0.04)',
        };
      default:
        return {
          icon: <Monitor className="w-20 h-20 text-cyan-400" />,
          gradient: 'from-purple-950/20 via-[#12111E] to-[#0A0914]',
          gridColor: 'rgba(6, 182, 212, 0.04)',
        };
    }
  };

  const mockup = getMockupDetails();

  return (
    <>
      <Navbar />
      <main className="flex-1 bg-background pt-32 pb-24 relative overflow-hidden">
        {/* Glow backdrop */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-4xl mx-auto px-6 relative z-10">
          {/* Back Navigation */}
          <div className="mb-8">
            <Link
              href="/projects"
              className="inline-flex items-center space-x-2 text-xs font-bold text-text-muted hover:text-purple-400 transition-colors duration-200"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>{t('detailBack')}</span>
            </Link>
          </div>

          {/* Project Header Text details */}
          <div className="flex flex-col items-start mb-6">
            <span className="inline-block px-3 py-1 rounded-full border border-purple-500/25 bg-purple-500/5 text-purple-400 text-[10px] font-bold tracking-wider uppercase mb-3">
              {project.category === 'iot' ? 'IoT & Hardware' : project.category}
            </span>
            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary tracking-tight leading-tight">
              {project.title}
            </h1>
          </div>

          {/* Large Hero Graphic Representing the Project */}
          <div className="w-full h-64 sm:h-80 md:h-96 rounded-xl border border-border-line bg-[#0A0914] relative overflow-hidden mb-12 shadow-lg shadow-black/40 flex items-center justify-center">
            {project.thumbnail ? (
              <Image
                src={project.thumbnail}
                alt={project.title}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1000px"
              />
            ) : (
              <>
                {/* Grid overlay */}
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage: `linear-gradient(${mockup.gridColor} 1.5px, transparent 1.5px), linear-gradient(90deg, ${mockup.gridColor} 1.5px, transparent 1.5px)`,
                    backgroundSize: '30px 30px',
                  }}
                />
                {/* Ambient center blur */}
                <div className="absolute w-44 h-44 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                  className="relative z-10 p-6 rounded-full border border-cyan-500/30 bg-background/95 shadow-xl shadow-cyan-500/5"
                >
                  {mockup.icon}
                </motion.div>
              </>
            )}
          </div>

          {/* Details Section Split */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            {/* Main Info (Left) */}
            <div className="md:col-span-8 space-y-10">
              {/* Description */}
              <div className="space-y-4">
                <p className="text-text-muted leading-relaxed text-sm">
                  {locale === 'en' ? project.description.en : project.description.id}
                </p>
              </div>

              {/* Key Features */}
              <div className="space-y-4">
                <h3 className="font-heading text-lg font-bold text-text-primary">
                  {t('detailFeatures')}
                </h3>
                <div className="grid grid-cols-1 gap-3.5">
                  {(locale === 'en' ? project.features.en : project.features.id).map((feat, idx) => (
                    <div
                      key={idx}
                      className="flex items-start space-x-3 p-4 rounded-lg bg-cardBg/10 border border-border-line"
                    >
                      <CheckCircle className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                      <span className="text-xs text-text-muted leading-relaxed">
                        {feat}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Sidebar Stats & Links (Right) */}
            <div className="md:col-span-4 space-y-8">
              {/* Tech Stack Card */}
              <div className="glass p-6 rounded-xl border border-border-line">
                <h4 className="font-heading text-xs font-bold uppercase tracking-widest text-text-primary mb-4.5">
                  {t('detailTechStack')}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded bg-border-line border border-border-line text-[10px] text-text-muted font-semibold"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* External Links */}
              <div className="space-y-3">
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-2 w-full py-3 rounded-lg border border-border-line hover:border-cyan-500 bg-cardBg/25 text-text-primary hover:text-cyan-400 text-xs font-bold transition-all duration-300"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>{t('projRepo')}</span>
                </a>

                {project.liveLink && (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center space-x-2 w-full py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-400 hover:to-purple-400 text-white text-xs font-bold transition-all duration-300 shadow shadow-purple-500/25"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>{t('projLive')}</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
