'use client';

import { motion } from 'framer-motion';
import { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  icon?: ReactNode;
  fullWidth?: boolean;
  isLoading?: boolean;
  luxuryAnimation?: boolean;
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  icon,
  fullWidth = false,
  isLoading = false,
  luxuryAnimation = false,
  className = '',
  ...props
}: ButtonProps) {
  // Size classes
  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg'
  };

  // Variant classes
  const variantClasses = {
    primary: 'bg-gradient-to-r from-amber-500 to-amber-600 text-gray-900 hover:from-amber-600 hover:to-amber-700 focus:ring-amber-500',
    secondary: 'bg-gray-800 text-gray-100 hover:bg-gray-700 border border-gray-700 hover:border-amber-500/50 focus:ring-gray-700',
    outline: 'bg-transparent text-amber-500 border border-amber-500 hover:bg-amber-500/10 focus:ring-amber-500'
  };

  // Full width class
  const widthClass = fullWidth ? 'w-full' : '';

  const baseClass = `${sizeClasses[size]} ${variantClasses[variant]} ${widthClass} rounded-md font-semibold shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 transition-all duration-300 flex items-center justify-center ${className}`;

  return (
    <motion.button
      whileHover={{ 
        scale: luxuryAnimation ? 1.05 : 1.02, 
        boxShadow: luxuryAnimation ? '0 0 15px rgba(212, 175, 55, 0.3)' : 'none' 
      }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.2 }}
      disabled={isLoading || props.disabled}
      className={baseClass}
      {...props}
    >
      {isLoading ? (
        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
      ) : icon ? (
        <span className="mr-2">{icon}</span>
      ) : null}
      {children}
    </motion.button>
  );
} 