'use client';

/**
 * Elegant Login Page - Red and White Luxury Theme
 * 
 * A sophisticated login page design featuring premium styling elements:
 * - Luxury red and gold accents with elegant typography
 * - Subtle animations and micro-interactions
 * - Professional form inputs with validation
 * - Decorative elements that enhance the luxury feel
 */

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [currentYear, setCurrentYear] = useState('');

  // Set current year on client-side only
  useEffect(() => {
    setCurrentYear(new Date().getFullYear().toString());
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      // Handle successful login
      console.log('Login attempt with:', { email, password, rememberMe });
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col bg-luxury-white-pearl overflow-hidden relative">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-luxury-red-400/20 to-transparent rounded-bl-full z-0"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-luxury-red-400/10 to-transparent rounded-tr-full z-0"></div>
      
      {/* Luxury corner ornaments */}
      <div className="absolute top-0 left-0 w-24 h-24 pointer-events-none">
        <svg viewBox="0 0 100 100" className="w-full h-full text-luxury-gold-light/30">
          <path d="M0,0 L100,0 L100,10 L10,10 L10,100 L0,100 Z" fill="currentColor" />
        </svg>
      </div>
      <div className="absolute bottom-0 right-0 w-24 h-24 pointer-events-none">
        <svg viewBox="0 0 100 100" className="w-full h-full text-luxury-gold-light/30">
          <path d="M100,100 L0,100 L0,90 L90,90 L90,0 L100,0 Z" fill="currentColor" />
        </svg>
      </div>

      {/* Header with brand */}
      <header className="pt-8 px-6 z-10">
        <div className="container mx-auto">
          <Link href="/" className="inline-flex items-center group">
            <div className="mr-2 w-10 h-10 relative overflow-hidden bg-luxury-red-600 rounded-full flex items-center justify-center">
              <span className="text-white font-serif text-xl">S</span>
              <div className="absolute inset-0 bg-gradient-to-tr from-luxury-red-700 to-luxury-red-500 opacity-50"></div>
            </div>
            <div className="font-serif text-2xl font-bold text-luxury-red-700">
              SingRank<span className="text-luxury-gold-main">.</span>
            </div>
            <div className="ml-2 text-luxury-red-300 group-hover:text-luxury-red-600 transition-colors duration-300">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
              </svg>
            </div>
          </Link>
        </div>
      </header>

      <main className="flex-grow flex items-center justify-center p-6 z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-lg"
        >
          {/* Login card with luxury styling */}
          <div className="bg-white shadow-xl rounded-xl overflow-hidden border border-luxury-gold-light/20">
            {/* Decorative header */}
            <div className="h-3 bg-gradient-to-r from-luxury-red-600 via-luxury-gold-main to-luxury-red-600"></div>
            
            {/* Card content */}
            <div className="p-8">
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-luxury-red-50 mb-4">
                  <svg className="w-8 h-8 text-luxury-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                  </svg>
                </div>
                <h1 className="text-3xl font-serif font-bold text-luxury-red-700">Welcome Back</h1>
                <p className="text-luxury-gray-500 mt-2">Sign in to access your account</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-1">
                  <label htmlFor="email" className="block text-sm font-medium text-luxury-gray-700">Email Address</label>
                  <div className="relative rounded-md">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <svg className="h-5 w-5 text-luxury-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"></path>
                      </svg>
                    </div>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="block w-full pl-10 pr-3 py-3 border border-luxury-red-200 rounded-md focus:ring-2 focus:ring-luxury-red-500 focus:border-luxury-red-500 text-luxury-gray-700 bg-white transition-all duration-200"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <div className="flex items-center justify-between">
                    <label htmlFor="password" className="block text-sm font-medium text-luxury-gray-700">Password</label>
                    <Link href="/forgot-password" className="text-sm text-luxury-red-600 hover:text-luxury-red-800 transition-colors duration-200 font-medium">
                      Forgot password?
                    </Link>
                  </div>
                  <div className="relative rounded-md">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <svg className="h-5 w-5 text-luxury-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                      </svg>
                    </div>
                    <input
                      id="password"
                      name="password"
                      type="password"
                      autoComplete="current-password"
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="block w-full pl-10 pr-3 py-3 border border-luxury-red-200 rounded-md focus:ring-2 focus:ring-luxury-red-500 focus:border-luxury-red-500 text-luxury-gray-700 bg-white transition-all duration-200"
                      placeholder="••••••••"
                    />
                  </div>
                </div>

                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="h-4 w-4 text-luxury-red-600 focus:ring-luxury-red-500 border-luxury-gray-300 rounded"
                  />
                  <label htmlFor="remember-me" className="ml-2 block text-sm text-luxury-gray-700">
                    Remember me
                  </label>
                </div>

                <div>
                  <button
                    type="submit"
                    disabled={isLoading}
                    className={`w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-md shadow-sm text-white bg-gradient-to-r from-luxury-red-600 to-luxury-red-700 hover:from-luxury-red-700 hover:to-luxury-red-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-luxury-red-500 transition-all duration-300 font-medium text-sm transform hover:-translate-y-0.5 ${
                      isLoading ? 'opacity-80 cursor-not-allowed' : ''
                    }`}
                  >
                    {isLoading ? (
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                    ) : null}
                    {isLoading ? 'Signing in...' : 'Sign in'}
                  </button>
                </div>
              </form>

              <div className="mt-8">
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-luxury-gray-200"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-4 bg-white text-luxury-gray-500">Or continue with</span>
                  </div>
                </div>

                <div className="mt-4 grid grid-cols-3 gap-3">
                  <button
                    type="button"
                    className="luxury-social-button"
                  >
                    <span className="sr-only">Sign in with Google</span>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"/>
                    </svg>
                  </button>
                  <button
                    type="button"
                    className="luxury-social-button"
                  >
                    <span className="sr-only">Sign in with Facebook</span>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                    </svg>
                  </button>
                  <button
                    type="button"
                    className="luxury-social-button"
                  >
                    <span className="sr-only">Sign in with LinkedIn</span>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </button>
                </div>
              </div>

              <div className="mt-8 text-center">
                <p className="text-sm text-luxury-gray-500">
                  Don't have an account?{' '}
                  <Link href="/register" className="font-medium text-luxury-red-600 hover:text-luxury-red-800 transition-colors duration-200">
                    Create one now
                  </Link>
                </p>
              </div>
            </div>
            
            {/* Decorative footer */}
            <div className="h-3 bg-gradient-to-r from-luxury-red-600 via-luxury-gold-main to-luxury-red-600"></div>
          </div>
          
          {/* Additional branding and trust indicators */}
          <div className="mt-6 text-center">
            <p className="text-xs text-luxury-gray-400">
              Luxury experience by{' '}
              <span className="font-serif font-medium text-luxury-red-600">SingRank</span>
              <span className="text-luxury-gold-main">.</span>
              {' '}All rights reserved &copy; {currentYear}
            </p>
            <div className="flex justify-center space-x-3 mt-3">
              <Link href="/privacy" className="text-xs text-luxury-gray-500 hover:text-luxury-red-600 transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-xs text-luxury-gray-500 hover:text-luxury-red-600 transition-colors duration-200">
                Terms of Service
              </Link>
              <Link href="/contact" className="text-xs text-luxury-gray-500 hover:text-luxury-red-600 transition-colors duration-200">
                Contact Us
              </Link>
            </div>
          </div>
        </motion.div>
      </main>
    </div>
  );
} 