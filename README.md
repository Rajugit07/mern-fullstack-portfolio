<div align="center">

# ✦ Raju Pradhani — Portfolio

**A modern, design-driven developer portfolio built with React, TypeScript & Framer Motion**

[![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react&logoColor=white)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-6.0-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-8-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vite.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12-FF0050?style=flat-square&logo=framer&logoColor=white)](https://www.framer.com/motion/)
[![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)](LICENSE)

[**Live Demo →**](#) · [**LinkedIn**](https://www.linkedin.com/in/raju-pradhani-mern-dev/) · [**GitHub**](https://github.com/Rajugit07)

</div>

---

## 📌 About

A premium, single-page portfolio website designed to showcase full-stack development projects through immersive case studies and polished micro-interactions. Inspired by high-end design studios like [Instrument](https://instrument.framer.website/), the portfolio emphasizes clean typography, intentional whitespace, and smooth page transitions — delivering a refined, editorial-quality browsing experience.

---

## ✨ Features

| Feature | Description |
|---|---|
| **Case Study Pages** | In-depth project walkthroughs with hero sections, metadata bars, multi-section content layouts, and related work navigation |
| **Animated Transitions** | Smooth page & element animations powered by Framer Motion with staggered reveals and fade-in effects |
| **Interactive Skills Infographic** | Custom SVG-based isometric visualization depicting the full-stack architecture and data flow |
| **Resume Page** | Fully integrated resume view with experience, projects, and contact info — all data-driven |
| **Contact Page** | Dedicated contact section with social links and email access |
| **Responsive Design** | Fluid layouts optimized for mobile, tablet, and desktop viewports |
| **Design Token System** | Centralized design tokens via Tailwind CSS v4 `@theme` — colors, typography, spacing, and radii |
| **Glassmorphism Effects** | Frosted glass UI elements using `backdrop-filter` for a modern aesthetic |
| **SEO Optimized** | Open Graph meta tags, semantic HTML, and proper heading hierarchy |
| **Custom Scrollbar** | Minimal, branded scrollbar styling for visual consistency |

---

## 🛠️ Tech Stack

### Core

| Technology | Purpose |
|---|---|
| [React 19](https://react.dev/) | Component-based UI library |
| [TypeScript 6](https://www.typescriptlang.org/) | Static type safety across the codebase |
| [Vite 8](https://vite.dev/) | Lightning-fast HMR and optimized production builds |
| [React Router 7](https://reactrouter.com/) | Client-side routing with dynamic slug-based navigation |

### Styling & Animation

| Technology | Purpose |
|---|---|
| [Tailwind CSS 4](https://tailwindcss.com/) | Utility-first CSS with v4 `@theme` design tokens |
| [Framer Motion 12](https://www.framer.com/motion/) | Declarative animations and page transitions |
| [Google Fonts](https://fonts.google.com/) | Baskervville (serif display) + Inter (sans-serif UI) |
| [Material Symbols](https://fonts.google.com/icons) | Outlined icon system |

### Dev Tooling

| Technology | Purpose |
|---|---|
| ESLint | Code quality and consistency enforcement |
| `@vitejs/plugin-react` | React Fast Refresh for Vite |

---

## 📁 Project Structure

```
portfolio/
├── public/
│   ├── favicon.svg
│   ├── icons.svg
│   └── images/                  # Project screenshots & assets
│       ├── crypto-img/
│       └── ecomm-img/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── casestudy/           # Case study page components
│   │   │   ├── CaseStudyHero.tsx
│   │   │   ├── CaseStudyMetadata.tsx
│   │   │   ├── CaseStudySections.tsx
│   │   │   └── RelatedWork.tsx
│   │   ├── home/                # Homepage components
│   │   │   ├── Hero.tsx
│   │   │   ├── ProjectCard.tsx
│   │   │   └── ProjectGrid.tsx
│   │   ├── layout/              # Shared layout components
│   │   │   ├── Navbar.tsx
│   │   │   └── Footer.tsx
│   │   ├── skills/              # Skills infographic system
│   │   │   ├── SkillsInfographic.tsx
│   │   │   ├── SkillsInfographic.css
│   │   │   ├── Illustrations.tsx
│   │   │   ├── IsoBox.tsx
│   │   │   └── iso.ts
│   │   └── ui/                  # Reusable UI primitives
│   │       └── Container.tsx
│   ├── data/                    # Static data & configuration
│   │   ├── projects.ts          # Project case study content
│   │   ├── resume.ts            # Resume / experience data
│   │   ├── siteConfig.ts        # Global site metadata
│   │   └── skills.ts            # Skill categories
│   ├── lib/
│   │   └── animations.ts       # Framer Motion animation variants
│   ├── pages/
│   │   ├── HomePage.tsx
│   │   ├── CaseStudyPage.tsx
│   │   ├── SkillsPage.tsx
│   │   ├── ContactPage.tsx
│   │   └── ResumePage.tsx
│   ├── types/
│   │   └── index.ts             # Shared TypeScript interfaces
│   ├── App.tsx                  # Root router configuration
│   ├── main.tsx                 # Application entry point
│   └── index.css                # Design system & global styles
├── index.html                   # HTML shell with SEO meta tags
├── vite.config.ts
├── tsconfig.json
├── package.json
└── eslint.config.js
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** ≥ 18.x
- **npm** ≥ 9.x (or yarn / pnpm)

### Installation

```bash
# Clone the repository
git clone https://github.com/Rajugit07/Raju_Portfolio.git
cd Raju_Portfolio/portfolio

# Install dependencies
npm install
```

### Development

```bash
# Start the dev server with HMR
npm run dev
```

The app will be available at `http://localhost:5173`

### Production Build

```bash
# Type-check and build for production
npm run build

# Preview the production build locally
npm run preview
```

### Linting

```bash
# Run ESLint across the codebase
npm run lint
```

---

## 🎨 Design System

The portfolio uses a custom design token architecture powered by **Tailwind CSS v4's `@theme` directive**, ensuring visual consistency across every page.

### Color Palette

| Token | Value | Usage |
|---|---|---|
| `--color-primary` | `#1a1a1a` | Headings, primary text |
| `--color-secondary` | `#474747` | Secondary text |
| `--color-tertiary` | `#999999` | Muted text, labels |
| `--color-surface` | `#ffffff` | Page background |
| `--color-canvas` | `#ffffff` | Base canvas |

### Typography

| Class | Font | Size | Purpose |
|---|---|---|---|
| `.text-display` | Baskervville | 30px → 60px | Hero headlines |
| `.text-headline` | Baskervville | 23px → 60px | Page headings |
| `.text-title` | Baskervville | 24px → 28px | Section headings |
| `.text-body-lg` | Inter | 14px | Body paragraphs |
| `.text-label` | Inter | 14px | Navigation, metadata |
| `.text-eyebrow` | Baskervville italic | 14px | Accent labels |

### Spacing & Shape

| Token | Value |
|---|---|
| `--spacing-section` | `10rem` |
| `--radius-card` | `1.5rem` |
| `--radius-button` | `0.75rem` |
| `--ease-spring` | `cubic-bezier(0.22, 1, 0.36, 1)` |

---

## 📄 Pages & Routes

| Route | Page | Description |
|---|---|---|
| `/` | Home | Hero introduction + project grid |
| `/work/:slug` | Case Study | Dynamic project deep-dive with sections |
| `/skills` | Skills | Interactive isometric tech stack infographic |
| `/contact` | Contact | Contact form and social links |
| `/resume` | Resume | Professional experience and project highlights |

---

## 🖼️ Featured Projects

### E-Commerce Platform
> Full-stack MERN shopping platform with JWT authentication, Redux-powered cart management, and responsive product browsing.

### Crypto Tracker
> Real-time cryptocurrency dashboard with live market data, Redux Toolkit state management, and dark-mode optimized UI.

---

## 📬 Contact

| Channel | Link |
|---|---|
| **Email** | [rajupradhani2002@gmail.com](mailto:rajupradhani2002@gmail.com) |
| **LinkedIn** | [linkedin.com/in/raju-pradhani-mern-dev](https://www.linkedin.com/in/raju-pradhani-mern-dev/) |
| **GitHub** | [github.com/Rajugit07](https://github.com/Rajugit07) |

---

## 📜 License

This project is open source and available under the [MIT License](LICENSE).

---

<div align="center">

**Built with precision by [Raju Pradhani](https://github.com/Rajugit07)**

</div>
