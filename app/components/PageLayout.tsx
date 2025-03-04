/**
 * Shared Page Layout Component
 * 
 * This component provides a unified layout structure for all pages in the application.
 * It ensures that all pages have consistent styling, background, and structure.
 * 
 * Features:
 * - White background with professional styling
 * - Particle background integration (when available)
 * - Common padding and margins
 * - Consistent container width
 * - Animation integrations with Framer Motion
 */

'use client';

import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';
import ParticleBackground from '../sections/home/ParticleBackground';
import '../styles/animations.css';

interface PageLayoutProps {
  children: ReactNode;
  title?: string;
  description?: string;
  showParticles?: boolean;
  className?: string;
}

export default function PageLayout({
  children,
  title,
  description,
  showParticles = true,
  className = ''
}: PageLayoutProps) {
  return (
    <div className={`bg-white min-h-screen pt-24 pb-16 ${className}`}>
      {showParticles && <ParticleBackground />}
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Optional Page header */}
        {(title || description) && (
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {title && (
                <>
                  <h1 className="text-4xl font-bold mb-4">{title}</h1>
                  <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
                </>
              )}
              
              {description && (
                <p className="max-w-3xl mx-auto text-gray-700 text-lg">
                  {description}
                </p>
              )}
            </motion.div>
          </div>
        )}
        
        {/* Page content */}
        {children}
      </div>
    </div>
  );
} 