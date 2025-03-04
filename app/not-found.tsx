'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-900 px-6 py-24 sm:py-32 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mx-auto max-w-2xl text-center"
      >
        <p className="text-base font-semibold text-amber-500">404</p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-100 sm:text-5xl">Page not found</h1>
        <p className="mt-6 text-base leading-7 text-gray-300">
          Sorry, we couldn't find the page you're looking for.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <a
            href="/"
            className="rounded-md bg-gradient-to-r from-amber-500 to-amber-600 px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-lg hover:shadow-amber-500/20 hover:from-amber-400 hover:to-amber-500 transition-all duration-300"
          >
            Go back home
          </a>
          <a href="/contact" className="text-sm font-semibold text-amber-400 hover:text-amber-300 transition-all duration-300">
            Contact support <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </motion.div>
    </div>
  );
} 