/**
 * Elegant Footer Component - Red and White Luxury Theme
 * 
 * A sophisticated footer design with premium styling and brand elements.
 * Features luxurious red gradients, gold accents, and elegant typography.
 * Optimized for mobile with compact spacing and responsive layout.
 */

'use client';

import React from 'react';
import Link from 'next/link';

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
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-white relative overflow-hidden" aria-labelledby="footer-heading">
      {/* Decorative top border */}
      <div className="h-1 bg-gradient-to-r from-luxury-red-600 via-luxury-gold-main to-luxury-red-600"></div>
      
      {/* Decorative elements - hidden on mobile for compactness */}
      <div className="hidden sm:block absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-luxury-red-400/10 to-transparent rounded-bl-full"></div>
      <div className="hidden sm:block absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-luxury-red-400/5 to-transparent rounded-tr-full"></div>
      
      {/* Luxury corner ornaments - hidden on mobile */}
      <div className="hidden sm:block absolute top-10 left-10 w-16 h-16 pointer-events-none">
        <svg viewBox="0 0 100 100" className="w-full h-full text-luxury-gold-light/20">
          <path d="M0,0 L100,0 L100,10 L10,10 L10,100 L0,100 Z" fill="currentColor" />
        </svg>
      </div>
      <div className="hidden sm:block absolute bottom-10 right-10 w-16 h-16 pointer-events-none">
        <svg viewBox="0 0 100 100" className="w-full h-full text-luxury-gold-light/20">
          <path d="M100,100 L0,100 L0,90 L90,90 L90,0 L100,0 Z" fill="currentColor" />
        </svg>
      </div>
      
      <h2 id="footer-heading" className="sr-only">Footer</h2>
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 pb-4 sm:pb-8 pt-10 sm:pt-16 lg:px-8">
        {/* Mobile footer accordion */}
        <div className="lg:hidden mb-8 border-b border-luxury-gray-100 pb-6">
          <div className="flex justify-between items-center">
            <Link href="/" className="inline-flex items-center">
              <div className="mr-2 w-8 h-8 sm:w-10 sm:h-10 relative overflow-hidden bg-luxury-red-600 rounded-full flex items-center justify-center">
                <span className="text-white font-serif text-lg sm:text-xl">S</span>
                <div className="absolute inset-0 bg-gradient-to-tr from-luxury-red-700 to-luxury-red-500 opacity-50"></div>
              </div>
              <div className="font-serif text-xl sm:text-2xl font-bold text-luxury-red-700">
                SingRank<span className="text-luxury-gold-main">.</span>
              </div>
            </Link>
            
            <div className="flex space-x-3 sm:space-x-4">
              {footerNavigation.social.map((item) => (
                <a 
                  key={item.name} 
                  href={item.href} 
                  className="text-luxury-gray-400 hover:text-luxury-red-600 transition-colors duration-300"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon />
                </a>
              ))}
            </div>
          </div>
          
          <p className="text-xs sm:text-sm leading-5 sm:leading-6 text-luxury-gray-600 max-w-md mt-4">
            Premier SEO and digital marketing agency in Singapore specializing in search optimization and performance marketing.
          </p>
        </div>
        
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          {/* Brand and description - hidden on mobile as it's shown above */}
          <div className="hidden lg:block space-y-6">
            <Link href="/" className="inline-flex items-center">
              <div className="mr-2 w-10 h-10 relative overflow-hidden bg-luxury-red-600 rounded-full flex items-center justify-center">
                <span className="text-white font-serif text-xl">S</span>
                <div className="absolute inset-0 bg-gradient-to-tr from-luxury-red-700 to-luxury-red-500 opacity-50"></div>
              </div>
              <div className="font-serif text-2xl font-bold text-luxury-red-700">
                SingRank<span className="text-luxury-gold-main">.</span>
              </div>
            </Link>
            <p className="text-sm leading-6 text-luxury-gray-600 max-w-md">
              Premier SEO and digital marketing agency in Singapore specializing in search optimization and performance marketing.
            </p>
            <div className="flex space-x-6">
              {footerNavigation.social.map((item) => (
                <a 
                  key={item.name} 
                  href={item.href} 
                  className="text-luxury-gray-400 hover:text-luxury-red-600 transition-colors duration-300"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon />
                </a>
              ))}
            </div>
          </div>
          
          {/* Navigation sections */}
          <div className="grid grid-cols-2 gap-x-4 gap-y-8 sm:gap-8 sm:mt-4 xl:col-span-3 lg:col-span-2 xl:mt-0 lg:grid-cols-4">
            <div>
              <h3 className="text-xs sm:text-sm font-serif font-bold leading-6 text-luxury-red-700">Services</h3>
              <ul role="list" className="mt-3 sm:mt-4 space-y-2 sm:space-y-3">
                {footerNavigation.services.map((item) => (
                  <li key={item.name}>
                    <a href={item.href} className="text-xs sm:text-sm leading-5 sm:leading-6 text-luxury-gray-500 hover:text-luxury-red-600 transition duration-300 ease-in-out">
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xs sm:text-sm font-serif font-bold leading-6 text-luxury-red-700">Company</h3>
              <ul role="list" className="mt-3 sm:mt-4 space-y-2 sm:space-y-3">
                {footerNavigation.company.map((item) => (
                  <li key={item.name}>
                    <a href={item.href} className="text-xs sm:text-sm leading-5 sm:leading-6 text-luxury-gray-500 hover:text-luxury-red-600 transition duration-300 ease-in-out">
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xs sm:text-sm font-serif font-bold leading-6 text-luxury-red-700">Legal</h3>
              <ul role="list" className="mt-3 sm:mt-4 space-y-2 sm:space-y-3">
                {footerNavigation.legal.map((item) => (
                  <li key={item.name}>
                    <a href={item.href} className="text-xs sm:text-sm leading-5 sm:leading-6 text-luxury-gray-500 hover:text-luxury-red-600 transition duration-300 ease-in-out">
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xs sm:text-sm font-serif font-bold leading-6 text-luxury-red-700">Contact</h3>
              <ul role="list" className="mt-3 sm:mt-4 space-y-2 sm:space-y-3">
                <li>
                  <a href="mailto:info@singrank.sg" className="text-xs sm:text-sm leading-5 sm:leading-6 text-luxury-gray-500 hover:text-luxury-red-600 transition duration-300 ease-in-out">
                    info@singrank.sg
                  </a>
                </li>
                <li>
                  <a href="tel:+65-1234-5678" className="text-xs sm:text-sm leading-5 sm:leading-6 text-luxury-gray-500 hover:text-luxury-red-600 transition duration-300 ease-in-out">
                    +65 1234 5678
                  </a>
                </li>
                <li className="text-xs sm:text-sm leading-5 sm:leading-6 text-luxury-gray-500">
                  Marina Bay<br className="hidden sm:inline" /> Singapore
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Newsletter subscription - simplified on mobile */}
        <div className="mt-8 sm:mt-16 border-t border-luxury-gray-100 pt-6 sm:pt-8 flex flex-col lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-md mb-4 lg:mb-0">
            <h3 className="text-xs sm:text-sm font-serif font-bold leading-6 text-luxury-red-700">
              Subscribe to our newsletter
            </h3>
            <p className="mt-1 sm:mt-2 text-xs sm:text-sm leading-5 sm:leading-6 text-luxury-gray-500">
              Stay updated with the latest SEO trends and tips.
            </p>
          </div>
          <form className="flex gap-x-2 sm:gap-x-4 w-full lg:w-auto max-w-md">
            <label htmlFor="email-address" className="sr-only">
              Email address
            </label>
            <input
              id="email-address"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="min-w-0 flex-auto rounded-md border border-luxury-red-200 bg-white px-2 sm:px-3.5 py-1.5 sm:py-2 text-xs sm:text-sm text-luxury-gray-700 shadow-sm focus:ring-2 focus:ring-luxury-red-500 focus:border-luxury-red-500 leading-5 sm:leading-6"
              placeholder="Enter your email"
            />
            <button
              type="submit"
              className="rounded-md bg-gradient-to-r from-luxury-red-600 to-luxury-red-700 px-2.5 sm:px-3.5 py-1.5 sm:py-2.5 text-xs sm:text-sm font-medium text-white shadow-sm hover:from-luxury-red-700 hover:to-luxury-red-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-luxury-red-500 transition-all duration-300 transform hover:-translate-y-0.5"
            >
              Subscribe
            </button>
          </form>
        </div>
        
        {/* Copyright and legal links - simplified for mobile */}
        <div className="mt-6 sm:mt-8 border-t border-luxury-gray-100 pt-4 sm:pt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs leading-5 text-luxury-gray-400 text-center sm:text-left">
            &copy; {currentYear} SingRank<span className="text-luxury-gold-main">.</span> All rights reserved.
          </p>
          <div className="mt-2 sm:mt-0 flex justify-center sm:justify-start space-x-4 sm:space-x-6">
            <a href="/terms" className="text-xs leading-5 text-luxury-gray-400 hover:text-luxury-red-600 transition-colors duration-300">
              Terms
            </a>
            <a href="/privacy" className="text-xs leading-5 text-luxury-gray-400 hover:text-luxury-red-600 transition-colors duration-300">
              Privacy
            </a>
            <a href="/cookies" className="text-xs leading-5 text-luxury-gray-400 hover:text-luxury-red-600 transition-colors duration-300">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
} 