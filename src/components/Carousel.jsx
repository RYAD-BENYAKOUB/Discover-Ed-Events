/**
 * Carousel.jsx
 * -------------
 * Pure CSS + React state image carousel.
 * - Prev/Next arrows + dot indicators
 * - Touch swipe support via pointer events
 * - Lazy-loads images with loading="lazy"
 * - No external carousel library
 */

import React, { useState, useRef, useCallback } from 'react';

export default function Carousel({ images = [], title = 'Experience' }) {
  const [current, setCurrent] = useState(0);
  const touchStart = useRef(null);
  const touchEnd = useRef(null);

  const count = images.length;
  if (count === 0) return null;

  /* ---- Navigation ---- */
  const goTo = useCallback((index) => {
    setCurrent((index + count) % count);
  }, [count]);

  const prev = () => goTo(current - 1);
  const next = () => goTo(current + 1);

  /* ---- Touch / swipe handling ---- */
  const minSwipeDistance = 50;

  const onPointerDown = (e) => {
    touchStart.current = e.clientX;
    touchEnd.current = null;
  };

  const onPointerMove = (e) => {
    touchEnd.current = e.clientX;
  };

  const onPointerUp = () => {
    if (touchStart.current === null || touchEnd.current === null) return;
    const distance = touchStart.current - touchEnd.current;
    if (Math.abs(distance) >= minSwipeDistance) {
      distance > 0 ? next() : prev();
    }
    touchStart.current = null;
    touchEnd.current = null;
  };

  return (
    <div className="relative w-full overflow-hidden rounded-lg group">
      {/* Image track */}
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
      >
        {images.map((src, i) => (
          <div key={i} className="w-full flex-shrink-0 aspect-[4/3]">
            <img
              src={src}
              alt={`${title} — photo ${i + 1}`}
              className="w-full h-full object-cover"
              loading="lazy"
              draggable="false"
            />
          </div>
        ))}
      </div>

      {/* Prev / Next arrows (visible on hover or touch) */}
      {count > 1 && (
        <>
          <button
            onClick={prev}
            className="absolute left-2 top-1/2 -translate-y-1/2 w-9 h-9
                       bg-cream/80 backdrop-blur-sm rounded-full
                       flex items-center justify-center
                       opacity-0 group-hover:opacity-100 transition-opacity duration-300
                       hover:bg-cream text-navy shadow-md"
            aria-label="Photo précédente"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={next}
            className="absolute right-2 top-1/2 -translate-y-1/2 w-9 h-9
                       bg-cream/80 backdrop-blur-sm rounded-full
                       flex items-center justify-center
                       opacity-0 group-hover:opacity-100 transition-opacity duration-300
                       hover:bg-cream text-navy shadow-md"
            aria-label="Photo suivante"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </>
      )}

      {/* Dot indicators */}
      {count > 1 && (
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                i === current
                  ? 'bg-terracotta w-5'
                  : 'bg-cream/60 hover:bg-cream/90'
              }`}
              aria-label={`Aller à la photo ${i + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
