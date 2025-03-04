'use client';

/**
 * Luxury Red and White Particle Background
 * 
 * An elegant animated background with floating particles in luxury red and gold tones.
 * Features:
 * - Premium particle animation with luxury color scheme
 * - Variable opacity and size for depth effect
 * - Subtle connection lines between particles
 * - Optimized performance with canvas rendering
 */

import React, { useRef, useEffect, useState } from 'react';

interface Particle {
  x: number;
  y: number;
  dx: number;
  dy: number;
  radius: number;
  color: string;
}

export default function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  
  // Initialize canvas and particles
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas to full window size
    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      setDimensions({ width, height });
    };
    
    window.addEventListener('resize', handleResize);
    handleResize();
    
    // Particle configuration
    const particleCount = Math.min(Math.max(Math.floor(window.innerWidth * 0.05), 40), 100);
    const connectionDistance = 150;
    const particles: Particle[] = [];
    
    // Luxury color palette
    const luxuryColors = [
      'rgba(229, 62, 62, 0.5)',  // Luxury red 500 with 50% opacity
      'rgba(197, 48, 48, 0.6)',  // Luxury red 600 with 60% opacity
      'rgba(212, 175, 55, 0.7)', // Gold main with 70% opacity
      'rgba(249, 218, 139, 0.4)', // Gold light with 40% opacity
      'rgba(255, 248, 230, 0.6)', // Luxury white cream with 60% opacity
    ];
    
    // Initialize particles with luxury styling
    for (let i = 0; i < particleCount; i++) {
      const radius = Math.random() * 3 + 1;
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height;
      const dx = (Math.random() - 0.5) * 0.5;
      const dy = (Math.random() - 0.5) * 0.5;
      
      // Smaller particles get lighter colors, larger particles get more vibrant colors
      const colorIndex = radius > 2.5 ? 
        Math.floor(Math.random() * 3) : // Red and gold for larger particles
        Math.floor(Math.random() * 2) + 3; // Lighter colors for smaller particles
                  
      particles.push({
        x,
        y,
        dx,
        dy,
        radius,
        color: luxuryColors[colorIndex],
      });
    }
    
    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update and draw particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        
        // Move particles
        p.x += p.dx;
        p.y += p.dy;
        
        // Bounce off edges
        if (p.x + p.radius > canvas.width || p.x - p.radius < 0) {
          p.dx = -p.dx;
        }
        
        if (p.y + p.radius > canvas.height || p.y - p.radius < 0) {
          p.dy = -p.dy;
        }
        
        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();
        
        // Draw connections between particles
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const distance = Math.sqrt(
            Math.pow(p.x - p2.x, 2) + Math.pow(p.y - p2.y, 2)
          );
          
          if (distance < connectionDistance) {
            // Calculate opacity based on distance - closer particles have more visible connections
            const opacity = 1 - distance / connectionDistance;
            
            // Draw connection line
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            
            // Use gradient for connection lines based on particle colors
            if (p.radius > 2 || p2.radius > 2) {
              // More visible connections for larger particles
              ctx.strokeStyle = `rgba(212, 175, 55, ${opacity * 0.3})`; // Gold connections
            } else {
              // Subtle connections for smaller particles
              ctx.strokeStyle = `rgba(229, 62, 62, ${opacity * 0.15})`; // Red connections
            }
            
            ctx.lineWidth = Math.min(p.radius, p2.radius) * 0.3;
            ctx.stroke();
          }
        }
      }
    };
    
    animate();
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-0 bg-luxury-white-pearl"
      style={{
        width: '100%',
        height: '100%',
        position: 'fixed',
      }}
    />
  );
} 