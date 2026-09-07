/**
 * ExperienceCard.jsx
 * ------------------
 * Card for a single experience (hiking trip / tourist outing).
 * - Rounded corners, soft shadow, cream/beige styling
 * - Title, date, location, short description
 * - Embedded Carousel for photos
 * - Gentle hover lift + shadow transition
 */

import React from 'react';
import Carousel from './Carousel';

export default function ExperienceCard({ experience }) {
  const { title, date, location, description, images } = experience;

  return (
    <article
      className="bg-white/60 rounded-2xl overflow-hidden shadow-sm border border-beige/40
                 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
    >
      {/* Photo carousel */}
      <Carousel images={images} title={title} />

      {/* Card content */}
      <div className="p-5 sm:p-6">
        {/* Title */}
        <h3 className="font-script text-2xl sm:text-3xl text-navy mb-1">
          {title}
        </h3>

        {/* Date & location */}
        <div className="flex flex-wrap items-center gap-3 text-sm text-navy/50 mb-3">
          {date && (
            <span className="flex items-center gap-1">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              {date}
            </span>
          )}
          {location && (
            <span className="flex items-center gap-1">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              {location}
            </span>
          )}
        </div>

        {/* Description */}
        <p className="text-sm sm:text-base text-navy/70 leading-relaxed">
          {description}
        </p>
      </div>
    </article>
  );
}
