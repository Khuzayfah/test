'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-[#0a0a0a] to-[#262626]">
      <div className="relative w-full max-w-xl mx-auto p-8 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center"
        >
          <motion.div 
            className="mb-8 text-5xl font-bold"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <span className="text-white">SING</span>
            <span className="text-[#d13239]">RANK</span>
          </motion.div>
          
          <div className="relative h-2 w-64 bg-white/10 rounded-full overflow-hidden mb-6">
            <motion.div 
              className="absolute top-0 left-0 h-full bg-gradient-to-r from-[#d13239] to-[#ff4555] rounded-full"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ 
                duration: 2, 
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "loop",
              }}
            />
          </div>
          
          <motion.p 
            className="text-white/80 text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Loading About Page...
          </motion.p>
        </motion.div>
        
        <div className="mt-12 grid grid-cols-3 gap-4">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 0.5, y: 0 }}
              transition={{ 
                delay: 0.7 + (i * 0.1), 
                duration: 0.8,
                repeat: Infinity,
                repeatType: "reverse",
                repeatDelay: 0.5
              }}
              className="h-24 rounded-lg bg-white/5"
            />
          ))}
        </div>
      </div>
    </div>
  );
} 