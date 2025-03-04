'use client';

/**
 * Luxury Navbar - Elegant Red and White Theme
 * 
 * A sophisticated navigation bar with premium styling and subtle animations.
 * Features red and gold accents, glass effect on scroll, and elegant transitions.
 */

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes } from 'react-icons/fa';
import Image from 'next/image';
import { motion } from 'framer-motion';

// Define navigation items
const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'Projects', href: '/projects' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'glass-effect shadow-md py-2' : 'bg-transparent py-4'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="relative group">
            <motion.div 
              className="flex items-center"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="mr-2 w-10 h-10 relative overflow-hidden bg-luxury-red-600 rounded-full flex items-center justify-center">
                <span className="text-white font-serif text-xl">S</span>
                <div className="absolute inset-0 bg-gradient-to-tr from-luxury-red-700 to-luxury-red-500 opacity-50"></div>
              </div>
              <div className="font-serif text-2xl font-bold text-luxury-red-700">
                SingRank
                <span className="text-luxury-gold-main">.</span>
              </div>
            </motion.div>
            
            {/* Decorative hover effect */}
            <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-luxury-gold-main group-hover:w-full transition-all duration-300"></div>
          </Link>

          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="relative px-4 py-2 text-luxury-gray-700 hover:text-luxury-red-600 font-medium transition-colors duration-300 group overflow-hidden"
              >
                <span className="relative z-10">{item.name}</span>
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-luxury-red-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </Link>
            ))}
            <Link
              href="/login"
              className="ml-6 px-5 py-2 rounded-md bg-gradient-to-r from-luxury-red-600 to-luxury-red-700 text-white font-medium shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300 flex items-center"
            >
              <span>Login</span>
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </Link>
          </nav>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              type="button"
              className="text-luxury-gray-700 hover:text-luxury-red-600 focus:outline-none"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? (
                // X icon for close
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                // Menu icon
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden ${mobileMenuOpen ? 'block' : 'hidden'}`}>
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ 
            opacity: mobileMenuOpen ? 1 : 0,
            height: mobileMenuOpen ? 'auto' : 0
          }}
          transition={{ duration: 0.3 }}
          className="px-4 pt-2 pb-4 bg-white/95 backdrop-blur-sm border-t border-luxury-gray-100"
        >
          <div className="space-y-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block px-3 py-2 text-base font-medium text-luxury-gray-700 hover:text-luxury-red-600 hover:bg-luxury-red-50 rounded-md transition-colors duration-200"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/login"
              className="block mt-4 px-3 py-2 text-base font-medium text-white bg-luxury-red-600 hover:bg-luxury-red-700 rounded-md transition-colors duration-200 text-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              Login
            </Link>
          </div>
        </motion.div>
      </div>
      
      {/* Decorative accent line */}
      <div className={`h-0.5 w-full bg-gradient-to-r from-transparent via-luxury-gold-main/30 to-transparent transition-opacity duration-300 ${
        scrolled ? 'opacity-100' : 'opacity-0'  
      }`}></div>
    </header>
  );
} 