'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { skillsData, skillCategories } from '@/data/skills';
import { 
  Layout, Server, Smartphone, Database, Cpu, 
  Wind, Code, Atom, Globe, Layers, Activity, 
  Shuffle, Milestone, Leaf, Flame, Infinity, 
  Radio, Binary 
} from 'lucide-react';

export default function Skills() {
  const { t } = useLanguage();

  const getCategoryIcon = (id: string) => {
    switch (id) {
      case 'frontend':
        return <Layout className="w-5 h-5 text-cyan-400" />;
      case 'backend':
        return <Server className="w-5 h-5 text-purple-400" />;
      case 'mobile':
        return <Smartphone className="w-5 h-5 text-cyan-400" />;
      case 'database':
        return <Database className="w-5 h-5 text-purple-400" />;
      case 'iot':
        return <Cpu className="w-5 h-5 text-pink-400" />;
      default:
        return <Layout className="w-5 h-5 text-cyan-400" />;
    }
  };

  const getCategoryTheme = (id: string) => {
    switch (id) {
      case 'frontend':
      case 'mobile':
        return {
          cardGlow: 'glow-card-cyan hover:border-cyan-500/35',
          iconBg: 'bg-cyan-500/10 border border-cyan-500/20',
          skillIconColor: 'text-cyan-400',
          badgeHover: 'hover:border-cyan-500/30 hover:bg-cyan-500/[0.02]',
        };
      case 'backend':
      case 'database':
        return {
          cardGlow: 'glow-card-purple hover:border-purple-500/35',
          iconBg: 'bg-purple-500/10 border border-purple-500/20',
          skillIconColor: 'text-purple-400',
          badgeHover: 'hover:border-purple-500/30 hover:bg-purple-500/[0.02]',
        };
      case 'iot':
      default:
        return {
          cardGlow: 'glow-card-pink hover:border-pink-500/35',
          iconBg: 'bg-pink-500/10 border border-pink-500/20',
          skillIconColor: 'text-pink-400',
          badgeHover: 'hover:border-pink-500/30 hover:bg-pink-500/[0.02]',
        };
    }
  };

  const getSkillIcon = (name: string, colorClass: string) => {
    const iconClass = `w-4 h-4 ${colorClass}`;
    switch (name) {
      case 'React.js':
      case 'React Native':
        return <Atom className={iconClass} />;
      case 'Next.js':
        return <Layers className={iconClass} />;
      case 'TypeScript':
        return <Code className={iconClass} />;
      case 'Tailwind CSS':
        return <Wind className={iconClass} />;
      case 'Framer Motion':
        return <Activity className={iconClass} />;
      case 'Node.js':
        return <Globe className={iconClass} />;
      case 'Express.js':
        return <Server className={iconClass} />;
      case 'NestJS':
        return <Cpu className={iconClass} />;
      case 'REST APIs':
        return <Shuffle className={iconClass} />;
      case 'Flutter':
        return <Milestone className={iconClass} />;
      case 'PostgreSQL':
      case 'MySQL / MariaDB':
      case 'Supabase':
        return <Database className={iconClass} />;
      case 'Firebase':
        return <Flame className={iconClass} />;
      case 'Laravel':
        return <Server className={iconClass} />;
      case 'Python':
        return <Code className={iconClass} />;
      case 'Vue.js':
        return <Layout className={iconClass} />;
      case 'Blade (Laravel)':
        return <Code className={iconClass} />;
      case 'Arduino IDE':
        return <Infinity className={iconClass} />;
      case 'ESP32 / ESP8266':
        return <Cpu className={iconClass} />;
      case 'MQTT / HTTP Protocols':
        return <Radio className={iconClass} />;
      default:
        return <Code className={iconClass} />;
    }
  };

  return (
    <section id="skills" className="py-24 bg-background relative overflow-hidden">
      {/* Decorative Background Mesh Glows */}
      <div className="absolute top-1/4 left-1/10 w-96 h-96 mesh-glow-cyan rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/10 w-96 h-96 mesh-glow-purple rounded-full blur-[120px] pointer-events-none" />

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
            {t('skillsHeading')}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-text-muted mt-4 max-w-xl mx-auto text-xs sm:text-sm"
          >
            {t('skillsSub')}
          </motion.p>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Skill Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const categorySkills = skillsData.filter((s) => s.category === category.id);
            const theme = getCategoryTheme(category.id);
            
            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`glass p-6 rounded-xl flex flex-col justify-between transition-all duration-500 ${theme.cardGlow}`}
              >
                <div>
                  {/* Category Title */}
                  <div className="flex items-center space-x-3 mb-4">
                    <div className={`p-2 rounded ${theme.iconBg}`}>
                      {getCategoryIcon(category.id)}
                    </div>
                    <h3 className="font-heading font-bold text-base text-text-primary">
                      {t('locale') === 'en' ? category.title.en : category.title.id}
                    </h3>
                  </div>

                  {/* Category Description */}
                  <p className="text-xs text-text-muted leading-relaxed mb-6 border-b border-white/5 pb-4.5">
                    {t('locale') === 'en' ? category.description.en : category.description.id}
                  </p>

                  {/* Skills Badges Grid */}
                  <div className="grid grid-cols-2 gap-3">
                    {categorySkills.map((skill) => (
                      <div
                        key={skill.name}
                        className={`flex items-center space-x-2 p-2 rounded-lg border border-white/5 bg-white/3 transition-all duration-300 group ${theme.badgeHover}`}
                      >
                        <div className="shrink-0 p-1 rounded bg-white/5 border border-transparent transition-all duration-300">
                          {getSkillIcon(skill.name, theme.skillIconColor)}
                        </div>
                        <span className="text-[10px] sm:text-[10.5px] font-semibold text-text-primary/90 truncate">
                          {skill.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
