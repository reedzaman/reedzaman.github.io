# Reed Zaman - Portfolio Website

A minimalist, professional portfolio website built with React and Tailwind CSS.

## Features

- Clean, white-themed design
- Fully responsive (desktop-first, mobile-friendly)
- Smooth scroll navigation with GSAP animations
- Elegant typographic effects (character-by-character reveal)
- Scroll-triggered section animations
- Professional typography with Inter font
- Subtle transitions and hover effects
- Mobile-optimized animations (reduced on smaller screens)
- Respects user's reduced motion preferences

## Tech Stack

- React 18
- Tailwind CSS 3
- GSAP 3 (GreenSock Animation Platform)
- ScrollTrigger plugin for scroll animations
- Create React App

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm start
```

The site will open at `http://localhost:3000`

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

## Project Structure

```
Portfolio/
├── public/
│   └── index.html
├── src/
│   ├── App.jsx          # Main application component
│   ├── index.js         # React entry point
│   └── index.css        # Tailwind CSS imports
├── package.json
├── tailwind.config.js
└── postcss.config.js
```

## Customization

- Update personal information in `src/App.jsx`
- Modify colors in `tailwind.config.js`
- Adjust spacing and typography in component classes

## License

Personal portfolio project.


