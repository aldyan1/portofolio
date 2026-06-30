'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Download, Trophy, GraduationCap, Cpu, Users } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { GithubIcon, LinkedinIcon } from '@/components/ui/BrandIcons';

// Inline Brand Icon definitions
const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const WhatsappIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    {...props}
  >
    <path
      d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.704 1.459h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"
      fill="currentColor"
    />
  </svg>
);

const ChipGlowPattern = () => (
  <svg
    width="460"
    height="460"
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="text-cyan-500/20 shrink-0"
    style={{ filter: 'drop-shadow(0 0 15px rgba(6,182,212,0.3))' }}
  >
    {/* Microchip silicon frame */}
    <rect x="30" y="30" width="40" height="40" rx="4" stroke="currentColor" strokeWidth="0.8" />
    <rect x="35" y="35" width="30" height="30" rx="2.5" stroke="currentColor" strokeWidth="0.4" strokeDasharray="1.5 1" opacity="0.6" />
    <circle cx="50" cy="50" r="2.5" fill="currentColor" opacity="0.8" />

    {/* Custom paths for circuit lines */}
    <path d="M30 40 H15 V25 H5" stroke="currentColor" strokeWidth="0.6" strokeLinecap="round" />
    <circle cx="5" cy="25" r="0.8" fill="currentColor" />
    
    <path d="M30 50 H10" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" />
    <circle cx="10" cy="50" r="1.2" fill="currentColor" />
    
    <path d="M30 60 H15 V75 H5" stroke="currentColor" strokeWidth="0.6" strokeLinecap="round" />
    <circle cx="5" cy="75" r="0.8" fill="currentColor" />

    <path d="M70 40 H85 V25 H95" stroke="currentColor" strokeWidth="0.6" strokeLinecap="round" />
    <circle cx="95" cy="25" r="0.8" fill="currentColor" />
    
    <path d="M70 50 H90" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" />
    <circle cx="90" cy="50" r="1.2" fill="currentColor" />
    
    <path d="M70 60 H85 V75 H95" stroke="currentColor" strokeWidth="0.6" strokeLinecap="round" />
    <circle cx="95" cy="75" r="0.8" fill="currentColor" />

    {/* Top/Bottom links */}
    <path d="M40 30 V12 H25" stroke="currentColor" strokeWidth="0.5" />
    <circle cx="25" cy="12" r="0.7" fill="currentColor" />
    <path d="M50 30 V8" stroke="currentColor" strokeWidth="0.8" />
    <circle cx="50" cy="8" r="1" fill="currentColor" />
    <path d="M60 30 V12 H75" stroke="currentColor" strokeWidth="0.5" />
    <circle cx="75" cy="12" r="0.7" fill="currentColor" />

    <path d="M40 70 V88 H25" stroke="currentColor" strokeWidth="0.5" />
    <circle cx="25" cy="88" r="0.7" fill="currentColor" />
    <path d="M50 70 V92" stroke="currentColor" strokeWidth="0.8" />
    <circle cx="50" cy="92" r="1" fill="currentColor" />
    <path d="M60 70 V88 H75" stroke="currentColor" strokeWidth="0.5" />
    <circle cx="75" cy="88" r="0.7" fill="currentColor" />
  </svg>
);

