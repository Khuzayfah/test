'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  hoverEffect?: boolean;
  goldBorder?: boolean;
  onClick?: () => void;
}

export default function Card({
  children,
  className = '',
  hoverEffect = false,
  goldBorder = false,
  onClick,
}: CardProps) {
  const baseClasses = `bg-gray-800 rounded-xl shadow-lg ${className}`;
  
  // Add gold border if specified
  const borderClasses = goldBorder 
    ? 'border border-amber-500/30' 
    : 'border border-gray-700';

  // Combine all classes
  const combinedClasses = `${baseClasses} ${borderClasses}`;

  return hoverEffect ? (
    <motion.div
      whileHover={{ 
        y: -5,
        boxShadow: '0 10px 30px -10px rgba(0, 0, 0, 0.5), 0 0 10px rgba(212, 175, 55, 0.2)',
        borderColor: 'rgba(212, 175, 55, 0.5)',
      }}
      transition={{ duration: 0.3 }}
      className={combinedClasses}
      onClick={onClick}
    >
      {children}
    </motion.div>
  ) : (
    <div className={combinedClasses} onClick={onClick}>
      {children}
    </div>
  );
} 