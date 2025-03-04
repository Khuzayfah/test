'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function CTA() {
  return (
    <section id="cta" className="relative isolate bg-gray-900">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div 
          className="absolute inset-0 -z-10 overflow-hidden"
          aria-hidden="true"
        >
          <div className="absolute top-0 right-0 h-full w-1/3 bg-gradient-to-bl from-amber-500/5 to-transparent opacity-30" />
          <div className="absolute bottom-0 left-0 h-full w-1/3 bg-gradient-to-tr from-amber-500/5 to-transparent opacity-30" />
        </div>

        <motion.div 
          className="mx-auto max-w-2xl border border-gray-700 rounded-3xl bg-gray-800/50 backdrop-blur-sm p-8 sm:p-10"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl text-center">
            Ready to Elevate Your Digital Presence?
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-300 text-center">
            Partner with us to develop a comprehensive digital strategy that drives real business results.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-500 to-amber-700 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
                <Link
                  href="/contact"
                  className="relative px-7 py-4 bg-gray-900 rounded-lg leading-none flex items-center divide-x divide-gray-600"
                >
                  <span className="flex items-center space-x-3">
                    <span className="text-amber-400 group-hover:text-amber-300 pr-2 text-base md:text-lg font-medium transition">Get Started Today</span>
                  </span>
                  <span className="pl-6 text-amber-300 group-hover:text-amber-200 transition">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                    </svg>
                  </span>
                </Link>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 