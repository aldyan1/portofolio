1. Product Overview
Nama Produk

Aldyan Satya Portfolio

Deskripsi

Website portofolio pribadi berbasis Next.js yang menampilkan profil, skill, pengalaman, dan project dengan desain Dark Gold Luxury yang modern, responsif, dan siap digunakan untuk personal branding profesional.

2. Tujuan Produk

Website ini bertujuan untuk:

Menampilkan identitas profesional
Menunjukkan skill teknis (Web, Mobile, IoT)
Menampilkan pengalaman organisasi & kepanitiaan
Menampilkan project secara profesional
Menjadi media personal branding untuk:
Magang
Kerja
Freelance
Networking
3. Target User
Primary User
HR / Recruiter
Perusahaan IT
Klien freelance
Secondary User
Dosen
Teman profesional
Komunitas developer
4. User Flow (Sederhana)
User masuk website
        ↓
Home (Hero Section)
        ↓
Scroll ke About
        ↓
Skills
        ↓
Experience
        ↓
Projects
        ↓
Contact

✔ Tidak ada login
✔ Tidak ada admin panel
✔ Semua statis / data lokal

5. Core Features
🏠 5.1 Home (Hero Section)
Tujuan:

Memberikan kesan pertama yang kuat

Isi:
Nama besar
Title: Web Developer / IoT / Mobile
CTA Button:
View Projects
Contact Me
Foto profil
Responsive Behavior:
Mobile → layout vertical (image atas)
Desktop → split 2 column
👤 5.2 About Section
Isi:
Deskripsi diri
Pendidikan
Minat teknologi
Organisasi
Responsive:
Mobile → stack vertical
Desktop → image + text side by side
⚡ 5.3 Skills Section
Format:

Kategori skill dalam card

Frontend
Backend
Mobile
Database
IoT
Responsive Rules:
Mobile → 1–2 column grid
Tablet → 3 column
Desktop → 4–6 column
🧠 5.4 Experience Section
Format:

Timeline vertical

Contoh:

Ketua Acara
HMPTI
Panitia Event
Responsive:
Mobile → single column timeline
Desktop → centered timeline vertical
🚀 5.5 Projects Section (CORE FEATURE)
Isi setiap project:
Thumbnail
Nama project
Deskripsi singkat
Tech stack
Link detail / GitHub
Responsive:
Mobile → 1 column
Tablet → 2 column
Desktop → 3 column grid
UX:
Hover animation
Card clickable
Smooth transition
📩 5.6 Contact Section
Isi:
Email
GitHub
LinkedIn
WhatsApp (optional)
Optional form:
Nama
Email
Pesan
Responsive:
Mobile → stacked form
Desktop → form + info side by side
🦶 5.7 Footer
Nama
Role
Social links
Copyright
6. UI/UX Design System
🎨 Theme: Dark Gold Luxury
Color Palette:
Background: #0F0F0F
Card      : #1A1A1A
Gold      : #D4AF37
Gold Hover: #F5D76E
Text      : #FFFFFF
Muted     : #A0A0A0
Border    : #2A2A2A
Typography:
Font: Inter / Poppins
Heading: Bold
Body: Regular
Style Principles:
Minimalist
Elegant
High spacing (airy)
Gold accent only for highlight
Focus on readability
7. Responsive Design System (IMPORTANT)
Breakpoints:
Mobile   : < 640px
Tablet   : 640px - 1024px
Desktop  : > 1024px
Layout Rules:
Mobile First
Layout vertical
Font lebih kecil
Grid 1 column
Tablet
Grid 2–3 column
Hero mulai horizontal
Desktop
Full layout split
Grid 3 column project
Sidebar-like spacing
8. Tech Stack
Frontend
Next.js
TypeScript
Tailwind CSS
Framer Motion
Deployment
Vercel
9. Data Strategy (NO DATABASE)

Semua data disimpan secara static:

src/data/
├── projects.ts
├── skills.ts
└── experience.ts
Keuntungan:
Cepat
Gratis hosting
Mudah di-maintain
SEO lebih baik
10. Performance Requirements
Lighthouse score ≥ 90
First load < 2.5s
Image optimization (Next.js Image)
Lazy loading project cards
11. SEO Requirements
Meta title dynamic
Meta description
Open Graph image
Sitemap.xml
Clean URL:
/projects
/projects/[slug]
12. Animation System
Page transition fade
Scroll reveal section
Card hover scale + glow gold
Button hover smooth
13. File Structure (Final)
src/
├── app/
│   ├── page.tsx
│   ├── projects/
│   │   ├── page.tsx
│   │   └── [slug]/page.tsx
│
├── components/
│   ├── layout/
│   ├── sections/
│   └── ui/
│
├── data/
│   ├── projects.ts
│   ├── skills.ts
│   └── experience.ts
│
├── lib/
├── types/
├── styles/
└── public/
14. Non-Functional Requirements
Fully responsive (mobile-first)
Fast loading
Clean code structure
Easy to extend
Maintainable without backend
15. MVP Scope (Version 1)
Wajib ada:
Home
About
Skills
Experience
Projects
Contact
Responsive design
Tidak ada:
Admin panel ❌
Database ❌
Login system ❌
16.Multilingual (EN/ID)
