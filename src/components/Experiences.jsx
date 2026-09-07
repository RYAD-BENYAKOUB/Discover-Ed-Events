/**
 * Experiences.jsx
 * ---------------
 * Data-driven experiences section.
 * - Fetches from Google Sheets (falls back to local data)
 * - Renders ExperienceCard grid with pagination (6 per page)
 * - Decorative dotted travel-route line between cards (desktop)
 */

import React, { useState, useEffect } from 'react';
import ScrollReveal from './ScrollReveal';
import ExperienceCard from './ExperienceCard';
import Pagination from './Pagination';
import { fetchSheetData } from '../data/fetchSheetData';
import fallbackExperiences from '../data/fallbackData';

const ITEMS_PER_PAGE = 6;

/* ---- Decorative: dotted travel route line (between cards on desktop) ---- */
function TravelRouteLine() {
  return (
    <svg
      className="hidden lg:block absolute left-1/2 top-0 h-full w-4 -translate-x-1/2 pointer-events-none opacity-15"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <line
        x1="8" y1="0" x2="8" y2="100%"
        stroke="#B97A5D"
        strokeWidth="2"
        strokeDasharray="8 12"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function Experiences() {
  const [experiences, setExperiences] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);

  /* ---- Fetch data on mount ---- */
  useEffect(() => {
    async function loadData() {
      setLoading(true);
      try {
        const sheetData = await fetchSheetData();
        setExperiences(sheetData || fallbackExperiences);
      } catch {
        setExperiences(fallbackExperiences);
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, []);

  /* ---- Pagination logic ---- */
  const totalPages = Math.ceil(experiences.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedItems = experiences.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  return (
    <section
      id="experiences"
      className="relative py-20 md:py-28 px-6 bg-cream/80"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section heading */}
        <ScrollReveal>
          <h2 className="font-script text-4xl sm:text-5xl md:text-6xl text-navy text-center mb-4">
            Nos Expériences
          </h2>
          <p className="text-center text-navy/50 text-base sm:text-lg max-w-xl mx-auto mb-14">
            Chaque sortie est une nouvelle aventure. Découvrez nos randonnées,
            excursions et moments de partage à travers l'Algérie.
          </p>
        </ScrollReveal>

        {/* Loading state */}
        {loading && (
          <div className="flex justify-center py-20">
            <div className="w-10 h-10 border-3 border-beige border-t-terracotta rounded-full animate-spin" />
          </div>
        )}

        {/* Experience cards grid */}
        {!loading && (
          <div className="relative">
            {/* Decorative route line (desktop only) */}
            <TravelRouteLine />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
              {paginatedItems.map((experience, index) => (
                <ScrollReveal key={experience.id}>
                  <ExperienceCard experience={experience} />
                </ScrollReveal>
              ))}
            </div>

            {/* Pagination */}
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
          </div>
        )}

        {/* Empty state */}
        {!loading && experiences.length === 0 && (
          <p className="text-center text-navy/40 py-16 text-lg">
            Aucune expérience pour le moment. Revenez bientôt !
          </p>
        )}
      </div>
    </section>
  );
}
