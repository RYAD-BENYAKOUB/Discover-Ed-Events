/**
 * ServiceCard.jsx
 * ---------------
 * Card component for an individual service offering.
 * Displays:
 * - Service number & themed Lucide icon in terracotta accent
 * - Service title (uppercase, bold, navy)
 * - Items list formatted as clean pill tags
 * - Visually distinct "Psychological Dimension" block at the bottom
 *   (blush pink background + terracotta left border)
 * - Cream/white background, rounded-2xl, soft shadow, subtle hover lift
 */

import React from "react";
import {
  Mountain,
  Globe,
  Leaf,
  MessageCircle,
  Users,
  Flag,
} from "lucide-react";

/* Icon lookup map based on the icon key in service data */
const ICON_MAP = {
  Mountain,
  Globe,
  Leaf,
  MessageCircle,
  Users,
  Flag,
};

export default function ServiceCard({ service }) {
  const { number, title, items, psychologicalDimension, icon } = service;
  const IconComponent = (icon && ICON_MAP[icon]) || Mountain;

  return (
    <article
      className="group relative bg-white/70 hover:bg-white/95 rounded-2xl p-6 sm:p-7
                 border border-beige/50 shadow-sm hover:shadow-lg
                 transition-all duration-300 hover:-translate-y-1
                 flex flex-col justify-between h-full"
    >
      <div>
        {/* Top row: Service number badge + Lucide icon */}
        <div className="flex items-center justify-between mb-5">
          <span className="text-xs font-semibold tracking-wider text-terracotta bg-terracotta/10 px-3 py-1 rounded-full">
            {number}
          </span>
          <div
            className="w-10 h-10 rounded-xl bg-terracotta/10 text-terracotta
                       flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
            aria-hidden="true"
          >
            <IconComponent
              className="w-5 h-5 text-terracotta"
              strokeWidth={1.8}
            />
          </div>
        </div>

        {/* Title: uppercase, bold, navy */}
        <h3 className="text-base sm:text-lg font-bold uppercase tracking-wider text-navy mb-4 leading-snug">
          {title}
        </h3>

        {/* Items list: clean pill tags */}
        <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-6">
          {items.map((item, index) => (
            <span
              key={index}
              className="inline-block text-xs font-normal px-2.5 py-1 rounded-full
                         bg-beige/35 text-navy/75 border border-beige/40
                         transition-colors duration-200 group-hover:bg-beige/50"
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* Psychological dimension callout block */}
      <div className="mt-4 pt-4 border-t border-beige/40">
        <div className="bg-blush/25 border-l-[3px] border-terracotta rounded-r-xl p-3.5 sm:p-4">
          <p className="text-[11px] font-semibold tracking-wider uppercase text-terracotta mb-1">
            Psychological Dimension
          </p>
          <p className="text-xs sm:text-sm text-navy/80 italic font-light leading-relaxed">
            "{psychologicalDimension}"
          </p>
        </div>
      </div>
    </article>
  );
}
