/**
 * Elegant Footer Component - Red and White Luxury Theme
 * 
 * A sophisticated footer design with premium styling and brand elements.
 * Features luxurious red gradients, gold accents, and elegant typography.
 * Optimized for mobile with compact spacing and responsive layout.
 */

'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: 'spring', stiffness: 100 }
  }
};

const iconVariants = {
  hidden: { scale: 0, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { type: 'spring', stiffness: 200, damping: 10 }
  },
  hover: {
    scale: 1.2,
    rotate: [0, -10, 10, -5, 0],
    transition: { duration: 0.5 }
  },
  tap: { scale: 0.9 }
};

const footerNavigation = {
  services: [
    { name: 'SEO', href: '/services' },
    { name: 'Content Strategy', href: '/services/content' },
    { name: 'Technical SEO', href: '/services/technical' },
    { name: 'Local SEO', href: '/services/local' },
  ],
  company: [
    { name: 'About', href: '/about' },
    { name: 'Blog', href: '/blog' },
    { name: 'Projects', href: '/projects' },
    { name: 'Contact', href: '/contact' },
  ],
  legal: [
    { name: 'Privacy', href: '/privacy' },
    { name: 'Terms', href: '/terms' },
    { name: 'Cookie Policy', href: '/cookies' },
  ],
  social: [
    {
      name: 'Instagram',
      href: '#',
      icon: () => (
        <svg fill="currentColor" viewBox="0 0 24 24" className="h-5 w-5 sm:h-6 sm:w-6">
          <path
            fillRule="evenodd"
            d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: 'X',
      href: '#',
      icon: () => (
        <svg fill="currentColor" viewBox="0 0 24 24" className="h-5 w-5 sm:h-6 sm:w-6">
          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
        </svg>
      ),
    },
    {
      name: 'Facebook',
      href: '#',
      icon: () => (
        <svg fill="currentColor" viewBox="0 0 24 24" className="h-5 w-5 sm:h-6 sm:w-6">
          <path
            fillRule="evenodd"
            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: 'LinkedIn',
      href: '#',
      icon: () => (
        <svg fill="currentColor" viewBox="0 0 24 24" className="h-5 w-5 sm:h-6 sm:w-6">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
        </svg>
      ),
    },
  ],
};

export default function Footer() {
  const [currentYear, setCurrentYear] = useState('');
  
  // Use useEffect to set the date only on the client side
  useEffect(() => {
    setCurrentYear(new Date().getFullYear().toString());
  }, []);
  
  return (
    <motion.footer 
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-gradient-to-r from-[#0f0f0f] to-[#262626] text-white"
    >
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        {/* Mobile Footer */}
        <div className="md:hidden">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-8"
          >
            {/* Logo & Social */}
            <motion.div variants={itemVariants} className="flex flex-col items-center">
              <motion.h2 
                className="text-2xl font-black tracking-wider mb-3 bg-clip-text text-transparent bg-gradient-to-r from-white to-red-500"
                whileHover={{ scale: 1.05 }}
              >
                <span className="text-white">SING</span>
                <span className="text-[#d13239]">RANK</span>
              </motion.h2>
              
              <div className="flex space-x-5 mt-2">
                {/* Social Icons with Animation - Updated Facebook Link */}
                <motion.a 
                  href="https://www.facebook.com/Khuzayfah.by.redo/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={iconVariants} 
                  whileHover="hover"
                  whileTap="tap"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-sm hover:bg-[#d13239]/80 transition-colors"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                  </svg>
                </motion.a>
                
                <motion.a 
                  href="https://www.facebook.com/Khuzayfah.by.redo/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={iconVariants} 
                  whileHover="hover"
                  whileTap="tap"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-sm hover:bg-[#d13239]/80 transition-colors"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
        </svg>
                </motion.a>
                
                <motion.a 
                  href="https://www.facebook.com/Khuzayfah.by.redo/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={iconVariants} 
                  whileHover="hover"
                  whileTap="tap"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-sm hover:bg-[#d13239]/80 transition-colors"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
        </svg>
                </motion.a>
      </div>
            </motion.div>

          {/* Quick Links */}
            <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-sm font-medium">
              <Link href="/" className="hover:text-[#d13239] transition-colors px-2 py-1">HOME</Link>
              <Link href="/services" className="hover:text-[#d13239] transition-colors px-2 py-1">SERVICES</Link>
              <Link href="/about" className="hover:text-[#d13239] transition-colors px-2 py-1">ABOUT</Link>
              <Link href="/blog" className="hover:text-[#d13239] transition-colors px-2 py-1">BLOG</Link>
              <Link href="/contact" className="hover:text-[#d13239] transition-colors px-2 py-1">CONTACT</Link>
            </motion.div>

          {/* Contact Info */}
            <motion.div variants={itemVariants} className="text-center">
              <div className="space-y-2 text-sm text-white/80">
                <p className="flex items-center justify-center gap-2">
                  <motion.span 
                    whileHover={{ rotate: 20 }}
                    className="inline-block"
                  >
                    <svg className="h-4 w-4 text-[#d13239]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                  </motion.span>
                  Singapore
                </p>
                <p className="flex items-center justify-center gap-2">
                  <motion.span 
                    whileHover={{ rotate: 20 }}
                    className="inline-block"
                  >
                    <svg className="h-4 w-4 text-[#d13239]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </motion.span>
                  <a href="mailto:singrank.sg@gmail.com" className="hover:text-[#d13239] transition-colors">
                    singrank.sg@gmail.com
                  </a>
                </p>
                <p className="flex items-center justify-center gap-2">
                  <motion.span 
                    whileHover={{ rotate: 20 }}
                    className="inline-block"
                  >
                    <svg className="h-4 w-4 text-[#d13239]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                  </motion.span>
                  <a href="tel:+65666999" className="hover:text-[#d13239] transition-colors">
                    +65 666 999
                  </a>
                </p>
            </div>
            </motion.div>
          </motion.div>
          </div>
          
        {/* Desktop Footer */}
        <div className="hidden md:block">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-3 gap-8"
          >
            {/* Company Info */}
            <motion.div variants={itemVariants} className="space-y-4">
              <motion.h2 
                className="text-3xl font-black tracking-wider mb-3 bg-clip-text text-transparent bg-gradient-to-r from-white to-red-500"
                whileHover={{ scale: 1.05 }}
              >
                <span className="text-white">SING</span>
                <span className="text-[#d13239]">RANK</span>
              </motion.h2>
              <p className="text-white/80">
                Professional SEO and digital marketing services in Singapore. We help businesses achieve top rankings and increase their online visibility.
              </p>
              <div className="flex space-x-4 pt-2">
                {/* Social Icons - Updated Facebook Link */}
                <motion.a 
                  href="https://www.facebook.com/Khuzayfah.by.redo/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={iconVariants} 
                  whileHover="hover"
                  whileTap="tap"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-sm hover:bg-[#d13239]/80 transition-colors"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                  </svg>
                </motion.a>
                
                <motion.a 
                  href="https://www.facebook.com/Khuzayfah.by.redo/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={iconVariants} 
                  whileHover="hover"
                  whileTap="tap"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-sm hover:bg-[#d13239]/80 transition-colors"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </motion.a>
                
                <motion.a 
                  href="https://www.facebook.com/Khuzayfah.by.redo/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={iconVariants} 
                  whileHover="hover"
                  whileTap="tap"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-sm hover:bg-[#d13239]/80 transition-colors"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
                  </svg>
                </motion.a>
                
                <motion.a 
                  href="https://www.facebook.com/Khuzayfah.by.redo/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={iconVariants} 
                  whileHover="hover"
                  whileTap="tap"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-sm hover:bg-[#d13239]/80 transition-colors"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </motion.a>
            </div>
            </motion.div>
            
            {/* Quick Links */}
            <motion.div variants={itemVariants}>
              <h3 className="text-lg font-bold mb-5 relative inline-block">
                Quick Links
                <motion.span 
                  className="absolute left-0 bottom-0 h-0.5 bg-[#d13239]" 
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ delay: 1, duration: 0.8 }}
                />
              </h3>
              <ul className="space-y-3">
                <motion.li whileHover={{ x: 8 }} transition={{ type: 'spring', stiffness: 300 }}>
                  <Link href="/" className="text-white/80 hover:text-[#d13239] transition-colors flex items-center">
                    <svg className="h-3.5 w-3.5 mr-2 text-[#d13239]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                    Home
                  </Link>
                </motion.li>
                <motion.li whileHover={{ x: 8 }} transition={{ type: 'spring', stiffness: 300 }}>
                  <Link href="/services" className="text-white/80 hover:text-[#d13239] transition-colors flex items-center">
                    <svg className="h-3.5 w-3.5 mr-2 text-[#d13239]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                    Services
                  </Link>
                </motion.li>
                <motion.li whileHover={{ x: 8 }} transition={{ type: 'spring', stiffness: 300 }}>
                  <Link href="/about" className="text-white/80 hover:text-[#d13239] transition-colors flex items-center">
                    <svg className="h-3.5 w-3.5 mr-2 text-[#d13239]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                    About
                  </Link>
                </motion.li>
                <motion.li whileHover={{ x: 8 }} transition={{ type: 'spring', stiffness: 300 }}>
                  <Link href="/blog" className="text-white/80 hover:text-[#d13239] transition-colors flex items-center">
                    <svg className="h-3.5 w-3.5 mr-2 text-[#d13239]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                    Blog
                  </Link>
                </motion.li>
                <motion.li whileHover={{ x: 8 }} transition={{ type: 'spring', stiffness: 300 }}>
                  <Link href="/contact" className="text-white/80 hover:text-[#d13239] transition-colors flex items-center">
                    <svg className="h-3.5 w-3.5 mr-2 text-[#d13239]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                    Contact
                  </Link>
                </motion.li>
              </ul>
            </motion.div>
            
            {/* Contact Info */}
            <motion.div variants={itemVariants}>
              <h3 className="text-lg font-bold mb-5 relative inline-block">
                Get In Touch
                <motion.span 
                  className="absolute left-0 bottom-0 h-0.5 bg-[#d13239]" 
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ delay: 1, duration: 0.8 }}
                />
              </h3>
              <div className="space-y-4">
                <motion.div 
                  className="flex items-start"
                  whileHover={{ x: 5 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <span className="p-2 bg-[#d13239]/20 rounded-full mr-3 mt-0.5">
                    <svg className="h-5 w-5 text-[#d13239]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                  </span>
            <div>
                    <h4 className="font-semibold">Location</h4>
                    <p className="text-white/70">Singapore</p>
            </div>
                </motion.div>
                
                <motion.div 
                  className="flex items-start"
                  whileHover={{ x: 5 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <span className="p-2 bg-[#d13239]/20 rounded-full mr-3 mt-0.5">
                    <svg className="h-5 w-5 text-[#d13239]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </span>
            <div>
                    <h4 className="font-semibold">Email</h4>
                    <a href="mailto:singrank.sg@gmail.com" className="text-white/70 hover:text-[#d13239] transition-colors">
                      singrank.sg@gmail.com
                    </a>
            </div>
                </motion.div>
                
                <motion.div 
                  className="flex items-start"
                  whileHover={{ x: 5 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <span className="p-2 bg-[#d13239]/20 rounded-full mr-3 mt-0.5">
                    <svg className="h-5 w-5 text-[#d13239]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                  </span>
            <div>
                    <h4 className="font-semibold">Phone</h4>
                    <a href="tel:+65666999" className="text-white/70 hover:text-[#d13239] transition-colors">
                      +65 666 999
                    </a>
            </div>
                </motion.div>
          </div>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Copyright */}
        <motion.div 
          className="mt-12 pt-6 border-t border-white/10 text-center text-white/60 text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <p className="flex items-center justify-center gap-1">
            <span>&copy; {currentYear} </span>
            <span className="font-bold">
              <span className="text-white">SING</span>
              <span className="text-[#d13239]">RANK</span>
            </span>
            <motion.span
              animate={{ 
                scale: [1, 1.2, 1],
              }}
              transition={{ duration: 2, repeat: Infinity }}
              className="mx-1 text-[#d13239]"
            >
              ♦
            </motion.span>
            <span>All rights reserved.</span>
          </p>
          <motion.div 
            className="mt-2 text-white/40 text-xs"
            whileHover={{ opacity: 0.8 }}
          >
            <a 
              href="https://www.facebook.com/Khuzayfah.by.redo/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-[#d13239] transition-colors"
            >
              Facebook: @Khuzayfah.by.redo
            </a>
          </motion.div>
        </motion.div>
          </div>
    </motion.footer>
  );
} 