import { useEffect, useRef, useState } from 'react';

// A custom hook that fires when the element enters the viewport
export function useIntersectionObserver(options = {}) {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Update our state when observer callback fires
        if (entry.isIntersecting) {
          setIsIntersecting(true);
          // Optional: if we only want it to animate once, unobserve
          if (!options.loop && elementRef.current) {
            observer.unobserve(elementRef.current);
          }
        } else if (options.loop) {
          // If loop is true, toggle back to false when it leaves
          setIsIntersecting(false);
        }
      },
      { threshold: options.threshold || 0.1, rootMargin: options.rootMargin || '0px' }
    );

    const target = elementRef.current;
    if (target) {
      observer.observe(target);
    }

    return () => {
      if (target) {
        observer.unobserve(target);
      }
    };
  }, [options.threshold, options.rootMargin, options.loop]);

  return [elementRef, isIntersecting];
}
