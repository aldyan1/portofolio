export interface Skill {
  name: string;
  category: 'frontend' | 'backend' | 'mobile' | 'database' | 'iot';
  level: number; // percentage
  iconName: string;
}

export interface SkillCategoryInfo {
  id: 'frontend' | 'backend' | 'mobile' | 'database' | 'iot';
  title: {
    en: string;
    id: string;
  };
  description: {
    en: string;
    id: string;
  };
}

export const skillCategories: SkillCategoryInfo[] = [
  {
    id: 'frontend',
    title: { en: 'Frontend Development', id: 'Pengembangan Frontend' },
    description: { en: 'Crafting responsive, clean, and interactive user interfaces.', id: 'Membuat antarmuka pengguna yang responsif, bersih, dan interaktif.' }
  },
  {
    id: 'backend',
    title: { en: 'Backend Systems', id: 'Sistem Backend' },
    description: { en: 'Designing scalable APIs, servers, and business logic.', id: 'Merancang API, server, dan logika bisnis yang skalabel.' }
  },
  {
    id: 'mobile',
    title: { en: 'Mobile Development', id: 'Pengembangan Mobile' },
    description: { en: 'Building cross-platform mobile apps for Android & iOS.', id: 'Membangun aplikasi mobile lintas platform untuk Android & iOS.' }
  },
  {
    id: 'database',
    title: { en: 'Database & Cloud', id: 'Database & Cloud' },
    description: { en: 'Managing reliable, efficient data storage and hosting.', id: 'Mengelola penyimpanan data dan hosting yang andal dan efisien.' }
  },
  {
    id: 'iot',
    title: { en: 'Internet of Things (IoT)', id: 'Internet of Things (IoT)' },
    description: { en: 'Integrating microcontrollers, sensors, and real-time networks.', id: 'Mengintegrasikan mikrokontroler, sensor, dan jaringan real-time.' }
  }
];

export const skillsData: Skill[] = [
  // Frontend
  { name: 'React.js', category: 'frontend', level: 90, iconName: 'React' },
  { name: 'Next.js', category: 'frontend', level: 85, iconName: 'Next' },
  { name: 'Vue.js', category: 'frontend', level: 80, iconName: 'Vue' },
  { name: 'TypeScript', category: 'frontend', level: 80, iconName: 'TypeScript' },
  { name: 'Tailwind CSS', category: 'frontend', level: 95, iconName: 'Tailwind' },
  { name: 'Blade (Laravel)', category: 'frontend', level: 85, iconName: 'Blade' },
  { name: 'Framer Motion', category: 'frontend', level: 75, iconName: 'Motion' },

  // Backend
  { name: 'Laravel', category: 'backend', level: 85, iconName: 'Laravel' },
  { name: 'Node.js', category: 'backend', level: 85, iconName: 'Node' },
  { name: 'Python', category: 'backend', level: 80, iconName: 'Python' },
  { name: 'Express.js', category: 'backend', level: 85, iconName: 'Express' },
  { name: 'NestJS', category: 'backend', level: 70, iconName: 'Nest' },
  { name: 'REST APIs', category: 'backend', level: 90, iconName: 'Api' },

  // Mobile
  { name: 'React Native', category: 'mobile', level: 80, iconName: 'Mobile' },
  { name: 'Flutter', category: 'mobile', level: 75, iconName: 'Flutter' },

  // Database
  { name: 'PostgreSQL', category: 'database', level: 80, iconName: 'Postgres' },
  { name: 'Supabase', category: 'database', level: 85, iconName: 'Supabase' },
  { name: 'MySQL / MariaDB', category: 'database', level: 85, iconName: 'Mysql' },
  { name: 'Firebase', category: 'database', level: 80, iconName: 'Firebase' },

  // IoT
  { name: 'Arduino IDE', category: 'iot', level: 90, iconName: 'Arduino' },
  { name: 'ESP32 / ESP8266', category: 'iot', level: 85, iconName: 'Esp' },
  { name: 'MQTT / HTTP Protocols', category: 'iot', level: 80, iconName: 'Mqtt' }
];
