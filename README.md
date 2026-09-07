# 🌿 Discover Ed Events

A beautiful, minimal single-page portfolio website for **Fellahi Yasmine's "Discover Ed Events"** brand — an educational and touristic outing project based in Algeria.

Built with **React + Vite + Tailwind CSS v4**. Zero heavy dependencies, fast loading, fully responsive.

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-8-646CFF?logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss&logoColor=white)

---

## ✨ Features

- **🎨 Clean, brand-consistent design** — warm off-white/cream palette with terracotta and blush accents
- **📱 Fully responsive** — mobile-first layout that scales beautifully to tablet and desktop
- **⚡ Fast-loading** — optimized images with lazy loading, minimal bundle size (~70KB gzipped JS)
- **🎭 Smooth animations** — CSS-only fade-in/slide-up on scroll via `IntersectionObserver` (no animation library)
- **🖼️ Custom image carousel** — touch-swipe support, dot indicators, arrow navigation — zero external deps
- **📊 Data-driven experiences** — paginated experience cards with Google Sheets integration ready (stub in place)
- **🌐 Bilingual content** — French & English throughout

---

## 📐 Sections

### 1. Hero
Full-viewport landing with the DEE illustrated logo, brand name in Alex Brush script, role subtitle, and a smooth staggered entrance animation. Soft radial gradient background with decorative botanical leaf SVGs.

### 2. About
Rich bio section featuring:
- **Profile photo** with decorative frame
- **Bio paragraph** about Yasmine's background
- **Education timeline** (BTS Tourism → Master 2 School Psychology)
- **Certificates** (Amadeus, First Aid, Tour Guide)
- **Skills** in tag groups (Personal & Languages)
- **Fun Fact** callout card

### 3. Experiences
Data-driven grid of hiking trips and tourist outings across Algeria:
- Each card features a **photo carousel** with swipe support
- **Pagination** (6 items per page)
- Decorative dotted travel-route line between cards
- Falls back to local data; ready for **Google Sheets** integration

### 4. Contact / Footer
- Real contact details: **Email**, **Phone** (Algeria & Qatar), **LinkedIn**
- Live links to **Instagram** and **Facebook**
- Physical address
- TikTok placeholder (dimmed, ready to activate)
- Copyright line

---

## 🎨 Brand System

All colors and fonts are centralized in `src/index.css` via Tailwind v4 `@theme` — easy to update when official brand files arrive.

| Token | Value | Usage |
|---|---|---|
| `cream` | `#F3EFE7` | Page background |
| `navy` | `#2E3B4E` | Primary text |
| `blush` | `#EBC3B8` | Accent 1 — highlights, borders |
| `terracotta` | `#B97A5D` | Accent 2 — buttons, active states |
| `mauve` | `#B6988A` | Accent 3 — footer background |
| `beige` | `#D9CDBB` | Neutral — borders, cards, dividers |

| Font | Family | Usage |
|---|---|---|
| Script | Alex Brush | Headings |
| Body | Poppins | Body text |

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher)
- npm (comes with Node.js)

### Installation

```bash
# Clone the repository
git clone https://github.com/RYAD-BENYAKOUB/Discover-Ed-Events.git
cd Discover-Ed-Events

# Install dependencies
npm install

# Start the development server
npm run dev
```

The site will be available at **http://localhost:5173/**

### Production Build

```bash
npm run build
npm run preview   # Preview the production build locally
```

---

## 📁 Project Structure

```
discover-ed-event/
├── index.html                    # Entry HTML — Google Fonts, meta tags
├── vite.config.js                # Vite + React + Tailwind v4 plugin
├── public/
│   └── favicon.svg               # Brand "D" icon
└── src/
    ├── index.css                  # @theme tokens (colors, fonts, animations)
    ├── main.jsx                   # React entry point
    ├── App.jsx                    # Assembles all 4 sections
    ├── assets/
    │   ├── DEE.png                # Brand logo (illustrated portrait mark)
    │   └── yasmine.jpg            # Profile photo
    ├── components/
    │   ├── ScrollReveal.jsx       # IntersectionObserver fade-in wrapper
    │   ├── Hero.jsx               # Full-viewport hero section
    │   ├── About.jsx              # Bio, education, skills, fun fact
    │   ├── Carousel.jsx           # Custom image carousel (touch swipe)
    │   ├── ExperienceCard.jsx     # Card with carousel + metadata
    │   ├── Pagination.jsx         # Numbered page navigation
    │   ├── Experiences.jsx        # Data-driven experience grid
    │   └── Contact.jsx            # Footer with contact info + socials
    └── data/
        ├── fallbackData.js        # 8 placeholder Algerian experiences
        └── fetchSheetData.js      # Google Sheets stub (ready for integration)
```

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| **React 19** | UI components |
| **Vite 8** | Build tool & dev server |
| **Tailwind CSS v4** | Utility-first styling |
| **IntersectionObserver** | Scroll-triggered animations |
| **CSS Keyframes** | Entrance animations |
| **Google Fonts** | Alex Brush + Poppins |

**Zero runtime animation dependencies** — all animations are pure CSS + native browser APIs.

---

## 📋 Roadmap

- [ ] Google Sheets integration for dynamic experience data
- [ ] Real experience photos from past events
- [ ] TikTok social link activation
- [ ] Contact form backend (email delivery)
- [ ] SEO optimization & Open Graph meta tags
- [ ] Deployment to Vercel / Netlify

---

## 👩‍💼 About the Brand

**Discover Ed Events** is an educational and touristic outing project founded by **Fellahi Yasmine** — a School Psychology Master's graduate with a BTS in Tourism. The project organizes hiking trips, tourist excursions, and immersive experiences across Algeria's most beautiful landscapes.

---

## 📄 License

© 2026 Discover Ed Events — Fellahi Yasmine. All rights reserved.

---
