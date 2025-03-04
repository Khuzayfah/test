'use client';

import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  color: string;
}

export default function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particles = useRef<Particle[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    // Initialize function to create particles
    const initParticles = () => {
      particles.current = [];
      const particleCount = Math.min(50, Math.floor(window.innerWidth / 30)); // Responsive particle count
      
      for (let i = 0; i < particleCount; i++) {
        const size = Math.random() * 3 + 1;
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const speedX = (Math.random() - 0.5) * 0.3;
        const speedY = (Math.random() - 0.5) * 0.3;
        
        // Gold color with different opacity for depth feeling
        const opacity = Math.random() * 0.5 + 0.1;
        const goldTones = [
          `rgba(212, 175, 55, ${opacity})`, // Gold
          `rgba(218, 165, 32, ${opacity})`, // Golden rod
          `rgba(207, 181, 59, ${opacity})`, // Gold/yellow
          `rgba(255, 215, 0, ${opacity})`, // Gold
          `rgba(184, 134, 11, ${opacity})`, // Dark golden rod
        ];
        
        const color = goldTones[Math.floor(Math.random() * goldTones.length)];
        
        particles.current.push({
          x,
          y,
          size,
          speedX,
          speedY,
          color,
        });
      }
    };

    // Animation function
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.current.forEach((particle) => {
        // Update position
        particle.x += particle.speedX;
        particle.y += particle.speedY;
        
        // Wrap around screen
        if (particle.x > canvas.width) particle.x = 0;
        else if (particle.x < 0) particle.x = canvas.width;
        
        if (particle.y > canvas.height) particle.y = 0;
        else if (particle.y < 0) particle.y = canvas.height;
        
        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();
        
        // Connect particles that are close to each other
        connectParticles(particle);
      });
      
      requestAnimationFrame(animate);
    };

    // Function to draw lines between close particles
    const connectParticles = (particle: Particle) => {
      const connectionRadius = 150; // Distance threshold for connection
      
      particles.current.forEach((otherParticle) => {
        if (particle === otherParticle) return;
        
        const dx = particle.x - otherParticle.x;
        const dy = particle.y - otherParticle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < connectionRadius) {
          // Calculate opacity based on distance (closer = more opaque)
          const opacity = 1 - (distance / connectionRadius);
          ctx.beginPath();
          ctx.strokeStyle = `rgba(212, 175, 55, ${opacity * 0.15})`; // Gold color with dynamic opacity
          ctx.lineWidth = 0.5;
          ctx.moveTo(particle.x, particle.y);
          ctx.lineTo(otherParticle.x, otherParticle.y);
          ctx.stroke();
        }
      });
    };

    // Handle window resize
    const handleResize = () => {
      setCanvasDimensions();
      initParticles();
    };

    // Initialize
    setCanvasDimensions();
    initParticles();
    animate();
    
    // Set up event listeners
    window.addEventListener('resize', handleResize);
    
    // Clean up
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 -z-20 bg-transparent pointer-events-none"
      style={{ opacity: 0.3 }}
    />
  );
} 