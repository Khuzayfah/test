'use client';

import React, { useCallback, memo } from 'react';
import { loadSlim } from "tsparticles-slim";
import Particles from "react-tsparticles";

/**
 * ParticlesContainer Component
 * 
 * A background component with animated particles using red and white colors (Singapore flag colors)
 * Creates an elegant, professional effect with particles that move and connect
 */
const ParticlesContainer = () => {
  // Initialize the tsParticles instance
  const particlesInit = useCallback(async (engine: any) => {
    // Use loadSlim for a simpler, more compatible implementation
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
        fpsLimit: 30,
        particles: {
          color: {
            value: ["#ED2939", "#ffffff", "#ED2939"],
          },
          links: {
            color: "#ED2939",
            distance: 150,
            enable: true,
            opacity: 0.3,
            width: 1,
          },
          collisions: {
            enable: false,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: false,
            speed: 0.8,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 1000,
            },
            value: 40,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: ["circle"],
          },
          size: {
            value: { min: 1, max: 3 },
          },
        },
        detectRetina: true,
      }}
      className="absolute inset-0 z-0"
    />
  );
};

export default memo(ParticlesContainer); 