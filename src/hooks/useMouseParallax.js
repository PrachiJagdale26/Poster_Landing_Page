import { useState, useEffect } from 'react';

/**
 * Hook to track mouse movement and return an X/Y offset
 * for applying parallax transforms.
 */
export function useMouseParallax(intensity = 15) {
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      // Calculate normalized position -1 to 1 based on window width/height
      const xPos = (e.clientX / window.innerWidth) - 0.5;
      const yPos = (e.clientY / window.innerHeight) - 0.5;
      
      // Calculate translation
      setOffset({
        x: xPos * intensity,
        y: yPos * intensity
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [intensity]);

  return offset;
}
