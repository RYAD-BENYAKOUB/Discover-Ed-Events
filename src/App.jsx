/**
 * App.jsx
 * -------
 * Main application component.
 * Assembles all sections in order:
 * 0. Sticky Navigation Bar
 * 1. Hero / header
 * 2. About / bio
 * 3. Services (offerings & psychological dimensions)
 * 4. Experiences (data-driven, paginated)
 * 5. Contact / social footer
 */

import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Experiences from "./components/Experiences";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div className="min-h-screen bg-cream">
      {/* ---- Navigation Bar ---- */}
      <Navbar />

      {/* ---- 1. Hero / Header ---- */}
      <Hero />

      {/* ---- Decorative section divider ---- */}
      <div className="h-px bg-gradient-to-r from-transparent via-beige to-transparent" />

      {/* ---- 2. About / Bio ---- */}
      <About />

      {/* ---- Decorative section divider ---- */}
      <div className="h-px bg-gradient-to-r from-transparent via-beige to-transparent" />

      {/* ---- 3. Services ---- */}
      <Services />

      {/* ---- Decorative section divider ---- */}
      <div className="h-px bg-gradient-to-r from-transparent via-beige to-transparent" />

      {/* ---- 4. Experiences ---- */}
      <Experiences />

      {/* ---- 5. Contact / Footer ---- */}
      <Contact />
    </div>
  );
}
