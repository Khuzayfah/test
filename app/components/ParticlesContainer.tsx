'use client';

import React, { useCallback, memo, useState, useEffect } from 'react';
import { loadSlim } from "tsparticles-slim";
import Particles from "react-tsparticles";
import type { Engine } from "tsparticles-engine";

/**
 * ParticlesContainer Component
 * 
 * A background component with animated particles using red and white colors
 * Creates an elegant, professional effect with particles that move and connect
 * 
 * Optimized for better performance:
 * - Reduced FPS limit
 * - Reduced particle count
 * - Simplified particle shapes
 * - Disabled collisions when on mobile
 * - Proper hydration handling
 */
const ParticlesContainer = () => {
  // Prevent hydration mismatch by only rendering on client
  const [isClient, setIsClient] = useState(false);
  
  useEffect(() => {
    setIsClient(true);
  }, []);
  
  // Detect if on mobile for performance optimizations
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Set initial value
    checkIsMobile();
    
    // Update on resize
    window.addEventListener('resize', checkIsMobile);
    
    return () => {
      window.removeEventListener('resize', checkIsMobile);
    };
  }, []);

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  // Only render on client to prevent hydration mismatch
  if (!isClient) {
    return (
      <div className="absolute inset-0 bg-gradient-to-b from-white to-luxury-red-50 opacity-50" />
    );
  }

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: {
          enable: false,
        },
        background: {
          color: {
            value: "#ffffff",
          },
        },
        fpsLimit: isMobile ? 30 : 60,
        particles: {
          color: {
            value: "#d13239",
          },
          links: {
            color: "#d13239",
            distance: 150,
            enable: true,
            opacity: 0.3,
            width: isMobile ? 1 : 1.5,
          },
          collisions: {
            enable: !isMobile,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: false,
            speed: isMobile ? 1 : 1.5,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: isMobile ? 50 : 100,
          },
          opacity: {
            value: 0.7,
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 1, max: isMobile ? 4 : 6 },
          },
        },
        detectRetina: true,
      }}
      className="absolute inset-0 z-0"
    />
  );
};

// Use React.memo to prevent unnecessary re-renders
export default memo(ParticlesContainer); 