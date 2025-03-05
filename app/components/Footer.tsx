/**
 * Compact Professional Footer
 * 
 * A refined, elegant footer with improved readability and professional appearance.
 * Features a clean layout, subtle animations, and optimized for both mobile and desktop.
 */

'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  FiMapPin, 
  FiMail, 
  FiPhone, 
  FiGlobe,
  FiInstagram, 
  FiTwitter, 
  FiFacebook, 
  FiLinkedin 
} from 'react-icons/fi';

// Simplified animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 10 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.4 }
  }
};

// Simplified footer navigation
const footerLinks = {
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
      icon: <FiInstagram />
    },
    {
      name: 'Twitter',
      href: '#',
      icon: <FiTwitter />
    },
    {
      name: 'Facebook',
      href: '#',
      icon: <FiFacebook />
    },
    {
      name: 'LinkedIn',
      href: '#',
      icon: <FiLinkedin />
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
    <footer className="bg-gray-50 border-t border-gray-200">
      {/* Main Footer Content */}
      <div className="max-w-6xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="space-y-4"
          >
            <div className="flex items-baseline">
              <span className="text-lg font-bold text-gray-800">SING</span>
              <span className="text-lg font-bold text-[#d13239]">RANK</span>
              <span className="ml-0.5 w-1.5 h-1.5 bg-[#d13239] rounded-full"></span>
            </div>
            
            <p className="text-sm text-gray-600 max-w-xs">
              Helping businesses achieve digital excellence through strategic SEO and content optimization.
            </p>
            
            <ul className="space-y-2 text-sm">
              <li className="flex items-start">
                <FiMapPin className="mt-0.5 mr-2 text-[#d13239]" />
                <span className="text-gray-600">Singapore</span>
              </li>
              <li className="flex items-start">
                <FiMail className="mt-0.5 mr-2 text-[#d13239]" />
                <a href="mailto:singrank.sg@gmail.com" className="text-gray-600 hover:text-[#d13239] transition-colors">
                  singrank.sg@gmail.com
                </a>
              </li>
              <li className="flex items-start">
                <FiPhone className="mt-0.5 mr-2 text-[#d13239]" />
                <a href="tel:+65666999" className="text-gray-600 hover:text-[#d13239] transition-colors">
                  +65 666 999
                </a>
              </li>
            </ul>
          </motion.div>
          
          {/* Services */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="space-y-4"
          >
            <h3 className="text-sm font-semibold text-gray-800 uppercase tracking-wider">Services</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-sm text-gray-600 hover:text-[#d13239] transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
          
          {/* Company */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="space-y-4"
          >
            <h3 className="text-sm font-semibold text-gray-800 uppercase tracking-wider">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-sm text-gray-600 hover:text-[#d13239] transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
          
          {/* Legal */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="space-y-4"
          >
            <h3 className="text-sm font-semibold text-gray-800 uppercase tracking-wider">Legal</h3>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-sm text-gray-600 hover:text-[#d13239] transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            
            {/* Social Links */}
            <div className="pt-2">
              <h3 className="text-sm font-semibold text-gray-800 uppercase tracking-wider mb-3">Connect</h3>
              <div className="flex space-x-3">
                {footerLinks.social.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-gray-500 hover:text-[#d13239] transition-colors p-2 rounded-full hover:bg-gray-100"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="sr-only">{item.name}</span>
                    {item.icon}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Copyright Bar */}
      <div className="bg-gray-100 border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-xs text-gray-500">
            © {currentYear} SingRank. All rights reserved.
          </p>
          
          <div className="flex items-center mt-2 sm:mt-0">
            <FiGlobe className="h-3 w-3 text-gray-400 mr-1" />
            <span className="text-xs text-gray-500">Singapore</span>
          </div>
        </div>
      </div>
    </footer>
  );
} 