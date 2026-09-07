/**
 * Hero.jsx
 * --------
 * Full-viewport hero / header section.
 *
 * Design decisions:
 * - The DEE.jpeg logo is an illustrated circular portrait on a dark/gold
 *   background, so we seat it inside a small dark-toned "medallion" area
 *   with a subtle ring + shadow to let it breathe against the cream page.
 * - A soft radial gradient (cream → beige) provides depth without distraction.
 * - Staggered fade-in-up animations give a cinematic entrance.
 * - Botanical leaf SVG kept as a single decorative touch (top-right corner).
 */

import React from 'react';
import logoSrc from '../assets/DEE.png';

/* ---- Decorative: thin botanical leaf (top-right corner) ---- */
function BotanicalLeaf() {
  return (
    <svg
      className="absolute top-8 right-8 w-24 h-24 md:w-36 md:h-36 opacity-[0.12] text-terracotta pointer-events-none"
      viewBox="0 0 200 200"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      aria-hidden="true"
    >
      <path d="M100 180 C100 140, 95 100, 100 40" />
      <path d="M100 140 C80 130, 60 125, 50 115" />
      <path d="M50 115 C65 118, 80 125, 100 140" />
      <path d="M100 100 C75 95, 55 85, 40 70" />
      <path d="M40 70 C58 78, 78 90, 100 100" />
      <path d="M100 120 C120 112, 140 108, 155 100" />
      <path d="M155 100 C138 105, 118 112, 100 120" />
      <path d="M100 75 C125 68, 145 58, 160 45" />
      <path d="M160 45 C142 55, 122 65, 100 75" />
      <path d="M100 40 C95 25, 90 15, 95 5" />
      <path d="M100 40 C105 25, 110 15, 105 5" />
    </svg>
  );
}

/* ---- Decorative: mirrored leaf (bottom-left corner) ---- */
function BotanicalLeafMirror() {
  return (
    <svg
      className="absolute bottom-28 left-6 w-20 h-20 md:w-28 md:h-28 opacity-[0.08] text-blush pointer-events-none rotate-180"
      viewBox="0 0 200 200"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      aria-hidden="true"
    >
      <path d="M100 180 C100 140, 95 100, 100 40" />
      <path d="M100 140 C80 130, 60 125, 50 115" />
      <path d="M50 115 C65 118, 80 125, 100 140" />
      <path d="M100 100 C75 95, 55 85, 40 70" />
      <path d="M40 70 C58 78, 78 90, 100 100" />
      <path d="M100 120 C120 112, 140 108, 155 100" />
      <path d="M155 100 C138 105, 118 112, 100 120" />
    </svg>
  );
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden"
      /* Soft radial gradient background — cream center fading to warm beige edges */
      style={{
        background: 'radial-gradient(ellipse at 50% 40%, #F3EFE7 0%, #EBE4D8 55%, #D9CDBB 100%)',
      }}
    >
      {/* Decorative leaves */}
      <BotanicalLeaf />
      <BotanicalLeafMirror />

      {/* ====== Main content ====== */}
      <div className="text-center flex flex-col items-center max-w-2xl">

        {/* ---- Logo medallion ---- */}
        {/* Dark backdrop circle so the illustrated portrait doesn't clash with cream */}
        <div
          className="mb-6 animate-fade-in"
          style={{ animationDelay: '0.1s', animationFillMode: 'both' }}
        >
          <div className="relative inline-block">
            {/* Outer decorative ring */}
            <div className="absolute -inset-2 rounded-full border border-dashed border-terracotta/25 pointer-events-none" />

            {/* Dark circle backing */}
            <div
              className="w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 rounded-full overflow-hidden
                         shadow-md ring-1 ring-terracotta/20"
            >
              <img
                src={logoSrc}
                alt="Discover Ed Events logo"
                className="w-full h-full object-cover"
                /* No lazy load for above-the-fold hero image */
              />
            </div>
          </div>
        </div>

        {/* ---- Brand name ---- */}
        <h1
          className="font-script text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-navy leading-tight mb-3
                     animate-fade-in-up"
          style={{ animationDelay: '0.3s', animationFillMode: 'both' }}
        >
          Discover Ed Events
        </h1>

        {/* ---- "by" line ---- */}
        <p
          className="text-base sm:text-lg md:text-xl text-navy/65 font-light mb-1.5
                     animate-fade-in-up"
          style={{ animationDelay: '0.5s', animationFillMode: 'both' }}
        >
          by <span className="font-medium text-terracotta">Fellahi Yasmine</span>
        </p>

        {/* ---- Role subtitle ---- */}
        <p
          className="text-sm sm:text-base text-navy/50 font-light tracking-wide max-w-md mx-auto mb-10
                     animate-fade-in-up"
          style={{ animationDelay: '0.65s', animationFillMode: 'both' }}
        >
          {/* Full title on sm+, shorter on mobile */}
          <span className="hidden sm:inline">Educational &amp; Touristic Outing Project Manager</span>
          <span className="sm:hidden">Tourism &amp; Event Project Manager</span>
        </p>

        {/* ---- CTA Button ---- */}
        <a
          href="#contact"
          className="inline-block px-8 py-3 bg-terracotta text-cream rounded-full
                     text-sm font-medium tracking-wide uppercase
                     transition-all duration-300 hover:bg-terracotta/90 hover:shadow-lg
                     hover:-translate-y-0.5 active:translate-y-0
                     animate-fade-in-up"
          style={{ animationDelay: '0.85s', animationFillMode: 'both' }}
        >
          Contactez-moi
        </a>
      </div>

      {/* ====== Scroll-down indicator ====== */}
      <div
        className="absolute bottom-8 flex flex-col items-center
                   animate-fade-in"
        style={{ animationDelay: '1.2s', animationFillMode: 'both' }}
      >
        <span className="text-[10px] text-navy/40 mb-2 tracking-[0.25em] uppercase font-medium">
          Scroll
        </span>
        {/* Double chevron with bounce */}
        <div className="animate-bounce">
          <svg
            className="w-5 h-5 text-navy/35"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </div>
      </div>
    </section>
  );
}
