'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

type Locale = 'en' | 'id';

interface Translations {
  [key: string]: {
    en: string;
    id: string;
  };
}

const uiTranslations: Translations = {
  // Navbar
  navHome: { en: 'Home', id: 'Beranda' },
  navAbout: { en: 'About', id: 'Tentang' },
  navSkills: { en: 'Skills', id: 'Keahlian' },
  navExperience: { en: 'Experience', id: 'Pengalaman' },
  navProjects: { en: 'Projects', id: 'Proyek' },
  navContact: { en: 'Contact', id: 'Kontak' },

  // Hero Section
  heroGreeting: { en: "Hello, I'm", id: "Hello, I'm" },
  heroSubtitle: { 
    en: 'Informatics Engineering student focusing on mobile app, web, and IoT development with modern technologies.', 
    id: 'Mahasiswa Teknik Informatika yang berfokus pada pengembangan aplikasi mobile, web, dan IoT dengan teknologi modern.' 
  },
  heroCtaProjects: { en: 'Download CV', id: 'Download CV' },
  heroCtaContact: { en: 'Contact Me', id: 'Contact Me' },

  // About Section
  aboutHeading: { en: 'About Me', id: 'Tentang Saya' },
  aboutDesc: {
    en: 'I am an Informatics Engineering student focusing on building high-performance web systems, intuitive mobile apps, and connected IoT solutions. Combining software engineering with hardware integration allows me to bring creative and efficient ideas to life.',
    id: 'Saya adalah mahasiswa Teknik Informatika yang berdedikasi yang fokus pada pembangunan sistem web berkinerja tinggi, aplikasi seluler yang intuitif, dan solusi IoT yang saling terhubung. Menggabungkan rekayasa perangkat lunak dengan integrasi perangkat keras memungkinkan saya merealisasikan ide secara kreatif dan efisien.'
  },
  aboutEducation: { en: 'Education', id: 'Pendidikan' },
  aboutDegree: { en: 'Informatics Engineering Student', id: 'Mahasiswa Teknik Informatika' },
  aboutUni: { en: 'Universitas Duta Bangsa', id: 'Universitas Duta Bangsa' },
  aboutEduPeriod: { en: '2023 - Present', id: '2023 - Sekarang' },
  aboutInterests: { en: 'Technology Interests', id: 'Minat Teknologi' },
  aboutIntWeb: { en: 'Web Architectures & APIs', id: 'Arsitektur Web & API' },
  aboutIntIot: { en: 'Smart Automation & Embedded Systems', id: 'Otomasi Cerdas & Sistem Tertanam' },
  aboutIntMobile: { en: 'Fluid Cross-platform UI/UX', id: 'UI/UX Lintas Platform yang Mulus' },

  // Skills Section
  skillsHeading: { en: 'Technical Expertise', id: 'Keahlian Teknis' },
  skillsSub: { en: 'A curated list of technologies I work with', id: 'Daftar teknologi yang saya gunakan' },

  // Experience Section
  expHeading: { en: 'Experience & Activities', id: 'Pengalaman & Aktivitas' },
  expSub: { en: 'My organizational roles and development journey', id: 'Perjalanan organisasi dan pengembangan saya' },

  // Projects Section
  projHeading: { en: 'Featured Projects', id: 'Proyek Unggulan' },
  projSub: { en: 'Explore some of my recent web, mobile, and IoT works', id: 'Jelajahi beberapa karya web, mobile, dan IoT terbaru saya' },
  projAll: { en: 'All', id: 'Semua' },
  projWeb: { en: 'Web Apps', id: 'Aplikasi Web' },
  projMobile: { en: 'Mobile Apps', id: 'Aplikasi Seluler' },
  projIot: { en: 'IoT & Hardware', id: 'IoT & Perangkat Keras' },
  projGame: { en: 'Games', id: 'Game' },
  projViewDetail: { en: 'View Details', id: 'Lihat Detail' },
  projRepo: { en: 'GitHub Repository', id: 'Repositori GitHub' },
  projLive: { en: 'Live Demo', id: 'Demo Langsung' },
  projFilterLabel: { en: 'Filter by Category', id: 'Filter berdasarkan Kategori' },

  // Project Detail Page
  detailTechStack: { en: 'Technology Stack', id: 'Teknologi yang Digunakan' },
  detailFeatures: { en: 'Key Features & Capabilities', id: 'Fitur Utama & Kemampuan' },
  detailChallenge: { en: 'The Challenge', id: 'Tantangan' },
  detailSolution: { en: 'The Solution', id: 'Solusi' },
  detailBack: { en: 'Back to Projects', id: 'Kembali ke Proyek' },

  // Contact Section
  contactHeading: { en: 'Get In Touch', id: 'Hubungi Saya' },
  contactSub: { en: 'Have a project in mind or want to collaborate? Send me a message!', id: 'Punya ide proyek atau ingin berkolaborasi? Kirimkan saya pesan!' },
  contactName: { en: 'Full Name', id: 'Nama Lengkap' },
  contactEmail: { en: 'Email Address', id: 'Alamat Email' },
  contactMsg: { en: 'Your Message', id: 'Pesan Anda' },
  contactSend: { en: 'Send Message', id: 'Kirim Pesan' },
  contactSending: { en: 'Sending...', id: 'Mengirim...' },
  contactSuccess: { en: 'Thank you! Your message was sent successfully.', id: 'Terima kasih! Pesan Anda berhasil dikirim.' },
  contactError: { en: 'Something went wrong. Please try again.', id: 'Terjadi kesalahan. Silakan coba lagi.' },

  // Footer
  footerCopyright: { en: 'All rights reserved.', id: 'Hak cipta dilindungi undang-undang.' }
};

interface LanguageContextType {
  locale: Locale;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [locale, setLocale] = useState<Locale>('id'); // Default to Indonesian based on user preferences

  useEffect(() => {
    // Sync with localStorage if client side
    const savedLocale = localStorage.getItem('language_locale') as Locale;
    if (savedLocale === 'en' || savedLocale === 'id') {
      setLocale(savedLocale);
    }
  }, []);

  const toggleLanguage = () => {
    const nextLocale = locale === 'en' ? 'id' : 'en';
    setLocale(nextLocale);
    localStorage.setItem('language_locale', nextLocale);
  };

  const t = (key: string): string => {
    const translation = uiTranslations[key];
    if (!translation) return key;
    return translation[locale];
  };

  return (
    <LanguageContext.Provider value={{ locale, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
