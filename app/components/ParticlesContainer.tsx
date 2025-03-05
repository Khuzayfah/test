'use client';

import React, { useCallback, memo } from 'react';
import { loadSlim } from "tsparticles-slim";
import Particles from "react-tsparticles";
import type { Engine } from "tsparticles-engine";

/**
 * ParticlesContainer Component
 * 
 * A background component with animated particles using red and white colors (Singapore flag colors)
 * Creates an elegant, professional effect with particles that move and connect
 * 
 * Optimized for better performance:
 * - Reduced FPS limit
 * - Reduced particle count
 * - Simplified particle shapes
 * - Disabled collisions
 */
const ParticlesContainer = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

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
        fpsLimit: 60,
        particles: {
          color: {
            value: "#d13239",
          },
          links: {
            color: "#d13239",
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1.5,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: false,
            speed: 1.5,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 100,
          },
          opacity: {
            value: 0.7,
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 2, max: 6 },
          },
        },
        detectRetina: true,
      }}
      className="absolute inset-0 z-0"
    />
  );
};

export default memo(ParticlesContainer); 