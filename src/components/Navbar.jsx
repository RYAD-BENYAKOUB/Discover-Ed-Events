/**
 * Navbar.jsx
 * ----------
 * Sticky navigation bar for Discover Ed Events.
 *
 * Features:
 * - Brand logo (DEE.jpeg rounded 40px) & script typography.
 * - Desktop links with terracotta underline on hover and active state.
 * - Terracotta CTA pill for Contact link.
 * - Transparent over hero; morphs to cream/90 with blur & shadow after 50px scroll.
 * - IntersectionObserver scroll spy to highlight current section.
 * - Mobile responsive drawer/dropdown with animated Menu/X toggle, click-outside & Esc to close.
 * - Accessible markup (<nav aria-label="Main navigation">, aria-expanded, visible focus).
 * - Excludes itself on admin routes (/admin/*).
 */

import React, { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import logoSrc from "../assets/DEE.jpeg";

const NAV_LINKS = [
  { name: "Home", href: "#home", id: "home" },
  { name: "About", href: "#about", id: "about" },
  { name: "Services", href: "#services", id: "services" },
  { name: "Experiences", href: "#experiences", id: "experiences" },
  { name: "Contact", href: "#contact", id: "contact", isCta: true },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAdminRoute, setIsAdminRoute] = useState(false);
  const navRef = useRef(null);

  /* ---- Route check: Hide on /admin/* ---- */
  useEffect(() => {
    const checkRoute = () => {
      if (typeof window !== "undefined") {
        setIsAdminRoute(window.location.pathname.startsWith("/admin"));
      }
    };
    checkRoute();
    window.addEventListener("popstate", checkRoute);
    return () => window.removeEventListener("popstate", checkRoute);
  }, []);

  /* ---- Background transition on scroll (>50px) ---- */
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* ---- Scroll spy using IntersectionObserver ---- */
  useEffect(() => {
    const sectionIds = NAV_LINKS.map((link) => link.id);
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries.filter((entry) => entry.isIntersecting);
        if (visibleEntries.length > 0) {
          // Select entry with largest intersection ratio
          const bestEntry = visibleEntries.reduce((prev, curr) =>
            curr.intersectionRatio > prev.intersectionRatio ? curr : prev,
          );
          setActiveSection(bestEntry.target.id);
        }
      },
      {
        root: null,
        rootMargin: "-80px 0px -40% 0px",
        threshold: [0, 0.2, 0.4, 0.6, 0.8, 1],
      },
    );

    sections.forEach((section) => observer.observe(section));

    // Fallbacks for top/bottom boundaries
    const handleBoundaryScroll = () => {
      if (window.scrollY < 80) {
        setActiveSection("home");
      } else if (
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 50
      ) {
        setActiveSection("contact");
      }
    };

    window.addEventListener("scroll", handleBoundaryScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleBoundaryScroll);
    };
  }, []);

  /* ---- Close mobile menu on Escape key ---- */
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isMobileMenuOpen]);

  /* ---- Close mobile menu on click outside ---- */
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        isMobileMenuOpen &&
        navRef.current &&
        !navRef.current.contains(e.target)
      ) {
        setIsMobileMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  // Do not render on admin routes
  if (isAdminRoute) {
    return null;
  }

  return (
    <header
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
        isScrolled
          ? "bg-cream/90 backdrop-blur-md shadow-xs py-3"
          : "bg-transparent py-4 sm:py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Brand identity: logo + script name */}
        <a
          href="#home"
          className="flex items-center gap-3 group rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-terracotta focus-visible:ring-offset-2 focus-visible:ring-offset-cream"
          aria-label="Discover Ed Event - Home"
        >
          <img
            src={logoSrc}
            alt="Discover Ed Event logo"
            className="w-10 h-10 rounded-full object-cover shadow-xs border border-terracotta/25 transition-transform duration-300 group-hover:scale-105"
          />
          <span className="font-script text-2xl sm:text-3xl text-navy leading-none tracking-normal">
            Discover Ed Event
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav
          aria-label="Main navigation"
          className="hidden md:flex items-center gap-7 lg:gap-8"
        >
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.id;

            if (link.isCta) {
              return (
                <a
                  key={link.id}
                  href={link.href}
                  className={`px-5 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-terracotta focus-visible:ring-offset-2 focus-visible:ring-offset-cream shadow-xs hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 ${
                    isActive
                      ? "bg-terracotta text-cream ring-2 ring-terracotta/40 ring-offset-2 ring-offset-cream"
                      : "bg-terracotta text-cream hover:bg-terracotta/90"
                  }`}
                >
                  {link.name}
                </a>
              );
            }

            return (
              <a
                key={link.id}
                href={link.href}
                className={`relative py-1 text-sm font-medium transition-colors duration-200 group focus:outline-none focus-visible:ring-2 focus-visible:ring-terracotta rounded-sm ${
                  isActive
                    ? "text-navy font-semibold"
                    : "text-navy/80 hover:text-navy"
                }`}
              >
                {link.name}
                {/* Terracotta underline on hover and active */}
                <span
                  className={`absolute bottom-0 left-0 h-0.5 bg-terracotta rounded-full transition-all duration-300 ease-out ${
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                  aria-hidden="true"
                />
              </a>
            );
          })}
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-nav-menu"
          aria-label={
            isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"
          }
          className="md:hidden p-2 rounded-lg text-navy hover:text-terracotta hover:bg-beige/30 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-terracotta"
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6 transition-transform duration-200 rotate-90" />
          ) : (
            <Menu className="w-6 h-6 transition-transform duration-200" />
          )}
        </button>
      </div>

      {/* Mobile Navigation Dropdown */}
      <div
        id="mobile-nav-menu"
        className={`md:hidden absolute top-full left-0 right-0 bg-cream/95 backdrop-blur-md border-b border-beige/60 shadow-lg transition-all duration-300 ease-in-out overflow-hidden ${
          isMobileMenuOpen
            ? "max-h-96 opacity-100 py-4 px-6"
            : "max-h-0 opacity-0 py-0 px-6 pointer-events-none"
        }`}
      >
        <nav aria-label="Mobile navigation" className="flex flex-col gap-2">
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.id;

            if (link.isCta) {
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="mt-2 text-center py-3 px-5 rounded-full text-xs font-semibold uppercase tracking-wider bg-terracotta text-cream shadow-xs hover:bg-terracotta/90 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-terracotta"
                >
                  {link.name}
                </a>
              );
            }

            return (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`py-3 px-4 rounded-xl text-base font-medium transition-colors flex items-center justify-between focus:outline-none focus-visible:ring-2 focus-visible:ring-terracotta ${
                  isActive
                    ? "bg-beige/40 text-terracotta font-semibold"
                    : "text-navy hover:bg-beige/25 hover:text-terracotta"
                }`}
              >
                <span>{link.name}</span>
                {isActive && (
                  <span
                    className="w-2 h-2 rounded-full bg-terracotta"
                    aria-hidden="true"
                  />
                )}
              </a>
            );
          })}
        </nav>
      </div>

      {/* Mobile Backdrop Overlay */}
      {isMobileMenuOpen && (
        <div
          className="md:hidden fixed inset-0 top-[60px] bg-navy/20 backdrop-blur-xs z-[-1]"
          onClick={() => setIsMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}
    </header>
  );
}
