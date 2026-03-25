"use client";

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

/**
 * Custom hook to handle GSAP animations properly during client-side navigation
 * Resets scroll position and kills all ScrollTriggers when route changes
 */
export function useGSAPAnimation() {
  const pathname = usePathname();

  useEffect(() => {
    // Reset scroll to top on route change
    window.scrollTo(0, 0);

    // Kill all existing ScrollTriggers to prevent stuck animations
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  }, [pathname]);

  return null;
}
