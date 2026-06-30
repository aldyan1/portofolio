'use client';

import React from 'react';
import { Mail, Phone, ArrowUp } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/ui/BrandIcons';

const HandshakeVector = () => (
  <svg
    width="90"
    height="90"
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="text-cyan-400 shrink-0"
    style={{ filter: 'drop-shadow(0 0 10px rgba(6,182,212,0.3))' }}
  >
    {/* Outer dashed circles */}
    <circle cx="50" cy="50" r="42" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
    <circle cx="50" cy="50" r="37" stroke="url(#handshake-grad)" strokeWidth="0.6" opacity="0.5" />
    
    {/* Handshake line art */}
    {/* Left arm/sleeve */}
    <path d="M15 48 L28 44 L32 56 L15 54 Z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
    {/* Right arm/sleeve */}
    <path d="M85 48 L72 44 L68 56 L85 54 Z" stroke="url(#handshake-grad)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
    
    {/* Hands holding */}
    {/* Left hand details */}
    <path d="M32 50 C36 45, 42 45, 46 48" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    {/* Clasping fingers */}
    <path d="M46 48 C49 46, 52 46, 54 49 C56 52, 53 55, 49 55" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M45 51 C48 49, 51 49, 53 52 C54 55, 52 57, 48 57" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M44 54 C46 52, 49 52, 51 54 C52 56, 50 58, 47 59" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    
    {/* Right hand wrap */}
    <path d="M68 50 C64 45, 58 45, 54 48 C52 50, 52 53, 56 55 C60 57, 65 54, 68 50 Z" stroke="url(#handshake-grad)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    
    {/* Handshake action lines */}
    <path d="M48 38 C50 40, 52 40, 54 38" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" opacity="0.6" />
    <path d="M46 64 C49 62, 51 62, 54 64" stroke="url(#handshake-grad)" strokeWidth="0.8" strokeLinecap="round" opacity="0.6" />

    {/* Defs for gradient definition */}
    <defs>
      <linearGradient id="handshake-grad" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#a855f7" />
        <stop offset="100%" stopColor="#ec4899" />
      </linearGradient>
    </defs>
  </svg>
);

export default function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleScrollToContact = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#05050A] pt-16 pb-8 border-t border-white/5 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-purple-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Let's Work Together Container Box */}
        <div className="glass p-8 sm:p-10 rounded-2xl border border-white/10 hover:border-purple-500/30 bg-[#090810]/45 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 mb-12 relative overflow-hidden shadow-xl shadow-purple-500/[0.02] transition-all duration-500">
          <div className="absolute top-0 right-0 w-48 h-48 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

          {/* Left Area: Work together pitch */}
          <div className="flex-1 space-y-5 text-left">
            <h3 className="font-heading text-xl sm:text-2xl font-extrabold tracking-tight text-gradient-developer">
              LET&apos;S WORK TOGETHER
            </h3>
            <p className="text-text-muted text-xs sm:text-sm leading-relaxed max-w-md font-normal">
              Saya terbuka untuk peluang kerja, proyek freelance, atau kolaborasi menarik lainnya. Silakan hubungi saya melalui kontak di samping atau klik tombol di bawah ini.
            </p>
            <div className="pt-1">
              <button
                onClick={handleScrollToContact}
                className="px-6 py-3.5 bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-400 hover:to-purple-400 text-white font-bold text-xs rounded-full uppercase tracking-wider transition-all duration-300 shadow-md shadow-purple-500/20 cursor-pointer"
              >
                Get In Touch
              </button>
            </div>
          </div>

          {/* Vertical Divider (Desktop/Tablet Only) */}
          <div className="hidden md:block w-px bg-white/5 self-stretch mx-4" />

          {/* Right Area: Contact details with alternating Cyan/Purple Icons */}
          <div className="flex-1 flex flex-col justify-center space-y-4.5 w-full md:w-auto text-left">
            {/* Email */}
            <a
              href="mailto:aldyansatyafausta99@gmail.com"
              className="flex items-center space-x-3.5 group text-left"
            >
              <div className="text-cyan-400 shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <span className="text-text-primary/95 text-xs sm:text-sm font-semibold group-hover:text-cyan-400 transition-colors duration-200">
                aldyansatyafausta99@gmail.com
              </span>
            </a>

            {/* Phone */}
            <a
              href="https://wa.me/6281339314198"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3.5 group text-left"
            >
              <div className="text-purple-400 shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <span className="text-text-primary/95 text-xs sm:text-sm font-semibold group-hover:text-purple-400 transition-colors duration-200">
                +62 813-3931-4198
              </span>
            </a>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com/in/aldyansatya"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3.5 group text-left"
            >
              <div className="text-cyan-400 shrink-0">
                <LinkedinIcon size={19} />
              </div>
              <span className="text-text-primary/95 text-xs sm:text-sm font-semibold group-hover:text-cyan-400 transition-colors duration-200">
                linkedin.com/in/aldyansatya
              </span>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/aldyan1"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3.5 group text-left"
            >
              <div className="text-purple-400 shrink-0">
                <GithubIcon size={19} />
              </div>
              <span className="text-text-primary/95 text-xs sm:text-sm font-semibold group-hover:text-purple-400 transition-colors duration-200">
                github.com/aldyan1
              </span>
            </a>
          </div>
        </div>

        {/* Bottom copyright details and Scroll to top */}
        <div className="border-t border-white/5 pt-6 flex flex-row items-center justify-between">
          <div className="w-10" />
          <p className="text-xs text-text-muted text-center font-medium">
            &copy; 2025 Aldyan Satya Fausta. All rights reserved.
          </p>

          <button
            onClick={handleScrollToTop}
            className="p-2.5 rounded-full border border-white/10 hover:border-cyan-400 hover:text-cyan-400 bg-white/3 transition-all duration-300 cursor-pointer shadow shadow-white/5"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
