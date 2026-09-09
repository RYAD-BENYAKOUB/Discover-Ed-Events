/**
 * Experiences.jsx
 * ---------------
 * Data-driven experiences section.
 * - Fetches from Google Sheets (falls back to local data)
 * - Renders category tabs to filter the items
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
const CATEGORIES = [
  'All',
  'Bivouac',
  'Guided Tours',
  'Immersive Stays',
  'Events',
  'Hikes',
  'Therapeutic Sessions'
];

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
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);

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

  /* ---- Category logic ---- */
  const handleCategoryChange = (category) => {
    if (category === selectedCategory) return;
    
    // Start transition out
    setIsTransitioning(true);
    
    // Wait for fade out, then update state and fade in
    setTimeout(() => {
      setSelectedCategory(category);
      setCurrentPage(1);
      setIsTransitioning(false);
    }, 300);
  };

  const filteredExperiences = selectedCategory === 'All'
    ? experiences
    : experiences.filter(exp => exp.category === selectedCategory);

  /* ---- Pagination logic ---- */
  const totalPages = Math.ceil(filteredExperiences.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedItems = filteredExperiences.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  return (
    <section
      id="experiences"
      className="relative py-20 md:py-28 px-6 bg-cream/80 min-h-screen"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section heading */}
        <ScrollReveal>
          <h2 className="font-script text-4xl sm:text-5xl md:text-6xl text-navy text-center mb-4">
            Nos Expériences
          </h2>
          <p className="text-center text-navy/50 text-base sm:text-lg max-w-xl mx-auto mb-10">
            Chaque sortie est une nouvelle aventure. Découvrez nos randonnées,
            excursions et moments de partage à travers l'Algérie.
          </p>
        </ScrollReveal>

        {/* Category Tabs */}
        <ScrollReveal>
          <div className="flex overflow-x-auto gap-3 pb-4 mb-10 no-scrollbar snap-x snap-mandatory">
            {CATEGORIES.map(category => (
              <button
                key={category}
                onClick={() => handleCategoryChange(category)}
                disabled={loading || isTransitioning}
                className={`shrink-0 px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 snap-center
                  ${selectedCategory === category
                    ? 'bg-terracotta text-cream shadow-md'
                    : 'bg-transparent text-navy/70 border border-beige hover:border-terracotta/50 hover:text-terracotta'
                  }
                  ${(loading || isTransitioning) ? 'cursor-default opacity-80' : 'cursor-pointer'}
                `}
              >
                {category}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Loading state */}
        {loading && (
          <div className="flex justify-center py-20">
            <div className="w-10 h-10 border-3 border-beige border-t-terracotta rounded-full animate-spin" />
          </div>
        )}

        {/* Content wrapper with transition */}
        {!loading && (
          <div
            className={`transition-opacity duration-300 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}
          >
            {filteredExperiences.length > 0 ? (
              <div className="relative" key={selectedCategory}>
                {/* Decorative route line (desktop only) */}
                <TravelRouteLine />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
                  {paginatedItems.map((experience) => (
                    <div key={experience.id} className="animate-fade-in-up" style={{ animationDuration: '0.6s' }}>
                      <ExperienceCard experience={experience} />
                    </div>
                  ))}
                </div>

                {/* Pagination */}
                <Pagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onPageChange={setCurrentPage}
                />
              </div>
            ) : (
              <div className="text-center py-20 px-6 bg-white/40 rounded-2xl border border-beige/40 animate-fade-in">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-beige/30 text-terracotta mb-4">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
                  </svg>
                </div>
                <h3 className="text-xl font-medium text-navy mb-2">More experiences coming soon!</h3>
                <p className="text-navy/60 max-w-md mx-auto">
                  We're currently preparing new exciting adventures for this category. Check back later.
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
