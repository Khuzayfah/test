'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Hero() {
  const [animateBackground, setAnimateBackground] = useState(false);

  useEffect(() => {
    setAnimateBackground(true);
  }, []);

  return (
    <div className="relative isolate overflow-hidden">
      <motion.div 
        animate={{ 
          opacity: animateBackground ? [0.1, 0.2, 0.1] : 0.1,
          scale: animateBackground ? [1, 1.05, 1] : 1,
          rotate: animateBackground ? [0, 1, 0] : 0
        }}
        transition={{ 
          duration: 15, 
          repeat: Infinity, 
          repeatType: "reverse",
          ease: "easeInOut" 
        }}
        className="absolute inset-x-0 top-0 -z-10 transform-gpu overflow-hidden blur-3xl" 
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-amber-600 to-amber-300 opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </motion.div>

      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-base font-semibold leading-8 text-amber-400">Elevate Your Digital Presence</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Digital Marketing Excellence for Growing Businesses
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Drive growth, increase visibility, and connect with your audience through our comprehensive digital marketing solutions.
            </p>
          </motion.div>
          
          <motion.div 
            className="mt-10 flex items-center gap-x-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.8, 
              delay: 0.5,
              ease: [0.22, 1, 0.36, 1]
            }}
          >
            <Link
              href="/contact"
              className="rounded-md bg-gradient-to-r from-amber-500 to-amber-600 px-6 py-3 text-base font-semibold text-white shadow-sm hover:from-amber-600 hover:to-amber-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-600 transition-all duration-300 transform hover:scale-105"
            >
              Get Started
            </Link>
            <Link href="/services" className="text-base font-semibold leading-6 text-gray-300 hover:text-amber-300 transition-colors duration-300">
              Learn more <span aria-hidden="true">→</span>
            </Link>
          </motion.div>
        </div>
        
        <motion.div
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:mt-10 lg:max-w-none lg:grid-cols-12"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
        >
          <div className="relative lg:col-span-5 lg:-mr-8 xl:col-span-6">
            <div className="aspect-[3/2] w-full bg-gray-800/20 border border-gray-700 object-cover rounded-2xl lg:absolute lg:inset-0">
              <div className="h-full w-full flex items-center justify-center text-white bg-gradient-to-r from-gray-800/60 to-gray-900/70 rounded-2xl overflow-hidden">
                <div className="p-8 text-center relative z-10">
                  <h3 className="text-xl font-semibold text-amber-400 mb-4">Premium Digital Services</h3>
                  <p className="mb-6 text-gray-300">Customized strategies to elevate your brand and drive measurable results</p>
                  <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-amber-500/20 text-amber-400 mx-auto animate-pulse">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-7 xl:col-span-6">
            <div className="text-base leading-7 text-gray-300 p-6 rounded-lg border border-gray-700 bg-gray-800/30">
              <p>
                <strong className="font-semibold text-amber-400">Why choose us?</strong> Our agency brings together strategic thinking, creative excellence, and technical expertise to deliver outstanding results for our clients.
              </p>
              <ul role="list" className="mt-8 max-w-xl space-y-4 text-gray-300">
                <li className="flex gap-x-3">
                  <span className="text-amber-500" aria-hidden="true">✓</span>
                  <span>Data-driven strategies tailored to your business goals</span>
                </li>
                <li className="flex gap-x-3">
                  <span className="text-amber-500" aria-hidden="true">✓</span>
                  <span>Transparent reporting and clear communication</span>
                </li>
                <li className="flex gap-x-3">
                  <span className="text-amber-500" aria-hidden="true">✓</span>
                  <span>Continuous optimization for maximum ROI</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 