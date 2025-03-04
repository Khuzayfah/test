'use client';

/**
 * Professional Card Component with SGDS Color Palette
 * 
 * An elegant card component designed with Singapore Government Design System colors.
 * Features include purple/blue accents, hover effects, customizable icons, and both light and
 * dark variants to match the professional theme.
 * 
 * Features:
 * - Light and dark color schemes with SGDS color accents
 * - Elegant hover animations with shadow effects
 * - Optional accent border with subtle gradient
 * - Icon support with multiple positioning options and dynamic animations
 * - Built with Framer Motion for smooth animations
 */

import { motion } from 'framer-motion';
import React, { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;                  // Required: Card content
  className?: string;                   // Optional: Additional classes
  hoverEffect?: boolean;                // Optional: Enable hover animation
  goldBorder?: boolean;                 // Optional: Add gold border
  icon?: ReactNode;                     // Optional: Icon to display
  iconPosition?: 'top' | 'top-left' | 'top-right'; // Optional: Icon position
  onClick?: () => void;                 // Optional: Click handler
  darkBackground?: boolean;             // Optional: Use dark background instead of light
  iconAnimation?: 'float' | 'pulse' | 'rotate' | 'sparkle' | 'none'; // Optional: Animation type for icon
}

export default function Card({
  children,
  className = '',
  hoverEffect = false,
  goldBorder = false,
  icon,
  iconPosition = 'top',
  onClick,
  darkBackground = false,
  iconAnimation = 'float', // Default to float animation
}: CardProps) {
  // Determine base classes - support both dark and light backgrounds for professional theme
  const baseClasses = darkBackground 
    ? 'bg-black/90 text-white'  
    : 'bg-white text-gray-900';
  
  // Add accent border if specified - more refined for light backgrounds
  const borderClasses = goldBorder 
    ? darkBackground 
      ? 'border border-[#7857FF]/30 hover:border-[#7857FF]/60' 
      : 'border border-[#7857FF]/70 hover:border-[#1F69FF]'
    : darkBackground
      ? 'border border-gray-800'
      : 'border border-gray-200';

  // Icon positioning classes
  const iconClasses = {
    'top': 'flex justify-center -mt-6 mb-4',
    'top-left': 'absolute -top-4 -left-4',
    'top-right': 'absolute -top-4 -right-4',
  };

  // Shadow classes for light and dark cards
  const shadowClass = darkBackground
    ? 'shadow-lg shadow-black/40'
    : 'shadow-md shadow-gray-200/70';

  // Combine all classes
  const combinedClasses = `${baseClasses} ${borderClasses} ${shadowClass} rounded-xl relative ${className}`;
  
  // Icon animation variants
  const iconAnimations = {
    float: {
      y: [0, -10, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    },
    pulse: {
      scale: [1, 1.1, 1],
      opacity: [0.9, 1, 0.9],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    },
    rotate: {
      rotate: [0, 360],
      transition: {
        duration: 8,
        repeat: Infinity,
        ease: "linear"
      }
    },
    sparkle: {
      scale: [1, 1.1, 1],
      textShadow: [
        "0 0 5px rgba(120,87,255,0.3)",
        "0 0 15px rgba(120,87,255,0.7)",
        "0 0 5px rgba(120,87,255,0.3)"
      ],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    },
    none: {}
  };

  // Render with hover effects if specified
  return hoverEffect ? (
    <motion.div
      whileHover={{ 
        y: -5,
        boxShadow: darkBackground 
          ? '0 15px 30px -10px rgba(0, 0, 0, 0.6), 0 0 10px rgba(120, 87, 255, 0.3)'
          : '0 15px 30px -10px rgba(0, 0, 0, 0.1), 0 0 15px rgba(31, 105, 255, 0.2)',
        borderColor: darkBackground 
          ? 'rgba(120, 87, 255, 0.5)'
          : 'rgba(31, 105, 255, 0.4)',
      }}
      transition={{ duration: 0.3 }}
      className={combinedClasses}
      onClick={onClick}
    >
      {icon && (
        <div className={iconClasses[iconPosition]}>
          <motion.div 
            className={`flex items-center justify-center w-12 h-12 rounded-full shadow-lg ${
              darkBackground 
                ? 'bg-black border border-[#7857FF]/50' 
                : 'bg-white border border-[#1F69FF]'
            }`}
            animate={iconAnimations[iconAnimation]}
            whileHover={{ 
              scale: 1.15, 
              boxShadow: '0 0 15px rgba(120, 87, 255, 0.5)',
              transition: { duration: 0.2 }
            }}
          >
            {icon}
          </motion.div>
        </div>
      )}
      {children}
    </motion.div>
  ) : (
    <div className={combinedClasses} onClick={onClick}>
      {icon && (
        <div className={iconClasses[iconPosition]}>
          <motion.div 
            className={`flex items-center justify-center w-12 h-12 rounded-full shadow-lg ${
              darkBackground 
                ? 'bg-black border border-[#7857FF]/50' 
                : 'bg-white border border-[#1F69FF]'
            }`}
            animate={iconAnimations[iconAnimation]}
          >
            {icon}
          </motion.div>
        </div>
      )}
      {children}
    </div>
  );
} 