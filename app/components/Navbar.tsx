'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

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

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'glass-effect shadow-lg border-b border-amber-900/30 py-2' : 'bg-transparent py-4'}`}>
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5 transition-transform duration-300 hover:scale-105">
            <span className="text-xl md:text-2xl font-bold bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent gold-shimmer">SingRank</span>
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-amber-400 hover:bg-gray-800/70 transition-all duration-300 hover:rotate-3 touch-manipulation"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <span className="text-2xl transform transition-transform duration-300" aria-hidden="true">☰</span>
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item, index) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-semibold leading-6 text-gray-100 hover:text-amber-400 transition-all duration-300 relative group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <span className="relative z-10 luxury-entrance">{item.name}</span>
              <span className="absolute -bottom-1.5 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-500 to-amber-400 transition-all group-hover:w-full duration-300 opacity-0 group-hover:opacity-100"></span>
            </Link>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link
            href="/login"
            className="text-sm font-semibold leading-6 text-white bg-gradient-to-r from-amber-600 to-amber-500 px-4 py-2 rounded-md hover:shadow-lg hover:shadow-amber-900/20 hover:-translate-y-0.5 transition-all duration-300 border border-amber-600/30 gold-shimmer"
          >
            Log in
          </Link>
        </div>
      </nav>
      {/* Mobile menu */}
      <div 
        className={`lg:hidden ${mobileMenuOpen ? 'fixed inset-0 z-50' : 'hidden'}`}
        onClick={() => setMobileMenuOpen(false)}
      >
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300" aria-hidden="true" />
        <div 
          className={`fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gray-900/95 backdrop-blur-md px-4 py-4 sm:max-w-sm sm:ring-1 sm:ring-amber-900/20 border-l border-amber-900/20 transform transition-transform duration-500 ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5" onClick={() => setMobileMenuOpen(false)}>
              <span className="text-xl font-bold bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">SingRank</span>
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-amber-400 hover:bg-gray-800 transition-all duration-300 hover:rotate-90 touch-manipulation"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <span className="text-2xl" aria-hidden="true">✕</span>
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-amber-900/20">
              <div className="space-y-2 py-6 stagger-fade">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block rounded-lg px-4 py-3.5 text-base font-semibold leading-7 text-gray-300 hover:bg-gray-800/70 hover:text-amber-400 transition-all duration-300 touch-manipulation hover:pl-6"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className="py-6">
                <Link
                  href="/login"
                  className="block rounded-lg px-4 py-3.5 text-base font-semibold leading-7 text-white bg-gradient-to-r from-amber-600 to-amber-500 hover:shadow-md transition-all duration-300 text-center touch-manipulation border border-amber-600/30 gold-shimmer scale-animation"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Log in
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
} 