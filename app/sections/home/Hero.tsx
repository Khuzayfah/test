/**
 * Hero Section - Elegant Red and White Luxury Theme
 * 
 * A sophisticated hero section that combines classic luxury with modern elegance.
 * Features rich red accents, gold decorative elements, and timeless typography.
 * Designed to create a memorable first impression with premium visuals.
 */

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.8,
      ease: [0.165, 0.84, 0.44, 1]
    }
  }
};

const stagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] overflow-hidden bg-white">
      {/* Decorative background elements */}
      <div className="absolute inset-0 z-0">
        {/* Subtle gradient background */}
        <div className="absolute inset-0 bg-gradient-to-b from-white to-[#FFF5F5]"></div>
        
        {/* Red accent circle */}
        <motion.div 
          className="absolute -top-20 -right-20 w-80 h-80 rounded-full opacity-5 bg-luxury-red-600"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.05 }}
          transition={{ duration: 2, ease: "easeOut" }}
        />
        
        {/* Gold decorative elements */}
        <motion.div
          className="absolute bottom-10 left-10 w-64 h-64 rounded-full opacity-5 bg-luxury-gold-main"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.05 }}
          transition={{ duration: 2, ease: "easeOut", delay: 0.3 }}
        />
        
        {/* Luxury corner ornaments */}
        <div className="absolute top-10 left-10 w-40 h-40 border-t-2 border-l-2 border-luxury-gold-main/20" />
        <div className="absolute bottom-10 right-10 w-40 h-40 border-b-2 border-r-2 border-luxury-gold-main/20" />
      </div>
      
      {/* Main content */}
      <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left column with text content */}
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="visible"
            className="luxury-corner"
          >
            {/* Luxury badge */}
            <motion.div
              variants={fadeIn}
              className="mb-6"
            >
              <span className="luxury-badge">Premium Quality</span>
            </motion.div>
            
            {/* Main headline */}
            <motion.h1 
              variants={fadeIn}
              className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
            >
              Elegant & <span className="luxury-text">Sophisticated</span> Design Solutions
            </motion.h1>
            
            {/* Subheadline */}
            <motion.p 
              variants={fadeIn}
              className="text-xl md:text-2xl mb-8 text-luxury-gray-700 font-light"
            >
              Experience the perfect blend of timeless elegance and modern luxury in every detail.
            </motion.p>
            
            {/* Call to action buttons */}
            <motion.div 
              variants={fadeIn}
              className="flex flex-wrap gap-4"
            >
              <Link href="/services" className="btn-primary">
                Explore Services
              </Link>
              <Link href="/contact" className="btn-secondary">
                Contact Us
              </Link>
            </motion.div>
            
            {/* Trust indicators */}
            <motion.div 
              variants={fadeIn}
              className="mt-12 flex items-center gap-8"
            >
              <div className="flex flex-col items-center">
                <span className="text-2xl font-bold text-luxury-red-600">99%</span>
                <span className="text-sm text-luxury-gray-500">Client Satisfaction</span>
              </div>
              <div className="w-px h-10 bg-luxury-gold-light/30"></div>
              <div className="flex flex-col items-center">
                <span className="text-2xl font-bold text-luxury-red-600">15+</span>
                <span className="text-sm text-luxury-gray-500">Years Experience</span>
              </div>
              <div className="w-px h-10 bg-luxury-gold-light/30"></div>
              <div className="flex flex-col items-center">
                <span className="text-2xl font-bold text-luxury-red-600">250+</span>
                <span className="text-sm text-luxury-gray-500">Projects Completed</span>
              </div>
            </motion.div>
          </motion.div>
          
          {/* Right column with hero image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative"
          >
            <div className="relative aspect-[4/3] w-full rounded-xl overflow-hidden shadow-2xl luxury-shadow">
              {/* Placeholder for hero image */}
              <div className="absolute inset-0 bg-gradient-to-br from-luxury-red-500/90 to-luxury-red-700/90">
                {/* You can replace this with your actual image */}
                <div className="absolute inset-0 mix-blend-overlay opacity-20 bg-[url('/patterns/luxury-pattern.png')]"></div>
              </div>
              
              {/* Decorative elements inside image */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div 
                  className="text-white text-9xl font-serif"
                  initial={{ rotate: -5, opacity: 0.3 }}
                  animate={{ 
                    rotate: 5, 
                    opacity: 0.5,
                    transition: { 
                      repeat: Infinity, 
                      repeatType: "reverse", 
                      duration: 5 
                    } 
                  }}
                >
                  <svg width="120" height="120" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="0.5"/>
                    <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="currentColor" strokeWidth="0.5"/>
                    <path d="M12 7V5" stroke="currentColor" strokeWidth="0.5" strokeLinecap="round"/>
                    <path d="M17 12H19" stroke="currentColor" strokeWidth="0.5" strokeLinecap="round"/>
                    <path d="M12 17V19" stroke="currentColor" strokeWidth="0.5" strokeLinecap="round"/>
                    <path d="M7 12H5" stroke="currentColor" strokeWidth="0.5" strokeLinecap="round"/>
                  </svg>
                </motion.div>
              </div>
              
              {/* Decorative label */}
              <div className="absolute bottom-0 left-0 right-0 bg-black/50 backdrop-blur-sm p-4 text-white">
                <p className="text-center text-sm uppercase tracking-widest">Exquisite Elegance</p>
              </div>
            </div>
            
            {/* Decorative floating element */}
            <motion.div 
              className="absolute -right-10 -bottom-10 w-24 h-24 bg-white rounded-full shadow-xl flex items-center justify-center"
              initial={{ y: 10 }}
              animate={{ 
                y: -10,
                transition: { 
                  repeat: Infinity, 
                  repeatType: "reverse", 
                  duration: 3,
                  ease: "easeInOut"
                } 
              }}
            >
              <div className="text-luxury-gold-main">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="currentColor"/>
                </svg>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
      
      {/* Bottom decorative divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <div className="luxury-divider"></div>
      </div>
    </section>
  );
} 