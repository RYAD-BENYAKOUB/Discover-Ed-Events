/**
 * About.jsx
 * ---------
 * Rich "About Yasmine" section with:
 *   - Profile photo (rounded, soft-edged)
 *   - Heading "Hey, I'm Yasmine" + bio paragraph
 *   - Education timeline
 *   - Certificates list
 *   - Skills in 3 tag-group columns
 *   - Fun-fact callout card
 *
 * Each subsection uses ScrollReveal for staggered fade-in on scroll.
 * Typography hierarchy: script heading > uppercase labels > body text.
 */

import React from 'react';
import ScrollReveal from './ScrollReveal';
import profilePhoto from '../assets/yasmine.jpg';

/* ====================================================================
   INLINE SVG ICONS — small, consistent, one per subsection label
   ==================================================================== */

function GraduationIcon() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round"
            d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.627 48.627 0 0 1 12 20.904a48.627 48.627 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.57 50.57 0 0 0-2.658-.813A59.905 59.905 0 0 1 12 3.493a59.902 59.902 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15v-3.75m0 0-2.25.75" />
    </svg>
  );
}

function CertificateIcon() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round"
            d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
    </svg>
  );
}

function SkillsIcon() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round"
            d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
    </svg>
  );
}

function SparkleIcon() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round"
            d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
    </svg>
  );
}

/* ====================================================================
   DECORATIVE: organic blob (background, very subtle)
   ==================================================================== */
function OrganicBlob() {
  return (
    <svg
      className="absolute -bottom-10 -left-10 w-48 h-48 md:w-64 md:h-64 opacity-[0.07] text-blush pointer-events-none"
      viewBox="0 0 200 200"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M45.3,-62.5C56.9,-54.3,63.2,-38.6,67.8,-22.5C72.4,-6.5,75.3,10,70.3,23.6C65.4,37.1,52.5,47.7,38.8,56.3C25.1,64.9,10.5,71.5,-4.5,77.1C-19.5,82.7,-35,87.3,-46.8,80.2C-58.6,73.2,-66.7,54.5,-72.3,36.5C-77.9,18.5,-81,1.2,-76.4,-13.1C-71.8,-27.4,-59.6,-38.7,-46.5,-46.5C-33.4,-54.3,-19.3,-58.6,-1.9,-56.2C15.4,-53.7,33.8,-70.7,45.3,-62.5Z" transform="translate(100 100)" />
    </svg>
  );
}

/* ====================================================================
   SUBSECTION LABEL — reusable heading with icon
   ==================================================================== */
function SectionLabel({ icon, children }) {
  return (
    <div className="flex items-center gap-2 mb-4">
      <span className="text-terracotta">{icon}</span>
      <h3 className="text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase text-navy/70">
        {children}
      </h3>
      <span className="flex-1 h-px bg-beige/60" />
    </div>
  );
}

/* ====================================================================
   EDUCATION DATA
   ==================================================================== */
const education = [
  { years: '2014–2017', title: 'Advanced Technician\u2019s Certificate (BTS) in Tourism', detail: 'Specializing in Travel Agency' },
  { years: '2017–2020', title: 'DEUA in International Economic Relations Law', detail: null },
  { years: '2019',      title: 'Advanced Diploma in French Language — DALF C1', detail: null },
  { years: '2019–2022', title: 'License in School Psychology', detail: null },
  { years: '2022–2024', title: 'Master 2 in School Psychology', detail: null },
];

/* ====================================================================
   CERTIFICATES DATA
   ==================================================================== */
const certificates = [
  { year: '2020', title: 'Amadeus', detail: 'Flight reservation & travel management system' },
  { year: '2020', title: 'First Aid Training — Jurex Itek School', detail: 'CPR, medical emergencies, defibrillator use' },
  { year: '2022', title: 'Local Tour Guide Training', detail: 'Association L\u2019Hirondelle' },
];

/* ====================================================================
   SKILLS DATA
   ==================================================================== */
const skillGroups = [
  {
    label: 'Personal',
    items: ['Communication', 'Event Management', 'Teamwork', 'Marketing', 'Time Management', 'Empathy'],
  },
  {
    label: 'Languages',
    items: ['Arabic', 'French', 'English', 'Spanish', 'Korean'],
  },
];

/* ====================================================================
   MAIN COMPONENT
   ==================================================================== */
