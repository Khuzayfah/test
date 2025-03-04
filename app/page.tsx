'use client';

import { useEffect } from 'react';
import Hero from './sections/home/Hero';
import Features from './sections/home/Features';
import Testimonials from './sections/home/Testimonials';
import CTA from './sections/home/CTA';
import ParticleBackground from './sections/home/ParticleBackground';
import './styles/animations.css';

export default function Home() {
  // Load any animations or effects that need to be triggered on page load
  useEffect(() => {
    // This can be used for any global animations or effects
    document.body.classList.add('bg-gray-900');
    
    return () => {
      document.body.classList.remove('bg-gray-900');
    };
  }, []);

  return (
    <main className="bg-gray-900 animate-fade-in particles-bg">
      {/* Particle background */}
      <ParticleBackground />
      
      {/* Hero section */}
      <Hero />
      
      {/* Features section */}
      <Features />
      
      {/* Testimonials section */}
      <Testimonials />
      
      {/* CTA section */}
      <CTA />
    </main>
  );
} 