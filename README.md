<div align="center">

# Zobayer Hosen — Portfolio

### Full Stack Developer • Problem Solver • Tech Enthusiast

<br/>

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="./src/assets/zobayer.jpg">
  <img src="./src/assets/zobayer.jpg" alt="Zobayer Hosen" width="180" height="180" style="border-radius: 50%; object-fit: cover; border: 3px solid #6366f1;" />
</picture>

<br/><br/>

[![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/zobayerhb)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/zobayerhosen)
[![Portfolio](https://img.shields.io/badge/Portfolio-8B5CF6?style=for-the-badge&logo=react&logoColor=white)](https://zobayer-portfolio.vercel.app)

<br/>

**A modern, animated portfolio built with React 19 + Vite 8 + Tailwind CSS 4**

</div>

---

## 🧑‍💻 About Me

Hi! I'm **Zobayer Hosen**, a passionate Full Stack Developer based in **Bangladesh**. I specialize in building modern, interactive, and beautiful web applications that are both performant and accessible.

- 🚀 **3+ years** of professional experience
- 📦 **30+ projects** delivered across diverse domains
- 🤝 **15+ happy clients** worldwide
- 🌱 Constantly exploring new technologies
- ✍️ Writing technical articles to share knowledge

After hours, you'll find me contributing to open-source projects, learning cutting-edge tools, or crafting side projects that push the boundaries of what the web can do.

---

## ✨ Features

| Feature | Details |
|---|---|
| 🎨 **Animated UI** | Smooth scroll-triggered animations with Framer Motion |
| 🌗 **Dark/Light Mode** | Theme toggle with system preference detection |
| 📱 **Fully Responsive** | Adaptive layout from mobile to ultrawide screens |
| 🧭 **Smooth Navigation** | Scroll-based navigation with active section tracking |
| 🛠️ **Skills Showcase** | Interactive skill icons with hover effects |
| 📁 **Project Gallery** | Featured projects with code & live demo links |
| 📬 **Contact Form** | Functional form with validation-ready inputs |
| 📄 **Resume Download** | One-click resume download button |
| 📜 **Education Timeline** | Visual timeline for academic & cert achievements |
| 🏆 **Experience Timeline** | Career progression with role details & tech tags |

---

## 🛠️ Tech Stack

<div align="center">

### Frontend

![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-8-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-12-0055FF?style=for-the-badge&logo=framer&logoColor=white)
![Radix UI](https://img.shields.io/badge/Radix_UI-1-161618?style=for-the-badge&logo=radixui&logoColor=white)

### Icons & UI

![Lucide](https://img.shields.io/badge/Lucide_React-0.500-F56565?style=for-the-badge&logo=lucide&logoColor=white)
![React Icons](https://img.shields.io/badge/React_Icons-5-E91E63?style=for-the-badge&logo=react&logoColor=white)
![Embla Carousel](https://img.shields.io/badge/Embla_Carousel-8-00C853?style=for-the-badge&logo=embla&logoColor=white)

### Utilities

![clsx](https://img.shields.io/badge/clsx-2-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![tailwind-merge](https://img.shields.io/badge/tailwind--merge-3-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![date-fns](https://img.shields.io/badge/date--fns-4-F97316?style=for-the-badge&logo=date-fns&logoColor=white)
![Zod](https://img.shields.io/badge/Zod-4-3068B7?style=for-the-badge&logo=zod&logoColor=white)

### Tooling

![ESLint](https://img.shields.io/badge/ESLint-10-4B32C3?style=for-the-badge&logo=eslint&logoColor=white)
![Vite Plugin React](https://img.shields.io/badge/@vitejs/plugin--react-6-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![SWC](https://img.shields.io/badge/SWC-F0F0F0?style=for-the-badge&logo=swc&logoColor=black)

</div>

---

## 📸 Preview

| Section | Description |
|---|---|
| **Hero** | Animated profile with floating tech badges & rotating rings |
| **Skills** | 16 skill icons with floating animations & glow effects |
| **Projects** | 6 project cards with code/demo links |
| **Experience** | Timeline view of professional journey |
| **Education** | Academic timeline + certifications sidebar |
| **About** | Personal intro with stats cards |
| **Contact** | Contact form + social links |

---

## 📁 Project Structure

```
src/
├── assets/               # Images & static assets
│   ├── zobayer.jpg       # Profile picture
│   ├── hero.png
│   ├── react.svg
│   └── vite.svg
├── components/
│   ├── ui/               # Reusable UI primitives (shadcn-inspired)
│   │   ├── badge.jsx
│   │   ├── button.jsx
│   │   ├── card.jsx
│   │   ├── input.jsx
│   │   ├── label.jsx
│   │   ├── progress.jsx
│   │   └── textarea.jsx
│   ├── AboutSection.jsx
│   ├── ContactSection.jsx
│   ├── EducationSection.jsx
│   ├── ExperienceSection.jsx
│   ├── Footer.jsx
│   ├── Header.jsx
│   ├── HeroSection.jsx
│   ├── ProjectsSection.jsx
│   ├── SkillsSection.jsx
│   └── theme-provider.jsx
├── lib/
│   └── utils.js          # cn() utility (clsx + tailwind-merge)
├── App.jsx               # Root component — orchestrates all sections
├── App.css
├── index.css             # Tailwind directives & global styles
└── main.jsx              # Entry point
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** 20+
- **npm** / **pnpm** / **yarn** / **bun**

### Installation

```bash
# Clone the repo
git clone https://github.com/zobayerhb/portfolio.git
cd portfolio

# Install dependencies
npm install

# Start dev server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
npm run preview
```

### Lint

```bash
npm run lint
```

---

## 🔧 Environment

No environment variables are required to run this project. It's a fully client-side React application that can be deployed to any static hosting provider (Vercel, Netlify, GitHub Pages, etc.).

---

## 📬 Contact

Want to collaborate or have a project in mind? Reach out!

- **Email:** [zobayer@example.com](mailto:zobayer@example.com)
- **GitHub:** [@zobayerhb](https://github.com/zobayerhb)
- **LinkedIn:** [zobayerhosen](https://linkedin.com/in/zobayerhosen)
- **Location:** Bangladesh

---

<div align="center">

**Built with ❤️ using React 19 + Tailwind CSS 4 + Framer Motion**

</div>