export default function About() {
  return (
    <section
      id="about"
      className="relative py-20 md:py-28 px-6 bg-cream overflow-hidden"
    >
      {/* Background decoration */}
      <OrganicBlob />

      <div className="max-w-5xl mx-auto">

        {/* ─── HEADING ─── */}
        <ScrollReveal>
          <h2 className="font-script text-4xl sm:text-5xl md:text-6xl text-navy text-center mb-14">
            Hey, I'm Yasmine
          </h2>
        </ScrollReveal>

        {/* ─── PHOTO + BIO (two-column on md+) ─── */}
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-14 mb-16">

          {/* Profile photo */}
          <ScrollReveal className="md:w-2/5 flex justify-center shrink-0">
            <div className="relative">
              <div className="w-52 h-52 sm:w-60 sm:h-60 md:w-64 md:h-64 rounded-2xl overflow-hidden border-4 border-blush/40 shadow-lg rotate-1">
                <img
                  src={profilePhoto}
                  alt="Fellahi Yasmine"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              {/* Decorative dashed ring */}
              <div className="absolute -inset-3 rounded-2xl border-2 border-dashed border-terracotta/15 -rotate-1 pointer-events-none" />
            </div>
          </ScrollReveal>

          {/* Bio text */}
          <ScrollReveal className="md:w-3/5 text-center md:text-left">
            <p className="text-base sm:text-lg text-navy/80 leading-relaxed mb-5">
              Currently pursuing a Master's Degree in School Psychology,{' '}
              <span className="font-semibold text-terracotta">Yasmine</span> blends a BTS in
              Tourism with her role as communications officer at{' '}
              <span className="font-medium">Wejhatcom</span>. Passionate about tourism through
              her work with associations and professional events, she is diligent, determined,
              and versatile — driven by the goal of creating an innovative project that merges
              school psychology and tourism.
            </p>
            {/* Small decorative divider */}
            <div className="flex items-center justify-center md:justify-start gap-2">
              <span className="block w-8 h-px bg-terracotta/40" />
              <span className="text-terracotta text-xs tracking-[0.25em] uppercase font-medium">
                Explorer · Psychologue · Organisatrice
              </span>
              <span className="block w-8 h-px bg-terracotta/40" />
            </div>
          </ScrollReveal>
        </div>

        {/* ─── EDUCATION TIMELINE ─── */}
        <ScrollReveal className="mb-14">
          <SectionLabel icon={<GraduationIcon />}>Education</SectionLabel>

          <div className="relative pl-6 border-l-2 border-beige/60 space-y-6">
            {education.map((item, i) => (
              <div key={i} className="relative group">
                {/* Timeline dot */}
                <span className="absolute -left-[25px] top-1 w-3 h-3 rounded-full bg-terracotta/70 border-2 border-cream
                                 group-hover:bg-terracotta transition-colors duration-200" />
                {/* Year badge */}
                <span className="inline-block text-xs font-semibold text-terracotta bg-terracotta/10 px-2.5 py-0.5 rounded-full mb-1">
                  {item.years}
                </span>
                {/* Title */}
                <p className="text-sm sm:text-base text-navy/85 font-medium leading-snug">
                  {item.title}
                </p>
                {/* Optional detail */}
                {item.detail && (
                  <p className="text-xs sm:text-sm text-navy/50 mt-0.5">{item.detail}</p>
                )}
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* ─── CERTIFICATES ─── */}
        <ScrollReveal className="mb-14">
          <SectionLabel icon={<CertificateIcon />}>Certificates</SectionLabel>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {certificates.map((cert, i) => (
              <div
                key={i}
                className="bg-white/50 rounded-xl p-4 border border-beige/40
                           transition-all duration-200 hover:shadow-md hover:-translate-y-0.5"
              >
                <span className="inline-block text-xs font-semibold text-terracotta bg-terracotta/10 px-2.5 py-0.5 rounded-full mb-2">
                  {cert.year}
                </span>
                <p className="text-sm font-medium text-navy/85 leading-snug mb-1">
                  {cert.title}
                </p>
                <p className="text-xs text-navy/50">{cert.detail}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* ─── SKILLS (3 columns of tags) ─── */}
        <ScrollReveal className="mb-14">
          <SectionLabel icon={<SkillsIcon />}>Skills</SectionLabel>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {skillGroups.map((group, i) => (
              <div key={i}>
                {/* Group label */}
                <p className="text-xs font-semibold text-navy/50 uppercase tracking-wider mb-2.5">
                  {group.label}
                </p>
                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {group.items.map((skill, j) => (
                    <span
                      key={j}
                      className="inline-block text-xs sm:text-sm px-3 py-1 rounded-full
                                 bg-beige/40 text-navy/70 border border-beige/50
                                 transition-colors duration-200 hover:bg-blush/30 hover:border-blush/50"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* ─── FUN FACT (callout card) ─── */}
        <ScrollReveal>
          <SectionLabel icon={<SparkleIcon />}>Fun Fact</SectionLabel>

          <div className="relative bg-gradient-to-br from-terracotta/10 via-blush/15 to-beige/20
                          rounded-2xl p-6 sm:p-8 border border-terracotta/15 overflow-hidden">
            {/* Large decorative quote mark */}
            <span
              className="absolute top-3 left-4 text-6xl sm:text-7xl font-script text-terracotta/15 leading-none pointer-events-none select-none"
              aria-hidden="true"
            >
              "
            </span>

            <p className="relative text-sm sm:text-base text-navy/80 leading-relaxed italic pl-6 sm:pl-8">
              Went from ticketing agent to live TV guest — conducting an unplanned live
              interview in Arabic on <span className="font-semibold not-italic">ENTV</span> about
              promoting Algerian tourism, mid-career-pivot into school psychology.
            </p>

            {/* Small attribution */}
            <p className="text-right text-xs text-terracotta/60 mt-3 font-medium">
              — Yasmine
            </p>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
