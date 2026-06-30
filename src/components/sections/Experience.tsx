'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { experienceData } from '@/data/experience';
import { Briefcase, Users, Code } from 'lucide-react';

export default function Experience() {
  const { t, locale } = useLanguage();

  const getExperienceIcon = (type: string) => {
    switch (type) {
      case 'work':
        return <Briefcase className="w-4 h-4 text-background" />;
      case 'freelance':
        return <Code className="w-4 h-4 text-background" />;
      default:
        return <Users className="w-4 h-4 text-background" />;
    }
  };

  return (
    <section id="experience" className="py-24 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute left-0 bottom-1/4 w-80 h-80 bg-purple-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-heading text-3xl sm:text-4xl font-bold text-text-primary"
          >
            {t('expHeading')}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-text-muted mt-4 max-w-xl mx-auto text-sm"
          >
            {t('expSub')}
          </motion.p>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Timeline Container */}
        <div className="relative mt-12">
          {/* Vertical Timeline Axis Line */}
          {/* Desktop Center line, Mobile Left line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border-line -translate-x-1/2" />

          {/* Timeline Nodes */}
          <div className="space-y-12">
            {experienceData.map((item, index) => {
              const isEven = index % 2 === 0;

              return (
                <div
                  key={item.id}
                  className={`relative flex flex-col md:flex-row items-start md:items-center ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline Badge/Dot */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 z-10 flex items-center justify-center">
                    <div className="w-8 h-8 rounded-full bg-purple-500 border-4 border-background flex items-center justify-center shadow shadow-purple-500/30">
                      {getExperienceIcon(item.type)}
                    </div>
                  </div>

                  {/* Spacer for Desktop Grid alignment */}
                  <div className="hidden md:block w-1/2" />

                  {/* Card Content */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.6 }}
                    className="w-full md:w-[45%] pl-12 md:pl-0"
                  >
                    <div className="glass p-6 rounded-xl border border-border-line hover:border-purple-500/30 glow-card-purple transition-all duration-300">
                      {/* Period Badge */}
                      <span className="inline-block px-2.5 py-1 rounded bg-purple-500/10 text-purple-400 text-xs font-semibold tracking-wider mb-3">
                        {item.period}
                      </span>

                      {/* Header details */}
                      <h3 className="font-heading font-bold text-lg text-text-primary leading-snug">
                        {locale === 'en' ? item.role.en : item.role.id}
                      </h3>
                      <p className="text-xs font-semibold text-purple-400 mt-1">
                        {item.organization}
                      </p>

                      {/* Description List */}
                      <ul className="mt-4 space-y-2 text-text-muted text-xs leading-relaxed list-disc list-inside">
                        {(locale === 'en' ? item.description.en : item.description.id).map((desc, idx) => (
                          <li key={idx} className="marker:text-purple-400">
                            {desc}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
