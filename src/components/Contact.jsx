/**
 * Contact.jsx
 * ------------
 * Contact / social footer section with real details.
 *
 * Layout: centered, minimal, mauve (#B6988A) background.
 * - Primary contacts: Email, Phone, LinkedIn (real links)
 * - Placeholder socials: Instagram, Facebook, TikTok (dimmed, ready to activate)
 * - Address in small text
 * - Copyright line
 * - ScrollReveal fade-in for consistency
 */

import React from 'react';
import ScrollReveal from './ScrollReveal';

/* ====================================================================
   SVG ICON COMPONENTS — consistent 20×20, stroke-based
   ==================================================================== */

function EmailIcon({ className = 'w-5 h-5' }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round"
            d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
    </svg>
  );
}

function PhoneIcon({ className = 'w-5 h-5' }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round"
            d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
    </svg>
  );
}

function LinkedInIcon({ className = 'w-5 h-5' }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function InstagramIcon({ className = 'w-5 h-5' }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  );
}

function FacebookIcon({ className = 'w-5 h-5' }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function TikTokIcon({ className = 'w-5 h-5' }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
    </svg>
  );
}

function MapPinIcon({ className = 'w-5 h-5' }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round"
            d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
      <path strokeLinecap="round" strokeLinejoin="round"
            d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
    </svg>
  );
}

/* ====================================================================
   CONTACT LINK — reusable row with icon circle + text
   ==================================================================== */
function ContactLink({ href, icon, label, sublabel, external = false }) {
  return (
    <a
      href={href}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      className="flex items-center gap-4 group"
    >
      {/* Icon circle */}
      <span className="w-11 h-11 rounded-full bg-cream/15 flex items-center justify-center
                       text-cream/80 transition-all duration-300
                       group-hover:bg-cream/25 group-hover:text-cream group-hover:scale-110">
        {icon}
      </span>
      {/* Text */}
      <div className="min-w-0">
        <p className="text-sm font-medium text-cream/90 group-hover:text-cream transition-colors duration-200 truncate">
          {label}
        </p>
        {sublabel && (
          <p className="text-xs text-cream/50">{sublabel}</p>
        )}
      </div>
    </a>
  );
}

/* ====================================================================
   PLACEHOLDER SOCIAL ICON — dimmed, ready to activate later
   ==================================================================== */
function PlaceholderSocial({ icon, label }) {
  return (
    <div
      className="w-10 h-10 rounded-full bg-cream/8 flex items-center justify-center
                 text-cream/30 cursor-default transition-all duration-300
                 hover:bg-cream/12 hover:text-cream/45 hover:scale-105"
      title={`${label} — coming soon`}
      aria-label={`${label} (coming soon)`}
    >
      {icon}
    </div>
  );
}

/* ====================================================================
   MAIN COMPONENT
   ==================================================================== */
export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-mauve text-cream py-20 md:py-28 px-6"
    >
      <div className="max-w-3xl mx-auto">

        {/* ─── HEADING ─── */}
        <ScrollReveal>
          <h2 className="font-script text-4xl sm:text-5xl md:text-6xl text-cream text-center mb-3">
            Let's Connect
          </h2>
          <p className="text-center text-cream/60 text-sm sm:text-base max-w-sm mx-auto mb-14">
            Whether it's about an upcoming trip, a collaboration, or just saying hello — I'd love to hear from you.
          </p>
        </ScrollReveal>

        {/* ─── PRIMARY CONTACTS ─── */}
        <ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
            <ContactLink
              href="mailto:fellahiyasmine1993@gmail.com"
              icon={<EmailIcon />}
              label="fellahiyasmine1993@gmail.com"
              sublabel="Email"
            />
            <ContactLink
              href="tel:+213674371341"
              icon={<PhoneIcon />}
              label="+213 674 371 341"
              sublabel="Phone (Algeria)"
            />
            <ContactLink
              href="tel:+97466441379"
              icon={<PhoneIcon />}
              label="+974 6644 1379"
              sublabel="Phone (Qatar)"
            />
            <ContactLink
              href="https://www.linkedin.com/in/yasminefellahi93/"
              icon={<LinkedInIcon />}
              label="Fellahi Yasmine"
              sublabel="LinkedIn"
              external
            />
          </div>
        </ScrollReveal>

        {/* ─── DIVIDER ─── */}
        <div className="h-px bg-cream/10 mb-10" />

        {/* ─── ADDRESS + PLACEHOLDER SOCIALS ─── */}
        <ScrollReveal>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-8">

            {/* Address */}
            <div className="flex items-start gap-3 text-cream/50">
              <MapPinIcon className="w-4 h-4 mt-0.5 shrink-0" />
              <p className="text-xs leading-relaxed">
                BP 15225 Saim Mohamed<br />
                31003, Oran, Algérie
              </p>
            </div>

            {/* Social icons */}
            <div className="flex items-center gap-3">
              <a
                href="https://www.instagram.com/discover_ed_events/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-cream/15 flex items-center justify-center
                           text-cream/70 transition-all duration-300
                           hover:bg-cream/25 hover:text-cream hover:scale-110"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href="https://www.facebook.com/share/g/1EuQbZWLzu/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-cream/15 flex items-center justify-center
                           text-cream/70 transition-all duration-300
                           hover:bg-cream/25 hover:text-cream hover:scale-110"
                aria-label="Facebook"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>
              <PlaceholderSocial icon={<TikTokIcon className="w-4 h-4" />} label="TikTok" />
            </div>
          </div>
        </ScrollReveal>

        {/* ─── COPYRIGHT ─── */}
        <div className="mt-14 pt-6 border-t border-cream/10 text-center">
          <p className="text-cream/40 text-xs">
            &copy; {new Date().getFullYear()} Discover Ed Events. All rights reserved.
          </p>
        </div>

      </div>
    </section>
  );
}
