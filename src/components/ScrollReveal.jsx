/**
 * ScrollReveal.jsx
 * ----------------
 * Lightweight wrapper that fades-in / slides-up children
 * when they enter the viewport, using IntersectionObserver.
 * No external animation library needed.
 */

import { useEffect, useRef, useState } from 'react';

export default function ScrollReveal({
  children,
  className = '',
  threshold = 0.15,
  rootMargin = '0px 0px -50px 0px',
}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Once visible, stay visible (no re-hiding on scroll away)
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(element);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return (
    <div
      ref={ref}
      className={`${isVisible ? 'scroll-visible' : 'scroll-hidden'} ${className}`}
    >
      {children}
    </div>
  );
}
