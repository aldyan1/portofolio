export interface ExperienceItem {
  id: string;
  role: {
    en: string;
    id: string;
  };
  organization: string;
  period: string; // e.g. "2024 - 2025"
  type: 'work' | 'organization' | 'freelance';
  description: {
    en: string[];
    id: string[];
  };
}

export const experienceData: ExperienceItem[] = [
  {
    id: 'exp-4',
    role: {
      en: 'Active Member of Public Relations Division',
      id: 'Anggota Aktif Divisi Hubungan Masyarakat'
    },
    organization: 'HMPTI',
    period: 'Jan 2024 - Dec 2024',
    type: 'organization',
    description: {
      en: [
        'Bridged communication between HMPTI, student members, and faculty coordinators for academic and extra-curricular programs.',
        'Organized student community gatherings, knowledge-sharing talks, and study groups focusing on basic web and mobile development.'
      ],
      id: [
        'Menjadi jembatan komunikasi antara HMPTI, mahasiswa anggota, dan koordinator fakultas untuk program akademik maupun ekstrakurikuler.',
        'Menyelenggarakan pertemuan komunitas mahasiswa, sesi berbagi pengetahuan, dan kelompok belajar yang berfokus pada pengembangan web dan mobile dasar.'
      ]
    }
  },
  {
    id: 'exp-1',
    role: {
      en: 'Chairman of Sibermati Event',
      id: 'Ketua Acara Sibermati'
    },
    organization: 'HMPTI (Himpunan Mahasiswa Program Studi Teknologi Informasi)',
    period: '26 September 2025',
    type: 'organization',
    description: {
      en: [
        'Led a committee of 35+ students to host the annual IT competition and Sibermati technology seminar.',
        'Managed budget allocations, secured sponsorship deals with tech firms, and coordinated guest speakers from leading tech companies.',
        'Oversaw the design and implementation of the registration web portal.'
      ],
      id: [
        'Memimpin panitia beranggotakan 35+ mahasiswa untuk menyelenggarakan kompetisi IT tahunan dan seminar teknologi Sibermati.',
        'Mengelola alokasi anggaran, mengamankan kesepakatan sponsorship dengan perusahaan teknologi, dan mengoordinasikan pembicara tamu dari perusahaan teknologi terkemuka.',
        'Mengawasi desain dan implementasi portal web pendaftaran.'
      ]
    }
  },
  {
    id: 'exp-2',
    role: {
      en: 'Freelance Fullstack Developer',
      id: 'Developer Fullstack Lepas (Freelance)'
    },
    organization: 'Self-Employed',
    period: 'Jan 2024 - Present',
    type: 'freelance',
    description: {
      en: [
        'Designed and deployed dynamic and secure web applications and APIs for enterprise and retail clients.',
        'Created responsive portfolio, company profile, and e-commerce websites utilizing Next.js, React, and Node.js.',
        'Consulted clients on system architecture, database design, and backend/frontend performance optimization.'
      ],
      id: [
        'Merancang dan menerapkan aplikasi web serta API yang dinamis dan aman untuk klien enterprise maupun retail.',
        'Membuat website portofolio, profil perusahaan, dan e-commerce responsif menggunakan Next.js, React, dan Node.js.',
        'Berkonsultasi dengan klien terkait arsitektur sistem, desain database, dan optimasi performa backend/frontend.'
      ]
    }
  },
  {
    id: 'exp-3',
    role: {
      en: 'Master of Ceremony for HMPTI Sibermati Seminar',
      id: 'Master of Ceremony HMPTI Seminar Sibermati'
    },
    organization: 'HMPTI - Seminar Sibermati Committee',
    period: 'September 26, 2025',
    type: 'organization',
    description: {
      en: [
        'Hosted the Sibermati seminar organized by HMPTI, ensuring the event ran interactively, smoothly, and strictly on schedule.',
        'Engaged dynamically with hundreds of attendees and guest speakers to maintain an energetic and professional atmosphere.',
        'Collaborated with the organizing committee and technical staff to guarantee seamless transitions between event sessions.'
      ],
      id: [
        'Memandu jalannya seminar Sibermati yang diselenggarakan oleh HMPTI agar berjalan interaktif, kondusif, dan sesuai waktu.',
        'Membangun interaksi yang dinamis dengan ratusan peserta dan pembicara seminar.',
        'Bekerja sama dengan panitia penyelenggara dan tim teknis untuk memastikan kelancaran transisi setiap sesi acara.'
      ]
    }
  }
];
