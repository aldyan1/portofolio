export interface Project {
  slug: string;
  title: string;
  category: 'web' | 'mobile' | 'iot' | 'game';
  techStack: string[];
  githubLink: string;
  liveLink?: string;
  thumbnail: string;
  summary: {
    en: string;
    id: string;
  };
  description: {
    en: string;
    id: string;
  };
  features: {
    en: string[];
    id: string[];
  };
  challenges: {
    en: string;
    id: string;
  };
  solutions: {
    en: string;
    id: string;
  };
}

export const projectsData: Project[] = [
  {
    slug: 'akara-co-ecommerce-kacamata',
    title: 'Akara.co Eyewear E-commerce',
    category: 'web',
    techStack: ['React', 'Vite', 'Node.js', 'MySQL'],
    githubLink: 'https://github.com/aldyan1/akara.co/tree/main',
    liveLink: 'https://akara.aldyan1.me',
    thumbnail: '/images/akara.png',
    summary: {
      en: 'A high-end responsive e-commerce web platform for selling premium eyewear with secure Stripe payments.',
      id: 'Platform web e-commerce responsif kelas atas untuk penjualan kacamata premium dengan pembayaran Stripe yang aman.'
    },
    description: {
      en: 'Akara.co is a modern, responsive web storefront built to provide a premium online shopping experience for luxury eyewear. It integrates Stripe for payments, Zustand for shopping cart state management, and Supabase for database storage and product catalog.',
      id: 'Akara.co adalah toko online web responsif modern yang dibangun untuk memberikan pengalaman belanja online premium kacamata mewah. Mengintegrasikan Stripe untuk pembayaran, Zustand untuk manajemen state keranjang belanja, dan Supabase untuk database dan katalog produk.'
    },
    features: {
      en: [
        'Premium design system with smooth zoom preview',
        'Integrated Stripe checkout with instant webhook confirmation',
        'Responsive and accessible catalog layout with custom filters',
        'Supabase backend for secure user accounts and order tracking'
      ],
      id: [
        'Sistem desain premium dengan pratinjau zoom yang mulus',
        'Checkout Stripe terintegrasi dengan konfirmasi webhook instan',
        'Katalog responsif dan ramah aksesibilitas dengan filter khusus',
        'Backend Supabase untuk akun pengguna dan pelacakan pesanan yang aman'
      ]
    },
    challenges: {
      en: 'Ensuring smooth transitions and high-performance product sorting across large amounts of eyewear configurations.',
      id: 'Memastikan transisi yang mulus dan pengurutan produk berkinerja tinggi di berbagai konfigurasi kacamata.'
    },
    solutions: {
      en: 'Optimized image queries with Next.js Image component and cached database calls using React Server Components.',
      id: 'Mengoptimalkan kueri gambar dengan komponen Next.js Image dan menyimpan panggilan database menggunakan React Server Components.'
    }
  },
  {
    slug: 'bughats-coffee-web-pos',
    title: 'Bughats Coffee POS System',
    category: 'web',
    techStack: ['Laravel', 'MySQL', 'Blade'],
    githubLink: 'https://github.com/aldyan1/bughats',
    liveLink: 'https://bughats-pos.aldyan1.me',
    thumbnail: '/images/bughats.png',
    summary: {
      en: 'A responsive web Point-of-Sale (POS) application designed to streamline order taking and transaction management for cafes.',
      id: 'Aplikasi web Point-of-Sale (POS) responsif yang dirancang untuk merampingkan pengambilan pesanan dan manajemen transaksi untuk kafe.'
    },
    description: {
      en: 'Bughats Coffee Web POS is a dedicated cashier and inventory management application designed to handle rapid sales workflows, order customization, and transaction tracking. Built on React and styled with Tailwind CSS, it connects to a reliable MySQL database.',
      id: 'Bughats Coffee Web POS adalah aplikasi kasir dan manajemen inventaris khusus yang dirancang untuk menangani alur kerja penjualan yang cepat, kustomisasi pesanan, dan pelacakan transaksi. Dibangun di atas React dan ditata dengan Tailwind CSS, terhubung ke database MySQL yang andal.'
    },
    features: {
      en: [
        'Interactive menu selection with customization options (size, sugar, ice level)',
        'Real-time sales dashboard reporting daily profits and inventory depletion',
        'Printable invoice generation and digital receipt email delivery',
        'Multi-role cashier and admin access levels'
      ],
      id: [
        'Pemilihan menu interaktif dengan opsi kustomisasi (ukuran, gula, tingkat es)',
        'Dashboard penjualan real-time yang melaporkan keuntungan harian dan penyusutan inventaris',
        'Pembuatan faktur yang dapat dicetak dan pengiriman struk belanja digital via email',
        'Tingkat akses multi-peran kasir dan admin'
      ]
    },
    challenges: {
      en: 'Maintaining fast response times in cash register interfaces during high-traffic peak hours.',
      id: 'Mempertahankan waktu respons yang cepat pada antarmuka mesin kasir selama jam-jam sibuk dengan lalu lintas tinggi.'
    },
    solutions: {
      en: 'Implemented state management optimizations using React context and debounced transaction submissions to ensure smooth operations.',
      id: 'Menerapkan optimasi manajemen state menggunakan React context dan membatasi (debounce) pengiriman transaksi untuk kelancaran operasional.'
    }
  },
  {
    slug: 'hirelink-job-finder',
    title: 'Hirelink Job Finder App',
    category: 'mobile',
    techStack: ['Flutter', 'Supabase'],
    githubLink: 'https://github.com/aldyan1/hirelink',
    thumbnail: '/images/hirelink.png',
    summary: {
      en: 'A cross-platform mobile application for job search, resume upload, and real-time application tracking.',
      id: 'Aplikasi seluler lintas platform untuk pencarian kerja, unggah CV/resume, dan pelacakan lamaran kerja secara real-time.'
    },
    description: {
      en: 'Hirelink is a sleek, cross-platform mobile app that bridges the gap between job seekers and employers. Built with React Native and Expo, it allows candidates to search listings, apply instantly, and receive real-time notifications.',
      id: 'Hirelink adalah aplikasi seluler lintas platform yang menjembatani pencari kerja dan pemberi kerja. Dibangun dengan React Native dan Expo, aplikasi ini memungkinkan kandidat untuk mencari lowongan, melamar secara instan, dan menerima notifikasi real-time.'
    },
    features: {
      en: [
        'Advanced job search filters by salary, role, location, and commitment type',
        'In-app PDF resume builder and profile management',
        'Real-time application status tracking with instant push alerts',
        'Saved jobs bookmarking and employer chat system integration'
      ],
      id: [
        'Filter pencarian kerja lanjutan berdasarkan gaji, peran, lokasi, dan jenis komitmen',
        'Pembuat resume PDF dalam aplikasi dan manajemen profil',
        'Pelacakan status lamaran real-time dengan peringatan notifikasi instan',
        'Penyimpanan lowongan favorit dan integrasi sistem obrolan dengan pemberi kerja'
      ]
    },
    challenges: {
      en: 'Handling large-scale PDF uploads and parsing resume details accurately on low-bandwidth mobile connections.',
      id: 'Menangani unggahan PDF skala besar dan menganalisis detail resume secara akurat pada koneksi seluler bandwidth rendah.'
    },
    solutions: {
      en: 'Integrated Supabase Storage for secure PDF uploads and optimized upload speeds through compression and direct client-side requests.',
      id: 'Mengintegrasikan Supabase Storage untuk unggahan PDF yang aman dan mengoptimalkan kecepatan unggah melalui kompresi dan permintaan langsung sisi klien.'
    }
  },
  {
    slug: 'doppler-speed-detector',
    title: 'Doppler Speed Detector (IoT)',
    category: 'iot',
    techStack: ['React', 'Vite', 'Laravel', 'MySQL', 'MQTT', 'Websockets'],
    githubLink: 'https://github.com/aldyan1/doppler-speed-detector',
    thumbnail: '/images/iot.png',
    summary: {
      en: 'An IoT speed detection device utilizing the Doppler effect method for real-time velocity measurement.',
      id: 'Perangkat IoT pendeteksi kecepatan menggunakan metode efek Doppler untuk pengukuran kecepatan real-time.'
    },
    description: {
      en: 'This IoT device uses a Doppler radar sensor (such as the HB100 module) paired with an ESP32 microcontroller to measure the speed of moving objects. The calculated velocity is shown on a local OLED screen and pushed via Wi-Fi to a database for cloud monitoring.',
      id: 'Perangkat IoT ini menggunakan sensor radar Doppler (seperti modul HB100) yang dipasangkan dengan mikrokontroler ESP32 untuk mengukur kecepatan objek bergerak. Kecepatan yang dihitung ditampilkan di layar OLED lokal dan dikirim via Wi-Fi ke database untuk pemantauan cloud.'
    },
    features: {
      en: [
        'Accurate real-time velocity detection based on radio frequency shifts',
        'Local OLED screen indicating current speed and direction of movement',
        'Cloud integration syncing data to web dashboards with minimal latency',
        'Over-the-Air (OTA) firmware update capability for remote maintenance'
      ],
      id: [
        'Deteksi kecepatan real-time yang akurat berdasarkan pergeseran frekuensi radio',
        'Layar OLED lokal yang menunjukkan kecepatan saat ini dan arah pergerakan',
        'Integrasi cloud untuk sinkronisasi data ke dashboard web dengan latensi minimal',
        'Kemampuan pembaruan firmware Over-the-Air (OTA) untuk pemeliharaan jarak jauh'
      ]
    },
    challenges: {
      en: 'Filtering out surrounding environmental noise and static reflections to isolate target motion.',
      id: 'Menyaring kebisingan lingkungan sekitar dan refleksi statis untuk mengisolasi pergerakan target.'
    },
    solutions: {
      en: 'Developed custom signal processing algorithms in Arduino IDE and configured hardware bandpass filters to amplify the Doppler frequency.',
      id: 'Mengembangkan algoritma pemrosesan sinyal kustom di Arduino IDE dan mengonfigurasi filter hardware bandpass untuk memperkuat frekuensi Doppler.'
    }
  },
  {
    slug: 'spaceman-space-shooter-game',
    title: 'Spaceman Space Shooter Game',
    category: 'game',
    techStack: ['Python'],
    githubLink: 'https://github.com/aldyan1/spaceman',
    thumbnail: '/images/spaceman.png',
    summary: {
      en: 'A classic 2D retro space shooter game featuring intense arcade action, weapon upgrades, and asteroid dodge mechanics.',
      id: 'Game tembak-tembakan luar angkasa retro 2D klasik yang menampilkan aksi arkade yang seru, peningkatan senjata, dan mekanik menghindar asteroid.'
    },
    description: {
      en: 'Spaceman is a retro-inspired 2D arcade shooter built on HTML5 Canvas and JavaScript. Players command a spaceship to fight waves of space alien invaders, gather power-ups, upgrade weapon configurations, and survive asteroid belts.',
      id: 'Spaceman adalah game tembak-tembakan arkade 2D bertema retro yang dibangun dengan HTML5 Canvas dan JavaScript. Pemain mengomandoi pesawat luar angkasa untuk melawan gelombang penyerang asing, mengumpulkan kekuatan tambahan (power-ups), meningkatkan senjata, dan bertahan dari sabuk asteroid.'
    },
    features: {
      en: [
        'Fluid spaceship movement and dynamic weapon fire physics',
        'Endless difficulty progression with randomized asteroid waves',
        'Immersive retro sound effects and background synthesizer music using Web Audio API',
        'Global high score leaderboard saved locally'
      ],
      id: [
        'Pergerakan pesawat luar angkasa yang mulus dan fisika tembakan senjata yang dinamis',
        'Progres tingkat kesulitan tanpa akhir dengan gelombang asteroid acak',
        'Efek suara retro yang imersif dan musik latar synthesizer menggunakan Web Audio API',
        'Papan peringkat skor tertinggi global yang disimpan secara lokal'
      ]
    },
    challenges: {
      en: 'Maintaining consistent collision detection and rendering 60 FPS performance on complex mobile and desktop browsers.',
      id: 'Mempertahankan deteksi tabrakan yang konsisten dan kinerja render 60 FPS pada browser seluler dan desktop yang rumit.'
    },
    solutions: {
      en: 'Optimized the game rendering loop using requestAnimationFrame and implemented object pooling for lasers and asteroid particles to prevent garbage collection spikes.',
      id: 'Mengoptimalkan loop render game menggunakan requestAnimationFrame dan menerapkan object pooling untuk laser dan partikel asteroid guna mencegah lonjakan pembersihan memori (garbage collection).'
    }
  }
];
