'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';

export default function Navbar() {
  const { locale, toggleLanguage, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      if (pathname === '/') {
        const sections = ['home', 'about', 'projects', 'skills', 'experience', 'contact'];
        const scrollPosition = window.scrollY + 180;

        for (const section of sections) {
          const el = document.getElementById(section);
          if (el) {
            const top = el.offsetTop;
            const height = el.offsetHeight;
            if (scrollPosition >= top && scrollPosition < top + height) {
              setActiveSection(section);
              break;
            }
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [pathname]);

  const navItems = [
    { name: 'Home', id: 'home', href: '#home' },
    { name: 'About', id: 'about', href: '#about' },
    { name: 'Projects', id: 'projects', href: '#projects' },
    { name: 'Skills', id: 'skills', href: '#skills' },
    { name: 'Experience', id: 'experience', href: '#experience' },
    { name: 'Contact', id: 'contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    setIsOpen(false);
    setActiveSection(id);
    if (pathname === '/') {
      e.preventDefault();
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      <nav
        className={`fixed left-0 right-0 z-50 transition-all duration-500 px-4 md:px-8 ${
          scrolled ? 'top-4' : 'top-6'
        }`}
      >
        <div
          className={`max-w-6xl mx-auto px-6 py-3 flex items-center justify-between transition-all duration-500 ${
            scrolled
              ? 'glass-capsule shadow-[0_8px_32px_rgba(0,0,0,0.6)] border-white/10 bg-[#090810]/75'
              : 'border-b border-transparent bg-transparent py-4'
          }`}
        >
          {/* Logo "ASF Aldyan Satya Fausta" */}
          <Link href="/" className="font-heading font-bold text-lg tracking-wider text-text-primary flex items-center group">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent font-extrabold mr-1.5 text-xl tracking-tighter group-hover:scale-105 transition-transform duration-300">
              ASF
            </span>
            <span className="text-text-primary font-semibold text-sm tracking-wide whitespace-nowrap opacity-90">
              Aldyan Satya Fausta
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-7">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={pathname === '/' ? item.href : `/${item.href}`}
                  onClick={(e) => handleNavClick(e, item.id)}
                  className={`text-[12.5px] font-medium transition-all duration-300 relative py-1.5 ${
                    isActive ? 'text-cyan-400' : 'text-text-muted hover:text-white'
                  }`}
                >
                  {item.name}
                  {isActive && (
                    <motion.span
                      layoutId="activeUnderline"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 shadow-[0_0_10px_rgba(6,182,212,0.8)] rounded-full"
                    />
                  )}
                </a>
              );
            })}
          </div>

          {/* Right Action Items */}
          <div className="hidden md:flex items-center space-x-3.5">
            {/* Language Switcher */}
            <button
              onClick={toggleLanguage}
              className="flex items-center space-x-1 px-3 py-1.5 rounded-full border border-white/10 hover:border-cyan-500/30 text-[10px] font-bold text-text-primary transition-all duration-300 hover:bg-cyan-500/5"
              aria-label="Change Language"
            >
              <Globe className="w-3 h-3 text-cyan-400" />
              <span>{locale === 'en' ? 'EN' : 'ID'}</span>
            </button>

            {/* Hire Me Button with Gradient Hover Outline */}
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, 'contact')}
              className="px-4.5 py-1.5 border border-white/10 hover:border-cyan-400 text-xs font-bold text-text-primary hover:text-cyan-400 rounded-full transition-all duration-300 bg-white/5 hover:bg-cyan-950/20"
            >
              Hire Me
            </a>
          </div>

          {/* Mobile Hamburguer Menu */}
          <div className="md:hidden flex items-center space-x-3">
            {/* Lang Switcher */}
            <button
              onClick={toggleLanguage}
              className="flex items-center space-x-1 px-2.5 py-1.5 rounded-full border border-white/10 text-[10px] font-semibold text-text-primary"
            >
              <Globe className="w-3 h-3 text-cyan-400" />
              <span>{locale === 'en' ? 'EN' : 'ID'}</span>
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-1.5 text-text-primary hover:text-cyan-400 transition-colors"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 left-0 w-full h-screen bg-[#06050b] z-40 flex flex-col justify-center px-8"
          >
            {/* Background elements */}
            <div className="absolute top-1/4 left-1/4 w-84 h-84 bg-purple-500/10 rounded-full blur-[100px] pointer-events-none" />
            
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-6 right-6 p-1.5 text-text-primary hover:text-cyan-400 transition-colors"
            >
              <X className="w-8 h-8" />
            </button>
            
            <div className="flex flex-col space-y-6 text-center z-10">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={pathname === '/' ? item.href : `/${item.href}`}
                  onClick={(e) => handleNavClick(e, item.id)}
                  className={`text-2xl font-heading font-medium transition-colors ${
                    activeSection === item.id ? 'text-cyan-400 font-bold' : 'text-text-muted hover:text-white'
                  }`}
                >
                  {item.name}
                </a>
              ))}

              {/* Hire Me Mobile */}
              <div className="pt-6">
                <a
                  href="#contact"
                  onClick={(e) => handleNavClick(e, 'contact')}
                  className="inline-block px-8 py-3 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 text-white font-bold rounded-full text-sm tracking-wide"
                >
                  Hire Me
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