export default function Hero() {
  const { t } = useLanguage();
  const [isDropped, setIsDropped] = React.useState(false);

  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const stats = [
    {
      icon: <Trophy className="w-5 h-5 text-cyan-400" />,
      value: '10+',
      label: 'Projects Completed',
      colorClass: 'text-cyan-400',
    },
    {
      icon: <GraduationCap className="w-5 h-5 text-purple-400" />,
      value: '3+',
      label: 'Years of Learning',
      colorClass: 'text-purple-400',
    },
    {
      icon: <Cpu className="w-5 h-5 text-pink-400" />,
      value: '10+',
      label: 'Technologies',
      colorClass: 'text-pink-400',
    },
    {
      icon: <Users className="w-5 h-5 text-emerald-400" />,
      value: '5+',
      label: 'Organizations',
      colorClass: 'text-emerald-400',
    },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center pt-36 pb-16 overflow-hidden bg-[#05050A]"
    >
      {/* Background Decorative Blur Spheres (Mesh Glows) */}
      <div className="absolute top-1/4 left-1/10 w-96 h-96 mesh-glow-cyan rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/10 w-96 h-96 mesh-glow-purple rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-10 right-1/4 w-80 h-80 mesh-glow-gold rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 w-full z-10 flex-1 flex flex-col justify-center">
        {/* Main Grid Layout (6-6 Split) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Side: Developer Info */}
          <div className="lg:col-span-6 text-left order-2 lg:order-1 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-cyan-400 font-semibold tracking-widest text-xs font-heading uppercase">
                {t('heroGreeting')}
              </span>
            </motion.div>

            {/* Glowing Developer Gradient Title */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-2"
            >
              <h1 className="font-heading text-4xl sm:text-5xl lg:text-[62px] font-extrabold tracking-tight uppercase leading-none text-gradient-developer">
                Aldyan Satya Fausta
              </h1>
              <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight uppercase leading-none text-text-primary">
                Fullstack Developer
              </h2>
              <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight uppercase leading-none text-text-primary">
                & IoT Engineer
              </h2>
            </motion.div>

            {/* Biography Description */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xs sm:text-sm text-text-muted leading-relaxed max-w-lg font-normal"
            >
              {t('heroSubtitle')}
            </motion.p>

            {/* Action CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center gap-4 pt-3"
            >
              {/* Download CV (Vibrant gradient button with drop shadow) */}
              <a
                href="/cv-aldyan-satya.pdf"
                download
                className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 hover:from-cyan-400 hover:via-purple-400 hover:to-pink-400 text-white font-bold text-xs tracking-wider uppercase flex items-center justify-center space-x-2 transition-all duration-300 shadow-lg shadow-purple-500/20 hover:shadow-purple-500/30"
              >
                <Download className="w-4 h-4" />
                <span>{t('heroCtaProjects')}</span>
              </a>

              {/* Contact Me (Outline) */}
              <button
                onClick={() => handleScrollTo('contact')}
                className="w-full sm:w-auto px-7 py-3.5 rounded-full border border-white/10 hover:border-cyan-400 hover:text-cyan-400 text-white hover:bg-cyan-500/5 font-bold text-xs tracking-wider uppercase flex items-center justify-center transition-all duration-300 cursor-pointer"
              >
                <span>{t('heroCtaContact')}</span>
              </button>
            </motion.div>

            {/* Social Coordinates (White with cyan hover) */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex items-center space-x-5.5 pt-4"
            >
              {[
                { icon: <GithubIcon size={19} />, href: 'https://github.com/aldyan1', label: 'GitHub' },
                { icon: <LinkedinIcon size={19} />, href: 'https://linkedin.com/in/aldyansatya', label: 'LinkedIn' },
                { icon: <InstagramIcon className="w-5 h-5" />, href: 'https://instagram.com/aldyansatya', label: 'Instagram' },
                { icon: <WhatsappIcon className="w-5 h-5" />, href: 'https://wa.me/6281339314198', label: 'WhatsApp' },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-primary/75 hover:text-cyan-400 transition-colors duration-300 transform hover:scale-110"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </motion.div>
          </div>

          {/* Right Side: IDE Developer Console Mockup Frame */}
          <div className="lg:col-span-6 flex justify-center lg:justify-start lg:pl-10 order-1 lg:order-2 relative py-6">
            
            {/* Ambient circuit glow layout */}
            <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none opacity-45 select-none lg:justify-start lg:pl-0">
              <ChipGlowPattern />
            </div>

            {/* Container for IDE console and Floating ID Card */}
            <div className="relative w-full max-w-[420px] h-[340px] z-10">
              {/* Outer IDE console container */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, type: 'spring' }}
                className="w-full h-full rounded-xl overflow-hidden code-window flex flex-col"
              >
                {/* Window Header */}
                <div className="flex items-center justify-between px-4 py-3 bg-[#0d0c15] border-b border-white/5 select-none">
                  {/* Dots */}
                  <div className="flex items-center space-x-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
                  </div>
                  {/* File tab label */}
                  <div className="text-[10px] font-mono text-text-muted flex items-center space-x-1.5 bg-[#141221] px-3 py-1 rounded-t-lg border-t border-x border-white/5">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                    <span className="text-text-primary">Aldyan.tsx</span>
                  </div>
                  <div className="w-8" />
                </div>

                {/* Code Editor Body */}
                <div className="flex-1 p-4 font-mono text-[10.5px] leading-relaxed flex flex-row overflow-hidden text-left">
                  {/* Code line numbers */}
                  <div className="w-8 select-none text-text-muted/30 border-r border-white/5 pr-2.5 text-right space-y-0.5">
                    {Array.from({ length: 11 }).map((_, i) => (
                      <div key={i}>{i + 1}</div>
                    ))}
                  </div>
                  {/* Main Code syntax styling */}
                  <div className="pl-4 space-y-0.5 text-text-primary/95 flex-1 overflow-x-auto">
                    <div>
                      <span className="text-pink-400">const</span>{' '}
                      <span className="text-cyan-300">Developer</span> = {'{'}
                    </div>
                    <div className="pl-4">
                      <span className="text-purple-400">name</span>:{' '}
                      <span className="text-yellow-200">&quot;Aldyan Satya Fausta&quot;</span>,
                    </div>
                    <div className="pl-4">
                      <span className="text-purple-400">role</span>:{' '}
                      <span className="text-yellow-200">&quot;Fullstack &amp; IoT&quot;</span>,
                    </div>
                    <div className="pl-4">
                      <span className="text-purple-400">education</span>:{' '}
                      <span className="text-yellow-200">&quot;Informatics&quot;</span>,
                    </div>
                    <div className="pl-4">
                      <span className="text-purple-400">stack</span>: [
                      <span className="text-yellow-200">&quot;React&quot;</span>,{' '}
                      <span className="text-yellow-200">&quot;ESP32&quot;</span>
                      ],
                    </div>
                    <div className="pl-4">
                      <span className="text-purple-400">isAvailable</span>:{' '}
                      <span className="text-orange-400">true</span>
                    </div>
                    <div>{'};'}</div>
                    <div className="pt-2">
                      <span className="text-pink-400">export default</span>{' '}
                      <span className="text-cyan-300">Developer</span>;
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Floating ID Card Profile Card overlapping the IDE with Lanyard */}
              <motion.div
                initial={{ opacity: 0, y: -450 }}
                animate={isDropped 
                  ? { opacity: 1, y: 0, rotate: [-2, 2, -2] } 
                  : { opacity: 1, y: 0, rotate: 0 }
                }
                transition={isDropped 
                  ? { 
                      rotate: { repeat: Infinity, duration: 6, ease: "easeInOut" } 
                    } 
                  : { 
                      y: { type: "spring", stiffness: 90, damping: 13, mass: 1.1 },
                      opacity: { duration: 0.5 }
                    }
                }
                onAnimationComplete={() => setIsDropped(true)}
                style={{ transformOrigin: "top center" }}
                className="absolute -right-3 sm:-right-6 -bottom-4 sm:-bottom-6 z-20 w-[160px] sm:w-[170px] pt-[78px]"
              >
                {/* Lanyard/Rope SVG representation */}
                <svg className="absolute top-0 left-0 w-full h-[78px] pointer-events-none" viewBox="0 0 100 78" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="lanyardGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#00f2fe" stopOpacity="0.85" />
                      <stop offset="50%" stopColor="#a855f7" stopOpacity="0.85" />
                      <stop offset="100%" stopColor="#ec4899" stopOpacity="0.85" />
                    </linearGradient>
                  </defs>
                  {/* Left strap line */}
                  <path d="M 38 0 C 42 30, 46 55, 50 73" stroke="url(#lanyardGrad)" strokeWidth="1.5" fill="none" />
                  {/* Right strap line */}
                  <path d="M 62 0 C 58 30, 54 55, 50 73" stroke="url(#lanyardGrad)" strokeWidth="1.5" fill="none" />
                  {/* Metal Ring/Clasp */}
                  <circle cx="50" cy="73" r="2.2" fill="#475569" stroke="#94a3b8" strokeWidth="0.6" />
                  <rect x="49.1" y="75" width="1.8" height="4" rx="0.4" fill="#64748b" />
                </svg>

                {/* ID Card main box */}
                <div className="w-full h-[225px] sm:h-[240px] rounded-xl border border-cyan-500/40 bg-[#090815]/95 overflow-hidden shadow-[0_0_35px_rgba(6,182,212,0.25)] flex flex-col p-3 group hover:border-cyan-400/80 transition-colors duration-300 relative">
                  {/* Top lanyard loop slot */}
                  <div className="w-9 h-1.5 bg-[#05050A] border border-cyan-500/30 rounded-full mx-auto mb-2" />

                  {/* Top text / header info */}
                  <div className="flex justify-between items-center mb-1.5 font-mono text-[7px] text-text-muted select-none">
                    <span className="text-cyan-400 font-bold">SECURE PASS</span>
                    <span className="flex items-center space-x-1">
                      <span className="w-1 h-1 rounded-full bg-cyan-400 animate-pulse" />
                      <span>IoT &bull; CLOUD</span>
                    </span>
                  </div>

                  {/* Gold Microchip */}
                  <div className="absolute right-3.5 top-7.5 w-6 h-5 bg-gradient-to-br from-amber-500/80 via-yellow-200 to-amber-500 rounded-[3px] border border-amber-600/50 flex flex-col p-0.5 opacity-85 select-none z-10">
                    <div className="w-full h-[1px] bg-amber-600/30 mt-1" />
                    <div className="w-full h-[1px] bg-amber-600/30 mt-1" />
                    <div className="flex h-full w-full justify-around mt-0.5">
                      <div className="w-[1px] h-full bg-amber-600/30" />
                      <div className="w-[1px] h-full bg-amber-600/30" />
                    </div>
                  </div>

                  {/* Profile Image Container */}
                  <div className="relative w-full h-[110px] sm:h-[120px] rounded-md border border-white/10 overflow-hidden bg-[#05050A] group-hover:border-cyan-500/35 transition-colors duration-300">
                    <Image
                      src="/images/aldy.png"
                      alt="Aldyan Satya"
                      fill
                      priority
                      className="object-cover object-top scale-[1.03] group-hover:scale-105 transition-transform duration-500"
                      sizes="170px"
                    />
                  </div>

                  {/* Developer Details */}
                  <div className="mt-2 space-y-0.5 select-none">
                    <div className="text-[9px] sm:text-[10px] font-bold tracking-wider text-text-primary uppercase leading-tight">
                      Aldyan Satya F.
                    </div>
                    <div className="text-[7px] sm:text-[7.5px] font-mono font-semibold tracking-wider text-cyan-400 uppercase leading-none">
                      Fullstack &amp; IoT Eng.
                    </div>
                  </div>

                  {/* Barcode and status */}
                  <div className="mt-auto pt-2 border-t border-white/5 flex items-end justify-between select-none">
                    {/* Barcode lines */}
                    <div className="flex space-x-[1.2px] sm:space-x-[1.5px] h-3.5 items-end opacity-40">
                      <div className="w-[1.5px] bg-white h-full" />
                      <div className="w-[0.5px] bg-white h-full" />
                      <div className="w-[1.5px] bg-white h-3/4" />
                      <div className="w-[2.5px] bg-white h-full" />
                      <div className="w-[0.5px] bg-white h-1/2" />
                      <div className="w-[1.5px] bg-white h-full" />
                      <div className="w-[0.5px] bg-white h-3/4" />
                      <div className="w-[2.5px] bg-white h-full" />
                      <div className="w-[1px] bg-white h-full" />
                      <div className="w-[1.5px] bg-white h-1/2" />
                      <div className="w-[0.5px] bg-white h-full" />
                    </div>

                    {/* Status badge */}
                    <div className="px-1.5 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20 flex items-center space-x-1">
                      <span className="w-1 h-1 rounded-full bg-emerald-500 relative flex">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                        <span className="relative inline-flex rounded-full h-1 w-1 bg-emerald-500" />
                      </span>
                      <span className="text-[6.5px] font-bold text-emerald-400 uppercase tracking-wider">
                        ACTIVE
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Bottom Statistics Card Bar (Flex row container) */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-20 py-4.5 px-4 sm:px-6 rounded-full border border-white/5 bg-white/3 flex flex-row items-center justify-between gap-1 overflow-x-auto md:overflow-x-visible scrollbar-none shadow-xl divide-x divide-white/5"
        >
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className={`flex items-center space-x-2.5 sm:space-x-3.5 py-1.5 ${
                idx > 0 ? 'pl-2 sm:pl-4 md:pl-6' : 'pl-0'
              } flex-1 justify-center min-w-max`}
            >
              <div className="p-2 sm:p-2.5 rounded-full bg-white/5 border border-white/5 flex items-center justify-center shrink-0">
                {React.cloneElement(stat.icon)}
              </div>
              <div className="min-w-0 text-left">
                <h4 className="text-sm sm:text-base md:text-xl font-extrabold text-text-primary leading-none">
                  {stat.value}
                </h4>
                <p className="text-[8px] sm:text-[9.5px] text-text-muted font-semibold uppercase tracking-wider mt-1.5 leading-tight truncate">
                  {stat.label}
                </p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
