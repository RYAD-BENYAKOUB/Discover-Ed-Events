/**
 * App.jsx
 * -------
 * Main application component.
 * Assembles all sections in order:
 * 1. Hero / header
 * 2. About / bio
 * 3. Experiences (data-driven, paginated)
 * 4. Contact / social footer
 */

import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Experiences from './components/Experiences';
import Contact from './components/Contact';

export default function App() {
  return (
    <div className="min-h-screen bg-cream">
      {/* ---- 1. Hero / Header ---- */}
      <Hero />

      {/* ---- Decorative section divider ---- */}
      <div className="h-px bg-gradient-to-r from-transparent via-beige to-transparent" />

      {/* ---- 2. About / Bio ---- */}
      <About />

      {/* ---- Decorative section divider ---- */}
      <div className="h-px bg-gradient-to-r from-transparent via-beige to-transparent" />

      {/* ---- 3. Experiences ---- */}
      <Experiences />

      {/* ---- 4. Contact / Footer ---- */}
      <Contact />
    </div>
  );
}
