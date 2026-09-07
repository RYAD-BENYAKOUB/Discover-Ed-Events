/**
 * Pagination.jsx
 * --------------
 * Simple numbered pagination with terracotta active state.
 * Scrolls to top of the experiences section on page change.
 */

import React from 'react';

export default function Pagination({ currentPage, totalPages, onPageChange }) {
  if (totalPages <= 1) return null;

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  const handlePageClick = (page) => {
    onPageChange(page);
    // Scroll to top of experiences section
    const section = document.getElementById('experiences');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav className="flex items-center justify-center gap-2 mt-10" aria-label="Pagination">
      {/* Previous */}
      <button
        onClick={() => handlePageClick(currentPage - 1)}
        disabled={currentPage === 1}
        className="w-9 h-9 rounded-full flex items-center justify-center
                   text-navy/60 hover:bg-beige/50 transition-colors duration-200
                   disabled:opacity-30 disabled:cursor-not-allowed"
        aria-label="Page précédente"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {/* Page numbers */}
      {pages.map((page) => (
        <button
          key={page}
          onClick={() => handlePageClick(page)}
          className={`w-9 h-9 rounded-full text-sm font-medium transition-all duration-200
            ${page === currentPage
              ? 'bg-terracotta text-cream shadow-md'
              : 'text-navy/60 hover:bg-beige/50'
            }`}
          aria-label={`Page ${page}`}
          aria-current={page === currentPage ? 'page' : undefined}
        >
          {page}
        </button>
      ))}

      {/* Next */}
      <button
        onClick={() => handlePageClick(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="w-9 h-9 rounded-full flex items-center justify-center
                   text-navy/60 hover:bg-beige/50 transition-colors duration-200
                   disabled:opacity-30 disabled:cursor-not-allowed"
        aria-label="Page suivante"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </nav>
  );
}
