'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Cpu, Globe, Phone } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function About() {
  const { t } = useLanguage();

  const interests = [
    {
      icon: <Globe className="w-5 h-5 text-cyan-400" />,
      title: t('aboutIntWeb'),
      bgClass: 'bg-cyan-500/10 border-cyan-500/20',
      hoverClass: 'hover:border-cyan-500/35 hover:bg-cyan-500/[0.02]',
    },
    {
      icon: <Cpu className="w-5 h-5 text-pink-400" />,
      title: t('aboutIntIot'),
      bgClass: 'bg-pink-500/10 border-pink-500/20',
      hoverClass: 'hover:border-pink-500/35 hover:bg-pink-500/[0.02]',
    },
    {
      icon: <Phone className="w-5 h-5 text-purple-400" />,
      title: t('aboutIntMobile'),
      bgClass: 'bg-purple-500/10 border-purple-500/20',
      hoverClass: 'hover:border-purple-500/35 hover:bg-purple-500/[0.02]',
    },
  ];

  return (
    <section id="about" className="py-24 bg-background relative overflow-hidden">
      {/* Decorative background blurs */}
      <div className="absolute right-0 top-1/3 w-72 h-72 mesh-glow-purple rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Title with Developer Gradient */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-heading text-3xl sm:text-4xl font-bold text-text-primary"
          >
            {t('aboutHeading')}
          </motion.h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Bio text (Left side) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6"
          >
            <h3 className="font-heading text-xl sm:text-2xl font-extrabold text-gradient-developer tracking-wide">
              Aldyan Satya Fausta
            </h3>
            <p className="text-text-muted leading-relaxed text-sm sm:text-base font-normal">
              {t('aboutDesc')}
            </p>

            {/* Interest categories */}
            <div className="pt-6 space-y-4">
              <h4 className="font-heading text-[11px] font-bold tracking-widest text-text-primary uppercase">
                {t('aboutInterests')}
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {interests.map((item, idx) => (
                  <div
                    key={idx}
                    className={`flex items-center space-x-3.5 p-3.5 rounded-xl border border-white/5 bg-[#090810]/40 transition-all duration-300 ${item.hoverClass}`}
                  >
                    <div className={`p-2 rounded-lg ${item.bgClass}`}>
                      {item.icon}
                    </div>
                    <span className="text-xs font-semibold text-text-primary">
                      {item.title}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Education timeline & info card (Right side with Purple Glow theme) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5"
          >
            <div className="glass p-8 rounded-2xl shadow-lg relative overflow-hidden transition-all duration-500 glow-card-purple">
              <div className="absolute top-0 right-0 w-24 h-24 bg-purple-500/5 rounded-full blur-2xl pointer-events-none" />

              <div className="flex items-center space-x-3.5 mb-8">
                <div className="p-3 rounded-lg bg-purple-500/10 text-purple-400 border border-purple-500/20">
                  <BookOpen className="w-6 h-6" />
                </div>
                <h4 className="font-heading text-lg font-bold text-text-primary">
                  {t('aboutEducation')}
                </h4>
              </div>

              {/* Education entry */}
              <div className="relative border-l border-purple-500/20 pl-6 ml-1.5 py-2">
                <span className="absolute -left-1.5 top-3.5 w-3 h-3 rounded-full bg-purple-500 animate-ping opacity-75" />
                <span className="absolute -left-1.5 top-3.5 w-3 h-3 rounded-full bg-purple-500 border-2 border-background" />

                <span className="inline-block px-2.5 py-0.5 rounded bg-purple-500/15 border border-purple-500/30 text-purple-400 text-[10px] font-bold tracking-wider uppercase">
                  {t('aboutEduPeriod')}
                </span>
                <h5 className="text-base font-bold text-text-primary mt-3 leading-snug">
                  {t('aboutUni')}
                </h5>
                <p className="text-xs text-text-muted mt-1.5">
                  {t('aboutDegree')}
                </p>
                <p className="text-[10px] text-text-muted/70 mt-1 font-semibold">
                  Major: Informatics Engineering (Teknologi Informasi)
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
