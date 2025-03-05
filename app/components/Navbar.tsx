'use client';

/**
 * Luxury Navbar - Elegant Red and White Theme
 * 
 * A sophisticated navigation bar with premium styling and subtle animations.
 * Features red and gold accents, glass effect on scroll, and elegant transitions.
 */

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';

// Logo letter animation variants
const letterVariants = {
  initial: { opacity: 0, y: -20 },
  animate: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.05,
      duration: 0.5,
      ease: "easeOut"
    }
  }),
  hover: (i: number) => ({
    y: [0, -7, 0],
    transition: {
      delay: i * 0.05,
      duration: 0.6,
      ease: "easeInOut",
      times: [0, 0.5, 1]
    }
  })
};

// Tagline animation variants
const taglineVariants = {
  initial: { opacity: 0, x: -20 },
  animate: { 
    opacity: 1, 
    x: 0,
    transition: { 
      delay: 0.5, 
      duration: 0.6,
      ease: "easeOut"
    }
  },
  hover: {
    scale: 1.05,
    color: "#ff4555",
    transition: { 
      duration: 0.3,
      ease: "easeInOut"
    }
  }
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  // Detect scroll for background change
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    // Only add the event listener client-side
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  // Close mobile menu when path changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Handle body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Nav links with icons
  const navLinks = [
    { 
      title: 'Home', 
      href: '/', 
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
        </svg>
      )
    },
    { 
      title: 'Services', 
      href: '/services', 
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path>
        </svg>
      )
    },
    { 
      title: 'Projects', 
      href: '/projects', 
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"></path>
        </svg>
      )
    },
    { 
      title: 'About', 
      href: '/about', 
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"></path>
        </svg>
      )
    },
    { 
      title: 'Contact', 
      href: '/contact', 
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
        </svg>
      )
    }
  ];

  // Check if link is active
  const isActive = (path: string) => pathname === path;

  // Logo text for animation
  const singText = "SING".split("");
  const rankText = "RANK".split("");

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled || isOpen ? 'bg-white md:bg-gradient-to-r md:from-[#0f0f0f] md:to-[#262626] shadow-lg py-2 md:py-3' : 'bg-transparent py-4 md:py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo with Animation */}
          <Link href="/">
            <motion.div
              className="flex flex-col"
              initial="initial"
              animate="animate"
              whileHover="hover"
            >
              <div className="flex items-end">
                <div className="flex">
                  {singText.map((letter, index) => (
                    <motion.span
                      key={`sing-${index}`}
                      className="text-xl md:text-2xl font-black tracking-wider text-[#000000]"
                      variants={letterVariants}
                      custom={index}
                    >
                      {letter}
                    </motion.span>
                  ))}
                </div>
                <div className="flex">
                  {rankText.map((letter, index) => (
                    <motion.span
                      key={`rank-${index}`}
                      className="text-xl md:text-2xl font-black tracking-wider text-[#d13239]"
                      variants={letterVariants}
                      custom={index + 4}
                    >
                      {letter}
                    </motion.span>
                  ))}
                </div>
                <motion.span
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ 
                    opacity: 1, 
                    scale: [1, 1.2, 1],
                    transition: { 
                      delay: 0.8,
                      duration: 0.6,
                      repeat: Infinity,
                      repeatType: "mirror",
                      repeatDelay: 5
                    }
                  }}
                  className="ml-1 w-2 h-2 bg-[#d13239] rounded-full"
                ></motion.span>
              </div>
              <motion.p
                variants={taglineVariants}
                className="text-xs md:text-sm tracking-wide italic text-gray-600 font-medium mt-0.5"
              >
                Your partner for digital excellence
              </motion.p>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2 lg:space-x-6">
            {navLinks.map((link, index) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.3 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href={link.href}
                  className={`relative px-4 py-2 text-sm font-bold transition-all duration-300 tracking-wide flex items-center ${
                    isActive(link.href) 
                      ? 'text-[#d13239]' 
                      : 'text-[#d13239] hover:text-[#ff4555]'
                  }`}
                >
                  <motion.span 
                    initial={{ rotate: 0 }}
                    whileHover={{ rotate: 15 }}
                    className="mr-1"
                  >
                    {link.icon}
                  </motion.span>
                  {link.title}
                  {isActive(link.href) && (
                    <motion.span
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#d13239]"
                      layoutId="activeIndicator"
                    />
                  )}
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label={isOpen ? "Close menu" : "Open menu"}
              className="p-3 rounded-full bg-[#d13239]/10 text-[#d13239] focus:outline-none"
            >
              {!isOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="h-6 w-6 text-[#d13239]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="md:hidden fixed inset-0 top-[56px] bg-white shadow-xl z-40 overflow-y-auto"
          >
            <div className="flex flex-col h-full pt-4 pb-20 px-4">
              <motion.div 
                className="grid grid-cols-1 gap-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1 }}
              >
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      className={`flex items-center py-4 px-4 rounded-xl text-base font-bold transition-all duration-300 ${
                        isActive(link.href) 
                          ? 'bg-[#d13239]/10 text-[#d13239]' 
                          : 'bg-gray-50 text-[#d13239] hover:bg-gray-100 hover:text-[#ff4555] active:bg-gray-200'
                      }`}
                    >
                      <motion.div 
                        whileHover={{ rotate: 15 }}
                        whileTap={{ scale: 0.9, rotate: 15 }}
                        className="flex items-center justify-center mr-4 w-10 h-10 rounded-full bg-[#d13239]/10"
                      >
                        {link.icon}
                      </motion.div>
                      <span className="text-lg">{link.title}</span>
                      {isActive(link.href) && (
                        <motion.span
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="ml-auto w-2 h-2 rounded-full bg-[#d13239]"
                        />
                      )}
                    </Link>
                  </motion.div>
                ))}
              </motion.div>

              <div className="mt-auto pt-8 pb-6">
                <div className="bg-gray-50 p-4 rounded-xl">
                  <div className="flex justify-center space-x-5">
                    <motion.a
                      href="https://www.facebook.com/Khuzayfah.by.redo/"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                      className="h-12 w-12 flex items-center justify-center rounded-full bg-[#d13239]/10 text-[#d13239]"
                    >
                      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                      </svg>
                    </motion.a>
                    
                    <motion.a
                      href="https://github.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                      className="h-12 w-12 flex items-center justify-center rounded-full bg-[#d13239]/10 text-[#d13239]"
                    >
                      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.416 22 12c0-5.523-4.477-10-10-10z"></path>
                      </svg>
                    </motion.a>
                    
                    <motion.a
                      href="https://instagram.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                      className="h-12 w-12 flex items-center justify-center rounded-full bg-[#d13239]/10 text-[#d13239]"
                    >
                      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153.509.5.902 1.105 1.153 1.772.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 01-1.153 1.772c-.5.508-1.105.902-1.772 1.153-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 01-1.772-1.153 4.904 4.904 0 01-1.153-1.772c-.247-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 011.153-1.772A4.897 4.897 0 015.45 2.525c.638-.247 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 1.802c-2.67 0-2.986.01-4.04.059-.976.045-1.505.207-1.858.344-.466.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.048 1.055-.058 1.37-.058 4.04 0 2.67.01 2.986.058 4.04.045.977.207 1.505.344 1.858.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.04.058 2.67 0 2.987-.01 4.04-.058.977-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.04 0-2.67-.01-2.986-.058-4.04-.045-.977-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.055-.048-1.37-.058-4.04-.058zm0 3.063a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 8.468a3.333 3.333 0 100-6.666 3.333 3.333 0 000 6.666zm6.538-8.469a1.2 1.2 0 11-2.4 0 1.2 1.2 0 012.4 0z"></path>
                      </svg>
                    </motion.a>
                  </div>

                  <div className="mt-6 text-center">
                    <motion.div 
                      initial="initial"
                      animate="animate"
                      whileHover="hover"
                      className="flex flex-col items-center"
                    >
                      <div className="flex items-end">
                        <div className="flex">
                          {singText.map((letter, index) => (
                            <motion.span
                              key={`sing-mobile-${index}`}
                              className="text-xl font-black tracking-wider text-[#000000]"
                              variants={letterVariants}
                              custom={index}
                            >
                              {letter}
                            </motion.span>
                          ))}
                        </div>
                        <div className="flex">
                          {rankText.map((letter, index) => (
                            <motion.span
                              key={`rank-mobile-${index}`}
                              className="text-xl font-black tracking-wider text-[#d13239]"
                              variants={letterVariants}
                              custom={index + 4}
                            >
                              {letter}
                            </motion.span>
                          ))}
                        </div>
                        <motion.span
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ 
                            opacity: 1, 
                            scale: [1, 1.2, 1],
                            transition: { 
                              delay: 0.8,
                              duration: 0.6,
                              repeat: Infinity,
                              repeatType: "mirror",
                              repeatDelay: 5
                            }
                          }}
                          className="ml-1 w-2 h-2 bg-[#d13239] rounded-full"
                        ></motion.span>
                      </div>
                      <motion.p
                        variants={taglineVariants}
                        className="text-sm italic text-gray-600 font-medium mt-1"
                      >
                        Where digital vision becomes reality
                      </motion.p>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
} 