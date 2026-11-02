/**
 * Services.jsx
 * ------------
 * "Our Services" section highlighting the 6 core experiential offerings.
 * - Section anchor: id="services"
 * - Script heading font + subtitle
 * - Responsive grid: 1 col on mobile, 2 on tablet, 3 on desktop
 * - Staggered scroll-triggered fade/slide-in animation via IntersectionObserver
 * - Single corner botanical line-art decorative element
 * - Maps over data from /src/data/services.js
 */

import React, { useRef, useState, useEffect } from "react";
import ScrollReveal from "./ScrollReveal";
import ServiceCard from "./ServiceCard";
import services from "../data/services";

/* ---- Decorative: single botanical line-art element in the top-right corner ---- */
function CornerBotanical() {
  return (
    <svg
      className="absolute top-8 right-6 md:top-12 md:right-12 w-28 h-28 md:w-36 md:h-36 opacity-[0.10] text-terracotta pointer-events-none select-none"
      viewBox="0 0 200 200"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M40 160 C70 130 110 90 160 40" />
      <path d="M80 120 C70 105 75 90 90 95 C95 105 90 115 80 120" />
      <path d="M110 90 C125 80 130 95 120 105 C110 100 105 92 110 90" />
      <path d="M130 70 C120 55 125 40 140 45 C145 55 140 65 130 70" />
      <path d="M150 50 C165 40 170 55 160 65 C150 60 145 52 150 50" />
    </svg>
  );
}

export default function Services() {
  const gridRef = useRef(null);
  const [cardsVisible, setCardsVisible] = useState(false);

  useEffect(() => {
    const el = gridRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setCardsVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" },
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="services"
      className="relative py-20 md:py-28 px-6 bg-cream overflow-hidden"
    >
      {/* Single corner botanical decoration */}
      <CornerBotanical />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Heading & Subtitle */}
        <ScrollReveal>
          <h2 className="font-script text-4xl sm:text-5xl md:text-6xl text-navy text-center mb-3">
            Our Services
          </h2>
          <p className="text-center text-navy/60 text-base sm:text-lg max-w-xl mx-auto mb-12 md:mb-16">
            Experiences designed to connect travel and well-being.
          </p>
        </ScrollReveal>

        {/* Responsive Grid of Cards with Staggered Scroll Animation */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`transition-all duration-700 ease-out transform ${
                cardsVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{
                transitionDelay: `${index * 100}ms`,
              }}
            >
              <ServiceCard service={service} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
